// 引入 svgIcons 组件并全局注册
// 实现自动引入 @/src/svgIcons 下面所有的图标
// require.context("./svg", false, /.svg$/); 这行代码就会去 svg文件夹（不包含子目录）下面的找所有文件名以 .svg结尾的文件能被 require 的文件。 
// 更直白的说就是 我们可以通过正则匹配引入相应的文件模块
// require.context 的三个参数：
//   directory：说明需要检索的目录
//   useSubdirectories：是否检索子目录
//   regExp: 匹配文件的正则表达式
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件
// import SvgIcon from '../../components/SvgIcon.vue'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)
const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext)
requireAll(req)