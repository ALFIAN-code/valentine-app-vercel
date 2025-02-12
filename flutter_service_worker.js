'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "0ab8e265922abf96a14560f6921b5ff9",
"/": "0ab8e265922abf96a14560f6921b5ff9",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
".git/HEAD": "36d2e6bfefea098ed28d3260f6fd2002",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "1fe4e9993b70df6ee248bbc391e82b6d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/deploy": "09df5d490bae26228501e07076fdb5a7",
".git/refs/heads/deploy": "09df5d490bae26228501e07076fdb5a7",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/logs/HEAD": "8971fe84ae094fe49f3fde39f5839681",
".git/logs/refs/remotes/origin/deploy": "7bcff785798dc0b12d7f1338e04b7a28",
".git/logs/refs/heads/deploy": "8971fe84ae094fe49f3fde39f5839681",
".git/config": "0146be00fc97682fc24b7e01c64e4198",
".git/index": "5a8f6a169b51ad22bbb4f9d60f7069a4",
".git/objects/16/dfe8bb0483c4b597db8cfc286cc8ec2e5d73bd": "9707c7d5ee93aa70288cb5ddc1fd348a",
".git/objects/c3/a551f2f5d4689ba9c04b0e2ea96c60a3f5dbec": "90ef5dd3a7ce61ce65ae173b2b1402a4",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/b5/7092372a2d23f4d054ef81bb66141bed0be644": "a719bc2481beede7e3b2a856f7deaeca",
".git/objects/41/5b18c6e2b49e7147dfd0e27f2bb3837dbadffd": "28644cf347c2d51db628e8cbd14508df",
".git/objects/f7/8273273b430d9028b91f0c4c35fffee4e2e8c9": "2f342f2d7a53149abad0b8e0ec09f19b",
".git/objects/7a/ffa1747063e022d8839a97522d09c339220c76": "0bed9c92b0141d8036f2d6a753ae34fd",
".git/objects/af/23687db851292a23043bb41f6961a57d6e990d": "717438dbda430ab61774f3996ab158ec",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/67/8a6e17f028927d611047774d4a9a36370eeed8": "c560b75add9ce14147df1c1e53ecf868",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0f/c0f2f4e4fa3599298bad1958dddd5468d38200": "ebd3a48eb7c71d482f7d74f4ba48ef03",
".git/objects/8e/e7c475e2657ae03fc69551a1bd775fbe8d479e": "fe3a70c0dab04e204cea5b375556f803",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/81/cdcfb550e234d1fe1c85a90fa61a4bde6e5b7a": "9ec796500b434a87ea0d25f9a0972d39",
".git/objects/81/bc5d89efa3ec30b82a636c39bc4e08c8e60db5": "86abcb2af8196f0b8b0938739292a0da",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/19e81b583d50f2c96db9a329a1b19cc65603dd": "69b68bbf00adeeeba65d1f093cad8210",
".git/objects/72/c4393a6215362159df537f15e3f9c1e76e1e9f": "706fe51e8efacb26ed5d78586ae01dcd",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/d0bc877b79e5546107f4c360d57f65bda39b5e": "5d4a2d82d50b61f1fbe84165911d75fb",
".git/objects/9f/0602a2eba3a3fe2622996664035d4f42bf3e61": "6dabd1615e2d5fe15216ee5bce87bd21",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/24/4d8e7b13b3b4dfb074663c68f01fb1ade72624": "e82d843e15da7631b85f7858aa2a4c2c",
".git/objects/5b/7c221797db5a38e4a0f5cdb8a3a47d5b8def90": "bd0191c888462b7ab238fff1cac1e680",
".git/objects/9b/e749cae45f4b493ae470f9e7e887ea45a04345": "fd811776694e9723b21dfa00bb9771d8",
".git/objects/9b/ca279088346e3b4a6341b9aa8a561458a2fcc8": "49b0e4bfbfbd59c9770ee1e93a6d4251",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/a966d3e8ffc87221dc5d470051a8eb0767064d": "67a6972dfb000766807f92e1e248ecbe",
".git/objects/14/072f54efe6d4f0dc8206fa9bc5a9f96d49500e": "1e92c715c0487f0f90127fb9a536a1bf",
".git/objects/f1/89b341ae492130c4a50786c3df418dc02e0460": "6390f5c479b8de1d994f7493bd43b442",
".git/objects/e6/b58d397537957c4fe3e8da15852ec111275003": "aec11ec3fe8169372e5675b2d65ac0cd",
".git/objects/59/c7c543825d66c44c78133e66ea67dfbe68706a": "5a5d776aa4a31f9be432697e99a4ab22",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/95/2b4d7eaa25a08471d4d7156bbb3bcab7867aac": "15c69aea9ffde8b43b2befa1a83c4bdd",
".git/objects/95/626790980ea1b72a67eaea7b32cec78307f27d": "37ac63a14e64d7130afe7aa715689fa6",
".git/objects/6b/afc45e5d5f9021645f204b4fc6788842fd19fe": "9fdf6da74a7b72946096da3f5b840571",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/69/e7a9b4bee2af5ef20e4c0fd2341a6297dfe56c": "d8803b661576073165344ecafa244c21",
".git/objects/02/859fe7628fe5657ae7e8707583d36ad74d8a71": "dee85e036767560a05ea6e091ad96b6e",
".git/objects/cc/97a9e7359d7c9dc00c0b74320c8403016f54b7": "078ec97fd4cf586c338bc0e52e4a8b4c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ab588dad90e37caa10b5c6d12e48b40c2091c9": "5c5c1d4a1ddb96b0efaa40e1ffa27912",
".git/objects/18/ce8f903c10b853fafbd3df99ed49f4cfb71b94": "fca2faeaba6c373ec73a753dd4760924",
".git/objects/18/c53400567c81beb0fb5052f698810741d95502": "2152f44f90a48bd2aa1b10a46e80b857",
".git/objects/57/f2c6318262c6e5e0745563ce0fd5f5c508264b": "4ce2a54fa8db2f34396bf374a3e18e1e",
".git/objects/20/c1c04cf01dccfbe2f080cf34f9d381d6418d4b": "01cdbbd7aa5ccfbf0fc5604973001d70",
".git/objects/6f/e0e71d55f2a9923ec97a3df783c2f46635e074": "30685b9b2303e787f1dd56a70f7a6d10",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/94/d0c46692939e268269a58f904dc04f333f721c": "1da091ec886bce8f366ca353d989bdf7",
".git/objects/10/de526180fe0a2cbdff1b146feedeeae882d48b": "2c586540d515054a3ccf3d7828baa672",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/7a744e2484c81a669896282dfc0556fc7ad0bf": "41ecabb5141f130e50e572bc88e41268",
".git/objects/a4/7e96f698b1b4d16ef660fa8669cfca387b90b6": "b2139f0a3efd68ee6c1ed43b88463f7c",
".git/objects/61/4008e5d1b615ca3ddd8d58d10cd63a0a4d365f": "4c540e5753763bbac685397f012a873f",
".git/objects/8f/db353e4b42f901f971729029bedaa07f3f7c2c": "bf85a3154c680779753b8a54674b27ac",
".git/objects/d3/aee5ad492ce22b5fe34daccf4156a146421f23": "ba151b4c246c4b9ce2e5973123bdfb0e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4d/20a5a990eac99b65c2a9b52539262491dc5d1c": "ed7a0300cf3d0326d9f1c20b44647c96",
".git/objects/37/28fa21f43836c2680cf8ef167d7815c7c710ce": "58ed78194d9e11a42571cbfbf77870c5",
".git/objects/70/adcb53bfc015bc179e60477a50a9deb528cdaa": "05dac631f27ad9fa91092d8102964188",
".git/objects/f0/a06b2aae37658c6cf6e94b9ac13694a312b97b": "5b59ae8bb3098fa85a16284c9057a0df",
".git/objects/5f/7eb28e1179b49d4745dcfa380c032bb1b2a83c": "ab104390eeb2ff2b8f93c0de15d95565",
".git/objects/a5/0cde213573ad66220be5b3a8f63fade6d951f6": "027361f9b9905ec8298fe308fe361d68",
".git/objects/0e/c4bc0f71225cc4b973bac6431b9e0e7160403b": "6e09e1f128787d5a8ccae9ecfa593156",
".git/objects/9c/022638563ae51c84ee7b27d7ef384c9ce1ae39": "f99f77fdb2c522318c2e480ceb8f1f8e",
".git/objects/ee/fd98ffb2794c34fc956809d67c1ff75eeec05c": "283ae3a5262da3ec92ea296db04874fb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/36/b752af94fa26de430f0f51232b92ba6647b344": "14a84ea77588482820aca52b13ddc8de",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/87/00bf16f67a38dee4ea854774db53f76a5e09ee": "985b09357b67aee807ab3c7a26c20d84",
"flutter_bootstrap.js": "d44ff23a8be642af38975cf9b9fad4db",
"main.dart.js": "61eec0adc326aa5a38bca58bdfdb1025",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/lib/asset/8-desember-2024.png": "8de4054d5ffb5de45df4db51cdffb856",
"assets/lib/asset/current.jpg": "cc3ca92996150229e50d750014773b41",
"assets/lib/asset/profile.jpg": "6c0773f6ee3ae73745cc82039b06a033",
"assets/lib/asset/animation/scroll_down.lottie": "69e1860f4d3ca023ddd5ea10d5057d6a",
"assets/lib/asset/21-november-2024.jpg": "eb0a3f571dddb88c4300c4e65aa24fe4",
"assets/lib/asset/25-january-2025.jpg": "9655f148cd021341b4f859ee7b3731ac",
"assets/lib/asset/1-February-2025.jpg": "c86890f16f6ac36626af132e8b76aeaf",
"assets/lib/asset/20-november-2024.jpg": "191adb2e7a0986afaf62b9a867bed0d7",
"assets/lib/asset/9-january-2025.png": "f1ea4236e79ed8ea1475203d58d37bb2",
"assets/lib/asset/12-desember-2024.jpg": "c6440fc0680f6cddcfe9c47d1f912653",
"assets/lib/asset/paralax/4.png": "70efdec5db1df172fbcec18aa61b95d4",
"assets/lib/asset/paralax/11.jpg": "4f232cd889ccde2391fc93877f1e4b25",
"assets/lib/asset/paralax/14.jpg": "9d5997f862f5a830171f4749aab14889",
"assets/lib/asset/paralax/13.jpg": "bbd057e97c4d8b994cb1e5b8b88f8119",
"assets/lib/asset/paralax/16.png": "c2d93d9ce4d975ad1ed5b558af8f1b50",
"assets/lib/asset/paralax/6.jpg": "2a1545723a1370971ca387283d9b8ad5",
"assets/lib/asset/paralax/16.jpg": "e7d3ffd7d809cc837a149a21d590967c",
"assets/lib/asset/paralax/3.jpg": "1482c36f59a5d5d8e766591df443d8a3",
"assets/lib/asset/paralax/1.png": "8e6fd715687fd8bb8e1e7c4eedc74e90",
"assets/lib/asset/paralax/2.jpg": "d02fd35efa98e45bf2471e27a11c27f3",
"assets/lib/asset/paralax/5.jpg": "9c05b792acd2c90189d52ef586e8531a",
"assets/lib/asset/paralax/8.jpg": "f1c6816adc91aadfab805cff2b20fef7",
"assets/lib/asset/paralax/9.jpg": "ec0177568095c11c441f1e564c99d2bf",
"assets/lib/asset/paralax/17.jpg": "336c5ed6938a9b9fef66916f29321be5",
"assets/lib/asset/paralax/15.jpg": "8ef15ad1897add88a8deda87d1b7e8f0",
"assets/lib/asset/paralax/7.jpg": "80dcdfc7aa17ff6bd28cb674cf64679d",
"assets/lib/asset/paralax/18.png": "fa082811f1383dda32a7bb44375a2b31",
"assets/lib/asset/paralax/19.jpg": "d6fd7f3105c0d097d20f3e84026f0e48",
"assets/lib/asset/paralax/12.jpg": "342d691db1ad35ed932d7638db01e520",
"assets/lib/asset/paralax/10.jpg": "21a46a835a40b4251c6c2ed8cbb8476f",
"assets/lib/asset/30-desember-2024.jpg": "6b92402d7d654fde2938d6400bad4198",
"assets/lib/asset/16-january-2025.jpg": "c587cec6a1c0613f5896474dedafd839",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.json": "9032ec72bda4403ee6c12935e149d599",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "93916c24c456a30d8954557bcd52453b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "76ee9828017dd41f269480d47a62be9e",
"assets/AssetManifest.bin.json": "6da549a3b81861187fc2de3e9024acaa",
"assets/fonts/MaterialIcons-Regular.otf": "4269e7211635abea2aafaf7169b5ba39",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "4e8e4f5daf0a92cf82cddd60eea2ef7d",
"version.json": "4987a38c82c2fc1aeb6c044f8e311e5d",
"flutter.js": "4b2350e14c6650ba82871f60906437ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
