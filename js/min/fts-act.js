"use strict";window.onload=function(){var e=document.querySelector("body"),t=document.querySelector(".theme-btn"),r=document.querySelector(".menu-btn"),o=document.querySelector(".menu-box"),l=document.querySelector(".menu-list"),n=document.querySelectorAll(".paty-add"),s=document.querySelectorAll(".plus-bt"),i=document.querySelectorAll(".more-bt"),a=document.querySelectorAll(".paty-text"),c=document.querySelectorAll(".next-box"),u=document.querySelectorAll(".crs-more span"),d=document.querySelectorAll(".crs-graphs"),m=(document.querySelectorAll(".teammate"),1),f=1,h=localStorage.getItem("theme");null==localStorage.getItem("theme","dark-theme")&&(localStorage.setItem("theme","dark-theme"),e.classList.add("dark-theme")),"light-theme"==h?e.classList.add(""+h):"dark-theme"==h&&e.classList.add(""+h),t.addEventListener("click",function(){e.classList.contains("dark-theme")?(e.classList.add("light-theme"),e.classList.remove("dark-theme"),localStorage.setItem("theme","light-theme")):e.classList.contains("light-theme")&&(e.classList.add("dark-theme"),e.classList.remove("light-theme"),localStorage.setItem("theme","dark-theme"))}),r.addEventListener("click",function(){o.classList.toggle("focused"),r.classList.toggle("mbt-focus"),t.classList.toggle("tbt-anim"),e.style.overflow="hidden"===e.style.overflow?"":"hidden"}),l.addEventListener("click",function(){o.classList.remove("focused"),r.classList.remove("mbt-focus"),t.classList.remove("tbt-anim"),e.style.overflow="hidden"===e.style.overflow?"":"hidden"});for(var g=document.querySelectorAll(".menu-list li"),v=document.querySelectorAll(".box-scroll"),y=function(e){g[e].addEventListener("click",function(){for(var t=g[e].getAttribute("value"),r=[],o=0;o<v.length;o++)r.push(v[o]);var l=r[e].getAttribute("id");if(t+(e+1)==l){var n=r[e].offsetTop;L(n,1e3)}})},p=0;p<g.length;p++)y(p);var L=function(e,t){var r=document.scrollingElement||document.documentElement,o=r.scrollTop,l=e-o,n=performance.now();!function s(){var i,a,c,u=performance.now()-n;r.scrollTop=parseInt((i=u,a=o,c=l,(i/=t/2)<1?c/2*i*i+a:-c/2*(--i*(i-2)-1)+a)),u<t?requestAnimationFrame(s):r.scrollTop=e}()},S=!0,b=!1,q=void 0;try{for(var x,A=n[Symbol.iterator]();!(S=(x=A.next()).done);S=!0){x.value.setAttribute("id","tag"+m);m++}}catch(e){b=!0,q=e}finally{try{!S&&A.return&&A.return()}finally{if(b)throw q}}var k=!0,w=!1,E=void 0;try{for(var T,H=s[Symbol.iterator]();!(k=(T=H.next()).done);k=!0){T.value.setAttribute("data-id","tag"+f);f++}}catch(e){w=!0,E=e}finally{try{!k&&H.return&&H.return()}finally{if(w)throw E}}var I=function(e){e.addEventListener("click",function(t){t.preventDefault(),e.classList.toggle("pressed-plus");for(var r=e.getAttribute("data-id"),o=[],l=0;l<n.length;l++){var s=n[l].getAttribute("id");o.push(s),r==o[l]&&n[l].classList.toggle("action")}})},C=!0,D=!1,F=void 0;try{for(var Y,j=s[Symbol.iterator]();!(C=(Y=j.next()).done);C=!0){I(Y.value)}}catch(e){D=!0,F=e}finally{try{!C&&j.return&&j.return()}finally{if(D)throw F}}for(var z=function(e){for(var t=a[e].offsetHeight,r=a[e].children,o=[],l=0;l<r.length;l++){var n=r[l].offsetHeight;o.push(n)}for(var s=o.reduce(function(e,t){return e+t}),c=function(r){t<s&&e==r?i[r].onclick=function(){i[r].classList.toggle("pressed-more");var o=getComputedStyle(a[e]).height;if(t+"px"==o)a[e].style.height=s+"px";else if(t+"px"<o)a[e].style.height=t+"px"}:s<=t&&e==r&&(i[r].style.display="none")},u=0;u<i.length;u++)c(u)},B=0;B<a.length;B++)z(B);var G=function(e){for(var t=d[e].offsetHeight,r=d[e].children,o=[],l=0;l<r.length;l++){var n=r[l].offsetHeight;o.push(n)}for(var s=o.reduce(function(e,t){return e+t}),i=function(r){t<s&&e==r?u[r].onclick=function(){u[r].classList.toggle("pressed-more");var o=getComputedStyle(d[e]).height;if(t+"px"==o)d[e].style.maxHeight=s+"px";else if(t+"px"<o)d[e].style.maxHeight=t+"px"}:s<=t&&e==r&&(u[r].style.display="none")},a=0;a<u.length;a++)i(a)};for(B=0;B<d.length;B++)G(B);for(var J=function(e){c[e].querySelector(".next-btn").addEventListener("click",function(){c[e].classList.toggle("show-info")}),c[e].addEventListener("mouseleave",function(){c[e].classList.remove("show-info")})},K=0;K<c.length;K++)J(K);var M=document.querySelector("footer span"),N=(new Date).getFullYear();M.innerText+=" "+N+" All rights reserved";var O=document.querySelector("#preloader"),P=document.querySelectorAll('img[alt="preload"]');setTimeout(function(){if(!O.classList.contains(".done")){O.classList.add("done"),e.classList.remove("hidden");for(var t=0;t<P.length;t++)P[t].remove(),Q()}},1e3);var Q=function(){setTimeout(function(){O.remove()},1e3)}};