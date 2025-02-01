import { defineAsyncComponent } from "vue";

const modules = import.meta.glob(["./modules/*.vue"]);

/**
 * 批量注册 modules 下所有组件
 * @param app Vue实例
 */
export default function registerComponents(app) {
  for (const path in modules) {
    const component = modules[path];
    const componentName = path
      .split("/")
      .pop()
      .replace(/\.vue$/, "");
    app.component(componentName, defineAsyncComponent(component));
  }
}
