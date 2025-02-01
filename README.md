# MES Core 项目文档

## 介绍

本文档基于 Vitepress 构建，采用 Markdown 格式编写。

## 开始

### 克隆项目

```base
git clone https://github.com/PMAT77/mes-core-docs.git
```

### 安装依赖

```base
pnpm i
```

### 运行项目

```base
pnpm run docs:dev
```

## 目录结构

```base
docs # 文档根目录
├── .vitepress  # 配置文件目录
│    ├── dist   # 构建文件目录
│    ├── theme  # 主题文件目录
│    └── config.mts  # 站点配置文件
├── components  # 组件目录
├── public      # 公共资源目录
├── guide       # 指引文档目录
├── standard    # 规范文档目录
└── index.md    # 首页
```

## 配置文件

修改 `.vitepress` 目录下的 `config.mts` 文件，进行站点相关配置。
具体配置项参考官方文档：[Vitepress 站点配置](https://vitepress.dev/zh/reference/site-config)

## 构建部署

文档使用 Github Workflows，将内容提交到 `main` 分支后，会自动构建并部署到站点。
