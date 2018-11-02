<template>
  <transition :name="currentTransition">
    <div v-if="shouldRender" class="c_popup c_popup--top" :class="'c_popup--'+position" v-show="value">
      <slot />
    </div>
  </transition>
</template>

<script>
import Popup from './mixins'
export default {
  name: 'nx-popup',
  mixins: [Popup],
  props: {
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentTransition() {
      return (
        this.transition ||
        (this.position === '' || this.position === 'center' ? 'fade' : `popup-slide-${this.position}`)
      )
    }
  }
}
</script>
<style lang="less">
.c_popup {
  position: fixed;
  top: 50%;
  left: 50%;
  max-height: 100%;
  overflow-y: auto;
  background-color: #fff;
  transition: 0.3s ease-out;
  -webkit-overflow-scrolling: touch;
  transform: translate3d(-50%, -50%, 0);
  &--top {
    width: 100%;
    top: 0;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }

  &--right {
    top: 50%;
    right: 0;
    bottom: auto;
    left: auto;
    transform: translate3d(0, -50%, 0);
  }

  &--bottom {
    width: 100%;
    top: auto;
    bottom: 0;
    right: auto;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }

  &--left {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 0;
    transform: translate3d(0, -50%, 0);
  }
  &--center {
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
}

.popup-slide-top-enter,
.popup-slide-top-leave-active {
  transform: translate3d(-50%, -100%, 0);
}

.popup-slide-right-enter,
.popup-slide-right-leave-active {
  transform: translate3d(100%, -50%, 0);
}

.popup-slide-bottom-enter,
.popup-slide-bottom-leave-active {
  transform: translate3d(-50%, 100%, 0);
}

.popup-slide-left-enter,
.popup-slide-left-leave-active {
  transform: translate3d(-100%, -50%, 0);
}
</style>
