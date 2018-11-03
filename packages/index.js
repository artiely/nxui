// 导入颜色选择器组件
import nxButton from './button'
import nxIcon from './icon'
import nxHeader from './header'
import nxTag from './tag'
import nxCellGroup from './cell/cell-group'
import nxCellInput from './cell/cell-input'
import nxPopup from './popup'
import nxCell from './cell/cell'
// import nxPopup2 from './popup/popup'
// import nxPopup3 from './popup/popup3'
// import nxMask from './popup/mask'

import {
  nxPulseLoader,
  nxGridLoader,
  nxClipLoader,
  nxRiseLoader,
  nxBeatLoader,
  nxSyncLoader,
  nxRotateLoader,
  nxFadeLoader,
  nxPacmanLoader,
  nxSquareLoader,
  nxScaleLoader,
  nxSkewLoader,
  nxMoonLoader,
  nxRingLoader,
  nxBounceLoader,
  nxDotLoader
} from './spinner'
// 存储组件列表
const components = [
  nxButton,
  nxIcon,
  nxHeader,
  nxTag,
  nxCellGroup,
  nxCellInput,
  nxPopup,
  nxCell,
  nxPulseLoader,
  nxGridLoader,
  nxClipLoader,
  nxRiseLoader,
  nxBeatLoader,
  nxSyncLoader,
  nxRotateLoader,
  nxFadeLoader,
  nxPacmanLoader,
  nxSquareLoader,
  nxScaleLoader,
  nxSkewLoader,
  nxMoonLoader,
  nxRingLoader,
  nxBounceLoader,
  nxDotLoader
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  nxButton,
  nxIcon,
  nxHeader,
  nxTag,
  nxCellGroup,
  nxCellInput,
  nxPopup,
  nxCell,
  nxPulseLoader,
  nxGridLoader,
  nxClipLoader,
  nxRiseLoader,
  nxBeatLoader,
  nxSyncLoader,
  nxRotateLoader,
  nxFadeLoader,
  nxPacmanLoader,
  nxSquareLoader,
  nxScaleLoader,
  nxSkewLoader,
  nxMoonLoader,
  nxRingLoader,
  nxBounceLoader,
  nxDotLoader
}
