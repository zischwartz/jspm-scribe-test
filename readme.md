# Getting Started
First, clone scribe somewhere on your computer

```
git clone https://github.com/guardian/scribe.git
```

In scribe's `package.json` add one property: `"format": "amd"`

Then, in the `scribe` directory, run the below to tell jspm to install from this directory, not the actual repo or registry.

```
jspm link npm:scribe@1.1.0
```

Now, in this directory, run 

```
jspm install --link npm:scribe@1.1.0
jspm install
```

To install.


# Other Useful commands
```
jspm install scribe=github:guardian/scribe -o "{main:'scribe.js', format:'amd'}"
jspm install immutable=github:facebook/immutable-js
```