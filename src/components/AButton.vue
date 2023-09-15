<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    type?: "button" | "submit"
    label: string
    size?: "small" | "medium" | "large"
    color: string
    textColor?: string
  }>(),
  {
    type: "button",
    size: "medium",
    color: "netflix-red",
    textColor: "white"
  }
)

const emit = defineEmits<{
  //(e: "click", value: string): void
  (e: "click"): void
}>()

// const onClick = () => {
//   emit("click", value)
// }
</script>

<template>
  <button
    class="btn leading-relaxed font-normal flex items-center place-content-center cursor-pointer rounded-md"
    :class="{
      [`bg-${props.color} text-${props.textColor}`]: props.color,
      [`h-9 text-base px-4 w-24`]: size === 'small',
      [`h-14 text-xl px-6 w-56`]: size === 'medium',
      [`h-16 text-2xl px-12 w-60`]: size === 'large'
    }"
    v-bind="$attrs"
    @click="emit('click')"
  >
    {{ label }}
  </button>
</template>
