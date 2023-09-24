<script lang="ts" setup>
import AText from "@/components/AText.vue"
import MovieSorter from "@/components/MovieSwitcher.vue"
import { useSearchStore } from "@/store/SearchStore"

const props = withDefaults(
  defineProps<{
    foundQty?: number
  }>(),
  {
    foundQty: 0
  }
)

const { setSortBy } = useSearchStore()

const handleFilter = (val) => {
  setSortBy(val.value.toLowerCase())
}
</script>

<template>
  <div class="flex mb-16 justify-end bg-netflix-light-gray h-16 items-center">
    <AText
      v-if="foundQty != 0"
      class="mx-24 font-bold text-lg text-white tracking-wide grow"
    >
      {{ foundQty }} movie found
    </AText>
    <MovieSorter
      title="SORT BY"
      label-left="RELEASE DATE"
      label-right="RATING"
      title-background="netflix-light-gray"
      class="mx-24"
      @filter="handleFilter"
    />
  </div>
</template>
