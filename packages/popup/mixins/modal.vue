<template>
  <transition name="fade">
    <div v-show="visible" class="c_modal" :class="className" :style="style" @touchmove.prevent.stop @click="$emit('click', $event)" />
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },
  computed: {
    style() {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      }
    }
  }
}
</script>
<style>
.c_overflow-hidden {
  overflow: hidden;
  height: 100%;
}
.c_modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
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
</style>
