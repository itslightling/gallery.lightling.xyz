# lightgallery

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Nuxt Documentation

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

### Special Directories

Nuxt exposes the following extra directories, some of which have special behaviors. ~~Only `pages` is required~~ (using `router.js` instead)

#### `assets`

The assets directory contains uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

#### `components`

The components directory contains Vue.js components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

#### `layouts`

Layouts are intended for features like a sidebar or making distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

#### ~~`pages`~~ using `@nuxtjs/router` instead

~~This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.~~

~~More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).~~

#### `plugins` (currently unused)

The plugins directory contains JavaScript plugins that should run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time `Vue.use()` is used, create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

#### `static`

This directory contains static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

#### `store` (currently unused)

This directory contains Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
