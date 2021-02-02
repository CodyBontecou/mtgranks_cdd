<template>
  <div class="font-medium text-xs">
    <div
      class="relative rounded p-2 flex flex-row-reverse bg-white items-center justify-center shadow-2xl hover:shadow-lg border border-ash border-opacity-25 cursor-pointer"
    >
      <div class="self-end" @click="filters.isExpanded = !filters.isExpanded">
        <button
          class="flex items-center justify-between focus:outline-none hover:opacity-75 opacity-50"
          :class="{
            'opacity-100': filters.isExpanded,
          }"
        >
          {{ $t('filters') }}
          <RightArrow
            class="h-4 w-4 ml-1 transform transition-transform duration-150 ease-in-out"
            :class="{
              'rotate-90': filters.isExpanded,
              'rotate-0': !filters.isExpanded,
            }"
          />
        </button>
      </div>

      <div v-if="filters.isExpanded" class="focus:outline-none flex">
        <div
          v-for="(child, childIndex) in filters.children"
          :key="`child-${childIndex + 1}`"
          class="mr-6 flex flex-col-reverse"
        >
          <button
            class="flex items-center justify-between hover:opacity-75 opacity-50 focus:outline-none"
            :class="{
              'opacity-100': child.isExpanded,
            }"
            @click="child.isExpanded = !child.isExpanded"
          >
            {{ child.name }}
            <RightArrow
              class="h-4 w-4 ml-1 -mr-1 transform transition-transform duration-150 ease-in-out hover:opacity-75 opacity-50"
              :class="{
                'opacity-100 -rotate-90': child.isExpanded,
                'rotate-0': !child.isExpanded,
              }"
            />
          </button>
          <div v-if="child.isExpanded" class="flex flex-col">
            <label
              v-for="(option, optionIndex) in child.options"
              :key="`child-${childIndex + 1}-option-${optionIndex + 1}`"
              class="flex items-center justify-between cursor-pointer font-normal hover:opacity-100 opacity-75"
              :class="{
                'mb-3': optionIndex !== child.options.length - 1,
                'opacity-50': option.isChecked === false,
              }"
            >
              <span
                class="mr-2"
                :class="{
                  'opacity-50': option.isChecked === false,
                }"
              >
                {{ option.label }}
              </span>
              <input
                v-model="option.isChecked"
                type="checkbox"
                class="flex-shrink-0 cursor-pointer form-checkbox text-charcoal border-charcoal hover:opacity-75 opacity-50"
                @click="$emit('filterToggled', option)"
              />
            </label>
            <div class="my-2 border-t border-ash rounded opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        isExpanded: false,
        children: [
          {
            name: 'Colors',
            isExpanded: false,
            options: [
              { label: 'Red', isChecked: true, filterType: 'color' },
              { label: 'Green', isChecked: true, filterType: 'color' },
              { label: 'Blue', isChecked: true, filterType: 'color' },
              { label: 'Black', isChecked: true, filterType: 'color' },
              { label: 'White', isChecked: true, filterType: 'color' },
              { label: 'Colorless', isChecked: true, filterType: 'color' },
              { label: 'Multi', isChecked: true, filterType: 'color' },
            ],
          },
          {
            name: 'Sets',
            isExpanded: false,
            options: [
              {
                name: 'Kaldheim',
                code: 'KHM',
                icon:
                  'https://c2.scryfall.com/file/scryfall-symbols/sets/khm.svg',
                cardCount: '220',
                color: 'black-gold',
                type: 'new',
                slug: 'kaldheim',
                isChecked: true,
                label: 'KHM',
                filterType: 'set',
              },
              {
                name: 'Zendikar Rising',
                code: 'ZNR',
                icon:
                  'https://c2.scryfall.com/file/scryfall-symbols/sets/znr.svg',
                cardCount: '220',
                color: 'black-gold',
                type: 'new',
                slug: 'zendikar-rising',
                isChecked: false,
                label: 'ZNR',
                filterType: 'set',
              },
              {
                name: 'Ikoria: Lair of Behemoths',
                code: 'IKO',
                icon:
                  'https://c2.scryfall.com/file/scryfall-symbols/sets/iko.svg',
                cardCount: '264',
                color: 'orange-red',
                type: 'new',
                slug: 'ikoria-lair-of-behemoths',
                isChecked: false,
                label: 'IKO',
                filterType: 'set',
              },
              {
                name: 'Core 2021',
                code: 'M21',
                icon:
                  'https://c2.scryfall.com/file/scryfall-symbols/sets/m21.svg',
                cardCount: '264',
                color: 'black-green',
                type: 'new',
                slug: 'core-2021',
                isChecked: false,
                label: 'M21',
                filterType: 'set',
              },
              {
                name: 'Theros Beyond Death',
                code: 'THB',
                icon:
                  'https://c2.scryfall.com/file/scryfall-symbols/sets/thb.svg',
                cardCount: '220',
                color: 'ash',
                type: 'old',
                slug: 'theros-beyond-death',
                isChecked: false,
                label: 'THB',
                filterType: 'set',
              },
              {
                name: 'Throne of Eldraine',
                code: 'ELD',
                icon:
                  'https://c2.scryfall.com/file/scryfall-symbols/sets/eld.svg',
                cardCount: '264',
                color: 'teal',
                type: 'old',
                slug: 'throne-of-eldraine',
                isChecked: false,
                label: 'ELD',
                filterType: 'set',
              },
              {
                name: 'Core 2020',
                code: 'M20',
                icon:
                  'https://c2.scryfall.com/file/scryfall-symbols/sets/m20.svg',
                cardCount: '264',
                color: 'mandarin',
                type: 'old',
                slug: 'core-2020',
                isChecked: false,
                label: 'M20',
                filterType: 'set',
              },
              {
                name: 'War of the Spark',
                code: 'WAR',
                icon:
                  'https://c2.scryfall.com/file/scryfall-symbols/sets/war.svg',
                cardCount: '264',
                color: 'peach',
                type: 'old',
                slug: 'war-of-the-spark',
                isChecked: false,
                label: 'WAR',
                filterType: 'set',
              },
            ],
          },
        ],
      },
    }
  },
}
</script>
