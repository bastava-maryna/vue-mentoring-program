<script setup lang="ts">
import AInput from "@/components/AInput.vue"
import SearchButton from "@/components/SearchButton.vue"
import ALabel from "@/components/ALabel.vue"
</script>

<template>
  <ALabel class="text-4xl font-light tracking-widest text-white ml-24 mt-16">
    FIND YOUR MOVIE
  </ALabel>
  <div class="flex mt-10 mx-24">
    <div class="grow">
      <AInput
        placeholder="Search"
        class="bg-netflix-dark-gray h-14 text-xl w-full text-white border-netflix-dark-gray"
      />
    </div>
    <div class="flex-none">
      <SearchButton />
    </div>
  </div>
</template>
