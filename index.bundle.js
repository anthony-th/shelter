(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var s=n.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=document.createElement("header");t.classList.add("header");const n=document.createElement("div");n.classList.add("header__container");const s=document.createElement("a");s.classList.add("logo"),s.href="#";const a=document.createElement("h1");a.classList.add("logo__title"),a.textContent="Cozy House";const c=document.createElement("p");c.classList.add("logo__subtitle"),c.textContent="Shelter for pets in Boston";const o=document.createElement("nav");o.classList.add("nav");const d=document.createElement("ul");d.classList.add("nav__list");const i=document.createElement("li");i.classList.add("nav__item");const l=document.createElement("a");l.textContent="About the shelter",l.classList.add("links","active-nav");const m=document.createElement("li");m.classList.add("nav__item");const r=document.createElement("a");r.textContent="Our pets",r.href="./pets.html",r.classList.add("links");const u=document.createElement("li");u.classList.add("nav__item");const p=document.createElement("a");p.textContent="Help the shelter",p.href="#help-shelter",p.classList.add("links");const L=document.createElement("li");L.classList.add("nav__item");const h=document.createElement("a");h.textContent="Contacts",h.href="#contacts",h.classList.add("links");const g=document.createElement("div");g.classList.add("burger-menu"),g.style.cursor="pointer";const E=document.createElement("hr");E.classList.add("burger-line");const b=document.createElement("hr");b.classList.add("burger-line");const f=document.createElement("hr");f.classList.add("burger-line");const v=document.createElement("div");function y(){g.classList.toggle("rotate"),d.classList.toggle("active-menu"),document.body.classList.toggle("overflow-hidden"),v.classList.toggle("shadow-open")}v.classList.add("shadow"),t.append(n),n.append(s,o),s.append(a,c),o.append(d,g,v),g.append(E,b,f),d.append(i,m,u,L),i.append(l),m.append(r),u.append(p),L.append(h),g.onclick=y,l.onclick=y,r.onclick=y,p.onclick=y,h.onclick=y,v.onclick=y;const w=e.p+"images/start-screen-puppy.webp",x=document.createElement("section");x.classList.add("not-only-block");const _=document.createElement("div");_.classList.add("not-only-container");const C=document.createElement("div");C.classList.add("not-only-textblock");const k=document.createElement("h2");k.classList.add("textblock__title"),k.textContent="Not only people need a house";const M=document.createElement("p");M.classList.add("textblock__description"),M.textContent="We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!";const T=document.createElement("a");T.classList.add("textblock__button"),T.textContent="Make a friend",T.href="#friends";const H=document.createElement("img");H.classList.add("not-only-pet"),H.src=w,x.append(_),_.append(C,H),C.append(k,M,T);const S=e.p+"images/about-the-shelter.webp",A=document.createElement("section");A.classList.add("about");const $=document.createElement("div");$.classList.add("about__container");const D=document.createElement("img");D.classList.add("about__img"),D.alt="",D.src=S;const B=document.createElement("div");B.classList.add("about__text-block");const P=document.createElement("h2");P.classList.add("about__title"),P.innerHTML="About the shelter<br>“Cozy House”";const j=document.createElement("p");j.classList.add("about__text"),j.textContent="Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.";const z=document.createElement("p");z.classList.add("about__text"),z.textContent="We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.",A.append($),$.append(D,B),B.append(P,j,z);const N=e.p+"images/arrow.svg",W=(e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p+"images/pets.json"),F=document.createElement("section");F.classList.add("our-friends");const I=document.createElement("div");I.classList.add("our-friends-container");const O=document.createElement("h2");O.classList.add("our-friends-title"),O.id="friends",O.innerHTML="Our friends who<br>are looking for a house";const q=document.createElement("div");q.classList.add("our-friends-slider");const G=document.createElement("a");G.classList.add("prev-btn");const R=document.createElement("img");R.classList.add("prev-img"),R.src=N;const V=document.createElement("div");V.classList.add("cards");const Y=document.createElement("a");Y.classList.add("next-btn");const J=document.createElement("img");J.classList.add("next-img"),J.src=N;const K=document.createElement("a");let Q;function U(){const e=[...new Set(Q.map((e=>e.name)))],t=[];for(;t.length<3;){const n=e[Math.floor(Math.random()*e.length)],s=Q.find((e=>e.name===n));t.includes(s)||t.push(s)}V.innerHTML="",t.forEach((e=>{const t=X(e);V.append(t)}))}function X(e){const t=document.createElement("div");t.classList.add("card"),t.addEventListener("click",(()=>{!function(e){const t=document.createElement("div");t.classList.add("modal-shadow");const n=document.createElement("div");n.classList.add("modal");const s=document.createElement("img");s.classList.add("modal-img"),s.src=e.img;const a=document.createElement("button");a.classList.add("modal-cancel");const c=document.createElement("img");c.classList.add("modal-svg"),c.src="./images/cancel.svg";const o=document.createElement("div");o.classList.add("modal-block");const d=document.createElement("h2");d.classList.add("modal-title"),d.textContent=e.name;const i=document.createElement("h3");i.classList.add("modal-subtitle"),i.textContent=`${e.type} - ${e.breed}`;const l=document.createElement("p");l.classList.add("modal-description"),l.textContent=e.description;const m=document.createElement("ul");m.classList.add("modal-text-block");const r=document.createElement("li");r.classList.add("modal-info"),r.innerHTML=`<b>Age:</b> ${e.age}`;const u=document.createElement("li");u.classList.add("modal-info"),u.innerHTML=`<b>Inoculations:</b> ${e.inoculations}`;const p=document.createElement("li");p.classList.add("modal-info"),p.innerHTML=`<b>Diseases:</b> ${e.diseases}`;const L=document.createElement("li");function h(){n.remove(),t.remove()}L.classList.add("modal-info"),L.innerHTML=`<b>Parasites:</b> ${e.parasites}`,m.append(r,u,p,L),o.append(d,i,l,m),a.append(c),n.append(s,a,o),I.append(n),document.body.append(t),a.onclick=h,t.onclick=h}(e)}));const n=document.createElement("img");n.classList.add("card__img"),n.src=e.img,n.alt="";const s=document.createElement("h3");s.classList.add("card__subtitle"),s.textContent=e.name;const a=document.createElement("button");return a.classList.add("card__btn"),a.textContent="Learn more",t.append(n,s,a),t}K.classList.add("our-friends-btn"),K.textContent="Get to know the rest",K.href="./pets.html",async function(){try{const e=await fetch(W);Q=await e.json(),function(){Q.sort(((e,t)=>e.name.localeCompare(t.name)));const e=[...new Set(Q.map((e=>e.name)))],t=[];for(;t.length<3;){const n=e[Math.floor(Math.random()*e.length)],s=Q.find((e=>e.name===n));t.includes(s)||t.push(s)}t.forEach((e=>{const t=X(e);V.append(t)}))}()}catch(e){console.error(e)}}(),Y.onclick=U,G.onclick=U,F.append(I),I.append(O,q,K),q.append(G,V,Y),G.append(R),Y.append(J),I.append(K);const Z=e.p+"images/icon-pet-food.svg",ee=e.p+"images/icon-transportation.svg",te=e.p+"images/icon-toys.svg",ne=e.p+"images/icon-bowls-and-cups.svg",se=e.p+"images/icon-shampoos.svg",ae=e.p+"images/icon-vitamins.svg",ce=e.p+"images/icon-medicines.svg",oe=e.p+"images/icon-collars-leashes.svg",de=e.p+"images/icon-sleeping-area.svg",ie=document.createElement("section");ie.classList.add("how-you");const le=document.createElement("div");le.classList.add("how-you-container");const me=document.createElement("h2");me.classList.add("how-you-title"),me.id="help-shelter",me.innerHTML="How you can help<br>our shelter";const re=document.createElement("div");re.classList.add("how-you-icons");const ue=document.createElement("div");ue.classList.add("icon");const pe=document.createElement("img");pe.classList.add("icon-img"),pe.src=Z,pe.alt="";const Le=document.createElement("h3");Le.classList.add("icon-title"),Le.textContent="Pet food";const he=document.createElement("div");he.classList.add("icon");const ge=document.createElement("img");ge.classList.add("icon-img"),ge.src=ee,ge.alt="";const Ee=document.createElement("h3");Ee.classList.add("icon-title"),Ee.textContent="Transportation";const be=document.createElement("div");be.classList.add("icon");const fe=document.createElement("img");fe.classList.add("icon-img"),fe.src=te,fe.alt="";const ve=document.createElement("h3");ve.classList.add("icon-title"),ve.textContent="Toys";const ye=document.createElement("div");ye.classList.add("icon");const we=document.createElement("img");we.classList.add("icon-img"),we.src=ne,we.alt="";const xe=document.createElement("h3");xe.classList.add("icon-title"),xe.textContent="Bowls and cups";const _e=document.createElement("div");_e.classList.add("icon");const Ce=document.createElement("img");Ce.classList.add("icon-img"),Ce.src=se,Ce.alt="";const ke=document.createElement("h3");ke.classList.add("icon-title"),ke.textContent="Shampoos";const Me=document.createElement("div");Me.classList.add("icon");const Te=document.createElement("img");Te.classList.add("icon-img"),Te.src=ae,Te.alt="";const He=document.createElement("h3");He.classList.add("icon-title"),He.textContent="Vitamins";const Se=document.createElement("div");Se.classList.add("icon");const Ae=document.createElement("img");Ae.classList.add("icon-img"),Ae.src=ce,Ae.alt="";const $e=document.createElement("h3");$e.classList.add("icon-title"),$e.textContent="Medicines";const De=document.createElement("div");De.classList.add("icon");const Be=document.createElement("img");Be.classList.add("icon-img"),Be.src=oe,Be.alt="";const Pe=document.createElement("h3");Pe.classList.add("icon-title"),Pe.textContent="Collars / leashes";const je=document.createElement("div");je.classList.add("icon");const ze=document.createElement("img");ze.classList.add("icon-img"),ze.src=de,ze.alt="";const Ne=document.createElement("h3");Ne.classList.add("icon-title"),Ne.textContent="Sleeping areas",ie.append(le),le.append(me,re),re.append(ue,he,be,ye,_e,Me,Se,De,je),ue.append(pe,Le),he.append(ge,Ee),be.append(fe,ve),ye.append(we,xe),_e.append(Ce,ke),Me.append(Te,He),Se.append(Ae,$e),De.append(Be,Pe),je.append(ze,Ne);const We=e.p+"images/youCan.webp",Fe=e.p+"images/credit-card.svg",Ie=document.createElement("section");Ie.classList.add("you-can");const Oe=document.createElement("div");Oe.classList.add("you-can-container");const qe=document.createElement("img");qe.classList.add("you-can-img"),qe.src=We;const Ge=document.createElement("div");Ge.classList.add("you-can-block");const Re=document.createElement("h2");Re.classList.add("you-can-title"),Re.innerHTML="You can also<br> make a donation";const Ve=document.createElement("h3");Ve.classList.add("you-can-subtitle"),Ve.textContent="Name of the bank / Type of bank account";const Ye=document.createElement("a");Ye.classList.add("you-can-card"),Ye.href="#";const Je=document.createElement("img");Je.classList.add("you-can-card-img"),Je.src=Fe;const Ke=document.createElement("h4");Ke.classList.add("you-can-card-title"),Ke.innerHTML="8380&nbsp;2880&nbsp;8028&nbsp;8791&nbsp;7435";const Qe=document.createElement("p");Qe.classList.add("you-can-card-text"),Qe.textContent="Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.",Ie.append(Oe),Oe.append(qe,Ge),Ge.append(Re,Ve,Ye,Qe),Ye.append(Je,Ke);const Ue=document.createElement("main");Ue.classList.add("main"),Ue.append(x,A,F,ie,Ie);const Xe=e.p+"images/mail.svg",Ze=e.p+"images/phone.svg",et=e.p+"images/pin.svg",tt=e.p+"images/footer-puppy.webp",nt=document.createElement("footer");nt.classList.add("footer");const st=document.createElement("div");st.classList.add("footer-container");const at=document.createElement("div");at.classList.add("contacts"),at.id="contacts";const ct=document.createElement("h3");ct.classList.add("contacts-title"),ct.innerHTML="For&nbsp;questions and suggestions";const ot=document.createElement("a");ot.classList.add("mail"),ot.href="mailto:mail@mail.com";const dt=document.createElement("img");dt.classList.add("mail-img"),dt.src=Xe;const it=document.createElement("h4");it.classList.add("mail-text"),it.textContent="email@shelter.com";const lt=document.createElement("a");lt.classList.add("phone"),lt.href="tel:+136745677554";const mt=document.createElement("img");mt.classList.add("phone-img"),mt.src=Ze;const rt=document.createElement("p");rt.classList.add("phone-text"),rt.textContent="+13 674 567 75 54";const ut=document.createElement("div");ut.classList.add("locations");const pt=document.createElement("h3");pt.classList.add("locations-title"),pt.innerHTML="We&nbsp;are&nbsp;waiting for your&nbsp;visit";const Lt=document.createElement("a");Lt.classList.add("location-boston"),Lt.href="https://www.google.com/maps/place/1+Central+St,+Boston,+MA+02109,+%D0%A1%D0%A8%D0%90/@42.3585558,-71.056915,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370868bc2ce7b:0x82fa7db94f5fea9e!8m2!3d42.3585519!4d-71.0547263",Lt.target="_blank";const ht=document.createElement("img");ht.classList.add("location-boston-img"),ht.src=et;const gt=document.createElement("p");gt.classList.add("location-boston-text"),gt.textContent="1 Central Street, Boston (entrance from the store)";const Et=document.createElement("a");Et.classList.add("location-london"),Et.href="https://www.google.com/maps/place/18+South+Rd,+Londonderry,+NH+03053,+%D0%A1%D0%A8%D0%90/@42.8246256,-71.364361,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3ad7442d3b7b7:0x5550ec16f1a4554d!8m2!3d42.8246217!4d-71.3621723",Et.target="_blank";const bt=document.createElement("img");bt.classList.add("location-london-img"),bt.src=et;const ft=document.createElement("p");ft.classList.add("location-london-text"),ft.textContent="18 South Park, London";const vt=document.createElement("img");vt.classList.add("footer-img"),vt.src=tt,nt.append(st),st.append(at,ut,vt),at.append(ct,ot,lt,lt),ot.append(dt,it),lt.append(mt,rt),ut.append(pt,Lt,Et),Lt.append(ht,gt),Et.append(bt,ft),document.body.append(t,Ue,nt)})();
//# sourceMappingURL=index.bundle.js.map