const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const fetch = require('node-fetch')
const { faunaFetch } = require('./utils/fauna')

exports.handler = async (request, context) => {
  try {
    // make sure this event was sent legitimately.
    const stripeEvent = stripe.webhooks.constructEvent(
      request.body,
      request.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    )

    // bail if this is not a subscription update event
    if (stripeEvent.type !== 'customer.subscription.updated') return

    const subscription = stripeEvent.data.object

    const result = await faunaFetch({
      query: `
          query ($stripeID: ID!) {
            getUserByStripeID(stripeID: $stripeID) {
              netlifyID
            }
          }
        `,
      variables: {
        stripeID: subscription.customer,
      },
    })

    const { netlifyID } = result.data.getUserByStripeID

    // take the first word of the plan name and use it as the role
    const plans = {
      free: 'price_1I65BfLO1grUNTcZlpuvRN3k',
      premium: 'price_1I65D1LO1grUNTcZGMfMe1Ri',
      // pro: {
      //     monthly: 'price_1HevLCKQ4Xdl21WJ5EqLoDds',
      //     yearly: 'price_1HevLTKQ4Xdl21WJLOI4gldz',
      // },
      // premium: {
      //     monthly: 'price_1HevLfKQ4Xdl21WJeBsU4Fvt',
      //     yearly: 'price_1HevLsKQ4Xdl21WJaoQWEjCJ',
      // },
    }

    let role = ''

    for (const plan in plans) {
      if (plans[plan] === subscription.items.data[0].plan.id) {
        role = plan
      }
    }

    // const plan = subscription.items.data[0].plan.nickname;
    // const role = plan.split(' ')[0].toLowerCase();

    // send a call to the Netlify Identity admin API to update the user role
    const { identity } = context.clientContext
    await fetch(`${identity.url}/admin/users/${netlifyID}`, {
      method: 'PUT',
      headers: {
        // note that this is a special admin token for the Identity API
        Authorization: `Bearer ${identity.token}`,
      },
      body: JSON.stringify({
        app_metadata: {
          roles: [role],
        },
      }),
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    }
  }
}
