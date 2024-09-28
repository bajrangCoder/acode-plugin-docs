import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Acode Docs",
  description: "Community driven detailed acode and its plugin development guide",
  lastUpdated: true,
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/acode.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/acode.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs" },
      { text: "Tutorials", link: "/tutorials" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright:
        'Copyright © 2024-present <a class="link" href="//acode.app">Acode</a>',
    },
    sidebar: {
      "/docs/": [
        {
          text: "Getting Started",
          collapsed: true,
          items: [
            { text: "Introduction", link: "/docs/getting-started/intro" },
            {
              text: "Create new plugin",
              link: "/docs/getting-started/create-plugin",
            },
            {
              text: "Understanding Plugins",
              link: "/docs/getting-started/understanding-plugin",
            },
          ],
        },
        {
          text: "Plugin Essentials",
          collapsed: true,
          items: [
            {
              text: "Manifest",
              link: "/docs/plugin-essentials/manifest",
            },
            {
              text: "Core File",
              link: "/docs/plugin-essentials/core-file",
            },
          ],
        },
        {
          text: "Global APIs",
          collapsed: true,
          items: [
            {
              text: "Ace",
              link: "/docs/global-apis/ace",
            },
            {
              text: "Acode",
              link: "/docs/global-apis/acode",
            },
            {
              text: "Added Folder",
              link: "/docs/global-apis/added-folder",
            },
            {
              text: "EditorManager",
              link: "/docs/global-apis/editor-manager",
            },
            {
              text: "Other Global Utilities",
              link: "/docs/global-apis/global-utilities",
            },
          ],
        },
        {
          text: "UI Components",
          collapsed: true,
          items: [
            {
              text: "Dialogs",
              collapsed: true,
              items: [
                {
                  text: "Alert",
                  link: "/docs/ui-components/dialogs/alert",
                },
                {
                  text: "Confirm",
                  link: "/docs/ui-components/dialogs/confirm",
                },
                {
                  text: "Color Picker",
                  link: "/docs/ui-components/dialogs/color-picker",
                },
                {
                  text: "Loader",
                  link: "/docs/ui-components/dialogs/loader",
                },
                {
                  text: "Multi Prompt",
                  link: "/docs/ui-components/dialogs/multi-prompt",
                },
                {
                  text: "Prompt",
                  link: "/docs/ui-components/dialogs/prompt",
                },
                {
                  text: "Select",
                  link: "/docs/ui-components/dialogs/select",
                },
                {
                  text: "Custom Dialog",
                  link: "/docs/ui-components/dialogs/custom-dialog",
                },
              ],
            },
            {
              text: "Toast",
              link: "/docs/ui-components/toast",
            },
            {
              text: "Selection Menu",
              link: "/docs/ui-components/selection-menu",
            },
          ],
        },
        {
          text: "Utilities",
          collapsed: true,
          items: [
            {
              text: "File System(fs)",
              link: "/docs/utilities/fs",
            },
            {
              text: "URL",
              link: "/docs/utilities/url",
            },
            {
              text: "Projects",
              link: "/docs/utilities/projects",
            },
            {
              text: "ACE Modes",
              link: "/docs/utilities/ace-modes",
            },
            {
              text: "Encoding",
              link: "/docs/utilities/encoding",
            },
            {
              text: "OpenFolder",
              link: "/docs/utilities/open-folder",
            },
          ],
        },
        {
          text: "Editor Components",
          collapsed: true,
          items: [
            {
              text: "File Browser",
              link: "/docs/editor-components/file-browser",
            },
            {
              text: "Editor File",
              link: "/docs/editor-components/editor-file",
            },
            {
              text: "File List",
              link: "/docs/editor-components/file-list",
            },
            {
              text: "Page",
              link: "/docs/editor-components/page",
            },
            {
              text: "Palette",
              link: "/docs/editor-components/palette",
            },
            {
              text: "Settings",
              link: "/docs/editor-components/settings",
            },
          ],
        },
        {
          text: "Helpers",
          collapsed: true,
          items: [
            {
              text: "Input Hints",
              link: "/docs/helpers/input-hints",
            },
            {
              text: "Fonts",
              link: "/docs/helpers/fonts",
            },
            {
              text: "Themes",
              link: "/docs/helpers/themes",
            },
            {
              text: "Theme Builder",
              link: "/docs/helpers/theme-builder",
            },
          ],
        },
        {
          text: "Interface APIs",
          collapsed: true,
          items: [
            {
              text: "SideBar Apps",
              link: "/docs/interface-apis/sidebar-apps",
            },
            {
              text: "Side Buttons",
              link: "/docs/interface-apis/side-buttons",
            },
            {
              text: "Context Menu",
              link: "/docs/interface-apis/context-menu",
            },
          ],
        },
        {
          text: "Advanced APIs",
          collapsed: true,
          items: [
            {
              text: "Action Stack",
              link: "/docs/advanced-apis/action-stack",
            },
  
            {
              text: "Intent",
              link: "/docs/advanced-apis/intent",
            },
          ],
        },
      ],
      "/tutorials/": [
        {
          text: "Command Palette",
          link: "/tutorials/command-palette"
        },
        {
          text: "How to run java",
          link: "/tutorials/how-to-run-java"
        }
      ]
    },
    search: {
      provider: "local",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/bajrangCoder/acode-plugin-docs",
      },
      { icon: "discord", link: "https://discord.com/invite/y4MjDXvMXW" },
    ],
    editLink: {
      pattern:
        "https://github.com/bajrangcoder/acode-plugin-docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },
  },
});
