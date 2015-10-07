#
# Binaries
#

nodemon = ./node_modules/.bin/nodemon --harmony --quiet
BIN := ./node_modules/.bin
BROWSERIFY := $(BIN)/browserify
DUO := $(BIN)/duo

#
# Default
#

default: run

#
# Build.
#

build: node_modules
				@$(BROWSERIFY) -t babelify client/app/index.js > client/build.js
				@$(DUO) client/app/index.css --stdout --quiet --use duo-myth > client/build.css

#
# Remove non-checked-in dependencies
#

clean:
	@rm -rf node_modules components

#
# Run the server in debug mode
#

debug: node_modules
	@node debug --harmony ./server.js --development

#
# Run the server
#

run: build
	@node --harmony ./server.js

#
# Run the server for development via nodemon
#

serve: node_modules
	@$(nodemon) --watch serve --watch serve ./server.js --development

# TODO: make test

#
# Targets
#

node_modules: package.json
	@npm install
	@touch node_modules

#
# Phonies
#

.PHONY: build
.PHONY: clean
.PHONY: debug
.PHONY: run
.PHONY: serve
