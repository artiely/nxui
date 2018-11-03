<template>
    <div class="v-spinner" v-show="loading">
        <div class="v-rise v-rise-odd" v-bind:style="spinnerStyle">
        </div>
        <div class="v-rise v-rise-even" v-bind:style="spinnerStyle">
        </div>
        <div class="v-rise v-rise-odd" v-bind:style="spinnerStyle">
        </div>
        <div class="v-rise v-rise-even" v-bind:style="spinnerStyle">
        </div>
        <div class="v-rise v-rise-odd" v-bind:style="spinnerStyle">
        </div>
    </div>
</template>

<script>
export default {
  name: 'nx-rise-loader',

  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#5dc596'
    },
    size: {
      type: String,
      default: '15px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      spinnerStyle: {
        backgroundColor: this.color,
        height: this.size,
        width: this.size,
        margin: this.margin,
        borderRadius: this.radius
      }
    }
  }
}
</script>

<style>
.v-spinner {
  /*	  font-size: 10px; 

    width: 60px;
    height: 40px;*/
  /*margin: 25px auto;*/
  text-align: center;
}

.v-spinner .v-rise-odd {
  -webkit-animation: v-riseOddDelay 1s 0s infinite
    cubic-bezier(0.15, 0.46, 0.9, 0.6);
  animation: v-riseOddDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  display: inline-block;
}

.v-spinner .v-rise-even {
  -webkit-animation: v-riseEvenDelay 1s 0s infinite
    cubic-bezier(0.15, 0.46, 0.9, 0.6);
  animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  display: inline-block;
}

@-webkit-keyframes v-riseOddDelay {
  25 {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
  0% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  75% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  100% {
    -webkit-transform: translateY(0) scale(0.75);
    transform: translateY(0) scale(0.75);
  }
}

@keyframes v-riseOddDelay {
  25 {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
  0% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  75% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  100% {
    -webkit-transform: translateY(0) scale(0.75);
    transform: translateY(0) scale(0.75);
  }
}

@-webkit-keyframes v-riseEvenDelay {
  25 {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  50% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  75% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
  100% {
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
  }
}

@keyframes v-riseEvenDelay {
  25 {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  50% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  75% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
  100% {
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
  }
}
</style>