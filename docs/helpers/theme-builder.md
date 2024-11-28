# Theme Builder

**Theme Builder**

**Introduction**

To create a new theme for your application, you'll need to utilize the `ThemeBuilder` class provided by the `acode` library. This class offers a straightforward way to customize various aspects of your theme, from primary and secondary colors to font styles and more.

**Basic Usage**

1. **Import the `ThemeBuilder` class:**
   ```javascript
   const ThemeBuilder = acode.require('themeBuilder');
   ```
2. **Create a new theme instance:**
   ```javascript
   const myTheme = new ThemeBuilder("MyDarkTheme", "dark");
   ```
   * **Theme Name:** The first argument, `"MyDarkTheme"`, is the name of your theme. It should be a descriptive name that reflects the theme's style.
   * **Theme Mode:** The second argument, `"dark"`, specifies the base mode of the theme (either "light" or "dark").

3. **Customize theme properties:**
   ```javascript
   myTheme.primaryColor = "#333";
   myTheme.secondaryColor = "#666";
   // ... other theme property customizations
   ```
   You can customize various theme properties, such as:
   * `primaryColor`
   * `secondaryColor`
   * `textColor`
   * `backgroundColor`
   * `fontFamily`
   * `fontSize`
   * `fontWeight`
   * // ... and many more

