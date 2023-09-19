import type { Meta, StoryObj } from "@storybook/vue3"

import AButton from "@/components/AButton.vue"

const meta = {
  title: "Components/AButton",
  component: AButton,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["button", "submit"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    color: { control: "color" },
    onClick: { action: "clicked" }
  },
  args: {
    type: "button",
    size: "medium",
    color: "netflix-red",
    textColor: "white"
  }
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
