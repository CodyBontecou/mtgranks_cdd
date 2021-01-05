<template>
  <div class="loading-screen" :class="classes">
    <div>
      <div class="loading-circle"></div>
      <p class="loading-text">{{ text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 'Loading',
      dark: false,
      classes: null,
      loading: false,
      background: null,
      customLoader: null,
    }
  },
}
</script>
<style scoped>
.loading-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 300;
  flex-direction: column;
  user-select: none;
}
.loading-circle {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid transparent;
  border-left-color: #ababab;
  animation: circleanimation 0.45s linear infinite;
}
.loading-text {
  margin-top: 15px;
  color: #808080;
  font-size: 12px;
  text-align: center;
}
@keyframes circleanimation {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
