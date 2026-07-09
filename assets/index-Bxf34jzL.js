function kc(e,t){for(var r=0;r<t.length;r++){const l=t[r];if(typeof l!="string"&&!Array.isArray(l)){for(const n in l)if(n!=="default"&&!(n in e)){const a=Object.getOwnPropertyDescriptor(l,n);a&&Object.defineProperty(e,n,a.get?a:{enumerable:!0,get:()=>l[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();function zo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wo={exports:{}},gn={},Oo={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=Symbol.for("react.element"),vc=Symbol.for("react.portal"),wc=Symbol.for("react.fragment"),bc=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),qc=Symbol.for("react.provider"),Ac=Symbol.for("react.context"),xc=Symbol.for("react.forward_ref"),Sc=Symbol.for("react.suspense"),Cc=Symbol.for("react.memo"),Dc=Symbol.for("react.lazy"),cu=Symbol.iterator;function Pc(e){return e===null||typeof e!="object"?null:(e=cu&&e[cu]||e["@@iterator"],typeof e=="function"?e:null)}var Ro={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vo=Object.assign,To={};function fr(e,t,r){this.props=e,this.context=t,this.refs=To,this.updater=r||Ro}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _o(){}_o.prototype=fr.prototype;function Ui(e,t,r){this.props=e,this.context=t,this.refs=To,this.updater=r||Ro}var hi=Ui.prototype=new _o;hi.constructor=Ui;Vo(hi,fr.prototype);hi.isPureReactComponent=!0;var Uu=Array.isArray,Fo=Object.prototype.hasOwnProperty,pi={current:null},Bo={key:!0,ref:!0,__self:!0,__source:!0};function Xo(e,t,r){var l,n={},a=null,i=null;if(t!=null)for(l in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Fo.call(t,l)&&!Bo.hasOwnProperty(l)&&(n[l]=t[l]);var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){for(var o=Array(u),d=0;d<u;d++)o[d]=arguments[d+2];n.children=o}if(e&&e.defaultProps)for(l in u=e.defaultProps,u)n[l]===void 0&&(n[l]=u[l]);return{$$typeof:ul,type:e,key:a,ref:i,props:n,_owner:pi.current}}function Nc(e,t){return{$$typeof:ul,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fi(e){return typeof e=="object"&&e!==null&&e.$$typeof===ul}function Ec(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var hu=/\/+/g;function Tn(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ec(""+e.key):t.toString(36)}function Ll(e,t,r,l,n){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ul:case vc:i=!0}}if(i)return i=e,n=n(i),e=l===""?"."+Tn(i,0):l,Uu(n)?(r="",e!=null&&(r=e.replace(hu,"$&/")+"/"),Ll(n,t,r,"",function(d){return d})):n!=null&&(fi(n)&&(n=Nc(n,r+(!n.key||i&&i.key===n.key?"":(""+n.key).replace(hu,"$&/")+"/")+e)),t.push(n)),1;if(i=0,l=l===""?".":l+":",Uu(e))for(var u=0;u<e.length;u++){a=e[u];var o=l+Tn(a,u);i+=Ll(a,t,r,o,n)}else if(o=Pc(e),typeof o=="function")for(e=o.call(e),u=0;!(a=e.next()).done;)a=a.value,o=l+Tn(a,u++),i+=Ll(a,t,r,o,n);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function fl(e,t,r){if(e==null)return e;var l=[],n=0;return Ll(e,l,"","",function(a){return t.call(r,a,n++)}),l}function Lc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Ml={transition:null},Mc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Ml,ReactCurrentOwner:pi};function Qo(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:fl,forEach:function(e,t,r){fl(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return fl(e,function(){t++}),t},toArray:function(e){return fl(e,function(t){return t})||[]},only:function(e){if(!fi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=fr;L.Fragment=wc;L.Profiler=yc;L.PureComponent=Ui;L.StrictMode=bc;L.Suspense=Sc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mc;L.act=Qo;L.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=Vo({},e.props),n=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=pi.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(o in t)Fo.call(t,o)&&!Bo.hasOwnProperty(o)&&(l[o]=t[o]===void 0&&u!==void 0?u[o]:t[o])}var o=arguments.length-2;if(o===1)l.children=r;else if(1<o){u=Array(o);for(var d=0;d<o;d++)u[d]=arguments[d+2];l.children=u}return{$$typeof:ul,type:e.type,key:n,ref:a,props:l,_owner:i}};L.createContext=function(e){return e={$$typeof:Ac,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qc,_context:e},e.Consumer=e};L.createElement=Xo;L.createFactory=function(e){var t=Xo.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:xc,render:e}};L.isValidElement=fi;L.lazy=function(e){return{$$typeof:Dc,_payload:{_status:-1,_result:e},_init:Lc}};L.memo=function(e,t){return{$$typeof:Cc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Ml.transition;Ml.transition={};try{e()}finally{Ml.transition=t}};L.unstable_act=Qo;L.useCallback=function(e,t){return se.current.useCallback(e,t)};L.useContext=function(e){return se.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return se.current.useDeferredValue(e)};L.useEffect=function(e,t){return se.current.useEffect(e,t)};L.useId=function(){return se.current.useId()};L.useImperativeHandle=function(e,t,r){return se.current.useImperativeHandle(e,t,r)};L.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return se.current.useMemo(e,t)};L.useReducer=function(e,t,r){return se.current.useReducer(e,t,r)};L.useRef=function(e){return se.current.useRef(e)};L.useState=function(e){return se.current.useState(e)};L.useSyncExternalStore=function(e,t,r){return se.current.useSyncExternalStore(e,t,r)};L.useTransition=function(){return se.current.useTransition()};L.version="18.3.1";Oo.exports=L;var y=Oo.exports;const mi=zo(y),Ic=kc({__proto__:null,default:mi},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=y,zc=Symbol.for("react.element"),Wc=Symbol.for("react.fragment"),Oc=Object.prototype.hasOwnProperty,Rc=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vc={key:!0,ref:!0,__self:!0,__source:!0};function Zo(e,t,r){var l,n={},a=null,i=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(l in t)Oc.call(t,l)&&!Vc.hasOwnProperty(l)&&(n[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)n[l]===void 0&&(n[l]=t[l]);return{$$typeof:zc,type:e,key:a,ref:i,props:n,_owner:Rc.current}}gn.Fragment=Wc;gn.jsx=Zo;gn.jsxs=Zo;Wo.exports=gn;var c=Wo.exports,fa={},Ho={exports:{}},be={},Jo={exports:{}},Go={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,N){var E=S.length;S.push(N);e:for(;0<E;){var X=E-1>>>1,Y=S[X];if(0<n(Y,N))S[X]=N,S[E]=Y,E=X;else break e}}function r(S){return S.length===0?null:S[0]}function l(S){if(S.length===0)return null;var N=S[0],E=S.pop();if(E!==N){S[0]=E;e:for(var X=0,Y=S.length,hl=Y>>>1;X<hl;){var qt=2*(X+1)-1,Vn=S[qt],At=qt+1,pl=S[At];if(0>n(Vn,E))At<Y&&0>n(pl,Vn)?(S[X]=pl,S[At]=E,X=At):(S[X]=Vn,S[qt]=E,X=qt);else if(At<Y&&0>n(pl,E))S[X]=pl,S[At]=E,X=At;else break e}}return N}function n(S,N){var E=S.sortIndex-N.sortIndex;return E!==0?E:S.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var o=[],d=[],m=1,h=null,f=3,g=!1,v=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var N=r(d);N!==null;){if(N.callback===null)l(d);else if(N.startTime<=S)l(d),N.sortIndex=N.expirationTime,t(o,N);else break;N=r(d)}}function k(S){if(w=!1,p(S),!v)if(r(o)!==null)v=!0,On(q);else{var N=r(d);N!==null&&Rn(k,N.startTime-S)}}function q(S,N){v=!1,w&&(w=!1,U(P),P=-1),g=!0;var E=f;try{for(p(N),h=r(o);h!==null&&(!(h.expirationTime>N)||S&&!Pe());){var X=h.callback;if(typeof X=="function"){h.callback=null,f=h.priorityLevel;var Y=X(h.expirationTime<=N);N=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===r(o)&&l(o),p(N)}else l(o);h=r(o)}if(h!==null)var hl=!0;else{var qt=r(d);qt!==null&&Rn(k,qt.startTime-N),hl=!1}return hl}finally{h=null,f=E,g=!1}}var C=!1,D=null,P=-1,B=5,M=-1;function Pe(){return!(e.unstable_now()-M<B)}function vr(){if(D!==null){var S=e.unstable_now();M=S;var N=!0;try{N=D(!0,S)}finally{N?wr():(C=!1,D=null)}}else C=!1}var wr;if(typeof s=="function")wr=function(){s(vr)};else if(typeof MessageChannel<"u"){var su=new MessageChannel,gc=su.port2;su.port1.onmessage=vr,wr=function(){gc.postMessage(null)}}else wr=function(){A(vr,0)};function On(S){D=S,C||(C=!0,wr())}function Rn(S,N){P=A(function(){S(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,On(q))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(o)},e.unstable_next=function(S){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var E=f;f=N;try{return S()}finally{f=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,N){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var E=f;f=S;try{return N()}finally{f=E}},e.unstable_scheduleCallback=function(S,N,E){var X=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?X+E:X):E=X,S){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=E+Y,S={id:m++,callback:N,priorityLevel:S,startTime:E,expirationTime:Y,sortIndex:-1},E>X?(S.sortIndex=E,t(d,S),r(o)===null&&S===r(d)&&(w?(U(P),P=-1):w=!0,Rn(k,E-X))):(S.sortIndex=Y,t(o,S),v||g||(v=!0,On(q))),S},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(S){var N=f;return function(){var E=f;f=N;try{return S.apply(this,arguments)}finally{f=E}}}})(Go);Jo.exports=Go;var Tc=Jo.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=y,we=Tc;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ko=new Set,_r={};function Wt(e,t){ur(e,t),ur(e+"Capture",t)}function ur(e,t){for(_r[e]=t,e=0;e<t.length;e++)Ko.add(t[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ma=Object.prototype.hasOwnProperty,Fc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pu={},fu={};function Bc(e){return ma.call(fu,e)?!0:ma.call(pu,e)?!1:Fc.test(e)?fu[e]=!0:(pu[e]=!0,!1)}function Xc(e,t,r,l){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qc(e,t,r,l){if(t===null||typeof t>"u"||Xc(e,t,r,l))return!0;if(l)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,r,l,n,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var gi=/[\-:]([a-z])/g;function ki(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gi,ki);le[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gi,ki);le[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gi,ki);le[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function vi(e,t,r,l){var n=le.hasOwnProperty(t)?le[t]:null;(n!==null?n.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qc(t,r,n,l)&&(r=null),l||n===null?Bc(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):n.mustUseProperty?e[n.propertyName]=r===null?n.type===3?!1:"":r:(t=n.attributeName,l=n.attributeNamespace,r===null?e.removeAttribute(t):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,l?e.setAttributeNS(l,t,r):e.setAttribute(t,r))))}var Ye=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),_t=Symbol.for("react.portal"),Ft=Symbol.for("react.fragment"),wi=Symbol.for("react.strict_mode"),ga=Symbol.for("react.profiler"),Yo=Symbol.for("react.provider"),$o=Symbol.for("react.context"),bi=Symbol.for("react.forward_ref"),ka=Symbol.for("react.suspense"),va=Symbol.for("react.suspense_list"),yi=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),ed=Symbol.for("react.offscreen"),mu=Symbol.iterator;function br(e){return e===null||typeof e!="object"?null:(e=mu&&e[mu]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,_n;function Pr(e){if(_n===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);_n=t&&t[1]||""}return`
`+_n+e}var Fn=!1;function Bn(e,t){if(!e||Fn)return"";Fn=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var l=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){l=d}e.call(t.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var n=d.stack.split(`
`),a=l.stack.split(`
`),i=n.length-1,u=a.length-1;1<=i&&0<=u&&n[i]!==a[u];)u--;for(;1<=i&&0<=u;i--,u--)if(n[i]!==a[u]){if(i!==1||u!==1)do if(i--,u--,0>u||n[i]!==a[u]){var o=`
`+n[i].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=i&&0<=u);break}}}finally{Fn=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Pr(e):""}function Zc(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=Bn(e.type,!1),e;case 11:return e=Bn(e.type.render,!1),e;case 1:return e=Bn(e.type,!0),e;default:return""}}function wa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ft:return"Fragment";case _t:return"Portal";case ga:return"Profiler";case wi:return"StrictMode";case ka:return"Suspense";case va:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $o:return(e.displayName||"Context")+".Consumer";case Yo:return(e._context.displayName||"Context")+".Provider";case bi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yi:return t=e.displayName||null,t!==null?t:wa(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return wa(e(t))}catch{}}return null}function Hc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wa(t);case 8:return t===wi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function td(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jc(e){var t=td(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gl(e){e._valueTracker||(e._valueTracker=Jc(e))}function rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),l="";return e&&(l=td(e)?e.checked?"true":"false":e.value),e=l,e!==r?(t.setValue(e),!0):!1}function Bl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ba(e,t){var r=t.checked;return _({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function gu(e,t){var r=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;r=kt(t.value!=null?t.value:r),e._wrapperState={initialChecked:l,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ld(e,t){t=t.checked,t!=null&&vi(e,"checked",t,!1)}function ya(e,t){ld(e,t);var r=kt(t.value),l=t.type;if(r!=null)l==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qa(e,t.type,r):t.hasOwnProperty("defaultValue")&&qa(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ku(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function qa(e,t,r){(t!=="number"||Bl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Nr=Array.isArray;function er(e,t,r,l){if(e=e.options,t){t={};for(var n=0;n<r.length;n++)t["$"+r[n]]=!0;for(r=0;r<e.length;r++)n=t.hasOwnProperty("$"+e[r].value),e[r].selected!==n&&(e[r].selected=n),n&&l&&(e[r].defaultSelected=!0)}else{for(r=""+kt(r),t=null,n=0;n<e.length;n++){if(e[n].value===r){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Aa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return _({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(b(92));if(Nr(r)){if(1<r.length)throw Error(b(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:kt(r)}}function nd(e,t){var r=kt(t.value),l=kt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),l!=null&&(e.defaultValue=""+l)}function wu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ad(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ad(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kl,id=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,l,n){MSApp.execUnsafeLocalFunction(function(){return e(t,r,l,n)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kl=kl||document.createElement("div"),kl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gc=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){Gc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function ud(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function od(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var l=r.indexOf("--")===0,n=ud(r,t[r],l);r==="float"&&(r="cssFloat"),l?e.setProperty(r,n):e[r]=n}}var Kc=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sa(e,t){if(t){if(Kc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function Ca(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Da=null;function qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,tr=null,rr=null;function bu(e){if(e=sl(e)){if(typeof Pa!="function")throw Error(b(280));var t=e.stateNode;t&&(t=yn(t),Pa(e.stateNode,e.type,t))}}function dd(e){tr?rr?rr.push(e):rr=[e]:tr=e}function sd(){if(tr){var e=tr,t=rr;if(rr=tr=null,bu(e),t)for(e=0;e<t.length;e++)bu(t[e])}}function cd(e,t){return e(t)}function Ud(){}var Xn=!1;function hd(e,t,r){if(Xn)return e(t,r);Xn=!0;try{return cd(e,t,r)}finally{Xn=!1,(tr!==null||rr!==null)&&(Ud(),sd())}}function Br(e,t){var r=e.stateNode;if(r===null)return null;var l=yn(r);if(l===null)return null;r=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(b(231,t,typeof r));return r}var Na=!1;if(He)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){Na=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{Na=!1}function Yc(e,t,r,l,n,a,i,u,o){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(m){this.onError(m)}}var Ir=!1,Xl=null,Ql=!1,Ea=null,$c={onError:function(e){Ir=!0,Xl=e}};function e0(e,t,r,l,n,a,i,u,o){Ir=!1,Xl=null,Yc.apply($c,arguments)}function t0(e,t,r,l,n,a,i,u,o){if(e0.apply(this,arguments),Ir){if(Ir){var d=Xl;Ir=!1,Xl=null}else throw Error(b(198));Ql||(Ql=!0,Ea=d)}}function Ot(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function pd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yu(e){if(Ot(e)!==e)throw Error(b(188))}function r0(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(b(188));return t!==e?null:e}for(var r=e,l=t;;){var n=r.return;if(n===null)break;var a=n.alternate;if(a===null){if(l=n.return,l!==null){r=l;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===r)return yu(n),e;if(a===l)return yu(n),t;a=a.sibling}throw Error(b(188))}if(r.return!==l.return)r=n,l=a;else{for(var i=!1,u=n.child;u;){if(u===r){i=!0,r=n,l=a;break}if(u===l){i=!0,l=n,r=a;break}u=u.sibling}if(!i){for(u=a.child;u;){if(u===r){i=!0,r=a,l=n;break}if(u===l){i=!0,l=a,r=n;break}u=u.sibling}if(!i)throw Error(b(189))}}if(r.alternate!==l)throw Error(b(190))}if(r.tag!==3)throw Error(b(188));return r.stateNode.current===r?e:t}function fd(e){return e=r0(e),e!==null?md(e):null}function md(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=md(e);if(t!==null)return t;e=e.sibling}return null}var gd=we.unstable_scheduleCallback,qu=we.unstable_cancelCallback,l0=we.unstable_shouldYield,n0=we.unstable_requestPaint,Q=we.unstable_now,a0=we.unstable_getCurrentPriorityLevel,Ai=we.unstable_ImmediatePriority,kd=we.unstable_UserBlockingPriority,Zl=we.unstable_NormalPriority,i0=we.unstable_LowPriority,vd=we.unstable_IdlePriority,kn=null,Ve=null;function u0(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(kn,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:s0,o0=Math.log,d0=Math.LN2;function s0(e){return e>>>=0,e===0?32:31-(o0(e)/d0|0)|0}var vl=64,wl=4194304;function Er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hl(e,t){var r=e.pendingLanes;if(r===0)return 0;var l=0,n=e.suspendedLanes,a=e.pingedLanes,i=r&268435455;if(i!==0){var u=i&~n;u!==0?l=Er(u):(a&=i,a!==0&&(l=Er(a)))}else i=r&~n,i!==0?l=Er(i):a!==0&&(l=Er(a));if(l===0)return 0;if(t!==0&&t!==l&&!(t&n)&&(n=l&-l,a=t&-t,n>=a||n===16&&(a&4194240)!==0))return t;if(l&4&&(l|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)r=31-Ie(t),n=1<<r,l|=e[r],t&=~n;return l}function c0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U0(e,t){for(var r=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Ie(a),u=1<<i,o=n[i];o===-1?(!(u&r)||u&l)&&(n[i]=c0(u,t)):o<=t&&(e.expiredLanes|=u),a&=~u}}function La(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wd(){var e=vl;return vl<<=1,!(vl&4194240)&&(vl=64),e}function Qn(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ol(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=r}function h0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<r;){var n=31-Ie(r),a=1<<n;t[n]=0,l[n]=-1,e[n]=-1,r&=~a}}function xi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var l=31-Ie(r),n=1<<l;n&t|e[l]&t&&(e[l]|=t),r&=~n}}var j=0;function bd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yd,Si,qd,Ad,xd,Ma=!1,bl=[],dt=null,st=null,ct=null,Xr=new Map,Qr=new Map,nt=[],p0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function qr(e,t,r,l,n,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:l,nativeEvent:a,targetContainers:[n]},t!==null&&(t=sl(t),t!==null&&Si(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function f0(e,t,r,l,n){switch(t){case"focusin":return dt=qr(dt,e,t,r,l,n),!0;case"dragenter":return st=qr(st,e,t,r,l,n),!0;case"mouseover":return ct=qr(ct,e,t,r,l,n),!0;case"pointerover":var a=n.pointerId;return Xr.set(a,qr(Xr.get(a)||null,e,t,r,l,n)),!0;case"gotpointercapture":return a=n.pointerId,Qr.set(a,qr(Qr.get(a)||null,e,t,r,l,n)),!0}return!1}function Sd(e){var t=Ct(e.target);if(t!==null){var r=Ot(t);if(r!==null){if(t=r.tag,t===13){if(t=pd(r),t!==null){e.blockedOn=t,xd(e.priority,function(){qd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Il(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ia(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Da=l,r.target.dispatchEvent(l),Da=null}else return t=sl(r),t!==null&&Si(t),e.blockedOn=r,!1;t.shift()}return!0}function xu(e,t,r){Il(e)&&r.delete(t)}function m0(){Ma=!1,dt!==null&&Il(dt)&&(dt=null),st!==null&&Il(st)&&(st=null),ct!==null&&Il(ct)&&(ct=null),Xr.forEach(xu),Qr.forEach(xu)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Ma||(Ma=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,m0)))}function Zr(e){function t(n){return Ar(n,e)}if(0<bl.length){Ar(bl[0],e);for(var r=1;r<bl.length;r++){var l=bl[r];l.blockedOn===e&&(l.blockedOn=null)}}for(dt!==null&&Ar(dt,e),st!==null&&Ar(st,e),ct!==null&&Ar(ct,e),Xr.forEach(t),Qr.forEach(t),r=0;r<nt.length;r++)l=nt[r],l.blockedOn===e&&(l.blockedOn=null);for(;0<nt.length&&(r=nt[0],r.blockedOn===null);)Sd(r),r.blockedOn===null&&nt.shift()}var lr=Ye.ReactCurrentBatchConfig,Jl=!0;function g0(e,t,r,l){var n=j,a=lr.transition;lr.transition=null;try{j=1,Ci(e,t,r,l)}finally{j=n,lr.transition=a}}function k0(e,t,r,l){var n=j,a=lr.transition;lr.transition=null;try{j=4,Ci(e,t,r,l)}finally{j=n,lr.transition=a}}function Ci(e,t,r,l){if(Jl){var n=Ia(e,t,r,l);if(n===null)ra(e,t,l,Gl,r),Au(e,l);else if(f0(n,e,t,r,l))l.stopPropagation();else if(Au(e,l),t&4&&-1<p0.indexOf(e)){for(;n!==null;){var a=sl(n);if(a!==null&&yd(a),a=Ia(e,t,r,l),a===null&&ra(e,t,l,Gl,r),a===n)break;n=a}n!==null&&l.stopPropagation()}else ra(e,t,l,null,r)}}var Gl=null;function Ia(e,t,r,l){if(Gl=null,e=qi(l),e=Ct(e),e!==null)if(t=Ot(e),t===null)e=null;else if(r=t.tag,r===13){if(e=pd(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gl=e,null}function Cd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a0()){case Ai:return 1;case kd:return 4;case Zl:case i0:return 16;case vd:return 536870912;default:return 16}default:return 16}}var it=null,Di=null,jl=null;function Dd(){if(jl)return jl;var e,t=Di,r=t.length,l,n="value"in it?it.value:it.textContent,a=n.length;for(e=0;e<r&&t[e]===n[e];e++);var i=r-e;for(l=1;l<=i&&t[r-l]===n[a-l];l++);return jl=n.slice(e,1<l?1-l:void 0)}function zl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Su(){return!1}function ye(e){function t(r,l,n,a,i){this._reactName=r,this._targetInst=n,this.type=l,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(r=e[u],this[u]=r?r(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?yl:Su,this.isPropagationStopped=Su,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=ye(mr),dl=_({},mr,{view:0,detail:0}),v0=ye(dl),Zn,Hn,xr,vn=_({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(Zn=e.screenX-xr.screenX,Hn=e.screenY-xr.screenY):Hn=Zn=0,xr=e),Zn)},movementY:function(e){return"movementY"in e?e.movementY:Hn}}),Cu=ye(vn),w0=_({},vn,{dataTransfer:0}),b0=ye(w0),y0=_({},dl,{relatedTarget:0}),Jn=ye(y0),q0=_({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),A0=ye(q0),x0=_({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S0=ye(x0),C0=_({},mr,{data:0}),Du=ye(C0),D0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=N0[e])?!!t[e]:!1}function Ni(){return E0}var L0=_({},dl,{key:function(e){if(e.key){var t=D0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ni,charCode:function(e){return e.type==="keypress"?zl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M0=ye(L0),I0=_({},vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=ye(I0),j0=_({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ni}),z0=ye(j0),W0=_({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),O0=ye(W0),R0=_({},vn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),V0=ye(R0),T0=[9,13,27,32],Ei=He&&"CompositionEvent"in window,jr=null;He&&"documentMode"in document&&(jr=document.documentMode);var _0=He&&"TextEvent"in window&&!jr,Pd=He&&(!Ei||jr&&8<jr&&11>=jr),Nu=" ",Eu=!1;function Nd(e,t){switch(e){case"keyup":return T0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bt=!1;function F0(e,t){switch(e){case"compositionend":return Ed(t);case"keypress":return t.which!==32?null:(Eu=!0,Nu);case"textInput":return e=t.data,e===Nu&&Eu?null:e;default:return null}}function B0(e,t){if(Bt)return e==="compositionend"||!Ei&&Nd(e,t)?(e=Dd(),jl=Di=it=null,Bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pd&&t.locale!=="ko"?null:t.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!X0[e.type]:t==="textarea"}function Ld(e,t,r,l){dd(l),t=Kl(t,"onChange"),0<t.length&&(r=new Pi("onChange","change",null,r,l),e.push({event:r,listeners:t}))}var zr=null,Hr=null;function Q0(e){Fd(e,0)}function wn(e){var t=Zt(e);if(rd(t))return e}function Z0(e,t){if(e==="change")return t}var Md=!1;if(He){var Gn;if(He){var Kn="oninput"in document;if(!Kn){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),Kn=typeof Mu.oninput=="function"}Gn=Kn}else Gn=!1;Md=Gn&&(!document.documentMode||9<document.documentMode)}function Iu(){zr&&(zr.detachEvent("onpropertychange",Id),Hr=zr=null)}function Id(e){if(e.propertyName==="value"&&wn(Hr)){var t=[];Ld(t,Hr,e,qi(e)),hd(Q0,t)}}function H0(e,t,r){e==="focusin"?(Iu(),zr=t,Hr=r,zr.attachEvent("onpropertychange",Id)):e==="focusout"&&Iu()}function J0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wn(Hr)}function G0(e,t){if(e==="click")return wn(t)}function K0(e,t){if(e==="input"||e==="change")return wn(t)}function Y0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:Y0;function Jr(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),l=Object.keys(t);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var n=r[l];if(!ma.call(t,n)||!ze(e[n],t[n]))return!1}return!0}function ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,t){var r=ju(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=t&&l>=t)return{node:r,offset:t-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ju(r)}}function jd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zd(){for(var e=window,t=Bl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Bl(e.document)}return t}function Li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $0(e){var t=zd(),r=e.focusedElem,l=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&jd(r.ownerDocument.documentElement,r)){if(l!==null&&Li(r)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var n=r.textContent.length,a=Math.min(l.start,n);l=l.end===void 0?a:Math.min(l.end,n),!e.extend&&a>l&&(n=l,l=a,a=n),n=zu(r,a);var i=zu(r,l);n&&i&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(n.node,n.offset),e.removeAllRanges(),a>l?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var eU=He&&"documentMode"in document&&11>=document.documentMode,Xt=null,ja=null,Wr=null,za=!1;function Wu(e,t,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;za||Xt==null||Xt!==Bl(l)||(l=Xt,"selectionStart"in l&&Li(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wr&&Jr(Wr,l)||(Wr=l,l=Kl(ja,"onSelect"),0<l.length&&(t=new Pi("onSelect","select",null,t,r),e.push({event:t,listeners:l}),t.target=Xt)))}function ql(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Qt={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},Yn={},Wd={};He&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function bn(e){if(Yn[e])return Yn[e];if(!Qt[e])return e;var t=Qt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Wd)return Yn[e]=t[r];return e}var Od=bn("animationend"),Rd=bn("animationiteration"),Vd=bn("animationstart"),Td=bn("transitionend"),_d=new Map,Ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){_d.set(e,t),Wt(t,[e])}for(var $n=0;$n<Ou.length;$n++){var ea=Ou[$n],tU=ea.toLowerCase(),rU=ea[0].toUpperCase()+ea.slice(1);wt(tU,"on"+rU)}wt(Od,"onAnimationEnd");wt(Rd,"onAnimationIteration");wt(Vd,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(Td,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lU=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Ru(e,t,r){var l=e.type||"unknown-event";e.currentTarget=r,t0(l,t,void 0,e),e.currentTarget=null}function Fd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],n=l.event;l=l.listeners;e:{var a=void 0;if(t)for(var i=l.length-1;0<=i;i--){var u=l[i],o=u.instance,d=u.currentTarget;if(u=u.listener,o!==a&&n.isPropagationStopped())break e;Ru(n,u,d),a=o}else for(i=0;i<l.length;i++){if(u=l[i],o=u.instance,d=u.currentTarget,u=u.listener,o!==a&&n.isPropagationStopped())break e;Ru(n,u,d),a=o}}}if(Ql)throw e=Ea,Ql=!1,Ea=null,e}function W(e,t){var r=t[Ta];r===void 0&&(r=t[Ta]=new Set);var l=e+"__bubble";r.has(l)||(Bd(t,e,2,!1),r.add(l))}function ta(e,t,r){var l=0;t&&(l|=4),Bd(r,e,l,t)}var Al="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Al]){e[Al]=!0,Ko.forEach(function(r){r!=="selectionchange"&&(lU.has(r)||ta(r,!1,e),ta(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Al]||(t[Al]=!0,ta("selectionchange",!1,t))}}function Bd(e,t,r,l){switch(Cd(t)){case 1:var n=g0;break;case 4:n=k0;break;default:n=Ci}r=n.bind(null,t,r,e),n=void 0,!Na||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,r,{capture:!0,passive:n}):e.addEventListener(t,r,!0):n!==void 0?e.addEventListener(t,r,{passive:n}):e.addEventListener(t,r,!1)}function ra(e,t,r,l,n){var a=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var u=l.stateNode.containerInfo;if(u===n||u.nodeType===8&&u.parentNode===n)break;if(i===4)for(i=l.return;i!==null;){var o=i.tag;if((o===3||o===4)&&(o=i.stateNode.containerInfo,o===n||o.nodeType===8&&o.parentNode===n))return;i=i.return}for(;u!==null;){if(i=Ct(u),i===null)return;if(o=i.tag,o===5||o===6){l=a=i;continue e}u=u.parentNode}}l=l.return}hd(function(){var d=a,m=qi(r),h=[];e:{var f=_d.get(e);if(f!==void 0){var g=Pi,v=e;switch(e){case"keypress":if(zl(r)===0)break e;case"keydown":case"keyup":g=M0;break;case"focusin":v="focus",g=Jn;break;case"focusout":v="blur",g=Jn;break;case"beforeblur":case"afterblur":g=Jn;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=z0;break;case Od:case Rd:case Vd:g=A0;break;case Td:g=O0;break;case"scroll":g=v0;break;case"wheel":g=V0;break;case"copy":case"cut":case"paste":g=S0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Pu}var w=(t&4)!==0,A=!w&&e==="scroll",U=w?f!==null?f+"Capture":null:f;w=[];for(var s=d,p;s!==null;){p=s;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,U!==null&&(k=Br(s,U),k!=null&&w.push(Kr(s,k,p)))),A)break;s=s.return}0<w.length&&(f=new g(f,v,null,r,m),h.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&r!==Da&&(v=r.relatedTarget||r.fromElement)&&(Ct(v)||v[Je]))break e;if((g||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=r.relatedTarget||r.toElement,g=d,v=v?Ct(v):null,v!==null&&(A=Ot(v),v!==A||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=d),g!==v)){if(w=Cu,k="onMouseLeave",U="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(w=Pu,k="onPointerLeave",U="onPointerEnter",s="pointer"),A=g==null?f:Zt(g),p=v==null?f:Zt(v),f=new w(k,s+"leave",g,r,m),f.target=A,f.relatedTarget=p,k=null,Ct(m)===d&&(w=new w(U,s+"enter",v,r,m),w.target=p,w.relatedTarget=A,k=w),A=k,g&&v)t:{for(w=g,U=v,s=0,p=w;p;p=Tt(p))s++;for(p=0,k=U;k;k=Tt(k))p++;for(;0<s-p;)w=Tt(w),s--;for(;0<p-s;)U=Tt(U),p--;for(;s--;){if(w===U||U!==null&&w===U.alternate)break t;w=Tt(w),U=Tt(U)}w=null}else w=null;g!==null&&Vu(h,f,g,w,!1),v!==null&&A!==null&&Vu(h,A,v,w,!0)}}e:{if(f=d?Zt(d):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var q=Z0;else if(Lu(f))if(Md)q=K0;else{q=J0;var C=H0}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(q=G0);if(q&&(q=q(e,d))){Ld(h,q,r,m);break e}C&&C(e,f,d),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&qa(f,"number",f.value)}switch(C=d?Zt(d):window,e){case"focusin":(Lu(C)||C.contentEditable==="true")&&(Xt=C,ja=d,Wr=null);break;case"focusout":Wr=ja=Xt=null;break;case"mousedown":za=!0;break;case"contextmenu":case"mouseup":case"dragend":za=!1,Wu(h,r,m);break;case"selectionchange":if(eU)break;case"keydown":case"keyup":Wu(h,r,m)}var D;if(Ei)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Bt?Nd(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Pd&&r.locale!=="ko"&&(Bt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Bt&&(D=Dd()):(it=m,Di="value"in it?it.value:it.textContent,Bt=!0)),C=Kl(d,P),0<C.length&&(P=new Du(P,e,null,r,m),h.push({event:P,listeners:C}),D?P.data=D:(D=Ed(r),D!==null&&(P.data=D)))),(D=_0?F0(e,r):B0(e,r))&&(d=Kl(d,"onBeforeInput"),0<d.length&&(m=new Du("onBeforeInput","beforeinput",null,r,m),h.push({event:m,listeners:d}),m.data=D))}Fd(h,t)})}function Kr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Kl(e,t){for(var r=t+"Capture",l=[];e!==null;){var n=e,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=Br(e,r),a!=null&&l.unshift(Kr(e,a,n)),a=Br(e,t),a!=null&&l.push(Kr(e,a,n))),e=e.return}return l}function Tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vu(e,t,r,l,n){for(var a=t._reactName,i=[];r!==null&&r!==l;){var u=r,o=u.alternate,d=u.stateNode;if(o!==null&&o===l)break;u.tag===5&&d!==null&&(u=d,n?(o=Br(r,a),o!=null&&i.unshift(Kr(r,o,u))):n||(o=Br(r,a),o!=null&&i.push(Kr(r,o,u)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var nU=/\r\n?/g,aU=/\u0000|\uFFFD/g;function Tu(e){return(typeof e=="string"?e:""+e).replace(nU,`
`).replace(aU,"")}function xl(e,t,r){if(t=Tu(t),Tu(e)!==t&&r)throw Error(b(425))}function Yl(){}var Wa=null,Oa=null;function Ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,iU=typeof clearTimeout=="function"?clearTimeout:void 0,_u=typeof Promise=="function"?Promise:void 0,uU=typeof queueMicrotask=="function"?queueMicrotask:typeof _u<"u"?function(e){return _u.resolve(null).then(e).catch(oU)}:Va;function oU(e){setTimeout(function(){throw e})}function la(e,t){var r=t,l=0;do{var n=r.nextSibling;if(e.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(l===0){e.removeChild(n),Zr(t);return}l--}else r!=="$"&&r!=="$?"&&r!=="$!"||l++;r=n}while(r);Zr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),Re="__reactFiber$"+gr,Yr="__reactProps$"+gr,Je="__reactContainer$"+gr,Ta="__reactEvents$"+gr,dU="__reactListeners$"+gr,sU="__reactHandles$"+gr;function Ct(e){var t=e[Re];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Je]||r[Re]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Fu(e);e!==null;){if(r=e[Re])return r;e=Fu(e)}return t}e=r,r=e.parentNode}return null}function sl(e){return e=e[Re]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function yn(e){return e[Yr]||null}var _a=[],Ht=-1;function bt(e){return{current:e}}function O(e){0>Ht||(e.current=_a[Ht],_a[Ht]=null,Ht--)}function z(e,t){Ht++,_a[Ht]=e.current,e.current=t}var vt={},ue=bt(vt),pe=bt(!1),Lt=vt;function or(e,t){var r=e.type.contextTypes;if(!r)return vt;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in r)n[a]=t[a];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=n),n}function fe(e){return e=e.childContextTypes,e!=null}function $l(){O(pe),O(ue)}function Bu(e,t,r){if(ue.current!==vt)throw Error(b(168));z(ue,t),z(pe,r)}function Xd(e,t,r){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return r;l=l.getChildContext();for(var n in l)if(!(n in t))throw Error(b(108,Hc(e)||"Unknown",n));return _({},r,l)}function en(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Lt=ue.current,z(ue,e),z(pe,pe.current),!0}function Xu(e,t,r){var l=e.stateNode;if(!l)throw Error(b(169));r?(e=Xd(e,t,Lt),l.__reactInternalMemoizedMergedChildContext=e,O(pe),O(ue),z(ue,e)):O(pe),z(pe,r)}var Be=null,qn=!1,na=!1;function Qd(e){Be===null?Be=[e]:Be.push(e)}function cU(e){qn=!0,Qd(e)}function yt(){if(!na&&Be!==null){na=!0;var e=0,t=j;try{var r=Be;for(j=1;e<r.length;e++){var l=r[e];do l=l(!0);while(l!==null)}Be=null,qn=!1}catch(n){throw Be!==null&&(Be=Be.slice(e+1)),gd(Ai,yt),n}finally{j=t,na=!1}}return null}var Jt=[],Gt=0,tn=null,rn=0,qe=[],Ae=0,Mt=null,Xe=1,Qe="";function xt(e,t){Jt[Gt++]=rn,Jt[Gt++]=tn,tn=e,rn=t}function Zd(e,t,r){qe[Ae++]=Xe,qe[Ae++]=Qe,qe[Ae++]=Mt,Mt=e;var l=Xe;e=Qe;var n=32-Ie(l)-1;l&=~(1<<n),r+=1;var a=32-Ie(t)+n;if(30<a){var i=n-n%5;a=(l&(1<<i)-1).toString(32),l>>=i,n-=i,Xe=1<<32-Ie(t)+n|r<<n|l,Qe=a+e}else Xe=1<<a|r<<n|l,Qe=e}function Mi(e){e.return!==null&&(xt(e,1),Zd(e,1,0))}function Ii(e){for(;e===tn;)tn=Jt[--Gt],Jt[Gt]=null,rn=Jt[--Gt],Jt[Gt]=null;for(;e===Mt;)Mt=qe[--Ae],qe[Ae]=null,Qe=qe[--Ae],qe[Ae]=null,Xe=qe[--Ae],qe[Ae]=null}var ve=null,ke=null,R=!1,Me=null;function Hd(e,t){var r=xe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Qu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ke=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Mt!==null?{id:Xe,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=xe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ve=e,ke=null,!0):!1;default:return!1}}function Fa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(R){var t=ke;if(t){var r=t;if(!Qu(e,t)){if(Fa(e))throw Error(b(418));t=Ut(r.nextSibling);var l=ve;t&&Qu(e,t)?Hd(l,r):(e.flags=e.flags&-4097|2,R=!1,ve=e)}}else{if(Fa(e))throw Error(b(418));e.flags=e.flags&-4097|2,R=!1,ve=e}}}function Zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function Sl(e){if(e!==ve)return!1;if(!R)return Zu(e),R=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ra(e.type,e.memoizedProps)),t&&(t=ke)){if(Fa(e))throw Jd(),Error(b(418));for(;t;)Hd(e,t),t=Ut(t.nextSibling)}if(Zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ke=Ut(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=ve?Ut(e.stateNode.nextSibling):null;return!0}function Jd(){for(var e=ke;e;)e=Ut(e.nextSibling)}function dr(){ke=ve=null,R=!1}function ji(e){Me===null?Me=[e]:Me.push(e)}var UU=Ye.ReactCurrentBatchConfig;function Sr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(b(309));var l=r.stateNode}if(!l)throw Error(b(147,e));var n=l,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var u=n.refs;i===null?delete u[a]:u[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(b(284));if(!r._owner)throw Error(b(290,e))}return e}function Cl(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hu(e){var t=e._init;return t(e._payload)}function Gd(e){function t(U,s){if(e){var p=U.deletions;p===null?(U.deletions=[s],U.flags|=16):p.push(s)}}function r(U,s){if(!e)return null;for(;s!==null;)t(U,s),s=s.sibling;return null}function l(U,s){for(U=new Map;s!==null;)s.key!==null?U.set(s.key,s):U.set(s.index,s),s=s.sibling;return U}function n(U,s){return U=mt(U,s),U.index=0,U.sibling=null,U}function a(U,s,p){return U.index=p,e?(p=U.alternate,p!==null?(p=p.index,p<s?(U.flags|=2,s):p):(U.flags|=2,s)):(U.flags|=1048576,s)}function i(U){return e&&U.alternate===null&&(U.flags|=2),U}function u(U,s,p,k){return s===null||s.tag!==6?(s=ca(p,U.mode,k),s.return=U,s):(s=n(s,p),s.return=U,s)}function o(U,s,p,k){var q=p.type;return q===Ft?m(U,s,p.props.children,k,p.key):s!==null&&(s.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===rt&&Hu(q)===s.type)?(k=n(s,p.props),k.ref=Sr(U,s,p),k.return=U,k):(k=Fl(p.type,p.key,p.props,null,U.mode,k),k.ref=Sr(U,s,p),k.return=U,k)}function d(U,s,p,k){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=Ua(p,U.mode,k),s.return=U,s):(s=n(s,p.children||[]),s.return=U,s)}function m(U,s,p,k,q){return s===null||s.tag!==7?(s=Et(p,U.mode,k,q),s.return=U,s):(s=n(s,p),s.return=U,s)}function h(U,s,p){if(typeof s=="string"&&s!==""||typeof s=="number")return s=ca(""+s,U.mode,p),s.return=U,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case ml:return p=Fl(s.type,s.key,s.props,null,U.mode,p),p.ref=Sr(U,null,s),p.return=U,p;case _t:return s=Ua(s,U.mode,p),s.return=U,s;case rt:var k=s._init;return h(U,k(s._payload),p)}if(Nr(s)||br(s))return s=Et(s,U.mode,p,null),s.return=U,s;Cl(U,s)}return null}function f(U,s,p,k){var q=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return q!==null?null:u(U,s,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ml:return p.key===q?o(U,s,p,k):null;case _t:return p.key===q?d(U,s,p,k):null;case rt:return q=p._init,f(U,s,q(p._payload),k)}if(Nr(p)||br(p))return q!==null?null:m(U,s,p,k,null);Cl(U,p)}return null}function g(U,s,p,k,q){if(typeof k=="string"&&k!==""||typeof k=="number")return U=U.get(p)||null,u(s,U,""+k,q);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ml:return U=U.get(k.key===null?p:k.key)||null,o(s,U,k,q);case _t:return U=U.get(k.key===null?p:k.key)||null,d(s,U,k,q);case rt:var C=k._init;return g(U,s,p,C(k._payload),q)}if(Nr(k)||br(k))return U=U.get(p)||null,m(s,U,k,q,null);Cl(s,k)}return null}function v(U,s,p,k){for(var q=null,C=null,D=s,P=s=0,B=null;D!==null&&P<p.length;P++){D.index>P?(B=D,D=null):B=D.sibling;var M=f(U,D,p[P],k);if(M===null){D===null&&(D=B);break}e&&D&&M.alternate===null&&t(U,D),s=a(M,s,P),C===null?q=M:C.sibling=M,C=M,D=B}if(P===p.length)return r(U,D),R&&xt(U,P),q;if(D===null){for(;P<p.length;P++)D=h(U,p[P],k),D!==null&&(s=a(D,s,P),C===null?q=D:C.sibling=D,C=D);return R&&xt(U,P),q}for(D=l(U,D);P<p.length;P++)B=g(D,U,P,p[P],k),B!==null&&(e&&B.alternate!==null&&D.delete(B.key===null?P:B.key),s=a(B,s,P),C===null?q=B:C.sibling=B,C=B);return e&&D.forEach(function(Pe){return t(U,Pe)}),R&&xt(U,P),q}function w(U,s,p,k){var q=br(p);if(typeof q!="function")throw Error(b(150));if(p=q.call(p),p==null)throw Error(b(151));for(var C=q=null,D=s,P=s=0,B=null,M=p.next();D!==null&&!M.done;P++,M=p.next()){D.index>P?(B=D,D=null):B=D.sibling;var Pe=f(U,D,M.value,k);if(Pe===null){D===null&&(D=B);break}e&&D&&Pe.alternate===null&&t(U,D),s=a(Pe,s,P),C===null?q=Pe:C.sibling=Pe,C=Pe,D=B}if(M.done)return r(U,D),R&&xt(U,P),q;if(D===null){for(;!M.done;P++,M=p.next())M=h(U,M.value,k),M!==null&&(s=a(M,s,P),C===null?q=M:C.sibling=M,C=M);return R&&xt(U,P),q}for(D=l(U,D);!M.done;P++,M=p.next())M=g(D,U,P,M.value,k),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?P:M.key),s=a(M,s,P),C===null?q=M:C.sibling=M,C=M);return e&&D.forEach(function(vr){return t(U,vr)}),R&&xt(U,P),q}function A(U,s,p,k){if(typeof p=="object"&&p!==null&&p.type===Ft&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ml:e:{for(var q=p.key,C=s;C!==null;){if(C.key===q){if(q=p.type,q===Ft){if(C.tag===7){r(U,C.sibling),s=n(C,p.props.children),s.return=U,U=s;break e}}else if(C.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===rt&&Hu(q)===C.type){r(U,C.sibling),s=n(C,p.props),s.ref=Sr(U,C,p),s.return=U,U=s;break e}r(U,C);break}else t(U,C);C=C.sibling}p.type===Ft?(s=Et(p.props.children,U.mode,k,p.key),s.return=U,U=s):(k=Fl(p.type,p.key,p.props,null,U.mode,k),k.ref=Sr(U,s,p),k.return=U,U=k)}return i(U);case _t:e:{for(C=p.key;s!==null;){if(s.key===C)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){r(U,s.sibling),s=n(s,p.children||[]),s.return=U,U=s;break e}else{r(U,s);break}else t(U,s);s=s.sibling}s=Ua(p,U.mode,k),s.return=U,U=s}return i(U);case rt:return C=p._init,A(U,s,C(p._payload),k)}if(Nr(p))return v(U,s,p,k);if(br(p))return w(U,s,p,k);Cl(U,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,s!==null&&s.tag===6?(r(U,s.sibling),s=n(s,p),s.return=U,U=s):(r(U,s),s=ca(p,U.mode,k),s.return=U,U=s),i(U)):r(U,s)}return A}var sr=Gd(!0),Kd=Gd(!1),ln=bt(null),nn=null,Kt=null,zi=null;function Wi(){zi=Kt=nn=null}function Oi(e){var t=ln.current;O(ln),e._currentValue=t}function Xa(e,t,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===r)break;e=e.return}}function nr(e,t){nn=e,zi=Kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(zi!==e)if(e={context:e,memoizedValue:t,next:null},Kt===null){if(nn===null)throw Error(b(308));Kt=e,nn.dependencies={lanes:0,firstContext:e}}else Kt=Kt.next=e;return t}var Dt=null;function Ri(e){Dt===null?Dt=[e]:Dt.push(e)}function Yd(e,t,r,l){var n=t.interleaved;return n===null?(r.next=r,Ri(t)):(r.next=n.next,n.next=r),t.interleaved=r,Ge(e,l)}function Ge(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var lt=!1;function Vi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $d(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,I&2){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,Ge(e,r)}return n=l.interleaved,n===null?(t.next=t,Ri(l)):(t.next=n.next,n.next=t),l.interleaved=t,Ge(e,r)}function Wl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,xi(e,r)}}function Ju(e,t){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var n=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?n=a=i:a=a.next=i,r=r.next}while(r!==null);a===null?n=a=t:a=a.next=t}else n=a=t;r={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:l.shared,effects:l.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function an(e,t,r,l){var n=e.updateQueue;lt=!1;var a=n.firstBaseUpdate,i=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var o=u,d=o.next;o.next=null,i===null?a=d:i.next=d,i=o;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==i&&(u===null?m.firstBaseUpdate=d:u.next=d,m.lastBaseUpdate=o))}if(a!==null){var h=n.baseState;i=0,m=d=o=null,u=a;do{var f=u.lane,g=u.eventTime;if((l&f)===f){m!==null&&(m=m.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var v=e,w=u;switch(f=t,g=r,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(g,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(g,h,f):v,f==null)break e;h=_({},h,f);break e;case 2:lt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,f=n.effects,f===null?n.effects=[u]:f.push(u))}else g={eventTime:g,lane:f,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(d=m=g,o=h):m=m.next=g,i|=f;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;f=u,u=f.next,f.next=null,n.lastBaseUpdate=f,n.shared.pending=null}}while(!0);if(m===null&&(o=h),n.baseState=o,n.firstBaseUpdate=d,n.lastBaseUpdate=m,t=n.shared.interleaved,t!==null){n=t;do i|=n.lane,n=n.next;while(n!==t)}else a===null&&(n.shared.lanes=0);jt|=i,e.lanes=i,e.memoizedState=h}}function Gu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],n=l.callback;if(n!==null){if(l.callback=null,l=r,typeof n!="function")throw Error(b(191,n));n.call(l)}}}var cl={},Te=bt(cl),$r=bt(cl),el=bt(cl);function Pt(e){if(e===cl)throw Error(b(174));return e}function Ti(e,t){switch(z(el,t),z($r,e),z(Te,cl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xa(t,e)}O(Te),z(Te,t)}function cr(){O(Te),O($r),O(el)}function es(e){Pt(el.current);var t=Pt(Te.current),r=xa(t,e.type);t!==r&&(z($r,e),z(Te,r))}function _i(e){$r.current===e&&(O(Te),O($r))}var V=bt(0);function un(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var aa=[];function Fi(){for(var e=0;e<aa.length;e++)aa[e]._workInProgressVersionPrimary=null;aa.length=0}var Ol=Ye.ReactCurrentDispatcher,ia=Ye.ReactCurrentBatchConfig,It=0,T=null,J=null,$=null,on=!1,Or=!1,tl=0,hU=0;function ne(){throw Error(b(321))}function Bi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ze(e[r],t[r]))return!1;return!0}function Xi(e,t,r,l,n,a){if(It=a,T=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ol.current=e===null||e.memoizedState===null?gU:kU,e=r(l,n),Or){a=0;do{if(Or=!1,tl=0,25<=a)throw Error(b(301));a+=1,$=J=null,t.updateQueue=null,Ol.current=vU,e=r(l,n)}while(Or)}if(Ol.current=dn,t=J!==null&&J.next!==null,It=0,$=J=T=null,on=!1,t)throw Error(b(300));return e}function Qi(){var e=tl!==0;return tl=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $===null?T.memoizedState=$=e:$=$.next=e,$}function De(){if(J===null){var e=T.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=$===null?T.memoizedState:$.next;if(t!==null)$=t,J=e;else{if(e===null)throw Error(b(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},$===null?T.memoizedState=$=e:$=$.next=e}return $}function rl(e,t){return typeof t=="function"?t(e):t}function ua(e){var t=De(),r=t.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=e;var l=J,n=l.baseQueue,a=r.pending;if(a!==null){if(n!==null){var i=n.next;n.next=a.next,a.next=i}l.baseQueue=n=a,r.pending=null}if(n!==null){a=n.next,l=l.baseState;var u=i=null,o=null,d=a;do{var m=d.lane;if((It&m)===m)o!==null&&(o=o.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var h={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};o===null?(u=o=h,i=l):o=o.next=h,T.lanes|=m,jt|=m}d=d.next}while(d!==null&&d!==a);o===null?i=l:o.next=u,ze(l,t.memoizedState)||(he=!0),t.memoizedState=l,t.baseState=i,t.baseQueue=o,r.lastRenderedState=l}if(e=r.interleaved,e!==null){n=e;do a=n.lane,T.lanes|=a,jt|=a,n=n.next;while(n!==e)}else n===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function oa(e){var t=De(),r=t.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=e;var l=r.dispatch,n=r.pending,a=t.memoizedState;if(n!==null){r.pending=null;var i=n=n.next;do a=e(a,i.action),i=i.next;while(i!==n);ze(a,t.memoizedState)||(he=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,l]}function ts(){}function rs(e,t){var r=T,l=De(),n=t(),a=!ze(l.memoizedState,n);if(a&&(l.memoizedState=n,he=!0),l=l.queue,Zi(as.bind(null,r,l,e),[e]),l.getSnapshot!==t||a||$!==null&&$.memoizedState.tag&1){if(r.flags|=2048,ll(9,ns.bind(null,r,l,n,t),void 0,null),ee===null)throw Error(b(349));It&30||ls(r,t,n)}return n}function ls(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=T.updateQueue,t===null?(t={lastEffect:null,stores:null},T.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ns(e,t,r,l){t.value=r,t.getSnapshot=l,is(t)&&us(e)}function as(e,t,r){return r(function(){is(t)&&us(e)})}function is(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ze(e,r)}catch{return!0}}function us(e){var t=Ge(e,1);t!==null&&je(t,e,1,-1)}function Ku(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:e},t.queue=e,e=e.dispatch=mU.bind(null,T,e),[t.memoizedState,e]}function ll(e,t,r,l){return e={tag:e,create:t,destroy:r,deps:l,next:null},t=T.updateQueue,t===null?(t={lastEffect:null,stores:null},T.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,t.lastEffect=e)),e}function os(){return De().memoizedState}function Rl(e,t,r,l){var n=Oe();T.flags|=e,n.memoizedState=ll(1|t,r,void 0,l===void 0?null:l)}function An(e,t,r,l){var n=De();l=l===void 0?null:l;var a=void 0;if(J!==null){var i=J.memoizedState;if(a=i.destroy,l!==null&&Bi(l,i.deps)){n.memoizedState=ll(t,r,a,l);return}}T.flags|=e,n.memoizedState=ll(1|t,r,a,l)}function Yu(e,t){return Rl(8390656,8,e,t)}function Zi(e,t){return An(2048,8,e,t)}function ds(e,t){return An(4,2,e,t)}function ss(e,t){return An(4,4,e,t)}function cs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Us(e,t,r){return r=r!=null?r.concat([e]):null,An(4,4,cs.bind(null,t,e),r)}function Hi(){}function hs(e,t){var r=De();t=t===void 0?null:t;var l=r.memoizedState;return l!==null&&t!==null&&Bi(t,l[1])?l[0]:(r.memoizedState=[e,t],e)}function ps(e,t){var r=De();t=t===void 0?null:t;var l=r.memoizedState;return l!==null&&t!==null&&Bi(t,l[1])?l[0]:(e=e(),r.memoizedState=[e,t],e)}function fs(e,t,r){return It&21?(ze(r,t)||(r=wd(),T.lanes|=r,jt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=r)}function pU(e,t){var r=j;j=r!==0&&4>r?r:4,e(!0);var l=ia.transition;ia.transition={};try{e(!1),t()}finally{j=r,ia.transition=l}}function ms(){return De().memoizedState}function fU(e,t,r){var l=ft(e);if(r={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null},gs(e))ks(t,r);else if(r=Yd(e,t,r,l),r!==null){var n=de();je(r,e,l,n),vs(r,t,l)}}function mU(e,t,r){var l=ft(e),n={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null};if(gs(e))ks(t,n);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,u=a(i,r);if(n.hasEagerState=!0,n.eagerState=u,ze(u,i)){var o=t.interleaved;o===null?(n.next=n,Ri(t)):(n.next=o.next,o.next=n),t.interleaved=n;return}}catch{}finally{}r=Yd(e,t,n,l),r!==null&&(n=de(),je(r,e,l,n),vs(r,t,l))}}function gs(e){var t=e.alternate;return e===T||t!==null&&t===T}function ks(e,t){Or=on=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function vs(e,t,r){if(r&4194240){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,xi(e,r)}}var dn={readContext:Ce,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},gU={readContext:Ce,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Yu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Rl(4194308,4,cs.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Rl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rl(4,2,e,t)},useMemo:function(e,t){var r=Oe();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var l=Oe();return t=r!==void 0?r(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=fU.bind(null,T,e),[l.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:Ku,useDebugValue:Hi,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=Ku(!1),t=e[0];return e=pU.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var l=T,n=Oe();if(R){if(r===void 0)throw Error(b(407));r=r()}else{if(r=t(),ee===null)throw Error(b(349));It&30||ls(l,t,r)}n.memoizedState=r;var a={value:r,getSnapshot:t};return n.queue=a,Yu(as.bind(null,l,a,e),[e]),l.flags|=2048,ll(9,ns.bind(null,l,a,r,t),void 0,null),r},useId:function(){var e=Oe(),t=ee.identifierPrefix;if(R){var r=Qe,l=Xe;r=(l&~(1<<32-Ie(l)-1)).toString(32)+r,t=":"+t+"R"+r,r=tl++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=hU++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kU={readContext:Ce,useCallback:hs,useContext:Ce,useEffect:Zi,useImperativeHandle:Us,useInsertionEffect:ds,useLayoutEffect:ss,useMemo:ps,useReducer:ua,useRef:os,useState:function(){return ua(rl)},useDebugValue:Hi,useDeferredValue:function(e){var t=De();return fs(t,J.memoizedState,e)},useTransition:function(){var e=ua(rl)[0],t=De().memoizedState;return[e,t]},useMutableSource:ts,useSyncExternalStore:rs,useId:ms,unstable_isNewReconciler:!1},vU={readContext:Ce,useCallback:hs,useContext:Ce,useEffect:Zi,useImperativeHandle:Us,useInsertionEffect:ds,useLayoutEffect:ss,useMemo:ps,useReducer:oa,useRef:os,useState:function(){return oa(rl)},useDebugValue:Hi,useDeferredValue:function(e){var t=De();return J===null?t.memoizedState=e:fs(t,J.memoizedState,e)},useTransition:function(){var e=oa(rl)[0],t=De().memoizedState;return[e,t]},useMutableSource:ts,useSyncExternalStore:rs,useId:ms,unstable_isNewReconciler:!1};function Ee(e,t){if(e&&e.defaultProps){t=_({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Qa(e,t,r,l){t=e.memoizedState,r=r(l,t),r=r==null?t:_({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xn={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var l=de(),n=ft(e),a=Ze(l,n);a.payload=t,r!=null&&(a.callback=r),t=ht(e,a,n),t!==null&&(je(t,e,n,l),Wl(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var l=de(),n=ft(e),a=Ze(l,n);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=ht(e,a,n),t!==null&&(je(t,e,n,l),Wl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=de(),l=ft(e),n=Ze(r,l);n.tag=2,t!=null&&(n.callback=t),t=ht(e,n,l),t!==null&&(je(t,e,l,r),Wl(t,e,l))}};function $u(e,t,r,l,n,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,i):t.prototype&&t.prototype.isPureReactComponent?!Jr(r,l)||!Jr(n,a):!0}function ws(e,t,r){var l=!1,n=vt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ce(a):(n=fe(t)?Lt:ue.current,l=t.contextTypes,a=(l=l!=null)?or(e,n):vt),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xn,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),t}function eo(e,t,r,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,l),t.state!==e&&xn.enqueueReplaceState(t,t.state,null)}function Za(e,t,r,l){var n=e.stateNode;n.props=r,n.state=e.memoizedState,n.refs={},Vi(e);var a=t.contextType;typeof a=="object"&&a!==null?n.context=Ce(a):(a=fe(t)?Lt:ue.current,n.context=or(e,a)),n.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Qa(e,t,a,r),n.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(t=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),t!==n.state&&xn.enqueueReplaceState(n,n.state,null),an(e,r,n,l),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var r="",l=t;do r+=Zc(l),l=l.return;while(l);var n=r}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:n,digest:null}}function da(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ha(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var wU=typeof WeakMap=="function"?WeakMap:Map;function bs(e,t,r){r=Ze(-1,r),r.tag=3,r.payload={element:null};var l=t.value;return r.callback=function(){cn||(cn=!0,ni=l),Ha(e,t)},r}function ys(e,t,r){r=Ze(-1,r),r.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var n=t.value;r.payload=function(){return l(n)},r.callback=function(){Ha(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Ha(e,t),typeof l!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function to(e,t,r){var l=e.pingCache;if(l===null){l=e.pingCache=new wU;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(r)||(n.add(r),e=IU.bind(null,e,t,r),t.then(e,e))}function ro(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lo(e,t,r,l,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ze(-1,1),t.tag=2,ht(r,t,1))),r.lanes|=1),e)}var bU=Ye.ReactCurrentOwner,he=!1;function oe(e,t,r,l){t.child=e===null?Kd(t,null,r,l):sr(t,e.child,r,l)}function no(e,t,r,l,n){r=r.render;var a=t.ref;return nr(t,n),l=Xi(e,t,r,l,a,n),r=Qi(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,Ke(e,t,n)):(R&&r&&Mi(t),t.flags|=1,oe(e,t,l,n),t.child)}function ao(e,t,r,l,n){if(e===null){var a=r.type;return typeof a=="function"&&!ru(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,qs(e,t,a,l,n)):(e=Fl(r.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&n)){var i=a.memoizedProps;if(r=r.compare,r=r!==null?r:Jr,r(i,l)&&e.ref===t.ref)return Ke(e,t,n)}return t.flags|=1,e=mt(a,l),e.ref=t.ref,e.return=t,t.child=e}function qs(e,t,r,l,n){if(e!==null){var a=e.memoizedProps;if(Jr(a,l)&&e.ref===t.ref)if(he=!1,t.pendingProps=l=a,(e.lanes&n)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Ke(e,t,n)}return Ja(e,t,r,l,n)}function As(e,t,r){var l=t.pendingProps,n=l.children,a=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z($t,ge),ge|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z($t,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=a!==null?a.baseLanes:r,z($t,ge),ge|=l}else a!==null?(l=a.baseLanes|r,t.memoizedState=null):l=r,z($t,ge),ge|=l;return oe(e,t,n,r),t.child}function xs(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ja(e,t,r,l,n){var a=fe(r)?Lt:ue.current;return a=or(t,a),nr(t,n),r=Xi(e,t,r,l,a,n),l=Qi(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,Ke(e,t,n)):(R&&l&&Mi(t),t.flags|=1,oe(e,t,r,n),t.child)}function io(e,t,r,l,n){if(fe(r)){var a=!0;en(t)}else a=!1;if(nr(t,n),t.stateNode===null)Vl(e,t),ws(t,r,l),Za(t,r,l,n),l=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var o=i.context,d=r.contextType;typeof d=="object"&&d!==null?d=Ce(d):(d=fe(r)?Lt:ue.current,d=or(t,d));var m=r.getDerivedStateFromProps,h=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==l||o!==d)&&eo(t,i,l,d),lt=!1;var f=t.memoizedState;i.state=f,an(t,l,i,n),o=t.memoizedState,u!==l||f!==o||pe.current||lt?(typeof m=="function"&&(Qa(t,r,m,l),o=t.memoizedState),(u=lt||$u(t,r,u,l,f,o,d))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=o),i.props=l,i.state=o,i.context=d,l=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,$d(e,t),u=t.memoizedProps,d=t.type===t.elementType?u:Ee(t.type,u),i.props=d,h=t.pendingProps,f=i.context,o=r.contextType,typeof o=="object"&&o!==null?o=Ce(o):(o=fe(r)?Lt:ue.current,o=or(t,o));var g=r.getDerivedStateFromProps;(m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==h||f!==o)&&eo(t,i,l,o),lt=!1,f=t.memoizedState,i.state=f,an(t,l,i,n);var v=t.memoizedState;u!==h||f!==v||pe.current||lt?(typeof g=="function"&&(Qa(t,r,g,l),v=t.memoizedState),(d=lt||$u(t,r,d,l,f,v,o)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,v,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,v,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),i.props=l,i.state=v,i.context=o,l=d):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),l=!1)}return Ga(e,t,r,l,a,n)}function Ga(e,t,r,l,n,a){xs(e,t);var i=(t.flags&128)!==0;if(!l&&!i)return n&&Xu(t,r,!1),Ke(e,t,a);l=t.stateNode,bU.current=t;var u=i&&typeof r.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&i?(t.child=sr(t,e.child,null,a),t.child=sr(t,null,u,a)):oe(e,t,u,a),t.memoizedState=l.state,n&&Xu(t,r,!0),t.child}function Ss(e){var t=e.stateNode;t.pendingContext?Bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bu(e,t.context,!1),Ti(e,t.containerInfo)}function uo(e,t,r,l,n){return dr(),ji(n),t.flags|=256,oe(e,t,r,l),t.child}var Ka={dehydrated:null,treeContext:null,retryLane:0};function Ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cs(e,t,r){var l=t.pendingProps,n=V.current,a=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(n&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),z(V,n&1),e===null)return Ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=l.children,e=l.fallback,a?(l=t.mode,a=t.child,i={mode:"hidden",children:i},!(l&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Dn(i,l,0,null),e=Et(e,l,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ya(r),t.memoizedState=Ka,e):Ji(t,i));if(n=e.memoizedState,n!==null&&(u=n.dehydrated,u!==null))return yU(e,t,i,l,u,n,r);if(a){a=l.fallback,i=t.mode,n=e.child,u=n.sibling;var o={mode:"hidden",children:l.children};return!(i&1)&&t.child!==n?(l=t.child,l.childLanes=0,l.pendingProps=o,t.deletions=null):(l=mt(n,o),l.subtreeFlags=n.subtreeFlags&14680064),u!==null?a=mt(u,a):(a=Et(a,i,r,null),a.flags|=2),a.return=t,l.return=t,l.sibling=a,t.child=l,l=a,a=t.child,i=e.child.memoizedState,i=i===null?Ya(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~r,t.memoizedState=Ka,l}return a=e.child,e=a.sibling,l=mt(a,{mode:"visible",children:l.children}),!(t.mode&1)&&(l.lanes=r),l.return=t,l.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=l,t.memoizedState=null,l}function Ji(e,t){return t=Dn({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dl(e,t,r,l){return l!==null&&ji(l),sr(t,e.child,null,r),e=Ji(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yU(e,t,r,l,n,a,i){if(r)return t.flags&256?(t.flags&=-257,l=da(Error(b(422))),Dl(e,t,i,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=l.fallback,n=t.mode,l=Dn({mode:"visible",children:l.children},n,0,null),a=Et(a,n,i,null),a.flags|=2,l.return=t,a.return=t,l.sibling=a,t.child=l,t.mode&1&&sr(t,e.child,null,i),t.child.memoizedState=Ya(i),t.memoizedState=Ka,a);if(!(t.mode&1))return Dl(e,t,i,null);if(n.data==="$!"){if(l=n.nextSibling&&n.nextSibling.dataset,l)var u=l.dgst;return l=u,a=Error(b(419)),l=da(a,l,void 0),Dl(e,t,i,l)}if(u=(i&e.childLanes)!==0,he||u){if(l=ee,l!==null){switch(i&-i){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(l.suspendedLanes|i)?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,Ge(e,n),je(l,e,n,-1))}return tu(),l=da(Error(b(421))),Dl(e,t,i,l)}return n.data==="$?"?(t.flags|=128,t.child=e.child,t=jU.bind(null,e),n._reactRetry=t,null):(e=a.treeContext,ke=Ut(n.nextSibling),ve=t,R=!0,Me=null,e!==null&&(qe[Ae++]=Xe,qe[Ae++]=Qe,qe[Ae++]=Mt,Xe=e.id,Qe=e.overflow,Mt=t),t=Ji(t,l.children),t.flags|=4096,t)}function oo(e,t,r){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Xa(e.return,t,r)}function sa(e,t,r,l,n){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:n}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=l,a.tail=r,a.tailMode=n)}function Ds(e,t,r){var l=t.pendingProps,n=l.revealOrder,a=l.tail;if(oe(e,t,l.children,r),l=V.current,l&2)l=l&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oo(e,r,t);else if(e.tag===19)oo(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(z(V,l),!(t.mode&1))t.memoizedState=null;else switch(n){case"forwards":for(r=t.child,n=null;r!==null;)e=r.alternate,e!==null&&un(e)===null&&(n=r),r=r.sibling;r=n,r===null?(n=t.child,t.child=null):(n=r.sibling,r.sibling=null),sa(t,!1,n,r,a);break;case"backwards":for(r=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&un(e)===null){t.child=n;break}e=n.sibling,n.sibling=r,r=n,n=e}sa(t,!0,r,null,a);break;case"together":sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),jt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,r=mt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=mt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function qU(e,t,r){switch(t.tag){case 3:Ss(t),dr();break;case 5:es(t);break;case 1:fe(t.type)&&en(t);break;case 4:Ti(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,n=t.memoizedProps.value;z(ln,l._currentValue),l._currentValue=n;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(z(V,V.current&1),t.flags|=128,null):r&t.child.childLanes?Cs(e,t,r):(z(V,V.current&1),e=Ke(e,t,r),e!==null?e.sibling:null);z(V,V.current&1);break;case 19:if(l=(r&t.childLanes)!==0,e.flags&128){if(l)return Ds(e,t,r);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),z(V,V.current),l)break;return null;case 22:case 23:return t.lanes=0,As(e,t,r)}return Ke(e,t,r)}var Ps,$a,Ns,Es;Ps=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};$a=function(){};Ns=function(e,t,r,l){var n=e.memoizedProps;if(n!==l){e=t.stateNode,Pt(Te.current);var a=null;switch(r){case"input":n=ba(e,n),l=ba(e,l),a=[];break;case"select":n=_({},n,{value:void 0}),l=_({},l,{value:void 0}),a=[];break;case"textarea":n=Aa(e,n),l=Aa(e,l),a=[];break;default:typeof n.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Yl)}Sa(r,l);var i;r=null;for(d in n)if(!l.hasOwnProperty(d)&&n.hasOwnProperty(d)&&n[d]!=null)if(d==="style"){var u=n[d];for(i in u)u.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(_r.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in l){var o=l[d];if(u=n!=null?n[d]:void 0,l.hasOwnProperty(d)&&o!==u&&(o!=null||u!=null))if(d==="style")if(u){for(i in u)!u.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in o)o.hasOwnProperty(i)&&u[i]!==o[i]&&(r||(r={}),r[i]=o[i])}else r||(a||(a=[]),a.push(d,r)),r=o;else d==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,u=u?u.__html:void 0,o!=null&&u!==o&&(a=a||[]).push(d,o)):d==="children"?typeof o!="string"&&typeof o!="number"||(a=a||[]).push(d,""+o):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(_r.hasOwnProperty(d)?(o!=null&&d==="onScroll"&&W("scroll",e),a||u===o||(a=[])):(a=a||[]).push(d,o))}r&&(a=a||[]).push("style",r);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Es=function(e,t,r,l){r!==l&&(t.flags|=4)};function Cr(e,t){if(!R)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(t)for(var n=e.child;n!==null;)r|=n.lanes|n.childLanes,l|=n.subtreeFlags&14680064,l|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)r|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=r,t}function AU(e,t,r){var l=t.pendingProps;switch(Ii(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return fe(t.type)&&$l(),ae(t),null;case 3:return l=t.stateNode,cr(),O(pe),O(ue),Fi(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Sl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(ui(Me),Me=null))),$a(e,t),ae(t),null;case 5:_i(t);var n=Pt(el.current);if(r=t.type,e!==null&&t.stateNode!=null)Ns(e,t,r,l,n),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(b(166));return ae(t),null}if(e=Pt(Te.current),Sl(t)){l=t.stateNode,r=t.type;var a=t.memoizedProps;switch(l[Re]=t,l[Yr]=a,e=(t.mode&1)!==0,r){case"dialog":W("cancel",l),W("close",l);break;case"iframe":case"object":case"embed":W("load",l);break;case"video":case"audio":for(n=0;n<Lr.length;n++)W(Lr[n],l);break;case"source":W("error",l);break;case"img":case"image":case"link":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"input":gu(l,a),W("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!a.multiple},W("invalid",l);break;case"textarea":vu(l,a),W("invalid",l)}Sa(r,a),n=null;for(var i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="children"?typeof u=="string"?l.textContent!==u&&(a.suppressHydrationWarning!==!0&&xl(l.textContent,u,e),n=["children",u]):typeof u=="number"&&l.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&xl(l.textContent,u,e),n=["children",""+u]):_r.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&W("scroll",l)}switch(r){case"input":gl(l),ku(l,a,!0);break;case"textarea":gl(l),wu(l);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(l.onclick=Yl)}l=n,t.updateQueue=l,l!==null&&(t.flags|=4)}else{i=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ad(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=i.createElement(r,{is:l.is}):(e=i.createElement(r),r==="select"&&(i=e,l.multiple?i.multiple=!0:l.size&&(i.size=l.size))):e=i.createElementNS(e,r),e[Re]=t,e[Yr]=l,Ps(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ca(r,l),r){case"dialog":W("cancel",e),W("close",e),n=l;break;case"iframe":case"object":case"embed":W("load",e),n=l;break;case"video":case"audio":for(n=0;n<Lr.length;n++)W(Lr[n],e);n=l;break;case"source":W("error",e),n=l;break;case"img":case"image":case"link":W("error",e),W("load",e),n=l;break;case"details":W("toggle",e),n=l;break;case"input":gu(e,l),n=ba(e,l),W("invalid",e);break;case"option":n=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},n=_({},l,{value:void 0}),W("invalid",e);break;case"textarea":vu(e,l),n=Aa(e,l),W("invalid",e);break;default:n=l}Sa(r,n),u=n;for(a in u)if(u.hasOwnProperty(a)){var o=u[a];a==="style"?od(e,o):a==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&id(e,o)):a==="children"?typeof o=="string"?(r!=="textarea"||o!=="")&&Fr(e,o):typeof o=="number"&&Fr(e,""+o):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(_r.hasOwnProperty(a)?o!=null&&a==="onScroll"&&W("scroll",e):o!=null&&vi(e,a,o,i))}switch(r){case"input":gl(e),ku(e,l,!1);break;case"textarea":gl(e),wu(e);break;case"option":l.value!=null&&e.setAttribute("value",""+kt(l.value));break;case"select":e.multiple=!!l.multiple,a=l.value,a!=null?er(e,!!l.multiple,a,!1):l.defaultValue!=null&&er(e,!!l.multiple,l.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=Yl)}switch(r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Es(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(b(166));if(r=Pt(el.current),Pt(Te.current),Sl(t)){if(l=t.stateNode,r=t.memoizedProps,l[Re]=t,(a=l.nodeValue!==r)&&(e=ve,e!==null))switch(e.tag){case 3:xl(l.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xl(l.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else l=(r.nodeType===9?r:r.ownerDocument).createTextNode(l),l[Re]=t,t.stateNode=l}return ae(t),null;case 13:if(O(V),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(R&&ke!==null&&t.mode&1&&!(t.flags&128))Jd(),dr(),t.flags|=98560,a=!1;else if(a=Sl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(b(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));a[Re]=t}else dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),a=!1}else Me!==null&&(ui(Me),Me=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?K===0&&(K=3):tu())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return cr(),$a(e,t),e===null&&Gr(t.stateNode.containerInfo),ae(t),null;case 10:return Oi(t.type._context),ae(t),null;case 17:return fe(t.type)&&$l(),ae(t),null;case 19:if(O(V),a=t.memoizedState,a===null)return ae(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Cr(a,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=un(e),i!==null){for(t.flags|=128,Cr(a,!1),l=i.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=r,r=t.child;r!==null;)a=r,e=l,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return z(V,V.current&1|2),t.child}e=e.sibling}a.tail!==null&&Q()>hr&&(t.flags|=128,l=!0,Cr(a,!1),t.lanes=4194304)}else{if(!l)if(e=un(i),e!==null){if(t.flags|=128,l=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Cr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!R)return ae(t),null}else 2*Q()-a.renderingStartTime>hr&&r!==1073741824&&(t.flags|=128,l=!0,Cr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(r=a.last,r!==null?r.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Q(),t.sibling=null,r=V.current,z(V,l?r&1|2:r&1),t):(ae(t),null);case 22:case 23:return eu(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&t.mode&1?ge&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function xU(e,t){switch(Ii(t),t.tag){case 1:return fe(t.type)&&$l(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),O(pe),O(ue),Fi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _i(t),null;case 13:if(O(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(V),null;case 4:return cr(),null;case 10:return Oi(t.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var Pl=!1,ie=!1,SU=typeof WeakSet=="function"?WeakSet:Set,x=null;function Yt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(l){F(e,t,l)}else r.current=null}function ei(e,t,r){try{r()}catch(l){F(e,t,l)}}var so=!1;function CU(e,t){if(Wa=Jl,e=zd(),Li(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var n=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var i=0,u=-1,o=-1,d=0,m=0,h=e,f=null;t:for(;;){for(var g;h!==r||n!==0&&h.nodeType!==3||(u=i+n),h!==a||l!==0&&h.nodeType!==3||(o=i+l),h.nodeType===3&&(i+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===e)break t;if(f===r&&++d===n&&(u=i),f===a&&++m===l&&(o=i),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}r=u===-1||o===-1?null:{start:u,end:o}}else r=null}r=r||{start:0,end:0}}else r=null;for(Oa={focusedElem:e,selectionRange:r},Jl=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,A=v.memoizedState,U=t.stateNode,s=U.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ee(t.type,w),A);U.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(k){F(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return v=so,so=!1,v}function Rr(e,t,r){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var n=l=l.next;do{if((n.tag&e)===e){var a=n.destroy;n.destroy=void 0,a!==void 0&&ei(t,r,a)}n=n.next}while(n!==l)}}function Sn(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var l=r.create;r.destroy=l()}r=r.next}while(r!==t)}}function ti(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ls(e){var t=e.alternate;t!==null&&(e.alternate=null,Ls(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Re],delete t[Yr],delete t[Ta],delete t[dU],delete t[sU])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ms(e){return e.tag===5||e.tag===3||e.tag===4}function co(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ms(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ri(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Yl));else if(l!==4&&(e=e.child,e!==null))for(ri(e,t,r),e=e.sibling;e!==null;)ri(e,t,r),e=e.sibling}function li(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(li(e,t,r),e=e.sibling;e!==null;)li(e,t,r),e=e.sibling}var te=null,Le=!1;function et(e,t,r){for(r=r.child;r!==null;)Is(e,t,r),r=r.sibling}function Is(e,t,r){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(kn,r)}catch{}switch(r.tag){case 5:ie||Yt(r,t);case 6:var l=te,n=Le;te=null,et(e,t,r),te=l,Le=n,te!==null&&(Le?(e=te,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):te.removeChild(r.stateNode));break;case 18:te!==null&&(Le?(e=te,r=r.stateNode,e.nodeType===8?la(e.parentNode,r):e.nodeType===1&&la(e,r),Zr(e)):la(te,r.stateNode));break;case 4:l=te,n=Le,te=r.stateNode.containerInfo,Le=!0,et(e,t,r),te=l,Le=n;break;case 0:case 11:case 14:case 15:if(!ie&&(l=r.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){n=l=l.next;do{var a=n,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&ei(r,t,i),n=n.next}while(n!==l)}et(e,t,r);break;case 1:if(!ie&&(Yt(r,t),l=r.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=r.memoizedProps,l.state=r.memoizedState,l.componentWillUnmount()}catch(u){F(r,t,u)}et(e,t,r);break;case 21:et(e,t,r);break;case 22:r.mode&1?(ie=(l=ie)||r.memoizedState!==null,et(e,t,r),ie=l):et(e,t,r);break;default:et(e,t,r)}}function Uo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new SU),t.forEach(function(l){var n=zU.bind(null,e,l);r.has(l)||(r.add(l),l.then(n,n))})}}function Ne(e,t){var r=t.deletions;if(r!==null)for(var l=0;l<r.length;l++){var n=r[l];try{var a=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:te=u.stateNode,Le=!1;break e;case 3:te=u.stateNode.containerInfo,Le=!0;break e;case 4:te=u.stateNode.containerInfo,Le=!0;break e}u=u.return}if(te===null)throw Error(b(160));Is(a,i,n),te=null,Le=!1;var o=n.alternate;o!==null&&(o.return=null),n.return=null}catch(d){F(n,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)js(t,e),t=t.sibling}function js(e,t){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(t,e),We(e),l&4){try{Rr(3,e,e.return),Sn(3,e)}catch(w){F(e,e.return,w)}try{Rr(5,e,e.return)}catch(w){F(e,e.return,w)}}break;case 1:Ne(t,e),We(e),l&512&&r!==null&&Yt(r,r.return);break;case 5:if(Ne(t,e),We(e),l&512&&r!==null&&Yt(r,r.return),e.flags&32){var n=e.stateNode;try{Fr(n,"")}catch(w){F(e,e.return,w)}}if(l&4&&(n=e.stateNode,n!=null)){var a=e.memoizedProps,i=r!==null?r.memoizedProps:a,u=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&ld(n,a),Ca(u,i);var d=Ca(u,a);for(i=0;i<o.length;i+=2){var m=o[i],h=o[i+1];m==="style"?od(n,h):m==="dangerouslySetInnerHTML"?id(n,h):m==="children"?Fr(n,h):vi(n,m,h,d)}switch(u){case"input":ya(n,a);break;case"textarea":nd(n,a);break;case"select":var f=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?er(n,!!a.multiple,g,!1):f!==!!a.multiple&&(a.defaultValue!=null?er(n,!!a.multiple,a.defaultValue,!0):er(n,!!a.multiple,a.multiple?[]:"",!1))}n[Yr]=a}catch(w){F(e,e.return,w)}}break;case 6:if(Ne(t,e),We(e),l&4){if(e.stateNode===null)throw Error(b(162));n=e.stateNode,a=e.memoizedProps;try{n.nodeValue=a}catch(w){F(e,e.return,w)}}break;case 3:if(Ne(t,e),We(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Zr(t.containerInfo)}catch(w){F(e,e.return,w)}break;case 4:Ne(t,e),We(e);break;case 13:Ne(t,e),We(e),n=e.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(Yi=Q())),l&4&&Uo(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(ie=(d=ie)||m,Ne(t,e),ie=d):Ne(t,e),We(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(x=e,m=e.child;m!==null;){for(h=x=m;x!==null;){switch(f=x,g=f.child,f.tag){case 0:case 11:case 14:case 15:Rr(4,f,f.return);break;case 1:Yt(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){l=f,r=f.return;try{t=l,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){F(l,r,w)}}break;case 5:Yt(f,f.return);break;case 22:if(f.memoizedState!==null){po(h);continue}}g!==null?(g.return=f,x=g):po(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{n=h.stateNode,d?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=h.stateNode,o=h.memoizedProps.style,i=o!=null&&o.hasOwnProperty("display")?o.display:null,u.style.display=ud("display",i))}catch(w){F(e,e.return,w)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){F(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ne(t,e),We(e),l&4&&Uo(e);break;case 21:break;default:Ne(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ms(r)){var l=r;break e}r=r.return}throw Error(b(160))}switch(l.tag){case 5:var n=l.stateNode;l.flags&32&&(Fr(n,""),l.flags&=-33);var a=co(e);li(e,a,n);break;case 3:case 4:var i=l.stateNode.containerInfo,u=co(e);ri(e,u,i);break;default:throw Error(b(161))}}catch(o){F(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function DU(e,t,r){x=e,zs(e)}function zs(e,t,r){for(var l=(e.mode&1)!==0;x!==null;){var n=x,a=n.child;if(n.tag===22&&l){var i=n.memoizedState!==null||Pl;if(!i){var u=n.alternate,o=u!==null&&u.memoizedState!==null||ie;u=Pl;var d=ie;if(Pl=i,(ie=o)&&!d)for(x=n;x!==null;)i=x,o=i.child,i.tag===22&&i.memoizedState!==null?fo(n):o!==null?(o.return=i,x=o):fo(n);for(;a!==null;)x=a,zs(a),a=a.sibling;x=n,Pl=u,ie=d}ho(e)}else n.subtreeFlags&8772&&a!==null?(a.return=n,x=a):ho(e)}}function ho(e){for(;x!==null;){var t=x;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||Sn(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!ie)if(r===null)l.componentDidMount();else{var n=t.elementType===t.type?r.memoizedProps:Ee(t.type,r.memoizedProps);l.componentDidUpdate(n,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Gu(t,a,l);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Gu(t,i,r)}break;case 5:var u=t.stateNode;if(r===null&&t.flags&4){r=u;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src&&(r.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Zr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ie||t.flags&512&&ti(t)}catch(f){F(t,t.return,f)}}if(t===e){x=null;break}if(r=t.sibling,r!==null){r.return=t.return,x=r;break}x=t.return}}function po(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var r=t.sibling;if(r!==null){r.return=t.return,x=r;break}x=t.return}}function fo(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Sn(4,t)}catch(o){F(t,r,o)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var n=t.return;try{l.componentDidMount()}catch(o){F(t,n,o)}}var a=t.return;try{ti(t)}catch(o){F(t,a,o)}break;case 5:var i=t.return;try{ti(t)}catch(o){F(t,i,o)}}}catch(o){F(t,t.return,o)}if(t===e){x=null;break}var u=t.sibling;if(u!==null){u.return=t.return,x=u;break}x=t.return}}var PU=Math.ceil,sn=Ye.ReactCurrentDispatcher,Gi=Ye.ReactCurrentOwner,Se=Ye.ReactCurrentBatchConfig,I=0,ee=null,Z=null,re=0,ge=0,$t=bt(0),K=0,nl=null,jt=0,Cn=0,Ki=0,Vr=null,Ue=null,Yi=0,hr=1/0,Fe=null,cn=!1,ni=null,pt=null,Nl=!1,ut=null,Un=0,Tr=0,ai=null,Tl=-1,_l=0;function de(){return I&6?Q():Tl!==-1?Tl:Tl=Q()}function ft(e){return e.mode&1?I&2&&re!==0?re&-re:UU.transition!==null?(_l===0&&(_l=wd()),_l):(e=j,e!==0||(e=window.event,e=e===void 0?16:Cd(e.type)),e):1}function je(e,t,r,l){if(50<Tr)throw Tr=0,ai=null,Error(b(185));ol(e,r,l),(!(I&2)||e!==ee)&&(e===ee&&(!(I&2)&&(Cn|=r),K===4&&at(e,re)),me(e,l),r===1&&I===0&&!(t.mode&1)&&(hr=Q()+500,qn&&yt()))}function me(e,t){var r=e.callbackNode;U0(e,t);var l=Hl(e,e===ee?re:0);if(l===0)r!==null&&qu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(r!=null&&qu(r),t===1)e.tag===0?cU(mo.bind(null,e)):Qd(mo.bind(null,e)),uU(function(){!(I&6)&&yt()}),r=null;else{switch(bd(l)){case 1:r=Ai;break;case 4:r=kd;break;case 16:r=Zl;break;case 536870912:r=vd;break;default:r=Zl}r=Bs(r,Ws.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Ws(e,t){if(Tl=-1,_l=0,I&6)throw Error(b(327));var r=e.callbackNode;if(ar()&&e.callbackNode!==r)return null;var l=Hl(e,e===ee?re:0);if(l===0)return null;if(l&30||l&e.expiredLanes||t)t=hn(e,l);else{t=l;var n=I;I|=2;var a=Rs();(ee!==e||re!==t)&&(Fe=null,hr=Q()+500,Nt(e,t));do try{LU();break}catch(u){Os(e,u)}while(!0);Wi(),sn.current=a,I=n,Z!==null?t=0:(ee=null,re=0,t=K)}if(t!==0){if(t===2&&(n=La(e),n!==0&&(l=n,t=ii(e,n))),t===1)throw r=nl,Nt(e,0),at(e,l),me(e,Q()),r;if(t===6)at(e,l);else{if(n=e.current.alternate,!(l&30)&&!NU(n)&&(t=hn(e,l),t===2&&(a=La(e),a!==0&&(l=a,t=ii(e,a))),t===1))throw r=nl,Nt(e,0),at(e,l),me(e,Q()),r;switch(e.finishedWork=n,e.finishedLanes=l,t){case 0:case 1:throw Error(b(345));case 2:St(e,Ue,Fe);break;case 3:if(at(e,l),(l&130023424)===l&&(t=Yi+500-Q(),10<t)){if(Hl(e,0)!==0)break;if(n=e.suspendedLanes,(n&l)!==l){de(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=Va(St.bind(null,e,Ue,Fe),t);break}St(e,Ue,Fe);break;case 4:if(at(e,l),(l&4194240)===l)break;for(t=e.eventTimes,n=-1;0<l;){var i=31-Ie(l);a=1<<i,i=t[i],i>n&&(n=i),l&=~a}if(l=n,l=Q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*PU(l/1960))-l,10<l){e.timeoutHandle=Va(St.bind(null,e,Ue,Fe),l);break}St(e,Ue,Fe);break;case 5:St(e,Ue,Fe);break;default:throw Error(b(329))}}}return me(e,Q()),e.callbackNode===r?Ws.bind(null,e):null}function ii(e,t){var r=Vr;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=hn(e,t),e!==2&&(t=Ue,Ue=r,t!==null&&ui(t)),e}function ui(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function NU(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var l=0;l<r.length;l++){var n=r[l],a=n.getSnapshot;n=n.value;try{if(!ze(a(),n))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~Ki,t&=~Cn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ie(t),l=1<<r;e[r]=-1,t&=~l}}function mo(e){if(I&6)throw Error(b(327));ar();var t=Hl(e,0);if(!(t&1))return me(e,Q()),null;var r=hn(e,t);if(e.tag!==0&&r===2){var l=La(e);l!==0&&(t=l,r=ii(e,l))}if(r===1)throw r=nl,Nt(e,0),at(e,t),me(e,Q()),r;if(r===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,Ue,Fe),me(e,Q()),null}function $i(e,t){var r=I;I|=1;try{return e(t)}finally{I=r,I===0&&(hr=Q()+500,qn&&yt())}}function zt(e){ut!==null&&ut.tag===0&&!(I&6)&&ar();var t=I;I|=1;var r=Se.transition,l=j;try{if(Se.transition=null,j=1,e)return e()}finally{j=l,Se.transition=r,I=t,!(I&6)&&yt()}}function eu(){ge=$t.current,O($t)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,iU(r)),Z!==null)for(r=Z.return;r!==null;){var l=r;switch(Ii(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&$l();break;case 3:cr(),O(pe),O(ue),Fi();break;case 5:_i(l);break;case 4:cr();break;case 13:O(V);break;case 19:O(V);break;case 10:Oi(l.type._context);break;case 22:case 23:eu()}r=r.return}if(ee=e,Z=e=mt(e.current,null),re=ge=t,K=0,nl=null,Ki=Cn=jt=0,Ue=Vr=null,Dt!==null){for(t=0;t<Dt.length;t++)if(r=Dt[t],l=r.interleaved,l!==null){r.interleaved=null;var n=l.next,a=r.pending;if(a!==null){var i=a.next;a.next=n,l.next=i}r.pending=l}Dt=null}return e}function Os(e,t){do{var r=Z;try{if(Wi(),Ol.current=dn,on){for(var l=T.memoizedState;l!==null;){var n=l.queue;n!==null&&(n.pending=null),l=l.next}on=!1}if(It=0,$=J=T=null,Or=!1,tl=0,Gi.current=null,r===null||r.return===null){K=1,nl=t,Z=null;break}e:{var a=e,i=r.return,u=r,o=t;if(t=re,u.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=o,m=u,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=ro(i);if(g!==null){g.flags&=-257,lo(g,i,u,a,t),g.mode&1&&to(a,d,t),t=g,o=d;var v=t.updateQueue;if(v===null){var w=new Set;w.add(o),t.updateQueue=w}else v.add(o);break e}else{if(!(t&1)){to(a,d,t),tu();break e}o=Error(b(426))}}else if(R&&u.mode&1){var A=ro(i);if(A!==null){!(A.flags&65536)&&(A.flags|=256),lo(A,i,u,a,t),ji(Ur(o,u));break e}}a=o=Ur(o,u),K!==4&&(K=2),Vr===null?Vr=[a]:Vr.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var U=bs(a,o,t);Ju(a,U);break e;case 1:u=o;var s=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=ys(a,u,t);Ju(a,k);break e}}a=a.return}while(a!==null)}Ts(r)}catch(q){t=q,Z===r&&r!==null&&(Z=r=r.return);continue}break}while(!0)}function Rs(){var e=sn.current;return sn.current=dn,e===null?dn:e}function tu(){(K===0||K===3||K===2)&&(K=4),ee===null||!(jt&268435455)&&!(Cn&268435455)||at(ee,re)}function hn(e,t){var r=I;I|=2;var l=Rs();(ee!==e||re!==t)&&(Fe=null,Nt(e,t));do try{EU();break}catch(n){Os(e,n)}while(!0);if(Wi(),I=r,sn.current=l,Z!==null)throw Error(b(261));return ee=null,re=0,K}function EU(){for(;Z!==null;)Vs(Z)}function LU(){for(;Z!==null&&!l0();)Vs(Z)}function Vs(e){var t=Fs(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Ts(e):Z=t,Gi.current=null}function Ts(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=xU(r,t),r!==null){r.flags&=32767,Z=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Z=null;return}}else if(r=AU(r,t,ge),r!==null){Z=r;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);K===0&&(K=5)}function St(e,t,r){var l=j,n=Se.transition;try{Se.transition=null,j=1,MU(e,t,r,l)}finally{Se.transition=n,j=l}return null}function MU(e,t,r,l){do ar();while(ut!==null);if(I&6)throw Error(b(327));r=e.finishedWork;var n=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(h0(e,a),e===ee&&(Z=ee=null,re=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Nl||(Nl=!0,Bs(Zl,function(){return ar(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Se.transition,Se.transition=null;var i=j;j=1;var u=I;I|=4,Gi.current=null,CU(e,r),js(r,e),$0(Oa),Jl=!!Wa,Oa=Wa=null,e.current=r,DU(r),n0(),I=u,j=i,Se.transition=a}else e.current=r;if(Nl&&(Nl=!1,ut=e,Un=n),a=e.pendingLanes,a===0&&(pt=null),u0(r.stateNode),me(e,Q()),t!==null)for(l=e.onRecoverableError,r=0;r<t.length;r++)n=t[r],l(n.value,{componentStack:n.stack,digest:n.digest});if(cn)throw cn=!1,e=ni,ni=null,e;return Un&1&&e.tag!==0&&ar(),a=e.pendingLanes,a&1?e===ai?Tr++:(Tr=0,ai=e):Tr=0,yt(),null}function ar(){if(ut!==null){var e=bd(Un),t=Se.transition,r=j;try{if(Se.transition=null,j=16>e?16:e,ut===null)var l=!1;else{if(e=ut,ut=null,Un=0,I&6)throw Error(b(331));var n=I;for(I|=4,x=e.current;x!==null;){var a=x,i=a.child;if(x.flags&16){var u=a.deletions;if(u!==null){for(var o=0;o<u.length;o++){var d=u[o];for(x=d;x!==null;){var m=x;switch(m.tag){case 0:case 11:case 15:Rr(8,m,a)}var h=m.child;if(h!==null)h.return=m,x=h;else for(;x!==null;){m=x;var f=m.sibling,g=m.return;if(Ls(m),m===d){x=null;break}if(f!==null){f.return=g,x=f;break}x=g}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}x=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,x=i;else e:for(;x!==null;){if(a=x,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Rr(9,a,a.return)}var U=a.sibling;if(U!==null){U.return=a.return,x=U;break e}x=a.return}}var s=e.current;for(x=s;x!==null;){i=x;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,x=p;else e:for(i=s;x!==null;){if(u=x,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Sn(9,u)}}catch(q){F(u,u.return,q)}if(u===i){x=null;break e}var k=u.sibling;if(k!==null){k.return=u.return,x=k;break e}x=u.return}}if(I=n,yt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(kn,e)}catch{}l=!0}return l}finally{j=r,Se.transition=t}}return!1}function go(e,t,r){t=Ur(r,t),t=bs(e,t,1),e=ht(e,t,1),t=de(),e!==null&&(ol(e,1,t),me(e,t))}function F(e,t,r){if(e.tag===3)go(e,e,r);else for(;t!==null;){if(t.tag===3){go(t,e,r);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pt===null||!pt.has(l))){e=Ur(r,e),e=ys(t,e,1),t=ht(t,e,1),e=de(),t!==null&&(ol(t,1,e),me(t,e));break}}t=t.return}}function IU(e,t,r){var l=e.pingCache;l!==null&&l.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&r,ee===e&&(re&r)===r&&(K===4||K===3&&(re&130023424)===re&&500>Q()-Yi?Nt(e,0):Ki|=r),me(e,t)}function _s(e,t){t===0&&(e.mode&1?(t=wl,wl<<=1,!(wl&130023424)&&(wl=4194304)):t=1);var r=de();e=Ge(e,t),e!==null&&(ol(e,t,r),me(e,r))}function jU(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),_s(e,r)}function zU(e,t){var r=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(r=n.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(b(314))}l!==null&&l.delete(t),_s(e,r)}var Fs;Fs=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)he=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return he=!1,qU(e,t,r);he=!!(e.flags&131072)}else he=!1,R&&t.flags&1048576&&Zd(t,rn,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;Vl(e,t),e=t.pendingProps;var n=or(t,ue.current);nr(t,r),n=Xi(null,t,l,e,n,r);var a=Qi();return t.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(l)?(a=!0,en(t)):a=!1,t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Vi(t),n.updater=xn,t.stateNode=n,n._reactInternals=t,Za(t,l,e,r),t=Ga(null,t,l,!0,a,r)):(t.tag=0,R&&a&&Mi(t),oe(null,t,n,r),t=t.child),t;case 16:l=t.elementType;e:{switch(Vl(e,t),e=t.pendingProps,n=l._init,l=n(l._payload),t.type=l,n=t.tag=OU(l),e=Ee(l,e),n){case 0:t=Ja(null,t,l,e,r);break e;case 1:t=io(null,t,l,e,r);break e;case 11:t=no(null,t,l,e,r);break e;case 14:t=ao(null,t,l,Ee(l.type,e),r);break e}throw Error(b(306,l,""))}return t;case 0:return l=t.type,n=t.pendingProps,n=t.elementType===l?n:Ee(l,n),Ja(e,t,l,n,r);case 1:return l=t.type,n=t.pendingProps,n=t.elementType===l?n:Ee(l,n),io(e,t,l,n,r);case 3:e:{if(Ss(t),e===null)throw Error(b(387));l=t.pendingProps,a=t.memoizedState,n=a.element,$d(e,t),an(t,l,null,r);var i=t.memoizedState;if(l=i.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){n=Ur(Error(b(423)),t),t=uo(e,t,l,r,n);break e}else if(l!==n){n=Ur(Error(b(424)),t),t=uo(e,t,l,r,n);break e}else for(ke=Ut(t.stateNode.containerInfo.firstChild),ve=t,R=!0,Me=null,r=Kd(t,null,l,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(dr(),l===n){t=Ke(e,t,r);break e}oe(e,t,l,r)}t=t.child}return t;case 5:return es(t),e===null&&Ba(t),l=t.type,n=t.pendingProps,a=e!==null?e.memoizedProps:null,i=n.children,Ra(l,n)?i=null:a!==null&&Ra(l,a)&&(t.flags|=32),xs(e,t),oe(e,t,i,r),t.child;case 6:return e===null&&Ba(t),null;case 13:return Cs(e,t,r);case 4:return Ti(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=sr(t,null,l,r):oe(e,t,l,r),t.child;case 11:return l=t.type,n=t.pendingProps,n=t.elementType===l?n:Ee(l,n),no(e,t,l,n,r);case 7:return oe(e,t,t.pendingProps,r),t.child;case 8:return oe(e,t,t.pendingProps.children,r),t.child;case 12:return oe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(l=t.type._context,n=t.pendingProps,a=t.memoizedProps,i=n.value,z(ln,l._currentValue),l._currentValue=i,a!==null)if(ze(a.value,i)){if(a.children===n.children&&!pe.current){t=Ke(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){i=a.child;for(var o=u.firstContext;o!==null;){if(o.context===l){if(a.tag===1){o=Ze(-1,r&-r),o.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?o.next=o:(o.next=m.next,m.next=o),d.pending=o}}a.lanes|=r,o=a.alternate,o!==null&&(o.lanes|=r),Xa(a.return,r,t),u.lanes|=r;break}o=o.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(b(341));i.lanes|=r,u=i.alternate,u!==null&&(u.lanes|=r),Xa(i,r,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}oe(e,t,n.children,r),t=t.child}return t;case 9:return n=t.type,l=t.pendingProps.children,nr(t,r),n=Ce(n),l=l(n),t.flags|=1,oe(e,t,l,r),t.child;case 14:return l=t.type,n=Ee(l,t.pendingProps),n=Ee(l.type,n),ao(e,t,l,n,r);case 15:return qs(e,t,t.type,t.pendingProps,r);case 17:return l=t.type,n=t.pendingProps,n=t.elementType===l?n:Ee(l,n),Vl(e,t),t.tag=1,fe(l)?(e=!0,en(t)):e=!1,nr(t,r),ws(t,l,n),Za(t,l,n,r),Ga(null,t,l,!0,e,r);case 19:return Ds(e,t,r);case 22:return As(e,t,r)}throw Error(b(156,t.tag))};function Bs(e,t){return gd(e,t)}function WU(e,t,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,t,r,l){return new WU(e,t,r,l)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function OU(e){if(typeof e=="function")return ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bi)return 11;if(e===yi)return 14}return 2}function mt(e,t){var r=e.alternate;return r===null?(r=xe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Fl(e,t,r,l,n,a){var i=2;if(l=e,typeof e=="function")ru(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ft:return Et(r.children,n,a,t);case wi:i=8,n|=8;break;case ga:return e=xe(12,r,t,n|2),e.elementType=ga,e.lanes=a,e;case ka:return e=xe(13,r,t,n),e.elementType=ka,e.lanes=a,e;case va:return e=xe(19,r,t,n),e.elementType=va,e.lanes=a,e;case ed:return Dn(r,n,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yo:i=10;break e;case $o:i=9;break e;case bi:i=11;break e;case yi:i=14;break e;case rt:i=16,l=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=xe(i,r,t,n),t.elementType=e,t.type=l,t.lanes=a,t}function Et(e,t,r,l){return e=xe(7,e,l,t),e.lanes=r,e}function Dn(e,t,r,l){return e=xe(22,e,l,t),e.elementType=ed,e.lanes=r,e.stateNode={isHidden:!1},e}function ca(e,t,r){return e=xe(6,e,null,t),e.lanes=r,e}function Ua(e,t,r){return t=xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function RU(e,t,r,l,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qn(0),this.expirationTimes=Qn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qn(0),this.identifierPrefix=l,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function lu(e,t,r,l,n,a,i,u,o){return e=new RU(e,t,r,u,o),t===1?(t=1,a===!0&&(t|=8)):t=0,a=xe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:l,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vi(a),e}function VU(e,t,r){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_t,key:l==null?null:""+l,children:e,containerInfo:t,implementation:r}}function Xs(e){if(!e)return vt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var r=e.type;if(fe(r))return Xd(e,r,t)}return t}function Qs(e,t,r,l,n,a,i,u,o){return e=lu(r,l,!0,e,n,a,i,u,o),e.context=Xs(null),r=e.current,l=de(),n=ft(r),a=Ze(l,n),a.callback=t??null,ht(r,a,n),e.current.lanes=n,ol(e,n,l),me(e,l),e}function Pn(e,t,r,l){var n=t.current,a=de(),i=ft(n);return r=Xs(r),t.context===null?t.context=r:t.pendingContext=r,t=Ze(a,i),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=ht(n,t,i),e!==null&&(je(e,n,i,a),Wl(e,n,i)),i}function pn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ko(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function nu(e,t){ko(e,t),(e=e.alternate)&&ko(e,t)}function TU(){return null}var Zs=typeof reportError=="function"?reportError:function(e){console.error(e)};function au(e){this._internalRoot=e}Nn.prototype.render=au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Pn(e,t,null,null)};Nn.prototype.unmount=au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){Pn(null,e,null,null)}),t[Je]=null}};function Nn(e){this._internalRoot=e}Nn.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ad();e={blockedOn:null,target:e,priority:t};for(var r=0;r<nt.length&&t!==0&&t<nt[r].priority;r++);nt.splice(r,0,e),r===0&&Sd(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function En(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vo(){}function _U(e,t,r,l,n){if(n){if(typeof l=="function"){var a=l;l=function(){var d=pn(i);a.call(d)}}var i=Qs(t,l,e,0,null,!1,!1,"",vo);return e._reactRootContainer=i,e[Je]=i.current,Gr(e.nodeType===8?e.parentNode:e),zt(),i}for(;n=e.lastChild;)e.removeChild(n);if(typeof l=="function"){var u=l;l=function(){var d=pn(o);u.call(d)}}var o=lu(e,0,!1,null,null,!1,!1,"",vo);return e._reactRootContainer=o,e[Je]=o.current,Gr(e.nodeType===8?e.parentNode:e),zt(function(){Pn(t,o,r,l)}),o}function Ln(e,t,r,l,n){var a=r._reactRootContainer;if(a){var i=a;if(typeof n=="function"){var u=n;n=function(){var o=pn(i);u.call(o)}}Pn(t,i,e,n)}else i=_U(r,t,e,n,l);return pn(i)}yd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Er(t.pendingLanes);r!==0&&(xi(t,r|1),me(t,Q()),!(I&6)&&(hr=Q()+500,yt()))}break;case 13:zt(function(){var l=Ge(e,1);if(l!==null){var n=de();je(l,e,1,n)}}),nu(e,1)}};Si=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var r=de();je(t,e,134217728,r)}nu(e,134217728)}};qd=function(e){if(e.tag===13){var t=ft(e),r=Ge(e,t);if(r!==null){var l=de();je(r,e,t,l)}nu(e,t)}};Ad=function(){return j};xd=function(e,t){var r=j;try{return j=e,t()}finally{j=r}};Pa=function(e,t,r){switch(t){case"input":if(ya(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var l=r[t];if(l!==e&&l.form===e.form){var n=yn(l);if(!n)throw Error(b(90));rd(l),ya(l,n)}}}break;case"textarea":nd(e,r);break;case"select":t=r.value,t!=null&&er(e,!!r.multiple,t,!1)}};cd=$i;Ud=zt;var FU={usingClientEntryPoint:!1,Events:[sl,Zt,yn,dd,sd,$i]},Dr={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BU={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fd(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||TU,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{kn=El.inject(BU),Ve=El}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FU;be.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(t))throw Error(b(200));return VU(e,t,null,r)};be.createRoot=function(e,t){if(!iu(e))throw Error(b(299));var r=!1,l="",n=Zs;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=lu(e,1,!1,null,null,r,!1,l,n),e[Je]=t.current,Gr(e.nodeType===8?e.parentNode:e),new au(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=fd(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return zt(e)};be.hydrate=function(e,t,r){if(!En(t))throw Error(b(200));return Ln(null,e,t,!0,r)};be.hydrateRoot=function(e,t,r){if(!iu(e))throw Error(b(405));var l=r!=null&&r.hydratedSources||null,n=!1,a="",i=Zs;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=Qs(t,null,e,1,r??null,n,!1,a,i),e[Je]=t.current,Gr(e),l)for(e=0;e<l.length;e++)r=l[e],n=r._getVersion,n=n(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,n]:t.mutableSourceEagerHydrationData.push(r,n);return new Nn(t)};be.render=function(e,t,r){if(!En(t))throw Error(b(200));return Ln(null,e,t,!1,r)};be.unmountComponentAtNode=function(e){if(!En(e))throw Error(b(40));return e._reactRootContainer?(zt(function(){Ln(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};be.unstable_batchedUpdates=$i;be.unstable_renderSubtreeIntoContainer=function(e,t,r,l){if(!En(r))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Ln(e,t,r,!1,l)};be.version="18.3.1-next-f1338f8080-20240426";function Hs(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hs)}catch(e){console.error(e)}}Hs(),Ho.exports=be;var XU=Ho.exports,wo=XU;fa.createRoot=wo.createRoot,fa.hydrateRoot=wo.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)({}).hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},al.apply(null,arguments)}var ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ot||(ot={}));const bo="popstate";function QU(e){e===void 0&&(e={});function t(n,a){let{pathname:i="/",search:u="",hash:o=""}=Rt(n.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),oi("",{pathname:i,search:u,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){let i=n.document.querySelector("base"),u="";if(i&&i.getAttribute("href")){let o=n.location.href,d=o.indexOf("#");u=d===-1?o:o.slice(0,d)}return u+"#"+(typeof a=="string"?a:fn(a))}function l(n,a){Mn(n.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return HU(t,r,l,e)}function H(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Mn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ZU(){return Math.random().toString(36).substr(2,8)}function yo(e,t){return{usr:e.state,key:e.key,idx:t}}function oi(e,t,r,l){return r===void 0&&(r=null),al({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Rt(t):t,{state:r,key:t&&t.key||l||ZU()})}function fn(e){let{pathname:t="/",search:r="",hash:l=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function Rt(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let l=e.indexOf("?");l>=0&&(t.search=e.substr(l),e=e.substr(0,l)),e&&(t.pathname=e)}return t}function HU(e,t,r,l){l===void 0&&(l={});let{window:n=document.defaultView,v5Compat:a=!1}=l,i=n.history,u=ot.Pop,o=null,d=m();d==null&&(d=0,i.replaceState(al({},i.state,{idx:d}),""));function m(){return(i.state||{idx:null}).idx}function h(){u=ot.Pop;let A=m(),U=A==null?null:A-d;d=A,o&&o({action:u,location:w.location,delta:U})}function f(A,U){u=ot.Push;let s=oi(w.location,A,U);r&&r(s,A),d=m()+1;let p=yo(s,d),k=w.createHref(s);try{i.pushState(p,"",k)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;n.location.assign(k)}a&&o&&o({action:u,location:w.location,delta:1})}function g(A,U){u=ot.Replace;let s=oi(w.location,A,U);r&&r(s,A),d=m();let p=yo(s,d),k=w.createHref(s);i.replaceState(p,"",k),a&&o&&o({action:u,location:w.location,delta:0})}function v(A){let U=n.location.origin!=="null"?n.location.origin:n.location.href,s=typeof A=="string"?A:fn(A);return s=s.replace(/ $/,"%20"),H(U,"No window.location.(origin|href) available to create URL for href: "+s),new URL(s,U)}let w={get action(){return u},get location(){return e(n,i)},listen(A){if(o)throw new Error("A history only accepts one active listener");return n.addEventListener(bo,h),o=A,()=>{n.removeEventListener(bo,h),o=null}},createHref(A){return t(n,A)},createURL:v,encodeLocation(A){let U=v(A);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:f,replace:g,go(A){return i.go(A)}};return w}var qo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qo||(qo={}));function JU(e,t,r){return r===void 0&&(r="/"),GU(e,t,r)}function GU(e,t,r,l){let n=typeof t=="string"?Rt(t):t,a=uu(n.pathname||"/",r);if(a==null)return null;let i=Js(e);KU(i);let u=null,o=d2(a);for(let d=0;u==null&&d<i.length;++d)u=i2(i[d],o);return u}function Js(e,t,r,l){t===void 0&&(t=[]),r===void 0&&(r=[]),l===void 0&&(l="");let n=(a,i,u)=>{let o={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};o.relativePath.startsWith("/")&&(H(o.relativePath.startsWith(l),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(l.length));let d=gt([l,o.relativePath]),m=r.concat(o);a.children&&a.children.length>0&&(H(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Js(a.children,t,m,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:n2(d,a.index),routesMeta:m})};return e.forEach((a,i)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))n(a,i);else for(let o of Gs(a.path))n(a,i,o)}),t}function Gs(e){let t=e.split("/");if(t.length===0)return[];let[r,...l]=t,n=r.endsWith("?"),a=r.replace(/\?$/,"");if(l.length===0)return n?[a,""]:[a];let i=Gs(l.join("/")),u=[];return u.push(...i.map(o=>o===""?a:[a,o].join("/"))),n&&u.push(...i),u.map(o=>e.startsWith("/")&&o===""?"/":o)}function KU(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:a2(t.routesMeta.map(l=>l.childrenIndex),r.routesMeta.map(l=>l.childrenIndex)))}const YU=/^:[\w-]+$/,$U=3,e2=2,t2=1,r2=10,l2=-2,Ao=e=>e==="*";function n2(e,t){let r=e.split("/"),l=r.length;return r.some(Ao)&&(l+=l2),t&&(l+=e2),r.filter(n=>!Ao(n)).reduce((n,a)=>n+(YU.test(a)?$U:a===""?t2:r2),l)}function a2(e,t){return e.length===t.length&&e.slice(0,-1).every((l,n)=>l===t[n])?e[e.length-1]-t[t.length-1]:0}function i2(e,t,r){let{routesMeta:l}=e,n={},a="/",i=[];for(let u=0;u<l.length;++u){let o=l[u],d=u===l.length-1,m=a==="/"?t:t.slice(a.length)||"/",h=u2({path:o.relativePath,caseSensitive:o.caseSensitive,end:d},m),f=o.route;if(!h)return null;Object.assign(n,h.params),i.push({params:n,pathname:gt([a,h.pathname]),pathnameBase:p2(gt([a,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(a=gt([a,h.pathnameBase]))}return i}function u2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,l]=o2(e.path,e.caseSensitive,e.end),n=t.match(r);if(!n)return null;let a=n[0],i=a.replace(/(.)\/+$/,"$1"),u=n.slice(1);return{params:l.reduce((d,m,h)=>{let{paramName:f,isOptional:g}=m;if(f==="*"){let w=u[h]||"";i=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const v=u[h];return g&&!v?d[f]=void 0:d[f]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:i,pattern:e}}function o2(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Mn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let l=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,u,o)=>(l.push({paramName:u,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(l.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),l]}function d2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function uu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,l=e.charAt(r);return l&&l!=="/"?null:e.slice(r)||"/"}const s2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,c2=e=>s2.test(e);function U2(e,t){t===void 0&&(t="/");let{pathname:r,search:l="",hash:n=""}=typeof e=="string"?Rt(e):e,a;if(r)if(c2(r))a=r;else{if(r.includes("//")){let i=r;r=$s(r),Mn(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?a=xo(r.substring(1),"/"):a=xo(r,t)}else a=t;return{pathname:a,search:f2(l),hash:m2(n)}}function xo(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function ha(e,t,r,l){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function h2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Ks(e,t){let r=h2(e);return t?r.map((l,n)=>n===r.length-1?l.pathname:l.pathnameBase):r.map(l=>l.pathnameBase)}function Ys(e,t,r,l){l===void 0&&(l=!1);let n;typeof e=="string"?n=Rt(e):(n=al({},e),H(!n.pathname||!n.pathname.includes("?"),ha("?","pathname","search",n)),H(!n.pathname||!n.pathname.includes("#"),ha("#","pathname","hash",n)),H(!n.search||!n.search.includes("#"),ha("#","search","hash",n)));let a=e===""||n.pathname==="",i=a?"/":n.pathname,u;if(i==null)u=r;else{let h=t.length-1;if(!l&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),h-=1;n.pathname=f.join("/")}u=h>=0?t[h]:"/"}let o=U2(n,u),d=i&&i!=="/"&&i.endsWith("/"),m=(a||i===".")&&r.endsWith("/");return!o.pathname.endsWith("/")&&(d||m)&&(o.pathname+="/"),o}const $s=e=>e.replace(/\/\/+/g,"/"),gt=e=>$s(e.join("/")),p2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),f2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,m2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function g2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ec=["post","put","patch","delete"];new Set(ec);const k2=["get",...ec];new Set(k2);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)({}).hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},il.apply(null,arguments)}const ou=y.createContext(null),v2=y.createContext(null),Vt=y.createContext(null),In=y.createContext(null),$e=y.createContext({outlet:null,matches:[],isDataRoute:!1}),tc=y.createContext(null);function w2(e,t){let{relative:r}=t===void 0?{}:t;Ul()||H(!1);let{basename:l,navigator:n}=y.useContext(Vt),{hash:a,pathname:i,search:u}=lc(e,{relative:r}),o=i;return l!=="/"&&(o=i==="/"?l:gt([l,i])),n.createHref({pathname:o,search:u,hash:a})}function Ul(){return y.useContext(In)!=null}function kr(){return Ul()||H(!1),y.useContext(In).location}function rc(e){y.useContext(Vt).static||y.useLayoutEffect(e)}function jn(){let{isDataRoute:e}=y.useContext($e);return e?j2():b2()}function b2(){Ul()||H(!1);let e=y.useContext(ou),{basename:t,future:r,navigator:l}=y.useContext(Vt),{matches:n}=y.useContext($e),{pathname:a}=kr(),i=JSON.stringify(Ks(n,r.v7_relativeSplatPath)),u=y.useRef(!1);return rc(()=>{u.current=!0}),y.useCallback(function(d,m){if(m===void 0&&(m={}),!u.current)return;if(typeof d=="number"){l.go(d);return}let h=Ys(d,JSON.parse(i),a,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:gt([t,h.pathname])),(m.replace?l.replace:l.push)(h,m.state,m)},[t,l,i,a,e])}const y2=y.createContext(null);function q2(e){let t=y.useContext($e).outlet;return t&&y.createElement(y2.Provider,{value:e},t)}function du(){let{matches:e}=y.useContext($e),t=e[e.length-1];return t?t.params:{}}function lc(e,t){let{relative:r}=t===void 0?{}:t,{future:l}=y.useContext(Vt),{matches:n}=y.useContext($e),{pathname:a}=kr(),i=JSON.stringify(Ks(n,l.v7_relativeSplatPath));return y.useMemo(()=>Ys(e,JSON.parse(i),a,r==="path"),[e,i,a,r])}function A2(e,t){return x2(e,t)}function x2(e,t,r,l){Ul()||H(!1);let{navigator:n}=y.useContext(Vt),{matches:a}=y.useContext($e),i=a[a.length-1],u=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let d=kr(),m;if(t){var h;let A=typeof t=="string"?Rt(t):t;o==="/"||(h=A.pathname)!=null&&h.startsWith(o)||H(!1),m=A}else m=d;let f=m.pathname||"/",g=f;if(o!=="/"){let A=o.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(A.length).join("/")}let v=JU(e,{pathname:g}),w=N2(v&&v.map(A=>Object.assign({},A,{params:Object.assign({},u,A.params),pathname:gt([o,n.encodeLocation?n.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?o:gt([o,n.encodeLocation?n.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),a,r,l);return t&&w?y.createElement(In.Provider,{value:{location:il({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ot.Pop}},w):w}function S2(){let e=I2(),t=g2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),r?y.createElement("pre",{style:n},r):null,null)}const C2=y.createElement(S2,null);class D2 extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?y.createElement($e.Provider,{value:this.props.routeContext},y.createElement(tc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function P2(e){let{routeContext:t,match:r,children:l}=e,n=y.useContext(ou);return n&&n.static&&n.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement($e.Provider,{value:t},l)}function N2(e,t,r,l){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),l===void 0&&(l=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=l)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,u=(n=r)==null?void 0:n.errors;if(u!=null){let m=i.findIndex(h=>h.route.id&&(u==null?void 0:u[h.route.id])!==void 0);m>=0||H(!1),i=i.slice(0,Math.min(i.length,m+1))}let o=!1,d=-1;if(r&&l&&l.v7_partialHydration)for(let m=0;m<i.length;m++){let h=i[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=m),h.route.id){let{loaderData:f,errors:g}=r,v=h.route.loader&&f[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||v){o=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((m,h,f)=>{let g,v=!1,w=null,A=null;r&&(g=u&&h.route.id?u[h.route.id]:void 0,w=h.route.errorElement||C2,o&&(d<0&&f===0?(z2("route-fallback"),v=!0,A=null):d===f&&(v=!0,A=h.route.hydrateFallbackElement||null)));let U=t.concat(i.slice(0,f+1)),s=()=>{let p;return g?p=w:v?p=A:h.route.Component?p=y.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,y.createElement(P2,{match:h,routeContext:{outlet:m,matches:U,isDataRoute:r!=null},children:p})};return r&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?y.createElement(D2,{location:r.location,revalidation:r.revalidation,component:w,error:g,children:s(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):s()},null)}var nc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(nc||{}),ac=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ac||{});function E2(e){let t=y.useContext(ou);return t||H(!1),t}function L2(e){let t=y.useContext(v2);return t||H(!1),t}function M2(e){let t=y.useContext($e);return t||H(!1),t}function ic(e){let t=M2(),r=t.matches[t.matches.length-1];return r.route.id||H(!1),r.route.id}function I2(){var e;let t=y.useContext(tc),r=L2(),l=ic();return t!==void 0?t:(e=r.errors)==null?void 0:e[l]}function j2(){let{router:e}=E2(nc.UseNavigateStable),t=ic(ac.UseNavigateStable),r=y.useRef(!1);return rc(()=>{r.current=!0}),y.useCallback(function(n,a){a===void 0&&(a={}),r.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,il({fromRouteId:t},a)))},[e,t])}const So={};function z2(e,t,r){So[e]||(So[e]=!0)}function W2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function O2(e){return q2(e.context)}function tt(e){H(!1)}function R2(e){let{basename:t="/",children:r=null,location:l,navigationType:n=ot.Pop,navigator:a,static:i=!1,future:u}=e;Ul()&&H(!1);let o=t.replace(/^\/*/,"/"),d=y.useMemo(()=>({basename:o,navigator:a,static:i,future:il({v7_relativeSplatPath:!1},u)}),[o,u,a,i]);typeof l=="string"&&(l=Rt(l));let{pathname:m="/",search:h="",hash:f="",state:g=null,key:v="default"}=l,w=y.useMemo(()=>{let A=uu(m,o);return A==null?null:{location:{pathname:A,search:h,hash:f,state:g,key:v},navigationType:n}},[o,m,h,f,g,v,n]);return w==null?null:y.createElement(Vt.Provider,{value:d},y.createElement(In.Provider,{children:r,value:w}))}function V2(e){let{children:t,location:r}=e;return A2(di(t),r)}new Promise(()=>{});function di(e,t){t===void 0&&(t=[]);let r=[];return y.Children.forEach(e,(l,n)=>{if(!y.isValidElement(l))return;let a=[...t,n];if(l.type===y.Fragment){r.push.apply(r,di(l.props.children,a));return}l.type!==tt&&H(!1),!l.props.index||!l.props.children||H(!1);let i={id:l.props.id||a.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(i.children=di(l.props.children,a)),r.push(i)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)({}).hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},si.apply(null,arguments)}function T2(e,t){if(e==null)return{};var r={};for(var l in e)if({}.hasOwnProperty.call(e,l)){if(t.indexOf(l)!==-1)continue;r[l]=e[l]}return r}function _2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function F2(e,t){return e.button===0&&(!t||t==="_self")&&!_2(e)}function ci(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let l=e[r];return t.concat(Array.isArray(l)?l.map(n=>[r,n]):[[r,l]])},[]))}function B2(e,t){let r=ci(e);return t&&t.forEach((l,n)=>{r.has(n)||t.getAll(n).forEach(a=>{r.append(n,a)})}),r}const X2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Q2="6";try{window.__reactRouterVersion=Q2}catch{}const Z2="startTransition",Co=Ic[Z2];function H2(e){let{basename:t,children:r,future:l,window:n}=e,a=y.useRef();a.current==null&&(a.current=QU({window:n,v5Compat:!0}));let i=a.current,[u,o]=y.useState({action:i.action,location:i.location}),{v7_startTransition:d}=l||{},m=y.useCallback(h=>{d&&Co?Co(()=>o(h)):o(h)},[o,d]);return y.useLayoutEffect(()=>i.listen(m),[i,m]),y.useEffect(()=>W2(l),[l]),y.createElement(R2,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:i,future:l})}const J2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ir=y.forwardRef(function(t,r){let{onClick:l,relative:n,reloadDocument:a,replace:i,state:u,target:o,to:d,preventScrollReset:m,viewTransition:h}=t,f=T2(t,X2),{basename:g}=y.useContext(Vt),v,w=!1;if(typeof d=="string"&&G2.test(d)&&(v=d,J2))try{let p=new URL(window.location.href),k=d.startsWith("//")?new URL(p.protocol+d):new URL(d),q=uu(k.pathname,g);k.origin===p.origin&&q!=null?d=q+k.search+k.hash:w=!0}catch{}let A=w2(d,{relative:n}),U=K2(d,{replace:i,state:u,target:o,preventScrollReset:m,relative:n,viewTransition:h});function s(p){l&&l(p),p.defaultPrevented||U(p)}return y.createElement("a",si({},f,{href:v||A,onClick:w||a?l:s,ref:r,target:o}))});var Do;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Do||(Do={}));var Po;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Po||(Po={}));function K2(e,t){let{target:r,replace:l,state:n,preventScrollReset:a,relative:i,viewTransition:u}=t===void 0?{}:t,o=jn(),d=kr(),m=lc(e,{relative:i});return y.useCallback(h=>{if(F2(h,r)){h.preventDefault();let f=l!==void 0?l:fn(d)===fn(m);o(e,{replace:f,state:n,preventScrollReset:a,relative:i,viewTransition:u})}},[d,o,m,l,n,r,e,a,i,u])}function Y2(e){let t=y.useRef(ci(e)),r=y.useRef(!1),l=kr(),n=y.useMemo(()=>B2(l.search,r.current?null:t.current),[l.search]),a=jn(),i=y.useCallback((u,o)=>{const d=ci(typeof u=="function"?u(n):u);r.current=!0,a("?"+d,o)},[a,n]);return[n,i]}/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),_e=(e,t)=>{const r=y.forwardRef(({color:l="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:u="",children:o,...d},m)=>y.createElement("svg",{ref:m,...$2,width:n,height:n,stroke:l,strokeWidth:i?Number(a)*24/Number(n):a,className:["lucide",`lucide-${eh(e)}`,u].join(" "),...d},[...t.map(([h,f])=>y.createElement(h,f)),...Array.isArray(o)?o:[o]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=_e("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=_e("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=_e("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=_e("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=_e("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=_e("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=_e("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=_e("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=_e("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=_e("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),oh={},No=e=>{let t;const r=new Set,l=(m,h)=>{const f=typeof m=="function"?m(t):m;if(!Object.is(f,t)){const g=t;t=h??(typeof f!="object"||f===null)?f:Object.assign({},t,f),r.forEach(v=>v(t,g))}},n=()=>t,o={setState:l,getState:n,getInitialState:()=>d,subscribe:m=>(r.add(m),()=>r.delete(m)),destroy:()=>{(oh?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},d=t=e(l,n,o);return o},dh=e=>e?No(e):No;var sc={exports:{}},cc={},Uc={exports:{}},hc={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=y;function sh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ch=typeof Object.is=="function"?Object.is:sh,Uh=pr.useState,hh=pr.useEffect,ph=pr.useLayoutEffect,fh=pr.useDebugValue;function mh(e,t){var r=t(),l=Uh({inst:{value:r,getSnapshot:t}}),n=l[0].inst,a=l[1];return ph(function(){n.value=r,n.getSnapshot=t,pa(n)&&a({inst:n})},[e,r,t]),hh(function(){return pa(n)&&a({inst:n}),e(function(){pa(n)&&a({inst:n})})},[e]),fh(r),r}function pa(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ch(e,r)}catch{return!0}}function gh(e,t){return t()}var kh=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?gh:mh;hc.useSyncExternalStore=pr.useSyncExternalStore!==void 0?pr.useSyncExternalStore:kh;Uc.exports=hc;var vh=Uc.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn=y,wh=vh;function bh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yh=typeof Object.is=="function"?Object.is:bh,qh=wh.useSyncExternalStore,Ah=zn.useRef,xh=zn.useEffect,Sh=zn.useMemo,Ch=zn.useDebugValue;cc.useSyncExternalStoreWithSelector=function(e,t,r,l,n){var a=Ah(null);if(a.current===null){var i={hasValue:!1,value:null};a.current=i}else i=a.current;a=Sh(function(){function o(g){if(!d){if(d=!0,m=g,g=l(g),n!==void 0&&i.hasValue){var v=i.value;if(n(v,g))return h=v}return h=g}if(v=h,yh(m,g))return v;var w=l(g);return n!==void 0&&n(v,w)?(m=g,v):(m=g,h=w)}var d=!1,m,h,f=r===void 0?null:r;return[function(){return o(t())},f===null?void 0:function(){return o(f())}]},[t,r,l,n]);var u=qh(e,a[0],a[1]);return xh(function(){i.hasValue=!0,i.value=u},[u]),Ch(u),u};sc.exports=cc;var Dh=sc.exports;const Ph=zo(Dh),pc={},{useDebugValue:Nh}=mi,{useSyncExternalStoreWithSelector:Eh}=Ph;let Eo=!1;const Lh=e=>e;function Mh(e,t=Lh,r){(pc?"production":void 0)!=="production"&&r&&!Eo&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Eo=!0);const l=Eh(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return Nh(l),l}const Lo=e=>{(pc?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?dh(e):e,r=(l,n)=>Mh(t,l,n);return Object.assign(r,t),r},Ih=e=>e?Lo(e):Lo,jh=[{slug:"engineering",name:"工程设计与仿真",icon:"Cpu",description:"CAD、CAE、EDA等工程设计软件",count:59},{slug:"office",name:"办公与文档",icon:"Briefcase",description:"Office、PDF、笔记等办公软件",count:23},{slug:"dev-tools",name:"编程开发",icon:"Code",description:"IDE、数据库、编程语言工具",count:17},{slug:"media",name:"图像媒体",icon:"Image",description:"图像处理、视频编辑、设计软件",count:24},{slug:"data-analysis",name:"数据分析",icon:"BarChart",description:"统计、数学、数据分析软件",count:17},{slug:"system-tools",name:"系统工具",icon:"Monitor",description:"虚拟机、系统修复、实用工具",count:10},{slug:"other",name:"其他软件",icon:"Package",description:"其他专业软件工具",count:10}],zh=[{id:"1",title:"Abaqus",slug:"abaqus",description:"Abaqus，专业软件工具，绿色安全可靠。",content:`Abaqus 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/abaqus",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Abaqus 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1Pg6t7O92WeV6J7ERKgILpw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/071a3565053d",thunderUrl:"https://pan.xunlei.com/s/VOuF4xDDIekUebNfKYOylBIsA1?pwd=a4bw"},{title:"Abaqus 2025 下载链接",baiduUrl:"https://pan.baidu.com/s/1mYJZI51PNbUwRuJl0jx6ZA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/214b488cc878",thunderUrl:"https://pan.xunlei.com/s/VOuF5Ka5IekUebNfKYOylIYmA1?pwd=9p9k"},{title:"Abaqus 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Abaqus 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"2",title:"ABB RobotStudio",slug:"abb-robotstudio",description:"ABB RobotStudio，专业软件工具，绿色安全可靠。",content:`ABB RobotStudio 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/abb-robotstudio",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"ABB RobotStudio 6.08 下载链接",baiduUrl:"https://pan.baidu.com/s/1QHQoLMQIB43kI5KtjZ-GrA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/4c26dc189df9",thunderUrl:"https://pan.xunlei.com/s/VOvjp62520JnIeA8Yaxt8_JRA1?pwd=93fz"},{title:"ABB RobotStudio 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ABB RobotStudio 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"3",title:"ACDSee",slug:"acdsee",description:"ACDSee，专业软件工具，绿色安全可靠。",content:`ACDSee 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/acrobat",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Acrobat 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1vTBrCyIi38XfuAy5Jn830g?pwd=1314",quarkUrl:"https://pan.quark.cn/s/f88b6ba90007",thunderUrl:"https://pan.xunlei.com/s/VOuDH1cdvoBS4BKTEHtEWTTGA1?pwd=spe9"},{title:"Acrobat 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Acrobat 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"5",title:"Ae (After Effects)",slug:"after-effects",description:"Ae (After Effects)，专业软件工具，绿色安全可靠。",content:`Ae (After Effects) 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/altium-designer",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"AD (Altium Designer) 26 下载链接",baiduUrl:"https://pan.baidu.com/s/1y4WyJKLpwNDUCVDx6joFCA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/6353e3bc6d53",thunderUrl:"https://pan.xunlei.com/s/VOuGBGHVfvH9s3fcVHU6XlBtA1?pwd=m2ej"},{title:"AD (Altium Designer) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AD (Altium Designer) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"8",title:"Adobe XD",slug:"adobe-xd",description:"Adobe XD，专业软件工具，绿色安全可靠。",content:`Adobe XD 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/arcgis",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"ArcGIS 3.7.0 下载链接",baiduUrl:"https://pan.baidu.com/s/1kM13bIm42ttJf6Fh2LtvbQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/4da5563098b5",thunderUrl:"https://pan.xunlei.com/s/VOuWarqqjswu7Pgr8ydvciFxA1?pwd=q6ix"},{title:"ArcGIS 3.6.3 下载链接",baiduUrl:"https://pan.baidu.com/s/1zZansYx5AKOjahCnDAt9fA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/24b8cf52f7ff",thunderUrl:"https://pan.xunlei.com/s/VOuGJOWxHIzbDFy0Ae0OIgy4A1?pwd=xgnm"},{title:"ArcGis 10.8.2 下载链接",baiduUrl:"https://pan.baidu.com/s/1eZSvTwDXWE97XWBwRow3tA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/e8831bce88e0",thunderUrl:"https://pan.xunlei.com/s/VOuGJAZvaYw_c4XnuIfdGkF5A1?pwd=si9t"},{title:"ArcGis 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ArcGis 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"13",title:"Au (Audition)",slug:"audition",description:"Au (Audition)，专业软件工具，绿色安全可靠。",content:`Au (Audition) 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/autocad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"AutoCAD 2027 下载链接",baiduUrl:"https://pan.baidu.com/s/18LJQU2G9owADlqbbbS5NcQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/5c7e102e70f3",thunderUrl:"https://pan.xunlei.com/s/VOraP8FNqMVi_pBNGsNvOWOgA1?pwd=jbga"},{title:"AutoCAD 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1Hb9kXXxDnaKP-ffsavd9Uw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/196159ae3770",thunderUrl:"https://pan.xunlei.com/s/VOuGN31k9oK1AUes_KPx3ZJZA1?pwd=b435"},{title:"AutoCAD 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"15",title:"AutoCAD精简版",slug:"autocad",description:"AutoCAD精简版，专业软件工具，绿色安全可靠。",content:`AutoCAD精简版 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/autocad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"AutoCAD机械版 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD机械版 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"17",title:"AutoCAD.Electrical电气版",slug:"autocad",description:"AutoCAD电气版，专业软件工具，绿色安全可靠。",content:`AutoCAD电气版 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/autocad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"AutoCAD.Electrical电气版 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1o5dlSM_PBF-IwmOkL_bkiw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/88b136d86d5e",thunderUrl:"https://pan.xunlei.com/s/VOt3B0s206wwYdBDNZ5JvO7vA1?pwd=rfu3"},{title:"AutoCAD电气版 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"AutoCAD电气版 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"18",title:"Android Studio",slug:"android-studio",description:"Android Studio，专业软件工具，绿色安全可靠。",content:`Android Studio 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/anaconda",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Anaconda3.2025 下载链接",baiduUrl:"https://pan.baidu.com/s/1UV6BxL0InGtqz95nKNUcHQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/9a144ac65897",thunderUrl:"https://pan.xunlei.com/s/VOx4WBpgUfNJNiv8eJf3QCaGA1?pwd=5pig"},{title:"Anaconda 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Anaconda 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"20",title:"AxMath",slug:"axmath",description:"AxMath，专业软件工具，绿色安全可靠。",content:`AxMath 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/blender",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Blender 5.11 下载链接",baiduUrl:"https://pan.baidu.com/s/12L_hmCpXJEZpwK_6DQxh-g?pwd=1314",quarkUrl:"https://pan.quark.cn/s/692853fa7e21",thunderUrl:"https://pan.xunlei.com/s/VOrHCYEjR2dx7G62s8JJiUCQA1?pwd=fk6a"},{title:"Blender 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Blender 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"25",title:"博途(TIA Portal)",slug:"botu",description:"博途 ，专业软件工具，绿色安全可靠。",content:`博途  是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/botu",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"博途 TIA Portal V21 下载链接",baiduUrl:"https://pan.baidu.com/s/1Uu7DZqwV_Hn_c7op59d--A?pwd=1314",quarkUrl:"https://pan.quark.cn/s/1827004d95e3",thunderUrl:"https://pan.xunlei.com/s/VOrCnfXAXa4i9wv-zl6C__wEA1?pwd=uwav"},{title:"博途 TIA Portal V20 下载链接",baiduUrl:"https://pan.baidu.com/s/13f3haj-mDsRZc9-t-WNPpA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/848c2a042491",thunderUrl:"https://pan.xunlei.com/s/VOvXzSoKBUIYRgHgsJIvv6eFA1?pwd=hxgm"},{title:"博途 TIA Portal V19 下载链接",baiduUrl:"https://pan.baidu.com/s/1HsZFAccQzVDEMrIg_e0a0A?pwd=1314",quarkUrl:"https://pan.quark.cn/s/9a1759aeb49a",thunderUrl:"https://pan.xunlei.com/s/VOvXzVLNiRZ68wijF88cMEq-A1?pwd=ei5j"},{title:"博途 TIA Portal V18 下载链接",baiduUrl:"https://pan.baidu.com/s/1h7ZYr_FQClZwW2JnTjy6EA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/754cc376723d",thunderUrl:"https://pan.xunlei.com/s/VOvXzY3U4V8zsDsHQxQGvbluA1?pwd=fr94"},{title:"博途 TIA Portal V17 下载链接",baiduUrl:"https://pan.baidu.com/s/1eXQs2h4LAm_NAFl4r_NWEQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/f7dee5eb842a",thunderUrl:"https://pan.xunlei.com/s/VOvXzaYkX-kZtc4YzufuU7SCA1?pwd=tjsq"},{title:"博途 TIA Portal V16 下载链接",baiduUrl:"https://pan.baidu.com/s/1yOnf6D0zSL4noNNxKmuuSA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/05c4680623d4",thunderUrl:"https://pan.xunlei.com/s/VOvXzdGc2N3e8YumtYS_N7NtA1?pwd=ud2r"},{title:"博途 TIA Portal V15.1 下载链接",baiduUrl:"https://pan.baidu.com/s/1BVNojx1UFBlLh_EYH_KxdQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/6b28dfe23f4c",thunderUrl:"https://pan.xunlei.com/s/VOvXzkwMnEUegoZsKe-EhNVTA1?pwd=ks9h"},{title:"博途 TIA Portal V15 下载链接",baiduUrl:"https://pan.baidu.com/s/1iZJvIvWUOo0eE_-IMUwBng?pwd=1314",quarkUrl:"https://pan.quark.cn/s/8d7c6668643a",thunderUrl:"https://pan.xunlei.com/s/VOvXzfhnBNvkj1UfaW7Tw1TlA1?pwd=ux94"},{title:"博途 TIA Portal V13 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"博途 TIA Portal V12 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"26",title:"Br (Bridge)",slug:"bridge",description:"Br (Bridge)，专业软件工具，绿色安全可靠。",content:`Br (Bridge) 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/cinema-4d",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"C4D (Cinema 4D) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1CITcwPvyWWqGIsNNetZHbA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/d2122320bb8f",thunderUrl:"https://pan.xunlei.com/s/VOuGAcoIOl1DiImoWhEgudaIA1?pwd=2262"},{title:"C4D (Cinema 4D) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"C4D (Cinema 4D) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"29",title:"CAD精简版",slug:"cad",description:"CAD精简版，专业软件工具，绿色安全可靠。",content:`CAD精简版 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/creo",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Creo 13.4.0 下载链接",baiduUrl:"https://pan.baidu.com/s/1aiZjS6eYC0vp3QQz1dDeIQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/b258ad6205f2",thunderUrl:"https://pan.xunlei.com/s/VOurCJrhCJZhgRoWvUO-eCxfA1?pwd=j72k"},{title:"Creo 12.4.2 下载链接",baiduUrl:"https://pan.baidu.com/s/1vdyYlvd6CHWkTHoTTaQb8w?pwd=1314",quarkUrl:"https://pan.quark.cn/s/3de09808705e",thunderUrl:"https://pan.xunlei.com/s/VOuGAWzVCd7PH-Ytm4qyNUcXA1?pwd=kp26"},{title:"Creo 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Creo 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"31",title:"CAD机械版",slug:"cad",description:"CAD机械版，专业软件工具，绿色安全可靠。",content:`CAD机械版 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/sketchup",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"草图大师 (Sketchup) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1mw7sacBbO1AwRqgmf51xrw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/97d4de0d4f3f",thunderUrl:"https://pan.xunlei.com/s/VOuGCoiYROXy5EjlN-0cZ8EyA1?pwd=wve5"},{title:"草图大师 (Sketchup) 2025 下载链接",baiduUrl:"https://pan.baidu.com/s/1MKBtzOQJGnQgykvQhP6p2w?pwd=1314",quarkUrl:"https://pan.quark.cn/s/c73d42825d7a",thunderUrl:"https://pan.xunlei.com/s/VOugZUzyd1c5GugdAVbbVz6uA1?pwd=7y9c"},{title:"草图大师 (Sketchup) 2024 下载链接",baiduUrl:"https://pan.baidu.com/s/1U94VJI4vGLLNhAz9CYc6jg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/bd6fc342f73d",thunderUrl:"https://pan.xunlei.com/s/VOugZSCea9YX6zJLciA_y6fDA1?pwd=brni"},{title:"草图大师 (Sketchup) 2023 下载链接",baiduUrl:"https://pan.baidu.com/s/1tRgkIeyWBOceF72RKrWWFw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/638b98a1939c",thunderUrl:"https://pan.xunlei.com/s/VOugZPe_83f2U-mhgRBx06nLA1?pwd=e9vg"},{title:"草图大师 (Sketchup) 2022 下载链接",baiduUrl:"https://pan.baidu.com/s/1CYZ4sx0b6oWekoWZTcPnWA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/3e4b15984ca1",thunderUrl:"https://pan.xunlei.com/s/VOugZMZaeNCig65vt4pB2pD2A1?pwd=tq9z"},{title:"草图大师 (Sketchup) 2021 下载链接",baiduUrl:"https://pan.baidu.com/s/1QSFHTUjGtkqjMvkV28j63g?pwd=1314",quarkUrl:"https://pan.quark.cn/s/0310baff2e94",thunderUrl:"https://pan.xunlei.com/s/VOugZII1zHl2SHGtTBWzpmsYA1?pwd=pged"},{title:"草图大师 (Sketchup) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"草图大师 (Sketchup) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"草图大师 (Sketchup) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"草图大师 (Sketchup) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"38",title:"Cadence SPB",slug:"cadence-spb",description:"Cadence SPB，专业软件工具，绿色安全可靠。",content:`Cadence SPB 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/cadence-spb",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Cadence SPB 25.1 下载链接",baiduUrl:"https://pan.baidu.com/s/1-UZc1MxWsnMAvjC0apieNQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/f26b0a54ac7a",thunderUrl:"https://pan.xunlei.com/s/VOrWQrWmqOsC21kle5S3civoA1?pwd=i5tx"},{title:"Cadence SPB 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Cadence SPB 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"39",title:"COMSOL",slug:"comsol",description:"COMSOL，专业软件工具，绿色安全可靠。",content:`COMSOL 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/comsol",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"COMSOL 6.4 下载链接",baiduUrl:"https://pan.baidu.com/s/1pnpjhRm8qRE9w5Qj-8fGaA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/d12df4158e8a",thunderUrl:""},{title:"COMSOL 6.3 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 6.2 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"COMSOL 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"40",title:"Capture One",slug:"capture-one",description:"Capture One，专业软件工具，绿色安全可靠。",content:`Capture One 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/catia",fileSize:"3.6 GB",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Catia P3 V5-6R2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Catia P3 V5-6R2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Catia P3 V5-6R2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Catia P3 V5-6R2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Catia P3 V5-6R2022 下载链接",baiduUrl:"https://pan.baidu.com/s/1PDphEOvgfuTQakhSKtKyIg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/cad2b7ddd58b",thunderUrl:"https://pan.xunlei.com/s/VOtvmQtV5Egmb2dyEAkb1JPYA1?pwd=eh3e"},{title:"CATIA 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CATIA 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CATIA 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CATIA 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"CATIA 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"43",title:"CAJViewer",slug:"cajviewer",description:"CAJViewer，专业软件工具，绿色安全可靠。",content:`CAJViewer 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/endnote",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"EndNote 2025.3 下载链接",baiduUrl:"https://pan.baidu.com/s/1jW50Y1lVJig-eZs7yK0rRQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/fc26a12a089d",thunderUrl:"https://pan.xunlei.com/s/VOuGMM-SnMTCOjMDZ5qhcycsA1?pwd=2dwa"},{title:"EndNote 21.5 下载链接",baiduUrl:"https://pan.baidu.com/s/12Zn6bRqBZakOpYo2tIxV-Q?pwd=1314",quarkUrl:"https://pan.quark.cn/s/bfb1240a5e47",thunderUrl:"https://pan.xunlei.com/s/VOuWbxPQG4iiejc-TbsU8SOMA1?pwd=s4zi"},{title:"EndNote 21 下载链接 ",baiduUrl:"https://pan.baidu.com/s/1x_E4-_JGlqoHqch4VRjU2A?pwd=1314",quarkUrl:"https://pan.quark.cn/s/dbc09ad78721",thunderUrl:"https://pan.xunlei.com/s/VOuWc2hWFxc1cDGCs3u2rMg0A1?pwd=svaj"},{title:"EndNote X9 下载链接 ",baiduUrl:"https://pan.baidu.com/s/18ILn6Niv83USMpY6vKF0zA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/119e47bb390f",thunderUrl:"https://pan.xunlei.com/s/VOsZRKgOE13bpnGrFBCyEB3pA1?pwd=gv3k"},{title:"EndNote 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EndNote X9 下载链接 ",baiduUrl:"https://pan.baidu.com/s/18ILn6Niv83USMpY6vKF0zA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/119e47bb390f",thunderUrl:"https://pan.xunlei.com/s/VOsZRKgOE13bpnGrFBCyEB3pA1?pwd=gv3k"},{title:"EndNote 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EndNote 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EndNote 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"EndNote 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"55",title:"ENVI",slug:"envi",description:"ENVI，专业软件工具，绿色安全可靠。",content:`ENVI 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/envi",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"ENVI 5.6 下载链接",baiduUrl:"https://pan.baidu.com/s/1yZ2YUEStcsSju00OoRyaxw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/65c5d169a19d",thunderUrl:"https://pan.xunlei.com/s/VOtlOe9lCNHZpLo57UG4qwn7A1?pwd=k2i8"},{title:"ENVI 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ENVI 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"56",title:"Everything",slug:"everything",description:"Everything，专业软件工具，绿色安全可靠。",content:`Everything 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/gx-works",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"GX Works3 V1.117X 下载链接",baiduUrl:"https://pan.baidu.com/s/19-ULQF_CjnAO9yer0FluOQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/0a87169523c2",thunderUrl:"https://pan.xunlei.com/s/VOsU-9E3hsGne907froJE9IMA1?pwd=u68x"},{title:"GX Works 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"GX Works 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"62",title:"Gaussian",slug:"gaussian",description:"Gaussian，专业软件工具，绿色安全可靠。",content:`Gaussian 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/hyperworks",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"HyperWorks 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1IcFSB89E-rQ2_8tbBtdsVw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/9e00a2688a6f",thunderUrl:"https://pan.xunlei.com/s/VOx4gGgjlWp6UBk4iFgoH3y2A1?pwd=mgaz"},{title:"HyperWorks 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"HyperWorks 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"67",title:"HBuilderX",slug:"hbuilderx",description:"HBuilderX，专业软件工具，绿色安全可靠。",content:`HBuilderX 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"media",categoryName:"图像媒体",coverImage:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/keyshot",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Keyshot 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1EOxDTe8TDI8RPhy606vhmA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/d8f1da290988",thunderUrl:"https://pan.xunlei.com/s/VOuGI6lhkeSl1ClG4M3BXfnTA1?pwd=dusk"},{title:"Keyshot 2025 下载链接",baiduUrl:"https://pan.baidu.com/s/1dd4KIG0s1Fvei4QxrEsnpg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/61cd55069c56",thunderUrl:"https://pan.xunlei.com/s/VOv9Gd689DsL1mjMOOoFQCRUA1?pwd=d322"},{title:"Keyshot 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Keyshot 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"75",title:"KingView",slug:"kingview",description:"KingView，专业软件工具，绿色安全可靠。",content:`KingView 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/latex",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Latex 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1V3Y0RERWP9-r6h_1wT9e6w?pwd=1314",quarkUrl:"https://pan.quark.cn/s/248c785feca4",thunderUrl:"https://pan.xunlei.com/s/VOr4OejLhwZtl6xJTdyxH0JxA1?pwd=3a35"},{title:"Latex 2025 下载链接",baiduUrl:"https://pan.baidu.com/s/1k-1loHrLrB2eckBDeMfMQA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/7c854a2d11ee",thunderUrl:"https://pan.xunlei.com/s/VOrOSv85rOkwxvfLR1GQZSaqA1?pwd=wa4z"},{title:"Latex 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Latex 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"79",title:"Lingo",slug:"lingo",description:"Lingo，专业软件工具，绿色安全可靠。",content:`Lingo 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/maya",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Maya 2027 下载链接",baiduUrl:"https://pan.baidu.com/s/1F8jeXXq6ZTFmTC0d5JLTjg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/042b92422629",thunderUrl:"https://pan.xunlei.com/s/VOsPmhOUgZrTSGF-N47KIuxsA1?pwd=v63w"},{title:"Maya 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maya 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"82",title:"Mathematica",slug:"mathematica",description:"Mathematica，专业软件工具，绿色安全可靠。",content:`Mathematica 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/matlab",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Matlab 2026a 下载链接",baiduUrl:"https://pan.baidu.com/s/15A8RxgCePTBaghNbcIXa3Q?pwd=1314",quarkUrl:"https://pan.quark.cn/s/6f285a368b4e",thunderUrl:"https://pan.xunlei.com/s/VOsnf31fJ8pYUGU7_wp_ODO3A1?pwd=ds7r"},{title:"Matlab 2025b 下载链接",baiduUrl:"https://pan.baidu.com/s/1bU8Ai8eROQtnUmtQHtP-SA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/b35d6a0ed0c5",thunderUrl:"https://pan.xunlei.com/s/VOuGC_tMdI8PoMA2HLejPCMGA1?pwd=9hf9"},{title:"Matlab 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Matlab 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"84",title:"Maple",slug:"maple",description:"Maple，专业软件工具，绿色安全可靠。",content:`Maple 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/maple",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Maple 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1nJuPuB37RQ83HXxr2Ma5Rg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/1537aa694516",thunderUrl:"https://pan.xunlei.com/s/VOtb6hhBY0eJd2iAyQyV5ZSOA1?pwd=7zxv"},{title:"Maple 2025 下载链接",baiduUrl:"https://pan.baidu.com/s/17bBfgAyq4xdgtxcP_QWjIw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/69c5424eb7ee",thunderUrl:"https://pan.xunlei.com/s/VOtilbODDHFb8heKuznbf648A1?pwd=hqta"},{title:"Maple 2024 下载链接",baiduUrl:"https://pan.baidu.com/s/1kSgpe8Zfg-OFe8vVQ0ZG_w?pwd=1314",quarkUrl:"https://pan.quark.cn/s/ae033d3a2d70",thunderUrl:"https://pan.xunlei.com/s/VOuFVXaPM8AjEo4jEXpRpX9oA1?pwd=utmf"},{title:"Maple 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Maple 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"85",title:"Minitab",slug:"minitab",description:"Minitab，专业软件工具，绿色安全可靠。",content:`Minitab 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mastercam",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Mastercam 2027 下载链接",baiduUrl:" https://pan.baidu.com/s/1seMXi6Ylwaj8NYgFx-Wx2w?pwd=1314",quarkUrl:"https://pan.quark.cn/s/8530d11005ec",thunderUrl:"https://pan.xunlei.com/s/VOx4ePkCyiA2nsiGZ1e2Im3rA1?pwd=jm62"},{title:"Mastercam 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1d8o-AkYN5LIjYzyfyZ5Bwg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/4850d18ca176",thunderUrl:"https://pan.xunlei.com/s/VOwGDYEizbyLk7kv7Jp3MTwZA1?pwd=ykbv"},{title:"Mastercam 2025 下载链接",baiduUrl:"https://pan.baidu.com/s/1mr7e2QRBH3dFhZmOfTnuTA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/6dda7b3fdbbc",thunderUrl:"https://pan.xunlei.com/s/VOx4eYczWzr4QZm7wgzOv4HlA1?pwd=dhdh"},{title:"Mastercam 2024 下载链接",baiduUrl:"https://pan.baidu.com/s/15vk43ZVT0D0df1nq4cOU6A?pwd=1314",quarkUrl:"https://pan.quark.cn/s/083f0e3e5e01",thunderUrl:"https://pan.xunlei.com/s/VOx4ebSrN9pDJiCrAZP1DTChA1?pwd=vfit"},{title:"Mastercam 2023 下载链接",baiduUrl:"https://pan.baidu.com/s/158LMDRKs_-PWnvThwbte2A?pwd=1314",quarkUrl:"https://pan.quark.cn/s/dcc5e2ed182b",thunderUrl:"https://pan.xunlei.com/s/VOx4eemn10r28lGwlmy-T4EDA1?pwd=68ij"},{title:"Mastercam 2022 下载链接",baiduUrl:"https://pan.baidu.com/s/1eUqxaED02E6-afE8OYOIrg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/5275ddb4bf8c",thunderUrl:"https://pan.xunlei.com/s/VOx4ei-VbS9ixYBlTSEDh456A1?pwd=ws5p"},{title:"Mastercam 2021 下载链接",baiduUrl:"https://pan.baidu.com/s/1PuJlrBpzX6URvbahKWCK5g?pwd=1314",quarkUrl:"https://pan.quark.cn/s/6886f83b7564",thunderUrl:"https://pan.xunlei.com/s/VOx4ekovzPaBIHTIYRQtruFcA1?pwd=4622"},{title:"Mastercam 2020 下载链接",baiduUrl:"https://pan.baidu.com/s/1eFoKxOjREiHj0fQRlk75DQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/9e9d55f0f2f1",thunderUrl:"https://pan.xunlei.com/s/VOx4enXU91a1B2BLo54H4wzGA1?pwd=rh7i"},{title:"Mastercam 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Mastercam 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"89",title:"Multisim",slug:"multisim",description:"Multisim，专业软件工具，绿色安全可靠。",content:`Multisim 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/multisim",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Multisim 14.3 下载链接",baiduUrl:"https://pan.baidu.com/s/1aJOoTGij_dIwY2Y73wg4yA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/279788671d4f",thunderUrl:"https://pan.xunlei.com/s/VOuGImkpQ-qcay_3CFSgz0rTA1?pwd=jp7f"},{title:"Multisim 14.0 下载链接",baiduUrl:"https://pan.baidu.com/s/1A9L-dkncn_s5rApc-YAiRA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/183743287cc2",thunderUrl:"https://pan.xunlei.com/s/VOuWbREtUIY0-YxYLOlSjnuuA1?pwd=8r2t"},{title:"Multisim 13.0 下载链接",baiduUrl:"https://pan.baidu.com/s/1v1_9PBcxWVj-T3HdiZ0znw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/dab724d42614",thunderUrl:"https://pan.xunlei.com/s/VOuWbOAVzAsN5rw8kQOVkhRjA1?pwd=6pa8"},{title:"Multisim 12.0 下载链接",baiduUrl:"https://pan.baidu.com/s/1CD8Az_Q7Hz3WsqzP-bXZtA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/e4750fbc6644",thunderUrl:"https://pan.xunlei.com/s/VOuWbLWEkeSl1ClG4M3IUmJdA1?pwd=zy8h"},{title:"Multisim 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Multisim 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"90",title:"Midas Civil",slug:"midas-civil",description:"Midas Civil，专业软件工具，绿色安全可靠。",content:`Midas Civil 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mdi-jade",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"MDI Jade 9.0 下载链接",baiduUrl:"https://pan.baidu.com/s/1zAUSe9Lpq84p888nx4a-xw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/ea291b10f444",thunderUrl:"https://pan.xunlei.com/s/VOuGCJCJMwroW9HmY21_gc3NA1?pwd=nndf"},{title:"MDI Jade 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MDI Jade 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"96",title:"Mimics",slug:"mimics",description:"Mimics，专业软件工具，绿色安全可靠。",content:`Mimics 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/navicat-premium",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Navicat Premium 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Navicat Premium 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"98",title:"UG NX",slug:"UG nx",description:"UG NX，专业软件工具，绿色安全可靠。",content:`UG NX 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/nx",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"UG NX 2606 下载链接",baiduUrl:"https://pan.baidu.com/s/11bLu1QrDaVl0pu1QVFc3RA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/61b7e1c01f27",thunderUrl:"https://pan.xunlei.com/s/VOvjscZvXWTi4vwj7PtzwoPBA1?pwd=sknj"},{title:"UG NX 2512 下载链接",baiduUrl:"hhttps://pan.baidu.com/s/1rnn8IJNBLsbBpMuPT3x2YA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/d4ce85321424",thunderUrl:"https://pan.xunlei.com/s/VOu-Um5PWY-mUxfQNR2jIBgsA1?pwd=5xkd"},{title:"UG NX 12.0 下载链接",baiduUrl:"https://pan.baidu.com/s/1dy2KkptTZZQrKfkhXDxStw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/236bfb335546",thunderUrl:"https://pan.xunlei.com/s/VOu-Um5PWY-mUxfQNR2jIBgsA1?pwd=5xkd"},{title:"UG NX 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NX 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NX 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NX 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"NX 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"99",title:"NoteExpress",slug:"noteexpress",description:"NoteExpress，专业软件工具，绿色安全可靠。",content:`NoteExpress 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/office",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Office 2027 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2024 下载链接",baiduUrl:"https://pan.baidu.com/s/1nEYQGZK6d7TumSsbpbMwiQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/e6bda8332155",thunderUrl:"https://pan.xunlei.com/s/VOrpcG9No2xhouAFYq7_D9txA1?pwd=i953"},{title:"Office 2021 下载链接",baiduUrl:"https://pan.baidu.com/s/1nEYQGZK6d7TumSsbpbMwiQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/e6bda8332155",thunderUrl:"https://pan.xunlei.com/s/VOrpcG9No2xhouAFYq7_D9txA1?pwd=i953"},{title:"Office 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Office 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"101",title:"Origin",slug:"origin",description:"Origin，专业软件工具，绿色安全可靠。",content:`Origin 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/origin",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Origin 2025b 下载链接",baiduUrl:"https://pan.baidu.com/s/1Vn7zgUcKEjavfHyr0BPvxg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/c4844e5fffca",thunderUrl:"https://pan.xunlei.com/s/VOuGKjQqNh4ipyVoev9gDHYzA1?pwd=9asd"},{title:"Origin 2024 下载链接",baiduUrl:"https://pan.baidu.com/s/1FSGU04GtHvYH8vc_75RfiA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/7e83b1d56af1",thunderUrl:"https://pan.xunlei.com/s/VOuGKpbGdI8PoMA2HLejS9xQA1?pwd=ducu"},{title:"Origin 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Origin 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"102",title:"Visio",slug:"visio",description:"Visio，专业软件工具，绿色安全可靠。",content:`Visio 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/visio",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Visio 2027 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2024 下载链接",baiduUrl:"https://pan.baidu.com/s/1Ho_SpLHPX7f_Ajo0TIvgOg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/fe26587cd925",thunderUrl:"https://pan.xunlei.com/s/VOtg8aN850oqBXwt1WUGxpiwA1?pwd=95ur"},{title:"Visio 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2016 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visio 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"103",title:"Project",slug:"project",description:"Project，专业软件工具，绿色安全可靠。",content:`Project 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/python",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Python 3.14 下载链接",baiduUrl:"https://pan.baidu.com/s/1bJ8lIIjeltj374vlStZpKA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/1ca0a3b4cc59",thunderUrl:"https://pan.xunlei.com/s/VOvD54_iqJ9P_ihBdGrnaEGdA1?pwd=xdc7"},{title:"Python 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Python 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"112",title:"Proteus",slug:"proteus",description:"Proteus，专业软件工具，绿色安全可靠。",content:`Proteus 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/proteus",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Proteus 9.0 下载链接",baiduUrl:"https://pan.baidu.com/s/1SHdeccEAp3PHIJtwYi3K-Q?pwd=1314",quarkUrl:"https://pan.quark.cn/s/6c881bbe4694",thunderUrl:"https://pan.xunlei.com/s/VOuGFGwPZ1FbpyYMsumB42I0A1?pwd=ctfj"},{title:"Proteus 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Proteus 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"113",title:"PSIM",slug:"psim",description:"PSIM，专业软件工具，绿色安全可靠。",content:`PSIM 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/revit",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Revit 2027 下载链接",baiduUrl:"https://pan.baidu.com/s/1ib55HHatqoQDy_RrHtxw_A?pwd=1314",quarkUrl:"https://pan.quark.cn/s/4bd77dbc9eb8",thunderUrl:"https://pan.xunlei.com/s/VOtS5GheBpITcUcCE9ju5g4rA1?pwd=xftj"},{title:"Revit 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Revit 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"116",title:"Rhinoceros",slug:"rhinoceros",description:"Rhinoceros，专业软件工具，绿色安全可靠。",content:`Rhinoceros 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/rhinoceros",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Rhinoceros 8.31 下载链接",baiduUrl:"https://pan.baidu.com/s/1N08wfVH4fyFPUUuvVh3QRQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/aa4f0ff879dc",thunderUrl:"https://pan.xunlei.com/s/VOuSJVWAIekUebNfKYP3C2ZrA1?pwd=frz3"},{title:"Rhinoceros 8.19 下载链接",baiduUrl:"https://pan.baidu.com/s/1UR1rPTwJHTT-OB9NWZIzCA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/c68a342448c8",thunderUrl:"https://pan.xunlei.com/s/VOuGMpsftBt3suaw-flaY5vkA1?pwd=bw3g"},{title:"Rhinoceros 8.6 下载链接",baiduUrl:"https://pan.baidu.com/s/1pLfGrs7y4sA1H5VnxEubyA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/dd16d2842c06",thunderUrl:"https://pan.xunlei.com/s/VOuSJj-SkeSl1ClG4M3GYN0rA1?pwd=252t"},{title:"Rhinoceros 7.33 下载链接",baiduUrl:"https://pan.baidu.com/s/1dp_vkEa7PBzdY6MneSGiZg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/c06e826e1bda",thunderUrl:"https://pan.xunlei.com/s/VOuSKJqO2dPU81cuK__2cSaDA1?pwd=a56t"},{title:"Rhinoceros 6.35 下载链接",baiduUrl:"https://pan.baidu.com/s/1GEcuKr3mTid7nQ8Jf5Fv1A?pwd=1314",quarkUrl:"https://pan.quark.cn/s/d24c3518ee7f",thunderUrl:"https://pan.xunlei.com/s/VOuSKPNJRkl21JldrNxO97CkA1?pwd=mmtb"},{title:"Rhinoceros 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Rhinoceros 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"117",title:"RStudio",slug:"rstudio",description:"RStudio，专业软件工具，绿色安全可靠。",content:`RStudio 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/rstudio",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"RStudio 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1HkkfqZK1w682_m8fKUKaGw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/edd581f296fc",thunderUrl:"https://pan.xunlei.com/s/VOrkmMMKOYiY56eikUqJ6TRsA1?pwd=gukh"},{title:"RStudio 2025 下载链接",baiduUrl:"https://pan.baidu.com/s/1HkkfqZK1w682_m8fKUKaGw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/edd581f296fc",thunderUrl:"https://pan.xunlei.com/s/VOrkmMMKOYiY56eikUqJ6TRsA1?pwd=gukh"},{title:"RStudio 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RStudio 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"118",title:"RobotStudio",slug:"robotstudio",description:"RobotStudio，专业软件工具，绿色安全可靠。",content:`RobotStudio 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/robotstudio",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"RobotStudio 6.08 下载链接",baiduUrl:"https://pan.baidu.com/s/1QHQoLMQIB43kI5KtjZ-GrA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/4c26dc189df9",thunderUrl:"https://pan.xunlei.com/s/VOvjp62520JnIeA8Yaxt8_JRA1?pwd=93fz"},{title:"RobotStudio 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"RobotStudio 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"119",title:"R语言",slug:"software-1224581",description:"R语言，专业软件工具，绿色安全可靠。",content:`R语言 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/software-1224581",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"R语言 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"R语言 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"120",title:"3dsMax(3dmax)",slug:"3dsmax",description:"3ds Max，专业软件工具，绿色安全可靠。",content:`3ds Max 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/3ds-max",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"3ds Max 2027 下载链接",baiduUrl:"https://pan.baidu.com/s/1ZzQ7rgGU9bYXmm6jENFVQw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/bb92bef05a8a",thunderUrl:"https://pan.xunlei.com/s/VOuGB6Mxp65N8sRF30EJDFoNA1?pwd=9ku2"},{title:"3ds Max 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"3ds Max 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"121",title:"SketchUp",slug:"sketchup",description:"SketchUp，专业软件工具，绿色安全可靠。",content:`SketchUp 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/step7",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"STEP7 V5.7 下载链接",baiduUrl:"https://pan.baidu.com/s/1h5ozmlrMH79185EL8Ts-vw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/97844fe3960d",thunderUrl:"https://pan.xunlei.com/s/VOx3zjOOXjrOB9pVgYk_6fiaA1?pwd=ch97"},{title:"STEP7 V5.6 下载链接",baiduUrl:"https://pan.baidu.com/s/1iXdi1aY4jMlnp0r1wCeP6A?pwd=1314",quarkUrl:"https://pan.quark.cn/s/c89d9fe0c738",thunderUrl:"https://pan.xunlei.com/s/VOx3zovormhEquvNI_1lKsvcA1?pwd=p6ik"},{title:"STEP7 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"STEP7 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"126",title:"SW (SolidWorks)",slug:"solidworks",description:"SW (SolidWorks)，专业软件工具，绿色安全可靠。",content:`SW (SolidWorks) 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/typora",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Typora 1.13.2 下载链接",baiduUrl:"https://pan.baidu.com/s/1ZwCsUAnHV7cjRAcEAF3MdQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/72b08a78d197",thunderUrl:"https://pan.xunlei.com/s/VOrQw7BKu_dptUycn2V-ad9QA1?pwd=6b6i"},{title:"Typora 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Typora 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"132",title:"天正系列 (Tianzheng Series)",slug:"tianzheng-series",description:"天正系列 (Tianzheng Series)，专业软件工具，绿色安全可靠。",content:`天正系列 (Tianzheng Series) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/tianzheng-series",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"天正系列 (Tianzheng Series) 2026 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"天正系列 (Tianzheng Series) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"133",title:"Siemens NX（西门子UG）",slug:"ug-nx",description:"UG NX，专业软件工具，绿色安全可靠。",content:`UG NX 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/ug-nx",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"UG NX 2606 下载链接",baiduUrl:"https://pan.baidu.com/s/11bLu1QrDaVl0pu1QVFc3RA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/61b7e1c01f27",thunderUrl:"https://pan.xunlei.com/s/VOvjscZvXWTi4vwj7PtzwoPBA1?pwd=sknj"},{title:"UG NX 2512 下载链接",baiduUrl:"hhttps://pan.baidu.com/s/1rnn8IJNBLsbBpMuPT3x2YA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/d4ce85321424",thunderUrl:"https://pan.xunlei.com/s/VOu-Um5PWY-mUxfQNR2jIBgsA1?pwd=5xkd"},{title:"UG NX 12.0 下载链接",baiduUrl:"https://pan.baidu.com/s/1dy2KkptTZZQrKfkhXDxStw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/236bfb335546",thunderUrl:"https://pan.xunlei.com/s/VOu-Um5PWY-mUxfQNR2jIBgsA1?pwd=5xkd"},{title:"UG NX 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"UG NX 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"134",title:"VMware",slug:"vmware",description:"VMware，专业软件工具，绿色安全可靠。",content:`VMware 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/visual-studio-code",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Visual Studio Code(1.120) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1o7sC7EKAsEo6qjtAZBHf_Q?pwd=1314",quarkUrl:"https://pan.quark.cn/s/cb6fcb2016c2",thunderUrl:"https://pan.xunlei.com/s/VOtIiLBAS22I4LXE3ih8YskmA1?pwd=ui7n"},{title:"Visual Studio Code 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Visual Studio Code 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"139",title:"万兴PDF (Wondershare PDF)",slug:"wondershare-pdf",description:"万兴PDF (Wondershare PDF)，专业软件工具，绿色安全可靠。",content:`万兴PDF (Wondershare PDF) 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/xmind",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"XMind 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1Mvl-Yl46TPyiTgBZaVnriA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/22b942e9d37d",thunderUrl:"https://pan.xunlei.com/s/VOt895NqqCUGfMq0QbZ4BYPCA1?pwd=s7q3"},{title:"XMind 2025 下载链接",baiduUrl:"https://pan.baidu.com/s/1_QgD4yfTOm4aPr4gyL4g2Q?pwd=1314",quarkUrl:"https://pan.quark.cn/s/259775033e3a",thunderUrl:"https://pan.xunlei.com/s/VOtDW5Zt5AW9uBaq2JfCJMZZA1?pwd=jyay"},{title:"XMind 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"XMind 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"148",title:"亿图图示 (Edraw Max)",slug:"edraw-max",description:"亿图图示 (Edraw Max)，专业软件工具，绿色安全可靠。",content:`亿图图示 (Edraw Max) 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"engineering",categoryName:"工程设计与仿真",coverImage:"https://images.unsplash.com/photo-1581092160562-40aa08c1f05b?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/zwcad",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"中望CAD (ZWCAD) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1GKJB9MQHSHtAdL5so1eEQA?pwd=1314",quarkUrl:"https://pan.quark.cn/s/46cb232cf147",thunderUrl:"https://pan.xunlei.com/s/VOuG9oNP-YwafG4fMsvsW-YJA1?pwd=ken4"},{title:"中望CAD (ZWCAD) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望CAD (ZWCAD) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"151",title:"中望3D (ZW3D)",slug:"zw3d",description:"中望3D (ZW3D)，专业软件工具，绿色安全可靠。",content:`中望3D (ZW3D) 是一款专业的软件工具。

## 功能特点

- 专业可靠
- 绿色安全
- 高效便捷

## 使用说明

1. 下载安装
2. 根据需求配置
3. 开始使用`,version:"最新版",category:"other",categoryName:"其他软件",coverImage:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/zw3d",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"中望3D (ZW3D) 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/17K4dWbPCm5YGdoKYOmLX7g?pwd=1314",quarkUrl:"https://pan.quark.cn/s/3d72cab93d5f",thunderUrl:"https://pan.xunlei.com/s/VOuG8yfGlRa4iohSY_C4yg7vA1?pwd=ngw3"},{title:"中望3D (ZW3D) 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"中望3D (ZW3D) 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"152",title:"中望机械CAD (ZWCAD Mechanical)",slug:"zwcad-mechanical",description:"中望机械CAD (ZWCAD Mechanical)，专业软件工具，绿色安全可靠。",content:`中望机械CAD (ZWCAD Mechanical) 是一款专业的软件工具。

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
3. 开始使用`,version:"最新版",category:"office",categoryName:"办公与文档",coverImage:"https://images.unsplash.com/photo-1497360289473-9d0b55d59e7f?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/zotero",fileSize:"待定",platform:"Windows",createdAt:"2026-06-02",updatedAt:"2026-06-02",downloadLinks:[{title:"Zotero 9.05 下载链接",baiduUrl:"https://pan.baidu.com/s/1Z9H9NUiWG_xPKiNv2mit8g?pwd=1314",quarkUrl:"https://pan.quark.cn/s/1038ecb1a683",thunderUrl:"https://pan.xunlei.com/s/VOx4ZD3nZ_2z9zG4ZrwCgxOCA1?pwd=fh6e"},{title:"Zotero 9.03 下载链接",baiduUrl:"https://pan.baidu.com/s/1tJi8DwN5A9Q4NSEcmHYNnQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/c10070c8cc82",thunderUrl:"https://pan.xunlei.com/s/VOsyu5_urxkg0BKlbzdBU9HyA1?pwd=nxmv"},{title:"Zotero 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Zotero 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"156",title:"ZBrush",slug:"zbrush",description:"ZBrush，专业软件工具，绿色安全可靠。",content:`ZBrush 是一款专业的软件工具。

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
3. 编写并运行代码`,version:"6.3",category:"dev-tools",categoryName:"编程开发",coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/dev-cpp",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"Dev-C++ 6.3 下载链接",baiduUrl:"https://pan.baidu.com/s/15FxZcfgPkNUX_wv_BzX2yg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/76f21f4ae79c",thunderUrl:"https://pan.xunlei.com/s/VOtNXJ0WYIJsvBE2QXMoRA_ZA1?pwd=hnjn"},{title:"Dev-C++ 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Dev-C++ 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"159",title:"CLion",slug:"clion",description:"CLion，JetBrains 出品的智能 C/C++ 开发工具，绿色安全可靠。",content:`CLion 是 JetBrains 出品的智能 C/C++ 开发工具。

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
3. 进行谱图处理与分析`,version:"15",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mestrenova",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"MestReNova 15 下载链接",baiduUrl:"https://pan.baidu.com/s/1ZCYlhXgbqPxQFNTdZxhppw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/9f79dc02feff",thunderUrl:"https://pan.xunlei.com/s/VOsaZr9PE-ve8_8_Jf9MWY2dA1?pwd=8v58"},{title:"MestReNova 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"MestReNova 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"161",title:"ImageJ",slug:"ImageJ",description:"Fiji/Image J，专业的图像处理与分析工具，绿色安全可靠。",content:`Fiji（ImageJ）是一款专业的图像处理与分析工具。

## 功能特点

- 强大的图像处理能力
- 丰富的插件生态
- 开源免费

## 使用说明

1. 下载安装
2. 导入图片进行分析
3. 使用插件扩展功能`,version:"15",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mestrenova",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"ImageJ 2026 下载链接",baiduUrl:"https://pan.baidu.com/s/1ZCYlhXgbqPxQFNTdZxhppw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/9f79dc02feff",thunderUrl:"https://pan.xunlei.com/s/VOsaZr9PE-ve8_8_Jf9MWY2dA1?pwd=8v58"},{title:"ImageJ 2025 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ImageJ 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ImageJ 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ImageJ 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ImageJ 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ImageJ 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ImageJ 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ImageJ 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ImageJ 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"162",title:"ChemDraw",slug:"ChemDraw",description:"ChemDraw，专业的图像处理与分析工具，绿色安全可靠。",content:`ChemDraw 是一款专业的图像处理与分析工具。

## 功能特点

- 强大的图像处理能力
- 丰富的插件生态
- 开源免费

## 使用说明

1. 下载安装
2. 导入图片进行分析
3. 使用插件扩展功能`,version:"15",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mestrenova",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"ChemDraw 25.0 下载链接",baiduUrl:"https://pan.baidu.com/s/1_zwylKweluK5MdPpCRBitg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/86607c5db3e5",thunderUrl:"https://pan.xunlei.com/s/VOvXlwtknEUegoZsKe-Ec-kYA1?pwd=fsg4"},{title:"ChemDraw 23.1 下载链接",baiduUrl:"https://pan.baidu.com/s/1W_rzon0jfq3TjlOD77Ewbw?pwd=1314",quarkUrl:"https://pan.quark.cn/s/47194aa571d2",thunderUrl:"https://pan.xunlei.com/s/VOrfVLGoDTgHpv6lDBRLBamaA1?pwd=6u3f"},{title:"ChemDraw 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ChemDraw 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ChemDraw 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ChemDraw 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ChemDraw 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ChemDraw 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ChemDraw 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"ChemDraw 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"162",title:"Aspen Plus",slug:"Aspen Plus",description:"Aspen Plus 是一款大型通用流程模拟系统，主要应用于化工、石化、炼油等过程工业领域",content:`Aspen Plus 是一款大型通用流程模拟系统，主要应用于化工、石化、炼油等过程工业领域.

## 功能特点

- 强大的图像处理能力
- 丰富的插件生态
- 开源免费

## 使用说明

1. 下载安装
2. 导入图片进行分析
3. 使用插件扩展功能`,version:"15",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mestrenova",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"Aspen Plus V15 下载链接",baiduUrl:"https://pan.baidu.com/s/1ao9Ibt0_5UVUMH0Q42JyKg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/b4b86a737084",thunderUrl:"https://pan.xunlei.com/s/VOrM1GAEQDI9AtQSr72jiiJMA1?pwd=z2d8"},{title:"Aspen Plus V15 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Aspen Plus 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Aspen Plus 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Aspen Plus 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Aspen Plus 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Aspen Plus 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Aspen Plus 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Aspen Plus 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Aspen Plus 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"163",title:"Ansys Lumerical",slug:"Ansys Lumerical",description:"Ansys Lumerical 是一款大型通用流程模拟系统，主要应用于化工、石化、炼油等过程工业领域",content:`Ansys Lumerical 是一款大型通用流程模拟系统，主要应用于化工、石化、炼油等过程工业领域.

## 功能特点

- 强大的图像处理能力
- 丰富的插件生态
- 开源免费

## 使用说明

1. 下载安装
2. 导入图片进行分析
3. 使用插件扩展功能`,version:"15",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mestrenova",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"Ansys Lumerical 2024R2 下载链接",baiduUrl:"https://pan.baidu.com/s/1RiCKmzLCpTshOkPmFovs0A?pwd=1314",quarkUrl:"https://pan.quark.cn/s/39a136a8ce27",thunderUrl:"https://pan.xunlei.com/s/VOuoKKUZXC2BAVbaQTsvl7McA1?pwd=y9jd"},{title:"Ansys Lumerical V15 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys Lumerical 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys Lumerical 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys Lumerical 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys Lumerical 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys Lumerical 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys Lumerical 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys Lumerical 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"Ansys Lumerical 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"165",title:"SAI",slug:"SAI",description:"SAI是SYSTEMAX开发的轻量级专业绘图软件，体积小巧、运行流畅。具备手抖修正与矢量图层，是插画创作利器。",content:`SAI是SYSTEMAX开发的轻量级专业绘图软件，体积小巧、运行流畅。具备手抖修正与矢量图层，是插画创作利器。.

## 功能特点

- 强大的图像处理能力
- 丰富的插件生态
- 开源免费

## 使用说明

1. 下载安装
2. 导入图片进行分析
3. 使用插件扩展功能`,version:"15",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mestrenova",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"SAI.1.2.6 下载链接",baiduUrl:"https://pan.baidu.com/s/1y1GgcdMd58leiay8FtsVLg?pwd=1314",quarkUrl:"https://pan.quark.cn/s/f9df1f6b0a57",thunderUrl:"https://pan.xunlei.com/s/VOx3gNQ4MtCVrcgZDeznapRJA1?pwd=ikjq"},{title:"SAI2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SAI2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SAI2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SAI2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SAI2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SAI2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SAI2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SAI2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"SAI2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]},{id:"164",title:"BandiZip",slug:"BandiZip",description:"Bandizip是一款免费、高速、无广告的压缩解压工具。",content:`Bandizip是一款免费、高速、无广告的压缩解压工具。

## 功能特点

- 强大的图像处理能力
- 丰富的插件生态
- 开源免费

## 使用说明

1. 下载安装
2. 导入图片进行分析
3. 使用插件扩展功能`,version:"15",category:"data-analysis",categoryName:"数据分析",coverImage:"https://images.unsplash.com/photo-1551283201-27727aeec302?w=600&h=400&fit=crop",screenshots:[],downloadUrl:"https://example.com/download/mestrenova",fileSize:"待定",platform:"Windows",createdAt:"2026-06-03",updatedAt:"2026-06-03",downloadLinks:[{title:"BandiZip V7.40 下载链接",baiduUrl:"https://pan.baidu.com/s/15i3nIPSd-LerXkPEQ8WJIQ?pwd=1314",quarkUrl:"https://pan.quark.cn/s/70bcddfaf092",thunderUrl:"https://pan.xunlei.com/s/VOv-1MP-dC0WOO_4F_9zlLmbA1?pwd=mxmw"},{title:"BandiZip V15 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"BandiZip 2024 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"BandiZip 2023 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"BandiZip 2022 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"BandiZip 2021 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"BandiZip 2020 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"BandiZip 2019 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"BandiZip 2018 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""},{title:"BandiZip 2017 下载链接",baiduUrl:"",quarkUrl:"",thunderUrl:""}]}],Wh={阿:"A",啊:"A",爱:"A",安:"A",暗:"A",昂:"A",奥:"A",巴:"B",把:"B",白:"B",百:"B",班:"B",半:"B",包:"B",保:"B",北:"B",贝:"B",本:"B",比:"B",笔:"B",边:"B",变:"B",标:"B",表:"B",别:"B",兵:"B",冰:"B",并:"B",波:"B",博:"B",不:"B",布:"B",才:"C",财:"C",采:"C",彩:"C",草:"C",测:"C",层:"C",查:"C",产:"C",长:"C",常:"C",厂:"C",场:"C",超:"C",车:"C",成:"C",程:"C",吃:"C",出:"C",初:"C",除:"C",处:"C",传:"C",窗:"C",创:"C",春:"C",词:"C",此:"C",从:"C",村:"C",存:"C",达:"D",打:"D",大:"D",代:"D",带:"D",单:"D",但:"D",当:"D",党:"D",导:"D",到:"D",道:"D",得:"D",灯:"D",等:"D",低:"D",地:"D",第:"D",点:"D",电:"D",调:"D",定:"D",东:"D",冬:"D",动:"D",都:"D",读:"D",度:"D",短:"D",段:"D",对:"D",多:"D",儿:"E",而:"E",二:"E",发:"F",法:"F",翻:"F",反:"F",方:"F",房:"F",放:"F",飞:"F",非:"F",分:"F",风:"F",封:"F",否:"F",夫:"F",服:"F",福:"F",父:"F",复:"F",富:"F",改:"G",干:"G",感:"G",刚:"G",高:"G",告:"G",哥:"G",格:"G",个:"G",各:"G",给:"G",根:"G",更:"G",工:"G",公:"G",功:"G",共:"G",狗:"G",构:"G",古:"G",故:"G",关:"G",观:"G",官:"G",管:"G",光:"G",广:"G",规:"G",国:"G",果:"G",过:"G",还:"H",海:"H",含:"H",汉:"H",好:"H",号:"H",浩:"H",合:"H",和:"H",河:"H",黑:"H",很:"H",红:"H",后:"H",忽:"H",互:"H",护:"H",花:"H",华:"H",化:"H",画:"H",话:"H",环:"H",换:"H",黄:"H",回:"H",会:"H",活:"H",火:"H",或:"H",机:"J",基:"J",及:"J",级:"J",几:"J",己:"J",计:"J",记:"J",技:"J",季:"J",济:"J",加:"J",家:"J",价:"J",间:"J",检:"J",简:"J",见:"J",件:"J",建:"J",健:"J",将:"J",讲:"J",交:"J",角:"J",叫:"J",教:"J",接:"J",街:"J",节:"J",结:"J",解:"J",介:"J",今:"J",金:"J",近:"J",进:"J",京:"J",经:"J",精:"J",警:"J",静:"J",九:"J",久:"J",酒:"J",就:"J",局:"J",举:"J",具:"J",剧:"J",决:"J",军:"J",剪:"J",开:"K",看:"K",康:"K",考:"K",科:"K",可:"K",刻:"K",客:"K",课:"K",空:"K",口:"K",苦:"K",库:"K",快:"K",宽:"K",昆:"K",困:"K",拉:"L",来:"L",蓝:"L",浪:"L",劳:"L",老:"L",乐:"L",类:"L",冷:"L",离:"L",李:"L",里:"L",理:"L",力:"L",立:"L",利:"L",例:"L",连:"L",联:"L",脸:"L",练:"L",凉:"L",两:"L",亮:"L",量:"L",林:"L",零:"L",领:"L",流:"L",六:"L",龙:"L",楼:"L",路:"L",旅:"L",绿:"L",乱:"L",论:"L",落:"L",麻:"M",马:"M",买:"M",卖:"M",满:"M",慢:"M",忙:"M",猫:"M",毛:"M",没:"M",美:"M",门:"M",们:"M",梦:"M",米:"M",面:"M",民:"M",名:"M",明:"M",命:"M",模:"M",末:"M",某:"M",母:"M",木:"M",目:"M",拿:"N",哪:"N",那:"N",南:"N",难:"N",脑:"N",呢:"N",内:"N",能:"N",你:"N",年:"N",牛:"N",农:"N",努:"N",女:"N",暖:"N",欧:"O",偶:"O",拍:"P",排:"P",旁:"P",跑:"P",朋:"P",皮:"P",片:"P",漂:"P",品:"P",平:"P",破:"P",普:"P",七:"Q",期:"Q",齐:"Q",其:"Q",奇:"Q",企:"Q",起:"Q",气:"Q",汽:"Q",千:"Q",前:"Q",钱:"Q",强:"Q",桥:"Q",切:"Q",且:"Q",亲:"Q",青:"Q",轻:"Q",清:"Q",情:"Q",请:"Q",秋:"Q",求:"Q",球:"Q",区:"Q",去:"Q",全:"Q",确:"Q",群:"Q",然:"R",让:"R",热:"R",人:"R",认:"R",任:"R",日:"R",容:"R",肉:"R",如:"R",入:"R",软:"R",赛:"S",三:"S",色:"S",沙:"S",山:"S",善:"S",商:"S",上:"S",少:"S",设:"S",社:"S",身:"S",深:"S",神:"S",生:"S",声:"S",省:"S",胜:"S",十:"S",时:"S",实:"S",食:"S",使:"S",始:"S",士:"S",世:"S",市:"S",事:"S",是:"S",适:"S",收:"S",手:"S",首:"S",书:"S",数:"S",水:"S",说:"S",思:"S",死:"S",四:"S",松:"S",送:"S",搜:"S",苏:"S",速:"S",算:"S",随:"S",所:"S",他:"T",它:"T",她:"T",太:"T",态:"T",谈:"T",探:"T",堂:"T",特:"T",提:"T",题:"T",体:"T",天:"T",田:"T",条:"T",铁:"T",听:"T",通:"T",同:"T",统:"T",头:"T",图:"T",土:"T",团:"T",推:"T",退:"T",外:"W",完:"W",玩:"W",晚:"W",万:"W",王:"W",网:"W",往:"W",忘:"W",望:"W",危:"W",微:"W",为:"W",围:"W",位:"W",味:"W",文:"W",问:"W",我:"W",无:"W",五:"W",武:"W",物:"W",西:"X",希:"X",习:"X",洗:"X",喜:"X",系:"X",下:"X",先:"X",显:"X",现:"X",线:"X",相:"X",香:"X",想:"X",向:"X",象:"X",小:"X",校:"X",新:"X",心:"X",信:"X",星:"X",行:"X",形:"X",性:"X",修:"X",需:"X",许:"X",选:"X",学:"X",雪:"X",血:"X",压:"Y",眼:"Y",演:"Y",阳:"Y",样:"Y",要:"Y",药:"Y",也:"Y",业:"Y",一:"Y",衣:"Y",医:"Y",已:"Y",以:"Y",义:"Y",议:"Y",因:"Y",音:"Y",银:"Y",引:"Y",印:"Y",应:"Y",英:"Y",影:"Y",用:"Y",优:"Y",由:"Y",有:"Y",又:"Y",鱼:"Y",与:"Y",语:"Y",育:"Y",预:"Y",元:"Y",员:"Y",原:"Y",园:"Y",远:"Y",愿:"Y",月:"Y",越:"Y",云:"Y",运:"Y",在:"Z",再:"Z",咱:"Z",早:"Z",造:"Z",则:"Z",怎:"Z",增:"Z",展:"Z",战:"Z",站:"Z",张:"Z",招:"Z",找:"Z",照:"Z",者:"Z",这:"Z",真:"Z",整:"Z",正:"Z",政:"Z",之:"Z",支:"Z",知:"Z",直:"Z",值:"Z",只:"Z",指:"Z",制:"Z",质:"Z",中:"Z",终:"Z",种:"Z",重:"Z",州:"Z",周:"Z",主:"Z",住:"Z",注:"Z",专:"Z",转:"Z",装:"Z",准:"Z",资:"Z",子:"Z",自:"Z",字:"Z",总:"Z",走:"Z",组:"Z",最:"Z",昨:"Z",做:"Z"};function fc(e){const t=e.charCodeAt(0);return t>=19968&&t<=40959||t>=13312&&t<=19903||t>=131072&&t<=173791}function Mo(e){const t=e.charAt(0).toUpperCase();return/[A-Z]/.test(t)?t:fc(t)&&Wh[e.charAt(0)]||"#"}const G=Ih((e,t)=>({software:zh,categories:jh,searchQuery:"",currentPage:1,pageSize:18,setSearchQuery:r=>e({searchQuery:r,currentPage:1}),setCurrentPage:r=>e({currentPage:r}),getFilteredSoftware:r=>{const{software:l,searchQuery:n}=t();let a=l;if(r&&(a=a.filter(i=>i.category===r)),n){const i=n.toLowerCase().split(/\s+/).filter(Boolean);a=a.filter(u=>{const o=[u.title,u.description,u.categoryName].join(" ").toLowerCase();return i.every(d=>o.includes(d))})}return a},getFilteredByLetter:r=>{const{software:l,searchQuery:n}=t();let a=l;if(r&&r!=="#"&&r!=="_special"?a=a.filter(i=>Mo(i.title)===r.toUpperCase()):(r==="#"||r==="_special")&&(a=a.filter(i=>{const u=i.title.charAt(0);return!/[A-Z]/i.test(u)&&!fc(u)})),n){const i=n.toLowerCase().split(/\s+/).filter(Boolean);a=a.filter(u=>{const o=[u.title,u.description,u.categoryName].join(" ").toLowerCase();return i.every(d=>o.includes(d))})}return a},getLetterCounts:()=>{const{software:r}=t(),l={};for(let n=65;n<=90;n++)l[String.fromCharCode(n)]=0;return l["#"]=0,r.forEach(n=>{l[Mo(n.title)]++}),l},getTotalPages:r=>{const{pageSize:l}=t();return Math.ceil(r.length/l)},getSoftwareBySlug:r=>t().software.find(l=>l.slug===r),getCategoryBySlug:r=>t().categories.find(l=>l.slug===r)}));function Io(){const[e,t]=y.useState(""),r=jn(),l=G(u=>u.searchQuery),n=G(u=>u.setSearchQuery),a=y.useRef(e);y.useEffect(()=>{e===""&&a.current!==""&&l&&(n(""),r("/")),a.current=e},[e,l,n,r]);const i=u=>{u.preventDefault();const o=e.trim();o?(n(o),r(`/search?q=${encodeURIComponent(o)}`)):(n(""),r("/"))};return c.jsxs("form",{onSubmit:i,className:"relative",children:[c.jsx(ih,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"}),c.jsx("input",{type:"text",value:e,onChange:u=>t(u.target.value),placeholder:"搜索软件...",className:"w-full pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"})]})}const jo=[{to:"/",label:"首页"},{to:"/about",label:"关于"}];function Oh(){const[e,t]=y.useState(!1),r=kr();return c.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60",children:[c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"flex items-center justify-between h-16",children:[c.jsxs(ir,{to:"/",className:"flex items-center gap-2 group",children:[c.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-sm shadow-blue-500/25 group-hover:shadow-md group-hover:shadow-blue-500/30 transition-all",children:c.jsx(dc,{className:"w-5 h-5 text-white"})}),c.jsx("span",{className:"text-lg font-bold text-slate-800",children:c.jsx("span",{className:"gradient-text",children:"灵动软件"})})]}),c.jsx("nav",{className:"hidden md:flex items-center gap-8",children:jo.map(l=>c.jsx(ir,{to:l.to,className:`text-sm font-medium transition-colors ${r.pathname===l.to?"text-blue-600":"text-slate-500 hover:text-slate-800"}`,children:l.label},l.to))}),c.jsx("div",{className:"hidden md:block w-64",children:c.jsx(Io,{})}),c.jsx("button",{className:"md:hidden p-2 text-slate-500 hover:text-slate-700",onClick:()=>t(!e),children:e?c.jsx(uh,{className:"w-5 h-5"}):c.jsx(ah,{className:"w-5 h-5"})})]})}),e&&c.jsx("div",{className:"md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl",children:c.jsxs("div",{className:"px-4 py-4 space-y-4",children:[c.jsx(Io,{}),c.jsx("div",{className:"flex flex-col gap-3",children:jo.map(l=>c.jsx(ir,{to:l.to,onClick:()=>t(!1),className:`text-sm py-2 font-medium transition-colors ${r.pathname===l.to?"text-blue-600":"text-slate-500 hover:text-slate-800"}`,children:l.label},l.to))})]})})]})}function Rh(){return c.jsx("footer",{className:"border-t border-slate-200 bg-white",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[c.jsxs("div",{className:"text-slate-500 text-sm",children:["© ",new Date().getFullYear()," 灵动软件 — 发现优质绿色软件"]}),c.jsx("div",{className:"text-slate-400 text-xs",children:"仅供学习交流，请支持正版软件"})]})})})}function Vh(){return c.jsxs("div",{className:"min-h-screen flex flex-col",children:[c.jsx(Oh,{}),c.jsx("main",{className:"flex-1 pt-16",children:c.jsx(O2,{})}),c.jsx(Rh,{})]})}function Th(){return c.jsxs("section",{className:"relative overflow-hidden bg-white",children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"}),c.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"}),c.jsx("div",{className:"absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"}),c.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"}),c.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32",children:c.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-8",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500 animate-pulse"}),c.jsx("span",{className:"text-xs text-blue-600 font-medium",children:"每日更新优质软件"})]}),c.jsxs("h1",{className:"text-4xl md:text-6xl font-bold tracking-tight mb-6",children:[c.jsx("span",{className:"text-slate-800",children:"发现"}),c.jsx("span",{className:"gradient-text",children:"优质绿色软件"})]}),c.jsx("p",{className:"text-lg text-slate-500 max-w-xl mx-auto leading-relaxed",children:"精选系统工具、办公软件、编程开发、图像媒体等各类绿色软件， 安全可靠，即搜即用。"})]})})]})}const _h=[...Array.from({length:26},(e,t)=>String.fromCharCode(65+t)),"#"];function Fh(){const e=jn(),r=G(l=>l.getLetterCounts)();return c.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10",children:c.jsx("div",{className:"flex flex-wrap justify-center gap-1.5",children:_h.map(l=>{const n=r[l]||0,a=n>0;return c.jsx("button",{onClick:()=>e(`/letter/${l==="#"?"_special":l}`),disabled:!a,title:a?`${n} 款`:"暂无",className:`w-9 h-9 rounded-lg text-sm font-medium transition-all ${a?"bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-sm hover:shadow-blue-500/10 hover:-translate-y-0.5":"bg-slate-50 border border-slate-100 text-slate-300 cursor-not-allowed"}`,children:l},l)})})})}function mc(e){const t=new Date(e),r=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${r}-${l}-${n}`}function mn({children:e,variant:t="default"}){const r="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",l={default:"bg-slate-100 text-slate-600",primary:"bg-blue-50 text-blue-600"};return c.jsx("span",{className:`${r} ${l[t]}`,children:e})}function Bh({software:e}){return c.jsxs(ir,{to:`/software/${e.slug}`,className:"group block bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1",children:[c.jsx("div",{className:"aspect-[3/2] overflow-hidden bg-slate-100",children:c.jsx("img",{src:e.coverImage,alt:e.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",loading:"lazy",onError:t=>{const r=t.target;r.onerror=null,r.src=`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="#e2e8f0" width="600" height="400"/><text fill="#94a3b8" font-family="system-ui,sans-serif" font-size="20" text-anchor="middle" x="300" y="210">${e.title}</text></svg>`)}`}})}),c.jsxs("div",{className:"p-4",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[c.jsx(mn,{children:e.categoryName}),c.jsx(mn,{variant:"primary",children:e.platform})]}),c.jsx("h3",{className:"text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-1.5 line-clamp-1",children:e.title}),c.jsx("p",{className:"text-sm text-slate-500 line-clamp-2 mb-3 leading-relaxed",children:e.description}),c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(uc,{className:"w-3 h-3"}),mc(e.updatedAt)]}),c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(oc,{className:"w-3 h-3"}),e.fileSize]})]})]})]})}function Xh({currentPage:e,totalPages:t,onPageChange:r}){if(t<=1)return null;const l=[],n=2;for(let a=1;a<=t;a++)a===1||a===t||a>=e-n&&a<=e+n?l.push(a):l[l.length-1]!=="..."&&l.push("...");return c.jsxs("div",{className:"flex items-center justify-center gap-1",children:[c.jsx("button",{onClick:()=>r(e-1),disabled:e===1,className:"p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:c.jsx(rh,{className:"w-4 h-4"})}),l.map((a,i)=>a==="..."?c.jsx("span",{className:"px-2 text-slate-400",children:"..."},`dots-${i}`):c.jsx("button",{onClick:()=>r(a),className:`w-9 h-9 rounded-lg text-sm font-medium transition-all ${e===a?"bg-blue-500 text-white shadow-sm shadow-blue-500/25":"text-slate-500 hover:text-slate-700 hover:bg-slate-100"}`,children:a},a)),c.jsx("button",{onClick:()=>r(e+1),disabled:e===t,className:"p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:c.jsx(lh,{className:"w-4 h-4"})})]})}function Wn({categorySlug:e,letter:t}){const r=G(f=>f.getFilteredSoftware),l=G(f=>f.getFilteredByLetter),n=G(f=>f.getTotalPages),a=G(f=>f.currentPage),i=G(f=>f.setCurrentPage),u=G(f=>f.pageSize),o=t?l(t):r(e),d=n(o),m=(a-1)*u,h=o.slice(m,m+u);return o.length===0?c.jsxs("div",{className:"text-center py-16",children:[c.jsx("p",{className:"text-slate-500 text-lg",children:"暂无相关软件"}),c.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"试试其他关键词或分类"})]}):c.jsxs("div",{children:[c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:h.map(f=>c.jsx(Bh,{software:f},f.id))}),c.jsx("div",{className:"mt-10",children:c.jsx(Xh,{currentPage:a,totalPages:d,onPageChange:i})})]})}function Qh(){const e=G(r=>r.setSearchQuery),t=G(r=>r.setCurrentPage);return y.useEffect(()=>{e(""),t(1)},[e,t]),c.jsxs("div",{children:[c.jsx(Th,{}),c.jsx(Fh,{}),c.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("div",{className:"flex items-center justify-between mb-8",children:c.jsx("h2",{className:"text-xl font-bold text-slate-800",children:"最新软件"})}),c.jsx(Wn,{})]})]})}function Zh(){const{slug:e}=du(),t=G(n=>n.getCategoryBySlug),r=G(n=>n.setCurrentPage),l=e?t(e):void 0;return y.useEffect(()=>{r(1)},[e,r]),l?c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"mb-10",children:[c.jsx("h1",{className:"text-2xl font-bold text-slate-800 mb-2",children:l.name}),c.jsx("p",{className:"text-slate-500",children:l.description})]}),c.jsx(Wn,{categorySlug:e})]}):c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",children:c.jsx("p",{className:"text-slate-500",children:"分类不存在"})})}function Hh(){const{letter:e}=du(),t=G(r=>r.setCurrentPage);return y.useEffect(()=>{t(1)},[e,t]),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"mb-10",children:[c.jsxs("h1",{className:"text-2xl font-bold text-slate-800 mb-2",children:[e==="_special"?"特殊字符 / 数字":e," 开头的软件"]}),c.jsx("p",{className:"text-slate-500",children:"按首字母浏览软件"})]}),c.jsx(Wn,{letter:e})]})}function Jh({section:e}){const t=!!e.baiduUrl||!!e.quarkUrl||!!e.thunderUrl;return c.jsxs("div",{className:`rounded-xl border p-5 transition-colors ${t?"bg-white border-slate-200":"bg-slate-50 border-slate-100"}`,children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h3",{className:"text-base font-semibold text-slate-800",children:e.title}),!t&&c.jsx("span",{className:"text-xs text-slate-400 bg-slate-200 px-2 py-0.5 rounded-full",children:"暂未上架，敬请期待"})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[e.baiduUrl?c.jsxs("a",{href:e.baiduUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-md hover:shadow-blue-500/20 active:scale-95",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M10.28 8.74V5.24C6.44 4.36 2.64 6.36 1.52 10.12C-0.12 15.64 3.4 21.12 9.04 22.04C13.84 22.8 18.36 20.4 19.88 15.92C20.2 15.0 20.32 14.04 20.2 13.04C17.96 15.2 14.56 16.48 11.2 15.52C8.32 14.68 6.68 11.72 7.36 8.76L10.28 8.74Z"})}),"百度网盘"]}):c.jsxs("div",{className:"flex items-center justify-center gap-2 px-4 py-3 bg-slate-200 text-slate-400 text-sm font-medium rounded-lg cursor-not-allowed",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M10.28 8.74V5.24C6.44 4.36 2.64 6.36 1.52 10.12C-0.12 15.64 3.4 21.12 9.04 22.04C13.84 22.8 18.36 20.4 19.88 15.92C20.2 15.0 20.32 14.04 20.2 13.04C17.96 15.2 14.56 16.48 11.2 15.52C8.32 14.68 6.68 11.72 7.36 8.76L10.28 8.74Z"})}),"百度网盘"]}),e.quarkUrl?c.jsxs("a",{href:e.quarkUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-md hover:shadow-amber-500/20 active:scale-95",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("circle",{cx:"12",cy:"12",r:"10"})}),"夸克网盘"]}):c.jsxs("div",{className:"flex items-center justify-center gap-2 px-4 py-3 bg-slate-200 text-slate-400 text-sm font-medium rounded-lg cursor-not-allowed",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("circle",{cx:"12",cy:"12",r:"10"})}),"夸克网盘"]}),e.thunderUrl?c.jsxs("a",{href:e.thunderUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-md hover:shadow-sky-500/20 active:scale-95",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"迅雷云盘"]}):c.jsxs("div",{className:"flex items-center justify-center gap-2 px-4 py-3 bg-slate-200 text-slate-400 text-sm font-medium rounded-lg cursor-not-allowed",children:[c.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"迅雷云盘"]})]})]})}function Gh({software:e}){return c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10",children:[c.jsx("div",{className:"lg:col-span-2",children:c.jsx("div",{className:"rounded-xl overflow-hidden bg-slate-100 border border-slate-200",children:c.jsx("img",{src:e.coverImage,alt:e.title,className:"w-full aspect-[4/3] object-cover",onError:t=>{const r=t.target;r.onerror=null,r.src=`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect fill="#e2e8f0" width="600" height="450"/><text fill="#94a3b8" font-family="system-ui,sans-serif" font-size="20" text-anchor="middle" x="300" y="235">${e.title}</text></svg>`)}`}})})}),c.jsxs("div",{className:"lg:col-span-3 flex flex-col justify-center",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[c.jsx(mn,{children:e.categoryName}),c.jsx(mn,{variant:"primary",children:e.platform})]}),c.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-slate-800 mb-3",children:e.title}),c.jsx("p",{className:"text-slate-500 mb-6 leading-relaxed",children:e.description}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[c.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[c.jsx(uc,{className:"w-4 h-4 text-slate-400"}),c.jsxs("span",{children:["更新于 ",mc(e.updatedAt)]})]}),c.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[c.jsx(nh,{className:"w-4 h-4 text-slate-400"}),c.jsx("span",{children:e.fileSize})]}),c.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:[c.jsx(dc,{className:"w-4 h-4 text-slate-400"}),c.jsx("span",{children:e.platform})]}),c.jsx("div",{className:"flex items-center gap-2 text-sm text-slate-500",children:c.jsx("span",{className:"font-mono text-slate-400",children:e.version})})]})]})]}),e.downloadLinks&&e.downloadLinks.length>0&&c.jsxs("div",{className:"mb-8",children:[c.jsxs("h2",{className:"text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2",children:[c.jsx(oc,{className:"w-5 h-5 text-blue-500"}),"下载链接"]}),c.jsx("div",{className:"space-y-4",children:e.downloadLinks.map((t,r)=>c.jsx(Jh,{section:t},r))})]}),c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-8",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-800 mb-4",children:"软件详情"}),c.jsx("div",{className:"max-w-none",children:e.content.split(`
`).map((t,r)=>t.startsWith("## ")?c.jsx("h3",{className:"text-base font-semibold text-blue-600 mt-6 mb-3",children:t.replace("## ","")},r):t.startsWith("- ")?c.jsx("li",{className:"text-slate-600 text-sm ml-4 mb-1",children:t.replace("- ","")},r):t.trim()===""?c.jsx("br",{},r):c.jsx("p",{className:"text-slate-600 text-sm leading-relaxed mb-2",children:t},r))})]}),e.screenshots.length>0&&c.jsxs("div",{className:"mb-8",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-800 mb-4",children:"软件截图"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.screenshots.map((t,r)=>c.jsx("div",{className:"rounded-xl overflow-hidden bg-slate-100 border border-slate-200",children:c.jsx("img",{src:t,alt:`截图 ${r+1}`,className:"w-full aspect-video object-cover",onError:l=>{const n=l.target;n.onerror=null,n.src=`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect fill="#e2e8f0" width="800" height="500"/><text fill="#94a3b8" font-family="system-ui,sans-serif" font-size="20" text-anchor="middle" x="400" y="260">截图 ${r+1}</text></svg>`)}`}})},r))})]})]})}function Kh(){const{slug:e}=du(),t=G(n=>n.getSoftwareBySlug),r=G(n=>n.setCurrentPage),l=e?t(e):void 0;return y.useEffect(()=>{r(1),window.scrollTo(0,0)},[e,r]),l?c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs(ir,{to:"/",className:"inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-8 transition-colors",children:[c.jsx(th,{className:"w-4 h-4"}),"返回首页"]}),c.jsx(Gh,{software:l})]}):c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",children:[c.jsx("p",{className:"text-slate-500",children:"软件不存在"}),c.jsx(ir,{to:"/",className:"text-blue-500 hover:text-blue-600 text-sm mt-4 inline-block",children:"返回首页"})]})}function Yh(){const[e]=Y2(),t=e.get("q")||"",r=G(a=>a.setSearchQuery),l=G(a=>a.searchQuery),n=G(a=>a.setCurrentPage);return y.useEffect(()=>{t&&r(t),n(1)},[t,r,n]),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"mb-10",children:[c.jsx("h1",{className:"text-2xl font-bold text-slate-800 mb-2",children:"搜索结果"}),c.jsxs("p",{className:"text-slate-500",children:['搜索 "',l,'" 的结果']})]}),c.jsx(Wn,{})]})}function $h(){return c.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[c.jsx("h1",{className:"text-3xl font-bold text-slate-800 mb-8",children:"关于本站"}),c.jsxs("div",{className:"space-y-6 text-slate-600 leading-relaxed",children:[c.jsx("p",{children:"灵动软件是一个专注于绿色软件推荐与分享的个人站点。我们致力于为广大的软件爱好者提供安全、绿色、可靠的软件资源。"}),c.jsx("p",{children:"本站发布的每一款软件都经过亲自测试和验证，确保安全可用。我们坚持简洁高效的理念， 去除繁琐的用户系统，让您专注于软件发现与使用。"}),c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-6 mt-8",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-800 mb-4",children:"内容涵盖"}),c.jsxs("ul",{className:"grid grid-cols-2 gap-2 text-sm",children:[c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"工程设计与仿真"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"办公与文档"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"编程开发"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"图像媒体"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"数据分析"]}),c.jsxs("li",{className:"flex items-center gap-2 text-slate-600",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"}),"系统工具"]})]})]}),c.jsx("p",{className:"text-slate-400 text-sm mt-8",children:"本站仅供学习交流使用，请支持正版软件。"})]})]})}function ep(){return c.jsx(V2,{children:c.jsxs(tt,{path:"/",element:c.jsx(Vh,{}),children:[c.jsx(tt,{index:!0,element:c.jsx(Qh,{})}),c.jsx(tt,{path:"category/:slug",element:c.jsx(Zh,{})}),c.jsx(tt,{path:"letter/:letter",element:c.jsx(Hh,{})}),c.jsx(tt,{path:"software/:slug",element:c.jsx(Kh,{})}),c.jsx(tt,{path:"search",element:c.jsx(Yh,{})}),c.jsx(tt,{path:"about",element:c.jsx($h,{})})]})})}fa.createRoot(document.getElementById("root")).render(c.jsx(mi.StrictMode,{children:c.jsx(H2,{children:c.jsx(ep,{})})}));
