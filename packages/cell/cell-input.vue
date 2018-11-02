<template>
  <div class="c_cell-wrapper">
    <div class="c_cell-input-box">
      <div class="c_cell-title" v-if="title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="c_cell-field">
        <sup class="c_cell-required" v-if="required">*</sup>
        <input :type="type" class="c_cell-input-field" :placeholder="placeholder" :disabled="disabled" :value="value" @input="handleInput" :maxlength="maxlength">
        <div class="c_cell-right-icon">
          <nx-icon v-if="clear && value" class="c_cell-clear" :name="clearName" @click.native="handleClear"></nx-icon>
          <nx-icon v-if="eye" class="c_cell-eye" :name="eyeName" @click.native="changeEye"></nx-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nx-cell-input',
  props: {
    value: {
      type: [String, Number]
    },
    title: {
      type: String
    },
    type: {
      type: String
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    currency: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [String, Number]
    },
    eye: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      eyeName: 'icon-yanjing',
      clearName: 'icon-qingchu'
    }
  },
  methods: {
    handleInput(e) {
      var value = e.target.value
      if (this.currency) {
        e.target.value = e.target.value.replace(/[^\d.]/g, '') // 清除“数字”和“.”以外的字符
        e.target.value = e.target.value.replace(/\.{2,}/g, '.') // 只保留第一个. 清除多余的
        e.target.value = e.target.value
          .replace('.', '$#$')
          .replace(/\./g, '')
          .replace('$#$', '.')
        e.target.value = e.target.value.replace(
          /^(-)*(\d+)\.(\d\d).*$/,
          '$1$2.$3'
        ) // 只能输入两个小数
        if (e.target.value.indexOf('.') < 0 && e.target.value !== '') {
          // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
          e.target.value = parseFloat(e.target.value)
        }
        // e.target.value = e.target.value.replace(/[^\d]/g, '')
        if (Number(e.target.value) > this.maxValue) {
          e.target.value = this.maxValue
        }
        this.$emit('input', e.target.value)
      } else {
        if (e.target.value.length > Number(this.maxlength)) {
          e.target.value = e.target.value.slice(0, this.maxlength)
          this.$emit('input', e.target.value.slice(0, this.maxlength))
        } else {
          this.$emit('input', value)
        }
      }
    },
    changeEye() {
      if (this.eyeName === 'icon-yanjing') {
        this.eyeName = 'icon-zhengyan'
        this.type = 'text'
      } else {
        this.eyeName = 'icon-yanjing'
        this.type = 'password'
      }
    },
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

  .c_cell-input-box {
    display: flex;
    .borderB();
  }
  .c_cell-title {
    line-height: @cell-height;
  }
  .c_cell-field {
    position: relative;

    flex: 1;
    .c_cell-required {
      position: absolute;
      left: 0;
      top: 0;
      line-height: @cell-height;
      color: @reqired-color;
    }
    .c_cell-input-field {
      box-sizing: border-box;
      line-height: @cell-height;
      outline: none;
      border: none;
      height: 50px;
      width: 100%;
      padding: 0;
      background: transparent;
      font-size: 18px;
      font-weight: 500;
      padding: 10px;
      color: #333;
      line-height: normal;
    }
    .c_cell-right-icon {
      position: absolute;
      top: 0;
      right: 0;
    }
    .c_cell-clear,
    .c_cell-eye {
      height: @cell-height;
      line-height: @cell-height;
      padding: 0 10px;
      color: #c7c7c7;
    }
  }
}
</style>