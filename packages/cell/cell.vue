<template>
  <div class="c_cell-wrapper">
    <div class="c_cell-text-box">
      <slot>
        <div class="c_cell-title" v-if="title">
          <slot name="title">{{title}}</slot>
        </div>
        <div class="c_cell-field">
          <slot name="text">
            <sup class="c_cell-required" v-if="required">*</sup>
            <div class="c_cell-text-field" :class="{'c_cell-placeholder':!text,'c_cell-wrap': wrap}">
              <span class="c_cell-text-inner">{{finalText}}</span>
            </div>
            <div class="c_cell-right-link">
              <nx-icon v-if="link" class="c_cell-link" :name="linkName" @click.native="handleClear"></nx-icon>
            </div>
          </slot>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nx-cell',
  props: {
    value: {
      type: [String, Number]
    },
    title: {
      type: String
    },
    text: {
      type: String
    },
    wrap: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    link: {
      type: [Boolean, String],
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    linkName() {
      if (typeof this.link === 'string') {
        return this.link
      } else {
        return 'icon-v-icon-arrow-left-copy'
      }
    },
    finalText() {
      return this.text ? this.text : this.placeholder
    }
  },
  methods: {
    handleClear() {
      this.$emit('input', '')
    }
  }
}
</script>

<style scoped lang="less">
@cell-height: 50px;
@reqired-color: red;
.c_cell-wrapper {
  position: relative;
  overflow: hidden;
  padding-left: 15px;
  margin-bottom: -1px;
  min-height: @cell-height;
  font-size: 18px;
  .c_cell-text-box {
    display: flex;
    .borderB();
  }
  .c_cell-title {
    line-height: @cell-height;
  }
  .c_cell-field {
    position: relative;
    flex: 1;
    display: flex;
    .c_cell-required {
      position: absolute;
      left: 0;
      top: 0;
      line-height: @cell-height;
      color: @reqired-color;
    }
    .c_cell-text-field {
      flex: 1;
      box-sizing: border-box;
      line-height: @cell-height;
      outline: none;
      border: none;
      height: 50px;
      width: 100%;
      background: transparent;
      font-size: 18px;
      font-weight: 500;
      padding-left: 10px;
      color: #333;
      line-height: @cell-height;
      text-align: right;
      width: 100px;
      // .textover1();
      &.c_cell-placeholder {
        color: #c7c7c7;
      }
      &.c_cell-wrap {
        height: auto !important;
        line-height: 1.5;
        padding: 10px 0;
        .c_cell-text-inner {
          text-align: left;
          padding-left: 5px;
          min-height: 30px;
          display: inline-block;
          text-align: justify;
          text-justify: inter-ideograph;
        }
      }
    }
    .c_cell-right-link {
      min-width: 10px;
    }
    .c_cell-link {
      height: @cell-height;
      line-height: @cell-height;
      color: #c7c7c7;
      padding-right: 5px;
    }
  }
}
</style>