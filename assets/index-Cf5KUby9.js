var ah=Object.defineProperty;var lh=(s,o,c)=>o in s?ah(s,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[o]=c;var qe=(s,o,c)=>lh(s,typeof o!="symbol"?o+"":o,c);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))y(w);new MutationObserver(w=>{for(const x of w)if(x.type==="childList")for(const L of x.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&y(L)}).observe(document,{childList:!0,subtree:!0});function c(w){const x={};return w.integrity&&(x.integrity=w.integrity),w.referrerPolicy&&(x.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?x.credentials="include":w.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function y(w){if(w.ep)return;w.ep=!0;const x=c(w);fetch(w.href,x)}})();var Ra={exports:{}},gi={},Ma={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac;function uh(){if(Ac)return Ie;Ac=1;var s=Symbol.for("react.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),L=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),Q=Symbol.iterator;function G(I){return I===null||typeof I!="object"?null:(I=Q&&I[Q]||I["@@iterator"],typeof I=="function"?I:null)}var ne={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,ee={};function J(I,X,Te){this.props=I,this.context=X,this.refs=ee,this.updater=Te||ne}J.prototype.isReactComponent={},J.prototype.setState=function(I,X){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,X,"setState")},J.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function Y(){}Y.prototype=J.prototype;function q(I,X,Te){this.props=I,this.context=X,this.refs=ee,this.updater=Te||ne}var le=q.prototype=new Y;le.constructor=q,K(le,J.prototype),le.isPureReactComponent=!0;var we=Array.isArray,ke=Object.prototype.hasOwnProperty,Oe={current:null},Ne={key:!0,ref:!0,__self:!0,__source:!0};function Be(I,X,Te){var _e,Pe={},Ae=null,f=null;if(X!=null)for(_e in X.ref!==void 0&&(f=X.ref),X.key!==void 0&&(Ae=""+X.key),X)ke.call(X,_e)&&!Ne.hasOwnProperty(_e)&&(Pe[_e]=X[_e]);var R=arguments.length-2;if(R===1)Pe.children=Te;else if(1<R){for(var d=Array(R),p=0;p<R;p++)d[p]=arguments[p+2];Pe.children=d}if(I&&I.defaultProps)for(_e in R=I.defaultProps,R)Pe[_e]===void 0&&(Pe[_e]=R[_e]);return{$$typeof:s,type:I,key:Ae,ref:f,props:Pe,_owner:Oe.current}}function be(I,X){return{$$typeof:s,type:I.type,key:X,ref:I.ref,props:I.props,_owner:I._owner}}function Fe(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function et(I){var X={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Te){return X[Te]})}var Ee=/\/+/g;function Ce(I,X){return typeof I=="object"&&I!==null&&I.key!=null?et(""+I.key):X.toString(36)}function Re(I,X,Te,_e,Pe){var Ae=typeof I;(Ae==="undefined"||Ae==="boolean")&&(I=null);var f=!1;if(I===null)f=!0;else switch(Ae){case"string":case"number":f=!0;break;case"object":switch(I.$$typeof){case s:case o:f=!0}}if(f)return f=I,Pe=Pe(f),I=_e===""?"."+Ce(f,0):_e,we(Pe)?(Te="",I!=null&&(Te=I.replace(Ee,"$&/")+"/"),Re(Pe,X,Te,"",function(p){return p})):Pe!=null&&(Fe(Pe)&&(Pe=be(Pe,Te+(!Pe.key||f&&f.key===Pe.key?"":(""+Pe.key).replace(Ee,"$&/")+"/")+I)),X.push(Pe)),1;if(f=0,_e=_e===""?".":_e+":",we(I))for(var R=0;R<I.length;R++){Ae=I[R];var d=_e+Ce(Ae,R);f+=Re(Ae,X,Te,d,Pe)}else if(d=G(I),typeof d=="function")for(I=d.call(I),R=0;!(Ae=I.next()).done;)Ae=Ae.value,d=_e+Ce(Ae,R++),f+=Re(Ae,X,Te,d,Pe);else if(Ae==="object")throw X=String(I),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return f}function ot(I,X,Te){if(I==null)return I;var _e=[],Pe=0;return Re(I,_e,"","",function(Ae){return X.call(Te,Ae,Pe++)}),_e}function Ve(I){if(I._status===-1){var X=I._result;X=X(),X.then(function(Te){(I._status===0||I._status===-1)&&(I._status=1,I._result=Te)},function(Te){(I._status===0||I._status===-1)&&(I._status=2,I._result=Te)}),I._status===-1&&(I._status=0,I._result=X)}if(I._status===1)return I._result.default;throw I._result}var He={current:null},ae={transition:null},ge={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:ae,ReactCurrentOwner:Oe};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:ot,forEach:function(I,X,Te){ot(I,function(){X.apply(this,arguments)},Te)},count:function(I){var X=0;return ot(I,function(){X++}),X},toArray:function(I){return ot(I,function(X){return X})||[]},only:function(I){if(!Fe(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Ie.Component=J,Ie.Fragment=c,Ie.Profiler=w,Ie.PureComponent=q,Ie.StrictMode=y,Ie.Suspense=C,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Ie.act=se,Ie.cloneElement=function(I,X,Te){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var _e=K({},I.props),Pe=I.key,Ae=I.ref,f=I._owner;if(X!=null){if(X.ref!==void 0&&(Ae=X.ref,f=Oe.current),X.key!==void 0&&(Pe=""+X.key),I.type&&I.type.defaultProps)var R=I.type.defaultProps;for(d in X)ke.call(X,d)&&!Ne.hasOwnProperty(d)&&(_e[d]=X[d]===void 0&&R!==void 0?R[d]:X[d])}var d=arguments.length-2;if(d===1)_e.children=Te;else if(1<d){R=Array(d);for(var p=0;p<d;p++)R[p]=arguments[p+2];_e.children=R}return{$$typeof:s,type:I.type,key:Pe,ref:Ae,props:_e,_owner:f}},Ie.createContext=function(I){return I={$$typeof:L,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:x,_context:I},I.Consumer=I},Ie.createElement=Be,Ie.createFactory=function(I){var X=Be.bind(null,I);return X.type=I,X},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(I){return{$$typeof:O,render:I}},Ie.isValidElement=Fe,Ie.lazy=function(I){return{$$typeof:W,_payload:{_status:-1,_result:I},_init:Ve}},Ie.memo=function(I,X){return{$$typeof:k,type:I,compare:X===void 0?null:X}},Ie.startTransition=function(I){var X=ae.transition;ae.transition={};try{I()}finally{ae.transition=X}},Ie.unstable_act=se,Ie.useCallback=function(I,X){return He.current.useCallback(I,X)},Ie.useContext=function(I){return He.current.useContext(I)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(I){return He.current.useDeferredValue(I)},Ie.useEffect=function(I,X){return He.current.useEffect(I,X)},Ie.useId=function(){return He.current.useId()},Ie.useImperativeHandle=function(I,X,Te){return He.current.useImperativeHandle(I,X,Te)},Ie.useInsertionEffect=function(I,X){return He.current.useInsertionEffect(I,X)},Ie.useLayoutEffect=function(I,X){return He.current.useLayoutEffect(I,X)},Ie.useMemo=function(I,X){return He.current.useMemo(I,X)},Ie.useReducer=function(I,X,Te){return He.current.useReducer(I,X,Te)},Ie.useRef=function(I){return He.current.useRef(I)},Ie.useState=function(I){return He.current.useState(I)},Ie.useSyncExternalStore=function(I,X,Te){return He.current.useSyncExternalStore(I,X,Te)},Ie.useTransition=function(){return He.current.useTransition()},Ie.version="18.3.1",Ie}var Pc;function Ba(){return Pc||(Pc=1,Ma.exports=uh()),Ma.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc;function ch(){if(kc)return gi;kc=1;var s=Ba(),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,w=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function L(O,C,k){var W,Q={},G=null,ne=null;k!==void 0&&(G=""+k),C.key!==void 0&&(G=""+C.key),C.ref!==void 0&&(ne=C.ref);for(W in C)y.call(C,W)&&!x.hasOwnProperty(W)&&(Q[W]=C[W]);if(O&&O.defaultProps)for(W in C=O.defaultProps,C)Q[W]===void 0&&(Q[W]=C[W]);return{$$typeof:o,type:O,key:G,ref:ne,props:Q,_owner:w.current}}return gi.Fragment=c,gi.jsx=L,gi.jsxs=L,gi}var Cc;function dh(){return Cc||(Cc=1,Ra.exports=ch()),Ra.exports}var ye=dh(),j=Ba(),Ds={},Ea={exports:{}},Ht={},La={exports:{}},Aa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc;function fh(){return zc||(zc=1,function(s){function o(ae,ge){var se=ae.length;ae.push(ge);e:for(;0<se;){var I=se-1>>>1,X=ae[I];if(0<w(X,ge))ae[I]=ge,ae[se]=X,se=I;else break e}}function c(ae){return ae.length===0?null:ae[0]}function y(ae){if(ae.length===0)return null;var ge=ae[0],se=ae.pop();if(se!==ge){ae[0]=se;e:for(var I=0,X=ae.length,Te=X>>>1;I<Te;){var _e=2*(I+1)-1,Pe=ae[_e],Ae=_e+1,f=ae[Ae];if(0>w(Pe,se))Ae<X&&0>w(f,Pe)?(ae[I]=f,ae[Ae]=se,I=Ae):(ae[I]=Pe,ae[_e]=se,I=_e);else if(Ae<X&&0>w(f,se))ae[I]=f,ae[Ae]=se,I=Ae;else break e}}return ge}function w(ae,ge){var se=ae.sortIndex-ge.sortIndex;return se!==0?se:ae.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var x=performance;s.unstable_now=function(){return x.now()}}else{var L=Date,O=L.now();s.unstable_now=function(){return L.now()-O}}var C=[],k=[],W=1,Q=null,G=3,ne=!1,K=!1,ee=!1,J=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function le(ae){for(var ge=c(k);ge!==null;){if(ge.callback===null)y(k);else if(ge.startTime<=ae)y(k),ge.sortIndex=ge.expirationTime,o(C,ge);else break;ge=c(k)}}function we(ae){if(ee=!1,le(ae),!K)if(c(C)!==null)K=!0,Ve(ke);else{var ge=c(k);ge!==null&&He(we,ge.startTime-ae)}}function ke(ae,ge){K=!1,ee&&(ee=!1,Y(Be),Be=-1),ne=!0;var se=G;try{for(le(ge),Q=c(C);Q!==null&&(!(Q.expirationTime>ge)||ae&&!et());){var I=Q.callback;if(typeof I=="function"){Q.callback=null,G=Q.priorityLevel;var X=I(Q.expirationTime<=ge);ge=s.unstable_now(),typeof X=="function"?Q.callback=X:Q===c(C)&&y(C),le(ge)}else y(C);Q=c(C)}if(Q!==null)var Te=!0;else{var _e=c(k);_e!==null&&He(we,_e.startTime-ge),Te=!1}return Te}finally{Q=null,G=se,ne=!1}}var Oe=!1,Ne=null,Be=-1,be=5,Fe=-1;function et(){return!(s.unstable_now()-Fe<be)}function Ee(){if(Ne!==null){var ae=s.unstable_now();Fe=ae;var ge=!0;try{ge=Ne(!0,ae)}finally{ge?Ce():(Oe=!1,Ne=null)}}else Oe=!1}var Ce;if(typeof q=="function")Ce=function(){q(Ee)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,ot=Re.port2;Re.port1.onmessage=Ee,Ce=function(){ot.postMessage(null)}}else Ce=function(){J(Ee,0)};function Ve(ae){Ne=ae,Oe||(Oe=!0,Ce())}function He(ae,ge){Be=J(function(){ae(s.unstable_now())},ge)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ae){ae.callback=null},s.unstable_continueExecution=function(){K||ne||(K=!0,Ve(ke))},s.unstable_forceFrameRate=function(ae){0>ae||125<ae?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<ae?Math.floor(1e3/ae):5},s.unstable_getCurrentPriorityLevel=function(){return G},s.unstable_getFirstCallbackNode=function(){return c(C)},s.unstable_next=function(ae){switch(G){case 1:case 2:case 3:var ge=3;break;default:ge=G}var se=G;G=ge;try{return ae()}finally{G=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ae,ge){switch(ae){case 1:case 2:case 3:case 4:case 5:break;default:ae=3}var se=G;G=ae;try{return ge()}finally{G=se}},s.unstable_scheduleCallback=function(ae,ge,se){var I=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,ae){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=se+X,ae={id:W++,callback:ge,priorityLevel:ae,startTime:se,expirationTime:X,sortIndex:-1},se>I?(ae.sortIndex=se,o(k,ae),c(C)===null&&ae===c(k)&&(ee?(Y(Be),Be=-1):ee=!0,He(we,se-I))):(ae.sortIndex=X,o(C,ae),K||ne||(K=!0,Ve(ke))),ae},s.unstable_shouldYield=et,s.unstable_wrapCallback=function(ae){var ge=G;return function(){var se=G;G=ge;try{return ae.apply(this,arguments)}finally{G=se}}}}(Aa)),Aa}var Dc;function hh(){return Dc||(Dc=1,La.exports=fh()),La.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc;function ph(){if(Uc)return Ht;Uc=1;var s=Ba(),o=hh();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y=new Set,w={};function x(e,t){L(e,t),L(e+"Capture",t)}function L(e,t){for(w[e]=t,e=0;e<t.length;e++)y.add(t[e])}var O=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),C=Object.prototype.hasOwnProperty,k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W={},Q={};function G(e){return C.call(Q,e)?!0:C.call(W,e)?!1:k.test(e)?Q[e]=!0:(W[e]=!0,!1)}function ne(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K(e,t,n,r){if(t===null||typeof t>"u"||ne(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ee(e,t,n,r,i,l,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=m}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new ee(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new ee(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new ee(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new ee(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new ee(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new ee(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new ee(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new ee(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Y=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Y,q);J[t]=new ee(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Y,q);J[t]=new ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Y,q);J[t]=new ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new ee(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function le(e,t,n,r){var i=J.hasOwnProperty(t)?J[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K(t,n,i,r)&&(n=null),r||i===null?G(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var we=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),Oe=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),Be=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),et=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),ae=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,I;function X(e){if(I===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return`
`+I+e}var Te=!1;function _e(e,t){if(!e||Te)return"";Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch($){var r=$}Reflect.construct(e,[],t)}else{try{t.call()}catch($){r=$}e.call(t.prototype)}else{try{throw Error()}catch($){r=$}e()}}catch($){if($&&r&&typeof $.stack=="string"){for(var i=$.stack.split(`
`),l=r.stack.split(`
`),m=i.length-1,M=l.length-1;1<=m&&0<=M&&i[m]!==l[M];)M--;for(;1<=m&&0<=M;m--,M--)if(i[m]!==l[M]){if(m!==1||M!==1)do if(m--,M--,0>M||i[m]!==l[M]){var A=`
`+i[m].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=m&&0<=M);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?X(e):""}function Pe(e){switch(e.tag){case 5:return X(e.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return e=_e(e.type,!1),e;case 11:return e=_e(e.type.render,!1),e;case 1:return e=_e(e.type,!0),e;default:return""}}function Ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case Oe:return"Portal";case be:return"Profiler";case Be:return"StrictMode";case Ce:return"Suspense";case Re:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case et:return(e.displayName||"Context")+".Consumer";case Fe:return(e._context.displayName||"Context")+".Provider";case Ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ot:return t=e.displayName||null,t!==null?t:Ae(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return Ae(e(t))}catch{}}return null}function f(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(t);case 8:return t===Be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function R(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p(e){var t=d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(m){r=""+m,l.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(m){r=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function T(e){e._valueTracker||(e._valueTracker=p(e))}function E(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function F(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function a(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function g(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=R(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function u(e,t){t=t.checked,t!=null&&le(e,"checked",t,!1)}function h(e,t){u(e,t);var n=R(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?z(e,t.type,n):t.hasOwnProperty("defaultValue")&&z(e,t.type,R(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function z(e,t,n){(t!=="number"||F(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var B=Array.isArray;function v(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+R(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function S(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function P(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(c(92));if(B(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:R(n)}}function D(e,t){var n=R(t.value),r=R(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function H(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function V(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Z(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?V(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fe,Me=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ce(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(he).forEach(function(e){ze.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]})});function Ue(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function We(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ue(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var lt=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(e,t){if(t){if(lt[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function ut(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function ht(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pt=null,nt=null,rt=null;function yt(e){if(e=ti(e)){if(typeof pt!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Zi(t),pt(e.stateNode,e.type,t))}}function wt(e){nt?rt?rt.push(e):rt=[e]:nt=e}function _t(){if(nt){var e=nt,t=rt;if(rt=nt=null,yt(e),t)for(e=0;e<t.length;e++)yt(t[e])}}function St(e,t){return e(t)}function At(){}var Mt=!1;function Pt(e,t,n){if(Mt)return e(t,n);Mt=!0;try{return St(e,t,n)}finally{Mt=!1,(nt!==null||rt!==null)&&(At(),_t())}}function ln(e,t){var n=e.stateNode;if(n===null)return null;var r=Zi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Cn=!1;if(O)try{var un={};Object.defineProperty(un,"passive",{get:function(){Cn=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch{Cn=!1}function dr(e,t,n,r,i,l,m,M,A){var $=Array.prototype.slice.call(arguments,3);try{t.apply(n,$)}catch(re){this.onError(re)}}var cn=!1,wn=null,_n=!1,fr=null,Mi={onError:function(e){cn=!0,wn=e}};function Ei(e,t,n,r,i,l,m,M,A){cn=!1,wn=null,dr.apply(Mi,arguments)}function Li(e,t,n,r,i,l,m,M,A){if(Ei.apply(this,arguments),cn){if(cn){var $=wn;cn=!1,wn=null}else throw Error(c(198));_n||(_n=!0,fr=$)}}function Ke(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ka(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xa(e){if(Ke(e)!==e)throw Error(c(188))}function vd(e){var t=e.alternate;if(!t){if(t=Ke(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Xa(i),e;if(l===r)return Xa(i),t;l=l.sibling}throw Error(c(188))}if(n.return!==r.return)n=i,r=l;else{for(var m=!1,M=i.child;M;){if(M===n){m=!0,n=i,r=l;break}if(M===r){m=!0,r=i,n=l;break}M=M.sibling}if(!m){for(M=l.child;M;){if(M===n){m=!0,n=l,r=i;break}if(M===r){m=!0,r=l,n=i;break}M=M.sibling}if(!m)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function Ja(e){return e=vd(e),e!==null?el(e):null}function el(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=el(e);if(t!==null)return t;e=e.sibling}return null}var tl=o.unstable_scheduleCallback,nl=o.unstable_cancelCallback,yd=o.unstable_shouldYield,wd=o.unstable_requestPaint,ct=o.unstable_now,_d=o.unstable_getCurrentPriorityLevel,Gs=o.unstable_ImmediatePriority,rl=o.unstable_UserBlockingPriority,Ai=o.unstable_NormalPriority,Sd=o.unstable_LowPriority,il=o.unstable_IdlePriority,Pi=null,dn=null;function xd(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Pi,e,void 0,(e.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:Md,Td=Math.log,Rd=Math.LN2;function Md(e){return e>>>=0,e===0?32:31-(Td(e)/Rd|0)|0}var ki=64,Ci=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,m=n&268435455;if(m!==0){var M=m&~i;M!==0?r=Nr(M):(l&=m,l!==0&&(r=Nr(l)))}else m=n&~i,m!==0?r=Nr(m):l!==0&&(r=Nr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Jt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ed(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ld(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var m=31-Jt(l),M=1<<m,A=i[m];A===-1?(!(M&n)||M&r)&&(i[m]=Ed(M,t)):A<=t&&(e.expiredLanes|=M),l&=~M}}function Vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sl(){var e=ki;return ki<<=1,!(ki&4194240)&&(ki=64),e}function js(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Jt(t),e[t]=n}function Ad(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Jt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var je=0;function ol(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var al,Ws,ll,ul,cl,Zs=!1,Di=[],zn=null,Dn=null,Un=null,Fr=new Map,Br=new Map,In=[],Pd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dl(e,t){switch(e){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(t.pointerId)}}function Hr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ti(t),t!==null&&Ws(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kd(e,t,n,r,i){switch(t){case"focusin":return zn=Hr(zn,e,t,n,r,i),!0;case"dragenter":return Dn=Hr(Dn,e,t,n,r,i),!0;case"mouseover":return Un=Hr(Un,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Fr.set(l,Hr(Fr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Br.set(l,Hr(Br.get(l)||null,e,t,n,r,i)),!0}return!1}function fl(e){var t=Xn(e.target);if(t!==null){var n=Ke(t);if(n!==null){if(t=n.tag,t===13){if(t=Ka(n),t!==null){e.blockedOn=t,cl(e.priority,function(){ll(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ft=r,n.target.dispatchEvent(r),ft=null}else return t=ti(n),t!==null&&Ws(t),e.blockedOn=n,!1;t.shift()}return!0}function hl(e,t,n){Ui(e)&&n.delete(t)}function Cd(){Zs=!1,zn!==null&&Ui(zn)&&(zn=null),Dn!==null&&Ui(Dn)&&(Dn=null),Un!==null&&Ui(Un)&&(Un=null),Fr.forEach(hl),Br.forEach(hl)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,Zs||(Zs=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Cd)))}function Gr(e){function t(i){return $r(i,e)}if(0<Di.length){$r(Di[0],e);for(var n=1;n<Di.length;n++){var r=Di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zn!==null&&$r(zn,e),Dn!==null&&$r(Dn,e),Un!==null&&$r(Un,e),Fr.forEach(t),Br.forEach(t),n=0;n<In.length;n++)r=In[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)fl(n),n.blockedOn===null&&In.shift()}var hr=we.ReactCurrentBatchConfig,Ii=!0;function zd(e,t,n,r){var i=je,l=hr.transition;hr.transition=null;try{je=1,Qs(e,t,n,r)}finally{je=i,hr.transition=l}}function Dd(e,t,n,r){var i=je,l=hr.transition;hr.transition=null;try{je=4,Qs(e,t,n,r)}finally{je=i,hr.transition=l}}function Qs(e,t,n,r){if(Ii){var i=Ys(e,t,n,r);if(i===null)po(e,t,r,Oi,n),dl(e,r);else if(kd(i,e,t,n,r))r.stopPropagation();else if(dl(e,r),t&4&&-1<Pd.indexOf(e)){for(;i!==null;){var l=ti(i);if(l!==null&&al(l),l=Ys(e,t,n,r),l===null&&po(e,t,r,Oi,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else po(e,t,r,null,n)}}var Oi=null;function Ys(e,t,n,r){if(Oi=null,e=ht(r),e=Xn(e),e!==null)if(t=Ke(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ka(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oi=e,null}function pl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_d()){case Gs:return 1;case rl:return 4;case Ai:case Sd:return 16;case il:return 536870912;default:return 16}default:return 16}}var On=null,Ks=null,Ni=null;function ml(){if(Ni)return Ni;var e,t=Ks,n=t.length,r,i="value"in On?On.value:On.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var m=n-e;for(r=1;r<=m&&t[n-r]===i[l-r];r++);return Ni=i.slice(e,1<r?1-r:void 0)}function bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function gl(){return!1}function $t(e){function t(n,r,i,l,m){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=m,this.currentTarget=null;for(var M in e)e.hasOwnProperty(M)&&(n=e[M],this[M]=n?n(l):l[M]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Fi:gl,this.isPropagationStopped=gl,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=$t(pr),Vr=se({},pr,{view:0,detail:0}),Ud=$t(Vr),Js,eo,jr,Bi=se({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Js=e.screenX-jr.screenX,eo=e.screenY-jr.screenY):eo=Js=0,jr=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:eo}}),vl=$t(Bi),Id=se({},Bi,{dataTransfer:0}),Od=$t(Id),Nd=se({},Vr,{relatedTarget:0}),to=$t(Nd),bd=se({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fd=$t(bd),Bd=se({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hd=$t(Bd),$d=se({},pr,{data:0}),yl=$t($d),Gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jd[e])?!!t[e]:!1}function no(){return qd}var Wd=se({},Vr,{key:function(e){if(e.key){var t=Gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=$t(Wd),Qd=se({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wl=$t(Qd),Yd=se({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),Kd=$t(Yd),Xd=se({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jd=$t(Xd),ef=se({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tf=$t(ef),nf=[9,13,27,32],ro=O&&"CompositionEvent"in window,qr=null;O&&"documentMode"in document&&(qr=document.documentMode);var rf=O&&"TextEvent"in window&&!qr,_l=O&&(!ro||qr&&8<qr&&11>=qr),Sl=" ",xl=!1;function Tl(e,t){switch(e){case"keyup":return nf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function sf(e,t){switch(e){case"compositionend":return Rl(t);case"keypress":return t.which!==32?null:(xl=!0,Sl);case"textInput":return e=t.data,e===Sl&&xl?null:e;default:return null}}function of(e,t){if(mr)return e==="compositionend"||!ro&&Tl(e,t)?(e=ml(),Ni=Ks=On=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _l&&t.locale!=="ko"?null:t.data;default:return null}}var af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!af[e.type]:t==="textarea"}function El(e,t,n,r){wt(r),t=ji(t,"onChange"),0<t.length&&(n=new Xs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wr=null,Zr=null;function lf(e){Vl(e,0)}function Hi(e){var t=_r(e);if(E(t))return e}function uf(e,t){if(e==="change")return t}var Ll=!1;if(O){var io;if(O){var so="oninput"in document;if(!so){var Al=document.createElement("div");Al.setAttribute("oninput","return;"),so=typeof Al.oninput=="function"}io=so}else io=!1;Ll=io&&(!document.documentMode||9<document.documentMode)}function Pl(){Wr&&(Wr.detachEvent("onpropertychange",kl),Zr=Wr=null)}function kl(e){if(e.propertyName==="value"&&Hi(Zr)){var t=[];El(t,Zr,e,ht(e)),Pt(lf,t)}}function cf(e,t,n){e==="focusin"?(Pl(),Wr=t,Zr=n,Wr.attachEvent("onpropertychange",kl)):e==="focusout"&&Pl()}function df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(Zr)}function ff(e,t){if(e==="click")return Hi(t)}function hf(e,t){if(e==="input"||e==="change")return Hi(t)}function pf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:pf;function Qr(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!C.call(t,i)||!en(e[i],t[i]))return!1}return!0}function Cl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zl(e,t){var n=Cl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cl(n)}}function Dl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ul(){for(var e=window,t=F();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=F(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mf(e){var t=Ul(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Dl(n.ownerDocument.documentElement,n)){if(r!==null&&oo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=zl(n,l);var m=zl(n,r);i&&m&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gf=O&&"documentMode"in document&&11>=document.documentMode,gr=null,ao=null,Yr=null,lo=!1;function Il(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lo||gr==null||gr!==F(r)||(r=gr,"selectionStart"in r&&oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&Qr(Yr,r)||(Yr=r,r=ji(ao,"onSelect"),0<r.length&&(t=new Xs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function $i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vr={animationend:$i("Animation","AnimationEnd"),animationiteration:$i("Animation","AnimationIteration"),animationstart:$i("Animation","AnimationStart"),transitionend:$i("Transition","TransitionEnd")},uo={},Ol={};O&&(Ol=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function Gi(e){if(uo[e])return uo[e];if(!vr[e])return e;var t=vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ol)return uo[e]=t[n];return e}var Nl=Gi("animationend"),bl=Gi("animationiteration"),Fl=Gi("animationstart"),Bl=Gi("transitionend"),Hl=new Map,$l="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){Hl.set(e,t),x(t,[e])}for(var co=0;co<$l.length;co++){var fo=$l[co],vf=fo.toLowerCase(),yf=fo[0].toUpperCase()+fo.slice(1);Nn(vf,"on"+yf)}Nn(Nl,"onAnimationEnd"),Nn(bl,"onAnimationIteration"),Nn(Fl,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(Bl,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),x("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),x("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),x("onBeforeInput",["compositionend","keypress","textInput","paste"]),x("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function Gl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Li(r,t,void 0,e),e.currentTarget=null}function Vl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var m=r.length-1;0<=m;m--){var M=r[m],A=M.instance,$=M.currentTarget;if(M=M.listener,A!==l&&i.isPropagationStopped())break e;Gl(i,M,$),l=A}else for(m=0;m<r.length;m++){if(M=r[m],A=M.instance,$=M.currentTarget,M=M.listener,A!==l&&i.isPropagationStopped())break e;Gl(i,M,$),l=A}}}if(_n)throw e=fr,_n=!1,fr=null,e}function Qe(e,t){var n=t[_o];n===void 0&&(n=t[_o]=new Set);var r=e+"__bubble";n.has(r)||(jl(t,e,2,!1),n.add(r))}function ho(e,t,n){var r=0;t&&(r|=4),jl(n,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[Vi]){e[Vi]=!0,y.forEach(function(n){n!=="selectionchange"&&(wf.has(n)||ho(n,!1,e),ho(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,ho("selectionchange",!1,t))}}function jl(e,t,n,r){switch(pl(t)){case 1:var i=zd;break;case 4:i=Dd;break;default:i=Qs}n=i.bind(null,t,n,e),i=void 0,!Cn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function po(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var M=r.stateNode.containerInfo;if(M===i||M.nodeType===8&&M.parentNode===i)break;if(m===4)for(m=r.return;m!==null;){var A=m.tag;if((A===3||A===4)&&(A=m.stateNode.containerInfo,A===i||A.nodeType===8&&A.parentNode===i))return;m=m.return}for(;M!==null;){if(m=Xn(M),m===null)return;if(A=m.tag,A===5||A===6){r=l=m;continue e}M=M.parentNode}}r=r.return}Pt(function(){var $=l,re=ht(n),ie=[];e:{var te=Hl.get(e);if(te!==void 0){var ue=Xs,pe=e;switch(e){case"keypress":if(bi(n)===0)break e;case"keydown":case"keyup":ue=Zd;break;case"focusin":pe="focus",ue=to;break;case"focusout":pe="blur",ue=to;break;case"beforeblur":case"afterblur":ue=to;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=vl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Kd;break;case Nl:case bl:case Fl:ue=Fd;break;case Bl:ue=Jd;break;case"scroll":ue=Ud;break;case"wheel":ue=tf;break;case"copy":case"cut":case"paste":ue=Hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=wl}var me=(t&4)!==0,dt=!me&&e==="scroll",N=me?te!==null?te+"Capture":null:te;me=[];for(var U=$,b;U!==null;){b=U;var oe=b.stateNode;if(b.tag===5&&oe!==null&&(b=oe,N!==null&&(oe=ln(U,N),oe!=null&&me.push(Jr(U,oe,b)))),dt)break;U=U.return}0<me.length&&(te=new ue(te,pe,null,n,re),ie.push({event:te,listeners:me}))}}if(!(t&7)){e:{if(te=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",te&&n!==ft&&(pe=n.relatedTarget||n.fromElement)&&(Xn(pe)||pe[Sn]))break e;if((ue||te)&&(te=re.window===re?re:(te=re.ownerDocument)?te.defaultView||te.parentWindow:window,ue?(pe=n.relatedTarget||n.toElement,ue=$,pe=pe?Xn(pe):null,pe!==null&&(dt=Ke(pe),pe!==dt||pe.tag!==5&&pe.tag!==6)&&(pe=null)):(ue=null,pe=$),ue!==pe)){if(me=vl,oe="onMouseLeave",N="onMouseEnter",U="mouse",(e==="pointerout"||e==="pointerover")&&(me=wl,oe="onPointerLeave",N="onPointerEnter",U="pointer"),dt=ue==null?te:_r(ue),b=pe==null?te:_r(pe),te=new me(oe,U+"leave",ue,n,re),te.target=dt,te.relatedTarget=b,oe=null,Xn(re)===$&&(me=new me(N,U+"enter",pe,n,re),me.target=b,me.relatedTarget=dt,oe=me),dt=oe,ue&&pe)t:{for(me=ue,N=pe,U=0,b=me;b;b=yr(b))U++;for(b=0,oe=N;oe;oe=yr(oe))b++;for(;0<U-b;)me=yr(me),U--;for(;0<b-U;)N=yr(N),b--;for(;U--;){if(me===N||N!==null&&me===N.alternate)break t;me=yr(me),N=yr(N)}me=null}else me=null;ue!==null&&ql(ie,te,ue,me,!1),pe!==null&&dt!==null&&ql(ie,dt,pe,me,!0)}}e:{if(te=$?_r($):window,ue=te.nodeName&&te.nodeName.toLowerCase(),ue==="select"||ue==="input"&&te.type==="file")var ve=uf;else if(Ml(te))if(Ll)ve=hf;else{ve=df;var Se=cf}else(ue=te.nodeName)&&ue.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(ve=ff);if(ve&&(ve=ve(e,$))){El(ie,ve,n,re);break e}Se&&Se(e,te,$),e==="focusout"&&(Se=te._wrapperState)&&Se.controlled&&te.type==="number"&&z(te,"number",te.value)}switch(Se=$?_r($):window,e){case"focusin":(Ml(Se)||Se.contentEditable==="true")&&(gr=Se,ao=$,Yr=null);break;case"focusout":Yr=ao=gr=null;break;case"mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,Il(ie,n,re);break;case"selectionchange":if(gf)break;case"keydown":case"keyup":Il(ie,n,re)}var xe;if(ro)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else mr?Tl(e,n)&&(Le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Le="onCompositionStart");Le&&(_l&&n.locale!=="ko"&&(mr||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&mr&&(xe=ml()):(On=re,Ks="value"in On?On.value:On.textContent,mr=!0)),Se=ji($,Le),0<Se.length&&(Le=new yl(Le,e,null,n,re),ie.push({event:Le,listeners:Se}),xe?Le.data=xe:(xe=Rl(n),xe!==null&&(Le.data=xe)))),(xe=rf?sf(e,n):of(e,n))&&($=ji($,"onBeforeInput"),0<$.length&&(re=new yl("onBeforeInput","beforeinput",null,n,re),ie.push({event:re,listeners:$}),re.data=xe))}Vl(ie,t)})}function Jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ji(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ln(e,n),l!=null&&r.unshift(Jr(e,l,i)),l=ln(e,t),l!=null&&r.push(Jr(e,l,i))),e=e.return}return r}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ql(e,t,n,r,i){for(var l=t._reactName,m=[];n!==null&&n!==r;){var M=n,A=M.alternate,$=M.stateNode;if(A!==null&&A===r)break;M.tag===5&&$!==null&&(M=$,i?(A=ln(n,l),A!=null&&m.unshift(Jr(n,A,M))):i||(A=ln(n,l),A!=null&&m.push(Jr(n,A,M)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var _f=/\r\n?/g,Sf=/\u0000|\uFFFD/g;function Wl(e){return(typeof e=="string"?e:""+e).replace(_f,`
`).replace(Sf,"")}function qi(e,t,n){if(t=Wl(t),Wl(e)!==t&&n)throw Error(c(425))}function Wi(){}var mo=null,go=null;function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,xf=typeof clearTimeout=="function"?clearTimeout:void 0,Zl=typeof Promise=="function"?Promise:void 0,Tf=typeof queueMicrotask=="function"?queueMicrotask:typeof Zl<"u"?function(e){return Zl.resolve(null).then(e).catch(Rf)}:yo;function Rf(e){setTimeout(function(){throw e})}function wo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gr(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ql(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),fn="__reactFiber$"+wr,ei="__reactProps$"+wr,Sn="__reactContainer$"+wr,_o="__reactEvents$"+wr,Mf="__reactListeners$"+wr,Ef="__reactHandles$"+wr;function Xn(e){var t=e[fn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Sn]||n[fn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ql(e);e!==null;){if(n=e[fn])return n;e=Ql(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[fn]||e[Sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Zi(e){return e[ei]||null}var So=[],Sr=-1;function Fn(e){return{current:e}}function Ye(e){0>Sr||(e.current=So[Sr],So[Sr]=null,Sr--)}function Ze(e,t){Sr++,So[Sr]=e.current,e.current=t}var Bn={},kt=Fn(Bn),Ot=Fn(!1),Jn=Bn;function xr(e,t){var n=e.type.contextTypes;if(!n)return Bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(e){return e=e.childContextTypes,e!=null}function Qi(){Ye(Ot),Ye(kt)}function Yl(e,t,n){if(kt.current!==Bn)throw Error(c(168));Ze(kt,t),Ze(Ot,n)}function Kl(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(c(108,f(e)||"Unknown",i));return se({},n,r)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,Jn=kt.current,Ze(kt,e),Ze(Ot,Ot.current),!0}function Xl(e,t,n){var r=e.stateNode;if(!r)throw Error(c(169));n?(e=Kl(e,t,Jn),r.__reactInternalMemoizedMergedChildContext=e,Ye(Ot),Ye(kt),Ze(kt,e)):Ye(Ot),Ze(Ot,n)}var xn=null,Ki=!1,xo=!1;function Jl(e){xn===null?xn=[e]:xn.push(e)}function Lf(e){Ki=!0,Jl(e)}function Hn(){if(!xo&&xn!==null){xo=!0;var e=0,t=je;try{var n=xn;for(je=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xn=null,Ki=!1}catch(i){throw xn!==null&&(xn=xn.slice(e+1)),tl(Gs,Hn),i}finally{je=t,xo=!1}}return null}var Tr=[],Rr=0,Xi=null,Ji=0,Wt=[],Zt=0,er=null,Tn=1,Rn="";function tr(e,t){Tr[Rr++]=Ji,Tr[Rr++]=Xi,Xi=e,Ji=t}function eu(e,t,n){Wt[Zt++]=Tn,Wt[Zt++]=Rn,Wt[Zt++]=er,er=e;var r=Tn;e=Rn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var l=32-Jt(t)+i;if(30<l){var m=i-i%5;l=(r&(1<<m)-1).toString(32),r>>=m,i-=m,Tn=1<<32-Jt(t)+i|n<<i|r,Rn=l+e}else Tn=1<<l|n<<i|r,Rn=e}function To(e){e.return!==null&&(tr(e,1),eu(e,1,0))}function Ro(e){for(;e===Xi;)Xi=Tr[--Rr],Tr[Rr]=null,Ji=Tr[--Rr],Tr[Rr]=null;for(;e===er;)er=Wt[--Zt],Wt[Zt]=null,Rn=Wt[--Zt],Wt[Zt]=null,Tn=Wt[--Zt],Wt[Zt]=null}var Gt=null,Vt=null,Xe=!1,tn=null;function tu(e,t){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Gt=e,Vt=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Gt=e,Vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=er!==null?{id:Tn,overflow:Rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Gt=e,Vt=null,!0):!1;default:return!1}}function Mo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Eo(e){if(Xe){var t=Vt;if(t){var n=t;if(!nu(e,t)){if(Mo(e))throw Error(c(418));t=bn(n.nextSibling);var r=Gt;t&&nu(e,t)?tu(r,n):(e.flags=e.flags&-4097|2,Xe=!1,Gt=e)}}else{if(Mo(e))throw Error(c(418));e.flags=e.flags&-4097|2,Xe=!1,Gt=e}}}function ru(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Gt=e}function es(e){if(e!==Gt)return!1;if(!Xe)return ru(e),Xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vo(e.type,e.memoizedProps)),t&&(t=Vt)){if(Mo(e))throw iu(),Error(c(418));for(;t;)tu(e,t),t=bn(t.nextSibling)}if(ru(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Vt=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Vt=null}}else Vt=Gt?bn(e.stateNode.nextSibling):null;return!0}function iu(){for(var e=Vt;e;)e=bn(e.nextSibling)}function Mr(){Vt=Gt=null,Xe=!1}function Lo(e){tn===null?tn=[e]:tn.push(e)}var Af=we.ReactCurrentBatchConfig;function ni(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var r=n.stateNode}if(!r)throw Error(c(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(m){var M=i.refs;m===null?delete M[l]:M[l]=m},t._stringRef=l,t)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function ts(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function su(e){var t=e._init;return t(e._payload)}function ou(e){function t(N,U){if(e){var b=N.deletions;b===null?(N.deletions=[U],N.flags|=16):b.push(U)}}function n(N,U){if(!e)return null;for(;U!==null;)t(N,U),U=U.sibling;return null}function r(N,U){for(N=new Map;U!==null;)U.key!==null?N.set(U.key,U):N.set(U.index,U),U=U.sibling;return N}function i(N,U){return N=Qn(N,U),N.index=0,N.sibling=null,N}function l(N,U,b){return N.index=b,e?(b=N.alternate,b!==null?(b=b.index,b<U?(N.flags|=2,U):b):(N.flags|=2,U)):(N.flags|=1048576,U)}function m(N){return e&&N.alternate===null&&(N.flags|=2),N}function M(N,U,b,oe){return U===null||U.tag!==6?(U=ya(b,N.mode,oe),U.return=N,U):(U=i(U,b),U.return=N,U)}function A(N,U,b,oe){var ve=b.type;return ve===Ne?re(N,U,b.props.children,oe,b.key):U!==null&&(U.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Ve&&su(ve)===U.type)?(oe=i(U,b.props),oe.ref=ni(N,U,b),oe.return=N,oe):(oe=Ms(b.type,b.key,b.props,null,N.mode,oe),oe.ref=ni(N,U,b),oe.return=N,oe)}function $(N,U,b,oe){return U===null||U.tag!==4||U.stateNode.containerInfo!==b.containerInfo||U.stateNode.implementation!==b.implementation?(U=wa(b,N.mode,oe),U.return=N,U):(U=i(U,b.children||[]),U.return=N,U)}function re(N,U,b,oe,ve){return U===null||U.tag!==7?(U=ur(b,N.mode,oe,ve),U.return=N,U):(U=i(U,b),U.return=N,U)}function ie(N,U,b){if(typeof U=="string"&&U!==""||typeof U=="number")return U=ya(""+U,N.mode,b),U.return=N,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case ke:return b=Ms(U.type,U.key,U.props,null,N.mode,b),b.ref=ni(N,null,U),b.return=N,b;case Oe:return U=wa(U,N.mode,b),U.return=N,U;case Ve:var oe=U._init;return ie(N,oe(U._payload),b)}if(B(U)||ge(U))return U=ur(U,N.mode,b,null),U.return=N,U;ts(N,U)}return null}function te(N,U,b,oe){var ve=U!==null?U.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ve!==null?null:M(N,U,""+b,oe);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ke:return b.key===ve?A(N,U,b,oe):null;case Oe:return b.key===ve?$(N,U,b,oe):null;case Ve:return ve=b._init,te(N,U,ve(b._payload),oe)}if(B(b)||ge(b))return ve!==null?null:re(N,U,b,oe,null);ts(N,b)}return null}function ue(N,U,b,oe,ve){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return N=N.get(b)||null,M(U,N,""+oe,ve);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case ke:return N=N.get(oe.key===null?b:oe.key)||null,A(U,N,oe,ve);case Oe:return N=N.get(oe.key===null?b:oe.key)||null,$(U,N,oe,ve);case Ve:var Se=oe._init;return ue(N,U,b,Se(oe._payload),ve)}if(B(oe)||ge(oe))return N=N.get(b)||null,re(U,N,oe,ve,null);ts(U,oe)}return null}function pe(N,U,b,oe){for(var ve=null,Se=null,xe=U,Le=U=0,Rt=null;xe!==null&&Le<b.length;Le++){xe.index>Le?(Rt=xe,xe=null):Rt=xe.sibling;var Ge=te(N,xe,b[Le],oe);if(Ge===null){xe===null&&(xe=Rt);break}e&&xe&&Ge.alternate===null&&t(N,xe),U=l(Ge,U,Le),Se===null?ve=Ge:Se.sibling=Ge,Se=Ge,xe=Rt}if(Le===b.length)return n(N,xe),Xe&&tr(N,Le),ve;if(xe===null){for(;Le<b.length;Le++)xe=ie(N,b[Le],oe),xe!==null&&(U=l(xe,U,Le),Se===null?ve=xe:Se.sibling=xe,Se=xe);return Xe&&tr(N,Le),ve}for(xe=r(N,xe);Le<b.length;Le++)Rt=ue(xe,N,Le,b[Le],oe),Rt!==null&&(e&&Rt.alternate!==null&&xe.delete(Rt.key===null?Le:Rt.key),U=l(Rt,U,Le),Se===null?ve=Rt:Se.sibling=Rt,Se=Rt);return e&&xe.forEach(function(Yn){return t(N,Yn)}),Xe&&tr(N,Le),ve}function me(N,U,b,oe){var ve=ge(b);if(typeof ve!="function")throw Error(c(150));if(b=ve.call(b),b==null)throw Error(c(151));for(var Se=ve=null,xe=U,Le=U=0,Rt=null,Ge=b.next();xe!==null&&!Ge.done;Le++,Ge=b.next()){xe.index>Le?(Rt=xe,xe=null):Rt=xe.sibling;var Yn=te(N,xe,Ge.value,oe);if(Yn===null){xe===null&&(xe=Rt);break}e&&xe&&Yn.alternate===null&&t(N,xe),U=l(Yn,U,Le),Se===null?ve=Yn:Se.sibling=Yn,Se=Yn,xe=Rt}if(Ge.done)return n(N,xe),Xe&&tr(N,Le),ve;if(xe===null){for(;!Ge.done;Le++,Ge=b.next())Ge=ie(N,Ge.value,oe),Ge!==null&&(U=l(Ge,U,Le),Se===null?ve=Ge:Se.sibling=Ge,Se=Ge);return Xe&&tr(N,Le),ve}for(xe=r(N,xe);!Ge.done;Le++,Ge=b.next())Ge=ue(xe,N,Le,Ge.value,oe),Ge!==null&&(e&&Ge.alternate!==null&&xe.delete(Ge.key===null?Le:Ge.key),U=l(Ge,U,Le),Se===null?ve=Ge:Se.sibling=Ge,Se=Ge);return e&&xe.forEach(function(oh){return t(N,oh)}),Xe&&tr(N,Le),ve}function dt(N,U,b,oe){if(typeof b=="object"&&b!==null&&b.type===Ne&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ke:e:{for(var ve=b.key,Se=U;Se!==null;){if(Se.key===ve){if(ve=b.type,ve===Ne){if(Se.tag===7){n(N,Se.sibling),U=i(Se,b.props.children),U.return=N,N=U;break e}}else if(Se.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Ve&&su(ve)===Se.type){n(N,Se.sibling),U=i(Se,b.props),U.ref=ni(N,Se,b),U.return=N,N=U;break e}n(N,Se);break}else t(N,Se);Se=Se.sibling}b.type===Ne?(U=ur(b.props.children,N.mode,oe,b.key),U.return=N,N=U):(oe=Ms(b.type,b.key,b.props,null,N.mode,oe),oe.ref=ni(N,U,b),oe.return=N,N=oe)}return m(N);case Oe:e:{for(Se=b.key;U!==null;){if(U.key===Se)if(U.tag===4&&U.stateNode.containerInfo===b.containerInfo&&U.stateNode.implementation===b.implementation){n(N,U.sibling),U=i(U,b.children||[]),U.return=N,N=U;break e}else{n(N,U);break}else t(N,U);U=U.sibling}U=wa(b,N.mode,oe),U.return=N,N=U}return m(N);case Ve:return Se=b._init,dt(N,U,Se(b._payload),oe)}if(B(b))return pe(N,U,b,oe);if(ge(b))return me(N,U,b,oe);ts(N,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,U!==null&&U.tag===6?(n(N,U.sibling),U=i(U,b),U.return=N,N=U):(n(N,U),U=ya(b,N.mode,oe),U.return=N,N=U),m(N)):n(N,U)}return dt}var Er=ou(!0),au=ou(!1),ns=Fn(null),rs=null,Lr=null,Ao=null;function Po(){Ao=Lr=rs=null}function ko(e){var t=ns.current;Ye(ns),e._currentValue=t}function Co(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ar(e,t){rs=e,Ao=Lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(bt=!0),e.firstContext=null)}function Qt(e){var t=e._currentValue;if(Ao!==e)if(e={context:e,memoizedValue:t,next:null},Lr===null){if(rs===null)throw Error(c(308));Lr=e,rs.dependencies={lanes:0,firstContext:e}}else Lr=Lr.next=e;return t}var nr=null;function zo(e){nr===null?nr=[e]:nr.push(e)}function lu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,zo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mn(e,r)}function Mn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $n=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$e&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mn(e,n)}return i=r.interleaved,i===null?(t.next=t,zo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mn(e,n)}function is(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}function cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var m={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=m:l=l.next=m,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ss(e,t,n,r){var i=e.updateQueue;$n=!1;var l=i.firstBaseUpdate,m=i.lastBaseUpdate,M=i.shared.pending;if(M!==null){i.shared.pending=null;var A=M,$=A.next;A.next=null,m===null?l=$:m.next=$,m=A;var re=e.alternate;re!==null&&(re=re.updateQueue,M=re.lastBaseUpdate,M!==m&&(M===null?re.firstBaseUpdate=$:M.next=$,re.lastBaseUpdate=A))}if(l!==null){var ie=i.baseState;m=0,re=$=A=null,M=l;do{var te=M.lane,ue=M.eventTime;if((r&te)===te){re!==null&&(re=re.next={eventTime:ue,lane:0,tag:M.tag,payload:M.payload,callback:M.callback,next:null});e:{var pe=e,me=M;switch(te=t,ue=n,me.tag){case 1:if(pe=me.payload,typeof pe=="function"){ie=pe.call(ue,ie,te);break e}ie=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=me.payload,te=typeof pe=="function"?pe.call(ue,ie,te):pe,te==null)break e;ie=se({},ie,te);break e;case 2:$n=!0}}M.callback!==null&&M.lane!==0&&(e.flags|=64,te=i.effects,te===null?i.effects=[M]:te.push(M))}else ue={eventTime:ue,lane:te,tag:M.tag,payload:M.payload,callback:M.callback,next:null},re===null?($=re=ue,A=ie):re=re.next=ue,m|=te;if(M=M.next,M===null){if(M=i.shared.pending,M===null)break;te=M,M=te.next,te.next=null,i.lastBaseUpdate=te,i.shared.pending=null}}while(!0);if(re===null&&(A=ie),i.baseState=A,i.firstBaseUpdate=$,i.lastBaseUpdate=re,t=i.shared.interleaved,t!==null){i=t;do m|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);sr|=m,e.lanes=m,e.memoizedState=ie}}function du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(c(191,i));i.call(r)}}}var ri={},hn=Fn(ri),ii=Fn(ri),si=Fn(ri);function rr(e){if(e===ri)throw Error(c(174));return e}function Uo(e,t){switch(Ze(si,t),Ze(ii,e),Ze(hn,ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Z(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Z(t,e)}Ye(hn),Ze(hn,t)}function Pr(){Ye(hn),Ye(ii),Ye(si)}function fu(e){rr(si.current);var t=rr(hn.current),n=Z(t,e.type);t!==n&&(Ze(ii,e),Ze(hn,n))}function Io(e){ii.current===e&&(Ye(hn),Ye(ii))}var it=Fn(0);function os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oo=[];function No(){for(var e=0;e<Oo.length;e++)Oo[e]._workInProgressVersionPrimary=null;Oo.length=0}var as=we.ReactCurrentDispatcher,bo=we.ReactCurrentBatchConfig,ir=0,st=null,gt=null,xt=null,ls=!1,oi=!1,ai=0,Pf=0;function Ct(){throw Error(c(321))}function Fo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!en(e[n],t[n]))return!1;return!0}function Bo(e,t,n,r,i,l){if(ir=l,st=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,as.current=e===null||e.memoizedState===null?Df:Uf,e=n(r,i),oi){l=0;do{if(oi=!1,ai=0,25<=l)throw Error(c(301));l+=1,xt=gt=null,t.updateQueue=null,as.current=If,e=n(r,i)}while(oi)}if(as.current=ds,t=gt!==null&&gt.next!==null,ir=0,xt=gt=st=null,ls=!1,t)throw Error(c(300));return e}function Ho(){var e=ai!==0;return ai=0,e}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?st.memoizedState=xt=e:xt=xt.next=e,xt}function Yt(){if(gt===null){var e=st.alternate;e=e!==null?e.memoizedState:null}else e=gt.next;var t=xt===null?st.memoizedState:xt.next;if(t!==null)xt=t,gt=e;else{if(e===null)throw Error(c(310));gt=e,e={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},xt===null?st.memoizedState=xt=e:xt=xt.next=e}return xt}function li(e,t){return typeof t=="function"?t(e):t}function $o(e){var t=Yt(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=gt,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var m=i.next;i.next=l.next,l.next=m}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var M=m=null,A=null,$=l;do{var re=$.lane;if((ir&re)===re)A!==null&&(A=A.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),r=$.hasEagerState?$.eagerState:e(r,$.action);else{var ie={lane:re,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};A===null?(M=A=ie,m=r):A=A.next=ie,st.lanes|=re,sr|=re}$=$.next}while($!==null&&$!==l);A===null?m=r:A.next=M,en(r,t.memoizedState)||(bt=!0),t.memoizedState=r,t.baseState=m,t.baseQueue=A,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,st.lanes|=l,sr|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Go(e){var t=Yt(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var m=i=i.next;do l=e(l,m.action),m=m.next;while(m!==i);en(l,t.memoizedState)||(bt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function hu(){}function pu(e,t){var n=st,r=Yt(),i=t(),l=!en(r.memoizedState,i);if(l&&(r.memoizedState=i,bt=!0),r=r.queue,Vo(vu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||xt!==null&&xt.memoizedState.tag&1){if(n.flags|=2048,ui(9,gu.bind(null,n,r,i,t),void 0,null),Tt===null)throw Error(c(349));ir&30||mu(n,t,i)}return i}function mu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=st.updateQueue,t===null?(t={lastEffect:null,stores:null},st.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gu(e,t,n,r){t.value=n,t.getSnapshot=r,yu(t)&&wu(e)}function vu(e,t,n){return n(function(){yu(t)&&wu(e)})}function yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!en(e,n)}catch{return!0}}function wu(e){var t=Mn(e,1);t!==null&&on(t,e,1,-1)}function _u(e){var t=pn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:e},t.queue=e,e=e.dispatch=zf.bind(null,st,e),[t.memoizedState,e]}function ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=st.updateQueue,t===null?(t={lastEffect:null,stores:null},st.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Su(){return Yt().memoizedState}function us(e,t,n,r){var i=pn();st.flags|=e,i.memoizedState=ui(1|t,n,void 0,r===void 0?null:r)}function cs(e,t,n,r){var i=Yt();r=r===void 0?null:r;var l=void 0;if(gt!==null){var m=gt.memoizedState;if(l=m.destroy,r!==null&&Fo(r,m.deps)){i.memoizedState=ui(t,n,l,r);return}}st.flags|=e,i.memoizedState=ui(1|t,n,l,r)}function xu(e,t){return us(8390656,8,e,t)}function Vo(e,t){return cs(2048,8,e,t)}function Tu(e,t){return cs(4,2,e,t)}function Ru(e,t){return cs(4,4,e,t)}function Mu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eu(e,t,n){return n=n!=null?n.concat([e]):null,cs(4,4,Mu.bind(null,t,e),n)}function jo(){}function Lu(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Au(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pu(e,t,n){return ir&21?(en(n,t)||(n=sl(),st.lanes|=n,sr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,bt=!0),e.memoizedState=n)}function kf(e,t){var n=je;je=n!==0&&4>n?n:4,e(!0);var r=bo.transition;bo.transition={};try{e(!1),t()}finally{je=n,bo.transition=r}}function ku(){return Yt().memoizedState}function Cf(e,t,n){var r=Wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cu(e))zu(t,n);else if(n=lu(e,t,n,r),n!==null){var i=It();on(n,e,r,i),Du(n,t,r)}}function zf(e,t,n){var r=Wn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))zu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var m=t.lastRenderedState,M=l(m,n);if(i.hasEagerState=!0,i.eagerState=M,en(M,m)){var A=t.interleaved;A===null?(i.next=i,zo(t)):(i.next=A.next,A.next=i),t.interleaved=i;return}}catch{}finally{}n=lu(e,t,i,r),n!==null&&(i=It(),on(n,e,r,i),Du(n,t,r))}}function Cu(e){var t=e.alternate;return e===st||t!==null&&t===st}function zu(e,t){oi=ls=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Du(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}var ds={readContext:Qt,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},Df={readContext:Qt,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,us(4194308,4,Mu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){return us(4,2,e,t)},useMemo:function(e,t){var n=pn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cf.bind(null,st,e),[r.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:_u,useDebugValue:jo,useDeferredValue:function(e){return pn().memoizedState=e},useTransition:function(){var e=_u(!1),t=e[0];return e=kf.bind(null,e[1]),pn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=st,i=pn();if(Xe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Tt===null)throw Error(c(349));ir&30||mu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,xu(vu.bind(null,r,l,e),[e]),r.flags|=2048,ui(9,gu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=pn(),t=Tt.identifierPrefix;if(Xe){var n=Rn,r=Tn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uf={readContext:Qt,useCallback:Lu,useContext:Qt,useEffect:Vo,useImperativeHandle:Eu,useInsertionEffect:Tu,useLayoutEffect:Ru,useMemo:Au,useReducer:$o,useRef:Su,useState:function(){return $o(li)},useDebugValue:jo,useDeferredValue:function(e){var t=Yt();return Pu(t,gt.memoizedState,e)},useTransition:function(){var e=$o(li)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:hu,useSyncExternalStore:pu,useId:ku,unstable_isNewReconciler:!1},If={readContext:Qt,useCallback:Lu,useContext:Qt,useEffect:Vo,useImperativeHandle:Eu,useInsertionEffect:Tu,useLayoutEffect:Ru,useMemo:Au,useReducer:Go,useRef:Su,useState:function(){return Go(li)},useDebugValue:jo,useDeferredValue:function(e){var t=Yt();return gt===null?t.memoizedState=e:Pu(t,gt.memoizedState,e)},useTransition:function(){var e=Go(li)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:hu,useSyncExternalStore:pu,useId:ku,unstable_isNewReconciler:!1};function nn(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function qo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fs={isMounted:function(e){return(e=e._reactInternals)?Ke(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=It(),i=Wn(e),l=En(r,i);l.payload=t,n!=null&&(l.callback=n),t=Gn(e,l,i),t!==null&&(on(t,e,i,r),is(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=It(),i=Wn(e),l=En(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Gn(e,l,i),t!==null&&(on(t,e,i,r),is(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=It(),r=Wn(e),i=En(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gn(e,i,r),t!==null&&(on(t,e,r,n),is(t,e,r))}};function Uu(e,t,n,r,i,l,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,m):t.prototype&&t.prototype.isPureReactComponent?!Qr(n,r)||!Qr(i,l):!0}function Iu(e,t,n){var r=!1,i=Bn,l=t.contextType;return typeof l=="object"&&l!==null?l=Qt(l):(i=Nt(t)?Jn:kt.current,r=t.contextTypes,l=(r=r!=null)?xr(e,i):Bn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fs.enqueueReplaceState(t,t.state,null)}function Wo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Do(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Qt(l):(l=Nt(t)?Jn:kt.current,i.context=xr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(qo(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fs.enqueueReplaceState(i,i.state,null),ss(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function kr(e,t){try{var n="",r=t;do n+=Pe(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Zo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Of=typeof WeakMap=="function"?WeakMap:Map;function Nu(e,t,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ws||(ws=!0,ca=r),Qo(e,t)},n}function bu(e,t,n){n=En(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Qo(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Qo(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),n}function Fu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Of;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Yf.bind(null,e,t,n),t.then(e,e))}function Bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=En(-1,1),t.tag=2,Gn(n,t,1))),n.lanes|=1),e)}var Nf=we.ReactCurrentOwner,bt=!1;function Ut(e,t,n,r){t.child=e===null?au(t,null,n,r):Er(t,e.child,n,r)}function $u(e,t,n,r,i){n=n.render;var l=t.ref;return Ar(t,i),r=Bo(e,t,n,r,l,i),n=Ho(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ln(e,t,i)):(Xe&&n&&To(t),t.flags|=1,Ut(e,t,r,i),t.child)}function Gu(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!va(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Vu(e,t,l,r,i)):(e=Ms(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var m=l.memoizedProps;if(n=n.compare,n=n!==null?n:Qr,n(m,r)&&e.ref===t.ref)return Ln(e,t,i)}return t.flags|=1,e=Qn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Vu(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Qr(l,r)&&e.ref===t.ref)if(bt=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(bt=!0);else return t.lanes=e.lanes,Ln(e,t,i)}return Yo(e,t,n,r,i)}function ju(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(zr,jt),jt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ze(zr,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Ze(zr,jt),jt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Ze(zr,jt),jt|=r;return Ut(e,t,i,n),t.child}function qu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yo(e,t,n,r,i){var l=Nt(n)?Jn:kt.current;return l=xr(t,l),Ar(t,i),n=Bo(e,t,n,r,l,i),r=Ho(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ln(e,t,i)):(Xe&&r&&To(t),t.flags|=1,Ut(e,t,n,i),t.child)}function Wu(e,t,n,r,i){if(Nt(n)){var l=!0;Yi(t)}else l=!1;if(Ar(t,i),t.stateNode===null)ps(e,t),Iu(t,n,r),Wo(t,n,r,i),r=!0;else if(e===null){var m=t.stateNode,M=t.memoizedProps;m.props=M;var A=m.context,$=n.contextType;typeof $=="object"&&$!==null?$=Qt($):($=Nt(n)?Jn:kt.current,$=xr(t,$));var re=n.getDerivedStateFromProps,ie=typeof re=="function"||typeof m.getSnapshotBeforeUpdate=="function";ie||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==r||A!==$)&&Ou(t,m,r,$),$n=!1;var te=t.memoizedState;m.state=te,ss(t,r,m,i),A=t.memoizedState,M!==r||te!==A||Ot.current||$n?(typeof re=="function"&&(qo(t,n,re,r),A=t.memoizedState),(M=$n||Uu(t,n,M,r,te,A,$))?(ie||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=A),m.props=r,m.state=A,m.context=$,r=M):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{m=t.stateNode,uu(e,t),M=t.memoizedProps,$=t.type===t.elementType?M:nn(t.type,M),m.props=$,ie=t.pendingProps,te=m.context,A=n.contextType,typeof A=="object"&&A!==null?A=Qt(A):(A=Nt(n)?Jn:kt.current,A=xr(t,A));var ue=n.getDerivedStateFromProps;(re=typeof ue=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==ie||te!==A)&&Ou(t,m,r,A),$n=!1,te=t.memoizedState,m.state=te,ss(t,r,m,i);var pe=t.memoizedState;M!==ie||te!==pe||Ot.current||$n?(typeof ue=="function"&&(qo(t,n,ue,r),pe=t.memoizedState),($=$n||Uu(t,n,$,r,te,pe,A)||!1)?(re||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,pe,A),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,pe,A)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=pe),m.props=r,m.state=pe,m.context=A,r=$):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),r=!1)}return Ko(e,t,n,r,l,i)}function Ko(e,t,n,r,i,l){qu(e,t);var m=(t.flags&128)!==0;if(!r&&!m)return i&&Xl(t,n,!1),Ln(e,t,l);r=t.stateNode,Nf.current=t;var M=m&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&m?(t.child=Er(t,e.child,null,l),t.child=Er(t,null,M,l)):Ut(e,t,M,l),t.memoizedState=r.state,i&&Xl(t,n,!0),t.child}function Zu(e){var t=e.stateNode;t.pendingContext?Yl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yl(e,t.context,!1),Uo(e,t.containerInfo)}function Qu(e,t,n,r,i){return Mr(),Lo(i),t.flags|=256,Ut(e,t,n,r),t.child}var Xo={dehydrated:null,treeContext:null,retryLane:0};function Jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yu(e,t,n){var r=t.pendingProps,i=it.current,l=!1,m=(t.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(i&2)!==0),M?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ze(it,i&1),e===null)return Eo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(m=r.children,e=r.fallback,l?(r=t.mode,l=t.child,m={mode:"hidden",children:m},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=m):l=Es(m,r,0,null),e=ur(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Jo(n),t.memoizedState=Xo,e):ea(t,m));if(i=e.memoizedState,i!==null&&(M=i.dehydrated,M!==null))return bf(e,t,m,r,M,i,n);if(l){l=r.fallback,m=t.mode,i=e.child,M=i.sibling;var A={mode:"hidden",children:r.children};return!(m&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=A,t.deletions=null):(r=Qn(i,A),r.subtreeFlags=i.subtreeFlags&14680064),M!==null?l=Qn(M,l):(l=ur(l,m,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,m=e.child.memoizedState,m=m===null?Jo(n):{baseLanes:m.baseLanes|n,cachePool:null,transitions:m.transitions},l.memoizedState=m,l.childLanes=e.childLanes&~n,t.memoizedState=Xo,r}return l=e.child,e=l.sibling,r=Qn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ea(e,t){return t=Es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hs(e,t,n,r){return r!==null&&Lo(r),Er(t,e.child,null,n),e=ea(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bf(e,t,n,r,i,l,m){if(n)return t.flags&256?(t.flags&=-257,r=Zo(Error(c(422))),hs(e,t,m,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Es({mode:"visible",children:r.children},i,0,null),l=ur(l,i,m,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Er(t,e.child,null,m),t.child.memoizedState=Jo(m),t.memoizedState=Xo,l);if(!(t.mode&1))return hs(e,t,m,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var M=r.dgst;return r=M,l=Error(c(419)),r=Zo(l,r,void 0),hs(e,t,m,r)}if(M=(m&e.childLanes)!==0,bt||M){if(r=Tt,r!==null){switch(m&-m){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|m)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Mn(e,i),on(r,e,i,-1))}return ga(),r=Zo(Error(c(421))),hs(e,t,m,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Vt=bn(i.nextSibling),Gt=t,Xe=!0,tn=null,e!==null&&(Wt[Zt++]=Tn,Wt[Zt++]=Rn,Wt[Zt++]=er,Tn=e.id,Rn=e.overflow,er=t),t=ea(t,r.children),t.flags|=4096,t)}function Ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Co(e.return,t,n)}function ta(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Xu(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Ut(e,t,r.children,n),r=it.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ku(e,n,t);else if(e.tag===19)Ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ze(it,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&os(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ta(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&os(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ta(t,!0,n,null,l);break;case"together":ta(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ps(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ff(e,t,n){switch(t.tag){case 3:Zu(t),Mr();break;case 5:fu(t);break;case 1:Nt(t.type)&&Yi(t);break;case 4:Uo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ze(ns,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ze(it,it.current&1),t.flags|=128,null):n&t.child.childLanes?Yu(e,t,n):(Ze(it,it.current&1),e=Ln(e,t,n),e!==null?e.sibling:null);Ze(it,it.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ze(it,it.current),r)break;return null;case 22:case 23:return t.lanes=0,ju(e,t,n)}return Ln(e,t,n)}var Ju,na,ec,tc;Ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},na=function(){},ec=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rr(hn.current);var l=null;switch(n){case"input":i=a(e,i),r=a(e,r),l=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),l=[];break;case"textarea":i=S(e,i),r=S(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wi)}tt(n,r);var m;n=null;for($ in i)if(!r.hasOwnProperty($)&&i.hasOwnProperty($)&&i[$]!=null)if($==="style"){var M=i[$];for(m in M)M.hasOwnProperty(m)&&(n||(n={}),n[m]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(w.hasOwnProperty($)?l||(l=[]):(l=l||[]).push($,null));for($ in r){var A=r[$];if(M=i!=null?i[$]:void 0,r.hasOwnProperty($)&&A!==M&&(A!=null||M!=null))if($==="style")if(M){for(m in M)!M.hasOwnProperty(m)||A&&A.hasOwnProperty(m)||(n||(n={}),n[m]="");for(m in A)A.hasOwnProperty(m)&&M[m]!==A[m]&&(n||(n={}),n[m]=A[m])}else n||(l||(l=[]),l.push($,n)),n=A;else $==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,M=M?M.__html:void 0,A!=null&&M!==A&&(l=l||[]).push($,A)):$==="children"?typeof A!="string"&&typeof A!="number"||(l=l||[]).push($,""+A):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(w.hasOwnProperty($)?(A!=null&&$==="onScroll"&&Qe("scroll",e),l||M===A||(l=[])):(l=l||[]).push($,A))}n&&(l=l||[]).push("style",n);var $=l;(t.updateQueue=$)&&(t.flags|=4)}},tc=function(e,t,n,r){n!==r&&(t.flags|=4)};function ci(e,t){if(!Xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function zt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bf(e,t,n){var r=t.pendingProps;switch(Ro(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(t),null;case 1:return Nt(t.type)&&Qi(),zt(t),null;case 3:return r=t.stateNode,Pr(),Ye(Ot),Ye(kt),No(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tn!==null&&(ha(tn),tn=null))),na(e,t),zt(t),null;case 5:Io(t);var i=rr(si.current);if(n=t.type,e!==null&&t.stateNode!=null)ec(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(c(166));return zt(t),null}if(e=rr(hn.current),es(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[fn]=t,r[ei]=l,e=(t.mode&1)!==0,n){case"dialog":Qe("cancel",r),Qe("close",r);break;case"iframe":case"object":case"embed":Qe("load",r);break;case"video":case"audio":for(i=0;i<Kr.length;i++)Qe(Kr[i],r);break;case"source":Qe("error",r);break;case"img":case"image":case"link":Qe("error",r),Qe("load",r);break;case"details":Qe("toggle",r);break;case"input":g(r,l),Qe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Qe("invalid",r);break;case"textarea":P(r,l),Qe("invalid",r)}tt(n,l),i=null;for(var m in l)if(l.hasOwnProperty(m)){var M=l[m];m==="children"?typeof M=="string"?r.textContent!==M&&(l.suppressHydrationWarning!==!0&&qi(r.textContent,M,e),i=["children",M]):typeof M=="number"&&r.textContent!==""+M&&(l.suppressHydrationWarning!==!0&&qi(r.textContent,M,e),i=["children",""+M]):w.hasOwnProperty(m)&&M!=null&&m==="onScroll"&&Qe("scroll",r)}switch(n){case"input":T(r),_(r,l,!0);break;case"textarea":T(r),H(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Wi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{m=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=V(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=m.createElement(n,{is:r.is}):(e=m.createElement(n),n==="select"&&(m=e,r.multiple?m.multiple=!0:r.size&&(m.size=r.size))):e=m.createElementNS(e,n),e[fn]=t,e[ei]=r,Ju(e,t,!1,!1),t.stateNode=e;e:{switch(m=ut(n,r),n){case"dialog":Qe("cancel",e),Qe("close",e),i=r;break;case"iframe":case"object":case"embed":Qe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kr.length;i++)Qe(Kr[i],e);i=r;break;case"source":Qe("error",e),i=r;break;case"img":case"image":case"link":Qe("error",e),Qe("load",e),i=r;break;case"details":Qe("toggle",e),i=r;break;case"input":g(e,r),i=a(e,r),Qe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Qe("invalid",e);break;case"textarea":P(e,r),i=S(e,r),Qe("invalid",e);break;default:i=r}tt(n,i),M=i;for(l in M)if(M.hasOwnProperty(l)){var A=M[l];l==="style"?We(e,A):l==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Me(e,A)):l==="children"?typeof A=="string"?(n!=="textarea"||A!=="")&&ce(e,A):typeof A=="number"&&ce(e,""+A):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(w.hasOwnProperty(l)?A!=null&&l==="onScroll"&&Qe("scroll",e):A!=null&&le(e,l,A,m))}switch(n){case"input":T(e),_(e,r,!1);break;case"textarea":T(e),H(e);break;case"option":r.value!=null&&e.setAttribute("value",""+R(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?v(e,!!r.multiple,l,!1):r.defaultValue!=null&&v(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return zt(t),null;case 6:if(e&&t.stateNode!=null)tc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(n=rr(si.current),rr(hn.current),es(t)){if(r=t.stateNode,n=t.memoizedProps,r[fn]=t,(l=r.nodeValue!==n)&&(e=Gt,e!==null))switch(e.tag){case 3:qi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=t,t.stateNode=r}return zt(t),null;case 13:if(Ye(it),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Xe&&Vt!==null&&t.mode&1&&!(t.flags&128))iu(),Mr(),t.flags|=98560,l=!1;else if(l=es(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[fn]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;zt(t),l=!1}else tn!==null&&(ha(tn),tn=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||it.current&1?vt===0&&(vt=3):ga())),t.updateQueue!==null&&(t.flags|=4),zt(t),null);case 4:return Pr(),na(e,t),e===null&&Xr(t.stateNode.containerInfo),zt(t),null;case 10:return ko(t.type._context),zt(t),null;case 17:return Nt(t.type)&&Qi(),zt(t),null;case 19:if(Ye(it),l=t.memoizedState,l===null)return zt(t),null;if(r=(t.flags&128)!==0,m=l.rendering,m===null)if(r)ci(l,!1);else{if(vt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(m=os(e),m!==null){for(t.flags|=128,ci(l,!1),r=m.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,m=l.alternate,m===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=m.childLanes,l.lanes=m.lanes,l.child=m.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=m.memoizedProps,l.memoizedState=m.memoizedState,l.updateQueue=m.updateQueue,l.type=m.type,e=m.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ze(it,it.current&1|2),t.child}e=e.sibling}l.tail!==null&&ct()>Dr&&(t.flags|=128,r=!0,ci(l,!1),t.lanes=4194304)}else{if(!r)if(e=os(m),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ci(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Xe)return zt(t),null}else 2*ct()-l.renderingStartTime>Dr&&n!==1073741824&&(t.flags|=128,r=!0,ci(l,!1),t.lanes=4194304);l.isBackwards?(m.sibling=t.child,t.child=m):(n=l.last,n!==null?n.sibling=m:t.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ct(),t.sibling=null,n=it.current,Ze(it,r?n&1|2:n&1),t):(zt(t),null);case 22:case 23:return ma(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?jt&1073741824&&(zt(t),t.subtreeFlags&6&&(t.flags|=8192)):zt(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Hf(e,t){switch(Ro(t),t.tag){case 1:return Nt(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),Ye(Ot),Ye(kt),No(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Io(t),null;case 13:if(Ye(it),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ye(it),null;case 4:return Pr(),null;case 10:return ko(t.type._context),null;case 22:case 23:return ma(),null;case 24:return null;default:return null}}var ms=!1,Dt=!1,$f=typeof WeakSet=="function"?WeakSet:Set,de=null;function Cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){at(e,t,r)}else n.current=null}function ra(e,t,n){try{n()}catch(r){at(e,t,r)}}var nc=!1;function Gf(e,t){if(mo=Ii,e=Ul(),oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var m=0,M=-1,A=-1,$=0,re=0,ie=e,te=null;t:for(;;){for(var ue;ie!==n||i!==0&&ie.nodeType!==3||(M=m+i),ie!==l||r!==0&&ie.nodeType!==3||(A=m+r),ie.nodeType===3&&(m+=ie.nodeValue.length),(ue=ie.firstChild)!==null;)te=ie,ie=ue;for(;;){if(ie===e)break t;if(te===n&&++$===i&&(M=m),te===l&&++re===r&&(A=m),(ue=ie.nextSibling)!==null)break;ie=te,te=ie.parentNode}ie=ue}n=M===-1||A===-1?null:{start:M,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(go={focusedElem:e,selectionRange:n},Ii=!1,de=t;de!==null;)if(t=de,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,de=e;else for(;de!==null;){t=de;try{var pe=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(pe!==null){var me=pe.memoizedProps,dt=pe.memoizedState,N=t.stateNode,U=N.getSnapshotBeforeUpdate(t.elementType===t.type?me:nn(t.type,me),dt);N.__reactInternalSnapshotBeforeUpdate=U}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(oe){at(t,t.return,oe)}if(e=t.sibling,e!==null){e.return=t.return,de=e;break}de=t.return}return pe=nc,nc=!1,pe}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ra(t,n,l)}i=i.next}while(i!==r)}}function gs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ia(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rc(e){var t=e.alternate;t!==null&&(e.alternate=null,rc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[fn],delete t[ei],delete t[_o],delete t[Mf],delete t[Ef])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ic(e){return e.tag===5||e.tag===3||e.tag===4}function sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ic(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wi));else if(r!==4&&(e=e.child,e!==null))for(sa(e,t,n),e=e.sibling;e!==null;)sa(e,t,n),e=e.sibling}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}var Et=null,rn=!1;function Vn(e,t,n){for(n=n.child;n!==null;)oc(e,t,n),n=n.sibling}function oc(e,t,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Pi,n)}catch{}switch(n.tag){case 5:Dt||Cr(n,t);case 6:var r=Et,i=rn;Et=null,Vn(e,t,n),Et=r,rn=i,Et!==null&&(rn?(e=Et,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Et.removeChild(n.stateNode));break;case 18:Et!==null&&(rn?(e=Et,n=n.stateNode,e.nodeType===8?wo(e.parentNode,n):e.nodeType===1&&wo(e,n),Gr(e)):wo(Et,n.stateNode));break;case 4:r=Et,i=rn,Et=n.stateNode.containerInfo,rn=!0,Vn(e,t,n),Et=r,rn=i;break;case 0:case 11:case 14:case 15:if(!Dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,m=l.destroy;l=l.tag,m!==void 0&&(l&2||l&4)&&ra(n,t,m),i=i.next}while(i!==r)}Vn(e,t,n);break;case 1:if(!Dt&&(Cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(M){at(n,t,M)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(Dt=(r=Dt)||n.memoizedState!==null,Vn(e,t,n),Dt=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function ac(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $f),t.forEach(function(r){var i=Xf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function sn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,m=t,M=m;e:for(;M!==null;){switch(M.tag){case 5:Et=M.stateNode,rn=!1;break e;case 3:Et=M.stateNode.containerInfo,rn=!0;break e;case 4:Et=M.stateNode.containerInfo,rn=!0;break e}M=M.return}if(Et===null)throw Error(c(160));oc(l,m,i),Et=null,rn=!1;var A=i.alternate;A!==null&&(A.return=null),i.return=null}catch($){at(i,t,$)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lc(t,e),t=t.sibling}function lc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sn(t,e),mn(e),r&4){try{di(3,e,e.return),gs(3,e)}catch(me){at(e,e.return,me)}try{di(5,e,e.return)}catch(me){at(e,e.return,me)}}break;case 1:sn(t,e),mn(e),r&512&&n!==null&&Cr(n,n.return);break;case 5:if(sn(t,e),mn(e),r&512&&n!==null&&Cr(n,n.return),e.flags&32){var i=e.stateNode;try{ce(i,"")}catch(me){at(e,e.return,me)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,m=n!==null?n.memoizedProps:l,M=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{M==="input"&&l.type==="radio"&&l.name!=null&&u(i,l),ut(M,m);var $=ut(M,l);for(m=0;m<A.length;m+=2){var re=A[m],ie=A[m+1];re==="style"?We(i,ie):re==="dangerouslySetInnerHTML"?Me(i,ie):re==="children"?ce(i,ie):le(i,re,ie,$)}switch(M){case"input":h(i,l);break;case"textarea":D(i,l);break;case"select":var te=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var ue=l.value;ue!=null?v(i,!!l.multiple,ue,!1):te!==!!l.multiple&&(l.defaultValue!=null?v(i,!!l.multiple,l.defaultValue,!0):v(i,!!l.multiple,l.multiple?[]:"",!1))}i[ei]=l}catch(me){at(e,e.return,me)}}break;case 6:if(sn(t,e),mn(e),r&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(me){at(e,e.return,me)}}break;case 3:if(sn(t,e),mn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(me){at(e,e.return,me)}break;case 4:sn(t,e),mn(e);break;case 13:sn(t,e),mn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ua=ct())),r&4&&ac(e);break;case 22:if(re=n!==null&&n.memoizedState!==null,e.mode&1?(Dt=($=Dt)||re,sn(t,e),Dt=$):sn(t,e),mn(e),r&8192){if($=e.memoizedState!==null,(e.stateNode.isHidden=$)&&!re&&e.mode&1)for(de=e,re=e.child;re!==null;){for(ie=de=re;de!==null;){switch(te=de,ue=te.child,te.tag){case 0:case 11:case 14:case 15:di(4,te,te.return);break;case 1:Cr(te,te.return);var pe=te.stateNode;if(typeof pe.componentWillUnmount=="function"){r=te,n=te.return;try{t=r,pe.props=t.memoizedProps,pe.state=t.memoizedState,pe.componentWillUnmount()}catch(me){at(r,n,me)}}break;case 5:Cr(te,te.return);break;case 22:if(te.memoizedState!==null){dc(ie);continue}}ue!==null?(ue.return=te,de=ue):dc(ie)}re=re.sibling}e:for(re=null,ie=e;;){if(ie.tag===5){if(re===null){re=ie;try{i=ie.stateNode,$?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(M=ie.stateNode,A=ie.memoizedProps.style,m=A!=null&&A.hasOwnProperty("display")?A.display:null,M.style.display=Ue("display",m))}catch(me){at(e,e.return,me)}}}else if(ie.tag===6){if(re===null)try{ie.stateNode.nodeValue=$?"":ie.memoizedProps}catch(me){at(e,e.return,me)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===e)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===e)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===e)break e;re===ie&&(re=null),ie=ie.return}re===ie&&(re=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:sn(t,e),mn(e),r&4&&ac(e);break;case 21:break;default:sn(t,e),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ic(n)){var r=n;break e}n=n.return}throw Error(c(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ce(i,""),r.flags&=-33);var l=sc(e);oa(e,l,i);break;case 3:case 4:var m=r.stateNode.containerInfo,M=sc(e);sa(e,M,m);break;default:throw Error(c(161))}}catch(A){at(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vf(e,t,n){de=e,uc(e)}function uc(e,t,n){for(var r=(e.mode&1)!==0;de!==null;){var i=de,l=i.child;if(i.tag===22&&r){var m=i.memoizedState!==null||ms;if(!m){var M=i.alternate,A=M!==null&&M.memoizedState!==null||Dt;M=ms;var $=Dt;if(ms=m,(Dt=A)&&!$)for(de=i;de!==null;)m=de,A=m.child,m.tag===22&&m.memoizedState!==null?fc(i):A!==null?(A.return=m,de=A):fc(i);for(;l!==null;)de=l,uc(l),l=l.sibling;de=i,ms=M,Dt=$}cc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,de=l):cc(e)}}function cc(e){for(;de!==null;){var t=de;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Dt||gs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Dt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&du(t,l,r);break;case 3:var m=t.updateQueue;if(m!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}du(t,m,n)}break;case 5:var M=t.stateNode;if(n===null&&t.flags&4){n=M;var A=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&n.focus();break;case"img":A.src&&(n.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var $=t.alternate;if($!==null){var re=$.memoizedState;if(re!==null){var ie=re.dehydrated;ie!==null&&Gr(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Dt||t.flags&512&&ia(t)}catch(te){at(t,t.return,te)}}if(t===e){de=null;break}if(n=t.sibling,n!==null){n.return=t.return,de=n;break}de=t.return}}function dc(e){for(;de!==null;){var t=de;if(t===e){de=null;break}var n=t.sibling;if(n!==null){n.return=t.return,de=n;break}de=t.return}}function fc(e){for(;de!==null;){var t=de;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gs(4,t)}catch(A){at(t,n,A)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(A){at(t,i,A)}}var l=t.return;try{ia(t)}catch(A){at(t,l,A)}break;case 5:var m=t.return;try{ia(t)}catch(A){at(t,m,A)}}}catch(A){at(t,t.return,A)}if(t===e){de=null;break}var M=t.sibling;if(M!==null){M.return=t.return,de=M;break}de=t.return}}var jf=Math.ceil,vs=we.ReactCurrentDispatcher,aa=we.ReactCurrentOwner,Kt=we.ReactCurrentBatchConfig,$e=0,Tt=null,mt=null,Lt=0,jt=0,zr=Fn(0),vt=0,fi=null,sr=0,ys=0,la=0,hi=null,Ft=null,ua=0,Dr=1/0,An=null,ws=!1,ca=null,jn=null,_s=!1,qn=null,Ss=0,pi=0,da=null,xs=-1,Ts=0;function It(){return $e&6?ct():xs!==-1?xs:xs=ct()}function Wn(e){return e.mode&1?$e&2&&Lt!==0?Lt&-Lt:Af.transition!==null?(Ts===0&&(Ts=sl()),Ts):(e=je,e!==0||(e=window.event,e=e===void 0?16:pl(e.type)),e):1}function on(e,t,n,r){if(50<pi)throw pi=0,da=null,Error(c(185));br(e,n,r),(!($e&2)||e!==Tt)&&(e===Tt&&(!($e&2)&&(ys|=n),vt===4&&Zn(e,Lt)),Bt(e,r),n===1&&$e===0&&!(t.mode&1)&&(Dr=ct()+500,Ki&&Hn()))}function Bt(e,t){var n=e.callbackNode;Ld(e,t);var r=zi(e,e===Tt?Lt:0);if(r===0)n!==null&&nl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nl(n),t===1)e.tag===0?Lf(pc.bind(null,e)):Jl(pc.bind(null,e)),Tf(function(){!($e&6)&&Hn()}),n=null;else{switch(ol(r)){case 1:n=Gs;break;case 4:n=rl;break;case 16:n=Ai;break;case 536870912:n=il;break;default:n=Ai}n=xc(n,hc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hc(e,t){if(xs=-1,Ts=0,$e&6)throw Error(c(327));var n=e.callbackNode;if(Ur()&&e.callbackNode!==n)return null;var r=zi(e,e===Tt?Lt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Rs(e,r);else{t=r;var i=$e;$e|=2;var l=gc();(Tt!==e||Lt!==t)&&(An=null,Dr=ct()+500,ar(e,t));do try{Zf();break}catch(M){mc(e,M)}while(!0);Po(),vs.current=l,$e=i,mt!==null?t=0:(Tt=null,Lt=0,t=vt)}if(t!==0){if(t===2&&(i=Vs(e),i!==0&&(r=i,t=fa(e,i))),t===1)throw n=fi,ar(e,0),Zn(e,r),Bt(e,ct()),n;if(t===6)Zn(e,r);else{if(i=e.current.alternate,!(r&30)&&!qf(i)&&(t=Rs(e,r),t===2&&(l=Vs(e),l!==0&&(r=l,t=fa(e,l))),t===1))throw n=fi,ar(e,0),Zn(e,r),Bt(e,ct()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(c(345));case 2:lr(e,Ft,An);break;case 3:if(Zn(e,r),(r&130023424)===r&&(t=ua+500-ct(),10<t)){if(zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){It(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yo(lr.bind(null,e,Ft,An),t);break}lr(e,Ft,An);break;case 4:if(Zn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var m=31-Jt(r);l=1<<m,m=t[m],m>i&&(i=m),r&=~l}if(r=i,r=ct()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jf(r/1960))-r,10<r){e.timeoutHandle=yo(lr.bind(null,e,Ft,An),r);break}lr(e,Ft,An);break;case 5:lr(e,Ft,An);break;default:throw Error(c(329))}}}return Bt(e,ct()),e.callbackNode===n?hc.bind(null,e):null}function fa(e,t){var n=hi;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=Rs(e,t),e!==2&&(t=Ft,Ft=n,t!==null&&ha(t)),e}function ha(e){Ft===null?Ft=e:Ft.push.apply(Ft,e)}function qf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!en(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t){for(t&=~la,t&=~ys,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Jt(t),r=1<<n;e[n]=-1,t&=~r}}function pc(e){if($e&6)throw Error(c(327));Ur();var t=zi(e,0);if(!(t&1))return Bt(e,ct()),null;var n=Rs(e,t);if(e.tag!==0&&n===2){var r=Vs(e);r!==0&&(t=r,n=fa(e,r))}if(n===1)throw n=fi,ar(e,0),Zn(e,t),Bt(e,ct()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lr(e,Ft,An),Bt(e,ct()),null}function pa(e,t){var n=$e;$e|=1;try{return e(t)}finally{$e=n,$e===0&&(Dr=ct()+500,Ki&&Hn())}}function or(e){qn!==null&&qn.tag===0&&!($e&6)&&Ur();var t=$e;$e|=1;var n=Kt.transition,r=je;try{if(Kt.transition=null,je=1,e)return e()}finally{je=r,Kt.transition=n,$e=t,!($e&6)&&Hn()}}function ma(){jt=zr.current,Ye(zr)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xf(n)),mt!==null)for(n=mt.return;n!==null;){var r=n;switch(Ro(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:Pr(),Ye(Ot),Ye(kt),No();break;case 5:Io(r);break;case 4:Pr();break;case 13:Ye(it);break;case 19:Ye(it);break;case 10:ko(r.type._context);break;case 22:case 23:ma()}n=n.return}if(Tt=e,mt=e=Qn(e.current,null),Lt=jt=t,vt=0,fi=null,la=ys=sr=0,Ft=hi=null,nr!==null){for(t=0;t<nr.length;t++)if(n=nr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var m=l.next;l.next=i,r.next=m}n.pending=r}nr=null}return e}function mc(e,t){do{var n=mt;try{if(Po(),as.current=ds,ls){for(var r=st.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ls=!1}if(ir=0,xt=gt=st=null,oi=!1,ai=0,aa.current=null,n===null||n.return===null){vt=1,fi=t,mt=null;break}e:{var l=e,m=n.return,M=n,A=t;if(t=Lt,M.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var $=A,re=M,ie=re.tag;if(!(re.mode&1)&&(ie===0||ie===11||ie===15)){var te=re.alternate;te?(re.updateQueue=te.updateQueue,re.memoizedState=te.memoizedState,re.lanes=te.lanes):(re.updateQueue=null,re.memoizedState=null)}var ue=Bu(m);if(ue!==null){ue.flags&=-257,Hu(ue,m,M,l,t),ue.mode&1&&Fu(l,$,t),t=ue,A=$;var pe=t.updateQueue;if(pe===null){var me=new Set;me.add(A),t.updateQueue=me}else pe.add(A);break e}else{if(!(t&1)){Fu(l,$,t),ga();break e}A=Error(c(426))}}else if(Xe&&M.mode&1){var dt=Bu(m);if(dt!==null){!(dt.flags&65536)&&(dt.flags|=256),Hu(dt,m,M,l,t),Lo(kr(A,M));break e}}l=A=kr(A,M),vt!==4&&(vt=2),hi===null?hi=[l]:hi.push(l),l=m;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var N=Nu(l,A,t);cu(l,N);break e;case 1:M=A;var U=l.type,b=l.stateNode;if(!(l.flags&128)&&(typeof U.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(jn===null||!jn.has(b)))){l.flags|=65536,t&=-t,l.lanes|=t;var oe=bu(l,M,t);cu(l,oe);break e}}l=l.return}while(l!==null)}yc(n)}catch(ve){t=ve,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(!0)}function gc(){var e=vs.current;return vs.current=ds,e===null?ds:e}function ga(){(vt===0||vt===3||vt===2)&&(vt=4),Tt===null||!(sr&268435455)&&!(ys&268435455)||Zn(Tt,Lt)}function Rs(e,t){var n=$e;$e|=2;var r=gc();(Tt!==e||Lt!==t)&&(An=null,ar(e,t));do try{Wf();break}catch(i){mc(e,i)}while(!0);if(Po(),$e=n,vs.current=r,mt!==null)throw Error(c(261));return Tt=null,Lt=0,vt}function Wf(){for(;mt!==null;)vc(mt)}function Zf(){for(;mt!==null&&!yd();)vc(mt)}function vc(e){var t=Sc(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?yc(e):mt=t,aa.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hf(n,t),n!==null){n.flags&=32767,mt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{vt=6,mt=null;return}}else if(n=Bf(n,t,jt),n!==null){mt=n;return}if(t=t.sibling,t!==null){mt=t;return}mt=t=e}while(t!==null);vt===0&&(vt=5)}function lr(e,t,n){var r=je,i=Kt.transition;try{Kt.transition=null,je=1,Qf(e,t,n,r)}finally{Kt.transition=i,je=r}return null}function Qf(e,t,n,r){do Ur();while(qn!==null);if($e&6)throw Error(c(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Ad(e,l),e===Tt&&(mt=Tt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_s||(_s=!0,xc(Ai,function(){return Ur(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Kt.transition,Kt.transition=null;var m=je;je=1;var M=$e;$e|=4,aa.current=null,Gf(e,n),lc(n,e),mf(go),Ii=!!mo,go=mo=null,e.current=n,Vf(n),wd(),$e=M,je=m,Kt.transition=l}else e.current=n;if(_s&&(_s=!1,qn=e,Ss=i),l=e.pendingLanes,l===0&&(jn=null),xd(n.stateNode),Bt(e,ct()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ws)throw ws=!1,e=ca,ca=null,e;return Ss&1&&e.tag!==0&&Ur(),l=e.pendingLanes,l&1?e===da?pi++:(pi=0,da=e):pi=0,Hn(),null}function Ur(){if(qn!==null){var e=ol(Ss),t=Kt.transition,n=je;try{if(Kt.transition=null,je=16>e?16:e,qn===null)var r=!1;else{if(e=qn,qn=null,Ss=0,$e&6)throw Error(c(331));var i=$e;for($e|=4,de=e.current;de!==null;){var l=de,m=l.child;if(de.flags&16){var M=l.deletions;if(M!==null){for(var A=0;A<M.length;A++){var $=M[A];for(de=$;de!==null;){var re=de;switch(re.tag){case 0:case 11:case 15:di(8,re,l)}var ie=re.child;if(ie!==null)ie.return=re,de=ie;else for(;de!==null;){re=de;var te=re.sibling,ue=re.return;if(rc(re),re===$){de=null;break}if(te!==null){te.return=ue,de=te;break}de=ue}}}var pe=l.alternate;if(pe!==null){var me=pe.child;if(me!==null){pe.child=null;do{var dt=me.sibling;me.sibling=null,me=dt}while(me!==null)}}de=l}}if(l.subtreeFlags&2064&&m!==null)m.return=l,de=m;else e:for(;de!==null;){if(l=de,l.flags&2048)switch(l.tag){case 0:case 11:case 15:di(9,l,l.return)}var N=l.sibling;if(N!==null){N.return=l.return,de=N;break e}de=l.return}}var U=e.current;for(de=U;de!==null;){m=de;var b=m.child;if(m.subtreeFlags&2064&&b!==null)b.return=m,de=b;else e:for(m=U;de!==null;){if(M=de,M.flags&2048)try{switch(M.tag){case 0:case 11:case 15:gs(9,M)}}catch(ve){at(M,M.return,ve)}if(M===m){de=null;break e}var oe=M.sibling;if(oe!==null){oe.return=M.return,de=oe;break e}de=M.return}}if($e=i,Hn(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Pi,e)}catch{}r=!0}return r}finally{je=n,Kt.transition=t}}return!1}function wc(e,t,n){t=kr(n,t),t=Nu(e,t,1),e=Gn(e,t,1),t=It(),e!==null&&(br(e,1,t),Bt(e,t))}function at(e,t,n){if(e.tag===3)wc(e,e,n);else for(;t!==null;){if(t.tag===3){wc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=kr(n,e),e=bu(t,e,1),t=Gn(t,e,1),e=It(),t!==null&&(br(t,1,e),Bt(t,e));break}}t=t.return}}function Yf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=It(),e.pingedLanes|=e.suspendedLanes&n,Tt===e&&(Lt&n)===n&&(vt===4||vt===3&&(Lt&130023424)===Lt&&500>ct()-ua?ar(e,0):la|=n),Bt(e,t)}function _c(e,t){t===0&&(e.mode&1?(t=Ci,Ci<<=1,!(Ci&130023424)&&(Ci=4194304)):t=1);var n=It();e=Mn(e,t),e!==null&&(br(e,t,n),Bt(e,n))}function Kf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_c(e,n)}function Xf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(t),_c(e,n)}var Sc;Sc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ot.current)bt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return bt=!1,Ff(e,t,n);bt=!!(e.flags&131072)}else bt=!1,Xe&&t.flags&1048576&&eu(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ps(e,t),e=t.pendingProps;var i=xr(t,kt.current);Ar(t,n),i=Bo(null,t,r,e,i,n);var l=Ho();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Nt(r)?(l=!0,Yi(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Do(t),i.updater=fs,t.stateNode=i,i._reactInternals=t,Wo(t,r,e,n),t=Ko(null,t,r,!0,l,n)):(t.tag=0,Xe&&l&&To(t),Ut(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ps(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=eh(r),e=nn(r,e),i){case 0:t=Yo(null,t,r,e,n);break e;case 1:t=Wu(null,t,r,e,n);break e;case 11:t=$u(null,t,r,e,n);break e;case 14:t=Gu(null,t,r,nn(r.type,e),n);break e}throw Error(c(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),Yo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),Wu(e,t,r,i,n);case 3:e:{if(Zu(t),e===null)throw Error(c(387));r=t.pendingProps,l=t.memoizedState,i=l.element,uu(e,t),ss(t,r,null,n);var m=t.memoizedState;if(r=m.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=kr(Error(c(423)),t),t=Qu(e,t,r,n,i);break e}else if(r!==i){i=kr(Error(c(424)),t),t=Qu(e,t,r,n,i);break e}else for(Vt=bn(t.stateNode.containerInfo.firstChild),Gt=t,Xe=!0,tn=null,n=au(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===i){t=Ln(e,t,n);break e}Ut(e,t,r,n)}t=t.child}return t;case 5:return fu(t),e===null&&Eo(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,m=i.children,vo(r,i)?m=null:l!==null&&vo(r,l)&&(t.flags|=32),qu(e,t),Ut(e,t,m,n),t.child;case 6:return e===null&&Eo(t),null;case 13:return Yu(e,t,n);case 4:return Uo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Er(t,null,r,n):Ut(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),$u(e,t,r,i,n);case 7:return Ut(e,t,t.pendingProps,n),t.child;case 8:return Ut(e,t,t.pendingProps.children,n),t.child;case 12:return Ut(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,m=i.value,Ze(ns,r._currentValue),r._currentValue=m,l!==null)if(en(l.value,m)){if(l.children===i.children&&!Ot.current){t=Ln(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var M=l.dependencies;if(M!==null){m=l.child;for(var A=M.firstContext;A!==null;){if(A.context===r){if(l.tag===1){A=En(-1,n&-n),A.tag=2;var $=l.updateQueue;if($!==null){$=$.shared;var re=$.pending;re===null?A.next=A:(A.next=re.next,re.next=A),$.pending=A}}l.lanes|=n,A=l.alternate,A!==null&&(A.lanes|=n),Co(l.return,n,t),M.lanes|=n;break}A=A.next}}else if(l.tag===10)m=l.type===t.type?null:l.child;else if(l.tag===18){if(m=l.return,m===null)throw Error(c(341));m.lanes|=n,M=m.alternate,M!==null&&(M.lanes|=n),Co(m,n,t),m=l.sibling}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===t){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}Ut(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ar(t,n),i=Qt(i),r=r(i),t.flags|=1,Ut(e,t,r,n),t.child;case 14:return r=t.type,i=nn(r,t.pendingProps),i=nn(r.type,i),Gu(e,t,r,i,n);case 15:return Vu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),ps(e,t),t.tag=1,Nt(r)?(e=!0,Yi(t)):e=!1,Ar(t,n),Iu(t,r,i),Wo(t,r,i,n),Ko(null,t,r,!0,e,n);case 19:return Xu(e,t,n);case 22:return ju(e,t,n)}throw Error(c(156,t.tag))};function xc(e,t){return tl(e,t)}function Jf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,r){return new Jf(e,t,n,r)}function va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eh(e){if(typeof e=="function")return va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ee)return 11;if(e===ot)return 14}return 2}function Qn(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ms(e,t,n,r,i,l){var m=2;if(r=e,typeof e=="function")va(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case Ne:return ur(n.children,i,l,t);case Be:m=8,i|=8;break;case be:return e=Xt(12,n,t,i|2),e.elementType=be,e.lanes=l,e;case Ce:return e=Xt(13,n,t,i),e.elementType=Ce,e.lanes=l,e;case Re:return e=Xt(19,n,t,i),e.elementType=Re,e.lanes=l,e;case He:return Es(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fe:m=10;break e;case et:m=9;break e;case Ee:m=11;break e;case ot:m=14;break e;case Ve:m=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=Xt(m,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function ur(e,t,n,r){return e=Xt(7,e,r,t),e.lanes=n,e}function Es(e,t,n,r){return e=Xt(22,e,r,t),e.elementType=He,e.lanes=n,e.stateNode={isHidden:!1},e}function ya(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function wa(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function th(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=js(0),this.expirationTimes=js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _a(e,t,n,r,i,l,m,M,A){return e=new th(e,t,n,M,A),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Xt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(l),e}function nh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Oe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tc(e){if(!e)return Bn;e=e._reactInternals;e:{if(Ke(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(Nt(n))return Kl(e,n,t)}return t}function Rc(e,t,n,r,i,l,m,M,A){return e=_a(n,r,!0,e,i,l,m,M,A),e.context=Tc(null),n=e.current,r=It(),i=Wn(n),l=En(r,i),l.callback=t??null,Gn(n,l,i),e.current.lanes=i,br(e,i,r),Bt(e,r),e}function Ls(e,t,n,r){var i=t.current,l=It(),m=Wn(i);return n=Tc(n),t.context===null?t.context=n:t.pendingContext=n,t=En(l,m),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gn(i,t,m),e!==null&&(on(e,i,m,l),is(e,i,m)),m}function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sa(e,t){Mc(e,t),(e=e.alternate)&&Mc(e,t)}var Ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function xa(e){this._internalRoot=e}Ps.prototype.render=xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));Ls(e,t,null,null)},Ps.prototype.unmount=xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){Ls(null,e,null,null)}),t[Sn]=null}};function Ps(e){this._internalRoot=e}Ps.prototype.unstable_scheduleHydration=function(e){if(e){var t=ul();e={blockedOn:null,target:e,priority:t};for(var n=0;n<In.length&&t!==0&&t<In[n].priority;n++);In.splice(n,0,e),n===0&&fl(e)}};function Ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lc(){}function rh(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var $=As(m);l.call($)}}var m=Rc(t,r,e,0,null,!1,!1,"",Lc);return e._reactRootContainer=m,e[Sn]=m.current,Xr(e.nodeType===8?e.parentNode:e),or(),m}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var M=r;r=function(){var $=As(A);M.call($)}}var A=_a(e,0,!1,null,null,!1,!1,"",Lc);return e._reactRootContainer=A,e[Sn]=A.current,Xr(e.nodeType===8?e.parentNode:e),or(function(){Ls(t,A,n,r)}),A}function Cs(e,t,n,r,i){var l=n._reactRootContainer;if(l){var m=l;if(typeof i=="function"){var M=i;i=function(){var A=As(m);M.call(A)}}Ls(t,m,e,i)}else m=rh(n,t,e,i,r);return As(m)}al=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(qs(t,n|1),Bt(t,ct()),!($e&6)&&(Dr=ct()+500,Hn()))}break;case 13:or(function(){var r=Mn(e,1);if(r!==null){var i=It();on(r,e,1,i)}}),Sa(e,1)}},Ws=function(e){if(e.tag===13){var t=Mn(e,134217728);if(t!==null){var n=It();on(t,e,134217728,n)}Sa(e,134217728)}},ll=function(e){if(e.tag===13){var t=Wn(e),n=Mn(e,t);if(n!==null){var r=It();on(n,e,t,r)}Sa(e,t)}},ul=function(){return je},cl=function(e,t){var n=je;try{return je=e,t()}finally{je=n}},pt=function(e,t,n){switch(t){case"input":if(h(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zi(r);if(!i)throw Error(c(90));E(r),h(r,i)}}}break;case"textarea":D(e,n);break;case"select":t=n.value,t!=null&&v(e,!!n.multiple,t,!1)}},St=pa,At=or;var ih={usingClientEntryPoint:!1,Events:[ti,_r,Zi,wt,_t,pa]},mi={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sh={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ja(e),e===null?null:e.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zs.isDisabled&&zs.supportsFiber)try{Pi=zs.inject(sh),dn=zs}catch{}}return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ih,Ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ta(t))throw Error(c(200));return nh(e,t,null,n)},Ht.createRoot=function(e,t){if(!Ta(e))throw Error(c(299));var n=!1,r="",i=Ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_a(e,1,!1,null,null,n,!1,r,i),e[Sn]=t.current,Xr(e.nodeType===8?e.parentNode:e),new xa(t)},Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Ja(t),e=e===null?null:e.stateNode,e},Ht.flushSync=function(e){return or(e)},Ht.hydrate=function(e,t,n){if(!ks(t))throw Error(c(200));return Cs(null,e,t,!0,n)},Ht.hydrateRoot=function(e,t,n){if(!Ta(e))throw Error(c(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",m=Ec;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),t=Rc(t,null,e,1,n??null,i,!1,l,m),e[Sn]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ps(t)},Ht.render=function(e,t,n){if(!ks(t))throw Error(c(200));return Cs(null,e,t,!1,n)},Ht.unmountComponentAtNode=function(e){if(!ks(e))throw Error(c(40));return e._reactRootContainer?(or(function(){Cs(null,null,e,!1,function(){e._reactRootContainer=null,e[Sn]=null})}),!0):!1},Ht.unstable_batchedUpdates=pa,Ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ks(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Cs(e,t,n,!1,r)},Ht.version="18.3.1-next-f1338f8080-20240426",Ht}var Ic;function mh(){if(Ic)return Ea.exports;Ic=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(o){console.error(o)}}return s(),Ea.exports=ph(),Ea.exports}var Oc;function gh(){if(Oc)return Ds;Oc=1;var s=mh();return Ds.createRoot=s.createRoot,Ds.hydrateRoot=s.hydrateRoot,Ds}var vh=gh(),vi={},Nc;function yh(){if(Nc)return vi;Nc=1,Object.defineProperty(vi,"__esModule",{value:!0}),vi.parse=L,vi.serialize=k;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,c=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,y=/^[\u0020-\u003A\u003D-\u007E]*$/,w=Object.prototype.toString,x=(()=>{const G=function(){};return G.prototype=Object.create(null),G})();function L(G,ne){const K=new x,ee=G.length;if(ee<2)return K;const J=(ne==null?void 0:ne.decode)||W;let Y=0;do{const q=G.indexOf("=",Y);if(q===-1)break;const le=G.indexOf(";",Y),we=le===-1?ee:le;if(q>we){Y=G.lastIndexOf(";",q-1)+1;continue}const ke=O(G,Y,q),Oe=C(G,q,ke),Ne=G.slice(ke,Oe);if(K[Ne]===void 0){let Be=O(G,q+1,we),be=C(G,we,Be);const Fe=J(G.slice(Be,be));K[Ne]=Fe}Y=we+1}while(Y<ee);return K}function O(G,ne,K){do{const ee=G.charCodeAt(ne);if(ee!==32&&ee!==9)return ne}while(++ne<K);return K}function C(G,ne,K){for(;ne>K;){const ee=G.charCodeAt(--ne);if(ee!==32&&ee!==9)return ne+1}return K}function k(G,ne,K){const ee=(K==null?void 0:K.encode)||encodeURIComponent;if(!s.test(G))throw new TypeError(`argument name is invalid: ${G}`);const J=ee(ne);if(!o.test(J))throw new TypeError(`argument val is invalid: ${ne}`);let Y=G+"="+J;if(!K)return Y;if(K.maxAge!==void 0){if(!Number.isInteger(K.maxAge))throw new TypeError(`option maxAge is invalid: ${K.maxAge}`);Y+="; Max-Age="+K.maxAge}if(K.domain){if(!c.test(K.domain))throw new TypeError(`option domain is invalid: ${K.domain}`);Y+="; Domain="+K.domain}if(K.path){if(!y.test(K.path))throw new TypeError(`option path is invalid: ${K.path}`);Y+="; Path="+K.path}if(K.expires){if(!Q(K.expires)||!Number.isFinite(K.expires.valueOf()))throw new TypeError(`option expires is invalid: ${K.expires}`);Y+="; Expires="+K.expires.toUTCString()}if(K.httpOnly&&(Y+="; HttpOnly"),K.secure&&(Y+="; Secure"),K.partitioned&&(Y+="; Partitioned"),K.priority)switch(typeof K.priority=="string"?K.priority.toLowerCase():void 0){case"low":Y+="; Priority=Low";break;case"medium":Y+="; Priority=Medium";break;case"high":Y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${K.priority}`)}if(K.sameSite)switch(typeof K.sameSite=="string"?K.sameSite.toLowerCase():K.sameSite){case!0:case"strict":Y+="; SameSite=Strict";break;case"lax":Y+="; SameSite=Lax";break;case"none":Y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${K.sameSite}`)}return Y}function W(G){if(G.indexOf("%")===-1)return G;try{return decodeURIComponent(G)}catch{return G}}function Q(G){return w.call(G)==="[object Date]"}return vi}yh();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var bc="popstate";function wh(s={}){function o(w,x){let{pathname:L="/",search:O="",hash:C=""}=cr(w.location.hash.substring(1));return!L.startsWith("/")&&!L.startsWith(".")&&(L="/"+L),Ia("",{pathname:L,search:O,hash:C},x.state&&x.state.usr||null,x.state&&x.state.key||"default")}function c(w,x){let L=w.document.querySelector("base"),O="";if(L&&L.getAttribute("href")){let C=w.location.href,k=C.indexOf("#");O=k===-1?C:C.slice(0,k)}return O+"#"+(typeof x=="string"?x:_i(x))}function y(w,x){qt(w.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(x)})`)}return Sh(o,c,y,s)}function Je(s,o){if(s===!1||s===null||typeof s>"u")throw new Error(o)}function qt(s,o){if(!s){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function _h(){return Math.random().toString(36).substring(2,10)}function Fc(s,o){return{usr:s.state,key:s.key,idx:o}}function Ia(s,o,c=null,y){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof o=="string"?cr(o):o,state:c,key:o&&o.key||y||_h()}}function _i({pathname:s="/",search:o="",hash:c=""}){return o&&o!=="?"&&(s+=o.charAt(0)==="?"?o:"?"+o),c&&c!=="#"&&(s+=c.charAt(0)==="#"?c:"#"+c),s}function cr(s){let o={};if(s){let c=s.indexOf("#");c>=0&&(o.hash=s.substring(c),s=s.substring(0,c));let y=s.indexOf("?");y>=0&&(o.search=s.substring(y),s=s.substring(0,y)),s&&(o.pathname=s)}return o}function Sh(s,o,c,y={}){let{window:w=document.defaultView,v5Compat:x=!1}=y,L=w.history,O="POP",C=null,k=W();k==null&&(k=0,L.replaceState({...L.state,idx:k},""));function W(){return(L.state||{idx:null}).idx}function Q(){O="POP";let J=W(),Y=J==null?null:J-k;k=J,C&&C({action:O,location:ee.location,delta:Y})}function G(J,Y){O="PUSH";let q=Ia(ee.location,J,Y);c(q,J),k=W()+1;let le=Fc(q,k),we=ee.createHref(q);try{L.pushState(le,"",we)}catch(ke){if(ke instanceof DOMException&&ke.name==="DataCloneError")throw ke;w.location.assign(we)}x&&C&&C({action:O,location:ee.location,delta:1})}function ne(J,Y){O="REPLACE";let q=Ia(ee.location,J,Y);c(q,J),k=W();let le=Fc(q,k),we=ee.createHref(q);L.replaceState(le,"",we),x&&C&&C({action:O,location:ee.location,delta:0})}function K(J){let Y=w.location.origin!=="null"?w.location.origin:w.location.href,q=typeof J=="string"?J:_i(J);return q=q.replace(/ $/,"%20"),Je(Y,`No window.location.(origin|href) available to create URL for href: ${q}`),new URL(q,Y)}let ee={get action(){return O},get location(){return s(w,L)},listen(J){if(C)throw new Error("A history only accepts one active listener");return w.addEventListener(bc,Q),C=J,()=>{w.removeEventListener(bc,Q),C=null}},createHref(J){return o(w,J)},createURL:K,encodeLocation(J){let Y=K(J);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:G,replace:ne,go(J){return L.go(J)}};return ee}function td(s,o,c="/"){return xh(s,o,c,!1)}function xh(s,o,c,y){let w=typeof o=="string"?cr(o):o,x=Kn(w.pathname||"/",c);if(x==null)return null;let L=nd(s);Th(L);let O=null;for(let C=0;O==null&&C<L.length;++C){let k=Uh(x);O=zh(L[C],k,y)}return O}function nd(s,o=[],c=[],y=""){let w=(x,L,O)=>{let C={relativePath:O===void 0?x.path||"":O,caseSensitive:x.caseSensitive===!0,childrenIndex:L,route:x};C.relativePath.startsWith("/")&&(Je(C.relativePath.startsWith(y),`Absolute route path "${C.relativePath}" nested under path "${y}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(y.length));let k=kn([y,C.relativePath]),W=c.concat(C);x.children&&x.children.length>0&&(Je(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${k}".`),nd(x.children,o,W,k)),!(x.path==null&&!x.index)&&o.push({path:k,score:kh(k,x.index),routesMeta:W})};return s.forEach((x,L)=>{var O;if(x.path===""||!((O=x.path)!=null&&O.includes("?")))w(x,L);else for(let C of rd(x.path))w(x,L,C)}),o}function rd(s){let o=s.split("/");if(o.length===0)return[];let[c,...y]=o,w=c.endsWith("?"),x=c.replace(/\?$/,"");if(y.length===0)return w?[x,""]:[x];let L=rd(y.join("/")),O=[];return O.push(...L.map(C=>C===""?x:[x,C].join("/"))),w&&O.push(...L),O.map(C=>s.startsWith("/")&&C===""?"/":C)}function Th(s){s.sort((o,c)=>o.score!==c.score?c.score-o.score:Ch(o.routesMeta.map(y=>y.childrenIndex),c.routesMeta.map(y=>y.childrenIndex)))}var Rh=/^:[\w-]+$/,Mh=3,Eh=2,Lh=1,Ah=10,Ph=-2,Bc=s=>s==="*";function kh(s,o){let c=s.split("/"),y=c.length;return c.some(Bc)&&(y+=Ph),o&&(y+=Eh),c.filter(w=>!Bc(w)).reduce((w,x)=>w+(Rh.test(x)?Mh:x===""?Lh:Ah),y)}function Ch(s,o){return s.length===o.length&&s.slice(0,-1).every((y,w)=>y===o[w])?s[s.length-1]-o[o.length-1]:0}function zh(s,o,c=!1){let{routesMeta:y}=s,w={},x="/",L=[];for(let O=0;O<y.length;++O){let C=y[O],k=O===y.length-1,W=x==="/"?o:o.slice(x.length)||"/",Q=Fs({path:C.relativePath,caseSensitive:C.caseSensitive,end:k},W),G=C.route;if(!Q&&k&&c&&!y[y.length-1].route.index&&(Q=Fs({path:C.relativePath,caseSensitive:C.caseSensitive,end:!1},W)),!Q)return null;Object.assign(w,Q.params),L.push({params:w,pathname:kn([x,Q.pathname]),pathnameBase:bh(kn([x,Q.pathnameBase])),route:G}),Q.pathnameBase!=="/"&&(x=kn([x,Q.pathnameBase]))}return L}function Fs(s,o){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[c,y]=Dh(s.path,s.caseSensitive,s.end),w=o.match(c);if(!w)return null;let x=w[0],L=x.replace(/(.)\/+$/,"$1"),O=w.slice(1);return{params:y.reduce((k,{paramName:W,isOptional:Q},G)=>{if(W==="*"){let K=O[G]||"";L=x.slice(0,x.length-K.length).replace(/(.)\/+$/,"$1")}const ne=O[G];return Q&&!ne?k[W]=void 0:k[W]=(ne||"").replace(/%2F/g,"/"),k},{}),pathname:x,pathnameBase:L,pattern:s}}function Dh(s,o=!1,c=!0){qt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let y=[],w="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(L,O,C)=>(y.push({paramName:O,isOptional:C!=null}),C?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(y.push({paramName:"*"}),w+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?w+="\\/*$":s!==""&&s!=="/"&&(w+="(?:(?=\\/|$))"),[new RegExp(w,o?void 0:"i"),y]}function Uh(s){try{return s.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return qt(!1,`The URL path "${s}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),s}}function Kn(s,o){if(o==="/")return s;if(!s.toLowerCase().startsWith(o.toLowerCase()))return null;let c=o.endsWith("/")?o.length-1:o.length,y=s.charAt(c);return y&&y!=="/"?null:s.slice(c)||"/"}function Ih(s,o="/"){let{pathname:c,search:y="",hash:w=""}=typeof s=="string"?cr(s):s;return{pathname:c?c.startsWith("/")?c:Oh(c,o):o,search:Fh(y),hash:Bh(w)}}function Oh(s,o){let c=o.replace(/\/+$/,"").split("/");return s.split("/").forEach(w=>{w===".."?c.length>1&&c.pop():w!=="."&&c.push(w)}),c.length>1?c.join("/"):"/"}function Pa(s,o,c,y){return`Cannot include a '${s}' character in a manually specified \`to.${o}\` field [${JSON.stringify(y)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Nh(s){return s.filter((o,c)=>c===0||o.route.path&&o.route.path.length>0)}function Ha(s){let o=Nh(s);return o.map((c,y)=>y===o.length-1?c.pathname:c.pathnameBase)}function $a(s,o,c,y=!1){let w;typeof s=="string"?w=cr(s):(w={...s},Je(!w.pathname||!w.pathname.includes("?"),Pa("?","pathname","search",w)),Je(!w.pathname||!w.pathname.includes("#"),Pa("#","pathname","hash",w)),Je(!w.search||!w.search.includes("#"),Pa("#","search","hash",w)));let x=s===""||w.pathname==="",L=x?"/":w.pathname,O;if(L==null)O=c;else{let Q=o.length-1;if(!y&&L.startsWith("..")){let G=L.split("/");for(;G[0]==="..";)G.shift(),Q-=1;w.pathname=G.join("/")}O=Q>=0?o[Q]:"/"}let C=Ih(w,O),k=L&&L!=="/"&&L.endsWith("/"),W=(x||L===".")&&c.endsWith("/");return!C.pathname.endsWith("/")&&(k||W)&&(C.pathname+="/"),C}var kn=s=>s.join("/").replace(/\/\/+/g,"/"),bh=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Fh=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Bh=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Hh(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var id=["POST","PUT","PATCH","DELETE"];new Set(id);var $h=["GET",...id];new Set($h);var Ir=j.createContext(null);Ir.displayName="DataRouter";var Bs=j.createContext(null);Bs.displayName="DataRouterState";var sd=j.createContext({isTransitioning:!1});sd.displayName="ViewTransition";var Gh=j.createContext(new Map);Gh.displayName="Fetchers";var Vh=j.createContext(null);Vh.displayName="Await";var an=j.createContext(null);an.displayName="Navigation";var xi=j.createContext(null);xi.displayName="Location";var vn=j.createContext({outlet:null,matches:[],isDataRoute:!1});vn.displayName="Route";var Ga=j.createContext(null);Ga.displayName="RouteError";function jh(s,{relative:o}={}){Je(Or(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:y}=j.useContext(an),{hash:w,pathname:x,search:L}=Ri(s,{relative:o}),O=x;return c!=="/"&&(O=x==="/"?c:kn([c,x])),y.createHref({pathname:O,search:L,hash:w})}function Or(){return j.useContext(xi)!=null}function yn(){return Je(Or(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(xi).location}var od="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ad(s){j.useContext(an).static||j.useLayoutEffect(s)}function Ti(){let{isDataRoute:s}=j.useContext(vn);return s?ip():qh()}function qh(){Je(Or(),"useNavigate() may be used only in the context of a <Router> component.");let s=j.useContext(Ir),{basename:o,navigator:c}=j.useContext(an),{matches:y}=j.useContext(vn),{pathname:w}=yn(),x=JSON.stringify(Ha(y)),L=j.useRef(!1);return ad(()=>{L.current=!0}),j.useCallback((C,k={})=>{if(qt(L.current,od),!L.current)return;if(typeof C=="number"){c.go(C);return}let W=$a(C,JSON.parse(x),w,k.relative==="path");s==null&&o!=="/"&&(W.pathname=W.pathname==="/"?o:kn([o,W.pathname])),(k.replace?c.replace:c.push)(W,k.state,k)},[o,c,x,w,s])}j.createContext(null);function Ri(s,{relative:o}={}){let{matches:c}=j.useContext(vn),{pathname:y}=yn(),w=JSON.stringify(Ha(c));return j.useMemo(()=>$a(s,JSON.parse(w),y,o==="path"),[s,w,y,o])}function Wh(s,o){return ld(s,o)}function ld(s,o,c,y){var Y;Je(Or(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:w}=j.useContext(an),{matches:x}=j.useContext(vn),L=x[x.length-1],O=L?L.params:{},C=L?L.pathname:"/",k=L?L.pathnameBase:"/",W=L&&L.route;{let q=W&&W.path||"";ud(C,!W||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${C}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let Q=yn(),G;if(o){let q=typeof o=="string"?cr(o):o;Je(k==="/"||((Y=q.pathname)==null?void 0:Y.startsWith(k)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${q.pathname}" was given in the \`location\` prop.`),G=q}else G=Q;let ne=G.pathname||"/",K=ne;if(k!=="/"){let q=k.replace(/^\//,"").split("/");K="/"+ne.replace(/^\//,"").split("/").slice(q.length).join("/")}let ee=td(s,{pathname:K});qt(W||ee!=null,`No routes matched location "${G.pathname}${G.search}${G.hash}" `),qt(ee==null||ee[ee.length-1].route.element!==void 0||ee[ee.length-1].route.Component!==void 0||ee[ee.length-1].route.lazy!==void 0,`Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let J=Xh(ee&&ee.map(q=>Object.assign({},q,{params:Object.assign({},O,q.params),pathname:kn([k,w.encodeLocation?w.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?k:kn([k,w.encodeLocation?w.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),x,c,y);return o&&J?j.createElement(xi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...G},navigationType:"POP"}},J):J}function Zh(){let s=rp(),o=Hh(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),c=s instanceof Error?s.stack:null,y="rgba(200,200,200, 0.5)",w={padding:"0.5rem",backgroundColor:y},x={padding:"2px 4px",backgroundColor:y},L=null;return console.error("Error handled by React Router default ErrorBoundary:",s),L=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:x},"ErrorBoundary")," or"," ",j.createElement("code",{style:x},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},o),c?j.createElement("pre",{style:w},c):null,L)}var Qh=j.createElement(Zh,null),Yh=class extends j.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,o){return o.location!==s.location||o.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:o.error,location:o.location,revalidation:s.revalidation||o.revalidation}}componentDidCatch(s,o){console.error("React Router caught the following error during render",s,o)}render(){return this.state.error!==void 0?j.createElement(vn.Provider,{value:this.props.routeContext},j.createElement(Ga.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Kh({routeContext:s,match:o,children:c}){let y=j.useContext(Ir);return y&&y.static&&y.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(y.staticContext._deepestRenderedBoundaryId=o.route.id),j.createElement(vn.Provider,{value:s},c)}function Xh(s,o=[],c=null,y=null){if(s==null){if(!c)return null;if(c.errors)s=c.matches;else if(o.length===0&&!c.initialized&&c.matches.length>0)s=c.matches;else return null}let w=s,x=c==null?void 0:c.errors;if(x!=null){let C=w.findIndex(k=>k.route.id&&(x==null?void 0:x[k.route.id])!==void 0);Je(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),w=w.slice(0,Math.min(w.length,C+1))}let L=!1,O=-1;if(c)for(let C=0;C<w.length;C++){let k=w[C];if((k.route.HydrateFallback||k.route.hydrateFallbackElement)&&(O=C),k.route.id){let{loaderData:W,errors:Q}=c,G=k.route.loader&&!W.hasOwnProperty(k.route.id)&&(!Q||Q[k.route.id]===void 0);if(k.route.lazy||G){L=!0,O>=0?w=w.slice(0,O+1):w=[w[0]];break}}}return w.reduceRight((C,k,W)=>{let Q,G=!1,ne=null,K=null;c&&(Q=x&&k.route.id?x[k.route.id]:void 0,ne=k.route.errorElement||Qh,L&&(O<0&&W===0?(ud("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,K=null):O===W&&(G=!0,K=k.route.hydrateFallbackElement||null)));let ee=o.concat(w.slice(0,W+1)),J=()=>{let Y;return Q?Y=ne:G?Y=K:k.route.Component?Y=j.createElement(k.route.Component,null):k.route.element?Y=k.route.element:Y=C,j.createElement(Kh,{match:k,routeContext:{outlet:C,matches:ee,isDataRoute:c!=null},children:Y})};return c&&(k.route.ErrorBoundary||k.route.errorElement||W===0)?j.createElement(Yh,{location:c.location,revalidation:c.revalidation,component:ne,error:Q,children:J(),routeContext:{outlet:null,matches:ee,isDataRoute:!0}}):J()},null)}function Va(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jh(s){let o=j.useContext(Ir);return Je(o,Va(s)),o}function ep(s){let o=j.useContext(Bs);return Je(o,Va(s)),o}function tp(s){let o=j.useContext(vn);return Je(o,Va(s)),o}function ja(s){let o=tp(s),c=o.matches[o.matches.length-1];return Je(c.route.id,`${s} can only be used on routes that contain a unique "id"`),c.route.id}function np(){return ja("useRouteId")}function rp(){var y;let s=j.useContext(Ga),o=ep("useRouteError"),c=ja("useRouteError");return s!==void 0?s:(y=o.errors)==null?void 0:y[c]}function ip(){let{router:s}=Jh("useNavigate"),o=ja("useNavigate"),c=j.useRef(!1);return ad(()=>{c.current=!0}),j.useCallback(async(w,x={})=>{qt(c.current,od),c.current&&(typeof w=="number"?s.navigate(w):await s.navigate(w,{fromRouteId:o,...x}))},[s,o])}var Hc={};function ud(s,o,c){!o&&!Hc[s]&&(Hc[s]=!0,qt(!1,c))}j.memo(sp);function sp({routes:s,future:o,state:c}){return ld(s,void 0,c,o)}function op({to:s,replace:o,state:c,relative:y}){Je(Or(),"<Navigate> may be used only in the context of a <Router> component.");let{static:w}=j.useContext(an);qt(!w,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:x}=j.useContext(vn),{pathname:L}=yn(),O=Ti(),C=$a(s,Ha(x),L,y==="path"),k=JSON.stringify(C);return j.useEffect(()=>{O(JSON.parse(k),{replace:o,state:c,relative:y})},[O,k,y,o,c]),null}function Os(s){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ap({basename:s="/",children:o=null,location:c,navigationType:y="POP",navigator:w,static:x=!1}){Je(!Or(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let L=s.replace(/^\/*/,"/"),O=j.useMemo(()=>({basename:L,navigator:w,static:x,future:{}}),[L,w,x]);typeof c=="string"&&(c=cr(c));let{pathname:C="/",search:k="",hash:W="",state:Q=null,key:G="default"}=c,ne=j.useMemo(()=>{let K=Kn(C,L);return K==null?null:{location:{pathname:K,search:k,hash:W,state:Q,key:G},navigationType:y}},[L,C,k,W,Q,G,y]);return qt(ne!=null,`<Router basename="${L}"> is not able to match the URL "${C}${k}${W}" because it does not start with the basename, so the <Router> won't render anything.`),ne==null?null:j.createElement(an.Provider,{value:O},j.createElement(xi.Provider,{children:o,value:ne}))}function lp({children:s,location:o}){return Wh(Oa(s),o)}function Oa(s,o=[]){let c=[];return j.Children.forEach(s,(y,w)=>{if(!j.isValidElement(y))return;let x=[...o,w];if(y.type===j.Fragment){c.push.apply(c,Oa(y.props.children,x));return}Je(y.type===Os,`[${typeof y.type=="string"?y.type:y.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!y.props.index||!y.props.children,"An index route cannot have child routes.");let L={id:y.props.id||x.join("-"),caseSensitive:y.props.caseSensitive,element:y.props.element,Component:y.props.Component,index:y.props.index,path:y.props.path,loader:y.props.loader,action:y.props.action,hydrateFallbackElement:y.props.hydrateFallbackElement,HydrateFallback:y.props.HydrateFallback,errorElement:y.props.errorElement,ErrorBoundary:y.props.ErrorBoundary,hasErrorBoundary:y.props.hasErrorBoundary===!0||y.props.ErrorBoundary!=null||y.props.errorElement!=null,shouldRevalidate:y.props.shouldRevalidate,handle:y.props.handle,lazy:y.props.lazy};y.props.children&&(L.children=Oa(y.props.children,x)),c.push(L)}),c}var Ns="get",bs="application/x-www-form-urlencoded";function Hs(s){return s!=null&&typeof s.tagName=="string"}function up(s){return Hs(s)&&s.tagName.toLowerCase()==="button"}function cp(s){return Hs(s)&&s.tagName.toLowerCase()==="form"}function dp(s){return Hs(s)&&s.tagName.toLowerCase()==="input"}function fp(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function hp(s,o){return s.button===0&&(!o||o==="_self")&&!fp(s)}function Na(s=""){return new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((o,c)=>{let y=s[c];return o.concat(Array.isArray(y)?y.map(w=>[c,w]):[[c,y]])},[]))}function pp(s,o){let c=Na(s);return o&&o.forEach((y,w)=>{c.has(w)||o.getAll(w).forEach(x=>{c.append(w,x)})}),c}var Us=null;function mp(){if(Us===null)try{new FormData(document.createElement("form"),0),Us=!1}catch{Us=!0}return Us}var gp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ka(s){return s!=null&&!gp.has(s)?(qt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bs}"`),null):s}function vp(s,o){let c,y,w,x,L;if(cp(s)){let O=s.getAttribute("action");y=O?Kn(O,o):null,c=s.getAttribute("method")||Ns,w=ka(s.getAttribute("enctype"))||bs,x=new FormData(s)}else if(up(s)||dp(s)&&(s.type==="submit"||s.type==="image")){let O=s.form;if(O==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let C=s.getAttribute("formaction")||O.getAttribute("action");if(y=C?Kn(C,o):null,c=s.getAttribute("formmethod")||O.getAttribute("method")||Ns,w=ka(s.getAttribute("formenctype"))||ka(O.getAttribute("enctype"))||bs,x=new FormData(O,s),!mp()){let{name:k,type:W,value:Q}=s;if(W==="image"){let G=k?`${k}.`:"";x.append(`${G}x`,"0"),x.append(`${G}y`,"0")}else k&&x.append(k,Q)}}else{if(Hs(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Ns,y=null,w=bs,L=s}return x&&w==="text/plain"&&(L=x,x=void 0),{action:y,method:c.toLowerCase(),encType:w,formData:x,body:L}}function qa(s,o){if(s===!1||s===null||typeof s>"u")throw new Error(o)}async function yp(s,o){if(s.id in o)return o[s.id];try{let c=await import(s.module);return o[s.id]=c,c}catch(c){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wp(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function _p(s,o,c){let y=await Promise.all(s.map(async w=>{let x=o.routes[w.route.id];if(x){let L=await yp(x,c);return L.links?L.links():[]}return[]}));return Rp(y.flat(1).filter(wp).filter(w=>w.rel==="stylesheet"||w.rel==="preload").map(w=>w.rel==="stylesheet"?{...w,rel:"prefetch",as:"style"}:{...w,rel:"prefetch"}))}function $c(s,o,c,y,w,x){let L=(C,k)=>c[k]?C.route.id!==c[k].route.id:!0,O=(C,k)=>{var W;return c[k].pathname!==C.pathname||((W=c[k].route.path)==null?void 0:W.endsWith("*"))&&c[k].params["*"]!==C.params["*"]};return x==="assets"?o.filter((C,k)=>L(C,k)||O(C,k)):x==="data"?o.filter((C,k)=>{var Q;let W=y.routes[C.route.id];if(!W||!W.hasLoader)return!1;if(L(C,k)||O(C,k))return!0;if(C.route.shouldRevalidate){let G=C.route.shouldRevalidate({currentUrl:new URL(w.pathname+w.search+w.hash,window.origin),currentParams:((Q=c[0])==null?void 0:Q.params)||{},nextUrl:new URL(s,window.origin),nextParams:C.params,defaultShouldRevalidate:!0});if(typeof G=="boolean")return G}return!0}):[]}function Sp(s,o){return xp(s.map(c=>{let y=o.routes[c.route.id];if(!y)return[];let w=[y.module];return y.imports&&(w=w.concat(y.imports)),w}).flat(1))}function xp(s){return[...new Set(s)]}function Tp(s){let o={},c=Object.keys(s).sort();for(let y of c)o[y]=s[y];return o}function Rp(s,o){let c=new Set;return new Set(o),s.reduce((y,w)=>{let x=JSON.stringify(Tp(w));return c.has(x)||(c.add(x),y.push({key:x,link:w})),y},[])}function Mp(s){let o=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return o.pathname==="/"?o.pathname="_root.data":o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function Ep(){let s=j.useContext(Ir);return qa(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Lp(){let s=j.useContext(Bs);return qa(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Wa=j.createContext(void 0);Wa.displayName="FrameworkContext";function cd(){let s=j.useContext(Wa);return qa(s,"You must render this element inside a <HydratedRouter> element"),s}function Ap(s,o){let c=j.useContext(Wa),[y,w]=j.useState(!1),[x,L]=j.useState(!1),{onFocus:O,onBlur:C,onMouseEnter:k,onMouseLeave:W,onTouchStart:Q}=o,G=j.useRef(null);j.useEffect(()=>{if(s==="render"&&L(!0),s==="viewport"){let ee=Y=>{Y.forEach(q=>{L(q.isIntersecting)})},J=new IntersectionObserver(ee,{threshold:.5});return G.current&&J.observe(G.current),()=>{J.disconnect()}}},[s]),j.useEffect(()=>{if(y){let ee=setTimeout(()=>{L(!0)},100);return()=>{clearTimeout(ee)}}},[y]);let ne=()=>{w(!0)},K=()=>{w(!1),L(!1)};return c?s!=="intent"?[x,G,{}]:[x,G,{onFocus:yi(O,ne),onBlur:yi(C,K),onMouseEnter:yi(k,ne),onMouseLeave:yi(W,K),onTouchStart:yi(Q,ne)}]:[!1,G,{}]}function yi(s,o){return c=>{s&&s(c),c.defaultPrevented||o(c)}}function Pp({page:s,...o}){let{router:c}=Ep(),y=j.useMemo(()=>td(c.routes,s,c.basename),[c.routes,s,c.basename]);return y?j.createElement(Cp,{page:s,matches:y,...o}):null}function kp(s){let{manifest:o,routeModules:c}=cd(),[y,w]=j.useState([]);return j.useEffect(()=>{let x=!1;return _p(s,o,c).then(L=>{x||w(L)}),()=>{x=!0}},[s,o,c]),y}function Cp({page:s,matches:o,...c}){let y=yn(),{manifest:w,routeModules:x}=cd(),{loaderData:L,matches:O}=Lp(),C=j.useMemo(()=>$c(s,o,O,w,y,"data"),[s,o,O,w,y]),k=j.useMemo(()=>$c(s,o,O,w,y,"assets"),[s,o,O,w,y]),W=j.useMemo(()=>{if(s===y.pathname+y.search+y.hash)return[];let ne=new Set,K=!1;if(o.forEach(J=>{var q;let Y=w.routes[J.route.id];!Y||!Y.hasLoader||(!C.some(le=>le.route.id===J.route.id)&&J.route.id in L&&((q=x[J.route.id])!=null&&q.shouldRevalidate)||Y.hasClientLoader?K=!0:ne.add(J.route.id))}),ne.size===0)return[];let ee=Mp(s);return K&&ne.size>0&&ee.searchParams.set("_routes",o.filter(J=>ne.has(J.route.id)).map(J=>J.route.id).join(",")),[ee.pathname+ee.search]},[L,y,w,C,o,s,x]),Q=j.useMemo(()=>Sp(k,w),[k,w]),G=kp(k);return j.createElement(j.Fragment,null,W.map(ne=>j.createElement("link",{key:ne,rel:"prefetch",as:"fetch",href:ne,...c})),Q.map(ne=>j.createElement("link",{key:ne,rel:"modulepreload",href:ne,...c})),G.map(({key:ne,link:K})=>j.createElement("link",{key:ne,...K})))}function zp(...s){return o=>{s.forEach(c=>{typeof c=="function"?c(o):c!=null&&(c.current=o)})}}var dd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{dd&&(window.__reactRouterVersion="7.1.1")}catch{}function Dp({basename:s,children:o,window:c}){let y=j.useRef();y.current==null&&(y.current=wh({window:c,v5Compat:!0}));let w=y.current,[x,L]=j.useState({action:w.action,location:w.location}),O=j.useCallback(C=>{j.startTransition(()=>L(C))},[L]);return j.useLayoutEffect(()=>w.listen(O),[w,O]),j.createElement(ap,{basename:s,children:o,location:x.location,navigationType:x.action,navigator:w})}var fd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hd=j.forwardRef(function({onClick:o,discover:c="render",prefetch:y="none",relative:w,reloadDocument:x,replace:L,state:O,target:C,to:k,preventScrollReset:W,viewTransition:Q,...G},ne){let{basename:K}=j.useContext(an),ee=typeof k=="string"&&fd.test(k),J,Y=!1;if(typeof k=="string"&&ee&&(J=k,dd))try{let be=new URL(window.location.href),Fe=k.startsWith("//")?new URL(be.protocol+k):new URL(k),et=Kn(Fe.pathname,K);Fe.origin===be.origin&&et!=null?k=et+Fe.search+Fe.hash:Y=!0}catch{qt(!1,`<Link to="${k}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=jh(k,{relative:w}),[le,we,ke]=Ap(y,G),Oe=Np(k,{replace:L,state:O,target:C,preventScrollReset:W,relative:w,viewTransition:Q});function Ne(be){o&&o(be),be.defaultPrevented||Oe(be)}let Be=j.createElement("a",{...G,...ke,href:J||q,onClick:Y||x?o:Ne,ref:zp(ne,we),target:C,"data-discover":!ee&&c==="render"?"true":void 0});return le&&!ee?j.createElement(j.Fragment,null,Be,j.createElement(Pp,{page:q})):Be});hd.displayName="Link";var Up=j.forwardRef(function({"aria-current":o="page",caseSensitive:c=!1,className:y="",end:w=!1,style:x,to:L,viewTransition:O,children:C,...k},W){let Q=Ri(L,{relative:k.relative}),G=yn(),ne=j.useContext(Bs),{navigator:K,basename:ee}=j.useContext(an),J=ne!=null&&Gp(Q)&&O===!0,Y=K.encodeLocation?K.encodeLocation(Q).pathname:Q.pathname,q=G.pathname,le=ne&&ne.navigation&&ne.navigation.location?ne.navigation.location.pathname:null;c||(q=q.toLowerCase(),le=le?le.toLowerCase():null,Y=Y.toLowerCase()),le&&ee&&(le=Kn(le,ee)||le);const we=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let ke=q===Y||!w&&q.startsWith(Y)&&q.charAt(we)==="/",Oe=le!=null&&(le===Y||!w&&le.startsWith(Y)&&le.charAt(Y.length)==="/"),Ne={isActive:ke,isPending:Oe,isTransitioning:J},Be=ke?o:void 0,be;typeof y=="function"?be=y(Ne):be=[y,ke?"active":null,Oe?"pending":null,J?"transitioning":null].filter(Boolean).join(" ");let Fe=typeof x=="function"?x(Ne):x;return j.createElement(hd,{...k,"aria-current":Be,className:be,ref:W,style:Fe,to:L,viewTransition:O},typeof C=="function"?C(Ne):C)});Up.displayName="NavLink";var Ip=j.forwardRef(({discover:s="render",fetcherKey:o,navigate:c,reloadDocument:y,replace:w,state:x,method:L=Ns,action:O,onSubmit:C,relative:k,preventScrollReset:W,viewTransition:Q,...G},ne)=>{let K=Hp(),ee=$p(O,{relative:k}),J=L.toLowerCase()==="get"?"get":"post",Y=typeof O=="string"&&fd.test(O),q=le=>{if(C&&C(le),le.defaultPrevented)return;le.preventDefault();let we=le.nativeEvent.submitter,ke=(we==null?void 0:we.getAttribute("formmethod"))||L;K(we||le.currentTarget,{fetcherKey:o,method:ke,navigate:c,replace:w,state:x,relative:k,preventScrollReset:W,viewTransition:Q})};return j.createElement("form",{ref:ne,method:J,action:ee,onSubmit:y?C:q,...G,"data-discover":!Y&&s==="render"?"true":void 0})});Ip.displayName="Form";function Op(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pd(s){let o=j.useContext(Ir);return Je(o,Op(s)),o}function Np(s,{target:o,replace:c,state:y,preventScrollReset:w,relative:x,viewTransition:L}={}){let O=Ti(),C=yn(),k=Ri(s,{relative:x});return j.useCallback(W=>{if(hp(W,o)){W.preventDefault();let Q=c!==void 0?c:_i(C)===_i(k);O(s,{replace:Q,state:y,preventScrollReset:w,relative:x,viewTransition:L})}},[C,O,k,c,y,o,s,w,x,L])}function bp(s){qt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=j.useRef(Na(s)),c=j.useRef(!1),y=yn(),w=j.useMemo(()=>pp(y.search,c.current?null:o.current),[y.search]),x=Ti(),L=j.useCallback((O,C)=>{const k=Na(typeof O=="function"?O(w):O);c.current=!0,x("?"+k,C)},[x,w]);return[w,L]}var Fp=0,Bp=()=>`__${String(++Fp)}__`;function Hp(){let{router:s}=pd("useSubmit"),{basename:o}=j.useContext(an),c=np();return j.useCallback(async(y,w={})=>{let{action:x,method:L,encType:O,formData:C,body:k}=vp(y,o);if(w.navigate===!1){let W=w.fetcherKey||Bp();await s.fetch(W,c,w.action||x,{preventScrollReset:w.preventScrollReset,formData:C,body:k,formMethod:w.method||L,formEncType:w.encType||O,flushSync:w.flushSync})}else await s.navigate(w.action||x,{preventScrollReset:w.preventScrollReset,formData:C,body:k,formMethod:w.method||L,formEncType:w.encType||O,replace:w.replace,state:w.state,fromRouteId:c,flushSync:w.flushSync,viewTransition:w.viewTransition})},[s,o,c])}function $p(s,{relative:o}={}){let{basename:c}=j.useContext(an),y=j.useContext(vn);Je(y,"useFormAction must be used inside a RouteContext");let[w]=y.matches.slice(-1),x={...Ri(s||".",{relative:o})},L=yn();if(s==null){x.search=L.search;let O=new URLSearchParams(x.search),C=O.getAll("index");if(C.some(W=>W==="")){O.delete("index"),C.filter(Q=>Q).forEach(Q=>O.append("index",Q));let W=O.toString();x.search=W?`?${W}`:""}}return(!s||s===".")&&w.route.index&&(x.search=x.search?x.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(x.pathname=x.pathname==="/"?c:kn([c,x.pathname])),_i(x)}function Gp(s,o={}){let c=j.useContext(sd);Je(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:y}=pd("useViewTransitionState"),w=Ri(s,{relative:o.relative});if(!c.isTransitioning)return!1;let x=Kn(c.currentLocation.pathname,y)||c.currentLocation.pathname,L=Kn(c.nextLocation.pathname,y)||c.nextLocation.pathname;return Fs(w.pathname,L)!=null||Fs(w.pathname,x)!=null}new TextEncoder;const Vp=ye.jsx("a",{target:"_blank",rel:"noreferrer",href:"mailto:estelle.booher@gmail.com",children:"estelle.booher@gmail.com"}),jp=ye.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/EllarBooher",children:"https://github.com/EllarBooher"}),Is=j.memo(function({hyperlink:o,externalLink:c=!0,thumbnailAssets:y=[],title:w="PLACEHOLDER TITLE",description:x="PLACEHOLDER DESCRIPTION"}){const L=ye.jsx("div",{className:"DisplayCard-thumbnails",children:y.map(k=>ye.jsx("div",{className:"DisplayCard-thumbnail",children:ye.jsx("img",{className:"DisplayCard-image",src:k.toString(),alt:""})},k.toString()))}),O=Ti(),C=()=>{var k;c?window.location.href=o:(k=O(o))==null||k.catch(W=>{throw new Error("Unable to navigate",{cause:W})})};return ye.jsx("button",{className:"DisplayCard",onClick:C,children:ye.jsxs("div",{children:[ye.jsx("div",{className:"DisplayCard-name",children:w}),ye.jsxs("div",{className:"DisplayCard-body",children:[x,L]})]})})});function qp(){return ye.jsxs("div",{className:"App",children:[ye.jsx("div",{className:"website-main",children:ye.jsxs("div",{children:["Hello, my name is Estelle Booher. My passion is realtime rendering and engine infrastructure, and I am actively working on building a portfolio and career in computer graphics. This website is a landing spot where I will host links to various projects of mine.",ye.jsx("br",{}),ye.jsx("br",{}),"My github is at ",jp,", where I host the source code of my projects including this website.",ye.jsx("br",{}),"To contact me, please email at ",Vp,".",ye.jsx("br",{}),ye.jsx("h1",{children:"WebGPU"}),ye.jsx("div",{className:"DisplayGrid",children:ye.jsx(Is,{hyperlink:"/webgpu-samples?sample=hello-cube",externalLink:!1,thumbnailAssets:[],title:"Hello Cube",description:`
                Test of WebGPU.
              `})}),ye.jsx("h1",{children:"Computer Graphics Offline"}),ye.jsxs("div",{className:"DisplayGrid",children:[ye.jsx(Is,{hyperlink:"https://github.com/EllarBooher/Syzygy",thumbnailAssets:[new URL("/assets/syzygy1-CItzHwJc.png",import.meta.url)],title:"Syzygy",description:`
                A sandbox renderer I started to study C++ and Vulkan. 
                It aims to be a testbed of various features and techniques.
              `}),ye.jsx(Is,{hyperlink:"https://github.com/EllarBooher/VulkanTemplate/tree/SSAO",thumbnailAssets:[new URL("/assets/ssao1-8Qfbb4oF.png",import.meta.url)],title:"SSAO",description:`
                An implementation of Screen-Space Ambient Occlusion.
              `})]}),ye.jsx("h1",{children:"Video Games"}),ye.jsx(Is,{hyperlink:"https://ellarbooher.itch.io/snail-blazer",thumbnailAssets:[new URL("/assets/snailblazer1-Bl1793QZ.png",import.meta.url),new URL("/assets/snailblazer2-CU4gYciB.png",import.meta.url)],title:"Snail Blazer",description:`
              A short bullet-hell made for the Bullet Hell Jam 2023 on itch.io. 
              The player primarily moves via grappling on enemy projectiles and the environment, 
              instead of the conventional WASD-style of movement.
            `})]})}),ye.jsx("footer",{className:"website-footer",children:"All works present are copyrighted, unless provided with external attributions or license."})]})}const Wp=`struct VertexOut {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f
}

@group(0) @binding(0)
var<uniform> projViewModel: mat4x4<f32>;

@vertex
fn vertex_main(@location(0) position: vec4f,
               @location(1) color: vec4f) -> VertexOut
{
  var output : VertexOut;
  output.position = projViewModel * position;
  output.color = color;
  return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4f
{
  return fragData.color;
}`;function Zp(s,o){return class extends s{constructor(...c){super(...c),o(this)}}}const Qp=Zp(Array,s=>s.fill(0));let De=1e-6;function Yp(s){function o(a=0,g=0){const u=new s(2);return a!==void 0&&(u[0]=a,g!==void 0&&(u[1]=g)),u}const c=o;function y(a,g,u){const h=u??new s(2);return h[0]=a,h[1]=g,h}function w(a,g){const u=g??new s(2);return u[0]=Math.ceil(a[0]),u[1]=Math.ceil(a[1]),u}function x(a,g){const u=g??new s(2);return u[0]=Math.floor(a[0]),u[1]=Math.floor(a[1]),u}function L(a,g){const u=g??new s(2);return u[0]=Math.round(a[0]),u[1]=Math.round(a[1]),u}function O(a,g=0,u=1,h){const _=h??new s(2);return _[0]=Math.min(u,Math.max(g,a[0])),_[1]=Math.min(u,Math.max(g,a[1])),_}function C(a,g,u){const h=u??new s(2);return h[0]=a[0]+g[0],h[1]=a[1]+g[1],h}function k(a,g,u,h){const _=h??new s(2);return _[0]=a[0]+g[0]*u,_[1]=a[1]+g[1]*u,_}function W(a,g){const u=a[0],h=a[1],_=g[0],z=g[1],B=Math.sqrt(u*u+h*h),v=Math.sqrt(_*_+z*z),S=B*v,P=S&&be(a,g)/S;return Math.acos(P)}function Q(a,g,u){const h=u??new s(2);return h[0]=a[0]-g[0],h[1]=a[1]-g[1],h}const G=Q;function ne(a,g){return Math.abs(a[0]-g[0])<De&&Math.abs(a[1]-g[1])<De}function K(a,g){return a[0]===g[0]&&a[1]===g[1]}function ee(a,g,u,h){const _=h??new s(2);return _[0]=a[0]+u*(g[0]-a[0]),_[1]=a[1]+u*(g[1]-a[1]),_}function J(a,g,u,h){const _=h??new s(2);return _[0]=a[0]+u[0]*(g[0]-a[0]),_[1]=a[1]+u[1]*(g[1]-a[1]),_}function Y(a,g,u){const h=u??new s(2);return h[0]=Math.max(a[0],g[0]),h[1]=Math.max(a[1],g[1]),h}function q(a,g,u){const h=u??new s(2);return h[0]=Math.min(a[0],g[0]),h[1]=Math.min(a[1],g[1]),h}function le(a,g,u){const h=u??new s(2);return h[0]=a[0]*g,h[1]=a[1]*g,h}const we=le;function ke(a,g,u){const h=u??new s(2);return h[0]=a[0]/g,h[1]=a[1]/g,h}function Oe(a,g){const u=g??new s(2);return u[0]=1/a[0],u[1]=1/a[1],u}const Ne=Oe;function Be(a,g,u){const h=u??new s(3),_=a[0]*g[1]-a[1]*g[0];return h[0]=0,h[1]=0,h[2]=_,h}function be(a,g){return a[0]*g[0]+a[1]*g[1]}function Fe(a){const g=a[0],u=a[1];return Math.sqrt(g*g+u*u)}const et=Fe;function Ee(a){const g=a[0],u=a[1];return g*g+u*u}const Ce=Ee;function Re(a,g){const u=a[0]-g[0],h=a[1]-g[1];return Math.sqrt(u*u+h*h)}const ot=Re;function Ve(a,g){const u=a[0]-g[0],h=a[1]-g[1];return u*u+h*h}const He=Ve;function ae(a,g){const u=g??new s(2),h=a[0],_=a[1],z=Math.sqrt(h*h+_*_);return z>1e-5?(u[0]=h/z,u[1]=_/z):(u[0]=0,u[1]=0),u}function ge(a,g){const u=g??new s(2);return u[0]=-a[0],u[1]=-a[1],u}function se(a,g){const u=g??new s(2);return u[0]=a[0],u[1]=a[1],u}const I=se;function X(a,g,u){const h=u??new s(2);return h[0]=a[0]*g[0],h[1]=a[1]*g[1],h}const Te=X;function _e(a,g,u){const h=u??new s(2);return h[0]=a[0]/g[0],h[1]=a[1]/g[1],h}const Pe=_e;function Ae(a=1,g){const u=g??new s(2),h=Math.random()*2*Math.PI;return u[0]=Math.cos(h)*a,u[1]=Math.sin(h)*a,u}function f(a){const g=a??new s(2);return g[0]=0,g[1]=0,g}function R(a,g,u){const h=u??new s(2),_=a[0],z=a[1];return h[0]=_*g[0]+z*g[4]+g[12],h[1]=_*g[1]+z*g[5]+g[13],h}function d(a,g,u){const h=u??new s(2),_=a[0],z=a[1];return h[0]=g[0]*_+g[4]*z+g[8],h[1]=g[1]*_+g[5]*z+g[9],h}function p(a,g,u,h){const _=h??new s(2),z=a[0]-g[0],B=a[1]-g[1],v=Math.sin(u),S=Math.cos(u);return _[0]=z*S-B*v+g[0],_[1]=z*v+B*S+g[1],_}function T(a,g,u){const h=u??new s(2);return ae(a,h),le(h,g,h)}function E(a,g,u){const h=u??new s(2);return Fe(a)>g?T(a,g,h):se(a,h)}function F(a,g,u){const h=u??new s(2);return ee(a,g,.5,h)}return{create:o,fromValues:c,set:y,ceil:w,floor:x,round:L,clamp:O,add:C,addScaled:k,angle:W,subtract:Q,sub:G,equalsApproximately:ne,equals:K,lerp:ee,lerpV:J,max:Y,min:q,mulScalar:le,scale:we,divScalar:ke,inverse:Oe,invert:Ne,cross:Be,dot:be,length:Fe,len:et,lengthSq:Ee,lenSq:Ce,distance:Re,dist:ot,distanceSq:Ve,distSq:He,normalize:ae,negate:ge,copy:se,clone:I,multiply:X,mul:Te,divide:_e,div:Pe,random:Ae,zero:f,transformMat4:R,transformMat3:d,rotate:p,setLength:T,truncate:E,midpoint:F}}const Gc=new Map;function md(s){let o=Gc.get(s);return o||(o=Yp(s),Gc.set(s,o)),o}function Kp(s){function o(v,S,P){const D=new s(3);return v!==void 0&&(D[0]=v,S!==void 0&&(D[1]=S,P!==void 0&&(D[2]=P))),D}const c=o;function y(v,S,P,D){const H=D??new s(3);return H[0]=v,H[1]=S,H[2]=P,H}function w(v,S){const P=S??new s(3);return P[0]=Math.ceil(v[0]),P[1]=Math.ceil(v[1]),P[2]=Math.ceil(v[2]),P}function x(v,S){const P=S??new s(3);return P[0]=Math.floor(v[0]),P[1]=Math.floor(v[1]),P[2]=Math.floor(v[2]),P}function L(v,S){const P=S??new s(3);return P[0]=Math.round(v[0]),P[1]=Math.round(v[1]),P[2]=Math.round(v[2]),P}function O(v,S=0,P=1,D){const H=D??new s(3);return H[0]=Math.min(P,Math.max(S,v[0])),H[1]=Math.min(P,Math.max(S,v[1])),H[2]=Math.min(P,Math.max(S,v[2])),H}function C(v,S,P){const D=P??new s(3);return D[0]=v[0]+S[0],D[1]=v[1]+S[1],D[2]=v[2]+S[2],D}function k(v,S,P,D){const H=D??new s(3);return H[0]=v[0]+S[0]*P,H[1]=v[1]+S[1]*P,H[2]=v[2]+S[2]*P,H}function W(v,S){const P=v[0],D=v[1],H=v[2],V=S[0],Z=S[1],fe=S[2],Me=Math.sqrt(P*P+D*D+H*H),ce=Math.sqrt(V*V+Z*Z+fe*fe),he=Me*ce,ze=he&&be(v,S)/he;return Math.acos(ze)}function Q(v,S,P){const D=P??new s(3);return D[0]=v[0]-S[0],D[1]=v[1]-S[1],D[2]=v[2]-S[2],D}const G=Q;function ne(v,S){return Math.abs(v[0]-S[0])<De&&Math.abs(v[1]-S[1])<De&&Math.abs(v[2]-S[2])<De}function K(v,S){return v[0]===S[0]&&v[1]===S[1]&&v[2]===S[2]}function ee(v,S,P,D){const H=D??new s(3);return H[0]=v[0]+P*(S[0]-v[0]),H[1]=v[1]+P*(S[1]-v[1]),H[2]=v[2]+P*(S[2]-v[2]),H}function J(v,S,P,D){const H=D??new s(3);return H[0]=v[0]+P[0]*(S[0]-v[0]),H[1]=v[1]+P[1]*(S[1]-v[1]),H[2]=v[2]+P[2]*(S[2]-v[2]),H}function Y(v,S,P){const D=P??new s(3);return D[0]=Math.max(v[0],S[0]),D[1]=Math.max(v[1],S[1]),D[2]=Math.max(v[2],S[2]),D}function q(v,S,P){const D=P??new s(3);return D[0]=Math.min(v[0],S[0]),D[1]=Math.min(v[1],S[1]),D[2]=Math.min(v[2],S[2]),D}function le(v,S,P){const D=P??new s(3);return D[0]=v[0]*S,D[1]=v[1]*S,D[2]=v[2]*S,D}const we=le;function ke(v,S,P){const D=P??new s(3);return D[0]=v[0]/S,D[1]=v[1]/S,D[2]=v[2]/S,D}function Oe(v,S){const P=S??new s(3);return P[0]=1/v[0],P[1]=1/v[1],P[2]=1/v[2],P}const Ne=Oe;function Be(v,S,P){const D=P??new s(3),H=v[2]*S[0]-v[0]*S[2],V=v[0]*S[1]-v[1]*S[0];return D[0]=v[1]*S[2]-v[2]*S[1],D[1]=H,D[2]=V,D}function be(v,S){return v[0]*S[0]+v[1]*S[1]+v[2]*S[2]}function Fe(v){const S=v[0],P=v[1],D=v[2];return Math.sqrt(S*S+P*P+D*D)}const et=Fe;function Ee(v){const S=v[0],P=v[1],D=v[2];return S*S+P*P+D*D}const Ce=Ee;function Re(v,S){const P=v[0]-S[0],D=v[1]-S[1],H=v[2]-S[2];return Math.sqrt(P*P+D*D+H*H)}const ot=Re;function Ve(v,S){const P=v[0]-S[0],D=v[1]-S[1],H=v[2]-S[2];return P*P+D*D+H*H}const He=Ve;function ae(v,S){const P=S??new s(3),D=v[0],H=v[1],V=v[2],Z=Math.sqrt(D*D+H*H+V*V);return Z>1e-5?(P[0]=D/Z,P[1]=H/Z,P[2]=V/Z):(P[0]=0,P[1]=0,P[2]=0),P}function ge(v,S){const P=S??new s(3);return P[0]=-v[0],P[1]=-v[1],P[2]=-v[2],P}function se(v,S){const P=S??new s(3);return P[0]=v[0],P[1]=v[1],P[2]=v[2],P}const I=se;function X(v,S,P){const D=P??new s(3);return D[0]=v[0]*S[0],D[1]=v[1]*S[1],D[2]=v[2]*S[2],D}const Te=X;function _e(v,S,P){const D=P??new s(3);return D[0]=v[0]/S[0],D[1]=v[1]/S[1],D[2]=v[2]/S[2],D}const Pe=_e;function Ae(v=1,S){const P=S??new s(3),D=Math.random()*2*Math.PI,H=Math.random()*2-1,V=Math.sqrt(1-H*H)*v;return P[0]=Math.cos(D)*V,P[1]=Math.sin(D)*V,P[2]=H*v,P}function f(v){const S=v??new s(3);return S[0]=0,S[1]=0,S[2]=0,S}function R(v,S,P){const D=P??new s(3),H=v[0],V=v[1],Z=v[2],fe=S[3]*H+S[7]*V+S[11]*Z+S[15]||1;return D[0]=(S[0]*H+S[4]*V+S[8]*Z+S[12])/fe,D[1]=(S[1]*H+S[5]*V+S[9]*Z+S[13])/fe,D[2]=(S[2]*H+S[6]*V+S[10]*Z+S[14])/fe,D}function d(v,S,P){const D=P??new s(3),H=v[0],V=v[1],Z=v[2];return D[0]=H*S[0*4+0]+V*S[1*4+0]+Z*S[2*4+0],D[1]=H*S[0*4+1]+V*S[1*4+1]+Z*S[2*4+1],D[2]=H*S[0*4+2]+V*S[1*4+2]+Z*S[2*4+2],D}function p(v,S,P){const D=P??new s(3),H=v[0],V=v[1],Z=v[2];return D[0]=H*S[0]+V*S[4]+Z*S[8],D[1]=H*S[1]+V*S[5]+Z*S[9],D[2]=H*S[2]+V*S[6]+Z*S[10],D}function T(v,S,P){const D=P??new s(3),H=S[0],V=S[1],Z=S[2],fe=S[3]*2,Me=v[0],ce=v[1],he=v[2],ze=V*he-Z*ce,Ue=Z*Me-H*he,We=H*ce-V*Me;return D[0]=Me+ze*fe+(V*We-Z*Ue)*2,D[1]=ce+Ue*fe+(Z*ze-H*We)*2,D[2]=he+We*fe+(H*Ue-V*ze)*2,D}function E(v,S){const P=S??new s(3);return P[0]=v[12],P[1]=v[13],P[2]=v[14],P}function F(v,S,P){const D=P??new s(3),H=S*4;return D[0]=v[H+0],D[1]=v[H+1],D[2]=v[H+2],D}function a(v,S){const P=S??new s(3),D=v[0],H=v[1],V=v[2],Z=v[4],fe=v[5],Me=v[6],ce=v[8],he=v[9],ze=v[10];return P[0]=Math.sqrt(D*D+H*H+V*V),P[1]=Math.sqrt(Z*Z+fe*fe+Me*Me),P[2]=Math.sqrt(ce*ce+he*he+ze*ze),P}function g(v,S,P,D){const H=D??new s(3),V=[],Z=[];return V[0]=v[0]-S[0],V[1]=v[1]-S[1],V[2]=v[2]-S[2],Z[0]=V[0],Z[1]=V[1]*Math.cos(P)-V[2]*Math.sin(P),Z[2]=V[1]*Math.sin(P)+V[2]*Math.cos(P),H[0]=Z[0]+S[0],H[1]=Z[1]+S[1],H[2]=Z[2]+S[2],H}function u(v,S,P,D){const H=D??new s(3),V=[],Z=[];return V[0]=v[0]-S[0],V[1]=v[1]-S[1],V[2]=v[2]-S[2],Z[0]=V[2]*Math.sin(P)+V[0]*Math.cos(P),Z[1]=V[1],Z[2]=V[2]*Math.cos(P)-V[0]*Math.sin(P),H[0]=Z[0]+S[0],H[1]=Z[1]+S[1],H[2]=Z[2]+S[2],H}function h(v,S,P,D){const H=D??new s(3),V=[],Z=[];return V[0]=v[0]-S[0],V[1]=v[1]-S[1],V[2]=v[2]-S[2],Z[0]=V[0]*Math.cos(P)-V[1]*Math.sin(P),Z[1]=V[0]*Math.sin(P)+V[1]*Math.cos(P),Z[2]=V[2],H[0]=Z[0]+S[0],H[1]=Z[1]+S[1],H[2]=Z[2]+S[2],H}function _(v,S,P){const D=P??new s(3);return ae(v,D),le(D,S,D)}function z(v,S,P){const D=P??new s(3);return Fe(v)>S?_(v,S,D):se(v,D)}function B(v,S,P){const D=P??new s(3);return ee(v,S,.5,D)}return{create:o,fromValues:c,set:y,ceil:w,floor:x,round:L,clamp:O,add:C,addScaled:k,angle:W,subtract:Q,sub:G,equalsApproximately:ne,equals:K,lerp:ee,lerpV:J,max:Y,min:q,mulScalar:le,scale:we,divScalar:ke,inverse:Oe,invert:Ne,cross:Be,dot:be,length:Fe,len:et,lengthSq:Ee,lenSq:Ce,distance:Re,dist:ot,distanceSq:Ve,distSq:He,normalize:ae,negate:ge,copy:se,clone:I,multiply:X,mul:Te,divide:_e,div:Pe,random:Ae,zero:f,transformMat4:R,transformMat4Upper3x3:d,transformMat3:p,transformQuat:T,getTranslation:E,getAxis:F,getScaling:a,rotateX:g,rotateY:u,rotateZ:h,setLength:_,truncate:z,midpoint:B}}const Vc=new Map;function $s(s){let o=Vc.get(s);return o||(o=Kp(s),Vc.set(s,o)),o}function Xp(s){const o=md(s),c=$s(s);function y(f,R,d,p,T,E,F,a,g){const u=new s(12);return u[3]=0,u[7]=0,u[11]=0,f!==void 0&&(u[0]=f,R!==void 0&&(u[1]=R,d!==void 0&&(u[2]=d,p!==void 0&&(u[4]=p,T!==void 0&&(u[5]=T,E!==void 0&&(u[6]=E,F!==void 0&&(u[8]=F,a!==void 0&&(u[9]=a,g!==void 0&&(u[10]=g))))))))),u}function w(f,R,d,p,T,E,F,a,g,u){const h=u??new s(12);return h[0]=f,h[1]=R,h[2]=d,h[3]=0,h[4]=p,h[5]=T,h[6]=E,h[7]=0,h[8]=F,h[9]=a,h[10]=g,h[11]=0,h}function x(f,R){const d=R??new s(12);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[3]=0,d[4]=f[4],d[5]=f[5],d[6]=f[6],d[7]=0,d[8]=f[8],d[9]=f[9],d[10]=f[10],d[11]=0,d}function L(f,R){const d=R??new s(12),p=f[0],T=f[1],E=f[2],F=f[3],a=p+p,g=T+T,u=E+E,h=p*a,_=T*a,z=T*g,B=E*a,v=E*g,S=E*u,P=F*a,D=F*g,H=F*u;return d[0]=1-z-S,d[1]=_+H,d[2]=B-D,d[3]=0,d[4]=_-H,d[5]=1-h-S,d[6]=v+P,d[7]=0,d[8]=B+D,d[9]=v-P,d[10]=1-h-z,d[11]=0,d}function O(f,R){const d=R??new s(12);return d[0]=-f[0],d[1]=-f[1],d[2]=-f[2],d[4]=-f[4],d[5]=-f[5],d[6]=-f[6],d[8]=-f[8],d[9]=-f[9],d[10]=-f[10],d}function C(f,R){const d=R??new s(12);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[4]=f[4],d[5]=f[5],d[6]=f[6],d[8]=f[8],d[9]=f[9],d[10]=f[10],d}const k=C;function W(f,R){return Math.abs(f[0]-R[0])<De&&Math.abs(f[1]-R[1])<De&&Math.abs(f[2]-R[2])<De&&Math.abs(f[4]-R[4])<De&&Math.abs(f[5]-R[5])<De&&Math.abs(f[6]-R[6])<De&&Math.abs(f[8]-R[8])<De&&Math.abs(f[9]-R[9])<De&&Math.abs(f[10]-R[10])<De}function Q(f,R){return f[0]===R[0]&&f[1]===R[1]&&f[2]===R[2]&&f[4]===R[4]&&f[5]===R[5]&&f[6]===R[6]&&f[8]===R[8]&&f[9]===R[9]&&f[10]===R[10]}function G(f){const R=f??new s(12);return R[0]=1,R[1]=0,R[2]=0,R[4]=0,R[5]=1,R[6]=0,R[8]=0,R[9]=0,R[10]=1,R}function ne(f,R){const d=R??new s(12);if(d===f){let z;return z=f[1],f[1]=f[4],f[4]=z,z=f[2],f[2]=f[8],f[8]=z,z=f[6],f[6]=f[9],f[9]=z,d}const p=f[0*4+0],T=f[0*4+1],E=f[0*4+2],F=f[1*4+0],a=f[1*4+1],g=f[1*4+2],u=f[2*4+0],h=f[2*4+1],_=f[2*4+2];return d[0]=p,d[1]=F,d[2]=u,d[4]=T,d[5]=a,d[6]=h,d[8]=E,d[9]=g,d[10]=_,d}function K(f,R){const d=R??new s(12),p=f[0*4+0],T=f[0*4+1],E=f[0*4+2],F=f[1*4+0],a=f[1*4+1],g=f[1*4+2],u=f[2*4+0],h=f[2*4+1],_=f[2*4+2],z=_*a-g*h,B=-_*F+g*u,v=h*F-a*u,S=1/(p*z+T*B+E*v);return d[0]=z*S,d[1]=(-_*T+E*h)*S,d[2]=(g*T-E*a)*S,d[4]=B*S,d[5]=(_*p-E*u)*S,d[6]=(-g*p+E*F)*S,d[8]=v*S,d[9]=(-h*p+T*u)*S,d[10]=(a*p-T*F)*S,d}function ee(f){const R=f[0],d=f[0*4+1],p=f[0*4+2],T=f[1*4+0],E=f[1*4+1],F=f[1*4+2],a=f[2*4+0],g=f[2*4+1],u=f[2*4+2];return R*(E*u-g*F)-T*(d*u-g*p)+a*(d*F-E*p)}const J=K;function Y(f,R,d){const p=d??new s(12),T=f[0],E=f[1],F=f[2],a=f[4],g=f[5],u=f[6],h=f[8],_=f[9],z=f[10],B=R[0],v=R[1],S=R[2],P=R[4],D=R[5],H=R[6],V=R[8],Z=R[9],fe=R[10];return p[0]=T*B+a*v+h*S,p[1]=E*B+g*v+_*S,p[2]=F*B+u*v+z*S,p[4]=T*P+a*D+h*H,p[5]=E*P+g*D+_*H,p[6]=F*P+u*D+z*H,p[8]=T*V+a*Z+h*fe,p[9]=E*V+g*Z+_*fe,p[10]=F*V+u*Z+z*fe,p}const q=Y;function le(f,R,d){const p=d??G();return f!==p&&(p[0]=f[0],p[1]=f[1],p[2]=f[2],p[4]=f[4],p[5]=f[5],p[6]=f[6]),p[8]=R[0],p[9]=R[1],p[10]=1,p}function we(f,R){const d=R??o.create();return d[0]=f[8],d[1]=f[9],d}function ke(f,R,d){const p=d??o.create(),T=R*4;return p[0]=f[T+0],p[1]=f[T+1],p}function Oe(f,R,d,p){const T=p===f?f:C(f,p),E=d*4;return T[E+0]=R[0],T[E+1]=R[1],T}function Ne(f,R){const d=R??o.create(),p=f[0],T=f[1],E=f[4],F=f[5];return d[0]=Math.sqrt(p*p+T*T),d[1]=Math.sqrt(E*E+F*F),d}function Be(f,R){const d=R??c.create(),p=f[0],T=f[1],E=f[2],F=f[4],a=f[5],g=f[6],u=f[8],h=f[9],_=f[10];return d[0]=Math.sqrt(p*p+T*T+E*E),d[1]=Math.sqrt(F*F+a*a+g*g),d[2]=Math.sqrt(u*u+h*h+_*_),d}function be(f,R){const d=R??new s(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=f[0],d[9]=f[1],d[10]=1,d}function Fe(f,R,d){const p=d??new s(12),T=R[0],E=R[1],F=f[0],a=f[1],g=f[2],u=f[1*4+0],h=f[1*4+1],_=f[1*4+2],z=f[2*4+0],B=f[2*4+1],v=f[2*4+2];return f!==p&&(p[0]=F,p[1]=a,p[2]=g,p[4]=u,p[5]=h,p[6]=_),p[8]=F*T+u*E+z,p[9]=a*T+h*E+B,p[10]=g*T+_*E+v,p}function et(f,R){const d=R??new s(12),p=Math.cos(f),T=Math.sin(f);return d[0]=p,d[1]=T,d[2]=0,d[4]=-T,d[5]=p,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Ee(f,R,d){const p=d??new s(12),T=f[0*4+0],E=f[0*4+1],F=f[0*4+2],a=f[1*4+0],g=f[1*4+1],u=f[1*4+2],h=Math.cos(R),_=Math.sin(R);return p[0]=h*T+_*a,p[1]=h*E+_*g,p[2]=h*F+_*u,p[4]=h*a-_*T,p[5]=h*g-_*E,p[6]=h*u-_*F,f!==p&&(p[8]=f[8],p[9]=f[9],p[10]=f[10]),p}function Ce(f,R){const d=R??new s(12),p=Math.cos(f),T=Math.sin(f);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=p,d[6]=T,d[8]=0,d[9]=-T,d[10]=p,d}function Re(f,R,d){const p=d??new s(12),T=f[4],E=f[5],F=f[6],a=f[8],g=f[9],u=f[10],h=Math.cos(R),_=Math.sin(R);return p[4]=h*T+_*a,p[5]=h*E+_*g,p[6]=h*F+_*u,p[8]=h*a-_*T,p[9]=h*g-_*E,p[10]=h*u-_*F,f!==p&&(p[0]=f[0],p[1]=f[1],p[2]=f[2]),p}function ot(f,R){const d=R??new s(12),p=Math.cos(f),T=Math.sin(f);return d[0]=p,d[1]=0,d[2]=-T,d[4]=0,d[5]=1,d[6]=0,d[8]=T,d[9]=0,d[10]=p,d}function Ve(f,R,d){const p=d??new s(12),T=f[0*4+0],E=f[0*4+1],F=f[0*4+2],a=f[2*4+0],g=f[2*4+1],u=f[2*4+2],h=Math.cos(R),_=Math.sin(R);return p[0]=h*T-_*a,p[1]=h*E-_*g,p[2]=h*F-_*u,p[8]=h*a+_*T,p[9]=h*g+_*E,p[10]=h*u+_*F,f!==p&&(p[4]=f[4],p[5]=f[5],p[6]=f[6]),p}const He=et,ae=Ee;function ge(f,R){const d=R??new s(12);return d[0]=f[0],d[1]=0,d[2]=0,d[4]=0,d[5]=f[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function se(f,R,d){const p=d??new s(12),T=R[0],E=R[1];return p[0]=T*f[0*4+0],p[1]=T*f[0*4+1],p[2]=T*f[0*4+2],p[4]=E*f[1*4+0],p[5]=E*f[1*4+1],p[6]=E*f[1*4+2],f!==p&&(p[8]=f[8],p[9]=f[9],p[10]=f[10]),p}function I(f,R){const d=R??new s(12);return d[0]=f[0],d[1]=0,d[2]=0,d[4]=0,d[5]=f[1],d[6]=0,d[8]=0,d[9]=0,d[10]=f[2],d}function X(f,R,d){const p=d??new s(12),T=R[0],E=R[1],F=R[2];return p[0]=T*f[0*4+0],p[1]=T*f[0*4+1],p[2]=T*f[0*4+2],p[4]=E*f[1*4+0],p[5]=E*f[1*4+1],p[6]=E*f[1*4+2],p[8]=F*f[2*4+0],p[9]=F*f[2*4+1],p[10]=F*f[2*4+2],p}function Te(f,R){const d=R??new s(12);return d[0]=f,d[1]=0,d[2]=0,d[4]=0,d[5]=f,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function _e(f,R,d){const p=d??new s(12);return p[0]=R*f[0*4+0],p[1]=R*f[0*4+1],p[2]=R*f[0*4+2],p[4]=R*f[1*4+0],p[5]=R*f[1*4+1],p[6]=R*f[1*4+2],f!==p&&(p[8]=f[8],p[9]=f[9],p[10]=f[10]),p}function Pe(f,R){const d=R??new s(12);return d[0]=f,d[1]=0,d[2]=0,d[4]=0,d[5]=f,d[6]=0,d[8]=0,d[9]=0,d[10]=f,d}function Ae(f,R,d){const p=d??new s(12);return p[0]=R*f[0*4+0],p[1]=R*f[0*4+1],p[2]=R*f[0*4+2],p[4]=R*f[1*4+0],p[5]=R*f[1*4+1],p[6]=R*f[1*4+2],p[8]=R*f[2*4+0],p[9]=R*f[2*4+1],p[10]=R*f[2*4+2],p}return{clone:k,create:y,set:w,fromMat4:x,fromQuat:L,negate:O,copy:C,equalsApproximately:W,equals:Q,identity:G,transpose:ne,inverse:K,invert:J,determinant:ee,mul:q,multiply:Y,setTranslation:le,getTranslation:we,getAxis:ke,setAxis:Oe,getScaling:Ne,get3DScaling:Be,translation:be,translate:Fe,rotation:et,rotate:Ee,rotationX:Ce,rotateX:Re,rotationY:ot,rotateY:Ve,rotationZ:He,rotateZ:ae,scaling:ge,scale:se,uniformScaling:Te,uniformScale:_e,scaling3D:I,scale3D:X,uniformScaling3D:Pe,uniformScale3D:Ae}}const jc=new Map;function Jp(s){let o=jc.get(s);return o||(o=Xp(s),jc.set(s,o)),o}function em(s){const o=$s(s);function c(a,g,u,h,_,z,B,v,S,P,D,H,V,Z,fe,Me){const ce=new s(16);return a!==void 0&&(ce[0]=a,g!==void 0&&(ce[1]=g,u!==void 0&&(ce[2]=u,h!==void 0&&(ce[3]=h,_!==void 0&&(ce[4]=_,z!==void 0&&(ce[5]=z,B!==void 0&&(ce[6]=B,v!==void 0&&(ce[7]=v,S!==void 0&&(ce[8]=S,P!==void 0&&(ce[9]=P,D!==void 0&&(ce[10]=D,H!==void 0&&(ce[11]=H,V!==void 0&&(ce[12]=V,Z!==void 0&&(ce[13]=Z,fe!==void 0&&(ce[14]=fe,Me!==void 0&&(ce[15]=Me)))))))))))))))),ce}function y(a,g,u,h,_,z,B,v,S,P,D,H,V,Z,fe,Me,ce){const he=ce??new s(16);return he[0]=a,he[1]=g,he[2]=u,he[3]=h,he[4]=_,he[5]=z,he[6]=B,he[7]=v,he[8]=S,he[9]=P,he[10]=D,he[11]=H,he[12]=V,he[13]=Z,he[14]=fe,he[15]=Me,he}function w(a,g){const u=g??new s(16);return u[0]=a[0],u[1]=a[1],u[2]=a[2],u[3]=0,u[4]=a[4],u[5]=a[5],u[6]=a[6],u[7]=0,u[8]=a[8],u[9]=a[9],u[10]=a[10],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function x(a,g){const u=g??new s(16),h=a[0],_=a[1],z=a[2],B=a[3],v=h+h,S=_+_,P=z+z,D=h*v,H=_*v,V=_*S,Z=z*v,fe=z*S,Me=z*P,ce=B*v,he=B*S,ze=B*P;return u[0]=1-V-Me,u[1]=H+ze,u[2]=Z-he,u[3]=0,u[4]=H-ze,u[5]=1-D-Me,u[6]=fe+ce,u[7]=0,u[8]=Z+he,u[9]=fe-ce,u[10]=1-D-V,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function L(a,g){const u=g??new s(16);return u[0]=-a[0],u[1]=-a[1],u[2]=-a[2],u[3]=-a[3],u[4]=-a[4],u[5]=-a[5],u[6]=-a[6],u[7]=-a[7],u[8]=-a[8],u[9]=-a[9],u[10]=-a[10],u[11]=-a[11],u[12]=-a[12],u[13]=-a[13],u[14]=-a[14],u[15]=-a[15],u}function O(a,g){const u=g??new s(16);return u[0]=a[0],u[1]=a[1],u[2]=a[2],u[3]=a[3],u[4]=a[4],u[5]=a[5],u[6]=a[6],u[7]=a[7],u[8]=a[8],u[9]=a[9],u[10]=a[10],u[11]=a[11],u[12]=a[12],u[13]=a[13],u[14]=a[14],u[15]=a[15],u}const C=O;function k(a,g){return Math.abs(a[0]-g[0])<De&&Math.abs(a[1]-g[1])<De&&Math.abs(a[2]-g[2])<De&&Math.abs(a[3]-g[3])<De&&Math.abs(a[4]-g[4])<De&&Math.abs(a[5]-g[5])<De&&Math.abs(a[6]-g[6])<De&&Math.abs(a[7]-g[7])<De&&Math.abs(a[8]-g[8])<De&&Math.abs(a[9]-g[9])<De&&Math.abs(a[10]-g[10])<De&&Math.abs(a[11]-g[11])<De&&Math.abs(a[12]-g[12])<De&&Math.abs(a[13]-g[13])<De&&Math.abs(a[14]-g[14])<De&&Math.abs(a[15]-g[15])<De}function W(a,g){return a[0]===g[0]&&a[1]===g[1]&&a[2]===g[2]&&a[3]===g[3]&&a[4]===g[4]&&a[5]===g[5]&&a[6]===g[6]&&a[7]===g[7]&&a[8]===g[8]&&a[9]===g[9]&&a[10]===g[10]&&a[11]===g[11]&&a[12]===g[12]&&a[13]===g[13]&&a[14]===g[14]&&a[15]===g[15]}function Q(a){const g=a??new s(16);return g[0]=1,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=1,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,g}function G(a,g){const u=g??new s(16);if(u===a){let Ue;return Ue=a[1],a[1]=a[4],a[4]=Ue,Ue=a[2],a[2]=a[8],a[8]=Ue,Ue=a[3],a[3]=a[12],a[12]=Ue,Ue=a[6],a[6]=a[9],a[9]=Ue,Ue=a[7],a[7]=a[13],a[13]=Ue,Ue=a[11],a[11]=a[14],a[14]=Ue,u}const h=a[0*4+0],_=a[0*4+1],z=a[0*4+2],B=a[0*4+3],v=a[1*4+0],S=a[1*4+1],P=a[1*4+2],D=a[1*4+3],H=a[2*4+0],V=a[2*4+1],Z=a[2*4+2],fe=a[2*4+3],Me=a[3*4+0],ce=a[3*4+1],he=a[3*4+2],ze=a[3*4+3];return u[0]=h,u[1]=v,u[2]=H,u[3]=Me,u[4]=_,u[5]=S,u[6]=V,u[7]=ce,u[8]=z,u[9]=P,u[10]=Z,u[11]=he,u[12]=B,u[13]=D,u[14]=fe,u[15]=ze,u}function ne(a,g){const u=g??new s(16),h=a[0*4+0],_=a[0*4+1],z=a[0*4+2],B=a[0*4+3],v=a[1*4+0],S=a[1*4+1],P=a[1*4+2],D=a[1*4+3],H=a[2*4+0],V=a[2*4+1],Z=a[2*4+2],fe=a[2*4+3],Me=a[3*4+0],ce=a[3*4+1],he=a[3*4+2],ze=a[3*4+3],Ue=Z*ze,We=he*fe,lt=P*ze,tt=he*D,ut=P*fe,ft=Z*D,ht=z*ze,pt=he*B,nt=z*fe,rt=Z*B,yt=z*D,wt=P*B,_t=H*ce,St=Me*V,At=v*ce,Mt=Me*S,Pt=v*V,ln=H*S,Cn=h*ce,un=Me*_,dr=h*V,cn=H*_,wn=h*S,_n=v*_,fr=Ue*S+tt*V+ut*ce-(We*S+lt*V+ft*ce),Mi=We*_+ht*V+rt*ce-(Ue*_+pt*V+nt*ce),Ei=lt*_+pt*S+yt*ce-(tt*_+ht*S+wt*ce),Li=ft*_+nt*S+wt*V-(ut*_+rt*S+yt*V),Ke=1/(h*fr+v*Mi+H*Ei+Me*Li);return u[0]=Ke*fr,u[1]=Ke*Mi,u[2]=Ke*Ei,u[3]=Ke*Li,u[4]=Ke*(We*v+lt*H+ft*Me-(Ue*v+tt*H+ut*Me)),u[5]=Ke*(Ue*h+pt*H+nt*Me-(We*h+ht*H+rt*Me)),u[6]=Ke*(tt*h+ht*v+wt*Me-(lt*h+pt*v+yt*Me)),u[7]=Ke*(ut*h+rt*v+yt*H-(ft*h+nt*v+wt*H)),u[8]=Ke*(_t*D+Mt*fe+Pt*ze-(St*D+At*fe+ln*ze)),u[9]=Ke*(St*B+Cn*fe+cn*ze-(_t*B+un*fe+dr*ze)),u[10]=Ke*(At*B+un*D+wn*ze-(Mt*B+Cn*D+_n*ze)),u[11]=Ke*(ln*B+dr*D+_n*fe-(Pt*B+cn*D+wn*fe)),u[12]=Ke*(At*Z+ln*he+St*P-(Pt*he+_t*P+Mt*Z)),u[13]=Ke*(dr*he+_t*z+un*Z-(Cn*Z+cn*he+St*z)),u[14]=Ke*(Cn*P+_n*he+Mt*z-(wn*he+At*z+un*P)),u[15]=Ke*(wn*Z+Pt*z+cn*P-(dr*P+_n*Z+ln*z)),u}function K(a){const g=a[0],u=a[0*4+1],h=a[0*4+2],_=a[0*4+3],z=a[1*4+0],B=a[1*4+1],v=a[1*4+2],S=a[1*4+3],P=a[2*4+0],D=a[2*4+1],H=a[2*4+2],V=a[2*4+3],Z=a[3*4+0],fe=a[3*4+1],Me=a[3*4+2],ce=a[3*4+3],he=H*ce,ze=Me*V,Ue=v*ce,We=Me*S,lt=v*V,tt=H*S,ut=h*ce,ft=Me*_,ht=h*V,pt=H*_,nt=h*S,rt=v*_,yt=he*B+We*D+lt*fe-(ze*B+Ue*D+tt*fe),wt=ze*u+ut*D+pt*fe-(he*u+ft*D+ht*fe),_t=Ue*u+ft*B+nt*fe-(We*u+ut*B+rt*fe),St=tt*u+ht*B+rt*D-(lt*u+pt*B+nt*D);return g*yt+z*wt+P*_t+Z*St}const ee=ne;function J(a,g,u){const h=u??new s(16),_=a[0],z=a[1],B=a[2],v=a[3],S=a[4],P=a[5],D=a[6],H=a[7],V=a[8],Z=a[9],fe=a[10],Me=a[11],ce=a[12],he=a[13],ze=a[14],Ue=a[15],We=g[0],lt=g[1],tt=g[2],ut=g[3],ft=g[4],ht=g[5],pt=g[6],nt=g[7],rt=g[8],yt=g[9],wt=g[10],_t=g[11],St=g[12],At=g[13],Mt=g[14],Pt=g[15];return h[0]=_*We+S*lt+V*tt+ce*ut,h[1]=z*We+P*lt+Z*tt+he*ut,h[2]=B*We+D*lt+fe*tt+ze*ut,h[3]=v*We+H*lt+Me*tt+Ue*ut,h[4]=_*ft+S*ht+V*pt+ce*nt,h[5]=z*ft+P*ht+Z*pt+he*nt,h[6]=B*ft+D*ht+fe*pt+ze*nt,h[7]=v*ft+H*ht+Me*pt+Ue*nt,h[8]=_*rt+S*yt+V*wt+ce*_t,h[9]=z*rt+P*yt+Z*wt+he*_t,h[10]=B*rt+D*yt+fe*wt+ze*_t,h[11]=v*rt+H*yt+Me*wt+Ue*_t,h[12]=_*St+S*At+V*Mt+ce*Pt,h[13]=z*St+P*At+Z*Mt+he*Pt,h[14]=B*St+D*At+fe*Mt+ze*Pt,h[15]=v*St+H*At+Me*Mt+Ue*Pt,h}const Y=J;function q(a,g,u){const h=u??Q();return a!==h&&(h[0]=a[0],h[1]=a[1],h[2]=a[2],h[3]=a[3],h[4]=a[4],h[5]=a[5],h[6]=a[6],h[7]=a[7],h[8]=a[8],h[9]=a[9],h[10]=a[10],h[11]=a[11]),h[12]=g[0],h[13]=g[1],h[14]=g[2],h[15]=1,h}function le(a,g){const u=g??o.create();return u[0]=a[12],u[1]=a[13],u[2]=a[14],u}function we(a,g,u){const h=u??o.create(),_=g*4;return h[0]=a[_+0],h[1]=a[_+1],h[2]=a[_+2],h}function ke(a,g,u,h){const _=h===a?h:O(a,h),z=u*4;return _[z+0]=g[0],_[z+1]=g[1],_[z+2]=g[2],_}function Oe(a,g){const u=g??o.create(),h=a[0],_=a[1],z=a[2],B=a[4],v=a[5],S=a[6],P=a[8],D=a[9],H=a[10];return u[0]=Math.sqrt(h*h+_*_+z*z),u[1]=Math.sqrt(B*B+v*v+S*S),u[2]=Math.sqrt(P*P+D*D+H*H),u}function Ne(a,g,u,h,_){const z=_??new s(16),B=Math.tan(Math.PI*.5-.5*a);if(z[0]=B/g,z[1]=0,z[2]=0,z[3]=0,z[4]=0,z[5]=B,z[6]=0,z[7]=0,z[8]=0,z[9]=0,z[11]=-1,z[12]=0,z[13]=0,z[15]=0,Number.isFinite(h)){const v=1/(u-h);z[10]=h*v,z[14]=h*u*v}else z[10]=-1,z[14]=-u;return z}function Be(a,g,u,h=1/0,_){const z=_??new s(16),B=1/Math.tan(a*.5);if(z[0]=B/g,z[1]=0,z[2]=0,z[3]=0,z[4]=0,z[5]=B,z[6]=0,z[7]=0,z[8]=0,z[9]=0,z[11]=-1,z[12]=0,z[13]=0,z[15]=0,h===1/0)z[10]=0,z[14]=u;else{const v=1/(h-u);z[10]=u*v,z[14]=h*u*v}return z}function be(a,g,u,h,_,z,B){const v=B??new s(16);return v[0]=2/(g-a),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(h-u),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(_-z),v[11]=0,v[12]=(g+a)/(a-g),v[13]=(h+u)/(u-h),v[14]=_/(_-z),v[15]=1,v}function Fe(a,g,u,h,_,z,B){const v=B??new s(16),S=g-a,P=h-u,D=_-z;return v[0]=2*_/S,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*_/P,v[6]=0,v[7]=0,v[8]=(a+g)/S,v[9]=(h+u)/P,v[10]=z/D,v[11]=-1,v[12]=0,v[13]=0,v[14]=_*z/D,v[15]=0,v}function et(a,g,u,h,_,z=1/0,B){const v=B??new s(16),S=g-a,P=h-u;if(v[0]=2*_/S,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*_/P,v[6]=0,v[7]=0,v[8]=(a+g)/S,v[9]=(h+u)/P,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,z===1/0)v[10]=0,v[14]=_;else{const D=1/(z-_);v[10]=_*D,v[14]=z*_*D}return v}const Ee=o.create(),Ce=o.create(),Re=o.create();function ot(a,g,u,h){const _=h??new s(16);return o.normalize(o.subtract(g,a,Re),Re),o.normalize(o.cross(u,Re,Ee),Ee),o.normalize(o.cross(Re,Ee,Ce),Ce),_[0]=Ee[0],_[1]=Ee[1],_[2]=Ee[2],_[3]=0,_[4]=Ce[0],_[5]=Ce[1],_[6]=Ce[2],_[7]=0,_[8]=Re[0],_[9]=Re[1],_[10]=Re[2],_[11]=0,_[12]=a[0],_[13]=a[1],_[14]=a[2],_[15]=1,_}function Ve(a,g,u,h){const _=h??new s(16);return o.normalize(o.subtract(a,g,Re),Re),o.normalize(o.cross(u,Re,Ee),Ee),o.normalize(o.cross(Re,Ee,Ce),Ce),_[0]=Ee[0],_[1]=Ee[1],_[2]=Ee[2],_[3]=0,_[4]=Ce[0],_[5]=Ce[1],_[6]=Ce[2],_[7]=0,_[8]=Re[0],_[9]=Re[1],_[10]=Re[2],_[11]=0,_[12]=a[0],_[13]=a[1],_[14]=a[2],_[15]=1,_}function He(a,g,u,h){const _=h??new s(16);return o.normalize(o.subtract(a,g,Re),Re),o.normalize(o.cross(u,Re,Ee),Ee),o.normalize(o.cross(Re,Ee,Ce),Ce),_[0]=Ee[0],_[1]=Ce[0],_[2]=Re[0],_[3]=0,_[4]=Ee[1],_[5]=Ce[1],_[6]=Re[1],_[7]=0,_[8]=Ee[2],_[9]=Ce[2],_[10]=Re[2],_[11]=0,_[12]=-(Ee[0]*a[0]+Ee[1]*a[1]+Ee[2]*a[2]),_[13]=-(Ce[0]*a[0]+Ce[1]*a[1]+Ce[2]*a[2]),_[14]=-(Re[0]*a[0]+Re[1]*a[1]+Re[2]*a[2]),_[15]=1,_}function ae(a,g){const u=g??new s(16);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=a[0],u[13]=a[1],u[14]=a[2],u[15]=1,u}function ge(a,g,u){const h=u??new s(16),_=g[0],z=g[1],B=g[2],v=a[0],S=a[1],P=a[2],D=a[3],H=a[1*4+0],V=a[1*4+1],Z=a[1*4+2],fe=a[1*4+3],Me=a[2*4+0],ce=a[2*4+1],he=a[2*4+2],ze=a[2*4+3],Ue=a[3*4+0],We=a[3*4+1],lt=a[3*4+2],tt=a[3*4+3];return a!==h&&(h[0]=v,h[1]=S,h[2]=P,h[3]=D,h[4]=H,h[5]=V,h[6]=Z,h[7]=fe,h[8]=Me,h[9]=ce,h[10]=he,h[11]=ze),h[12]=v*_+H*z+Me*B+Ue,h[13]=S*_+V*z+ce*B+We,h[14]=P*_+Z*z+he*B+lt,h[15]=D*_+fe*z+ze*B+tt,h}function se(a,g){const u=g??new s(16),h=Math.cos(a),_=Math.sin(a);return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=h,u[6]=_,u[7]=0,u[8]=0,u[9]=-_,u[10]=h,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function I(a,g,u){const h=u??new s(16),_=a[4],z=a[5],B=a[6],v=a[7],S=a[8],P=a[9],D=a[10],H=a[11],V=Math.cos(g),Z=Math.sin(g);return h[4]=V*_+Z*S,h[5]=V*z+Z*P,h[6]=V*B+Z*D,h[7]=V*v+Z*H,h[8]=V*S-Z*_,h[9]=V*P-Z*z,h[10]=V*D-Z*B,h[11]=V*H-Z*v,a!==h&&(h[0]=a[0],h[1]=a[1],h[2]=a[2],h[3]=a[3],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function X(a,g){const u=g??new s(16),h=Math.cos(a),_=Math.sin(a);return u[0]=h,u[1]=0,u[2]=-_,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=_,u[9]=0,u[10]=h,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Te(a,g,u){const h=u??new s(16),_=a[0*4+0],z=a[0*4+1],B=a[0*4+2],v=a[0*4+3],S=a[2*4+0],P=a[2*4+1],D=a[2*4+2],H=a[2*4+3],V=Math.cos(g),Z=Math.sin(g);return h[0]=V*_-Z*S,h[1]=V*z-Z*P,h[2]=V*B-Z*D,h[3]=V*v-Z*H,h[8]=V*S+Z*_,h[9]=V*P+Z*z,h[10]=V*D+Z*B,h[11]=V*H+Z*v,a!==h&&(h[4]=a[4],h[5]=a[5],h[6]=a[6],h[7]=a[7],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function _e(a,g){const u=g??new s(16),h=Math.cos(a),_=Math.sin(a);return u[0]=h,u[1]=_,u[2]=0,u[3]=0,u[4]=-_,u[5]=h,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function Pe(a,g,u){const h=u??new s(16),_=a[0*4+0],z=a[0*4+1],B=a[0*4+2],v=a[0*4+3],S=a[1*4+0],P=a[1*4+1],D=a[1*4+2],H=a[1*4+3],V=Math.cos(g),Z=Math.sin(g);return h[0]=V*_+Z*S,h[1]=V*z+Z*P,h[2]=V*B+Z*D,h[3]=V*v+Z*H,h[4]=V*S-Z*_,h[5]=V*P-Z*z,h[6]=V*D-Z*B,h[7]=V*H-Z*v,a!==h&&(h[8]=a[8],h[9]=a[9],h[10]=a[10],h[11]=a[11],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function Ae(a,g,u){const h=u??new s(16);let _=a[0],z=a[1],B=a[2];const v=Math.sqrt(_*_+z*z+B*B);_/=v,z/=v,B/=v;const S=_*_,P=z*z,D=B*B,H=Math.cos(g),V=Math.sin(g),Z=1-H;return h[0]=S+(1-S)*H,h[1]=_*z*Z+B*V,h[2]=_*B*Z-z*V,h[3]=0,h[4]=_*z*Z-B*V,h[5]=P+(1-P)*H,h[6]=z*B*Z+_*V,h[7]=0,h[8]=_*B*Z+z*V,h[9]=z*B*Z-_*V,h[10]=D+(1-D)*H,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const f=Ae;function R(a,g,u,h){const _=h??new s(16);let z=g[0],B=g[1],v=g[2];const S=Math.sqrt(z*z+B*B+v*v);z/=S,B/=S,v/=S;const P=z*z,D=B*B,H=v*v,V=Math.cos(u),Z=Math.sin(u),fe=1-V,Me=P+(1-P)*V,ce=z*B*fe+v*Z,he=z*v*fe-B*Z,ze=z*B*fe-v*Z,Ue=D+(1-D)*V,We=B*v*fe+z*Z,lt=z*v*fe+B*Z,tt=B*v*fe-z*Z,ut=H+(1-H)*V,ft=a[0],ht=a[1],pt=a[2],nt=a[3],rt=a[4],yt=a[5],wt=a[6],_t=a[7],St=a[8],At=a[9],Mt=a[10],Pt=a[11];return _[0]=Me*ft+ce*rt+he*St,_[1]=Me*ht+ce*yt+he*At,_[2]=Me*pt+ce*wt+he*Mt,_[3]=Me*nt+ce*_t+he*Pt,_[4]=ze*ft+Ue*rt+We*St,_[5]=ze*ht+Ue*yt+We*At,_[6]=ze*pt+Ue*wt+We*Mt,_[7]=ze*nt+Ue*_t+We*Pt,_[8]=lt*ft+tt*rt+ut*St,_[9]=lt*ht+tt*yt+ut*At,_[10]=lt*pt+tt*wt+ut*Mt,_[11]=lt*nt+tt*_t+ut*Pt,a!==_&&(_[12]=a[12],_[13]=a[13],_[14]=a[14],_[15]=a[15]),_}const d=R;function p(a,g){const u=g??new s(16);return u[0]=a[0],u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=a[1],u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=a[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function T(a,g,u){const h=u??new s(16),_=g[0],z=g[1],B=g[2];return h[0]=_*a[0*4+0],h[1]=_*a[0*4+1],h[2]=_*a[0*4+2],h[3]=_*a[0*4+3],h[4]=z*a[1*4+0],h[5]=z*a[1*4+1],h[6]=z*a[1*4+2],h[7]=z*a[1*4+3],h[8]=B*a[2*4+0],h[9]=B*a[2*4+1],h[10]=B*a[2*4+2],h[11]=B*a[2*4+3],a!==h&&(h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function E(a,g){const u=g??new s(16);return u[0]=a,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=a,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=a,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function F(a,g,u){const h=u??new s(16);return h[0]=g*a[0*4+0],h[1]=g*a[0*4+1],h[2]=g*a[0*4+2],h[3]=g*a[0*4+3],h[4]=g*a[1*4+0],h[5]=g*a[1*4+1],h[6]=g*a[1*4+2],h[7]=g*a[1*4+3],h[8]=g*a[2*4+0],h[9]=g*a[2*4+1],h[10]=g*a[2*4+2],h[11]=g*a[2*4+3],a!==h&&(h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}return{create:c,set:y,fromMat3:w,fromQuat:x,negate:L,copy:O,clone:C,equalsApproximately:k,equals:W,identity:Q,transpose:G,inverse:ne,determinant:K,invert:ee,multiply:J,mul:Y,setTranslation:q,getTranslation:le,getAxis:we,setAxis:ke,getScaling:Oe,perspective:Ne,perspectiveReverseZ:Be,ortho:be,frustum:Fe,frustumReverseZ:et,aim:ot,cameraAim:Ve,lookAt:He,translation:ae,translate:ge,rotationX:se,rotateX:I,rotationY:X,rotateY:Te,rotationZ:_e,rotateZ:Pe,axisRotation:Ae,rotation:f,axisRotate:R,rotate:d,scaling:p,scale:T,uniformScaling:E,uniformScale:F}}const qc=new Map;function tm(s){let o=qc.get(s);return o||(o=em(s),qc.set(s,o)),o}function nm(s){const o=$s(s);function c(f,R,d,p){const T=new s(4);return f!==void 0&&(T[0]=f,R!==void 0&&(T[1]=R,d!==void 0&&(T[2]=d,p!==void 0&&(T[3]=p)))),T}const y=c;function w(f,R,d,p,T){const E=T??new s(4);return E[0]=f,E[1]=R,E[2]=d,E[3]=p,E}function x(f,R,d){const p=d??new s(4),T=R*.5,E=Math.sin(T);return p[0]=E*f[0],p[1]=E*f[1],p[2]=E*f[2],p[3]=Math.cos(T),p}function L(f,R){const d=R??o.create(3),p=Math.acos(f[3])*2,T=Math.sin(p*.5);return T>De?(d[0]=f[0]/T,d[1]=f[1]/T,d[2]=f[2]/T):(d[0]=1,d[1]=0,d[2]=0),{angle:p,axis:d}}function O(f,R){const d=Fe(f,R);return Math.acos(2*d*d-1)}function C(f,R,d){const p=d??new s(4),T=f[0],E=f[1],F=f[2],a=f[3],g=R[0],u=R[1],h=R[2],_=R[3];return p[0]=T*_+a*g+E*h-F*u,p[1]=E*_+a*u+F*g-T*h,p[2]=F*_+a*h+T*u-E*g,p[3]=a*_-T*g-E*u-F*h,p}const k=C;function W(f,R,d){const p=d??new s(4),T=R*.5,E=f[0],F=f[1],a=f[2],g=f[3],u=Math.sin(T),h=Math.cos(T);return p[0]=E*h+g*u,p[1]=F*h+a*u,p[2]=a*h-F*u,p[3]=g*h-E*u,p}function Q(f,R,d){const p=d??new s(4),T=R*.5,E=f[0],F=f[1],a=f[2],g=f[3],u=Math.sin(T),h=Math.cos(T);return p[0]=E*h-a*u,p[1]=F*h+g*u,p[2]=a*h+E*u,p[3]=g*h-F*u,p}function G(f,R,d){const p=d??new s(4),T=R*.5,E=f[0],F=f[1],a=f[2],g=f[3],u=Math.sin(T),h=Math.cos(T);return p[0]=E*h+F*u,p[1]=F*h-E*u,p[2]=a*h+g*u,p[3]=g*h-a*u,p}function ne(f,R,d,p){const T=p??new s(4),E=f[0],F=f[1],a=f[2],g=f[3];let u=R[0],h=R[1],_=R[2],z=R[3],B=E*u+F*h+a*_+g*z;B<0&&(B=-B,u=-u,h=-h,_=-_,z=-z);let v,S;if(1-B>De){const P=Math.acos(B),D=Math.sin(P);v=Math.sin((1-d)*P)/D,S=Math.sin(d*P)/D}else v=1-d,S=d;return T[0]=v*E+S*u,T[1]=v*F+S*h,T[2]=v*a+S*_,T[3]=v*g+S*z,T}function K(f,R){const d=R??new s(4),p=f[0],T=f[1],E=f[2],F=f[3],a=p*p+T*T+E*E+F*F,g=a?1/a:0;return d[0]=-p*g,d[1]=-T*g,d[2]=-E*g,d[3]=F*g,d}function ee(f,R){const d=R??new s(4);return d[0]=-f[0],d[1]=-f[1],d[2]=-f[2],d[3]=f[3],d}function J(f,R){const d=R??new s(4),p=f[0]+f[5]+f[10];if(p>0){const T=Math.sqrt(p+1);d[3]=.5*T;const E=.5/T;d[0]=(f[6]-f[9])*E,d[1]=(f[8]-f[2])*E,d[2]=(f[1]-f[4])*E}else{let T=0;f[5]>f[0]&&(T=1),f[10]>f[T*4+T]&&(T=2);const E=(T+1)%3,F=(T+2)%3,a=Math.sqrt(f[T*4+T]-f[E*4+E]-f[F*4+F]+1);d[T]=.5*a;const g=.5/a;d[3]=(f[E*4+F]-f[F*4+E])*g,d[E]=(f[E*4+T]+f[T*4+E])*g,d[F]=(f[F*4+T]+f[T*4+F])*g}return d}function Y(f,R,d,p,T){const E=T??new s(4),F=f*.5,a=R*.5,g=d*.5,u=Math.sin(F),h=Math.cos(F),_=Math.sin(a),z=Math.cos(a),B=Math.sin(g),v=Math.cos(g);switch(p){case"xyz":E[0]=u*z*v+h*_*B,E[1]=h*_*v-u*z*B,E[2]=h*z*B+u*_*v,E[3]=h*z*v-u*_*B;break;case"xzy":E[0]=u*z*v-h*_*B,E[1]=h*_*v-u*z*B,E[2]=h*z*B+u*_*v,E[3]=h*z*v+u*_*B;break;case"yxz":E[0]=u*z*v+h*_*B,E[1]=h*_*v-u*z*B,E[2]=h*z*B-u*_*v,E[3]=h*z*v+u*_*B;break;case"yzx":E[0]=u*z*v+h*_*B,E[1]=h*_*v+u*z*B,E[2]=h*z*B-u*_*v,E[3]=h*z*v-u*_*B;break;case"zxy":E[0]=u*z*v-h*_*B,E[1]=h*_*v+u*z*B,E[2]=h*z*B+u*_*v,E[3]=h*z*v-u*_*B;break;case"zyx":E[0]=u*z*v-h*_*B,E[1]=h*_*v+u*z*B,E[2]=h*z*B-u*_*v,E[3]=h*z*v+u*_*B;break;default:throw new Error(`Unknown rotation order: ${p}`)}return E}function q(f,R){const d=R??new s(4);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[3]=f[3],d}const le=q;function we(f,R,d){const p=d??new s(4);return p[0]=f[0]+R[0],p[1]=f[1]+R[1],p[2]=f[2]+R[2],p[3]=f[3]+R[3],p}function ke(f,R,d){const p=d??new s(4);return p[0]=f[0]-R[0],p[1]=f[1]-R[1],p[2]=f[2]-R[2],p[3]=f[3]-R[3],p}const Oe=ke;function Ne(f,R,d){const p=d??new s(4);return p[0]=f[0]*R,p[1]=f[1]*R,p[2]=f[2]*R,p[3]=f[3]*R,p}const Be=Ne;function be(f,R,d){const p=d??new s(4);return p[0]=f[0]/R,p[1]=f[1]/R,p[2]=f[2]/R,p[3]=f[3]/R,p}function Fe(f,R){return f[0]*R[0]+f[1]*R[1]+f[2]*R[2]+f[3]*R[3]}function et(f,R,d,p){const T=p??new s(4);return T[0]=f[0]+d*(R[0]-f[0]),T[1]=f[1]+d*(R[1]-f[1]),T[2]=f[2]+d*(R[2]-f[2]),T[3]=f[3]+d*(R[3]-f[3]),T}function Ee(f){const R=f[0],d=f[1],p=f[2],T=f[3];return Math.sqrt(R*R+d*d+p*p+T*T)}const Ce=Ee;function Re(f){const R=f[0],d=f[1],p=f[2],T=f[3];return R*R+d*d+p*p+T*T}const ot=Re;function Ve(f,R){const d=R??new s(4),p=f[0],T=f[1],E=f[2],F=f[3],a=Math.sqrt(p*p+T*T+E*E+F*F);return a>1e-5?(d[0]=p/a,d[1]=T/a,d[2]=E/a,d[3]=F/a):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function He(f,R){return Math.abs(f[0]-R[0])<De&&Math.abs(f[1]-R[1])<De&&Math.abs(f[2]-R[2])<De&&Math.abs(f[3]-R[3])<De}function ae(f,R){return f[0]===R[0]&&f[1]===R[1]&&f[2]===R[2]&&f[3]===R[3]}function ge(f){const R=f??new s(4);return R[0]=0,R[1]=0,R[2]=0,R[3]=1,R}const se=o.create(),I=o.create(),X=o.create();function Te(f,R,d){const p=d??new s(4),T=o.dot(f,R);return T<-.999999?(o.cross(I,f,se),o.len(se)<1e-6&&o.cross(X,f,se),o.normalize(se,se),x(se,Math.PI,p),p):T>.999999?(p[0]=0,p[1]=0,p[2]=0,p[3]=1,p):(o.cross(f,R,se),p[0]=se[0],p[1]=se[1],p[2]=se[2],p[3]=1+T,Ve(p,p))}const _e=new s(4),Pe=new s(4);function Ae(f,R,d,p,T,E){const F=E??new s(4);return ne(f,p,T,_e),ne(R,d,T,Pe),ne(_e,Pe,2*T*(1-T),F),F}return{create:c,fromValues:y,set:w,fromAxisAngle:x,toAxisAngle:L,angle:O,multiply:C,mul:k,rotateX:W,rotateY:Q,rotateZ:G,slerp:ne,inverse:K,conjugate:ee,fromMat:J,fromEuler:Y,copy:q,clone:le,add:we,subtract:ke,sub:Oe,mulScalar:Ne,scale:Be,divScalar:be,dot:Fe,lerp:et,length:Ee,len:Ce,lengthSq:Re,lenSq:ot,normalize:Ve,equalsApproximately:He,equals:ae,identity:ge,rotationTo:Te,sqlerp:Ae}}const Wc=new Map;function rm(s){let o=Wc.get(s);return o||(o=nm(s),Wc.set(s,o)),o}function im(s){function o(d,p,T,E){const F=new s(4);return d!==void 0&&(F[0]=d,p!==void 0&&(F[1]=p,T!==void 0&&(F[2]=T,E!==void 0&&(F[3]=E)))),F}const c=o;function y(d,p,T,E,F){const a=F??new s(4);return a[0]=d,a[1]=p,a[2]=T,a[3]=E,a}function w(d,p){const T=p??new s(4);return T[0]=Math.ceil(d[0]),T[1]=Math.ceil(d[1]),T[2]=Math.ceil(d[2]),T[3]=Math.ceil(d[3]),T}function x(d,p){const T=p??new s(4);return T[0]=Math.floor(d[0]),T[1]=Math.floor(d[1]),T[2]=Math.floor(d[2]),T[3]=Math.floor(d[3]),T}function L(d,p){const T=p??new s(4);return T[0]=Math.round(d[0]),T[1]=Math.round(d[1]),T[2]=Math.round(d[2]),T[3]=Math.round(d[3]),T}function O(d,p=0,T=1,E){const F=E??new s(4);return F[0]=Math.min(T,Math.max(p,d[0])),F[1]=Math.min(T,Math.max(p,d[1])),F[2]=Math.min(T,Math.max(p,d[2])),F[3]=Math.min(T,Math.max(p,d[3])),F}function C(d,p,T){const E=T??new s(4);return E[0]=d[0]+p[0],E[1]=d[1]+p[1],E[2]=d[2]+p[2],E[3]=d[3]+p[3],E}function k(d,p,T,E){const F=E??new s(4);return F[0]=d[0]+p[0]*T,F[1]=d[1]+p[1]*T,F[2]=d[2]+p[2]*T,F[3]=d[3]+p[3]*T,F}function W(d,p,T){const E=T??new s(4);return E[0]=d[0]-p[0],E[1]=d[1]-p[1],E[2]=d[2]-p[2],E[3]=d[3]-p[3],E}const Q=W;function G(d,p){return Math.abs(d[0]-p[0])<De&&Math.abs(d[1]-p[1])<De&&Math.abs(d[2]-p[2])<De&&Math.abs(d[3]-p[3])<De}function ne(d,p){return d[0]===p[0]&&d[1]===p[1]&&d[2]===p[2]&&d[3]===p[3]}function K(d,p,T,E){const F=E??new s(4);return F[0]=d[0]+T*(p[0]-d[0]),F[1]=d[1]+T*(p[1]-d[1]),F[2]=d[2]+T*(p[2]-d[2]),F[3]=d[3]+T*(p[3]-d[3]),F}function ee(d,p,T,E){const F=E??new s(4);return F[0]=d[0]+T[0]*(p[0]-d[0]),F[1]=d[1]+T[1]*(p[1]-d[1]),F[2]=d[2]+T[2]*(p[2]-d[2]),F[3]=d[3]+T[3]*(p[3]-d[3]),F}function J(d,p,T){const E=T??new s(4);return E[0]=Math.max(d[0],p[0]),E[1]=Math.max(d[1],p[1]),E[2]=Math.max(d[2],p[2]),E[3]=Math.max(d[3],p[3]),E}function Y(d,p,T){const E=T??new s(4);return E[0]=Math.min(d[0],p[0]),E[1]=Math.min(d[1],p[1]),E[2]=Math.min(d[2],p[2]),E[3]=Math.min(d[3],p[3]),E}function q(d,p,T){const E=T??new s(4);return E[0]=d[0]*p,E[1]=d[1]*p,E[2]=d[2]*p,E[3]=d[3]*p,E}const le=q;function we(d,p,T){const E=T??new s(4);return E[0]=d[0]/p,E[1]=d[1]/p,E[2]=d[2]/p,E[3]=d[3]/p,E}function ke(d,p){const T=p??new s(4);return T[0]=1/d[0],T[1]=1/d[1],T[2]=1/d[2],T[3]=1/d[3],T}const Oe=ke;function Ne(d,p){return d[0]*p[0]+d[1]*p[1]+d[2]*p[2]+d[3]*p[3]}function Be(d){const p=d[0],T=d[1],E=d[2],F=d[3];return Math.sqrt(p*p+T*T+E*E+F*F)}const be=Be;function Fe(d){const p=d[0],T=d[1],E=d[2],F=d[3];return p*p+T*T+E*E+F*F}const et=Fe;function Ee(d,p){const T=d[0]-p[0],E=d[1]-p[1],F=d[2]-p[2],a=d[3]-p[3];return Math.sqrt(T*T+E*E+F*F+a*a)}const Ce=Ee;function Re(d,p){const T=d[0]-p[0],E=d[1]-p[1],F=d[2]-p[2],a=d[3]-p[3];return T*T+E*E+F*F+a*a}const ot=Re;function Ve(d,p){const T=p??new s(4),E=d[0],F=d[1],a=d[2],g=d[3],u=Math.sqrt(E*E+F*F+a*a+g*g);return u>1e-5?(T[0]=E/u,T[1]=F/u,T[2]=a/u,T[3]=g/u):(T[0]=0,T[1]=0,T[2]=0,T[3]=0),T}function He(d,p){const T=p??new s(4);return T[0]=-d[0],T[1]=-d[1],T[2]=-d[2],T[3]=-d[3],T}function ae(d,p){const T=p??new s(4);return T[0]=d[0],T[1]=d[1],T[2]=d[2],T[3]=d[3],T}const ge=ae;function se(d,p,T){const E=T??new s(4);return E[0]=d[0]*p[0],E[1]=d[1]*p[1],E[2]=d[2]*p[2],E[3]=d[3]*p[3],E}const I=se;function X(d,p,T){const E=T??new s(4);return E[0]=d[0]/p[0],E[1]=d[1]/p[1],E[2]=d[2]/p[2],E[3]=d[3]/p[3],E}const Te=X;function _e(d){const p=d??new s(4);return p[0]=0,p[1]=0,p[2]=0,p[3]=0,p}function Pe(d,p,T){const E=T??new s(4),F=d[0],a=d[1],g=d[2],u=d[3];return E[0]=p[0]*F+p[4]*a+p[8]*g+p[12]*u,E[1]=p[1]*F+p[5]*a+p[9]*g+p[13]*u,E[2]=p[2]*F+p[6]*a+p[10]*g+p[14]*u,E[3]=p[3]*F+p[7]*a+p[11]*g+p[15]*u,E}function Ae(d,p,T){const E=T??new s(4);return Ve(d,E),q(E,p,E)}function f(d,p,T){const E=T??new s(4);return Be(d)>p?Ae(d,p,E):ae(d,E)}function R(d,p,T){const E=T??new s(4);return K(d,p,.5,E)}return{create:o,fromValues:c,set:y,ceil:w,floor:x,round:L,clamp:O,add:C,addScaled:k,subtract:W,sub:Q,equalsApproximately:G,equals:ne,lerp:K,lerpV:ee,max:J,min:Y,mulScalar:q,scale:le,divScalar:we,inverse:ke,invert:Oe,dot:Ne,length:Be,len:be,lengthSq:Fe,lenSq:et,distance:Ee,dist:Ce,distanceSq:Re,distSq:ot,normalize:Ve,negate:He,copy:ae,clone:ge,multiply:se,mul:I,divide:X,div:Te,zero:_e,transformMat4:Pe,setLength:Ae,truncate:f,midpoint:R}}const Zc=new Map;function sm(s){let o=Zc.get(s);return o||(o=im(s),Zc.set(s,o)),o}function Za(s,o,c,y,w,x){return{mat3:Jp(s),mat4:tm(o),quat:rm(c),vec2:md(y),vec3:$s(w),vec4:sm(x)}}const{mat3:$m,mat4:Pn,quat:Gm,vec2:Vm,vec3:wi,vec4:om}=Za(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Za(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Za(Qp,Array,Array,Array,Array,Array);const am=new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]);class lm{constructor(o,c,y){qe(this,"device");qe(this,"presentFormat");qe(this,"pipeline");qe(this,"vertexBuffer");qe(this,"indexBuffer");qe(this,"indexCount");qe(this,"projViewModelBuffer");qe(this,"projViewModelBindGroup");qe(this,"supportedFeatures");this.device=o,this.presentFormat=y,this.supportedFeatures=c;const w=this.device.createShaderModule({code:Wp}),x=new Float32Array([-1,-1,-1,1,0,0,0,1,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,-1,1,-1,1,0,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1]),L=new Uint32Array([0,1,2,0,2,3,1,5,6,1,6,2,2,6,7,2,7,3,4,7,6,4,6,5,0,3,7,0,7,4,0,4,5,0,5,1]);this.indexCount=L.length,this.vertexBuffer=this.device.createBuffer({size:x.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,x,0,x.length);const O=[{attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}],arrayStride:2*16,stepMode:"vertex"}];this.indexBuffer=this.device.createBuffer({size:L.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,L,0,L.length);const C=16*4;this.projViewModelBuffer=this.device.createBuffer({size:C,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const k=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.projViewModelBindGroup=this.device.createBindGroup({layout:k,entries:[{binding:0,resource:{buffer:this.projViewModelBuffer}}]});const W={vertex:{module:w,entryPoint:"vertex_main",buffers:O},fragment:{module:w,entryPoint:"fragment_main",targets:[{format:this.presentFormat}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},layout:this.device.createPipelineLayout({bindGroupLayouts:[k]})};this.pipeline=this.device.createRenderPipeline(W)}setupUI(o){am.forEach(c=>{const y=this.supportedFeatures.has(c);o.add({enabled:y},"enabled").name(c).disable(!0)})}draw(o,c,y){const w=60*Math.PI/180,O=Pn.perspective(w,c,.1,1e3),C=[3,5,10],k=[0,0,0],W=[0,1,0],Q=Pn.lookAt(C,k,W),G=Pn.axisRotation([1,1,0],y/1e3),ne=Pn.mul(O,Pn.mul(Q,G));this.device.queue.writeBuffer(this.projViewModelBuffer,0,ne,0,ne.length);const K=this.device.createCommandEncoder(),ee={r:.5,g:.5,b:.5,a:0},J=K.beginRenderPass({colorAttachments:[{clearValue:ee,loadOp:"clear",storeOp:"store",view:o}]});J.setPipeline(this.pipeline),J.setVertexBuffer(0,this.vertexBuffer),J.setIndexBuffer(this.indexBuffer,"uint32",0,this.indexBuffer.size),J.setBindGroup(0,this.projViewModelBindGroup),J.drawIndexed(this.indexCount,1,0,0,0),J.end(),this.device.queue.submit([K.finish()])}}const um=(s,o,c,y)=>new lm(s,o,c),cm=`struct Atmosphere
{
    scatteringRayleighPerMm : vec3<f32>,
    densityScaleRayleighMm : f32,
    absorptionRayleighPerMm : vec3<f32>,

    planetRadiusMm : f32,

    scatteringMiePerMm : vec3<f32>,
    densityScaleMieMm : f32,
    absorptionMiePerMm : vec3<f32>,

    atmosphereRadiusMm : f32,

    groundAlbedo : vec3<f32>,

    padding0 : f32,

    scatteringOzonePerMm : vec3<f32>,

    padding1 : f32,

    absorptionOzonePerMm : vec3<f32>,

    padding2 : f32,

    padding3 : vec4<f32>,
}

const ATMOSPHERE_GLOBAL: Atmosphere = Atmosphere(
    vec3<f32>(5.802, 13.558, 33.1),
    0.008, // 8.0 km
    vec3<f32>(0.0), 

    6.360,

    vec3<f32>(3.996),
    0.0012, // 1.2 km
    vec3<f32>(4.40),

    6.420,

    0.3 * vec3<f32>(1.0, 0.75, 0.4),
    0.0,

    vec3<f32>(0.0),
    0.0,

    vec3<f32>(0.650, 1.881, 0.085),
    0.0,
    vec4<f32>(0.0),
);

struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,
    forward: vec3<f32>,
    angularRadius: f32,
}

struct CelestialLightUBO
{
    light: CelestialLight,
}

const LIGHT_GLOBAL = CelestialLight(
    vec3<f32>(1.0),
    6.0,
    vec3<f32>(0.0, -0.1961, 0.98058),
    16.0 / 60.0 * (3.141592653589793 / 180.0),
);

@group(0) @binding(0) var transmittance_LUT: texture_storage_2d<rgba32float, write>;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH: u32 = 2048;
const TRANSMITTANCE_LUT_HEIGHT: u32 = 1024;

const MULTISCATTER_LUT_WIDTH: u32 = 1024;
const MULTISCATTER_LUT_HEIGHT: u32 = 1024;

const METERS_PER_MM: f32 = 1000000;
const PI: f32 = 3.141592653589793;

// Transmittance LUT UV mapping based on Bruneton et al. 2017 method
// https://ebruneton.github.io/precomputed_atmospheric_scattering/atmosphere/functions.glsl#transmittance_lookup

fn safeSqrt(value: f32) -> f32 { return sqrt(max(value, 0.0)); }

// Squeeze in UV values by half a texel, so the bounds of our sampled function can be stored precisely at the edge of
// the texture
fn textureCoordFromUnitRange(value: f32, length: u32) -> f32
{
    return 0.5 / f32(length) + value * (1.0 - 1.0 / f32(length));
}
fn unitRangeFromTextureCoord(coord: f32 , length: u32) -> f32
{
    return (coord - 0.5 / f32(length)) / (1.0 - 1.0 / f32(length));
}

// Radius is the distance in Mm from the center of the planet, aka length of position vector
// Mu is the cosine of the angle between the position vector and the direction vector we want to sample the
// transmittance in
fn transmittanceLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu: f32
) -> vec2<f32>
{
    let atmosphereRadiusMmSquared: f32 = (*atmosphere).atmosphereRadiusMm * (*atmosphere).atmosphereRadiusMm;
    let planetRadiusMmSquared: f32 = (*atmosphere).planetRadiusMm * (*atmosphere).planetRadiusMm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphereRadiusMmSquared - planetRadiusMmSquared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planetRadiusMmSquared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphereRadiusMmSquared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphereRadiusMm - radius;
    let d_max: f32 = rho + h;

    let x_mu: f32 = (d - d_min) / (d_max - d_min);
    let x_radius: f32 = rho / h;

    return vec2<f32>(
        textureCoordFromUnitRange(x_mu, TRANSMITTANCE_LUT_WIDTH),
        textureCoordFromUnitRange(x_radius, TRANSMITTANCE_LUT_HEIGHT)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>, 
    uv: vec2<f32>
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, TRANSMITTANCE_LUT_WIDTH);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, TRANSMITTANCE_LUT_HEIGHT);

    let atmospherRadiusMmSquared : f32 = (*atmosphere).atmosphereRadiusMm * (*atmosphere).atmosphereRadiusMm;
    let planetRadiusMmSquared : f32 = (*atmosphere).planetRadiusMm * (*atmosphere).planetRadiusMm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmospherRadiusMmSquared - planetRadiusMmSquared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planetRadiusMmSquared);

    let d_min : f32 = (*atmosphere).atmosphereRadiusMm - radius;
    let d_max : f32 = rho + h;

    let d : f32 = (d_max - d_min) * x_mu + d_min;

    // This boundary condition is important depending on floating point errors
    // We don't need to check radius since it is bounded below by planet radius, and that shouldn't be near 0
    let D_EPSILON: f32 = 0.000000001;
    if (d < D_EPSILON)
    {
        // mu is ambiguous since we are at the very edge of the atmosphere, where no angle produces valid transmittance
        // values
        return vec2<f32>(radius, 1.0);
    }

    let mu : f32 = (h * h - rho * rho - d * d) / (2.0 * radius * d);
    // Equivalenty, mu = (atmospherRadiusMmSquared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmospherRadiusMmSquared and radius * radius are large, so this avoids floating point errors from adding
    // these to the much smaller d * d

    // This clamp is very important
    return vec2<f32>(radius, clamp(mu, -1.0, 1.0));
}

fn multiscatterLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu_light: f32
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planetRadiusMm) 
            / ((*atmosphere).atmosphereRadiusMm - (*atmosphere).planetRadiusMm), 
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, MULTISCATTER_LUT_WIDTH),
        textureCoordFromUnitRange(v_unit, MULTISCATTER_LUT_HEIGHT)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>, 
    uv: vec2<f32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, MULTISCATTER_LUT_WIDTH);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, MULTISCATTER_LUT_HEIGHT);

    let mu_light: f32 = 2.0 * (u_unit - 0.5);

    // The exact radius is not too critical, and multiscattering is sensitive to being out of range, so we squeeze into
    // a slightly smaller planet radius to ensure we are valid.
    let radius: f32 = mix(
        (*atmosphere).planetRadiusMm * (1.0002), 
        (*atmosphere).atmosphereRadiusMm * (0.9998), 
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    incidentDirectionLight: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu_light: f32 = dot(position, -incidentDirectionLight) 
        / (length(position) * length(incidentDirectionLight));

    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(atmosphere, radius, mu_light);

    return textureSampleLevel(lut, s, uv, 0.0).xyz;
}

fn sampleTransmittanceLUT_RadiusMu(
    lut: texture_2d<f32>, 
    s: sampler,
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

    let sample = textureSampleLevel(lut, s, uv, 0.0).xyz;

    return sample;
}

fn sampleTransmittanceLUT_Ray(
    lut: texture_2d<f32>, 
    s: sampler,
    atmosphere: ptr<function,Atmosphere>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu: f32 = (dot(position, direction) / (length(position) * length(direction)));

    return sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, radius, mu);

}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>,
    s: sampler, 
    atmosphere: ptr<function,Atmosphere>, 
    r_start: f32,
    mu_start: f32,
    d: f32,
    intersects_ground: bool
) -> vec3<f32>
{
    let r_end = clamp(
        safeSqrt(d * d + 2.0 * r_start * mu_start * d + r_start * r_start),
        (*atmosphere).planetRadiusMm, (*atmosphere).atmosphereRadiusMm
    );
    let mu_end = clamp((r_start * mu_start + d) / r_end, -1.0, 1.0);

    if(intersects_ground)
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, -mu_end)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, -mu_start),
            vec3<f32>(1.0)
        );
    }
    else
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, mu_start)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, mu_end),
            vec3<f32>(1.0)
        );
    }
}

struct ExtinctionSample
{
    scatteringRayleigh: vec3<f32>,
    scatteringMie: vec3<f32>,
    scatteringOzone: vec3<f32>,

    absorptionRayleigh: vec3<f32>,
    absorptionMie: vec3<f32>,
    absorptionOzone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and densityScale are the same units.
fn densityExponential(altitude: f32, densityScale: f32) -> f32
{ return exp(-altitude / densityScale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let densityRayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).densityScaleRayleighMm);
    let scatteringRayleigh: vec3<f32> = (*atmosphere).scatteringRayleighPerMm * densityRayleigh;
    let absorptionRayleigh: vec3<f32> = (*atmosphere).absorptionRayleighPerMm * densityRayleigh;

    let densityMie: f32 = densityExponential(altitude_Mm, (*atmosphere).densityScaleMieMm);
    let scatteringMie: vec3<f32> = (*atmosphere).scatteringMiePerMm * densityMie;
    let absorptionMie: vec3<f32> = (*atmosphere).absorptionMiePerMm * densityMie;

    let densityOzone: f32 = densityTent(altitude_Mm * 1000.0);
    let scatteringOzone: vec3<f32> = (*atmosphere).scatteringOzonePerMm * densityOzone;
    let absorptionOzone: vec3<f32> = (*atmosphere).absorptionOzonePerMm * densityOzone;

    var extinctionSample: ExtinctionSample;
    extinctionSample.scatteringRayleigh = scatteringRayleigh;
    extinctionSample.scatteringMie = scatteringMie;
    extinctionSample.scatteringOzone = scatteringOzone;

    extinctionSample.absorptionRayleigh = absorptionRayleigh;
    extinctionSample.absorptionMie = absorptionMie;
    extinctionSample.absorptionOzone = absorptionOzone;

    extinctionSample.scattering = scatteringRayleigh + scatteringMie + scatteringOzone;
    extinctionSample.extinction = extinctionSample.scattering + absorptionRayleigh + absorptionMie + absorptionOzone;

    return extinctionSample;
}

struct RaySphereHit
{
    hit: bool,
    t0: f32,
    t1: f32,
}

// t1 > t0, values can be negative. Function returns true even if the sphere is behind the ray.
// If this returns false, t0 and t1 are unchanged.
fn raySphereIntersection(
    ray_origin: vec3<f32>, 
    ray_direction_normalized: vec3<f32>, 
    radius: f32
) -> RaySphereHit
{
    // Method taken from "Precision Improvements for Ray/Sphere Intersection"
    // by Eric Haines, Johannes Günther, and Tomas Akenine-Möller
    //
    // The method includes tricks to reduce float point inaccuracy errors.

    let f: vec3<f32> = ray_origin;
    let d: vec3<f32> = ray_direction_normalized;
    let b: f32 = -1.0 * dot(f, d);
    let centerToIntersectionChord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(centerToIntersectionChord, centerToIntersectionChord);
    let c: f32 = dot(f, f) - radius * radius;

    var output : RaySphereHit;
    output.hit = false;
    output.t0 = 0.0;
    output.t1 = 0.0; 

    if (discriminant < 0.0)
    {
        return output;
    }

    var q: f32 = b;
    if (b < 0.0)
    {
        q -= sqrt(discriminant);
    }
    else
    {
        q += sqrt(discriminant);
    }

    output.hit = true;
    output.t0 = c / q;
    output.t1 = q;

    if (output.t0 > output.t1)
    {
        let temp: f32 = output.t0;
        output.t0 = output.t1;
        output.t1 = temp;
    }

    return output;
}

// Returns true if the ray hits the sphere with radius in the direction indicated.
// Returns false if the sphere is not hit or if the sphere is behind the ray.
fn raySphereTest(
    rayOrigin: vec3<f32>, 
    rayDirectionNormalized: vec3<f32>, 
    radius: f32
) -> bool
{
    var result: RaySphereHit = raySphereIntersection(rayOrigin, rayDirectionNormalized, radius);
    return result.hit && result.t1 > 0.0;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
fn phaseRayleigh(cosine: f32) -> f32
{
    let scalar: f32 = 3.0 / (16.0 * PI);
    let numerator: f32 = (1.0 + cosine * cosine);

    return scalar * numerator;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
// Input g is a value from -1 to 1 that controls the concentration of back vs forward scattering.
// Note: g = 0 reduces to the case of our rayleigh phase function
fn phaseMie(cosine: f32, g: f32) -> f32
{
    let scalar: f32 = 3.0 / (8.0 * PI);
    let numerator: f32 = (1.0 - g * g) * (1.0 + cosine * cosine);
    let denominator: f32 = (2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * cosine, 1.5);
    return scalar * numerator / denominator;
}

// Compute the distance a ray travels through the atmosphere, stopped by the planet
// Returns 0.0 if origin is outside the atmosphere 
fn rayAtmosphereIntersectionLength(
    atmosphere: ptr<function,Atmosphere>,                   
    origin: vec3<f32>,
    direction: vec3<f32>) -> f32
{
    let hitAtmosphere: RaySphereHit = raySphereIntersection(origin, direction, (*atmosphere).atmosphereRadiusMm);
    
    if (!hitAtmosphere.hit || hitAtmosphere.t1 <= 0.0)
    {
        return 0.0;
    }
    
    let hitPlanet: RaySphereHit = raySphereIntersection(origin, direction, (*atmosphere).planetRadiusMm);

    // If starting outside of atmosphere, move forward
    let t0: f32 = max(0.0, hitAtmosphere.t0);

    var t1: f32 = hitAtmosphere.t1;
    // TODO: Figure out what to do when inside the planet
    if (hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        // Planet is in front of us
        t1 = min(hitPlanet.t0, t1);
    }

    return t1 - t0;
}

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
};

// Returns 'start' moved 'stepDistance' units along the implicit direction vector 
fn stepRadiusMu(
    start: RaymarchStep, 
    stepDistance: f32
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        stepDistance * stepDistance + 2.0 * start.radius * start.mu * stepDistance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + stepDistance) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    stepDistance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (stepDistance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, stepDistance);

    var transmittance = vec3<f32>(0.0);
    if (start.mu > 0.0)
    {
        // Oriented up into atmosphere, so we directly sample LUT
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, start.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, end.mu);
    }
    else
    {
        // Oriented down towards planet, so direct samples would be invalid
        // Instead, we flip the direction
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, -end.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, -start.mu);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
}

fn sampleTransmittanceLUT_Sun(
    transmittance_lut: texture_2d<f32>,
    lut_sampler: sampler,
    atmosphere: ptr<function,Atmosphere>,
    sun: ptr<function,CelestialLight>,
    radius: f32,
    cos_sunZenith: f32) -> vec3<f32>
{
    let sin_sunRadius: f32 = sin((*sun).angularRadius);
    let cos_sunRadius: f32 = cos((*sun).angularRadius);

    /*
    Possible small angle approximation
    const float sin_sunRadius = SUN_ANGULAR_RADIUS_RADIANS;
    const float cos_sunRadius = 1.0;
    */

    // Cos is negative since the horizon zenith varies from PI/2 to PI
    let sin_horizonZenith: f32 = (*atmosphere).planetRadiusMm / radius;
    let cos_horizonZenith: f32 = -safeSqrt(1.0 - sin_horizonZenith * sin_horizonZenith);

    // This sample makes no assumption about ground intersection
    let transmittanceThroughAtmosphere: vec3<f32> = sampleTransmittanceLUT_RadiusMu(
        transmittance_lut, 
        lut_sampler,
        atmosphere, 
        radius, 
        cos_sunZenith
    );

    // angularFactor goes from 1 to 0 as sunZenith varies from horizonZenith - sunRadius to horizonZenith + sunRadius
    // Or as cos(sunZenith) varies from cos(horizonZenith - sunRadius) to cos(horizonZenith + sunRadius)
    // Using angle sum identity, we get that:
    // cos(horizonZenith - sunRadius) = cos(horizonZenith)cos(sunRadius) + sin(sunRadius)sin(horizonZenith)
    // cos(horizonZenith + sunRadius) = cos(horizonZenith)cos(sunRadius) - sin(sunRadius)sin(horizonZenith)

    let angularFactor: f32 = smoothstep(
        -sin_horizonZenith * sin_sunRadius,
        sin_horizonZenith * sin_sunRadius,
        cos_sunZenith - cos_horizonZenith * cos_sunRadius
    );

    return transmittanceThroughAtmosphere * angularFactor;
}

const SAMPLE_COUNT: u32 = 500;

@compute @workgroup_size(16, 16, 1) 
fn computeTransmittance(@builtin(global_invocation_id) global_id : vec3<u32>,)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(transmittance_LUT);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        return;
    }
    var atmosphere: Atmosphere = ATMOSPHERE_GLOBAL;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    let r_mu: vec2<f32> = transmittanceLUT_UV_to_RMu(&atmosphere, uv);

    let radius: f32 = r_mu.x;
    let direction_cosine: f32 = r_mu.y;

    let origin: vec3<f32> = vec3<f32>(0.0, radius, 0.0);
    let direction: vec3<f32> = vec3<f32>(sqrt(1.0 - direction_cosine * direction_cosine), direction_cosine, 0.0);

    let atmosphereHit: RaySphereHit = raySphereIntersection(origin, direction, atmosphere.atmosphereRadiusMm);
    // Could maybe skip this check, since our parameters guarantee we start within the atmosphere
    if(!atmosphereHit.hit)
    {
        textureStore(transmittance_LUT, texel_coord, vec4<f32>(1.0, 1.0, 1.0, 1.0));
        return;
    }

    let distance: f32 = atmosphereHit.t1;

    var transmittance: vec3<f32> = vec3<f32>(1.0);

    let dt: f32 = distance / f32(SAMPLE_COUNT);
    for(var i: u32 = 0; i < SAMPLE_COUNT; i++)
    {
        let t: f32 = distance * (f32(i) + 0.5) / f32(SAMPLE_COUNT);
        let position: vec3<f32> = origin + t * direction;
        let altitude: f32 = length(position) - atmosphere.planetRadiusMm;

        let extinction_sample: ExtinctionSample = sampleExtinction(&atmosphere, altitude);

        transmittance *= exp(-abs(dt) * extinction_sample.extinction);
    }

    textureStore(transmittance_LUT, texel_coord, vec4<f32>(transmittance, 1.0));
}`,dm=`struct Atmosphere
{
    scatteringRayleighPerMm : vec3<f32>,
    densityScaleRayleighMm : f32,
    absorptionRayleighPerMm : vec3<f32>,

    planetRadiusMm : f32,

    scatteringMiePerMm : vec3<f32>,
    densityScaleMieMm : f32,
    absorptionMiePerMm : vec3<f32>,

    atmosphereRadiusMm : f32,

    groundAlbedo : vec3<f32>,

    padding0 : f32,

    scatteringOzonePerMm : vec3<f32>,

    padding1 : f32,

    absorptionOzonePerMm : vec3<f32>,

    padding2 : f32,

    padding3 : vec4<f32>,
}

const ATMOSPHERE_GLOBAL: Atmosphere = Atmosphere(
    vec3<f32>(5.802, 13.558, 33.1),
    0.008, // 8.0 km
    vec3<f32>(0.0), 

    6.360,

    vec3<f32>(3.996),
    0.0012, // 1.2 km
    vec3<f32>(4.40),

    6.420,

    0.3 * vec3<f32>(1.0, 0.75, 0.4),
    0.0,

    vec3<f32>(0.0),
    0.0,

    vec3<f32>(0.650, 1.881, 0.085),
    0.0,
    vec4<f32>(0.0),
);

struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,
    forward: vec3<f32>,
    angularRadius: f32,
}

struct CelestialLightUBO
{
    light: CelestialLight,
}

const LIGHT_GLOBAL = CelestialLight(
    vec3<f32>(1.0),
    6.0,
    vec3<f32>(0.0, -0.1961, 0.98058),
    16.0 / 60.0 * (3.141592653589793 / 180.0),
);

@group(0) @binding(0) var multiscatter_lut: texture_storage_2d<rgba32float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH: u32 = 2048;
const TRANSMITTANCE_LUT_HEIGHT: u32 = 1024;

const MULTISCATTER_LUT_WIDTH: u32 = 1024;
const MULTISCATTER_LUT_HEIGHT: u32 = 1024;

const METERS_PER_MM: f32 = 1000000;
const PI: f32 = 3.141592653589793;

// Transmittance LUT UV mapping based on Bruneton et al. 2017 method
// https://ebruneton.github.io/precomputed_atmospheric_scattering/atmosphere/functions.glsl#transmittance_lookup

fn safeSqrt(value: f32) -> f32 { return sqrt(max(value, 0.0)); }

// Squeeze in UV values by half a texel, so the bounds of our sampled function can be stored precisely at the edge of
// the texture
fn textureCoordFromUnitRange(value: f32, length: u32) -> f32
{
    return 0.5 / f32(length) + value * (1.0 - 1.0 / f32(length));
}
fn unitRangeFromTextureCoord(coord: f32 , length: u32) -> f32
{
    return (coord - 0.5 / f32(length)) / (1.0 - 1.0 / f32(length));
}

// Radius is the distance in Mm from the center of the planet, aka length of position vector
// Mu is the cosine of the angle between the position vector and the direction vector we want to sample the
// transmittance in
fn transmittanceLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu: f32
) -> vec2<f32>
{
    let atmosphereRadiusMmSquared: f32 = (*atmosphere).atmosphereRadiusMm * (*atmosphere).atmosphereRadiusMm;
    let planetRadiusMmSquared: f32 = (*atmosphere).planetRadiusMm * (*atmosphere).planetRadiusMm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphereRadiusMmSquared - planetRadiusMmSquared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planetRadiusMmSquared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphereRadiusMmSquared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphereRadiusMm - radius;
    let d_max: f32 = rho + h;

    let x_mu: f32 = (d - d_min) / (d_max - d_min);
    let x_radius: f32 = rho / h;

    return vec2<f32>(
        textureCoordFromUnitRange(x_mu, TRANSMITTANCE_LUT_WIDTH),
        textureCoordFromUnitRange(x_radius, TRANSMITTANCE_LUT_HEIGHT)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>, 
    uv: vec2<f32>
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, TRANSMITTANCE_LUT_WIDTH);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, TRANSMITTANCE_LUT_HEIGHT);

    let atmospherRadiusMmSquared : f32 = (*atmosphere).atmosphereRadiusMm * (*atmosphere).atmosphereRadiusMm;
    let planetRadiusMmSquared : f32 = (*atmosphere).planetRadiusMm * (*atmosphere).planetRadiusMm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmospherRadiusMmSquared - planetRadiusMmSquared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planetRadiusMmSquared);

    let d_min : f32 = (*atmosphere).atmosphereRadiusMm - radius;
    let d_max : f32 = rho + h;

    let d : f32 = (d_max - d_min) * x_mu + d_min;

    // This boundary condition is important depending on floating point errors
    // We don't need to check radius since it is bounded below by planet radius, and that shouldn't be near 0
    let D_EPSILON: f32 = 0.000000001;
    if (d < D_EPSILON)
    {
        // mu is ambiguous since we are at the very edge of the atmosphere, where no angle produces valid transmittance
        // values
        return vec2<f32>(radius, 1.0);
    }

    let mu : f32 = (h * h - rho * rho - d * d) / (2.0 * radius * d);
    // Equivalenty, mu = (atmospherRadiusMmSquared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmospherRadiusMmSquared and radius * radius are large, so this avoids floating point errors from adding
    // these to the much smaller d * d

    // This clamp is very important
    return vec2<f32>(radius, clamp(mu, -1.0, 1.0));
}

fn multiscatterLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu_light: f32
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planetRadiusMm) 
            / ((*atmosphere).atmosphereRadiusMm - (*atmosphere).planetRadiusMm), 
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, MULTISCATTER_LUT_WIDTH),
        textureCoordFromUnitRange(v_unit, MULTISCATTER_LUT_HEIGHT)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>, 
    uv: vec2<f32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, MULTISCATTER_LUT_WIDTH);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, MULTISCATTER_LUT_HEIGHT);

    let mu_light: f32 = 2.0 * (u_unit - 0.5);

    // The exact radius is not too critical, and multiscattering is sensitive to being out of range, so we squeeze into
    // a slightly smaller planet radius to ensure we are valid.
    let radius: f32 = mix(
        (*atmosphere).planetRadiusMm * (1.0002), 
        (*atmosphere).atmosphereRadiusMm * (0.9998), 
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    incidentDirectionLight: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu_light: f32 = dot(position, -incidentDirectionLight) 
        / (length(position) * length(incidentDirectionLight));

    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(atmosphere, radius, mu_light);

    return textureSampleLevel(lut, s, uv, 0.0).xyz;
}

fn sampleTransmittanceLUT_RadiusMu(
    lut: texture_2d<f32>, 
    s: sampler,
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

    let sample = textureSampleLevel(lut, s, uv, 0.0).xyz;

    return sample;
}

fn sampleTransmittanceLUT_Ray(
    lut: texture_2d<f32>, 
    s: sampler,
    atmosphere: ptr<function,Atmosphere>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu: f32 = (dot(position, direction) / (length(position) * length(direction)));

    return sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, radius, mu);

}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>,
    s: sampler, 
    atmosphere: ptr<function,Atmosphere>, 
    r_start: f32,
    mu_start: f32,
    d: f32,
    intersects_ground: bool
) -> vec3<f32>
{
    let r_end = clamp(
        safeSqrt(d * d + 2.0 * r_start * mu_start * d + r_start * r_start),
        (*atmosphere).planetRadiusMm, (*atmosphere).atmosphereRadiusMm
    );
    let mu_end = clamp((r_start * mu_start + d) / r_end, -1.0, 1.0);

    if(intersects_ground)
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, -mu_end)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, -mu_start),
            vec3<f32>(1.0)
        );
    }
    else
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, mu_start)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, mu_end),
            vec3<f32>(1.0)
        );
    }
}

struct ExtinctionSample
{
    scatteringRayleigh: vec3<f32>,
    scatteringMie: vec3<f32>,
    scatteringOzone: vec3<f32>,

    absorptionRayleigh: vec3<f32>,
    absorptionMie: vec3<f32>,
    absorptionOzone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and densityScale are the same units.
fn densityExponential(altitude: f32, densityScale: f32) -> f32
{ return exp(-altitude / densityScale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let densityRayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).densityScaleRayleighMm);
    let scatteringRayleigh: vec3<f32> = (*atmosphere).scatteringRayleighPerMm * densityRayleigh;
    let absorptionRayleigh: vec3<f32> = (*atmosphere).absorptionRayleighPerMm * densityRayleigh;

    let densityMie: f32 = densityExponential(altitude_Mm, (*atmosphere).densityScaleMieMm);
    let scatteringMie: vec3<f32> = (*atmosphere).scatteringMiePerMm * densityMie;
    let absorptionMie: vec3<f32> = (*atmosphere).absorptionMiePerMm * densityMie;

    let densityOzone: f32 = densityTent(altitude_Mm * 1000.0);
    let scatteringOzone: vec3<f32> = (*atmosphere).scatteringOzonePerMm * densityOzone;
    let absorptionOzone: vec3<f32> = (*atmosphere).absorptionOzonePerMm * densityOzone;

    var extinctionSample: ExtinctionSample;
    extinctionSample.scatteringRayleigh = scatteringRayleigh;
    extinctionSample.scatteringMie = scatteringMie;
    extinctionSample.scatteringOzone = scatteringOzone;

    extinctionSample.absorptionRayleigh = absorptionRayleigh;
    extinctionSample.absorptionMie = absorptionMie;
    extinctionSample.absorptionOzone = absorptionOzone;

    extinctionSample.scattering = scatteringRayleigh + scatteringMie + scatteringOzone;
    extinctionSample.extinction = extinctionSample.scattering + absorptionRayleigh + absorptionMie + absorptionOzone;

    return extinctionSample;
}

struct RaySphereHit
{
    hit: bool,
    t0: f32,
    t1: f32,
}

// t1 > t0, values can be negative. Function returns true even if the sphere is behind the ray.
// If this returns false, t0 and t1 are unchanged.
fn raySphereIntersection(
    ray_origin: vec3<f32>, 
    ray_direction_normalized: vec3<f32>, 
    radius: f32
) -> RaySphereHit
{
    // Method taken from "Precision Improvements for Ray/Sphere Intersection"
    // by Eric Haines, Johannes Günther, and Tomas Akenine-Möller
    //
    // The method includes tricks to reduce float point inaccuracy errors.

    let f: vec3<f32> = ray_origin;
    let d: vec3<f32> = ray_direction_normalized;
    let b: f32 = -1.0 * dot(f, d);
    let centerToIntersectionChord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(centerToIntersectionChord, centerToIntersectionChord);
    let c: f32 = dot(f, f) - radius * radius;

    var output : RaySphereHit;
    output.hit = false;
    output.t0 = 0.0;
    output.t1 = 0.0; 

    if (discriminant < 0.0)
    {
        return output;
    }

    var q: f32 = b;
    if (b < 0.0)
    {
        q -= sqrt(discriminant);
    }
    else
    {
        q += sqrt(discriminant);
    }

    output.hit = true;
    output.t0 = c / q;
    output.t1 = q;

    if (output.t0 > output.t1)
    {
        let temp: f32 = output.t0;
        output.t0 = output.t1;
        output.t1 = temp;
    }

    return output;
}

// Returns true if the ray hits the sphere with radius in the direction indicated.
// Returns false if the sphere is not hit or if the sphere is behind the ray.
fn raySphereTest(
    rayOrigin: vec3<f32>, 
    rayDirectionNormalized: vec3<f32>, 
    radius: f32
) -> bool
{
    var result: RaySphereHit = raySphereIntersection(rayOrigin, rayDirectionNormalized, radius);
    return result.hit && result.t1 > 0.0;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
fn phaseRayleigh(cosine: f32) -> f32
{
    let scalar: f32 = 3.0 / (16.0 * PI);
    let numerator: f32 = (1.0 + cosine * cosine);

    return scalar * numerator;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
// Input g is a value from -1 to 1 that controls the concentration of back vs forward scattering.
// Note: g = 0 reduces to the case of our rayleigh phase function
fn phaseMie(cosine: f32, g: f32) -> f32
{
    let scalar: f32 = 3.0 / (8.0 * PI);
    let numerator: f32 = (1.0 - g * g) * (1.0 + cosine * cosine);
    let denominator: f32 = (2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * cosine, 1.5);
    return scalar * numerator / denominator;
}

// Compute the distance a ray travels through the atmosphere, stopped by the planet
// Returns 0.0 if origin is outside the atmosphere 
fn rayAtmosphereIntersectionLength(
    atmosphere: ptr<function,Atmosphere>,                   
    origin: vec3<f32>,
    direction: vec3<f32>) -> f32
{
    let hitAtmosphere: RaySphereHit = raySphereIntersection(origin, direction, (*atmosphere).atmosphereRadiusMm);
    
    if (!hitAtmosphere.hit || hitAtmosphere.t1 <= 0.0)
    {
        return 0.0;
    }
    
    let hitPlanet: RaySphereHit = raySphereIntersection(origin, direction, (*atmosphere).planetRadiusMm);

    // If starting outside of atmosphere, move forward
    let t0: f32 = max(0.0, hitAtmosphere.t0);

    var t1: f32 = hitAtmosphere.t1;
    // TODO: Figure out what to do when inside the planet
    if (hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        // Planet is in front of us
        t1 = min(hitPlanet.t0, t1);
    }

    return t1 - t0;
}

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
};

// Returns 'start' moved 'stepDistance' units along the implicit direction vector 
fn stepRadiusMu(
    start: RaymarchStep, 
    stepDistance: f32
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        stepDistance * stepDistance + 2.0 * start.radius * start.mu * stepDistance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + stepDistance) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    stepDistance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (stepDistance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, stepDistance);

    var transmittance = vec3<f32>(0.0);
    if (start.mu > 0.0)
    {
        // Oriented up into atmosphere, so we directly sample LUT
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, start.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, end.mu);
    }
    else
    {
        // Oriented down towards planet, so direct samples would be invalid
        // Instead, we flip the direction
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, -end.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, -start.mu);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
}

fn sampleTransmittanceLUT_Sun(
    transmittance_lut: texture_2d<f32>,
    lut_sampler: sampler,
    atmosphere: ptr<function,Atmosphere>,
    sun: ptr<function,CelestialLight>,
    radius: f32,
    cos_sunZenith: f32) -> vec3<f32>
{
    let sin_sunRadius: f32 = sin((*sun).angularRadius);
    let cos_sunRadius: f32 = cos((*sun).angularRadius);

    /*
    Possible small angle approximation
    const float sin_sunRadius = SUN_ANGULAR_RADIUS_RADIANS;
    const float cos_sunRadius = 1.0;
    */

    // Cos is negative since the horizon zenith varies from PI/2 to PI
    let sin_horizonZenith: f32 = (*atmosphere).planetRadiusMm / radius;
    let cos_horizonZenith: f32 = -safeSqrt(1.0 - sin_horizonZenith * sin_horizonZenith);

    // This sample makes no assumption about ground intersection
    let transmittanceThroughAtmosphere: vec3<f32> = sampleTransmittanceLUT_RadiusMu(
        transmittance_lut, 
        lut_sampler,
        atmosphere, 
        radius, 
        cos_sunZenith
    );

    // angularFactor goes from 1 to 0 as sunZenith varies from horizonZenith - sunRadius to horizonZenith + sunRadius
    // Or as cos(sunZenith) varies from cos(horizonZenith - sunRadius) to cos(horizonZenith + sunRadius)
    // Using angle sum identity, we get that:
    // cos(horizonZenith - sunRadius) = cos(horizonZenith)cos(sunRadius) + sin(sunRadius)sin(horizonZenith)
    // cos(horizonZenith + sunRadius) = cos(horizonZenith)cos(sunRadius) - sin(sunRadius)sin(horizonZenith)

    let angularFactor: f32 = smoothstep(
        -sin_horizonZenith * sin_sunRadius,
        sin_horizonZenith * sin_sunRadius,
        cos_sunZenith - cos_horizonZenith * cos_sunRadius
    );

    return transmittanceThroughAtmosphere * angularFactor;
}
// Contains methods and overloads for raymarching the atmosphere

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE

/*
Flags explanation:

MULTISCATTERING 
- read from a multiscattering texture when computing the in-scattering path integral
- Should be disabled when calculating multiscattering, and enabled otherwise

ISOTROPIC_PHASE
- Use an isotropic phase function when calculating out-scattering at each point
- Should be enabled when calculating multiscattering, and disabled otherwise

SCATTERING_NONLINEAR_SAMPLE
- Helps with small sample counts, by concentrating more samples closer to the ray origin

LIGHT_ILLUMINANCE_IS_ONE
- When computing luminance using a light, use 1 instead of the strength.
- This converts the returned luminance into a transfer value, which can be scaled by solar illuminance whenever
*/

// Make sure to include atmosphere_common first

struct ScatteringResult
{
    luminance: vec3<f32>,
    multiScattTransfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,             
    lut_sampler: sampler,                                   
    transmittanceLUT: texture_2d<f32>,
    inOrigin: vec3<f32>,
    inDirection: vec3<f32>,
    includeGround: bool,
) -> ScatteringResult
{
    var result: ScatteringResult;
    result.luminance = vec3<f32>(0.0);
    result.multiScattTransfer = vec3<f32>(0.0);

    let direction = normalize(inDirection);

    // This is the direction of the incoming light, which is the light we are interested in computing the magnitude of.
    // For the purposes of calculating phase functions, this is the direction we want to use.
    let scatteringDir = -direction;

    let hitPlanet = raySphereIntersection(inOrigin, direction, (*atmosphere).planetRadiusMm);
    let hitAtmosphere = raySphereIntersection(inOrigin, direction, (*atmosphere).atmosphereRadiusMm);

    let inside_planet = hitPlanet.hit && hitPlanet.t0 < 0.0 && hitPlanet.t1 > 0.0;
    let intersects_atmosphere = hitAtmosphere.hit && hitAtmosphere.t1 > 0.0;
    if (!intersects_atmosphere || inside_planet)
    {
        return result;
    }


    // Assuming the planet was hit, we have hitAtmosphere.t0 < hitPlanet.t0 < hitPlanet.t1 < hitAtmosphere.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

    var sampleDistance = 0.0;
    if (hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        sampleDistance = hitPlanet.t0;
    }
    else
    {
        sampleDistance = hitAtmosphere.t1;
    }

    var origin = inOrigin;
    if (hitAtmosphere.t0 > 0.0)
    {
        origin += hitAtmosphere.t0 * direction;
        sampleDistance -= hitAtmosphere.t0;
    }

    let radius: f32 = length(origin);
    let mu: f32 = dot(origin, direction) / (length(origin) * length(direction));

    let originStep = RaymarchStep(radius, mu);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT: u32 = 32;

    let dSampleDistance: f32 = sampleDistance / f32(SAMPLE_COUNT);
    for (var i = 0u; i < SAMPLE_COUNT; i++)
    {
        var tBegin: f32 = f32(i) / f32(SAMPLE_COUNT);
        var tEnd: f32 = f32(i + 1) / f32(SAMPLE_COUNT);


        tBegin = tBegin * sampleDistance;
        tEnd = min(tEnd * sampleDistance, sampleDistance);

        let t: f32 = mix(tBegin, tEnd, 0.5);
        let begin = origin - tBegin * scatteringDir;
        let samplePosition = origin - t * scatteringDir;
        let end = origin - tEnd * scatteringDir;

        let sampleStep: RaymarchStep = stepRadiusMu(originStep, t);

        let altitude = length(begin) - (*atmosphere).planetRadiusMm;

        let extinctionSample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

        // We could accumulate samples across loops like:
        //
        // const vec3 sampleTransmittance = exp(-dSampleDistance * extinctionSample.extinction);
        // ... compute luminance using transmittance ...
        // transmittance *= sampleTransmittance;
        //
        // But at the cost of performance, resampling the transmittance LUT is more accurate for larger step sizes

        let transmittanceToBegin = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, lut_sampler, atmosphere, originStep, t);

        {
            let incidentCosine = dot((*light).forward, scatteringDir);
            let mu_light = dot(samplePosition, -(*light).forward) / length(samplePosition);

            let phaseTimesScattering = extinctionSample.scattering * ISOTROPIC_PHASE;

            let multiscatter = vec3<f32>(0.0);

            let transmittanceToSun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, mu_light);

            let shadowBegin = f32(raySphereTest(begin, -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowMiddle = f32(raySphereTest(0.5 * (begin + end), -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowEnd = f32(raySphereTest(end, -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowing = transmittanceToSun * (1.0 - 0.25 * (shadowBegin + 2.0 * shadowMiddle + shadowEnd));

            // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
            // This is a single interval of the integral in Equation (1) from Hillaire's paper,
            // with all constant terms factored out above
            let transmittanceAlongPath = sampleTransmittanceLUT_Segment(transmittanceLUT, lut_sampler, atmosphere, sampleStep.radius, sampleStep.mu, dSampleDistance, hitPlanet.hit && hitPlanet.t0 > 0.0);
            let scatteringIlluminanceIntegral = (vec3(1.0) - transmittanceAlongPath) / extinctionSample.extinction;

            result.luminance += 
                (phaseTimesScattering * shadowing + multiscatter * extinctionSample.scattering)
                * scatteringIlluminanceIntegral * transmittanceToBegin 
                * 1.0;
            result.multiScattTransfer += extinctionSample.scattering * scatteringIlluminanceIntegral * transmittanceToBegin;
        }
    }

    if (includeGround && hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        let sampleStep: RaymarchStep = stepRadiusMu(originStep, sampleDistance);

        let samplePosition = origin + hitPlanet.t0 * direction;
        let mu_light = dot(samplePosition, -(*light).forward) / length(samplePosition);

        let transmittanceToSurface = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, lut_sampler, atmosphere, originStep, hitPlanet.t0);
        let transmittanceToSun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, mu_light);

        let normalDotLight = clamp(mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).groundAlbedo / PI;

        result.luminance += 
            transmittanceToSurface * transmittanceToSun * normalDotLight * diffuse
            * 1.0;
    }

    return result;
}

// Based on "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sebastien Hillaire (2020)

// This shader builds a 2D multiscattering LUT, where each position stores the light from second and higher order
// scattering in a large neighborhood.
//
// We can reasonably assume 2nd order scattering is the same for a sufficiently large neighborhood around a sample.
// Thus, it is reasonable to assume 2nd order scattering is globally uniform from the view of a sample point. Hillaire
// notes a correlation between 2nd order scattering and all other orders, meaning we should be able to reasonably
// estimate all scattering orders from just the 2nd with a complexity of O(1), independent of the number of orders we
// wish to estimate.
//
// So:
// 1) We compute the second order scattered luminance L_2ndOrder at a point. This is computed with the same scattering
// rendering equation ((1) from Hillaire 2020), except we use an isotropic/uniform phase function. 2) We compute a
// multiscattering transfer factor (f_ms in Hillaire 2020). It is a global and unitless measure of the fraction of
// scattered energy reaching this point, and is only useful when assuming n-th order scattering reaching each point is
// uniform.
//
// Thus, L_(n+1)thOrder = f_ms * L_nthOrder, and we compute the total multiscattering luminance:
// L_2ndOrder + L_3rdOrder + L_4thOrder + ... = L_2ndOrder(1 + f_ms + f_ms ^ 2 + ...) = L_2ndOrder / (1 - f_ms)
// Care is taken to ensure that f_ms remains in the radius of convergence.
// This value can then be sampled in later integrals, to give us a better estimate of scattered luminance.
// Compare equations (1) and (11) in Hillaire.
//
// This table needs to only be recomputed if the atmosphere parameters change:
// it is global for the planet and independent of sun direction or view position.
// Note it DOES depend on the size of the sun
//
// We are able to store the multiscattering in a 2D map because the atmospheric medium (aerosols, ozone, gasses like
// nitrogen) is distributed based only on altitude and the planet is a sphere.
//
// For a given sample position x and light direction v (v towards light, NOT incident)
// u := 0.5 + 0.5 * cos(sunZenith)
// u = 0.5 + 0.5 * x.v / (|x| * |v|)
//
// Planet radius R_bot and atmosphere radius R_top
// v := clamp((|x| - R_bot)/(R_top - R_bot), 0, 1)

@compute @workgroup_size(16, 16, 1)
fn computeMultiscattering(@builtin(global_invocation_id) global_id : vec3<u32>,)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(multiscatter_lut);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        return;
    }
    var atmosphere: Atmosphere = ATMOSPHERE_GLOBAL;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    let r_mu_light = multiscatterLUT_UV_to_RMu(&atmosphere, uv);

    let origin = vec3<f32>(0.0, r_mu_light.x, 0.0);

    let cos_sun_zenith: f32 = clamp(r_mu_light.y, -1.0, 1.0);
    let sin_sun_zenith: f32 = safeSqrt(1.0 - cos_sun_zenith * cos_sun_zenith);

    // SunZenith is relative to origin
    // As established, scattering is symmetrical around up axis, so just pick an azimuth = 0 for sun
    // PORTING NOTE: should y be negative? I'm getting flipped around with the coordinates 
    let sun_direction = vec3<f32>(0.0, cos_sun_zenith, sin_sun_zenith);

    var light: CelestialLight = LIGHT_GLOBAL;
    light.forward = -sun_direction;

    // Unmarked units are in megameters (10^6 meters or 1000 km)

    // We evaluate scattering luminance and transfer in all directions from our sample point.
    // So we sample a finite amount of uniformly distributed directions.

    var luminanceSecondOrder = vec3<f32>(0.0);
    var multiScattTransfer = vec3<f32>(0.0);

    const SPHERE_SOLID_ANGLE = 4.0 * PI;
    const ISOTROPIC_PHASE = 1.0 / (4.0 * PI);

    // There is an accumulated constant bias in sample directions, but it is quite small and does not matter for the
    // small sample counts we shall be using
    // TODO: mitigate the artifacts that seem to occur due to how we are sampling the directions. For some reason
    // prime/odd numbers seem to avoid bands that occur at higher altitudes, that is independent of sun angle.
    const SAMPLE_COUNT_SQRT = 5u;
    const SAMPLE_COUNT = SAMPLE_COUNT_SQRT * SAMPLE_COUNT_SQRT;
    for (var sampleIndex = 0u; sampleIndex < SAMPLE_COUNT; sampleIndex++)
    {
        // 0, 0, 0, 0, 1, 1, 1, 1, ...
        let azimuthalIndex = f32(sampleIndex) / f32(SAMPLE_COUNT_SQRT);

        // 0, 1, 2, 3, 0, 1, 2, 3, ...
        let zenithIndex = f32(sampleIndex % SAMPLE_COUNT_SQRT) + 0.5;
        // let zenithIndex = 0;

        let azimuth = 2.0 * PI * f32(azimuthalIndex) / f32(SAMPLE_COUNT_SQRT);

        let cosAzimuth = cos(azimuth);
        let sinAzimuth = sin(azimuth);

        // sinZenith is always positive since zenith ranges from 0 to pi
        let cosZenith = clamp(
            2.0 * f32(zenithIndex) / f32(SAMPLE_COUNT_SQRT) - 1.0, 
            -1.0, 1.0
        );
        let sinZenith = sqrt(1.0 - cosZenith * cosZenith);

        // Uniformly distributed on unit sphere direction
        let direction = vec3<f32>(sinAzimuth * sinZenith, cosZenith, cosAzimuth * sinZenith);

        let includeGround = true;
        let scattering = computeLuminanceScatteringIntegral(
            &atmosphere, 
            &light, 
            lut_sampler,
            transmittance_lut, 
            origin, 
            direction, 
            includeGround
        );
        // let scattering = ScatteringResult(vec3<f32>(0.0), vec3<f32>(0.0));

        // dw in equations (5) and (7) in Hillaire 2020
        let sampleSolidAngle = SPHERE_SOLID_ANGLE / f32(SAMPLE_COUNT);

        // Equations (6) and (8)
        luminanceSecondOrder += scattering.luminance * sampleSolidAngle;
        multiScattTransfer += scattering.multiScattTransfer * sampleSolidAngle;
    }

    // Equations (5) and (7)
    let inscattering = luminanceSecondOrder * ISOTROPIC_PHASE;
    let scatteringTransfer = multiScattTransfer * ISOTROPIC_PHASE;

    // Geometric sum with r = multiScattTransfer
    let infiniteScatterTransfer = vec3<f32>(1.0 / (1.0 - scatteringTransfer));

    // Equation (10)
    let multiscattering = infiniteScatterTransfer * inscattering;

    textureStore(multiscatter_lut, texel_coord, vec4<f32>(multiscattering, 1.0));
}`,fm=`struct Atmosphere
{
    scatteringRayleighPerMm : vec3<f32>,
    densityScaleRayleighMm : f32,
    absorptionRayleighPerMm : vec3<f32>,

    planetRadiusMm : f32,

    scatteringMiePerMm : vec3<f32>,
    densityScaleMieMm : f32,
    absorptionMiePerMm : vec3<f32>,

    atmosphereRadiusMm : f32,

    groundAlbedo : vec3<f32>,

    padding0 : f32,

    scatteringOzonePerMm : vec3<f32>,

    padding1 : f32,

    absorptionOzonePerMm : vec3<f32>,

    padding2 : f32,

    padding3 : vec4<f32>,
}

const ATMOSPHERE_GLOBAL: Atmosphere = Atmosphere(
    vec3<f32>(5.802, 13.558, 33.1),
    0.008, // 8.0 km
    vec3<f32>(0.0), 

    6.360,

    vec3<f32>(3.996),
    0.0012, // 1.2 km
    vec3<f32>(4.40),

    6.420,

    0.3 * vec3<f32>(1.0, 0.75, 0.4),
    0.0,

    vec3<f32>(0.0),
    0.0,

    vec3<f32>(0.650, 1.881, 0.085),
    0.0,
    vec4<f32>(0.0),
);

struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,
    forward: vec3<f32>,
    angularRadius: f32,
}

struct CelestialLightUBO
{
    light: CelestialLight,
}

const LIGHT_GLOBAL = CelestialLight(
    vec3<f32>(1.0),
    6.0,
    vec3<f32>(0.0, -0.1961, 0.98058),
    16.0 / 60.0 * (3.141592653589793 / 180.0),
);

@group(0) @binding(0) var skyview_lut: texture_storage_2d<rgba32float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;

@group(1) @binding(0) var<uniform> b_light: CelestialLightUBO;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH: u32 = 2048;
const TRANSMITTANCE_LUT_HEIGHT: u32 = 1024;

const MULTISCATTER_LUT_WIDTH: u32 = 1024;
const MULTISCATTER_LUT_HEIGHT: u32 = 1024;

const METERS_PER_MM: f32 = 1000000;
const PI: f32 = 3.141592653589793;

// Transmittance LUT UV mapping based on Bruneton et al. 2017 method
// https://ebruneton.github.io/precomputed_atmospheric_scattering/atmosphere/functions.glsl#transmittance_lookup

fn safeSqrt(value: f32) -> f32 { return sqrt(max(value, 0.0)); }

// Squeeze in UV values by half a texel, so the bounds of our sampled function can be stored precisely at the edge of
// the texture
fn textureCoordFromUnitRange(value: f32, length: u32) -> f32
{
    return 0.5 / f32(length) + value * (1.0 - 1.0 / f32(length));
}
fn unitRangeFromTextureCoord(coord: f32 , length: u32) -> f32
{
    return (coord - 0.5 / f32(length)) / (1.0 - 1.0 / f32(length));
}

// Radius is the distance in Mm from the center of the planet, aka length of position vector
// Mu is the cosine of the angle between the position vector and the direction vector we want to sample the
// transmittance in
fn transmittanceLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu: f32
) -> vec2<f32>
{
    let atmosphereRadiusMmSquared: f32 = (*atmosphere).atmosphereRadiusMm * (*atmosphere).atmosphereRadiusMm;
    let planetRadiusMmSquared: f32 = (*atmosphere).planetRadiusMm * (*atmosphere).planetRadiusMm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphereRadiusMmSquared - planetRadiusMmSquared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planetRadiusMmSquared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphereRadiusMmSquared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphereRadiusMm - radius;
    let d_max: f32 = rho + h;

    let x_mu: f32 = (d - d_min) / (d_max - d_min);
    let x_radius: f32 = rho / h;

    return vec2<f32>(
        textureCoordFromUnitRange(x_mu, TRANSMITTANCE_LUT_WIDTH),
        textureCoordFromUnitRange(x_radius, TRANSMITTANCE_LUT_HEIGHT)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>, 
    uv: vec2<f32>
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, TRANSMITTANCE_LUT_WIDTH);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, TRANSMITTANCE_LUT_HEIGHT);

    let atmospherRadiusMmSquared : f32 = (*atmosphere).atmosphereRadiusMm * (*atmosphere).atmosphereRadiusMm;
    let planetRadiusMmSquared : f32 = (*atmosphere).planetRadiusMm * (*atmosphere).planetRadiusMm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmospherRadiusMmSquared - planetRadiusMmSquared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planetRadiusMmSquared);

    let d_min : f32 = (*atmosphere).atmosphereRadiusMm - radius;
    let d_max : f32 = rho + h;

    let d : f32 = (d_max - d_min) * x_mu + d_min;

    // This boundary condition is important depending on floating point errors
    // We don't need to check radius since it is bounded below by planet radius, and that shouldn't be near 0
    let D_EPSILON: f32 = 0.000000001;
    if (d < D_EPSILON)
    {
        // mu is ambiguous since we are at the very edge of the atmosphere, where no angle produces valid transmittance
        // values
        return vec2<f32>(radius, 1.0);
    }

    let mu : f32 = (h * h - rho * rho - d * d) / (2.0 * radius * d);
    // Equivalenty, mu = (atmospherRadiusMmSquared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmospherRadiusMmSquared and radius * radius are large, so this avoids floating point errors from adding
    // these to the much smaller d * d

    // This clamp is very important
    return vec2<f32>(radius, clamp(mu, -1.0, 1.0));
}

fn multiscatterLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu_light: f32
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planetRadiusMm) 
            / ((*atmosphere).atmosphereRadiusMm - (*atmosphere).planetRadiusMm), 
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, MULTISCATTER_LUT_WIDTH),
        textureCoordFromUnitRange(v_unit, MULTISCATTER_LUT_HEIGHT)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>, 
    uv: vec2<f32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, MULTISCATTER_LUT_WIDTH);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, MULTISCATTER_LUT_HEIGHT);

    let mu_light: f32 = 2.0 * (u_unit - 0.5);

    // The exact radius is not too critical, and multiscattering is sensitive to being out of range, so we squeeze into
    // a slightly smaller planet radius to ensure we are valid.
    let radius: f32 = mix(
        (*atmosphere).planetRadiusMm * (1.0002), 
        (*atmosphere).atmosphereRadiusMm * (0.9998), 
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    incidentDirectionLight: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu_light: f32 = dot(position, -incidentDirectionLight) 
        / (length(position) * length(incidentDirectionLight));

    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(atmosphere, radius, mu_light);

    return textureSampleLevel(lut, s, uv, 0.0).xyz;
}

fn sampleTransmittanceLUT_RadiusMu(
    lut: texture_2d<f32>, 
    s: sampler,
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

    let sample = textureSampleLevel(lut, s, uv, 0.0).xyz;

    return sample;
}

fn sampleTransmittanceLUT_Ray(
    lut: texture_2d<f32>, 
    s: sampler,
    atmosphere: ptr<function,Atmosphere>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu: f32 = (dot(position, direction) / (length(position) * length(direction)));

    return sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, radius, mu);

}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>,
    s: sampler, 
    atmosphere: ptr<function,Atmosphere>, 
    r_start: f32,
    mu_start: f32,
    d: f32,
    intersects_ground: bool
) -> vec3<f32>
{
    let r_end = clamp(
        safeSqrt(d * d + 2.0 * r_start * mu_start * d + r_start * r_start),
        (*atmosphere).planetRadiusMm, (*atmosphere).atmosphereRadiusMm
    );
    let mu_end = clamp((r_start * mu_start + d) / r_end, -1.0, 1.0);

    if(intersects_ground)
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, -mu_end)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, -mu_start),
            vec3<f32>(1.0)
        );
    }
    else
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, mu_start)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, mu_end),
            vec3<f32>(1.0)
        );
    }
}

struct ExtinctionSample
{
    scatteringRayleigh: vec3<f32>,
    scatteringMie: vec3<f32>,
    scatteringOzone: vec3<f32>,

    absorptionRayleigh: vec3<f32>,
    absorptionMie: vec3<f32>,
    absorptionOzone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and densityScale are the same units.
fn densityExponential(altitude: f32, densityScale: f32) -> f32
{ return exp(-altitude / densityScale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let densityRayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).densityScaleRayleighMm);
    let scatteringRayleigh: vec3<f32> = (*atmosphere).scatteringRayleighPerMm * densityRayleigh;
    let absorptionRayleigh: vec3<f32> = (*atmosphere).absorptionRayleighPerMm * densityRayleigh;

    let densityMie: f32 = densityExponential(altitude_Mm, (*atmosphere).densityScaleMieMm);
    let scatteringMie: vec3<f32> = (*atmosphere).scatteringMiePerMm * densityMie;
    let absorptionMie: vec3<f32> = (*atmosphere).absorptionMiePerMm * densityMie;

    let densityOzone: f32 = densityTent(altitude_Mm * 1000.0);
    let scatteringOzone: vec3<f32> = (*atmosphere).scatteringOzonePerMm * densityOzone;
    let absorptionOzone: vec3<f32> = (*atmosphere).absorptionOzonePerMm * densityOzone;

    var extinctionSample: ExtinctionSample;
    extinctionSample.scatteringRayleigh = scatteringRayleigh;
    extinctionSample.scatteringMie = scatteringMie;
    extinctionSample.scatteringOzone = scatteringOzone;

    extinctionSample.absorptionRayleigh = absorptionRayleigh;
    extinctionSample.absorptionMie = absorptionMie;
    extinctionSample.absorptionOzone = absorptionOzone;

    extinctionSample.scattering = scatteringRayleigh + scatteringMie + scatteringOzone;
    extinctionSample.extinction = extinctionSample.scattering + absorptionRayleigh + absorptionMie + absorptionOzone;

    return extinctionSample;
}

struct RaySphereHit
{
    hit: bool,
    t0: f32,
    t1: f32,
}

// t1 > t0, values can be negative. Function returns true even if the sphere is behind the ray.
// If this returns false, t0 and t1 are unchanged.
fn raySphereIntersection(
    ray_origin: vec3<f32>, 
    ray_direction_normalized: vec3<f32>, 
    radius: f32
) -> RaySphereHit
{
    // Method taken from "Precision Improvements for Ray/Sphere Intersection"
    // by Eric Haines, Johannes Günther, and Tomas Akenine-Möller
    //
    // The method includes tricks to reduce float point inaccuracy errors.

    let f: vec3<f32> = ray_origin;
    let d: vec3<f32> = ray_direction_normalized;
    let b: f32 = -1.0 * dot(f, d);
    let centerToIntersectionChord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(centerToIntersectionChord, centerToIntersectionChord);
    let c: f32 = dot(f, f) - radius * radius;

    var output : RaySphereHit;
    output.hit = false;
    output.t0 = 0.0;
    output.t1 = 0.0; 

    if (discriminant < 0.0)
    {
        return output;
    }

    var q: f32 = b;
    if (b < 0.0)
    {
        q -= sqrt(discriminant);
    }
    else
    {
        q += sqrt(discriminant);
    }

    output.hit = true;
    output.t0 = c / q;
    output.t1 = q;

    if (output.t0 > output.t1)
    {
        let temp: f32 = output.t0;
        output.t0 = output.t1;
        output.t1 = temp;
    }

    return output;
}

// Returns true if the ray hits the sphere with radius in the direction indicated.
// Returns false if the sphere is not hit or if the sphere is behind the ray.
fn raySphereTest(
    rayOrigin: vec3<f32>, 
    rayDirectionNormalized: vec3<f32>, 
    radius: f32
) -> bool
{
    var result: RaySphereHit = raySphereIntersection(rayOrigin, rayDirectionNormalized, radius);
    return result.hit && result.t1 > 0.0;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
fn phaseRayleigh(cosine: f32) -> f32
{
    let scalar: f32 = 3.0 / (16.0 * PI);
    let numerator: f32 = (1.0 + cosine * cosine);

    return scalar * numerator;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
// Input g is a value from -1 to 1 that controls the concentration of back vs forward scattering.
// Note: g = 0 reduces to the case of our rayleigh phase function
fn phaseMie(cosine: f32, g: f32) -> f32
{
    let scalar: f32 = 3.0 / (8.0 * PI);
    let numerator: f32 = (1.0 - g * g) * (1.0 + cosine * cosine);
    let denominator: f32 = (2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * cosine, 1.5);
    return scalar * numerator / denominator;
}

// Compute the distance a ray travels through the atmosphere, stopped by the planet
// Returns 0.0 if origin is outside the atmosphere 
fn rayAtmosphereIntersectionLength(
    atmosphere: ptr<function,Atmosphere>,                   
    origin: vec3<f32>,
    direction: vec3<f32>) -> f32
{
    let hitAtmosphere: RaySphereHit = raySphereIntersection(origin, direction, (*atmosphere).atmosphereRadiusMm);
    
    if (!hitAtmosphere.hit || hitAtmosphere.t1 <= 0.0)
    {
        return 0.0;
    }
    
    let hitPlanet: RaySphereHit = raySphereIntersection(origin, direction, (*atmosphere).planetRadiusMm);

    // If starting outside of atmosphere, move forward
    let t0: f32 = max(0.0, hitAtmosphere.t0);

    var t1: f32 = hitAtmosphere.t1;
    // TODO: Figure out what to do when inside the planet
    if (hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        // Planet is in front of us
        t1 = min(hitPlanet.t0, t1);
    }

    return t1 - t0;
}

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
};

// Returns 'start' moved 'stepDistance' units along the implicit direction vector 
fn stepRadiusMu(
    start: RaymarchStep, 
    stepDistance: f32
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        stepDistance * stepDistance + 2.0 * start.radius * start.mu * stepDistance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + stepDistance) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    stepDistance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (stepDistance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, stepDistance);

    var transmittance = vec3<f32>(0.0);
    if (start.mu > 0.0)
    {
        // Oriented up into atmosphere, so we directly sample LUT
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, start.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, end.mu);
    }
    else
    {
        // Oriented down towards planet, so direct samples would be invalid
        // Instead, we flip the direction
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, -end.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, -start.mu);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
}

fn sampleTransmittanceLUT_Sun(
    transmittance_lut: texture_2d<f32>,
    lut_sampler: sampler,
    atmosphere: ptr<function,Atmosphere>,
    sun: ptr<function,CelestialLight>,
    radius: f32,
    cos_sunZenith: f32) -> vec3<f32>
{
    let sin_sunRadius: f32 = sin((*sun).angularRadius);
    let cos_sunRadius: f32 = cos((*sun).angularRadius);

    /*
    Possible small angle approximation
    const float sin_sunRadius = SUN_ANGULAR_RADIUS_RADIANS;
    const float cos_sunRadius = 1.0;
    */

    // Cos is negative since the horizon zenith varies from PI/2 to PI
    let sin_horizonZenith: f32 = (*atmosphere).planetRadiusMm / radius;
    let cos_horizonZenith: f32 = -safeSqrt(1.0 - sin_horizonZenith * sin_horizonZenith);

    // This sample makes no assumption about ground intersection
    let transmittanceThroughAtmosphere: vec3<f32> = sampleTransmittanceLUT_RadiusMu(
        transmittance_lut, 
        lut_sampler,
        atmosphere, 
        radius, 
        cos_sunZenith
    );

    // angularFactor goes from 1 to 0 as sunZenith varies from horizonZenith - sunRadius to horizonZenith + sunRadius
    // Or as cos(sunZenith) varies from cos(horizonZenith - sunRadius) to cos(horizonZenith + sunRadius)
    // Using angle sum identity, we get that:
    // cos(horizonZenith - sunRadius) = cos(horizonZenith)cos(sunRadius) + sin(sunRadius)sin(horizonZenith)
    // cos(horizonZenith + sunRadius) = cos(horizonZenith)cos(sunRadius) - sin(sunRadius)sin(horizonZenith)

    let angularFactor: f32 = smoothstep(
        -sin_horizonZenith * sin_sunRadius,
        sin_horizonZenith * sin_sunRadius,
        cos_sunZenith - cos_horizonZenith * cos_sunRadius
    );

    return transmittanceThroughAtmosphere * angularFactor;
}
// Contains methods and overloads for raymarching the atmosphere

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE

/*
Flags explanation:

MULTISCATTERING 
- read from a multiscattering texture when computing the in-scattering path integral
- Should be disabled when calculating multiscattering, and enabled otherwise

ISOTROPIC_PHASE
- Use an isotropic phase function when calculating out-scattering at each point
- Should be enabled when calculating multiscattering, and disabled otherwise

SCATTERING_NONLINEAR_SAMPLE
- Helps with small sample counts, by concentrating more samples closer to the ray origin

LIGHT_ILLUMINANCE_IS_ONE
- When computing luminance using a light, use 1 instead of the strength.
- This converts the returned luminance into a transfer value, which can be scaled by solar illuminance whenever
*/

// Make sure to include atmosphere_common first

struct ScatteringResult
{
    luminance: vec3<f32>,
    multiScattTransfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,             
    lut_sampler: sampler,                                   
    transmittanceLUT: texture_2d<f32>,
    multiscatterLUT: texture_2d<f32>,
    inOrigin: vec3<f32>,
    inDirection: vec3<f32>,
    includeGround: bool,
) -> ScatteringResult
{
    var result: ScatteringResult;
    result.luminance = vec3<f32>(0.0);
    result.multiScattTransfer = vec3<f32>(0.0);

    let direction = normalize(inDirection);

    // This is the direction of the incoming light, which is the light we are interested in computing the magnitude of.
    // For the purposes of calculating phase functions, this is the direction we want to use.
    let scatteringDir = -direction;

    let hitPlanet = raySphereIntersection(inOrigin, direction, (*atmosphere).planetRadiusMm);
    let hitAtmosphere = raySphereIntersection(inOrigin, direction, (*atmosphere).atmosphereRadiusMm);

    let inside_planet = hitPlanet.hit && hitPlanet.t0 < 0.0 && hitPlanet.t1 > 0.0;
    let intersects_atmosphere = hitAtmosphere.hit && hitAtmosphere.t1 > 0.0;
    if (!intersects_atmosphere || inside_planet)
    {
        return result;
    }


    // Assuming the planet was hit, we have hitAtmosphere.t0 < hitPlanet.t0 < hitPlanet.t1 < hitAtmosphere.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

    var sampleDistance = 0.0;
    if (hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        sampleDistance = hitPlanet.t0;
    }
    else
    {
        sampleDistance = hitAtmosphere.t1;
    }

    var origin = inOrigin;
    if (hitAtmosphere.t0 > 0.0)
    {
        origin += hitAtmosphere.t0 * direction;
        sampleDistance -= hitAtmosphere.t0;
    }

    let radius: f32 = length(origin);
    let mu: f32 = dot(origin, direction) / (length(origin) * length(direction));

    let originStep = RaymarchStep(radius, mu);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT: u32 = 32;

    let dSampleDistance: f32 = sampleDistance / f32(SAMPLE_COUNT);
    for (var i = 0u; i < SAMPLE_COUNT; i++)
    {
        var tBegin: f32 = f32(i) / f32(SAMPLE_COUNT);
        var tEnd: f32 = f32(i + 1) / f32(SAMPLE_COUNT);


        tBegin = tBegin * sampleDistance;
        tEnd = min(tEnd * sampleDistance, sampleDistance);

        let t: f32 = mix(tBegin, tEnd, 0.5);
        let begin = origin - tBegin * scatteringDir;
        let samplePosition = origin - t * scatteringDir;
        let end = origin - tEnd * scatteringDir;

        let sampleStep: RaymarchStep = stepRadiusMu(originStep, t);

        let altitude = length(begin) - (*atmosphere).planetRadiusMm;

        let extinctionSample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

        // We could accumulate samples across loops like:
        //
        // const vec3 sampleTransmittance = exp(-dSampleDistance * extinctionSample.extinction);
        // ... compute luminance using transmittance ...
        // transmittance *= sampleTransmittance;
        //
        // But at the cost of performance, resampling the transmittance LUT is more accurate for larger step sizes

        let transmittanceToBegin = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, lut_sampler, atmosphere, originStep, t);

        {
            let incidentCosine = dot((*light).forward, scatteringDir);
            let mu_light = dot(samplePosition, -(*light).forward) / length(samplePosition);

            // Ozone does not scatter light normally, so we arbitrarily use rayleigh's phase function in case ozone's scattering
            // coefficient is nonzero
            let phaseTimesScattering: vec3<f32> = 
                extinctionSample.scatteringRayleigh * phaseRayleigh(incidentCosine)
                + extinctionSample.scatteringMie * phaseMie(incidentCosine, 0.8)
                 + extinctionSample.scatteringOzone * phaseRayleigh(incidentCosine);

            let multiscatter = sampleMultiscatterLUT(multiscatterLUT, lut_sampler, atmosphere, samplePosition, (*light).forward);

            let transmittanceToSun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, mu_light);

            let shadowBegin = f32(raySphereTest(begin, -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowMiddle = f32(raySphereTest(0.5 * (begin + end), -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowEnd = f32(raySphereTest(end, -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowing = transmittanceToSun * (1.0 - 0.25 * (shadowBegin + 2.0 * shadowMiddle + shadowEnd));

            // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
            // This is a single interval of the integral in Equation (1) from Hillaire's paper,
            // with all constant terms factored out above
            let transmittanceAlongPath = sampleTransmittanceLUT_Segment(transmittanceLUT, lut_sampler, atmosphere, sampleStep.radius, sampleStep.mu, dSampleDistance, hitPlanet.hit && hitPlanet.t0 > 0.0);
            let scatteringIlluminanceIntegral = (vec3(1.0) - transmittanceAlongPath) / extinctionSample.extinction;

            result.luminance += 
                (phaseTimesScattering * shadowing + multiscatter * extinctionSample.scattering)
                * scatteringIlluminanceIntegral * transmittanceToBegin 
                * 1.0;
            result.multiScattTransfer += extinctionSample.scattering * scatteringIlluminanceIntegral * transmittanceToBegin;
        }
    }

    if (includeGround && hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        let sampleStep: RaymarchStep = stepRadiusMu(originStep, sampleDistance);

        let samplePosition = origin + hitPlanet.t0 * direction;
        let mu_light = dot(samplePosition, -(*light).forward) / length(samplePosition);

        let transmittanceToSurface = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, lut_sampler, atmosphere, originStep, hitPlanet.t0);
        let transmittanceToSun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, mu_light);

        let normalDotLight = clamp(mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).groundAlbedo / PI;

        result.luminance += 
            transmittanceToSurface * transmittanceToSun * normalDotLight * diffuse
            * 1.0;
    }

    return result;
}

// All units are Mm/megameters (10^6 meters) unless marked km/kilometers (10^3 meters)

// This shader builds a 2D sky-view LUT, which is a lattitude-longitude map of
// the sky with only the planet's surface shadowing.
// This map contains the total luminance from in-scattering due to atmospheric effects.
//
// The purpose of this map is to provide a fast-path when rendering the sky. This texture can be sampled instead of
// performing the calculations. Calculations are (probably) still necessary when geometry intersects the view ray.
//
// This map only depends on altitude, and allows the camera to be freely rotated
// without requiring recomputation. There is even an acceptable degree of movement
// by the camera within a range of the provided altitude.
//
// Parameterized as follows:
// u := azimuth angle
// u varies from -pi to pi
//
// v := solar elevation
// v varies from -pi/2 to pi/2

fn uv_to_azimuthElevation(
    atmosphere: ptr<function, Atmosphere>, 
    radius: f32, 
    uv: vec2<f32>,
) -> vec2<f32>
{
    // Horizon zenith cannot be less than PI/2, so we use sin and assume it is a quadrant 2 angle
    let sinHorizonZenith = (*atmosphere).planetRadiusMm / radius;
    let horizonZenith = PI - asin(sinHorizonZenith);

    let azimuth = 2.0 * PI * (uv.x - 0.5);

    var viewZenith: f32;

    if (uv.y < 0.5)
    {
        let unnormalized_v = 2.0 * uv.y - 1.0;
        let angleFraction = 1.0 - unnormalized_v * unnormalized_v;

        viewZenith = angleFraction * horizonZenith;
    }
    else
    {
        let unnormalized_v = 2.0 * uv.y - 1.0;
        let angleFraction = unnormalized_v * unnormalized_v;

        viewZenith = (PI - horizonZenith) * angleFraction + horizonZenith;
    }

    let elevation = -(viewZenith - PI / 2.0);

    return vec2<f32>(azimuth, elevation);
}

@compute @workgroup_size(16,16,1)
fn computeSkyViewLuminance(@builtin(global_invocation_id) global_id : vec3<u32>,)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(skyview_lut);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        return;
    }
    var atmosphere: Atmosphere = ATMOSPHERE_GLOBAL;
    var light: CelestialLight = b_light.light;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    const TEN_METERS_MM = 10.0 / 1000000.0;
    let origin = vec3<f32>(0.0, atmosphere.planetRadiusMm + TEN_METERS_MM, 0.0);

    let azimuth_elevation = uv_to_azimuthElevation(
        &atmosphere,  
        length(origin),
        uv
    );

    let azimuth = azimuth_elevation.x;
    let elevation = azimuth_elevation.y;

    let direction = normalize(vec3(
        sin(azimuth) * cos(elevation), 
        sin(elevation), 
        cos(azimuth) * cos(elevation)
    ));

    let include_ground = false;
    let luminance = computeLuminanceScatteringIntegral(
        &atmosphere, 
        &light,
        lut_sampler,
        transmittance_lut, 
        multiscatter_lut, 
        origin, 
        direction, 
        include_ground
    ).luminance;

    textureStore(skyview_lut, texel_coord, vec4(luminance, 1.0));
}`,hm=`// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

struct Atmosphere
{
    scatteringRayleighPerMm : vec3<f32>,
    densityScaleRayleighMm : f32,
    absorptionRayleighPerMm : vec3<f32>,

    planetRadiusMm : f32,

    scatteringMiePerMm : vec3<f32>,
    densityScaleMieMm : f32,
    absorptionMiePerMm : vec3<f32>,

    atmosphereRadiusMm : f32,

    groundAlbedo : vec3<f32>,

    padding0 : f32,

    scatteringOzonePerMm : vec3<f32>,

    padding1 : f32,

    absorptionOzonePerMm : vec3<f32>,

    padding2 : f32,

    padding3 : vec4<f32>,
}

const ATMOSPHERE_GLOBAL: Atmosphere = Atmosphere(
    vec3<f32>(5.802, 13.558, 33.1),
    0.008, // 8.0 km
    vec3<f32>(0.0), 

    6.360,

    vec3<f32>(3.996),
    0.0012, // 1.2 km
    vec3<f32>(4.40),

    6.420,

    0.3 * vec3<f32>(1.0, 0.75, 0.4),
    0.0,

    vec3<f32>(0.0),
    0.0,

    vec3<f32>(0.650, 1.881, 0.085),
    0.0,
    vec4<f32>(0.0),
);

struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,
    forward: vec3<f32>,
    angularRadius: f32,
}

struct CelestialLightUBO
{
    light: CelestialLight,
}

const LIGHT_GLOBAL = CelestialLight(
    vec3<f32>(1.0),
    6.0,
    vec3<f32>(0.0, -0.1961, 0.98058),
    16.0 / 60.0 * (3.141592653589793 / 180.0),
);

@group(0) @binding(0) var lut_sampler: sampler;
@group(0) @binding(1) var transmittance_lut: texture_2d<f32>;
@group(0) @binding(2) var multiscatter_lut: texture_2d<f32>;
@group(0) @binding(3) var skyview_lut: texture_2d<f32>;

struct CameraUBO
{
    inv_proj: mat4x4<f32>,
    inv_view: mat4x4<f32>,
    position: vec4<f32>,
}

@group(1) @binding(0) var<uniform> b_camera: CameraUBO;
@group(1) @binding(1) var<uniform> b_light: CelestialLightUBO;

// vertex state NOT included
// Render a quad and use this as the fragment stage

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH: u32 = 2048;
const TRANSMITTANCE_LUT_HEIGHT: u32 = 1024;

const MULTISCATTER_LUT_WIDTH: u32 = 1024;
const MULTISCATTER_LUT_HEIGHT: u32 = 1024;

const METERS_PER_MM: f32 = 1000000;
const PI: f32 = 3.141592653589793;

// Transmittance LUT UV mapping based on Bruneton et al. 2017 method
// https://ebruneton.github.io/precomputed_atmospheric_scattering/atmosphere/functions.glsl#transmittance_lookup

fn safeSqrt(value: f32) -> f32 { return sqrt(max(value, 0.0)); }

// Squeeze in UV values by half a texel, so the bounds of our sampled function can be stored precisely at the edge of
// the texture
fn textureCoordFromUnitRange(value: f32, length: u32) -> f32
{
    return 0.5 / f32(length) + value * (1.0 - 1.0 / f32(length));
}
fn unitRangeFromTextureCoord(coord: f32 , length: u32) -> f32
{
    return (coord - 0.5 / f32(length)) / (1.0 - 1.0 / f32(length));
}

// Radius is the distance in Mm from the center of the planet, aka length of position vector
// Mu is the cosine of the angle between the position vector and the direction vector we want to sample the
// transmittance in
fn transmittanceLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu: f32
) -> vec2<f32>
{
    let atmosphereRadiusMmSquared: f32 = (*atmosphere).atmosphereRadiusMm * (*atmosphere).atmosphereRadiusMm;
    let planetRadiusMmSquared: f32 = (*atmosphere).planetRadiusMm * (*atmosphere).planetRadiusMm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphereRadiusMmSquared - planetRadiusMmSquared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planetRadiusMmSquared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphereRadiusMmSquared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphereRadiusMm - radius;
    let d_max: f32 = rho + h;

    let x_mu: f32 = (d - d_min) / (d_max - d_min);
    let x_radius: f32 = rho / h;

    return vec2<f32>(
        textureCoordFromUnitRange(x_mu, TRANSMITTANCE_LUT_WIDTH),
        textureCoordFromUnitRange(x_radius, TRANSMITTANCE_LUT_HEIGHT)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>, 
    uv: vec2<f32>
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, TRANSMITTANCE_LUT_WIDTH);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, TRANSMITTANCE_LUT_HEIGHT);

    let atmospherRadiusMmSquared : f32 = (*atmosphere).atmosphereRadiusMm * (*atmosphere).atmosphereRadiusMm;
    let planetRadiusMmSquared : f32 = (*atmosphere).planetRadiusMm * (*atmosphere).planetRadiusMm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmospherRadiusMmSquared - planetRadiusMmSquared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planetRadiusMmSquared);

    let d_min : f32 = (*atmosphere).atmosphereRadiusMm - radius;
    let d_max : f32 = rho + h;

    let d : f32 = (d_max - d_min) * x_mu + d_min;

    // This boundary condition is important depending on floating point errors
    // We don't need to check radius since it is bounded below by planet radius, and that shouldn't be near 0
    let D_EPSILON: f32 = 0.000000001;
    if (d < D_EPSILON)
    {
        // mu is ambiguous since we are at the very edge of the atmosphere, where no angle produces valid transmittance
        // values
        return vec2<f32>(radius, 1.0);
    }

    let mu : f32 = (h * h - rho * rho - d * d) / (2.0 * radius * d);
    // Equivalenty, mu = (atmospherRadiusMmSquared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmospherRadiusMmSquared and radius * radius are large, so this avoids floating point errors from adding
    // these to the much smaller d * d

    // This clamp is very important
    return vec2<f32>(radius, clamp(mu, -1.0, 1.0));
}

fn multiscatterLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu_light: f32
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planetRadiusMm) 
            / ((*atmosphere).atmosphereRadiusMm - (*atmosphere).planetRadiusMm), 
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, MULTISCATTER_LUT_WIDTH),
        textureCoordFromUnitRange(v_unit, MULTISCATTER_LUT_HEIGHT)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>, 
    uv: vec2<f32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, MULTISCATTER_LUT_WIDTH);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, MULTISCATTER_LUT_HEIGHT);

    let mu_light: f32 = 2.0 * (u_unit - 0.5);

    // The exact radius is not too critical, and multiscattering is sensitive to being out of range, so we squeeze into
    // a slightly smaller planet radius to ensure we are valid.
    let radius: f32 = mix(
        (*atmosphere).planetRadiusMm * (1.0002), 
        (*atmosphere).atmosphereRadiusMm * (0.9998), 
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    incidentDirectionLight: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu_light: f32 = dot(position, -incidentDirectionLight) 
        / (length(position) * length(incidentDirectionLight));

    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(atmosphere, radius, mu_light);

    return textureSampleLevel(lut, s, uv, 0.0).xyz;
}

fn sampleTransmittanceLUT_RadiusMu(
    lut: texture_2d<f32>, 
    s: sampler,
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

    let sample = textureSampleLevel(lut, s, uv, 0.0).xyz;

    return sample;
}

fn sampleTransmittanceLUT_Ray(
    lut: texture_2d<f32>, 
    s: sampler,
    atmosphere: ptr<function,Atmosphere>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu: f32 = (dot(position, direction) / (length(position) * length(direction)));

    return sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, radius, mu);

}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>,
    s: sampler, 
    atmosphere: ptr<function,Atmosphere>, 
    r_start: f32,
    mu_start: f32,
    d: f32,
    intersects_ground: bool
) -> vec3<f32>
{
    let r_end = clamp(
        safeSqrt(d * d + 2.0 * r_start * mu_start * d + r_start * r_start),
        (*atmosphere).planetRadiusMm, (*atmosphere).atmosphereRadiusMm
    );
    let mu_end = clamp((r_start * mu_start + d) / r_end, -1.0, 1.0);

    if(intersects_ground)
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, -mu_end)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, -mu_start),
            vec3<f32>(1.0)
        );
    }
    else
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, mu_start)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, mu_end),
            vec3<f32>(1.0)
        );
    }
}

struct ExtinctionSample
{
    scatteringRayleigh: vec3<f32>,
    scatteringMie: vec3<f32>,
    scatteringOzone: vec3<f32>,

    absorptionRayleigh: vec3<f32>,
    absorptionMie: vec3<f32>,
    absorptionOzone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and densityScale are the same units.
fn densityExponential(altitude: f32, densityScale: f32) -> f32
{ return exp(-altitude / densityScale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let densityRayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).densityScaleRayleighMm);
    let scatteringRayleigh: vec3<f32> = (*atmosphere).scatteringRayleighPerMm * densityRayleigh;
    let absorptionRayleigh: vec3<f32> = (*atmosphere).absorptionRayleighPerMm * densityRayleigh;

    let densityMie: f32 = densityExponential(altitude_Mm, (*atmosphere).densityScaleMieMm);
    let scatteringMie: vec3<f32> = (*atmosphere).scatteringMiePerMm * densityMie;
    let absorptionMie: vec3<f32> = (*atmosphere).absorptionMiePerMm * densityMie;

    let densityOzone: f32 = densityTent(altitude_Mm * 1000.0);
    let scatteringOzone: vec3<f32> = (*atmosphere).scatteringOzonePerMm * densityOzone;
    let absorptionOzone: vec3<f32> = (*atmosphere).absorptionOzonePerMm * densityOzone;

    var extinctionSample: ExtinctionSample;
    extinctionSample.scatteringRayleigh = scatteringRayleigh;
    extinctionSample.scatteringMie = scatteringMie;
    extinctionSample.scatteringOzone = scatteringOzone;

    extinctionSample.absorptionRayleigh = absorptionRayleigh;
    extinctionSample.absorptionMie = absorptionMie;
    extinctionSample.absorptionOzone = absorptionOzone;

    extinctionSample.scattering = scatteringRayleigh + scatteringMie + scatteringOzone;
    extinctionSample.extinction = extinctionSample.scattering + absorptionRayleigh + absorptionMie + absorptionOzone;

    return extinctionSample;
}

struct RaySphereHit
{
    hit: bool,
    t0: f32,
    t1: f32,
}

// t1 > t0, values can be negative. Function returns true even if the sphere is behind the ray.
// If this returns false, t0 and t1 are unchanged.
fn raySphereIntersection(
    ray_origin: vec3<f32>, 
    ray_direction_normalized: vec3<f32>, 
    radius: f32
) -> RaySphereHit
{
    // Method taken from "Precision Improvements for Ray/Sphere Intersection"
    // by Eric Haines, Johannes Günther, and Tomas Akenine-Möller
    //
    // The method includes tricks to reduce float point inaccuracy errors.

    let f: vec3<f32> = ray_origin;
    let d: vec3<f32> = ray_direction_normalized;
    let b: f32 = -1.0 * dot(f, d);
    let centerToIntersectionChord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(centerToIntersectionChord, centerToIntersectionChord);
    let c: f32 = dot(f, f) - radius * radius;

    var output : RaySphereHit;
    output.hit = false;
    output.t0 = 0.0;
    output.t1 = 0.0; 

    if (discriminant < 0.0)
    {
        return output;
    }

    var q: f32 = b;
    if (b < 0.0)
    {
        q -= sqrt(discriminant);
    }
    else
    {
        q += sqrt(discriminant);
    }

    output.hit = true;
    output.t0 = c / q;
    output.t1 = q;

    if (output.t0 > output.t1)
    {
        let temp: f32 = output.t0;
        output.t0 = output.t1;
        output.t1 = temp;
    }

    return output;
}

// Returns true if the ray hits the sphere with radius in the direction indicated.
// Returns false if the sphere is not hit or if the sphere is behind the ray.
fn raySphereTest(
    rayOrigin: vec3<f32>, 
    rayDirectionNormalized: vec3<f32>, 
    radius: f32
) -> bool
{
    var result: RaySphereHit = raySphereIntersection(rayOrigin, rayDirectionNormalized, radius);
    return result.hit && result.t1 > 0.0;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
fn phaseRayleigh(cosine: f32) -> f32
{
    let scalar: f32 = 3.0 / (16.0 * PI);
    let numerator: f32 = (1.0 + cosine * cosine);

    return scalar * numerator;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
// Input g is a value from -1 to 1 that controls the concentration of back vs forward scattering.
// Note: g = 0 reduces to the case of our rayleigh phase function
fn phaseMie(cosine: f32, g: f32) -> f32
{
    let scalar: f32 = 3.0 / (8.0 * PI);
    let numerator: f32 = (1.0 - g * g) * (1.0 + cosine * cosine);
    let denominator: f32 = (2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * cosine, 1.5);
    return scalar * numerator / denominator;
}

// Compute the distance a ray travels through the atmosphere, stopped by the planet
// Returns 0.0 if origin is outside the atmosphere 
fn rayAtmosphereIntersectionLength(
    atmosphere: ptr<function,Atmosphere>,                   
    origin: vec3<f32>,
    direction: vec3<f32>) -> f32
{
    let hitAtmosphere: RaySphereHit = raySphereIntersection(origin, direction, (*atmosphere).atmosphereRadiusMm);
    
    if (!hitAtmosphere.hit || hitAtmosphere.t1 <= 0.0)
    {
        return 0.0;
    }
    
    let hitPlanet: RaySphereHit = raySphereIntersection(origin, direction, (*atmosphere).planetRadiusMm);

    // If starting outside of atmosphere, move forward
    let t0: f32 = max(0.0, hitAtmosphere.t0);

    var t1: f32 = hitAtmosphere.t1;
    // TODO: Figure out what to do when inside the planet
    if (hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        // Planet is in front of us
        t1 = min(hitPlanet.t0, t1);
    }

    return t1 - t0;
}

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
};

// Returns 'start' moved 'stepDistance' units along the implicit direction vector 
fn stepRadiusMu(
    start: RaymarchStep, 
    stepDistance: f32
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        stepDistance * stepDistance + 2.0 * start.radius * start.mu * stepDistance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + stepDistance) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    stepDistance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (stepDistance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, stepDistance);

    var transmittance = vec3<f32>(0.0);
    if (start.mu > 0.0)
    {
        // Oriented up into atmosphere, so we directly sample LUT
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, start.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, end.mu);
    }
    else
    {
        // Oriented down towards planet, so direct samples would be invalid
        // Instead, we flip the direction
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, -end.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, -start.mu);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
}

fn sampleTransmittanceLUT_Sun(
    transmittance_lut: texture_2d<f32>,
    lut_sampler: sampler,
    atmosphere: ptr<function,Atmosphere>,
    sun: ptr<function,CelestialLight>,
    radius: f32,
    cos_sunZenith: f32) -> vec3<f32>
{
    let sin_sunRadius: f32 = sin((*sun).angularRadius);
    let cos_sunRadius: f32 = cos((*sun).angularRadius);

    /*
    Possible small angle approximation
    const float sin_sunRadius = SUN_ANGULAR_RADIUS_RADIANS;
    const float cos_sunRadius = 1.0;
    */

    // Cos is negative since the horizon zenith varies from PI/2 to PI
    let sin_horizonZenith: f32 = (*atmosphere).planetRadiusMm / radius;
    let cos_horizonZenith: f32 = -safeSqrt(1.0 - sin_horizonZenith * sin_horizonZenith);

    // This sample makes no assumption about ground intersection
    let transmittanceThroughAtmosphere: vec3<f32> = sampleTransmittanceLUT_RadiusMu(
        transmittance_lut, 
        lut_sampler,
        atmosphere, 
        radius, 
        cos_sunZenith
    );

    // angularFactor goes from 1 to 0 as sunZenith varies from horizonZenith - sunRadius to horizonZenith + sunRadius
    // Or as cos(sunZenith) varies from cos(horizonZenith - sunRadius) to cos(horizonZenith + sunRadius)
    // Using angle sum identity, we get that:
    // cos(horizonZenith - sunRadius) = cos(horizonZenith)cos(sunRadius) + sin(sunRadius)sin(horizonZenith)
    // cos(horizonZenith + sunRadius) = cos(horizonZenith)cos(sunRadius) - sin(sunRadius)sin(horizonZenith)

    let angularFactor: f32 = smoothstep(
        -sin_horizonZenith * sin_sunRadius,
        sin_horizonZenith * sin_sunRadius,
        cos_sunZenith - cos_horizonZenith * cos_sunRadius
    );

    return transmittanceThroughAtmosphere * angularFactor;
}
// Contains methods and overloads for raymarching the atmosphere

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE

/*
Flags explanation:

MULTISCATTERING 
- read from a multiscattering texture when computing the in-scattering path integral
- Should be disabled when calculating multiscattering, and enabled otherwise

ISOTROPIC_PHASE
- Use an isotropic phase function when calculating out-scattering at each point
- Should be enabled when calculating multiscattering, and disabled otherwise

SCATTERING_NONLINEAR_SAMPLE
- Helps with small sample counts, by concentrating more samples closer to the ray origin

LIGHT_ILLUMINANCE_IS_ONE
- When computing luminance using a light, use 1 instead of the strength.
- This converts the returned luminance into a transfer value, which can be scaled by solar illuminance whenever
*/

// Make sure to include atmosphere_common first

struct ScatteringResult
{
    luminance: vec3<f32>,
    multiScattTransfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,             
    lut_sampler: sampler,                                   
    transmittanceLUT: texture_2d<f32>,
    multiscatterLUT: texture_2d<f32>,
    inOrigin: vec3<f32>,
    inDirection: vec3<f32>,
    includeGround: bool,
) -> ScatteringResult
{
    var result: ScatteringResult;
    result.luminance = vec3<f32>(0.0);
    result.multiScattTransfer = vec3<f32>(0.0);

    let direction = normalize(inDirection);

    // This is the direction of the incoming light, which is the light we are interested in computing the magnitude of.
    // For the purposes of calculating phase functions, this is the direction we want to use.
    let scatteringDir = -direction;

    let hitPlanet = raySphereIntersection(inOrigin, direction, (*atmosphere).planetRadiusMm);
    let hitAtmosphere = raySphereIntersection(inOrigin, direction, (*atmosphere).atmosphereRadiusMm);

    let inside_planet = hitPlanet.hit && hitPlanet.t0 < 0.0 && hitPlanet.t1 > 0.0;
    let intersects_atmosphere = hitAtmosphere.hit && hitAtmosphere.t1 > 0.0;
    if (!intersects_atmosphere || inside_planet)
    {
        return result;
    }


    // Assuming the planet was hit, we have hitAtmosphere.t0 < hitPlanet.t0 < hitPlanet.t1 < hitAtmosphere.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

    var sampleDistance = 0.0;
    if (hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        sampleDistance = hitPlanet.t0;
    }
    else
    {
        sampleDistance = hitAtmosphere.t1;
    }

    var origin = inOrigin;
    if (hitAtmosphere.t0 > 0.0)
    {
        origin += hitAtmosphere.t0 * direction;
        sampleDistance -= hitAtmosphere.t0;
    }

    let radius: f32 = length(origin);
    let mu: f32 = dot(origin, direction) / (length(origin) * length(direction));

    let originStep = RaymarchStep(radius, mu);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT: u32 = 32;

    let dSampleDistance: f32 = sampleDistance / f32(SAMPLE_COUNT);
    for (var i = 0u; i < SAMPLE_COUNT; i++)
    {
        var tBegin: f32 = f32(i) / f32(SAMPLE_COUNT);
        var tEnd: f32 = f32(i + 1) / f32(SAMPLE_COUNT);

        tBegin = tBegin * tBegin;
        tEnd = tEnd * tEnd;

        tBegin = tBegin * sampleDistance;
        tEnd = min(tEnd * sampleDistance, sampleDistance);

        let t: f32 = mix(tBegin, tEnd, 0.5);
        let begin = origin - tBegin * scatteringDir;
        let samplePosition = origin - t * scatteringDir;
        let end = origin - tEnd * scatteringDir;

        let sampleStep: RaymarchStep = stepRadiusMu(originStep, t);

        let altitude = length(begin) - (*atmosphere).planetRadiusMm;

        let extinctionSample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

        // We could accumulate samples across loops like:
        //
        // const vec3 sampleTransmittance = exp(-dSampleDistance * extinctionSample.extinction);
        // ... compute luminance using transmittance ...
        // transmittance *= sampleTransmittance;
        //
        // But at the cost of performance, resampling the transmittance LUT is more accurate for larger step sizes

        let transmittanceToBegin = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, lut_sampler, atmosphere, originStep, t);

        {
            let incidentCosine = dot((*light).forward, scatteringDir);
            let mu_light = dot(samplePosition, -(*light).forward) / length(samplePosition);

            // Ozone does not scatter light normally, so we arbitrarily use rayleigh's phase function in case ozone's scattering
            // coefficient is nonzero
            let phaseTimesScattering: vec3<f32> = 
                extinctionSample.scatteringRayleigh * phaseRayleigh(incidentCosine)
                + extinctionSample.scatteringMie * phaseMie(incidentCosine, 0.8)
                 + extinctionSample.scatteringOzone * phaseRayleigh(incidentCosine);

            let multiscatter = sampleMultiscatterLUT(multiscatterLUT, lut_sampler, atmosphere, samplePosition, (*light).forward);

            let transmittanceToSun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, mu_light);

            let shadowBegin = f32(raySphereTest(begin, -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowMiddle = f32(raySphereTest(0.5 * (begin + end), -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowEnd = f32(raySphereTest(end, -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowing = transmittanceToSun * (1.0 - 0.25 * (shadowBegin + 2.0 * shadowMiddle + shadowEnd));

            // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
            // This is a single interval of the integral in Equation (1) from Hillaire's paper,
            // with all constant terms factored out above
            let transmittanceAlongPath = sampleTransmittanceLUT_Segment(transmittanceLUT, lut_sampler, atmosphere, sampleStep.radius, sampleStep.mu, dSampleDistance, hitPlanet.hit && hitPlanet.t0 > 0.0);
            let scatteringIlluminanceIntegral = (vec3(1.0) - transmittanceAlongPath) / extinctionSample.extinction;

            result.luminance += 
                (phaseTimesScattering * shadowing + multiscatter * extinctionSample.scattering)
                * scatteringIlluminanceIntegral * transmittanceToBegin 
                * 1.0;
            result.multiScattTransfer += extinctionSample.scattering * scatteringIlluminanceIntegral * transmittanceToBegin;
        }
    }

    if (includeGround && hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        let sampleStep: RaymarchStep = stepRadiusMu(originStep, sampleDistance);

        let samplePosition = origin + hitPlanet.t0 * direction;
        let mu_light = dot(samplePosition, -(*light).forward) / length(samplePosition);

        let transmittanceToSurface = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, lut_sampler, atmosphere, originStep, hitPlanet.t0);
        let transmittanceToSun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, mu_light);

        let normalDotLight = clamp(mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).groundAlbedo / PI;

        result.luminance += 
            transmittanceToSurface * transmittanceToSun * normalDotLight * diffuse
            * 1.0;
    }

    return result;
}

// ACES tonemap fitting constants provided by 
// https://github.com/TheRealMJP/BakingLab/blob/master/BakingLab/ACES.hlsl

// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
const ACES_INPUT_MAT = mat3x3<f32>(
    vec3<f32>(0.59719, 0.07600, 0.02840),
    vec3<f32>(0.35458, 0.90834, 0.13383),
    vec3<f32>(0.04823, 0.01566, 0.83777)
);

// ODT_SAT => XYZ => D60_2_D65 => sRGB
const ACES_OUTPUT_MAT = mat3x3<f32> 
(
    vec3<f32>(1.60475, -0.10208, -0.00327),
    vec3<f32>(-0.53108,  1.10813, -0.07276),
    vec3<f32>(-0.07367, -0.00605,  1.07602)
);

fn RRTAndODTFit(v: vec3<f32>) -> vec3<f32>
{
    let a = v * (v + 0.0245786) - 0.000090537;
    let b = v * (0.983729 * v + 0.4329510) + 0.238081;
    return a / b;
}

// Transfer implementation as defined in
// https://www.color.org/chardata/rgb/srgb.xalter

// nonlinear sRGB -> linear
fn SRGBtoLinear(color_srgb: vec3<f32>) -> vec3<f32>
{
    let piecewise_boundary = color_srgb < vec3<f32>(0.0031308 * 12.92);
    let piecewise_linear = color_srgb / vec3<f32>(12.92);
    let piecewise_nonlinear = pow(
        (color_srgb + vec3<f32>(0.055)) / vec3<f32>(1.055), vec3<f32>(2.4)
    );

    return 0.95 * select(piecewise_nonlinear, piecewise_linear, piecewise_boundary);
}

// linear -> nonlinear sRGB
fn linearToSRGB(color_linear: vec3<f32>) -> vec3<f32>
{
    let piecewise_boundary = color_linear <= vec3<f32>(0.0031308);
    let piecewise_linear = vec3<f32>(12.92) * color_linear;
    let piecewise_nonlinear = vec3<f32>(1.055) * pow(color_linear, vec3<f32>(1 / 2.4)) - vec3<f32>(0.055);

    return select(piecewise_nonlinear, piecewise_linear, piecewise_boundary);
}

fn tonemapACES(color_hdr: vec3<f32>) -> vec3<f32>
{
    var color = ACES_INPUT_MAT * linearToSRGB(color_hdr);
    color = RRTAndODTFit(color);
    color = ACES_OUTPUT_MAT * color;
    color = clamp(color, vec3<f32>(0.0), vec3<f32>(1.0));
    color = SRGBtoLinear(color);
    return color;
}

fn tonemapPBRNeutral(color: vec3<f32>) -> vec3<f32>
{
    // Implementation of https://github.com/KhronosGroup/ToneMapping/tree/main/PBR_Neutral
    let x = min(min(color.r, color.g), color.b);

    // 4% Fresnel Reflection for a standard 1.5 IoR material
    let F_normal = 0.04;

    var f = F_normal;
    if (x <= 2.0 * F_normal)
    {
        f = x - x * x / (4.0 * F_normal);
    }

    var color_minus_f = color - vec3<f32>(f);

    // Parameter that controls when highlight compression starts
    let K_s = 0.8 - F_normal;

    let p = max(max(color_minus_f.r, color_minus_f.g), color_minus_f.b);
    if (p <= K_s)
    {
        return color_minus_f;
    }

    // Speed of desaturation
    let K_d = 0.15;

    let p_n = 1.0 - (1.0 - K_s) * (1.0 - K_s) / (p + 1.0 - 2.0 * K_s);
    let g = 1.0 / (K_d * (p - p_n) + 1.0);

    return mix(vec3(p_n), color_minus_f * p_n / p, g); 
}

fn sampleSkyViewLUT(
    atmosphere: ptr<function, Atmosphere>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    // Horizon zenith cannot be less than PI/2, so we use sin and assume it is a quadrant 2 angle
    let sinHorizonZenith = (*atmosphere).planetRadiusMm / length(position);
    let horizonZenith = PI - asin(sinHorizonZenith);

    let cosViewZenith = dot(position, direction) / (length(position) * length(direction));
    let cosHorizonZenith = -safeSqrt(1.0 - sinHorizonZenith * sinHorizonZenith);

    let viewZenith = acos(cosViewZenith);

    // We still want uv.y = 0 and uv.y = 1 to the extreme zenith angles
    // But since we make the horizon a straight line through the middle, and its zenith may not be PI/2,
    // we must scale angles differently depending on if they are above or below the horizon.

    var u = 0.0;
    var v = 0.0;

    if (cosViewZenith > cosHorizonZenith)
    {
        // Above horizon, v shall range from 0.0 to 0.5
        // viewZenith varies from 0 to horizonZenith

        let angleFraction = viewZenith / horizonZenith;

        // Increase angle density towards v = 0.5
        v = (1.0 - sqrt(1.0 - angleFraction)) * 0.5;
    }
    else
    {
        // Below horizon, v shall range from 0.5 to 1
        // viewZenith varies from horizonZenith to PI

        let angleFraction = (viewZenith - horizonZenith) / (PI - horizonZenith);

        // Increase angle density towards v = 0.5
        v = sqrt(angleFraction) * 0.5 + 0.5;
    }

    {
        var azimuth = 0.0;

        if (direction.z == 0.0)
        {
            azimuth = sign(direction.x) * PI / 2.0;
        }
        else
        {
            azimuth = atan2(direction.x, direction.z);
        }

        // azimuth varies -PI to PI

        u = (azimuth / (2.0 * PI)) + 0.5;
    }

    return textureSampleLevel(skyview_lut, lut_sampler, vec2<f32>(u, v), 0.0).xyz;
}

fn sampleSunDisk(
    atmosphere: ptr<function, Atmosphere>, 
    light: ptr<function, CelestialLight>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    let directionToSun = -(*light).forward;

    let cosDirectionSun = dot(direction, directionToSun) / (length(direction) * length(directionToSun));

    if (cosDirectionSun < 0.0)
    {
        return vec3(0.0);
    }

    // Small angle approximation
    let sinSunRadius = (*light).angularRadius;

    let sinDirectionSun = safeSqrt(1.0 - cosDirectionSun * cosDirectionSun);

    let transmittanceToSun = sampleTransmittanceLUT_Ray(transmittance_lut, lut_sampler, atmosphere, position, direction);

    return transmittanceToSun * (1.0 - smoothstep(0.2 * sinSunRadius, sinSunRadius, sinDirectionSun));
}

fn computeFractionOfSunVisible(
    atmosphere: ptr<function, Atmosphere>, 
    light: ptr<function, CelestialLight>, 
    position: vec3<f32>, 
) -> f32
{
    let sinHorizonZenith = (*atmosphere).planetRadiusMm / length(position);
    let cosSunZenith = dot(-(*light).forward, normalize(position));

    // Do some trig to estimate the fraction of the sun above the horizon

    // Ignore third dimension, since earth is a symmetrical sphere
    let directionToHorizon = normalize(vec2<f32>(
        sinHorizonZenith, 
        safeSqrt(1.0 - sinHorizonZenith * sinHorizonZenith)
    ));
    let directionToSun = normalize(vec2<f32>(
        safeSqrt(1.0 - cosSunZenith * cosSunZenith), 
        cosSunZenith
    ));

    let cosHorizonSun = dot(directionToHorizon, directionToSun);

    // + when above horizon, - when below
    let sinHorizonSun = 
        sign(directionToSun.y - directionToHorizon.y) 
        * safeSqrt(1.0 - cosHorizonSun * cosHorizonSun);

    // Small angle approximation
    let sinSunRadius = (*light).angularRadius;

    if (sinHorizonSun > sinSunRadius)
    {
        return 1.0;
    }
    else if (sinHorizonSun < -sinSunRadius)
    {
        return 0.0;
    }

    // Approximation of the area of the chorded segment above the horizon divided by the area of the circle
    return 0.5 * (sinHorizonSun / sinSunRadius) + 0.5;
}

fn sampleEnvironmentLuminance(
    atmosphere: ptr<function, Atmosphere>, 
    light: ptr<function, CelestialLight>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    if (raySphereTest(position, direction, (*atmosphere).planetRadiusMm))
    {
        let include_ground = true;

        // Ray intersects the ground, so the sky view LUT is not valid

        return computeLuminanceScatteringIntegral(
            atmosphere, 
            light, 
            lut_sampler,
            transmittance_lut, 
            multiscatter_lut, 
            position, 
            direction, 
            include_ground
        ).luminance;
    }
    else
    {
        // If sun is above horizon, the sun disk and sky is visible so the sky view LUT is valid.
       
        let luminance = sampleSkyViewLUT(atmosphere, position, direction)
            + sampleSunDisk(atmosphere, light, position, direction) * (*light).color.rgb * (*light).strength;

        return luminance;
    }
}


const QUAD_VERTICES: array<vec4<f32>, 4> = array<vec4<f32>,4>(
    vec4<f32>(-1.0, -1.0, 0.0, 1.0),
    vec4<f32>(1.0, -1.0, 0.0, 1.0),
    vec4<f32>(1.0, 1.0, 0.0, 1.0),
    vec4<f32>(-1.0, 1.0, 0.0, 1.0),
);
const QUAD_UVS: array<vec2<f32>,4> = array<vec2<f32>,4>(
    vec2<f32>(0.0, 0.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 1.0),
    vec2<f32>(0.0, 1.0),
);

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(0) uv : vec2<f32>
}

@vertex
fn vertex_main(@builtin(vertex_index) index : u32) -> VertexOut
{
    var output : VertexOut;
    output.position = QUAD_VERTICES[index];
    output.uv = QUAD_UVS[index];
    return output; 
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4<f32>
{
    var atmosphere = ATMOSPHERE_GLOBAL;
    var light = b_light.light;

    let uv = fragData.uv;

    const METERS_PER_MM = 1000000.0;
    let origin = vec3<f32>(0.0, atmosphere.planetRadiusMm, 0.0) + b_camera.position.xyz / METERS_PER_MM;

    let uv_clip_space = (uv - vec2<f32>(0.5)) * 2.0;
    let near_plane_depth = 1.0;
    let direction_view_space = b_camera.inv_proj * vec4(uv_clip_space, near_plane_depth, 1.0);
    let direction_world = normalize((b_camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

    let luminance = light.strength * sampleEnvironmentLuminance(&atmosphere, &light, origin, direction_world);

    return vec4<f32>(tonemapACES(luminance),1.0);
}`,pm=`// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

@group(0) @binding(0) var b_texture: texture_2d<f32>;
@group(0) @binding(1) var b_sampler: sampler;

const QUAD_VERTICES: array<vec4<f32>, 4> = array<vec4<f32>,4>(
    vec4<f32>(-1.0, -1.0, 0.0, 1.0),
    vec4<f32>(1.0, -1.0, 0.0, 1.0),
    vec4<f32>(1.0, 1.0, 0.0, 1.0),
    vec4<f32>(-1.0, 1.0, 0.0, 1.0),
);
const QUAD_UVS: array<vec2<f32>,4> = array<vec2<f32>,4>(
    vec2<f32>(0.0, 0.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 1.0),
    vec2<f32>(0.0, 1.0),
);

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(0) uv : vec2<f32>
}

@vertex
fn vertex_main(@builtin(vertex_index) index : u32) -> VertexOut
{
    var output : VertexOut;
    output.position = QUAD_VERTICES[index];
    output.uv = QUAD_UVS[index];
    return output; 
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4<f32>
{
    return textureSample(b_texture, b_sampler, fragData.uv);
}`,Ca={width:2048,height:1024},Qc="rgba32float",Qa="float",Yc="rgba32float",gd="float",Kc="rgba32float",mm="float",za={width:1024,height:1024},Da={width:1024,height:256};class gm{constructor(o){qe(this,"data",{light:{color:wi.create(1,1,1),strength:100,forward:wi.create(0,1,0),angularRadius:16/60*(3.141592653589793/180)}});qe(this,"length",8);qe(this,"stagingBuffer");qe(this,"buffer");this.stagingBuffer=new Float32Array(this.length),this.buffer=o.createBuffer({size:this.stagingBuffer.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM})}writeToBuffer(o){this.stagingBuffer.set(this.data.light.color,0),this.stagingBuffer[3]=this.data.light.strength,this.stagingBuffer.set(this.data.light.forward,4),this.stagingBuffer[7]=this.data.light.angularRadius,o.queue.writeBuffer(this.buffer,0,this.stagingBuffer,0,this.stagingBuffer.length)}}function vm(s,o){const c="Transmittance LUT",y=s.createTexture({size:o,dimension:"2d",format:Qc,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:c}),w=y.createView({label:c}),x=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:Qc}}],label:c}),L=s.createBindGroup({layout:x,entries:[{binding:0,resource:w}],label:c}),O=s.createShaderModule({code:cm,label:c}),C=s.createComputePipeline({compute:{module:O,entryPoint:"computeTransmittance"},layout:s.createPipelineLayout({bindGroupLayouts:[x]}),label:c});return{group0:L,pipeline:C,texture:y,view:w}}function ym(s,o,c){const y="Multiscatter LUT",w=s.createTexture({size:o,dimension:"2d",format:Yc,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:y}),x=w.createView({label:y}),L=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:Yc}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:Qa}}],label:y}),O=s.createBindGroup({layout:L,entries:[{binding:0,resource:x},{binding:1,resource:s.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:c}],label:y}),C=s.createShaderModule({code:dm,label:y}),k=s.createComputePipeline({compute:{module:C,entryPoint:"computeMultiscattering"},layout:s.createPipelineLayout({bindGroupLayouts:[L]}),label:y});return{group0:O,pipeline:k,texture:w,view:x}}function wm(s,o,c,y,w){const x="Skyview LUT",L=s.createTexture({size:o,dimension:"2d",format:Kc,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:x}),O=L.createView({label:x}),C=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:Kc}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:Qa}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:gd}}],label:x}),k=s.createBindGroup({layout:C,entries:[{binding:0,resource:O},{binding:1,resource:s.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:c},{binding:3,resource:y}],label:x}),W=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}]}),Q=s.createBindGroup({layout:W,entries:[{binding:0,resource:{buffer:w.buffer}}]}),G=s.createShaderModule({code:fm,label:x}),ne=s.createComputePipeline({compute:{module:G,entryPoint:"computeSkyViewLuminance"},layout:s.createPipelineLayout({bindGroupLayouts:[C,W]}),label:x});return{group0:k,group1:Q,pipeline:ne,texture:L,view:O}}function _m(s,o,c){const y="Fullscreen Quad",w=s.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}}],label:y}),x=new Map;o.forEach((C,k)=>{x.set(k,s.createBindGroup({layout:w,entries:[{binding:0,resource:C},{binding:1,resource:s.createSampler({magFilter:"linear",minFilter:"linear"})}],label:y+k.toString()}))});const L=s.createShaderModule({code:pm,label:y});return{pipeline:s.createRenderPipeline({vertex:{module:L,entryPoint:"vertex_main"},fragment:{module:L,entryPoint:"fragment_main",targets:[{format:c}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:s.createPipelineLayout({bindGroupLayouts:[w]}),label:y}),group0ByOutputTexture:x,group0Layout:w}}class Sm{constructor(o,c,y){qe(this,"transmittanceLUTPassResources");qe(this,"multiscatterLUTPassResources");qe(this,"skyviewLUTPassResources");qe(this,"settings");qe(this,"fullscreenQuadPassResources");qe(this,"celestialLightUBO");qe(this,"atmosphereCameraLUTGroup");qe(this,"cameraUBO");qe(this,"atmosphereCameraGroup1");qe(this,"atmosphereCameraPipeline");qe(this,"fullscreenQuadIndexBuffer");qe(this,"device");qe(this,"presentFormat");qe(this,"startTime");this.device=o,this.presentFormat=c,this.startTime=y,this.settings={showSkyViewLUT:!1,timeHours:5.5,timeSpeedupFactor:1e3,paused:!1,outputTexture:3},this.celestialLightUBO=new gm(o),this.transmittanceLUTPassResources=vm(this.device,Ca),this.multiscatterLUTPassResources=ym(this.device,za,this.transmittanceLUTPassResources.view),this.skyviewLUTPassResources=wm(this.device,Da,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.celestialLightUBO),this.fullscreenQuadPassResources=_m(this.device,new Map([[1,this.transmittanceLUTPassResources.view],[2,this.multiscatterLUTPassResources.view],[0,this.skyviewLUTPassResources.view]]),this.presentFormat);const w=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,texture:{sampleType:Qa,viewDimension:"2d"}},{binding:2,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,texture:{sampleType:gd,viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,texture:{sampleType:mm,viewDimension:"2d"}}],label:"Atmosphere sampler/LUT/UBO Group"}),x=new Uint32Array([0,1,2,0,2,3]);this.fullscreenQuadIndexBuffer=o.createBuffer({size:x.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),o.queue.writeBuffer(this.fullscreenQuadIndexBuffer,0,x,0,x.length);const L=[w,o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{}}],label:"Atmosphere Camera Group 1"})];this.atmosphereCameraLUTGroup=o.createBindGroup({layout:w,entries:[{binding:0,resource:o.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:1,resource:this.transmittanceLUTPassResources.view},{binding:2,resource:this.multiscatterLUTPassResources.view},{binding:3,resource:this.skyviewLUTPassResources.view}],label:"Atmosphere Camera Group 0"}),this.cameraUBO=o.createBuffer({size:16*4+16*4+4*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM}),this.atmosphereCameraGroup1=o.createBindGroup({layout:L[1],entries:[{binding:0,resource:{buffer:this.cameraUBO}},{binding:1,resource:{buffer:this.celestialLightUBO.buffer}}],label:"Atmosphere Camera Group 1"});const O=o.createShaderModule({code:hm,label:"Atmosphere Camera"});this.atmosphereCameraPipeline=o.createRenderPipeline({vertex:{module:O,entryPoint:"vertex_main"},fragment:{module:O,entryPoint:"fragment_main",targets:[{format:this.presentFormat}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"ccw"},layout:o.createPipelineLayout({bindGroupLayouts:L}),label:"Atmosphere Camera"});const C=o.createCommandEncoder();let k=C.beginComputePass();k.setPipeline(this.transmittanceLUTPassResources.pipeline),k.setBindGroup(0,this.transmittanceLUTPassResources.group0),k.dispatchWorkgroups(Ca.width/16,Ca.height/16),k.end(),k=C.beginComputePass(),k.setPipeline(this.multiscatterLUTPassResources.pipeline),k.setBindGroup(0,this.multiscatterLUTPassResources.group0),k.dispatchWorkgroups(za.width/16,za.height/16),k.end(),o.queue.submit([C.finish()])}setupUI(o){o.add(this.settings,"outputTexture",{Scene:3,"Transmittance LUT":1,"Multiscatter LUT":2,"Skyview LUT":0}).name("Render Output"),o.add(this.settings,"timeHours").min(0).max(24).name("Time in Hours").listen(),o.add(this.settings,"timeSpeedupFactor").min(1).max(5e4).step(1).name("Time Multiplier"),o.add(this.settings,"paused").name("Pause Time"),o.add({fn:()=>{this.settings.timeHours=6-.5}},"fn").name("Skip to Sunrise"),o.add({fn:()=>{this.settings.timeHours=18-.5}},"fn").name("Skip to Sunset")}draw(o,c,y,w){const x=this.device.createCommandEncoder(),L=x.beginComputePass();L.setPipeline(this.skyviewLUTPassResources.pipeline),L.setBindGroup(0,this.skyviewLUTPassResources.group0),this.settings.paused||(this.settings.timeHours+=this.settings.timeSpeedupFactor*w/36e5,this.settings.timeHours=this.settings.timeHours-Math.floor(this.settings.timeHours/24)*24);const O=0,C=2*Math.PI/24;wi.rotateX(wi.create(0,1,0),wi.create(0,0,0),this.settings.timeHours*C+O,this.celestialLightUBO.data.light.forward),this.celestialLightUBO.writeToBuffer(this.device),L.setBindGroup(1,this.skyviewLUTPassResources.group1),L.dispatchWorkgroups(Da.width/16,Da.height/16,1),L.end();const k=60*Math.PI/180,G=Pn.perspective(k,c,.1,1e3),ne=[0,10,0],K=Pn.translation(ne),ee={inv_proj:Pn.inverse(G),inv_view:Pn.inverse(K),position:om.create(...ne)},J=new Float32Array(36);J.set(ee.inv_proj,0),J.set(ee.inv_view,16),J.set(ee.position,32),this.device.queue.writeBuffer(this.cameraUBO,0,J,0,J.length);const Y={r:1,g:0,b:0,a:0},q=x.beginRenderPass({colorAttachments:[{clearValue:Y,loadOp:"clear",storeOp:"store",view:o}],label:"Fullscreen Pass"});this.settings.outputTexture===3?(q.setPipeline(this.atmosphereCameraPipeline),q.setIndexBuffer(this.fullscreenQuadIndexBuffer,"uint32",0,this.fullscreenQuadIndexBuffer.size),q.setBindGroup(0,this.atmosphereCameraLUTGroup),q.setBindGroup(1,this.atmosphereCameraGroup1),q.drawIndexed(6,1,0,0,0)):(q.setPipeline(this.fullscreenQuadPassResources.pipeline),q.setIndexBuffer(this.fullscreenQuadIndexBuffer,"uint32",0,this.fullscreenQuadIndexBuffer.size),q.setBindGroup(0,this.fullscreenQuadPassResources.group0ByOutputTexture.get(this.settings.outputTexture)),q.drawIndexed(6,1,0,0,0)),q.end(),this.device.queue.submit([x.finish()])}}const xm=(s,o,c,y)=>new Sm(s,c,y),ba={name:"Hello Cube",requiredFeatures:new Set,create:um},Tm=new Map([["hello-cube",ba],["sky-sea",{name:"Sky and Sea",requiredFeatures:new Set(["float32-filterable"]),create:xm}]]);async function Rm(s){if(console.log("Starting WebGPU"),!("gpu"in navigator))return Promise.reject(new Error("WebGPU is not available in this browser.",{cause:new Error("navigator.gpu is null")}));const o=navigator.gpu.requestAdapter().then(y=>y?Promise.resolve(y):Promise.reject(new Error("Requested WebGPU Adapter is not available."))).catch(y=>Promise.reject(new Error("Unable to get WebGPU Adapter",{cause:y}))),c=o.then(y=>{const w=Array.from(s.values()).filter(x=>y.features.has(x));if(w.length!=s.size){const x=`Required features unavailable: ${Array.from(s.values()).filter(L=>!y.features.has(L)).map(L=>`'${L}'`).join(",")}`;return Promise.reject(new Error("Unable to get WebGPU Device",{cause:x}))}return y.requestDevice({requiredFeatures:w}).catch(x=>Promise.reject(new Error("Unable to get WebGPU Device",{cause:x})))});return Promise.all([o,c]).then(y=>{const[w,x]=y;return{adapter:w,device:x}})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class gn{constructor(o,c,y,w,x="div"){this.parent=o,this.object=c,this.property=y,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(x),this.domElement.classList.add("controller"),this.domElement.classList.add(w),this.$name=document.createElement("div"),this.$name.classList.add("name"),gn.nextNameID=gn.nextNameID||0,this.$name.id=`lil-gui-name-${++gn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",L=>L.stopPropagation()),this.domElement.addEventListener("keyup",L=>L.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(y)}name(o){return this._name=o,this.$name.textContent=o,this}onChange(o){return this._onChange=o,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(o){return this._onFinishChange=o,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(o=!0){return this.disable(!o)}disable(o=!0){return o===this._disabled?this:(this._disabled=o,this.domElement.classList.toggle("disabled",o),this.$disable.toggleAttribute("disabled",o),this)}show(o=!0){return this._hidden=!o,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(o){const c=this.parent.add(this.object,this.property,o);return c.name(this._name),this.destroy(),c}min(o){return this}max(o){return this}step(o){return this}decimals(o){return this}listen(o=!0){return this._listening=o,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const o=this.save();o!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=o}getValue(){return this.object[this.property]}setValue(o){return this.getValue()!==o&&(this.object[this.property]=o,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(o){return this.setValue(o),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Mm extends gn{constructor(o,c,y){super(o,c,y,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Fa(s){let o,c;return(o=s.match(/(#|0x)?([a-f0-9]{6})/i))?c=o[2]:(o=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?c=parseInt(o[1]).toString(16).padStart(2,0)+parseInt(o[2]).toString(16).padStart(2,0)+parseInt(o[3]).toString(16).padStart(2,0):(o=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(c=o[1]+o[1]+o[2]+o[2]+o[3]+o[3]),c?"#"+c:!1}const Em={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Fa,toHexString:Fa},Si={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},Lm={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,o,c=1){const y=Si.fromHexString(s);o[0]=(y>>16&255)/255*c,o[1]=(y>>8&255)/255*c,o[2]=(y&255)/255*c},toHexString([s,o,c],y=1){y=255/y;const w=s*y<<16^o*y<<8^c*y<<0;return Si.toHexString(w)}},Am={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,o,c=1){const y=Si.fromHexString(s);o.r=(y>>16&255)/255*c,o.g=(y>>8&255)/255*c,o.b=(y&255)/255*c},toHexString({r:s,g:o,b:c},y=1){y=255/y;const w=s*y<<16^o*y<<8^c*y<<0;return Si.toHexString(w)}},Pm=[Em,Si,Lm,Am];function km(s){return Pm.find(o=>o.match(s))}class Cm extends gn{constructor(o,c,y,w){super(o,c,y,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=km(this.initialValue),this._rgbScale=w,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const x=Fa(this.$text.value);x&&this._setValueFromHexString(x)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(o){if(this._format.isPrimitive){const c=this._format.fromHexString(o);this.setValue(c)}else this._format.fromHexString(o,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(o){return this._setValueFromHexString(o),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ua extends gn{constructor(o,c,y){super(o,c,y,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",w=>{w.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class zm extends gn{constructor(o,c,y,w,x,L){super(o,c,y,"number"),this._initInput(),this.min(w),this.max(x);const O=L!==void 0;this.step(O?L:this._getImplicitStep(),O),this.updateDisplay()}decimals(o){return this._decimals=o,this.updateDisplay(),this}min(o){return this._min=o,this._onUpdateMinMax(),this}max(o){return this._max=o,this._onUpdateMinMax(),this}step(o,c=!0){return this._step=o,this._stepExplicit=c,this}updateDisplay(){const o=this.getValue();if(this._hasSlider){let c=(o-this._min)/(this._max-this._min);c=Math.max(0,Math.min(c,1)),this.$fill.style.width=c*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?o:o.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const c=()=>{let q=parseFloat(this.$input.value);isNaN(q)||(this._stepExplicit&&(q=this._snap(q)),this.setValue(this._clamp(q)))},y=q=>{const le=parseFloat(this.$input.value);isNaN(le)||(this._snapClampSetValue(le+q),this.$input.value=this.getValue())},w=q=>{q.key==="Enter"&&this.$input.blur(),q.code==="ArrowUp"&&(q.preventDefault(),y(this._step*this._arrowKeyMultiplier(q))),q.code==="ArrowDown"&&(q.preventDefault(),y(this._step*this._arrowKeyMultiplier(q)*-1))},x=q=>{this._inputFocused&&(q.preventDefault(),y(this._step*this._normalizeMouseWheel(q)))};let L=!1,O,C,k,W,Q;const G=5,ne=q=>{O=q.clientX,C=k=q.clientY,L=!0,W=this.getValue(),Q=0,window.addEventListener("mousemove",K),window.addEventListener("mouseup",ee)},K=q=>{if(L){const le=q.clientX-O,we=q.clientY-C;Math.abs(we)>G?(q.preventDefault(),this.$input.blur(),L=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(le)>G&&ee()}if(!L){const le=q.clientY-k;Q-=le*this._step*this._arrowKeyMultiplier(q),W+Q>this._max?Q=this._max-W:W+Q<this._min&&(Q=this._min-W),this._snapClampSetValue(W+Q)}k=q.clientY},ee=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",ee)},J=()=>{this._inputFocused=!0},Y=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",c),this.$input.addEventListener("keydown",w),this.$input.addEventListener("wheel",x,{passive:!1}),this.$input.addEventListener("mousedown",ne),this.$input.addEventListener("focus",J),this.$input.addEventListener("blur",Y)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const o=(Y,q,le,we,ke)=>(Y-q)/(le-q)*(ke-we)+we,c=Y=>{const q=this.$slider.getBoundingClientRect();let le=o(Y,q.left,q.right,this._min,this._max);this._snapClampSetValue(le)},y=Y=>{this._setDraggingStyle(!0),c(Y.clientX),window.addEventListener("mousemove",w),window.addEventListener("mouseup",x)},w=Y=>{c(Y.clientX)},x=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",x)};let L=!1,O,C;const k=Y=>{Y.preventDefault(),this._setDraggingStyle(!0),c(Y.touches[0].clientX),L=!1},W=Y=>{Y.touches.length>1||(this._hasScrollBar?(O=Y.touches[0].clientX,C=Y.touches[0].clientY,L=!0):k(Y),window.addEventListener("touchmove",Q,{passive:!1}),window.addEventListener("touchend",G))},Q=Y=>{if(L){const q=Y.touches[0].clientX-O,le=Y.touches[0].clientY-C;Math.abs(q)>Math.abs(le)?k(Y):(window.removeEventListener("touchmove",Q),window.removeEventListener("touchend",G))}else Y.preventDefault(),c(Y.touches[0].clientX)},G=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",Q),window.removeEventListener("touchend",G)},ne=this._callOnFinishChange.bind(this),K=400;let ee;const J=Y=>{if(Math.abs(Y.deltaX)<Math.abs(Y.deltaY)&&this._hasScrollBar)return;Y.preventDefault();const le=this._normalizeMouseWheel(Y)*this._step;this._snapClampSetValue(this.getValue()+le),this.$input.value=this.getValue(),clearTimeout(ee),ee=setTimeout(ne,K)};this.$slider.addEventListener("mousedown",y),this.$slider.addEventListener("touchstart",W,{passive:!1}),this.$slider.addEventListener("wheel",J,{passive:!1})}_setDraggingStyle(o,c="horizontal"){this.$slider&&this.$slider.classList.toggle("active",o),document.body.classList.toggle("lil-gui-dragging",o),document.body.classList.toggle(`lil-gui-${c}`,o)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(o){let{deltaX:c,deltaY:y}=o;return Math.floor(o.deltaY)!==o.deltaY&&o.wheelDelta&&(c=0,y=-o.wheelDelta/120,y*=this._stepExplicit?1:10),c+-y}_arrowKeyMultiplier(o){let c=this._stepExplicit?1:10;return o.shiftKey?c*=10:o.altKey&&(c/=10),c}_snap(o){let c=0;return this._hasMin?c=this._min:this._hasMax&&(c=this._max),o-=c,o=Math.round(o/this._step)*this._step,o+=c,o=parseFloat(o.toPrecision(15)),o}_clamp(o){return o<this._min&&(o=this._min),o>this._max&&(o=this._max),o}_snapClampSetValue(o){this.setValue(this._clamp(this._snap(o)))}get _hasScrollBar(){const o=this.parent.root.$children;return o.scrollHeight>o.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Dm extends gn{constructor(o,c,y,w){super(o,c,y,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(w)}options(o){return this._values=Array.isArray(o)?o:Object.values(o),this._names=Array.isArray(o)?o:Object.keys(o),this.$select.replaceChildren(),this._names.forEach(c=>{const y=document.createElement("option");y.textContent=c,this.$select.appendChild(y)}),this.updateDisplay(),this}updateDisplay(){const o=this.getValue(),c=this._values.indexOf(o);return this.$select.selectedIndex=c,this.$display.textContent=c===-1?o:this._names[c],this}}class Um extends gn{constructor(o,c,y){super(o,c,y,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",w=>{w.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Im=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Om(s){const o=document.createElement("style");o.innerHTML=s;const c=document.querySelector("head link[rel=stylesheet], head style");c?document.head.insertBefore(o,c):document.head.appendChild(o)}let Xc=!1;class Ya{constructor({parent:o,autoPlace:c=o===void 0,container:y,width:w,title:x="Controls",closeFolders:L=!1,injectStyles:O=!0,touchStyles:C=!0}={}){if(this.parent=o,this.root=o?o.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(x),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),C&&this.domElement.classList.add("allow-touch-styles"),!Xc&&O&&(Om(Im),Xc=!0),y?y.appendChild(this.domElement):c&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),w&&this.domElement.style.setProperty("--width",w+"px"),this._closeFolders=L}add(o,c,y,w,x){if(Object(y)===y)return new Dm(this,o,c,y);const L=o[c];switch(typeof L){case"number":return new zm(this,o,c,y,w,x);case"boolean":return new Mm(this,o,c);case"string":return new Um(this,o,c);case"function":return new Ua(this,o,c)}console.error(`gui.add failed
	property:`,c,`
	object:`,o,`
	value:`,L)}addColor(o,c,y=1){return new Cm(this,o,c,y)}addFolder(o){const c=new Ya({parent:this,title:o});return this.root._closeFolders&&c.close(),c}load(o,c=!0){return o.controllers&&this.controllers.forEach(y=>{y instanceof Ua||y._name in o.controllers&&y.load(o.controllers[y._name])}),c&&o.folders&&this.folders.forEach(y=>{y._title in o.folders&&y.load(o.folders[y._title])}),this}save(o=!0){const c={controllers:{},folders:{}};return this.controllers.forEach(y=>{if(!(y instanceof Ua)){if(y._name in c.controllers)throw new Error(`Cannot save GUI with duplicate property "${y._name}"`);c.controllers[y._name]=y.save()}}),o&&this.folders.forEach(y=>{if(y._title in c.folders)throw new Error(`Cannot save GUI with duplicate folder "${y._title}"`);c.folders[y._title]=y.save()}),c}open(o=!0){return this._setClosed(!o),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(o){this._closed!==o&&(this._closed=o,this._callOnOpenClose(this))}show(o=!0){return this._hidden=!o,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(o=!0){return this._setClosed(!o),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const c=this.$children.clientHeight;this.$children.style.height=c+"px",this.domElement.classList.add("transition");const y=x=>{x.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",y))};this.$children.addEventListener("transitionend",y);const w=o?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!o),requestAnimationFrame(()=>{this.$children.style.height=w+"px"})}),this}title(o){return this._title=o,this.$title.textContent=o,this}reset(o=!0){return(o?this.controllersRecursive():this.controllers).forEach(y=>y.reset()),this}onChange(o){return this._onChange=o,this}_callOnChange(o){this.parent&&this.parent._callOnChange(o),this._onChange!==void 0&&this._onChange.call(this,{object:o.object,property:o.property,value:o.getValue(),controller:o})}onFinishChange(o){return this._onFinishChange=o,this}_callOnFinishChange(o){this.parent&&this.parent._callOnFinishChange(o),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:o.object,property:o.property,value:o.getValue(),controller:o})}onOpenClose(o){return this._onOpenClose=o,this}_callOnOpenClose(o){this.parent&&this.parent._callOnOpenClose(o),this._onOpenClose!==void 0&&this._onOpenClose.call(this,o)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(o=>o.destroy())}controllersRecursive(){let o=Array.from(this.controllers);return this.folders.forEach(c=>{o=o.concat(c.controllersRecursive())}),o}foldersRecursive(){let o=Array.from(this.folders);return this.folders.forEach(c=>{o=o.concat(c.foldersRecursive())}),o}}const Nm=function({app:o}){const c=j.useRef(),y=j.useRef(null),w=j.useRef(null),x=j.useRef(),L=j.useRef(),O=j.useCallback(()=>{const k=y.current;if(k){const W=window.devicePixelRatio;k.width=k.offsetWidth*W,k.height=k.offsetHeight*W}},[]);j.useEffect(()=>(O(),window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O)}),[O]);const C=j.useCallback(k=>{var Q;const W=(Q=y.current)==null?void 0:Q.getContext("webgpu");if(W){const G=k-(L.current?L.current:0);L.current=k,o.draw(W.getCurrentTexture().createView(),y.current.width/y.current.height,k,G),c.current=requestAnimationFrame(C)}},[o]);return j.useEffect(()=>{var W,Q;const k=(W=y.current)==null?void 0:W.getContext("webgpu");if(x.current&&((Q=x.current)==null||Q.destroy()),o.setupUI&&(x.current=new Ya({container:w.current}),o.setupUI(x.current)),!k){console.error("'webgpu' canvas context not found, cannot animate.");return}return k.configure({device:o.device,format:o.presentFormat}),c.current=requestAnimationFrame(C),()=>{c.current&&cancelAnimationFrame(c.current)}},[C,o]),ye.jsxs("div",{style:{display:"flex",color:"hsl(204, 50%, 95%)",position:"relative",width:"100%",height:"100%"},children:[ye.jsx("div",{style:{flex:1},children:ye.jsx("canvas",{ref:y,style:{width:"100%",height:"100%"}})}),ye.jsx("div",{style:{flex:0,position:"absolute",right:0},ref:w})]})},bm=j.memo(function(){const o=j.useRef(),[c,y]=j.useState(!1),[w,x]=bp(),L=j.useCallback(()=>{const W=w.get("sample");if(!W)return ba;const Q=Tm.get(W);return Q||ba},[w]);j.useEffect(()=>{y(!1);const W=L();Rm(W.requiredFeatures).then(({adapter:Q,device:G})=>{o.current?console.warn("Device found, but app was already created. This is due to either a duplicate component rerender, or the sample changing without a full page refresh. Overriding the original."):console.log("Got WebGPU device, initializing sample app."),G.lost.then(K=>{console.log(`WebGPU device lost - ("${K.reason}"):
 ${K.message}`)},K=>{throw new Error("WebGPU device lost rejected",{cause:K})}),G.onuncapturederror=K=>{console.error(`WebGPU device uncaptured error: ${K.error.message}`)};const ne=navigator.gpu.getPreferredCanvasFormat();o.current=W.create(G,Q.features,ne,performance.now()),console.log("Finished initializing app.")},Q=>{console.error(Q)}).finally(()=>{y(!0)})},[w,L]);const O={backgroundColor:"rgb(50, 99, 121)",margin:0,padding:"2em",flexGrow:"1",color:"hsl(204, 50%, 95%)",whiteSpace:"pre-line",fontSize:"1.5em"},C=ye.jsx("p",{style:O,children:`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.
        `}),k=ye.jsx("p",{style:O,children:"Loading..."});return ye.jsx(ye.Fragment,{children:c?ye.jsx(ye.Fragment,{children:o.current?ye.jsx(Nm,{app:o.current}):C}):ye.jsx(ye.Fragment,{children:k})})}),Jc=new Map([["","Estelle Booher"],["webgpu-samples","WebGPU Samples"]]),ed=j.memo(function({link:o,label:c}){const y=Ti(),w=()=>{var x;(x=y(o))==null||x.catch(L=>{throw new Error("Unable to navigate",{cause:L})})};return ye.jsx("button",{className:"nav-button",onClick:w,type:"button",children:c})}),Fm=j.memo(function(){const o=yn(),c=[ye.jsx(j.Fragment,{children:ye.jsx(ed,{link:"/",label:Jc.get("")})},"root")];if(o.pathname!="/"){const y=o.pathname.substring(1).split("/");let w="/";c.push(...y.map((x,L)=>{const O=Jc.get(x),C=L>0?"/":"";return w=w.concat(`${C}${x}`),ye.jsxs(j.Fragment,{children:[" > ",ye.jsx(ed,{link:w,label:O||x})]},w)}))}return ye.jsx("header",{className:"website-header",children:c})}),Bm=document.getElementById("root");vh.createRoot(Bm).render(ye.jsx(j.StrictMode,{children:ye.jsx(Dp,{children:ye.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[ye.jsx("div",{style:{flex:"0 1 auto"},children:ye.jsx(Fm,{})}),ye.jsxs(lp,{children:[ye.jsx(Os,{index:!0,element:ye.jsx(qp,{})}),ye.jsx(Os,{path:"webgpu-samples",element:ye.jsx("div",{style:{flex:1,overflow:"hidden"},children:ye.jsx(bm,{})})}),ye.jsx(Os,{path:"*",element:ye.jsx(op,{to:"/",replace:!0})})]})]})})}));
