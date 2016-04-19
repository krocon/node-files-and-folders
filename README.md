# files-and-folders (FnF)
Become a master of file management with **"Files and Folders"** (FnF). FnF is an orthodox browser based file manager for *Mac OS X*, *Windows* and *Linux*.

The server component based on *Node.js*, the client component on *AngularJS*.

It's an early version! Tested on Windows 7 and Mac OS X. Documentation will be expanded and new features will be added.

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

## File Operations / Functions
All file operations can be done on selected items (seleted files/folders in a file panel view or found file/folders after a search).

* [Copy](#Copy)
* [Move](#Move)
* [Create Dir](#CreateDir)
* [Delete](#Delete)
* [Find](#Find)
* [Change Dir (Tree](#ChangeDir)
* [Rename](#Rename)
* [Multi Rename](#MultiRename)
* [Group Files](#GroupFiles)
* [Delete Empty Folders](#DeleteEmptyFolders)
* [Copy names to clipboard](#CopyNamesToclipboard)
* [External Tools / CMD Shell](#ExternalTools)
* [Go to anything](#GoToAnything)

### Copy <a name="copy"></a>
Copies selected items (file and/or folders) to a new target folder.

### Move <a name="Move"></a>
Moves selected items to a new folder.

### Create Dir <a name="CreateDir"></a>
Creates a single sub directory.

### Delete <a name="Delete"></a>
Delete selected items.

### Find <a name="Find"></a>
Finds files or directories.

## Rename <a name="Rename"></a>
Rename a single file or directory.

### Multi Rename <a name="MultiRename"></a>
Multi rename tons of files with patterns or predefined makros.
![multirename](https://cloud.githubusercontent.com/assets/11378781/14649815/f7ce37b0-0668-11e6-8d6c-840ed4241642.png)

### Group Files <a name="GroupFiles"></a>
Moving files to (new) folders. Folder name is derived from file name. Files with running numbers will be moved to one folder. User can specify algorithm in a dialog. A preview is shown before operation starts.
![groupfiles](https://cloud.githubusercontent.com/assets/11378781/14649929/8b83a40e-0669-11e6-8694-a09b66512afb.png)

### Delete Empty Folders <a name="DeleteEmptyFolders"></a>
Delete all empty folder recursive.

### Copy names to clipboard <a name="CopyNamesToclipboard"></a>
Copy names of selected items to clipboard in different styles (tab separated or JSON array).

### External Tools / CMD Shell <a name="ExternalTools"></a>
External tools can be defined in a config file. These tools are external commands.
Predfined: CMD Shell, Edit and Reveal in Finder (Mac).

### Change Dir (Tree <a name="ChangeDir"></a>
Opens a dialog with a list of sub directories.
![changedir](https://cloud.githubusercontent.com/assets/11378781/14649976/dbead624-0669-11e6-914a-fda8bec3c3ec.png)

### Go to anything <a name="GoToAnything"></a>
A small dialog with auto completion allows the user to enter commands.

## Installation

Create an empty folder. Open your shell (console) and navigate to this folder. Enter:
> npm i files-and-folders

A directory named *node_modules* is created with some sub folders.
Navigate to *node_modul
Start app with:  node demo.app.js

### Usage

Edit and call the demo app:
```js
(function () {

  "use strict";

  var fnf = require('files-and-folders-server');
  var open = require('open');

  var port = 3002;

  console.info('app / __dirname :', __dirname);
  fnf.start({
    // auth: require('./demo.auth.js'), // optional
    clientRoot: __dirname + '/node_modules/files-and-folders-client/release',
    port: port
  });

  var url = 'http://localhost:' + port + '/';
  open(url);

})();
```
You can set an auth module, see demo.auth.js.

### Customizing



#### User definable colors: <a name="colors"></a>

A color customizing dialog will be added. At the moment you can change an existing color scheme (or add a new one) by editing the json files in the folder *./node_modules/files-and-folders-server/config/color/*.
In browser click on the last button (pencil icon) to open the color menu and select a color scheme. The colors changes immediately. This state will be saved (see *./node_modules/files-and-folders-server/temp/*). This means, after page reload you will get the last (saved) state.

The user can choose between three predefined color schemes:

Light:
![light Colro Scheme:](https://cloud.githubusercontent.com/assets/11378781/14539794/2c4416da-0282-11e6-8637-5d684c519452.png)

Dark:
![Dark Color Scheme:](https://cloud.githubusercontent.com/assets/11378781/14539705/c04be08e-0281-11e6-80ad-587815be3415.png)

Blackboard:
![Blackboard Scheme:](https://cloud.githubusercontent.com/assets/11378781/14539826/4f6d5f0e-0282-11e6-9b22-06ef8ebb369d.png)


#### User definable keyboard shortcuts: <a name="shortcuts"></a>
Speed up your workflow by relying less on the mouse. Create a custom list of keyboard shortcuts using various action keys.

A keyboard shortcut customizing dialog will be added. At the moment you can change the shortcuts by editing the json files in the folder *./node_modules/files-and-folders-server/config/shortcut/*. There is a file with one of these names: *osx.json*, *windows.json* and *linux.json*. The used file depends on your operating system.

In these json files you can map a shortcut with an action id. You can add more than one shortcut to an action id. The action ids should be self explained. Shortcuts are expained here: [Keypress](https://dmauro.github.io/Keypress/) by David Mauro.

## Related projects

* [angular-filemanager](https://github.com/joni2back/angular-filemanager)
* [extplorer](http://extplorer.sourceforge.net/)
* [simogeo filemanager](https://github.com/simogeo/Filemanager)
* [elFinder](https://github.com/Studio-42/elFinder)
* [Double Commander](http://doublecmd.sourceforge.net/)
* [muCommander](http://www.mucommander.com/)
* [mootools-filemanager](https://github.com/cpojer/mootools-filemanager)
* [Responsive Filemanager](https://github.com/trippo/ResponsiveFilemanager)
* [Filemanager para Laravel 5](https://github.com/guillermomartinez/filemanager-laravel)

# More infos coming soon...