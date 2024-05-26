'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e3cb5455e6205908a10cd8d9932d287d",
"index.html": "acbbd65d921d2babd0d0f06561703e8e",
"/": "acbbd65d921d2babd0d0f06561703e8e",
"main.dart.js": "23a7e87f36dac0a6afe58675d1096a82",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e1c06184cedc049805612e07a3789b8",
".git/config": "6543cbc6cd1c41bed3c21a64c6b72169",
".git/objects/pack/pack-6b7a07a23c08dc9a3799d97b6e3376573477c25b.idx": "e2ca1c70f96fc02cb501959b2ff7ab21",
".git/objects/pack/pack-6b7a07a23c08dc9a3799d97b6e3376573477c25b.pack": "97c695656b1741bf3df89e302aaf8064",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7fb8ecea1c0a85000e74e7ef7e5efb15",
".git/logs/refs/heads/main": "7fb8ecea1c0a85000e74e7ef7e5efb15",
".git/logs/refs/remotes/origin/main": "6ceae57374b65c444139387476d266f6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "179629b920b68a52b9d82c25f444bd63",
".git/refs/remotes/origin/main": "179629b920b68a52b9d82c25f444bd63",
".git/index": "2377247bfc935ef120d70d8f8288293e",
".git/FETCH_HEAD": "d05bdf5e62b14e30e222172b56f2a623",
"assets/AssetManifest.json": "5579f8057cb8ba4be33f6484b08d5cdc",
"assets/NOTICES": "c7017aa0b1defd864ce5eeff0079c81e",
"assets/FontManifest.json": "d5a5cdecfa71d83e6f8e00e23f8d5e29",
"assets/AssetManifest.bin.json": "52323b90f5e2b3bb6a36869e3cc56355",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8123b1fa77db71e441dab1483ef6fd01",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "e33c254655d410bba5358577c1a65ecc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5e6ba44a530a14e6f7d3a8d06ec68027",
"assets/fonts/MaterialIcons-Regular.otf": "875d24b2e7b7d2efeaa990a8ee0e608c",
"assets/assets/images/paint.jpg": "b9f37fa7a50a02fe7e992fe20eaa53ec",
"assets/assets/images/room.jpg": "8ac95c55ec8684ddd7cb202616c1501a",
"assets/assets/images/live_app.jpg": "de1a844c94cecf1fa9c8b1f8f86ebae4",
"assets/assets/images/cat.jpg": "de056addd4df7e7fd754d352f3549c1e",
"assets/assets/images/green.png": "be79765df384729af147f22d928457ac",
"assets/assets/images/portfolio.png": "60376873f772416a41c9a6c482e6cef4",
"assets/assets/images/dental.png": "20ab3df01c3c4fc6bfd2ad10bb62a483",
"assets/assets/images/image-world-info.png": "09eb9eab8dbd8565d121f9b930c3f28d",
"assets/assets/images/face_photo.jpg": "cd5a772376b7c989c92e74f7785d574e",
"assets/assets/images/swift_package.png": "43f56bb52b30a7d0ce9a5ffb7a78de44",
"assets/assets/images/simple_blood_pressure.png": "03ae0c32c5ee2bcf354f866e67c2f22f",
"assets/assets/images/yoga.jpg": "77aa2b0687eed4614a04401ded024476",
"assets/assets/images/dart_package.png": "cd75ed34e9c9d3120f33094271ecae1f",
"assets/assets/icons/sns/github.svg": "cea8e48fe9fc5e5c02e94d4147b101a2",
"assets/assets/icons/sns/x.svg": "0c9462a79f736453eac5bf7cbb756875",
"assets/assets/icons/sns/linkedin.svg": "4e5b77579246865acfe515d8215ddbb2",
"assets/assets/icons/skill/linux.svg": "17eb8f433d72c073ec12417f3ca5d157",
"assets/assets/icons/skill/android.svg": "f46bc75ef00d02ddf5e0bdf6635e61ee",
"assets/assets/icons/skill/githubactions.svg": "889c4151482912e281c6c77fb0fefb91",
"assets/assets/icons/skill/flutter.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/icons/skill/python.svg": "71374043d9b3d9ea7fa09976a747d475",
"assets/assets/icons/skill/nodejs.svg": "3ff00db3eb3597629aaf2796cded4028",
"assets/assets/icons/skill/kotlin.svg": "df64e60cd6f3e98007374fd721c4cc1b",
"assets/assets/icons/skill/typescript.svg": "c06d3c068de68e5654d05552e26e3452",
"assets/assets/icons/skill/cp.svg": "e5b135b00998f9cd69a38eed9b1eee81",
"assets/assets/icons/skill/swift.svg": "714948ba4cf994b64135be84ced494e2",
"assets/assets/icons/skill/riverpod.png": "dffcf47eade246cde8cc16289d0a257a",
"assets/assets/icons/skill/bloc.svg": "27d733ca50820f24f12bf2be4360da3c",
"assets/assets/icons/skill/apple.svg": "51f73ac01c1ddbd4e219d1bb22fbcfd2",
"assets/assets/fonts/SilkaMono-Regular.otf": "134767cefb0b883270fd5ada95c8fad0",
"assets/assets/fonts/ModernDOS9x16.ttf": "636c848e9f6e2d4ce0cb02d4ebb29aec",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
