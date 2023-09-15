<script setup lang="ts">
import { ref } from "vue"

import AInput from "@/components/AInput.vue"
import ALabel from "@/components/ALabel.vue"
import AButton from "@/components/AButton.vue"

const searchQuery = ref("")

const emit = defineEmits<{
  (event: "search", value: string): void
}>()

const handleSearchQuery = () => {
  emit("search", searchQuery.value)
}
</script>

<template>
  <ALabel class="text-4xl font-light tracking-widest text-white ml-24 mt-16">
    FIND YOUR MOVIE
  </ALabel>
  <div class="flex mt-10 mx-24">
    <div class="grow">
      <AInput
        v-model:input-value="searchQuery"
        placeholder="Search"
        class="bg-netflix-dark-gray h-14 text-xl w-full text-white border-netflix-dark-gray"
        @enter-clicked="handleSearchQuery"
      />
    </div>
    <div class="flex-none">
      <AButton
        label="SEARCH"
        class="mx-2 mb-2"
        @click="handleSearchQuery"
      />
    </div>
  </div>
</template>
