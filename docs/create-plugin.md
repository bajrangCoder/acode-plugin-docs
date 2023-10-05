---
sidebar_position: 2
---

# Creating Acode Plugins

## Overview

Acode opens up a world of possibilities with its extensibility through plugins. In this guide, you'll learn how to create plugins using JavaScript, with the added option of TypeScript. Whether you're customizing your coding experience or adding entirely new features, creating plugins for Acode is a straightforward and rewarding process.

## Plugin Structure

Acode plugins follow a specific structure within a zip file. The necessary components include:

1. **plugin.json:**

   - Contains crucial information about the plugin, such as its name, version, author, and more.

2. **main.js:**

   - The heart of the plugin, this file contains the actual plugin code.

3. **readme.md:**
   - Contains the description or about plugin

## Plugin Templates

To make your journey smoother, we provide comprehensive plugin templates, which are preconfigured and catering to various use cases:

1. **[JavaScript Template](https://github.com/deadlyjack/acode-plugin)** ![official](https://img.shields.io/badge/official-brightgreen) : Javascript based template for plugin development and comes preconfigured

2. **[TypeScript Template](https://github.com/bajrangCoder/AcodeTSTemplate)** ![community](https://img.shields.io/badge/community-yellow) : Typescript template for plugin development and comes with type checking and all typescript feature

3. **[Mobile Template](https://github.com/bajrangCoder/acode-plugin-template)** ![community](https://img.shields.io/badge/community-yellow) : Fork of official JavaScript Template with some tweaks and additional configuration to work on **Termux**

:::tip

[acode-cli](https://github.com/coswat/acode-cli) : A community driven cli tool to develop acode plugins easily. Its fast and easy to use and written in **rust**

:::

## Getting Started

1.  **Clone the Plugin Template:**

    - Choose the template that suits your needs and clone it.

2.  **Customize plugin.json:**

    - Open the `plugin.json` file and update it with your plugin's information.

3.  **Install the dependency:**

    - Install the required dependency by your package manager but first navigate to the plugin template folder by `cd acode-template`

   ```bash npm2yarn
   npm install
   ```

4.  **Develop Locally:**

    - Use given commands to initiate a development server that watches for changes.
    - The development server automatically creates a plugin zip file, ready for installation.

    ```bash npm2yarn
    npm run start-dev
    ```
    
    - Or you can build every time manually on changes using :

    ```bash npm2yarn
    npm run build
    ```

5.  **Install the Plugin:**

    - Use the **REMOTE** option in Acode's plugin manager.
    - Provide the plugin URL (e.g., `http://\<ip\>:3000/dist.zip`) when prompted.
    - Or if you are building manually then you can use the **Local** option in Acode's plugin manager and select the plugin zip

:::info
Development server will only build the zip on file changes but for testing in Acode, You will need to install plugin in Acode on changes to see effect
:::

## Building and Publishing

To share your plugin with the Acode community, follow these steps:

1. **Bundle for production:**

   - Use `build-release` command to create a production build. which will be lower in size

   ```bash npm2yarn
   npm run build-release
   ```

2. **Publish:**
   - Publish your release build on [Acode's](https://acode.foxdebug.com) official website, making your plugin accessible to the broader community.

   - Tutorial for publishing a plugin : [Youtube](https://youtube.com/shorts/cxF2pxyN1HM?si=kQ5_BRtIO2RU-zhb)

## Tutorial

- Checkout a small tutorial of 👉 [How to create Acode Plugins?](https://youtu.be/ls--txHX3RQ?si=ZSvJMsb1KFeQA8zd)

- Tutorial for creating plugin using `acode-cli`: [Here](https://youtube.com/shorts/Uyy2dcLx6iI?si=8M-HorDu0YTPJP-J)

Happy coding, and may your plugins bring new dimensions to your Acode experience! 🚀✨
