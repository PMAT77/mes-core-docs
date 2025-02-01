<script lang="ts" setup>
import { defineSlots } from "vue";

// 定义插槽类型
const slots = defineSlots<{
  default?: () => any;
}>();

type Props = {
  title?: string;
  type?: "default" | "info" | "warning" | "danger";
};

withDefaults(defineProps<Props>(), {
  title: "",
  type: "default",
});

const titles = {
  default: "提示",
  info: "提示",
  warning: "注意",
  danger: "危险",
};
</script>

<template>
  <div class="tips" :class="`tips-${type}`">
    <p class="tips-title">{{ title || titles[type] }}</p>
    <p><slot /></p>
  </div>
</template>

<style>
.tips {
  margin: 16px 0;
  padding: 16px 16px 8px;
  border-radius: 8px;
  font-size: 14px;
}

.tips-default {
  color: var(--vp-tips-text);
  background-color: var(--vp-tips-bg);
}

.tips-info {
  color: var(--vp-tips-text);
  background-color: var(--vp-tips-info-bg);
}

.tips-warning {
  color: var(--vp-tips-text);
  background-color: var(--vp-tips-warning-bg);
}
.tips-warning code {
  color: var(--vp-tips-warning-text) !important;
}

.tips-danger {
  color: var(--vp-tips-text);
  background-color: var(--vp-tips-danger-bg);
}
.tips-danger code {
  color: var(--vp-tips-danger-text) !important;
}

.tips p {
  margin: 8px 0;
  line-height: 24px;
}

.tips .tips-title {
  margin: 0;
  font-weight: 600;
}
</style>
