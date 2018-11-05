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
@border-color:#333;
.cb-cell-group {
  background: #fff;
  overflow: hidden;
}
.cb-cell-group-border {
  // .borderTB()
  border-top:1px solid @border-color;/*no*/
  border-bottom:1px solid @border-color;/*no*/
}
</style>
