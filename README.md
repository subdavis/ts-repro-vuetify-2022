# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Developing the service worker

* [Read the lifecycle guide](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)

When in `yarn dev` mode, it's a good idea to keep `Appplication -> Service Workers` set to:

* Update on reload
* Bypass for network

You can test the service worker update routine:

* Run `yarn preview` and open the built preview in your browser (Not really possible with `yarn dev`).
    * You'll need to modify `.env.production` to point to your dev server probably.
* Make some code changes, and run `yarn build`.
* Refresh the preview tab, and see the prompt to load new content.
