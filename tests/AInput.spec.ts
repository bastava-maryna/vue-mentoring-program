import {mount, VueWrapper} from "@vue/test-utils";
import {describe, expect, test} from "vitest";
import AInput from "../src/components/AInput.vue";

describe("AInput.vue", (): void => {
    const label: string = "Find your movie";
    const wrapper: VueWrapper = mount(AInput, {
        props: {
            label,
            inputValue: "",
            "onUpdate:inputValue": (e: string) => wrapper.setProps({inputValue: e}),
        },
    });
    test("emits event when enter is clicked", async (): Promise<void> => {
        await wrapper.find("input").trigger("keyup.enter");
        expect(wrapper.emitted()).toHaveProperty("enterClicked");
    });
    test("renders label when label is not empty", (): void => {
        expect(wrapper.find("label").text()).toBe(label);
    });
    test("Renders the input value", async (): Promise<void> => {
        const input = wrapper.find("input")
        expect(input.text()).toContain("")
        await input.setValue("day")
        expect(input.element.value).toEqual("day")
    });
    test("emits event when type in input", async (): Promise<void> => {
        await wrapper.find("input").trigger("input");
        expect(wrapper.emitted()).toHaveProperty("update:inputValue");
    });
    test("emits input value when changed", async (): Promise<void> => {
        await wrapper.find("input").setValue("New Test Value");
        expect(wrapper.props("inputValue")).toBe("New Test Value");
    });
    test("show error when input contain '-'", async (): Promise<void> => {
        await wrapper.find("input").setValue("we-");
        expect(wrapper.props("inputValue")).toBe("we-");
        expect(wrapper.find("div").text()).toContain("Only letters and numbers are allowed. Please retype.");
    });
});