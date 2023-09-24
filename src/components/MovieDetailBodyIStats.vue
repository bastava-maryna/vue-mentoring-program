<script lang="ts" setup>
import AText from "@/components/AText.vue"

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    value: string | number
    unit: string
  }>(),
  {
    value: "",
    unit: ""
  }
)
</script>

<template>
  <AText
    class="flex text-netflix-red text-3xl justify-center mr-2"
    v-bind="$attrs"
  >
    {{ props.value }}
  </AText>
  <AText
    class="flex text-sm text-white/50 justify-center mr-9"
    v-bind="$attrs"
  >
    {{ props.unit }}
  </AText>
</template>
