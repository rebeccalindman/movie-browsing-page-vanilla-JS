// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iPTM2":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "35abc8dcc2b6eefb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"hBOQB":[function(require,module,exports,__globalThis) {
//main.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Render Movie Card
parcelHelpers.export(exports, "renderMovieCard", ()=>renderMovieCard);
parcelHelpers.export(exports, "displayMovieCards", ()=>displayMovieCards);
parcelHelpers.export(exports, "fetchAndDisplayCategoryMovies", ()=>fetchAndDisplayCategoryMovies);
parcelHelpers.export(exports, "createCategorySection", ()=>createCategorySection);
var _apiTs = require("./api.ts");
var _domTs = require("./dom.ts");
var _modalTs = require("./modal.ts");
var _utilsTs = require("./utils.ts");
const mainElement = document.querySelector('main');
const lazyLoad = ()=>{
    const lazyImages = document.querySelectorAll("img.lazy");
    const loadImg = (img)=>{
        img.src = img.dataset.src || '';
        img.classList.remove("lazy");
    };
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const img = entry.target;
                    loadImg(img);
                    observer.unobserve(img);
                }
            });
        });
        lazyImages.forEach((img)=>observer.observe(img));
    } else // Fallback for older browsers
    lazyImages.forEach(loadImg);
};
document.addEventListener("DOMContentLoaded", lazyLoad);
document.addEventListener("DOMContentLoaded", async ()=>{
    const contactNavButton = document.getElementById("contact-nav-button");
    const contactNavButton2 = document.getElementById("contact-nav-button2");
    const searchIconButton = document.getElementById("search-icon-button");
    if (contactNavButton) contactNavButton.addEventListener("click", async ()=>{
        await main(); // Ensure main() completes before scrolling
        (0, _utilsTs.scrollToBottom)();
    });
    if (contactNavButton2) contactNavButton2.addEventListener("click", async ()=>{
        await main(); // Ensure main() completes before scrolling
        (0, _utilsTs.scrollToBottom)();
    });
    if (searchIconButton) searchIconButton.addEventListener("click", ()=>{
        const searchBarContainer = document.getElementById("search-bar-container");
        if (searchBarContainer) {
            console.log("Search bar container found");
            searchBarContainer.classList.toggle("active");
            /* add margin to main element */ if (mainElement) mainElement.style.marginTop = mainElement.style.marginTop === "130px" ? "" : "130px";
        }
    });
    const homeLogo = document.getElementById("logo");
    if (homeLogo) homeLogo.addEventListener("click", ()=>{
        window.location.href = "index.html";
    });
    const hamburgerButton = document.getElementById("hamburger-button");
    if (hamburgerButton) hamburgerButton.addEventListener("click", ()=>{
        hamburgerButton.classList.toggle("active");
        const hamburgerMenu = document.getElementById("hamburger-menu");
        if (hamburgerMenu) {
            hamburgerMenu.classList.toggle("open");
            hamburgerMenu.classList.toggle("close");
        }
    });
    if (window.location.pathname === "/index.html" || window.location.pathname === "/") await main(); // Ensure dynamic content is fully rendered
    if (window.location.pathname === "/savedmovies.html") await savedMoviesMain(); // Ensure saved movies are fully loaded
    // Initialize the search functionality
    handleMovieSearch();
});
async function main() {
    try {
        // Fetch genres and sync love property on page load
        const genresList = await (0, _utilsTs.getCachedGenresList)();
        (0, _utilsTs.syncLovePropertyAcrossStoredArrays)();
        // Fetch and display featured movies
        const featuredMovies = await (0, _apiTs.fetchMovies)((0, _apiTs.apiUrl));
        if (featuredMovies && featuredMovies.length > 0) {
            (0, _apiTs.storeDataArray)(featuredMovies, "featuredMovies");
            displayMovieCards(featuredMovies, "featured");
        }
        // Fetch and display new Swedish movies
        const swedishMovies = await (0, _apiTs.fetchMovies)(`${(0, _apiTs.apiUrl)}&with_origin_country=SE&with_original_language=sv`);
        if (swedishMovies && swedishMovies.length > 0) {
            const categoryName = "Discover Swedish Productions";
            (0, _apiTs.storeDataArray)(swedishMovies, "swedishMovies");
            createCategorySection(categoryName);
            displayMovieCards(swedishMovies, categoryName);
        }
        // Fetch and display API category movies
        const categories = genresList.map((genre)=>genre.name);
        await Promise.all(categories.map((category)=>fetchAndDisplayCategoryMovies(category)));
    } catch (error) {
        console.error("Error during main execution:", error);
    }
}
async function savedMoviesMain() {
    const favoriteMovies = await (0, _utilsTs.getFavoriteMovies)();
    if (favoriteMovies && favoriteMovies.length > 0) displayMovieCards(favoriteMovies, "saved");
    else {
        (0, _domTs.displayUserMessage)(`No favorite movies found.`, ` Go back to the home page and add some favorites!`, "To Home Page", "/index.html");
        console.log("No favorite movies found.");
    }
}
function renderMovieCard(movie, category) {
    const movieCardContainer = document.getElementById(`${category} movies`);
    if (!movieCardContainer) {
        console.error(`Error: Movie card container for category '${category}' not found.`);
        return; // Prevent rendering if the container is missing
    }
    if (!movie.poster_path || movie.poster_path === "") {
        console.error(`Error: Missing poster path for movie '${movie.title}'.`);
        return; // Prevent rendering if poster path is missing
    }
    const movieCard = document.createElement("article");
    movieCard.classList.add("movie-card");
    // Check if the movie is a favorite
    const isFavorited = (0, _utilsTs.isFavorite)(movie.id);
    const favoriteClass = isFavorited ? "loved" : "";
    movieCard.innerHTML = `
    <div class="movie-card-content">
      <button class="love-button ${favoriteClass}" aria-label="Add to favorites" data-movie-id="${movie.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" fill="white" fill-opacity="0.4"/>
        </svg>
      </button>
      <img class="movie-card-poster lazy" src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} poster">
      <div class="movie-card-title"><h3>${movie.title}</h3></div>
      <div class="movie-card-information-container">
        <p class="movie-card-genres">${movie.genres.map((genre)=>genre.name).join(", ")}</p>
        <p class="movie-card-release-date">${movie.release_date}</p>
        <p class="cto-view-details">View Details</p>
      </div>
    </div>
  `;
    movieCardContainer.appendChild(movieCard);
    // Attach click event to toggle favorite
    const loveButton = movieCard.querySelector(".love-button");
    if (!loveButton) throw new Error("Love button not found");
    loveButton.addEventListener("click", ()=>{
        (0, _utilsTs.toggleFavorite)(movie);
        // Select all buttons with the same movie ID
        const loveButtons = document.querySelectorAll(`.love-button[data-movie-id="${movie.id}"]`);
        loveButtons.forEach((button)=>button.classList.toggle("loved"));
    });
    // Attach click event to view details
    movieCard.addEventListener("click", (event)=>{
        const target = event.target;
        if (!target.closest(".love-button")) (0, _modalTs.createMovieModal)(movie);
    });
}
function displayMovieCards(movies, category) {
    try {
        if (!movies || movies.length === 0) throw new Error("No movies found");
        movies.forEach((movie)=>{
            renderMovieCard(movie, category);
        });
    } catch (error) {
        console.error('An error occurred while displaying the movie cards:', error);
    } finally{
        console.log('Movie cards displayed successfully.');
    }
}
async function fetchAndDisplayCategoryMovies(category) {
    try {
        const genresList = await (0, _utilsTs.getCachedGenresList)();
        const categoryUrl = await (0, _utilsTs.addCategoryFilter)(category);
        const categoryMovies = await (0, _apiTs.fetchMovies)(categoryUrl);
        if (!categoryMovies || categoryMovies.length === 0) {
            console.error(`No movies found for category: ${category}`);
            return;
        }
        // Sync genres for the movies
        categoryMovies.forEach((movie)=>{
            if (movie.genres) movie.genres = movie.genres.map(({ id })=>({
                    id,
                    name: (0, _utilsTs.getGenreFromId)(id, genresList)
                }));
        });
        // Ensure the category section exists before displaying cards
        createCategorySection(category);
        // Save the fetched movies to local storage
        (0, _apiTs.storeDataArray)(categoryMovies, `${category} movies`);
        // Sync love property
        (0, _utilsTs.syncLovePropertyAcrossStoredArrays)();
        displayMovieCards(categoryMovies, category);
    } catch (error) {
        console.error(`An error occurred while fetching movies for category: ${category}`, error);
    } finally{
        console.log(`Movies fetched and displayed for category: ${category}`);
    }
}
function createCategorySection(category) {
    const existingSection = document.getElementById(`${category} movies`);
    if (existingSection) {
        console.warn(`Category section for '${category}' already exists.`);
        return; // Avoid duplicate sections
    }
    const section = document.createElement("section");
    section.classList.add("section-header");
    section.innerHTML = `
    <h2>${category}</h2>
    <p>Click on a movie card to view more details and find a streaming site.</p>
  `;
    const movieCardsWrapper = document.createElement("section");
    movieCardsWrapper.classList.add("movie-cards-wrapper");
    movieCardsWrapper.innerHTML = `
    <div class="movie-card-scroll-container">
      <div class="movie-card-container" id="${category} movies"></div>
    </div>
  `;
    if (mainElement) {
        mainElement.appendChild(section);
        mainElement.appendChild(movieCardsWrapper);
    } else console.error("Error: 'main' element not found in the DOM.");
}
function handleMovieSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("search-button");
    if (!searchInput || !searchButton) {
        console.error("Search input, button, or container not found.");
        return;
    }
    const fetchAndDisplayMovies = async (query)=>{
        if (query.trim().length < 2) {
            (0, _domTs.displayUserMessage)("Search query too short.", "Please enter at least 2 characters for your search!");
            return;
        }
        const apiSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${(0, _apiTs.API_KEY_tmdb)}&query=${encodeURIComponent(query)}`;
        try {
            await createSearchResultContainer(query);
            const searchResultsContainer = document.getElementById('searchResult movies');
            localStorage.setItem("searchQuery", query);
            const searchResult = await (0, _apiTs.fetchMovies)(apiSearchUrl);
            // Clear previous search results
            if (searchResultsContainer) searchResultsContainer.innerHTML = "";
            if (searchResult && searchResult.length > 0) {
                (0, _apiTs.storeDataArray)(searchResult, "searchResult");
                displayMovieCards(searchResult, "searchResult");
                (0, _utilsTs.scrollToTop)();
                const numberOfValidResults = searchResult.filter((movie)=>movie.poster_path).length;
                /* Update section header with search details */ const sectionHeader = document.querySelector(".section-header");
                if (sectionHeader) sectionHeader.innerHTML = `
          <h2>Search Results for "${query}" (${numberOfValidResults} results)</h2>
          <p>Click on a movie card to view more details and find a streaming site.</p>
        `;
            } else (0, _domTs.displayUserMessage)(`No results found for "${query}".`, "Try a different keyword or check the spelling!");
        } catch (error) {
            console.error("Error fetching movies:", error);
            (0, _domTs.displayUserMessage)("An error occurred during the search.", "Please try again later!");
        }
    };
    let searchTimeout = null;
    if (searchInput) searchInput.addEventListener("input", ()=>{
        const query = searchInput.value.trim();
        if (query.length >= 3) {
            if (searchTimeout) clearTimeout(searchTimeout);
            searchTimeout = window.setTimeout(()=>fetchAndDisplayMovies(query), 1000); // 1 second delay to reduce API requests
        }
    });
    // Handle Enter key
    if (searchInput) searchInput.addEventListener("keydown", (event)=>{
        if (event.key === "Enter") {
            const query = searchInput.value.trim();
            fetchAndDisplayMovies(query);
        }
    });
    // Handle Search Button
    if (searchButton) searchButton.addEventListener("click", ()=>{
        if (searchInput) {
            const query = searchInput.value.trim();
            fetchAndDisplayMovies(query);
        }
    });
}
async function createSearchResultContainer(query) {
    const existingContainer = document.getElementById('searchResult movies');
    if (existingContainer) {
        console.log("Search results section already exists.");
        return;
    }
    /* create seaction header */ const sectionHeader = document.createElement("section");
    sectionHeader.classList.add("section-header");
    sectionHeader.innerHTML = `
    <h2>Search Results for "${query}"</h2>
    <p>Click on a movie card to view more details and find a streaming site.</p>
  `;
    const mainElement = document.querySelector("main");
    if (!mainElement) {
        console.error("Main element not found.");
        return;
    }
    const searchResultsContainer = document.createElement("section");
    searchResultsContainer.classList.add("movie-cards-wrapper");
    searchResultsContainer.innerHTML = `
    <div class="movie-card-scroll-container">
      <div class="movie-card-container" id="searchResult movies">
        <!-- Search results will appear here -->
      </div>
    </div>
  `;
    mainElement.insertBefore(searchResultsContainer, mainElement.firstChild);
    mainElement.insertBefore(sectionHeader, mainElement.firstChild);
    console.log("Search results section created.");
    return;
}

},{"./api.ts":"dshRM","./dom.ts":"9HLoF","./modal.ts":"cQ1Dk","./utils.ts":"dY70f","@parcel/transformer-js/src/esmodule-helpers.js":"amG76"}],"dshRM":[function(require,module,exports,__globalThis) {
//api.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY_tmdb", ()=>API_KEY_tmdb);
parcelHelpers.export(exports, "apiUrl", ()=>apiUrl);
parcelHelpers.export(exports, "apiFeaturedMoviesUrl", ()=>apiFeaturedMoviesUrl);
parcelHelpers.export(exports, "fetchMovies", ()=>fetchMovies);
/**
 ** Display an error message based on the HTTP status code.
 * (Recycled from Boiler Room w 47)
 */ parcelHelpers.export(exports, "displayErrorMessage", ()=>displayErrorMessage);
parcelHelpers.export(exports, "storeDataArray", ()=>storeDataArray);
parcelHelpers.export(exports, "getGenresList", ()=>getGenresList);
parcelHelpers.export(exports, "getProvidersListForMovie", ()=>getProvidersListForMovie);
/**
 ** Fetch movies from The Movie Database API.
 */ var _utilsTs = require("./utils.ts");
const API_KEY_tmdb = "6369fcc46c83ecd475d3f734321f2a0b"; //themoviedb.org
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_tmdb}&include_adult=false&include_video=true&page=1&sort_by=popularity.desc`;
const apiFeaturedMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_tmdb}&include_adult=false&include_video=false&page=1&region=SE&sort_by=popularity.desc&with_watch_providers=netflix%20OR%20prime%20OR%20svt&year=2024`; //todo not sure 'region=SE' works
async function fetchMovies(url) {
    try {
        const genresList = await (0, _utilsTs.getCachedGenresList)();
        const response = await fetch(url);
        if (!response.ok) {
            displayErrorMessage(response.status);
            return null;
        }
        const json = await response.json();
        // Ensure `results` is an array
        if (!json.results || !Array.isArray(json.results)) throw new Error("API response is missing 'results' or it's not an array.");
        // Map movies and fetch cast information asynchronously
        const movies = await Promise.all(json.results.map(async (movie)=>({
                title: movie.title,
                overview: movie.overview,
                backdrop_path: movie.backdrop_path,
                poster_path: movie.poster_path,
                release_date: movie.release_date,
                id: movie.id,
                love: movie.love || false,
                vote_average: Number(movie.vote_average).toFixed(1),
                vote_count: movie.vote_count,
                genres: Array.isArray(movie.genre_ids) ? movie.genre_ids.map((genreId)=>{
                    const genre = genresList.find((g)=>g.id === genreId);
                    return genre ? {
                        id: genre.id,
                        name: genre.name
                    } : {
                        id: genreId,
                        name: "Unknown Genre"
                    };
                }) : [],
                cast: await getCastInformationForMovie(movie.id) || [],
                providers: await getProvidersListForMovie(movie.id) || [],
                imdb: await getImdbInfoForMovie(movie.id)
            })));
        return movies;
    } catch (error) {
        console.error('Error during fetchMovies execution:', error);
        displayErrorMessage(0);
        return null;
    }
}
async function getCastInformationForMovie(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY_tmdb}&include_adult=false&language=en-US,sv-SE`;
    const imageBaseUrl = "https://image.tmdb.org/t/p/w200";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Error fetching cast information for movie ID ${movieId}:`, response.status);
            return null;
        }
        const data = await response.json();
        const placeholderImageUrl = "https://via.placeholder.com/500x750?text=No+Image";
        // Map cast members
        return data.cast.map((castMember)=>({
                id: castMember.id,
                name: castMember.name,
                character: castMember.character,
                profile_path: castMember.profile_path ? `${imageBaseUrl}${castMember.profile_path}` : placeholderImageUrl,
                cast_id: castMember.cast_id,
                gender: castMember.gender,
                order: castMember.order
            }));
    } catch (error) {
        console.error(`Error fetching cast information for movie ID ${movieId}:`, error);
        return null;
    }
}
function displayErrorMessage(statusCode) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    switch(statusCode){
        case 400:
            errorMessage.textContent = "Oops! Something went wrong with your request. An error has been sent to our IT. Please try again later.";
            console.error("Invalid request (400). Check your URL.");
            break;
        case 401:
            errorMessage.textContent = "Access denied. Please try again later and contact support if the issue persists.";
            console.error("Unauthorized access (401). Invalid API key.");
            break;
        case 404:
            errorMessage.textContent = "Oops! We couldn't find what you're looking for. Check your request and please try again later.";
            console.error("Resource not found (404).");
            break;
        case 429:
            errorMessage.textContent = "You're making too many requests! Please wait a while before trying again.";
            console.error("Too many requests (429). Your request count (#) is over the allowed limit of (40).");
            break;
        case 500:
            errorMessage.textContent = "Something went wrong on our end. An error has been sent to our IT. Please try again later.";
            console.error("Internal error (500): Something went wrong, contact TMDB.");
            break;
        case 503:
            errorMessage.textContent = "We are sorry! This service is temporarily offline, try again later.";
            console.error("Service offline (503). This service is temporarily offline.");
            break;
        default:
            errorMessage.textContent = "Oopsie! An unexpected error occurred. Please try again.";
            console.error(`Unexpected error (${statusCode}).`);
            break;
    }
    document.body.innerHTML = "";
    document.body.appendChild(errorMessage);
}
function storeDataArray(data, key) {
    localStorage.setItem(key, JSON.stringify(data));
}
async function getGenresList() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY_tmdb}`;
    try {
        const response = await fetch(url);
        const json = await response.json();
        storeDataArray(json.genres, "genresList");
        return json.genres || []; // Extract genres array
    } catch (error) {
        console.error('Error fetching genres:', error);
        return null; // Return null on error
    }
}
async function getProvidersListForMovie(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY_tmdb}`;
    try {
        const response = await fetch(url);
        const json = await response.json();
        const region = json.results["SE"]; // Adjust for the "SE" region (Sweden)
        if (!region) {
            console.warn("No provider data available for the selected region (SE).");
            return null; // Return null if no data for the region
        }
        // Construct the ProviderList object
        const providers = {
            link: region.link || "",
            flatrate: region.flatrate || [],
            rent: region.rent || [],
            buy: region.buy || [],
            free: region.free || []
        };
        return providers;
    } catch (error) {
        console.error("Error fetching providers:", error);
        return null; // Return null on error
    }
}
async function getImdbInfoForMovie(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/external_ids?api_key=${API_KEY_tmdb}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            link: "https://www.imdb.com/title/" + data.imdb_id,
            imdb_id: data.imdb_id || ""
        };
    } catch (error) {
        console.error('Error fetching IMDb info:', error);
        return {
            link: "",
            imdb_id: null
        };
    }
}

},{"./utils.ts":"dY70f","@parcel/transformer-js/src/esmodule-helpers.js":"amG76"}],"dY70f":[function(require,module,exports,__globalThis) {
//utils.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGenreFromId", ()=>getGenreFromId);
parcelHelpers.export(exports, "addCategoryFilter", ()=>addCategoryFilter);
parcelHelpers.export(exports, "getCachedGenresList", ()=>getCachedGenresList);
/**
 * Toggle a movie as a favorite. If it's already a favorite, it will be removed. Otherwise, it will be added.
 */ parcelHelpers.export(exports, "toggleFavorite", ()=>toggleFavorite);
/**
 * Check if a movie is marked as favorite.
 */ parcelHelpers.export(exports, "isFavorite", ()=>isFavorite);
/**
 * Get the current list of favorite movies.
 */ parcelHelpers.export(exports, "getFavoriteMovies", ()=>getFavoriteMovies);
/**
 * Sync the local storage and the in-memory `lovedMoviesArr` in case of external changes.
 */ parcelHelpers.export(exports, "syncLovePropertyAcrossStoredArrays", ()=>syncLovePropertyAcrossStoredArrays);
parcelHelpers.export(exports, "scrollToBottom", ()=>scrollToBottom);
parcelHelpers.export(exports, "scrollToTop", ()=>scrollToTop);
var _apiTs = require("./api.ts");
function getGenreFromId(genreId, genres) {
    if (!genres) return 'Unknown Genre'; // Fallback for null genres list
    const genre = genres.find((genre)=>genre.id === genreId);
    return genre ? genre.name : 'Unknown Genre'; // Fallback for missing genre ID
}
async function addCategoryFilter(category) {
    const genresList = await getCachedGenresList();
    const categoryId = genresList.find((genre)=>genre.name === category)?.id;
    const url = (0, _apiTs.apiUrl) + (categoryId ? `&with_genres=${categoryId}` : '');
    return url;
}
let cachedGenresList = null;
let fetchingGenresList = null;
async function getCachedGenresList() {
    if (cachedGenresList) return cachedGenresList;
    if (fetchingGenresList) return await fetchingGenresList;
    fetchingGenresList = (async ()=>{
        let genresList = JSON.parse(localStorage.getItem("genresList") || "null");
        if (!genresList) {
            genresList = await (0, _apiTs.getGenresList)();
            localStorage.setItem("genresList", JSON.stringify(genresList));
        }
        cachedGenresList = genresList;
        fetchingGenresList = null; // Clear the fetching promise after completion
        return genresList;
    })();
    return await fetchingGenresList;
}
let lovedMoviesArr = JSON.parse(localStorage.getItem("lovedMoviesArr") || "[]");
function toggleFavorite(movie) {
    const movieIndex = lovedMoviesArr.findIndex((m)=>m.id === movie.id);
    if (movieIndex !== -1) // If movie is already a favorite, remove it
    lovedMoviesArr.splice(movieIndex, 1);
    else {
        // Otherwise, add it as a favorite
        movie.love = true;
        lovedMoviesArr.push(movie);
    }
    // Update local storage for the favorites list
    localStorage.setItem("lovedMoviesArr", JSON.stringify(lovedMoviesArr));
    // Sync love property across all stored arrays
    syncLovePropertyAcrossStoredArrays();
}
function isFavorite(movieId) {
    return lovedMoviesArr.some((movie)=>movie.id === movieId);
}
function getFavoriteMovies() {
    return lovedMoviesArr;
}
function syncLovePropertyAcrossStoredArrays() {
    // Get the favorite movies list
    const lovedMoviesArr = JSON.parse(localStorage.getItem("lovedMoviesArr") || "[]");
    // Dynamically fetch all stored array keys
    const storedKeys = Object.keys(localStorage).filter((key)=>key.endsWith("movies"));
    storedKeys.forEach((arrayKey)=>{
        const array = JSON.parse(localStorage.getItem(arrayKey) || "[]");
        const updatedArray = array.map((movie)=>{
            const isLoved = lovedMoviesArr.some((favMovie)=>favMovie.id === movie.id);
            return {
                ...movie,
                love: isLoved
            }; // Ensure the love property is synced
        });
        // Save the updated array back to local storage
        localStorage.setItem(arrayKey, JSON.stringify(updatedArray));
    });
    console.log("Love properties synced across stored arrays.");
}
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
    console.log("Scrolling to bottom");
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    console.log("Scrolling to top");
}

},{"./api.ts":"dshRM","@parcel/transformer-js/src/esmodule-helpers.js":"amG76"}],"amG76":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9HLoF":[function(require,module,exports,__globalThis) {
//dom.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayUserMessage", ()=>displayUserMessage);
function displayUserMessage(userMessage1, userMessage2, cto, link) {
    // Remove empty movie cards wrapper
    const movieCardsWrapper = document.querySelector('.movie-cards-wrapper');
    if (movieCardsWrapper) {
        const movieCardContainers = movieCardsWrapper.querySelectorAll('.movie-card-container');
        if (Array.from(movieCardContainers).every((container)=>container.children.length === 0)) movieCardsWrapper.remove();
    }
    // Check if user message container already exists
    let userMessageContainer = document.querySelector('.user-message-container');
    if (!userMessageContainer) {
        userMessageContainer = document.createElement('div');
        userMessageContainer.classList.add('user-message-container');
        userMessageContainer.style.backgroundColor = 'white';
        userMessageContainer.style.padding = '20px';
        userMessageContainer.style.width = '100%';
        userMessageContainer.style.textAlign = 'center';
    }
    // Update message text
    let userMessageElement = userMessageContainer.querySelector('p');
    if (!userMessageElement) {
        userMessageElement = document.createElement('p');
        userMessageContainer.appendChild(userMessageElement);
    }
    userMessageElement.textContent = userMessage2;
    // Update section header and add user message
    const sectionHeader = document.querySelector('.section-header');
    if (sectionHeader) {
        sectionHeader.textContent = userMessage1;
        if (!sectionHeader.parentElement?.contains(userMessageContainer)) sectionHeader.parentElement?.insertBefore(userMessageContainer, sectionHeader.nextSibling);
    }
    // Add call to action-button
    if (cto && link) {
        const callToActionButton = document.createElement('button');
        callToActionButton.classList.add('call-to-action-button');
        callToActionButton.style.backgroundColor = 'black';
        callToActionButton.style.padding = '8px 16px';
        callToActionButton.style.border = 'none';
        callToActionButton.style.borderRadius = '8px';
        callToActionButton.style.marginTop = '20px';
        callToActionButton.style.cursor = 'pointer';
        callToActionButton.addEventListener('mouseover', ()=>{
            callToActionButton.style.backgroundColor = '#5f9ea0';
        });
        callToActionButton.addEventListener('mouseout', ()=>{
            callToActionButton.style.backgroundColor = 'black';
        });
        callToActionButton.innerHTML = `
            <a href="${link}" style="text-decoration: none; color: white; font-weight: bold;">${cto}</a>
            `;
        userMessageContainer.appendChild(callToActionButton);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"amG76"}],"cQ1Dk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMovieModal", ()=>createMovieModal);
var _utilsTs = require("./utils.ts");
var _apiTs = require("./api.ts");
async function createMovieModal(movie) {
    // Check if the movie is a favorite
    const isFavorited = (0, _utilsTs.isFavorite)(movie.id);
    const favoriteClass = isFavorited ? "loved" : "";
    const movieModal = document.createElement('div');
    movieModal.classList.add('movie-modal');
    const movieModalOverlay = document.createElement('div');
    movieModalOverlay.classList.add('movie-modal-overlay');
    // Add a class to the <body> to disable scrolling
    document.body.classList.add('no-scroll');
    movieModal.innerHTML = `
    <button type="button" class="movie-modal-close">X</button>
    <div class="movie-modal-backdrop" style="background: url('https://image.tmdb.org/t/p/w500/${movie.poster_path}') lightgray 50% center / cover no-repeat" aria-label="${movie.title} movie backdrop">
    </div>
    <section class="movie-modal-title-container">
        <h3 class="movie-modal-title">${movie.title}</h3>
    </section>
    <section class="rating-container">
        <div class="rating-group">
            <p class="movie-modal-rating">${movie.vote_average}/10</p> 
            <p class="vote-count">(${movie.vote_count})</p> 
        </div>
        <button class="love-button ${favoriteClass}" aria-label="Add to favorites" data-movie-id="${movie.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" fill="white" fill-opacity="0.4"/>
        </svg>
      </button> 
    </section>
    <section class="information-container">
        <ul class="movie-genres">
        ${movie.genres.map((genre)=>`<li>${genre.name}</li>`).join('- ')}
        </ul>
        <p class="movie-modal-release-date">${movie.release_date}</p>   
        <p class="movie-modal-overview">${movie.overview}</p>
        
       
    </section>
    <section class="movie-modal-links">
            <div class="links-container">
                <h4>Links</h4>
                <ul>
                    <li><a href="${movie.imdb.link}" target="_blank" rel="noopener noreferrer">IMDb</a></li>
                </ul>
            </div>
            <div class="watch-container">
                
            
            </div>
    </section>
    <section class="actors-section">
        <ol>
            ${movie.cast ? movie.cast.map((actor)=>`
                     <li class="actor-list-item">
                        <img class="actor-image lazy" src="${actor.profile_path}" alt="${actor.name}">
                        <div style="display: flex; flex-direction: column;">
                        <span aria-label="Role" style="font-weight: bold;">${actor.character}</span>
                        <span aria-label="Actor name">${actor.name}</span>
                        </div>
                        </li>
                `).join('') : '<li class="actor-list-item">No cast information available</li>'}
        </ol>
    </section>
    `;
    document.body.appendChild(movieModal);
    document.body.appendChild(movieModalOverlay);
    // available providerTypes: 'buy', 'rent', 'flatrate', 'free'
    const providers = await (0, _apiTs.getProvidersListForMovie)(movie.id);
    const watchContainer = movieModal.querySelector(".watch-container");
    if (providers && Object.keys(providers).length > 0) createListOfProviders(providers, watchContainer);
    else watchContainer.innerHTML = `
        <h4>Watch Providers</h4>
        <p style="font-size: 1em; color: #666;">No watch providers are available for this movie at the moment.</p>
      `;
    const closeModal = ()=>{
        movieModal.remove();
        movieModalOverlay.remove();
        // Remove the no-scroll class from the <body>
        document.body.classList.remove('no-scroll');
    };
    // Close when clicking on the close button or outside the modal
    document.addEventListener("click", (e)=>{
        const target = e.target;
        if (target.classList.contains("movie-modal-overlay") || target.classList.contains("movie-modal-close")) closeModal();
    });
    // Attach click event to toggle favorite
    const loveButton = movieModal.querySelector(".love-button");
    if (!loveButton) {
        console.error("Love button not found");
        return;
    }
    loveButton.addEventListener("click", ()=>{
        (0, _utilsTs.toggleFavorite)(movie);
        // Select all buttons with the same movie ID
        const loveButtons = document.querySelectorAll(`.love-button[data-movie-id="${movie.id}"]`);
        loveButtons.forEach((button)=>button.classList.toggle("loved"));
    });
}
function createListOfProviders(providers, container) {
    if (!providers || !container) return;
    // Combine all provider types into a single list with type information
    const providerMap = new Map();
    const addProviders = (type, providersArray)=>{
        if (!providersArray) return;
        providersArray.forEach((provider)=>{
            const existingEntry = providerMap.get(provider.provider_name);
            if (existingEntry) existingEntry.types.push(type); // Add the type to the existing provider
            else providerMap.set(provider.provider_name, {
                provider,
                types: [
                    type
                ]
            });
        });
    };
    // Add providers from all categories
    addProviders("Subscription", providers.flatrate);
    addProviders("Rent", providers.rent);
    addProviders("Buy", providers.buy);
    addProviders("Free", providers.free);
    // Generate the HTML for the combined list of providers
    const providerListHtml = Array.from(providerMap.values()).map(({ provider, types })=>{
        const imageUrl = provider.logo_path ? `https://image.tmdb.org/t/p/original${provider.logo_path}` : "";
        const typesText = types.join(", "); // Combine types into a single string
        return `
        <li>
          <a href="${providers.link}" target="_blank" rel="noopener noreferrer">
            <img src="${imageUrl}" alt="${provider.provider_name}" class="provider-logo" />
            <span>${provider.provider_name}</span>
          </a>
          <span class="provider-types">(${typesText})</span>
        </li>
      `;
    }).join("");
    // Update the container with the generated list
    container.innerHTML = `
    <h4>Watch Providers in Sweden</h4>
    <p style="font-size: 0.9em; color: #666;"> Clicking on a provider will redirect you to the tmdb website with direct links to each provider. </p>
    <ul class="provider-list">
      ${providerListHtml}
    </ul>
  `;
    // Add CSS to style provider logos and types
    const styleElement = document.createElement("style");
    styleElement.textContent = `
    .provider-logo {
      width: 20px;
      height: 20px;
      object-fit: contain;
      margin-right: 10px;
    }
    .provider-list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .provider-list li {
      display: flex;
      align-items: flex-end;
      margin: 10px;
    }
    .provider-types {
      margin-left: 5px;
      font-size: 0.9em;
      color: #666;
    }
  `;
    document.head.appendChild(styleElement);
}

},{"./utils.ts":"dY70f","./api.ts":"dshRM","@parcel/transformer-js/src/esmodule-helpers.js":"amG76"}]},["iPTM2","hBOQB"], "hBOQB", "parcelRequire94c2")

//# sourceMappingURL=index.c2b6eefb.js.map
