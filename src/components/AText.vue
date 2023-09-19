<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div v-bind="$attrs">
    <slot></slot>
  </div>
</template>
