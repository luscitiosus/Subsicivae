const V='subsicivae-v33',F=['./','index.html','admin.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET')return;const u=new URL(q.url);if(u.origin!==location.origin)return;
const net=fetch(q).then(r=>{if(r.ok){const c=r.clone();caches.open(V).then(x=>x.put(q,c))}return r});
if(/\.json$/.test(u.pathname)){e.respondWith(Promise.race([net,new Promise((_,j)=>setTimeout(j,4000))]).catch(()=>caches.match(q).then(r=>r||net)));return}
e.respondWith(caches.match(q).then(r=>{if(r){net.catch(()=>{});return r}return net.catch(()=>caches.match('index.html'))}))});
