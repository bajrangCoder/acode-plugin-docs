# Theme Builder

### Introduction

The `ThemeBuilder` class from the `acode` library provides a comprehensive solution for creating and customizing themes in your application. It offers granular control over various UI elements, colors, and styles.

### Basic Usage

1. **Import the ThemeBuilder Class**

```javascript
const ThemeBuilder = acode.require('themeBuilder');
```

2. **Create a Theme Instance**

```javascript
const myTheme = new ThemeBuilder("MyDarkTheme", "dark");
```

- **Theme Name**: A descriptive name reflecting the theme's style (e.g., `"MyDarkTheme"`)
- **Theme Mode**: Specifies the base mode (`"light"` or `"dark"`)

3. **Customize Theme Properties**

```javascript
myTheme.primaryColor = "#333";
myTheme.secondaryColor = "#666";
myTheme.textColor = "#ffffff";
myTheme.backgroundColor = "#121212";
```

### Customizable Theme Properties

#### Color Palette
- `primaryColor`: Main color for primary elements
- `secondaryColor`: Accent color for secondary elements
- `textColor`: Main text color
- `backgroundColor`: Application background color
- `activeColor`: Color for active elements
- `dangerColor`: Color for error or destructive actions
- `linkTextColor`: Color for clickable links

#### Typography
- `fontFamily`: Font type and fallbacks
- `fontSize`: Base font size
- `fontWeight`: Text thickness

#### Specific Element Styles
- `buttonBackgroundColor`: Button background
- `buttonTextColor`: Button text color
- `borderColor`: Element border color
- `popupBackgroundColor`: Popup/modal background
- `scrollbarColor`: Scrollbar color

### More Styling Options

#### Color Manipulation
```javascript
// Generate a darker version of the primary color
const darkenedPrimaryColor = myTheme.darkenPrimaryColor();
```

#### Theme Types
- `"light"`: Light color scheme
- `"dark"`: Dark color scheme

### Complete Theme Configuration Example

```javascript
const myCustomTheme = new ThemeBuilder("ModernDark", "dark");

// Color Configuration
myCustomTheme.primaryColor = "#2196F3";
myCustomTheme.secondaryColor = "#FF4081";
myCustomTheme.textColor = "#FFFFFF";
myCustomTheme.backgroundColor = "#121212";

// Typography
myCustomTheme.fontFamily = "Roboto, sans-serif";
myCustomTheme.fontSize = "16px";
myCustomTheme.fontWeight = "400";

// Element-Specific Styles
myCustomTheme.buttonBackgroundColor = "#2196F3";
myCustomTheme.buttonTextColor = "#FFFFFF";
myCustomTheme.borderColor = "#333333";
```

### Best Practices
- Choose a consistent color palette
- Ensure sufficient contrast between text and background
- Test your theme across different components and states
- Use the `darkenPrimaryColor()` method for dynamic color variations

### Supported CSS Custom Properties

The ThemeBuilder generates the following CSS custom properties:
- `--primary-color`
- `--secondary-color`
- `--text-color`
- `--background-color`
- `--active-color`
- `--button-background-color`
- `--border-color`
- And many more...

### Notes
- Always import the ThemeBuilder from the `acode` library
- Theme customization is flexible and supports both light and dark modes
- You can override default styles for specific UI components
- for theme management check the `themes`documentation