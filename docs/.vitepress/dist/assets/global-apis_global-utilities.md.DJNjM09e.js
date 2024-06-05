import{_ as e,c as a,o as t,a1 as i}from"./chunks/framework.BlxYlo1f.js";const k=JSON.parse('{"title":"Other Global Utilities","description":"","frontmatter":{},"headers":[],"relativePath":"global-apis/global-utilities.md","filePath":"global-apis/global-utilities.md"}'),s={name:"global-apis/global-utilities.md"},r=i(`<h1 id="other-global-utilities" tabindex="-1">Other Global Utilities <a class="header-anchor" href="#other-global-utilities" aria-label="Permalink to &quot;Other Global Utilities&quot;">​</a></h1><p>These extra global APIs provide essential information about asset directories, storage locations, app features, and system specifications.</p><h2 id="assets-directory" tabindex="-1">ASSETS_DIRECTORY <a class="header-anchor" href="#assets-directory" aria-label="Permalink to &quot;ASSETS_DIRECTORY&quot;">​</a></h2><p><code>&lt;string&gt;</code> The directory where all the assets are stored.</p><h2 id="cache-storage" tabindex="-1">CACHE_STORAGE <a class="header-anchor" href="#cache-storage" aria-label="Permalink to &quot;CACHE_STORAGE&quot;">​</a></h2><p><code>&lt;string&gt;</code> The directory where all the cache files are stored.</p><h2 id="data-storage" tabindex="-1">DATA_STORAGE <a class="header-anchor" href="#data-storage" aria-label="Permalink to &quot;DATA_STORAGE&quot;">​</a></h2><p><code>&lt;string&gt;</code> The directory where all the data files are stored.</p><h2 id="plugin-dir" tabindex="-1">PLUGIN_DIR <a class="header-anchor" href="#plugin-dir" aria-label="Permalink to &quot;PLUGIN_DIR&quot;">​</a></h2><p><code>&lt;string&gt;</code> The directory where all the plugins are stored.</p><h2 id="does-support-theme" tabindex="-1">DOES_SUPPORT_THEME <a class="header-anchor" href="#does-support-theme" aria-label="Permalink to &quot;DOES_SUPPORT_THEME&quot;">​</a></h2><p><code>&lt;boolean&gt;</code> Whether the app supports theme or not.</p><h2 id="is-free-version" tabindex="-1">IS_FREE_VERSION <a class="header-anchor" href="#is-free-version" aria-label="Permalink to &quot;IS_FREE_VERSION&quot;">​</a></h2><p><code>&lt;boolean&gt;</code> Whether the app is free version or not.</p><h2 id="keybinding-file" tabindex="-1">KEYBINDING_FILE <a class="header-anchor" href="#keybinding-file" aria-label="Permalink to &quot;KEYBINDING_FILE&quot;">​</a></h2><p><code>&lt;string&gt;</code> The file where all the keybindings are stored.</p><h2 id="android-sdk-int" tabindex="-1">ANDROID_SDK_INT <a class="header-anchor" href="#android-sdk-int" aria-label="Permalink to &quot;ANDROID_SDK_INT&quot;">​</a></h2><p><code>&lt;number&gt;</code> The Android SDK version.</p><p>Here is a very simple example on how to use these APIs:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ASSETS_DIRECTORY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// returns a string like &quot;/path/to/assets&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">IS_FREE_VERSION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//  logs true if user is using free version of the app, else false</span></span></code></pre></div>`,20),l=[r];function o(h,n,d,p,c,g){return t(),a("div",null,l)}const _=e(s,[["render",o]]);export{k as __pageData,_ as default};
