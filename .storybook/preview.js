const customViewPorts = {
  littlePhone: {
    name: "iPhone 5",
    style: {
      width: "360px",
      height: "540px",
    },
  },
  mediumPhone: {
    name: "iPhone 12",
    style: {
      width: "1024px",
      height: "1200px",
    },
  },
};

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewPorts,
      defaultViewport: "someDefault",
    },
  },
};

export default preview;
