# storybook-demo

## Description

An example of storybook in html-vite.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

Make sure you have Node.js and Yarn installed on your machine.

### How to create this project for notes

```bash
# Initialize the project
yarn init -y

# Install Storybook CLI and Vite:
yarn add --dev @storybook/cli
yarn add vite

# Initialize Storybook
yarn sb init
```

#### Disable auto open browser to start project

Add the following script to package.json:

```json
"scripts": {
  "storybook": "storybook dev --ci --no-open --disable-telemetry -p 6006"
}
```

## Running Storybook

```bash
yarn storybook
```
