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
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "077ac8c322d9b2f839c91497cc09de8c",
".git/refs/heads/main": "077ac8c322d9b2f839c91497cc09de8c",
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
".git/logs/HEAD": "2040bda89cdf3c9d8785082f68ac4692",
".git/logs/refs/remotes/origin/main": "4ee1ec90dbe3f154f8eb165754419f93",
".git/logs/refs/heads/main": "e4e733509be338d1d301781905a88219",
".git/config": "9cac8b6b911a074e3a63d77ac19a5d9f",
".git/index": "7fb2b40b6e998e07ad6e5f8c657a8621",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/d0ac7793a33afcf79b99a66a4b9320afcfbae2": "766630917cd5050656800ea0bc2512ad",
".git/objects/08/4ba183d494f2a01ba34f3a02b1fc14654e0870": "1e795b24b567737b33146831df344114",
".git/objects/08/a63fa6511a68b9384b31f4616f6dd0f700cdb4": "3387ecdafe8831d2d2d7c59ec1b71e58",
".git/objects/1e/7ccc337c7d80e7f68e10db13b1c8e3ef2b2825": "b9aa66dda362f573691470a56d5d4c2a",
".git/objects/ae/6849798dc9fd63f03424eeac654e23be1641e4": "ef0c5fc469e71150cbe5940e0883b5bc",
".git/objects/7a/3f51c935060d829681543a78639bfea1cf8070": "05124b3d20c0d22f89e297a95c70fb26",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/81/bc5d89efa3ec30b82a636c39bc4e08c8e60db5": "86abcb2af8196f0b8b0938739292a0da",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/92/ee990d310dfdfff94087b1cdf7c7ecda8298a8": "1d4a21498fafb0268f386477c17e98d5",
".git/objects/72/d3974a54e8a455fade7b6f6cd6a4fc20d24ded": "cbc3217c0b882c61844a1a438dfb055b",
".git/objects/49/642dbbadfc52f8a92a1e14f905c5f2273f208c": "e7c5aa6df4962f6f4444ec0a7a1e94fe",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/f3/38ebf0742e9eb60e1d5c13bfe78378bb00973a": "85e6be2bbfa2bbd1bc7c869eb98dbed4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/38/704dc58b9496bbac78f769a544a3606cb784af": "1764318d7f25fabda8a958774bee7e66",
".git/objects/38/ed2b90127748b2a7208a895bb1ec209f79de10": "8593b83a1859eed34d75b726af1b61f1",
".git/objects/4e/824626103ad816a6cce7d1e07a1c6b84496ce0": "ff82957db029085e364445baae2e6c50",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/1c/bfdc6066cb8bc97d9d2d665d4559362206a65d": "a2494d8a314b30551be70a6d2592d022",
".git/objects/1c/4add3c1b4f3c5b5e7fefb8ccb772b6b62315c3": "10a3cd9c75990689e6fdd514500409d3",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/6c/c392eeaf8e3bd708242be814ed6273361dcc25": "5e0430dc884468099d887a234744e476",
".git/objects/24/4d8e7b13b3b4dfb074663c68f01fb1ade72624": "e82d843e15da7631b85f7858aa2a4c2c",
".git/objects/24/c76ef647f7d1350b0a24f81a4564d120da476b": "3c49928a861ba3625b32b65aaad368ab",
".git/objects/5b/7c221797db5a38e4a0f5cdb8a3a47d5b8def90": "bd0191c888462b7ab238fff1cac1e680",
".git/objects/9b/e749cae45f4b493ae470f9e7e887ea45a04345": "fd811776694e9723b21dfa00bb9771d8",
".git/objects/9b/ca279088346e3b4a6341b9aa8a561458a2fcc8": "49b0e4bfbfbd59c9770ee1e93a6d4251",
".git/objects/86/5a898700ca742cce4b1e3d23faf7a226aafee5": "e1608c7b34d9f26673ad961764ce747d",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/a966d3e8ffc87221dc5d470051a8eb0767064d": "67a6972dfb000766807f92e1e248ecbe",
".git/objects/14/072f54efe6d4f0dc8206fa9bc5a9f96d49500e": "1e92c715c0487f0f90127fb9a536a1bf",
".git/objects/14/2f6c69c69e6fbd5b0d1db0300cd9152171d7d4": "5cd1766dc0809b476ef10b35de61efe6",
".git/objects/4c/787363fa437c248ec6c3639e0ac5e76aeeeb14": "4f9a85bab5a4b968f99ab36e4b5c1345",
".git/objects/f1/03544ab1c73da6eafcabd402364358fd9efa4e": "dea306fcbb01be4d36862c9888456613",
".git/objects/f1/89b341ae492130c4a50786c3df418dc02e0460": "6390f5c479b8de1d994f7493bd43b442",
".git/objects/e6/b58d397537957c4fe3e8da15852ec111275003": "aec11ec3fe8169372e5675b2d65ac0cd",
".git/objects/8d/60fc1a5744935b3bc96d35659b62495e3eb1a4": "4b161083d9b396757a15c715c3580c2a",
".git/objects/56/d32ed33cb88b4b6b5da1af009963f7e98d491c": "98d0302c579eeae2e7ffa2798a8c8423",
".git/objects/59/7d25c592bd4131be8d2948de97f578efc1d3e9": "d058df57e5cfbb8cb157dbae5754122a",
".git/objects/59/c7c543825d66c44c78133e66ea67dfbe68706a": "5a5d776aa4a31f9be432697e99a4ab22",
".git/objects/e2/81762509c0732b9f0275f023d5c570a7754046": "e9974e16d2a9037d6d15140ce37de98e",
".git/objects/e2/6f38d3fbec8070014c2b366ead0a3be2534d52": "2cb8175dfbffe395c03ef13cbf10fac8",
".git/objects/d1/4e5f92919c4961849fc6577560ea453d1d93c6": "7ac9aff35274dcacfc0ea5ec3f5bc013",
".git/objects/93/660de00c44e59e1fa0da79ef1b2e510c5b5fc9": "886c698ecef50107c304ea7465b1fe12",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/95/2b4d7eaa25a08471d4d7156bbb3bcab7867aac": "15c69aea9ffde8b43b2befa1a83c4bdd",
".git/objects/95/626790980ea1b72a67eaea7b32cec78307f27d": "37ac63a14e64d7130afe7aa715689fa6",
".git/objects/6b/afc45e5d5f9021645f204b4fc6788842fd19fe": "9fdf6da74a7b72946096da3f5b840571",
".git/objects/65/e7619c5b3975f54e2b2225508cfa798f6e14f0": "9f2775973179e542c61c5c43cfdf2351",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/69/e7a9b4bee2af5ef20e4c0fd2341a6297dfe56c": "d8803b661576073165344ecafa244c21",
".git/objects/69/c15198fb004614c8a5b9802ea59680fc118ea3": "200adb5a0c3ed29e4b8ee57c3d13331c",
".git/objects/02/859fe7628fe5657ae7e8707583d36ad74d8a71": "dee85e036767560a05ea6e091ad96b6e",
".git/objects/cc/5d4c91e399105d7e15df86873bf509b07d5bc0": "25bfacedc65e7983309342832b6a7a25",
".git/objects/cc/97a9e7359d7c9dc00c0b74320c8403016f54b7": "078ec97fd4cf586c338bc0e52e4a8b4c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ab588dad90e37caa10b5c6d12e48b40c2091c9": "5c5c1d4a1ddb96b0efaa40e1ffa27912",
".git/objects/18/ce8f903c10b853fafbd3df99ed49f4cfb71b94": "fca2faeaba6c373ec73a753dd4760924",
".git/objects/18/c53400567c81beb0fb5052f698810741d95502": "2152f44f90a48bd2aa1b10a46e80b857",
".git/objects/57/f2c6318262c6e5e0745563ce0fd5f5c508264b": "4ce2a54fa8db2f34396bf374a3e18e1e",
".git/objects/2e/9abd4d7a9a2baa627a4b8f61f2c06bd21a019f": "9d05dfa3012a27ba41124a77e652ab6f",
".git/objects/20/c1c04cf01dccfbe2f080cf34f9d381d6418d4b": "01cdbbd7aa5ccfbf0fc5604973001d70",
".git/objects/6f/e0e71d55f2a9923ec97a3df783c2f46635e074": "30685b9b2303e787f1dd56a70f7a6d10",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/28/30aaef12d7df80ae20a28c740be2b6710e8c1d": "dc0791793aff1b24aea0382670df2ac7",
".git/objects/94/3255314cf6766fc34327da51f3565813e6bd2b": "e2fd29965a1eb82fe95e723ad643b4d3",
".git/objects/94/d0c46692939e268269a58f904dc04f333f721c": "1da091ec886bce8f366ca353d989bdf7",
".git/objects/94/47dec8699616b4f8d9bcb9e1aa1ef89ef046c8": "9d89d53d1f68efb52427c5cd6cf90b75",
".git/objects/10/de526180fe0a2cbdff1b146feedeeae882d48b": "2c586540d515054a3ccf3d7828baa672",
".git/objects/a9/fa27ee04e6675d1a4bf4d31ae1f85cca1d4cf9": "c3c479adc3091e5f046db654dfa99e47",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/7a744e2484c81a669896282dfc0556fc7ad0bf": "41ecabb5141f130e50e572bc88e41268",
".git/objects/a4/7e96f698b1b4d16ef660fa8669cfca387b90b6": "b2139f0a3efd68ee6c1ed43b88463f7c",
".git/objects/61/aa458763e6fb32dd453e462498b72ce401d7d9": "3a19f5314eb37ef0a9c75da84d176958",
".git/objects/61/4008e5d1b615ca3ddd8d58d10cd63a0a4d365f": "4c540e5753763bbac685397f012a873f",
".git/objects/8f/db353e4b42f901f971729029bedaa07f3f7c2c": "bf85a3154c680779753b8a54674b27ac",
".git/objects/8f/85e84880500791ab127a841451aaa0674574b3": "309d3e520a8e437946a141483473d2e2",
".git/objects/43/8d7b787c5d560dfac7c312f6100a319138d221": "e94e7e7c47095f032a20387597680ee1",
".git/objects/21/b515fed58a73d3f1e5205c9e4e8262c2260530": "2f38554e92494f50f52052b2d8daa3ff",
".git/objects/d3/aee5ad492ce22b5fe34daccf4156a146421f23": "ba151b4c246c4b9ce2e5973123bdfb0e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4d/20a5a990eac99b65c2a9b52539262491dc5d1c": "ed7a0300cf3d0326d9f1c20b44647c96",
".git/objects/37/28fa21f43836c2680cf8ef167d7815c7c710ce": "58ed78194d9e11a42571cbfbf77870c5",
".git/objects/f0/a06b2aae37658c6cf6e94b9ac13694a312b97b": "5b59ae8bb3098fa85a16284c9057a0df",
".git/objects/34/96c9f5eead64103ad8aa391fec6bb3ab436ebf": "0cd5d5036314f46806f2577e429f0882",
".git/objects/a5/0cde213573ad66220be5b3a8f63fade6d951f6": "027361f9b9905ec8298fe308fe361d68",
".git/objects/0e/c4bc0f71225cc4b973bac6431b9e0e7160403b": "6e09e1f128787d5a8ccae9ecfa593156",
".git/objects/ea/c005cb4eb74bcc5aabeca1d25c293c22b840cd": "b600470ddbc89793c55d8375e5f61309",
".git/objects/66/c86577c902f9fd0fb9a53de85f1af089074a46": "2c270bb82e03e9532d64cb6d21cb94ac",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/42/3c2619a10ca43e08dde36a981a08d00c5eff5b": "cb985d1a582c857c643221aa1cc5a877",
".git/objects/36/b752af94fa26de430f0f51232b92ba6647b344": "14a84ea77588482820aca52b13ddc8de",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"flutter_bootstrap.js": "647dbdd3223bf5d804e578f05ca46d8b",
"README.md": "2cf13d270770edc4c418001c1c4e2364",
"main.dart.js": "61eec0adc326aa5a38bca58bdfdb1025",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/lib/asset/8-desember-2024.png": "47baf9369e82bc35f2cbc5dc44b6c60d",
"assets/lib/asset/current.jpg": "8a188400b8af25196dacd88f6ff72849",
"assets/lib/asset/profile.jpg": "7cd13ce4689577dee9df2d3f486fab84",
"assets/lib/asset/animation/scroll_down.lottie": "69e1860f4d3ca023ddd5ea10d5057d6a",
"assets/lib/asset/21-november-2024.jpg": "62c1b5d00183b17bc0ce9be00ec3e2be",
"assets/lib/asset/25-january-2025.jpg": "2086ad495bc09712fe79a93b6f64aab6",
"assets/lib/asset/1-February-2025.jpg": "fd676067f46800c711123d059ef307e6",
"assets/lib/asset/20-november-2024.jpg": "3acce4d562cbd290b3cf8c79df74e20c",
"assets/lib/asset/9-january-2025.png": "990d53cebf6222036f4e6535bf32aa89",
"assets/lib/asset/12-desember-2024.jpg": "50807766a7f61398baeca98afc6145e3",
"assets/lib/asset/paralax/4.png": "fbcb7e71a229b5feed79856aa3dc3f33",
"assets/lib/asset/paralax/11.jpg": "32402743509d29edf67fff13d80ffa49",
"assets/lib/asset/paralax/14.jpg": "eaf718efebfd3433010358a9d048dacd",
"assets/lib/asset/paralax/13.jpg": "bfa51fb000137a162b6440ae502bfa42",
"assets/lib/asset/paralax/16.png": "920279d6a8940a11abab9519bc2aa59f",
"assets/lib/asset/paralax/6.jpg": "452a4d83d5d39ebf9257583abbb9fadf",
"assets/lib/asset/paralax/16.jpg": "b77ff83fb657cdab91290b2b887244e4",
"assets/lib/asset/paralax/3.jpg": "cd8b3080e3a48ba1a124731a91a6f5ea",
"assets/lib/asset/paralax/1.png": "a9f46dd94fe037de751bd2222245c702",
"assets/lib/asset/paralax/2.jpg": "1dc26f3a945b162af7b3fb4896776c96",
"assets/lib/asset/paralax/5.jpg": "5b63585d3f730cab4dc344e0bda02e60",
"assets/lib/asset/paralax/8.jpg": "43f8f55a91243f5916852c8ec78adc25",
"assets/lib/asset/paralax/9.jpg": "3984fa1852fcc64131295bebf71bbf4f",
"assets/lib/asset/paralax/17.jpg": "2f6c64a70ab38a6a5760af71b00a6d4c",
"assets/lib/asset/paralax/15.jpg": "4d03319272fc2b22016e2ee65e5a1f67",
"assets/lib/asset/paralax/7.jpg": "16675378f416e0d8633637313c46e63b",
"assets/lib/asset/paralax/18.png": "1cbd6d1b570dd38106ae061819fabd7c",
"assets/lib/asset/paralax/19.jpg": "87c9d63fcec965b1b8bf69897f20921c",
"assets/lib/asset/paralax/12.jpg": "01ac7d3146b5018d1b19d4741bd1995f",
"assets/lib/asset/paralax/10.jpg": "91711f52d3e3b0fd17c91aac952cb72b",
"assets/lib/asset/30-desember-2024.jpg": "696b55c16011c7968289c2e3b1181a12",
"assets/lib/asset/16-january-2025.jpg": "73a03a6ed07f0ce3a2f013912398a928",
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
