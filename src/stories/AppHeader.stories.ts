import type { Meta, StoryObj } from "@storybook/vue3"

import AppHeader from "@/components/AppHeader.vue"
import IconSearch from "@/components/IconSearch.vue"

const meta = {
  title: "Components/AppHeader",
  component: AppHeader,
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
    width: { control: "number" },
    stroke: { control: "color" }
  },
  args: {}
} satisfies Meta<typeof AppHeader>

export default meta
type Story = StoryObj<typeof meta>

export const OnlyLogo: Story = {}
export const WithSlot: Story = {
  render: (args) => ({
    components: { AppHeader, IconSearch },
    setup() {
      return { args }
    },
    template: `
          <AppHeader v-bind="args">
            <IconSearch v-bind="args"/>
          </AppHeader>
        `
  })
}
