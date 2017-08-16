/*
  This is the H5P server which was altered to handle exercises, then altered to not
    handle exercises. Most of the new code has to do with handling exercises,
    which is no longer done here.

  NOTE:
    The config.host, config.port have been moved to root/http.json.
*/
const data = require ("../../config").h5p;

// new code
const EXERCISE_MAIN_EXT = "/assets/exercise";
const EXERCISE_MAIN = "." + EXERCISE_MAIN_EXT;
const MODULES_MAIN  = EXERCISE_MAIN + "/modules";
const PUG_MAIN      = EXERCISE_MAIN + "/views";

// to here

console.log("server from /lib");
var http = require('http');
var dispatcher = require('httpdispatcher');
var fs = require('fs');
var path = require('path');
var express = require('express');
var extend = require('node.extend');
var bodyParser = require("body-parser");

//new code
var pug  = require('pug');
var cookieParser = require("cookie-parser");

var cookie = require(MODULES_MAIN + "/cookie.js");

//till here

var H5PLibrary = require('./h5p-library.js');
var H5PLibraryList = require('./h5p-library-list.js');

var pjson = require('../package.json');
var h5pIntegration = require('./h5p-integration-template.json');

var app = express();

//new code
app.set('view engine', 'pug');
app.use(cookieParser())
//till here

// new code - check if file exists
function fileExists (path, callback){
  fs.access(path, undefined, function (err){
    callback (!err);
  });
}
// to here

function H5PServer(configFile) {
  this.cwd = process.cwd();

  configFile = configFile || 'h5p-server.json';

  try {
    this.config = require(path.join(this.cwd, configFile));
  } catch (err) {
    return console.error('Missing mandatory h5p-server.json in current working directory: ' + err);
  }

  var libraryList;
  var dependencies;
  var js = [];
  var css = [];

  this.libraryDir = path.join(this.cwd, this.config.libraryDir);
  this.mainLibraryDir = path.join(this.libraryDir, this.config.mainLibraryDir);
  this.contentDir = path.join(this.cwd, this.config.contentDir);

  this.libraryList = H5PLibraryList.fromDirectory(this.libraryDir);
  this.mainLibrary = H5PLibrary.fromFile(path.join(this.mainLibraryDir, 'library.json'));
  this.mainLibrary.setParentFolderName(this.config.mainLibraryDir);

  this.createDependencyList();
  this.createJsAndCssList();

  this.printConfig();
}

H5PServer.prototype.printConfig = function () {
  console.log('>>> Current setup:');
  console.log('Using main library in ' + this.mainLibraryDir);
  console.log('Fetching other libraries from ' + this.libraryDir);
  console.log('Fetching content from ' + this.contentDir);
  console.log('Main library: ' + this.mainLibrary.getTextualNameAndVersion());
  console.log('<<<\n');
};

H5PServer.prototype.start = function (done) {
  var self = this;

  app.use('/libs', express.static(this.config.libraryDir));
  app.use('/content', express.static(this.config.contentDir));
  app.use('/assets', express.static(__dirname + '/assets'));

  app.use(bodyParser.urlencoded({ extended: false }));

  /*app.post('/libraries', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    var libraries = req.param('libraries', null);

    res.send(JSON.stringify(
      [{"uberName":"H5P.AdvancedText 1.1","name":"H5P.AdvancedText","majorVersion":"1","minorVersion":"1","tutorialUrl":null,"title":"Advanced Text","runnable":"0","restricted":false}]
    ));
  });*/

  // Return semantics for library
  app.get('/libraries/:machineName/:majorVersion/:minorVersion', function (req, res) {

    var library = this.libraryList.get(req.params.machineName);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      javascript: {},
      language: null,
      semantics: library.getSemantics()
    }));
  });


  app.get('/h5p-ajax/content-user-data/1/state/0', function (req, res) {
    res.end('Content user data not implemented');
  });

  app.get('/libraries', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    var libraries = this.libraryList.getList();
    var result = [];
    for (var i = 0; i < libraries.length; i++) {
      var lib = libraries[i].data;
      if (lib.runnable) {
        result.push({
          name: lib.machineName,
          title: lib.title,
          majorVersion: lib.majorVersion,
          minorVersion: lib.minorVersion,
          restricted: false,
          tutorialUrl: null
        });
      }
    }

    res.send(JSON.stringify(result));
  });

  /*app.post("/", function (req, res) {
    // TODO
  });*/

//new code
  // Get the exercise ...
  app.get("/:type/exercise", function(req,res){
    var exercise = require(MODULES_MAIN + "/" + req.params.type + ".js");
    var render   = pug.compileFile(PUG_MAIN + "/" + req.params.type + "/render.pug");

    // ook!
    var cookieName = cookie.getName (req.params.type);
    var exer = exercise.create (render, req.cookies[cookieName]);

    // for use with sllist+: if it has an ook!
    if (typeof (exer) === "object" && exer.ook){
      cookie.send (res, cookieName, exer.ook);
      exer = exer.exercise;
    }

    // send them the exercise
    res.status(200).send(exer);
  });

  // Reset the exercise
  app.get("/:type/reset", function(req, res){
    var exercise = require(MODULES_MAIN + "/" + req.params.type + ".js");
    var cookieName = cookie.getName (req.params.type);
    var ook = req.cookies[cookieName];

    cookie.reset (res, cookieName);

    exercise.reset (ook);
    res.sendStatus(200);
  })

//til here

  app.get("/:type", function(req, res) {
    console.log (req.params);

      res.writeHead(200, {'Content-Type': 'text/html'});
      var currentContentName = req.params.type;

      var devConfig = self.getDevConfig();
      currentContentName = currentContentName || devConfig.contents[0];

      var h5pContainer;
//      if (self.mainLibrary.displayUsingIframe()) {
      h5pContainer = '<div class="h5p-iframe-wrapper"> <iframe id="h5p-iframe-1" class="h5p-iframe" data-content-id="1" style="height:1px; margin-bottom:1px; width: 100%; margin: auto;" src="about:blank" frameBorder="0" scrolling="no"></iframe> </div>';

    /*    }
        else {
          h5pContainer = '<div class="h5p-content h5p-frame" data-content-id="1"></div>';
        }*/

// new code
      var exercise;
      var exerPath = EXERCISE_MAIN_EXT + "/" + currentContentName + ".html";
      exercise = '<div><iframe style="padding-left:50; margin-top:40px; min-width: 900px; width:60%; float: left; position: relative; left: 20%;" src="' + exerPath + '" frameBorder="0" scrolling="no" id="exercise"></iframe></div>';
	console.log (exercise);
//till here

      fileExists ("."+exerPath, function(f){
        var response = '<html><head><meta charset="UTF-8">' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">' +
        '<link rel="stylesheet" type="text/css" href="/assets/h5p-core/library/styles/h5p.css">' +
        '<script type="text/javascript" src="/assets/h5p-core/library/js/jquery.js"></script>' +
        '<script type="text/javascript" src="/assets/h5p-core/library/js/h5p.js"></script>' +
        '<script type="text/javascript" src="/assets/h5p-core/library/js/h5p-event-dispatcher.js"></script>' +
        '<script type="text/javascript" src="/assets/h5p-core/library/js/h5p-x-api-event.js"></script>' +
        '<script type="text/javascript" src="/assets/h5p-core/library/js/h5p-x-api.js"></script>' +
        '<script type="text/javascript" src="/assets/h5p-core/library/js/h5p-content-type.js"></script>' +/*
        '<script type="text/javascript" src="/assets/h5p-core/editor/scripts/h5peditor-editor.js"></script>' +
        '<script type="text/javascript" src="/assets/h5p-core/editor/scripts/application.js"></script>' +
        '<script type="text/javascript" src="/assets/h5p-core/editor/language/en.js"></script>' +*/
        '<script type="text/javascript">' +
        'H5PIntegration=' + JSON.stringify(self.createH5PIntegration(self.getJsonContent(currentContentName), currentContentName)) + ';' +
        'H5PDev=' + JSON.stringify(self.getDevConfig(currentContentName)) + ';' +
        '</script>' +
        '<script type="text/javascript" src="/assets/exercise/resizeIframe.js"></script>' +
        '<script type="text/javascript" src="/assets/h5p-server.js"></script>' +
	'<script type="text/javascript" src="/assets/exercise/fullscreen.js"></script>' +
        '<link rel="stylesheet" type="text/css" href="/assets/h5p-server.css">' +
        '</head>' +
        '<body>' +
        //'<div class="h5p-dev-menu hidden">' +
        //  '<div class="h5p-dev-menu-header">H5P Dev Tool ' + pjson.version + '</div>' +
        //  '<div class="h5p-dev-menu-group h5p-dev-contents"><div class="header">Content switcher</div><div class="content"></div></div>' +
        //  '<div class="h5p-dev-menu-group h5p-dev-events"><div class="header">Events<span class="event-counter">0</span></div><div class="content"></div></div>' +
        //  '<div class="h5p-dev-menu-group h5p-dev-library-meta"><div class="header">Library metadata</div><div class="content"></div></div>' +
        //'</div>' +
        //'<div class="h5p-dev-header">' +
        //  '<span class="machine-name-and-version">' + /*self.mainLibrary.getTextualNameAndVersion() +*/
        //  '<span class="author">' + /*[ by ' + self.mainLibrary.getAuthor() + */' </span></span>' +
        //  '<span class="h5p-cli-version">CLI ' + /*pjson.version*/ + '</span>' +
        //'</div>' +
        //'<div class="h5p-dev-h5p">' +
        /*'<button class="h5p-dev-edit">Edit</button>' +*/
        h5pContainer;

  //new code
        // only send the exercise if it exists
        //if (f)
        //  response += exercise;
  //till here

        //response += '</div>' +
        //'<div class="h5p-dev-editor-wrapper"><div class="h5p-dev-editor-buttons"><button class="cancel">Cancel</button><button class="save">Save</button></div><div class="h5p-dev-editor"></div></div>' +
        '</body>' +
        '</html>';

        res.end(response);
      });
  });

  var server = app.listen(data.port, data.host, function () {
		//app.listen(this.config.port, function() {
    console.log('--> H5P development server listening at http://%s:%s', data.host, data.port);
    if (done) {
      done('http://' + data.host + ':' + data.port);
    }
  });
};

H5PServer.prototype.getJsonContent = function (contentName) {
  var devConfig = this.getDevConfig();
  contentName = contentName || devConfig.contents[0];
  var content = {};

  var contentFile = path.join(this.contentDir, contentName, 'content.json');

  console.log('Loading content from: ' + contentFile);

  try {
    //content = require(contentFile);
    var file = fs.readFileSync(contentFile, "utf8");
    content = JSON.parse(file);
  }
  catch (e) {
    console.log('Content not found');
  }

  return content;
};

H5PServer.prototype.getDevConfig = function (currentContent) {
  var self = this;

  var dirs = fs.readdirSync(this.contentDir).filter(function (file) {
    return fs.statSync(path.join(self.contentDir, file)).isDirectory();
  });

  var devConfig = {
    contents: dirs,
    currentContent: currentContent || dirs[0],
    mainLibrary: this.mainLibrary.getData(),
    editor: self.getEditorSettings()
  };
  return devConfig;
};

H5PServer.prototype.getEditorSettings = function () {
  return {
    ajaxPath: '/h5peditor',
    copyrightSemantics: {},
    fileIcon: {
      height: 50,
      width: 50,
      path: ''
    },
    filesPath: 'fileuspathus',
    libraryPath: 'librarypathus',
    modulePath: '/assets/h5p-core/editor',
    assets: {
      css: [
        '/assets/h5p-core/library/styles/h5p.css',
        '/assets/h5p-core/editor/styles/css/application.css'
      ],
      js: [
        '/assets/h5p-core/library/js/jquery.js',
        '/assets/h5p-core/library/js/h5p.js',
        '/assets/h5p-core/library/js/h5p-event-dispatcher.js',
        '/assets/h5p-core/library/js/h5p-x-api-event.js',
        '/assets/h5p-core/library/js/h5p-x-api.js',
        '/assets/h5p-core/library/js/h5p-content-type.js',
        '/assets/h5p-core/editor/scripts/h5peditor.js',
        '/assets/h5p-core/editor/scripts/h5peditor-semantic-structure.js',
        '/assets/h5p-core/editor/scripts/h5peditor-editor.js',
        '/assets/h5p-core/editor/scripts/h5peditor-library-selector.js',
        '/assets/h5p-core/editor/scripts/h5peditor-form.js',
        '/assets/h5p-core/editor/scripts/h5peditor-text.js',
        '/assets/h5p-core/editor/scripts/h5peditor-html.js',
        '/assets/h5p-core/editor/scripts/h5peditor-number.js',
        '/assets/h5p-core/editor/scripts/h5peditor-textarea.js',
        '/assets/h5p-core/editor/scripts/h5peditor-file.js',
        '/assets/h5p-core/editor/scripts/h5peditor-av.js',
        '/assets/h5p-core/editor/scripts/h5peditor-group.js',
        '/assets/h5p-core/editor/scripts/h5peditor-boolean.js',
        '/assets/h5p-core/editor/scripts/h5peditor-list.js',
        '/assets/h5p-core/editor/scripts/h5peditor-list-editor.js',
        '/assets/h5p-core/editor/scripts/h5peditor-library.js',
        '/assets/h5p-core/editor/scripts/h5peditor-library-list-cache.js',
        '/assets/h5p-core/editor/scripts/h5peditor-select.js',
        '/assets/h5p-core/editor/scripts/h5peditor-dimensions.js',
        '/assets/h5p-core/editor/scripts/h5peditor-coordinates.js',
        '/assets/h5p-core/editor/scripts/h5peditor-none.js',
        '/assets/h5p-core/editor/ckeditor/ckeditor.js'
      ]
    }
  };
};

H5PServer.prototype.createDependencyList = function () {
  this.dependencies = new H5PLibraryList();
  this.mainLibrary.getDependencies(this.libraryList, this.dependencies);
  this.mainLibrary.getDependenciesFromSemantics(this.libraryList, this.dependencies);
};

H5PServer.prototype.createJsAndCssList = function () {
  this.js = this.dependencies.getPreloadedJsList('/libs');
  this.css = this.dependencies.getPreloadedCssList('/libs');

  // Add library itself
  this.js = this.js.concat(this.mainLibrary.getPreloadedJsList('/libs'));
  this.css = this.css.concat(this.mainLibrary.getPreloadedCssList('/libs'));

  this.js.push('/assets/h5p-overrides.js');
};

H5PServer.prototype.createH5PIntegration = function (content, contentName) {
  return extend(true, {
    "baseUrl": "/",
    "url": '/content/' + contentName,
    "contents": {
      "cid-1": {
        "library": this.mainLibrary.getTextualNameAndVersion(false),
        "jsonContent": JSON.stringify(content),
        "fullScreen": this.mainLibrary.fullscreen(),
        "exportUrl": undefined,
        "embedCode": undefined,
        "resizeCode": "",
        "mainId": "1",
        "url": "/",
        "title": this.mainLibrary.getTitle(),
        "contentUserData": [
          {
            "state": false
          }
        ],
        "disable": 6,
        "styles": this.css,
        "scripts": this.js
      }
    }
  }, h5pIntegration);
};

module.exports = H5PServer;
