---
sidebar_position: 2
---
# Creating Acode Plugins

## Overview

Acode opens up a world of possibilities with its extensibility through plugins. In this guide, you'll learn how to create plugins using JavaScript, with the added option of TypeScript. Whether you're customizing your coding experience or adding entirely new features, creating plugins for Acode is a straightforward and rewarding process.

## Plugin Structure

Acode plugins follow a specific structure within a zip file. The necessary components include:

1. **plugin.json:**
   - Contains crucial information about the plugin, such as its name, description, author, and more.

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

1. **Download the Plugin Template:**
   - Choose the template that suits your needs and download it or clone it.

2. **Unzip the Template:**
   - Extract the contents of the downloaded zip file to your desired location.

3. **Customize plugin.json:**
   - Open the `plugin.json` file and update it with your plugin's information.

4. **Develop Locally:**
   - Use `npm run start-dev` or `yarn start-dev` to initiate a development server that watches for changes.
   - The development server automatically creates a plugin zip file, ready for installation.

5. **Install the Plugin:**
   - Use the **REMOTE** option in Acode's plugin manager.
   - Provide the plugin URL (e.g., http://\<ip\>:3000/dist.zip) when prompted.

6. **Iterate and Refine:**
   - Make changes to your code as needed.
   - Remember to reinstall the plugin using the **REMOTE** option after each modification.

## Building and Publishing

To share your plugin with the Acode community, follow these steps:

1. **Build Release:**
   - Use `npm run build-release` or `yarn build-release` to create a release build.

2. **Publish:**
   - Publish your release build on Acode's official website, making your plugin accessible to the broader community.

## Tutorial

For a hands-on walkthrough, check out our [YouTube Tutorial](https://www.youtube.com/watch?v=dummy_link) on creating Acode plugins. This tutorial covers the entire process, from setting up your development environment to publishing your plugin.

Happy coding, and may your plugins bring new dimensions to your Acode experience! 🚀✨