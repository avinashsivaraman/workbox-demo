/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app.js",
    "revision": "8251b5fc84ba8103d6b3067b7e76988b"
  },
  {
    "url": "index.css",
    "revision": "473c18847c4417cf90dbe6d78497e327"
  },
  {
    "url": "index.html",
    "revision": "2f71a09f52700d0e5abdac0469ad073d"
  },
  {
    "url": "workbox-config.js",
    "revision": "5c2138db6b5692fb9b6ba5b4a7f2d8ea"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
