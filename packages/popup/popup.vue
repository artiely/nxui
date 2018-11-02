<template>
  <div>
    <nx-mask v-model="value">
      <transition :name="transition">
        <div class="c_popup-box" @click.self="close" v-show="value" :class="[transition]">
          <slot/>
        </div>
      </transition>
    </nx-mask>
  </div>
</template>

<script>
import nxMask from './mask'
export default {
  name: 'nx-popup2',
  components: {
    nxMask
  },
  props: {
    position: {
      type: String,
      default: 'bottom'
    },
    value: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default() {
        switch (this.position) {
          case 'bottom':
            return 'slide-up'
          /* istanbul ignore next */
          case 'top':
            return 'slide-down'
          /* istanbul ignore next */
          case 'left':
            return 'slide-right'
          /* istanbul ignore next */
          case 'right':
            return 'slide-left'
          default:
            return 'fade'
        }
      }
    }
  },
  methods: {
    close() {
      this.$emit('input', false)
    }
  }
}
</script>

<style >
.c_popup-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  transition: all 0.3s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to,
.fade-leave-active {
  opacity: 0;
}
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active,
.bottom .show {
  transform: translateY(0);
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(70%);
}
.slide-up-leave-active {
  transform: translateY(100%);
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-70%);
}
.slide-down-leave-active {
  transform: translateY(-100%);
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transform: translateX(0);
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(70%);
}
.slide-left-leave-active {
  transform: translateX(100%);
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(-70%);
}
.slide-right-leave-active {
  transform: translateX(-100%);
}
</style>