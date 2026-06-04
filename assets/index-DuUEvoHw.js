(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();function mc(e,r){for(var t=0;t<r.length;t++){const l=r[t];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in e)){const n=Object.getOwnPropertyDescriptor(l,a);n&&Object.defineProperty(e,a,n.get?n:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(l){if(l.ep)return;l.ep=!0;const a=r(l);fetch(l.href,a)}})();function Io(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zo={exports:{}},ma={},Wo={exports:{}},L={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var ul=Symbol.for("react.element"),bc=Symbol.for("react.portal"),gc=Symbol.for("react.fragment"),kc=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),wc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),Ac=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),su=Symbol.iterator;function Cc(e){return e===null||typeof e!="object"?null:(e=su&&e[su]||e["@@iterator"],typeof e=="function"?e:null)}var jo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ro=Object.assign,To={};function ft(e,r,t){this.props=e,this.context=r,this.refs=To,this.updater=t||jo}ft.prototype.isReactComponent={};ft.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};ft.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _o(){}_o.prototype=ft.prototype;function ci(e,r,t){this.props=e,this.context=r,this.refs=To,this.updater=t||jo}var Ui=ci.prototype=new _o;Ui.constructor=ci;Ro(Ui,ft.prototype);Ui.isPureReactComponent=!0;var cu=Array.isArray,Oo=Object.prototype.hasOwnProperty,hi={current:null},Fo={key:!0,ref:!0,__self:!0,__source:!0};function Vo(e,r,t){var l,a={},n=null,i=null;if(r!=null)for(l in r.ref!==void 0&&(i=r.ref),r.key!==void 0&&(n=""+r.key),r)Oo.call(r,l)&&!Fo.hasOwnProperty(l)&&(a[l]=r[l]);var u=arguments.length-2;if(u===1)a.children=t;else if(1<u){for(var o=Array(u),d=0;d<u;d++)o[d]=arguments[d+2];a.children=o}if(e&&e.defaultProps)for(l in u=e.defaultProps,u)a[l]===void 0&&(a[l]=u[l]);return{$$typeof:ul,type:e,key:n,ref:i,props:a,_owner:hi.current}}function Nc(e,r){return{$$typeof:ul,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function pi(e){return typeof e=="object"&&e!==null&&e.$$typeof===ul}function Dc(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return r[t]})}var Uu=/\/+/g;function _a(e,r){return typeof e=="object"&&e!==null&&e.key!=null?Dc(""+e.key):r.toString(36)}function Ll(e,r,t,l,a){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(n){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ul:case bc:i=!0}}if(i)return i=e,a=a(i),e=l===""?"."+_a(i,0):l,cu(a)?(t="",e!=null&&(t=e.replace(Uu,"$&/")+"/"),Ll(a,r,t,"",function(d){return d})):a!=null&&(pi(a)&&(a=Nc(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Uu,"$&/")+"/")+e)),r.push(a)),1;if(i=0,l=l===""?".":l+":",cu(e))for(var u=0;u<e.length;u++){n=e[u];var o=l+_a(n,u);i+=Ll(n,r,t,o,a)}else if(o=Cc(e),typeof o=="function")for(e=o.call(e),u=0;!(n=e.next()).done;)n=n.value,o=l+_a(n,u++),i+=Ll(n,r,t,o,a);else if(n==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function fl(e,r,t){if(e==null)return e;var l=[],a=0;return Ll(e,l,"","",function(n){return r.call(t,n,a++)}),l}function Ec(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Ml={transition:null},Pc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Ml,ReactCurrentOwner:hi};function Bo(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:fl,forEach:function(e,r,t){fl(e,function(){r.apply(this,arguments)},t)},count:function(e){var r=0;return fl(e,function(){r++}),r},toArray:function(e){return fl(e,function(r){return r})||[]},only:function(e){if(!pi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ft;L.Fragment=gc;L.Profiler=vc;L.PureComponent=ci;L.StrictMode=kc;L.Suspense=xc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pc;L.act=Bo;L.cloneElement=function(e,r,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=Ro({},e.props),a=e.key,n=e.ref,i=e._owner;if(r!=null){if(r.ref!==void 0&&(n=r.ref,i=hi.current),r.key!==void 0&&(a=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(o in r)Oo.call(r,o)&&!Fo.hasOwnProperty(o)&&(l[o]=r[o]===void 0&&u!==void 0?u[o]:r[o])}var o=arguments.length-2;if(o===1)l.children=t;else if(1<o){u=Array(o);for(var d=0;d<o;d++)u[d]=arguments[d+2];l.children=u}return{$$typeof:ul,type:e.type,key:a,ref:n,props:l,_owner:i}};L.createContext=function(e){return e={$$typeof:yc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wc,_context:e},e.Consumer=e};L.createElement=Vo;L.createFactory=function(e){var r=Vo.bind(null,e);return r.type=e,r};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:qc,render:e}};L.isValidElement=pi;L.lazy=function(e){return{$$typeof:Sc,_payload:{_status:-1,_result:e},_init:Ec}};L.memo=function(e,r){return{$$typeof:Ac,type:e,compare:r===void 0?null:r}};L.startTransition=function(e){var r=Ml.transition;Ml.transition={};try{e()}finally{Ml.transition=r}};L.unstable_act=Bo;L.useCallback=function(e,r){return se.current.useCallback(e,r)};L.useContext=function(e){return se.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return se.current.useDeferredValue(e)};L.useEffect=function(e,r){return se.current.useEffect(e,r)};L.useId=function(){return se.current.useId()};L.useImperativeHandle=function(e,r,t){return se.current.useImperativeHandle(e,r,t)};L.useInsertionEffect=function(e,r){return se.current.useInsertionEffect(e,r)};L.useLayoutEffect=function(e,r){return se.current.useLayoutEffect(e,r)};L.useMemo=function(e,r){return se.current.useMemo(e,r)};L.useReducer=function(e,r,t){return se.current.useReducer(e,r,t)};L.useRef=function(e){return se.current.useRef(e)};L.useState=function(e){return se.current.useState(e)};L.useSyncExternalStore=function(e,r,t){return se.current.useSyncExternalStore(e,r,t)};L.useTransition=function(){return se.current.useTransition()};L.version="18.3.1";Wo.exports=L;var y=Wo.exports;const fi=Io(y),Lc=mc({__proto__:null,default:fi},[y]);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Mc=y,Ic=Symbol.for("react.element"),zc=Symbol.for("react.fragment"),Wc=Object.prototype.hasOwnProperty,jc=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rc={key:!0,ref:!0,__self:!0,__source:!0};function Xo(e,r,t){var l,a={},n=null,i=null;t!==void 0&&(n=""+t),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(i=r.ref);for(l in r)Wc.call(r,l)&&!Rc.hasOwnProperty(l)&&(a[l]=r[l]);if(e&&e.defaultProps)for(l in r=e.defaultProps,r)a[l]===void 0&&(a[l]=r[l]);return{$$typeof:Ic,type:e,key:n,ref:i,props:a,_owner:jc.current}}ma.Fragment=zc;ma.jsx=Xo;ma.jsxs=Xo;zo.exports=ma;var c=zo.exports,fn={},Qo={exports:{}},we={},Ho={exports:{}},Ko={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function r(S,E){var P=S.length;S.push(E);e:for(;0<P;){var X=P-1>>>1,G=S[X];if(0<a(G,E))S[X]=E,S[P]=G,P=X;else break e}}function t(S){return S.length===0?null:S[0]}function l(S){if(S.length===0)return null;var E=S[0],P=S.pop();if(P!==E){S[0]=P;e:for(var X=0,G=S.length,hl=G>>>1;X<hl;){var qr=2*(X+1)-1,Ta=S[qr],xr=qr+1,pl=S[xr];if(0>a(Ta,P))xr<G&&0>a(pl,Ta)?(S[X]=pl,S[xr]=P,X=xr):(S[X]=Ta,S[qr]=P,X=qr);else if(xr<G&&0>a(pl,P))S[X]=pl,S[xr]=P,X=xr;else break e}}return E}function a(S,E){var P=S.sortIndex-E.sortIndex;return P!==0?P:S.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var n=performance;e.unstable_now=function(){return n.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var o=[],d=[],m=1,p=null,f=3,b=!1,k=!1,v=!1,q=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(S){for(var E=t(d);E!==null;){if(E.callback===null)l(d);else if(E.startTime<=S)l(d),E.sortIndex=E.expirationTime,r(o,E);else break;E=t(d)}}function g(S){if(v=!1,h(S),!k)if(t(o)!==null)k=!0,ja(x);else{var E=t(d);E!==null&&Ra(g,E.startTime-S)}}function x(S,E){k=!1,v&&(v=!1,U(D),D=-1),b=!0;var P=f;try{for(h(E),p=t(o);p!==null&&(!(p.expirationTime>E)||S&&!De());){var X=p.callback;if(typeof X=="function"){p.callback=null,f=p.priorityLevel;var G=X(p.expirationTime<=E);E=e.unstable_now(),typeof G=="function"?p.callback=G:p===t(o)&&l(o),h(E)}else l(o);p=t(o)}if(p!==null)var hl=!0;else{var qr=t(d);qr!==null&&Ra(g,qr.startTime-E),hl=!1}return hl}finally{p=null,f=P,b=!1}}var C=!1,N=null,D=-1,B=5,M=-1;function De(){return!(e.unstable_now()-M<B)}function kt(){if(N!==null){var S=e.unstable_now();M=S;var E=!0;try{E=N(!0,S)}finally{E?vt():(C=!1,N=null)}}else C=!1}var vt;if(typeof s=="function")vt=function(){s(kt)};else if(typeof MessageChannel<"u"){var du=new MessageChannel,fc=du.port2;du.port1.onmessage=kt,vt=function(){fc.postMessage(null)}}else vt=function(){q(kt,0)};function ja(S){N=S,C||(C=!0,vt())}function Ra(S,E){D=q(function(){S(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){k||b||(k=!0,ja(x))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(S){switch(f){case 1:case 2:case 3:var E=3;break;default:E=f}var P=f;f=E;try{return S()}finally{f=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,E){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var P=f;f=S;try{return E()}finally{f=P}},e.unstable_scheduleCallback=function(S,E,P){var X=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?X+P:X):P=X,S){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=P+G,S={id:m++,callback:E,priorityLevel:S,startTime:P,expirationTime:G,sortIndex:-1},P>X?(S.sortIndex=P,r(d,S),t(o)===null&&S===t(d)&&(v?(U(D),D=-1):v=!0,Ra(g,P-X))):(S.sortIndex=G,r(o,S),k||b||(k=!0,ja(x))),S},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(S){var E=f;return function(){var P=f;f=E;try{return S.apply(this,arguments)}finally{f=P}}}})(Ko);Ho.exports=Ko;var Tc=Ho.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var _c=y,ve=Tc;function w(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $o=new Set,Ft={};function jr(e,r){ut(e,r),ut(e+"Capture",r)}function ut(e,r){for(Ft[e]=r,e=0;e<r.length;e++)$o.add(r[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mn=Object.prototype.hasOwnProperty,Oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hu={},pu={};function Fc(e){return mn.call(pu,e)?!0:mn.call(hu,e)?!1:Oc.test(e)?pu[e]=!0:(hu[e]=!0,!1)}function Vc(e,r,t,l){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bc(e,r,t,l){if(r===null||typeof r>"u"||Vc(e,r,t,l))return!0;if(l)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function ce(e,r,t,l,a,n,i){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=n,this.removeEmptyString=i}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];le[r]=new ce(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var mi=/[\-:]([a-z])/g;function bi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(mi,bi);le[r]=new ce(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(mi,bi);le[r]=new ce(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(mi,bi);le[r]=new ce(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function gi(e,r,t,l){var a=le.hasOwnProperty(r)?le[r]:null;(a!==null?a.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Bc(r,t,a,l)&&(t=null),l||a===null?Fc(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(r=a.attributeName,l=a.attributeNamespace,t===null?e.removeAttribute(r):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,l?e.setAttributeNS(l,r,t):e.setAttribute(r,t))))}var Ge=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),ki=Symbol.for("react.strict_mode"),bn=Symbol.for("react.profiler"),Zo=Symbol.for("react.provider"),Jo=Symbol.for("react.context"),vi=Symbol.for("react.forward_ref"),gn=Symbol.for("react.suspense"),kn=Symbol.for("react.suspense_list"),wi=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),Go=Symbol.for("react.offscreen"),fu=Symbol.iterator;function wt(e){return e===null||typeof e!="object"?null:(e=fu&&e[fu]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,Oa;function Dt(e){if(Oa===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);Oa=r&&r[1]||""}return`
`+Oa+e}var Fa=!1;function Va(e,r){if(!e||Fa)return"";Fa=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(d){var l=d}Reflect.construct(e,[],r)}else{try{r.call()}catch(d){l=d}e.call(r.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),n=l.stack.split(`
`),i=a.length-1,u=n.length-1;1<=i&&0<=u&&a[i]!==n[u];)u--;for(;1<=i&&0<=u;i--,u--)if(a[i]!==n[u]){if(i!==1||u!==1)do if(i--,u--,0>u||a[i]!==n[u]){var o=`
`+a[i].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=i&&0<=u);break}}}finally{Fa=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Dt(e):""}function Xc(e){switch(e.tag){case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 2:case 15:return e=Va(e.type,!1),e;case 11:return e=Va(e.type.render,!1),e;case 1:return e=Va(e.type,!0),e;default:return""}}function vn(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vr:return"Fragment";case Fr:return"Portal";case bn:return"Profiler";case ki:return"StrictMode";case gn:return"Suspense";case kn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jo:return(e.displayName||"Context")+".Consumer";case Zo:return(e._context.displayName||"Context")+".Provider";case vi:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wi:return r=e.displayName||null,r!==null?r:vn(e.type)||"Memo";case tr:r=e._payload,e=e._init;try{return vn(e(r))}catch{}}return null}function Qc(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vn(r);case 8:return r===ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yo(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Hc(e){var r=Yo(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r];if(!e.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,n=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(i){l=""+i,n.call(this,i)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function bl(e){e._valueTracker||(e._valueTracker=Hc(e))}function ed(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),l="";return e&&(l=Yo(e)?e.checked?"true":"false":e.value),e=l,e!==t?(r.setValue(e),!0):!1}function Bl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wn(e,r){var t=r.checked;return F({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function mu(e,r){var t=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;t=gr(r.value!=null?r.value:t),e._wrapperState={initialChecked:l,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function rd(e,r){r=r.checked,r!=null&&gi(e,"checked",r,!1)}function yn(e,r){rd(e,r);var t=gr(r.value),l=r.type;if(t!=null)l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?qn(e,r.type,t):r.hasOwnProperty("defaultValue")&&qn(e,r.type,gr(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function bu(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function qn(e,r,t){(r!=="number"||Bl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Et=Array.isArray;function et(e,r,t,l){if(e=e.options,r){r={};for(var a=0;a<t.length;a++)r["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=r.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&l&&(e[t].defaultSelected=!0)}else{for(t=""+gr(t),r=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function xn(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(w(91));return F({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gu(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(w(92));if(Et(t)){if(1<t.length)throw Error(w(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:gr(t)}}function td(e,r){var t=gr(r.value),l=gr(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),l!=null&&(e.defaultValue=""+l)}function ku(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function ld(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function An(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?ld(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gl,ad=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,t,l,a){MSApp.execUnsafeLocalFunction(function(){return e(r,t,l,a)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=gl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Vt(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kc=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(e){Kc.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Mt[r]=Mt[e]})});function nd(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||Mt.hasOwnProperty(e)&&Mt[e]?(""+r).trim():r+"px"}function id(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var l=t.indexOf("--")===0,a=nd(t,r[t],l);t==="float"&&(t="cssFloat"),l?e.setProperty(t,a):e[t]=a}}var $c=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sn(e,r){if(r){if($c[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(w(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(w(61))}if(r.style!=null&&typeof r.style!="object")throw Error(w(62))}}function Cn(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nn=null;function yi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dn=null,rt=null,tt=null;function vu(e){if(e=sl(e)){if(typeof Dn!="function")throw Error(w(280));var r=e.stateNode;r&&(r=wa(r),Dn(e.stateNode,e.type,r))}}function ud(e){rt?tt?tt.push(e):tt=[e]:rt=e}function od(){if(rt){var e=rt,r=tt;if(tt=rt=null,vu(e),r)for(e=0;e<r.length;e++)vu(r[e])}}function dd(e,r){return e(r)}function sd(){}var Ba=!1;function cd(e,r,t){if(Ba)return e(r,t);Ba=!0;try{return dd(e,r,t)}finally{Ba=!1,(rt!==null||tt!==null)&&(sd(),od())}}function Bt(e,r){var t=e.stateNode;if(t===null)return null;var l=wa(t);if(l===null)return null;t=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,r,typeof t));return t}var En=!1;if(Ke)try{var yt={};Object.defineProperty(yt,"passive",{get:function(){En=!0}}),window.addEventListener("test",yt,yt),window.removeEventListener("test",yt,yt)}catch{En=!1}function Zc(e,r,t,l,a,n,i,u,o){var d=Array.prototype.slice.call(arguments,3);try{r.apply(t,d)}catch(m){this.onError(m)}}var It=!1,Xl=null,Ql=!1,Pn=null,Jc={onError:function(e){It=!0,Xl=e}};function Gc(e,r,t,l,a,n,i,u,o){It=!1,Xl=null,Zc.apply(Jc,arguments)}function Yc(e,r,t,l,a,n,i,u,o){if(Gc.apply(this,arguments),It){if(It){var d=Xl;It=!1,Xl=null}else throw Error(w(198));Ql||(Ql=!0,Pn=d)}}function Rr(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function Ud(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function wu(e){if(Rr(e)!==e)throw Error(w(188))}function e0(e){var r=e.alternate;if(!r){if(r=Rr(e),r===null)throw Error(w(188));return r!==e?null:e}for(var t=e,l=r;;){var a=t.return;if(a===null)break;var n=a.alternate;if(n===null){if(l=a.return,l!==null){t=l;continue}break}if(a.child===n.child){for(n=a.child;n;){if(n===t)return wu(a),e;if(n===l)return wu(a),r;n=n.sibling}throw Error(w(188))}if(t.return!==l.return)t=a,l=n;else{for(var i=!1,u=a.child;u;){if(u===t){i=!0,t=a,l=n;break}if(u===l){i=!0,l=a,t=n;break}u=u.sibling}if(!i){for(u=n.child;u;){if(u===t){i=!0,t=n,l=a;break}if(u===l){i=!0,l=n,t=a;break}u=u.sibling}if(!i)throw Error(w(189))}}if(t.alternate!==l)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:r}function hd(e){return e=e0(e),e!==null?pd(e):null}function pd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=pd(e);if(r!==null)return r;e=e.sibling}return null}var fd=ve.unstable_scheduleCallback,yu=ve.unstable_cancelCallback,r0=ve.unstable_shouldYield,t0=ve.unstable_requestPaint,Q=ve.unstable_now,l0=ve.unstable_getCurrentPriorityLevel,qi=ve.unstable_ImmediatePriority,md=ve.unstable_UserBlockingPriority,Hl=ve.unstable_NormalPriority,a0=ve.unstable_LowPriority,bd=ve.unstable_IdlePriority,ba=null,_e=null;function n0(e){if(_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(ba,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:o0,i0=Math.log,u0=Math.LN2;function o0(e){return e>>>=0,e===0?32:31-(i0(e)/u0|0)|0}var kl=64,vl=4194304;function Pt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kl(e,r){var t=e.pendingLanes;if(t===0)return 0;var l=0,a=e.suspendedLanes,n=e.pingedLanes,i=t&268435455;if(i!==0){var u=i&~a;u!==0?l=Pt(u):(n&=i,n!==0&&(l=Pt(n)))}else i=t&~a,i!==0?l=Pt(i):n!==0&&(l=Pt(n));if(l===0)return 0;if(r!==0&&r!==l&&!(r&a)&&(a=l&-l,n=r&-r,a>=n||a===16&&(n&4194240)!==0))return r;if(l&4&&(l|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=l;0<r;)t=31-Ie(r),a=1<<t,l|=e[t],r&=~a;return l}function d0(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s0(e,r){for(var t=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,n=e.pendingLanes;0<n;){var i=31-Ie(n),u=1<<i,o=a[i];o===-1?(!(u&t)||u&l)&&(a[i]=d0(u,r)):o<=r&&(e.expiredLanes|=u),n&=~u}}function Ln(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gd(){var e=kl;return kl<<=1,!(kl&4194240)&&(kl=64),e}function Xa(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function ol(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Ie(r),e[r]=t}function c0(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Ie(t),n=1<<a;r[a]=0,l[a]=-1,e[a]=-1,t&=~n}}function xi(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var l=31-Ie(t),a=1<<l;a&r|e[l]&r&&(e[l]|=r),t&=~a}}var z=0;function kd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vd,Ai,wd,yd,qd,Mn=!1,wl=[],dr=null,sr=null,cr=null,Xt=new Map,Qt=new Map,ar=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qu(e,r){switch(e){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Xt.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(r.pointerId)}}function qt(e,r,t,l,a,n){return e===null||e.nativeEvent!==n?(e={blockedOn:r,domEventName:t,eventSystemFlags:l,nativeEvent:n,targetContainers:[a]},r!==null&&(r=sl(r),r!==null&&Ai(r)),e):(e.eventSystemFlags|=l,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function h0(e,r,t,l,a){switch(r){case"focusin":return dr=qt(dr,e,r,t,l,a),!0;case"dragenter":return sr=qt(sr,e,r,t,l,a),!0;case"mouseover":return cr=qt(cr,e,r,t,l,a),!0;case"pointerover":var n=a.pointerId;return Xt.set(n,qt(Xt.get(n)||null,e,r,t,l,a)),!0;case"gotpointercapture":return n=a.pointerId,Qt.set(n,qt(Qt.get(n)||null,e,r,t,l,a)),!0}return!1}function xd(e){var r=Cr(e.target);if(r!==null){var t=Rr(r);if(t!==null){if(r=t.tag,r===13){if(r=Ud(t),r!==null){e.blockedOn=r,qd(e.priority,function(){wd(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Il(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=In(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Nn=l,t.target.dispatchEvent(l),Nn=null}else return r=sl(t),r!==null&&Ai(r),e.blockedOn=t,!1;r.shift()}return!0}function xu(e,r,t){Il(e)&&t.delete(r)}function p0(){Mn=!1,dr!==null&&Il(dr)&&(dr=null),sr!==null&&Il(sr)&&(sr=null),cr!==null&&Il(cr)&&(cr=null),Xt.forEach(xu),Qt.forEach(xu)}function xt(e,r){e.blockedOn===r&&(e.blockedOn=null,Mn||(Mn=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,p0)))}function Ht(e){function r(a){return xt(a,e)}if(0<wl.length){xt(wl[0],e);for(var t=1;t<wl.length;t++){var l=wl[t];l.blockedOn===e&&(l.blockedOn=null)}}for(dr!==null&&xt(dr,e),sr!==null&&xt(sr,e),cr!==null&&xt(cr,e),Xt.forEach(r),Qt.forEach(r),t=0;t<ar.length;t++)l=ar[t],l.blockedOn===e&&(l.blockedOn=null);for(;0<ar.length&&(t=ar[0],t.blockedOn===null);)xd(t),t.blockedOn===null&&ar.shift()}var lt=Ge.ReactCurrentBatchConfig,$l=!0;function f0(e,r,t,l){var a=z,n=lt.transition;lt.transition=null;try{z=1,Si(e,r,t,l)}finally{z=a,lt.transition=n}}function m0(e,r,t,l){var a=z,n=lt.transition;lt.transition=null;try{z=4,Si(e,r,t,l)}finally{z=a,lt.transition=n}}function Si(e,r,t,l){if($l){var a=In(e,r,t,l);if(a===null)rn(e,r,l,Zl,t),qu(e,l);else if(h0(a,e,r,t,l))l.stopPropagation();else if(qu(e,l),r&4&&-1<U0.indexOf(e)){for(;a!==null;){var n=sl(a);if(n!==null&&vd(n),n=In(e,r,t,l),n===null&&rn(e,r,l,Zl,t),n===a)break;a=n}a!==null&&l.stopPropagation()}else rn(e,r,l,null,t)}}var Zl=null;function In(e,r,t,l){if(Zl=null,e=yi(l),e=Cr(e),e!==null)if(r=Rr(e),r===null)e=null;else if(t=r.tag,t===13){if(e=Ud(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Zl=e,null}function Ad(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l0()){case qi:return 1;case md:return 4;case Hl:case a0:return 16;case bd:return 536870912;default:return 16}default:return 16}}var ir=null,Ci=null,zl=null;function Sd(){if(zl)return zl;var e,r=Ci,t=r.length,l,a="value"in ir?ir.value:ir.textContent,n=a.length;for(e=0;e<t&&r[e]===a[e];e++);var i=t-e;for(l=1;l<=i&&r[t-l]===a[n-l];l++);return zl=a.slice(e,1<l?1-l:void 0)}function Wl(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Au(){return!1}function ye(e){function r(t,l,a,n,i){this._reactName=t,this._targetInst=a,this.type=l,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(n):n[u]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?yl:Au,this.isPropagationStopped=Au,this}return F(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),r}var mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ni=ye(mt),dl=F({},mt,{view:0,detail:0}),b0=ye(dl),Qa,Ha,At,ga=F({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Di,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==At&&(At&&e.type==="mousemove"?(Qa=e.screenX-At.screenX,Ha=e.screenY-At.screenY):Ha=Qa=0,At=e),Qa)},movementY:function(e){return"movementY"in e?e.movementY:Ha}}),Su=ye(ga),g0=F({},ga,{dataTransfer:0}),k0=ye(g0),v0=F({},dl,{relatedTarget:0}),Ka=ye(v0),w0=F({},mt,{animationName:0,elapsedTime:0,pseudoElement:0}),y0=ye(w0),q0=F({},mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x0=ye(q0),A0=F({},mt,{data:0}),Cu=ye(A0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=N0[e])?!!r[e]:!1}function Di(){return D0}var E0=F({},dl,{key:function(e){if(e.key){var r=S0[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?C0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Di,charCode:function(e){return e.type==="keypress"?Wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P0=ye(E0),L0=F({},ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nu=ye(L0),M0=F({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Di}),I0=ye(M0),z0=F({},mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),W0=ye(z0),j0=F({},ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=ye(j0),T0=[9,13,27,32],Ei=Ke&&"CompositionEvent"in window,zt=null;Ke&&"documentMode"in document&&(zt=document.documentMode);var _0=Ke&&"TextEvent"in window&&!zt,Cd=Ke&&(!Ei||zt&&8<zt&&11>=zt),Du=" ",Eu=!1;function Nd(e,r){switch(e){case"keyup":return T0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function O0(e,r){switch(e){case"compositionend":return Dd(r);case"keypress":return r.which!==32?null:(Eu=!0,Du);case"textInput":return e=r.data,e===Du&&Eu?null:e;default:return null}}function F0(e,r){if(Br)return e==="compositionend"||!Ei&&Nd(e,r)?(e=Sd(),zl=Ci=ir=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Cd&&r.locale!=="ko"?null:r.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!V0[e.type]:r==="textarea"}function Ed(e,r,t,l){ud(l),r=Jl(r,"onChange"),0<r.length&&(t=new Ni("onChange","change",null,t,l),e.push({event:t,listeners:r}))}var Wt=null,Kt=null;function B0(e){Od(e,0)}function ka(e){var r=Hr(e);if(ed(r))return e}function X0(e,r){if(e==="change")return r}var Pd=!1;if(Ke){var $a;if(Ke){var Za="oninput"in document;if(!Za){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),Za=typeof Lu.oninput=="function"}$a=Za}else $a=!1;Pd=$a&&(!document.documentMode||9<document.documentMode)}function Mu(){Wt&&(Wt.detachEvent("onpropertychange",Ld),Kt=Wt=null)}function Ld(e){if(e.propertyName==="value"&&ka(Kt)){var r=[];Ed(r,Kt,e,yi(e)),cd(B0,r)}}function Q0(e,r,t){e==="focusin"?(Mu(),Wt=r,Kt=t,Wt.attachEvent("onpropertychange",Ld)):e==="focusout"&&Mu()}function H0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ka(Kt)}function K0(e,r){if(e==="click")return ka(r)}function $0(e,r){if(e==="input"||e==="change")return ka(r)}function Z0(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var We=typeof Object.is=="function"?Object.is:Z0;function $t(e,r){if(We(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),l=Object.keys(r);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var a=t[l];if(!mn.call(r,a)||!We(e[a],r[a]))return!1}return!0}function Iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,r){var t=Iu(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=r&&l>=r)return{node:t,offset:r-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Iu(t)}}function Md(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Md(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Id(){for(var e=window,r=Bl();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=Bl(e.document)}return r}function Pi(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function J0(e){var r=Id(),t=e.focusedElem,l=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&Md(t.ownerDocument.documentElement,t)){if(l!==null&&Pi(t)){if(r=l.start,e=l.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,n=Math.min(l.start,a);l=l.end===void 0?n:Math.min(l.end,a),!e.extend&&n>l&&(a=l,l=n,n=a),a=zu(t,n);var i=zu(t,l);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),n>l?(e.addRange(r),e.extend(i.node,i.offset)):(r.setEnd(i.node,i.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var G0=Ke&&"documentMode"in document&&11>=document.documentMode,Xr=null,zn=null,jt=null,Wn=!1;function Wu(e,r,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wn||Xr==null||Xr!==Bl(l)||(l=Xr,"selectionStart"in l&&Pi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jt&&$t(jt,l)||(jt=l,l=Jl(zn,"onSelect"),0<l.length&&(r=new Ni("onSelect","select",null,r,t),e.push({event:r,listeners:l}),r.target=Xr)))}function ql(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var Qr={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},Ja={},zd={};Ke&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function va(e){if(Ja[e])return Ja[e];if(!Qr[e])return e;var r=Qr[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in zd)return Ja[e]=r[t];return e}var Wd=va("animationend"),jd=va("animationiteration"),Rd=va("animationstart"),Td=va("transitionend"),_d=new Map,ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(e,r){_d.set(e,r),jr(r,[e])}for(var Ga=0;Ga<ju.length;Ga++){var Ya=ju[Ga],Y0=Ya.toLowerCase(),e2=Ya[0].toUpperCase()+Ya.slice(1);vr(Y0,"on"+e2)}vr(Wd,"onAnimationEnd");vr(jd,"onAnimationIteration");vr(Rd,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(Td,"onTransitionEnd");ut("onMouseEnter",["mouseout","mouseover"]);ut("onMouseLeave",["mouseout","mouseover"]);ut("onPointerEnter",["pointerout","pointerover"]);ut("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lt));function Ru(e,r,t){var l=e.type||"unknown-event";e.currentTarget=t,Yc(l,r,void 0,e),e.currentTarget=null}function Od(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],a=l.event;l=l.listeners;e:{var n=void 0;if(r)for(var i=l.length-1;0<=i;i--){var u=l[i],o=u.instance,d=u.currentTarget;if(u=u.listener,o!==n&&a.isPropagationStopped())break e;Ru(a,u,d),n=o}else for(i=0;i<l.length;i++){if(u=l[i],o=u.instance,d=u.currentTarget,u=u.listener,o!==n&&a.isPropagationStopped())break e;Ru(a,u,d),n=o}}}if(Ql)throw e=Pn,Ql=!1,Pn=null,e}function j(e,r){var t=r[On];t===void 0&&(t=r[On]=new Set);var l=e+"__bubble";t.has(l)||(Fd(r,e,2,!1),t.add(l))}function en(e,r,t){var l=0;r&&(l|=4),Fd(t,e,l,r)}var xl="_reactListening"+Math.random().toString(36).slice(2);function Zt(e){if(!e[xl]){e[xl]=!0,$o.forEach(function(t){t!=="selectionchange"&&(r2.has(t)||en(t,!1,e),en(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[xl]||(r[xl]=!0,en("selectionchange",!1,r))}}function Fd(e,r,t,l){switch(Ad(r)){case 1:var a=f0;break;case 4:a=m0;break;default:a=Si}t=a.bind(null,r,t,e),a=void 0,!En||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(r,t,{capture:!0,passive:a}):e.addEventListener(r,t,!0):a!==void 0?e.addEventListener(r,t,{passive:a}):e.addEventListener(r,t,!1)}function rn(e,r,t,l,a){var n=l;if(!(r&1)&&!(r&2)&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var u=l.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(i===4)for(i=l.return;i!==null;){var o=i.tag;if((o===3||o===4)&&(o=i.stateNode.containerInfo,o===a||o.nodeType===8&&o.parentNode===a))return;i=i.return}for(;u!==null;){if(i=Cr(u),i===null)return;if(o=i.tag,o===5||o===6){l=n=i;continue e}u=u.parentNode}}l=l.return}cd(function(){var d=n,m=yi(t),p=[];e:{var f=_d.get(e);if(f!==void 0){var b=Ni,k=e;switch(e){case"keypress":if(Wl(t)===0)break e;case"keydown":case"keyup":b=P0;break;case"focusin":k="focus",b=Ka;break;case"focusout":k="blur",b=Ka;break;case"beforeblur":case"afterblur":b=Ka;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=k0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=I0;break;case Wd:case jd:case Rd:b=y0;break;case Td:b=W0;break;case"scroll":b=b0;break;case"wheel":b=R0;break;case"copy":case"cut":case"paste":b=x0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Nu}var v=(r&4)!==0,q=!v&&e==="scroll",U=v?f!==null?f+"Capture":null:f;v=[];for(var s=d,h;s!==null;){h=s;var g=h.stateNode;if(h.tag===5&&g!==null&&(h=g,U!==null&&(g=Bt(s,U),g!=null&&v.push(Jt(s,g,h)))),q)break;s=s.return}0<v.length&&(f=new b(f,k,null,t,m),p.push({event:f,listeners:v}))}}if(!(r&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&t!==Nn&&(k=t.relatedTarget||t.fromElement)&&(Cr(k)||k[$e]))break e;if((b||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,b?(k=t.relatedTarget||t.toElement,b=d,k=k?Cr(k):null,k!==null&&(q=Rr(k),k!==q||k.tag!==5&&k.tag!==6)&&(k=null)):(b=null,k=d),b!==k)){if(v=Su,g="onMouseLeave",U="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(v=Nu,g="onPointerLeave",U="onPointerEnter",s="pointer"),q=b==null?f:Hr(b),h=k==null?f:Hr(k),f=new v(g,s+"leave",b,t,m),f.target=q,f.relatedTarget=h,g=null,Cr(m)===d&&(v=new v(U,s+"enter",k,t,m),v.target=h,v.relatedTarget=q,g=v),q=g,b&&k)r:{for(v=b,U=k,s=0,h=v;h;h=Or(h))s++;for(h=0,g=U;g;g=Or(g))h++;for(;0<s-h;)v=Or(v),s--;for(;0<h-s;)U=Or(U),h--;for(;s--;){if(v===U||U!==null&&v===U.alternate)break r;v=Or(v),U=Or(U)}v=null}else v=null;b!==null&&Tu(p,f,b,v,!1),k!==null&&q!==null&&Tu(p,q,k,v,!0)}}e:{if(f=d?Hr(d):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var x=X0;else if(Pu(f))if(Pd)x=$0;else{x=H0;var C=Q0}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=K0);if(x&&(x=x(e,d))){Ed(p,x,t,m);break e}C&&C(e,f,d),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&qn(f,"number",f.value)}switch(C=d?Hr(d):window,e){case"focusin":(Pu(C)||C.contentEditable==="true")&&(Xr=C,zn=d,jt=null);break;case"focusout":jt=zn=Xr=null;break;case"mousedown":Wn=!0;break;case"contextmenu":case"mouseup":case"dragend":Wn=!1,Wu(p,t,m);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":Wu(p,t,m)}var N;if(Ei)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Br?Nd(e,t)&&(D="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(D="onCompositionStart");D&&(Cd&&t.locale!=="ko"&&(Br||D!=="onCompositionStart"?D==="onCompositionEnd"&&Br&&(N=Sd()):(ir=m,Ci="value"in ir?ir.value:ir.textContent,Br=!0)),C=Jl(d,D),0<C.length&&(D=new Cu(D,e,null,t,m),p.push({event:D,listeners:C}),N?D.data=N:(N=Dd(t),N!==null&&(D.data=N)))),(N=_0?O0(e,t):F0(e,t))&&(d=Jl(d,"onBeforeInput"),0<d.length&&(m=new Cu("onBeforeInput","beforeinput",null,t,m),p.push({event:m,listeners:d}),m.data=N))}Od(p,r)})}function Jt(e,r,t){return{instance:e,listener:r,currentTarget:t}}function Jl(e,r){for(var t=r+"Capture",l=[];e!==null;){var a=e,n=a.stateNode;a.tag===5&&n!==null&&(a=n,n=Bt(e,t),n!=null&&l.unshift(Jt(e,n,a)),n=Bt(e,r),n!=null&&l.push(Jt(e,n,a))),e=e.return}return l}function Or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tu(e,r,t,l,a){for(var n=r._reactName,i=[];t!==null&&t!==l;){var u=t,o=u.alternate,d=u.stateNode;if(o!==null&&o===l)break;u.tag===5&&d!==null&&(u=d,a?(o=Bt(t,n),o!=null&&i.unshift(Jt(t,o,u))):a||(o=Bt(t,n),o!=null&&i.push(Jt(t,o,u)))),t=t.return}i.length!==0&&e.push({event:r,listeners:i})}var t2=/\r\n?/g,l2=/\u0000|\uFFFD/g;function _u(e){return(typeof e=="string"?e:""+e).replace(t2,`
`).replace(l2,"")}function Al(e,r,t){if(r=_u(r),_u(e)!==r&&t)throw Error(w(425))}function Gl(){}var jn=null,Rn=null;function Tn(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var _n=typeof setTimeout=="function"?setTimeout:void 0,a2=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,n2=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch(i2)}:_n;function i2(e){setTimeout(function(){throw e})}function tn(e,r){var t=r,l=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(l===0){e.removeChild(a),Ht(r);return}l--}else t!=="$"&&t!=="$?"&&t!=="$!"||l++;t=a}while(t);Ht(r)}function Ur(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var bt=Math.random().toString(36).slice(2),Te="__reactFiber$"+bt,Gt="__reactProps$"+bt,$e="__reactContainer$"+bt,On="__reactEvents$"+bt,u2="__reactListeners$"+bt,o2="__reactHandles$"+bt;function Cr(e){var r=e[Te];if(r)return r;for(var t=e.parentNode;t;){if(r=t[$e]||t[Te]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=Fu(e);e!==null;){if(t=e[Te])return t;e=Fu(e)}return r}e=t,t=e.parentNode}return null}function sl(e){return e=e[Te]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function wa(e){return e[Gt]||null}var Fn=[],Kr=-1;function wr(e){return{current:e}}function R(e){0>Kr||(e.current=Fn[Kr],Fn[Kr]=null,Kr--)}function W(e,r){Kr++,Fn[Kr]=e.current,e.current=r}var kr={},ue=wr(kr),pe=wr(!1),Lr=kr;function ot(e,r){var t=e.type.contextTypes;if(!t)return kr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var a={},n;for(n in t)a[n]=r[n];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function fe(e){return e=e.childContextTypes,e!=null}function Yl(){R(pe),R(ue)}function Vu(e,r,t){if(ue.current!==kr)throw Error(w(168));W(ue,r),W(pe,t)}function Vd(e,r,t){var l=e.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return t;l=l.getChildContext();for(var a in l)if(!(a in r))throw Error(w(108,Qc(e)||"Unknown",a));return F({},t,l)}function ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kr,Lr=ue.current,W(ue,e),W(pe,pe.current),!0}function Bu(e,r,t){var l=e.stateNode;if(!l)throw Error(w(169));t?(e=Vd(e,r,Lr),l.__reactInternalMemoizedMergedChildContext=e,R(pe),R(ue),W(ue,e)):R(pe),W(pe,t)}var Be=null,ya=!1,ln=!1;function Bd(e){Be===null?Be=[e]:Be.push(e)}function d2(e){ya=!0,Bd(e)}function yr(){if(!ln&&Be!==null){ln=!0;var e=0,r=z;try{var t=Be;for(z=1;e<t.length;e++){var l=t[e];do l=l(!0);while(l!==null)}Be=null,ya=!1}catch(a){throw Be!==null&&(Be=Be.slice(e+1)),fd(qi,yr),a}finally{z=r,ln=!1}}return null}var $r=[],Zr=0,ra=null,ta=0,qe=[],xe=0,Mr=null,Xe=1,Qe="";function Ar(e,r){$r[Zr++]=ta,$r[Zr++]=ra,ra=e,ta=r}function Xd(e,r,t){qe[xe++]=Xe,qe[xe++]=Qe,qe[xe++]=Mr,Mr=e;var l=Xe;e=Qe;var a=32-Ie(l)-1;l&=~(1<<a),t+=1;var n=32-Ie(r)+a;if(30<n){var i=a-a%5;n=(l&(1<<i)-1).toString(32),l>>=i,a-=i,Xe=1<<32-Ie(r)+a|t<<a|l,Qe=n+e}else Xe=1<<n|t<<a|l,Qe=e}function Li(e){e.return!==null&&(Ar(e,1),Xd(e,1,0))}function Mi(e){for(;e===ra;)ra=$r[--Zr],$r[Zr]=null,ta=$r[--Zr],$r[Zr]=null;for(;e===Mr;)Mr=qe[--xe],qe[xe]=null,Qe=qe[--xe],qe[xe]=null,Xe=qe[--xe],qe[xe]=null}var ke=null,ge=null,T=!1,Me=null;function Qd(e,r){var t=Ae(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function Xu(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ke=e,ge=Ur(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ke=e,ge=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=Mr!==null?{id:Xe,overflow:Qe}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=Ae(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,ke=e,ge=null,!0):!1;default:return!1}}function Vn(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bn(e){if(T){var r=ge;if(r){var t=r;if(!Xu(e,r)){if(Vn(e))throw Error(w(418));r=Ur(t.nextSibling);var l=ke;r&&Xu(e,r)?Qd(l,t):(e.flags=e.flags&-4097|2,T=!1,ke=e)}}else{if(Vn(e))throw Error(w(418));e.flags=e.flags&-4097|2,T=!1,ke=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Sl(e){if(e!==ke)return!1;if(!T)return Qu(e),T=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Tn(e.type,e.memoizedProps)),r&&(r=ge)){if(Vn(e))throw Hd(),Error(w(418));for(;r;)Qd(e,r),r=Ur(r.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){ge=Ur(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}ge=null}}else ge=ke?Ur(e.stateNode.nextSibling):null;return!0}function Hd(){for(var e=ge;e;)e=Ur(e.nextSibling)}function dt(){ge=ke=null,T=!1}function Ii(e){Me===null?Me=[e]:Me.push(e)}var s2=Ge.ReactCurrentBatchConfig;function St(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var l=t.stateNode}if(!l)throw Error(w(147,e));var a=l,n=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===n?r.ref:(r=function(i){var u=a.refs;i===null?delete u[n]:u[n]=i},r._stringRef=n,r)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function Cl(e,r){throw e=Object.prototype.toString.call(r),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Hu(e){var r=e._init;return r(e._payload)}function Kd(e){function r(U,s){if(e){var h=U.deletions;h===null?(U.deletions=[s],U.flags|=16):h.push(s)}}function t(U,s){if(!e)return null;for(;s!==null;)r(U,s),s=s.sibling;return null}function l(U,s){for(U=new Map;s!==null;)s.key!==null?U.set(s.key,s):U.set(s.index,s),s=s.sibling;return U}function a(U,s){return U=mr(U,s),U.index=0,U.sibling=null,U}function n(U,s,h){return U.index=h,e?(h=U.alternate,h!==null?(h=h.index,h<s?(U.flags|=2,s):h):(U.flags|=2,s)):(U.flags|=1048576,s)}function i(U){return e&&U.alternate===null&&(U.flags|=2),U}function u(U,s,h,g){return s===null||s.tag!==6?(s=cn(h,U.mode,g),s.return=U,s):(s=a(s,h),s.return=U,s)}function o(U,s,h,g){var x=h.type;return x===Vr?m(U,s,h.props.children,g,h.key):s!==null&&(s.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===tr&&Hu(x)===s.type)?(g=a(s,h.props),g.ref=St(U,s,h),g.return=U,g):(g=Vl(h.type,h.key,h.props,null,U.mode,g),g.ref=St(U,s,h),g.return=U,g)}function d(U,s,h,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==h.containerInfo||s.stateNode.implementation!==h.implementation?(s=Un(h,U.mode,g),s.return=U,s):(s=a(s,h.children||[]),s.return=U,s)}function m(U,s,h,g,x){return s===null||s.tag!==7?(s=Pr(h,U.mode,g,x),s.return=U,s):(s=a(s,h),s.return=U,s)}function p(U,s,h){if(typeof s=="string"&&s!==""||typeof s=="number")return s=cn(""+s,U.mode,h),s.return=U,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case ml:return h=Vl(s.type,s.key,s.props,null,U.mode,h),h.ref=St(U,null,s),h.return=U,h;case Fr:return s=Un(s,U.mode,h),s.return=U,s;case tr:var g=s._init;return p(U,g(s._payload),h)}if(Et(s)||wt(s))return s=Pr(s,U.mode,h,null),s.return=U,s;Cl(U,s)}return null}function f(U,s,h,g){var x=s!==null?s.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return x!==null?null:u(U,s,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ml:return h.key===x?o(U,s,h,g):null;case Fr:return h.key===x?d(U,s,h,g):null;case tr:return x=h._init,f(U,s,x(h._payload),g)}if(Et(h)||wt(h))return x!==null?null:m(U,s,h,g,null);Cl(U,h)}return null}function b(U,s,h,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return U=U.get(h)||null,u(s,U,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ml:return U=U.get(g.key===null?h:g.key)||null,o(s,U,g,x);case Fr:return U=U.get(g.key===null?h:g.key)||null,d(s,U,g,x);case tr:var C=g._init;return b(U,s,h,C(g._payload),x)}if(Et(g)||wt(g))return U=U.get(h)||null,m(s,U,g,x,null);Cl(s,g)}return null}function k(U,s,h,g){for(var x=null,C=null,N=s,D=s=0,B=null;N!==null&&D<h.length;D++){N.index>D?(B=N,N=null):B=N.sibling;var M=f(U,N,h[D],g);if(M===null){N===null&&(N=B);break}e&&N&&M.alternate===null&&r(U,N),s=n(M,s,D),C===null?x=M:C.sibling=M,C=M,N=B}if(D===h.length)return t(U,N),T&&Ar(U,D),x;if(N===null){for(;D<h.length;D++)N=p(U,h[D],g),N!==null&&(s=n(N,s,D),C===null?x=N:C.sibling=N,C=N);return T&&Ar(U,D),x}for(N=l(U,N);D<h.length;D++)B=b(N,U,D,h[D],g),B!==null&&(e&&B.alternate!==null&&N.delete(B.key===null?D:B.key),s=n(B,s,D),C===null?x=B:C.sibling=B,C=B);return e&&N.forEach(function(De){return r(U,De)}),T&&Ar(U,D),x}function v(U,s,h,g){var x=wt(h);if(typeof x!="function")throw Error(w(150));if(h=x.call(h),h==null)throw Error(w(151));for(var C=x=null,N=s,D=s=0,B=null,M=h.next();N!==null&&!M.done;D++,M=h.next()){N.index>D?(B=N,N=null):B=N.sibling;var De=f(U,N,M.value,g);if(De===null){N===null&&(N=B);break}e&&N&&De.alternate===null&&r(U,N),s=n(De,s,D),C===null?x=De:C.sibling=De,C=De,N=B}if(M.done)return t(U,N),T&&Ar(U,D),x;if(N===null){for(;!M.done;D++,M=h.next())M=p(U,M.value,g),M!==null&&(s=n(M,s,D),C===null?x=M:C.sibling=M,C=M);return T&&Ar(U,D),x}for(N=l(U,N);!M.done;D++,M=h.next())M=b(N,U,D,M.value,g),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?D:M.key),s=n(M,s,D),C===null?x=M:C.sibling=M,C=M);return e&&N.forEach(function(kt){return r(U,kt)}),T&&Ar(U,D),x}function q(U,s,h,g){if(typeof h=="object"&&h!==null&&h.type===Vr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ml:e:{for(var x=h.key,C=s;C!==null;){if(C.key===x){if(x=h.type,x===Vr){if(C.tag===7){t(U,C.sibling),s=a(C,h.props.children),s.return=U,U=s;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===tr&&Hu(x)===C.type){t(U,C.sibling),s=a(C,h.props),s.ref=St(U,C,h),s.return=U,U=s;break e}t(U,C);break}else r(U,C);C=C.sibling}h.type===Vr?(s=Pr(h.props.children,U.mode,g,h.key),s.return=U,U=s):(g=Vl(h.type,h.key,h.props,null,U.mode,g),g.ref=St(U,s,h),g.return=U,U=g)}return i(U);case Fr:e:{for(C=h.key;s!==null;){if(s.key===C)if(s.tag===4&&s.stateNode.containerInfo===h.containerInfo&&s.stateNode.implementation===h.implementation){t(U,s.sibling),s=a(s,h.children||[]),s.return=U,U=s;break e}else{t(U,s);break}else r(U,s);s=s.sibling}s=Un(h,U.mode,g),s.return=U,U=s}return i(U);case tr:return C=h._init,q(U,s,C(h._payload),g)}if(Et(h))return k(U,s,h,g);if(wt(h))return v(U,s,h,g);Cl(U,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,s!==null&&s.tag===6?(t(U,s.sibling),s=a(s,h),s.return=U,U=s):(t(U,s),s=cn(h,U.mode,g),s.return=U,U=s),i(U)):t(U,s)}return q}var st=Kd(!0),$d=Kd(!1),la=wr(null),aa=null,Jr=null,zi=null;function Wi(){zi=Jr=aa=null}function ji(e){var r=la.current;R(la),e._currentValue=r}function Xn(e,r,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),e===t)break;e=e.return}}function at(e,r){aa=e,zi=Jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(he=!0),e.firstContext=null)}function Ce(e){var r=e._currentValue;if(zi!==e)if(e={context:e,memoizedValue:r,next:null},Jr===null){if(aa===null)throw Error(w(308));Jr=e,aa.dependencies={lanes:0,firstContext:e}}else Jr=Jr.next=e;return r}var Nr=null;function Ri(e){Nr===null?Nr=[e]:Nr.push(e)}function Zd(e,r,t,l){var a=r.interleaved;return a===null?(t.next=t,Ri(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ze(e,l)}function Ze(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var lr=!1;function Ti(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jd(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function hr(e,r,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,I&2){var a=l.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),l.pending=r,Ze(e,t)}return a=l.interleaved,a===null?(r.next=r,Ri(l)):(r.next=a.next,a.next=r),l.interleaved=r,Ze(e,t)}function jl(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var l=r.lanes;l&=e.pendingLanes,t|=l,r.lanes=t,xi(e,t)}}function Ku(e,r){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var a=null,n=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};n===null?a=n=i:n=n.next=i,t=t.next}while(t!==null);n===null?a=n=r:n=n.next=r}else a=n=r;t={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:n,shared:l.shared,effects:l.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function na(e,r,t,l){var a=e.updateQueue;lr=!1;var n=a.firstBaseUpdate,i=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var o=u,d=o.next;o.next=null,i===null?n=d:i.next=d,i=o;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==i&&(u===null?m.firstBaseUpdate=d:u.next=d,m.lastBaseUpdate=o))}if(n!==null){var p=a.baseState;i=0,m=d=o=null,u=n;do{var f=u.lane,b=u.eventTime;if((l&f)===f){m!==null&&(m=m.next={eventTime:b,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=e,v=u;switch(f=r,b=t,v.tag){case 1:if(k=v.payload,typeof k=="function"){p=k.call(b,p,f);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=v.payload,f=typeof k=="function"?k.call(b,p,f):k,f==null)break e;p=F({},p,f);break e;case 2:lr=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[u]:f.push(u))}else b={eventTime:b,lane:f,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(d=m=b,o=p):m=m.next=b,i|=f;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;f=u,u=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);if(m===null&&(o=p),a.baseState=o,a.firstBaseUpdate=d,a.lastBaseUpdate=m,r=a.shared.interleaved,r!==null){a=r;do i|=a.lane,a=a.next;while(a!==r)}else n===null&&(a.shared.lanes=0);zr|=i,e.lanes=i,e.memoizedState=p}}function $u(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var l=e[r],a=l.callback;if(a!==null){if(l.callback=null,l=t,typeof a!="function")throw Error(w(191,a));a.call(l)}}}var cl={},Oe=wr(cl),Yt=wr(cl),el=wr(cl);function Dr(e){if(e===cl)throw Error(w(174));return e}function _i(e,r){switch(W(el,r),W(Yt,e),W(Oe,cl),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:An(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=An(r,e)}R(Oe),W(Oe,r)}function ct(){R(Oe),R(Yt),R(el)}function Gd(e){Dr(el.current);var r=Dr(Oe.current),t=An(r,e.type);r!==t&&(W(Yt,e),W(Oe,t))}function Oi(e){Yt.current===e&&(R(Oe),R(Yt))}var _=wr(0);function ia(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var an=[];function Fi(){for(var e=0;e<an.length;e++)an[e]._workInProgressVersionPrimary=null;an.length=0}var Rl=Ge.ReactCurrentDispatcher,nn=Ge.ReactCurrentBatchConfig,Ir=0,O=null,$=null,Y=null,ua=!1,Rt=!1,rl=0,c2=0;function ae(){throw Error(w(321))}function Vi(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!We(e[t],r[t]))return!1;return!0}function Bi(e,r,t,l,a,n){if(Ir=n,O=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Rl.current=e===null||e.memoizedState===null?f2:m2,e=t(l,a),Rt){n=0;do{if(Rt=!1,rl=0,25<=n)throw Error(w(301));n+=1,Y=$=null,r.updateQueue=null,Rl.current=b2,e=t(l,a)}while(Rt)}if(Rl.current=oa,r=$!==null&&$.next!==null,Ir=0,Y=$=O=null,ua=!1,r)throw Error(w(300));return e}function Xi(){var e=rl!==0;return rl=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?O.memoizedState=Y=e:Y=Y.next=e,Y}function Ne(){if($===null){var e=O.alternate;e=e!==null?e.memoizedState:null}else e=$.next;var r=Y===null?O.memoizedState:Y.next;if(r!==null)Y=r,$=e;else{if(e===null)throw Error(w(310));$=e,e={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},Y===null?O.memoizedState=Y=e:Y=Y.next=e}return Y}function tl(e,r){return typeof r=="function"?r(e):r}function un(e){var r=Ne(),t=r.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var l=$,a=l.baseQueue,n=t.pending;if(n!==null){if(a!==null){var i=a.next;a.next=n.next,n.next=i}l.baseQueue=a=n,t.pending=null}if(a!==null){n=a.next,l=l.baseState;var u=i=null,o=null,d=n;do{var m=d.lane;if((Ir&m)===m)o!==null&&(o=o.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};o===null?(u=o=p,i=l):o=o.next=p,O.lanes|=m,zr|=m}d=d.next}while(d!==null&&d!==n);o===null?i=l:o.next=u,We(l,r.memoizedState)||(he=!0),r.memoizedState=l,r.baseState=i,r.baseQueue=o,t.lastRenderedState=l}if(e=t.interleaved,e!==null){a=e;do n=a.lane,O.lanes|=n,zr|=n,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function on(e){var r=Ne(),t=r.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var l=t.dispatch,a=t.pending,n=r.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do n=e(n,i.action),i=i.next;while(i!==a);We(n,r.memoizedState)||(he=!0),r.memoizedState=n,r.baseQueue===null&&(r.baseState=n),t.lastRenderedState=n}return[n,l]}function Yd(){}function es(e,r){var t=O,l=Ne(),a=r(),n=!We(l.memoizedState,a);if(n&&(l.memoizedState=a,he=!0),l=l.queue,Qi(ls.bind(null,t,l,e),[e]),l.getSnapshot!==r||n||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,ll(9,ts.bind(null,t,l,a,r),void 0,null),ee===null)throw Error(w(349));Ir&30||rs(t,r,a)}return a}function rs(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=O.updateQueue,r===null?(r={lastEffect:null,stores:null},O.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function ts(e,r,t,l){r.value=t,r.getSnapshot=l,as(r)&&ns(e)}function ls(e,r,t){return t(function(){as(r)&&ns(e)})}function as(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!We(e,t)}catch{return!0}}function ns(e){var r=Ze(e,1);r!==null&&ze(r,e,1,-1)}function Zu(e){var r=Re();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:e},r.queue=e,e=e.dispatch=p2.bind(null,O,e),[r.memoizedState,e]}function ll(e,r,t,l){return e={tag:e,create:r,destroy:t,deps:l,next:null},r=O.updateQueue,r===null?(r={lastEffect:null,stores:null},O.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,r.lastEffect=e)),e}function is(){return Ne().memoizedState}function Tl(e,r,t,l){var a=Re();O.flags|=e,a.memoizedState=ll(1|r,t,void 0,l===void 0?null:l)}function qa(e,r,t,l){var a=Ne();l=l===void 0?null:l;var n=void 0;if($!==null){var i=$.memoizedState;if(n=i.destroy,l!==null&&Vi(l,i.deps)){a.memoizedState=ll(r,t,n,l);return}}O.flags|=e,a.memoizedState=ll(1|r,t,n,l)}function Ju(e,r){return Tl(8390656,8,e,r)}function Qi(e,r){return qa(2048,8,e,r)}function us(e,r){return qa(4,2,e,r)}function os(e,r){return qa(4,4,e,r)}function ds(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function ss(e,r,t){return t=t!=null?t.concat([e]):null,qa(4,4,ds.bind(null,r,e),t)}function Hi(){}function cs(e,r){var t=Ne();r=r===void 0?null:r;var l=t.memoizedState;return l!==null&&r!==null&&Vi(r,l[1])?l[0]:(t.memoizedState=[e,r],e)}function Us(e,r){var t=Ne();r=r===void 0?null:r;var l=t.memoizedState;return l!==null&&r!==null&&Vi(r,l[1])?l[0]:(e=e(),t.memoizedState=[e,r],e)}function hs(e,r,t){return Ir&21?(We(t,r)||(t=gd(),O.lanes|=t,zr|=t,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=t)}function U2(e,r){var t=z;z=t!==0&&4>t?t:4,e(!0);var l=nn.transition;nn.transition={};try{e(!1),r()}finally{z=t,nn.transition=l}}function ps(){return Ne().memoizedState}function h2(e,r,t){var l=fr(e);if(t={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null},fs(e))ms(r,t);else if(t=Zd(e,r,t,l),t!==null){var a=de();ze(t,e,l,a),bs(t,r,l)}}function p2(e,r,t){var l=fr(e),a={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null};if(fs(e))ms(r,a);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=r.lastRenderedReducer,n!==null))try{var i=r.lastRenderedState,u=n(i,t);if(a.hasEagerState=!0,a.eagerState=u,We(u,i)){var o=r.interleaved;o===null?(a.next=a,Ri(r)):(a.next=o.next,o.next=a),r.interleaved=a;return}}catch{}finally{}t=Zd(e,r,a,l),t!==null&&(a=de(),ze(t,e,l,a),bs(t,r,l))}}function fs(e){var r=e.alternate;return e===O||r!==null&&r===O}function ms(e,r){Rt=ua=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function bs(e,r,t){if(t&4194240){var l=r.lanes;l&=e.pendingLanes,t|=l,r.lanes=t,xi(e,t)}}var oa={readContext:Ce,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},f2={readContext:Ce,useCallback:function(e,r){return Re().memoizedState=[e,r===void 0?null:r],e},useContext:Ce,useEffect:Ju,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,Tl(4194308,4,ds.bind(null,r,e),t)},useLayoutEffect:function(e,r){return Tl(4194308,4,e,r)},useInsertionEffect:function(e,r){return Tl(4,2,e,r)},useMemo:function(e,r){var t=Re();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var l=Re();return r=t!==void 0?t(r):r,l.memoizedState=l.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=h2.bind(null,O,e),[l.memoizedState,e]},useRef:function(e){var r=Re();return e={current:e},r.memoizedState=e},useState:Zu,useDebugValue:Hi,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=Zu(!1),r=e[0];return e=U2.bind(null,e[1]),Re().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var l=O,a=Re();if(T){if(t===void 0)throw Error(w(407));t=t()}else{if(t=r(),ee===null)throw Error(w(349));Ir&30||rs(l,r,t)}a.memoizedState=t;var n={value:t,getSnapshot:r};return a.queue=n,Ju(ls.bind(null,l,n,e),[e]),l.flags|=2048,ll(9,ts.bind(null,l,n,t,r),void 0,null),t},useId:function(){var e=Re(),r=ee.identifierPrefix;if(T){var t=Qe,l=Xe;t=(l&~(1<<32-Ie(l)-1)).toString(32)+t,r=":"+r+"R"+t,t=rl++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=c2++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},m2={readContext:Ce,useCallback:cs,useContext:Ce,useEffect:Qi,useImperativeHandle:ss,useInsertionEffect:us,useLayoutEffect:os,useMemo:Us,useReducer:un,useRef:is,useState:function(){return un(tl)},useDebugValue:Hi,useDeferredValue:function(e){var r=Ne();return hs(r,$.memoizedState,e)},useTransition:function(){var e=un(tl)[0],r=Ne().memoizedState;return[e,r]},useMutableSource:Yd,useSyncExternalStore:es,useId:ps,unstable_isNewReconciler:!1},b2={readContext:Ce,useCallback:cs,useContext:Ce,useEffect:Qi,useImperativeHandle:ss,useInsertionEffect:us,useLayoutEffect:os,useMemo:Us,useReducer:on,useRef:is,useState:function(){return on(tl)},useDebugValue:Hi,useDeferredValue:function(e){var r=Ne();return $===null?r.memoizedState=e:hs(r,$.memoizedState,e)},useTransition:function(){var e=on(tl)[0],r=Ne().memoizedState;return[e,r]},useMutableSource:Yd,useSyncExternalStore:es,useId:ps,unstable_isNewReconciler:!1};function Pe(e,r){if(e&&e.defaultProps){r=F({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function Qn(e,r,t,l){r=e.memoizedState,t=t(l,r),t=t==null?r:F({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xa={isMounted:function(e){return(e=e._reactInternals)?Rr(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var l=de(),a=fr(e),n=He(l,a);n.payload=r,t!=null&&(n.callback=t),r=hr(e,n,a),r!==null&&(ze(r,e,a,l),jl(r,e,a))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var l=de(),a=fr(e),n=He(l,a);n.tag=1,n.payload=r,t!=null&&(n.callback=t),r=hr(e,n,a),r!==null&&(ze(r,e,a,l),jl(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=de(),l=fr(e),a=He(t,l);a.tag=2,r!=null&&(a.callback=r),r=hr(e,a,l),r!==null&&(ze(r,e,l,t),jl(r,e,l))}};function Gu(e,r,t,l,a,n,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,n,i):r.prototype&&r.prototype.isPureReactComponent?!$t(t,l)||!$t(a,n):!0}function gs(e,r,t){var l=!1,a=kr,n=r.contextType;return typeof n=="object"&&n!==null?n=Ce(n):(a=fe(r)?Lr:ue.current,l=r.contextTypes,n=(l=l!=null)?ot(e,a):kr),r=new r(t,n),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=xa,e.stateNode=r,r._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=n),r}function Yu(e,r,t,l){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,l),r.state!==e&&xa.enqueueReplaceState(r,r.state,null)}function Hn(e,r,t,l){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Ti(e);var n=r.contextType;typeof n=="object"&&n!==null?a.context=Ce(n):(n=fe(r)?Lr:ue.current,a.context=ot(e,n)),a.state=e.memoizedState,n=r.getDerivedStateFromProps,typeof n=="function"&&(Qn(e,r,n,t),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&xa.enqueueReplaceState(a,a.state,null),na(e,t,a,l),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ut(e,r){try{var t="",l=r;do t+=Xc(l),l=l.return;while(l);var a=t}catch(n){a=`
Error generating stack: `+n.message+`
`+n.stack}return{value:e,source:r,stack:a,digest:null}}function dn(e,r,t){return{value:e,source:null,stack:t??null,digest:r??null}}function Kn(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var g2=typeof WeakMap=="function"?WeakMap:Map;function ks(e,r,t){t=He(-1,t),t.tag=3,t.payload={element:null};var l=r.value;return t.callback=function(){sa||(sa=!0,li=l),Kn(e,r)},t}function vs(e,r,t){t=He(-1,t),t.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var a=r.value;t.payload=function(){return l(a)},t.callback=function(){Kn(e,r)}}var n=e.stateNode;return n!==null&&typeof n.componentDidCatch=="function"&&(t.callback=function(){Kn(e,r),typeof l!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var i=r.stack;this.componentDidCatch(r.value,{componentStack:i!==null?i:""})}),t}function eo(e,r,t){var l=e.pingCache;if(l===null){l=e.pingCache=new g2;var a=new Set;l.set(r,a)}else a=l.get(r),a===void 0&&(a=new Set,l.set(r,a));a.has(t)||(a.add(t),e=L2.bind(null,e,r,t),r.then(e,e))}function ro(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function to(e,r,t,l,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=He(-1,1),r.tag=2,hr(t,r,1))),t.lanes|=1),e)}var k2=Ge.ReactCurrentOwner,he=!1;function oe(e,r,t,l){r.child=e===null?$d(r,null,t,l):st(r,e.child,t,l)}function lo(e,r,t,l,a){t=t.render;var n=r.ref;return at(r,a),l=Bi(e,r,t,l,n,a),t=Xi(),e!==null&&!he?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Je(e,r,a)):(T&&t&&Li(r),r.flags|=1,oe(e,r,l,a),r.child)}function ao(e,r,t,l,a){if(e===null){var n=t.type;return typeof n=="function"&&!ru(n)&&n.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=n,ws(e,r,n,l,a)):(e=Vl(t.type,null,l,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(n=e.child,!(e.lanes&a)){var i=n.memoizedProps;if(t=t.compare,t=t!==null?t:$t,t(i,l)&&e.ref===r.ref)return Je(e,r,a)}return r.flags|=1,e=mr(n,l),e.ref=r.ref,e.return=r,r.child=e}function ws(e,r,t,l,a){if(e!==null){var n=e.memoizedProps;if($t(n,l)&&e.ref===r.ref)if(he=!1,r.pendingProps=l=n,(e.lanes&a)!==0)e.flags&131072&&(he=!0);else return r.lanes=e.lanes,Je(e,r,a)}return $n(e,r,t,l,a)}function ys(e,r,t){var l=r.pendingProps,a=l.children,n=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Yr,be),be|=t;else{if(!(t&1073741824))return e=n!==null?n.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,W(Yr,be),be|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=n!==null?n.baseLanes:t,W(Yr,be),be|=l}else n!==null?(l=n.baseLanes|t,r.memoizedState=null):l=t,W(Yr,be),be|=l;return oe(e,r,a,t),r.child}function qs(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function $n(e,r,t,l,a){var n=fe(t)?Lr:ue.current;return n=ot(r,n),at(r,a),t=Bi(e,r,t,l,n,a),l=Xi(),e!==null&&!he?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Je(e,r,a)):(T&&l&&Li(r),r.flags|=1,oe(e,r,t,a),r.child)}function no(e,r,t,l,a){if(fe(t)){var n=!0;ea(r)}else n=!1;if(at(r,a),r.stateNode===null)_l(e,r),gs(r,t,l),Hn(r,t,l,a),l=!0;else if(e===null){var i=r.stateNode,u=r.memoizedProps;i.props=u;var o=i.context,d=t.contextType;typeof d=="object"&&d!==null?d=Ce(d):(d=fe(t)?Lr:ue.current,d=ot(r,d));var m=t.getDerivedStateFromProps,p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==l||o!==d)&&Yu(r,i,l,d),lr=!1;var f=r.memoizedState;i.state=f,na(r,l,i,a),o=r.memoizedState,u!==l||f!==o||pe.current||lr?(typeof m=="function"&&(Qn(r,t,m,l),o=r.memoizedState),(u=lr||Gu(r,t,u,l,f,o,d))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(r.flags|=4194308)):(typeof i.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=o),i.props=l,i.state=o,i.context=d,l=u):(typeof i.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{i=r.stateNode,Jd(e,r),u=r.memoizedProps,d=r.type===r.elementType?u:Pe(r.type,u),i.props=d,p=r.pendingProps,f=i.context,o=t.contextType,typeof o=="object"&&o!==null?o=Ce(o):(o=fe(t)?Lr:ue.current,o=ot(r,o));var b=t.getDerivedStateFromProps;(m=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==p||f!==o)&&Yu(r,i,l,o),lr=!1,f=r.memoizedState,i.state=f,na(r,l,i,a);var k=r.memoizedState;u!==p||f!==k||pe.current||lr?(typeof b=="function"&&(Qn(r,t,b,l),k=r.memoizedState),(d=lr||Gu(r,t,d,l,f,k,o)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,k,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,k,o)),typeof i.componentDidUpdate=="function"&&(r.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(r.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=k),i.props=l,i.state=k,i.context=o,l=d):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(r.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(r.flags|=1024),l=!1)}return Zn(e,r,t,l,n,a)}function Zn(e,r,t,l,a,n){qs(e,r);var i=(r.flags&128)!==0;if(!l&&!i)return a&&Bu(r,t,!1),Je(e,r,n);l=r.stateNode,k2.current=r;var u=i&&typeof t.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,e!==null&&i?(r.child=st(r,e.child,null,n),r.child=st(r,null,u,n)):oe(e,r,u,n),r.memoizedState=l.state,a&&Bu(r,t,!0),r.child}function xs(e){var r=e.stateNode;r.pendingContext?Vu(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Vu(e,r.context,!1),_i(e,r.containerInfo)}function io(e,r,t,l,a){return dt(),Ii(a),r.flags|=256,oe(e,r,t,l),r.child}var Jn={dehydrated:null,treeContext:null,retryLane:0};function Gn(e){return{baseLanes:e,cachePool:null,transitions:null}}function As(e,r,t){var l=r.pendingProps,a=_.current,n=!1,i=(r.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(a&2)!==0),u?(n=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),W(_,a&1),e===null)return Bn(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(i=l.children,e=l.fallback,n?(l=r.mode,n=r.child,i={mode:"hidden",children:i},!(l&1)&&n!==null?(n.childLanes=0,n.pendingProps=i):n=Ca(i,l,0,null),e=Pr(e,l,t,null),n.return=r,e.return=r,n.sibling=e,r.child=n,r.child.memoizedState=Gn(t),r.memoizedState=Jn,e):Ki(r,i));if(a=e.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return v2(e,r,i,l,u,a,t);if(n){n=l.fallback,i=r.mode,a=e.child,u=a.sibling;var o={mode:"hidden",children:l.children};return!(i&1)&&r.child!==a?(l=r.child,l.childLanes=0,l.pendingProps=o,r.deletions=null):(l=mr(a,o),l.subtreeFlags=a.subtreeFlags&14680064),u!==null?n=mr(u,n):(n=Pr(n,i,t,null),n.flags|=2),n.return=r,l.return=r,l.sibling=n,r.child=l,l=n,n=r.child,i=e.child.memoizedState,i=i===null?Gn(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},n.memoizedState=i,n.childLanes=e.childLanes&~t,r.memoizedState=Jn,l}return n=e.child,e=n.sibling,l=mr(n,{mode:"visible",children:l.children}),!(r.mode&1)&&(l.lanes=t),l.return=r,l.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=l,r.memoizedState=null,l}function Ki(e,r){return r=Ca({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Nl(e,r,t,l){return l!==null&&Ii(l),st(r,e.child,null,t),e=Ki(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function v2(e,r,t,l,a,n,i){if(t)return r.flags&256?(r.flags&=-257,l=dn(Error(w(422))),Nl(e,r,i,l)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(n=l.fallback,a=r.mode,l=Ca({mode:"visible",children:l.children},a,0,null),n=Pr(n,a,i,null),n.flags|=2,l.return=r,n.return=r,l.sibling=n,r.child=l,r.mode&1&&st(r,e.child,null,i),r.child.memoizedState=Gn(i),r.memoizedState=Jn,n);if(!(r.mode&1))return Nl(e,r,i,null);if(a.data==="$!"){if(l=a.nextSibling&&a.nextSibling.dataset,l)var u=l.dgst;return l=u,n=Error(w(419)),l=dn(n,l,void 0),Nl(e,r,i,l)}if(u=(i&e.childLanes)!==0,he||u){if(l=ee,l!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(l.suspendedLanes|i)?0:a,a!==0&&a!==n.retryLane&&(n.retryLane=a,Ze(e,a),ze(l,e,a,-1))}return eu(),l=dn(Error(w(421))),Nl(e,r,i,l)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=M2.bind(null,e),a._reactRetry=r,null):(e=n.treeContext,ge=Ur(a.nextSibling),ke=r,T=!0,Me=null,e!==null&&(qe[xe++]=Xe,qe[xe++]=Qe,qe[xe++]=Mr,Xe=e.id,Qe=e.overflow,Mr=r),r=Ki(r,l.children),r.flags|=4096,r)}function uo(e,r,t){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r),Xn(e.return,r,t)}function sn(e,r,t,l,a){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:a}:(n.isBackwards=r,n.rendering=null,n.renderingStartTime=0,n.last=l,n.tail=t,n.tailMode=a)}function Ss(e,r,t){var l=r.pendingProps,a=l.revealOrder,n=l.tail;if(oe(e,r,l.children,t),l=_.current,l&2)l=l&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uo(e,t,r);else if(e.tag===19)uo(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(W(_,l),!(r.mode&1))r.memoizedState=null;else switch(a){case"forwards":for(t=r.child,a=null;t!==null;)e=t.alternate,e!==null&&ia(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=r.child,r.child=null):(a=t.sibling,t.sibling=null),sn(r,!1,a,t,n);break;case"backwards":for(t=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&ia(e)===null){r.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}sn(r,!0,t,null,n);break;case"together":sn(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function _l(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Je(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),zr|=r.lanes,!(t&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(w(153));if(r.child!==null){for(e=r.child,t=mr(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=mr(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function w2(e,r,t){switch(r.tag){case 3:xs(r),dt();break;case 5:Gd(r);break;case 1:fe(r.type)&&ea(r);break;case 4:_i(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,a=r.memoizedProps.value;W(la,l._currentValue),l._currentValue=a;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(W(_,_.current&1),r.flags|=128,null):t&r.child.childLanes?As(e,r,t):(W(_,_.current&1),e=Je(e,r,t),e!==null?e.sibling:null);W(_,_.current&1);break;case 19:if(l=(t&r.childLanes)!==0,e.flags&128){if(l)return Ss(e,r,t);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(_,_.current),l)break;return null;case 22:case 23:return r.lanes=0,ys(e,r,t)}return Je(e,r,t)}var Cs,Yn,Ns,Ds;Cs=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Yn=function(){};Ns=function(e,r,t,l){var a=e.memoizedProps;if(a!==l){e=r.stateNode,Dr(Oe.current);var n=null;switch(t){case"input":a=wn(e,a),l=wn(e,l),n=[];break;case"select":a=F({},a,{value:void 0}),l=F({},l,{value:void 0}),n=[];break;case"textarea":a=xn(e,a),l=xn(e,l),n=[];break;default:typeof a.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Gl)}Sn(t,l);var i;t=null;for(d in a)if(!l.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var u=a[d];for(i in u)u.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ft.hasOwnProperty(d)?n||(n=[]):(n=n||[]).push(d,null));for(d in l){var o=l[d];if(u=a!=null?a[d]:void 0,l.hasOwnProperty(d)&&o!==u&&(o!=null||u!=null))if(d==="style")if(u){for(i in u)!u.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in o)o.hasOwnProperty(i)&&u[i]!==o[i]&&(t||(t={}),t[i]=o[i])}else t||(n||(n=[]),n.push(d,t)),t=o;else d==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,u=u?u.__html:void 0,o!=null&&u!==o&&(n=n||[]).push(d,o)):d==="children"?typeof o!="string"&&typeof o!="number"||(n=n||[]).push(d,""+o):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ft.hasOwnProperty(d)?(o!=null&&d==="onScroll"&&j("scroll",e),n||u===o||(n=[])):(n=n||[]).push(d,o))}t&&(n=n||[]).push("style",t);var d=n;(r.updateQueue=d)&&(r.flags|=4)}};Ds=function(e,r,t,l){t!==l&&(r.flags|=4)};function Ct(e,r){if(!T)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ne(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(r)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,l|=a.subtreeFlags&14680064,l|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=t,r}function y2(e,r,t){var l=r.pendingProps;switch(Mi(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(r),null;case 1:return fe(r.type)&&Yl(),ne(r),null;case 3:return l=r.stateNode,ct(),R(pe),R(ue),Fi(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Sl(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Me!==null&&(ii(Me),Me=null))),Yn(e,r),ne(r),null;case 5:Oi(r);var a=Dr(el.current);if(t=r.type,e!==null&&r.stateNode!=null)Ns(e,r,t,l,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(w(166));return ne(r),null}if(e=Dr(Oe.current),Sl(r)){l=r.stateNode,t=r.type;var n=r.memoizedProps;switch(l[Te]=r,l[Gt]=n,e=(r.mode&1)!==0,t){case"dialog":j("cancel",l),j("close",l);break;case"iframe":case"object":case"embed":j("load",l);break;case"video":case"audio":for(a=0;a<Lt.length;a++)j(Lt[a],l);break;case"source":j("error",l);break;case"img":case"image":case"link":j("error",l),j("load",l);break;case"details":j("toggle",l);break;case"input":mu(l,n),j("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!n.multiple},j("invalid",l);break;case"textarea":gu(l,n),j("invalid",l)}Sn(t,n),a=null;for(var i in n)if(n.hasOwnProperty(i)){var u=n[i];i==="children"?typeof u=="string"?l.textContent!==u&&(n.suppressHydrationWarning!==!0&&Al(l.textContent,u,e),a=["children",u]):typeof u=="number"&&l.textContent!==""+u&&(n.suppressHydrationWarning!==!0&&Al(l.textContent,u,e),a=["children",""+u]):Ft.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&j("scroll",l)}switch(t){case"input":bl(l),bu(l,n,!0);break;case"textarea":bl(l),ku(l);break;case"select":case"option":break;default:typeof n.onClick=="function"&&(l.onclick=Gl)}l=a,r.updateQueue=l,l!==null&&(r.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ld(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=i.createElement(t,{is:l.is}):(e=i.createElement(t),t==="select"&&(i=e,l.multiple?i.multiple=!0:l.size&&(i.size=l.size))):e=i.createElementNS(e,t),e[Te]=r,e[Gt]=l,Cs(e,r,!1,!1),r.stateNode=e;e:{switch(i=Cn(t,l),t){case"dialog":j("cancel",e),j("close",e),a=l;break;case"iframe":case"object":case"embed":j("load",e),a=l;break;case"video":case"audio":for(a=0;a<Lt.length;a++)j(Lt[a],e);a=l;break;case"source":j("error",e),a=l;break;case"img":case"image":case"link":j("error",e),j("load",e),a=l;break;case"details":j("toggle",e),a=l;break;case"input":mu(e,l),a=wn(e,l),j("invalid",e);break;case"option":a=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},a=F({},l,{value:void 0}),j("invalid",e);break;case"textarea":gu(e,l),a=xn(e,l),j("invalid",e);break;default:a=l}Sn(t,a),u=a;for(n in u)if(u.hasOwnProperty(n)){var o=u[n];n==="style"?id(e,o):n==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&ad(e,o)):n==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&Vt(e,o):typeof o=="number"&&Vt(e,""+o):n!=="suppressContentEditableWarning"&&n!=="suppressHydrationWarning"&&n!=="autoFocus"&&(Ft.hasOwnProperty(n)?o!=null&&n==="onScroll"&&j("scroll",e):o!=null&&gi(e,n,o,i))}switch(t){case"input":bl(e),bu(e,l,!1);break;case"textarea":bl(e),ku(e);break;case"option":l.value!=null&&e.setAttribute("value",""+gr(l.value));break;case"select":e.multiple=!!l.multiple,n=l.value,n!=null?et(e,!!l.multiple,n,!1):l.defaultValue!=null&&et(e,!!l.multiple,l.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Gl)}switch(t){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return ne(r),null;case 6:if(e&&r.stateNode!=null)Ds(e,r,e.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(w(166));if(t=Dr(el.current),Dr(Oe.current),Sl(r)){if(l=r.stateNode,t=r.memoizedProps,l[Te]=r,(n=l.nodeValue!==t)&&(e=ke,e!==null))switch(e.tag){case 3:Al(l.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Al(l.nodeValue,t,(e.mode&1)!==0)}n&&(r.flags|=4)}else l=(t.nodeType===9?t:t.ownerDocument).createTextNode(l),l[Te]=r,r.stateNode=l}return ne(r),null;case 13:if(R(_),l=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(T&&ge!==null&&r.mode&1&&!(r.flags&128))Hd(),dt(),r.flags|=98560,n=!1;else if(n=Sl(r),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(w(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(w(317));n[Te]=r}else dt(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;ne(r),n=!1}else Me!==null&&(ii(Me),Me=null),n=!0;if(!n)return r.flags&65536?r:null}return r.flags&128?(r.lanes=t,r):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(r.child.flags|=8192,r.mode&1&&(e===null||_.current&1?J===0&&(J=3):eu())),r.updateQueue!==null&&(r.flags|=4),ne(r),null);case 4:return ct(),Yn(e,r),e===null&&Zt(r.stateNode.containerInfo),ne(r),null;case 10:return ji(r.type._context),ne(r),null;case 17:return fe(r.type)&&Yl(),ne(r),null;case 19:if(R(_),n=r.memoizedState,n===null)return ne(r),null;if(l=(r.flags&128)!==0,i=n.rendering,i===null)if(l)Ct(n,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(i=ia(e),i!==null){for(r.flags|=128,Ct(n,!1),l=i.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=t,t=r.child;t!==null;)n=t,e=l,n.flags&=14680066,i=n.alternate,i===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=i.childLanes,n.lanes=i.lanes,n.child=i.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=i.memoizedProps,n.memoizedState=i.memoizedState,n.updateQueue=i.updateQueue,n.type=i.type,e=i.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(_,_.current&1|2),r.child}e=e.sibling}n.tail!==null&&Q()>ht&&(r.flags|=128,l=!0,Ct(n,!1),r.lanes=4194304)}else{if(!l)if(e=ia(i),e!==null){if(r.flags|=128,l=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),Ct(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!T)return ne(r),null}else 2*Q()-n.renderingStartTime>ht&&t!==1073741824&&(r.flags|=128,l=!0,Ct(n,!1),r.lanes=4194304);n.isBackwards?(i.sibling=r.child,r.child=i):(t=n.last,t!==null?t.sibling=i:r.child=i,n.last=i)}return n.tail!==null?(r=n.tail,n.rendering=r,n.tail=r.sibling,n.renderingStartTime=Q(),r.sibling=null,t=_.current,W(_,l?t&1|2:t&1),r):(ne(r),null);case 22:case 23:return Yi(),l=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(r.flags|=8192),l&&r.mode&1?be&1073741824&&(ne(r),r.subtreeFlags&6&&(r.flags|=8192)):ne(r),null;case 24:return null;case 25:return null}throw Error(w(156,r.tag))}function q2(e,r){switch(Mi(r),r.tag){case 1:return fe(r.type)&&Yl(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return ct(),R(pe),R(ue),Fi(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Oi(r),null;case 13:if(R(_),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(w(340));dt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return R(_),null;case 4:return ct(),null;case 10:return ji(r.type._context),null;case 22:case 23:return Yi(),null;case 24:return null;default:return null}}var Dl=!1,ie=!1,x2=typeof WeakSet=="function"?WeakSet:Set,A=null;function Gr(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(l){V(e,r,l)}else t.current=null}function Es(e,r,t){try{t()}catch(l){V(e,r,l)}}var oo=!1;function A2(e,r){if(jn=$l,e=Id(),Pi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var a=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{t.nodeType,n.nodeType}catch{t=null;break e}var i=0,u=-1,o=-1,d=0,m=0,p=e,f=null;r:for(;;){for(var b;p!==t||a!==0&&p.nodeType!==3||(u=i+a),p!==n||l!==0&&p.nodeType!==3||(o=i+l),p.nodeType===3&&(i+=p.nodeValue.length),(b=p.firstChild)!==null;)f=p,p=b;for(;;){if(p===e)break r;if(f===t&&++d===a&&(u=i),f===n&&++m===l&&(o=i),(b=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=b}t=u===-1||o===-1?null:{start:u,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Rn={focusedElem:e,selectionRange:t},$l=!1,A=r;A!==null;)if(r=A,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,A=e;else for(;A!==null;){r=A;try{var k=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var v=k.memoizedProps,q=k.memoizedState,U=r.stateNode,s=U.getSnapshotBeforeUpdate(r.elementType===r.type?v:Pe(r.type,v),q);U.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var h=r.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(g){V(r,r.return,g)}if(e=r.sibling,e!==null){e.return=r.return,A=e;break}A=r.return}return k=oo,oo=!1,k}function Tt(e,r,t){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var a=l=l.next;do{if((a.tag&e)===e){var n=a.destroy;a.destroy=void 0,n!==void 0&&Es(r,t,n)}a=a.next}while(a!==l)}}function Aa(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var l=t.create;t.destroy=l()}t=t.next}while(t!==r)}}function ei(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Ps(e){var r=e.alternate;r!==null&&(e.alternate=null,Ps(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Te],delete r[Gt],delete r[On],delete r[u2],delete r[o2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ls(e){return e.tag===5||e.tag===3||e.tag===4}function so(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ls(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ri(e,r,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Gl));else if(l!==4&&(e=e.child,e!==null))for(ri(e,r,t),e=e.sibling;e!==null;)ri(e,r,t),e=e.sibling}function ti(e,r,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(ti(e,r,t),e=e.sibling;e!==null;)ti(e,r,t),e=e.sibling}var re=null,Le=!1;function er(e,r,t){for(t=t.child;t!==null;)Ms(e,r,t),t=t.sibling}function Ms(e,r,t){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(ba,t)}catch{}switch(t.tag){case 5:ie||Gr(t,r);case 6:var l=re,a=Le;re=null,er(e,r,t),re=l,Le=a,re!==null&&(Le?(e=re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):re.removeChild(t.stateNode));break;case 18:re!==null&&(Le?(e=re,t=t.stateNode,e.nodeType===8?tn(e.parentNode,t):e.nodeType===1&&tn(e,t),Ht(e)):tn(re,t.stateNode));break;case 4:l=re,a=Le,re=t.stateNode.containerInfo,Le=!0,er(e,r,t),re=l,Le=a;break;case 0:case 11:case 14:case 15:if(!ie&&(l=t.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){a=l=l.next;do{var n=a,i=n.destroy;n=n.tag,i!==void 0&&(n&2||n&4)&&Es(t,r,i),a=a.next}while(a!==l)}er(e,r,t);break;case 1:if(!ie&&(Gr(t,r),l=t.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=t.memoizedProps,l.state=t.memoizedState,l.componentWillUnmount()}catch(u){V(t,r,u)}er(e,r,t);break;case 21:er(e,r,t);break;case 22:t.mode&1?(ie=(l=ie)||t.memoizedState!==null,er(e,r,t),ie=l):er(e,r,t);break;default:er(e,r,t)}}function co(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new x2),r.forEach(function(l){var a=I2.bind(null,e,l);t.has(l)||(t.add(l),l.then(a,a))})}}function Ee(e,r){var t=r.deletions;if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];try{var n=e,i=r,u=i;e:for(;u!==null;){switch(u.tag){case 5:re=u.stateNode,Le=!1;break e;case 3:re=u.stateNode.containerInfo,Le=!0;break e;case 4:re=u.stateNode.containerInfo,Le=!0;break e}u=u.return}if(re===null)throw Error(w(160));Ms(n,i,a),re=null,Le=!1;var o=a.alternate;o!==null&&(o.return=null),a.return=null}catch(d){V(a,r,d)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Is(r,e),r=r.sibling}function Is(e,r){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ee(r,e),je(e),l&4){try{Tt(3,e,e.return),Aa(3,e)}catch(v){V(e,e.return,v)}try{Tt(5,e,e.return)}catch(v){V(e,e.return,v)}}break;case 1:Ee(r,e),je(e),l&512&&t!==null&&Gr(t,t.return);break;case 5:if(Ee(r,e),je(e),l&512&&t!==null&&Gr(t,t.return),e.flags&32){var a=e.stateNode;try{Vt(a,"")}catch(v){V(e,e.return,v)}}if(l&4&&(a=e.stateNode,a!=null)){var n=e.memoizedProps,i=t!==null?t.memoizedProps:n,u=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{u==="input"&&n.type==="radio"&&n.name!=null&&rd(a,n),Cn(u,i);var d=Cn(u,n);for(i=0;i<o.length;i+=2){var m=o[i],p=o[i+1];m==="style"?id(a,p):m==="dangerouslySetInnerHTML"?ad(a,p):m==="children"?Vt(a,p):gi(a,m,p,d)}switch(u){case"input":yn(a,n);break;case"textarea":td(a,n);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!n.multiple;var b=n.value;b!=null?et(a,!!n.multiple,b,!1):f!==!!n.multiple&&(n.defaultValue!=null?et(a,!!n.multiple,n.defaultValue,!0):et(a,!!n.multiple,n.multiple?[]:"",!1))}a[Gt]=n}catch(v){V(e,e.return,v)}}break;case 6:if(Ee(r,e),je(e),l&4){if(e.stateNode===null)throw Error(w(162));a=e.stateNode,n=e.memoizedProps;try{a.nodeValue=n}catch(v){V(e,e.return,v)}}break;case 3:if(Ee(r,e),je(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Ht(r.containerInfo)}catch(v){V(e,e.return,v)}break;case 4:Ee(r,e),je(e);break;case 13:Ee(r,e),je(e),a=e.child,a.flags&8192&&(n=a.memoizedState!==null,a.stateNode.isHidden=n,!n||a.alternate!==null&&a.alternate.memoizedState!==null||(Ji=Q())),l&4&&co(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(ie=(d=ie)||m,Ee(r,e),ie=d):Ee(r,e),je(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(A=e,m=e.child;m!==null;){for(p=A=m;A!==null;){switch(f=A,b=f.child,f.tag){case 0:case 11:case 14:case 15:Tt(4,f,f.return);break;case 1:Gr(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){l=f,t=f.return;try{r=l,k.props=r.memoizedProps,k.state=r.memoizedState,k.componentWillUnmount()}catch(v){V(l,t,v)}}break;case 5:Gr(f,f.return);break;case 22:if(f.memoizedState!==null){ho(p);continue}}b!==null?(b.return=f,A=b):ho(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{a=p.stateNode,d?(n=a.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"):(u=p.stateNode,o=p.memoizedProps.style,i=o!=null&&o.hasOwnProperty("display")?o.display:null,u.style.display=nd("display",i))}catch(v){V(e,e.return,v)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(v){V(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ee(r,e),je(e),l&4&&co(e);break;case 21:break;default:Ee(r,e),je(e)}}function je(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(Ls(t)){var l=t;break e}t=t.return}throw Error(w(160))}switch(l.tag){case 5:var a=l.stateNode;l.flags&32&&(Vt(a,""),l.flags&=-33);var n=so(e);ti(e,n,a);break;case 3:case 4:var i=l.stateNode.containerInfo,u=so(e);ri(e,u,i);break;default:throw Error(w(161))}}catch(o){V(e,e.return,o)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function S2(e,r,t){A=e,zs(e)}function zs(e,r,t){for(var l=(e.mode&1)!==0;A!==null;){var a=A,n=a.child;if(a.tag===22&&l){var i=a.memoizedState!==null||Dl;if(!i){var u=a.alternate,o=u!==null&&u.memoizedState!==null||ie;u=Dl;var d=ie;if(Dl=i,(ie=o)&&!d)for(A=a;A!==null;)i=A,o=i.child,i.tag===22&&i.memoizedState!==null?po(a):o!==null?(o.return=i,A=o):po(a);for(;n!==null;)A=n,zs(n),n=n.sibling;A=a,Dl=u,ie=d}Uo(e)}else a.subtreeFlags&8772&&n!==null?(n.return=a,A=n):Uo(e)}}function Uo(e){for(;A!==null;){var r=A;if(r.flags&8772){var t=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:ie||Aa(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!ie)if(t===null)l.componentDidMount();else{var a=r.elementType===r.type?t.memoizedProps:Pe(r.type,t.memoizedProps);l.componentDidUpdate(a,t.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var n=r.updateQueue;n!==null&&$u(r,n,l);break;case 3:var i=r.updateQueue;if(i!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}$u(r,i,t)}break;case 5:var u=r.stateNode;if(t===null&&r.flags&4){t=u;var o=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var d=r.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Ht(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ie||r.flags&512&&ei(r)}catch(f){V(r,r.return,f)}}if(r===e){A=null;break}if(t=r.sibling,t!==null){t.return=r.return,A=t;break}A=r.return}}function ho(e){for(;A!==null;){var r=A;if(r===e){A=null;break}var t=r.sibling;if(t!==null){t.return=r.return,A=t;break}A=r.return}}function po(e){for(;A!==null;){var r=A;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{Aa(4,r)}catch(o){V(r,t,o)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var a=r.return;try{l.componentDidMount()}catch(o){V(r,a,o)}}var n=r.return;try{ei(r)}catch(o){V(r,n,o)}break;case 5:var i=r.return;try{ei(r)}catch(o){V(r,i,o)}}}catch(o){V(r,r.return,o)}if(r===e){A=null;break}var u=r.sibling;if(u!==null){u.return=r.return,A=u;break}A=r.return}}var C2=Math.ceil,da=Ge.ReactCurrentDispatcher,$i=Ge.ReactCurrentOwner,Se=Ge.ReactCurrentBatchConfig,I=0,ee=null,H=null,te=0,be=0,Yr=wr(0),J=0,al=null,zr=0,Sa=0,Zi=0,_t=null,Ue=null,Ji=0,ht=1/0,Ve=null,sa=!1,li=null,pr=null,El=!1,ur=null,ca=0,Ot=0,ai=null,Ol=-1,Fl=0;function de(){return I&6?Q():Ol!==-1?Ol:Ol=Q()}function fr(e){return e.mode&1?I&2&&te!==0?te&-te:s2.transition!==null?(Fl===0&&(Fl=gd()),Fl):(e=z,e!==0||(e=window.event,e=e===void 0?16:Ad(e.type)),e):1}function ze(e,r,t,l){if(50<Ot)throw Ot=0,ai=null,Error(w(185));ol(e,t,l),(!(I&2)||e!==ee)&&(e===ee&&(!(I&2)&&(Sa|=t),J===4&&nr(e,te)),me(e,l),t===1&&I===0&&!(r.mode&1)&&(ht=Q()+500,ya&&yr()))}function me(e,r){var t=e.callbackNode;s0(e,r);var l=Kl(e,e===ee?te:0);if(l===0)t!==null&&yu(t),e.callbackNode=null,e.callbackPriority=0;else if(r=l&-l,e.callbackPriority!==r){if(t!=null&&yu(t),r===1)e.tag===0?d2(fo.bind(null,e)):Bd(fo.bind(null,e)),n2(function(){!(I&6)&&yr()}),t=null;else{switch(kd(l)){case 1:t=qi;break;case 4:t=md;break;case 16:t=Hl;break;case 536870912:t=bd;break;default:t=Hl}t=Vs(t,Ws.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Ws(e,r){if(Ol=-1,Fl=0,I&6)throw Error(w(327));var t=e.callbackNode;if(nt()&&e.callbackNode!==t)return null;var l=Kl(e,e===ee?te:0);if(l===0)return null;if(l&30||l&e.expiredLanes||r)r=Ua(e,l);else{r=l;var a=I;I|=2;var n=Rs();(ee!==e||te!==r)&&(Ve=null,ht=Q()+500,Er(e,r));do try{E2();break}catch(u){js(e,u)}while(!0);Wi(),da.current=n,I=a,H!==null?r=0:(ee=null,te=0,r=J)}if(r!==0){if(r===2&&(a=Ln(e),a!==0&&(l=a,r=ni(e,a))),r===1)throw t=al,Er(e,0),nr(e,l),me(e,Q()),t;if(r===6)nr(e,l);else{if(a=e.current.alternate,!(l&30)&&!N2(a)&&(r=Ua(e,l),r===2&&(n=Ln(e),n!==0&&(l=n,r=ni(e,n))),r===1))throw t=al,Er(e,0),nr(e,l),me(e,Q()),t;switch(e.finishedWork=a,e.finishedLanes=l,r){case 0:case 1:throw Error(w(345));case 2:Sr(e,Ue,Ve);break;case 3:if(nr(e,l),(l&130023424)===l&&(r=Ji+500-Q(),10<r)){if(Kl(e,0)!==0)break;if(a=e.suspendedLanes,(a&l)!==l){de(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=_n(Sr.bind(null,e,Ue,Ve),r);break}Sr(e,Ue,Ve);break;case 4:if(nr(e,l),(l&4194240)===l)break;for(r=e.eventTimes,a=-1;0<l;){var i=31-Ie(l);n=1<<i,i=r[i],i>a&&(a=i),l&=~n}if(l=a,l=Q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*C2(l/1960))-l,10<l){e.timeoutHandle=_n(Sr.bind(null,e,Ue,Ve),l);break}Sr(e,Ue,Ve);break;case 5:Sr(e,Ue,Ve);break;default:throw Error(w(329))}}}return me(e,Q()),e.callbackNode===t?Ws.bind(null,e):null}function ni(e,r){var t=_t;return e.current.memoizedState.isDehydrated&&(Er(e,r).flags|=256),e=Ua(e,r),e!==2&&(r=Ue,Ue=t,r!==null&&ii(r)),e}function ii(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function N2(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var l=0;l<t.length;l++){var a=t[l],n=a.getSnapshot;a=a.value;try{if(!We(n(),a))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function nr(e,r){for(r&=~Zi,r&=~Sa,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Ie(r),l=1<<t;e[t]=-1,r&=~l}}function fo(e){if(I&6)throw Error(w(327));nt();var r=Kl(e,0);if(!(r&1))return me(e,Q()),null;var t=Ua(e,r);if(e.tag!==0&&t===2){var l=Ln(e);l!==0&&(r=l,t=ni(e,l))}if(t===1)throw t=al,Er(e,0),nr(e,r),me(e,Q()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Sr(e,Ue,Ve),me(e,Q()),null}function Gi(e,r){var t=I;I|=1;try{return e(r)}finally{I=t,I===0&&(ht=Q()+500,ya&&yr())}}function Wr(e){ur!==null&&ur.tag===0&&!(I&6)&&nt();var r=I;I|=1;var t=Se.transition,l=z;try{if(Se.transition=null,z=1,e)return e()}finally{z=l,Se.transition=t,I=r,!(I&6)&&yr()}}function Yi(){be=Yr.current,R(Yr)}function Er(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,a2(t)),H!==null)for(t=H.return;t!==null;){var l=t;switch(Mi(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Yl();break;case 3:ct(),R(pe),R(ue),Fi();break;case 5:Oi(l);break;case 4:ct();break;case 13:R(_);break;case 19:R(_);break;case 10:ji(l.type._context);break;case 22:case 23:Yi()}t=t.return}if(ee=e,H=e=mr(e.current,null),te=be=r,J=0,al=null,Zi=Sa=zr=0,Ue=_t=null,Nr!==null){for(r=0;r<Nr.length;r++)if(t=Nr[r],l=t.interleaved,l!==null){t.interleaved=null;var a=l.next,n=t.pending;if(n!==null){var i=n.next;n.next=a,l.next=i}t.pending=l}Nr=null}return e}function js(e,r){do{var t=H;try{if(Wi(),Rl.current=oa,ua){for(var l=O.memoizedState;l!==null;){var a=l.queue;a!==null&&(a.pending=null),l=l.next}ua=!1}if(Ir=0,Y=$=O=null,Rt=!1,rl=0,$i.current=null,t===null||t.return===null){J=1,al=r,H=null;break}e:{var n=e,i=t.return,u=t,o=r;if(r=te,u.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=o,m=u,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var b=ro(i);if(b!==null){b.flags&=-257,to(b,i,u,n,r),b.mode&1&&eo(n,d,r),r=b,o=d;var k=r.updateQueue;if(k===null){var v=new Set;v.add(o),r.updateQueue=v}else k.add(o);break e}else{if(!(r&1)){eo(n,d,r),eu();break e}o=Error(w(426))}}else if(T&&u.mode&1){var q=ro(i);if(q!==null){!(q.flags&65536)&&(q.flags|=256),to(q,i,u,n,r),Ii(Ut(o,u));break e}}n=o=Ut(o,u),J!==4&&(J=2),_t===null?_t=[n]:_t.push(n),n=i;do{switch(n.tag){case 3:n.flags|=65536,r&=-r,n.lanes|=r;var U=ks(n,o,r);Ku(n,U);break e;case 1:u=o;var s=n.type,h=n.stateNode;if(!(n.flags&128)&&(typeof s.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(pr===null||!pr.has(h)))){n.flags|=65536,r&=-r,n.lanes|=r;var g=vs(n,u,r);Ku(n,g);break e}}n=n.return}while(n!==null)}_s(t)}catch(x){r=x,H===t&&t!==null&&(H=t=t.return);continue}break}while(!0)}function Rs(){var e=da.current;return da.current=oa,e===null?oa:e}function eu(){(J===0||J===3||J===2)&&(J=4),ee===null||!(zr&268435455)&&!(Sa&268435455)||nr(ee,te)}function Ua(e,r){var t=I;I|=2;var l=Rs();(ee!==e||te!==r)&&(Ve=null,Er(e,r));do try{D2();break}catch(a){js(e,a)}while(!0);if(Wi(),I=t,da.current=l,H!==null)throw Error(w(261));return ee=null,te=0,J}function D2(){for(;H!==null;)Ts(H)}function E2(){for(;H!==null&&!r0();)Ts(H)}function Ts(e){var r=Fs(e.alternate,e,be);e.memoizedProps=e.pendingProps,r===null?_s(e):H=r,$i.current=null}function _s(e){var r=e;do{var t=r.alternate;if(e=r.return,r.flags&32768){if(t=q2(t,r),t!==null){t.flags&=32767,H=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,H=null;return}}else if(t=y2(t,r,be),t!==null){H=t;return}if(r=r.sibling,r!==null){H=r;return}H=r=e}while(r!==null);J===0&&(J=5)}function Sr(e,r,t){var l=z,a=Se.transition;try{Se.transition=null,z=1,P2(e,r,t,l)}finally{Se.transition=a,z=l}return null}function P2(e,r,t,l){do nt();while(ur!==null);if(I&6)throw Error(w(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var n=t.lanes|t.childLanes;if(c0(e,n),e===ee&&(H=ee=null,te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||El||(El=!0,Vs(Hl,function(){return nt(),null})),n=(t.flags&15990)!==0,t.subtreeFlags&15990||n){n=Se.transition,Se.transition=null;var i=z;z=1;var u=I;I|=4,$i.current=null,A2(e,t),Is(t,e),J0(Rn),$l=!!jn,Rn=jn=null,e.current=t,S2(t),t0(),I=u,z=i,Se.transition=n}else e.current=t;if(El&&(El=!1,ur=e,ca=a),n=e.pendingLanes,n===0&&(pr=null),n0(t.stateNode),me(e,Q()),r!==null)for(l=e.onRecoverableError,t=0;t<r.length;t++)a=r[t],l(a.value,{componentStack:a.stack,digest:a.digest});if(sa)throw sa=!1,e=li,li=null,e;return ca&1&&e.tag!==0&&nt(),n=e.pendingLanes,n&1?e===ai?Ot++:(Ot=0,ai=e):Ot=0,yr(),null}function nt(){if(ur!==null){var e=kd(ca),r=Se.transition,t=z;try{if(Se.transition=null,z=16>e?16:e,ur===null)var l=!1;else{if(e=ur,ur=null,ca=0,I&6)throw Error(w(331));var a=I;for(I|=4,A=e.current;A!==null;){var n=A,i=n.child;if(A.flags&16){var u=n.deletions;if(u!==null){for(var o=0;o<u.length;o++){var d=u[o];for(A=d;A!==null;){var m=A;switch(m.tag){case 0:case 11:case 15:Tt(8,m,n)}var p=m.child;if(p!==null)p.return=m,A=p;else for(;A!==null;){m=A;var f=m.sibling,b=m.return;if(Ps(m),m===d){A=null;break}if(f!==null){f.return=b,A=f;break}A=b}}}var k=n.alternate;if(k!==null){var v=k.child;if(v!==null){k.child=null;do{var q=v.sibling;v.sibling=null,v=q}while(v!==null)}}A=n}}if(n.subtreeFlags&2064&&i!==null)i.return=n,A=i;else e:for(;A!==null;){if(n=A,n.flags&2048)switch(n.tag){case 0:case 11:case 15:Tt(9,n,n.return)}var U=n.sibling;if(U!==null){U.return=n.return,A=U;break e}A=n.return}}var s=e.current;for(A=s;A!==null;){i=A;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,A=h;else e:for(i=s;A!==null;){if(u=A,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Aa(9,u)}}catch(x){V(u,u.return,x)}if(u===i){A=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,A=g;break e}A=u.return}}if(I=a,yr(),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(ba,e)}catch{}l=!0}return l}finally{z=t,Se.transition=r}}return!1}function mo(e,r,t){r=Ut(t,r),r=ks(e,r,1),e=hr(e,r,1),r=de(),e!==null&&(ol(e,1,r),me(e,r))}function V(e,r,t){if(e.tag===3)mo(e,e,t);else for(;r!==null;){if(r.tag===3){mo(r,e,t);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pr===null||!pr.has(l))){e=Ut(t,e),e=vs(r,e,1),r=hr(r,e,1),e=de(),r!==null&&(ol(r,1,e),me(r,e));break}}r=r.return}}function L2(e,r,t){var l=e.pingCache;l!==null&&l.delete(r),r=de(),e.pingedLanes|=e.suspendedLanes&t,ee===e&&(te&t)===t&&(J===4||J===3&&(te&130023424)===te&&500>Q()-Ji?Er(e,0):Zi|=t),me(e,r)}function Os(e,r){r===0&&(e.mode&1?(r=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):r=1);var t=de();e=Ze(e,r),e!==null&&(ol(e,r,t),me(e,t))}function M2(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Os(e,t)}function I2(e,r){var t=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(w(314))}l!==null&&l.delete(r),Os(e,t)}var Fs;Fs=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||pe.current)he=!0;else{if(!(e.lanes&t)&&!(r.flags&128))return he=!1,w2(e,r,t);he=!!(e.flags&131072)}else he=!1,T&&r.flags&1048576&&Xd(r,ta,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;_l(e,r),e=r.pendingProps;var a=ot(r,ue.current);at(r,t),a=Bi(null,r,l,e,a,t);var n=Xi();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,fe(l)?(n=!0,ea(r)):n=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ti(r),a.updater=xa,r.stateNode=a,a._reactInternals=r,Hn(r,l,e,t),r=Zn(null,r,l,!0,n,t)):(r.tag=0,T&&n&&Li(r),oe(null,r,a,t),r=r.child),r;case 16:l=r.elementType;e:{switch(_l(e,r),e=r.pendingProps,a=l._init,l=a(l._payload),r.type=l,a=r.tag=W2(l),e=Pe(l,e),a){case 0:r=$n(null,r,l,e,t);break e;case 1:r=no(null,r,l,e,t);break e;case 11:r=lo(null,r,l,e,t);break e;case 14:r=ao(null,r,l,Pe(l.type,e),t);break e}throw Error(w(306,l,""))}return r;case 0:return l=r.type,a=r.pendingProps,a=r.elementType===l?a:Pe(l,a),$n(e,r,l,a,t);case 1:return l=r.type,a=r.pendingProps,a=r.elementType===l?a:Pe(l,a),no(e,r,l,a,t);case 3:e:{if(xs(r),e===null)throw Error(w(387));l=r.pendingProps,n=r.memoizedState,a=n.element,Jd(e,r),na(r,l,null,t);var i=r.memoizedState;if(l=i.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},r.updateQueue.baseState=n,r.memoizedState=n,r.flags&256){a=Ut(Error(w(423)),r),r=io(e,r,l,t,a);break e}else if(l!==a){a=Ut(Error(w(424)),r),r=io(e,r,l,t,a);break e}else for(ge=Ur(r.stateNode.containerInfo.firstChild),ke=r,T=!0,Me=null,t=$d(r,null,l,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(dt(),l===a){r=Je(e,r,t);break e}oe(e,r,l,t)}r=r.child}return r;case 5:return Gd(r),e===null&&Bn(r),l=r.type,a=r.pendingProps,n=e!==null?e.memoizedProps:null,i=a.children,Tn(l,a)?i=null:n!==null&&Tn(l,n)&&(r.flags|=32),qs(e,r),oe(e,r,i,t),r.child;case 6:return e===null&&Bn(r),null;case 13:return As(e,r,t);case 4:return _i(r,r.stateNode.containerInfo),l=r.pendingProps,e===null?r.child=st(r,null,l,t):oe(e,r,l,t),r.child;case 11:return l=r.type,a=r.pendingProps,a=r.elementType===l?a:Pe(l,a),lo(e,r,l,a,t);case 7:return oe(e,r,r.pendingProps,t),r.child;case 8:return oe(e,r,r.pendingProps.children,t),r.child;case 12:return oe(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(l=r.type._context,a=r.pendingProps,n=r.memoizedProps,i=a.value,W(la,l._currentValue),l._currentValue=i,n!==null)if(We(n.value,i)){if(n.children===a.children&&!pe.current){r=Je(e,r,t);break e}}else for(n=r.child,n!==null&&(n.return=r);n!==null;){var u=n.dependencies;if(u!==null){i=n.child;for(var o=u.firstContext;o!==null;){if(o.context===l){if(n.tag===1){o=He(-1,t&-t),o.tag=2;var d=n.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?o.next=o:(o.next=m.next,m.next=o),d.pending=o}}n.lanes|=t,o=n.alternate,o!==null&&(o.lanes|=t),Xn(n.return,t,r),u.lanes|=t;break}o=o.next}}else if(n.tag===10)i=n.type===r.type?null:n.child;else if(n.tag===18){if(i=n.return,i===null)throw Error(w(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Xn(i,t,r),i=n.sibling}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===r){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}oe(e,r,a.children,t),r=r.child}return r;case 9:return a=r.type,l=r.pendingProps.children,at(r,t),a=Ce(a),l=l(a),r.flags|=1,oe(e,r,l,t),r.child;case 14:return l=r.type,a=Pe(l,r.pendingProps),a=Pe(l.type,a),ao(e,r,l,a,t);case 15:return ws(e,r,r.type,r.pendingProps,t);case 17:return l=r.type,a=r.pendingProps,a=r.elementType===l?a:Pe(l,a),_l(e,r),r.tag=1,fe(l)?(e=!0,ea(r)):e=!1,at(r,t),gs(r,l,a),Hn(r,l,a,t),Zn(null,r,l,!0,e,t);case 19:return Ss(e,r,t);case 22:return ys(e,r,t)}throw Error(w(156,r.tag))};function Vs(e,r){return fd(e,r)}function z2(e,r,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,r,t,l){return new z2(e,r,t,l)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function W2(e){if(typeof e=="function")return ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vi)return 11;if(e===wi)return 14}return 2}function mr(e,r){var t=e.alternate;return t===null?(t=Ae(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Vl(e,r,t,l,a,n){var i=2;if(l=e,typeof e=="function")ru(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Vr:return Pr(t.children,a,n,r);case ki:i=8,a|=8;break;case bn:return e=Ae(12,t,r,a|2),e.elementType=bn,e.lanes=n,e;case gn:return e=Ae(13,t,r,a),e.elementType=gn,e.lanes=n,e;case kn:return e=Ae(19,t,r,a),e.elementType=kn,e.lanes=n,e;case Go:return Ca(t,a,n,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zo:i=10;break e;case Jo:i=9;break e;case vi:i=11;break e;case wi:i=14;break e;case tr:i=16,l=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return r=Ae(i,t,r,a),r.elementType=e,r.type=l,r.lanes=n,r}function Pr(e,r,t,l){return e=Ae(7,e,l,r),e.lanes=t,e}function Ca(e,r,t,l){return e=Ae(22,e,l,r),e.elementType=Go,e.lanes=t,e.stateNode={isHidden:!1},e}function cn(e,r,t){return e=Ae(6,e,null,r),e.lanes=t,e}function Un(e,r,t){return r=Ae(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function j2(e,r,t,l,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xa(0),this.expirationTimes=Xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xa(0),this.identifierPrefix=l,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function tu(e,r,t,l,a,n,i,u,o){return e=new j2(e,r,t,u,o),r===1?(r=1,n===!0&&(r|=8)):r=0,n=Ae(3,null,null,r),e.current=n,n.stateNode=e,n.memoizedState={element:l,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ti(n),e}function R2(e,r,t){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:l==null?null:""+l,children:e,containerInfo:r,implementation:t}}function Bs(e){if(!e)return kr;e=e._reactInternals;e:{if(Rr(e)!==e||e.tag!==1)throw Error(w(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(fe(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(fe(t))return Vd(e,t,r)}return r}function Xs(e,r,t,l,a,n,i,u,o){return e=tu(t,l,!0,e,a,n,i,u,o),e.context=Bs(null),t=e.current,l=de(),a=fr(t),n=He(l,a),n.callback=r??null,hr(t,n,a),e.current.lanes=a,ol(e,a,l),me(e,l),e}function Na(e,r,t,l){var a=r.current,n=de(),i=fr(a);return t=Bs(t),r.context===null?r.context=t:r.pendingContext=t,r=He(n,i),r.payload={element:e},l=l===void 0?null:l,l!==null&&(r.callback=l),e=hr(a,r,i),e!==null&&(ze(e,a,i,n),jl(e,a,i)),i}function ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bo(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function lu(e,r){bo(e,r),(e=e.alternate)&&bo(e,r)}function T2(){return null}var Qs=typeof reportError=="function"?reportError:function(e){console.error(e)};function au(e){this._internalRoot=e}Da.prototype.render=au.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(w(409));Na(e,r,null,null)};Da.prototype.unmount=au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Wr(function(){Na(null,e,null,null)}),r[$e]=null}};function Da(e){this._internalRoot=e}Da.prototype.unstable_scheduleHydration=function(e){if(e){var r=yd();e={blockedOn:null,target:e,priority:r};for(var t=0;t<ar.length&&r!==0&&r<ar[t].priority;t++);ar.splice(t,0,e),t===0&&xd(e)}};function nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function go(){}function _2(e,r,t,l,a){if(a){if(typeof l=="function"){var n=l;l=function(){var d=ha(i);n.call(d)}}var i=Xs(r,l,e,0,null,!1,!1,"",go);return e._reactRootContainer=i,e[$e]=i.current,Zt(e.nodeType===8?e.parentNode:e),Wr(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof l=="function"){var u=l;l=function(){var d=ha(o);u.call(d)}}var o=tu(e,0,!1,null,null,!1,!1,"",go);return e._reactRootContainer=o,e[$e]=o.current,Zt(e.nodeType===8?e.parentNode:e),Wr(function(){Na(r,o,t,l)}),o}function Pa(e,r,t,l,a){var n=t._reactRootContainer;if(n){var i=n;if(typeof a=="function"){var u=a;a=function(){var o=ha(i);u.call(o)}}Na(r,i,e,a)}else i=_2(t,r,e,a,l);return ha(i)}vd=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=Pt(r.pendingLanes);t!==0&&(xi(r,t|1),me(r,Q()),!(I&6)&&(ht=Q()+500,yr()))}break;case 13:Wr(function(){var l=Ze(e,1);if(l!==null){var a=de();ze(l,e,1,a)}}),lu(e,1)}};Ai=function(e){if(e.tag===13){var r=Ze(e,134217728);if(r!==null){var t=de();ze(r,e,134217728,t)}lu(e,134217728)}};wd=function(e){if(e.tag===13){var r=fr(e),t=Ze(e,r);if(t!==null){var l=de();ze(t,e,r,l)}lu(e,r)}};yd=function(){return z};qd=function(e,r){var t=z;try{return z=e,r()}finally{z=t}};Dn=function(e,r,t){switch(r){case"input":if(yn(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var l=t[r];if(l!==e&&l.form===e.form){var a=wa(l);if(!a)throw Error(w(90));ed(l),yn(l,a)}}}break;case"textarea":td(e,t);break;case"select":r=t.value,r!=null&&et(e,!!t.multiple,r,!1)}};dd=Gi;sd=Wr;var O2={usingClientEntryPoint:!1,Events:[sl,Hr,wa,ud,od,Gi]},Nt={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F2={bundleType:Nt.bundleType,version:Nt.version,rendererPackageName:Nt.rendererPackageName,rendererConfig:Nt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hd(e),e===null?null:e.stateNode},findFiberByHostInstance:Nt.findFiberByHostInstance||T2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{ba=Pl.inject(F2),_e=Pl}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O2;we.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nu(r))throw Error(w(200));return R2(e,r,null,t)};we.createRoot=function(e,r){if(!nu(e))throw Error(w(299));var t=!1,l="",a=Qs;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=tu(e,1,!1,null,null,t,!1,l,a),e[$e]=r.current,Zt(e.nodeType===8?e.parentNode:e),new au(r)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=hd(r),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Wr(e)};we.hydrate=function(e,r,t){if(!Ea(r))throw Error(w(200));return Pa(null,e,r,!0,t)};we.hydrateRoot=function(e,r,t){if(!nu(e))throw Error(w(405));var l=t!=null&&t.hydratedSources||null,a=!1,n="",i=Qs;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),r=Xs(r,null,e,1,t??null,a,!1,n,i),e[$e]=r.current,Zt(e),l)for(e=0;e<l.length;e++)t=l[e],a=t._getVersion,a=a(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,a]:r.mutableSourceEagerHydrationData.push(t,a);return new Da(r)};we.render=function(e,r,t){if(!Ea(r))throw Error(w(200));return Pa(null,e,r,!1,t)};we.unmountComponentAtNode=function(e){if(!Ea(e))throw Error(w(40));return e._reactRootContainer?(Wr(function(){Pa(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};we.unstable_batchedUpdates=Gi;we.unstable_renderSubtreeIntoContainer=function(e,r,t,l){if(!Ea(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Pa(e,r,t,!1,l)};we.version="18.3.1-next-f1338f8080-20240426";function Hs(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hs)}catch(e){console.error(e)}}Hs(),Qo.exports=we;var V2=Qo.exports,ko=V2;fn.createRoot=ko.createRoot,fn.hydrateRoot=ko.hydrateRoot;/**
* @remix-run/router v1.23.3
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function nl(){return nl=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)({}).hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},nl.apply(null,arguments)}var or;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(or||(or={}));const vo="popstate";function B2(e){e===void 0&&(e={});function r(a,n){let{pathname:i="/",search:u="",hash:o=""}=Tr(a.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),ui("",{pathname:i,search:u,hash:o},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function t(a,n){let i=a.document.querySelector("base"),u="";if(i&&i.getAttribute("href")){let o=a.location.href,d=o.indexOf("#");u=d===-1?o:o.slice(0,d)}return u+"#"+(typeof n=="string"?n:pa(n))}function l(a,n){La(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(n)+")")}return Q2(r,t,l,e)}function K(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function La(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function X2(){return Math.random().toString(36).substr(2,8)}function wo(e,r){return{usr:e.state,key:e.key,idx:r}}function ui(e,r,t,l){return t===void 0&&(t=null),nl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?Tr(r):r,{state:t,key:r&&r.key||l||X2()})}function pa(e){let{pathname:r="/",search:t="",hash:l=""}=e;return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),l&&l!=="#"&&(r+=l.charAt(0)==="#"?l:"#"+l),r}function Tr(e){let r={};if(e){let t=e.indexOf("#");t>=0&&(r.hash=e.substr(t),e=e.substr(0,t));let l=e.indexOf("?");l>=0&&(r.search=e.substr(l),e=e.substr(0,l)),e&&(r.pathname=e)}return r}function Q2(e,r,t,l){l===void 0&&(l={});let{window:a=document.defaultView,v5Compat:n=!1}=l,i=a.history,u=or.Pop,o=null,d=m();d==null&&(d=0,i.replaceState(nl({},i.state,{idx:d}),""));function m(){return(i.state||{idx:null}).idx}function p(){u=or.Pop;let q=m(),U=q==null?null:q-d;d=q,o&&o({action:u,location:v.location,delta:U})}function f(q,U){u=or.Push;let s=ui(v.location,q,U);t&&t(s,q),d=m()+1;let h=wo(s,d),g=v.createHref(s);try{i.pushState(h,"",g)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;a.location.assign(g)}n&&o&&o({action:u,location:v.location,delta:1})}function b(q,U){u=or.Replace;let s=ui(v.location,q,U);t&&t(s,q),d=m();let h=wo(s,d),g=v.createHref(s);i.replaceState(h,"",g),n&&o&&o({action:u,location:v.location,delta:0})}function k(q){let U=a.location.origin!=="null"?a.location.origin:a.location.href,s=typeof q=="string"?q:pa(q);return s=s.replace(/ $/,"%20"),K(U,"No window.location.(origin|href) available to create URL for href: "+s),new URL(s,U)}let v={get action(){return u},get location(){return e(a,i)},listen(q){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(vo,p),o=q,()=>{a.removeEventListener(vo,p),o=null}},createHref(q){return r(a,q)},createURL:k,encodeLocation(q){let U=k(q);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:f,replace:b,go(q){return i.go(q)}};return v}var yo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(yo||(yo={}));function H2(e,r,t){return t===void 0&&(t="/"),K2(e,r,t)}function K2(e,r,t,l){let a=typeof r=="string"?Tr(r):r,n=iu(a.pathname||"/",t);if(n==null)return null;let i=Ks(e);$2(i);let u=null,o=uU(n);for(let d=0;u==null&&d<i.length;++d)u=aU(i[d],o);return u}function Ks(e,r,t,l){r===void 0&&(r=[]),t===void 0&&(t=[]),l===void 0&&(l="");let a=(n,i,u)=>{let o={relativePath:u===void 0?n.path||"":u,caseSensitive:n.caseSensitive===!0,childrenIndex:i,route:n};o.relativePath.startsWith("/")&&(K(o.relativePath.startsWith(l),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(l.length));let d=br([l,o.relativePath]),m=t.concat(o);n.children&&n.children.length>0&&(K(n.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Ks(n.children,r,m,d)),!(n.path==null&&!n.index)&&r.push({path:d,score:tU(d,n.index),routesMeta:m})};return e.forEach((n,i)=>{var u;if(n.path===""||!((u=n.path)!=null&&u.includes("?")))a(n,i);else for(let o of $s(n.path))a(n,i,o)}),r}function $s(e){let r=e.split("/");if(r.length===0)return[];let[t,...l]=r,a=t.endsWith("?"),n=t.replace(/\?$/,"");if(l.length===0)return a?[n,""]:[n];let i=$s(l.join("/")),u=[];return u.push(...i.map(o=>o===""?n:[n,o].join("/"))),a&&u.push(...i),u.map(o=>e.startsWith("/")&&o===""?"/":o)}function $2(e){e.sort((r,t)=>r.score!==t.score?t.score-r.score:lU(r.routesMeta.map(l=>l.childrenIndex),t.routesMeta.map(l=>l.childrenIndex)))}const Z2=/^:[\w-]+$/,J2=3,G2=2,Y2=1,eU=10,rU=-2,qo=e=>e==="*";function tU(e,r){let t=e.split("/"),l=t.length;return t.some(qo)&&(l+=rU),r&&(l+=G2),t.filter(a=>!qo(a)).reduce((a,n)=>a+(Z2.test(n)?J2:n===""?Y2:eU),l)}function lU(e,r){return e.length===r.length&&e.slice(0,-1).every((t,l)=>t===r[l])?e[e.length-1]-r[r.length-1]:0}function aU(e,r,t){let{routesMeta:l}=e,a={},n="/",i=[];for(let u=0;u<l.length;++u){let o=l[u],d=u===l.length-1,m=n==="/"?r:r.slice(n.length)||"/",p=nU({path:o.relativePath,caseSensitive:o.caseSensitive,end:d},m),f=o.route;if(!p)return null;Object.assign(a,p.params),i.push({params:a,pathname:br([n,p.pathname]),pathnameBase:UU(br([n,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(n=br([n,p.pathnameBase]))}return i}function nU(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,l]=iU(e.path,e.caseSensitive,e.end),a=r.match(t);if(!a)return null;let n=a[0],i=n.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:l.reduce((o,d,m)=>{let{paramName:p,isOptional:f}=d;if(p==="*"){let k=u[m]||"";i=n.slice(0,n.length-k.length).replace(/(.)\/+$/,"$1")}const b=u[m];return f&&!b?o[p]=void 0:o[p]=(b||"").replace(/%2F/g,"/"),o},{}),pathname:n,pathnameBase:i,pattern:e}}function iU(e,r,t){r===void 0&&(r=!1),t===void 0&&(t=!0),La(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let l=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(n,i,u)=>(l.push({paramName:i,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(l.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,r?void 0:"i"),l]}function uU(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return La(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),e}}function iu(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let t=r.endsWith("/")?r.length-1:r.length,l=e.charAt(t);return l&&l!=="/"?null:e.slice(t)||"/"}const oU=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dU=e=>oU.test(e);function sU(e,r){r===void 0&&(r="/");let{pathname:t,search:l="",hash:a=""}=typeof e=="string"?Tr(e):e,n;if(t)if(dU(t))n=t;else{if(t.includes("//")){let i=t;t=Gs(t),La(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+t))}t.startsWith("/")?n=xo(t.substring(1),"/"):n=xo(t,r)}else n=r;return{pathname:n,search:hU(l),hash:pU(a)}}function xo(e,r){let t=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function hn(e,r,t,l){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cU(e){return e.filter((r,t)=>t===0||r.route.path&&r.route.path.length>0)}function Zs(e,r){let t=cU(e);return r?t.map((l,a)=>a===t.length-1?l.pathname:l.pathnameBase):t.map(l=>l.pathnameBase)}function Js(e,r,t,l){l===void 0&&(l=!1);let a;typeof e=="string"?a=Tr(e):(a=nl({},e),K(!a.pathname||!a.pathname.includes("?"),hn("?","pathname","search",a)),K(!a.pathname||!a.pathname.includes("#"),hn("#","pathname","hash",a)),K(!a.search||!a.search.includes("#"),hn("#","search","hash",a)));let n=e===""||a.pathname==="",i=n?"/":a.pathname,u;if(i==null)u=t;else{let p=r.length-1;if(!l&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),p-=1;a.pathname=f.join("/")}u=p>=0?r[p]:"/"}let o=sU(a,u),d=i&&i!=="/"&&i.endsWith("/"),m=(n||i===".")&&t.endsWith("/");return!o.pathname.endsWith("/")&&(d||m)&&(o.pathname+="/"),o}const Gs=e=>e.replace(/\/\/+/g,"/"),br=e=>Gs(e.join("/")),UU=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hU=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pU=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fU(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ys=["post","put","patch","delete"];new Set(Ys);const mU=["get",...Ys];new Set(mU);/**
* React Router v6.30.4
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function il(){return il=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)({}).hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},il.apply(null,arguments)}const uu=y.createContext(null),bU=y.createContext(null),_r=y.createContext(null),Ma=y.createContext(null),Ye=y.createContext({outlet:null,matches:[],isDataRoute:!1}),ec=y.createContext(null);function gU(e,r){let{relative:t}=r===void 0?{}:r;Ul()||K(!1);let{basename:l,navigator:a}=y.useContext(_r),{hash:n,pathname:i,search:u}=tc(e,{relative:t}),o=i;return l!=="/"&&(o=i==="/"?l:br([l,i])),a.createHref({pathname:o,search:u,hash:n})}function Ul(){return y.useContext(Ma)!=null}function gt(){return Ul()||K(!1),y.useContext(Ma).location}function rc(e){y.useContext(_r).static||y.useLayoutEffect(e)}function Ia(){let{isDataRoute:e}=y.useContext(Ye);return e?MU():kU()}function kU(){Ul()||K(!1);let e=y.useContext(uu),{basename:r,future:t,navigator:l}=y.useContext(_r),{matches:a}=y.useContext(Ye),{pathname:n}=gt(),i=JSON.stringify(Zs(a,t.v7_relativeSplatPath)),u=y.useRef(!1);return rc(()=>{u.current=!0}),y.useCallback(function(o,d){if(d===void 0&&(d={}),!u.current)return;if(typeof o=="number"){l.go(o);return}let m=Js(o,JSON.parse(i),n,d.relative==="path");e==null&&r!=="/"&&(m.pathname=m.pathname==="/"?r:br([r,m.pathname])),(d.replace?l.replace:l.push)(m,d.state,d)},[r,l,i,n,e])}const vU=y.createContext(null);function wU(e){let r=y.useContext(Ye).outlet;return r&&y.createElement(vU.Provider,{value:e},r)}function ou(){let{matches:e}=y.useContext(Ye),r=e[e.length-1];return r?r.params:{}}function tc(e,r){let{relative:t}=r===void 0?{}:r,{future:l}=y.useContext(_r),{matches:a}=y.useContext(Ye),{pathname:n}=gt(),i=JSON.stringify(Zs(a,l.v7_relativeSplatPath));return y.useMemo(()=>Js(e,JSON.parse(i),n,t==="path"),[e,i,n,t])}function yU(e,r){return qU(e,r)}function qU(e,r,t,l){Ul()||K(!1);let{navigator:a}=y.useContext(_r),{matches:n}=y.useContext(Ye),i=n[n.length-1],u=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let d=gt(),m;if(r){var p;let q=typeof r=="string"?Tr(r):r;o==="/"||(p=q.pathname)!=null&&p.startsWith(o)||K(!1),m=q}else m=d;let f=m.pathname||"/",b=f;if(o!=="/"){let q=o.replace(/^\//,"").split("/");b="/"+f.replace(/^\//,"").split("/").slice(q.length).join("/")}let k=H2(e,{pathname:b}),v=NU(k&&k.map(q=>Object.assign({},q,{params:Object.assign({},u,q.params),pathname:br([o,a.encodeLocation?a.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?o:br([o,a.encodeLocation?a.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),n,t,l);return r&&v?y.createElement(Ma.Provider,{value:{location:il({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:or.Pop}},v):v}function xU(){let e=LU(),r=fU(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},r),t?y.createElement("pre",{style:l},t):null,null)}const AU=y.createElement(xU,null);class SU extends y.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){console.error("React Router caught the following error during render",r,t)}render(){return this.state.error!==void 0?y.createElement(Ye.Provider,{value:this.props.routeContext},y.createElement(ec.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CU(e){let{routeContext:r,match:t,children:l}=e,a=y.useContext(uu);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(Ye.Provider,{value:r},l)}function NU(e,r,t,l){var a;if(r===void 0&&(r=[]),t===void 0&&(t=null),l===void 0&&(l=null),e==null){var n;if(!t)return null;if(t.errors)e=t.matches;else if((n=l)!=null&&n.v7_partialHydration&&r.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,u=(a=t)==null?void 0:a.errors;if(u!=null){let m=i.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);m>=0||K(!1),i=i.slice(0,Math.min(i.length,m+1))}let o=!1,d=-1;if(t&&l&&l.v7_partialHydration)for(let m=0;m<i.length;m++){let p=i[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:f,errors:b}=t,k=p.route.loader&&f[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||k){o=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((m,p,f)=>{let b,k=!1,v=null,q=null;t&&(b=u&&p.route.id?u[p.route.id]:void 0,v=p.route.errorElement||AU,o&&(d<0&&f===0?(IU("route-fallback"),k=!0,q=null):d===f&&(k=!0,q=p.route.hydrateFallbackElement||null)));let U=r.concat(i.slice(0,f+1)),s=()=>{let h;return b?h=v:k?h=q:p.route.Component?h=y.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=m,y.createElement(CU,{match:p,routeContext:{outlet:m,matches:U,isDataRoute:t!=null},children:h})};return t&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?y.createElement(SU,{location:t.location,revalidation:t.revalidation,component:v,error:b,children:s(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):s()},null)}var lc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lc||{}),ac=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ac||{});function DU(e){let r=y.useContext(uu);return r||K(!1),r}function EU(e){let r=y.useContext(bU);return r||K(!1),r}function PU(e){let r=y.useContext(Ye);return r||K(!1),r}function nc(e){let r=PU(),t=r.matches[r.matches.length-1];return t.route.id||K(!1),t.route.id}function LU(){var e;let r=y.useContext(ec),t=EU(),l=nc();return r!==void 0?r:(e=t.errors)==null?void 0:e[l]}function MU(){let{router:e}=DU(lc.UseNavigateStable),r=nc(ac.UseNavigateStable),t=y.useRef(!1);return rc(()=>{t.current=!0}),y.useCallback(function(l,a){a===void 0&&(a={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,il({fromRouteId:r},a)))},[e,r])}const Ao={};function IU(e,r,t){Ao[e]||(Ao[e]=!0)}function zU(e,r){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function WU(e){return wU(e.context)}function rr(e){K(!1)}function jU(e){let{basename:r="/",children:t=null,location:l,navigationType:a=or.Pop,navigator:n,static:i=!1,future:u}=e;Ul()&&K(!1);let o=r.replace(/^\/*/,"/"),d=y.useMemo(()=>({basename:o,navigator:n,static:i,future:il({v7_relativeSplatPath:!1},u)}),[o,u,n,i]);typeof l=="string"&&(l=Tr(l));let{pathname:m="/",search:p="",hash:f="",state:b=null,key:k="default"}=l,v=y.useMemo(()=>{let q=iu(m,o);return q==null?null:{location:{pathname:q,search:p,hash:f,state:b,key:k},navigationType:a}},[o,m,p,f,b,k,a]);return v==null?null:y.createElement(_r.Provider,{value:d},y.createElement(Ma.Provider,{children:t,value:v}))}function RU(e){let{children:r,location:t}=e;return yU(oi(r),t)}new Promise(()=>{});function oi(e,r){r===void 0&&(r=[]);let t=[];return y.Children.forEach(e,(l,a)=>{if(!y.isValidElement(l))return;let n=[...r,a];if(l.type===y.Fragment){t.push.apply(t,oi(l.props.children,n));return}l.type!==rr&&K(!1),!l.props.index||!l.props.children||K(!1);let i={id:l.props.id||n.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(i.children=oi(l.props.children,n)),t.push(i)}),t}/**
* React Router DOM v6.30.4
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function di(){return di=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)({}).hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},di.apply(null,arguments)}function TU(e,r){if(e==null)return{};var t={};for(var l in e)if({}.hasOwnProperty.call(e,l)){if(r.indexOf(l)!==-1)continue;t[l]=e[l]}return t}function _U(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function OU(e,r){return e.button===0&&(!r||r==="_self")&&!_U(e)}function si(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((r,t)=>{let l=e[t];return r.concat(Array.isArray(l)?l.map(a=>[t,a]):[[t,l]])},[]))}function FU(e,r){let t=si(e);return r&&r.forEach((l,a)=>{t.has(a)||r.getAll(a).forEach(n=>{t.append(a,n)})}),t}const VU=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],BU="6";try{window.__reactRouterVersion=BU}catch{}const XU="startTransition",So=Lc[XU];function QU(e){let{basename:r,children:t,future:l,window:a}=e,n=y.useRef();n.current==null&&(n.current=B2({window:a,v5Compat:!0}));let i=n.current,[u,o]=y.useState({action:i.action,location:i.location}),{v7_startTransition:d}=l||{},m=y.useCallback(p=>{d&&So?So(()=>o(p)):o(p)},[o,d]);return y.useLayoutEffect(()=>i.listen(m),[i,m]),y.useEffect(()=>zU(l),[l]),y.createElement(jU,{basename:r,children:t,location:u.location,navigationType:u.action,navigator:i,future:l})}const HU=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KU=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,it=y.forwardRef(function(e,r){let{onClick:t,relative:l,reloadDocument:a,replace:n,state:i,target:u,to:o,preventScrollReset:d,viewTransition:m}=e,p=TU(e,VU),{basename:f}=y.useContext(_r),b,k=!1;if(typeof o=="string"&&KU.test(o)&&(b=o,HU))try{let s=new URL(window.location.href),h=o.startsWith("//")?new URL(s.protocol+o):new URL(o),g=iu(h.pathname,f);h.origin===s.origin&&g!=null?o=g+h.search+h.hash:k=!0}catch{}let v=gU(o,{relative:l}),q=$U(o,{replace:n,state:i,target:u,preventScrollReset:d,relative:l,viewTransition:m});function U(s){t&&t(s),s.defaultPrevented||q(s)}return y.createElement("a",di({},p,{href:b||v,onClick:k||a?t:U,ref:r,target:u}))});var Co;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Co||(Co={}));var No;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(No||(No={}));function $U(e,r){let{target:t,replace:l,state:a,preventScrollReset:n,relative:i,viewTransition:u}=r===void 0?{}:r,o=Ia(),d=gt(),m=tc(e,{relative:i});return y.useCallback(p=>{if(OU(p,t)){p.preventDefault();let f=l!==void 0?l:pa(d)===pa(m);o(e,{replace:f,state:a,preventScrollReset:n,relative:i,viewTransition:u})}},[d,o,m,l,a,t,e,n,i,u])}function ZU(e){let r=y.useRef(si(e)),t=y.useRef(!1),l=gt(),a=y.useMemo(()=>FU(l.search,t.current?null:r.current),[l.search]),n=Ia(),i=y.useCallback((u,o)=>{const d=si(typeof u=="function"?u(a):u);t.current=!0,n("?"+d,o)},[n,a]);return[a,i]}/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/var JU={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const GU=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Fe=(e,r)=>{const t=y.forwardRef(({color:l="currentColor",size:a=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:u="",children:o,...d},m)=>y.createElement("svg",{ref:m,...JU,width:a,height:a,stroke:l,strokeWidth:i?Number(n)*24/Number(a):n,className:["lucide",`lucide-${GU(e)}`,u].join(" "),...d},[...r.map(([p,f])=>y.createElement(p,f)),...Array.isArray(o)?o:[o]]));return t.displayName=`${e}`,t};/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const YU=Fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ic=Fe("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const eh=Fe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rh=Fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uc=Fe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const th=Fe("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lh=Fe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const oc=Fe("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ah=Fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nh=Fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ih={},Do=e=>{let r;const t=new Set,l=(u,o)=>{const d=typeof u=="function"?u(r):u;if(!Object.is(d,r)){const m=r;r=o??(typeof d!="object"||d===null)?d:Object.assign({},r,d),t.forEach(p=>p(r,m))}},a=()=>r,n={setState:l,getState:a,getInitialState:()=>i,subscribe:u=>(t.add(u),()=>t.delete(u)),destroy:()=>{(ih?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},i=r=e(l,a,n);return n},uh=e=>e?Do(e):Do;var dc={exports:{}},sc={},cc={exports:{}},Uc={};/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var pt=y;function oh(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var dh=typeof Object.is=="function"?Object.is:oh,sh=pt.useState,ch=pt.useEffect,Uh=pt.useLayoutEffect,hh=pt.useDebugValue;function ph(e,r){var t=r(),l=sh({inst:{value:t,getSnapshot:r}}),a=l[0].inst,n=l[1];return Uh(function(){a.value=t,a.getSnapshot=r,pn(a)&&n({inst:a})},[e,t,r]),ch(function(){return pn(a)&&n({inst:a}),e(function(){pn(a)&&n({inst:a})})},[e]),hh(t),t}function pn(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!dh(e,t)}catch{return!0}}function fh(e,r){return r()}var mh=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?fh:ph;Uc.useSyncExternalStore=pt.useSyncExternalStore!==void 0?pt.useSyncExternalStore:mh;cc.exports=Uc;var bh=cc.exports;/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var za=y,gh=bh;function kh(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var vh=typeof Object.is=="function"?Object.is:kh,wh=gh.useSyncExternalStore,yh=za.useRef,qh=za.useEffect,xh=za.useMemo,Ah=za.useDebugValue;sc.useSyncExternalStoreWithSelector=function(e,r,t,l,a){var n=yh(null);if(n.current===null){var i={hasValue:!1,value:null};n.current=i}else i=n.current;n=xh(function(){function o(b){if(!d){if(d=!0,m=b,b=l(b),a!==void 0&&i.hasValue){var k=i.value;if(a(k,b))return p=k}return p=b}if(k=p,vh(m,b))return k;var v=l(b);return a!==void 0&&a(k,v)?(m=b,k):(m=b,p=v)}var d=!1,m,p,f=t===void 0?null:t;return[function(){return o(r())},f===null?void 0:function(){return o(f())}]},[r,t,l,a]);var u=wh(e,n[0],n[1]);return qh(function(){i.hasValue=!0,i.value=u},[u]),Ah(u),u};dc.exports=sc;var Sh=dc.exports;const Ch=Io(Sh),hc={},{useDebugValue:Nh}=fi,{useSyncExternalStoreWithSelector:Dh}=Ch;let Eo=!1;const Eh=e=>e;function Ph(e,r=Eh,t){(hc?"production":void 0)!=="production"&&t&&!Eo&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Eo=!0);const l=Dh(e.subscribe,e.getState,e.getServerState||e.getInitialState,r,t);return Nh(l),l}const Po=e=>{(hc?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const r=typeof e=="function"?uh(e):e,t=(l,a)=>Ph(r,l,a);return Object.assign(t,r),t},Lh=e=>e?Po(e):Po,Mh=[{slug:"engineering",name:"工程设计与仿真",icon:"Cpu",description:"CAD、CAE、EDA等工程设计软件",count:59},{slug:"office",name:"办公与文档",icon:"Briefcase",description:"Office、PDF、笔记等办公软件",count:23},{slug:"dev-tools",name:"编程开发",icon:"Code",description:"IDE、数据库、编程语言工具",count:17},{slug:"media",name:"图像媒体",icon:"Image",description:"图像处理、视频编辑、设计软件",count:24},{slug:"data-analysis",name:"数据分析",icon:"BarChart",description:"统计、数学、数据分析软件",count:17},{slug:"system-tools",name:"系统工具",icon:"Monitor",description:"虚拟机、系统修复、实用工具",count:10},{slug:"other",name:"其他软件",icon:"Package",description:"其他专业软件工具",count:10}],Ih=[{id:"1",title:"Abaqus",slug:"abaqus",description:"Abaqus，专业软件工具，绿色安全可靠。",content:`Abaqus 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/abaqus",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Abaqus 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1Pg6t7O92WeV6J7ERKgILpw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/071a3565053d",thunderUrl:""},{title:"Abaqus 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"2",title:"ABB RobotStudio",slug:"abb-robotstudio",description:"ABB RobotStudio，专业软件工具，绿色安全可靠。",content:`ABB RobotStudio 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/abb-robotstudio",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"ABB RobotStudio 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"3",title:"ACDSee",slug:"acdsee",description:"ACDSee，专业软件工具，绿色安全可靠。",content:`ACDSee 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/acdsee",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"ACDSee 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ACDSee 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ACDSee 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ACDSee 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ACDSee 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ACDSee 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ACDSee 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ACDSee 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ACDSee 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ACDSee 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"4",title:"Acrobat",slug:"acrobat",description:"Acrobat，专业软件工具，绿色安全可靠。",content:`Acrobat 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/acrobat",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Acrobat 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1vTBrCyIi38XfuAy5Jn830g?pwd=1314",quarkUrl:"https://pan.quark.cn/s/f88b6ba90007",thunderUrl:""},{title:"Acrobat 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"5",title:"Ae (After Effects)",slug:"after-effects",description:"Ae (After Effects)，专业软件工具，绿色安全可靠。",content:`Ae (After Effects) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/after-effects",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Ae (After Effects) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1PaVnVqU4xguYwsau1i2WRg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/754a69d73724",thunderUrl:"https://pan.xunlei.com/s/VOsiVhaIngL0ZKTJ74x596LuA1?pwd=3zrg"},{title:"Ae (After Effects) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ae (After Effects) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ae (After Effects) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ae (After Effects) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ae (After Effects) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ae (After Effects) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ae (After Effects) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ae (After Effects) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ae (After Effects) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"6",title:"Ai (Illustrator)",slug:"illustrator",description:"Ai (Illustrator)，专业软件工具，绿色安全可靠。",content:`Ai (Illustrator) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/illustrator",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Ai (Illustrator) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ai (Illustrator) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ai (Illustrator) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ai (Illustrator) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ai (Illustrator) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ai (Illustrator) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ai (Illustrator) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ai (Illustrator) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ai (Illustrator) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ai (Illustrator) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"7",title:"AD (Altium Designer)",slug:"altium-designer",description:"AD (Altium Designer)，专业软件工具，绿色安全可靠。",content:`AD (Altium Designer) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/altium-designer",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"AD (Altium Designer) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1y4WyJKLpwNDUCVDx6joFCA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/6353e3bc6d53",thunderUrl:""},{title:"AD (Altium Designer) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"8",title:"Adobe XD",slug:"adobe-xd",description:"Adobe XD，专业软件工具，绿色安全可靠。",content:`Adobe XD 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/adobe-xd",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Adobe XD 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Adobe XD 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Adobe XD 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Adobe XD 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Adobe XD 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Adobe XD 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Adobe XD 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Adobe XD 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Adobe XD 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Adobe XD 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"9",title:"AMOS",slug:"amos",description:"AMOS，专业软件工具，绿色安全可靠。",content:`AMOS 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/amos",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"AMOS 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AMOS 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AMOS 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AMOS 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AMOS 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AMOS 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AMOS 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AMOS 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AMOS 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AMOS 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"10",title:"An (Animate)",slug:"animate",description:"An (Animate)，专业软件工具，绿色安全可靠。",content:`An (Animate) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/animate",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"An (Animate) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"An (Animate) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"An (Animate) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"An (Animate) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"An (Animate) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"An (Animate) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"An (Animate) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"An (Animate) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"An (Animate) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"An (Animate) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"11",title:"Ansys",slug:"ansys",description:"Ansys，专业软件工具，绿色安全可靠。",content:`Ansys 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/ansys",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Ansys 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1hfi83FIfXcGAlbu1xYRSzw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/47fd2c37dc2c",thunderUrl:"https://pan.xunlei.com/s/VOu5BC1dLmwzCZDg8QgDGSp4A1?pwd=cq3v"},{title:"Ansys 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"12",title:"ArcGis",slug:"arcgis",description:"ArcGis，专业软件工具，绿色安全可靠。",content:`ArcGis 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/arcgis",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"ArcGIS 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"13",title:"Au (Audition)",slug:"audition",description:"Au (Audition)，专业软件工具，绿色安全可靠。",content:`Au (Audition) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/audition",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Au (Audition) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1Vm2PmTkRkXtEcBhlvSsESA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/899f68dd47e8",thunderUrl:"https://pan.xunlei.com/s/VOs-01czsP_Q3KIvinAFNFYBA1?pwd=8v5p"},{title:"Au (Audition) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Au (Audition) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Au (Audition) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Au (Audition) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Au (Audition) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Au (Audition) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Au (Audition) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Au (Audition) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Au (Audition) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"14",title:"AutoCAD",slug:"autocad",description:"AutoCAD，专业软件工具，绿色安全可靠。",content:`AutoCAD 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/autocad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"AutoCAD 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"15",title:"AutoCAD精简版",slug:"autocad",description:"AutoCAD精简版，专业软件工具，绿色安全可靠。",content:`AutoCAD精简版 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/autocad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"AutoCAD精简版 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD精简版 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD精简版 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD精简版 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD精简版 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD精简版 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD精简版 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD精简版 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD精简版 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD精简版 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"16",title:"AutoCAD机械版",slug:"autocad",description:"AutoCAD机械版，专业软件工具，绿色安全可靠。",content:`AutoCAD机械版 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/autocad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"AutoCAD机械版 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"17",title:"AutoCAD电气版",slug:"autocad",description:"AutoCAD电气版，专业软件工具，绿色安全可靠。",content:`AutoCAD电气版 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/autocad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"AutoCAD电气版 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"18",title:"Android Studio",slug:"android-studio",description:"Android Studio，专业软件工具，绿色安全可靠。",content:`Android Studio 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/android-studio",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Android Studio 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Android Studio 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Android Studio 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Android Studio 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Android Studio 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Android Studio 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Android Studio 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Android Studio 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Android Studio 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Android Studio 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"19",title:"Anaconda",slug:"anaconda",description:"Anaconda，专业软件工具，绿色安全可靠。",content:`Anaconda 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/anaconda",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Anaconda 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"20",title:"AxMath",slug:"axmath",description:"AxMath，专业软件工具，绿色安全可靠。",content:`AxMath 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/axmath",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"AxMath 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AxMath 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AxMath 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AxMath 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AxMath 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AxMath 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AxMath 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AxMath 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AxMath 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AxMath 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"21",title:"Axure",slug:"axure",description:"Axure，专业软件工具，绿色安全可靠。",content:`Axure 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/axure",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Axure 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Axure 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Axure 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Axure 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Axure 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Axure 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Axure 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Axure 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Axure 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Axure 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"22",title:"Altair PSIM",slug:"altair-psim",description:"Altair PSIM，专业软件工具，绿色安全可靠。",content:`Altair PSIM 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/altair-psim",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Altair PSIM 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Altair PSIM 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Altair PSIM 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Altair PSIM 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Altair PSIM 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Altair PSIM 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Altair PSIM 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Altair PSIM 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Altair PSIM 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Altair PSIM 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"23",title:"Avantage",slug:"avantage",description:"Avantage，专业软件工具，绿色安全可靠。",content:`Avantage 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/avantage",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Avantage 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Avantage 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Avantage 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Avantage 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Avantage 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Avantage 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Avantage 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Avantage 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Avantage 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Avantage 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"24",title:"Blender",slug:"blender",description:"Blender，专业软件工具，绿色安全可靠。",content:`Blender 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/blender",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Blender 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"25",title:"博途 (Botu)",slug:"botu",description:"博途 (Botu)，专业软件工具，绿色安全可靠。",content:`博途 (Botu) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/botu",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"博途 (Botu) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"博途 (Botu) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"博途 (Botu) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"博途 (Botu) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"博途 (Botu) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"博途 (Botu) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"博途 (Botu) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"博途 (Botu) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"博途 (Botu) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"博途 (Botu) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"26",title:"Br (Bridge)",slug:"bridge",description:"Br (Bridge)，专业软件工具，绿色安全可靠。",content:`Br (Bridge) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/bridge",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Br (Bridge) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Br (Bridge) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Br (Bridge) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Br (Bridge) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Br (Bridge) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Br (Bridge) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Br (Bridge) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Br (Bridge) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Br (Bridge) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Br (Bridge) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"27",title:"CAD (AutoCAD)",slug:"autocad",description:"CAD (AutoCAD)，专业软件工具，绿色安全可靠。",content:`CAD (AutoCAD) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/autocad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"CAD (AutoCAD) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD (AutoCAD) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD (AutoCAD) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD (AutoCAD) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD (AutoCAD) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD (AutoCAD) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD (AutoCAD) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD (AutoCAD) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD (AutoCAD) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD (AutoCAD) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"28",title:"C4D (Cinema 4D)",slug:"cinema-4d",description:"C4D (Cinema 4D)，专业软件工具，绿色安全可靠。",content:`C4D (Cinema 4D) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/cinema-4d",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"C4D (Cinema 4D) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1CITcwPvyWWqGIsNNetZHbA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/d2122320bb8f",thunderUrl:""},{title:"C4D (Cinema 4D) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"29",title:"CAD精简版",slug:"cad",description:"CAD精简版，专业软件工具，绿色安全可靠。",content:`CAD精简版 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/cad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"CAD精简版 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD精简版 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD精简版 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD精简版 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD精简版 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD精简版 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD精简版 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD精简版 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD精简版 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD精简版 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"30",title:"Creo",slug:"creo",description:"Creo，专业软件工具，绿色安全可靠。",content:`Creo 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/creo",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Creo 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"31",title:"CAD机械版",slug:"cad",description:"CAD机械版，专业软件工具，绿色安全可靠。",content:`CAD机械版 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/cad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"CAD机械版 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD机械版 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD机械版 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD机械版 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD机械版 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD机械版 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD机械版 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD机械版 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD机械版 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD机械版 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"32",title:"CAD电气版",slug:"cad",description:"CAD电气版，专业软件工具，绿色安全可靠。",content:`CAD电气版 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/cad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"CAD电气版 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD电气版 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD电气版 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD电气版 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD电气版 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD电气版 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD电气版 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD电气版 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD电气版 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAD电气版 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"33",title:"CAXA电子图板",slug:"caxa",description:"CAXA电子图板，专业软件工具，绿色安全可靠。",content:`CAXA电子图板 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/caxa",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"CAXA电子图板 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA电子图板 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA电子图板 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA电子图板 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA电子图板 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA电子图板 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA电子图板 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA电子图板 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA电子图板 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA电子图板 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"34",title:"CAXA工艺图表",slug:"caxa",description:"CAXA工艺图表，专业软件工具，绿色安全可靠。",content:`CAXA工艺图表 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/caxa",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"CAXA工艺图表 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA工艺图表 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA工艺图表 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA工艺图表 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA工艺图表 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA工艺图表 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA工艺图表 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA工艺图表 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA工艺图表 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA工艺图表 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"35",title:"CAXA实体设计",slug:"caxa",description:"CAXA实体设计，专业软件工具，绿色安全可靠。",content:`CAXA实体设计 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/caxa",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"CAXA实体设计 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA实体设计 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA实体设计 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA实体设计 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA实体设计 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA实体设计 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA实体设计 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA实体设计 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA实体设计 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA实体设计 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"36",title:"CAXA制造工程师",slug:"caxa",description:"CAXA制造工程师，专业软件工具，绿色安全可靠。",content:`CAXA制造工程师 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/caxa",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"CAXA制造工程师 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA制造工程师 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA制造工程师 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA制造工程师 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA制造工程师 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA制造工程师 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA制造工程师 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA制造工程师 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA制造工程师 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAXA制造工程师 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"37",title:"草图大师 (Sketchup)",slug:"sketchup",description:"草图大师 (Sketchup)，专业软件工具，绿色安全可靠。",content:`草图大师 (Sketchup) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/sketchup",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"草图大师 (Sketchup) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1mw7sacBbO1AwRqgmf51xrw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/97d4de0d4f3f",thunderUrl:""},{title:"草图大师 (Sketchup) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"草图大师 (Sketchup) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"草图大师 (Sketchup) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"草图大师 (Sketchup) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"草图大师 (Sketchup) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"草图大师 (Sketchup) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"草图大师 (Sketchup) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"草图大师 (Sketchup) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"草图大师 (Sketchup) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"38",title:"Cadence SPB",slug:"cadence-spb",description:"Cadence SPB，专业软件工具，绿色安全可靠。",content:`Cadence SPB 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/cadence-spb",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Cadence SPB 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"39",title:"COMSOL",slug:"comsol",description:"COMSOL，专业软件工具，绿色安全可靠。",content:`COMSOL 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/comsol",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"COMSOL 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1pnpjhRm8qRE9w5Qj-8fGaA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/d12df4158e8a",thunderUrl:""},{title:"COMSOL 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"40",title:"Capture One",slug:"capture-one",description:"Capture One，专业软件工具，绿色安全可靠。",content:`Capture One 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/capture-one",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Capture One 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Capture One 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Capture One 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Capture One 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Capture One 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Capture One 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Capture One 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Capture One 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Capture One 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Capture One 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"41",title:"CST Studio Suite",slug:"cst-studio-suite",description:"CST Studio Suite，专业软件工具，绿色安全可靠。",content:`CST Studio Suite 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/cst-studio-suite",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"CST Studio Suite 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CST Studio Suite 2025 下载链接",baiduUrl:"https://pan.baidu.com/s/1GotphSK42zBv_qHYdkBX0Q?pwd=1314",quarkUrl:"https://pan.quark.cn/s/0b3c7c05b3cf",thunderUrl:"https://pan.xunlei.com/s/VOuADceDme6GK54t4iOBWUT4A1?pwd=7hpf"},{title:"CST Studio Suite 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CST Studio Suite 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CST Studio Suite 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CST Studio Suite 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CST Studio Suite 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CST Studio Suite 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CST Studio Suite 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CST Studio Suite 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"42",title:"CATIA",slug:"catia",description:"CATIA，专业软件工具，绿色安全可靠。",content:`CATIA 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/catia",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"CATIA 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CATIA 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CATIA 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CATIA 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CATIA 2022 下载链接",baiduUrl:"https://pan.baidu.com/s/1PDphEOvgfuTQakhSKtKyIg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/cad2b7ddd58b",thunderUrl:"https://pan.xunlei.com/s/VOtvmQtV5Egmb2dyEAkb1JPYA1?pwd=eh3e"},{title:"CATIA 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CATIA 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CATIA 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CATIA 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CATIA 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"43",title:"CAJViewer",slug:"cajviewer",description:"CAJViewer，专业软件工具，绿色安全可靠。",content:`CAJViewer 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/cajviewer",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"CAJViewer 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAJViewer 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAJViewer 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAJViewer 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAJViewer 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAJViewer 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAJViewer 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAJViewer 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAJViewer 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CAJViewer 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"44",title:"Calculator",slug:"calculator",description:"Calculator，专业软件工具，绿色安全可靠。",content:`Calculator 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/calculator",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Calculator 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Calculator 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Calculator 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Calculator 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Calculator 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Calculator 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Calculator 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Calculator 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Calculator 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Calculator 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"45",title:"CapCut",slug:"capcut",description:"CapCut，专业软件工具，绿色安全可靠。",content:`CapCut 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/capcut",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"CapCut 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CapCut 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CapCut 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CapCut 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CapCut 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CapCut 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CapCut 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CapCut 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CapCut 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CapCut 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"46",title:"Cytoscape",slug:"cytoscape",description:"Cytoscape，专业软件工具，绿色安全可靠。",content:`Cytoscape 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/cytoscape",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Cytoscape 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cytoscape 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cytoscape 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cytoscape 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cytoscape 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cytoscape 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cytoscape 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cytoscape 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cytoscape 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cytoscape 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"47",title:"达芬奇 (DaVinci)",slug:"davinci",description:"达芬奇 (DaVinci)，专业软件工具，绿色安全可靠。",content:`达芬奇 (DaVinci) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/davinci",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"达芬奇 (DaVinci) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"达芬奇 (DaVinci) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"达芬奇 (DaVinci) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"达芬奇 (DaVinci) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"达芬奇 (DaVinci) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"达芬奇 (DaVinci) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"达芬奇 (DaVinci) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"达芬奇 (DaVinci) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"达芬奇 (DaVinci) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"达芬奇 (DaVinci) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"48",title:"DirectX Repair",slug:"directx-repair",description:"DirectX Repair，专业软件工具，绿色安全可靠。",content:`DirectX Repair 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"system-tools",categoryName:"系统工具",coverImage:"https://images.unsplash.com/photo-1517697560806-34d7897b7159?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/directx-repair",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"DirectX Repair 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DirectX Repair 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DirectX Repair 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DirectX Repair 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DirectX Repair 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DirectX Repair 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DirectX Repair 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DirectX Repair 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DirectX Repair 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DirectX Repair 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"49",title:"Design-Expert",slug:"design-expert",description:"Design-Expert，专业软件工具，绿色安全可靠。",content:`Design-Expert 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/design-expert",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Design-Expert 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Design-Expert 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Design-Expert 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Design-Expert 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Design-Expert 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Design-Expert 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Design-Expert 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Design-Expert 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Design-Expert 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Design-Expert 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"50",title:"DW (Dreamweaver)",slug:"dreamweaver",description:"DW (Dreamweaver)，专业软件工具，绿色安全可靠。",content:`DW (Dreamweaver) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/dreamweaver",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"DW (Dreamweaver) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DW (Dreamweaver) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DW (Dreamweaver) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DW (Dreamweaver) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DW (Dreamweaver) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DW (Dreamweaver) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DW (Dreamweaver) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DW (Dreamweaver) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DW (Dreamweaver) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"DW (Dreamweaver) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"51",title:"Eviews",slug:"eviews",description:"Eviews，专业软件工具，绿色安全可靠。",content:`Eviews 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/eviews",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Eviews 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eviews 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eviews 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eviews 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eviews 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eviews 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eviews 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eviews 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eviews 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eviews 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"52",title:"EdrawMax",slug:"edrawmax",description:"EdrawMax，专业软件工具，绿色安全可靠。",content:`EdrawMax 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/edrawmax",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"EdrawMax 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EdrawMax 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EdrawMax 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EdrawMax 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EdrawMax 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EdrawMax 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EdrawMax 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EdrawMax 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EdrawMax 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EdrawMax 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"53",title:"EPLAN",slug:"eplan",description:"EPLAN，专业软件工具，绿色安全可靠。",content:`EPLAN 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/eplan",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"EPLAN 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EPLAN 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EPLAN 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EPLAN 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EPLAN 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EPLAN 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EPLAN 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EPLAN 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EPLAN 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EPLAN 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"54",title:"EndNote",slug:"endnote",description:"EndNote，专业软件工具，绿色安全可靠。",content:`EndNote 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/endnote",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"EndNote 2025.3 下载链接",baiduUrl:"https://pan.baidu.com/s/1jW50Y1lVJig-eZs7yK0rRQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/fc26a12a089d",thunderUrl:""},{title:"EndNote X9 下载链接 ",baiduUrl:"https://pan.baidu.com/s/18ILn6Niv83USMpY6vKF0zA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/119e47bb390f",thunderUrl:"https://pan.xunlei.com/s/VOsZRKgOE13bpnGrFBCyEB3pA1?pwd=gv3k"},{title:"EndNote 2024 下载链接 ",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EndNote 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EndNote 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EndNote 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EndNote 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EndNote 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EndNote 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EndNote 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"55",title:"ENVI",slug:"envi",description:"ENVI，专业软件工具，绿色安全可靠。",content:`ENVI 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/envi",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"ENVI 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"56",title:"Everything",slug:"everything",description:"Everything，专业软件工具，绿色安全可靠。",content:`Everything 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"system-tools",categoryName:"系统工具",coverImage:"https://images.unsplash.com/photo-1517697560806-34d7897b7159?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/everything",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Everything 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Everything 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Everything 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Everything 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Everything 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Everything 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Everything 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Everything 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Everything 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Everything 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"57",title:"Eclipse",slug:"eclipse",description:"Eclipse，专业软件工具，绿色安全可靠。",content:`Eclipse 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/eclipse",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Eclipse 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eclipse 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eclipse 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eclipse 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eclipse 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eclipse 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eclipse 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eclipse 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eclipse 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Eclipse 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"58",title:"福昕PDF (Foxit PDF)",slug:"foxit-pdf",description:"福昕PDF (Foxit PDF)，专业软件工具，绿色安全可靠。",content:`福昕PDF (Foxit PDF) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/foxit-pdf",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"福昕PDF (Foxit PDF) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"福昕PDF (Foxit PDF) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"福昕PDF (Foxit PDF) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"福昕PDF (Foxit PDF) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"福昕PDF (Foxit PDF) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"福昕PDF (Foxit PDF) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"福昕PDF (Foxit PDF) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"福昕PDF (Foxit PDF) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"福昕PDF (Foxit PDF) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"福昕PDF (Foxit PDF) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"59",title:"FLAC3D",slug:"flac3d",description:"FLAC3D，专业软件工具，绿色安全可靠。",content:`FLAC3D 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/flac3d",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"FLAC3D 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"FLAC3D 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"FLAC3D 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"FLAC3D 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"FLAC3D 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"FLAC3D 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"FLAC3D 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"FLAC3D 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"FLAC3D 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"FLAC3D 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"60",title:"Factory IO",slug:"factory-io",description:"Factory IO，专业软件工具，绿色安全可靠。",content:`Factory IO 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/factory-io",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Factory IO 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Factory IO 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Factory IO 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Factory IO 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Factory IO 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Factory IO 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Factory IO 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Factory IO 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Factory IO 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Factory IO 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"61",title:"GX Works",slug:"gx-works",description:"GX Works，专业软件工具，绿色安全可靠。",content:`GX Works 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/gx-works",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"GX Works 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/19-ULQF_CjnAO9yer0FluOQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/0a87169523c2",thunderUrl:"https://pan.xunlei.com/s/VOsU-9E3hsGne907froJE9IMA1?pwd=u68x"},{title:"GX Works 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"62",title:"Gaussian",slug:"gaussian",description:"Gaussian，专业软件工具，绿色安全可靠。",content:`Gaussian 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/gaussian",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Gaussian 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Gaussian 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Gaussian 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Gaussian 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Gaussian 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Gaussian 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Gaussian 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Gaussian 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Gaussian 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Gaussian 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"63",title:"格式工厂",slug:"software-819095504",description:"格式工厂，专业软件工具，绿色安全可靠。",content:`格式工厂 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/software-819095504",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"格式工厂 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"格式工厂 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"格式工厂 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"格式工厂 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"格式工厂 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"格式工厂 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"格式工厂 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"格式工厂 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"格式工厂 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"格式工厂 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"64",title:"光影魔术手",slug:"software-1490347256",description:"光影魔术手，专业软件工具，绿色安全可靠。",content:`光影魔术手 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/software-1490347256",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"光影魔术手 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"光影魔术手 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"光影魔术手 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"光影魔术手 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"光影魔术手 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"光影魔术手 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"光影魔术手 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"光影魔术手 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"光影魔术手 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"光影魔术手 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"65",title:"浩辰CAD (Haochen CAD)",slug:"haochen-cad",description:"浩辰CAD (Haochen CAD)，专业软件工具，绿色安全可靠。",content:`浩辰CAD (Haochen CAD) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/haochen-cad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"浩辰CAD (Haochen CAD) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"浩辰CAD (Haochen CAD) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"浩辰CAD (Haochen CAD) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"浩辰CAD (Haochen CAD) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"浩辰CAD (Haochen CAD) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"浩辰CAD (Haochen CAD) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"浩辰CAD (Haochen CAD) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"浩辰CAD (Haochen CAD) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"浩辰CAD (Haochen CAD) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"浩辰CAD (Haochen CAD) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"66",title:"HyperWorks",slug:"hyperworks",description:"HyperWorks，专业软件工具，绿色安全可靠。",content:`HyperWorks 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/hyperworks",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"HyperWorks 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"67",title:"HBuilderX",slug:"hbuilderx",description:"HBuilderX，专业软件工具，绿色安全可靠。",content:`HBuilderX 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/hbuilderx",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"HBuilderX 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HBuilderX 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HBuilderX 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HBuilderX 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HBuilderX 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HBuilderX 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HBuilderX 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HBuilderX 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HBuilderX 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HBuilderX 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"68",title:"IntelliJ IDEA",slug:"intellij-idea",description:"IntelliJ IDEA，专业软件工具，绿色安全可靠。",content:`IntelliJ IDEA 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/intellij-idea",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"IntelliJ IDEA 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1MFfZEvPV9d2MO-gXYAmLfw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/8eafc614a500",thunderUrl:"https://pan.xunlei.com/s/VOtCMPIo7dCwmJOH5SZ_TkMaA1?pwd=jn3n"},{title:"IntelliJ IDEA 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"IntelliJ IDEA 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"IntelliJ IDEA 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"IntelliJ IDEA 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"IntelliJ IDEA 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"IntelliJ IDEA 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"IntelliJ IDEA 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"IntelliJ IDEA 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"IntelliJ IDEA 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"69",title:"Inventor",slug:"inventor",description:"Inventor，专业软件工具，绿色安全可靠。",content:`Inventor 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/inventor",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Inventor 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Inventor 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Inventor 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Inventor 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Inventor 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Inventor 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Inventor 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Inventor 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Inventor 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Inventor 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"70",title:"InnoSetup",slug:"innosetup",description:"InnoSetup，专业软件工具，绿色安全可靠。",content:`InnoSetup 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"system-tools",categoryName:"系统工具",coverImage:"https://images.unsplash.com/photo-1517697560806-34d7897b7159?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/innosetup",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"InnoSetup 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"InnoSetup 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"InnoSetup 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"InnoSetup 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"InnoSetup 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"InnoSetup 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"InnoSetup 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"InnoSetup 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"InnoSetup 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"InnoSetup 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"71",title:"剪映 (Jianying)",slug:"jianying",description:"剪映 (Jianying)，专业软件工具，绿色安全可靠。",content:`剪映 (Jianying) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/jianying",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"剪映 (Jianying) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映 (Jianying) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映 (Jianying) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映 (Jianying) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映 (Jianying) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映 (Jianying) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映 (Jianying) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映 (Jianying) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映 (Jianying) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映 (Jianying) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"72",title:"剪映国际版 (Jianying International)",slug:"jianying-international",description:"剪映国际版 (Jianying International)，专业软件工具，绿色安全可靠。",content:`剪映国际版 (Jianying International) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/jianying-international",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"剪映国际版 (Jianying International) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映国际版 (Jianying International) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映国际版 (Jianying International) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映国际版 (Jianying International) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映国际版 (Jianying International) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映国际版 (Jianying International) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映国际版 (Jianying International) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映国际版 (Jianying International) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映国际版 (Jianying International) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"剪映国际版 (Jianying International) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"73",title:"Keil5",slug:"keil5",description:"Keil5，专业软件工具，绿色安全可靠。",content:`Keil5 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/keil5",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Keil5 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keil5 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keil5 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keil5 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keil5 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keil5 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keil5 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keil5 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keil5 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keil5 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"74",title:"Keyshot",slug:"keyshot",description:"Keyshot，专业软件工具，绿色安全可靠。",content:`Keyshot 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/keyshot",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Keyshot 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1EOxDTe8TDI8RPhy606vhmA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/d8f1da290988",thunderUrl:""},{title:"Keyshot 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"75",title:"KingView",slug:"kingview",description:"KingView，专业软件工具，绿色安全可靠。",content:`KingView 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"system-tools",categoryName:"系统工具",coverImage:"https://images.unsplash.com/photo-1517697560806-34d7897b7159?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/kingview",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"KingView 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"KingView 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"KingView 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"KingView 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"KingView 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"KingView 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"KingView 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"KingView 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"KingView 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"KingView 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"76",title:"昆仑通态 (Kunlun Tongtai)",slug:"kunlun-tongtai",description:"昆仑通态 (Kunlun Tongtai)，专业软件工具，绿色安全可靠。",content:`昆仑通态 (Kunlun Tongtai) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/kunlun-tongtai",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"昆仑通态 (Kunlun Tongtai) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"昆仑通态 (Kunlun Tongtai) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"昆仑通态 (Kunlun Tongtai) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"昆仑通态 (Kunlun Tongtai) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"昆仑通态 (Kunlun Tongtai) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"昆仑通态 (Kunlun Tongtai) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"昆仑通态 (Kunlun Tongtai) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"昆仑通态 (Kunlun Tongtai) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"昆仑通态 (Kunlun Tongtai) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"昆仑通态 (Kunlun Tongtai) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"77",title:"LabVIEW",slug:"labview",description:"LabVIEW，专业软件工具，绿色安全可靠。",content:`LabVIEW 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/labview",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"LabVIEW 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"LabVIEW 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"LabVIEW 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"LabVIEW 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"LabVIEW 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"LabVIEW 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"LabVIEW 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"LabVIEW 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"LabVIEW 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"LabVIEW 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"78",title:"Latex",slug:"latex",description:"Latex，专业软件工具，绿色安全可靠。",content:`Latex 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/latex",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Latex 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2025 下载链接",baiduUrl:"https://pan.baidu.com/s/1k-1loHrLrB2eckBDeMfMQA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/7c854a2d11ee",thunderUrl:"https://pan.xunlei.com/s/VOrOSv85rOkwxvfLR1GQZSaqA1?pwd=wa4z"},{title:"Latex 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"79",title:"Lingo",slug:"lingo",description:"Lingo，专业软件工具，绿色安全可靠。",content:`Lingo 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/lingo",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Lingo 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lingo 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lingo 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lingo 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lingo 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lingo 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lingo 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lingo 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lingo 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lingo 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"80",title:"Lr (Lightroom)",slug:"lightroom",description:"Lr (Lightroom)，专业软件工具，绿色安全可靠。",content:`Lr (Lightroom) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/lightroom",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Lr (Lightroom) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1ReS4_A_4Bq-YSiSpcQbMfQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/8c8d82db2dc7",thunderUrl:"https://pan.xunlei.com/s/VOtX7n7apE5T3b8K4qTRN1EMA1?pwd=fi37"},{title:"Lr (Lightroom) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lr (Lightroom) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lr (Lightroom) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lr (Lightroom) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lr (Lightroom) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lr (Lightroom) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lr (Lightroom) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lr (Lightroom) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Lr (Lightroom) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"81",title:"Maya",slug:"maya",description:"Maya，专业软件工具，绿色安全可靠。",content:`Maya 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/maya",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Maya 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"82",title:"Mathematica",slug:"mathematica",description:"Mathematica，专业软件工具，绿色安全可靠。",content:`Mathematica 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mathematica",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Mathematica 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mathematica 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mathematica 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mathematica 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mathematica 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mathematica 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mathematica 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mathematica 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mathematica 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mathematica 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"83",title:"Matlab",slug:"matlab",description:"Matlab，专业软件工具，绿色安全可靠。",content:`Matlab 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/matlab",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Matlab 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/15A8RxgCePTBaghNbcIXa3Q?pwd=1314",quarkUrl:"https://pan.quark.cn/s/6f285a368b4e",thunderUrl:"https://pan.xunlei.com/s/VOsnf31fJ8pYUGU7_wp_ODO3A1?pwd=ds7r"},{title:"Matlab 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"84",title:"Maple",slug:"maple",description:"Maple，专业软件工具，绿色安全可靠。",content:`Maple 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/maple",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Maple 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1nJuPuB37RQ83HXxr2Ma5Rg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/1537aa694516",thunderUrl:"https://pan.xunlei.com/s/VOtb6hhBY0eJd2iAyQyV5ZSOA1?pwd=7zxv"},{title:"Maple 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"85",title:"Minitab",slug:"minitab",description:"Minitab，专业软件工具，绿色安全可靠。",content:`Minitab 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/minitab",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Minitab 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Minitab 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Minitab 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Minitab 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Minitab 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Minitab 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Minitab 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Minitab 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Minitab 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Minitab 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"86",title:"MySQL",slug:"mysql",description:"MySQL，专业软件工具，绿色安全可靠。",content:`MySQL 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mysql",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"MySQL 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MySQL 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MySQL 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MySQL 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MySQL 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MySQL 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MySQL 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MySQL 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MySQL 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MySQL 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"87",title:"Mcgs",slug:"mcgs",description:"Mcgs，专业软件工具，绿色安全可靠。",content:`Mcgs 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"system-tools",categoryName:"系统工具",coverImage:"https://images.unsplash.com/photo-1517697560806-34d7897b7159?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mcgs",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Mcgs 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mcgs 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mcgs 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mcgs 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mcgs 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mcgs 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mcgs 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mcgs 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mcgs 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mcgs 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"88",title:"Mastercam",slug:"mastercam",description:"Mastercam，专业软件工具，绿色安全可靠。",content:`Mastercam 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mastercam",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Mastercam 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mastercam 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mastercam 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mastercam 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mastercam 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mastercam 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mastercam 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mastercam 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mastercam 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mastercam 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"89",title:"Multisim",slug:"multisim",description:"Multisim，专业软件工具，绿色安全可靠。",content:`Multisim 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/multisim",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Multisim 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1aJOoTGij_dIwY2Y73wg4yA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/279788671d4f",thunderUrl:""},{title:"Multisim 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"90",title:"Midas Civil",slug:"midas-civil",description:"Midas Civil，专业软件工具，绿色安全可靠。",content:`Midas Civil 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/midas-civil",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Midas Civil 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Midas Civil 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Midas Civil 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Midas Civil 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Midas Civil 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Midas Civil 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Midas Civil 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Midas Civil 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Midas Civil 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Midas Civil 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"91",title:"Motorsolve",slug:"motorsolve",description:"Motorsolve，专业软件工具，绿色安全可靠。",content:`Motorsolve 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/motorsolve",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Motorsolve 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Motorsolve 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Motorsolve 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Motorsolve 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Motorsolve 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Motorsolve 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Motorsolve 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Motorsolve 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Motorsolve 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Motorsolve 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"92",title:"Mplus",slug:"mplus",description:"Mplus，专业软件工具，绿色安全可靠。",content:`Mplus 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mplus",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Mplus 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mplus 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mplus 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mplus 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mplus 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mplus 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mplus 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mplus 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mplus 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mplus 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"93",title:"MathCAD",slug:"mathcad",description:"MathCAD，专业软件工具，绿色安全可靠。",content:`MathCAD 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mathcad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"MathCAD 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MathCAD 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MathCAD 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MathCAD 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MathCAD 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MathCAD 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MathCAD 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MathCAD 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MathCAD 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MathCAD 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"94",title:"MedCalc",slug:"medcalc",description:"MedCalc，专业软件工具，绿色安全可靠。",content:`MedCalc 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/medcalc",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"MedCalc 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MedCalc 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MedCalc 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MedCalc 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MedCalc 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MedCalc 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MedCalc 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MedCalc 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MedCalc 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MedCalc 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"95",title:"MDI Jade",slug:"mdi-jade",description:"MDI Jade，专业软件工具，绿色安全可靠。",content:`MDI Jade 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mdi-jade",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"MDI Jade 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"96",title:"Mimics",slug:"mimics",description:"Mimics，专业软件工具，绿色安全可靠。",content:`Mimics 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mimics",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Mimics 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mimics 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mimics 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mimics 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mimics 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mimics 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mimics 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mimics 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mimics 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mimics 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"97",title:"Navicat Premium",slug:"navicat-premium",description:"Navicat Premium，专业软件工具，绿色安全可靠。",content:`Navicat Premium 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/navicat-premium",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Navicat Premium 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"98",title:"NX",slug:"nx",description:"NX，专业软件工具，绿色安全可靠。",content:`NX 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/nx",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"NX 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1dy2KkptTZZQrKfkhXDxStw",quarkUrl:"https://pan.quark.cn/s/236bfb335546",thunderUrl:"https://pan.xunlei.com/s/VOu-Um5PWY-mUxfQNR2jIBgsA1?pwd=5xkd"},{title:"NX 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NX 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NX 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NX 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NX 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NX 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NX 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NX 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NX 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"99",title:"NoteExpress",slug:"noteexpress",description:"NoteExpress，专业软件工具，绿色安全可靠。",content:`NoteExpress 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/noteexpress",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"NoteExpress 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NoteExpress 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NoteExpress 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NoteExpress 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NoteExpress 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NoteExpress 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NoteExpress 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NoteExpress 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NoteExpress 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NoteExpress 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"100",title:"Office",slug:"office",description:"Office，专业软件工具，绿色安全可靠。",content:`Office 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/office",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Office 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"101",title:"Origin",slug:"origin",description:"Origin，专业软件工具，绿色安全可靠。",content:`Origin 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/origin",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Origin 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1Vn7zgUcKEjavfHyr0BPvxg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/c4844e5fffca",thunderUrl:""},{title:"Origin 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"102",title:"Visio",slug:"visio",description:"Visio，专业软件工具，绿色安全可靠。",content:`Visio 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/visio",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Visio 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2024 下载链接",baiduUrl:"https://pan.baidu.com/s/1Ho_SpLHPX7f_Ajo0TIvgOg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/fe26587cd925",thunderUrl:"https://pan.xunlei.com/s/VOtg8aN850oqBXwt1WUGxpiwA1?pwd=95ur"},{title:"Visio 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"103",title:"Project",slug:"project",description:"Project，专业软件工具，绿色安全可靠。",content:`Project 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/project",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Project 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"104",title:"Pr (Premiere Pro)",slug:"premiere-pro",description:"Pr (Premiere Pro)，专业软件工具，绿色安全可靠。",content:`Pr (Premiere Pro) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/premiere-pro",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Pr (Premiere Pro) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1kPz79o79Qj_thHX7hhNKgg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/f397e3515109",thunderUrl:"https://pan.xunlei.com/s/VOsnd0kfVjLvguLoIPGYemoBA1?pwd=xxh5"},{title:"Pr (Premiere Pro) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pr (Premiere Pro) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pr (Premiere Pro) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pr (Premiere Pro) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pr (Premiere Pro) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pr (Premiere Pro) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pr (Premiere Pro) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pr (Premiere Pro) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pr (Premiere Pro) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"105",title:"PDF-XChange",slug:"pdf-xchange",description:"PDF-XChange，专业软件工具，绿色安全可靠。",content:`PDF-XChange 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/pdf-xchange",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"PDF-XChange 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PDF-XChange 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PDF-XChange 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PDF-XChange 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PDF-XChange 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PDF-XChange 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PDF-XChange 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PDF-XChange 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PDF-XChange 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PDF-XChange 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"106",title:"Phpstorm",slug:"phpstorm",description:"Phpstorm，专业软件工具，绿色安全可靠。",content:`Phpstorm 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/phpstorm",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Phpstorm 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Phpstorm 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Phpstorm 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Phpstorm 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Phpstorm 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Phpstorm 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Phpstorm 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Phpstorm 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Phpstorm 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Phpstorm 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"107",title:"Ps (Photoshop)",slug:"photoshop",description:"Ps (Photoshop)，专业软件工具，绿色安全可靠。",content:`Ps (Photoshop) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/photoshop",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Ps (Photoshop) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/15Vm4znN0KyqoDicg8cygAQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/a472cb154a20",thunderUrl:"https://pan.xunlei.com/s/VOruygVEw2l8ybgfGIygDJmZA1?pwd=fnt7"},{title:"Ps (Photoshop) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ps (Photoshop) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ps (Photoshop) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ps (Photoshop) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ps (Photoshop) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ps (Photoshop) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ps (Photoshop) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ps (Photoshop) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ps (Photoshop) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"108",title:"Project",slug:"project",description:"Project，专业软件工具，绿色安全可靠。",content:`Project 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/project",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Project 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Project 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"109",title:"Pycharm",slug:"pycharm",description:"Pycharm，专业软件工具，绿色安全可靠。",content:`Pycharm 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/pycharm",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Pycharm 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pycharm 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pycharm 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pycharm 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pycharm 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pycharm 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pycharm 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pycharm 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pycharm 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Pycharm 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"110",title:"Proe (Pro/Engineer)",slug:"pro-engineer",description:"Proe (Pro/Engineer)，专业软件工具，绿色安全可靠。",content:`Proe (Pro/Engineer) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/pro-engineer",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Proe (Pro/Engineer) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proe (Pro/Engineer) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proe (Pro/Engineer) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proe (Pro/Engineer) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proe (Pro/Engineer) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proe (Pro/Engineer) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proe (Pro/Engineer) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proe (Pro/Engineer) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proe (Pro/Engineer) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proe (Pro/Engineer) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"111",title:"Python",slug:"python",description:"Python，专业软件工具，绿色安全可靠。",content:`Python 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/python",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Python 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"112",title:"Proteus",slug:"proteus",description:"Proteus，专业软件工具，绿色安全可靠。",content:`Proteus 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/proteus",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Proteus 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1SHdeccEAp3PHIJtwYi3K-Q?pwd=1314",quarkUrl:"https://pan.quark.cn/s/6c881bbe4694",thunderUrl:""},{title:"Proteus 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"113",title:"PSIM",slug:"psim",description:"PSIM，专业软件工具，绿色安全可靠。",content:`PSIM 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/psim",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"PSIM 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PSIM 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PSIM 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PSIM 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PSIM 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PSIM 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PSIM 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PSIM 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PSIM 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"PSIM 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"114",title:"Quartus",slug:"quartus",description:"Quartus，专业软件工具，绿色安全可靠。",content:`Quartus 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/quartus",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Quartus 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Quartus 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Quartus 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Quartus 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Quartus 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Quartus 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Quartus 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Quartus 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Quartus 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Quartus 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"115",title:"Revit",slug:"revit",description:"Revit，专业软件工具，绿色安全可靠。",content:`Revit 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/revit",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Revit 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"116",title:"Rhinoceros",slug:"rhinoceros",description:"Rhinoceros，专业软件工具，绿色安全可靠。",content:`Rhinoceros 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/rhinoceros",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Rhinoceros 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"117",title:"RStudio",slug:"rstudio",description:"RStudio，专业软件工具，绿色安全可靠。",content:`RStudio 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/rstudio",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"RStudio 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2025 下载链接",baiduUrl:"https://pan.baidu.com/s/1HkkfqZK1w682_m8fKUKaGw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/edd581f296fc",thunderUrl:"https://pan.xunlei.com/s/VOrkmMMKOYiY56eikUqJ6TRsA1?pwd=gukh"},{title:"RStudio 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"118",title:"RobotStudio",slug:"robotstudio",description:"RobotStudio，专业软件工具，绿色安全可靠。",content:`RobotStudio 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/robotstudio",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"RobotStudio 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"119",title:"R语言",slug:"software-1224581",description:"R语言，专业软件工具，绿色安全可靠。",content:`R语言 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/software-1224581",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"R语言 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"120",title:"3ds Max",slug:"3ds-max",description:"3ds Max，专业软件工具，绿色安全可靠。",content:`3ds Max 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/3ds-max",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"3ds Max 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1ZzQ7rgGU9bYXmm6jENFVQw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/bb92bef05a8a",thunderUrl:""},{title:"3ds Max 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"121",title:"SketchUp",slug:"sketchup",description:"SketchUp，专业软件工具，绿色安全可靠。",content:`SketchUp 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/sketchup",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"SketchUp 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SketchUp 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SketchUp 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SketchUp 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SketchUp 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SketchUp 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SketchUp 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SketchUp 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SketchUp 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SketchUp 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"122",title:"Solid Edge",slug:"solid-edge",description:"Solid Edge，专业软件工具，绿色安全可靠。",content:`Solid Edge 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/solid-edge",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Solid Edge 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Solid Edge 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Solid Edge 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Solid Edge 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Solid Edge 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Solid Edge 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Solid Edge 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Solid Edge 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Solid Edge 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Solid Edge 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"123",title:"SQL Server",slug:"sql-server",description:"SQL Server，专业软件工具，绿色安全可靠。",content:`SQL Server 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/sql-server",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"SQL Server 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SQL Server 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SQL Server 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SQL Server 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SQL Server 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SQL Server 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SQL Server 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SQL Server 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SQL Server 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SQL Server 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"124",title:"Studio 5000",slug:"studio-5000",description:"Studio 5000，专业软件工具，绿色安全可靠。",content:`Studio 5000 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/studio-5000",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Studio 5000 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Studio 5000 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Studio 5000 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Studio 5000 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Studio 5000 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Studio 5000 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Studio 5000 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Studio 5000 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Studio 5000 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Studio 5000 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"125",title:"STEP7",slug:"step7",description:"STEP7，专业软件工具，绿色安全可靠。",content:`STEP7 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/step7",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"STEP7 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"126",title:"SW (SolidWorks)",slug:"solidworks",description:"SW (SolidWorks)，专业软件工具，绿色安全可靠。",content:`SW (SolidWorks) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/solidworks",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"SW (SolidWorks) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SW (SolidWorks) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SW (SolidWorks) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SW (SolidWorks) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SW (SolidWorks) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SW (SolidWorks) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SW (SolidWorks) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SW (SolidWorks) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SW (SolidWorks) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SW (SolidWorks) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"127",title:"SigmaPlot",slug:"sigmaplot",description:"SigmaPlot，专业软件工具，绿色安全可靠。",content:`SigmaPlot 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/sigmaplot",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"SigmaPlot 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SigmaPlot 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SigmaPlot 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SigmaPlot 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SigmaPlot 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SigmaPlot 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SigmaPlot 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SigmaPlot 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SigmaPlot 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SigmaPlot 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"128",title:"SecureCRT",slug:"securecrt",description:"SecureCRT，专业软件工具，绿色安全可靠。",content:`SecureCRT 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"system-tools",categoryName:"系统工具",coverImage:"https://images.unsplash.com/photo-1517697560806-34d7897b7159?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/securecrt",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"SecureCRT 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SecureCRT 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SecureCRT 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SecureCRT 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SecureCRT 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SecureCRT 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SecureCRT 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SecureCRT 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SecureCRT 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SecureCRT 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"129",title:"Tecplot",slug:"tecplot",description:"Tecplot，专业软件工具，绿色安全可靠。",content:`Tecplot 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/tecplot",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Tecplot 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Tecplot 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Tecplot 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Tecplot 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Tecplot 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Tecplot 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Tecplot 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Tecplot 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Tecplot 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Tecplot 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"130",title:"TIA Portal",slug:"tia-portal",description:"TIA Portal，专业软件工具，绿色安全可靠。",content:`TIA Portal 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/tia-portal",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"TIA Portal 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1Uu7DZqwV_Hn_c7op59d--A?pwd=1314",quarkUrl:"https://pan.quark.cn/s/1827004d95e3",thunderUrl:"https://pan.xunlei.com/s/VOrCnfXAXa4i9wv-zl6C__wEA1?pwd=uwav"},{title:"TIA Portal 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"TIA Portal 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"TIA Portal 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"TIA Portal 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"TIA Portal 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"TIA Portal 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"TIA Portal 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"TIA Portal 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"TIA Portal 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"131",title:"Typora",slug:"typora",description:"Typora，专业软件工具，绿色安全可靠。",content:`Typora 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/typora",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Typora 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"132",title:"天正系列 (Tianzheng Series)",slug:"tianzheng-series",description:"天正系列 (Tianzheng Series)，专业软件工具，绿色安全可靠。",content:`天正系列 (Tianzheng Series) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/tianzheng-series",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"天正系列 (Tianzheng Series) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"133",title:"UG NX",slug:"ug-nx",description:"UG NX，专业软件工具，绿色安全可靠。",content:`UG NX 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/ug-nx",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"UG NX 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"134",title:"VMware",slug:"vmware",description:"VMware，专业软件工具，绿色安全可靠。",content:`VMware 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"system-tools",categoryName:"系统工具",coverImage:"https://images.unsplash.com/photo-1517697560806-34d7897b7159?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/vmware",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"VMware 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"VMware 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"VMware 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"VMware 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"VMware 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"VMware 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"VMware 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"VMware 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"VMware 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"VMware 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"135",title:"Visio",slug:"visio",description:"Visio，专业软件工具，绿色安全可靠。",content:`Visio 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/visio",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Visio 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"136",title:"Vreicut",slug:"vreicut",description:"Vreicut，专业软件工具，绿色安全可靠。",content:`Vreicut 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/vreicut",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Vreicut 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Vreicut 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Vreicut 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Vreicut 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Vreicut 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Vreicut 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Vreicut 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Vreicut 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Vreicut 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Vreicut 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"137",title:"Visual Studio",slug:"visual-studio",description:"Visual Studio，专业软件工具，绿色安全可靠。",content:`Visual Studio 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/visual-studio",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Visual Studio 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"138",title:"Visual Studio Code",slug:"visual-studio-code",description:"Visual Studio Code，专业软件工具，绿色安全可靠。",content:`Visual Studio Code 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/visual-studio-code",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Visual Studio Code 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1o7sC7EKAsEo6qjtAZBHf_Q?pwd=1314",quarkUrl:"https://pan.quark.cn/s/cb6fcb2016c2",thunderUrl:"https://pan.xunlei.com/s/VOtIiLBAS22I4LXE3ih8YskmA1?pwd=ui7n"},{title:"Visual Studio Code 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"139",title:"万兴PDF (Wondershare PDF)",slug:"wondershare-pdf",description:"万兴PDF (Wondershare PDF)，专业软件工具，绿色安全可靠。",content:`万兴PDF (Wondershare PDF) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/wondershare-pdf",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"万兴PDF (Wondershare PDF) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"万兴PDF (Wondershare PDF) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"万兴PDF (Wondershare PDF) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"万兴PDF (Wondershare PDF) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"万兴PDF (Wondershare PDF) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"万兴PDF (Wondershare PDF) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"万兴PDF (Wondershare PDF) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"万兴PDF (Wondershare PDF) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"万兴PDF (Wondershare PDF) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"万兴PDF (Wondershare PDF) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"140",title:"微软运行库 (Microsoft Runtime Library)",slug:"microsoft-runtime-library",description:"微软运行库 (Microsoft Runtime Library)，专业软件工具，绿色安全可靠。",content:`微软运行库 (Microsoft Runtime Library) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"system-tools",categoryName:"系统工具",coverImage:"https://images.unsplash.com/photo-1517697560806-34d7897b7159?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/microsoft-runtime-library",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"微软运行库 (Microsoft Runtime Library) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"微软运行库 (Microsoft Runtime Library) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"微软运行库 (Microsoft Runtime Library) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"微软运行库 (Microsoft Runtime Library) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"微软运行库 (Microsoft Runtime Library) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"微软运行库 (Microsoft Runtime Library) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"微软运行库 (Microsoft Runtime Library) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"微软运行库 (Microsoft Runtime Library) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"微软运行库 (Microsoft Runtime Library) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"微软运行库 (Microsoft Runtime Library) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"141",title:"Webstorm",slug:"webstorm",description:"Webstorm，专业软件工具，绿色安全可靠。",content:`Webstorm 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/webstorm",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Webstorm 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1GbAmpjD-FySqRiRqXF0r0A?pwd=1314",quarkUrl:"https://pan.quark.cn/s/7ef336d55226",thunderUrl:"https://pan.xunlei.com/s/VOsdAkszcPZPSSTrpcRDINxiA1?pwd=pfne"},{title:"Webstorm 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Webstorm 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Webstorm 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Webstorm 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Webstorm 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Webstorm 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Webstorm 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Webstorm 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Webstorm 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"142",title:"WinCC",slug:"wincc",description:"WinCC，专业软件工具，绿色安全可靠。",content:`WinCC 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/wincc",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"WinCC 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WinCC 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WinCC 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WinCC 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WinCC 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WinCC 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WinCC 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WinCC 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WinCC 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WinCC 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"143",title:"WPS",slug:"wps",description:"WPS，专业软件工具，绿色安全可靠。",content:`WPS 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/wps",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"WPS 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WPS 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WPS 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WPS 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WPS 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WPS 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WPS 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WPS 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WPS 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"WPS 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"144",title:"虚拟机 (VMware)",slug:"vmware",description:"虚拟机 (VMware)，专业软件工具，绿色安全可靠。",content:`虚拟机 (VMware) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"system-tools",categoryName:"系统工具",coverImage:"https://images.unsplash.com/photo-1517697560806-34d7897b7159?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/vmware",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"虚拟机 (VMware) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"虚拟机 (VMware) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"虚拟机 (VMware) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"虚拟机 (VMware) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"虚拟机 (VMware) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"虚拟机 (VMware) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"虚拟机 (VMware) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"虚拟机 (VMware) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"虚拟机 (VMware) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"虚拟机 (VMware) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"145",title:"犀牛 (Rhinoceros)",slug:"rhinoceros",description:"犀牛 (Rhinoceros)，专业软件工具，绿色安全可靠。",content:`犀牛 (Rhinoceros) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/rhinoceros",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"犀牛 (Rhinoceros) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"犀牛 (Rhinoceros) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"犀牛 (Rhinoceros) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"犀牛 (Rhinoceros) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"犀牛 (Rhinoceros) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"犀牛 (Rhinoceros) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"犀牛 (Rhinoceros) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"犀牛 (Rhinoceros) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"犀牛 (Rhinoceros) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"犀牛 (Rhinoceros) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"146",title:"XD",slug:"xd",description:"XD，专业软件工具，绿色安全可靠。",content:`XD 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/xd",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"XD 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XD 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XD 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XD 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XD 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XD 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XD 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XD 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XD 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XD 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"147",title:"XMind",slug:"xmind",description:"XMind，专业软件工具，绿色安全可靠。",content:`XMind 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/xmind",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"XMind 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1Mvl-Yl46TPyiTgBZaVnriA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/22b942e9d37d",thunderUrl:"https://pan.xunlei.com/s/VOt895NqqCUGfMq0QbZ4BYPCA1?pwd=s7q3"},{title:"XMind 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"148",title:"亿图图示 (Edraw Max)",slug:"edraw-max",description:"亿图图示 (Edraw Max)，专业软件工具，绿色安全可靠。",content:`亿图图示 (Edraw Max) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/edraw-max",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"亿图图示 (Edraw Max) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"亿图图示 (Edraw Max) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"亿图图示 (Edraw Max) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"亿图图示 (Edraw Max) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"亿图图示 (Edraw Max) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"亿图图示 (Edraw Max) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"亿图图示 (Edraw Max) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"亿图图示 (Edraw Max) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"亿图图示 (Edraw Max) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"亿图图示 (Edraw Max) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"149",title:"泉源设计 (Quanyuan Design)",slug:"quanyuan-design",description:"泉源设计 (Quanyuan Design)，专业软件工具，绿色安全可靠。",content:`泉源设计 (Quanyuan Design) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/quanyuan-design",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"泉源设计 (Quanyuan Design) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"泉源设计 (Quanyuan Design) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"泉源设计 (Quanyuan Design) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"泉源设计 (Quanyuan Design) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"泉源设计 (Quanyuan Design) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"泉源设计 (Quanyuan Design) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"泉源设计 (Quanyuan Design) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"泉源设计 (Quanyuan Design) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"泉源设计 (Quanyuan Design) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"泉源设计 (Quanyuan Design) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"150",title:"中望CAD (ZWCAD)",slug:"zwcad",description:"中望CAD (ZWCAD)，专业软件工具，绿色安全可靠。",content:`中望CAD (ZWCAD) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/zwcad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"中望CAD (ZWCAD) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1GKJB9MQHSHtAdL5so1eEQA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/46cb232cf147",thunderUrl:""},{title:"中望CAD (ZWCAD) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"151",title:"中望3D (ZW3D)",slug:"zw3d",description:"中望3D (ZW3D)，专业软件工具，绿色安全可靠。",content:`中望3D (ZW3D) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/zw3d",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"中望3D (ZW3D) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/17K4dWbPCm5YGdoKYOmLX7g?pwd=1314",quarkUrl:"https://pan.quark.cn/s/3d72cab93d5f",thunderUrl:""},{title:"中望3D (ZW3D) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"152",title:"中望机械CAD (ZWCAD Mechanical)",slug:"zwcad-mechanical",description:"中望机械CAD (ZWCAD Mechanical)，专业软件工具，绿色安全可靠。",content:`中望机械CAD (ZWCAD Mechanical) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/zwcad-mechanical",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"中望机械CAD (ZWCAD Mechanical) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望机械CAD (ZWCAD Mechanical) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望机械CAD (ZWCAD Mechanical) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望机械CAD (ZWCAD Mechanical) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望机械CAD (ZWCAD Mechanical) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望机械CAD (ZWCAD Mechanical) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望机械CAD (ZWCAD Mechanical) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望机械CAD (ZWCAD Mechanical) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望机械CAD (ZWCAD Mechanical) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望机械CAD (ZWCAD Mechanical) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"153",title:"中望建筑CAD (ZWCAD Architecture)",slug:"zwcad-architecture",description:"中望建筑CAD (ZWCAD Architecture)，专业软件工具，绿色安全可靠。",content:`中望建筑CAD (ZWCAD Architecture) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/zwcad-architecture",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"中望建筑CAD (ZWCAD Architecture) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望建筑CAD (ZWCAD Architecture) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望建筑CAD (ZWCAD Architecture) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望建筑CAD (ZWCAD Architecture) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望建筑CAD (ZWCAD Architecture) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望建筑CAD (ZWCAD Architecture) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望建筑CAD (ZWCAD Architecture) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望建筑CAD (ZWCAD Architecture) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望建筑CAD (ZWCAD Architecture) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望建筑CAD (ZWCAD Architecture) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"154",title:"组态王 (KingView)",slug:"kingview",description:"组态王 (KingView)，专业软件工具，绿色安全可靠。",content:`组态王 (KingView) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"system-tools",categoryName:"系统工具",coverImage:"https://images.unsplash.com/photo-1517697560806-34d7897b7159?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/kingview",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"组态王 (KingView) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"组态王 (KingView) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"组态王 (KingView) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"组态王 (KingView) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"组态王 (KingView) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"组态王 (KingView) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"组态王 (KingView) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"组态王 (KingView) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"组态王 (KingView) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"组态王 (KingView) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"155",title:"Zotero",slug:"zotero",description:"Zotero，专业软件工具，绿色安全可靠。",content:`Zotero 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/zotero",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Zotero 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"156",title:"ZBrush",slug:"zbrush",description:"ZBrush，专业软件工具，绿色安全可靠。",content:`ZBrush 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/zbrush",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"ZBrush 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ZBrush 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ZBrush 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ZBrush 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ZBrush 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ZBrush 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ZBrush 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ZBrush 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ZBrush 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ZBrush 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"157",title:"Fiji",slug:"fiji",description:"Fiji/Image J，专业的图像处理与分析工具，绿色安全可靠。",content:`Fiji（ImageJ）是一款专业的图像处理与分析工具。

## 功能特点

- 强大的图像处理能力
- 丰富的插件生态
- 开源免费

## 使用说明

1. 下载安装
2. 导入图片进行分析
3. 使用插件扩展功能`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/fiji",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"Fiji 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/15r9qdCJaJQVxkes_dqQ-fA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/f7a262c1398d",thunderUrl:"https://pan.xunlei.com/s/VOtqVE_4Dc-fe11vM5Xbr0n-A1?pwd=bq5z"},{title:"Fiji 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Fiji 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Fiji 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Fiji 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Fiji 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Fiji 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Fiji 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Fiji 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Fiji 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"158",title:"Dev-C++",slug:"dev-cpp",description:"Dev-C++，轻量级 C/C++ 集成开发环境，绿色安全可靠。",content:`Dev-C++ 是一款轻量级的 C/C++ 集成开发环境。

## 功能特点

- 轻量快速
- 支持 C/C++ 编译调试
- 适合初学者

## 使用说明

1. 下载安装
2. 新建 C/C++ 项目
3. 编写并运行代码`,version:"6.3",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/dev-cpp",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"Dev-C++ 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"159",title:"CLion",slug:"clion",description:"CLion，JetBrains 出品的智能 C/C++ 开发工具，绿色安全可靠。",content:`CLion 是 JetBrains 出品的智能 C/C++ 开发工具。

## 功能特点

- 智能代码补全
- 强大的重构功能
- 集成 CMake 支持

## 使用说明

1. 下载安装
2. 打开或创建 C/C++ 项目
3. 配置编译环境并开始开发`,version:"2026.1",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/clion",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"CLion 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1pKi4WjTY0aaIWLPdOS0Pwg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/c4f25002b3d9",thunderUrl:"https://pan.xunlei.com/s/VOsv-P1mG6vgXUjm9HWr-wjOA1?pwd=zp6n"},{title:"CLion 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CLion 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CLion 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CLion 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CLion 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CLion 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CLion 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CLion 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CLion 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"160",title:"MestReNova",slug:"mestrenova",description:"MestReNova，专业的核磁共振（NMR）数据处理软件，绿色安全可靠。",content:`MestReNova 是一款专业的核磁共振（NMR）数据处理软件。

## 功能特点

- 支持多种 NMR 数据处理
- 强大的谱图分析功能
- 自动化处理流程

## 使用说明

1. 下载安装
2. 导入 NMR 数据文件
3. 进行谱图处理与分析`,version:"15",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mestrenova",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"MestReNova 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1ZCYlhXgbqPxQFNTdZxhppw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/9f79dc02feff",thunderUrl:"https://pan.xunlei.com/s/VOsaZr9PE-ve8_8_Jf9MWY2dA1?pwd=8v58"},{title:"MestReNova 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]}];function zh(e){const r=e.charAt(0).toUpperCase();return/[A-Z]/.test(r)?r:"#"}const Z=Lh((e,r)=>({software:Ih,categories:Mh,searchQuery:"",currentPage:1,pageSize:18,setSearchQuery:t=>e({searchQuery:t,currentPage:1}),setCurrentPage:t=>e({currentPage:t}),getFilteredSoftware:t=>{const{software:l,searchQuery:a}=r();let n=l;if(t&&(n=n.filter(i=>i.category===t)),a){const i=a.toLowerCase().split(/\s+/).filter(Boolean);n=n.filter(u=>{const o=[u.title,u.description,u.categoryName].join(" ").toLowerCase();return i.every(d=>o.includes(d))})}return n},getFilteredByLetter:t=>{const{software:l,searchQuery:a}=r();let n=l;if(t&&t!=="#"?n=n.filter(i=>i.title.charAt(0).toUpperCase()===t.toUpperCase()):t==="#"&&(n=n.filter(i=>!/[A-Z]/i.test(i.title.charAt(0)))),a){const i=a.toLowerCase().split(/\s+/).filter(Boolean);n=n.filter(u=>{const o=[u.title,u.description,u.categoryName].join(" ").toLowerCase();return i.every(d=>o.includes(d))})}return n},getLetterCounts:()=>{const{software:t}=r(),l={};for(let a=65;a<=90;a++)l[String.fromCharCode(a)]=0;return l["#"]=0,t.forEach(a=>{l[zh(a.title)]++}),l},getTotalPages:t=>{const{pageSize:l}=r();return Math.ceil(t.length/l)},getSoftwareBySlug:t=>r().software.find(l=>l.slug===t),getCategoryBySlug:t=>r().categories.find(l=>l.slug===t)}));function Lo(){const[e,r]=y.useState(""),t=Ia(),l=Z(u=>u.searchQuery),a=Z(u=>u.setSearchQuery),n=y.useRef(e);y.useEffect(()=>{e===""&&n.current!==""&&l&&(a(""),t("/")),n.current=e},[e,l,a,t]);const i=u=>{u.preventDefault();const o=e.trim();o?(a(o),t(`/search?q=${encodeURIComponent(o)}`)):(a(""),t("/"))};return c.jsxs("form",{onSubmit:i,className:"relative",children:[c.jsx(ah,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"}),c.jsx("input",{type:"text",value:e,onChange:u=>r(u.target.value),placeholder:"搜索软件...",className:"w-full pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"})]})}const Mo=[{to:"/",label:"首页"},{to:"/about",label:"关于"}];function Wh(){const[e,r]=y.useState(!1),t=gt();return c.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60",children:[c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"flex items-center justify-between h-16",children:[c.jsxs(it,{to:"/",className:"flex items-center gap-2 group",children:[c.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-sm shadow-blue-500/25 group-hover:shadow-md group-hover:shadow-blue-500/30 transition-all",children:c.jsx(oc,{className:"w-5 h-5 text-white"})}),c.jsx("span",{className:"text-lg font-bold text-slate-800",children:c.jsx("span",{className:"gradient-text",children:"软件分享"})})]}),c.jsx("nav",{className:"hidden md:flex items-center gap-8",children:Mo.map(l=>c.jsx(it,{to:l.to,className:`text-sm font-medium transition-colors ${t.pathname===l.to?"text-blue-600":"text-slate-500 hover:text-slate-800"}`,children:l.label},l.to))}),c.jsx("div",{className:"hidden md:block w-64",children:c.jsx(Lo,{})}),c.jsx("button",{className:"md:hidden p-2 text-slate-500 hover:text-slate-700",onClick:()=>r(!e),children:e?c.jsx(nh,{className:"w-5 h-5"}):c.jsx(lh,{className:"w-5 h-5"})})]})}),e&&c.jsx("div",{className:"md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl",children:c.jsxs("div",{className:"px-4 py-4 space-y-4",children:[c.jsx(Lo,{}),c.jsx("div",{className:"flex flex-col gap-3",children:Mo.map(l=>c.jsx(it,{to:l.to,onClick:()=>r(!1),className:`text-sm py-2 font-medium transition-colors ${t.pathname===l.to?"text-blue-600":"text-slate-500 hover:text-slate-800"}`,children:l.label},l.to))})]})})]})}function jh(){return c.jsx("footer",{className:"border-t border-slate-200 bg-white",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[c.jsxs("div",{className:"text-slate-500 text-sm",children:["© ",new Date().getFullYear()," 软件分享 — 发现优质绿色软件"]}),c.jsx("div",{className:"text-slate-400 text-xs",children:"仅供学习交流，请支持正版软件"})]})})})}function Rh(){return c.jsxs("div",{className:"min-h-screen flex flex-col",children:[c.jsx(Wh,{}),c.jsx("main",{className:"flex-1 pt-16",children:c.jsx(WU,{})}),c.jsx(jh,{})]})}function Th(){return c.jsxs("section",{className:"relative overflow-hidden bg-white",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"}),c.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"}),c.jsx("div",{className:"absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"}),c.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"}),c.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32",children:c.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-8",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500 animate-pulse"}),c.jsx("span",{className:"text-xs text-blue-600 font-medium",children:"每日更新优质软件"})]}),c.jsxs("h1",{className:"text-4xl md:text-6xl font-bold tracking-tight mb-6",children:[c.jsx("span",{className:"text-slate-800",children:"发现"}),c.jsx("span",{className:"gradient-text",children:"优质绿色软件"})]}),c.jsx("p",{className:"text-lg text-slate-500 max-w-xl mx-auto leading-relaxed",children:"精选系统工具、办公软件、编程开发、图像媒体等各类绿色软件， 安全可靠，即搜即用。"})]})})]})}const _h=[...Array.from({length:26},(e,r)=>String.fromCharCode(65+r)),"#"];function Oh(){const e=Ia(),r=Z(t=>t.getLetterCounts)();return c.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10",children:c.jsx("div",{className:"flex flex-wrap justify-center gap-1.5",children:_h.map(t=>{const l=r[t]||0,a=l>0;return c.jsx("button",{onClick:()=>e(`/letter/${t}`),disabled:!a,title:a?`${l} 款`:"暂无",className:`w-9 h-9 rounded-lg text-sm font-medium transition-all ${a?"bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-sm hover:shadow-blue-500/10 hover:-translate-y-0.5":"bg-slate-50 border border-slate-100 text-slate-300 cursor-not-allowed"}`,children:t},t)})})})}function pc(e){const r=new Date(e),t=r.getFullYear(),l=String(r.getMonth()+1).padStart(2,"0"),a=String(r.getDate()).padStart(2,"0");return`${t}-${l}-${a}`}function fa({children:e,variant:r="default"}){const t="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",l={default:"bg-slate-100 text-slate-600",primary:"bg-blue-50 text-blue-600"};return c.jsx("span",{className:`${t} ${l[r]}`,children:e})}function Fh({software:e}){return c.jsxs(it,{to:`/software/${e.slug}`,className:"group block bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1",children:[c.jsx("div",{className:"aspect-[3/2] overflow-hidden bg-slate-100",children:c.jsx("img",{src:e.coverImage,alt:e.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",loading:"lazy",onError:r=>{const t=r.target;t.onerror=null,t.src=`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="#e2e8f0" width="600" height="400"/><text fill="#94a3b8" font-family="system-ui,sans-serif" font-size="20" text-anchor="middle" x="300" y="210">${e.title}</text></svg>`)}`}})}),c.jsxs("div",{className:"p-4",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[c.jsx(fa,{children:e.categoryName}),c.jsx(fa,{variant:"primary",children:e.platform})]}),c.jsx("h3",{className:"text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-1.5 line-clamp-1",children:e.title}),c.jsx("p",{className:"text-sm text-slate-500 line-clamp-2 mb-3 leading-relaxed",children:e.description}),c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(ic,{className:"w-3 h-3"}),pc(e.updatedAt)]}),c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(uc,{className:"w-3 h-3"}),e.fileSize]})]})]})]})}function Vh({currentPage:e,totalPages:r,onPageChange:t}){if(r<=1)return null;const l=[],a=2;for(let n=1;n<=r;n++)n===1||n===r||n>=e-a&&n<=e+a?l.push(n):l[l.length-1]!=="..."&&l.push("...");return c.jsxs("div",{className:"flex items-center justify-center gap-1",children:[c.jsx("button",{onClick:()=>t(e-1),disabled:e===1,className:"p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:c.jsx(eh,{className:"w-4 h-4"})}),l.map((n,i)=>n==="..."?c.jsx("span",{className:"px-2 text-slate-400",children:"..."},`dots-${i}`):c.jsx("button",{onClick:()=>t(n),className:`w-9 h-9 rounded-lg text-sm font-medium transition-all ${e===n?"bg-blue-500 text-white shadow-sm shadow-blue-500/25":"text-slate-500 hover:text-slate-700 hover:bg-slate-100"}`,children:n},n)),c.jsx("button",{onClick:()=>t(e+1),disabled:e===r,className:"p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:c.jsx(rh,{className:"w-4 h-4"})})]})}function Wa({categorySlug:e,letter:r}){const t=Z(f=>f.getFilteredSoftware),l=Z(f=>f.getFilteredByLetter),a=Z(f=>f.getTotalPages),n=Z(f=>f.currentPage),i=Z(f=>f.setCurrentPage),u=Z(f=>f.pageSize),o=r?l(r):t(e),d=a(o),m=(n-1)*u,p=o.slice(m,m+u);return o.length===0?c.jsxs("div",{className:"text-center py-16",children:[c.jsx("p",{className:"text-slate-500 text-lg",children:"暂无相关软件"}),c.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"试试其他关键词或分类"})]}):c.jsxs("div",{children:[c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:p.map(f=>c.jsx(Fh,{software:f},f.id))}),c.jsx("div",{className:"mt-10",children:c.jsx(Vh,{currentPage:n,totalPages:d,onPageChange:i})})]})}function Bh(){const e=Z(t=>t.setSearchQuery),r=Z(t=>t.setCurrentPage);return y.useEffect(()=>{e(""),r(1)},[e,r]),c.jsxs("div",{children:[c.jsx(Th,{}),c.jsx(Oh,{}),c.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("div",{className:"flex items-center justify-between mb-8",children:c.jsx("h2",{className:"text-xl font-bold text-slate-800",children:"最新软件"})}),c.jsx(Wa,{})]})]})}function Xh(){const{slug:e}=ou(),r=Z(a=>a.getCategoryBySlug),t=Z(a=>a.setCurrentPage),l=e?r(e):void 0;return y.useEffect(()=>{t(1)},[e,t]),l?c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"mb-10",children:[c.jsx("h1",{className:"text-2xl font-bold text-slate-800 mb-2",children:l.name}),c.jsx("p",{className:"text-slate-500",children:l.description})]}),c.jsx(Wa,{categorySlug:e})]}):c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",children:c.jsx("p",{className:"text-slate-500",children:"分类不存在"})})}function Qh(){const{letter:e}=ou(),r=Z(t=>t.setCurrentPage);return y.useEffect(()=>{r(1)},[e,r]),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"mb-10",children:[c.jsxs("h1",{className:"text-2xl font-bold text-slate-800 mb-2",children:[e==="#"?"特殊字符":e," 开头的软件"]}),c.jsx("p",{className:"text-slate-500",children:"按首字母浏览软件"})]}),c.jsx(Wa,{letter:e})]})}function Hh({section:e}){const r=!!e.baiduUrl||!!e.quarkUrl||!!e.thunderUrl;return c.jsxs("div",{className:`rounded-xl border p-5 transition-colors ${r?"bg-white border-slate-200":"bg-slate-50 border-slate-100"}`,children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h3",{className:"text-base font-semibold text-slate-800",children:e.title}),!r&&c.jsx("span",{className:"text-xs text-slate-400 bg-slate-200 px-2 py-0.5 rounded-full",children:"暂未上架，敬请期待"})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[e.baiduUrl?c.jsxs("a",{href:e.baiduUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-md hover:shadow-blue-500/20 active:scale-95",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M10.28 8.74V5.24C6.44 4.36 2.64 6.36 1.52 10.12C-0.12 15.64 3.4 21.12 9.04 22.04C13.84 22.8 18.36 20.4 19.88 15.92C20.2 15.0 20.32 14.04 20.2 13.04C17.96 15.2 14.56 16.48 11.2 15.52C8.32 14.68 6.68 11.72 7.36 8.76L10.28 8.74Z"})}),"百度网盘"]}):c.jsxs("div",{className:"flex items-center justify-center gap-2 px-4 py-3 bg-slate-200 text-slate-400 text-sm font-medium rounded-lg cursor-not-allowed",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M10.28 8.74V5.24C6.44 4.36 2.64 6.36 1.52 10.12C-0.12 15.64 3.4 21.12 9.04 22.04C13.84 22.8 18.36 20.4 19.88 15.92C20.2 15.0 20.32 14.04 20.2 13.04C17.96 15.2 14.56 16.48 11.2 15.52C8.32 14.68 6.68 11.72 7.36 8.76L10.28 8.74Z"})}),"百度网盘"]}),e.quarkUrl?c.jsxs("a",{href:e.quarkUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-md hover:shadow-amber-500/20 active:scale-95",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("circle",{cx:"12",cy:"12",r:"10"})}),"夸克网盘"]}):c.jsxs("div",{className:"flex items-center justify-center gap-2 px-4 py-3 bg-slate-200 text-slate-400 text-sm font-medium rounded-lg cursor-not-allowed",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("circle",{cx:"12",cy:"12",r:"10"})}),"夸克网盘"]}),e.thunderUrl?c.jsxs("a",{href:e.thunderUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-md hover:shadow-sky-500/20 active:scale-95",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"迅雷云盘"]}):c.jsxs("div",{className:"flex items-center justify-center gap-2 px-4 py-3 bg-slate-200 text-slate-400 text-sm font-medium rounded-lg cursor-not-allowed",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"迅雷云盘"]})]})]})}function Kh({software:e}){return c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10",children:[c.jsx("div",{className:"lg:col-span-2",children:c.jsx("div",{className:"rounded-xl overflow-hidden bg-slate-100 border border-slate-200",children:c.jsx("img",{src:e.coverImage,alt:e.title,className:"w-full aspect-[4/3] object-cover",onError:r=>{const t=r.target;t.onerror=null,t.src=`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect fill="#e2e8f0" width="600" height="450"/><text fill="#94a3b8" font-family="system-ui,sans-serif" font-size="20" text-anchor="middle" x="300" y="235">${e.title}</text></svg>`)}`}})})}),c.jsxs("div",{className:"lg:col-span-3 flex flex-col justify-center",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[c.jsx(fa,{children:e.categoryName}),c.jsx(fa,{variant:"primary",children:e.platform})]}),c.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-slate-800 mb-3",children:e.title}),c.jsx("p",{className:"text-slate-500 mb-6 leading-relaxed",children:e.description}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[c.jsx(ic,{className:"w-4 h-4 text-slate-400"}),c.jsxs("span",{children:["更新于 ",pc(e.updatedAt)]})]}),c.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[c.jsx(th,{className:"w-4 h-4 text-slate-400"}),c.jsx("span",{children:e.fileSize})]}),c.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[c.jsx(oc,{className:"w-4 h-4 text-slate-400"}),c.jsx("span",{children:e.platform})]}),c.jsx("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:c.jsx("span",{className:"font-mono text-slate-400",children:e.version})})]})]})]}),e.downloadLinks&&e.downloadLinks.length>0&&c.jsxs("div",{className:"mb-8",children:[c.jsxs("h2",{className:"text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2",children:[c.jsx(uc,{className:"w-5 h-5 text-blue-500"}),"下载链接"]}),c.jsx("div",{className:"space-y-4",children:e.downloadLinks.map((r,t)=>c.jsx(Hh,{section:r},t))})]}),c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-8",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-800 mb-4",children:"软件详情"}),c.jsx("div",{className:"max-w-none",children:e.content.split(`
`).map((r,t)=>r.startsWith("## ")?c.jsx("h3",{className:"text-base font-semibold text-blue-600 mt-6 mb-3",children:r.replace("## ","")},t):r.startsWith("- ")?c.jsx("li",{className:"text-slate-600 text-sm ml-4 mb-1",children:r.replace("- ","")},t):r.trim()===""?c.jsx("br",{},t):c.jsx("p",{className:"text-slate-600 text-sm leading-relaxed mb-2",children:r},t))})]}),e.screenshots.length>0&&c.jsxs("div",{className:"mb-8",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-800 mb-4",children:"软件截图"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.screenshots.map((r,t)=>c.jsx("div",{className:"rounded-xl overflow-hidden bg-slate-100 border border-slate-200",children:c.jsx("img",{src:r,alt:`截图 ${t+1}`,className:"w-full aspect-video object-cover",onError:l=>{const a=l.target;a.onerror=null,a.src=`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect fill="#e2e8f0" width="800" height="500"/><text fill="#94a3b8" font-family="system-ui,sans-serif" font-size="20" text-anchor="middle" x="400" y="260">截图 ${t+1}</text></svg>`)}`}})},t))})]})]})}function $h(){const{slug:e}=ou(),r=Z(a=>a.getSoftwareBySlug),t=Z(a=>a.setCurrentPage),l=e?r(e):void 0;return y.useEffect(()=>{t(1),window.scrollTo(0,0)},[e,t]),l?c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs(it,{to:"/",className:"inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-8 transition-colors",children:[c.jsx(YU,{className:"w-4 h-4"}),"返回首页"]}),c.jsx(Kh,{software:l})]}):c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",children:[c.jsx("p",{className:"text-slate-500",children:"软件不存在"}),c.jsx(it,{to:"/",className:"text-blue-500 hover:text-blue-600 text-sm mt-4 inline-block",children:"返回首页"})]})}function Zh(){const[e]=ZU(),r=e.get("q")||"",t=Z(n=>n.setSearchQuery),l=Z(n=>n.searchQuery),a=Z(n=>n.setCurrentPage);return y.useEffect(()=>{r&&t(r),a(1)},[r,t,a]),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"mb-10",children:[c.jsx("h1",{className:"text-2xl font-bold text-slate-800 mb-2",children:"搜索结果"}),c.jsxs("p",{className:"text-slate-500",children:['搜索 "',l,'" 的结果']})]}),c.jsx(Wa,{})]})}function Jh(){return c.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[c.jsx("h1",{className:"text-3xl font-bold text-slate-800 mb-8",children:"关于本站"}),c.jsxs("div",{className:"space-y-6 text-slate-600 leading-relaxed",children:[c.jsx("p",{children:"软件分享是一个专注于绿色软件推荐与分享的个人站点。我们致力于为广大的软件爱好者提供安全、绿色、可靠的软件资源。"}),c.jsx("p",{children:"本站发布的每一款软件都经过亲自测试和验证，确保安全可用。我们坚持简洁高效的理念， 去除繁琐的用户系统，让您专注于软件发现与使用。"}),c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-6 mt-8",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-800 mb-4",children:"内容涵盖"}),c.jsxs("ul",{className:"grid grid-cols-2 gap-2 text-sm",children:[c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"工程设计与仿真"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"办公与文档"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"编程开发"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"图像媒体"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"数据分析"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"系统工具"]})]})]}),c.jsx("p",{className:"text-slate-400 text-sm mt-8",children:"本站仅供学习交流使用，请支持正版软件。"})]})]})}function Gh(){return c.jsx(RU,{children:c.jsxs(rr,{path:"/",element:c.jsx(Rh,{}),children:[c.jsx(rr,{index:!0,element:c.jsx(Bh,{})}),c.jsx(rr,{path:"category/:slug",element:c.jsx(Xh,{})}),c.jsx(rr,{path:"letter/:letter",element:c.jsx(Qh,{})}),c.jsx(rr,{path:"software/:slug",element:c.jsx($h,{})}),c.jsx(rr,{path:"search",element:c.jsx(Zh,{})}),c.jsx(rr,{path:"about",element:c.jsx(Jh,{})})]})})}fn.createRoot(document.getElementById("root")).render(c.jsx(fi.StrictMode,{children:c.jsx(QU,{children:c.jsx(Gh,{})})}));
