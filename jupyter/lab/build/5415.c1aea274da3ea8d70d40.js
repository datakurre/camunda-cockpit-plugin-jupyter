"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5415],{45415:(e,t,i)=>{i.r(t),i.d(t,{ConnectionLost:()=>s,IConnectionLost:()=>F,ILabShell:()=>H,ILabStatus:()=>O,ILayoutRestorer:()=>y,IMimeDocumentTracker:()=>b,IRouter:()=>N,ITreePathUpdater:()=>U,JupyterFrontEnd:()=>g,JupyterFrontEndContextMenu:()=>o,JupyterLab:()=>R,LabShell:()=>E,LayoutRestorer:()=>v,Router:()=>z,createRendermimePlugin:()=>C,createRendermimePlugins:()=>k});var n=i(5714),r=i(93935);const s=async function(e,t,i){const s=(i=i||r.nullTranslator).load("jupyterlab"),a=s.__("Server Connection Error"),o=s.__("A connection to the Jupyter server could not be established.\nJupyterLab will continue trying to reconnect.\nCheck your network connection or Jupyter server configuration.\n");return(0,n.showErrorMessage)(a,{message:o})};var a,o,d=i(58953),l=i(40959),c=i(86570),h=i(12131),u=i(9727),p=i(75138);class g extends h.Application{constructor(e){super(e),this._formatChanged=new p.Signal(this),this.contextMenu=new c.ContextMenuSvg({commands:this.commands,renderer:e.contextMenuRenderer});const t=new Promise((e=>{requestAnimationFrame((()=>{e()}))}));this.commandLinker=e.commandLinker||new n.CommandLinker({commands:this.commands}),this.docRegistry=e.docRegistry||new d.DocumentRegistry,this.restored=e.restored||this.started.then((()=>t)).catch((()=>t)),this.serviceManager=e.serviceManager||new l.ServiceManager}get format(){return this._format}set format(e){this._format!==e&&(this._format=e,document.body.dataset.format=e,this._formatChanged.emit(e))}get formatChanged(){return this._formatChanged}contextMenuHitTest(e){if(!(this._contextMenuEvent&&this._contextMenuEvent.target instanceof Node))return;let t=this._contextMenuEvent.target;do{if(t instanceof HTMLElement&&e(t))return t;t=t.parentNode}while(t&&t.parentNode&&t!==t.parentNode)}evtContextMenu(e){if(this._contextMenuEvent=e,!e.shiftKey&&!a.suppressContextMenu(e.target)&&this.contextMenu.open(e)){const t=this.contextMenu.menu.items;if(1===t.length&&t[0].command===o.contextMenu)return void this.contextMenu.menu.close();e.preventDefault(),e.stopPropagation()}}}!function(e){e.inDocMode=function(e,t){const i=new RegExp(`^${t.urls.doc}`);return!!e.match(i)},e.IPaths=new u.Token("@jupyterlab/application:IPaths"),e.ITreeResolver=new u.Token("@jupyterlab/application:ITreeResolver")}(g||(g={})),function(e){e.suppressContextMenu=function(e){return null!==e.closest("[data-jp-suppress-context-menu]")}}(a||(a={})),function(e){e.contextMenu="__internal:context-menu-info"}(o||(o={}));var _=i(14390),m=i(45797),f=i(72189);const y=new u.Token("@jupyterlab/application:ILayoutRestorer"),w="layout-restorer:data";class v{constructor(e){this._firstDone=!1,this._promisesDone=!1,this._promises=[],this._restored=new u.PromiseDelegate,this._trackers=new Set,this._widgets=new Map,this._connector=e.connector,this._first=e.first,this._registry=e.registry,this._first.then((()=>{this._firstDone=!0})).then((()=>Promise.all(this._promises))).then((()=>{this._promisesDone=!0,this._trackers.clear()})).then((()=>{this._restored.resolve(void 0)}))}get restored(){return this._restored.promise}add(e,t){P.nameProperty.set(e,t),this._widgets.set(t,e),e.disposed.connect(this._onWidgetDisposed,this)}async fetch(){const e={fresh:!0,mainArea:null,downArea:null,leftArea:null,rightArea:null,relativeSizes:null},t=this._connector.fetch(w);try{const[i]=await Promise.all([t,this.restored]);if(!i)return e;const{main:n,down:r,left:s,right:a,relativeSizes:o}=i,d=!1,l=this._rehydrateMainArea(n),c=this._rehydrateDownArea(r);return{fresh:d,mainArea:l,downArea:c,leftArea:this._rehydrateSideArea(s),rightArea:this._rehydrateSideArea(a),relativeSizes:o||null}}catch(t){return e}}restore(e,t){const i="restore() can only be called before `first` has resolved.";if(this._firstDone)return console.warn(i),Promise.reject(i);const{namespace:n}=e;if(this._trackers.has(n)){const e=`A tracker namespaced ${n} was already restored.`;return console.warn(e),Promise.reject(e)}const{args:r,command:s,name:a,when:o}=t;this._trackers.add(n),e.widgetAdded.connect(((e,t)=>{const i=a(t);i&&this.add(t,`${n}:${i}`)}),this),e.widgetUpdated.connect(((e,t)=>{const i=a(t);if(i){const e=`${n}:${i}`;P.nameProperty.set(t,e),this._widgets.set(e,t)}}));const d=this._first,l=e.restore({args:r||(()=>u.JSONExt.emptyObject),command:s,connector:this._connector,name:a,registry:this._registry,when:o?[d].concat(o):d}).catch((e=>{console.error(e)}));return this._promises.push(l),l}save(e){if(!this._promisesDone){const e="save() was called prematurely.";return console.warn(e),Promise.reject(e)}const t={};return t.main=this._dehydrateMainArea(e.mainArea),t.down=this._dehydrateDownArea(e.downArea),t.left=this._dehydrateSideArea(e.leftArea),t.right=this._dehydrateSideArea(e.rightArea),t.relativeSizes=e.relativeSizes,this._connector.save(w,t)}_dehydrateMainArea(e){return e?P.serializeMain(e):null}_rehydrateMainArea(e){return e?P.deserializeMain(e,this._widgets):null}_dehydrateDownArea(e){if(!e)return null;const t={size:e.size};if(e.currentWidget){const i=P.nameProperty.get(e.currentWidget);i&&(t.current=i)}return e.widgets&&(t.widgets=e.widgets.map((e=>P.nameProperty.get(e))).filter((e=>!!e))),t}_rehydrateDownArea(e){var t;if(!e)return{currentWidget:null,size:0,widgets:null};const i=this._widgets,n=e.current&&i.has(`${e.current}`)?i.get(`${e.current}`):null,r=Array.isArray(e.widgets)?e.widgets.map((e=>i.has(`${e}`)?i.get(`${e}`):null)).filter((e=>!!e)):null;return{currentWidget:n,size:null!==(t=e.size)&&void 0!==t?t:0,widgets:r}}_dehydrateSideArea(e){if(!e)return null;const t={collapsed:e.collapsed};if(e.currentWidget){const i=P.nameProperty.get(e.currentWidget);i&&(t.current=i)}return e.widgets&&(t.widgets=e.widgets.map((e=>P.nameProperty.get(e))).filter((e=>!!e))),t}_rehydrateSideArea(e){var t;if(!e)return{collapsed:!0,currentWidget:null,widgets:null};const i=this._widgets;return{collapsed:null!==(t=e.collapsed)&&void 0!==t&&t,currentWidget:e.current&&i.has(`${e.current}`)?i.get(`${e.current}`):null,widgets:Array.isArray(e.widgets)?e.widgets.map((e=>i.has(`${e}`)?i.get(`${e}`):null)).filter((e=>!!e)):null}}_onWidgetDisposed(e){const t=P.nameProperty.get(e);this._widgets.delete(t)}}var P;!function(e){function t(i){return i&&i.type?"tab-area"===i.type?{type:"tab-area",currentIndex:i.currentIndex,widgets:i.widgets.map((t=>e.nameProperty.get(t))).filter((e=>!!e))}:{type:"split-area",orientation:i.orientation,sizes:i.sizes,children:i.children.map(t).filter((e=>!!e))}:null}function i(e,t){if(!e)return null;const n=e.type||"unknown";if("unknown"===n||"tab-area"!==n&&"split-area"!==n)return console.warn(`Attempted to deserialize unknown type: ${n}`),null;if("tab-area"===n){const{currentIndex:i,widgets:n}=e,r={type:"tab-area",currentIndex:i||0,widgets:n&&n.map((e=>t.get(e))).filter((e=>!!e))||[]};return r.currentIndex>r.widgets.length-1&&(r.currentIndex=0),r}const{orientation:r,sizes:s,children:a}=e;return{type:"split-area",orientation:r,sizes:s||[],children:a&&a.map((e=>i(e,t))).filter((e=>!!e))||[]}}e.nameProperty=new f.AttachedProperty({name:"name",create:e=>""}),e.serializeMain=function(i){const n={dock:i&&i.dock&&t(i.dock.main)||null};if(i&&i.currentWidget){const t=e.nameProperty.get(i.currentWidget);t&&(n.current=t)}return n},e.deserializeMain=function(e,t){if(!e)return null;const n=e.current||null,r=e.dock||null;return{currentWidget:n&&t.has(n)&&t.get(n)||null,dock:r?{main:i(r,t)}:null}}}(P||(P={}));const b=new u.Token("@jupyterlab/application:IMimeDocumentTracker");function k(e){const t=[],i=new n.WidgetTracker({namespace:"application-mimedocuments"});return e.forEach((e=>{let n=e.default;e.hasOwnProperty("__esModule")||(n=e),Array.isArray(n)||(n=[n]),n.forEach((e=>{t.push(C(i,e))}))})),t.push({id:"@jupyterlab/application:mimedocument",optional:[y],provides:b,autoStart:!0,activate:(e,t)=>(t&&t.restore(i,{command:"docmanager:open",args:e=>({path:e.context.path,factory:A.factoryNameProperty.get(e)}),name:e=>`${e.context.path}:${A.factoryNameProperty.get(e)}`}),i)}),t}function C(e,t){return{id:t.id,requires:[m.IRenderMimeRegistry,r.ITranslator],autoStart:!0,activate:(i,n,r)=>{if(void 0!==t.rank?n.addFactory(t.rendererFactory,t.rank):n.addFactory(t.rendererFactory),!t.documentWidgetFactoryOptions)return;const s=i.docRegistry;let a=[];a=Array.isArray(t.documentWidgetFactoryOptions)?t.documentWidgetFactoryOptions:[t.documentWidgetFactoryOptions],t.fileTypes&&t.fileTypes.forEach((e=>{e.icon&&(e=Object.assign(Object.assign({},e),{icon:c.LabIcon.resolve({icon:e.icon})})),i.docRegistry.addFileType(e)})),a.forEach((i=>{const a=i.toolbarFactory?e=>i.toolbarFactory(e.content.renderer):void 0,o=new d.MimeDocumentFactory({renderTimeout:t.renderTimeout,dataType:t.dataType,rendermime:n,modelName:i.modelName,name:i.name,primaryFileType:s.getFileType(i.primaryFileType),fileTypes:i.fileTypes,defaultFor:i.defaultFor,defaultRendered:i.defaultRendered,toolbarFactory:a,translator:r,factory:t.rendererFactory});s.addWidgetFactory(o),o.widgetCreated.connect(((t,i)=>{A.factoryNameProperty.set(i,o.name),i.context.pathChanged.connect((()=>{e.save(i)})),e.add(i)}))}))}}}var A;!function(e){e.factoryNameProperty=new f.AttachedProperty({name:"factoryName",create:()=>{}})}(A||(A={}));var T=i(62867),B=i(32151),x=i(87598),W=i(61389);const S="jp-SideBar",M=900,L="jp-Activity",H=new u.Token("@jupyterlab/application:ILabShell");class E extends W.Widget{constructor(e){super(),this._dockChildHook=(e,t)=>{switch(t.type){case"child-added":t.child.addClass(L),this._tracker.add(t.child);break;case"child-removed":t.child.removeClass(L),this._tracker.remove(t.child)}return!0},this._activeChanged=new p.Signal(this),this._cachedLayout=null,this._currentChanged=new p.Signal(this),this._currentPath="",this._currentPathChanged=new p.Signal(this),this._modeChanged=new p.Signal(this),this._isRestored=!1,this._layoutModified=new p.Signal(this),this._layoutDebouncer=new x.Debouncer((()=>{this._layoutModified.emit(void 0)}),0),this._restored=new u.PromiseDelegate,this._tracker=new W.FocusTracker,this._mainOptionsCache=new Map,this._sideOptionsCache=new Map,this.addClass("jp-LabShell"),this.id="main";const t=(e&&e.translator||r.nullTranslator).load("jupyterlab"),i=this._headerPanel=new W.BoxPanel,n=this._menuHandler=new j.PanelHandler;n.panel.node.setAttribute("role","navigation"),n.panel.node.setAttribute("aria-label",t.__("main"));const s=this._topHandler=new j.PanelHandler;s.panel.node.setAttribute("role","banner");const a=this._bottomPanel=new W.BoxPanel;a.node.setAttribute("role","contentinfo");const o=new W.BoxPanel,l=this._vsplitPanel=new j.RestorableSplitPanel,h=this._dockPanel=new c.DockPanelSvg;B.MessageLoop.installMessageHook(h,this._dockChildHook);const g=this._hsplitPanel=new j.RestorableSplitPanel,_=this._downPanel=new c.TabPanelSvg({tabsMovable:!0}),m=this._leftHandler=new j.SideBarHandler,f=this._rightHandler=new j.SideBarHandler,y=new W.BoxLayout;i.id="jp-header-panel",n.panel.id="jp-menu-panel",s.panel.id="jp-top-panel",a.id="jp-bottom-panel",o.id="jp-main-content-panel",l.id="jp-main-vsplit-panel",h.id="jp-main-dock-panel",g.id="jp-main-split-panel",_.id="jp-down-stack",m.sideBar.addClass(S),m.sideBar.addClass("jp-mod-left"),m.sideBar.node.setAttribute("aria-label",t.__("main sidebar")),m.sideBar.contentNode.setAttribute("aria-label",t.__("main sidebar")),m.sideBar.node.setAttribute("role","complementary"),m.stackedPanel.id="jp-left-stack",f.sideBar.addClass(S),f.sideBar.addClass("jp-mod-right"),f.sideBar.node.setAttribute("aria-label",t.__("alternate sidebar")),f.sideBar.contentNode.setAttribute("aria-label",t.__("alternate sidebar")),f.sideBar.node.setAttribute("role","complementary"),f.stackedPanel.id="jp-right-stack",h.node.setAttribute("role","main"),o.spacing=0,l.spacing=1,h.spacing=5,g.spacing=1,i.direction="top-to-bottom",l.orientation="vertical",o.direction="left-to-right",g.orientation="horizontal",a.direction="bottom-to-top",W.SplitPanel.setStretch(m.stackedPanel,0),W.SplitPanel.setStretch(_,0),W.SplitPanel.setStretch(h,1),W.SplitPanel.setStretch(f.stackedPanel,0),W.BoxPanel.setStretch(m.sideBar,0),W.BoxPanel.setStretch(g,1),W.BoxPanel.setStretch(f.sideBar,0),W.SplitPanel.setStretch(l,1),g.addWidget(m.stackedPanel),g.addWidget(h),g.addWidget(f.stackedPanel),l.addWidget(g),l.addWidget(_),o.addWidget(m.sideBar),o.addWidget(l),o.addWidget(f.sideBar),y.direction="top-to-bottom",y.spacing=0,l.setRelativeSizes([3,1]),g.setRelativeSizes([1,2.5,1]),W.BoxLayout.setStretch(i,0),W.BoxLayout.setStretch(n.panel,0),W.BoxLayout.setStretch(s.panel,0),W.BoxLayout.setStretch(o,1),W.BoxLayout.setStretch(a,0),y.addWidget(i),y.addWidget(s.panel),y.addWidget(o),y.addWidget(a),this._headerPanel.hide(),this._bottomPanel.hide(),this._downPanel.hide(),this.layout=y,this._tracker.currentChanged.connect(this._onCurrentChanged,this),this._tracker.activeChanged.connect(this._onActiveChanged,this),this._dockPanel.layoutModified.connect(this._onLayoutModified,this),this._vsplitPanel.updated.connect(this._onLayoutModified,this),this._downPanel.currentChanged.connect(this._onLayoutModified,this),this._downPanel.tabBar.tabMoved.connect(this._onTabPanelChanged,this),this._downPanel.stackedPanel.widgetRemoved.connect(this._onTabPanelChanged,this),this._leftHandler.sideBar.currentChanged.connect(this._onLayoutModified,this),this._rightHandler.sideBar.currentChanged.connect(this._onLayoutModified,this),this._hsplitPanel.updated.connect(this._onLayoutModified,this);const w=this._titleHandler=new j.TitleHandler(this);this.add(w,"top",{rank:100}),"multiple-document"===this._dockPanel.mode?(this._topHandler.addWidget(this._menuHandler.panel,100),w.hide()):y.insertWidget(2,this._menuHandler.panel);const v=this._skipLinkWidget=new j.SkipLinkWidget(this);this.add(v,"top",{rank:0}),this._skipLinkWidget.show(),this.currentChanged.connect(((e,t)=>{let i=t.newValue,n=t.oldValue;n&&n.title.changed.disconnect(this._updateTitlePanelTitle,this),i&&(i.title.changed.connect(this._updateTitlePanelTitle,this),this._updateTitlePanelTitle()),i&&i instanceof d.DocumentWidget&&i.context.pathChanged.connect(this._updateCurrentPath,this),this._updateCurrentPath()}))}get activeChanged(){return this._activeChanged}get activeWidget(){return this._tracker.activeWidget}get currentChanged(){return this._currentChanged}get modeChanged(){return this._modeChanged}get currentPathChanged(){return this._currentPathChanged}get currentWidget(){return this._tracker.currentWidget}get layoutModified(){return this._layoutModified}get leftCollapsed(){return!this._leftHandler.sideBar.currentTitle}get rightCollapsed(){return!this._rightHandler.sideBar.currentTitle}get presentationMode(){return this.hasClass("jp-mod-presentationMode")}set presentationMode(e){this.toggleClass("jp-mod-presentationMode",e)}get mode(){return this._dockPanel.mode}set mode(e){const t=this._dockPanel;if(e===t.mode)return;const i=this.currentWidget;if(t.mode=e,"single-document"===e)this._cachedLayout=t.saveLayout(),this.currentWidget&&t.activateWidget(this.currentWidget),this.layout.insertWidget(2,this._menuHandler.panel),this._titleHandler.show(),this._updateTitlePanelTitle();else{const e=(0,T.toArray)(t.widgets());this._cachedLayout&&(j.normalizeAreaConfig(t,this._cachedLayout.main),t.restoreLayout(this._cachedLayout),this._cachedLayout=null),e.forEach((e=>{e.parent||this._addToMainArea(e,Object.assign(Object.assign({},this._mainOptionsCache.get(e)),{activate:!1}))})),this._mainOptionsCache.clear(),i&&t.activateWidget(i),this.add(this._menuHandler.panel,"top",{rank:100}),this._titleHandler.hide()}this.node.dataset.shellMode=e,this._downPanel.fit(),this._modeChanged.emit(e)}get restored(){return this._restored.promise}activateById(e){if(this._leftHandler.has(e))return void this._leftHandler.activate(e);if(this._rightHandler.has(e))return void this._rightHandler.activate(e);const t=this._downPanel.tabBar.titles.findIndex((t=>t.owner.id===e));if(t>=0)return void(this._downPanel.currentIndex=t);const i=this._dockPanel,n=(0,T.find)(i.widgets(),(t=>t.id===e));n&&i.activateWidget(n)}activateNextTab(){const e=this._currentTabBar();if(!e)return;const t=e.currentIndex;if(-1!==t){if(t<e.titles.length-1)return e.currentIndex+=1,void(e.currentTitle&&e.currentTitle.owner.activate());if(t===e.titles.length-1){const e=this._adjacentBar("next");e&&(e.currentIndex=0,e.currentTitle&&e.currentTitle.owner.activate())}}}activatePreviousTab(){const e=this._currentTabBar();if(!e)return;const t=e.currentIndex;if(-1!==t){if(t>0)return e.currentIndex-=1,void(e.currentTitle&&e.currentTitle.owner.activate());if(0===t){const e=this._adjacentBar("previous");if(e){const t=e.titles.length;e.currentIndex=t-1,e.currentTitle&&e.currentTitle.owner.activate()}}}}activateNextTabBar(){const e=this._adjacentBar("next");e&&e.currentTitle&&e.currentTitle.owner.activate()}activatePreviousTabBar(){const e=this._adjacentBar("previous");e&&e.currentTitle&&e.currentTitle.owner.activate()}add(e,t="main",i){switch(t||"main"){case"bottom":return this._addToBottomArea(e,i);case"down":return this._addToDownArea(e,i);case"header":return this._addToHeaderArea(e,i);case"left":return this._addToLeftArea(e,i);case"main":return this._addToMainArea(e,i);case"menu":return this._addToMenuArea(e,i);case"right":return this._addToRightArea(e,i);case"top":return this._addToTopArea(e,i);default:throw new Error(`Invalid area: ${t}`)}}collapseLeft(){this._leftHandler.collapse(),this._onLayoutModified()}collapseRight(){this._rightHandler.collapse(),this._onLayoutModified()}dispose(){this.isDisposed||(this._layoutDebouncer.dispose(),super.dispose())}expandLeft(){this._leftHandler.expand(),this._onLayoutModified()}expandRight(){this._rightHandler.expand(),this._onLayoutModified()}closeAll(){(0,T.toArray)(this._dockPanel.widgets()).forEach((e=>e.close())),this._downPanel.stackedPanel.widgets.forEach((e=>e.close()))}isEmpty(e){switch(e){case"bottom":return 0===this._bottomPanel.widgets.length;case"down":return 0===this._downPanel.stackedPanel.widgets.length;case"header":return 0===this._headerPanel.widgets.length;case"left":return 0===this._leftHandler.stackedPanel.widgets.length;case"main":return this._dockPanel.isEmpty;case"menu":return 0===this._menuHandler.panel.widgets.length;case"right":return 0===this._rightHandler.stackedPanel.widgets.length;case"top":return 0===this._topHandler.panel.widgets.length;default:return!0}}restoreLayout(e,t){var i,n;const{mainArea:r,downArea:s,leftArea:a,rightArea:o,relativeSizes:d}=t;if(r){const{currentWidget:t,dock:i}=r;i&&this._dockPanel.restoreLayout(i),e&&(this.mode=e),t&&this.activateById(t.id)}else e&&(this.mode=e);if(s){const{currentWidget:e,widgets:t,size:r}=s,a=null!==(i=null==t?void 0:t.map((e=>e.id)))&&void 0!==i?i:[];this._downPanel.tabBar.titles.filter((e=>!a.includes(e.owner.id))).map((e=>e.owner.close()));const o=this._downPanel.tabBar.titles.map((e=>e.owner.id));for(null==t||t.filter((e=>!o.includes(e.id))).map((e=>this._downPanel.addWidget(e)));!T.ArrayExt.shallowEqual(a,this._downPanel.tabBar.titles.map((e=>e.owner.id)));)this._downPanel.tabBar.titles.forEach(((e,t)=>{const i=a.findIndex((t=>e.owner.id==t));i>=0&&i!=t&&this._downPanel.tabBar.insertTab(i,e)}));if(e){const t=this._downPanel.stackedPanel.widgets.findIndex((t=>t.id===e.id));t&&(this._downPanel.currentIndex=t,null===(n=this._downPanel.currentWidget)||void 0===n||n.activate())}r&&r>0?this._vsplitPanel.setRelativeSizes([1-r,r]):(this._downPanel.stackedPanel.widgets.forEach((e=>e.close())),this._downPanel.hide())}a?this._leftHandler.rehydrate(a):"single-document"===e&&this.collapseLeft(),o?this._rightHandler.rehydrate(o):"single-document"===e&&this.collapseRight(),d&&this._hsplitPanel.setRelativeSizes(d),this._isRestored||(B.MessageLoop.flush(),this._restored.resolve(t))}saveLayout(){return{mainArea:{currentWidget:this._tracker.currentWidget,dock:"single-document"===this.mode&&this._cachedLayout||this._dockPanel.saveLayout()},downArea:{currentWidget:this._downPanel.currentWidget,widgets:(0,T.toArray)(this._downPanel.stackedPanel.widgets),size:this._vsplitPanel.relativeSizes()[1]},leftArea:this._leftHandler.dehydrate(),rightArea:this._rightHandler.dehydrate(),relativeSizes:this._hsplitPanel.relativeSizes()}}widgets(e){switch(null!=e?e:"main"){case"main":return this._dockPanel.widgets();case"left":return(0,T.iter)(this._leftHandler.sideBar.titles.map((e=>e.owner)));case"right":return(0,T.iter)(this._rightHandler.sideBar.titles.map((e=>e.owner)));case"header":return this._headerPanel.children();case"top":return this._topHandler.panel.children();case"menu":return this._menuHandler.panel.children();case"bottom":return this._bottomPanel.children();default:throw new Error(`Invalid area: ${e}`)}}onAfterAttach(e){this.node.dataset.shellMode=this.mode}_updateTitlePanelTitle(){let e=this.currentWidget;const t=this._titleHandler.inputElement;t.value=e?e.title.label:"",t.title=e?e.title.caption:""}_updateCurrentPath(){let e=this.currentWidget,t="";e&&e instanceof d.DocumentWidget&&(t=e.context.path),this._currentPathChanged.emit({newValue:t,oldValue:this._currentPath}),this._currentPath=t}_addToLeftArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");t=t||this._sideOptionsCache.get(e)||{},this._sideOptionsCache.set(e,t);const i="rank"in t?t.rank:M;this._leftHandler.addWidget(e,i),this._onLayoutModified()}_addToMainArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");t=t||{};const i=this._dockPanel,n=t.mode||"tab-after";let r=this.currentWidget;t.ref&&(r=(0,T.find)(i.widgets(),(e=>e.id===t.ref))||null);const{title:s}=e;s.dataset=Object.assign(Object.assign({},s.dataset),{id:e.id}),s.icon instanceof c.LabIcon?s.icon=s.icon.bindprops({stylesheet:"mainAreaTab"}):"string"!=typeof s.icon&&s.icon||(s.iconClass=(0,c.classes)(s.iconClass,"jp-Icon")),i.addWidget(e,{mode:n,ref:r}),"single-document"===i.mode&&this._mainOptionsCache.set(e,t),!1!==t.activate&&i.activateWidget(e)}_addToRightArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const i="rank"in(t=t||this._sideOptionsCache.get(e)||{})?t.rank:M;this._sideOptionsCache.set(e,t),this._rightHandler.addWidget(e,i),this._onLayoutModified()}_addToTopArea(e,t){var i;if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const n=null!==(i=(t=t||{}).rank)&&void 0!==i?i:M;this._topHandler.addWidget(e,n),this._onLayoutModified(),this._topHandler.panel.isHidden&&this._topHandler.panel.show()}_addToMenuArea(e,t){var i;if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const n=null!==(i=(t=t||{}).rank)&&void 0!==i?i:M;this._menuHandler.addWidget(e,n),this._onLayoutModified(),this._menuHandler.panel.isHidden&&this._menuHandler.panel.show()}_addToHeaderArea(e,t){e.id?(this._headerPanel.addWidget(e),this._onLayoutModified(),this._headerPanel.isHidden&&this._headerPanel.show()):console.error("Widgets added to app shell must have unique id property.")}_addToBottomArea(e,t){e.id?(this._bottomPanel.addWidget(e),this._onLayoutModified(),this._bottomPanel.isHidden&&this._bottomPanel.show()):console.error("Widgets added to app shell must have unique id property.")}_addToDownArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");t=t||{};const{title:i}=e;i.dataset=Object.assign(Object.assign({},i.dataset),{id:e.id}),i.icon instanceof c.LabIcon?i.icon=i.icon.bindprops({stylesheet:"mainAreaTab"}):"string"!=typeof i.icon&&i.icon||(i.iconClass=(0,c.classes)(i.iconClass,"jp-Icon")),this._downPanel.addWidget(e),this._onLayoutModified(),this._downPanel.isHidden&&this._downPanel.show()}_adjacentBar(e){const t=this._currentTabBar();if(!t)return null;const i=(0,T.toArray)(this._dockPanel.tabBars()),n=i.length,r=i.indexOf(t);return"previous"===e?r>0?i[r-1]:0===r?i[n-1]:null:r<n-1?i[r+1]:r===n-1?i[0]:null}_currentTabBar(){const e=this._tracker.currentWidget;if(!e)return null;const t=e.title,i=this._dockPanel.tabBars();return(0,T.find)(i,(e=>e.titles.indexOf(t)>-1))||null}_onActiveChanged(e,t){t.newValue&&(t.newValue.title.className+=" jp-mod-active"),t.oldValue&&(t.oldValue.title.className=t.oldValue.title.className.replace("jp-mod-active","")),this._activeChanged.emit(t)}_onCurrentChanged(e,t){t.newValue&&(t.newValue.title.className+=" jp-mod-current"),t.oldValue&&(t.oldValue.title.className=t.oldValue.title.className.replace("jp-mod-current","")),this._currentChanged.emit(t),this._onLayoutModified()}_onTabPanelChanged(){0===this._downPanel.stackedPanel.widgets.length&&this._downPanel.hide(),this._onLayoutModified()}_onLayoutModified(){this._layoutDebouncer.invoke()}}var j;!function(e){e.itemCmp=function(e,t){return e.rank-t.rank},e.normalizeAreaConfig=function e(t,i){i&&("tab-area"!==i.type?i.children.forEach((i=>{e(t,i)})):i.widgets=i.widgets.filter((e=>!e.isDisposed&&e.parent===t)))},e.PanelHandler=class{constructor(){this._panelChildHook=(e,t)=>{switch(t.type){case"child-added":{const e=t.child;if(this._items.find((t=>t.widget===e)))break;const i=this._items[this._items.length-1].rank;this._items.push({widget:e,rank:i})}break;case"child-removed":{const e=t.child;T.ArrayExt.removeFirstWhere(this._items,(t=>t.widget===e))}}return!0},this._items=new Array,this._panel=new W.Panel,B.MessageLoop.installMessageHook(this._panel,this._panelChildHook)}get panel(){return this._panel}addWidget(t,i){t.parent=null;const n={widget:t,rank:i},r=T.ArrayExt.upperBound(this._items,n,e.itemCmp);T.ArrayExt.insert(this._items,r,n),this._panel.insertWidget(r,t)}},e.SideBarHandler=class{constructor(){this._items=new Array,this._sideBar=new W.TabBar({insertBehavior:"none",removeBehavior:"none",allowDeselect:!0,orientation:"vertical"}),this._stackedPanel=new W.StackedPanel,this._sideBar.hide(),this._stackedPanel.hide(),this._lastCurrent=null,this._sideBar.currentChanged.connect(this._onCurrentChanged,this),this._sideBar.tabActivateRequested.connect(this._onTabActivateRequested,this),this._stackedPanel.widgetRemoved.connect(this._onWidgetRemoved,this)}get sideBar(){return this._sideBar}get stackedPanel(){return this._stackedPanel}expand(){const e=this._lastCurrent||this._items.length>0&&this._items[0].widget;e&&this.activate(e.id)}activate(e){const t=this._findWidgetByID(e);t&&(this._sideBar.currentTitle=t.title,t.activate())}has(e){return null!==this._findWidgetByID(e)}collapse(){this._sideBar.currentTitle=null}addWidget(e,t){e.parent=null,e.hide();const i={widget:e,rank:t},n=this._findInsertIndex(i);T.ArrayExt.insert(this._items,n,i),this._stackedPanel.insertWidget(n,e);const r=this._sideBar.insertTab(n,e.title);r.dataset={id:e.id},r.icon instanceof c.LabIcon?r.icon=r.icon.bindprops({stylesheet:"sideBar"}):"string"!=typeof r.icon&&r.icon||(r.iconClass=(0,c.classes)(r.iconClass,"jp-Icon","jp-Icon-20")),this._refreshVisibility()}dehydrate(){const e=null===this._sideBar.currentTitle,t=(0,T.toArray)(this._stackedPanel.widgets);return{collapsed:e,currentWidget:t[this._sideBar.currentIndex],widgets:t}}rehydrate(e){e.currentWidget&&this.activate(e.currentWidget.id),e.collapsed&&this.collapse()}_findInsertIndex(t){return T.ArrayExt.upperBound(this._items,t,e.itemCmp)}_findWidgetIndex(e){return T.ArrayExt.findFirstIndex(this._items,(t=>t.widget===e))}_findWidgetByTitle(e){const t=(0,T.find)(this._items,(t=>t.widget.title===e));return t?t.widget:null}_findWidgetByID(e){const t=(0,T.find)(this._items,(t=>t.widget.id===e));return t?t.widget:null}_refreshVisibility(){this._sideBar.setHidden(0===this._sideBar.titles.length),this._stackedPanel.setHidden(null===this._sideBar.currentTitle)}_onCurrentChanged(e,t){const i=t.previousTitle?this._findWidgetByTitle(t.previousTitle):null,n=t.currentTitle?this._findWidgetByTitle(t.currentTitle):null;i&&i.hide(),n&&n.show(),this._lastCurrent=n||i,this._refreshVisibility()}_onTabActivateRequested(e,t){t.title.owner.activate()}_onWidgetRemoved(e,t){t===this._lastCurrent&&(this._lastCurrent=null),T.ArrayExt.removeAt(this._items,this._findWidgetIndex(t)),this._sideBar.removeTab(t.title),this._refreshVisibility()}};class t extends W.Widget{constructor(e){super(),this.addClass("jp-skiplink"),this.id="jp-skiplink",this._shell=e,this._createSkipLink("Skip to left side bar")}handleEvent(e){switch(e.type){case"click":this._focusLeftSideBar()}}onAfterAttach(e){super.onAfterAttach(e),this.node.addEventListener("click",this)}onBeforeDetach(e){this.node.removeEventListener("click",this),super.onBeforeDetach(e)}_focusLeftSideBar(){this._shell.expandLeft()}_createSkipLink(e){const t=document.createElement("a");t.href="#",t.tabIndex=1,t.text=e,t.className="skip-link",this.node.appendChild(t)}}e.SkipLinkWidget=t;class i extends W.Widget{constructor(e){super(),this._selected=!1;const t=document.createElement("input");t.type="text",this.node.appendChild(t),this._shell=e,this.id="jp-title-panel-title"}onAfterAttach(e){super.onAfterAttach(e),this.inputElement.addEventListener("keyup",this),this.inputElement.addEventListener("click",this),this.inputElement.addEventListener("blur",this)}onBeforeDetach(e){super.onBeforeDetach(e),this.inputElement.removeEventListener("keyup",this),this.inputElement.removeEventListener("click",this),this.inputElement.removeEventListener("blur",this)}handleEvent(e){switch(e.type){case"keyup":this._evtKeyUp(e);break;case"click":this._evtClick(e);break;case"blur":this._selected=!1}}async _evtKeyUp(e){if("Enter"==e.key){const e=this._shell.currentWidget;if(null==e)return;const t=e.title.label,i=this.inputElement,n=i.value;i.blur(),n!==t?e.title.label=n:i.value=t}}_evtClick(e){if(0!==e.button||this._selected)return;const t=this.inputElement;e.preventDefault(),e.stopPropagation(),this._selected=!0;const i=t.value.indexOf(".");-1===i?t.select():t.setSelectionRange(0,i)}get inputElement(){return this.node.children[0]}}e.TitleHandler=i;class n extends W.SplitPanel{constructor(e={}){super(e),this.updated=new p.Signal(this)}onUpdateRequest(e){super.onUpdateRequest(e),this.updated.emit()}}e.RestorableSplitPanel=n}(j||(j={}));var I=i(76487);const O=new u.Token("@jupyterlab/application:ILabStatus");class D{constructor(e){this._busyCount=0,this._dirtyCount=0,this._busySignal=new p.Signal(e),this._dirtySignal=new p.Signal(e)}get busySignal(){return this._busySignal}get dirtySignal(){return this._dirtySignal}get isBusy(){return this._busyCount>0}get isDirty(){return this._dirtyCount>0}setDirty(){const e=this.isDirty;return this._dirtyCount++,this.isDirty!==e&&this._dirtySignal.emit(this.isDirty),new I.DisposableDelegate((()=>{const e=this.isDirty;this._dirtyCount=Math.max(0,this._dirtyCount-1),this.isDirty!==e&&this._dirtySignal.emit(this.isDirty)}))}setBusy(){const e=this.isBusy;return this._busyCount++,this.isBusy!==e&&this._busySignal.emit(this.isBusy),new I.DisposableDelegate((()=>{const e=this.isBusy;this._busyCount--,this.isBusy!==e&&this._busySignal.emit(this.isBusy)}))}}class R extends g{constructor(e={shell:new E}){super(Object.assign(Object.assign({},e),{shell:e.shell||new E})),this.name=_.PageConfig.getOption("appName")||"JupyterLab",this.namespace=_.PageConfig.getOption("appNamespace")||this.name,this.registerPluginErrors=[],this.status=new D(this),this.version=_.PageConfig.getOption("appVersion")||"unknown",this.restored=this.shell.restored.then((()=>{})).catch((()=>{}));const t=Object.keys(R.defaultInfo).reduce(((t,i)=>(i in e&&(t[i]=JSON.parse(JSON.stringify(e[i]))),t)),{});this._info=Object.assign(Object.assign({},R.defaultInfo),t);const i=R.defaultPaths.urls,n=R.defaultPaths.directories,r=e.paths&&e.paths.urls||{},s=e.paths&&e.paths.directories||{};if(this._paths={urls:Object.keys(i).reduce(((e,t)=>{if(t in r){const i=r[t];e[t]=i}else e[t]=i[t];return e}),{}),directories:Object.keys(R.defaultPaths.directories).reduce(((e,t)=>{if(t in s){const i=s[t];e[t]=i}else e[t]=n[t];return e}),{})},this._info.devMode&&this.shell.addClass("jp-mod-devMode"),this.docRegistry.addModelFactory(new d.Base64ModelFactory),e.mimeExtensions)for(const t of k(e.mimeExtensions))this.registerPlugin(t)}get info(){return this._info}get paths(){return this._paths}registerPluginModule(e){let t=e.default;e.hasOwnProperty("__esModule")||(t=e),Array.isArray(t)||(t=[t]),t.forEach((e=>{try{this.registerPlugin(e)}catch(e){this.registerPluginErrors.push(e)}}))}registerPluginModules(e){e.forEach((e=>{this.registerPluginModule(e)}))}}!function(e){e.IInfo=new u.Token("@jupyterlab/application:IInfo"),e.defaultInfo={devMode:"true"===_.PageConfig.getOption("devMode").toLowerCase(),deferred:{patterns:[],matches:[]},disabled:{patterns:[],matches:[]},mimeExtensions:[],filesCached:"true"===_.PageConfig.getOption("cacheFiles").toLowerCase()},e.defaultPaths={urls:{base:_.PageConfig.getOption("baseUrl"),notFound:_.PageConfig.getOption("notFoundUrl"),app:_.PageConfig.getOption("appUrl"),doc:_.PageConfig.getOption("docUrl"),static:_.PageConfig.getOption("staticUrl"),settings:_.PageConfig.getOption("settingsUrl"),themes:_.PageConfig.getOption("themesUrl"),translations:_.PageConfig.getOption("translationsApiUrl"),hubHost:_.PageConfig.getOption("hubHost")||void 0,hubPrefix:_.PageConfig.getOption("hubPrefix")||void 0,hubUser:_.PageConfig.getOption("hubUser")||void 0,hubServerName:_.PageConfig.getOption("hubServerName")||void 0},directories:{appSettings:_.PageConfig.getOption("appSettingsDir"),schemas:_.PageConfig.getOption("schemasDir"),static:_.PageConfig.getOption("staticDir"),templates:_.PageConfig.getOption("templatesDir"),themes:_.PageConfig.getOption("themesDir"),userSettings:_.PageConfig.getOption("userSettingsDir"),serverRoot:_.PageConfig.getOption("serverRoot"),workspaces:_.PageConfig.getOption("workspacesDir")}}}(R||(R={}));class z{constructor(e){this.stop=new u.Token("@jupyterlab/application:Router#stop"),this._routed=new p.Signal(this),this._rules=new Map,this.base=e.base,this.commands=e.commands}get current(){var e,t;const{base:i}=this,n=_.URLExt.parse(window.location.href),{search:r,hash:s}=n,a=null!==(t=null===(e=n.pathname)||void 0===e?void 0:e.replace(i,"/"))&&void 0!==t?t:"";return{hash:s,path:a,request:a+r+s,search:r}}get routed(){return this._routed}navigate(e,t={}){const{base:i}=this,{history:n}=window,{hard:r}=t,s=document.location.href,a=e&&0===e.indexOf(i)?e:_.URLExt.join(i,e);return a===s?r?this.reload():void 0:(n.pushState({},"",a),r?this.reload():void(t.skipRouting||requestAnimationFrame((()=>{this.route()}))))}register(e){var t;const{command:i,pattern:n}=e,r=null!==(t=e.rank)&&void 0!==t?t:100,s=this._rules;return s.set(n,{command:i,rank:r}),new I.DisposableDelegate((()=>{s.delete(n)}))}reload(){window.location.reload()}route(){const{commands:e,current:t,stop:i}=this,{request:n}=t,r=this._routed,s=this._rules,a=[];s.forEach(((e,t)=>{(null==n?void 0:n.match(t))&&a.push(e)}));const o=a.sort(((e,t)=>t.rank-e.rank)),d=new u.PromiseDelegate,l=async()=>{if(!o.length)return r.emit(t),void d.resolve(void 0);const{command:s}=o.pop();try{const n=this.current.request;await e.execute(s,t)===i&&(o.length=0,console.debug(`Routing ${n} was short-circuited by ${s}`))}catch(e){console.warn(`Routing ${n} to ${s} failed`,e)}l()};return l(),d.promise}}const F=new u.Token("@jupyterlab/apputils:IConnectionLost"),N=new u.Token("@jupyterlab/application:IRouter"),U=new u.Token("@jupyterlab/application:ITreePathUpdater")}}]);
//# sourceMappingURL=5415.c1aea274da3ea8d70d40.js.map