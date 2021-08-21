"use strict";(self.webpackChunkjupyterlab_bpmn=self.webpackChunkjupyterlab_bpmn||[]).push([[170],{170:(t,e,r)=>{r.r(e),r.d(e,{default:()=>U});var n=/^class /;function i(t){return"[object Array]"===Object.prototype.toString.call(t)}function o(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function s(){var t=Array.prototype.slice.call(arguments);1===t.length&&i(t[0])&&(t=t[0]);var e=t.pop();return e.$inject=t,e}var a=/constructor\s*[^(]*\(\s*([^)]*)\)/m,h=/^(?:async )?(?:function\s*)?[^(]*\(\s*([^)]*)\)/m,c=/\/\*([^*]*)\*\//m;function u(t){if("function"!=typeof t)throw new Error('Cannot annotate "'+t+'". Expected a function!');var e=t.toString().match(function(t){return n.test(t.toString())}(t)?a:h);return e&&e[1]&&e[1].split(",").map((function(t){return(e=t.match(c))?e[1].trim():t.trim()}))||[]}function p(){var t=[];this.factory=function(e,r){return t.push([e,"factory",r]),this},this.value=function(e,r){return t.push([e,"value",r]),this},this.type=function(e,r){return t.push([e,"type",r]),this},this.forEach=function(e){t.forEach(e)}}function f(t,e){e=e||{get:function(t,e){if(r.push(t),!1===e)return null;throw c('No provider for "'+t+'"!')}};var r=[],n=this._providers=Object.create(e._providers||null),a=this._instances=Object.create(null),h=a.injector=this,c=function(t){var e=r.join(" -> ");return r.length=0,new Error(e?t+" (Resolving: "+e+")":t)},d=function(t,i){if(!n[t]&&-1!==t.indexOf(".")){for(var s=t.split("."),h=d(s.shift());s.length;)h=h[s.shift()];return h}if(o(a,t))return a[t];if(o(n,t)){if(-1!==r.indexOf(t))throw r.push(t),c("Cannot resolve circular dependency!");return r.push(t),a[t]=n[t][0](n[t][1]),r.pop(),a[t]}return e.get(t,i)},l=function(t,e){if(void 0===e&&(e={}),"function"!=typeof t){if(!i(t))throw new Error('Cannot invoke "'+t+'". Expected a function!');t=s(t.slice())}return{fn:t,dependencies:(t.$inject||u(t)).map((function(t){return o(e,t)?e[t]:d(t)}))}},v=function(t){var e=l(t),r=e.fn,n=e.dependencies;return new(Function.prototype.bind.apply(r,[null].concat(n)))},y=function(t,e,r){var n=l(t,r),i=n.fn,o=n.dependencies;return i.apply(e,o)},_=function(t){return s((function(e){return t.get(e)}))},g={factory:y,type:v,value:function(t){return t}};t.forEach((function(t){function e(t,e){return"value"!==t&&i(e)&&(e=s(e.slice())),e}if(t instanceof p)t.forEach((function(t){var r=t[0],i=t[1],o=t[2];n[r]=[g[i],e(i,o),i]}));else if("object"==typeof t)if(t.__exports__){var r=Object.keys(t).reduce((function(e,r){return"__"!==r.substring(0,2)&&(e[r]=t[r]),e}),Object.create(null)),o=new f((t.__modules__||[]).concat([r]),h),a=s((function(t){return o.get(t)}));t.__exports__.forEach((function(t){n[t]=[a,t,"private",o]}))}else Object.keys(t).forEach((function(r){if("private"!==t[r][2]){var i=t[r][0],o=t[r][1];n[r]=[g[i],e(i,o),i]}else n[r]=t[r]}))})),this.get=d,this.invoke=y,this.instantiate=v,this.createChild=function(t,e){if(e&&e.length){var r,i,o,s,a=Object.create(null),c=Object.create(null),u=[],p=[],d=[];for(var l in n)r=n[l],-1!==e.indexOf(l)&&("private"===r[2]?-1===(i=u.indexOf(r[3]))?(o=r[3].createChild([],e),s=_(o),u.push(r[3]),p.push(o),d.push(s),a[l]=[s,l,"private",o]):a[l]=[d[i],l,"private",p[i]]:a[l]=[r[2],r[1]],c[l]=!0),"factory"!==r[2]&&"type"!==r[2]||!r[1].$scope||e.forEach((function(t){-1!==r[1].$scope.indexOf(t)&&(a[l]=[r[2],r[1]],c[t]=!0)}));e.forEach((function(t){if(!c[t])throw new Error('No provider for "'+t+'". Cannot use provider from the parent!')})),t.unshift(a)}return new f(t,h)}}var d=r(717),l=r.n(d),v=r(858),y=r(230),_=r(487),g=r(490);function m(t,e){v.Z.call(this,t,1),this.CONNECTION_STYLE=e.style(["no-fill"],{strokeWidth:5,stroke:"fuchsia"}),this.SHAPE_STYLE=e.style({fill:"white",stroke:"fuchsia",strokeWidth:2}),this.FRAME_STYLE=e.style(["no-fill"],{stroke:"fuchsia",strokeDasharray:4,strokeWidth:2})}l()(m,v.Z),m.prototype.canRender=function(){return!0},m.prototype.drawShape=function(t,e){var r=(0,_.Ue)("rect");return(0,_.Lj)(r,{x:0,y:0,width:e.width||0,height:e.height||0}),(0,g.He)(e)?(0,_.Lj)(r,this.FRAME_STYLE):(0,_.Lj)(r,this.SHAPE_STYLE),(0,_.R3)(t,r),r},m.prototype.drawConnection=function(t,e){var r=(0,y.W5)(e.waypoints,this.CONNECTION_STYLE);return(0,_.R3)(t,r),r},m.prototype.getShapePath=function(t){var e=t.x,r=t.y,n=t.width,i=[["M",e,r],["l",n,0],["l",0,t.height],["l",-n,0],["z"]];return(0,y.KO)(i)},m.prototype.getConnectionPath=function(t){var e,r,n=t.waypoints,i=[];for(e=0;r=n[e];e++)r=r.original||r,i.push([0===e?"M":"L",r.x,r.y]);return(0,y.KO)(i)},m.$inject=["eventBus","styles"];var w=r(670);const x={__init__:["defaultRenderer"],defaultRenderer:["type",m],styles:["type",function(){var t={"no-fill":{fill:"none"},"no-border":{strokeOpacity:0},"no-events":{pointerEvents:"none"}},e=this;this.cls=function(t,e,r){var n=this.style(e,r);return(0,w.f0)(n,{class:t})},this.style=function(e,r){(0,w.kJ)(e)||r||(r=e,e=[]);var n=(0,w.u4)(e,(function(e,r){return(0,w.f0)(e,t[r]||{})}),{});return r?(0,w.f0)(n,r):n},this.computeStyle=function(t,r,n){return(0,w.kJ)(r)||(n=r,r=[]),e.style(r||[],(0,w.f0)({},n,t||{}))}}]};var b=r(943),E=r(935);function k(t,e){return Math.round(t*e)/e}function j(t){return(0,w.hj)(t)?t+"px":t}function L(t,e,r){var n=(0,_.Ue)("g");(0,_.Sh)(n).add(e);var i=void 0!==r?r:t.childNodes.length-1;return t.insertBefore(n,t.childNodes[i]||null),n}var C={shape:["x","y","width","height"],connection:["waypoints"]};function S(t,e,r,n){this._eventBus=e,this._elementRegistry=n,this._graphicsFactory=r,this._init(t||{})}function B(t,e){var r="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")";t.setAttribute("transform",r)}S.$inject=["config.canvas","eventBus","graphicsFactory","elementRegistry"],S.prototype._init=function(t){var e=this._eventBus,r=this._container=function(t){var e=(t=(0,w.f0)({},{width:"100%",height:"100%"},t)).container||document.body,r=document.createElement("div");return r.setAttribute("class","djs-container"),(0,w.f0)(r.style,{position:"relative",overflow:"hidden",width:j(t.width),height:j(t.height)}),e.appendChild(r),r}(t),n=this._svg=(0,_.Ue)("svg");(0,_.Lj)(n,{width:"100%",height:"100%"}),(0,_.R3)(r,n);var i=this._viewport=L(n,"viewport");this._layers={},!1!==t.deferUpdate&&(this._viewboxChanged=(0,w.Ds)((0,w.ak)(this._viewboxChanged,this),300)),e.on("diagram.init",(function(){e.fire("canvas.init",{svg:n,viewport:i})}),this),e.on(["shape.added","connection.added","shape.removed","connection.removed","elements.changed"],(function(){delete this._cachedViewbox}),this),e.on("diagram.destroy",500,this._destroy,this),e.on("diagram.clear",500,this._clear,this)},S.prototype._destroy=function(t){this._eventBus.fire("canvas.destroy",{svg:this._svg,viewport:this._viewport});var e=this._container.parentNode;e&&e.removeChild(this._container),delete this._svg,delete this._container,delete this._layers,delete this._rootElement,delete this._viewport},S.prototype._clear=function(){var t=this;this._elementRegistry.getAll().forEach((function(e){var r=(0,g.oL)(e);"root"===r?t.setRootElement(null,!0):t._removeElement(e,r)})),delete this._cachedViewbox},S.prototype.getDefaultLayer=function(){return this.getLayer("base",0)},S.prototype.getLayer=function(t,e){if(!t)throw new Error("must specify a name");var r=this._layers[t];if(r||(r=this._layers[t]=this._createLayer(t,e)),void 0!==e&&r.index!==e)throw new Error("layer <"+t+"> already created at index <"+e+">");return r.group},S.prototype._createLayer=function(t,e){e||(e=0);var r=(0,w.u4)(this._layers,(function(t,r){return e>=r.index&&t++,t}),0);return{group:L(this._viewport,"layer-"+t,r),index:e}},S.prototype.getContainer=function(){return this._container},S.prototype._updateMarker=function(t,e,r){var n;t.id||(t=this._elementRegistry.get(t)),(n=this._elementRegistry._elements[t.id])&&((0,w.Ed)([n.gfx,n.secondaryGfx],(function(t){t&&(r?(0,_.Sh)(t).add(e):(0,_.Sh)(t).remove(e))})),this._eventBus.fire("element.marker.update",{element:t,gfx:n.gfx,marker:e,add:!!r}))},S.prototype.addMarker=function(t,e){this._updateMarker(t,e,!0)},S.prototype.removeMarker=function(t,e){this._updateMarker(t,e,!1)},S.prototype.hasMarker=function(t,e){t.id||(t=this._elementRegistry.get(t));var r=this.getGraphics(t);return(0,_.Sh)(r).has(e)},S.prototype.toggleMarker=function(t,e){this.hasMarker(t,e)?this.removeMarker(t,e):this.addMarker(t,e)},S.prototype.getRootElement=function(){return this._rootElement||this.setRootElement({id:"__implicitroot",children:[]}),this._rootElement},S.prototype.setRootElement=function(t,e){t&&this._ensureValid("root",t);var r=this._rootElement,n=this._elementRegistry,i=this._eventBus;if(r){if(!e)throw new Error("rootElement already set, need to specify override");i.fire("root.remove",{element:r}),i.fire("root.removed",{element:r}),n.remove(r)}if(t){var o=this.getDefaultLayer();i.fire("root.add",{element:t}),n.add(t,o,this._svg),i.fire("root.added",{element:t,gfx:o})}return this._rootElement=t,t},S.prototype._ensureValid=function(t,e){if(!e.id)throw new Error("element must have an id");if(this._elementRegistry.get(e.id))throw new Error("element with id "+e.id+" already exists");var r=C[t];if(!(0,w.yW)(r,(function(t){return void 0!==e[t]})))throw new Error("must supply { "+r.join(", ")+" } with "+t)},S.prototype._setParent=function(t,e,r){(0,b.IH)(e.children,t,r),t.parent=e},S.prototype._addElement=function(t,e,r,n){r=r||this.getRootElement();var i=this._eventBus,o=this._graphicsFactory;this._ensureValid(t,e),i.fire(t+".add",{element:e,parent:r}),this._setParent(e,r,n);var s=o.create(t,e,n);return this._elementRegistry.add(e,s),o.update(t,e,s),i.fire(t+".added",{element:e,gfx:s}),e},S.prototype.addShape=function(t,e,r){return this._addElement("shape",t,e,r)},S.prototype.addConnection=function(t,e,r){return this._addElement("connection",t,e,r)},S.prototype._removeElement=function(t,e){var r=this._elementRegistry,n=this._graphicsFactory,i=this._eventBus;if(t=r.get(t.id||t))return i.fire(e+".remove",{element:t}),n.remove(t),(0,b.Od)(t.parent&&t.parent.children,t),t.parent=null,i.fire(e+".removed",{element:t}),r.remove(t),t},S.prototype.removeShape=function(t){return this._removeElement(t,"shape")},S.prototype.removeConnection=function(t){return this._removeElement(t,"connection")},S.prototype.getGraphics=function(t,e){return this._elementRegistry.getGraphics(t,e)},S.prototype._changeViewbox=function(t){this._eventBus.fire("canvas.viewbox.changing"),t.apply(this),this._cachedViewbox=null,this._viewboxChanged()},S.prototype._viewboxChanged=function(){this._eventBus.fire("canvas.viewbox.changed",{viewbox:this.viewbox()})},S.prototype.viewbox=function(t){if(void 0===t&&this._cachedViewbox)return this._cachedViewbox;var e,r,n,i,o,s,a=this._viewport,h=this.getSize();return t?(this._changeViewbox((function(){i=Math.min(h.width/t.width,h.height/t.height);var e=this._svg.createSVGMatrix().scale(i).translate(-t.x,-t.y);(0,_.vs)(a,e)})),t):(e=this.getDefaultLayer().getBBox(),r=(n=(0,_.vs)(a))?n.matrix:(0,_.wz)(),i=k(r.a,1e3),o=k(-r.e||0,1e3),s=k(-r.f||0,1e3),t=this._cachedViewbox={x:o?o/i:0,y:s?s/i:0,width:h.width/i,height:h.height/i,scale:i,inner:{width:e.width,height:e.height,x:e.x,y:e.y},outer:h})},S.prototype.scroll=function(t){var e=this._viewport,r=e.getCTM();return t&&this._changeViewbox((function(){t=(0,w.f0)({dx:0,dy:0},t||{}),r=this._svg.createSVGMatrix().translate(t.dx,t.dy).multiply(r),B(e,r)})),{x:r.e,y:r.f}},S.prototype.scrollToElement=function(t,e){var r=100;e||(e={}),"number"==typeof e&&(r=e),e={top:e.top||r,right:e.right||r,bottom:e.bottom||r,left:e.left||r};var n,i,o=(0,g.jY)(t),s=(0,E.JA)(o),a=this.viewbox(),h=this.zoom();a.y+=e.top/h,a.x+=e.left/h,a.width-=(e.right+e.left)/h,a.height-=(e.bottom+e.top)/h;var c=(0,E.JA)(a);if(o.width<a.width&&o.height<a.height){var u=Math.max(0,s.right-c.right),p=Math.min(0,s.left-c.left),f=Math.max(0,s.bottom-c.bottom),d=Math.min(0,s.top-c.top);n=u||p,i=f||d}else n=o.x-a.x,i=o.y-a.y;this.scroll({dx:-n*h,dy:-i*h})},S.prototype.zoom=function(t,e){return t?"fit-viewport"===t?this._fitViewport(e):(this._changeViewbox((function(){"object"!=typeof e&&(r=this.viewbox().outer,e={x:r.width/2,y:r.height/2}),n=this._setZoom(t,e)})),k(n.a,1e3)):this.viewbox(t).scale;var r,n},S.prototype._fitViewport=function(t){var e,r,n=this.viewbox(),i=n.outer,o=n.inner;return o.x>=0&&o.y>=0&&o.x+o.width<=i.width&&o.y+o.height<=i.height&&!t?r={x:0,y:0,width:Math.max(o.width+o.x,i.width),height:Math.max(o.height+o.y,i.height)}:(e=Math.min(1,i.width/o.width,i.height/o.height),r={x:o.x+(t?o.width/2-i.width/e/2:0),y:o.y+(t?o.height/2-i.height/e/2:0),width:i.width/e,height:i.height/e}),this.viewbox(r),this.viewbox(!1).scale},S.prototype._setZoom=function(t,e){var r,n,i,o,s=this._svg,a=this._viewport,h=s.createSVGMatrix(),c=s.createSVGPoint(),u=(n=a.getCTM()).a;return e?(r=(0,w.f0)(c,e).matrixTransform(n.inverse()),i=h.translate(r.x,r.y).scale(1/u*t).translate(-r.x,-r.y),o=n.multiply(i)):o=h.scale(t),B(this._viewport,o),o},S.prototype.getSize=function(){return{width:this._container.clientWidth,height:this._container.clientHeight}},S.prototype.getAbsoluteBBox=function(t){var e,r=this.viewbox();return{x:(e=t.waypoints?this.getGraphics(t).getBBox():t).x*r.scale-r.x*r.scale,y:e.y*r.scale-r.y*r.scale,width:e.width*r.scale,height:e.height*r.scale}},S.prototype.resized=function(){delete this._cachedViewbox,this._eventBus.fire("canvas.resized")};var R="data-element-id";function M(t){this._elements={},this._eventBus=t}M.$inject=["eventBus"],M.prototype.add=function(t,e,r){var n=t.id;this._validateId(n),(0,_.Lj)(e,R,n),r&&(0,_.Lj)(r,R,n),this._elements[n]={element:t,gfx:e,secondaryGfx:r}},M.prototype.remove=function(t){var e=this._elements,r=t.id||t,n=r&&e[r];n&&((0,_.Lj)(n.gfx,R,""),n.secondaryGfx&&(0,_.Lj)(n.secondaryGfx,R,""),delete e[r])},M.prototype.updateId=function(t,e){this._validateId(e),"string"==typeof t&&(t=this.get(t)),this._eventBus.fire("element.updateId",{element:t,newId:e});var r=this.getGraphics(t),n=this.getGraphics(t,!0);this.remove(t),t.id=e,this.add(t,r,n)},M.prototype.get=function(t){var e;e="string"==typeof t?t:t&&(0,_.Lj)(t,R);var r=this._elements[e];return r&&r.element},M.prototype.filter=function(t){var e=[];return this.forEach((function(r,n){t(r,n)&&e.push(r)})),e},M.prototype.find=function(t){for(var e=this._elements,r=Object.keys(e),n=0;n<r.length;n++){var i=e[r[n]],o=i.element;if(t(o,i.gfx))return o}},M.prototype.getAll=function(){return this.filter((function(t){return t}))},M.prototype.forEach=function(t){var e=this._elements;Object.keys(e).forEach((function(r){var n=e[r],i=n.element,o=n.gfx;return t(i,o)}))},M.prototype.getGraphics=function(t,e){var r=t.id||t,n=this._elements[r];return n&&(e?n.secondaryGfx:n.gfx)},M.prototype._validateId=function(t){if(!t)throw new Error("element must have an id");if(this._elements[t])throw new Error("element with id "+t+" already added")};var O=r(149),V=Array.prototype.slice;function G(){this._listeners={},this.on("diagram.destroy",1,this._destroy,this)}function P(){}G.prototype.on=function(t,e,r,n){if(t=(0,w.kJ)(t)?t:[t],(0,w.mf)(e)&&(n=r,r=e,e=1e3),!(0,w.hj)(e))throw new Error("priority must be a number");var i=r;n&&((i=(0,w.ak)(r,n)).__fn=r.__fn||r);var o=this;t.forEach((function(t){o._addListener(t,{priority:e,callback:i,next:null})}))},G.prototype.once=function(t,e,r,n){var i=this;if((0,w.mf)(e)&&(n=r,r=e,e=1e3),!(0,w.hj)(e))throw new Error("priority must be a number");function o(){o.__isTomb=!0;var e=r.apply(n,arguments);return i.off(t,o),e}o.__fn=r,this.on(t,e,o)},G.prototype.off=function(t,e){t=(0,w.kJ)(t)?t:[t];var r=this;t.forEach((function(t){r._removeListener(t,e)}))},G.prototype.createEvent=function(t){var e=new P;return e.init(t),e},G.prototype.fire=function(t,e){var r,n,i,o;if(o=V.call(arguments),"object"==typeof t&&(t=(e=t).type),!t)throw new Error("no event type specified");if(n=this._listeners[t]){r=e instanceof P?e:this.createEvent(e),o[0]=r;var s=r.type;t!==s&&(r.type=t);try{i=this._invokeListeners(r,o,n)}finally{t!==s&&(r.type=s)}return void 0===i&&r.defaultPrevented&&(i=!1),i}},G.prototype.handleError=function(t){return!1===this.fire("error",{error:t})},G.prototype._destroy=function(){this._listeners={}},G.prototype._invokeListeners=function(t,e,r){for(var n;r&&!t.cancelBubble;)n=this._invokeListener(t,e,r),r=r.next;return n},G.prototype._invokeListener=function(t,e,r){var n;if(r.callback.__isTomb)return n;try{void 0!==(n=function(t,e){return t.apply(null,e)}(r.callback,e))&&(t.returnValue=n,t.stopPropagation()),!1===n&&t.preventDefault()}catch(t){if(!this.handleError(t))throw console.error("unhandled error in event listener"),console.error(t.stack),t}return n},G.prototype._addListener=function(t,e){var r,n=this._getListeners(t);if(n){for(;n;){if(n.priority<e.priority)return e.next=n,void(r?r.next=e:this._setListeners(t,e));r=n,n=n.next}r.next=e}else this._setListeners(t,e)},G.prototype._getListeners=function(t){return this._listeners[t]},G.prototype._setListeners=function(t,e){this._listeners[t]=e},G.prototype._removeListener=function(t,e){var r,n,i,o=this._getListeners(t);if(e)for(;o;)r=o.next,(i=o.callback)!==e&&i.__fn!==e||(n?n.next=r:this._setListeners(t,r)),n=o,o=r;else this._setListeners(t,null)},P.prototype.stopPropagation=function(){this.cancelBubble=!0},P.prototype.preventDefault=function(){this.defaultPrevented=!0},P.prototype.init=function(t){(0,w.f0)(this,t||{})};var N=r(23),A=r(168),T=r(674);function F(t,e){this._eventBus=t,this._elementRegistry=e}function I(t,e,r){var n=r||e.firstChild;t!==n&&e.insertBefore(t,n)}F.$inject=["eventBus","elementRegistry"],F.prototype._getChildrenContainer=function(t){var e,r=this._elementRegistry.getGraphics(t);return t.parent?(e=(0,N.G)(r))||(e=(0,_.Ue)("g"),(0,_.Sh)(e).add("djs-children"),(0,_.R3)(r.parentNode,e)):e=r,e},F.prototype._clear=function(t){var e=(0,N.s)(t);return(0,T.ZH)(e),e},F.prototype._createContainer=function(t,e,r,n){var i=(0,_.Ue)("g");(0,_.Sh)(i).add("djs-group"),void 0!==r?I(i,e,e.childNodes[r]):(0,_.R3)(e,i);var o=(0,_.Ue)("g");(0,_.Sh)(o).add("djs-element"),(0,_.Sh)(o).add("djs-"+t),n&&(0,_.Sh)(o).add("djs-frame"),(0,_.R3)(i,o);var s=(0,_.Ue)("g");return(0,_.Sh)(s).add("djs-visual"),(0,_.R3)(o,s),o},F.prototype.create=function(t,e,r){var n=this._getChildrenContainer(e.parent);return this._createContainer(t,n,r,(0,g.He)(e))},F.prototype.updateContainments=function(t){var e,r=this,n=this._elementRegistry;e=(0,w.u4)(t,(function(t,e){return e.parent&&(t[e.parent.id]=e.parent),t}),{}),(0,w.Ed)(e,(function(t){var e=t.children;if(e){var i=r._getChildrenContainer(t);(0,w.Ed)(e.slice().reverse(),(function(t){I(n.getGraphics(t).parentNode,i)}))}}))},F.prototype.drawShape=function(t,e){return this._eventBus.fire("render.shape",{gfx:t,element:e})},F.prototype.getShapePath=function(t){return this._eventBus.fire("render.getShapePath",t)},F.prototype.drawConnection=function(t,e){return this._eventBus.fire("render.connection",{gfx:t,element:e})},F.prototype.getConnectionPath=function(t){return this._eventBus.fire("render.getConnectionPath",t)},F.prototype.update=function(t,e,r){if(e.parent){var n=this._clear(r);if("shape"===t)this.drawShape(n,e),(0,A.Iu)(r,e.x,e.y);else{if("connection"!==t)throw new Error("unknown type: "+t);this.drawConnection(n,e)}e.hidden?(0,_.Lj)(r,"display","none"):(0,_.Lj)(r,"display","block")}},F.prototype.remove=function(t){var e=this._elementRegistry.getGraphics(t);(0,_.Od)(e.parentNode)};const z={__depends__:[x],__init__:["canvas"],canvas:["type",S],elementRegistry:["type",M],elementFactory:["type",O.Z],eventBus:["type",G],graphicsFactory:["type",F]};function U(t,e){this.injector=e=e||function(t){return function(t){var e=[],r=[];function n(t){return e.indexOf(t)>=0}t.forEach((function t(i){n(i)||((i.__depends__||[]).forEach(t),n(i)||(function(t){e.push(t)}(i),(i.__init__||[]).forEach((function(t){r.push(t)}))))}));var i=new f(e);return r.forEach((function(t){try{i["string"==typeof t?"get":"invoke"](t)}catch(t){throw console.error("Failed to instantiate component"),console.error(t.stack),t}})),i}([{config:["value",t=t||{}]},z].concat(t.modules||[]))}(t),this.get=e.get,this.invoke=e.invoke,this.get("eventBus").fire("diagram.init")}U.prototype.destroy=function(){this.get("eventBus").fire("diagram.destroy")},U.prototype.clear=function(){this.get("eventBus").fire("diagram.clear")}}}]);