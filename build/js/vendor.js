!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c,d){if(c){var e=document.createDocumentFragment(),f=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");f&&b.setAttribute("viewBox",f);for(var g=document.importNode?document.importNode(c,!0):c.cloneNode(!0),h=document.createElementNS(b.namespaceURI||"http://www.w3.org/2000/svg","g");g.childNodes.length;)h.appendChild(g.firstChild);if(d)for(var i=0;d.attributes.length>i;i++){var j=d.attributes[i];"xlink:href"!==j.name&&"href"!==j.name&&h.setAttribute(j.name,j.value)}e.appendChild(h),a.appendChild(e)}}function b(b,c){b.onreadystatechange=function(){if(4===b.readyState){var d=b._cachedDocument;d||(d=b._cachedDocument=document.implementation.createHTMLDocument(""),d.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(e){var f=b._cachedTarget[e.id];f||(f=b._cachedTarget[e.id]=d.getElementById(e.id)),a(e.parent,e.svg,f,c)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i);if(j){var k=h.getAttribute("xlink:href")||h.getAttribute("href");if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s,h)}else a(i,j,document.getElementById(r),h)}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});

//# sourceMappingURL=vendor.js.map
