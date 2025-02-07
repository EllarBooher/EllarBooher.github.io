var Ep=Object.defineProperty;var Mp=(s,i,u)=>i in s?Ep(s,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[i]=u;var j=(s,i,u)=>Mp(s,typeof i!="symbol"?i+"":i,u);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))m(g);new MutationObserver(g=>{for(const w of g)if(w.type==="childList")for(const E of w.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&m(E)}).observe(document,{childList:!0,subtree:!0});function u(g){const w={};return g.integrity&&(w.integrity=g.integrity),g.referrerPolicy&&(w.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?w.credentials="include":g.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function m(g){if(g.ep)return;g.ep=!0;const w=u(g);fetch(g.href,w)}})();var Do={exports:{}},Si={},zo={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc;function bp(){if(kc)return Ve;kc=1;var s=Symbol.for("react.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),E=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),W=Symbol.iterator;function N(k){return k===null||typeof k!="object"?null:(k=W&&k[W]||k["@@iterator"],typeof k=="function"?k:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,X={};function ne(k,te,xe){this.props=k,this.context=te,this.refs=X,this.updater=xe||J}ne.prototype.isReactComponent={},ne.prototype.setState=function(k,te){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,te,"setState")},ne.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function Q(){}Q.prototype=ne.prototype;function Y(k,te,xe){this.props=k,this.context=te,this.refs=X,this.updater=xe||J}var le=Y.prototype=new Q;le.constructor=Y,B(le,ne.prototype),le.isPureReactComponent=!0;var ve=Array.isArray,Pe=Object.prototype.hasOwnProperty,De={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function Ne(k,te,xe){var Te,Re={},ze=null,f=null;if(te!=null)for(Te in te.ref!==void 0&&(f=te.ref),te.key!==void 0&&(ze=""+te.key),te)Pe.call(te,Te)&&!Ie.hasOwnProperty(Te)&&(Re[Te]=te[Te]);var b=arguments.length-2;if(b===1)Re.children=xe;else if(1<b){for(var d=Array(b),h=0;h<b;h++)d[h]=arguments[h+2];Re.children=d}if(k&&k.defaultProps)for(Te in b=k.defaultProps,b)Re[Te]===void 0&&(Re[Te]=b[Te]);return{$$typeof:s,type:k,key:ze,ref:f,props:Re,_owner:De.current}}function Le(k,te){return{$$typeof:s,type:k.type,key:te,ref:k.ref,props:k.props,_owner:k._owner}}function ke(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function Ye(k){var te={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(xe){return te[xe]})}var Ee=/\/+/g;function Ue(k,te){return typeof k=="object"&&k!==null&&k.key!=null?Ye(""+k.key):te.toString(36)}function Se(k,te,xe,Te,Re){var ze=typeof k;(ze==="undefined"||ze==="boolean")&&(k=null);var f=!1;if(k===null)f=!0;else switch(ze){case"string":case"number":f=!0;break;case"object":switch(k.$$typeof){case s:case i:f=!0}}if(f)return f=k,Re=Re(f),k=Te===""?"."+Ue(f,0):Te,ve(Re)?(xe="",k!=null&&(xe=k.replace(Ee,"$&/")+"/"),Se(Re,te,xe,"",function(h){return h})):Re!=null&&(ke(Re)&&(Re=Le(Re,xe+(!Re.key||f&&f.key===Re.key?"":(""+Re.key).replace(Ee,"$&/")+"/")+k)),te.push(Re)),1;if(f=0,Te=Te===""?".":Te+":",ve(k))for(var b=0;b<k.length;b++){ze=k[b];var d=Te+Ue(ze,b);f+=Se(ze,te,xe,d,Re)}else if(d=N(k),typeof d=="function")for(k=d.call(k),b=0;!(ze=k.next()).done;)ze=ze.value,d=Te+Ue(ze,b++),f+=Se(ze,te,xe,d,Re);else if(ze==="object")throw te=String(k),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return f}function Ze(k,te,xe){if(k==null)return k;var Te=[],Re=0;return Se(k,Te,"","",function(ze){return te.call(xe,ze,Re++)}),Te}function $e(k){if(k._status===-1){var te=k._result;te=te(),te.then(function(xe){(k._status===0||k._status===-1)&&(k._status=1,k._result=xe)},function(xe){(k._status===0||k._status===-1)&&(k._status=2,k._result=xe)}),k._status===-1&&(k._status=0,k._result=te)}if(k._status===1)return k._result.default;throw k._result}var Ge={current:null},re={transition:null},ce={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:re,ReactCurrentOwner:De};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ve.Children={map:Ze,forEach:function(k,te,xe){Ze(k,function(){te.apply(this,arguments)},xe)},count:function(k){var te=0;return Ze(k,function(){te++}),te},toArray:function(k){return Ze(k,function(te){return te})||[]},only:function(k){if(!ke(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Ve.Component=ne,Ve.Fragment=u,Ve.Profiler=g,Ve.PureComponent=Y,Ve.StrictMode=m,Ve.Suspense=M,Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Ve.act=se,Ve.cloneElement=function(k,te,xe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Te=B({},k.props),Re=k.key,ze=k.ref,f=k._owner;if(te!=null){if(te.ref!==void 0&&(ze=te.ref,f=De.current),te.key!==void 0&&(Re=""+te.key),k.type&&k.type.defaultProps)var b=k.type.defaultProps;for(d in te)Pe.call(te,d)&&!Ie.hasOwnProperty(d)&&(Te[d]=te[d]===void 0&&b!==void 0?b[d]:te[d])}var d=arguments.length-2;if(d===1)Te.children=xe;else if(1<d){b=Array(d);for(var h=0;h<d;h++)b[h]=arguments[h+2];Te.children=b}return{$$typeof:s,type:k.type,key:Re,ref:ze,props:Te,_owner:f}},Ve.createContext=function(k){return k={$$typeof:E,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:w,_context:k},k.Consumer=k},Ve.createElement=Ne,Ve.createFactory=function(k){var te=Ne.bind(null,k);return te.type=k,te},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(k){return{$$typeof:P,render:k}},Ve.isValidElement=ke,Ve.lazy=function(k){return{$$typeof:G,_payload:{_status:-1,_result:k},_init:$e}},Ve.memo=function(k,te){return{$$typeof:R,type:k,compare:te===void 0?null:te}},Ve.startTransition=function(k){var te=re.transition;re.transition={};try{k()}finally{re.transition=te}},Ve.unstable_act=se,Ve.useCallback=function(k,te){return Ge.current.useCallback(k,te)},Ve.useContext=function(k){return Ge.current.useContext(k)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(k){return Ge.current.useDeferredValue(k)},Ve.useEffect=function(k,te){return Ge.current.useEffect(k,te)},Ve.useId=function(){return Ge.current.useId()},Ve.useImperativeHandle=function(k,te,xe){return Ge.current.useImperativeHandle(k,te,xe)},Ve.useInsertionEffect=function(k,te){return Ge.current.useInsertionEffect(k,te)},Ve.useLayoutEffect=function(k,te){return Ge.current.useLayoutEffect(k,te)},Ve.useMemo=function(k,te){return Ge.current.useMemo(k,te)},Ve.useReducer=function(k,te,xe){return Ge.current.useReducer(k,te,xe)},Ve.useRef=function(k){return Ge.current.useRef(k)},Ve.useState=function(k){return Ge.current.useState(k)},Ve.useSyncExternalStore=function(k,te,xe){return Ge.current.useSyncExternalStore(k,te,xe)},Ve.useTransition=function(){return Ge.current.useTransition()},Ve.version="18.3.1",Ve}var Nc;function Qo(){return Nc||(Nc=1,zo.exports=bp()),zo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc;function Pp(){if(Oc)return Si;Oc=1;var s=Qo(),i=Symbol.for("react.element"),u=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,g=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function E(P,M,R){var G,W={},N=null,J=null;R!==void 0&&(N=""+R),M.key!==void 0&&(N=""+M.key),M.ref!==void 0&&(J=M.ref);for(G in M)m.call(M,G)&&!w.hasOwnProperty(G)&&(W[G]=M[G]);if(P&&P.defaultProps)for(G in M=P.defaultProps,M)W[G]===void 0&&(W[G]=M[G]);return{$$typeof:i,type:P,key:N,ref:J,props:W,_owner:g.current}}return Si.Fragment=u,Si.jsx=E,Si.jsxs=E,Si}var Fc;function Ap(){return Fc||(Fc=1,Do.exports=Pp()),Do.exports}var de=Ap(),Z=Qo(),Os={},Io={exports:{}},Ht={},ko={exports:{}},No={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc;function Rp(){return Gc||(Gc=1,function(s){function i(re,ce){var se=re.length;re.push(ce);e:for(;0<se;){var k=se-1>>>1,te=re[k];if(0<g(te,ce))re[k]=ce,re[se]=te,se=k;else break e}}function u(re){return re.length===0?null:re[0]}function m(re){if(re.length===0)return null;var ce=re[0],se=re.pop();if(se!==ce){re[0]=se;e:for(var k=0,te=re.length,xe=te>>>1;k<xe;){var Te=2*(k+1)-1,Re=re[Te],ze=Te+1,f=re[ze];if(0>g(Re,se))ze<te&&0>g(f,Re)?(re[k]=f,re[ze]=se,k=ze):(re[k]=Re,re[Te]=se,k=Te);else if(ze<te&&0>g(f,se))re[k]=f,re[ze]=se,k=ze;else break e}}return ce}function g(re,ce){var se=re.sortIndex-ce.sortIndex;return se!==0?se:re.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;s.unstable_now=function(){return w.now()}}else{var E=Date,P=E.now();s.unstable_now=function(){return E.now()-P}}var M=[],R=[],G=1,W=null,N=3,J=!1,B=!1,X=!1,ne=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function le(re){for(var ce=u(R);ce!==null;){if(ce.callback===null)m(R);else if(ce.startTime<=re)m(R),ce.sortIndex=ce.expirationTime,i(M,ce);else break;ce=u(R)}}function ve(re){if(X=!1,le(re),!B)if(u(M)!==null)B=!0,$e(Pe);else{var ce=u(R);ce!==null&&Ge(ve,ce.startTime-re)}}function Pe(re,ce){B=!1,X&&(X=!1,Q(Ne),Ne=-1),J=!0;var se=N;try{for(le(ce),W=u(M);W!==null&&(!(W.expirationTime>ce)||re&&!Ye());){var k=W.callback;if(typeof k=="function"){W.callback=null,N=W.priorityLevel;var te=k(W.expirationTime<=ce);ce=s.unstable_now(),typeof te=="function"?W.callback=te:W===u(M)&&m(M),le(ce)}else m(M);W=u(M)}if(W!==null)var xe=!0;else{var Te=u(R);Te!==null&&Ge(ve,Te.startTime-ce),xe=!1}return xe}finally{W=null,N=se,J=!1}}var De=!1,Ie=null,Ne=-1,Le=5,ke=-1;function Ye(){return!(s.unstable_now()-ke<Le)}function Ee(){if(Ie!==null){var re=s.unstable_now();ke=re;var ce=!0;try{ce=Ie(!0,re)}finally{ce?Ue():(De=!1,Ie=null)}}else De=!1}var Ue;if(typeof Y=="function")Ue=function(){Y(Ee)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Ze=Se.port2;Se.port1.onmessage=Ee,Ue=function(){Ze.postMessage(null)}}else Ue=function(){ne(Ee,0)};function $e(re){Ie=re,De||(De=!0,Ue())}function Ge(re,ce){Ne=ne(function(){re(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(re){re.callback=null},s.unstable_continueExecution=function(){B||J||(B=!0,$e(Pe))},s.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<re?Math.floor(1e3/re):5},s.unstable_getCurrentPriorityLevel=function(){return N},s.unstable_getFirstCallbackNode=function(){return u(M)},s.unstable_next=function(re){switch(N){case 1:case 2:case 3:var ce=3;break;default:ce=N}var se=N;N=ce;try{return re()}finally{N=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(re,ce){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var se=N;N=re;try{return ce()}finally{N=se}},s.unstable_scheduleCallback=function(re,ce,se){var k=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?k+se:k):se=k,re){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=se+te,re={id:G++,callback:ce,priorityLevel:re,startTime:se,expirationTime:te,sortIndex:-1},se>k?(re.sortIndex=se,i(R,re),u(M)===null&&re===u(R)&&(X?(Q(Ne),Ne=-1):X=!0,Ge(ve,se-k))):(re.sortIndex=te,i(M,re),B||J||(B=!0,$e(Pe))),re},s.unstable_shouldYield=Ye,s.unstable_wrapCallback=function(re){var ce=N;return function(){var se=N;N=ce;try{return re.apply(this,arguments)}finally{N=se}}}}(No)),No}var Bc;function Lp(){return Bc||(Bc=1,ko.exports=Rp()),ko.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc;function Up(){if(Wc)return Ht;Wc=1;var s=Qo(),i=Lp();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,g={};function w(e,t){E(e,t),E(e+"Capture",t)}function E(e,t){for(g[e]=t,e=0;e<t.length;e++)m.add(t[e])}var P=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),M=Object.prototype.hasOwnProperty,R=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},W={};function N(e){return M.call(W,e)?!0:M.call(G,e)?!1:R.test(e)?W[e]=!0:(G[e]=!0,!1)}function J(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,t,n,r){if(t===null||typeof t>"u"||J(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function X(e,t,n,r,a,l,_){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=_}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new X(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new X(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new X(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new X(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new X(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new X(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ne[e]=new X(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ne[e]=new X(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ne[e]=new X(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Q,Y);ne[t]=new X(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Q,Y);ne[t]=new X(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Q,Y);ne[t]=new X(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new X(e,1,!1,e.toLowerCase(),null,!1,!1)}),ne.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ne[e]=new X(e,1,!1,e.toLowerCase(),null,!0,!0)});function le(e,t,n,r){var a=ne.hasOwnProperty(t)?ne[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B(t,n,a,r)&&(n=null),r||a===null?N(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ve=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pe=Symbol.for("react.element"),De=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Le=Symbol.for("react.profiler"),ke=Symbol.for("react.provider"),Ye=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),Ue=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),Ge=Symbol.for("react.offscreen"),re=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,k;function te(e){if(k===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var xe=!1;function Te(e,t){if(!e||xe)return"";xe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(q){var r=q}Reflect.construct(e,[],t)}else{try{t.call()}catch(q){r=q}e.call(t.prototype)}else{try{throw Error()}catch(q){r=q}e()}}catch(q){if(q&&r&&typeof q.stack=="string"){for(var a=q.stack.split(`
`),l=r.stack.split(`
`),_=a.length-1,A=l.length-1;1<=_&&0<=A&&a[_]!==l[A];)A--;for(;1<=_&&0<=A;_--,A--)if(a[_]!==l[A]){if(_!==1||A!==1)do if(_--,A--,0>A||a[_]!==l[A]){var U=`
`+a[_].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=_&&0<=A);break}}}finally{xe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?te(e):""}function Re(e){switch(e.tag){case 5:return te(e.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return e=Te(e.type,!1),e;case 11:return e=Te(e.type.render,!1),e;case 1:return e=Te(e.type,!0),e;default:return""}}function ze(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case De:return"Portal";case Le:return"Profiler";case Ne:return"StrictMode";case Ue:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ye:return(e.displayName||"Context")+".Consumer";case ke:return(e._context.displayName||"Context")+".Provider";case Ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return t=e.displayName||null,t!==null?t:ze(e.type)||"Memo";case $e:t=e._payload,e=e._init;try{return ze(e(t))}catch{}}return null}function f(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ze(t);case 8:return t===Ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function b(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function h(e){var t=d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(_){r=""+_,l.call(this,_)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(_){r=""+_},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function S(e){e._valueTracker||(e._valueTracker=h(e))}function L(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function V(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function o(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function v(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=b(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function c(e,t){t=t.checked,t!=null&&le(e,"checked",t,!1)}function p(e,t){c(e,t);var n=b(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?D(e,t.type,n):t.hasOwnProperty("defaultValue")&&D(e,t.type,b(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function x(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function D(e,t,n){(t!=="number"||V(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var H=Array.isArray;function y(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+b(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function T(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function C(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(H(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:b(n)}}function z(e,t){var n=b(t.value),r=b(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function K(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ee(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?K(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var me,Ae=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(me=me||document.createElement("div"),me.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=me.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(ge).forEach(function(e){Fe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ge[t]=ge[e]})});function We(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ge.hasOwnProperty(e)&&ge[e]?(""+t).trim():t+"px"}function Xe(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=We(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var ct=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(e,t){if(t){if(ct[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function dt(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function mt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gt=null,st=null,at=null;function wt(e){if(e=li(e)){if(typeof gt!="function")throw Error(u(280));var t=e.stateNode;t&&(t=Ji(t),gt(e.stateNode,e.type,t))}}function xt(e){st?at?at.push(e):at=[e]:st=e}function Tt(){if(st){var e=st,t=at;if(at=st=null,wt(e),t)for(e=0;e<t.length;e++)wt(t[e])}}function St(e,t){return e(t)}function Lt(){}var Pt=!1;function Ut(e,t,n){if(Pt)return e(t,n);Pt=!0;try{return St(e,t,n)}finally{Pt=!1,(st!==null||at!==null)&&(Lt(),Tt())}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ji(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var In=!1;if(P)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){In=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{In=!1}function gr(e,t,n,r,a,l,_,A,U){var q=Array.prototype.slice.call(arguments,3);try{t.apply(n,q)}catch(ae){this.onError(ae)}}var mn=!1,En=null,Mn=!1,_r=null,Li={onError:function(e){mn=!0,En=e}};function Ui(e,t,n,r,a,l,_,A,U){mn=!1,En=null,gr.apply(Li,arguments)}function Ci(e,t,n,r,a,l,_,A,U){if(Ui.apply(this,arguments),mn){if(mn){var q=En;mn=!1,En=null}else throw Error(u(198));Mn||(Mn=!0,_r=q)}}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function al(e){if(tt(e)!==e)throw Error(u(188))}function zd(e){var t=e.alternate;if(!t){if(t=tt(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return al(a),e;if(l===r)return al(a),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=a,r=l;else{for(var _=!1,A=a.child;A;){if(A===n){_=!0,n=a,r=l;break}if(A===r){_=!0,r=a,n=l;break}A=A.sibling}if(!_){for(A=l.child;A;){if(A===n){_=!0,n=l,r=a;break}if(A===r){_=!0,r=l,n=a;break}A=A.sibling}if(!_)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function ol(e){return e=zd(e),e!==null?ll(e):null}function ll(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ll(e);if(t!==null)return t;e=e.sibling}return null}var ul=i.unstable_scheduleCallback,cl=i.unstable_cancelCallback,Id=i.unstable_shouldYield,kd=i.unstable_requestPaint,ft=i.unstable_now,Nd=i.unstable_getCurrentPriorityLevel,Zs=i.unstable_ImmediatePriority,dl=i.unstable_UserBlockingPriority,Di=i.unstable_NormalPriority,Od=i.unstable_LowPriority,fl=i.unstable_IdlePriority,zi=null,gn=null;function Fd(e){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:Wd,Gd=Math.log,Bd=Math.LN2;function Wd(e){return e>>>=0,e===0?32:31-(Gd(e)/Bd|0)|0}var Ii=64,ki=4194304;function Hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ni(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,_=n&268435455;if(_!==0){var A=_&~a;A!==0?r=Hr(A):(l&=_,l!==0&&(r=Hr(l)))}else _=n&~a,_!==0?r=Hr(_):l!==0&&(r=Hr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rn(t),a=1<<n,r|=e[n],t&=~a;return r}function Vd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var _=31-rn(l),A=1<<_,U=a[_];U===-1?(!(A&n)||A&r)&&(a[_]=Vd(A,t)):U<=t&&(e.expiredLanes|=A),l&=~A}}function Js(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pl(){var e=Ii;return Ii<<=1,!(Ii&4194240)&&(Ii=64),e}function ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rn(t),e[t]=n}function $d(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-rn(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rn(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var Qe=0;function hl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ml,na,gl,_l,vl,ra=!1,Oi=[],kn=null,Nn=null,On=null,qr=new Map,jr=new Map,Fn=[],qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yl(e,t){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function Qr(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=li(t),t!==null&&na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function jd(e,t,n,r,a){switch(t){case"focusin":return kn=Qr(kn,e,t,n,r,a),!0;case"dragenter":return Nn=Qr(Nn,e,t,n,r,a),!0;case"mouseover":return On=Qr(On,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return qr.set(l,Qr(qr.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,jr.set(l,Qr(jr.get(l)||null,e,t,n,r,a)),!0}return!1}function wl(e){var t=rr(e.target);if(t!==null){var n=tt(t);if(n!==null){if(t=n.tag,t===13){if(t=sl(n),t!==null){e.blockedOn=t,vl(e.priority,function(){gl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ht=r,n.target.dispatchEvent(r),ht=null}else return t=li(n),t!==null&&na(t),e.blockedOn=n,!1;t.shift()}return!0}function xl(e,t,n){Fi(e)&&n.delete(t)}function Qd(){ra=!1,kn!==null&&Fi(kn)&&(kn=null),Nn!==null&&Fi(Nn)&&(Nn=null),On!==null&&Fi(On)&&(On=null),qr.forEach(xl),jr.forEach(xl)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,ra||(ra=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Qd)))}function Xr(e){function t(a){return Yr(a,e)}if(0<Oi.length){Yr(Oi[0],e);for(var n=1;n<Oi.length;n++){var r=Oi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kn!==null&&Yr(kn,e),Nn!==null&&Yr(Nn,e),On!==null&&Yr(On,e),qr.forEach(t),jr.forEach(t),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)wl(n),n.blockedOn===null&&Fn.shift()}var vr=ve.ReactCurrentBatchConfig,Gi=!0;function Yd(e,t,n,r){var a=Qe,l=vr.transition;vr.transition=null;try{Qe=1,ia(e,t,n,r)}finally{Qe=a,vr.transition=l}}function Xd(e,t,n,r){var a=Qe,l=vr.transition;vr.transition=null;try{Qe=4,ia(e,t,n,r)}finally{Qe=a,vr.transition=l}}function ia(e,t,n,r){if(Gi){var a=sa(e,t,n,r);if(a===null)Ta(e,t,r,Bi,n),yl(e,r);else if(jd(a,e,t,n,r))r.stopPropagation();else if(yl(e,r),t&4&&-1<qd.indexOf(e)){for(;a!==null;){var l=li(a);if(l!==null&&ml(l),l=sa(e,t,n,r),l===null&&Ta(e,t,r,Bi,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else Ta(e,t,r,null,n)}}var Bi=null;function sa(e,t,n,r){if(Bi=null,e=mt(r),e=rr(e),e!==null)if(t=tt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bi=e,null}function Tl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nd()){case Zs:return 1;case dl:return 4;case Di:case Od:return 16;case fl:return 536870912;default:return 16}default:return 16}}var Gn=null,aa=null,Wi=null;function Sl(){if(Wi)return Wi;var e,t=aa,n=t.length,r,a="value"in Gn?Gn.value:Gn.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var _=n-e;for(r=1;r<=_&&t[n-r]===a[l-r];r++);return Wi=a.slice(e,1<r?1-r:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function El(){return!1}function qt(e){function t(n,r,a,l,_){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=_,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(n=e[A],this[A]=n?n(l):l[A]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Hi:El,this.isPropagationStopped=El,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oa=qt(yr),Kr=se({},yr,{view:0,detail:0}),Kd=qt(Kr),la,ua,Zr,$i=se({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(la=e.screenX-Zr.screenX,ua=e.screenY-Zr.screenY):ua=la=0,Zr=e),la)},movementY:function(e){return"movementY"in e?e.movementY:ua}}),Ml=qt($i),Zd=se({},$i,{dataTransfer:0}),Jd=qt(Zd),ef=se({},Kr,{relatedTarget:0}),ca=qt(ef),tf=se({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),nf=qt(tf),rf=se({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sf=qt(rf),af=se({},yr,{data:0}),bl=qt(af),of={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uf[e])?!!t[e]:!1}function da(){return cf}var df=se({},Kr,{key:function(e){if(e.key){var t=of[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ff=qt(df),pf=se({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pl=qt(pf),hf=se({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),mf=qt(hf),gf=se({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_f=qt(gf),vf=se({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yf=qt(vf),wf=[9,13,27,32],fa=P&&"CompositionEvent"in window,Jr=null;P&&"documentMode"in document&&(Jr=document.documentMode);var xf=P&&"TextEvent"in window&&!Jr,Al=P&&(!fa||Jr&&8<Jr&&11>=Jr),Rl=" ",Ll=!1;function Ul(e,t){switch(e){case"keyup":return wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function Tf(e,t){switch(e){case"compositionend":return Cl(t);case"keypress":return t.which!==32?null:(Ll=!0,Rl);case"textInput":return e=t.data,e===Rl&&Ll?null:e;default:return null}}function Sf(e,t){if(wr)return e==="compositionend"||!fa&&Ul(e,t)?(e=Sl(),Wi=aa=Gn=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Al&&t.locale!=="ko"?null:t.data;default:return null}}var Ef={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ef[e.type]:t==="textarea"}function zl(e,t,n,r){xt(r),t=Xi(t,"onChange"),0<t.length&&(n=new oa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ei=null,ti=null;function Mf(e){Zl(e,0)}function qi(e){var t=Mr(e);if(L(t))return e}function bf(e,t){if(e==="change")return t}var Il=!1;if(P){var pa;if(P){var ha="oninput"in document;if(!ha){var kl=document.createElement("div");kl.setAttribute("oninput","return;"),ha=typeof kl.oninput=="function"}pa=ha}else pa=!1;Il=pa&&(!document.documentMode||9<document.documentMode)}function Nl(){ei&&(ei.detachEvent("onpropertychange",Ol),ti=ei=null)}function Ol(e){if(e.propertyName==="value"&&qi(ti)){var t=[];zl(t,ti,e,mt(e)),Ut(Mf,t)}}function Pf(e,t,n){e==="focusin"?(Nl(),ei=t,ti=n,ei.attachEvent("onpropertychange",Ol)):e==="focusout"&&Nl()}function Af(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(ti)}function Rf(e,t){if(e==="click")return qi(t)}function Lf(e,t){if(e==="input"||e==="change")return qi(t)}function Uf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:Uf;function ni(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!M.call(t,a)||!sn(e[a],t[a]))return!1}return!0}function Fl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gl(e,t){var n=Fl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fl(n)}}function Bl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wl(){for(var e=window,t=V();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=V(e.document)}return t}function ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cf(e){var t=Wl(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bl(n.ownerDocument.documentElement,n)){if(r!==null&&ma(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=Gl(n,l);var _=Gl(n,r);a&&_&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==_.node||e.focusOffset!==_.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(_.node,_.offset)):(t.setEnd(_.node,_.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Df=P&&"documentMode"in document&&11>=document.documentMode,xr=null,ga=null,ri=null,_a=!1;function Vl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_a||xr==null||xr!==V(r)||(r=xr,"selectionStart"in r&&ma(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ri&&ni(ri,r)||(ri=r,r=Xi(ga,"onSelect"),0<r.length&&(t=new oa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xr)))}function ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tr={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionend:ji("Transition","TransitionEnd")},va={},Hl={};P&&(Hl=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Qi(e){if(va[e])return va[e];if(!Tr[e])return e;var t=Tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hl)return va[e]=t[n];return e}var $l=Qi("animationend"),ql=Qi("animationiteration"),jl=Qi("animationstart"),Ql=Qi("transitionend"),Yl=new Map,Xl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){Yl.set(e,t),w(t,[e])}for(var ya=0;ya<Xl.length;ya++){var wa=Xl[ya],zf=wa.toLowerCase(),If=wa[0].toUpperCase()+wa.slice(1);Bn(zf,"on"+If)}Bn($l,"onAnimationEnd"),Bn(ql,"onAnimationIteration"),Bn(jl,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(Ql,"onTransitionEnd"),E("onMouseEnter",["mouseout","mouseover"]),E("onMouseLeave",["mouseout","mouseover"]),E("onPointerEnter",["pointerout","pointerover"]),E("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function Kl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ci(r,t,void 0,e),e.currentTarget=null}function Zl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var _=r.length-1;0<=_;_--){var A=r[_],U=A.instance,q=A.currentTarget;if(A=A.listener,U!==l&&a.isPropagationStopped())break e;Kl(a,A,q),l=U}else for(_=0;_<r.length;_++){if(A=r[_],U=A.instance,q=A.currentTarget,A=A.listener,U!==l&&a.isPropagationStopped())break e;Kl(a,A,q),l=U}}}if(Mn)throw e=_r,Mn=!1,_r=null,e}function Je(e,t){var n=t[Aa];n===void 0&&(n=t[Aa]=new Set);var r=e+"__bubble";n.has(r)||(Jl(t,e,2,!1),n.add(r))}function xa(e,t,n){var r=0;t&&(r|=4),Jl(n,e,r,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function si(e){if(!e[Yi]){e[Yi]=!0,m.forEach(function(n){n!=="selectionchange"&&(kf.has(n)||xa(n,!1,e),xa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,xa("selectionchange",!1,t))}}function Jl(e,t,n,r){switch(Tl(t)){case 1:var a=Yd;break;case 4:a=Xd;break;default:a=ia}n=a.bind(null,t,n,e),a=void 0,!In||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ta(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var A=r.stateNode.containerInfo;if(A===a||A.nodeType===8&&A.parentNode===a)break;if(_===4)for(_=r.return;_!==null;){var U=_.tag;if((U===3||U===4)&&(U=_.stateNode.containerInfo,U===a||U.nodeType===8&&U.parentNode===a))return;_=_.return}for(;A!==null;){if(_=rr(A),_===null)return;if(U=_.tag,U===5||U===6){r=l=_;continue e}A=A.parentNode}}r=r.return}Ut(function(){var q=l,ae=mt(n),oe=[];e:{var ie=Yl.get(e);if(ie!==void 0){var fe=oa,_e=e;switch(e){case"keypress":if(Vi(n)===0)break e;case"keydown":case"keyup":fe=ff;break;case"focusin":_e="focus",fe=ca;break;case"focusout":_e="blur",fe=ca;break;case"beforeblur":case"afterblur":fe=ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Ml;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=mf;break;case $l:case ql:case jl:fe=nf;break;case Ql:fe=_f;break;case"scroll":fe=Kd;break;case"wheel":fe=yf;break;case"copy":case"cut":case"paste":fe=sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Pl}var ye=(t&4)!==0,pt=!ye&&e==="scroll",O=ye?ie!==null?ie+"Capture":null:ie;ye=[];for(var I=q,F;I!==null;){F=I;var ue=F.stateNode;if(F.tag===5&&ue!==null&&(F=ue,O!==null&&(ue=pn(I,O),ue!=null&&ye.push(ai(I,ue,F)))),pt)break;I=I.return}0<ye.length&&(ie=new fe(ie,_e,null,n,ae),oe.push({event:ie,listeners:ye}))}}if(!(t&7)){e:{if(ie=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",ie&&n!==ht&&(_e=n.relatedTarget||n.fromElement)&&(rr(_e)||_e[bn]))break e;if((fe||ie)&&(ie=ae.window===ae?ae:(ie=ae.ownerDocument)?ie.defaultView||ie.parentWindow:window,fe?(_e=n.relatedTarget||n.toElement,fe=q,_e=_e?rr(_e):null,_e!==null&&(pt=tt(_e),_e!==pt||_e.tag!==5&&_e.tag!==6)&&(_e=null)):(fe=null,_e=q),fe!==_e)){if(ye=Ml,ue="onMouseLeave",O="onMouseEnter",I="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Pl,ue="onPointerLeave",O="onPointerEnter",I="pointer"),pt=fe==null?ie:Mr(fe),F=_e==null?ie:Mr(_e),ie=new ye(ue,I+"leave",fe,n,ae),ie.target=pt,ie.relatedTarget=F,ue=null,rr(ae)===q&&(ye=new ye(O,I+"enter",_e,n,ae),ye.target=F,ye.relatedTarget=pt,ue=ye),pt=ue,fe&&_e)t:{for(ye=fe,O=_e,I=0,F=ye;F;F=Sr(F))I++;for(F=0,ue=O;ue;ue=Sr(ue))F++;for(;0<I-F;)ye=Sr(ye),I--;for(;0<F-I;)O=Sr(O),F--;for(;I--;){if(ye===O||O!==null&&ye===O.alternate)break t;ye=Sr(ye),O=Sr(O)}ye=null}else ye=null;fe!==null&&eu(oe,ie,fe,ye,!1),_e!==null&&pt!==null&&eu(oe,pt,_e,ye,!0)}}e:{if(ie=q?Mr(q):window,fe=ie.nodeName&&ie.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ie.type==="file")var we=bf;else if(Dl(ie))if(Il)we=Lf;else{we=Af;var Me=Pf}else(fe=ie.nodeName)&&fe.toLowerCase()==="input"&&(ie.type==="checkbox"||ie.type==="radio")&&(we=Rf);if(we&&(we=we(e,q))){zl(oe,we,n,ae);break e}Me&&Me(e,ie,q),e==="focusout"&&(Me=ie._wrapperState)&&Me.controlled&&ie.type==="number"&&D(ie,"number",ie.value)}switch(Me=q?Mr(q):window,e){case"focusin":(Dl(Me)||Me.contentEditable==="true")&&(xr=Me,ga=q,ri=null);break;case"focusout":ri=ga=xr=null;break;case"mousedown":_a=!0;break;case"contextmenu":case"mouseup":case"dragend":_a=!1,Vl(oe,n,ae);break;case"selectionchange":if(Df)break;case"keydown":case"keyup":Vl(oe,n,ae)}var be;if(fa)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else wr?Ul(e,n)&&(Ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ce="onCompositionStart");Ce&&(Al&&n.locale!=="ko"&&(wr||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&wr&&(be=Sl()):(Gn=ae,aa="value"in Gn?Gn.value:Gn.textContent,wr=!0)),Me=Xi(q,Ce),0<Me.length&&(Ce=new bl(Ce,e,null,n,ae),oe.push({event:Ce,listeners:Me}),be?Ce.data=be:(be=Cl(n),be!==null&&(Ce.data=be)))),(be=xf?Tf(e,n):Sf(e,n))&&(q=Xi(q,"onBeforeInput"),0<q.length&&(ae=new bl("onBeforeInput","beforeinput",null,n,ae),oe.push({event:ae,listeners:q}),ae.data=be))}Zl(oe,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=pn(e,n),l!=null&&r.unshift(ai(e,l,a)),l=pn(e,t),l!=null&&r.push(ai(e,l,a))),e=e.return}return r}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eu(e,t,n,r,a){for(var l=t._reactName,_=[];n!==null&&n!==r;){var A=n,U=A.alternate,q=A.stateNode;if(U!==null&&U===r)break;A.tag===5&&q!==null&&(A=q,a?(U=pn(n,l),U!=null&&_.unshift(ai(n,U,A))):a||(U=pn(n,l),U!=null&&_.push(ai(n,U,A)))),n=n.return}_.length!==0&&e.push({event:t,listeners:_})}var Nf=/\r\n?/g,Of=/\u0000|\uFFFD/g;function tu(e){return(typeof e=="string"?e:""+e).replace(Nf,`
`).replace(Of,"")}function Ki(e,t,n){if(t=tu(t),tu(e)!==t&&n)throw Error(u(425))}function Zi(){}var Sa=null,Ea=null;function Ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ba=typeof setTimeout=="function"?setTimeout:void 0,Ff=typeof clearTimeout=="function"?clearTimeout:void 0,nu=typeof Promise=="function"?Promise:void 0,Gf=typeof queueMicrotask=="function"?queueMicrotask:typeof nu<"u"?function(e){return nu.resolve(null).then(e).catch(Bf)}:ba;function Bf(e){setTimeout(function(){throw e})}function Pa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Xr(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ru(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),_n="__reactFiber$"+Er,oi="__reactProps$"+Er,bn="__reactContainer$"+Er,Aa="__reactEvents$"+Er,Wf="__reactListeners$"+Er,Vf="__reactHandles$"+Er;function rr(e){var t=e[_n];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bn]||n[_n]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ru(e);e!==null;){if(n=e[_n])return n;e=ru(e)}return t}e=n,n=e.parentNode}return null}function li(e){return e=e[_n]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Ji(e){return e[oi]||null}var Ra=[],br=-1;function Vn(e){return{current:e}}function et(e){0>br||(e.current=Ra[br],Ra[br]=null,br--)}function Ke(e,t){br++,Ra[br]=e.current,e.current=t}var Hn={},Ct=Vn(Hn),Ft=Vn(!1),ir=Hn;function Pr(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Gt(e){return e=e.childContextTypes,e!=null}function es(){et(Ft),et(Ct)}function iu(e,t,n){if(Ct.current!==Hn)throw Error(u(168));Ke(Ct,t),Ke(Ft,n)}function su(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(u(108,f(e)||"Unknown",a));return se({},n,r)}function ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,ir=Ct.current,Ke(Ct,e),Ke(Ft,Ft.current),!0}function au(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=su(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,et(Ft),et(Ct),Ke(Ct,e)):et(Ft),Ke(Ft,n)}var Pn=null,ns=!1,La=!1;function ou(e){Pn===null?Pn=[e]:Pn.push(e)}function Hf(e){ns=!0,ou(e)}function $n(){if(!La&&Pn!==null){La=!0;var e=0,t=Qe;try{var n=Pn;for(Qe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pn=null,ns=!1}catch(a){throw Pn!==null&&(Pn=Pn.slice(e+1)),ul(Zs,$n),a}finally{Qe=t,La=!1}}return null}var Ar=[],Rr=0,rs=null,is=0,Kt=[],Zt=0,sr=null,An=1,Rn="";function ar(e,t){Ar[Rr++]=is,Ar[Rr++]=rs,rs=e,is=t}function lu(e,t,n){Kt[Zt++]=An,Kt[Zt++]=Rn,Kt[Zt++]=sr,sr=e;var r=An;e=Rn;var a=32-rn(r)-1;r&=~(1<<a),n+=1;var l=32-rn(t)+a;if(30<l){var _=a-a%5;l=(r&(1<<_)-1).toString(32),r>>=_,a-=_,An=1<<32-rn(t)+a|n<<a|r,Rn=l+e}else An=1<<l|n<<a|r,Rn=e}function Ua(e){e.return!==null&&(ar(e,1),lu(e,1,0))}function Ca(e){for(;e===rs;)rs=Ar[--Rr],Ar[Rr]=null,is=Ar[--Rr],Ar[Rr]=null;for(;e===sr;)sr=Kt[--Zt],Kt[Zt]=null,Rn=Kt[--Zt],Kt[Zt]=null,An=Kt[--Zt],Kt[Zt]=null}var jt=null,Qt=null,nt=!1,an=null;function uu(e,t){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,Qt=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,Qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sr!==null?{id:An,overflow:Rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,Qt=null,!0):!1;default:return!1}}function Da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function za(e){if(nt){var t=Qt;if(t){var n=t;if(!cu(e,t)){if(Da(e))throw Error(u(418));t=Wn(n.nextSibling);var r=jt;t&&cu(e,t)?uu(r,n):(e.flags=e.flags&-4097|2,nt=!1,jt=e)}}else{if(Da(e))throw Error(u(418));e.flags=e.flags&-4097|2,nt=!1,jt=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function ss(e){if(e!==jt)return!1;if(!nt)return du(e),nt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ma(e.type,e.memoizedProps)),t&&(t=Qt)){if(Da(e))throw fu(),Error(u(418));for(;t;)uu(e,t),t=Wn(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qt=Wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qt=null}}else Qt=jt?Wn(e.stateNode.nextSibling):null;return!0}function fu(){for(var e=Qt;e;)e=Wn(e.nextSibling)}function Lr(){Qt=jt=null,nt=!1}function Ia(e){an===null?an=[e]:an.push(e)}var $f=ve.ReactCurrentBatchConfig;function ui(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(_){var A=a.refs;_===null?delete A[l]:A[l]=_},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function as(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function hu(e){function t(O,I){if(e){var F=O.deletions;F===null?(O.deletions=[I],O.flags|=16):F.push(I)}}function n(O,I){if(!e)return null;for(;I!==null;)t(O,I),I=I.sibling;return null}function r(O,I){for(O=new Map;I!==null;)I.key!==null?O.set(I.key,I):O.set(I.index,I),I=I.sibling;return O}function a(O,I){return O=Jn(O,I),O.index=0,O.sibling=null,O}function l(O,I,F){return O.index=F,e?(F=O.alternate,F!==null?(F=F.index,F<I?(O.flags|=2,I):F):(O.flags|=2,I)):(O.flags|=1048576,I)}function _(O){return e&&O.alternate===null&&(O.flags|=2),O}function A(O,I,F,ue){return I===null||I.tag!==6?(I=Po(F,O.mode,ue),I.return=O,I):(I=a(I,F),I.return=O,I)}function U(O,I,F,ue){var we=F.type;return we===Ie?ae(O,I,F.props.children,ue,F.key):I!==null&&(I.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===$e&&pu(we)===I.type)?(ue=a(I,F.props),ue.ref=ui(O,I,F),ue.return=O,ue):(ue=Ls(F.type,F.key,F.props,null,O.mode,ue),ue.ref=ui(O,I,F),ue.return=O,ue)}function q(O,I,F,ue){return I===null||I.tag!==4||I.stateNode.containerInfo!==F.containerInfo||I.stateNode.implementation!==F.implementation?(I=Ao(F,O.mode,ue),I.return=O,I):(I=a(I,F.children||[]),I.return=O,I)}function ae(O,I,F,ue,we){return I===null||I.tag!==7?(I=hr(F,O.mode,ue,we),I.return=O,I):(I=a(I,F),I.return=O,I)}function oe(O,I,F){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Po(""+I,O.mode,F),I.return=O,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Pe:return F=Ls(I.type,I.key,I.props,null,O.mode,F),F.ref=ui(O,null,I),F.return=O,F;case De:return I=Ao(I,O.mode,F),I.return=O,I;case $e:var ue=I._init;return oe(O,ue(I._payload),F)}if(H(I)||ce(I))return I=hr(I,O.mode,F,null),I.return=O,I;as(O,I)}return null}function ie(O,I,F,ue){var we=I!==null?I.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return we!==null?null:A(O,I,""+F,ue);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Pe:return F.key===we?U(O,I,F,ue):null;case De:return F.key===we?q(O,I,F,ue):null;case $e:return we=F._init,ie(O,I,we(F._payload),ue)}if(H(F)||ce(F))return we!==null?null:ae(O,I,F,ue,null);as(O,F)}return null}function fe(O,I,F,ue,we){if(typeof ue=="string"&&ue!==""||typeof ue=="number")return O=O.get(F)||null,A(I,O,""+ue,we);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case Pe:return O=O.get(ue.key===null?F:ue.key)||null,U(I,O,ue,we);case De:return O=O.get(ue.key===null?F:ue.key)||null,q(I,O,ue,we);case $e:var Me=ue._init;return fe(O,I,F,Me(ue._payload),we)}if(H(ue)||ce(ue))return O=O.get(F)||null,ae(I,O,ue,we,null);as(I,ue)}return null}function _e(O,I,F,ue){for(var we=null,Me=null,be=I,Ce=I=0,bt=null;be!==null&&Ce<F.length;Ce++){be.index>Ce?(bt=be,be=null):bt=be.sibling;var je=ie(O,be,F[Ce],ue);if(je===null){be===null&&(be=bt);break}e&&be&&je.alternate===null&&t(O,be),I=l(je,I,Ce),Me===null?we=je:Me.sibling=je,Me=je,be=bt}if(Ce===F.length)return n(O,be),nt&&ar(O,Ce),we;if(be===null){for(;Ce<F.length;Ce++)be=oe(O,F[Ce],ue),be!==null&&(I=l(be,I,Ce),Me===null?we=be:Me.sibling=be,Me=be);return nt&&ar(O,Ce),we}for(be=r(O,be);Ce<F.length;Ce++)bt=fe(be,O,Ce,F[Ce],ue),bt!==null&&(e&&bt.alternate!==null&&be.delete(bt.key===null?Ce:bt.key),I=l(bt,I,Ce),Me===null?we=bt:Me.sibling=bt,Me=bt);return e&&be.forEach(function(er){return t(O,er)}),nt&&ar(O,Ce),we}function ye(O,I,F,ue){var we=ce(F);if(typeof we!="function")throw Error(u(150));if(F=we.call(F),F==null)throw Error(u(151));for(var Me=we=null,be=I,Ce=I=0,bt=null,je=F.next();be!==null&&!je.done;Ce++,je=F.next()){be.index>Ce?(bt=be,be=null):bt=be.sibling;var er=ie(O,be,je.value,ue);if(er===null){be===null&&(be=bt);break}e&&be&&er.alternate===null&&t(O,be),I=l(er,I,Ce),Me===null?we=er:Me.sibling=er,Me=er,be=bt}if(je.done)return n(O,be),nt&&ar(O,Ce),we;if(be===null){for(;!je.done;Ce++,je=F.next())je=oe(O,je.value,ue),je!==null&&(I=l(je,I,Ce),Me===null?we=je:Me.sibling=je,Me=je);return nt&&ar(O,Ce),we}for(be=r(O,be);!je.done;Ce++,je=F.next())je=fe(be,O,Ce,je.value,ue),je!==null&&(e&&je.alternate!==null&&be.delete(je.key===null?Ce:je.key),I=l(je,I,Ce),Me===null?we=je:Me.sibling=je,Me=je);return e&&be.forEach(function(Sp){return t(O,Sp)}),nt&&ar(O,Ce),we}function pt(O,I,F,ue){if(typeof F=="object"&&F!==null&&F.type===Ie&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Pe:e:{for(var we=F.key,Me=I;Me!==null;){if(Me.key===we){if(we=F.type,we===Ie){if(Me.tag===7){n(O,Me.sibling),I=a(Me,F.props.children),I.return=O,O=I;break e}}else if(Me.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===$e&&pu(we)===Me.type){n(O,Me.sibling),I=a(Me,F.props),I.ref=ui(O,Me,F),I.return=O,O=I;break e}n(O,Me);break}else t(O,Me);Me=Me.sibling}F.type===Ie?(I=hr(F.props.children,O.mode,ue,F.key),I.return=O,O=I):(ue=Ls(F.type,F.key,F.props,null,O.mode,ue),ue.ref=ui(O,I,F),ue.return=O,O=ue)}return _(O);case De:e:{for(Me=F.key;I!==null;){if(I.key===Me)if(I.tag===4&&I.stateNode.containerInfo===F.containerInfo&&I.stateNode.implementation===F.implementation){n(O,I.sibling),I=a(I,F.children||[]),I.return=O,O=I;break e}else{n(O,I);break}else t(O,I);I=I.sibling}I=Ao(F,O.mode,ue),I.return=O,O=I}return _(O);case $e:return Me=F._init,pt(O,I,Me(F._payload),ue)}if(H(F))return _e(O,I,F,ue);if(ce(F))return ye(O,I,F,ue);as(O,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,I!==null&&I.tag===6?(n(O,I.sibling),I=a(I,F),I.return=O,O=I):(n(O,I),I=Po(F,O.mode,ue),I.return=O,O=I),_(O)):n(O,I)}return pt}var Ur=hu(!0),mu=hu(!1),os=Vn(null),ls=null,Cr=null,ka=null;function Na(){ka=Cr=ls=null}function Oa(e){var t=os.current;et(os),e._currentValue=t}function Fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dr(e,t){ls=e,ka=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Bt=!0),e.firstContext=null)}function Jt(e){var t=e._currentValue;if(ka!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(ls===null)throw Error(u(308));Cr=e,ls.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var or=null;function Ga(e){or===null?or=[e]:or.push(e)}function gu(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Ga(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ln(e,r)}function Ln(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qn=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,qe&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ln(e,n)}return a=r.interleaved,a===null?(t.next=t,Ga(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ln(e,n)}function us(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}function vu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var _={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=_:l=l.next=_,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cs(e,t,n,r){var a=e.updateQueue;qn=!1;var l=a.firstBaseUpdate,_=a.lastBaseUpdate,A=a.shared.pending;if(A!==null){a.shared.pending=null;var U=A,q=U.next;U.next=null,_===null?l=q:_.next=q,_=U;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,A=ae.lastBaseUpdate,A!==_&&(A===null?ae.firstBaseUpdate=q:A.next=q,ae.lastBaseUpdate=U))}if(l!==null){var oe=a.baseState;_=0,ae=q=U=null,A=l;do{var ie=A.lane,fe=A.eventTime;if((r&ie)===ie){ae!==null&&(ae=ae.next={eventTime:fe,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var _e=e,ye=A;switch(ie=t,fe=n,ye.tag){case 1:if(_e=ye.payload,typeof _e=="function"){oe=_e.call(fe,oe,ie);break e}oe=_e;break e;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=ye.payload,ie=typeof _e=="function"?_e.call(fe,oe,ie):_e,ie==null)break e;oe=se({},oe,ie);break e;case 2:qn=!0}}A.callback!==null&&A.lane!==0&&(e.flags|=64,ie=a.effects,ie===null?a.effects=[A]:ie.push(A))}else fe={eventTime:fe,lane:ie,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ae===null?(q=ae=fe,U=oe):ae=ae.next=fe,_|=ie;if(A=A.next,A===null){if(A=a.shared.pending,A===null)break;ie=A,A=ie.next,ie.next=null,a.lastBaseUpdate=ie,a.shared.pending=null}}while(!0);if(ae===null&&(U=oe),a.baseState=U,a.firstBaseUpdate=q,a.lastBaseUpdate=ae,t=a.shared.interleaved,t!==null){a=t;do _|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);cr|=_,e.lanes=_,e.memoizedState=oe}}function yu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(u(191,a));a.call(r)}}}var ci={},vn=Vn(ci),di=Vn(ci),fi=Vn(ci);function lr(e){if(e===ci)throw Error(u(174));return e}function Wa(e,t){switch(Ke(fi,t),Ke(di,e),Ke(vn,ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ee(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ee(t,e)}et(vn),Ke(vn,t)}function zr(){et(vn),et(di),et(fi)}function wu(e){lr(fi.current);var t=lr(vn.current),n=ee(t,e.type);t!==n&&(Ke(di,e),Ke(vn,n))}function Va(e){di.current===e&&(et(vn),et(di))}var ot=Vn(0);function ds(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ha=[];function $a(){for(var e=0;e<Ha.length;e++)Ha[e]._workInProgressVersionPrimary=null;Ha.length=0}var fs=ve.ReactCurrentDispatcher,qa=ve.ReactCurrentBatchConfig,ur=0,lt=null,vt=null,Et=null,ps=!1,pi=!1,hi=0,qf=0;function Dt(){throw Error(u(321))}function ja(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sn(e[n],t[n]))return!1;return!0}function Qa(e,t,n,r,a,l){if(ur=l,lt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fs.current=e===null||e.memoizedState===null?Xf:Kf,e=n(r,a),pi){l=0;do{if(pi=!1,hi=0,25<=l)throw Error(u(301));l+=1,Et=vt=null,t.updateQueue=null,fs.current=Zf,e=n(r,a)}while(pi)}if(fs.current=gs,t=vt!==null&&vt.next!==null,ur=0,Et=vt=lt=null,ps=!1,t)throw Error(u(300));return e}function Ya(){var e=hi!==0;return hi=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?lt.memoizedState=Et=e:Et=Et.next=e,Et}function en(){if(vt===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=vt.next;var t=Et===null?lt.memoizedState:Et.next;if(t!==null)Et=t,vt=e;else{if(e===null)throw Error(u(310));vt=e,e={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Et===null?lt.memoizedState=Et=e:Et=Et.next=e}return Et}function mi(e,t){return typeof t=="function"?t(e):t}function Xa(e){var t=en(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=vt,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var _=a.next;a.next=l.next,l.next=_}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var A=_=null,U=null,q=l;do{var ae=q.lane;if((ur&ae)===ae)U!==null&&(U=U.next={lane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),r=q.hasEagerState?q.eagerState:e(r,q.action);else{var oe={lane:ae,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null};U===null?(A=U=oe,_=r):U=U.next=oe,lt.lanes|=ae,cr|=ae}q=q.next}while(q!==null&&q!==l);U===null?_=r:U.next=A,sn(r,t.memoizedState)||(Bt=!0),t.memoizedState=r,t.baseState=_,t.baseQueue=U,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,lt.lanes|=l,cr|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ka(e){var t=en(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var _=a=a.next;do l=e(l,_.action),_=_.next;while(_!==a);sn(l,t.memoizedState)||(Bt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function xu(){}function Tu(e,t){var n=lt,r=en(),a=t(),l=!sn(r.memoizedState,a);if(l&&(r.memoizedState=a,Bt=!0),r=r.queue,Za(Mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Et!==null&&Et.memoizedState.tag&1){if(n.flags|=2048,gi(9,Eu.bind(null,n,r,a,t),void 0,null),Mt===null)throw Error(u(349));ur&30||Su(n,t,a)}return a}function Su(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=lt.updateQueue,t===null?(t={lastEffect:null,stores:null},lt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Eu(e,t,n,r){t.value=n,t.getSnapshot=r,bu(t)&&Pu(e)}function Mu(e,t,n){return n(function(){bu(t)&&Pu(e)})}function bu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sn(e,n)}catch{return!0}}function Pu(e){var t=Ln(e,1);t!==null&&cn(t,e,1,-1)}function Au(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t.queue=e,e=e.dispatch=Yf.bind(null,lt,e),[t.memoizedState,e]}function gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=lt.updateQueue,t===null?(t={lastEffect:null,stores:null},lt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ru(){return en().memoizedState}function hs(e,t,n,r){var a=yn();lt.flags|=e,a.memoizedState=gi(1|t,n,void 0,r===void 0?null:r)}function ms(e,t,n,r){var a=en();r=r===void 0?null:r;var l=void 0;if(vt!==null){var _=vt.memoizedState;if(l=_.destroy,r!==null&&ja(r,_.deps)){a.memoizedState=gi(t,n,l,r);return}}lt.flags|=e,a.memoizedState=gi(1|t,n,l,r)}function Lu(e,t){return hs(8390656,8,e,t)}function Za(e,t){return ms(2048,8,e,t)}function Uu(e,t){return ms(4,2,e,t)}function Cu(e,t){return ms(4,4,e,t)}function Du(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zu(e,t,n){return n=n!=null?n.concat([e]):null,ms(4,4,Du.bind(null,t,e),n)}function Ja(){}function Iu(e,t){var n=en();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ja(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ku(e,t){var n=en();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ja(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nu(e,t,n){return ur&21?(sn(n,t)||(n=pl(),lt.lanes|=n,cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Bt=!0),e.memoizedState=n)}function jf(e,t){var n=Qe;Qe=n!==0&&4>n?n:4,e(!0);var r=qa.transition;qa.transition={};try{e(!1),t()}finally{Qe=n,qa.transition=r}}function Ou(){return en().memoizedState}function Qf(e,t,n){var r=Kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fu(e))Gu(t,n);else if(n=gu(e,t,n,r),n!==null){var a=Nt();cn(n,e,r,a),Bu(n,t,r)}}function Yf(e,t,n){var r=Kn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))Gu(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var _=t.lastRenderedState,A=l(_,n);if(a.hasEagerState=!0,a.eagerState=A,sn(A,_)){var U=t.interleaved;U===null?(a.next=a,Ga(t)):(a.next=U.next,U.next=a),t.interleaved=a;return}}catch{}finally{}n=gu(e,t,a,r),n!==null&&(a=Nt(),cn(n,e,r,a),Bu(n,t,r))}}function Fu(e){var t=e.alternate;return e===lt||t!==null&&t===lt}function Gu(e,t){pi=ps=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ta(e,n)}}var gs={readContext:Jt,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Xf={readContext:Jt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:Lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hs(4194308,4,Du.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hs(4194308,4,e,t)},useInsertionEffect:function(e,t){return hs(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qf.bind(null,lt,e),[r.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:Au,useDebugValue:Ja,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Au(!1),t=e[0];return e=jf.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=lt,a=yn();if(nt){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Mt===null)throw Error(u(349));ur&30||Su(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Lu(Mu.bind(null,r,l,e),[e]),r.flags|=2048,gi(9,Eu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=yn(),t=Mt.identifierPrefix;if(nt){var n=Rn,r=An;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kf={readContext:Jt,useCallback:Iu,useContext:Jt,useEffect:Za,useImperativeHandle:zu,useInsertionEffect:Uu,useLayoutEffect:Cu,useMemo:ku,useReducer:Xa,useRef:Ru,useState:function(){return Xa(mi)},useDebugValue:Ja,useDeferredValue:function(e){var t=en();return Nu(t,vt.memoizedState,e)},useTransition:function(){var e=Xa(mi)[0],t=en().memoizedState;return[e,t]},useMutableSource:xu,useSyncExternalStore:Tu,useId:Ou,unstable_isNewReconciler:!1},Zf={readContext:Jt,useCallback:Iu,useContext:Jt,useEffect:Za,useImperativeHandle:zu,useInsertionEffect:Uu,useLayoutEffect:Cu,useMemo:ku,useReducer:Ka,useRef:Ru,useState:function(){return Ka(mi)},useDebugValue:Ja,useDeferredValue:function(e){var t=en();return vt===null?t.memoizedState=e:Nu(t,vt.memoizedState,e)},useTransition:function(){var e=Ka(mi)[0],t=en().memoizedState;return[e,t]},useMutableSource:xu,useSyncExternalStore:Tu,useId:Ou,unstable_isNewReconciler:!1};function on(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _s={isMounted:function(e){return(e=e._reactInternals)?tt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Nt(),a=Kn(e),l=Un(r,a);l.payload=t,n!=null&&(l.callback=n),t=jn(e,l,a),t!==null&&(cn(t,e,a,r),us(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Nt(),a=Kn(e),l=Un(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=jn(e,l,a),t!==null&&(cn(t,e,a,r),us(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nt(),r=Kn(e),a=Un(n,r);a.tag=2,t!=null&&(a.callback=t),t=jn(e,a,r),t!==null&&(cn(t,e,r,n),us(t,e,r))}};function Wu(e,t,n,r,a,l,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,_):t.prototype&&t.prototype.isPureReactComponent?!ni(n,r)||!ni(a,l):!0}function Vu(e,t,n){var r=!1,a=Hn,l=t.contextType;return typeof l=="object"&&l!==null?l=Jt(l):(a=Gt(t)?ir:Ct.current,r=t.contextTypes,l=(r=r!=null)?Pr(e,a):Hn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_s,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Hu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_s.enqueueReplaceState(t,t.state,null)}function to(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ba(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=Jt(l):(l=Gt(t)?ir:Ct.current,a.context=Pr(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(eo(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&_s.enqueueReplaceState(a,a.state,null),cs(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t){try{var n="",r=t;do n+=Re(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function no(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ro(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jf=typeof WeakMap=="function"?WeakMap:Map;function $u(e,t,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Es||(Es=!0,yo=r),ro(e,t)},n}function qu(e,t,n){n=Un(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){ro(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ro(e,t),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var _=t.stack;this.componentDidCatch(t.value,{componentStack:_!==null?_:""})}),n}function ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jf;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=pp.bind(null,e,t,n),t.then(e,e))}function Qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yu(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Un(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var ep=ve.ReactCurrentOwner,Bt=!1;function kt(e,t,n,r){t.child=e===null?mu(t,null,n,r):Ur(t,e.child,n,r)}function Xu(e,t,n,r,a){n=n.render;var l=t.ref;return Dr(t,a),r=Qa(e,t,n,r,l,a),n=Ya(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Cn(e,t,a)):(nt&&n&&Ua(t),t.flags|=1,kt(e,t,r,a),t.child)}function Ku(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!bo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Zu(e,t,l,r,a)):(e=Ls(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var _=l.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(_,r)&&e.ref===t.ref)return Cn(e,t,a)}return t.flags|=1,e=Jn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Zu(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(ni(l,r)&&e.ref===t.ref)if(Bt=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(Bt=!0);else return t.lanes=e.lanes,Cn(e,t,a)}return io(e,t,n,r,a)}function Ju(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Nr,Yt),Yt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ke(Nr,Yt),Yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Ke(Nr,Yt),Yt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Ke(Nr,Yt),Yt|=r;return kt(e,t,a,n),t.child}function ec(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function io(e,t,n,r,a){var l=Gt(n)?ir:Ct.current;return l=Pr(t,l),Dr(t,a),n=Qa(e,t,n,r,l,a),r=Ya(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Cn(e,t,a)):(nt&&r&&Ua(t),t.flags|=1,kt(e,t,n,a),t.child)}function tc(e,t,n,r,a){if(Gt(n)){var l=!0;ts(t)}else l=!1;if(Dr(t,a),t.stateNode===null)ys(e,t),Vu(t,n,r),to(t,n,r,a),r=!0;else if(e===null){var _=t.stateNode,A=t.memoizedProps;_.props=A;var U=_.context,q=n.contextType;typeof q=="object"&&q!==null?q=Jt(q):(q=Gt(n)?ir:Ct.current,q=Pr(t,q));var ae=n.getDerivedStateFromProps,oe=typeof ae=="function"||typeof _.getSnapshotBeforeUpdate=="function";oe||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A!==r||U!==q)&&Hu(t,_,r,q),qn=!1;var ie=t.memoizedState;_.state=ie,cs(t,r,_,a),U=t.memoizedState,A!==r||ie!==U||Ft.current||qn?(typeof ae=="function"&&(eo(t,n,ae,r),U=t.memoizedState),(A=qn||Wu(t,n,A,r,ie,U,q))?(oe||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(t.flags|=4194308)):(typeof _.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=U),_.props=r,_.state=U,_.context=q,r=A):(typeof _.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{_=t.stateNode,_u(e,t),A=t.memoizedProps,q=t.type===t.elementType?A:on(t.type,A),_.props=q,oe=t.pendingProps,ie=_.context,U=n.contextType,typeof U=="object"&&U!==null?U=Jt(U):(U=Gt(n)?ir:Ct.current,U=Pr(t,U));var fe=n.getDerivedStateFromProps;(ae=typeof fe=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A!==oe||ie!==U)&&Hu(t,_,r,U),qn=!1,ie=t.memoizedState,_.state=ie,cs(t,r,_,a);var _e=t.memoizedState;A!==oe||ie!==_e||Ft.current||qn?(typeof fe=="function"&&(eo(t,n,fe,r),_e=t.memoizedState),(q=qn||Wu(t,n,q,r,ie,_e,U)||!1)?(ae||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(r,_e,U),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(r,_e,U)),typeof _.componentDidUpdate=="function"&&(t.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof _.componentDidUpdate!="function"||A===e.memoizedProps&&ie===e.memoizedState||(t.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&ie===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_e),_.props=r,_.state=_e,_.context=U,r=q):(typeof _.componentDidUpdate!="function"||A===e.memoizedProps&&ie===e.memoizedState||(t.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&ie===e.memoizedState||(t.flags|=1024),r=!1)}return so(e,t,n,r,l,a)}function so(e,t,n,r,a,l){ec(e,t);var _=(t.flags&128)!==0;if(!r&&!_)return a&&au(t,n,!1),Cn(e,t,l);r=t.stateNode,ep.current=t;var A=_&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&_?(t.child=Ur(t,e.child,null,l),t.child=Ur(t,null,A,l)):kt(e,t,A,l),t.memoizedState=r.state,a&&au(t,n,!0),t.child}function nc(e){var t=e.stateNode;t.pendingContext?iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&iu(e,t.context,!1),Wa(e,t.containerInfo)}function rc(e,t,n,r,a){return Lr(),Ia(a),t.flags|=256,kt(e,t,n,r),t.child}var ao={dehydrated:null,treeContext:null,retryLane:0};function oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ic(e,t,n){var r=t.pendingProps,a=ot.current,l=!1,_=(t.flags&128)!==0,A;if((A=_)||(A=e!==null&&e.memoizedState===null?!1:(a&2)!==0),A?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ke(ot,a&1),e===null)return za(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(_=r.children,e=r.fallback,l?(r=t.mode,l=t.child,_={mode:"hidden",children:_},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=_):l=Us(_,r,0,null),e=hr(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=oo(n),t.memoizedState=ao,e):lo(t,_));if(a=e.memoizedState,a!==null&&(A=a.dehydrated,A!==null))return tp(e,t,_,r,A,a,n);if(l){l=r.fallback,_=t.mode,a=e.child,A=a.sibling;var U={mode:"hidden",children:r.children};return!(_&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=U,t.deletions=null):(r=Jn(a,U),r.subtreeFlags=a.subtreeFlags&14680064),A!==null?l=Jn(A,l):(l=hr(l,_,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,_=e.child.memoizedState,_=_===null?oo(n):{baseLanes:_.baseLanes|n,cachePool:null,transitions:_.transitions},l.memoizedState=_,l.childLanes=e.childLanes&~n,t.memoizedState=ao,r}return l=e.child,e=l.sibling,r=Jn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lo(e,t){return t=Us({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vs(e,t,n,r){return r!==null&&Ia(r),Ur(t,e.child,null,n),e=lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tp(e,t,n,r,a,l,_){if(n)return t.flags&256?(t.flags&=-257,r=no(Error(u(422))),vs(e,t,_,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Us({mode:"visible",children:r.children},a,0,null),l=hr(l,a,_,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Ur(t,e.child,null,_),t.child.memoizedState=oo(_),t.memoizedState=ao,l);if(!(t.mode&1))return vs(e,t,_,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var A=r.dgst;return r=A,l=Error(u(419)),r=no(l,r,void 0),vs(e,t,_,r)}if(A=(_&e.childLanes)!==0,Bt||A){if(r=Mt,r!==null){switch(_&-_){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|_)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Ln(e,a),cn(r,e,a,-1))}return Mo(),r=no(Error(u(421))),vs(e,t,_,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=hp.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,Qt=Wn(a.nextSibling),jt=t,nt=!0,an=null,e!==null&&(Kt[Zt++]=An,Kt[Zt++]=Rn,Kt[Zt++]=sr,An=e.id,Rn=e.overflow,sr=t),t=lo(t,r.children),t.flags|=4096,t)}function sc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fa(e.return,t,n)}function uo(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function ac(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(kt(e,t,r.children,n),r=ot.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sc(e,n,t);else if(e.tag===19)sc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ke(ot,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ds(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),uo(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ds(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}uo(t,!0,n,null,l);break;case"together":uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ys(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function np(e,t,n){switch(t.tag){case 3:nc(t),Lr();break;case 5:wu(t);break;case 1:Gt(t.type)&&ts(t);break;case 4:Wa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ke(os,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ke(ot,ot.current&1),t.flags|=128,null):n&t.child.childLanes?ic(e,t,n):(Ke(ot,ot.current&1),e=Cn(e,t,n),e!==null?e.sibling:null);Ke(ot,ot.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ac(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ke(ot,ot.current),r)break;return null;case 22:case 23:return t.lanes=0,Ju(e,t,n)}return Cn(e,t,n)}var oc,co,lc,uc;oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},co=function(){},lc=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,lr(vn.current);var l=null;switch(n){case"input":a=o(e,a),r=o(e,r),l=[];break;case"select":a=se({},a,{value:void 0}),r=se({},r,{value:void 0}),l=[];break;case"textarea":a=T(e,a),r=T(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}it(n,r);var _;n=null;for(q in a)if(!r.hasOwnProperty(q)&&a.hasOwnProperty(q)&&a[q]!=null)if(q==="style"){var A=a[q];for(_ in A)A.hasOwnProperty(_)&&(n||(n={}),n[_]="")}else q!=="dangerouslySetInnerHTML"&&q!=="children"&&q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&q!=="autoFocus"&&(g.hasOwnProperty(q)?l||(l=[]):(l=l||[]).push(q,null));for(q in r){var U=r[q];if(A=a!=null?a[q]:void 0,r.hasOwnProperty(q)&&U!==A&&(U!=null||A!=null))if(q==="style")if(A){for(_ in A)!A.hasOwnProperty(_)||U&&U.hasOwnProperty(_)||(n||(n={}),n[_]="");for(_ in U)U.hasOwnProperty(_)&&A[_]!==U[_]&&(n||(n={}),n[_]=U[_])}else n||(l||(l=[]),l.push(q,n)),n=U;else q==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,A=A?A.__html:void 0,U!=null&&A!==U&&(l=l||[]).push(q,U)):q==="children"?typeof U!="string"&&typeof U!="number"||(l=l||[]).push(q,""+U):q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&(g.hasOwnProperty(q)?(U!=null&&q==="onScroll"&&Je("scroll",e),l||A===U||(l=[])):(l=l||[]).push(q,U))}n&&(l=l||[]).push("style",n);var q=l;(t.updateQueue=q)&&(t.flags|=4)}},uc=function(e,t,n,r){n!==r&&(t.flags|=4)};function _i(e,t){if(!nt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function zt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rp(e,t,n){var r=t.pendingProps;switch(Ca(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(t),null;case 1:return Gt(t.type)&&es(),zt(t),null;case 3:return r=t.stateNode,zr(),et(Ft),et(Ct),$a(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ss(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,an!==null&&(To(an),an=null))),co(e,t),zt(t),null;case 5:Va(t);var a=lr(fi.current);if(n=t.type,e!==null&&t.stateNode!=null)lc(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return zt(t),null}if(e=lr(vn.current),ss(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[_n]=t,r[oi]=l,e=(t.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(a=0;a<ii.length;a++)Je(ii[a],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":v(r,l),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Je("invalid",r);break;case"textarea":C(r,l),Je("invalid",r)}it(n,l),a=null;for(var _ in l)if(l.hasOwnProperty(_)){var A=l[_];_==="children"?typeof A=="string"?r.textContent!==A&&(l.suppressHydrationWarning!==!0&&Ki(r.textContent,A,e),a=["children",A]):typeof A=="number"&&r.textContent!==""+A&&(l.suppressHydrationWarning!==!0&&Ki(r.textContent,A,e),a=["children",""+A]):g.hasOwnProperty(_)&&A!=null&&_==="onScroll"&&Je("scroll",r)}switch(n){case"input":S(r),x(r,l,!0);break;case"textarea":S(r),$(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Zi)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{_=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=K(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=_.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=_.createElement(n,{is:r.is}):(e=_.createElement(n),n==="select"&&(_=e,r.multiple?_.multiple=!0:r.size&&(_.size=r.size))):e=_.createElementNS(e,n),e[_n]=t,e[oi]=r,oc(e,t,!1,!1),t.stateNode=e;e:{switch(_=dt(n,r),n){case"dialog":Je("cancel",e),Je("close",e),a=r;break;case"iframe":case"object":case"embed":Je("load",e),a=r;break;case"video":case"audio":for(a=0;a<ii.length;a++)Je(ii[a],e);a=r;break;case"source":Je("error",e),a=r;break;case"img":case"image":case"link":Je("error",e),Je("load",e),a=r;break;case"details":Je("toggle",e),a=r;break;case"input":v(e,r),a=o(e,r),Je("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=se({},r,{value:void 0}),Je("invalid",e);break;case"textarea":C(e,r),a=T(e,r),Je("invalid",e);break;default:a=r}it(n,a),A=a;for(l in A)if(A.hasOwnProperty(l)){var U=A[l];l==="style"?Xe(e,U):l==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,U!=null&&Ae(e,U)):l==="children"?typeof U=="string"?(n!=="textarea"||U!=="")&&pe(e,U):typeof U=="number"&&pe(e,""+U):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(g.hasOwnProperty(l)?U!=null&&l==="onScroll"&&Je("scroll",e):U!=null&&le(e,l,U,_))}switch(n){case"input":S(e),x(e,r,!1);break;case"textarea":S(e),$(e);break;case"option":r.value!=null&&e.setAttribute("value",""+b(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?y(e,!!r.multiple,l,!1):r.defaultValue!=null&&y(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return zt(t),null;case 6:if(e&&t.stateNode!=null)uc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=lr(fi.current),lr(vn.current),ss(t)){if(r=t.stateNode,n=t.memoizedProps,r[_n]=t,(l=r.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:Ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=t,t.stateNode=r}return zt(t),null;case 13:if(et(ot),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(nt&&Qt!==null&&t.mode&1&&!(t.flags&128))fu(),Lr(),t.flags|=98560,l=!1;else if(l=ss(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[_n]=t}else Lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;zt(t),l=!1}else an!==null&&(To(an),an=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ot.current&1?yt===0&&(yt=3):Mo())),t.updateQueue!==null&&(t.flags|=4),zt(t),null);case 4:return zr(),co(e,t),e===null&&si(t.stateNode.containerInfo),zt(t),null;case 10:return Oa(t.type._context),zt(t),null;case 17:return Gt(t.type)&&es(),zt(t),null;case 19:if(et(ot),l=t.memoizedState,l===null)return zt(t),null;if(r=(t.flags&128)!==0,_=l.rendering,_===null)if(r)_i(l,!1);else{if(yt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(_=ds(e),_!==null){for(t.flags|=128,_i(l,!1),r=_.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,_=l.alternate,_===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=_.childLanes,l.lanes=_.lanes,l.child=_.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=_.memoizedProps,l.memoizedState=_.memoizedState,l.updateQueue=_.updateQueue,l.type=_.type,e=_.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ke(ot,ot.current&1|2),t.child}e=e.sibling}l.tail!==null&&ft()>Or&&(t.flags|=128,r=!0,_i(l,!1),t.lanes=4194304)}else{if(!r)if(e=ds(_),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_i(l,!0),l.tail===null&&l.tailMode==="hidden"&&!_.alternate&&!nt)return zt(t),null}else 2*ft()-l.renderingStartTime>Or&&n!==1073741824&&(t.flags|=128,r=!0,_i(l,!1),t.lanes=4194304);l.isBackwards?(_.sibling=t.child,t.child=_):(n=l.last,n!==null?n.sibling=_:t.child=_,l.last=_)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ft(),t.sibling=null,n=ot.current,Ke(ot,r?n&1|2:n&1),t):(zt(t),null);case 22:case 23:return Eo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Yt&1073741824&&(zt(t),t.subtreeFlags&6&&(t.flags|=8192)):zt(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function ip(e,t){switch(Ca(t),t.tag){case 1:return Gt(t.type)&&es(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),et(Ft),et(Ct),$a(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Va(t),null;case 13:if(et(ot),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return et(ot),null;case 4:return zr(),null;case 10:return Oa(t.type._context),null;case 22:case 23:return Eo(),null;case 24:return null;default:return null}}var ws=!1,It=!1,sp=typeof WeakSet=="function"?WeakSet:Set,he=null;function kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ut(e,t,r)}else n.current=null}function fo(e,t,n){try{n()}catch(r){ut(e,t,r)}}var cc=!1;function ap(e,t){if(Sa=Gi,e=Wl(),ma(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var _=0,A=-1,U=-1,q=0,ae=0,oe=e,ie=null;t:for(;;){for(var fe;oe!==n||a!==0&&oe.nodeType!==3||(A=_+a),oe!==l||r!==0&&oe.nodeType!==3||(U=_+r),oe.nodeType===3&&(_+=oe.nodeValue.length),(fe=oe.firstChild)!==null;)ie=oe,oe=fe;for(;;){if(oe===e)break t;if(ie===n&&++q===a&&(A=_),ie===l&&++ae===r&&(U=_),(fe=oe.nextSibling)!==null)break;oe=ie,ie=oe.parentNode}oe=fe}n=A===-1||U===-1?null:{start:A,end:U}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},Gi=!1,he=t;he!==null;)if(t=he,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,he=e;else for(;he!==null;){t=he;try{var _e=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_e!==null){var ye=_e.memoizedProps,pt=_e.memoizedState,O=t.stateNode,I=O.getSnapshotBeforeUpdate(t.elementType===t.type?ye:on(t.type,ye),pt);O.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var F=t.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(ue){ut(t,t.return,ue)}if(e=t.sibling,e!==null){e.return=t.return,he=e;break}he=t.return}return _e=cc,cc=!1,_e}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&fo(t,n,l)}a=a.next}while(a!==r)}}function xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function po(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dc(e){var t=e.alternate;t!==null&&(e.alternate=null,dc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_n],delete t[oi],delete t[Aa],delete t[Wf],delete t[Vf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fc(e){return e.tag===5||e.tag===3||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ho(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(ho(e,t,n),e=e.sibling;e!==null;)ho(e,t,n),e=e.sibling}function mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mo(e,t,n),e=e.sibling;e!==null;)mo(e,t,n),e=e.sibling}var At=null,ln=!1;function Qn(e,t,n){for(n=n.child;n!==null;)hc(e,t,n),n=n.sibling}function hc(e,t,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:It||kr(n,t);case 6:var r=At,a=ln;At=null,Qn(e,t,n),At=r,ln=a,At!==null&&(ln?(e=At,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&(ln?(e=At,n=n.stateNode,e.nodeType===8?Pa(e.parentNode,n):e.nodeType===1&&Pa(e,n),Xr(e)):Pa(At,n.stateNode));break;case 4:r=At,a=ln,At=n.stateNode.containerInfo,ln=!0,Qn(e,t,n),At=r,ln=a;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,_=l.destroy;l=l.tag,_!==void 0&&(l&2||l&4)&&fo(n,t,_),a=a.next}while(a!==r)}Qn(e,t,n);break;case 1:if(!It&&(kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(A){ut(n,t,A)}Qn(e,t,n);break;case 21:Qn(e,t,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,Qn(e,t,n),It=r):Qn(e,t,n);break;default:Qn(e,t,n)}}function mc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sp),t.forEach(function(r){var a=mp.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function un(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,_=t,A=_;e:for(;A!==null;){switch(A.tag){case 5:At=A.stateNode,ln=!1;break e;case 3:At=A.stateNode.containerInfo,ln=!0;break e;case 4:At=A.stateNode.containerInfo,ln=!0;break e}A=A.return}if(At===null)throw Error(u(160));hc(l,_,a),At=null,ln=!1;var U=a.alternate;U!==null&&(U.return=null),a.return=null}catch(q){ut(a,t,q)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gc(t,e),t=t.sibling}function gc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(un(t,e),wn(e),r&4){try{vi(3,e,e.return),xs(3,e)}catch(ye){ut(e,e.return,ye)}try{vi(5,e,e.return)}catch(ye){ut(e,e.return,ye)}}break;case 1:un(t,e),wn(e),r&512&&n!==null&&kr(n,n.return);break;case 5:if(un(t,e),wn(e),r&512&&n!==null&&kr(n,n.return),e.flags&32){var a=e.stateNode;try{pe(a,"")}catch(ye){ut(e,e.return,ye)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,_=n!==null?n.memoizedProps:l,A=e.type,U=e.updateQueue;if(e.updateQueue=null,U!==null)try{A==="input"&&l.type==="radio"&&l.name!=null&&c(a,l),dt(A,_);var q=dt(A,l);for(_=0;_<U.length;_+=2){var ae=U[_],oe=U[_+1];ae==="style"?Xe(a,oe):ae==="dangerouslySetInnerHTML"?Ae(a,oe):ae==="children"?pe(a,oe):le(a,ae,oe,q)}switch(A){case"input":p(a,l);break;case"textarea":z(a,l);break;case"select":var ie=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var fe=l.value;fe!=null?y(a,!!l.multiple,fe,!1):ie!==!!l.multiple&&(l.defaultValue!=null?y(a,!!l.multiple,l.defaultValue,!0):y(a,!!l.multiple,l.multiple?[]:"",!1))}a[oi]=l}catch(ye){ut(e,e.return,ye)}}break;case 6:if(un(t,e),wn(e),r&4){if(e.stateNode===null)throw Error(u(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(ye){ut(e,e.return,ye)}}break;case 3:if(un(t,e),wn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(ye){ut(e,e.return,ye)}break;case 4:un(t,e),wn(e);break;case 13:un(t,e),wn(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(vo=ft())),r&4&&mc(e);break;case 22:if(ae=n!==null&&n.memoizedState!==null,e.mode&1?(It=(q=It)||ae,un(t,e),It=q):un(t,e),wn(e),r&8192){if(q=e.memoizedState!==null,(e.stateNode.isHidden=q)&&!ae&&e.mode&1)for(he=e,ae=e.child;ae!==null;){for(oe=he=ae;he!==null;){switch(ie=he,fe=ie.child,ie.tag){case 0:case 11:case 14:case 15:vi(4,ie,ie.return);break;case 1:kr(ie,ie.return);var _e=ie.stateNode;if(typeof _e.componentWillUnmount=="function"){r=ie,n=ie.return;try{t=r,_e.props=t.memoizedProps,_e.state=t.memoizedState,_e.componentWillUnmount()}catch(ye){ut(r,n,ye)}}break;case 5:kr(ie,ie.return);break;case 22:if(ie.memoizedState!==null){yc(oe);continue}}fe!==null?(fe.return=ie,he=fe):yc(oe)}ae=ae.sibling}e:for(ae=null,oe=e;;){if(oe.tag===5){if(ae===null){ae=oe;try{a=oe.stateNode,q?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(A=oe.stateNode,U=oe.memoizedProps.style,_=U!=null&&U.hasOwnProperty("display")?U.display:null,A.style.display=We("display",_))}catch(ye){ut(e,e.return,ye)}}}else if(oe.tag===6){if(ae===null)try{oe.stateNode.nodeValue=q?"":oe.memoizedProps}catch(ye){ut(e,e.return,ye)}}else if((oe.tag!==22&&oe.tag!==23||oe.memoizedState===null||oe===e)&&oe.child!==null){oe.child.return=oe,oe=oe.child;continue}if(oe===e)break e;for(;oe.sibling===null;){if(oe.return===null||oe.return===e)break e;ae===oe&&(ae=null),oe=oe.return}ae===oe&&(ae=null),oe.sibling.return=oe.return,oe=oe.sibling}}break;case 19:un(t,e),wn(e),r&4&&mc(e);break;case 21:break;default:un(t,e),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fc(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(pe(a,""),r.flags&=-33);var l=pc(e);mo(e,l,a);break;case 3:case 4:var _=r.stateNode.containerInfo,A=pc(e);ho(e,A,_);break;default:throw Error(u(161))}}catch(U){ut(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function op(e,t,n){he=e,_c(e)}function _c(e,t,n){for(var r=(e.mode&1)!==0;he!==null;){var a=he,l=a.child;if(a.tag===22&&r){var _=a.memoizedState!==null||ws;if(!_){var A=a.alternate,U=A!==null&&A.memoizedState!==null||It;A=ws;var q=It;if(ws=_,(It=U)&&!q)for(he=a;he!==null;)_=he,U=_.child,_.tag===22&&_.memoizedState!==null?wc(a):U!==null?(U.return=_,he=U):wc(a);for(;l!==null;)he=l,_c(l),l=l.sibling;he=a,ws=A,It=q}vc(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,he=l):vc(e)}}function vc(e){for(;he!==null;){var t=he;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:It||xs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!It)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:on(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&yu(t,l,r);break;case 3:var _=t.updateQueue;if(_!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yu(t,_,n)}break;case 5:var A=t.stateNode;if(n===null&&t.flags&4){n=A;var U=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":U.autoFocus&&n.focus();break;case"img":U.src&&(n.src=U.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var q=t.alternate;if(q!==null){var ae=q.memoizedState;if(ae!==null){var oe=ae.dehydrated;oe!==null&&Xr(oe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}It||t.flags&512&&po(t)}catch(ie){ut(t,t.return,ie)}}if(t===e){he=null;break}if(n=t.sibling,n!==null){n.return=t.return,he=n;break}he=t.return}}function yc(e){for(;he!==null;){var t=he;if(t===e){he=null;break}var n=t.sibling;if(n!==null){n.return=t.return,he=n;break}he=t.return}}function wc(e){for(;he!==null;){var t=he;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xs(4,t)}catch(U){ut(t,n,U)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(U){ut(t,a,U)}}var l=t.return;try{po(t)}catch(U){ut(t,l,U)}break;case 5:var _=t.return;try{po(t)}catch(U){ut(t,_,U)}}}catch(U){ut(t,t.return,U)}if(t===e){he=null;break}var A=t.sibling;if(A!==null){A.return=t.return,he=A;break}he=t.return}}var lp=Math.ceil,Ts=ve.ReactCurrentDispatcher,go=ve.ReactCurrentOwner,tn=ve.ReactCurrentBatchConfig,qe=0,Mt=null,_t=null,Rt=0,Yt=0,Nr=Vn(0),yt=0,yi=null,cr=0,Ss=0,_o=0,wi=null,Wt=null,vo=0,Or=1/0,Dn=null,Es=!1,yo=null,Yn=null,Ms=!1,Xn=null,bs=0,xi=0,wo=null,Ps=-1,As=0;function Nt(){return qe&6?ft():Ps!==-1?Ps:Ps=ft()}function Kn(e){return e.mode&1?qe&2&&Rt!==0?Rt&-Rt:$f.transition!==null?(As===0&&(As=pl()),As):(e=Qe,e!==0||(e=window.event,e=e===void 0?16:Tl(e.type)),e):1}function cn(e,t,n,r){if(50<xi)throw xi=0,wo=null,Error(u(185));$r(e,n,r),(!(qe&2)||e!==Mt)&&(e===Mt&&(!(qe&2)&&(Ss|=n),yt===4&&Zn(e,Rt)),Vt(e,r),n===1&&qe===0&&!(t.mode&1)&&(Or=ft()+500,ns&&$n()))}function Vt(e,t){var n=e.callbackNode;Hd(e,t);var r=Ni(e,e===Mt?Rt:0);if(r===0)n!==null&&cl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cl(n),t===1)e.tag===0?Hf(Tc.bind(null,e)):ou(Tc.bind(null,e)),Gf(function(){!(qe&6)&&$n()}),n=null;else{switch(hl(r)){case 1:n=Zs;break;case 4:n=dl;break;case 16:n=Di;break;case 536870912:n=fl;break;default:n=Di}n=Lc(n,xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xc(e,t){if(Ps=-1,As=0,qe&6)throw Error(u(327));var n=e.callbackNode;if(Fr()&&e.callbackNode!==n)return null;var r=Ni(e,e===Mt?Rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Rs(e,r);else{t=r;var a=qe;qe|=2;var l=Ec();(Mt!==e||Rt!==t)&&(Dn=null,Or=ft()+500,fr(e,t));do try{dp();break}catch(A){Sc(e,A)}while(!0);Na(),Ts.current=l,qe=a,_t!==null?t=0:(Mt=null,Rt=0,t=yt)}if(t!==0){if(t===2&&(a=Js(e),a!==0&&(r=a,t=xo(e,a))),t===1)throw n=yi,fr(e,0),Zn(e,r),Vt(e,ft()),n;if(t===6)Zn(e,r);else{if(a=e.current.alternate,!(r&30)&&!up(a)&&(t=Rs(e,r),t===2&&(l=Js(e),l!==0&&(r=l,t=xo(e,l))),t===1))throw n=yi,fr(e,0),Zn(e,r),Vt(e,ft()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:pr(e,Wt,Dn);break;case 3:if(Zn(e,r),(r&130023424)===r&&(t=vo+500-ft(),10<t)){if(Ni(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Nt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ba(pr.bind(null,e,Wt,Dn),t);break}pr(e,Wt,Dn);break;case 4:if(Zn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var _=31-rn(r);l=1<<_,_=t[_],_>a&&(a=_),r&=~l}if(r=a,r=ft()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lp(r/1960))-r,10<r){e.timeoutHandle=ba(pr.bind(null,e,Wt,Dn),r);break}pr(e,Wt,Dn);break;case 5:pr(e,Wt,Dn);break;default:throw Error(u(329))}}}return Vt(e,ft()),e.callbackNode===n?xc.bind(null,e):null}function xo(e,t){var n=wi;return e.current.memoizedState.isDehydrated&&(fr(e,t).flags|=256),e=Rs(e,t),e!==2&&(t=Wt,Wt=n,t!==null&&To(t)),e}function To(e){Wt===null?Wt=e:Wt.push.apply(Wt,e)}function up(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!sn(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t){for(t&=~_o,t&=~Ss,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rn(t),r=1<<n;e[n]=-1,t&=~r}}function Tc(e){if(qe&6)throw Error(u(327));Fr();var t=Ni(e,0);if(!(t&1))return Vt(e,ft()),null;var n=Rs(e,t);if(e.tag!==0&&n===2){var r=Js(e);r!==0&&(t=r,n=xo(e,r))}if(n===1)throw n=yi,fr(e,0),Zn(e,t),Vt(e,ft()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,Wt,Dn),Vt(e,ft()),null}function So(e,t){var n=qe;qe|=1;try{return e(t)}finally{qe=n,qe===0&&(Or=ft()+500,ns&&$n())}}function dr(e){Xn!==null&&Xn.tag===0&&!(qe&6)&&Fr();var t=qe;qe|=1;var n=tn.transition,r=Qe;try{if(tn.transition=null,Qe=1,e)return e()}finally{Qe=r,tn.transition=n,qe=t,!(qe&6)&&$n()}}function Eo(){Yt=Nr.current,et(Nr)}function fr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ff(n)),_t!==null)for(n=_t.return;n!==null;){var r=n;switch(Ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&es();break;case 3:zr(),et(Ft),et(Ct),$a();break;case 5:Va(r);break;case 4:zr();break;case 13:et(ot);break;case 19:et(ot);break;case 10:Oa(r.type._context);break;case 22:case 23:Eo()}n=n.return}if(Mt=e,_t=e=Jn(e.current,null),Rt=Yt=t,yt=0,yi=null,_o=Ss=cr=0,Wt=wi=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var _=l.next;l.next=a,r.next=_}n.pending=r}or=null}return e}function Sc(e,t){do{var n=_t;try{if(Na(),fs.current=gs,ps){for(var r=lt.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ps=!1}if(ur=0,Et=vt=lt=null,pi=!1,hi=0,go.current=null,n===null||n.return===null){yt=1,yi=t,_t=null;break}e:{var l=e,_=n.return,A=n,U=t;if(t=Rt,A.flags|=32768,U!==null&&typeof U=="object"&&typeof U.then=="function"){var q=U,ae=A,oe=ae.tag;if(!(ae.mode&1)&&(oe===0||oe===11||oe===15)){var ie=ae.alternate;ie?(ae.updateQueue=ie.updateQueue,ae.memoizedState=ie.memoizedState,ae.lanes=ie.lanes):(ae.updateQueue=null,ae.memoizedState=null)}var fe=Qu(_);if(fe!==null){fe.flags&=-257,Yu(fe,_,A,l,t),fe.mode&1&&ju(l,q,t),t=fe,U=q;var _e=t.updateQueue;if(_e===null){var ye=new Set;ye.add(U),t.updateQueue=ye}else _e.add(U);break e}else{if(!(t&1)){ju(l,q,t),Mo();break e}U=Error(u(426))}}else if(nt&&A.mode&1){var pt=Qu(_);if(pt!==null){!(pt.flags&65536)&&(pt.flags|=256),Yu(pt,_,A,l,t),Ia(Ir(U,A));break e}}l=U=Ir(U,A),yt!==4&&(yt=2),wi===null?wi=[l]:wi.push(l),l=_;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var O=$u(l,U,t);vu(l,O);break e;case 1:A=U;var I=l.type,F=l.stateNode;if(!(l.flags&128)&&(typeof I.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Yn===null||!Yn.has(F)))){l.flags|=65536,t&=-t,l.lanes|=t;var ue=qu(l,A,t);vu(l,ue);break e}}l=l.return}while(l!==null)}bc(n)}catch(we){t=we,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function Ec(){var e=Ts.current;return Ts.current=gs,e===null?gs:e}function Mo(){(yt===0||yt===3||yt===2)&&(yt=4),Mt===null||!(cr&268435455)&&!(Ss&268435455)||Zn(Mt,Rt)}function Rs(e,t){var n=qe;qe|=2;var r=Ec();(Mt!==e||Rt!==t)&&(Dn=null,fr(e,t));do try{cp();break}catch(a){Sc(e,a)}while(!0);if(Na(),qe=n,Ts.current=r,_t!==null)throw Error(u(261));return Mt=null,Rt=0,yt}function cp(){for(;_t!==null;)Mc(_t)}function dp(){for(;_t!==null&&!Id();)Mc(_t)}function Mc(e){var t=Rc(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?bc(e):_t=t,go.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ip(n,t),n!==null){n.flags&=32767,_t=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yt=6,_t=null;return}}else if(n=rp(n,t,Yt),n!==null){_t=n;return}if(t=t.sibling,t!==null){_t=t;return}_t=t=e}while(t!==null);yt===0&&(yt=5)}function pr(e,t,n){var r=Qe,a=tn.transition;try{tn.transition=null,Qe=1,fp(e,t,n,r)}finally{tn.transition=a,Qe=r}return null}function fp(e,t,n,r){do Fr();while(Xn!==null);if(qe&6)throw Error(u(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if($d(e,l),e===Mt&&(_t=Mt=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ms||(Ms=!0,Lc(Di,function(){return Fr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=tn.transition,tn.transition=null;var _=Qe;Qe=1;var A=qe;qe|=4,go.current=null,ap(e,n),gc(n,e),Cf(Ea),Gi=!!Sa,Ea=Sa=null,e.current=n,op(n),kd(),qe=A,Qe=_,tn.transition=l}else e.current=n;if(Ms&&(Ms=!1,Xn=e,bs=a),l=e.pendingLanes,l===0&&(Yn=null),Fd(n.stateNode),Vt(e,ft()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Es)throw Es=!1,e=yo,yo=null,e;return bs&1&&e.tag!==0&&Fr(),l=e.pendingLanes,l&1?e===wo?xi++:(xi=0,wo=e):xi=0,$n(),null}function Fr(){if(Xn!==null){var e=hl(bs),t=tn.transition,n=Qe;try{if(tn.transition=null,Qe=16>e?16:e,Xn===null)var r=!1;else{if(e=Xn,Xn=null,bs=0,qe&6)throw Error(u(331));var a=qe;for(qe|=4,he=e.current;he!==null;){var l=he,_=l.child;if(he.flags&16){var A=l.deletions;if(A!==null){for(var U=0;U<A.length;U++){var q=A[U];for(he=q;he!==null;){var ae=he;switch(ae.tag){case 0:case 11:case 15:vi(8,ae,l)}var oe=ae.child;if(oe!==null)oe.return=ae,he=oe;else for(;he!==null;){ae=he;var ie=ae.sibling,fe=ae.return;if(dc(ae),ae===q){he=null;break}if(ie!==null){ie.return=fe,he=ie;break}he=fe}}}var _e=l.alternate;if(_e!==null){var ye=_e.child;if(ye!==null){_e.child=null;do{var pt=ye.sibling;ye.sibling=null,ye=pt}while(ye!==null)}}he=l}}if(l.subtreeFlags&2064&&_!==null)_.return=l,he=_;else e:for(;he!==null;){if(l=he,l.flags&2048)switch(l.tag){case 0:case 11:case 15:vi(9,l,l.return)}var O=l.sibling;if(O!==null){O.return=l.return,he=O;break e}he=l.return}}var I=e.current;for(he=I;he!==null;){_=he;var F=_.child;if(_.subtreeFlags&2064&&F!==null)F.return=_,he=F;else e:for(_=I;he!==null;){if(A=he,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:xs(9,A)}}catch(we){ut(A,A.return,we)}if(A===_){he=null;break e}var ue=A.sibling;if(ue!==null){ue.return=A.return,he=ue;break e}he=A.return}}if(qe=a,$n(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(zi,e)}catch{}r=!0}return r}finally{Qe=n,tn.transition=t}}return!1}function Pc(e,t,n){t=Ir(n,t),t=$u(e,t,1),e=jn(e,t,1),t=Nt(),e!==null&&($r(e,1,t),Vt(e,t))}function ut(e,t,n){if(e.tag===3)Pc(e,e,n);else for(;t!==null;){if(t.tag===3){Pc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=Ir(n,e),e=qu(t,e,1),t=jn(t,e,1),e=Nt(),t!==null&&($r(t,1,e),Vt(t,e));break}}t=t.return}}function pp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Nt(),e.pingedLanes|=e.suspendedLanes&n,Mt===e&&(Rt&n)===n&&(yt===4||yt===3&&(Rt&130023424)===Rt&&500>ft()-vo?fr(e,0):_o|=n),Vt(e,t)}function Ac(e,t){t===0&&(e.mode&1?(t=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):t=1);var n=Nt();e=Ln(e,t),e!==null&&($r(e,t,n),Vt(e,n))}function hp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ac(e,n)}function mp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Ac(e,n)}var Rc;Rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ft.current)Bt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Bt=!1,np(e,t,n);Bt=!!(e.flags&131072)}else Bt=!1,nt&&t.flags&1048576&&lu(t,is,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ys(e,t),e=t.pendingProps;var a=Pr(t,Ct.current);Dr(t,n),a=Qa(null,t,r,e,a,n);var l=Ya();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Gt(r)?(l=!0,ts(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ba(t),a.updater=_s,t.stateNode=a,a._reactInternals=t,to(t,r,e,n),t=so(null,t,r,!0,l,n)):(t.tag=0,nt&&l&&Ua(t),kt(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ys(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=_p(r),e=on(r,e),a){case 0:t=io(null,t,r,e,n);break e;case 1:t=tc(null,t,r,e,n);break e;case 11:t=Xu(null,t,r,e,n);break e;case 14:t=Ku(null,t,r,on(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:on(r,a),io(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:on(r,a),tc(e,t,r,a,n);case 3:e:{if(nc(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,a=l.element,_u(e,t),cs(t,r,null,n);var _=t.memoizedState;if(r=_.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=Ir(Error(u(423)),t),t=rc(e,t,r,n,a);break e}else if(r!==a){a=Ir(Error(u(424)),t),t=rc(e,t,r,n,a);break e}else for(Qt=Wn(t.stateNode.containerInfo.firstChild),jt=t,nt=!0,an=null,n=mu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lr(),r===a){t=Cn(e,t,n);break e}kt(e,t,r,n)}t=t.child}return t;case 5:return wu(t),e===null&&za(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,_=a.children,Ma(r,a)?_=null:l!==null&&Ma(r,l)&&(t.flags|=32),ec(e,t),kt(e,t,_,n),t.child;case 6:return e===null&&za(t),null;case 13:return ic(e,t,n);case 4:return Wa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ur(t,null,r,n):kt(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:on(r,a),Xu(e,t,r,a,n);case 7:return kt(e,t,t.pendingProps,n),t.child;case 8:return kt(e,t,t.pendingProps.children,n),t.child;case 12:return kt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,_=a.value,Ke(os,r._currentValue),r._currentValue=_,l!==null)if(sn(l.value,_)){if(l.children===a.children&&!Ft.current){t=Cn(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var A=l.dependencies;if(A!==null){_=l.child;for(var U=A.firstContext;U!==null;){if(U.context===r){if(l.tag===1){U=Un(-1,n&-n),U.tag=2;var q=l.updateQueue;if(q!==null){q=q.shared;var ae=q.pending;ae===null?U.next=U:(U.next=ae.next,ae.next=U),q.pending=U}}l.lanes|=n,U=l.alternate,U!==null&&(U.lanes|=n),Fa(l.return,n,t),A.lanes|=n;break}U=U.next}}else if(l.tag===10)_=l.type===t.type?null:l.child;else if(l.tag===18){if(_=l.return,_===null)throw Error(u(341));_.lanes|=n,A=_.alternate,A!==null&&(A.lanes|=n),Fa(_,n,t),_=l.sibling}else _=l.child;if(_!==null)_.return=l;else for(_=l;_!==null;){if(_===t){_=null;break}if(l=_.sibling,l!==null){l.return=_.return,_=l;break}_=_.return}l=_}kt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Dr(t,n),a=Jt(a),r=r(a),t.flags|=1,kt(e,t,r,n),t.child;case 14:return r=t.type,a=on(r,t.pendingProps),a=on(r.type,a),Ku(e,t,r,a,n);case 15:return Zu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:on(r,a),ys(e,t),t.tag=1,Gt(r)?(e=!0,ts(t)):e=!1,Dr(t,n),Vu(t,r,a),to(t,r,a,n),so(null,t,r,!0,e,n);case 19:return ac(e,t,n);case 22:return Ju(e,t,n)}throw Error(u(156,t.tag))};function Lc(e,t){return ul(e,t)}function gp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(e,t,n,r){return new gp(e,t,n,r)}function bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _p(e){if(typeof e=="function")return bo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ee)return 11;if(e===Ze)return 14}return 2}function Jn(e,t){var n=e.alternate;return n===null?(n=nn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ls(e,t,n,r,a,l){var _=2;if(r=e,typeof e=="function")bo(e)&&(_=1);else if(typeof e=="string")_=5;else e:switch(e){case Ie:return hr(n.children,a,l,t);case Ne:_=8,a|=8;break;case Le:return e=nn(12,n,t,a|2),e.elementType=Le,e.lanes=l,e;case Ue:return e=nn(13,n,t,a),e.elementType=Ue,e.lanes=l,e;case Se:return e=nn(19,n,t,a),e.elementType=Se,e.lanes=l,e;case Ge:return Us(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ke:_=10;break e;case Ye:_=9;break e;case Ee:_=11;break e;case Ze:_=14;break e;case $e:_=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=nn(_,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function hr(e,t,n,r){return e=nn(7,e,r,t),e.lanes=n,e}function Us(e,t,n,r){return e=nn(22,e,r,t),e.elementType=Ge,e.lanes=n,e.stateNode={isHidden:!1},e}function Po(e,t,n){return e=nn(6,e,null,t),e.lanes=n,e}function Ao(e,t,n){return t=nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vp(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ro(e,t,n,r,a,l,_,A,U){return e=new vp(e,t,n,A,U),t===1?(t=1,l===!0&&(t|=8)):t=0,l=nn(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ba(l),e}function yp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:De,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uc(e){if(!e)return Hn;e=e._reactInternals;e:{if(tt(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(Gt(n))return su(e,n,t)}return t}function Cc(e,t,n,r,a,l,_,A,U){return e=Ro(n,r,!0,e,a,l,_,A,U),e.context=Uc(null),n=e.current,r=Nt(),a=Kn(n),l=Un(r,a),l.callback=t??null,jn(n,l,a),e.current.lanes=a,$r(e,a,r),Vt(e,r),e}function Cs(e,t,n,r){var a=t.current,l=Nt(),_=Kn(a);return n=Uc(n),t.context===null?t.context=n:t.pendingContext=n,t=Un(l,_),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jn(a,t,_),e!==null&&(cn(e,a,_,l),us(e,a,_)),_}function Ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lo(e,t){Dc(e,t),(e=e.alternate)&&Dc(e,t)}var zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uo(e){this._internalRoot=e}zs.prototype.render=Uo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Cs(e,t,null,null)},zs.prototype.unmount=Uo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dr(function(){Cs(null,e,null,null)}),t[bn]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=_l();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&wl(e)}};function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ic(){}function wp(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var q=Ds(_);l.call(q)}}var _=Cc(t,r,e,0,null,!1,!1,"",Ic);return e._reactRootContainer=_,e[bn]=_.current,si(e.nodeType===8?e.parentNode:e),dr(),_}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var A=r;r=function(){var q=Ds(U);A.call(q)}}var U=Ro(e,0,!1,null,null,!1,!1,"",Ic);return e._reactRootContainer=U,e[bn]=U.current,si(e.nodeType===8?e.parentNode:e),dr(function(){Cs(t,U,n,r)}),U}function ks(e,t,n,r,a){var l=n._reactRootContainer;if(l){var _=l;if(typeof a=="function"){var A=a;a=function(){var U=Ds(_);A.call(U)}}Cs(t,_,e,a)}else _=wp(n,t,e,a,r);return Ds(_)}ml=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hr(t.pendingLanes);n!==0&&(ta(t,n|1),Vt(t,ft()),!(qe&6)&&(Or=ft()+500,$n()))}break;case 13:dr(function(){var r=Ln(e,1);if(r!==null){var a=Nt();cn(r,e,1,a)}}),Lo(e,1)}},na=function(e){if(e.tag===13){var t=Ln(e,134217728);if(t!==null){var n=Nt();cn(t,e,134217728,n)}Lo(e,134217728)}},gl=function(e){if(e.tag===13){var t=Kn(e),n=Ln(e,t);if(n!==null){var r=Nt();cn(n,e,t,r)}Lo(e,t)}},_l=function(){return Qe},vl=function(e,t){var n=Qe;try{return Qe=e,t()}finally{Qe=n}},gt=function(e,t,n){switch(t){case"input":if(p(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Ji(r);if(!a)throw Error(u(90));L(r),p(r,a)}}}break;case"textarea":z(e,n);break;case"select":t=n.value,t!=null&&y(e,!!n.multiple,t,!1)}},St=So,Lt=dr;var xp={usingClientEntryPoint:!1,Events:[li,Mr,Ji,xt,Tt,So]},Ti={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tp={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ol(e),e===null?null:e.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ns.isDisabled&&Ns.supportsFiber)try{zi=Ns.inject(Tp),gn=Ns}catch{}}return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xp,Ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Co(t))throw Error(u(200));return yp(e,t,null,n)},Ht.createRoot=function(e,t){if(!Co(e))throw Error(u(299));var n=!1,r="",a=zc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ro(e,1,!1,null,null,n,!1,r,a),e[bn]=t.current,si(e.nodeType===8?e.parentNode:e),new Uo(t)},Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=ol(t),e=e===null?null:e.stateNode,e},Ht.flushSync=function(e){return dr(e)},Ht.hydrate=function(e,t,n){if(!Is(t))throw Error(u(200));return ks(null,e,t,!0,n)},Ht.hydrateRoot=function(e,t,n){if(!Co(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",_=zc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),t=Cc(t,null,e,1,n??null,a,!1,l,_),e[bn]=t.current,si(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new zs(t)},Ht.render=function(e,t,n){if(!Is(t))throw Error(u(200));return ks(null,e,t,!1,n)},Ht.unmountComponentAtNode=function(e){if(!Is(e))throw Error(u(40));return e._reactRootContainer?(dr(function(){ks(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1},Ht.unstable_batchedUpdates=So,Ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Is(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return ks(e,t,n,!1,r)},Ht.version="18.3.1-next-f1338f8080-20240426",Ht}var Vc;function gd(){if(Vc)return Io.exports;Vc=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Io.exports=Up(),Io.exports}var Hc;function Cp(){if(Hc)return Os;Hc=1;var s=gd();return Os.createRoot=s.createRoot,Os.hydrateRoot=s.hydrateRoot,Os}var Dp=Cp(),Ei={},$c;function zp(){if($c)return Ei;$c=1,Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.parse=E,Ei.serialize=R;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,m=/^[\u0020-\u003A\u003D-\u007E]*$/,g=Object.prototype.toString,w=(()=>{const N=function(){};return N.prototype=Object.create(null),N})();function E(N,J){const B=new w,X=N.length;if(X<2)return B;const ne=(J==null?void 0:J.decode)||G;let Q=0;do{const Y=N.indexOf("=",Q);if(Y===-1)break;const le=N.indexOf(";",Q),ve=le===-1?X:le;if(Y>ve){Q=N.lastIndexOf(";",Y-1)+1;continue}const Pe=P(N,Q,Y),De=M(N,Y,Pe),Ie=N.slice(Pe,De);if(B[Ie]===void 0){let Ne=P(N,Y+1,ve),Le=M(N,ve,Ne);const ke=ne(N.slice(Ne,Le));B[Ie]=ke}Q=ve+1}while(Q<X);return B}function P(N,J,B){do{const X=N.charCodeAt(J);if(X!==32&&X!==9)return J}while(++J<B);return B}function M(N,J,B){for(;J>B;){const X=N.charCodeAt(--J);if(X!==32&&X!==9)return J+1}return B}function R(N,J,B){const X=(B==null?void 0:B.encode)||encodeURIComponent;if(!s.test(N))throw new TypeError(`argument name is invalid: ${N}`);const ne=X(J);if(!i.test(ne))throw new TypeError(`argument val is invalid: ${J}`);let Q=N+"="+ne;if(!B)return Q;if(B.maxAge!==void 0){if(!Number.isInteger(B.maxAge))throw new TypeError(`option maxAge is invalid: ${B.maxAge}`);Q+="; Max-Age="+B.maxAge}if(B.domain){if(!u.test(B.domain))throw new TypeError(`option domain is invalid: ${B.domain}`);Q+="; Domain="+B.domain}if(B.path){if(!m.test(B.path))throw new TypeError(`option path is invalid: ${B.path}`);Q+="; Path="+B.path}if(B.expires){if(!W(B.expires)||!Number.isFinite(B.expires.valueOf()))throw new TypeError(`option expires is invalid: ${B.expires}`);Q+="; Expires="+B.expires.toUTCString()}if(B.httpOnly&&(Q+="; HttpOnly"),B.secure&&(Q+="; Secure"),B.partitioned&&(Q+="; Partitioned"),B.priority)switch(typeof B.priority=="string"?B.priority.toLowerCase():void 0){case"low":Q+="; Priority=Low";break;case"medium":Q+="; Priority=Medium";break;case"high":Q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${B.priority}`)}if(B.sameSite)switch(typeof B.sameSite=="string"?B.sameSite.toLowerCase():B.sameSite){case!0:case"strict":Q+="; SameSite=Strict";break;case"lax":Q+="; SameSite=Lax";break;case"none":Q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${B.sameSite}`)}return Q}function G(N){if(N.indexOf("%")===-1)return N;try{return decodeURIComponent(N)}catch{return N}}function W(N){return g.call(N)==="[object Date]"}return Ei}zp();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qc="popstate";function Ip(s={}){function i(g,w){let{pathname:E="/",search:P="",hash:M=""}=mr(g.location.hash.substring(1));return!E.startsWith("/")&&!E.startsWith(".")&&(E="/"+E),Ho("",{pathname:E,search:P,hash:M},w.state&&w.state.usr||null,w.state&&w.state.key||"default")}function u(g,w){let E=g.document.querySelector("base"),P="";if(E&&E.getAttribute("href")){let M=g.location.href,R=M.indexOf("#");P=R===-1?M:M.slice(0,R)}return P+"#"+(typeof w=="string"?w:bi(w))}function m(g,w){Xt(g.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(w)})`)}return Np(i,u,m,s)}function rt(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function Xt(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function kp(){return Math.random().toString(36).substring(2,10)}function jc(s,i){return{usr:s.state,key:s.key,idx:i}}function Ho(s,i,u=null,m){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof i=="string"?mr(i):i,state:u,key:i&&i.key||m||kp()}}function bi({pathname:s="/",search:i="",hash:u=""}){return i&&i!=="?"&&(s+=i.charAt(0)==="?"?i:"?"+i),u&&u!=="#"&&(s+=u.charAt(0)==="#"?u:"#"+u),s}function mr(s){let i={};if(s){let u=s.indexOf("#");u>=0&&(i.hash=s.substring(u),s=s.substring(0,u));let m=s.indexOf("?");m>=0&&(i.search=s.substring(m),s=s.substring(0,m)),s&&(i.pathname=s)}return i}function Np(s,i,u,m={}){let{window:g=document.defaultView,v5Compat:w=!1}=m,E=g.history,P="POP",M=null,R=G();R==null&&(R=0,E.replaceState({...E.state,idx:R},""));function G(){return(E.state||{idx:null}).idx}function W(){P="POP";let ne=G(),Q=ne==null?null:ne-R;R=ne,M&&M({action:P,location:X.location,delta:Q})}function N(ne,Q){P="PUSH";let Y=Ho(X.location,ne,Q);u(Y,ne),R=G()+1;let le=jc(Y,R),ve=X.createHref(Y);try{E.pushState(le,"",ve)}catch(Pe){if(Pe instanceof DOMException&&Pe.name==="DataCloneError")throw Pe;g.location.assign(ve)}w&&M&&M({action:P,location:X.location,delta:1})}function J(ne,Q){P="REPLACE";let Y=Ho(X.location,ne,Q);u(Y,ne),R=G();let le=jc(Y,R),ve=X.createHref(Y);E.replaceState(le,"",ve),w&&M&&M({action:P,location:X.location,delta:0})}function B(ne){let Q=g.location.origin!=="null"?g.location.origin:g.location.href,Y=typeof ne=="string"?ne:bi(ne);return Y=Y.replace(/ $/,"%20"),rt(Q,`No window.location.(origin|href) available to create URL for href: ${Y}`),new URL(Y,Q)}let X={get action(){return P},get location(){return s(g,E)},listen(ne){if(M)throw new Error("A history only accepts one active listener");return g.addEventListener(qc,W),M=ne,()=>{g.removeEventListener(qc,W),M=null}},createHref(ne){return i(g,ne)},createURL:B,encodeLocation(ne){let Q=B(ne);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:N,replace:J,go(ne){return E.go(ne)}};return X}function _d(s,i,u="/"){return Op(s,i,u,!1)}function Op(s,i,u,m){let g=typeof i=="string"?mr(i):i,w=nr(g.pathname||"/",u);if(w==null)return null;let E=vd(s);Fp(E);let P=null;for(let M=0;P==null&&M<E.length;++M){let R=Xp(w);P=Qp(E[M],R,m)}return P}function vd(s,i=[],u=[],m=""){let g=(w,E,P)=>{let M={relativePath:P===void 0?w.path||"":P,caseSensitive:w.caseSensitive===!0,childrenIndex:E,route:w};M.relativePath.startsWith("/")&&(rt(M.relativePath.startsWith(m),`Absolute route path "${M.relativePath}" nested under path "${m}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),M.relativePath=M.relativePath.slice(m.length));let R=zn([m,M.relativePath]),G=u.concat(M);w.children&&w.children.length>0&&(rt(w.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${R}".`),vd(w.children,i,G,R)),!(w.path==null&&!w.index)&&i.push({path:R,score:qp(R,w.index),routesMeta:G})};return s.forEach((w,E)=>{var P;if(w.path===""||!((P=w.path)!=null&&P.includes("?")))g(w,E);else for(let M of yd(w.path))g(w,E,M)}),i}function yd(s){let i=s.split("/");if(i.length===0)return[];let[u,...m]=i,g=u.endsWith("?"),w=u.replace(/\?$/,"");if(m.length===0)return g?[w,""]:[w];let E=yd(m.join("/")),P=[];return P.push(...E.map(M=>M===""?w:[w,M].join("/"))),g&&P.push(...E),P.map(M=>s.startsWith("/")&&M===""?"/":M)}function Fp(s){s.sort((i,u)=>i.score!==u.score?u.score-i.score:jp(i.routesMeta.map(m=>m.childrenIndex),u.routesMeta.map(m=>m.childrenIndex)))}var Gp=/^:[\w-]+$/,Bp=3,Wp=2,Vp=1,Hp=10,$p=-2,Qc=s=>s==="*";function qp(s,i){let u=s.split("/"),m=u.length;return u.some(Qc)&&(m+=$p),i&&(m+=Wp),u.filter(g=>!Qc(g)).reduce((g,w)=>g+(Gp.test(w)?Bp:w===""?Vp:Hp),m)}function jp(s,i){return s.length===i.length&&s.slice(0,-1).every((m,g)=>m===i[g])?s[s.length-1]-i[i.length-1]:0}function Qp(s,i,u=!1){let{routesMeta:m}=s,g={},w="/",E=[];for(let P=0;P<m.length;++P){let M=m[P],R=P===m.length-1,G=w==="/"?i:i.slice(w.length)||"/",W=qs({path:M.relativePath,caseSensitive:M.caseSensitive,end:R},G),N=M.route;if(!W&&R&&u&&!m[m.length-1].route.index&&(W=qs({path:M.relativePath,caseSensitive:M.caseSensitive,end:!1},G)),!W)return null;Object.assign(g,W.params),E.push({params:g,pathname:zn([w,W.pathname]),pathnameBase:eh(zn([w,W.pathnameBase])),route:N}),W.pathnameBase!=="/"&&(w=zn([w,W.pathnameBase]))}return E}function qs(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[u,m]=Yp(s.path,s.caseSensitive,s.end),g=i.match(u);if(!g)return null;let w=g[0],E=w.replace(/(.)\/+$/,"$1"),P=g.slice(1);return{params:m.reduce((R,{paramName:G,isOptional:W},N)=>{if(G==="*"){let B=P[N]||"";E=w.slice(0,w.length-B.length).replace(/(.)\/+$/,"$1")}const J=P[N];return W&&!J?R[G]=void 0:R[G]=(J||"").replace(/%2F/g,"/"),R},{}),pathname:w,pathnameBase:E,pattern:s}}function Yp(s,i=!1,u=!0){Xt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let m=[],g="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(E,P,M)=>(m.push({paramName:P,isOptional:M!=null}),M?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(m.push({paramName:"*"}),g+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?g+="\\/*$":s!==""&&s!=="/"&&(g+="(?:(?=\\/|$))"),[new RegExp(g,i?void 0:"i"),m]}function Xp(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Xt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),s}}function nr(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let u=i.endsWith("/")?i.length-1:i.length,m=s.charAt(u);return m&&m!=="/"?null:s.slice(u)||"/"}function Kp(s,i="/"){let{pathname:u,search:m="",hash:g=""}=typeof s=="string"?mr(s):s;return{pathname:u?u.startsWith("/")?u:Zp(u,i):i,search:th(m),hash:nh(g)}}function Zp(s,i){let u=i.replace(/\/+$/,"").split("/");return s.split("/").forEach(g=>{g===".."?u.length>1&&u.pop():g!=="."&&u.push(g)}),u.length>1?u.join("/"):"/"}function Oo(s,i,u,m){return`Cannot include a '${s}' character in a manually specified \`to.${i}\` field [${JSON.stringify(m)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jp(s){return s.filter((i,u)=>u===0||i.route.path&&i.route.path.length>0)}function Yo(s){let i=Jp(s);return i.map((u,m)=>m===i.length-1?u.pathname:u.pathnameBase)}function Xo(s,i,u,m=!1){let g;typeof s=="string"?g=mr(s):(g={...s},rt(!g.pathname||!g.pathname.includes("?"),Oo("?","pathname","search",g)),rt(!g.pathname||!g.pathname.includes("#"),Oo("#","pathname","hash",g)),rt(!g.search||!g.search.includes("#"),Oo("#","search","hash",g)));let w=s===""||g.pathname==="",E=w?"/":g.pathname,P;if(E==null)P=u;else{let W=i.length-1;if(!m&&E.startsWith("..")){let N=E.split("/");for(;N[0]==="..";)N.shift(),W-=1;g.pathname=N.join("/")}P=W>=0?i[W]:"/"}let M=Kp(g,P),R=E&&E!=="/"&&E.endsWith("/"),G=(w||E===".")&&u.endsWith("/");return!M.pathname.endsWith("/")&&(R||G)&&(M.pathname+="/"),M}var zn=s=>s.join("/").replace(/\/\/+/g,"/"),eh=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),th=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,nh=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function rh(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var wd=["POST","PUT","PATCH","DELETE"];new Set(wd);var ih=["GET",...wd];new Set(ih);var Wr=Z.createContext(null);Wr.displayName="DataRouter";var Qs=Z.createContext(null);Qs.displayName="DataRouterState";var xd=Z.createContext({isTransitioning:!1});xd.displayName="ViewTransition";var sh=Z.createContext(new Map);sh.displayName="Fetchers";var ah=Z.createContext(null);ah.displayName="Await";var fn=Z.createContext(null);fn.displayName="Navigation";var Ai=Z.createContext(null);Ai.displayName="Location";var Tn=Z.createContext({outlet:null,matches:[],isDataRoute:!1});Tn.displayName="Route";var Ko=Z.createContext(null);Ko.displayName="RouteError";function oh(s,{relative:i}={}){rt(Vr(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:m}=Z.useContext(fn),{hash:g,pathname:w,search:E}=Ri(s,{relative:i}),P=w;return u!=="/"&&(P=w==="/"?u:zn([u,w])),m.createHref({pathname:P,search:E,hash:g})}function Vr(){return Z.useContext(Ai)!=null}function Sn(){return rt(Vr(),"useLocation() may be used only in the context of a <Router> component."),Z.useContext(Ai).location}var Td="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sd(s){Z.useContext(fn).static||Z.useLayoutEffect(s)}function Zo(){let{isDataRoute:s}=Z.useContext(Tn);return s?wh():lh()}function lh(){rt(Vr(),"useNavigate() may be used only in the context of a <Router> component.");let s=Z.useContext(Wr),{basename:i,navigator:u}=Z.useContext(fn),{matches:m}=Z.useContext(Tn),{pathname:g}=Sn(),w=JSON.stringify(Yo(m)),E=Z.useRef(!1);return Sd(()=>{E.current=!0}),Z.useCallback((M,R={})=>{if(Xt(E.current,Td),!E.current)return;if(typeof M=="number"){u.go(M);return}let G=Xo(M,JSON.parse(w),g,R.relative==="path");s==null&&i!=="/"&&(G.pathname=G.pathname==="/"?i:zn([i,G.pathname])),(R.replace?u.replace:u.push)(G,R.state,R)},[i,u,w,g,s])}Z.createContext(null);function Ri(s,{relative:i}={}){let{matches:u}=Z.useContext(Tn),{pathname:m}=Sn(),g=JSON.stringify(Yo(u));return Z.useMemo(()=>Xo(s,JSON.parse(g),m,i==="path"),[s,g,m,i])}function uh(s,i){return Ed(s,i)}function Ed(s,i,u,m){var Q;rt(Vr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:g}=Z.useContext(fn),{matches:w}=Z.useContext(Tn),E=w[w.length-1],P=E?E.params:{},M=E?E.pathname:"/",R=E?E.pathnameBase:"/",G=E&&E.route;{let Y=G&&G.path||"";Md(M,!G||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${M}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let W=Sn(),N;if(i){let Y=typeof i=="string"?mr(i):i;rt(R==="/"||((Q=Y.pathname)==null?void 0:Q.startsWith(R)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${R}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),N=Y}else N=W;let J=N.pathname||"/",B=J;if(R!=="/"){let Y=R.replace(/^\//,"").split("/");B="/"+J.replace(/^\//,"").split("/").slice(Y.length).join("/")}let X=_d(s,{pathname:B});Xt(G||X!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Xt(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let ne=hh(X&&X.map(Y=>Object.assign({},Y,{params:Object.assign({},P,Y.params),pathname:zn([R,g.encodeLocation?g.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?R:zn([R,g.encodeLocation?g.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),w,u,m);return i&&ne?Z.createElement(Ai.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},ne):ne}function ch(){let s=yh(),i=rh(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),u=s instanceof Error?s.stack:null,m="rgba(200,200,200, 0.5)",g={padding:"0.5rem",backgroundColor:m},w={padding:"2px 4px",backgroundColor:m},E=null;return console.error("Error handled by React Router default ErrorBoundary:",s),E=Z.createElement(Z.Fragment,null,Z.createElement("p",null,"💿 Hey developer 👋"),Z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Z.createElement("code",{style:w},"ErrorBoundary")," or"," ",Z.createElement("code",{style:w},"errorElement")," prop on your route.")),Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},i),u?Z.createElement("pre",{style:g},u):null,E)}var dh=Z.createElement(ch,null),fh=class extends Z.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,i){return i.location!==s.location||i.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:i.error,location:i.location,revalidation:s.revalidation||i.revalidation}}componentDidCatch(s,i){console.error("React Router caught the following error during render",s,i)}render(){return this.state.error!==void 0?Z.createElement(Tn.Provider,{value:this.props.routeContext},Z.createElement(Ko.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ph({routeContext:s,match:i,children:u}){let m=Z.useContext(Wr);return m&&m.static&&m.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=i.route.id),Z.createElement(Tn.Provider,{value:s},u)}function hh(s,i=[],u=null,m=null){if(s==null){if(!u)return null;if(u.errors)s=u.matches;else if(i.length===0&&!u.initialized&&u.matches.length>0)s=u.matches;else return null}let g=s,w=u==null?void 0:u.errors;if(w!=null){let M=g.findIndex(R=>R.route.id&&(w==null?void 0:w[R.route.id])!==void 0);rt(M>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(w).join(",")}`),g=g.slice(0,Math.min(g.length,M+1))}let E=!1,P=-1;if(u)for(let M=0;M<g.length;M++){let R=g[M];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(P=M),R.route.id){let{loaderData:G,errors:W}=u,N=R.route.loader&&!G.hasOwnProperty(R.route.id)&&(!W||W[R.route.id]===void 0);if(R.route.lazy||N){E=!0,P>=0?g=g.slice(0,P+1):g=[g[0]];break}}}return g.reduceRight((M,R,G)=>{let W,N=!1,J=null,B=null;u&&(W=w&&R.route.id?w[R.route.id]:void 0,J=R.route.errorElement||dh,E&&(P<0&&G===0?(Md("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,B=null):P===G&&(N=!0,B=R.route.hydrateFallbackElement||null)));let X=i.concat(g.slice(0,G+1)),ne=()=>{let Q;return W?Q=J:N?Q=B:R.route.Component?Q=Z.createElement(R.route.Component,null):R.route.element?Q=R.route.element:Q=M,Z.createElement(ph,{match:R,routeContext:{outlet:M,matches:X,isDataRoute:u!=null},children:Q})};return u&&(R.route.ErrorBoundary||R.route.errorElement||G===0)?Z.createElement(fh,{location:u.location,revalidation:u.revalidation,component:J,error:W,children:ne(),routeContext:{outlet:null,matches:X,isDataRoute:!0}}):ne()},null)}function Jo(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mh(s){let i=Z.useContext(Wr);return rt(i,Jo(s)),i}function gh(s){let i=Z.useContext(Qs);return rt(i,Jo(s)),i}function _h(s){let i=Z.useContext(Tn);return rt(i,Jo(s)),i}function el(s){let i=_h(s),u=i.matches[i.matches.length-1];return rt(u.route.id,`${s} can only be used on routes that contain a unique "id"`),u.route.id}function vh(){return el("useRouteId")}function yh(){var m;let s=Z.useContext(Ko),i=gh("useRouteError"),u=el("useRouteError");return s!==void 0?s:(m=i.errors)==null?void 0:m[u]}function wh(){let{router:s}=mh("useNavigate"),i=el("useNavigate"),u=Z.useRef(!1);return Sd(()=>{u.current=!0}),Z.useCallback(async(g,w={})=>{Xt(u.current,Td),u.current&&(typeof g=="number"?s.navigate(g):await s.navigate(g,{fromRouteId:i,...w}))},[s,i])}var Yc={};function Md(s,i,u){!i&&!Yc[s]&&(Yc[s]=!0,Xt(!1,u))}Z.memo(xh);function xh({routes:s,future:i,state:u}){return Ed(s,void 0,u,i)}function Th({to:s,replace:i,state:u,relative:m}){rt(Vr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:g}=Z.useContext(fn);Xt(!g,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:w}=Z.useContext(Tn),{pathname:E}=Sn(),P=Zo(),M=Xo(s,Yo(w),E,m==="path"),R=JSON.stringify(M);return Z.useEffect(()=>{P(JSON.parse(R),{replace:i,state:u,relative:m})},[P,R,m,i,u]),null}function Ws(s){rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Sh({basename:s="/",children:i=null,location:u,navigationType:m="POP",navigator:g,static:w=!1}){rt(!Vr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=s.replace(/^\/*/,"/"),P=Z.useMemo(()=>({basename:E,navigator:g,static:w,future:{}}),[E,g,w]);typeof u=="string"&&(u=mr(u));let{pathname:M="/",search:R="",hash:G="",state:W=null,key:N="default"}=u,J=Z.useMemo(()=>{let B=nr(M,E);return B==null?null:{location:{pathname:B,search:R,hash:G,state:W,key:N},navigationType:m}},[E,M,R,G,W,N,m]);return Xt(J!=null,`<Router basename="${E}"> is not able to match the URL "${M}${R}${G}" because it does not start with the basename, so the <Router> won't render anything.`),J==null?null:Z.createElement(fn.Provider,{value:P},Z.createElement(Ai.Provider,{children:i,value:J}))}function Eh({children:s,location:i}){return uh($o(s),i)}function $o(s,i=[]){let u=[];return Z.Children.forEach(s,(m,g)=>{if(!Z.isValidElement(m))return;let w=[...i,g];if(m.type===Z.Fragment){u.push.apply(u,$o(m.props.children,w));return}rt(m.type===Ws,`[${typeof m.type=="string"?m.type:m.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),rt(!m.props.index||!m.props.children,"An index route cannot have child routes.");let E={id:m.props.id||w.join("-"),caseSensitive:m.props.caseSensitive,element:m.props.element,Component:m.props.Component,index:m.props.index,path:m.props.path,loader:m.props.loader,action:m.props.action,hydrateFallbackElement:m.props.hydrateFallbackElement,HydrateFallback:m.props.HydrateFallback,errorElement:m.props.errorElement,ErrorBoundary:m.props.ErrorBoundary,hasErrorBoundary:m.props.hasErrorBoundary===!0||m.props.ErrorBoundary!=null||m.props.errorElement!=null,shouldRevalidate:m.props.shouldRevalidate,handle:m.props.handle,lazy:m.props.lazy};m.props.children&&(E.children=$o(m.props.children,w)),u.push(E)}),u}var Vs="get",Hs="application/x-www-form-urlencoded";function Ys(s){return s!=null&&typeof s.tagName=="string"}function Mh(s){return Ys(s)&&s.tagName.toLowerCase()==="button"}function bh(s){return Ys(s)&&s.tagName.toLowerCase()==="form"}function Ph(s){return Ys(s)&&s.tagName.toLowerCase()==="input"}function Ah(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Rh(s,i){return s.button===0&&(!i||i==="_self")&&!Ah(s)}function qo(s=""){return new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((i,u)=>{let m=s[u];return i.concat(Array.isArray(m)?m.map(g=>[u,g]):[[u,m]])},[]))}function Lh(s,i){let u=qo(s);return i&&i.forEach((m,g)=>{u.has(g)||i.getAll(g).forEach(w=>{u.append(g,w)})}),u}var Fs=null;function Uh(){if(Fs===null)try{new FormData(document.createElement("form"),0),Fs=!1}catch{Fs=!0}return Fs}var Ch=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fo(s){return s!=null&&!Ch.has(s)?(Xt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hs}"`),null):s}function Dh(s,i){let u,m,g,w,E;if(bh(s)){let P=s.getAttribute("action");m=P?nr(P,i):null,u=s.getAttribute("method")||Vs,g=Fo(s.getAttribute("enctype"))||Hs,w=new FormData(s)}else if(Mh(s)||Ph(s)&&(s.type==="submit"||s.type==="image")){let P=s.form;if(P==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let M=s.getAttribute("formaction")||P.getAttribute("action");if(m=M?nr(M,i):null,u=s.getAttribute("formmethod")||P.getAttribute("method")||Vs,g=Fo(s.getAttribute("formenctype"))||Fo(P.getAttribute("enctype"))||Hs,w=new FormData(P,s),!Uh()){let{name:R,type:G,value:W}=s;if(G==="image"){let N=R?`${R}.`:"";w.append(`${N}x`,"0"),w.append(`${N}y`,"0")}else R&&w.append(R,W)}}else{if(Ys(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Vs,m=null,g=Hs,E=s}return w&&g==="text/plain"&&(E=w,w=void 0),{action:m,method:u.toLowerCase(),encType:g,formData:w,body:E}}function tl(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}async function zh(s,i){if(s.id in i)return i[s.id];try{let u=await import(s.module);return i[s.id]=u,u}catch(u){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ih(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function kh(s,i,u){let m=await Promise.all(s.map(async g=>{let w=i.routes[g.route.id];if(w){let E=await zh(w,u);return E.links?E.links():[]}return[]}));return Gh(m.flat(1).filter(Ih).filter(g=>g.rel==="stylesheet"||g.rel==="preload").map(g=>g.rel==="stylesheet"?{...g,rel:"prefetch",as:"style"}:{...g,rel:"prefetch"}))}function Xc(s,i,u,m,g,w){let E=(M,R)=>u[R]?M.route.id!==u[R].route.id:!0,P=(M,R)=>{var G;return u[R].pathname!==M.pathname||((G=u[R].route.path)==null?void 0:G.endsWith("*"))&&u[R].params["*"]!==M.params["*"]};return w==="assets"?i.filter((M,R)=>E(M,R)||P(M,R)):w==="data"?i.filter((M,R)=>{var W;let G=m.routes[M.route.id];if(!G||!G.hasLoader)return!1;if(E(M,R)||P(M,R))return!0;if(M.route.shouldRevalidate){let N=M.route.shouldRevalidate({currentUrl:new URL(g.pathname+g.search+g.hash,window.origin),currentParams:((W=u[0])==null?void 0:W.params)||{},nextUrl:new URL(s,window.origin),nextParams:M.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function Nh(s,i){return Oh(s.map(u=>{let m=i.routes[u.route.id];if(!m)return[];let g=[m.module];return m.imports&&(g=g.concat(m.imports)),g}).flat(1))}function Oh(s){return[...new Set(s)]}function Fh(s){let i={},u=Object.keys(s).sort();for(let m of u)i[m]=s[m];return i}function Gh(s,i){let u=new Set;return new Set(i),s.reduce((m,g)=>{let w=JSON.stringify(Fh(g));return u.has(w)||(u.add(w),m.push({key:w,link:g})),m},[])}function Bh(s){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Wh(){let s=Z.useContext(Wr);return tl(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Vh(){let s=Z.useContext(Qs);return tl(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var nl=Z.createContext(void 0);nl.displayName="FrameworkContext";function bd(){let s=Z.useContext(nl);return tl(s,"You must render this element inside a <HydratedRouter> element"),s}function Hh(s,i){let u=Z.useContext(nl),[m,g]=Z.useState(!1),[w,E]=Z.useState(!1),{onFocus:P,onBlur:M,onMouseEnter:R,onMouseLeave:G,onTouchStart:W}=i,N=Z.useRef(null);Z.useEffect(()=>{if(s==="render"&&E(!0),s==="viewport"){let X=Q=>{Q.forEach(Y=>{E(Y.isIntersecting)})},ne=new IntersectionObserver(X,{threshold:.5});return N.current&&ne.observe(N.current),()=>{ne.disconnect()}}},[s]),Z.useEffect(()=>{if(m){let X=setTimeout(()=>{E(!0)},100);return()=>{clearTimeout(X)}}},[m]);let J=()=>{g(!0)},B=()=>{g(!1),E(!1)};return u?s!=="intent"?[w,N,{}]:[w,N,{onFocus:Mi(P,J),onBlur:Mi(M,B),onMouseEnter:Mi(R,J),onMouseLeave:Mi(G,B),onTouchStart:Mi(W,J)}]:[!1,N,{}]}function Mi(s,i){return u=>{s&&s(u),u.defaultPrevented||i(u)}}function $h({page:s,...i}){let{router:u}=Wh(),m=Z.useMemo(()=>_d(u.routes,s,u.basename),[u.routes,s,u.basename]);return m?Z.createElement(jh,{page:s,matches:m,...i}):null}function qh(s){let{manifest:i,routeModules:u}=bd(),[m,g]=Z.useState([]);return Z.useEffect(()=>{let w=!1;return kh(s,i,u).then(E=>{w||g(E)}),()=>{w=!0}},[s,i,u]),m}function jh({page:s,matches:i,...u}){let m=Sn(),{manifest:g,routeModules:w}=bd(),{loaderData:E,matches:P}=Vh(),M=Z.useMemo(()=>Xc(s,i,P,g,m,"data"),[s,i,P,g,m]),R=Z.useMemo(()=>Xc(s,i,P,g,m,"assets"),[s,i,P,g,m]),G=Z.useMemo(()=>{if(s===m.pathname+m.search+m.hash)return[];let J=new Set,B=!1;if(i.forEach(ne=>{var Y;let Q=g.routes[ne.route.id];!Q||!Q.hasLoader||(!M.some(le=>le.route.id===ne.route.id)&&ne.route.id in E&&((Y=w[ne.route.id])!=null&&Y.shouldRevalidate)||Q.hasClientLoader?B=!0:J.add(ne.route.id))}),J.size===0)return[];let X=Bh(s);return B&&J.size>0&&X.searchParams.set("_routes",i.filter(ne=>J.has(ne.route.id)).map(ne=>ne.route.id).join(",")),[X.pathname+X.search]},[E,m,g,M,i,s,w]),W=Z.useMemo(()=>Nh(R,g),[R,g]),N=qh(R);return Z.createElement(Z.Fragment,null,G.map(J=>Z.createElement("link",{key:J,rel:"prefetch",as:"fetch",href:J,...u})),W.map(J=>Z.createElement("link",{key:J,rel:"modulepreload",href:J,...u})),N.map(({key:J,link:B})=>Z.createElement("link",{key:J,...B})))}function Qh(...s){return i=>{s.forEach(u=>{typeof u=="function"?u(i):u!=null&&(u.current=i)})}}var Pd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Pd&&(window.__reactRouterVersion="7.1.3")}catch{}function Yh({basename:s,children:i,window:u}){let m=Z.useRef();m.current==null&&(m.current=Ip({window:u,v5Compat:!0}));let g=m.current,[w,E]=Z.useState({action:g.action,location:g.location}),P=Z.useCallback(M=>{Z.startTransition(()=>E(M))},[E]);return Z.useLayoutEffect(()=>g.listen(P),[g,P]),Z.createElement(Sh,{basename:s,children:i,location:w.location,navigationType:w.action,navigator:g})}var Ad=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tr=Z.forwardRef(function({onClick:i,discover:u="render",prefetch:m="none",relative:g,reloadDocument:w,replace:E,state:P,target:M,to:R,preventScrollReset:G,viewTransition:W,...N},J){let{basename:B}=Z.useContext(fn),X=typeof R=="string"&&Ad.test(R),ne,Q=!1;if(typeof R=="string"&&X&&(ne=R,Pd))try{let Le=new URL(window.location.href),ke=R.startsWith("//")?new URL(Le.protocol+R):new URL(R),Ye=nr(ke.pathname,B);ke.origin===Le.origin&&Ye!=null?R=Ye+ke.search+ke.hash:Q=!0}catch{Xt(!1,`<Link to="${R}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=oh(R,{relative:g}),[le,ve,Pe]=Hh(m,N),De=Jh(R,{replace:E,state:P,target:M,preventScrollReset:G,relative:g,viewTransition:W});function Ie(Le){i&&i(Le),Le.defaultPrevented||De(Le)}let Ne=Z.createElement("a",{...N,...Pe,href:ne||Y,onClick:Q||w?i:Ie,ref:Qh(J,ve),target:M,"data-discover":!X&&u==="render"?"true":void 0});return le&&!X?Z.createElement(Z.Fragment,null,Ne,Z.createElement($h,{page:Y})):Ne});tr.displayName="Link";var Xh=Z.forwardRef(function({"aria-current":i="page",caseSensitive:u=!1,className:m="",end:g=!1,style:w,to:E,viewTransition:P,children:M,...R},G){let W=Ri(E,{relative:R.relative}),N=Sn(),J=Z.useContext(Qs),{navigator:B,basename:X}=Z.useContext(fn),ne=J!=null&&im(W)&&P===!0,Q=B.encodeLocation?B.encodeLocation(W).pathname:W.pathname,Y=N.pathname,le=J&&J.navigation&&J.navigation.location?J.navigation.location.pathname:null;u||(Y=Y.toLowerCase(),le=le?le.toLowerCase():null,Q=Q.toLowerCase()),le&&X&&(le=nr(le,X)||le);const ve=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let Pe=Y===Q||!g&&Y.startsWith(Q)&&Y.charAt(ve)==="/",De=le!=null&&(le===Q||!g&&le.startsWith(Q)&&le.charAt(Q.length)==="/"),Ie={isActive:Pe,isPending:De,isTransitioning:ne},Ne=Pe?i:void 0,Le;typeof m=="function"?Le=m(Ie):Le=[m,Pe?"active":null,De?"pending":null,ne?"transitioning":null].filter(Boolean).join(" ");let ke=typeof w=="function"?w(Ie):w;return Z.createElement(tr,{...R,"aria-current":Ne,className:Le,ref:G,style:ke,to:E,viewTransition:P},typeof M=="function"?M(Ie):M)});Xh.displayName="NavLink";var Kh=Z.forwardRef(({discover:s="render",fetcherKey:i,navigate:u,reloadDocument:m,replace:g,state:w,method:E=Vs,action:P,onSubmit:M,relative:R,preventScrollReset:G,viewTransition:W,...N},J)=>{let B=nm(),X=rm(P,{relative:R}),ne=E.toLowerCase()==="get"?"get":"post",Q=typeof P=="string"&&Ad.test(P),Y=le=>{if(M&&M(le),le.defaultPrevented)return;le.preventDefault();let ve=le.nativeEvent.submitter,Pe=(ve==null?void 0:ve.getAttribute("formmethod"))||E;B(ve||le.currentTarget,{fetcherKey:i,method:Pe,navigate:u,replace:g,state:w,relative:R,preventScrollReset:G,viewTransition:W})};return Z.createElement("form",{ref:J,method:ne,action:X,onSubmit:m?M:Y,...N,"data-discover":!Q&&s==="render"?"true":void 0})});Kh.displayName="Form";function Zh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rd(s){let i=Z.useContext(Wr);return rt(i,Zh(s)),i}function Jh(s,{target:i,replace:u,state:m,preventScrollReset:g,relative:w,viewTransition:E}={}){let P=Zo(),M=Sn(),R=Ri(s,{relative:w});return Z.useCallback(G=>{if(Rh(G,i)){G.preventDefault();let W=u!==void 0?u:bi(M)===bi(R);P(s,{replace:W,state:m,preventScrollReset:g,relative:w,viewTransition:E})}},[M,P,R,u,m,i,s,g,w,E])}function Ld(s){Xt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let i=Z.useRef(qo(s)),u=Z.useRef(!1),m=Sn(),g=Z.useMemo(()=>Lh(m.search,u.current?null:i.current),[m.search]),w=Zo(),E=Z.useCallback((P,M)=>{const R=qo(typeof P=="function"?P(g):P);u.current=!0,w("?"+R,M)},[w,g]);return[g,E]}var em=0,tm=()=>`__${String(++em)}__`;function nm(){let{router:s}=Rd("useSubmit"),{basename:i}=Z.useContext(fn),u=vh();return Z.useCallback(async(m,g={})=>{let{action:w,method:E,encType:P,formData:M,body:R}=Dh(m,i);if(g.navigate===!1){let G=g.fetcherKey||tm();await s.fetch(G,u,g.action||w,{preventScrollReset:g.preventScrollReset,formData:M,body:R,formMethod:g.method||E,formEncType:g.encType||P,flushSync:g.flushSync})}else await s.navigate(g.action||w,{preventScrollReset:g.preventScrollReset,formData:M,body:R,formMethod:g.method||E,formEncType:g.encType||P,replace:g.replace,state:g.state,fromRouteId:u,flushSync:g.flushSync,viewTransition:g.viewTransition})},[s,i,u])}function rm(s,{relative:i}={}){let{basename:u}=Z.useContext(fn),m=Z.useContext(Tn);rt(m,"useFormAction must be used inside a RouteContext");let[g]=m.matches.slice(-1),w={...Ri(s||".",{relative:i})},E=Sn();if(s==null){w.search=E.search;let P=new URLSearchParams(w.search),M=P.getAll("index");if(M.some(G=>G==="")){P.delete("index"),M.filter(W=>W).forEach(W=>P.append("index",W));let G=P.toString();w.search=G?`?${G}`:""}}return(!s||s===".")&&g.route.index&&(w.search=w.search?w.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(w.pathname=w.pathname==="/"?u:zn([u,w.pathname])),bi(w)}function im(s,i={}){let u=Z.useContext(xd);rt(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:m}=Rd("useViewTransitionState"),g=Ri(s,{relative:i.relative});if(!u.isTransitioning)return!1;let w=nr(u.currentLocation.pathname,m)||u.currentLocation.pathname,E=nr(u.nextLocation.pathname,m)||u.nextLocation.pathname;return qs(g.pathname,E)!=null||qs(g.pathname,w)!=null}new TextEncoder;const sm=`struct VertexOut {
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
}`;function am(s,i){return class extends s{constructor(...u){super(...u),i(this)}}}const om=am(Array,s=>s.fill(0));let Be=1e-6;function lm(s){function i(o=0,v=0){const c=new s(2);return o!==void 0&&(c[0]=o,v!==void 0&&(c[1]=v)),c}const u=i;function m(o,v,c){const p=c??new s(2);return p[0]=o,p[1]=v,p}function g(o,v){const c=v??new s(2);return c[0]=Math.ceil(o[0]),c[1]=Math.ceil(o[1]),c}function w(o,v){const c=v??new s(2);return c[0]=Math.floor(o[0]),c[1]=Math.floor(o[1]),c}function E(o,v){const c=v??new s(2);return c[0]=Math.round(o[0]),c[1]=Math.round(o[1]),c}function P(o,v=0,c=1,p){const x=p??new s(2);return x[0]=Math.min(c,Math.max(v,o[0])),x[1]=Math.min(c,Math.max(v,o[1])),x}function M(o,v,c){const p=c??new s(2);return p[0]=o[0]+v[0],p[1]=o[1]+v[1],p}function R(o,v,c,p){const x=p??new s(2);return x[0]=o[0]+v[0]*c,x[1]=o[1]+v[1]*c,x}function G(o,v){const c=o[0],p=o[1],x=v[0],D=v[1],H=Math.sqrt(c*c+p*p),y=Math.sqrt(x*x+D*D),T=H*y,C=T&&Le(o,v)/T;return Math.acos(C)}function W(o,v,c){const p=c??new s(2);return p[0]=o[0]-v[0],p[1]=o[1]-v[1],p}const N=W;function J(o,v){return Math.abs(o[0]-v[0])<Be&&Math.abs(o[1]-v[1])<Be}function B(o,v){return o[0]===v[0]&&o[1]===v[1]}function X(o,v,c,p){const x=p??new s(2);return x[0]=o[0]+c*(v[0]-o[0]),x[1]=o[1]+c*(v[1]-o[1]),x}function ne(o,v,c,p){const x=p??new s(2);return x[0]=o[0]+c[0]*(v[0]-o[0]),x[1]=o[1]+c[1]*(v[1]-o[1]),x}function Q(o,v,c){const p=c??new s(2);return p[0]=Math.max(o[0],v[0]),p[1]=Math.max(o[1],v[1]),p}function Y(o,v,c){const p=c??new s(2);return p[0]=Math.min(o[0],v[0]),p[1]=Math.min(o[1],v[1]),p}function le(o,v,c){const p=c??new s(2);return p[0]=o[0]*v,p[1]=o[1]*v,p}const ve=le;function Pe(o,v,c){const p=c??new s(2);return p[0]=o[0]/v,p[1]=o[1]/v,p}function De(o,v){const c=v??new s(2);return c[0]=1/o[0],c[1]=1/o[1],c}const Ie=De;function Ne(o,v,c){const p=c??new s(3),x=o[0]*v[1]-o[1]*v[0];return p[0]=0,p[1]=0,p[2]=x,p}function Le(o,v){return o[0]*v[0]+o[1]*v[1]}function ke(o){const v=o[0],c=o[1];return Math.sqrt(v*v+c*c)}const Ye=ke;function Ee(o){const v=o[0],c=o[1];return v*v+c*c}const Ue=Ee;function Se(o,v){const c=o[0]-v[0],p=o[1]-v[1];return Math.sqrt(c*c+p*p)}const Ze=Se;function $e(o,v){const c=o[0]-v[0],p=o[1]-v[1];return c*c+p*p}const Ge=$e;function re(o,v){const c=v??new s(2),p=o[0],x=o[1],D=Math.sqrt(p*p+x*x);return D>1e-5?(c[0]=p/D,c[1]=x/D):(c[0]=0,c[1]=0),c}function ce(o,v){const c=v??new s(2);return c[0]=-o[0],c[1]=-o[1],c}function se(o,v){const c=v??new s(2);return c[0]=o[0],c[1]=o[1],c}const k=se;function te(o,v,c){const p=c??new s(2);return p[0]=o[0]*v[0],p[1]=o[1]*v[1],p}const xe=te;function Te(o,v,c){const p=c??new s(2);return p[0]=o[0]/v[0],p[1]=o[1]/v[1],p}const Re=Te;function ze(o=1,v){const c=v??new s(2),p=Math.random()*2*Math.PI;return c[0]=Math.cos(p)*o,c[1]=Math.sin(p)*o,c}function f(o){const v=o??new s(2);return v[0]=0,v[1]=0,v}function b(o,v,c){const p=c??new s(2),x=o[0],D=o[1];return p[0]=x*v[0]+D*v[4]+v[12],p[1]=x*v[1]+D*v[5]+v[13],p}function d(o,v,c){const p=c??new s(2),x=o[0],D=o[1];return p[0]=v[0]*x+v[4]*D+v[8],p[1]=v[1]*x+v[5]*D+v[9],p}function h(o,v,c,p){const x=p??new s(2),D=o[0]-v[0],H=o[1]-v[1],y=Math.sin(c),T=Math.cos(c);return x[0]=D*T-H*y+v[0],x[1]=D*y+H*T+v[1],x}function S(o,v,c){const p=c??new s(2);return re(o,p),le(p,v,p)}function L(o,v,c){const p=c??new s(2);return ke(o)>v?S(o,v,p):se(o,p)}function V(o,v,c){const p=c??new s(2);return X(o,v,.5,p)}return{create:i,fromValues:u,set:m,ceil:g,floor:w,round:E,clamp:P,add:M,addScaled:R,angle:G,subtract:W,sub:N,equalsApproximately:J,equals:B,lerp:X,lerpV:ne,max:Q,min:Y,mulScalar:le,scale:ve,divScalar:Pe,inverse:De,invert:Ie,cross:Ne,dot:Le,length:ke,len:Ye,lengthSq:Ee,lenSq:Ue,distance:Se,dist:Ze,distanceSq:$e,distSq:Ge,normalize:re,negate:ce,copy:se,clone:k,multiply:te,mul:xe,divide:Te,div:Re,random:ze,zero:f,transformMat4:b,transformMat3:d,rotate:h,setLength:S,truncate:L,midpoint:V}}const Kc=new Map;function Ud(s){let i=Kc.get(s);return i||(i=lm(s),Kc.set(s,i)),i}function um(s){function i(y,T,C){const z=new s(3);return y!==void 0&&(z[0]=y,T!==void 0&&(z[1]=T,C!==void 0&&(z[2]=C))),z}const u=i;function m(y,T,C,z){const $=z??new s(3);return $[0]=y,$[1]=T,$[2]=C,$}function g(y,T){const C=T??new s(3);return C[0]=Math.ceil(y[0]),C[1]=Math.ceil(y[1]),C[2]=Math.ceil(y[2]),C}function w(y,T){const C=T??new s(3);return C[0]=Math.floor(y[0]),C[1]=Math.floor(y[1]),C[2]=Math.floor(y[2]),C}function E(y,T){const C=T??new s(3);return C[0]=Math.round(y[0]),C[1]=Math.round(y[1]),C[2]=Math.round(y[2]),C}function P(y,T=0,C=1,z){const $=z??new s(3);return $[0]=Math.min(C,Math.max(T,y[0])),$[1]=Math.min(C,Math.max(T,y[1])),$[2]=Math.min(C,Math.max(T,y[2])),$}function M(y,T,C){const z=C??new s(3);return z[0]=y[0]+T[0],z[1]=y[1]+T[1],z[2]=y[2]+T[2],z}function R(y,T,C,z){const $=z??new s(3);return $[0]=y[0]+T[0]*C,$[1]=y[1]+T[1]*C,$[2]=y[2]+T[2]*C,$}function G(y,T){const C=y[0],z=y[1],$=y[2],K=T[0],ee=T[1],me=T[2],Ae=Math.sqrt(C*C+z*z+$*$),pe=Math.sqrt(K*K+ee*ee+me*me),ge=Ae*pe,Fe=ge&&Le(y,T)/ge;return Math.acos(Fe)}function W(y,T,C){const z=C??new s(3);return z[0]=y[0]-T[0],z[1]=y[1]-T[1],z[2]=y[2]-T[2],z}const N=W;function J(y,T){return Math.abs(y[0]-T[0])<Be&&Math.abs(y[1]-T[1])<Be&&Math.abs(y[2]-T[2])<Be}function B(y,T){return y[0]===T[0]&&y[1]===T[1]&&y[2]===T[2]}function X(y,T,C,z){const $=z??new s(3);return $[0]=y[0]+C*(T[0]-y[0]),$[1]=y[1]+C*(T[1]-y[1]),$[2]=y[2]+C*(T[2]-y[2]),$}function ne(y,T,C,z){const $=z??new s(3);return $[0]=y[0]+C[0]*(T[0]-y[0]),$[1]=y[1]+C[1]*(T[1]-y[1]),$[2]=y[2]+C[2]*(T[2]-y[2]),$}function Q(y,T,C){const z=C??new s(3);return z[0]=Math.max(y[0],T[0]),z[1]=Math.max(y[1],T[1]),z[2]=Math.max(y[2],T[2]),z}function Y(y,T,C){const z=C??new s(3);return z[0]=Math.min(y[0],T[0]),z[1]=Math.min(y[1],T[1]),z[2]=Math.min(y[2],T[2]),z}function le(y,T,C){const z=C??new s(3);return z[0]=y[0]*T,z[1]=y[1]*T,z[2]=y[2]*T,z}const ve=le;function Pe(y,T,C){const z=C??new s(3);return z[0]=y[0]/T,z[1]=y[1]/T,z[2]=y[2]/T,z}function De(y,T){const C=T??new s(3);return C[0]=1/y[0],C[1]=1/y[1],C[2]=1/y[2],C}const Ie=De;function Ne(y,T,C){const z=C??new s(3),$=y[2]*T[0]-y[0]*T[2],K=y[0]*T[1]-y[1]*T[0];return z[0]=y[1]*T[2]-y[2]*T[1],z[1]=$,z[2]=K,z}function Le(y,T){return y[0]*T[0]+y[1]*T[1]+y[2]*T[2]}function ke(y){const T=y[0],C=y[1],z=y[2];return Math.sqrt(T*T+C*C+z*z)}const Ye=ke;function Ee(y){const T=y[0],C=y[1],z=y[2];return T*T+C*C+z*z}const Ue=Ee;function Se(y,T){const C=y[0]-T[0],z=y[1]-T[1],$=y[2]-T[2];return Math.sqrt(C*C+z*z+$*$)}const Ze=Se;function $e(y,T){const C=y[0]-T[0],z=y[1]-T[1],$=y[2]-T[2];return C*C+z*z+$*$}const Ge=$e;function re(y,T){const C=T??new s(3),z=y[0],$=y[1],K=y[2],ee=Math.sqrt(z*z+$*$+K*K);return ee>1e-5?(C[0]=z/ee,C[1]=$/ee,C[2]=K/ee):(C[0]=0,C[1]=0,C[2]=0),C}function ce(y,T){const C=T??new s(3);return C[0]=-y[0],C[1]=-y[1],C[2]=-y[2],C}function se(y,T){const C=T??new s(3);return C[0]=y[0],C[1]=y[1],C[2]=y[2],C}const k=se;function te(y,T,C){const z=C??new s(3);return z[0]=y[0]*T[0],z[1]=y[1]*T[1],z[2]=y[2]*T[2],z}const xe=te;function Te(y,T,C){const z=C??new s(3);return z[0]=y[0]/T[0],z[1]=y[1]/T[1],z[2]=y[2]/T[2],z}const Re=Te;function ze(y=1,T){const C=T??new s(3),z=Math.random()*2*Math.PI,$=Math.random()*2-1,K=Math.sqrt(1-$*$)*y;return C[0]=Math.cos(z)*K,C[1]=Math.sin(z)*K,C[2]=$*y,C}function f(y){const T=y??new s(3);return T[0]=0,T[1]=0,T[2]=0,T}function b(y,T,C){const z=C??new s(3),$=y[0],K=y[1],ee=y[2],me=T[3]*$+T[7]*K+T[11]*ee+T[15]||1;return z[0]=(T[0]*$+T[4]*K+T[8]*ee+T[12])/me,z[1]=(T[1]*$+T[5]*K+T[9]*ee+T[13])/me,z[2]=(T[2]*$+T[6]*K+T[10]*ee+T[14])/me,z}function d(y,T,C){const z=C??new s(3),$=y[0],K=y[1],ee=y[2];return z[0]=$*T[0*4+0]+K*T[1*4+0]+ee*T[2*4+0],z[1]=$*T[0*4+1]+K*T[1*4+1]+ee*T[2*4+1],z[2]=$*T[0*4+2]+K*T[1*4+2]+ee*T[2*4+2],z}function h(y,T,C){const z=C??new s(3),$=y[0],K=y[1],ee=y[2];return z[0]=$*T[0]+K*T[4]+ee*T[8],z[1]=$*T[1]+K*T[5]+ee*T[9],z[2]=$*T[2]+K*T[6]+ee*T[10],z}function S(y,T,C){const z=C??new s(3),$=T[0],K=T[1],ee=T[2],me=T[3]*2,Ae=y[0],pe=y[1],ge=y[2],Fe=K*ge-ee*pe,We=ee*Ae-$*ge,Xe=$*pe-K*Ae;return z[0]=Ae+Fe*me+(K*Xe-ee*We)*2,z[1]=pe+We*me+(ee*Fe-$*Xe)*2,z[2]=ge+Xe*me+($*We-K*Fe)*2,z}function L(y,T){const C=T??new s(3);return C[0]=y[12],C[1]=y[13],C[2]=y[14],C}function V(y,T,C){const z=C??new s(3),$=T*4;return z[0]=y[$+0],z[1]=y[$+1],z[2]=y[$+2],z}function o(y,T){const C=T??new s(3),z=y[0],$=y[1],K=y[2],ee=y[4],me=y[5],Ae=y[6],pe=y[8],ge=y[9],Fe=y[10];return C[0]=Math.sqrt(z*z+$*$+K*K),C[1]=Math.sqrt(ee*ee+me*me+Ae*Ae),C[2]=Math.sqrt(pe*pe+ge*ge+Fe*Fe),C}function v(y,T,C,z){const $=z??new s(3),K=[],ee=[];return K[0]=y[0]-T[0],K[1]=y[1]-T[1],K[2]=y[2]-T[2],ee[0]=K[0],ee[1]=K[1]*Math.cos(C)-K[2]*Math.sin(C),ee[2]=K[1]*Math.sin(C)+K[2]*Math.cos(C),$[0]=ee[0]+T[0],$[1]=ee[1]+T[1],$[2]=ee[2]+T[2],$}function c(y,T,C,z){const $=z??new s(3),K=[],ee=[];return K[0]=y[0]-T[0],K[1]=y[1]-T[1],K[2]=y[2]-T[2],ee[0]=K[2]*Math.sin(C)+K[0]*Math.cos(C),ee[1]=K[1],ee[2]=K[2]*Math.cos(C)-K[0]*Math.sin(C),$[0]=ee[0]+T[0],$[1]=ee[1]+T[1],$[2]=ee[2]+T[2],$}function p(y,T,C,z){const $=z??new s(3),K=[],ee=[];return K[0]=y[0]-T[0],K[1]=y[1]-T[1],K[2]=y[2]-T[2],ee[0]=K[0]*Math.cos(C)-K[1]*Math.sin(C),ee[1]=K[0]*Math.sin(C)+K[1]*Math.cos(C),ee[2]=K[2],$[0]=ee[0]+T[0],$[1]=ee[1]+T[1],$[2]=ee[2]+T[2],$}function x(y,T,C){const z=C??new s(3);return re(y,z),le(z,T,z)}function D(y,T,C){const z=C??new s(3);return ke(y)>T?x(y,T,z):se(y,z)}function H(y,T,C){const z=C??new s(3);return X(y,T,.5,z)}return{create:i,fromValues:u,set:m,ceil:g,floor:w,round:E,clamp:P,add:M,addScaled:R,angle:G,subtract:W,sub:N,equalsApproximately:J,equals:B,lerp:X,lerpV:ne,max:Q,min:Y,mulScalar:le,scale:ve,divScalar:Pe,inverse:De,invert:Ie,cross:Ne,dot:Le,length:ke,len:Ye,lengthSq:Ee,lenSq:Ue,distance:Se,dist:Ze,distanceSq:$e,distSq:Ge,normalize:re,negate:ce,copy:se,clone:k,multiply:te,mul:xe,divide:Te,div:Re,random:ze,zero:f,transformMat4:b,transformMat4Upper3x3:d,transformMat3:h,transformQuat:S,getTranslation:L,getAxis:V,getScaling:o,rotateX:v,rotateY:c,rotateZ:p,setLength:x,truncate:D,midpoint:H}}const Zc=new Map;function Xs(s){let i=Zc.get(s);return i||(i=um(s),Zc.set(s,i)),i}function cm(s){const i=Ud(s),u=Xs(s);function m(f,b,d,h,S,L,V,o,v){const c=new s(12);return c[3]=0,c[7]=0,c[11]=0,f!==void 0&&(c[0]=f,b!==void 0&&(c[1]=b,d!==void 0&&(c[2]=d,h!==void 0&&(c[4]=h,S!==void 0&&(c[5]=S,L!==void 0&&(c[6]=L,V!==void 0&&(c[8]=V,o!==void 0&&(c[9]=o,v!==void 0&&(c[10]=v))))))))),c}function g(f,b,d,h,S,L,V,o,v,c){const p=c??new s(12);return p[0]=f,p[1]=b,p[2]=d,p[3]=0,p[4]=h,p[5]=S,p[6]=L,p[7]=0,p[8]=V,p[9]=o,p[10]=v,p[11]=0,p}function w(f,b){const d=b??new s(12);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[3]=0,d[4]=f[4],d[5]=f[5],d[6]=f[6],d[7]=0,d[8]=f[8],d[9]=f[9],d[10]=f[10],d[11]=0,d}function E(f,b){const d=b??new s(12),h=f[0],S=f[1],L=f[2],V=f[3],o=h+h,v=S+S,c=L+L,p=h*o,x=S*o,D=S*v,H=L*o,y=L*v,T=L*c,C=V*o,z=V*v,$=V*c;return d[0]=1-D-T,d[1]=x+$,d[2]=H-z,d[3]=0,d[4]=x-$,d[5]=1-p-T,d[6]=y+C,d[7]=0,d[8]=H+z,d[9]=y-C,d[10]=1-p-D,d[11]=0,d}function P(f,b){const d=b??new s(12);return d[0]=-f[0],d[1]=-f[1],d[2]=-f[2],d[4]=-f[4],d[5]=-f[5],d[6]=-f[6],d[8]=-f[8],d[9]=-f[9],d[10]=-f[10],d}function M(f,b){const d=b??new s(12);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[4]=f[4],d[5]=f[5],d[6]=f[6],d[8]=f[8],d[9]=f[9],d[10]=f[10],d}const R=M;function G(f,b){return Math.abs(f[0]-b[0])<Be&&Math.abs(f[1]-b[1])<Be&&Math.abs(f[2]-b[2])<Be&&Math.abs(f[4]-b[4])<Be&&Math.abs(f[5]-b[5])<Be&&Math.abs(f[6]-b[6])<Be&&Math.abs(f[8]-b[8])<Be&&Math.abs(f[9]-b[9])<Be&&Math.abs(f[10]-b[10])<Be}function W(f,b){return f[0]===b[0]&&f[1]===b[1]&&f[2]===b[2]&&f[4]===b[4]&&f[5]===b[5]&&f[6]===b[6]&&f[8]===b[8]&&f[9]===b[9]&&f[10]===b[10]}function N(f){const b=f??new s(12);return b[0]=1,b[1]=0,b[2]=0,b[4]=0,b[5]=1,b[6]=0,b[8]=0,b[9]=0,b[10]=1,b}function J(f,b){const d=b??new s(12);if(d===f){let D;return D=f[1],f[1]=f[4],f[4]=D,D=f[2],f[2]=f[8],f[8]=D,D=f[6],f[6]=f[9],f[9]=D,d}const h=f[0*4+0],S=f[0*4+1],L=f[0*4+2],V=f[1*4+0],o=f[1*4+1],v=f[1*4+2],c=f[2*4+0],p=f[2*4+1],x=f[2*4+2];return d[0]=h,d[1]=V,d[2]=c,d[4]=S,d[5]=o,d[6]=p,d[8]=L,d[9]=v,d[10]=x,d}function B(f,b){const d=b??new s(12),h=f[0*4+0],S=f[0*4+1],L=f[0*4+2],V=f[1*4+0],o=f[1*4+1],v=f[1*4+2],c=f[2*4+0],p=f[2*4+1],x=f[2*4+2],D=x*o-v*p,H=-x*V+v*c,y=p*V-o*c,T=1/(h*D+S*H+L*y);return d[0]=D*T,d[1]=(-x*S+L*p)*T,d[2]=(v*S-L*o)*T,d[4]=H*T,d[5]=(x*h-L*c)*T,d[6]=(-v*h+L*V)*T,d[8]=y*T,d[9]=(-p*h+S*c)*T,d[10]=(o*h-S*V)*T,d}function X(f){const b=f[0],d=f[0*4+1],h=f[0*4+2],S=f[1*4+0],L=f[1*4+1],V=f[1*4+2],o=f[2*4+0],v=f[2*4+1],c=f[2*4+2];return b*(L*c-v*V)-S*(d*c-v*h)+o*(d*V-L*h)}const ne=B;function Q(f,b,d){const h=d??new s(12),S=f[0],L=f[1],V=f[2],o=f[4],v=f[5],c=f[6],p=f[8],x=f[9],D=f[10],H=b[0],y=b[1],T=b[2],C=b[4],z=b[5],$=b[6],K=b[8],ee=b[9],me=b[10];return h[0]=S*H+o*y+p*T,h[1]=L*H+v*y+x*T,h[2]=V*H+c*y+D*T,h[4]=S*C+o*z+p*$,h[5]=L*C+v*z+x*$,h[6]=V*C+c*z+D*$,h[8]=S*K+o*ee+p*me,h[9]=L*K+v*ee+x*me,h[10]=V*K+c*ee+D*me,h}const Y=Q;function le(f,b,d){const h=d??N();return f!==h&&(h[0]=f[0],h[1]=f[1],h[2]=f[2],h[4]=f[4],h[5]=f[5],h[6]=f[6]),h[8]=b[0],h[9]=b[1],h[10]=1,h}function ve(f,b){const d=b??i.create();return d[0]=f[8],d[1]=f[9],d}function Pe(f,b,d){const h=d??i.create(),S=b*4;return h[0]=f[S+0],h[1]=f[S+1],h}function De(f,b,d,h){const S=h===f?f:M(f,h),L=d*4;return S[L+0]=b[0],S[L+1]=b[1],S}function Ie(f,b){const d=b??i.create(),h=f[0],S=f[1],L=f[4],V=f[5];return d[0]=Math.sqrt(h*h+S*S),d[1]=Math.sqrt(L*L+V*V),d}function Ne(f,b){const d=b??u.create(),h=f[0],S=f[1],L=f[2],V=f[4],o=f[5],v=f[6],c=f[8],p=f[9],x=f[10];return d[0]=Math.sqrt(h*h+S*S+L*L),d[1]=Math.sqrt(V*V+o*o+v*v),d[2]=Math.sqrt(c*c+p*p+x*x),d}function Le(f,b){const d=b??new s(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=f[0],d[9]=f[1],d[10]=1,d}function ke(f,b,d){const h=d??new s(12),S=b[0],L=b[1],V=f[0],o=f[1],v=f[2],c=f[1*4+0],p=f[1*4+1],x=f[1*4+2],D=f[2*4+0],H=f[2*4+1],y=f[2*4+2];return f!==h&&(h[0]=V,h[1]=o,h[2]=v,h[4]=c,h[5]=p,h[6]=x),h[8]=V*S+c*L+D,h[9]=o*S+p*L+H,h[10]=v*S+x*L+y,h}function Ye(f,b){const d=b??new s(12),h=Math.cos(f),S=Math.sin(f);return d[0]=h,d[1]=S,d[2]=0,d[4]=-S,d[5]=h,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Ee(f,b,d){const h=d??new s(12),S=f[0*4+0],L=f[0*4+1],V=f[0*4+2],o=f[1*4+0],v=f[1*4+1],c=f[1*4+2],p=Math.cos(b),x=Math.sin(b);return h[0]=p*S+x*o,h[1]=p*L+x*v,h[2]=p*V+x*c,h[4]=p*o-x*S,h[5]=p*v-x*L,h[6]=p*c-x*V,f!==h&&(h[8]=f[8],h[9]=f[9],h[10]=f[10]),h}function Ue(f,b){const d=b??new s(12),h=Math.cos(f),S=Math.sin(f);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=h,d[6]=S,d[8]=0,d[9]=-S,d[10]=h,d}function Se(f,b,d){const h=d??new s(12),S=f[4],L=f[5],V=f[6],o=f[8],v=f[9],c=f[10],p=Math.cos(b),x=Math.sin(b);return h[4]=p*S+x*o,h[5]=p*L+x*v,h[6]=p*V+x*c,h[8]=p*o-x*S,h[9]=p*v-x*L,h[10]=p*c-x*V,f!==h&&(h[0]=f[0],h[1]=f[1],h[2]=f[2]),h}function Ze(f,b){const d=b??new s(12),h=Math.cos(f),S=Math.sin(f);return d[0]=h,d[1]=0,d[2]=-S,d[4]=0,d[5]=1,d[6]=0,d[8]=S,d[9]=0,d[10]=h,d}function $e(f,b,d){const h=d??new s(12),S=f[0*4+0],L=f[0*4+1],V=f[0*4+2],o=f[2*4+0],v=f[2*4+1],c=f[2*4+2],p=Math.cos(b),x=Math.sin(b);return h[0]=p*S-x*o,h[1]=p*L-x*v,h[2]=p*V-x*c,h[8]=p*o+x*S,h[9]=p*v+x*L,h[10]=p*c+x*V,f!==h&&(h[4]=f[4],h[5]=f[5],h[6]=f[6]),h}const Ge=Ye,re=Ee;function ce(f,b){const d=b??new s(12);return d[0]=f[0],d[1]=0,d[2]=0,d[4]=0,d[5]=f[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function se(f,b,d){const h=d??new s(12),S=b[0],L=b[1];return h[0]=S*f[0*4+0],h[1]=S*f[0*4+1],h[2]=S*f[0*4+2],h[4]=L*f[1*4+0],h[5]=L*f[1*4+1],h[6]=L*f[1*4+2],f!==h&&(h[8]=f[8],h[9]=f[9],h[10]=f[10]),h}function k(f,b){const d=b??new s(12);return d[0]=f[0],d[1]=0,d[2]=0,d[4]=0,d[5]=f[1],d[6]=0,d[8]=0,d[9]=0,d[10]=f[2],d}function te(f,b,d){const h=d??new s(12),S=b[0],L=b[1],V=b[2];return h[0]=S*f[0*4+0],h[1]=S*f[0*4+1],h[2]=S*f[0*4+2],h[4]=L*f[1*4+0],h[5]=L*f[1*4+1],h[6]=L*f[1*4+2],h[8]=V*f[2*4+0],h[9]=V*f[2*4+1],h[10]=V*f[2*4+2],h}function xe(f,b){const d=b??new s(12);return d[0]=f,d[1]=0,d[2]=0,d[4]=0,d[5]=f,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Te(f,b,d){const h=d??new s(12);return h[0]=b*f[0*4+0],h[1]=b*f[0*4+1],h[2]=b*f[0*4+2],h[4]=b*f[1*4+0],h[5]=b*f[1*4+1],h[6]=b*f[1*4+2],f!==h&&(h[8]=f[8],h[9]=f[9],h[10]=f[10]),h}function Re(f,b){const d=b??new s(12);return d[0]=f,d[1]=0,d[2]=0,d[4]=0,d[5]=f,d[6]=0,d[8]=0,d[9]=0,d[10]=f,d}function ze(f,b,d){const h=d??new s(12);return h[0]=b*f[0*4+0],h[1]=b*f[0*4+1],h[2]=b*f[0*4+2],h[4]=b*f[1*4+0],h[5]=b*f[1*4+1],h[6]=b*f[1*4+2],h[8]=b*f[2*4+0],h[9]=b*f[2*4+1],h[10]=b*f[2*4+2],h}return{clone:R,create:m,set:g,fromMat4:w,fromQuat:E,negate:P,copy:M,equalsApproximately:G,equals:W,identity:N,transpose:J,inverse:B,invert:ne,determinant:X,mul:Y,multiply:Q,setTranslation:le,getTranslation:ve,getAxis:Pe,setAxis:De,getScaling:Ie,get3DScaling:Ne,translation:Le,translate:ke,rotation:Ye,rotate:Ee,rotationX:Ue,rotateX:Se,rotationY:Ze,rotateY:$e,rotationZ:Ge,rotateZ:re,scaling:ce,scale:se,uniformScaling:xe,uniformScale:Te,scaling3D:k,scale3D:te,uniformScaling3D:Re,uniformScale3D:ze}}const Jc=new Map;function dm(s){let i=Jc.get(s);return i||(i=cm(s),Jc.set(s,i)),i}function fm(s){const i=Xs(s);function u(o,v,c,p,x,D,H,y,T,C,z,$,K,ee,me,Ae){const pe=new s(16);return o!==void 0&&(pe[0]=o,v!==void 0&&(pe[1]=v,c!==void 0&&(pe[2]=c,p!==void 0&&(pe[3]=p,x!==void 0&&(pe[4]=x,D!==void 0&&(pe[5]=D,H!==void 0&&(pe[6]=H,y!==void 0&&(pe[7]=y,T!==void 0&&(pe[8]=T,C!==void 0&&(pe[9]=C,z!==void 0&&(pe[10]=z,$!==void 0&&(pe[11]=$,K!==void 0&&(pe[12]=K,ee!==void 0&&(pe[13]=ee,me!==void 0&&(pe[14]=me,Ae!==void 0&&(pe[15]=Ae)))))))))))))))),pe}function m(o,v,c,p,x,D,H,y,T,C,z,$,K,ee,me,Ae,pe){const ge=pe??new s(16);return ge[0]=o,ge[1]=v,ge[2]=c,ge[3]=p,ge[4]=x,ge[5]=D,ge[6]=H,ge[7]=y,ge[8]=T,ge[9]=C,ge[10]=z,ge[11]=$,ge[12]=K,ge[13]=ee,ge[14]=me,ge[15]=Ae,ge}function g(o,v){const c=v??new s(16);return c[0]=o[0],c[1]=o[1],c[2]=o[2],c[3]=0,c[4]=o[4],c[5]=o[5],c[6]=o[6],c[7]=0,c[8]=o[8],c[9]=o[9],c[10]=o[10],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function w(o,v){const c=v??new s(16),p=o[0],x=o[1],D=o[2],H=o[3],y=p+p,T=x+x,C=D+D,z=p*y,$=x*y,K=x*T,ee=D*y,me=D*T,Ae=D*C,pe=H*y,ge=H*T,Fe=H*C;return c[0]=1-K-Ae,c[1]=$+Fe,c[2]=ee-ge,c[3]=0,c[4]=$-Fe,c[5]=1-z-Ae,c[6]=me+pe,c[7]=0,c[8]=ee+ge,c[9]=me-pe,c[10]=1-z-K,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function E(o,v){const c=v??new s(16);return c[0]=-o[0],c[1]=-o[1],c[2]=-o[2],c[3]=-o[3],c[4]=-o[4],c[5]=-o[5],c[6]=-o[6],c[7]=-o[7],c[8]=-o[8],c[9]=-o[9],c[10]=-o[10],c[11]=-o[11],c[12]=-o[12],c[13]=-o[13],c[14]=-o[14],c[15]=-o[15],c}function P(o,v){const c=v??new s(16);return c[0]=o[0],c[1]=o[1],c[2]=o[2],c[3]=o[3],c[4]=o[4],c[5]=o[5],c[6]=o[6],c[7]=o[7],c[8]=o[8],c[9]=o[9],c[10]=o[10],c[11]=o[11],c[12]=o[12],c[13]=o[13],c[14]=o[14],c[15]=o[15],c}const M=P;function R(o,v){return Math.abs(o[0]-v[0])<Be&&Math.abs(o[1]-v[1])<Be&&Math.abs(o[2]-v[2])<Be&&Math.abs(o[3]-v[3])<Be&&Math.abs(o[4]-v[4])<Be&&Math.abs(o[5]-v[5])<Be&&Math.abs(o[6]-v[6])<Be&&Math.abs(o[7]-v[7])<Be&&Math.abs(o[8]-v[8])<Be&&Math.abs(o[9]-v[9])<Be&&Math.abs(o[10]-v[10])<Be&&Math.abs(o[11]-v[11])<Be&&Math.abs(o[12]-v[12])<Be&&Math.abs(o[13]-v[13])<Be&&Math.abs(o[14]-v[14])<Be&&Math.abs(o[15]-v[15])<Be}function G(o,v){return o[0]===v[0]&&o[1]===v[1]&&o[2]===v[2]&&o[3]===v[3]&&o[4]===v[4]&&o[5]===v[5]&&o[6]===v[6]&&o[7]===v[7]&&o[8]===v[8]&&o[9]===v[9]&&o[10]===v[10]&&o[11]===v[11]&&o[12]===v[12]&&o[13]===v[13]&&o[14]===v[14]&&o[15]===v[15]}function W(o){const v=o??new s(16);return v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,v}function N(o,v){const c=v??new s(16);if(c===o){let We;return We=o[1],o[1]=o[4],o[4]=We,We=o[2],o[2]=o[8],o[8]=We,We=o[3],o[3]=o[12],o[12]=We,We=o[6],o[6]=o[9],o[9]=We,We=o[7],o[7]=o[13],o[13]=We,We=o[11],o[11]=o[14],o[14]=We,c}const p=o[0*4+0],x=o[0*4+1],D=o[0*4+2],H=o[0*4+3],y=o[1*4+0],T=o[1*4+1],C=o[1*4+2],z=o[1*4+3],$=o[2*4+0],K=o[2*4+1],ee=o[2*4+2],me=o[2*4+3],Ae=o[3*4+0],pe=o[3*4+1],ge=o[3*4+2],Fe=o[3*4+3];return c[0]=p,c[1]=y,c[2]=$,c[3]=Ae,c[4]=x,c[5]=T,c[6]=K,c[7]=pe,c[8]=D,c[9]=C,c[10]=ee,c[11]=ge,c[12]=H,c[13]=z,c[14]=me,c[15]=Fe,c}function J(o,v){const c=v??new s(16),p=o[0*4+0],x=o[0*4+1],D=o[0*4+2],H=o[0*4+3],y=o[1*4+0],T=o[1*4+1],C=o[1*4+2],z=o[1*4+3],$=o[2*4+0],K=o[2*4+1],ee=o[2*4+2],me=o[2*4+3],Ae=o[3*4+0],pe=o[3*4+1],ge=o[3*4+2],Fe=o[3*4+3],We=ee*Fe,Xe=ge*me,ct=C*Fe,it=ge*z,dt=C*me,ht=ee*z,mt=D*Fe,gt=ge*H,st=D*me,at=ee*H,wt=D*z,xt=C*H,Tt=$*pe,St=Ae*K,Lt=y*pe,Pt=Ae*T,Ut=y*K,pn=$*T,In=p*pe,hn=Ae*x,gr=p*K,mn=$*x,En=p*T,Mn=y*x,_r=We*T+it*K+dt*pe-(Xe*T+ct*K+ht*pe),Li=Xe*x+mt*K+at*pe-(We*x+gt*K+st*pe),Ui=ct*x+gt*T+wt*pe-(it*x+mt*T+xt*pe),Ci=ht*x+st*T+xt*K-(dt*x+at*T+wt*K),tt=1/(p*_r+y*Li+$*Ui+Ae*Ci);return c[0]=tt*_r,c[1]=tt*Li,c[2]=tt*Ui,c[3]=tt*Ci,c[4]=tt*(Xe*y+ct*$+ht*Ae-(We*y+it*$+dt*Ae)),c[5]=tt*(We*p+gt*$+st*Ae-(Xe*p+mt*$+at*Ae)),c[6]=tt*(it*p+mt*y+xt*Ae-(ct*p+gt*y+wt*Ae)),c[7]=tt*(dt*p+at*y+wt*$-(ht*p+st*y+xt*$)),c[8]=tt*(Tt*z+Pt*me+Ut*Fe-(St*z+Lt*me+pn*Fe)),c[9]=tt*(St*H+In*me+mn*Fe-(Tt*H+hn*me+gr*Fe)),c[10]=tt*(Lt*H+hn*z+En*Fe-(Pt*H+In*z+Mn*Fe)),c[11]=tt*(pn*H+gr*z+Mn*me-(Ut*H+mn*z+En*me)),c[12]=tt*(Lt*ee+pn*ge+St*C-(Ut*ge+Tt*C+Pt*ee)),c[13]=tt*(gr*ge+Tt*D+hn*ee-(In*ee+mn*ge+St*D)),c[14]=tt*(In*C+Mn*ge+Pt*D-(En*ge+Lt*D+hn*C)),c[15]=tt*(En*ee+Ut*D+mn*C-(gr*C+Mn*ee+pn*D)),c}function B(o){const v=o[0],c=o[0*4+1],p=o[0*4+2],x=o[0*4+3],D=o[1*4+0],H=o[1*4+1],y=o[1*4+2],T=o[1*4+3],C=o[2*4+0],z=o[2*4+1],$=o[2*4+2],K=o[2*4+3],ee=o[3*4+0],me=o[3*4+1],Ae=o[3*4+2],pe=o[3*4+3],ge=$*pe,Fe=Ae*K,We=y*pe,Xe=Ae*T,ct=y*K,it=$*T,dt=p*pe,ht=Ae*x,mt=p*K,gt=$*x,st=p*T,at=y*x,wt=ge*H+Xe*z+ct*me-(Fe*H+We*z+it*me),xt=Fe*c+dt*z+gt*me-(ge*c+ht*z+mt*me),Tt=We*c+ht*H+st*me-(Xe*c+dt*H+at*me),St=it*c+mt*H+at*z-(ct*c+gt*H+st*z);return v*wt+D*xt+C*Tt+ee*St}const X=J;function ne(o,v,c){const p=c??new s(16),x=o[0],D=o[1],H=o[2],y=o[3],T=o[4],C=o[5],z=o[6],$=o[7],K=o[8],ee=o[9],me=o[10],Ae=o[11],pe=o[12],ge=o[13],Fe=o[14],We=o[15],Xe=v[0],ct=v[1],it=v[2],dt=v[3],ht=v[4],mt=v[5],gt=v[6],st=v[7],at=v[8],wt=v[9],xt=v[10],Tt=v[11],St=v[12],Lt=v[13],Pt=v[14],Ut=v[15];return p[0]=x*Xe+T*ct+K*it+pe*dt,p[1]=D*Xe+C*ct+ee*it+ge*dt,p[2]=H*Xe+z*ct+me*it+Fe*dt,p[3]=y*Xe+$*ct+Ae*it+We*dt,p[4]=x*ht+T*mt+K*gt+pe*st,p[5]=D*ht+C*mt+ee*gt+ge*st,p[6]=H*ht+z*mt+me*gt+Fe*st,p[7]=y*ht+$*mt+Ae*gt+We*st,p[8]=x*at+T*wt+K*xt+pe*Tt,p[9]=D*at+C*wt+ee*xt+ge*Tt,p[10]=H*at+z*wt+me*xt+Fe*Tt,p[11]=y*at+$*wt+Ae*xt+We*Tt,p[12]=x*St+T*Lt+K*Pt+pe*Ut,p[13]=D*St+C*Lt+ee*Pt+ge*Ut,p[14]=H*St+z*Lt+me*Pt+Fe*Ut,p[15]=y*St+$*Lt+Ae*Pt+We*Ut,p}const Q=ne;function Y(o,v,c){const p=c??W();return o!==p&&(p[0]=o[0],p[1]=o[1],p[2]=o[2],p[3]=o[3],p[4]=o[4],p[5]=o[5],p[6]=o[6],p[7]=o[7],p[8]=o[8],p[9]=o[9],p[10]=o[10],p[11]=o[11]),p[12]=v[0],p[13]=v[1],p[14]=v[2],p[15]=1,p}function le(o,v){const c=v??i.create();return c[0]=o[12],c[1]=o[13],c[2]=o[14],c}function ve(o,v,c){const p=c??i.create(),x=v*4;return p[0]=o[x+0],p[1]=o[x+1],p[2]=o[x+2],p}function Pe(o,v,c,p){const x=p===o?p:P(o,p),D=c*4;return x[D+0]=v[0],x[D+1]=v[1],x[D+2]=v[2],x}function De(o,v){const c=v??i.create(),p=o[0],x=o[1],D=o[2],H=o[4],y=o[5],T=o[6],C=o[8],z=o[9],$=o[10];return c[0]=Math.sqrt(p*p+x*x+D*D),c[1]=Math.sqrt(H*H+y*y+T*T),c[2]=Math.sqrt(C*C+z*z+$*$),c}function Ie(o,v,c,p,x){const D=x??new s(16),H=Math.tan(Math.PI*.5-.5*o);if(D[0]=H/v,D[1]=0,D[2]=0,D[3]=0,D[4]=0,D[5]=H,D[6]=0,D[7]=0,D[8]=0,D[9]=0,D[11]=-1,D[12]=0,D[13]=0,D[15]=0,Number.isFinite(p)){const y=1/(c-p);D[10]=p*y,D[14]=p*c*y}else D[10]=-1,D[14]=-c;return D}function Ne(o,v,c,p=1/0,x){const D=x??new s(16),H=1/Math.tan(o*.5);if(D[0]=H/v,D[1]=0,D[2]=0,D[3]=0,D[4]=0,D[5]=H,D[6]=0,D[7]=0,D[8]=0,D[9]=0,D[11]=-1,D[12]=0,D[13]=0,D[15]=0,p===1/0)D[10]=0,D[14]=c;else{const y=1/(p-c);D[10]=c*y,D[14]=p*c*y}return D}function Le(o,v,c,p,x,D,H){const y=H??new s(16);return y[0]=2/(v-o),y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2/(p-c),y[6]=0,y[7]=0,y[8]=0,y[9]=0,y[10]=1/(x-D),y[11]=0,y[12]=(v+o)/(o-v),y[13]=(p+c)/(c-p),y[14]=x/(x-D),y[15]=1,y}function ke(o,v,c,p,x,D,H){const y=H??new s(16),T=v-o,C=p-c,z=x-D;return y[0]=2*x/T,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*x/C,y[6]=0,y[7]=0,y[8]=(o+v)/T,y[9]=(p+c)/C,y[10]=D/z,y[11]=-1,y[12]=0,y[13]=0,y[14]=x*D/z,y[15]=0,y}function Ye(o,v,c,p,x,D=1/0,H){const y=H??new s(16),T=v-o,C=p-c;if(y[0]=2*x/T,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*x/C,y[6]=0,y[7]=0,y[8]=(o+v)/T,y[9]=(p+c)/C,y[11]=-1,y[12]=0,y[13]=0,y[15]=0,D===1/0)y[10]=0,y[14]=x;else{const z=1/(D-x);y[10]=x*z,y[14]=D*x*z}return y}const Ee=i.create(),Ue=i.create(),Se=i.create();function Ze(o,v,c,p){const x=p??new s(16);return i.normalize(i.subtract(v,o,Se),Se),i.normalize(i.cross(c,Se,Ee),Ee),i.normalize(i.cross(Se,Ee,Ue),Ue),x[0]=Ee[0],x[1]=Ee[1],x[2]=Ee[2],x[3]=0,x[4]=Ue[0],x[5]=Ue[1],x[6]=Ue[2],x[7]=0,x[8]=Se[0],x[9]=Se[1],x[10]=Se[2],x[11]=0,x[12]=o[0],x[13]=o[1],x[14]=o[2],x[15]=1,x}function $e(o,v,c,p){const x=p??new s(16);return i.normalize(i.subtract(o,v,Se),Se),i.normalize(i.cross(c,Se,Ee),Ee),i.normalize(i.cross(Se,Ee,Ue),Ue),x[0]=Ee[0],x[1]=Ee[1],x[2]=Ee[2],x[3]=0,x[4]=Ue[0],x[5]=Ue[1],x[6]=Ue[2],x[7]=0,x[8]=Se[0],x[9]=Se[1],x[10]=Se[2],x[11]=0,x[12]=o[0],x[13]=o[1],x[14]=o[2],x[15]=1,x}function Ge(o,v,c,p){const x=p??new s(16);return i.normalize(i.subtract(o,v,Se),Se),i.normalize(i.cross(c,Se,Ee),Ee),i.normalize(i.cross(Se,Ee,Ue),Ue),x[0]=Ee[0],x[1]=Ue[0],x[2]=Se[0],x[3]=0,x[4]=Ee[1],x[5]=Ue[1],x[6]=Se[1],x[7]=0,x[8]=Ee[2],x[9]=Ue[2],x[10]=Se[2],x[11]=0,x[12]=-(Ee[0]*o[0]+Ee[1]*o[1]+Ee[2]*o[2]),x[13]=-(Ue[0]*o[0]+Ue[1]*o[1]+Ue[2]*o[2]),x[14]=-(Se[0]*o[0]+Se[1]*o[1]+Se[2]*o[2]),x[15]=1,x}function re(o,v){const c=v??new s(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=o[0],c[13]=o[1],c[14]=o[2],c[15]=1,c}function ce(o,v,c){const p=c??new s(16),x=v[0],D=v[1],H=v[2],y=o[0],T=o[1],C=o[2],z=o[3],$=o[1*4+0],K=o[1*4+1],ee=o[1*4+2],me=o[1*4+3],Ae=o[2*4+0],pe=o[2*4+1],ge=o[2*4+2],Fe=o[2*4+3],We=o[3*4+0],Xe=o[3*4+1],ct=o[3*4+2],it=o[3*4+3];return o!==p&&(p[0]=y,p[1]=T,p[2]=C,p[3]=z,p[4]=$,p[5]=K,p[6]=ee,p[7]=me,p[8]=Ae,p[9]=pe,p[10]=ge,p[11]=Fe),p[12]=y*x+$*D+Ae*H+We,p[13]=T*x+K*D+pe*H+Xe,p[14]=C*x+ee*D+ge*H+ct,p[15]=z*x+me*D+Fe*H+it,p}function se(o,v){const c=v??new s(16),p=Math.cos(o),x=Math.sin(o);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=p,c[6]=x,c[7]=0,c[8]=0,c[9]=-x,c[10]=p,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function k(o,v,c){const p=c??new s(16),x=o[4],D=o[5],H=o[6],y=o[7],T=o[8],C=o[9],z=o[10],$=o[11],K=Math.cos(v),ee=Math.sin(v);return p[4]=K*x+ee*T,p[5]=K*D+ee*C,p[6]=K*H+ee*z,p[7]=K*y+ee*$,p[8]=K*T-ee*x,p[9]=K*C-ee*D,p[10]=K*z-ee*H,p[11]=K*$-ee*y,o!==p&&(p[0]=o[0],p[1]=o[1],p[2]=o[2],p[3]=o[3],p[12]=o[12],p[13]=o[13],p[14]=o[14],p[15]=o[15]),p}function te(o,v){const c=v??new s(16),p=Math.cos(o),x=Math.sin(o);return c[0]=p,c[1]=0,c[2]=-x,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=x,c[9]=0,c[10]=p,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function xe(o,v,c){const p=c??new s(16),x=o[0*4+0],D=o[0*4+1],H=o[0*4+2],y=o[0*4+3],T=o[2*4+0],C=o[2*4+1],z=o[2*4+2],$=o[2*4+3],K=Math.cos(v),ee=Math.sin(v);return p[0]=K*x-ee*T,p[1]=K*D-ee*C,p[2]=K*H-ee*z,p[3]=K*y-ee*$,p[8]=K*T+ee*x,p[9]=K*C+ee*D,p[10]=K*z+ee*H,p[11]=K*$+ee*y,o!==p&&(p[4]=o[4],p[5]=o[5],p[6]=o[6],p[7]=o[7],p[12]=o[12],p[13]=o[13],p[14]=o[14],p[15]=o[15]),p}function Te(o,v){const c=v??new s(16),p=Math.cos(o),x=Math.sin(o);return c[0]=p,c[1]=x,c[2]=0,c[3]=0,c[4]=-x,c[5]=p,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Re(o,v,c){const p=c??new s(16),x=o[0*4+0],D=o[0*4+1],H=o[0*4+2],y=o[0*4+3],T=o[1*4+0],C=o[1*4+1],z=o[1*4+2],$=o[1*4+3],K=Math.cos(v),ee=Math.sin(v);return p[0]=K*x+ee*T,p[1]=K*D+ee*C,p[2]=K*H+ee*z,p[3]=K*y+ee*$,p[4]=K*T-ee*x,p[5]=K*C-ee*D,p[6]=K*z-ee*H,p[7]=K*$-ee*y,o!==p&&(p[8]=o[8],p[9]=o[9],p[10]=o[10],p[11]=o[11],p[12]=o[12],p[13]=o[13],p[14]=o[14],p[15]=o[15]),p}function ze(o,v,c){const p=c??new s(16);let x=o[0],D=o[1],H=o[2];const y=Math.sqrt(x*x+D*D+H*H);x/=y,D/=y,H/=y;const T=x*x,C=D*D,z=H*H,$=Math.cos(v),K=Math.sin(v),ee=1-$;return p[0]=T+(1-T)*$,p[1]=x*D*ee+H*K,p[2]=x*H*ee-D*K,p[3]=0,p[4]=x*D*ee-H*K,p[5]=C+(1-C)*$,p[6]=D*H*ee+x*K,p[7]=0,p[8]=x*H*ee+D*K,p[9]=D*H*ee-x*K,p[10]=z+(1-z)*$,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}const f=ze;function b(o,v,c,p){const x=p??new s(16);let D=v[0],H=v[1],y=v[2];const T=Math.sqrt(D*D+H*H+y*y);D/=T,H/=T,y/=T;const C=D*D,z=H*H,$=y*y,K=Math.cos(c),ee=Math.sin(c),me=1-K,Ae=C+(1-C)*K,pe=D*H*me+y*ee,ge=D*y*me-H*ee,Fe=D*H*me-y*ee,We=z+(1-z)*K,Xe=H*y*me+D*ee,ct=D*y*me+H*ee,it=H*y*me-D*ee,dt=$+(1-$)*K,ht=o[0],mt=o[1],gt=o[2],st=o[3],at=o[4],wt=o[5],xt=o[6],Tt=o[7],St=o[8],Lt=o[9],Pt=o[10],Ut=o[11];return x[0]=Ae*ht+pe*at+ge*St,x[1]=Ae*mt+pe*wt+ge*Lt,x[2]=Ae*gt+pe*xt+ge*Pt,x[3]=Ae*st+pe*Tt+ge*Ut,x[4]=Fe*ht+We*at+Xe*St,x[5]=Fe*mt+We*wt+Xe*Lt,x[6]=Fe*gt+We*xt+Xe*Pt,x[7]=Fe*st+We*Tt+Xe*Ut,x[8]=ct*ht+it*at+dt*St,x[9]=ct*mt+it*wt+dt*Lt,x[10]=ct*gt+it*xt+dt*Pt,x[11]=ct*st+it*Tt+dt*Ut,o!==x&&(x[12]=o[12],x[13]=o[13],x[14]=o[14],x[15]=o[15]),x}const d=b;function h(o,v){const c=v??new s(16);return c[0]=o[0],c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=o[1],c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=o[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function S(o,v,c){const p=c??new s(16),x=v[0],D=v[1],H=v[2];return p[0]=x*o[0*4+0],p[1]=x*o[0*4+1],p[2]=x*o[0*4+2],p[3]=x*o[0*4+3],p[4]=D*o[1*4+0],p[5]=D*o[1*4+1],p[6]=D*o[1*4+2],p[7]=D*o[1*4+3],p[8]=H*o[2*4+0],p[9]=H*o[2*4+1],p[10]=H*o[2*4+2],p[11]=H*o[2*4+3],o!==p&&(p[12]=o[12],p[13]=o[13],p[14]=o[14],p[15]=o[15]),p}function L(o,v){const c=v??new s(16);return c[0]=o,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=o,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=o,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function V(o,v,c){const p=c??new s(16);return p[0]=v*o[0*4+0],p[1]=v*o[0*4+1],p[2]=v*o[0*4+2],p[3]=v*o[0*4+3],p[4]=v*o[1*4+0],p[5]=v*o[1*4+1],p[6]=v*o[1*4+2],p[7]=v*o[1*4+3],p[8]=v*o[2*4+0],p[9]=v*o[2*4+1],p[10]=v*o[2*4+2],p[11]=v*o[2*4+3],o!==p&&(p[12]=o[12],p[13]=o[13],p[14]=o[14],p[15]=o[15]),p}return{create:u,set:m,fromMat3:g,fromQuat:w,negate:E,copy:P,clone:M,equalsApproximately:R,equals:G,identity:W,transpose:N,inverse:J,determinant:B,invert:X,multiply:ne,mul:Q,setTranslation:Y,getTranslation:le,getAxis:ve,setAxis:Pe,getScaling:De,perspective:Ie,perspectiveReverseZ:Ne,ortho:Le,frustum:ke,frustumReverseZ:Ye,aim:Ze,cameraAim:$e,lookAt:Ge,translation:re,translate:ce,rotationX:se,rotateX:k,rotationY:te,rotateY:xe,rotationZ:Te,rotateZ:Re,axisRotation:ze,rotation:f,axisRotate:b,rotate:d,scaling:h,scale:S,uniformScaling:L,uniformScale:V}}const ed=new Map;function pm(s){let i=ed.get(s);return i||(i=fm(s),ed.set(s,i)),i}function hm(s){const i=Xs(s);function u(f,b,d,h){const S=new s(4);return f!==void 0&&(S[0]=f,b!==void 0&&(S[1]=b,d!==void 0&&(S[2]=d,h!==void 0&&(S[3]=h)))),S}const m=u;function g(f,b,d,h,S){const L=S??new s(4);return L[0]=f,L[1]=b,L[2]=d,L[3]=h,L}function w(f,b,d){const h=d??new s(4),S=b*.5,L=Math.sin(S);return h[0]=L*f[0],h[1]=L*f[1],h[2]=L*f[2],h[3]=Math.cos(S),h}function E(f,b){const d=b??i.create(3),h=Math.acos(f[3])*2,S=Math.sin(h*.5);return S>Be?(d[0]=f[0]/S,d[1]=f[1]/S,d[2]=f[2]/S):(d[0]=1,d[1]=0,d[2]=0),{angle:h,axis:d}}function P(f,b){const d=ke(f,b);return Math.acos(2*d*d-1)}function M(f,b,d){const h=d??new s(4),S=f[0],L=f[1],V=f[2],o=f[3],v=b[0],c=b[1],p=b[2],x=b[3];return h[0]=S*x+o*v+L*p-V*c,h[1]=L*x+o*c+V*v-S*p,h[2]=V*x+o*p+S*c-L*v,h[3]=o*x-S*v-L*c-V*p,h}const R=M;function G(f,b,d){const h=d??new s(4),S=b*.5,L=f[0],V=f[1],o=f[2],v=f[3],c=Math.sin(S),p=Math.cos(S);return h[0]=L*p+v*c,h[1]=V*p+o*c,h[2]=o*p-V*c,h[3]=v*p-L*c,h}function W(f,b,d){const h=d??new s(4),S=b*.5,L=f[0],V=f[1],o=f[2],v=f[3],c=Math.sin(S),p=Math.cos(S);return h[0]=L*p-o*c,h[1]=V*p+v*c,h[2]=o*p+L*c,h[3]=v*p-V*c,h}function N(f,b,d){const h=d??new s(4),S=b*.5,L=f[0],V=f[1],o=f[2],v=f[3],c=Math.sin(S),p=Math.cos(S);return h[0]=L*p+V*c,h[1]=V*p-L*c,h[2]=o*p+v*c,h[3]=v*p-o*c,h}function J(f,b,d,h){const S=h??new s(4),L=f[0],V=f[1],o=f[2],v=f[3];let c=b[0],p=b[1],x=b[2],D=b[3],H=L*c+V*p+o*x+v*D;H<0&&(H=-H,c=-c,p=-p,x=-x,D=-D);let y,T;if(1-H>Be){const C=Math.acos(H),z=Math.sin(C);y=Math.sin((1-d)*C)/z,T=Math.sin(d*C)/z}else y=1-d,T=d;return S[0]=y*L+T*c,S[1]=y*V+T*p,S[2]=y*o+T*x,S[3]=y*v+T*D,S}function B(f,b){const d=b??new s(4),h=f[0],S=f[1],L=f[2],V=f[3],o=h*h+S*S+L*L+V*V,v=o?1/o:0;return d[0]=-h*v,d[1]=-S*v,d[2]=-L*v,d[3]=V*v,d}function X(f,b){const d=b??new s(4);return d[0]=-f[0],d[1]=-f[1],d[2]=-f[2],d[3]=f[3],d}function ne(f,b){const d=b??new s(4),h=f[0]+f[5]+f[10];if(h>0){const S=Math.sqrt(h+1);d[3]=.5*S;const L=.5/S;d[0]=(f[6]-f[9])*L,d[1]=(f[8]-f[2])*L,d[2]=(f[1]-f[4])*L}else{let S=0;f[5]>f[0]&&(S=1),f[10]>f[S*4+S]&&(S=2);const L=(S+1)%3,V=(S+2)%3,o=Math.sqrt(f[S*4+S]-f[L*4+L]-f[V*4+V]+1);d[S]=.5*o;const v=.5/o;d[3]=(f[L*4+V]-f[V*4+L])*v,d[L]=(f[L*4+S]+f[S*4+L])*v,d[V]=(f[V*4+S]+f[S*4+V])*v}return d}function Q(f,b,d,h,S){const L=S??new s(4),V=f*.5,o=b*.5,v=d*.5,c=Math.sin(V),p=Math.cos(V),x=Math.sin(o),D=Math.cos(o),H=Math.sin(v),y=Math.cos(v);switch(h){case"xyz":L[0]=c*D*y+p*x*H,L[1]=p*x*y-c*D*H,L[2]=p*D*H+c*x*y,L[3]=p*D*y-c*x*H;break;case"xzy":L[0]=c*D*y-p*x*H,L[1]=p*x*y-c*D*H,L[2]=p*D*H+c*x*y,L[3]=p*D*y+c*x*H;break;case"yxz":L[0]=c*D*y+p*x*H,L[1]=p*x*y-c*D*H,L[2]=p*D*H-c*x*y,L[3]=p*D*y+c*x*H;break;case"yzx":L[0]=c*D*y+p*x*H,L[1]=p*x*y+c*D*H,L[2]=p*D*H-c*x*y,L[3]=p*D*y-c*x*H;break;case"zxy":L[0]=c*D*y-p*x*H,L[1]=p*x*y+c*D*H,L[2]=p*D*H+c*x*y,L[3]=p*D*y-c*x*H;break;case"zyx":L[0]=c*D*y-p*x*H,L[1]=p*x*y+c*D*H,L[2]=p*D*H-c*x*y,L[3]=p*D*y+c*x*H;break;default:throw new Error(`Unknown rotation order: ${h}`)}return L}function Y(f,b){const d=b??new s(4);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[3]=f[3],d}const le=Y;function ve(f,b,d){const h=d??new s(4);return h[0]=f[0]+b[0],h[1]=f[1]+b[1],h[2]=f[2]+b[2],h[3]=f[3]+b[3],h}function Pe(f,b,d){const h=d??new s(4);return h[0]=f[0]-b[0],h[1]=f[1]-b[1],h[2]=f[2]-b[2],h[3]=f[3]-b[3],h}const De=Pe;function Ie(f,b,d){const h=d??new s(4);return h[0]=f[0]*b,h[1]=f[1]*b,h[2]=f[2]*b,h[3]=f[3]*b,h}const Ne=Ie;function Le(f,b,d){const h=d??new s(4);return h[0]=f[0]/b,h[1]=f[1]/b,h[2]=f[2]/b,h[3]=f[3]/b,h}function ke(f,b){return f[0]*b[0]+f[1]*b[1]+f[2]*b[2]+f[3]*b[3]}function Ye(f,b,d,h){const S=h??new s(4);return S[0]=f[0]+d*(b[0]-f[0]),S[1]=f[1]+d*(b[1]-f[1]),S[2]=f[2]+d*(b[2]-f[2]),S[3]=f[3]+d*(b[3]-f[3]),S}function Ee(f){const b=f[0],d=f[1],h=f[2],S=f[3];return Math.sqrt(b*b+d*d+h*h+S*S)}const Ue=Ee;function Se(f){const b=f[0],d=f[1],h=f[2],S=f[3];return b*b+d*d+h*h+S*S}const Ze=Se;function $e(f,b){const d=b??new s(4),h=f[0],S=f[1],L=f[2],V=f[3],o=Math.sqrt(h*h+S*S+L*L+V*V);return o>1e-5?(d[0]=h/o,d[1]=S/o,d[2]=L/o,d[3]=V/o):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function Ge(f,b){return Math.abs(f[0]-b[0])<Be&&Math.abs(f[1]-b[1])<Be&&Math.abs(f[2]-b[2])<Be&&Math.abs(f[3]-b[3])<Be}function re(f,b){return f[0]===b[0]&&f[1]===b[1]&&f[2]===b[2]&&f[3]===b[3]}function ce(f){const b=f??new s(4);return b[0]=0,b[1]=0,b[2]=0,b[3]=1,b}const se=i.create(),k=i.create(),te=i.create();function xe(f,b,d){const h=d??new s(4),S=i.dot(f,b);return S<-.999999?(i.cross(k,f,se),i.len(se)<1e-6&&i.cross(te,f,se),i.normalize(se,se),w(se,Math.PI,h),h):S>.999999?(h[0]=0,h[1]=0,h[2]=0,h[3]=1,h):(i.cross(f,b,se),h[0]=se[0],h[1]=se[1],h[2]=se[2],h[3]=1+S,$e(h,h))}const Te=new s(4),Re=new s(4);function ze(f,b,d,h,S,L){const V=L??new s(4);return J(f,h,S,Te),J(b,d,S,Re),J(Te,Re,2*S*(1-S),V),V}return{create:u,fromValues:m,set:g,fromAxisAngle:w,toAxisAngle:E,angle:P,multiply:M,mul:R,rotateX:G,rotateY:W,rotateZ:N,slerp:J,inverse:B,conjugate:X,fromMat:ne,fromEuler:Q,copy:Y,clone:le,add:ve,subtract:Pe,sub:De,mulScalar:Ie,scale:Ne,divScalar:Le,dot:ke,lerp:Ye,length:Ee,len:Ue,lengthSq:Se,lenSq:Ze,normalize:$e,equalsApproximately:Ge,equals:re,identity:ce,rotationTo:xe,sqlerp:ze}}const td=new Map;function mm(s){let i=td.get(s);return i||(i=hm(s),td.set(s,i)),i}function gm(s){function i(d,h,S,L){const V=new s(4);return d!==void 0&&(V[0]=d,h!==void 0&&(V[1]=h,S!==void 0&&(V[2]=S,L!==void 0&&(V[3]=L)))),V}const u=i;function m(d,h,S,L,V){const o=V??new s(4);return o[0]=d,o[1]=h,o[2]=S,o[3]=L,o}function g(d,h){const S=h??new s(4);return S[0]=Math.ceil(d[0]),S[1]=Math.ceil(d[1]),S[2]=Math.ceil(d[2]),S[3]=Math.ceil(d[3]),S}function w(d,h){const S=h??new s(4);return S[0]=Math.floor(d[0]),S[1]=Math.floor(d[1]),S[2]=Math.floor(d[2]),S[3]=Math.floor(d[3]),S}function E(d,h){const S=h??new s(4);return S[0]=Math.round(d[0]),S[1]=Math.round(d[1]),S[2]=Math.round(d[2]),S[3]=Math.round(d[3]),S}function P(d,h=0,S=1,L){const V=L??new s(4);return V[0]=Math.min(S,Math.max(h,d[0])),V[1]=Math.min(S,Math.max(h,d[1])),V[2]=Math.min(S,Math.max(h,d[2])),V[3]=Math.min(S,Math.max(h,d[3])),V}function M(d,h,S){const L=S??new s(4);return L[0]=d[0]+h[0],L[1]=d[1]+h[1],L[2]=d[2]+h[2],L[3]=d[3]+h[3],L}function R(d,h,S,L){const V=L??new s(4);return V[0]=d[0]+h[0]*S,V[1]=d[1]+h[1]*S,V[2]=d[2]+h[2]*S,V[3]=d[3]+h[3]*S,V}function G(d,h,S){const L=S??new s(4);return L[0]=d[0]-h[0],L[1]=d[1]-h[1],L[2]=d[2]-h[2],L[3]=d[3]-h[3],L}const W=G;function N(d,h){return Math.abs(d[0]-h[0])<Be&&Math.abs(d[1]-h[1])<Be&&Math.abs(d[2]-h[2])<Be&&Math.abs(d[3]-h[3])<Be}function J(d,h){return d[0]===h[0]&&d[1]===h[1]&&d[2]===h[2]&&d[3]===h[3]}function B(d,h,S,L){const V=L??new s(4);return V[0]=d[0]+S*(h[0]-d[0]),V[1]=d[1]+S*(h[1]-d[1]),V[2]=d[2]+S*(h[2]-d[2]),V[3]=d[3]+S*(h[3]-d[3]),V}function X(d,h,S,L){const V=L??new s(4);return V[0]=d[0]+S[0]*(h[0]-d[0]),V[1]=d[1]+S[1]*(h[1]-d[1]),V[2]=d[2]+S[2]*(h[2]-d[2]),V[3]=d[3]+S[3]*(h[3]-d[3]),V}function ne(d,h,S){const L=S??new s(4);return L[0]=Math.max(d[0],h[0]),L[1]=Math.max(d[1],h[1]),L[2]=Math.max(d[2],h[2]),L[3]=Math.max(d[3],h[3]),L}function Q(d,h,S){const L=S??new s(4);return L[0]=Math.min(d[0],h[0]),L[1]=Math.min(d[1],h[1]),L[2]=Math.min(d[2],h[2]),L[3]=Math.min(d[3],h[3]),L}function Y(d,h,S){const L=S??new s(4);return L[0]=d[0]*h,L[1]=d[1]*h,L[2]=d[2]*h,L[3]=d[3]*h,L}const le=Y;function ve(d,h,S){const L=S??new s(4);return L[0]=d[0]/h,L[1]=d[1]/h,L[2]=d[2]/h,L[3]=d[3]/h,L}function Pe(d,h){const S=h??new s(4);return S[0]=1/d[0],S[1]=1/d[1],S[2]=1/d[2],S[3]=1/d[3],S}const De=Pe;function Ie(d,h){return d[0]*h[0]+d[1]*h[1]+d[2]*h[2]+d[3]*h[3]}function Ne(d){const h=d[0],S=d[1],L=d[2],V=d[3];return Math.sqrt(h*h+S*S+L*L+V*V)}const Le=Ne;function ke(d){const h=d[0],S=d[1],L=d[2],V=d[3];return h*h+S*S+L*L+V*V}const Ye=ke;function Ee(d,h){const S=d[0]-h[0],L=d[1]-h[1],V=d[2]-h[2],o=d[3]-h[3];return Math.sqrt(S*S+L*L+V*V+o*o)}const Ue=Ee;function Se(d,h){const S=d[0]-h[0],L=d[1]-h[1],V=d[2]-h[2],o=d[3]-h[3];return S*S+L*L+V*V+o*o}const Ze=Se;function $e(d,h){const S=h??new s(4),L=d[0],V=d[1],o=d[2],v=d[3],c=Math.sqrt(L*L+V*V+o*o+v*v);return c>1e-5?(S[0]=L/c,S[1]=V/c,S[2]=o/c,S[3]=v/c):(S[0]=0,S[1]=0,S[2]=0,S[3]=0),S}function Ge(d,h){const S=h??new s(4);return S[0]=-d[0],S[1]=-d[1],S[2]=-d[2],S[3]=-d[3],S}function re(d,h){const S=h??new s(4);return S[0]=d[0],S[1]=d[1],S[2]=d[2],S[3]=d[3],S}const ce=re;function se(d,h,S){const L=S??new s(4);return L[0]=d[0]*h[0],L[1]=d[1]*h[1],L[2]=d[2]*h[2],L[3]=d[3]*h[3],L}const k=se;function te(d,h,S){const L=S??new s(4);return L[0]=d[0]/h[0],L[1]=d[1]/h[1],L[2]=d[2]/h[2],L[3]=d[3]/h[3],L}const xe=te;function Te(d){const h=d??new s(4);return h[0]=0,h[1]=0,h[2]=0,h[3]=0,h}function Re(d,h,S){const L=S??new s(4),V=d[0],o=d[1],v=d[2],c=d[3];return L[0]=h[0]*V+h[4]*o+h[8]*v+h[12]*c,L[1]=h[1]*V+h[5]*o+h[9]*v+h[13]*c,L[2]=h[2]*V+h[6]*o+h[10]*v+h[14]*c,L[3]=h[3]*V+h[7]*o+h[11]*v+h[15]*c,L}function ze(d,h,S){const L=S??new s(4);return $e(d,L),Y(L,h,L)}function f(d,h,S){const L=S??new s(4);return Ne(d)>h?ze(d,h,L):re(d,L)}function b(d,h,S){const L=S??new s(4);return B(d,h,.5,L)}return{create:i,fromValues:u,set:m,ceil:g,floor:w,round:E,clamp:P,add:M,addScaled:R,subtract:G,sub:W,equalsApproximately:N,equals:J,lerp:B,lerpV:X,max:ne,min:Q,mulScalar:Y,scale:le,divScalar:ve,inverse:Pe,invert:De,dot:Ie,length:Ne,len:Le,lengthSq:ke,lenSq:Ye,distance:Ee,dist:Ue,distanceSq:Se,distSq:Ze,normalize:$e,negate:Ge,copy:re,clone:ce,multiply:se,mul:k,divide:te,div:xe,zero:Te,transformMat4:Re,setLength:ze,truncate:f,midpoint:b}}const nd=new Map;function _m(s){let i=nd.get(s);return i||(i=gm(s),nd.set(s,i)),i}function rl(s,i,u,m,g,w){return{mat3:dm(s),mat4:pm(i),quat:mm(u),vec2:Ud(m),vec3:Xs(g),vec4:_m(w)}}const{mat3:Ng,mat4:Ot,quat:Og,vec2:Gr,vec3:Oe,vec4:$t}=rl(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);rl(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);rl(om,Array,Array,Array,Array,Array);const vm=new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]);class ym{constructor(i,u){j(this,"device");j(this,"presentFormat");j(this,"quit",!1);j(this,"pipeline");j(this,"vertexBuffer");j(this,"indexBuffer");j(this,"indexCount");j(this,"projViewModelBuffer");j(this,"projViewModelBindGroup");j(this,"supportedFeatures");this.device=i,this.presentFormat=u,this.supportedFeatures=i.features;const m=this.device.createShaderModule({code:sm}),g=new Float32Array([-1,-1,-1,1,0,0,0,1,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,-1,1,-1,1,0,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1]),w=new Uint32Array([0,1,2,0,2,3,1,5,6,1,6,2,2,6,7,2,7,3,4,7,6,4,6,5,0,3,7,0,7,4,0,4,5,0,5,1]);this.indexCount=w.length,this.vertexBuffer=this.device.createBuffer({size:g.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,g,0,g.length);const E=[{attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}],arrayStride:2*16,stepMode:"vertex"}];this.indexBuffer=this.device.createBuffer({size:w.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,w,0,w.length);const P=16*4;this.projViewModelBuffer=this.device.createBuffer({size:P,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const M=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.projViewModelBindGroup=this.device.createBindGroup({layout:M,entries:[{binding:0,resource:{buffer:this.projViewModelBuffer}}]});const R={vertex:{module:m,entryPoint:"vertex_main",buffers:E},fragment:{module:m,entryPoint:"fragment_main",targets:[{format:this.presentFormat}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},layout:this.device.createPipelineLayout({bindGroupLayouts:[M]})};this.pipeline=this.device.createRenderPipeline(R)}setupUI(i){vm.forEach(u=>{const m=this.supportedFeatures.has(u);i.add({enabled:m},"enabled").name(u).disable(!0)})}draw(i,u,m){const g=i.createView(),w=60*Math.PI/180,M=Ot.perspective(w,u,.1,1e3),R=[3,5,10],G=[0,0,0],W=[0,1,0],N=Ot.lookAt(R,G,W),J=Ot.axisRotation([1,1,0],m/1e3),B=Ot.mul(M,Ot.mul(N,J));this.device.queue.writeBuffer(this.projViewModelBuffer,0,B,0,B.length);const X=this.device.createCommandEncoder(),ne={r:.5,g:.5,b:.5,a:0},Q=X.beginRenderPass({colorAttachments:[{clearValue:ne,loadOp:"clear",storeOp:"store",view:g}]});Q.setPipeline(this.pipeline),Q.setVertexBuffer(0,this.vertexBuffer),Q.setIndexBuffer(this.indexBuffer,"uint32",0,this.indexBuffer.size),Q.setBindGroup(0,this.projViewModelBindGroup),Q.drawIndexed(this.indexCount,1,0,0,0),Q.end(),this.device.queue.submit([X.finish()])}}const wm=(s,i,u)=>new ym(s,i),Cd=4;class Ks{constructor(i,u,m){j(this,"buffer");this.buffer=i.createBuffer({size:u*Cd,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM,label:m})}writeToGPU(i){const u=this.packed();u.byteLength!=this.buffer.size&&console.warn(`GPUBuffer label: '${this.buffer.label}' uploaded with improper size. Expected: ${this.buffer.size} bytes, got ${u.byteLength} bytes.`),i.queue.writeBuffer(this.buffer,0,u)}}function xm(){return{rayleighMm:{scattering:Oe.create(5.802,13.558,33.1),absorption:Oe.create(0,0,0),densityScale:.008},mieMm:{scattering:Oe.create(3.996,3.996,3.996),absorption:Oe.create(4.4,4.4,4.4),densityScale:.0012},ozoneMm:{scattering:Oe.create(0,0,0),absorption:Oe.create(.65,1.881,.085)},planetRadiusMm:6.36,atmosphereRadiusMm:6.42,groundAlbedo:Oe.create(.3*1,.3*.75,.3*.4)}}function Tm(){return{color:Oe.create(1,1,1),strength:60,forward:Oe.create(0,-1,0),angularRadius:16/60*(3.141592653589793/180)}}const Sm=16,Em=128,Mm=16,bm=32,Pm=16,Am=256,Rm=16,Lm=16;function Um(s,i){return Math.ceil(i/s)*s}const Cm=Math.max(Sm,Mm,Pm,Rm),Dm=Um(Cm,Em+bm+Am+Lm);class zm extends Ks{constructor(u){super(u,Dm/Cd,"Global UBO");j(this,"data",{atmosphere:xm(),light:Tm(),camera:{invProj:Ot.identity(),invView:Ot.identity(),projView:Ot.identity(),position:$t.create(0,0,0,1)},time:{timeSeconds:0}})}packed(){const u=new Float32Array(3).fill(0),m=new Float32Array(4).fill(0),g=new Float32Array(4*3).fill(0),w=this.data.atmosphere,E=w.rayleighMm,P=w.mieMm,M=new Float32Array([...E.scattering,E.densityScale,...E.absorption,w.planetRadiusMm,...P.scattering,P.densityScale,...P.absorption,w.atmosphereRadiusMm,...w.groundAlbedo,0,...w.ozoneMm.scattering,0,...w.ozoneMm.absorption,0,...m]),R=this.data.light,G=new Float32Array([...R.color,R.strength,...R.forward,R.angularRadius]),W=this.data.camera,N=new Float32Array([...W.invProj,...W.invView,...W.projView,...W.position,...g]),J=this.data.time,B=new Float32Array([...u,J.timeSeconds]);return new Float32Array([...N,...M,...G,...B])}}class Im{constructor(){j(this,"color_gain",$t.create(1,1,1,1));j(this,"vertex_scale",$t.create(1,1,1,1))}}class km extends Ks{constructor(u){super(u,8,"Fullscreen Quad UBO");j(this,"data",{color_gain:$t.create(1,1,1,1),vertex_scale:$t.create(1,1,1,1)})}packed(){return new Float32Array([...this.data.color_gain,...this.data.vertex_scale])}}var He=(s=>(s[s.SkyviewLUT=0]="SkyviewLUT",s[s.TransmittanceLUT=1]="TransmittanceLUT",s[s.MultiscatterLUT=2]="MultiscatterLUT",s[s.Scene=3]="Scene",s[s.GBufferColor=4]="GBufferColor",s[s.GBufferNormal=5]="GBufferNormal",s[s.FFTWaveSpectrumGaussianNoise=6]="FFTWaveSpectrumGaussianNoise",s[s.FFTWaveFourierAmplitude=7]="FFTWaveFourierAmplitude",s[s.FFTWaveAmplitude_Dy=8]="FFTWaveAmplitude_Dy",s[s.FFTWaveAmplitude_Dx_plus_iDz=9]="FFTWaveAmplitude_Dx_plus_iDz",s[s.FFTWaveDisplacement=10]="FFTWaveDisplacement",s))(He||{}),dn=(s=>(s[s.Cosine=0]="Cosine",s[s.Gerstner=1]="Gerstner",s[s.FFTDisplacement=2]="FFTDisplacement",s))(dn||{});const rd="rgba16float",Nm="float",Om="depth32float",id="rgba16float",Fm="float";class sd{constructor(i,u,m){j(this,"colorWithDepthInAlpha");j(this,"colorWithDepthInAlphaView");j(this,"normal");j(this,"normalView");j(this,"depth");j(this,"depthView");j(this,"readGroupLayout");j(this,"readGroup");j(this,"writeGroupLayout");j(this,"writeGroup");this.colorWithDepthInAlpha=i.createTexture({size:u,dimension:"2d",format:rd,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer ColorWithDepthInAlpha"}),this.colorWithDepthInAlphaView=this.colorWithDepthInAlpha.createView({label:"GBuffer ColorWithDepthInAlpha"}),this.normal=i.createTexture({size:u,dimension:"2d",format:id,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Normal"}),this.normalView=this.normal.createView({label:"GBuffer Normal"}),this.readGroupLayout=(m==null?void 0:m.readGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Nm}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Fm}}],label:"GBuffer Read Group Layout"}),this.readGroup=i.createBindGroup({layout:this.readGroupLayout,entries:[{binding:0,resource:this.colorWithDepthInAlphaView},{binding:1,resource:this.normalView}],label:"GBuffer Read Group"}),this.writeGroupLayout=(m==null?void 0:m.writeGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:rd}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:id}}],label:"GBuffer Write Group Layout"}),this.writeGroup=i.createBindGroup({layout:this.writeGroupLayout,entries:[{binding:0,resource:this.colorWithDepthInAlphaView},{binding:1,resource:this.normalView}],label:"GBuffer Write Group"}),this.depth=i.createTexture({size:u,dimension:"2d",format:Om,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Depth"}),this.depthView=this.depth.createView({label:"GBuffer Depth"})}}const Gm=`// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	padding0: mat3x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec3<f32>,
	time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 128 + 32 + 256 + 16 = 432 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera, // offset 128 + 32
	atmosphere: Atmosphere, // offset 0
	light: CelestialLight, // offset 128
	time: Time, // offset 128 + 32 + 256
}


@group(0) @binding(0) var transmittance_lut: texture_storage_2d<rgba32float, write>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH = 2048u;
const TRANSMITTANCE_LUT_HEIGHT = 1024u;

const MULTISCATTER_LUT_WIDTH = 1024u;
const MULTISCATTER_LUT_HEIGHT = 1024u;

const SKYVIEW_LUT_WIDTH = 1024u;
const SKYVIEW_LUT_HEIGHT = 512u;

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
    let atmosphere_radius_Mm_squared: f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared: f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planet_radius_Mm_squared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphere_radius_Mm_squared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphere_radius_Mm - radius;
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

    let atmosphere_radius_Mm_squared : f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared : f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planet_radius_Mm_squared);

    let d_min : f32 = (*atmosphere).atmosphere_radius_Mm - radius;
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
    // Equivalently, mu = (atmosphere_radius_Mm_squared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmosphere_radius_Mm_squared and radius * radius are large, so this avoids floating point errors from adding
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
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
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
        (*atmosphere).planet_radius_Mm * (1.0002),
        (*atmosphere).atmosphere_radius_Mm * (0.9998),
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32
) -> vec3<f32>
{
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
        (*atmosphere).planet_radius_Mm, (*atmosphere).atmosphere_radius_Mm
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
    scattering_rayleigh: vec3<f32>,
    scattering_mie: vec3<f32>,
    scattering_ozone: vec3<f32>,

    absorption_rayleigh: vec3<f32>,
    absorption_mie: vec3<f32>,
    absorption_ozone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and density_scale are the same units.
fn densityExponential(altitude: f32, density_scale: f32) -> f32
{ return exp(-altitude / density_scale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let density_rayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_rayleigh_Mm);
    let scattering_rayleigh: vec3<f32> = (*atmosphere).scattering_rayleigh_per_Mm * density_rayleigh;
    let absorption_rayleigh: vec3<f32> = (*atmosphere).absorption_rayleigh_per_Mm * density_rayleigh;

    let density_mie: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_mie_Mm);
    let scattering_mie: vec3<f32> = (*atmosphere).scattering_mie_per_Mm * density_mie;
    let absorption_mie: vec3<f32> = (*atmosphere).absorption_mie_per_Mm * density_mie;

    let density_ozone: f32 = densityTent(altitude_Mm * 1000.0);
    let scattering_ozone: vec3<f32> = (*atmosphere).scattering_ozone_per_Mm * density_ozone;
    let absorption_ozone: vec3<f32> = (*atmosphere).absorption_ozone_per_Mm * density_ozone;

    var extinction_sample: ExtinctionSample;
    extinction_sample.scattering_rayleigh = scattering_rayleigh;
    extinction_sample.scattering_mie = scattering_mie;
    extinction_sample.scattering_ozone = scattering_ozone;

    extinction_sample.absorption_rayleigh = absorption_rayleigh;
    extinction_sample.absorption_mie = absorption_mie;
    extinction_sample.absorption_ozone = absorption_ozone;

    extinction_sample.scattering = scattering_rayleigh + scattering_mie + scattering_ozone;
    extinction_sample.extinction = extinction_sample.scattering + absorption_rayleigh + absorption_mie + absorption_ozone;

    return extinction_sample;
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
    let center_to_intersection_chord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(center_to_intersection_chord, center_to_intersection_chord);
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

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
    // Cosine of the angle with the direction to the light
    mu_light: f32,
    // Cosine of travel direction vector and light direction vector
    nu: f32,
};

// Returns 'start' moved 'step_distance' units along the implicit direction vector
// nu is the dot product between normalized direction and light direction vector
fn stepRadiusMu(
    start: RaymarchStep,
    step_distance: f32,
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        step_distance * step_distance + 2.0 * start.radius * start.mu * step_distance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + step_distance) / result.radius;
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + step_distance * start.nu) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    step_distance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (step_distance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, step_distance);

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


// See 'atmosphere_common.inc.wgsl' for sources on what this method is based on.

// Transmittance LUT
//
// This map builds a transmittance LUT, a map of the transmittance of light interacting with the atmosphere parameterized by altitude and facing direction.
// This map depends entirely on the atmosphere's parameters, and NOT on any lights, cameras, or geometry.

const SAMPLE_COUNT: u32 = 500;

@compute @workgroup_size(16, 16, 1)
fn computeTransmittance(@builtin(global_invocation_id) global_id : vec3<u32>,)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(transmittance_lut);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        return;
    }
    var atmosphere: Atmosphere = u_global.atmosphere;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    let r_mu: vec2<f32> = transmittanceLUT_UV_to_RMu(&atmosphere, uv);

    let radius: f32 = r_mu.x;
    let direction_cosine: f32 = r_mu.y;

    let origin: vec3<f32> = vec3<f32>(0.0, radius, 0.0);
    let direction: vec3<f32> = vec3<f32>(sqrt(1.0 - direction_cosine * direction_cosine), direction_cosine, 0.0);

    let atmosphere_hit: RaySphereHit = raySphereIntersection(origin, direction, atmosphere.atmosphere_radius_Mm);
    // Could maybe skip this check, since our parameters guarantee we start within the atmosphere
    if(!atmosphere_hit.hit)
    {
        textureStore(transmittance_lut, texel_coord, vec4<f32>(1.0, 1.0, 1.0, 1.0));
        return;
    }

    let distance: f32 = atmosphere_hit.t1;

    var transmittance: vec3<f32> = vec3<f32>(1.0);

    let dt: f32 = distance / f32(SAMPLE_COUNT);
    for(var i: u32 = 0; i < SAMPLE_COUNT; i++)
    {
        let t: f32 = distance * (f32(i) + 0.5) / f32(SAMPLE_COUNT);
        let position: vec3<f32> = origin + t * direction;
        let altitude: f32 = length(position) - atmosphere.planet_radius_Mm;

        let extinction_sample: ExtinctionSample = sampleExtinction(&atmosphere, altitude);

        transmittance *= exp(-abs(dt) * extinction_sample.extinction);
    }

    textureStore(transmittance_lut, texel_coord, vec4<f32>(transmittance, 1.0));
}
`,Bm="rgba32float";class Wm{constructor(i,u,m){j(this,"texture");j(this,"view");j(this,"group0");j(this,"group1");j(this,"pipeline");this.texture=i.createTexture({size:u,dimension:"2d",format:Bm,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Transmittance LUT"}),this.view=this.texture.createView({label:"Transmittance LUT"});const g=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:this.texture.format}}],label:"Transmittance LUT Group 0"});this.group0=i.createBindGroup({layout:g,entries:[{binding:0,resource:this.view}],label:"Transmittance LUT Group 0"});const w=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Transmittance LUT Group 1"});this.group1=i.createBindGroup({layout:w,entries:[{binding:0,resource:{buffer:m.buffer}}],label:"Transmittance LUT Group 1"});const E=i.createShaderModule({code:Gm,label:"Transmittance LUT"});this.pipeline=i.createComputePipeline({compute:{module:E,entryPoint:"computeTransmittance"},layout:i.createPipelineLayout({bindGroupLayouts:[g,w]}),label:"Transmittance LUT"})}}const Vm=`// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	padding0: mat3x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec3<f32>,
	time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 128 + 32 + 256 + 16 = 432 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera, // offset 128 + 32
	atmosphere: Atmosphere, // offset 0
	light: CelestialLight, // offset 128
	time: Time, // offset 128 + 32 + 256
}


@group(0) @binding(0) var multiscatter_lut: texture_storage_2d<rgba32float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH = 2048u;
const TRANSMITTANCE_LUT_HEIGHT = 1024u;

const MULTISCATTER_LUT_WIDTH = 1024u;
const MULTISCATTER_LUT_HEIGHT = 1024u;

const SKYVIEW_LUT_WIDTH = 1024u;
const SKYVIEW_LUT_HEIGHT = 512u;

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
    let atmosphere_radius_Mm_squared: f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared: f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planet_radius_Mm_squared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphere_radius_Mm_squared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphere_radius_Mm - radius;
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

    let atmosphere_radius_Mm_squared : f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared : f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planet_radius_Mm_squared);

    let d_min : f32 = (*atmosphere).atmosphere_radius_Mm - radius;
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
    // Equivalently, mu = (atmosphere_radius_Mm_squared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmosphere_radius_Mm_squared and radius * radius are large, so this avoids floating point errors from adding
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
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
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
        (*atmosphere).planet_radius_Mm * (1.0002),
        (*atmosphere).atmosphere_radius_Mm * (0.9998),
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32
) -> vec3<f32>
{
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
        (*atmosphere).planet_radius_Mm, (*atmosphere).atmosphere_radius_Mm
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
    scattering_rayleigh: vec3<f32>,
    scattering_mie: vec3<f32>,
    scattering_ozone: vec3<f32>,

    absorption_rayleigh: vec3<f32>,
    absorption_mie: vec3<f32>,
    absorption_ozone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and density_scale are the same units.
fn densityExponential(altitude: f32, density_scale: f32) -> f32
{ return exp(-altitude / density_scale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let density_rayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_rayleigh_Mm);
    let scattering_rayleigh: vec3<f32> = (*atmosphere).scattering_rayleigh_per_Mm * density_rayleigh;
    let absorption_rayleigh: vec3<f32> = (*atmosphere).absorption_rayleigh_per_Mm * density_rayleigh;

    let density_mie: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_mie_Mm);
    let scattering_mie: vec3<f32> = (*atmosphere).scattering_mie_per_Mm * density_mie;
    let absorption_mie: vec3<f32> = (*atmosphere).absorption_mie_per_Mm * density_mie;

    let density_ozone: f32 = densityTent(altitude_Mm * 1000.0);
    let scattering_ozone: vec3<f32> = (*atmosphere).scattering_ozone_per_Mm * density_ozone;
    let absorption_ozone: vec3<f32> = (*atmosphere).absorption_ozone_per_Mm * density_ozone;

    var extinction_sample: ExtinctionSample;
    extinction_sample.scattering_rayleigh = scattering_rayleigh;
    extinction_sample.scattering_mie = scattering_mie;
    extinction_sample.scattering_ozone = scattering_ozone;

    extinction_sample.absorption_rayleigh = absorption_rayleigh;
    extinction_sample.absorption_mie = absorption_mie;
    extinction_sample.absorption_ozone = absorption_ozone;

    extinction_sample.scattering = scattering_rayleigh + scattering_mie + scattering_ozone;
    extinction_sample.extinction = extinction_sample.scattering + absorption_rayleigh + absorption_mie + absorption_ozone;

    return extinction_sample;
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
    let center_to_intersection_chord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(center_to_intersection_chord, center_to_intersection_chord);
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

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
    // Cosine of the angle with the direction to the light
    mu_light: f32,
    // Cosine of travel direction vector and light direction vector
    nu: f32,
};

// Returns 'start' moved 'step_distance' units along the implicit direction vector
// nu is the dot product between normalized direction and light direction vector
fn stepRadiusMu(
    start: RaymarchStep,
    step_distance: f32,
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        step_distance * step_distance + 2.0 * start.radius * start.mu * step_distance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + step_distance) / result.radius;
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + step_distance * start.nu) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    step_distance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (step_distance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, step_distance);

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

// Contains methods and overloads for raymarching the atmosphere

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE HIGH_SAMPLE_COUNT SAMPLE_PATH_TRANSMITTANCE

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

HIGH_SAMPLE_COUNT
- Whether to use a much higher sample count. Useful for one time renders, like the multiscattering LUT.

SAMPLE_PATH_TRANSMITTANCE
- Instead of accumulating transmittance along the raymarched path, sample the transmittance LUT.
- This adds ~ 6 * N + 2 samples of the transmittance LUT texture, where N is the sample count
- The results are subtly different, the transmittance LUT has precision issues when trying to sample intervals due to needing to multiply and divide by nearly zero floats when near the horizon
- By default this should be left off, we're raymarching extinction samples while integrating so sampling the transmittance LUT for the main path ends up being wasteful
*/

// Make sure to include atmosphere_common first

const T_SUBSTEP_NONLINEAR = 0.4;
const T_SUBSTEP_LINEAR = 0.2;

struct AtmosphereRaycastResult
{
	// Whether or not the raycast resulted in hitting the planet
	// This is important for sampling the transmittance lut
	intersects_ground: bool,

	// The origin of the raycast can be outside the atmosphere, inside the planet, etc so we get an interval
	t_min: f32,
	t_max: f32,
}

fn raycastAtmosphere(atmosphere: ptr<function, Atmosphere>, origin: vec3<f32>, direction: vec3<f32>) -> AtmosphereRaycastResult
{
	var result: AtmosphereRaycastResult;

    let planet_hit = raySphereIntersection(origin, direction, (*atmosphere).planet_radius_Mm);
    let atmosphere_hit = raySphereIntersection(origin, direction, (*atmosphere).atmosphere_radius_Mm);

    let inside_planet = planet_hit.hit && planet_hit.t0 < 0.0 && planet_hit.t1 > 0.0;
    let intersects_atmosphere = atmosphere_hit.hit && atmosphere_hit.t1 > 0.0;
    if (!intersects_atmosphere || inside_planet)
    {
		result.intersects_ground = true;
		result.t_min = 0.0;
		result.t_max = 0.0;
        return result;
    }

	// Optimistic, assume we don't hit planet and take the atmosphere_hit interval as-is
	result.t_min = max(atmosphere_hit.t0, 0.0);
	result.t_max = atmosphere_hit.t1;

    // Assuming the planet was hit, we have atmosphere_hit.t0 < planet_hit.t0 < planet_hit.t1 < atmosphere_hit.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

    if (planet_hit.hit && planet_hit.t0 > 0.0)
    {
		result.intersects_ground = true;

		// We assume the planet, if hit, is ALWAYS closer than the further edge of the atmosphere
		// So the next line is redundant and we use the simpler, uncommented form
		// result.t_max = min(planet_hit.t0, result.t_max)

        result.t_max = planet_hit.t0;
    }

	return result;
}

struct ScatteringResult
{
    luminance: vec3<f32>,
    multiscattering_transfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?

// Returns the computed single-scattered luminance from origin to origin + direction * sample_distance
//
// include_ground: Whether to include the luminance from the planet's virtual surface
//
// intersects_ground: Whether or not the provided origin/direction intersect the planet's surface.
// 	This could just be computed internally, but often the calling code is more informed and passing this avoids redundant calculations.
//
// If include_ground is TRUE, then sample_distance is assumed to go to the planet's surface.
// If include_ground is TRUE, intersects_ground must also be true for out-scattering of surface to be included.
// A misuse of 'include_ground', 'intersects_ground', and 'sample_distance' (such as the wrong distance) will lead to incorrect results.
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,
    lut_sampler: sampler,
    transmittance_lut: texture_2d<f32>,
    origin: vec3<f32>,
    direction: vec3<f32>,
    include_ground: bool,
	intersects_ground: bool,
	sample_distance: f32,
) -> ScatteringResult
{
    var result: ScatteringResult;
    result.luminance = vec3<f32>(0.0);
    result.multiscattering_transfer = vec3<f32>(0.0);

	if(sample_distance <= 0.0)
	{
		return result;
	}

    // This is the direction of the incoming light, which is the light we are interested in computing the magnitude of.
    // This is the parameter of the phase functions
	let incident_cosine = dot((*light).forward, -direction);

    let start_radius: f32 = length(origin);
    let start_mu: f32 = dot(origin, direction) / (length(origin) * length(direction));
    let start_mu_light: f32 = dot(origin, -(*light).forward) / (length(origin) * length((*light).forward));
    let nu: f32 = dot(-(*light).forward, direction) / (length((*light).forward) * length(direction));

    let origin_step = RaymarchStep(start_radius, start_mu, start_mu_light, nu);

	var transmittance_accumulated = vec3<f32>(1.0);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT = 256.0;

	var t: f32 = 0.0;
	var d_t: f32 = 0.0;
    for (var s = 0.0; s < SAMPLE_COUNT; s += 1.0)
    {
		{
			// linear distribution
			let t_new = sample_distance * (s + T_SUBSTEP_LINEAR) / SAMPLE_COUNT;
			d_t = t_new - t;
			t = t_new;
		}

        let sample_step: RaymarchStep = stepRadiusMu(origin_step, t);

        let altitude = sample_step.radius - (*atmosphere).planet_radius_Mm;
        let extinction_sample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

	    let transmittance_to_t_begin = transmittance_accumulated;
		let transmittance_along_path = exp(-extinction_sample.extinction * d_t);
		transmittance_accumulated *= transmittance_along_path;

        let phase_times_scattering = extinction_sample.scattering * ISOTROPIC_PHASE;

        let multiscatter = vec3<f32>(0.0);

        var occlusion_planet: f32 = 0.0;
        {
            let horizon_sin = (*atmosphere).planet_radius_Mm / sample_step.radius;
            let horizon_cos = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            occlusion_planet = f32(sample_step.mu_light < horizon_cos);
        }

        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);
        var shadowing = vec3<f32>(transmittance_to_sun * (1.0 - f32(occlusion_planet)));

        // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
        // This is a single interval of the integral in Equation (1) from Hillaire's paper,
        // with all constant terms factored out above
        let scattering_illuminance_integral = (vec3(1.0) - transmittance_along_path) / extinction_sample.extinction;

        result.luminance +=
            (phase_times_scattering * shadowing + multiscatter * extinction_sample.scattering)
            * scattering_illuminance_integral * transmittance_to_t_begin
            * 1.0;
        result.multiscattering_transfer += extinction_sample.scattering * scattering_illuminance_integral * transmittance_to_t_begin;
    }

    if (include_ground && intersects_ground)
    {
        let sample_step: RaymarchStep = stepRadiusMu(origin_step, sample_distance);

        let transmittance_to_surface = sampleTransmittanceLUT_RayMarchStep(transmittance_lut, lut_sampler, atmosphere, origin_step, sample_distance);
        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);

        let normal_dot_light = clamp(sample_step.mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).ground_albedo / PI;

        result.luminance +=
            transmittance_to_surface * transmittance_to_sun * normal_dot_light * diffuse
            * 1.0;
    }

    return result;
}


// See 'atmosphere_common.inc.wgsl' for sources on what this method is based on.

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
fn computeMultiscattering(@builtin(global_invocation_id) global_id: vec3<u32>) {
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(multiscatter_lut);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }
    var atmosphere: Atmosphere = u_global.atmosphere;

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

    // TODO: remove this
    var light: CelestialLight = u_global.light;
    light.forward = -sun_direction;

    // Unmarked units are in megameters (10^6 meters or 1000 km)

    // We evaluate scattering luminance and transfer in all directions from our sample point.
    // So we sample a finite amount of uniformly distributed directions.

    var luminance_second_order = vec3<f32>(0.0);
    var multiscattering_transfer = vec3<f32>(0.0);

    const SPHERE_SOLID_ANGLE = 4.0 * PI;
    const ISOTROPIC_PHASE = 1.0 / (4.0 * PI);

    // There is an accumulated constant bias in sample directions, but it is quite small and does not matter for the
    // small sample counts we shall be using
    // TODO: mitigate the artifacts that seem to occur due to how we are sampling the directions. For some reason
    // prime/odd numbers seem to avoid bands that occur at higher altitudes, that is independent of sun angle.
    const SAMPLE_COUNT_SQRT = 5u;
    const SAMPLE_COUNT = SAMPLE_COUNT_SQRT * SAMPLE_COUNT_SQRT;
    for (var sample_index = 0u; sample_index < SAMPLE_COUNT; sample_index++) {
        // 0, 0, 0, 0, 1, 1, 1, 1, ...
        let azimuthal_index = f32(sample_index) / f32(SAMPLE_COUNT_SQRT);

        // 0, 1, 2, 3, 0, 1, 2, 3, ...
        let zenith_index = f32(sample_index % SAMPLE_COUNT_SQRT) + 0.5;
        // let zenith_index = 0;

        let azimuth = 2.0 * PI * f32(azimuthal_index) / f32(SAMPLE_COUNT_SQRT);

        let cos_azimuth = cos(azimuth);
        let sin_azimuth = sin(azimuth);

        // sin_zenith is always positive since zenith ranges from 0 to pi
        let cos_zenith = clamp(
            2.0 * f32(zenith_index) / f32(SAMPLE_COUNT_SQRT) - 1.0,
            -1.0, 1.0
        );
        let sin_zenith = sqrt(1.0 - cos_zenith * cos_zenith);

        // Uniformly distributed on unit sphere direction
        let direction = vec3<f32>(sin_azimuth * sin_zenith, cos_zenith, cos_azimuth * sin_zenith);

		let atmosphere_raycast = raycastAtmosphere(&atmosphere, origin, direction);

        let include_ground = true;
        let scattering = computeLuminanceScatteringIntegral(
            &atmosphere,
            &light,
            lut_sampler,
            transmittance_lut,
			origin + direction * atmosphere_raycast.t_min,
			direction,
			include_ground,
			atmosphere_raycast.intersects_ground,
			atmosphere_raycast.t_max - atmosphere_raycast.t_min
        );
        // let scattering = ScatteringResult(vec3<f32>(0.0), vec3<f32>(0.0));

        // dw in equations (5) and (7) in Hillaire 2020
        let sample_solid_angle = SPHERE_SOLID_ANGLE / f32(SAMPLE_COUNT);

        // Equations (6) and (8)
        luminance_second_order += scattering.luminance * sample_solid_angle;
        multiscattering_transfer += scattering.multiscattering_transfer * sample_solid_angle;
    }

    // Equations (5) and (7)
    let inscattering = luminance_second_order * ISOTROPIC_PHASE;
    let scattering_transfer = multiscattering_transfer * ISOTROPIC_PHASE;

    // Geometric sum with r = multiscattering_transfer
    let infinite_scattering_transfer = vec3<f32>(1.0 / (1.0 - scattering_transfer));

    // Equation (10)
    let multiscattering = infinite_scattering_transfer * inscattering;

    textureStore(multiscatter_lut, texel_coord, vec4<f32>(multiscattering, 1.0));
}
`,ad="rgba32float";class Hm{constructor(i,u,m,g,w){j(this,"texture");j(this,"view");j(this,"group0");j(this,"group1");j(this,"pipeline");const E="Multiscatter LUT";this.texture=i.createTexture({size:u,dimension:"2d",format:ad,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Multiscatter LUT"}),this.view=this.texture.createView({label:E});const P=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:ad}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:g?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:g?"float":"unfilterable-float"}}],label:"Multiscatter LUT Group 0"});this.group0=i.createBindGroup({layout:P,entries:[{binding:0,resource:this.view},{binding:1,resource:i.createSampler({magFilter:g?"linear":"nearest",minFilter:g?"linear":"nearest"})},{binding:2,resource:m}],label:"Multiscatter LUT Group 0"});const M=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Multiscatter LUT Group 1"});this.group1=i.createBindGroup({layout:M,entries:[{binding:0,resource:{buffer:w.buffer}}],label:"Multiscatter LUT Group 1"});const R=i.createShaderModule({code:Vm,label:E});this.pipeline=i.createComputePipeline({compute:{module:R,entryPoint:"computeMultiscattering"},layout:i.createPipelineLayout({bindGroupLayouts:[P,M]}),label:"Multiscatter LUT"})}}const $m=`// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	padding0: mat3x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec3<f32>,
	time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 128 + 32 + 256 + 16 = 432 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera, // offset 128 + 32
	atmosphere: Atmosphere, // offset 0
	light: CelestialLight, // offset 128
	time: Time, // offset 128 + 32 + 256
}


@group(0) @binding(0) var skyview_lut: texture_storage_2d<rgba32float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH = 2048u;
const TRANSMITTANCE_LUT_HEIGHT = 1024u;

const MULTISCATTER_LUT_WIDTH = 1024u;
const MULTISCATTER_LUT_HEIGHT = 1024u;

const SKYVIEW_LUT_WIDTH = 1024u;
const SKYVIEW_LUT_HEIGHT = 512u;

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
    let atmosphere_radius_Mm_squared: f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared: f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planet_radius_Mm_squared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphere_radius_Mm_squared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphere_radius_Mm - radius;
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

    let atmosphere_radius_Mm_squared : f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared : f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planet_radius_Mm_squared);

    let d_min : f32 = (*atmosphere).atmosphere_radius_Mm - radius;
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
    // Equivalently, mu = (atmosphere_radius_Mm_squared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmosphere_radius_Mm_squared and radius * radius are large, so this avoids floating point errors from adding
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
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
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
        (*atmosphere).planet_radius_Mm * (1.0002),
        (*atmosphere).atmosphere_radius_Mm * (0.9998),
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32
) -> vec3<f32>
{
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
        (*atmosphere).planet_radius_Mm, (*atmosphere).atmosphere_radius_Mm
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
    scattering_rayleigh: vec3<f32>,
    scattering_mie: vec3<f32>,
    scattering_ozone: vec3<f32>,

    absorption_rayleigh: vec3<f32>,
    absorption_mie: vec3<f32>,
    absorption_ozone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and density_scale are the same units.
fn densityExponential(altitude: f32, density_scale: f32) -> f32
{ return exp(-altitude / density_scale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let density_rayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_rayleigh_Mm);
    let scattering_rayleigh: vec3<f32> = (*atmosphere).scattering_rayleigh_per_Mm * density_rayleigh;
    let absorption_rayleigh: vec3<f32> = (*atmosphere).absorption_rayleigh_per_Mm * density_rayleigh;

    let density_mie: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_mie_Mm);
    let scattering_mie: vec3<f32> = (*atmosphere).scattering_mie_per_Mm * density_mie;
    let absorption_mie: vec3<f32> = (*atmosphere).absorption_mie_per_Mm * density_mie;

    let density_ozone: f32 = densityTent(altitude_Mm * 1000.0);
    let scattering_ozone: vec3<f32> = (*atmosphere).scattering_ozone_per_Mm * density_ozone;
    let absorption_ozone: vec3<f32> = (*atmosphere).absorption_ozone_per_Mm * density_ozone;

    var extinction_sample: ExtinctionSample;
    extinction_sample.scattering_rayleigh = scattering_rayleigh;
    extinction_sample.scattering_mie = scattering_mie;
    extinction_sample.scattering_ozone = scattering_ozone;

    extinction_sample.absorption_rayleigh = absorption_rayleigh;
    extinction_sample.absorption_mie = absorption_mie;
    extinction_sample.absorption_ozone = absorption_ozone;

    extinction_sample.scattering = scattering_rayleigh + scattering_mie + scattering_ozone;
    extinction_sample.extinction = extinction_sample.scattering + absorption_rayleigh + absorption_mie + absorption_ozone;

    return extinction_sample;
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
    let center_to_intersection_chord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(center_to_intersection_chord, center_to_intersection_chord);
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

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
    // Cosine of the angle with the direction to the light
    mu_light: f32,
    // Cosine of travel direction vector and light direction vector
    nu: f32,
};

// Returns 'start' moved 'step_distance' units along the implicit direction vector
// nu is the dot product between normalized direction and light direction vector
fn stepRadiusMu(
    start: RaymarchStep,
    step_distance: f32,
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        step_distance * step_distance + 2.0 * start.radius * start.mu * step_distance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + step_distance) / result.radius;
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + step_distance * start.nu) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    step_distance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (step_distance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, step_distance);

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

// Contains methods and overloads for raymarching the atmosphere

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE HIGH_SAMPLE_COUNT SAMPLE_PATH_TRANSMITTANCE

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

HIGH_SAMPLE_COUNT
- Whether to use a much higher sample count. Useful for one time renders, like the multiscattering LUT.

SAMPLE_PATH_TRANSMITTANCE
- Instead of accumulating transmittance along the raymarched path, sample the transmittance LUT.
- This adds ~ 6 * N + 2 samples of the transmittance LUT texture, where N is the sample count
- The results are subtly different, the transmittance LUT has precision issues when trying to sample intervals due to needing to multiply and divide by nearly zero floats when near the horizon
- By default this should be left off, we're raymarching extinction samples while integrating so sampling the transmittance LUT for the main path ends up being wasteful
*/

// Make sure to include atmosphere_common first

const T_SUBSTEP_NONLINEAR = 0.4;
const T_SUBSTEP_LINEAR = 0.2;

struct AtmosphereRaycastResult
{
	// Whether or not the raycast resulted in hitting the planet
	// This is important for sampling the transmittance lut
	intersects_ground: bool,

	// The origin of the raycast can be outside the atmosphere, inside the planet, etc so we get an interval
	t_min: f32,
	t_max: f32,
}

fn raycastAtmosphere(atmosphere: ptr<function, Atmosphere>, origin: vec3<f32>, direction: vec3<f32>) -> AtmosphereRaycastResult
{
	var result: AtmosphereRaycastResult;

    let planet_hit = raySphereIntersection(origin, direction, (*atmosphere).planet_radius_Mm);
    let atmosphere_hit = raySphereIntersection(origin, direction, (*atmosphere).atmosphere_radius_Mm);

    let inside_planet = planet_hit.hit && planet_hit.t0 < 0.0 && planet_hit.t1 > 0.0;
    let intersects_atmosphere = atmosphere_hit.hit && atmosphere_hit.t1 > 0.0;
    if (!intersects_atmosphere || inside_planet)
    {
		result.intersects_ground = true;
		result.t_min = 0.0;
		result.t_max = 0.0;
        return result;
    }

	// Optimistic, assume we don't hit planet and take the atmosphere_hit interval as-is
	result.t_min = max(atmosphere_hit.t0, 0.0);
	result.t_max = atmosphere_hit.t1;

    // Assuming the planet was hit, we have atmosphere_hit.t0 < planet_hit.t0 < planet_hit.t1 < atmosphere_hit.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

    if (planet_hit.hit && planet_hit.t0 > 0.0)
    {
		result.intersects_ground = true;

		// We assume the planet, if hit, is ALWAYS closer than the further edge of the atmosphere
		// So the next line is redundant and we use the simpler, uncommented form
		// result.t_max = min(planet_hit.t0, result.t_max)

        result.t_max = planet_hit.t0;
    }

	return result;
}

struct ScatteringResult
{
    luminance: vec3<f32>,
    multiscattering_transfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?

// Returns the computed single-scattered luminance from origin to origin + direction * sample_distance
//
// include_ground: Whether to include the luminance from the planet's virtual surface
//
// intersects_ground: Whether or not the provided origin/direction intersect the planet's surface.
// 	This could just be computed internally, but often the calling code is more informed and passing this avoids redundant calculations.
//
// If include_ground is TRUE, then sample_distance is assumed to go to the planet's surface.
// If include_ground is TRUE, intersects_ground must also be true for out-scattering of surface to be included.
// A misuse of 'include_ground', 'intersects_ground', and 'sample_distance' (such as the wrong distance) will lead to incorrect results.
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,
    lut_sampler: sampler,
    transmittance_lut: texture_2d<f32>,
    multiscatter_lut: texture_2d<f32>,
    origin: vec3<f32>,
    direction: vec3<f32>,
    include_ground: bool,
	intersects_ground: bool,
	sample_distance: f32,
) -> ScatteringResult
{
    var result: ScatteringResult;
    result.luminance = vec3<f32>(0.0);
    result.multiscattering_transfer = vec3<f32>(0.0);

	if(sample_distance <= 0.0)
	{
		return result;
	}

    // This is the direction of the incoming light, which is the light we are interested in computing the magnitude of.
    // This is the parameter of the phase functions
	let incident_cosine = dot((*light).forward, -direction);

    let start_radius: f32 = length(origin);
    let start_mu: f32 = dot(origin, direction) / (length(origin) * length(direction));
    let start_mu_light: f32 = dot(origin, -(*light).forward) / (length(origin) * length((*light).forward));
    let nu: f32 = dot(-(*light).forward, direction) / (length((*light).forward) * length(direction));

    let origin_step = RaymarchStep(start_radius, start_mu, start_mu_light, nu);

	var transmittance_accumulated = vec3<f32>(1.0);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT = 64.0;

	var t: f32 = 0.0;
	var d_t: f32 = 0.0;
    for (var s = 0.0; s < SAMPLE_COUNT; s += 1.0)
    {
		{
			// quadratic distribution
        	var t_begin = s / SAMPLE_COUNT;
        	var t_end = (s + 1.0) / SAMPLE_COUNT;
			t_begin = sample_distance * t_begin * t_begin;
			t_end = sample_distance * t_end * t_end;
			d_t = t_end - t_begin;
			t = mix(t_begin, t_end, T_SUBSTEP_NONLINEAR);
		}

        let sample_step: RaymarchStep = stepRadiusMu(origin_step, t);

        let altitude = sample_step.radius - (*atmosphere).planet_radius_Mm;
        let extinction_sample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

	    let transmittance_to_t_begin = transmittance_accumulated;
		let transmittance_along_path = exp(-extinction_sample.extinction * d_t);
		transmittance_accumulated *= transmittance_along_path;

        // Ozone does not scatter light normally, so we arbitrarily use rayleigh's phase function in case ozone's scattering
        // coefficient is nonzero
        let phase_times_scattering: vec3<f32> =
            extinction_sample.scattering_rayleigh * phaseRayleigh(incident_cosine)
            + extinction_sample.scattering_mie * phaseMie(incident_cosine, 0.8)
            + extinction_sample.scattering_ozone * phaseRayleigh(incident_cosine);

        let multiscatter = sampleMultiscatterLUT(multiscatter_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);

        var occlusion_planet: f32 = 0.0;
        {
            let horizon_sin = (*atmosphere).planet_radius_Mm / sample_step.radius;
            let horizon_cos = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            occlusion_planet = f32(sample_step.mu_light < horizon_cos);
        }

        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);
        var shadowing = vec3<f32>(transmittance_to_sun * (1.0 - f32(occlusion_planet)));

        // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
        // This is a single interval of the integral in Equation (1) from Hillaire's paper,
        // with all constant terms factored out above
        let scattering_illuminance_integral = (vec3(1.0) - transmittance_along_path) / extinction_sample.extinction;

        result.luminance +=
            (phase_times_scattering * shadowing + multiscatter * extinction_sample.scattering)
            * scattering_illuminance_integral * transmittance_to_t_begin
            * 1.0;
        result.multiscattering_transfer += extinction_sample.scattering * scattering_illuminance_integral * transmittance_to_t_begin;
    }

    if (include_ground && intersects_ground)
    {
        let sample_step: RaymarchStep = stepRadiusMu(origin_step, sample_distance);

        let transmittance_to_surface = sampleTransmittanceLUT_RayMarchStep(transmittance_lut, lut_sampler, atmosphere, origin_step, sample_distance);
        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);

        let normal_dot_light = clamp(sample_step.mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).ground_albedo / PI;

        result.luminance +=
            transmittance_to_surface * transmittance_to_sun * normal_dot_light * diffuse
            * 1.0;
    }

    return result;
}


// All units are Mm/megameters (10^6 meters) unless marked km/kilometers (10^3 meters)

// See 'atmosphere_common.inc.wgsl' for sources on what this method is based on.

// Skyview LUT
//
// This shader builds a 2D sky-view LUT, which is a lattitude-longitude map of the sky with only the planet's surface shadowing.
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
    let sin_horizon_zenith = (*atmosphere).planet_radius_Mm / radius;
    let horizon_zenith = PI - asin(sin_horizon_zenith);

    let azimuth = 2.0 * PI * (uv.x - 0.5);

    var view_zenith: f32;

    if (uv.y < 0.5)
    {
        let unnormalized_v = 2.0 * uv.y - 1.0;
        let angle_fraction = 1.0 - unnormalized_v * unnormalized_v;

        view_zenith = angle_fraction * horizon_zenith;
    }
    else
    {
        let unnormalized_v = 2.0 * uv.y - 1.0;
        let angle_fraction = unnormalized_v * unnormalized_v;

        view_zenith = (PI - horizon_zenith) * angle_fraction + horizon_zenith;
    }

    let elevation = -(view_zenith - PI / 2.0);

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
    var atmosphere: Atmosphere = u_global.atmosphere;
    var light: CelestialLight = u_global.light;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    let origin = vec3<f32>(0.0, atmosphere.planet_radius_Mm, 0.0) + u_global.camera.position.xyz / METERS_PER_MM;

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

	let atmosphere_raycast = raycastAtmosphere(&atmosphere, origin, direction);

    let include_ground = false;
    let luminance = computeLuminanceScatteringIntegral(
        &atmosphere,
        &light,
        lut_sampler,
        transmittance_lut,
        multiscatter_lut,
        origin + direction * atmosphere_raycast.t_min,
        direction,
        include_ground,
		atmosphere_raycast.intersects_ground,
		atmosphere_raycast.t_max - atmosphere_raycast.t_min
    ).luminance;

    textureStore(skyview_lut, texel_coord, vec4(luminance, 1.0));
}
`,od="rgba32float";class qm{constructor(i,u,m,g,w,E){j(this,"texture");j(this,"view");j(this,"group0");j(this,"group1");j(this,"pipeline");this.texture=i.createTexture({size:u,dimension:"2d",format:od,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Skyview LUT"}),this.view=this.texture.createView({label:"Skyview LUT"});const P=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:od}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:w?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:w?"float":"unfilterable-float"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:w?"float":"unfilterable-float"}}],label:"Skyview LUT"});this.group0=i.createBindGroup({layout:P,entries:[{binding:0,resource:this.view},{binding:1,resource:i.createSampler({magFilter:w?"linear":"nearest",minFilter:w?"linear":"nearest"})},{binding:2,resource:m},{binding:3,resource:g}],label:"Skyview LUT Group 0"});const M=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Skyview LUT Group 1"});this.group1=i.createBindGroup({layout:M,entries:[{binding:0,resource:{buffer:E.buffer}}],label:"Skyview LUT Group 1"});const R=i.createShaderModule({code:$m});this.pipeline=i.createComputePipeline({compute:{module:R,entryPoint:"computeSkyViewLuminance"},layout:i.createPipelineLayout({bindGroupLayouts:[P,M]}),label:"Skyview LUT"})}}const jm=`// Textures must have the same dimension
// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	padding0: mat3x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec3<f32>,
	time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 128 + 32 + 256 + 16 = 432 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera, // offset 128 + 32
	atmosphere: Atmosphere, // offset 0
	light: CelestialLight, // offset 128
	time: Time, // offset 128 + 32 + 256
}


const FOURIER_GRID_DIMENSION = 512u;
const WAVE_PATCH_EXTENT_METERS = 100.0;

const PI = 3.141592653589793;
const FUNDAMENTAL_WAVE_NUMBER = 2.0 * PI / WAVE_PATCH_EXTENT_METERS;

const GRAVITY = 9.8;

const WIND_SPEED_METERS_PER_SECOND = 10.0;
// 10 km fetch
const WIND_FETCH_METERS = 10.0 * 1000.0;
const SWELL = 0.3;

// Implementation derived from:
// Nicolas Lutz, Arnaud Schoentgen, and Guillaume Gilet. 2024. Fast orientable aperiodic ocean synthesis using tiling and blending. Proc. ACM Comput. Graph. Interact. Tech. 7, 3, Article 49 (August 2024), 22 pages. https://doi.org/10.1145/3675388

// Deterministic wave parameters derived from texture coordinate
struct WaveParameters
{
	// Ranges from -WAVE_PATCH_EXTENT_METERS / 2 to WAVE_PATCH_EXTENT_METERS / 2
	wave_coord: vec2<i32>,

	wave_vector: vec2<f32>,
	wave_number: f32,
	delta_wave_number: f32,
	frequency: f32,
	d_frequency_d_wave_number: f32,
	wind_angle: f32,
}

fn waveParameters(texel_coord: vec2<u32>) -> WaveParameters
{
	var result: WaveParameters;

	const wave_coord_offset = i32(FOURIER_GRID_DIMENSION / 2u);
	const g = GRAVITY;

	result.wave_coord = vec2<i32>(i32(texel_coord.x), i32(texel_coord.y)) - vec2<i32>(wave_coord_offset);
	result.wave_vector = FUNDAMENTAL_WAVE_NUMBER * vec2<f32>(result.wave_coord);

	result.delta_wave_number = FUNDAMENTAL_WAVE_NUMBER;

	result.wave_number = length(result.wave_vector);

	// Gravity dispersion relationship for deep water
	let k = result.wave_number;
	result.frequency = sqrt(g * k);
	// d/dk (sqrt(gk)) = g / (2 * sqrt(g * k))
	result.d_frequency_d_wave_number = 0.5 * g * inverseSqrt(g * k);
	result.wind_angle = atan2(result.wave_vector.y, result.wave_vector.x);

	return result;
}

fn waveSpectrumJONSWAP(frequency: f32, peak_frequency: f32) -> f32
{
	const wind_speed = WIND_SPEED_METERS_PER_SECOND;
	const wind_fetch = WIND_FETCH_METERS;
	const g = GRAVITY;

	let alpha = 0.076 * pow(wind_speed * wind_speed / (wind_fetch * g), 0.22);
	let gamma = 3.3;
	var sigma = 0.07;
	if (frequency > peak_frequency)
	{
		sigma = 0.09;
	}
	let r = exp(-(frequency-peak_frequency)*(frequency-peak_frequency)/(2 * sigma * sigma * peak_frequency * peak_frequency));

	let f_ratio = peak_frequency / frequency;

	let numerator =
		alpha
		* g * g
		* exp(-1.25 * f_ratio * f_ratio * f_ratio * f_ratio)
		* pow(gamma, r);

	let denominator = frequency * frequency * frequency * frequency * frequency;

	return numerator / denominator;
}

// This fit is valid for positive reals greater than or equal to 1.0, tested up to z = 141.0
// Note, gamma(z) = (z-1)! for integral z
fn gammaApprox(z: f32) -> f32
{
	// Values computed from Lanczos approximation, see webgpu/sky-sea/scripts/lanczos.py
	// Generated with n = 2 and r = 2.603209
	// r choice is not arbitrary, it is determined from the largest zero of an error function (see script for details)
	// For this strategy for choosing r, c_0 will just be 1 due to float precision
	const c_0 = 1.000000000267524225;
	const c_1 = 4.739837024840160673;
	const c_2 = -1.393160104839919367;
	const r = 2.603209;

	let s = c_0 + c_1 / (z+1.0) + c_2 / (z+2.0);
	return sqrt(2.0 * PI) * pow(z + r + 0.5, z + 0.5) * exp(-(z + r + 0.5)) * s;
}

fn waveDirectionalSpreading(frequency: f32, peak_frequency: f32, angle: f32) -> f32
{
	let f_ratio = peak_frequency / frequency;
	let swell = SWELL;

	let s = 16.0 * tanh(f_ratio) * swell * swell;

	let gamma_0 = gammaApprox(s + 1.0);
	let gamma_1 = gammaApprox(2.0 * s + 1.0);

	let q = (pow(2.0, 2.0 * s - 1.0) / PI) * (gamma_0 * gamma_0 / gamma_1);

	return q * pow(abs(cos(angle / 2.0)), 2.0 * s);
}

@group(0) @binding(0) var out_fourier_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(1) var in_gaussian_random_pairs: texture_storage_2d<rg32float, read>;

@compute @workgroup_size(16, 16, 1)
fn computeFourierAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>,)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_fourier_amplitude);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let gaussian_pair = textureLoad(in_gaussian_random_pairs, texel_coord).xy;
	let wave_parameters = waveParameters(texel_coord);

	if (abs(wave_parameters.wave_number) < FUNDAMENTAL_WAVE_NUMBER)
	{
		let amplitude = vec2<f32>(0.0, 0.0);
		textureStore(out_fourier_amplitude, texel_coord, vec4<f32>(amplitude, 0.0, 0.0));
		return;
	}

	let peak_frequency = 22.0 * pow(GRAVITY * GRAVITY / (WIND_SPEED_METERS_PER_SECOND * WIND_FETCH_METERS), 1.0 / 3.0);

	let spectrum = waveSpectrumJONSWAP(wave_parameters.frequency, peak_frequency)
		* waveDirectionalSpreading(wave_parameters.frequency, peak_frequency, wave_parameters.wind_angle);

	let magnitude = sqrt(
		2.0
		* spectrum
		* (wave_parameters.d_frequency_d_wave_number / wave_parameters.wave_number)
		* wave_parameters.delta_wave_number * wave_parameters.delta_wave_number
	);

	let amplitude = inverseSqrt(2.0)
		* gaussian_pair
		* magnitude;

	textureStore(out_fourier_amplitude, texel_coord, vec4<f32>(amplitude, 0.0, 0.0));
}

@group(0) @binding(0) var out_dy_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(1) var out_packed_dx_plus_idz_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(2) var in_fourier_amplitude: texture_storage_2d<rg32float, read>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x);
}

@compute @workgroup_size(16, 16, 1)
fn realizeFourierAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>,)
{
	let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_dy_amplitude);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let wave_parameters = waveParameters(texel_coord);
	let k_amplitude = textureLoad(in_fourier_amplitude, texel_coord).xy;

	let k_minus_coord = vec2<u32>(
		(FOURIER_GRID_DIMENSION - texel_coord.x) % FOURIER_GRID_DIMENSION,
		(FOURIER_GRID_DIMENSION - texel_coord.y) % FOURIER_GRID_DIMENSION
	);
	let k_minus_amplitude = textureLoad(in_fourier_amplitude, k_minus_coord).xy;
	let k_minus_amplitude_conjugate = vec2<f32>(k_minus_amplitude.x, -k_minus_amplitude.y);

	let phase = wave_parameters.frequency * u_global.time.time_seconds;
	let exponential = vec2<f32>(cos(phase), sin(phase));
	let exponential_conjugate = vec2<f32>(exponential.x, -exponential.y);

	let dy_amplitude = complexMult(exponential, k_amplitude) + complexMult(exponential_conjugate, k_minus_amplitude_conjugate);

	// For gerstner waves, displacement in x/z directions is based on the gradient
	// Displacement of h(k,t) * exp(i * dot(k,x))
	// is i * k(k,t)/k * h(k,t) * exp(i * dot(k,x))
	// Where i is the imaginary number sqrt(-1)
	let idy_amplitude = vec2<f32>(-dy_amplitude.y, dy_amplitude.x);

	var one_over_wave_number = 1.0 / wave_parameters.wave_number;
	if (abs(wave_parameters.wave_number) < FUNDAMENTAL_WAVE_NUMBER)
	{
		one_over_wave_number = 1.0;
		return;
	}

	let dx_amplitude = idy_amplitude * wave_parameters.wave_vector.x / wave_parameters.wave_number;
	let dz_amplitude = idy_amplitude * wave_parameters.wave_vector.y / wave_parameters.wave_number;

	let idz_amplitude = vec2<f32>(-dz_amplitude.y, dz_amplitude.x);

	textureStore(out_dy_amplitude, texel_coord, vec4<f32>(dy_amplitude, 0.0, 0.0));
	textureStore(out_packed_dx_plus_idz_amplitude, texel_coord, vec4<f32>(dx_amplitude + idz_amplitude, 0.0, 0.0));
}

@group(0) @binding(0) var out_displacement: texture_storage_2d<rgba16float, write>;
@group(0) @binding(1) var in_displacement_dy_0: texture_storage_2d<rg32float, read>;
@group(0) @binding(2) var in_displacement_dx_dz: texture_storage_2d<rg32float, read>;

@compute @workgroup_size(16, 16, 1)
fn fillDisplacementTexture(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_displacement);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let dy = textureLoad(in_displacement_dy_0, texel_coord).x;
	let dx_dz = textureLoad(in_displacement_dx_dz, texel_coord).xy;
	let dx = dx_dz.x;
	let dz = dx_dz.y;

	let displacement = vec3<f32>(dx, dy, dz);

	textureStore(out_displacement, texel_coord, vec4<f32>(displacement, 0.0));
}
`,Qm=`const PI = 3.141592653589793;

/*
* Decimation-in-time Cooley-Tukey Inverse Discrete Fast Fourier Transform
* Performed on a Square 2D Grid
*/

struct DFFTParameters
{
	log_2_size: u32,
	size: u32,
	b_inverse: f32,
}

struct TwoPointDFT
{
	twiddle: vec2<f32>,

	// The un-twiddled index
	lower_index: u32,

	// The twiddled index
	upper_index: u32,
}

/*
* out_intermediate_dfts_log2n_by_n:
*
* 	2d array of dimension log2(N) by N, where N is the size of the input grid
* 	Each row represents a step in the 1D DFFT
* 	step 0 is the first step performed, and represents the initial N/2 2-point DFTs
* 	step log2(N) - 1 is the last step performed, and represents the final N-point DFT
*
* 	Each element is the source indices for a 2-point DFT plus twiddle factor
*/

@group(0) @binding(0) var<uniform> u_parameters: DFFTParameters;
@group(0) @binding(1) var<storage, read_write> out_intermediate_dfts_log2n_by_n: array<TwoPointDFT>;

fn twoPointDFTIndex(step: u32, major_index: u32) -> u32
{
	return step * u_parameters.size + major_index;
}

// Only imaginary argument since that's what is needed
fn complexExp(imaginary_arg: f32) -> vec2<f32>
{
	return vec2<f32>(cos(imaginary_arg),sin(imaginary_arg));
}

// Dispatch should have (N / 2, 1, 1) invocations, where N is the grid size.
@compute @workgroup_size(2, 1, 1)
fn precomputeDFFTInstructions(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	var major_index = global_id.x;

	let grid_size = u_parameters.size;

	for(var step = 0u; step < u_parameters.log_2_size; step += 1u)
	{
		let dft_size = 1u << (step + 1u);
		let dft_count = u32(grid_size / dft_size);

		let dft = u32(major_index / u32(dft_size / 2u));
		let n = major_index % u32(dft_size / 2u);

		var lower_twiddle: TwoPointDFT;
		lower_twiddle.twiddle = complexExp(-2.0 * PI * f32(n) / f32(dft_size));
		lower_twiddle.lower_index = dft + n * 2u * dft_count;
		lower_twiddle.upper_index = lower_twiddle.lower_index + dft_count;

		var upper_twiddle = lower_twiddle;
		upper_twiddle.twiddle *= -1.0;

		let instruction_index = n * dft_count + dft;

		out_intermediate_dfts_log2n_by_n[twoPointDFTIndex(step, instruction_index)] = lower_twiddle;
		out_intermediate_dfts_log2n_by_n[twoPointDFTIndex(step, instruction_index + (grid_size / 2u))] = upper_twiddle;
	}
}

// Avoid redeclare
// @group(0) @binding(0) var<uniform> u_parameters: DFFTParameters;
@group(0) @binding(1) var<storage, read> intermediate_dfts_log2n_by_n: array<TwoPointDFT>;
@group(0) @binding(2) var<storage, read_write> buffer_0: array<vec2<f32>>;
@group(0) @binding(3) var<storage, read_write> buffer_1: array<vec2<f32>>;
@group(0) @binding(4) var<uniform> step_counter: u32;

fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

fn bufferIndex(x: u32, y: u32) -> u32
{
	return x + y * u_parameters.size;
}

fn loadTwoPointDFT(major_index: u32) -> TwoPointDFT
{
	var result = intermediate_dfts_log2n_by_n[twoPointDFTIndex(step_counter % u_parameters.log_2_size, major_index)];
	result.twiddle.y *= (1.0 - 2.0 * u_parameters.b_inverse);

	return result;
}

/*
* buffer_0 needs to have the initial data
* buffer_1's state does not matter, it will be overwritten
* The final output will be in buffer_0 (since vertical + horizontal guarantees an even amount of ping-pongs)
* Make sure step_counter is updated between steps, incrementing by one until 2 * log2(N)
*/
@compute @workgroup_size(16, 16, 1)
fn performDFFTStep(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	// We need to bounce between buffers since each cell in each step relies on multiple cells from the previous step
	let ping_pong = (step_counter % 2u) == 1u;

	// step_counter ranges from [ 0, 2 * log2(N) ), with the second half representing the vertical pass
	// We do this to avoid needing to pass duplicate data with an extra vertical flag, or needing to split up the function into two kernels

	if (step_counter < u_parameters.log_2_size)
	{
		// Horizontal Pass
		let two_point_dft = loadTwoPointDFT(global_id.x);
		if(ping_pong)
		{
			let lower_input = buffer_1[bufferIndex(two_point_dft.lower_index, global_id.y)];
			let upper_input = buffer_1[bufferIndex(two_point_dft.upper_index, global_id.y)];

			let result = lower_input + complexMult(two_point_dft.twiddle, upper_input);

			buffer_0[bufferIndex(global_id.x, global_id.y)] = result;
		}
		else
		{
			let lower_input = buffer_0[bufferIndex(two_point_dft.lower_index, global_id.y)];
			let upper_input = buffer_0[bufferIndex(two_point_dft.upper_index, global_id.y)];

			let result = lower_input + complexMult(two_point_dft.twiddle, upper_input);

			buffer_1[bufferIndex(global_id.x, global_id.y)] = result;
		}
	}
	else
	{
		// Vertical Pass
		let two_point_dft = loadTwoPointDFT(global_id.y);
		if(ping_pong)
		{
			let lower_input = buffer_1[bufferIndex(global_id.x, two_point_dft.lower_index)];
			let upper_input = buffer_1[bufferIndex(global_id.x, two_point_dft.upper_index)];

			let result = lower_input + complexMult(two_point_dft.twiddle, upper_input);

			buffer_0[bufferIndex(global_id.x, global_id.y)] = result;
		}
		else
		{
			let lower_input = buffer_0[bufferIndex(global_id.x, two_point_dft.lower_index)];
			let upper_input = buffer_0[bufferIndex(global_id.x, two_point_dft.upper_index)];

			let result = lower_input + complexMult(two_point_dft.twiddle, upper_input);

			buffer_1[bufferIndex(global_id.x, global_id.y)] = result;
		}
	}
}

/*
 * Flips the sign of even numbered cells in the fourier grid. A cell is even when (x + y) is even.
 * step_counter should be left as it was for the last step performed.
 *
 * Why you might do this:
 * When an DFT's input data has its energy clustered around the middle (grid_size / 2), the result will have alternating sign flips from the desired result.
 * This is since a frequency of (grid_size)/2 will show up as a wave with wavelength 2.
 *
 * This sort of clustering occurs with how we process ocean waves, since our wave "origin" with the longest wavelength, highest frequency/energy waves is at (grid_size/2, grid_size/2)
 */
@compute @workgroup_size(16, 16, 1)
fn performSwapEvenSigns(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	let ping_pong = (step_counter % 2u) == 1u;

	let factor = 1.0 - 2.0 * f32((global_id.x + global_id.y) % 2);

	if(ping_pong)
	{
		buffer_0[bufferIndex(global_id.x, global_id.y)] *= factor;
	}
	else
	{
		buffer_1[bufferIndex(global_id.x, global_id.y)] *= factor;
	}
}

@group(0) @binding(0) var<storage, read_write> out_step_counter: u32;

@compute @workgroup_size(1, 1, 1)
fn incrementStepCounter(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	if(global_id.x == 0 && global_id.y == 0)
	{
		out_step_counter = out_step_counter + 1;
	}
}
@compute @workgroup_size(1,1,1)
fn resetStepCounter(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	if(global_id.x == 0 && global_id.y == 0)
	{
		out_step_counter = 0;
	}
}
`;class Ym extends Ks{constructor(u){super(u,3,"DFFT Parameters UBO");j(this,"data",{log_2_size:1,size:2,b_inverse:!1})}packed(){const u=new ArrayBuffer(this.buffer.size),m=new DataView(u);return m.setUint32(0,this.data.log_2_size,!0),m.setUint32(4,this.data.size,!0),m.setFloat32(8,this.data.b_inverse?1:0,!0),u}}class Xm{constructor(i,u){j(this,"parametersUBO");j(this,"intermediateDFTs");j(this,"complexBuffer0");j(this,"complexBuffer1");j(this,"stepCounterBuffer");j(this,"intermediateDFTsBindGroup");j(this,"intermediateDFTsKernel");j(this,"performBindGroup");j(this,"performKernel");j(this,"performSwapEvenSignsKernel");j(this,"stepCounterBindGroup");j(this,"incrementStepCounterKernel");j(this,"resetStepCounterKernel");j(this,"debugBuffersCopied",!1);if(u<5)throw new RangeError("gridSizeExponent must be greater than 4.");const m=Math.pow(2,u);this.parametersUBO=new Ym(i),this.parametersUBO.data.log_2_size=u,this.parametersUBO.data.size=m,this.parametersUBO.data.b_inverse=!1,this.parametersUBO.writeToGPU(i);const g=16;this.intermediateDFTs=i.createBuffer({label:"DFFT Precompute Stage Steps",size:u*m*g,usage:GPUBufferUsage.STORAGE});const w=i.createShaderModule({label:"DFFT Precompute Stage",code:Qm}),E=i.createBindGroupLayout({label:"DFFT Precompute Stage Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.intermediateDFTsBindGroup=i.createBindGroup({label:"DFFT Precompute Stage Group 0",layout:E,entries:[{binding:0,resource:{buffer:this.parametersUBO.buffer}},{binding:1,resource:{buffer:this.intermediateDFTs}}]});const P=i.createPipelineLayout({label:"DFFT Precompute Steps Kernel",bindGroupLayouts:[E]});this.intermediateDFTsKernel=i.createComputePipeline({label:"DFFT Precompute Stage",compute:{module:w,entryPoint:"precomputeDFFTInstructions"},layout:P});const M=i.createBindGroupLayout({label:"DFFT Perform Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),R=8;this.complexBuffer0=i.createBuffer({label:"DFFT Buffer 0",size:m*m*R,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.complexBuffer1=i.createBuffer({label:"DFFT Buffer 1",size:this.complexBuffer0.size,usage:this.complexBuffer0.usage}),this.stepCounterBuffer=i.createBuffer({label:"DFFT Step Counter",size:4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE|GPUBufferUsage.UNIFORM});const G=new Uint32Array(1);G[0]=0,i.queue.writeBuffer(this.stepCounterBuffer,0,G),this.performBindGroup=i.createBindGroup({label:"DFFT Perform Group 0",layout:M,entries:[{binding:0,resource:{buffer:this.parametersUBO.buffer}},{binding:1,resource:{buffer:this.intermediateDFTs}},{binding:2,resource:{buffer:this.complexBuffer0}},{binding:3,resource:{buffer:this.complexBuffer1}},{binding:4,resource:{buffer:this.stepCounterBuffer}}]});const W=i.createPipelineLayout({label:"DFFT Perform",bindGroupLayouts:[M]});this.performKernel=i.createComputePipeline({label:"DFFT Perform DFFT Step",compute:{module:w,entryPoint:"performDFFTStep"},layout:W}),this.performSwapEvenSignsKernel=i.createComputePipeline({label:"DFFT Perform Swap Even Signs",compute:{module:w,entryPoint:"performSwapEvenSigns"},layout:W});const N=i.createBindGroupLayout({label:"DFFT Step Counter Bind Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.stepCounterBindGroup=i.createBindGroup({label:"DFFT Step Counter Bind Group 0",layout:N,entries:[{binding:0,resource:{buffer:this.stepCounterBuffer}}]});const J=i.createPipelineLayout({label:"DFFT Step Counter",bindGroupLayouts:[N]});this.incrementStepCounterKernel=i.createComputePipeline({label:"DFFT Increment Step Counter Kernel",layout:J,compute:{module:w,entryPoint:"incrementStepCounter"}}),this.resetStepCounterKernel=i.createComputePipeline({label:"DFFT Reset Step Counter Kernel",layout:J,compute:{module:w,entryPoint:"resetStepCounter"}}),this.parametersUBO.data.b_inverse=!0,this.parametersUBO.writeToGPU(i);const B=i.createCommandEncoder({label:"DFFT Precompute"}),X=B.beginComputePass({label:"DFFT Precompute Steps"});X.setPipeline(this.intermediateDFTsKernel),X.setBindGroup(0,this.intermediateDFTsBindGroup),X.dispatchWorkgroups(m/2/2,1,1),X.end(),i.queue.submit([B.finish()])}recordPerformOnBuffer0(i,u){const m=this.parametersUBO.data.size,g=this.parametersUBO.data.log_2_size,w=i.beginComputePass({label:"DFFT Perform",timestampWrites:u});for(let E=0;E<2*g;E++)E===0?(w.setPipeline(this.resetStepCounterKernel),w.setBindGroup(0,this.stepCounterBindGroup),w.dispatchWorkgroups(1,1,1)):(w.setPipeline(this.incrementStepCounterKernel),w.setBindGroup(0,this.stepCounterBindGroup),w.dispatchWorkgroups(1,1,1)),w.setPipeline(this.performKernel),w.setBindGroup(0,this.performBindGroup),w.dispatchWorkgroups(m/16,m/16,1);w.setPipeline(this.performSwapEvenSignsKernel),w.setBindGroup(0,this.performBindGroup),w.dispatchWorkgroups(m/16,m/16,1),w.end()}recordPerform(i,u,m,g,w,E){const P="rg32float";if(m.format!=P||g.format!=P)throw RangeError(`SourceTexture (format ${m.format}) and DestinationTexture (format ${g.format}) must both be ${P}`);this.parametersUBO.data.b_inverse=w,this.parametersUBO.writeToGPU(i);const M=this.parametersUBO.data.size;u.copyTextureToBuffer({texture:m},{buffer:this.complexBuffer0,bytesPerRow:this.complexBuffer0.size/M},{width:m.width,height:m.height,depthOrArrayLayers:m.depthOrArrayLayers}),this.recordPerformOnBuffer0(u,E),u.copyBufferToTexture({buffer:this.complexBuffer0,bytesPerRow:this.complexBuffer0.size/M},{texture:g},{width:g.width,height:g.height,depthOrArrayLayers:g.depthOrArrayLayers})}}const Km=512,Zm=9,ld="rg32float",ud="rg32float",Br="rg32float",cd="rgba16float";function Jm(){const s=Math.random(),i=Math.random(),u=Math.sqrt(-2*Math.log(s)),m=2*Math.PI*i,g=u*Math.cos(m),w=u*Math.sin(m);return[g,w]}class eg{constructor(i,u){j(this,"spectrumDimension");j(this,"gaussianNoise");j(this,"gaussianNoiseView");j(this,"fourierAmplitude");j(this,"fourierAmplitudeView");j(this,"fourierAmplitudeGroup0");j(this,"fourierAmplitudePipeline");j(this,"amplitude_Dy");j(this,"amplitude_Dy_View");j(this,"amplitude_Dx_plus_iDz");j(this,"amplitude_Dx_plus_iDz_View");j(this,"realizedFourierAmplitudeGroup0");j(this,"realizedFourierAmplitudeGroup1");j(this,"realizedFourierAmplitudePipeline");j(this,"displacement_Dy_0");j(this,"displacement_Dy_0_view");j(this,"displacement_Dx_Dz");j(this,"displacement_Dx_Dz_View");j(this,"displacement");j(this,"displacementView");j(this,"fillDisplacementGroup0");j(this,"fillDisplacementKernel");j(this,"dfftResources");this.spectrumDimension=Km,this.gaussianNoise=i.createTexture({label:"FFT Wave Gaussian Noise",format:ld,size:{width:this.spectrumDimension,height:this.spectrumDimension},usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.gaussianNoiseView=this.gaussianNoise.createView({label:"FFT Wave Gaussian Noise"});const m=2,w=8*this.spectrumDimension,E=new Float32Array(this.spectrumDimension*this.spectrumDimension*m);for(let X=0;X<E.length;X++)E[X]=Jm()[0];i.queue.writeTexture({texture:this.gaussianNoise},E,{bytesPerRow:w},{width:this.gaussianNoise.width,height:this.gaussianNoise.height}),this.fourierAmplitude=i.createTexture({label:"FFT Wave Fourier Amplitude h_0(k)",format:ud,size:{width:this.spectrumDimension,height:this.spectrumDimension},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.fourierAmplitudeView=this.fourierAmplitude.createView({label:"FFT Wave Fourier Amplitude h_0(k)"});const P=i.createBindGroupLayout({label:"FFT Wave Fourier Amplitude h_0(k) Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:ud,access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:ld,access:"read-only"}}]});this.fourierAmplitudeGroup0=i.createBindGroup({label:"FFT Wave Fourier Amplitude h_0(k) Group 0",layout:P,entries:[{binding:0,resource:this.fourierAmplitudeView},{binding:1,resource:this.gaussianNoiseView}]}),this.dfftResources=new Xm(i,Zm);const M=i.createShaderModule({label:"FFT Wave",code:jm});this.fourierAmplitudePipeline=i.createComputePipeline({label:"FFT Wave Fourier Amplitude h_0(k)",layout:i.createPipelineLayout({label:"FFT Wave Fourier Amplitude h_0(k)",bindGroupLayouts:[P]}),compute:{module:M,entryPoint:"computeFourierAmplitude"}}),this.amplitude_Dy=i.createTexture({label:"FFT Wave dy Amplitude",format:Br,size:{width:this.spectrumDimension,height:this.spectrumDimension},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),this.amplitude_Dy_View=this.amplitude_Dy.createView({label:"FFT Wave dy Amplitude"}),this.amplitude_Dx_plus_iDz=i.createTexture({label:"FFT Wave Packed dx + i * dz Amplitude",format:Br,size:{width:this.spectrumDimension,height:this.spectrumDimension},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),this.amplitude_Dx_plus_iDz_View=this.amplitude_Dx_plus_iDz.createView({label:"FFT Wave Packed dx + i * dz Amplitude"}),this.displacement_Dy_0=i.createTexture({label:"FFT Wave Displacement (Dy,0)",format:Br,size:{width:this.spectrumDimension,height:this.spectrumDimension},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.displacement_Dy_0_view=this.displacement_Dy_0.createView({label:this.displacement_Dy_0.label}),this.displacement_Dx_Dz=i.createTexture({label:"FFT Wave Displacement (Dx, Dz)",format:Br,size:{width:this.spectrumDimension,height:this.spectrumDimension},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.displacement_Dx_Dz_View=this.displacement_Dx_Dz.createView({label:this.displacement_Dx_Dz.label}),this.displacement=i.createTexture({label:"FFT Wave Final Displacement",format:cd,size:{width:this.spectrumDimension,height:this.spectrumDimension},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.displacementView=this.displacement.createView({label:this.displacement.label});const R=i.createBindGroupLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"write-only"}},{binding:2,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"read-only"}}]});this.realizedFourierAmplitudeGroup0=i.createBindGroup({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 0",layout:R,entries:[{binding:0,resource:this.amplitude_Dy_View},{binding:1,resource:this.amplitude_Dx_plus_iDz_View},{binding:2,resource:this.fourierAmplitudeView}]});const G=i.createBindGroupLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 1",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.realizedFourierAmplitudeGroup1=i.createBindGroup({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 1",layout:G,entries:[{binding:0,resource:{buffer:u.buffer}}]}),this.realizedFourierAmplitudePipeline=i.createComputePipeline({label:"FFT Wave Realized Fourier Amplitude h(k,t)",layout:i.createPipelineLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t)",bindGroupLayouts:[R,G]}),compute:{module:M,entryPoint:"realizeFourierAmplitude"}});const W=i.createBindGroupLayout({label:"FFT Wave Fill Displacement Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:cd,access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Br,access:"read-only"}},{binding:2,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Br,access:"read-only"}}]});this.fillDisplacementGroup0=i.createBindGroup({label:"FFT Wave Fill Displacement Group 0",layout:W,entries:[{binding:0,resource:this.displacementView},{binding:1,resource:this.displacement_Dy_0_view},{binding:2,resource:this.displacement_Dx_Dz_View}]}),this.fillDisplacementKernel=i.createComputePipeline({label:"FFT Wave Fill Displacement",layout:i.createPipelineLayout({label:"FFT Wave Fill Displacement",bindGroupLayouts:[W]}),compute:{module:M,entryPoint:"fillDisplacementTexture"}});const N=i.createCommandEncoder({label:"FFT Wave Precompute"}),J=N.beginComputePass({label:"FFT Wave Fourier Amplitude"});J.setPipeline(this.fourierAmplitudePipeline),J.setBindGroup(0,this.fourierAmplitudeGroup0);const B={width:this.fourierAmplitude.width,height:this.fourierAmplitude.height,depth:1};J.dispatchWorkgroups(B.width/16,B.height/16,B.depth/1),J.end(),i.queue.submit([N.finish()])}views(){return{gaussianNoiseView:this.gaussianNoiseView,fourierAmplitudeView:this.fourierAmplitudeView,amplitude_Dy_View:this.amplitude_Dy_View,amplitude_Dx_plus_iDz_View:this.amplitude_Dx_plus_iDz_View,displacementView:this.displacementView}}record(i,u,m){const g=u.beginComputePass({label:"FFT Wave Fourier Amplitude Realization",timestampWrites:m!==void 0?{querySet:m.querySet,beginningOfPassWriteIndex:m.beginWriteIndex}:void 0});g.setPipeline(this.realizedFourierAmplitudePipeline),g.setBindGroup(0,this.realizedFourierAmplitudeGroup0),g.setBindGroup(1,this.realizedFourierAmplitudeGroup1);const w={width:this.amplitude_Dy.width,height:this.amplitude_Dy.height,depth:1};g.dispatchWorkgroups(w.width/16,w.height/16,w.depth/1),g.end(),this.dfftResources.recordPerform(i,u,this.amplitude_Dy,this.displacement_Dy_0,!0,void 0),this.dfftResources.recordPerform(i,u,this.amplitude_Dx_plus_iDz,this.displacement_Dx_Dz,!0,void 0);const E=u.beginComputePass({label:"FFT Wave Fill Displacement",timestampWrites:m!==void 0?{querySet:m.querySet,endOfPassWriteIndex:m.endWriteIndex}:void 0});E.setPipeline(this.fillDisplacementKernel),E.setBindGroup(0,this.fillDisplacementGroup0),E.dispatchWorkgroups(this.displacement.width/16,this.displacement.height/16,1),E.end()}}const tg=`// Displace a grid of vertices representing the ocean surface, then rasterize into the gbuffer with a graphics pass

// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	padding0: mat3x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec3<f32>,
	time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 128 + 32 + 256 + 16 = 432 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera, // offset 128 + 32
	atmosphere: Atmosphere, // offset 0
	light: CelestialLight, // offset 128
	time: Time, // offset 128 + 32 + 256
}


/* --- begin ocean mesh displacement --- */

const WATER_COLOR = vec3<f32>(1.0 / 255.0, 123.0 / 255.0, 146.0 / 255.0);
const WAVE_NEUTRAL_PLANE = 1.0;

struct PlaneWave
{
    direction: vec2<f32>,
    amplitude: f32,
    wavelength: f32,
}

// When sampling multiple waves, these properties should be summed since we assume waves add linearly
// The gradient distributes linearly, so sum all tangents and bitangent before crossing to produce normal
struct WaveDisplacementResult
{
    displacement: vec3<f32>,
    tangent: vec3<f32>,
    bitangent: vec3<f32>,
}

fn sampleGerstner(wave: PlaneWave, time: f32, coords: vec2<f32>) -> WaveDisplacementResult
{
    let wave_amplitude = (1.0 - smoothstep(0.0, u_patch_world_half_extent, length(coords))) * wave.amplitude;
    let wave_direction = normalize(wave.direction);
    let wavelength = wave.wavelength;

    let wave_number = 2.0 * 3.141592653589793 / wavelength;

    let gravity = 9.8;

    // Dispersion relationship for deep ocean waves
    // wave_speed = sqrt(gravity / wave_number)
    // angular_frequency = wave_speed * wave_number
    let angular_frequency = sqrt(gravity * wave_number);

    let wave_vector = wave_direction * wave_number;

    let theta = dot(coords, wave_vector) - angular_frequency * time;
    let sin_theta = sin(theta);
    let cos_theta = cos(theta);

    var output: WaveDisplacementResult;

    let output_xz = -wave_direction * wave_amplitude * sin_theta;
    let output_y = wave_amplitude * cos_theta;
    output.displacement = vec3<f32>(output_xz.x, output_y, output_xz.y);

    // partial derivatives computed exactly via the above formula
    // Note these vectors are parallel, since wave only displaces in travel direction
    output.tangent = vec3<f32>(
        - wave_amplitude * wave_direction.x * cos_theta * wave_vector.x,
        - wave_amplitude * sin_theta * wave_vector.x,
        - wave_amplitude * wave_direction.y * cos_theta * wave_vector.x,
    );
    output.bitangent = vec3<f32>(
        - wave_amplitude * wave_direction.x * cos_theta * wave_vector.y,
        - wave_amplitude * sin_theta * wave_vector.y,
        - wave_amplitude * wave_direction.y * cos_theta * wave_vector.y,
    );

    return output;
}

fn sampleCosine(wave: PlaneWave, time: f32, coords: vec2<f32>) -> WaveDisplacementResult
{
    let wave_amplitude = (1.0 - smoothstep(0.0, u_patch_world_half_extent, length(coords))) * wave.amplitude;
    let wave_direction = normalize(wave.direction);
    let wavelength = wave.wavelength;

    let wave_number = 2.0 * 3.141592653589793 / wavelength;

    let gravity = 9.8;

    // Dispersion relationship for deep ocean waves
    // wave_speed = sqrt(gravity / wave_number)
    // angular_frequency = wave_speed * wave_number
    let angular_frequency = sqrt(gravity * wave_number);

    let wave_vector = wave_direction * wave_number;

    let theta = dot(coords, wave_vector) - angular_frequency * time;
    let sin_theta = sin(theta);
    let cos_theta = cos(theta);

    var output: WaveDisplacementResult;

    output.displacement = vec3<f32>(
        0.0,
        wave_amplitude * cos_theta,
        0.0
    );

    // partial derivatives computed exactly via the above formula
    // Note these vectors are parallel, since wave only displaces in travel direction
    output.tangent = vec3<f32>(
        0.0,
        - wave_amplitude * sin_theta * wave_vector.x,
        0.0,
    );
    output.bitangent = vec3<f32>(
        0.0,
        - wave_amplitude * sin_theta * wave_vector.y,
        0.0,
    );

    return output;
}

fn sampleMap(map: texture_2d<f32>, sampler: sampler, patch_uv: vec2<f32>) -> WaveDisplacementResult
{
	let delta = 0.5 / vec2<f32>(textureDimensions(displacement_map));

    var output: WaveDisplacementResult;

	output.displacement = textureSampleLevel(displacement_map, displacement_map_sampler, patch_uv, 0).xyz;

	// TODO: correct derivatives

	let dy_dx = textureSampleLevel(displacement_map, displacement_map_sampler, patch_uv + vec2<f32>(delta.x, 0.0), 0).y - output.displacement.y;
	let dy_dz = textureSampleLevel(displacement_map, displacement_map_sampler, patch_uv + vec2<f32>(0.0, delta.y), 0).y - output.displacement.y;

	output.tangent = vec3<f32>(0.0, dy_dx, 0.0);
	output.bitangent = vec3<f32>(0.0, dy_dz, 0.0);

	return output;
}

// Extra 1 for tiling
const VERTEX_DIMENSION = 1024u + 1u;
const VERTEX_COUNT = VERTEX_DIMENSION * VERTEX_DIMENSION;
// const TRIANGLE_COUNT = 2u * (VERTEX_DIMENSION - 1u) * (VERTEX_DIMENSION - 1u);
// const INDEX_COUNT = 3u * TRIANGLE_COUNT;

const WAVE_COUNT = 6u;

@id(0) override wave_model: u32 = 1u;
const WAVE_MODEL_COSINE = 0u;
const WAVE_MODEL_GERSTNER = 1u;
const WAVE_MODEL_DISPLACEMENT_MAP = 2u;

// Vertices are in (x,y,z) world coordinates, so during rasterization you must swizzle y <-> z
@group(0) @binding(0) var<storage, read_write> output_vertices: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(1) var<storage, read_write> output_world_normals: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(2) var<uniform> u_patch_world_half_extent: f32;
@group(0) @binding(3) var<uniform> u_waves: array<PlaneWave, WAVE_COUNT>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

@group(2) @binding(0) var displacement_map_sampler: sampler;
@group(2) @binding(1) var displacement_map: texture_2d<f32>;

@compute @workgroup_size(16, 16, 1)
fn displaceVertices(@builtin(global_invocation_id) global_id : vec3<u32>,)
{
    let vertex_coord = vec2<u32>(global_id.xy);

	// Offset size so uv doesn't extend to duplicated edge
    let size = vec2<u32>(VERTEX_DIMENSION - 1u);

    if(vertex_coord.x >= size.x || vertex_coord.y >= size.y)
    {
        return;
    }

    let uv = (vec2<f32>(vertex_coord) + vec2<f32>(0.5,0.5)) / vec2<f32>(size);

    let world_position_xz = vec2<f32>(u_patch_world_half_extent) * 2.0 * (uv - vec2<f32>(0.5));
    let time = u_global.time.time_seconds;

    var displaced_position = vec3<f32>(world_position_xz.x, WAVE_NEUTRAL_PLANE, world_position_xz.y);
    var tangent = vec3<f32>(1.0, 0.0, 0.0);
    var bitangent = vec3<f32>(0.0, 0.0, 1.0);

	switch wave_model {
		case WAVE_MODEL_COSINE, WAVE_MODEL_GERSTNER: {
			for (var i = 0u; i < WAVE_COUNT; i++)
			{
				var result: WaveDisplacementResult;

				switch wave_model {
					case WAVE_MODEL_COSINE: {
						result = sampleCosine(u_waves[i], time, world_position_xz);
					}
					case WAVE_MODEL_GERSTNER: {
						result = sampleGerstner(u_waves[i], time, world_position_xz);
					}
					default: {
						result.tangent = vec3<f32>(1.0, 0.0, 0.0);
						result.bitangent = vec3<f32>(0.0, 0.0, 1.0);
						result.displacement = vec3<f32>(0.0, 0.0, 0.0);
					}
				}

				displaced_position += result.displacement;
				tangent += result.tangent;
				bitangent += result.bitangent;
			}
		}
		case WAVE_MODEL_DISPLACEMENT_MAP: {
			let result: WaveDisplacementResult = sampleMap(displacement_map, displacement_map_sampler, uv);

			displaced_position += result.displacement;
			tangent += result.tangent;
			bitangent += result.bitangent;
		}
		default: {}
	}

    let vertex_index = vertex_coord.x + vertex_coord.y * VERTEX_DIMENSION;
    output_vertices[vertex_index] = vec4<f32>(displaced_position, 1.0);

    let world_normal = -normalize(cross(tangent, bitangent));
    output_world_normals[vertex_index] = vec4<f32>(world_normal, 0.0);

	// We need to fill in the edge so the mesh tiles properly
	if(vertex_coord.x == 0u && vertex_coord.y == 0u)
	{
		let index = (VERTEX_DIMENSION - 1u) + (VERTEX_DIMENSION - 1u) * VERTEX_DIMENSION;
		let offset = vec3<f32>(u_patch_world_half_extent * 2.0, 0.0, u_patch_world_half_extent * 2.0);
    	output_vertices[index] = vec4<f32>(displaced_position + offset, 1.0);
    	output_world_normals[index] = vec4<f32>(world_normal, 0.0);
	}

	if (vertex_coord.x == 0u)
	{
		let index = (VERTEX_DIMENSION - 1u) + (vertex_coord.y) * VERTEX_DIMENSION;
		let offset = vec3<f32>(u_patch_world_half_extent * 2.0, 0.0, 0.0);
    	output_vertices[index] = vec4<f32>(displaced_position + offset, 1.0);
    	output_world_normals[index] = vec4<f32>(world_normal, 0.0);
	}

	if (vertex_coord.y == 0u)
	{
		let index = vertex_coord.x + (VERTEX_DIMENSION - 1u) * VERTEX_DIMENSION;
		let offset = vec3<f32>(0.0, 0.0, u_patch_world_half_extent * 2.0);
    	output_vertices[index] = vec4<f32>(displaced_position + offset, 1.0);
    	output_world_normals[index] = vec4<f32>(world_normal, 0.0);
	}
}

/* --- begin surface rasterization --- */

@group(0) @binding(0) var<storage> vertices: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(1) var<storage> world_normals: array<vec4<f32>, VERTEX_COUNT>;
// Commented to avoid re-declaration
// @group(0) @binding(2) var<uniform> u_patch_world_half_extent: f32;
@group(0) @binding(3) var<storage> patch_instance_offsets: array<vec4<f32>>;

// Commented to avoid re-declaration
// @group(1) @binding(0) var<uniform> u_global: GlobalUBO;

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(1) world_normal : vec3<f32>,
    @location(2) color : vec3<f32>,
    @location(3) camera_distance : f32,
}

@vertex
fn rasterizationVertex(@builtin(vertex_index) index : u32, @builtin(instance_index) instance : u32) -> VertexOut
{
    var output : VertexOut;

	let world_position = vertices[index] + patch_instance_offsets[instance];

    output.position = u_global.camera.proj_view * world_position;
    output.world_normal = world_normals[index].xyz;
    output.color = vec3<f32>(WATER_COLOR);
    output.camera_distance = distance(u_global.camera.position, world_position);

    return output;
}

struct FragmentOut
{
    @location(0) color: vec4<f32>,
    @location(1) world_normal: vec4<f32>,
}

@fragment
fn rasterizationFragment(frag_interpolated: VertexOut) -> FragmentOut
{
    var output : FragmentOut;

    output.color = vec4<f32>(frag_interpolated.color, frag_interpolated.camera_distance);
    output.world_normal = vec4<f32>(frag_interpolated.world_normal,0.0);

    return output;
}
`,ng=16,rg=1e3;class ig extends Ks{constructor(u){super(u,1,"Wave Surface Displacement Patch World Half Extent UBO");j(this,"data",{patch_world_half_extent:300})}packed(){const u=new ArrayBuffer(this.buffer.size);return new DataView(u).setFloat32(0,this.data.patch_world_half_extent,!0),u}}function sg(s,i,u,m){const g=Oe.dot(m,i),w=Oe.dot(Oe.sub(u,s),m)/g;return{hit:Math.abs(g)>1e-5&&w>0,t:w}}function ag(s,i){var Q;const m=[$t.create(-1,-1,1,1),$t.create(1,-1,1,1),$t.create(1,1,1,1),$t.create(-1,1,1,1)];Oe.create(),Oe.create(),Oe.create(),Oe.create();let g=0;const w=1e3,E=3402823e32;let P=Oe.create(E,E,E),M=Oe.create(-3402823e32,-3402823e32,-3402823e32);for(let Y=0;Y<4;Y++){const le=Ot.mul(i.invProj,m[Y]);le[4]=0;const ve=Oe.normalize(Ot.mul(i.invView,le)),Pe=Oe.create(0,0,0),De=Oe.create(0,1,0),Ie=Oe.copy(i.position),Ne=Oe.copy(ve),Le=sg(Ie,Ne,Pe,De);Le.hit&&(g+=1);const ke=Oe.add(Oe.mulScalar(Ne,Le.hit?Le.t:w),Ie);ke[1]=0,Oe.copy(ke),P=Oe.min(ke,P),M=Oe.max(ke,M)}P[1]=0,M[1]=0;const R=50,G=Oe.floor(Oe.divScalar(P,R)),W=Oe.ceil(Oe.divScalar(M,R)),N=new Map;let J=0;if(g>0){for(let Y=0;Y<s;Y++)N.set(Y,[]);for(let Y=G[2];Y<=W[2];Y+=1)for(let le=G[0];le<=W[0];le+=1){const ve=Oe.mulScalar(Oe.create(le,0,Y),2*R),Pe=Oe.sub(ve,i.position),De=Oe.length(Pe),Ie=Math.max(Math.min(De/w,1),0),Ne=Math.atan(Ie)*s;(Q=N.get(Math.round(Ne)))==null||Q.push(...ve,0)}for(const[Y,le]of N)J+=le.length/4}const B=new Map,X=new Float32Array(J*4);let ne=0;for(const[Y,le]of N)B.set(Y,{count:le.length/4,instanceOffset:ne}),X.set(le,ne*4),ne+=le.length/4;return{patchDrawInstanceByLOD:B,patchOffsetsPackedSortedByLOD:X}}class og{constructor(i,u,m,g,w,E){j(this,"group0Compute");j(this,"group2Compute");j(this,"group0Graphics");j(this,"patchWorldHalfExtentBuffer");j(this,"patchInstanceOffsetsXYZW");j(this,"group1");j(this,"vertexDimension");j(this,"lodCount");j(this,"baseIndexCount");j(this,"vertices");j(this,"worldNormals");j(this,"indices");j(this,"lodIndices");j(this,"displacementCosinePipeline");j(this,"displacementGerstnerPipeline");j(this,"displacementMapPipeline");j(this,"surfaceRasterizationPipeline");this.vertexDimension=1025;const R=1025*1025,G=4,N=3*(2*1024*1024);this.baseIndexCount=N;const J=10;this.lodCount=J;function B(re,ce){let se=0;for(let k=0;k<ce;k++)se+=re/(1<<2*k);return se}const X=B(this.baseIndexCount,this.lodCount);this.vertices=i.createBuffer({size:16*R,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE,label:"Wave Surface Displacement Vertices"}),this.worldNormals=i.createBuffer({size:16*R,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE,label:"Wave Surface Displacement Normals"}),this.indices=i.createBuffer({size:N*G,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX,label:"Wave Surface Displacement Indices"}),this.lodIndices=i.createBuffer({size:(X-N)*G,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX,label:"Wave Surface Displacement Indices"});const ne=new Uint32Array(N);let Q=0;for(let re=0;re<1024;re++)for(let ce=0;ce<1024;ce++){const se=ce+re*1025,k=se+1,te=se+1025,xe=te+1,Te=new Uint32Array([se,te,k,k,te,xe]);ne.set(Te,Q),Q+=Te.length}i.queue.writeBuffer(this.indices,0,ne);const Y=new Uint32Array(X-N);Q=0;for(let re=1;re<J;re++)for(let ce=0;ce<1024;ce+=1<<re)for(let se=0;se<1024;se+=1<<re){const k=se+ce*1025,te=k+(1<<re),xe=k+(1<<re)*1025,Te=xe+(1<<re),Re=new Uint32Array([k,xe,te,te,xe,Te]);Y.set(Re,Q),Q+=Re.length}i.queue.writeBuffer(this.lodIndices,0,Y);const le=6,ve=4,Pe=4*ve,De=i.createBuffer({size:le*Pe,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM,label:"Wave Surface Displacement Waves"}),Ie=9.8,Ne=60,Le=Ne*Ne*Ie/(2*Math.PI),ke=new Array({direction:Gr.create(1,2),amplitude:.75,wavelength:Le/(16*16)},{direction:Gr.create(1.2,2),amplitude:.75,wavelength:Le/(14*14)},{direction:Gr.create(.8,2),amplitude:.75,wavelength:Le/(12*12)},{direction:Gr.create(1.25,2),amplitude:.75,wavelength:Le/(16*16)},{direction:Gr.create(-2,1),amplitude:.1,wavelength:Le/(19*19)},{direction:Gr.create(0,1),amplitude:.1,wavelength:Le/(19*19)}),Ye=new Float32Array(le*ve);let Ee=0;ke.forEach(re=>{Ye.set(re.direction,Ee),Ye[Ee+2]=re.amplitude,Ye[Ee+3]=re.wavelength,Ee+=4}),i.queue.writeBuffer(De,0,Ye);const Ue=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],label:"Wave Surface Displacement Group 0 Compute"});this.patchWorldHalfExtentBuffer=new ig(i),this.group0Compute=i.createBindGroup({layout:Ue,entries:[{binding:0,resource:{buffer:this.vertices}},{binding:1,resource:{buffer:this.worldNormals}},{binding:2,resource:{buffer:this.patchWorldHalfExtentBuffer.buffer}},{binding:3,resource:{buffer:De}}],label:"Wave Surface Displacement Group 0 Compute"});const Se=i.createBindGroupLayout({label:"Wave Surface Displacement Group 2 Compute (Displacement Map)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}},{binding:1,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"float"}}]});this.group2Compute=i.createBindGroup({label:"Wave Surface Displacement Group 2 Compute (Displacement Map)",layout:Se,entries:[{binding:0,resource:i.createSampler({label:"Wave Surface Displacement Group 2 Sampler",minFilter:"linear",magFilter:"linear"})},{binding:1,resource:E}]});const Ze=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}],label:"Wave Surface Displacement Group 0 Graphics"});this.patchInstanceOffsetsXYZW=i.createBuffer({label:"Wave Surface Displacement Patch Offsets",size:ng*rg,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE}),this.group0Graphics=i.createBindGroup({layout:Ze,entries:[{binding:0,resource:{buffer:this.vertices}},{binding:1,resource:{buffer:this.worldNormals}},{binding:2,resource:{buffer:this.patchWorldHalfExtentBuffer.buffer}},{binding:3,resource:{buffer:this.patchInstanceOffsetsXYZW}}],label:"Wave Surface Displacement Group 0 Graphics"});const $e=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE,buffer:{}}],label:"Wave Surface Displacement Group 1"});this.group1=i.createBindGroup({layout:$e,entries:[{binding:0,resource:{buffer:u.buffer}}],label:"Wave Surface Displacement Group 1"});const Ge=i.createShaderModule({code:tg,label:"Wave Surface Displacement"});this.displacementCosinePipeline=i.createComputePipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Ue,$e,Se]}),compute:{module:Ge,entryPoint:"displaceVertices",constants:{0:0}},label:"Wave Surface Displacement Cosine Kernel"}),this.displacementGerstnerPipeline=i.createComputePipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Ue,$e,Se]}),compute:{module:Ge,entryPoint:"displaceVertices",constants:{0:1}},label:"Wave Surface Displacement Gerstner Kernel"}),this.displacementMapPipeline=i.createComputePipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Ue,$e,Se]}),compute:{module:Ge,entryPoint:"displaceVertices",constants:{0:2}},label:"Wave Surface Displacement Map Kernel"}),this.surfaceRasterizationPipeline=i.createRenderPipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Ze,$e]}),vertex:{module:Ge,entryPoint:"rasterizationVertex"},fragment:{module:Ge,entryPoint:"rasterizationFragment",targets:[{format:m},{format:g}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"ccw"},depthStencil:{format:w,depthWriteEnabled:!0,depthCompare:"less"},label:"Wave Surface Displacement Surface Rasterization"})}record(i,u,m,g,w,E){const P=u.beginComputePass({label:"Wave Surface Mesh Displacement",timestampWrites:g!==void 0?{querySet:g.querySet,beginningOfPassWriteIndex:g.beginWriteIndex}:void 0});switch(w){case dn.Cosine:P.setPipeline(this.displacementCosinePipeline),this.patchWorldHalfExtentBuffer.data.patch_world_half_extent=300;break;case dn.Gerstner:P.setPipeline(this.displacementGerstnerPipeline),this.patchWorldHalfExtentBuffer.data.patch_world_half_extent=300;break;case dn.FFTDisplacement:P.setPipeline(this.displacementMapPipeline),this.patchWorldHalfExtentBuffer.data.patch_world_half_extent=50;break}this.patchWorldHalfExtentBuffer.writeToGPU(i),P.setBindGroup(0,this.group0Compute),P.setBindGroup(1,this.group1),P.setBindGroup(2,this.group2Compute),P.dispatchWorkgroups(Math.ceil(this.vertexDimension/16),Math.ceil(this.vertexDimension/16)),P.end();const M=u.beginRenderPass({label:"Wave Surface Rasterization",colorAttachments:[{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:E.colorWithDepthInAlpha},{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:E.normal}],depthStencilAttachment:{view:E.depth,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"},timestampWrites:g!==void 0?{querySet:g.querySet,endOfPassWriteIndex:g.endWriteIndex}:void 0});switch(M.setPipeline(this.surfaceRasterizationPipeline),M.setBindGroup(0,this.group0Graphics),M.setBindGroup(1,this.group1),M.setIndexBuffer(this.indices,"uint32"),w){default:case(dn.Cosine,dn.Gerstner):{M.drawIndexed(this.baseIndexCount,1);break}case dn.FFTDisplacement:{let R=function(N,J){if(N===0||N===1)return 0;let B=0;for(let X=1;X<N;X++)B+=J/(1<<2*X);return B};const{patchDrawInstanceByLOD:G,patchOffsetsPackedSortedByLOD:W}=ag(this.lodCount,{invProj:m.data.camera.invProj,invView:m.data.camera.invView,position:m.data.camera.position});i.queue.writeBuffer(this.patchInstanceOffsetsXYZW,0,W,0,Math.min(this.patchInstanceOffsetsXYZW.size/4,W.length));for(let N=0;N<this.lodCount;N++){const J=G.get(N);N==1&&M.setIndexBuffer(this.lodIndices,"uint32");const B=this.baseIndexCount/(1<<2*N),X=R(N,this.baseIndexCount);M.drawIndexed(B,J==null?void 0:J.count,X,0,J==null?void 0:J.instanceOffset)}break}}M.end()}}const lg=`// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	padding0: mat3x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec3<f32>,
	time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 128 + 32 + 256 + 16 = 432 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera, // offset 128 + 32
	atmosphere: Atmosphere, // offset 0
	light: CelestialLight, // offset 128
	time: Time, // offset 128 + 32 + 256
}


@group(0) @binding(0) var output_color: texture_storage_2d<rgba16float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;
@group(0) @binding(4) var skyview_lut: texture_2d<f32>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

@group(2) @binding(0) var gbuffer_color_with_depth_in_alpha: texture_2d<f32>;
@group(2) @binding(1) var gbuffer_normal: texture_2d<f32>;

// vertex state NOT included
// Render a quad and use this as the fragment stage

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH = 2048u;
const TRANSMITTANCE_LUT_HEIGHT = 1024u;

const MULTISCATTER_LUT_WIDTH = 1024u;
const MULTISCATTER_LUT_HEIGHT = 1024u;

const SKYVIEW_LUT_WIDTH = 1024u;
const SKYVIEW_LUT_HEIGHT = 512u;

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
    let atmosphere_radius_Mm_squared: f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared: f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planet_radius_Mm_squared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphere_radius_Mm_squared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphere_radius_Mm - radius;
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

    let atmosphere_radius_Mm_squared : f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared : f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planet_radius_Mm_squared);

    let d_min : f32 = (*atmosphere).atmosphere_radius_Mm - radius;
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
    // Equivalently, mu = (atmosphere_radius_Mm_squared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmosphere_radius_Mm_squared and radius * radius are large, so this avoids floating point errors from adding
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
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
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
        (*atmosphere).planet_radius_Mm * (1.0002),
        (*atmosphere).atmosphere_radius_Mm * (0.9998),
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32
) -> vec3<f32>
{
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
        (*atmosphere).planet_radius_Mm, (*atmosphere).atmosphere_radius_Mm
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
    scattering_rayleigh: vec3<f32>,
    scattering_mie: vec3<f32>,
    scattering_ozone: vec3<f32>,

    absorption_rayleigh: vec3<f32>,
    absorption_mie: vec3<f32>,
    absorption_ozone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and density_scale are the same units.
fn densityExponential(altitude: f32, density_scale: f32) -> f32
{ return exp(-altitude / density_scale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let density_rayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_rayleigh_Mm);
    let scattering_rayleigh: vec3<f32> = (*atmosphere).scattering_rayleigh_per_Mm * density_rayleigh;
    let absorption_rayleigh: vec3<f32> = (*atmosphere).absorption_rayleigh_per_Mm * density_rayleigh;

    let density_mie: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_mie_Mm);
    let scattering_mie: vec3<f32> = (*atmosphere).scattering_mie_per_Mm * density_mie;
    let absorption_mie: vec3<f32> = (*atmosphere).absorption_mie_per_Mm * density_mie;

    let density_ozone: f32 = densityTent(altitude_Mm * 1000.0);
    let scattering_ozone: vec3<f32> = (*atmosphere).scattering_ozone_per_Mm * density_ozone;
    let absorption_ozone: vec3<f32> = (*atmosphere).absorption_ozone_per_Mm * density_ozone;

    var extinction_sample: ExtinctionSample;
    extinction_sample.scattering_rayleigh = scattering_rayleigh;
    extinction_sample.scattering_mie = scattering_mie;
    extinction_sample.scattering_ozone = scattering_ozone;

    extinction_sample.absorption_rayleigh = absorption_rayleigh;
    extinction_sample.absorption_mie = absorption_mie;
    extinction_sample.absorption_ozone = absorption_ozone;

    extinction_sample.scattering = scattering_rayleigh + scattering_mie + scattering_ozone;
    extinction_sample.extinction = extinction_sample.scattering + absorption_rayleigh + absorption_mie + absorption_ozone;

    return extinction_sample;
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
    let center_to_intersection_chord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(center_to_intersection_chord, center_to_intersection_chord);
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

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
    // Cosine of the angle with the direction to the light
    mu_light: f32,
    // Cosine of travel direction vector and light direction vector
    nu: f32,
};

// Returns 'start' moved 'step_distance' units along the implicit direction vector
// nu is the dot product between normalized direction and light direction vector
fn stepRadiusMu(
    start: RaymarchStep,
    step_distance: f32,
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        step_distance * step_distance + 2.0 * start.radius * start.mu * step_distance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + step_distance) / result.radius;
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + step_distance * start.nu) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    step_distance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (step_distance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, step_distance);

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

// Contains methods and overloads for raymarching the atmosphere

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE HIGH_SAMPLE_COUNT SAMPLE_PATH_TRANSMITTANCE

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

HIGH_SAMPLE_COUNT
- Whether to use a much higher sample count. Useful for one time renders, like the multiscattering LUT.

SAMPLE_PATH_TRANSMITTANCE
- Instead of accumulating transmittance along the raymarched path, sample the transmittance LUT.
- This adds ~ 6 * N + 2 samples of the transmittance LUT texture, where N is the sample count
- The results are subtly different, the transmittance LUT has precision issues when trying to sample intervals due to needing to multiply and divide by nearly zero floats when near the horizon
- By default this should be left off, we're raymarching extinction samples while integrating so sampling the transmittance LUT for the main path ends up being wasteful
*/

// Make sure to include atmosphere_common first

const T_SUBSTEP_NONLINEAR = 0.4;
const T_SUBSTEP_LINEAR = 0.2;

struct AtmosphereRaycastResult
{
	// Whether or not the raycast resulted in hitting the planet
	// This is important for sampling the transmittance lut
	intersects_ground: bool,

	// The origin of the raycast can be outside the atmosphere, inside the planet, etc so we get an interval
	t_min: f32,
	t_max: f32,
}

fn raycastAtmosphere(atmosphere: ptr<function, Atmosphere>, origin: vec3<f32>, direction: vec3<f32>) -> AtmosphereRaycastResult
{
	var result: AtmosphereRaycastResult;

    let planet_hit = raySphereIntersection(origin, direction, (*atmosphere).planet_radius_Mm);
    let atmosphere_hit = raySphereIntersection(origin, direction, (*atmosphere).atmosphere_radius_Mm);

    let inside_planet = planet_hit.hit && planet_hit.t0 < 0.0 && planet_hit.t1 > 0.0;
    let intersects_atmosphere = atmosphere_hit.hit && atmosphere_hit.t1 > 0.0;
    if (!intersects_atmosphere || inside_planet)
    {
		result.intersects_ground = true;
		result.t_min = 0.0;
		result.t_max = 0.0;
        return result;
    }

	// Optimistic, assume we don't hit planet and take the atmosphere_hit interval as-is
	result.t_min = max(atmosphere_hit.t0, 0.0);
	result.t_max = atmosphere_hit.t1;

    // Assuming the planet was hit, we have atmosphere_hit.t0 < planet_hit.t0 < planet_hit.t1 < atmosphere_hit.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

    if (planet_hit.hit && planet_hit.t0 > 0.0)
    {
		result.intersects_ground = true;

		// We assume the planet, if hit, is ALWAYS closer than the further edge of the atmosphere
		// So the next line is redundant and we use the simpler, uncommented form
		// result.t_max = min(planet_hit.t0, result.t_max)

        result.t_max = planet_hit.t0;
    }

	return result;
}

struct ScatteringResult
{
    luminance: vec3<f32>,
    multiscattering_transfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?

// Returns the computed single-scattered luminance from origin to origin + direction * sample_distance
//
// include_ground: Whether to include the luminance from the planet's virtual surface
//
// intersects_ground: Whether or not the provided origin/direction intersect the planet's surface.
// 	This could just be computed internally, but often the calling code is more informed and passing this avoids redundant calculations.
//
// If include_ground is TRUE, then sample_distance is assumed to go to the planet's surface.
// If include_ground is TRUE, intersects_ground must also be true for out-scattering of surface to be included.
// A misuse of 'include_ground', 'intersects_ground', and 'sample_distance' (such as the wrong distance) will lead to incorrect results.
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,
    lut_sampler: sampler,
    transmittance_lut: texture_2d<f32>,
    multiscatter_lut: texture_2d<f32>,
    origin: vec3<f32>,
    direction: vec3<f32>,
    include_ground: bool,
	intersects_ground: bool,
	sample_distance: f32,
) -> ScatteringResult
{
    var result: ScatteringResult;
    result.luminance = vec3<f32>(0.0);
    result.multiscattering_transfer = vec3<f32>(0.0);

	if(sample_distance <= 0.0)
	{
		return result;
	}

    // This is the direction of the incoming light, which is the light we are interested in computing the magnitude of.
    // This is the parameter of the phase functions
	let incident_cosine = dot((*light).forward, -direction);

    let start_radius: f32 = length(origin);
    let start_mu: f32 = dot(origin, direction) / (length(origin) * length(direction));
    let start_mu_light: f32 = dot(origin, -(*light).forward) / (length(origin) * length((*light).forward));
    let nu: f32 = dot(-(*light).forward, direction) / (length((*light).forward) * length(direction));

    let origin_step = RaymarchStep(start_radius, start_mu, start_mu_light, nu);

	var transmittance_accumulated = vec3<f32>(1.0);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT = 64.0;

	var t: f32 = 0.0;
	var d_t: f32 = 0.0;
    for (var s = 0.0; s < SAMPLE_COUNT; s += 1.0)
    {
		{
			// quadratic distribution
        	var t_begin = s / SAMPLE_COUNT;
        	var t_end = (s + 1.0) / SAMPLE_COUNT;
			t_begin = sample_distance * t_begin * t_begin;
			t_end = sample_distance * t_end * t_end;
			d_t = t_end - t_begin;
			t = mix(t_begin, t_end, T_SUBSTEP_NONLINEAR);
		}

        let sample_step: RaymarchStep = stepRadiusMu(origin_step, t);

        let altitude = sample_step.radius - (*atmosphere).planet_radius_Mm;
        let extinction_sample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

	    let transmittance_to_t_begin = transmittance_accumulated;
		let transmittance_along_path = exp(-extinction_sample.extinction * d_t);
		transmittance_accumulated *= transmittance_along_path;

        // Ozone does not scatter light normally, so we arbitrarily use rayleigh's phase function in case ozone's scattering
        // coefficient is nonzero
        let phase_times_scattering: vec3<f32> =
            extinction_sample.scattering_rayleigh * phaseRayleigh(incident_cosine)
            + extinction_sample.scattering_mie * phaseMie(incident_cosine, 0.8)
            + extinction_sample.scattering_ozone * phaseRayleigh(incident_cosine);

        let multiscatter = sampleMultiscatterLUT(multiscatter_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);

        var occlusion_planet: f32 = 0.0;
        {
            let horizon_sin = (*atmosphere).planet_radius_Mm / sample_step.radius;
            let horizon_cos = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            occlusion_planet = f32(sample_step.mu_light < horizon_cos);
        }

        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);
        var shadowing = vec3<f32>(transmittance_to_sun * (1.0 - f32(occlusion_planet)));

        // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
        // This is a single interval of the integral in Equation (1) from Hillaire's paper,
        // with all constant terms factored out above
        let scattering_illuminance_integral = (vec3(1.0) - transmittance_along_path) / extinction_sample.extinction;

        result.luminance +=
            (phase_times_scattering * shadowing + multiscatter * extinction_sample.scattering)
            * scattering_illuminance_integral * transmittance_to_t_begin
            * 1.0;
        result.multiscattering_transfer += extinction_sample.scattering * scattering_illuminance_integral * transmittance_to_t_begin;
    }

    if (include_ground && intersects_ground)
    {
        let sample_step: RaymarchStep = stepRadiusMu(origin_step, sample_distance);

        let transmittance_to_surface = sampleTransmittanceLUT_RayMarchStep(transmittance_lut, lut_sampler, atmosphere, origin_step, sample_distance);
        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);

        let normal_dot_light = clamp(sample_step.mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).ground_albedo / PI;

        result.luminance +=
            transmittance_to_surface * transmittance_to_sun * normal_dot_light * diffuse
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
fn max3(value: vec3<f32>) -> f32 
{ 
    return max(max(value.x, value.y), value.z); 
}

struct PBRTexel
{
//    position: vec3<f32>,
    normal: vec3<f32>,
    subscattering_color: vec3<f32>,
    normal_reflectance: vec3<f32>,
//    occlusion: f32,
    specular_power: f32,
    metallic: f32,
};

fn convertPBRProperties(color: vec3<f32>, normal: vec3<f32>) -> PBRTexel
{
    let metallic = 1.0;

    let specular_power = 160.0;
    let roughness = 0.24;

    let WATER_DEEP_COLOR = vec3<f32>(16.0 / 255.0, 97.0 / 255.0, 171.0 / 255.0);

    let dielectric_reflectance = vec3<f32>(0.04);
    let metallic_reflectance = vec3<f32>(0.5) * color / max3(color);

    let normal_reflectance = mix(dielectric_reflectance, metallic_reflectance, metallic);

    var texel = PBRTexel();
    texel.normal = normal;
    texel.subscattering_color = WATER_DEEP_COLOR;
    texel.normal_reflectance = normal_reflectance;
    texel.specular_power = pow(specular_power, 1.0 - roughness);
    texel.metallic = metallic;

    return texel;
}

fn computeFresnelMicrofacet(material: PBRTexel, light_outgoing: vec3<f32>, view_outgoing: vec3<f32>) -> vec3<f32>
{
    let halfway_direction = normalize(light_outgoing + view_outgoing);

    // Schlick approximation of fresnel reflection
    let fresnel =
        material.normal_reflectance
        + (1.0 - material.normal_reflectance) * pow(1.0 - clamp(dot(halfway_direction, light_outgoing), 0.0, 1.0), 5.0);

    return fresnel;
}

// Non-microfacet, only valid for perfect reflections
fn computeFresnelPerfectReflection(material: PBRTexel, light_outgoing: vec3<f32>) -> vec3<f32>
{
    // Schlick approximation of fresnel reflection
    let fresnel =
        material.normal_reflectance
        + (1.0 - material.normal_reflectance) * pow(1.0 - clamp(dot(light_outgoing, material.normal), 0.0, 1.0), 5.0);

    return fresnel;
}

fn diffuseBRDF(material: PBRTexel) -> vec3<f32>
{
    // Lambertian BRDF

    return material.subscattering_color / 3.14159265359;
}

fn specularBRDF(material: PBRTexel, light_outgoing: vec3<f32>, view_outgoing: vec3<f32>) -> vec3<f32>
{
    let halfway_direction = normalize(light_outgoing + view_outgoing);

    let specular_power = material.specular_power;
    let microfacet_distribution = pow(clamp(dot(halfway_direction, material.normal), 0.0, 1.0), specular_power);

    // Without this term, the overall brightness decreases as roughness increases
    let normalization_term = (specular_power + 2.0) / 8.0;

    return vec3<f32>(normalization_term * microfacet_distribution);
}

fn sampleSkyViewLUT(
    atmosphere: ptr<function, Atmosphere>,
    position: vec3<f32>,
    direction: vec3<f32>
) -> vec3<f32>
{
    // Horizon zenith cannot be less than PI/2, so we use sin and assume it is a quadrant 2 angle
    let sin_horizon_zenith = clamp((*atmosphere).planet_radius_Mm / length(position), -1.0, 1.0);
    let horizon_zenith = PI - asin(sin_horizon_zenith);

    let cos_view_zenith = clamp(dot(position, direction) / (length(position) * length(direction)), -1.0, 1.0);
    let cos_horizon_zenith = -safeSqrt(1.0 - sin_horizon_zenith * sin_horizon_zenith);

    let view_zenith = acos(cos_view_zenith);

    // We still want uv.y = 0 and uv.y = 1 to the extreme zenith angles
    // But since we make the horizon a straight line through the middle, and its zenith may not be PI/2,
    // we must scale angles differently depending on if they are above or below the horizon.

    var u = 0.0;
    var v = 0.0;

    if (cos_view_zenith > cos_horizon_zenith)
    {
        // Above horizon, v shall range from 0.0 to 0.5
        // view_zenith varies from 0 to horizon_zenith

        let angle_fraction = view_zenith / horizon_zenith;

        // Increase angle density towards v = 0.5
        v = (1.0 - sqrt(1.0 - angle_fraction)) * 0.5;
    }
    else
    {
        // Below horizon, v shall range from 0.5 to 1
        // view_zenith varies from horizon_zenith to PI

        let angle_fraction = (view_zenith - horizon_zenith) / (PI - horizon_zenith);

        // Increase angle density towards v = 0.5
        v = sqrt(angle_fraction) * 0.5 + 0.5;
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

	// Nudge by a couple texels to avoid artifacts
	// The artifacts are caused by aliasing in the the ray-sphere intersection with the planet
	// The horizon will be rounded, and when the edges step it reveals gaps where texels below the horizon can be sampled from the skyview LUT, leading to patches of black.
	// This offset may require tweaking depending on the various resolutions
	const V_SAFE_OFFSET = 1.5;
	let v_safe = (0.5 * f32(SKYVIEW_LUT_HEIGHT) - V_SAFE_OFFSET) / f32(SKYVIEW_LUT_HEIGHT);
	v = min(v, v_safe);

    return textureSampleLevel(skyview_lut, lut_sampler, vec2<f32>(u, v), 0.0).xyz;
}

fn sampleSunDisk(
    atmosphere: ptr<function, Atmosphere>,
    light: ptr<function, CelestialLight>,
	position: vec3<f32>,
    direction: vec3<f32>
) -> vec3<f32>
{
	// TODO: It's tricky to anti-alias the sun disk, and also keep it physically based due to the massive ratio of luminances between direct sunlight and the light otherwise present in the scene.
	// Perhaps a more ad-hoc approach is better, where we layer and blend a smoother looking sun disk. We can still capture the limb darkening and atmospheric transmittance.

	let light_direction = normalize(-(*light).forward);

	// This is distinct from the usual mu and mu_light.
	let cos_direction_light = dot(normalize(direction), light_direction);
	let cos_light_radius = cos((*light).angular_radius);

	// theta is the angle subtended on the surface of the sun by our view direction.
	// theta varies from 0 when looking directly at light_direction, to ~90 degrees when looking at the very edge of the solar disk
	// This is an approximation, that is accurate since lights are very far away
	// Other lights like perhaps a moon should use another model
	let sin_theta = acos(cos_direction_light) / (*light).angular_radius;

	if (sin_theta > 1.0)
	{
		return vec3<f32>(0.0);
	}

	// Limb darkening parameters and formula derived from
	// https://www.physics.hmc.edu/faculty/esin/a101/limbdarkening.pdf
	// (equation 1): intensity = 1 - u * (1 - mu^alpha)
	// Let u = 1
	// Table 2 gives these values for alpha:
	// R ~ 570 nm
	// G ~ 530 nm
	// B ~ 430 nm
	let limb_darkening_intensity_exponent = vec3<f32>(0.482, 0.522, 0.643);

	let cos_theta = safeSqrt(1.0 - sin_theta * sin_theta);
	let limb_darkening_intensity = pow(vec3<f32>(cos_theta), limb_darkening_intensity_exponent);

	let radius = length(position);
	let mu_light = dot(position, light_direction) / radius;
	let transmittance_to_light = sampleTransmittanceLUT_RadiusMu(
		transmittance_lut,
		lut_sampler,
		atmosphere,
		radius,
		mu_light
	);

	// Assume light is so far away that the apparent solid angle of the light from the camera is the same as at the edge of the atmosphere
	let solid_angle_from_space = 2.0 * PI * (1.0 - cos_light_radius);

	// Keep illuminance 1, and multiply it at the end like we do with scattering
	// This is a transfer factor with units steradian inverse, that represents the transmittance of illuminance at the edge of the atmosphere with a deflection of 0 degrees
	let light_luminance_from_space = vec3<f32>(1.0) / solid_angle_from_space;

	return limb_darkening_intensity * transmittance_to_light * light_luminance_from_space;
}

fn sampleSkyLuminance(
    atmosphere: ptr<function, Atmosphere>,
    light: ptr<function, CelestialLight>,
    position: vec3<f32>,
    direction: vec3<f32>
) -> vec3<f32>
{
    var luminance = sampleSkyViewLUT(atmosphere, position, direction) + sampleSunDisk(atmosphere, light, position, direction);
    return luminance;
}

fn sampleGeometryLuminance(
    atmosphere: ptr<function, Atmosphere>,
    light: ptr<function, CelestialLight>,
    material: PBRTexel,
    position: vec3<f32>,
    direction: vec3<f32>,
    distance: f32,
    intersects_ground: bool
) -> vec3<f32>
{
    let light_direction = normalize(-(*light).forward);

    var origin_step = RaymarchStep();
    origin_step.radius = length(position);
    origin_step.mu = dot(position, direction) / origin_step.radius;
    origin_step.mu_light = dot(position, light_direction) / origin_step.radius;
    origin_step.nu = dot(direction, light_direction);

    let surface_step: RaymarchStep = stepRadiusMu(origin_step, distance);
    let transmittance_to_surface = sampleTransmittanceLUT_Segment(
        transmittance_lut,
        lut_sampler,
        atmosphere,
        origin_step.radius,
        origin_step.mu,
        distance,
        intersects_ground
    );

    var light_luminance_transfer = vec3<f32>(0.0);

	// TODO: Better lighting model of the water

    // Model water as perfect reflections with some diffuse scattering to emulate light coming up from underwater

    let surface_position = position + direction * distance;

	// reflection image on ocean surface
	//
    // shift reflection vector up to make up for the lack of secondary bounces
    // Otherwise, the environmental luminance will be 0 and we get random black patches
    var reflection_direction = reflect(normalize(direction), normalize(material.normal));
    reflection_direction.y = max(reflection_direction.y, 0.001);
    reflection_direction = normalize(reflection_direction);

	light_luminance_transfer +=
        transmittance_to_surface
        * sampleSkyLuminance(atmosphere, light, surface_position, reflection_direction)
        * computeFresnelPerfectReflection(material, reflection_direction);

	let diffuse = diffuseBRDF(material);
    light_luminance_transfer +=
        transmittance_to_surface
        * diffuse
        * sampleMultiscatterLUT(multiscatter_lut, lut_sampler, atmosphere, surface_step.radius, surface_step.mu_light);

	/*
    {
        // Aerial perspective, the light scattered by air between viewer and the surface
		// Has very little effect while we have no geometry in the distance, and the camera is low to the ground.
        // TODO: aerial perspective LUT
        let include_ground = false;
        light_luminance_transfer += computeLuminanceScatteringIntegral(
            atmosphere,
            light,
            lut_sampler,
            transmittance_lut,
            multiscatter_lut,
            position,
            direction,
            include_ground,
			intersects_ground,
			distance
        ).luminance;
    }
	*/

    return light_luminance_transfer;
}

@compute @workgroup_size(16,16,1)
fn renderCompositedAtmosphere(@builtin(global_invocation_id) global_id : vec3<u32>)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(gbuffer_color_with_depth_in_alpha);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        return;
    }

    var atmosphere = u_global.atmosphere;
    var light = u_global.light;
	var camera = u_global.camera;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    const METERS_PER_MM = 1000000.0;
    let origin = vec3<f32>(0.0, atmosphere.planet_radius_Mm, 0.0) + camera.position.xyz / METERS_PER_MM;

    let ndc_space_coord = (uv - vec2<f32>(0.5)) * 2.0 * vec2<f32>(1.0, -1.0);
    let near_plane_depth = 1.0;
    let direction_view_space = camera.inv_proj * vec4(ndc_space_coord, near_plane_depth, 1.0);
    let direction_world = normalize((camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

    let color_with_depth_in_alpha = textureLoad(gbuffer_color_with_depth_in_alpha, texel_coord, 0);
    let normal = textureLoad(gbuffer_normal, texel_coord, 0);

    let depth = color_with_depth_in_alpha.a / METERS_PER_MM;

    var luminance_transfer = vec3<f32>(0.0);

    let sin_horizon: f32 = atmosphere.planet_radius_Mm / length(origin);
    let cos_horizon: f32 = -safeSqrt(1.0 - sin_horizon * sin_horizon);
	let mu = dot(normalize(origin), normalize(direction_world));
	let intersects_ground = mu < cos_horizon;

    if (depth <= 0.0)
    {
        // View of virtual environment: either the sky, or the floor
        if (intersects_ground)
        {
            let material: PBRTexel = convertPBRProperties(vec3<f32>(1.0), vec3<f32>(0.0,1.0,0.0));
            luminance_transfer = sampleGeometryLuminance(&atmosphere, &light, material, origin, direction_world, depth, intersects_ground);
        }
        else
        {
            luminance_transfer = sampleSkyLuminance(&atmosphere, &light, origin, direction_world);
        }
    }
    else
    {
        // View of geometry in gbuffer
        let material: PBRTexel = convertPBRProperties(color_with_depth_in_alpha.xyz, normal.xyz);
        luminance_transfer = sampleGeometryLuminance(&atmosphere, &light, material, origin, direction_world, depth, intersects_ground);
    }

    let luminance = light.strength * light.color * luminance_transfer;

    let output = vec4<f32>(tonemapACES(luminance),1.0);

    textureStore(output_color, texel_coord, output);
}
`,dd="rgba16float";class ug{constructor(i,u,m,g,w,E,P){j(this,"group0Layout");j(this,"group1Layout");j(this,"lutSampler");j(this,"group0");j(this,"group1");j(this,"outputColor");j(this,"outputColorView");j(this,"pipeline");this.group0Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:dd}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:E?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:E?"float":"unfilterable-float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:E?"float":"unfilterable-float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:E?"float":"unfilterable-float",viewDimension:"2d"}}],label:"Atmosphere Camera Group 0"}),this.group1Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Atmosphere Camera Group 1"}),this.outputColor=i.createTexture({format:dd,size:{width:1,height:1},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Atmosphere Camera Output Color"}),this.outputColorView=this.outputColor.createView(),this.lutSampler=i.createSampler({label:"Atmosphere Camera LUT Sampler",magFilter:E?"linear":"nearest",minFilter:E?"linear":"nearest"}),this.group0=i.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:this.outputColorView},{binding:1,resource:this.lutSampler},{binding:2,resource:m},{binding:3,resource:g},{binding:4,resource:w}],label:"Atmosphere Camera Group 0"}),this.group1=i.createBindGroup({layout:this.group1Layout,entries:[{binding:0,resource:{buffer:P.buffer}}],label:"Atmosphere Camera Group 1"});const M=i.createShaderModule({code:lg,label:"Atmosphere Camera"});this.pipeline=i.createComputePipeline({compute:{module:M,entryPoint:"renderCompositedAtmosphere"},layout:i.createPipelineLayout({bindGroupLayouts:[this.group0Layout,this.group1Layout,u]}),label:"Atmosphere Camera"})}}const cg=`// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

@group(0) @binding(0) var b_texture: texture_2d<f32>;
@group(0) @binding(1) var b_sampler: sampler;

struct FullscreenQuadUBO
{
    color_gain: vec4<f32>,
    vertex_scale: vec4<f32>,
}

@group(1) @binding(0) var<uniform> u_fullscreen_quad: FullscreenQuadUBO;

const QUAD_VERTICES: array<vec4<f32>, 4> = array<vec4<f32>,4>(
    vec4<f32>(-1.0, -1.0, 0.0, 1.0),
    vec4<f32>(1.0, -1.0, 0.0, 1.0),
    vec4<f32>(1.0, 1.0, 0.0, 1.0),
    vec4<f32>(-1.0, 1.0, 0.0, 1.0),
);
const QUAD_UVS: array<vec2<f32>,4> = array<vec2<f32>,4>(
    vec2<f32>(0.0, 1.0),
    vec2<f32>(1.0, 1.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(0.0, 0.0),
);

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(0) uv : vec2<f32>
}

@vertex
fn vertex_main(@builtin(vertex_index) index : u32) -> VertexOut
{
    var output : VertexOut;
    output.position = u_fullscreen_quad.vertex_scale * QUAD_VERTICES[index];
    output.uv = QUAD_UVS[index];
    return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4<f32>
{
    let color = u_fullscreen_quad.color_gain * textureSample(b_texture, b_sampler, fragData.uv);
    return vec4<f32>(color.xyz, 1.0);
}
`;class dg{constructor(i,u,m){j(this,"group0Layout");j(this,"group0ByOutputTexture");j(this,"group0Sampler");j(this,"uboDataByOutputTexture");j(this,"ubo");j(this,"group1");j(this,"pipeline");this.group0Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"non-filtering"}}],label:"Fullscreen Quad Group 0"}),this.group0ByOutputTexture=new Map,this.uboDataByOutputTexture=new Map,this.group0Sampler=i.createSampler({magFilter:"nearest",minFilter:"nearest"}),u.forEach((E,P)=>{this.group0ByOutputTexture.set(P,i.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:E},{binding:1,resource:this.group0Sampler}],label:`Fullscreen Quad Group 0 Texture '${P.toString()}'`})),this.uboDataByOutputTexture.set(P,new Im)}),this.ubo=new km(i);const g=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}}],label:"Fullscreen Quad Group 1"});this.group1=i.createBindGroup({layout:g,entries:[{binding:0,resource:{buffer:this.ubo.buffer}}]});const w=i.createShaderModule({code:cg,label:"Fullscreen Quad"});this.pipeline=i.createRenderPipeline({vertex:{module:w,entryPoint:"vertex_main"},fragment:{module:w,entryPoint:"fragment_main",targets:[{format:m}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:i.createPipelineLayout({bindGroupLayouts:[this.group0Layout,g]}),label:"Fullscreen Quad"})}rebuildOutputTextureBinding(i,u,m){this.group0ByOutputTexture.set(u,i.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:m},{binding:1,resource:this.group0Sampler}],label:`Fullscreen Quad Group 0 Texture '${u.toString()}'`}))}}const Go={width:2048,height:1024},Bo={width:1024,height:1024},Wo={width:1024,height:512};class fd{constructor(){j(this,"flip",!1);j(this,"color_gain",{r:1,g:1,b:1})}}const Gs=[.25,.3333,.5,.75,1,1.5,2,4];var $s=(s=>(s[s.DrawToDraw=0]="DrawToDraw",s[s.SkyviewLUT=1]="SkyviewLUT",s[s.FFTWaves=2]="FFTWaves",s[s.OceanSurface=3]="OceanSurface",s[s.AtmosphereCamera=4]="AtmosphereCamera",s[s.FullscreenQuad=5]="FullscreenQuad",s))($s||{});class pd{constructor(i){j(this,"values");j(this,"sum",0);j(this,"average_",0);j(this,"count",0);j(this,"index",0);this.values=new Array(i).fill(0)}get average(){return this.average_}push(i){this.index>=this.values.length&&(this.index=0),this.index<this.count&&(this.sum-=this.values[this.index]),this.values[this.index]=i,this.sum+=i,this.count=Math.min(this.values.length,this.count+1),this.average_=this.sum/this.count,this.index+=1}}class fg{constructor(i,u,m){j(this,"transmittanceLUTPassResources");j(this,"multiscatterLUTPassResources");j(this,"skyviewLUTPassResources");j(this,"fftWaveSpectrumResources");j(this,"waveSurfaceDisplacementPassResources");j(this,"atmosphereCameraPassResources");j(this,"fullscreenQuadPassResources");j(this,"gbuffer");j(this,"scaledSize");j(this,"rawSize");j(this,"settings");j(this,"uiReadonly");j(this,"globalUBO");j(this,"fullscreenQuadIndexBuffer");j(this,"device");j(this,"presentFormat");j(this,"quit",!1);j(this,"frametimeQuery");j(this,"frametimeAverages");j(this,"startTime");j(this,"dummyFrameCounter");j(this,"probationFrameCounter");j(this,"targetFPS",0);j(this,"float32Filterable");if(this.device=i,this.float32Filterable=i.features.has("float32-filterable"),this.presentFormat=u,this.startTime=m,this.settings={outputTexture:He.Scene,oceanWaveModel:dn.FFTDisplacement,outputTextureSettings:new Map([[He.Scene,{flip:!1,color_gain:{r:1,g:1,b:1}}],[He.TransmittanceLUT,{flip:!0,color_gain:{r:1,g:1,b:1}}],[He.MultiscatterLUT,{flip:!0,color_gain:{r:15,g:15,b:15}}],[He.SkyviewLUT,{flip:!1,color_gain:{r:8,g:8,b:8}}],[He.GBufferColor,{flip:!1,color_gain:{r:1,g:1,b:1}}],[He.GBufferNormal,{flip:!1,color_gain:{r:1,g:1,b:1}}],[He.FFTWaveSpectrumGaussianNoise,{flip:!1,color_gain:{r:1,g:1,b:1}}],[He.FFTWaveFourierAmplitude,{flip:!1,color_gain:{r:100,g:100,b:100}}],[He.FFTWaveAmplitude_Dy,{flip:!1,color_gain:{r:100,g:100,b:100}}],[He.FFTWaveAmplitude_Dx_plus_iDz,{flip:!1,color_gain:{r:100,g:100,b:100}}],[He.FFTWaveDisplacement,{flip:!1,color_gain:{r:1,g:1,b:1}}]]),currentOutputTextureSettings:{flip:!1,color_gain:{r:1,g:1,b:1}},orbit:{timeHours:5.5,timeSpeedupFactor:400,paused:!1,reversed:!1,inclinationRadians:Math.PI/2,sunsetAzimuthRadians:0},renderScale:1.5},this.uiReadonly={averageFPS:0,frametimeControllers:new Map},this.scaledSize={width:1,height:1},this.rawSize={width:1,height:1},this.settings.outputTextureSettings.has(this.settings.outputTexture)){const M=this.settings.outputTextureSettings.get(this.settings.outputTexture);this.settings.currentOutputTextureSettings.flip=M.flip,this.settings.currentOutputTextureSettings.color_gain.r=M.color_gain.r,this.settings.currentOutputTextureSettings.color_gain.g=M.color_gain.g,this.settings.currentOutputTextureSettings.color_gain.b=M.color_gain.b}if(this.frametimeAverages=new Map,i.features.has("timestamp-query")){const R=2*Object.keys($s).map(G=>Number(G)).filter(isNaN).length;this.frametimeQuery={mappingLock:!1,querySet:i.createQuerySet({type:"timestamp",count:R}),writeBuffer:i.createBuffer({size:8*R,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE}),readBuffer:i.createBuffer({size:8*R,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})},Object.keys($s).map(G=>Number(G)).filter(G=>!isNaN(G)).forEach(G=>{const W=G;this.frametimeAverages.set(W,new pd(400)),Object.assign(this.uiReadonly,String(W),0)})}else console.warn("WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages."),this.frametimeAverages.set(0,new pd(400));this.dummyFrameCounter=10,this.probationFrameCounter=100,this.globalUBO=new zm(i),this.globalUBO.writeToGPU(this.device),this.gbuffer=new sd(i,{width:1,height:1}),this.transmittanceLUTPassResources=new Wm(this.device,Go,this.globalUBO),this.multiscatterLUTPassResources=new Hm(this.device,Bo,this.transmittanceLUTPassResources.view,this.float32Filterable,this.globalUBO),this.skyviewLUTPassResources=new qm(this.device,Wo,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.float32Filterable,this.globalUBO),this.fftWaveSpectrumResources=new eg(this.device,this.globalUBO);const g=this.fftWaveSpectrumResources.views();this.waveSurfaceDisplacementPassResources=new og(this.device,this.globalUBO,this.gbuffer.colorWithDepthInAlpha.format,this.gbuffer.normal.format,this.gbuffer.depth.format,g.displacementView);const w=new Uint32Array([0,1,2,0,2,3]);this.fullscreenQuadIndexBuffer=i.createBuffer({size:w.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),i.queue.writeBuffer(this.fullscreenQuadIndexBuffer,0,w,0,w.length),this.atmosphereCameraPassResources=new ug(this.device,this.gbuffer.readGroupLayout,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.skyviewLUTPassResources.view,this.float32Filterable,this.globalUBO),this.fullscreenQuadPassResources=new dg(this.device,new Map([[He.Scene,this.atmosphereCameraPassResources.outputColorView],[He.TransmittanceLUT,this.transmittanceLUTPassResources.view],[He.MultiscatterLUT,this.multiscatterLUTPassResources.view],[He.SkyviewLUT,this.skyviewLUTPassResources.view],[He.GBufferColor,this.gbuffer.colorWithDepthInAlphaView],[He.GBufferNormal,this.gbuffer.normalView],[He.FFTWaveSpectrumGaussianNoise,g.gaussianNoiseView],[He.FFTWaveFourierAmplitude,g.fourierAmplitudeView],[He.FFTWaveAmplitude_Dy,g.amplitude_Dy_View],[He.FFTWaveAmplitude_Dx_plus_iDz,g.amplitude_Dx_plus_iDz_View],[He.FFTWaveDisplacement,g.displacementView]]),this.presentFormat);const E=i.createCommandEncoder();let P=E.beginComputePass();P.setPipeline(this.transmittanceLUTPassResources.pipeline),P.setBindGroup(0,this.transmittanceLUTPassResources.group0),P.setBindGroup(1,this.transmittanceLUTPassResources.group1),P.dispatchWorkgroups(Math.ceil(Go.width/16),Math.ceil(Go.height/16)),P.end(),P=E.beginComputePass(),P.setPipeline(this.multiscatterLUTPassResources.pipeline),P.setBindGroup(0,this.multiscatterLUTPassResources.group0),P.setBindGroup(1,this.multiscatterLUTPassResources.group1),P.dispatchWorkgroups(Math.ceil(Bo.width/16),Math.ceil(Bo.height/16)),P.end(),i.queue.submit([E.finish()])}setupUI(i){const u=i.add(this.settings,"outputTexture",{Scene:He.Scene,"Transmittance LUT":He.TransmittanceLUT,"Multiscatter LUT":He.MultiscatterLUT,"Skyview LUT":He.SkyviewLUT,"GBuffer Color":He.GBufferColor,"GBuffer Normal":He.GBufferNormal,"FFT Wave Gaussian Noise":He.FFTWaveSpectrumGaussianNoise,"FFT Wave Initial Amplitude":He.FFTWaveFourierAmplitude,"FFT Wave Time-Dependent Amplitude (Dy)":He.FFTWaveAmplitude_Dy,"FFT Wave Time-Dependent Amplitude (Dx + i*Dz)":He.FFTWaveAmplitude_Dx_plus_iDz,"FFT Wave Displacement":He.FFTWaveDisplacement}).name("Render Output").listen();i.add(this.settings,"renderScale",Gs).name("Render Resolution Scale").decimals(1).onFinishChange(E=>{this.handleResize(this.rawSize.width,this.rawSize.height)}).listen(),i.add(this.uiReadonly,"averageFPS").decimals(1).disable().name("Average FPS").listen(),i.add(this.settings,"oceanWaveModel",{Cosine:dn.Cosine,Gerstner:dn.Gerstner,"FFT Waves":dn.FFTDisplacement}).name("Ocean Wave Model");const m=i.addFolder("Sun Parameters").open();m.add(this.settings.orbit,"timeHours").min(0).max(24).name("Time in Hours").listen(),m.add(this.settings.orbit,"timeSpeedupFactor").min(1).max(5e4).step(1).name("Time Multiplier"),m.add(this.settings.orbit,"paused").name("Pause Sun"),m.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?18+.5:6-.5}},"fn").name("Skip to Sunrise"),m.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?6+.5:18-.5}},"fn").name("Skip to Sunset"),m.add(this.settings.orbit,"reversed").name("Reverse Sun"),m.add(this.settings.orbit,"sunsetAzimuthRadians").name("Sun Azimuth").min(0).max(2*Math.PI),m.add(this.settings.orbit,"inclinationRadians").name("Sun Inclination").min(0).max(Math.PI);const g=i.addFolder("Output Transform").close();this.fullscreenQuadPassResources.uboDataByOutputTexture.has(this.settings.outputTexture)||g.hide(),g.add(this.settings.currentOutputTextureSettings,"flip").name("Flip Image").listen(),g.add({gain:0},"gain").name("RGB").min(0).max(100).onChange(E=>{this.settings.currentOutputTextureSettings.color_gain.r=E,this.settings.currentOutputTextureSettings.color_gain.g=E,this.settings.currentOutputTextureSettings.color_gain.b=E}),g.add(this.settings.currentOutputTextureSettings.color_gain,"r").name("R").min(0).max(100).listen(),g.add(this.settings.currentOutputTextureSettings.color_gain,"g").name("G").min(0).max(100).listen(),g.add(this.settings.currentOutputTextureSettings.color_gain,"b").name("B").min(0).max(100).listen(),u.onChange(E=>{const P=u._listenPrevValue;this.settings.outputTextureSettings.has(P)||this.settings.outputTextureSettings.set(P,new fd);const M=this.settings.outputTextureSettings.get(P);M.flip=this.settings.currentOutputTextureSettings.flip,Object.assign(M.color_gain,this.settings.currentOutputTextureSettings.color_gain),this.settings.outputTextureSettings.has(E)||this.settings.outputTextureSettings.set(E,new fd);const R=this.settings.outputTextureSettings.get(E);this.settings.currentOutputTextureSettings.flip=R.flip,Object.assign(this.settings.currentOutputTextureSettings.color_gain,R.color_gain)});const w=i.addFolder("Performance").close();this.frametimeAverages.forEach((E,P)=>{this.uiReadonly.frametimeControllers.set(P,w.add({value:0},"value").name(`${$s[P]} (ms)`).decimals(6).disable())})}updateOrbit(i){const u=this.settings.orbit;this.settings.orbit.paused||(u.timeHours+=(u.reversed?-1:1)*u.timeSpeedupFactor*i/36e5,u.timeHours=u.timeHours-Math.floor(u.timeHours/24)*24);const m=2*Math.PI/24,g=(12-u.timeHours)*m,w=Oe.create(-Math.sin(u.sunsetAzimuthRadians),0,Math.cos(u.sunsetAzimuthRadians)),E=Oe.create(Math.cos(u.sunsetAzimuthRadians)*Math.cos(u.inclinationRadians),Math.sin(u.inclinationRadians),Math.sin(u.sunsetAzimuthRadians)*Math.cos(u.inclinationRadians)),P=Oe.add(Oe.scale(w,Math.sin(g)),Oe.scale(E,Math.cos(g)));Oe.scale(P,-1,this.globalUBO.data.light.forward)}updateFPSValues(i){var u,m,g,w;i>.01&&((u=this.frametimeAverages.get(0))==null||u.push(i),this.uiReadonly.averageFPS=1e3/(((m=this.frametimeAverages.get(0))==null?void 0:m.average)??1e3),(w=this.uiReadonly.frametimeControllers.get(0))==null||w.setValue(((g=this.frametimeAverages.get(0))==null?void 0:g.average)??-1))}updateCamera(i){const u=60*Math.PI/180,w=Ot.perspective(u,i,.1,1e3),E=[0,10,-20],P=Ot.lookAt(E,[0,0,400],[0,1,0]);Object.assign(this.globalUBO.data.camera,{invProj:Ot.inverse(w),invView:Ot.inverse(P),projView:Ot.mul(w,P),position:$t.create(E[0],E[1],E[2],1)})}updateTime(i){const u=this.globalUBO.data.time;u.timeSeconds+=i/1e3,u.timeSeconds>60&&(u.timeSeconds=0)}draw(i,u,m,g){if(this.dummyFrameCounter>0){this.dummyFrameCounter-=1;return}const w=i.createView();if(this.updateFPSValues(g),this.probationFrameCounter>49){this.probationFrameCounter-=1,this.probationFrameCounter<50&&(console.log(`Average FPS without load is ${this.uiReadonly.averageFPS}`),this.targetFPS=this.uiReadonly.averageFPS);return}if(this.probationFrameCounter>0&&(this.probationFrameCounter-=1,this.probationFrameCounter<1)){console.log(`Average FPS with load is ${this.uiReadonly.averageFPS}`);const B=this.uiReadonly.averageFPS/this.targetFPS;this.settings.renderScale=Gs[0],Gs.forEach(X=>{Math.abs(X-B)<Math.abs(this.settings.renderScale-B)&&(this.settings.renderScale=X)}),this.handleResize(this.rawSize.width,this.rawSize.height)}this.updateCamera(u),this.updateTime(g),this.updateOrbit(g),this.globalUBO.writeToGPU(this.device);const E={r:0,g:0,b:0,a:1},P=this.device.createCommandEncoder({label:"Main"}),M=new Map;let R=0;M.set(2,R),this.fftWaveSpectrumResources.record(this.device,P,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:R++,endWriteIndex:R++}:void 0),M.set(3,R),this.waveSurfaceDisplacementPassResources.record(this.device,P,this.globalUBO,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:R++,endWriteIndex:R++}:void 0,this.settings.oceanWaveModel,{colorWithDepthInAlpha:this.gbuffer.colorWithDepthInAlphaView,normal:this.gbuffer.normalView,depth:this.gbuffer.depthView}),M.set(1,R);const G=P.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:R++,endOfPassWriteIndex:R++}:void 0,label:"Skyview LUT"});G.setPipeline(this.skyviewLUTPassResources.pipeline),G.setBindGroup(0,this.skyviewLUTPassResources.group0),G.setBindGroup(1,this.skyviewLUTPassResources.group1),G.dispatchWorkgroups(Math.ceil(Wo.width/16),Math.ceil(Wo.height/(16*1.9))),G.end(),M.set(4,R);const W=P.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:R++,endOfPassWriteIndex:R++}:void 0,label:"Atmosphere Camera"});W.setPipeline(this.atmosphereCameraPassResources.pipeline),W.setBindGroup(0,this.atmosphereCameraPassResources.group0),W.setBindGroup(1,this.atmosphereCameraPassResources.group1),W.setBindGroup(2,this.gbuffer.readGroup),W.dispatchWorkgroups(Math.ceil(this.atmosphereCameraPassResources.outputColor.width/16),Math.ceil(this.atmosphereCameraPassResources.outputColor.height/16)),W.end(),M.set(5,R);const N=P.beginRenderPass({colorAttachments:[{clearValue:E,loadOp:"clear",storeOp:"store",view:w}],timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:R++,endOfPassWriteIndex:R++}:void 0,label:"Fullscreen Pass"});if(this.fullscreenQuadPassResources.uboDataByOutputTexture.has(this.settings.outputTexture)){const B=this.settings.currentOutputTextureSettings,X=this.fullscreenQuadPassResources.uboDataByOutputTexture.get(this.settings.outputTexture);X.color_gain=$t.create(B.color_gain.r,B.color_gain.g,B.color_gain.b,1),X.vertex_scale=$t.create(1,B.flip?-1:1,1,1)}N.setPipeline(this.fullscreenQuadPassResources.pipeline),N.setIndexBuffer(this.fullscreenQuadIndexBuffer,"uint32",0,this.fullscreenQuadIndexBuffer.size),N.setBindGroup(0,this.fullscreenQuadPassResources.group0ByOutputTexture.get(this.settings.outputTexture));const J=this.fullscreenQuadPassResources.uboDataByOutputTexture.get(this.settings.outputTexture);if(J?this.fullscreenQuadPassResources.ubo.data=J:this.fullscreenQuadPassResources.ubo.data={color_gain:$t.create(1,1,1,1),vertex_scale:$t.create(1,1,1,1)},this.fullscreenQuadPassResources.ubo.writeToGPU(this.device),N.setBindGroup(1,this.fullscreenQuadPassResources.group1),this.probationFrameCounter<1&&N.drawIndexed(6,1,0,0,0),N.end(),this.frametimeQuery!=null&&!this.frametimeQuery.mappingLock&&(P.resolveQuerySet(this.frametimeQuery.querySet,0,2*M.size,this.frametimeQuery.writeBuffer,0),P.copyBufferToBuffer(this.frametimeQuery.writeBuffer,0,this.frametimeQuery.readBuffer,0,this.frametimeQuery.readBuffer.size)),this.device.queue.submit([P.finish()]),this.frametimeQuery!==void 0&&!this.frametimeQuery.mappingLock){const B=this.frametimeQuery;this.frametimeQuery.mappingLock=!0,this.frametimeQuery.readBuffer.mapAsync(GPUMapMode.READ,0,this.frametimeQuery.readBuffer.size).then(()=>{const X=new BigInt64Array(B.readBuffer.getMappedRange(0,B.readBuffer.size));M.forEach((ne,Q)=>{var ve,Pe,De;const le=Number(X.at(ne+1)-X.at(ne))/1e6;(ve=this.frametimeAverages.get(Q))==null||ve.push(le),(De=this.uiReadonly.frametimeControllers.get(Q))==null||De.setValue(((Pe=this.frametimeAverages.get(Q))==null?void 0:Pe.average)??-1)}),B.readBuffer.unmap(),B.mappingLock=!1}).catch(X=>{console.error("Failed while retrieving frametime values from GPU:"),console.error(X)})}}handleResize(i,u){const m={width:i*this.settings.renderScale,height:u*this.settings.renderScale},g=8192,w=268435456,E=16,P=(M,R)=>M<g&&R<g&&M*R*E<w;P(m.width,m.height)?this.scaledSize=m:(Gs.slice().reverse().some(M=>{if(P(i*M,u*M))return this.settings.renderScale=M,!0}),console.warn(`During resize: Texture size (${m.width},${m.height}) exceeds WebGPU guaranteed limit (8192, 8192).
								Defaulting to highest possible render scale of ${this.settings.renderScale}`),this.scaledSize={width:i*this.settings.renderScale,height:u*this.settings.renderScale}),console.log(`Resizing to (${this.scaledSize.width},${this.scaledSize.height})`),this.rawSize={width:i,height:u},this.gbuffer=new sd(this.device,this.scaledSize,this.gbuffer),this.fullscreenQuadPassResources.rebuildOutputTextureBinding(this.device,He.GBufferColor,this.gbuffer.colorWithDepthInAlphaView),this.fullscreenQuadPassResources.rebuildOutputTextureBinding(this.device,He.GBufferNormal,this.gbuffer.normalView),this.atmosphereCameraPassResources.outputColor=this.device.createTexture({format:this.atmosphereCameraPassResources.outputColor.format,size:this.scaledSize,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.atmosphereCameraPassResources.outputColorView=this.atmosphereCameraPassResources.outputColor.createView(),this.fullscreenQuadPassResources.rebuildOutputTextureBinding(this.device,He.Scene,this.atmosphereCameraPassResources.outputColorView),this.atmosphereCameraPassResources.group0=this.device.createBindGroup({layout:this.atmosphereCameraPassResources.group0Layout,entries:[{binding:0,resource:this.atmosphereCameraPassResources.outputColorView},{binding:1,resource:this.atmosphereCameraPassResources.lutSampler},{binding:2,resource:this.transmittanceLUTPassResources.view},{binding:3,resource:this.multiscatterLUTPassResources.view},{binding:4,resource:this.skyviewLUTPassResources.view}],label:"Atmosphere Camera Group 0"})}}const pg=(s,i,u)=>new fg(s,i,u),hg="hello-cube",Dd={name:"Hello Cube",requiredFeatures:new Set,optionalFeatures:new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]),description:"Tests WebGPU functionality with a simple spinning cube.",create:wm},js=new Map([[hg,Dd],["sky-sea",{name:"Sky and Sea",description:"Real-time rendering of a dynamic sun over the open ocean, with various models for surface waves and raymarched atmospheric scattering.",requiredFeatures:new Set,optionalFeatures:new Set(["timestamp-query","float32-filterable"]),create:pg}]]),mg=de.jsx("a",{target:"_blank",rel:"noreferrer",href:"mailto:estelle.booher@gmail.com",children:"estelle.booher@gmail.com"}),gg=de.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/EllarBooher",children:"https://github.com/EllarBooher"}),Bs=Z.memo(function({hyperlink:i,thumbnailAssets:u=[],thumbnailAltTexts:m,title:g="PLACEHOLDER TITLE",description:w="PLACEHOLDER DESCRIPTION"}){const E=de.jsx("div",{className:"display-card-thumbnails",children:u.map((P,M)=>de.jsx("div",{className:"display-card-thumbnail",children:de.jsx("img",{className:"display-card-image",src:P.toString(),alt:m[M]??null})},P.toString()))});return de.jsxs(tr,{className:"nav-card",to:i,children:[de.jsx("h2",{children:g}),de.jsx("p",{children:w}),E]})});function _g(){const s=[];js.forEach((m,g)=>{s.push(de.jsx(Bs,{hyperlink:`/webgpu-samples?sample=${g}`,externalLink:!1,thumbnailAssets:[],thumbnailAltTexts:[],title:m.name,description:m.description},g))});const i=[de.jsx(Bs,{hyperlink:"https://github.com/EllarBooher/Syzygy",thumbnailAssets:[new URL("/assets/syzygy1-CItzHwJc.png",import.meta.url)],thumbnailAltTexts:["A computer rendered sun rises over chess pieces. Application interface elements appear to the left and bottom."],title:"Syzygy",description:`
                A sandbox renderer I started to study C++ and Vulkan.
                It aims to be a testbed of various features and techniques.
            `},"Syzygy"),de.jsx(Bs,{hyperlink:"https://github.com/EllarBooher/VulkanTemplate/tree/SSAO",thumbnailAssets:[new URL("/assets/ssao1-8Qfbb4oF.png",import.meta.url)],thumbnailAltTexts:["A computer rendered building, with various decorations such as banners and pillars. Only the shadows are visible, with no color information."],title:"SSAO",description:`
                An implementation of Screen-Space Ambient Occlusion written in C++ with Vulkan.
            `},"SSAO")],u=[de.jsx(Bs,{hyperlink:"https://ellarbooher.itch.io/snail-blazer",thumbnailAssets:[new URL("/assets/snailblazer1-Bl1793QZ.png",import.meta.url),new URL("/assets/snailblazer2-CU4gYciB.png",import.meta.url)],thumbnailAltTexts:["A smirking cartoon character with yellow hair faces off against a grimacing cartoon character with blue hair. In the middle is an arena filled with magma and colorful battle effects.","A crying cartoon character with yellow hair faces off against a scowling cartoon character with blue hair. In the middle is an arena filled with magma and colorful battle effects."],title:"Snail Blazer",description:`
                A short bullet-hell made for the Bullet Hell Jam 2023 on itch.io.
                The player primarily moves via grappling on enemy projectiles and the environment,
                instead of the conventional WASD-style of movement.
            `},"Snail Blazer")];return de.jsxs(de.Fragment,{children:[de.jsxs("main",{className:"landing-main",children:[de.jsx("h1",{className:"visuallyhidden",children:"Portfolio Landing Page"}),de.jsx("p",{children:"Hello, my name is Estelle Booher. My passion is realtime rendering and engine infrastructure, and I am actively working on building a portfolio and career in computer graphics. This website is a landing spot where I will host links to various projects of mine."}),de.jsxs("p",{children:["My github is at ",gg,", where I host the source code of my projects including this website."]}),de.jsxs("p",{children:["To contact me, please email at ",mg,"."]}),de.jsx("h2",{children:"In-Browser WebGPU Samples"}),de.jsx("nav",{className:"display-grid","aria-label":"WebGPU Samples",children:s}),de.jsx("h2",{children:"Offline Computer Graphics"}),de.jsx("nav",{className:"display-grid","aria-label":"Offline Computer Graphics",children:i}),de.jsx("h2",{children:"Video Games"}),de.jsx("nav",{className:"display-grid","aria-label":"Video Games",children:u})]}),de.jsx("footer",{style:{padding:"1em"},children:"All works present are copyrighted, unless provided with external attributions or license."})]})}async function vg(s,i){if(console.log("Starting WebGPU"),!("gpu"in navigator))return Promise.reject(new Error("WebGPU is not available in this browser.",{cause:new Error("navigator.gpu is null")}));const u=navigator.gpu.requestAdapter().then(g=>g?Promise.resolve(g):Promise.reject(new Error("Requested WebGPU Adapter is not available."))).catch(g=>Promise.reject(new Error("Unable to get WebGPU Adapter",{cause:g}))),m=u.then(g=>{const w=Array.from(s.values()).filter(P=>g.features.has(P));if(w.length!=s.size){const P=`Required features unavailable: ${Array.from(s.values()).filter(M=>!g.features.has(M)).map(M=>`'${M}'`).join(",")}`;return Promise.reject(new Error("Unable to get WebGPU Device",{cause:P}))}const E=w.concat(...Array.from(i.values()).filter(P=>g.features.has(P)));return console.log(`Enabling features: '${E.join("', '")}'`),g.requestDevice({requiredFeatures:E}).catch(P=>Promise.reject(new Error("Unable to get WebGPU Device",{cause:P})))});return Promise.all([u,m]).then(g=>{const[w,E]=g;return{adapter:w,device:E}})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class xn{constructor(i,u,m,g,w="div"){this.parent=i,this.object=u,this.property=m,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(w),this.domElement.classList.add("controller"),this.domElement.classList.add(g),this.$name=document.createElement("div"),this.$name.classList.add("name"),xn.nextNameID=xn.nextNameID||0,this.$name.id=`lil-gui-name-${++xn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",E=>E.stopPropagation()),this.domElement.addEventListener("keyup",E=>E.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(m)}name(i){return this._name=i,this.$name.textContent=i,this}onChange(i){return this._onChange=i,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(i=!0){return this.disable(!i)}disable(i=!0){return i===this._disabled?this:(this._disabled=i,this.domElement.classList.toggle("disabled",i),this.$disable.toggleAttribute("disabled",i),this)}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(i){const u=this.parent.add(this.object,this.property,i);return u.name(this._name),this.destroy(),u}min(i){return this}max(i){return this}step(i){return this}decimals(i){return this}listen(i=!0){return this._listening=i,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const i=this.save();i!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=i}getValue(){return this.object[this.property]}setValue(i){return this.getValue()!==i&&(this.object[this.property]=i,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(i){return this.setValue(i),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class yg extends xn{constructor(i,u,m){super(i,u,m,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function jo(s){let i,u;return(i=s.match(/(#|0x)?([a-f0-9]{6})/i))?u=i[2]:(i=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?u=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(u=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),u?"#"+u:!1}const wg={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:jo,toHexString:jo},Pi={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},xg={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,i,u=1){const m=Pi.fromHexString(s);i[0]=(m>>16&255)/255*u,i[1]=(m>>8&255)/255*u,i[2]=(m&255)/255*u},toHexString([s,i,u],m=1){m=255/m;const g=s*m<<16^i*m<<8^u*m<<0;return Pi.toHexString(g)}},Tg={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,i,u=1){const m=Pi.fromHexString(s);i.r=(m>>16&255)/255*u,i.g=(m>>8&255)/255*u,i.b=(m&255)/255*u},toHexString({r:s,g:i,b:u},m=1){m=255/m;const g=s*m<<16^i*m<<8^u*m<<0;return Pi.toHexString(g)}},Sg=[wg,Pi,xg,Tg];function Eg(s){return Sg.find(i=>i.match(s))}class Mg extends xn{constructor(i,u,m,g){super(i,u,m,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Eg(this.initialValue),this._rgbScale=g,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const w=jo(this.$text.value);w&&this._setValueFromHexString(w)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(i){if(this._format.isPrimitive){const u=this._format.fromHexString(i);this.setValue(u)}else this._format.fromHexString(i,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(i){return this._setValueFromHexString(i),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Vo extends xn{constructor(i,u,m){super(i,u,m,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",g=>{g.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class bg extends xn{constructor(i,u,m,g,w,E){super(i,u,m,"number"),this._initInput(),this.min(g),this.max(w);const P=E!==void 0;this.step(P?E:this._getImplicitStep(),P),this.updateDisplay()}decimals(i){return this._decimals=i,this.updateDisplay(),this}min(i){return this._min=i,this._onUpdateMinMax(),this}max(i){return this._max=i,this._onUpdateMinMax(),this}step(i,u=!0){return this._step=i,this._stepExplicit=u,this}updateDisplay(){const i=this.getValue();if(this._hasSlider){let u=(i-this._min)/(this._max-this._min);u=Math.max(0,Math.min(u,1)),this.$fill.style.width=u*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?i:i.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const u=()=>{let Y=parseFloat(this.$input.value);isNaN(Y)||(this._stepExplicit&&(Y=this._snap(Y)),this.setValue(this._clamp(Y)))},m=Y=>{const le=parseFloat(this.$input.value);isNaN(le)||(this._snapClampSetValue(le+Y),this.$input.value=this.getValue())},g=Y=>{Y.key==="Enter"&&this.$input.blur(),Y.code==="ArrowUp"&&(Y.preventDefault(),m(this._step*this._arrowKeyMultiplier(Y))),Y.code==="ArrowDown"&&(Y.preventDefault(),m(this._step*this._arrowKeyMultiplier(Y)*-1))},w=Y=>{this._inputFocused&&(Y.preventDefault(),m(this._step*this._normalizeMouseWheel(Y)))};let E=!1,P,M,R,G,W;const N=5,J=Y=>{P=Y.clientX,M=R=Y.clientY,E=!0,G=this.getValue(),W=0,window.addEventListener("mousemove",B),window.addEventListener("mouseup",X)},B=Y=>{if(E){const le=Y.clientX-P,ve=Y.clientY-M;Math.abs(ve)>N?(Y.preventDefault(),this.$input.blur(),E=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(le)>N&&X()}if(!E){const le=Y.clientY-R;W-=le*this._step*this._arrowKeyMultiplier(Y),G+W>this._max?W=this._max-G:G+W<this._min&&(W=this._min-G),this._snapClampSetValue(G+W)}R=Y.clientY},X=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",X)},ne=()=>{this._inputFocused=!0},Q=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",u),this.$input.addEventListener("keydown",g),this.$input.addEventListener("wheel",w,{passive:!1}),this.$input.addEventListener("mousedown",J),this.$input.addEventListener("focus",ne),this.$input.addEventListener("blur",Q)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const i=(Q,Y,le,ve,Pe)=>(Q-Y)/(le-Y)*(Pe-ve)+ve,u=Q=>{const Y=this.$slider.getBoundingClientRect();let le=i(Q,Y.left,Y.right,this._min,this._max);this._snapClampSetValue(le)},m=Q=>{this._setDraggingStyle(!0),u(Q.clientX),window.addEventListener("mousemove",g),window.addEventListener("mouseup",w)},g=Q=>{u(Q.clientX)},w=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",w)};let E=!1,P,M;const R=Q=>{Q.preventDefault(),this._setDraggingStyle(!0),u(Q.touches[0].clientX),E=!1},G=Q=>{Q.touches.length>1||(this._hasScrollBar?(P=Q.touches[0].clientX,M=Q.touches[0].clientY,E=!0):R(Q),window.addEventListener("touchmove",W,{passive:!1}),window.addEventListener("touchend",N))},W=Q=>{if(E){const Y=Q.touches[0].clientX-P,le=Q.touches[0].clientY-M;Math.abs(Y)>Math.abs(le)?R(Q):(window.removeEventListener("touchmove",W),window.removeEventListener("touchend",N))}else Q.preventDefault(),u(Q.touches[0].clientX)},N=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",W),window.removeEventListener("touchend",N)},J=this._callOnFinishChange.bind(this),B=400;let X;const ne=Q=>{if(Math.abs(Q.deltaX)<Math.abs(Q.deltaY)&&this._hasScrollBar)return;Q.preventDefault();const le=this._normalizeMouseWheel(Q)*this._step;this._snapClampSetValue(this.getValue()+le),this.$input.value=this.getValue(),clearTimeout(X),X=setTimeout(J,B)};this.$slider.addEventListener("mousedown",m),this.$slider.addEventListener("touchstart",G,{passive:!1}),this.$slider.addEventListener("wheel",ne,{passive:!1})}_setDraggingStyle(i,u="horizontal"){this.$slider&&this.$slider.classList.toggle("active",i),document.body.classList.toggle("lil-gui-dragging",i),document.body.classList.toggle(`lil-gui-${u}`,i)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(i){let{deltaX:u,deltaY:m}=i;return Math.floor(i.deltaY)!==i.deltaY&&i.wheelDelta&&(u=0,m=-i.wheelDelta/120,m*=this._stepExplicit?1:10),u+-m}_arrowKeyMultiplier(i){let u=this._stepExplicit?1:10;return i.shiftKey?u*=10:i.altKey&&(u/=10),u}_snap(i){let u=0;return this._hasMin?u=this._min:this._hasMax&&(u=this._max),i-=u,i=Math.round(i/this._step)*this._step,i+=u,i=parseFloat(i.toPrecision(15)),i}_clamp(i){return i<this._min&&(i=this._min),i>this._max&&(i=this._max),i}_snapClampSetValue(i){this.setValue(this._clamp(this._snap(i)))}get _hasScrollBar(){const i=this.parent.root.$children;return i.scrollHeight>i.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Pg extends xn{constructor(i,u,m,g){super(i,u,m,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(g)}options(i){return this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this.$select.replaceChildren(),this._names.forEach(u=>{const m=document.createElement("option");m.textContent=u,this.$select.appendChild(m)}),this.updateDisplay(),this}updateDisplay(){const i=this.getValue(),u=this._values.indexOf(i);return this.$select.selectedIndex=u,this.$display.textContent=u===-1?i:this._names[u],this}}class Ag extends xn{constructor(i,u,m){super(i,u,m,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",g=>{g.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Rg=`.lil-gui {
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
}`;function Lg(s){const i=document.createElement("style");i.innerHTML=s;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(i,u):document.head.appendChild(i)}let hd=!1;class il{constructor({parent:i,autoPlace:u=i===void 0,container:m,width:g,title:w="Controls",closeFolders:E=!1,injectStyles:P=!0,touchStyles:M=!0}={}){if(this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(w),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),M&&this.domElement.classList.add("allow-touch-styles"),!hd&&P&&(Lg(Rg),hd=!0),m?m.appendChild(this.domElement):u&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),g&&this.domElement.style.setProperty("--width",g+"px"),this._closeFolders=E}add(i,u,m,g,w){if(Object(m)===m)return new Pg(this,i,u,m);const E=i[u];switch(typeof E){case"number":return new bg(this,i,u,m,g,w);case"boolean":return new yg(this,i,u);case"string":return new Ag(this,i,u);case"function":return new Vo(this,i,u)}console.error(`gui.add failed
	property:`,u,`
	object:`,i,`
	value:`,E)}addColor(i,u,m=1){return new Mg(this,i,u,m)}addFolder(i){const u=new il({parent:this,title:i});return this.root._closeFolders&&u.close(),u}load(i,u=!0){return i.controllers&&this.controllers.forEach(m=>{m instanceof Vo||m._name in i.controllers&&m.load(i.controllers[m._name])}),u&&i.folders&&this.folders.forEach(m=>{m._title in i.folders&&m.load(i.folders[m._title])}),this}save(i=!0){const u={controllers:{},folders:{}};return this.controllers.forEach(m=>{if(!(m instanceof Vo)){if(m._name in u.controllers)throw new Error(`Cannot save GUI with duplicate property "${m._name}"`);u.controllers[m._name]=m.save()}}),i&&this.folders.forEach(m=>{if(m._title in u.folders)throw new Error(`Cannot save GUI with duplicate folder "${m._title}"`);u.folders[m._title]=m.save()}),u}open(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(i){this._closed!==i&&(this._closed=i,this._callOnOpenClose(this))}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const u=this.$children.clientHeight;this.$children.style.height=u+"px",this.domElement.classList.add("transition");const m=w=>{w.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",m))};this.$children.addEventListener("transitionend",m);const g=i?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!i),requestAnimationFrame(()=>{this.$children.style.height=g+"px"})}),this}title(i){return this._title=i,this.$title.textContent=i,this}reset(i=!0){return(i?this.controllersRecursive():this.controllers).forEach(m=>m.reset()),this}onChange(i){return this._onChange=i,this}_callOnChange(i){this.parent&&this.parent._callOnChange(i),this._onChange!==void 0&&this._onChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(i){this.parent&&this.parent._callOnFinishChange(i),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onOpenClose(i){return this._onOpenClose=i,this}_callOnOpenClose(i){this.parent&&this.parent._callOnOpenClose(i),this._onOpenClose!==void 0&&this._onOpenClose.call(this,i)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(i=>i.destroy())}controllersRecursive(){let i=Array.from(this.controllers);return this.folders.forEach(u=>{i=i.concat(u.controllersRecursive())}),i}foldersRecursive(){let i=Array.from(this.folders);return this.folders.forEach(u=>{i=i.concat(u.foldersRecursive())}),i}}const Ug=function({app:i}){const u=Z.useRef(),m=Z.useRef(null),g=Z.useRef(null),w=Z.useRef(),E=Z.useRef(),P=Z.useCallback(()=>{var G;const R=m.current;if(R){const W=window.devicePixelRatio;R.width=R.offsetWidth*W,R.height=R.offsetHeight*W,(G=i.handleResize)==null||G.call(i,R.width,R.height)}},[i]);Z.useEffect(()=>(P(),window.addEventListener("resize",P),()=>{window.removeEventListener("resize",P)}),[P]);const M=Z.useCallback(R=>{var W;const G=(W=m.current)==null?void 0:W.getContext("webgpu");if(G){const N=R-(E.current?E.current:0);E.current=R;const J=G.getCurrentTexture();i.draw(J,m.current.width/m.current.height,R,N),i.quit||(u.current=requestAnimationFrame(M))}},[i]);return Z.useEffect(()=>{var G,W;const R=(G=m.current)==null?void 0:G.getContext("webgpu");if(w.current&&((W=w.current)==null||W.destroy()),i.setupUI&&(w.current=new il({container:g.current}),i.setupUI(w.current)),!R){console.error("'webgpu' canvas context not found, cannot animate.");return}return R.configure({device:i.device,format:i.presentFormat}),u.current=requestAnimationFrame(M),()=>{u.current!==void 0&&cancelAnimationFrame(u.current)}},[M,i]),de.jsxs("div",{className:"canvas-container",children:[de.jsx("canvas",{className:"sample-canvas",ref:m}),de.jsx("div",{className:"gui-pane",ref:g})]})},Cg=function({sample:i}){const[u,m]=Z.useState(),g=Z.useRef(),w=Z.useRef(),[E,P]=Z.useState(!1),M=Z.useCallback(()=>{g.current&&(g.current.quit=!0)},[]),R=Z.useCallback((J,B)=>{g.current&&M(),console.log("Got WebGPU device, initializing sample app."),B.lost.then(ne=>{console.log(`WebGPU device lost - ("${ne.reason}"):
 ${ne.message}`)},ne=>{throw new Error("WebGPU device lost rejected",{cause:ne})}),B.onuncapturederror=ne=>{console.error(`WebGPU device uncaptured error: ${ne.error.message}`),m([ne.error.message]),M()};const X=navigator.gpu.getPreferredCanvasFormat();g.current=i.create(B,X,performance.now()),console.log("Finished initializing app.")},[i,M]);Z.useEffect(()=>{w.current||(P(!1),m(void 0),w.current=vg(i.requiredFeatures,i.optionalFeatures).then(({adapter:J,device:B})=>R(J,B),J=>{var B,X;console.error(J),m([J.message,((X=(B=J.cause)==null?void 0:B.toString)==null?void 0:X.call(B))??"Unknown Cause"])}).finally(()=>{w.current=void 0,P(!0)}))},[i,R]);const G=de.jsxs(de.Fragment,{children:[de.jsx("p",{children:`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.`}),de.jsx("ol",{className:"sample-errors",children:u==null?void 0:u.map(J=>de.jsx("li",{children:J},J))})]}),W=de.jsx("p",{children:"Loading..."}),N=de.jsx("div",{className:"sample-text",children:u?G:W});return de.jsx(de.Fragment,{children:E&&g.current?de.jsx(Ug,{app:g.current}):N})},Dg=Z.memo(function(){const[i,u]=Ld(),m=[],g=[];js.forEach((M,R)=>{const G=`/webgpu-samples?sample=${R}`;m.push(de.jsx("li",{children:de.jsx(tr,{to:G,children:M.name},R)},R)),g.push(de.jsxs(tr,{className:"nav-card",to:G,children:[de.jsx("h2",{children:M.name}),de.jsx("p",{children:M.description})]},R))});const w=i.get("sample"),E=w?js.get(w):void 0;if(w&&!E&&(i.delete("sample"),u(i)),E==null)return de.jsx("main",{className:"sample",children:de.jsxs("div",{className:"sample-text",children:[de.jsx("h1",{children:"WebGPU Samples"}),de.jsx("nav",{"aria-label":"WebGPU Samples",className:"nav-card-container",children:g})]})});const P=de.jsxs("nav",{"aria-label":"WebGPU Samples",className:"sample-sidebar",children:[de.jsx("h2",{children:"Samples"}),de.jsx("hr",{}),de.jsx("ul",{children:m})]});return de.jsxs("main",{className:"sample",children:[de.jsx("h1",{className:"visuallyhidden",children:"WebGPU Animated Sample"}),P,de.jsx(Cg,{sample:E})]})}),md=new Map([["","Estelle Booher"],["webgpu-samples","WebGPU Samples"]]),zg=Z.memo(function(){var E;const i=Sn(),[u,m]=Ld(),g=[de.jsx(tr,{to:"/",children:md.get("")},"root")];if(i.pathname!="/"){const P=i.pathname.substring(1).split("/");let M="/";g.push(...P.map((R,G)=>{const W=md.get(R),N=G>0?"/":"";return M=M.concat(`${N}${R}`),de.jsxs(Z.Fragment,{children:[" > ",de.jsx(tr,{to:M,children:W||R})]},M)}))}const w=u.get("sample");return w&&i.pathname=="/webgpu-samples"&&g.push(de.jsxs(Z.Fragment,{children:[" > ",de.jsx(tr,{to:i.pathname+i.search,children:((E=js.get(w))==null?void 0:E.name)??Dd.name})]},"sample-caboose")),de.jsx("nav",{className:"main-nav","aria-label":"Main",children:g})});gd();const Ig=document.getElementById("root");Dp.createRoot(Ig).render(de.jsx(Z.StrictMode,{children:de.jsxs(Yh,{children:[!1,de.jsx(zg,{}),de.jsxs(Eh,{children:[de.jsx(Ws,{index:!0,element:de.jsx(_g,{})}),de.jsx(Ws,{path:"webgpu-samples",element:de.jsx(Dg,{})}),de.jsx(Ws,{path:"*",element:de.jsx(Th,{to:"/",replace:!0})})]})]})}));
