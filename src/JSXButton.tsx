import { defineComponent } from "vue";
export default defineComponent({
  name: "JSXButton",
  render() {
    return <button>JSX Button</button>; // 由于在ts中使用 JSX 语法，在 vscode编辑器中会提示错误 只需要在 tsconfig 中配置一下 jsx 语法支持就行了。
  },
});
