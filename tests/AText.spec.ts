import { mount, VueWrapper } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import AText from "./src/components/AText.vue"

describe("AText.vue", (): void => {
  test("renders content via default slot", (): void => {
    const slotContent = "Interesting Fact"
    const wrapper: VueWrapper = mount(AText, {
      slots: {
        default: slotContent
      }
    })
    expect(wrapper.find("div").text()).toBe(slotContent)
  })
})
