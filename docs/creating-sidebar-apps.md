---
sidebar_position: 5
---

# Sidebar Apps

### **Sidebar Apps in Acode**

Acode's **sidebarApps** module offers a robust framework for integrating mini applications directly into the sidebar of the code editor. This feature enhances user experience by providing quick access to supplementary tools and functionalities.

#### **1. Initialization:**
To utilize the sidebarApps module, you first need to initialize it within your Acode environment:

```javascript
const sidebarApps = acode.require('sidebarApps');
```

#### **2. Adding a Sidebar App:**
The `add` method is the key function to add a new sidebar app. It accepts the following parameters:

- **`icon` (string):** Class name of the icon representing the app.
- **`id` (string):** Unique identifier for the sidebar app.
- **`title` (string):** Title of the sidebar app displayed to the user.
- **`initFunction` (Function):** Function to be executed when the sidebar app is opened. This function receives an `app` HTMLElement as a parameter, allowing you to dynamically populate the app content.

**Example:**
```javascript
acode.addIcon('my-icon', 'https://acode.foxdebug.com/my-icon.svg');
sidebarApps.add('my-icon', 'my-sidebar-app', 'My Sidebar App', (app) => {
  app.innerHTML = 'Hello World!';
});
```

#### **3. Retrieving a Sidebar App:**
The `get` method allows you to retrieve a specific sidebar app element based on its unique identifier. This provides the flexibility to manipulate or interact with the app after its creation.

**Example:**
```javascript
const app = sidebarApps.get('my-sidebar-app');
```

#### **4. Use Cases:**
- **Version Control Integration:** Integrate version control functions like commit, push, and pull directly into the sidebar.
- **Project Management:** Develop apps for managing project tasks, deadlines, and milestones.
- **Other features:** Develop chatbots loke copilot and gpt, create forms, develop PostMan like RestAPI clients and much more...

#### **5. User Interaction:**
Utilize event listeners and interactive elements within the sidebar app to allow users to perform actions such as clicking buttons, filling out forms, or triggering specific functions related to the app's purpose.