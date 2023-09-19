<script lang="ts" setup>
import AText from "@/components/AText.vue"

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    value: string | number
  }>(),
  {
    value: ""
  }
)
</script>

<template>
  <AText
    class="flex text-2xl w-16 h-16 text-netflix-light-green font-light border border-white rounded-full items-center justify-center tracking-wide"
    v-bind="$attrs"
  >
    {{ props.value }}
  </AText>
</template>
