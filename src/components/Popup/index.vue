<template>
  <transition name="popup">
    <div v-show="isShow" class="popup" @click.self="closePopup">
      <div class="popup-frame" :style="{width: width, top: top}">
        <div class="popup-title">
          <span>{{ title }}</span>
          <button class="popup-close" @click="closePopup">
            <span>x</span>
          </button>
        </div>
        <div class="popup-content">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="popup-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '100px'
    }
  },
  methods: {
    closePopup() {
      this.$emit('update:isShow', false)
    }
  }
}
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  .popup-frame {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    box-sizing: border-box;

    .popup-title {
      padding: 20px 15px 10px;
      font-size: 18px;
      line-height: 24px;

      .popup-close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        border: 0;
        cursor: pointer;
      }
    }
    .popup-content {
      padding: 10px 15px 20px;
      word-break: break-all;
      color: #606266;
      font-size: 14px;
    }

    .popup-footer {
      padding: 0 15px 10px;
      text-align: right;
      box-sizing: border-box;
    }
  }
}
.popup-enter-active {
  animation: popup .3s linear;
}
.popup-leave-active {
  animation: popup .3s reverse;
}
@keyframes popup {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
