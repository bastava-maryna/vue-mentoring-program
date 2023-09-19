import type { Meta, StoryObj } from "@storybook/vue3"

import MovieDetailBodyRating from "@/components/MovieDetailBodyRating.vue"

const meta = {
  title: "Components/MovieDetailBodyRating",
  component: MovieDetailBodyRating,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "netflix-dark-gray" }
  },
  argTypes: {
    value: { control: "text" }
  },
  args: {
    value: "default"
  } // default value
} satisfies Meta<typeof MovieDetailBodyRating>

export default meta
type Story = StoryObj<typeof meta>

export const Medium: Story = {
  args: {
    value: "4.3"
  }
}
