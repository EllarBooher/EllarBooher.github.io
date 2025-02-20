var zp=Object.defineProperty;var Ap=(a,i,o)=>i in a?zp(a,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[i]=o;var K=(a,i,o)=>Ap(a,typeof i!="symbol"?i+"":i,o);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))f(_);new MutationObserver(_=>{for(const w of _)if(w.type==="childList")for(const x of w.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&f(x)}).observe(document,{childList:!0,subtree:!0});function o(_){const w={};return _.integrity&&(w.integrity=_.integrity),_.referrerPolicy&&(w.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?w.credentials="include":_.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function f(_){if(_.ep)return;_.ep=!0;const w=o(_);fetch(_.href,w)}})();var Uo={exports:{}},Ti={},Co={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc;function Pp(){if(Oc)return We;Oc=1;var a=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),x=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),O=Symbol.iterator;function F(I){return I===null||typeof I!="object"?null:(I=O&&I[O]||I["@@iterator"],typeof I=="function"?I:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,te={};function X(I,ne,Me){this.props=I,this.context=ne,this.refs=te,this.updater=Me||Z}X.prototype.isReactComponent={},X.prototype.setState=function(I,ne){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ne,"setState")},X.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function W(){}W.prototype=X.prototype;function J(I,ne,Me){this.props=I,this.context=ne,this.refs=te,this.updater=Me||Z}var ue=J.prototype=new W;ue.constructor=J,j(ue,X.prototype),ue.isPureReactComponent=!0;var fe=Array.isArray,Re=Object.prototype.hasOwnProperty,ke={current:null},De={key:!0,ref:!0,__self:!0,__source:!0};function Ne(I,ne,Me){var Te,Ce={},Ue=null,p=null;if(ne!=null)for(Te in ne.ref!==void 0&&(p=ne.ref),ne.key!==void 0&&(Ue=""+ne.key),ne)Re.call(ne,Te)&&!De.hasOwnProperty(Te)&&(Ce[Te]=ne[Te]);var M=arguments.length-2;if(M===1)Ce.children=Me;else if(1<M){for(var d=Array(M),m=0;m<M;m++)d[m]=arguments[m+2];Ce.children=d}if(I&&I.defaultProps)for(Te in M=I.defaultProps,M)Ce[Te]===void 0&&(Ce[Te]=M[Te]);return{$$typeof:a,type:I,key:Ue,ref:p,props:Ce,_owner:ke.current}}function Ie(I,ne){return{$$typeof:a,type:I.type,key:ne,ref:I.ref,props:I.props,_owner:I._owner}}function Fe(I){return typeof I=="object"&&I!==null&&I.$$typeof===a}function qe(I){var ne={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Me){return ne[Me]})}var xe=/\/+/g;function Le(I,ne){return typeof I=="object"&&I!==null&&I.key!=null?qe(""+I.key):ne.toString(36)}function Se(I,ne,Me,Te,Ce){var Ue=typeof I;(Ue==="undefined"||Ue==="boolean")&&(I=null);var p=!1;if(I===null)p=!0;else switch(Ue){case"string":case"number":p=!0;break;case"object":switch(I.$$typeof){case a:case i:p=!0}}if(p)return p=I,Ce=Ce(p),I=Te===""?"."+Le(p,0):Te,fe(Ce)?(Me="",I!=null&&(Me=I.replace(xe,"$&/")+"/"),Se(Ce,ne,Me,"",function(m){return m})):Ce!=null&&(Fe(Ce)&&(Ce=Ie(Ce,Me+(!Ce.key||p&&p.key===Ce.key?"":(""+Ce.key).replace(xe,"$&/")+"/")+I)),ne.push(Ce)),1;if(p=0,Te=Te===""?".":Te+":",fe(I))for(var M=0;M<I.length;M++){Ue=I[M];var d=Te+Le(Ue,M);p+=Se(Ue,ne,Me,d,Ce)}else if(d=F(I),typeof d=="function")for(I=d.call(I),M=0;!(Ue=I.next()).done;)Ue=Ue.value,d=Te+Le(Ue,M++),p+=Se(Ue,ne,Me,d,Ce);else if(Ue==="object")throw ne=String(I),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return p}function Ye(I,ne,Me){if(I==null)return I;var Te=[],Ce=0;return Se(I,Te,"","",function(Ue){return ne.call(Me,Ue,Ce++)}),Te}function $e(I){if(I._status===-1){var ne=I._result;ne=ne(),ne.then(function(Me){(I._status===0||I._status===-1)&&(I._status=1,I._result=Me)},function(Me){(I._status===0||I._status===-1)&&(I._status=2,I._result=Me)}),I._status===-1&&(I._status=0,I._result=ne)}if(I._status===1)return I._result.default;throw I._result}var Ve={current:null},le={transition:null},ye={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:le,ReactCurrentOwner:ke};function se(){throw Error("act(...) is not supported in production builds of React.")}return We.Children={map:Ye,forEach:function(I,ne,Me){Ye(I,function(){ne.apply(this,arguments)},Me)},count:function(I){var ne=0;return Ye(I,function(){ne++}),ne},toArray:function(I){return Ye(I,function(ne){return ne})||[]},only:function(I){if(!Fe(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},We.Component=X,We.Fragment=o,We.Profiler=_,We.PureComponent=J,We.StrictMode=f,We.Suspense=b,We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,We.act=se,We.cloneElement=function(I,ne,Me){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Te=j({},I.props),Ce=I.key,Ue=I.ref,p=I._owner;if(ne!=null){if(ne.ref!==void 0&&(Ue=ne.ref,p=ke.current),ne.key!==void 0&&(Ce=""+ne.key),I.type&&I.type.defaultProps)var M=I.type.defaultProps;for(d in ne)Re.call(ne,d)&&!De.hasOwnProperty(d)&&(Te[d]=ne[d]===void 0&&M!==void 0?M[d]:ne[d])}var d=arguments.length-2;if(d===1)Te.children=Me;else if(1<d){M=Array(d);for(var m=0;m<d;m++)M[m]=arguments[m+2];Te.children=M}return{$$typeof:a,type:I.type,key:Ce,ref:Ue,props:Te,_owner:p}},We.createContext=function(I){return I={$$typeof:x,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:w,_context:I},I.Consumer=I},We.createElement=Ne,We.createFactory=function(I){var ne=Ne.bind(null,I);return ne.type=I,ne},We.createRef=function(){return{current:null}},We.forwardRef=function(I){return{$$typeof:z,render:I}},We.isValidElement=Fe,We.lazy=function(I){return{$$typeof:G,_payload:{_status:-1,_result:I},_init:$e}},We.memo=function(I,ne){return{$$typeof:A,type:I,compare:ne===void 0?null:ne}},We.startTransition=function(I){var ne=le.transition;le.transition={};try{I()}finally{le.transition=ne}},We.unstable_act=se,We.useCallback=function(I,ne){return Ve.current.useCallback(I,ne)},We.useContext=function(I){return Ve.current.useContext(I)},We.useDebugValue=function(){},We.useDeferredValue=function(I){return Ve.current.useDeferredValue(I)},We.useEffect=function(I,ne){return Ve.current.useEffect(I,ne)},We.useId=function(){return Ve.current.useId()},We.useImperativeHandle=function(I,ne,Me){return Ve.current.useImperativeHandle(I,ne,Me)},We.useInsertionEffect=function(I,ne){return Ve.current.useInsertionEffect(I,ne)},We.useLayoutEffect=function(I,ne){return Ve.current.useLayoutEffect(I,ne)},We.useMemo=function(I,ne){return Ve.current.useMemo(I,ne)},We.useReducer=function(I,ne,Me){return Ve.current.useReducer(I,ne,Me)},We.useRef=function(I){return Ve.current.useRef(I)},We.useState=function(I){return Ve.current.useState(I)},We.useSyncExternalStore=function(I,ne,Me){return Ve.current.useSyncExternalStore(I,ne,Me)},We.useTransition=function(){return Ve.current.useTransition()},We.version="18.3.1",We}var Nc;function Ko(){return Nc||(Nc=1,Co.exports=Pp()),Co.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc;function Rp(){if(Gc)return Ti;Gc=1;var a=Ko(),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,_=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function x(z,b,A){var G,O={},F=null,Z=null;A!==void 0&&(F=""+A),b.key!==void 0&&(F=""+b.key),b.ref!==void 0&&(Z=b.ref);for(G in b)f.call(b,G)&&!w.hasOwnProperty(G)&&(O[G]=b[G]);if(z&&z.defaultProps)for(G in b=z.defaultProps,b)O[G]===void 0&&(O[G]=b[G]);return{$$typeof:i,type:z,key:F,ref:Z,props:O,_owner:_.current}}return Ti.Fragment=o,Ti.jsx=x,Ti.jsxs=x,Ti}var Bc;function Lp(){return Bc||(Bc=1,Uo.exports=Rp()),Uo.exports}var ce=Lp(),Y=Ko(),Na={},ko={exports:{}},Ht={},Io={exports:{}},Fo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc;function Up(){return Wc||(Wc=1,function(a){function i(le,ye){var se=le.length;le.push(ye);e:for(;0<se;){var I=se-1>>>1,ne=le[I];if(0<_(ne,ye))le[I]=ye,le[se]=ne,se=I;else break e}}function o(le){return le.length===0?null:le[0]}function f(le){if(le.length===0)return null;var ye=le[0],se=le.pop();if(se!==ye){le[0]=se;e:for(var I=0,ne=le.length,Me=ne>>>1;I<Me;){var Te=2*(I+1)-1,Ce=le[Te],Ue=Te+1,p=le[Ue];if(0>_(Ce,se))Ue<ne&&0>_(p,Ce)?(le[I]=p,le[Ue]=se,I=Ue):(le[I]=Ce,le[Te]=se,I=Te);else if(Ue<ne&&0>_(p,se))le[I]=p,le[Ue]=se,I=Ue;else break e}}return ye}function _(le,ye){var se=le.sortIndex-ye.sortIndex;return se!==0?se:le.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;a.unstable_now=function(){return w.now()}}else{var x=Date,z=x.now();a.unstable_now=function(){return x.now()-z}}var b=[],A=[],G=1,O=null,F=3,Z=!1,j=!1,te=!1,X=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ue(le){for(var ye=o(A);ye!==null;){if(ye.callback===null)f(A);else if(ye.startTime<=le)f(A),ye.sortIndex=ye.expirationTime,i(b,ye);else break;ye=o(A)}}function fe(le){if(te=!1,ue(le),!j)if(o(b)!==null)j=!0,$e(Re);else{var ye=o(A);ye!==null&&Ve(fe,ye.startTime-le)}}function Re(le,ye){j=!1,te&&(te=!1,W(Ne),Ne=-1),Z=!0;var se=F;try{for(ue(ye),O=o(b);O!==null&&(!(O.expirationTime>ye)||le&&!qe());){var I=O.callback;if(typeof I=="function"){O.callback=null,F=O.priorityLevel;var ne=I(O.expirationTime<=ye);ye=a.unstable_now(),typeof ne=="function"?O.callback=ne:O===o(b)&&f(b),ue(ye)}else f(b);O=o(b)}if(O!==null)var Me=!0;else{var Te=o(A);Te!==null&&Ve(fe,Te.startTime-ye),Me=!1}return Me}finally{O=null,F=se,Z=!1}}var ke=!1,De=null,Ne=-1,Ie=5,Fe=-1;function qe(){return!(a.unstable_now()-Fe<Ie)}function xe(){if(De!==null){var le=a.unstable_now();Fe=le;var ye=!0;try{ye=De(!0,le)}finally{ye?Le():(ke=!1,De=null)}}else ke=!1}var Le;if(typeof J=="function")Le=function(){J(xe)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Ye=Se.port2;Se.port1.onmessage=xe,Le=function(){Ye.postMessage(null)}}else Le=function(){X(xe,0)};function $e(le){De=le,ke||(ke=!0,Le())}function Ve(le,ye){Ne=X(function(){le(a.unstable_now())},ye)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(le){le.callback=null},a.unstable_continueExecution=function(){j||Z||(j=!0,$e(Re))},a.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ie=0<le?Math.floor(1e3/le):5},a.unstable_getCurrentPriorityLevel=function(){return F},a.unstable_getFirstCallbackNode=function(){return o(b)},a.unstable_next=function(le){switch(F){case 1:case 2:case 3:var ye=3;break;default:ye=F}var se=F;F=ye;try{return le()}finally{F=se}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(le,ye){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var se=F;F=le;try{return ye()}finally{F=se}},a.unstable_scheduleCallback=function(le,ye,se){var I=a.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,le){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,le={id:G++,callback:ye,priorityLevel:le,startTime:se,expirationTime:ne,sortIndex:-1},se>I?(le.sortIndex=se,i(A,le),o(b)===null&&le===o(A)&&(te?(W(Ne),Ne=-1):te=!0,Ve(fe,se-I))):(le.sortIndex=ne,i(b,le),j||Z||(j=!0,$e(Re))),le},a.unstable_shouldYield=qe,a.unstable_wrapCallback=function(le){var ye=F;return function(){var se=F;F=ye;try{return le.apply(this,arguments)}finally{F=se}}}}(Fo)),Fo}var Vc;function Cp(){return Vc||(Vc=1,Io.exports=Up()),Io.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc;function kp(){if(qc)return Ht;qc=1;var a=Ko(),i=Cp();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,_={};function w(e,t){x(e,t),x(e+"Capture",t)}function x(e,t){for(_[e]=t,e=0;e<t.length;e++)f.add(t[e])}var z=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,A=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},O={};function F(e){return b.call(O,e)?!0:b.call(G,e)?!1:A.test(e)?O[e]=!0:(G[e]=!0,!1)}function Z(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,t,n,r){if(t===null||typeof t>"u"||Z(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function te(e,t,n,r,s,u,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=g}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new te(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];X[t]=new te(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new te(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new te(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new te(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new te(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new te(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new te(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new te(e,5,!1,e.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function J(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(W,J);X[t]=new te(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(W,J);X[t]=new te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(W,J);X[t]=new te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new te(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new te(e,1,!1,e.toLowerCase(),null,!0,!0)});function ue(e,t,n,r){var s=X.hasOwnProperty(t)?X[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(j(t,n,s,r)&&(n=null),r||s===null?F(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fe=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Re=Symbol.for("react.element"),ke=Symbol.for("react.portal"),De=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),qe=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),Ye=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),Ve=Symbol.for("react.offscreen"),le=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,I;function ne(e){if(I===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return`
`+I+e}var Me=!1;function Te(e,t){if(!e||Me)return"";Me=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch($){var r=$}Reflect.construct(e,[],t)}else{try{t.call()}catch($){r=$}e.call(t.prototype)}else{try{throw Error()}catch($){r=$}e()}}catch($){if($&&r&&typeof $.stack=="string"){for(var s=$.stack.split(`
`),u=r.stack.split(`
`),g=s.length-1,D=u.length-1;1<=g&&0<=D&&s[g]!==u[D];)D--;for(;1<=g&&0<=D;g--,D--)if(s[g]!==u[D]){if(g!==1||D!==1)do if(g--,D--,0>D||s[g]!==u[D]){var R=`
`+s[g].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=g&&0<=D);break}}}finally{Me=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ne(e):""}function Ce(e){switch(e.tag){case 5:return ne(e.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return e=Te(e.type,!1),e;case 11:return e=Te(e.type.render,!1),e;case 1:return e=Te(e.type,!0),e;default:return""}}function Ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case De:return"Fragment";case ke:return"Portal";case Ie:return"Profiler";case Ne:return"StrictMode";case Le:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qe:return(e.displayName||"Context")+".Consumer";case Fe:return(e._context.displayName||"Context")+".Provider";case xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ye:return t=e.displayName||null,t!==null?t:Ue(e.type)||"Memo";case $e:t=e._payload,e=e._init;try{return Ue(e(t))}catch{}}return null}function p(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ue(t);case 8:return t===Ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function M(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function m(e){var t=d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(g){r=""+g,u.call(this,g)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(g){r=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function E(e){e._valueTracker||(e._valueTracker=m(e))}function P(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function V(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function l(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function v(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=M(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function c(e,t){t=t.checked,t!=null&&ue(e,"checked",t,!1)}function h(e,t){c(e,t);var n=M(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?U(e,t.type,n):t.hasOwnProperty("defaultValue")&&U(e,t.type,M(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function S(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function U(e,t,n){(t!=="number"||V(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var q=Array.isArray;function y(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+M(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function T(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function L(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(o(92));if(q(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:M(n)}}function C(e,t){var n=M(t.value),r=M(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function H(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Q(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ee(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Q(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var me,ze=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(me=me||document.createElement("div"),me.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=me.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(_e).forEach(function(e){Oe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_e[t]=_e[e]})});function Be(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_e.hasOwnProperty(e)&&_e[e]?(""+t).trim():t+"px"}function Ke(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Be(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var ut=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rt(e,t){if(t){if(ut[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ct(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pt=null;function ht(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mt=null,it=null,at=null;function yt(e){if(e=li(e)){if(typeof mt!="function")throw Error(o(280));var t=e.stateNode;t&&(t=ea(t),mt(e.stateNode,e.type,t))}}function wt(e){it?at?at.push(e):at=[e]:it=e}function xt(){if(it){var e=it,t=at;if(at=it=null,yt(e),t)for(e=0;e<t.length;e++)yt(t[e])}}function St(e,t){return e(t)}function Pt(){}var Mt=!1;function Rt(e,t,n){if(Mt)return e(t,n);Mt=!0;try{return St(e,t,n)}finally{Mt=!1,(it!==null||at!==null)&&(Pt(),xt())}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=ea(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var kn=!1;if(z)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){kn=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{kn=!1}function gr(e,t,n,r,s,u,g,D,R){var $=Array.prototype.slice.call(arguments,3);try{t.apply(n,$)}catch(ie){this.onError(ie)}}var mn=!1,En=null,bn=!1,vr=null,Ri={onError:function(e){mn=!0,En=e}};function Li(e,t,n,r,s,u,g,D,R){mn=!1,En=null,gr.apply(Ri,arguments)}function Ui(e,t,n,r,s,u,g,D,R){if(Li.apply(this,arguments),mn){if(mn){var $=En;mn=!1,En=null}else throw Error(o(198));bn||(bn=!0,vr=$)}}function et(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ol(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ll(e){if(et(e)!==e)throw Error(o(188))}function Od(e){var t=e.alternate;if(!t){if(t=et(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return ll(s),e;if(u===r)return ll(s),t;u=u.sibling}throw Error(o(188))}if(n.return!==r.return)n=s,r=u;else{for(var g=!1,D=s.child;D;){if(D===n){g=!0,n=s,r=u;break}if(D===r){g=!0,r=s,n=u;break}D=D.sibling}if(!g){for(D=u.child;D;){if(D===n){g=!0,n=u,r=s;break}if(D===r){g=!0,r=u,n=s;break}D=D.sibling}if(!g)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function ul(e){return e=Od(e),e!==null?cl(e):null}function cl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cl(e);if(t!==null)return t;e=e.sibling}return null}var dl=i.unstable_scheduleCallback,fl=i.unstable_cancelCallback,Nd=i.unstable_shouldYield,Gd=i.unstable_requestPaint,dt=i.unstable_now,Bd=i.unstable_getCurrentPriorityLevel,Ja=i.unstable_ImmediatePriority,pl=i.unstable_UserBlockingPriority,Ci=i.unstable_NormalPriority,Wd=i.unstable_LowPriority,hl=i.unstable_IdlePriority,ki=null,_n=null;function Vd(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:$d,qd=Math.log,Hd=Math.LN2;function $d(e){return e>>>=0,e===0?32:31-(qd(e)/Hd|0)|0}var Ii=64,Fi=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,u=e.pingedLanes,g=n&268435455;if(g!==0){var D=g&~s;D!==0?r=qr(D):(u&=g,u!==0&&(r=qr(u)))}else g=n&~s,g!==0?r=qr(g):u!==0&&(r=qr(u));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,u=t&-t,s>=u||s===16&&(u&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),s=1<<n,r|=e[n],t&=~s;return r}function jd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes;0<u;){var g=31-an(u),D=1<<g,R=s[g];R===-1?(!(D&n)||D&r)&&(s[g]=jd(D,t)):R<=t&&(e.expiredLanes|=D),u&=~D}}function Za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ml(){var e=Ii;return Ii<<=1,!(Ii&4194240)&&(Ii=64),e}function es(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function Yd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-an(n),u=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~u}}function ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var Qe=0;function _l(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gl,ns,vl,yl,wl,rs=!1,Ni=[],In=null,Fn=null,On=null,$r=new Map,jr=new Map,Nn=[],Kd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xl(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function Qr(e,t,n,r,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[s]},t!==null&&(t=li(t),t!==null&&ns(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Xd(e,t,n,r,s){switch(t){case"focusin":return In=Qr(In,e,t,n,r,s),!0;case"dragenter":return Fn=Qr(Fn,e,t,n,r,s),!0;case"mouseover":return On=Qr(On,e,t,n,r,s),!0;case"pointerover":var u=s.pointerId;return $r.set(u,Qr($r.get(u)||null,e,t,n,r,s)),!0;case"gotpointercapture":return u=s.pointerId,jr.set(u,Qr(jr.get(u)||null,e,t,n,r,s)),!0}return!1}function Sl(e){var t=rr(e.target);if(t!==null){var n=et(t);if(n!==null){if(t=n.tag,t===13){if(t=ol(n),t!==null){e.blockedOn=t,wl(e.priority,function(){vl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=as(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pt=r,n.target.dispatchEvent(r),pt=null}else return t=li(n),t!==null&&ns(t),e.blockedOn=n,!1;t.shift()}return!0}function Tl(e,t,n){Gi(e)&&n.delete(t)}function Jd(){rs=!1,In!==null&&Gi(In)&&(In=null),Fn!==null&&Gi(Fn)&&(Fn=null),On!==null&&Gi(On)&&(On=null),$r.forEach(Tl),jr.forEach(Tl)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,rs||(rs=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Jd)))}function Kr(e){function t(s){return Yr(s,e)}if(0<Ni.length){Yr(Ni[0],e);for(var n=1;n<Ni.length;n++){var r=Ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&Yr(In,e),Fn!==null&&Yr(Fn,e),On!==null&&Yr(On,e),$r.forEach(t),jr.forEach(t),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)Sl(n),n.blockedOn===null&&Nn.shift()}var yr=fe.ReactCurrentBatchConfig,Bi=!0;function Zd(e,t,n,r){var s=Qe,u=yr.transition;yr.transition=null;try{Qe=1,is(e,t,n,r)}finally{Qe=s,yr.transition=u}}function ef(e,t,n,r){var s=Qe,u=yr.transition;yr.transition=null;try{Qe=4,is(e,t,n,r)}finally{Qe=s,yr.transition=u}}function is(e,t,n,r){if(Bi){var s=as(e,t,n,r);if(s===null)Ss(e,t,r,Wi,n),xl(e,r);else if(Xd(s,e,t,n,r))r.stopPropagation();else if(xl(e,r),t&4&&-1<Kd.indexOf(e)){for(;s!==null;){var u=li(s);if(u!==null&&gl(u),u=as(e,t,n,r),u===null&&Ss(e,t,r,Wi,n),u===s)break;s=u}s!==null&&r.stopPropagation()}else Ss(e,t,r,null,n)}}var Wi=null;function as(e,t,n,r){if(Wi=null,e=ht(r),e=rr(e),e!==null)if(t=et(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ol(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wi=e,null}function El(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bd()){case Ja:return 1;case pl:return 4;case Ci:case Wd:return 16;case hl:return 536870912;default:return 16}default:return 16}}var Gn=null,ss=null,Vi=null;function bl(){if(Vi)return Vi;var e,t=ss,n=t.length,r,s="value"in Gn?Gn.value:Gn.textContent,u=s.length;for(e=0;e<n&&t[e]===s[e];e++);var g=n-e;for(r=1;r<=g&&t[n-r]===s[u-r];r++);return Vi=s.slice(e,1<r?1-r:void 0)}function qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function Ml(){return!1}function $t(e){function t(n,r,s,u,g){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(n=e[D],this[D]=n?n(u):u[D]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Hi:Ml,this.isPropagationStopped=Ml,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=$t(wr),Xr=se({},wr,{view:0,detail:0}),tf=$t(Xr),ls,us,Jr,$i=se({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(ls=e.screenX-Jr.screenX,us=e.screenY-Jr.screenY):us=ls=0,Jr=e),ls)},movementY:function(e){return"movementY"in e?e.movementY:us}}),Dl=$t($i),nf=se({},$i,{dataTransfer:0}),rf=$t(nf),af=se({},Xr,{relatedTarget:0}),cs=$t(af),sf=se({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),of=$t(sf),lf=se({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uf=$t(lf),cf=se({},wr,{data:0}),zl=$t(cf),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pf[e])?!!t[e]:!1}function ds(){return hf}var mf=se({},Xr,{key:function(e){if(e.key){var t=df[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_f=$t(mf),gf=se({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Al=$t(gf),vf=se({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),yf=$t(vf),wf=se({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xf=$t(wf),Sf=se({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tf=$t(Sf),Ef=[9,13,27,32],fs=z&&"CompositionEvent"in window,Zr=null;z&&"documentMode"in document&&(Zr=document.documentMode);var bf=z&&"TextEvent"in window&&!Zr,Pl=z&&(!fs||Zr&&8<Zr&&11>=Zr),Rl=" ",Ll=!1;function Ul(e,t){switch(e){case"keyup":return Ef.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function Mf(e,t){switch(e){case"compositionend":return Cl(t);case"keypress":return t.which!==32?null:(Ll=!0,Rl);case"textInput":return e=t.data,e===Rl&&Ll?null:e;default:return null}}function Df(e,t){if(xr)return e==="compositionend"||!fs&&Ul(e,t)?(e=bl(),Vi=ss=Gn=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pl&&t.locale!=="ko"?null:t.data;default:return null}}var zf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zf[e.type]:t==="textarea"}function Il(e,t,n,r){wt(r),t=Xi(t,"onChange"),0<t.length&&(n=new os("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ei=null,ti=null;function Af(e){eu(e,0)}function ji(e){var t=Mr(e);if(P(t))return e}function Pf(e,t){if(e==="change")return t}var Fl=!1;if(z){var ps;if(z){var hs="oninput"in document;if(!hs){var Ol=document.createElement("div");Ol.setAttribute("oninput","return;"),hs=typeof Ol.oninput=="function"}ps=hs}else ps=!1;Fl=ps&&(!document.documentMode||9<document.documentMode)}function Nl(){ei&&(ei.detachEvent("onpropertychange",Gl),ti=ei=null)}function Gl(e){if(e.propertyName==="value"&&ji(ti)){var t=[];Il(t,ti,e,ht(e)),Rt(Af,t)}}function Rf(e,t,n){e==="focusin"?(Nl(),ei=t,ti=n,ei.attachEvent("onpropertychange",Gl)):e==="focusout"&&Nl()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(ti)}function Uf(e,t){if(e==="click")return ji(t)}function Cf(e,t){if(e==="input"||e==="change")return ji(t)}function kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:kf;function ni(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!b.call(t,s)||!sn(e[s],t[s]))return!1}return!0}function Bl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wl(e,t){var n=Bl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bl(n)}}function Vl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ql(){for(var e=window,t=V();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=V(e.document)}return t}function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function If(e){var t=ql(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vl(n.ownerDocument.documentElement,n)){if(r!==null&&ms(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,u=Math.min(r.start,s);r=r.end===void 0?u:Math.min(r.end,s),!e.extend&&u>r&&(s=r,r=u,u=s),s=Wl(n,u);var g=Wl(n,r);s&&g&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),u>r?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=z&&"documentMode"in document&&11>=document.documentMode,Sr=null,_s=null,ri=null,gs=!1;function Hl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gs||Sr==null||Sr!==V(r)||(r=Sr,"selectionStart"in r&&ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ri&&ni(ri,r)||(ri=r,r=Xi(_s,"onSelect"),0<r.length&&(t=new os("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function Qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tr={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},vs={},$l={};z&&($l=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Yi(e){if(vs[e])return vs[e];if(!Tr[e])return e;var t=Tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $l)return vs[e]=t[n];return e}var jl=Yi("animationend"),Ql=Yi("animationiteration"),Yl=Yi("animationstart"),Kl=Yi("transitionend"),Xl=new Map,Jl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){Xl.set(e,t),w(t,[e])}for(var ys=0;ys<Jl.length;ys++){var ws=Jl[ys],Of=ws.toLowerCase(),Nf=ws[0].toUpperCase()+ws.slice(1);Bn(Of,"on"+Nf)}Bn(jl,"onAnimationEnd"),Bn(Ql,"onAnimationIteration"),Bn(Yl,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(Kl,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function Zl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ui(r,t,void 0,e),e.currentTarget=null}function eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var g=r.length-1;0<=g;g--){var D=r[g],R=D.instance,$=D.currentTarget;if(D=D.listener,R!==u&&s.isPropagationStopped())break e;Zl(s,D,$),u=R}else for(g=0;g<r.length;g++){if(D=r[g],R=D.instance,$=D.currentTarget,D=D.listener,R!==u&&s.isPropagationStopped())break e;Zl(s,D,$),u=R}}}if(bn)throw e=vr,bn=!1,vr=null,e}function Je(e,t){var n=t[zs];n===void 0&&(n=t[zs]=new Set);var r=e+"__bubble";n.has(r)||(tu(t,e,2,!1),n.add(r))}function xs(e,t,n){var r=0;t&&(r|=4),tu(n,e,r,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function ai(e){if(!e[Ki]){e[Ki]=!0,f.forEach(function(n){n!=="selectionchange"&&(Gf.has(n)||xs(n,!1,e),xs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,xs("selectionchange",!1,t))}}function tu(e,t,n,r){switch(El(t)){case 1:var s=Zd;break;case 4:s=ef;break;default:s=is}n=s.bind(null,t,n,e),s=void 0,!kn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ss(e,t,n,r,s){var u=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var D=r.stateNode.containerInfo;if(D===s||D.nodeType===8&&D.parentNode===s)break;if(g===4)for(g=r.return;g!==null;){var R=g.tag;if((R===3||R===4)&&(R=g.stateNode.containerInfo,R===s||R.nodeType===8&&R.parentNode===s))return;g=g.return}for(;D!==null;){if(g=rr(D),g===null)return;if(R=g.tag,R===5||R===6){r=u=g;continue e}D=D.parentNode}}r=r.return}Rt(function(){var $=u,ie=ht(n),ae=[];e:{var re=Xl.get(e);if(re!==void 0){var de=os,ge=e;switch(e){case"keypress":if(qi(n)===0)break e;case"keydown":case"keyup":de=_f;break;case"focusin":ge="focus",de=cs;break;case"focusout":ge="blur",de=cs;break;case"beforeblur":case"afterblur":de=cs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Dl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=yf;break;case jl:case Ql:case Yl:de=of;break;case Kl:de=xf;break;case"scroll":de=tf;break;case"wheel":de=Tf;break;case"copy":case"cut":case"paste":de=uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Al}var ve=(t&4)!==0,ft=!ve&&e==="scroll",N=ve?re!==null?re+"Capture":null:re;ve=[];for(var k=$,B;k!==null;){B=k;var oe=B.stateNode;if(B.tag===5&&oe!==null&&(B=oe,N!==null&&(oe=pn(k,N),oe!=null&&ve.push(si(k,oe,B)))),ft)break;k=k.return}0<ve.length&&(re=new de(re,ge,null,n,ie),ae.push({event:re,listeners:ve}))}}if(!(t&7)){e:{if(re=e==="mouseover"||e==="pointerover",de=e==="mouseout"||e==="pointerout",re&&n!==pt&&(ge=n.relatedTarget||n.fromElement)&&(rr(ge)||ge[Mn]))break e;if((de||re)&&(re=ie.window===ie?ie:(re=ie.ownerDocument)?re.defaultView||re.parentWindow:window,de?(ge=n.relatedTarget||n.toElement,de=$,ge=ge?rr(ge):null,ge!==null&&(ft=et(ge),ge!==ft||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(de=null,ge=$),de!==ge)){if(ve=Dl,oe="onMouseLeave",N="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ve=Al,oe="onPointerLeave",N="onPointerEnter",k="pointer"),ft=de==null?re:Mr(de),B=ge==null?re:Mr(ge),re=new ve(oe,k+"leave",de,n,ie),re.target=ft,re.relatedTarget=B,oe=null,rr(ie)===$&&(ve=new ve(N,k+"enter",ge,n,ie),ve.target=B,ve.relatedTarget=ft,oe=ve),ft=oe,de&&ge)t:{for(ve=de,N=ge,k=0,B=ve;B;B=Er(B))k++;for(B=0,oe=N;oe;oe=Er(oe))B++;for(;0<k-B;)ve=Er(ve),k--;for(;0<B-k;)N=Er(N),B--;for(;k--;){if(ve===N||N!==null&&ve===N.alternate)break t;ve=Er(ve),N=Er(N)}ve=null}else ve=null;de!==null&&nu(ae,re,de,ve,!1),ge!==null&&ft!==null&&nu(ae,ft,ge,ve,!0)}}e:{if(re=$?Mr($):window,de=re.nodeName&&re.nodeName.toLowerCase(),de==="select"||de==="input"&&re.type==="file")var we=Pf;else if(kl(re))if(Fl)we=Cf;else{we=Lf;var Ee=Rf}else(de=re.nodeName)&&de.toLowerCase()==="input"&&(re.type==="checkbox"||re.type==="radio")&&(we=Uf);if(we&&(we=we(e,$))){Il(ae,we,n,ie);break e}Ee&&Ee(e,re,$),e==="focusout"&&(Ee=re._wrapperState)&&Ee.controlled&&re.type==="number"&&U(re,"number",re.value)}switch(Ee=$?Mr($):window,e){case"focusin":(kl(Ee)||Ee.contentEditable==="true")&&(Sr=Ee,_s=$,ri=null);break;case"focusout":ri=_s=Sr=null;break;case"mousedown":gs=!0;break;case"contextmenu":case"mouseup":case"dragend":gs=!1,Hl(ae,n,ie);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":Hl(ae,n,ie)}var be;if(fs)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else xr?Ul(e,n)&&(Ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ae="onCompositionStart");Ae&&(Pl&&n.locale!=="ko"&&(xr||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&xr&&(be=bl()):(Gn=ie,ss="value"in Gn?Gn.value:Gn.textContent,xr=!0)),Ee=Xi($,Ae),0<Ee.length&&(Ae=new zl(Ae,e,null,n,ie),ae.push({event:Ae,listeners:Ee}),be?Ae.data=be:(be=Cl(n),be!==null&&(Ae.data=be)))),(be=bf?Mf(e,n):Df(e,n))&&($=Xi($,"onBeforeInput"),0<$.length&&(ie=new zl("onBeforeInput","beforeinput",null,n,ie),ae.push({event:ie,listeners:$}),ie.data=be))}eu(ae,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,u=s.stateNode;s.tag===5&&u!==null&&(s=u,u=pn(e,n),u!=null&&r.unshift(si(e,u,s)),u=pn(e,t),u!=null&&r.push(si(e,u,s))),e=e.return}return r}function Er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nu(e,t,n,r,s){for(var u=t._reactName,g=[];n!==null&&n!==r;){var D=n,R=D.alternate,$=D.stateNode;if(R!==null&&R===r)break;D.tag===5&&$!==null&&(D=$,s?(R=pn(n,u),R!=null&&g.unshift(si(n,R,D))):s||(R=pn(n,u),R!=null&&g.push(si(n,R,D)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var Bf=/\r\n?/g,Wf=/\u0000|\uFFFD/g;function ru(e){return(typeof e=="string"?e:""+e).replace(Bf,`
`).replace(Wf,"")}function Ji(e,t,n){if(t=ru(t),ru(e)!==t&&n)throw Error(o(425))}function Zi(){}var Ts=null,Es=null;function bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ms=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,iu=typeof Promise=="function"?Promise:void 0,qf=typeof queueMicrotask=="function"?queueMicrotask:typeof iu<"u"?function(e){return iu.resolve(null).then(e).catch(Hf)}:Ms;function Hf(e){setTimeout(function(){throw e})}function Ds(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Kr(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),gn="__reactFiber$"+br,oi="__reactProps$"+br,Mn="__reactContainer$"+br,zs="__reactEvents$"+br,$f="__reactListeners$"+br,jf="__reactHandles$"+br;function rr(e){var t=e[gn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mn]||n[gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=au(e);e!==null;){if(n=e[gn])return n;e=au(e)}return t}e=n,n=e.parentNode}return null}function li(e){return e=e[gn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function ea(e){return e[oi]||null}var As=[],Dr=-1;function Vn(e){return{current:e}}function Ze(e){0>Dr||(e.current=As[Dr],As[Dr]=null,Dr--)}function Xe(e,t){Dr++,As[Dr]=e.current,e.current=t}var qn={},Lt=Vn(qn),Gt=Vn(!1),ir=qn;function zr(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},u;for(u in n)s[u]=t[u];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Bt(e){return e=e.childContextTypes,e!=null}function ta(){Ze(Gt),Ze(Lt)}function su(e,t,n){if(Lt.current!==qn)throw Error(o(168));Xe(Lt,t),Xe(Gt,n)}function ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(o(108,p(e)||"Unknown",s));return se({},n,r)}function na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,ir=Lt.current,Xe(Lt,e),Xe(Gt,Gt.current),!0}function lu(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=ou(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,Ze(Gt),Ze(Lt),Xe(Lt,e)):Ze(Gt),Xe(Gt,n)}var Dn=null,ra=!1,Ps=!1;function uu(e){Dn===null?Dn=[e]:Dn.push(e)}function Qf(e){ra=!0,uu(e)}function Hn(){if(!Ps&&Dn!==null){Ps=!0;var e=0,t=Qe;try{var n=Dn;for(Qe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dn=null,ra=!1}catch(s){throw Dn!==null&&(Dn=Dn.slice(e+1)),dl(Ja,Hn),s}finally{Qe=t,Ps=!1}}return null}var Ar=[],Pr=0,ia=null,aa=0,Jt=[],Zt=0,ar=null,zn=1,An="";function sr(e,t){Ar[Pr++]=aa,Ar[Pr++]=ia,ia=e,aa=t}function cu(e,t,n){Jt[Zt++]=zn,Jt[Zt++]=An,Jt[Zt++]=ar,ar=e;var r=zn;e=An;var s=32-an(r)-1;r&=~(1<<s),n+=1;var u=32-an(t)+s;if(30<u){var g=s-s%5;u=(r&(1<<g)-1).toString(32),r>>=g,s-=g,zn=1<<32-an(t)+s|n<<s|r,An=u+e}else zn=1<<u|n<<s|r,An=e}function Rs(e){e.return!==null&&(sr(e,1),cu(e,1,0))}function Ls(e){for(;e===ia;)ia=Ar[--Pr],Ar[Pr]=null,aa=Ar[--Pr],Ar[Pr]=null;for(;e===ar;)ar=Jt[--Zt],Jt[Zt]=null,An=Jt[--Zt],Jt[Zt]=null,zn=Jt[--Zt],Jt[Zt]=null}var jt=null,Qt=null,tt=!1,on=null;function du(e,t){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,Qt=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,Qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:zn,overflow:An}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,Qt=null,!0):!1;default:return!1}}function Us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cs(e){if(tt){var t=Qt;if(t){var n=t;if(!fu(e,t)){if(Us(e))throw Error(o(418));t=Wn(n.nextSibling);var r=jt;t&&fu(e,t)?du(r,n):(e.flags=e.flags&-4097|2,tt=!1,jt=e)}}else{if(Us(e))throw Error(o(418));e.flags=e.flags&-4097|2,tt=!1,jt=e}}}function pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function sa(e){if(e!==jt)return!1;if(!tt)return pu(e),tt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bs(e.type,e.memoizedProps)),t&&(t=Qt)){if(Us(e))throw hu(),Error(o(418));for(;t;)du(e,t),t=Wn(t.nextSibling)}if(pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qt=Wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qt=null}}else Qt=jt?Wn(e.stateNode.nextSibling):null;return!0}function hu(){for(var e=Qt;e;)e=Wn(e.nextSibling)}function Rr(){Qt=jt=null,tt=!1}function ks(e){on===null?on=[e]:on.push(e)}var Yf=fe.ReactCurrentBatchConfig;function ui(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var s=r,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(g){var D=s.refs;g===null?delete D[u]:D[u]=g},t._stringRef=u,t)}if(typeof e!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function oa(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mu(e){var t=e._init;return t(e._payload)}function _u(e){function t(N,k){if(e){var B=N.deletions;B===null?(N.deletions=[k],N.flags|=16):B.push(k)}}function n(N,k){if(!e)return null;for(;k!==null;)t(N,k),k=k.sibling;return null}function r(N,k){for(N=new Map;k!==null;)k.key!==null?N.set(k.key,k):N.set(k.index,k),k=k.sibling;return N}function s(N,k){return N=Zn(N,k),N.index=0,N.sibling=null,N}function u(N,k,B){return N.index=B,e?(B=N.alternate,B!==null?(B=B.index,B<k?(N.flags|=2,k):B):(N.flags|=2,k)):(N.flags|=1048576,k)}function g(N){return e&&N.alternate===null&&(N.flags|=2),N}function D(N,k,B,oe){return k===null||k.tag!==6?(k=Do(B,N.mode,oe),k.return=N,k):(k=s(k,B),k.return=N,k)}function R(N,k,B,oe){var we=B.type;return we===De?ie(N,k,B.props.children,oe,B.key):k!==null&&(k.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===$e&&mu(we)===k.type)?(oe=s(k,B.props),oe.ref=ui(N,k,B),oe.return=N,oe):(oe=Ra(B.type,B.key,B.props,null,N.mode,oe),oe.ref=ui(N,k,B),oe.return=N,oe)}function $(N,k,B,oe){return k===null||k.tag!==4||k.stateNode.containerInfo!==B.containerInfo||k.stateNode.implementation!==B.implementation?(k=zo(B,N.mode,oe),k.return=N,k):(k=s(k,B.children||[]),k.return=N,k)}function ie(N,k,B,oe,we){return k===null||k.tag!==7?(k=hr(B,N.mode,oe,we),k.return=N,k):(k=s(k,B),k.return=N,k)}function ae(N,k,B){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Do(""+k,N.mode,B),k.return=N,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Re:return B=Ra(k.type,k.key,k.props,null,N.mode,B),B.ref=ui(N,null,k),B.return=N,B;case ke:return k=zo(k,N.mode,B),k.return=N,k;case $e:var oe=k._init;return ae(N,oe(k._payload),B)}if(q(k)||ye(k))return k=hr(k,N.mode,B,null),k.return=N,k;oa(N,k)}return null}function re(N,k,B,oe){var we=k!==null?k.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return we!==null?null:D(N,k,""+B,oe);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Re:return B.key===we?R(N,k,B,oe):null;case ke:return B.key===we?$(N,k,B,oe):null;case $e:return we=B._init,re(N,k,we(B._payload),oe)}if(q(B)||ye(B))return we!==null?null:ie(N,k,B,oe,null);oa(N,B)}return null}function de(N,k,B,oe,we){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return N=N.get(B)||null,D(k,N,""+oe,we);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case Re:return N=N.get(oe.key===null?B:oe.key)||null,R(k,N,oe,we);case ke:return N=N.get(oe.key===null?B:oe.key)||null,$(k,N,oe,we);case $e:var Ee=oe._init;return de(N,k,B,Ee(oe._payload),we)}if(q(oe)||ye(oe))return N=N.get(B)||null,ie(k,N,oe,we,null);oa(k,oe)}return null}function ge(N,k,B,oe){for(var we=null,Ee=null,be=k,Ae=k=0,bt=null;be!==null&&Ae<B.length;Ae++){be.index>Ae?(bt=be,be=null):bt=be.sibling;var je=re(N,be,B[Ae],oe);if(je===null){be===null&&(be=bt);break}e&&be&&je.alternate===null&&t(N,be),k=u(je,k,Ae),Ee===null?we=je:Ee.sibling=je,Ee=je,be=bt}if(Ae===B.length)return n(N,be),tt&&sr(N,Ae),we;if(be===null){for(;Ae<B.length;Ae++)be=ae(N,B[Ae],oe),be!==null&&(k=u(be,k,Ae),Ee===null?we=be:Ee.sibling=be,Ee=be);return tt&&sr(N,Ae),we}for(be=r(N,be);Ae<B.length;Ae++)bt=de(be,N,Ae,B[Ae],oe),bt!==null&&(e&&bt.alternate!==null&&be.delete(bt.key===null?Ae:bt.key),k=u(bt,k,Ae),Ee===null?we=bt:Ee.sibling=bt,Ee=bt);return e&&be.forEach(function(er){return t(N,er)}),tt&&sr(N,Ae),we}function ve(N,k,B,oe){var we=ye(B);if(typeof we!="function")throw Error(o(150));if(B=we.call(B),B==null)throw Error(o(151));for(var Ee=we=null,be=k,Ae=k=0,bt=null,je=B.next();be!==null&&!je.done;Ae++,je=B.next()){be.index>Ae?(bt=be,be=null):bt=be.sibling;var er=re(N,be,je.value,oe);if(er===null){be===null&&(be=bt);break}e&&be&&er.alternate===null&&t(N,be),k=u(er,k,Ae),Ee===null?we=er:Ee.sibling=er,Ee=er,be=bt}if(je.done)return n(N,be),tt&&sr(N,Ae),we;if(be===null){for(;!je.done;Ae++,je=B.next())je=ae(N,je.value,oe),je!==null&&(k=u(je,k,Ae),Ee===null?we=je:Ee.sibling=je,Ee=je);return tt&&sr(N,Ae),we}for(be=r(N,be);!je.done;Ae++,je=B.next())je=de(be,N,Ae,je.value,oe),je!==null&&(e&&je.alternate!==null&&be.delete(je.key===null?Ae:je.key),k=u(je,k,Ae),Ee===null?we=je:Ee.sibling=je,Ee=je);return e&&be.forEach(function(Dp){return t(N,Dp)}),tt&&sr(N,Ae),we}function ft(N,k,B,oe){if(typeof B=="object"&&B!==null&&B.type===De&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Re:e:{for(var we=B.key,Ee=k;Ee!==null;){if(Ee.key===we){if(we=B.type,we===De){if(Ee.tag===7){n(N,Ee.sibling),k=s(Ee,B.props.children),k.return=N,N=k;break e}}else if(Ee.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===$e&&mu(we)===Ee.type){n(N,Ee.sibling),k=s(Ee,B.props),k.ref=ui(N,Ee,B),k.return=N,N=k;break e}n(N,Ee);break}else t(N,Ee);Ee=Ee.sibling}B.type===De?(k=hr(B.props.children,N.mode,oe,B.key),k.return=N,N=k):(oe=Ra(B.type,B.key,B.props,null,N.mode,oe),oe.ref=ui(N,k,B),oe.return=N,N=oe)}return g(N);case ke:e:{for(Ee=B.key;k!==null;){if(k.key===Ee)if(k.tag===4&&k.stateNode.containerInfo===B.containerInfo&&k.stateNode.implementation===B.implementation){n(N,k.sibling),k=s(k,B.children||[]),k.return=N,N=k;break e}else{n(N,k);break}else t(N,k);k=k.sibling}k=zo(B,N.mode,oe),k.return=N,N=k}return g(N);case $e:return Ee=B._init,ft(N,k,Ee(B._payload),oe)}if(q(B))return ge(N,k,B,oe);if(ye(B))return ve(N,k,B,oe);oa(N,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,k!==null&&k.tag===6?(n(N,k.sibling),k=s(k,B),k.return=N,N=k):(n(N,k),k=Do(B,N.mode,oe),k.return=N,N=k),g(N)):n(N,k)}return ft}var Lr=_u(!0),gu=_u(!1),la=Vn(null),ua=null,Ur=null,Is=null;function Fs(){Is=Ur=ua=null}function Os(e){var t=la.current;Ze(la),e._currentValue=t}function Ns(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cr(e,t){ua=e,Is=Ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Wt=!0),e.firstContext=null)}function en(e){var t=e._currentValue;if(Is!==e)if(e={context:e,memoizedValue:t,next:null},Ur===null){if(ua===null)throw Error(o(308));Ur=e,ua.dependencies={lanes:0,firstContext:e}}else Ur=Ur.next=e;return t}var or=null;function Gs(e){or===null?or=[e]:or.push(e)}function vu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Gs(t)):(n.next=s.next,s.next=n),t.interleaved=n,Pn(e,r)}function Pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $n=!1;function Bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,He&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Pn(e,n)}return s=r.interleaved,s===null?(t.next=t,Gs(r)):(t.next=s.next,s.next=t),r.interleaved=t,Pn(e,n)}function ca(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ts(e,n)}}function wu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var g={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?s=u=g:u=u.next=g,n=n.next}while(n!==null);u===null?s=u=t:u=u.next=t}else s=u=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function da(e,t,n,r){var s=e.updateQueue;$n=!1;var u=s.firstBaseUpdate,g=s.lastBaseUpdate,D=s.shared.pending;if(D!==null){s.shared.pending=null;var R=D,$=R.next;R.next=null,g===null?u=$:g.next=$,g=R;var ie=e.alternate;ie!==null&&(ie=ie.updateQueue,D=ie.lastBaseUpdate,D!==g&&(D===null?ie.firstBaseUpdate=$:D.next=$,ie.lastBaseUpdate=R))}if(u!==null){var ae=s.baseState;g=0,ie=$=R=null,D=u;do{var re=D.lane,de=D.eventTime;if((r&re)===re){ie!==null&&(ie=ie.next={eventTime:de,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ge=e,ve=D;switch(re=t,de=n,ve.tag){case 1:if(ge=ve.payload,typeof ge=="function"){ae=ge.call(de,ae,re);break e}ae=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ve.payload,re=typeof ge=="function"?ge.call(de,ae,re):ge,re==null)break e;ae=se({},ae,re);break e;case 2:$n=!0}}D.callback!==null&&D.lane!==0&&(e.flags|=64,re=s.effects,re===null?s.effects=[D]:re.push(D))}else de={eventTime:de,lane:re,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ie===null?($=ie=de,R=ae):ie=ie.next=de,g|=re;if(D=D.next,D===null){if(D=s.shared.pending,D===null)break;re=D,D=re.next,re.next=null,s.lastBaseUpdate=re,s.shared.pending=null}}while(!0);if(ie===null&&(R=ae),s.baseState=R,s.firstBaseUpdate=$,s.lastBaseUpdate=ie,t=s.shared.interleaved,t!==null){s=t;do g|=s.lane,s=s.next;while(s!==t)}else u===null&&(s.shared.lanes=0);cr|=g,e.lanes=g,e.memoizedState=ae}}function xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(o(191,s));s.call(r)}}}var ci={},vn=Vn(ci),di=Vn(ci),fi=Vn(ci);function lr(e){if(e===ci)throw Error(o(174));return e}function Ws(e,t){switch(Xe(fi,t),Xe(di,e),Xe(vn,ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ee(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ee(t,e)}Ze(vn),Xe(vn,t)}function kr(){Ze(vn),Ze(di),Ze(fi)}function Su(e){lr(fi.current);var t=lr(vn.current),n=ee(t,e.type);t!==n&&(Xe(di,e),Xe(vn,n))}function Vs(e){di.current===e&&(Ze(vn),Ze(di))}var st=Vn(0);function fa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qs=[];function Hs(){for(var e=0;e<qs.length;e++)qs[e]._workInProgressVersionPrimary=null;qs.length=0}var pa=fe.ReactCurrentDispatcher,$s=fe.ReactCurrentBatchConfig,ur=0,ot=null,gt=null,Tt=null,ha=!1,pi=!1,hi=0,Kf=0;function Ut(){throw Error(o(321))}function js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sn(e[n],t[n]))return!1;return!0}function Qs(e,t,n,r,s,u){if(ur=u,ot=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,pa.current=e===null||e.memoizedState===null?ep:tp,e=n(r,s),pi){u=0;do{if(pi=!1,hi=0,25<=u)throw Error(o(301));u+=1,Tt=gt=null,t.updateQueue=null,pa.current=np,e=n(r,s)}while(pi)}if(pa.current=ga,t=gt!==null&&gt.next!==null,ur=0,Tt=gt=ot=null,ha=!1,t)throw Error(o(300));return e}function Ys(){var e=hi!==0;return hi=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?ot.memoizedState=Tt=e:Tt=Tt.next=e,Tt}function tn(){if(gt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=gt.next;var t=Tt===null?ot.memoizedState:Tt.next;if(t!==null)Tt=t,gt=e;else{if(e===null)throw Error(o(310));gt=e,e={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?ot.memoizedState=Tt=e:Tt=Tt.next=e}return Tt}function mi(e,t){return typeof t=="function"?t(e):t}function Ks(e){var t=tn(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=gt,s=r.baseQueue,u=n.pending;if(u!==null){if(s!==null){var g=s.next;s.next=u.next,u.next=g}r.baseQueue=s=u,n.pending=null}if(s!==null){u=s.next,r=r.baseState;var D=g=null,R=null,$=u;do{var ie=$.lane;if((ur&ie)===ie)R!==null&&(R=R.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),r=$.hasEagerState?$.eagerState:e(r,$.action);else{var ae={lane:ie,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};R===null?(D=R=ae,g=r):R=R.next=ae,ot.lanes|=ie,cr|=ie}$=$.next}while($!==null&&$!==u);R===null?g=r:R.next=D,sn(r,t.memoizedState)||(Wt=!0),t.memoizedState=r,t.baseState=g,t.baseQueue=R,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do u=s.lane,ot.lanes|=u,cr|=u,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xs(e){var t=tn(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,u=t.memoizedState;if(s!==null){n.pending=null;var g=s=s.next;do u=e(u,g.action),g=g.next;while(g!==s);sn(u,t.memoizedState)||(Wt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}function Tu(){}function Eu(e,t){var n=ot,r=tn(),s=t(),u=!sn(r.memoizedState,s);if(u&&(r.memoizedState=s,Wt=!0),r=r.queue,Js(Du.bind(null,n,r,e),[e]),r.getSnapshot!==t||u||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,_i(9,Mu.bind(null,n,r,s,t),void 0,null),Et===null)throw Error(o(349));ur&30||bu(n,t,s)}return s}function bu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mu(e,t,n,r){t.value=n,t.getSnapshot=r,zu(t)&&Au(e)}function Du(e,t,n){return n(function(){zu(t)&&Au(e)})}function zu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sn(e,n)}catch{return!0}}function Au(e){var t=Pn(e,1);t!==null&&dn(t,e,1,-1)}function Pu(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t.queue=e,e=e.dispatch=Zf.bind(null,ot,e),[t.memoizedState,e]}function _i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ru(){return tn().memoizedState}function ma(e,t,n,r){var s=yn();ot.flags|=e,s.memoizedState=_i(1|t,n,void 0,r===void 0?null:r)}function _a(e,t,n,r){var s=tn();r=r===void 0?null:r;var u=void 0;if(gt!==null){var g=gt.memoizedState;if(u=g.destroy,r!==null&&js(r,g.deps)){s.memoizedState=_i(t,n,u,r);return}}ot.flags|=e,s.memoizedState=_i(1|t,n,u,r)}function Lu(e,t){return ma(8390656,8,e,t)}function Js(e,t){return _a(2048,8,e,t)}function Uu(e,t){return _a(4,2,e,t)}function Cu(e,t){return _a(4,4,e,t)}function ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Iu(e,t,n){return n=n!=null?n.concat([e]):null,_a(4,4,ku.bind(null,t,e),n)}function Zs(){}function Fu(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ou(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nu(e,t,n){return ur&21?(sn(n,t)||(n=ml(),ot.lanes|=n,cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Wt=!0),e.memoizedState=n)}function Xf(e,t){var n=Qe;Qe=n!==0&&4>n?n:4,e(!0);var r=$s.transition;$s.transition={};try{e(!1),t()}finally{Qe=n,$s.transition=r}}function Gu(){return tn().memoizedState}function Jf(e,t,n){var r=Xn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bu(e))Wu(t,n);else if(n=vu(e,t,n,r),n!==null){var s=Ot();dn(n,e,r,s),Vu(n,t,r)}}function Zf(e,t,n){var r=Xn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Wu(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var g=t.lastRenderedState,D=u(g,n);if(s.hasEagerState=!0,s.eagerState=D,sn(D,g)){var R=t.interleaved;R===null?(s.next=s,Gs(t)):(s.next=R.next,R.next=s),t.interleaved=s;return}}catch{}finally{}n=vu(e,t,s,r),n!==null&&(s=Ot(),dn(n,e,r,s),Vu(n,t,r))}}function Bu(e){var t=e.alternate;return e===ot||t!==null&&t===ot}function Wu(e,t){pi=ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ts(e,n)}}var ga={readContext:en,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},ep={readContext:en,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:en,useEffect:Lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ma(4194308,4,ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ma(4194308,4,e,t)},useInsertionEffect:function(e,t){return ma(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jf.bind(null,ot,e),[r.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:Pu,useDebugValue:Zs,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Pu(!1),t=e[0];return e=Xf.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ot,s=yn();if(tt){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Et===null)throw Error(o(349));ur&30||bu(r,t,n)}s.memoizedState=n;var u={value:n,getSnapshot:t};return s.queue=u,Lu(Du.bind(null,r,u,e),[e]),r.flags|=2048,_i(9,Mu.bind(null,r,u,n,t),void 0,null),n},useId:function(){var e=yn(),t=Et.identifierPrefix;if(tt){var n=An,r=zn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tp={readContext:en,useCallback:Fu,useContext:en,useEffect:Js,useImperativeHandle:Iu,useInsertionEffect:Uu,useLayoutEffect:Cu,useMemo:Ou,useReducer:Ks,useRef:Ru,useState:function(){return Ks(mi)},useDebugValue:Zs,useDeferredValue:function(e){var t=tn();return Nu(t,gt.memoizedState,e)},useTransition:function(){var e=Ks(mi)[0],t=tn().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:Eu,useId:Gu,unstable_isNewReconciler:!1},np={readContext:en,useCallback:Fu,useContext:en,useEffect:Js,useImperativeHandle:Iu,useInsertionEffect:Uu,useLayoutEffect:Cu,useMemo:Ou,useReducer:Xs,useRef:Ru,useState:function(){return Xs(mi)},useDebugValue:Zs,useDeferredValue:function(e){var t=tn();return gt===null?t.memoizedState=e:Nu(t,gt.memoizedState,e)},useTransition:function(){var e=Xs(mi)[0],t=tn().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:Eu,useId:Gu,unstable_isNewReconciler:!1};function ln(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var va={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ot(),s=Xn(e),u=Rn(r,s);u.payload=t,n!=null&&(u.callback=n),t=jn(e,u,s),t!==null&&(dn(t,e,s,r),ca(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ot(),s=Xn(e),u=Rn(r,s);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=jn(e,u,s),t!==null&&(dn(t,e,s,r),ca(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),r=Xn(e),s=Rn(n,r);s.tag=2,t!=null&&(s.callback=t),t=jn(e,s,r),t!==null&&(dn(t,e,r,n),ca(t,e,r))}};function qu(e,t,n,r,s,u,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,g):t.prototype&&t.prototype.isPureReactComponent?!ni(n,r)||!ni(s,u):!0}function Hu(e,t,n){var r=!1,s=qn,u=t.contextType;return typeof u=="object"&&u!==null?u=en(u):(s=Bt(t)?ir:Lt.current,r=t.contextTypes,u=(r=r!=null)?zr(e,s):qn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=va,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=u),t}function $u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&va.enqueueReplaceState(t,t.state,null)}function to(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Bs(e);var u=t.contextType;typeof u=="object"&&u!==null?s.context=en(u):(u=Bt(t)?ir:Lt.current,s.context=zr(e,u)),s.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(eo(e,t,u,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&va.enqueueReplaceState(s,s.state,null),da(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t){try{var n="",r=t;do n+=Ce(r),r=r.return;while(r);var s=n}catch(u){s=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:s,digest:null}}function no(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ro(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rp=typeof WeakMap=="function"?WeakMap:Map;function ju(e,t,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ba||(ba=!0,yo=r),ro(e,t)},n}function Qu(e,t,n){n=Rn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ro(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){ro(e,t),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),n}function Yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rp;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=gp.bind(null,e,t,n),t.then(e,e))}function Ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xu(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rn(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var ip=fe.ReactCurrentOwner,Wt=!1;function Ft(e,t,n,r){t.child=e===null?gu(t,null,n,r):Lr(t,e.child,n,r)}function Ju(e,t,n,r,s){n=n.render;var u=t.ref;return Cr(t,s),r=Qs(e,t,n,r,u,s),n=Ys(),e!==null&&!Wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ln(e,t,s)):(tt&&n&&Rs(t),t.flags|=1,Ft(e,t,r,s),t.child)}function Zu(e,t,n,r,s){if(e===null){var u=n.type;return typeof u=="function"&&!Mo(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,ec(e,t,u,r,s)):(e=Ra(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!(e.lanes&s)){var g=u.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(g,r)&&e.ref===t.ref)return Ln(e,t,s)}return t.flags|=1,e=Zn(u,r),e.ref=t.ref,e.return=t,t.child=e}function ec(e,t,n,r,s){if(e!==null){var u=e.memoizedProps;if(ni(u,r)&&e.ref===t.ref)if(Wt=!1,t.pendingProps=r=u,(e.lanes&s)!==0)e.flags&131072&&(Wt=!0);else return t.lanes=e.lanes,Ln(e,t,s)}return io(e,t,n,r,s)}function tc(e,t,n){var r=t.pendingProps,s=r.children,u=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(Or,Yt),Yt|=n;else{if(!(n&1073741824))return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Xe(Or,Yt),Yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=u!==null?u.baseLanes:n,Xe(Or,Yt),Yt|=r}else u!==null?(r=u.baseLanes|n,t.memoizedState=null):r=n,Xe(Or,Yt),Yt|=r;return Ft(e,t,s,n),t.child}function nc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function io(e,t,n,r,s){var u=Bt(n)?ir:Lt.current;return u=zr(t,u),Cr(t,s),n=Qs(e,t,n,r,u,s),r=Ys(),e!==null&&!Wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ln(e,t,s)):(tt&&r&&Rs(t),t.flags|=1,Ft(e,t,n,s),t.child)}function rc(e,t,n,r,s){if(Bt(n)){var u=!0;na(t)}else u=!1;if(Cr(t,s),t.stateNode===null)wa(e,t),Hu(t,n,r),to(t,n,r,s),r=!0;else if(e===null){var g=t.stateNode,D=t.memoizedProps;g.props=D;var R=g.context,$=n.contextType;typeof $=="object"&&$!==null?$=en($):($=Bt(n)?ir:Lt.current,$=zr(t,$));var ie=n.getDerivedStateFromProps,ae=typeof ie=="function"||typeof g.getSnapshotBeforeUpdate=="function";ae||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(D!==r||R!==$)&&$u(t,g,r,$),$n=!1;var re=t.memoizedState;g.state=re,da(t,r,g,s),R=t.memoizedState,D!==r||re!==R||Gt.current||$n?(typeof ie=="function"&&(eo(t,n,ie,r),R=t.memoizedState),(D=$n||qu(t,n,D,r,re,R,$))?(ae||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=R),g.props=r,g.state=R,g.context=$,r=D):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{g=t.stateNode,yu(e,t),D=t.memoizedProps,$=t.type===t.elementType?D:ln(t.type,D),g.props=$,ae=t.pendingProps,re=g.context,R=n.contextType,typeof R=="object"&&R!==null?R=en(R):(R=Bt(n)?ir:Lt.current,R=zr(t,R));var de=n.getDerivedStateFromProps;(ie=typeof de=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(D!==ae||re!==R)&&$u(t,g,r,R),$n=!1,re=t.memoizedState,g.state=re,da(t,r,g,s);var ge=t.memoizedState;D!==ae||re!==ge||Gt.current||$n?(typeof de=="function"&&(eo(t,n,de,r),ge=t.memoizedState),($=$n||qu(t,n,$,r,re,ge,R)||!1)?(ie||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(r,ge,R),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(r,ge,R)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||D===e.memoizedProps&&re===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||D===e.memoizedProps&&re===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ge),g.props=r,g.state=ge,g.context=R,r=$):(typeof g.componentDidUpdate!="function"||D===e.memoizedProps&&re===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||D===e.memoizedProps&&re===e.memoizedState||(t.flags|=1024),r=!1)}return ao(e,t,n,r,u,s)}function ao(e,t,n,r,s,u){nc(e,t);var g=(t.flags&128)!==0;if(!r&&!g)return s&&lu(t,n,!1),Ln(e,t,u);r=t.stateNode,ip.current=t;var D=g&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&g?(t.child=Lr(t,e.child,null,u),t.child=Lr(t,null,D,u)):Ft(e,t,D,u),t.memoizedState=r.state,s&&lu(t,n,!0),t.child}function ic(e){var t=e.stateNode;t.pendingContext?su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&su(e,t.context,!1),Ws(e,t.containerInfo)}function ac(e,t,n,r,s){return Rr(),ks(s),t.flags|=256,Ft(e,t,n,r),t.child}var so={dehydrated:null,treeContext:null,retryLane:0};function oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function sc(e,t,n){var r=t.pendingProps,s=st.current,u=!1,g=(t.flags&128)!==0,D;if((D=g)||(D=e!==null&&e.memoizedState===null?!1:(s&2)!==0),D?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Xe(st,s&1),e===null)return Cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(g=r.children,e=r.fallback,u?(r=t.mode,u=t.child,g={mode:"hidden",children:g},!(r&1)&&u!==null?(u.childLanes=0,u.pendingProps=g):u=La(g,r,0,null),e=hr(e,r,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=oo(n),t.memoizedState=so,e):lo(t,g));if(s=e.memoizedState,s!==null&&(D=s.dehydrated,D!==null))return ap(e,t,g,r,D,s,n);if(u){u=r.fallback,g=t.mode,s=e.child,D=s.sibling;var R={mode:"hidden",children:r.children};return!(g&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=R,t.deletions=null):(r=Zn(s,R),r.subtreeFlags=s.subtreeFlags&14680064),D!==null?u=Zn(D,u):(u=hr(u,g,n,null),u.flags|=2),u.return=t,r.return=t,r.sibling=u,t.child=r,r=u,u=t.child,g=e.child.memoizedState,g=g===null?oo(n):{baseLanes:g.baseLanes|n,cachePool:null,transitions:g.transitions},u.memoizedState=g,u.childLanes=e.childLanes&~n,t.memoizedState=so,r}return u=e.child,e=u.sibling,r=Zn(u,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lo(e,t){return t=La({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ya(e,t,n,r){return r!==null&&ks(r),Lr(t,e.child,null,n),e=lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ap(e,t,n,r,s,u,g){if(n)return t.flags&256?(t.flags&=-257,r=no(Error(o(422))),ya(e,t,g,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=r.fallback,s=t.mode,r=La({mode:"visible",children:r.children},s,0,null),u=hr(u,s,g,null),u.flags|=2,r.return=t,u.return=t,r.sibling=u,t.child=r,t.mode&1&&Lr(t,e.child,null,g),t.child.memoizedState=oo(g),t.memoizedState=so,u);if(!(t.mode&1))return ya(e,t,g,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var D=r.dgst;return r=D,u=Error(o(419)),r=no(u,r,void 0),ya(e,t,g,r)}if(D=(g&e.childLanes)!==0,Wt||D){if(r=Et,r!==null){switch(g&-g){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|g)?0:s,s!==0&&s!==u.retryLane&&(u.retryLane=s,Pn(e,s),dn(r,e,s,-1))}return bo(),r=no(Error(o(421))),ya(e,t,g,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=vp.bind(null,e),s._reactRetry=t,null):(e=u.treeContext,Qt=Wn(s.nextSibling),jt=t,tt=!0,on=null,e!==null&&(Jt[Zt++]=zn,Jt[Zt++]=An,Jt[Zt++]=ar,zn=e.id,An=e.overflow,ar=t),t=lo(t,r.children),t.flags|=4096,t)}function oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ns(e.return,t,n)}function uo(e,t,n,r,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=s)}function lc(e,t,n){var r=t.pendingProps,s=r.revealOrder,u=r.tail;if(Ft(e,t,r.children,n),r=st.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oc(e,n,t);else if(e.tag===19)oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Xe(st,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&fa(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),uo(t,!1,s,n,u);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&fa(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}uo(t,!0,n,null,u);break;case"together":uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sp(e,t,n){switch(t.tag){case 3:ic(t),Rr();break;case 5:Su(t);break;case 1:Bt(t.type)&&na(t);break;case 4:Ws(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Xe(la,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Xe(st,st.current&1),t.flags|=128,null):n&t.child.childLanes?sc(e,t,n):(Xe(st,st.current&1),e=Ln(e,t,n),e!==null?e.sibling:null);Xe(st,st.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Xe(st,st.current),r)break;return null;case 22:case 23:return t.lanes=0,tc(e,t,n)}return Ln(e,t,n)}var uc,co,cc,dc;uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},co=function(){},cc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,lr(vn.current);var u=null;switch(n){case"input":s=l(e,s),r=l(e,r),u=[];break;case"select":s=se({},s,{value:void 0}),r=se({},r,{value:void 0}),u=[];break;case"textarea":s=T(e,s),r=T(e,r),u=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}rt(n,r);var g;n=null;for($ in s)if(!r.hasOwnProperty($)&&s.hasOwnProperty($)&&s[$]!=null)if($==="style"){var D=s[$];for(g in D)D.hasOwnProperty(g)&&(n||(n={}),n[g]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(_.hasOwnProperty($)?u||(u=[]):(u=u||[]).push($,null));for($ in r){var R=r[$];if(D=s!=null?s[$]:void 0,r.hasOwnProperty($)&&R!==D&&(R!=null||D!=null))if($==="style")if(D){for(g in D)!D.hasOwnProperty(g)||R&&R.hasOwnProperty(g)||(n||(n={}),n[g]="");for(g in R)R.hasOwnProperty(g)&&D[g]!==R[g]&&(n||(n={}),n[g]=R[g])}else n||(u||(u=[]),u.push($,n)),n=R;else $==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,D=D?D.__html:void 0,R!=null&&D!==R&&(u=u||[]).push($,R)):$==="children"?typeof R!="string"&&typeof R!="number"||(u=u||[]).push($,""+R):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(_.hasOwnProperty($)?(R!=null&&$==="onScroll"&&Je("scroll",e),u||D===R||(u=[])):(u=u||[]).push($,R))}n&&(u=u||[]).push("style",n);var $=u;(t.updateQueue=$)&&(t.flags|=4)}},dc=function(e,t,n,r){n!==r&&(t.flags|=4)};function gi(e,t){if(!tt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function op(e,t,n){var r=t.pendingProps;switch(Ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(t),null;case 1:return Bt(t.type)&&ta(),Ct(t),null;case 3:return r=t.stateNode,kr(),Ze(Gt),Ze(Lt),Hs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(sa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,on!==null&&(So(on),on=null))),co(e,t),Ct(t),null;case 5:Vs(t);var s=lr(fi.current);if(n=t.type,e!==null&&t.stateNode!=null)cc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(o(166));return Ct(t),null}if(e=lr(vn.current),sa(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[gn]=t,r[oi]=u,e=(t.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(s=0;s<ii.length;s++)Je(ii[s],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":v(r,u),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},Je("invalid",r);break;case"textarea":L(r,u),Je("invalid",r)}rt(n,u),s=null;for(var g in u)if(u.hasOwnProperty(g)){var D=u[g];g==="children"?typeof D=="string"?r.textContent!==D&&(u.suppressHydrationWarning!==!0&&Ji(r.textContent,D,e),s=["children",D]):typeof D=="number"&&r.textContent!==""+D&&(u.suppressHydrationWarning!==!0&&Ji(r.textContent,D,e),s=["children",""+D]):_.hasOwnProperty(g)&&D!=null&&g==="onScroll"&&Je("scroll",r)}switch(n){case"input":E(r),S(r,u,!0);break;case"textarea":E(r),H(r);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(r.onclick=Zi)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{g=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Q(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=g.createElement(n,{is:r.is}):(e=g.createElement(n),n==="select"&&(g=e,r.multiple?g.multiple=!0:r.size&&(g.size=r.size))):e=g.createElementNS(e,n),e[gn]=t,e[oi]=r,uc(e,t,!1,!1),t.stateNode=e;e:{switch(g=ct(n,r),n){case"dialog":Je("cancel",e),Je("close",e),s=r;break;case"iframe":case"object":case"embed":Je("load",e),s=r;break;case"video":case"audio":for(s=0;s<ii.length;s++)Je(ii[s],e);s=r;break;case"source":Je("error",e),s=r;break;case"img":case"image":case"link":Je("error",e),Je("load",e),s=r;break;case"details":Je("toggle",e),s=r;break;case"input":v(e,r),s=l(e,r),Je("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=se({},r,{value:void 0}),Je("invalid",e);break;case"textarea":L(e,r),s=T(e,r),Je("invalid",e);break;default:s=r}rt(n,s),D=s;for(u in D)if(D.hasOwnProperty(u)){var R=D[u];u==="style"?Ke(e,R):u==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&ze(e,R)):u==="children"?typeof R=="string"?(n!=="textarea"||R!=="")&&pe(e,R):typeof R=="number"&&pe(e,""+R):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_.hasOwnProperty(u)?R!=null&&u==="onScroll"&&Je("scroll",e):R!=null&&ue(e,u,R,g))}switch(n){case"input":E(e),S(e,r,!1);break;case"textarea":E(e),H(e);break;case"option":r.value!=null&&e.setAttribute("value",""+M(r.value));break;case"select":e.multiple=!!r.multiple,u=r.value,u!=null?y(e,!!r.multiple,u,!1):r.defaultValue!=null&&y(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ct(t),null;case 6:if(e&&t.stateNode!=null)dc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(o(166));if(n=lr(fi.current),lr(vn.current),sa(t)){if(r=t.stateNode,n=t.memoizedProps,r[gn]=t,(u=r.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:Ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ji(r.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=t,t.stateNode=r}return Ct(t),null;case 13:if(Ze(st),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(tt&&Qt!==null&&t.mode&1&&!(t.flags&128))hu(),Rr(),t.flags|=98560,u=!1;else if(u=sa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[gn]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ct(t),u=!1}else on!==null&&(So(on),on=null),u=!0;if(!u)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||st.current&1?vt===0&&(vt=3):bo())),t.updateQueue!==null&&(t.flags|=4),Ct(t),null);case 4:return kr(),co(e,t),e===null&&ai(t.stateNode.containerInfo),Ct(t),null;case 10:return Os(t.type._context),Ct(t),null;case 17:return Bt(t.type)&&ta(),Ct(t),null;case 19:if(Ze(st),u=t.memoizedState,u===null)return Ct(t),null;if(r=(t.flags&128)!==0,g=u.rendering,g===null)if(r)gi(u,!1);else{if(vt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(g=fa(e),g!==null){for(t.flags|=128,gi(u,!1),r=g.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)u=n,e=r,u.flags&=14680066,g=u.alternate,g===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=g.childLanes,u.lanes=g.lanes,u.child=g.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=g.memoizedProps,u.memoizedState=g.memoizedState,u.updateQueue=g.updateQueue,u.type=g.type,e=g.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Xe(st,st.current&1|2),t.child}e=e.sibling}u.tail!==null&&dt()>Nr&&(t.flags|=128,r=!0,gi(u,!1),t.lanes=4194304)}else{if(!r)if(e=fa(g),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gi(u,!0),u.tail===null&&u.tailMode==="hidden"&&!g.alternate&&!tt)return Ct(t),null}else 2*dt()-u.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,gi(u,!1),t.lanes=4194304);u.isBackwards?(g.sibling=t.child,t.child=g):(n=u.last,n!==null?n.sibling=g:t.child=g,u.last=g)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=dt(),t.sibling=null,n=st.current,Xe(st,r?n&1|2:n&1),t):(Ct(t),null);case 22:case 23:return Eo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Yt&1073741824&&(Ct(t),t.subtreeFlags&6&&(t.flags|=8192)):Ct(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function lp(e,t){switch(Ls(t),t.tag){case 1:return Bt(t.type)&&ta(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),Ze(Gt),Ze(Lt),Hs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vs(t),null;case 13:if(Ze(st),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ze(st),null;case 4:return kr(),null;case 10:return Os(t.type._context),null;case 22:case 23:return Eo(),null;case 24:return null;default:return null}}var xa=!1,kt=!1,up=typeof WeakSet=="function"?WeakSet:Set,he=null;function Fr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){lt(e,t,r)}else n.current=null}function fo(e,t,n){try{n()}catch(r){lt(e,t,r)}}var fc=!1;function cp(e,t){if(Ts=Bi,e=ql(),ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var g=0,D=-1,R=-1,$=0,ie=0,ae=e,re=null;t:for(;;){for(var de;ae!==n||s!==0&&ae.nodeType!==3||(D=g+s),ae!==u||r!==0&&ae.nodeType!==3||(R=g+r),ae.nodeType===3&&(g+=ae.nodeValue.length),(de=ae.firstChild)!==null;)re=ae,ae=de;for(;;){if(ae===e)break t;if(re===n&&++$===s&&(D=g),re===u&&++ie===r&&(R=g),(de=ae.nextSibling)!==null)break;ae=re,re=ae.parentNode}ae=de}n=D===-1||R===-1?null:{start:D,end:R}}else n=null}n=n||{start:0,end:0}}else n=null;for(Es={focusedElem:e,selectionRange:n},Bi=!1,he=t;he!==null;)if(t=he,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,he=e;else for(;he!==null;){t=he;try{var ge=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ve=ge.memoizedProps,ft=ge.memoizedState,N=t.stateNode,k=N.getSnapshotBeforeUpdate(t.elementType===t.type?ve:ln(t.type,ve),ft);N.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var B=t.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(oe){lt(t,t.return,oe)}if(e=t.sibling,e!==null){e.return=t.return,he=e;break}he=t.return}return ge=fc,fc=!1,ge}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var u=s.destroy;s.destroy=void 0,u!==void 0&&fo(t,n,u)}s=s.next}while(s!==r)}}function Sa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function po(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pc(e){var t=e.alternate;t!==null&&(e.alternate=null,pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gn],delete t[oi],delete t[zs],delete t[$f],delete t[jf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hc(e){return e.tag===5||e.tag===3||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ho(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(ho(e,t,n),e=e.sibling;e!==null;)ho(e,t,n),e=e.sibling}function mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mo(e,t,n),e=e.sibling;e!==null;)mo(e,t,n),e=e.sibling}var Dt=null,un=!1;function Qn(e,t,n){for(n=n.child;n!==null;)_c(e,t,n),n=n.sibling}function _c(e,t,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 5:kt||Fr(n,t);case 6:var r=Dt,s=un;Dt=null,Qn(e,t,n),Dt=r,un=s,Dt!==null&&(un?(e=Dt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(un?(e=Dt,n=n.stateNode,e.nodeType===8?Ds(e.parentNode,n):e.nodeType===1&&Ds(e,n),Kr(e)):Ds(Dt,n.stateNode));break;case 4:r=Dt,s=un,Dt=n.stateNode.containerInfo,un=!0,Qn(e,t,n),Dt=r,un=s;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var u=s,g=u.destroy;u=u.tag,g!==void 0&&(u&2||u&4)&&fo(n,t,g),s=s.next}while(s!==r)}Qn(e,t,n);break;case 1:if(!kt&&(Fr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(D){lt(n,t,D)}Qn(e,t,n);break;case 21:Qn(e,t,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,Qn(e,t,n),kt=r):Qn(e,t,n);break;default:Qn(e,t,n)}}function gc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new up),t.forEach(function(r){var s=yp.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var u=e,g=t,D=g;e:for(;D!==null;){switch(D.tag){case 5:Dt=D.stateNode,un=!1;break e;case 3:Dt=D.stateNode.containerInfo,un=!0;break e;case 4:Dt=D.stateNode.containerInfo,un=!0;break e}D=D.return}if(Dt===null)throw Error(o(160));_c(u,g,s),Dt=null,un=!1;var R=s.alternate;R!==null&&(R.return=null),s.return=null}catch($){lt(s,t,$)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),wn(e),r&4){try{vi(3,e,e.return),Sa(3,e)}catch(ve){lt(e,e.return,ve)}try{vi(5,e,e.return)}catch(ve){lt(e,e.return,ve)}}break;case 1:cn(t,e),wn(e),r&512&&n!==null&&Fr(n,n.return);break;case 5:if(cn(t,e),wn(e),r&512&&n!==null&&Fr(n,n.return),e.flags&32){var s=e.stateNode;try{pe(s,"")}catch(ve){lt(e,e.return,ve)}}if(r&4&&(s=e.stateNode,s!=null)){var u=e.memoizedProps,g=n!==null?n.memoizedProps:u,D=e.type,R=e.updateQueue;if(e.updateQueue=null,R!==null)try{D==="input"&&u.type==="radio"&&u.name!=null&&c(s,u),ct(D,g);var $=ct(D,u);for(g=0;g<R.length;g+=2){var ie=R[g],ae=R[g+1];ie==="style"?Ke(s,ae):ie==="dangerouslySetInnerHTML"?ze(s,ae):ie==="children"?pe(s,ae):ue(s,ie,ae,$)}switch(D){case"input":h(s,u);break;case"textarea":C(s,u);break;case"select":var re=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!u.multiple;var de=u.value;de!=null?y(s,!!u.multiple,de,!1):re!==!!u.multiple&&(u.defaultValue!=null?y(s,!!u.multiple,u.defaultValue,!0):y(s,!!u.multiple,u.multiple?[]:"",!1))}s[oi]=u}catch(ve){lt(e,e.return,ve)}}break;case 6:if(cn(t,e),wn(e),r&4){if(e.stateNode===null)throw Error(o(162));s=e.stateNode,u=e.memoizedProps;try{s.nodeValue=u}catch(ve){lt(e,e.return,ve)}}break;case 3:if(cn(t,e),wn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kr(t.containerInfo)}catch(ve){lt(e,e.return,ve)}break;case 4:cn(t,e),wn(e);break;case 13:cn(t,e),wn(e),s=e.child,s.flags&8192&&(u=s.memoizedState!==null,s.stateNode.isHidden=u,!u||s.alternate!==null&&s.alternate.memoizedState!==null||(vo=dt())),r&4&&gc(e);break;case 22:if(ie=n!==null&&n.memoizedState!==null,e.mode&1?(kt=($=kt)||ie,cn(t,e),kt=$):cn(t,e),wn(e),r&8192){if($=e.memoizedState!==null,(e.stateNode.isHidden=$)&&!ie&&e.mode&1)for(he=e,ie=e.child;ie!==null;){for(ae=he=ie;he!==null;){switch(re=he,de=re.child,re.tag){case 0:case 11:case 14:case 15:vi(4,re,re.return);break;case 1:Fr(re,re.return);var ge=re.stateNode;if(typeof ge.componentWillUnmount=="function"){r=re,n=re.return;try{t=r,ge.props=t.memoizedProps,ge.state=t.memoizedState,ge.componentWillUnmount()}catch(ve){lt(r,n,ve)}}break;case 5:Fr(re,re.return);break;case 22:if(re.memoizedState!==null){xc(ae);continue}}de!==null?(de.return=re,he=de):xc(ae)}ie=ie.sibling}e:for(ie=null,ae=e;;){if(ae.tag===5){if(ie===null){ie=ae;try{s=ae.stateNode,$?(u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(D=ae.stateNode,R=ae.memoizedProps.style,g=R!=null&&R.hasOwnProperty("display")?R.display:null,D.style.display=Be("display",g))}catch(ve){lt(e,e.return,ve)}}}else if(ae.tag===6){if(ie===null)try{ae.stateNode.nodeValue=$?"":ae.memoizedProps}catch(ve){lt(e,e.return,ve)}}else if((ae.tag!==22&&ae.tag!==23||ae.memoizedState===null||ae===e)&&ae.child!==null){ae.child.return=ae,ae=ae.child;continue}if(ae===e)break e;for(;ae.sibling===null;){if(ae.return===null||ae.return===e)break e;ie===ae&&(ie=null),ae=ae.return}ie===ae&&(ie=null),ae.sibling.return=ae.return,ae=ae.sibling}}break;case 19:cn(t,e),wn(e),r&4&&gc(e);break;case 21:break;default:cn(t,e),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hc(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(pe(s,""),r.flags&=-33);var u=mc(e);mo(e,u,s);break;case 3:case 4:var g=r.stateNode.containerInfo,D=mc(e);ho(e,D,g);break;default:throw Error(o(161))}}catch(R){lt(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dp(e,t,n){he=e,yc(e)}function yc(e,t,n){for(var r=(e.mode&1)!==0;he!==null;){var s=he,u=s.child;if(s.tag===22&&r){var g=s.memoizedState!==null||xa;if(!g){var D=s.alternate,R=D!==null&&D.memoizedState!==null||kt;D=xa;var $=kt;if(xa=g,(kt=R)&&!$)for(he=s;he!==null;)g=he,R=g.child,g.tag===22&&g.memoizedState!==null?Sc(s):R!==null?(R.return=g,he=R):Sc(s);for(;u!==null;)he=u,yc(u),u=u.sibling;he=s,xa=D,kt=$}wc(e)}else s.subtreeFlags&8772&&u!==null?(u.return=s,he=u):wc(e)}}function wc(e){for(;he!==null;){var t=he;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:kt||Sa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!kt)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:ln(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&xu(t,u,r);break;case 3:var g=t.updateQueue;if(g!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xu(t,g,n)}break;case 5:var D=t.stateNode;if(n===null&&t.flags&4){n=D;var R=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&n.focus();break;case"img":R.src&&(n.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var $=t.alternate;if($!==null){var ie=$.memoizedState;if(ie!==null){var ae=ie.dehydrated;ae!==null&&Kr(ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}kt||t.flags&512&&po(t)}catch(re){lt(t,t.return,re)}}if(t===e){he=null;break}if(n=t.sibling,n!==null){n.return=t.return,he=n;break}he=t.return}}function xc(e){for(;he!==null;){var t=he;if(t===e){he=null;break}var n=t.sibling;if(n!==null){n.return=t.return,he=n;break}he=t.return}}function Sc(e){for(;he!==null;){var t=he;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sa(4,t)}catch(R){lt(t,n,R)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(R){lt(t,s,R)}}var u=t.return;try{po(t)}catch(R){lt(t,u,R)}break;case 5:var g=t.return;try{po(t)}catch(R){lt(t,g,R)}}}catch(R){lt(t,t.return,R)}if(t===e){he=null;break}var D=t.sibling;if(D!==null){D.return=t.return,he=D;break}he=t.return}}var fp=Math.ceil,Ta=fe.ReactCurrentDispatcher,_o=fe.ReactCurrentOwner,nn=fe.ReactCurrentBatchConfig,He=0,Et=null,_t=null,zt=0,Yt=0,Or=Vn(0),vt=0,yi=null,cr=0,Ea=0,go=0,wi=null,Vt=null,vo=0,Nr=1/0,Un=null,ba=!1,yo=null,Yn=null,Ma=!1,Kn=null,Da=0,xi=0,wo=null,za=-1,Aa=0;function Ot(){return He&6?dt():za!==-1?za:za=dt()}function Xn(e){return e.mode&1?He&2&&zt!==0?zt&-zt:Yf.transition!==null?(Aa===0&&(Aa=ml()),Aa):(e=Qe,e!==0||(e=window.event,e=e===void 0?16:El(e.type)),e):1}function dn(e,t,n,r){if(50<xi)throw xi=0,wo=null,Error(o(185));Hr(e,n,r),(!(He&2)||e!==Et)&&(e===Et&&(!(He&2)&&(Ea|=n),vt===4&&Jn(e,zt)),qt(e,r),n===1&&He===0&&!(t.mode&1)&&(Nr=dt()+500,ra&&Hn()))}function qt(e,t){var n=e.callbackNode;Qd(e,t);var r=Oi(e,e===Et?zt:0);if(r===0)n!==null&&fl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fl(n),t===1)e.tag===0?Qf(Ec.bind(null,e)):uu(Ec.bind(null,e)),qf(function(){!(He&6)&&Hn()}),n=null;else{switch(_l(r)){case 1:n=Ja;break;case 4:n=pl;break;case 16:n=Ci;break;case 536870912:n=hl;break;default:n=Ci}n=Lc(n,Tc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tc(e,t){if(za=-1,Aa=0,He&6)throw Error(o(327));var n=e.callbackNode;if(Gr()&&e.callbackNode!==n)return null;var r=Oi(e,e===Et?zt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Pa(e,r);else{t=r;var s=He;He|=2;var u=Mc();(Et!==e||zt!==t)&&(Un=null,Nr=dt()+500,fr(e,t));do try{mp();break}catch(D){bc(e,D)}while(!0);Fs(),Ta.current=u,He=s,_t!==null?t=0:(Et=null,zt=0,t=vt)}if(t!==0){if(t===2&&(s=Za(e),s!==0&&(r=s,t=xo(e,s))),t===1)throw n=yi,fr(e,0),Jn(e,r),qt(e,dt()),n;if(t===6)Jn(e,r);else{if(s=e.current.alternate,!(r&30)&&!pp(s)&&(t=Pa(e,r),t===2&&(u=Za(e),u!==0&&(r=u,t=xo(e,u))),t===1))throw n=yi,fr(e,0),Jn(e,r),qt(e,dt()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:pr(e,Vt,Un);break;case 3:if(Jn(e,r),(r&130023424)===r&&(t=vo+500-dt(),10<t)){if(Oi(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Ot(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ms(pr.bind(null,e,Vt,Un),t);break}pr(e,Vt,Un);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var g=31-an(r);u=1<<g,g=t[g],g>s&&(s=g),r&=~u}if(r=s,r=dt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fp(r/1960))-r,10<r){e.timeoutHandle=Ms(pr.bind(null,e,Vt,Un),r);break}pr(e,Vt,Un);break;case 5:pr(e,Vt,Un);break;default:throw Error(o(329))}}}return qt(e,dt()),e.callbackNode===n?Tc.bind(null,e):null}function xo(e,t){var n=wi;return e.current.memoizedState.isDehydrated&&(fr(e,t).flags|=256),e=Pa(e,t),e!==2&&(t=Vt,Vt=n,t!==null&&So(t)),e}function So(e){Vt===null?Vt=e:Vt.push.apply(Vt,e)}function pp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],u=s.getSnapshot;s=s.value;try{if(!sn(u(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t){for(t&=~go,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function Ec(e){if(He&6)throw Error(o(327));Gr();var t=Oi(e,0);if(!(t&1))return qt(e,dt()),null;var n=Pa(e,t);if(e.tag!==0&&n===2){var r=Za(e);r!==0&&(t=r,n=xo(e,r))}if(n===1)throw n=yi,fr(e,0),Jn(e,t),qt(e,dt()),n;if(n===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,Vt,Un),qt(e,dt()),null}function To(e,t){var n=He;He|=1;try{return e(t)}finally{He=n,He===0&&(Nr=dt()+500,ra&&Hn())}}function dr(e){Kn!==null&&Kn.tag===0&&!(He&6)&&Gr();var t=He;He|=1;var n=nn.transition,r=Qe;try{if(nn.transition=null,Qe=1,e)return e()}finally{Qe=r,nn.transition=n,He=t,!(He&6)&&Hn()}}function Eo(){Yt=Or.current,Ze(Or)}function fr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vf(n)),_t!==null)for(n=_t.return;n!==null;){var r=n;switch(Ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ta();break;case 3:kr(),Ze(Gt),Ze(Lt),Hs();break;case 5:Vs(r);break;case 4:kr();break;case 13:Ze(st);break;case 19:Ze(st);break;case 10:Os(r.type._context);break;case 22:case 23:Eo()}n=n.return}if(Et=e,_t=e=Zn(e.current,null),zt=Yt=t,vt=0,yi=null,go=Ea=cr=0,Vt=wi=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,u=n.pending;if(u!==null){var g=u.next;u.next=s,r.next=g}n.pending=r}or=null}return e}function bc(e,t){do{var n=_t;try{if(Fs(),pa.current=ga,ha){for(var r=ot.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ha=!1}if(ur=0,Tt=gt=ot=null,pi=!1,hi=0,_o.current=null,n===null||n.return===null){vt=1,yi=t,_t=null;break}e:{var u=e,g=n.return,D=n,R=t;if(t=zt,D.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var $=R,ie=D,ae=ie.tag;if(!(ie.mode&1)&&(ae===0||ae===11||ae===15)){var re=ie.alternate;re?(ie.updateQueue=re.updateQueue,ie.memoizedState=re.memoizedState,ie.lanes=re.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var de=Ku(g);if(de!==null){de.flags&=-257,Xu(de,g,D,u,t),de.mode&1&&Yu(u,$,t),t=de,R=$;var ge=t.updateQueue;if(ge===null){var ve=new Set;ve.add(R),t.updateQueue=ve}else ge.add(R);break e}else{if(!(t&1)){Yu(u,$,t),bo();break e}R=Error(o(426))}}else if(tt&&D.mode&1){var ft=Ku(g);if(ft!==null){!(ft.flags&65536)&&(ft.flags|=256),Xu(ft,g,D,u,t),ks(Ir(R,D));break e}}u=R=Ir(R,D),vt!==4&&(vt=2),wi===null?wi=[u]:wi.push(u),u=g;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var N=ju(u,R,t);wu(u,N);break e;case 1:D=R;var k=u.type,B=u.stateNode;if(!(u.flags&128)&&(typeof k.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Yn===null||!Yn.has(B)))){u.flags|=65536,t&=-t,u.lanes|=t;var oe=Qu(u,D,t);wu(u,oe);break e}}u=u.return}while(u!==null)}zc(n)}catch(we){t=we,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function Mc(){var e=Ta.current;return Ta.current=ga,e===null?ga:e}function bo(){(vt===0||vt===3||vt===2)&&(vt=4),Et===null||!(cr&268435455)&&!(Ea&268435455)||Jn(Et,zt)}function Pa(e,t){var n=He;He|=2;var r=Mc();(Et!==e||zt!==t)&&(Un=null,fr(e,t));do try{hp();break}catch(s){bc(e,s)}while(!0);if(Fs(),He=n,Ta.current=r,_t!==null)throw Error(o(261));return Et=null,zt=0,vt}function hp(){for(;_t!==null;)Dc(_t)}function mp(){for(;_t!==null&&!Nd();)Dc(_t)}function Dc(e){var t=Rc(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?zc(e):_t=t,_o.current=null}function zc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lp(n,t),n!==null){n.flags&=32767,_t=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{vt=6,_t=null;return}}else if(n=op(n,t,Yt),n!==null){_t=n;return}if(t=t.sibling,t!==null){_t=t;return}_t=t=e}while(t!==null);vt===0&&(vt=5)}function pr(e,t,n){var r=Qe,s=nn.transition;try{nn.transition=null,Qe=1,_p(e,t,n,r)}finally{nn.transition=s,Qe=r}return null}function _p(e,t,n,r){do Gr();while(Kn!==null);if(He&6)throw Error(o(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(Yd(e,u),e===Et&&(_t=Et=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,Lc(Ci,function(){return Gr(),null})),u=(n.flags&15990)!==0,n.subtreeFlags&15990||u){u=nn.transition,nn.transition=null;var g=Qe;Qe=1;var D=He;He|=4,_o.current=null,cp(e,n),vc(n,e),If(Es),Bi=!!Ts,Es=Ts=null,e.current=n,dp(n),Gd(),He=D,Qe=g,nn.transition=u}else e.current=n;if(Ma&&(Ma=!1,Kn=e,Da=s),u=e.pendingLanes,u===0&&(Yn=null),Vd(n.stateNode),qt(e,dt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ba)throw ba=!1,e=yo,yo=null,e;return Da&1&&e.tag!==0&&Gr(),u=e.pendingLanes,u&1?e===wo?xi++:(xi=0,wo=e):xi=0,Hn(),null}function Gr(){if(Kn!==null){var e=_l(Da),t=nn.transition,n=Qe;try{if(nn.transition=null,Qe=16>e?16:e,Kn===null)var r=!1;else{if(e=Kn,Kn=null,Da=0,He&6)throw Error(o(331));var s=He;for(He|=4,he=e.current;he!==null;){var u=he,g=u.child;if(he.flags&16){var D=u.deletions;if(D!==null){for(var R=0;R<D.length;R++){var $=D[R];for(he=$;he!==null;){var ie=he;switch(ie.tag){case 0:case 11:case 15:vi(8,ie,u)}var ae=ie.child;if(ae!==null)ae.return=ie,he=ae;else for(;he!==null;){ie=he;var re=ie.sibling,de=ie.return;if(pc(ie),ie===$){he=null;break}if(re!==null){re.return=de,he=re;break}he=de}}}var ge=u.alternate;if(ge!==null){var ve=ge.child;if(ve!==null){ge.child=null;do{var ft=ve.sibling;ve.sibling=null,ve=ft}while(ve!==null)}}he=u}}if(u.subtreeFlags&2064&&g!==null)g.return=u,he=g;else e:for(;he!==null;){if(u=he,u.flags&2048)switch(u.tag){case 0:case 11:case 15:vi(9,u,u.return)}var N=u.sibling;if(N!==null){N.return=u.return,he=N;break e}he=u.return}}var k=e.current;for(he=k;he!==null;){g=he;var B=g.child;if(g.subtreeFlags&2064&&B!==null)B.return=g,he=B;else e:for(g=k;he!==null;){if(D=he,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:Sa(9,D)}}catch(we){lt(D,D.return,we)}if(D===g){he=null;break e}var oe=D.sibling;if(oe!==null){oe.return=D.return,he=oe;break e}he=D.return}}if(He=s,Hn(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{Qe=n,nn.transition=t}}return!1}function Ac(e,t,n){t=Ir(n,t),t=ju(e,t,1),e=jn(e,t,1),t=Ot(),e!==null&&(Hr(e,1,t),qt(e,t))}function lt(e,t,n){if(e.tag===3)Ac(e,e,n);else for(;t!==null;){if(t.tag===3){Ac(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=Ir(n,e),e=Qu(t,e,1),t=jn(t,e,1),e=Ot(),t!==null&&(Hr(t,1,e),qt(t,e));break}}t=t.return}}function gp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ot(),e.pingedLanes|=e.suspendedLanes&n,Et===e&&(zt&n)===n&&(vt===4||vt===3&&(zt&130023424)===zt&&500>dt()-vo?fr(e,0):go|=n),qt(e,t)}function Pc(e,t){t===0&&(e.mode&1?(t=Fi,Fi<<=1,!(Fi&130023424)&&(Fi=4194304)):t=1);var n=Ot();e=Pn(e,t),e!==null&&(Hr(e,t,n),qt(e,n))}function vp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pc(e,n)}function yp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}r!==null&&r.delete(t),Pc(e,n)}var Rc;Rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Gt.current)Wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Wt=!1,sp(e,t,n);Wt=!!(e.flags&131072)}else Wt=!1,tt&&t.flags&1048576&&cu(t,aa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wa(e,t),e=t.pendingProps;var s=zr(t,Lt.current);Cr(t,n),s=Qs(null,t,r,e,s,n);var u=Ys();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Bt(r)?(u=!0,na(t)):u=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Bs(t),s.updater=va,t.stateNode=s,s._reactInternals=t,to(t,r,e,n),t=ao(null,t,r,!0,u,n)):(t.tag=0,tt&&u&&Rs(t),Ft(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wa(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=xp(r),e=ln(r,e),s){case 0:t=io(null,t,r,e,n);break e;case 1:t=rc(null,t,r,e,n);break e;case 11:t=Ju(null,t,r,e,n);break e;case 14:t=Zu(null,t,r,ln(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ln(r,s),io(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ln(r,s),rc(e,t,r,s,n);case 3:e:{if(ic(t),e===null)throw Error(o(387));r=t.pendingProps,u=t.memoizedState,s=u.element,yu(e,t),da(t,r,null,n);var g=t.memoizedState;if(r=g.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){s=Ir(Error(o(423)),t),t=ac(e,t,r,n,s);break e}else if(r!==s){s=Ir(Error(o(424)),t),t=ac(e,t,r,n,s);break e}else for(Qt=Wn(t.stateNode.containerInfo.firstChild),jt=t,tt=!0,on=null,n=gu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===s){t=Ln(e,t,n);break e}Ft(e,t,r,n)}t=t.child}return t;case 5:return Su(t),e===null&&Cs(t),r=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,g=s.children,bs(r,s)?g=null:u!==null&&bs(r,u)&&(t.flags|=32),nc(e,t),Ft(e,t,g,n),t.child;case 6:return e===null&&Cs(t),null;case 13:return sc(e,t,n);case 4:return Ws(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Lr(t,null,r,n):Ft(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ln(r,s),Ju(e,t,r,s,n);case 7:return Ft(e,t,t.pendingProps,n),t.child;case 8:return Ft(e,t,t.pendingProps.children,n),t.child;case 12:return Ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,u=t.memoizedProps,g=s.value,Xe(la,r._currentValue),r._currentValue=g,u!==null)if(sn(u.value,g)){if(u.children===s.children&&!Gt.current){t=Ln(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var D=u.dependencies;if(D!==null){g=u.child;for(var R=D.firstContext;R!==null;){if(R.context===r){if(u.tag===1){R=Rn(-1,n&-n),R.tag=2;var $=u.updateQueue;if($!==null){$=$.shared;var ie=$.pending;ie===null?R.next=R:(R.next=ie.next,ie.next=R),$.pending=R}}u.lanes|=n,R=u.alternate,R!==null&&(R.lanes|=n),Ns(u.return,n,t),D.lanes|=n;break}R=R.next}}else if(u.tag===10)g=u.type===t.type?null:u.child;else if(u.tag===18){if(g=u.return,g===null)throw Error(o(341));g.lanes|=n,D=g.alternate,D!==null&&(D.lanes|=n),Ns(g,n,t),g=u.sibling}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}Ft(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Cr(t,n),s=en(s),r=r(s),t.flags|=1,Ft(e,t,r,n),t.child;case 14:return r=t.type,s=ln(r,t.pendingProps),s=ln(r.type,s),Zu(e,t,r,s,n);case 15:return ec(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ln(r,s),wa(e,t),t.tag=1,Bt(r)?(e=!0,na(t)):e=!1,Cr(t,n),Hu(t,r,s),to(t,r,s,n),ao(null,t,r,!0,e,n);case 19:return lc(e,t,n);case 22:return tc(e,t,n)}throw Error(o(156,t.tag))};function Lc(e,t){return dl(e,t)}function wp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(e,t,n,r){return new wp(e,t,n,r)}function Mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return Mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xe)return 11;if(e===Ye)return 14}return 2}function Zn(e,t){var n=e.alternate;return n===null?(n=rn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ra(e,t,n,r,s,u){var g=2;if(r=e,typeof e=="function")Mo(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case De:return hr(n.children,s,u,t);case Ne:g=8,s|=8;break;case Ie:return e=rn(12,n,t,s|2),e.elementType=Ie,e.lanes=u,e;case Le:return e=rn(13,n,t,s),e.elementType=Le,e.lanes=u,e;case Se:return e=rn(19,n,t,s),e.elementType=Se,e.lanes=u,e;case Ve:return La(n,s,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fe:g=10;break e;case qe:g=9;break e;case xe:g=11;break e;case Ye:g=14;break e;case $e:g=16,r=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=rn(g,n,t,s),t.elementType=e,t.type=r,t.lanes=u,t}function hr(e,t,n,r){return e=rn(7,e,r,t),e.lanes=n,e}function La(e,t,n,r){return e=rn(22,e,r,t),e.elementType=Ve,e.lanes=n,e.stateNode={isHidden:!1},e}function Do(e,t,n){return e=rn(6,e,null,t),e.lanes=n,e}function zo(e,t,n){return t=rn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sp(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ao(e,t,n,r,s,u,g,D,R){return e=new Sp(e,t,n,D,R),t===1?(t=1,u===!0&&(t|=8)):t=0,u=rn(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(u),e}function Tp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uc(e){if(!e)return qn;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var n=e.type;if(Bt(n))return ou(e,n,t)}return t}function Cc(e,t,n,r,s,u,g,D,R){return e=Ao(n,r,!0,e,s,u,g,D,R),e.context=Uc(null),n=e.current,r=Ot(),s=Xn(n),u=Rn(r,s),u.callback=t??null,jn(n,u,s),e.current.lanes=s,Hr(e,s,r),qt(e,r),e}function Ua(e,t,n,r){var s=t.current,u=Ot(),g=Xn(s);return n=Uc(n),t.context===null?t.context=n:t.pendingContext=n,t=Rn(u,g),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jn(s,t,g),e!==null&&(dn(e,s,g,u),ca(e,s,g)),g}function Ca(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Po(e,t){kc(e,t),(e=e.alternate)&&kc(e,t)}var Ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ro(e){this._internalRoot=e}ka.prototype.render=Ro.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Ua(e,t,null,null)},ka.prototype.unmount=Ro.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dr(function(){Ua(null,e,null,null)}),t[Mn]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=yl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&Sl(e)}};function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fc(){}function Ep(e,t,n,r,s){if(s){if(typeof r=="function"){var u=r;r=function(){var $=Ca(g);u.call($)}}var g=Cc(t,r,e,0,null,!1,!1,"",Fc);return e._reactRootContainer=g,e[Mn]=g.current,ai(e.nodeType===8?e.parentNode:e),dr(),g}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var D=r;r=function(){var $=Ca(R);D.call($)}}var R=Ao(e,0,!1,null,null,!1,!1,"",Fc);return e._reactRootContainer=R,e[Mn]=R.current,ai(e.nodeType===8?e.parentNode:e),dr(function(){Ua(t,R,n,r)}),R}function Fa(e,t,n,r,s){var u=n._reactRootContainer;if(u){var g=u;if(typeof s=="function"){var D=s;s=function(){var R=Ca(g);D.call(R)}}Ua(t,g,e,s)}else g=Ep(n,t,e,s,r);return Ca(g)}gl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(ts(t,n|1),qt(t,dt()),!(He&6)&&(Nr=dt()+500,Hn()))}break;case 13:dr(function(){var r=Pn(e,1);if(r!==null){var s=Ot();dn(r,e,1,s)}}),Po(e,1)}},ns=function(e){if(e.tag===13){var t=Pn(e,134217728);if(t!==null){var n=Ot();dn(t,e,134217728,n)}Po(e,134217728)}},vl=function(e){if(e.tag===13){var t=Xn(e),n=Pn(e,t);if(n!==null){var r=Ot();dn(n,e,t,r)}Po(e,t)}},yl=function(){return Qe},wl=function(e,t){var n=Qe;try{return Qe=e,t()}finally{Qe=n}},mt=function(e,t,n){switch(t){case"input":if(h(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=ea(r);if(!s)throw Error(o(90));P(r),h(r,s)}}}break;case"textarea":C(e,n);break;case"select":t=n.value,t!=null&&y(e,!!n.multiple,t,!1)}},St=To,Pt=dr;var bp={usingClientEntryPoint:!1,Events:[li,Mr,ea,wt,xt,To]},Si={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mp={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ul(e),e===null?null:e.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{ki=Oa.inject(Mp),_n=Oa}catch{}}return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp,Ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lo(t))throw Error(o(200));return Tp(e,t,null,n)},Ht.createRoot=function(e,t){if(!Lo(e))throw Error(o(299));var n=!1,r="",s=Ic;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ao(e,1,!1,null,null,n,!1,r,s),e[Mn]=t.current,ai(e.nodeType===8?e.parentNode:e),new Ro(t)},Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=ul(t),e=e===null?null:e.stateNode,e},Ht.flushSync=function(e){return dr(e)},Ht.hydrate=function(e,t,n){if(!Ia(t))throw Error(o(200));return Fa(null,e,t,!0,n)},Ht.hydrateRoot=function(e,t,n){if(!Lo(e))throw Error(o(405));var r=n!=null&&n.hydratedSources||null,s=!1,u="",g=Ic;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),t=Cc(t,null,e,1,n??null,s,!1,u,g),e[Mn]=t.current,ai(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new ka(t)},Ht.render=function(e,t,n){if(!Ia(t))throw Error(o(200));return Fa(null,e,t,!1,n)},Ht.unmountComponentAtNode=function(e){if(!Ia(e))throw Error(o(40));return e._reactRootContainer?(dr(function(){Fa(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1},Ht.unstable_batchedUpdates=To,Ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ia(n))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Fa(e,t,n,!1,r)},Ht.version="18.3.1-next-f1338f8080-20240426",Ht}var Hc;function vd(){if(Hc)return ko.exports;Hc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),ko.exports=kp(),ko.exports}var $c;function Ip(){if($c)return Na;$c=1;var a=vd();return Na.createRoot=a.createRoot,Na.hydrateRoot=a.hydrateRoot,Na}var Fp=Ip(),Ei={},jc;function Op(){if(jc)return Ei;jc=1,Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.parse=x,Ei.serialize=A;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,f=/^[\u0020-\u003A\u003D-\u007E]*$/,_=Object.prototype.toString,w=(()=>{const F=function(){};return F.prototype=Object.create(null),F})();function x(F,Z){const j=new w,te=F.length;if(te<2)return j;const X=(Z==null?void 0:Z.decode)||G;let W=0;do{const J=F.indexOf("=",W);if(J===-1)break;const ue=F.indexOf(";",W),fe=ue===-1?te:ue;if(J>fe){W=F.lastIndexOf(";",J-1)+1;continue}const Re=z(F,W,J),ke=b(F,J,Re),De=F.slice(Re,ke);if(j[De]===void 0){let Ne=z(F,J+1,fe),Ie=b(F,fe,Ne);const Fe=X(F.slice(Ne,Ie));j[De]=Fe}W=fe+1}while(W<te);return j}function z(F,Z,j){do{const te=F.charCodeAt(Z);if(te!==32&&te!==9)return Z}while(++Z<j);return j}function b(F,Z,j){for(;Z>j;){const te=F.charCodeAt(--Z);if(te!==32&&te!==9)return Z+1}return j}function A(F,Z,j){const te=(j==null?void 0:j.encode)||encodeURIComponent;if(!a.test(F))throw new TypeError(`argument name is invalid: ${F}`);const X=te(Z);if(!i.test(X))throw new TypeError(`argument val is invalid: ${Z}`);let W=F+"="+X;if(!j)return W;if(j.maxAge!==void 0){if(!Number.isInteger(j.maxAge))throw new TypeError(`option maxAge is invalid: ${j.maxAge}`);W+="; Max-Age="+j.maxAge}if(j.domain){if(!o.test(j.domain))throw new TypeError(`option domain is invalid: ${j.domain}`);W+="; Domain="+j.domain}if(j.path){if(!f.test(j.path))throw new TypeError(`option path is invalid: ${j.path}`);W+="; Path="+j.path}if(j.expires){if(!O(j.expires)||!Number.isFinite(j.expires.valueOf()))throw new TypeError(`option expires is invalid: ${j.expires}`);W+="; Expires="+j.expires.toUTCString()}if(j.httpOnly&&(W+="; HttpOnly"),j.secure&&(W+="; Secure"),j.partitioned&&(W+="; Partitioned"),j.priority)switch(typeof j.priority=="string"?j.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${j.priority}`)}if(j.sameSite)switch(typeof j.sameSite=="string"?j.sameSite.toLowerCase():j.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${j.sameSite}`)}return W}function G(F){if(F.indexOf("%")===-1)return F;try{return decodeURIComponent(F)}catch{return F}}function O(F){return _.call(F)==="[object Date]"}return Ei}Op();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Qc="popstate";function Np(a={}){function i(_,w){let{pathname:x="/",search:z="",hash:b=""}=_r(_.location.hash.substring(1));return!x.startsWith("/")&&!x.startsWith(".")&&(x="/"+x),$o("",{pathname:x,search:z,hash:b},w.state&&w.state.usr||null,w.state&&w.state.key||"default")}function o(_,w){let x=_.document.querySelector("base"),z="";if(x&&x.getAttribute("href")){let b=_.location.href,A=b.indexOf("#");z=A===-1?b:b.slice(0,A)}return z+"#"+(typeof w=="string"?w:Mi(w))}function f(_,w){Xt(_.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(w)})`)}return Bp(i,o,f,a)}function nt(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function Xt(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Gp(){return Math.random().toString(36).substring(2,10)}function Yc(a,i){return{usr:a.state,key:a.key,idx:i}}function $o(a,i,o=null,f){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?_r(i):i,state:o,key:i&&i.key||f||Gp()}}function Mi({pathname:a="/",search:i="",hash:o=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function _r(a){let i={};if(a){let o=a.indexOf("#");o>=0&&(i.hash=a.substring(o),a=a.substring(0,o));let f=a.indexOf("?");f>=0&&(i.search=a.substring(f),a=a.substring(0,f)),a&&(i.pathname=a)}return i}function Bp(a,i,o,f={}){let{window:_=document.defaultView,v5Compat:w=!1}=f,x=_.history,z="POP",b=null,A=G();A==null&&(A=0,x.replaceState({...x.state,idx:A},""));function G(){return(x.state||{idx:null}).idx}function O(){z="POP";let X=G(),W=X==null?null:X-A;A=X,b&&b({action:z,location:te.location,delta:W})}function F(X,W){z="PUSH";let J=$o(te.location,X,W);o(J,X),A=G()+1;let ue=Yc(J,A),fe=te.createHref(J);try{x.pushState(ue,"",fe)}catch(Re){if(Re instanceof DOMException&&Re.name==="DataCloneError")throw Re;_.location.assign(fe)}w&&b&&b({action:z,location:te.location,delta:1})}function Z(X,W){z="REPLACE";let J=$o(te.location,X,W);o(J,X),A=G();let ue=Yc(J,A),fe=te.createHref(J);x.replaceState(ue,"",fe),w&&b&&b({action:z,location:te.location,delta:0})}function j(X){let W=_.location.origin!=="null"?_.location.origin:_.location.href,J=typeof X=="string"?X:Mi(X);return J=J.replace(/ $/,"%20"),nt(W,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,W)}let te={get action(){return z},get location(){return a(_,x)},listen(X){if(b)throw new Error("A history only accepts one active listener");return _.addEventListener(Qc,O),b=X,()=>{_.removeEventListener(Qc,O),b=null}},createHref(X){return i(_,X)},createURL:j,encodeLocation(X){let W=j(X);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:F,replace:Z,go(X){return x.go(X)}};return te}function yd(a,i,o="/"){return Wp(a,i,o,!1)}function Wp(a,i,o,f){let _=typeof i=="string"?_r(i):i,w=nr(_.pathname||"/",o);if(w==null)return null;let x=wd(a);Vp(x);let z=null;for(let b=0;z==null&&b<x.length;++b){let A=eh(w);z=Jp(x[b],A,f)}return z}function wd(a,i=[],o=[],f=""){let _=(w,x,z)=>{let b={relativePath:z===void 0?w.path||"":z,caseSensitive:w.caseSensitive===!0,childrenIndex:x,route:w};b.relativePath.startsWith("/")&&(nt(b.relativePath.startsWith(f),`Absolute route path "${b.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(f.length));let A=Cn([f,b.relativePath]),G=o.concat(b);w.children&&w.children.length>0&&(nt(w.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),wd(w.children,i,G,A)),!(w.path==null&&!w.index)&&i.push({path:A,score:Kp(A,w.index),routesMeta:G})};return a.forEach((w,x)=>{var z;if(w.path===""||!((z=w.path)!=null&&z.includes("?")))_(w,x);else for(let b of xd(w.path))_(w,x,b)}),i}function xd(a){let i=a.split("/");if(i.length===0)return[];let[o,...f]=i,_=o.endsWith("?"),w=o.replace(/\?$/,"");if(f.length===0)return _?[w,""]:[w];let x=xd(f.join("/")),z=[];return z.push(...x.map(b=>b===""?w:[w,b].join("/"))),_&&z.push(...x),z.map(b=>a.startsWith("/")&&b===""?"/":b)}function Vp(a){a.sort((i,o)=>i.score!==o.score?o.score-i.score:Xp(i.routesMeta.map(f=>f.childrenIndex),o.routesMeta.map(f=>f.childrenIndex)))}var qp=/^:[\w-]+$/,Hp=3,$p=2,jp=1,Qp=10,Yp=-2,Kc=a=>a==="*";function Kp(a,i){let o=a.split("/"),f=o.length;return o.some(Kc)&&(f+=Yp),i&&(f+=$p),o.filter(_=>!Kc(_)).reduce((_,w)=>_+(qp.test(w)?Hp:w===""?jp:Qp),f)}function Xp(a,i){return a.length===i.length&&a.slice(0,-1).every((f,_)=>f===i[_])?a[a.length-1]-i[i.length-1]:0}function Jp(a,i,o=!1){let{routesMeta:f}=a,_={},w="/",x=[];for(let z=0;z<f.length;++z){let b=f[z],A=z===f.length-1,G=w==="/"?i:i.slice(w.length)||"/",O=ja({path:b.relativePath,caseSensitive:b.caseSensitive,end:A},G),F=b.route;if(!O&&A&&o&&!f[f.length-1].route.index&&(O=ja({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},G)),!O)return null;Object.assign(_,O.params),x.push({params:_,pathname:Cn([w,O.pathname]),pathnameBase:ih(Cn([w,O.pathnameBase])),route:F}),O.pathnameBase!=="/"&&(w=Cn([w,O.pathnameBase]))}return x}function ja(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,f]=Zp(a.path,a.caseSensitive,a.end),_=i.match(o);if(!_)return null;let w=_[0],x=w.replace(/(.)\/+$/,"$1"),z=_.slice(1);return{params:f.reduce((A,{paramName:G,isOptional:O},F)=>{if(G==="*"){let j=z[F]||"";x=w.slice(0,w.length-j.length).replace(/(.)\/+$/,"$1")}const Z=z[F];return O&&!Z?A[G]=void 0:A[G]=(Z||"").replace(/%2F/g,"/"),A},{}),pathname:w,pathnameBase:x,pattern:a}}function Zp(a,i=!1,o=!0){Xt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let f=[],_="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,z,b)=>(f.push({paramName:z,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(f.push({paramName:"*"}),_+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?_+="\\/*$":a!==""&&a!=="/"&&(_+="(?:(?=\\/|$))"),[new RegExp(_,i?void 0:"i"),f]}function eh(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Xt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function nr(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,f=a.charAt(o);return f&&f!=="/"?null:a.slice(o)||"/"}function th(a,i="/"){let{pathname:o,search:f="",hash:_=""}=typeof a=="string"?_r(a):a;return{pathname:o?o.startsWith("/")?o:nh(o,i):i,search:ah(f),hash:sh(_)}}function nh(a,i){let o=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(_=>{_===".."?o.length>1&&o.pop():_!=="."&&o.push(_)}),o.length>1?o.join("/"):"/"}function Oo(a,i,o,f){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rh(a){return a.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Xo(a){let i=rh(a);return i.map((o,f)=>f===i.length-1?o.pathname:o.pathnameBase)}function Jo(a,i,o,f=!1){let _;typeof a=="string"?_=_r(a):(_={...a},nt(!_.pathname||!_.pathname.includes("?"),Oo("?","pathname","search",_)),nt(!_.pathname||!_.pathname.includes("#"),Oo("#","pathname","hash",_)),nt(!_.search||!_.search.includes("#"),Oo("#","search","hash",_)));let w=a===""||_.pathname==="",x=w?"/":_.pathname,z;if(x==null)z=o;else{let O=i.length-1;if(!f&&x.startsWith("..")){let F=x.split("/");for(;F[0]==="..";)F.shift(),O-=1;_.pathname=F.join("/")}z=O>=0?i[O]:"/"}let b=th(_,z),A=x&&x!=="/"&&x.endsWith("/"),G=(w||x===".")&&o.endsWith("/");return!b.pathname.endsWith("/")&&(A||G)&&(b.pathname+="/"),b}var Cn=a=>a.join("/").replace(/\/\/+/g,"/"),ih=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),ah=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,sh=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function oh(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Sd=["POST","PUT","PATCH","DELETE"];new Set(Sd);var lh=["GET",...Sd];new Set(lh);var Wr=Y.createContext(null);Wr.displayName="DataRouter";var Ya=Y.createContext(null);Ya.displayName="DataRouterState";var Td=Y.createContext({isTransitioning:!1});Td.displayName="ViewTransition";var uh=Y.createContext(new Map);uh.displayName="Fetchers";var ch=Y.createContext(null);ch.displayName="Await";var fn=Y.createContext(null);fn.displayName="Navigation";var zi=Y.createContext(null);zi.displayName="Location";var Sn=Y.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var Zo=Y.createContext(null);Zo.displayName="RouteError";function dh(a,{relative:i}={}){nt(Vr(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:f}=Y.useContext(fn),{hash:_,pathname:w,search:x}=Ai(a,{relative:i}),z=w;return o!=="/"&&(z=w==="/"?o:Cn([o,w])),f.createHref({pathname:z,search:x,hash:_})}function Vr(){return Y.useContext(zi)!=null}function Tn(){return nt(Vr(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(zi).location}var Ed="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bd(a){Y.useContext(fn).static||Y.useLayoutEffect(a)}function el(){let{isDataRoute:a}=Y.useContext(Sn);return a?Eh():fh()}function fh(){nt(Vr(),"useNavigate() may be used only in the context of a <Router> component.");let a=Y.useContext(Wr),{basename:i,navigator:o}=Y.useContext(fn),{matches:f}=Y.useContext(Sn),{pathname:_}=Tn(),w=JSON.stringify(Xo(f)),x=Y.useRef(!1);return bd(()=>{x.current=!0}),Y.useCallback((b,A={})=>{if(Xt(x.current,Ed),!x.current)return;if(typeof b=="number"){o.go(b);return}let G=Jo(b,JSON.parse(w),_,A.relative==="path");a==null&&i!=="/"&&(G.pathname=G.pathname==="/"?i:Cn([i,G.pathname])),(A.replace?o.replace:o.push)(G,A.state,A)},[i,o,w,_,a])}Y.createContext(null);function Ai(a,{relative:i}={}){let{matches:o}=Y.useContext(Sn),{pathname:f}=Tn(),_=JSON.stringify(Xo(o));return Y.useMemo(()=>Jo(a,JSON.parse(_),f,i==="path"),[a,_,f,i])}function ph(a,i){return Md(a,i)}function Md(a,i,o,f){var W;nt(Vr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:_}=Y.useContext(fn),{matches:w}=Y.useContext(Sn),x=w[w.length-1],z=x?x.params:{},b=x?x.pathname:"/",A=x?x.pathnameBase:"/",G=x&&x.route;{let J=G&&G.path||"";Dd(b,!G||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let O=Tn(),F;if(i){let J=typeof i=="string"?_r(i):i;nt(A==="/"||((W=J.pathname)==null?void 0:W.startsWith(A)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${J.pathname}" was given in the \`location\` prop.`),F=J}else F=O;let Z=F.pathname||"/",j=Z;if(A!=="/"){let J=A.replace(/^\//,"").split("/");j="/"+Z.replace(/^\//,"").split("/").slice(J.length).join("/")}let te=yd(a,{pathname:j});Xt(G||te!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),Xt(te==null||te[te.length-1].route.element!==void 0||te[te.length-1].route.Component!==void 0||te[te.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=vh(te&&te.map(J=>Object.assign({},J,{params:Object.assign({},z,J.params),pathname:Cn([A,_.encodeLocation?_.encodeLocation(J.pathname).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?A:Cn([A,_.encodeLocation?_.encodeLocation(J.pathnameBase).pathname:J.pathnameBase])})),w,o,f);return i&&X?Y.createElement(zi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...F},navigationType:"POP"}},X):X}function hh(){let a=Th(),i=oh(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,f="rgba(200,200,200, 0.5)",_={padding:"0.5rem",backgroundColor:f},w={padding:"2px 4px",backgroundColor:f},x=null;return console.error("Error handled by React Router default ErrorBoundary:",a),x=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:w},"ErrorBoundary")," or"," ",Y.createElement("code",{style:w},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},i),o?Y.createElement("pre",{style:_},o):null,x)}var mh=Y.createElement(hh,null),_h=class extends Y.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){console.error("React Router caught the following error during render",a,i)}render(){return this.state.error!==void 0?Y.createElement(Sn.Provider,{value:this.props.routeContext},Y.createElement(Zo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function gh({routeContext:a,match:i,children:o}){let f=Y.useContext(Wr);return f&&f.static&&f.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=i.route.id),Y.createElement(Sn.Provider,{value:a},o)}function vh(a,i=[],o=null,f=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let _=a,w=o==null?void 0:o.errors;if(w!=null){let b=_.findIndex(A=>A.route.id&&(w==null?void 0:w[A.route.id])!==void 0);nt(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(w).join(",")}`),_=_.slice(0,Math.min(_.length,b+1))}let x=!1,z=-1;if(o)for(let b=0;b<_.length;b++){let A=_[b];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(z=b),A.route.id){let{loaderData:G,errors:O}=o,F=A.route.loader&&!G.hasOwnProperty(A.route.id)&&(!O||O[A.route.id]===void 0);if(A.route.lazy||F){x=!0,z>=0?_=_.slice(0,z+1):_=[_[0]];break}}}return _.reduceRight((b,A,G)=>{let O,F=!1,Z=null,j=null;o&&(O=w&&A.route.id?w[A.route.id]:void 0,Z=A.route.errorElement||mh,x&&(z<0&&G===0?(Dd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,j=null):z===G&&(F=!0,j=A.route.hydrateFallbackElement||null)));let te=i.concat(_.slice(0,G+1)),X=()=>{let W;return O?W=Z:F?W=j:A.route.Component?W=Y.createElement(A.route.Component,null):A.route.element?W=A.route.element:W=b,Y.createElement(gh,{match:A,routeContext:{outlet:b,matches:te,isDataRoute:o!=null},children:W})};return o&&(A.route.ErrorBoundary||A.route.errorElement||G===0)?Y.createElement(_h,{location:o.location,revalidation:o.revalidation,component:Z,error:O,children:X(),routeContext:{outlet:null,matches:te,isDataRoute:!0}}):X()},null)}function tl(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yh(a){let i=Y.useContext(Wr);return nt(i,tl(a)),i}function wh(a){let i=Y.useContext(Ya);return nt(i,tl(a)),i}function xh(a){let i=Y.useContext(Sn);return nt(i,tl(a)),i}function nl(a){let i=xh(a),o=i.matches[i.matches.length-1];return nt(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function Sh(){return nl("useRouteId")}function Th(){var f;let a=Y.useContext(Zo),i=wh("useRouteError"),o=nl("useRouteError");return a!==void 0?a:(f=i.errors)==null?void 0:f[o]}function Eh(){let{router:a}=yh("useNavigate"),i=nl("useNavigate"),o=Y.useRef(!1);return bd(()=>{o.current=!0}),Y.useCallback(async(_,w={})=>{Xt(o.current,Ed),o.current&&(typeof _=="number"?a.navigate(_):await a.navigate(_,{fromRouteId:i,...w}))},[a,i])}var Xc={};function Dd(a,i,o){!i&&!Xc[a]&&(Xc[a]=!0,Xt(!1,o))}Y.memo(bh);function bh({routes:a,future:i,state:o}){return Md(a,void 0,o,i)}function Mh({to:a,replace:i,state:o,relative:f}){nt(Vr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:_}=Y.useContext(fn);Xt(!_,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:w}=Y.useContext(Sn),{pathname:x}=Tn(),z=el(),b=Jo(a,Xo(w),x,f==="path"),A=JSON.stringify(b);return Y.useEffect(()=>{z(JSON.parse(A),{replace:i,state:o,relative:f})},[z,A,f,i,o]),null}function Va(a){nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dh({basename:a="/",children:i=null,location:o,navigationType:f="POP",navigator:_,static:w=!1}){nt(!Vr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=a.replace(/^\/*/,"/"),z=Y.useMemo(()=>({basename:x,navigator:_,static:w,future:{}}),[x,_,w]);typeof o=="string"&&(o=_r(o));let{pathname:b="/",search:A="",hash:G="",state:O=null,key:F="default"}=o,Z=Y.useMemo(()=>{let j=nr(b,x);return j==null?null:{location:{pathname:j,search:A,hash:G,state:O,key:F},navigationType:f}},[x,b,A,G,O,F,f]);return Xt(Z!=null,`<Router basename="${x}"> is not able to match the URL "${b}${A}${G}" because it does not start with the basename, so the <Router> won't render anything.`),Z==null?null:Y.createElement(fn.Provider,{value:z},Y.createElement(zi.Provider,{children:i,value:Z}))}function zh({children:a,location:i}){return ph(jo(a),i)}function jo(a,i=[]){let o=[];return Y.Children.forEach(a,(f,_)=>{if(!Y.isValidElement(f))return;let w=[...i,_];if(f.type===Y.Fragment){o.push.apply(o,jo(f.props.children,w));return}nt(f.type===Va,`[${typeof f.type=="string"?f.type:f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nt(!f.props.index||!f.props.children,"An index route cannot have child routes.");let x={id:f.props.id||w.join("-"),caseSensitive:f.props.caseSensitive,element:f.props.element,Component:f.props.Component,index:f.props.index,path:f.props.path,loader:f.props.loader,action:f.props.action,hydrateFallbackElement:f.props.hydrateFallbackElement,HydrateFallback:f.props.HydrateFallback,errorElement:f.props.errorElement,ErrorBoundary:f.props.ErrorBoundary,hasErrorBoundary:f.props.hasErrorBoundary===!0||f.props.ErrorBoundary!=null||f.props.errorElement!=null,shouldRevalidate:f.props.shouldRevalidate,handle:f.props.handle,lazy:f.props.lazy};f.props.children&&(x.children=jo(f.props.children,w)),o.push(x)}),o}var qa="get",Ha="application/x-www-form-urlencoded";function Ka(a){return a!=null&&typeof a.tagName=="string"}function Ah(a){return Ka(a)&&a.tagName.toLowerCase()==="button"}function Ph(a){return Ka(a)&&a.tagName.toLowerCase()==="form"}function Rh(a){return Ka(a)&&a.tagName.toLowerCase()==="input"}function Lh(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Uh(a,i){return a.button===0&&(!i||i==="_self")&&!Lh(a)}function Qo(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((i,o)=>{let f=a[o];return i.concat(Array.isArray(f)?f.map(_=>[o,_]):[[o,f]])},[]))}function Ch(a,i){let o=Qo(a);return i&&i.forEach((f,_)=>{o.has(_)||i.getAll(_).forEach(w=>{o.append(_,w)})}),o}var Ga=null;function kh(){if(Ga===null)try{new FormData(document.createElement("form"),0),Ga=!1}catch{Ga=!0}return Ga}var Ih=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function No(a){return a!=null&&!Ih.has(a)?(Xt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ha}"`),null):a}function Fh(a,i){let o,f,_,w,x;if(Ph(a)){let z=a.getAttribute("action");f=z?nr(z,i):null,o=a.getAttribute("method")||qa,_=No(a.getAttribute("enctype"))||Ha,w=new FormData(a)}else if(Ah(a)||Rh(a)&&(a.type==="submit"||a.type==="image")){let z=a.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=a.getAttribute("formaction")||z.getAttribute("action");if(f=b?nr(b,i):null,o=a.getAttribute("formmethod")||z.getAttribute("method")||qa,_=No(a.getAttribute("formenctype"))||No(z.getAttribute("enctype"))||Ha,w=new FormData(z,a),!kh()){let{name:A,type:G,value:O}=a;if(G==="image"){let F=A?`${A}.`:"";w.append(`${F}x`,"0"),w.append(`${F}y`,"0")}else A&&w.append(A,O)}}else{if(Ka(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=qa,f=null,_=Ha,x=a}return w&&_==="text/plain"&&(x=w,w=void 0),{action:f,method:o.toLowerCase(),encType:_,formData:w,body:x}}function rl(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}async function Oh(a,i){if(a.id in i)return i[a.id];try{let o=await import(a.module);return i[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Nh(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Gh(a,i,o){let f=await Promise.all(a.map(async _=>{let w=i.routes[_.route.id];if(w){let x=await Oh(w,o);return x.links?x.links():[]}return[]}));return qh(f.flat(1).filter(Nh).filter(_=>_.rel==="stylesheet"||_.rel==="preload").map(_=>_.rel==="stylesheet"?{..._,rel:"prefetch",as:"style"}:{..._,rel:"prefetch"}))}function Jc(a,i,o,f,_,w){let x=(b,A)=>o[A]?b.route.id!==o[A].route.id:!0,z=(b,A)=>{var G;return o[A].pathname!==b.pathname||((G=o[A].route.path)==null?void 0:G.endsWith("*"))&&o[A].params["*"]!==b.params["*"]};return w==="assets"?i.filter((b,A)=>x(b,A)||z(b,A)):w==="data"?i.filter((b,A)=>{var O;let G=f.routes[b.route.id];if(!G||!G.hasLoader)return!1;if(x(b,A)||z(b,A))return!0;if(b.route.shouldRevalidate){let F=b.route.shouldRevalidate({currentUrl:new URL(_.pathname+_.search+_.hash,window.origin),currentParams:((O=o[0])==null?void 0:O.params)||{},nextUrl:new URL(a,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof F=="boolean")return F}return!0}):[]}function Bh(a,i){return Wh(a.map(o=>{let f=i.routes[o.route.id];if(!f)return[];let _=[f.module];return f.imports&&(_=_.concat(f.imports)),_}).flat(1))}function Wh(a){return[...new Set(a)]}function Vh(a){let i={},o=Object.keys(a).sort();for(let f of o)i[f]=a[f];return i}function qh(a,i){let o=new Set;return new Set(i),a.reduce((f,_)=>{let w=JSON.stringify(Vh(_));return o.has(w)||(o.add(w),f.push({key:w,link:_})),f},[])}function Hh(a){let i=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return i.pathname==="/"?i.pathname="_root.data":i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function $h(){let a=Y.useContext(Wr);return rl(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function jh(){let a=Y.useContext(Ya);return rl(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var il=Y.createContext(void 0);il.displayName="FrameworkContext";function zd(){let a=Y.useContext(il);return rl(a,"You must render this element inside a <HydratedRouter> element"),a}function Qh(a,i){let o=Y.useContext(il),[f,_]=Y.useState(!1),[w,x]=Y.useState(!1),{onFocus:z,onBlur:b,onMouseEnter:A,onMouseLeave:G,onTouchStart:O}=i,F=Y.useRef(null);Y.useEffect(()=>{if(a==="render"&&x(!0),a==="viewport"){let te=W=>{W.forEach(J=>{x(J.isIntersecting)})},X=new IntersectionObserver(te,{threshold:.5});return F.current&&X.observe(F.current),()=>{X.disconnect()}}},[a]),Y.useEffect(()=>{if(f){let te=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(te)}}},[f]);let Z=()=>{_(!0)},j=()=>{_(!1),x(!1)};return o?a!=="intent"?[w,F,{}]:[w,F,{onFocus:bi(z,Z),onBlur:bi(b,j),onMouseEnter:bi(A,Z),onMouseLeave:bi(G,j),onTouchStart:bi(O,Z)}]:[!1,F,{}]}function bi(a,i){return o=>{a&&a(o),o.defaultPrevented||i(o)}}function Yh({page:a,...i}){let{router:o}=$h(),f=Y.useMemo(()=>yd(o.routes,a,o.basename),[o.routes,a,o.basename]);return f?Y.createElement(Xh,{page:a,matches:f,...i}):null}function Kh(a){let{manifest:i,routeModules:o}=zd(),[f,_]=Y.useState([]);return Y.useEffect(()=>{let w=!1;return Gh(a,i,o).then(x=>{w||_(x)}),()=>{w=!0}},[a,i,o]),f}function Xh({page:a,matches:i,...o}){let f=Tn(),{manifest:_,routeModules:w}=zd(),{loaderData:x,matches:z}=jh(),b=Y.useMemo(()=>Jc(a,i,z,_,f,"data"),[a,i,z,_,f]),A=Y.useMemo(()=>Jc(a,i,z,_,f,"assets"),[a,i,z,_,f]),G=Y.useMemo(()=>{if(a===f.pathname+f.search+f.hash)return[];let Z=new Set,j=!1;if(i.forEach(X=>{var J;let W=_.routes[X.route.id];!W||!W.hasLoader||(!b.some(ue=>ue.route.id===X.route.id)&&X.route.id in x&&((J=w[X.route.id])!=null&&J.shouldRevalidate)||W.hasClientLoader?j=!0:Z.add(X.route.id))}),Z.size===0)return[];let te=Hh(a);return j&&Z.size>0&&te.searchParams.set("_routes",i.filter(X=>Z.has(X.route.id)).map(X=>X.route.id).join(",")),[te.pathname+te.search]},[x,f,_,b,i,a,w]),O=Y.useMemo(()=>Bh(A,_),[A,_]),F=Kh(A);return Y.createElement(Y.Fragment,null,G.map(Z=>Y.createElement("link",{key:Z,rel:"prefetch",as:"fetch",href:Z,...o})),O.map(Z=>Y.createElement("link",{key:Z,rel:"modulepreload",href:Z,...o})),F.map(({key:Z,link:j})=>Y.createElement("link",{key:Z,...j})))}function Jh(...a){return i=>{a.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var Ad=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ad&&(window.__reactRouterVersion="7.1.3")}catch{}function Zh({basename:a,children:i,window:o}){let f=Y.useRef();f.current==null&&(f.current=Np({window:o,v5Compat:!0}));let _=f.current,[w,x]=Y.useState({action:_.action,location:_.location}),z=Y.useCallback(b=>{Y.startTransition(()=>x(b))},[x]);return Y.useLayoutEffect(()=>_.listen(z),[_,z]),Y.createElement(Dh,{basename:a,children:i,location:w.location,navigationType:w.action,navigator:_})}var Pd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tr=Y.forwardRef(function({onClick:i,discover:o="render",prefetch:f="none",relative:_,reloadDocument:w,replace:x,state:z,target:b,to:A,preventScrollReset:G,viewTransition:O,...F},Z){let{basename:j}=Y.useContext(fn),te=typeof A=="string"&&Pd.test(A),X,W=!1;if(typeof A=="string"&&te&&(X=A,Ad))try{let Ie=new URL(window.location.href),Fe=A.startsWith("//")?new URL(Ie.protocol+A):new URL(A),qe=nr(Fe.pathname,j);Fe.origin===Ie.origin&&qe!=null?A=qe+Fe.search+Fe.hash:W=!0}catch{Xt(!1,`<Link to="${A}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=dh(A,{relative:_}),[ue,fe,Re]=Qh(f,F),ke=rm(A,{replace:x,state:z,target:b,preventScrollReset:G,relative:_,viewTransition:O});function De(Ie){i&&i(Ie),Ie.defaultPrevented||ke(Ie)}let Ne=Y.createElement("a",{...F,...Re,href:X||J,onClick:W||w?i:De,ref:Jh(Z,fe),target:b,"data-discover":!te&&o==="render"?"true":void 0});return ue&&!te?Y.createElement(Y.Fragment,null,Ne,Y.createElement(Yh,{page:J})):Ne});tr.displayName="Link";var em=Y.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:f="",end:_=!1,style:w,to:x,viewTransition:z,children:b,...A},G){let O=Ai(x,{relative:A.relative}),F=Tn(),Z=Y.useContext(Ya),{navigator:j,basename:te}=Y.useContext(fn),X=Z!=null&&lm(O)&&z===!0,W=j.encodeLocation?j.encodeLocation(O).pathname:O.pathname,J=F.pathname,ue=Z&&Z.navigation&&Z.navigation.location?Z.navigation.location.pathname:null;o||(J=J.toLowerCase(),ue=ue?ue.toLowerCase():null,W=W.toLowerCase()),ue&&te&&(ue=nr(ue,te)||ue);const fe=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let Re=J===W||!_&&J.startsWith(W)&&J.charAt(fe)==="/",ke=ue!=null&&(ue===W||!_&&ue.startsWith(W)&&ue.charAt(W.length)==="/"),De={isActive:Re,isPending:ke,isTransitioning:X},Ne=Re?i:void 0,Ie;typeof f=="function"?Ie=f(De):Ie=[f,Re?"active":null,ke?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let Fe=typeof w=="function"?w(De):w;return Y.createElement(tr,{...A,"aria-current":Ne,className:Ie,ref:G,style:Fe,to:x,viewTransition:z},typeof b=="function"?b(De):b)});em.displayName="NavLink";var tm=Y.forwardRef(({discover:a="render",fetcherKey:i,navigate:o,reloadDocument:f,replace:_,state:w,method:x=qa,action:z,onSubmit:b,relative:A,preventScrollReset:G,viewTransition:O,...F},Z)=>{let j=sm(),te=om(z,{relative:A}),X=x.toLowerCase()==="get"?"get":"post",W=typeof z=="string"&&Pd.test(z),J=ue=>{if(b&&b(ue),ue.defaultPrevented)return;ue.preventDefault();let fe=ue.nativeEvent.submitter,Re=(fe==null?void 0:fe.getAttribute("formmethod"))||x;j(fe||ue.currentTarget,{fetcherKey:i,method:Re,navigate:o,replace:_,state:w,relative:A,preventScrollReset:G,viewTransition:O})};return Y.createElement("form",{ref:Z,method:X,action:te,onSubmit:f?b:J,...F,"data-discover":!W&&a==="render"?"true":void 0})});tm.displayName="Form";function nm(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rd(a){let i=Y.useContext(Wr);return nt(i,nm(a)),i}function rm(a,{target:i,replace:o,state:f,preventScrollReset:_,relative:w,viewTransition:x}={}){let z=el(),b=Tn(),A=Ai(a,{relative:w});return Y.useCallback(G=>{if(Uh(G,i)){G.preventDefault();let O=o!==void 0?o:Mi(b)===Mi(A);z(a,{replace:O,state:f,preventScrollReset:_,relative:w,viewTransition:x})}},[b,z,A,o,f,i,a,_,w,x])}function Ld(a){Xt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let i=Y.useRef(Qo(a)),o=Y.useRef(!1),f=Tn(),_=Y.useMemo(()=>Ch(f.search,o.current?null:i.current),[f.search]),w=el(),x=Y.useCallback((z,b)=>{const A=Qo(typeof z=="function"?z(_):z);o.current=!0,w("?"+A,b)},[w,_]);return[_,x]}var im=0,am=()=>`__${String(++im)}__`;function sm(){let{router:a}=Rd("useSubmit"),{basename:i}=Y.useContext(fn),o=Sh();return Y.useCallback(async(f,_={})=>{let{action:w,method:x,encType:z,formData:b,body:A}=Fh(f,i);if(_.navigate===!1){let G=_.fetcherKey||am();await a.fetch(G,o,_.action||w,{preventScrollReset:_.preventScrollReset,formData:b,body:A,formMethod:_.method||x,formEncType:_.encType||z,flushSync:_.flushSync})}else await a.navigate(_.action||w,{preventScrollReset:_.preventScrollReset,formData:b,body:A,formMethod:_.method||x,formEncType:_.encType||z,replace:_.replace,state:_.state,fromRouteId:o,flushSync:_.flushSync,viewTransition:_.viewTransition})},[a,i,o])}function om(a,{relative:i}={}){let{basename:o}=Y.useContext(fn),f=Y.useContext(Sn);nt(f,"useFormAction must be used inside a RouteContext");let[_]=f.matches.slice(-1),w={...Ai(a||".",{relative:i})},x=Tn();if(a==null){w.search=x.search;let z=new URLSearchParams(w.search),b=z.getAll("index");if(b.some(G=>G==="")){z.delete("index"),b.filter(O=>O).forEach(O=>z.append("index",O));let G=z.toString();w.search=G?`?${G}`:""}}return(!a||a===".")&&_.route.index&&(w.search=w.search?w.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(w.pathname=w.pathname==="/"?o:Cn([o,w.pathname])),Mi(w)}function lm(a,i={}){let o=Y.useContext(Td);nt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:f}=Rd("useViewTransitionState"),_=Ai(a,{relative:i.relative});if(!o.isTransitioning)return!1;let w=nr(o.currentLocation.pathname,f)||o.currentLocation.pathname,x=nr(o.nextLocation.pathname,f)||o.nextLocation.pathname;return ja(_.pathname,x)!=null||ja(_.pathname,w)!=null}new TextEncoder;const um=`struct VertexOut {
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
}`;function cm(a,i){return class extends a{constructor(...o){super(...o),i(this)}}}const dm=cm(Array,a=>a.fill(0));let Ge=1e-6;function fm(a){function i(l=0,v=0){const c=new a(2);return l!==void 0&&(c[0]=l,v!==void 0&&(c[1]=v)),c}const o=i;function f(l,v,c){const h=c??new a(2);return h[0]=l,h[1]=v,h}function _(l,v){const c=v??new a(2);return c[0]=Math.ceil(l[0]),c[1]=Math.ceil(l[1]),c}function w(l,v){const c=v??new a(2);return c[0]=Math.floor(l[0]),c[1]=Math.floor(l[1]),c}function x(l,v){const c=v??new a(2);return c[0]=Math.round(l[0]),c[1]=Math.round(l[1]),c}function z(l,v=0,c=1,h){const S=h??new a(2);return S[0]=Math.min(c,Math.max(v,l[0])),S[1]=Math.min(c,Math.max(v,l[1])),S}function b(l,v,c){const h=c??new a(2);return h[0]=l[0]+v[0],h[1]=l[1]+v[1],h}function A(l,v,c,h){const S=h??new a(2);return S[0]=l[0]+v[0]*c,S[1]=l[1]+v[1]*c,S}function G(l,v){const c=l[0],h=l[1],S=v[0],U=v[1],q=Math.sqrt(c*c+h*h),y=Math.sqrt(S*S+U*U),T=q*y,L=T&&Ie(l,v)/T;return Math.acos(L)}function O(l,v,c){const h=c??new a(2);return h[0]=l[0]-v[0],h[1]=l[1]-v[1],h}const F=O;function Z(l,v){return Math.abs(l[0]-v[0])<Ge&&Math.abs(l[1]-v[1])<Ge}function j(l,v){return l[0]===v[0]&&l[1]===v[1]}function te(l,v,c,h){const S=h??new a(2);return S[0]=l[0]+c*(v[0]-l[0]),S[1]=l[1]+c*(v[1]-l[1]),S}function X(l,v,c,h){const S=h??new a(2);return S[0]=l[0]+c[0]*(v[0]-l[0]),S[1]=l[1]+c[1]*(v[1]-l[1]),S}function W(l,v,c){const h=c??new a(2);return h[0]=Math.max(l[0],v[0]),h[1]=Math.max(l[1],v[1]),h}function J(l,v,c){const h=c??new a(2);return h[0]=Math.min(l[0],v[0]),h[1]=Math.min(l[1],v[1]),h}function ue(l,v,c){const h=c??new a(2);return h[0]=l[0]*v,h[1]=l[1]*v,h}const fe=ue;function Re(l,v,c){const h=c??new a(2);return h[0]=l[0]/v,h[1]=l[1]/v,h}function ke(l,v){const c=v??new a(2);return c[0]=1/l[0],c[1]=1/l[1],c}const De=ke;function Ne(l,v,c){const h=c??new a(3),S=l[0]*v[1]-l[1]*v[0];return h[0]=0,h[1]=0,h[2]=S,h}function Ie(l,v){return l[0]*v[0]+l[1]*v[1]}function Fe(l){const v=l[0],c=l[1];return Math.sqrt(v*v+c*c)}const qe=Fe;function xe(l){const v=l[0],c=l[1];return v*v+c*c}const Le=xe;function Se(l,v){const c=l[0]-v[0],h=l[1]-v[1];return Math.sqrt(c*c+h*h)}const Ye=Se;function $e(l,v){const c=l[0]-v[0],h=l[1]-v[1];return c*c+h*h}const Ve=$e;function le(l,v){const c=v??new a(2),h=l[0],S=l[1],U=Math.sqrt(h*h+S*S);return U>1e-5?(c[0]=h/U,c[1]=S/U):(c[0]=0,c[1]=0),c}function ye(l,v){const c=v??new a(2);return c[0]=-l[0],c[1]=-l[1],c}function se(l,v){const c=v??new a(2);return c[0]=l[0],c[1]=l[1],c}const I=se;function ne(l,v,c){const h=c??new a(2);return h[0]=l[0]*v[0],h[1]=l[1]*v[1],h}const Me=ne;function Te(l,v,c){const h=c??new a(2);return h[0]=l[0]/v[0],h[1]=l[1]/v[1],h}const Ce=Te;function Ue(l=1,v){const c=v??new a(2),h=Math.random()*2*Math.PI;return c[0]=Math.cos(h)*l,c[1]=Math.sin(h)*l,c}function p(l){const v=l??new a(2);return v[0]=0,v[1]=0,v}function M(l,v,c){const h=c??new a(2),S=l[0],U=l[1];return h[0]=S*v[0]+U*v[4]+v[12],h[1]=S*v[1]+U*v[5]+v[13],h}function d(l,v,c){const h=c??new a(2),S=l[0],U=l[1];return h[0]=v[0]*S+v[4]*U+v[8],h[1]=v[1]*S+v[5]*U+v[9],h}function m(l,v,c,h){const S=h??new a(2),U=l[0]-v[0],q=l[1]-v[1],y=Math.sin(c),T=Math.cos(c);return S[0]=U*T-q*y+v[0],S[1]=U*y+q*T+v[1],S}function E(l,v,c){const h=c??new a(2);return le(l,h),ue(h,v,h)}function P(l,v,c){const h=c??new a(2);return Fe(l)>v?E(l,v,h):se(l,h)}function V(l,v,c){const h=c??new a(2);return te(l,v,.5,h)}return{create:i,fromValues:o,set:f,ceil:_,floor:w,round:x,clamp:z,add:b,addScaled:A,angle:G,subtract:O,sub:F,equalsApproximately:Z,equals:j,lerp:te,lerpV:X,max:W,min:J,mulScalar:ue,scale:fe,divScalar:Re,inverse:ke,invert:De,cross:Ne,dot:Ie,length:Fe,len:qe,lengthSq:xe,lenSq:Le,distance:Se,dist:Ye,distanceSq:$e,distSq:Ve,normalize:le,negate:ye,copy:se,clone:I,multiply:ne,mul:Me,divide:Te,div:Ce,random:Ue,zero:p,transformMat4:M,transformMat3:d,rotate:m,setLength:E,truncate:P,midpoint:V}}const Zc=new Map;function Ud(a){let i=Zc.get(a);return i||(i=fm(a),Zc.set(a,i)),i}function pm(a){function i(y,T,L){const C=new a(3);return y!==void 0&&(C[0]=y,T!==void 0&&(C[1]=T,L!==void 0&&(C[2]=L))),C}const o=i;function f(y,T,L,C){const H=C??new a(3);return H[0]=y,H[1]=T,H[2]=L,H}function _(y,T){const L=T??new a(3);return L[0]=Math.ceil(y[0]),L[1]=Math.ceil(y[1]),L[2]=Math.ceil(y[2]),L}function w(y,T){const L=T??new a(3);return L[0]=Math.floor(y[0]),L[1]=Math.floor(y[1]),L[2]=Math.floor(y[2]),L}function x(y,T){const L=T??new a(3);return L[0]=Math.round(y[0]),L[1]=Math.round(y[1]),L[2]=Math.round(y[2]),L}function z(y,T=0,L=1,C){const H=C??new a(3);return H[0]=Math.min(L,Math.max(T,y[0])),H[1]=Math.min(L,Math.max(T,y[1])),H[2]=Math.min(L,Math.max(T,y[2])),H}function b(y,T,L){const C=L??new a(3);return C[0]=y[0]+T[0],C[1]=y[1]+T[1],C[2]=y[2]+T[2],C}function A(y,T,L,C){const H=C??new a(3);return H[0]=y[0]+T[0]*L,H[1]=y[1]+T[1]*L,H[2]=y[2]+T[2]*L,H}function G(y,T){const L=y[0],C=y[1],H=y[2],Q=T[0],ee=T[1],me=T[2],ze=Math.sqrt(L*L+C*C+H*H),pe=Math.sqrt(Q*Q+ee*ee+me*me),_e=ze*pe,Oe=_e&&Ie(y,T)/_e;return Math.acos(Oe)}function O(y,T,L){const C=L??new a(3);return C[0]=y[0]-T[0],C[1]=y[1]-T[1],C[2]=y[2]-T[2],C}const F=O;function Z(y,T){return Math.abs(y[0]-T[0])<Ge&&Math.abs(y[1]-T[1])<Ge&&Math.abs(y[2]-T[2])<Ge}function j(y,T){return y[0]===T[0]&&y[1]===T[1]&&y[2]===T[2]}function te(y,T,L,C){const H=C??new a(3);return H[0]=y[0]+L*(T[0]-y[0]),H[1]=y[1]+L*(T[1]-y[1]),H[2]=y[2]+L*(T[2]-y[2]),H}function X(y,T,L,C){const H=C??new a(3);return H[0]=y[0]+L[0]*(T[0]-y[0]),H[1]=y[1]+L[1]*(T[1]-y[1]),H[2]=y[2]+L[2]*(T[2]-y[2]),H}function W(y,T,L){const C=L??new a(3);return C[0]=Math.max(y[0],T[0]),C[1]=Math.max(y[1],T[1]),C[2]=Math.max(y[2],T[2]),C}function J(y,T,L){const C=L??new a(3);return C[0]=Math.min(y[0],T[0]),C[1]=Math.min(y[1],T[1]),C[2]=Math.min(y[2],T[2]),C}function ue(y,T,L){const C=L??new a(3);return C[0]=y[0]*T,C[1]=y[1]*T,C[2]=y[2]*T,C}const fe=ue;function Re(y,T,L){const C=L??new a(3);return C[0]=y[0]/T,C[1]=y[1]/T,C[2]=y[2]/T,C}function ke(y,T){const L=T??new a(3);return L[0]=1/y[0],L[1]=1/y[1],L[2]=1/y[2],L}const De=ke;function Ne(y,T,L){const C=L??new a(3),H=y[2]*T[0]-y[0]*T[2],Q=y[0]*T[1]-y[1]*T[0];return C[0]=y[1]*T[2]-y[2]*T[1],C[1]=H,C[2]=Q,C}function Ie(y,T){return y[0]*T[0]+y[1]*T[1]+y[2]*T[2]}function Fe(y){const T=y[0],L=y[1],C=y[2];return Math.sqrt(T*T+L*L+C*C)}const qe=Fe;function xe(y){const T=y[0],L=y[1],C=y[2];return T*T+L*L+C*C}const Le=xe;function Se(y,T){const L=y[0]-T[0],C=y[1]-T[1],H=y[2]-T[2];return Math.sqrt(L*L+C*C+H*H)}const Ye=Se;function $e(y,T){const L=y[0]-T[0],C=y[1]-T[1],H=y[2]-T[2];return L*L+C*C+H*H}const Ve=$e;function le(y,T){const L=T??new a(3),C=y[0],H=y[1],Q=y[2],ee=Math.sqrt(C*C+H*H+Q*Q);return ee>1e-5?(L[0]=C/ee,L[1]=H/ee,L[2]=Q/ee):(L[0]=0,L[1]=0,L[2]=0),L}function ye(y,T){const L=T??new a(3);return L[0]=-y[0],L[1]=-y[1],L[2]=-y[2],L}function se(y,T){const L=T??new a(3);return L[0]=y[0],L[1]=y[1],L[2]=y[2],L}const I=se;function ne(y,T,L){const C=L??new a(3);return C[0]=y[0]*T[0],C[1]=y[1]*T[1],C[2]=y[2]*T[2],C}const Me=ne;function Te(y,T,L){const C=L??new a(3);return C[0]=y[0]/T[0],C[1]=y[1]/T[1],C[2]=y[2]/T[2],C}const Ce=Te;function Ue(y=1,T){const L=T??new a(3),C=Math.random()*2*Math.PI,H=Math.random()*2-1,Q=Math.sqrt(1-H*H)*y;return L[0]=Math.cos(C)*Q,L[1]=Math.sin(C)*Q,L[2]=H*y,L}function p(y){const T=y??new a(3);return T[0]=0,T[1]=0,T[2]=0,T}function M(y,T,L){const C=L??new a(3),H=y[0],Q=y[1],ee=y[2],me=T[3]*H+T[7]*Q+T[11]*ee+T[15]||1;return C[0]=(T[0]*H+T[4]*Q+T[8]*ee+T[12])/me,C[1]=(T[1]*H+T[5]*Q+T[9]*ee+T[13])/me,C[2]=(T[2]*H+T[6]*Q+T[10]*ee+T[14])/me,C}function d(y,T,L){const C=L??new a(3),H=y[0],Q=y[1],ee=y[2];return C[0]=H*T[0*4+0]+Q*T[1*4+0]+ee*T[2*4+0],C[1]=H*T[0*4+1]+Q*T[1*4+1]+ee*T[2*4+1],C[2]=H*T[0*4+2]+Q*T[1*4+2]+ee*T[2*4+2],C}function m(y,T,L){const C=L??new a(3),H=y[0],Q=y[1],ee=y[2];return C[0]=H*T[0]+Q*T[4]+ee*T[8],C[1]=H*T[1]+Q*T[5]+ee*T[9],C[2]=H*T[2]+Q*T[6]+ee*T[10],C}function E(y,T,L){const C=L??new a(3),H=T[0],Q=T[1],ee=T[2],me=T[3]*2,ze=y[0],pe=y[1],_e=y[2],Oe=Q*_e-ee*pe,Be=ee*ze-H*_e,Ke=H*pe-Q*ze;return C[0]=ze+Oe*me+(Q*Ke-ee*Be)*2,C[1]=pe+Be*me+(ee*Oe-H*Ke)*2,C[2]=_e+Ke*me+(H*Be-Q*Oe)*2,C}function P(y,T){const L=T??new a(3);return L[0]=y[12],L[1]=y[13],L[2]=y[14],L}function V(y,T,L){const C=L??new a(3),H=T*4;return C[0]=y[H+0],C[1]=y[H+1],C[2]=y[H+2],C}function l(y,T){const L=T??new a(3),C=y[0],H=y[1],Q=y[2],ee=y[4],me=y[5],ze=y[6],pe=y[8],_e=y[9],Oe=y[10];return L[0]=Math.sqrt(C*C+H*H+Q*Q),L[1]=Math.sqrt(ee*ee+me*me+ze*ze),L[2]=Math.sqrt(pe*pe+_e*_e+Oe*Oe),L}function v(y,T,L,C){const H=C??new a(3),Q=[],ee=[];return Q[0]=y[0]-T[0],Q[1]=y[1]-T[1],Q[2]=y[2]-T[2],ee[0]=Q[0],ee[1]=Q[1]*Math.cos(L)-Q[2]*Math.sin(L),ee[2]=Q[1]*Math.sin(L)+Q[2]*Math.cos(L),H[0]=ee[0]+T[0],H[1]=ee[1]+T[1],H[2]=ee[2]+T[2],H}function c(y,T,L,C){const H=C??new a(3),Q=[],ee=[];return Q[0]=y[0]-T[0],Q[1]=y[1]-T[1],Q[2]=y[2]-T[2],ee[0]=Q[2]*Math.sin(L)+Q[0]*Math.cos(L),ee[1]=Q[1],ee[2]=Q[2]*Math.cos(L)-Q[0]*Math.sin(L),H[0]=ee[0]+T[0],H[1]=ee[1]+T[1],H[2]=ee[2]+T[2],H}function h(y,T,L,C){const H=C??new a(3),Q=[],ee=[];return Q[0]=y[0]-T[0],Q[1]=y[1]-T[1],Q[2]=y[2]-T[2],ee[0]=Q[0]*Math.cos(L)-Q[1]*Math.sin(L),ee[1]=Q[0]*Math.sin(L)+Q[1]*Math.cos(L),ee[2]=Q[2],H[0]=ee[0]+T[0],H[1]=ee[1]+T[1],H[2]=ee[2]+T[2],H}function S(y,T,L){const C=L??new a(3);return le(y,C),ue(C,T,C)}function U(y,T,L){const C=L??new a(3);return Fe(y)>T?S(y,T,C):se(y,C)}function q(y,T,L){const C=L??new a(3);return te(y,T,.5,C)}return{create:i,fromValues:o,set:f,ceil:_,floor:w,round:x,clamp:z,add:b,addScaled:A,angle:G,subtract:O,sub:F,equalsApproximately:Z,equals:j,lerp:te,lerpV:X,max:W,min:J,mulScalar:ue,scale:fe,divScalar:Re,inverse:ke,invert:De,cross:Ne,dot:Ie,length:Fe,len:qe,lengthSq:xe,lenSq:Le,distance:Se,dist:Ye,distanceSq:$e,distSq:Ve,normalize:le,negate:ye,copy:se,clone:I,multiply:ne,mul:Me,divide:Te,div:Ce,random:Ue,zero:p,transformMat4:M,transformMat4Upper3x3:d,transformMat3:m,transformQuat:E,getTranslation:P,getAxis:V,getScaling:l,rotateX:v,rotateY:c,rotateZ:h,setLength:S,truncate:U,midpoint:q}}const ed=new Map;function Xa(a){let i=ed.get(a);return i||(i=pm(a),ed.set(a,i)),i}function hm(a){const i=Ud(a),o=Xa(a);function f(p,M,d,m,E,P,V,l,v){const c=new a(12);return c[3]=0,c[7]=0,c[11]=0,p!==void 0&&(c[0]=p,M!==void 0&&(c[1]=M,d!==void 0&&(c[2]=d,m!==void 0&&(c[4]=m,E!==void 0&&(c[5]=E,P!==void 0&&(c[6]=P,V!==void 0&&(c[8]=V,l!==void 0&&(c[9]=l,v!==void 0&&(c[10]=v))))))))),c}function _(p,M,d,m,E,P,V,l,v,c){const h=c??new a(12);return h[0]=p,h[1]=M,h[2]=d,h[3]=0,h[4]=m,h[5]=E,h[6]=P,h[7]=0,h[8]=V,h[9]=l,h[10]=v,h[11]=0,h}function w(p,M){const d=M??new a(12);return d[0]=p[0],d[1]=p[1],d[2]=p[2],d[3]=0,d[4]=p[4],d[5]=p[5],d[6]=p[6],d[7]=0,d[8]=p[8],d[9]=p[9],d[10]=p[10],d[11]=0,d}function x(p,M){const d=M??new a(12),m=p[0],E=p[1],P=p[2],V=p[3],l=m+m,v=E+E,c=P+P,h=m*l,S=E*l,U=E*v,q=P*l,y=P*v,T=P*c,L=V*l,C=V*v,H=V*c;return d[0]=1-U-T,d[1]=S+H,d[2]=q-C,d[3]=0,d[4]=S-H,d[5]=1-h-T,d[6]=y+L,d[7]=0,d[8]=q+C,d[9]=y-L,d[10]=1-h-U,d[11]=0,d}function z(p,M){const d=M??new a(12);return d[0]=-p[0],d[1]=-p[1],d[2]=-p[2],d[4]=-p[4],d[5]=-p[5],d[6]=-p[6],d[8]=-p[8],d[9]=-p[9],d[10]=-p[10],d}function b(p,M){const d=M??new a(12);return d[0]=p[0],d[1]=p[1],d[2]=p[2],d[4]=p[4],d[5]=p[5],d[6]=p[6],d[8]=p[8],d[9]=p[9],d[10]=p[10],d}const A=b;function G(p,M){return Math.abs(p[0]-M[0])<Ge&&Math.abs(p[1]-M[1])<Ge&&Math.abs(p[2]-M[2])<Ge&&Math.abs(p[4]-M[4])<Ge&&Math.abs(p[5]-M[5])<Ge&&Math.abs(p[6]-M[6])<Ge&&Math.abs(p[8]-M[8])<Ge&&Math.abs(p[9]-M[9])<Ge&&Math.abs(p[10]-M[10])<Ge}function O(p,M){return p[0]===M[0]&&p[1]===M[1]&&p[2]===M[2]&&p[4]===M[4]&&p[5]===M[5]&&p[6]===M[6]&&p[8]===M[8]&&p[9]===M[9]&&p[10]===M[10]}function F(p){const M=p??new a(12);return M[0]=1,M[1]=0,M[2]=0,M[4]=0,M[5]=1,M[6]=0,M[8]=0,M[9]=0,M[10]=1,M}function Z(p,M){const d=M??new a(12);if(d===p){let U;return U=p[1],p[1]=p[4],p[4]=U,U=p[2],p[2]=p[8],p[8]=U,U=p[6],p[6]=p[9],p[9]=U,d}const m=p[0*4+0],E=p[0*4+1],P=p[0*4+2],V=p[1*4+0],l=p[1*4+1],v=p[1*4+2],c=p[2*4+0],h=p[2*4+1],S=p[2*4+2];return d[0]=m,d[1]=V,d[2]=c,d[4]=E,d[5]=l,d[6]=h,d[8]=P,d[9]=v,d[10]=S,d}function j(p,M){const d=M??new a(12),m=p[0*4+0],E=p[0*4+1],P=p[0*4+2],V=p[1*4+0],l=p[1*4+1],v=p[1*4+2],c=p[2*4+0],h=p[2*4+1],S=p[2*4+2],U=S*l-v*h,q=-S*V+v*c,y=h*V-l*c,T=1/(m*U+E*q+P*y);return d[0]=U*T,d[1]=(-S*E+P*h)*T,d[2]=(v*E-P*l)*T,d[4]=q*T,d[5]=(S*m-P*c)*T,d[6]=(-v*m+P*V)*T,d[8]=y*T,d[9]=(-h*m+E*c)*T,d[10]=(l*m-E*V)*T,d}function te(p){const M=p[0],d=p[0*4+1],m=p[0*4+2],E=p[1*4+0],P=p[1*4+1],V=p[1*4+2],l=p[2*4+0],v=p[2*4+1],c=p[2*4+2];return M*(P*c-v*V)-E*(d*c-v*m)+l*(d*V-P*m)}const X=j;function W(p,M,d){const m=d??new a(12),E=p[0],P=p[1],V=p[2],l=p[4],v=p[5],c=p[6],h=p[8],S=p[9],U=p[10],q=M[0],y=M[1],T=M[2],L=M[4],C=M[5],H=M[6],Q=M[8],ee=M[9],me=M[10];return m[0]=E*q+l*y+h*T,m[1]=P*q+v*y+S*T,m[2]=V*q+c*y+U*T,m[4]=E*L+l*C+h*H,m[5]=P*L+v*C+S*H,m[6]=V*L+c*C+U*H,m[8]=E*Q+l*ee+h*me,m[9]=P*Q+v*ee+S*me,m[10]=V*Q+c*ee+U*me,m}const J=W;function ue(p,M,d){const m=d??F();return p!==m&&(m[0]=p[0],m[1]=p[1],m[2]=p[2],m[4]=p[4],m[5]=p[5],m[6]=p[6]),m[8]=M[0],m[9]=M[1],m[10]=1,m}function fe(p,M){const d=M??i.create();return d[0]=p[8],d[1]=p[9],d}function Re(p,M,d){const m=d??i.create(),E=M*4;return m[0]=p[E+0],m[1]=p[E+1],m}function ke(p,M,d,m){const E=m===p?p:b(p,m),P=d*4;return E[P+0]=M[0],E[P+1]=M[1],E}function De(p,M){const d=M??i.create(),m=p[0],E=p[1],P=p[4],V=p[5];return d[0]=Math.sqrt(m*m+E*E),d[1]=Math.sqrt(P*P+V*V),d}function Ne(p,M){const d=M??o.create(),m=p[0],E=p[1],P=p[2],V=p[4],l=p[5],v=p[6],c=p[8],h=p[9],S=p[10];return d[0]=Math.sqrt(m*m+E*E+P*P),d[1]=Math.sqrt(V*V+l*l+v*v),d[2]=Math.sqrt(c*c+h*h+S*S),d}function Ie(p,M){const d=M??new a(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=p[0],d[9]=p[1],d[10]=1,d}function Fe(p,M,d){const m=d??new a(12),E=M[0],P=M[1],V=p[0],l=p[1],v=p[2],c=p[1*4+0],h=p[1*4+1],S=p[1*4+2],U=p[2*4+0],q=p[2*4+1],y=p[2*4+2];return p!==m&&(m[0]=V,m[1]=l,m[2]=v,m[4]=c,m[5]=h,m[6]=S),m[8]=V*E+c*P+U,m[9]=l*E+h*P+q,m[10]=v*E+S*P+y,m}function qe(p,M){const d=M??new a(12),m=Math.cos(p),E=Math.sin(p);return d[0]=m,d[1]=E,d[2]=0,d[4]=-E,d[5]=m,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function xe(p,M,d){const m=d??new a(12),E=p[0*4+0],P=p[0*4+1],V=p[0*4+2],l=p[1*4+0],v=p[1*4+1],c=p[1*4+2],h=Math.cos(M),S=Math.sin(M);return m[0]=h*E+S*l,m[1]=h*P+S*v,m[2]=h*V+S*c,m[4]=h*l-S*E,m[5]=h*v-S*P,m[6]=h*c-S*V,p!==m&&(m[8]=p[8],m[9]=p[9],m[10]=p[10]),m}function Le(p,M){const d=M??new a(12),m=Math.cos(p),E=Math.sin(p);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=m,d[6]=E,d[8]=0,d[9]=-E,d[10]=m,d}function Se(p,M,d){const m=d??new a(12),E=p[4],P=p[5],V=p[6],l=p[8],v=p[9],c=p[10],h=Math.cos(M),S=Math.sin(M);return m[4]=h*E+S*l,m[5]=h*P+S*v,m[6]=h*V+S*c,m[8]=h*l-S*E,m[9]=h*v-S*P,m[10]=h*c-S*V,p!==m&&(m[0]=p[0],m[1]=p[1],m[2]=p[2]),m}function Ye(p,M){const d=M??new a(12),m=Math.cos(p),E=Math.sin(p);return d[0]=m,d[1]=0,d[2]=-E,d[4]=0,d[5]=1,d[6]=0,d[8]=E,d[9]=0,d[10]=m,d}function $e(p,M,d){const m=d??new a(12),E=p[0*4+0],P=p[0*4+1],V=p[0*4+2],l=p[2*4+0],v=p[2*4+1],c=p[2*4+2],h=Math.cos(M),S=Math.sin(M);return m[0]=h*E-S*l,m[1]=h*P-S*v,m[2]=h*V-S*c,m[8]=h*l+S*E,m[9]=h*v+S*P,m[10]=h*c+S*V,p!==m&&(m[4]=p[4],m[5]=p[5],m[6]=p[6]),m}const Ve=qe,le=xe;function ye(p,M){const d=M??new a(12);return d[0]=p[0],d[1]=0,d[2]=0,d[4]=0,d[5]=p[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function se(p,M,d){const m=d??new a(12),E=M[0],P=M[1];return m[0]=E*p[0*4+0],m[1]=E*p[0*4+1],m[2]=E*p[0*4+2],m[4]=P*p[1*4+0],m[5]=P*p[1*4+1],m[6]=P*p[1*4+2],p!==m&&(m[8]=p[8],m[9]=p[9],m[10]=p[10]),m}function I(p,M){const d=M??new a(12);return d[0]=p[0],d[1]=0,d[2]=0,d[4]=0,d[5]=p[1],d[6]=0,d[8]=0,d[9]=0,d[10]=p[2],d}function ne(p,M,d){const m=d??new a(12),E=M[0],P=M[1],V=M[2];return m[0]=E*p[0*4+0],m[1]=E*p[0*4+1],m[2]=E*p[0*4+2],m[4]=P*p[1*4+0],m[5]=P*p[1*4+1],m[6]=P*p[1*4+2],m[8]=V*p[2*4+0],m[9]=V*p[2*4+1],m[10]=V*p[2*4+2],m}function Me(p,M){const d=M??new a(12);return d[0]=p,d[1]=0,d[2]=0,d[4]=0,d[5]=p,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Te(p,M,d){const m=d??new a(12);return m[0]=M*p[0*4+0],m[1]=M*p[0*4+1],m[2]=M*p[0*4+2],m[4]=M*p[1*4+0],m[5]=M*p[1*4+1],m[6]=M*p[1*4+2],p!==m&&(m[8]=p[8],m[9]=p[9],m[10]=p[10]),m}function Ce(p,M){const d=M??new a(12);return d[0]=p,d[1]=0,d[2]=0,d[4]=0,d[5]=p,d[6]=0,d[8]=0,d[9]=0,d[10]=p,d}function Ue(p,M,d){const m=d??new a(12);return m[0]=M*p[0*4+0],m[1]=M*p[0*4+1],m[2]=M*p[0*4+2],m[4]=M*p[1*4+0],m[5]=M*p[1*4+1],m[6]=M*p[1*4+2],m[8]=M*p[2*4+0],m[9]=M*p[2*4+1],m[10]=M*p[2*4+2],m}return{clone:A,create:f,set:_,fromMat4:w,fromQuat:x,negate:z,copy:b,equalsApproximately:G,equals:O,identity:F,transpose:Z,inverse:j,invert:X,determinant:te,mul:J,multiply:W,setTranslation:ue,getTranslation:fe,getAxis:Re,setAxis:ke,getScaling:De,get3DScaling:Ne,translation:Ie,translate:Fe,rotation:qe,rotate:xe,rotationX:Le,rotateX:Se,rotationY:Ye,rotateY:$e,rotationZ:Ve,rotateZ:le,scaling:ye,scale:se,uniformScaling:Me,uniformScale:Te,scaling3D:I,scale3D:ne,uniformScaling3D:Ce,uniformScale3D:Ue}}const td=new Map;function mm(a){let i=td.get(a);return i||(i=hm(a),td.set(a,i)),i}function _m(a){const i=Xa(a);function o(l,v,c,h,S,U,q,y,T,L,C,H,Q,ee,me,ze){const pe=new a(16);return l!==void 0&&(pe[0]=l,v!==void 0&&(pe[1]=v,c!==void 0&&(pe[2]=c,h!==void 0&&(pe[3]=h,S!==void 0&&(pe[4]=S,U!==void 0&&(pe[5]=U,q!==void 0&&(pe[6]=q,y!==void 0&&(pe[7]=y,T!==void 0&&(pe[8]=T,L!==void 0&&(pe[9]=L,C!==void 0&&(pe[10]=C,H!==void 0&&(pe[11]=H,Q!==void 0&&(pe[12]=Q,ee!==void 0&&(pe[13]=ee,me!==void 0&&(pe[14]=me,ze!==void 0&&(pe[15]=ze)))))))))))))))),pe}function f(l,v,c,h,S,U,q,y,T,L,C,H,Q,ee,me,ze,pe){const _e=pe??new a(16);return _e[0]=l,_e[1]=v,_e[2]=c,_e[3]=h,_e[4]=S,_e[5]=U,_e[6]=q,_e[7]=y,_e[8]=T,_e[9]=L,_e[10]=C,_e[11]=H,_e[12]=Q,_e[13]=ee,_e[14]=me,_e[15]=ze,_e}function _(l,v){const c=v??new a(16);return c[0]=l[0],c[1]=l[1],c[2]=l[2],c[3]=0,c[4]=l[4],c[5]=l[5],c[6]=l[6],c[7]=0,c[8]=l[8],c[9]=l[9],c[10]=l[10],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function w(l,v){const c=v??new a(16),h=l[0],S=l[1],U=l[2],q=l[3],y=h+h,T=S+S,L=U+U,C=h*y,H=S*y,Q=S*T,ee=U*y,me=U*T,ze=U*L,pe=q*y,_e=q*T,Oe=q*L;return c[0]=1-Q-ze,c[1]=H+Oe,c[2]=ee-_e,c[3]=0,c[4]=H-Oe,c[5]=1-C-ze,c[6]=me+pe,c[7]=0,c[8]=ee+_e,c[9]=me-pe,c[10]=1-C-Q,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function x(l,v){const c=v??new a(16);return c[0]=-l[0],c[1]=-l[1],c[2]=-l[2],c[3]=-l[3],c[4]=-l[4],c[5]=-l[5],c[6]=-l[6],c[7]=-l[7],c[8]=-l[8],c[9]=-l[9],c[10]=-l[10],c[11]=-l[11],c[12]=-l[12],c[13]=-l[13],c[14]=-l[14],c[15]=-l[15],c}function z(l,v){const c=v??new a(16);return c[0]=l[0],c[1]=l[1],c[2]=l[2],c[3]=l[3],c[4]=l[4],c[5]=l[5],c[6]=l[6],c[7]=l[7],c[8]=l[8],c[9]=l[9],c[10]=l[10],c[11]=l[11],c[12]=l[12],c[13]=l[13],c[14]=l[14],c[15]=l[15],c}const b=z;function A(l,v){return Math.abs(l[0]-v[0])<Ge&&Math.abs(l[1]-v[1])<Ge&&Math.abs(l[2]-v[2])<Ge&&Math.abs(l[3]-v[3])<Ge&&Math.abs(l[4]-v[4])<Ge&&Math.abs(l[5]-v[5])<Ge&&Math.abs(l[6]-v[6])<Ge&&Math.abs(l[7]-v[7])<Ge&&Math.abs(l[8]-v[8])<Ge&&Math.abs(l[9]-v[9])<Ge&&Math.abs(l[10]-v[10])<Ge&&Math.abs(l[11]-v[11])<Ge&&Math.abs(l[12]-v[12])<Ge&&Math.abs(l[13]-v[13])<Ge&&Math.abs(l[14]-v[14])<Ge&&Math.abs(l[15]-v[15])<Ge}function G(l,v){return l[0]===v[0]&&l[1]===v[1]&&l[2]===v[2]&&l[3]===v[3]&&l[4]===v[4]&&l[5]===v[5]&&l[6]===v[6]&&l[7]===v[7]&&l[8]===v[8]&&l[9]===v[9]&&l[10]===v[10]&&l[11]===v[11]&&l[12]===v[12]&&l[13]===v[13]&&l[14]===v[14]&&l[15]===v[15]}function O(l){const v=l??new a(16);return v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,v}function F(l,v){const c=v??new a(16);if(c===l){let Be;return Be=l[1],l[1]=l[4],l[4]=Be,Be=l[2],l[2]=l[8],l[8]=Be,Be=l[3],l[3]=l[12],l[12]=Be,Be=l[6],l[6]=l[9],l[9]=Be,Be=l[7],l[7]=l[13],l[13]=Be,Be=l[11],l[11]=l[14],l[14]=Be,c}const h=l[0*4+0],S=l[0*4+1],U=l[0*4+2],q=l[0*4+3],y=l[1*4+0],T=l[1*4+1],L=l[1*4+2],C=l[1*4+3],H=l[2*4+0],Q=l[2*4+1],ee=l[2*4+2],me=l[2*4+3],ze=l[3*4+0],pe=l[3*4+1],_e=l[3*4+2],Oe=l[3*4+3];return c[0]=h,c[1]=y,c[2]=H,c[3]=ze,c[4]=S,c[5]=T,c[6]=Q,c[7]=pe,c[8]=U,c[9]=L,c[10]=ee,c[11]=_e,c[12]=q,c[13]=C,c[14]=me,c[15]=Oe,c}function Z(l,v){const c=v??new a(16),h=l[0*4+0],S=l[0*4+1],U=l[0*4+2],q=l[0*4+3],y=l[1*4+0],T=l[1*4+1],L=l[1*4+2],C=l[1*4+3],H=l[2*4+0],Q=l[2*4+1],ee=l[2*4+2],me=l[2*4+3],ze=l[3*4+0],pe=l[3*4+1],_e=l[3*4+2],Oe=l[3*4+3],Be=ee*Oe,Ke=_e*me,ut=L*Oe,rt=_e*C,ct=L*me,pt=ee*C,ht=U*Oe,mt=_e*q,it=U*me,at=ee*q,yt=U*C,wt=L*q,xt=H*pe,St=ze*Q,Pt=y*pe,Mt=ze*T,Rt=y*Q,pn=H*T,kn=h*pe,hn=ze*S,gr=h*Q,mn=H*S,En=h*T,bn=y*S,vr=Be*T+rt*Q+ct*pe-(Ke*T+ut*Q+pt*pe),Ri=Ke*S+ht*Q+at*pe-(Be*S+mt*Q+it*pe),Li=ut*S+mt*T+yt*pe-(rt*S+ht*T+wt*pe),Ui=pt*S+it*T+wt*Q-(ct*S+at*T+yt*Q),et=1/(h*vr+y*Ri+H*Li+ze*Ui);return c[0]=et*vr,c[1]=et*Ri,c[2]=et*Li,c[3]=et*Ui,c[4]=et*(Ke*y+ut*H+pt*ze-(Be*y+rt*H+ct*ze)),c[5]=et*(Be*h+mt*H+it*ze-(Ke*h+ht*H+at*ze)),c[6]=et*(rt*h+ht*y+wt*ze-(ut*h+mt*y+yt*ze)),c[7]=et*(ct*h+at*y+yt*H-(pt*h+it*y+wt*H)),c[8]=et*(xt*C+Mt*me+Rt*Oe-(St*C+Pt*me+pn*Oe)),c[9]=et*(St*q+kn*me+mn*Oe-(xt*q+hn*me+gr*Oe)),c[10]=et*(Pt*q+hn*C+En*Oe-(Mt*q+kn*C+bn*Oe)),c[11]=et*(pn*q+gr*C+bn*me-(Rt*q+mn*C+En*me)),c[12]=et*(Pt*ee+pn*_e+St*L-(Rt*_e+xt*L+Mt*ee)),c[13]=et*(gr*_e+xt*U+hn*ee-(kn*ee+mn*_e+St*U)),c[14]=et*(kn*L+bn*_e+Mt*U-(En*_e+Pt*U+hn*L)),c[15]=et*(En*ee+Rt*U+mn*L-(gr*L+bn*ee+pn*U)),c}function j(l){const v=l[0],c=l[0*4+1],h=l[0*4+2],S=l[0*4+3],U=l[1*4+0],q=l[1*4+1],y=l[1*4+2],T=l[1*4+3],L=l[2*4+0],C=l[2*4+1],H=l[2*4+2],Q=l[2*4+3],ee=l[3*4+0],me=l[3*4+1],ze=l[3*4+2],pe=l[3*4+3],_e=H*pe,Oe=ze*Q,Be=y*pe,Ke=ze*T,ut=y*Q,rt=H*T,ct=h*pe,pt=ze*S,ht=h*Q,mt=H*S,it=h*T,at=y*S,yt=_e*q+Ke*C+ut*me-(Oe*q+Be*C+rt*me),wt=Oe*c+ct*C+mt*me-(_e*c+pt*C+ht*me),xt=Be*c+pt*q+it*me-(Ke*c+ct*q+at*me),St=rt*c+ht*q+at*C-(ut*c+mt*q+it*C);return v*yt+U*wt+L*xt+ee*St}const te=Z;function X(l,v,c){const h=c??new a(16),S=l[0],U=l[1],q=l[2],y=l[3],T=l[4],L=l[5],C=l[6],H=l[7],Q=l[8],ee=l[9],me=l[10],ze=l[11],pe=l[12],_e=l[13],Oe=l[14],Be=l[15],Ke=v[0],ut=v[1],rt=v[2],ct=v[3],pt=v[4],ht=v[5],mt=v[6],it=v[7],at=v[8],yt=v[9],wt=v[10],xt=v[11],St=v[12],Pt=v[13],Mt=v[14],Rt=v[15];return h[0]=S*Ke+T*ut+Q*rt+pe*ct,h[1]=U*Ke+L*ut+ee*rt+_e*ct,h[2]=q*Ke+C*ut+me*rt+Oe*ct,h[3]=y*Ke+H*ut+ze*rt+Be*ct,h[4]=S*pt+T*ht+Q*mt+pe*it,h[5]=U*pt+L*ht+ee*mt+_e*it,h[6]=q*pt+C*ht+me*mt+Oe*it,h[7]=y*pt+H*ht+ze*mt+Be*it,h[8]=S*at+T*yt+Q*wt+pe*xt,h[9]=U*at+L*yt+ee*wt+_e*xt,h[10]=q*at+C*yt+me*wt+Oe*xt,h[11]=y*at+H*yt+ze*wt+Be*xt,h[12]=S*St+T*Pt+Q*Mt+pe*Rt,h[13]=U*St+L*Pt+ee*Mt+_e*Rt,h[14]=q*St+C*Pt+me*Mt+Oe*Rt,h[15]=y*St+H*Pt+ze*Mt+Be*Rt,h}const W=X;function J(l,v,c){const h=c??O();return l!==h&&(h[0]=l[0],h[1]=l[1],h[2]=l[2],h[3]=l[3],h[4]=l[4],h[5]=l[5],h[6]=l[6],h[7]=l[7],h[8]=l[8],h[9]=l[9],h[10]=l[10],h[11]=l[11]),h[12]=v[0],h[13]=v[1],h[14]=v[2],h[15]=1,h}function ue(l,v){const c=v??i.create();return c[0]=l[12],c[1]=l[13],c[2]=l[14],c}function fe(l,v,c){const h=c??i.create(),S=v*4;return h[0]=l[S+0],h[1]=l[S+1],h[2]=l[S+2],h}function Re(l,v,c,h){const S=h===l?h:z(l,h),U=c*4;return S[U+0]=v[0],S[U+1]=v[1],S[U+2]=v[2],S}function ke(l,v){const c=v??i.create(),h=l[0],S=l[1],U=l[2],q=l[4],y=l[5],T=l[6],L=l[8],C=l[9],H=l[10];return c[0]=Math.sqrt(h*h+S*S+U*U),c[1]=Math.sqrt(q*q+y*y+T*T),c[2]=Math.sqrt(L*L+C*C+H*H),c}function De(l,v,c,h,S){const U=S??new a(16),q=Math.tan(Math.PI*.5-.5*l);if(U[0]=q/v,U[1]=0,U[2]=0,U[3]=0,U[4]=0,U[5]=q,U[6]=0,U[7]=0,U[8]=0,U[9]=0,U[11]=-1,U[12]=0,U[13]=0,U[15]=0,Number.isFinite(h)){const y=1/(c-h);U[10]=h*y,U[14]=h*c*y}else U[10]=-1,U[14]=-c;return U}function Ne(l,v,c,h=1/0,S){const U=S??new a(16),q=1/Math.tan(l*.5);if(U[0]=q/v,U[1]=0,U[2]=0,U[3]=0,U[4]=0,U[5]=q,U[6]=0,U[7]=0,U[8]=0,U[9]=0,U[11]=-1,U[12]=0,U[13]=0,U[15]=0,h===1/0)U[10]=0,U[14]=c;else{const y=1/(h-c);U[10]=c*y,U[14]=h*c*y}return U}function Ie(l,v,c,h,S,U,q){const y=q??new a(16);return y[0]=2/(v-l),y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2/(h-c),y[6]=0,y[7]=0,y[8]=0,y[9]=0,y[10]=1/(S-U),y[11]=0,y[12]=(v+l)/(l-v),y[13]=(h+c)/(c-h),y[14]=S/(S-U),y[15]=1,y}function Fe(l,v,c,h,S,U,q){const y=q??new a(16),T=v-l,L=h-c,C=S-U;return y[0]=2*S/T,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*S/L,y[6]=0,y[7]=0,y[8]=(l+v)/T,y[9]=(h+c)/L,y[10]=U/C,y[11]=-1,y[12]=0,y[13]=0,y[14]=S*U/C,y[15]=0,y}function qe(l,v,c,h,S,U=1/0,q){const y=q??new a(16),T=v-l,L=h-c;if(y[0]=2*S/T,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*S/L,y[6]=0,y[7]=0,y[8]=(l+v)/T,y[9]=(h+c)/L,y[11]=-1,y[12]=0,y[13]=0,y[15]=0,U===1/0)y[10]=0,y[14]=S;else{const C=1/(U-S);y[10]=S*C,y[14]=U*S*C}return y}const xe=i.create(),Le=i.create(),Se=i.create();function Ye(l,v,c,h){const S=h??new a(16);return i.normalize(i.subtract(v,l,Se),Se),i.normalize(i.cross(c,Se,xe),xe),i.normalize(i.cross(Se,xe,Le),Le),S[0]=xe[0],S[1]=xe[1],S[2]=xe[2],S[3]=0,S[4]=Le[0],S[5]=Le[1],S[6]=Le[2],S[7]=0,S[8]=Se[0],S[9]=Se[1],S[10]=Se[2],S[11]=0,S[12]=l[0],S[13]=l[1],S[14]=l[2],S[15]=1,S}function $e(l,v,c,h){const S=h??new a(16);return i.normalize(i.subtract(l,v,Se),Se),i.normalize(i.cross(c,Se,xe),xe),i.normalize(i.cross(Se,xe,Le),Le),S[0]=xe[0],S[1]=xe[1],S[2]=xe[2],S[3]=0,S[4]=Le[0],S[5]=Le[1],S[6]=Le[2],S[7]=0,S[8]=Se[0],S[9]=Se[1],S[10]=Se[2],S[11]=0,S[12]=l[0],S[13]=l[1],S[14]=l[2],S[15]=1,S}function Ve(l,v,c,h){const S=h??new a(16);return i.normalize(i.subtract(l,v,Se),Se),i.normalize(i.cross(c,Se,xe),xe),i.normalize(i.cross(Se,xe,Le),Le),S[0]=xe[0],S[1]=Le[0],S[2]=Se[0],S[3]=0,S[4]=xe[1],S[5]=Le[1],S[6]=Se[1],S[7]=0,S[8]=xe[2],S[9]=Le[2],S[10]=Se[2],S[11]=0,S[12]=-(xe[0]*l[0]+xe[1]*l[1]+xe[2]*l[2]),S[13]=-(Le[0]*l[0]+Le[1]*l[1]+Le[2]*l[2]),S[14]=-(Se[0]*l[0]+Se[1]*l[1]+Se[2]*l[2]),S[15]=1,S}function le(l,v){const c=v??new a(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=l[0],c[13]=l[1],c[14]=l[2],c[15]=1,c}function ye(l,v,c){const h=c??new a(16),S=v[0],U=v[1],q=v[2],y=l[0],T=l[1],L=l[2],C=l[3],H=l[1*4+0],Q=l[1*4+1],ee=l[1*4+2],me=l[1*4+3],ze=l[2*4+0],pe=l[2*4+1],_e=l[2*4+2],Oe=l[2*4+3],Be=l[3*4+0],Ke=l[3*4+1],ut=l[3*4+2],rt=l[3*4+3];return l!==h&&(h[0]=y,h[1]=T,h[2]=L,h[3]=C,h[4]=H,h[5]=Q,h[6]=ee,h[7]=me,h[8]=ze,h[9]=pe,h[10]=_e,h[11]=Oe),h[12]=y*S+H*U+ze*q+Be,h[13]=T*S+Q*U+pe*q+Ke,h[14]=L*S+ee*U+_e*q+ut,h[15]=C*S+me*U+Oe*q+rt,h}function se(l,v){const c=v??new a(16),h=Math.cos(l),S=Math.sin(l);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=h,c[6]=S,c[7]=0,c[8]=0,c[9]=-S,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function I(l,v,c){const h=c??new a(16),S=l[4],U=l[5],q=l[6],y=l[7],T=l[8],L=l[9],C=l[10],H=l[11],Q=Math.cos(v),ee=Math.sin(v);return h[4]=Q*S+ee*T,h[5]=Q*U+ee*L,h[6]=Q*q+ee*C,h[7]=Q*y+ee*H,h[8]=Q*T-ee*S,h[9]=Q*L-ee*U,h[10]=Q*C-ee*q,h[11]=Q*H-ee*y,l!==h&&(h[0]=l[0],h[1]=l[1],h[2]=l[2],h[3]=l[3],h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}function ne(l,v){const c=v??new a(16),h=Math.cos(l),S=Math.sin(l);return c[0]=h,c[1]=0,c[2]=-S,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=S,c[9]=0,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Me(l,v,c){const h=c??new a(16),S=l[0*4+0],U=l[0*4+1],q=l[0*4+2],y=l[0*4+3],T=l[2*4+0],L=l[2*4+1],C=l[2*4+2],H=l[2*4+3],Q=Math.cos(v),ee=Math.sin(v);return h[0]=Q*S-ee*T,h[1]=Q*U-ee*L,h[2]=Q*q-ee*C,h[3]=Q*y-ee*H,h[8]=Q*T+ee*S,h[9]=Q*L+ee*U,h[10]=Q*C+ee*q,h[11]=Q*H+ee*y,l!==h&&(h[4]=l[4],h[5]=l[5],h[6]=l[6],h[7]=l[7],h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}function Te(l,v){const c=v??new a(16),h=Math.cos(l),S=Math.sin(l);return c[0]=h,c[1]=S,c[2]=0,c[3]=0,c[4]=-S,c[5]=h,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Ce(l,v,c){const h=c??new a(16),S=l[0*4+0],U=l[0*4+1],q=l[0*4+2],y=l[0*4+3],T=l[1*4+0],L=l[1*4+1],C=l[1*4+2],H=l[1*4+3],Q=Math.cos(v),ee=Math.sin(v);return h[0]=Q*S+ee*T,h[1]=Q*U+ee*L,h[2]=Q*q+ee*C,h[3]=Q*y+ee*H,h[4]=Q*T-ee*S,h[5]=Q*L-ee*U,h[6]=Q*C-ee*q,h[7]=Q*H-ee*y,l!==h&&(h[8]=l[8],h[9]=l[9],h[10]=l[10],h[11]=l[11],h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}function Ue(l,v,c){const h=c??new a(16);let S=l[0],U=l[1],q=l[2];const y=Math.sqrt(S*S+U*U+q*q);S/=y,U/=y,q/=y;const T=S*S,L=U*U,C=q*q,H=Math.cos(v),Q=Math.sin(v),ee=1-H;return h[0]=T+(1-T)*H,h[1]=S*U*ee+q*Q,h[2]=S*q*ee-U*Q,h[3]=0,h[4]=S*U*ee-q*Q,h[5]=L+(1-L)*H,h[6]=U*q*ee+S*Q,h[7]=0,h[8]=S*q*ee+U*Q,h[9]=U*q*ee-S*Q,h[10]=C+(1-C)*H,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const p=Ue;function M(l,v,c,h){const S=h??new a(16);let U=v[0],q=v[1],y=v[2];const T=Math.sqrt(U*U+q*q+y*y);U/=T,q/=T,y/=T;const L=U*U,C=q*q,H=y*y,Q=Math.cos(c),ee=Math.sin(c),me=1-Q,ze=L+(1-L)*Q,pe=U*q*me+y*ee,_e=U*y*me-q*ee,Oe=U*q*me-y*ee,Be=C+(1-C)*Q,Ke=q*y*me+U*ee,ut=U*y*me+q*ee,rt=q*y*me-U*ee,ct=H+(1-H)*Q,pt=l[0],ht=l[1],mt=l[2],it=l[3],at=l[4],yt=l[5],wt=l[6],xt=l[7],St=l[8],Pt=l[9],Mt=l[10],Rt=l[11];return S[0]=ze*pt+pe*at+_e*St,S[1]=ze*ht+pe*yt+_e*Pt,S[2]=ze*mt+pe*wt+_e*Mt,S[3]=ze*it+pe*xt+_e*Rt,S[4]=Oe*pt+Be*at+Ke*St,S[5]=Oe*ht+Be*yt+Ke*Pt,S[6]=Oe*mt+Be*wt+Ke*Mt,S[7]=Oe*it+Be*xt+Ke*Rt,S[8]=ut*pt+rt*at+ct*St,S[9]=ut*ht+rt*yt+ct*Pt,S[10]=ut*mt+rt*wt+ct*Mt,S[11]=ut*it+rt*xt+ct*Rt,l!==S&&(S[12]=l[12],S[13]=l[13],S[14]=l[14],S[15]=l[15]),S}const d=M;function m(l,v){const c=v??new a(16);return c[0]=l[0],c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=l[1],c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=l[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function E(l,v,c){const h=c??new a(16),S=v[0],U=v[1],q=v[2];return h[0]=S*l[0*4+0],h[1]=S*l[0*4+1],h[2]=S*l[0*4+2],h[3]=S*l[0*4+3],h[4]=U*l[1*4+0],h[5]=U*l[1*4+1],h[6]=U*l[1*4+2],h[7]=U*l[1*4+3],h[8]=q*l[2*4+0],h[9]=q*l[2*4+1],h[10]=q*l[2*4+2],h[11]=q*l[2*4+3],l!==h&&(h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}function P(l,v){const c=v??new a(16);return c[0]=l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=l,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=l,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function V(l,v,c){const h=c??new a(16);return h[0]=v*l[0*4+0],h[1]=v*l[0*4+1],h[2]=v*l[0*4+2],h[3]=v*l[0*4+3],h[4]=v*l[1*4+0],h[5]=v*l[1*4+1],h[6]=v*l[1*4+2],h[7]=v*l[1*4+3],h[8]=v*l[2*4+0],h[9]=v*l[2*4+1],h[10]=v*l[2*4+2],h[11]=v*l[2*4+3],l!==h&&(h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}return{create:o,set:f,fromMat3:_,fromQuat:w,negate:x,copy:z,clone:b,equalsApproximately:A,equals:G,identity:O,transpose:F,inverse:Z,determinant:j,invert:te,multiply:X,mul:W,setTranslation:J,getTranslation:ue,getAxis:fe,setAxis:Re,getScaling:ke,perspective:De,perspectiveReverseZ:Ne,ortho:Ie,frustum:Fe,frustumReverseZ:qe,aim:Ye,cameraAim:$e,lookAt:Ve,translation:le,translate:ye,rotationX:se,rotateX:I,rotationY:ne,rotateY:Me,rotationZ:Te,rotateZ:Ce,axisRotation:Ue,rotation:p,axisRotate:M,rotate:d,scaling:m,scale:E,uniformScaling:P,uniformScale:V}}const nd=new Map;function gm(a){let i=nd.get(a);return i||(i=_m(a),nd.set(a,i)),i}function vm(a){const i=Xa(a);function o(p,M,d,m){const E=new a(4);return p!==void 0&&(E[0]=p,M!==void 0&&(E[1]=M,d!==void 0&&(E[2]=d,m!==void 0&&(E[3]=m)))),E}const f=o;function _(p,M,d,m,E){const P=E??new a(4);return P[0]=p,P[1]=M,P[2]=d,P[3]=m,P}function w(p,M,d){const m=d??new a(4),E=M*.5,P=Math.sin(E);return m[0]=P*p[0],m[1]=P*p[1],m[2]=P*p[2],m[3]=Math.cos(E),m}function x(p,M){const d=M??i.create(3),m=Math.acos(p[3])*2,E=Math.sin(m*.5);return E>Ge?(d[0]=p[0]/E,d[1]=p[1]/E,d[2]=p[2]/E):(d[0]=1,d[1]=0,d[2]=0),{angle:m,axis:d}}function z(p,M){const d=Fe(p,M);return Math.acos(2*d*d-1)}function b(p,M,d){const m=d??new a(4),E=p[0],P=p[1],V=p[2],l=p[3],v=M[0],c=M[1],h=M[2],S=M[3];return m[0]=E*S+l*v+P*h-V*c,m[1]=P*S+l*c+V*v-E*h,m[2]=V*S+l*h+E*c-P*v,m[3]=l*S-E*v-P*c-V*h,m}const A=b;function G(p,M,d){const m=d??new a(4),E=M*.5,P=p[0],V=p[1],l=p[2],v=p[3],c=Math.sin(E),h=Math.cos(E);return m[0]=P*h+v*c,m[1]=V*h+l*c,m[2]=l*h-V*c,m[3]=v*h-P*c,m}function O(p,M,d){const m=d??new a(4),E=M*.5,P=p[0],V=p[1],l=p[2],v=p[3],c=Math.sin(E),h=Math.cos(E);return m[0]=P*h-l*c,m[1]=V*h+v*c,m[2]=l*h+P*c,m[3]=v*h-V*c,m}function F(p,M,d){const m=d??new a(4),E=M*.5,P=p[0],V=p[1],l=p[2],v=p[3],c=Math.sin(E),h=Math.cos(E);return m[0]=P*h+V*c,m[1]=V*h-P*c,m[2]=l*h+v*c,m[3]=v*h-l*c,m}function Z(p,M,d,m){const E=m??new a(4),P=p[0],V=p[1],l=p[2],v=p[3];let c=M[0],h=M[1],S=M[2],U=M[3],q=P*c+V*h+l*S+v*U;q<0&&(q=-q,c=-c,h=-h,S=-S,U=-U);let y,T;if(1-q>Ge){const L=Math.acos(q),C=Math.sin(L);y=Math.sin((1-d)*L)/C,T=Math.sin(d*L)/C}else y=1-d,T=d;return E[0]=y*P+T*c,E[1]=y*V+T*h,E[2]=y*l+T*S,E[3]=y*v+T*U,E}function j(p,M){const d=M??new a(4),m=p[0],E=p[1],P=p[2],V=p[3],l=m*m+E*E+P*P+V*V,v=l?1/l:0;return d[0]=-m*v,d[1]=-E*v,d[2]=-P*v,d[3]=V*v,d}function te(p,M){const d=M??new a(4);return d[0]=-p[0],d[1]=-p[1],d[2]=-p[2],d[3]=p[3],d}function X(p,M){const d=M??new a(4),m=p[0]+p[5]+p[10];if(m>0){const E=Math.sqrt(m+1);d[3]=.5*E;const P=.5/E;d[0]=(p[6]-p[9])*P,d[1]=(p[8]-p[2])*P,d[2]=(p[1]-p[4])*P}else{let E=0;p[5]>p[0]&&(E=1),p[10]>p[E*4+E]&&(E=2);const P=(E+1)%3,V=(E+2)%3,l=Math.sqrt(p[E*4+E]-p[P*4+P]-p[V*4+V]+1);d[E]=.5*l;const v=.5/l;d[3]=(p[P*4+V]-p[V*4+P])*v,d[P]=(p[P*4+E]+p[E*4+P])*v,d[V]=(p[V*4+E]+p[E*4+V])*v}return d}function W(p,M,d,m,E){const P=E??new a(4),V=p*.5,l=M*.5,v=d*.5,c=Math.sin(V),h=Math.cos(V),S=Math.sin(l),U=Math.cos(l),q=Math.sin(v),y=Math.cos(v);switch(m){case"xyz":P[0]=c*U*y+h*S*q,P[1]=h*S*y-c*U*q,P[2]=h*U*q+c*S*y,P[3]=h*U*y-c*S*q;break;case"xzy":P[0]=c*U*y-h*S*q,P[1]=h*S*y-c*U*q,P[2]=h*U*q+c*S*y,P[3]=h*U*y+c*S*q;break;case"yxz":P[0]=c*U*y+h*S*q,P[1]=h*S*y-c*U*q,P[2]=h*U*q-c*S*y,P[3]=h*U*y+c*S*q;break;case"yzx":P[0]=c*U*y+h*S*q,P[1]=h*S*y+c*U*q,P[2]=h*U*q-c*S*y,P[3]=h*U*y-c*S*q;break;case"zxy":P[0]=c*U*y-h*S*q,P[1]=h*S*y+c*U*q,P[2]=h*U*q+c*S*y,P[3]=h*U*y-c*S*q;break;case"zyx":P[0]=c*U*y-h*S*q,P[1]=h*S*y+c*U*q,P[2]=h*U*q-c*S*y,P[3]=h*U*y+c*S*q;break;default:throw new Error(`Unknown rotation order: ${m}`)}return P}function J(p,M){const d=M??new a(4);return d[0]=p[0],d[1]=p[1],d[2]=p[2],d[3]=p[3],d}const ue=J;function fe(p,M,d){const m=d??new a(4);return m[0]=p[0]+M[0],m[1]=p[1]+M[1],m[2]=p[2]+M[2],m[3]=p[3]+M[3],m}function Re(p,M,d){const m=d??new a(4);return m[0]=p[0]-M[0],m[1]=p[1]-M[1],m[2]=p[2]-M[2],m[3]=p[3]-M[3],m}const ke=Re;function De(p,M,d){const m=d??new a(4);return m[0]=p[0]*M,m[1]=p[1]*M,m[2]=p[2]*M,m[3]=p[3]*M,m}const Ne=De;function Ie(p,M,d){const m=d??new a(4);return m[0]=p[0]/M,m[1]=p[1]/M,m[2]=p[2]/M,m[3]=p[3]/M,m}function Fe(p,M){return p[0]*M[0]+p[1]*M[1]+p[2]*M[2]+p[3]*M[3]}function qe(p,M,d,m){const E=m??new a(4);return E[0]=p[0]+d*(M[0]-p[0]),E[1]=p[1]+d*(M[1]-p[1]),E[2]=p[2]+d*(M[2]-p[2]),E[3]=p[3]+d*(M[3]-p[3]),E}function xe(p){const M=p[0],d=p[1],m=p[2],E=p[3];return Math.sqrt(M*M+d*d+m*m+E*E)}const Le=xe;function Se(p){const M=p[0],d=p[1],m=p[2],E=p[3];return M*M+d*d+m*m+E*E}const Ye=Se;function $e(p,M){const d=M??new a(4),m=p[0],E=p[1],P=p[2],V=p[3],l=Math.sqrt(m*m+E*E+P*P+V*V);return l>1e-5?(d[0]=m/l,d[1]=E/l,d[2]=P/l,d[3]=V/l):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function Ve(p,M){return Math.abs(p[0]-M[0])<Ge&&Math.abs(p[1]-M[1])<Ge&&Math.abs(p[2]-M[2])<Ge&&Math.abs(p[3]-M[3])<Ge}function le(p,M){return p[0]===M[0]&&p[1]===M[1]&&p[2]===M[2]&&p[3]===M[3]}function ye(p){const M=p??new a(4);return M[0]=0,M[1]=0,M[2]=0,M[3]=1,M}const se=i.create(),I=i.create(),ne=i.create();function Me(p,M,d){const m=d??new a(4),E=i.dot(p,M);return E<-.999999?(i.cross(I,p,se),i.len(se)<1e-6&&i.cross(ne,p,se),i.normalize(se,se),w(se,Math.PI,m),m):E>.999999?(m[0]=0,m[1]=0,m[2]=0,m[3]=1,m):(i.cross(p,M,se),m[0]=se[0],m[1]=se[1],m[2]=se[2],m[3]=1+E,$e(m,m))}const Te=new a(4),Ce=new a(4);function Ue(p,M,d,m,E,P){const V=P??new a(4);return Z(p,m,E,Te),Z(M,d,E,Ce),Z(Te,Ce,2*E*(1-E),V),V}return{create:o,fromValues:f,set:_,fromAxisAngle:w,toAxisAngle:x,angle:z,multiply:b,mul:A,rotateX:G,rotateY:O,rotateZ:F,slerp:Z,inverse:j,conjugate:te,fromMat:X,fromEuler:W,copy:J,clone:ue,add:fe,subtract:Re,sub:ke,mulScalar:De,scale:Ne,divScalar:Ie,dot:Fe,lerp:qe,length:xe,len:Le,lengthSq:Se,lenSq:Ye,normalize:$e,equalsApproximately:Ve,equals:le,identity:ye,rotationTo:Me,sqlerp:Ue}}const rd=new Map;function ym(a){let i=rd.get(a);return i||(i=vm(a),rd.set(a,i)),i}function wm(a){function i(d,m,E,P){const V=new a(4);return d!==void 0&&(V[0]=d,m!==void 0&&(V[1]=m,E!==void 0&&(V[2]=E,P!==void 0&&(V[3]=P)))),V}const o=i;function f(d,m,E,P,V){const l=V??new a(4);return l[0]=d,l[1]=m,l[2]=E,l[3]=P,l}function _(d,m){const E=m??new a(4);return E[0]=Math.ceil(d[0]),E[1]=Math.ceil(d[1]),E[2]=Math.ceil(d[2]),E[3]=Math.ceil(d[3]),E}function w(d,m){const E=m??new a(4);return E[0]=Math.floor(d[0]),E[1]=Math.floor(d[1]),E[2]=Math.floor(d[2]),E[3]=Math.floor(d[3]),E}function x(d,m){const E=m??new a(4);return E[0]=Math.round(d[0]),E[1]=Math.round(d[1]),E[2]=Math.round(d[2]),E[3]=Math.round(d[3]),E}function z(d,m=0,E=1,P){const V=P??new a(4);return V[0]=Math.min(E,Math.max(m,d[0])),V[1]=Math.min(E,Math.max(m,d[1])),V[2]=Math.min(E,Math.max(m,d[2])),V[3]=Math.min(E,Math.max(m,d[3])),V}function b(d,m,E){const P=E??new a(4);return P[0]=d[0]+m[0],P[1]=d[1]+m[1],P[2]=d[2]+m[2],P[3]=d[3]+m[3],P}function A(d,m,E,P){const V=P??new a(4);return V[0]=d[0]+m[0]*E,V[1]=d[1]+m[1]*E,V[2]=d[2]+m[2]*E,V[3]=d[3]+m[3]*E,V}function G(d,m,E){const P=E??new a(4);return P[0]=d[0]-m[0],P[1]=d[1]-m[1],P[2]=d[2]-m[2],P[3]=d[3]-m[3],P}const O=G;function F(d,m){return Math.abs(d[0]-m[0])<Ge&&Math.abs(d[1]-m[1])<Ge&&Math.abs(d[2]-m[2])<Ge&&Math.abs(d[3]-m[3])<Ge}function Z(d,m){return d[0]===m[0]&&d[1]===m[1]&&d[2]===m[2]&&d[3]===m[3]}function j(d,m,E,P){const V=P??new a(4);return V[0]=d[0]+E*(m[0]-d[0]),V[1]=d[1]+E*(m[1]-d[1]),V[2]=d[2]+E*(m[2]-d[2]),V[3]=d[3]+E*(m[3]-d[3]),V}function te(d,m,E,P){const V=P??new a(4);return V[0]=d[0]+E[0]*(m[0]-d[0]),V[1]=d[1]+E[1]*(m[1]-d[1]),V[2]=d[2]+E[2]*(m[2]-d[2]),V[3]=d[3]+E[3]*(m[3]-d[3]),V}function X(d,m,E){const P=E??new a(4);return P[0]=Math.max(d[0],m[0]),P[1]=Math.max(d[1],m[1]),P[2]=Math.max(d[2],m[2]),P[3]=Math.max(d[3],m[3]),P}function W(d,m,E){const P=E??new a(4);return P[0]=Math.min(d[0],m[0]),P[1]=Math.min(d[1],m[1]),P[2]=Math.min(d[2],m[2]),P[3]=Math.min(d[3],m[3]),P}function J(d,m,E){const P=E??new a(4);return P[0]=d[0]*m,P[1]=d[1]*m,P[2]=d[2]*m,P[3]=d[3]*m,P}const ue=J;function fe(d,m,E){const P=E??new a(4);return P[0]=d[0]/m,P[1]=d[1]/m,P[2]=d[2]/m,P[3]=d[3]/m,P}function Re(d,m){const E=m??new a(4);return E[0]=1/d[0],E[1]=1/d[1],E[2]=1/d[2],E[3]=1/d[3],E}const ke=Re;function De(d,m){return d[0]*m[0]+d[1]*m[1]+d[2]*m[2]+d[3]*m[3]}function Ne(d){const m=d[0],E=d[1],P=d[2],V=d[3];return Math.sqrt(m*m+E*E+P*P+V*V)}const Ie=Ne;function Fe(d){const m=d[0],E=d[1],P=d[2],V=d[3];return m*m+E*E+P*P+V*V}const qe=Fe;function xe(d,m){const E=d[0]-m[0],P=d[1]-m[1],V=d[2]-m[2],l=d[3]-m[3];return Math.sqrt(E*E+P*P+V*V+l*l)}const Le=xe;function Se(d,m){const E=d[0]-m[0],P=d[1]-m[1],V=d[2]-m[2],l=d[3]-m[3];return E*E+P*P+V*V+l*l}const Ye=Se;function $e(d,m){const E=m??new a(4),P=d[0],V=d[1],l=d[2],v=d[3],c=Math.sqrt(P*P+V*V+l*l+v*v);return c>1e-5?(E[0]=P/c,E[1]=V/c,E[2]=l/c,E[3]=v/c):(E[0]=0,E[1]=0,E[2]=0,E[3]=0),E}function Ve(d,m){const E=m??new a(4);return E[0]=-d[0],E[1]=-d[1],E[2]=-d[2],E[3]=-d[3],E}function le(d,m){const E=m??new a(4);return E[0]=d[0],E[1]=d[1],E[2]=d[2],E[3]=d[3],E}const ye=le;function se(d,m,E){const P=E??new a(4);return P[0]=d[0]*m[0],P[1]=d[1]*m[1],P[2]=d[2]*m[2],P[3]=d[3]*m[3],P}const I=se;function ne(d,m,E){const P=E??new a(4);return P[0]=d[0]/m[0],P[1]=d[1]/m[1],P[2]=d[2]/m[2],P[3]=d[3]/m[3],P}const Me=ne;function Te(d){const m=d??new a(4);return m[0]=0,m[1]=0,m[2]=0,m[3]=0,m}function Ce(d,m,E){const P=E??new a(4),V=d[0],l=d[1],v=d[2],c=d[3];return P[0]=m[0]*V+m[4]*l+m[8]*v+m[12]*c,P[1]=m[1]*V+m[5]*l+m[9]*v+m[13]*c,P[2]=m[2]*V+m[6]*l+m[10]*v+m[14]*c,P[3]=m[3]*V+m[7]*l+m[11]*v+m[15]*c,P}function Ue(d,m,E){const P=E??new a(4);return $e(d,P),J(P,m,P)}function p(d,m,E){const P=E??new a(4);return Ne(d)>m?Ue(d,m,P):le(d,P)}function M(d,m,E){const P=E??new a(4);return j(d,m,.5,P)}return{create:i,fromValues:o,set:f,ceil:_,floor:w,round:x,clamp:z,add:b,addScaled:A,subtract:G,sub:O,equalsApproximately:F,equals:Z,lerp:j,lerpV:te,max:X,min:W,mulScalar:J,scale:ue,divScalar:fe,inverse:Re,invert:ke,dot:De,length:Ne,len:Ie,lengthSq:Fe,lenSq:qe,distance:xe,dist:Le,distanceSq:Se,distSq:Ye,normalize:$e,negate:Ve,copy:le,clone:ye,multiply:se,mul:I,divide:ne,div:Me,zero:Te,transformMat4:Ce,setLength:Ue,truncate:p,midpoint:M}}const id=new Map;function xm(a){let i=id.get(a);return i||(i=wm(a),id.set(a,i)),i}function al(a,i,o,f,_,w){return{mat3:mm(a),mat4:gm(i),quat:ym(o),vec2:Ud(f),vec3:Xa(_),vec4:xm(w)}}const{mat3:W_,mat4:Kt,quat:V_,vec2:Nt,vec3:It,vec4:mr}=al(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);al(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);al(dm,Array,Array,Array,Array,Array);const Sm=new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]);class Tm{constructor(i,o){K(this,"device");K(this,"presentFormat");K(this,"quit",!1);K(this,"pipeline");K(this,"vertexBuffer");K(this,"indexBuffer");K(this,"indexCount");K(this,"projViewModelBuffer");K(this,"projViewModelBindGroup");K(this,"supportedFeatures");this.device=i,this.presentFormat=o,this.supportedFeatures=i.features;const f=this.device.createShaderModule({code:um}),_=new Float32Array([-1,-1,-1,1,0,0,0,1,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,-1,1,-1,1,0,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1]),w=new Uint32Array([0,1,2,0,2,3,1,5,6,1,6,2,2,6,7,2,7,3,4,7,6,4,6,5,0,3,7,0,7,4,0,4,5,0,5,1]);this.indexCount=w.length,this.vertexBuffer=this.device.createBuffer({size:_.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,_,0,_.length);const x=[{attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}],arrayStride:2*16,stepMode:"vertex"}];this.indexBuffer=this.device.createBuffer({size:w.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,w,0,w.length);const z=16*4;this.projViewModelBuffer=this.device.createBuffer({size:z,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const b=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.projViewModelBindGroup=this.device.createBindGroup({layout:b,entries:[{binding:0,resource:{buffer:this.projViewModelBuffer}}]});const A={vertex:{module:f,entryPoint:"vertex_main",buffers:x},fragment:{module:f,entryPoint:"fragment_main",targets:[{format:this.presentFormat}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},layout:this.device.createPipelineLayout({bindGroupLayouts:[b]})};this.pipeline=this.device.createRenderPipeline(A)}setupUI(i){Sm.forEach(o=>{const f=this.supportedFeatures.has(o);i.add({enabled:f},"enabled").name(o).disable(!0)})}draw(i,o,f){const _=i.createView(),w=60*Math.PI/180,b=Kt.perspective(w,o,.1,1e3),A=[3,5,10],G=[0,0,0],O=[0,1,0],F=Kt.lookAt(A,G,O),Z=Kt.axisRotation([1,1,0],f/1e3),j=Kt.mul(b,Kt.mul(F,Z));this.device.queue.writeBuffer(this.projViewModelBuffer,0,j,0,j.length);const te=this.device.createCommandEncoder(),X={r:.5,g:.5,b:.5,a:0},W=te.beginRenderPass({colorAttachments:[{clearValue:X,loadOp:"clear",storeOp:"store",view:_}]});W.setPipeline(this.pipeline),W.setVertexBuffer(0,this.vertexBuffer),W.setIndexBuffer(this.indexBuffer,"uint32",0,this.indexBuffer.size),W.setBindGroup(0,this.projViewModelBindGroup),W.drawIndexed(this.indexCount,1,0,0,0),W.end(),this.device.queue.submit([te.finish()])}}const Em=(a,i,o)=>new Tm(a,i),Cd=4;class Pi{constructor(i,o,f){K(this,"buffer");this.buffer=i.createBuffer({size:o*Cd,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM,label:f})}writeToGPU(i){const o=this.packed();o.byteLength!=this.buffer.size&&console.warn(`GPUBuffer label: '${this.buffer.label}' uploaded with improper size. Expected: ${this.buffer.size} bytes, got ${o.byteLength} bytes.`),i.writeBuffer(this.buffer,0,o)}}function bm(){return{rayleighMm:{scattering:It.create(5.802,13.558,33.1),absorption:It.create(0,0,0),densityScale:.008},mieMm:{scattering:It.create(3.996,3.996,3.996),absorption:It.create(4.4,4.4,4.4),densityScale:.0012},ozoneMm:{scattering:It.create(0,0,0),absorption:It.create(.65,1.881,.085)},planetRadiusMm:6.36,atmosphereRadiusMm:6.42,groundAlbedo:It.create(.3*1,.3*.75,.3*.4)}}function Mm(){return{color:It.create(1,1,1),strength:60,forward:It.create(0,-1,0),angularRadius:16/60*(3.141592653589793/180)}}const Dm=16,zm=128,Am=16,Pm=32,Rm=16,Lm=256,Um=16,Cm=16;function km(a,i){return Math.ceil(i/a)*a}const Im=Math.max(Dm,Am,Rm,Um),Fm=km(Im,zm+Pm+Lm+Cm);class Om extends Pi{constructor(o){super(o,Fm/Cd,"Global UBO");K(this,"data",{atmosphere:bm(),light:Mm(),camera:{invProj:Kt.identity(),invView:Kt.identity(),projView:Kt.identity(),position:mr.create(0,0,0,1),forward:mr.create(0,0,-1,0)},time:{timeSeconds:0}})}packed(){const o=new Float32Array(3).fill(0),f=new Float32Array(4).fill(0),_=new Float32Array(4*2).fill(0),w=this.data.atmosphere,x=w.rayleighMm,z=w.mieMm,b=new Float32Array([...x.scattering,x.densityScale,...x.absorption,w.planetRadiusMm,...z.scattering,z.densityScale,...z.absorption,w.atmosphereRadiusMm,...w.groundAlbedo,0,...w.ozoneMm.scattering,0,...w.ozoneMm.absorption,0,...f]),A=this.data.light,G=new Float32Array([...A.color,A.strength,...A.forward,A.angularRadius]),O=this.data.camera,F=new Float32Array([...O.invProj,...O.invView,...O.projView,...O.position,...O.forward,..._]),Z=this.data.time,j=new Float32Array([...o,Z.timeSeconds]);return new Float32Array([...F,...b,...G,...j])}}var Pe=(a=>(a[a.SkyviewLUT=0]="SkyviewLUT",a[a.TransmittanceLUT=1]="TransmittanceLUT",a[a.MultiscatterLUT=2]="MultiscatterLUT",a[a.Scene=3]="Scene",a[a.GBufferColor=4]="GBufferColor",a[a.GBufferNormal=5]="GBufferNormal",a[a.FFTWaveSpectrumGaussianNoise=6]="FFTWaveSpectrumGaussianNoise",a[a.FFTWaveInitialAmplitude=7]="FFTWaveInitialAmplitude",a[a.FFTWaveDy_plus_iDxdz_Amplitude=8]="FFTWaveDy_plus_iDxdz_Amplitude",a[a.FFTWaveDx_plus_iDz_Amplitude=9]="FFTWaveDx_plus_iDz_Amplitude",a[a.FFTWaveDydx_plus_iDydz_Amplitude=10]="FFTWaveDydx_plus_iDydz_Amplitude",a[a.FFTWaveDxdx_plus_iDzdz_Amplitude=11]="FFTWaveDxdx_plus_iDzdz_Amplitude",a[a.FFTWaveDx_Dy_Dz_Dxdz_Spatial=12]="FFTWaveDx_Dy_Dz_Dxdz_Spatial",a[a.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial=13]="FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial",a))(Pe||{});class At{constructor(i){K(this,"texture");K(this,"view");this.texture=i,this.view=i.createView({label:`Render Output View for '${i.label}'`,dimension:"2d",arrayLayerCount:1,baseArrayLayer:0})}get mipLevelCount(){return this.texture.mipLevelCount}}const ad="rgba16float",Nm="float",Gm="depth32float",sd="rgba16float",Bm="float";class od{constructor(i,o,f){K(this,"colorWithSurfaceWorldDepthInAlpha");K(this,"colorWithSurfaceWorldDepthInAlphaView");K(this,"normalWithSurfaceJacobianInAlpha");K(this,"normalWithSurfaceJacobianInAlphaView");K(this,"depth");K(this,"depthView");K(this,"readGroupLayout");K(this,"readGroup");K(this,"writeGroupLayout");K(this,"writeGroup");this.colorWithSurfaceWorldDepthInAlpha=i.createTexture({size:o,dimension:"2d",format:ad,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer ColorWithSurfaceWorldDepthInAlpha"}),this.colorWithSurfaceWorldDepthInAlphaView=this.colorWithSurfaceWorldDepthInAlpha.createView({label:"GBuffer ColorWithSurfaceWorldDepthInAlpha"}),this.normalWithSurfaceJacobianInAlpha=i.createTexture({size:o,dimension:"2d",format:sd,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Normal"}),this.normalWithSurfaceJacobianInAlphaView=this.normalWithSurfaceJacobianInAlpha.createView({label:"GBuffer Normal"}),this.readGroupLayout=(f==null?void 0:f.readGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Nm}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Bm}}],label:"GBuffer Read Group Layout"}),this.readGroup=i.createBindGroup({layout:this.readGroupLayout,entries:[{binding:0,resource:this.colorWithSurfaceWorldDepthInAlphaView},{binding:1,resource:this.normalWithSurfaceJacobianInAlphaView}],label:"GBuffer Read Group"}),this.writeGroupLayout=(f==null?void 0:f.writeGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:ad}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:sd}}],label:"GBuffer Write Group Layout"}),this.writeGroup=i.createBindGroup({layout:this.writeGroupLayout,entries:[{binding:0,resource:this.colorWithSurfaceWorldDepthInAlphaView},{binding:1,resource:this.normalWithSurfaceJacobianInAlphaView}],label:"GBuffer Write Group"}),this.depth=i.createTexture({size:o,dimension:"2d",format:Gm,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Depth"}),this.depthView=this.depth.createView({label:"GBuffer Depth"})}}const Wm=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
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
`,Vm="rgba32float";class qm{constructor(i,o,f){K(this,"texture");K(this,"view");K(this,"group0");K(this,"group1");K(this,"pipeline");this.texture=i.createTexture({size:o,dimension:"2d",format:Vm,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Transmittance LUT"}),this.view=this.texture.createView({label:"Transmittance LUT"});const _=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:this.texture.format}}],label:"Transmittance LUT Group 0"});this.group0=i.createBindGroup({layout:_,entries:[{binding:0,resource:this.view}],label:"Transmittance LUT Group 0"});const w=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Transmittance LUT Group 1"});this.group1=i.createBindGroup({layout:w,entries:[{binding:0,resource:{buffer:f.buffer}}],label:"Transmittance LUT Group 1"});const x=i.createShaderModule({code:Wm,label:"Transmittance LUT"});this.pipeline=i.createComputePipeline({compute:{module:x,entryPoint:"computeTransmittance"},layout:i.createPipelineLayout({bindGroupLayouts:[_,w]}),label:"Transmittance LUT"})}}const Hm=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
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
`,ld="rgba32float";class $m{constructor(i,o,f,_,w){K(this,"texture");K(this,"view");K(this,"group0");K(this,"group1");K(this,"pipeline");const x="Multiscatter LUT";this.texture=i.createTexture({size:o,dimension:"2d",format:ld,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Multiscatter LUT"}),this.view=this.texture.createView({label:x});const z=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:ld}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:_?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:_?"float":"unfilterable-float"}}],label:"Multiscatter LUT Group 0"});this.group0=i.createBindGroup({layout:z,entries:[{binding:0,resource:this.view},{binding:1,resource:i.createSampler({magFilter:_?"linear":"nearest",minFilter:_?"linear":"nearest"})},{binding:2,resource:f}],label:"Multiscatter LUT Group 0"});const b=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Multiscatter LUT Group 1"});this.group1=i.createBindGroup({layout:b,entries:[{binding:0,resource:{buffer:w.buffer}}],label:"Multiscatter LUT Group 1"});const A=i.createShaderModule({code:Hm,label:x});this.pipeline=i.createComputePipeline({compute:{module:A,entryPoint:"computeMultiscattering"},layout:i.createPipelineLayout({bindGroupLayouts:[z,b]}),label:"Multiscatter LUT"})}}const jm=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
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
`,ud="rgba32float";class Qm{constructor(i,o,f,_,w,x){K(this,"texture");K(this,"view");K(this,"group0");K(this,"group1");K(this,"pipeline");this.texture=i.createTexture({size:o,dimension:"2d",format:ud,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Skyview LUT"}),this.view=this.texture.createView({label:"Skyview LUT"});const z=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:ud}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:w?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:w?"float":"unfilterable-float"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:w?"float":"unfilterable-float"}}],label:"Skyview LUT"});this.group0=i.createBindGroup({layout:z,entries:[{binding:0,resource:this.view},{binding:1,resource:i.createSampler({magFilter:w?"linear":"nearest",minFilter:w?"linear":"nearest"})},{binding:2,resource:f},{binding:3,resource:_}],label:"Skyview LUT Group 0"});const b=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Skyview LUT Group 1"});this.group1=i.createBindGroup({layout:b,entries:[{binding:0,resource:{buffer:x.buffer}}],label:"Skyview LUT Group 1"});const A=i.createShaderModule({code:jm});this.pipeline=i.createComputePipeline({compute:{module:A,entryPoint:"computeSkyViewLuminance"},layout:i.createPipelineLayout({bindGroupLayouts:[z,b]}),label:"Skyview LUT"})}}const Ym=`// Textures must have the same dimension
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
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
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


const PI = 3.141592653589793;

struct FourierWavesUBO
{
	fourier_grid_size: u32,
	gravity: f32,
	wave_patch_extent_meters: f32,
	wave_period_seconds: f32,

	wind_speed_meters_per_second: f32,
	wind_fetch_meters: f32,
	wave_swell: f32,
	padding0: f32,

	wave_number_min_max: vec2<f32>,
	padding1: vec2<f32>,
}

// Implementation derived from:
// Nicolas Lutz, Arnaud Schoentgen, and Guillaume Gilet. 2024. Fast orientable aperiodic ocean synthesis using tiling and blending. Proc. ACM Comput. Graph. Interact. Tech. 7, 3, Article 49 (August 2024), 22 pages. https://doi.org/10.1145/3675388

// Deterministic wave parameters derived from texture coordinate
struct WaveParameters
{
	// Ranges from -fourier_grid_size / 2 to fourier_grid_size / 2
	wave_coord: vec2<i32>,

	wave_vector: vec2<f32>,
	wave_number: f32,
	delta_wave_number: f32,
	frequency: f32,
	d_frequency_d_wave_number: f32,
	wind_angle: f32,
}

fn quantizeFrequency(frequency: f32, fundamental_frequency: f32) -> f32
{
	let multiple = frequency / fundamental_frequency;
	return (multiple - fract(multiple)) * fundamental_frequency;
}

fn waveParameters(settings: ptr<uniform, FourierWavesUBO>, texel_coord: vec2<u32>) -> WaveParameters
{
	var result: WaveParameters;

	let wave_coord_offset = i32((*settings).fourier_grid_size / 2u);
	let g = (*settings).gravity;

	result.wave_coord = vec2<i32>(i32(texel_coord.x), i32(texel_coord.y)) - vec2<i32>(wave_coord_offset);

	const QUANTIZED_FREQUENCIES = true;
	if (QUANTIZED_FREQUENCIES)
	{
		let frequency_quantization_step = 2.0 * PI / (*settings).wave_period_seconds;
		let fundamental_frequency = quantizeFrequency(
			sqrt(g * 2.0 * PI / (*settings).wave_patch_extent_meters),
			frequency_quantization_step
			);
		let fundamental_wave_number = fundamental_frequency * fundamental_frequency / g;
		result.delta_wave_number = fundamental_wave_number;

		let wave_number_non_quantized = length(fundamental_wave_number * vec2<f32>(result.wave_coord));

		result.frequency = quantizeFrequency(sqrt(g * wave_number_non_quantized), frequency_quantization_step);
		// d/dk (sqrt(gk)) = g / (2 * sqrt(g * k))
		result.d_frequency_d_wave_number = 0.5 * g / result.frequency;

		result.wave_number = result.frequency * result.frequency / g;

		result.wave_vector = result.wave_number * normalize(vec2<f32>(result.wave_coord));
	}
	else
	{
		let fundamental_wave_number = 2.0 * PI / (*settings).wave_patch_extent_meters;
		let fundamental_frequency = sqrt(g * fundamental_wave_number);
		result.delta_wave_number = fundamental_wave_number;

		result.wave_vector = fundamental_wave_number * vec2<f32>(result.wave_coord);
		result.wave_number = length(result.wave_vector);

		result.frequency = sqrt(g * result.wave_number);
		// d/dk (sqrt(gk)) = g / (2 * sqrt(g * k))
		result.d_frequency_d_wave_number = 0.5 * g * inverseSqrt(g * result.wave_number);
	}

	result.wind_angle = atan2(result.wave_vector.y, result.wave_vector.x);

	return result;
}

fn waveSpectrumJONSWAP(settings: ptr<uniform, FourierWavesUBO>, frequency: f32, peak_frequency: f32) -> f32
{
	let wind_speed = (*settings).wind_speed_meters_per_second;
	let wind_fetch = (*settings).wind_fetch_meters;
	let g = (*settings).gravity;

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

fn waveDirectionalSpreading(settings: ptr<uniform, FourierWavesUBO>, frequency: f32, peak_frequency: f32, angle: f32) -> f32
{
	let f_ratio = peak_frequency / frequency;
	let swell = (*settings).wave_swell;

	let s = 16.0 * tanh(f_ratio) * swell * swell;

	let gamma_0 = gammaApprox(s + 1.0);
	let gamma_1 = gammaApprox(2.0 * s + 1.0);

	let q = (pow(2.0, 2.0 * s - 1.0) / PI) * (gamma_0 * gamma_0 / gamma_1);

	return q * pow(abs(cos(angle / 2.0)), 2.0 * s);
}

@group(0) @binding(0) var out_initial_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(1) var in_gaussian_random_pairs: texture_storage_2d<rg32float, read>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
@group(1) @binding(1) var<uniform> u_fourier_waves: FourierWavesUBO;

@compute @workgroup_size(16, 16, 1)
fn computeInitialAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>,)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_initial_amplitude);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let gaussian_pair = textureLoad(in_gaussian_random_pairs, texel_coord).xy;
	let wave = waveParameters(&u_fourier_waves, texel_coord);

	if (abs(wave.wave_number) < wave.delta_wave_number
		|| abs(wave.wave_number) < u_fourier_waves.wave_number_min_max.x
		|| abs(wave.wave_number) > u_fourier_waves.wave_number_min_max.y
	)
	{
		let amplitude = vec2<f32>(0.0, 0.0);
		textureStore(out_initial_amplitude, texel_coord, vec4<f32>(amplitude, 0.0, 0.0));
		return;
	}

	let g = u_fourier_waves.gravity;
	let wind_speed = u_fourier_waves.wind_speed_meters_per_second;
	let wind_fetch = u_fourier_waves.wind_fetch_meters;

	let peak_frequency = 22.0 * pow(g * g / (wind_speed * wind_fetch), 1.0 / 3.0);

	let spectrum = waveSpectrumJONSWAP(&u_fourier_waves, wave.frequency, peak_frequency)
		* waveDirectionalSpreading(&u_fourier_waves, wave.frequency, peak_frequency, wave.wind_angle);

	let magnitude = sqrt(
		2.0
		* spectrum
		* (wave.d_frequency_d_wave_number / wave.wave_number)
		* wave.delta_wave_number * wave.delta_wave_number
	);

	let amplitude = inverseSqrt(2.0)
		* gaussian_pair
		* magnitude;

	textureStore(out_initial_amplitude, texel_coord, vec4<f32>(amplitude, 0.0, 0.0));
}


/*
 * Capital D refers to displacement of the water surface
 * Lowercase d refers to partial derivative
 *
 * In order to halve the total FFT's we have to perform, we can do the following trick
 * If we have the following results from the FT:
 * 		complex f(n) -> purely real a
 * 		complex g(n) -> purely real b
 *
 * Then, by the linearity of the FT over linear combinations of the input function, we have that:
 *		 complex f(n) + i * g(n) -> a + i * b
 *
 * Thus, we can pack two sets of inputs for the FFT into the same two input channels, and avoid a wasted output channel.
 */
@group(0) @binding(0) var out_packed_Dy_plus_iDxdz_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(1) var out_packed_Dx_plus_iDz_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(2) var out_packed_Dydx_plus_iDydz_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(3) var out_packed_Dxdx_plus_iDzdz_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(4) var in_initial_amplitude: texture_storage_2d<rg32float, read>;

/* Commented to avoid re-declaration
@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
@group(1) @binding(1) var<uniform> u_fourier_waves: FourierWavesUBO;
*/
fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x);
}

@compute @workgroup_size(16, 16, 1)
fn computeRealizedAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>,)
{
	let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_packed_Dy_plus_iDxdz_amplitude);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let wave = waveParameters(&u_fourier_waves, texel_coord);
	let k_amplitude = textureLoad(in_initial_amplitude, texel_coord).xy;

	let k_minus_coord = vec2<u32>(
		(u_fourier_waves.fourier_grid_size - texel_coord.x) % u_fourier_waves.fourier_grid_size,
		(u_fourier_waves.fourier_grid_size - texel_coord.y) % u_fourier_waves.fourier_grid_size
	);
	let k_minus_amplitude = textureLoad(in_initial_amplitude, k_minus_coord).xy;
	let k_minus_amplitude_conjugate = vec2<f32>(k_minus_amplitude.x, -k_minus_amplitude.y);

	let phase = wave.frequency * u_global.time.time_seconds;
	let exponential = vec2<f32>(cos(phase), sin(phase));
	let exponential_conjugate = vec2<f32>(exponential.x, -exponential.y);

	let Dy_amplitude = complexMult(exponential, k_amplitude) + complexMult(exponential_conjugate, k_minus_amplitude_conjugate);

	/*
	 * For gerstner waves, displacement in x/z directions is based on the gradient
	 * (x,z)-Displacement of:
	 *
	 * h(k,t) * exp(i * dot(k,x))
	 * 	= i * k(k,t)/k * h(k,t) * exp(i * dot(k,x))
	 *
	 * Where i is the imaginary number sqrt(-1)
	 *
	 * We're going to be doing a few derivatives. h(k,t) is independent of (x,z),
	 * so in general taking the derivative brings down a factor of i * k_x or i * k_z from the exponential
	 */

	let iDy_amplitude = vec2<f32>(-Dy_amplitude.y, Dy_amplitude.x);

	var one_over_wave_number = 1.0 / wave.wave_number;
	if (abs(wave.wave_number) < wave.delta_wave_number)
	{
		one_over_wave_number = 1.0;
		return;
	}

	// wave.wave_vector.y here actually refers to the wave-vector's z component, since it is two-channel

	let Dx_amplitude = iDy_amplitude * wave.wave_vector.x / wave.wave_number;
	let Dz_amplitude = iDy_amplitude * wave.wave_vector.y / wave.wave_number;

	let Dxdx_amplitude = -Dy_amplitude * wave.wave_vector.x * wave.wave_vector.x / wave.wave_number;
	let Dydx_amplitude = iDy_amplitude * wave.wave_vector.x;
	let Dzdx_amplitude = -Dy_amplitude * wave.wave_vector.x * wave.wave_vector.y / wave.wave_number;

	// Mixed derivative is redundant, since Dxdz = Dzdx
	// let Dxdz_amplitude = -Dy_amplitude * wave.wave_vector.y * wave.wave_vector.x / wave.wave_number;
	let Dydz_amplitude = iDy_amplitude * wave.wave_vector.y;
	let Dzdz_amplitude = -Dy_amplitude * wave.wave_vector.y * wave.wave_vector.y / wave.wave_number;

	let iDxdz_amplitude = vec2<f32>(-Dzdx_amplitude.y, Dzdx_amplitude.x);
	let iDz_amplitude = vec2<f32>(-Dz_amplitude.y, Dz_amplitude.x);
	let iDydz_amplitude = vec2<f32>(-Dydz_amplitude.y, Dydz_amplitude.x);
	let iDzdz_amplitude = vec2<f32>(-Dzdz_amplitude.y, Dzdz_amplitude.x);

	textureStore(out_packed_Dy_plus_iDxdz_amplitude, texel_coord, vec4<f32>(Dy_amplitude + iDxdz_amplitude, 0.0, 0.0));
	textureStore(out_packed_Dx_plus_iDz_amplitude, texel_coord, vec4<f32>(Dx_amplitude + iDz_amplitude, 0.0, 0.0));
	textureStore(out_packed_Dydx_plus_iDydz_amplitude, texel_coord, vec4<f32>(Dydx_amplitude + iDydz_amplitude, 0.0, 0.0));
	textureStore(out_packed_Dxdx_plus_iDzdz_amplitude, texel_coord, vec4<f32>(Dxdx_amplitude + iDzdz_amplitude, 0.0, 0.0));
}

@group(0) @binding(0) var out_displacement: texture_storage_2d<rgba16float, write>;
@group(0) @binding(1) var out_Dydx_Dydz_Dxdx_Dzdz_derivatives: texture_storage_2d<rgba16float, write>;
@group(0) @binding(2) var in_displacement_Dy_Dxdz: texture_storage_2d<rg32float, read>;
@group(0) @binding(3) var in_displacement_Dx_Dz: texture_storage_2d<rg32float, read>;
@group(0) @binding(4) var in_displacement_Dydx_Dydz: texture_storage_2d<rg32float, read>;
@group(0) @binding(5) var in_displacement_Dxdx_Dzdz: texture_storage_2d<rg32float, read>;

@compute @workgroup_size(16, 16, 1)
fn fillSpatialTextures(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_displacement);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let Dy_Dxdz = textureLoad(in_displacement_Dy_Dxdz, texel_coord).xy;
	let Dx_Dz = textureLoad(in_displacement_Dx_Dz, texel_coord).xy;

	let Dx = Dx_Dz.x;
	let Dy = Dy_Dxdz.x;
	let Dz = Dx_Dz.y;

	let Dxdz = Dy_Dxdz.y;

	let Dydx_Dydz = textureLoad(in_displacement_Dydx_Dydz, texel_coord).xy;
	let Dxdx_Dzdz = textureLoad(in_displacement_Dxdx_Dzdz, texel_coord).xy;

	textureStore(out_displacement, texel_coord, vec4<f32>(Dx, Dy, Dz, Dxdz));
	textureStore(out_Dydx_Dydz_Dxdx_Dzdz_derivatives, texel_coord, vec4<f32>(Dydx_Dydz, Dxdx_Dzdz));
}
`,Km=`const PI = 3.141592653589793;

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
`;class Xm extends Pi{constructor(o){super(o,3,"DFFT Parameters UBO");K(this,"data",{log_2_size:1,size:2,b_inverse:!1})}packed(){const o=new ArrayBuffer(this.buffer.size),f=new DataView(o);return f.setUint32(0,this.data.log_2_size,!0),f.setUint32(4,this.data.size,!0),f.setFloat32(8,this.data.b_inverse?1:0,!0),o}}class Jm{constructor(i,o){K(this,"parametersUBO");K(this,"intermediateDFTs");K(this,"complexBuffer0");K(this,"complexBuffer1");K(this,"stepCounterBuffer");K(this,"intermediateDFTsBindGroup");K(this,"intermediateDFTsKernel");K(this,"performBindGroup");K(this,"performKernel");K(this,"performSwapEvenSignsKernel");K(this,"stepCounterBindGroup");K(this,"incrementStepCounterKernel");K(this,"resetStepCounterKernel");K(this,"debugBuffersCopied",!1);if(o<5)throw new RangeError("gridSizeExponent must be greater than 4.");const f=Math.pow(2,o);this.parametersUBO=new Xm(i),this.parametersUBO.data.log_2_size=o,this.parametersUBO.data.size=f,this.parametersUBO.data.b_inverse=!1,this.parametersUBO.writeToGPU(i.queue);const _=16;this.intermediateDFTs=i.createBuffer({label:"DFFT Precompute Stage Steps",size:o*f*_,usage:GPUBufferUsage.STORAGE});const w=i.createShaderModule({label:"DFFT Precompute Stage",code:Km}),x=i.createBindGroupLayout({label:"DFFT Precompute Stage Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.intermediateDFTsBindGroup=i.createBindGroup({label:"DFFT Precompute Stage Group 0",layout:x,entries:[{binding:0,resource:{buffer:this.parametersUBO.buffer}},{binding:1,resource:{buffer:this.intermediateDFTs}}]});const z=i.createPipelineLayout({label:"DFFT Precompute Steps Kernel",bindGroupLayouts:[x]});this.intermediateDFTsKernel=i.createComputePipeline({label:"DFFT Precompute Stage",compute:{module:w,entryPoint:"precomputeDFFTInstructions"},layout:z});const b=i.createBindGroupLayout({label:"DFFT Perform Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),A=8;this.complexBuffer0=i.createBuffer({label:"DFFT Buffer 0",size:f*f*A,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.complexBuffer1=i.createBuffer({label:"DFFT Buffer 1",size:this.complexBuffer0.size,usage:this.complexBuffer0.usage}),this.stepCounterBuffer=i.createBuffer({label:"DFFT Step Counter",size:4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE|GPUBufferUsage.UNIFORM});const G=new Uint32Array(1);G[0]=0,i.queue.writeBuffer(this.stepCounterBuffer,0,G),this.performBindGroup=i.createBindGroup({label:"DFFT Perform Group 0",layout:b,entries:[{binding:0,resource:{buffer:this.parametersUBO.buffer}},{binding:1,resource:{buffer:this.intermediateDFTs}},{binding:2,resource:{buffer:this.complexBuffer0}},{binding:3,resource:{buffer:this.complexBuffer1}},{binding:4,resource:{buffer:this.stepCounterBuffer}}]});const O=i.createPipelineLayout({label:"DFFT Perform",bindGroupLayouts:[b]});this.performKernel=i.createComputePipeline({label:"DFFT Perform DFFT Step",compute:{module:w,entryPoint:"performDFFTStep"},layout:O}),this.performSwapEvenSignsKernel=i.createComputePipeline({label:"DFFT Perform Swap Even Signs",compute:{module:w,entryPoint:"performSwapEvenSigns"},layout:O});const F=i.createBindGroupLayout({label:"DFFT Step Counter Bind Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.stepCounterBindGroup=i.createBindGroup({label:"DFFT Step Counter Bind Group 0",layout:F,entries:[{binding:0,resource:{buffer:this.stepCounterBuffer}}]});const Z=i.createPipelineLayout({label:"DFFT Step Counter",bindGroupLayouts:[F]});this.incrementStepCounterKernel=i.createComputePipeline({label:"DFFT Increment Step Counter Kernel",layout:Z,compute:{module:w,entryPoint:"incrementStepCounter"}}),this.resetStepCounterKernel=i.createComputePipeline({label:"DFFT Reset Step Counter Kernel",layout:Z,compute:{module:w,entryPoint:"resetStepCounter"}}),this.parametersUBO.data.b_inverse=!0,this.parametersUBO.writeToGPU(i.queue);const j=i.createCommandEncoder({label:"DFFT Precompute"}),te=j.beginComputePass({label:"DFFT Precompute Steps"});te.setPipeline(this.intermediateDFTsKernel),te.setBindGroup(0,this.intermediateDFTsBindGroup),te.dispatchWorkgroups(f/2/2,1,1),te.end(),i.queue.submit([j.finish()])}recordPerformOnBuffer0(i,o){const f=this.parametersUBO.data.size,_=this.parametersUBO.data.log_2_size,w=i.beginComputePass({label:"DFFT Perform",timestampWrites:o});for(let x=0;x<2*_;x++)x===0?(w.setPipeline(this.resetStepCounterKernel),w.setBindGroup(0,this.stepCounterBindGroup),w.dispatchWorkgroups(1,1,1)):(w.setPipeline(this.incrementStepCounterKernel),w.setBindGroup(0,this.stepCounterBindGroup),w.dispatchWorkgroups(1,1,1)),w.setPipeline(this.performKernel),w.setBindGroup(0,this.performBindGroup),w.dispatchWorkgroups(f/16,f/16,1);w.setPipeline(this.performSwapEvenSignsKernel),w.setBindGroup(0,this.performBindGroup),w.dispatchWorkgroups(f/16,f/16,1),w.end()}recordPerform(i,o,f,_,w,x){const z="rg32float";if(f.format!=z||_.format!=z)throw RangeError(`SourceTexture (format ${f.format}) and DestinationTexture (format ${_.format}) must both be ${z}`);this.parametersUBO.data.b_inverse=w,this.parametersUBO.writeToGPU(i.queue);const b=this.parametersUBO.data.size;o.copyTextureToBuffer({texture:f},{buffer:this.complexBuffer0,bytesPerRow:this.complexBuffer0.size/b},{width:f.width,height:f.height,depthOrArrayLayers:f.depthOrArrayLayers}),this.recordPerformOnBuffer0(o,x),o.copyBufferToTexture({buffer:this.complexBuffer0,bytesPerRow:this.complexBuffer0.size/b},{texture:_},{width:_.width,height:_.height,depthOrArrayLayers:_.depthOrArrayLayers})}}const Zm=`@group(0) @binding(0) var out_next_mip_level: texture_storage_2d_array<rgba16float, write>;
@group(0) @binding(1) var in_previous_mip_level: texture_2d_array<f32>;

@compute @workgroup_size(16, 16, 1)
fn fillMipMap(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	// Each mip level halves the resolution

	let array_level = global_id.z;

	let color = 0.25 * (
		  textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(0,0), array_level, 0)
		+ textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(0,1), array_level, 0)
		+ textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(1,0), array_level, 0)
		+ textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(1,1), array_level, 0)
	);
	textureStore(out_next_mip_level, global_id.xy, array_level, color);
}
`,Go="rgba16float";class e_{constructor(i){K(this,"fillMipMapTextureInOutLayout");K(this,"fillMipMapKernel");this.fillMipMapTextureInOutLayout=i.createBindGroupLayout({label:"MipMap Generation fillMipMap Texture In-Out",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Go,viewDimension:"2d-array"}},{binding:1,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float",viewDimension:"2d-array"}}]});const o=i.createShaderModule({label:"sky-sea/mipmap.wgsl",code:Zm}),f=i.createPipelineLayout({label:"MipMap Generation fillMipMap Kernel",bindGroupLayouts:[this.fillMipMapTextureInOutLayout]});this.fillMipMapKernel=i.createComputePipeline({label:"MipMap Generation fillMipMap Kernel",layout:f,compute:{module:o,entryPoint:"fillMipMap"}})}createBindGroups(i,o){if(o.format!=Go)throw new RangeError(`Invalid source texture (label ${o.label}) for MipMap generation`,{cause:`Source format is ${o.format} when expected ${Go}`});if(o.dimension!="2d")throw new RangeError(`Invalid source texture (label ${o.label}) for MipMap generation`,{cause:"Source texture is not 2d"});if(!(o.usage&GPUTextureUsage.COPY_SRC))throw new RangeError(`Invalid source texture (label ${o.label}) for MipMap generation`,{cause:"Source usage is missing required flag COPY_SRC"});if(o.width!=o.height||!Number.isInteger(Math.log2(o.width)))throw new RangeError(`Invalid source texture (label ${o.label}) for MipMap generation`,{cause:`Source dimensions of (${o.width},${o.height}) are invalid, texture must be square and power-of-2.`});const f=Math.log2(o.width);return{level0Size:{width:o.width,height:o.height},bindGroupsByMipLevel:[...new Array(Math.min(f,o.mipLevelCount)-1).keys()].map((_,w)=>{const x=w+1,z=w;return i.createBindGroup({label:`MipMap Generation for '${o.label}' IO Bind Group '${z} => ${x}'`,layout:this.fillMipMapTextureInOutLayout,entries:[{binding:0,resource:o.createView({dimension:"2d-array",baseMipLevel:x,mipLevelCount:1})},{binding:1,resource:o.createView({dimension:"2d-array",baseMipLevel:z,mipLevelCount:1})}]})}),arrayLevelCount:o.depthOrArrayLayers}}updateMipMaps(i,o){const f=i.beginComputePass({label:"MipMap Generation"});f.setPipeline(this.fillMipMapKernel),o.bindGroupsByMipLevel.forEach((_,w)=>{f.setBindGroup(0,_);const x=1<<w;f.dispatchWorkgroups(o.level0Size.width/x/16,o.level0Size.height/x/16,o.arrayLevelCount/1)}),f.end()}}const kd=512,cd=9,t_=9.8,n_=100,dd="rg32float",fd="rg32float",pd="rgba16float",r_="rgba16float",Br="rg32float";class i_ extends Pi{constructor(o){super(o,12,"Fourier Waves UBO");K(this,"data",{fourier_grid_size:kd,gravity:t_,wave_patch_extent_meters:50,wave_period_seconds:n_,wind_speed_meters_per_second:5,wind_fetch_meters:10*1e3,wave_swell:.3,padding0:0,wave_number_min_max:Nt.create(0,1e3),padding1:Nt.create(0,0)})}packed(){const o=new ArrayBuffer(this.buffer.size),f=new DataView(o),_=new Float32Array(o);return f.setUint32(0,this.data.fourier_grid_size,!0),f.setFloat32(4,this.data.gravity,!0),f.setFloat32(8,this.data.wave_patch_extent_meters,!0),f.setFloat32(12,this.data.wave_period_seconds,!0),f.setFloat32(16,this.data.wind_speed_meters_per_second,!0),f.setFloat32(20,this.data.wind_fetch_meters,!0),f.setFloat32(24,this.data.wave_swell,!0),f.setFloat32(28,this.data.padding0,!0),_.set(this.data.wave_number_min_max,8),_.set(this.data.padding1,10),o}}function a_(){const a=Math.random(),i=Math.random(),o=Math.sqrt(-2*Math.log(a)),f=2*Math.PI*i,_=o*Math.cos(f),w=o*Math.sin(f);return[_,w]}class s_{constructor(i,o){K(this,"Dx_Dy_Dz_Dxdz_Spatial");K(this,"Dydx_Dydz_Dxdx_Dzdz_Spatial");K(this,"Dx_Dy_Dz_Dxdz_SpatialAllMips");K(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips");i.mipLevelCount!=o.mipLevelCount&&console.warn(`FFT Displacement maps do not have identical mip levels. ${i.mipLevelCount} vs ${o.mipLevelCount}`),this.Dx_Dy_Dz_Dxdz_Spatial=i,this.Dydx_Dydz_Dxdx_Dzdz_Spatial=o,this.Dx_Dy_Dz_Dxdz_SpatialAllMips=this.Dx_Dy_Dz_Dxdz_Spatial.createView({label:`FFTWaveDisplacementMaps for ${this.Dx_Dy_Dz_Dxdz_Spatial.label}`}),this.Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips=this.Dydx_Dydz_Dxdx_Dzdz_Spatial.createView({label:`FFTWaveDisplacementMaps for ${this.Dydx_Dydz_Dxdx_Dzdz_Spatial.label}`})}get mipLevelCount(){return this.Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount}}class o_{constructor(i,o){K(this,"gridSize");K(this,"initialAmplitudeKernel");K(this,"realizedAmplitudeKernel");K(this,"fillSpatialTexturesKernel");K(this,"dfftResources");K(this,"mipMapGenerator");K(this,"cascades");K(this,"Dx_Dy_Dz_Dxdz_SpatialArray");K(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialArray");K(this,"Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings");K(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings");this.gridSize=kd;const f=i.createBindGroupLayout({label:"FFT Wave Initial Amplitude h_0(k) Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:fd,access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:dd,access:"read-only"}}]}),_=i.createBindGroupLayout({label:"FFT Wave Initial Amplitude h_0(k) Group 1",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.dfftResources=new Jm(i,cd);const w=i.createShaderModule({label:"FFT Wave",code:Ym});this.initialAmplitudeKernel=i.createComputePipeline({label:"FFT Wave Initial Amplitude h_0(k)",layout:i.createPipelineLayout({label:"FFT Wave Initial Amplitude h_0(k)",bindGroupLayouts:[f,_]}),compute:{module:w,entryPoint:"computeInitialAmplitude"}}),this.mipMapGenerator=new e_(i);const x=i.createBindGroupLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"write-only"}},{binding:2,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"write-only"}},{binding:3,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"write-only"}},{binding:4,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"read-only"}}]}),z=i.createBindGroupLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 1",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.realizedAmplitudeKernel=i.createComputePipeline({label:"FFT Wave Realized Fourier Amplitude h(k,t)",layout:i.createPipelineLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t)",bindGroupLayouts:[x,z]}),compute:{module:w,entryPoint:"computeRealizedAmplitude"}});const b=i.createBindGroupLayout({label:"FFT Wave Fill Spatial Textures Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:pd,viewDimension:"2d",access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:r_,viewDimension:"2d",access:"write-only"}},{binding:2,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Br,access:"read-only"}},{binding:3,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Br,access:"read-only"}},{binding:4,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Br,access:"read-only"}},{binding:5,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Br,access:"read-only"}}]});this.fillSpatialTexturesKernel=i.createComputePipeline({label:"FFT Wave Fill Spatial Textures",layout:i.createPipelineLayout({label:"FFT Wave Fill SpatialTextures",bindGroupLayouts:[b]}),compute:{module:w,entryPoint:"fillSpatialTextures"}});function A(X){const W=2*X;return 2*Math.PI/W}const G=[200,50,10],O=[.001,...G.map(X=>A(X/this.gridSize)),1e3],F=G.map((X,W)=>({patchExtentMeters:X,waveNumberMinMax:[O[W],O[W+1]]})),Z=F.length;this.Dx_Dy_Dz_Dxdz_SpatialArray=i.createTexture({label:"FFT Wave Final Displacement Array",format:pd,dimension:"2d",size:{width:this.gridSize,height:this.gridSize,depthOrArrayLayers:Z},mipLevelCount:cd,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST}),this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray=i.createTexture({label:"FFT Wave Final Derivatives Array",format:this.Dx_Dy_Dz_Dxdz_SpatialArray.format,size:{width:this.Dx_Dy_Dz_Dxdz_SpatialArray.width,height:this.Dx_Dy_Dz_Dxdz_SpatialArray.height,depthOrArrayLayers:this.Dx_Dy_Dz_Dxdz_SpatialArray.depthOrArrayLayers},mipLevelCount:this.Dx_Dy_Dz_Dxdz_SpatialArray.mipLevelCount,usage:this.Dx_Dy_Dz_Dxdz_SpatialArray.usage}),this.cascades=F.map((X,W)=>this.createCascade(i,o,X.patchExtentMeters,X.waveNumberMinMax,this.Dx_Dy_Dz_Dxdz_SpatialArray.createView({dimension:"2d",baseMipLevel:0,mipLevelCount:1,baseArrayLayer:W,arrayLayerCount:1}),this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray.createView({dimension:"2d",baseMipLevel:0,mipLevelCount:1,baseArrayLayer:W,arrayLayerCount:1}))),this.Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings=this.mipMapGenerator.createBindGroups(i,this.Dx_Dy_Dz_Dxdz_SpatialArray),this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings=this.mipMapGenerator.createBindGroups(i,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray);const j=i.createCommandEncoder({label:"FFT Wave Initial Amplitude"}),te=j.beginComputePass({label:"FFT Wave Initial Amplitude"});this.cascades.forEach(X=>{te.setPipeline(this.initialAmplitudeKernel),te.setBindGroup(0,X.initialAmplitudeGroup0),te.setBindGroup(1,X.initialAmplitudeGroup1);const W={width:X.initialAmplitude.width,height:X.initialAmplitude.height,depth:X.initialAmplitude.depthOrArrayLayers};te.dispatchWorkgroups(W.width/16,W.height/16,W.depth/1)}),te.end(),i.queue.submit([j.finish()])}createCascade(i,o,f,_,w,x){const z={width:this.gridSize,height:this.gridSize},b=i.createTexture({label:"FFT Wave Gaussian Noise",format:dd,size:z,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),A=2,O=8*this.gridSize,F=new Float32Array(this.gridSize*this.gridSize*A);for(let xe=0;xe<F.length;xe++)F[xe]=a_()[0];i.queue.writeTexture({texture:b},F,{bytesPerRow:O},{width:b.width,height:b.height});const Z=new i_(i);Z.data.wave_patch_extent_meters=f,Nt.set(_[0],_[1],Z.data.wave_number_min_max),Z.writeToGPU(i.queue);const j=i.createTexture({label:"FFT Wave Fourier Amplitude h_0(k)",format:fd,size:z,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),te=i.createBindGroup({label:"FFT Wave Initial Amplitude h_0(k) Group 0",layout:this.initialAmplitudeKernel.getBindGroupLayout(0),entries:[{binding:0,resource:j.createView()},{binding:1,resource:b.createView()}]}),X=i.createBindGroup({label:"FFT Wave Initial Amplitude h_0(k) Group 1",layout:this.initialAmplitudeKernel.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:o.buffer}},{binding:1,resource:{buffer:Z.buffer}}]}),W=i.createTexture({label:"FFT Wave Dy Amplitude",format:Br,size:z,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),J=i.createTexture({label:"FFT Wave Packed Dx + i * Dz Amplitude",format:W.format,size:z,usage:W.usage}),ue=i.createTexture({label:"FFT Wave Packed Dydx + i * Dydz Amplitude",format:W.format,size:z,usage:W.usage}),fe=i.createTexture({label:"FFT Wave Packed Dxdx + i * Dzdz Amplitude",format:W.format,size:z,usage:W.usage}),Re=i.createBindGroup({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 0",layout:this.realizedAmplitudeKernel.getBindGroupLayout(0),entries:[{binding:0,resource:W.createView()},{binding:1,resource:J.createView()},{binding:2,resource:ue.createView()},{binding:3,resource:fe.createView()},{binding:4,resource:j.createView()}]}),ke=i.createBindGroup({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 1",layout:this.realizedAmplitudeKernel.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:o.buffer}},{binding:1,resource:{buffer:Z.buffer}}]}),De=i.createTexture({label:"FFT Wave Spatial (Dy, 0)",format:Br,size:z,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),Ne=i.createTexture({label:"FFT Wave Spatial (Dx, Dz)",format:De.format,size:z,usage:De.usage}),Ie=i.createTexture({label:"FFT Wave Spatial (Dydx, Dydz)",format:De.format,size:z,usage:De.usage}),Fe=i.createTexture({label:"FFT Wave Spatial (Dxdx, Dzdz)",format:De.format,size:z,usage:De.usage}),qe=i.createBindGroup({label:"FFT Wave Fill Spatial Textures Group 0",layout:this.fillSpatialTexturesKernel.getBindGroupLayout(0),entries:[{binding:0,resource:w},{binding:1,resource:x},{binding:2,resource:De.createView()},{binding:3,resource:Ne.createView()},{binding:4,resource:Ie.createView()},{binding:5,resource:Fe.createView()}]});return{gaussianNoise:b,initialAmplitude:j,waveSettings:Z,initialAmplitudeGroup0:te,initialAmplitudeGroup1:X,packed_Dy_plus_iDxdz_Amplitude:W,packed_Dx_plus_iDz_Amplitude:J,packed_Dydx_plus_iDydz_Amplitude:ue,packed_Dxdx_plus_iDzdz_Amplitude:fe,realizedAmplitudeGroup0:Re,realizedAmplitudeGroup1:ke,fillSpatialTexturesGroup0:qe,Dy_Dxdz_Spatial:De,Dx_Dz_Spatial:Ne,Dydx_Dydz_Spatial:Ie,Dxdx_Dzdz_Spatial:Fe}}views(){const i=this.cascades[0];return{gaussianNoise:new At(i.gaussianNoise),initialAmplitude:new At(i.initialAmplitude),Dy_Amplitude:new At(i.packed_Dy_plus_iDxdz_Amplitude),Dx_plus_iDz_Amplitude:new At(i.packed_Dx_plus_iDz_Amplitude),packed_Dxdx_plus_iDzdz_Amplitude:new At(i.packed_Dxdx_plus_iDzdz_Amplitude),packed_Dydx_plus_iDydz_Amplitude:new At(i.packed_Dydx_plus_iDydz_Amplitude),Dx_Dy_Dz_Dxdz_Spatial:new At(this.Dx_Dy_Dz_Dxdz_SpatialArray),Dydx_Dydz_Dxdx_Dzdz_Spatial:new At(this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray)}}displacementMaps(){return new s_(this.Dx_Dy_Dz_Dxdz_SpatialArray,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray)}record(i,o,f){const _=o.beginComputePass({label:"FFT Wave Fourier Amplitude Realization",timestampWrites:f!==void 0?{querySet:f.querySet,beginningOfPassWriteIndex:f.beginWriteIndex}:void 0});this.cascades.forEach(x=>{_.setPipeline(this.realizedAmplitudeKernel),_.setBindGroup(0,x.realizedAmplitudeGroup0),_.setBindGroup(1,x.realizedAmplitudeGroup1);const z={width:x.packed_Dy_plus_iDxdz_Amplitude.width,height:x.packed_Dy_plus_iDxdz_Amplitude.height,depth:1};_.dispatchWorkgroups(z.width/16,z.height/16,z.depth/1)}),_.end(),this.cascades.forEach(x=>{this.dfftResources.recordPerform(i,o,x.packed_Dy_plus_iDxdz_Amplitude,x.Dy_Dxdz_Spatial,!0,void 0),this.dfftResources.recordPerform(i,o,x.packed_Dx_plus_iDz_Amplitude,x.Dx_Dz_Spatial,!0,void 0),this.dfftResources.recordPerform(i,o,x.packed_Dydx_plus_iDydz_Amplitude,x.Dydx_Dydz_Spatial,!0,void 0),this.dfftResources.recordPerform(i,o,x.packed_Dxdx_plus_iDzdz_Amplitude,x.Dxdx_Dzdz_Spatial,!0,void 0)});const w=o.beginComputePass({label:"FFT Wave Fill Displacement",timestampWrites:f!==void 0?{querySet:f.querySet,endOfPassWriteIndex:f.endWriteIndex}:void 0});this.cascades.forEach(x=>{w.setPipeline(this.fillSpatialTexturesKernel),w.setBindGroup(0,x.fillSpatialTexturesGroup0),w.dispatchWorkgroups(this.Dx_Dy_Dz_Dxdz_SpatialArray.width/16,this.Dx_Dy_Dz_Dxdz_SpatialArray.height/16,1)}),w.end(),this.mipMapGenerator.updateMipMaps(o,this.Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings),this.mipMapGenerator.updateMipMaps(o,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings)}}const l_=`// Displace a grid of vertices representing the ocean surface, then rasterize into the gbuffer with a graphics pass

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
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
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


struct PlaneWave
{
    direction: vec2<f32>,
    amplitude: f32,
    wavelength: f32,
}

struct WaveSurfaceDisplacementUBO
{
	patch_world_half_extent: f32,
	b_gerstner: u32,
	b_displacement_map: u32,
}

@group(0) @binding(0) var<uniform> u_settings: WaveSurfaceDisplacementUBO;
@group(0) @binding(1) var<uniform> u_global: GlobalUBO;

@group(1) @binding(0) var displacement_map_sampler: sampler;
@group(1) @binding(1) var Dx_Dy_Dz_Dxdz_spatial: texture_2d_array<f32>;
@group(1) @binding(2) var Dydx_Dydz_Dxdx_Dzdz_spatial: texture_2d_array<f32>;
@group(1) @binding(3) var<uniform> u_waves: array<PlaneWave, WAVE_COUNT>;

const PI = 3.141592653589793;

// Extra 1 for tiling
const VERTEX_DIMENSION = 3000u;
const VERTEX_COUNT = VERTEX_DIMENSION * VERTEX_DIMENSION;
// const TRIANGLE_COUNT = 2u * (VERTEX_DIMENSION - 1u) * (VERTEX_DIMENSION - 1u);
// const INDEX_COUNT = 3u * TRIANGLE_COUNT;

const WAVE_COUNT = 12u;

const WATER_COLOR = vec3<f32>(1.0 / 255.0, 123.0 / 255.0, 146.0 / 255.0);
const WAVE_NEUTRAL_PLANE = 1.0;

// When sampling multiple waves, these properties should be summed since we assume waves add linearly
// The gradient distributes linearly, so sum all tangents and bitangent before crossing to produce normal
struct WaveDisplacementResult
{
    displacement: vec3<f32>,
    tangent: vec3<f32>,
    bitangent: vec3<f32>,
	jacobian: f32,
}

fn sampleGerstner(wave: PlaneWave, time: f32, coords: vec2<f32>, falloff_distance: f32) -> WaveDisplacementResult
{
    let wave_amplitude = (1.0 - smoothstep(0.0, falloff_distance, length(coords))) * wave.amplitude;
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
	output.jacobian = 1.0;

    return output;
}

fn sampleCosine(wave: PlaneWave, time: f32, coords: vec2<f32>, falloff_distance: f32) -> WaveDisplacementResult
{
    let wave_amplitude = (1.0 - smoothstep(0.0, falloff_distance, length(coords))) * wave.amplitude;
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
	output.jacobian = 1.0;

    return output;
}

fn sampleMap(global_uv: vec2<f32>, max_cascade: f32, gerstner: bool, lod: f32) -> WaveDisplacementResult
{
	let delta = 0.5 / vec2<f32>(textureDimensions(Dx_Dy_Dz_Dxdz_spatial));

    var output: WaveDisplacementResult;
	output.displacement = vec3<f32>(0.0);
	output.tangent = vec3<f32>(0.0);
	output.bitangent = vec3<f32>(0.0);
	output.jacobian = 0.0;

	const WAVE_PATCH_SIZES = array<f32,3>(200.0, 50.0, 10.0);

	var jacobian_xx = 1.0;
	var jacobian_zz = 1.0;
	var jacobian_xz = 0.0;
	var jacobian_zx = 0.0;

	for(var array_layer = 0u; array_layer <= u32(max_cascade); array_layer++)
	{
		var lambda = 1.0;
		if(array_layer == u32(max_cascade))
		{
			lambda = fract(max_cascade);
		}

		let patch_uv = global_uv / WAVE_PATCH_SIZES[array_layer];

		let Dx_Dy_Dz_Dxdz = textureSampleLevel(Dx_Dy_Dz_Dxdz_spatial, displacement_map_sampler, patch_uv, array_layer, f32(lod));

		var delta_displacement = Dx_Dy_Dz_Dxdz.xyz;
		if(!gerstner)
		{
			output.displacement.x = 0.0;
			output.displacement.z = 0.0;
		}

		output.displacement += lambda * delta_displacement;

		let Dydx_Dydz_Dxdx_Dzdz = textureSampleLevel(Dydx_Dydz_Dxdx_Dzdz_spatial, displacement_map_sampler, patch_uv, array_layer, f32(lod));

		let Dydx = Dydx_Dydz_Dxdx_Dzdz.x;
		let Dydz = Dydx_Dydz_Dxdx_Dzdz.y;

		let Dxdz = Dx_Dy_Dz_Dxdz.w * f32(gerstner);
		let Dzdx = Dxdz;

		var Dxdx = Dydx_Dydz_Dxdx_Dzdz.z * f32(gerstner);
		var Dzdz = Dydx_Dydz_Dxdx_Dzdz.w * f32(gerstner);

		output.tangent += lambda * vec3<f32>(Dxdx, Dydx, Dzdx);
		output.bitangent += lambda * vec3<f32>(Dxdz, Dydz, Dzdz);

		jacobian_xx += lambda * Dxdx;
		jacobian_zz += lambda * Dzdz;

		jacobian_xz += lambda * Dxdz;
		jacobian_zx += lambda * Dzdx;
	}

	output.jacobian = jacobian_xx * jacobian_zz - jacobian_xz * jacobian_zx;

	return output;
}

struct DisplacementResult
{
	world_position: vec3<f32>,
	world_normal: vec3<f32>,
	jacobian: f32,
}

fn computeDisplacement(in_world_position: vec3<f32>, max_cascade: f32, time: f32, lod: f32, max_lod: f32) -> DisplacementResult
{
	var displacement = vec3<f32>(0.0);
    var tangent = vec3<f32>(1.0, 0.0, 0.0);
    var bitangent = vec3<f32>(0.0, 0.0, 1.0);
	var jacobian = 0.0;

	if(u_settings.b_displacement_map == 1u)
	{
    	let uv = (in_world_position.xz + vec2<f32>(0.5,0.5));
		let gerstner = u_settings.b_gerstner == 1u;
		let result: WaveDisplacementResult = sampleMap(uv, max_cascade, gerstner, lod);

		displacement += result.displacement;
		tangent += result.tangent;
		bitangent += result.bitangent;
		jacobian += result.jacobian;
	}
	else
	{
		var result: WaveDisplacementResult;

		for (var i = 0u; i < WAVE_COUNT; i++)
		{
			if(u_settings.b_gerstner == 1u)
			{
				result = sampleGerstner(u_waves[i], time, in_world_position.xz, u_settings.patch_world_half_extent);
			}
			else
			{
				result = sampleCosine(u_waves[i], time, in_world_position.xz, u_settings.patch_world_half_extent);
			}

			displacement += result.displacement;
			tangent += result.tangent;
			bitangent += result.bitangent;
			jacobian += result.jacobian;
		}
	}

	var result: DisplacementResult;
	/*
	 * To minimize aliasing, we smooth the distance ocean.
	 * TODO: Phase in a distance BRDF that models the current choppiness of the ocean surface
	 */
	let lod_factor = 1.0 - lod / max_lod;
	result.world_position = in_world_position + lod_factor * displacement;
	result.world_normal = mix(vec3<f32>(0.0, 1.0, 0.0) ,-normalize(cross(tangent, bitangent)), lod_factor);
	result.jacobian = jacobian;

	return result;
}

struct RayPlaneHit {
	hit: bool,
	t: f32,
}

fn rayPlaneIntersection(
	ray_origin: vec3<f32>,
	ray_direction: vec3<f32>,
	plane_origin: vec3<f32>,
	plane_normal: vec3<f32>
) -> RayPlaneHit
{
	var result: RayPlaneHit;

	let perp = dot(plane_normal, ray_direction);
	result.t = dot(plane_origin - ray_origin, plane_normal) / perp;
	result.hit = (abs(perp) > 0.00001) && (result.t > 0.0);

	return result;
}

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(1) world_normal : vec3<f32>,
    @location(2) color : vec3<f32>,
    @location(3) camera_distance : f32,
	@location(4) jacobian : f32,
}

/*
 * Projects a grid of vertices with evenly distributed screen space coordinates
 */
@vertex
fn screenSpaceWarped(@builtin(vertex_index) index : u32) -> VertexOut
{
	var output : VertexOut;

	let camera = u_global.camera;

	let vert_coord = vec2<f32>(
		f32(index % VERTEX_DIMENSION),
		f32(index / VERTEX_DIMENSION)
	) / f32(VERTEX_DIMENSION - 1u);

	let overlap = vec2<f32>(1.5);

	/*
	 * This assumes:
	 *  - the camera has no roll, so the horizon is flat in NDC space and extends to y=-1
	 *  - the horizon is visible
	 */

	/* Enable this when camera moves too high, and horizon drops more than a pixel or two
	const METERS_PER_MM = 1000000.0;
	let atmosphere = u_global.atmosphere;

    let origin = vec3<f32>(0.0, atmosphere.planet_radius_Mm, 0.0) + camera.position.xyz / METERS_PER_MM;
    let sin_horizon: f32 = atmosphere.planet_radius_Mm / length(origin);
    let cos_horizon: f32 = -safeSqrt(1.0 - sin_horizon * sin_horizon);
	let ndc_horizon_forward = (camera.proj_view * vec4<f32>(camera.forward.x, 0.0, camera.forward.z, 0.0));
	*/

	let ndc_horizon_forward = (camera.proj_view * vec4<f32>(camera.forward.x, 0.0, camera.forward.z, 0.0));

	let ndc_min = vec2<f32>(-overlap.x, -overlap.y);
	let ndc_max = vec2<f32>(overlap.x, ndc_horizon_forward.y / ndc_horizon_forward.w);

	let ndc_space_coord = mix(ndc_min, ndc_max, vert_coord);

    let near_plane_depth = 1.0;
    let direction_view_space = camera.inv_proj * vec4<f32>(ndc_space_coord, near_plane_depth, 1.0) /* -vec4<f32>(0.0,0.0,0.0,1.0) === camera position */;
    let direction_world = normalize((camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

	let ocean_origin = vec3<f32>(0.0, WAVE_NEUTRAL_PLANE, 0.0);
	let ocean_normal = vec3<f32>(0.0,1.0,0.0);
	let ocean_plane_hit = rayPlaneIntersection(camera.position.xyz, direction_world, ocean_origin, ocean_normal);
	let t = mix(1000.0, ocean_plane_hit.t, f32(ocean_plane_hit.hit));

	var in_world_position = camera.position.xyz + t * direction_world;
	in_world_position.y = WAVE_NEUTRAL_PLANE;

	let offset_direction_view_space = camera.inv_proj * vec4<f32>(ndc_space_coord + vec2<f32>(1.0) / f32(VERTEX_DIMENSION - 1u), near_plane_depth, 1.0);
	let offset_direction_world = normalize((camera.inv_view * vec4<f32>(offset_direction_view_space.xyz, 0.0)).xyz);
	let offset_ocean_plane_hit = rayPlaneIntersection(camera.position.xyz, offset_direction_world, ocean_origin, ocean_normal);
	let offset_t = mix(1000.0, offset_ocean_plane_hit.t, f32(offset_ocean_plane_hit.hit));
	var offset_world_position = camera.position.xyz + offset_t * offset_direction_world;
	offset_world_position.y = WAVE_NEUTRAL_PLANE;
	let spatial_sample_distance = length(offset_world_position - in_world_position);

	/*
	 * We don't want to sample waves outside of the nyquist limit.
	 * Each cascade has increasing wavenumber/decreasing wavelengths, so we can just only sample cascades up to the appropriate bound
	 * These bounds define the wavenumber intervals that each cascade contains.
	 * TODO: this is hardcoded right now, but should be passed as a uniform
	 */
	const WAVE_NUMBER_FENCE_POSTS = array<f32, 5>(0.001, 8.042477193189871, 32.169908772759484, 160.8495438637974, 1000);

	// Any wave with wavenumber greater than this should NOT be sampled
	let nyquist_wavenumber = (2.0 * PI) / (spatial_sample_distance * 2.0);

	// Use a float, so we can interpolate cascades
	var max_cascade: f32 = f32(textureNumLayers(Dx_Dy_Dz_Dxdz_spatial));
	for(var cascade = 1u; cascade < textureNumLayers(Dx_Dy_Dz_Dxdz_spatial); cascade++)
	{
		let wave_number_min = WAVE_NUMBER_FENCE_POSTS[cascade];
		let wave_number_max = WAVE_NUMBER_FENCE_POSTS[cascade + 1u];
		if(wave_number_max > nyquist_wavenumber)
		{
			let t = (nyquist_wavenumber - wave_number_min) / (wave_number_max - wave_number_min);
			max_cascade = f32(cascade) + clamp(t, 0.0, 1.0);
			break;
		}
	}

	const max_lod = 9.0;
	const lod_scale_meters = 2000.0;
	let lod = max_lod * atan(t / lod_scale_meters) / (0.5 * PI);
	let displacement_result = computeDisplacement(in_world_position, max_cascade, u_global.time.time_seconds, lod, max_lod);

	let world_position = displacement_result.world_position;

    output.position = u_global.camera.proj_view * vec4<f32>(world_position, 1.0);
	// Unclipped depth didn't work (and requires a feature) so this is a workaround
	output.position.z /= 1.001;
	output.world_normal = displacement_result.world_normal;
	output.color = vec3<f32>(WATER_COLOR);
	output.jacobian = displacement_result.jacobian;

	// Test screen-space density of vertices
	// output.color = vec3<f32>(step(fract(50 * ndc_space_coord), vec2<f32>(0.1)),0.0);
 	// output.color = vec3<f32>(step(fract(1.0 * world_position.x), 0.05),0.0,0.0);

    output.camera_distance = distance(u_global.camera.position.xyz, world_position);

    return output;
}

struct FragmentOut
{
    @location(0) color_with_surface_world_depth_in_alpha: vec4<f32>,
    @location(1) world_normal_with_surface_jacobian_in_alpha: vec4<f32>,
}

@fragment
fn rasterizationFragment(frag_interpolated: VertexOut) -> FragmentOut
{
    var output : FragmentOut;

    output.color_with_surface_world_depth_in_alpha = vec4<f32>(frag_interpolated.color, frag_interpolated.camera_distance);
    output.world_normal_with_surface_jacobian_in_alpha = vec4<f32>(frag_interpolated.world_normal,frag_interpolated.jacobian);

    return output;
}
`;class u_ extends Pi{constructor(o){super(o,3,"Wave Surface Displacement Patch World Half Extent UBO");K(this,"data",{patch_world_half_extent:50,b_gerstner:!0,b_fft:!0})}packed(){const o=new ArrayBuffer(this.buffer.size),f=new DataView(o);return f.setFloat32(0,this.data.patch_world_half_extent,!0),f.setUint32(4,this.data.b_gerstner?1:0,!0),f.setUint32(8,this.data.b_fft?1:0,!0),o}}class c_{constructor(i,o,f,_,w,x){K(this,"group0");K(this,"group1");K(this,"settingsUBO");K(this,"vertexDimension");K(this,"lodCount");K(this,"baseIndexCount");K(this,"mipLevelCount");K(this,"indices");K(this,"oceanSurfaceRasterizationPipeline");this.vertexDimension=3e3;const b=4,G=3*(2*2999*2999);this.baseIndexCount=G;const O=10;this.lodCount=O,this.indices=i.createBuffer({size:G*b,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX,label:"Wave Surface Displacement Indices"});const F=new Uint32Array(G);let Z=0;for(let qe=0;qe<2999;qe++)for(let xe=0;xe<2999;xe++){const Le=xe+qe*3e3,Se=Le+1,Ye=Le+3e3,$e=Ye+1,Ve=new Uint32Array([Le,Ye,Se,Se,Ye,$e]);F.set(Ve,Z),Z+=Ve.length}i.queue.writeBuffer(this.indices,0,F);const j=12,te=4,X=4*te,W=i.createBuffer({size:j*X,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM,label:"Wave Surface Displacement Waves"}),J=9.8,ue=60,fe=ue*ue*J/(2*Math.PI),Re=new Array({direction:Nt.create(.4,2),amplitude:.25,wavelength:fe/(12*12)},{direction:Nt.create(.6,2),amplitude:.3,wavelength:fe/(14*14)},{direction:Nt.create(.8,2),amplitude:.35,wavelength:fe/(12*12)},{direction:Nt.create(1,2),amplitude:.4,wavelength:fe/(16*16)},{direction:Nt.create(1.2,2),amplitude:.45,wavelength:fe/(12*12)},{direction:Nt.create(1.4,2),amplitude:.4,wavelength:fe/(14*14)},{direction:Nt.create(1.6,2),amplitude:.35,wavelength:fe/(12*12)},{direction:Nt.create(1.8,2),amplitude:.3,wavelength:fe/(16*16)},{direction:Nt.create(.8,1.5),amplitude:.02,wavelength:fe/(30*30)},{direction:Nt.create(1.1,1.5),amplitude:.02,wavelength:fe/(30*30)},{direction:Nt.create(1.2,1.5),amplitude:.02,wavelength:fe/(30*30)},{direction:Nt.create(1.3,1.5),amplitude:.02,wavelength:fe/(30*30)}),ke=new Float32Array(j*te);let De=0;Re.forEach(qe=>{ke.set(qe.direction,De),ke[De+2]=qe.amplitude,ke[De+3]=qe.wavelength,De+=4}),i.queue.writeBuffer(W,0,ke),this.settingsUBO=new u_(i);const Ne=i.createBindGroupLayout({label:"Wave Surface Displacement Group 2 Compute (Displacement Map)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,sampler:{type:"filtering"}},{binding:1,visibility:GPUShaderStage.VERTEX,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:2,visibility:GPUShaderStage.VERTEX,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:3,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.group1=i.createBindGroup({label:"Wave Surface Displacement Group 2 Compute (Displacement Map)",layout:Ne,entries:[{binding:0,resource:i.createSampler({label:"Wave Surface Displacement Group 2 Sampler",minFilter:"linear",magFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"})},{binding:1,resource:x.Dx_Dy_Dz_Dxdz_SpatialAllMips},{binding:2,resource:x.Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips},{binding:3,resource:{buffer:W}}]}),this.mipLevelCount=x.mipLevelCount;const Ie=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}],label:"Wave Surface Displacement Group 0"});this.group0=i.createBindGroup({layout:Ie,entries:[{binding:0,resource:{buffer:this.settingsUBO.buffer}},{binding:1,resource:{buffer:o.buffer}}],label:"Wave Surface Displacement Group 0"});const Fe=i.createShaderModule({code:l_,label:"Wave Surface Displacement"});this.oceanSurfaceRasterizationPipeline=i.createRenderPipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Ie,Ne]}),vertex:{module:Fe,entryPoint:"screenSpaceWarped"},fragment:{module:Fe,entryPoint:"rasterizationFragment",targets:[{format:f},{format:_}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},depthStencil:{format:w,depthWriteEnabled:!0,depthCompare:"less"},label:"Wave Surface Displacement Surface Rasterization"})}record(i,o,f,_,w){this.settingsUBO.data.patch_world_half_extent=_.fft?100:300,this.settingsUBO.data.b_gerstner=_.gerstner,this.settingsUBO.data.b_fft=_.fft,this.settingsUBO.writeToGPU(i.queue);const x=o.beginRenderPass({label:"Wave Surface Rasterization",colorAttachments:[{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:w.colorWithSurfaceWorldDepthInAlpha},{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:w.normalWithSurfaceJacobianInAlpha}],depthStencilAttachment:{view:w.depth,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"},timestampWrites:f!==void 0?{querySet:f.querySet,beginningOfPassWriteIndex:f.beginWriteIndex,endOfPassWriteIndex:f.endWriteIndex}:void 0});x.setPipeline(this.oceanSurfaceRasterizationPipeline),x.setBindGroup(0,this.group0),x.setBindGroup(1,this.group1),x.setIndexBuffer(this.indices,"uint32"),x.drawIndexed(this.baseIndexCount,1),x.end()}}const d_=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
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

@group(2) @binding(0) var gbuffer_color_with_surface_world_depth_in_alpha: texture_2d<f32>;
@group(2) @binding(1) var gbuffer_normal_with_surface_jacobian_in_alpha: texture_2d<f32>;

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
    subscattering_albedo: vec3<f32>,
    normal_reflectance: vec3<f32>,
//    occlusion: f32,
    specular_power: f32,
    metallic: f32,
};

fn convertPBRPropertiesWater(color: vec3<f32>, normal: vec3<f32>, surface_jacobian: f32) -> PBRTexel
{
    let metallic = 1.0;

	let foam_intensity = clamp(1.0 - surface_jacobian, 0.0, 1.0);

	let specular_power = 160.0;
    let roughness = mix(0.05, 1.0, foam_intensity);

    let WATER_DEEP_COLOR = 0.2 * vec3<f32>(16.0 / 255.0, 97.0 / 255.0, 171.0 / 255.0);
	let albedo = mix(WATER_DEEP_COLOR, vec3<f32>(1.0), foam_intensity);

    let dielectric_reflectance = vec3<f32>(0.04);
    let metallic_reflectance = vec3<f32>(0.5) * color / max3(color);

    let normal_reflectance = mix(mix(dielectric_reflectance, metallic_reflectance, metallic), vec3<f32>(1.0), foam_intensity);

    var texel = PBRTexel();
    texel.normal = normal;
    texel.subscattering_albedo = albedo;
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

    return material.subscattering_albedo / 3.14159265359;
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

/*
 * Wavelength independent factor of how much of the sun's radiance is visible in a given direction.
 * This varies between 0.0 and 1.0 as the sun moves above the horizon.
 */
fn sunFractionOfRadianceVisible(
    atmosphere: ptr<function, Atmosphere>,
	light: ptr<function, CelestialLight>,
	position: vec3<f32>,
    direction: vec3<f32>
) -> f32
{
    let sin_horizon: f32 = atmosphere.planet_radius_Mm / length(position);
    let cos_horizon: f32 = -safeSqrt(1.0 - sin_horizon * sin_horizon);
	let mu = dot(normalize(position), normalize(direction));
	let intersects_ground = mu < cos_horizon;

	let light_direction = normalize(-(*light).forward);

	let mu_light = dot(normalize(position), normalize(light_direction));

	let cos_light_radius = cos((*light).angular_radius);
	let sin_light_radius = safeSqrt(1.0 - cos_light_radius * cos_light_radius);

	let horizon_factor = smoothstep(-sin_light_radius, sin_light_radius, mu_light - cos_horizon);

	// theta is the angle subtended on the surface of the sun by our view direction.
	// theta varies from 0 when looking directly at light_direction, to ~90 degrees when looking at the very edge of the solar disk
	// This is an approximation, that is accurate since lights are very far away
	// Other lights like perhaps a moon should use another model
	let cos_direction_light = dot(normalize(direction), light_direction);
	let direction_factor = f32(cos_direction_light > cos_light_radius);

	return direction_factor * horizon_factor;
}

/*
 * Returns the luminance of a sun disk.
 * Due to dynamic range issues, this is not tied well to actual luminance and is meant to be composited on unobstructed views of the sky, or reflections from perfectly smooth surfaces.
 */
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
    let reflection_direction = reflect(normalize(direction), normalize(material.normal));

	let surface_transmittance_to_sun = sampleTransmittanceLUT_Ray(
		transmittance_lut,
        lut_sampler,
		atmosphere,
		surface_position,
		light_direction
	);

	light_luminance_transfer +=
		transmittance_to_surface
		* sampleSkyViewLUT(atmosphere, surface_position, reflection_direction)
		* computeFresnelPerfectReflection(material, reflection_direction);

	light_luminance_transfer +=
		transmittance_to_surface
		* surface_transmittance_to_sun
		* sunFractionOfRadianceVisible(atmosphere, light, surface_position, light_direction)
		* mix(
			specularBRDF(material, light_direction, -direction),
			diffuseBRDF(material),
			computeFresnelMicrofacet(material, light_direction, -direction)
		);

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
    let size = textureDimensions(gbuffer_color_with_surface_world_depth_in_alpha);
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

    let color_with_surface_world_depth_in_alpha = textureLoad(gbuffer_color_with_surface_world_depth_in_alpha, texel_coord, 0);
    let normal = textureLoad(gbuffer_normal_with_surface_jacobian_in_alpha, texel_coord, 0);

    let depth = color_with_surface_world_depth_in_alpha.a / METERS_PER_MM;

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
            let material: PBRTexel = convertPBRPropertiesWater(vec3<f32>(1.0), vec3<f32>(0.0,1.0,0.0), 1.0);
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
		let color = color_with_surface_world_depth_in_alpha.xyz;
        let material: PBRTexel = convertPBRPropertiesWater(color, normal.xyz, normal.w);
        luminance_transfer = sampleGeometryLuminance(&atmosphere, &light, material, origin, direction_world, depth, true);
    }

    let luminance = light.strength * light.color * luminance_transfer;

    let output = vec4<f32>(tonemapACES(luminance),1.0);

    textureStore(output_color, texel_coord, output);
}
`,hd="rgba16float";class f_{constructor(i,o,f,_,w,x,z){K(this,"group0Layout");K(this,"group1Layout");K(this,"lutSampler");K(this,"group0");K(this,"group1");K(this,"outputColor");K(this,"outputColorView");K(this,"pipeline");this.group0Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:hd}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:x?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:x?"float":"unfilterable-float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:x?"float":"unfilterable-float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:x?"float":"unfilterable-float",viewDimension:"2d"}}],label:"Atmosphere Camera Group 0"}),this.group1Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Atmosphere Camera Group 1"}),this.outputColor=i.createTexture({format:hd,size:{width:1,height:1},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Atmosphere Camera Output Color"}),this.outputColorView=this.outputColor.createView(),this.lutSampler=i.createSampler({label:"Atmosphere Camera LUT Sampler",magFilter:x?"linear":"nearest",minFilter:x?"linear":"nearest"}),this.group0=i.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:this.outputColorView},{binding:1,resource:this.lutSampler},{binding:2,resource:f},{binding:3,resource:_},{binding:4,resource:w}],label:"Atmosphere Camera Group 0"}),this.group1=i.createBindGroup({layout:this.group1Layout,entries:[{binding:0,resource:{buffer:z.buffer}}],label:"Atmosphere Camera Group 1"});const b=i.createShaderModule({code:d_,label:"Atmosphere Camera"});this.pipeline=i.createComputePipeline({compute:{module:b,entryPoint:"renderCompositedAtmosphere"},layout:i.createPipelineLayout({bindGroupLayouts:[this.group0Layout,this.group1Layout,o]}),label:"Atmosphere Camera"})}}const p_=`// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

@group(0) @binding(0) var b_texture: texture_2d<f32>;
@group(0) @binding(1) var b_sampler: sampler;

struct FullscreenQuadUBO
{
    color_gain: vec4<f32>,
    vertex_scale: vec4<f32>,
	padding0: vec3<f32>,
	mip_level: u32,
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
    let color = u_fullscreen_quad.color_gain * textureSampleLevel(b_texture, b_sampler, fragData.uv, f32(u_fullscreen_quad.mip_level));
    return vec4<f32>(color.xyz, 1.0);
}
`;class Id{constructor(){K(this,"color_gain",mr.create(1,1,1,1));K(this,"vertex_scale",mr.create(1,1,1,1));K(this,"padding0",It.create());K(this,"mip_level_u32",0)}}class h_ extends Pi{constructor(o){super(o,12,"Fullscreen Quad UBO");K(this,"data",new Id)}packed(){const o=new ArrayBuffer(this.buffer.size),f=new DataView(o);return new Float32Array(o).set(this.data.color_gain,0/4),new Float32Array(o).set(this.data.vertex_scale,16/4),f.setUint32(44,this.data.mip_level_u32,!0),o}}class m_{constructor(i,o){K(this,"group0Layout");K(this,"group0ByOutputTexture");K(this,"group0Sampler");K(this,"ubo");K(this,"fullscreenQuadIndexBuffer");K(this,"group1");K(this,"pipeline");const f=new Uint32Array([0,1,2,0,2,3]);this.fullscreenQuadIndexBuffer=i.createBuffer({size:f.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),i.queue.writeBuffer(this.fullscreenQuadIndexBuffer,0,f,0,f.length),this.group0Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"non-filtering"}}],label:"Fullscreen Quad Group 0"}),this.group0ByOutputTexture=new Map,this.group0Sampler=i.createSampler({magFilter:"nearest",minFilter:"nearest"}),this.ubo=new h_(i);const _=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}}],label:"Fullscreen Quad Group 1"});this.group1=i.createBindGroup({layout:_,entries:[{binding:0,resource:{buffer:this.ubo.buffer}}]});const w=i.createShaderModule({code:p_,label:"Fullscreen Quad"});this.pipeline=i.createRenderPipeline({vertex:{module:w,entryPoint:"vertex_main"},fragment:{module:w,entryPoint:"fragment_main",targets:[{format:o}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:i.createPipelineLayout({bindGroupLayouts:[this.group0Layout,_]}),label:"Fullscreen Quad"})}setView(i,o,f){this.group0ByOutputTexture.set(o,i.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:f},{binding:1,resource:this.group0Sampler}],label:`Fullscreen Quad Group 0 Texture '${f.label}'`}))}recordPresent(i,o,f,_,w,x){const z={r:0,g:0,b:0,a:1},b=this.group0ByOutputTexture.get(_);if(b===void 0){console.warn("FullscreenQuadPass: No texture to output.");return}const A=o.beginRenderPass({colorAttachments:[{clearValue:z,loadOp:"clear",storeOp:"store",view:f}],timestampWrites:x!==void 0?{querySet:x.querySet,beginningOfPassWriteIndex:x.beginWriteIndex,endOfPassWriteIndex:x.endWriteIndex}:void 0,label:"Fullscreen Pass"});A.setPipeline(this.pipeline),A.setIndexBuffer(this.fullscreenQuadIndexBuffer,"uint32",0,this.fullscreenQuadIndexBuffer.size),A.setBindGroup(0,b),this.ubo.data=w,this.ubo.writeToGPU(i.queue),A.setBindGroup(1,this.group1),A.drawIndexed(6,1,0,0,0),A.end()}}const Bo={width:2048,height:1024},Wo={width:1024,height:1024},Vo={width:1024,height:512};class qo{constructor(){K(this,"flip",!1);K(this,"colorGain",{r:1,g:1,b:1});K(this,"mipLevel",0)}}const __=[{id:Pe.Scene},{id:Pe.TransmittanceLUT,flip:!0},{id:Pe.MultiscatterLUT,flip:!0},{id:Pe.SkyviewLUT,colorGain:{r:8,g:8,b:8}},{id:Pe.GBufferColor},{id:Pe.GBufferNormal},{id:Pe.FFTWaveSpectrumGaussianNoise},{id:Pe.FFTWaveInitialAmplitude,colorGain:{r:100,g:100,b:100}},{id:Pe.FFTWaveDy_plus_iDxdz_Amplitude,colorGain:{r:100,g:100,b:100}},{id:Pe.FFTWaveDx_plus_iDz_Amplitude,colorGain:{r:100,g:100,b:100}},{id:Pe.FFTWaveDydx_plus_iDydz_Amplitude,colorGain:{r:100,g:100,b:100}},{id:Pe.FFTWaveDxdx_plus_iDzdz_Amplitude,colorGain:{r:100,g:100,b:100}},{id:Pe.FFTWaveDx_Dy_Dz_Dxdz_Spatial},{id:Pe.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial}],Ba=[.25,.3333,.5,.75,1,1.5,2,4];var $a=(a=>(a[a.DrawToDraw=0]="DrawToDraw",a[a.SkyviewLUT=1]="SkyviewLUT",a[a.FFTWaves=2]="FFTWaves",a[a.OceanSurface=3]="OceanSurface",a[a.AtmosphereCamera=4]="AtmosphereCamera",a[a.FullscreenQuad=5]="FullscreenQuad",a))($a||{});class md{constructor(i){K(this,"values");K(this,"sum",0);K(this,"average_",0);K(this,"count",0);K(this,"index",0);this.values=new Array(i).fill(0)}get average(){return this.average_}push(i){this.index>=this.values.length&&(this.index=0),this.index<this.count&&(this.sum-=this.values[this.index]),this.values[this.index]=i,this.sum+=i,this.count=Math.min(this.values.length,this.count+1),this.average_=this.sum/this.count,this.index+=1}}class g_{constructor(i,o,f){K(this,"transmittanceLUTPassResources");K(this,"multiscatterLUTPassResources");K(this,"skyviewLUTPassResources");K(this,"fftWaveSpectrumResources");K(this,"waveSurfaceDisplacementPassResources");K(this,"atmosphereCameraPassResources");K(this,"fullscreenQuadPassResources");K(this,"gbuffer");K(this,"scaledSize");K(this,"rawSize");K(this,"renderOutputs");K(this,"settings");K(this,"uiReadonly");K(this,"globalUBO");K(this,"device");K(this,"presentFormat");K(this,"quit",!1);K(this,"frametimeQuery");K(this,"frametimeAverages");K(this,"startTime");K(this,"dummyFrameCounter");K(this,"probationFrameCounter");K(this,"targetFPS",0);K(this,"float32Filterable");if(this.device=i,this.float32Filterable=i.features.has("float32-filterable"),this.presentFormat=o,this.startTime=f,this.settings={outputTexture:Pe.Scene,oceanWaveSettings:{gerstner:!0,fft:!0},renderOutputTransforms:new Map,pauseGlobalTime:!1,currentRenderOutputTransform:new qo,orbit:{timeHours:5.6,timeSpeedupFactor:400,paused:!1,reversed:!1,inclinationRadians:Math.PI/2,sunsetAzimuthRadians:0},renderScale:1.5},this.uiReadonly={averageFPS:0,frametimeControllers:new Map},this.scaledSize={width:1,height:1},this.rawSize={width:1,height:1},__.reduce((z,{id:b,...A})=>(z.set(b,{...new qo,...A}),z),this.settings.renderOutputTransforms),this.settings.renderOutputTransforms.has(this.settings.outputTexture)){const z=this.settings.renderOutputTransforms.get(this.settings.outputTexture);this.settings.currentRenderOutputTransform.flip=z.flip,this.settings.currentRenderOutputTransform.colorGain.r=z.colorGain.r,this.settings.currentRenderOutputTransform.colorGain.g=z.colorGain.g,this.settings.currentRenderOutputTransform.colorGain.b=z.colorGain.b}if(this.frametimeAverages=new Map,i.features.has("timestamp-query")){const b=2*Object.keys($a).map(A=>Number(A)).filter(isNaN).length;this.frametimeQuery={mappingLock:!1,querySet:i.createQuerySet({type:"timestamp",count:b}),writeBuffer:i.createBuffer({size:8*b,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE}),readBuffer:i.createBuffer({size:8*b,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})},Object.keys($a).map(A=>Number(A)).filter(A=>!isNaN(A)).forEach(A=>{const G=A;this.frametimeAverages.set(G,new md(400)),Object.assign(this.uiReadonly,String(G),0)})}else console.warn("WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages."),this.frametimeAverages.set(0,new md(400));this.dummyFrameCounter=10,this.probationFrameCounter=100,this.globalUBO=new Om(this.device),this.globalUBO.writeToGPU(this.device.queue),this.gbuffer=new od(i,{width:1,height:1}),this.transmittanceLUTPassResources=new qm(this.device,Bo,this.globalUBO),this.multiscatterLUTPassResources=new $m(this.device,Wo,this.transmittanceLUTPassResources.view,this.float32Filterable,this.globalUBO),this.skyviewLUTPassResources=new Qm(this.device,Vo,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.float32Filterable,this.globalUBO),this.fftWaveSpectrumResources=new o_(this.device,this.globalUBO);const _=this.fftWaveSpectrumResources.views();this.waveSurfaceDisplacementPassResources=new c_(this.device,this.globalUBO,this.gbuffer.colorWithSurfaceWorldDepthInAlpha.format,this.gbuffer.normalWithSurfaceJacobianInAlpha.format,this.gbuffer.depth.format,this.fftWaveSpectrumResources.displacementMaps()),this.atmosphereCameraPassResources=new f_(this.device,this.gbuffer.readGroupLayout,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.skyviewLUTPassResources.view,this.float32Filterable,this.globalUBO),this.fullscreenQuadPassResources=new m_(this.device,this.presentFormat),this.renderOutputs=new Map([[Pe.Scene,new At(this.atmosphereCameraPassResources.outputColor)],[Pe.TransmittanceLUT,new At(this.transmittanceLUTPassResources.texture)],[Pe.MultiscatterLUT,new At(this.multiscatterLUTPassResources.texture)],[Pe.SkyviewLUT,new At(this.skyviewLUTPassResources.texture)],[Pe.GBufferColor,new At(this.gbuffer.colorWithSurfaceWorldDepthInAlpha)],[Pe.GBufferNormal,new At(this.gbuffer.normalWithSurfaceJacobianInAlpha)],[Pe.FFTWaveSpectrumGaussianNoise,_.gaussianNoise],[Pe.FFTWaveInitialAmplitude,_.initialAmplitude],[Pe.FFTWaveDy_plus_iDxdz_Amplitude,_.Dy_Amplitude],[Pe.FFTWaveDx_plus_iDz_Amplitude,_.Dx_plus_iDz_Amplitude],[Pe.FFTWaveDydx_plus_iDydz_Amplitude,_.packed_Dydx_plus_iDydz_Amplitude],[Pe.FFTWaveDxdx_plus_iDzdz_Amplitude,_.packed_Dxdx_plus_iDzdz_Amplitude],[Pe.FFTWaveDx_Dy_Dz_Dxdz_Spatial,_.Dx_Dy_Dz_Dxdz_Spatial],[Pe.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial,_.Dydx_Dydz_Dxdx_Dzdz_Spatial]]);for(const[z,b]of this.renderOutputs)this.fullscreenQuadPassResources.setView(i,z,b.view);const w=i.createCommandEncoder();let x=w.beginComputePass();x.setPipeline(this.transmittanceLUTPassResources.pipeline),x.setBindGroup(0,this.transmittanceLUTPassResources.group0),x.setBindGroup(1,this.transmittanceLUTPassResources.group1),x.dispatchWorkgroups(Math.ceil(Bo.width/16),Math.ceil(Bo.height/16)),x.end(),x=w.beginComputePass(),x.setPipeline(this.multiscatterLUTPassResources.pipeline),x.setBindGroup(0,this.multiscatterLUTPassResources.group0),x.setBindGroup(1,this.multiscatterLUTPassResources.group1),x.dispatchWorkgroups(Math.ceil(Wo.width/16),Math.ceil(Wo.height/16)),x.end(),i.queue.submit([w.finish()])}setupUI(i){const o=i.add(this.settings,"outputTexture",{Scene:Pe.Scene,"Transmittance LUT":Pe.TransmittanceLUT,"Multiscatter LUT":Pe.MultiscatterLUT,"Skyview LUT":Pe.SkyviewLUT,"GBuffer Color":Pe.GBufferColor,"GBuffer Normal":Pe.GBufferNormal,"FFT Wave Gaussian Noise":Pe.FFTWaveSpectrumGaussianNoise,"FFT Wave Initial Amplitude":Pe.FFTWaveInitialAmplitude,"FFT Wave Frequency Domain (Dy + i*Dxdz)":Pe.FFTWaveDy_plus_iDxdz_Amplitude,"FFT Wave Frequency Domain (Dx + i*Dz)":Pe.FFTWaveDx_plus_iDz_Amplitude,"FFT Wave Frequency Domain (Dydx + i*Dydz)":Pe.FFTWaveDydx_plus_iDydz_Amplitude,"FFT Wave Frequency Domain (Dxdx + i*Dzdz)":Pe.FFTWaveDxdx_plus_iDzdz_Amplitude,"FFT Wave Spatial Domain (Dx, Dy, Dz, Dxdz)":Pe.FFTWaveDx_Dy_Dz_Dxdz_Spatial,"FFT Wave Spatial Domain (Dydx, Dydz, Dxdx, Dzdx)":Pe.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial}).name("Render Output").listen();i.add(this.settings,"renderScale",Ba).name("Render Resolution Scale").decimals(1).onFinishChange(G=>{this.handleResize(this.rawSize.width,this.rawSize.height)}).listen(),i.add(this.uiReadonly,"averageFPS").decimals(1).disable().name("Average FPS").listen(),i.add(this.settings.oceanWaveSettings,"gerstner").name("Gerstner Waves"),i.add(this.settings.oceanWaveSettings,"fft").name("FFT Accelerated Waves"),i.add(this.settings,"pauseGlobalTime").name("Pause Waves");const f=i.addFolder("Sun Parameters").open();f.add(this.settings.orbit,"timeHours").min(0).max(24).name("Time in Hours").listen(),f.add(this.settings.orbit,"timeSpeedupFactor").min(1).max(5e4).step(1).name("Time Multiplier"),f.add(this.settings.orbit,"paused").name("Pause Sun"),f.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?18+.5:6-.5}},"fn").name("Skip to Sunrise"),f.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?6+.5:18-.5}},"fn").name("Skip to Sunset"),f.add(this.settings.orbit,"reversed").name("Reverse Sun"),f.add(this.settings.orbit,"sunsetAzimuthRadians").name("Sun Azimuth").min(0).max(2*Math.PI),f.add(this.settings.orbit,"inclinationRadians").name("Sun Inclination").min(0).max(Math.PI);const _=i.addFolder("Output Transform").close();_.add(this.settings.currentRenderOutputTransform,"flip").name("Flip Image").listen();const w=_.add(this.settings.currentRenderOutputTransform,"mipLevel").min(0).max(0).step(1).name("Mip Level").listen();_.add({gain:0},"gain").name("RGB").min(0).max(100).onChange(G=>{this.settings.currentRenderOutputTransform.colorGain.r=G,this.settings.currentRenderOutputTransform.colorGain.g=G,this.settings.currentRenderOutputTransform.colorGain.b=G});const x=_.add(this.settings.currentRenderOutputTransform.colorGain,"r").name("R").min(0).max(100).listen(),z=_.add(this.settings.currentRenderOutputTransform.colorGain,"g").name("G").min(0).max(100).listen(),b=_.add(this.settings.currentRenderOutputTransform.colorGain,"b").name("B").min(0).max(100).listen();o.onChange(G=>{const O=o._listenPrevValue;this.settings.renderOutputTransforms.set(O,structuredClone(this.settings.currentRenderOutputTransform)),Object.assign(this.settings.currentRenderOutputTransform,structuredClone(this.settings.renderOutputTransforms.get(G)??new qo));const F=this.renderOutputs.get(G);w.max((F==null?void 0:F.mipLevelCount)??0),w.updateDisplay(),x.object=this.settings.currentRenderOutputTransform.colorGain,z.object=this.settings.currentRenderOutputTransform.colorGain,b.object=this.settings.currentRenderOutputTransform.colorGain});const A=i.addFolder("Performance").close();this.frametimeAverages.forEach((G,O)=>{this.uiReadonly.frametimeControllers.set(O,A.add({value:0},"value").name(`${$a[O]} (ms)`).decimals(6).disable())})}updateOrbit(i){const o=this.settings.orbit;this.settings.orbit.paused||(o.timeHours+=(o.reversed?-1:1)*o.timeSpeedupFactor*i/36e5,o.timeHours=o.timeHours-Math.floor(o.timeHours/24)*24);const f=2*Math.PI/24,_=(12-o.timeHours)*f,w=It.create(-Math.sin(o.sunsetAzimuthRadians),0,Math.cos(o.sunsetAzimuthRadians)),x=It.create(Math.cos(o.sunsetAzimuthRadians)*Math.cos(o.inclinationRadians),Math.sin(o.inclinationRadians),Math.sin(o.sunsetAzimuthRadians)*Math.cos(o.inclinationRadians)),z=It.add(It.scale(w,Math.sin(_)),It.scale(x,Math.cos(_)));It.scale(z,-1,this.globalUBO.data.light.forward)}updateFPSValues(i){var o,f,_,w;i>.01&&((o=this.frametimeAverages.get(0))==null||o.push(i),this.uiReadonly.averageFPS=1e3/(((f=this.frametimeAverages.get(0))==null?void 0:f.average)??1e3),(w=this.uiReadonly.frametimeControllers.get(0))==null||w.setValue(((_=this.frametimeAverages.get(0))==null?void 0:_.average)??-1))}updateCamera(i){const o=60*Math.PI/180,w=Kt.perspective(o,i,.1,1e3),x=[0,10,-20],z=Kt.lookAt(x,[0,0,400],[0,1,0]);Object.assign(this.globalUBO.data.camera,{invProj:Kt.inverse(w),invView:Kt.inverse(z),projView:Kt.mul(w,z),position:mr.create(x[0],x[1],x[2],1)})}updateTime(i){const o=this.globalUBO.data.time;this.settings.pauseGlobalTime||(o.timeSeconds+=i/1e3);const w=this.settings.oceanWaveSettings.fft?100:60;o.timeSeconds-=Math.floor(o.timeSeconds/w)*w}draw(i,o,f,_){if(this.dummyFrameCounter>0){this.dummyFrameCounter-=1;return}const w=i.createView();if(this.updateFPSValues(_),this.probationFrameCounter>49){this.probationFrameCounter-=1,this.probationFrameCounter<50&&(console.log(`Average FPS without load is ${this.uiReadonly.averageFPS}`),this.targetFPS=this.uiReadonly.averageFPS);return}if(this.probationFrameCounter>0&&(this.probationFrameCounter-=1,this.probationFrameCounter<1)){console.log(`Average FPS with load is ${this.uiReadonly.averageFPS}`);const O=this.uiReadonly.averageFPS/this.targetFPS;this.settings.renderScale=Ba[0],Ba.forEach(F=>{Math.abs(F-O)<Math.abs(this.settings.renderScale-O)&&(this.settings.renderScale=F)}),this.handleResize(this.rawSize.width,this.rawSize.height)}this.updateCamera(o),this.updateTime(_),this.updateOrbit(_),this.globalUBO.writeToGPU(this.device.queue);const x=this.device.createCommandEncoder({label:"Main"}),z=new Map;let b=0;z.set(2,b),this.fftWaveSpectrumResources.record(this.device,x,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:b++,endWriteIndex:b++}:void 0),z.set(3,b),this.waveSurfaceDisplacementPassResources.record(this.device,x,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:b++,endWriteIndex:b++}:void 0,{gerstner:this.settings.oceanWaveSettings.gerstner,fft:this.settings.oceanWaveSettings.fft},{colorWithSurfaceWorldDepthInAlpha:this.gbuffer.colorWithSurfaceWorldDepthInAlphaView,normalWithSurfaceJacobianInAlpha:this.gbuffer.normalWithSurfaceJacobianInAlphaView,depth:this.gbuffer.depthView}),z.set(1,b);const A=x.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:b++,endOfPassWriteIndex:b++}:void 0,label:"Skyview LUT"});A.setPipeline(this.skyviewLUTPassResources.pipeline),A.setBindGroup(0,this.skyviewLUTPassResources.group0),A.setBindGroup(1,this.skyviewLUTPassResources.group1),A.dispatchWorkgroups(Math.ceil(Vo.width/16),Math.ceil(Vo.height/(16*1.9))),A.end(),z.set(4,b);const G=x.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:b++,endOfPassWriteIndex:b++}:void 0,label:"Atmosphere Camera"});G.setPipeline(this.atmosphereCameraPassResources.pipeline),G.setBindGroup(0,this.atmosphereCameraPassResources.group0),G.setBindGroup(1,this.atmosphereCameraPassResources.group1),G.setBindGroup(2,this.gbuffer.readGroup),G.dispatchWorkgroups(Math.ceil(this.atmosphereCameraPassResources.outputColor.width/16),Math.ceil(this.atmosphereCameraPassResources.outputColor.height/16)),G.end();{const O=this.settings.currentRenderOutputTransform,F=new Id;F.color_gain=mr.create(O.colorGain.r,O.colorGain.g,O.colorGain.b,1),F.vertex_scale=mr.create(1,O.flip?-1:1,1,1),F.mip_level_u32=Math.round(O.mipLevel),z.set(5,b),this.fullscreenQuadPassResources.recordPresent(this.device,x,w,this.settings.outputTexture,F,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:b++,endWriteIndex:b++}:void 0)}if(this.frametimeQuery!=null&&!this.frametimeQuery.mappingLock&&(x.resolveQuerySet(this.frametimeQuery.querySet,0,2*z.size,this.frametimeQuery.writeBuffer,0),x.copyBufferToBuffer(this.frametimeQuery.writeBuffer,0,this.frametimeQuery.readBuffer,0,this.frametimeQuery.readBuffer.size)),this.device.queue.submit([x.finish()]),this.frametimeQuery!==void 0&&!this.frametimeQuery.mappingLock){const O=this.frametimeQuery;this.frametimeQuery.mappingLock=!0,this.frametimeQuery.readBuffer.mapAsync(GPUMapMode.READ,0,this.frametimeQuery.readBuffer.size).then(()=>{const F=new BigInt64Array(O.readBuffer.getMappedRange(0,O.readBuffer.size));z.forEach((Z,j)=>{var W,J,ue;const X=Number(F.at(Z+1)-F.at(Z))/1e6;(W=this.frametimeAverages.get(j))==null||W.push(X),(ue=this.uiReadonly.frametimeControllers.get(j))==null||ue.setValue(((J=this.frametimeAverages.get(j))==null?void 0:J.average)??-1)}),O.readBuffer.unmap(),O.mappingLock=!1}).catch(F=>{console.error("Failed while retrieving frametime values from GPU:"),console.error(F)})}}handleResize(i,o){const f={width:i*this.settings.renderScale,height:o*this.settings.renderScale},_=8192,w=268435456,x=16,z=(b,A)=>b<_&&A<_&&b*A*x<w;z(f.width,f.height)?this.scaledSize=f:(Ba.slice().reverse().some(b=>{if(z(i*b,o*b))return this.settings.renderScale=b,!0}),console.warn(`During resize: Texture size (${f.width},${f.height}) exceeds WebGPU guaranteed limit (8192, 8192).
								Defaulting to highest possible render scale of ${this.settings.renderScale}`),this.scaledSize={width:i*this.settings.renderScale,height:o*this.settings.renderScale}),console.log(`Resizing to (${this.scaledSize.width},${this.scaledSize.height})`),this.rawSize={width:i,height:o},this.gbuffer=new od(this.device,this.scaledSize,this.gbuffer),this.renderOutputs.set(Pe.GBufferColor,new At(this.gbuffer.colorWithSurfaceWorldDepthInAlpha)),this.renderOutputs.set(Pe.GBufferNormal,new At(this.gbuffer.normalWithSurfaceJacobianInAlpha)),this.atmosphereCameraPassResources.outputColor=this.device.createTexture({format:this.atmosphereCameraPassResources.outputColor.format,size:this.scaledSize,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.atmosphereCameraPassResources.outputColorView=this.atmosphereCameraPassResources.outputColor.createView(),this.renderOutputs.set(Pe.Scene,new At(this.atmosphereCameraPassResources.outputColor)),this.atmosphereCameraPassResources.group0=this.device.createBindGroup({layout:this.atmosphereCameraPassResources.group0Layout,entries:[{binding:0,resource:this.atmosphereCameraPassResources.outputColorView},{binding:1,resource:this.atmosphereCameraPassResources.lutSampler},{binding:2,resource:this.transmittanceLUTPassResources.view},{binding:3,resource:this.multiscatterLUTPassResources.view},{binding:4,resource:this.skyviewLUTPassResources.view}],label:"Atmosphere Camera Group 0"}),this.renderOutputs.forEach((b,A)=>{this.fullscreenQuadPassResources.setView(this.device,A,b.view)})}}const v_=(a,i,o)=>new g_(a,i,o),y_="hello-cube",Fd={name:"Hello Cube",requiredLimits:new Map,requiredFeatures:new Set,optionalFeatures:new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]),description:"Tests WebGPU functionality with a simple spinning cube.",create:Em},Qa=new Map([[y_,Fd],["sky-sea",{name:"Sky and Sea",description:"Real-time rendering of a dynamic sun over the open ocean, with various models for surface waves and raymarched atmospheric scattering.",requiredLimits:new Map([["maxStorageTexturesPerShaderStage",8]]),requiredFeatures:new Set,optionalFeatures:new Set(["timestamp-query","float32-filterable"]),create:v_}]]),w_=ce.jsx("a",{target:"_blank",rel:"noreferrer",href:"mailto:estelle.booher@gmail.com",children:"estelle.booher@gmail.com"}),x_=ce.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/EllarBooher",children:"https://github.com/EllarBooher"}),Wa=Y.memo(function({hyperlink:i,thumbnailAssets:o=[],thumbnailAltTexts:f,title:_="PLACEHOLDER TITLE",description:w="PLACEHOLDER DESCRIPTION"}){const x=ce.jsx("div",{className:"display-card-thumbnails",children:o.map((z,b)=>ce.jsx("div",{className:"display-card-thumbnail",children:ce.jsx("img",{className:"display-card-image",src:z.toString(),alt:f[b]??null})},z.toString()))});return ce.jsxs(tr,{className:"nav-card",to:i,children:[ce.jsx("h2",{children:_}),ce.jsx("p",{children:w}),x]})});function S_(){const a=[];Qa.forEach((f,_)=>{a.push(ce.jsx(Wa,{hyperlink:`/webgpu-samples?sample=${_}`,externalLink:!1,thumbnailAssets:[],thumbnailAltTexts:[],title:f.name,description:f.description},_))});const i=[ce.jsx(Wa,{hyperlink:"https://github.com/EllarBooher/Syzygy",thumbnailAssets:[new URL("/assets/syzygy1-CItzHwJc.png",import.meta.url)],thumbnailAltTexts:["A computer rendered sun rises over chess pieces. Application interface elements appear to the left and bottom."],title:"Syzygy",description:`
                A sandbox renderer I started to study C++ and Vulkan.
                It aims to be a testbed of various features and techniques.
            `},"Syzygy"),ce.jsx(Wa,{hyperlink:"https://github.com/EllarBooher/VulkanTemplate/tree/SSAO",thumbnailAssets:[new URL("/assets/ssao1-8Qfbb4oF.png",import.meta.url)],thumbnailAltTexts:["A computer rendered building, with various decorations such as banners and pillars. Only the shadows are visible, with no color information."],title:"SSAO",description:`
                An implementation of Screen-Space Ambient Occlusion written in C++ with Vulkan.
            `},"SSAO")],o=[ce.jsx(Wa,{hyperlink:"https://ellarbooher.itch.io/snail-blazer",thumbnailAssets:[new URL("/assets/snailblazer1-Bl1793QZ.png",import.meta.url),new URL("/assets/snailblazer2-CU4gYciB.png",import.meta.url)],thumbnailAltTexts:["A smirking cartoon character with yellow hair faces off against a grimacing cartoon character with blue hair. In the middle is an arena filled with magma and colorful battle effects.","A crying cartoon character with yellow hair faces off against a scowling cartoon character with blue hair. In the middle is an arena filled with magma and colorful battle effects."],title:"Snail Blazer",description:`
                A short bullet-hell made for the Bullet Hell Jam 2023 on itch.io.
                The player primarily moves via grappling on enemy projectiles and the environment,
                instead of the conventional WASD-style of movement.
            `},"Snail Blazer")];return ce.jsxs(ce.Fragment,{children:[ce.jsxs("main",{className:"landing-main",children:[ce.jsx("h1",{className:"visuallyhidden",children:"Portfolio Landing Page"}),ce.jsx("p",{children:"Hello, my name is Estelle Booher. My passion is realtime rendering and engine infrastructure, and I am actively working on building a portfolio and career in computer graphics. This website is a landing spot where I will host links to various projects of mine."}),ce.jsxs("p",{children:["My github is at ",x_,", where I host the source code of my projects including this website."]}),ce.jsxs("p",{children:["To contact me, please email at ",w_,"."]}),ce.jsx("h2",{children:"In-Browser WebGPU Samples"}),ce.jsx("nav",{className:"display-grid","aria-label":"WebGPU Samples",children:a}),ce.jsx("h2",{children:"Offline Computer Graphics"}),ce.jsx("nav",{className:"display-grid","aria-label":"Offline Computer Graphics",children:i}),ce.jsx("h2",{children:"Video Games"}),ce.jsx("nav",{className:"display-grid","aria-label":"Video Games",children:o})]}),ce.jsx("footer",{style:{padding:"1em"},children:"All works present are copyrighted, unless provided with external attributions or license."})]})}async function T_(a,i,o){if(console.log("Starting WebGPU"),!("gpu"in navigator))return Promise.reject(new Error("WebGPU is not available in this browser.",{cause:new Error("navigator.gpu is null")}));const f=navigator.gpu.requestAdapter().then(w=>w?Promise.resolve(w):Promise.reject(new Error("Requested WebGPU Adapter is not available."))).catch(w=>Promise.reject(new Error("Unable to get WebGPU Adapter",{cause:w}))),_=f.then(w=>{const x=Array.from(a.values()).filter(O=>w.features.has(O));if(x.length!=a.size){const O=`Required features unavailable: ${Array.from(a.values()).filter(F=>!w.features.has(F)).map(F=>`'${F}'`).join(",")}`;return Promise.reject(new Error("Unable to get WebGPU Device",{cause:O}))}const z=x.concat(...Array.from(i.values()).filter(O=>w.features.has(O)));console.log(`Enabling features: '${z.join("', '")}'`);const b=new Map,A=new Array;for(const[O,F]of o.entries()){const Z=w.limits[O];Z>=F?b.set(O,F):A.push({name:O,requestedMinimum:F,supported:Z})}if(b.size<o.size){const O=`Required limits unsatisfied: ${A.map(F=>`( name: '${F.name}' supported: '${F.supported}' requested: '${F.requestedMinimum}' )`).join(",")}`;return Promise.reject(new Error("Unable to get WebGPU Device",{cause:O}))}const G={};for(const[O,F]of b)G[O]=F;return w.requestDevice({requiredFeatures:z,requiredLimits:G}).catch(O=>Promise.reject(new Error("Unable to get WebGPU Device",{cause:O})))});return Promise.all([f,_]).then(w=>{const[x,z]=w;return{adapter:x,device:z}})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class xn{constructor(i,o,f,_,w="div"){this.parent=i,this.object=o,this.property=f,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(w),this.domElement.classList.add("controller"),this.domElement.classList.add(_),this.$name=document.createElement("div"),this.$name.classList.add("name"),xn.nextNameID=xn.nextNameID||0,this.$name.id=`lil-gui-name-${++xn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",x=>x.stopPropagation()),this.domElement.addEventListener("keyup",x=>x.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(f)}name(i){return this._name=i,this.$name.textContent=i,this}onChange(i){return this._onChange=i,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(i=!0){return this.disable(!i)}disable(i=!0){return i===this._disabled?this:(this._disabled=i,this.domElement.classList.toggle("disabled",i),this.$disable.toggleAttribute("disabled",i),this)}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(i){const o=this.parent.add(this.object,this.property,i);return o.name(this._name),this.destroy(),o}min(i){return this}max(i){return this}step(i){return this}decimals(i){return this}listen(i=!0){return this._listening=i,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const i=this.save();i!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=i}getValue(){return this.object[this.property]}setValue(i){return this.getValue()!==i&&(this.object[this.property]=i,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(i){return this.setValue(i),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class E_ extends xn{constructor(i,o,f){super(i,o,f,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Yo(a){let i,o;return(i=a.match(/(#|0x)?([a-f0-9]{6})/i))?o=i[2]:(i=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?o=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(o=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),o?"#"+o:!1}const b_={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:Yo,toHexString:Yo},Di={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},M_={isPrimitive:!1,match:a=>Array.isArray(a),fromHexString(a,i,o=1){const f=Di.fromHexString(a);i[0]=(f>>16&255)/255*o,i[1]=(f>>8&255)/255*o,i[2]=(f&255)/255*o},toHexString([a,i,o],f=1){f=255/f;const _=a*f<<16^i*f<<8^o*f<<0;return Di.toHexString(_)}},D_={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,i,o=1){const f=Di.fromHexString(a);i.r=(f>>16&255)/255*o,i.g=(f>>8&255)/255*o,i.b=(f&255)/255*o},toHexString({r:a,g:i,b:o},f=1){f=255/f;const _=a*f<<16^i*f<<8^o*f<<0;return Di.toHexString(_)}},z_=[b_,Di,M_,D_];function A_(a){return z_.find(i=>i.match(a))}class P_ extends xn{constructor(i,o,f,_){super(i,o,f,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=A_(this.initialValue),this._rgbScale=_,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const w=Yo(this.$text.value);w&&this._setValueFromHexString(w)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(i){if(this._format.isPrimitive){const o=this._format.fromHexString(i);this.setValue(o)}else this._format.fromHexString(i,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(i){return this._setValueFromHexString(i),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ho extends xn{constructor(i,o,f){super(i,o,f,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",_=>{_.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class R_ extends xn{constructor(i,o,f,_,w,x){super(i,o,f,"number"),this._initInput(),this.min(_),this.max(w);const z=x!==void 0;this.step(z?x:this._getImplicitStep(),z),this.updateDisplay()}decimals(i){return this._decimals=i,this.updateDisplay(),this}min(i){return this._min=i,this._onUpdateMinMax(),this}max(i){return this._max=i,this._onUpdateMinMax(),this}step(i,o=!0){return this._step=i,this._stepExplicit=o,this}updateDisplay(){const i=this.getValue();if(this._hasSlider){let o=(i-this._min)/(this._max-this._min);o=Math.max(0,Math.min(o,1)),this.$fill.style.width=o*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?i:i.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const o=()=>{let J=parseFloat(this.$input.value);isNaN(J)||(this._stepExplicit&&(J=this._snap(J)),this.setValue(this._clamp(J)))},f=J=>{const ue=parseFloat(this.$input.value);isNaN(ue)||(this._snapClampSetValue(ue+J),this.$input.value=this.getValue())},_=J=>{J.key==="Enter"&&this.$input.blur(),J.code==="ArrowUp"&&(J.preventDefault(),f(this._step*this._arrowKeyMultiplier(J))),J.code==="ArrowDown"&&(J.preventDefault(),f(this._step*this._arrowKeyMultiplier(J)*-1))},w=J=>{this._inputFocused&&(J.preventDefault(),f(this._step*this._normalizeMouseWheel(J)))};let x=!1,z,b,A,G,O;const F=5,Z=J=>{z=J.clientX,b=A=J.clientY,x=!0,G=this.getValue(),O=0,window.addEventListener("mousemove",j),window.addEventListener("mouseup",te)},j=J=>{if(x){const ue=J.clientX-z,fe=J.clientY-b;Math.abs(fe)>F?(J.preventDefault(),this.$input.blur(),x=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(ue)>F&&te()}if(!x){const ue=J.clientY-A;O-=ue*this._step*this._arrowKeyMultiplier(J),G+O>this._max?O=this._max-G:G+O<this._min&&(O=this._min-G),this._snapClampSetValue(G+O)}A=J.clientY},te=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",te)},X=()=>{this._inputFocused=!0},W=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",o),this.$input.addEventListener("keydown",_),this.$input.addEventListener("wheel",w,{passive:!1}),this.$input.addEventListener("mousedown",Z),this.$input.addEventListener("focus",X),this.$input.addEventListener("blur",W)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const i=(W,J,ue,fe,Re)=>(W-J)/(ue-J)*(Re-fe)+fe,o=W=>{const J=this.$slider.getBoundingClientRect();let ue=i(W,J.left,J.right,this._min,this._max);this._snapClampSetValue(ue)},f=W=>{this._setDraggingStyle(!0),o(W.clientX),window.addEventListener("mousemove",_),window.addEventListener("mouseup",w)},_=W=>{o(W.clientX)},w=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",w)};let x=!1,z,b;const A=W=>{W.preventDefault(),this._setDraggingStyle(!0),o(W.touches[0].clientX),x=!1},G=W=>{W.touches.length>1||(this._hasScrollBar?(z=W.touches[0].clientX,b=W.touches[0].clientY,x=!0):A(W),window.addEventListener("touchmove",O,{passive:!1}),window.addEventListener("touchend",F))},O=W=>{if(x){const J=W.touches[0].clientX-z,ue=W.touches[0].clientY-b;Math.abs(J)>Math.abs(ue)?A(W):(window.removeEventListener("touchmove",O),window.removeEventListener("touchend",F))}else W.preventDefault(),o(W.touches[0].clientX)},F=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",O),window.removeEventListener("touchend",F)},Z=this._callOnFinishChange.bind(this),j=400;let te;const X=W=>{if(Math.abs(W.deltaX)<Math.abs(W.deltaY)&&this._hasScrollBar)return;W.preventDefault();const ue=this._normalizeMouseWheel(W)*this._step;this._snapClampSetValue(this.getValue()+ue),this.$input.value=this.getValue(),clearTimeout(te),te=setTimeout(Z,j)};this.$slider.addEventListener("mousedown",f),this.$slider.addEventListener("touchstart",G,{passive:!1}),this.$slider.addEventListener("wheel",X,{passive:!1})}_setDraggingStyle(i,o="horizontal"){this.$slider&&this.$slider.classList.toggle("active",i),document.body.classList.toggle("lil-gui-dragging",i),document.body.classList.toggle(`lil-gui-${o}`,i)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(i){let{deltaX:o,deltaY:f}=i;return Math.floor(i.deltaY)!==i.deltaY&&i.wheelDelta&&(o=0,f=-i.wheelDelta/120,f*=this._stepExplicit?1:10),o+-f}_arrowKeyMultiplier(i){let o=this._stepExplicit?1:10;return i.shiftKey?o*=10:i.altKey&&(o/=10),o}_snap(i){let o=0;return this._hasMin?o=this._min:this._hasMax&&(o=this._max),i-=o,i=Math.round(i/this._step)*this._step,i+=o,i=parseFloat(i.toPrecision(15)),i}_clamp(i){return i<this._min&&(i=this._min),i>this._max&&(i=this._max),i}_snapClampSetValue(i){this.setValue(this._clamp(this._snap(i)))}get _hasScrollBar(){const i=this.parent.root.$children;return i.scrollHeight>i.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class L_ extends xn{constructor(i,o,f,_){super(i,o,f,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(_)}options(i){return this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this.$select.replaceChildren(),this._names.forEach(o=>{const f=document.createElement("option");f.textContent=o,this.$select.appendChild(f)}),this.updateDisplay(),this}updateDisplay(){const i=this.getValue(),o=this._values.indexOf(i);return this.$select.selectedIndex=o,this.$display.textContent=o===-1?i:this._names[o],this}}class U_ extends xn{constructor(i,o,f){super(i,o,f,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",_=>{_.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var C_=`.lil-gui {
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
}`;function k_(a){const i=document.createElement("style");i.innerHTML=a;const o=document.querySelector("head link[rel=stylesheet], head style");o?document.head.insertBefore(i,o):document.head.appendChild(i)}let _d=!1;class sl{constructor({parent:i,autoPlace:o=i===void 0,container:f,width:_,title:w="Controls",closeFolders:x=!1,injectStyles:z=!0,touchStyles:b=!0}={}){if(this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(w),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),b&&this.domElement.classList.add("allow-touch-styles"),!_d&&z&&(k_(C_),_d=!0),f?f.appendChild(this.domElement):o&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),_&&this.domElement.style.setProperty("--width",_+"px"),this._closeFolders=x}add(i,o,f,_,w){if(Object(f)===f)return new L_(this,i,o,f);const x=i[o];switch(typeof x){case"number":return new R_(this,i,o,f,_,w);case"boolean":return new E_(this,i,o);case"string":return new U_(this,i,o);case"function":return new Ho(this,i,o)}console.error(`gui.add failed
	property:`,o,`
	object:`,i,`
	value:`,x)}addColor(i,o,f=1){return new P_(this,i,o,f)}addFolder(i){const o=new sl({parent:this,title:i});return this.root._closeFolders&&o.close(),o}load(i,o=!0){return i.controllers&&this.controllers.forEach(f=>{f instanceof Ho||f._name in i.controllers&&f.load(i.controllers[f._name])}),o&&i.folders&&this.folders.forEach(f=>{f._title in i.folders&&f.load(i.folders[f._title])}),this}save(i=!0){const o={controllers:{},folders:{}};return this.controllers.forEach(f=>{if(!(f instanceof Ho)){if(f._name in o.controllers)throw new Error(`Cannot save GUI with duplicate property "${f._name}"`);o.controllers[f._name]=f.save()}}),i&&this.folders.forEach(f=>{if(f._title in o.folders)throw new Error(`Cannot save GUI with duplicate folder "${f._title}"`);o.folders[f._title]=f.save()}),o}open(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(i){this._closed!==i&&(this._closed=i,this._callOnOpenClose(this))}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const o=this.$children.clientHeight;this.$children.style.height=o+"px",this.domElement.classList.add("transition");const f=w=>{w.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",f))};this.$children.addEventListener("transitionend",f);const _=i?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!i),requestAnimationFrame(()=>{this.$children.style.height=_+"px"})}),this}title(i){return this._title=i,this.$title.textContent=i,this}reset(i=!0){return(i?this.controllersRecursive():this.controllers).forEach(f=>f.reset()),this}onChange(i){return this._onChange=i,this}_callOnChange(i){this.parent&&this.parent._callOnChange(i),this._onChange!==void 0&&this._onChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(i){this.parent&&this.parent._callOnFinishChange(i),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onOpenClose(i){return this._onOpenClose=i,this}_callOnOpenClose(i){this.parent&&this.parent._callOnOpenClose(i),this._onOpenClose!==void 0&&this._onOpenClose.call(this,i)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(i=>i.destroy())}controllersRecursive(){let i=Array.from(this.controllers);return this.folders.forEach(o=>{i=i.concat(o.controllersRecursive())}),i}foldersRecursive(){let i=Array.from(this.folders);return this.folders.forEach(o=>{i=i.concat(o.foldersRecursive())}),i}}const I_=function({app:i}){const o=Y.useRef(),f=Y.useRef(null),_=Y.useRef(null),w=Y.useRef(),x=Y.useRef(),z=Y.useCallback(()=>{var G;const A=f.current;if(A){const O=window.devicePixelRatio;A.width=A.offsetWidth*O,A.height=A.offsetHeight*O,(G=i.handleResize)==null||G.call(i,A.width,A.height)}},[i]);Y.useEffect(()=>(z(),window.addEventListener("resize",z),()=>{window.removeEventListener("resize",z)}),[z]);const b=Y.useCallback(A=>{var O;const G=(O=f.current)==null?void 0:O.getContext("webgpu");if(G){const F=A-(x.current?x.current:0);x.current=A;const Z=G.getCurrentTexture();i.draw(Z,f.current.width/f.current.height,A,F),i.quit||(o.current=requestAnimationFrame(b))}},[i]);return Y.useEffect(()=>{var G,O;const A=(G=f.current)==null?void 0:G.getContext("webgpu");if(w.current&&((O=w.current)==null||O.destroy()),i.setupUI&&(w.current=new sl({container:_.current}),i.setupUI(w.current)),!A){console.error("'webgpu' canvas context not found, cannot animate.");return}return A.configure({device:i.device,format:i.presentFormat}),o.current=requestAnimationFrame(b),()=>{o.current!==void 0&&cancelAnimationFrame(o.current)}},[b,i]),ce.jsxs("div",{className:"canvas-container",children:[ce.jsx("canvas",{className:"sample-canvas",ref:f}),ce.jsx("div",{className:"gui-pane",ref:_})]})},F_=function({sample:i}){const[o,f]=Y.useState(),_=Y.useRef(),w=Y.useRef(),[x,z]=Y.useState(!1),b=Y.useCallback(()=>{_.current&&(_.current.quit=!0)},[]),A=Y.useCallback((Z,j)=>{_.current&&b(),console.log("Got WebGPU device, initializing sample app."),j.lost.then(X=>{console.log(`WebGPU device lost - ("${X.reason}"):
 ${X.message}`)},X=>{throw new Error("WebGPU device lost rejected",{cause:X})}),j.onuncapturederror=X=>{console.error(`WebGPU device uncaptured error: ${X.error.message}`),f([X.error.message]),b()};const te=navigator.gpu.getPreferredCanvasFormat();_.current=i.create(j,te,performance.now()),console.log("Finished initializing app.")},[i,b]);Y.useEffect(()=>{w.current||(z(!1),f(void 0),w.current=T_(i.requiredFeatures,i.optionalFeatures,i.requiredLimits).then(({adapter:Z,device:j})=>A(Z,j),Z=>{var j,te;console.error(Z),f([Z.message,((te=(j=Z.cause)==null?void 0:j.toString)==null?void 0:te.call(j))??"Unknown Cause"]),_.current=void 0,z(!1)}).finally(()=>{w.current=void 0,z(!0)}))},[i,A]);const G=ce.jsxs(ce.Fragment,{children:[ce.jsx("p",{children:`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.`}),ce.jsx("ol",{className:"sample-errors",children:o==null?void 0:o.map(Z=>ce.jsx("li",{children:Z},Z))})]}),O=ce.jsx("p",{children:"Loading..."}),F=ce.jsx("div",{className:"sample-text",children:o?G:O});return ce.jsx(ce.Fragment,{children:x&&_.current?ce.jsx(I_,{app:_.current}):F})},O_=Y.memo(function(){const[i,o]=Ld(),f=[],_=[];Qa.forEach((b,A)=>{const G=`/webgpu-samples?sample=${A}`;f.push(ce.jsx("li",{children:ce.jsx(tr,{to:G,children:b.name},A)},A)),_.push(ce.jsxs(tr,{className:"nav-card",to:G,children:[ce.jsx("h2",{children:b.name}),ce.jsx("p",{children:b.description})]},A))});const w=i.get("sample"),x=w?Qa.get(w):void 0;if(w&&!x&&(i.delete("sample"),o(i)),x==null)return ce.jsx("main",{className:"sample",children:ce.jsxs("div",{className:"sample-text",children:[ce.jsx("h1",{children:"WebGPU Samples"}),ce.jsx("nav",{"aria-label":"WebGPU Samples",className:"nav-card-container",children:_})]})});const z=ce.jsxs("nav",{"aria-label":"WebGPU Samples",className:"sample-sidebar",children:[ce.jsx("h2",{children:"Samples"}),ce.jsx("hr",{}),ce.jsx("ul",{children:f})]});return ce.jsxs("main",{className:"sample",children:[ce.jsx("h1",{className:"visuallyhidden",children:"WebGPU Animated Sample"}),z,ce.jsx(F_,{sample:x})]})}),gd=new Map([["","Estelle Booher"],["webgpu-samples","WebGPU Samples"]]),N_=Y.memo(function(){var x;const i=Tn(),[o,f]=Ld(),_=[ce.jsx(tr,{to:"/",children:gd.get("")},"root")];if(i.pathname!="/"){const z=i.pathname.substring(1).split("/");let b="/";_.push(...z.map((A,G)=>{const O=gd.get(A),F=G>0?"/":"";return b=b.concat(`${F}${A}`),ce.jsxs(Y.Fragment,{children:[" > ",ce.jsx(tr,{to:b,children:O||A})]},b)}))}const w=o.get("sample");return w&&i.pathname=="/webgpu-samples"&&_.push(ce.jsxs(Y.Fragment,{children:[" > ",ce.jsx(tr,{to:i.pathname+i.search,children:((x=Qa.get(w))==null?void 0:x.name)??Fd.name})]},"sample-caboose")),ce.jsx("nav",{className:"main-nav","aria-label":"Main",children:_})});vd();const G_=document.getElementById("root");Fp.createRoot(G_).render(ce.jsx(Y.StrictMode,{children:ce.jsxs(Zh,{children:[!1,ce.jsx(N_,{}),ce.jsxs(zh,{children:[ce.jsx(Va,{index:!0,element:ce.jsx(S_,{})}),ce.jsx(Va,{path:"webgpu-samples",element:ce.jsx(O_,{})}),ce.jsx(Va,{path:"*",element:ce.jsx(Mh,{to:"/",replace:!0})})]})]})}));
