import { shallowMount, VueWrapper } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import MovieDetailBodyRating from "./src/components/MovieDetailBodyRating.vue"

describe("MovieDetailBodyRating.vue", (): void => {
  const stringValue: string = "testValue"
  const numberValue: number = 5
  test("correctly render string value passed to props", async (): Promise<void> => {
    const wrapper: VueWrapper = shallowMount(MovieDetailBodyRating, {
      props: {
        value: stringValue
      }
    })

    expect(wrapper.props("value")).toBe(stringValue)
  })
  test("correctly render number value passed to props", async (): Promise<void> => {
    const wrapper: VueWrapper = shallowMount(MovieDetailBodyRating, {
      props: {
        value: numberValue
      }
    })

    expect(wrapper.props("value")).toBe(numberValue)
  })
})
