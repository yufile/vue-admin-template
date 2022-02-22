<template>
  <div class="popup" :style="{top: top}">
    <div class="popup-a" :style="{width: width,height:height,background: bgColor, borderRadius: borderRadius }">
      <span>{{ title }}</span>
      <span>
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '300px'
    },
    height: {
      type: String,
      default: '100px'
    },
    bgColor: {
      type: String,
      default: 'rgba(0,0,0,0.5)'
    },
    borderRadius: {
      type: String,
      default: '15px'
    },
    top: {
      type: String,
      default: '100px'
    }
  }
}
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);

  .popup-a {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}
</style>
