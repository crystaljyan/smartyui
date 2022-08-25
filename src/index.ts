import { createApp } from "vue/dist/vue.esm-browser";
// import SFCButton from './SFCButton.vue'   // 在引用 .vue 模块时候，编辑器中 import 语句会有红色的警告。这是因为Typescript 默认是不支持 .vue 类型的模块的。可以通过添加一个模块的类型定义来解决这个问题。src/shims-vue.d.ts
// import SButton from "./button"
// import JSXButton from "./JSXButton"
import SmartyUI from "./entry";
// createApp(JSXButton).mount("#app")
createApp({
  template:`
  <div style="margin-bottom:20px;">
  <SButton color="blue">主要按钮</SButton>
  <SButton color="green">绿色按钮</SButton>
  <SButton color="gray">灰色按钮</SButton>
  <SButton color="yellow">黄色按钮</SButton>
  <SButton color="red">红色按钮</SButton>
</div>
<div style="margin-bottom:20px;"
>
  <SButton color="blue" plain>朴素按钮</SButton>
  <SButton color="green" plain>绿色按钮</SButton>
  <SButton color="gray" plain>灰色按钮</SButton>
  <SButton color="yellow" plain>黄色按钮</SButton>
  <SButton color="red" plain>红色按钮</SButton>
</div>
<div style="margin-bottom:20px;">
  <SButton size="small" plain>小按钮</SButton>
  <SButton size="medium" plain>中按钮</SButton>
  <SButton size="large" plain>大按钮</SButton>
</div>
<div style="margin-bottom:20px;">
  <SButton color="blue" round plain icon="search">搜索按钮</SButton>
  <SButton color="green" round plain icon="edit">编辑按钮</SButton>
  <SButton color="gray" round plain icon="check">成功按钮</SButton>
  <SButton color="yellow" round plain icon="message">提示按钮</SButton>
  <SButton color="red" round plain icon="delete">删除按钮</SButton>
</div>
<div style="margin-bottom:20px;">
  <SButton color="blue" round plain icon="search"></SButton>
  <SButton color="green" round plain icon="edit"></SButton>
  <SButton color="gray" round plain icon="check"></SButton>
  <SButton color="yellow" round plain icon="message"></SButton>
  <SButton color="red" round plain icon="delete"></SButton>
</div>
  `
 })
.use(SmartyUI)
.mount("#app");