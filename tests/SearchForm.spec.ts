import { mount, shallowMount, VueWrapper } from "@vue/test-utils"
import { beforeEach, describe, expect, test } from "vitest"
import { createPinia, setActivePinia } from "pinia"
import { useSearchStore } from "@/store/SearchStore"
import SearchForm from "./src/components/SearchForm.vue"
import ALabel from "@/components/ALabel.vue"
import AInput from "@/components/AInput.vue"
import AButton from "@/components/AButton.vue"

describe("SearchForm.vue", (): void => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  test("call handleSearchQuery() when there is value in input and button clicked", async (): Promise<void> => {
    const searchStore = useSearchStore()
    const wrapper: VueWrapper = shallowMount(SearchForm)

    await wrapper.findComponent(AInput).setValue("alice")
    await wrapper.findComponent(AButton).trigger("click")

    expect(searchStore.search.includes("alice"))
  })
  test("render ALabel content", async (): Promise<void> => {
    const wrapper: VueWrapper = mount(SearchForm)
    expect(wrapper.findComponent(ALabel).text()).toContain("FIND YOUR MOVIE")
  })
})
