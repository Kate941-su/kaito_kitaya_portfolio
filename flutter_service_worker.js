'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e3cb5455e6205908a10cd8d9932d287d",
"index.html": "86edf088ae32b330b32d38e43ee63f41",
"/": "86edf088ae32b330b32d38e43ee63f41",
"main.dart.js": "7631a10754e8ad5a731254afe129e387",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e1c06184cedc049805612e07a3789b8",
".git/config": "6543cbc6cd1c41bed3c21a64c6b72169",
".git/objects/59/d54dda350fe467a5b912242a9a8d66cf1e42ba": "d0e11993fa72084025728b67f0c53ce8",
".git/objects/0c/d6597cd992b51ba5df26fa83c0e897e16c4e8e": "afb62aa8a5e2feca29d9479e4e4f76ce",
".git/objects/57/e14634c4be574770867aa86d1dd5475ebcb6a2": "f1f4f9b7182ac0e808bd00a448e26fea",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/3c/bc942d7e59bf1528a89b2fd7a2d778a709b306": "38f1a59d0dd7a28f92b84e9ed877cda5",
".git/objects/33/c899f4dd5dd6a7a9b035775dbb451e28a29b1f": "5065f248f978bb3fd2bf5d95a57f95c6",
".git/objects/02/2e0b3f2b41407474b0cb74df64c3f4793cf966": "250993aa0ad71aeef0e384f9adbf3024",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/b3/43d791792e194cba6cfa68a6b7d7099c15994d": "5dd48b471d813f25197534e3a5088eaa",
".git/objects/b4/d24cbb0954024e89438924ac2abc6c3170b38a": "60698dd43b58637ad46f1e00c58e1ed6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e3/04bf280102025180a9909da62f12e878fb8721": "81b7e86440249433992d7fa66fdfb90f",
".git/objects/ca/efef95b452b2554030a89369dc34c6957badce": "5c9a5554e77f2bd1130d2b7d81d460c9",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/20/063013deb376ecf4e26b3b9baa670d9baf3162": "5c55fb1f1ce6ec8253b8c789ce85fc58",
".git/objects/74/7effa2cff42b94fe156ccd27d2b81586feb596": "16de77b8d7c46897471b091da941cae3",
".git/objects/17/b59c3a190d7b0dc69c53839264cc60564a4c39": "01c2b933e5430dec15762c7b2fbc31e6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/5b8375182ff846c1de532849584aead5e967b8": "98f3eedbb8c71cd04b8f585d684f347c",
".git/objects/43/7e2bfddbbc4f24cb451f4a7c8bbde803a5aae0": "9af4676bdf411339f27dc261cb3906a4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/e7566055a09913bed55b75bbedfb5eecc498de": "305d06331a7e177016f1a1038fd4814c",
".git/objects/36/49c0b899f7b3b1b8c11230be2ef0aca5f82c27": "be8ebb0d32db81d2c5e77884625084a9",
".git/objects/5c/3f408a660a434d896f1a20d0e0e5ca8ffcf91e": "214b2906ea44db19ce0d4f7de481231c",
".git/objects/09/473629b64c9651b4b95f47dee5992ac5c4dde8": "43be70334b9b41750d4b9ee4b68400d7",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/8d1e06ab639711d47d751f6d5dbb4b39446483": "39f08117bf4f58e69ac5a0b29c3ed2a0",
".git/objects/5e/c2777fb2e760e3bf7ce4e2ca5a1cb59d5e63f5": "a9d15bfb300d2893a1a2cf7d7a8f9cee",
".git/objects/06/a53c6f08235dab9c906b7e8ab7d132920ec889": "26aa340ed544618a5788515d5078aa5b",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/2783e4388df4e9a4c32d8ed82c5a418af13c68": "cdc354a8f95bf79bbdbfd3e6c0089818",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/aeda9ea23106e3ede05ebc4b171c7bc0c7e0f2": "66f2d691c27e3e147c8857498462fc14",
".git/objects/ea/8b664607044290493e4e163749c4554a6747a7": "30b31cba902b82cc684aefc99a5b4479",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/36e5d484cd6c64e0e466964854617c2467a047": "822a9fe3f2bc1d1c75733ee3f987f35e",
".git/objects/fa/2dac5d2eba42b6971515a9572bf03c7170bba3": "38ea6a597f89b2e01b63ceb0b797e091",
".git/objects/48/c827957221206d35f038f42de3b9f8e4ad4862": "935052791d5ad49d51c91e89b266f282",
".git/objects/4f/dbc6653d2d013f631d4b345e54ce2fca68367b": "a66ab35541b17e9d54a961073cbc7936",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/7a/a1e30b5a03326334b0a254c9dff65f8b6ad301": "939b5df9d6eb82d3a0d423fa55d0e947",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "07491e691aad21a7230ff82508b05c70",
".git/logs/refs/heads/main": "07491e691aad21a7230ff82508b05c70",
".git/logs/refs/remotes/origin/main": "1e20022e4a036cbff02a84b669d01943",
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
".git/refs/heads/main": "5503589eda1e9aa7252dec0367bccb08",
".git/refs/remotes/origin/main": "5503589eda1e9aa7252dec0367bccb08",
".git/index": "ff87a56a3393f9654796fe029e58f9df",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "6db50848651e677073307c38eb243b4a",
"assets/NOTICES": "e52859474d7b4ae544f42e1f1c24ebd1",
"assets/FontManifest.json": "d5a5cdecfa71d83e6f8e00e23f8d5e29",
"assets/AssetManifest.bin.json": "a6fbc7463357090c5a9a521129eb2e97",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "e33c254655d410bba5358577c1a65ecc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "f0606a0650074653be3dd996f5382af2",
"assets/fonts/MaterialIcons-Regular.otf": "fce4b726ebeb90e85fcbe69d7565829f",
"assets/assets/images/room.jpg": "8ac95c55ec8684ddd7cb202616c1501a",
"assets/assets/images/cat.jpg": "de056addd4df7e7fd754d352f3549c1e",
"assets/assets/images/green.png": "be79765df384729af147f22d928457ac",
"assets/assets/images/face_photo.jpg": "cd5a772376b7c989c92e74f7785d574e",
"assets/assets/images/yoga.jpg": "77aa2b0687eed4614a04401ded024476",
"assets/assets/icons/sns/github.svg": "cea8e48fe9fc5e5c02e94d4147b101a2",
"assets/assets/icons/sns/x.svg": "0c9462a79f736453eac5bf7cbb756875",
"assets/assets/icons/sns/linkedin.svg": "4e5b77579246865acfe515d8215ddbb2",
"assets/assets/fonts/SilkaMono-Regular.otf": "134767cefb0b883270fd5ada95c8fad0",
"assets/assets/fonts/ModernDOS9x16.ttf": "636c848e9f6e2d4ce0cb02d4ebb29aec",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
