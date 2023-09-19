<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    src: string
    alt: string
  }>(),
  {
    src: "",
    alt: "image"
  }
)
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    v-bind="$attrs"
  />
</template>
