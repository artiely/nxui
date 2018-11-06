<template>
  <div class="cb-cell-group" :class="{'cb-cell-group-border':border}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'nx-cell-group',
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="less">
@import './var';
// group
.cb-cell-group {
  background: #fff;
  overflow: hidden;
}
.cb-cell-group-border {
  border-top:1px solid @cell-border-color;/*no*/
  border-bottom:1px solid @cell-border-color;/*no*/
}
</style>
