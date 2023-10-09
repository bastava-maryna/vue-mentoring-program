<script lang="ts" setup>
import AText from "@/components/AText.vue"

const props = withDefaults(
  defineProps<{
    title: string
    year: number
    genre: string
  }>(),
  {}
)
</script>

<template>
  <div
    class="mx-9 flex text-lg text-white/70 h-12 py-4 items-center tracking-widest justify-between"
  >
    <AText class="w-3/4"> {{ props.title }} </AText>
    <AText class="flex text-sm w-1/6 border border-gray-700 rounded justify-center">
      {{ props.year }}
    </AText>
  </div>
  <AText class="mx-9 mb-6 mt-0 text-sm text-white/50 tracking-widest"> {{ props.genre }} </AText>
</template>
