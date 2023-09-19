import type { Meta, StoryObj } from "@storybook/vue3"

import IconSearch from "@/components/IconSearch.vue"

const meta = {
  title: "Components/IconSearch",
  component: IconSearch,
  tags: ["autodocs"]
} satisfies Meta<typeof IconSearch>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
