System.config({
  "paths": {
    "*": "*.js",
    "app/*": "lib/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "immutable": "github:facebook/immutable-js@3.6.2",
    "jquery": "github:components/jquery@2.1.3",
    "lodash-amd": "github:lodash/lodash-amd@2.4.1",
    "scribe": "npm:scribe@1.1.0"
  }
});

