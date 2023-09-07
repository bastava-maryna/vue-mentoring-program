import type { Meta, StoryObj } from "@storybook/vue3"

import MovieSwitcher from "@/components/MovieSwitcher.vue"

const meta = {
  title: "Components/MovieSwitcher",
  component: MovieSwitcher,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    color: { control: "color" },
    colorClicked: { control: "color" },
    textColorLeft: { control: "color" },
    textColorRight: { control: "color" },
    titleBackground: { control: "color" }
  },
  args: {
    size: "small",
    colorClicked: "netflix-red",
    textColorLeft: "white",
    textColorRight: "white",
    titleBackground: "netflix-dark-gray"
  } // default value
} satisfies Meta<typeof MovieSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const MovieSearch: Story = {
  args: {
    title: "SEARCH BY",
    labelLeft: "TITLE",
    labelRight: "GENRE",
    color: "netflix-middle-gray",
    titleBackground: "netflix-dark-gray"
  }
}

export const MovieSorter: Story = {
  args: {
    title: "SORT BY",
    labelLeft: "RELEASE DATE",
    labelRight: "RATING",
    color: "netflix-middle-gray",
    titleBackground: "netflix-light-gray"
  }
}
