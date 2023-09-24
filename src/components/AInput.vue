<script lang="ts" setup>
import uniqueId from "lodash/uniqueId"
import { watch } from "vue"

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    label?: string | boolean
    placeholder: string
    inputValue: string | number
    id: string
    type?: string
    error?: string
    withIcon?: boolean
  }>(),
  {
    label: false,
    placeholder: "",
    inputValue: "",
    id: uniqueId("input"),
    type: "text",
    error: "",
    withIcon: false
  }
)

const emit = defineEmits<{
  (event: "update:inputValue", value: string): void
  (event: "enterClicked"): void
}>()

const enterClicked = () => {
  emit("enterClicked")
}

const validateInput = (value) => {
  const pattern = /^[A-Za-z0-9]+$/
  if (!pattern.test(value)) {
    this.error = "Only letters and numbers are allowed. Please retype."
  }
}
watch(
  () => props.modelValue,
  (value) => {
    validateInput(value)
  }
)
</script>

<template>
  <div>
    <label
      v-if="label"
      class="form-label block mb-1 font-semi-bold text-gray-700"
      :for="id"
    >
      {{ label }}
    </label>
    <div class="relative">
      <input
        :id="id"
        ref="input"
        :value="inputValue"
        v-bind="$attrs"
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        :class="{
          [`border-red-400`]: props.error,
          [`pl-12`]: props.withIcon
        }"
        :type="type"
        :placeholder="placeholder"
        @input="$emit('update:inputValue', $event.target.value)"
        @keyup.enter="enterClicked"
      />
      <div
        v-if="error"
        class="text-red-600 mt-1 text-sm"
      >
        {{ props.error }}
      </div>
      <div
        v-if="withIcon"
        class="absolute left-0 top-0 bottom-0 w-10 block ml-2"
      >
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>
