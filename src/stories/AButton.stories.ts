import type { Meta, StoryObj } from "@storybook/vue3"

import AButton from "@/components/AButton.vue"

const meta = {
  title: "Components/AButton",
  component: AButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["button", "submit"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    color: { control: "color" },
    onClick: { action: "clicked" }
    //    outlined: { control: "boolean" },
  },
  args: {
    type: "button",
    size: "medium",
    color: "netflix-red",
    textColor: "white"
  } // default value
} satisfies Meta<typeof AButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: "BUTTON"
  }
}

export const Small: Story = {
  args: {
    size: "small",
    label: "BUTTON"
  }
}

export const Large: Story = {
  args: {
    size: "large",
    label: "BUTTON"
  }
}
/*
export default {
    title: "Components/AButton",
    component: AButton,
    argTypes: {
        size: { control: "select", options: ["small", "medium", "large"] },
        color: { control: "color" },
        onClick: { action: "clicked" }
    //    outlined: { control: "boolean" },
    },
};

const Template = (args) => ({
    components: { AButton },
    setup: () => ({ args }),
    template: '<AButton v-bind="args">{{ args.default }}</AButton>',
});

export const Primary = Template.bind({});
Primary.args = {
    default: "Button text",
};
*/
// export const Outlined = Template.bind({});
// Outlined.args = {
//     ...Primary.args,
//     outlined: true,
// };
