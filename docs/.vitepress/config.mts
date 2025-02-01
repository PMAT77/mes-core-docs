import { defineConfig } from "vitepress";

export default defineConfig({
  title: "MES Core",
  description: "简洁优雅MES核心系统",
  base: "/mes-core-docs/",
  head: [["link", { rel: "icon", href: "/mes-core-docs/favicon.ico" }]],
  themeConfig: {
    /** LOGO */
    logo: "/svgs/logo.svg",

    /** 全局搜索 */
    search: {
      provider: "local",
    },

    /** 导航栏 */
    nav: [
      {
        text: "指引",
        link: "/guide/intro",
        activeMatch: "/guide/",
      },
      {
        text: "规范",
        link: "/standard/front-end/lint",
        activeMatch: "/standard",
      },
    ],

    /** 侧边栏 */
    sidebar: {
      "/guide/": [
        {
          text: "开始",
          items: [
            { text: "简介", link: "/guide/intro" },
            { text: "快速上手", link: "/guide/quick-start" },
          ],
        },
      ],
      "/standard/": [
        {
          text: "前端篇",
          items: [
            { text: "格式化", link: "/standard/front-end/lint" },
            { text: "命名", link: "/standard/front-end/naming" },
            { text: "Vue写法规范", link: "/standard/front-end/vue" },
          ],
        },
        {
          text: "后端篇",
          items: [{ text: "建表", link: "/standard/back-end/table" }],
        },
        {
          text: "综合篇",
          items: [
            { text: "字段", link: "/standard/summary/fields" },
            { text: "权限标识", link: "/standard/summary/auth-mark" },
          ],
        },
      ],
    },

    /** 社交帐户 */
    socialLinks: [
      { icon: "github", link: "https://github.com/PMAT77/mes-core-docs" },
    ],

    footer: {
      message: "根据 MIT 许可证发布",
      copyright: "Copyright © 2025-present MES Core",
    },
  },
});
