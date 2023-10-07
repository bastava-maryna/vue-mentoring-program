import { ref, type Ref } from "vue"
import { set } from "@vueuse/core"
import { defineStore } from "pinia"

export const useSearchStore = defineStore("search-store", () => {
  const sortBy: Ref<string> = ref("release date")
  const filter: Ref<string> = ref("title")
  const search: Ref<string> = ref("")

  const setSortBy = (newSortBy: string) => set(sortBy, newSortBy)
  const setFilter = (newFilter: string) => set(filter, newFilter)
  const setSearch = (newSearch: string) => set(search, newSearch)

  return { sortBy, setSortBy, search, setSearch, filter, setFilter }
})
