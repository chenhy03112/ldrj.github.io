function mc(e,t){for(var r=0;r<t.length;r++){const l=t[r];if(typeof l!="string"&&!Array.isArray(l)){for(const n in l)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(l,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>l[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();function jo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zo={exports:{}},gn={},Wo={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=Symbol.for("react.element"),gc=Symbol.for("react.portal"),kc=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),wc=Symbol.for("react.provider"),bc=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),Ac=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),cu=Symbol.iterator;function Cc(e){return e===null||typeof e!="object"?null:(e=cu&&e[cu]||e["@@iterator"],typeof e=="function"?e:null)}var Ro={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_o=Object.assign,To={};function fr(e,t,r){this.props=e,this.context=t,this.refs=To,this.updater=r||Ro}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oo(){}Oo.prototype=fr.prototype;function Ua(e,t,r){this.props=e,this.context=t,this.refs=To,this.updater=r||Ro}var ha=Ua.prototype=new Oo;ha.constructor=Ua;_o(ha,fr.prototype);ha.isPureReactComponent=!0;var Uu=Array.isArray,Vo=Object.prototype.hasOwnProperty,pa={current:null},Fo={key:!0,ref:!0,__self:!0,__source:!0};function Bo(e,t,r){var l,n={},i=null,a=null;if(t!=null)for(l in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Vo.call(t,l)&&!Fo.hasOwnProperty(l)&&(n[l]=t[l]);var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){for(var o=Array(u),d=0;d<u;d++)o[d]=arguments[d+2];n.children=o}if(e&&e.defaultProps)for(l in u=e.defaultProps,u)n[l]===void 0&&(n[l]=u[l]);return{$$typeof:ul,type:e,key:i,ref:a,props:n,_owner:pa.current}}function Dc(e,t){return{$$typeof:ul,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fa(e){return typeof e=="object"&&e!==null&&e.$$typeof===ul}function Pc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var hu=/\/+/g;function On(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pc(""+e.key):t.toString(36)}function Ll(e,t,r,l,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ul:case gc:a=!0}}if(a)return a=e,n=n(a),e=l===""?"."+On(a,0):l,Uu(n)?(r="",e!=null&&(r=e.replace(hu,"$&/")+"/"),Ll(n,t,r,"",function(d){return d})):n!=null&&(fa(n)&&(n=Dc(n,r+(!n.key||a&&a.key===n.key?"":(""+n.key).replace(hu,"$&/")+"/")+e)),t.push(n)),1;if(a=0,l=l===""?".":l+":",Uu(e))for(var u=0;u<e.length;u++){i=e[u];var o=l+On(i,u);a+=Ll(i,t,r,o,n)}else if(o=Cc(e),typeof o=="function")for(e=o.call(e),u=0;!(i=e.next()).done;)i=i.value,o=l+On(i,u++),a+=Ll(i,t,r,o,n);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function fl(e,t,r){if(e==null)return e;var l=[],n=0;return Ll(e,l,"","",function(i){return t.call(r,i,n++)}),l}function Nc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Ml={transition:null},Ec={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Ml,ReactCurrentOwner:pa};function Xo(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:fl,forEach:function(e,t,r){fl(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return fl(e,function(){t++}),t},toArray:function(e){return fl(e,function(t){return t})||[]},only:function(e){if(!fa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=fr;L.Fragment=kc;L.Profiler=yc;L.PureComponent=Ua;L.StrictMode=vc;L.Suspense=xc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ec;L.act=Xo;L.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=_o({},e.props),n=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=pa.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(o in t)Vo.call(t,o)&&!Fo.hasOwnProperty(o)&&(l[o]=t[o]===void 0&&u!==void 0?u[o]:t[o])}var o=arguments.length-2;if(o===1)l.children=r;else if(1<o){u=Array(o);for(var d=0;d<o;d++)u[d]=arguments[d+2];l.children=u}return{$$typeof:ul,type:e.type,key:n,ref:i,props:l,_owner:a}};L.createContext=function(e){return e={$$typeof:bc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wc,_context:e},e.Consumer=e};L.createElement=Bo;L.createFactory=function(e){var t=Bo.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:qc,render:e}};L.isValidElement=fa;L.lazy=function(e){return{$$typeof:Sc,_payload:{_status:-1,_result:e},_init:Nc}};L.memo=function(e,t){return{$$typeof:Ac,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Ml.transition;Ml.transition={};try{e()}finally{Ml.transition=t}};L.unstable_act=Xo;L.useCallback=function(e,t){return se.current.useCallback(e,t)};L.useContext=function(e){return se.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return se.current.useDeferredValue(e)};L.useEffect=function(e,t){return se.current.useEffect(e,t)};L.useId=function(){return se.current.useId()};L.useImperativeHandle=function(e,t,r){return se.current.useImperativeHandle(e,t,r)};L.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return se.current.useMemo(e,t)};L.useReducer=function(e,t,r){return se.current.useReducer(e,t,r)};L.useRef=function(e){return se.current.useRef(e)};L.useState=function(e){return se.current.useState(e)};L.useSyncExternalStore=function(e,t,r){return se.current.useSyncExternalStore(e,t,r)};L.useTransition=function(){return se.current.useTransition()};L.version="18.3.1";Wo.exports=L;var b=Wo.exports;const ma=jo(b),Lc=mc({__proto__:null,default:ma},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=b,Ic=Symbol.for("react.element"),jc=Symbol.for("react.fragment"),zc=Object.prototype.hasOwnProperty,Wc=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rc={key:!0,ref:!0,__self:!0,__source:!0};function $o(e,t,r){var l,n={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(l in t)zc.call(t,l)&&!Rc.hasOwnProperty(l)&&(n[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)n[l]===void 0&&(n[l]=t[l]);return{$$typeof:Ic,type:e,key:i,ref:a,props:n,_owner:Wc.current}}gn.Fragment=jc;gn.jsx=$o;gn.jsxs=$o;zo.exports=gn;var c=zo.exports,fi={},Qo={exports:{}},we={},Ho={exports:{}},Ko={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,N){var E=S.length;S.push(N);e:for(;0<E;){var X=E-1>>>1,G=S[X];if(0<n(G,N))S[X]=N,S[E]=G,E=X;else break e}}function r(S){return S.length===0?null:S[0]}function l(S){if(S.length===0)return null;var N=S[0],E=S.pop();if(E!==N){S[0]=E;e:for(var X=0,G=S.length,hl=G>>>1;X<hl;){var qt=2*(X+1)-1,Tn=S[qt],xt=qt+1,pl=S[xt];if(0>n(Tn,E))xt<G&&0>n(pl,Tn)?(S[X]=pl,S[xt]=E,X=xt):(S[X]=Tn,S[qt]=E,X=qt);else if(xt<G&&0>n(pl,E))S[X]=pl,S[xt]=E,X=xt;else break e}}return N}function n(S,N){var E=S.sortIndex-N.sortIndex;return E!==0?E:S.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var o=[],d=[],m=1,h=null,f=3,g=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var N=r(d);N!==null;){if(N.callback===null)l(d);else if(N.startTime<=S)l(d),N.sortIndex=N.expirationTime,t(o,N);else break;N=r(d)}}function k(S){if(y=!1,p(S),!v)if(r(o)!==null)v=!0,Rn(q);else{var N=r(d);N!==null&&_n(k,N.startTime-S)}}function q(S,N){v=!1,y&&(y=!1,U(P),P=-1),g=!0;var E=f;try{for(p(N),h=r(o);h!==null&&(!(h.expirationTime>N)||S&&!Pe());){var X=h.callback;if(typeof X=="function"){h.callback=null,f=h.priorityLevel;var G=X(h.expirationTime<=N);N=e.unstable_now(),typeof G=="function"?h.callback=G:h===r(o)&&l(o),p(N)}else l(o);h=r(o)}if(h!==null)var hl=!0;else{var qt=r(d);qt!==null&&_n(k,qt.startTime-N),hl=!1}return hl}finally{h=null,f=E,g=!1}}var C=!1,D=null,P=-1,B=5,M=-1;function Pe(){return!(e.unstable_now()-M<B)}function vr(){if(D!==null){var S=e.unstable_now();M=S;var N=!0;try{N=D(!0,S)}finally{N?yr():(C=!1,D=null)}}else C=!1}var yr;if(typeof s=="function")yr=function(){s(vr)};else if(typeof MessageChannel<"u"){var su=new MessageChannel,fc=su.port2;su.port1.onmessage=vr,yr=function(){fc.postMessage(null)}}else yr=function(){x(vr,0)};function Rn(S){D=S,C||(C=!0,yr())}function _n(S,N){P=x(function(){S(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Rn(q))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(o)},e.unstable_next=function(S){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var E=f;f=N;try{return S()}finally{f=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,N){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var E=f;f=S;try{return N()}finally{f=E}},e.unstable_scheduleCallback=function(S,N,E){var X=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?X+E:X):E=X,S){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=E+G,S={id:m++,callback:N,priorityLevel:S,startTime:E,expirationTime:G,sortIndex:-1},E>X?(S.sortIndex=E,t(d,S),r(o)===null&&S===r(d)&&(y?(U(P),P=-1):y=!0,_n(k,E-X))):(S.sortIndex=G,t(o,S),v||g||(v=!0,Rn(q))),S},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(S){var N=f;return function(){var E=f;f=N;try{return S.apply(this,arguments)}finally{f=E}}}})(Ko);Ho.exports=Ko;var _c=Ho.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=b,ye=_c;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zo=new Set,Vr={};function Wt(e,t){ur(e,t),ur(e+"Capture",t)}function ur(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Zo.add(t[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mi=Object.prototype.hasOwnProperty,Oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pu={},fu={};function Vc(e){return mi.call(fu,e)?!0:mi.call(pu,e)?!1:Oc.test(e)?fu[e]=!0:(pu[e]=!0,!1)}function Fc(e,t,r,l){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bc(e,t,r,l){if(t===null||typeof t>"u"||Fc(e,t,r,l))return!0;if(l)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,r,l,n,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var ga=/[\-:]([a-z])/g;function ka(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ga,ka);le[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ga,ka);le[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ga,ka);le[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function va(e,t,r,l){var n=le.hasOwnProperty(t)?le[t]:null;(n!==null?n.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bc(t,r,n,l)&&(r=null),l||n===null?Vc(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):n.mustUseProperty?e[n.propertyName]=r===null?n.type===3?!1:"":r:(t=n.attributeName,l=n.attributeNamespace,r===null?e.removeAttribute(t):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,l?e.setAttributeNS(l,t,r):e.setAttribute(t,r))))}var Ge=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Ft=Symbol.for("react.fragment"),ya=Symbol.for("react.strict_mode"),gi=Symbol.for("react.profiler"),Jo=Symbol.for("react.provider"),Go=Symbol.for("react.context"),wa=Symbol.for("react.forward_ref"),ki=Symbol.for("react.suspense"),vi=Symbol.for("react.suspense_list"),ba=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),Yo=Symbol.for("react.offscreen"),mu=Symbol.iterator;function wr(e){return e===null||typeof e!="object"?null:(e=mu&&e[mu]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Vn;function Pr(e){if(Vn===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Vn=t&&t[1]||""}return`
`+Vn+e}var Fn=!1;function Bn(e,t){if(!e||Fn)return"";Fn=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var l=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){l=d}e.call(t.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var n=d.stack.split(`
`),i=l.stack.split(`
`),a=n.length-1,u=i.length-1;1<=a&&0<=u&&n[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(n[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||n[a]!==i[u]){var o=`
`+n[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=u);break}}}finally{Fn=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Pr(e):""}function Xc(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=Bn(e.type,!1),e;case 11:return e=Bn(e.type.render,!1),e;case 1:return e=Bn(e.type,!0),e;default:return""}}function yi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ft:return"Fragment";case Vt:return"Portal";case gi:return"Profiler";case ya:return"StrictMode";case ki:return"Suspense";case vi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Go:return(e.displayName||"Context")+".Consumer";case Jo:return(e._context.displayName||"Context")+".Provider";case wa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ba:return t=e.displayName||null,t!==null?t:yi(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return yi(e(t))}catch{}}return null}function $c(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yi(t);case 8:return t===ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ed(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qc(e){var t=ed(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(a){l=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(a){l=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gl(e){e._valueTracker||(e._valueTracker=Qc(e))}function td(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),l="";return e&&(l=ed(e)?e.checked?"true":"false":e.value),e=l,e!==r?(t.setValue(e),!0):!1}function Bl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wi(e,t){var r=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function gu(e,t){var r=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;r=kt(t.value!=null?t.value:r),e._wrapperState={initialChecked:l,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rd(e,t){t=t.checked,t!=null&&va(e,"checked",t,!1)}function bi(e,t){rd(e,t);var r=kt(t.value),l=t.type;if(r!=null)l==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qi(e,t.type,r):t.hasOwnProperty("defaultValue")&&qi(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ku(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function qi(e,t,r){(t!=="number"||Bl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Nr=Array.isArray;function er(e,t,r,l){if(e=e.options,t){t={};for(var n=0;n<r.length;n++)t["$"+r[n]]=!0;for(r=0;r<e.length;r++)n=t.hasOwnProperty("$"+e[r].value),e[r].selected!==n&&(e[r].selected=n),n&&l&&(e[r].defaultSelected=!0)}else{for(r=""+kt(r),t=null,n=0;n<e.length;n++){if(e[n].value===r){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function xi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(w(92));if(Nr(r)){if(1<r.length)throw Error(w(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:kt(r)}}function ld(e,t){var r=kt(t.value),l=kt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),l!=null&&(e.defaultValue=""+l)}function yu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ai(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kl,id=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,l,n){MSApp.execUnsafeLocalFunction(function(){return e(t,r,l,n)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kl=kl||document.createElement("div"),kl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function ad(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function ud(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var l=r.indexOf("--")===0,n=ad(r,t[r],l);r==="float"&&(r="cssFloat"),l?e.setProperty(r,n):e[r]=n}}var Kc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Si(e,t){if(t){if(Kc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pi=null,tr=null,rr=null;function wu(e){if(e=sl(e)){if(typeof Pi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=bn(t),Pi(e.stateNode,e.type,t))}}function od(e){tr?rr?rr.push(e):rr=[e]:tr=e}function dd(){if(tr){var e=tr,t=rr;if(rr=tr=null,wu(e),t)for(e=0;e<t.length;e++)wu(t[e])}}function sd(e,t){return e(t)}function cd(){}var Xn=!1;function Ud(e,t,r){if(Xn)return e(t,r);Xn=!0;try{return sd(e,t,r)}finally{Xn=!1,(tr!==null||rr!==null)&&(cd(),dd())}}function Br(e,t){var r=e.stateNode;if(r===null)return null;var l=bn(r);if(l===null)return null;r=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(w(231,t,typeof r));return r}var Ni=!1;if(He)try{var br={};Object.defineProperty(br,"passive",{get:function(){Ni=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{Ni=!1}function Zc(e,t,r,l,n,i,a,u,o){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(m){this.onError(m)}}var Ir=!1,Xl=null,$l=!1,Ei=null,Jc={onError:function(e){Ir=!0,Xl=e}};function Gc(e,t,r,l,n,i,a,u,o){Ir=!1,Xl=null,Zc.apply(Jc,arguments)}function Yc(e,t,r,l,n,i,a,u,o){if(Gc.apply(this,arguments),Ir){if(Ir){var d=Xl;Ir=!1,Xl=null}else throw Error(w(198));$l||($l=!0,Ei=d)}}function Rt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function hd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bu(e){if(Rt(e)!==e)throw Error(w(188))}function e0(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var r=e,l=t;;){var n=r.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){r=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===r)return bu(n),e;if(i===l)return bu(n),t;i=i.sibling}throw Error(w(188))}if(r.return!==l.return)r=n,l=i;else{for(var a=!1,u=n.child;u;){if(u===r){a=!0,r=n,l=i;break}if(u===l){a=!0,l=n,r=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===r){a=!0,r=i,l=n;break}if(u===l){a=!0,l=i,r=n;break}u=u.sibling}if(!a)throw Error(w(189))}}if(r.alternate!==l)throw Error(w(190))}if(r.tag!==3)throw Error(w(188));return r.stateNode.current===r?e:t}function pd(e){return e=e0(e),e!==null?fd(e):null}function fd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fd(e);if(t!==null)return t;e=e.sibling}return null}var md=ye.unstable_scheduleCallback,qu=ye.unstable_cancelCallback,t0=ye.unstable_shouldYield,r0=ye.unstable_requestPaint,$=ye.unstable_now,l0=ye.unstable_getCurrentPriorityLevel,xa=ye.unstable_ImmediatePriority,gd=ye.unstable_UserBlockingPriority,Ql=ye.unstable_NormalPriority,n0=ye.unstable_LowPriority,kd=ye.unstable_IdlePriority,kn=null,Te=null;function i0(e){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(kn,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:o0,a0=Math.log,u0=Math.LN2;function o0(e){return e>>>=0,e===0?32:31-(a0(e)/u0|0)|0}var vl=64,yl=4194304;function Er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hl(e,t){var r=e.pendingLanes;if(r===0)return 0;var l=0,n=e.suspendedLanes,i=e.pingedLanes,a=r&268435455;if(a!==0){var u=a&~n;u!==0?l=Er(u):(i&=a,i!==0&&(l=Er(i)))}else a=r&~n,a!==0?l=Er(a):i!==0&&(l=Er(i));if(l===0)return 0;if(t!==0&&t!==l&&!(t&n)&&(n=l&-l,i=t&-t,n>=i||n===16&&(i&4194240)!==0))return t;if(l&4&&(l|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)r=31-Ie(t),n=1<<r,l|=e[r],t&=~n;return l}function d0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s0(e,t){for(var r=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ie(i),u=1<<a,o=n[a];o===-1?(!(u&r)||u&l)&&(n[a]=d0(u,t)):o<=t&&(e.expiredLanes|=u),i&=~u}}function Li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vd(){var e=vl;return vl<<=1,!(vl&4194240)&&(vl=64),e}function $n(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ol(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=r}function c0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<r;){var n=31-Ie(r),i=1<<n;t[n]=0,l[n]=-1,e[n]=-1,r&=~i}}function Aa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var l=31-Ie(r),n=1<<l;n&t|e[l]&t&&(e[l]|=t),r&=~n}}var j=0;function yd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wd,Sa,bd,qd,xd,Mi=!1,wl=[],dt=null,st=null,ct=null,Xr=new Map,$r=new Map,nt=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xu(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function qr(e,t,r,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=sl(t),t!==null&&Sa(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function h0(e,t,r,l,n){switch(t){case"focusin":return dt=qr(dt,e,t,r,l,n),!0;case"dragenter":return st=qr(st,e,t,r,l,n),!0;case"mouseover":return ct=qr(ct,e,t,r,l,n),!0;case"pointerover":var i=n.pointerId;return Xr.set(i,qr(Xr.get(i)||null,e,t,r,l,n)),!0;case"gotpointercapture":return i=n.pointerId,$r.set(i,qr($r.get(i)||null,e,t,r,l,n)),!0}return!1}function Ad(e){var t=Ct(e.target);if(t!==null){var r=Rt(t);if(r!==null){if(t=r.tag,t===13){if(t=hd(r),t!==null){e.blockedOn=t,xd(e.priority,function(){bd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Il(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ii(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Di=l,r.target.dispatchEvent(l),Di=null}else return t=sl(r),t!==null&&Sa(t),e.blockedOn=r,!1;t.shift()}return!0}function Au(e,t,r){Il(e)&&r.delete(t)}function p0(){Mi=!1,dt!==null&&Il(dt)&&(dt=null),st!==null&&Il(st)&&(st=null),ct!==null&&Il(ct)&&(ct=null),Xr.forEach(Au),$r.forEach(Au)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Mi||(Mi=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,p0)))}function Qr(e){function t(n){return xr(n,e)}if(0<wl.length){xr(wl[0],e);for(var r=1;r<wl.length;r++){var l=wl[r];l.blockedOn===e&&(l.blockedOn=null)}}for(dt!==null&&xr(dt,e),st!==null&&xr(st,e),ct!==null&&xr(ct,e),Xr.forEach(t),$r.forEach(t),r=0;r<nt.length;r++)l=nt[r],l.blockedOn===e&&(l.blockedOn=null);for(;0<nt.length&&(r=nt[0],r.blockedOn===null);)Ad(r),r.blockedOn===null&&nt.shift()}var lr=Ge.ReactCurrentBatchConfig,Kl=!0;function f0(e,t,r,l){var n=j,i=lr.transition;lr.transition=null;try{j=1,Ca(e,t,r,l)}finally{j=n,lr.transition=i}}function m0(e,t,r,l){var n=j,i=lr.transition;lr.transition=null;try{j=4,Ca(e,t,r,l)}finally{j=n,lr.transition=i}}function Ca(e,t,r,l){if(Kl){var n=Ii(e,t,r,l);if(n===null)ri(e,t,l,Zl,r),xu(e,l);else if(h0(n,e,t,r,l))l.stopPropagation();else if(xu(e,l),t&4&&-1<U0.indexOf(e)){for(;n!==null;){var i=sl(n);if(i!==null&&wd(i),i=Ii(e,t,r,l),i===null&&ri(e,t,l,Zl,r),i===n)break;n=i}n!==null&&l.stopPropagation()}else ri(e,t,l,null,r)}}var Zl=null;function Ii(e,t,r,l){if(Zl=null,e=qa(l),e=Ct(e),e!==null)if(t=Rt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=hd(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zl=e,null}function Sd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l0()){case xa:return 1;case gd:return 4;case Ql:case n0:return 16;case kd:return 536870912;default:return 16}default:return 16}}var at=null,Da=null,jl=null;function Cd(){if(jl)return jl;var e,t=Da,r=t.length,l,n="value"in at?at.value:at.textContent,i=n.length;for(e=0;e<r&&t[e]===n[e];e++);var a=r-e;for(l=1;l<=a&&t[r-l]===n[i-l];l++);return jl=n.slice(e,1<l?1-l:void 0)}function zl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function Su(){return!1}function be(e){function t(r,l,n,i,a){this._reactName=r,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(r=e[u],this[u]=r?r(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bl:Su,this.isPropagationStopped=Su,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pa=be(mr),dl=V({},mr,{view:0,detail:0}),g0=be(dl),Qn,Hn,Ar,vn=V({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(Qn=e.screenX-Ar.screenX,Hn=e.screenY-Ar.screenY):Hn=Qn=0,Ar=e),Qn)},movementY:function(e){return"movementY"in e?e.movementY:Hn}}),Cu=be(vn),k0=V({},vn,{dataTransfer:0}),v0=be(k0),y0=V({},dl,{relatedTarget:0}),Kn=be(y0),w0=V({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=be(w0),q0=V({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x0=be(q0),A0=V({},mr,{data:0}),Du=be(A0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=D0[e])?!!t[e]:!1}function Na(){return P0}var N0=V({},dl,{key:function(e){if(e.key){var t=S0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?C0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(e){return e.type==="keypress"?zl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E0=be(N0),L0=V({},vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=be(L0),M0=V({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),I0=be(M0),j0=V({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),z0=be(j0),W0=V({},vn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=be(W0),_0=[9,13,27,32],Ea=He&&"CompositionEvent"in window,jr=null;He&&"documentMode"in document&&(jr=document.documentMode);var T0=He&&"TextEvent"in window&&!jr,Dd=He&&(!Ea||jr&&8<jr&&11>=jr),Nu=" ",Eu=!1;function Pd(e,t){switch(e){case"keyup":return _0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bt=!1;function O0(e,t){switch(e){case"compositionend":return Nd(t);case"keypress":return t.which!==32?null:(Eu=!0,Nu);case"textInput":return e=t.data,e===Nu&&Eu?null:e;default:return null}}function V0(e,t){if(Bt)return e==="compositionend"||!Ea&&Pd(e,t)?(e=Cd(),jl=Da=at=null,Bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dd&&t.locale!=="ko"?null:t.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!F0[e.type]:t==="textarea"}function Ed(e,t,r,l){od(l),t=Jl(t,"onChange"),0<t.length&&(r=new Pa("onChange","change",null,r,l),e.push({event:r,listeners:t}))}var zr=null,Hr=null;function B0(e){Vd(e,0)}function yn(e){var t=Qt(e);if(td(t))return e}function X0(e,t){if(e==="change")return t}var Ld=!1;if(He){var Zn;if(He){var Jn="oninput"in document;if(!Jn){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),Jn=typeof Mu.oninput=="function"}Zn=Jn}else Zn=!1;Ld=Zn&&(!document.documentMode||9<document.documentMode)}function Iu(){zr&&(zr.detachEvent("onpropertychange",Md),Hr=zr=null)}function Md(e){if(e.propertyName==="value"&&yn(Hr)){var t=[];Ed(t,Hr,e,qa(e)),Ud(B0,t)}}function $0(e,t,r){e==="focusin"?(Iu(),zr=t,Hr=r,zr.attachEvent("onpropertychange",Md)):e==="focusout"&&Iu()}function Q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yn(Hr)}function H0(e,t){if(e==="click")return yn(t)}function K0(e,t){if(e==="input"||e==="change")return yn(t)}function Z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:Z0;function Kr(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),l=Object.keys(t);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var n=r[l];if(!mi.call(t,n)||!ze(e[n],t[n]))return!1}return!0}function ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,t){var r=ju(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=t&&l>=t)return{node:r,offset:t-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ju(r)}}function Id(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Id(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jd(){for(var e=window,t=Bl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Bl(e.document)}return t}function La(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function J0(e){var t=jd(),r=e.focusedElem,l=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Id(r.ownerDocument.documentElement,r)){if(l!==null&&La(r)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var n=r.textContent.length,i=Math.min(l.start,n);l=l.end===void 0?i:Math.min(l.end,n),!e.extend&&i>l&&(n=l,l=i,i=n),n=zu(r,i);var a=zu(r,l);n&&a&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(n.node,n.offset),e.removeAllRanges(),i>l?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var G0=He&&"documentMode"in document&&11>=document.documentMode,Xt=null,ji=null,Wr=null,zi=!1;function Wu(e,t,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;zi||Xt==null||Xt!==Bl(l)||(l=Xt,"selectionStart"in l&&La(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wr&&Kr(Wr,l)||(Wr=l,l=Jl(ji,"onSelect"),0<l.length&&(t=new Pa("onSelect","select",null,t,r),e.push({event:t,listeners:l}),t.target=Xt)))}function ql(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var $t={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},Gn={},zd={};He&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function wn(e){if(Gn[e])return Gn[e];if(!$t[e])return e;var t=$t[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in zd)return Gn[e]=t[r];return e}var Wd=wn("animationend"),Rd=wn("animationiteration"),_d=wn("animationstart"),Td=wn("transitionend"),Od=new Map,Ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){Od.set(e,t),Wt(t,[e])}for(var Yn=0;Yn<Ru.length;Yn++){var ei=Ru[Yn],Y0=ei.toLowerCase(),eU=ei[0].toUpperCase()+ei.slice(1);yt(Y0,"on"+eU)}yt(Wd,"onAnimationEnd");yt(Rd,"onAnimationIteration");yt(_d,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(Td,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tU=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function _u(e,t,r){var l=e.type||"unknown-event";e.currentTarget=r,Yc(l,t,void 0,e),e.currentTarget=null}function Vd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var a=l.length-1;0<=a;a--){var u=l[a],o=u.instance,d=u.currentTarget;if(u=u.listener,o!==i&&n.isPropagationStopped())break e;_u(n,u,d),i=o}else for(a=0;a<l.length;a++){if(u=l[a],o=u.instance,d=u.currentTarget,u=u.listener,o!==i&&n.isPropagationStopped())break e;_u(n,u,d),i=o}}}if($l)throw e=Ei,$l=!1,Ei=null,e}function W(e,t){var r=t[Oi];r===void 0&&(r=t[Oi]=new Set);var l=e+"__bubble";r.has(l)||(Fd(t,e,2,!1),r.add(l))}function ti(e,t,r){var l=0;t&&(l|=4),Fd(r,e,l,t)}var xl="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[xl]){e[xl]=!0,Zo.forEach(function(r){r!=="selectionchange"&&(tU.has(r)||ti(r,!1,e),ti(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xl]||(t[xl]=!0,ti("selectionchange",!1,t))}}function Fd(e,t,r,l){switch(Sd(t)){case 1:var n=f0;break;case 4:n=m0;break;default:n=Ca}r=n.bind(null,t,r,e),n=void 0,!Ni||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,r,{capture:!0,passive:n}):e.addEventListener(t,r,!0):n!==void 0?e.addEventListener(t,r,{passive:n}):e.addEventListener(t,r,!1)}function ri(e,t,r,l,n){var i=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var a=l.tag;if(a===3||a===4){var u=l.stateNode.containerInfo;if(u===n||u.nodeType===8&&u.parentNode===n)break;if(a===4)for(a=l.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===n||o.nodeType===8&&o.parentNode===n))return;a=a.return}for(;u!==null;){if(a=Ct(u),a===null)return;if(o=a.tag,o===5||o===6){l=i=a;continue e}u=u.parentNode}}l=l.return}Ud(function(){var d=i,m=qa(r),h=[];e:{var f=Od.get(e);if(f!==void 0){var g=Pa,v=e;switch(e){case"keypress":if(zl(r)===0)break e;case"keydown":case"keyup":g=E0;break;case"focusin":v="focus",g=Kn;break;case"focusout":v="blur",g=Kn;break;case"beforeblur":case"afterblur":g=Kn;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=v0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=I0;break;case Wd:case Rd:case _d:g=b0;break;case Td:g=z0;break;case"scroll":g=g0;break;case"wheel":g=R0;break;case"copy":case"cut":case"paste":g=x0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Pu}var y=(t&4)!==0,x=!y&&e==="scroll",U=y?f!==null?f+"Capture":null:f;y=[];for(var s=d,p;s!==null;){p=s;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,U!==null&&(k=Br(s,U),k!=null&&y.push(Jr(s,k,p)))),x)break;s=s.return}0<y.length&&(f=new g(f,v,null,r,m),h.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&r!==Di&&(v=r.relatedTarget||r.fromElement)&&(Ct(v)||v[Ke]))break e;if((g||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=r.relatedTarget||r.toElement,g=d,v=v?Ct(v):null,v!==null&&(x=Rt(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=d),g!==v)){if(y=Cu,k="onMouseLeave",U="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(y=Pu,k="onPointerLeave",U="onPointerEnter",s="pointer"),x=g==null?f:Qt(g),p=v==null?f:Qt(v),f=new y(k,s+"leave",g,r,m),f.target=x,f.relatedTarget=p,k=null,Ct(m)===d&&(y=new y(U,s+"enter",v,r,m),y.target=p,y.relatedTarget=x,k=y),x=k,g&&v)t:{for(y=g,U=v,s=0,p=y;p;p=Ot(p))s++;for(p=0,k=U;k;k=Ot(k))p++;for(;0<s-p;)y=Ot(y),s--;for(;0<p-s;)U=Ot(U),p--;for(;s--;){if(y===U||U!==null&&y===U.alternate)break t;y=Ot(y),U=Ot(U)}y=null}else y=null;g!==null&&Tu(h,f,g,y,!1),v!==null&&x!==null&&Tu(h,x,v,y,!0)}}e:{if(f=d?Qt(d):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var q=X0;else if(Lu(f))if(Ld)q=K0;else{q=Q0;var C=$0}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(q=H0);if(q&&(q=q(e,d))){Ed(h,q,r,m);break e}C&&C(e,f,d),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&qi(f,"number",f.value)}switch(C=d?Qt(d):window,e){case"focusin":(Lu(C)||C.contentEditable==="true")&&(Xt=C,ji=d,Wr=null);break;case"focusout":Wr=ji=Xt=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Wu(h,r,m);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":Wu(h,r,m)}var D;if(Ea)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Bt?Pd(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Dd&&r.locale!=="ko"&&(Bt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Bt&&(D=Cd()):(at=m,Da="value"in at?at.value:at.textContent,Bt=!0)),C=Jl(d,P),0<C.length&&(P=new Du(P,e,null,r,m),h.push({event:P,listeners:C}),D?P.data=D:(D=Nd(r),D!==null&&(P.data=D)))),(D=T0?O0(e,r):V0(e,r))&&(d=Jl(d,"onBeforeInput"),0<d.length&&(m=new Du("onBeforeInput","beforeinput",null,r,m),h.push({event:m,listeners:d}),m.data=D))}Vd(h,t)})}function Jr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Jl(e,t){for(var r=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;n.tag===5&&i!==null&&(n=i,i=Br(e,r),i!=null&&l.unshift(Jr(e,i,n)),i=Br(e,t),i!=null&&l.push(Jr(e,i,n))),e=e.return}return l}function Ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tu(e,t,r,l,n){for(var i=t._reactName,a=[];r!==null&&r!==l;){var u=r,o=u.alternate,d=u.stateNode;if(o!==null&&o===l)break;u.tag===5&&d!==null&&(u=d,n?(o=Br(r,i),o!=null&&a.unshift(Jr(r,o,u))):n||(o=Br(r,i),o!=null&&a.push(Jr(r,o,u)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var rU=/\r\n?/g,lU=/\u0000|\uFFFD/g;function Ou(e){return(typeof e=="string"?e:""+e).replace(rU,`
`).replace(lU,"")}function Al(e,t,r){if(t=Ou(t),Ou(e)!==t&&r)throw Error(w(425))}function Gl(){}var Wi=null,Ri=null;function _i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,nU=typeof clearTimeout=="function"?clearTimeout:void 0,Vu=typeof Promise=="function"?Promise:void 0,iU=typeof queueMicrotask=="function"?queueMicrotask:typeof Vu<"u"?function(e){return Vu.resolve(null).then(e).catch(aU)}:Ti;function aU(e){setTimeout(function(){throw e})}function li(e,t){var r=t,l=0;do{var n=r.nextSibling;if(e.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(l===0){e.removeChild(n),Qr(t);return}l--}else r!=="$"&&r!=="$?"&&r!=="$!"||l++;r=n}while(r);Qr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),_e="__reactFiber$"+gr,Gr="__reactProps$"+gr,Ke="__reactContainer$"+gr,Oi="__reactEvents$"+gr,uU="__reactListeners$"+gr,oU="__reactHandles$"+gr;function Ct(e){var t=e[_e];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ke]||r[_e]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Fu(e);e!==null;){if(r=e[_e])return r;e=Fu(e)}return t}e=r,r=e.parentNode}return null}function sl(e){return e=e[_e]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function bn(e){return e[Gr]||null}var Vi=[],Ht=-1;function wt(e){return{current:e}}function R(e){0>Ht||(e.current=Vi[Ht],Vi[Ht]=null,Ht--)}function z(e,t){Ht++,Vi[Ht]=e.current,e.current=t}var vt={},ue=wt(vt),pe=wt(!1),Lt=vt;function or(e,t){var r=e.type.contextTypes;if(!r)return vt;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var n={},i;for(i in r)n[i]=t[i];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=n),n}function fe(e){return e=e.childContextTypes,e!=null}function Yl(){R(pe),R(ue)}function Bu(e,t,r){if(ue.current!==vt)throw Error(w(168));z(ue,t),z(pe,r)}function Bd(e,t,r){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return r;l=l.getChildContext();for(var n in l)if(!(n in t))throw Error(w(108,$c(e)||"Unknown",n));return V({},r,l)}function en(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Lt=ue.current,z(ue,e),z(pe,pe.current),!0}function Xu(e,t,r){var l=e.stateNode;if(!l)throw Error(w(169));r?(e=Bd(e,t,Lt),l.__reactInternalMemoizedMergedChildContext=e,R(pe),R(ue),z(ue,e)):R(pe),z(pe,r)}var Be=null,qn=!1,ni=!1;function Xd(e){Be===null?Be=[e]:Be.push(e)}function dU(e){qn=!0,Xd(e)}function bt(){if(!ni&&Be!==null){ni=!0;var e=0,t=j;try{var r=Be;for(j=1;e<r.length;e++){var l=r[e];do l=l(!0);while(l!==null)}Be=null,qn=!1}catch(n){throw Be!==null&&(Be=Be.slice(e+1)),md(xa,bt),n}finally{j=t,ni=!1}}return null}var Kt=[],Zt=0,tn=null,rn=0,qe=[],xe=0,Mt=null,Xe=1,$e="";function At(e,t){Kt[Zt++]=rn,Kt[Zt++]=tn,tn=e,rn=t}function $d(e,t,r){qe[xe++]=Xe,qe[xe++]=$e,qe[xe++]=Mt,Mt=e;var l=Xe;e=$e;var n=32-Ie(l)-1;l&=~(1<<n),r+=1;var i=32-Ie(t)+n;if(30<i){var a=n-n%5;i=(l&(1<<a)-1).toString(32),l>>=a,n-=a,Xe=1<<32-Ie(t)+n|r<<n|l,$e=i+e}else Xe=1<<i|r<<n|l,$e=e}function Ma(e){e.return!==null&&(At(e,1),$d(e,1,0))}function Ia(e){for(;e===tn;)tn=Kt[--Zt],Kt[Zt]=null,rn=Kt[--Zt],Kt[Zt]=null;for(;e===Mt;)Mt=qe[--xe],qe[xe]=null,$e=qe[--xe],qe[xe]=null,Xe=qe[--xe],qe[xe]=null}var ve=null,ke=null,_=!1,Me=null;function Qd(e,t){var r=Ae(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function $u(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ke=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Mt!==null?{id:Xe,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ae(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ve=e,ke=null,!0):!1;default:return!1}}function Fi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(_){var t=ke;if(t){var r=t;if(!$u(e,t)){if(Fi(e))throw Error(w(418));t=Ut(r.nextSibling);var l=ve;t&&$u(e,t)?Qd(l,r):(e.flags=e.flags&-4097|2,_=!1,ve=e)}}else{if(Fi(e))throw Error(w(418));e.flags=e.flags&-4097|2,_=!1,ve=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function Sl(e){if(e!==ve)return!1;if(!_)return Qu(e),_=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_i(e.type,e.memoizedProps)),t&&(t=ke)){if(Fi(e))throw Hd(),Error(w(418));for(;t;)Qd(e,t),t=Ut(t.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ke=Ut(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=ve?Ut(e.stateNode.nextSibling):null;return!0}function Hd(){for(var e=ke;e;)e=Ut(e.nextSibling)}function dr(){ke=ve=null,_=!1}function ja(e){Me===null?Me=[e]:Me.push(e)}var sU=Ge.ReactCurrentBatchConfig;function Sr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(w(309));var l=r.stateNode}if(!l)throw Error(w(147,e));var n=l,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var u=n.refs;a===null?delete u[i]:u[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!r._owner)throw Error(w(290,e))}return e}function Cl(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hu(e){var t=e._init;return t(e._payload)}function Kd(e){function t(U,s){if(e){var p=U.deletions;p===null?(U.deletions=[s],U.flags|=16):p.push(s)}}function r(U,s){if(!e)return null;for(;s!==null;)t(U,s),s=s.sibling;return null}function l(U,s){for(U=new Map;s!==null;)s.key!==null?U.set(s.key,s):U.set(s.index,s),s=s.sibling;return U}function n(U,s){return U=mt(U,s),U.index=0,U.sibling=null,U}function i(U,s,p){return U.index=p,e?(p=U.alternate,p!==null?(p=p.index,p<s?(U.flags|=2,s):p):(U.flags|=2,s)):(U.flags|=1048576,s)}function a(U){return e&&U.alternate===null&&(U.flags|=2),U}function u(U,s,p,k){return s===null||s.tag!==6?(s=ci(p,U.mode,k),s.return=U,s):(s=n(s,p),s.return=U,s)}function o(U,s,p,k){var q=p.type;return q===Ft?m(U,s,p.props.children,k,p.key):s!==null&&(s.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===rt&&Hu(q)===s.type)?(k=n(s,p.props),k.ref=Sr(U,s,p),k.return=U,k):(k=Fl(p.type,p.key,p.props,null,U.mode,k),k.ref=Sr(U,s,p),k.return=U,k)}function d(U,s,p,k){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=Ui(p,U.mode,k),s.return=U,s):(s=n(s,p.children||[]),s.return=U,s)}function m(U,s,p,k,q){return s===null||s.tag!==7?(s=Et(p,U.mode,k,q),s.return=U,s):(s=n(s,p),s.return=U,s)}function h(U,s,p){if(typeof s=="string"&&s!==""||typeof s=="number")return s=ci(""+s,U.mode,p),s.return=U,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case ml:return p=Fl(s.type,s.key,s.props,null,U.mode,p),p.ref=Sr(U,null,s),p.return=U,p;case Vt:return s=Ui(s,U.mode,p),s.return=U,s;case rt:var k=s._init;return h(U,k(s._payload),p)}if(Nr(s)||wr(s))return s=Et(s,U.mode,p,null),s.return=U,s;Cl(U,s)}return null}function f(U,s,p,k){var q=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return q!==null?null:u(U,s,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ml:return p.key===q?o(U,s,p,k):null;case Vt:return p.key===q?d(U,s,p,k):null;case rt:return q=p._init,f(U,s,q(p._payload),k)}if(Nr(p)||wr(p))return q!==null?null:m(U,s,p,k,null);Cl(U,p)}return null}function g(U,s,p,k,q){if(typeof k=="string"&&k!==""||typeof k=="number")return U=U.get(p)||null,u(s,U,""+k,q);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ml:return U=U.get(k.key===null?p:k.key)||null,o(s,U,k,q);case Vt:return U=U.get(k.key===null?p:k.key)||null,d(s,U,k,q);case rt:var C=k._init;return g(U,s,p,C(k._payload),q)}if(Nr(k)||wr(k))return U=U.get(p)||null,m(s,U,k,q,null);Cl(s,k)}return null}function v(U,s,p,k){for(var q=null,C=null,D=s,P=s=0,B=null;D!==null&&P<p.length;P++){D.index>P?(B=D,D=null):B=D.sibling;var M=f(U,D,p[P],k);if(M===null){D===null&&(D=B);break}e&&D&&M.alternate===null&&t(U,D),s=i(M,s,P),C===null?q=M:C.sibling=M,C=M,D=B}if(P===p.length)return r(U,D),_&&At(U,P),q;if(D===null){for(;P<p.length;P++)D=h(U,p[P],k),D!==null&&(s=i(D,s,P),C===null?q=D:C.sibling=D,C=D);return _&&At(U,P),q}for(D=l(U,D);P<p.length;P++)B=g(D,U,P,p[P],k),B!==null&&(e&&B.alternate!==null&&D.delete(B.key===null?P:B.key),s=i(B,s,P),C===null?q=B:C.sibling=B,C=B);return e&&D.forEach(function(Pe){return t(U,Pe)}),_&&At(U,P),q}function y(U,s,p,k){var q=wr(p);if(typeof q!="function")throw Error(w(150));if(p=q.call(p),p==null)throw Error(w(151));for(var C=q=null,D=s,P=s=0,B=null,M=p.next();D!==null&&!M.done;P++,M=p.next()){D.index>P?(B=D,D=null):B=D.sibling;var Pe=f(U,D,M.value,k);if(Pe===null){D===null&&(D=B);break}e&&D&&Pe.alternate===null&&t(U,D),s=i(Pe,s,P),C===null?q=Pe:C.sibling=Pe,C=Pe,D=B}if(M.done)return r(U,D),_&&At(U,P),q;if(D===null){for(;!M.done;P++,M=p.next())M=h(U,M.value,k),M!==null&&(s=i(M,s,P),C===null?q=M:C.sibling=M,C=M);return _&&At(U,P),q}for(D=l(U,D);!M.done;P++,M=p.next())M=g(D,U,P,M.value,k),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?P:M.key),s=i(M,s,P),C===null?q=M:C.sibling=M,C=M);return e&&D.forEach(function(vr){return t(U,vr)}),_&&At(U,P),q}function x(U,s,p,k){if(typeof p=="object"&&p!==null&&p.type===Ft&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ml:e:{for(var q=p.key,C=s;C!==null;){if(C.key===q){if(q=p.type,q===Ft){if(C.tag===7){r(U,C.sibling),s=n(C,p.props.children),s.return=U,U=s;break e}}else if(C.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===rt&&Hu(q)===C.type){r(U,C.sibling),s=n(C,p.props),s.ref=Sr(U,C,p),s.return=U,U=s;break e}r(U,C);break}else t(U,C);C=C.sibling}p.type===Ft?(s=Et(p.props.children,U.mode,k,p.key),s.return=U,U=s):(k=Fl(p.type,p.key,p.props,null,U.mode,k),k.ref=Sr(U,s,p),k.return=U,U=k)}return a(U);case Vt:e:{for(C=p.key;s!==null;){if(s.key===C)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){r(U,s.sibling),s=n(s,p.children||[]),s.return=U,U=s;break e}else{r(U,s);break}else t(U,s);s=s.sibling}s=Ui(p,U.mode,k),s.return=U,U=s}return a(U);case rt:return C=p._init,x(U,s,C(p._payload),k)}if(Nr(p))return v(U,s,p,k);if(wr(p))return y(U,s,p,k);Cl(U,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,s!==null&&s.tag===6?(r(U,s.sibling),s=n(s,p),s.return=U,U=s):(r(U,s),s=ci(p,U.mode,k),s.return=U,U=s),a(U)):r(U,s)}return x}var sr=Kd(!0),Zd=Kd(!1),ln=wt(null),nn=null,Jt=null,za=null;function Wa(){za=Jt=nn=null}function Ra(e){var t=ln.current;R(ln),e._currentValue=t}function Xi(e,t,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===r)break;e=e.return}}function nr(e,t){nn=e,za=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(za!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(nn===null)throw Error(w(308));Jt=e,nn.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Dt=null;function _a(e){Dt===null?Dt=[e]:Dt.push(e)}function Jd(e,t,r,l){var n=t.interleaved;return n===null?(r.next=r,_a(t)):(r.next=n.next,n.next=r),t.interleaved=r,Ze(e,l)}function Ze(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var lt=!1;function Ta(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,I&2){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,Ze(e,r)}return n=l.interleaved,n===null?(t.next=t,_a(l)):(t.next=n.next,n.next=t),l.interleaved=t,Ze(e,r)}function Wl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,Aa(e,r)}}function Ku(e,t){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var n=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?n=i=a:i=i.next=a,r=r.next}while(r!==null);i===null?n=i=t:i=i.next=t}else n=i=t;r={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,effects:l.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function an(e,t,r,l){var n=e.updateQueue;lt=!1;var i=n.firstBaseUpdate,a=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var o=u,d=o.next;o.next=null,a===null?i=d:a.next=d,a=o;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==a&&(u===null?m.firstBaseUpdate=d:u.next=d,m.lastBaseUpdate=o))}if(i!==null){var h=n.baseState;a=0,m=d=o=null,u=i;do{var f=u.lane,g=u.eventTime;if((l&f)===f){m!==null&&(m=m.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var v=e,y=u;switch(f=t,g=r,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(g,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(g,h,f):v,f==null)break e;h=V({},h,f);break e;case 2:lt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,f=n.effects,f===null?n.effects=[u]:f.push(u))}else g={eventTime:g,lane:f,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(d=m=g,o=h):m=m.next=g,a|=f;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;f=u,u=f.next,f.next=null,n.lastBaseUpdate=f,n.shared.pending=null}}while(!0);if(m===null&&(o=h),n.baseState=o,n.firstBaseUpdate=d,n.lastBaseUpdate=m,t=n.shared.interleaved,t!==null){n=t;do a|=n.lane,n=n.next;while(n!==t)}else i===null&&(n.shared.lanes=0);jt|=a,e.lanes=a,e.memoizedState=h}}function Zu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],n=l.callback;if(n!==null){if(l.callback=null,l=r,typeof n!="function")throw Error(w(191,n));n.call(l)}}}var cl={},Oe=wt(cl),Yr=wt(cl),el=wt(cl);function Pt(e){if(e===cl)throw Error(w(174));return e}function Oa(e,t){switch(z(el,t),z(Yr,e),z(Oe,cl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ai(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ai(t,e)}R(Oe),z(Oe,t)}function cr(){R(Oe),R(Yr),R(el)}function Yd(e){Pt(el.current);var t=Pt(Oe.current),r=Ai(t,e.type);t!==r&&(z(Yr,e),z(Oe,r))}function Va(e){Yr.current===e&&(R(Oe),R(Yr))}var T=wt(0);function un(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ii=[];function Fa(){for(var e=0;e<ii.length;e++)ii[e]._workInProgressVersionPrimary=null;ii.length=0}var Rl=Ge.ReactCurrentDispatcher,ai=Ge.ReactCurrentBatchConfig,It=0,O=null,K=null,Y=null,on=!1,Rr=!1,tl=0,cU=0;function ne(){throw Error(w(321))}function Ba(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ze(e[r],t[r]))return!1;return!0}function Xa(e,t,r,l,n,i){if(It=i,O=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rl.current=e===null||e.memoizedState===null?fU:mU,e=r(l,n),Rr){i=0;do{if(Rr=!1,tl=0,25<=i)throw Error(w(301));i+=1,Y=K=null,t.updateQueue=null,Rl.current=gU,e=r(l,n)}while(Rr)}if(Rl.current=dn,t=K!==null&&K.next!==null,It=0,Y=K=O=null,on=!1,t)throw Error(w(300));return e}function $a(){var e=tl!==0;return tl=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?O.memoizedState=Y=e:Y=Y.next=e,Y}function De(){if(K===null){var e=O.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Y===null?O.memoizedState:Y.next;if(t!==null)Y=t,K=e;else{if(e===null)throw Error(w(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Y===null?O.memoizedState=Y=e:Y=Y.next=e}return Y}function rl(e,t){return typeof t=="function"?t(e):t}function ui(e){var t=De(),r=t.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=e;var l=K,n=l.baseQueue,i=r.pending;if(i!==null){if(n!==null){var a=n.next;n.next=i.next,i.next=a}l.baseQueue=n=i,r.pending=null}if(n!==null){i=n.next,l=l.baseState;var u=a=null,o=null,d=i;do{var m=d.lane;if((It&m)===m)o!==null&&(o=o.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var h={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};o===null?(u=o=h,a=l):o=o.next=h,O.lanes|=m,jt|=m}d=d.next}while(d!==null&&d!==i);o===null?a=l:o.next=u,ze(l,t.memoizedState)||(he=!0),t.memoizedState=l,t.baseState=a,t.baseQueue=o,r.lastRenderedState=l}if(e=r.interleaved,e!==null){n=e;do i=n.lane,O.lanes|=i,jt|=i,n=n.next;while(n!==e)}else n===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function oi(e){var t=De(),r=t.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=e;var l=r.dispatch,n=r.pending,i=t.memoizedState;if(n!==null){r.pending=null;var a=n=n.next;do i=e(i,a.action),a=a.next;while(a!==n);ze(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,l]}function es(){}function ts(e,t){var r=O,l=De(),n=t(),i=!ze(l.memoizedState,n);if(i&&(l.memoizedState=n,he=!0),l=l.queue,Qa(ns.bind(null,r,l,e),[e]),l.getSnapshot!==t||i||Y!==null&&Y.memoizedState.tag&1){if(r.flags|=2048,ll(9,ls.bind(null,r,l,n,t),void 0,null),ee===null)throw Error(w(349));It&30||rs(r,t,n)}return n}function rs(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=O.updateQueue,t===null?(t={lastEffect:null,stores:null},O.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ls(e,t,r,l){t.value=r,t.getSnapshot=l,is(t)&&as(e)}function ns(e,t,r){return r(function(){is(t)&&as(e)})}function is(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ze(e,r)}catch{return!0}}function as(e){var t=Ze(e,1);t!==null&&je(t,e,1,-1)}function Ju(e){var t=Re();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:e},t.queue=e,e=e.dispatch=pU.bind(null,O,e),[t.memoizedState,e]}function ll(e,t,r,l){return e={tag:e,create:t,destroy:r,deps:l,next:null},t=O.updateQueue,t===null?(t={lastEffect:null,stores:null},O.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,t.lastEffect=e)),e}function us(){return De().memoizedState}function _l(e,t,r,l){var n=Re();O.flags|=e,n.memoizedState=ll(1|t,r,void 0,l===void 0?null:l)}function xn(e,t,r,l){var n=De();l=l===void 0?null:l;var i=void 0;if(K!==null){var a=K.memoizedState;if(i=a.destroy,l!==null&&Ba(l,a.deps)){n.memoizedState=ll(t,r,i,l);return}}O.flags|=e,n.memoizedState=ll(1|t,r,i,l)}function Gu(e,t){return _l(8390656,8,e,t)}function Qa(e,t){return xn(2048,8,e,t)}function os(e,t){return xn(4,2,e,t)}function ds(e,t){return xn(4,4,e,t)}function ss(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cs(e,t,r){return r=r!=null?r.concat([e]):null,xn(4,4,ss.bind(null,t,e),r)}function Ha(){}function Us(e,t){var r=De();t=t===void 0?null:t;var l=r.memoizedState;return l!==null&&t!==null&&Ba(t,l[1])?l[0]:(r.memoizedState=[e,t],e)}function hs(e,t){var r=De();t=t===void 0?null:t;var l=r.memoizedState;return l!==null&&t!==null&&Ba(t,l[1])?l[0]:(e=e(),r.memoizedState=[e,t],e)}function ps(e,t,r){return It&21?(ze(r,t)||(r=vd(),O.lanes|=r,jt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=r)}function UU(e,t){var r=j;j=r!==0&&4>r?r:4,e(!0);var l=ai.transition;ai.transition={};try{e(!1),t()}finally{j=r,ai.transition=l}}function fs(){return De().memoizedState}function hU(e,t,r){var l=ft(e);if(r={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null},ms(e))gs(t,r);else if(r=Jd(e,t,r,l),r!==null){var n=de();je(r,e,l,n),ks(r,t,l)}}function pU(e,t,r){var l=ft(e),n={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null};if(ms(e))gs(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,u=i(a,r);if(n.hasEagerState=!0,n.eagerState=u,ze(u,a)){var o=t.interleaved;o===null?(n.next=n,_a(t)):(n.next=o.next,o.next=n),t.interleaved=n;return}}catch{}finally{}r=Jd(e,t,n,l),r!==null&&(n=de(),je(r,e,l,n),ks(r,t,l))}}function ms(e){var t=e.alternate;return e===O||t!==null&&t===O}function gs(e,t){Rr=on=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function ks(e,t,r){if(r&4194240){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,Aa(e,r)}}var dn={readContext:Ce,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},fU={readContext:Ce,useCallback:function(e,t){return Re().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Gu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,_l(4194308,4,ss.bind(null,t,e),r)},useLayoutEffect:function(e,t){return _l(4194308,4,e,t)},useInsertionEffect:function(e,t){return _l(4,2,e,t)},useMemo:function(e,t){var r=Re();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var l=Re();return t=r!==void 0?r(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=hU.bind(null,O,e),[l.memoizedState,e]},useRef:function(e){var t=Re();return e={current:e},t.memoizedState=e},useState:Ju,useDebugValue:Ha,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=Ju(!1),t=e[0];return e=UU.bind(null,e[1]),Re().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var l=O,n=Re();if(_){if(r===void 0)throw Error(w(407));r=r()}else{if(r=t(),ee===null)throw Error(w(349));It&30||rs(l,t,r)}n.memoizedState=r;var i={value:r,getSnapshot:t};return n.queue=i,Gu(ns.bind(null,l,i,e),[e]),l.flags|=2048,ll(9,ls.bind(null,l,i,r,t),void 0,null),r},useId:function(){var e=Re(),t=ee.identifierPrefix;if(_){var r=$e,l=Xe;r=(l&~(1<<32-Ie(l)-1)).toString(32)+r,t=":"+t+"R"+r,r=tl++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=cU++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mU={readContext:Ce,useCallback:Us,useContext:Ce,useEffect:Qa,useImperativeHandle:cs,useInsertionEffect:os,useLayoutEffect:ds,useMemo:hs,useReducer:ui,useRef:us,useState:function(){return ui(rl)},useDebugValue:Ha,useDeferredValue:function(e){var t=De();return ps(t,K.memoizedState,e)},useTransition:function(){var e=ui(rl)[0],t=De().memoizedState;return[e,t]},useMutableSource:es,useSyncExternalStore:ts,useId:fs,unstable_isNewReconciler:!1},gU={readContext:Ce,useCallback:Us,useContext:Ce,useEffect:Qa,useImperativeHandle:cs,useInsertionEffect:os,useLayoutEffect:ds,useMemo:hs,useReducer:oi,useRef:us,useState:function(){return oi(rl)},useDebugValue:Ha,useDeferredValue:function(e){var t=De();return K===null?t.memoizedState=e:ps(t,K.memoizedState,e)},useTransition:function(){var e=oi(rl)[0],t=De().memoizedState;return[e,t]},useMutableSource:es,useSyncExternalStore:ts,useId:fs,unstable_isNewReconciler:!1};function Ee(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function $i(e,t,r,l){t=e.memoizedState,r=r(l,t),r=r==null?t:V({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var An={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var l=de(),n=ft(e),i=Qe(l,n);i.payload=t,r!=null&&(i.callback=r),t=ht(e,i,n),t!==null&&(je(t,e,n,l),Wl(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var l=de(),n=ft(e),i=Qe(l,n);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=ht(e,i,n),t!==null&&(je(t,e,n,l),Wl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=de(),l=ft(e),n=Qe(r,l);n.tag=2,t!=null&&(n.callback=t),t=ht(e,n,l),t!==null&&(je(t,e,l,r),Wl(t,e,l))}};function Yu(e,t,r,l,n,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,a):t.prototype&&t.prototype.isPureReactComponent?!Kr(r,l)||!Kr(n,i):!0}function vs(e,t,r){var l=!1,n=vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ce(i):(n=fe(t)?Lt:ue.current,l=t.contextTypes,i=(l=l!=null)?or(e,n):vt),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=An,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),t}function eo(e,t,r,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,l),t.state!==e&&An.enqueueReplaceState(t,t.state,null)}function Qi(e,t,r,l){var n=e.stateNode;n.props=r,n.state=e.memoizedState,n.refs={},Ta(e);var i=t.contextType;typeof i=="object"&&i!==null?n.context=Ce(i):(i=fe(t)?Lt:ue.current,n.context=or(e,i)),n.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($i(e,t,i,r),n.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(t=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),t!==n.state&&An.enqueueReplaceState(n,n.state,null),an(e,r,n,l),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var r="",l=t;do r+=Xc(l),l=l.return;while(l);var n=r}catch(i){n=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:n,digest:null}}function di(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Hi(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var kU=typeof WeakMap=="function"?WeakMap:Map;function ys(e,t,r){r=Qe(-1,r),r.tag=3,r.payload={element:null};var l=t.value;return r.callback=function(){cn||(cn=!0,na=l),Hi(e,t)},r}function ws(e,t,r){r=Qe(-1,r),r.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var n=t.value;r.payload=function(){return l(n)},r.callback=function(){Hi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Hi(e,t),typeof l!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function to(e,t,r){var l=e.pingCache;if(l===null){l=e.pingCache=new kU;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(r)||(n.add(r),e=LU.bind(null,e,t,r),t.then(e,e))}function ro(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lo(e,t,r,l,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Qe(-1,1),t.tag=2,ht(r,t,1))),r.lanes|=1),e)}var vU=Ge.ReactCurrentOwner,he=!1;function oe(e,t,r,l){t.child=e===null?Zd(t,null,r,l):sr(t,e.child,r,l)}function no(e,t,r,l,n){r=r.render;var i=t.ref;return nr(t,n),l=Xa(e,t,r,l,i,n),r=$a(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,Je(e,t,n)):(_&&r&&Ma(t),t.flags|=1,oe(e,t,l,n),t.child)}function io(e,t,r,l,n){if(e===null){var i=r.type;return typeof i=="function"&&!ru(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,bs(e,t,i,l,n)):(e=Fl(r.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&n)){var a=i.memoizedProps;if(r=r.compare,r=r!==null?r:Kr,r(a,l)&&e.ref===t.ref)return Je(e,t,n)}return t.flags|=1,e=mt(i,l),e.ref=t.ref,e.return=t,t.child=e}function bs(e,t,r,l,n){if(e!==null){var i=e.memoizedProps;if(Kr(i,l)&&e.ref===t.ref)if(he=!1,t.pendingProps=l=i,(e.lanes&n)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Je(e,t,n)}return Ki(e,t,r,l,n)}function qs(e,t,r){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Yt,ge),ge|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Yt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=i!==null?i.baseLanes:r,z(Yt,ge),ge|=l}else i!==null?(l=i.baseLanes|r,t.memoizedState=null):l=r,z(Yt,ge),ge|=l;return oe(e,t,n,r),t.child}function xs(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ki(e,t,r,l,n){var i=fe(r)?Lt:ue.current;return i=or(t,i),nr(t,n),r=Xa(e,t,r,l,i,n),l=$a(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,Je(e,t,n)):(_&&l&&Ma(t),t.flags|=1,oe(e,t,r,n),t.child)}function ao(e,t,r,l,n){if(fe(r)){var i=!0;en(t)}else i=!1;if(nr(t,n),t.stateNode===null)Tl(e,t),vs(t,r,l),Qi(t,r,l,n),l=!0;else if(e===null){var a=t.stateNode,u=t.memoizedProps;a.props=u;var o=a.context,d=r.contextType;typeof d=="object"&&d!==null?d=Ce(d):(d=fe(r)?Lt:ue.current,d=or(t,d));var m=r.getDerivedStateFromProps,h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==l||o!==d)&&eo(t,a,l,d),lt=!1;var f=t.memoizedState;a.state=f,an(t,l,a,n),o=t.memoizedState,u!==l||f!==o||pe.current||lt?(typeof m=="function"&&($i(t,r,m,l),o=t.memoizedState),(u=lt||Yu(t,r,u,l,f,o,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=o),a.props=l,a.state=o,a.context=d,l=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{a=t.stateNode,Gd(e,t),u=t.memoizedProps,d=t.type===t.elementType?u:Ee(t.type,u),a.props=d,h=t.pendingProps,f=a.context,o=r.contextType,typeof o=="object"&&o!==null?o=Ce(o):(o=fe(r)?Lt:ue.current,o=or(t,o));var g=r.getDerivedStateFromProps;(m=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==h||f!==o)&&eo(t,a,l,o),lt=!1,f=t.memoizedState,a.state=f,an(t,l,a,n);var v=t.memoizedState;u!==h||f!==v||pe.current||lt?(typeof g=="function"&&($i(t,r,g,l),v=t.memoizedState),(d=lt||Yu(t,r,d,l,f,v,o)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,v,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,v,o)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),a.props=l,a.state=v,a.context=o,l=d):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),l=!1)}return Zi(e,t,r,l,i,n)}function Zi(e,t,r,l,n,i){xs(e,t);var a=(t.flags&128)!==0;if(!l&&!a)return n&&Xu(t,r,!1),Je(e,t,i);l=t.stateNode,vU.current=t;var u=a&&typeof r.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&a?(t.child=sr(t,e.child,null,i),t.child=sr(t,null,u,i)):oe(e,t,u,i),t.memoizedState=l.state,n&&Xu(t,r,!0),t.child}function As(e){var t=e.stateNode;t.pendingContext?Bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bu(e,t.context,!1),Oa(e,t.containerInfo)}function uo(e,t,r,l,n){return dr(),ja(n),t.flags|=256,oe(e,t,r,l),t.child}var Ji={dehydrated:null,treeContext:null,retryLane:0};function Gi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ss(e,t,r){var l=t.pendingProps,n=T.current,i=!1,a=(t.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(n&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),z(T,n&1),e===null)return Bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=l.children,e=l.fallback,i?(l=t.mode,i=t.child,a={mode:"hidden",children:a},!(l&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Dn(a,l,0,null),e=Et(e,l,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Gi(r),t.memoizedState=Ji,e):Ka(t,a));if(n=e.memoizedState,n!==null&&(u=n.dehydrated,u!==null))return yU(e,t,a,l,u,n,r);if(i){i=l.fallback,a=t.mode,n=e.child,u=n.sibling;var o={mode:"hidden",children:l.children};return!(a&1)&&t.child!==n?(l=t.child,l.childLanes=0,l.pendingProps=o,t.deletions=null):(l=mt(n,o),l.subtreeFlags=n.subtreeFlags&14680064),u!==null?i=mt(u,i):(i=Et(i,a,r,null),i.flags|=2),i.return=t,l.return=t,l.sibling=i,t.child=l,l=i,i=t.child,a=e.child.memoizedState,a=a===null?Gi(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~r,t.memoizedState=Ji,l}return i=e.child,e=i.sibling,l=mt(i,{mode:"visible",children:l.children}),!(t.mode&1)&&(l.lanes=r),l.return=t,l.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=l,t.memoizedState=null,l}function Ka(e,t){return t=Dn({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dl(e,t,r,l){return l!==null&&ja(l),sr(t,e.child,null,r),e=Ka(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yU(e,t,r,l,n,i,a){if(r)return t.flags&256?(t.flags&=-257,l=di(Error(w(422))),Dl(e,t,a,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=l.fallback,n=t.mode,l=Dn({mode:"visible",children:l.children},n,0,null),i=Et(i,n,a,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,t.mode&1&&sr(t,e.child,null,a),t.child.memoizedState=Gi(a),t.memoizedState=Ji,i);if(!(t.mode&1))return Dl(e,t,a,null);if(n.data==="$!"){if(l=n.nextSibling&&n.nextSibling.dataset,l)var u=l.dgst;return l=u,i=Error(w(419)),l=di(i,l,void 0),Dl(e,t,a,l)}if(u=(a&e.childLanes)!==0,he||u){if(l=ee,l!==null){switch(a&-a){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(l.suspendedLanes|a)?0:n,n!==0&&n!==i.retryLane&&(i.retryLane=n,Ze(e,n),je(l,e,n,-1))}return tu(),l=di(Error(w(421))),Dl(e,t,a,l)}return n.data==="$?"?(t.flags|=128,t.child=e.child,t=MU.bind(null,e),n._reactRetry=t,null):(e=i.treeContext,ke=Ut(n.nextSibling),ve=t,_=!0,Me=null,e!==null&&(qe[xe++]=Xe,qe[xe++]=$e,qe[xe++]=Mt,Xe=e.id,$e=e.overflow,Mt=t),t=Ka(t,l.children),t.flags|=4096,t)}function oo(e,t,r){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Xi(e.return,t,r)}function si(e,t,r,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=r,i.tailMode=n)}function Cs(e,t,r){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(oe(e,t,l.children,r),l=T.current,l&2)l=l&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oo(e,r,t);else if(e.tag===19)oo(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(z(T,l),!(t.mode&1))t.memoizedState=null;else switch(n){case"forwards":for(r=t.child,n=null;r!==null;)e=r.alternate,e!==null&&un(e)===null&&(n=r),r=r.sibling;r=n,r===null?(n=t.child,t.child=null):(n=r.sibling,r.sibling=null),si(t,!1,n,r,i);break;case"backwards":for(r=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&un(e)===null){t.child=n;break}e=n.sibling,n.sibling=r,r=n,n=e}si(t,!0,r,null,i);break;case"together":si(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),jt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,r=mt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=mt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function wU(e,t,r){switch(t.tag){case 3:As(t),dr();break;case 5:Yd(t);break;case 1:fe(t.type)&&en(t);break;case 4:Oa(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,n=t.memoizedProps.value;z(ln,l._currentValue),l._currentValue=n;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(z(T,T.current&1),t.flags|=128,null):r&t.child.childLanes?Ss(e,t,r):(z(T,T.current&1),e=Je(e,t,r),e!==null?e.sibling:null);z(T,T.current&1);break;case 19:if(l=(r&t.childLanes)!==0,e.flags&128){if(l)return Cs(e,t,r);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),z(T,T.current),l)break;return null;case 22:case 23:return t.lanes=0,qs(e,t,r)}return Je(e,t,r)}var Ds,Yi,Ps,Ns;Ds=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Yi=function(){};Ps=function(e,t,r,l){var n=e.memoizedProps;if(n!==l){e=t.stateNode,Pt(Oe.current);var i=null;switch(r){case"input":n=wi(e,n),l=wi(e,l),i=[];break;case"select":n=V({},n,{value:void 0}),l=V({},l,{value:void 0}),i=[];break;case"textarea":n=xi(e,n),l=xi(e,l),i=[];break;default:typeof n.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Gl)}Si(r,l);var a;r=null;for(d in n)if(!l.hasOwnProperty(d)&&n.hasOwnProperty(d)&&n[d]!=null)if(d==="style"){var u=n[d];for(a in u)u.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in l){var o=l[d];if(u=n!=null?n[d]:void 0,l.hasOwnProperty(d)&&o!==u&&(o!=null||u!=null))if(d==="style")if(u){for(a in u)!u.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in o)o.hasOwnProperty(a)&&u[a]!==o[a]&&(r||(r={}),r[a]=o[a])}else r||(i||(i=[]),i.push(d,r)),r=o;else d==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,u=u?u.__html:void 0,o!=null&&u!==o&&(i=i||[]).push(d,o)):d==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(d,""+o):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(d)?(o!=null&&d==="onScroll"&&W("scroll",e),i||u===o||(i=[])):(i=i||[]).push(d,o))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Ns=function(e,t,r,l){r!==l&&(t.flags|=4)};function Cr(e,t){if(!_)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(t)for(var n=e.child;n!==null;)r|=n.lanes|n.childLanes,l|=n.subtreeFlags&14680064,l|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)r|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=r,t}function bU(e,t,r){var l=t.pendingProps;switch(Ia(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return fe(t.type)&&Yl(),ie(t),null;case 3:return l=t.stateNode,cr(),R(pe),R(ue),Fa(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Sl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(ua(Me),Me=null))),Yi(e,t),ie(t),null;case 5:Va(t);var n=Pt(el.current);if(r=t.type,e!==null&&t.stateNode!=null)Ps(e,t,r,l,n),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(w(166));return ie(t),null}if(e=Pt(Oe.current),Sl(t)){l=t.stateNode,r=t.type;var i=t.memoizedProps;switch(l[_e]=t,l[Gr]=i,e=(t.mode&1)!==0,r){case"dialog":W("cancel",l),W("close",l);break;case"iframe":case"object":case"embed":W("load",l);break;case"video":case"audio":for(n=0;n<Lr.length;n++)W(Lr[n],l);break;case"source":W("error",l);break;case"img":case"image":case"link":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"input":gu(l,i),W("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!i.multiple},W("invalid",l);break;case"textarea":vu(l,i),W("invalid",l)}Si(r,i),n=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?l.textContent!==u&&(i.suppressHydrationWarning!==!0&&Al(l.textContent,u,e),n=["children",u]):typeof u=="number"&&l.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Al(l.textContent,u,e),n=["children",""+u]):Vr.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&W("scroll",l)}switch(r){case"input":gl(l),ku(l,i,!0);break;case"textarea":gl(l),yu(l);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(l.onclick=Gl)}l=n,t.updateQueue=l,l!==null&&(t.flags|=4)}else{a=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nd(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=a.createElement(r,{is:l.is}):(e=a.createElement(r),r==="select"&&(a=e,l.multiple?a.multiple=!0:l.size&&(a.size=l.size))):e=a.createElementNS(e,r),e[_e]=t,e[Gr]=l,Ds(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ci(r,l),r){case"dialog":W("cancel",e),W("close",e),n=l;break;case"iframe":case"object":case"embed":W("load",e),n=l;break;case"video":case"audio":for(n=0;n<Lr.length;n++)W(Lr[n],e);n=l;break;case"source":W("error",e),n=l;break;case"img":case"image":case"link":W("error",e),W("load",e),n=l;break;case"details":W("toggle",e),n=l;break;case"input":gu(e,l),n=wi(e,l),W("invalid",e);break;case"option":n=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},n=V({},l,{value:void 0}),W("invalid",e);break;case"textarea":vu(e,l),n=xi(e,l),W("invalid",e);break;default:n=l}Si(r,n),u=n;for(i in u)if(u.hasOwnProperty(i)){var o=u[i];i==="style"?ud(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&id(e,o)):i==="children"?typeof o=="string"?(r!=="textarea"||o!=="")&&Fr(e,o):typeof o=="number"&&Fr(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vr.hasOwnProperty(i)?o!=null&&i==="onScroll"&&W("scroll",e):o!=null&&va(e,i,o,a))}switch(r){case"input":gl(e),ku(e,l,!1);break;case"textarea":gl(e),yu(e);break;case"option":l.value!=null&&e.setAttribute("value",""+kt(l.value));break;case"select":e.multiple=!!l.multiple,i=l.value,i!=null?er(e,!!l.multiple,i,!1):l.defaultValue!=null&&er(e,!!l.multiple,l.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=Gl)}switch(r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Ns(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(w(166));if(r=Pt(el.current),Pt(Oe.current),Sl(t)){if(l=t.stateNode,r=t.memoizedProps,l[_e]=t,(i=l.nodeValue!==r)&&(e=ve,e!==null))switch(e.tag){case 3:Al(l.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Al(l.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else l=(r.nodeType===9?r:r.ownerDocument).createTextNode(l),l[_e]=t,t.stateNode=l}return ie(t),null;case 13:if(R(T),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_&&ke!==null&&t.mode&1&&!(t.flags&128))Hd(),dr(),t.flags|=98560,i=!1;else if(i=Sl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[_e]=t}else dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Me!==null&&(ua(Me),Me=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,t.mode&1&&(e===null||T.current&1?J===0&&(J=3):tu())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return cr(),Yi(e,t),e===null&&Zr(t.stateNode.containerInfo),ie(t),null;case 10:return Ra(t.type._context),ie(t),null;case 17:return fe(t.type)&&Yl(),ie(t),null;case 19:if(R(T),i=t.memoizedState,i===null)return ie(t),null;if(l=(t.flags&128)!==0,a=i.rendering,a===null)if(l)Cr(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=un(e),a!==null){for(t.flags|=128,Cr(i,!1),l=a.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=r,r=t.child;r!==null;)i=r,e=l,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return z(T,T.current&1|2),t.child}e=e.sibling}i.tail!==null&&$()>hr&&(t.flags|=128,l=!0,Cr(i,!1),t.lanes=4194304)}else{if(!l)if(e=un(a),e!==null){if(t.flags|=128,l=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!_)return ie(t),null}else 2*$()-i.renderingStartTime>hr&&r!==1073741824&&(t.flags|=128,l=!0,Cr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(r=i.last,r!==null?r.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=$(),t.sibling=null,r=T.current,z(T,l?r&1|2:r&1),t):(ie(t),null);case 22:case 23:return eu(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&t.mode&1?ge&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function qU(e,t){switch(Ia(t),t.tag){case 1:return fe(t.type)&&Yl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),R(pe),R(ue),Fa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Va(t),null;case 13:if(R(T),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(T),null;case 4:return cr(),null;case 10:return Ra(t.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var Pl=!1,ae=!1,xU=typeof WeakSet=="function"?WeakSet:Set,A=null;function Gt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(l){F(e,t,l)}else r.current=null}function ea(e,t,r){try{r()}catch(l){F(e,t,l)}}var so=!1;function AU(e,t){if(Wi=Kl,e=jd(),La(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var a=0,u=-1,o=-1,d=0,m=0,h=e,f=null;t:for(;;){for(var g;h!==r||n!==0&&h.nodeType!==3||(u=a+n),h!==i||l!==0&&h.nodeType!==3||(o=a+l),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===e)break t;if(f===r&&++d===n&&(u=a),f===i&&++m===l&&(o=a),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}r=u===-1||o===-1?null:{start:u,end:o}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ri={focusedElem:e,selectionRange:r},Kl=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,U=t.stateNode,s=U.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ee(t.type,y),x);U.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(k){F(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=so,so=!1,v}function _r(e,t,r){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var n=l=l.next;do{if((n.tag&e)===e){var i=n.destroy;n.destroy=void 0,i!==void 0&&ea(t,r,i)}n=n.next}while(n!==l)}}function Sn(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var l=r.create;r.destroy=l()}r=r.next}while(r!==t)}}function ta(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Es(e){var t=e.alternate;t!==null&&(e.alternate=null,Es(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_e],delete t[Gr],delete t[Oi],delete t[uU],delete t[oU])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ls(e){return e.tag===5||e.tag===3||e.tag===4}function co(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ls(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ra(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Gl));else if(l!==4&&(e=e.child,e!==null))for(ra(e,t,r),e=e.sibling;e!==null;)ra(e,t,r),e=e.sibling}function la(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(la(e,t,r),e=e.sibling;e!==null;)la(e,t,r),e=e.sibling}var te=null,Le=!1;function et(e,t,r){for(r=r.child;r!==null;)Ms(e,t,r),r=r.sibling}function Ms(e,t,r){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(kn,r)}catch{}switch(r.tag){case 5:ae||Gt(r,t);case 6:var l=te,n=Le;te=null,et(e,t,r),te=l,Le=n,te!==null&&(Le?(e=te,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):te.removeChild(r.stateNode));break;case 18:te!==null&&(Le?(e=te,r=r.stateNode,e.nodeType===8?li(e.parentNode,r):e.nodeType===1&&li(e,r),Qr(e)):li(te,r.stateNode));break;case 4:l=te,n=Le,te=r.stateNode.containerInfo,Le=!0,et(e,t,r),te=l,Le=n;break;case 0:case 11:case 14:case 15:if(!ae&&(l=r.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){n=l=l.next;do{var i=n,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ea(r,t,a),n=n.next}while(n!==l)}et(e,t,r);break;case 1:if(!ae&&(Gt(r,t),l=r.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=r.memoizedProps,l.state=r.memoizedState,l.componentWillUnmount()}catch(u){F(r,t,u)}et(e,t,r);break;case 21:et(e,t,r);break;case 22:r.mode&1?(ae=(l=ae)||r.memoizedState!==null,et(e,t,r),ae=l):et(e,t,r);break;default:et(e,t,r)}}function Uo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new xU),t.forEach(function(l){var n=IU.bind(null,e,l);r.has(l)||(r.add(l),l.then(n,n))})}}function Ne(e,t){var r=t.deletions;if(r!==null)for(var l=0;l<r.length;l++){var n=r[l];try{var i=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 5:te=u.stateNode,Le=!1;break e;case 3:te=u.stateNode.containerInfo,Le=!0;break e;case 4:te=u.stateNode.containerInfo,Le=!0;break e}u=u.return}if(te===null)throw Error(w(160));Ms(i,a,n),te=null,Le=!1;var o=n.alternate;o!==null&&(o.return=null),n.return=null}catch(d){F(n,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Is(t,e),t=t.sibling}function Is(e,t){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(t,e),We(e),l&4){try{_r(3,e,e.return),Sn(3,e)}catch(y){F(e,e.return,y)}try{_r(5,e,e.return)}catch(y){F(e,e.return,y)}}break;case 1:Ne(t,e),We(e),l&512&&r!==null&&Gt(r,r.return);break;case 5:if(Ne(t,e),We(e),l&512&&r!==null&&Gt(r,r.return),e.flags&32){var n=e.stateNode;try{Fr(n,"")}catch(y){F(e,e.return,y)}}if(l&4&&(n=e.stateNode,n!=null)){var i=e.memoizedProps,a=r!==null?r.memoizedProps:i,u=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&rd(n,i),Ci(u,a);var d=Ci(u,i);for(a=0;a<o.length;a+=2){var m=o[a],h=o[a+1];m==="style"?ud(n,h):m==="dangerouslySetInnerHTML"?id(n,h):m==="children"?Fr(n,h):va(n,m,h,d)}switch(u){case"input":bi(n,i);break;case"textarea":ld(n,i);break;case"select":var f=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?er(n,!!i.multiple,g,!1):f!==!!i.multiple&&(i.defaultValue!=null?er(n,!!i.multiple,i.defaultValue,!0):er(n,!!i.multiple,i.multiple?[]:"",!1))}n[Gr]=i}catch(y){F(e,e.return,y)}}break;case 6:if(Ne(t,e),We(e),l&4){if(e.stateNode===null)throw Error(w(162));n=e.stateNode,i=e.memoizedProps;try{n.nodeValue=i}catch(y){F(e,e.return,y)}}break;case 3:if(Ne(t,e),We(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(y){F(e,e.return,y)}break;case 4:Ne(t,e),We(e);break;case 13:Ne(t,e),We(e),n=e.child,n.flags&8192&&(i=n.memoizedState!==null,n.stateNode.isHidden=i,!i||n.alternate!==null&&n.alternate.memoizedState!==null||(Ga=$())),l&4&&Uo(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(ae=(d=ae)||m,Ne(t,e),ae=d):Ne(t,e),We(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(A=e,m=e.child;m!==null;){for(h=A=m;A!==null;){switch(f=A,g=f.child,f.tag){case 0:case 11:case 14:case 15:_r(4,f,f.return);break;case 1:Gt(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){l=f,r=f.return;try{t=l,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){F(l,r,y)}}break;case 5:Gt(f,f.return);break;case 22:if(f.memoizedState!==null){po(h);continue}}g!==null?(g.return=f,A=g):po(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{n=h.stateNode,d?(i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=h.stateNode,o=h.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,u.style.display=ad("display",a))}catch(y){F(e,e.return,y)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){F(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ne(t,e),We(e),l&4&&Uo(e);break;case 21:break;default:Ne(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ls(r)){var l=r;break e}r=r.return}throw Error(w(160))}switch(l.tag){case 5:var n=l.stateNode;l.flags&32&&(Fr(n,""),l.flags&=-33);var i=co(e);la(e,i,n);break;case 3:case 4:var a=l.stateNode.containerInfo,u=co(e);ra(e,u,a);break;default:throw Error(w(161))}}catch(o){F(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function SU(e,t,r){A=e,js(e)}function js(e,t,r){for(var l=(e.mode&1)!==0;A!==null;){var n=A,i=n.child;if(n.tag===22&&l){var a=n.memoizedState!==null||Pl;if(!a){var u=n.alternate,o=u!==null&&u.memoizedState!==null||ae;u=Pl;var d=ae;if(Pl=a,(ae=o)&&!d)for(A=n;A!==null;)a=A,o=a.child,a.tag===22&&a.memoizedState!==null?fo(n):o!==null?(o.return=a,A=o):fo(n);for(;i!==null;)A=i,js(i),i=i.sibling;A=n,Pl=u,ae=d}ho(e)}else n.subtreeFlags&8772&&i!==null?(i.return=n,A=i):ho(e)}}function ho(e){for(;A!==null;){var t=A;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Sn(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!ae)if(r===null)l.componentDidMount();else{var n=t.elementType===t.type?r.memoizedProps:Ee(t.type,r.memoizedProps);l.componentDidUpdate(n,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zu(t,i,l);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Zu(t,a,r)}break;case 5:var u=t.stateNode;if(r===null&&t.flags&4){r=u;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src&&(r.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Qr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ae||t.flags&512&&ta(t)}catch(f){F(t,t.return,f)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function po(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function fo(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Sn(4,t)}catch(o){F(t,r,o)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var n=t.return;try{l.componentDidMount()}catch(o){F(t,n,o)}}var i=t.return;try{ta(t)}catch(o){F(t,i,o)}break;case 5:var a=t.return;try{ta(t)}catch(o){F(t,a,o)}}}catch(o){F(t,t.return,o)}if(t===e){A=null;break}var u=t.sibling;if(u!==null){u.return=t.return,A=u;break}A=t.return}}var CU=Math.ceil,sn=Ge.ReactCurrentDispatcher,Za=Ge.ReactCurrentOwner,Se=Ge.ReactCurrentBatchConfig,I=0,ee=null,Q=null,re=0,ge=0,Yt=wt(0),J=0,nl=null,jt=0,Cn=0,Ja=0,Tr=null,Ue=null,Ga=0,hr=1/0,Fe=null,cn=!1,na=null,pt=null,Nl=!1,ut=null,Un=0,Or=0,ia=null,Ol=-1,Vl=0;function de(){return I&6?$():Ol!==-1?Ol:Ol=$()}function ft(e){return e.mode&1?I&2&&re!==0?re&-re:sU.transition!==null?(Vl===0&&(Vl=vd()),Vl):(e=j,e!==0||(e=window.event,e=e===void 0?16:Sd(e.type)),e):1}function je(e,t,r,l){if(50<Or)throw Or=0,ia=null,Error(w(185));ol(e,r,l),(!(I&2)||e!==ee)&&(e===ee&&(!(I&2)&&(Cn|=r),J===4&&it(e,re)),me(e,l),r===1&&I===0&&!(t.mode&1)&&(hr=$()+500,qn&&bt()))}function me(e,t){var r=e.callbackNode;s0(e,t);var l=Hl(e,e===ee?re:0);if(l===0)r!==null&&qu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(r!=null&&qu(r),t===1)e.tag===0?dU(mo.bind(null,e)):Xd(mo.bind(null,e)),iU(function(){!(I&6)&&bt()}),r=null;else{switch(yd(l)){case 1:r=xa;break;case 4:r=gd;break;case 16:r=Ql;break;case 536870912:r=kd;break;default:r=Ql}r=Fs(r,zs.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function zs(e,t){if(Ol=-1,Vl=0,I&6)throw Error(w(327));var r=e.callbackNode;if(ir()&&e.callbackNode!==r)return null;var l=Hl(e,e===ee?re:0);if(l===0)return null;if(l&30||l&e.expiredLanes||t)t=hn(e,l);else{t=l;var n=I;I|=2;var i=Rs();(ee!==e||re!==t)&&(Fe=null,hr=$()+500,Nt(e,t));do try{NU();break}catch(u){Ws(e,u)}while(!0);Wa(),sn.current=i,I=n,Q!==null?t=0:(ee=null,re=0,t=J)}if(t!==0){if(t===2&&(n=Li(e),n!==0&&(l=n,t=aa(e,n))),t===1)throw r=nl,Nt(e,0),it(e,l),me(e,$()),r;if(t===6)it(e,l);else{if(n=e.current.alternate,!(l&30)&&!DU(n)&&(t=hn(e,l),t===2&&(i=Li(e),i!==0&&(l=i,t=aa(e,i))),t===1))throw r=nl,Nt(e,0),it(e,l),me(e,$()),r;switch(e.finishedWork=n,e.finishedLanes=l,t){case 0:case 1:throw Error(w(345));case 2:St(e,Ue,Fe);break;case 3:if(it(e,l),(l&130023424)===l&&(t=Ga+500-$(),10<t)){if(Hl(e,0)!==0)break;if(n=e.suspendedLanes,(n&l)!==l){de(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=Ti(St.bind(null,e,Ue,Fe),t);break}St(e,Ue,Fe);break;case 4:if(it(e,l),(l&4194240)===l)break;for(t=e.eventTimes,n=-1;0<l;){var a=31-Ie(l);i=1<<a,a=t[a],a>n&&(n=a),l&=~i}if(l=n,l=$()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*CU(l/1960))-l,10<l){e.timeoutHandle=Ti(St.bind(null,e,Ue,Fe),l);break}St(e,Ue,Fe);break;case 5:St(e,Ue,Fe);break;default:throw Error(w(329))}}}return me(e,$()),e.callbackNode===r?zs.bind(null,e):null}function aa(e,t){var r=Tr;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=hn(e,t),e!==2&&(t=Ue,Ue=r,t!==null&&ua(t)),e}function ua(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function DU(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var l=0;l<r.length;l++){var n=r[l],i=n.getSnapshot;n=n.value;try{if(!ze(i(),n))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Ja,t&=~Cn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ie(t),l=1<<r;e[r]=-1,t&=~l}}function mo(e){if(I&6)throw Error(w(327));ir();var t=Hl(e,0);if(!(t&1))return me(e,$()),null;var r=hn(e,t);if(e.tag!==0&&r===2){var l=Li(e);l!==0&&(t=l,r=aa(e,l))}if(r===1)throw r=nl,Nt(e,0),it(e,t),me(e,$()),r;if(r===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,Ue,Fe),me(e,$()),null}function Ya(e,t){var r=I;I|=1;try{return e(t)}finally{I=r,I===0&&(hr=$()+500,qn&&bt())}}function zt(e){ut!==null&&ut.tag===0&&!(I&6)&&ir();var t=I;I|=1;var r=Se.transition,l=j;try{if(Se.transition=null,j=1,e)return e()}finally{j=l,Se.transition=r,I=t,!(I&6)&&bt()}}function eu(){ge=Yt.current,R(Yt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,nU(r)),Q!==null)for(r=Q.return;r!==null;){var l=r;switch(Ia(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Yl();break;case 3:cr(),R(pe),R(ue),Fa();break;case 5:Va(l);break;case 4:cr();break;case 13:R(T);break;case 19:R(T);break;case 10:Ra(l.type._context);break;case 22:case 23:eu()}r=r.return}if(ee=e,Q=e=mt(e.current,null),re=ge=t,J=0,nl=null,Ja=Cn=jt=0,Ue=Tr=null,Dt!==null){for(t=0;t<Dt.length;t++)if(r=Dt[t],l=r.interleaved,l!==null){r.interleaved=null;var n=l.next,i=r.pending;if(i!==null){var a=i.next;i.next=n,l.next=a}r.pending=l}Dt=null}return e}function Ws(e,t){do{var r=Q;try{if(Wa(),Rl.current=dn,on){for(var l=O.memoizedState;l!==null;){var n=l.queue;n!==null&&(n.pending=null),l=l.next}on=!1}if(It=0,Y=K=O=null,Rr=!1,tl=0,Za.current=null,r===null||r.return===null){J=1,nl=t,Q=null;break}e:{var i=e,a=r.return,u=r,o=t;if(t=re,u.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=o,m=u,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=ro(a);if(g!==null){g.flags&=-257,lo(g,a,u,i,t),g.mode&1&&to(i,d,t),t=g,o=d;var v=t.updateQueue;if(v===null){var y=new Set;y.add(o),t.updateQueue=y}else v.add(o);break e}else{if(!(t&1)){to(i,d,t),tu();break e}o=Error(w(426))}}else if(_&&u.mode&1){var x=ro(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),lo(x,a,u,i,t),ja(Ur(o,u));break e}}i=o=Ur(o,u),J!==4&&(J=2),Tr===null?Tr=[i]:Tr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var U=ys(i,o,t);Ku(i,U);break e;case 1:u=o;var s=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=ws(i,u,t);Ku(i,k);break e}}i=i.return}while(i!==null)}Ts(r)}catch(q){t=q,Q===r&&r!==null&&(Q=r=r.return);continue}break}while(!0)}function Rs(){var e=sn.current;return sn.current=dn,e===null?dn:e}function tu(){(J===0||J===3||J===2)&&(J=4),ee===null||!(jt&268435455)&&!(Cn&268435455)||it(ee,re)}function hn(e,t){var r=I;I|=2;var l=Rs();(ee!==e||re!==t)&&(Fe=null,Nt(e,t));do try{PU();break}catch(n){Ws(e,n)}while(!0);if(Wa(),I=r,sn.current=l,Q!==null)throw Error(w(261));return ee=null,re=0,J}function PU(){for(;Q!==null;)_s(Q)}function NU(){for(;Q!==null&&!t0();)_s(Q)}function _s(e){var t=Vs(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Ts(e):Q=t,Za.current=null}function Ts(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=qU(r,t),r!==null){r.flags&=32767,Q=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Q=null;return}}else if(r=bU(r,t,ge),r!==null){Q=r;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);J===0&&(J=5)}function St(e,t,r){var l=j,n=Se.transition;try{Se.transition=null,j=1,EU(e,t,r,l)}finally{Se.transition=n,j=l}return null}function EU(e,t,r,l){do ir();while(ut!==null);if(I&6)throw Error(w(327));r=e.finishedWork;var n=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(c0(e,i),e===ee&&(Q=ee=null,re=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Nl||(Nl=!0,Fs(Ql,function(){return ir(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Se.transition,Se.transition=null;var a=j;j=1;var u=I;I|=4,Za.current=null,AU(e,r),Is(r,e),J0(Ri),Kl=!!Wi,Ri=Wi=null,e.current=r,SU(r),r0(),I=u,j=a,Se.transition=i}else e.current=r;if(Nl&&(Nl=!1,ut=e,Un=n),i=e.pendingLanes,i===0&&(pt=null),i0(r.stateNode),me(e,$()),t!==null)for(l=e.onRecoverableError,r=0;r<t.length;r++)n=t[r],l(n.value,{componentStack:n.stack,digest:n.digest});if(cn)throw cn=!1,e=na,na=null,e;return Un&1&&e.tag!==0&&ir(),i=e.pendingLanes,i&1?e===ia?Or++:(Or=0,ia=e):Or=0,bt(),null}function ir(){if(ut!==null){var e=yd(Un),t=Se.transition,r=j;try{if(Se.transition=null,j=16>e?16:e,ut===null)var l=!1;else{if(e=ut,ut=null,Un=0,I&6)throw Error(w(331));var n=I;for(I|=4,A=e.current;A!==null;){var i=A,a=i.child;if(A.flags&16){var u=i.deletions;if(u!==null){for(var o=0;o<u.length;o++){var d=u[o];for(A=d;A!==null;){var m=A;switch(m.tag){case 0:case 11:case 15:_r(8,m,i)}var h=m.child;if(h!==null)h.return=m,A=h;else for(;A!==null;){m=A;var f=m.sibling,g=m.return;if(Es(m),m===d){A=null;break}if(f!==null){f.return=g,A=f;break}A=g}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}A=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,A=a;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_r(9,i,i.return)}var U=i.sibling;if(U!==null){U.return=i.return,A=U;break e}A=i.return}}var s=e.current;for(A=s;A!==null;){a=A;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,A=p;else e:for(a=s;A!==null;){if(u=A,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Sn(9,u)}}catch(q){F(u,u.return,q)}if(u===a){A=null;break e}var k=u.sibling;if(k!==null){k.return=u.return,A=k;break e}A=u.return}}if(I=n,bt(),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(kn,e)}catch{}l=!0}return l}finally{j=r,Se.transition=t}}return!1}function go(e,t,r){t=Ur(r,t),t=ys(e,t,1),e=ht(e,t,1),t=de(),e!==null&&(ol(e,1,t),me(e,t))}function F(e,t,r){if(e.tag===3)go(e,e,r);else for(;t!==null;){if(t.tag===3){go(t,e,r);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pt===null||!pt.has(l))){e=Ur(r,e),e=ws(t,e,1),t=ht(t,e,1),e=de(),t!==null&&(ol(t,1,e),me(t,e));break}}t=t.return}}function LU(e,t,r){var l=e.pingCache;l!==null&&l.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&r,ee===e&&(re&r)===r&&(J===4||J===3&&(re&130023424)===re&&500>$()-Ga?Nt(e,0):Ja|=r),me(e,t)}function Os(e,t){t===0&&(e.mode&1?(t=yl,yl<<=1,!(yl&130023424)&&(yl=4194304)):t=1);var r=de();e=Ze(e,t),e!==null&&(ol(e,t,r),me(e,r))}function MU(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Os(e,r)}function IU(e,t){var r=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(r=n.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(w(314))}l!==null&&l.delete(t),Os(e,r)}var Vs;Vs=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)he=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return he=!1,wU(e,t,r);he=!!(e.flags&131072)}else he=!1,_&&t.flags&1048576&&$d(t,rn,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;Tl(e,t),e=t.pendingProps;var n=or(t,ue.current);nr(t,r),n=Xa(null,t,l,e,n,r);var i=$a();return t.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(l)?(i=!0,en(t)):i=!1,t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Ta(t),n.updater=An,t.stateNode=n,n._reactInternals=t,Qi(t,l,e,r),t=Zi(null,t,l,!0,i,r)):(t.tag=0,_&&i&&Ma(t),oe(null,t,n,r),t=t.child),t;case 16:l=t.elementType;e:{switch(Tl(e,t),e=t.pendingProps,n=l._init,l=n(l._payload),t.type=l,n=t.tag=zU(l),e=Ee(l,e),n){case 0:t=Ki(null,t,l,e,r);break e;case 1:t=ao(null,t,l,e,r);break e;case 11:t=no(null,t,l,e,r);break e;case 14:t=io(null,t,l,Ee(l.type,e),r);break e}throw Error(w(306,l,""))}return t;case 0:return l=t.type,n=t.pendingProps,n=t.elementType===l?n:Ee(l,n),Ki(e,t,l,n,r);case 1:return l=t.type,n=t.pendingProps,n=t.elementType===l?n:Ee(l,n),ao(e,t,l,n,r);case 3:e:{if(As(t),e===null)throw Error(w(387));l=t.pendingProps,i=t.memoizedState,n=i.element,Gd(e,t),an(t,l,null,r);var a=t.memoizedState;if(l=a.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){n=Ur(Error(w(423)),t),t=uo(e,t,l,r,n);break e}else if(l!==n){n=Ur(Error(w(424)),t),t=uo(e,t,l,r,n);break e}else for(ke=Ut(t.stateNode.containerInfo.firstChild),ve=t,_=!0,Me=null,r=Zd(t,null,l,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(dr(),l===n){t=Je(e,t,r);break e}oe(e,t,l,r)}t=t.child}return t;case 5:return Yd(t),e===null&&Bi(t),l=t.type,n=t.pendingProps,i=e!==null?e.memoizedProps:null,a=n.children,_i(l,n)?a=null:i!==null&&_i(l,i)&&(t.flags|=32),xs(e,t),oe(e,t,a,r),t.child;case 6:return e===null&&Bi(t),null;case 13:return Ss(e,t,r);case 4:return Oa(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=sr(t,null,l,r):oe(e,t,l,r),t.child;case 11:return l=t.type,n=t.pendingProps,n=t.elementType===l?n:Ee(l,n),no(e,t,l,n,r);case 7:return oe(e,t,t.pendingProps,r),t.child;case 8:return oe(e,t,t.pendingProps.children,r),t.child;case 12:return oe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(l=t.type._context,n=t.pendingProps,i=t.memoizedProps,a=n.value,z(ln,l._currentValue),l._currentValue=a,i!==null)if(ze(i.value,a)){if(i.children===n.children&&!pe.current){t=Je(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var o=u.firstContext;o!==null;){if(o.context===l){if(i.tag===1){o=Qe(-1,r&-r),o.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?o.next=o:(o.next=m.next,m.next=o),d.pending=o}}i.lanes|=r,o=i.alternate,o!==null&&(o.lanes|=r),Xi(i.return,r,t),u.lanes|=r;break}o=o.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(w(341));a.lanes|=r,u=a.alternate,u!==null&&(u.lanes|=r),Xi(a,r,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}oe(e,t,n.children,r),t=t.child}return t;case 9:return n=t.type,l=t.pendingProps.children,nr(t,r),n=Ce(n),l=l(n),t.flags|=1,oe(e,t,l,r),t.child;case 14:return l=t.type,n=Ee(l,t.pendingProps),n=Ee(l.type,n),io(e,t,l,n,r);case 15:return bs(e,t,t.type,t.pendingProps,r);case 17:return l=t.type,n=t.pendingProps,n=t.elementType===l?n:Ee(l,n),Tl(e,t),t.tag=1,fe(l)?(e=!0,en(t)):e=!1,nr(t,r),vs(t,l,n),Qi(t,l,n,r),Zi(null,t,l,!0,e,r);case 19:return Cs(e,t,r);case 22:return qs(e,t,r)}throw Error(w(156,t.tag))};function Fs(e,t){return md(e,t)}function jU(e,t,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,r,l){return new jU(e,t,r,l)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zU(e){if(typeof e=="function")return ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wa)return 11;if(e===ba)return 14}return 2}function mt(e,t){var r=e.alternate;return r===null?(r=Ae(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Fl(e,t,r,l,n,i){var a=2;if(l=e,typeof e=="function")ru(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ft:return Et(r.children,n,i,t);case ya:a=8,n|=8;break;case gi:return e=Ae(12,r,t,n|2),e.elementType=gi,e.lanes=i,e;case ki:return e=Ae(13,r,t,n),e.elementType=ki,e.lanes=i,e;case vi:return e=Ae(19,r,t,n),e.elementType=vi,e.lanes=i,e;case Yo:return Dn(r,n,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jo:a=10;break e;case Go:a=9;break e;case wa:a=11;break e;case ba:a=14;break e;case rt:a=16,l=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ae(a,r,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Et(e,t,r,l){return e=Ae(7,e,l,t),e.lanes=r,e}function Dn(e,t,r,l){return e=Ae(22,e,l,t),e.elementType=Yo,e.lanes=r,e.stateNode={isHidden:!1},e}function ci(e,t,r){return e=Ae(6,e,null,t),e.lanes=r,e}function Ui(e,t,r){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function WU(e,t,r,l,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$n(0),this.expirationTimes=$n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$n(0),this.identifierPrefix=l,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function lu(e,t,r,l,n,i,a,u,o){return e=new WU(e,t,r,u,o),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ae(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:l,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ta(i),e}function RU(e,t,r){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:l==null?null:""+l,children:e,containerInfo:t,implementation:r}}function Bs(e){if(!e)return vt;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var r=e.type;if(fe(r))return Bd(e,r,t)}return t}function Xs(e,t,r,l,n,i,a,u,o){return e=lu(r,l,!0,e,n,i,a,u,o),e.context=Bs(null),r=e.current,l=de(),n=ft(r),i=Qe(l,n),i.callback=t??null,ht(r,i,n),e.current.lanes=n,ol(e,n,l),me(e,l),e}function Pn(e,t,r,l){var n=t.current,i=de(),a=ft(n);return r=Bs(r),t.context===null?t.context=r:t.pendingContext=r,t=Qe(i,a),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=ht(n,t,a),e!==null&&(je(e,n,a,i),Wl(e,n,a)),a}function pn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ko(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function nu(e,t){ko(e,t),(e=e.alternate)&&ko(e,t)}function _U(){return null}var $s=typeof reportError=="function"?reportError:function(e){console.error(e)};function iu(e){this._internalRoot=e}Nn.prototype.render=iu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Pn(e,t,null,null)};Nn.prototype.unmount=iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){Pn(null,e,null,null)}),t[Ke]=null}};function Nn(e){this._internalRoot=e}Nn.prototype.unstable_scheduleHydration=function(e){if(e){var t=qd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<nt.length&&t!==0&&t<nt[r].priority;r++);nt.splice(r,0,e),r===0&&Ad(e)}};function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function En(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vo(){}function TU(e,t,r,l,n){if(n){if(typeof l=="function"){var i=l;l=function(){var d=pn(a);i.call(d)}}var a=Xs(t,l,e,0,null,!1,!1,"",vo);return e._reactRootContainer=a,e[Ke]=a.current,Zr(e.nodeType===8?e.parentNode:e),zt(),a}for(;n=e.lastChild;)e.removeChild(n);if(typeof l=="function"){var u=l;l=function(){var d=pn(o);u.call(d)}}var o=lu(e,0,!1,null,null,!1,!1,"",vo);return e._reactRootContainer=o,e[Ke]=o.current,Zr(e.nodeType===8?e.parentNode:e),zt(function(){Pn(t,o,r,l)}),o}function Ln(e,t,r,l,n){var i=r._reactRootContainer;if(i){var a=i;if(typeof n=="function"){var u=n;n=function(){var o=pn(a);u.call(o)}}Pn(t,a,e,n)}else a=TU(r,t,e,n,l);return pn(a)}wd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Er(t.pendingLanes);r!==0&&(Aa(t,r|1),me(t,$()),!(I&6)&&(hr=$()+500,bt()))}break;case 13:zt(function(){var l=Ze(e,1);if(l!==null){var n=de();je(l,e,1,n)}}),nu(e,1)}};Sa=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var r=de();je(t,e,134217728,r)}nu(e,134217728)}};bd=function(e){if(e.tag===13){var t=ft(e),r=Ze(e,t);if(r!==null){var l=de();je(r,e,t,l)}nu(e,t)}};qd=function(){return j};xd=function(e,t){var r=j;try{return j=e,t()}finally{j=r}};Pi=function(e,t,r){switch(t){case"input":if(bi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var l=r[t];if(l!==e&&l.form===e.form){var n=bn(l);if(!n)throw Error(w(90));td(l),bi(l,n)}}}break;case"textarea":ld(e,r);break;case"select":t=r.value,t!=null&&er(e,!!r.multiple,t,!1)}};sd=Ya;cd=zt;var OU={usingClientEntryPoint:!1,Events:[sl,Qt,bn,od,dd,Ya]},Dr={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VU={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pd(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||_U,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{kn=El.inject(VU),Te=El}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OU;we.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(t))throw Error(w(200));return RU(e,t,null,r)};we.createRoot=function(e,t){if(!au(e))throw Error(w(299));var r=!1,l="",n=$s;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=lu(e,1,!1,null,null,r,!1,l,n),e[Ke]=t.current,Zr(e.nodeType===8?e.parentNode:e),new iu(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=pd(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return zt(e)};we.hydrate=function(e,t,r){if(!En(t))throw Error(w(200));return Ln(null,e,t,!0,r)};we.hydrateRoot=function(e,t,r){if(!au(e))throw Error(w(405));var l=r!=null&&r.hydratedSources||null,n=!1,i="",a=$s;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Xs(t,null,e,1,r??null,n,!1,i,a),e[Ke]=t.current,Zr(e),l)for(e=0;e<l.length;e++)r=l[e],n=r._getVersion,n=n(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,n]:t.mutableSourceEagerHydrationData.push(r,n);return new Nn(t)};we.render=function(e,t,r){if(!En(t))throw Error(w(200));return Ln(null,e,t,!1,r)};we.unmountComponentAtNode=function(e){if(!En(e))throw Error(w(40));return e._reactRootContainer?(zt(function(){Ln(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=Ya;we.unstable_renderSubtreeIntoContainer=function(e,t,r,l){if(!En(r))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ln(e,t,r,!1,l)};we.version="18.3.1-next-f1338f8080-20240426";function Qs(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qs)}catch(e){console.error(e)}}Qs(),Qo.exports=we;var FU=Qo.exports,yo=FU;fi.createRoot=yo.createRoot,fi.hydrateRoot=yo.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)({}).hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},il.apply(null,arguments)}var ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ot||(ot={}));const wo="popstate";function BU(e){e===void 0&&(e={});function t(n,i){let{pathname:a="/",search:u="",hash:o=""}=_t(n.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),oa("",{pathname:a,search:u,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){let a=n.document.querySelector("base"),u="";if(a&&a.getAttribute("href")){let o=n.location.href,d=o.indexOf("#");u=d===-1?o:o.slice(0,d)}return u+"#"+(typeof i=="string"?i:fn(i))}function l(n,i){Mn(n.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return $U(t,r,l,e)}function H(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Mn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function XU(){return Math.random().toString(36).substr(2,8)}function bo(e,t){return{usr:e.state,key:e.key,idx:t}}function oa(e,t,r,l){return r===void 0&&(r=null),il({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_t(t):t,{state:r,key:t&&t.key||l||XU()})}function fn(e){let{pathname:t="/",search:r="",hash:l=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function _t(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let l=e.indexOf("?");l>=0&&(t.search=e.substr(l),e=e.substr(0,l)),e&&(t.pathname=e)}return t}function $U(e,t,r,l){l===void 0&&(l={});let{window:n=document.defaultView,v5Compat:i=!1}=l,a=n.history,u=ot.Pop,o=null,d=m();d==null&&(d=0,a.replaceState(il({},a.state,{idx:d}),""));function m(){return(a.state||{idx:null}).idx}function h(){u=ot.Pop;let x=m(),U=x==null?null:x-d;d=x,o&&o({action:u,location:y.location,delta:U})}function f(x,U){u=ot.Push;let s=oa(y.location,x,U);r&&r(s,x),d=m()+1;let p=bo(s,d),k=y.createHref(s);try{a.pushState(p,"",k)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;n.location.assign(k)}i&&o&&o({action:u,location:y.location,delta:1})}function g(x,U){u=ot.Replace;let s=oa(y.location,x,U);r&&r(s,x),d=m();let p=bo(s,d),k=y.createHref(s);a.replaceState(p,"",k),i&&o&&o({action:u,location:y.location,delta:0})}function v(x){let U=n.location.origin!=="null"?n.location.origin:n.location.href,s=typeof x=="string"?x:fn(x);return s=s.replace(/ $/,"%20"),H(U,"No window.location.(origin|href) available to create URL for href: "+s),new URL(s,U)}let y={get action(){return u},get location(){return e(n,a)},listen(x){if(o)throw new Error("A history only accepts one active listener");return n.addEventListener(wo,h),o=x,()=>{n.removeEventListener(wo,h),o=null}},createHref(x){return t(n,x)},createURL:v,encodeLocation(x){let U=v(x);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:f,replace:g,go(x){return a.go(x)}};return y}var qo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qo||(qo={}));function QU(e,t,r){return r===void 0&&(r="/"),HU(e,t,r)}function HU(e,t,r,l){let n=typeof t=="string"?_t(t):t,i=uu(n.pathname||"/",r);if(i==null)return null;let a=Hs(e);KU(a);let u=null,o=u2(i);for(let d=0;u==null&&d<a.length;++d)u=n2(a[d],o);return u}function Hs(e,t,r,l){t===void 0&&(t=[]),r===void 0&&(r=[]),l===void 0&&(l="");let n=(i,a,u)=>{let o={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};o.relativePath.startsWith("/")&&(H(o.relativePath.startsWith(l),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(l.length));let d=gt([l,o.relativePath]),m=r.concat(o);i.children&&i.children.length>0&&(H(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Hs(i.children,t,m,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:r2(d,i.index),routesMeta:m})};return e.forEach((i,a)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))n(i,a);else for(let o of Ks(i.path))n(i,a,o)}),t}function Ks(e){let t=e.split("/");if(t.length===0)return[];let[r,...l]=t,n=r.endsWith("?"),i=r.replace(/\?$/,"");if(l.length===0)return n?[i,""]:[i];let a=Ks(l.join("/")),u=[];return u.push(...a.map(o=>o===""?i:[i,o].join("/"))),n&&u.push(...a),u.map(o=>e.startsWith("/")&&o===""?"/":o)}function KU(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:l2(t.routesMeta.map(l=>l.childrenIndex),r.routesMeta.map(l=>l.childrenIndex)))}const ZU=/^:[\w-]+$/,JU=3,GU=2,YU=1,e2=10,t2=-2,xo=e=>e==="*";function r2(e,t){let r=e.split("/"),l=r.length;return r.some(xo)&&(l+=t2),t&&(l+=GU),r.filter(n=>!xo(n)).reduce((n,i)=>n+(ZU.test(i)?JU:i===""?YU:e2),l)}function l2(e,t){return e.length===t.length&&e.slice(0,-1).every((l,n)=>l===t[n])?e[e.length-1]-t[t.length-1]:0}function n2(e,t,r){let{routesMeta:l}=e,n={},i="/",a=[];for(let u=0;u<l.length;++u){let o=l[u],d=u===l.length-1,m=i==="/"?t:t.slice(i.length)||"/",h=i2({path:o.relativePath,caseSensitive:o.caseSensitive,end:d},m),f=o.route;if(!h)return null;Object.assign(n,h.params),a.push({params:n,pathname:gt([i,h.pathname]),pathnameBase:U2(gt([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=gt([i,h.pathnameBase]))}return a}function i2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,l]=a2(e.path,e.caseSensitive,e.end),n=t.match(r);if(!n)return null;let i=n[0],a=i.replace(/(.)\/+$/,"$1"),u=n.slice(1);return{params:l.reduce((d,m,h)=>{let{paramName:f,isOptional:g}=m;if(f==="*"){let y=u[h]||"";a=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const v=u[h];return g&&!v?d[f]=void 0:d[f]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:a,pattern:e}}function a2(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Mn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let l=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,o)=>(l.push({paramName:u,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(l.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),l]}function u2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function uu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,l=e.charAt(r);return l&&l!=="/"?null:e.slice(r)||"/"}const o2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,d2=e=>o2.test(e);function s2(e,t){t===void 0&&(t="/");let{pathname:r,search:l="",hash:n=""}=typeof e=="string"?_t(e):e,i;if(r)if(d2(r))i=r;else{if(r.includes("//")){let a=r;r=Gs(r),Mn(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+r))}r.startsWith("/")?i=Ao(r.substring(1),"/"):i=Ao(r,t)}else i=t;return{pathname:i,search:h2(l),hash:p2(n)}}function Ao(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function hi(e,t,r,l){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function c2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Zs(e,t){let r=c2(e);return t?r.map((l,n)=>n===r.length-1?l.pathname:l.pathnameBase):r.map(l=>l.pathnameBase)}function Js(e,t,r,l){l===void 0&&(l=!1);let n;typeof e=="string"?n=_t(e):(n=il({},e),H(!n.pathname||!n.pathname.includes("?"),hi("?","pathname","search",n)),H(!n.pathname||!n.pathname.includes("#"),hi("#","pathname","hash",n)),H(!n.search||!n.search.includes("#"),hi("#","search","hash",n)));let i=e===""||n.pathname==="",a=i?"/":n.pathname,u;if(a==null)u=r;else{let h=t.length-1;if(!l&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;n.pathname=f.join("/")}u=h>=0?t[h]:"/"}let o=s2(n,u),d=a&&a!=="/"&&a.endsWith("/"),m=(i||a===".")&&r.endsWith("/");return!o.pathname.endsWith("/")&&(d||m)&&(o.pathname+="/"),o}const Gs=e=>e.replace(/\/\/+/g,"/"),gt=e=>Gs(e.join("/")),U2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),h2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,p2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function f2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ys=["post","put","patch","delete"];new Set(Ys);const m2=["get",...Ys];new Set(m2);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)({}).hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},al.apply(null,arguments)}const ou=b.createContext(null),g2=b.createContext(null),Tt=b.createContext(null),In=b.createContext(null),Ye=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ec=b.createContext(null);function k2(e,t){let{relative:r}=t===void 0?{}:t;Ul()||H(!1);let{basename:l,navigator:n}=b.useContext(Tt),{hash:i,pathname:a,search:u}=rc(e,{relative:r}),o=a;return l!=="/"&&(o=a==="/"?l:gt([l,a])),n.createHref({pathname:o,search:u,hash:i})}function Ul(){return b.useContext(In)!=null}function kr(){return Ul()||H(!1),b.useContext(In).location}function tc(e){b.useContext(Tt).static||b.useLayoutEffect(e)}function jn(){let{isDataRoute:e}=b.useContext(Ye);return e?M2():v2()}function v2(){Ul()||H(!1);let e=b.useContext(ou),{basename:t,future:r,navigator:l}=b.useContext(Tt),{matches:n}=b.useContext(Ye),{pathname:i}=kr(),a=JSON.stringify(Zs(n,r.v7_relativeSplatPath)),u=b.useRef(!1);return tc(()=>{u.current=!0}),b.useCallback(function(d,m){if(m===void 0&&(m={}),!u.current)return;if(typeof d=="number"){l.go(d);return}let h=Js(d,JSON.parse(a),i,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:gt([t,h.pathname])),(m.replace?l.replace:l.push)(h,m.state,m)},[t,l,a,i,e])}const y2=b.createContext(null);function w2(e){let t=b.useContext(Ye).outlet;return t&&b.createElement(y2.Provider,{value:e},t)}function du(){let{matches:e}=b.useContext(Ye),t=e[e.length-1];return t?t.params:{}}function rc(e,t){let{relative:r}=t===void 0?{}:t,{future:l}=b.useContext(Tt),{matches:n}=b.useContext(Ye),{pathname:i}=kr(),a=JSON.stringify(Zs(n,l.v7_relativeSplatPath));return b.useMemo(()=>Js(e,JSON.parse(a),i,r==="path"),[e,a,i,r])}function b2(e,t){return q2(e,t)}function q2(e,t,r,l){Ul()||H(!1);let{navigator:n}=b.useContext(Tt),{matches:i}=b.useContext(Ye),a=i[i.length-1],u=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let d=kr(),m;if(t){var h;let x=typeof t=="string"?_t(t):t;o==="/"||(h=x.pathname)!=null&&h.startsWith(o)||H(!1),m=x}else m=d;let f=m.pathname||"/",g=f;if(o!=="/"){let x=o.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=QU(e,{pathname:g}),y=D2(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},u,x.params),pathname:gt([o,n.encodeLocation?n.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?o:gt([o,n.encodeLocation?n.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,r,l);return t&&y?b.createElement(In.Provider,{value:{location:al({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ot.Pop}},y):y}function x2(){let e=L2(),t=f2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:n},r):null,null)}const A2=b.createElement(x2,null);class S2 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?b.createElement(Ye.Provider,{value:this.props.routeContext},b.createElement(ec.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C2(e){let{routeContext:t,match:r,children:l}=e,n=b.useContext(ou);return n&&n.static&&n.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(Ye.Provider,{value:t},l)}function D2(e,t,r,l){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),l===void 0&&(l=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=l)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,u=(n=r)==null?void 0:n.errors;if(u!=null){let m=a.findIndex(h=>h.route.id&&(u==null?void 0:u[h.route.id])!==void 0);m>=0||H(!1),a=a.slice(0,Math.min(a.length,m+1))}let o=!1,d=-1;if(r&&l&&l.v7_partialHydration)for(let m=0;m<a.length;m++){let h=a[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=m),h.route.id){let{loaderData:f,errors:g}=r,v=h.route.loader&&f[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||v){o=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((m,h,f)=>{let g,v=!1,y=null,x=null;r&&(g=u&&h.route.id?u[h.route.id]:void 0,y=h.route.errorElement||A2,o&&(d<0&&f===0?(I2("route-fallback"),v=!0,x=null):d===f&&(v=!0,x=h.route.hydrateFallbackElement||null)));let U=t.concat(a.slice(0,f+1)),s=()=>{let p;return g?p=y:v?p=x:h.route.Component?p=b.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,b.createElement(C2,{match:h,routeContext:{outlet:m,matches:U,isDataRoute:r!=null},children:p})};return r&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?b.createElement(S2,{location:r.location,revalidation:r.revalidation,component:y,error:g,children:s(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):s()},null)}var lc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lc||{}),nc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(nc||{});function P2(e){let t=b.useContext(ou);return t||H(!1),t}function N2(e){let t=b.useContext(g2);return t||H(!1),t}function E2(e){let t=b.useContext(Ye);return t||H(!1),t}function ic(e){let t=E2(),r=t.matches[t.matches.length-1];return r.route.id||H(!1),r.route.id}function L2(){var e;let t=b.useContext(ec),r=N2(),l=ic();return t!==void 0?t:(e=r.errors)==null?void 0:e[l]}function M2(){let{router:e}=P2(lc.UseNavigateStable),t=ic(nc.UseNavigateStable),r=b.useRef(!1);return tc(()=>{r.current=!0}),b.useCallback(function(n,i){i===void 0&&(i={}),r.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,al({fromRouteId:t},i)))},[e,t])}const So={};function I2(e,t,r){So[e]||(So[e]=!0)}function j2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function z2(e){return w2(e.context)}function tt(e){H(!1)}function W2(e){let{basename:t="/",children:r=null,location:l,navigationType:n=ot.Pop,navigator:i,static:a=!1,future:u}=e;Ul()&&H(!1);let o=t.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:o,navigator:i,static:a,future:al({v7_relativeSplatPath:!1},u)}),[o,u,i,a]);typeof l=="string"&&(l=_t(l));let{pathname:m="/",search:h="",hash:f="",state:g=null,key:v="default"}=l,y=b.useMemo(()=>{let x=uu(m,o);return x==null?null:{location:{pathname:x,search:h,hash:f,state:g,key:v},navigationType:n}},[o,m,h,f,g,v,n]);return y==null?null:b.createElement(Tt.Provider,{value:d},b.createElement(In.Provider,{children:r,value:y}))}function R2(e){let{children:t,location:r}=e;return b2(da(t),r)}new Promise(()=>{});function da(e,t){t===void 0&&(t=[]);let r=[];return b.Children.forEach(e,(l,n)=>{if(!b.isValidElement(l))return;let i=[...t,n];if(l.type===b.Fragment){r.push.apply(r,da(l.props.children,i));return}l.type!==tt&&H(!1),!l.props.index||!l.props.children||H(!1);let a={id:l.props.id||i.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(a.children=da(l.props.children,i)),r.push(a)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)({}).hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},sa.apply(null,arguments)}function _2(e,t){if(e==null)return{};var r={};for(var l in e)if({}.hasOwnProperty.call(e,l)){if(t.indexOf(l)!==-1)continue;r[l]=e[l]}return r}function T2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function O2(e,t){return e.button===0&&(!t||t==="_self")&&!T2(e)}function ca(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let l=e[r];return t.concat(Array.isArray(l)?l.map(n=>[r,n]):[[r,l]])},[]))}function V2(e,t){let r=ca(e);return t&&t.forEach((l,n)=>{r.has(n)||t.getAll(n).forEach(i=>{r.append(n,i)})}),r}const F2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],B2="6";try{window.__reactRouterVersion=B2}catch{}const X2="startTransition",Co=Lc[X2];function $2(e){let{basename:t,children:r,future:l,window:n}=e,i=b.useRef();i.current==null&&(i.current=BU({window:n,v5Compat:!0}));let a=i.current,[u,o]=b.useState({action:a.action,location:a.location}),{v7_startTransition:d}=l||{},m=b.useCallback(h=>{d&&Co?Co(()=>o(h)):o(h)},[o,d]);return b.useLayoutEffect(()=>a.listen(m),[a,m]),b.useEffect(()=>j2(l),[l]),b.createElement(W2,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:a,future:l})}const Q2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",H2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ar=b.forwardRef(function(t,r){let{onClick:l,relative:n,reloadDocument:i,replace:a,state:u,target:o,to:d,preventScrollReset:m,viewTransition:h}=t,f=_2(t,F2),{basename:g}=b.useContext(Tt),v,y=!1;if(typeof d=="string"&&H2.test(d)&&(v=d,Q2))try{let p=new URL(window.location.href),k=d.startsWith("//")?new URL(p.protocol+d):new URL(d),q=uu(k.pathname,g);k.origin===p.origin&&q!=null?d=q+k.search+k.hash:y=!0}catch{}let x=k2(d,{relative:n}),U=K2(d,{replace:a,state:u,target:o,preventScrollReset:m,relative:n,viewTransition:h});function s(p){l&&l(p),p.defaultPrevented||U(p)}return b.createElement("a",sa({},f,{href:v||x,onClick:y||i?l:s,ref:r,target:o}))});var Do;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Do||(Do={}));var Po;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Po||(Po={}));function K2(e,t){let{target:r,replace:l,state:n,preventScrollReset:i,relative:a,viewTransition:u}=t===void 0?{}:t,o=jn(),d=kr(),m=rc(e,{relative:a});return b.useCallback(h=>{if(O2(h,r)){h.preventDefault();let f=l!==void 0?l:fn(d)===fn(m);o(e,{replace:f,state:n,preventScrollReset:i,relative:a,viewTransition:u})}},[d,o,m,l,n,r,e,i,a,u])}function Z2(e){let t=b.useRef(ca(e)),r=b.useRef(!1),l=kr(),n=b.useMemo(()=>V2(l.search,r.current?null:t.current),[l.search]),i=jn(),a=b.useCallback((u,o)=>{const d=ca(typeof u=="function"?u(n):u);r.current=!0,i("?"+d,o)},[i,n]);return[n,a]}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ve=(e,t)=>{const r=b.forwardRef(({color:l="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:u="",children:o,...d},m)=>b.createElement("svg",{ref:m,...J2,width:n,height:n,stroke:l,strokeWidth:a?Number(i)*24/Number(n):i,className:["lucide",`lucide-${G2(e)}`,u].join(" "),...d},[...t.map(([h,f])=>b.createElement(h,f)),...Array.isArray(o)?o:[o]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=Ve("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=Ve("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=Ve("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=Ve("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=Ve("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=Ve("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=Ve("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=Ve("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=Ve("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=Ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ah={},No=e=>{let t;const r=new Set,l=(m,h)=>{const f=typeof m=="function"?m(t):m;if(!Object.is(f,t)){const g=t;t=h??(typeof f!="object"||f===null)?f:Object.assign({},t,f),r.forEach(v=>v(t,g))}},n=()=>t,o={setState:l,getState:n,getInitialState:()=>d,subscribe:m=>(r.add(m),()=>r.delete(m)),destroy:()=>{(ah?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},d=t=e(l,n,o);return o},uh=e=>e?No(e):No;var dc={exports:{}},sc={},cc={exports:{}},Uc={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=b;function oh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dh=typeof Object.is=="function"?Object.is:oh,sh=pr.useState,ch=pr.useEffect,Uh=pr.useLayoutEffect,hh=pr.useDebugValue;function ph(e,t){var r=t(),l=sh({inst:{value:r,getSnapshot:t}}),n=l[0].inst,i=l[1];return Uh(function(){n.value=r,n.getSnapshot=t,pi(n)&&i({inst:n})},[e,r,t]),ch(function(){return pi(n)&&i({inst:n}),e(function(){pi(n)&&i({inst:n})})},[e]),hh(r),r}function pi(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!dh(e,r)}catch{return!0}}function fh(e,t){return t()}var mh=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?fh:ph;Uc.useSyncExternalStore=pr.useSyncExternalStore!==void 0?pr.useSyncExternalStore:mh;cc.exports=Uc;var gh=cc.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn=b,kh=gh;function vh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yh=typeof Object.is=="function"?Object.is:vh,wh=kh.useSyncExternalStore,bh=zn.useRef,qh=zn.useEffect,xh=zn.useMemo,Ah=zn.useDebugValue;sc.useSyncExternalStoreWithSelector=function(e,t,r,l,n){var i=bh(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=xh(function(){function o(g){if(!d){if(d=!0,m=g,g=l(g),n!==void 0&&a.hasValue){var v=a.value;if(n(v,g))return h=v}return h=g}if(v=h,yh(m,g))return v;var y=l(g);return n!==void 0&&n(v,y)?(m=g,v):(m=g,h=y)}var d=!1,m,h,f=r===void 0?null:r;return[function(){return o(t())},f===null?void 0:function(){return o(f())}]},[t,r,l,n]);var u=wh(e,i[0],i[1]);return qh(function(){a.hasValue=!0,a.value=u},[u]),Ah(u),u};dc.exports=sc;var Sh=dc.exports;const Ch=jo(Sh),hc={},{useDebugValue:Dh}=ma,{useSyncExternalStoreWithSelector:Ph}=Ch;let Eo=!1;const Nh=e=>e;function Eh(e,t=Nh,r){(hc?"production":void 0)!=="production"&&r&&!Eo&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Eo=!0);const l=Ph(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return Dh(l),l}const Lo=e=>{(hc?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?uh(e):e,r=(l,n)=>Eh(t,l,n);return Object.assign(r,t),r},Lh=e=>e?Lo(e):Lo,Mh=[{slug:"engineering",name:"工程设计与仿真",icon:"Cpu",description:"CAD、CAE、EDA等工程设计软件",count:59},{slug:"office",name:"办公与文档",icon:"Briefcase",description:"Office、PDF、笔记等办公软件",count:23},{slug:"dev-tools",name:"编程开发",icon:"Code",description:"IDE、数据库、编程语言工具",count:17},{slug:"media",name:"图像媒体",icon:"Image",description:"图像处理、视频编辑、设计软件",count:24},{slug:"data-analysis",name:"数据分析",icon:"BarChart",description:"统计、数学、数据分析软件",count:17},{slug:"system-tools",name:"系统工具",icon:"Monitor",description:"虚拟机、系统修复、实用工具",count:10},{slug:"other",name:"其他软件",icon:"Package",description:"其他专业软件工具",count:10}],Ih=[{id:"1",title:"Abaqus",slug:"abaqus",description:"Abaqus，专业软件工具，绿色安全可靠。",content:`Abaqus 是一款专业的软件工具。

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
3. 进行谱图处理与分析`,version:"15",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mestrenova",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"MestReNova 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1ZCYlhXgbqPxQFNTdZxhppw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/9f79dc02feff",thunderUrl:"https://pan.xunlei.com/s/VOsaZr9PE-ve8_8_Jf9MWY2dA1?pwd=8v58"},{title:"MestReNova 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]}];function jh(e){const t=e.charAt(0).toUpperCase();return/[A-Z]/.test(t)?t:"#"}const Z=Lh((e,t)=>({software:Ih,categories:Mh,searchQuery:"",currentPage:1,pageSize:18,setSearchQuery:r=>e({searchQuery:r,currentPage:1}),setCurrentPage:r=>e({currentPage:r}),getFilteredSoftware:r=>{const{software:l,searchQuery:n}=t();let i=l;if(r&&(i=i.filter(a=>a.category===r)),n){const a=n.toLowerCase().split(/\s+/).filter(Boolean);i=i.filter(u=>{const o=[u.title,u.description,u.categoryName].join(" ").toLowerCase();return a.every(d=>o.includes(d))})}return i},getFilteredByLetter:r=>{const{software:l,searchQuery:n}=t();let i=l;if(r&&r!=="#"?i=i.filter(a=>a.title.charAt(0).toUpperCase()===r.toUpperCase()):r==="#"&&(i=i.filter(a=>!/[A-Z]/i.test(a.title.charAt(0)))),n){const a=n.toLowerCase().split(/\s+/).filter(Boolean);i=i.filter(u=>{const o=[u.title,u.description,u.categoryName].join(" ").toLowerCase();return a.every(d=>o.includes(d))})}return i},getLetterCounts:()=>{const{software:r}=t(),l={};for(let n=65;n<=90;n++)l[String.fromCharCode(n)]=0;return l["#"]=0,r.forEach(n=>{l[jh(n.title)]++}),l},getTotalPages:r=>{const{pageSize:l}=t();return Math.ceil(r.length/l)},getSoftwareBySlug:r=>t().software.find(l=>l.slug===r),getCategoryBySlug:r=>t().categories.find(l=>l.slug===r)}));function Mo(){const[e,t]=b.useState(""),r=jn(),l=Z(u=>u.searchQuery),n=Z(u=>u.setSearchQuery),i=b.useRef(e);b.useEffect(()=>{e===""&&i.current!==""&&l&&(n(""),r("/")),i.current=e},[e,l,n,r]);const a=u=>{u.preventDefault();const o=e.trim();o?(n(o),r(`/search?q=${encodeURIComponent(o)}`)):(n(""),r("/"))};return c.jsxs("form",{onSubmit:a,className:"relative",children:[c.jsx(nh,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"}),c.jsx("input",{type:"text",value:e,onChange:u=>t(u.target.value),placeholder:"搜索软件...",className:"w-full pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"})]})}const Io=[{to:"/",label:"首页"},{to:"/about",label:"关于"}];function zh(){const[e,t]=b.useState(!1),r=kr();return c.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60",children:[c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"flex items-center justify-between h-16",children:[c.jsxs(ar,{to:"/",className:"flex items-center gap-2 group",children:[c.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-sm shadow-blue-500/25 group-hover:shadow-md group-hover:shadow-blue-500/30 transition-all",children:c.jsx(oc,{className:"w-5 h-5 text-white"})}),c.jsx("span",{className:"text-lg font-bold text-slate-800",children:c.jsx("span",{className:"gradient-text",children:"软件分享"})})]}),c.jsx("nav",{className:"hidden md:flex items-center gap-8",children:Io.map(l=>c.jsx(ar,{to:l.to,className:`text-sm font-medium transition-colors ${r.pathname===l.to?"text-blue-600":"text-slate-500 hover:text-slate-800"}`,children:l.label},l.to))}),c.jsx("div",{className:"hidden md:block w-64",children:c.jsx(Mo,{})}),c.jsx("button",{className:"md:hidden p-2 text-slate-500 hover:text-slate-700",onClick:()=>t(!e),children:e?c.jsx(ih,{className:"w-5 h-5"}):c.jsx(lh,{className:"w-5 h-5"})})]})}),e&&c.jsx("div",{className:"md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl",children:c.jsxs("div",{className:"px-4 py-4 space-y-4",children:[c.jsx(Mo,{}),c.jsx("div",{className:"flex flex-col gap-3",children:Io.map(l=>c.jsx(ar,{to:l.to,onClick:()=>t(!1),className:`text-sm py-2 font-medium transition-colors ${r.pathname===l.to?"text-blue-600":"text-slate-500 hover:text-slate-800"}`,children:l.label},l.to))})]})})]})}function Wh(){return c.jsx("footer",{className:"border-t border-slate-200 bg-white",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[c.jsxs("div",{className:"text-slate-500 text-sm",children:["© ",new Date().getFullYear()," 软件分享 — 发现优质绿色软件"]}),c.jsx("div",{className:"text-slate-400 text-xs",children:"仅供学习交流，请支持正版软件"})]})})})}function Rh(){return c.jsxs("div",{className:"min-h-screen flex flex-col",children:[c.jsx(zh,{}),c.jsx("main",{className:"flex-1 pt-16",children:c.jsx(z2,{})}),c.jsx(Wh,{})]})}function _h(){return c.jsxs("section",{className:"relative overflow-hidden bg-white",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"}),c.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"}),c.jsx("div",{className:"absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"}),c.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"}),c.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32",children:c.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-8",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500 animate-pulse"}),c.jsx("span",{className:"text-xs text-blue-600 font-medium",children:"每日更新优质软件"})]}),c.jsxs("h1",{className:"text-4xl md:text-6xl font-bold tracking-tight mb-6",children:[c.jsx("span",{className:"text-slate-800",children:"发现"}),c.jsx("span",{className:"gradient-text",children:"优质绿色软件"})]}),c.jsx("p",{className:"text-lg text-slate-500 max-w-xl mx-auto leading-relaxed",children:"精选系统工具、办公软件、编程开发、图像媒体等各类绿色软件， 安全可靠，即搜即用。"})]})})]})}const Th=[...Array.from({length:26},(e,t)=>String.fromCharCode(65+t)),"#"];function Oh(){const e=jn(),r=Z(l=>l.getLetterCounts)();return c.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10",children:c.jsx("div",{className:"flex flex-wrap justify-center gap-1.5",children:Th.map(l=>{const n=r[l]||0,i=n>0;return c.jsx("button",{onClick:()=>e(`/letter/${l}`),disabled:!i,title:i?`${n} 款`:"暂无",className:`w-9 h-9 rounded-lg text-sm font-medium transition-all ${i?"bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-sm hover:shadow-blue-500/10 hover:-translate-y-0.5":"bg-slate-50 border border-slate-100 text-slate-300 cursor-not-allowed"}`,children:l},l)})})})}function pc(e){const t=new Date(e),r=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${r}-${l}-${n}`}function mn({children:e,variant:t="default"}){const r="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",l={default:"bg-slate-100 text-slate-600",primary:"bg-blue-50 text-blue-600"};return c.jsx("span",{className:`${r} ${l[t]}`,children:e})}function Vh({software:e}){return c.jsxs(ar,{to:`/software/${e.slug}`,className:"group block bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1",children:[c.jsx("div",{className:"aspect-[3/2] overflow-hidden bg-slate-100",children:c.jsx("img",{src:e.coverImage,alt:e.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",loading:"lazy",onError:t=>{const r=t.target;r.onerror=null,r.src=`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="#e2e8f0" width="600" height="400"/><text fill="#94a3b8" font-family="system-ui,sans-serif" font-size="20" text-anchor="middle" x="300" y="210">${e.title}</text></svg>`)}`}})}),c.jsxs("div",{className:"p-4",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[c.jsx(mn,{children:e.categoryName}),c.jsx(mn,{variant:"primary",children:e.platform})]}),c.jsx("h3",{className:"text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-1.5 line-clamp-1",children:e.title}),c.jsx("p",{className:"text-sm text-slate-500 line-clamp-2 mb-3 leading-relaxed",children:e.description}),c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(ac,{className:"w-3 h-3"}),pc(e.updatedAt)]}),c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(uc,{className:"w-3 h-3"}),e.fileSize]})]})]})]})}function Fh({currentPage:e,totalPages:t,onPageChange:r}){if(t<=1)return null;const l=[],n=2;for(let i=1;i<=t;i++)i===1||i===t||i>=e-n&&i<=e+n?l.push(i):l[l.length-1]!=="..."&&l.push("...");return c.jsxs("div",{className:"flex items-center justify-center gap-1",children:[c.jsx("button",{onClick:()=>r(e-1),disabled:e===1,className:"p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:c.jsx(eh,{className:"w-4 h-4"})}),l.map((i,a)=>i==="..."?c.jsx("span",{className:"px-2 text-slate-400",children:"..."},`dots-${a}`):c.jsx("button",{onClick:()=>r(i),className:`w-9 h-9 rounded-lg text-sm font-medium transition-all ${e===i?"bg-blue-500 text-white shadow-sm shadow-blue-500/25":"text-slate-500 hover:text-slate-700 hover:bg-slate-100"}`,children:i},i)),c.jsx("button",{onClick:()=>r(e+1),disabled:e===t,className:"p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:c.jsx(th,{className:"w-4 h-4"})})]})}function Wn({categorySlug:e,letter:t}){const r=Z(f=>f.getFilteredSoftware),l=Z(f=>f.getFilteredByLetter),n=Z(f=>f.getTotalPages),i=Z(f=>f.currentPage),a=Z(f=>f.setCurrentPage),u=Z(f=>f.pageSize),o=t?l(t):r(e),d=n(o),m=(i-1)*u,h=o.slice(m,m+u);return o.length===0?c.jsxs("div",{className:"text-center py-16",children:[c.jsx("p",{className:"text-slate-500 text-lg",children:"暂无相关软件"}),c.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"试试其他关键词或分类"})]}):c.jsxs("div",{children:[c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:h.map(f=>c.jsx(Vh,{software:f},f.id))}),c.jsx("div",{className:"mt-10",children:c.jsx(Fh,{currentPage:i,totalPages:d,onPageChange:a})})]})}function Bh(){const e=Z(r=>r.setSearchQuery),t=Z(r=>r.setCurrentPage);return b.useEffect(()=>{e(""),t(1)},[e,t]),c.jsxs("div",{children:[c.jsx(_h,{}),c.jsx(Oh,{}),c.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("div",{className:"flex items-center justify-between mb-8",children:c.jsx("h2",{className:"text-xl font-bold text-slate-800",children:"最新软件"})}),c.jsx(Wn,{})]})]})}function Xh(){const{slug:e}=du(),t=Z(n=>n.getCategoryBySlug),r=Z(n=>n.setCurrentPage),l=e?t(e):void 0;return b.useEffect(()=>{r(1)},[e,r]),l?c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"mb-10",children:[c.jsx("h1",{className:"text-2xl font-bold text-slate-800 mb-2",children:l.name}),c.jsx("p",{className:"text-slate-500",children:l.description})]}),c.jsx(Wn,{categorySlug:e})]}):c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",children:c.jsx("p",{className:"text-slate-500",children:"分类不存在"})})}function $h(){const{letter:e}=du(),t=Z(r=>r.setCurrentPage);return b.useEffect(()=>{t(1)},[e,t]),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"mb-10",children:[c.jsxs("h1",{className:"text-2xl font-bold text-slate-800 mb-2",children:[e==="#"?"特殊字符":e," 开头的软件"]}),c.jsx("p",{className:"text-slate-500",children:"按首字母浏览软件"})]}),c.jsx(Wn,{letter:e})]})}function Qh({section:e}){const t=!!e.baiduUrl||!!e.quarkUrl||!!e.thunderUrl;return c.jsxs("div",{className:`rounded-xl border p-5 transition-colors ${t?"bg-white border-slate-200":"bg-slate-50 border-slate-100"}`,children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h3",{className:"text-base font-semibold text-slate-800",children:e.title}),!t&&c.jsx("span",{className:"text-xs text-slate-400 bg-slate-200 px-2 py-0.5 rounded-full",children:"暂未上架，敬请期待"})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[e.baiduUrl?c.jsxs("a",{href:e.baiduUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-md hover:shadow-blue-500/20 active:scale-95",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M10.28 8.74V5.24C6.44 4.36 2.64 6.36 1.52 10.12C-0.12 15.64 3.4 21.12 9.04 22.04C13.84 22.8 18.36 20.4 19.88 15.92C20.2 15.0 20.32 14.04 20.2 13.04C17.96 15.2 14.56 16.48 11.2 15.52C8.32 14.68 6.68 11.72 7.36 8.76L10.28 8.74Z"})}),"百度网盘"]}):c.jsxs("div",{className:"flex items-center justify-center gap-2 px-4 py-3 bg-slate-200 text-slate-400 text-sm font-medium rounded-lg cursor-not-allowed",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M10.28 8.74V5.24C6.44 4.36 2.64 6.36 1.52 10.12C-0.12 15.64 3.4 21.12 9.04 22.04C13.84 22.8 18.36 20.4 19.88 15.92C20.2 15.0 20.32 14.04 20.2 13.04C17.96 15.2 14.56 16.48 11.2 15.52C8.32 14.68 6.68 11.72 7.36 8.76L10.28 8.74Z"})}),"百度网盘"]}),e.quarkUrl?c.jsxs("a",{href:e.quarkUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-md hover:shadow-amber-500/20 active:scale-95",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("circle",{cx:"12",cy:"12",r:"10"})}),"夸克网盘"]}):c.jsxs("div",{className:"flex items-center justify-center gap-2 px-4 py-3 bg-slate-200 text-slate-400 text-sm font-medium rounded-lg cursor-not-allowed",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("circle",{cx:"12",cy:"12",r:"10"})}),"夸克网盘"]}),e.thunderUrl?c.jsxs("a",{href:e.thunderUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-md hover:shadow-sky-500/20 active:scale-95",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"迅雷云盘"]}):c.jsxs("div",{className:"flex items-center justify-center gap-2 px-4 py-3 bg-slate-200 text-slate-400 text-sm font-medium rounded-lg cursor-not-allowed",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"迅雷云盘"]})]})]})}function Hh({software:e}){return c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10",children:[c.jsx("div",{className:"lg:col-span-2",children:c.jsx("div",{className:"rounded-xl overflow-hidden bg-slate-100 border border-slate-200",children:c.jsx("img",{src:e.coverImage,alt:e.title,className:"w-full aspect-[4/3] object-cover",onError:t=>{const r=t.target;r.onerror=null,r.src=`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect fill="#e2e8f0" width="600" height="450"/><text fill="#94a3b8" font-family="system-ui,sans-serif" font-size="20" text-anchor="middle" x="300" y="235">${e.title}</text></svg>`)}`}})})}),c.jsxs("div",{className:"lg:col-span-3 flex flex-col justify-center",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[c.jsx(mn,{children:e.categoryName}),c.jsx(mn,{variant:"primary",children:e.platform})]}),c.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-slate-800 mb-3",children:e.title}),c.jsx("p",{className:"text-slate-500 mb-6 leading-relaxed",children:e.description}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[c.jsx(ac,{className:"w-4 h-4 text-slate-400"}),c.jsxs("span",{children:["更新于 ",pc(e.updatedAt)]})]}),c.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[c.jsx(rh,{className:"w-4 h-4 text-slate-400"}),c.jsx("span",{children:e.fileSize})]}),c.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[c.jsx(oc,{className:"w-4 h-4 text-slate-400"}),c.jsx("span",{children:e.platform})]}),c.jsx("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:c.jsx("span",{className:"font-mono text-slate-400",children:e.version})})]})]})]}),e.downloadLinks&&e.downloadLinks.length>0&&c.jsxs("div",{className:"mb-8",children:[c.jsxs("h2",{className:"text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2",children:[c.jsx(uc,{className:"w-5 h-5 text-blue-500"}),"下载链接"]}),c.jsx("div",{className:"space-y-4",children:e.downloadLinks.map((t,r)=>c.jsx(Qh,{section:t},r))})]}),c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-8",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-800 mb-4",children:"软件详情"}),c.jsx("div",{className:"max-w-none",children:e.content.split(`
`).map((t,r)=>t.startsWith("## ")?c.jsx("h3",{className:"text-base font-semibold text-blue-600 mt-6 mb-3",children:t.replace("## ","")},r):t.startsWith("- ")?c.jsx("li",{className:"text-slate-600 text-sm ml-4 mb-1",children:t.replace("- ","")},r):t.trim()===""?c.jsx("br",{},r):c.jsx("p",{className:"text-slate-600 text-sm leading-relaxed mb-2",children:t},r))})]}),e.screenshots.length>0&&c.jsxs("div",{className:"mb-8",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-800 mb-4",children:"软件截图"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.screenshots.map((t,r)=>c.jsx("div",{className:"rounded-xl overflow-hidden bg-slate-100 border border-slate-200",children:c.jsx("img",{src:t,alt:`截图 ${r+1}`,className:"w-full aspect-video object-cover",onError:l=>{const n=l.target;n.onerror=null,n.src=`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect fill="#e2e8f0" width="800" height="500"/><text fill="#94a3b8" font-family="system-ui,sans-serif" font-size="20" text-anchor="middle" x="400" y="260">截图 ${r+1}</text></svg>`)}`}})},r))})]})]})}function Kh(){const{slug:e}=du(),t=Z(n=>n.getSoftwareBySlug),r=Z(n=>n.setCurrentPage),l=e?t(e):void 0;return b.useEffect(()=>{r(1),window.scrollTo(0,0)},[e,r]),l?c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs(ar,{to:"/",className:"inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-8 transition-colors",children:[c.jsx(Y2,{className:"w-4 h-4"}),"返回首页"]}),c.jsx(Hh,{software:l})]}):c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",children:[c.jsx("p",{className:"text-slate-500",children:"软件不存在"}),c.jsx(ar,{to:"/",className:"text-blue-500 hover:text-blue-600 text-sm mt-4 inline-block",children:"返回首页"})]})}function Zh(){const[e]=Z2(),t=e.get("q")||"",r=Z(i=>i.setSearchQuery),l=Z(i=>i.searchQuery),n=Z(i=>i.setCurrentPage);return b.useEffect(()=>{t&&r(t),n(1)},[t,r,n]),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"mb-10",children:[c.jsx("h1",{className:"text-2xl font-bold text-slate-800 mb-2",children:"搜索结果"}),c.jsxs("p",{className:"text-slate-500",children:['搜索 "',l,'" 的结果']})]}),c.jsx(Wn,{})]})}function Jh(){return c.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[c.jsx("h1",{className:"text-3xl font-bold text-slate-800 mb-8",children:"关于本站"}),c.jsxs("div",{className:"space-y-6 text-slate-600 leading-relaxed",children:[c.jsx("p",{children:"软件分享是一个专注于绿色软件推荐与分享的个人站点。我们致力于为广大的软件爱好者提供安全、绿色、可靠的软件资源。"}),c.jsx("p",{children:"本站发布的每一款软件都经过亲自测试和验证，确保安全可用。我们坚持简洁高效的理念， 去除繁琐的用户系统，让您专注于软件发现与使用。"}),c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-6 mt-8",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-800 mb-4",children:"内容涵盖"}),c.jsxs("ul",{className:"grid grid-cols-2 gap-2 text-sm",children:[c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"工程设计与仿真"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"办公与文档"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"编程开发"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"图像媒体"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"数据分析"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"系统工具"]})]})]}),c.jsx("p",{className:"text-slate-400 text-sm mt-8",children:"本站仅供学习交流使用，请支持正版软件。"})]})]})}function Gh(){return c.jsx(R2,{children:c.jsxs(tt,{path:"/",element:c.jsx(Rh,{}),children:[c.jsx(tt,{index:!0,element:c.jsx(Bh,{})}),c.jsx(tt,{path:"category/:slug",element:c.jsx(Xh,{})}),c.jsx(tt,{path:"letter/:letter",element:c.jsx($h,{})}),c.jsx(tt,{path:"software/:slug",element:c.jsx(Kh,{})}),c.jsx(tt,{path:"search",element:c.jsx(Zh,{})}),c.jsx(tt,{path:"about",element:c.jsx(Jh,{})})]})})}fi.createRoot(document.getElementById("root")).render(c.jsx(ma.StrictMode,{children:c.jsx($2,{children:c.jsx(Gh,{})})}));
