# Vue 写法规范

<tips type="info">
为降低开发心智负担，MES Core 已配置 <code>eslint</code> 和 <code>prettier</code>，保存时将自动格式化代码风格。
</tips>

## SFC 顺序

在 **Vue 的单文件组件（Single File Component, SFC）** 中，代码的组织顺序对于代码的可读性和维护性非常重要。虽然没有严格的强制规定，但遵循一定的约定和最佳实践可以让代码更加清晰和易于理解。

### Ⅰ. 推荐的 SFC 顺序

```vue
<template>
  <!-- 模板部分 -->
</template>

<script>
/* 脚本部分 */
</script>

<style>
/* 样式部分 */
</style>
```

#### 详细说明

1. `<template>`

- 放在最前面，因为它是组件的核心部分，定义了组件的结构和布局。
- 开发者通常首先关注组件的 UI 结构，因此将其放在最上方。

2. `<script>`

- 放在 `<template>` 之后，包含组件的逻辑（如数据、方法、生命周期钩子等）。
- 如果使用 `<script setup>`（Composition API），可以更简洁地组织逻辑。

3. `<style>`

- 放在最后，定义组件的样式。
- 样式通常是对模板的补充，因此放在最后。

### Ⅱ. `<script>` 内部顺序

#### import 导入语句

```
1. vue
2. vue-router
3. pinia
4. @vueuse/core
5. UI库
6. 其他依赖
7. 项目内部依赖(monorepo)
8. 别名导入
9. 相对路径导入
```

类型单独使用 import type 导入，并在相同依赖的下面

```ts
import { ref } from "vue";
import type { Ref } from "vue";
```

#### defineOptions

#### Props 类型定义

```ts
interface Props {
  prop1: string;
  prop2: number;
}
```

#### defineProps

```ts
defineProps<Props>();
const props = defineProps<Props>(); // 用到props时
```

#### Emits 类型定义

```ts
interface Emits {
  emit1: (arg1: string) => void;
  emit2: (arg1: number) => void;
}

// 或者
interface Emits {
  emit1: [arg1: string];
  emit2: [arg1: number];
}
```

#### defineEmits

```ts
defineEmits();
const emit = defineEmits(); // 用到emit时
```

#### 导入的 hooks 函数

```ts
const router = useRouter();
const route = useRoute();
const appStore = useAppStore();
const { loading, startLoading, endLoading } = useLoading();
```

#### 组件逻辑

```ts
// 响应式数据
const count = ref(0);

// 计算属性
const doubleCount = computed(() => count.value * 2);

// 方法
function increment() {
  count.value++;
}

// 必要的初始化函数，所有的初始化逻辑都放在这里
async function init() {
  await fetchData();
}

// watch 和 watchEffect
watchEffect(() => {
  console.log(count.value);
});

watch(
  () => count.value,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  }
);

// 相当于在`created`钩子中执行
init();
// 生命周期钩子
onMounted(() => {
  init();
});

// 暴露给父组件的属性和方法
const exposed = {
  count,
  increment,
};

defineExpose(exposed);
```

### Ⅲ. `<style>` 部分

**作用域样式:** 使用 scoped 属性将样式限制在当前组件内。

```vue
<style scoped>
.my-class {
  color: red;
}
</style>
```

**预处理器:** 如果需要，可以使用 Sass、Less 等预处理器。

```vue
<style lang="scss" scoped>
.my-class {
  color: red;
}
</style>
```

**全局样式:** 如果需要定义全局样式，可以单独引入一个全局样式文件，或者使用 :global 选择器。

```vue
<style>
:global(.global-class) {
  font-size: 16px;
}
</style>
```
