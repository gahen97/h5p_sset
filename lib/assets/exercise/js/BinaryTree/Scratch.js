//Scratch:

//plumb
(function(){"undefined"==typeof Math.sgn&&(Math.sgn=function(a){return 0==a?0:a>0?1:-1});var a={subtract:function(a,b){return{x:a.x-b.x,y:a.y-b.y}},dotProduct:function(a,b){return a.x*b.x+a.y*b.y},square:function(a){return Math.sqrt(a.x*a.x+a.y*a.y)},scale:function(a,b){return{x:a.x*b,y:a.y*b}}},b=64,c=Math.pow(2,-b-1),d=function(b,c){for(var d=[],e=f(b,c),h=c.length-1,i=2*h-1,j=g(e,i,d,0),k=a.subtract(b,c[0]),m=a.square(k),n=0,o=0;j>o;o++){k=a.subtract(b,l(c,h,d[o],null,null));var p=a.square(k);m>p&&(m=p,n=d[o])}return k=a.subtract(b,c[h]),p=a.square(k),m>p&&(m=p,n=1),{location:n,distance:m}},e=function(a,b){var c=d(a,b);return{point:l(b,b.length-1,c.location,null,null),location:c.location}},f=function(b,c){for(var d=c.length-1,e=2*d-1,f=[],g=[],h=[],i=[],k=[[1,.6,.3,.1],[.4,.6,.6,.4],[.1,.3,.6,1]],l=0;d>=l;l++)f[l]=a.subtract(c[l],b);for(var l=0;d-1>=l;l++)g[l]=a.subtract(c[l+1],c[l]),g[l]=a.scale(g[l],3);for(var m=0;d-1>=m;m++)for(var n=0;d>=n;n++)h[m]||(h[m]=[]),h[m][n]=a.dotProduct(g[m],f[n]);for(l=0;e>=l;l++)i[l]||(i[l]=[]),i[l].y=0,i[l].x=parseFloat(l)/e;for(var o=d,p=d-1,q=0;o+p>=q;q++){var r=Math.max(0,q-p),s=Math.min(q,o);for(l=r;s>=l;l++)j=q-l,i[l+j].y+=h[j][l]*k[j][l]}return i},g=function(a,c,d,e){var f,j,m=[],n=[],o=[],p=[];switch(h(a,c)){case 0:return 0;case 1:if(e>=b)return d[0]=(a[0].x+a[c].x)/2,1;if(i(a,c))return d[0]=k(a,c),1}l(a,c,.5,m,n),f=g(m,c,o,e+1),j=g(n,c,p,e+1);for(var q=0;f>q;q++)d[q]=o[q];for(var q=0;j>q;q++)d[q+f]=p[q];return f+j},h=function(a,b){var c,d,e=0;c=d=Math.sgn(a[0].y);for(var f=1;b>=f;f++)c=Math.sgn(a[f].y),c!=d&&e++,d=c;return e},i=function(a,b){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;i=a[0].y-a[b].y,j=a[b].x-a[0].x,k=a[0].x*a[b].y-a[b].x*a[0].y;for(var t=max_distance_below=0,u=1;b>u;u++){var v=i*a[u].x+j*a[u].y+k;v>t?t=v:max_distance_below>v&&(max_distance_below=v)}return n=0,o=1,p=0,q=i,r=j,s=k-t,l=n*r-q*o,m=1/l,e=(o*s-r*p)*m,q=i,r=j,s=k-max_distance_below,l=n*r-q*o,m=1/l,f=(o*s-r*p)*m,g=Math.min(e,f),h=Math.max(e,f),d=h-g,c>d?1:0},k=function(a,b){var c=1,d=0,e=a[b].x-a[0].x,f=a[b].y-a[0].y,g=a[0].x-0,h=a[0].y-0,i=e*d-f*c,j=1/i,k=(e*h-f*g)*j;return 0+c*k},l=function(a,b,c,d,e){for(var f=[[]],g=0;b>=g;g++)f[0][g]=a[g];for(var h=1;b>=h;h++)for(var g=0;b-h>=g;g++)f[h]||(f[h]=[]),f[h][g]||(f[h][g]={}),f[h][g].x=(1-c)*f[h-1][g].x+c*f[h-1][g+1].x,f[h][g].y=(1-c)*f[h-1][g].y+c*f[h-1][g+1].y;if(null!=d)for(g=0;b>=g;g++)d[g]=f[g][0];if(null!=e)for(g=0;b>=g;g++)e[g]=f[b-g][g];return f[b][0]},m={},n=function(a){var b=m[a];if(!b){b=[];var c=function(){return function(b){return Math.pow(b,a)}},d=function(){return function(b){return Math.pow(1-b,a)}},e=function(a){return function(){return a}},f=function(){return function(a){return a}},g=function(){return function(a){return 1-a}},h=function(a){return function(b){for(var c=1,d=0;d<a.length;d++)c*=a[d](b);return c}};b.push(new c);for(var i=1;a>i;i++){for(var j=[new e(a)],k=0;a-i>k;k++)j.push(new f);for(var k=0;i>k;k++)j.push(new g);b.push(new h(j))}b.push(new d),m[a]=b}return b},o=function(a,b){for(var c=n(a.length-1),d=0,e=0,f=0;f<a.length;f++)d+=a[f].x*c[f](b),e+=a[f].y*c[f](b);return{x:d,y:e}},p=function(a,b){return Math.sqrt(Math.pow(a.x-b.x,2)+Math.pow(a.y-b.y,2))},q=function(a){return a[0].x==a[1].x&&a[0].y==a[1].y},r=function(a,b,c){if(q(a))return{point:a[0],location:b};for(var d=o(a,b),e=0,f=b,g=c>0?1:-1,h=null;e<Math.abs(c);)f+=.005*g,h=o(a,f),e+=p(h,d),d=h;return{point:h,location:f}},s=function(a){if(q(a))return 0;for(var b=o(a,0),c=0,d=0,e=1,f=null;1>d;)d+=.005*e,f=o(a,d),c+=p(f,b),b=f;return c},t=function(a,b,c){return r(a,b,c).point},u=function(a,b,c){return r(a,b,c).location},v=function(a,b){var c=o(a,b),d=o(a.slice(0,a.length-1),b),e=d.y-c.y,f=d.x-c.x;return 0==e?1/0:Math.atan(e/f)},w=function(a,b,c){var d=r(a,b,c);return d.location>1&&(d.location=1),d.location<0&&(d.location=0),v(a,d.location)},x=function(a,b,c,d){d=null==d?0:d;var e=r(a,b,d),f=v(a,e.location),g=Math.atan(-1/f),h=c/2*Math.sin(g),i=c/2*Math.cos(g);return[{x:e.point.x+i,y:e.point.y+h},{x:e.point.x-i,y:e.point.y-h}]};this.jsBezier={distanceFromCurve:d,gradientAtPoint:v,gradientAtPointAlongCurveFrom:w,nearestPointOnCurve:e,pointOnCurve:o,pointAlongCurveFrom:t,perpendicularToCurveAt:x,locationAlongCurveFrom:u,getLength:s}}).call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.Biltong={},c=function(a){return"[object Array]"===Object.prototype.toString.call(a)},d=function(a,b,d){return a=c(a)?a:[a.x,a.y],b=c(b)?b:[b.x,b.y],d(a,b)},e=b.gradient=function(a,b){return d(a,b,function(a,b){return b[0]==a[0]?b[1]>a[1]?1/0:-1/0:b[1]==a[1]?b[0]>a[0]?0:-0:(b[1]-a[1])/(b[0]-a[0])})},f=(b.normal=function(a,b){return-1/e(a,b)},b.lineLength=function(a,b){return d(a,b,function(a,b){return Math.sqrt(Math.pow(b[1]-a[1],2)+Math.pow(b[0]-a[0],2))})},b.quadrant=function(a,b){return d(a,b,function(a,b){return b[0]>a[0]?b[1]>a[1]?2:1:b[0]==a[0]?b[1]>a[1]?2:1:b[1]>a[1]?3:4})}),g=(b.theta=function(a,b){return d(a,b,function(a,b){var c=e(a,b),d=Math.atan(c),g=f(a,b);return(4==g||3==g)&&(d+=Math.PI),0>d&&(d+=2*Math.PI),d})},b.intersects=function(a,b){var c=a.x,d=a.x+a.w,e=a.y,f=a.y+a.h,g=b.x,h=b.x+b.w,i=b.y,j=b.y+b.h;return g>=c&&d>=g&&i>=e&&f>=i||h>=c&&d>=h&&i>=e&&f>=i||g>=c&&d>=g&&j>=e&&f>=j||h>=c&&d>=g&&j>=e&&f>=j||c>=g&&h>=c&&e>=i&&j>=e||d>=g&&h>=d&&e>=i&&j>=e||c>=g&&h>=c&&f>=i&&j>=f||d>=g&&h>=c&&f>=i&&j>=f},b.encloses=function(a,b,c){var d=a.x,e=a.x+a.w,f=a.y,g=a.y+a.h,h=b.x,i=b.x+b.w,j=b.y,k=b.y+b.h,l=function(a,b,d,e){return c?b>=a&&d>=e:b>a&&d>e};return l(d,h,e,i)&&l(f,j,g,k)},[null,[1,-1],[1,1],[-1,1],[-1,-1]]),h=[null,[-1,-1],[-1,1],[1,1],[1,-1]];b.pointOnLine=function(a,b,c){var d=e(a,b),i=f(a,b),j=c>0?g[i]:h[i],k=Math.atan(d),l=Math.abs(c*Math.sin(k))*j[1],m=Math.abs(c*Math.cos(k))*j[0];return{x:a.x+m,y:a.y+l}},b.perpendicularLineTo=function(a,b,c){var d=e(a,b),f=Math.atan(-1/d),g=c/2*Math.sin(f),h=c/2*Math.cos(f);return[{x:b.x+h,y:b.y+g},{x:b.x-h,y:b.y-g}]}}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b={android:navigator.userAgent.toLowerCase().indexOf("android")>-1},c=function(a,b,c){c=c||a.parentNode;for(var d=c.querySelectorAll(b),e=0;e<d.length;e++)if(d[e]===a)return!0;return!1},d=function(a){return"string"==typeof a||a.constructor===String?document.getElementById(a):a},e=function(a){return a.srcElement||a.target},f=function(a,b,c,d){if(d){if("undefined"!=typeof a.path&&a.path.indexOf)return{path:a.path,end:a.path.indexOf(c)};var e={path:[],end:-1},f=function(a){e.path.push(a),a===c?e.end=e.path.length-1:null!=a.parentNode&&f(a.parentNode)};return f(b),e}return{path:[b],end:1}},g=function(a,b){for(var c=0,d=a.length;d>c&&a[c]!=b;c++);c<a.length&&a.splice(c,1)},h=1,i=function(a,b,c){var d=h++;return a.__ta=a.__ta||{},a.__ta[b]=a.__ta[b]||{},a.__ta[b][d]=c,c.__tauid=d,d},j=function(a,b,c){if(a.__ta&&a.__ta[b]&&delete a.__ta[b][c.__tauid],c.__taExtra){for(var d=0;d<c.__taExtra.length;d++)F(a,c.__taExtra[d][0],c.__taExtra[d][1]);c.__taExtra.length=0}c.__taUnstore&&c.__taUnstore()},k=function(a,b,d,g){if(null==a)return d;var h=a.split(","),i=function(g){i.__tauid=d.__tauid;var j=e(g),k=j,l=f(g,j,b,null!=a);if(-1!=l.end)for(var m=0;m<l.end;m++){k=l.path[m];for(var n=0;n<h.length;n++)c(k,h[n],b)&&d.apply(k,arguments)}};return l(d,g,i),i},l=function(a,b,c){a.__taExtra=a.__taExtra||[],a.__taExtra.push([b,c])},m=function(a,b,c,d){if(s&&u[b]){var e=k(d,a,c,u[b]);E(a,u[b],e,c)}"focus"===b&&null==a.getAttribute("tabindex")&&a.setAttribute("tabindex","1"),E(a,b,k(d,a,c,b),c)},n=function(a,b,c,d){if(null==a.__taSmartClicks){var f=function(b){a.__tad=y(b)},h=function(b){a.__tau=y(b)},i=function(b){if(a.__tad&&a.__tau&&a.__tad[0]===a.__tau[0]&&a.__tad[1]===a.__tau[1])for(var c=0;c<a.__taSmartClicks.length;c++)a.__taSmartClicks[c].apply(e(b),[b])};m(a,"mousedown",f,d),m(a,"mouseup",h,d),m(a,"click",i,d),a.__taSmartClicks=[]}a.__taSmartClicks.push(c),c.__taUnstore=function(){g(a.__taSmartClicks,c)}},o={tap:{touches:1,taps:1},dbltap:{touches:1,taps:2},contextmenu:{touches:2,taps:1}},p=function(a,b){return function(d,h,i,j){if("contextmenu"==h&&t)m(d,h,i,j);else{if(null==d.__taTapHandler){var k=d.__taTapHandler={tap:[],dbltap:[],contextmenu:[],down:!1,taps:0,downSelectors:[]},l=function(g){for(var h=e(g),i=f(g,h,d,null!=j),l=!1,m=0;m<i.end;m++){if(l)return;h=i.path[m];for(var n=0;n<k.downSelectors.length;n++)if(null==k.downSelectors[n]||c(h,k.downSelectors[n],d)){k.down=!0,setTimeout(p,a),setTimeout(q,b),l=!0;break}}},n=function(a){if(k.down){var b,g,h=e(a);k.taps++;var i=D(a);for(var j in o)if(o.hasOwnProperty(j)){var l=o[j];if(l.touches===i&&(1===l.taps||l.taps===k.taps))for(var m=0;m<k[j].length;m++){g=f(a,h,d,null!=k[j][m][1]);for(var n=0;n<g.end;n++)if(b=g.path[n],null==k[j][m][1]||c(b,k[j][m][1],d)){k[j][m][0].apply(b,[a]);break}}}}},p=function(){k.down=!1},q=function(){k.taps=0};m(d,"mousedown",l),m(d,"mouseup",n)}d.__taTapHandler.downSelectors.push(j),d.__taTapHandler[h].push([i,j]),i.__taUnstore=function(){g(d.__taTapHandler[h],i)}}}},q=function(a,b,c,d){for(var e in c.__tamee[a])c.__tamee[a].hasOwnProperty(e)&&c.__tamee[a][e].apply(d,[b])},r=function(){var a=[];return function(b,d,f,g){if(!b.__tamee){b.__tamee={over:!1,mouseenter:[],mouseexit:[]};var h=function(d){var f=e(d);(null==g&&f==b&&!b.__tamee.over||c(f,g,b)&&(null==f.__tamee||!f.__tamee.over))&&(q("mouseenter",d,b,f),f.__tamee=f.__tamee||{},f.__tamee.over=!0,a.push(f))},j=function(d){for(var f=e(d),g=0;g<a.length;g++)f!=a[g]||c(d.relatedTarget||d.toElement,"*",f)||(f.__tamee.over=!1,a.splice(g,1),q("mouseexit",d,b,f))};E(b,"mouseover",k(g,b,h,"mouseover"),h),E(b,"mouseout",k(g,b,j,"mouseout"),j)}f.__taUnstore=function(){delete b.__tamee[d][f.__tauid]},i(b,d,f),b.__tamee[d][f.__tauid]=f}},s="ontouchstart"in document.documentElement,t="onmousedown"in document.documentElement,u={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"},v=function(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=c.exec(b)&&(a=parseFloat(RegExp.$1))}return a}(),w=v>-1&&9>v,x=function(a,b){if(null==a)return[0,0];var c=C(a),d=B(c,0);return[d[b+"X"],d[b+"Y"]]},y=function(a){return null==a?[0,0]:w?[a.clientX+document.documentElement.scrollLeft,a.clientY+document.documentElement.scrollTop]:x(a,"page")},z=function(a){return x(a,"screen")},A=function(a){return x(a,"client")},B=function(a,b){return a.item?a.item(b):a[b]},C=function(a){return a.touches&&a.touches.length>0?a.touches:a.changedTouches&&a.changedTouches.length>0?a.changedTouches:a.targetTouches&&a.targetTouches.length>0?a.targetTouches:[a]},D=function(a){return C(a).length},E=function(a,b,c,d){if(i(a,b,c),d.__tauid=c.__tauid,a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent){var e=b+c.__tauid;a["e"+e]=c,a[e]=function(){a["e"+e]&&a["e"+e](window.event)},a.attachEvent("on"+b,a[e])}},F=function(a,b,c){null!=c&&G(a,function(){var e=d(this);if(j(e,b,c),null!=c.__tauid)if(e.removeEventListener)e.removeEventListener(b,c,!1),s&&u[b]&&e.removeEventListener(u[b],c,!1);else if(this.detachEvent){var f=b+c.__tauid;e[f]&&e.detachEvent("on"+b,e[f]),e[f]=null,e["e"+f]=null}c.__taTouchProxy&&F(a,c.__taTouchProxy[1],c.__taTouchProxy[0])})},G=function(a,b){if(null!=a){a="undefined"!=typeof Window&&"unknown"!=typeof a.top&&a==a.top?[a]:"string"!=typeof a&&null==a.tagName&&null!=a.length?a:"string"==typeof a?document.querySelectorAll(a):[a];for(var c=0;c<a.length;c++)b.apply(a[c])}};a.Mottle=function(a){a=a||{};var c=a.clickThreshold||250,e=a.dblClickThreshold||450,f=new r,g=new p(c,e),h=a.smartClicks,i=function(a,b,c,e){null!=c&&G(a,function(){var a=d(this);h&&"click"===b?n(a,b,c,e):"tap"===b||"dbltap"===b||"contextmenu"===b?g(a,b,c,e):"mouseenter"===b||"mouseexit"==b?f(a,b,c,e):m(a,b,c,e)})};this.remove=function(a){return G(a,function(){var a=d(this);if(a.__ta)for(var b in a.__ta)if(a.__ta.hasOwnProperty(b))for(var c in a.__ta[b])a.__ta[b].hasOwnProperty(c)&&F(a,b,a.__ta[b][c]);a.parentNode&&a.parentNode.removeChild(a)}),this},this.on=function(){var a=arguments[0],b=4==arguments.length?arguments[2]:null,c=arguments[1],d=arguments[arguments.length-1];return i(a,c,d,b),this},this.off=function(a,b,c){return F(a,b,c),this},this.trigger=function(a,c,e,f){var g=t&&("undefined"==typeof MouseEvent||null==e||e.constructor===MouseEvent),h=s&&!t&&u[c]?u[c]:c,i=!(s&&!t&&u[c]),j=y(e),k=z(e),l=A(e);return G(a,function(){var a,m=d(this);e=e||{screenX:k[0],screenY:k[1],clientX:l[0],clientY:l[1]};var n=function(a){f&&(a.payload=f)},o={TouchEvent:function(a){var b=document.createTouch(window,m,0,j[0],j[1],k[0],k[1],l[0],l[1],0,0,0,0),c=document.createTouchList(b),d=document.createTouchList(b),e=document.createTouchList(b);a.initTouchEvent(h,!0,!0,window,null,k[0],k[1],l[0],l[1],!1,!1,!1,!1,c,d,e,1,0)},MouseEvents:function(a){if(a.initMouseEvent(h,!0,!0,window,0,k[0],k[1],l[0],l[1],!1,!1,!1,!1,1,m),b.android){var c=document.createTouch(window,m,0,j[0],j[1],k[0],k[1],l[0],l[1],0,0,0,0);a.touches=a.targetTouches=a.changedTouches=document.createTouchList(c)}}};if(document.createEvent){var p=!i&&!g&&s&&u[c]&&!b.android,q=p?"TouchEvent":"MouseEvents";a=document.createEvent(q),o[q](a),n(a),m.dispatchEvent(a)}else document.createEventObject&&(a=document.createEventObject(),a.eventType=a.eventName=h,a.screenX=k[0],a.screenY=k[1],a.clientX=l[0],a.clientY=l[1],n(a),m.fireEvent("on"+h,a))}),this}},a.Mottle.consume=function(a,b){a.stopPropagation?a.stopPropagation():a.returnValue=!1,!b&&a.preventDefault&&a.preventDefault()},a.Mottle.pageLocation=y,a.Mottle.setForceTouchEvents=function(a){s=a},a.Mottle.setForceMouseEvents=function(a){t=a}}.call("undefined"==typeof window?this:window),function(){"use strict";var a=this,b=function(a,b,c){return-1===a.indexOf(b)?(c?a.unshift(b):a.push(b),!0):!1},c=function(a,b){var c=a.indexOf(b);-1!=c&&a.splice(c,1)},d=function(a,b){for(var c=[],d=0;d<a.length;d++)-1==b.indexOf(a[d])&&c.push(a[d]);return c},e=function(a){return null==a?!1:"string"==typeof a||a.constructor==String},f=function(a){var b=a.getBoundingClientRect(),c=document.body,d=document.documentElement,e=window.pageYOffset||d.scrollTop||c.scrollTop,f=window.pageXOffset||d.scrollLeft||c.scrollLeft,g=d.clientTop||c.clientTop||0,h=d.clientLeft||c.clientLeft||0,i=b.top+e-g,j=b.left+f-h;return{top:Math.round(i),left:Math.round(j)}},g=function(a,b,c){c=c||a.parentNode;for(var d=c.querySelectorAll(b),e=0;e<d.length;e++)if(d[e]===a)return!0;return!1},h=function(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=c.exec(b)&&(a=parseFloat(RegExp.$1))}return a}(),i=50,j=50,k=h>-1&&9>h,l=9==h,m=function(a){if(k)return[a.clientX+document.documentElement.scrollLeft,a.clientY+document.documentElement.scrollTop];var b=o(a),c=n(b,0);return l?[c.pageX||c.clientX,c.pageY||c.clientY]:[c.pageX,c.pageY]},n=function(a,b){return a.item?a.item(b):a[b]},o=function(a){return a.touches&&a.touches.length>0?a.touches:a.changedTouches&&a.changedTouches.length>0?a.changedTouches:a.targetTouches&&a.targetTouches.length>0?a.targetTouches:[a]},p={draggable:"katavorio-draggable",droppable:"katavorio-droppable",drag:"katavorio-drag",selected:"katavorio-drag-selected",active:"katavorio-drag-active",hover:"katavorio-drag-hover",noSelect:"katavorio-drag-no-select",ghostProxy:"katavorio-ghost-proxy"},q="katavorio-drag-scope",r=["stop","start","drag","drop","over","out","beforeStart"],s=function(){},t=function(){return!0},u=function(a,b,c){for(var d=0;d<a.length;d++)a[d]!=c&&b(a[d])},v=function(a,b,c,d){u(a,function(a){a.setActive(b),b&&a.updatePosition(),c&&a.setHover(d,b)})},w=function(a,b){if(null!=a){a=e(a)||null!=a.tagName||null==a.length?[a]:a;for(var c=0;c<a.length;c++)b.apply(a[c],[a[c]])}},x=function(a){a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.returnValue=!1},y="input,textarea,select,button,option",z=function(a,b,c){var d=a.srcElement||a.target;return!g(d,c.getInputFilterSelector(),b)},A=function(a,b,c,d){this.params=b||{},this.el=a,this.params.addClass(this.el,this._class),this.uuid=F();var e=!0;return this.setEnabled=function(a){e=a},this.isEnabled=function(){return e},this.toggleEnabled=function(){e=!e},this.setScope=function(a){this.scopes=a?a.split(/\s+/):[d]},this.addScope=function(a){var b={};w(this.scopes,function(a){b[a]=!0}),w(a?a.split(/\s+/):[],function(a){b[a]=!0}),this.scopes=[];for(var c in b)this.scopes.push(c)},this.removeScope=function(a){var b={};w(this.scopes,function(a){b[a]=!0}),w(a?a.split(/\s+/):[],function(a){delete b[a]}),this.scopes=[];for(var c in b)this.scopes.push(c)},this.toggleScope=function(a){var b={};w(this.scopes,function(a){b[a]=!0}),w(a?a.split(/\s+/):[],function(a){b[a]?delete b[a]:b[a]=!0}),this.scopes=[];for(var c in b)this.scopes.push(c)},this.setScope(b.scope),this.k=b.katavorio,b.katavorio},B=function(){return!0},C=function(){return!1},D=function(a,b,c){this._class=c.draggable;var d=A.apply(this,arguments);this.rightButtonCanDrag=this.params.rightButtonCanDrag;var h=[0,0],k=null,l=null,n=[0,0],o=!1,q=this.params.consumeStartEvent!==!1,r=this.el,s=this.params.clone,u=(this.params.scroll,b.multipleDrop!==!1),w=!1,y=b.ghostProxy===!0?B:b.ghostProxy&&"function"==typeof b.ghostProxy?b.ghostProxy:C,D=function(a){return a.cloneNode(!0)},E=b.snapThreshold||5,H=function(a,b,c,d,e){d=d||E,e=e||E;var f=Math.floor(a[0]/b),g=b*f,h=g+b,i=Math.abs(a[0]-g)<=d?g:Math.abs(h-a[0])<=d?h:a[0],j=Math.floor(a[1]/c),k=c*j,l=k+c,m=Math.abs(a[1]-k)<=e?k:Math.abs(l-a[1])<=e?l:a[1];return[i,m]};this.posses=[],this.posseRoles={},this.toGrid=function(a){return null==this.params.grid?a:H(a,this.params.grid[0],this.params.grid[1])},this.snap=function(a,b){if(null!=r){a=a||(this.params.grid?this.params.grid[0]:i),b=b||(this.params.grid?this.params.grid[1]:j);var c=this.params.getPosition(r);this.params.setPosition(r,H(c,a,b,a,b))}},this.setUseGhostProxy=function(a){y=a?B:C};var I,J=function(a){return b.allowNegative===!1?[Math.max(0,a[0]),Math.max(0,a[1])]:a},K=function(a){I="function"==typeof a?a:a?function(a){return J([Math.max(0,Math.min(Q.w-this.size[0],a[0])),Math.max(0,Math.min(Q.h-this.size[1],a[1]))])}.bind(this):function(a){return J(a)}}.bind(this);K("function"==typeof this.params.constrain?this.params.constrain:this.params.constrain||this.params.containment),this.setConstrain=function(a){K(a)};var L;this.setRevert=function(a){L=a};var M=function(a){return"function"==typeof a?(a._katavorioId=F(),a._katavorioId):a},N={},O=function(a){for(var b in N){var c=N[b],d=c[0](a);if(c[1]&&(d=!d),!d)return!1}return!0},P=this.setFilter=function(b,c){if(b){var d=M(b);N[d]=[function(c){var d,f=c.srcElement||c.target;return e(b)?d=g(f,b,a):"function"==typeof b&&(d=b(c,a)),d},c!==!1]}};this.addFilter=P,this.removeFilter=function(a){var b="function"==typeof a?a._katavorioId:a;delete N[b]},this.clearAllFilters=function(){N={}},this.canDrag=this.params.canDrag||t;var Q,R=[],S=[];this.downListener=function(a){var b=this.rightButtonCanDrag||3!==a.which&&2!==a.button;if(b&&this.isEnabled()&&this.canDrag()){var e=O(a)&&z(a,this.el,this.k);if(e){if(s){r=this.el.cloneNode(!0),r.setAttribute("id",null),r.style.position="absolute";var g=f(this.el);r.style.left=g.left+"px",r.style.top=g.top+"px",document.body.appendChild(r)}else r=this.el;q&&x(a),h=m(a),this.params.bind(document,"mousemove",this.moveListener),this.params.bind(document,"mouseup",this.upListener),d.markSelection(this),d.markPosses(this),this.params.addClass(document.body,c.noSelect),U("beforeStart",{el:this.el,pos:k,e:a,drag:this})}else this.params.consumeFilteredEvents&&x(a)}}.bind(this),this.moveListener=function(a){if(h){if(!o){var b=U("start",{el:this.el,pos:k,e:a,drag:this});if(b!==!1){if(!h)return;this.mark(!0),o=!0}}if(h){S.length=0;var c=m(a),e=c[0]-h[0],f=c[1]-h[1],g=this.params.ignoreZoom?1:d.getZoom();e/=g,f/=g,this.moveBy(e,f,a),d.updateSelection(e,f,this),d.updatePosses(e,f,this)}}}.bind(this),this.upListener=function(a){h&&(h=null,this.params.unbind(document,"mousemove",this.moveListener),this.params.unbind(document,"mouseup",this.upListener),this.params.removeClass(document.body,c.noSelect),this.unmark(a),d.unmarkSelection(this,a),d.unmarkPosses(this,a),this.stop(a),d.notifySelectionDragStop(this,a),d.notifyPosseDragStop(this,a),o=!1,s&&(r&&r.parentNode&&r.parentNode.removeChild(r),r=null),L&&L(this.el,this.params.getPosition(this.el))===!0&&(this.params.setPosition(this.el,k),U("revert",this.el)))}.bind(this),this.getFilters=function(){return N},this.abort=function(){null!=h&&this.upListener()},this.getDragElement=function(){return r||this.el};var T={start:[],drag:[],stop:[],over:[],out:[],beforeStart:[],revert:[]};b.events.start&&T.start.push(b.events.start),b.events.beforeStart&&T.beforeStart.push(b.events.beforeStart),b.events.stop&&T.stop.push(b.events.stop),b.events.drag&&T.drag.push(b.events.drag),b.events.revert&&T.revert.push(b.events.revert),this.on=function(a,b){T[a]&&T[a].push(b)},this.off=function(a,b){if(T[a]){for(var c=[],d=0;d<T[a].length;d++)T[a][d]!==b&&c.push(T[a][d]);T[a]=c}};var U=function(a,b){if(T[a])for(var c=0;c<T[a].length;c++)try{T[a][c](b)}catch(d){}};this.notifyStart=function(a){U("start",{el:this.el,pos:this.params.getPosition(r),e:a,drag:this})},this.stop=function(a,b){if(b||o){var c=[],e=d.getSelection(),f=this.params.getPosition(r);if(e.length>1)for(var g=0;g<e.length;g++){var h=this.params.getPosition(e[g].el);c.push([e[g].el,{left:h[0],top:h[1]},e[g]])}else c.push([r,{left:f[0],top:f[1]},this]);U("stop",{el:r,pos:V||f,finalPos:f,e:a,drag:this,selection:c})}},this.mark=function(a){k=this.params.getPosition(r),l=this.params.getPosition(r,!0),n=[l[0]-k[0],l[1]-k[1]],this.size=this.params.getSize(r),R=d.getMatchingDroppables(this),v(R,!0,!1,this),this.params.addClass(r,this.params.dragClass||c.drag);var b=this.params.getSize(r.parentNode);Q={w:b[0],h:b[1]},a&&d.notifySelectionDragStart(this)};var V;this.unmark=function(a,d){if(v(R,!1,!0,this),w&&y(this.el)?(V=[r.offsetLeft,r.offsetTop],this.el.parentNode.removeChild(r),r=this.el):V=null,this.params.removeClass(r,this.params.dragClass||c.drag),R.length=0,w=!1,!d){S.length>0&&V&&b.setPosition(this.el,V),S.sort(G);for(var e=0;e<S.length;e++){var f=S[e].drop(this,a);if(f===!0)break}}},this.moveBy=function(a,c,d){S.length=0;var e=this.toGrid([k[0]+a,k[1]+c]),f=I(e,r);if(y(this.el))if(e[0]!=f[0]||e[1]!=f[1]){if(!w){var g=D(this.el);b.addClass(g,p.ghostProxy),this.el.parentNode.appendChild(g),r=g,w=!0}f=e}else w&&(this.el.parentNode.removeChild(r),r=this.el,w=!1);var h={x:f[0],y:f[1],w:this.size[0],h:this.size[1]},i={x:h.x+n[0],y:h.y+n[1],w:h.w,h:h.h},j=null;this.params.setPosition(r,f);for(var l=0;l<R.length;l++){var m={x:R[l].pagePosition[0],y:R[l].pagePosition[1],w:R[l].size[0],h:R[l].size[1]};this.params.intersects(i,m)&&(u||null==j||j==R[l].el)&&R[l].canDrop(this)?(j||(j=R[l].el),S.push(R[l]),R[l].setHover(this,!0,d)):R[l].isHover()&&R[l].setHover(this,!1,d)}U("drag",{el:this.el,pos:f,e:d,drag:this})},this.destroy=function(){this.params.unbind(this.el,"mousedown",this.downListener),this.params.unbind(document,"mousemove",this.moveListener),this.params.unbind(document,"mouseup",this.upListener),this.downListener=null,this.upListener=null,this.moveListener=null},this.params.bind(this.el,"mousedown",this.downListener),this.params.handle?P(this.params.handle,!1):P(this.params.filter,this.params.filterExclude)},E=function(a,b,c){this._class=c.droppable,this.params=b||{},this.rank=b.rank||0,this._activeClass=this.params.activeClass||c.active,this._hoverClass=this.params.hoverClass||c.hover,A.apply(this,arguments);var d=!1;this.allowLoopback=this.params.allowLoopback!==!1,this.setActive=function(a){this.params[a?"addClass":"removeClass"](this.el,this._activeClass)},this.updatePosition=function(){this.position=this.params.getPosition(this.el),this.pagePosition=this.params.getPosition(this.el,!0),this.size=this.params.getSize(this.el)},this.canDrop=this.params.canDrop||function(){return!0},this.isHover=function(){return d},this.setHover=function(a,b,c){(b||null==this.el._katavorioDragHover||this.el._katavorioDragHover==a.el._katavorio)&&(this.params[b?"addClass":"removeClass"](this.el,this._hoverClass),this.el._katavorioDragHover=b?a.el._katavorio:null,d!==b&&this.params.events[b?"over":"out"]({el:this.el,e:c,drag:a,drop:this}),d=b)},this.drop=function(a,b){return this.params.events.drop({drag:a,e:b,drop:this})},this.destroy=function(){this._class=null,this._activeClass=null,this._hoverClass=null,d=null}},F=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=0|16*Math.random(),c="x"==a?b:8|3&b;return c.toString(16)})},G=function(a,b){return a.rank<b.rank?1:a.rank>b.rank?-1:0},H=function(a){return null==a?null:(a="string"==typeof a||a.constructor==String?document.getElementById(a):a,null==a?null:(a._katavorio=a._katavorio||F(),a))};a.Katavorio=function(a){var f=[],g={};this._dragsByScope={},this._dropsByScope={};var h=1,i=function(a,b){w(a,function(a){for(var c=0;c<a.scopes.length;c++)b[a.scopes[c]]=b[a.scopes[c]]||[],b[a.scopes[c]].push(a)})},j=function(b,c){var d=0;return w(b,function(b){for(var e=0;e<b.scopes.length;e++)if(c[b.scopes[e]]){var f=a.indexOf(c[b.scopes[e]],b);-1!=f&&(c[b.scopes[e]].splice(f,1),d++)}}),d>0},k=(this.getMatchingDroppables=function(a){for(var b=[],c={},d=0;d<a.scopes.length;d++){var e=this._dropsByScope[a.scopes[d]];if(e)for(var f=0;f<e.length;f++)!e[f].canDrop(a)||c[e[f].uuid]||!e[f].allowLoopback&&e[f].el===a.el||(c[e[f].uuid]=!0,b.push(e[f]))}return b.sort(G),b},function(b){b=b||{};var c,d={events:{}};for(c in a)d[c]=a[c];for(c in b)d[c]=b[c];for(c=0;c<r.length;c++)d.events[r[c]]=b[r[c]]||s;return d.katavorio=this,d}.bind(this)),l=function(a,b){for(var c=0;c<r.length;c++)b[r[c]]&&a.on(r[c],b[r[c]])}.bind(this),m={},n=a.css||{},o=a.scope||q;for(var t in p)m[t]=p[t];for(var t in n)m[t]=n[t];var v=a.inputFilterSelector||y;this.getInputFilterSelector=function(){return v},this.setInputFilterSelector=function(a){return v=a,this},this.draggable=function(b,c){var d=[];return w(b,function(b){if(b=H(b),null!=b)if(null==b._katavorioDrag){var e=k(c);b._katavorioDrag=new D(b,e,m,o),i(b._katavorioDrag,this._dragsByScope),d.push(b._katavorioDrag),a.addClass(b,m.draggable)}else l(b._katavorioDrag,c)}.bind(this)),d},this.droppable=function(b,c){var d=[];return w(b,function(b){if(b=H(b),null!=b){var e=new E(b,k(c),m,o);b._katavorioDrop=b._katavorioDrop||[],b._katavorioDrop.push(e),i(e,this._dropsByScope),d.push(e),a.addClass(b,m.droppable)}}.bind(this)),d},this.select=function(b){return w(b,function(){var b=H(this);b&&b._katavorioDrag&&(g[b._katavorio]||(f.push(b._katavorioDrag),g[b._katavorio]=[b,f.length-1],a.addClass(b,m.selected)))}),this},this.deselect=function(b){return w(b,function(){var b=H(this);if(b&&b._katavorio){var c=g[b._katavorio];if(c){for(var d=[],e=0;e<f.length;e++)f[e].el!==b&&d.push(f[e]);f=d,delete g[b._katavorio],a.removeClass(b,m.selected)}}}),this},this.deselectAll=function(){for(var b in g){var c=g[b];a.removeClass(c[0],m.selected)}f.length=0,g={}},this.markSelection=function(a){u(f,function(a){a.mark()},a)},this.markPosses=function(a){a.posses&&w(a.posses,function(b){a.posseRoles[b]&&B[b]&&u(B[b].members,function(a){a.mark()},a)})},this.unmarkSelection=function(a,b){u(f,function(a){a.unmark(b)},a)},this.unmarkPosses=function(a,b){a.posses&&w(a.posses,function(c){a.posseRoles[c]&&B[c]&&u(B[c].members,function(a){a.unmark(b,!0)},a)})},this.getSelection=function(){return f.slice(0)},this.updateSelection=function(a,b,c){u(f,function(c){c.moveBy(a,b)},c)};var x=function(a,b){b.posses&&w(b.posses,function(c){b.posseRoles[c]&&B[c]&&u(B[c].members,function(b){a(b)},b)})};this.updatePosses=function(a,b,c){x(function(c){c.moveBy(a,b)},c)},this.notifyPosseDragStop=function(a,b){x(function(a){a.stop(b,!0)},a)},this.notifySelectionDragStop=function(a,b){u(f,function(a){a.stop(b,!0)},a)},this.notifySelectionDragStart=function(a,b){u(f,function(a){a.notifyStart(b)},a)},this.setZoom=function(a){h=a},this.getZoom=function(){return h};var z=function(a,b,c,d){w(a,function(a){j(a,c),a[d](b),i(a,c)})};w(["set","add","remove","toggle"],function(a){this[a+"Scope"]=function(b,c){z(b._katavorioDrag,c,this._dragsByScope,a+"Scope"),z(b._katavorioDrop,c,this._dropsByScope,a+"Scope")}.bind(this),this[a+"DragScope"]=function(b,c){z(b.constructor===D?b:b._katavorioDrag,c,this._dragsByScope,a+"Scope")}.bind(this),this[a+"DropScope"]=function(b,c){z(b.constructor===E?b:b._katavorioDrop,c,this._dropsByScope,a+"Scope")}.bind(this)}.bind(this)),this.snapToGrid=function(a,b){for(var c in this._dragsByScope)u(this._dragsByScope[c],function(c){c.snap(a,b)})},this.getDragsForScope=function(a){return this._dragsByScope[a]},this.getDropsForScope=function(a){return this._dropsByScope[a]};var A=function(a,b,c){if(a=H(a),a[b]){var d=f.indexOf(a[b]);d>=0&&f.splice(d,1),j(a[b],c)&&w(a[b],function(a){a.destroy()}),delete a[b]}};this.elementRemoved=function(a){this.destroyDraggable(a),this.destroyDroppable(a)},this.destroyDraggable=function(a){A(a,"_katavorioDrag",this._dragsByScope)},this.destroyDroppable=function(a){A(a,"_katavorioDrop",this._dropsByScope)},this.reset=function(){this._dragsByScope={},this._dropsByScope={},f=[],g={},B={}};var B={},C=function(a,c,d){var f=e(c)?c:c.id,g=e(c)?!0:c.active!==!1,h=B[f]||function(){var a={name:f,members:[]};return B[f]=a,a}();return w(a,function(a){if(a._katavorioDrag){if(d&&null!=a._katavorioDrag.posseRoles[h.name])return;b(h.members,a._katavorioDrag),b(a._katavorioDrag.posses,h.name),a._katavorioDrag.posseRoles[h.name]=g}}),h};this.addToPosse=function(a){for(var b=[],c=1;c<arguments.length;c++)b.push(C(a,arguments[c]));return 1==b.length?b[0]:b},this.setPosse=function(a){for(var b=[],c=1;c<arguments.length;c++)b.push(C(a,arguments[c],!0).name);return w(a,function(a){if(a._katavorioDrag){var c=d(a._katavorioDrag.posses,b),e=[];Array.prototype.push.apply(e,a._katavorioDrag.posses);for(var f=0;f<c.length;f++)this.removeFromPosse(a,c[f])}}.bind(this)),1==b.length?b[0]:b},this.removeFromPosse=function(a,b){if(arguments.length<2)throw new TypeError("No posse id provided for remove operation");for(var d=1;d<arguments.length;d++)b=arguments[d],w(a,function(a){if(a._katavorioDrag&&a._katavorioDrag.posses){var d=a._katavorioDrag;w(b,function(a){c(B[a].members,d),c(d.posses,a),delete d.posseRoles[a]})}})},this.removeFromAllPosses=function(a){w(a,function(a){if(a._katavorioDrag&&a._katavorioDrag.posses){var b=a._katavorioDrag;w(b.posses,function(a){c(B[a].members,b)}),b.posses.length=0,b.posseRoles={}}})},this.setPosseState=function(a,b,c){var d=B[b];d&&w(a,function(a){a._katavorioDrag&&a._katavorioDrag.posses&&(a._katavorioDrag.posseRoles[d.name]=c)})}}}.call("undefined"!=typeof window?window:this),function(){var a=function(a){return"[object Array]"===Object.prototype.toString.call(a)},b=function(a){return"[object Number]"===Object.prototype.toString.call(a)},c=function(a){return"string"==typeof a},d=function(a){return"boolean"==typeof a},e=function(a){return null==a},f=function(a){return null==a?!1:"[object Object]"===Object.prototype.toString.call(a)},g=function(a){return"[object Date]"===Object.prototype.toString.call(a)},h=function(a){return"[object Function]"===Object.prototype.toString.call(a)},i=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},j=this;j.jsPlumbUtil={isArray:a,isString:c,isBoolean:d,isNull:e,isObject:f,isDate:g,isFunction:h,isEmpty:i,isNumber:b,clone:function(b){if(c(b))return""+b;if(d(b))return!!b;if(g(b))return new Date(b.getTime());if(h(b))return b;if(a(b)){for(var e=[],i=0;i<b.length;i++)e.push(this.clone(b[i]));return e}if(f(b)){var j={};for(var k in b)j[k]=this.clone(b[k]);return j}return b},merge:function(b,e,g){var h,i,j={};for(g=g||[],i=0;i<g.length;i++)j[g[i]]=!0;var k=this.clone(b);for(i in e)if(null==k[i])k[i]=e[i];else if(c(e[i])||d(e[i]))j[i]?(h=[],h.push.apply(h,a(k[i])?k[i]:[k[i]]),h.push.apply(h,a(e[i])?e[i]:[e[i]]),k[i]=h):k[i]=e[i];
else if(a(e[i]))h=[],a(k[i])&&h.push.apply(h,k[i]),h.push.apply(h,e[i]),k[i]=h;else if(f(e[i])){f(k[i])||(k[i]={});for(var l in e[i])k[i][l]=e[i][l]}return k},replace:function(a,b,c){if(null!=a){var d=a,e=d;return b.replace(/([^\.])+/g,function(a,b,d,f){var g=a.match(/([^\[0-9]+){1}(\[)([0-9+])/),h=d+a.length>=f.length,i=function(){return e[g[1]]||function(){return e[g[1]]=[],e[g[1]]}()};if(h)g?i()[g[3]]=c:e[a]=c;else if(g){var j=i();e=j[g[3]]||function(){return j[g[3]]={},j[g[3]]}()}else e=e[a]||function(){return e[a]={},e[a]}()}),a}},functionChain:function(a,b,c){for(var d=0;d<c.length;d++){var e=c[d][0][c[d][1]].apply(c[d][0],c[d][2]);if(e===b)return e}return a},populate:function(b,d,e){var g=function(a){var b=a.match(/(\${.*?})/g);if(null!=b)for(var c=0;c<b.length;c++){var e=d[b[c].substring(2,b[c].length-1)]||"";null!=e&&(a=a.replace(b[c],e))}return a},i=function(b){if(null!=b){if(c(b))return g(b);if(!h(b)||null!=e&&0!==(b.name||"").indexOf(e)){if(a(b)){for(var j=[],k=0;k<b.length;k++)j.push(i(b[k]));return j}if(f(b)){var l={};for(var m in b)l[m]=i(b[m]);return l}return b}return b(d)}};return i(b)},findWithFunction:function(a,b){if(a)for(var c=0;c<a.length;c++)if(b(a[c]))return c;return-1},removeWithFunction:function(a,b){var c=j.jsPlumbUtil.findWithFunction(a,b);return c>-1&&a.splice(c,1),-1!=c},remove:function(a,b){var c=a.indexOf(b);return c>-1&&a.splice(c,1),-1!=c},addWithFunction:function(a,b,c){-1==j.jsPlumbUtil.findWithFunction(a,c)&&a.push(b)},addToList:function(a,b,c,d){var e=a[b];return null==e&&(e=[],a[b]=e),e[d?"unshift":"push"](c),e},suggest:function(a,b,c){return-1===a.indexOf(b)?(c?a.unshift(b):a.push(b),!0):!1},extend:function(b,c){var d;for(c=a(c)?c:[c],d=0;d<c.length;d++)for(var e in c[d].prototype)c[d].prototype.hasOwnProperty(e)&&(b.prototype[e]=c[d].prototype[e]);var f=function(a,b){return function(){for(d=0;d<c.length;d++)c[d].prototype[a]&&c[d].prototype[a].apply(this,arguments);return b.apply(this,arguments)}},g=function(a){for(var c in a)b.prototype[c]=f(c,a[c])};if(arguments.length>2)for(d=2;d<arguments.length;d++)g(arguments[d]);return b},uuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=0|16*Math.random(),c="x"==a?b:8|3&b;return c.toString(16)})},logEnabled:!0,log:function(){if(j.jsPlumbUtil.logEnabled&&"undefined"!=typeof console)try{var a=arguments[arguments.length-1];console.log(a)}catch(b){}},wrap:function(a,b,c){return a=a||function(){},b=b||function(){},function(){var d=null;try{d=b.apply(this,arguments)}catch(e){j.jsPlumbUtil.log("jsPlumb function failed : "+e)}if(null==c||d!==c)try{d=a.apply(this,arguments)}catch(e){j.jsPlumbUtil.log("wrapped function failed : "+e)}return d}}},j.jsPlumbUtil.EventGenerator=function(){var a={},b=!1,c={ready:!0};this.bind=function(b,c,d){var e=function(b){j.jsPlumbUtil.addToList(a,b,c,d),c.__jsPlumb=c.__jsPlumb||{},c.__jsPlumb[j.jsPlumbUtil.uuid()]=b};if("string"==typeof b)e(b);else if(null!=b.length)for(var f=0;f<b.length;f++)e(b[f]);return this},this.fire=function(d,e,f){if(!b&&a[d]){var g=a[d].length,h=0,i=!1,k=null;if(!this.shouldFireEvent||this.shouldFireEvent(d,e,f))for(;!i&&g>h&&k!==!1;){if(c[d])a[d][h].apply(this,[e,f]);else try{k=a[d][h].apply(this,[e,f])}catch(l){j.jsPlumbUtil.log("jsPlumb: fire failed for event "+d+" : "+l)}h++,(null==a||null==a[d])&&(i=!0)}}return this},this.unbind=function(b,c){if(0===arguments.length)a={};else if(1===arguments.length){if("string"==typeof b)delete a[b];else if(b.__jsPlumb){var d;for(var e in b.__jsPlumb)d=b.__jsPlumb[e],j.jsPlumbUtil.remove(a[d]||[],b)}}else 2===arguments.length&&j.jsPlumbUtil.remove(a[b]||[],c);return this},this.getListener=function(b){return a[b]},this.setSuspendEvents=function(a){b=a},this.isSuspendEvents=function(){return b},this.silently=function(a){this.setSuspendEvents(!0);try{a()}catch(b){j.jsPlumbUtil.log("Cannot execute silent function "+b)}this.setSuspendEvents(!1)},this.cleanupListeners=function(){for(var b in a)a[b]=null}},j.jsPlumbUtil.EventGenerator.prototype={cleanup:function(){this.cleanupListeners()}},"undefined"!=typeof exports&&(exports.jsPlumbUtil=j.jsPlumbUtil)}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumbUtil;b.matchesSelector=function(a,b,c){c=c||a.parentNode;for(var d=c.querySelectorAll(b),e=0;e<d.length;e++)if(d[e]===a)return!0;return!1},b.consume=function(a,b){a.stopPropagation?a.stopPropagation():a.returnValue=!1,!b&&a.preventDefault&&a.preventDefault()},b.sizeElement=function(a,b,c,d,e){a&&(a.style.height=e+"px",a.height=e,a.style.width=d+"px",a.width=d,a.style.left=b+"px",a.style.top=c+"px")}}.call("undefined"!=typeof window?window:this),function(){"use strict";var a,b=this,c=[],d=b.jsPlumbUtil,e=function(){return""+(new Date).getTime()},f=function(a){if(a._jsPlumb.paintStyle&&a._jsPlumb.hoverPaintStyle){var b={};r.extend(b,a._jsPlumb.paintStyle),r.extend(b,a._jsPlumb.hoverPaintStyle),delete a._jsPlumb.hoverPaintStyle,b.gradient&&a._jsPlumb.paintStyle.fill&&delete b.gradient,a._jsPlumb.hoverPaintStyle=b}},g=["tap","dbltap","click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","contextmenu"],h=function(a,b,c,d){var e=a.getAttachedElements();if(e)for(var f=0,g=e.length;g>f;f++)d&&d==e[f]||e[f].setHover(b,!0,c)},i=function(a){return null==a?null:a.split(" ")},j=function(a,b,c){for(var d in b)a[d]=c},k=function(a,b){b=d.isArray(b)||null!=b.length&&!d.isString(b)?b:[b];for(var c=0;c<b.length;c++)try{a.apply(b[c],[b[c]])}catch(e){d.log(".each iteration failed : "+e)}},l=function(a,b,c){if(a.getDefaultType){var e=a.getTypeDescriptor(),f={},g=a.getDefaultType(),h=d.merge({},g);j(f,g,"__default");for(var i=0,k=a._jsPlumb.types.length;k>i;i++){var l=a._jsPlumb.types[i];if("__default"!==l){var m=a._jsPlumb.instance.getType(l,e);null!=m&&(h=d.merge(h,m,["cssClass"]),j(f,m,l))}}b&&(h=d.populate(h,b,"_")),a.applyType(h,c,f),c||a.repaint()}},m=b.jsPlumbUIComponent=function(a){d.EventGenerator.apply(this,arguments);var b=this,c=arguments,e=b.idPrefix,f=e+(new Date).getTime();this._jsPlumb={instance:a._jsPlumb,parameters:a.parameters||{},paintStyle:null,hoverPaintStyle:null,paintStyleInUse:null,hover:!1,beforeDetach:a.beforeDetach,beforeDrop:a.beforeDrop,overlayPlacements:[],hoverClass:a.hoverClass||a._jsPlumb.Defaults.HoverClass,types:[],typeCache:{}},this.cacheTypeItem=function(a,b,c){this._jsPlumb.typeCache[c]=this._jsPlumb.typeCache[c]||{},this._jsPlumb.typeCache[c][a]=b},this.getCachedTypeItem=function(a,b){return this._jsPlumb.typeCache[b]?this._jsPlumb.typeCache[b][a]:null},this.getId=function(){return f};var g=a.overlays||[],h={};if(this.defaultOverlayKeys){for(var i=0;i<this.defaultOverlayKeys.length;i++)Array.prototype.push.apply(g,this._jsPlumb.instance.Defaults[this.defaultOverlayKeys[i]]||[]);for(i=0;i<g.length;i++){var j=r.convertToFullOverlaySpec(g[i]);h[j[1].id]=j}}var k={overlays:h,parameters:a.parameters||{},scope:a.scope||this._jsPlumb.instance.getDefaultScope()};if(this.getDefaultType=function(){return k},this.appendToDefaultType=function(a){for(var b in a)k[b]=a[b]},a.events)for(i in a.events)b.bind(i,a.events[i]);this.clone=function(){var a=Object.create(this.constructor.prototype);return this.constructor.apply(a,c),a}.bind(this),this.isDetachAllowed=function(a){var b=!0;if(this._jsPlumb.beforeDetach)try{b=this._jsPlumb.beforeDetach(a)}catch(c){d.log("jsPlumb: beforeDetach callback failed",c)}return b},this.isDropAllowed=function(a,b,c,e,f,g,h){var i=this._jsPlumb.instance.checkCondition("beforeDrop",{sourceId:a,targetId:b,scope:c,connection:e,dropEndpoint:f,source:g,target:h});if(this._jsPlumb.beforeDrop)try{i=this._jsPlumb.beforeDrop({sourceId:a,targetId:b,scope:c,connection:e,dropEndpoint:f,source:g,target:h})}catch(j){d.log("jsPlumb: beforeDrop callback failed",j)}return i};var l=[];this.setListenerComponent=function(a){for(var b=0;b<l.length;b++)l[b][3]=a}},n=function(a,b){var c=a._jsPlumb.types[b],d=a._jsPlumb.instance.getType(c,a.getTypeDescriptor());null!=d&&d.cssClass&&a.canvas&&a._jsPlumb.instance.removeClass(a.canvas,d.cssClass)};d.extend(b.jsPlumbUIComponent,d.EventGenerator,{getParameter:function(a){return this._jsPlumb.parameters[a]},setParameter:function(a,b){this._jsPlumb.parameters[a]=b},getParameters:function(){return this._jsPlumb.parameters},setParameters:function(a){this._jsPlumb.parameters=a},getClass:function(){return r.getClass(this.canvas)},hasClass:function(a){return r.hasClass(this.canvas,a)},addClass:function(a){r.addClass(this.canvas,a)},removeClass:function(a){r.removeClass(this.canvas,a)},updateClasses:function(a,b){r.updateClasses(this.canvas,a,b)},setType:function(a,b,c){this.clearTypes(),this._jsPlumb.types=i(a)||[],l(this,b,c)},getType:function(){return this._jsPlumb.types},reapplyTypes:function(a,b){l(this,a,b)},hasType:function(a){return-1!=this._jsPlumb.types.indexOf(a)},addType:function(a,b,c){var d=i(a),e=!1;if(null!=d){for(var f=0,g=d.length;g>f;f++)this.hasType(d[f])||(this._jsPlumb.types.push(d[f]),e=!0);e&&l(this,b,c)}},removeType:function(a,b,c){var d=i(a),e=!1,f=function(a){var b=this._jsPlumb.types.indexOf(a);return-1!=b?(n(this,b),this._jsPlumb.types.splice(b,1),!0):!1}.bind(this);if(null!=d){for(var g=0,h=d.length;h>g;g++)e=f(d[g])||e;e&&l(this,b,c)}},clearTypes:function(a,b){for(var c=this._jsPlumb.types.length,d=0;c>d;d++)n(this,0),this._jsPlumb.types.splice(0,1);l(this,a,b)},toggleType:function(a,b,c){var d=i(a);if(null!=d){for(var e=0,f=d.length;f>e;e++){var g=this._jsPlumb.types.indexOf(d[e]);-1!=g?(n(this,g),this._jsPlumb.types.splice(g,1)):this._jsPlumb.types.push(d[e])}l(this,b,c)}},applyType:function(a,b){if(this.setPaintStyle(a.paintStyle,b),this.setHoverPaintStyle(a.hoverPaintStyle,b),a.parameters)for(var c in a.parameters)this.setParameter(c,a.parameters[c]);this._jsPlumb.paintStyleInUse=this.getPaintStyle()},setPaintStyle:function(a,b){this._jsPlumb.paintStyle=a,this._jsPlumb.paintStyleInUse=this._jsPlumb.paintStyle,f(this),b||this.repaint()},getPaintStyle:function(){return this._jsPlumb.paintStyle},setHoverPaintStyle:function(a,b){this._jsPlumb.hoverPaintStyle=a,f(this),b||this.repaint()},getHoverPaintStyle:function(){return this._jsPlumb.hoverPaintStyle},destroy:function(a){(a||null==this.typeId)&&(this.cleanupListeners(),this.clone=null,this._jsPlumb=null)},isHover:function(){return this._jsPlumb.hover},setHover:function(a,b,c){if(this._jsPlumb&&!this._jsPlumb.instance.currentlyDragging&&!this._jsPlumb.instance.isHoverSuspended()){if(this._jsPlumb.hover=a,null!=this.canvas){if(null!=this._jsPlumb.instance.hoverClass){var d=a?"addClass":"removeClass";this._jsPlumb.instance[d](this.canvas,this._jsPlumb.instance.hoverClass)}null!=this._jsPlumb.hoverClass&&this._jsPlumb.instance[d](this.canvas,this._jsPlumb.hoverClass)}null!=this._jsPlumb.hoverPaintStyle&&(this._jsPlumb.paintStyleInUse=a?this._jsPlumb.hoverPaintStyle:this._jsPlumb.paintStyle,this._jsPlumb.instance.isSuspendDrawing()||(c=c||e(),this.repaint({timestamp:c,recalc:!1}))),this.getAttachedElements&&!b&&h(this,a,e(),this)}}});var o=0,p=function(){var a=o+1;return o++,a},q=b.jsPlumbInstance=function(f){f&&r.extend(this.Defaults,f),this.logEnabled=this.Defaults.LogEnabled,this._connectionTypes={},this._endpointTypes={},d.EventGenerator.apply(this);var h=this,i=p(),j=h.bind,l={},n=1,o=function(a){if(null==a)return null;if(3==a.nodeType||8==a.nodeType)return{el:a,text:!0};var b=h.getElement(a);return{el:b,id:d.isString(a)&&null==b?a:Z(b)}};this.getInstanceIndex=function(){return i},this.setZoom=function(a,b){return n=a,h.fire("zoom",n),b&&h.repaintEverything(),!0},this.getZoom=function(){return n};for(var q in this.Defaults)l[q]=this.Defaults[q];var s,t=[];this.unbindContainer=function(){if(null!=s&&t.length>0)for(var a=0;a<t.length;a++)h.off(s,t[a][0],t[a][1])},this.setContainer=function(a){this.unbindContainer(),a=this.getElement(a),this.select().each(function(b){b.moveParent(a)}),this.selectEndpoints().each(function(b){b.moveParent(a)});var b=s;s=a,t.length=0;for(var c={endpointclick:"endpointClick",endpointdblclick:"endpointDblClick"},d=function(a,b,d){var e=b.srcElement||b.target,f=(e&&e.parentNode?e.parentNode._jsPlumb:null)||(e?e._jsPlumb:null)||(e&&e.parentNode&&e.parentNode.parentNode?e.parentNode.parentNode._jsPlumb:null);if(f){f.fire(a,f,b);var g=d?c[d+a]||a:a;h.fire(g,f.component||f,b)}},e=function(a,b,c){t.push([a,c]),h.on(s,a,b,c)},f=function(a){e(a,".jtk-connector",function(b){d(a,b)}),e(a,".jtk-endpoint",function(b){d(a,b,"endpoint")}),e(a,".jtk-overlay",function(b){d(a,b)})},i=0;i<g.length;i++)f(g[i]);for(var j in z){var k=z[j].el;k.parentNode===b&&(b.removeChild(k),s.appendChild(k))}},this.getContainer=function(){return s},this.bind=function(a,b){"ready"===a&&v?b():j.apply(h,[a,b])},h.importDefaults=function(a){for(var b in a)h.Defaults[b]=a[b];return a.Container&&h.setContainer(a.Container),h},h.restoreDefaults=function(){return h.Defaults=r.extend({},l),h};var u=null,v=!1,w=[],x={},y={},z={},A={},B={},C={},D=!1,E=[],F=!1,G=null,H=this.Defaults.Scope,I=1,J=function(){return""+I++},K=function(a,b){s?s.appendChild(a):b?this.getElement(b).appendChild(a):this.appendToRoot(a)}.bind(this),L=function(a,b,c,d){if(!F){var f,g=Z(a),i=h.getDragManager();i&&(f=i.getElementsForDraggable(g)),null==c&&(c=e());var j=rb({elId:g,offset:b,recalc:!1,timestamp:c});if(f&&j&&j.o)for(var k in f)rb({elId:f[k].id,offset:{left:j.o.left+f[k].offset.left,top:j.o.top+f[k].offset.top},recalc:!1,timestamp:c});if(h.anchorManager.redraw(g,b,c,null,d),f)for(var l in f)h.anchorManager.redraw(f[l].id,b,c,f[l].offset,d,!0)}},M=function(a){return y[a]},N=function(a,b,c,e,f){if(!r.headless){var g=null==b?!1:b;if(g&&r.isDragSupported(a,h)){var i=c||h.Defaults.DragOptions;if(i=r.extend({},i),r.isAlreadyDraggable(a,h))c.force&&h.initDraggable(a,i);else{var j=r.dragEvents.drag,k=r.dragEvents.stop,l=r.dragEvents.start,m=!1;qb(e,a),i[l]=d.wrap(i[l],function(){return h.setHoverSuspended(!0),h.select({source:a}).addClass(h.elementDraggingClass+" "+h.sourceElementDraggingClass,!0),h.select({target:a}).addClass(h.elementDraggingClass+" "+h.targetElementDraggingClass,!0),h.setConnectionBeingDragged(!0),i.canDrag?c.canDrag():void 0},!1),i[j]=d.wrap(i[j],function(){var b=h.getUIPosition(arguments,h.getZoom());null!=b&&(L(a,b,null,!0),m&&h.addClass(a,"jtk-dragged"),m=!0)}),i[k]=d.wrap(i[k],function(){for(var a,b=arguments[0].selection,c=function(b){null!=b[1]&&(a=h.getUIPosition([{el:b[2].el,pos:[b[1].left,b[1].top]}]),L(b[2].el,a)),h.removeClass(b[0],"jtk-dragged"),h.select({source:b[2].el}).removeClass(h.elementDraggingClass+" "+h.sourceElementDraggingClass,!0),h.select({target:b[2].el}).removeClass(h.elementDraggingClass+" "+h.targetElementDraggingClass,!0),h.getDragManager().dragEnded(b[2].el)},d=0;d<b.length;d++)c(b[d]);m=!1,h.setHoverSuspended(!1),h.setConnectionBeingDragged(!1)});var n=Z(a);C[n]=!0;var o=C[n];i.disabled=null==o?!1:!o,h.initDraggable(a,i),h.getDragManager().register(a),f&&h.fire("elementDraggable",{el:a,options:i})}}}},O=function(a,b){for(var c=a.scope.split(/\s/),d=b.scope.split(/\s/),e=0;e<c.length;e++)for(var f=0;f<d.length;f++)if(d[f]==c[e])return!0;return!1},P=function(a,b){var c=r.extend({},a);if(b&&r.extend(c,b),c.source&&(c.source.endpoint?c.sourceEndpoint=c.source:c.source=h.getElement(c.source)),c.target&&(c.target.endpoint?c.targetEndpoint=c.target:c.target=h.getElement(c.target)),a.uuids&&(c.sourceEndpoint=M(a.uuids[0]),c.targetEndpoint=M(a.uuids[1])),c.sourceEndpoint&&c.sourceEndpoint.isFull())return d.log(h,"could not add connection; source endpoint is full"),void 0;if(c.targetEndpoint&&c.targetEndpoint.isFull())return d.log(h,"could not add connection; target endpoint is full"),void 0;if(!c.type&&c.sourceEndpoint&&(c.type=c.sourceEndpoint.connectionType),c.sourceEndpoint&&c.sourceEndpoint.connectorOverlays){c.overlays=c.overlays||[];for(var e=0,f=c.sourceEndpoint.connectorOverlays.length;f>e;e++)c.overlays.push(c.sourceEndpoint.connectorOverlays[e])}c.sourceEndpoint&&c.sourceEndpoint.scope&&(c.scope=c.sourceEndpoint.scope),!c["pointer-events"]&&c.sourceEndpoint&&c.sourceEndpoint.connectorPointerEvents&&(c["pointer-events"]=c.sourceEndpoint.connectorPointerEvents);var g=function(a,b){var c=r.extend({},a);for(var d in b)b[d]&&(c[d]=b[d]);return c},i=function(a,b,d){return h.addEndpoint(a,g(b,{anchor:c.anchors?c.anchors[d]:c.anchor,endpoint:c.endpoints?c.endpoints[d]:c.endpoint,paintStyle:c.endpointStyles?c.endpointStyles[d]:c.endpointStyle,hoverPaintStyle:c.endpointHoverStyles?c.endpointHoverStyles[d]:c.endpointHoverStyle}))},j=function(a,b,d,e){if(c[a]&&!c[a].endpoint&&!c[a+"Endpoint"]&&!c.newConnection){var f=Z(c[a]),g=d[f];if(g=g?g[e]:null){if(!g.enabled)return!1;var h=null!=g.endpoint&&g.endpoint._jsPlumb?g.endpoint:i(c[a],g.def,b);if(h.isFull())return!1;c[a+"Endpoint"]=h,!c.scope&&g.def.scope&&(c.scope=g.def.scope),h._doNotDeleteOnDetach=!1,h._deleteOnDetach=!0,g.uniqueEndpoint&&(g.endpoint?h.finalEndpoint=g.endpoint:(g.endpoint=h,h._deleteOnDetach=!1,h._doNotDeleteOnDetach=!0))}}};return j("source",0,this.sourceEndpointDefinitions,c.type||"default")!==!1&&j("target",1,this.targetEndpointDefinitions,c.type||"default")!==!1?(c.sourceEndpoint&&c.targetEndpoint&&(O(c.sourceEndpoint,c.targetEndpoint)||(c=null)),c):void 0}.bind(h),Q=function(a){var b=h.Defaults.ConnectionType||h.getDefaultConnectionType();a._jsPlumb=h,a.newConnection=Q,a.newEndpoint=S,a.endpointsByUUID=y,a.endpointsByElement=x,a.finaliseConnection=R,a.id="con_"+J();var c=new b(a);return c.isDetachable()&&(c.endpoints[0].initDraggable("_jsPlumbSource"),c.endpoints[1].initDraggable("_jsPlumbTarget")),c},R=h.finaliseConnection=function(a,b,c,d){if(b=b||{},a.suspendedEndpoint||w.push(a),a.pending=null,a.endpoints[0].isTemporarySource=!1,d!==!1&&h.anchorManager.newConnection(a),L(a.source),!b.doNotFireConnectionEvent&&b.fireEvent!==!1){var e={connection:a,source:a.source,target:a.target,sourceId:a.sourceId,targetId:a.targetId,sourceEndpoint:a.endpoints[0],targetEndpoint:a.endpoints[1]};h.fire("connection",e,c)}},S=function(a,b){var c=h.Defaults.EndpointType||r.Endpoint,d=r.extend({},a);d._jsPlumb=h,d.newConnection=Q,d.newEndpoint=S,d.endpointsByUUID=y,d.endpointsByElement=x,d.fireDetachEvent=ab,d.elementId=b||Z(d.source);var e=new c(d);return e.id="ep_"+J(),qb(d.elementId,d.source),r.headless||h.getDragManager().endpointAdded(d.source,b),e},T=function(a,b,c){var d=x[a];if(d&&d.length)for(var e=0,f=d.length;f>e;e++){for(var g=0,h=d[e].connections.length;h>g;g++){var i=b(d[e].connections[g]);if(i)return}c&&c(d[e])}},U=function(a,b){return r.each(a,function(a){h.isDragSupported(a)&&(C[h.getAttribute(a,"id")]=b,h.setElementDraggable(a,b))})},V=function(a,b,c){b="block"===b;var d=null;c&&(d=function(a){a.setVisible(b,!0,!0)});var e=o(a);T(e.id,function(a){if(b&&c){var d=a.sourceId===e.id?1:0;a.endpoints[d].isVisible()&&a.setVisible(!0)}else a.setVisible(b)},d)},W=function(a){var b;return r.each(a,function(a){var c=h.getAttribute(a,"id");return b=null==C[c]?!1:C[c],b=!b,C[c]=b,h.setDraggable(a,b),b}.bind(this)),b},X=function(a,b){var c=null;b&&(c=function(a){var b=a.isVisible();a.setVisible(!b)}),T(a,function(a){var b=a.isVisible();a.setVisible(!b)},c)},Y=function(a){var b=A[a];return b?{o:b,s:E[a]}:rb({elId:a})},Z=function(a,b,c){if(d.isString(a))return a;if(null==a)return null;var e=h.getAttribute(a,"id");return e&&"undefined"!==e||(2==arguments.length&&void 0!==arguments[1]?e=b:(1==arguments.length||3==arguments.length&&!arguments[2])&&(e="jsPlumb_"+i+"_"+J()),c||h.setAttribute(a,"id",e)),e};this.setConnectionBeingDragged=function(a){D=a},this.isConnectionBeingDragged=function(){return D},this.getManagedElements=function(){return z},this.connectorClass="jtk-connector",this.connectorOutlineClass="jtk-connector-outline",this.editableConnectorClass="jtk-connector-editable",this.connectedClass="jtk-connected",this.hoverClass="jtk-hover",this.endpointClass="jtk-endpoint",this.endpointConnectedClass="jtk-endpoint-connected",this.endpointFullClass="jtk-endpoint-full",this.endpointDropAllowedClass="jtk-endpoint-drop-allowed",this.endpointDropForbiddenClass="jtk-endpoint-drop-forbidden",this.overlayClass="jtk-overlay",this.draggingClass="jtk-dragging",this.elementDraggingClass="jtk-element-dragging",this.sourceElementDraggingClass="jtk-source-element-dragging",this.targetElementDraggingClass="jtk-target-element-dragging",this.endpointAnchorClassPrefix="jtk-endpoint-anchor",this.hoverSourceClass="jtk-source-hover",this.hoverTargetClass="jtk-target-hover",this.dragSelectClass="jtk-drag-select",this.Anchors={},this.Connectors={svg:{}},this.Endpoints={svg:{}},this.Overlays={svg:{}},this.ConnectorRenderers={},this.SVG="svg",this.addEndpoint=function(a,b,c){c=c||{};var e=r.extend({},c);r.extend(e,b),e.endpoint=e.endpoint||h.Defaults.Endpoint,e.paintStyle=e.paintStyle||h.Defaults.EndpointStyle;for(var f=[],g=d.isArray(a)||null!=a.length&&!d.isString(a)?a:[a],i=0,j=g.length;j>i;i++){e.source=h.getElement(g[i]),ob(e.source);var k=Z(e.source),l=S(e,k),m=qb(k,e.source).info.o;d.addToList(x,k,l),F||l.paint({anchorLoc:l.anchor.compute({xy:[m.left,m.top],wh:E[k],element:l,timestamp:G}),timestamp:G}),f.push(l),l._doNotDeleteOnDetach=!0}return 1==f.length?f[0]:f},this.addEndpoints=function(a,b,c){for(var e=[],f=0,g=b.length;g>f;f++){var i=h.addEndpoint(a,b[f],c);d.isArray(i)?Array.prototype.push.apply(e,i):e.push(i)}return e},this.animate=function(a,b,c){if(!this.animationSupported)return!1;c=c||{};var e=h.getElement(a),f=Z(e),g=r.animEvents.step,i=r.animEvents.complete;c[g]=d.wrap(c[g],function(){h.revalidate(f)}),c[i]=d.wrap(c[i],function(){h.revalidate(f)}),h.doAnimate(e,b,c)},this.checkCondition=function(a){var b=h.getListener(a),c=!0;if(b&&b.length>0){var e=Array.prototype.slice.call(arguments,1);try{for(var f=0,g=b.length;g>f;f++)c=c&&b[f].apply(b[f],e)}catch(i){d.log(h,"cannot check condition ["+a+"]"+i)}}return c},this.connect=function(a,b){var c,e=P(a,b);if(e){if(null==e.source&&null==e.sourceEndpoint)return d.log("Cannot establish connection - source does not exist"),void 0;if(null==e.target&&null==e.targetEndpoint)return d.log("Cannot establish connection - target does not exist"),void 0;ob(e.source),c=Q(e),R(c,e)}return c};var $=[{el:"source",elId:"sourceId",epDefs:"sourceEndpointDefinitions"},{el:"target",elId:"targetId",epDefs:"targetEndpointDefinitions"}],_=function(a,b,c,d){var e,f,g,h=$[c],i=a[h.elId],j=(a[h.el],a.endpoints[c]),k={index:c,originalSourceId:0===c?i:a.sourceId,newSourceId:a.sourceId,originalTargetId:1==c?i:a.targetId,newTargetId:a.targetId,connection:a};if(b.constructor==r.Endpoint)e=b,e.addConnection(a),b=e.element;else if(f=Z(b),g=this[h.epDefs][f],f===a[h.elId])e=null;else if(g)for(var l in g){if(!g[l].enabled)return;e=null!=g[l].endpoint&&g[l].endpoint._jsPlumb?g[l].endpoint:this.addEndpoint(b,g[l].def),g[l].uniqueEndpoint&&(g[l].endpoint=e),e._doNotDeleteOnDetach=!1,e._deleteOnDetach=!0,e.addConnection(a)}else e=a.makeEndpoint(0===c,b,f),e._doNotDeleteOnDetach=!1,e._deleteOnDetach=!0;return null!=e&&(j.detachFromConnection(a),a.endpoints[c]=e,a[h.el]=e.element,a[h.elId]=e.elementId,k[0===c?"newSourceId":"newTargetId"]=e.elementId,bb(k),d||a.repaint()),k.element=b,k}.bind(this);this.setSource=function(a,b,c){var d=_(a,b,0,c);this.anchorManager.sourceChanged(d.originalSourceId,d.newSourceId,a,d.el)},this.setTarget=function(a,b,c){var d=_(a,b,1,c);this.anchorManager.updateOtherEndpoint(d.originalSourceId,d.originalTargetId,d.newTargetId,a)},this.deleteEndpoint=function(a,b,c){var d="string"==typeof a?y[a]:a;return d&&h.deleteObject({endpoint:d,dontUpdateHover:b,deleteAttachedObjects:c}),h},this.deleteEveryEndpoint=function(){var a=h.setSuspendDrawing(!0);for(var b in x){var c=x[b];if(c&&c.length)for(var d=0,e=c.length;e>d;d++)h.deleteEndpoint(c[d],!0)}return x={},z={},y={},A={},B={},h.anchorManager.reset(),h.getDragManager().reset(),a||h.setSuspendDrawing(!1),h};var ab=function(a,b,c){var d=h.Defaults.ConnectionType||h.getDefaultConnectionType(),e=a.constructor==d,f=e?{connection:a,source:a.source,target:a.target,sourceId:a.sourceId,targetId:a.targetId,sourceEndpoint:a.endpoints[0],targetEndpoint:a.endpoints[1]}:a;b&&h.fire("connectionDetached",f,c),h.fire("internal.connectionDetached",f,c),h.anchorManager.connectionDetached(f)},bb=h.fireMoveEvent=function(a,b){h.fire("connectionMoved",a,b)};this.unregisterEndpoint=function(a){a._jsPlumb.uuid&&(y[a._jsPlumb.uuid]=null),h.anchorManager.deleteEndpoint(a);for(var b in x){var c=x[b];if(c){for(var d=[],e=0,f=c.length;f>e;e++)c[e]!=a&&d.push(c[e]);x[b]=d}x[b].length<1&&delete x[b]}},this.detach=function(){if(0!==arguments.length){var a=h.Defaults.ConnectionType||h.getDefaultConnectionType(),b=arguments[0].constructor==a,c=2==arguments.length?b?arguments[1]||{}:arguments[0]:arguments[0],e=c.fireEvent!==!1,f=c.forceDetach,g=b?arguments[0]:c.connection,i=b?null:c.deleteAttachedObjects;if(g)(f||d.functionChain(!0,!1,[[g.endpoints[0],"isDetachAllowed",[g]],[g.endpoints[1],"isDetachAllowed",[g]],[g,"isDetachAllowed",[g]],[h,"checkCondition",["beforeDetach",g]]]))&&g.endpoints[0].detach({connection:g,ignoreTarget:!1,forceDetach:!0,fireEvent:e,deleteAttachedObjects:i});else{var j=r.extend({},c);if(j.uuids)M(j.uuids[0]).detachFrom(M(j.uuids[1]),e);else if(j.sourceEndpoint&&j.targetEndpoint)j.sourceEndpoint.detachFrom(j.targetEndpoint);else{var k=Z(h.getElement(j.source)),l=Z(h.getElement(j.target));T(k,function(a){(a.sourceId==k&&a.targetId==l||a.targetId==k&&a.sourceId==l)&&h.checkCondition("beforeDetach",a)&&a.endpoints[0].detach({connection:a,ignoreTarget:!1,forceDetach:!0,fireEvent:e})})}}}},this.detachAllConnections=function(a,b){b=b||{},a=h.getElement(a);var c=Z(a),d=x[c];if(d&&d.length)for(var e=0,f=d.length;f>e;e++)d[e].detachAll(b.fireEvent!==!1,b.forceDetach);return h},this.detachEveryConnection=function(a){return a=a||{},h.batch(function(){for(var b in x){var c=x[b];if(c&&c.length)for(var d=0,e=c.length;e>d;d++)c[d].detachAll(a.fireEvent!==!1,a.forceDetach)}w.length=0}),h},this.deleteObject=function(a){var b={endpoints:{},connections:{},endpointCount:0,connectionCount:0},c=(a.fireEvent!==!1,a.deleteAttachedObjects!==!1),e=function(d){if(null!=d&&null==b.connections[d.id]&&(a.dontUpdateHover||null==d._jsPlumb||d.setHover(!1),b.connections[d.id]=d,b.connectionCount++,c))for(var e=0;e<d.endpoints.length;e++)d.endpoints[e]._deleteOnDetach&&f(d.endpoints[e])},f=function(d){if(null!=d&&null==b.endpoints[d.id]&&(a.dontUpdateHover||null==d._jsPlumb||d.setHover(!1),b.endpoints[d.id]=d,b.endpointCount++,c))for(var f=0;f<d.connections.length;f++){var g=d.connections[f];e(g)}};a.connection?e(a.connection):f(a.endpoint);for(var g in b.connections){var i=b.connections[g];if(i._jsPlumb){d.removeWithFunction(w,function(a){return i.id==a.id}),ab(i,a.fireEvent===!1?!1:!i.pending,a.originalEvent);var j=null==a.deleteAttachedObjects?null:!a.deleteAttachedObjects;i.endpoints[0].detachFromConnection(i,null,j),i.endpoints[1].detachFromConnection(i,null,j),i.cleanup(!0),i.destroy(!0)}}for(var k in b.endpoints){var l=b.endpoints[k];l._jsPlumb&&(h.unregisterEndpoint(l),l.cleanup(!0),l.destroy(!0))}return b},this.draggable=function(a,b){var c;return k(function(a){c=o(a),c.el&&N(c.el,!0,b,c.id,!0)},a),h},this.droppable=function(a,b){var c;return b=b||{},b.allowLoopback=!1,k(function(a){c=o(a),c.el&&h.initDroppable(c.el,b)},a),h};var cb=function(a,b,c,d){for(var e=0,f=a.length;f>e;e++)a[e][b].apply(a[e],c);return d(a)},db=function(a,b,c){for(var d=[],e=0,f=a.length;f>e;e++)d.push([a[e][b].apply(a[e],c),a[e]]);return d},eb=function(a,b,c){return function(){return cb(a,b,arguments,c)}},fb=function(a,b){return function(){return db(a,b,arguments)}},gb=function(a,b){var c=[];if(a)if("string"==typeof a){if("*"===a)return a;c.push(a)}else if(b)c=a;else if(a.length)for(var d=0,e=a.length;e>d;d++)c.push(o(a[d]).id);else c.push(o(a).id);return c},hb=function(a,b,c){return"*"===a?!0:a.length>0?-1!=a.indexOf(b):!c};this.getConnections=function(a,b){a?a.constructor==String&&(a={scope:a}):a={};for(var c=a.scope||h.getDefaultScope(),d=gb(c,!0),e=gb(a.source),f=gb(a.target),g=!b&&d.length>1?{}:[],i=function(a,c){if(!b&&d.length>1){var e=g[a];null==e&&(e=g[a]=[]),e.push(c)}else g.push(c)},j=0,k=w.length;k>j;j++){var l=w[j],m=l.proxies&&l.proxies[0]?l.proxies[0].originalEp.elementId:l.sourceId,n=l.proxies&&l.proxies[1]?l.proxies[1].originalEp.elementId:l.targetId;hb(d,l.scope)&&hb(e,m)&&hb(f,n)&&i(l.scope,l)}return g};var ib=function(a,b){return function(c){for(var d=0,e=a.length;e>d;d++)c(a[d]);return b(a)}},jb=function(a){return function(b){return a[b]}},kb=function(a,b){var c,d,e={length:a.length,each:ib(a,b),get:jb(a)},f=["setHover","removeAllOverlays","setLabel","addClass","addOverlay","removeOverlay","removeOverlays","showOverlay","hideOverlay","showOverlays","hideOverlays","setPaintStyle","setHoverPaintStyle","setSuspendEvents","setParameter","setParameters","setVisible","repaint","addType","toggleType","removeType","removeClass","setType","bind","unbind"],g=["getLabel","getOverlay","isHover","getParameter","getParameters","getPaintStyle","getHoverPaintStyle","isVisible","hasType","getType","isSuspendEvents"];for(c=0,d=f.length;d>c;c++)e[f[c]]=eb(a,f[c],b);for(c=0,d=g.length;d>c;c++)e[g[c]]=fb(a,g[c]);return e},lb=function(a){var b=kb(a,lb);return r.extend(b,{setDetachable:eb(a,"setDetachable",lb),setReattach:eb(a,"setReattach",lb),setConnector:eb(a,"setConnector",lb),detach:function(){for(var b=0,c=a.length;c>b;b++)h.detach(a[b])},isDetachable:fb(a,"isDetachable"),isReattach:fb(a,"isReattach")})},mb=function(a){var b=kb(a,mb);return r.extend(b,{setEnabled:eb(a,"setEnabled",mb),setAnchor:eb(a,"setAnchor",mb),isEnabled:fb(a,"isEnabled"),detachAll:function(){for(var b=0,c=a.length;c>b;b++)a[b].detachAll()},remove:function(){for(var b=0,c=a.length;c>b;b++)h.deleteObject({endpoint:a[b]})}})};this.select=function(a){return a=a||{},a.scope=a.scope||"*",lb(a.connections||h.getConnections(a,!0))},this.selectEndpoints=function(a){a=a||{},a.scope=a.scope||"*";var b=!a.element&&!a.source&&!a.target,c=b?"*":gb(a.element),d=b?"*":gb(a.source),e=b?"*":gb(a.target),f=gb(a.scope,!0),g=[];for(var h in x){var i=hb(c,h,!0),j=hb(d,h,!0),k="*"!=d,l=hb(e,h,!0),m="*"!=e;if(i||j||l)a:for(var n=0,o=x[h].length;o>n;n++){var p=x[h][n];if(hb(f,p.scope,!0)){var q=k&&d.length>0&&!p.isSource,r=m&&e.length>0&&!p.isTarget;if(q||r)continue a;g.push(p)}}}return mb(g)},this.getAllConnections=function(){return w},this.getDefaultScope=function(){return H},this.getEndpoint=M,this.getEndpoints=function(a){return x[o(a).id]},this.getDefaultEndpointType=function(){return r.Endpoint},this.getDefaultConnectionType=function(){return r.Connection},this.getId=Z,this.appendElement=K;var nb=!1;this.isHoverSuspended=function(){return nb},this.setHoverSuspended=function(a){nb=a},this.hide=function(a,b){return V(a,"none",b),h},this.idstamp=J,this.connectorsInitialized=!1,this.registerConnectorType=function(a,b){c.push([a,b])};var ob=function(a){if(!s&&a){var b=h.getElement(a);b.offsetParent&&h.setContainer(b.offsetParent)}},pb=function(){h.Defaults.Container&&h.setContainer(h.Defaults.Container)},qb=h.manage=function(a,b,c){return z[a]||(z[a]={el:b,endpoints:[],connections:[]},z[a].info=rb({elId:a,timestamp:G}),c||h.fire("manageElement",{id:a,info:z[a].info,el:b})),z[a]},rb=this.updateOffset=function(a){var b,c=a.timestamp,d=a.recalc,e=a.offset,f=a.elId;return F&&!c&&(c=G),!d&&c&&c===B[f]?{o:a.offset||A[f],s:E[f]}:(d||!e&&null==A[f]?(b=z[f]?z[f].el:null,null!=b&&(E[f]=h.getSize(b),A[f]=h.getOffset(b),B[f]=c)):(A[f]=e||A[f],null==E[f]&&(b=z[f].el,null!=b&&(E[f]=h.getSize(b))),B[f]=c),A[f]&&!A[f].right&&(A[f].right=A[f].left+E[f][0],A[f].bottom=A[f].top+E[f][1],A[f].width=E[f][0],A[f].height=E[f][1],A[f].centerx=A[f].left+A[f].width/2,A[f].centery=A[f].top+A[f].height/2),{o:A[f],s:E[f]})};this.init=function(){a=b.jsPlumb.getRenderModes();var e=function(a,c,e){b.jsPlumb.Connectors[a][c]=function(){e.apply(this,arguments),b.jsPlumb.ConnectorRenderers[a].apply(this,arguments)
},d.extend(b.jsPlumb.Connectors[a][c],[e,b.jsPlumb.ConnectorRenderers[a]])};if(!b.jsPlumb.connectorsInitialized){for(var f=0;f<c.length;f++)for(var g=0;g<a.length;g++)e(a[g],c[f][1],c[f][0]);b.jsPlumb.connectorsInitialized=!0}v||(pb(),h.anchorManager=new b.jsPlumb.AnchorManager({jsPlumbInstance:h}),v=!0,h.fire("ready",h))}.bind(this),this.log=u,this.jsPlumbUIComponent=m,this.makeAnchor=function(){var a,c=function(a,c){if(b.jsPlumb.Anchors[a])return new b.jsPlumb.Anchors[a](c);if(!h.Defaults.DoNotThrowErrors)throw{msg:"jsPlumb: unknown anchor type '"+a+"'"}};if(0===arguments.length)return null;var e=arguments[0],f=arguments[1],g=(arguments[2],null);if(e.compute&&e.getOrientation)return e;if("string"==typeof e)g=c(arguments[0],{elementId:f,jsPlumbInstance:h});else if(d.isArray(e))if(d.isArray(e[0])||d.isString(e[0]))2==e.length&&d.isObject(e[1])?d.isString(e[0])?(a=b.jsPlumb.extend({elementId:f,jsPlumbInstance:h},e[1]),g=c(e[0],a)):(a=b.jsPlumb.extend({elementId:f,jsPlumbInstance:h,anchors:e[0]},e[1]),g=new b.jsPlumb.DynamicAnchor(a)):g=new r.DynamicAnchor({anchors:e,selector:null,elementId:f,jsPlumbInstance:h});else{var i={x:e[0],y:e[1],orientation:e.length>=4?[e[2],e[3]]:[0,0],offsets:e.length>=6?[e[4],e[5]]:[0,0],elementId:f,jsPlumbInstance:h,cssClass:7==e.length?e[6]:null};g=new b.jsPlumb.Anchor(i),g.clone=function(){return new b.jsPlumb.Anchor(i)}}return g.id||(g.id="anchor_"+J()),g},this.makeAnchors=function(a,c,e){for(var f=[],g=0,i=a.length;i>g;g++)"string"==typeof a[g]?f.push(b.jsPlumb.Anchors[a[g]]({elementId:c,jsPlumbInstance:e})):d.isArray(a[g])&&f.push(h.makeAnchor(a[g],c,e));return f},this.makeDynamicAnchor=function(a,c){return new b.jsPlumb.DynamicAnchor({anchors:a,selector:c,elementId:null,jsPlumbInstance:h})},this.targetEndpointDefinitions={};var sb=function(){};this.sourceEndpointDefinitions={};var tb=function(a,b,c,d,e){for(var f=a.target||a.srcElement,g=!1,h=d.getSelector(b,c),i=0;i<h.length;i++)if(h[i]==f){g=!0;break}return e?!g:g},ub=function(a,c,e,f,g){var i=new m(c),j=c._jsPlumb.EndpointDropHandler({jsPlumb:h,enabled:function(){return a.def.enabled},isFull:function(){var b=h.select({target:a.id}).length;return a.def.maxConnections>0&&b>=a.def.maxConnections},element:a.el,elementId:a.id,isSource:f,isTarget:g,addClass:function(b){h.addClass(a.el,b)},removeClass:function(b){h.removeClass(a.el,b)},onDrop:function(a){var b=a.endpoints[0];b.anchor.locked=!1},isDropAllowed:function(){return i.isDropAllowed.apply(i,arguments)},isRedrop:function(b){return null!=b.suspendedElement&&null!=b.suspendedEndpoint&&b.suspendedEndpoint.element===a.el},getEndpoint:function(d){var e=a.def.endpoint;if(null==e||null==e._jsPlumb){var f=h.deriveEndpointAndAnchorSpec(d.getType().join(" "),!0),g=f.endpoints?b.jsPlumb.extend(c,{endpoint:a.def.def.endpoint||f.endpoints[1]}):c;f.anchors&&(g=b.jsPlumb.extend(g,{anchor:a.def.def.anchor||f.anchors[1]})),e=h.addEndpoint(a.el,g),e._mtNew=!0}if(c.uniqueEndpoint&&(a.def.endpoint=e),e._doNotDeleteOnDetach=!1,e._deleteOnDetach=!0,d.isDetachable()&&e.initDraggable(),null!=e.anchor.positionFinder){var i=h.getUIPosition(arguments,h.getZoom()),j=h.getOffset(a.el),k=h.getSize(a.el),l=null==i?[0,0]:e.anchor.positionFinder(i,j,k,e.anchor.constructorParams);e.anchor.x=l[0],e.anchor.y=l[1]}return e},maybeCleanup:function(a){a._mtNew&&0===a.connections.length?h.deleteObject({endpoint:a}):delete a._mtNew}}),k=b.jsPlumb.dragEvents.drop;return e.scope=e.scope||c.scope||h.Defaults.Scope,e[k]=d.wrap(e[k],j,!0),g&&(e[b.jsPlumb.dragEvents.over]=function(){return!0}),c.allowLoopback===!1&&(e.canDrop=function(b){var c=b.getDragElement()._jsPlumbRelatedElement;return c!=a.el}),h.initDroppable(a.el,e,"internal"),j};this.makeTarget=function(a,c,d){var e=b.jsPlumb.extend({_jsPlumb:this},d);b.jsPlumb.extend(e,c),sb(e,1,this);for(var f=e.maxConnections||-1,g=function(a){var c=o(a),d=c.id,g=b.jsPlumb.extend({},e.dropOptions||{}),h=e.connectionType||"default";this.targetEndpointDefinitions[d]=this.targetEndpointDefinitions[d]||{},ob(d),c.el._isJsPlumbGroup&&null==g.rank&&(g.rank=-1);var i={def:b.jsPlumb.extend({},e),uniqueEndpoint:e.uniqueEndpoint,maxConnections:f,enabled:!0};c.def=i,this.targetEndpointDefinitions[d][h]=i,ub(c,e,g,e.isSource===!0,!0),c.el._katavorioDrop[c.el._katavorioDrop.length-1].targetDef=i}.bind(this),h=a.length&&a.constructor!=String?a:[a],i=0,j=h.length;j>i;i++)g(h[i]);return this},this.unmakeTarget=function(a,b){var c=o(a);return h.destroyDroppable(c.el,"internal"),b||delete this.targetEndpointDefinitions[c.id],this},this.makeSource=function(a,c,e){var f=b.jsPlumb.extend({_jsPlumb:this},e);b.jsPlumb.extend(f,c);var g=f.connectionType||"default",i=h.deriveEndpointAndAnchorSpec(g);f.endpoint=f.endpoint||i.endpoints[0],f.anchor=f.anchor||i.anchors[0],sb(f,0,this);for(var j=f.maxConnections||-1,k=f.onMaxConnections,l=function(a){var c=a.id,e=this.getElement(a.el);this.sourceEndpointDefinitions[c]=this.sourceEndpointDefinitions[c]||{},ob(c);var i={def:b.jsPlumb.extend({},f),uniqueEndpoint:f.uniqueEndpoint,maxConnections:j,enabled:!0};this.sourceEndpointDefinitions[c][g]=i,a.def=i;var l=b.jsPlumb.dragEvents.stop,m=b.jsPlumb.dragEvents.drag,o=b.jsPlumb.extend({},f.dragOptions||{}),p=o.drag,q=o.stop,r=null,s=!1;o.scope=o.scope||f.scope,o[m]=d.wrap(o[m],function(){p&&p.apply(this,arguments),s=!1}),o[l]=d.wrap(o[l],function(){if(q&&q.apply(this,arguments),this.currentlyDragging=!1,null!=r._jsPlumb){var a=f.anchor||this.Defaults.Anchor,b=r.anchor,d=r.connections[0],e=this.makeAnchor(a,c,this),g=r.element;if(null!=e.positionFinder){var i=h.getOffset(g),j=this.getSize(g),k={left:i.left+b.x*j[0],top:i.top+b.y*j[1]},l=e.positionFinder(k,i,j,e.constructorParams);e.x=l[0],e.y=l[1]}r.setAnchor(e,!0),r.repaint(),this.repaint(r.elementId),null!=d&&this.repaint(d.targetId)}}.bind(this));var t=function(i){if(3!==i.which&&2!==i.button){var l=this.sourceEndpointDefinitions[c][g];if(l.enabled){if(c=this.getId(this.getElement(a.el)),f.filter){var m=d.isString(f.filter)?tb(i,a.el,f.filter,this,f.filterExclude):f.filter(i,a.el);if(m===!1)return}var p=this.select({source:c}).length;if(l.maxConnections>=0&&p>=l.maxConnections)return k&&k({element:a.el,maxConnections:j},i),!1;var q=b.jsPlumb.getPositionOnElement(i,e,n),t={};b.jsPlumb.extend(t,f),t.isTemporarySource=!0,t.anchor=[q[0],q[1],0,0],t.dragOptions=o,l.def.scope&&(t.scope=l.def.scope),r=this.addEndpoint(c,t),s=!0,r._doNotDeleteOnDetach=!1,r._deleteOnDetach=!0,l.uniqueEndpoint&&(l.endpoint?r.finalEndpoint=l.endpoint:(l.endpoint=r,r._deleteOnDetach=!1,r._doNotDeleteOnDetach=!0));var u=function(){h.off(r.canvas,"mouseup",u),h.off(a.el,"mouseup",u),s&&(s=!1,h.deleteEndpoint(r))};h.on(r.canvas,"mouseup",u),h.on(a.el,"mouseup",u);var v={};if(l.def.extract)for(var w in l.def.extract){var x=(i.srcElement||i.target).getAttribute(w);x&&(v[l.def.extract[w]]=x)}h.trigger(r.canvas,"mousedown",i,v),d.consume(i)}}}.bind(this);this.on(a.el,"mousedown",t),i.trigger=t,f.filter&&(d.isString(f.filter)||d.isFunction(f.filter))&&h.setDragFilter(a.el,f.filter);var u=b.jsPlumb.extend({},f.dropOptions||{});ub(a,f,u,!0,f.isTarget===!0)}.bind(this),m=a.length&&a.constructor!=String?a:[a],p=0,q=m.length;q>p;p++)l(o(m[p]));return this},this.unmakeSource=function(a,b,c){var d=o(a);h.destroyDroppable(d.el,"internal");var e=this.sourceEndpointDefinitions[d.id];if(e)for(var f in e)if(null==b||b===f){var g=e[f].trigger;g&&h.off(d.el,"mousedown",g),c||delete this.sourceEndpointDefinitions[d.id][f]}return this},this.unmakeEverySource=function(){for(var a in this.sourceEndpointDefinitions)h.unmakeSource(a,null,!0);return this.sourceEndpointDefinitions={},this};var vb=function(a,b,c){b=d.isArray(b)?b:[b];var e=Z(a);c=c||"default";for(var f=0;f<b.length;f++){var g=this[b[f]][e];if(g&&g[c])return g[c].def.scope||this.Defaults.Scope}}.bind(this),wb=function(a,b,c,e){c=d.isArray(c)?c:[c];var f=Z(a);e=e||"default";for(var g=0;g<c.length;g++){var h=this[c[g]][f];h&&h[e]&&(h[e].def.scope=b)}}.bind(this);this.getScope=function(a){return vb(a,["sourceEndpointDefinitions","targetEndpointDefinitions"])},this.getSourceScope=function(a){return vb(a,"sourceEndpointDefinitions")},this.getTargetScope=function(a){return vb(a,"targetEndpointDefinitions")},this.setScope=function(a,b,c){this.setSourceScope(a,b,c),this.setTargetScope(a,b,c)},this.setSourceScope=function(a,b,c){wb(a,b,"sourceEndpointDefinitions",c),this.setDragScope(a,b)},this.setTargetScope=function(a,b,c){wb(a,b,"targetEndpointDefinitions",c),this.setDropScope(a,b)},this.unmakeEveryTarget=function(){for(var a in this.targetEndpointDefinitions)h.unmakeTarget(a,!0);return this.targetEndpointDefinitions={},this};var xb=function(a,b,c,e,f){var g,i,j,k="source"==a?this.sourceEndpointDefinitions:this.targetEndpointDefinitions;if(f=f||"default",b.length&&!d.isString(b)){g=[];for(var l=0,m=b.length;m>l;l++)i=o(b[l]),k[i.id]&&k[i.id][f]&&(g[l]=k[i.id][f].enabled,j=e?!g[l]:c,k[i.id][f].enabled=j,h[j?"removeClass":"addClass"](i.el,"jtk-"+a+"-disabled"))}else{i=o(b);var n=i.id;k[n]&&k[n][f]&&(g=k[n][f].enabled,j=e?!g:c,k[n][f].enabled=j,h[j?"removeClass":"addClass"](i.el,"jtk-"+a+"-disabled"))}return g}.bind(this),yb=function(a,b){return d.isString(a)||!a.length?b.apply(this,[a]):a.length?b.apply(this,[a[0]]):void 0}.bind(this);this.toggleSourceEnabled=function(a,b){return xb("source",a,null,!0,b),this.isSourceEnabled(a,b)},this.setSourceEnabled=function(a,b,c){return xb("source",a,b,null,c)},this.isSource=function(a,b){return b=b||"default",yb(a,function(a){var c=this.sourceEndpointDefinitions[o(a).id];return null!=c&&null!=c[b]}.bind(this))},this.isSourceEnabled=function(a,b){return b=b||"default",yb(a,function(a){var c=this.sourceEndpointDefinitions[o(a).id];return c&&c[b]&&c[b].enabled===!0}.bind(this))},this.toggleTargetEnabled=function(a,b){return xb("target",a,null,!0,b),this.isTargetEnabled(a,b)},this.isTarget=function(a,b){return b=b||"default",yb(a,function(a){var c=this.targetEndpointDefinitions[o(a).id];return null!=c&&null!=c[b]}.bind(this))},this.isTargetEnabled=function(a,b){return b=b||"default",yb(a,function(a){var c=this.targetEndpointDefinitions[o(a).id];return c&&c[b]&&c[b].enabled===!0}.bind(this))},this.setTargetEnabled=function(a,b,c){return xb("target",a,b,null,c)},this.ready=function(a){h.bind("ready",a)};var zb=function(a,b){if("object"==typeof a&&a.length)for(var c=0,d=a.length;d>c;c++)b(a[c]);else b(a);return h};this.repaint=function(a,b,c){return zb(a,function(a){L(a,b,c)})},this.revalidate=function(a,b,c){return zb(a,function(a){var d=c?a:h.getId(a);h.updateOffset({elId:d,recalc:!0,timestamp:b}),h.repaint(a)})},this.repaintEverything=function(){var a,b=e();for(a in x)h.updateOffset({elId:a,recalc:!0,timestamp:b});for(a in x)L(a,null,b);return this},this.removeAllEndpoints=function(a,b,c){c=c||[];var d=function(a){var e,f,g=o(a),i=x[g.id];if(i)for(c.push(g),e=0,f=i.length;f>e;e++)h.deleteEndpoint(i[e],!1);if(delete x[g.id],b&&g.el&&3!=g.el.nodeType&&8!=g.el.nodeType)for(e=0,f=g.el.childNodes.length;f>e;e++)d(g.el.childNodes[e])};return d(a),this};var Ab=function(a,b){h.removeAllEndpoints(a.id,!0,b);for(var c=function(a){h.getDragManager().elementRemoved(a.id),h.anchorManager.clearFor(a.id),h.anchorManager.removeFloatingConnection(a.id),h.isSource(a.el)&&h.unmakeSource(a.el),h.isTarget(a.el)&&h.unmakeTarget(a.el),h.destroyDraggable(a.el),h.destroyDroppable(a.el),delete h.floatingConnections[a.id],delete z[a.id],delete A[a.id],a.el&&(h.removeElement(a.el),a.el._jsPlumb=null)},d=1;d<b.length;d++)c(b[d]);c(a)};this.remove=function(a,b){var c=o(a),d=[];return c.text?c.el.parentNode.removeChild(c.el):c.id&&h.batch(function(){Ab(c,d)},b===!1),h},this.empty=function(a,b){var c=[],d=function(a,b){var e=o(a);if(e.text)e.el.parentNode.removeChild(e.el);else if(e.el){for(;e.el.childNodes.length>0;)d(e.el.childNodes[0]);b||Ab(e,c)}};return h.batch(function(){d(a,!0)},b===!1),h},this.reset=function(){h.silently(function(){nb=!1,h.removeAllGroups(),h.removeGroupManager(),h.deleteEveryEndpoint(),h.unbind(),this.targetEndpointDefinitions={},this.sourceEndpointDefinitions={},w.length=0,this.doReset&&this.doReset()}.bind(this))};var Bb=function(a){a.canvas&&a.canvas.parentNode&&a.canvas.parentNode.removeChild(a.canvas),a.cleanup(),a.destroy()};this.clear=function(){h.select().each(Bb),h.selectEndpoints().each(Bb),x={},y={}},this.setDefaultScope=function(a){return H=a,h},this.setDraggable=U,this.deriveEndpointAndAnchorSpec=function(a,b){for(var c=((b?"":"default ")+a).split(/[\s]/),d=null,e=null,f=null,g=null,i=0;i<c.length;i++){var j=h.getType(c[i],"connection");j&&(j.endpoints&&(d=j.endpoints),j.endpoint&&(e=j.endpoint),j.anchors&&(g=j.anchors),j.anchor&&(f=j.anchor))}return{endpoints:d?d:[e,e],anchors:g?g:[f,f]}},this.setId=function(a,b,c){var e;d.isString(a)?e=a:(a=this.getElement(a),e=this.getId(a));var f=this.getConnections({source:e,scope:"*"},!0),g=this.getConnections({target:e,scope:"*"},!0);b=""+b,c?a=this.getElement(b):(a=this.getElement(e),this.setAttribute(a,"id",b)),x[b]=x[e]||[];for(var h=0,i=x[b].length;i>h;h++)x[b][h].setElementId(b),x[b][h].setReferenceElement(a);delete x[e],this.sourceEndpointDefinitions[b]=this.sourceEndpointDefinitions[e],delete this.sourceEndpointDefinitions[e],this.targetEndpointDefinitions[b]=this.targetEndpointDefinitions[e],delete this.targetEndpointDefinitions[e],this.anchorManager.changeId(e,b),this.getDragManager().changeId(e,b),z[b]=z[e],delete z[e];var j=function(c,d,e){for(var f=0,g=c.length;g>f;f++)c[f].endpoints[d].setElementId(b),c[f].endpoints[d].setReferenceElement(a),c[f][e+"Id"]=b,c[f][e]=a};j(f,0,"source"),j(g,1,"target"),this.repaint(b)},this.setDebugLog=function(a){u=a},this.setSuspendDrawing=function(a,b){var c=F;return F=a,G=a?(new Date).getTime():null,b&&this.repaintEverything(),c},this.isSuspendDrawing=function(){return F},this.getSuspendedAt=function(){return G},this.batch=function(a,b){var c=this.isSuspendDrawing();c||this.setSuspendDrawing(!0);try{a()}catch(e){d.log("Function run while suspended failed",e)}c||this.setSuspendDrawing(!1,!b)},this.doWhileSuspended=this.batch,this.getCachedData=Y,this.timestamp=e,this.show=function(a,b){return V(a,"block",b),h},this.toggleVisible=X,this.toggleDraggable=W,this.addListener=this.bind};d.extend(b.jsPlumbInstance,d.EventGenerator,{setAttribute:function(a,b,c){this.setAttribute(a,b,c)},getAttribute:function(a,c){return this.getAttribute(b.jsPlumb.getElement(a),c)},convertToFullOverlaySpec:function(a){return d.isString(a)&&(a=[a,{}]),a[1].id=a[1].id||d.uuid(),a},registerConnectionType:function(a,c){if(this._connectionTypes[a]=b.jsPlumb.extend({},c),c.overlays){for(var d={},e=0;e<c.overlays.length;e++){var f=this.convertToFullOverlaySpec(c.overlays[e]);d[f[1].id]=f}this._connectionTypes[a].overlays=d}},registerConnectionTypes:function(a){for(var b in a)this.registerConnectionType(b,a[b])},registerEndpointType:function(a,c){if(this._endpointTypes[a]=b.jsPlumb.extend({},c),c.overlays){for(var d={},e=0;e<c.overlays.length;e++){var f=this.convertToFullOverlaySpec(c.overlays[e]);d[f[1].id]=f}this._endpointTypes[a].overlays=d}},registerEndpointTypes:function(a){for(var b in a)this.registerEndpointType(b,a[b])},getType:function(a,b){return"connection"===b?this._connectionTypes[a]:this._endpointTypes[a]},setIdChanged:function(a,b){this.setId(a,b,!0)},setParent:function(a,b){var c=this.getElement(a),d=this.getId(c),e=this.getElement(b),f=this.getId(e);c.parentNode.removeChild(c),e.appendChild(c),this.getDragManager().setParent(c,d,e,f)},extend:function(a,b,c){var d;if(c)for(d=0;d<c.length;d++)a[c[d]]=b[c[d]];else for(d in b)a[d]=b[d];return a},floatingConnections:{},getFloatingAnchorIndex:function(a){return a.endpoints[0].isFloating()?0:a.endpoints[1].isFloating()?1:-1}}),q.prototype.Defaults={Anchor:"Bottom",Anchors:[null,null],ConnectionsDetachable:!0,ConnectionOverlays:[],Connector:"Bezier",Container:null,DoNotThrowErrors:!1,DragOptions:{},DropOptions:{},Endpoint:"Dot",EndpointOverlays:[],Endpoints:[null,null],EndpointStyle:{fill:"#456"},EndpointStyles:[null,null],EndpointHoverStyle:null,EndpointHoverStyles:[null,null],HoverPaintStyle:null,LabelStyle:{color:"black"},LogEnabled:!1,Overlays:[],MaxConnections:1,PaintStyle:{"stroke-width":4,stroke:"#456"},ReattachConnections:!1,RenderMode:"svg",Scope:"jsPlumb_DefaultScope"};var r=new q;b.jsPlumb=r,r.getInstance=function(a,b){var c=new q(a);if(b)for(var d in b)c[d]=b[d];return c.init(),c},r.each=function(a,b){if(null!=a)if("string"==typeof a)b(r.getElement(a));else if(null!=a.length)for(var c=0;c<a.length;c++)b(r.getElement(a[c]));else b(a)},"function"==typeof define&&define("jsplumb",[],function(){return r}),"undefined"!=typeof exports&&(exports.jsPlumb=r)}.call("undefined"!=typeof window?window:this),function(){var a=this,b=a.jsPlumbUtil,c=function(a,b){if(null==b)return[0,0];var c=h(b),d=g(c,0);return[d[a+"X"],d[a+"Y"]]},d=c.bind(this,"page"),e=c.bind(this,"screen"),f=c.bind(this,"client"),g=function(a,b){return a.item?a.item(b):a[b]},h=function(a){return a.touches&&a.touches.length>0?a.touches:a.changedTouches&&a.changedTouches.length>0?a.changedTouches:a.targetTouches&&a.targetTouches.length>0?a.targetTouches:[a]},i=function(a){var b={},c=[],d={},e={},f={};this.register=function(g){var h=a.getId(g),i=a.getOffset(g);b[h]||(b[h]=g,c.push(g),d[h]={});var j=function(b){if(b)for(var c=0;c<b.childNodes.length;c++)if(3!=b.childNodes[c].nodeType&&8!=b.childNodes[c].nodeType){var g=jsPlumb.getElement(b.childNodes[c]),k=a.getId(b.childNodes[c],null,!0);if(k&&e[k]&&e[k]>0){var l=a.getOffset(g);d[h][k]={id:k,offset:{left:l.left-i.left,top:l.top-i.top}},f[k]=h}j(b.childNodes[c])}};j(g)},this.updateOffsets=function(b,c){if(null!=b){c=c||{};var e=jsPlumb.getElement(b),g=a.getId(e),h=d[g],i=a.getOffset(e);if(h)for(var j in h)if(h.hasOwnProperty(j)){var k=jsPlumb.getElement(j),l=c[j]||a.getOffset(k);if(null==k.offsetParent&&null!=d[g][j])continue;d[g][j]={id:j,offset:{left:l.left-i.left,top:l.top-i.top}},f[j]=g}}},this.endpointAdded=function(c,g){g=g||a.getId(c);var h=document.body,i=c.parentNode;for(e[g]=e[g]?e[g]+1:1;null!=i&&i!=h;){var j=a.getId(i,null,!0);if(j&&b[j]){var k=a.getOffset(i);if(null==d[j][g]){var l=a.getOffset(c);d[j][g]={id:g,offset:{left:l.left-k.left,top:l.top-k.top}},f[g]=j}break}i=i.parentNode}},this.endpointDeleted=function(a){if(e[a.elementId]&&(e[a.elementId]--,e[a.elementId]<=0))for(var b in d)d.hasOwnProperty(b)&&d[b]&&(delete d[b][a.elementId],delete f[a.elementId])},this.changeId=function(a,b){d[b]=d[a],d[a]={},f[b]=f[a],f[a]=null},this.getElementsForDraggable=function(a){return d[a]},this.elementRemoved=function(a){var b=f[a];b&&(delete d[b][a],delete f[a])},this.reset=function(){b={},c=[],d={},e={}},this.dragEnded=function(b){if(null!=b.offsetParent){var c=a.getId(b),d=f[c];d&&this.updateOffsets(d)}},this.setParent=function(b,c,e,g,h){var i=f[c];d[g]||(d[g]={});var j=a.getOffset(e),k=h||a.getOffset(b);i&&delete d[i][c],d[g][c]={id:c,offset:{left:k.left-j.left,top:k.top-j.top}},f[c]=g},this.clearParent=function(a,b){var c=f[b];c&&(delete d[c][b],delete f[b])},this.revalidateParent=function(b,c,d){var e=f[c];if(e){var g={};g[c]=d,this.updateOffsets(e,g),a.revalidate(e)}},this.getDragAncestor=function(b){var c=jsPlumb.getElement(b),d=a.getId(c),e=f[d];return e?jsPlumb.getElement(e):null}},j=function(a){return null==a?null:a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},k=function(a,b){b=j(b),"undefined"!=typeof a.className.baseVal?a.className.baseVal=b:a.className=b},l=function(a){return"undefined"==typeof a.className.baseVal?a.className:a.className.baseVal},m=function(a,c,d){c=null==c?[]:b.isArray(c)?c:c.split(/\s+/),d=null==d?[]:b.isArray(d)?d:d.split(/\s+/);var e=l(a),f=e.split(/\s+/),g=function(a,b){for(var c=0;c<b.length;c++)if(a)-1==f.indexOf(b[c])&&f.push(b[c]);else{var d=f.indexOf(b[c]);-1!=d&&f.splice(d,1)}};g(!0,c),g(!1,d),k(a,f.join(" "))};a.jsPlumb.extend(a.jsPlumbInstance.prototype,{headless:!1,pageLocation:d,screenLocation:e,clientLocation:f,getDragManager:function(){return null==this.dragManager&&(this.dragManager=new i(this)),this.dragManager},recalculateOffsets:function(a){this.getDragManager().updateOffsets(a)},createElement:function(a,b,c,d){return this.createElementNS(null,a,b,c,d)},createElementNS:function(a,b,c,d,e){var f,g=null==a?document.createElement(b):document.createElementNS(a,b);c=c||{};for(f in c)g.style[f]=c[f];d&&(g.className=d),e=e||{};for(f in e)g.setAttribute(f,""+e[f]);return g},getAttribute:function(a,b){return null!=a.getAttribute?a.getAttribute(b):null},setAttribute:function(a,b,c){null!=a.setAttribute&&a.setAttribute(b,c)},setAttributes:function(a,b){for(var c in b)b.hasOwnProperty(c)&&a.setAttribute(c,b[c])},appendToRoot:function(a){document.body.appendChild(a)},getRenderModes:function(){return["svg"]},getClass:l,addClass:function(a,b){jsPlumb.each(a,function(a){m(a,b)})},hasClass:function(a,b){return a=jsPlumb.getElement(a),a.classList?a.classList.contains(b):-1!=l(a).indexOf(b)},removeClass:function(a,b){jsPlumb.each(a,function(a){m(a,null,b)})},updateClasses:function(a,b,c){jsPlumb.each(a,function(a){m(a,b,c)})},setClass:function(a,b){jsPlumb.each(a,function(a){k(a,b)})},setPosition:function(a,b){a.style.left=b.left+"px",a.style.top=b.top+"px"},getPosition:function(a){var b=function(b){var c=a.style[b];return c?c.substring(0,c.length-2):0};return{left:b("left"),top:b("top")}},getStyle:function(a,b){return"undefined"!=typeof window.getComputedStyle?getComputedStyle(a,null).getPropertyValue(b):a.currentStyle[b]},getSelector:function(a,b){var c=null;return c=1==arguments.length?null!=a.nodeType?a:document.querySelectorAll(a):a.querySelectorAll(b)},getOffset:function(a,b,c){a=jsPlumb.getElement(a),c=c||this.getContainer();for(var d={left:a.offsetLeft,top:a.offsetTop},e=b||null!=c&&a!=c&&a.offsetParent!=c?a.offsetParent:null,f=function(a){null!=a&&a!==document.body&&(a.scrollTop>0||a.scrollLeft>0)&&(d.left-=a.scrollLeft,d.top-=a.scrollTop)}.bind(this);null!=e;)d.left+=e.offsetLeft,d.top+=e.offsetTop,f(e),e=b?e.offsetParent:e.offsetParent==c?null:e.offsetParent;if(null!=c&&!b&&(c.scrollTop>0||c.scrollLeft>0)){var g=null!=a.offsetParent?this.getStyle(a.offsetParent,"position"):"static",h=this.getStyle(a,"position");"absolute"!==h&&"fixed"!==h&&"absolute"!==g&&"fixed"!=g&&(d.left-=c.scrollLeft,d.top-=c.scrollTop)}return d},getPositionOnElement:function(a,b,c){var d="undefined"!=typeof b.getBoundingClientRect?b.getBoundingClientRect():{left:0,top:0,width:0,height:0},e=document.body,f=document.documentElement,g=window.pageYOffset||f.scrollTop||e.scrollTop,h=window.pageXOffset||f.scrollLeft||e.scrollLeft,i=f.clientTop||e.clientTop||0,j=f.clientLeft||e.clientLeft||0,k=0,l=0,m=d.top+g-i+k*c,n=d.left+h-j+l*c,o=jsPlumb.pageLocation(a),p=d.width||b.offsetWidth*c,q=d.height||b.offsetHeight*c,r=(o[0]-n)/p,s=(o[1]-m)/q;return[r,s]},getAbsolutePosition:function(a){var b=function(b){var c=a.style[b];return c?parseFloat(c.substring(0,c.length-2)):void 0};return[b("left"),b("top")]},setAbsolutePosition:function(a,b,c,d){c?this.animate(a,{left:"+="+(b[0]-c[0]),top:"+="+(b[1]-c[1])},d):(a.style.left=b[0]+"px",a.style.top=b[1]+"px")},getSize:function(a){return[a.offsetWidth,a.offsetHeight]},getWidth:function(a){return a.offsetWidth},getHeight:function(a){return a.offsetHeight},getRenderMode:function(){return"svg"}})}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d="__label",e=function(a,c){var e={cssClass:c.cssClass,labelStyle:a.labelStyle,id:d,component:a,_jsPlumb:a._jsPlumb.instance},f=b.extend(e,c);return new(b.Overlays[a._jsPlumb.instance.getRenderMode()].Label)(f)},f=function(a,d){var e=null;if(c.isArray(d)){var f=d[0],g=b.extend({component:a,_jsPlumb:a._jsPlumb.instance},d[1]);3==d.length&&b.extend(g,d[2]),e=new(b.Overlays[a._jsPlumb.instance.getRenderMode()][f])(g)}else e=d.constructor==String?new(b.Overlays[a._jsPlumb.instance.getRenderMode()][d])({component:a,_jsPlumb:a._jsPlumb.instance}):d;return e.id=e.id||c.uuid(),a.cacheTypeItem("overlay",e,e.id),a._jsPlumb.overlays[e.id]=e,e};b.OverlayCapableJsPlumbUIComponent=function(b){a.jsPlumbUIComponent.apply(this,arguments),this._jsPlumb.overlays={},this._jsPlumb.overlayPositions={},b.label&&(this.getDefaultType().overlays[d]=["Label",{label:b.label,location:b.labelLocation||this.defaultLabelLocation||.5,labelStyle:b.labelStyle||this._jsPlumb.instance.Defaults.LabelStyle,id:d}]),this.setListenerComponent=function(a){if(this._jsPlumb)for(var b in this._jsPlumb.overlays)this._jsPlumb.overlays[b].setListenerComponent(a)}},b.OverlayCapableJsPlumbUIComponent.applyType=function(a,b){if(b.overlays){var c,d={};for(c in b.overlays){var e=a._jsPlumb.overlays[b.overlays[c][1].id];if(e)e.updateFrom(b.overlays[c][1]),d[b.overlays[c][1].id]=!0;else{var f=a.getCachedTypeItem("overlay",b.overlays[c][1].id);null!=f?(f.reattach(a._jsPlumb.instance),f.setVisible(!0),f.updateFrom(b.overlays[c][1]),a._jsPlumb.overlays[f.id]=f):f=a.addOverlay(b.overlays[c],!0),d[f.id]=!0}}for(c in a._jsPlumb.overlays)null==d[a._jsPlumb.overlays[c].id]&&a.removeOverlay(a._jsPlumb.overlays[c].id,!0)}},c.extend(b.OverlayCapableJsPlumbUIComponent,a.jsPlumbUIComponent,{setHover:function(a){if(this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged())for(var b in this._jsPlumb.overlays)this._jsPlumb.overlays[b][a?"addClass":"removeClass"](this._jsPlumb.instance.hoverClass)},addOverlay:function(a,b){var c=f(this,a);return b||this.repaint(),c},getOverlay:function(a){return this._jsPlumb.overlays[a]},getOverlays:function(){return this._jsPlumb.overlays},hideOverlay:function(a){var b=this.getOverlay(a);b&&b.hide()},hideOverlays:function(){for(var a in this._jsPlumb.overlays)this._jsPlumb.overlays[a].hide()},showOverlay:function(a){var b=this.getOverlay(a);b&&b.show()},showOverlays:function(){for(var a in this._jsPlumb.overlays)this._jsPlumb.overlays[a].show()},removeAllOverlays:function(a){for(var b in this._jsPlumb.overlays)this._jsPlumb.overlays[b].cleanup&&this._jsPlumb.overlays[b].cleanup();this._jsPlumb.overlays={},this._jsPlumb.overlayPositions=null,a||this.repaint()},removeOverlay:function(a,b){var c=this._jsPlumb.overlays[a];c&&(c.setVisible(!1),!b&&c.cleanup&&c.cleanup(),delete this._jsPlumb.overlays[a],this._jsPlumb.overlayPositions&&delete this._jsPlumb.overlayPositions[a])},removeOverlays:function(){for(var a=0,b=arguments.length;b>a;a++)this.removeOverlay(arguments[a])},moveParent:function(a){if(this.bgCanvas&&(this.bgCanvas.parentNode.removeChild(this.bgCanvas),a.appendChild(this.bgCanvas)),this.canvas&&this.canvas.parentNode){this.canvas.parentNode.removeChild(this.canvas),a.appendChild(this.canvas);for(var b in this._jsPlumb.overlays)if(this._jsPlumb.overlays[b].isAppendedAtTopLevel){var c=this._jsPlumb.overlays[b].getElement();c.parentNode.removeChild(c),a.appendChild(c)}}},getLabel:function(){var a=this.getOverlay(d);return null!=a?a.getLabel():null},getLabelOverlay:function(){return this.getOverlay(d)},setLabel:function(a){var b=this.getOverlay(d);if(b)a.constructor==String||a.constructor==Function?b.setLabel(a):(a.label&&b.setLabel(a.label),a.location&&b.setLocation(a.location));else{var c=a.constructor==String||a.constructor==Function?{label:a}:a;b=e(this,c),this._jsPlumb.overlays[d]=b}this._jsPlumb.instance.isSuspendDrawing()||this.repaint()},cleanup:function(a){for(var b in this._jsPlumb.overlays)this._jsPlumb.overlays[b].cleanup(a),this._jsPlumb.overlays[b].destroy(a);a&&(this._jsPlumb.overlays={},this._jsPlumb.overlayPositions=null)},setVisible:function(a){this[a?"showOverlays":"hideOverlays"]()},setAbsoluteOverlayPosition:function(a,b){this._jsPlumb.overlayPositions[a.id]=b},getAbsoluteOverlayPosition:function(a){return this._jsPlumb.overlayPositions?this._jsPlumb.overlayPositions[a.id]:null},_clazzManip:function(a,b,c){if(!c)for(var d in this._jsPlumb.overlays)this._jsPlumb.overlays[d][a+"Class"](b)},addClass:function(a,b){this._clazzManip("add",a,b)},removeClass:function(a,b){this._clazzManip("remove",a,b)}})}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d=function(a,b,c){var d=!1;return{drag:function(){if(d)return d=!1,!0;if(b.element){var e=c.getUIPosition(arguments,c.getZoom());null!=e&&jsPlumb.setPosition(b.element,e),c.repaint(b.element,e),a.paint({anchorPoint:a.anchor.getCurrentLocation({element:a})})}},stopDrag:function(){d=!0}}},e=function(a,b,c,d){var e=jsPlumb.createElement("div",{position:"absolute"});b.appendElement(e);var f=b.getId(e);jsPlumb.setPosition(e,c),e.style.width=d[0]+"px",e.style.height=d[1]+"px",b.manage(f,e,!0),a.id=f,a.element=e},f=function(a,c,d,e,f,g,h,i){var j=new b.FloatingAnchor({reference:c,referenceCanvas:e,jsPlumbInstance:g});return h({paintStyle:a,endpoint:d,anchor:j,source:f,scope:i})},g=["connectorStyle","connectorHoverStyle","connectorOverlays","connector","connectionType","connectorClass","connectorHoverClass"],h=function(a,b){var c=0;if(null!=b)for(var d=0;d<a.connections.length;d++)if(a.connections[d].sourceId==b||a.connections[d].targetId==b){c=d;break}return a.connections[c]};b.Endpoint=function(a){var i=a._jsPlumb,j=a.newConnection,k=a.newEndpoint;this.idPrefix="_jsplumb_e_",this.defaultLabelLocation=[.5,.5],this.defaultOverlayKeys=["Overlays","EndpointOverlays"],b.OverlayCapableJsPlumbUIComponent.apply(this,arguments),this.appendToDefaultType({connectionType:a.connectionType,maxConnections:null==a.maxConnections?this._jsPlumb.instance.Defaults.MaxConnections:a.maxConnections,paintStyle:a.endpointStyle||a.paintStyle||a.style||this._jsPlumb.instance.Defaults.EndpointStyle||b.Defaults.EndpointStyle,hoverPaintStyle:a.endpointHoverStyle||a.hoverPaintStyle||this._jsPlumb.instance.Defaults.EndpointHoverStyle||b.Defaults.EndpointHoverStyle,connectorStyle:a.connectorStyle,connectorHoverStyle:a.connectorHoverStyle,connectorClass:a.connectorClass,connectorHoverClass:a.connectorHoverClass,connectorOverlays:a.connectorOverlays,connector:a.connector,connectorTooltip:a.connectorTooltip}),this._jsPlumb.enabled=!(a.enabled===!1),this._jsPlumb.visible=!0,this.element=b.getElement(a.source),this._jsPlumb.uuid=a.uuid,this._jsPlumb.floatingEndpoint=null;var l=null;this._jsPlumb.uuid&&(a.endpointsByUUID[this._jsPlumb.uuid]=this),this.elementId=a.elementId,this.dragProxy=a.dragProxy,this._jsPlumb.connectionCost=a.connectionCost,this._jsPlumb.connectionsDirected=a.connectionsDirected,this._jsPlumb.currentAnchorClass="",this._jsPlumb.events={};var m=function(){var a=i.endpointAnchorClassPrefix+"-"+this._jsPlumb.currentAnchorClass;this._jsPlumb.currentAnchorClass=this.anchor.getCssClass();var c=i.endpointAnchorClassPrefix+(this._jsPlumb.currentAnchorClass?"-"+this._jsPlumb.currentAnchorClass:"");this.removeClass(a),this.addClass(c),b.updateClasses(this.element,c,a)}.bind(this);this.prepareAnchor=function(a){var b=this._jsPlumb.instance.makeAnchor(a,this.elementId,i);return b.bind("anchorChanged",function(a){this.fire("anchorChanged",{endpoint:this,anchor:a}),m()}.bind(this)),b},this.setPreparedAnchor=function(a,b){return this._jsPlumb.instance.continuousAnchorFactory.clear(this.elementId),this.anchor=a,m(),b||this._jsPlumb.instance.repaint(this.elementId),this},this.setAnchor=function(a,b){var c=this.prepareAnchor(a);return this.setPreparedAnchor(c,b),this};var n=function(a){if(this.connections.length>0)for(var b=0;b<this.connections.length;b++)this.connections[b].setHover(a,!1);else this.setHover(a)}.bind(this);this.bind("mouseover",function(){n(!0)}),this.bind("mouseout",function(){n(!1)}),a._transient||this._jsPlumb.instance.anchorManager.add(this,this.elementId),this.prepareEndpoint=function(d,e){var f,g=function(a,c){var d=i.getRenderMode();if(b.Endpoints[d][a])return new b.Endpoints[d][a](c);if(!i.Defaults.DoNotThrowErrors)throw{msg:"jsPlumb: unknown endpoint type '"+a+"'"}},h={_jsPlumb:this._jsPlumb.instance,cssClass:a.cssClass,container:a.container,tooltip:a.tooltip,connectorTooltip:a.connectorTooltip,endpoint:this};return c.isString(d)?f=g(d,h):c.isArray(d)?(h=c.merge(d[1],h),f=g(d[0],h)):f=d.clone(),f.clone=function(){return c.isString(d)?g(d,h):c.isArray(d)?(h=c.merge(d[1],h),g(d[0],h)):void 0
}.bind(this),f.typeId=e,f},this.setEndpoint=function(a){var b=this.prepareEndpoint(a);this.setPreparedEndpoint(b,!0)},this.setPreparedEndpoint=function(a){null!=this.endpoint&&(this.endpoint.cleanup(),this.endpoint.destroy()),this.endpoint=a,this.type=this.endpoint.type,this.canvas=this.endpoint.canvas},b.extend(this,a,g),this.isSource=a.isSource||!1,this.isTemporarySource=a.isTemporarySource||!1,this.isTarget=a.isTarget||!1,this.connections=a.connections||[],this.connectorPointerEvents=a["connector-pointer-events"],this.scope=a.scope||i.getDefaultScope(),this.timestamp=null,this.reattachConnections=a.reattach||i.Defaults.ReattachConnections,this.connectionsDetachable=i.Defaults.ConnectionsDetachable,(a.connectionsDetachable===!1||a.detachable===!1)&&(this.connectionsDetachable=!1),this.dragAllowedWhenFull=a.dragAllowedWhenFull!==!1,a.onMaxConnections&&this.bind("maxConnections",a.onMaxConnections),this.addConnection=function(a){this.connections.push(a),this[(this.connections.length>0?"add":"remove")+"Class"](i.endpointConnectedClass),this[(this.isFull()?"add":"remove")+"Class"](i.endpointFullClass)},this.detachFromConnection=function(a,b,c){b=null==b?this.connections.indexOf(a):b,b>=0&&(this.connections.splice(b,1),this[(this.connections.length>0?"add":"remove")+"Class"](i.endpointConnectedClass),this[(this.isFull()?"add":"remove")+"Class"](i.endpointFullClass)),(this._forceDeleteOnDetach||!c&&this._deleteOnDetach)&&0===this.connections.length&&i.deleteObject({endpoint:this,fireEvent:!1,deleteAttachedObjects:c!==!0})},this.detach=function(a){var b=a.connectionIndex,c=a.connection,d=a.ignoreTarget,e=a.fireEvent,f=a.originalEvent,g=a.endpointBeingDeleted,h=a.forceDetach,j=null==b?this.connections.indexOf(c):b,k=!1;return e=e!==!1,j>=0&&(h||c._forceDetach||c.isDetachable()&&c.isDetachAllowed(c)&&this.isDetachAllowed(c)&&i.checkCondition("beforeDetach",c,g))&&(i.deleteObject({connection:c,fireEvent:!d&&e,originalEvent:f,deleteAttachedObjects:a.deleteAttachedObjects}),k=!0),k},this.detachAll=function(a,b){for(var c=[];this.connections.length>0;){var d=this.detach({connection:this.connections[0],ignoreTarget:!1,forceDetach:b===!0,fireEvent:a!==!1,originalEvent:null,endpointBeingDeleted:this,connectionIndex:0});d||(c.push(this.connections[0]),this.connections.splice(0,1))}return this.connections=c,this},this.detachFrom=function(a,b,c){for(var d=[],e=0;e<this.connections.length;e++)(this.connections[e].endpoints[1]==a||this.connections[e].endpoints[0]==a)&&d.push(this.connections[e]);for(var f=0;f<d.length;f++)this.detach({connection:d[f],ignoreTarget:!1,forceDetach:!0,fireEvent:b,originalEvent:c});return this},this.getElement=function(){return this.element},this.setElement=function(d){var e=this._jsPlumb.instance.getId(d),f=this.elementId;return c.removeWithFunction(a.endpointsByElement[this.elementId],function(a){return a.id==this.id}.bind(this)),this.element=b.getElement(d),this.elementId=i.getId(this.element),i.anchorManager.rehomeEndpoint(this,f,this.element),i.dragManager.endpointAdded(this.element),c.addToList(a.endpointsByElement,e,this),this},this.makeInPlaceCopy=function(){var b=this.anchor.getCurrentLocation({element:this}),c=this.anchor.getOrientation(this),d=this.anchor.getCssClass(),e={bind:function(){},compute:function(){return[b[0],b[1]]},getCurrentLocation:function(){return[b[0],b[1]]},getOrientation:function(){return c},getCssClass:function(){return d}};return k({dropOptions:a.dropOptions,anchor:e,source:this.element,paintStyle:this.getPaintStyle(),endpoint:a.hideOnDrag?"Blank":this.endpoint,_transient:!0,scope:this.scope,reference:this})},this.connectorSelector=function(){var a=this.connections[0];return a?a:this.connections.length<this._jsPlumb.maxConnections||-1==this._jsPlumb.maxConnections?null:a},this.setStyle=this.setPaintStyle,this.paint=function(a){a=a||{};var b=a.timestamp,c=!(a.recalc===!1);if(!b||this.timestamp!==b){var d=i.updateOffset({elId:this.elementId,timestamp:b}),e=a.offset?a.offset.o:d.o;if(null!=e){var f=a.anchorPoint,g=a.connectorPaintStyle;if(null==f){var j=a.dimensions||d.s,k={xy:[e.left,e.top],wh:j,element:this,timestamp:b};if(c&&this.anchor.isDynamic&&this.connections.length>0){var l=h(this,a.elementWithPrecedence),m=l.endpoints[0]==this?1:0,n=0===m?l.sourceId:l.targetId,o=i.getCachedData(n),p=o.o,q=o.s;k.txy=[p.left,p.top],k.twh=q,k.tElement=l.endpoints[m]}f=this.anchor.compute(k)}this.endpoint.compute(f,this.anchor.getOrientation(this),this._jsPlumb.paintStyleInUse,g||this.paintStyleInUse),this.endpoint.paint(this._jsPlumb.paintStyleInUse,this.anchor),this.timestamp=b;for(var r in this._jsPlumb.overlays)if(this._jsPlumb.overlays.hasOwnProperty(r)){var s=this._jsPlumb.overlays[r];s.isVisible()&&(this._jsPlumb.overlayPlacements[r]=s.draw(this.endpoint,this._jsPlumb.paintStyleInUse),s.paint(this._jsPlumb.overlayPlacements[r]))}}}},this.getTypeDescriptor=function(){return"endpoint"},this.isVisible=function(){return this._jsPlumb.visible},this.repaint=this.paint;var o=!1;this.initDraggable=function(){if(!o&&b.isDragSupported(this.element)){var g,h={id:null,element:null},m=null,n=!1,p=null,q=d(this,h,i),r=a.dragOptions||{},s={},t=b.dragEvents.start,u=b.dragEvents.stop,v=b.dragEvents.drag,w=b.dragEvents.beforeStart,x=function(a){g=a.e.payload||{}},y=function(){m=this.connectorSelector();var d=!0;this.isEnabled()||(d=!1),null!=m||this.isSource||this.isTemporarySource||(d=!1),!this.isSource||!this.isFull()||null!=m&&this.dragAllowedWhenFull||(d=!1),null==m||m.isDetachable(this)||(d=!1);var l=i.checkCondition(null==m?"beforeDrag":"beforeStartDetach",{endpoint:this,source:this.element,sourceId:this.elementId,connection:m});if(l===!1?d=!1:"object"==typeof l?b.extend(l,g||{}):l=g||{},d===!1)return i.stopDrag&&i.stopDrag(this.canvas),q.stopDrag(),!1;for(var o=0;o<this.connections.length;o++)this.connections[o].setHover(!1);this.addClass("endpointDrag"),i.setConnectionBeingDragged(!0),m&&!this.isFull()&&this.isSource&&(m=null),i.updateOffset({elId:this.elementId});var r=this._jsPlumb.instance.getOffset(this.canvas),s=this.canvas,t=this._jsPlumb.instance.getSize(this.canvas);e(h,i,r,t),i.setAttributes(this.canvas,{dragId:h.id,elId:this.elementId});var u=this.dragProxy||this.endpoint;if(null==this.dragProxy&&null!=this.connectionType){var v=this._jsPlumb.instance.deriveEndpointAndAnchorSpec(this.connectionType);v.endpoints[1]&&(u=v.endpoints[1])}var w=this._jsPlumb.instance.makeAnchor("Center");w.isFloating=!0,this._jsPlumb.floatingEndpoint=f(this.getPaintStyle(),w,u,this.canvas,h.element,i,k,this.scope);var x=this._jsPlumb.floatingEndpoint.anchor;if(null==m)this.setHover(!1,!1),m=j({sourceEndpoint:this,targetEndpoint:this._jsPlumb.floatingEndpoint,source:this.element,target:h.element,anchors:[this.anchor,this._jsPlumb.floatingEndpoint.anchor],paintStyle:a.connectorStyle,hoverPaintStyle:a.connectorHoverStyle,connector:a.connector,overlays:a.connectorOverlays,type:this.connectionType,cssClass:this.connectorClass,hoverClass:this.connectorHoverClass,scope:a.scope,data:l}),m.pending=!0,m.addClass(i.draggingClass),this._jsPlumb.floatingEndpoint.addClass(i.draggingClass),this._jsPlumb.floatingEndpoint.anchor=x,i.fire("connectionDrag",m),i.anchorManager.newConnection(m);else{n=!0,m.setHover(!1);var y=m.endpoints[0].id==this.id?0:1;this.detachFromConnection(m,null,!0);var z=i.getDragScope(s);i.setAttribute(this.canvas,"originalScope",z),i.fire("connectionDrag",m),0===y?(p=[m.source,m.sourceId,s,z],i.anchorManager.sourceChanged(m.endpoints[y].elementId,h.id,m,h.element)):(p=[m.target,m.targetId,s,z],m.target=h.element,m.targetId=h.id,i.anchorManager.updateOtherEndpoint(m.sourceId,m.endpoints[y].elementId,m.targetId,m)),m.suspendedEndpoint=m.endpoints[y],m.suspendedElement=m.endpoints[y].getElement(),m.suspendedElementId=m.endpoints[y].elementId,m.suspendedElementType=0===y?"source":"target",m.suspendedEndpoint.setHover(!1),this._jsPlumb.floatingEndpoint.referenceEndpoint=m.suspendedEndpoint,m.endpoints[y]=this._jsPlumb.floatingEndpoint,m.addClass(i.draggingClass),this._jsPlumb.floatingEndpoint.addClass(i.draggingClass)}i.floatingConnections[h.id]=m,c.addToList(a.endpointsByElement,h.id,this._jsPlumb.floatingEndpoint),i.currentlyDragging=!0}.bind(this),z=function(){if(i.setConnectionBeingDragged(!1),m&&null!=m.endpoints){var a=i.getDropEvent(arguments),b=i.getFloatingAnchorIndex(m);if(m.endpoints[0===b?1:0].anchor.locked=!1,m.removeClass(i.draggingClass),this._jsPlumb&&(m.deleteConnectionNow||m.endpoints[b]==this._jsPlumb.floatingEndpoint)&&n&&m.suspendedEndpoint){0===b?(m.floatingElement=m.source,m.floatingId=m.sourceId,m.floatingEndpoint=m.endpoints[0],m.floatingIndex=0,m.source=p[0],m.sourceId=p[1]):(m.floatingElement=m.target,m.floatingId=m.targetId,m.floatingEndpoint=m.endpoints[1],m.floatingIndex=1,m.target=p[0],m.targetId=p[1]);var c=this._jsPlumb.floatingEndpoint;i.setDragScope(p[2],p[3]),m.endpoints[b]=m.suspendedEndpoint,m.isReattach()||m._forceReattach||m._forceDetach||!m.endpoints[0===b?1:0].detach({connection:m,ignoreTarget:!1,forceDetach:!1,fireEvent:!0,originalEvent:a,endpointBeingDeleted:!0})?(m.setHover(!1),m._forceDetach=null,m._forceReattach=null,this._jsPlumb.floatingEndpoint.detachFromConnection(m),m.suspendedEndpoint.addConnection(m),1==b?i.anchorManager.updateOtherEndpoint(m.sourceId,m.floatingId,m.targetId,m):i.anchorManager.sourceChanged(m.floatingId,m.sourceId,m,m.source),i.repaint(p[1])):i.deleteObject({endpoint:c})}this.deleteAfterDragStop?i.deleteObject({endpoint:this}):this._jsPlumb&&this.paint({recalc:!1}),i.fire("connectionDragStop",m,a),m.pending&&i.fire("connectionAborted",m,a),i.currentlyDragging=!1,m.suspendedElement=null,m.suspendedEndpoint=null,m=null}h&&h.element&&i.remove(h.element,!1,!1),l&&i.deleteObject({endpoint:l}),this._jsPlumb&&(this.canvas.style.visibility="visible",this.anchor.locked=!1,this._jsPlumb.floatingEndpoint=null)}.bind(this);r=b.extend(s,r),r.scope=this.scope||r.scope,r[w]=c.wrap(r[w],x,!1),r[t]=c.wrap(r[t],y,!1),r[v]=c.wrap(r[v],q.drag),r[u]=c.wrap(r[u],z),r.multipleDrop=!1,r.canDrag=function(){return this.isSource||this.isTemporarySource||this.connections.length>0}.bind(this),i.initDraggable(this.canvas,r,"internal"),this.canvas._jsPlumbRelatedElement=this.element,o=!0}};var p=a.endpoint||this._jsPlumb.instance.Defaults.Endpoint||b.Defaults.Endpoint;this.setEndpoint(p,!0);var q=a.anchor?a.anchor:a.anchors?a.anchors:i.Defaults.Anchor||"Top";this.setAnchor(q,!0);var r=["default",a.type||""].join(" ");this.addType(r,a.data,!0),this.canvas=this.endpoint.canvas,this.canvas._jsPlumb=this,this.initDraggable();var s=function(d,e,f,g){if(b.isDropSupported(this.element)){var h=a.dropOptions||i.Defaults.DropOptions||b.Defaults.DropOptions;h=b.extend({},h),h.scope=h.scope||this.scope;var j=b.dragEvents.drop,k=b.dragEvents.over,l=b.dragEvents.out,m=this,n=i.EndpointDropHandler({getEndpoint:function(){return m},jsPlumb:i,enabled:function(){return null!=f?f.isEnabled():!0},isFull:function(){return f.isFull()},element:this.element,elementId:this.elementId,isSource:this.isSource,isTarget:this.isTarget,addClass:function(a){m.addClass(a)},removeClass:function(a){m.removeClass(a)},isDropAllowed:function(){return m.isDropAllowed.apply(m,arguments)},reference:g,isRedrop:function(a,b){return a.suspendedEndpoint&&b.reference&&a.suspendedEndpoint.id===b.reference.id}});h[j]=c.wrap(h[j],n,!0),h[k]=c.wrap(h[k],function(){var a=b.getDragObject(arguments),c=i.getAttribute(b.getElement(a),"dragId"),d=i.floatingConnections[c];if(null!=d){var e=i.getFloatingAnchorIndex(d),f=this.isTarget&&0!==e||d.suspendedEndpoint&&this.referenceEndpoint&&this.referenceEndpoint.id==d.suspendedEndpoint.id;if(f){var g=i.checkCondition("checkDropAllowed",{sourceEndpoint:d.endpoints[e],targetEndpoint:this,connection:d});this[(g?"add":"remove")+"Class"](i.endpointDropAllowedClass),this[(g?"remove":"add")+"Class"](i.endpointDropForbiddenClass),d.endpoints[e].anchor.over(this.anchor,this)}}}.bind(this)),h[l]=c.wrap(h[l],function(){var a=b.getDragObject(arguments),c=null==a?null:i.getAttribute(b.getElement(a),"dragId"),d=c?i.floatingConnections[c]:null;if(null!=d){var e=i.getFloatingAnchorIndex(d),f=this.isTarget&&0!==e||d.suspendedEndpoint&&this.referenceEndpoint&&this.referenceEndpoint.id==d.suspendedEndpoint.id;f&&(this.removeClass(i.endpointDropAllowedClass),this.removeClass(i.endpointDropForbiddenClass),d.endpoints[e].anchor.out())}}.bind(this)),i.initDroppable(d,h,"internal",e)}}.bind(this);return this.anchor.isFloating||s(this.canvas,!(a._transient||this.anchor.isFloating),this,a.reference),this},c.extend(b.Endpoint,b.OverlayCapableJsPlumbUIComponent,{setVisible:function(a,b,c){if(this._jsPlumb.visible=a,this.canvas&&(this.canvas.style.display=a?"block":"none"),this[a?"showOverlays":"hideOverlays"](),!b)for(var d=0;d<this.connections.length;d++)if(this.connections[d].setVisible(a),!c){var e=this===this.connections[d].endpoints[0]?1:0;1==this.connections[d].endpoints[e].connections.length&&this.connections[d].endpoints[e].setVisible(a,!0,!0)}},getAttachedElements:function(){return this.connections},applyType:function(a,c){this.setPaintStyle(a.endpointStyle||a.paintStyle,c),this.setHoverPaintStyle(a.endpointHoverStyle||a.hoverPaintStyle,c),null!=a.maxConnections&&(this._jsPlumb.maxConnections=a.maxConnections),a.scope&&(this.scope=a.scope),b.extend(this,a,g),null!=a.cssClass&&this.canvas&&this._jsPlumb.instance.addClass(this.canvas,a.cssClass),b.OverlayCapableJsPlumbUIComponent.applyType(this,a)},isEnabled:function(){return this._jsPlumb.enabled},setEnabled:function(a){this._jsPlumb.enabled=a},cleanup:function(){var a=this._jsPlumb.instance.endpointAnchorClassPrefix+(this._jsPlumb.currentAnchorClass?"-"+this._jsPlumb.currentAnchorClass:"");b.removeClass(this.element,a),this.anchor=null,this.endpoint.cleanup(!0),this.endpoint.destroy(),this.endpoint=null,this._jsPlumb.instance.destroyDraggable(this.canvas,"internal"),this._jsPlumb.instance.destroyDroppable(this.canvas,"internal")},setHover:function(a){this.endpoint&&this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged()&&this.endpoint.setHover(a)},isFull:function(){return 0===this._jsPlumb.maxConnections?!0:!(this.isFloating()||this._jsPlumb.maxConnections<0||this.connections.length<this._jsPlumb.maxConnections)},isFloating:function(){return null!=this.anchor&&this.anchor.isFloating},isConnectedTo:function(a){var b=!1;if(a)for(var c=0;c<this.connections.length;c++)if(this.connections[c].endpoints[1]==a||this.connections[c].endpoints[0]==a){b=!0;break}return b},getConnectionCost:function(){return this._jsPlumb.connectionCost},setConnectionCost:function(a){this._jsPlumb.connectionCost=a},areConnectionsDirected:function(){return this._jsPlumb.connectionsDirected},setConnectionsDirected:function(a){this._jsPlumb.connectionsDirected=a},setElementId:function(a){this.elementId=a,this.anchor.elementId=a},setReferenceElement:function(a){this.element=b.getElement(a)},setDragAllowedWhenFull:function(a){this.dragAllowedWhenFull=a},equals:function(a){return this.anchor.equals(a.anchor)},getUuid:function(){return this._jsPlumb.uuid},computeAnchor:function(a){return this.anchor.compute(a)}}),a.jsPlumbInstance.prototype.EndpointDropHandler=function(a){return function(b){var d=a.jsPlumb;a.removeClass(d.endpointDropAllowedClass),a.removeClass(d.endpointDropForbiddenClass);var e=d.getDropEvent(arguments),f=d.getDragObject(arguments),g=d.getAttribute(f,"dragId"),h=(d.getAttribute(f,"elId"),d.getAttribute(f,"originalScope")),i=d.floatingConnections[g];if(null!=i){var j=null!=i.suspendedEndpoint;if(!j||null!=i.suspendedEndpoint._jsPlumb){var k=a.getEndpoint(i);if(null!=k){if(a.isRedrop(i,a))return i._forceReattach=!0,i.setHover(!1),a.maybeCleanup&&a.maybeCleanup(k),void 0;var l=d.getFloatingAnchorIndex(i);if(0===l&&!a.isSource||1===l&&!a.isTarget)return a.maybeCleanup&&a.maybeCleanup(k),void 0;a.onDrop&&a.onDrop(i),h&&d.setDragScope(f,h);var m=a.isFull(b);if(m&&k.fire("maxConnections",{endpoint:this,connection:i,maxConnections:k._jsPlumb.maxConnections},e),!m&&a.enabled()){var n=!0;0===l?(i.floatingElement=i.source,i.floatingId=i.sourceId,i.floatingEndpoint=i.endpoints[0],i.floatingIndex=0,i.source=a.element,i.sourceId=a.elementId):(i.floatingElement=i.target,i.floatingId=i.targetId,i.floatingEndpoint=i.endpoints[1],i.floatingIndex=1,i.target=a.element,i.targetId=a.elementId),j&&i.suspendedEndpoint.id!=k.id&&(i.isDetachAllowed(i)&&i.endpoints[l].isDetachAllowed(i)&&i.suspendedEndpoint.isDetachAllowed(i)&&d.checkCondition("beforeDetach",i)||(n=!1));var o=function(a){i.endpoints[l].detachFromConnection(i),i.suspendedEndpoint&&i.suspendedEndpoint.detachFromConnection(i),i.endpoints[l]=k,k.addConnection(i);var b=k.getParameters();for(var f in b)i.setParameter(f,b[f]);if(j){var g=i.suspendedEndpoint.elementId;d.fireMoveEvent({index:l,originalSourceId:0===l?g:i.sourceId,newSourceId:0===l?k.elementId:i.sourceId,originalTargetId:1==l?g:i.targetId,newTargetId:1==l?k.elementId:i.targetId,originalSourceEndpoint:0===l?i.suspendedEndpoint:i.endpoints[0],newSourceEndpoint:0===l?k:i.endpoints[0],originalTargetEndpoint:1==l?i.suspendedEndpoint:i.endpoints[1],newTargetEndpoint:1==l?k:i.endpoints[1],connection:i},e)}else b.draggable&&d.initDraggable(this.element,dragOptions,"internal",d);if(1==l?d.anchorManager.updateOtherEndpoint(i.sourceId,i.floatingId,i.targetId,i):d.anchorManager.sourceChanged(i.floatingId,i.sourceId,i,i.source),i.endpoints[0].finalEndpoint){var h=i.endpoints[0];h.detachFromConnection(i),i.endpoints[0]=i.endpoints[0].finalEndpoint,i.endpoints[0].addConnection(i)}c.isObject(a)&&i.mergeData(a),d.finaliseConnection(i,null,e,!1),i.setHover(!1)}.bind(this),p=function(){i.suspendedEndpoint&&(i.endpoints[l]=i.suspendedEndpoint,i.setHover(!1),i._forceDetach=!0,0===l?(i.source=i.suspendedEndpoint.element,i.sourceId=i.suspendedEndpoint.elementId):(i.target=i.suspendedEndpoint.element,i.targetId=i.suspendedEndpoint.elementId),i.suspendedEndpoint.addConnection(i),1==l?d.anchorManager.updateOtherEndpoint(i.sourceId,i.floatingId,i.targetId,i):d.anchorManager.sourceChanged(i.floatingId,i.sourceId,i,i.source),d.repaint(i.sourceId),i._forceDetach=!1)};if(n=n&&a.isDropAllowed(i.sourceId,i.targetId,i.scope,i,k))return o(n),!0;p()}a.maybeCleanup&&a.maybeCleanup(k),d.currentlyDragging=!1}}}}}}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d=function(a,c,d,e,f){if(!a.Defaults.DoNotThrowErrors&&null==b.Connectors[c][d])throw{msg:"jsPlumb: unknown connector type '"+d+"'"};return new b.Connectors[c][d](e,f)},e=function(a,b,c){return a?c.makeAnchor(a,b,c):null},f=function(a,b,d,e){null!=b&&(b._jsPlumbConnections=b._jsPlumbConnections||{},e?delete b._jsPlumbConnections[a.id]:b._jsPlumbConnections[a.id]=!0,c.isEmpty(b._jsPlumbConnections)?d.removeClass(b,d.connectedClass):d.addClass(b,d.connectedClass))};b.Connection=function(a){var d=a.newEndpoint;this.id=a.id,this.connector=null,this.idPrefix="_jsplumb_c_",this.defaultLabelLocation=.5,this.defaultOverlayKeys=["Overlays","ConnectionOverlays"],this.previousConnection=a.previousConnection,this.source=b.getElement(a.source),this.target=b.getElement(a.target),a.sourceEndpoint&&(this.source=a.sourceEndpoint.getElement()),a.targetEndpoint&&(this.target=a.targetEndpoint.getElement()),b.OverlayCapableJsPlumbUIComponent.apply(this,arguments),this.sourceId=this._jsPlumb.instance.getId(this.source),this.targetId=this._jsPlumb.instance.getId(this.target),this.scope=a.scope,this.endpoints=[],this.endpointStyles=[];var e=this._jsPlumb.instance;e.manage(this.sourceId,this.source),e.manage(this.targetId,this.target),this._jsPlumb.visible=!0,this._jsPlumb.editable=a.editable===!0,this._jsPlumb.params={cssClass:a.cssClass,container:a.container,"pointer-events":a["pointer-events"],editorParams:a.editorParams,overlays:a.overlays},this._jsPlumb.lastPaintedAt=null,this.bind("mouseover",function(){this.setHover(!0)}.bind(this)),this.bind("mouseout",function(){this.setHover(!1)}.bind(this)),this.editableRequested=a.editable!==!1,this.setEditable=function(a){return this.connector?this.connector.setEditable(a):!1},this.isEditable=function(){return this.connector?this.connector.isEditable():!1},this.isEditing=function(){return this.connector?this.connector.isEditing():!1},this.makeEndpoint=function(b,c,f,g){return f=f||this._jsPlumb.instance.getId(c),this.prepareEndpoint(e,d,this,g,b?0:1,a,c,f)},a.type&&(a.endpoints=this._jsPlumb.instance.deriveEndpointAndAnchorSpec(a.type).endpoints);var f=this.makeEndpoint(!0,this.source,this.sourceId,a.sourceEndpoint),g=this.makeEndpoint(!1,this.target,this.targetId,a.targetEndpoint);f&&c.addToList(a.endpointsByElement,this.sourceId,f),g&&c.addToList(a.endpointsByElement,this.targetId,g),this.scope||(this.scope=this.endpoints[0].scope),null!=a.deleteEndpointsOnDetach?(this.endpoints[0]._deleteOnDetach=a.deleteEndpointsOnDetach,this.endpoints[1]._deleteOnDetach=a.deleteEndpointsOnDetach):(this.endpoints[0]._doNotDeleteOnDetach||(this.endpoints[0]._deleteOnDetach=!0),this.endpoints[1]._doNotDeleteOnDetach||(this.endpoints[1]._deleteOnDetach=!0));var h=e.Defaults.ConnectionsDetachable;a.detachable===!1&&(h=!1),this.endpoints[0].connectionsDetachable===!1&&(h=!1),this.endpoints[1].connectionsDetachable===!1&&(h=!1);var i=a.reattach||this.endpoints[0].reattachConnections||this.endpoints[1].reattachConnections||e.Defaults.ReattachConnections;this.appendToDefaultType({detachable:h,reattach:i,paintStyle:this.endpoints[0].connectorStyle||this.endpoints[1].connectorStyle||a.paintStyle||e.Defaults.PaintStyle||b.Defaults.PaintStyle,hoverPaintStyle:this.endpoints[0].connectorHoverStyle||this.endpoints[1].connectorHoverStyle||a.hoverPaintStyle||e.Defaults.HoverPaintStyle||b.Defaults.HoverPaintStyle});var j=e.getSuspendedAt();if(!e.isSuspendDrawing()){var k=e.getCachedData(this.sourceId),l=k.o,m=k.s,n=e.getCachedData(this.targetId),o=n.o,p=n.s,q=j||e.timestamp(),r=this.endpoints[0].anchor.compute({xy:[l.left,l.top],wh:m,element:this.endpoints[0],elementId:this.endpoints[0].elementId,txy:[o.left,o.top],twh:p,tElement:this.endpoints[1],timestamp:q});this.endpoints[0].paint({anchorLoc:r,timestamp:q}),r=this.endpoints[1].anchor.compute({xy:[o.left,o.top],wh:p,element:this.endpoints[1],elementId:this.endpoints[1].elementId,txy:[l.left,l.top],twh:m,tElement:this.endpoints[0],timestamp:q}),this.endpoints[1].paint({anchorLoc:r,timestamp:q})}this.getTypeDescriptor=function(){return"connection"},this.getAttachedElements=function(){return this.endpoints},this.isDetachable=function(){return this._jsPlumb.detachable===!0},this.setDetachable=function(a){this._jsPlumb.detachable=a===!0},this.isReattach=function(){return this._jsPlumb.reattach===!0||this.endpoints[0].reattachConnections===!0||this.endpoints[1].reattachConnections===!0},this.setReattach=function(a){this._jsPlumb.reattach=a===!0},this._jsPlumb.cost=a.cost||this.endpoints[0].getConnectionCost(),this._jsPlumb.directed=a.directed,null==a.directed&&(this._jsPlumb.directed=this.endpoints[0].areConnectionsDirected());var s=b.extend({},this.endpoints[1].getParameters());b.extend(s,this.endpoints[0].getParameters()),b.extend(s,this.getParameters()),this.setParameters(s),this.setConnector(this.endpoints[0].connector||this.endpoints[1].connector||a.connector||e.Defaults.Connector||b.Defaults.Connector,!0),a.geometry&&this.connector.setGeometry(a.geometry);var t=null!=a.data&&c.isObject(a.data)?a.data:{};this.getData=function(){return t},this.setData=function(a){t=a||{}},this.mergeData=function(a){t=b.extend(t,a)};var u=["default",this.endpoints[0].connectionType,this.endpoints[1].connectionType,a.type].join(" ");/[^\s]/.test(u)&&this.addType(u,a.data,!0),this.updateConnectedClass()},c.extend(b.Connection,b.OverlayCapableJsPlumbUIComponent,{applyType:function(a,c,d){null!=a.detachable&&this.setDetachable(a.detachable),null!=a.reattach&&this.setReattach(a.reattach),a.scope&&(this.scope=a.scope),null!=a.cssClass&&this.canvas&&this._jsPlumb.instance.addClass(this.canvas,a.cssClass);var e=null;a.anchor?(e=this.getCachedTypeItem("anchors",d.anchor),null==e&&(e=[this._jsPlumb.instance.makeAnchor(a.anchor),this._jsPlumb.instance.makeAnchor(a.anchor)],this.cacheTypeItem("anchors",e,d.anchor))):a.anchors&&(e=this.getCachedTypeItem("anchors",d.anchors),null==e&&(e=[this._jsPlumb.instance.makeAnchor(a.anchors[0]),this._jsPlumb.instance.makeAnchor(a.anchors[1])],this.cacheTypeItem("anchors",e,d.anchors))),null!=e&&(this.endpoints[0].anchor=e[0],this.endpoints[1].anchor=e[1],this.endpoints[1].anchor.isDynamic&&this._jsPlumb.instance.repaint(this.endpoints[1].elementId)),b.OverlayCapableJsPlumbUIComponent.applyType(this,a)},addClass:function(a,b){b&&(this.endpoints[0].addClass(a),this.endpoints[1].addClass(a),this.suspendedEndpoint&&this.suspendedEndpoint.addClass(a)),this.connector&&this.connector.addClass(a)},removeClass:function(a,b){b&&(this.endpoints[0].removeClass(a),this.endpoints[1].removeClass(a),this.suspendedEndpoint&&this.suspendedEndpoint.removeClass(a)),this.connector&&this.connector.removeClass(a)},isVisible:function(){return this._jsPlumb.visible},setVisible:function(a){this._jsPlumb.visible=a,this.connector&&this.connector.setVisible(a),this.repaint()},cleanup:function(){this.updateConnectedClass(!0),this.endpoints=null,this.source=null,this.target=null,null!=this.connector&&(this.connector.cleanup(!0),this.connector.destroy(!0)),this.connector=null},updateConnectedClass:function(a){this._jsPlumb&&(f(this,this.source,this._jsPlumb.instance,a),f(this,this.target,this._jsPlumb.instance,a))},setHover:function(b){this.connector&&this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged()&&(this.connector.setHover(b),a.jsPlumb[b?"addClass":"removeClass"](this.source,this._jsPlumb.instance.hoverSourceClass),a.jsPlumb[b?"addClass":"removeClass"](this.target,this._jsPlumb.instance.hoverTargetClass))},getUuids:function(){return[this.endpoints[0].getUuid(),this.endpoints[1].getUuid()]},getCost:function(){return this._jsPlumb?this._jsPlumb.cost:-1/0},setCost:function(a){this._jsPlumb.cost=a},isDirected:function(){return this._jsPlumb.directed===!0},getConnector:function(){return this.connector},getGeometry:function(){return this.connector?this.connector.getGeometry():null},setGeometry:function(a){this.connector&&this.connector.setGeometry(a)},prepareConnector:function(a,b){var e,f={_jsPlumb:this._jsPlumb.instance,cssClass:(this._jsPlumb.params.cssClass||"")+(this.isEditable()?this._jsPlumb.instance.editableConnectorClass:""),container:this._jsPlumb.params.container,"pointer-events":this._jsPlumb.params["pointer-events"],editable:this.editableRequested},g=this._jsPlumb.instance.getRenderMode();return c.isString(a)?e=d(this._jsPlumb.instance,g,a,f,this):c.isArray(a)&&(e=1==a.length?d(this._jsPlumb.instance,g,a[0],f,this):d(this._jsPlumb.instance,g,a[0],c.merge(a[1],f),this)),null!=b&&(e.typeId=b),e},setPreparedConnector:function(a,b,c,d){var e,f="";if(null!=this.connector&&(e=this.connector,f=e.getClass(),this.connector.cleanup(),this.connector.destroy()),this.connector=a,d&&this.cacheTypeItem("connector",a,d),this.canvas=this.connector.canvas,this.bgCanvas=this.connector.bgCanvas,this.addClass(f),this.canvas&&(this.canvas._jsPlumb=this),this.bgCanvas&&(this.bgCanvas._jsPlumb=this),null!=e)for(var g=this.getOverlays(),h=0;h<g.length;h++)g[h].transfer&&g[h].transfer(this.connector);c||this.setListenerComponent(this.connector),b||this.repaint()},setConnector:function(a,b,c,d){var e=this.prepareConnector(a,d);this.setPreparedConnector(e,b,c,d)},paint:function(a){if(!this._jsPlumb.instance.isSuspendDrawing()&&this._jsPlumb.visible){a=a||{};var b=a.timestamp,c=!1,d=c?this.sourceId:this.targetId,e=c?this.targetId:this.sourceId,f=c?0:1,g=c?1:0;if(null==b||b!=this._jsPlumb.lastPaintedAt){var h=this._jsPlumb.instance.updateOffset({elId:e}).o,i=this._jsPlumb.instance.updateOffset({elId:d}).o,j=this.endpoints[g],k=this.endpoints[f],l=j.anchor.getCurrentLocation({xy:[h.left,h.top],wh:[h.width,h.height],element:j,timestamp:b}),m=k.anchor.getCurrentLocation({xy:[i.left,i.top],wh:[i.width,i.height],element:k,timestamp:b});this.connector.resetBounds(),this.connector.compute({sourcePos:l,targetPos:m,sourceEndpoint:this.endpoints[g],targetEndpoint:this.endpoints[f],"stroke-width":this._jsPlumb.paintStyleInUse.strokeWidth,sourceInfo:h,targetInfo:i});var n={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};for(var o in this._jsPlumb.overlays)if(this._jsPlumb.overlays.hasOwnProperty(o)){var p=this._jsPlumb.overlays[o];p.isVisible()&&(this._jsPlumb.overlayPlacements[o]=p.draw(this.connector,this._jsPlumb.paintStyleInUse,this.getAbsoluteOverlayPosition(p)),n.minX=Math.min(n.minX,this._jsPlumb.overlayPlacements[o].minX),n.maxX=Math.max(n.maxX,this._jsPlumb.overlayPlacements[o].maxX),n.minY=Math.min(n.minY,this._jsPlumb.overlayPlacements[o].minY),n.maxY=Math.max(n.maxY,this._jsPlumb.overlayPlacements[o].maxY))}var q=parseFloat(this._jsPlumb.paintStyleInUse.strokeWidth||1)/2,r=parseFloat(this._jsPlumb.paintStyleInUse.strokeWidth||0),s={xmin:Math.min(this.connector.bounds.minX-(q+r),n.minX),ymin:Math.min(this.connector.bounds.minY-(q+r),n.minY),xmax:Math.max(this.connector.bounds.maxX+(q+r),n.maxX),ymax:Math.max(this.connector.bounds.maxY+(q+r),n.maxY)};this.connector.paint(this._jsPlumb.paintStyleInUse,null,s);for(var t in this._jsPlumb.overlays)if(this._jsPlumb.overlays.hasOwnProperty(t)){var u=this._jsPlumb.overlays[t];u.isVisible()&&u.paint(this._jsPlumb.overlayPlacements[t],s)}}this._jsPlumb.lastPaintedAt=b}},repaint:function(a){a=a||{},this.paint({elId:this.sourceId,recalc:!(a.recalc===!1),timestamp:a.timestamp})},prepareEndpoint:function(a,c,d,f,g,h,i,j){var k;if(f)d.endpoints[g]=f,f.addConnection(d);else{h.endpoints||(h.endpoints=[null,null]);var l=h.endpoints[g]||h.endpoint||a.Defaults.Endpoints[g]||b.Defaults.Endpoints[g]||a.Defaults.Endpoint||b.Defaults.Endpoint;h.endpointStyles||(h.endpointStyles=[null,null]),h.endpointHoverStyles||(h.endpointHoverStyles=[null,null]);var m=h.endpointStyles[g]||h.endpointStyle||a.Defaults.EndpointStyles[g]||b.Defaults.EndpointStyles[g]||a.Defaults.EndpointStyle||b.Defaults.EndpointStyle;null==m.fill&&null!=h.paintStyle&&(m.fill=h.paintStyle.stroke),null==m.outlineStroke&&null!=h.paintStyle&&(m.outlineStroke=h.paintStyle.outlineStroke),null==m.outlineWidth&&null!=h.paintStyle&&(m.outlineWidth=h.paintStyle.outlineWidth);var n=h.endpointHoverStyles[g]||h.endpointHoverStyle||a.Defaults.EndpointHoverStyles[g]||b.Defaults.EndpointHoverStyles[g]||a.Defaults.EndpointHoverStyle||b.Defaults.EndpointHoverStyle;null!=h.hoverPaintStyle&&(null==n&&(n={}),null==n.fill&&(n.fill=h.hoverPaintStyle.stroke));var o=h.anchors?h.anchors[g]:h.anchor?h.anchor:e(a.Defaults.Anchors[g],j,a)||e(b.Defaults.Anchors[g],j,a)||e(a.Defaults.Anchor,j,a)||e(b.Defaults.Anchor,j,a),p=h.uuids?h.uuids[g]:null;k=c({paintStyle:m,hoverPaintStyle:n,endpoint:l,connections:[d],uuid:p,anchor:o,source:i,scope:h.scope,reattach:h.reattach||a.Defaults.ReattachConnections,detachable:h.detachable||a.Defaults.ConnectionsDetachable}),d.endpoints[g]=k,h.drawEndpoints===!1&&k.setVisible(!1,!0,!0)}return k}})}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumbUtil,c=a.jsPlumb;c.AnchorManager=function(a){var d={},e={},f={},g={},h={HORIZONTAL:"horizontal",VERTICAL:"vertical",DIAGONAL:"diagonal",IDENTITY:"identity"},i=["left","top","right","bottom"],j={},k=this,l={},m=a.jsPlumbInstance,n={},o=function(a,b,c,d,e,f){if(a===b)return{orientation:h.IDENTITY,a:["top","top"]};var g=Math.atan2(d.centery-c.centery,d.centerx-c.centerx),j=Math.atan2(c.centery-d.centery,c.centerx-d.centerx),k=[],l={};!function(a,b){for(var c=0;c<a.length;c++)l[a[c]]={left:[b[c].left,b[c].centery],right:[b[c].right,b[c].centery],top:[b[c].centerx,b[c].top],bottom:[b[c].centerx,b[c].bottom]}}(["source","target"],[c,d]);for(var m=0;m<i.length;m++)for(var n=0;n<i.length;n++)k.push({source:i[m],target:i[n],dist:Biltong.lineLength(l.source[i[m]],l.target[i[n]])});
k.sort(function(a,b){return a.dist<b.dist?-1:a.dist>b.dist?1:0});for(var o=k[0].source,p=k[0].target,q=0;q<k.length&&(o=!e.isContinuous||e.isEdgeSupported(k[q].source)?k[q].source:null,p=!f.isContinuous||f.isEdgeSupported(k[q].target)?k[q].target:null,null==o||null==p);q++);return{a:[o,p],theta:g,theta2:j}},p=function(a,b,c,d,e,f,g){for(var h=[],i=b[e?0:1]/(d.length+1),j=0;j<d.length;j++){var k=(j+1)*i,l=f*b[e?1:0];g&&(k=b[e?0:1]-k);var m=e?k:l,n=c[0]+m,o=m/b[0],p=e?l:k,q=c[1]+p,r=p/b[1];h.push([n,q,o,r,d[j][1],d[j][2]])}return h},q=function(a){return function(b,c){var d=!0;return d=a?b[0][0]<c[0][0]:b[0][0]>c[0][0],d===!1?-1:1}},r=function(a,b){var c=a[0][0]<0?-Math.PI-a[0][0]:Math.PI-a[0][0],d=b[0][0]<0?-Math.PI-b[0][0]:Math.PI-b[0][0];return c>d?1:-1},s={top:function(a,b){return a[0]>b[0]?1:-1},right:q(!0),bottom:q(!0),left:r},t=function(a,b){return a.sort(b)},u=function(a,b){var c=m.getCachedData(a),d=c.s,f=c.o,h=function(b,c,d,f,h,i,j){if(f.length>0)for(var k=t(f,s[b]),l="right"===b||"top"===b,m=p(b,c,d,k,h,i,l),n=function(a,b){e[a.id]=[b[0],b[1],b[2],b[3]],g[a.id]=j},o=0;o<m.length;o++){var q=m[o][4],r=q.endpoints[0].elementId===a,u=q.endpoints[1].elementId===a;r&&n(q.endpoints[0],m[o]),u&&n(q.endpoints[1],m[o])}};h("bottom",d,[f.left,f.top],b.bottom,!0,1,[0,1]),h("top",d,[f.left,f.top],b.top,!0,0,[0,-1]),h("left",d,[f.left,f.top],b.left,!1,0,[-1,0]),h("right",d,[f.left,f.top],b.right,!1,1,[1,0])};this.reset=function(){d={},j={},l={}},this.addFloatingConnection=function(a,b){n[a]=b},this.removeFloatingConnection=function(a){delete n[a]},this.newConnection=function(a){var d=a.sourceId,e=a.targetId,f=a.endpoints,g=!0,h=function(h,i,k,l,m){d==e&&k.isContinuous&&(a._jsPlumb.instance.removeElement(f[1].canvas),g=!1),b.addToList(j,l,[m,i,k.constructor==c.DynamicAnchor])};h(0,f[0],f[0].anchor,e,a),g&&h(1,f[1],f[1].anchor,d,a)};var v=function(a){!function(a,c){if(a){var d=function(a){return a[4]==c};b.removeWithFunction(a.top,d),b.removeWithFunction(a.left,d),b.removeWithFunction(a.bottom,d),b.removeWithFunction(a.right,d)}}(l[a.elementId],a.id)};this.connectionDetached=function(a,c){var d=a.connection||a,e=a.sourceId,f=a.targetId,g=d.endpoints,h=function(a,c,d,e,f){b.removeWithFunction(j[e],function(a){return a[0].id==f.id})};h(1,g[1],g[1].anchor,e,d),h(0,g[0],g[0].anchor,f,d),d.floatingId&&(h(d.floatingIndex,d.floatingEndpoint,d.floatingEndpoint.anchor,d.floatingId,d),v(d.floatingEndpoint)),v(d.endpoints[0]),v(d.endpoints[1]),c||(k.redraw(d.sourceId),d.targetId!==d.sourceId&&k.redraw(d.targetId))},this.add=function(a,c){b.addToList(d,c,a)},this.changeId=function(a,b){j[b]=j[a],d[b]=d[a],delete j[a],delete d[a]},this.getConnectionsFor=function(a){return j[a]||[]},this.getEndpointsFor=function(a){return d[a]||[]},this.deleteEndpoint=function(a){b.removeWithFunction(d[a.elementId],function(b){return b.id==a.id}),v(a)},this.clearFor=function(a){delete d[a],d[a]=[]};var w=function(c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q=-1,r=-1,s=f.endpoints[i],t=s.id,u=[1,0][i],v=[[d,e],f,g,h,t],w=c[k],x=s._continuousAnchorEdge?c[s._continuousAnchorEdge]:null;if(x){var y=b.findWithFunction(x,function(a){return a[4]==t});if(-1!=y)for(x.splice(y,1),o=0;o<x.length;o++)p=x[o][1],b.addWithFunction(m,p,function(a){return a.id==p.id}),b.addWithFunction(n,x[o][1].endpoints[i],function(a){return a.id==p.endpoints[i].id}),b.addWithFunction(n,x[o][1].endpoints[u],function(a){return a.id==p.endpoints[u].id})}for(o=0;o<w.length;o++)p=w[o][1],1==a.idx&&w[o][3]===h&&-1==r&&(r=o),b.addWithFunction(m,p,function(a){return a.id==p.id}),b.addWithFunction(n,w[o][1].endpoints[i],function(a){return a.id==p.endpoints[i].id}),b.addWithFunction(n,w[o][1].endpoints[u],function(a){return a.id==p.endpoints[u].id});if(-1!=q)w[q]=v;else{var z=j?-1!=r?r:0:w.length;w.splice(z,0,v)}s._continuousAnchorEdge=k};this.updateOtherEndpoint=function(a,d,e,f){var g=b.findWithFunction(j[a],function(a){return a[0].id===f.id}),h=b.findWithFunction(j[d],function(a){return a[0].id===f.id});-1!=g&&(j[a][g][0]=f,j[a][g][1]=f.endpoints[1],j[a][g][2]=f.endpoints[1].anchor.constructor==c.DynamicAnchor),h>-1&&(j[d].splice(h,1),b.addToList(j,e,[f,f.endpoints[0],f.endpoints[0].anchor.constructor==c.DynamicAnchor])),f.updateConnectedClass()},this.sourceChanged=function(a,d,e,f){if(a!==d){e.sourceId=d,e.source=f,b.removeWithFunction(j[a],function(a){return a[0].id===e.id});var g=b.findWithFunction(j[e.targetId],function(a){return a[0].id===e.id});g>-1&&(j[e.targetId][g][0]=e,j[e.targetId][g][1]=e.endpoints[0],j[e.targetId][g][2]=e.endpoints[0].anchor.constructor==c.DynamicAnchor),b.addToList(j,d,[e,e.endpoints[1],e.endpoints[1].anchor.constructor==c.DynamicAnchor]),e.endpoints[1].anchor.isContinuous&&(e.source===e.target?e._jsPlumb.instance.removeElement(e.endpoints[1].canvas):null==e.endpoints[1].canvas.parentNode&&e._jsPlumb.instance.appendElement(e.endpoints[1].canvas)),e.updateConnectedClass()}},this.rehomeEndpoint=function(a,b,c){var e=d[b]||[],f=m.getId(c);if(f!==b){var g=e.indexOf(a);if(g>-1){var h=e.splice(g,1)[0];k.add(h,f)}}for(var i=0;i<a.connections.length;i++)a.connections[i].sourceId==b?k.sourceChanged(b,a.elementId,a.connections[i],a.element):a.connections[i].targetId==b&&(a.connections[i].targetId=a.elementId,a.connections[i].target=a.element,k.updateOtherEndpoint(a.connections[i].sourceId,b,a.elementId,a.connections[i]))},this.redraw=function(a,e,f,g,h,i){if(!m.isSuspendDrawing()){var k=d[a]||[],p=j[a]||[],q=[],r=[],s=[];f=f||m.timestamp(),g=g||{left:0,top:0},e&&(e={left:e.left+g.left,top:e.top+g.top});for(var t=m.updateOffset({elId:a,offset:e,recalc:!1,timestamp:f}),v={},x=0;x<p.length;x++){var y=p[x][0],z=y.sourceId,A=y.targetId,B=y.endpoints[0].anchor.isContinuous,C=y.endpoints[1].anchor.isContinuous;if(B||C){var D=z+"_"+A,E=v[D],F=y.sourceId==a?1:0;B&&!l[z]&&(l[z]={top:[],right:[],bottom:[],left:[]}),C&&!l[A]&&(l[A]={top:[],right:[],bottom:[],left:[]}),a!=A&&m.updateOffset({elId:A,timestamp:f}),a!=z&&m.updateOffset({elId:z,timestamp:f});var G=m.getCachedData(A),H=m.getCachedData(z);A==z&&(B||C)?(w(l[z],-Math.PI/2,0,y,!1,A,0,!1,"top",z,q,r),w(l[A],-Math.PI/2,0,y,!1,z,1,!1,"top",A,q,r)):(E||(E=o(z,A,H.o,G.o,y.endpoints[0].anchor,y.endpoints[1].anchor),v[D]=E),B&&w(l[z],E.theta,0,y,!1,A,0,!1,E.a[0],z,q,r),C&&w(l[A],E.theta2,-1,y,!0,z,1,!0,E.a[1],A,q,r)),B&&b.addWithFunction(s,z,function(a){return a===z}),C&&b.addWithFunction(s,A,function(a){return a===A}),b.addWithFunction(q,y,function(a){return a.id==y.id}),(B&&0===F||C&&1===F)&&b.addWithFunction(r,y.endpoints[F],function(a){return a.id==y.endpoints[F].id})}}for(x=0;x<k.length;x++)0===k[x].connections.length&&k[x].anchor.isContinuous&&(l[a]||(l[a]={top:[],right:[],bottom:[],left:[]}),w(l[a],-Math.PI/2,0,{endpoints:[k[x],k[x]],paint:function(){}},!1,a,0,!1,k[x].anchor.getDefaultFace(),a,q,r),b.addWithFunction(s,a,function(b){return b===a}));for(x=0;x<s.length;x++)u(s[x],l[s[x]]);for(x=0;x<k.length;x++)k[x].paint({timestamp:f,offset:t,dimensions:t.s,recalc:i!==!0});for(x=0;x<r.length;x++){var I=m.getCachedData(r[x].elementId);r[x].paint({timestamp:f,offset:I,dimensions:I.s})}for(x=0;x<p.length;x++){var J=p[x][1];if(J.anchor.constructor==c.DynamicAnchor){J.paint({elementWithPrecedence:a,timestamp:f}),b.addWithFunction(q,p[x][0],function(a){return a.id==p[x][0].id});for(var K=0;K<J.connections.length;K++)J.connections[K]!==p[x][0]&&b.addWithFunction(q,J.connections[K],function(a){return a.id==J.connections[K].id})}else J.anchor.constructor==c.Anchor&&b.addWithFunction(q,p[x][0],function(a){return a.id==p[x][0].id})}var L=n[a];for(L&&L.paint({timestamp:f,recalc:!1,elId:a}),x=0;x<q.length;x++)q[x].paint({elId:a,timestamp:f,recalc:!1,clearEdits:h})}};var x=function(a){b.EventGenerator.apply(this),this.type="Continuous",this.isDynamic=!0,this.isContinuous=!0;for(var c=a.faces||["top","right","bottom","left"],d=!(a.clockwise===!1),h={},i={top:"bottom",right:"left",left:"right",bottom:"top"},j={top:"right",right:"bottom",left:"top",bottom:"left"},k={top:"left",right:"top",left:"bottom",bottom:"right"},l=d?j:k,m=d?k:j,n=a.cssClass||"",o=0;o<c.length;o++)h[c[o]]=!0;this.getDefaultFace=function(){return 0===c.length?"top":c[0]},this.verifyEdge=function(a){return h[a]?a:h[i[a]]?i[a]:h[l[a]]?l[a]:h[m[a]]?m[a]:a},this.isEdgeSupported=function(a){return h[a]===!0},this.compute=function(a){return f[a.element.id]||e[a.element.id]||[0,0]},this.getCurrentLocation=function(a){return f[a.element.id]||e[a.element.id]||[0,0]},this.getOrientation=function(a){return g[a.id]||[0,0]},this.clearUserDefinedLocation=function(){delete f[a.elementId]},this.setUserDefinedLocation=function(b){f[a.elementId]=b},this.getCssClass=function(){return n}};m.continuousAnchorFactory={get:function(a){return new x(a)},clear:function(a){delete f[a],delete e[a]}}},c.Anchor=function(a){this.x=a.x||0,this.y=a.y||0,this.elementId=a.elementId,this.cssClass=a.cssClass||"",this.userDefinedLocation=null,this.orientation=a.orientation||[0,0],this.lastReturnValue=null,this.offsets=a.offsets||[0,0],this.timestamp=null,b.EventGenerator.apply(this),this.compute=function(a){var b=a.xy,c=a.wh,d=a.timestamp;return a.clearUserDefinedLocation&&(this.userDefinedLocation=null),d&&d===this.timestamp?this.lastReturnValue:(this.lastReturnValue=null!=this.userDefinedLocation?this.userDefinedLocation:[b[0]+this.x*c[0]+this.offsets[0],b[1]+this.y*c[1]+this.offsets[1]],this.timestamp=d,this.lastReturnValue)},this.getCurrentLocation=function(a){return a=a||{},null==this.lastReturnValue||null!=a.timestamp&&this.timestamp!=a.timestamp?this.compute(a):this.lastReturnValue}},b.extend(c.Anchor,b.EventGenerator,{equals:function(a){if(!a)return!1;var b=a.getOrientation(),c=this.getOrientation();return this.x==a.x&&this.y==a.y&&this.offsets[0]==a.offsets[0]&&this.offsets[1]==a.offsets[1]&&c[0]==b[0]&&c[1]==b[1]},getUserDefinedLocation:function(){return this.userDefinedLocation},setUserDefinedLocation:function(a){this.userDefinedLocation=a},clearUserDefinedLocation:function(){this.userDefinedLocation=null},getOrientation:function(){return this.orientation},getCssClass:function(){return this.cssClass}}),c.FloatingAnchor=function(a){c.Anchor.apply(this,arguments);var b=a.reference,d=a.referenceCanvas,e=c.getSize(d),f=0,g=0,h=null,i=null;this.orientation=null,this.x=0,this.y=0,this.isFloating=!0,this.compute=function(a){var b=a.xy,c=[b[0]+e[0]/2,b[1]+e[1]/2];return i=c,c},this.getOrientation=function(a){if(h)return h;var c=b.getOrientation(a);return[-1*Math.abs(c[0])*f,-1*Math.abs(c[1])*g]},this.over=function(a,b){h=a.getOrientation(b)},this.out=function(){h=null},this.getCurrentLocation=function(a){return null==i?this.compute(a):i}},b.extend(c.FloatingAnchor,c.Anchor);var d=function(a,b,d){return a.constructor==c.Anchor?a:b.makeAnchor(a,d,b)};c.DynamicAnchor=function(a){c.Anchor.apply(this,arguments),this.isDynamic=!0,this.anchors=[],this.elementId=a.elementId,this.jsPlumbInstance=a.jsPlumbInstance;for(var b=0;b<a.anchors.length;b++)this.anchors[b]=d(a.anchors[b],this.jsPlumbInstance,this.elementId);this.getAnchors=function(){return this.anchors},this.locked=!1;var e=this.anchors.length>0?this.anchors[0]:null,f=e,g=this,h=function(a,b,c,d,e){var f=d[0]+a.x*e[0],g=d[1]+a.y*e[1],h=d[0]+e[0]/2,i=d[1]+e[1]/2;return Math.sqrt(Math.pow(b-f,2)+Math.pow(c-g,2))+Math.sqrt(Math.pow(h-f,2)+Math.pow(i-g,2))},i=a.selector||function(a,b,c,d,e){for(var f=c[0]+d[0]/2,g=c[1]+d[1]/2,i=-1,j=1/0,k=0;k<e.length;k++){var l=h(e[k],f,g,a,b);j>l&&(i=k+0,j=l)}return e[i]};this.compute=function(a){var b=a.xy,c=a.wh,d=a.txy,h=a.twh;this.timestamp=a.timestamp;var j=g.getUserDefinedLocation();return null!=j?j:this.locked||null==d||null==h?e.compute(a):(a.timestamp=null,e=i(b,c,d,h,this.anchors),this.x=e.x,this.y=e.y,e!=f&&this.fire("anchorChanged",e),f=e,e.compute(a))},this.getCurrentLocation=function(a){return this.getUserDefinedLocation()||(null!=e?e.getCurrentLocation(a):null)},this.getOrientation=function(a){return null!=e?e.getOrientation(a):[0,0]},this.over=function(a,b){null!=e&&e.over(a,b)},this.out=function(){null!=e&&e.out()},this.getCssClass=function(){return e&&e.getCssClass()||""}},b.extend(c.DynamicAnchor,c.Anchor);var e=function(a,b,d,e,f,g){c.Anchors[f]=function(c){var h=c.jsPlumbInstance.makeAnchor([a,b,d,e,0,0],c.elementId,c.jsPlumbInstance);return h.type=f,g&&g(h,c),h}};e(.5,0,0,-1,"TopCenter"),e(.5,1,0,1,"BottomCenter"),e(0,.5,-1,0,"LeftMiddle"),e(1,.5,1,0,"RightMiddle"),e(.5,0,0,-1,"Top"),e(.5,1,0,1,"Bottom"),e(0,.5,-1,0,"Left"),e(1,.5,1,0,"Right"),e(.5,.5,0,0,"Center"),e(1,0,0,-1,"TopRight"),e(1,1,0,1,"BottomRight"),e(0,0,0,-1,"TopLeft"),e(0,1,0,1,"BottomLeft"),c.Defaults.DynamicAnchors=function(a){return a.jsPlumbInstance.makeAnchors(["TopCenter","RightMiddle","BottomCenter","LeftMiddle"],a.elementId,a.jsPlumbInstance)},c.Anchors.AutoDefault=function(a){var b=a.jsPlumbInstance.makeDynamicAnchor(c.Defaults.DynamicAnchors(a));return b.type="AutoDefault",b};var f=function(a,b){c.Anchors[a]=function(c){var d=c.jsPlumbInstance.makeAnchor(["Continuous",{faces:b}],c.elementId,c.jsPlumbInstance);return d.type=a,d}};c.Anchors.Continuous=function(a){return a.jsPlumbInstance.continuousAnchorFactory.get(a)},f("ContinuousLeft",["left"]),f("ContinuousTop",["top"]),f("ContinuousBottom",["bottom"]),f("ContinuousRight",["right"]),e(0,0,0,0,"Assign",function(a,b){var c=b.position||"Fixed";a.positionFinder=c.constructor==String?b.jsPlumbInstance.AnchorPositionFinders[c]:c,a.constructorParams=b}),a.jsPlumbInstance.prototype.AnchorPositionFinders={Fixed:function(a,b,c){return[(a.left-b.left)/c[0],(a.top-b.top)/c[1]]},Grid:function(a,b,c,d){var e=a.left-b.left,f=a.top-b.top,g=c[0]/d.grid[0],h=c[1]/d.grid[1],i=Math.floor(e/g),j=Math.floor(f/h);return[(i*g+g/2)/c[0],(j*h+h/2)/c[1]]}},c.Anchors.Perimeter=function(a){a=a||{};var b=a.anchorCount||60,c=a.shape;if(!c)throw new Error("no shape supplied to Perimeter Anchor type");var d=function(){for(var a=.5,c=2*Math.PI/b,d=0,e=[],f=0;b>f;f++){var g=a+a*Math.sin(d),h=a+a*Math.cos(d);e.push([g,h,0,0]),d+=c}return e},e=function(a){for(var c=b/a.length,d=[],e=function(a,e,f,g,h){c=b*h;for(var i=(f-a)/c,j=(g-e)/c,k=0;c>k;k++)d.push([a+i*k,e+j*k,0,0])},f=0;f<a.length;f++)e.apply(null,a[f]);return d},f=function(a){for(var b=[],c=0;c<a.length;c++)b.push([a[c][0],a[c][1],a[c][2],a[c][3],1/a.length]);return e(b)},g=function(){return f([[0,0,1,0],[1,0,1,1],[1,1,0,1],[0,1,0,0]])},h={Circle:d,Ellipse:d,Diamond:function(){return f([[.5,0,1,.5],[1,.5,.5,1],[.5,1,0,.5],[0,.5,.5,0]])},Rectangle:g,Square:g,Triangle:function(){return f([[.5,0,1,1],[1,1,0,1],[0,1,.5,0]])},Path:function(a){for(var b=a.points,c=[],d=0,f=0;f<b.length-1;f++){var g=Math.sqrt(Math.pow(b[f][2]-b[f][0])+Math.pow(b[f][3]-b[f][1]));d+=g,c.push([b[f][0],b[f][1],b[f+1][0],b[f+1][1],g])}for(var h=0;h<c.length;h++)c[h][4]=c[h][4]/d;return e(c)}},i=function(a,b){for(var c=[],d=b/180*Math.PI,e=0;e<a.length;e++){var f=a[e][0]-.5,g=a[e][1]-.5;c.push([.5+(f*Math.cos(d)-g*Math.sin(d)),.5+(f*Math.sin(d)+g*Math.cos(d)),a[e][2],a[e][3]])}return c};if(!h[c])throw new Error("Shape ["+c+"] is unknown by Perimeter Anchor type");var j=h[c](a);a.rotation&&(j=i(j,a.rotation));var k=a.jsPlumbInstance.makeDynamicAnchor(j);return k.type="Perimeter",k}}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d=a.Biltong;b.Segments={AbstractSegment:function(a){this.params=a,this.findClosestPointOnPath=function(){return{d:1/0,x:null,y:null,l:null}},this.getBounds=function(){return{minX:Math.min(a.x1,a.x2),minY:Math.min(a.y1,a.y2),maxX:Math.max(a.x1,a.x2),maxY:Math.max(a.y1,a.y2)}}},Straight:function(a){var c,e,f,g,h,i,j,k=(b.Segments.AbstractSegment.apply(this,arguments),function(){c=Math.sqrt(Math.pow(h-g,2)+Math.pow(j-i,2)),e=d.gradient({x:g,y:i},{x:h,y:j}),f=-1/e});this.type="Straight",this.getLength=function(){return c},this.getGradient=function(){return e},this.getCoordinates=function(){return{x1:g,y1:i,x2:h,y2:j}},this.setCoordinates=function(a){g=a.x1,i=a.y1,h=a.x2,j=a.y2,k()},this.setCoordinates({x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2}),this.getBounds=function(){return{minX:Math.min(g,h),minY:Math.min(i,j),maxX:Math.max(g,h),maxY:Math.max(i,j)}},this.pointOnPath=function(a,b){if(0!==a||b){if(1!=a||b){var e=b?a>0?a:c+a:a*c;return d.pointOnLine({x:g,y:i},{x:h,y:j},e)}return{x:h,y:j}}return{x:g,y:i}},this.gradientAtPoint=function(){return e},this.pointAlongPathFrom=function(a,b,c){var e=this.pointOnPath(a,c),f=0>=b?{x:g,y:i}:{x:h,y:j};return 0>=b&&Math.abs(b)>1&&(b*=-1),d.pointOnLine(e,f,b)};var l=function(a,b,c){return c>=Math.min(a,b)&&c<=Math.max(a,b)},m=function(a,b,c){return Math.abs(c-a)<Math.abs(c-b)?a:b};this.findClosestPointOnPath=function(a,b){var k={d:1/0,x:null,y:null,l:null,x1:g,x2:h,y1:i,y2:j};if(0===e)k.y=i,k.x=l(g,h,a)?a:m(g,h,a);else if(1/0==e||e==-1/0)k.x=g,k.y=l(i,j,b)?b:m(i,j,b);else{var n=i-e*g,o=b-f*a,p=(o-n)/(e-f),q=e*p+n;k.x=l(g,h,p)?p:m(g,h,p),k.y=l(i,j,q)?q:m(i,j,q)}var r=d.lineLength([k.x,k.y],[g,i]);return k.d=d.lineLength([a,b],[k.x,k.y]),k.l=r/c,k}},Arc:function(a){var c=(b.Segments.AbstractSegment.apply(this,arguments),function(b,c){return d.theta([a.cx,a.cy],[b,c])}),e=function(a,b){if(a.anticlockwise){var c=a.startAngle<a.endAngle?a.startAngle+f:a.startAngle,d=Math.abs(c-a.endAngle);return c-d*b}var e=a.endAngle<a.startAngle?a.endAngle+f:a.endAngle,g=Math.abs(e-a.startAngle);return a.startAngle+g*b},f=2*Math.PI;this.radius=a.r,this.anticlockwise=a.ac,this.type="Arc",a.startAngle&&a.endAngle?(this.startAngle=a.startAngle,this.endAngle=a.endAngle,this.x1=a.cx+this.radius*Math.cos(a.startAngle),this.y1=a.cy+this.radius*Math.sin(a.startAngle),this.x2=a.cx+this.radius*Math.cos(a.endAngle),this.y2=a.cy+this.radius*Math.sin(a.endAngle)):(this.startAngle=c(a.x1,a.y1),this.endAngle=c(a.x2,a.y2),this.x1=a.x1,this.y1=a.y1,this.x2=a.x2,this.y2=a.y2),this.endAngle<0&&(this.endAngle+=f),this.startAngle<0&&(this.startAngle+=f);var g=this.endAngle<this.startAngle?this.endAngle+f:this.endAngle;this.sweep=Math.abs(g-this.startAngle),this.anticlockwise&&(this.sweep=f-this.sweep);var h=2*Math.PI*this.radius,i=this.sweep/f,j=h*i;this.getLength=function(){return j},this.getBounds=function(){return{minX:a.cx-a.r,maxX:a.cx+a.r,minY:a.cy-a.r,maxY:a.cy+a.r}};var k=1e-10,l=function(a){var b=Math.floor(a),c=Math.ceil(a);return k>a-b?b:k>c-a?c:a};this.pointOnPath=function(b,c){if(0===b)return{x:this.x1,y:this.y1,theta:this.startAngle};if(1==b)return{x:this.x2,y:this.y2,theta:this.endAngle};c&&(b/=j);var d=e(this,b),f=a.cx+a.r*Math.cos(d),g=a.cy+a.r*Math.sin(d);return{x:l(f),y:l(g),theta:d}},this.gradientAtPoint=function(b,c){var e=this.pointOnPath(b,c),f=d.normal([a.cx,a.cy],[e.x,e.y]);return this.anticlockwise||1/0!=f&&f!=-1/0||(f*=-1),f},this.pointAlongPathFrom=function(b,c,d){var e=this.pointOnPath(b,d),f=2*(c/h)*Math.PI,g=this.anticlockwise?-1:1,i=e.theta+g*f,j=a.cx+this.radius*Math.cos(i),k=a.cy+this.radius*Math.sin(i);return{x:j,y:k}}},Bezier:function(c){this.curve=[{x:c.x1,y:c.y1},{x:c.cp1x,y:c.cp1y},{x:c.cp2x,y:c.cp2y},{x:c.x2,y:c.y2}],b.Segments.AbstractSegment.apply(this,arguments),this.bounds={minX:Math.min(c.x1,c.x2,c.cp1x,c.cp2x),minY:Math.min(c.y1,c.y2,c.cp1y,c.cp2y),maxX:Math.max(c.x1,c.x2,c.cp1x,c.cp2x),maxY:Math.max(c.y1,c.y2,c.cp1y,c.cp2y)},this.type="Bezier";var d=function(b,c,d){return d&&(c=a.jsBezier.locationAlongCurveFrom(b,c>0?0:1,c)),c};this.pointOnPath=function(b,c){return b=d(this.curve,b,c),a.jsBezier.pointOnCurve(this.curve,b)},this.gradientAtPoint=function(b,c){return b=d(this.curve,b,c),a.jsBezier.gradientAtPoint(this.curve,b)},this.pointAlongPathFrom=function(b,c,e){return b=d(this.curve,b,e),a.jsBezier.pointAlongCurveFrom(this.curve,b,c)},this.getLength=function(){return a.jsBezier.getLength(this.curve)},this.getBounds=function(){return this.bounds}}},b.SegmentRenderer={getPath:function(a){return{Straight:function(){var b=a.getCoordinates();return"M "+b.x1+" "+b.y1+" L "+b.x2+" "+b.y2},Bezier:function(){var b=a.params;return"M "+b.x1+" "+b.y1+" C "+b.cp1x+" "+b.cp1y+" "+b.cp2x+" "+b.cp2y+" "+b.x2+" "+b.y2},Arc:function(){var b=a.params,c=a.sweep>Math.PI?1:0,d=a.anticlockwise?0:1;return"M"+a.x1+" "+a.y1+" A "+a.radius+" "+b.r+" 0 "+c+","+d+" "+a.x2+" "+a.y2}}[a.type]()}};var e=function(){this.resetBounds=function(){this.bounds={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}},this.resetBounds()};b.Connectors.AbstractConnector=function(a){e.apply(this,arguments);var f=[],g=0,h=[],i=[],j=a.stub||0,k=c.isArray(j)?j[0]:j,l=c.isArray(j)?j[1]:j,m=a.gap||0,n=c.isArray(m)?m[0]:m,o=c.isArray(m)?m[1]:m,p=null,q=!1,r=null,s=null,t=a.editable!==!1&&null!=b.ConnectorEditors&&null!=b.ConnectorEditors[this.type],u=this.setGeometry=function(a,b){q=!b,s=a},v=this.getGeometry=function(){return s};this.getPathData=function(){for(var a="",c=0;c<f.length;c++)a+=b.SegmentRenderer.getPath(f[c]),a+=" ";return a},this.hasBeenEdited=function(){return q},this.isEditing=function(){return null!=this.editor&&this.editor.isActive()},this.setEditable=function(a){return t=a&&null!=b.ConnectorEditors&&null!=b.ConnectorEditors[this.type]&&(null==this.overrideSetEditable||this.overrideSetEditable())?a:!1},this.isEditable=function(){return t},this.findSegmentForPoint=function(a,b){for(var c={d:1/0,s:null,x:null,y:null,l:null},d=0;d<f.length;d++){var e=f[d].findClosestPointOnPath(a,b);e.d<c.d&&(c.d=e.d,c.l=e.l,c.x=e.x,c.y=e.y,c.s=f[d],c.x1=e.x1,c.x2=e.x2,c.y1=e.y1,c.y2=e.y2,c.index=d)}return c};var w=function(){for(var a=0,b=0;b<f.length;b++){var c=f[b].getLength();i[b]=c/g,h[b]=[a,a+=c/g]}},x=function(a,b){b&&(a=a>0?a/g:(g+a)/g);for(var c=h.length-1,d=1,e=0;e<h.length;e++)if(h[e][1]>=a){c=e,d=1==a?1:0===a?0:(a-h[e][0])/i[e];break}return{segment:f[c],proportion:d,index:c}},y=function(a,c,d){if(d.x1!=d.x2||d.y1!=d.y2){var e=new b.Segments[c](d);f.push(e),g+=e.getLength(),a.updateBounds(e)}},z=function(){g=f.length=h.length=i.length=0};this.setSegments=function(a){p=[],g=0;for(var b=0;b<a.length;b++)p.push(a[b]),g+=a[b].getLength()},this.getLength=function(){return g};var A=function(a){this.strokeWidth=a.strokeWidth;var b=d.quadrant(a.sourcePos,a.targetPos),c=a.targetPos[0]<a.sourcePos[0],e=a.targetPos[1]<a.sourcePos[1],f=a.strokeWidth||1,g=a.sourceEndpoint.anchor.getOrientation(a.sourceEndpoint),h=a.targetEndpoint.anchor.getOrientation(a.targetEndpoint),i=c?a.targetPos[0]:a.sourcePos[0],j=e?a.targetPos[1]:a.sourcePos[1],m=Math.abs(a.targetPos[0]-a.sourcePos[0]),p=Math.abs(a.targetPos[1]-a.sourcePos[1]);if(0===g[0]&&0===g[1]||0===h[0]&&0===h[1]){var q=m>p?0:1,r=[1,0][q];g=[],h=[],g[q]=a.sourcePos[q]>a.targetPos[q]?-1:1,h[q]=a.sourcePos[q]>a.targetPos[q]?1:-1,g[r]=0,h[r]=0}var s=c?m+n*g[0]:n*g[0],t=e?p+n*g[1]:n*g[1],u=c?o*h[0]:m+o*h[0],v=e?o*h[1]:p+o*h[1],w=g[0]*h[0]+g[1]*h[1],x={sx:s,sy:t,tx:u,ty:v,lw:f,xSpan:Math.abs(u-s),ySpan:Math.abs(v-t),mx:(s+u)/2,my:(t+v)/2,so:g,to:h,x:i,y:j,w:m,h:p,segment:b,startStubX:s+g[0]*k,startStubY:t+g[1]*k,endStubX:u+h[0]*l,endStubY:v+h[1]*l,isXGreaterThanStubTimes2:Math.abs(s-u)>k+l,isYGreaterThanStubTimes2:Math.abs(t-v)>k+l,opposite:-1==w,perpendicular:0===w,orthogonal:1==w,sourceAxis:0===g[0]?"y":"x",points:[i,j,m,p,s,t,u,v]};return x.anchorOrientation=x.opposite?"opposite":x.orthogonal?"orthogonal":"perpendicular",x};return this.getSegments=function(){return f},this.updateBounds=function(a){var b=a.getBounds();this.bounds.minX=Math.min(this.bounds.minX,b.minX),this.bounds.maxX=Math.max(this.bounds.maxX,b.maxX),this.bounds.minY=Math.min(this.bounds.minY,b.minY),this.bounds.maxY=Math.max(this.bounds.maxY,b.maxY)},this.pointOnPath=function(a,b){var c=x(a,b);return c.segment&&c.segment.pointOnPath(c.proportion,!1)||[0,0]},this.gradientAtPoint=function(a,b){var c=x(a,b);return c.segment&&c.segment.gradientAtPoint(c.proportion,!1)||0},this.pointAlongPathFrom=function(a,b,c){var d=x(a,c);return d.segment&&d.segment.pointAlongPathFrom(d.proportion,b,!1)||[0,0]},this.compute=function(a){r=A.call(this,a),z(),this._compute(r,a),this.x=r.points[0],this.y=r.points[1],this.w=r.points[2],this.h=r.points[3],this.segment=r.segment,w()},{addSegment:y,prepareCompute:A,sourceStub:k,targetStub:l,maxStub:Math.max(k,l),sourceGap:n,targetGap:o,maxGap:Math.max(n,o),setGeometry:u,getGeometry:v}},c.extend(b.Connectors.AbstractConnector,e),b.Endpoints.AbstractEndpoint=function(a){e.apply(this,arguments);var b=this.compute=function(){var a=this._compute.apply(this,arguments);return this.x=a[0],this.y=a[1],this.w=a[2],this.h=a[3],this.bounds.minX=this.x,this.bounds.minY=this.y,this.bounds.maxX=this.x+this.w,this.bounds.maxY=this.y+this.h,a};return{compute:b,cssClass:a.cssClass}},c.extend(b.Endpoints.AbstractEndpoint,e),b.Endpoints.Dot=function(a){this.type="Dot",b.Endpoints.AbstractEndpoint.apply(this,arguments),a=a||{},this.radius=a.radius||10,this.defaultOffset=.5*this.radius,this.defaultInnerRadius=this.radius/3,this._compute=function(a,b,c){this.radius=c.radius||this.radius;var d=a[0]-this.radius,e=a[1]-this.radius,f=2*this.radius,g=2*this.radius;if(c.stroke){var h=c.strokeWidth||1;d-=h,e-=h,f+=2*h,g+=2*h}return[d,e,f,g,this.radius]}},c.extend(b.Endpoints.Dot,b.Endpoints.AbstractEndpoint),b.Endpoints.Rectangle=function(a){this.type="Rectangle",b.Endpoints.AbstractEndpoint.apply(this,arguments),a=a||{},this.width=a.width||20,this.height=a.height||20,this._compute=function(a,b,c){var d=c.width||this.width,e=c.height||this.height,f=a[0]-d/2,g=a[1]-e/2;return[f,g,d,e]}},c.extend(b.Endpoints.Rectangle,b.Endpoints.AbstractEndpoint);var f=function(){b.jsPlumbUIComponent.apply(this,arguments),this._jsPlumb.displayElements=[]};c.extend(f,b.jsPlumbUIComponent,{getDisplayElements:function(){return this._jsPlumb.displayElements},appendDisplayElement:function(a){this._jsPlumb.displayElements.push(a)}}),b.Endpoints.Image=function(d){this.type="Image",f.apply(this,arguments),b.Endpoints.AbstractEndpoint.apply(this,arguments);var e=d.onload,g=d.src||d.url,h=d.cssClass?" "+d.cssClass:"";this._jsPlumb.img=new Image,this._jsPlumb.ready=!1,this._jsPlumb.initialized=!1,this._jsPlumb.deleted=!1,this._jsPlumb.widthToUse=d.width,this._jsPlumb.heightToUse=d.height,this._jsPlumb.endpoint=d.endpoint,this._jsPlumb.img.onload=function(){null!=this._jsPlumb&&(this._jsPlumb.ready=!0,this._jsPlumb.widthToUse=this._jsPlumb.widthToUse||this._jsPlumb.img.width,this._jsPlumb.heightToUse=this._jsPlumb.heightToUse||this._jsPlumb.img.height,e&&e(this))}.bind(this),this._jsPlumb.endpoint.setImage=function(a,b){var c=a.constructor==String?a:a.src;e=b,this._jsPlumb.img.src=c,null!=this.canvas&&this.canvas.setAttribute("src",this._jsPlumb.img.src)}.bind(this),this._jsPlumb.endpoint.setImage(g,e),this._compute=function(a){return this.anchorPoint=a,this._jsPlumb.ready?[a[0]-this._jsPlumb.widthToUse/2,a[1]-this._jsPlumb.heightToUse/2,this._jsPlumb.widthToUse,this._jsPlumb.heightToUse]:[0,0,0,0]},this.canvas=b.createElement("img",{position:"absolute",margin:0,padding:0,outline:0},this._jsPlumb.instance.endpointClass+h),this._jsPlumb.widthToUse&&this.canvas.setAttribute("width",this._jsPlumb.widthToUse),this._jsPlumb.heightToUse&&this.canvas.setAttribute("height",this._jsPlumb.heightToUse),this._jsPlumb.instance.appendElement(this.canvas),this.actuallyPaint=function(){if(!this._jsPlumb.deleted){this._jsPlumb.initialized||(this.canvas.setAttribute("src",this._jsPlumb.img.src),this.appendDisplayElement(this.canvas),this._jsPlumb.initialized=!0);var a=this.anchorPoint[0]-this._jsPlumb.widthToUse/2,b=this.anchorPoint[1]-this._jsPlumb.heightToUse/2;c.sizeElement(this.canvas,a,b,this._jsPlumb.widthToUse,this._jsPlumb.heightToUse)}},this.paint=function(b,c){null!=this._jsPlumb&&(this._jsPlumb.ready?this.actuallyPaint(b,c):a.setTimeout(function(){this.paint(b,c)}.bind(this),200))}},c.extend(b.Endpoints.Image,[f,b.Endpoints.AbstractEndpoint],{cleanup:function(a){a&&(this._jsPlumb.deleted=!0,this.canvas&&this.canvas.parentNode.removeChild(this.canvas),this.canvas=null)}}),b.Endpoints.Blank=function(a){b.Endpoints.AbstractEndpoint.apply(this,arguments),this.type="Blank",f.apply(this,arguments),this._compute=function(a){return[a[0],a[1],10,0]};var d=a.cssClass?" "+a.cssClass:"";this.canvas=b.createElement("div",{display:"block",width:"1px",height:"1px",background:"transparent",position:"absolute"},this._jsPlumb.instance.endpointClass+d),this._jsPlumb.instance.appendElement(this.canvas),this.paint=function(){c.sizeElement(this.canvas,this.x,this.y,this.w,this.h)}},c.extend(b.Endpoints.Blank,[b.Endpoints.AbstractEndpoint,f],{cleanup:function(){this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}}),b.Endpoints.Triangle=function(a){this.type="Triangle",b.Endpoints.AbstractEndpoint.apply(this,arguments),a=a||{},a.width=a.width||55,a.height=a.height||55,this.width=a.width,this.height=a.height,this._compute=function(a,b,c){var d=c.width||self.width,e=c.height||self.height,f=a[0]-d/2,g=a[1]-e/2;return[f,g,d,e]}};var g=b.Overlays.AbstractOverlay=function(a){this.visible=!0,this.isAppendedAtTopLevel=!0,this.component=a.component,this.loc=null==a.location?.5:a.location,this.endpointLoc=null==a.endpointLocation?[.5,.5]:a.endpointLocation,this.visible=a.visible!==!1};g.prototype={cleanup:function(a){a&&(this.component=null,this.canvas=null,this.endpointLoc=null)},reattach:function(){},setVisible:function(a){this.visible=a,this.component.repaint()},isVisible:function(){return this.visible},hide:function(){this.setVisible(!1)},show:function(){this.setVisible(!0)},incrementLocation:function(a){this.loc+=a,this.component.repaint()},setLocation:function(a){this.loc=a,this.component.repaint()},getLocation:function(){return this.loc},updateFrom:function(){}},b.Overlays.Arrow=function(a){this.type="Arrow",g.apply(this,arguments),this.isAppendedAtTopLevel=!1,a=a||{},this.length=a.length||20,this.width=a.width||20,this.id=a.id;var e=(a.direction||1)<0?-1:1,f=a.paintStyle||{"stroke-width":1},h=a.foldback||.623;this.computeMaxSize=function(){return 1.5*self.width},this.elementCreated=function(c){if(this.path=c,a.events)for(var d in a.events)b.on(c,d,a.events[d])},this.draw=function(a,b){var g,i,j,k,l;if(a.pointAlongPathFrom){if(c.isString(this.loc)||this.loc>1||this.loc<0){var m=parseInt(this.loc,10),n=this.loc<0?1:0;g=a.pointAlongPathFrom(n,m,!1),i=a.pointAlongPathFrom(n,m-e*this.length/2,!1),j=d.pointOnLine(g,i,this.length)}else if(1==this.loc){if(g=a.pointOnPath(this.loc),i=a.pointAlongPathFrom(this.loc,-this.length),j=d.pointOnLine(g,i,this.length),-1==e){var o=j;j=g,g=o}}else if(0===this.loc){if(j=a.pointOnPath(this.loc),i=a.pointAlongPathFrom(this.loc,this.length),g=d.pointOnLine(j,i,this.length),-1==e){var p=j;j=g,g=p}}else g=a.pointAlongPathFrom(this.loc,e*this.length/2),i=a.pointOnPath(this.loc),j=d.pointOnLine(g,i,this.length);k=d.perpendicularLineTo(g,j,this.width),l=d.pointOnLine(g,j,h*this.length);var q={hxy:g,tail:k,cxy:l},r=f.stroke||b.stroke,s=f.fill||b.stroke,t=f.strokeWidth||b.strokeWidth;return{component:a,d:q,"stroke-width":t,stroke:r,fill:s,minX:Math.min(g.x,k[0].x,k[1].x),maxX:Math.max(g.x,k[0].x,k[1].x),minY:Math.min(g.y,k[0].y,k[1].y),maxY:Math.max(g.y,k[0].y,k[1].y)}}return{component:a,minX:0,maxX:0,minY:0,maxY:0}}},c.extend(b.Overlays.Arrow,g,{updateFrom:function(a){this.length=a.length||this.length,this.width=a.width||this.width,this.direction=null!=a.direction?a.direction:this.direction,this.foldback=a.foldback||this.foldback}}),b.Overlays.PlainArrow=function(a){a=a||{};var c=b.extend(a,{foldback:1});b.Overlays.Arrow.call(this,c),this.type="PlainArrow"},c.extend(b.Overlays.PlainArrow,b.Overlays.Arrow),b.Overlays.Diamond=function(a){a=a||{};var c=a.length||40,d=b.extend(a,{length:c/2,foldback:2});b.Overlays.Arrow.call(this,d),this.type="Diamond"},c.extend(b.Overlays.Diamond,b.Overlays.Arrow);var h=function(a,b){return(null==a._jsPlumb.cachedDimensions||b)&&(a._jsPlumb.cachedDimensions=a.getDimensions()),a._jsPlumb.cachedDimensions},i=function(a){b.jsPlumbUIComponent.apply(this,arguments),g.apply(this,arguments);var d=this.fire;this.fire=function(){d.apply(this,arguments),this.component&&this.component.fire.apply(this.component,arguments)
},this.detached=!1,this.id=a.id,this._jsPlumb.div=null,this._jsPlumb.initialised=!1,this._jsPlumb.component=a.component,this._jsPlumb.cachedDimensions=null,this._jsPlumb.create=a.create,this._jsPlumb.initiallyInvisible=a.visible===!1,this.getElement=function(){if(null==this._jsPlumb.div){var c=this._jsPlumb.div=b.getElement(this._jsPlumb.create(this._jsPlumb.component));c.style.position="absolute",c.className=this._jsPlumb.instance.overlayClass+" "+(this.cssClass?this.cssClass:a.cssClass?a.cssClass:""),this._jsPlumb.instance.appendElement(c),this._jsPlumb.instance.getId(c),this.canvas=c;var d="translate(-50%, -50%)";c.style.webkitTransform=d,c.style.mozTransform=d,c.style.msTransform=d,c.style.oTransform=d,c.style.transform=d,c._jsPlumb=this,a.visible===!1&&(c.style.display="none")}return this._jsPlumb.div},this.draw=function(a,b,d){var e=h(this);if(null!=e&&2==e.length){var f={x:0,y:0};if(d)f={x:d[0],y:d[1]};else if(a.pointOnPath){var g=this.loc,i=!1;(c.isString(this.loc)||this.loc<0||this.loc>1)&&(g=parseInt(this.loc,10),i=!0),f=a.pointOnPath(g,i)}else{var j=this.loc.constructor==Array?this.loc:this.endpointLoc;f={x:j[0]*a.w,y:j[1]*a.h}}var k=f.x-e[0]/2,l=f.y-e[1]/2;return{component:a,d:{minx:k,miny:l,td:e,cxy:f},minX:k,maxX:k+e[0],minY:l,maxY:l+e[1]}}return{minX:0,maxX:0,minY:0,maxY:0}}};c.extend(i,[b.jsPlumbUIComponent,g],{getDimensions:function(){return[1,1]},setVisible:function(a){this._jsPlumb.div&&(this._jsPlumb.div.style.display=a?"block":"none",a&&this._jsPlumb.initiallyInvisible&&(h(this,!0),this.component.repaint(),this._jsPlumb.initiallyInvisible=!1))},clearCachedDimensions:function(){this._jsPlumb.cachedDimensions=null},cleanup:function(a){a?null!=this._jsPlumb.div&&(this._jsPlumb.div._jsPlumb=null,this._jsPlumb.instance.removeElement(this._jsPlumb.div)):(this._jsPlumb&&this._jsPlumb.div&&this._jsPlumb.div.parentNode&&this._jsPlumb.div.parentNode.removeChild(this._jsPlumb.div),this.detached=!0)},reattach:function(a){null!=this._jsPlumb.div&&a.getContainer().appendChild(this._jsPlumb.div),this.detached=!1},computeMaxSize:function(){var a=h(this);return Math.max(a[0],a[1])},paint:function(a){this._jsPlumb.initialised||(this.getElement(),a.component.appendDisplayElement(this._jsPlumb.div),this._jsPlumb.initialised=!0,this.detached&&this._jsPlumb.div.parentNode.removeChild(this._jsPlumb.div)),this._jsPlumb.div.style.left=a.component.x+a.d.minx+"px",this._jsPlumb.div.style.top=a.component.y+a.d.miny+"px"}}),b.Overlays.Custom=function(){this.type="Custom",i.apply(this,arguments)},c.extend(b.Overlays.Custom,i),b.Overlays.GuideLines=function(){var a=this;a.length=50,a.strokeWidth=5,this.type="GuideLines",g.apply(this,arguments),b.jsPlumbUIComponent.apply(this,arguments),this.draw=function(b){var c=b.pointAlongPathFrom(a.loc,a.length/2),e=b.pointOnPath(a.loc),f=d.pointOnLine(c,e,a.length),g=d.perpendicularLineTo(c,f,40),h=d.perpendicularLineTo(f,c,20);return{connector:b,head:c,tail:f,headLine:h,tailLine:g,minX:Math.min(c.x,f.x,h[0].x,h[1].x),minY:Math.min(c.y,f.y,h[0].y,h[1].y),maxX:Math.max(c.x,f.x,h[0].x,h[1].x),maxY:Math.max(c.y,f.y,h[0].y,h[1].y)}}},b.Overlays.Label=function(a){this.labelStyle=a.labelStyle,this.cssClass=null!=this.labelStyle?this.labelStyle.cssClass:null;var c=b.extend({create:function(){return b.createElement("div")}},a);if(b.Overlays.Custom.call(this,c),this.type="Label",this.label=a.label||"",this.labelText=null,this.labelStyle){var d=this.getElement();if(this.labelStyle.font=this.labelStyle.font||"12px sans-serif",d.style.font=this.labelStyle.font,d.style.color=this.labelStyle.color||"black",this.labelStyle.fill&&(d.style.background=this.labelStyle.fill),this.labelStyle.borderWidth>0){var e=this.labelStyle.borderStyle?this.labelStyle.borderStyle:"black";d.style.border=this.labelStyle.borderWidth+"px solid "+e}this.labelStyle.padding&&(d.style.padding=this.labelStyle.padding)}},c.extend(b.Overlays.Label,b.Overlays.Custom,{cleanup:function(a){a&&(this.div=null,this.label=null,this.labelText=null,this.cssClass=null,this.labelStyle=null)},getLabel:function(){return this.label},setLabel:function(a){this.label=a,this.labelText=null,this.clearCachedDimensions(),this.update(),this.component.repaint()},getDimensions:function(){return this.update(),i.prototype.getDimensions.apply(this,arguments)},update:function(){if("function"==typeof this.label){var a=this.label(this);this.getElement().innerHTML=a.replace(/\r\n/g,"<br/>")}else null==this.labelText&&(this.labelText=this.label,this.getElement().innerHTML=this.labelText.replace(/\r\n/g,"<br/>"))},updateFrom:function(a){null!=a.label&&this.setLabel(a.label)}})}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=function(b){var c=b._mottle;return c||(c=b._mottle=new a.Mottle),c};b.extend(a.jsPlumbInstance.prototype,{getEventManager:function(){return c(this)},on:function(){return this.getEventManager().on.apply(this,arguments),this},off:function(){return this.getEventManager().off.apply(this,arguments),this}})}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumbUtil,c=a.jsPlumbInstance,d="jtk-group-collapsed",e="jtk-group-expanded",f="[jtk-group-content]",g="elementDraggable",h="stop",i="revert",j="_groupManager",k="_jsPlumbGroup",l="_jsPlumbGroupDrag",m="group:addMember",n="group:removeMember",o="group:add",p="group:remove",q="group:expand",r="group:collapse",s=function(a){function c(a){delete a.proxies;var c,d=i[a.id];null!=d&&(c=function(b){return b.id===a.id},b.removeWithFunction(d.connections.source,c),b.removeWithFunction(d.connections.target,c),delete i[a.id]),d=j[a.id],null!=d&&(c=function(b){return b.id===a.id},b.removeWithFunction(d.connections.source,c),b.removeWithFunction(d.connections.target,c),delete j[a.id])}function f(b,c){for(var d=b.getMembers(),e=0;e<d.length;e++)a[c?"show":"hide"](d[e],!0)}function g(b){var c=b.getMembers(),d=a.getConnections({source:c},!0),e=a.getConnections({target:c},!0),f={};b.connections.source.length=0,b.connections.target.length=0;var g=function(a){for(var c=0;c<a.length;c++)f[a[c].id]||(f[a[c].id]=!0,a[c].source._jsPlumbGroup===b?(a[c].target._jsPlumbGroup!==b&&b.connections.source.push(a[c]),i[a[c].id]=b):a[c].target._jsPlumbGroup===b&&(b.connections.target.push(a[c]),j[a[c].id]=b))};g(d),g(e)}var h={},i={},j={},l=this;a.bind("connection",function(a){null!=a.source[k]&&null!=a.target[k]&&a.source[k]===a.target[k]?(i[a.connection.id]=a.source[k],j[a.connection.id]=a.source[k]):(null!=a.source[k]&&(b.suggest(a.source[k].connections.source,a.connection),i[a.connection.id]=a.source[k]),null!=a.target[k]&&(b.suggest(a.target[k].connections.target,a.connection),j[a.connection.id]=a.target[k]))}),a.bind("internal.connectionDetached",function(a){c(a.connection)}),a.bind("connectionMoved",function(a){var b=0===a.index?i:j,c=b[a.connection.id];if(c){var d=c.connections[0===a.index?"source":"target"],e=d.indexOf(a.connection);-1!=e&&d.splice(e,1)}}),this.addGroup=function(b){a.addClass(b.getEl(),e),h[b.id]=b,b.manager=this,g(b),a.fire(o,{group:b})},this.addToGroup=function(b,c,d){if(b=this.getGroup(b)){var e=b.getEl();if(c._isJsPlumbGroup)return;var f=c._jsPlumbGroup;if(f!==b){var g=a.getOffset(c,!0),h=b.collapsed?a.getOffset(e,!0):a.getOffset(b.getDragArea(),!0);null!=f&&(f.remove(c,d),l.updateConnectionsForGroup(f)),b.add(c,d);var i=function(a,c){var d=0==c?1:0;a.each(function(a){a.setVisible(!1),a.endpoints[d].element._jsPlumbGroup===b?(a.endpoints[d].setVisible(!1),l.expandConnection(a,d,b)):(a.endpoints[c].setVisible(!1),l.collapseConnection(a,c,b))})};b.collapsed&&(i(a.select({source:c}),0),i(a.select({target:c}),1));var j=a.getId(c);a.dragManager.setParent(c,j,e,a.getId(e),g);var k={left:g.left-h.left,top:g.top-h.top};a.setPosition(c,k),a.dragManager.revalidateParent(c,j,g),l.updateConnectionsForGroup(b),setTimeout(function(){a.fire(m,{group:b,el:c})},0)}}},this.removeFromGroup=function(a,b,c){a=this.getGroup(a),a&&a.remove(b,null,c)},this.getGroup=function(a){var c=a;if(b.isString(a)&&(c=h[a],null==c))throw new TypeError("No such group ["+a+"]");return c},this.getGroups=function(){var a=[];for(var b in h)a.push(h[b]);return a},this.removeGroup=function(b,c,d,e){b=this.getGroup(b),this.expandGroup(b,!0),b[c?"removeAll":"orphanAll"](d,e),a.remove(b.getEl()),delete h[b.id],delete a._groups[b.id],a.fire(p,{group:b})},this.removeAllGroups=function(a,b,c){for(var d in h)this.removeGroup(h[d],a,b,c)};var n=this.collapseConnection=function(b,c,d){var e,f=d.getEl(),g=a.getId(f),h=b.endpoints[c].elementId,i=b.endpoints[0===c?1:0].element;i[k]&&!i[k].shouldProxy()&&i[k].collapsed||(b.proxies=b.proxies||[],b.proxies[c]?e=b.proxies[c].ep:(e=a.addEndpoint(f,{endpoint:d.getEndpoint(b,c),anchor:d.getAnchor(b,c),parameters:{isProxyEndpoint:!0}}),e._forceDeleteOnDetach=!0),b.proxies[c]={ep:e,originalEp:b.endpoints[c]},0===c?a.anchorManager.sourceChanged(h,g,b,f):(a.anchorManager.updateOtherEndpoint(b.endpoints[0].elementId,h,g,b),b.target=f,b.targetId=g),b.proxies[c].originalEp.detachFromConnection(b,null,!0),e.connections=[b],b.endpoints[c]=e,b.setVisible(!0))};this.collapseGroup=function(b){if(b=this.getGroup(b),null!=b&&!b.collapsed){var c=b.getEl();if(f(b,!1),b.shouldProxy()){var g=function(a,c){for(var d=0;d<a.length;d++){var e=a[d];n(e,c,b)}};g(b.connections.source,0),g(b.connections.target,1)}b.collapsed=!0,a.removeClass(c,e),a.addClass(c,d),a.revalidate(c),a.fire(r,{group:b})}};var s=this.expandConnection=function(b,c,d){if(null!=b.proxies&&null!=b.proxies[c]){var e=a.getId(d.getEl()),f=b.proxies[c].originalEp.element,g=b.proxies[c].originalEp.elementId;b.endpoints[c]=b.proxies[c].originalEp,0===c?a.anchorManager.sourceChanged(e,g,b,f):(a.anchorManager.updateOtherEndpoint(b.endpoints[0].elementId,e,g,b),b.target=f,b.targetId=g),b.proxies[c].ep.detachFromConnection(b,null,!0),b.proxies[c].originalEp.addConnection(b),delete b.proxies[c]}};this.expandGroup=function(b,c){if(b=this.getGroup(b),null!=b&&b.collapsed){var g=b.getEl();if(f(b,!0),b.shouldProxy()){var h=function(a,c){for(var d=0;d<a.length;d++){var e=a[d];s(e,c,b)}};h(b.connections.source,0),h(b.connections.target,1)}b.collapsed=!1,a.addClass(g,e),a.removeClass(g,d),a.revalidate(g),this.repaintGroup(b),c||a.fire(q,{group:b})}},this.repaintGroup=function(b){b=this.getGroup(b);for(var c=b.getMembers(),d=0;d<c.length;d++)a.revalidate(c[d])},this.updateConnectionsForGroup=g,this.refreshAllGroups=function(){for(var b in h)g(h[b]),a.dragManager.updateOffsets(a.getId(h[b].getEl()))}},t=function(c,d){function e(a){return a.offsetParent}function j(a,b){var d=e(a),f=c.getSize(d),g=c.getSize(a),h=b[0],i=h+g[0],j=b[1],k=j+g[1];return i>0&&h<f[0]&&k>0&&j<f[1]}function o(a){var b=c.getId(a),d=c.getOffset(a);a.parentNode.removeChild(a),c.getContainer().appendChild(a),c.setPosition(a,d),delete a._jsPlumbGroup,r(a),c.dragManager.clearParent(a,b)}function p(a){j(a.el,a.pos)||(a.el._jsPlumbGroup.remove(a.el),A?c.remove(a.el):o(a.el))}function q(a){var b=c.getId(a);c.revalidate(a),c.dragManager.revalidateParent(a,b)}function r(a){a._katavorioDrag&&((A||z)&&a._katavorioDrag.off(h,p),A||z||!y||(a._katavorioDrag.off(i,q),a._katavorioDrag.setRevert(null)))}function s(a){a._katavorioDrag&&((A||z)&&a._katavorioDrag.on(h,p),x&&a._katavorioDrag.setConstrain(!0),w&&a._katavorioDrag.setUseGhostProxy(!0),A||z||!y||(a._katavorioDrag.on(i,q),a._katavorioDrag.setRevert(function(a,b){return!j(a,b)})))}var t=this,u=d.el;this.getEl=function(){return u},this.id=d.id||b.uuid(),u._isJsPlumbGroup=!0;var v=this.getDragArea=function(){var a=c.getSelector(u,f);return a&&a.length>0?a[0]:u},w=d.ghost===!0,x=w||d.constrain===!0,y=d.revert!==!1,z=d.orphan===!0,A=d.prune===!0,B=d.dropOverride===!0,C=d.proxied!==!1,D=[];if(this.connections={source:[],target:[],internal:[]},this.getAnchor=function(){return d.anchor||"Continuous"},this.getEndpoint=function(){return d.endpoint||["Dot",{radius:10}]},this.collapsed=!1,d.draggable!==!1){var E={stop:function(a){c.fire("groupDragStop",jsPlumb.extend(a,{group:t}))},scope:l};d.dragOptions&&a.jsPlumb.extend(E,d.dragOptions),c.draggable(d.el,E)}d.droppable!==!1&&c.droppable(d.el,{drop:function(a){var b=a.drag.el;if(!b._isJsPlumbGroup){var d=b._jsPlumbGroup;if(d!==t){if(null!=d&&d.overrideDrop(b,t))return;c.getGroupManager().addToGroup(t,b,!1)}}}});var F=function(a,b){for(var c=null==a.nodeType?a:[a],d=0;d<c.length;d++)b(c[d])};this.overrideDrop=function(){return B&&(y||A||z)},this.add=function(a,b){var d=v();F(a,function(a){if(null!=a._jsPlumbGroup){if(a._jsPlumbGroup===t)return;a._jsPlumbGroup.remove(a,!0,b,!1)}a._jsPlumbGroup=t,D.push(a),c.isAlreadyDraggable(a)&&s(a),a.parentNode!=d&&d.appendChild(a),b||c.fire(m,{group:t,el:a})}),c.getGroupManager().updateConnectionsForGroup(t)},this.remove=function(a,d,e,f){F(a,function(a){if(delete a._jsPlumbGroup,b.removeWithFunction(D,function(b){return b===a}),d)try{t.getDragArea().removeChild(a)}catch(f){jsPlumbUtil.log("Could not remove element from Group "+f)}r(a),e||c.fire(n,{group:t,el:a})}),f||c.getGroupManager().updateConnectionsForGroup(t)},this.removeAll=function(a,b){for(var d=0,e=D.length;e>d;d++)t.remove(D[0],a,b,!0);D.length=0,c.getGroupManager().updateConnectionsForGroup(t)},this.orphanAll=function(){for(var a=0;a<D.length;a++)o(D[a]);D.length=0},this.getMembers=function(){return D},u[k]=this,c.bind(g,function(a){a.el._jsPlumbGroup==this&&s(a.el)}.bind(this)),this.shouldProxy=function(){return C},c.getGroupManager().addGroup(this)};c.prototype.addGroup=function(a){var b=this;if(b._groups=b._groups||{},null!=b._groups[a.id])throw new TypeError("cannot create Group ["+a.id+"]; a Group with that ID exists");if(null!=a.el[k])throw new TypeError("cannot create Group ["+a.id+"]; the given element is already a Group");var c=new t(b,a);return b._groups[c.id]=c,c},c.prototype.addToGroup=function(a,b,c){var d=this.getId(b);this.manage(d,b),this.getGroupManager().addToGroup(a,b,c)},c.prototype.removeFromGroup=function(a,b,c){this.getGroupManager().removeFromGroup(a,b,c)},c.prototype.removeGroup=function(a,b,c,d){this.getGroupManager().removeGroup(a,b,c,d)},c.prototype.removeAllGroups=function(a,b,c){this.getGroupManager().removeAllGroups(a,b,c)},c.prototype.getGroup=function(a){return this.getGroupManager().getGroup(a)},c.prototype.getGroups=function(){return this.getGroupManager().getGroups()},c.prototype.expandGroup=function(a){this.getGroupManager().expandGroup(a)},c.prototype.collapseGroup=function(a){this.getGroupManager().collapseGroup(a)},c.prototype.repaintGroup=function(a){this.getGroupManager().repaintGroup(a)},c.prototype.toggleGroup=function(a){a=this.getGroupManager().getGroup(a),null!=a&&this.getGroupManager()[a.collapsed?"expandGroup":"collapseGroup"](a)},c.prototype.getGroupManager=function(){var a=this[j];return null==a&&(a=this[j]=new s(this)),a},c.prototype.removeGroupManager=function(){delete this[j]},c.prototype.getGroupFor=function(a){return a=this.getElement(a),a?a[k]:void 0}}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d=function(a){this.type="Flowchart",a=a||{},a.stub=null==a.stub?30:a.stub;var c,d,e=b.Connectors.AbstractConnector.apply(this,arguments),f=null==a.midpoint?.5:a.midpoint,g=a.alwaysRespectStubs===!0,h=null,i=null,j=null!=a.cornerRadius?a.cornerRadius:0,k=(a.loopbackRadius||25,function(a){return 0>a?-1:0===a?0:1}),l=function(a,b,c,d){if(h!=b||i!=c){var e=null==h?d.sx:h,f=null==i?d.sy:i,g=e==b?"v":"h",j=k(b-e),l=k(c-f);h=b,i=c,a.push([e,f,b,c,g,j,l])}},m=function(a){return Math.sqrt(Math.pow(a[0]-a[2],2)+Math.pow(a[1]-a[3],2))},n=function(a){var b=[];return b.push.apply(b,a),b},o=function(a,b,c){for(var d,f=null,g=0;g<b.length-1;g++){if(f=f||n(b[g]),d=n(b[g+1]),j>0&&f[4]!=d[4]){var h=Math.min(j,m(f),m(d));f[2]-=f[5]*h,f[3]-=f[6]*h,d[0]+=d[5]*h,d[1]+=d[6]*h;var i=f[6]==d[5]&&1==d[5]||f[6]==d[5]&&0===d[5]&&f[5]!=d[6]||f[6]==d[5]&&-1==d[5],k=d[1]>f[3]?1:-1,l=d[0]>f[2]?1:-1,o=k==l,p=o&&i||!o&&!i?d[0]:f[2],q=o&&i||!o&&!i?f[3]:d[1];e.addSegment(a,"Straight",{x1:f[0],y1:f[1],x2:f[2],y2:f[3]}),e.addSegment(a,"Arc",{r:h,x1:f[2],y1:f[3],x2:d[0],y2:d[1],cx:p,cy:q,ac:i})}else{var r=f[2]==f[0]?0:f[2]>f[0]?c.lw/2:-(c.lw/2),s=f[3]==f[1]?0:f[3]>f[1]?c.lw/2:-(c.lw/2);e.addSegment(a,"Straight",{x1:f[0]-r,y1:f[1]-s,x2:f[2]+r,y2:f[3]+s})}f=d}null!=d&&e.addSegment(a,"Straight",{x1:d[0],y1:d[1],x2:d[2],y2:d[3]})};this._compute=function(a,b){c=[],h=null,i=null,d=null;var j=function(){return[a.startStubX,a.startStubY,a.endStubX,a.endStubY]},k={perpendicular:j,orthogonal:j,opposite:function(b){var c=a,d="x"==b?0:1,e={x:function(){return 1==c.so[d]&&(c.startStubX>c.endStubX&&c.tx>c.startStubX||c.sx>c.endStubX&&c.tx>c.sx)||-1==c.so[d]&&(c.startStubX<c.endStubX&&c.tx<c.startStubX||c.sx<c.endStubX&&c.tx<c.sx)},y:function(){return 1==c.so[d]&&(c.startStubY>c.endStubY&&c.ty>c.startStubY||c.sy>c.endStubY&&c.ty>c.sy)||-1==c.so[d]&&(c.startStubY<c.endStubY&&c.ty<c.startStubY||c.sy<c.endStubY&&c.ty<c.sy)}};return!g&&e[b]()?{x:[(a.sx+a.tx)/2,a.startStubY,(a.sx+a.tx)/2,a.endStubY],y:[a.startStubX,(a.sy+a.ty)/2,a.endStubX,(a.sy+a.ty)/2]}[b]:[a.startStubX,a.startStubY,a.endStubX,a.endStubY]}},m=k[a.anchorOrientation](a.sourceAxis),n="x"==a.sourceAxis?0:1,p="x"==a.sourceAxis?1:0,q=m[n],r=m[p],s=m[n+2],t=m[p+2];l(c,m[0],m[1],a);var u=a.startStubX+(a.endStubX-a.startStubX)*f,v=a.startStubY+(a.endStubY-a.startStubY)*f,w={x:[0,1],y:[1,0]},x={perpendicular:function(b){var c=a,d={x:[[[1,2,3,4],null,[2,1,4,3]],null,[[4,3,2,1],null,[3,4,1,2]]],y:[[[3,2,1,4],null,[2,3,4,1]],null,[[4,1,2,3],null,[1,4,3,2]]]},e={x:[[c.startStubX,c.endStubX],null,[c.endStubX,c.startStubX]],y:[[c.startStubY,c.endStubY],null,[c.endStubY,c.startStubY]]},f={x:[[u,c.startStubY],[u,c.endStubY]],y:[[c.startStubX,v],[c.endStubX,v]]},g={x:[[c.endStubX,c.startStubY]],y:[[c.startStubX,c.endStubY]]},h={x:[[c.startStubX,c.endStubY],[c.endStubX,c.endStubY]],y:[[c.endStubX,c.startStubY],[c.endStubX,c.endStubY]]},i={x:[[c.startStubX,v],[c.endStubX,v],[c.endStubX,c.endStubY]],y:[[u,c.startStubY],[u,c.endStubY],[c.endStubX,c.endStubY]]},j={x:[c.startStubY,c.endStubY],y:[c.startStubX,c.endStubX]},k=w[b][0],l=w[b][1],m=c.so[k]+1,n=c.to[l]+1,o=-1==c.to[l]&&j[b][1]<j[b][0]||1==c.to[l]&&j[b][1]>j[b][0],p=e[b][m][0],q=e[b][m][1],r=d[b][m][n];return c.segment==r[3]||c.segment==r[2]&&o?f[b]:c.segment==r[2]&&p>q?g[b]:c.segment==r[2]&&q>=p||c.segment==r[1]&&!o?i[b]:c.segment==r[0]||c.segment==r[1]&&o?h[b]:void 0},orthogonal:function(b,c,d,e,f){var g=a,h={x:-1==g.so[0]?Math.min(c,e):Math.max(c,e),y:-1==g.so[1]?Math.min(c,e):Math.max(c,e)}[b];return{x:[[h,d],[h,f],[e,f]],y:[[d,h],[f,h],[f,e]]}[b]},opposite:function(c,d,f,g){var h=a,i={x:"y",y:"x"}[c],j={x:"height",y:"width"}[c],k=h["is"+c.toUpperCase()+"GreaterThanStubTimes2"];if(b.sourceEndpoint.elementId==b.targetEndpoint.elementId){var l=f+(1-b.sourceEndpoint.anchor[i])*b.sourceInfo[j]+e.maxStub;return{x:[[d,l],[g,l]],y:[[l,d],[l,g]]}[c]}return!k||1==h.so[n]&&d>g||-1==h.so[n]&&g>d?{x:[[d,v],[g,v]],y:[[u,d],[u,g]]}[c]:1==h.so[n]&&g>d||-1==h.so[n]&&d>g?{x:[[u,h.sy],[u,h.ty]],y:[[h.sx,v],[h.tx,v]]}[c]:void 0}},y=x[a.anchorOrientation](a.sourceAxis,q,r,s,t);if(y)for(var z=0;z<y.length;z++)l(c,y[z][0],y[z][1],a);l(c,m[2],m[3],a),l(c,a.tx,a.ty,a),o(this,c,a)}};c.extend(d,b.Connectors.AbstractConnector),b.registerConnectorType(d,"Flowchart")}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil;b.Connectors.AbstractBezierConnector=function(a){a=a||{};var c,d=a.showLoopback!==!1,e=(a.curviness||10,a.margin||5),f=(a.proximityLimit||80,a.orientation&&"clockwise"===a.orientation),g=a.loopbackRadius||25,h=!1;return this.overrideSetEditable=function(){return!h},this._compute=function(a,b){var i=b.sourcePos,j=b.targetPos,k=Math.abs(i[0]-j[0]),l=Math.abs(i[1]-j[1]);if(d&&b.sourceEndpoint.elementId===b.targetEndpoint.elementId){h=!0;var m=b.sourcePos[0],n=b.sourcePos[1]-e,o=m,p=n-g,q=o-g,r=p-g;k=2*g,l=2*g,a.points[0]=q,a.points[1]=r,a.points[2]=k,a.points[3]=l,c.addSegment(this,"Arc",{loopback:!0,x1:m-q+4,y1:n-r,startAngle:0,endAngle:2*Math.PI,r:g,ac:!f,x2:m-q-4,y2:n-r,cx:o-q,cy:p-r})}else h=!1,this._computeBezier(a,b,i,j,k,l)},c=b.Connectors.AbstractConnector.apply(this,arguments)},c.extend(b.Connectors.AbstractBezierConnector,b.Connectors.AbstractConnector);var d=function(a){a=a||{},this.type="Bezier";var c=b.Connectors.AbstractBezierConnector.apply(this,arguments),d=a.curviness||150,e=10;this.getCurviness=function(){return d},this._findControlPoint=function(a,b,c,f,g,h,i){var j=h[0]!=i[0]||h[1]==i[1],k=[];return j?(0===i[0]?k.push(c[0]<b[0]?a[0]+e:a[0]-e):k.push(a[0]+d*i[0]),0===i[1]?k.push(c[1]<b[1]?a[1]+e:a[1]-e):k.push(a[1]+d*h[1])):(0===h[0]?k.push(b[0]<c[0]?a[0]+e:a[0]-e):k.push(a[0]-d*h[0]),0===h[1]?k.push(b[1]<c[1]?a[1]+e:a[1]-e):k.push(a[1]+d*i[1])),k},this._computeBezier=function(a,b,d,e,f,g){var h,i,j=this.getGeometry(),k=d[0]<e[0]?f:0,l=d[1]<e[1]?g:0,m=d[0]<e[0]?0:f,n=d[1]<e[1]?0:g;(this.hasBeenEdited()||this.isEditing())&&null!=j&&null!=j.controlPoints&&null!=j.controlPoints[0]&&null!=j.controlPoints[1]?(h=j.controlPoints[0],i=j.controlPoints[1]):(h=this._findControlPoint([k,l],d,e,b.sourceEndpoint,b.targetEndpoint,a.so,a.to),i=this._findControlPoint([m,n],e,d,b.targetEndpoint,b.sourceEndpoint,a.to,a.so)),c.setGeometry({controlPoints:[h,i]},!0),c.addSegment(this,"Bezier",{x1:k,y1:l,x2:m,y2:n,cp1x:h[0],cp1y:h[1],cp2x:i[0],cp2y:i[1]})}};c.extend(d,b.Connectors.AbstractBezierConnector),b.registerConnectorType(d,"Bezier")}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d=function(a,b,c,d){return c>=a&&b>=d?1:c>=a&&d>=b?2:a>=c&&d>=b?3:4},e=function(a,b,c,d,e,f,g,h,i){return i>=h?[a,b]:1===c?d[3]<=0&&e[3]>=1?[a+(d[2]<.5?-1*f:f),b]:d[2]>=1&&e[2]<=0?[a,b+(d[3]<.5?-1*g:g)]:[a+-1*f,b+-1*g]:2===c?d[3]>=1&&e[3]<=0?[a+(d[2]<.5?-1*f:f),b]:d[2]>=1&&e[2]<=0?[a,b+(d[3]<.5?-1*g:g)]:[a+f,b+-1*g]:3===c?d[3]>=1&&e[3]<=0?[a+(d[2]<.5?-1*f:f),b]:d[2]<=0&&e[2]>=1?[a,b+(d[3]<.5?-1*g:g)]:[a+-1*f,b+-1*g]:4===c?d[3]<=0&&e[3]>=1?[a+(d[2]<.5?-1*f:f),b]:d[2]<=0&&e[2]>=1?[a,b+(d[3]<.5?-1*g:g)]:[a+f,b+-1*g]:void 0},f=function(a){a=a||{},this.type="StateMachine";var c,f=b.Connectors.AbstractBezierConnector.apply(this,arguments),g=a.curviness||10,h=a.margin||5,i=a.proximityLimit||80;a.orientation&&"clockwise"===a.orientation,this._computeBezier=function(a,b,j,k,l,m){var n=b.sourcePos[0]<b.targetPos[0]?0:l,o=b.sourcePos[1]<b.targetPos[1]?0:m,p=b.sourcePos[0]<b.targetPos[0]?l:0,q=b.sourcePos[1]<b.targetPos[1]?m:0;0===b.sourcePos[2]&&(n-=h),1===b.sourcePos[2]&&(n+=h),0===b.sourcePos[3]&&(o-=h),1===b.sourcePos[3]&&(o+=h),0===b.targetPos[2]&&(p-=h),1===b.targetPos[2]&&(p+=h),0===b.targetPos[3]&&(q-=h),1===b.targetPos[3]&&(q+=h);var r,s,t,u,v=(n+p)/2,w=(o+q)/2,x=d(n,o,p,q),y=Math.sqrt(Math.pow(p-n,2)+Math.pow(q-o,2)),z=f.getGeometry();(this.hasBeenEdited()||this.isEditing())&&null!=z?(r=z.controlPoints[0][0],t=z.controlPoints[0][1],s=z.controlPoints[1][0],u=z.controlPoints[1][1]):(c=e(v,w,x,b.sourcePos,b.targetPos,g,g,y,i),r=c[0],s=c[0],t=c[1],u=c[1],f.setGeometry({controlPoints:[c,c]},!0)),f.addSegment(this,"Bezier",{x1:p,y1:q,x2:n,y2:o,cp1x:r,cp1y:t,cp2x:s,cp2y:u})}};c.extend(f,b.Connectors.AbstractBezierConnector),b.registerConnectorType(f,"StateMachine")}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d="Straight",e=function(){this.type=d;var a=b.Connectors.AbstractConnector.apply(this,arguments);this._compute=function(b){a.addSegment(this,d,{x1:b.sx,y1:b.sy,x2:b.startStubX,y2:b.startStubY}),a.addSegment(this,d,{x1:b.startStubX,y1:b.startStubY,x2:b.endStubX,y2:b.endStubY}),a.addSegment(this,d,{x1:b.endStubX,y1:b.endStubY,x2:b.tx,y2:b.ty})}};c.extend(e,b.Connectors.AbstractConnector),b.registerConnectorType(e,d)}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d={"stroke-linejoin":"stroke-linejoin","stroke-dashoffset":"stroke-dashoffset","stroke-linecap":"stroke-linecap"},e="stroke-dasharray",f="dashstyle",g="linearGradient",h="radialGradient",i="defs",j="fill",k="stop",l="stroke",m="stroke-width",n="style",o="none",p="jsplumb_gradient_",q="strokeWidth",r={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml"},s=function(a,b){for(var c in b)a.setAttribute(c,""+b[c])},t=function(a,c){return c=c||{},c.version="1.1",c.xmlns=r.xhtml,b.createElementNS(r.svg,a,null,null,c)},u=function(a){return"position:absolute;left:"+a[0]+"px;top:"+a[1]+"px"},v=function(a){for(var b=a.querySelectorAll(" defs,linearGradient,radialGradient"),c=0;c<b.length;c++)b[c].parentNode.removeChild(b[c])},w=function(a,b,c,d,e){var f=p+e._jsPlumb.instance.idstamp();v(a);var m;m=c.gradient.offset?t(h,{id:f}):t(g,{id:f,gradientUnits:"userSpaceOnUse"});var n=t(i);a.appendChild(n),n.appendChild(m);for(var o=0;o<c.gradient.stops.length;o++){var q=1==e.segment||2==e.segment?o:c.gradient.stops.length-1-o,r=c.gradient.stops[q][1],s=t(k,{offset:Math.floor(100*c.gradient.stops[o][0])+"%","stop-color":r});m.appendChild(s)}var u=c.stroke?l:j;b.setAttribute(u,"url(#"+f+")")},x=function(a,b,c,g,h){if(b.setAttribute(j,c.fill?c.fill:o),b.setAttribute(l,c.stroke?c.stroke:o),c.gradient?w(a,b,c,g,h):(v(a),b.setAttribute(n,"")),c.strokeWidth&&b.setAttribute(m,c.strokeWidth),c[f]&&c[q]&&!c[e]){var i=-1==c[f].indexOf(",")?" ":",",k=c[f].split(i),p="";k.forEach(function(a){p+=Math.floor(a*c.strokeWidth)+i}),b.setAttribute(e,p)}else c[e]&&b.setAttribute(e,c[e]);for(var r in d)c[r]&&b.setAttribute(d[r],c[r])},y=function(a,b,c){a.childNodes.length>c?a.insertBefore(b,a.childNodes[c]):a.appendChild(b)};c.svg={node:t,attr:s,pos:u};var z=function(a){var d=a.pointerEventsSpec||"all",e={};b.jsPlumbUIComponent.apply(this,a.originalArgs),this.canvas=null,this.path=null,this.svg=null,this.bgCanvas=null;var f=a.cssClass+" "+(a.originalArgs[0].cssClass||""),g={style:"",width:0,height:0,"pointer-events":d,position:"absolute"};this.svg=t("svg",g),a.useDivWrapper?(this.canvas=b.createElement("div",{position:"absolute"}),c.sizeElement(this.canvas,0,0,1,1),this.canvas.className=f):(s(this.svg,{"class":f}),this.canvas=this.svg),a._jsPlumb.appendElement(this.canvas,a.originalArgs[0].parent),a.useDivWrapper&&this.canvas.appendChild(this.svg);var h=[this.canvas];return this.getDisplayElements=function(){return h},this.appendDisplayElement=function(a){h.push(a)},this.paint=function(b,d,f){if(null!=b){var g,h=[this.x,this.y],i=[this.w,this.h];null!=f&&(f.xmin<0&&(h[0]+=f.xmin),f.ymin<0&&(h[1]+=f.ymin),i[0]=f.xmax+(f.xmin<0?-f.xmin:0),i[1]=f.ymax+(f.ymin<0?-f.ymin:0)),a.useDivWrapper?(c.sizeElement(this.canvas,h[0],h[1],i[0],i[1]),h[0]=0,h[1]=0,g=u([0,0])):g=u([h[0],h[1]]),e.paint.apply(this,arguments),s(this.svg,{style:g,width:i[0]||0,height:i[1]||0})}},{renderer:e}};c.extend(z,b.jsPlumbUIComponent,{cleanup:function(a){a||null==this.typeId?(this.canvas&&(this.canvas._jsPlumb=null),this.svg&&(this.svg._jsPlumb=null),this.bgCanvas&&(this.bgCanvas._jsPlumb=null),this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.bgCanvas&&this.bgCanvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.svg=null,this.canvas=null,this.path=null,this.group=null):(this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.bgCanvas&&this.bgCanvas.parentNode&&this.bgCanvas.parentNode.removeChild(this.bgCanvas))},reattach:function(a){var b=a.getContainer();this.canvas&&null==this.canvas.parentNode&&b.appendChild(this.canvas),this.bgCanvas&&null==this.bgCanvas.parentNode&&b.appendChild(this.bgCanvas)},setVisible:function(a){this.canvas&&(this.canvas.style.display=a?"block":"none")}}),b.ConnectorRenderers.svg=function(a){var c=this,d=z.apply(this,[{cssClass:a._jsPlumb.connectorClass+(this.isEditable()?" "+a._jsPlumb.editableConnectorClass:""),originalArgs:arguments,pointerEventsSpec:"none",_jsPlumb:a._jsPlumb}]),e=this.setEditable;this.setEditable=function(a){var c=e.apply(this,[a]);b[c?"addClass":"removeClass"](this.canvas,this._jsPlumb.instance.editableConnectorClass)},d.renderer.paint=function(d,e,f){var g=c.getSegments(),h="",i=[0,0];if(f.xmin<0&&(i[0]=-f.xmin),f.ymin<0&&(i[1]=-f.ymin),g.length>0){h=c.getPathData();var j={d:h,transform:"translate("+i[0]+","+i[1]+")","pointer-events":a["pointer-events"]||"visibleStroke"},k=null,l=[c.x,c.y,c.w,c.h];if(d.outlineStroke){var m=d.outlineWidth||1,n=d.strokeWidth+2*m;k=b.extend({},d),delete k.gradient,k.stroke=d.outlineStroke,k.strokeWidth=n,null==c.bgPath?(c.bgPath=t("path",j),b.addClass(c.bgPath,b.connectorOutlineClass),y(c.svg,c.bgPath,0)):s(c.bgPath,j),x(c.svg,c.bgPath,k,l,c)}null==c.path?(c.path=t("path",j),y(c.svg,c.path,d.outlineStroke?1:0)):s(c.path,j),x(c.svg,c.path,d,l,c)}}},c.extend(b.ConnectorRenderers.svg,z);var A=b.SvgEndpoint=function(a){var c=z.apply(this,[{cssClass:a._jsPlumb.endpointClass,originalArgs:arguments,pointerEventsSpec:"all",useDivWrapper:!0,_jsPlumb:a._jsPlumb}]);c.renderer.paint=function(a){var c=b.extend({},a);c.outlineStroke&&(c.strokeWidth=c.strokeWidth,c.stroke=c.outlineStroke),null==this.node?(this.node=this.makeNode(c),this.svg.appendChild(this.node)):null!=this.updateNode&&this.updateNode(this.node),x(this.svg,this.node,c,[this.x,this.y,this.w,this.h],this),u(this.node,[this.x,this.y])}.bind(this)};c.extend(A,z),b.Endpoints.svg.Dot=function(){b.Endpoints.Dot.apply(this,arguments),A.apply(this,arguments),this.makeNode=function(){return t("circle",{cx:this.w/2,cy:this.h/2,r:this.radius})},this.updateNode=function(a){s(a,{cx:this.w/2,cy:this.h/2,r:this.radius})}},c.extend(b.Endpoints.svg.Dot,[b.Endpoints.Dot,A]),b.Endpoints.svg.Rectangle=function(){b.Endpoints.Rectangle.apply(this,arguments),A.apply(this,arguments),this.makeNode=function(){return t("rect",{width:this.w,height:this.h})},this.updateNode=function(a){s(a,{width:this.w,height:this.h})}},c.extend(b.Endpoints.svg.Rectangle,[b.Endpoints.Rectangle,A]),b.Endpoints.svg.Image=b.Endpoints.Image,b.Endpoints.svg.Blank=b.Endpoints.Blank,b.Overlays.svg.Label=b.Overlays.Label,b.Overlays.svg.Custom=b.Overlays.Custom;var B=function(a,c){a.apply(this,c),b.jsPlumbUIComponent.apply(this,c),this.isAppendedAtTopLevel=!1,this.path=null,this.paint=function(a,b){if(a.component.svg&&b){null==this.path&&(this.path=t("path",{"pointer-events":"all"}),a.component.svg.appendChild(this.path),this.elementCreated&&this.elementCreated(this.path,a.component),this.canvas=a.component.svg);var e=c&&1==c.length?c[0].cssClass||"":"",f=[0,0];b.xmin<0&&(f[0]=-b.xmin),b.ymin<0&&(f[1]=-b.ymin),s(this.path,{d:d(a.d),"class":e,stroke:a.stroke?a.stroke:null,fill:a.fill?a.fill:null,transform:"translate("+f[0]+","+f[1]+")"})}};var d=function(a){return isNaN(a.cxy.x)||isNaN(a.cxy.y)?"":"M"+a.hxy.x+","+a.hxy.y+" L"+a.tail[0].x+","+a.tail[0].y+" L"+a.cxy.x+","+a.cxy.y+" L"+a.tail[1].x+","+a.tail[1].y+" L"+a.hxy.x+","+a.hxy.y};this.transfer=function(a){a.canvas&&this.path&&this.path.parentNode&&(this.path.parentNode.removeChild(this.path),a.canvas.appendChild(this.path))}};c.extend(B,[b.jsPlumbUIComponent,b.Overlays.AbstractOverlay],{cleanup:function(a){null!=this.path&&(a?this._jsPlumb.instance.removeElement(this.path):this.path.parentNode&&this.path.parentNode.removeChild(this.path))},reattach:function(){this.path&&this.canvas&&null==this.path.parentNode&&this.canvas.appendChild(this.path)},setVisible:function(a){null!=this.path&&(this.path.style.display=a?"block":"none")}}),b.Overlays.svg.Arrow=function(){B.apply(this,[b.Overlays.Arrow,arguments])},c.extend(b.Overlays.svg.Arrow,[b.Overlays.Arrow,B]),b.Overlays.svg.PlainArrow=function(){B.apply(this,[b.Overlays.PlainArrow,arguments])},c.extend(b.Overlays.svg.PlainArrow,[b.Overlays.PlainArrow,B]),b.Overlays.svg.Diamond=function(){B.apply(this,[b.Overlays.Diamond,arguments])},c.extend(b.Overlays.svg.Diamond,[b.Overlays.Diamond,B]),b.Overlays.svg.GuideLines=function(){var a,c,d=null,e=this;b.Overlays.GuideLines.apply(this,arguments),this.paint=function(b,g){null==d&&(d=t("path"),b.connector.svg.appendChild(d),e.attachListeners(d,b.connector),e.attachListeners(d,e),a=t("path"),b.connector.svg.appendChild(a),e.attachListeners(a,b.connector),e.attachListeners(a,e),c=t("path"),b.connector.svg.appendChild(c),e.attachListeners(c,b.connector),e.attachListeners(c,e));
var h=[0,0];g.xmin<0&&(h[0]=-g.xmin),g.ymin<0&&(h[1]=-g.ymin),s(d,{d:f(b.head,b.tail),stroke:"red",fill:null,transform:"translate("+h[0]+","+h[1]+")"}),s(a,{d:f(b.tailLine[0],b.tailLine[1]),stroke:"blue",fill:null,transform:"translate("+h[0]+","+h[1]+")"}),s(c,{d:f(b.headLine[0],b.headLine[1]),stroke:"green",fill:null,transform:"translate("+h[0]+","+h[1]+")"})};var f=function(a,b){return"M "+a.x+","+a.y+" L"+b.x+","+b.y}},c.extend(b.Overlays.svg.GuideLines,b.Overlays.GuideLines)}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d=a.Katavorio,e=a.Biltong,f=function(a,c){c=c||"main";var f="_katavorio_"+c,g=a[f],h=a.getEventManager();return g||(g=new d({bind:h.on,unbind:h.off,getSize:b.getSize,getPosition:function(b,c){var d=a.getOffset(b,c,b._katavorioDrag?b.offsetParent:null);return[d.left,d.top]},setPosition:function(a,b){a.style.left=b[0]+"px",a.style.top=b[1]+"px"},addClass:b.addClass,removeClass:b.removeClass,intersects:e.intersects,indexOf:function(a,b){return a.indexOf(b)},scope:a.getDefaultScope(),css:{noSelect:a.dragSelectClass,droppable:"jtk-droppable",draggable:"jtk-draggable",drag:"jtk-drag",selected:"jtk-drag-selected",active:"jtk-drag-active",hover:"jtk-drag-hover",ghostProxy:"jtk-ghost-proxy"}}),a[f]=g,a.bind("zoom",g.setZoom)),g},g=function(a,b){var d=function(d){if(null!=b[d]){if(c.isString(b[d])){var e=b[d].match(/-=/)?-1:1,f=b[d].substring(2);return a[d]+e*f}return b[d]}return a[d]};return[d("left"),d("top")]};b.extend(a.jsPlumbInstance.prototype,{animationSupported:!0,getElement:function(a){return null==a?null:(a="string"==typeof a?a:null!=a.length&&null==a.enctype?a[0]:a,"string"==typeof a?document.getElementById(a):a)},removeElement:function(a){f(this).elementRemoved(a),this.getEventManager().remove(a)},doAnimate:function(a,c,d){d=d||{};var e=this.getOffset(a),f=g(e,c),h=f[0]-e.left,i=f[1]-e.top,j=d.duration||250,k=15,l=j/k,m=k/j*h,n=k/j*i,o=0,p=setInterval(function(){b.setPosition(a,{left:e.left+m*(o+1),top:e.top+n*(o+1)}),null!=d.step&&d.step(o,Math.ceil(l)),o++,o>=l&&(window.clearInterval(p),null!=d.complete&&d.complete())},k)},destroyDraggable:function(a,b){f(this,b).destroyDraggable(a)},destroyDroppable:function(a,b){f(this,b).destroyDroppable(a)},initDraggable:function(a,b,c){f(this,c).draggable(a,b)},initDroppable:function(a,b,c){f(this,c).droppable(a,b)},isAlreadyDraggable:function(a){return null!=a._katavorioDrag},isDragSupported:function(){return!0},isDropSupported:function(){return!0},isElementDraggable:function(a){return a=b.getElement(a),a._katavorioDrag&&a._katavorioDrag.isEnabled()},getDragObject:function(a){return a[0].drag.getDragElement()},getDragScope:function(a){return a._katavorioDrag&&a._katavorioDrag.scopes.join(" ")||""},getDropEvent:function(a){return a[0].e},getUIPosition:function(a){var b=a[0].el;if(null==b.offsetParent)return null;var c=a[0].finalPos||a[0].pos,d={left:c[0],top:c[1]};if(b._katavorioDrag&&b.offsetParent!==this.getContainer()){var e=this.getOffset(b.offsetParent);d.left+=e.left,d.top+=e.top}return d},setDragFilter:function(a,b,c){a._katavorioDrag&&a._katavorioDrag.setFilter(b,c)},setElementDraggable:function(a,c){a=b.getElement(a),a._katavorioDrag&&a._katavorioDrag.setEnabled(c)},setDragScope:function(a,b){a._katavorioDrag&&a._katavorioDrag.k.setDragScope(a,b)},setDropScope:function(a,b){a._katavorioDrop&&a._katavorioDrop.length>0&&a._katavorioDrop[0].k.setDropScope(a,b)},addToPosse:function(a){var c=Array.prototype.slice.call(arguments,1),d=f(this);b.each(a,function(a){a=[b.getElement(a)],a.push.apply(a,c),d.addToPosse.apply(d,a)})},setPosse:function(a){var c=Array.prototype.slice.call(arguments,1),d=f(this);b.each(a,function(a){a=[b.getElement(a)],a.push.apply(a,c),d.setPosse.apply(d,a)})},removeFromPosse:function(a){var c=Array.prototype.slice.call(arguments,1),d=f(this);b.each(a,function(a){a=[b.getElement(a)],a.push.apply(a,c),d.removeFromPosse.apply(d,a)})},removeFromAllPosses:function(a){var c=f(this);b.each(a,function(a){c.removeFromAllPosses(b.getElement(a))})},setPosseState:function(a,c,d){var e=f(this);b.each(a,function(a){e.setPosseState(b.getElement(a),c,d)})},dragEvents:{start:"start",stop:"stop",drag:"drag",step:"step",over:"over",out:"out",drop:"drop",complete:"complete",beforeStart:"beforeStart"},animEvents:{step:"step",complete:"complete"},stopDrag:function(a){a._katavorioDrag&&a._katavorioDrag.abort()},addToDragSelection:function(a){f(this).select(a)},removeFromDragSelection:function(a){f(this).deselect(a)},clearDragSelection:function(){f(this).deselectAll()},trigger:function(a,b,c,d){this.getEventManager().trigger(a,b,c,d)},doReset:function(){for(var a in this)0===a.indexOf("_katavorio_")&&this[a].reset()}});var h=function(a){var b=function(){/complete|loaded|interactive/.test(document.readyState)&&"undefined"!=typeof document.body&&null!=document.body?a():setTimeout(b,9)};b()};h(b.init)}.call("undefined"!=typeof window?window:this);

//jquery.js
/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type( obj ) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {

			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( !support.ownFirst ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {

			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {

				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[ j ] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// init accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt( 0 ) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {

						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[ 2 ] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof root.ready !== "undefined" ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter( function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.uniqueSort( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {

	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		window.event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE6-10
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );

		// If IE event model is used
		} else {

			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				( function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {

							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll( "left" );
						} catch ( e ) {
							return window.setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				} )();
			}
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery( function() {

	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {

		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {

		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {

		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, undefined
	} else {
		cache[ id ] = undefined;
	}
}

jQuery.extend( {
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!jQuery._data( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval(
								( node.text || node.textContent || node.innerHTML || "" )
									.replace( rcleanScript, "" )
							);
						}
					}
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		elems = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = elems[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		reliableMarginRight: function() {

			// Support: Android 2.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		},

		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		}
	} );

	function computeStyleTests() {
		var contents, divStyle,
			documentElement = document.documentElement;

		// Setup
		documentElement.appendChild( container );

		div.style.cssText =

			// Support: Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		pixelMarginRightVal = reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			divStyle = window.getComputedStyle( div );
			pixelPositionVal = ( divStyle || {} ).top !== "1%";
			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

			// Support: Android 2.3 only
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			div.childNodes[ 0 ].style.borderCollapse = "separate";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {

	// Disconnected elements are considered hidden
	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
		return true;
	}
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));

//constants first:
var DEBUG = true;

var _BinaryTreeMinValue = 01;
var _BinaryTreeMaxValue = 99;

//RANDn.js

function RandN (mn, mx, opts) {
	if (!opts) opts = { };
	if (!opts.excluding) opts.excluding = { };

	this.minNum = mn;
	this.maxNum = mx;

	this.possibilities = [ ];
	for (var i = mn; i <= mx; i++){
		this.possibilities.push (i);
	}
};

RandN.prototype.next = function () {
	var i = rand.index (this.possibilities);
	var res = this.possibilities[i];

	this.remove (i);
	return res;
}

RandN.prototype.exclude = function (n) {
	if (typeof (n) === "object"){
		var r = this;
		each (n, function(o){ r.exclude (o); });
	} else{
		var index = this.possibilities.indexOf (n);
		if (index !== -1)
			this.remove (index);
	}

	return this;
}

RandN.prototype.remove = function(i){ this.possibilities.splice (i, 1); }

RandN.prototype.generateUniqueArray = function(size) {
	var arr = [ ];
	for (var i = 0; i < size; i++) {
		arr.push(this.next());
	}
	return arr;
}


//then random.js

var rand = { };

const MAX_ATTEMPTS = 35;
const MAX_INT = Math.pow (2, 32);

rand.between = function (min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

rand.nextInt = function(){
	return rand.between (0, MAX_INT);
}

rand.bool = function(){
	return Math.random () <= 0.5;
}

rand.letter = function(){
	return String.fromCharCode (rand.between (A_ASCII, Z_ASCII));
}

rand.index = function(list){
	return rand.between(0, list.length - 1);
}

rand.elem = function(list){
	return list[rand.index (list)];
}

rand.excluding = function(min, max, wo, opts){
	if (!opts) opts = { };

	var maxAttempts = opts.maxAttempts || MAX_ATTEMPTS;
	var i = 0;
	while (i < maxAttempts){
		var n = rand.between (min, max);
		if (wo.indexOf (n) === -1)
			return n;
		i++;
	}

	return matchSmallest(min, max, wo);
}

rand.uniqArray = function(minN, maxN, numElems, opts){
	var maxAttempts = opts.maxAttempts || MAX_ATTEMPTS;

	// there's a few ways to do this. either:
	//   1) lots of preprocessing: make an array from minN to maxN, choose numElems elements.
	//        bad if there's a lot of numbers, ex. 1 to 100,000 ...
	//   2) pick a new number each time, if it's in the array, retry
	//        bad if there's a lot of elements in relation to the possible numbers,
        //        ex. 100 elements 1 from 100 will give a lot of retrying near the end
	//   3) a mix of both?
        //   4) if the number of elements can be UP TO n, but not exactly n, can take n numbers
        //        from the set and remove duplicates. could be a lot of removals.
	//   5) again, if numbers can be UP TO N, then can set a limit on number of retries;
	//        if it goes over this limit, skip the number
        //   5) math

	// for the sake of my sanity, i'm just going to go with #2
	var arr = [ ];
	for(var i = 0; i < numElems; i++){
		var n = pickUniqueNumber (minN, maxN, arr, maxAttempts);
		if (n) arr.push (n);
	}

	return arr;
}

//JSPLUMB.JS

var innerStroke = 'rgba(0, 0, 0, 1)';
var outerStroke = 'rgba(235, 235, 235, 1)';

const MAIN_WIDTH = 63;
const NODE_WIDTH = 10;
const NODE_HEIGHT = 10;

const LABEL_OVERLAY = [ "Label", {label: this.label, id:"PIKA-CHU", cssClass: 'length', location: 0.6}];

const ENDPOINT_SRC = {
	isSource:true,
	isTarget:false,
	connector: ["Straight"],
	endpointStyle:{ gradient : {stops:[[ 0, innerStroke ], [ 1, outerStroke ]], offset:17.5, innerRadius:3 }, radius:5},
    connectorOverlays: [
        [ "Arrow", { width:10, length:12, location:1, id:"arrow" } ],
	LABEL_OVERLAY
    ],
};

const ANCHOR_SRC = ["Center"];
const ANCHOR_PERIM = [ "Perimeter", { shape:"Rectangle" } ];
const ANCHOR_CENTERED = ["Center"];

const DRAG_OPTS = {
	containment: true,
	drag: function(evt, src){ jsPlumb.repaintEverything(); }
}

function Plumbify (item, opts){
	this.item = item;
	this.src  = item.getElem();
	this.dragging = false;

	if (opts.hasEndpoint !== false)
		this.addEndpoint (this.src);

	this.enabled = true;
	this.classes = "";

	return this;
}

Plumbify.prototype.getEndpoint = function(){
	var e = this && this.endpoint;
	var c = e && e.endpoint && e.endpoint.canvas;
	return c;
}

Plumbify.prototype.isEnabled = function(){ return this.enabled; }

Plumbify.prototype.setDragging = function(w){ this.dragging = w; }
Plumbify.prototype.isDragging  = function(){ return this.dragging; }

Plumbify.prototype.repaint = function () {
	if (this.label && this.getLabel())
		this.getLabel().setLabel(this.label); // that's a lot of labels
}

Plumbify.prototype.reposition = function(){
	if (this.src) jsPlumb.repaint(this.src);
}

Plumbify.prototype.getLabel = function(){
	var c = this.conn;
	if (!c || !c.connector) return null;

	try {
		return c.getOverlay ("PIKA-CHU");
	} catch (err) {
		return null;
	}
}

// Find connector .... mainly for addClass, removeClass.
// JsPlumb has its own but that doesn't actually work.
Plumbify.prototype.findConnector = function () {
	var con = this.conn;
	var connector = con && con.connector;
	var canvas    = connector && connector.canvas;
	return canvas;
}

// Note: Takes f in as an argument.
// Will pass in current class,
// Receives new class to be set
Plumbify.prototype.setClass = function (f){
	var e = this.endpoint;
	if (!e) return;

	// get the new class .... and remove trailing, leading spaces if there are any
	var c = f(e.connectorClass);
	if (c) c = c.trim ();
	else   c = "";

	// set the class
	e.connectorClass = c;
	$(this.getEndpoint()).attr("class", c);

	this.classes = c;
}

// add the class. if already has classes, add it to the end - otherwise just return class
Plumbify.prototype.addClass = function (cls){
	this.setClass (function (c){
		if (!c) return cls;
		else return c.replace(cls, "") + " " + cls;
	});

	$(this.findConnector()).addClass(cls);
}

// remove the class. if does not have classes, return empty string - otherwise remove
Plumbify.prototype.removeClass = function (cls){
	this.setClass (function (c){
		if (!c) return "";
			else return c.replace(cls, "");
	});

	$(this.findConnector()).removeClass(cls);
}

Plumbify.prototype.addEndpoint = function(elem){
	var cls = ENDPOINT_SRC;
	var anchor = ANCHOR_SRC;

	this.endpoint = jsPlumb.addEndpoint($(elem).attr("id"), {
	  anchors: anchor
	}, cls);
}

Plumbify.prototype.target = function(opts){
	var anchor = opts.centered ? ANCHOR_CENTERED : ANCHOR_PERIM;

	jsPlumb.makeTarget (this.src, {
		endpoint: "Blank",
		anchor: anchor
	});
	return this;
}
Plumbify.prototype.setTargEnabled = function(n){
	jsPlumb.setTargetEnabled (this.src, n);
}

Plumbify.prototype.setDetach = function (b){
	if (!this.conn) return;
	if (!this.enabled) return;
	if (!this.conn.connector) return;

	this.conn.setDetachable (b);
}

Plumbify.prototype.getSource = function(){
	return this.src;
}

Plumbify.prototype.disconnect = function(newConnector){
	if (!this.conn) return;
	if (!this.conn.connector) return;
	if (this.conn === newConnector) return;

	jsPlumb.detach (this.conn);
	this.conn = null;
}

Plumbify.prototype.connectTo = function (elem, opts){
	if (!elem) return;
	if (!opts) opts = { };

	elem = DOM.domify (elem);
	this.disconnect ();

	this.conn = jsPlumb.connect({
		source: this.endpoint,
		target: elem,
		overlays: [
	          [ "Arrow", { width:10, length:12, location:1, id:"arrow" } ],
		  LABEL_OVERLAY
	        ],
		cssClass: this.classes,
	        detachable: opts.detachable
	});

	this.fixLabel ();
}

Plumbify.prototype.remove = function(){
	var e = this.src;
	jsPlumb.empty(e).remove(e);
}

Plumbify.prototype.detach = function (){
	jsPlumb.detachAllConnections(this.src);
}

Plumbify.prototype.setEnabled = function(n){
	this.enabled = n;

	var endpoint = this.endpoint;
	if (endpoint.endpoint)
		endpoint.setEnabled (n);

	this.showEnabled (n);
}

// SHOW Enabled: Remove the disabled classes, but don't actually enable
Plumbify.prototype.showEnabled = function (n){
	var endpoint    = this.endpoint;
	var connections = endpoint.connections;
	if (endpoint.canvas)
		controlDisabledClass (endpoint.canvas, n);
	for (var i in connections)
		showConnectionEnabled (connections[i], n);
}

Plumbify.prototype.setConnector = function (c, opts) {
	if (!opts || opts.disconnect !== false)
		this.disconnect (c);
	this.conn = c;

	this.fixLabel().setLabel (this.label);
}

Plumbify.prototype.fixLabel = function(){
	var labelOverlay = this.getLabel();
	if (!labelOverlay) return this;

	// this is kind of gross but works
	labelOverlay.canvas.style.transform = "translate(-50%, -100%)";

	return this;
}

Plumbify.prototype.setLabel = function (text) {
	if (!text) return;

	text = String(text);
	this.label = text;

	if (!this.conn || !this.conn.connector || !this.getLabel()) return;
	this.getLabel().setLabel (text);
};

// static functions
function showConnectionEnabled (conn, isEnabled){
	var connector = conn && conn.connector;
	var svg       = connector && connector.svg;

	if (!svg) return;

	controlDisabledClass (svg, isEnabled);
}

function controlDisabledClass (elem, n){
	if (n)
		$(elem).removeClass ("disabled");
	else
		$(elem).addClass ("disabled");
}


function reloadPlumbs (){
	jsPlumb.repaintEverything();
}

function findNodeFrom (src){
	return Nodes.find (function (n){
		return n.hasPointer ($(src));
	});
}

function findTargetNode (targ){
	return Nodes.find (function (n){ return n.isTarget (targ); });
}

// say this ten times fast
function getPlumbFrom (node) {
	var pointer = node && node.getNextPtr ();
	var plumb   = pointer && pointer.getPlumb ();
	return plumb;
}

function connect(src, trg){
	if (!src) return;

	src.setNext (trg);
	updateActive ();
}

function allowDisconnect (node){
	return false;
}

// event handlers
jsPlumb.bind("connection", function(evt){
	var src = findNodeFrom (evt.source);
	var trg = findNodeFrom (evt.target);
	if (!src || !trg) return;

	var plumb = getPlumbFrom (src);
	if (plumb)
		plumb.setConnector (evt.connection);

	connect (src, trg);
});

jsPlumb.bind("connectionDetached", function(evt){
	var src = findNodeFrom (evt.source);
	if (!src) return;

	var plumb = getPlumbFrom (src);
	if (plumb) plumb.setConnector (null, {disconnect: false});

	connect (src, null);
})

// dragging events
jsPlumb.bind("connectionDrag", function(evt){
	pointerDragging = true;
	isPointering    = true;
});
jsPlumb.bind("connectionDragStop", function(evt){
	pointerDragging = false;
});
jsPlumb.bind("connectionAborted", function(evt){
	var p   = findNodeFrom (evt.source);
	var c    = findNodeFrom (evt.target);

	pointerDragging = false;

	if (allowDisconnect (p))
	{
		connect(p, null);
	}

	if (p && !c) {
		setTimeout (function (){
			p.applyConnections ({detachable: true});
		}, 5);
	}
});


// connector events
// when already connected & dragging, start a new connection
jsPlumb.bind("beforeStartDetach", function(params){
	var n = findNodeFrom (params.source);
	if (!n || !n.isEnabled () || !n.isNextEnabled()) return;

	jsPlumb.detachAllConnections(params.source, {
		fireEvent: false
	});

	return true;
});


jsPlumb.ready(function(){
	jsPlumb.setContainer("question");
});

//POINTER.JS
var NEXT_ID = 0;
function Pointer (pointer, opts){
	pointer.attr("id", "pointer" + NEXT_ID++);

	this.elem = pointer;
	if (opts.hasEndpoint !== false)
		this.plumb = new Plumbify (this, opts, true);

	this.next = null;
}

Pointer.prototype.getElem = function(){ return this.elem; }
Pointer.prototype.getPlumb = function(){ return this.plumb; }
Pointer.prototype.getSrc = function(){ return this.plumb && this.plumb.getSource(); }
Pointer.prototype.getEndpoint = function(){ return this.plumb && this.plumb.endpoint; }
Pointer.prototype.getPrev = function(){ return this.prev; }
Pointer.prototype.getNext = function(){ return this.next; }
Pointer.prototype.isDragging = function(){ return this.plumb.isDragging(); }
Pointer.prototype.setDragging = function(d) { this.plumb.setDragging (d); }
Pointer.prototype.isEnabled = function(){ return this.getEndpoint ().isEnabled (); }
Pointer.prototype.showEnabled = function(){ this.plumb.showEnabled (true); }
Pointer.prototype.showDisabled = function(){  this.plumb.showEnabled (false); }
Pointer.prototype.setNext = function(n, u){
	this.next = n;
}
Pointer.prototype.setDetachable = function (b){
	this.getPlumb ().setDetach (b);
}


Pointer.prototype.distance = function(d){
	this.getPlumb().setLabel(d);
}

Pointer.prototype.plumbify = function(){
	if (this.plumb) this.plumb.remove();

	this.plumb = new Plumbify(this, {hasEndpoint: true});
}

Pointer.prototype.repaint = function () {
	this.getPlumb().repaint ();
}
Pointer.prototype.reposition = function(){ this.plumb.reposition(); }
Pointer.prototype.detach = function (){
	this.plumb.detach ();
}

Pointer.prototype.setEnabled = function(n){
	this.getPlumb ().setEnabled (n);
}

Pointer.prototype.disconnect = function(){
	this.connectNext (null);
	this.plumb.disconnect ();
}
Pointer.prototype.connectTo = function(n, opts){
	this.setNext (n, opts);
	this.plumb.connectTo (n.getTarget(), opts);
}

Pointer.prototype.remove = function (){
	if (this.plumb) this.plumb.remove ();
}

Pointer.prototype.addClass = function (cls){
	this.getPlumb().addClass (cls);
}
Pointer.prototype.removeClass = function (cls){
	this.getPlumb().removeClass (cls);
}

//Node.js
var nodeId = 1001;
function Node (elem, data, opts){
	if (opts && elem)
	{
		if (!opts.parent) opts.parent = DOM.question();
		if (!elem)
			elem = DOM.newNode (opts.big);

		this.uniqId = nodeId++;
		this.elem = $(elem).appendTo (opts.parent).attr ("id", "Node" + this.uniqId);

		if (opts.position)
			this.setPosition (opts.position);

		var leftPointer = DOM.leftChild (elem);
		var rightPointer = DOM.rightChild (elem);
		var parent = DOM.parent(elem);

		opts.target = (data === true);
		this.leftPtr = new Pointer(leftPointer, opts);
		this.rightPtr = new Pointer(rightPointer, opts);
		this.parent= new Pointer(parent, {type: "target"});

		var s = this;
	}


	this.setData (data);

	if (opts && elem) {
		if (opts.hasEndpoint !== false)
			this.attachTarget ({centered: (data === true)});

		if (opts.height || opts.height === 0)
			this.setHeight (opts.height);

		this.enabled = !opts.disabled;
		this.down = null;

		this.activate = new Activation (this);

		if (opts.edge)
			this.edge = new Edge(this);

		if (opts.disabled)
			this.disable (opts.disableOpts);
	}
}

Node.prototype.repaint = function(){
	this.getLeftPtr().repaint ();
	this.getRightPtr().repaint ();
}

Node.prototype.setPosition = function(p){
	this.elem.css (p);
}
Node.prototype.getPosition = function(){ return DOM.positionOf (this.elem); }

Node.prototype.size = function () {
	var e = $(this.getElem ());
	return {
		width: parseInt(e.width ()),
		height: parseInt(e.height ())
	};
}

Node.prototype.index = function () {
	return build.indexOf (this);
};

Node.prototype.setHeight = function(h){ this.height = h; }
Node.prototype.getHeight = function(){ return this.height; }

Node.prototype.getElem = function(){ return this.elem; }

Node.prototype.getClonedFrom = function(){ return this.clonedFrom; }
Node.prototype.setClonedFrom = function(n){ this.clonedFrom = n; }
Node.prototype.hideData = function(){
	$(DOM.dataFrom (this.elem)).addClass ("hidden");
}

Node.prototype.setData = function(d){
	this.data = d;

	if (d === true)
		this.hideData ();
	else
		 $(DOM.dataFrom (this.elem)).text(d);
}

Node.prototype.isBottom = function(){ return this.getDown() === undefined || this.getDown () === null; }
Node.prototype.getId = function(){ return this.uniqId; }
Node.prototype.getData = function(){ return this.data; }
Node.prototype.getLeftPtr = function (){ return this.leftPtr; }
Node.prototype.getRightPtr = function (){ return this.rightPtr; }
Node.prototype.getParentPtr = function (){ return this.parent; }

Node.prototype.getTarget = function (){ return this.getElem(); }
Node.prototype.getLeftPointer = function(){ return this.getLeftPtr().getElem(); }
Node.prototype.getRightPointer = function(){ return this.getRightPtr().getElem(); }

Node.prototype.getParentPointer = function(){ return this.getParentPtr().getElem(); }

Node.prototype.getLeft = function(){ return this.getLeftPtr().getNext (); }
Node.prototype.getRight = function(){ return this.getRightPtr().getNext (); }
Node.prototype.getParent = function(){ return this.getParentPtr().getNext (); }
Node.prototype.detachable = function(n){
	this.getNextPtr().setDetachable (n !== false);1
}
Node.prototype.setNext = function(n, opts){
	if (!opts) opts = { };

	this.getNextPtr().setNext (n, opts);

	if (opts && opts.drawConnection)
		this.getNextPtr ().connectTo (n);
}
Node.prototype.setDown = function(n){
	this.down = n;
}
Node.prototype.setLeft = function(n, opts) {

		if (!opts) opts = { };

		this.getLeftPtr().setNext (n, opts);
		if (n)
			n.setParent (this);

		if (opts && (opts.drawConnection !== false))
			this.getLeftPtr ().connectTo (n);
}
Node.prototype.setRight = function(n, opts) {

		if (!opts) opts = { };

		this.getRightPtr().setNext (n, opts);
		if (n)
			n.setParent (this);

		if (opts && (opts.drawConnection !== false))
			this.getRightPtr ().connectTo (n);
}
Node.prototype.setParent = function(n, opts) {

		if (!opts) opts = { };

		this.getParentPtr().setNext (n, opts);
}
Node.prototype.connectTo = function(n, opts){
	if (!n) return;
	if (!opts) opts = { };

	if (!opts.update)
		opts.update = false;

	this.getNextPtr ().connectTo (n, opts);
}

Node.prototype.attachTarget = function (opts){
	this.plumb = new Plumbify(this, {hasEndpoint: false}).target(opts);
	return this;
}
Node.prototype.attachPlumbs = function (){
	this.getNextPtr ().plumbify ();
	return this;
}

Node.prototype.attach = function (){
	$(this.getElem ()).appendTo (DOM.question ());
	this.attachTarget ();
	this.attachPlumbs ();
}
Node.prototype.applyConnections = function (opts){
	this.connectTo (this.getNext (), opts);
}

Node.prototype.fire = function () {
	if (!this.activate) return;
	this.activate.check ();
}

Node.prototype.isEnabled = function(){ return this.enabled; }
Node.prototype.isNextEnabled = function(){ return this.getNextPtr().isEnabled(); }

Node.prototype.hasPointer = function(e){
	e = $(e);

	if (e.is (this.getNextPointer())) return true;
	if (e.is (this.getTarget ())) return true;
	return false;
}
Node.prototype.isTarget = function (targElem){
	return $(this.getElem()).is (targElem);
}
/*
// Toggle enabled/disabled based on n

// These are some helper functions used below. Ugly if defined within the function ....
// The options that can be used, kind of.
const NXT_OPTS_FUNCTIONS = {
	[CODES.DISABLE] : function (np) { np.setEnabled (false); },
	[CODES.ENABLE]:   function (np) { np.setEnabled (true); },
	[CODES.DOM_ACTIVE]: function (np) { np.showEnabled (); },
	[CODES.DOM_INACTIVE]: function (np) { np.showDisabled (); },
	def: function (np, n){
		if (!n) return;
		return np.setEnabled (n);
	}
}

const TARG_OPTS_FUNCTIONS = {
	[CODES.DISABLE]: function (t) { t.setTargEnabled (false); },
	[CODES.ENABLE]:  function (t) { t.setTargEnabled (true); },
	def:           function (t, n) { t.setTargEnabled (n); }
}*/

Node.prototype.setEnabled = function(n, opts){
	if (!opts) opts = { };

	// this is a bit hacky...
	var f = (n === true) ? "removeClass" : "addClass";

	var myElem = $(this.getElem ());
	var myNPtr  = $(this.getNextPointer ());
	runFunction (myElem, myElem, f, "disabled");
	runFunction (myNPtr, myNPtr, f, "disabled");

	var np = this.getNextPtr ();
	if (np)
		runCases (opts.next, NXT_OPTS_FUNCTIONS, undefined, np, n);

	var targ = this.getTarg ();
	if (targ)
		runCases (opts.ptr, TARG_OPTS_FUNCTIONS, undefined, targ, n);

	if (opts.addClass)
		this.addClass (opts.addClass);
	if (opts.removeClass)
		this.removeClass (opts.removeClass);

	//this.detachable (opts.detachable === true || opts.detachable === CODES.ENABLE);

	this.enabled = n;
}

// Makes these two simple
Node.prototype.enable = function(o){
	this.setEnabled (true, o);
	return this;
}
Node.prototype.disable = function(o){
	this.setEnabled (false, o);
	return this;
}

Node.prototype.addRemClass = function (className, f){
	$(this.getElem ())[f] (className);
	this.getNextPtr () [f] (className);

	return this;
}

// addClass: Add the class to this.getElem (), new pointers
Node.prototype.addClass = function (className){
	this.getNextPtr ().addClass (className);
	return this.addRemClass (className, "addClass");
}

// removeClass: Remove the class from this.getElem(), new pointers
Node.prototype.removeClass = function (className){
	this.getNextPtr ().removeClass (className);
	return this.addRemClass (className, "removeClass");
}

// hasClass: Run the jQuery hasClass operation on our element ...
Node.prototype.hasClass = function(c){
	return $(this.getElem ()).hasClass (c);
}

// Show / Hide the node
Node.prototype.show = function(){ return this.removeClass ("hidden"); }
Node.prototype.hide = function(){ return this.addClass ("hidden"); }
Node.prototype.hidden = function(){ return this.hasClass ("hidden"); }

// Clone the node, including pointers, etc.
Node.prototype.clone = function (){
	var myElem = $(this.getElem());
	var clone = new Node (myElem.clone(), this.getData (), {
		parent: DOM.clone (),
		hasEndpoint: false,
		index: this.getIndex(),
		isDummy: this.isDummy
	});

	clone.setClonedFrom (this);

	return clone;
}

Node.prototype.remove = function (){
	this.getNextPtr ().remove ();

	if (this.getTarget())
		this.getTarget ().remove();
}


Node.prototype.toString = function(){
	return this.getData ();
}

//binarytree.js
function BinaryTree() {
  this.root = null;
}

BinaryTree.prototype.getRoot = function() {
  return this.root;
}

BinaryTree.prototype.setRoot = function(r) {
  var temp = this.root;
  this.root = r;
  return temp;
}

BinaryTree.prototype.populate = function(i, arr) {
  if (i <= 0) {
    console.log("BinaryTree populate had a size argument of 0 or less.\n");
    return;
  }
  this.root = new Node(undefined, arr[0],undefined);
  if (arr.length <= 1) {
    return;
  }
  for (var i = 1; i < arr.length; i++) {
    this.add(arr[i]);
  }
};

BinaryTree.prototype.checkAdd = function (from, func, funcSet, newNode) {
  console.log("from: ", from, "\n");
  console.log("func: ", func, "\n");
  var n = from[func]();
  if (n)
    return n;
  from[funcSet](newNode);
}

BinaryTree.prototype.add = function(toAdd) {
  var n = this.root;
  var e = new Node (undefined, toAdd, undefined);
  if (!n){      //null root case
    this.root = e;
    return;
  }
  while (n) {
    if (toAdd < n.getData()) {     //less than
        n = this.checkAdd (n, "getLeft", "setLeft", e);
    }
    else if (toAdd > n.getData()) {                    //greater than
        n = this.checkAdd (n, "getRight", "setRight", e);
    }
    else if (toAdd === n.getData()) {                     //equal to (it's a set, don't do spit)
      return false;
    }
  }
}

/*BinaryTree.prototype.add = function(toAdd) {
  var n = this.root;
  var e = new Node (undefined, toAdd, undefined);
  if (!n){      //null root case
    this.root = e;
    return;
  }
  var prev = null;
  while (n) {                      //finding correct node
    if (toAdd < n.getData()) {     //less than
      prev = n;
      n = n.getLeft();
    }
    else if (toAdd > n.getData()) {                    //greater than
      prev = n;
      n = n.getRight();
    }
    else if (toAdd === n.getData()) {                     //equal to (it's a set, don't do spit)
      return false;
    }
  }
  if (toAdd < prev.getData())
  {
      prev.setLeft(e, undefined);
  }
  else {
    prev.setRight(e, undefined);
  }
}*/

BinaryTree.prototype.splice = function(u) {
  var p, s;
  if (u.getLeft()) {           //figuring out which node we need to splice into parent. S is the node being spliced, and is the child of the node we're splicing out
    s = u.getLeft();
  }
  else {
    s = u.getRight();
  }

  if (u === this.getRoot()) {      //if we're splicing out the root
    this.setRoot(s);
    p = null;             //parent is null
  }
  else {
    p = u.getParent();           //actually splicing out the node
    if (p.getLeft() === u) {
      p.setLeft(s);
    }
    else {
      p.setRight(s);
    }
  }
  if (s) {
    s.setParent(p);
  }
}

BinaryTree.prototype.remove = function(toRemove) {
  if (!toRemove.getLeft() || !toRemove.getRight())        //if you can splice it and it's the simple case
  {
    this.splice(toRemove);
  }
  else                                                    //if you have to swap and do the complex case
  {
    var w = u.getRight();
    while (w.getLeft())
    {
        w = w.getLeft();
    }
    toRemove.setData(w.getData());
    this.splice(w);
  }
}

//load.js
function load (cb){
/*	reset ({rebuild: false});
	$.get("/skiplist/exercise", function(d){
	    var rows = JSON.parse(d);
	    if (build)
	    	build.rebuild (rows, cb);
	    else
	    	build = new Build(rows, {callback: cb});
	});

	resize ();

	jsPlumb.repaintEverything ();*/


	//random size
	//array of ints in range (# = size)
	//default position
	var i = rand.between(7,25,undefined);
	if (DEBUG)
		console.log("this is i:", i, "\n");
	var myRandN = new RandN(_BinaryTreeMinValue, _BinaryTreeMaxValue, undefined);
	var binaryTreeArr = myRandN.generateUniqueArray(i);
	if (DEBUG)
		console.log("binaryTreeArr: ", binaryTreeArr);

  var binaryTree = new BinaryTree().populate(i, binaryTreeArr);
}

function reset (opts) {
	if (!opts) opts={};

	searchPath = new NodesArray ();
	currentNode = null;

	// reset leading, trailing, and new nodes ... if they exist
	if (exists ("leadingNodes"))  leadingNodes  = new NodesArray ();
	if (exists ("trailingNodes")) trailingNodes = new NodesArray ();
	if (exists ("newNodes"))      newNodes      = new NodesArray ();

	// rebuild if opts.rebuild
	if (build && opts.rebuild !== false)
		build.rebuild (undefined, opts.callback);
}


//DOM.js
var DOM = { };

DOM.domify = function(elem){
	return $(elem)[0];
}

DOM.all = function(selector, from){
	return $(selector, from).add($(from).filter(selector));
}

DOM.leftChild = function (r){
	return DOM.all(".pointer.left", r);
}
DOM.rightChild = function (r){
	return DOM.all(".pointer.right", r);
}
DOM.parent = function(r) {
	return DOM.all(".pointer.parent", r); // <div class='pointer parent'>
}
DOM.dataFrom = function(r){
	return DOM.all(".data", r);
}
DOM.indexFrom = function(r){
	return DOM.all("p.index", r);
}

DOM.nodes = function(){ return $(".node"); }
DOM.getOper = function(){ return $("#operation"); }
DOM.question = function(){ return $("#question"); }
DOM.checkmark = function(){ return $("span.checkmark"); }
DOM.clone = function(){ return $("#reset"); }
DOM.checkBtn = function(){ return $("#checkBtn"); }

DOM.show = function (elem){
	$(elem).removeClass ("hidden");
}
DOM.hide = function (elem){
	$(elem).addClass ("hidden");
}

DOM.moveTo = function(n, p){ $(n).css({top: p.top, left: p.left}); }
DOM.positionOf = function(n){ return $(n).position(); }

DOM.within = function(parent, child){
	var dom1 = DOM.domify (parent);
	var dom2 = DOM.domify (child);

	return ($.contains(dom1, dom2))
}
DOM.contains = function(elem){
	return DOM.within (document, elem);
}

DOM.resize = function (elem, size) {
	$(elem).css ("width", size);
	resize ();
}

// turns a possible JQuery object into DOM element
DOM.from = function (obj){
	return $(obj)[0];
}

DOM.newLength = function(){ return $("<div class='length'></div>"); }
DOM.newData = function (){
	return $("<div class='data'></div>");
}
DOM.newLeft = function() {
	return $("<div class='pointer left'></div>")
}
DOM.newRight = function() {
	return $("<div class='pointer right'></div>")
}
DOM.newParent = function() {
	return $("<div class='pointer parent'></div>")
}
DOM.newNodeP = function() {
	return $("<div class='node'></div");
}
DOM.newNode = function (big){
	var d = DOM.newNodeP();
	var data = DOM.newData();
	var next = DOM.newNext();

	if (big){
		d.addClass ("bigger");
		data.addClass ("bigger");
	}

	return d.append(data).append(next);
}
