import type { Meta, StoryObj } from "@storybook/vue3"

import AppHeader from "@/components/AppHeader.vue"
import IconSearch from "@/components/IconSearch.vue"

const meta = {
  title: "Components/AppHeader",
  component: AppHeader,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
    width: { control: "number" },
    stroke: { control: "color" }
  },
  args: {} // default value
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

/*
 parameters:{
        slots:{
            default:{
                description:"Default slot",
                components:{IconSearch, AppHeader},
                template: `<AppHeader><IconSearch</AppHeader>`,
            }
        }
    },
*/
