import type { Preview } from "@storybook/vue3"
import "../src/assets/tailwind.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: "white",
      values: [
        {
          name: "netflix-dark-gray",
          value: "#232323"
        },
        {
          name: "white",
          value: "#FFFFFF"
        },
        {
          name: "black",
          value: "#000000"
        },
        {
          name: "netflix-light-green",
          value: "#A1E66F"
        }
      ]
    }
  }
}

export default preview
