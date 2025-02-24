import React from "react";
import type { Preview } from "@storybook/react";
import "../src/index.css";
import { MemoryRouter } from "react-router";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: "mobile",
          styles: {
            height: "844px",
            width: "390px",
          },
        },
        desktop: {
          name: "desktop",
          styles: {
            height: "720px",
            width: "1440px",
          },
        },
      },
    },
    defaultViewport: "iphone12",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;
