(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"2W6z":function(e,t,n){"use strict";n("pIFo");var r=function(){};e.exports=r},"51K9":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Felix Engineering","description":"Conozca al ingeniero Félix Junior Pérez Peguero","author":"@fjun01"}}}}')},"7vrA":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=n("q1tI"),u=n.n(c),s=n("vUet"),l=u.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.fluid,c=e.as,l=void 0===c?"div":c,f=e.className,d=Object(a.a)(e,["bsPrefix","fluid","as","className"]),p=Object(s.a)(n,"container"),v="string"==typeof i?"-"+i:"-fluid";return u.a.createElement(l,Object(r.a)({ref:t},d,{className:o()(f,i?""+p+v:p)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.a=l},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},Bl7J:function(e,t,n){"use strict";var r=n("f98A"),a=n("q1tI"),i=n.n(a),o=(n("q4sD"),n("Wbzz")),c=n("7vrA"),u=(n("0mN4"),n("wx14")),s=n("zLVn"),l=n("TSYQ"),f=n.n(l);n("bWfx"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("xfY5"),n("rE2o"),n("ioFf"),n("Tze0"),n("8+KV"),n("QLaP");function d(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function v(e,t){return Object.keys(t).reduce((function(n,r){var i,o=n,c=o[d(r)],l=o[r],f=Object(s.a)(o,[d(r),r].map(p)),v=t[r],m=function(e,t,n){var r=Object(a.useRef)(void 0!==e),i=Object(a.useState)(t),o=i[0],c=i[1],u=void 0!==e,s=r.current;return r.current=u,!u&&s&&o!==t&&c(t),[u?e:o,Object(a.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(l,c,e[v]),b=m[0],h=m[1];return Object(u.a)({},f,((i={})[r]=b,i[v]=h,i))}),e)}n("hHhE"),n("f3/d");function m(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n("94VI");var b=n("YdCC"),h=n("vUet"),y=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,o=Object(s.a)(e,["bsPrefix","className","as"]);n=Object(h.a)(n,"navbar-brand");var c=a||(o.href?"a":"span");return i.a.createElement(c,Object(u.a)({},o,{ref:t,className:f()(r,n)}))}));y.displayName="NavbarBrand";var g=y;function E(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}n("pIFo");var x=/([A-Z])/g;var O=/^ms-/;function w(e){return function(e){return e.replace(x,"-$1").toLowerCase()}(e).replace(O,"-ms-")}var T=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var C=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(w(t))||function(e,t){return E(e).getComputedStyle(e,t)}(e).getPropertyValue(w(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!T.test(e))}(a)?n+=w(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(w(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},j=(n("V+eJ"),!("undefined"==typeof window||!window.document||!window.document.createElement)),S=!1,N=!1;try{var A={get passive(){return S=!0},get once(){return N=S=!0}};j&&(window.addEventListener("test",A,A),window.removeEventListener("test",A,!0))}catch(Le){}var P=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!N){var a=r.once,i=r.capture,o=n;!N&&a&&(o=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=o),e.addEventListener(t,o,S?r:i)}e.addEventListener(t,n,r)};var k=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var L=function(e,t,n,r){return P(e,t,n,r),function(){k(e,t,n,r)}};j&&window;function I(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=L(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}var R=function(e,t,n){var r,a;null==n&&(r=C(e,"transitionDuration")||"",a=-1===r.indexOf("ms")?1e3:1,n=parseFloat(r)*a||0);var i=I(e,n),o=L(e,"transitionend",t);return function(){i(),o()}},M=n("i8i4"),D=n.n(M),K=!1,q=i.a.createContext(null),F=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}m(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[D.a.findDOMNode(this),r],i=a[0],o=a[1],c=this.getTimeouts(),u=r?c.appear:c.enter;!e&&!n||K?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(u,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:D.a.findDOMNode(this);t&&!K?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:D.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(s.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.a.createElement(q.Provider,{value:null},"function"==typeof n?n(e,r):i.a.cloneElement(i.a.Children.only(n),r))},t}(i.a.Component);function _(){}F.contextType=q,F.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:_,onEntering:_,onEntered:_,onExit:_,onExiting:_,onExited:_},F.UNMOUNTED="unmounted",F.EXITED="exited",F.ENTERING="entering",F.ENTERED="entered",F.EXITING="exiting";var U=F;n("0l/t");var H,B=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var V={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Y(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=V[e];return n+parseInt(C(t,r[0]),10)+parseInt(C(t,r[1]),10)}var z=((H={}).exited="collapse",H.exiting="collapsing",H.entering="collapsing",H.entered="collapse show",H),W={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:Y},J=i.a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,o=e.onEntered,c=e.onExit,l=e.onExiting,d=e.className,p=e.children,v=e.dimension,m=void 0===v?"height":v,b=e.getDimensionValue,h=void 0===b?Y:b,y=Object(s.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),g="function"==typeof m?m():m,E=Object(a.useMemo)((function(){return B((function(e){e.style[g]="0"}),n)}),[g,n]),x=Object(a.useMemo)((function(){return B((function(e){var t="scroll"+g[0].toUpperCase()+g.slice(1);e.style[g]=e[t]+"px"}),r)}),[g,r]),O=Object(a.useMemo)((function(){return B((function(e){e.style[g]=null}),o)}),[g,o]),w=Object(a.useMemo)((function(){return B((function(e){e.style[g]=h(g,e)+"px",e.offsetHeight}),c)}),[c,h,g]),T=Object(a.useMemo)((function(){return B((function(e){e.style[g]=null}),l)}),[g,l]);return i.a.createElement(U,Object(u.a)({ref:t,addEndListener:R},y,{"aria-expanded":y.role?y.in:null,onEnter:E,onEntering:x,onEntered:O,onExit:w,onExiting:T}),(function(e,t){return i.a.cloneElement(p,Object(u.a)({},t,{className:f()(d,p.props.className,z[e],"width"===g&&"width")}))}))}));J.defaultProps=W;var X=J,G=i.a.createContext(null);G.displayName="NavbarContext";var Z=G,Q=i.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,a=Object(s.a)(e,["children","bsPrefix"]);return r=Object(h.a)(r,"navbar-collapse"),i.a.createElement(Z.Consumer,null,(function(e){return i.a.createElement(X,Object(u.a)({in:!(!e||!e.expanded)},a),i.a.createElement("div",{ref:t,className:r},n))}))}));Q.displayName="NavbarCollapse";var $=Q;var ee=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function te(e){var t=ee(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var ne=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,c=e.label,l=e.as,d=void 0===l?"button":l,p=e.onClick,v=Object(s.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(h.a)(n,"navbar-toggler");var m=Object(a.useContext)(Z)||{},b=m.onToggle,y=m.expanded,g=te((function(e){p&&p(e),b&&b()}));return"button"===d&&(v.type="button"),i.a.createElement(d,Object(u.a)({},v,{ref:t,onClick:g,"aria-label":c,className:f()(r,n,!y&&"collapsed")}),o||i.a.createElement("span",{className:n+"-icon"}))}));ne.displayName="NavbarToggle",ne.defaultProps={label:"Toggle navigation"};var re=ne,ae=i.a.createContext(null),ie=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},oe=ae,ce=Object(b.a)("navbar-text",{Component:"span"}),ue=i.a.forwardRef((function(e,t){var n=v(e,{expanded:"onToggle"}),r=n.bsPrefix,o=n.expand,c=n.variant,l=n.bg,d=n.fixed,p=n.sticky,m=n.className,b=n.children,y=n.as,g=void 0===y?"nav":y,E=n.expanded,x=n.onToggle,O=n.onSelect,w=n.collapseOnSelect,T=Object(s.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),C=Object(h.a)(r,"navbar"),j=Object(a.useCallback)((function(){O&&O.apply(void 0,arguments),w&&E&&x&&x(!1)}),[O,w,E,x]);void 0===T.role&&"nav"!==g&&(T.role="navigation");var S=C+"-expand";"string"==typeof o&&(S=S+"-"+o);var N=Object(a.useMemo)((function(){return{onToggle:function(){return x&&x(!E)},bsPrefix:C,expanded:!!E}}),[C,E,x]);return i.a.createElement(Z.Provider,{value:N},i.a.createElement(oe.Provider,{value:j},i.a.createElement(g,Object(u.a)({ref:t},T,{className:f()(m,C,o&&S,c&&C+"-"+c,l&&"bg-"+l,p&&"sticky-"+p,d&&"fixed-"+d)}),b)))}));ue.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ue.displayName="Navbar",ue.Brand=g,ue.Toggle=re,ue.Collapse=$,ue.Text=ce;var se=ue,le=(n("bHtr"),n("K9S6"),n("Wzyw")),fe=(n("2Spj"),Function.prototype.bind.call(Function.prototype.call,[].slice));var de=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var pe=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=de(e),r=de(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},ve=i.a.createContext(null);ve.displayName="NavContext";var me=ve,be=i.a.createContext(null),he=function(){},ye=i.a.forwardRef((function(e,t){var n,r,o=e.as,c=void 0===o?"ul":o,l=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,v=Object(s.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),m=Object(a.useReducer)((function(e){return!e}),!1)[1],b=Object(a.useRef)(!1),h=Object(a.useContext)(oe),y=Object(a.useContext)(be);y&&(d=d||"tablist",f=y.activeKey,n=y.getControlledId,r=y.getControllerId);var g=Object(a.useRef)(null),E=function(e){var t=g.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",fe(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var i=r.indexOf(a);if(-1===i)return null;var o=i+e;return o>=r.length&&(o=0),o<0&&(o=r.length-1),r[o]},x=function(e,t){null!=e&&(l&&l(e,t),h&&h(e,t))};Object(a.useEffect)((function(){if(g.current&&b.current){var e=g.current.querySelector("[data-rb-event-key].active");e&&e.focus()}b.current=!1}));var O=pe(t,g);return i.a.createElement(oe.Provider,{value:x},i.a.createElement(me.Provider,{value:{role:d,activeKey:ie(f),getControlledId:n||he,getControllerId:r||he}},i.a.createElement(c,Object(u.a)({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=E(-1);break;case"ArrowRight":case"ArrowDown":t=E(1);break;default:return}t&&(e.preventDefault(),x(t.dataset.rbEventKey,e),b.current=!0,m())},ref:O,role:d}))))})),ge=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.as,c=void 0===o?"div":o,l=Object(s.a)(e,["bsPrefix","className","children","as"]);return n=Object(h.a)(n,"nav-item"),i.a.createElement(c,Object(u.a)({},l,{ref:t,className:f()(r,n)}),a)}));ge.displayName="NavItem";var Ee=ge;function xe(e){return!e||"#"===e.trim()}var Oe=i.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,a=e.disabled,o=e.onKeyDown,c=Object(s.a)(e,["as","disabled","onKeyDown"]),l=function(e){var t=c.href,n=c.onClick;(a||xe(t))&&e.preventDefault(),a?e.stopPropagation():n&&n(e)};return xe(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),a&&(c.tabIndex=-1,c["aria-disabled"]=!0),i.a.createElement(r,Object(u.a)({ref:t},c,{onClick:l,onKeyDown:B((function(e){" "===e.key&&(e.preventDefault(),l(e))}),o)}))}));Oe.displayName="SafeAnchor";var we=Oe,Te=(n("2W6z"),i.a.forwardRef((function(e,t){var n=e.active,r=e.className,o=e.eventKey,c=e.onSelect,l=e.onClick,d=e.as,p=Object(s.a)(e,["active","className","eventKey","onSelect","onClick","as"]),v=ie(o,p.href),m=Object(a.useContext)(oe),b=Object(a.useContext)(me),h=n;if(b){p.role||"tablist"!==b.role||(p.role="tab");var y=b.getControllerId(v),g=b.getControlledId(v);p["data-rb-event-key"]=v,p.id=y||p.id,p["aria-controls"]=g||p["aria-controls"],h=null==n&&null!=v?b.activeKey===v:n}"tab"===p.role&&(p.tabIndex=h?p.tabIndex:-1,p["aria-selected"]=h);var E=te((function(e){l&&l(e),null!=v&&(c&&c(v,e),m&&m(v,e))}));return i.a.createElement(d,Object(u.a)({},p,{ref:t,onClick:E,className:f()(r,h&&"active")}))})));Te.defaultProps={disabled:!1};var Ce=Te,je={disabled:!1,as:we},Se=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,a=e.className,o=e.href,c=e.eventKey,l=e.onSelect,d=e.as,p=Object(s.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(h.a)(n,"nav-link"),i.a.createElement(Ce,Object(u.a)({},p,{href:o,ref:t,eventKey:c,as:d,disabled:r,onSelect:l,className:f()(a,n,r&&"disabled")}))}));Se.displayName="NavLink",Se.defaultProps=je;var Ne=Se,Ae=i.a.forwardRef((function(e,t){var n,r,o,c=v(e,{activeKey:"onSelect"}),l=c.as,d=void 0===l?"div":l,p=c.bsPrefix,m=c.variant,b=c.fill,y=c.justify,g=c.navbar,E=c.className,x=c.children,O=c.activeKey,w=Object(s.a)(c,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),T=Object(h.a)(p,"nav"),C=!1,j=Object(a.useContext)(Z),S=Object(a.useContext)(le.a);return j?(r=j.bsPrefix,C=null==g||g):S&&(o=S.cardHeaderBsPrefix),i.a.createElement(ye,Object(u.a)({as:d,ref:t,activeKey:O,className:f()(E,(n={},n[T]=!C,n[r+"-nav"]=C,n[o+"-"+m]=!!o,n[T+"-"+m]=!!m,n[T+"-fill"]=b,n[T+"-justified"]=y,n))},w),x)}));Ae.displayName="Nav",Ae.defaultProps={justify:!1,fill:!1},Ae.Item=Ee,Ae.Link=Ne;var Pe=Ae,ke=function(){return i.a.createElement(se,{fixed:"top",collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark"},i.a.createElement(c.a,null,i.a.createElement(se.Brand,{className:"text-light"},i.a.createElement(o.Link,{className:"navbar-brand",to:"/"},"Felix Engineering")),i.a.createElement(se.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(se.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(Pe,{className:"mr-auto"},i.a.createElement(o.Link,{className:"nav-link text-light",to:"/biographyPage"},"Biografía"),i.a.createElement(o.Link,{className:"nav-link text-light",to:"/hobbiesPage"},"Pasatiempos"),i.a.createElement(o.Link,{className:"nav-link text-light",to:"/abilitiesPage"},"Habilidades")))))};t.a=function(e){var t=e.children;r.data;return i.a.createElement("div",{className:"bg-secondary"},i.a.createElement(ke,null),i.a.createElement("main",{className:"bg-secondary container"},t),i.a.createElement("footer",{className:"bg-dark text-center text-light",style:{padding:50}},"© ",(new Date).getFullYear(),", Built by Felix Junior Perez Peguero with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},K9S6:function(e,t,n){"use strict";n("8+KV"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,i.default)(r)};var r,a=n("pvIh"),i=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},Nr18:function(e,t,n){"use strict";var r=n("S/j/"),a=n("d/Gc"),i=n("ne8i");e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,c=a(o>1?arguments[1]:void 0,n),u=o>2?arguments[2]:void 0,s=void 0===u?n:a(u,n);s>c;)t[c++]=e;return t}},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),i=n("vhPU"),o=/"/g,c=function(e,t,n,r){var a=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),i=n("hswa").f,o=n("kJMx").f,c=n("quPj"),u=n("C/va"),s=r.RegExp,l=s,f=s.prototype,d=/a/g,p=/a/g,v=new s(d)!==d;if(n("nh4g")&&(!v||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,s(d)!=d||s(p)==p||"/a/i"!=s(d,"i")})))){s=function(e,t){var n=this instanceof s,r=c(e),i=void 0===t;return!n&&r&&e.constructor===s&&i?e:a(v?new l(r&&!i?e.source:e,t):l((r=e instanceof s)?e.source:e,r&&i?u.call(e):t),n?this:f,s)};for(var m=function(e){e in s||i(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},b=o(l),h=0;b.length>h;)m(b[h++]);f.constructor=s,s.prototype=f,n("KroJ")(r,"RegExp",s)}n("elZq")("RegExp")},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Tze0:function(e,t,n){"use strict";n("qncB")("trim",(function(e){return function(){return e(this,3)}}))},Wzyw:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext(null);a.displayName="CardContext",t.a=a},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=(n("pIFo"),/-(.)/g);var u=n("q1tI"),s=n.n(u),l=n("vUet"),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,i=n.displayName,c=void 0===i?f(e):i,u=n.Component,d=n.defaultProps,p=s.a.forwardRef((function(t,n){var i=t.className,c=t.bsPrefix,f=t.as,d=void 0===f?u||"div":f,p=Object(a.a)(t,["className","bsPrefix","as"]),v=Object(l.a)(c,e);return s.a.createElement(d,Object(r.a)({ref:n,className:o()(i,v)},p))}));return p.defaultProps=d,p.displayName=c,p}},ZhWT:function(e,t,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,a="function"==typeof Map,i="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(a&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],n.get(u.value[0])))return!1;return!0}if(i&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(t[u]!==n[u])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(n,s[u]))return!1;if(r&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],n[s[u]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},bHtr:function(e,t,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})},f98A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Felix Engineering"}}}}')},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},pvIh:function(e,t,n){"use strict";n("2Spj"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,i,o){var c=a||"<<anonymous>>",u=o||r;if(null==n[r])return t?new Error("Required "+i+" `"+u+"` was not specified in `"+c+"`."):null;for(var s=arguments.length,l=Array(s>6?s-6:0),f=6;f<s;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,c,i,u].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},q4sD:function(e,t,n){},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,i,o,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("ZhWT"),d=n.n(f),p=n("q1tI"),v=n.n(p),m=n("MgzW"),b=n.n(m),h="bodyAttributes",y="htmlAttributes",g="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(E).map((function(e){return E[e]})),"charset"),O="cssText",w="href",T="http-equiv",C="innerHTML",j="itemprop",S="name",N="property",A="rel",P="src",k="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",R="defer",M="encodeSpecialCharacters",D="onChangeClientState",K="titleTemplate",q=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),F=[E.NOSCRIPT,E.SCRIPT,E.STYLE],_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,E.TITLE),n=Q(e,K);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,I);return t||r||void 0},J=function(e){return Q(e,D)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||n===A&&"canonical"===e[n].toLowerCase()||u===A&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==O&&c!==j||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],u=b()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ue(E.BODY,r),ue(E.HTML,a),ce(f,d);var p={baseTag:se(E.BASE,n),linkTags:se(E.LINK,i),metaTags:se(E.META,o),noscriptTags:se(E.NOSCRIPT,c),scriptTags:se(E.SCRIPT,s),styleTags:se(E.STYLE,l)},v={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(v[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,v,m)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(E.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===O)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[v.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===O){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),v.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===O)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(E.BASE,t,r),bodyAttributes:de(h,n,r),htmlAttributes:de(y,a,r),link:de(E.LINK,i,r),meta:de(E.META,o,r),noscript:de(E.NOSCRIPT,c,r),script:de(E.SCRIPT,u,r),style:de(E.STYLE,s,r),title:de(E.TITLE,{title:f,titleAttributes:d},r)}},ve=l()((function(e){return{baseTag:G([w,k],e),bodyAttributes:X(h,e),defer:Q(e,R),encode:Q(e,M),htmlAttributes:X(y,e),linkTags:Z(E.LINK,[A,w],e),metaTags:Z(E.META,[S,x,T,N,j],e),noscriptTags:Z(E.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:Z(E.SCRIPT,[P,C],e),styleTags:Z(E.STYLE,[O],e),title:W(e),titleAttributes:X(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),me=(a=ve,o=i=function(e){function t(){return U(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case E.TITLE:return B({},a,((t={})[r.type]=o,t.titleAttributes=B({},i),t));case E.BODY:return B({},a,{bodyAttributes:B({},i)});case E.HTML:return B({},a,{htmlAttributes:B({},i)})}return B({},a,((n={})[r.type]=B({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return v.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(V(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=V(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),v.a.createElement(a,r)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(v.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);me.renderStatic=me.rewind}).call(this,n("yLpj"))},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("f3/d"),n("wx14");var r=n("q1tI"),a=n.n(r),i=a.a.createContext({});i.Consumer,i.Provider;function o(e,t){var n=Object(r.useContext)(i);return e||n[t]||t}},vrFN:function(e,t,n){"use strict";var r=n("51K9"),a=n("q1tI"),i=n.n(a),o=n("qhky");function c(e){var t=e.description,n=e.lang,a=e.meta,c=e.title,u=r.data.site,s=t||u.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=commons-0fa98551192fcbdd6c93.js.map