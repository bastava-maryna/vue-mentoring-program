import type { Meta, StoryObj } from "@storybook/vue3"

import IconSearch from "@/components/IconSearch.vue"

const meta = {
  title: "Components/IconSearch",
  component: IconSearch,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"]

  //argTypes: {
  //    widht: { control: "text"},
  //     size: { control: "select", options: ["small", "medium", "large"] },
  //     color: { control: "color" },
  //     onClick: { action: "clicked" }
  //     //    outlined: { control: "boolean" },
  //},
  //args: {
  //     type: "button",
  //     size: "medium",
  //     color:"netflix-red",
  //     textColor: "white",
  //} // default value
} satisfies Meta<typeof IconSearch>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

// export const Small: Story = {
//     args: {
//         size: "small",
//         label: "BUTTON"
//     }
// }
//
// export const Large: Story = {
//     args: {
//         size: "large",
//         label: "BUTTON"
//     }
// }
