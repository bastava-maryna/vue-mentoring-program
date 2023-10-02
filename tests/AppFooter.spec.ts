import {shallowMount, VueWrapper} from "@vue/test-utils";
import {describe, expect, test} from "vitest";
import AppFooter from "./src/components/AppFooter.vue";

describe("AppFooter.vue", (): void => {
    test("render NetflixLogo component", (): void => {
        const wrapper: VueWrapper = shallowMount(AppFooter)

        expect(wrapper.text()).toMatchSnapshot()
        expect(wrapper.findComponent({name: "NetflixLogo"}).exists()).toBe(true)
    });
})