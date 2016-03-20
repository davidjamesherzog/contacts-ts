# Contacts demo application

## Getting Started (Local Development)

### Requirements

The development environment for this app requires the
following tools be installed:

 * [NodeJS](http://nodejs.org/) >= 0.10 (latest stable preferred)
 * [npm](https://www.npmjs.com/) (should be bundled with node)
 * [Gulp](https://github.com/gulpjs/gulp) (`sudo npm install -g gulp`)
 * [Bower](http://bower.io/) (`sudo npm install -g bower`)
 * [nodemon](https://github.com/remy/nodemon) (`sudo npm install -g nodemon`)
 * [node-dev](https://github.com/fgnass/node-dev) (`sudo npm install -g node-dev`)

### Setup

To get started with development, first clone this repository and install
the dependencies:

    $ git clone git@github.com:davidjamesherzog/contacts.git
    $ npm install
    $ bower install

When ready to actively develop:

    $ gulp serve-dev

This command builds the client app for development, then serves it up
in your browser via Browser Sync at [http://localhost:3000](http://localhost:3000). Changes made will automatically be served up by
Browser Sync.  If you do not want Browser Sync to run, use the nosync parameter:

    $ gulp serve-dev --nosync

The app will be served up at [http://localhost:8001](http://localhost:8001).

Should you want watchers to run so that the app will auto test every time you save a file, simply run:

    $ gulp autotest


## Running Tests

The full test suite can be run with:

    $ gulp test

While developing, you can continuously test the code you are editing
by running:

    $ gulp autotest
    
For easier debugging while testing, you can run the spec runner in your browser by running:

    $ gulp serve-specs


## Primary Gulp Tasks

#### `build`

Builds the client application. Build results are output to `build/`. 

#### `test`

Runs the full application test suite. Test results are output to the console,
and a test coverage report is output to `report/`.

#### `autotest`

Watches the filesystem for changes and rebuilds parts of the application as
needed, running the test suite once the rebuild completes. 
