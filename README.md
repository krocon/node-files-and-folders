# files-and-folders (FnF)
Become a master of file management with **"Files and Folders"** (FnF).

It's an early version! Tested on Windows 7 and Mac OS X only. Documentation will be expanded and new features will be added.

![screen](https://cloud.githubusercontent.com/assets/11378781/14437724/ed962c40-0022-11e6-963f-523c2225df9b.png)

## Main features of FnF:

* Cross-platform (Frontend: browser, Backend: node.js)
* Orthodox file managers (two-panel directory view with a command line below)
* Tabbed interface
* All operations working in queues
* Multi-rename tool (Batch rename, apply filename changes to a group of files simultaneously)
* Multi-group tool (Arranging and Grouping files, moving files to folders)
* Directory history for changing back to recently viewed directories.
* Configurable extensions menu to start external programs
* [User definable colors](#colors)
* [User definable keyboard shortcuts](#shortcuts)
* File List Filtering: Quickly filter a list of files by name, extension, or kind.
* Smart Sorting: Sort by folders, packages, or files first.
* Work with your files side-by-side in a customizable Dual Pane View and enjoy Full Keyboard Navigation.
* Access frequently used files and folders with Bookmarks and Tab Presets.
* View and manipulate hidden files.
* Application Launcher: Access your apps with the press of a key.
* Copy Names or Path of selected files and folders as text or json to clipboard.
* Open a terminal window with active folder ("New Terminal Here")
* Much more

## Installation

Create an empty folder. Open your shell (console) and navigate to this folder. Enter:  
> npm i files-and-folders

A directory named *node_modules* is create with some sub folders.
Navigate to *node_modules/files-and-folders/*.
Start app with:  node demo.app.js

## Usage

Edit and call the demo app:
```js
(function () {
  "use strict";

  var fnf = require('files-and-folders-server');
  console.info('app / __dirname :', __dirname);
  fnf.start({
    // auth: require('./demo.auth.js'), // optional
    clientRoot: __dirname + '/node_modules/files-and-folders-client/release',
    port:3002
  });
})();
```
You can set an auth module, see demo.auth.js.

### Customizing
#### User definable colors: <a name="colors"></a>
A color customizing dialog will be added. At the moment you can change an existing color scheme (or add a new one) by editing the json files in the folder *./node_modules/files-and-folders-server/config/color/*.
In browser click on the last button (pencil icon) to open the color menu and select a color scheme. The colors changes immediately. This state will be saved (see *./node_modules/files-and-folders-server/temp/*). This means, after page reload you will get the last (saved) state.

#### User definable keyboard shortcuts: <a name="shortcuts"></a>
Speed up your workflow by relying less on the mouse. Create a custom list of keyboard shortcuts using various action keys.

A keyboard shortcut customizing dialog will be added. At the moment you can change the shortcuts by editing the json files in the folder *./node_modules/files-and-folders-server/config/shortcut/*. There is a file with one of these names: *osx.json*, *windows.json* and *linux.json*. The used file depends on your operating system.

In these json files you can map a shortcut with an action id. You can add more than one shortcut to an action id. The action ids should be self explained. Shortcuts are expained here: [Keypress](https://dmauro.github.io/Keypress/) by David Mauro.





# More infos coming soon...