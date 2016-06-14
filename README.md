# HTML5 / Bootstrap Website Skeleton

This project is an website skeleton for a typical HTML5, Bootstrap website. You can use it to quickly bootstrap your HTML5 website projects and dev environment for these projects.

The skeleton contains a ideal directory structure and is preconfigured to install the Bootstrap and a bunch of development tools for instant website development, tools which includes SASS, Jquery, Gulp and gulp build script.

The ideal folder structure and libs, scripts in this skeleton are based on best practices.

## Getting Started

To get you started you can simply clone the website-skeleton repository and install the dependencies:

### Prerequisites

You need git to clone the website-skeleton repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test website-skeleton. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone website-skeleton

Clone the website-skeleton repository using [git][git]:

```
git clone https://github.com/sidgujrathi/website-skeleton.git
cd website-skeleton
```

If you just want to start a new project without the website-skeleton commit history then you can do:

```bash
git clone --depth=1 https://github.com/sidgujrathi/website-skeleton.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: gulp tools and angular framework, Bootstrap and Jquery.  The tools help
us to automate several retundant task such as JS, CSS minification and SASS compilaion

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular and other code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/src/assets/libs/` - contains the JQuery and Bootstrap files

*Note that the `bower_components` folder would normally be installed in the root folder but
website-skeleton changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application
Once you have installed all dependencies, run gulp command for one time initial build.
```
gulp
```
Then, you can put app/dist folder in any webserver you like, for ex. WAMP or XAMP.
And browse to the app at `http://localhost/app/dist/index.html`.

##TODO List
  * Add gulp task to minify all html files
  * add local web server support by adding http-server package
