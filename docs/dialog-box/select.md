---
sidebar_position: 8
title: Select
---

# Select

The `select` component in Acode provides a user-friendly and customizable way to present a dropdown menu, allowing users to choose one or more options. It's a versatile tool that enhances user interactions within your Acode plugins.

## Usage

To use the `select` component in your Acode plugin, you can require it using the following code:

```javascript
const select = acode.require('select');
```

Once you have the `select` component, you can create an instance with the following syntax:

```javascript
const mySelect = await select(
  'My Title',          // Title of the select menu
  options,             // Array of options or strings representing the options
  opt                  // Additional options or boolean for rejectOnCancel
);
```

## Parameters

### `title (string):`
A string that will be displayed as the title of the select menu.

### `options (Array\<Array or string>):`
An array representing the options in the select menu. Each array should have a value, text, icon, and disable property.

### `opt (SelectOptions | boolean):`
An object or boolean that allows additional functionality to be added to the select menu.

### SelectOptions

- **hideOnSelect (boolean):**
  - A boolean that specifies whether the select menu will hide when an option is selected.

- **textTransform (boolean):**
  - A boolean that specifies whether the text of the options should be transformed (e.g., to uppercase).

- **default (string):**
  - A string that represents the default selected option.

- **onCancel (Function):**
  - A function that will be called when the user cancels the select menu.

- **onHide (Function):**
  - A function that will be called when the select menu is hidden.

## Example

```javascript
const select = acode.require('select');
const options = [
  ['option1', 'Option 1', 'icon1', true],
  ['option2', 'Option 2', 'icon2', false],
];
const opt = {
  onCancel: () => window.toast('Cancel Clicked', 3000),
  hideOnSelect: true,
  textTransform: true,
  default: 'option2',
};

const mySelect = await select('My Title', options, opt);
```

In this example, the select menu will have two options: "Option 1" and "Option 2" with their respective values, icons, and disable property. The `opt` parameter allows the user to cancel the selection, the menu will hide on selection, the text will be transformed to uppercase, and the default option will be 'option2'.

