var qd=Object.defineProperty;var $d=(o,p,m)=>p in o?qd(o,p,{enumerable:!0,configurable:!0,writable:!0,value:m}):o[p]=m;var $e=(o,p,m)=>$d(o,typeof p!="symbol"?p+"":p,m);(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))R(T);new MutationObserver(T=>{for(const E of T)if(E.type==="childList")for(const U of E.addedNodes)U.tagName==="LINK"&&U.rel==="modulepreload"&&R(U)}).observe(document,{childList:!0,subtree:!0});function m(T){const E={};return T.integrity&&(E.integrity=T.integrity),T.referrerPolicy&&(E.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?E.credentials="include":T.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function R(T){if(T.ep)return;T.ep=!0;const E=m(T);fetch(T.href,E)}})();var Ta={exports:{}},hi={},_a={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc;function Qd(){if(yc)return Ce;yc=1;var o=Symbol.for("react.element"),p=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),U=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),X=Symbol.iterator;function $(A){return A===null||typeof A!="object"?null:(A=X&&A[X]||A["@@iterator"],typeof A=="function"?A:null)}var ne={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,Y={};function J(A,Q,_e){this.props=A,this.context=Q,this.refs=Y,this.updater=_e||ne}J.prototype.isReactComponent={},J.prototype.setState=function(A,Q){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,Q,"setState")},J.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function re(){}re.prototype=J.prototype;function ae(A,Q,_e){this.props=A,this.context=Q,this.refs=Y,this.updater=_e||ne}var ye=ae.prototype=new re;ye.constructor=ae,Z(ye,J.prototype),ye.isPureReactComponent=!0;var Me=Array.isArray,Ie=Object.prototype.hasOwnProperty,Ne={current:null},Oe={key:!0,ref:!0,__self:!0,__source:!0};function Be(A,Q,_e){var we,Pe={},ke=null,c=null;if(Q!=null)for(we in Q.ref!==void 0&&(c=Q.ref),Q.key!==void 0&&(ke=""+Q.key),Q)Ie.call(Q,we)&&!Oe.hasOwnProperty(we)&&(Pe[we]=Q[we]);var _=arguments.length-2;if(_===1)Pe.children=_e;else if(1<_){for(var u=Array(_),d=0;d<_;d++)u[d]=arguments[d+2];Pe.children=u}if(A&&A.defaultProps)for(we in _=A.defaultProps,_)Pe[we]===void 0&&(Pe[we]=_[we]);return{$$typeof:o,type:A,key:ke,ref:c,props:Pe,_owner:Ne.current}}function Fe(A,Q){return{$$typeof:o,type:A.type,key:Q,ref:A.ref,props:A.props,_owner:A._owner}}function He(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function et(A){var Q={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(_e){return Q[_e]})}var Ee=/\/+/g;function De(A,Q){return typeof A=="object"&&A!==null&&A.key!=null?et(""+A.key):Q.toString(36)}function xe(A,Q,_e,we,Pe){var ke=typeof A;(ke==="undefined"||ke==="boolean")&&(A=null);var c=!1;if(A===null)c=!0;else switch(ke){case"string":case"number":c=!0;break;case"object":switch(A.$$typeof){case o:case p:c=!0}}if(c)return c=A,Pe=Pe(c),A=we===""?"."+De(c,0):we,Me(Pe)?(_e="",A!=null&&(_e=A.replace(Ee,"$&/")+"/"),xe(Pe,Q,_e,"",function(d){return d})):Pe!=null&&(He(Pe)&&(Pe=Fe(Pe,_e+(!Pe.key||c&&c.key===Pe.key?"":(""+Pe.key).replace(Ee,"$&/")+"/")+A)),Q.push(Pe)),1;if(c=0,we=we===""?".":we+":",Me(A))for(var _=0;_<A.length;_++){ke=A[_];var u=we+De(ke,_);c+=xe(ke,Q,_e,u,Pe)}else if(u=$(A),typeof u=="function")for(A=u.call(A),_=0;!(ke=A.next()).done;)ke=ke.value,u=we+De(ke,_++),c+=xe(ke,Q,_e,u,Pe);else if(ke==="object")throw Q=String(A),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return c}function st(A,Q,_e){if(A==null)return A;var we=[],Pe=0;return xe(A,we,"","",function(ke){return Q.call(_e,ke,Pe++)}),we}function We(A){if(A._status===-1){var Q=A._result;Q=Q(),Q.then(function(_e){(A._status===0||A._status===-1)&&(A._status=1,A._result=_e)},function(_e){(A._status===0||A._status===-1)&&(A._status=2,A._result=_e)}),A._status===-1&&(A._status=0,A._result=Q)}if(A._status===1)return A._result.default;throw A._result}var je={current:null},se={transition:null},me={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:se,ReactCurrentOwner:Ne};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:st,forEach:function(A,Q,_e){st(A,function(){Q.apply(this,arguments)},_e)},count:function(A){var Q=0;return st(A,function(){Q++}),Q},toArray:function(A){return st(A,function(Q){return Q})||[]},only:function(A){if(!He(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Ce.Component=J,Ce.Fragment=m,Ce.Profiler=T,Ce.PureComponent=ae,Ce.StrictMode=R,Ce.Suspense=I,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=ie,Ce.cloneElement=function(A,Q,_e){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var we=Z({},A.props),Pe=A.key,ke=A.ref,c=A._owner;if(Q!=null){if(Q.ref!==void 0&&(ke=Q.ref,c=Ne.current),Q.key!==void 0&&(Pe=""+Q.key),A.type&&A.type.defaultProps)var _=A.type.defaultProps;for(u in Q)Ie.call(Q,u)&&!Oe.hasOwnProperty(u)&&(we[u]=Q[u]===void 0&&_!==void 0?_[u]:Q[u])}var u=arguments.length-2;if(u===1)we.children=_e;else if(1<u){_=Array(u);for(var d=0;d<u;d++)_[d]=arguments[d+2];we.children=_}return{$$typeof:o,type:A.type,key:Pe,ref:ke,props:we,_owner:c}},Ce.createContext=function(A){return A={$$typeof:U,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:E,_context:A},A.Consumer=A},Ce.createElement=Be,Ce.createFactory=function(A){var Q=Be.bind(null,A);return Q.type=A,Q},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(A){return{$$typeof:O,render:A}},Ce.isValidElement=He,Ce.lazy=function(A){return{$$typeof:K,_payload:{_status:-1,_result:A},_init:We}},Ce.memo=function(A,Q){return{$$typeof:C,type:A,compare:Q===void 0?null:Q}},Ce.startTransition=function(A){var Q=se.transition;se.transition={};try{A()}finally{se.transition=Q}},Ce.unstable_act=ie,Ce.useCallback=function(A,Q){return je.current.useCallback(A,Q)},Ce.useContext=function(A){return je.current.useContext(A)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(A){return je.current.useDeferredValue(A)},Ce.useEffect=function(A,Q){return je.current.useEffect(A,Q)},Ce.useId=function(){return je.current.useId()},Ce.useImperativeHandle=function(A,Q,_e){return je.current.useImperativeHandle(A,Q,_e)},Ce.useInsertionEffect=function(A,Q){return je.current.useInsertionEffect(A,Q)},Ce.useLayoutEffect=function(A,Q){return je.current.useLayoutEffect(A,Q)},Ce.useMemo=function(A,Q){return je.current.useMemo(A,Q)},Ce.useReducer=function(A,Q,_e){return je.current.useReducer(A,Q,_e)},Ce.useRef=function(A){return je.current.useRef(A)},Ce.useState=function(A){return je.current.useState(A)},Ce.useSyncExternalStore=function(A,Q,_e){return je.current.useSyncExternalStore(A,Q,_e)},Ce.useTransition=function(){return je.current.useTransition()},Ce.version="18.3.1",Ce}var vc;function za(){return vc||(vc=1,_a.exports=Qd()),_a.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wc;function Zd(){if(wc)return hi;wc=1;var o=za(),p=Symbol.for("react.element"),m=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,T=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function U(O,I,C){var K,X={},$=null,ne=null;C!==void 0&&($=""+C),I.key!==void 0&&($=""+I.key),I.ref!==void 0&&(ne=I.ref);for(K in I)R.call(I,K)&&!E.hasOwnProperty(K)&&(X[K]=I[K]);if(O&&O.defaultProps)for(K in I=O.defaultProps,I)X[K]===void 0&&(X[K]=I[K]);return{$$typeof:p,type:O,key:$,ref:ne,props:X,_owner:T.current}}return hi.Fragment=m,hi.jsx=U,hi.jsxs=U,hi}var Sc;function Yd(){return Sc||(Sc=1,Ta.exports=Zd()),Ta.exports}var ve=Yd(),W=za(),zo={},xa={exports:{}},jt={},Ra={exports:{}},Ma={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc;function Kd(){return Tc||(Tc=1,function(o){function p(se,me){var ie=se.length;se.push(me);e:for(;0<ie;){var A=ie-1>>>1,Q=se[A];if(0<T(Q,me))se[A]=me,se[ie]=Q,ie=A;else break e}}function m(se){return se.length===0?null:se[0]}function R(se){if(se.length===0)return null;var me=se[0],ie=se.pop();if(ie!==me){se[0]=ie;e:for(var A=0,Q=se.length,_e=Q>>>1;A<_e;){var we=2*(A+1)-1,Pe=se[we],ke=we+1,c=se[ke];if(0>T(Pe,ie))ke<Q&&0>T(c,Pe)?(se[A]=c,se[ke]=ie,A=ke):(se[A]=Pe,se[we]=ie,A=we);else if(ke<Q&&0>T(c,ie))se[A]=c,se[ke]=ie,A=ke;else break e}}return me}function T(se,me){var ie=se.sortIndex-me.sortIndex;return ie!==0?ie:se.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var E=performance;o.unstable_now=function(){return E.now()}}else{var U=Date,O=U.now();o.unstable_now=function(){return U.now()-O}}var I=[],C=[],K=1,X=null,$=3,ne=!1,Z=!1,Y=!1,J=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(se){for(var me=m(C);me!==null;){if(me.callback===null)R(C);else if(me.startTime<=se)R(C),me.sortIndex=me.expirationTime,p(I,me);else break;me=m(C)}}function Me(se){if(Y=!1,ye(se),!Z)if(m(I)!==null)Z=!0,We(Ie);else{var me=m(C);me!==null&&je(Me,me.startTime-se)}}function Ie(se,me){Z=!1,Y&&(Y=!1,re(Be),Be=-1),ne=!0;var ie=$;try{for(ye(me),X=m(I);X!==null&&(!(X.expirationTime>me)||se&&!et());){var A=X.callback;if(typeof A=="function"){X.callback=null,$=X.priorityLevel;var Q=A(X.expirationTime<=me);me=o.unstable_now(),typeof Q=="function"?X.callback=Q:X===m(I)&&R(I),ye(me)}else R(I);X=m(I)}if(X!==null)var _e=!0;else{var we=m(C);we!==null&&je(Me,we.startTime-me),_e=!1}return _e}finally{X=null,$=ie,ne=!1}}var Ne=!1,Oe=null,Be=-1,Fe=5,He=-1;function et(){return!(o.unstable_now()-He<Fe)}function Ee(){if(Oe!==null){var se=o.unstable_now();He=se;var me=!0;try{me=Oe(!0,se)}finally{me?De():(Ne=!1,Oe=null)}}else Ne=!1}var De;if(typeof ae=="function")De=function(){ae(Ee)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,st=xe.port2;xe.port1.onmessage=Ee,De=function(){st.postMessage(null)}}else De=function(){J(Ee,0)};function We(se){Oe=se,Ne||(Ne=!0,De())}function je(se,me){Be=J(function(){se(o.unstable_now())},me)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(se){se.callback=null},o.unstable_continueExecution=function(){Z||ne||(Z=!0,We(Ie))},o.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fe=0<se?Math.floor(1e3/se):5},o.unstable_getCurrentPriorityLevel=function(){return $},o.unstable_getFirstCallbackNode=function(){return m(I)},o.unstable_next=function(se){switch($){case 1:case 2:case 3:var me=3;break;default:me=$}var ie=$;$=me;try{return se()}finally{$=ie}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(se,me){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ie=$;$=se;try{return me()}finally{$=ie}},o.unstable_scheduleCallback=function(se,me,ie){var A=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?A+ie:A):ie=A,se){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ie+Q,se={id:K++,callback:me,priorityLevel:se,startTime:ie,expirationTime:Q,sortIndex:-1},ie>A?(se.sortIndex=ie,p(C,se),m(I)===null&&se===m(C)&&(Y?(re(Be),Be=-1):Y=!0,je(Me,ie-A))):(se.sortIndex=Q,p(I,se),Z||ne||(Z=!0,We(Ie))),se},o.unstable_shouldYield=et,o.unstable_wrapCallback=function(se){var me=$;return function(){var ie=$;$=me;try{return se.apply(this,arguments)}finally{$=ie}}}}(Ma)),Ma}var _c;function Xd(){return _c||(_c=1,Ra.exports=Kd()),Ra.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc;function Jd(){if(xc)return jt;xc=1;var o=za(),p=Xd();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R=new Set,T={};function E(e,t){U(e,t),U(e+"Capture",t)}function U(e,t){for(T[e]=t,e=0;e<t.length;e++)R.add(t[e])}var O=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),I=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,K={},X={};function $(e){return I.call(X,e)?!0:I.call(K,e)?!1:C.test(e)?X[e]=!0:(K[e]=!0,!1)}function ne(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Z(e,t,n,r){if(t===null||typeof t>"u"||ne(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Y(e,t,n,r,i,a,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=h}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new Y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new Y(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new Y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new Y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new Y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new Y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new Y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new Y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new Y(e,5,!1,e.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function ae(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(re,ae);J[t]=new Y(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(re,ae);J[t]=new Y(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(re,ae);J[t]=new Y(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new Y(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new Y(e,1,!1,e.toLowerCase(),null,!0,!0)});function ye(e,t,n,r){var i=J.hasOwnProperty(t)?J[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Z(t,n,i,r)&&(n=null),r||i===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Me=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),Oe=Symbol.for("react.fragment"),Be=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),He=Symbol.for("react.provider"),et=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),De=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),st=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),se=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,A;function Q(e){if(A===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return`
`+A+e}var _e=!1;function we(e,t){if(!e||_e)return"";_e=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(V){var r=V}Reflect.construct(e,[],t)}else{try{t.call()}catch(V){r=V}e.call(t.prototype)}else{try{throw Error()}catch(V){r=V}e()}}catch(V){if(V&&r&&typeof V.stack=="string"){for(var i=V.stack.split(`
`),a=r.stack.split(`
`),h=i.length-1,x=a.length-1;1<=h&&0<=x&&i[h]!==a[x];)x--;for(;1<=h&&0<=x;h--,x--)if(i[h]!==a[x]){if(h!==1||x!==1)do if(h--,x--,0>x||i[h]!==a[x]){var L=`
`+i[h].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=h&&0<=x);break}}}finally{_e=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Q(e):""}function Pe(e){switch(e.tag){case 5:return Q(e.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return e=we(e.type,!1),e;case 11:return e=we(e.type.render,!1),e;case 1:return e=we(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Oe:return"Fragment";case Ne:return"Portal";case Fe:return"Profiler";case Be:return"StrictMode";case De:return"Suspense";case xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case et:return(e.displayName||"Context")+".Consumer";case He:return(e._context.displayName||"Context")+".Provider";case Ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case st:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case We:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}function c(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(t);case 8:return t===Be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function d(e){var t=u(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(h){r=""+h,a.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(h){r=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function S(e){e._valueTracker||(e._valueTracker=d(e))}function M(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=u(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function H(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function s(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function g(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function l(e,t){t=t.checked,t!=null&&ye(e,"checked",t,!1)}function f(e,t){l(e,t);var n=_(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?P(e,t.type,n):t.hasOwnProperty("defaultValue")&&P(e,t.type,_(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function v(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function P(e,t,n){(t!=="number"||H(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var B=Array.isArray;function y(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function w(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function k(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(B(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_(n)}}function D(e,t){var n=_(t.value),r=_(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function j(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function G(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function q(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?G(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fe,Re=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ue(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var de={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(de).forEach(function(e){ze.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),de[t]=de[e]})});function Ae(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||de.hasOwnProperty(e)&&de[e]?(""+t).trim():t+"px"}function Qe(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ae(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var lt=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(e,t){if(t){if(lt[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function ut(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dt=null;function pt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ht=null,nt=null,rt=null;function vt(e){if(e=br(e)){if(typeof ht!="function")throw Error(m(280));var t=e.stateNode;t&&(t=qi(t),ht(e.stateNode,e.type,t))}}function wt(e){nt?rt?rt.push(e):rt=[e]:nt=e}function St(){if(nt){var e=nt,t=rt;if(rt=nt=null,vt(e),t)for(e=0;e<t.length;e++)vt(t[e])}}function Tt(e,t){return e(t)}function kt(){}var Mt=!1;function Pt(e,t,n){if(Mt)return e(t,n);Mt=!0;try{return Tt(e,t,n)}finally{Mt=!1,(nt!==null||rt!==null)&&(kt(),St())}}function ln(e,t){var n=e.stateNode;if(n===null)return null;var r=qi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Pn=!1;if(O)try{var un={};Object.defineProperty(un,"passive",{get:function(){Pn=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch{Pn=!1}function ur(e,t,n,r,i,a,h,x,L){var V=Array.prototype.slice.call(arguments,3);try{t.apply(n,V)}catch(ee){this.onError(ee)}}var cn=!1,vn=null,wn=!1,cr=null,_i={onError:function(e){cn=!0,vn=e}};function xi(e,t,n,r,i,a,h,x,L){cn=!1,vn=null,ur.apply(_i,arguments)}function Ri(e,t,n,r,i,a,h,x,L){if(xi.apply(this,arguments),cn){if(cn){var V=vn;cn=!1,vn=null}else throw Error(m(198));wn||(wn=!0,cr=V)}}function Xe(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ba(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ja(e){if(Xe(e)!==e)throw Error(m(188))}function tf(e){var t=e.alternate;if(!t){if(t=Xe(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return ja(i),e;if(a===r)return ja(i),t;a=a.sibling}throw Error(m(188))}if(n.return!==r.return)n=i,r=a;else{for(var h=!1,x=i.child;x;){if(x===n){h=!0,n=i,r=a;break}if(x===r){h=!0,r=i,n=a;break}x=x.sibling}if(!h){for(x=a.child;x;){if(x===n){h=!0,n=a,r=i;break}if(x===r){h=!0,r=a,n=i;break}x=x.sibling}if(!h)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function Va(e){return e=tf(e),e!==null?Ga(e):null}function Ga(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ga(e);if(t!==null)return t;e=e.sibling}return null}var Wa=p.unstable_scheduleCallback,qa=p.unstable_cancelCallback,nf=p.unstable_shouldYield,rf=p.unstable_requestPaint,ct=p.unstable_now,of=p.unstable_getCurrentPriorityLevel,jo=p.unstable_ImmediatePriority,$a=p.unstable_UserBlockingPriority,Mi=p.unstable_NormalPriority,sf=p.unstable_LowPriority,Qa=p.unstable_IdlePriority,Ei=null,fn=null;function af(e){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Ei,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:cf,lf=Math.log,uf=Math.LN2;function cf(e){return e>>>=0,e===0?32:31-(lf(e)/uf|0)|0}var Li=64,ki=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,h=n&268435455;if(h!==0){var x=h&~i;x!==0?r=Cr(x):(a&=h,a!==0&&(r=Cr(a)))}else h=n&~i,h!==0?r=Cr(h):a!==0&&(r=Cr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function ff(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function df(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var h=31-bt(a),x=1<<h,L=i[h];L===-1?(!(x&n)||x&r)&&(i[h]=ff(x,t)):L<=t&&(e.expiredLanes|=x),a&=~x}}function Vo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Za(){var e=Li;return Li<<=1,!(Li&4194240)&&(Li=64),e}function Go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function pf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Wo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var qe=0;function Ya(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ka,qo,Xa,Ja,ba,$o=!1,Di=[],Dn=null,zn=null,In=null,Or=new Map,Fr=new Map,Un=[],hf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function el(e,t){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(t.pointerId)}}function Hr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=br(t),t!==null&&qo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function mf(e,t,n,r,i){switch(t){case"focusin":return Dn=Hr(Dn,e,t,n,r,i),!0;case"dragenter":return zn=Hr(zn,e,t,n,r,i),!0;case"mouseover":return In=Hr(In,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Or.set(a,Hr(Or.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Fr.set(a,Hr(Fr.get(a)||null,e,t,n,r,i)),!0}return!1}function tl(e){var t=Kn(e.target);if(t!==null){var n=Xe(t);if(n!==null){if(t=n.tag,t===13){if(t=Ba(n),t!==null){e.blockedOn=t,ba(e.priority,function(){Xa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dt=r,n.target.dispatchEvent(r),dt=null}else return t=br(n),t!==null&&qo(t),e.blockedOn=n,!1;t.shift()}return!0}function nl(e,t,n){zi(e)&&n.delete(t)}function gf(){$o=!1,Dn!==null&&zi(Dn)&&(Dn=null),zn!==null&&zi(zn)&&(zn=null),In!==null&&zi(In)&&(In=null),Or.forEach(nl),Fr.forEach(nl)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,$o||($o=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,gf)))}function jr(e){function t(i){return Br(i,e)}if(0<Di.length){Br(Di[0],e);for(var n=1;n<Di.length;n++){var r=Di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dn!==null&&Br(Dn,e),zn!==null&&Br(zn,e),In!==null&&Br(In,e),Or.forEach(t),Fr.forEach(t),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)tl(n),n.blockedOn===null&&Un.shift()}var fr=Me.ReactCurrentBatchConfig,Ii=!0;function yf(e,t,n,r){var i=qe,a=fr.transition;fr.transition=null;try{qe=1,Qo(e,t,n,r)}finally{qe=i,fr.transition=a}}function vf(e,t,n,r){var i=qe,a=fr.transition;fr.transition=null;try{qe=4,Qo(e,t,n,r)}finally{qe=i,fr.transition=a}}function Qo(e,t,n,r){if(Ii){var i=Zo(e,t,n,r);if(i===null)fs(e,t,r,Ui,n),el(e,r);else if(mf(i,e,t,n,r))r.stopPropagation();else if(el(e,r),t&4&&-1<hf.indexOf(e)){for(;i!==null;){var a=br(i);if(a!==null&&Ka(a),a=Zo(e,t,n,r),a===null&&fs(e,t,r,Ui,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else fs(e,t,r,null,n)}}var Ui=null;function Zo(e,t,n,r){if(Ui=null,e=pt(r),e=Kn(e),e!==null)if(t=Xe(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ba(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ui=e,null}function rl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(of()){case jo:return 1;case $a:return 4;case Mi:case sf:return 16;case Qa:return 536870912;default:return 16}default:return 16}}var An=null,Yo=null,Ai=null;function il(){if(Ai)return Ai;var e,t=Yo,n=t.length,r,i="value"in An?An.value:An.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var h=n-e;for(r=1;r<=h&&t[n-r]===i[a-r];r++);return Ai=i.slice(e,1<r?1-r:void 0)}function Ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function ol(){return!1}function Vt(e){function t(n,r,i,a,h){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=h,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(a):a[x]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ni:ol,this.isPropagationStopped=ol,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ko=Vt(dr),Vr=ie({},dr,{view:0,detail:0}),wf=Vt(Vr),Xo,Jo,Gr,Oi=ie({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(Xo=e.screenX-Gr.screenX,Jo=e.screenY-Gr.screenY):Jo=Xo=0,Gr=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),sl=Vt(Oi),Sf=ie({},Oi,{dataTransfer:0}),Tf=Vt(Sf),_f=ie({},Vr,{relatedTarget:0}),bo=Vt(_f),xf=ie({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Rf=Vt(xf),Mf=ie({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ef=Vt(Mf),Lf=ie({},dr,{data:0}),al=Vt(Lf),kf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Df={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Df[e])?!!t[e]:!1}function es(){return zf}var If=ie({},Vr,{key:function(e){if(e.key){var t=kf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(e){return e.type==="keypress"?Ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uf=Vt(If),Af=ie({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ll=Vt(Af),Cf=ie({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),Nf=Vt(Cf),Of=ie({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ff=Vt(Of),Hf=ie({},Oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bf=Vt(Hf),jf=[9,13,27,32],ts=O&&"CompositionEvent"in window,Wr=null;O&&"documentMode"in document&&(Wr=document.documentMode);var Vf=O&&"TextEvent"in window&&!Wr,ul=O&&(!ts||Wr&&8<Wr&&11>=Wr),cl=" ",fl=!1;function dl(e,t){switch(e){case"keyup":return jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function Gf(e,t){switch(e){case"compositionend":return pl(t);case"keypress":return t.which!==32?null:(fl=!0,cl);case"textInput":return e=t.data,e===cl&&fl?null:e;default:return null}}function Wf(e,t){if(pr)return e==="compositionend"||!ts&&dl(e,t)?(e=il(),Ai=Yo=An=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ul&&t.locale!=="ko"?null:t.data;default:return null}}var qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qf[e.type]:t==="textarea"}function ml(e,t,n,r){wt(r),t=Vi(t,"onChange"),0<t.length&&(n=new Ko("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qr=null,$r=null;function $f(e){Ul(e,0)}function Fi(e){var t=vr(e);if(M(t))return e}function Qf(e,t){if(e==="change")return t}var gl=!1;if(O){var ns;if(O){var rs="oninput"in document;if(!rs){var yl=document.createElement("div");yl.setAttribute("oninput","return;"),rs=typeof yl.oninput=="function"}ns=rs}else ns=!1;gl=ns&&(!document.documentMode||9<document.documentMode)}function vl(){qr&&(qr.detachEvent("onpropertychange",wl),$r=qr=null)}function wl(e){if(e.propertyName==="value"&&Fi($r)){var t=[];ml(t,$r,e,pt(e)),Pt($f,t)}}function Zf(e,t,n){e==="focusin"?(vl(),qr=t,$r=n,qr.attachEvent("onpropertychange",wl)):e==="focusout"&&vl()}function Yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fi($r)}function Kf(e,t){if(e==="click")return Fi(t)}function Xf(e,t){if(e==="input"||e==="change")return Fi(t)}function Jf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:Jf;function Qr(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!I.call(t,i)||!en(e[i],t[i]))return!1}return!0}function Sl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tl(e,t){var n=Sl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sl(n)}}function _l(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_l(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xl(){for(var e=window,t=H();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=H(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bf(e){var t=xl(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_l(n.ownerDocument.documentElement,n)){if(r!==null&&is(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Tl(n,a);var h=Tl(n,r);i&&h&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ed=O&&"documentMode"in document&&11>=document.documentMode,hr=null,os=null,Zr=null,ss=!1;function Rl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ss||hr==null||hr!==H(r)||(r=hr,"selectionStart"in r&&is(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&Qr(Zr,r)||(Zr=r,r=Vi(os,"onSelect"),0<r.length&&(t=new Ko("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},as={},Ml={};O&&(Ml=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Bi(e){if(as[e])return as[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ml)return as[e]=t[n];return e}var El=Bi("animationend"),Ll=Bi("animationiteration"),kl=Bi("animationstart"),Pl=Bi("transitionend"),Dl=new Map,zl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,t){Dl.set(e,t),E(t,[e])}for(var ls=0;ls<zl.length;ls++){var us=zl[ls],td=us.toLowerCase(),nd=us[0].toUpperCase()+us.slice(1);Cn(td,"on"+nd)}Cn(El,"onAnimationEnd"),Cn(Ll,"onAnimationIteration"),Cn(kl,"onAnimationStart"),Cn("dblclick","onDoubleClick"),Cn("focusin","onFocus"),Cn("focusout","onBlur"),Cn(Pl,"onTransitionEnd"),U("onMouseEnter",["mouseout","mouseover"]),U("onMouseLeave",["mouseout","mouseover"]),U("onPointerEnter",["pointerout","pointerover"]),U("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function Il(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ri(r,t,void 0,e),e.currentTarget=null}function Ul(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var h=r.length-1;0<=h;h--){var x=r[h],L=x.instance,V=x.currentTarget;if(x=x.listener,L!==a&&i.isPropagationStopped())break e;Il(i,x,V),a=L}else for(h=0;h<r.length;h++){if(x=r[h],L=x.instance,V=x.currentTarget,x=x.listener,L!==a&&i.isPropagationStopped())break e;Il(i,x,V),a=L}}}if(wn)throw e=cr,wn=!1,cr=null,e}function Ye(e,t){var n=t[ys];n===void 0&&(n=t[ys]=new Set);var r=e+"__bubble";n.has(r)||(Al(t,e,2,!1),n.add(r))}function cs(e,t,n){var r=0;t&&(r|=4),Al(n,e,r,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function Kr(e){if(!e[ji]){e[ji]=!0,R.forEach(function(n){n!=="selectionchange"&&(rd.has(n)||cs(n,!1,e),cs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,cs("selectionchange",!1,t))}}function Al(e,t,n,r){switch(rl(t)){case 1:var i=yf;break;case 4:i=vf;break;default:i=Qo}n=i.bind(null,t,n,e),i=void 0,!Pn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fs(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var h=r.tag;if(h===3||h===4){var x=r.stateNode.containerInfo;if(x===i||x.nodeType===8&&x.parentNode===i)break;if(h===4)for(h=r.return;h!==null;){var L=h.tag;if((L===3||L===4)&&(L=h.stateNode.containerInfo,L===i||L.nodeType===8&&L.parentNode===i))return;h=h.return}for(;x!==null;){if(h=Kn(x),h===null)return;if(L=h.tag,L===5||L===6){r=a=h;continue e}x=x.parentNode}}r=r.return}Pt(function(){var V=a,ee=pt(n),te=[];e:{var b=Dl.get(e);if(b!==void 0){var le=Ko,pe=e;switch(e){case"keypress":if(Ci(n)===0)break e;case"keydown":case"keyup":le=Uf;break;case"focusin":pe="focus",le=bo;break;case"focusout":pe="blur",le=bo;break;case"beforeblur":case"afterblur":le=bo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Tf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Nf;break;case El:case Ll:case kl:le=Rf;break;case Pl:le=Ff;break;case"scroll":le=wf;break;case"wheel":le=Bf;break;case"copy":case"cut":case"paste":le=Ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=ll}var he=(t&4)!==0,ft=!he&&e==="scroll",N=he?b!==null?b+"Capture":null:b;he=[];for(var z=V,F;z!==null;){F=z;var oe=F.stateNode;if(F.tag===5&&oe!==null&&(F=oe,N!==null&&(oe=ln(z,N),oe!=null&&he.push(Xr(z,oe,F)))),ft)break;z=z.return}0<he.length&&(b=new le(b,pe,null,n,ee),te.push({event:b,listeners:he}))}}if(!(t&7)){e:{if(b=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",b&&n!==dt&&(pe=n.relatedTarget||n.fromElement)&&(Kn(pe)||pe[Sn]))break e;if((le||b)&&(b=ee.window===ee?ee:(b=ee.ownerDocument)?b.defaultView||b.parentWindow:window,le?(pe=n.relatedTarget||n.toElement,le=V,pe=pe?Kn(pe):null,pe!==null&&(ft=Xe(pe),pe!==ft||pe.tag!==5&&pe.tag!==6)&&(pe=null)):(le=null,pe=V),le!==pe)){if(he=sl,oe="onMouseLeave",N="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(he=ll,oe="onPointerLeave",N="onPointerEnter",z="pointer"),ft=le==null?b:vr(le),F=pe==null?b:vr(pe),b=new he(oe,z+"leave",le,n,ee),b.target=ft,b.relatedTarget=F,oe=null,Kn(ee)===V&&(he=new he(N,z+"enter",pe,n,ee),he.target=F,he.relatedTarget=ft,oe=he),ft=oe,le&&pe)t:{for(he=le,N=pe,z=0,F=he;F;F=gr(F))z++;for(F=0,oe=N;oe;oe=gr(oe))F++;for(;0<z-F;)he=gr(he),z--;for(;0<F-z;)N=gr(N),F--;for(;z--;){if(he===N||N!==null&&he===N.alternate)break t;he=gr(he),N=gr(N)}he=null}else he=null;le!==null&&Cl(te,b,le,he,!1),pe!==null&&ft!==null&&Cl(te,ft,pe,he,!0)}}e:{if(b=V?vr(V):window,le=b.nodeName&&b.nodeName.toLowerCase(),le==="select"||le==="input"&&b.type==="file")var ge=Qf;else if(hl(b))if(gl)ge=Xf;else{ge=Yf;var Se=Zf}else(le=b.nodeName)&&le.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(ge=Kf);if(ge&&(ge=ge(e,V))){ml(te,ge,n,ee);break e}Se&&Se(e,b,V),e==="focusout"&&(Se=b._wrapperState)&&Se.controlled&&b.type==="number"&&P(b,"number",b.value)}switch(Se=V?vr(V):window,e){case"focusin":(hl(Se)||Se.contentEditable==="true")&&(hr=Se,os=V,Zr=null);break;case"focusout":Zr=os=hr=null;break;case"mousedown":ss=!0;break;case"contextmenu":case"mouseup":case"dragend":ss=!1,Rl(te,n,ee);break;case"selectionchange":if(ed)break;case"keydown":case"keyup":Rl(te,n,ee)}var Te;if(ts)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else pr?dl(e,n)&&(Le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Le="onCompositionStart");Le&&(ul&&n.locale!=="ko"&&(pr||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&pr&&(Te=il()):(An=ee,Yo="value"in An?An.value:An.textContent,pr=!0)),Se=Vi(V,Le),0<Se.length&&(Le=new al(Le,e,null,n,ee),te.push({event:Le,listeners:Se}),Te?Le.data=Te:(Te=pl(n),Te!==null&&(Le.data=Te)))),(Te=Vf?Gf(e,n):Wf(e,n))&&(V=Vi(V,"onBeforeInput"),0<V.length&&(ee=new al("onBeforeInput","beforeinput",null,n,ee),te.push({event:ee,listeners:V}),ee.data=Te))}Ul(te,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ln(e,n),a!=null&&r.unshift(Xr(e,a,i)),a=ln(e,t),a!=null&&r.push(Xr(e,a,i))),e=e.return}return r}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cl(e,t,n,r,i){for(var a=t._reactName,h=[];n!==null&&n!==r;){var x=n,L=x.alternate,V=x.stateNode;if(L!==null&&L===r)break;x.tag===5&&V!==null&&(x=V,i?(L=ln(n,a),L!=null&&h.unshift(Xr(n,L,x))):i||(L=ln(n,a),L!=null&&h.push(Xr(n,L,x)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var id=/\r\n?/g,od=/\u0000|\uFFFD/g;function Nl(e){return(typeof e=="string"?e:""+e).replace(id,`
`).replace(od,"")}function Gi(e,t,n){if(t=Nl(t),Nl(e)!==t&&n)throw Error(m(425))}function Wi(){}var ds=null,ps=null;function hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ms=typeof setTimeout=="function"?setTimeout:void 0,sd=typeof clearTimeout=="function"?clearTimeout:void 0,Ol=typeof Promise=="function"?Promise:void 0,ad=typeof queueMicrotask=="function"?queueMicrotask:typeof Ol<"u"?function(e){return Ol.resolve(null).then(e).catch(ld)}:ms;function ld(e){setTimeout(function(){throw e})}function gs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);jr(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yr=Math.random().toString(36).slice(2),dn="__reactFiber$"+yr,Jr="__reactProps$"+yr,Sn="__reactContainer$"+yr,ys="__reactEvents$"+yr,ud="__reactListeners$"+yr,cd="__reactHandles$"+yr;function Kn(e){var t=e[dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Sn]||n[dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fl(e);e!==null;){if(n=e[dn])return n;e=Fl(e)}return t}e=n,n=e.parentNode}return null}function br(e){return e=e[dn]||e[Sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function qi(e){return e[Jr]||null}var vs=[],wr=-1;function On(e){return{current:e}}function Ke(e){0>wr||(e.current=vs[wr],vs[wr]=null,wr--)}function Ze(e,t){wr++,vs[wr]=e.current,e.current=t}var Fn={},Dt=On(Fn),Nt=On(!1),Xn=Fn;function Sr(e,t){var n=e.type.contextTypes;if(!n)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(e){return e=e.childContextTypes,e!=null}function $i(){Ke(Nt),Ke(Dt)}function Hl(e,t,n){if(Dt.current!==Fn)throw Error(m(168));Ze(Dt,t),Ze(Nt,n)}function Bl(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(m(108,c(e)||"Unknown",i));return ie({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,Xn=Dt.current,Ze(Dt,e),Ze(Nt,Nt.current),!0}function jl(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=Bl(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,Ke(Nt),Ke(Dt),Ze(Dt,e)):Ke(Nt),Ze(Nt,n)}var Tn=null,Zi=!1,ws=!1;function Vl(e){Tn===null?Tn=[e]:Tn.push(e)}function fd(e){Zi=!0,Vl(e)}function Hn(){if(!ws&&Tn!==null){ws=!0;var e=0,t=qe;try{var n=Tn;for(qe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tn=null,Zi=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(e+1)),Wa(jo,Hn),i}finally{qe=t,ws=!1}}return null}var Tr=[],_r=0,Yi=null,Ki=0,Qt=[],Zt=0,Jn=null,_n=1,xn="";function bn(e,t){Tr[_r++]=Ki,Tr[_r++]=Yi,Yi=e,Ki=t}function Gl(e,t,n){Qt[Zt++]=_n,Qt[Zt++]=xn,Qt[Zt++]=Jn,Jn=e;var r=_n;e=xn;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var a=32-bt(t)+i;if(30<a){var h=i-i%5;a=(r&(1<<h)-1).toString(32),r>>=h,i-=h,_n=1<<32-bt(t)+i|n<<i|r,xn=a+e}else _n=1<<a|n<<i|r,xn=e}function Ss(e){e.return!==null&&(bn(e,1),Gl(e,1,0))}function Ts(e){for(;e===Yi;)Yi=Tr[--_r],Tr[_r]=null,Ki=Tr[--_r],Tr[_r]=null;for(;e===Jn;)Jn=Qt[--Zt],Qt[Zt]=null,xn=Qt[--Zt],Qt[Zt]=null,_n=Qt[--Zt],Qt[Zt]=null}var Gt=null,Wt=null,Je=!1,tn=null;function Wl(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ql(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Gt=e,Wt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Gt=e,Wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:_n,overflow:xn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Gt=e,Wt=null,!0):!1;default:return!1}}function _s(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xs(e){if(Je){var t=Wt;if(t){var n=t;if(!ql(e,t)){if(_s(e))throw Error(m(418));t=Nn(n.nextSibling);var r=Gt;t&&ql(e,t)?Wl(r,n):(e.flags=e.flags&-4097|2,Je=!1,Gt=e)}}else{if(_s(e))throw Error(m(418));e.flags=e.flags&-4097|2,Je=!1,Gt=e}}}function $l(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Gt=e}function Xi(e){if(e!==Gt)return!1;if(!Je)return $l(e),Je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hs(e.type,e.memoizedProps)),t&&(t=Wt)){if(_s(e))throw Ql(),Error(m(418));for(;t;)Wl(e,t),t=Nn(t.nextSibling)}if($l(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Wt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Wt=null}}else Wt=Gt?Nn(e.stateNode.nextSibling):null;return!0}function Ql(){for(var e=Wt;e;)e=Nn(e.nextSibling)}function xr(){Wt=Gt=null,Je=!1}function Rs(e){tn===null?tn=[e]:tn.push(e)}var dd=Me.ReactCurrentBatchConfig;function ei(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(h){var x=i.refs;h===null?delete x[a]:x[a]=h},t._stringRef=a,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function Ji(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zl(e){var t=e._init;return t(e._payload)}function Yl(e){function t(N,z){if(e){var F=N.deletions;F===null?(N.deletions=[z],N.flags|=16):F.push(z)}}function n(N,z){if(!e)return null;for(;z!==null;)t(N,z),z=z.sibling;return null}function r(N,z){for(N=new Map;z!==null;)z.key!==null?N.set(z.key,z):N.set(z.index,z),z=z.sibling;return N}function i(N,z){return N=Qn(N,z),N.index=0,N.sibling=null,N}function a(N,z,F){return N.index=F,e?(F=N.alternate,F!==null?(F=F.index,F<z?(N.flags|=2,z):F):(N.flags|=2,z)):(N.flags|=1048576,z)}function h(N){return e&&N.alternate===null&&(N.flags|=2),N}function x(N,z,F,oe){return z===null||z.tag!==6?(z=ma(F,N.mode,oe),z.return=N,z):(z=i(z,F),z.return=N,z)}function L(N,z,F,oe){var ge=F.type;return ge===Oe?ee(N,z,F.props.children,oe,F.key):z!==null&&(z.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===We&&Zl(ge)===z.type)?(oe=i(z,F.props),oe.ref=ei(N,z,F),oe.return=N,oe):(oe=xo(F.type,F.key,F.props,null,N.mode,oe),oe.ref=ei(N,z,F),oe.return=N,oe)}function V(N,z,F,oe){return z===null||z.tag!==4||z.stateNode.containerInfo!==F.containerInfo||z.stateNode.implementation!==F.implementation?(z=ga(F,N.mode,oe),z.return=N,z):(z=i(z,F.children||[]),z.return=N,z)}function ee(N,z,F,oe,ge){return z===null||z.tag!==7?(z=ar(F,N.mode,oe,ge),z.return=N,z):(z=i(z,F),z.return=N,z)}function te(N,z,F){if(typeof z=="string"&&z!==""||typeof z=="number")return z=ma(""+z,N.mode,F),z.return=N,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Ie:return F=xo(z.type,z.key,z.props,null,N.mode,F),F.ref=ei(N,null,z),F.return=N,F;case Ne:return z=ga(z,N.mode,F),z.return=N,z;case We:var oe=z._init;return te(N,oe(z._payload),F)}if(B(z)||me(z))return z=ar(z,N.mode,F,null),z.return=N,z;Ji(N,z)}return null}function b(N,z,F,oe){var ge=z!==null?z.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ge!==null?null:x(N,z,""+F,oe);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ie:return F.key===ge?L(N,z,F,oe):null;case Ne:return F.key===ge?V(N,z,F,oe):null;case We:return ge=F._init,b(N,z,ge(F._payload),oe)}if(B(F)||me(F))return ge!==null?null:ee(N,z,F,oe,null);Ji(N,F)}return null}function le(N,z,F,oe,ge){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return N=N.get(F)||null,x(z,N,""+oe,ge);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case Ie:return N=N.get(oe.key===null?F:oe.key)||null,L(z,N,oe,ge);case Ne:return N=N.get(oe.key===null?F:oe.key)||null,V(z,N,oe,ge);case We:var Se=oe._init;return le(N,z,F,Se(oe._payload),ge)}if(B(oe)||me(oe))return N=N.get(F)||null,ee(z,N,oe,ge,null);Ji(z,oe)}return null}function pe(N,z,F,oe){for(var ge=null,Se=null,Te=z,Le=z=0,Rt=null;Te!==null&&Le<F.length;Le++){Te.index>Le?(Rt=Te,Te=null):Rt=Te.sibling;var Ge=b(N,Te,F[Le],oe);if(Ge===null){Te===null&&(Te=Rt);break}e&&Te&&Ge.alternate===null&&t(N,Te),z=a(Ge,z,Le),Se===null?ge=Ge:Se.sibling=Ge,Se=Ge,Te=Rt}if(Le===F.length)return n(N,Te),Je&&bn(N,Le),ge;if(Te===null){for(;Le<F.length;Le++)Te=te(N,F[Le],oe),Te!==null&&(z=a(Te,z,Le),Se===null?ge=Te:Se.sibling=Te,Se=Te);return Je&&bn(N,Le),ge}for(Te=r(N,Te);Le<F.length;Le++)Rt=le(Te,N,Le,F[Le],oe),Rt!==null&&(e&&Rt.alternate!==null&&Te.delete(Rt.key===null?Le:Rt.key),z=a(Rt,z,Le),Se===null?ge=Rt:Se.sibling=Rt,Se=Rt);return e&&Te.forEach(function(Zn){return t(N,Zn)}),Je&&bn(N,Le),ge}function he(N,z,F,oe){var ge=me(F);if(typeof ge!="function")throw Error(m(150));if(F=ge.call(F),F==null)throw Error(m(151));for(var Se=ge=null,Te=z,Le=z=0,Rt=null,Ge=F.next();Te!==null&&!Ge.done;Le++,Ge=F.next()){Te.index>Le?(Rt=Te,Te=null):Rt=Te.sibling;var Zn=b(N,Te,Ge.value,oe);if(Zn===null){Te===null&&(Te=Rt);break}e&&Te&&Zn.alternate===null&&t(N,Te),z=a(Zn,z,Le),Se===null?ge=Zn:Se.sibling=Zn,Se=Zn,Te=Rt}if(Ge.done)return n(N,Te),Je&&bn(N,Le),ge;if(Te===null){for(;!Ge.done;Le++,Ge=F.next())Ge=te(N,Ge.value,oe),Ge!==null&&(z=a(Ge,z,Le),Se===null?ge=Ge:Se.sibling=Ge,Se=Ge);return Je&&bn(N,Le),ge}for(Te=r(N,Te);!Ge.done;Le++,Ge=F.next())Ge=le(Te,N,Le,Ge.value,oe),Ge!==null&&(e&&Ge.alternate!==null&&Te.delete(Ge.key===null?Le:Ge.key),z=a(Ge,z,Le),Se===null?ge=Ge:Se.sibling=Ge,Se=Ge);return e&&Te.forEach(function(Wd){return t(N,Wd)}),Je&&bn(N,Le),ge}function ft(N,z,F,oe){if(typeof F=="object"&&F!==null&&F.type===Oe&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ie:e:{for(var ge=F.key,Se=z;Se!==null;){if(Se.key===ge){if(ge=F.type,ge===Oe){if(Se.tag===7){n(N,Se.sibling),z=i(Se,F.props.children),z.return=N,N=z;break e}}else if(Se.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===We&&Zl(ge)===Se.type){n(N,Se.sibling),z=i(Se,F.props),z.ref=ei(N,Se,F),z.return=N,N=z;break e}n(N,Se);break}else t(N,Se);Se=Se.sibling}F.type===Oe?(z=ar(F.props.children,N.mode,oe,F.key),z.return=N,N=z):(oe=xo(F.type,F.key,F.props,null,N.mode,oe),oe.ref=ei(N,z,F),oe.return=N,N=oe)}return h(N);case Ne:e:{for(Se=F.key;z!==null;){if(z.key===Se)if(z.tag===4&&z.stateNode.containerInfo===F.containerInfo&&z.stateNode.implementation===F.implementation){n(N,z.sibling),z=i(z,F.children||[]),z.return=N,N=z;break e}else{n(N,z);break}else t(N,z);z=z.sibling}z=ga(F,N.mode,oe),z.return=N,N=z}return h(N);case We:return Se=F._init,ft(N,z,Se(F._payload),oe)}if(B(F))return pe(N,z,F,oe);if(me(F))return he(N,z,F,oe);Ji(N,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,z!==null&&z.tag===6?(n(N,z.sibling),z=i(z,F),z.return=N,N=z):(n(N,z),z=ma(F,N.mode,oe),z.return=N,N=z),h(N)):n(N,z)}return ft}var Rr=Yl(!0),Kl=Yl(!1),bi=On(null),eo=null,Mr=null,Ms=null;function Es(){Ms=Mr=eo=null}function Ls(e){var t=bi.current;Ke(bi),e._currentValue=t}function ks(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Er(e,t){eo=e,Ms=Mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ft=!0),e.firstContext=null)}function Yt(e){var t=e._currentValue;if(Ms!==e)if(e={context:e,memoizedValue:t,next:null},Mr===null){if(eo===null)throw Error(m(308));Mr=e,eo.dependencies={lanes:0,firstContext:e}}else Mr=Mr.next=e;return t}var er=null;function Ps(e){er===null?er=[e]:er.push(e)}function Xl(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ps(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rn(e,r)}function Rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bn=!1;function Ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ve&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ps(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rn(e,n)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wo(e,n)}}function bl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var h={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=h:a=a.next=h,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function no(e,t,n,r){var i=e.updateQueue;Bn=!1;var a=i.firstBaseUpdate,h=i.lastBaseUpdate,x=i.shared.pending;if(x!==null){i.shared.pending=null;var L=x,V=L.next;L.next=null,h===null?a=V:h.next=V,h=L;var ee=e.alternate;ee!==null&&(ee=ee.updateQueue,x=ee.lastBaseUpdate,x!==h&&(x===null?ee.firstBaseUpdate=V:x.next=V,ee.lastBaseUpdate=L))}if(a!==null){var te=i.baseState;h=0,ee=V=L=null,x=a;do{var b=x.lane,le=x.eventTime;if((r&b)===b){ee!==null&&(ee=ee.next={eventTime:le,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var pe=e,he=x;switch(b=t,le=n,he.tag){case 1:if(pe=he.payload,typeof pe=="function"){te=pe.call(le,te,b);break e}te=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=he.payload,b=typeof pe=="function"?pe.call(le,te,b):pe,b==null)break e;te=ie({},te,b);break e;case 2:Bn=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,b=i.effects,b===null?i.effects=[x]:b.push(x))}else le={eventTime:le,lane:b,tag:x.tag,payload:x.payload,callback:x.callback,next:null},ee===null?(V=ee=le,L=te):ee=ee.next=le,h|=b;if(x=x.next,x===null){if(x=i.shared.pending,x===null)break;b=x,x=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);if(ee===null&&(L=te),i.baseState=L,i.firstBaseUpdate=V,i.lastBaseUpdate=ee,t=i.shared.interleaved,t!==null){i=t;do h|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);rr|=h,e.lanes=h,e.memoizedState=te}}function eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(m(191,i));i.call(r)}}}var ti={},pn=On(ti),ni=On(ti),ri=On(ti);function tr(e){if(e===ti)throw Error(m(174));return e}function zs(e,t){switch(Ze(ri,t),Ze(ni,e),Ze(pn,ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:q(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=q(t,e)}Ke(pn),Ze(pn,t)}function Lr(){Ke(pn),Ke(ni),Ke(ri)}function tu(e){tr(ri.current);var t=tr(pn.current),n=q(t,e.type);t!==n&&(Ze(ni,e),Ze(pn,n))}function Is(e){ni.current===e&&(Ke(pn),Ke(ni))}var it=On(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Us=[];function As(){for(var e=0;e<Us.length;e++)Us[e]._workInProgressVersionPrimary=null;Us.length=0}var io=Me.ReactCurrentDispatcher,Cs=Me.ReactCurrentBatchConfig,nr=0,ot=null,gt=null,_t=null,oo=!1,ii=!1,oi=0,pd=0;function zt(){throw Error(m(321))}function Ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!en(e[n],t[n]))return!1;return!0}function Os(e,t,n,r,i,a){if(nr=a,ot=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=e===null||e.memoizedState===null?yd:vd,e=n(r,i),ii){a=0;do{if(ii=!1,oi=0,25<=a)throw Error(m(301));a+=1,_t=gt=null,t.updateQueue=null,io.current=wd,e=n(r,i)}while(ii)}if(io.current=lo,t=gt!==null&&gt.next!==null,nr=0,_t=gt=ot=null,oo=!1,t)throw Error(m(300));return e}function Fs(){var e=oi!==0;return oi=0,e}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?ot.memoizedState=_t=e:_t=_t.next=e,_t}function Kt(){if(gt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=gt.next;var t=_t===null?ot.memoizedState:_t.next;if(t!==null)_t=t,gt=e;else{if(e===null)throw Error(m(310));gt=e,e={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},_t===null?ot.memoizedState=_t=e:_t=_t.next=e}return _t}function si(e,t){return typeof t=="function"?t(e):t}function Hs(e){var t=Kt(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=gt,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var h=i.next;i.next=a.next,a.next=h}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var x=h=null,L=null,V=a;do{var ee=V.lane;if((nr&ee)===ee)L!==null&&(L=L.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),r=V.hasEagerState?V.eagerState:e(r,V.action);else{var te={lane:ee,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};L===null?(x=L=te,h=r):L=L.next=te,ot.lanes|=ee,rr|=ee}V=V.next}while(V!==null&&V!==a);L===null?h=r:L.next=x,en(r,t.memoizedState)||(Ft=!0),t.memoizedState=r,t.baseState=h,t.baseQueue=L,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ot.lanes|=a,rr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bs(e){var t=Kt(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var h=i=i.next;do a=e(a,h.action),h=h.next;while(h!==i);en(a,t.memoizedState)||(Ft=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function nu(){}function ru(e,t){var n=ot,r=Kt(),i=t(),a=!en(r.memoizedState,i);if(a&&(r.memoizedState=i,Ft=!0),r=r.queue,js(su.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||_t!==null&&_t.memoizedState.tag&1){if(n.flags|=2048,ai(9,ou.bind(null,n,r,i,t),void 0,null),xt===null)throw Error(m(349));nr&30||iu(n,t,i)}return i}function iu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ou(e,t,n,r){t.value=n,t.getSnapshot=r,au(t)&&lu(e)}function su(e,t,n){return n(function(){au(t)&&lu(e)})}function au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!en(e,n)}catch{return!0}}function lu(e){var t=Rn(e,1);t!==null&&sn(t,e,1,-1)}function uu(e){var t=hn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:e},t.queue=e,e=e.dispatch=gd.bind(null,ot,e),[t.memoizedState,e]}function ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cu(){return Kt().memoizedState}function so(e,t,n,r){var i=hn();ot.flags|=e,i.memoizedState=ai(1|t,n,void 0,r===void 0?null:r)}function ao(e,t,n,r){var i=Kt();r=r===void 0?null:r;var a=void 0;if(gt!==null){var h=gt.memoizedState;if(a=h.destroy,r!==null&&Ns(r,h.deps)){i.memoizedState=ai(t,n,a,r);return}}ot.flags|=e,i.memoizedState=ai(1|t,n,a,r)}function fu(e,t){return so(8390656,8,e,t)}function js(e,t){return ao(2048,8,e,t)}function du(e,t){return ao(4,2,e,t)}function pu(e,t){return ao(4,4,e,t)}function hu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mu(e,t,n){return n=n!=null?n.concat([e]):null,ao(4,4,hu.bind(null,t,e),n)}function Vs(){}function gu(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ns(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yu(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ns(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vu(e,t,n){return nr&21?(en(n,t)||(n=Za(),ot.lanes|=n,rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ft=!0),e.memoizedState=n)}function hd(e,t){var n=qe;qe=n!==0&&4>n?n:4,e(!0);var r=Cs.transition;Cs.transition={};try{e(!1),t()}finally{qe=n,Cs.transition=r}}function wu(){return Kt().memoizedState}function md(e,t,n){var r=qn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Su(e))Tu(t,n);else if(n=Xl(e,t,n,r),n!==null){var i=Ct();sn(n,e,r,i),_u(n,t,r)}}function gd(e,t,n){var r=qn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Su(e))Tu(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var h=t.lastRenderedState,x=a(h,n);if(i.hasEagerState=!0,i.eagerState=x,en(x,h)){var L=t.interleaved;L===null?(i.next=i,Ps(t)):(i.next=L.next,L.next=i),t.interleaved=i;return}}catch{}finally{}n=Xl(e,t,i,r),n!==null&&(i=Ct(),sn(n,e,r,i),_u(n,t,r))}}function Su(e){var t=e.alternate;return e===ot||t!==null&&t===ot}function Tu(e,t){ii=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _u(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wo(e,n)}}var lo={readContext:Yt,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},yd={readContext:Yt,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,so(4194308,4,hu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return so(4194308,4,e,t)},useInsertionEffect:function(e,t){return so(4,2,e,t)},useMemo:function(e,t){var n=hn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=hn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=md.bind(null,ot,e),[r.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:uu,useDebugValue:Vs,useDeferredValue:function(e){return hn().memoizedState=e},useTransition:function(){var e=uu(!1),t=e[0];return e=hd.bind(null,e[1]),hn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ot,i=hn();if(Je){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),xt===null)throw Error(m(349));nr&30||iu(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,fu(su.bind(null,r,a,e),[e]),r.flags|=2048,ai(9,ou.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=hn(),t=xt.identifierPrefix;if(Je){var n=xn,r=_n;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vd={readContext:Yt,useCallback:gu,useContext:Yt,useEffect:js,useImperativeHandle:mu,useInsertionEffect:du,useLayoutEffect:pu,useMemo:yu,useReducer:Hs,useRef:cu,useState:function(){return Hs(si)},useDebugValue:Vs,useDeferredValue:function(e){var t=Kt();return vu(t,gt.memoizedState,e)},useTransition:function(){var e=Hs(si)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:nu,useSyncExternalStore:ru,useId:wu,unstable_isNewReconciler:!1},wd={readContext:Yt,useCallback:gu,useContext:Yt,useEffect:js,useImperativeHandle:mu,useInsertionEffect:du,useLayoutEffect:pu,useMemo:yu,useReducer:Bs,useRef:cu,useState:function(){return Bs(si)},useDebugValue:Vs,useDeferredValue:function(e){var t=Kt();return gt===null?t.memoizedState=e:vu(t,gt.memoizedState,e)},useTransition:function(){var e=Bs(si)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:nu,useSyncExternalStore:ru,useId:wu,unstable_isNewReconciler:!1};function nn(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uo={isMounted:function(e){return(e=e._reactInternals)?Xe(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ct(),i=qn(e),a=Mn(r,i);a.payload=t,n!=null&&(a.callback=n),t=jn(e,a,i),t!==null&&(sn(t,e,i,r),to(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ct(),i=qn(e),a=Mn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=jn(e,a,i),t!==null&&(sn(t,e,i,r),to(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),r=qn(e),i=Mn(n,r);i.tag=2,t!=null&&(i.callback=t),t=jn(e,i,r),t!==null&&(sn(t,e,r,n),to(t,e,r))}};function xu(e,t,n,r,i,a,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,h):t.prototype&&t.prototype.isPureReactComponent?!Qr(n,r)||!Qr(i,a):!0}function Ru(e,t,n){var r=!1,i=Fn,a=t.contextType;return typeof a=="object"&&a!==null?a=Yt(a):(i=Ot(t)?Xn:Dt.current,r=t.contextTypes,a=(r=r!=null)?Sr(e,i):Fn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Mu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&uo.enqueueReplaceState(t,t.state,null)}function Ws(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ds(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Yt(a):(a=Ot(t)?Xn:Dt.current,i.context=Sr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Gs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&uo.enqueueReplaceState(i,i.state,null),no(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function kr(e,t){try{var n="",r=t;do n+=Pe(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function qs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $s(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sd=typeof WeakMap=="function"?WeakMap:Map;function Eu(e,t,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,aa=r),$s(e,t)},n}function Lu(e,t,n){n=Mn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$s(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){$s(e,t),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),n}function ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ad.bind(null,e,t,n),t.then(e,e))}function Pu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Du(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mn(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var Td=Me.ReactCurrentOwner,Ft=!1;function At(e,t,n,r){t.child=e===null?Kl(t,null,n,r):Rr(t,e.child,n,r)}function zu(e,t,n,r,i){n=n.render;var a=t.ref;return Er(t,i),r=Os(e,t,n,r,a,i),n=Fs(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(Je&&n&&Ss(t),t.flags|=1,At(e,t,r,i),t.child)}function Iu(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!ha(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Uu(e,t,a,r,i)):(e=xo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var h=a.memoizedProps;if(n=n.compare,n=n!==null?n:Qr,n(h,r)&&e.ref===t.ref)return En(e,t,i)}return t.flags|=1,e=Qn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Uu(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Qr(a,r)&&e.ref===t.ref)if(Ft=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ft=!0);else return t.lanes=e.lanes,En(e,t,i)}return Qs(e,t,n,r,i)}function Au(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(Dr,qt),qt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ze(Dr,qt),qt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ze(Dr,qt),qt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ze(Dr,qt),qt|=r;return At(e,t,i,n),t.child}function Cu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qs(e,t,n,r,i){var a=Ot(n)?Xn:Dt.current;return a=Sr(t,a),Er(t,i),n=Os(e,t,n,r,a,i),r=Fs(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(Je&&r&&Ss(t),t.flags|=1,At(e,t,n,i),t.child)}function Nu(e,t,n,r,i){if(Ot(n)){var a=!0;Qi(t)}else a=!1;if(Er(t,i),t.stateNode===null)fo(e,t),Ru(t,n,r),Ws(t,n,r,i),r=!0;else if(e===null){var h=t.stateNode,x=t.memoizedProps;h.props=x;var L=h.context,V=n.contextType;typeof V=="object"&&V!==null?V=Yt(V):(V=Ot(n)?Xn:Dt.current,V=Sr(t,V));var ee=n.getDerivedStateFromProps,te=typeof ee=="function"||typeof h.getSnapshotBeforeUpdate=="function";te||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==r||L!==V)&&Mu(t,h,r,V),Bn=!1;var b=t.memoizedState;h.state=b,no(t,r,h,i),L=t.memoizedState,x!==r||b!==L||Nt.current||Bn?(typeof ee=="function"&&(Gs(t,n,ee,r),L=t.memoizedState),(x=Bn||xu(t,n,x,r,b,L,V))?(te||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=L),h.props=r,h.state=L,h.context=V,r=x):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{h=t.stateNode,Jl(e,t),x=t.memoizedProps,V=t.type===t.elementType?x:nn(t.type,x),h.props=V,te=t.pendingProps,b=h.context,L=n.contextType,typeof L=="object"&&L!==null?L=Yt(L):(L=Ot(n)?Xn:Dt.current,L=Sr(t,L));var le=n.getDerivedStateFromProps;(ee=typeof le=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==te||b!==L)&&Mu(t,h,r,L),Bn=!1,b=t.memoizedState,h.state=b,no(t,r,h,i);var pe=t.memoizedState;x!==te||b!==pe||Nt.current||Bn?(typeof le=="function"&&(Gs(t,n,le,r),pe=t.memoizedState),(V=Bn||xu(t,n,V,r,b,pe,L)||!1)?(ee||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,pe,L),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,pe,L)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=pe),h.props=r,h.state=pe,h.context=L,r=V):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),r=!1)}return Zs(e,t,n,r,a,i)}function Zs(e,t,n,r,i,a){Cu(e,t);var h=(t.flags&128)!==0;if(!r&&!h)return i&&jl(t,n,!1),En(e,t,a);r=t.stateNode,Td.current=t;var x=h&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&h?(t.child=Rr(t,e.child,null,a),t.child=Rr(t,null,x,a)):At(e,t,x,a),t.memoizedState=r.state,i&&jl(t,n,!0),t.child}function Ou(e){var t=e.stateNode;t.pendingContext?Hl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hl(e,t.context,!1),zs(e,t.containerInfo)}function Fu(e,t,n,r,i){return xr(),Rs(i),t.flags|=256,At(e,t,n,r),t.child}var Ys={dehydrated:null,treeContext:null,retryLane:0};function Ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hu(e,t,n){var r=t.pendingProps,i=it.current,a=!1,h=(t.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(i&2)!==0),x?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ze(it,i&1),e===null)return xs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(h=r.children,e=r.fallback,a?(r=t.mode,a=t.child,h={mode:"hidden",children:h},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=h):a=Ro(h,r,0,null),e=ar(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ks(n),t.memoizedState=Ys,e):Xs(t,h));if(i=e.memoizedState,i!==null&&(x=i.dehydrated,x!==null))return _d(e,t,h,r,x,i,n);if(a){a=r.fallback,h=t.mode,i=e.child,x=i.sibling;var L={mode:"hidden",children:r.children};return!(h&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=L,t.deletions=null):(r=Qn(i,L),r.subtreeFlags=i.subtreeFlags&14680064),x!==null?a=Qn(x,a):(a=ar(a,h,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,h=e.child.memoizedState,h=h===null?Ks(n):{baseLanes:h.baseLanes|n,cachePool:null,transitions:h.transitions},a.memoizedState=h,a.childLanes=e.childLanes&~n,t.memoizedState=Ys,r}return a=e.child,e=a.sibling,r=Qn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xs(e,t){return t=Ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&Rs(r),Rr(t,e.child,null,n),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _d(e,t,n,r,i,a,h){if(n)return t.flags&256?(t.flags&=-257,r=qs(Error(m(422))),co(e,t,h,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Ro({mode:"visible",children:r.children},i,0,null),a=ar(a,i,h,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Rr(t,e.child,null,h),t.child.memoizedState=Ks(h),t.memoizedState=Ys,a);if(!(t.mode&1))return co(e,t,h,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var x=r.dgst;return r=x,a=Error(m(419)),r=qs(a,r,void 0),co(e,t,h,r)}if(x=(h&e.childLanes)!==0,Ft||x){if(r=xt,r!==null){switch(h&-h){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|h)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Rn(e,i),sn(r,e,i,-1))}return pa(),r=qs(Error(m(421))),co(e,t,h,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Cd.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Wt=Nn(i.nextSibling),Gt=t,Je=!0,tn=null,e!==null&&(Qt[Zt++]=_n,Qt[Zt++]=xn,Qt[Zt++]=Jn,_n=e.id,xn=e.overflow,Jn=t),t=Xs(t,r.children),t.flags|=4096,t)}function Bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ks(e.return,t,n)}function Js(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ju(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(At(e,t,r.children,n),r=it.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,n,t);else if(e.tag===19)Bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ze(it,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Js(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Js(t,!0,n,null,a);break;case"together":Js(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=Qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xd(e,t,n){switch(t.tag){case 3:Ou(t),xr();break;case 5:tu(t);break;case 1:Ot(t.type)&&Qi(t);break;case 4:zs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ze(bi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ze(it,it.current&1),t.flags|=128,null):n&t.child.childLanes?Hu(e,t,n):(Ze(it,it.current&1),e=En(e,t,n),e!==null?e.sibling:null);Ze(it,it.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ju(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ze(it,it.current),r)break;return null;case 22:case 23:return t.lanes=0,Au(e,t,n)}return En(e,t,n)}var Vu,bs,Gu,Wu;Vu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},bs=function(){},Gu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tr(pn.current);var a=null;switch(n){case"input":i=s(e,i),r=s(e,r),a=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),a=[];break;case"textarea":i=w(e,i),r=w(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wi)}tt(n,r);var h;n=null;for(V in i)if(!r.hasOwnProperty(V)&&i.hasOwnProperty(V)&&i[V]!=null)if(V==="style"){var x=i[V];for(h in x)x.hasOwnProperty(h)&&(n||(n={}),n[h]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(T.hasOwnProperty(V)?a||(a=[]):(a=a||[]).push(V,null));for(V in r){var L=r[V];if(x=i!=null?i[V]:void 0,r.hasOwnProperty(V)&&L!==x&&(L!=null||x!=null))if(V==="style")if(x){for(h in x)!x.hasOwnProperty(h)||L&&L.hasOwnProperty(h)||(n||(n={}),n[h]="");for(h in L)L.hasOwnProperty(h)&&x[h]!==L[h]&&(n||(n={}),n[h]=L[h])}else n||(a||(a=[]),a.push(V,n)),n=L;else V==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,x=x?x.__html:void 0,L!=null&&x!==L&&(a=a||[]).push(V,L)):V==="children"?typeof L!="string"&&typeof L!="number"||(a=a||[]).push(V,""+L):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(T.hasOwnProperty(V)?(L!=null&&V==="onScroll"&&Ye("scroll",e),a||x===L||(a=[])):(a=a||[]).push(V,L))}n&&(a=a||[]).push("style",n);var V=a;(t.updateQueue=V)&&(t.flags|=4)}},Wu=function(e,t,n,r){n!==r&&(t.flags|=4)};function li(e,t){if(!Je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function It(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rd(e,t,n){var r=t.pendingProps;switch(Ts(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(t),null;case 1:return Ot(t.type)&&$i(),It(t),null;case 3:return r=t.stateNode,Lr(),Ke(Nt),Ke(Dt),As(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tn!==null&&(ca(tn),tn=null))),bs(e,t),It(t),null;case 5:Is(t);var i=tr(ri.current);if(n=t.type,e!==null&&t.stateNode!=null)Gu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return It(t),null}if(e=tr(pn.current),Xi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[dn]=t,r[Jr]=a,e=(t.mode&1)!==0,n){case"dialog":Ye("cancel",r),Ye("close",r);break;case"iframe":case"object":case"embed":Ye("load",r);break;case"video":case"audio":for(i=0;i<Yr.length;i++)Ye(Yr[i],r);break;case"source":Ye("error",r);break;case"img":case"image":case"link":Ye("error",r),Ye("load",r);break;case"details":Ye("toggle",r);break;case"input":g(r,a),Ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ye("invalid",r);break;case"textarea":k(r,a),Ye("invalid",r)}tt(n,a),i=null;for(var h in a)if(a.hasOwnProperty(h)){var x=a[h];h==="children"?typeof x=="string"?r.textContent!==x&&(a.suppressHydrationWarning!==!0&&Gi(r.textContent,x,e),i=["children",x]):typeof x=="number"&&r.textContent!==""+x&&(a.suppressHydrationWarning!==!0&&Gi(r.textContent,x,e),i=["children",""+x]):T.hasOwnProperty(h)&&x!=null&&h==="onScroll"&&Ye("scroll",r)}switch(n){case"input":S(r),v(r,a,!0);break;case"textarea":S(r),j(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Wi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{h=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=G(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=h.createElement(n,{is:r.is}):(e=h.createElement(n),n==="select"&&(h=e,r.multiple?h.multiple=!0:r.size&&(h.size=r.size))):e=h.createElementNS(e,n),e[dn]=t,e[Jr]=r,Vu(e,t,!1,!1),t.stateNode=e;e:{switch(h=ut(n,r),n){case"dialog":Ye("cancel",e),Ye("close",e),i=r;break;case"iframe":case"object":case"embed":Ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yr.length;i++)Ye(Yr[i],e);i=r;break;case"source":Ye("error",e),i=r;break;case"img":case"image":case"link":Ye("error",e),Ye("load",e),i=r;break;case"details":Ye("toggle",e),i=r;break;case"input":g(e,r),i=s(e,r),Ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),Ye("invalid",e);break;case"textarea":k(e,r),i=w(e,r),Ye("invalid",e);break;default:i=r}tt(n,i),x=i;for(a in x)if(x.hasOwnProperty(a)){var L=x[a];a==="style"?Qe(e,L):a==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,L!=null&&Re(e,L)):a==="children"?typeof L=="string"?(n!=="textarea"||L!=="")&&ue(e,L):typeof L=="number"&&ue(e,""+L):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(T.hasOwnProperty(a)?L!=null&&a==="onScroll"&&Ye("scroll",e):L!=null&&ye(e,a,L,h))}switch(n){case"input":S(e),v(e,r,!1);break;case"textarea":S(e),j(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?y(e,!!r.multiple,a,!1):r.defaultValue!=null&&y(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return It(t),null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=tr(ri.current),tr(pn.current),Xi(t)){if(r=t.stateNode,n=t.memoizedProps,r[dn]=t,(a=r.nodeValue!==n)&&(e=Gt,e!==null))switch(e.tag){case 3:Gi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gi(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=t,t.stateNode=r}return It(t),null;case 13:if(Ke(it),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Je&&Wt!==null&&t.mode&1&&!(t.flags&128))Ql(),xr(),t.flags|=98560,a=!1;else if(a=Xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(m(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(m(317));a[dn]=t}else xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;It(t),a=!1}else tn!==null&&(ca(tn),tn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||it.current&1?yt===0&&(yt=3):pa())),t.updateQueue!==null&&(t.flags|=4),It(t),null);case 4:return Lr(),bs(e,t),e===null&&Kr(t.stateNode.containerInfo),It(t),null;case 10:return Ls(t.type._context),It(t),null;case 17:return Ot(t.type)&&$i(),It(t),null;case 19:if(Ke(it),a=t.memoizedState,a===null)return It(t),null;if(r=(t.flags&128)!==0,h=a.rendering,h===null)if(r)li(a,!1);else{if(yt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(h=ro(e),h!==null){for(t.flags|=128,li(a,!1),r=h.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,h=a.alternate,h===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=h.childLanes,a.lanes=h.lanes,a.child=h.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=h.memoizedProps,a.memoizedState=h.memoizedState,a.updateQueue=h.updateQueue,a.type=h.type,e=h.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ze(it,it.current&1|2),t.child}e=e.sibling}a.tail!==null&&ct()>zr&&(t.flags|=128,r=!0,li(a,!1),t.lanes=4194304)}else{if(!r)if(e=ro(h),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),li(a,!0),a.tail===null&&a.tailMode==="hidden"&&!h.alternate&&!Je)return It(t),null}else 2*ct()-a.renderingStartTime>zr&&n!==1073741824&&(t.flags|=128,r=!0,li(a,!1),t.lanes=4194304);a.isBackwards?(h.sibling=t.child,t.child=h):(n=a.last,n!==null?n.sibling=h:t.child=h,a.last=h)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ct(),t.sibling=null,n=it.current,Ze(it,r?n&1|2:n&1),t):(It(t),null);case 22:case 23:return da(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qt&1073741824&&(It(t),t.subtreeFlags&6&&(t.flags|=8192)):It(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function Md(e,t){switch(Ts(t),t.tag){case 1:return Ot(t.type)&&$i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lr(),Ke(Nt),Ke(Dt),As(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Is(t),null;case 13:if(Ke(it),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ke(it),null;case 4:return Lr(),null;case 10:return Ls(t.type._context),null;case 22:case 23:return da(),null;case 24:return null;default:return null}}var po=!1,Ut=!1,Ed=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){at(e,t,r)}else n.current=null}function ea(e,t,n){try{n()}catch(r){at(e,t,r)}}var qu=!1;function Ld(e,t){if(ds=Ii,e=xl(),is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var h=0,x=-1,L=-1,V=0,ee=0,te=e,b=null;t:for(;;){for(var le;te!==n||i!==0&&te.nodeType!==3||(x=h+i),te!==a||r!==0&&te.nodeType!==3||(L=h+r),te.nodeType===3&&(h+=te.nodeValue.length),(le=te.firstChild)!==null;)b=te,te=le;for(;;){if(te===e)break t;if(b===n&&++V===i&&(x=h),b===a&&++ee===r&&(L=h),(le=te.nextSibling)!==null)break;te=b,b=te.parentNode}te=le}n=x===-1||L===-1?null:{start:x,end:L}}else n=null}n=n||{start:0,end:0}}else n=null;for(ps={focusedElem:e,selectionRange:n},Ii=!1,ce=t;ce!==null;)if(t=ce,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ce=e;else for(;ce!==null;){t=ce;try{var pe=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(pe!==null){var he=pe.memoizedProps,ft=pe.memoizedState,N=t.stateNode,z=N.getSnapshotBeforeUpdate(t.elementType===t.type?he:nn(t.type,he),ft);N.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var F=t.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(oe){at(t,t.return,oe)}if(e=t.sibling,e!==null){e.return=t.return,ce=e;break}ce=t.return}return pe=qu,qu=!1,pe}function ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ea(t,n,a)}i=i.next}while(i!==r)}}function ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ta(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $u(e){var t=e.alternate;t!==null&&(e.alternate=null,$u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dn],delete t[Jr],delete t[ys],delete t[ud],delete t[cd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qu(e){return e.tag===5||e.tag===3||e.tag===4}function Zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wi));else if(r!==4&&(e=e.child,e!==null))for(na(e,t,n),e=e.sibling;e!==null;)na(e,t,n),e=e.sibling}function ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ra(e,t,n),e=e.sibling;e!==null;)ra(e,t,n),e=e.sibling}var Et=null,rn=!1;function Vn(e,t,n){for(n=n.child;n!==null;)Yu(e,t,n),n=n.sibling}function Yu(e,t,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Ei,n)}catch{}switch(n.tag){case 5:Ut||Pr(n,t);case 6:var r=Et,i=rn;Et=null,Vn(e,t,n),Et=r,rn=i,Et!==null&&(rn?(e=Et,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Et.removeChild(n.stateNode));break;case 18:Et!==null&&(rn?(e=Et,n=n.stateNode,e.nodeType===8?gs(e.parentNode,n):e.nodeType===1&&gs(e,n),jr(e)):gs(Et,n.stateNode));break;case 4:r=Et,i=rn,Et=n.stateNode.containerInfo,rn=!0,Vn(e,t,n),Et=r,rn=i;break;case 0:case 11:case 14:case 15:if(!Ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,h=a.destroy;a=a.tag,h!==void 0&&(a&2||a&4)&&ea(n,t,h),i=i.next}while(i!==r)}Vn(e,t,n);break;case 1:if(!Ut&&(Pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(x){at(n,t,x)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(Ut=(r=Ut)||n.memoizedState!==null,Vn(e,t,n),Ut=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function Ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ed),t.forEach(function(r){var i=Nd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,h=t,x=h;e:for(;x!==null;){switch(x.tag){case 5:Et=x.stateNode,rn=!1;break e;case 3:Et=x.stateNode.containerInfo,rn=!0;break e;case 4:Et=x.stateNode.containerInfo,rn=!0;break e}x=x.return}if(Et===null)throw Error(m(160));Yu(a,h,i),Et=null,rn=!1;var L=i.alternate;L!==null&&(L.return=null),i.return=null}catch(V){at(i,t,V)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}function Xu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(t,e),mn(e),r&4){try{ui(3,e,e.return),ho(3,e)}catch(he){at(e,e.return,he)}try{ui(5,e,e.return)}catch(he){at(e,e.return,he)}}break;case 1:on(t,e),mn(e),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(on(t,e),mn(e),r&512&&n!==null&&Pr(n,n.return),e.flags&32){var i=e.stateNode;try{ue(i,"")}catch(he){at(e,e.return,he)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,h=n!==null?n.memoizedProps:a,x=e.type,L=e.updateQueue;if(e.updateQueue=null,L!==null)try{x==="input"&&a.type==="radio"&&a.name!=null&&l(i,a),ut(x,h);var V=ut(x,a);for(h=0;h<L.length;h+=2){var ee=L[h],te=L[h+1];ee==="style"?Qe(i,te):ee==="dangerouslySetInnerHTML"?Re(i,te):ee==="children"?ue(i,te):ye(i,ee,te,V)}switch(x){case"input":f(i,a);break;case"textarea":D(i,a);break;case"select":var b=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var le=a.value;le!=null?y(i,!!a.multiple,le,!1):b!==!!a.multiple&&(a.defaultValue!=null?y(i,!!a.multiple,a.defaultValue,!0):y(i,!!a.multiple,a.multiple?[]:"",!1))}i[Jr]=a}catch(he){at(e,e.return,he)}}break;case 6:if(on(t,e),mn(e),r&4){if(e.stateNode===null)throw Error(m(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(he){at(e,e.return,he)}}break;case 3:if(on(t,e),mn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(he){at(e,e.return,he)}break;case 4:on(t,e),mn(e);break;case 13:on(t,e),mn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(sa=ct())),r&4&&Ku(e);break;case 22:if(ee=n!==null&&n.memoizedState!==null,e.mode&1?(Ut=(V=Ut)||ee,on(t,e),Ut=V):on(t,e),mn(e),r&8192){if(V=e.memoizedState!==null,(e.stateNode.isHidden=V)&&!ee&&e.mode&1)for(ce=e,ee=e.child;ee!==null;){for(te=ce=ee;ce!==null;){switch(b=ce,le=b.child,b.tag){case 0:case 11:case 14:case 15:ui(4,b,b.return);break;case 1:Pr(b,b.return);var pe=b.stateNode;if(typeof pe.componentWillUnmount=="function"){r=b,n=b.return;try{t=r,pe.props=t.memoizedProps,pe.state=t.memoizedState,pe.componentWillUnmount()}catch(he){at(r,n,he)}}break;case 5:Pr(b,b.return);break;case 22:if(b.memoizedState!==null){ec(te);continue}}le!==null?(le.return=b,ce=le):ec(te)}ee=ee.sibling}e:for(ee=null,te=e;;){if(te.tag===5){if(ee===null){ee=te;try{i=te.stateNode,V?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(x=te.stateNode,L=te.memoizedProps.style,h=L!=null&&L.hasOwnProperty("display")?L.display:null,x.style.display=Ae("display",h))}catch(he){at(e,e.return,he)}}}else if(te.tag===6){if(ee===null)try{te.stateNode.nodeValue=V?"":te.memoizedProps}catch(he){at(e,e.return,he)}}else if((te.tag!==22&&te.tag!==23||te.memoizedState===null||te===e)&&te.child!==null){te.child.return=te,te=te.child;continue}if(te===e)break e;for(;te.sibling===null;){if(te.return===null||te.return===e)break e;ee===te&&(ee=null),te=te.return}ee===te&&(ee=null),te.sibling.return=te.return,te=te.sibling}}break;case 19:on(t,e),mn(e),r&4&&Ku(e);break;case 21:break;default:on(t,e),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qu(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ue(i,""),r.flags&=-33);var a=Zu(e);ra(e,a,i);break;case 3:case 4:var h=r.stateNode.containerInfo,x=Zu(e);na(e,x,h);break;default:throw Error(m(161))}}catch(L){at(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kd(e,t,n){ce=e,Ju(e)}function Ju(e,t,n){for(var r=(e.mode&1)!==0;ce!==null;){var i=ce,a=i.child;if(i.tag===22&&r){var h=i.memoizedState!==null||po;if(!h){var x=i.alternate,L=x!==null&&x.memoizedState!==null||Ut;x=po;var V=Ut;if(po=h,(Ut=L)&&!V)for(ce=i;ce!==null;)h=ce,L=h.child,h.tag===22&&h.memoizedState!==null?tc(i):L!==null?(L.return=h,ce=L):tc(i);for(;a!==null;)ce=a,Ju(a),a=a.sibling;ce=i,po=x,Ut=V}bu(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,ce=a):bu(e)}}function bu(e){for(;ce!==null;){var t=ce;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ut||ho(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ut)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&eu(t,a,r);break;case 3:var h=t.updateQueue;if(h!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}eu(t,h,n)}break;case 5:var x=t.stateNode;if(n===null&&t.flags&4){n=x;var L=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":L.autoFocus&&n.focus();break;case"img":L.src&&(n.src=L.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var V=t.alternate;if(V!==null){var ee=V.memoizedState;if(ee!==null){var te=ee.dehydrated;te!==null&&jr(te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}Ut||t.flags&512&&ta(t)}catch(b){at(t,t.return,b)}}if(t===e){ce=null;break}if(n=t.sibling,n!==null){n.return=t.return,ce=n;break}ce=t.return}}function ec(e){for(;ce!==null;){var t=ce;if(t===e){ce=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ce=n;break}ce=t.return}}function tc(e){for(;ce!==null;){var t=ce;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ho(4,t)}catch(L){at(t,n,L)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(L){at(t,i,L)}}var a=t.return;try{ta(t)}catch(L){at(t,a,L)}break;case 5:var h=t.return;try{ta(t)}catch(L){at(t,h,L)}}}catch(L){at(t,t.return,L)}if(t===e){ce=null;break}var x=t.sibling;if(x!==null){x.return=t.return,ce=x;break}ce=t.return}}var Pd=Math.ceil,mo=Me.ReactCurrentDispatcher,ia=Me.ReactCurrentOwner,Xt=Me.ReactCurrentBatchConfig,Ve=0,xt=null,mt=null,Lt=0,qt=0,Dr=On(0),yt=0,ci=null,rr=0,go=0,oa=0,fi=null,Ht=null,sa=0,zr=1/0,Ln=null,yo=!1,aa=null,Gn=null,vo=!1,Wn=null,wo=0,di=0,la=null,So=-1,To=0;function Ct(){return Ve&6?ct():So!==-1?So:So=ct()}function qn(e){return e.mode&1?Ve&2&&Lt!==0?Lt&-Lt:dd.transition!==null?(To===0&&(To=Za()),To):(e=qe,e!==0||(e=window.event,e=e===void 0?16:rl(e.type)),e):1}function sn(e,t,n,r){if(50<di)throw di=0,la=null,Error(m(185));Nr(e,n,r),(!(Ve&2)||e!==xt)&&(e===xt&&(!(Ve&2)&&(go|=n),yt===4&&$n(e,Lt)),Bt(e,r),n===1&&Ve===0&&!(t.mode&1)&&(zr=ct()+500,Zi&&Hn()))}function Bt(e,t){var n=e.callbackNode;df(e,t);var r=Pi(e,e===xt?Lt:0);if(r===0)n!==null&&qa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qa(n),t===1)e.tag===0?fd(rc.bind(null,e)):Vl(rc.bind(null,e)),ad(function(){!(Ve&6)&&Hn()}),n=null;else{switch(Ya(r)){case 1:n=jo;break;case 4:n=$a;break;case 16:n=Mi;break;case 536870912:n=Qa;break;default:n=Mi}n=fc(n,nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nc(e,t){if(So=-1,To=0,Ve&6)throw Error(m(327));var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var r=Pi(e,e===xt?Lt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_o(e,r);else{t=r;var i=Ve;Ve|=2;var a=oc();(xt!==e||Lt!==t)&&(Ln=null,zr=ct()+500,or(e,t));do try{Id();break}catch(x){ic(e,x)}while(!0);Es(),mo.current=a,Ve=i,mt!==null?t=0:(xt=null,Lt=0,t=yt)}if(t!==0){if(t===2&&(i=Vo(e),i!==0&&(r=i,t=ua(e,i))),t===1)throw n=ci,or(e,0),$n(e,r),Bt(e,ct()),n;if(t===6)$n(e,r);else{if(i=e.current.alternate,!(r&30)&&!Dd(i)&&(t=_o(e,r),t===2&&(a=Vo(e),a!==0&&(r=a,t=ua(e,a))),t===1))throw n=ci,or(e,0),$n(e,r),Bt(e,ct()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:sr(e,Ht,Ln);break;case 3:if($n(e,r),(r&130023424)===r&&(t=sa+500-ct(),10<t)){if(Pi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ct(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ms(sr.bind(null,e,Ht,Ln),t);break}sr(e,Ht,Ln);break;case 4:if($n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var h=31-bt(r);a=1<<h,h=t[h],h>i&&(i=h),r&=~a}if(r=i,r=ct()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pd(r/1960))-r,10<r){e.timeoutHandle=ms(sr.bind(null,e,Ht,Ln),r);break}sr(e,Ht,Ln);break;case 5:sr(e,Ht,Ln);break;default:throw Error(m(329))}}}return Bt(e,ct()),e.callbackNode===n?nc.bind(null,e):null}function ua(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(or(e,t).flags|=256),e=_o(e,t),e!==2&&(t=Ht,Ht=n,t!==null&&ca(t)),e}function ca(e){Ht===null?Ht=e:Ht.push.apply(Ht,e)}function Dd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!en(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t){for(t&=~oa,t&=~go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function rc(e){if(Ve&6)throw Error(m(327));Ir();var t=Pi(e,0);if(!(t&1))return Bt(e,ct()),null;var n=_o(e,t);if(e.tag!==0&&n===2){var r=Vo(e);r!==0&&(t=r,n=ua(e,r))}if(n===1)throw n=ci,or(e,0),$n(e,t),Bt(e,ct()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sr(e,Ht,Ln),Bt(e,ct()),null}function fa(e,t){var n=Ve;Ve|=1;try{return e(t)}finally{Ve=n,Ve===0&&(zr=ct()+500,Zi&&Hn())}}function ir(e){Wn!==null&&Wn.tag===0&&!(Ve&6)&&Ir();var t=Ve;Ve|=1;var n=Xt.transition,r=qe;try{if(Xt.transition=null,qe=1,e)return e()}finally{qe=r,Xt.transition=n,Ve=t,!(Ve&6)&&Hn()}}function da(){qt=Dr.current,Ke(Dr)}function or(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sd(n)),mt!==null)for(n=mt.return;n!==null;){var r=n;switch(Ts(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$i();break;case 3:Lr(),Ke(Nt),Ke(Dt),As();break;case 5:Is(r);break;case 4:Lr();break;case 13:Ke(it);break;case 19:Ke(it);break;case 10:Ls(r.type._context);break;case 22:case 23:da()}n=n.return}if(xt=e,mt=e=Qn(e.current,null),Lt=qt=t,yt=0,ci=null,oa=go=rr=0,Ht=fi=null,er!==null){for(t=0;t<er.length;t++)if(n=er[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var h=a.next;a.next=i,r.next=h}n.pending=r}er=null}return e}function ic(e,t){do{var n=mt;try{if(Es(),io.current=lo,oo){for(var r=ot.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oo=!1}if(nr=0,_t=gt=ot=null,ii=!1,oi=0,ia.current=null,n===null||n.return===null){yt=1,ci=t,mt=null;break}e:{var a=e,h=n.return,x=n,L=t;if(t=Lt,x.flags|=32768,L!==null&&typeof L=="object"&&typeof L.then=="function"){var V=L,ee=x,te=ee.tag;if(!(ee.mode&1)&&(te===0||te===11||te===15)){var b=ee.alternate;b?(ee.updateQueue=b.updateQueue,ee.memoizedState=b.memoizedState,ee.lanes=b.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var le=Pu(h);if(le!==null){le.flags&=-257,Du(le,h,x,a,t),le.mode&1&&ku(a,V,t),t=le,L=V;var pe=t.updateQueue;if(pe===null){var he=new Set;he.add(L),t.updateQueue=he}else pe.add(L);break e}else{if(!(t&1)){ku(a,V,t),pa();break e}L=Error(m(426))}}else if(Je&&x.mode&1){var ft=Pu(h);if(ft!==null){!(ft.flags&65536)&&(ft.flags|=256),Du(ft,h,x,a,t),Rs(kr(L,x));break e}}a=L=kr(L,x),yt!==4&&(yt=2),fi===null?fi=[a]:fi.push(a),a=h;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var N=Eu(a,L,t);bl(a,N);break e;case 1:x=L;var z=a.type,F=a.stateNode;if(!(a.flags&128)&&(typeof z.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Gn===null||!Gn.has(F)))){a.flags|=65536,t&=-t,a.lanes|=t;var oe=Lu(a,x,t);bl(a,oe);break e}}a=a.return}while(a!==null)}ac(n)}catch(ge){t=ge,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(!0)}function oc(){var e=mo.current;return mo.current=lo,e===null?lo:e}function pa(){(yt===0||yt===3||yt===2)&&(yt=4),xt===null||!(rr&268435455)&&!(go&268435455)||$n(xt,Lt)}function _o(e,t){var n=Ve;Ve|=2;var r=oc();(xt!==e||Lt!==t)&&(Ln=null,or(e,t));do try{zd();break}catch(i){ic(e,i)}while(!0);if(Es(),Ve=n,mo.current=r,mt!==null)throw Error(m(261));return xt=null,Lt=0,yt}function zd(){for(;mt!==null;)sc(mt)}function Id(){for(;mt!==null&&!nf();)sc(mt)}function sc(e){var t=cc(e.alternate,e,qt);e.memoizedProps=e.pendingProps,t===null?ac(e):mt=t,ia.current=null}function ac(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Md(n,t),n!==null){n.flags&=32767,mt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yt=6,mt=null;return}}else if(n=Rd(n,t,qt),n!==null){mt=n;return}if(t=t.sibling,t!==null){mt=t;return}mt=t=e}while(t!==null);yt===0&&(yt=5)}function sr(e,t,n){var r=qe,i=Xt.transition;try{Xt.transition=null,qe=1,Ud(e,t,n,r)}finally{Xt.transition=i,qe=r}return null}function Ud(e,t,n,r){do Ir();while(Wn!==null);if(Ve&6)throw Error(m(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(pf(e,a),e===xt&&(mt=xt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,fc(Mi,function(){return Ir(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Xt.transition,Xt.transition=null;var h=qe;qe=1;var x=Ve;Ve|=4,ia.current=null,Ld(e,n),Xu(n,e),bf(ps),Ii=!!ds,ps=ds=null,e.current=n,kd(n),rf(),Ve=x,qe=h,Xt.transition=a}else e.current=n;if(vo&&(vo=!1,Wn=e,wo=i),a=e.pendingLanes,a===0&&(Gn=null),af(n.stateNode),Bt(e,ct()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yo)throw yo=!1,e=aa,aa=null,e;return wo&1&&e.tag!==0&&Ir(),a=e.pendingLanes,a&1?e===la?di++:(di=0,la=e):di=0,Hn(),null}function Ir(){if(Wn!==null){var e=Ya(wo),t=Xt.transition,n=qe;try{if(Xt.transition=null,qe=16>e?16:e,Wn===null)var r=!1;else{if(e=Wn,Wn=null,wo=0,Ve&6)throw Error(m(331));var i=Ve;for(Ve|=4,ce=e.current;ce!==null;){var a=ce,h=a.child;if(ce.flags&16){var x=a.deletions;if(x!==null){for(var L=0;L<x.length;L++){var V=x[L];for(ce=V;ce!==null;){var ee=ce;switch(ee.tag){case 0:case 11:case 15:ui(8,ee,a)}var te=ee.child;if(te!==null)te.return=ee,ce=te;else for(;ce!==null;){ee=ce;var b=ee.sibling,le=ee.return;if($u(ee),ee===V){ce=null;break}if(b!==null){b.return=le,ce=b;break}ce=le}}}var pe=a.alternate;if(pe!==null){var he=pe.child;if(he!==null){pe.child=null;do{var ft=he.sibling;he.sibling=null,he=ft}while(he!==null)}}ce=a}}if(a.subtreeFlags&2064&&h!==null)h.return=a,ce=h;else e:for(;ce!==null;){if(a=ce,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ui(9,a,a.return)}var N=a.sibling;if(N!==null){N.return=a.return,ce=N;break e}ce=a.return}}var z=e.current;for(ce=z;ce!==null;){h=ce;var F=h.child;if(h.subtreeFlags&2064&&F!==null)F.return=h,ce=F;else e:for(h=z;ce!==null;){if(x=ce,x.flags&2048)try{switch(x.tag){case 0:case 11:case 15:ho(9,x)}}catch(ge){at(x,x.return,ge)}if(x===h){ce=null;break e}var oe=x.sibling;if(oe!==null){oe.return=x.return,ce=oe;break e}ce=x.return}}if(Ve=i,Hn(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Ei,e)}catch{}r=!0}return r}finally{qe=n,Xt.transition=t}}return!1}function lc(e,t,n){t=kr(n,t),t=Eu(e,t,1),e=jn(e,t,1),t=Ct(),e!==null&&(Nr(e,1,t),Bt(e,t))}function at(e,t,n){if(e.tag===3)lc(e,e,n);else for(;t!==null;){if(t.tag===3){lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){e=kr(n,e),e=Lu(t,e,1),t=jn(t,e,1),e=Ct(),t!==null&&(Nr(t,1,e),Bt(t,e));break}}t=t.return}}function Ad(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ct(),e.pingedLanes|=e.suspendedLanes&n,xt===e&&(Lt&n)===n&&(yt===4||yt===3&&(Lt&130023424)===Lt&&500>ct()-sa?or(e,0):oa|=n),Bt(e,t)}function uc(e,t){t===0&&(e.mode&1?(t=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):t=1);var n=Ct();e=Rn(e,t),e!==null&&(Nr(e,t,n),Bt(e,n))}function Cd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uc(e,n)}function Nd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),uc(e,n)}var cc;cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Nt.current)Ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ft=!1,xd(e,t,n);Ft=!!(e.flags&131072)}else Ft=!1,Je&&t.flags&1048576&&Gl(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var i=Sr(t,Dt.current);Er(t,n),i=Os(null,t,r,e,i,n);var a=Fs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ot(r)?(a=!0,Qi(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ds(t),i.updater=uo,t.stateNode=i,i._reactInternals=t,Ws(t,r,e,n),t=Zs(null,t,r,!0,a,n)):(t.tag=0,Je&&a&&Ss(t),At(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fd(r),e=nn(r,e),i){case 0:t=Qs(null,t,r,e,n);break e;case 1:t=Nu(null,t,r,e,n);break e;case 11:t=zu(null,t,r,e,n);break e;case 14:t=Iu(null,t,r,nn(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),Qs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),Nu(e,t,r,i,n);case 3:e:{if(Ou(t),e===null)throw Error(m(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Jl(e,t),no(t,r,null,n);var h=t.memoizedState;if(r=h.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=kr(Error(m(423)),t),t=Fu(e,t,r,n,i);break e}else if(r!==i){i=kr(Error(m(424)),t),t=Fu(e,t,r,n,i);break e}else for(Wt=Nn(t.stateNode.containerInfo.firstChild),Gt=t,Je=!0,tn=null,n=Kl(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===i){t=En(e,t,n);break e}At(e,t,r,n)}t=t.child}return t;case 5:return tu(t),e===null&&xs(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,h=i.children,hs(r,i)?h=null:a!==null&&hs(r,a)&&(t.flags|=32),Cu(e,t),At(e,t,h,n),t.child;case 6:return e===null&&xs(t),null;case 13:return Hu(e,t,n);case 4:return zs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rr(t,null,r,n):At(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),zu(e,t,r,i,n);case 7:return At(e,t,t.pendingProps,n),t.child;case 8:return At(e,t,t.pendingProps.children,n),t.child;case 12:return At(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,h=i.value,Ze(bi,r._currentValue),r._currentValue=h,a!==null)if(en(a.value,h)){if(a.children===i.children&&!Nt.current){t=En(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var x=a.dependencies;if(x!==null){h=a.child;for(var L=x.firstContext;L!==null;){if(L.context===r){if(a.tag===1){L=Mn(-1,n&-n),L.tag=2;var V=a.updateQueue;if(V!==null){V=V.shared;var ee=V.pending;ee===null?L.next=L:(L.next=ee.next,ee.next=L),V.pending=L}}a.lanes|=n,L=a.alternate,L!==null&&(L.lanes|=n),ks(a.return,n,t),x.lanes|=n;break}L=L.next}}else if(a.tag===10)h=a.type===t.type?null:a.child;else if(a.tag===18){if(h=a.return,h===null)throw Error(m(341));h.lanes|=n,x=h.alternate,x!==null&&(x.lanes|=n),ks(h,n,t),h=a.sibling}else h=a.child;if(h!==null)h.return=a;else for(h=a;h!==null;){if(h===t){h=null;break}if(a=h.sibling,a!==null){a.return=h.return,h=a;break}h=h.return}a=h}At(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Er(t,n),i=Yt(i),r=r(i),t.flags|=1,At(e,t,r,n),t.child;case 14:return r=t.type,i=nn(r,t.pendingProps),i=nn(r.type,i),Iu(e,t,r,i,n);case 15:return Uu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),fo(e,t),t.tag=1,Ot(r)?(e=!0,Qi(t)):e=!1,Er(t,n),Ru(t,r,i),Ws(t,r,i,n),Zs(null,t,r,!0,e,n);case 19:return ju(e,t,n);case 22:return Au(e,t,n)}throw Error(m(156,t.tag))};function fc(e,t){return Wa(e,t)}function Od(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,r){return new Od(e,t,n,r)}function ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fd(e){if(typeof e=="function")return ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ee)return 11;if(e===st)return 14}return 2}function Qn(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xo(e,t,n,r,i,a){var h=2;if(r=e,typeof e=="function")ha(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case Oe:return ar(n.children,i,a,t);case Be:h=8,i|=8;break;case Fe:return e=Jt(12,n,t,i|2),e.elementType=Fe,e.lanes=a,e;case De:return e=Jt(13,n,t,i),e.elementType=De,e.lanes=a,e;case xe:return e=Jt(19,n,t,i),e.elementType=xe,e.lanes=a,e;case je:return Ro(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case He:h=10;break e;case et:h=9;break e;case Ee:h=11;break e;case st:h=14;break e;case We:h=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=Jt(h,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function ar(e,t,n,r){return e=Jt(7,e,r,t),e.lanes=n,e}function Ro(e,t,n,r){return e=Jt(22,e,r,t),e.elementType=je,e.lanes=n,e.stateNode={isHidden:!1},e}function ma(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function ga(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hd(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ya(e,t,n,r,i,a,h,x,L){return e=new Hd(e,t,n,x,L),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Jt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ds(a),e}function Bd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dc(e){if(!e)return Fn;e=e._reactInternals;e:{if(Xe(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(Ot(n))return Bl(e,n,t)}return t}function pc(e,t,n,r,i,a,h,x,L){return e=ya(n,r,!0,e,i,a,h,x,L),e.context=dc(null),n=e.current,r=Ct(),i=qn(n),a=Mn(r,i),a.callback=t??null,jn(n,a,i),e.current.lanes=i,Nr(e,i,r),Bt(e,r),e}function Mo(e,t,n,r){var i=t.current,a=Ct(),h=qn(i);return n=dc(n),t.context===null?t.context=n:t.pendingContext=n,t=Mn(a,h),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jn(i,t,h),e!==null&&(sn(e,i,h,a),to(e,i,h)),h}function Eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function va(e,t){hc(e,t),(e=e.alternate)&&hc(e,t)}var mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function wa(e){this._internalRoot=e}Lo.prototype.render=wa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));Mo(e,t,null,null)},Lo.prototype.unmount=wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ir(function(){Mo(null,e,null,null)}),t[Sn]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ja();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&tl(e)}};function Sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gc(){}function jd(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var V=Eo(h);a.call(V)}}var h=pc(t,r,e,0,null,!1,!1,"",gc);return e._reactRootContainer=h,e[Sn]=h.current,Kr(e.nodeType===8?e.parentNode:e),ir(),h}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var x=r;r=function(){var V=Eo(L);x.call(V)}}var L=ya(e,0,!1,null,null,!1,!1,"",gc);return e._reactRootContainer=L,e[Sn]=L.current,Kr(e.nodeType===8?e.parentNode:e),ir(function(){Mo(t,L,n,r)}),L}function Po(e,t,n,r,i){var a=n._reactRootContainer;if(a){var h=a;if(typeof i=="function"){var x=i;i=function(){var L=Eo(h);x.call(L)}}Mo(t,h,e,i)}else h=jd(n,t,e,i,r);return Eo(h)}Ka=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cr(t.pendingLanes);n!==0&&(Wo(t,n|1),Bt(t,ct()),!(Ve&6)&&(zr=ct()+500,Hn()))}break;case 13:ir(function(){var r=Rn(e,1);if(r!==null){var i=Ct();sn(r,e,1,i)}}),va(e,1)}},qo=function(e){if(e.tag===13){var t=Rn(e,134217728);if(t!==null){var n=Ct();sn(t,e,134217728,n)}va(e,134217728)}},Xa=function(e){if(e.tag===13){var t=qn(e),n=Rn(e,t);if(n!==null){var r=Ct();sn(n,e,t,r)}va(e,t)}},Ja=function(){return qe},ba=function(e,t){var n=qe;try{return qe=e,t()}finally{qe=n}},ht=function(e,t,n){switch(t){case"input":if(f(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qi(r);if(!i)throw Error(m(90));M(r),f(r,i)}}}break;case"textarea":D(e,n);break;case"select":t=n.value,t!=null&&y(e,!!n.multiple,t,!1)}},Tt=fa,kt=ir;var Vd={usingClientEntryPoint:!1,Events:[br,vr,qi,wt,St,fa]},pi={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gd={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Me.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Va(e),e===null?null:e.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Do=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Do.isDisabled&&Do.supportsFiber)try{Ei=Do.inject(Gd),fn=Do}catch{}}return jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vd,jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sa(t))throw Error(m(200));return Bd(e,t,null,n)},jt.createRoot=function(e,t){if(!Sa(e))throw Error(m(299));var n=!1,r="",i=mc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ya(e,1,!1,null,null,n,!1,r,i),e[Sn]=t.current,Kr(e.nodeType===8?e.parentNode:e),new wa(t)},jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=Va(t),e=e===null?null:e.stateNode,e},jt.flushSync=function(e){return ir(e)},jt.hydrate=function(e,t,n){if(!ko(t))throw Error(m(200));return Po(null,e,t,!0,n)},jt.hydrateRoot=function(e,t,n){if(!Sa(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",h=mc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),t=pc(t,null,e,1,n??null,i,!1,a,h),e[Sn]=t.current,Kr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Lo(t)},jt.render=function(e,t,n){if(!ko(t))throw Error(m(200));return Po(null,e,t,!1,n)},jt.unmountComponentAtNode=function(e){if(!ko(e))throw Error(m(40));return e._reactRootContainer?(ir(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[Sn]=null})}),!0):!1},jt.unstable_batchedUpdates=fa,jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ko(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return Po(e,t,n,!1,r)},jt.version="18.3.1-next-f1338f8080-20240426",jt}var Rc;function bd(){if(Rc)return xa.exports;Rc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(p){console.error(p)}}return o(),xa.exports=Jd(),xa.exports}var Mc;function ep(){if(Mc)return zo;Mc=1;var o=bd();return zo.createRoot=o.createRoot,zo.hydrateRoot=o.hydrateRoot,zo}var tp=ep(),mi={},Ec;function np(){if(Ec)return mi;Ec=1,Object.defineProperty(mi,"__esModule",{value:!0}),mi.parse=U,mi.serialize=C;const o=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,p=/^[\u0021-\u003A\u003C-\u007E]*$/,m=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,R=/^[\u0020-\u003A\u003D-\u007E]*$/,T=Object.prototype.toString,E=(()=>{const $=function(){};return $.prototype=Object.create(null),$})();function U($,ne){const Z=new E,Y=$.length;if(Y<2)return Z;const J=(ne==null?void 0:ne.decode)||K;let re=0;do{const ae=$.indexOf("=",re);if(ae===-1)break;const ye=$.indexOf(";",re),Me=ye===-1?Y:ye;if(ae>Me){re=$.lastIndexOf(";",ae-1)+1;continue}const Ie=O($,re,ae),Ne=I($,ae,Ie),Oe=$.slice(Ie,Ne);if(Z[Oe]===void 0){let Be=O($,ae+1,Me),Fe=I($,Me,Be);const He=J($.slice(Be,Fe));Z[Oe]=He}re=Me+1}while(re<Y);return Z}function O($,ne,Z){do{const Y=$.charCodeAt(ne);if(Y!==32&&Y!==9)return ne}while(++ne<Z);return Z}function I($,ne,Z){for(;ne>Z;){const Y=$.charCodeAt(--ne);if(Y!==32&&Y!==9)return ne+1}return Z}function C($,ne,Z){const Y=(Z==null?void 0:Z.encode)||encodeURIComponent;if(!o.test($))throw new TypeError(`argument name is invalid: ${$}`);const J=Y(ne);if(!p.test(J))throw new TypeError(`argument val is invalid: ${ne}`);let re=$+"="+J;if(!Z)return re;if(Z.maxAge!==void 0){if(!Number.isInteger(Z.maxAge))throw new TypeError(`option maxAge is invalid: ${Z.maxAge}`);re+="; Max-Age="+Z.maxAge}if(Z.domain){if(!m.test(Z.domain))throw new TypeError(`option domain is invalid: ${Z.domain}`);re+="; Domain="+Z.domain}if(Z.path){if(!R.test(Z.path))throw new TypeError(`option path is invalid: ${Z.path}`);re+="; Path="+Z.path}if(Z.expires){if(!X(Z.expires)||!Number.isFinite(Z.expires.valueOf()))throw new TypeError(`option expires is invalid: ${Z.expires}`);re+="; Expires="+Z.expires.toUTCString()}if(Z.httpOnly&&(re+="; HttpOnly"),Z.secure&&(re+="; Secure"),Z.partitioned&&(re+="; Partitioned"),Z.priority)switch(typeof Z.priority=="string"?Z.priority.toLowerCase():void 0){case"low":re+="; Priority=Low";break;case"medium":re+="; Priority=Medium";break;case"high":re+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${Z.priority}`)}if(Z.sameSite)switch(typeof Z.sameSite=="string"?Z.sameSite.toLowerCase():Z.sameSite){case!0:case"strict":re+="; SameSite=Strict";break;case"lax":re+="; SameSite=Lax";break;case"none":re+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${Z.sameSite}`)}return re}function K($){if($.indexOf("%")===-1)return $;try{return decodeURIComponent($)}catch{return $}}function X($){return T.call($)==="[object Date]"}return mi}np();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lc="popstate";function rp(o={}){function p(T,E){let{pathname:U="/",search:O="",hash:I=""}=lr(T.location.hash.substring(1));return!U.startsWith("/")&&!U.startsWith(".")&&(U="/"+U),ka("",{pathname:U,search:O,hash:I},E.state&&E.state.usr||null,E.state&&E.state.key||"default")}function m(T,E){let U=T.document.querySelector("base"),O="";if(U&&U.getAttribute("href")){let I=T.location.href,C=I.indexOf("#");O=C===-1?I:I.slice(0,C)}return O+"#"+(typeof E=="string"?E:vi(E))}function R(T,E){$t(T.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(E)})`)}return op(p,m,R,o)}function be(o,p){if(o===!1||o===null||typeof o>"u")throw new Error(p)}function $t(o,p){if(!o){typeof console<"u"&&console.warn(p);try{throw new Error(p)}catch{}}}function ip(){return Math.random().toString(36).substring(2,10)}function kc(o,p){return{usr:o.state,key:o.key,idx:p}}function ka(o,p,m=null,R){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof p=="string"?lr(p):p,state:m,key:p&&p.key||R||ip()}}function vi({pathname:o="/",search:p="",hash:m=""}){return p&&p!=="?"&&(o+=p.charAt(0)==="?"?p:"?"+p),m&&m!=="#"&&(o+=m.charAt(0)==="#"?m:"#"+m),o}function lr(o){let p={};if(o){let m=o.indexOf("#");m>=0&&(p.hash=o.substring(m),o=o.substring(0,m));let R=o.indexOf("?");R>=0&&(p.search=o.substring(R),o=o.substring(0,R)),o&&(p.pathname=o)}return p}function op(o,p,m,R={}){let{window:T=document.defaultView,v5Compat:E=!1}=R,U=T.history,O="POP",I=null,C=K();C==null&&(C=0,U.replaceState({...U.state,idx:C},""));function K(){return(U.state||{idx:null}).idx}function X(){O="POP";let J=K(),re=J==null?null:J-C;C=J,I&&I({action:O,location:Y.location,delta:re})}function $(J,re){O="PUSH";let ae=ka(Y.location,J,re);m(ae,J),C=K()+1;let ye=kc(ae,C),Me=Y.createHref(ae);try{U.pushState(ye,"",Me)}catch(Ie){if(Ie instanceof DOMException&&Ie.name==="DataCloneError")throw Ie;T.location.assign(Me)}E&&I&&I({action:O,location:Y.location,delta:1})}function ne(J,re){O="REPLACE";let ae=ka(Y.location,J,re);m(ae,J),C=K();let ye=kc(ae,C),Me=Y.createHref(ae);U.replaceState(ye,"",Me),E&&I&&I({action:O,location:Y.location,delta:0})}function Z(J){let re=T.location.origin!=="null"?T.location.origin:T.location.href,ae=typeof J=="string"?J:vi(J);return ae=ae.replace(/ $/,"%20"),be(re,`No window.location.(origin|href) available to create URL for href: ${ae}`),new URL(ae,re)}let Y={get action(){return O},get location(){return o(T,U)},listen(J){if(I)throw new Error("A history only accepts one active listener");return T.addEventListener(Lc,X),I=J,()=>{T.removeEventListener(Lc,X),I=null}},createHref(J){return p(T,J)},createURL:Z,encodeLocation(J){let re=Z(J);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:$,replace:ne,go(J){return U.go(J)}};return Y}function Bc(o,p,m="/"){return sp(o,p,m,!1)}function sp(o,p,m,R){let T=typeof p=="string"?lr(p):p,E=Yn(T.pathname||"/",m);if(E==null)return null;let U=jc(o);ap(U);let O=null;for(let I=0;O==null&&I<U.length;++I){let C=vp(E);O=gp(U[I],C,R)}return O}function jc(o,p=[],m=[],R=""){let T=(E,U,O)=>{let I={relativePath:O===void 0?E.path||"":O,caseSensitive:E.caseSensitive===!0,childrenIndex:U,route:E};I.relativePath.startsWith("/")&&(be(I.relativePath.startsWith(R),`Absolute route path "${I.relativePath}" nested under path "${R}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),I.relativePath=I.relativePath.slice(R.length));let C=kn([R,I.relativePath]),K=m.concat(I);E.children&&E.children.length>0&&(be(E.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${C}".`),jc(E.children,p,K,C)),!(E.path==null&&!E.index)&&p.push({path:C,score:hp(C,E.index),routesMeta:K})};return o.forEach((E,U)=>{var O;if(E.path===""||!((O=E.path)!=null&&O.includes("?")))T(E,U);else for(let I of Vc(E.path))T(E,U,I)}),p}function Vc(o){let p=o.split("/");if(p.length===0)return[];let[m,...R]=p,T=m.endsWith("?"),E=m.replace(/\?$/,"");if(R.length===0)return T?[E,""]:[E];let U=Vc(R.join("/")),O=[];return O.push(...U.map(I=>I===""?E:[E,I].join("/"))),T&&O.push(...U),O.map(I=>o.startsWith("/")&&I===""?"/":I)}function ap(o){o.sort((p,m)=>p.score!==m.score?m.score-p.score:mp(p.routesMeta.map(R=>R.childrenIndex),m.routesMeta.map(R=>R.childrenIndex)))}var lp=/^:[\w-]+$/,up=3,cp=2,fp=1,dp=10,pp=-2,Pc=o=>o==="*";function hp(o,p){let m=o.split("/"),R=m.length;return m.some(Pc)&&(R+=pp),p&&(R+=cp),m.filter(T=>!Pc(T)).reduce((T,E)=>T+(lp.test(E)?up:E===""?fp:dp),R)}function mp(o,p){return o.length===p.length&&o.slice(0,-1).every((R,T)=>R===p[T])?o[o.length-1]-p[p.length-1]:0}function gp(o,p,m=!1){let{routesMeta:R}=o,T={},E="/",U=[];for(let O=0;O<R.length;++O){let I=R[O],C=O===R.length-1,K=E==="/"?p:p.slice(E.length)||"/",X=Oo({path:I.relativePath,caseSensitive:I.caseSensitive,end:C},K),$=I.route;if(!X&&C&&m&&!R[R.length-1].route.index&&(X=Oo({path:I.relativePath,caseSensitive:I.caseSensitive,end:!1},K)),!X)return null;Object.assign(T,X.params),U.push({params:T,pathname:kn([E,X.pathname]),pathnameBase:_p(kn([E,X.pathnameBase])),route:$}),X.pathnameBase!=="/"&&(E=kn([E,X.pathnameBase]))}return U}function Oo(o,p){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[m,R]=yp(o.path,o.caseSensitive,o.end),T=p.match(m);if(!T)return null;let E=T[0],U=E.replace(/(.)\/+$/,"$1"),O=T.slice(1);return{params:R.reduce((C,{paramName:K,isOptional:X},$)=>{if(K==="*"){let Z=O[$]||"";U=E.slice(0,E.length-Z.length).replace(/(.)\/+$/,"$1")}const ne=O[$];return X&&!ne?C[K]=void 0:C[K]=(ne||"").replace(/%2F/g,"/"),C},{}),pathname:E,pathnameBase:U,pattern:o}}function yp(o,p=!1,m=!0){$t(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let R=[],T="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(U,O,I)=>(R.push({paramName:O,isOptional:I!=null}),I?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(R.push({paramName:"*"}),T+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):m?T+="\\/*$":o!==""&&o!=="/"&&(T+="(?:(?=\\/|$))"),[new RegExp(T,p?void 0:"i"),R]}function vp(o){try{return o.split("/").map(p=>decodeURIComponent(p).replace(/\//g,"%2F")).join("/")}catch(p){return $t(!1,`The URL path "${o}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${p}).`),o}}function Yn(o,p){if(p==="/")return o;if(!o.toLowerCase().startsWith(p.toLowerCase()))return null;let m=p.endsWith("/")?p.length-1:p.length,R=o.charAt(m);return R&&R!=="/"?null:o.slice(m)||"/"}function wp(o,p="/"){let{pathname:m,search:R="",hash:T=""}=typeof o=="string"?lr(o):o;return{pathname:m?m.startsWith("/")?m:Sp(m,p):p,search:xp(R),hash:Rp(T)}}function Sp(o,p){let m=p.replace(/\/+$/,"").split("/");return o.split("/").forEach(T=>{T===".."?m.length>1&&m.pop():T!=="."&&m.push(T)}),m.length>1?m.join("/"):"/"}function Ea(o,p,m,R){return`Cannot include a '${o}' character in a manually specified \`to.${p}\` field [${JSON.stringify(R)}].  Please separate it out to the \`to.${m}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tp(o){return o.filter((p,m)=>m===0||p.route.path&&p.route.path.length>0)}function Ia(o){let p=Tp(o);return p.map((m,R)=>R===p.length-1?m.pathname:m.pathnameBase)}function Ua(o,p,m,R=!1){let T;typeof o=="string"?T=lr(o):(T={...o},be(!T.pathname||!T.pathname.includes("?"),Ea("?","pathname","search",T)),be(!T.pathname||!T.pathname.includes("#"),Ea("#","pathname","hash",T)),be(!T.search||!T.search.includes("#"),Ea("#","search","hash",T)));let E=o===""||T.pathname==="",U=E?"/":T.pathname,O;if(U==null)O=m;else{let X=p.length-1;if(!R&&U.startsWith("..")){let $=U.split("/");for(;$[0]==="..";)$.shift(),X-=1;T.pathname=$.join("/")}O=X>=0?p[X]:"/"}let I=wp(T,O),C=U&&U!=="/"&&U.endsWith("/"),K=(E||U===".")&&m.endsWith("/");return!I.pathname.endsWith("/")&&(C||K)&&(I.pathname+="/"),I}var kn=o=>o.join("/").replace(/\/\/+/g,"/"),_p=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),xp=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Rp=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Mp(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var Gc=["POST","PUT","PATCH","DELETE"];new Set(Gc);var Ep=["GET",...Gc];new Set(Ep);var Ur=W.createContext(null);Ur.displayName="DataRouter";var Fo=W.createContext(null);Fo.displayName="DataRouterState";var Wc=W.createContext({isTransitioning:!1});Wc.displayName="ViewTransition";var Lp=W.createContext(new Map);Lp.displayName="Fetchers";var kp=W.createContext(null);kp.displayName="Await";var an=W.createContext(null);an.displayName="Navigation";var wi=W.createContext(null);wi.displayName="Location";var gn=W.createContext({outlet:null,matches:[],isDataRoute:!1});gn.displayName="Route";var Aa=W.createContext(null);Aa.displayName="RouteError";function Pp(o,{relative:p}={}){be(Ar(),"useHref() may be used only in the context of a <Router> component.");let{basename:m,navigator:R}=W.useContext(an),{hash:T,pathname:E,search:U}=Ti(o,{relative:p}),O=E;return m!=="/"&&(O=E==="/"?m:kn([m,E])),R.createHref({pathname:O,search:U,hash:T})}function Ar(){return W.useContext(wi)!=null}function yn(){return be(Ar(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(wi).location}var qc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $c(o){W.useContext(an).static||W.useLayoutEffect(o)}function Si(){let{isDataRoute:o}=W.useContext(gn);return o?Vp():Dp()}function Dp(){be(Ar(),"useNavigate() may be used only in the context of a <Router> component.");let o=W.useContext(Ur),{basename:p,navigator:m}=W.useContext(an),{matches:R}=W.useContext(gn),{pathname:T}=yn(),E=JSON.stringify(Ia(R)),U=W.useRef(!1);return $c(()=>{U.current=!0}),W.useCallback((I,C={})=>{if($t(U.current,qc),!U.current)return;if(typeof I=="number"){m.go(I);return}let K=Ua(I,JSON.parse(E),T,C.relative==="path");o==null&&p!=="/"&&(K.pathname=K.pathname==="/"?p:kn([p,K.pathname])),(C.replace?m.replace:m.push)(K,C.state,C)},[p,m,E,T,o])}W.createContext(null);function Ti(o,{relative:p}={}){let{matches:m}=W.useContext(gn),{pathname:R}=yn(),T=JSON.stringify(Ia(m));return W.useMemo(()=>Ua(o,JSON.parse(T),R,p==="path"),[o,T,R,p])}function zp(o,p){return Qc(o,p)}function Qc(o,p,m,R){var re;be(Ar(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:T}=W.useContext(an),{matches:E}=W.useContext(gn),U=E[E.length-1],O=U?U.params:{},I=U?U.pathname:"/",C=U?U.pathnameBase:"/",K=U&&U.route;{let ae=K&&K.path||"";Zc(I,!K||ae.endsWith("*")||ae.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${I}" (under <Route path="${ae}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${ae}"> to <Route path="${ae==="/"?"*":`${ae}/*`}">.`)}let X=yn(),$;if(p){let ae=typeof p=="string"?lr(p):p;be(C==="/"||((re=ae.pathname)==null?void 0:re.startsWith(C)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${ae.pathname}" was given in the \`location\` prop.`),$=ae}else $=X;let ne=$.pathname||"/",Z=ne;if(C!=="/"){let ae=C.replace(/^\//,"").split("/");Z="/"+ne.replace(/^\//,"").split("/").slice(ae.length).join("/")}let Y=Bc(o,{pathname:Z});$t(K||Y!=null,`No routes matched location "${$.pathname}${$.search}${$.hash}" `),$t(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${$.pathname}${$.search}${$.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let J=Np(Y&&Y.map(ae=>Object.assign({},ae,{params:Object.assign({},O,ae.params),pathname:kn([C,T.encodeLocation?T.encodeLocation(ae.pathname).pathname:ae.pathname]),pathnameBase:ae.pathnameBase==="/"?C:kn([C,T.encodeLocation?T.encodeLocation(ae.pathnameBase).pathname:ae.pathnameBase])})),E,m,R);return p&&J?W.createElement(wi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...$},navigationType:"POP"}},J):J}function Ip(){let o=jp(),p=Mp(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),m=o instanceof Error?o.stack:null,R="rgba(200,200,200, 0.5)",T={padding:"0.5rem",backgroundColor:R},E={padding:"2px 4px",backgroundColor:R},U=null;return console.error("Error handled by React Router default ErrorBoundary:",o),U=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:E},"ErrorBoundary")," or"," ",W.createElement("code",{style:E},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},p),m?W.createElement("pre",{style:T},m):null,U)}var Up=W.createElement(Ip,null),Ap=class extends W.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,p){return p.location!==o.location||p.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:p.error,location:p.location,revalidation:o.revalidation||p.revalidation}}componentDidCatch(o,p){console.error("React Router caught the following error during render",o,p)}render(){return this.state.error!==void 0?W.createElement(gn.Provider,{value:this.props.routeContext},W.createElement(Aa.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Cp({routeContext:o,match:p,children:m}){let R=W.useContext(Ur);return R&&R.static&&R.staticContext&&(p.route.errorElement||p.route.ErrorBoundary)&&(R.staticContext._deepestRenderedBoundaryId=p.route.id),W.createElement(gn.Provider,{value:o},m)}function Np(o,p=[],m=null,R=null){if(o==null){if(!m)return null;if(m.errors)o=m.matches;else if(p.length===0&&!m.initialized&&m.matches.length>0)o=m.matches;else return null}let T=o,E=m==null?void 0:m.errors;if(E!=null){let I=T.findIndex(C=>C.route.id&&(E==null?void 0:E[C.route.id])!==void 0);be(I>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(E).join(",")}`),T=T.slice(0,Math.min(T.length,I+1))}let U=!1,O=-1;if(m)for(let I=0;I<T.length;I++){let C=T[I];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(O=I),C.route.id){let{loaderData:K,errors:X}=m,$=C.route.loader&&!K.hasOwnProperty(C.route.id)&&(!X||X[C.route.id]===void 0);if(C.route.lazy||$){U=!0,O>=0?T=T.slice(0,O+1):T=[T[0]];break}}}return T.reduceRight((I,C,K)=>{let X,$=!1,ne=null,Z=null;m&&(X=E&&C.route.id?E[C.route.id]:void 0,ne=C.route.errorElement||Up,U&&(O<0&&K===0?(Zc("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),$=!0,Z=null):O===K&&($=!0,Z=C.route.hydrateFallbackElement||null)));let Y=p.concat(T.slice(0,K+1)),J=()=>{let re;return X?re=ne:$?re=Z:C.route.Component?re=W.createElement(C.route.Component,null):C.route.element?re=C.route.element:re=I,W.createElement(Cp,{match:C,routeContext:{outlet:I,matches:Y,isDataRoute:m!=null},children:re})};return m&&(C.route.ErrorBoundary||C.route.errorElement||K===0)?W.createElement(Ap,{location:m.location,revalidation:m.revalidation,component:ne,error:X,children:J(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):J()},null)}function Ca(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Op(o){let p=W.useContext(Ur);return be(p,Ca(o)),p}function Fp(o){let p=W.useContext(Fo);return be(p,Ca(o)),p}function Hp(o){let p=W.useContext(gn);return be(p,Ca(o)),p}function Na(o){let p=Hp(o),m=p.matches[p.matches.length-1];return be(m.route.id,`${o} can only be used on routes that contain a unique "id"`),m.route.id}function Bp(){return Na("useRouteId")}function jp(){var R;let o=W.useContext(Aa),p=Fp("useRouteError"),m=Na("useRouteError");return o!==void 0?o:(R=p.errors)==null?void 0:R[m]}function Vp(){let{router:o}=Op("useNavigate"),p=Na("useNavigate"),m=W.useRef(!1);return $c(()=>{m.current=!0}),W.useCallback(async(T,E={})=>{$t(m.current,qc),m.current&&(typeof T=="number"?o.navigate(T):await o.navigate(T,{fromRouteId:p,...E}))},[o,p])}var Dc={};function Zc(o,p,m){!p&&!Dc[o]&&(Dc[o]=!0,$t(!1,m))}W.memo(Gp);function Gp({routes:o,future:p,state:m}){return Qc(o,void 0,m,p)}function Wp({to:o,replace:p,state:m,relative:R}){be(Ar(),"<Navigate> may be used only in the context of a <Router> component.");let{static:T}=W.useContext(an);$t(!T,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:E}=W.useContext(gn),{pathname:U}=yn(),O=Si(),I=Ua(o,Ia(E),U,R==="path"),C=JSON.stringify(I);return W.useEffect(()=>{O(JSON.parse(C),{replace:p,state:m,relative:R})},[O,C,R,p,m]),null}function Ao(o){be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qp({basename:o="/",children:p=null,location:m,navigationType:R="POP",navigator:T,static:E=!1}){be(!Ar(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let U=o.replace(/^\/*/,"/"),O=W.useMemo(()=>({basename:U,navigator:T,static:E,future:{}}),[U,T,E]);typeof m=="string"&&(m=lr(m));let{pathname:I="/",search:C="",hash:K="",state:X=null,key:$="default"}=m,ne=W.useMemo(()=>{let Z=Yn(I,U);return Z==null?null:{location:{pathname:Z,search:C,hash:K,state:X,key:$},navigationType:R}},[U,I,C,K,X,$,R]);return $t(ne!=null,`<Router basename="${U}"> is not able to match the URL "${I}${C}${K}" because it does not start with the basename, so the <Router> won't render anything.`),ne==null?null:W.createElement(an.Provider,{value:O},W.createElement(wi.Provider,{children:p,value:ne}))}function $p({children:o,location:p}){return zp(Pa(o),p)}function Pa(o,p=[]){let m=[];return W.Children.forEach(o,(R,T)=>{if(!W.isValidElement(R))return;let E=[...p,T];if(R.type===W.Fragment){m.push.apply(m,Pa(R.props.children,E));return}be(R.type===Ao,`[${typeof R.type=="string"?R.type:R.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),be(!R.props.index||!R.props.children,"An index route cannot have child routes.");let U={id:R.props.id||E.join("-"),caseSensitive:R.props.caseSensitive,element:R.props.element,Component:R.props.Component,index:R.props.index,path:R.props.path,loader:R.props.loader,action:R.props.action,hydrateFallbackElement:R.props.hydrateFallbackElement,HydrateFallback:R.props.HydrateFallback,errorElement:R.props.errorElement,ErrorBoundary:R.props.ErrorBoundary,hasErrorBoundary:R.props.hasErrorBoundary===!0||R.props.ErrorBoundary!=null||R.props.errorElement!=null,shouldRevalidate:R.props.shouldRevalidate,handle:R.props.handle,lazy:R.props.lazy};R.props.children&&(U.children=Pa(R.props.children,E)),m.push(U)}),m}var Co="get",No="application/x-www-form-urlencoded";function Ho(o){return o!=null&&typeof o.tagName=="string"}function Qp(o){return Ho(o)&&o.tagName.toLowerCase()==="button"}function Zp(o){return Ho(o)&&o.tagName.toLowerCase()==="form"}function Yp(o){return Ho(o)&&o.tagName.toLowerCase()==="input"}function Kp(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Xp(o,p){return o.button===0&&(!p||p==="_self")&&!Kp(o)}function Da(o=""){return new URLSearchParams(typeof o=="string"||Array.isArray(o)||o instanceof URLSearchParams?o:Object.keys(o).reduce((p,m)=>{let R=o[m];return p.concat(Array.isArray(R)?R.map(T=>[m,T]):[[m,R]])},[]))}function Jp(o,p){let m=Da(o);return p&&p.forEach((R,T)=>{m.has(T)||p.getAll(T).forEach(E=>{m.append(T,E)})}),m}var Io=null;function bp(){if(Io===null)try{new FormData(document.createElement("form"),0),Io=!1}catch{Io=!0}return Io}var eh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function La(o){return o!=null&&!eh.has(o)?($t(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${No}"`),null):o}function th(o,p){let m,R,T,E,U;if(Zp(o)){let O=o.getAttribute("action");R=O?Yn(O,p):null,m=o.getAttribute("method")||Co,T=La(o.getAttribute("enctype"))||No,E=new FormData(o)}else if(Qp(o)||Yp(o)&&(o.type==="submit"||o.type==="image")){let O=o.form;if(O==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let I=o.getAttribute("formaction")||O.getAttribute("action");if(R=I?Yn(I,p):null,m=o.getAttribute("formmethod")||O.getAttribute("method")||Co,T=La(o.getAttribute("formenctype"))||La(O.getAttribute("enctype"))||No,E=new FormData(O,o),!bp()){let{name:C,type:K,value:X}=o;if(K==="image"){let $=C?`${C}.`:"";E.append(`${$}x`,"0"),E.append(`${$}y`,"0")}else C&&E.append(C,X)}}else{if(Ho(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');m=Co,R=null,T=No,U=o}return E&&T==="text/plain"&&(U=E,E=void 0),{action:R,method:m.toLowerCase(),encType:T,formData:E,body:U}}function Oa(o,p){if(o===!1||o===null||typeof o>"u")throw new Error(p)}async function nh(o,p){if(o.id in p)return p[o.id];try{let m=await import(o.module);return p[o.id]=m,m}catch(m){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(m),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rh(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function ih(o,p,m){let R=await Promise.all(o.map(async T=>{let E=p.routes[T.route.id];if(E){let U=await nh(E,m);return U.links?U.links():[]}return[]}));return lh(R.flat(1).filter(rh).filter(T=>T.rel==="stylesheet"||T.rel==="preload").map(T=>T.rel==="stylesheet"?{...T,rel:"prefetch",as:"style"}:{...T,rel:"prefetch"}))}function zc(o,p,m,R,T,E){let U=(I,C)=>m[C]?I.route.id!==m[C].route.id:!0,O=(I,C)=>{var K;return m[C].pathname!==I.pathname||((K=m[C].route.path)==null?void 0:K.endsWith("*"))&&m[C].params["*"]!==I.params["*"]};return E==="assets"?p.filter((I,C)=>U(I,C)||O(I,C)):E==="data"?p.filter((I,C)=>{var X;let K=R.routes[I.route.id];if(!K||!K.hasLoader)return!1;if(U(I,C)||O(I,C))return!0;if(I.route.shouldRevalidate){let $=I.route.shouldRevalidate({currentUrl:new URL(T.pathname+T.search+T.hash,window.origin),currentParams:((X=m[0])==null?void 0:X.params)||{},nextUrl:new URL(o,window.origin),nextParams:I.params,defaultShouldRevalidate:!0});if(typeof $=="boolean")return $}return!0}):[]}function oh(o,p){return sh(o.map(m=>{let R=p.routes[m.route.id];if(!R)return[];let T=[R.module];return R.imports&&(T=T.concat(R.imports)),T}).flat(1))}function sh(o){return[...new Set(o)]}function ah(o){let p={},m=Object.keys(o).sort();for(let R of m)p[R]=o[R];return p}function lh(o,p){let m=new Set;return new Set(p),o.reduce((R,T)=>{let E=JSON.stringify(ah(T));return m.has(E)||(m.add(E),R.push({key:E,link:T})),R},[])}function uh(o){let p=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return p.pathname==="/"?p.pathname="_root.data":p.pathname=`${p.pathname.replace(/\/$/,"")}.data`,p}function ch(){let o=W.useContext(Ur);return Oa(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function fh(){let o=W.useContext(Fo);return Oa(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Fa=W.createContext(void 0);Fa.displayName="FrameworkContext";function Yc(){let o=W.useContext(Fa);return Oa(o,"You must render this element inside a <HydratedRouter> element"),o}function dh(o,p){let m=W.useContext(Fa),[R,T]=W.useState(!1),[E,U]=W.useState(!1),{onFocus:O,onBlur:I,onMouseEnter:C,onMouseLeave:K,onTouchStart:X}=p,$=W.useRef(null);W.useEffect(()=>{if(o==="render"&&U(!0),o==="viewport"){let Y=re=>{re.forEach(ae=>{U(ae.isIntersecting)})},J=new IntersectionObserver(Y,{threshold:.5});return $.current&&J.observe($.current),()=>{J.disconnect()}}},[o]),W.useEffect(()=>{if(R){let Y=setTimeout(()=>{U(!0)},100);return()=>{clearTimeout(Y)}}},[R]);let ne=()=>{T(!0)},Z=()=>{T(!1),U(!1)};return m?o!=="intent"?[E,$,{}]:[E,$,{onFocus:gi(O,ne),onBlur:gi(I,Z),onMouseEnter:gi(C,ne),onMouseLeave:gi(K,Z),onTouchStart:gi(X,ne)}]:[!1,$,{}]}function gi(o,p){return m=>{o&&o(m),m.defaultPrevented||p(m)}}function ph({page:o,...p}){let{router:m}=ch(),R=W.useMemo(()=>Bc(m.routes,o,m.basename),[m.routes,o,m.basename]);return R?W.createElement(mh,{page:o,matches:R,...p}):null}function hh(o){let{manifest:p,routeModules:m}=Yc(),[R,T]=W.useState([]);return W.useEffect(()=>{let E=!1;return ih(o,p,m).then(U=>{E||T(U)}),()=>{E=!0}},[o,p,m]),R}function mh({page:o,matches:p,...m}){let R=yn(),{manifest:T,routeModules:E}=Yc(),{loaderData:U,matches:O}=fh(),I=W.useMemo(()=>zc(o,p,O,T,R,"data"),[o,p,O,T,R]),C=W.useMemo(()=>zc(o,p,O,T,R,"assets"),[o,p,O,T,R]),K=W.useMemo(()=>{if(o===R.pathname+R.search+R.hash)return[];let ne=new Set,Z=!1;if(p.forEach(J=>{var ae;let re=T.routes[J.route.id];!re||!re.hasLoader||(!I.some(ye=>ye.route.id===J.route.id)&&J.route.id in U&&((ae=E[J.route.id])!=null&&ae.shouldRevalidate)||re.hasClientLoader?Z=!0:ne.add(J.route.id))}),ne.size===0)return[];let Y=uh(o);return Z&&ne.size>0&&Y.searchParams.set("_routes",p.filter(J=>ne.has(J.route.id)).map(J=>J.route.id).join(",")),[Y.pathname+Y.search]},[U,R,T,I,p,o,E]),X=W.useMemo(()=>oh(C,T),[C,T]),$=hh(C);return W.createElement(W.Fragment,null,K.map(ne=>W.createElement("link",{key:ne,rel:"prefetch",as:"fetch",href:ne,...m})),X.map(ne=>W.createElement("link",{key:ne,rel:"modulepreload",href:ne,...m})),$.map(({key:ne,link:Z})=>W.createElement("link",{key:ne,...Z})))}function gh(...o){return p=>{o.forEach(m=>{typeof m=="function"?m(p):m!=null&&(m.current=p)})}}var Kc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kc&&(window.__reactRouterVersion="7.1.1")}catch{}function yh({basename:o,children:p,window:m}){let R=W.useRef();R.current==null&&(R.current=rp({window:m,v5Compat:!0}));let T=R.current,[E,U]=W.useState({action:T.action,location:T.location}),O=W.useCallback(I=>{W.startTransition(()=>U(I))},[U]);return W.useLayoutEffect(()=>T.listen(O),[T,O]),W.createElement(qp,{basename:o,children:p,location:E.location,navigationType:E.action,navigator:T})}var Xc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jc=W.forwardRef(function({onClick:p,discover:m="render",prefetch:R="none",relative:T,reloadDocument:E,replace:U,state:O,target:I,to:C,preventScrollReset:K,viewTransition:X,...$},ne){let{basename:Z}=W.useContext(an),Y=typeof C=="string"&&Xc.test(C),J,re=!1;if(typeof C=="string"&&Y&&(J=C,Kc))try{let Fe=new URL(window.location.href),He=C.startsWith("//")?new URL(Fe.protocol+C):new URL(C),et=Yn(He.pathname,Z);He.origin===Fe.origin&&et!=null?C=et+He.search+He.hash:re=!0}catch{$t(!1,`<Link to="${C}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ae=Pp(C,{relative:T}),[ye,Me,Ie]=dh(R,$),Ne=Th(C,{replace:U,state:O,target:I,preventScrollReset:K,relative:T,viewTransition:X});function Oe(Fe){p&&p(Fe),Fe.defaultPrevented||Ne(Fe)}let Be=W.createElement("a",{...$,...Ie,href:J||ae,onClick:re||E?p:Oe,ref:gh(ne,Me),target:I,"data-discover":!Y&&m==="render"?"true":void 0});return ye&&!Y?W.createElement(W.Fragment,null,Be,W.createElement(ph,{page:ae})):Be});Jc.displayName="Link";var vh=W.forwardRef(function({"aria-current":p="page",caseSensitive:m=!1,className:R="",end:T=!1,style:E,to:U,viewTransition:O,children:I,...C},K){let X=Ti(U,{relative:C.relative}),$=yn(),ne=W.useContext(Fo),{navigator:Z,basename:Y}=W.useContext(an),J=ne!=null&&Lh(X)&&O===!0,re=Z.encodeLocation?Z.encodeLocation(X).pathname:X.pathname,ae=$.pathname,ye=ne&&ne.navigation&&ne.navigation.location?ne.navigation.location.pathname:null;m||(ae=ae.toLowerCase(),ye=ye?ye.toLowerCase():null,re=re.toLowerCase()),ye&&Y&&(ye=Yn(ye,Y)||ye);const Me=re!=="/"&&re.endsWith("/")?re.length-1:re.length;let Ie=ae===re||!T&&ae.startsWith(re)&&ae.charAt(Me)==="/",Ne=ye!=null&&(ye===re||!T&&ye.startsWith(re)&&ye.charAt(re.length)==="/"),Oe={isActive:Ie,isPending:Ne,isTransitioning:J},Be=Ie?p:void 0,Fe;typeof R=="function"?Fe=R(Oe):Fe=[R,Ie?"active":null,Ne?"pending":null,J?"transitioning":null].filter(Boolean).join(" ");let He=typeof E=="function"?E(Oe):E;return W.createElement(Jc,{...C,"aria-current":Be,className:Fe,ref:K,style:He,to:U,viewTransition:O},typeof I=="function"?I(Oe):I)});vh.displayName="NavLink";var wh=W.forwardRef(({discover:o="render",fetcherKey:p,navigate:m,reloadDocument:R,replace:T,state:E,method:U=Co,action:O,onSubmit:I,relative:C,preventScrollReset:K,viewTransition:X,...$},ne)=>{let Z=Mh(),Y=Eh(O,{relative:C}),J=U.toLowerCase()==="get"?"get":"post",re=typeof O=="string"&&Xc.test(O),ae=ye=>{if(I&&I(ye),ye.defaultPrevented)return;ye.preventDefault();let Me=ye.nativeEvent.submitter,Ie=(Me==null?void 0:Me.getAttribute("formmethod"))||U;Z(Me||ye.currentTarget,{fetcherKey:p,method:Ie,navigate:m,replace:T,state:E,relative:C,preventScrollReset:K,viewTransition:X})};return W.createElement("form",{ref:ne,method:J,action:Y,onSubmit:R?I:ae,...$,"data-discover":!re&&o==="render"?"true":void 0})});wh.displayName="Form";function Sh(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bc(o){let p=W.useContext(Ur);return be(p,Sh(o)),p}function Th(o,{target:p,replace:m,state:R,preventScrollReset:T,relative:E,viewTransition:U}={}){let O=Si(),I=yn(),C=Ti(o,{relative:E});return W.useCallback(K=>{if(Xp(K,p)){K.preventDefault();let X=m!==void 0?m:vi(I)===vi(C);O(o,{replace:X,state:R,preventScrollReset:T,relative:E,viewTransition:U})}},[I,O,C,m,R,p,o,T,E,U])}function _h(o){$t(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let p=W.useRef(Da(o)),m=W.useRef(!1),R=yn(),T=W.useMemo(()=>Jp(R.search,m.current?null:p.current),[R.search]),E=Si(),U=W.useCallback((O,I)=>{const C=Da(typeof O=="function"?O(T):O);m.current=!0,E("?"+C,I)},[E,T]);return[T,U]}var xh=0,Rh=()=>`__${String(++xh)}__`;function Mh(){let{router:o}=bc("useSubmit"),{basename:p}=W.useContext(an),m=Bp();return W.useCallback(async(R,T={})=>{let{action:E,method:U,encType:O,formData:I,body:C}=th(R,p);if(T.navigate===!1){let K=T.fetcherKey||Rh();await o.fetch(K,m,T.action||E,{preventScrollReset:T.preventScrollReset,formData:I,body:C,formMethod:T.method||U,formEncType:T.encType||O,flushSync:T.flushSync})}else await o.navigate(T.action||E,{preventScrollReset:T.preventScrollReset,formData:I,body:C,formMethod:T.method||U,formEncType:T.encType||O,replace:T.replace,state:T.state,fromRouteId:m,flushSync:T.flushSync,viewTransition:T.viewTransition})},[o,p,m])}function Eh(o,{relative:p}={}){let{basename:m}=W.useContext(an),R=W.useContext(gn);be(R,"useFormAction must be used inside a RouteContext");let[T]=R.matches.slice(-1),E={...Ti(o||".",{relative:p})},U=yn();if(o==null){E.search=U.search;let O=new URLSearchParams(E.search),I=O.getAll("index");if(I.some(K=>K==="")){O.delete("index"),I.filter(X=>X).forEach(X=>O.append("index",X));let K=O.toString();E.search=K?`?${K}`:""}}return(!o||o===".")&&T.route.index&&(E.search=E.search?E.search.replace(/^\?/,"?index&"):"?index"),m!=="/"&&(E.pathname=E.pathname==="/"?m:kn([m,E.pathname])),vi(E)}function Lh(o,p={}){let m=W.useContext(Wc);be(m!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:R}=bc("useViewTransitionState"),T=Ti(o,{relative:p.relative});if(!m.isTransitioning)return!1;let E=Yn(m.currentLocation.pathname,R)||m.currentLocation.pathname,U=Yn(m.nextLocation.pathname,R)||m.nextLocation.pathname;return Oo(T.pathname,U)!=null||Oo(T.pathname,E)!=null}new TextEncoder;const kh=ve.jsx("a",{target:"_blank",rel:"noreferrer",href:"mailto:estelle.booher@gmail.com",children:"estelle.booher@gmail.com"}),Ph=ve.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/EllarBooher",children:"https://github.com/EllarBooher"}),Uo=W.memo(function({hyperlink:p,externalLink:m=!0,thumbnailAssets:R=[],title:T="PLACEHOLDER TITLE",description:E="PLACEHOLDER DESCRIPTION"}){const U=ve.jsx("div",{className:"DisplayCard-thumbnails",children:R.map(C=>ve.jsx("div",{className:"DisplayCard-thumbnail",children:ve.jsx("img",{className:"DisplayCard-image",src:C.toString(),alt:""})},C.toString()))}),O=Si(),I=()=>{var C;m?window.location.href=p:(C=O(p))==null||C.catch(K=>{throw new Error("Unable to navigate",{cause:K})})};return ve.jsx("button",{className:"DisplayCard",onClick:I,children:ve.jsxs("div",{children:[ve.jsx("div",{className:"DisplayCard-name",children:T}),ve.jsxs("div",{className:"DisplayCard-body",children:[E,U]})]})})});function Dh(){return ve.jsxs("div",{className:"App",children:[ve.jsx("div",{className:"website-main",children:ve.jsxs("div",{children:["Hello, my name is Estelle Booher. My passion is realtime rendering and engine infrastructure, and I am actively working on building a portfolio and career in computer graphics. This website is a landing spot where I will host links to various projects of mine.",ve.jsx("br",{}),ve.jsx("br",{}),"My github is at ",Ph,", where I host the source code of my projects including this website.",ve.jsx("br",{}),"To contact me, please email at ",kh,".",ve.jsx("br",{}),ve.jsx("h1",{children:"WebGPU"}),ve.jsx("div",{className:"DisplayGrid",children:ve.jsx(Uo,{hyperlink:"/webgpu-samples?sample=hello-cube",externalLink:!1,thumbnailAssets:[],title:"Hello Cube",description:`
                Test of WebGPU.
              `})}),ve.jsx("h1",{children:"Computer Graphics Offline"}),ve.jsxs("div",{className:"DisplayGrid",children:[ve.jsx(Uo,{hyperlink:"https://github.com/EllarBooher/Syzygy",thumbnailAssets:[new URL("/assets/syzygy1-CItzHwJc.png",import.meta.url)],title:"Syzygy",description:`
                A sandbox renderer I started to study C++ and Vulkan. 
                It aims to be a testbed of various features and techniques.
              `}),ve.jsx(Uo,{hyperlink:"https://github.com/EllarBooher/VulkanTemplate/tree/SSAO",thumbnailAssets:[new URL("/assets/ssao1-8Qfbb4oF.png",import.meta.url)],title:"SSAO",description:`
                An implementation of Screen-Space Ambient Occlusion.
              `})]}),ve.jsx("h1",{children:"Video Games"}),ve.jsx(Uo,{hyperlink:"https://ellarbooher.itch.io/snail-blazer",thumbnailAssets:[new URL("/assets/snailblazer1-Bl1793QZ.png",import.meta.url),new URL("/assets/snailblazer2-CU4gYciB.png",import.meta.url)],title:"Snail Blazer",description:`
              A short bullet-hell made for the Bullet Hell Jam 2023 on itch.io. 
              The player primarily moves via grappling on enemy projectiles and the environment, 
              instead of the conventional WASD-style of movement.
            `})]})}),ve.jsx("footer",{className:"website-footer",children:"All works present are copyrighted, unless provided with external attributions or license."})]})}const zh=`struct VertexOut {
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
}`;function Ih(o,p){return class extends o{constructor(...m){super(...m),p(this)}}}const Uh=Ih(Array,o=>o.fill(0));let Ue=1e-6;function Ah(o){function p(s=0,g=0){const l=new o(2);return s!==void 0&&(l[0]=s,g!==void 0&&(l[1]=g)),l}const m=p;function R(s,g,l){const f=l??new o(2);return f[0]=s,f[1]=g,f}function T(s,g){const l=g??new o(2);return l[0]=Math.ceil(s[0]),l[1]=Math.ceil(s[1]),l}function E(s,g){const l=g??new o(2);return l[0]=Math.floor(s[0]),l[1]=Math.floor(s[1]),l}function U(s,g){const l=g??new o(2);return l[0]=Math.round(s[0]),l[1]=Math.round(s[1]),l}function O(s,g=0,l=1,f){const v=f??new o(2);return v[0]=Math.min(l,Math.max(g,s[0])),v[1]=Math.min(l,Math.max(g,s[1])),v}function I(s,g,l){const f=l??new o(2);return f[0]=s[0]+g[0],f[1]=s[1]+g[1],f}function C(s,g,l,f){const v=f??new o(2);return v[0]=s[0]+g[0]*l,v[1]=s[1]+g[1]*l,v}function K(s,g){const l=s[0],f=s[1],v=g[0],P=g[1],B=Math.sqrt(l*l+f*f),y=Math.sqrt(v*v+P*P),w=B*y,k=w&&Fe(s,g)/w;return Math.acos(k)}function X(s,g,l){const f=l??new o(2);return f[0]=s[0]-g[0],f[1]=s[1]-g[1],f}const $=X;function ne(s,g){return Math.abs(s[0]-g[0])<Ue&&Math.abs(s[1]-g[1])<Ue}function Z(s,g){return s[0]===g[0]&&s[1]===g[1]}function Y(s,g,l,f){const v=f??new o(2);return v[0]=s[0]+l*(g[0]-s[0]),v[1]=s[1]+l*(g[1]-s[1]),v}function J(s,g,l,f){const v=f??new o(2);return v[0]=s[0]+l[0]*(g[0]-s[0]),v[1]=s[1]+l[1]*(g[1]-s[1]),v}function re(s,g,l){const f=l??new o(2);return f[0]=Math.max(s[0],g[0]),f[1]=Math.max(s[1],g[1]),f}function ae(s,g,l){const f=l??new o(2);return f[0]=Math.min(s[0],g[0]),f[1]=Math.min(s[1],g[1]),f}function ye(s,g,l){const f=l??new o(2);return f[0]=s[0]*g,f[1]=s[1]*g,f}const Me=ye;function Ie(s,g,l){const f=l??new o(2);return f[0]=s[0]/g,f[1]=s[1]/g,f}function Ne(s,g){const l=g??new o(2);return l[0]=1/s[0],l[1]=1/s[1],l}const Oe=Ne;function Be(s,g,l){const f=l??new o(3),v=s[0]*g[1]-s[1]*g[0];return f[0]=0,f[1]=0,f[2]=v,f}function Fe(s,g){return s[0]*g[0]+s[1]*g[1]}function He(s){const g=s[0],l=s[1];return Math.sqrt(g*g+l*l)}const et=He;function Ee(s){const g=s[0],l=s[1];return g*g+l*l}const De=Ee;function xe(s,g){const l=s[0]-g[0],f=s[1]-g[1];return Math.sqrt(l*l+f*f)}const st=xe;function We(s,g){const l=s[0]-g[0],f=s[1]-g[1];return l*l+f*f}const je=We;function se(s,g){const l=g??new o(2),f=s[0],v=s[1],P=Math.sqrt(f*f+v*v);return P>1e-5?(l[0]=f/P,l[1]=v/P):(l[0]=0,l[1]=0),l}function me(s,g){const l=g??new o(2);return l[0]=-s[0],l[1]=-s[1],l}function ie(s,g){const l=g??new o(2);return l[0]=s[0],l[1]=s[1],l}const A=ie;function Q(s,g,l){const f=l??new o(2);return f[0]=s[0]*g[0],f[1]=s[1]*g[1],f}const _e=Q;function we(s,g,l){const f=l??new o(2);return f[0]=s[0]/g[0],f[1]=s[1]/g[1],f}const Pe=we;function ke(s=1,g){const l=g??new o(2),f=Math.random()*2*Math.PI;return l[0]=Math.cos(f)*s,l[1]=Math.sin(f)*s,l}function c(s){const g=s??new o(2);return g[0]=0,g[1]=0,g}function _(s,g,l){const f=l??new o(2),v=s[0],P=s[1];return f[0]=v*g[0]+P*g[4]+g[12],f[1]=v*g[1]+P*g[5]+g[13],f}function u(s,g,l){const f=l??new o(2),v=s[0],P=s[1];return f[0]=g[0]*v+g[4]*P+g[8],f[1]=g[1]*v+g[5]*P+g[9],f}function d(s,g,l,f){const v=f??new o(2),P=s[0]-g[0],B=s[1]-g[1],y=Math.sin(l),w=Math.cos(l);return v[0]=P*w-B*y+g[0],v[1]=P*y+B*w+g[1],v}function S(s,g,l){const f=l??new o(2);return se(s,f),ye(f,g,f)}function M(s,g,l){const f=l??new o(2);return He(s)>g?S(s,g,f):ie(s,f)}function H(s,g,l){const f=l??new o(2);return Y(s,g,.5,f)}return{create:p,fromValues:m,set:R,ceil:T,floor:E,round:U,clamp:O,add:I,addScaled:C,angle:K,subtract:X,sub:$,equalsApproximately:ne,equals:Z,lerp:Y,lerpV:J,max:re,min:ae,mulScalar:ye,scale:Me,divScalar:Ie,inverse:Ne,invert:Oe,cross:Be,dot:Fe,length:He,len:et,lengthSq:Ee,lenSq:De,distance:xe,dist:st,distanceSq:We,distSq:je,normalize:se,negate:me,copy:ie,clone:A,multiply:Q,mul:_e,divide:we,div:Pe,random:ke,zero:c,transformMat4:_,transformMat3:u,rotate:d,setLength:S,truncate:M,midpoint:H}}const Ic=new Map;function ef(o){let p=Ic.get(o);return p||(p=Ah(o),Ic.set(o,p)),p}function Ch(o){function p(y,w,k){const D=new o(3);return y!==void 0&&(D[0]=y,w!==void 0&&(D[1]=w,k!==void 0&&(D[2]=k))),D}const m=p;function R(y,w,k,D){const j=D??new o(3);return j[0]=y,j[1]=w,j[2]=k,j}function T(y,w){const k=w??new o(3);return k[0]=Math.ceil(y[0]),k[1]=Math.ceil(y[1]),k[2]=Math.ceil(y[2]),k}function E(y,w){const k=w??new o(3);return k[0]=Math.floor(y[0]),k[1]=Math.floor(y[1]),k[2]=Math.floor(y[2]),k}function U(y,w){const k=w??new o(3);return k[0]=Math.round(y[0]),k[1]=Math.round(y[1]),k[2]=Math.round(y[2]),k}function O(y,w=0,k=1,D){const j=D??new o(3);return j[0]=Math.min(k,Math.max(w,y[0])),j[1]=Math.min(k,Math.max(w,y[1])),j[2]=Math.min(k,Math.max(w,y[2])),j}function I(y,w,k){const D=k??new o(3);return D[0]=y[0]+w[0],D[1]=y[1]+w[1],D[2]=y[2]+w[2],D}function C(y,w,k,D){const j=D??new o(3);return j[0]=y[0]+w[0]*k,j[1]=y[1]+w[1]*k,j[2]=y[2]+w[2]*k,j}function K(y,w){const k=y[0],D=y[1],j=y[2],G=w[0],q=w[1],fe=w[2],Re=Math.sqrt(k*k+D*D+j*j),ue=Math.sqrt(G*G+q*q+fe*fe),de=Re*ue,ze=de&&Fe(y,w)/de;return Math.acos(ze)}function X(y,w,k){const D=k??new o(3);return D[0]=y[0]-w[0],D[1]=y[1]-w[1],D[2]=y[2]-w[2],D}const $=X;function ne(y,w){return Math.abs(y[0]-w[0])<Ue&&Math.abs(y[1]-w[1])<Ue&&Math.abs(y[2]-w[2])<Ue}function Z(y,w){return y[0]===w[0]&&y[1]===w[1]&&y[2]===w[2]}function Y(y,w,k,D){const j=D??new o(3);return j[0]=y[0]+k*(w[0]-y[0]),j[1]=y[1]+k*(w[1]-y[1]),j[2]=y[2]+k*(w[2]-y[2]),j}function J(y,w,k,D){const j=D??new o(3);return j[0]=y[0]+k[0]*(w[0]-y[0]),j[1]=y[1]+k[1]*(w[1]-y[1]),j[2]=y[2]+k[2]*(w[2]-y[2]),j}function re(y,w,k){const D=k??new o(3);return D[0]=Math.max(y[0],w[0]),D[1]=Math.max(y[1],w[1]),D[2]=Math.max(y[2],w[2]),D}function ae(y,w,k){const D=k??new o(3);return D[0]=Math.min(y[0],w[0]),D[1]=Math.min(y[1],w[1]),D[2]=Math.min(y[2],w[2]),D}function ye(y,w,k){const D=k??new o(3);return D[0]=y[0]*w,D[1]=y[1]*w,D[2]=y[2]*w,D}const Me=ye;function Ie(y,w,k){const D=k??new o(3);return D[0]=y[0]/w,D[1]=y[1]/w,D[2]=y[2]/w,D}function Ne(y,w){const k=w??new o(3);return k[0]=1/y[0],k[1]=1/y[1],k[2]=1/y[2],k}const Oe=Ne;function Be(y,w,k){const D=k??new o(3),j=y[2]*w[0]-y[0]*w[2],G=y[0]*w[1]-y[1]*w[0];return D[0]=y[1]*w[2]-y[2]*w[1],D[1]=j,D[2]=G,D}function Fe(y,w){return y[0]*w[0]+y[1]*w[1]+y[2]*w[2]}function He(y){const w=y[0],k=y[1],D=y[2];return Math.sqrt(w*w+k*k+D*D)}const et=He;function Ee(y){const w=y[0],k=y[1],D=y[2];return w*w+k*k+D*D}const De=Ee;function xe(y,w){const k=y[0]-w[0],D=y[1]-w[1],j=y[2]-w[2];return Math.sqrt(k*k+D*D+j*j)}const st=xe;function We(y,w){const k=y[0]-w[0],D=y[1]-w[1],j=y[2]-w[2];return k*k+D*D+j*j}const je=We;function se(y,w){const k=w??new o(3),D=y[0],j=y[1],G=y[2],q=Math.sqrt(D*D+j*j+G*G);return q>1e-5?(k[0]=D/q,k[1]=j/q,k[2]=G/q):(k[0]=0,k[1]=0,k[2]=0),k}function me(y,w){const k=w??new o(3);return k[0]=-y[0],k[1]=-y[1],k[2]=-y[2],k}function ie(y,w){const k=w??new o(3);return k[0]=y[0],k[1]=y[1],k[2]=y[2],k}const A=ie;function Q(y,w,k){const D=k??new o(3);return D[0]=y[0]*w[0],D[1]=y[1]*w[1],D[2]=y[2]*w[2],D}const _e=Q;function we(y,w,k){const D=k??new o(3);return D[0]=y[0]/w[0],D[1]=y[1]/w[1],D[2]=y[2]/w[2],D}const Pe=we;function ke(y=1,w){const k=w??new o(3),D=Math.random()*2*Math.PI,j=Math.random()*2-1,G=Math.sqrt(1-j*j)*y;return k[0]=Math.cos(D)*G,k[1]=Math.sin(D)*G,k[2]=j*y,k}function c(y){const w=y??new o(3);return w[0]=0,w[1]=0,w[2]=0,w}function _(y,w,k){const D=k??new o(3),j=y[0],G=y[1],q=y[2],fe=w[3]*j+w[7]*G+w[11]*q+w[15]||1;return D[0]=(w[0]*j+w[4]*G+w[8]*q+w[12])/fe,D[1]=(w[1]*j+w[5]*G+w[9]*q+w[13])/fe,D[2]=(w[2]*j+w[6]*G+w[10]*q+w[14])/fe,D}function u(y,w,k){const D=k??new o(3),j=y[0],G=y[1],q=y[2];return D[0]=j*w[0*4+0]+G*w[1*4+0]+q*w[2*4+0],D[1]=j*w[0*4+1]+G*w[1*4+1]+q*w[2*4+1],D[2]=j*w[0*4+2]+G*w[1*4+2]+q*w[2*4+2],D}function d(y,w,k){const D=k??new o(3),j=y[0],G=y[1],q=y[2];return D[0]=j*w[0]+G*w[4]+q*w[8],D[1]=j*w[1]+G*w[5]+q*w[9],D[2]=j*w[2]+G*w[6]+q*w[10],D}function S(y,w,k){const D=k??new o(3),j=w[0],G=w[1],q=w[2],fe=w[3]*2,Re=y[0],ue=y[1],de=y[2],ze=G*de-q*ue,Ae=q*Re-j*de,Qe=j*ue-G*Re;return D[0]=Re+ze*fe+(G*Qe-q*Ae)*2,D[1]=ue+Ae*fe+(q*ze-j*Qe)*2,D[2]=de+Qe*fe+(j*Ae-G*ze)*2,D}function M(y,w){const k=w??new o(3);return k[0]=y[12],k[1]=y[13],k[2]=y[14],k}function H(y,w,k){const D=k??new o(3),j=w*4;return D[0]=y[j+0],D[1]=y[j+1],D[2]=y[j+2],D}function s(y,w){const k=w??new o(3),D=y[0],j=y[1],G=y[2],q=y[4],fe=y[5],Re=y[6],ue=y[8],de=y[9],ze=y[10];return k[0]=Math.sqrt(D*D+j*j+G*G),k[1]=Math.sqrt(q*q+fe*fe+Re*Re),k[2]=Math.sqrt(ue*ue+de*de+ze*ze),k}function g(y,w,k,D){const j=D??new o(3),G=[],q=[];return G[0]=y[0]-w[0],G[1]=y[1]-w[1],G[2]=y[2]-w[2],q[0]=G[0],q[1]=G[1]*Math.cos(k)-G[2]*Math.sin(k),q[2]=G[1]*Math.sin(k)+G[2]*Math.cos(k),j[0]=q[0]+w[0],j[1]=q[1]+w[1],j[2]=q[2]+w[2],j}function l(y,w,k,D){const j=D??new o(3),G=[],q=[];return G[0]=y[0]-w[0],G[1]=y[1]-w[1],G[2]=y[2]-w[2],q[0]=G[2]*Math.sin(k)+G[0]*Math.cos(k),q[1]=G[1],q[2]=G[2]*Math.cos(k)-G[0]*Math.sin(k),j[0]=q[0]+w[0],j[1]=q[1]+w[1],j[2]=q[2]+w[2],j}function f(y,w,k,D){const j=D??new o(3),G=[],q=[];return G[0]=y[0]-w[0],G[1]=y[1]-w[1],G[2]=y[2]-w[2],q[0]=G[0]*Math.cos(k)-G[1]*Math.sin(k),q[1]=G[0]*Math.sin(k)+G[1]*Math.cos(k),q[2]=G[2],j[0]=q[0]+w[0],j[1]=q[1]+w[1],j[2]=q[2]+w[2],j}function v(y,w,k){const D=k??new o(3);return se(y,D),ye(D,w,D)}function P(y,w,k){const D=k??new o(3);return He(y)>w?v(y,w,D):ie(y,D)}function B(y,w,k){const D=k??new o(3);return Y(y,w,.5,D)}return{create:p,fromValues:m,set:R,ceil:T,floor:E,round:U,clamp:O,add:I,addScaled:C,angle:K,subtract:X,sub:$,equalsApproximately:ne,equals:Z,lerp:Y,lerpV:J,max:re,min:ae,mulScalar:ye,scale:Me,divScalar:Ie,inverse:Ne,invert:Oe,cross:Be,dot:Fe,length:He,len:et,lengthSq:Ee,lenSq:De,distance:xe,dist:st,distanceSq:We,distSq:je,normalize:se,negate:me,copy:ie,clone:A,multiply:Q,mul:_e,divide:we,div:Pe,random:ke,zero:c,transformMat4:_,transformMat4Upper3x3:u,transformMat3:d,transformQuat:S,getTranslation:M,getAxis:H,getScaling:s,rotateX:g,rotateY:l,rotateZ:f,setLength:v,truncate:P,midpoint:B}}const Uc=new Map;function Bo(o){let p=Uc.get(o);return p||(p=Ch(o),Uc.set(o,p)),p}function Nh(o){const p=ef(o),m=Bo(o);function R(c,_,u,d,S,M,H,s,g){const l=new o(12);return l[3]=0,l[7]=0,l[11]=0,c!==void 0&&(l[0]=c,_!==void 0&&(l[1]=_,u!==void 0&&(l[2]=u,d!==void 0&&(l[4]=d,S!==void 0&&(l[5]=S,M!==void 0&&(l[6]=M,H!==void 0&&(l[8]=H,s!==void 0&&(l[9]=s,g!==void 0&&(l[10]=g))))))))),l}function T(c,_,u,d,S,M,H,s,g,l){const f=l??new o(12);return f[0]=c,f[1]=_,f[2]=u,f[3]=0,f[4]=d,f[5]=S,f[6]=M,f[7]=0,f[8]=H,f[9]=s,f[10]=g,f[11]=0,f}function E(c,_){const u=_??new o(12);return u[0]=c[0],u[1]=c[1],u[2]=c[2],u[3]=0,u[4]=c[4],u[5]=c[5],u[6]=c[6],u[7]=0,u[8]=c[8],u[9]=c[9],u[10]=c[10],u[11]=0,u}function U(c,_){const u=_??new o(12),d=c[0],S=c[1],M=c[2],H=c[3],s=d+d,g=S+S,l=M+M,f=d*s,v=S*s,P=S*g,B=M*s,y=M*g,w=M*l,k=H*s,D=H*g,j=H*l;return u[0]=1-P-w,u[1]=v+j,u[2]=B-D,u[3]=0,u[4]=v-j,u[5]=1-f-w,u[6]=y+k,u[7]=0,u[8]=B+D,u[9]=y-k,u[10]=1-f-P,u[11]=0,u}function O(c,_){const u=_??new o(12);return u[0]=-c[0],u[1]=-c[1],u[2]=-c[2],u[4]=-c[4],u[5]=-c[5],u[6]=-c[6],u[8]=-c[8],u[9]=-c[9],u[10]=-c[10],u}function I(c,_){const u=_??new o(12);return u[0]=c[0],u[1]=c[1],u[2]=c[2],u[4]=c[4],u[5]=c[5],u[6]=c[6],u[8]=c[8],u[9]=c[9],u[10]=c[10],u}const C=I;function K(c,_){return Math.abs(c[0]-_[0])<Ue&&Math.abs(c[1]-_[1])<Ue&&Math.abs(c[2]-_[2])<Ue&&Math.abs(c[4]-_[4])<Ue&&Math.abs(c[5]-_[5])<Ue&&Math.abs(c[6]-_[6])<Ue&&Math.abs(c[8]-_[8])<Ue&&Math.abs(c[9]-_[9])<Ue&&Math.abs(c[10]-_[10])<Ue}function X(c,_){return c[0]===_[0]&&c[1]===_[1]&&c[2]===_[2]&&c[4]===_[4]&&c[5]===_[5]&&c[6]===_[6]&&c[8]===_[8]&&c[9]===_[9]&&c[10]===_[10]}function $(c){const _=c??new o(12);return _[0]=1,_[1]=0,_[2]=0,_[4]=0,_[5]=1,_[6]=0,_[8]=0,_[9]=0,_[10]=1,_}function ne(c,_){const u=_??new o(12);if(u===c){let P;return P=c[1],c[1]=c[4],c[4]=P,P=c[2],c[2]=c[8],c[8]=P,P=c[6],c[6]=c[9],c[9]=P,u}const d=c[0*4+0],S=c[0*4+1],M=c[0*4+2],H=c[1*4+0],s=c[1*4+1],g=c[1*4+2],l=c[2*4+0],f=c[2*4+1],v=c[2*4+2];return u[0]=d,u[1]=H,u[2]=l,u[4]=S,u[5]=s,u[6]=f,u[8]=M,u[9]=g,u[10]=v,u}function Z(c,_){const u=_??new o(12),d=c[0*4+0],S=c[0*4+1],M=c[0*4+2],H=c[1*4+0],s=c[1*4+1],g=c[1*4+2],l=c[2*4+0],f=c[2*4+1],v=c[2*4+2],P=v*s-g*f,B=-v*H+g*l,y=f*H-s*l,w=1/(d*P+S*B+M*y);return u[0]=P*w,u[1]=(-v*S+M*f)*w,u[2]=(g*S-M*s)*w,u[4]=B*w,u[5]=(v*d-M*l)*w,u[6]=(-g*d+M*H)*w,u[8]=y*w,u[9]=(-f*d+S*l)*w,u[10]=(s*d-S*H)*w,u}function Y(c){const _=c[0],u=c[0*4+1],d=c[0*4+2],S=c[1*4+0],M=c[1*4+1],H=c[1*4+2],s=c[2*4+0],g=c[2*4+1],l=c[2*4+2];return _*(M*l-g*H)-S*(u*l-g*d)+s*(u*H-M*d)}const J=Z;function re(c,_,u){const d=u??new o(12),S=c[0],M=c[1],H=c[2],s=c[4],g=c[5],l=c[6],f=c[8],v=c[9],P=c[10],B=_[0],y=_[1],w=_[2],k=_[4],D=_[5],j=_[6],G=_[8],q=_[9],fe=_[10];return d[0]=S*B+s*y+f*w,d[1]=M*B+g*y+v*w,d[2]=H*B+l*y+P*w,d[4]=S*k+s*D+f*j,d[5]=M*k+g*D+v*j,d[6]=H*k+l*D+P*j,d[8]=S*G+s*q+f*fe,d[9]=M*G+g*q+v*fe,d[10]=H*G+l*q+P*fe,d}const ae=re;function ye(c,_,u){const d=u??$();return c!==d&&(d[0]=c[0],d[1]=c[1],d[2]=c[2],d[4]=c[4],d[5]=c[5],d[6]=c[6]),d[8]=_[0],d[9]=_[1],d[10]=1,d}function Me(c,_){const u=_??p.create();return u[0]=c[8],u[1]=c[9],u}function Ie(c,_,u){const d=u??p.create(),S=_*4;return d[0]=c[S+0],d[1]=c[S+1],d}function Ne(c,_,u,d){const S=d===c?c:I(c,d),M=u*4;return S[M+0]=_[0],S[M+1]=_[1],S}function Oe(c,_){const u=_??p.create(),d=c[0],S=c[1],M=c[4],H=c[5];return u[0]=Math.sqrt(d*d+S*S),u[1]=Math.sqrt(M*M+H*H),u}function Be(c,_){const u=_??m.create(),d=c[0],S=c[1],M=c[2],H=c[4],s=c[5],g=c[6],l=c[8],f=c[9],v=c[10];return u[0]=Math.sqrt(d*d+S*S+M*M),u[1]=Math.sqrt(H*H+s*s+g*g),u[2]=Math.sqrt(l*l+f*f+v*v),u}function Fe(c,_){const u=_??new o(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=c[0],u[9]=c[1],u[10]=1,u}function He(c,_,u){const d=u??new o(12),S=_[0],M=_[1],H=c[0],s=c[1],g=c[2],l=c[1*4+0],f=c[1*4+1],v=c[1*4+2],P=c[2*4+0],B=c[2*4+1],y=c[2*4+2];return c!==d&&(d[0]=H,d[1]=s,d[2]=g,d[4]=l,d[5]=f,d[6]=v),d[8]=H*S+l*M+P,d[9]=s*S+f*M+B,d[10]=g*S+v*M+y,d}function et(c,_){const u=_??new o(12),d=Math.cos(c),S=Math.sin(c);return u[0]=d,u[1]=S,u[2]=0,u[4]=-S,u[5]=d,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Ee(c,_,u){const d=u??new o(12),S=c[0*4+0],M=c[0*4+1],H=c[0*4+2],s=c[1*4+0],g=c[1*4+1],l=c[1*4+2],f=Math.cos(_),v=Math.sin(_);return d[0]=f*S+v*s,d[1]=f*M+v*g,d[2]=f*H+v*l,d[4]=f*s-v*S,d[5]=f*g-v*M,d[6]=f*l-v*H,c!==d&&(d[8]=c[8],d[9]=c[9],d[10]=c[10]),d}function De(c,_){const u=_??new o(12),d=Math.cos(c),S=Math.sin(c);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=d,u[6]=S,u[8]=0,u[9]=-S,u[10]=d,u}function xe(c,_,u){const d=u??new o(12),S=c[4],M=c[5],H=c[6],s=c[8],g=c[9],l=c[10],f=Math.cos(_),v=Math.sin(_);return d[4]=f*S+v*s,d[5]=f*M+v*g,d[6]=f*H+v*l,d[8]=f*s-v*S,d[9]=f*g-v*M,d[10]=f*l-v*H,c!==d&&(d[0]=c[0],d[1]=c[1],d[2]=c[2]),d}function st(c,_){const u=_??new o(12),d=Math.cos(c),S=Math.sin(c);return u[0]=d,u[1]=0,u[2]=-S,u[4]=0,u[5]=1,u[6]=0,u[8]=S,u[9]=0,u[10]=d,u}function We(c,_,u){const d=u??new o(12),S=c[0*4+0],M=c[0*4+1],H=c[0*4+2],s=c[2*4+0],g=c[2*4+1],l=c[2*4+2],f=Math.cos(_),v=Math.sin(_);return d[0]=f*S-v*s,d[1]=f*M-v*g,d[2]=f*H-v*l,d[8]=f*s+v*S,d[9]=f*g+v*M,d[10]=f*l+v*H,c!==d&&(d[4]=c[4],d[5]=c[5],d[6]=c[6]),d}const je=et,se=Ee;function me(c,_){const u=_??new o(12);return u[0]=c[0],u[1]=0,u[2]=0,u[4]=0,u[5]=c[1],u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function ie(c,_,u){const d=u??new o(12),S=_[0],M=_[1];return d[0]=S*c[0*4+0],d[1]=S*c[0*4+1],d[2]=S*c[0*4+2],d[4]=M*c[1*4+0],d[5]=M*c[1*4+1],d[6]=M*c[1*4+2],c!==d&&(d[8]=c[8],d[9]=c[9],d[10]=c[10]),d}function A(c,_){const u=_??new o(12);return u[0]=c[0],u[1]=0,u[2]=0,u[4]=0,u[5]=c[1],u[6]=0,u[8]=0,u[9]=0,u[10]=c[2],u}function Q(c,_,u){const d=u??new o(12),S=_[0],M=_[1],H=_[2];return d[0]=S*c[0*4+0],d[1]=S*c[0*4+1],d[2]=S*c[0*4+2],d[4]=M*c[1*4+0],d[5]=M*c[1*4+1],d[6]=M*c[1*4+2],d[8]=H*c[2*4+0],d[9]=H*c[2*4+1],d[10]=H*c[2*4+2],d}function _e(c,_){const u=_??new o(12);return u[0]=c,u[1]=0,u[2]=0,u[4]=0,u[5]=c,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function we(c,_,u){const d=u??new o(12);return d[0]=_*c[0*4+0],d[1]=_*c[0*4+1],d[2]=_*c[0*4+2],d[4]=_*c[1*4+0],d[5]=_*c[1*4+1],d[6]=_*c[1*4+2],c!==d&&(d[8]=c[8],d[9]=c[9],d[10]=c[10]),d}function Pe(c,_){const u=_??new o(12);return u[0]=c,u[1]=0,u[2]=0,u[4]=0,u[5]=c,u[6]=0,u[8]=0,u[9]=0,u[10]=c,u}function ke(c,_,u){const d=u??new o(12);return d[0]=_*c[0*4+0],d[1]=_*c[0*4+1],d[2]=_*c[0*4+2],d[4]=_*c[1*4+0],d[5]=_*c[1*4+1],d[6]=_*c[1*4+2],d[8]=_*c[2*4+0],d[9]=_*c[2*4+1],d[10]=_*c[2*4+2],d}return{clone:C,create:R,set:T,fromMat4:E,fromQuat:U,negate:O,copy:I,equalsApproximately:K,equals:X,identity:$,transpose:ne,inverse:Z,invert:J,determinant:Y,mul:ae,multiply:re,setTranslation:ye,getTranslation:Me,getAxis:Ie,setAxis:Ne,getScaling:Oe,get3DScaling:Be,translation:Fe,translate:He,rotation:et,rotate:Ee,rotationX:De,rotateX:xe,rotationY:st,rotateY:We,rotationZ:je,rotateZ:se,scaling:me,scale:ie,uniformScaling:_e,uniformScale:we,scaling3D:A,scale3D:Q,uniformScaling3D:Pe,uniformScale3D:ke}}const Ac=new Map;function Oh(o){let p=Ac.get(o);return p||(p=Nh(o),Ac.set(o,p)),p}function Fh(o){const p=Bo(o);function m(s,g,l,f,v,P,B,y,w,k,D,j,G,q,fe,Re){const ue=new o(16);return s!==void 0&&(ue[0]=s,g!==void 0&&(ue[1]=g,l!==void 0&&(ue[2]=l,f!==void 0&&(ue[3]=f,v!==void 0&&(ue[4]=v,P!==void 0&&(ue[5]=P,B!==void 0&&(ue[6]=B,y!==void 0&&(ue[7]=y,w!==void 0&&(ue[8]=w,k!==void 0&&(ue[9]=k,D!==void 0&&(ue[10]=D,j!==void 0&&(ue[11]=j,G!==void 0&&(ue[12]=G,q!==void 0&&(ue[13]=q,fe!==void 0&&(ue[14]=fe,Re!==void 0&&(ue[15]=Re)))))))))))))))),ue}function R(s,g,l,f,v,P,B,y,w,k,D,j,G,q,fe,Re,ue){const de=ue??new o(16);return de[0]=s,de[1]=g,de[2]=l,de[3]=f,de[4]=v,de[5]=P,de[6]=B,de[7]=y,de[8]=w,de[9]=k,de[10]=D,de[11]=j,de[12]=G,de[13]=q,de[14]=fe,de[15]=Re,de}function T(s,g){const l=g??new o(16);return l[0]=s[0],l[1]=s[1],l[2]=s[2],l[3]=0,l[4]=s[4],l[5]=s[5],l[6]=s[6],l[7]=0,l[8]=s[8],l[9]=s[9],l[10]=s[10],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function E(s,g){const l=g??new o(16),f=s[0],v=s[1],P=s[2],B=s[3],y=f+f,w=v+v,k=P+P,D=f*y,j=v*y,G=v*w,q=P*y,fe=P*w,Re=P*k,ue=B*y,de=B*w,ze=B*k;return l[0]=1-G-Re,l[1]=j+ze,l[2]=q-de,l[3]=0,l[4]=j-ze,l[5]=1-D-Re,l[6]=fe+ue,l[7]=0,l[8]=q+de,l[9]=fe-ue,l[10]=1-D-G,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function U(s,g){const l=g??new o(16);return l[0]=-s[0],l[1]=-s[1],l[2]=-s[2],l[3]=-s[3],l[4]=-s[4],l[5]=-s[5],l[6]=-s[6],l[7]=-s[7],l[8]=-s[8],l[9]=-s[9],l[10]=-s[10],l[11]=-s[11],l[12]=-s[12],l[13]=-s[13],l[14]=-s[14],l[15]=-s[15],l}function O(s,g){const l=g??new o(16);return l[0]=s[0],l[1]=s[1],l[2]=s[2],l[3]=s[3],l[4]=s[4],l[5]=s[5],l[6]=s[6],l[7]=s[7],l[8]=s[8],l[9]=s[9],l[10]=s[10],l[11]=s[11],l[12]=s[12],l[13]=s[13],l[14]=s[14],l[15]=s[15],l}const I=O;function C(s,g){return Math.abs(s[0]-g[0])<Ue&&Math.abs(s[1]-g[1])<Ue&&Math.abs(s[2]-g[2])<Ue&&Math.abs(s[3]-g[3])<Ue&&Math.abs(s[4]-g[4])<Ue&&Math.abs(s[5]-g[5])<Ue&&Math.abs(s[6]-g[6])<Ue&&Math.abs(s[7]-g[7])<Ue&&Math.abs(s[8]-g[8])<Ue&&Math.abs(s[9]-g[9])<Ue&&Math.abs(s[10]-g[10])<Ue&&Math.abs(s[11]-g[11])<Ue&&Math.abs(s[12]-g[12])<Ue&&Math.abs(s[13]-g[13])<Ue&&Math.abs(s[14]-g[14])<Ue&&Math.abs(s[15]-g[15])<Ue}function K(s,g){return s[0]===g[0]&&s[1]===g[1]&&s[2]===g[2]&&s[3]===g[3]&&s[4]===g[4]&&s[5]===g[5]&&s[6]===g[6]&&s[7]===g[7]&&s[8]===g[8]&&s[9]===g[9]&&s[10]===g[10]&&s[11]===g[11]&&s[12]===g[12]&&s[13]===g[13]&&s[14]===g[14]&&s[15]===g[15]}function X(s){const g=s??new o(16);return g[0]=1,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=1,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,g}function $(s,g){const l=g??new o(16);if(l===s){let Ae;return Ae=s[1],s[1]=s[4],s[4]=Ae,Ae=s[2],s[2]=s[8],s[8]=Ae,Ae=s[3],s[3]=s[12],s[12]=Ae,Ae=s[6],s[6]=s[9],s[9]=Ae,Ae=s[7],s[7]=s[13],s[13]=Ae,Ae=s[11],s[11]=s[14],s[14]=Ae,l}const f=s[0*4+0],v=s[0*4+1],P=s[0*4+2],B=s[0*4+3],y=s[1*4+0],w=s[1*4+1],k=s[1*4+2],D=s[1*4+3],j=s[2*4+0],G=s[2*4+1],q=s[2*4+2],fe=s[2*4+3],Re=s[3*4+0],ue=s[3*4+1],de=s[3*4+2],ze=s[3*4+3];return l[0]=f,l[1]=y,l[2]=j,l[3]=Re,l[4]=v,l[5]=w,l[6]=G,l[7]=ue,l[8]=P,l[9]=k,l[10]=q,l[11]=de,l[12]=B,l[13]=D,l[14]=fe,l[15]=ze,l}function ne(s,g){const l=g??new o(16),f=s[0*4+0],v=s[0*4+1],P=s[0*4+2],B=s[0*4+3],y=s[1*4+0],w=s[1*4+1],k=s[1*4+2],D=s[1*4+3],j=s[2*4+0],G=s[2*4+1],q=s[2*4+2],fe=s[2*4+3],Re=s[3*4+0],ue=s[3*4+1],de=s[3*4+2],ze=s[3*4+3],Ae=q*ze,Qe=de*fe,lt=k*ze,tt=de*D,ut=k*fe,dt=q*D,pt=P*ze,ht=de*B,nt=P*fe,rt=q*B,vt=P*D,wt=k*B,St=j*ue,Tt=Re*G,kt=y*ue,Mt=Re*w,Pt=y*G,ln=j*w,Pn=f*ue,un=Re*v,ur=f*G,cn=j*v,vn=f*w,wn=y*v,cr=Ae*w+tt*G+ut*ue-(Qe*w+lt*G+dt*ue),_i=Qe*v+pt*G+rt*ue-(Ae*v+ht*G+nt*ue),xi=lt*v+ht*w+vt*ue-(tt*v+pt*w+wt*ue),Ri=dt*v+nt*w+wt*G-(ut*v+rt*w+vt*G),Xe=1/(f*cr+y*_i+j*xi+Re*Ri);return l[0]=Xe*cr,l[1]=Xe*_i,l[2]=Xe*xi,l[3]=Xe*Ri,l[4]=Xe*(Qe*y+lt*j+dt*Re-(Ae*y+tt*j+ut*Re)),l[5]=Xe*(Ae*f+ht*j+nt*Re-(Qe*f+pt*j+rt*Re)),l[6]=Xe*(tt*f+pt*y+wt*Re-(lt*f+ht*y+vt*Re)),l[7]=Xe*(ut*f+rt*y+vt*j-(dt*f+nt*y+wt*j)),l[8]=Xe*(St*D+Mt*fe+Pt*ze-(Tt*D+kt*fe+ln*ze)),l[9]=Xe*(Tt*B+Pn*fe+cn*ze-(St*B+un*fe+ur*ze)),l[10]=Xe*(kt*B+un*D+vn*ze-(Mt*B+Pn*D+wn*ze)),l[11]=Xe*(ln*B+ur*D+wn*fe-(Pt*B+cn*D+vn*fe)),l[12]=Xe*(kt*q+ln*de+Tt*k-(Pt*de+St*k+Mt*q)),l[13]=Xe*(ur*de+St*P+un*q-(Pn*q+cn*de+Tt*P)),l[14]=Xe*(Pn*k+wn*de+Mt*P-(vn*de+kt*P+un*k)),l[15]=Xe*(vn*q+Pt*P+cn*k-(ur*k+wn*q+ln*P)),l}function Z(s){const g=s[0],l=s[0*4+1],f=s[0*4+2],v=s[0*4+3],P=s[1*4+0],B=s[1*4+1],y=s[1*4+2],w=s[1*4+3],k=s[2*4+0],D=s[2*4+1],j=s[2*4+2],G=s[2*4+3],q=s[3*4+0],fe=s[3*4+1],Re=s[3*4+2],ue=s[3*4+3],de=j*ue,ze=Re*G,Ae=y*ue,Qe=Re*w,lt=y*G,tt=j*w,ut=f*ue,dt=Re*v,pt=f*G,ht=j*v,nt=f*w,rt=y*v,vt=de*B+Qe*D+lt*fe-(ze*B+Ae*D+tt*fe),wt=ze*l+ut*D+ht*fe-(de*l+dt*D+pt*fe),St=Ae*l+dt*B+nt*fe-(Qe*l+ut*B+rt*fe),Tt=tt*l+pt*B+rt*D-(lt*l+ht*B+nt*D);return g*vt+P*wt+k*St+q*Tt}const Y=ne;function J(s,g,l){const f=l??new o(16),v=s[0],P=s[1],B=s[2],y=s[3],w=s[4],k=s[5],D=s[6],j=s[7],G=s[8],q=s[9],fe=s[10],Re=s[11],ue=s[12],de=s[13],ze=s[14],Ae=s[15],Qe=g[0],lt=g[1],tt=g[2],ut=g[3],dt=g[4],pt=g[5],ht=g[6],nt=g[7],rt=g[8],vt=g[9],wt=g[10],St=g[11],Tt=g[12],kt=g[13],Mt=g[14],Pt=g[15];return f[0]=v*Qe+w*lt+G*tt+ue*ut,f[1]=P*Qe+k*lt+q*tt+de*ut,f[2]=B*Qe+D*lt+fe*tt+ze*ut,f[3]=y*Qe+j*lt+Re*tt+Ae*ut,f[4]=v*dt+w*pt+G*ht+ue*nt,f[5]=P*dt+k*pt+q*ht+de*nt,f[6]=B*dt+D*pt+fe*ht+ze*nt,f[7]=y*dt+j*pt+Re*ht+Ae*nt,f[8]=v*rt+w*vt+G*wt+ue*St,f[9]=P*rt+k*vt+q*wt+de*St,f[10]=B*rt+D*vt+fe*wt+ze*St,f[11]=y*rt+j*vt+Re*wt+Ae*St,f[12]=v*Tt+w*kt+G*Mt+ue*Pt,f[13]=P*Tt+k*kt+q*Mt+de*Pt,f[14]=B*Tt+D*kt+fe*Mt+ze*Pt,f[15]=y*Tt+j*kt+Re*Mt+Ae*Pt,f}const re=J;function ae(s,g,l){const f=l??X();return s!==f&&(f[0]=s[0],f[1]=s[1],f[2]=s[2],f[3]=s[3],f[4]=s[4],f[5]=s[5],f[6]=s[6],f[7]=s[7],f[8]=s[8],f[9]=s[9],f[10]=s[10],f[11]=s[11]),f[12]=g[0],f[13]=g[1],f[14]=g[2],f[15]=1,f}function ye(s,g){const l=g??p.create();return l[0]=s[12],l[1]=s[13],l[2]=s[14],l}function Me(s,g,l){const f=l??p.create(),v=g*4;return f[0]=s[v+0],f[1]=s[v+1],f[2]=s[v+2],f}function Ie(s,g,l,f){const v=f===s?f:O(s,f),P=l*4;return v[P+0]=g[0],v[P+1]=g[1],v[P+2]=g[2],v}function Ne(s,g){const l=g??p.create(),f=s[0],v=s[1],P=s[2],B=s[4],y=s[5],w=s[6],k=s[8],D=s[9],j=s[10];return l[0]=Math.sqrt(f*f+v*v+P*P),l[1]=Math.sqrt(B*B+y*y+w*w),l[2]=Math.sqrt(k*k+D*D+j*j),l}function Oe(s,g,l,f,v){const P=v??new o(16),B=Math.tan(Math.PI*.5-.5*s);if(P[0]=B/g,P[1]=0,P[2]=0,P[3]=0,P[4]=0,P[5]=B,P[6]=0,P[7]=0,P[8]=0,P[9]=0,P[11]=-1,P[12]=0,P[13]=0,P[15]=0,Number.isFinite(f)){const y=1/(l-f);P[10]=f*y,P[14]=f*l*y}else P[10]=-1,P[14]=-l;return P}function Be(s,g,l,f=1/0,v){const P=v??new o(16),B=1/Math.tan(s*.5);if(P[0]=B/g,P[1]=0,P[2]=0,P[3]=0,P[4]=0,P[5]=B,P[6]=0,P[7]=0,P[8]=0,P[9]=0,P[11]=-1,P[12]=0,P[13]=0,P[15]=0,f===1/0)P[10]=0,P[14]=l;else{const y=1/(f-l);P[10]=l*y,P[14]=f*l*y}return P}function Fe(s,g,l,f,v,P,B){const y=B??new o(16);return y[0]=2/(g-s),y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2/(f-l),y[6]=0,y[7]=0,y[8]=0,y[9]=0,y[10]=1/(v-P),y[11]=0,y[12]=(g+s)/(s-g),y[13]=(f+l)/(l-f),y[14]=v/(v-P),y[15]=1,y}function He(s,g,l,f,v,P,B){const y=B??new o(16),w=g-s,k=f-l,D=v-P;return y[0]=2*v/w,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*v/k,y[6]=0,y[7]=0,y[8]=(s+g)/w,y[9]=(f+l)/k,y[10]=P/D,y[11]=-1,y[12]=0,y[13]=0,y[14]=v*P/D,y[15]=0,y}function et(s,g,l,f,v,P=1/0,B){const y=B??new o(16),w=g-s,k=f-l;if(y[0]=2*v/w,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*v/k,y[6]=0,y[7]=0,y[8]=(s+g)/w,y[9]=(f+l)/k,y[11]=-1,y[12]=0,y[13]=0,y[15]=0,P===1/0)y[10]=0,y[14]=v;else{const D=1/(P-v);y[10]=v*D,y[14]=P*v*D}return y}const Ee=p.create(),De=p.create(),xe=p.create();function st(s,g,l,f){const v=f??new o(16);return p.normalize(p.subtract(g,s,xe),xe),p.normalize(p.cross(l,xe,Ee),Ee),p.normalize(p.cross(xe,Ee,De),De),v[0]=Ee[0],v[1]=Ee[1],v[2]=Ee[2],v[3]=0,v[4]=De[0],v[5]=De[1],v[6]=De[2],v[7]=0,v[8]=xe[0],v[9]=xe[1],v[10]=xe[2],v[11]=0,v[12]=s[0],v[13]=s[1],v[14]=s[2],v[15]=1,v}function We(s,g,l,f){const v=f??new o(16);return p.normalize(p.subtract(s,g,xe),xe),p.normalize(p.cross(l,xe,Ee),Ee),p.normalize(p.cross(xe,Ee,De),De),v[0]=Ee[0],v[1]=Ee[1],v[2]=Ee[2],v[3]=0,v[4]=De[0],v[5]=De[1],v[6]=De[2],v[7]=0,v[8]=xe[0],v[9]=xe[1],v[10]=xe[2],v[11]=0,v[12]=s[0],v[13]=s[1],v[14]=s[2],v[15]=1,v}function je(s,g,l,f){const v=f??new o(16);return p.normalize(p.subtract(s,g,xe),xe),p.normalize(p.cross(l,xe,Ee),Ee),p.normalize(p.cross(xe,Ee,De),De),v[0]=Ee[0],v[1]=De[0],v[2]=xe[0],v[3]=0,v[4]=Ee[1],v[5]=De[1],v[6]=xe[1],v[7]=0,v[8]=Ee[2],v[9]=De[2],v[10]=xe[2],v[11]=0,v[12]=-(Ee[0]*s[0]+Ee[1]*s[1]+Ee[2]*s[2]),v[13]=-(De[0]*s[0]+De[1]*s[1]+De[2]*s[2]),v[14]=-(xe[0]*s[0]+xe[1]*s[1]+xe[2]*s[2]),v[15]=1,v}function se(s,g){const l=g??new o(16);return l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=s[0],l[13]=s[1],l[14]=s[2],l[15]=1,l}function me(s,g,l){const f=l??new o(16),v=g[0],P=g[1],B=g[2],y=s[0],w=s[1],k=s[2],D=s[3],j=s[1*4+0],G=s[1*4+1],q=s[1*4+2],fe=s[1*4+3],Re=s[2*4+0],ue=s[2*4+1],de=s[2*4+2],ze=s[2*4+3],Ae=s[3*4+0],Qe=s[3*4+1],lt=s[3*4+2],tt=s[3*4+3];return s!==f&&(f[0]=y,f[1]=w,f[2]=k,f[3]=D,f[4]=j,f[5]=G,f[6]=q,f[7]=fe,f[8]=Re,f[9]=ue,f[10]=de,f[11]=ze),f[12]=y*v+j*P+Re*B+Ae,f[13]=w*v+G*P+ue*B+Qe,f[14]=k*v+q*P+de*B+lt,f[15]=D*v+fe*P+ze*B+tt,f}function ie(s,g){const l=g??new o(16),f=Math.cos(s),v=Math.sin(s);return l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=f,l[6]=v,l[7]=0,l[8]=0,l[9]=-v,l[10]=f,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function A(s,g,l){const f=l??new o(16),v=s[4],P=s[5],B=s[6],y=s[7],w=s[8],k=s[9],D=s[10],j=s[11],G=Math.cos(g),q=Math.sin(g);return f[4]=G*v+q*w,f[5]=G*P+q*k,f[6]=G*B+q*D,f[7]=G*y+q*j,f[8]=G*w-q*v,f[9]=G*k-q*P,f[10]=G*D-q*B,f[11]=G*j-q*y,s!==f&&(f[0]=s[0],f[1]=s[1],f[2]=s[2],f[3]=s[3],f[12]=s[12],f[13]=s[13],f[14]=s[14],f[15]=s[15]),f}function Q(s,g){const l=g??new o(16),f=Math.cos(s),v=Math.sin(s);return l[0]=f,l[1]=0,l[2]=-v,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=v,l[9]=0,l[10]=f,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function _e(s,g,l){const f=l??new o(16),v=s[0*4+0],P=s[0*4+1],B=s[0*4+2],y=s[0*4+3],w=s[2*4+0],k=s[2*4+1],D=s[2*4+2],j=s[2*4+3],G=Math.cos(g),q=Math.sin(g);return f[0]=G*v-q*w,f[1]=G*P-q*k,f[2]=G*B-q*D,f[3]=G*y-q*j,f[8]=G*w+q*v,f[9]=G*k+q*P,f[10]=G*D+q*B,f[11]=G*j+q*y,s!==f&&(f[4]=s[4],f[5]=s[5],f[6]=s[6],f[7]=s[7],f[12]=s[12],f[13]=s[13],f[14]=s[14],f[15]=s[15]),f}function we(s,g){const l=g??new o(16),f=Math.cos(s),v=Math.sin(s);return l[0]=f,l[1]=v,l[2]=0,l[3]=0,l[4]=-v,l[5]=f,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function Pe(s,g,l){const f=l??new o(16),v=s[0*4+0],P=s[0*4+1],B=s[0*4+2],y=s[0*4+3],w=s[1*4+0],k=s[1*4+1],D=s[1*4+2],j=s[1*4+3],G=Math.cos(g),q=Math.sin(g);return f[0]=G*v+q*w,f[1]=G*P+q*k,f[2]=G*B+q*D,f[3]=G*y+q*j,f[4]=G*w-q*v,f[5]=G*k-q*P,f[6]=G*D-q*B,f[7]=G*j-q*y,s!==f&&(f[8]=s[8],f[9]=s[9],f[10]=s[10],f[11]=s[11],f[12]=s[12],f[13]=s[13],f[14]=s[14],f[15]=s[15]),f}function ke(s,g,l){const f=l??new o(16);let v=s[0],P=s[1],B=s[2];const y=Math.sqrt(v*v+P*P+B*B);v/=y,P/=y,B/=y;const w=v*v,k=P*P,D=B*B,j=Math.cos(g),G=Math.sin(g),q=1-j;return f[0]=w+(1-w)*j,f[1]=v*P*q+B*G,f[2]=v*B*q-P*G,f[3]=0,f[4]=v*P*q-B*G,f[5]=k+(1-k)*j,f[6]=P*B*q+v*G,f[7]=0,f[8]=v*B*q+P*G,f[9]=P*B*q-v*G,f[10]=D+(1-D)*j,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,f}const c=ke;function _(s,g,l,f){const v=f??new o(16);let P=g[0],B=g[1],y=g[2];const w=Math.sqrt(P*P+B*B+y*y);P/=w,B/=w,y/=w;const k=P*P,D=B*B,j=y*y,G=Math.cos(l),q=Math.sin(l),fe=1-G,Re=k+(1-k)*G,ue=P*B*fe+y*q,de=P*y*fe-B*q,ze=P*B*fe-y*q,Ae=D+(1-D)*G,Qe=B*y*fe+P*q,lt=P*y*fe+B*q,tt=B*y*fe-P*q,ut=j+(1-j)*G,dt=s[0],pt=s[1],ht=s[2],nt=s[3],rt=s[4],vt=s[5],wt=s[6],St=s[7],Tt=s[8],kt=s[9],Mt=s[10],Pt=s[11];return v[0]=Re*dt+ue*rt+de*Tt,v[1]=Re*pt+ue*vt+de*kt,v[2]=Re*ht+ue*wt+de*Mt,v[3]=Re*nt+ue*St+de*Pt,v[4]=ze*dt+Ae*rt+Qe*Tt,v[5]=ze*pt+Ae*vt+Qe*kt,v[6]=ze*ht+Ae*wt+Qe*Mt,v[7]=ze*nt+Ae*St+Qe*Pt,v[8]=lt*dt+tt*rt+ut*Tt,v[9]=lt*pt+tt*vt+ut*kt,v[10]=lt*ht+tt*wt+ut*Mt,v[11]=lt*nt+tt*St+ut*Pt,s!==v&&(v[12]=s[12],v[13]=s[13],v[14]=s[14],v[15]=s[15]),v}const u=_;function d(s,g){const l=g??new o(16);return l[0]=s[0],l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=s[1],l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=s[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function S(s,g,l){const f=l??new o(16),v=g[0],P=g[1],B=g[2];return f[0]=v*s[0*4+0],f[1]=v*s[0*4+1],f[2]=v*s[0*4+2],f[3]=v*s[0*4+3],f[4]=P*s[1*4+0],f[5]=P*s[1*4+1],f[6]=P*s[1*4+2],f[7]=P*s[1*4+3],f[8]=B*s[2*4+0],f[9]=B*s[2*4+1],f[10]=B*s[2*4+2],f[11]=B*s[2*4+3],s!==f&&(f[12]=s[12],f[13]=s[13],f[14]=s[14],f[15]=s[15]),f}function M(s,g){const l=g??new o(16);return l[0]=s,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=s,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=s,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function H(s,g,l){const f=l??new o(16);return f[0]=g*s[0*4+0],f[1]=g*s[0*4+1],f[2]=g*s[0*4+2],f[3]=g*s[0*4+3],f[4]=g*s[1*4+0],f[5]=g*s[1*4+1],f[6]=g*s[1*4+2],f[7]=g*s[1*4+3],f[8]=g*s[2*4+0],f[9]=g*s[2*4+1],f[10]=g*s[2*4+2],f[11]=g*s[2*4+3],s!==f&&(f[12]=s[12],f[13]=s[13],f[14]=s[14],f[15]=s[15]),f}return{create:m,set:R,fromMat3:T,fromQuat:E,negate:U,copy:O,clone:I,equalsApproximately:C,equals:K,identity:X,transpose:$,inverse:ne,determinant:Z,invert:Y,multiply:J,mul:re,setTranslation:ae,getTranslation:ye,getAxis:Me,setAxis:Ie,getScaling:Ne,perspective:Oe,perspectiveReverseZ:Be,ortho:Fe,frustum:He,frustumReverseZ:et,aim:st,cameraAim:We,lookAt:je,translation:se,translate:me,rotationX:ie,rotateX:A,rotationY:Q,rotateY:_e,rotationZ:we,rotateZ:Pe,axisRotation:ke,rotation:c,axisRotate:_,rotate:u,scaling:d,scale:S,uniformScaling:M,uniformScale:H}}const Cc=new Map;function Hh(o){let p=Cc.get(o);return p||(p=Fh(o),Cc.set(o,p)),p}function Bh(o){const p=Bo(o);function m(c,_,u,d){const S=new o(4);return c!==void 0&&(S[0]=c,_!==void 0&&(S[1]=_,u!==void 0&&(S[2]=u,d!==void 0&&(S[3]=d)))),S}const R=m;function T(c,_,u,d,S){const M=S??new o(4);return M[0]=c,M[1]=_,M[2]=u,M[3]=d,M}function E(c,_,u){const d=u??new o(4),S=_*.5,M=Math.sin(S);return d[0]=M*c[0],d[1]=M*c[1],d[2]=M*c[2],d[3]=Math.cos(S),d}function U(c,_){const u=_??p.create(3),d=Math.acos(c[3])*2,S=Math.sin(d*.5);return S>Ue?(u[0]=c[0]/S,u[1]=c[1]/S,u[2]=c[2]/S):(u[0]=1,u[1]=0,u[2]=0),{angle:d,axis:u}}function O(c,_){const u=He(c,_);return Math.acos(2*u*u-1)}function I(c,_,u){const d=u??new o(4),S=c[0],M=c[1],H=c[2],s=c[3],g=_[0],l=_[1],f=_[2],v=_[3];return d[0]=S*v+s*g+M*f-H*l,d[1]=M*v+s*l+H*g-S*f,d[2]=H*v+s*f+S*l-M*g,d[3]=s*v-S*g-M*l-H*f,d}const C=I;function K(c,_,u){const d=u??new o(4),S=_*.5,M=c[0],H=c[1],s=c[2],g=c[3],l=Math.sin(S),f=Math.cos(S);return d[0]=M*f+g*l,d[1]=H*f+s*l,d[2]=s*f-H*l,d[3]=g*f-M*l,d}function X(c,_,u){const d=u??new o(4),S=_*.5,M=c[0],H=c[1],s=c[2],g=c[3],l=Math.sin(S),f=Math.cos(S);return d[0]=M*f-s*l,d[1]=H*f+g*l,d[2]=s*f+M*l,d[3]=g*f-H*l,d}function $(c,_,u){const d=u??new o(4),S=_*.5,M=c[0],H=c[1],s=c[2],g=c[3],l=Math.sin(S),f=Math.cos(S);return d[0]=M*f+H*l,d[1]=H*f-M*l,d[2]=s*f+g*l,d[3]=g*f-s*l,d}function ne(c,_,u,d){const S=d??new o(4),M=c[0],H=c[1],s=c[2],g=c[3];let l=_[0],f=_[1],v=_[2],P=_[3],B=M*l+H*f+s*v+g*P;B<0&&(B=-B,l=-l,f=-f,v=-v,P=-P);let y,w;if(1-B>Ue){const k=Math.acos(B),D=Math.sin(k);y=Math.sin((1-u)*k)/D,w=Math.sin(u*k)/D}else y=1-u,w=u;return S[0]=y*M+w*l,S[1]=y*H+w*f,S[2]=y*s+w*v,S[3]=y*g+w*P,S}function Z(c,_){const u=_??new o(4),d=c[0],S=c[1],M=c[2],H=c[3],s=d*d+S*S+M*M+H*H,g=s?1/s:0;return u[0]=-d*g,u[1]=-S*g,u[2]=-M*g,u[3]=H*g,u}function Y(c,_){const u=_??new o(4);return u[0]=-c[0],u[1]=-c[1],u[2]=-c[2],u[3]=c[3],u}function J(c,_){const u=_??new o(4),d=c[0]+c[5]+c[10];if(d>0){const S=Math.sqrt(d+1);u[3]=.5*S;const M=.5/S;u[0]=(c[6]-c[9])*M,u[1]=(c[8]-c[2])*M,u[2]=(c[1]-c[4])*M}else{let S=0;c[5]>c[0]&&(S=1),c[10]>c[S*4+S]&&(S=2);const M=(S+1)%3,H=(S+2)%3,s=Math.sqrt(c[S*4+S]-c[M*4+M]-c[H*4+H]+1);u[S]=.5*s;const g=.5/s;u[3]=(c[M*4+H]-c[H*4+M])*g,u[M]=(c[M*4+S]+c[S*4+M])*g,u[H]=(c[H*4+S]+c[S*4+H])*g}return u}function re(c,_,u,d,S){const M=S??new o(4),H=c*.5,s=_*.5,g=u*.5,l=Math.sin(H),f=Math.cos(H),v=Math.sin(s),P=Math.cos(s),B=Math.sin(g),y=Math.cos(g);switch(d){case"xyz":M[0]=l*P*y+f*v*B,M[1]=f*v*y-l*P*B,M[2]=f*P*B+l*v*y,M[3]=f*P*y-l*v*B;break;case"xzy":M[0]=l*P*y-f*v*B,M[1]=f*v*y-l*P*B,M[2]=f*P*B+l*v*y,M[3]=f*P*y+l*v*B;break;case"yxz":M[0]=l*P*y+f*v*B,M[1]=f*v*y-l*P*B,M[2]=f*P*B-l*v*y,M[3]=f*P*y+l*v*B;break;case"yzx":M[0]=l*P*y+f*v*B,M[1]=f*v*y+l*P*B,M[2]=f*P*B-l*v*y,M[3]=f*P*y-l*v*B;break;case"zxy":M[0]=l*P*y-f*v*B,M[1]=f*v*y+l*P*B,M[2]=f*P*B+l*v*y,M[3]=f*P*y-l*v*B;break;case"zyx":M[0]=l*P*y-f*v*B,M[1]=f*v*y+l*P*B,M[2]=f*P*B-l*v*y,M[3]=f*P*y+l*v*B;break;default:throw new Error(`Unknown rotation order: ${d}`)}return M}function ae(c,_){const u=_??new o(4);return u[0]=c[0],u[1]=c[1],u[2]=c[2],u[3]=c[3],u}const ye=ae;function Me(c,_,u){const d=u??new o(4);return d[0]=c[0]+_[0],d[1]=c[1]+_[1],d[2]=c[2]+_[2],d[3]=c[3]+_[3],d}function Ie(c,_,u){const d=u??new o(4);return d[0]=c[0]-_[0],d[1]=c[1]-_[1],d[2]=c[2]-_[2],d[3]=c[3]-_[3],d}const Ne=Ie;function Oe(c,_,u){const d=u??new o(4);return d[0]=c[0]*_,d[1]=c[1]*_,d[2]=c[2]*_,d[3]=c[3]*_,d}const Be=Oe;function Fe(c,_,u){const d=u??new o(4);return d[0]=c[0]/_,d[1]=c[1]/_,d[2]=c[2]/_,d[3]=c[3]/_,d}function He(c,_){return c[0]*_[0]+c[1]*_[1]+c[2]*_[2]+c[3]*_[3]}function et(c,_,u,d){const S=d??new o(4);return S[0]=c[0]+u*(_[0]-c[0]),S[1]=c[1]+u*(_[1]-c[1]),S[2]=c[2]+u*(_[2]-c[2]),S[3]=c[3]+u*(_[3]-c[3]),S}function Ee(c){const _=c[0],u=c[1],d=c[2],S=c[3];return Math.sqrt(_*_+u*u+d*d+S*S)}const De=Ee;function xe(c){const _=c[0],u=c[1],d=c[2],S=c[3];return _*_+u*u+d*d+S*S}const st=xe;function We(c,_){const u=_??new o(4),d=c[0],S=c[1],M=c[2],H=c[3],s=Math.sqrt(d*d+S*S+M*M+H*H);return s>1e-5?(u[0]=d/s,u[1]=S/s,u[2]=M/s,u[3]=H/s):(u[0]=0,u[1]=0,u[2]=0,u[3]=1),u}function je(c,_){return Math.abs(c[0]-_[0])<Ue&&Math.abs(c[1]-_[1])<Ue&&Math.abs(c[2]-_[2])<Ue&&Math.abs(c[3]-_[3])<Ue}function se(c,_){return c[0]===_[0]&&c[1]===_[1]&&c[2]===_[2]&&c[3]===_[3]}function me(c){const _=c??new o(4);return _[0]=0,_[1]=0,_[2]=0,_[3]=1,_}const ie=p.create(),A=p.create(),Q=p.create();function _e(c,_,u){const d=u??new o(4),S=p.dot(c,_);return S<-.999999?(p.cross(A,c,ie),p.len(ie)<1e-6&&p.cross(Q,c,ie),p.normalize(ie,ie),E(ie,Math.PI,d),d):S>.999999?(d[0]=0,d[1]=0,d[2]=0,d[3]=1,d):(p.cross(c,_,ie),d[0]=ie[0],d[1]=ie[1],d[2]=ie[2],d[3]=1+S,We(d,d))}const we=new o(4),Pe=new o(4);function ke(c,_,u,d,S,M){const H=M??new o(4);return ne(c,d,S,we),ne(_,u,S,Pe),ne(we,Pe,2*S*(1-S),H),H}return{create:m,fromValues:R,set:T,fromAxisAngle:E,toAxisAngle:U,angle:O,multiply:I,mul:C,rotateX:K,rotateY:X,rotateZ:$,slerp:ne,inverse:Z,conjugate:Y,fromMat:J,fromEuler:re,copy:ae,clone:ye,add:Me,subtract:Ie,sub:Ne,mulScalar:Oe,scale:Be,divScalar:Fe,dot:He,lerp:et,length:Ee,len:De,lengthSq:xe,lenSq:st,normalize:We,equalsApproximately:je,equals:se,identity:me,rotationTo:_e,sqlerp:ke}}const Nc=new Map;function jh(o){let p=Nc.get(o);return p||(p=Bh(o),Nc.set(o,p)),p}function Vh(o){function p(u,d,S,M){const H=new o(4);return u!==void 0&&(H[0]=u,d!==void 0&&(H[1]=d,S!==void 0&&(H[2]=S,M!==void 0&&(H[3]=M)))),H}const m=p;function R(u,d,S,M,H){const s=H??new o(4);return s[0]=u,s[1]=d,s[2]=S,s[3]=M,s}function T(u,d){const S=d??new o(4);return S[0]=Math.ceil(u[0]),S[1]=Math.ceil(u[1]),S[2]=Math.ceil(u[2]),S[3]=Math.ceil(u[3]),S}function E(u,d){const S=d??new o(4);return S[0]=Math.floor(u[0]),S[1]=Math.floor(u[1]),S[2]=Math.floor(u[2]),S[3]=Math.floor(u[3]),S}function U(u,d){const S=d??new o(4);return S[0]=Math.round(u[0]),S[1]=Math.round(u[1]),S[2]=Math.round(u[2]),S[3]=Math.round(u[3]),S}function O(u,d=0,S=1,M){const H=M??new o(4);return H[0]=Math.min(S,Math.max(d,u[0])),H[1]=Math.min(S,Math.max(d,u[1])),H[2]=Math.min(S,Math.max(d,u[2])),H[3]=Math.min(S,Math.max(d,u[3])),H}function I(u,d,S){const M=S??new o(4);return M[0]=u[0]+d[0],M[1]=u[1]+d[1],M[2]=u[2]+d[2],M[3]=u[3]+d[3],M}function C(u,d,S,M){const H=M??new o(4);return H[0]=u[0]+d[0]*S,H[1]=u[1]+d[1]*S,H[2]=u[2]+d[2]*S,H[3]=u[3]+d[3]*S,H}function K(u,d,S){const M=S??new o(4);return M[0]=u[0]-d[0],M[1]=u[1]-d[1],M[2]=u[2]-d[2],M[3]=u[3]-d[3],M}const X=K;function $(u,d){return Math.abs(u[0]-d[0])<Ue&&Math.abs(u[1]-d[1])<Ue&&Math.abs(u[2]-d[2])<Ue&&Math.abs(u[3]-d[3])<Ue}function ne(u,d){return u[0]===d[0]&&u[1]===d[1]&&u[2]===d[2]&&u[3]===d[3]}function Z(u,d,S,M){const H=M??new o(4);return H[0]=u[0]+S*(d[0]-u[0]),H[1]=u[1]+S*(d[1]-u[1]),H[2]=u[2]+S*(d[2]-u[2]),H[3]=u[3]+S*(d[3]-u[3]),H}function Y(u,d,S,M){const H=M??new o(4);return H[0]=u[0]+S[0]*(d[0]-u[0]),H[1]=u[1]+S[1]*(d[1]-u[1]),H[2]=u[2]+S[2]*(d[2]-u[2]),H[3]=u[3]+S[3]*(d[3]-u[3]),H}function J(u,d,S){const M=S??new o(4);return M[0]=Math.max(u[0],d[0]),M[1]=Math.max(u[1],d[1]),M[2]=Math.max(u[2],d[2]),M[3]=Math.max(u[3],d[3]),M}function re(u,d,S){const M=S??new o(4);return M[0]=Math.min(u[0],d[0]),M[1]=Math.min(u[1],d[1]),M[2]=Math.min(u[2],d[2]),M[3]=Math.min(u[3],d[3]),M}function ae(u,d,S){const M=S??new o(4);return M[0]=u[0]*d,M[1]=u[1]*d,M[2]=u[2]*d,M[3]=u[3]*d,M}const ye=ae;function Me(u,d,S){const M=S??new o(4);return M[0]=u[0]/d,M[1]=u[1]/d,M[2]=u[2]/d,M[3]=u[3]/d,M}function Ie(u,d){const S=d??new o(4);return S[0]=1/u[0],S[1]=1/u[1],S[2]=1/u[2],S[3]=1/u[3],S}const Ne=Ie;function Oe(u,d){return u[0]*d[0]+u[1]*d[1]+u[2]*d[2]+u[3]*d[3]}function Be(u){const d=u[0],S=u[1],M=u[2],H=u[3];return Math.sqrt(d*d+S*S+M*M+H*H)}const Fe=Be;function He(u){const d=u[0],S=u[1],M=u[2],H=u[3];return d*d+S*S+M*M+H*H}const et=He;function Ee(u,d){const S=u[0]-d[0],M=u[1]-d[1],H=u[2]-d[2],s=u[3]-d[3];return Math.sqrt(S*S+M*M+H*H+s*s)}const De=Ee;function xe(u,d){const S=u[0]-d[0],M=u[1]-d[1],H=u[2]-d[2],s=u[3]-d[3];return S*S+M*M+H*H+s*s}const st=xe;function We(u,d){const S=d??new o(4),M=u[0],H=u[1],s=u[2],g=u[3],l=Math.sqrt(M*M+H*H+s*s+g*g);return l>1e-5?(S[0]=M/l,S[1]=H/l,S[2]=s/l,S[3]=g/l):(S[0]=0,S[1]=0,S[2]=0,S[3]=0),S}function je(u,d){const S=d??new o(4);return S[0]=-u[0],S[1]=-u[1],S[2]=-u[2],S[3]=-u[3],S}function se(u,d){const S=d??new o(4);return S[0]=u[0],S[1]=u[1],S[2]=u[2],S[3]=u[3],S}const me=se;function ie(u,d,S){const M=S??new o(4);return M[0]=u[0]*d[0],M[1]=u[1]*d[1],M[2]=u[2]*d[2],M[3]=u[3]*d[3],M}const A=ie;function Q(u,d,S){const M=S??new o(4);return M[0]=u[0]/d[0],M[1]=u[1]/d[1],M[2]=u[2]/d[2],M[3]=u[3]/d[3],M}const _e=Q;function we(u){const d=u??new o(4);return d[0]=0,d[1]=0,d[2]=0,d[3]=0,d}function Pe(u,d,S){const M=S??new o(4),H=u[0],s=u[1],g=u[2],l=u[3];return M[0]=d[0]*H+d[4]*s+d[8]*g+d[12]*l,M[1]=d[1]*H+d[5]*s+d[9]*g+d[13]*l,M[2]=d[2]*H+d[6]*s+d[10]*g+d[14]*l,M[3]=d[3]*H+d[7]*s+d[11]*g+d[15]*l,M}function ke(u,d,S){const M=S??new o(4);return We(u,M),ae(M,d,M)}function c(u,d,S){const M=S??new o(4);return Be(u)>d?ke(u,d,M):se(u,M)}function _(u,d,S){const M=S??new o(4);return Z(u,d,.5,M)}return{create:p,fromValues:m,set:R,ceil:T,floor:E,round:U,clamp:O,add:I,addScaled:C,subtract:K,sub:X,equalsApproximately:$,equals:ne,lerp:Z,lerpV:Y,max:J,min:re,mulScalar:ae,scale:ye,divScalar:Me,inverse:Ie,invert:Ne,dot:Oe,length:Be,len:Fe,lengthSq:He,lenSq:et,distance:Ee,dist:De,distanceSq:xe,distSq:st,normalize:We,negate:je,copy:se,clone:me,multiply:ie,mul:A,divide:Q,div:_e,zero:we,transformMat4:Pe,setLength:ke,truncate:c,midpoint:_}}const Oc=new Map;function Gh(o){let p=Oc.get(o);return p||(p=Vh(o),Oc.set(o,p)),p}function Ha(o,p,m,R,T,E){return{mat3:Oh(o),mat4:Hh(p),quat:jh(m),vec2:ef(R),vec3:Bo(T),vec4:Gh(E)}}const{mat3:sm,mat4:yi,quat:am,vec2:lm,vec3:um,vec4:cm}=Ha(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ha(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ha(Uh,Array,Array,Array,Array,Array);class Wh{constructor(p,m){$e(this,"device");$e(this,"presentFormat");$e(this,"pipeline");$e(this,"vertexBuffer");$e(this,"indexBuffer");$e(this,"indexCount");$e(this,"projViewModelBuffer");$e(this,"projViewModelBindGroup");this.device=p,this.presentFormat=m;const R=this.device.createShaderModule({code:zh}),T=new Float32Array([-1,-1,-1,1,0,0,0,1,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,-1,1,-1,1,0,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1]),E=new Uint32Array([0,1,2,0,2,3,1,5,6,1,6,2,2,6,7,2,7,3,4,7,6,4,6,5,0,3,7,0,7,4,0,4,5,0,5,1]);this.indexCount=E.length,this.vertexBuffer=this.device.createBuffer({size:T.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,T,0,T.length);const U=[{attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}],arrayStride:2*16,stepMode:"vertex"}];this.indexBuffer=this.device.createBuffer({size:E.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,E,0,E.length);const O=16*4;this.projViewModelBuffer=this.device.createBuffer({size:O,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const I=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.projViewModelBindGroup=this.device.createBindGroup({layout:I,entries:[{binding:0,resource:{buffer:this.projViewModelBuffer}}]});const C={vertex:{module:R,entryPoint:"vertex_main",buffers:U},fragment:{module:R,entryPoint:"fragment_main",targets:[{format:this.presentFormat}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},layout:this.device.createPipelineLayout({bindGroupLayouts:[I]})};this.pipeline=this.device.createRenderPipeline(C)}draw(p,m,R){const T=60*Math.PI/180,O=yi.perspective(T,m,.1,1e3),I=[3,5,10],C=[0,0,0],K=[0,1,0],X=yi.lookAt(I,C,K),$=yi.axisRotation([1,1,0],R/1e3),ne=yi.mul(O,yi.mul(X,$));this.device.queue.writeBuffer(this.projViewModelBuffer,0,ne,0,ne.length);const Z=this.device.createCommandEncoder(),Y={r:.5,g:.5,b:.5,a:0},J=Z.beginRenderPass({colorAttachments:[{clearValue:Y,loadOp:"clear",storeOp:"store",view:p}]});J.setPipeline(this.pipeline),J.setVertexBuffer(0,this.vertexBuffer),J.setIndexBuffer(this.indexBuffer,"uint32",0,this.indexBuffer.size),J.setBindGroup(0,this.projViewModelBindGroup),J.drawIndexed(this.indexCount,1,0,0,0),J.end(),this.device.queue.submit([Z.finish()])}}const qh=(o,p)=>new Wh(o,p),$h=`@group(0) @binding(0) var transmittance_LUT: texture_storage_2d<rgba16float, write>;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH: u32 = 512;
const TRANSMITTANCE_LUT_HEIGHT: u32 = 256;

const MULTISCATTER_LUT_WIDTH: u32 = 512;
const MULTISCATTER_LUT_HEIGHT: u32 = 512;

const METERS_PER_MM: f32 = 1000000;
const PI: f32 = 3.141592653589793;

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

    vec3<f32>(1.0),
    0.0,

    vec3<f32>(0.0),
    0.0,

    vec3<f32>(0.650, 1.881, 0.085),
    0.0,
    vec4<f32>(0.0),
);

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
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    incidentDirectionLight: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu_light: f32 = dot(position, -incidentDirectionLight) 
        / (length(position) * length(incidentDirectionLight));

    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(atmosphere, radius, mu_light);

    let coord = vec2<u32>(floor(vec2<f32>(vec2<u32>(MULTISCATTER_LUT_WIDTH, MULTISCATTER_LUT_HEIGHT)) * uv));

    return textureLoad(lut, coord, 0).xyz;
}

fn sampleTransmittanceLUT_Ray(
    lut: texture_2d<f32>, 
    atmosphere: ptr<function,Atmosphere>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu: f32 = (dot(position, direction) / (length(position) * length(direction)));

    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

    let coord = vec2<u32>(floor(vec2<f32>(vec2<u32>(TRANSMITTANCE_LUT_WIDTH, TRANSMITTANCE_LUT_HEIGHT)) * uv));

    return textureLoad(lut, coord, 0).xyz;
}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>, 
    atmosphere: ptr<function,Atmosphere>, 
    start: vec3<f32>, 
    end: vec3<f32>
) -> vec3<f32>
{
    // Floats do not have enough range to store the very low transmittance of a ray crossing the longest distances.
    // Thus, a sliver of the transmittance LUT near the horizon is zero when it should be a very small value.
    // Also, rays that point at the planet return a transmittance of exactly 0 making it impossible to use such samples.
    // Thus, we sometimes swap the rays depending on how they are oriented.

    var transmittance = vec3<f32>(0.0);
    let direction: vec3<f32> = normalize(end - start);

    // Proxy for hitting the ground.
    // This check does not necessarily mean the ray hits the ground, but it is safe to flip anyway.
    if (dot(end, direction) < 0.0)
    {
        transmittance = sampleTransmittanceLUT_Ray(lut, atmosphere, end, -direction)
                      / sampleTransmittanceLUT_Ray(lut, atmosphere, start, -direction);
    }
    else
    {
        transmittance = sampleTransmittanceLUT_Ray(lut, atmosphere, start, direction)
                      / sampleTransmittanceLUT_Ray(lut, atmosphere, end, direction);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
}

fn sampleTransmittanceLUT_RadiusMu(
    lut: texture_2d<f32>, 
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

    let coord = vec2<u32>(floor(vec2<f32>(vec2<u32>(TRANSMITTANCE_LUT_WIDTH, TRANSMITTANCE_LUT_HEIGHT)) * uv));

    return textureLoad(lut, coord, 0).xyz;
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
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, atmosphere, start.radius, start.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, atmosphere, end.radius, end.mu);
    }
    else
    {
        // Oriented down towards planet, so direct samples would be invalid
        // Instead, we flip the direction
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, atmosphere, end.radius, -end.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, atmosphere, start.radius, -start.mu);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
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
textureStore(transmittance_LUT, texel_coord, vec4<f32>(1.0, 0.0, 0.0, 1.0));
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
}`,Qh=`@group(0) @binding(0) var multiscatter_lut: texture_storage_2d<rgba16float, write>;

@group(1) @binding(0) var transmittance_lut: texture_2d<f32>;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH: u32 = 512;
const TRANSMITTANCE_LUT_HEIGHT: u32 = 256;

const MULTISCATTER_LUT_WIDTH: u32 = 512;
const MULTISCATTER_LUT_HEIGHT: u32 = 512;

const METERS_PER_MM: f32 = 1000000;
const PI: f32 = 3.141592653589793;

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

    vec3<f32>(1.0),
    0.0,

    vec3<f32>(0.0),
    0.0,

    vec3<f32>(0.650, 1.881, 0.085),
    0.0,
    vec4<f32>(0.0),
);

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
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    incidentDirectionLight: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu_light: f32 = dot(position, -incidentDirectionLight) 
        / (length(position) * length(incidentDirectionLight));

    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(atmosphere, radius, mu_light);

    let coord = vec2<u32>(floor(vec2<f32>(vec2<u32>(MULTISCATTER_LUT_WIDTH, MULTISCATTER_LUT_HEIGHT)) * uv));

    return textureLoad(lut, coord, 0).xyz;
}

fn sampleTransmittanceLUT_Ray(
    lut: texture_2d<f32>, 
    atmosphere: ptr<function,Atmosphere>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu: f32 = (dot(position, direction) / (length(position) * length(direction)));

    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

    let coord = vec2<u32>(floor(vec2<f32>(vec2<u32>(TRANSMITTANCE_LUT_WIDTH, TRANSMITTANCE_LUT_HEIGHT)) * uv));

    return textureLoad(lut, coord, 0).xyz;
}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>, 
    atmosphere: ptr<function,Atmosphere>, 
    start: vec3<f32>, 
    end: vec3<f32>
) -> vec3<f32>
{
    // Floats do not have enough range to store the very low transmittance of a ray crossing the longest distances.
    // Thus, a sliver of the transmittance LUT near the horizon is zero when it should be a very small value.
    // Also, rays that point at the planet return a transmittance of exactly 0 making it impossible to use such samples.
    // Thus, we sometimes swap the rays depending on how they are oriented.

    var transmittance = vec3<f32>(0.0);
    let direction: vec3<f32> = normalize(end - start);

    // Proxy for hitting the ground.
    // This check does not necessarily mean the ray hits the ground, but it is safe to flip anyway.
    if (dot(end, direction) < 0.0)
    {
        transmittance = sampleTransmittanceLUT_Ray(lut, atmosphere, end, -direction)
                      / sampleTransmittanceLUT_Ray(lut, atmosphere, start, -direction);
    }
    else
    {
        transmittance = sampleTransmittanceLUT_Ray(lut, atmosphere, start, direction)
                      / sampleTransmittanceLUT_Ray(lut, atmosphere, end, direction);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
}

fn sampleTransmittanceLUT_RadiusMu(
    lut: texture_2d<f32>, 
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

    let coord = vec2<u32>(floor(vec2<f32>(vec2<u32>(TRANSMITTANCE_LUT_WIDTH, TRANSMITTANCE_LUT_HEIGHT)) * uv));

    return textureLoad(lut, coord, 0).xyz;
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
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, atmosphere, start.radius, start.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, atmosphere, end.radius, end.mu);
    }
    else
    {
        // Oriented down towards planet, so direct samples would be invalid
        // Instead, we flip the direction
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, atmosphere, end.radius, -end.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, atmosphere, start.radius, -start.mu);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
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

struct CelestialLight
{
    color: vec3<f32>,
    forward: vec3<f32>,
    strength: f32,
    angularRadius: f32,
}

const LIGHT_GLOBAL = CelestialLight(
    vec3<f32>(1.0),
    vec3<f32>(0.0, -1.0, 0.0),
    1.0,
    16.0 / 60.0 * (3.141592653589793 / 180.0),
);

fn sampleTransmittanceLUT_Sun(
    lut: texture_2d<f32>,
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
        lut, 
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

struct ScatteringResult
{
    luminance: vec3<f32>,
    multiScattTransfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,                                                
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

    if (!hitAtmosphere.hit || (hitPlanet.hit && (hitPlanet.t0 < 0.0 && hitPlanet.t1 > 0.0)))
    {
        return result;
    }

    var sampleDistance: f32 = 0.0;

    // Assuming the planet was hit, we have hitAtmosphere.t0 < hitPlanet.t0 < hitPlanet.t1 < hitAtmosphere.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

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
        tBegin = f32(i) * dSampleDistance;
        tEnd = f32(i + 1) * dSampleDistance;

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

        let transmittanceToBegin = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, atmosphere, originStep, t);

        {
            let incidentCosine = dot((*light).forward, scatteringDir);
            let mu_light = dot(samplePosition, -(*light).forward) / length(samplePosition);

            let phaseTimesScattering = extinctionSample.scattering * ISOTROPIC_PHASE;

            let multiscatter = vec3<f32>(0.0);

            let transmittanceToSun = sampleTransmittanceLUT_Sun(transmittanceLUT, atmosphere, light, sampleStep.radius, mu_light);

            let shadowBegin = f32(raySphereTest(begin, -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowMiddle = f32(raySphereTest(0.5 * (begin + end), -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowEnd = f32(raySphereTest(end, -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowing = transmittanceToSun * (1.0 - 0.25 * (shadowBegin + 2.0 * shadowMiddle + shadowEnd));

            // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
            // This is a single interval of the integral in Equation (1) from Hillaire's paper,
            // with all constant terms factored out above
            let transmittanceAlongPath = sampleTransmittanceLUT_Segment(transmittanceLUT, atmosphere, begin, end);
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

        let transmittanceToSurface = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, atmosphere, originStep, hitPlanet.t0);
        let transmittanceToSun = sampleTransmittanceLUT_Sun(transmittanceLUT, atmosphere, light, sampleStep.radius, mu_light);

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
}`,Zh=`// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

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
return 5.0 * textureSample(b_texture, b_sampler, fragData.uv);
}`,Yh=`@group(0) @binding(0) var skyview_lut: texture_storage_2d<rgba16float, write>;

@group(1) @binding(0) var transmittance_lut: texture_2d<f32>;
@group(2) @binding(0) var multiscatter_lut: texture_2d<f32>;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH: u32 = 512;
const TRANSMITTANCE_LUT_HEIGHT: u32 = 256;

const MULTISCATTER_LUT_WIDTH: u32 = 512;
const MULTISCATTER_LUT_HEIGHT: u32 = 512;

const METERS_PER_MM: f32 = 1000000;
const PI: f32 = 3.141592653589793;

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

    vec3<f32>(1.0),
    0.0,

    vec3<f32>(0.0),
    0.0,

    vec3<f32>(0.650, 1.881, 0.085),
    0.0,
    vec4<f32>(0.0),
);

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
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    incidentDirectionLight: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu_light: f32 = dot(position, -incidentDirectionLight) 
        / (length(position) * length(incidentDirectionLight));

    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(atmosphere, radius, mu_light);

    let coord = vec2<u32>(floor(vec2<f32>(vec2<u32>(MULTISCATTER_LUT_WIDTH, MULTISCATTER_LUT_HEIGHT)) * uv));

    return textureLoad(lut, coord, 0).xyz;
}

fn sampleTransmittanceLUT_Ray(
    lut: texture_2d<f32>, 
    atmosphere: ptr<function,Atmosphere>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu: f32 = (dot(position, direction) / (length(position) * length(direction)));

    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

    let coord = vec2<u32>(floor(vec2<f32>(vec2<u32>(TRANSMITTANCE_LUT_WIDTH, TRANSMITTANCE_LUT_HEIGHT)) * uv));

    return textureLoad(lut, coord, 0).xyz;
}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>, 
    atmosphere: ptr<function,Atmosphere>, 
    start: vec3<f32>, 
    end: vec3<f32>
) -> vec3<f32>
{
    // Floats do not have enough range to store the very low transmittance of a ray crossing the longest distances.
    // Thus, a sliver of the transmittance LUT near the horizon is zero when it should be a very small value.
    // Also, rays that point at the planet return a transmittance of exactly 0 making it impossible to use such samples.
    // Thus, we sometimes swap the rays depending on how they are oriented.

    var transmittance = vec3<f32>(0.0);
    let direction: vec3<f32> = normalize(end - start);

    // Proxy for hitting the ground.
    // This check does not necessarily mean the ray hits the ground, but it is safe to flip anyway.
    if (dot(end, direction) < 0.0)
    {
        transmittance = sampleTransmittanceLUT_Ray(lut, atmosphere, end, -direction)
                      / sampleTransmittanceLUT_Ray(lut, atmosphere, start, -direction);
    }
    else
    {
        transmittance = sampleTransmittanceLUT_Ray(lut, atmosphere, start, direction)
                      / sampleTransmittanceLUT_Ray(lut, atmosphere, end, direction);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
}

fn sampleTransmittanceLUT_RadiusMu(
    lut: texture_2d<f32>, 
    atmosphere: ptr<function,Atmosphere>, 
    radius: f32, 
    mu: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

    let coord = vec2<u32>(floor(vec2<f32>(vec2<u32>(TRANSMITTANCE_LUT_WIDTH, TRANSMITTANCE_LUT_HEIGHT)) * uv));

    return textureLoad(lut, coord, 0).xyz;
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
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, atmosphere, start.radius, start.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, atmosphere, end.radius, end.mu);
    }
    else
    {
        // Oriented down towards planet, so direct samples would be invalid
        // Instead, we flip the direction
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, atmosphere, end.radius, -end.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, atmosphere, start.radius, -start.mu);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
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

struct CelestialLight
{
    color: vec3<f32>,
    forward: vec3<f32>,
    strength: f32,
    angularRadius: f32,
}

const LIGHT_GLOBAL = CelestialLight(
    vec3<f32>(1.0),
    vec3<f32>(0.0, -1.0, 0.0),
    1.0,
    16.0 / 60.0 * (3.141592653589793 / 180.0),
);

fn sampleTransmittanceLUT_Sun(
    lut: texture_2d<f32>,
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
        lut, 
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

struct ScatteringResult
{
    luminance: vec3<f32>,
    multiScattTransfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,                                                
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

    if (!hitAtmosphere.hit || (hitPlanet.hit && (hitPlanet.t0 < 0.0 && hitPlanet.t1 > 0.0)))
    {
        return result;
    }

    var sampleDistance: f32 = 0.0;

    // Assuming the planet was hit, we have hitAtmosphere.t0 < hitPlanet.t0 < hitPlanet.t1 < hitAtmosphere.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

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
        tBegin = f32(i) * dSampleDistance;
        tEnd = f32(i + 1) * dSampleDistance;

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

        let transmittanceToBegin = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, atmosphere, originStep, t);

        {
            let incidentCosine = dot((*light).forward, scatteringDir);
            let mu_light = dot(samplePosition, -(*light).forward) / length(samplePosition);

            // Ozone does not scatter light normally, so we arbitrarily use rayleigh's phase function in case ozone's scattering
            // coefficient is nonzero
            let phaseTimesScattering: vec3<f32> = 
                extinctionSample.scatteringRayleigh * phaseRayleigh(incidentCosine)
                + extinctionSample.scatteringMie * phaseMie(incidentCosine, 0.8)
                 + extinctionSample.scatteringOzone * phaseRayleigh(incidentCosine);

            let multiscatter = sampleMultiscatterLUT(multiscatterLUT, atmosphere, samplePosition, (*light).forward);

            let transmittanceToSun = sampleTransmittanceLUT_Sun(transmittanceLUT, atmosphere, light, sampleStep.radius, mu_light);

            let shadowBegin = f32(raySphereTest(begin, -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowMiddle = f32(raySphereTest(0.5 * (begin + end), -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowEnd = f32(raySphereTest(end, -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowing = transmittanceToSun * (1.0 - 0.25 * (shadowBegin + 2.0 * shadowMiddle + shadowEnd));

            // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
            // This is a single interval of the integral in Equation (1) from Hillaire's paper,
            // with all constant terms factored out above
            let transmittanceAlongPath = sampleTransmittanceLUT_Segment(transmittanceLUT, atmosphere, begin, end);
            let scatteringIlluminanceIntegral = (vec3(1.0) - transmittanceAlongPath) / extinctionSample.extinction;

            result.luminance += 
                (phaseTimesScattering * shadowing + multiscatter * extinctionSample.scattering)
                * scatteringIlluminanceIntegral * transmittanceToBegin 
                * (*light).color.rgb * (*light).strength;
            result.multiScattTransfer += extinctionSample.scattering * scatteringIlluminanceIntegral * transmittanceToBegin;
        }
    }

    if (includeGround && hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        let sampleStep: RaymarchStep = stepRadiusMu(originStep, sampleDistance);

        let samplePosition = origin + hitPlanet.t0 * direction;
        let mu_light = dot(samplePosition, -(*light).forward) / length(samplePosition);

        let transmittanceToSurface = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, atmosphere, originStep, hitPlanet.t0);
        let transmittanceToSun = sampleTransmittanceLUT_Sun(transmittanceLUT, atmosphere, light, sampleStep.radius, mu_light);

        let normalDotLight = clamp(mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).groundAlbedo / PI;

        result.luminance += 
            transmittanceToSurface * transmittanceToSun * normalDotLight * diffuse
            * (*light).color.rgb * (*light).strength;
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
var light: CelestialLight = LIGHT_GLOBAL;

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
transmittance_lut,
multiscatter_lut,
origin,
direction,
include_ground
).luminance;

textureStore(skyview_lut, texel_coord, vec4(luminance, 1.0));
}`;class Kh{constructor(p,m){$e(this,"transmittanceLUTTexture");$e(this,"transmittanceLUTView");$e(this,"transmittanceLUTWriteGroup");$e(this,"transmittanceLUTReadGroup");$e(this,"transmittanceLUTPipeline");$e(this,"multiscatteringLUTTexture");$e(this,"multiscatteringLUTView");$e(this,"multiscatteringLUTWriteGroup");$e(this,"multiscatteringLUTReadGroup");$e(this,"multiscatteringLUTPipeline");$e(this,"skyviewLUTTexture");$e(this,"skyviewLUTView");$e(this,"skyviewLUTWriteGroup");$e(this,"skyviewLUTPipeline");$e(this,"samplerForFullscreenPass");$e(this,"combinedSamplerForFullscreenPass");$e(this,"fullscreenQuadIndexBuffer");$e(this,"fullscreenPassPipeline");$e(this,"device");$e(this,"presentFormat");this.device=p,this.presentFormat=m;const R=p.createShaderModule({code:$h,label:"Transmittance LUT"}),T=p.createShaderModule({code:Qh,label:"Multiscattering LUT"}),E=p.createShaderModule({code:Yh,label:"Skyview LUT"}),U={width:512,height:256},O={width:512,height:512},I={width:1920,height:1080};this.transmittanceLUTTexture=p.createTexture({size:U,dimension:"2d",format:"rgba16float",usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.transmittanceLUTView=this.transmittanceLUTTexture.createView({label:"Transmittance LUT"}),this.multiscatteringLUTTexture=p.createTexture({size:O,dimension:"2d",format:"rgba16float",usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.multiscatteringLUTView=this.multiscatteringLUTTexture.createView({label:"Multiscattering LUT"}),this.skyviewLUTTexture=p.createTexture({size:I,dimension:"2d",format:"rgba16float",usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.skyviewLUTView=this.skyviewLUTTexture.createView({label:"Skyview LUT"});const C=p.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:"rgba16float",viewDimension:"2d"}}],label:"Write-Only Texture"}),K=p.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d"}}],label:"Read-Only Texture"});this.transmittanceLUTWriteGroup=p.createBindGroup({layout:C,entries:[{binding:0,resource:this.transmittanceLUTView}],label:"Transmittance LUT Write-Only"}),this.multiscatteringLUTWriteGroup=p.createBindGroup({layout:C,entries:[{binding:0,resource:this.multiscatteringLUTView}],label:"Multiscattering LUT Write-Only"}),this.skyviewLUTWriteGroup=p.createBindGroup({layout:C,entries:[{binding:0,resource:this.skyviewLUTView}],label:"Skyview LUT Write-Only"}),this.transmittanceLUTReadGroup=p.createBindGroup({layout:K,entries:[{binding:0,resource:this.transmittanceLUTView}],label:"Transmittance LUT Read-Only"}),this.multiscatteringLUTReadGroup=p.createBindGroup({layout:K,entries:[{binding:0,resource:this.multiscatteringLUTView}],label:"Multiscattering LUT Read-Only"}),this.transmittanceLUTPipeline=p.createComputePipeline({compute:{module:R,entryPoint:"computeTransmittance"},layout:p.createPipelineLayout({bindGroupLayouts:[C]})}),this.multiscatteringLUTPipeline=p.createComputePipeline({compute:{module:T,entryPoint:"computeMultiscattering"},layout:p.createPipelineLayout({bindGroupLayouts:[C,K]})}),this.skyviewLUTPipeline=p.createComputePipeline({compute:{module:E,entryPoint:"computeSkyViewLuminance"},layout:p.createPipelineLayout({bindGroupLayouts:[C,K,K]})});const X=new Uint32Array([0,1,2,0,2,3]);this.fullscreenQuadIndexBuffer=p.createBuffer({size:X.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),p.queue.writeBuffer(this.fullscreenQuadIndexBuffer,0,X,0,X.length),this.samplerForFullscreenPass=p.createSampler();const $=p.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}}]});this.combinedSamplerForFullscreenPass=p.createBindGroup({layout:$,entries:[{binding:0,resource:this.skyviewLUTView},{binding:1,resource:this.samplerForFullscreenPass}]});const ne=p.createShaderModule({code:Zh});this.fullscreenPassPipeline=p.createRenderPipeline({vertex:{module:ne,entryPoint:"vertex_main"},fragment:{module:ne,entryPoint:"fragment_main",targets:[{format:m}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"ccw"},layout:p.createPipelineLayout({bindGroupLayouts:[$]})});const Z=p.createCommandEncoder();let Y=Z.beginComputePass();Y.setPipeline(this.transmittanceLUTPipeline),Y.setBindGroup(0,this.transmittanceLUTWriteGroup),Y.dispatchWorkgroups(U.width/16,U.height/16),Y.end(),Y=Z.beginComputePass(),Y.setPipeline(this.multiscatteringLUTPipeline),Y.setBindGroup(0,this.multiscatteringLUTWriteGroup),Y.setBindGroup(1,this.transmittanceLUTReadGroup),Y.dispatchWorkgroups(O.width/16,O.height/16),Y.end(),Y=Z.beginComputePass(),Y.setPipeline(this.skyviewLUTPipeline),Y.setBindGroup(0,this.skyviewLUTWriteGroup),Y.setBindGroup(1,this.transmittanceLUTReadGroup),Y.setBindGroup(2,this.multiscatteringLUTReadGroup),Y.dispatchWorkgroups(I.width/16,I.height/16,1),Y.end(),p.queue.submit([Z.finish()])}draw(p,m,R){const T=this.device.createCommandEncoder(),E={r:1,g:0,b:0,a:0},U=T.beginRenderPass({colorAttachments:[{clearValue:E,loadOp:"clear",storeOp:"store",view:p}]});U.setPipeline(this.fullscreenPassPipeline),U.setIndexBuffer(this.fullscreenQuadIndexBuffer,"uint32",0,this.fullscreenQuadIndexBuffer.size),U.setBindGroup(0,this.combinedSamplerForFullscreenPass),U.drawIndexed(6,1,0,0,0),U.end(),this.device.queue.submit([T.finish()])}}const Xh=(o,p)=>new Kh(o,p),Jh="hello-cube",bh=new Map([["hello-cube",{name:"Hello Cube",create:qh}],["sky-sea",{name:"Sky and Sea",create:Xh}]]);async function em(){return new Promise((o,p)=>{console.log("Starting WebGPU"),"gpu"in navigator||p(new Error("WebGPU is not available in this browser.",{cause:new Error("navigator.gpu is null")})),navigator.gpu.requestAdapter().then(m=>m==null?void 0:m.requestDevice()).then(m=>{m&&o(m),p(new Error("No WebGPU device."))}).catch(m=>{p(new Error("Unable to get WebGPU Device",{cause:m}))})})}const tm=function({app:p}){const m=W.useRef(),R=W.useRef(null),T=W.useCallback(()=>{const U=R.current;if(U){const O=window.devicePixelRatio;U.width=U.offsetWidth*O,U.height=U.offsetHeight*O}},[]);W.useEffect(()=>(T(),window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T)}),[T]);const E=W.useCallback(U=>{var I;const O=(I=R.current)==null?void 0:I.getContext("webgpu");O&&(p.draw(O.getCurrentTexture().createView(),R.current.width/R.current.height,U),m.current=requestAnimationFrame(E))},[p]);return W.useEffect(()=>{var O;const U=(O=R.current)==null?void 0:O.getContext("webgpu");if(!U){console.error("'webgpu' canvas context not found, cannot animate.");return}return U.configure({device:p.device,format:p.presentFormat}),m.current=requestAnimationFrame(E),()=>{m.current&&cancelAnimationFrame(m.current)}},[E,p]),ve.jsx("div",{style:{color:"hsl(204, 50%, 95%)",position:"relative",width:"100%",height:"100%"},children:ve.jsx("canvas",{ref:R,style:{width:"100%",height:"100%"}})})},nm=W.memo(function(){const p=W.useRef(),[m,R]=W.useState(!1),[T,E]=_h(),U=W.useCallback(()=>{let I=T.get("sample");return I||(I=Jh),bh.get(I)},[T]);W.useEffect(()=>{R(!1);const I=U();if(!I){R(!0),p.current=void 0;return}em().then(C=>{const K=navigator.gpu.getPreferredCanvasFormat();p.current=I.create(C,K),C.lost.then(X=>{console.log(`WebGPU device lost - ("${X.reason}"):
 ${X.message}`)},X=>{throw new Error("WebGPU device lost rejected",{cause:X})}),C.onuncapturederror=X=>{console.error(`WebGPU device uncaptured error: ${X.error.message}`)}},C=>{console.error(C)}).finally(()=>{R(!0)})},[U]);const O=ve.jsx("p",{style:{backgroundColor:"rgb(50, 99, 121)",margin:0,padding:"2em",flexGrow:"1",color:"hsl(204, 50%, 95%)",whiteSpace:"pre-line",fontSize:"1.5em"},children:`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.
        `});return ve.jsx(ve.Fragment,{children:m?ve.jsx(ve.Fragment,{children:p.current?ve.jsx(tm,{app:p.current}):O}):null})}),Fc=new Map([["","Estelle Booher"],["webgpu-samples","WebGPU Samples"]]),Hc=W.memo(function({link:p,label:m}){const R=Si(),T=()=>{var E;(E=R(p))==null||E.catch(U=>{throw new Error("Unable to navigate",{cause:U})})};return ve.jsx("button",{className:"nav-button",onClick:T,type:"button",children:m})}),rm=W.memo(function(){const p=yn(),m=[ve.jsx(W.Fragment,{children:ve.jsx(Hc,{link:"/",label:Fc.get("")})},"root")];if(p.pathname!="/"){const R=p.pathname.substring(1).split("/");let T="/";m.push(...R.map((E,U)=>{const O=Fc.get(E),I=U>0?"/":"";return T=T.concat(`${I}${E}`),ve.jsxs(W.Fragment,{children:[" > ",ve.jsx(Hc,{link:T,label:O||E})]},T)}))}return ve.jsx("header",{className:"website-header",children:m})}),im=document.getElementById("root");tp.createRoot(im).render(ve.jsx(W.StrictMode,{children:ve.jsx(yh,{children:ve.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[ve.jsx("div",{style:{flex:"0 1 auto"},children:ve.jsx(rm,{})}),ve.jsxs($p,{children:[ve.jsx(Ao,{index:!0,element:ve.jsx(Dh,{})}),ve.jsx(Ao,{path:"webgpu-samples",element:ve.jsx("div",{style:{flex:1,overflow:"hidden"},children:ve.jsx(nm,{})})}),ve.jsx(Ao,{path:"*",element:ve.jsx(Wp,{to:"/",replace:!0})})]})]})})}));
