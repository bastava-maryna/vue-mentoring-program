import {createPinia, setActivePinia} from 'pinia'
import {beforeEach, describe, expect} from 'vitest'
import {type Ref, ref} from 'vue'
import {useSearchStore} from "@/store/SearchStore";

describe("The search store", (): void => {
    let searchStore=null;
    beforeEach((): void => {
        setActivePinia(createPinia())
        searchStore = useSearchStore()
    })

    test("has the sortBy,filter,search values", (): void => {
        const sortBy: Ref<string> = ref("release date")
        const filter: Ref<string> = ref("title")
        const search: Ref<string> = ref("day")

        searchStore.setSortBy(sortBy.value);
        searchStore.setFilter(filter.value);
        searchStore.setSearch(search.value);

        expect(searchStore.sortBy).toBe("release date")
        expect(searchStore.filter).toBe("title")
        expect(searchStore.search).toBe("day")
    })
})