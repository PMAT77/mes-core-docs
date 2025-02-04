---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MES Core"
  text: "优雅高效制造执行系统"
  tagline: 基于 Vue3、Vite5、TypeScript 和 UnoCSS
  actions:
    - theme: brand
      text: 开始
      link: /guide/quick-start
    - theme: alt
      text: 介绍
      link: /guide/intro

features:
  - title: 核心功能最小集成
    details: 采用模块化设计，核心功能最小化集成，确保系统轻量且高效。根据实际需求动态加载功能模块，避免不必要的资源消耗。

  - title: 实时数据驱动
    details: 基于实时数据驱动，支持生产过程的实时监控和动态调整。通过 WebSocket 和 Vue 3 的响应式系统，实现数据的实时更新和高效渲染。

  - title: 极致性能优化
    details: 通过 Vite 5 的构建优化和 UnoCSS 的样式按需生成，实现极致的性能表现。系统启动快、运行流畅，能够高效处理大规模生产数据。
---
