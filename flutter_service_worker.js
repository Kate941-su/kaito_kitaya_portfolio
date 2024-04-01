'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e3cb5455e6205908a10cd8d9932d287d",
"index.html": "1dd653048f6cf9d355c79de72545d991",
"/": "1dd653048f6cf9d355c79de72545d991",
"main.dart.js": "635a54253c87d565247195a9f25a322b",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e1c06184cedc049805612e07a3789b8",
".git/config": "6543cbc6cd1c41bed3c21a64c6b72169",
".git/objects/95/c19822e4d41ffd4d531eeeabc240ea28c799bc": "5877e631527f3d203f47e769a96b04c4",
".git/objects/59/d54dda350fe467a5b912242a9a8d66cf1e42ba": "d0e11993fa72084025728b67f0c53ce8",
".git/objects/0c/d6597cd992b51ba5df26fa83c0e897e16c4e8e": "afb62aa8a5e2feca29d9479e4e4f76ce",
".git/objects/66/16421b554f404d249be2af2e5635ba082868a8": "3b811f42b673abdbe0437156fbb8851b",
".git/objects/68/630abe025f545b05ce17942a2b98bf454d89b7": "9335b9d230cc821f658baff5b090034f",
".git/objects/57/e14634c4be574770867aa86d1dd5475ebcb6a2": "f1f4f9b7182ac0e808bd00a448e26fea",
".git/objects/9e/f40000fcdddaf2ee391ac587d13ccf0a5319ba": "64d9b8528c5dabf9979c9c693498035d",
".git/objects/04/6c8962829889ca27455f79a2c21a034a8a033e": "62441ba66c27871af41c2e4157cbced5",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/9eab8e3b6d2c93cdff87174545397c63cd1400": "ba968e386f3b390a16a5ae04e20d1fa3",
".git/objects/32/ab63a803af542f849c4e2729c4a819026e8717": "2f2ce80b027f1b7c90d241cff13fb07d",
".git/objects/35/0049689105ff68db5651e34db9696e4257857b": "b27c08ab5e6a5182939a8c6e394a873c",
".git/objects/3c/bc6d274ffe0358add0fe31a547db38167cc3e3": "2e2256145e5d66176f1bf8e11c6c47ed",
".git/objects/3c/bc942d7e59bf1528a89b2fd7a2d778a709b306": "38f1a59d0dd7a28f92b84e9ed877cda5",
".git/objects/3d/b58d542eb4ed648583992ffaca148bad7095bb": "44a67961940cf9fcb18db78fcd305386",
".git/objects/67/0eb3531534d2cd2c9acfee454647dcef243bee": "76722824490bef8f6a441435c9555884",
".git/objects/93/51463df1266e463058ab5f123690e73ff3a96a": "46436d8e7cb49cc72858b9c3569b91d8",
".git/objects/60/0f93080cc89efb85a3bab7186352fd54f32624": "483c43b7d45c1e03a3c725fa176ea5d8",
".git/objects/33/c899f4dd5dd6a7a9b035775dbb451e28a29b1f": "5065f248f978bb3fd2bf5d95a57f95c6",
".git/objects/9d/135b5a45966051265013927dbdb0784fdfb146": "3db21543db4f5986d56197324c8ef492",
".git/objects/02/2e0b3f2b41407474b0cb74df64c3f4793cf966": "250993aa0ad71aeef0e384f9adbf3024",
".git/objects/a4/88f76ba9c553fb2e0230b259ee538758d641bd": "36dbb9c3cf1e52f08aec7ae69cd7d0c5",
".git/objects/a3/8f2c92ac9bed29d2f916da932c039868f1b0b6": "9b080575d1a79f33ce94b010674ebc6c",
".git/objects/ac/c110f3ee97af34e18e4453921c81383c01741f": "863c8015c060341440140d3c7b091cfc",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/b3/43d791792e194cba6cfa68a6b7d7099c15994d": "5dd48b471d813f25197534e3a5088eaa",
".git/objects/b4/d24cbb0954024e89438924ac2abc6c3170b38a": "60698dd43b58637ad46f1e00c58e1ed6",
".git/objects/bd/8d0b4ac1e176d52e3a738fa619b063040d7e27": "9fea1467930ec403b0be85644af024db",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/f9c80b2a1437951e3dbdfb68dc8af7ab4558af": "ffe4f0ae89024638d9a19626bb0a54ed",
".git/objects/e2/4122b33182ba769ba85d41001f586b6420f117": "c6da14ad1105394fd41b8a77a74cb001",
".git/objects/f4/d81b55bd08010d086779c123f1b3963e1ee468": "09d045f6fe23d1ffdbb4f9038a950eb3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b414eac65a8ee49c98f1bbb4d2ffa1067fd4ea": "186ee190b08623a62036899b5aae3b86",
".git/objects/e3/04bf280102025180a9909da62f12e878fb8721": "81b7e86440249433992d7fa66fdfb90f",
".git/objects/cf/45535211bdabeba5ce61c8238505c9f2144926": "8cc06f7a3b81104547fe2266233e4d9a",
".git/objects/ca/efef95b452b2554030a89369dc34c6957badce": "5c9a5554e77f2bd1130d2b7d81d460c9",
".git/objects/fe/22b2f3ddc37ffc0ef3fe7f7eeb7a59bcae24a2": "cd78d9c87cc4037dcb42e85a66e34282",
".git/objects/ed/569b5788b3c519471f186ed49dcf926d380811": "8db2a7f8955d22de2927785d5ebbc0fc",
".git/objects/c6/78461465ac19379867efe13774b717e29b1633": "2c7002df4cff7862667e6318d971211c",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c6/21fb816db579d9c282813ad5b852d0df64e439": "18319022c9766c0c6f75a6de6d438d4a",
".git/objects/20/063013deb376ecf4e26b3b9baa670d9baf3162": "5c55fb1f1ce6ec8253b8c789ce85fc58",
".git/objects/29/29e024f398fda63873ff5e94ec8d3e9833948f": "6040339033454114cda03eabb666cfa1",
".git/objects/42/5160c8a10f6a8646053677a3cebb29e333efbe": "8f7a718ff2896c119d5b5415907dc926",
".git/objects/89/e03ad910b2f316d8b562741a62aa8cd7c52651": "107a13fd5ef591fb6c99bdeabcb32281",
".git/objects/74/7effa2cff42b94fe156ccd27d2b81586feb596": "16de77b8d7c46897471b091da941cae3",
".git/objects/28/553fe2852424098d6e60100b465f2e438ff444": "93415980438ac4a774a7c4ec495d128d",
".git/objects/17/b59c3a190d7b0dc69c53839264cc60564a4c39": "01c2b933e5430dec15762c7b2fbc31e6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e698dcf67693ddd2be041892f4a0cff08b7dfb": "549555b2d0a52c47471489b22eaa396d",
".git/objects/7e/d2f5b916ffaf23bb3e73e2a1e86488d7b424ee": "f84f9aedd53eb3b4aae9723e6bc209c8",
".git/objects/7e/662c90b82eb22f0154c8e23f40da560c3b6090": "8345482f253ed8f91dd2548883064466",
".git/objects/75/5b8375182ff846c1de532849584aead5e967b8": "98f3eedbb8c71cd04b8f585d684f347c",
".git/objects/72/f50c535eb035034d1a9c8be168fe2cefce4cce": "e629f310f67f8f4ffe01f1144830a155",
".git/objects/72/63d34740da2cbfcd2ec7fa49b942ab5b66494a": "ccf58c4c8b33d5e2aee01c7f934a8fdf",
".git/objects/43/6b240ae972aa745d5770dbc418f38d5c783315": "9178df0ef6229f6776f579afdba120ff",
".git/objects/43/f91b247685e5e19e80d8e9cbc5b2e4400f368e": "4a9551ec68d549fdd031a888dcae0db7",
".git/objects/43/7e2bfddbbc4f24cb451f4a7c8bbde803a5aae0": "9af4676bdf411339f27dc261cb3906a4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/e7566055a09913bed55b75bbedfb5eecc498de": "305d06331a7e177016f1a1038fd4814c",
".git/objects/36/49c0b899f7b3b1b8c11230be2ef0aca5f82c27": "be8ebb0d32db81d2c5e77884625084a9",
".git/objects/5c/3f408a660a434d896f1a20d0e0e5ca8ffcf91e": "214b2906ea44db19ce0d4f7de481231c",
".git/objects/09/473629b64c9651b4b95f47dee5992ac5c4dde8": "43be70334b9b41750d4b9ee4b68400d7",
".git/objects/3a/66ab703440df42916924f460890d91d46bf2bb": "d039a42ce06b117d00ddc5f7fed61900",
".git/objects/54/eb2337327d464e1e8ed3346da640f23de673ab": "006b9f978c5eabad15e68f08f766e2bc",
".git/objects/98/2e87200cfaa77d1deb538be5c8c182f86c0f57": "66983cf5af730b513384f8c7ab8e9240",
".git/objects/98/907bf0358180374859b999007a38263461de1f": "5ef0636a28dcac7a8a5f05e18c1a23e8",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/8d1e06ab639711d47d751f6d5dbb4b39446483": "39f08117bf4f58e69ac5a0b29c3ed2a0",
".git/objects/5e/c2777fb2e760e3bf7ce4e2ca5a1cb59d5e63f5": "a9d15bfb300d2893a1a2cf7d7a8f9cee",
".git/objects/5b/9b0f8ef11b8ef17bdb6c30ccb75b9d163e0ba2": "88ef8e299543e5ae63e8cd6ecbb7cc02",
".git/objects/5b/00082d5ef240a8d15969d306dde004a96d02f1": "3cc9fe05b5f5afd632cb9a9378e31d3a",
".git/objects/06/a53c6f08235dab9c906b7e8ab7d132920ec889": "26aa340ed544618a5788515d5078aa5b",
".git/objects/6c/ae2226d09d9b41d074169a19955cbffa104698": "da238886879bbef0b061a99eed9388e3",
".git/objects/6c/7ce1a259ab317229a60a5c95d6ec82978cb659": "b593d45d272ea2fda61dd75ed0f878a9",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/97/7560086fdaebb48eef16a5634ee4b604f927e3": "f6cef26cfd35e7298221b80f441f89be",
".git/objects/bf/bc7f8a53e3055730609af2ba8124c064b82611": "7279f382d4c5769cf6899f499e8612e9",
".git/objects/d4/c04b1071b0c33ad2098e31b68241854b83b640": "3f0bc88d9e3e6a9566f3dfb7752108e7",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a7/d808d68cdae203eca04f644a7a7bdf575f6d3f": "ac4cca5c9f74248c95bf149facfa0384",
".git/objects/d5/80d5abd8b44706b52d9be5c5f1b0c7cbb767aa": "e857282baa41ffe5a35e4412938f31f4",
".git/objects/aa/4be914b173ee074c4dc38d55fdbc69cc8021b5": "f783dc0224d29b83c9fb8f2e41f236e1",
".git/objects/af/de8e09b69c22643bd9a7507922be0815219b09": "7d5d704d522e6bb321b19f0906e82b0e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/2783e4388df4e9a4c32d8ed82c5a418af13c68": "cdc354a8f95bf79bbdbfd3e6c0089818",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/aeda9ea23106e3ede05ebc4b171c7bc0c7e0f2": "66f2d691c27e3e147c8857498462fc14",
".git/objects/ef/d6002132574b1e75141e97b04555488d05224e": "974e26fd5ae2226160361c6f3bd98fe4",
".git/objects/ea/8b664607044290493e4e163749c4554a6747a7": "30b31cba902b82cc684aefc99a5b4479",
".git/objects/e1/db5f196597f0815d315dfacf4191bb3df75fa4": "6979899ec2688e8fad789161decb0a1c",
".git/objects/e6/2be37522f8eeabe4c82b3d2d463db23f8e5474": "5c80b9116a95ff960df133eb371f0587",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/e4d564f5f939aa7c434e8c8ab516c7ec252d70": "a7a1cf6af07881d90c6ed78996ddf29b",
".git/objects/fa/36e5d484cd6c64e0e466964854617c2467a047": "822a9fe3f2bc1d1c75733ee3f987f35e",
".git/objects/fa/2dac5d2eba42b6971515a9572bf03c7170bba3": "38ea6a597f89b2e01b63ceb0b797e091",
".git/objects/c5/4cc35edd824f55e54b9006e1551932d78ea311": "043c37391ebaf72110592efe1ebfef45",
".git/objects/ce/18011ed9da0990e92473a02e1e0d346ffc1cbb": "264a8be1d887edff8ee988f5d487874a",
".git/objects/e0/e096a24e59fb9f1e501899389e3905c6c27cd7": "73359fa7932626d48c34734684c71c0f",
".git/objects/e0/7ef449ce3e171f7e68a432fa6aa79bbd1d3935": "9477cd84d98d6833f806479eaa40a28a",
".git/objects/41/4a56ae3d5d7776518ac78e11216dd2251b3fe2": "5ee741ec7990d1bc85baf57a2c21a3c7",
".git/objects/1b/8d8f462889aba98ab6e0647e674af0bebfef92": "8f7367e0bdb8239f7ee7064170d93a38",
".git/objects/77/6e6274613d6b2547f0185889c3ab894991fbe4": "07c9b24cbf088d74fc301aa29d2500d0",
".git/objects/48/c827957221206d35f038f42de3b9f8e4ad4862": "935052791d5ad49d51c91e89b266f282",
".git/objects/24/67ef7c659d992af894cf069cc93496a6685a0d": "ddeb57f1c3924b7382bb7d6b9c448163",
".git/objects/4f/dbc6653d2d013f631d4b345e54ce2fca68367b": "a66ab35541b17e9d54a961073cbc7936",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/7d097dfaa5147400feca7a51c0878a4f0f325a": "7706302770c6420164cd2e65bc081332",
".git/objects/12/aaa55c38a0c339d2d93e8f9303440e999c991f": "1ffb02fda51db698fc8ff52506256e98",
".git/objects/76/35fb558d462b44508fe92fbf5bf53d04df1788": "e27864bf642cc8a7a6e1626e4ace3890",
".git/objects/49/cb8b4fab961b49d48c98aee4a3f2bb32190347": "08e1dfa416691272806dc14f78b6180c",
".git/objects/49/18fe27e5ea577b2ed31626ce0922b77bf57112": "42d382d264f8cb3025f51c41ba6f9c7f",
".git/objects/2b/1f4d9170db7804a98e4c029e8846a21b5e653c": "b48b89948a68cf0d2b2c5403b9ae44cd",
".git/objects/2b/ca971c45b860d4d0955f58621e22620d811454": "377c1bab9b5a59f9ddcdfc701548d903",
".git/objects/78/7ffb8fcf28ae55eeb83af3f60ef525b9889e8b": "e9422b47cb6e32204a3add2dccdecc57",
".git/objects/7a/002883e73375ba371782a53e2622f6ee85e113": "4e97892c241da2bebedb19752e634fe0",
".git/objects/7a/a1e30b5a03326334b0a254c9dff65f8b6ad301": "939b5df9d6eb82d3a0d423fa55d0e947",
".git/objects/14/371f3eacbb17fc0095df0e59609641cafce147": "e3f7d5edeb286b209a059aeb5ec84be6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "470fc00668ccc9744e9ba55e202a6e3f",
".git/logs/refs/heads/main": "470fc00668ccc9744e9ba55e202a6e3f",
".git/logs/refs/remotes/origin/main": "6fc366a346dc0b751a7736c32731fc68",
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
".git/refs/heads/main": "a8f5bbf9b5539cf392d3911acfc65c40",
".git/refs/remotes/origin/main": "a8f5bbf9b5539cf392d3911acfc65c40",
".git/index": "2f957ce65152d986f61c987c338f67f7",
".git/COMMIT_EDITMSG": "6adcf08a6915aaa5b1f3817a64c565fd",
"assets/AssetManifest.json": "d0a564c36cec0090a6bc6daa78427196",
"assets/NOTICES": "e52859474d7b4ae544f42e1f1c24ebd1",
"assets/FontManifest.json": "d5a5cdecfa71d83e6f8e00e23f8d5e29",
"assets/AssetManifest.bin.json": "df3ba35b74241244e9caea13e156e6c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8123b1fa77db71e441dab1483ef6fd01",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "e33c254655d410bba5358577c1a65ecc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "796fd34ccd71acdbcfd36e165a7c7106",
"assets/fonts/MaterialIcons-Regular.otf": "fce4b726ebeb90e85fcbe69d7565829f",
"assets/assets/images/paint.jpg": "b9f37fa7a50a02fe7e992fe20eaa53ec",
"assets/assets/images/room.jpg": "8ac95c55ec8684ddd7cb202616c1501a",
"assets/assets/images/live_app.jpg": "de1a844c94cecf1fa9c8b1f8f86ebae4",
"assets/assets/images/cat.jpg": "de056addd4df7e7fd754d352f3549c1e",
"assets/assets/images/green.png": "be79765df384729af147f22d928457ac",
"assets/assets/images/portfolio.png": "60376873f772416a41c9a6c482e6cef4",
"assets/assets/images/dental.png": "20ab3df01c3c4fc6bfd2ad10bb62a483",
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
