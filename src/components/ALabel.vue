<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    for: string
  }>(),
  {
    for: ""
  }
)
</script>

<template>
  <label
    :for="props.for"
    class="truncate flex items-center"
    v-bind="$attrs"
  >
    <slot></slot>
  </label>
</template>
