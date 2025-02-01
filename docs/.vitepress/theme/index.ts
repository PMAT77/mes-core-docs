import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import registerComponents from "../../components/index";
import "./home.css";
import "./tips.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    registerComponents(app);
  },
} satisfies Theme;
