import {shallowMount, VueWrapper} from "@vue/test-utils";
import {describe, expect, test} from "vitest";
import MovieDetailBodyIStats from "./src/components/MovieDetailBodyIStats.vue";

describe("MovieDetailBodyIStats.vue", (): void => {
    const testValue: string = "testValue"
    const testUnit: string = "testUnit"
    test("correctly render values passed to props", async (): Promise<void> => {
        const wrapper: VueWrapper = shallowMount(MovieDetailBodyIStats, {
                props: {
                    value: testValue,
                    unit: testUnit
                }
            }
        )

        expect(wrapper.props("value")).toBe(testValue);
        expect(wrapper.props("unit")).toBe(testUnit);
    });
})