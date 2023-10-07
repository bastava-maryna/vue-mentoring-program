import { mount, VueWrapper } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import AButton from "../src/components/AButton.vue"

describe("AButton.vue", (): void => {
  const label: string = "Search"
  const wrapper: VueWrapper = mount(AButton, {
    props: { label }
  })
  test("emits event when button is clicked", async (): Promise<void> => {
    const aButton = wrapper.find("button")
    await aButton.trigger("click")
    expect(wrapper.emitted()).toHaveProperty("click")
  })
  test("renders button label when label is not empty", (): void => {
    expect(wrapper.find("button").text()).toBe(label)
  })
})
