(this["webpackJsonpterezapavlikova.github.io"]=this["webpackJsonpterezapavlikova.github.io"]||[]).push([[0],{136:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return i}));var a=r(12),n=r(36),i=(r(27),function(t,e,r,i,o){var u=t.ownerDocument.defaultView;return Object(n.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:r,onMove:function(t){var e=t.deltaX/u.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,r=u.innerWidth,n=e/r,i=t.velocityX,c=r/2,s=i>=0&&(i>.2||t.deltaX>c),h=(s?1-n:n)*r,v=0;if(h>5){var d=h/Math.abs(i);v=Math.min(d,540)}o(s,n<=0?.01:Object(a.j)(0,n,.9999),v)}})})}}]);
//# sourceMappingURL=0.ff0fc942.chunk.js.map