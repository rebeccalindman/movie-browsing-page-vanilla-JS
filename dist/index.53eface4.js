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
})({"lI3Wn":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "80a7392c53eface4";
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

},{}],"gfLib":[function(require,module,exports,__globalThis) {
//main.ts
var _apiTs = require("./api.ts");
var _domTs = require("./dom.ts");
var _modalTs = require("./modal.ts");
// Mock Movie Data
const mockMovie = {
    title: "EXAMPLE: The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    backdrop_path: "/5KvYhSZuRzrcXzWjVO4J3q4b2qU.jpg",
    poster_path: "/q6y0Go1tsGEsmtFryIEreULOSLp.jpg",
    release_date: "1994-09-23",
    id: 1,
    love: false,
    vote_average: 9.2,
    vote_count: 2500,
    genres: [
        {
            id: 1,
            name: "Drama"
        }
    ],
    cast: [
        {
            profile_path: "#",
            name: "Tim Robbins"
        },
        {
            profile_path: "#",
            name: "Morgan Freeman"
        }
    ]
};
document.addEventListener('DOMContentLoaded', ()=>{
    const contactNavButton = document.getElementById('contact-nav-button');
    if (contactNavButton) contactNavButton.addEventListener('click', ()=>{
        scrollToBottom();
    });
    main();
});
async function main() {
    try {
        (0, _apiTs.getGenresList)();
        const featuredMovies = await (0, _apiTs.fetchMovies)((0, _apiTs.apiUrl));
        if (!featuredMovies || featuredMovies.length === 0) {
            console.error('No movies found or fetched data is invalid.');
            return;
        }
        (0, _apiTs.storeDataArray)(featuredMovies, "featuredMovies");
        (0, _domTs.displayMovieCards)(featuredMovies, "featured");
        (0, _domTs.fetchAndDisplayCategoryMovies)("Action");
        (0, _domTs.fetchAndDisplayCategoryMovies)("Adventure");
        (0, _domTs.fetchAndDisplayCategoryMovies)("Comedy");
        (0, _domTs.fetchAndDisplayCategoryMovies)("Drama");
        (0, _domTs.fetchAndDisplayCategoryMovies)("Horror");
        (0, _domTs.fetchAndDisplayCategoryMovies)("Romance");
        (0, _domTs.fetchAndDisplayCategoryMovies)("Thriller");
        (0, _modalTs.createMovieModal)(mockMovie);
    } catch (error) {
        console.error('Error during main execution:', error);
    }
}
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

},{"./api.ts":"jGtCU","./dom.ts":"eWIKv","./modal.ts":"5pIqC"}],"jGtCU":[function(require,module,exports,__globalThis) {
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
/**
 ** Fetch movies from The Movie Database API.
 */ var _utilsTs = require("./utils.ts");
const API_KEY_tmdb = "6369fcc46c83ecd475d3f734321f2a0b"; //themoviedb.org
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_tmdb}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
const apiFeaturedMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_tmdb}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_providers=netflix%20OR%20prime%20OR%20svt&year=2024`;
async function fetchMovies(url) {
    try {
        const genresList = await (0, _utilsTs.getCachedGenresList)();
        const response = await fetch(url);
        if (!response.ok) {
            displayErrorMessage(response.status);
            return null;
        }
        const json = await response.json();
        const movies = json.results.map((movie)=>({
                title: movie.title,
                overview: movie.overview,
                backdrop_path: movie.backdrop_path,
                poster_path: movie.poster_path,
                release_date: movie.release_date,
                id: movie.id,
                love: movie.love || false,
                vote_average: movie.vote_average,
                vote_count: movie.vote_count,
                genres: movie.genre_ids.map((genreId)=>{
                    const genre = genresList.find((g)=>g.id === genreId);
                    return genre ? {
                        id: genre.id,
                        name: genre.name
                    } : {
                        id: genreId,
                        name: 'Unknown Genre'
                    };
                }),
                cast: Array.isArray(movie.cast) ? movie.cast : []
            }));
        return movies;
    } catch (error) {
        console.error('Error during fetchMovies execution:', error);
        displayErrorMessage(0);
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

},{"./utils.ts":"8NGW9","@parcel/transformer-js/src/esmodule-helpers.js":"amG76"}],"8NGW9":[function(require,module,exports,__globalThis) {
//utils.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGenreFromId", ()=>getGenreFromId);
parcelHelpers.export(exports, "addCategoryFilter", ()=>addCategoryFilter);
parcelHelpers.export(exports, "getCachedGenresList", ()=>getCachedGenresList);
var _api = require("./api");
function getGenreFromId(genreId, genres) {
    if (!genres) return 'Unknown Genre'; // Fallback for null genres list
    const genre = genres.find((genre)=>genre.id === genreId);
    return genre ? genre.name : 'Unknown Genre'; // Fallback for missing genre ID
}
async function addCategoryFilter(category) {
    const genresList = await getCachedGenresList();
    const categoryId = genresList.find((genre)=>genre.name === category)?.id;
    const url = (0, _api.apiUrl) + (categoryId ? `&with_genres=${categoryId}` : '');
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
            genresList = await (0, _api.getGenresList)();
            localStorage.setItem("genresList", JSON.stringify(genresList));
        }
        cachedGenresList = genresList;
        fetchingGenresList = null; // Clear the fetching promise after completion
        return genresList;
    })();
    return await fetchingGenresList;
}

},{"./api":"jGtCU","@parcel/transformer-js/src/esmodule-helpers.js":"amG76"}],"amG76":[function(require,module,exports,__globalThis) {
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

},{}],"eWIKv":[function(require,module,exports,__globalThis) {
//dom.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Single Movie Card Function
parcelHelpers.export(exports, "displayMovieCards", ()=>displayMovieCards);
parcelHelpers.export(exports, "renderMovieCard", ()=>renderMovieCard);
parcelHelpers.export(exports, "createCategorySection", ()=>createCategorySection);
parcelHelpers.export(exports, "fetchAndDisplayCategoryMovies", ()=>fetchAndDisplayCategoryMovies);
var _utilsTs = require("./utils.ts");
var _apiTs = require("./api.ts");
const mainElement = document.querySelector('main');
function displayMovieCards(movies, category) {
    try {
        movies.forEach((movie)=>{
            renderMovieCard(movie, category);
        });
    } catch (error) {
        console.error('An error occurred while displaying the movie cards:', error);
    } finally{
        console.log('Movie cards displayed successfully.');
    }
}
function renderMovieCard(movie, category) {
    const movieCardContainer = document.getElementById(`${category} movies`);
    const movieCard = document.createElement('article');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `

    <div class="movie-card-content">
      <button class="love-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" fill="white" fill-opacity="0.4"/>
          </svg>
      </button>
      <img class="movie-card-poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
        <h3 class="movie-card-title">${movie.title}</h3>
        <div class="movie-card-information-container">
          <p class="movie-card-genres">${movie.genres.map((genre)=>genre.name).join(', ')}</p>
          <p class="movie-card-release-date">${movie.release_date}</p>
          <p class="cto-view-details">View Details</p>
        </div>
    </div>
    `;
    movieCardContainer.appendChild(movieCard);
    movieCard.querySelector('.love-button').addEventListener('click', ()=>{
        movieCard.classList.toggle('loved');
    });
}
function createCategorySection(category) {
    if (document.getElementById(`${category} movies`)) {
        console.warn(`Category section for '${category}' already exists.`);
        return; // Avoid duplicate sections
    }
    const section = document.createElement('section');
    section.classList.add('section-header');
    section.innerHTML = `
      <h2>${category}</h2>
      <p>Click on a movie card to view more details and find a streaming site.</p>
    `;
    if (!mainElement) {
        console.error("Error: 'main' element not found in the DOM.");
        return;
    }
    mainElement.appendChild(section);
    const topMoviesCategoryWrapper = document.createElement('section');
    topMoviesCategoryWrapper.classList.add('top-movies-wrapper');
    topMoviesCategoryWrapper.innerHTML = `
      <div class="movie-card-scroll-container"> 
        <div class="movie-card-container" id="${category} movies">
        </div>
      </div>
    `;
    mainElement.appendChild(topMoviesCategoryWrapper);
}
async function fetchAndDisplayCategoryMovies(category) {
    try {
        const genresList = await (0, _utilsTs.getCachedGenresList)();
        const categoryUrl = await (0, _utilsTs.addCategoryFilter)(category);
        console.log(categoryUrl);
        const categoryMovies = await (0, _apiTs.fetchMovies)(categoryUrl);
        if (!categoryMovies || categoryMovies.length === 0) {
            console.error('No movies found or fetched data is invalid.');
            return;
        }
        (0, _apiTs.storeDataArray)(categoryMovies, `${category} movies`);
        categoryMovies.forEach((movie)=>{
            const listOfGenres = [];
            movie.genres.forEach((genre)=>{
                const genreName = (0, _utilsTs.getGenreFromId)(genre.id, genresList);
                listOfGenres.push({
                    id: genre.id,
                    name: genreName
                });
            });
            movie.genres = listOfGenres;
        });
        createCategorySection(category);
        displayMovieCards(categoryMovies, category);
    } catch (error) {
        console.error('An error occurred while fetching movies:', error);
    } finally{
        console.log('Movies fetched and displayed successfully.');
    }
}

},{"./utils.ts":"8NGW9","./api.ts":"jGtCU","@parcel/transformer-js/src/esmodule-helpers.js":"amG76"}],"5pIqC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* TODO replace with star icon and heart icon */ parcelHelpers.export(exports, "createMovieModal", ()=>createMovieModal);
function createMovieModal(movie) {
    const movieModal = document.createElement('div');
    movieModal.classList.add('movie-modal');
    movieModal.innerHTML = `
    <button type="button" class="movie-modal-close">X</button>
    <div class="movie-modal-backdrop" aria-label="${movie.title} movie backdrop">
      <svg class ="ux-shape-divider" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path class="ux-shape-fill dark" d="M0 0C0 0 200 50 500 50C800 50 1000 0 1000 0V101H0V1V0Z"></path>
                </svg>
    </div>
    <section class="movie-modal-title-container">
        <h3 class="movie-modal-title">${movie.title}</h3>
    </section>
    <section class="rating-container">
        <div class="rating-group">
            <p class="star-icon">\u{2B50}\u{FE0F}</p> <!-- todo replace with star icon -->
            <p class="movie-modal-rating">${movie.vote_average}/10</p> 
            <p class="vote-count">(${movie.vote_count} votes)</p> 
        </div>
        <button type="button" class="love-button">\u{2764}\u{FE0F}</button> 
    </section>
    <section class="information-container">
        <ul class="movie-genres">
            ${movie.genres.map((genre)=>`<li>${genre}</li>`).join('')}
        </ul>
        <p class="movie-modal-overview">${movie.overview}</p>
        <p class="movie-modal-release-date">${movie.release_date}</p>
        
        <div class="movie-modal-links">
            <h4>Links</h4>
            <ul>
                <li><a href="#">IMDb</a></li>
                <li><a href="#">Rotten Tomatoes</a></li>
            </ul>
        
            <h4>Watch on</h4>
            <ul class="movie-modal-links">
                <li><a href="#">Netflix</a></li>
                <li><a href="#">Amazon Prime</a></li>
            </ul>
        </div>
        
        <section class="actors-section">
            <ol>
                ${movie.cast ? movie.cast.map((actor)=>`
                        <li class="actor-list-item">
                            <img class="actor-image" src="${actor.profile_path}" alt="${actor.name}">
                            <span>${actor.name}</span>
                        </li>
                    `).join('') : '<li>No cast information available</li>'}
            </ol>
        </section>
    </section>
    `;
    document.body.appendChild(movieModal);
    const closeButton = movieModal.querySelector('.movie-modal-close');
    if (closeButton) closeButton.addEventListener('click', ()=>{
        movieModal.remove();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"amG76"}]},["lI3Wn","gfLib"], "gfLib", "parcelRequire94c2")

//# sourceMappingURL=index.53eface4.js.map
