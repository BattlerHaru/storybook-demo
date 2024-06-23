## Usage

To use the button component, import it and pass the necessary props:

- label: The label text of the button.
- style: Define the style of the button (filled or outline).
- size: Define the size of the button (small, medium, large).

## Structure

```js
import { createButton } from "./button.js";

const button = createButton({
  label: "Button",
  style: "filled",
  size: "small",
});

document.body.appendChild(button);
```
