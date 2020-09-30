
/**
 * @roxi/routify 2.0.0
 * File generated Tue Sep 29 2020 22:20:59 GMT+0200 (Central European Summer Time)
 */

export const __version = "2.0.0"
export const __timestamp = "2020-09-29T20:20:59.825Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/Users/lokhmakov/svite-monorepo/apps/client/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/lokhmakov/svite-monorepo/apps/client/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "buttons.svelte",
      "filepath": "/buttons.svelte",
      "name": "buttons",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/lokhmakov/svite-monorepo/apps/client/src/pages/buttons.svelte",
      "importPath": "../src/pages/buttons.svelte",
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/buttons",
      "id": "_buttons",
      "component": () => import('../src/pages/buttons.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/lokhmakov/svite-monorepo/apps/client/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "loaders.svelte",
      "filepath": "/loaders.svelte",
      "name": "loaders",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/lokhmakov/svite-monorepo/apps/client/src/pages/loaders.svelte",
      "importPath": "../src/pages/loaders.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/loaders",
      "id": "_loaders",
      "component": () => import('../src/pages/loaders.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "text.svelte",
      "filepath": "/text.svelte",
      "name": "text",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/lokhmakov/svite-monorepo/apps/client/src/pages/text.svelte",
      "importPath": "../src/pages/text.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/text",
      "id": "_text",
      "component": () => import('../src/pages/text.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "preload": false,
    "prerender": true,
    "precache-order": false,
    "precache-proximity": true,
    "recursive": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

