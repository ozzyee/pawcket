if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>n(e,i),r={module:{uri:i},exports:t,require:o};s[i]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-62f137f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/399-e30ec68c202f6f81.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/477-b2df9598dfd387d6.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/662-115d256806fc4d28.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/675-a669fbcb78ae8325.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/7112840a-54c425d7247ec6ed.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/758-82f86eb9cbc641d5.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/75fc9c18-4d2f0a9f494a9dad.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/850-454ddac026800086.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/8d18139f-e30c8d98a6744756.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/main-16ad8796b770d2ea.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/pages/_app-2831808c1244c4ca.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/pages/_error-2f883067a14f4c4a.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/pages/create-pet-99421720586b8168.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/pages/create-user-bc86673f8869dab4.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/pages/index-2ff336070fb97ab5.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/pages/login-513d5c23c885ad55.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/pages/pet-profile-a54a12d0adbfed54.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/pages/sign-up-f8085346e1d4e930.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/pages/user-profile-e3cf8a725ca8619c.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/pages/vets-3012c01f3d2aab62.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/chunks/webpack-1dab5e2ba591b293.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/dWGGYaIDjFoUE05clRXDn/_buildManifest.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/dWGGYaIDjFoUE05clRXDn/_middlewareManifest.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/_next/static/dWGGYaIDjFoUE05clRXDn/_ssgManifest.js",revision:"dWGGYaIDjFoUE05clRXDn"},{url:"/back-arrow-icon.svg",revision:"67391f1927f00b5378aefdb717111025"},{url:"/background-paws-1125x1218.svg",revision:"739f266b05fd9d59a64b6fca78bc79b0"},{url:"/background-paws.svg",revision:"0b7d4c622f58e778de9061490d5164b0"},{url:"/circle.svg",revision:"e5c4a9b7cc68d59677c63a1d29dbb9dd"},{url:"/circle/user-circle.svg",revision:"6571b0c9f7390d73ff6550d0d8743c78"},{url:"/circle/vet-circle.svg",revision:"496739422945a59d5ba7ae36a557d33f"},{url:"/download.png",revision:"72de170c9295f625751b955badedb5d0"},{url:"/dummy-logo.svg",revision:"89e40bf90517f2d8ead882156d02d3a8"},{url:"/dummy/freddie.jpg",revision:"90cbdb50fe9f15d47722e37b19284890"},{url:"/dummy/tony.jpg",revision:"5b1377dd9da16651bcac5ed7666480de"},{url:"/facebook-icon.svg",revision:"992008adeabaaa58f79e03ee3bad2085"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/frame.svg",revision:"163e4208bd06b7734f24bca68e6ba0f4"},{url:"/google-icon.svg",revision:"45aebcf899b73c299419c150cf8a4edb"},{url:"/icon-192x192.png",revision:"9cc8a296f423b488e4a20759557d955f"},{url:"/icon-256x256.png",revision:"acd50c40a9dfbf769b510b7011094307"},{url:"/icon-384x384.png",revision:"86cef3b6627a9e12318426f720a9c6c3"},{url:"/icon-512x512.png",revision:"b39ac25657e5102f9acbd0f7c96c6328"},{url:"/manifest.json",revision:"fb4da34d35d4c1ec66653cf7c49426b8"},{url:"/placeholder.png",revision:"d34c90903eec3baabcf671831568b895"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/vet-icon-nav.svg",revision:"2e3b7efcbab72ac8116a611e9688d560"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
