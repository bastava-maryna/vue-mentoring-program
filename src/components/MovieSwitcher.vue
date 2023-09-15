<script lang="ts" setup>
import { ref } from "vue"

import AButton from "@/components/AButton.vue"
import ALabel from "@/components/ALabel.vue"

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    title: string
    labelLeft: string
    labelRight: string
    size?: "small" | "medium" | "large"
    color: string
    colorClicked: string
    textColorLeft?: string
    textColorRight?: string
    titleBackground: string
  }>(),
  {
    size: "medium",
    colorClicked: "netflix-red",
    color: "netflix-middle-gray",
    textColorLeft: "white",
    textColorRight: "white",
    titleBackground: "netflix-dark-gray"
  }
)

const emit = defineEmits<{
  (e: "filter", clicked: string): void
}>()

const clicked = ref(props.labelLeft)

const handleClicked = (val) => {
  clicked.value = val
  emit("filter", clicked)
}
// @click="clicked = props.labelLeft"
// @click="clicked = props.labelRight"
</script>

<template>
  <div
    class="flex"
    v-bind="$attrs"
  >
    <ALabel
      class="font-light h-9 w-auto text-white tracking-widest mr-10 pl-2"
      :class="{ [`bg-${props.titleBackground}`]: props.titleBackground }"
    >
      {{ title }}
    </ALabel>
    <AButton
      :label="props.labelLeft"
      class="rounded-r-none mx-0 tracking-widest w-auto"
      size="small"
      :color="clicked === props.labelLeft ? 'netflix-red' : 'netflix-middle-gray'"
      @click="handleClicked((clicked = props.labelLeft))"
    />
    <AButton
      :label="props.labelRight"
      class="rounded-l-none mx-0 tracking-widest w-auto"
      size="small"
      :color="clicked === props.labelRight ? 'netflix-red' : 'netflix-middle-gray'"
      @click="handleClicked((clicked = props.labelRight))"
    />
  </div>
</template>
