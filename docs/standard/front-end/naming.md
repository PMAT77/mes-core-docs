# 命名规范

<tips type="warning" title="注意">
  代码的规范化不仅有助于提高代码的可读性和可维护性，还能减少团队协作中的摩擦，提升开发效率。本规范旨在为前端开发提供一套统一的标准，涵盖代码格式化检查、命名规范、Vue写法规范和TypeScript写法规范等方面的内容。
  <br>
  通过遵循本规范，开发者可以确保代码的一致性，减少因风格差异引起的代码审查问题，并且在项目的长期维护中受益匪浅。希望本规范能够为您的开发工作提供有力的支持和指导。
</tips>

## 文件和文件夹命名

统一用小写加连字符 `-` 命名，多个单词用连字符连接

```
# 示例
components
├── custom-button.vue
views
├── home
│   └── index.vue
```

## Vue 组件名称

**自定义组件命名:** 统一用 PascalCase 法命名，多个单词首字母大写

```html
<template>
  <CustomButton />
</template>
```

**iconify 图标组件命名:** 统一用 kebab-case 法命名，多个单词用中划线连接

```html
<template>
  <icon-carbon:circle-outline />
</template>
```

> 利用 iconify 插件可以直接展示图标

**构造函数、class 类、TS 类型命名:** 统一用 PascalCase 法命名，多个单词首字母大写

```ts
function Person() {}

class Person {}

type Person = {
  name: string;
};

interface Person {
  name: string;
}
```

**变量、普通函数命名:** 统一用 camelCase 法命名，多个单词首字母小写

```ts
let num: number = 1;

function getNumber() {}
```

**常量命名:** 统一用大写字母命名，多个单词用下划线连接

```ts
const MAX_COUNT = 10;
```

**样式的命名:** 统一用小写字母命名，多个单词用中划线连接

```css
.container {
}

.container-item {
}
```

**请求函数命名:** 统一以 fetch 开头，后面跟请求的资源名称

```ts
function fetchUser() {}
```
