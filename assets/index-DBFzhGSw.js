var gh=Object.defineProperty;var vh=(i,o,u)=>o in i?gh(i,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[o]=u;var Le=(i,o,u)=>vh(i,typeof o!="symbol"?o+"":o,u);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))y(_);new MutationObserver(_=>{for(const w of _)if(w.type==="childList")for(const E of w.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&y(E)}).observe(document,{childList:!0,subtree:!0});function u(_){const w={};return _.integrity&&(w.integrity=_.integrity),_.referrerPolicy&&(w.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?w.credentials="include":_.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function y(_){if(_.ep)return;_.ep=!0;const w=u(_);fetch(_.href,w)}})();var Aa={exports:{}},yi={},Pa={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc;function yh(){if(kc)return be;kc=1;var i=Symbol.for("react.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),E=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),Z=Symbol.iterator;function $(O){return O===null||typeof O!="object"?null:(O=Z&&O[Z]||O["@@iterator"],typeof O=="function"?O:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,K={};function J(O,ee,Te){this.props=O,this.context=ee,this.refs=K,this.updater=Te||te}J.prototype.isReactComponent={},J.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},J.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function W(){}W.prototype=J.prototype;function Q(O,ee,Te){this.props=O,this.context=ee,this.refs=K,this.updater=Te||te}var le=Q.prototype=new W;le.constructor=Q,X(le,J.prototype),le.isPureReactComponent=!0;var _e=Array.isArray,ze=Object.prototype.hasOwnProperty,De={current:null},Ne={key:!0,ref:!0,__self:!0,__source:!0};function He(O,ee,Te){var we,Ce={},Pe=null,f=null;if(ee!=null)for(we in ee.ref!==void 0&&(f=ee.ref),ee.key!==void 0&&(Pe=""+ee.key),ee)ze.call(ee,we)&&!Ne.hasOwnProperty(we)&&(Ce[we]=ee[we]);var R=arguments.length-2;if(R===1)Ce.children=Te;else if(1<R){for(var d=Array(R),p=0;p<R;p++)d[p]=arguments[p+2];Ce.children=d}if(O&&O.defaultProps)for(we in R=O.defaultProps,R)Ce[we]===void 0&&(Ce[we]=R[we]);return{$$typeof:i,type:O,key:Pe,ref:f,props:Ce,_owner:De.current}}function Fe(O,ee){return{$$typeof:i,type:O.type,key:ee,ref:O.ref,props:O.props,_owner:O._owner}}function Be(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function et(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Te){return ee[Te]})}var Ee=/\/+/g;function Ue(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?et(""+O.key):ee.toString(36)}function Re(O,ee,Te,we,Ce){var Pe=typeof O;(Pe==="undefined"||Pe==="boolean")&&(O=null);var f=!1;if(O===null)f=!0;else switch(Pe){case"string":case"number":f=!0;break;case"object":switch(O.$$typeof){case i:case o:f=!0}}if(f)return f=O,Ce=Ce(f),O=we===""?"."+Ue(f,0):we,_e(Ce)?(Te="",O!=null&&(Te=O.replace(Ee,"$&/")+"/"),Re(Ce,ee,Te,"",function(p){return p})):Ce!=null&&(Be(Ce)&&(Ce=Fe(Ce,Te+(!Ce.key||f&&f.key===Ce.key?"":(""+Ce.key).replace(Ee,"$&/")+"/")+O)),ee.push(Ce)),1;if(f=0,we=we===""?".":we+":",_e(O))for(var R=0;R<O.length;R++){Pe=O[R];var d=we+Ue(Pe,R);f+=Re(Pe,ee,Te,d,Ce)}else if(d=$(O),typeof d=="function")for(O=d.call(O),R=0;!(Pe=O.next()).done;)Pe=Pe.value,d=we+Ue(Pe,R++),f+=Re(Pe,ee,Te,d,Ce);else if(Pe==="object")throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return f}function ot(O,ee,Te){if(O==null)return O;var we=[],Ce=0;return Re(O,we,"","",function(Pe){return ee.call(Te,Pe,Ce++)}),we}function qe(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(Te){(O._status===0||O._status===-1)&&(O._status=1,O._result=Te)},function(Te){(O._status===0||O._status===-1)&&(O._status=2,O._result=Te)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var Ge={current:null},ae={transition:null},ge={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:ae,ReactCurrentOwner:De};function se(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:ot,forEach:function(O,ee,Te){ot(O,function(){ee.apply(this,arguments)},Te)},count:function(O){var ee=0;return ot(O,function(){ee++}),ee},toArray:function(O){return ot(O,function(ee){return ee})||[]},only:function(O){if(!Be(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},be.Component=J,be.Fragment=u,be.Profiler=_,be.PureComponent=Q,be.StrictMode=y,be.Suspense=P,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,be.act=se,be.cloneElement=function(O,ee,Te){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var we=X({},O.props),Ce=O.key,Pe=O.ref,f=O._owner;if(ee!=null){if(ee.ref!==void 0&&(Pe=ee.ref,f=De.current),ee.key!==void 0&&(Ce=""+ee.key),O.type&&O.type.defaultProps)var R=O.type.defaultProps;for(d in ee)ze.call(ee,d)&&!Ne.hasOwnProperty(d)&&(we[d]=ee[d]===void 0&&R!==void 0?R[d]:ee[d])}var d=arguments.length-2;if(d===1)we.children=Te;else if(1<d){R=Array(d);for(var p=0;p<d;p++)R[p]=arguments[p+2];we.children=R}return{$$typeof:i,type:O.type,key:Ce,ref:Pe,props:we,_owner:f}},be.createContext=function(O){return O={$$typeof:E,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:w,_context:O},O.Consumer=O},be.createElement=He,be.createFactory=function(O){var ee=He.bind(null,O);return ee.type=O,ee},be.createRef=function(){return{current:null}},be.forwardRef=function(O){return{$$typeof:z,render:O}},be.isValidElement=Be,be.lazy=function(O){return{$$typeof:V,_payload:{_status:-1,_result:O},_init:qe}},be.memo=function(O,ee){return{$$typeof:L,type:O,compare:ee===void 0?null:ee}},be.startTransition=function(O){var ee=ae.transition;ae.transition={};try{O()}finally{ae.transition=ee}},be.unstable_act=se,be.useCallback=function(O,ee){return Ge.current.useCallback(O,ee)},be.useContext=function(O){return Ge.current.useContext(O)},be.useDebugValue=function(){},be.useDeferredValue=function(O){return Ge.current.useDeferredValue(O)},be.useEffect=function(O,ee){return Ge.current.useEffect(O,ee)},be.useId=function(){return Ge.current.useId()},be.useImperativeHandle=function(O,ee,Te){return Ge.current.useImperativeHandle(O,ee,Te)},be.useInsertionEffect=function(O,ee){return Ge.current.useInsertionEffect(O,ee)},be.useLayoutEffect=function(O,ee){return Ge.current.useLayoutEffect(O,ee)},be.useMemo=function(O,ee){return Ge.current.useMemo(O,ee)},be.useReducer=function(O,ee,Te){return Ge.current.useReducer(O,ee,Te)},be.useRef=function(O){return Ge.current.useRef(O)},be.useState=function(O){return Ge.current.useState(O)},be.useSyncExternalStore=function(O,ee,Te){return Ge.current.useSyncExternalStore(O,ee,Te)},be.useTransition=function(){return Ge.current.useTransition()},be.version="18.3.1",be}var Ic;function qa(){return Ic||(Ic=1,Pa.exports=yh()),Pa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc;function _h(){if(Dc)return yi;Dc=1;var i=qa(),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,_=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function E(z,P,L){var V,Z={},$=null,te=null;L!==void 0&&($=""+L),P.key!==void 0&&($=""+P.key),P.ref!==void 0&&(te=P.ref);for(V in P)y.call(P,V)&&!w.hasOwnProperty(V)&&(Z[V]=P[V]);if(z&&z.defaultProps)for(V in P=z.defaultProps,P)Z[V]===void 0&&(Z[V]=P[V]);return{$$typeof:o,type:z,key:$,ref:te,props:Z,_owner:_.current}}return yi.Fragment=u,yi.jsx=E,yi.jsxs=E,yi}var Oc;function wh(){return Oc||(Oc=1,Aa.exports=_h()),Aa.exports}var ye=wh(),q=qa(),Is={},La={exports:{}},Gt={},za={exports:{}},Ca={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc;function Sh(){return bc||(bc=1,function(i){function o(ae,ge){var se=ae.length;ae.push(ge);e:for(;0<se;){var O=se-1>>>1,ee=ae[O];if(0<_(ee,ge))ae[O]=ge,ae[se]=ee,se=O;else break e}}function u(ae){return ae.length===0?null:ae[0]}function y(ae){if(ae.length===0)return null;var ge=ae[0],se=ae.pop();if(se!==ge){ae[0]=se;e:for(var O=0,ee=ae.length,Te=ee>>>1;O<Te;){var we=2*(O+1)-1,Ce=ae[we],Pe=we+1,f=ae[Pe];if(0>_(Ce,se))Pe<ee&&0>_(f,Ce)?(ae[O]=f,ae[Pe]=se,O=Pe):(ae[O]=Ce,ae[we]=se,O=we);else if(Pe<ee&&0>_(f,se))ae[O]=f,ae[Pe]=se,O=Pe;else break e}}return ge}function _(ae,ge){var se=ae.sortIndex-ge.sortIndex;return se!==0?se:ae.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;i.unstable_now=function(){return w.now()}}else{var E=Date,z=E.now();i.unstable_now=function(){return E.now()-z}}var P=[],L=[],V=1,Z=null,$=3,te=!1,X=!1,K=!1,J=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function le(ae){for(var ge=u(L);ge!==null;){if(ge.callback===null)y(L);else if(ge.startTime<=ae)y(L),ge.sortIndex=ge.expirationTime,o(P,ge);else break;ge=u(L)}}function _e(ae){if(K=!1,le(ae),!X)if(u(P)!==null)X=!0,qe(ze);else{var ge=u(L);ge!==null&&Ge(_e,ge.startTime-ae)}}function ze(ae,ge){X=!1,K&&(K=!1,W(He),He=-1),te=!0;var se=$;try{for(le(ge),Z=u(P);Z!==null&&(!(Z.expirationTime>ge)||ae&&!et());){var O=Z.callback;if(typeof O=="function"){Z.callback=null,$=Z.priorityLevel;var ee=O(Z.expirationTime<=ge);ge=i.unstable_now(),typeof ee=="function"?Z.callback=ee:Z===u(P)&&y(P),le(ge)}else y(P);Z=u(P)}if(Z!==null)var Te=!0;else{var we=u(L);we!==null&&Ge(_e,we.startTime-ge),Te=!1}return Te}finally{Z=null,$=se,te=!1}}var De=!1,Ne=null,He=-1,Fe=5,Be=-1;function et(){return!(i.unstable_now()-Be<Fe)}function Ee(){if(Ne!==null){var ae=i.unstable_now();Be=ae;var ge=!0;try{ge=Ne(!0,ae)}finally{ge?Ue():(De=!1,Ne=null)}}else De=!1}var Ue;if(typeof Q=="function")Ue=function(){Q(Ee)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,ot=Re.port2;Re.port1.onmessage=Ee,Ue=function(){ot.postMessage(null)}}else Ue=function(){J(Ee,0)};function qe(ae){Ne=ae,De||(De=!0,Ue())}function Ge(ae,ge){He=J(function(){ae(i.unstable_now())},ge)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(ae){ae.callback=null},i.unstable_continueExecution=function(){X||te||(X=!0,qe(ze))},i.unstable_forceFrameRate=function(ae){0>ae||125<ae?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fe=0<ae?Math.floor(1e3/ae):5},i.unstable_getCurrentPriorityLevel=function(){return $},i.unstable_getFirstCallbackNode=function(){return u(P)},i.unstable_next=function(ae){switch($){case 1:case 2:case 3:var ge=3;break;default:ge=$}var se=$;$=ge;try{return ae()}finally{$=se}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(ae,ge){switch(ae){case 1:case 2:case 3:case 4:case 5:break;default:ae=3}var se=$;$=ae;try{return ge()}finally{$=se}},i.unstable_scheduleCallback=function(ae,ge,se){var O=i.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,ae){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=se+ee,ae={id:V++,callback:ge,priorityLevel:ae,startTime:se,expirationTime:ee,sortIndex:-1},se>O?(ae.sortIndex=se,o(L,ae),u(P)===null&&ae===u(L)&&(K?(W(He),He=-1):K=!0,Ge(_e,se-O))):(ae.sortIndex=ee,o(P,ae),X||te||(X=!0,qe(ze))),ae},i.unstable_shouldYield=et,i.unstable_wrapCallback=function(ae){var ge=$;return function(){var se=$;$=ge;try{return ae.apply(this,arguments)}finally{$=se}}}}(Ca)),Ca}var Nc;function xh(){return Nc||(Nc=1,za.exports=Sh()),za.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc;function Th(){if(Fc)return Gt;Fc=1;var i=qa(),o=xh();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y=new Set,_={};function w(e,t){E(e,t),E(e+"Capture",t)}function E(e,t){for(_[e]=t,e=0;e<t.length;e++)y.add(t[e])}var z=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),P=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V={},Z={};function $(e){return P.call(Z,e)?!0:P.call(V,e)?!1:L.test(e)?Z[e]=!0:(V[e]=!0,!1)}function te(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,t,n,r){if(t===null||typeof t>"u"||te(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function K(e,t,n,r,s,l,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=m}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new K(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function Q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(W,Q);J[t]=new K(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(W,Q);J[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(W,Q);J[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function le(e,t,n,r){var s=J.hasOwnProperty(t)?J[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X(t,n,s,r)&&(n=null),r||s===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _e=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),De=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),He=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),et=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),Ue=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Ge=Symbol.for("react.offscreen"),ae=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,O;function ee(e){if(O===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return`
`+O+e}var Te=!1;function we(e,t){if(!e||Te)return"";Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(G){var r=G}Reflect.construct(e,[],t)}else{try{t.call()}catch(G){r=G}e.call(t.prototype)}else{try{throw Error()}catch(G){r=G}e()}}catch(G){if(G&&r&&typeof G.stack=="string"){for(var s=G.stack.split(`
`),l=r.stack.split(`
`),m=s.length-1,M=l.length-1;1<=m&&0<=M&&s[m]!==l[M];)M--;for(;1<=m&&0<=M;m--,M--)if(s[m]!==l[M]){if(m!==1||M!==1)do if(m--,M--,0>M||s[m]!==l[M]){var C=`
`+s[m].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=m&&0<=M);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ee(e):""}function Ce(e){switch(e.tag){case 5:return ee(e.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return e=we(e.type,!1),e;case 11:return e=we(e.type.render,!1),e;case 1:return e=we(e.type,!0),e;default:return""}}function Pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case De:return"Portal";case Fe:return"Profiler";case He:return"StrictMode";case Ue:return"Suspense";case Re:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case et:return(e.displayName||"Context")+".Consumer";case Be:return(e._context.displayName||"Context")+".Provider";case Ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ot:return t=e.displayName||null,t!==null?t:Pe(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Pe(e(t))}catch{}}return null}function f(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(t);case 8:return t===He?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function R(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p(e){var t=d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(m){r=""+m,l.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(m){r=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function T(e){e._valueTracker||(e._valueTracker=p(e))}function A(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function F(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function a(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function g(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=R(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function c(e,t){t=t.checked,t!=null&&le(e,"checked",t,!1)}function h(e,t){c(e,t);var n=R(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?k(e,t.type,n):t.hasOwnProperty("defaultValue")&&k(e,t.type,R(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function S(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function k(e,t,n){(t!=="number"||F(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var B=Array.isArray;function v(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+R(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function x(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function U(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(B(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:R(n)}}function I(e,t){var n=R(t.value),r=R(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function H(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function j(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Y(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?j(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fe,Me=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ce(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(he).forEach(function(e){ke.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]})});function Oe(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function We(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Oe(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var lt=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(e,t){if(t){if(lt[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function ut(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function ht(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pt=null,nt=null,rt=null;function _t(e){if(e=ri(e)){if(typeof pt!="function")throw Error(u(280));var t=e.stateNode;t&&(t=Qi(t),pt(e.stateNode,e.type,t))}}function wt(e){nt?rt?rt.push(e):rt=[e]:nt=e}function St(){if(nt){var e=nt,t=rt;if(rt=nt=null,_t(e),t)for(e=0;e<t.length;e++)_t(t[e])}}function xt(e,t){return e(t)}function Lt(){}var Et=!1;function zt(e,t,n){if(Et)return e(t,n);Et=!0;try{return xt(e,t,n)}finally{Et=!1,(nt!==null||rt!==null)&&(Lt(),St())}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=Qi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Un=!1;if(z)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){Un=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{Un=!1}function hr(e,t,n,r,s,l,m,M,C){var G=Array.prototype.slice.call(arguments,3);try{t.apply(n,G)}catch(re){this.onError(re)}}var fn=!1,Sn=null,xn=!1,pr=null,Ei={onError:function(e){fn=!0,Sn=e}};function Ai(e,t,n,r,s,l,m,M,C){fn=!1,Sn=null,hr.apply(Ei,arguments)}function Pi(e,t,n,r,s,l,m,M,C){if(Ai.apply(this,arguments),fn){if(fn){var G=Sn;fn=!1,Sn=null}else throw Error(u(198));xn||(xn=!0,pr=G)}}function Ke(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rl(e){if(Ke(e)!==e)throw Error(u(188))}function Ed(e){var t=e.alternate;if(!t){if(t=Ke(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return rl(s),e;if(l===r)return rl(s),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=s,r=l;else{for(var m=!1,M=s.child;M;){if(M===n){m=!0,n=s,r=l;break}if(M===r){m=!0,r=s,n=l;break}M=M.sibling}if(!m){for(M=l.child;M;){if(M===n){m=!0,n=l,r=s;break}if(M===r){m=!0,r=l,n=s;break}M=M.sibling}if(!m)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function il(e){return e=Ed(e),e!==null?sl(e):null}function sl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sl(e);if(t!==null)return t;e=e.sibling}return null}var ol=o.unstable_scheduleCallback,al=o.unstable_cancelCallback,Ad=o.unstable_shouldYield,Pd=o.unstable_requestPaint,ct=o.unstable_now,Ld=o.unstable_getCurrentPriorityLevel,js=o.unstable_ImmediatePriority,ll=o.unstable_UserBlockingPriority,Li=o.unstable_NormalPriority,zd=o.unstable_LowPriority,ul=o.unstable_IdlePriority,zi=null,hn=null;function Cd(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Id,Ud=Math.log,kd=Math.LN2;function Id(e){return e>>>=0,e===0?32:31-(Ud(e)/kd|0)|0}var Ci=64,Ui=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ki(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,l=e.pingedLanes,m=n&268435455;if(m!==0){var M=m&~s;M!==0?r=Fr(M):(l&=m,l!==0&&(r=Fr(l)))}else m=n&~s,m!==0?r=Fr(m):l!==0&&(r=Fr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,l=t&-t,s>=l||s===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-en(t),s=1<<n,r|=e[n],t&=~s;return r}function Dd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var m=31-en(l),M=1<<m,C=s[m];C===-1?(!(M&n)||M&r)&&(s[m]=Dd(M,t)):C<=t&&(e.expiredLanes|=M),l&=~M}}function Ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cl(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function Zs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-en(t),e[t]=n}function bd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-en(n),l=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~l}}function Qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-en(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var je=0;function dl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fl,Ys,hl,pl,ml,Ks=!1,Ii=[],kn=null,In=null,Dn=null,Hr=new Map,Gr=new Map,On=[],Nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gl(e,t){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(t.pointerId)}}function $r(e,t,n,r,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},t!==null&&(t=ri(t),t!==null&&Ys(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Fd(e,t,n,r,s){switch(t){case"focusin":return kn=$r(kn,e,t,n,r,s),!0;case"dragenter":return In=$r(In,e,t,n,r,s),!0;case"mouseover":return Dn=$r(Dn,e,t,n,r,s),!0;case"pointerover":var l=s.pointerId;return Hr.set(l,$r(Hr.get(l)||null,e,t,n,r,s)),!0;case"gotpointercapture":return l=s.pointerId,Gr.set(l,$r(Gr.get(l)||null,e,t,n,r,s)),!0}return!1}function vl(e){var t=er(e.target);if(t!==null){var n=Ke(t);if(n!==null){if(t=n.tag,t===13){if(t=nl(n),t!==null){e.blockedOn=t,ml(e.priority,function(){hl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Js(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ft=r,n.target.dispatchEvent(r),ft=null}else return t=ri(n),t!==null&&Ys(t),e.blockedOn=n,!1;t.shift()}return!0}function yl(e,t,n){Di(e)&&n.delete(t)}function Bd(){Ks=!1,kn!==null&&Di(kn)&&(kn=null),In!==null&&Di(In)&&(In=null),Dn!==null&&Di(Dn)&&(Dn=null),Hr.forEach(yl),Gr.forEach(yl)}function Vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ks||(Ks=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Bd)))}function qr(e){function t(s){return Vr(s,e)}if(0<Ii.length){Vr(Ii[0],e);for(var n=1;n<Ii.length;n++){var r=Ii[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kn!==null&&Vr(kn,e),In!==null&&Vr(In,e),Dn!==null&&Vr(Dn,e),Hr.forEach(t),Gr.forEach(t),n=0;n<On.length;n++)r=On[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)vl(n),n.blockedOn===null&&On.shift()}var mr=_e.ReactCurrentBatchConfig,Oi=!0;function Hd(e,t,n,r){var s=je,l=mr.transition;mr.transition=null;try{je=1,Xs(e,t,n,r)}finally{je=s,mr.transition=l}}function Gd(e,t,n,r){var s=je,l=mr.transition;mr.transition=null;try{je=4,Xs(e,t,n,r)}finally{je=s,mr.transition=l}}function Xs(e,t,n,r){if(Oi){var s=Js(e,t,n,r);if(s===null)vo(e,t,r,bi,n),gl(e,r);else if(Fd(s,e,t,n,r))r.stopPropagation();else if(gl(e,r),t&4&&-1<Nd.indexOf(e)){for(;s!==null;){var l=ri(s);if(l!==null&&fl(l),l=Js(e,t,n,r),l===null&&vo(e,t,r,bi,n),l===s)break;s=l}s!==null&&r.stopPropagation()}else vo(e,t,r,null,n)}}var bi=null;function Js(e,t,n,r){if(bi=null,e=ht(r),e=er(e),e!==null)if(t=Ke(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bi=e,null}function _l(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ld()){case js:return 1;case ll:return 4;case Li:case zd:return 16;case ul:return 536870912;default:return 16}default:return 16}}var bn=null,eo=null,Ni=null;function wl(){if(Ni)return Ni;var e,t=eo,n=t.length,r,s="value"in bn?bn.value:bn.textContent,l=s.length;for(e=0;e<n&&t[e]===s[e];e++);var m=n-e;for(r=1;r<=m&&t[n-r]===s[l-r];r++);return Ni=s.slice(e,1<r?1-r:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function Sl(){return!1}function $t(e){function t(n,r,s,l,m){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=m,this.currentTarget=null;for(var M in e)e.hasOwnProperty(M)&&(n=e[M],this[M]=n?n(l):l[M]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Bi:Sl,this.isPropagationStopped=Sl,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=$t(gr),jr=se({},gr,{view:0,detail:0}),$d=$t(jr),no,ro,Wr,Hi=se({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(no=e.screenX-Wr.screenX,ro=e.screenY-Wr.screenY):ro=no=0,Wr=e),no)},movementY:function(e){return"movementY"in e?e.movementY:ro}}),xl=$t(Hi),Vd=se({},Hi,{dataTransfer:0}),qd=$t(Vd),jd=se({},jr,{relatedTarget:0}),io=$t(jd),Wd=se({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zd=$t(Wd),Qd=se({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yd=$t(Qd),Kd=se({},gr,{data:0}),Tl=$t(Kd),Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ef[e])?!!t[e]:!1}function so(){return tf}var nf=se({},jr,{key:function(e){if(e.key){var t=Xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rf=$t(nf),sf=se({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rl=$t(sf),of=se({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),af=$t(of),lf=se({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uf=$t(lf),cf=se({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),df=$t(cf),ff=[9,13,27,32],oo=z&&"CompositionEvent"in window,Zr=null;z&&"documentMode"in document&&(Zr=document.documentMode);var hf=z&&"TextEvent"in window&&!Zr,Ml=z&&(!oo||Zr&&8<Zr&&11>=Zr),El=" ",Al=!1;function Pl(e,t){switch(e){case"keyup":return ff.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ll(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function pf(e,t){switch(e){case"compositionend":return Ll(t);case"keypress":return t.which!==32?null:(Al=!0,El);case"textInput":return e=t.data,e===El&&Al?null:e;default:return null}}function mf(e,t){if(vr)return e==="compositionend"||!oo&&Pl(e,t)?(e=wl(),Ni=eo=bn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ml&&t.locale!=="ko"?null:t.data;default:return null}}var gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gf[e.type]:t==="textarea"}function Cl(e,t,n,r){wt(r),t=ji(t,"onChange"),0<t.length&&(n=new to("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,Yr=null;function vf(e){Ql(e,0)}function Gi(e){var t=xr(e);if(A(t))return e}function yf(e,t){if(e==="change")return t}var Ul=!1;if(z){var ao;if(z){var lo="oninput"in document;if(!lo){var kl=document.createElement("div");kl.setAttribute("oninput","return;"),lo=typeof kl.oninput=="function"}ao=lo}else ao=!1;Ul=ao&&(!document.documentMode||9<document.documentMode)}function Il(){Qr&&(Qr.detachEvent("onpropertychange",Dl),Yr=Qr=null)}function Dl(e){if(e.propertyName==="value"&&Gi(Yr)){var t=[];Cl(t,Yr,e,ht(e)),zt(vf,t)}}function _f(e,t,n){e==="focusin"?(Il(),Qr=t,Yr=n,Qr.attachEvent("onpropertychange",Dl)):e==="focusout"&&Il()}function wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gi(Yr)}function Sf(e,t){if(e==="click")return Gi(t)}function xf(e,t){if(e==="input"||e==="change")return Gi(t)}function Tf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tn=typeof Object.is=="function"?Object.is:Tf;function Kr(e,t){if(tn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!P.call(t,s)||!tn(e[s],t[s]))return!1}return!0}function Ol(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bl(e,t){var n=Ol(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ol(n)}}function Nl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fl(){for(var e=window,t=F();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=F(e.document)}return t}function uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rf(e){var t=Fl(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nl(n.ownerDocument.documentElement,n)){if(r!==null&&uo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!e.extend&&l>r&&(s=r,r=l,l=s),s=bl(n,l);var m=bl(n,r);s&&m&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mf=z&&"documentMode"in document&&11>=document.documentMode,yr=null,co=null,Xr=null,fo=!1;function Bl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fo||yr==null||yr!==F(r)||(r=yr,"selectionStart"in r&&uo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&Kr(Xr,r)||(Xr=r,r=ji(co,"onSelect"),0<r.length&&(t=new to("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function $i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:$i("Animation","AnimationEnd"),animationiteration:$i("Animation","AnimationIteration"),animationstart:$i("Animation","AnimationStart"),transitionend:$i("Transition","TransitionEnd")},ho={},Hl={};z&&(Hl=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Vi(e){if(ho[e])return ho[e];if(!_r[e])return e;var t=_r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hl)return ho[e]=t[n];return e}var Gl=Vi("animationend"),$l=Vi("animationiteration"),Vl=Vi("animationstart"),ql=Vi("transitionend"),jl=new Map,Wl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){jl.set(e,t),w(t,[e])}for(var po=0;po<Wl.length;po++){var mo=Wl[po],Ef=mo.toLowerCase(),Af=mo[0].toUpperCase()+mo.slice(1);Nn(Ef,"on"+Af)}Nn(Gl,"onAnimationEnd"),Nn($l,"onAnimationIteration"),Nn(Vl,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(ql,"onTransitionEnd"),E("onMouseEnter",["mouseout","mouseover"]),E("onMouseLeave",["mouseout","mouseover"]),E("onPointerEnter",["pointerout","pointerover"]),E("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function Zl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pi(r,t,void 0,e),e.currentTarget=null}function Ql(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var m=r.length-1;0<=m;m--){var M=r[m],C=M.instance,G=M.currentTarget;if(M=M.listener,C!==l&&s.isPropagationStopped())break e;Zl(s,M,G),l=C}else for(m=0;m<r.length;m++){if(M=r[m],C=M.instance,G=M.currentTarget,M=M.listener,C!==l&&s.isPropagationStopped())break e;Zl(s,M,G),l=C}}}if(xn)throw e=pr,xn=!1,pr=null,e}function Qe(e,t){var n=t[To];n===void 0&&(n=t[To]=new Set);var r=e+"__bubble";n.has(r)||(Yl(t,e,2,!1),n.add(r))}function go(e,t,n){var r=0;t&&(r|=4),Yl(n,e,r,t)}var qi="_reactListening"+Math.random().toString(36).slice(2);function ei(e){if(!e[qi]){e[qi]=!0,y.forEach(function(n){n!=="selectionchange"&&(Pf.has(n)||go(n,!1,e),go(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qi]||(t[qi]=!0,go("selectionchange",!1,t))}}function Yl(e,t,n,r){switch(_l(t)){case 1:var s=Hd;break;case 4:s=Gd;break;default:s=Xs}n=s.bind(null,t,n,e),s=void 0,!Un||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function vo(e,t,n,r,s){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var M=r.stateNode.containerInfo;if(M===s||M.nodeType===8&&M.parentNode===s)break;if(m===4)for(m=r.return;m!==null;){var C=m.tag;if((C===3||C===4)&&(C=m.stateNode.containerInfo,C===s||C.nodeType===8&&C.parentNode===s))return;m=m.return}for(;M!==null;){if(m=er(M),m===null)return;if(C=m.tag,C===5||C===6){r=l=m;continue e}M=M.parentNode}}r=r.return}zt(function(){var G=l,re=ht(n),ie=[];e:{var ne=jl.get(e);if(ne!==void 0){var ue=to,pe=e;switch(e){case"keypress":if(Fi(n)===0)break e;case"keydown":case"keyup":ue=rf;break;case"focusin":pe="focus",ue=io;break;case"focusout":pe="blur",ue=io;break;case"beforeblur":case"afterblur":ue=io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=af;break;case Gl:case $l:case Vl:ue=Zd;break;case ql:ue=uf;break;case"scroll":ue=$d;break;case"wheel":ue=df;break;case"copy":case"cut":case"paste":ue=Yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Rl}var me=(t&4)!==0,dt=!me&&e==="scroll",b=me?ne!==null?ne+"Capture":null:ne;me=[];for(var D=G,N;D!==null;){N=D;var oe=N.stateNode;if(N.tag===5&&oe!==null&&(N=oe,b!==null&&(oe=cn(D,b),oe!=null&&me.push(ti(D,oe,N)))),dt)break;D=D.return}0<me.length&&(ne=new ue(ne,pe,null,n,re),ie.push({event:ne,listeners:me}))}}if(!(t&7)){e:{if(ne=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",ne&&n!==ft&&(pe=n.relatedTarget||n.fromElement)&&(er(pe)||pe[Tn]))break e;if((ue||ne)&&(ne=re.window===re?re:(ne=re.ownerDocument)?ne.defaultView||ne.parentWindow:window,ue?(pe=n.relatedTarget||n.toElement,ue=G,pe=pe?er(pe):null,pe!==null&&(dt=Ke(pe),pe!==dt||pe.tag!==5&&pe.tag!==6)&&(pe=null)):(ue=null,pe=G),ue!==pe)){if(me=xl,oe="onMouseLeave",b="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(me=Rl,oe="onPointerLeave",b="onPointerEnter",D="pointer"),dt=ue==null?ne:xr(ue),N=pe==null?ne:xr(pe),ne=new me(oe,D+"leave",ue,n,re),ne.target=dt,ne.relatedTarget=N,oe=null,er(re)===G&&(me=new me(b,D+"enter",pe,n,re),me.target=N,me.relatedTarget=dt,oe=me),dt=oe,ue&&pe)t:{for(me=ue,b=pe,D=0,N=me;N;N=wr(N))D++;for(N=0,oe=b;oe;oe=wr(oe))N++;for(;0<D-N;)me=wr(me),D--;for(;0<N-D;)b=wr(b),N--;for(;D--;){if(me===b||b!==null&&me===b.alternate)break t;me=wr(me),b=wr(b)}me=null}else me=null;ue!==null&&Kl(ie,ne,ue,me,!1),pe!==null&&dt!==null&&Kl(ie,dt,pe,me,!0)}}e:{if(ne=G?xr(G):window,ue=ne.nodeName&&ne.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ne.type==="file")var ve=yf;else if(zl(ne))if(Ul)ve=xf;else{ve=wf;var Se=_f}else(ue=ne.nodeName)&&ue.toLowerCase()==="input"&&(ne.type==="checkbox"||ne.type==="radio")&&(ve=Sf);if(ve&&(ve=ve(e,G))){Cl(ie,ve,n,re);break e}Se&&Se(e,ne,G),e==="focusout"&&(Se=ne._wrapperState)&&Se.controlled&&ne.type==="number"&&k(ne,"number",ne.value)}switch(Se=G?xr(G):window,e){case"focusin":(zl(Se)||Se.contentEditable==="true")&&(yr=Se,co=G,Xr=null);break;case"focusout":Xr=co=yr=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,Bl(ie,n,re);break;case"selectionchange":if(Mf)break;case"keydown":case"keyup":Bl(ie,n,re)}var xe;if(oo)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else vr?Pl(e,n)&&(Ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ae="onCompositionStart");Ae&&(Ml&&n.locale!=="ko"&&(vr||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&vr&&(xe=wl()):(bn=re,eo="value"in bn?bn.value:bn.textContent,vr=!0)),Se=ji(G,Ae),0<Se.length&&(Ae=new Tl(Ae,e,null,n,re),ie.push({event:Ae,listeners:Se}),xe?Ae.data=xe:(xe=Ll(n),xe!==null&&(Ae.data=xe)))),(xe=hf?pf(e,n):mf(e,n))&&(G=ji(G,"onBeforeInput"),0<G.length&&(re=new Tl("onBeforeInput","beforeinput",null,n,re),ie.push({event:re,listeners:G}),re.data=xe))}Ql(ie,t)})}function ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ji(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=cn(e,n),l!=null&&r.unshift(ti(e,l,s)),l=cn(e,t),l!=null&&r.push(ti(e,l,s))),e=e.return}return r}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kl(e,t,n,r,s){for(var l=t._reactName,m=[];n!==null&&n!==r;){var M=n,C=M.alternate,G=M.stateNode;if(C!==null&&C===r)break;M.tag===5&&G!==null&&(M=G,s?(C=cn(n,l),C!=null&&m.unshift(ti(n,C,M))):s||(C=cn(n,l),C!=null&&m.push(ti(n,C,M)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Lf=/\r\n?/g,zf=/\u0000|\uFFFD/g;function Xl(e){return(typeof e=="string"?e:""+e).replace(Lf,`
`).replace(zf,"")}function Wi(e,t,n){if(t=Xl(t),Xl(e)!==t&&n)throw Error(u(425))}function Zi(){}var yo=null,_o=null;function wo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var So=typeof setTimeout=="function"?setTimeout:void 0,Cf=typeof clearTimeout=="function"?clearTimeout:void 0,Jl=typeof Promise=="function"?Promise:void 0,Uf=typeof queueMicrotask=="function"?queueMicrotask:typeof Jl<"u"?function(e){return Jl.resolve(null).then(e).catch(kf)}:So;function kf(e){setTimeout(function(){throw e})}function xo(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);qr(t)}function Fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),pn="__reactFiber$"+Sr,ni="__reactProps$"+Sr,Tn="__reactContainer$"+Sr,To="__reactEvents$"+Sr,If="__reactListeners$"+Sr,Df="__reactHandles$"+Sr;function er(e){var t=e[pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tn]||n[pn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=eu(e);e!==null;){if(n=e[pn])return n;e=eu(e)}return t}e=n,n=e.parentNode}return null}function ri(e){return e=e[pn]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Qi(e){return e[ni]||null}var Ro=[],Tr=-1;function Bn(e){return{current:e}}function Ye(e){0>Tr||(e.current=Ro[Tr],Ro[Tr]=null,Tr--)}function Ze(e,t){Tr++,Ro[Tr]=e.current,e.current=t}var Hn={},Ct=Bn(Hn),bt=Bn(!1),tr=Hn;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Nt(e){return e=e.childContextTypes,e!=null}function Yi(){Ye(bt),Ye(Ct)}function tu(e,t,n){if(Ct.current!==Hn)throw Error(u(168));Ze(Ct,t),Ze(bt,n)}function nu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(u(108,f(e)||"Unknown",s));return se({},n,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,tr=Ct.current,Ze(Ct,e),Ze(bt,bt.current),!0}function ru(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=nu(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,Ye(bt),Ye(Ct),Ze(Ct,e)):Ye(bt),Ze(bt,n)}var Rn=null,Xi=!1,Mo=!1;function iu(e){Rn===null?Rn=[e]:Rn.push(e)}function Of(e){Xi=!0,iu(e)}function Gn(){if(!Mo&&Rn!==null){Mo=!0;var e=0,t=je;try{var n=Rn;for(je=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rn=null,Xi=!1}catch(s){throw Rn!==null&&(Rn=Rn.slice(e+1)),ol(js,Gn),s}finally{je=t,Mo=!1}}return null}var Mr=[],Er=0,Ji=null,es=0,Zt=[],Qt=0,nr=null,Mn=1,En="";function rr(e,t){Mr[Er++]=es,Mr[Er++]=Ji,Ji=e,es=t}function su(e,t,n){Zt[Qt++]=Mn,Zt[Qt++]=En,Zt[Qt++]=nr,nr=e;var r=Mn;e=En;var s=32-en(r)-1;r&=~(1<<s),n+=1;var l=32-en(t)+s;if(30<l){var m=s-s%5;l=(r&(1<<m)-1).toString(32),r>>=m,s-=m,Mn=1<<32-en(t)+s|n<<s|r,En=l+e}else Mn=1<<l|n<<s|r,En=e}function Eo(e){e.return!==null&&(rr(e,1),su(e,1,0))}function Ao(e){for(;e===Ji;)Ji=Mr[--Er],Mr[Er]=null,es=Mr[--Er],Mr[Er]=null;for(;e===nr;)nr=Zt[--Qt],Zt[Qt]=null,En=Zt[--Qt],Zt[Qt]=null,Mn=Zt[--Qt],Zt[Qt]=null}var Vt=null,qt=null,Xe=!1,nn=null;function ou(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function au(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Vt=e,qt=Fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Vt=e,qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:Mn,overflow:En}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Vt=e,qt=null,!0):!1;default:return!1}}function Po(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lo(e){if(Xe){var t=qt;if(t){var n=t;if(!au(e,t)){if(Po(e))throw Error(u(418));t=Fn(n.nextSibling);var r=Vt;t&&au(e,t)?ou(r,n):(e.flags=e.flags&-4097|2,Xe=!1,Vt=e)}}else{if(Po(e))throw Error(u(418));e.flags=e.flags&-4097|2,Xe=!1,Vt=e}}}function lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Vt=e}function ts(e){if(e!==Vt)return!1;if(!Xe)return lu(e),Xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wo(e.type,e.memoizedProps)),t&&(t=qt)){if(Po(e))throw uu(),Error(u(418));for(;t;)ou(e,t),t=Fn(t.nextSibling)}if(lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qt=Fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qt=null}}else qt=Vt?Fn(e.stateNode.nextSibling):null;return!0}function uu(){for(var e=qt;e;)e=Fn(e.nextSibling)}function Ar(){qt=Vt=null,Xe=!1}function zo(e){nn===null?nn=[e]:nn.push(e)}var bf=_e.ReactCurrentBatchConfig;function ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var s=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(m){var M=s.refs;m===null?delete M[l]:M[l]=m},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cu(e){var t=e._init;return t(e._payload)}function du(e){function t(b,D){if(e){var N=b.deletions;N===null?(b.deletions=[D],b.flags|=16):N.push(D)}}function n(b,D){if(!e)return null;for(;D!==null;)t(b,D),D=D.sibling;return null}function r(b,D){for(b=new Map;D!==null;)D.key!==null?b.set(D.key,D):b.set(D.index,D),D=D.sibling;return b}function s(b,D){return b=Yn(b,D),b.index=0,b.sibling=null,b}function l(b,D,N){return b.index=N,e?(N=b.alternate,N!==null?(N=N.index,N<D?(b.flags|=2,D):N):(b.flags|=2,D)):(b.flags|=1048576,D)}function m(b){return e&&b.alternate===null&&(b.flags|=2),b}function M(b,D,N,oe){return D===null||D.tag!==6?(D=Sa(N,b.mode,oe),D.return=b,D):(D=s(D,N),D.return=b,D)}function C(b,D,N,oe){var ve=N.type;return ve===Ne?re(b,D,N.props.children,oe,N.key):D!==null&&(D.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===qe&&cu(ve)===D.type)?(oe=s(D,N.props),oe.ref=ii(b,D,N),oe.return=b,oe):(oe=Es(N.type,N.key,N.props,null,b.mode,oe),oe.ref=ii(b,D,N),oe.return=b,oe)}function G(b,D,N,oe){return D===null||D.tag!==4||D.stateNode.containerInfo!==N.containerInfo||D.stateNode.implementation!==N.implementation?(D=xa(N,b.mode,oe),D.return=b,D):(D=s(D,N.children||[]),D.return=b,D)}function re(b,D,N,oe,ve){return D===null||D.tag!==7?(D=dr(N,b.mode,oe,ve),D.return=b,D):(D=s(D,N),D.return=b,D)}function ie(b,D,N){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Sa(""+D,b.mode,N),D.return=b,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ze:return N=Es(D.type,D.key,D.props,null,b.mode,N),N.ref=ii(b,null,D),N.return=b,N;case De:return D=xa(D,b.mode,N),D.return=b,D;case qe:var oe=D._init;return ie(b,oe(D._payload),N)}if(B(D)||ge(D))return D=dr(D,b.mode,N,null),D.return=b,D;ns(b,D)}return null}function ne(b,D,N,oe){var ve=D!==null?D.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return ve!==null?null:M(b,D,""+N,oe);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ze:return N.key===ve?C(b,D,N,oe):null;case De:return N.key===ve?G(b,D,N,oe):null;case qe:return ve=N._init,ne(b,D,ve(N._payload),oe)}if(B(N)||ge(N))return ve!==null?null:re(b,D,N,oe,null);ns(b,N)}return null}function ue(b,D,N,oe,ve){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return b=b.get(N)||null,M(D,b,""+oe,ve);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case ze:return b=b.get(oe.key===null?N:oe.key)||null,C(D,b,oe,ve);case De:return b=b.get(oe.key===null?N:oe.key)||null,G(D,b,oe,ve);case qe:var Se=oe._init;return ue(b,D,N,Se(oe._payload),ve)}if(B(oe)||ge(oe))return b=b.get(N)||null,re(D,b,oe,ve,null);ns(D,oe)}return null}function pe(b,D,N,oe){for(var ve=null,Se=null,xe=D,Ae=D=0,Mt=null;xe!==null&&Ae<N.length;Ae++){xe.index>Ae?(Mt=xe,xe=null):Mt=xe.sibling;var Ve=ne(b,xe,N[Ae],oe);if(Ve===null){xe===null&&(xe=Mt);break}e&&xe&&Ve.alternate===null&&t(b,xe),D=l(Ve,D,Ae),Se===null?ve=Ve:Se.sibling=Ve,Se=Ve,xe=Mt}if(Ae===N.length)return n(b,xe),Xe&&rr(b,Ae),ve;if(xe===null){for(;Ae<N.length;Ae++)xe=ie(b,N[Ae],oe),xe!==null&&(D=l(xe,D,Ae),Se===null?ve=xe:Se.sibling=xe,Se=xe);return Xe&&rr(b,Ae),ve}for(xe=r(b,xe);Ae<N.length;Ae++)Mt=ue(xe,b,Ae,N[Ae],oe),Mt!==null&&(e&&Mt.alternate!==null&&xe.delete(Mt.key===null?Ae:Mt.key),D=l(Mt,D,Ae),Se===null?ve=Mt:Se.sibling=Mt,Se=Mt);return e&&xe.forEach(function(Kn){return t(b,Kn)}),Xe&&rr(b,Ae),ve}function me(b,D,N,oe){var ve=ge(N);if(typeof ve!="function")throw Error(u(150));if(N=ve.call(N),N==null)throw Error(u(151));for(var Se=ve=null,xe=D,Ae=D=0,Mt=null,Ve=N.next();xe!==null&&!Ve.done;Ae++,Ve=N.next()){xe.index>Ae?(Mt=xe,xe=null):Mt=xe.sibling;var Kn=ne(b,xe,Ve.value,oe);if(Kn===null){xe===null&&(xe=Mt);break}e&&xe&&Kn.alternate===null&&t(b,xe),D=l(Kn,D,Ae),Se===null?ve=Kn:Se.sibling=Kn,Se=Kn,xe=Mt}if(Ve.done)return n(b,xe),Xe&&rr(b,Ae),ve;if(xe===null){for(;!Ve.done;Ae++,Ve=N.next())Ve=ie(b,Ve.value,oe),Ve!==null&&(D=l(Ve,D,Ae),Se===null?ve=Ve:Se.sibling=Ve,Se=Ve);return Xe&&rr(b,Ae),ve}for(xe=r(b,xe);!Ve.done;Ae++,Ve=N.next())Ve=ue(xe,b,Ae,Ve.value,oe),Ve!==null&&(e&&Ve.alternate!==null&&xe.delete(Ve.key===null?Ae:Ve.key),D=l(Ve,D,Ae),Se===null?ve=Ve:Se.sibling=Ve,Se=Ve);return e&&xe.forEach(function(mh){return t(b,mh)}),Xe&&rr(b,Ae),ve}function dt(b,D,N,oe){if(typeof N=="object"&&N!==null&&N.type===Ne&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case ze:e:{for(var ve=N.key,Se=D;Se!==null;){if(Se.key===ve){if(ve=N.type,ve===Ne){if(Se.tag===7){n(b,Se.sibling),D=s(Se,N.props.children),D.return=b,b=D;break e}}else if(Se.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===qe&&cu(ve)===Se.type){n(b,Se.sibling),D=s(Se,N.props),D.ref=ii(b,Se,N),D.return=b,b=D;break e}n(b,Se);break}else t(b,Se);Se=Se.sibling}N.type===Ne?(D=dr(N.props.children,b.mode,oe,N.key),D.return=b,b=D):(oe=Es(N.type,N.key,N.props,null,b.mode,oe),oe.ref=ii(b,D,N),oe.return=b,b=oe)}return m(b);case De:e:{for(Se=N.key;D!==null;){if(D.key===Se)if(D.tag===4&&D.stateNode.containerInfo===N.containerInfo&&D.stateNode.implementation===N.implementation){n(b,D.sibling),D=s(D,N.children||[]),D.return=b,b=D;break e}else{n(b,D);break}else t(b,D);D=D.sibling}D=xa(N,b.mode,oe),D.return=b,b=D}return m(b);case qe:return Se=N._init,dt(b,D,Se(N._payload),oe)}if(B(N))return pe(b,D,N,oe);if(ge(N))return me(b,D,N,oe);ns(b,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,D!==null&&D.tag===6?(n(b,D.sibling),D=s(D,N),D.return=b,b=D):(n(b,D),D=Sa(N,b.mode,oe),D.return=b,b=D),m(b)):n(b,D)}return dt}var Pr=du(!0),fu=du(!1),rs=Bn(null),is=null,Lr=null,Co=null;function Uo(){Co=Lr=is=null}function ko(e){var t=rs.current;Ye(rs),e._currentValue=t}function Io(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){is=e,Co=Lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ft=!0),e.firstContext=null)}function Yt(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},Lr===null){if(is===null)throw Error(u(308));Lr=e,is.dependencies={lanes:0,firstContext:e}}else Lr=Lr.next=e;return t}var ir=null;function Do(e){ir===null?ir=[e]:ir.push(e)}function hu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Do(t)):(n.next=s.next,s.next=n),t.interleaved=n,An(e,r)}function An(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $n=!1;function Oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$e&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,An(e,n)}return s=r.interleaved,s===null?(t.next=t,Do(r)):(t.next=s.next,s.next=t),r.interleaved=t,An(e,n)}function ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qs(e,n)}}function mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var m={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=m:l=l.next=m,n=n.next}while(n!==null);l===null?s=l=t:l=l.next=t}else s=l=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function os(e,t,n,r){var s=e.updateQueue;$n=!1;var l=s.firstBaseUpdate,m=s.lastBaseUpdate,M=s.shared.pending;if(M!==null){s.shared.pending=null;var C=M,G=C.next;C.next=null,m===null?l=G:m.next=G,m=C;var re=e.alternate;re!==null&&(re=re.updateQueue,M=re.lastBaseUpdate,M!==m&&(M===null?re.firstBaseUpdate=G:M.next=G,re.lastBaseUpdate=C))}if(l!==null){var ie=s.baseState;m=0,re=G=C=null,M=l;do{var ne=M.lane,ue=M.eventTime;if((r&ne)===ne){re!==null&&(re=re.next={eventTime:ue,lane:0,tag:M.tag,payload:M.payload,callback:M.callback,next:null});e:{var pe=e,me=M;switch(ne=t,ue=n,me.tag){case 1:if(pe=me.payload,typeof pe=="function"){ie=pe.call(ue,ie,ne);break e}ie=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=me.payload,ne=typeof pe=="function"?pe.call(ue,ie,ne):pe,ne==null)break e;ie=se({},ie,ne);break e;case 2:$n=!0}}M.callback!==null&&M.lane!==0&&(e.flags|=64,ne=s.effects,ne===null?s.effects=[M]:ne.push(M))}else ue={eventTime:ue,lane:ne,tag:M.tag,payload:M.payload,callback:M.callback,next:null},re===null?(G=re=ue,C=ie):re=re.next=ue,m|=ne;if(M=M.next,M===null){if(M=s.shared.pending,M===null)break;ne=M,M=ne.next,ne.next=null,s.lastBaseUpdate=ne,s.shared.pending=null}}while(!0);if(re===null&&(C=ie),s.baseState=C,s.firstBaseUpdate=G,s.lastBaseUpdate=re,t=s.shared.interleaved,t!==null){s=t;do m|=s.lane,s=s.next;while(s!==t)}else l===null&&(s.shared.lanes=0);ar|=m,e.lanes=m,e.memoizedState=ie}}function gu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(u(191,s));s.call(r)}}}var si={},mn=Bn(si),oi=Bn(si),ai=Bn(si);function sr(e){if(e===si)throw Error(u(174));return e}function bo(e,t){switch(Ze(ai,t),Ze(oi,e),Ze(mn,si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Y(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Y(t,e)}Ye(mn),Ze(mn,t)}function Cr(){Ye(mn),Ye(oi),Ye(ai)}function vu(e){sr(ai.current);var t=sr(mn.current),n=Y(t,e.type);t!==n&&(Ze(oi,e),Ze(mn,n))}function No(e){oi.current===e&&(Ye(mn),Ye(oi))}var it=Bn(0);function as(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fo=[];function Bo(){for(var e=0;e<Fo.length;e++)Fo[e]._workInProgressVersionPrimary=null;Fo.length=0}var ls=_e.ReactCurrentDispatcher,Ho=_e.ReactCurrentBatchConfig,or=0,st=null,vt=null,Tt=null,us=!1,li=!1,ui=0,Nf=0;function Ut(){throw Error(u(321))}function Go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tn(e[n],t[n]))return!1;return!0}function $o(e,t,n,r,s,l){if(or=l,st=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ls.current=e===null||e.memoizedState===null?Gf:$f,e=n(r,s),li){l=0;do{if(li=!1,ui=0,25<=l)throw Error(u(301));l+=1,Tt=vt=null,t.updateQueue=null,ls.current=Vf,e=n(r,s)}while(li)}if(ls.current=fs,t=vt!==null&&vt.next!==null,or=0,Tt=vt=st=null,us=!1,t)throw Error(u(300));return e}function Vo(){var e=ui!==0;return ui=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?st.memoizedState=Tt=e:Tt=Tt.next=e,Tt}function Kt(){if(vt===null){var e=st.alternate;e=e!==null?e.memoizedState:null}else e=vt.next;var t=Tt===null?st.memoizedState:Tt.next;if(t!==null)Tt=t,vt=e;else{if(e===null)throw Error(u(310));vt=e,e={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Tt===null?st.memoizedState=Tt=e:Tt=Tt.next=e}return Tt}function ci(e,t){return typeof t=="function"?t(e):t}function qo(e){var t=Kt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=vt,s=r.baseQueue,l=n.pending;if(l!==null){if(s!==null){var m=s.next;s.next=l.next,l.next=m}r.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,r=r.baseState;var M=m=null,C=null,G=l;do{var re=G.lane;if((or&re)===re)C!==null&&(C=C.next={lane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),r=G.hasEagerState?G.eagerState:e(r,G.action);else{var ie={lane:re,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};C===null?(M=C=ie,m=r):C=C.next=ie,st.lanes|=re,ar|=re}G=G.next}while(G!==null&&G!==l);C===null?m=r:C.next=M,tn(r,t.memoizedState)||(Ft=!0),t.memoizedState=r,t.baseState=m,t.baseQueue=C,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do l=s.lane,st.lanes|=l,ar|=l,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jo(e){var t=Kt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,l=t.memoizedState;if(s!==null){n.pending=null;var m=s=s.next;do l=e(l,m.action),m=m.next;while(m!==s);tn(l,t.memoizedState)||(Ft=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function yu(){}function _u(e,t){var n=st,r=Kt(),s=t(),l=!tn(r.memoizedState,s);if(l&&(r.memoizedState=s,Ft=!0),r=r.queue,Wo(xu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,di(9,Su.bind(null,n,r,s,t),void 0,null),Rt===null)throw Error(u(349));or&30||wu(n,t,s)}return s}function wu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=st.updateQueue,t===null?(t={lastEffect:null,stores:null},st.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Su(e,t,n,r){t.value=n,t.getSnapshot=r,Tu(t)&&Ru(e)}function xu(e,t,n){return n(function(){Tu(t)&&Ru(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tn(e,n)}catch{return!0}}function Ru(e){var t=An(e,1);t!==null&&an(t,e,1,-1)}function Mu(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=Hf.bind(null,st,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=st.updateQueue,t===null?(t={lastEffect:null,stores:null},st.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Eu(){return Kt().memoizedState}function cs(e,t,n,r){var s=gn();st.flags|=e,s.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function ds(e,t,n,r){var s=Kt();r=r===void 0?null:r;var l=void 0;if(vt!==null){var m=vt.memoizedState;if(l=m.destroy,r!==null&&Go(r,m.deps)){s.memoizedState=di(t,n,l,r);return}}st.flags|=e,s.memoizedState=di(1|t,n,l,r)}function Au(e,t){return cs(8390656,8,e,t)}function Wo(e,t){return ds(2048,8,e,t)}function Pu(e,t){return ds(4,2,e,t)}function Lu(e,t){return ds(4,4,e,t)}function zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cu(e,t,n){return n=n!=null?n.concat([e]):null,ds(4,4,zu.bind(null,t,e),n)}function Zo(){}function Uu(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ku(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Iu(e,t,n){return or&21?(tn(n,t)||(n=cl(),st.lanes|=n,ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ft=!0),e.memoizedState=n)}function Ff(e,t){var n=je;je=n!==0&&4>n?n:4,e(!0);var r=Ho.transition;Ho.transition={};try{e(!1),t()}finally{je=n,Ho.transition=r}}function Du(){return Kt().memoizedState}function Bf(e,t,n){var r=Zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ou(e))bu(t,n);else if(n=hu(e,t,n,r),n!==null){var s=Ot();an(n,e,r,s),Nu(n,t,r)}}function Hf(e,t,n){var r=Zn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ou(e))bu(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var m=t.lastRenderedState,M=l(m,n);if(s.hasEagerState=!0,s.eagerState=M,tn(M,m)){var C=t.interleaved;C===null?(s.next=s,Do(t)):(s.next=C.next,C.next=s),t.interleaved=s;return}}catch{}finally{}n=hu(e,t,s,r),n!==null&&(s=Ot(),an(n,e,r,s),Nu(n,t,r))}}function Ou(e){var t=e.alternate;return e===st||t!==null&&t===st}function bu(e,t){li=us=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qs(e,n)}}var fs={readContext:Yt,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Gf={readContext:Yt,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:Au,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,cs(4194308,4,zu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){return cs(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bf.bind(null,st,e),[r.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:Mu,useDebugValue:Zo,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Mu(!1),t=e[0];return e=Ff.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=st,s=gn();if(Xe){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Rt===null)throw Error(u(349));or&30||wu(r,t,n)}s.memoizedState=n;var l={value:n,getSnapshot:t};return s.queue=l,Au(xu.bind(null,r,l,e),[e]),r.flags|=2048,di(9,Su.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=gn(),t=Rt.identifierPrefix;if(Xe){var n=En,r=Mn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Nf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$f={readContext:Yt,useCallback:Uu,useContext:Yt,useEffect:Wo,useImperativeHandle:Cu,useInsertionEffect:Pu,useLayoutEffect:Lu,useMemo:ku,useReducer:qo,useRef:Eu,useState:function(){return qo(ci)},useDebugValue:Zo,useDeferredValue:function(e){var t=Kt();return Iu(t,vt.memoizedState,e)},useTransition:function(){var e=qo(ci)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:_u,useId:Du,unstable_isNewReconciler:!1},Vf={readContext:Yt,useCallback:Uu,useContext:Yt,useEffect:Wo,useImperativeHandle:Cu,useInsertionEffect:Pu,useLayoutEffect:Lu,useMemo:ku,useReducer:jo,useRef:Eu,useState:function(){return jo(ci)},useDebugValue:Zo,useDeferredValue:function(e){var t=Kt();return vt===null?t.memoizedState=e:Iu(t,vt.memoizedState,e)},useTransition:function(){var e=jo(ci)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:_u,useId:Du,unstable_isNewReconciler:!1};function rn(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hs={isMounted:function(e){return(e=e._reactInternals)?Ke(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ot(),s=Zn(e),l=Pn(r,s);l.payload=t,n!=null&&(l.callback=n),t=Vn(e,l,s),t!==null&&(an(t,e,s,r),ss(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ot(),s=Zn(e),l=Pn(r,s);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Vn(e,l,s),t!==null&&(an(t,e,s,r),ss(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),r=Zn(e),s=Pn(n,r);s.tag=2,t!=null&&(s.callback=t),t=Vn(e,s,r),t!==null&&(an(t,e,r,n),ss(t,e,r))}};function Fu(e,t,n,r,s,l,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,m):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(s,l):!0}function Bu(e,t,n){var r=!1,s=Hn,l=t.contextType;return typeof l=="object"&&l!==null?l=Yt(l):(s=Nt(t)?tr:Ct.current,r=t.contextTypes,l=(r=r!=null)?Rr(e,s):Hn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),t}function Hu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function Yo(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Oo(e);var l=t.contextType;typeof l=="object"&&l!==null?s.context=Yt(l):(l=Nt(t)?tr:Ct.current,s.context=Rr(e,l)),s.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Qo(e,t,l,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&hs.enqueueReplaceState(s,s.state,null),os(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var n="",r=t;do n+=Ce(r),r=r.return;while(r);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:s,digest:null}}function Ko(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qf=typeof WeakMap=="function"?WeakMap:Map;function Gu(e,t,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ws||(ws=!0,ha=r),Xo(e,t)},n}function $u(e,t,n){n=Pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Xo(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Xo(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),n}function Vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qf;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=sh.bind(null,e,t,n),t.then(e,e))}function qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ju(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pn(-1,1),t.tag=2,Vn(n,t,1))),n.lanes|=1),e)}var jf=_e.ReactCurrentOwner,Ft=!1;function Dt(e,t,n,r){t.child=e===null?fu(t,null,n,r):Pr(t,e.child,n,r)}function Wu(e,t,n,r,s){n=n.render;var l=t.ref;return zr(t,s),r=$o(e,t,n,r,l,s),n=Vo(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ln(e,t,s)):(Xe&&n&&Eo(t),t.flags|=1,Dt(e,t,r,s),t.child)}function Zu(e,t,n,r,s){if(e===null){var l=n.type;return typeof l=="function"&&!wa(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Qu(e,t,l,r,s)):(e=Es(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&s)){var m=l.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(m,r)&&e.ref===t.ref)return Ln(e,t,s)}return t.flags|=1,e=Yn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Qu(e,t,n,r,s){if(e!==null){var l=e.memoizedProps;if(Kr(l,r)&&e.ref===t.ref)if(Ft=!1,t.pendingProps=r=l,(e.lanes&s)!==0)e.flags&131072&&(Ft=!0);else return t.lanes=e.lanes,Ln(e,t,s)}return Jo(e,t,n,r,s)}function Yu(e,t,n){var r=t.pendingProps,s=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(Ir,jt),jt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ze(Ir,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Ze(Ir,jt),jt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Ze(Ir,jt),jt|=r;return Dt(e,t,s,n),t.child}function Ku(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jo(e,t,n,r,s){var l=Nt(n)?tr:Ct.current;return l=Rr(t,l),zr(t,s),n=$o(e,t,n,r,l,s),r=Vo(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ln(e,t,s)):(Xe&&r&&Eo(t),t.flags|=1,Dt(e,t,n,s),t.child)}function Xu(e,t,n,r,s){if(Nt(n)){var l=!0;Ki(t)}else l=!1;if(zr(t,s),t.stateNode===null)ms(e,t),Bu(t,n,r),Yo(t,n,r,s),r=!0;else if(e===null){var m=t.stateNode,M=t.memoizedProps;m.props=M;var C=m.context,G=n.contextType;typeof G=="object"&&G!==null?G=Yt(G):(G=Nt(n)?tr:Ct.current,G=Rr(t,G));var re=n.getDerivedStateFromProps,ie=typeof re=="function"||typeof m.getSnapshotBeforeUpdate=="function";ie||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==r||C!==G)&&Hu(t,m,r,G),$n=!1;var ne=t.memoizedState;m.state=ne,os(t,r,m,s),C=t.memoizedState,M!==r||ne!==C||bt.current||$n?(typeof re=="function"&&(Qo(t,n,re,r),C=t.memoizedState),(M=$n||Fu(t,n,M,r,ne,C,G))?(ie||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=C),m.props=r,m.state=C,m.context=G,r=M):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{m=t.stateNode,pu(e,t),M=t.memoizedProps,G=t.type===t.elementType?M:rn(t.type,M),m.props=G,ie=t.pendingProps,ne=m.context,C=n.contextType,typeof C=="object"&&C!==null?C=Yt(C):(C=Nt(n)?tr:Ct.current,C=Rr(t,C));var ue=n.getDerivedStateFromProps;(re=typeof ue=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==ie||ne!==C)&&Hu(t,m,r,C),$n=!1,ne=t.memoizedState,m.state=ne,os(t,r,m,s);var pe=t.memoizedState;M!==ie||ne!==pe||bt.current||$n?(typeof ue=="function"&&(Qo(t,n,ue,r),pe=t.memoizedState),(G=$n||Fu(t,n,G,r,ne,pe,C)||!1)?(re||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,pe,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,pe,C)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&ne===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ne===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=pe),m.props=r,m.state=pe,m.context=C,r=G):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&ne===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ne===e.memoizedState||(t.flags|=1024),r=!1)}return ea(e,t,n,r,l,s)}function ea(e,t,n,r,s,l){Ku(e,t);var m=(t.flags&128)!==0;if(!r&&!m)return s&&ru(t,n,!1),Ln(e,t,l);r=t.stateNode,jf.current=t;var M=m&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&m?(t.child=Pr(t,e.child,null,l),t.child=Pr(t,null,M,l)):Dt(e,t,M,l),t.memoizedState=r.state,s&&ru(t,n,!0),t.child}function Ju(e){var t=e.stateNode;t.pendingContext?tu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tu(e,t.context,!1),bo(e,t.containerInfo)}function ec(e,t,n,r,s){return Ar(),zo(s),t.flags|=256,Dt(e,t,n,r),t.child}var ta={dehydrated:null,treeContext:null,retryLane:0};function na(e){return{baseLanes:e,cachePool:null,transitions:null}}function tc(e,t,n){var r=t.pendingProps,s=it.current,l=!1,m=(t.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(s&2)!==0),M?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ze(it,s&1),e===null)return Lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(m=r.children,e=r.fallback,l?(r=t.mode,l=t.child,m={mode:"hidden",children:m},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=m):l=As(m,r,0,null),e=dr(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=na(n),t.memoizedState=ta,e):ra(t,m));if(s=e.memoizedState,s!==null&&(M=s.dehydrated,M!==null))return Wf(e,t,m,r,M,s,n);if(l){l=r.fallback,m=t.mode,s=e.child,M=s.sibling;var C={mode:"hidden",children:r.children};return!(m&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=C,t.deletions=null):(r=Yn(s,C),r.subtreeFlags=s.subtreeFlags&14680064),M!==null?l=Yn(M,l):(l=dr(l,m,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,m=e.child.memoizedState,m=m===null?na(n):{baseLanes:m.baseLanes|n,cachePool:null,transitions:m.transitions},l.memoizedState=m,l.childLanes=e.childLanes&~n,t.memoizedState=ta,r}return l=e.child,e=l.sibling,r=Yn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ra(e,t){return t=As({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ps(e,t,n,r){return r!==null&&zo(r),Pr(t,e.child,null,n),e=ra(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wf(e,t,n,r,s,l,m){if(n)return t.flags&256?(t.flags&=-257,r=Ko(Error(u(422))),ps(e,t,m,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,s=t.mode,r=As({mode:"visible",children:r.children},s,0,null),l=dr(l,s,m,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Pr(t,e.child,null,m),t.child.memoizedState=na(m),t.memoizedState=ta,l);if(!(t.mode&1))return ps(e,t,m,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var M=r.dgst;return r=M,l=Error(u(419)),r=Ko(l,r,void 0),ps(e,t,m,r)}if(M=(m&e.childLanes)!==0,Ft||M){if(r=Rt,r!==null){switch(m&-m){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|m)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,An(e,s),an(r,e,s,-1))}return _a(),r=Ko(Error(u(421))),ps(e,t,m,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=oh.bind(null,e),s._reactRetry=t,null):(e=l.treeContext,qt=Fn(s.nextSibling),Vt=t,Xe=!0,nn=null,e!==null&&(Zt[Qt++]=Mn,Zt[Qt++]=En,Zt[Qt++]=nr,Mn=e.id,En=e.overflow,nr=t),t=ra(t,r.children),t.flags|=4096,t)}function nc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Io(e.return,t,n)}function ia(e,t,n,r,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=s)}function rc(e,t,n){var r=t.pendingProps,s=r.revealOrder,l=r.tail;if(Dt(e,t,r.children,n),r=it.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nc(e,n,t);else if(e.tag===19)nc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ze(it,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&as(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ia(t,!1,s,n,l);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&as(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ia(t,!0,n,null,l);break;case"together":ia(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ms(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zf(e,t,n){switch(t.tag){case 3:Ju(t),Ar();break;case 5:vu(t);break;case 1:Nt(t.type)&&Ki(t);break;case 4:bo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Ze(rs,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ze(it,it.current&1),t.flags|=128,null):n&t.child.childLanes?tc(e,t,n):(Ze(it,it.current&1),e=Ln(e,t,n),e!==null?e.sibling:null);Ze(it,it.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ze(it,it.current),r)break;return null;case 22:case 23:return t.lanes=0,Yu(e,t,n)}return Ln(e,t,n)}var ic,sa,sc,oc;ic=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},sa=function(){},sc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,sr(mn.current);var l=null;switch(n){case"input":s=a(e,s),r=a(e,r),l=[];break;case"select":s=se({},s,{value:void 0}),r=se({},r,{value:void 0}),l=[];break;case"textarea":s=x(e,s),r=x(e,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}tt(n,r);var m;n=null;for(G in s)if(!r.hasOwnProperty(G)&&s.hasOwnProperty(G)&&s[G]!=null)if(G==="style"){var M=s[G];for(m in M)M.hasOwnProperty(m)&&(n||(n={}),n[m]="")}else G!=="dangerouslySetInnerHTML"&&G!=="children"&&G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&G!=="autoFocus"&&(_.hasOwnProperty(G)?l||(l=[]):(l=l||[]).push(G,null));for(G in r){var C=r[G];if(M=s!=null?s[G]:void 0,r.hasOwnProperty(G)&&C!==M&&(C!=null||M!=null))if(G==="style")if(M){for(m in M)!M.hasOwnProperty(m)||C&&C.hasOwnProperty(m)||(n||(n={}),n[m]="");for(m in C)C.hasOwnProperty(m)&&M[m]!==C[m]&&(n||(n={}),n[m]=C[m])}else n||(l||(l=[]),l.push(G,n)),n=C;else G==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,M=M?M.__html:void 0,C!=null&&M!==C&&(l=l||[]).push(G,C)):G==="children"?typeof C!="string"&&typeof C!="number"||(l=l||[]).push(G,""+C):G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&(_.hasOwnProperty(G)?(C!=null&&G==="onScroll"&&Qe("scroll",e),l||M===C||(l=[])):(l=l||[]).push(G,C))}n&&(l=l||[]).push("style",n);var G=l;(t.updateQueue=G)&&(t.flags|=4)}},oc=function(e,t,n,r){n!==r&&(t.flags|=4)};function fi(e,t){if(!Xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function kt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qf(e,t,n){var r=t.pendingProps;switch(Ao(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(t),null;case 1:return Nt(t.type)&&Yi(),kt(t),null;case 3:return r=t.stateNode,Cr(),Ye(bt),Ye(Ct),Bo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nn!==null&&(ga(nn),nn=null))),sa(e,t),kt(t),null;case 5:No(t);var s=sr(ai.current);if(n=t.type,e!==null&&t.stateNode!=null)sc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return kt(t),null}if(e=sr(mn.current),ts(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[pn]=t,r[ni]=l,e=(t.mode&1)!==0,n){case"dialog":Qe("cancel",r),Qe("close",r);break;case"iframe":case"object":case"embed":Qe("load",r);break;case"video":case"audio":for(s=0;s<Jr.length;s++)Qe(Jr[s],r);break;case"source":Qe("error",r);break;case"img":case"image":case"link":Qe("error",r),Qe("load",r);break;case"details":Qe("toggle",r);break;case"input":g(r,l),Qe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Qe("invalid",r);break;case"textarea":U(r,l),Qe("invalid",r)}tt(n,l),s=null;for(var m in l)if(l.hasOwnProperty(m)){var M=l[m];m==="children"?typeof M=="string"?r.textContent!==M&&(l.suppressHydrationWarning!==!0&&Wi(r.textContent,M,e),s=["children",M]):typeof M=="number"&&r.textContent!==""+M&&(l.suppressHydrationWarning!==!0&&Wi(r.textContent,M,e),s=["children",""+M]):_.hasOwnProperty(m)&&M!=null&&m==="onScroll"&&Qe("scroll",r)}switch(n){case"input":T(r),S(r,l,!0);break;case"textarea":T(r),H(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Zi)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{m=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=j(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=m.createElement(n,{is:r.is}):(e=m.createElement(n),n==="select"&&(m=e,r.multiple?m.multiple=!0:r.size&&(m.size=r.size))):e=m.createElementNS(e,n),e[pn]=t,e[ni]=r,ic(e,t,!1,!1),t.stateNode=e;e:{switch(m=ut(n,r),n){case"dialog":Qe("cancel",e),Qe("close",e),s=r;break;case"iframe":case"object":case"embed":Qe("load",e),s=r;break;case"video":case"audio":for(s=0;s<Jr.length;s++)Qe(Jr[s],e);s=r;break;case"source":Qe("error",e),s=r;break;case"img":case"image":case"link":Qe("error",e),Qe("load",e),s=r;break;case"details":Qe("toggle",e),s=r;break;case"input":g(e,r),s=a(e,r),Qe("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=se({},r,{value:void 0}),Qe("invalid",e);break;case"textarea":U(e,r),s=x(e,r),Qe("invalid",e);break;default:s=r}tt(n,s),M=s;for(l in M)if(M.hasOwnProperty(l)){var C=M[l];l==="style"?We(e,C):l==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Me(e,C)):l==="children"?typeof C=="string"?(n!=="textarea"||C!=="")&&ce(e,C):typeof C=="number"&&ce(e,""+C):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_.hasOwnProperty(l)?C!=null&&l==="onScroll"&&Qe("scroll",e):C!=null&&le(e,l,C,m))}switch(n){case"input":T(e),S(e,r,!1);break;case"textarea":T(e),H(e);break;case"option":r.value!=null&&e.setAttribute("value",""+R(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?v(e,!!r.multiple,l,!1):r.defaultValue!=null&&v(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return kt(t),null;case 6:if(e&&t.stateNode!=null)oc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=sr(ai.current),sr(mn.current),ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[pn]=t,(l=r.nodeValue!==n)&&(e=Vt,e!==null))switch(e.tag){case 3:Wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=t,t.stateNode=r}return kt(t),null;case 13:if(Ye(it),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Xe&&qt!==null&&t.mode&1&&!(t.flags&128))uu(),Ar(),t.flags|=98560,l=!1;else if(l=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[pn]=t}else Ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;kt(t),l=!1}else nn!==null&&(ga(nn),nn=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||it.current&1?yt===0&&(yt=3):_a())),t.updateQueue!==null&&(t.flags|=4),kt(t),null);case 4:return Cr(),sa(e,t),e===null&&ei(t.stateNode.containerInfo),kt(t),null;case 10:return ko(t.type._context),kt(t),null;case 17:return Nt(t.type)&&Yi(),kt(t),null;case 19:if(Ye(it),l=t.memoizedState,l===null)return kt(t),null;if(r=(t.flags&128)!==0,m=l.rendering,m===null)if(r)fi(l,!1);else{if(yt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(m=as(e),m!==null){for(t.flags|=128,fi(l,!1),r=m.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,m=l.alternate,m===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=m.childLanes,l.lanes=m.lanes,l.child=m.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=m.memoizedProps,l.memoizedState=m.memoizedState,l.updateQueue=m.updateQueue,l.type=m.type,e=m.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ze(it,it.current&1|2),t.child}e=e.sibling}l.tail!==null&&ct()>Dr&&(t.flags|=128,r=!0,fi(l,!1),t.lanes=4194304)}else{if(!r)if(e=as(m),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Xe)return kt(t),null}else 2*ct()-l.renderingStartTime>Dr&&n!==1073741824&&(t.flags|=128,r=!0,fi(l,!1),t.lanes=4194304);l.isBackwards?(m.sibling=t.child,t.child=m):(n=l.last,n!==null?n.sibling=m:t.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ct(),t.sibling=null,n=it.current,Ze(it,r?n&1|2:n&1),t):(kt(t),null);case 22:case 23:return ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?jt&1073741824&&(kt(t),t.subtreeFlags&6&&(t.flags|=8192)):kt(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function Yf(e,t){switch(Ao(t),t.tag){case 1:return Nt(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),Ye(bt),Ye(Ct),Bo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return No(t),null;case 13:if(Ye(it),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ye(it),null;case 4:return Cr(),null;case 10:return ko(t.type._context),null;case 22:case 23:return ya(),null;case 24:return null;default:return null}}var gs=!1,It=!1,Kf=typeof WeakSet=="function"?WeakSet:Set,de=null;function kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){at(e,t,r)}else n.current=null}function oa(e,t,n){try{n()}catch(r){at(e,t,r)}}var ac=!1;function Xf(e,t){if(yo=Oi,e=Fl(),uo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var m=0,M=-1,C=-1,G=0,re=0,ie=e,ne=null;t:for(;;){for(var ue;ie!==n||s!==0&&ie.nodeType!==3||(M=m+s),ie!==l||r!==0&&ie.nodeType!==3||(C=m+r),ie.nodeType===3&&(m+=ie.nodeValue.length),(ue=ie.firstChild)!==null;)ne=ie,ie=ue;for(;;){if(ie===e)break t;if(ne===n&&++G===s&&(M=m),ne===l&&++re===r&&(C=m),(ue=ie.nextSibling)!==null)break;ie=ne,ne=ie.parentNode}ie=ue}n=M===-1||C===-1?null:{start:M,end:C}}else n=null}n=n||{start:0,end:0}}else n=null;for(_o={focusedElem:e,selectionRange:n},Oi=!1,de=t;de!==null;)if(t=de,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,de=e;else for(;de!==null;){t=de;try{var pe=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(pe!==null){var me=pe.memoizedProps,dt=pe.memoizedState,b=t.stateNode,D=b.getSnapshotBeforeUpdate(t.elementType===t.type?me:rn(t.type,me),dt);b.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(oe){at(t,t.return,oe)}if(e=t.sibling,e!==null){e.return=t.return,de=e;break}de=t.return}return pe=ac,ac=!1,pe}function hi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&oa(t,n,l)}s=s.next}while(s!==r)}}function vs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lc(e){var t=e.alternate;t!==null&&(e.alternate=null,lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pn],delete t[ni],delete t[To],delete t[If],delete t[Df])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uc(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function la(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(la(e,t,n),e=e.sibling;e!==null;)la(e,t,n),e=e.sibling}function ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}var At=null,sn=!1;function qn(e,t,n){for(n=n.child;n!==null;)dc(e,t,n),n=n.sibling}function dc(e,t,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:It||kr(n,t);case 6:var r=At,s=sn;At=null,qn(e,t,n),At=r,sn=s,At!==null&&(sn?(e=At,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&(sn?(e=At,n=n.stateNode,e.nodeType===8?xo(e.parentNode,n):e.nodeType===1&&xo(e,n),qr(e)):xo(At,n.stateNode));break;case 4:r=At,s=sn,At=n.stateNode.containerInfo,sn=!0,qn(e,t,n),At=r,sn=s;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,m=l.destroy;l=l.tag,m!==void 0&&(l&2||l&4)&&oa(n,t,m),s=s.next}while(s!==r)}qn(e,t,n);break;case 1:if(!It&&(kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(M){at(n,t,M)}qn(e,t,n);break;case 21:qn(e,t,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,qn(e,t,n),It=r):qn(e,t,n);break;default:qn(e,t,n)}}function fc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Kf),t.forEach(function(r){var s=ah.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function on(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var l=e,m=t,M=m;e:for(;M!==null;){switch(M.tag){case 5:At=M.stateNode,sn=!1;break e;case 3:At=M.stateNode.containerInfo,sn=!0;break e;case 4:At=M.stateNode.containerInfo,sn=!0;break e}M=M.return}if(At===null)throw Error(u(160));dc(l,m,s),At=null,sn=!1;var C=s.alternate;C!==null&&(C.return=null),s.return=null}catch(G){at(s,t,G)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hc(t,e),t=t.sibling}function hc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(t,e),vn(e),r&4){try{hi(3,e,e.return),vs(3,e)}catch(me){at(e,e.return,me)}try{hi(5,e,e.return)}catch(me){at(e,e.return,me)}}break;case 1:on(t,e),vn(e),r&512&&n!==null&&kr(n,n.return);break;case 5:if(on(t,e),vn(e),r&512&&n!==null&&kr(n,n.return),e.flags&32){var s=e.stateNode;try{ce(s,"")}catch(me){at(e,e.return,me)}}if(r&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,m=n!==null?n.memoizedProps:l,M=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{M==="input"&&l.type==="radio"&&l.name!=null&&c(s,l),ut(M,m);var G=ut(M,l);for(m=0;m<C.length;m+=2){var re=C[m],ie=C[m+1];re==="style"?We(s,ie):re==="dangerouslySetInnerHTML"?Me(s,ie):re==="children"?ce(s,ie):le(s,re,ie,G)}switch(M){case"input":h(s,l);break;case"textarea":I(s,l);break;case"select":var ne=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var ue=l.value;ue!=null?v(s,!!l.multiple,ue,!1):ne!==!!l.multiple&&(l.defaultValue!=null?v(s,!!l.multiple,l.defaultValue,!0):v(s,!!l.multiple,l.multiple?[]:"",!1))}s[ni]=l}catch(me){at(e,e.return,me)}}break;case 6:if(on(t,e),vn(e),r&4){if(e.stateNode===null)throw Error(u(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(me){at(e,e.return,me)}}break;case 3:if(on(t,e),vn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qr(t.containerInfo)}catch(me){at(e,e.return,me)}break;case 4:on(t,e),vn(e);break;case 13:on(t,e),vn(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(fa=ct())),r&4&&fc(e);break;case 22:if(re=n!==null&&n.memoizedState!==null,e.mode&1?(It=(G=It)||re,on(t,e),It=G):on(t,e),vn(e),r&8192){if(G=e.memoizedState!==null,(e.stateNode.isHidden=G)&&!re&&e.mode&1)for(de=e,re=e.child;re!==null;){for(ie=de=re;de!==null;){switch(ne=de,ue=ne.child,ne.tag){case 0:case 11:case 14:case 15:hi(4,ne,ne.return);break;case 1:kr(ne,ne.return);var pe=ne.stateNode;if(typeof pe.componentWillUnmount=="function"){r=ne,n=ne.return;try{t=r,pe.props=t.memoizedProps,pe.state=t.memoizedState,pe.componentWillUnmount()}catch(me){at(r,n,me)}}break;case 5:kr(ne,ne.return);break;case 22:if(ne.memoizedState!==null){gc(ie);continue}}ue!==null?(ue.return=ne,de=ue):gc(ie)}re=re.sibling}e:for(re=null,ie=e;;){if(ie.tag===5){if(re===null){re=ie;try{s=ie.stateNode,G?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(M=ie.stateNode,C=ie.memoizedProps.style,m=C!=null&&C.hasOwnProperty("display")?C.display:null,M.style.display=Oe("display",m))}catch(me){at(e,e.return,me)}}}else if(ie.tag===6){if(re===null)try{ie.stateNode.nodeValue=G?"":ie.memoizedProps}catch(me){at(e,e.return,me)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===e)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===e)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===e)break e;re===ie&&(re=null),ie=ie.return}re===ie&&(re=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:on(t,e),vn(e),r&4&&fc(e);break;case 21:break;default:on(t,e),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uc(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ce(s,""),r.flags&=-33);var l=cc(e);ua(e,l,s);break;case 3:case 4:var m=r.stateNode.containerInfo,M=cc(e);la(e,M,m);break;default:throw Error(u(161))}}catch(C){at(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jf(e,t,n){de=e,pc(e)}function pc(e,t,n){for(var r=(e.mode&1)!==0;de!==null;){var s=de,l=s.child;if(s.tag===22&&r){var m=s.memoizedState!==null||gs;if(!m){var M=s.alternate,C=M!==null&&M.memoizedState!==null||It;M=gs;var G=It;if(gs=m,(It=C)&&!G)for(de=s;de!==null;)m=de,C=m.child,m.tag===22&&m.memoizedState!==null?vc(s):C!==null?(C.return=m,de=C):vc(s);for(;l!==null;)de=l,pc(l),l=l.sibling;de=s,gs=M,It=G}mc(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,de=l):mc(e)}}function mc(e){for(;de!==null;){var t=de;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:It||vs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!It)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:rn(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&gu(t,l,r);break;case 3:var m=t.updateQueue;if(m!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gu(t,m,n)}break;case 5:var M=t.stateNode;if(n===null&&t.flags&4){n=M;var C=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&n.focus();break;case"img":C.src&&(n.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var G=t.alternate;if(G!==null){var re=G.memoizedState;if(re!==null){var ie=re.dehydrated;ie!==null&&qr(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}It||t.flags&512&&aa(t)}catch(ne){at(t,t.return,ne)}}if(t===e){de=null;break}if(n=t.sibling,n!==null){n.return=t.return,de=n;break}de=t.return}}function gc(e){for(;de!==null;){var t=de;if(t===e){de=null;break}var n=t.sibling;if(n!==null){n.return=t.return,de=n;break}de=t.return}}function vc(e){for(;de!==null;){var t=de;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vs(4,t)}catch(C){at(t,n,C)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(C){at(t,s,C)}}var l=t.return;try{aa(t)}catch(C){at(t,l,C)}break;case 5:var m=t.return;try{aa(t)}catch(C){at(t,m,C)}}}catch(C){at(t,t.return,C)}if(t===e){de=null;break}var M=t.sibling;if(M!==null){M.return=t.return,de=M;break}de=t.return}}var eh=Math.ceil,ys=_e.ReactCurrentDispatcher,ca=_e.ReactCurrentOwner,Xt=_e.ReactCurrentBatchConfig,$e=0,Rt=null,mt=null,Pt=0,jt=0,Ir=Bn(0),yt=0,pi=null,ar=0,_s=0,da=0,mi=null,Bt=null,fa=0,Dr=1/0,zn=null,ws=!1,ha=null,jn=null,Ss=!1,Wn=null,xs=0,gi=0,pa=null,Ts=-1,Rs=0;function Ot(){return $e&6?ct():Ts!==-1?Ts:Ts=ct()}function Zn(e){return e.mode&1?$e&2&&Pt!==0?Pt&-Pt:bf.transition!==null?(Rs===0&&(Rs=cl()),Rs):(e=je,e!==0||(e=window.event,e=e===void 0?16:_l(e.type)),e):1}function an(e,t,n,r){if(50<gi)throw gi=0,pa=null,Error(u(185));Br(e,n,r),(!($e&2)||e!==Rt)&&(e===Rt&&(!($e&2)&&(_s|=n),yt===4&&Qn(e,Pt)),Ht(e,r),n===1&&$e===0&&!(t.mode&1)&&(Dr=ct()+500,Xi&&Gn()))}function Ht(e,t){var n=e.callbackNode;Od(e,t);var r=ki(e,e===Rt?Pt:0);if(r===0)n!==null&&al(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&al(n),t===1)e.tag===0?Of(_c.bind(null,e)):iu(_c.bind(null,e)),Uf(function(){!($e&6)&&Gn()}),n=null;else{switch(dl(r)){case 1:n=js;break;case 4:n=ll;break;case 16:n=Li;break;case 536870912:n=ul;break;default:n=Li}n=Ac(n,yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yc(e,t){if(Ts=-1,Rs=0,$e&6)throw Error(u(327));var n=e.callbackNode;if(Or()&&e.callbackNode!==n)return null;var r=ki(e,e===Rt?Pt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ms(e,r);else{t=r;var s=$e;$e|=2;var l=Sc();(Rt!==e||Pt!==t)&&(zn=null,Dr=ct()+500,ur(e,t));do try{rh();break}catch(M){wc(e,M)}while(!0);Uo(),ys.current=l,$e=s,mt!==null?t=0:(Rt=null,Pt=0,t=yt)}if(t!==0){if(t===2&&(s=Ws(e),s!==0&&(r=s,t=ma(e,s))),t===1)throw n=pi,ur(e,0),Qn(e,r),Ht(e,ct()),n;if(t===6)Qn(e,r);else{if(s=e.current.alternate,!(r&30)&&!th(s)&&(t=Ms(e,r),t===2&&(l=Ws(e),l!==0&&(r=l,t=ma(e,l))),t===1))throw n=pi,ur(e,0),Qn(e,r),Ht(e,ct()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:cr(e,Bt,zn);break;case 3:if(Qn(e,r),(r&130023424)===r&&(t=fa+500-ct(),10<t)){if(ki(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Ot(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=So(cr.bind(null,e,Bt,zn),t);break}cr(e,Bt,zn);break;case 4:if(Qn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var m=31-en(r);l=1<<m,m=t[m],m>s&&(s=m),r&=~l}if(r=s,r=ct()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eh(r/1960))-r,10<r){e.timeoutHandle=So(cr.bind(null,e,Bt,zn),r);break}cr(e,Bt,zn);break;case 5:cr(e,Bt,zn);break;default:throw Error(u(329))}}}return Ht(e,ct()),e.callbackNode===n?yc.bind(null,e):null}function ma(e,t){var n=mi;return e.current.memoizedState.isDehydrated&&(ur(e,t).flags|=256),e=Ms(e,t),e!==2&&(t=Bt,Bt=n,t!==null&&ga(t)),e}function ga(e){Bt===null?Bt=e:Bt.push.apply(Bt,e)}function th(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],l=s.getSnapshot;s=s.value;try{if(!tn(l(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t){for(t&=~da,t&=~_s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-en(t),r=1<<n;e[n]=-1,t&=~r}}function _c(e){if($e&6)throw Error(u(327));Or();var t=ki(e,0);if(!(t&1))return Ht(e,ct()),null;var n=Ms(e,t);if(e.tag!==0&&n===2){var r=Ws(e);r!==0&&(t=r,n=ma(e,r))}if(n===1)throw n=pi,ur(e,0),Qn(e,t),Ht(e,ct()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cr(e,Bt,zn),Ht(e,ct()),null}function va(e,t){var n=$e;$e|=1;try{return e(t)}finally{$e=n,$e===0&&(Dr=ct()+500,Xi&&Gn())}}function lr(e){Wn!==null&&Wn.tag===0&&!($e&6)&&Or();var t=$e;$e|=1;var n=Xt.transition,r=je;try{if(Xt.transition=null,je=1,e)return e()}finally{je=r,Xt.transition=n,$e=t,!($e&6)&&Gn()}}function ya(){jt=Ir.current,Ye(Ir)}function ur(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cf(n)),mt!==null)for(n=mt.return;n!==null;){var r=n;switch(Ao(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:Cr(),Ye(bt),Ye(Ct),Bo();break;case 5:No(r);break;case 4:Cr();break;case 13:Ye(it);break;case 19:Ye(it);break;case 10:ko(r.type._context);break;case 22:case 23:ya()}n=n.return}if(Rt=e,mt=e=Yn(e.current,null),Pt=jt=t,yt=0,pi=null,da=_s=ar=0,Bt=mi=null,ir!==null){for(t=0;t<ir.length;t++)if(n=ir[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,l=n.pending;if(l!==null){var m=l.next;l.next=s,r.next=m}n.pending=r}ir=null}return e}function wc(e,t){do{var n=mt;try{if(Uo(),ls.current=fs,us){for(var r=st.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}us=!1}if(or=0,Tt=vt=st=null,li=!1,ui=0,ca.current=null,n===null||n.return===null){yt=1,pi=t,mt=null;break}e:{var l=e,m=n.return,M=n,C=t;if(t=Pt,M.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var G=C,re=M,ie=re.tag;if(!(re.mode&1)&&(ie===0||ie===11||ie===15)){var ne=re.alternate;ne?(re.updateQueue=ne.updateQueue,re.memoizedState=ne.memoizedState,re.lanes=ne.lanes):(re.updateQueue=null,re.memoizedState=null)}var ue=qu(m);if(ue!==null){ue.flags&=-257,ju(ue,m,M,l,t),ue.mode&1&&Vu(l,G,t),t=ue,C=G;var pe=t.updateQueue;if(pe===null){var me=new Set;me.add(C),t.updateQueue=me}else pe.add(C);break e}else{if(!(t&1)){Vu(l,G,t),_a();break e}C=Error(u(426))}}else if(Xe&&M.mode&1){var dt=qu(m);if(dt!==null){!(dt.flags&65536)&&(dt.flags|=256),ju(dt,m,M,l,t),zo(Ur(C,M));break e}}l=C=Ur(C,M),yt!==4&&(yt=2),mi===null?mi=[l]:mi.push(l),l=m;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var b=Gu(l,C,t);mu(l,b);break e;case 1:M=C;var D=l.type,N=l.stateNode;if(!(l.flags&128)&&(typeof D.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(jn===null||!jn.has(N)))){l.flags|=65536,t&=-t,l.lanes|=t;var oe=$u(l,M,t);mu(l,oe);break e}}l=l.return}while(l!==null)}Tc(n)}catch(ve){t=ve,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(!0)}function Sc(){var e=ys.current;return ys.current=fs,e===null?fs:e}function _a(){(yt===0||yt===3||yt===2)&&(yt=4),Rt===null||!(ar&268435455)&&!(_s&268435455)||Qn(Rt,Pt)}function Ms(e,t){var n=$e;$e|=2;var r=Sc();(Rt!==e||Pt!==t)&&(zn=null,ur(e,t));do try{nh();break}catch(s){wc(e,s)}while(!0);if(Uo(),$e=n,ys.current=r,mt!==null)throw Error(u(261));return Rt=null,Pt=0,yt}function nh(){for(;mt!==null;)xc(mt)}function rh(){for(;mt!==null&&!Ad();)xc(mt)}function xc(e){var t=Ec(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?Tc(e):mt=t,ca.current=null}function Tc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yf(n,t),n!==null){n.flags&=32767,mt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yt=6,mt=null;return}}else if(n=Qf(n,t,jt),n!==null){mt=n;return}if(t=t.sibling,t!==null){mt=t;return}mt=t=e}while(t!==null);yt===0&&(yt=5)}function cr(e,t,n){var r=je,s=Xt.transition;try{Xt.transition=null,je=1,ih(e,t,n,r)}finally{Xt.transition=s,je=r}return null}function ih(e,t,n,r){do Or();while(Wn!==null);if($e&6)throw Error(u(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(bd(e,l),e===Rt&&(mt=Rt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ss||(Ss=!0,Ac(Li,function(){return Or(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Xt.transition,Xt.transition=null;var m=je;je=1;var M=$e;$e|=4,ca.current=null,Xf(e,n),hc(n,e),Rf(_o),Oi=!!yo,_o=yo=null,e.current=n,Jf(n),Pd(),$e=M,je=m,Xt.transition=l}else e.current=n;if(Ss&&(Ss=!1,Wn=e,xs=s),l=e.pendingLanes,l===0&&(jn=null),Cd(n.stateNode),Ht(e,ct()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ws)throw ws=!1,e=ha,ha=null,e;return xs&1&&e.tag!==0&&Or(),l=e.pendingLanes,l&1?e===pa?gi++:(gi=0,pa=e):gi=0,Gn(),null}function Or(){if(Wn!==null){var e=dl(xs),t=Xt.transition,n=je;try{if(Xt.transition=null,je=16>e?16:e,Wn===null)var r=!1;else{if(e=Wn,Wn=null,xs=0,$e&6)throw Error(u(331));var s=$e;for($e|=4,de=e.current;de!==null;){var l=de,m=l.child;if(de.flags&16){var M=l.deletions;if(M!==null){for(var C=0;C<M.length;C++){var G=M[C];for(de=G;de!==null;){var re=de;switch(re.tag){case 0:case 11:case 15:hi(8,re,l)}var ie=re.child;if(ie!==null)ie.return=re,de=ie;else for(;de!==null;){re=de;var ne=re.sibling,ue=re.return;if(lc(re),re===G){de=null;break}if(ne!==null){ne.return=ue,de=ne;break}de=ue}}}var pe=l.alternate;if(pe!==null){var me=pe.child;if(me!==null){pe.child=null;do{var dt=me.sibling;me.sibling=null,me=dt}while(me!==null)}}de=l}}if(l.subtreeFlags&2064&&m!==null)m.return=l,de=m;else e:for(;de!==null;){if(l=de,l.flags&2048)switch(l.tag){case 0:case 11:case 15:hi(9,l,l.return)}var b=l.sibling;if(b!==null){b.return=l.return,de=b;break e}de=l.return}}var D=e.current;for(de=D;de!==null;){m=de;var N=m.child;if(m.subtreeFlags&2064&&N!==null)N.return=m,de=N;else e:for(m=D;de!==null;){if(M=de,M.flags&2048)try{switch(M.tag){case 0:case 11:case 15:vs(9,M)}}catch(ve){at(M,M.return,ve)}if(M===m){de=null;break e}var oe=M.sibling;if(oe!==null){oe.return=M.return,de=oe;break e}de=M.return}}if($e=s,Gn(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(zi,e)}catch{}r=!0}return r}finally{je=n,Xt.transition=t}}return!1}function Rc(e,t,n){t=Ur(n,t),t=Gu(e,t,1),e=Vn(e,t,1),t=Ot(),e!==null&&(Br(e,1,t),Ht(e,t))}function at(e,t,n){if(e.tag===3)Rc(e,e,n);else for(;t!==null;){if(t.tag===3){Rc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=Ur(n,e),e=$u(t,e,1),t=Vn(t,e,1),e=Ot(),t!==null&&(Br(t,1,e),Ht(t,e));break}}t=t.return}}function sh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ot(),e.pingedLanes|=e.suspendedLanes&n,Rt===e&&(Pt&n)===n&&(yt===4||yt===3&&(Pt&130023424)===Pt&&500>ct()-fa?ur(e,0):da|=n),Ht(e,t)}function Mc(e,t){t===0&&(e.mode&1?(t=Ui,Ui<<=1,!(Ui&130023424)&&(Ui=4194304)):t=1);var n=Ot();e=An(e,t),e!==null&&(Br(e,t,n),Ht(e,n))}function oh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mc(e,n)}function ah(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Mc(e,n)}var Ec;Ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||bt.current)Ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ft=!1,Zf(e,t,n);Ft=!!(e.flags&131072)}else Ft=!1,Xe&&t.flags&1048576&&su(t,es,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ms(e,t),e=t.pendingProps;var s=Rr(t,Ct.current);zr(t,n),s=$o(null,t,r,e,s,n);var l=Vo();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Nt(r)?(l=!0,Ki(t)):l=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Oo(t),s.updater=hs,t.stateNode=s,s._reactInternals=t,Yo(t,r,e,n),t=ea(null,t,r,!0,l,n)):(t.tag=0,Xe&&l&&Eo(t),Dt(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ms(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=uh(r),e=rn(r,e),s){case 0:t=Jo(null,t,r,e,n);break e;case 1:t=Xu(null,t,r,e,n);break e;case 11:t=Wu(null,t,r,e,n);break e;case 14:t=Zu(null,t,r,rn(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:rn(r,s),Jo(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:rn(r,s),Xu(e,t,r,s,n);case 3:e:{if(Ju(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,s=l.element,pu(e,t),os(t,r,null,n);var m=t.memoizedState;if(r=m.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){s=Ur(Error(u(423)),t),t=ec(e,t,r,n,s);break e}else if(r!==s){s=Ur(Error(u(424)),t),t=ec(e,t,r,n,s);break e}else for(qt=Fn(t.stateNode.containerInfo.firstChild),Vt=t,Xe=!0,nn=null,n=fu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===s){t=Ln(e,t,n);break e}Dt(e,t,r,n)}t=t.child}return t;case 5:return vu(t),e===null&&Lo(t),r=t.type,s=t.pendingProps,l=e!==null?e.memoizedProps:null,m=s.children,wo(r,s)?m=null:l!==null&&wo(r,l)&&(t.flags|=32),Ku(e,t),Dt(e,t,m,n),t.child;case 6:return e===null&&Lo(t),null;case 13:return tc(e,t,n);case 4:return bo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):Dt(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:rn(r,s),Wu(e,t,r,s,n);case 7:return Dt(e,t,t.pendingProps,n),t.child;case 8:return Dt(e,t,t.pendingProps.children,n),t.child;case 12:return Dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,l=t.memoizedProps,m=s.value,Ze(rs,r._currentValue),r._currentValue=m,l!==null)if(tn(l.value,m)){if(l.children===s.children&&!bt.current){t=Ln(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var M=l.dependencies;if(M!==null){m=l.child;for(var C=M.firstContext;C!==null;){if(C.context===r){if(l.tag===1){C=Pn(-1,n&-n),C.tag=2;var G=l.updateQueue;if(G!==null){G=G.shared;var re=G.pending;re===null?C.next=C:(C.next=re.next,re.next=C),G.pending=C}}l.lanes|=n,C=l.alternate,C!==null&&(C.lanes|=n),Io(l.return,n,t),M.lanes|=n;break}C=C.next}}else if(l.tag===10)m=l.type===t.type?null:l.child;else if(l.tag===18){if(m=l.return,m===null)throw Error(u(341));m.lanes|=n,M=m.alternate,M!==null&&(M.lanes|=n),Io(m,n,t),m=l.sibling}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===t){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}Dt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,zr(t,n),s=Yt(s),r=r(s),t.flags|=1,Dt(e,t,r,n),t.child;case 14:return r=t.type,s=rn(r,t.pendingProps),s=rn(r.type,s),Zu(e,t,r,s,n);case 15:return Qu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:rn(r,s),ms(e,t),t.tag=1,Nt(r)?(e=!0,Ki(t)):e=!1,zr(t,n),Bu(t,r,s),Yo(t,r,s,n),ea(null,t,r,!0,e,n);case 19:return rc(e,t,n);case 22:return Yu(e,t,n)}throw Error(u(156,t.tag))};function Ac(e,t){return ol(e,t)}function lh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,r){return new lh(e,t,n,r)}function wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uh(e){if(typeof e=="function")return wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ee)return 11;if(e===ot)return 14}return 2}function Yn(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Es(e,t,n,r,s,l){var m=2;if(r=e,typeof e=="function")wa(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case Ne:return dr(n.children,s,l,t);case He:m=8,s|=8;break;case Fe:return e=Jt(12,n,t,s|2),e.elementType=Fe,e.lanes=l,e;case Ue:return e=Jt(13,n,t,s),e.elementType=Ue,e.lanes=l,e;case Re:return e=Jt(19,n,t,s),e.elementType=Re,e.lanes=l,e;case Ge:return As(n,s,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Be:m=10;break e;case et:m=9;break e;case Ee:m=11;break e;case ot:m=14;break e;case qe:m=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=Jt(m,n,t,s),t.elementType=e,t.type=r,t.lanes=l,t}function dr(e,t,n,r){return e=Jt(7,e,r,t),e.lanes=n,e}function As(e,t,n,r){return e=Jt(22,e,r,t),e.elementType=Ge,e.lanes=n,e.stateNode={isHidden:!1},e}function Sa(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function xa(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ch(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ta(e,t,n,r,s,l,m,M,C){return e=new ch(e,t,n,M,C),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Jt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oo(l),e}function dh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:De,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pc(e){if(!e)return Hn;e=e._reactInternals;e:{if(Ke(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(Nt(n))return nu(e,n,t)}return t}function Lc(e,t,n,r,s,l,m,M,C){return e=Ta(n,r,!0,e,s,l,m,M,C),e.context=Pc(null),n=e.current,r=Ot(),s=Zn(n),l=Pn(r,s),l.callback=t??null,Vn(n,l,s),e.current.lanes=s,Br(e,s,r),Ht(e,r),e}function Ps(e,t,n,r){var s=t.current,l=Ot(),m=Zn(s);return n=Pc(n),t.context===null?t.context=n:t.pendingContext=n,t=Pn(l,m),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vn(s,t,m),e!==null&&(an(e,s,m,l),ss(e,s,m)),m}function Ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ra(e,t){zc(e,t),(e=e.alternate)&&zc(e,t)}var Cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ma(e){this._internalRoot=e}zs.prototype.render=Ma.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Ps(e,t,null,null)},zs.prototype.unmount=Ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){Ps(null,e,null,null)}),t[Tn]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=pl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<On.length&&t!==0&&t<On[n].priority;n++);On.splice(n,0,e),n===0&&vl(e)}};function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uc(){}function fh(e,t,n,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var G=Ls(m);l.call(G)}}var m=Lc(t,r,e,0,null,!1,!1,"",Uc);return e._reactRootContainer=m,e[Tn]=m.current,ei(e.nodeType===8?e.parentNode:e),lr(),m}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var M=r;r=function(){var G=Ls(C);M.call(G)}}var C=Ta(e,0,!1,null,null,!1,!1,"",Uc);return e._reactRootContainer=C,e[Tn]=C.current,ei(e.nodeType===8?e.parentNode:e),lr(function(){Ps(t,C,n,r)}),C}function Us(e,t,n,r,s){var l=n._reactRootContainer;if(l){var m=l;if(typeof s=="function"){var M=s;s=function(){var C=Ls(m);M.call(C)}}Ps(t,m,e,s)}else m=fh(n,t,e,s,r);return Ls(m)}fl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fr(t.pendingLanes);n!==0&&(Qs(t,n|1),Ht(t,ct()),!($e&6)&&(Dr=ct()+500,Gn()))}break;case 13:lr(function(){var r=An(e,1);if(r!==null){var s=Ot();an(r,e,1,s)}}),Ra(e,1)}},Ys=function(e){if(e.tag===13){var t=An(e,134217728);if(t!==null){var n=Ot();an(t,e,134217728,n)}Ra(e,134217728)}},hl=function(e){if(e.tag===13){var t=Zn(e),n=An(e,t);if(n!==null){var r=Ot();an(n,e,t,r)}Ra(e,t)}},pl=function(){return je},ml=function(e,t){var n=je;try{return je=e,t()}finally{je=n}},pt=function(e,t,n){switch(t){case"input":if(h(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Qi(r);if(!s)throw Error(u(90));A(r),h(r,s)}}}break;case"textarea":I(e,n);break;case"select":t=n.value,t!=null&&v(e,!!n.multiple,t,!1)}},xt=va,Lt=lr;var hh={usingClientEntryPoint:!1,Events:[ri,xr,Qi,wt,St,va]},vi={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ph={bundleType:vi.bundleType,version:vi.version,rendererPackageName:vi.rendererPackageName,rendererConfig:vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_e.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=il(e),e===null?null:e.stateNode},findFiberByHostInstance:vi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ks.isDisabled&&ks.supportsFiber)try{zi=ks.inject(ph),hn=ks}catch{}}return Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hh,Gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ea(t))throw Error(u(200));return dh(e,t,null,n)},Gt.createRoot=function(e,t){if(!Ea(e))throw Error(u(299));var n=!1,r="",s=Cc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ta(e,1,!1,null,null,n,!1,r,s),e[Tn]=t.current,ei(e.nodeType===8?e.parentNode:e),new Ma(t)},Gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=il(t),e=e===null?null:e.stateNode,e},Gt.flushSync=function(e){return lr(e)},Gt.hydrate=function(e,t,n){if(!Cs(t))throw Error(u(200));return Us(null,e,t,!0,n)},Gt.hydrateRoot=function(e,t,n){if(!Ea(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,s=!1,l="",m=Cc;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),t=Lc(t,null,e,1,n??null,s,!1,l,m),e[Tn]=t.current,ei(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new zs(t)},Gt.render=function(e,t,n){if(!Cs(t))throw Error(u(200));return Us(null,e,t,!1,n)},Gt.unmountComponentAtNode=function(e){if(!Cs(e))throw Error(u(40));return e._reactRootContainer?(lr(function(){Us(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1},Gt.unstable_batchedUpdates=va,Gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cs(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Us(e,t,n,!1,r)},Gt.version="18.3.1-next-f1338f8080-20240426",Gt}var Bc;function Rh(){if(Bc)return La.exports;Bc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),La.exports=Th(),La.exports}var Hc;function Mh(){if(Hc)return Is;Hc=1;var i=Rh();return Is.createRoot=i.createRoot,Is.hydrateRoot=i.hydrateRoot,Is}var Eh=Mh(),_i={},Gc;function Ah(){if(Gc)return _i;Gc=1,Object.defineProperty(_i,"__esModule",{value:!0}),_i.parse=E,_i.serialize=L;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,y=/^[\u0020-\u003A\u003D-\u007E]*$/,_=Object.prototype.toString,w=(()=>{const $=function(){};return $.prototype=Object.create(null),$})();function E($,te){const X=new w,K=$.length;if(K<2)return X;const J=(te==null?void 0:te.decode)||V;let W=0;do{const Q=$.indexOf("=",W);if(Q===-1)break;const le=$.indexOf(";",W),_e=le===-1?K:le;if(Q>_e){W=$.lastIndexOf(";",Q-1)+1;continue}const ze=z($,W,Q),De=P($,Q,ze),Ne=$.slice(ze,De);if(X[Ne]===void 0){let He=z($,Q+1,_e),Fe=P($,_e,He);const Be=J($.slice(He,Fe));X[Ne]=Be}W=_e+1}while(W<K);return X}function z($,te,X){do{const K=$.charCodeAt(te);if(K!==32&&K!==9)return te}while(++te<X);return X}function P($,te,X){for(;te>X;){const K=$.charCodeAt(--te);if(K!==32&&K!==9)return te+1}return X}function L($,te,X){const K=(X==null?void 0:X.encode)||encodeURIComponent;if(!i.test($))throw new TypeError(`argument name is invalid: ${$}`);const J=K(te);if(!o.test(J))throw new TypeError(`argument val is invalid: ${te}`);let W=$+"="+J;if(!X)return W;if(X.maxAge!==void 0){if(!Number.isInteger(X.maxAge))throw new TypeError(`option maxAge is invalid: ${X.maxAge}`);W+="; Max-Age="+X.maxAge}if(X.domain){if(!u.test(X.domain))throw new TypeError(`option domain is invalid: ${X.domain}`);W+="; Domain="+X.domain}if(X.path){if(!y.test(X.path))throw new TypeError(`option path is invalid: ${X.path}`);W+="; Path="+X.path}if(X.expires){if(!Z(X.expires)||!Number.isFinite(X.expires.valueOf()))throw new TypeError(`option expires is invalid: ${X.expires}`);W+="; Expires="+X.expires.toUTCString()}if(X.httpOnly&&(W+="; HttpOnly"),X.secure&&(W+="; Secure"),X.partitioned&&(W+="; Partitioned"),X.priority)switch(typeof X.priority=="string"?X.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${X.priority}`)}if(X.sameSite)switch(typeof X.sameSite=="string"?X.sameSite.toLowerCase():X.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${X.sameSite}`)}return W}function V($){if($.indexOf("%")===-1)return $;try{return decodeURIComponent($)}catch{return $}}function Z($){return _.call($)==="[object Date]"}return _i}Ah();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $c="popstate";function Ph(i={}){function o(_,w){let{pathname:E="/",search:z="",hash:P=""}=fr(_.location.hash.substring(1));return!E.startsWith("/")&&!E.startsWith(".")&&(E="/"+E),Fa("",{pathname:E,search:z,hash:P},w.state&&w.state.usr||null,w.state&&w.state.key||"default")}function u(_,w){let E=_.document.querySelector("base"),z="";if(E&&E.getAttribute("href")){let P=_.location.href,L=P.indexOf("#");z=L===-1?P:P.slice(0,L)}return z+"#"+(typeof w=="string"?w:Si(w))}function y(_,w){Wt(_.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(w)})`)}return zh(o,u,y,i)}function Je(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function Wt(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Lh(){return Math.random().toString(36).substring(2,10)}function Vc(i,o){return{usr:i.state,key:i.key,idx:o}}function Fa(i,o,u=null,y){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?fr(o):o,state:u,key:o&&o.key||y||Lh()}}function Si({pathname:i="/",search:o="",hash:u=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function fr(i){let o={};if(i){let u=i.indexOf("#");u>=0&&(o.hash=i.substring(u),i=i.substring(0,u));let y=i.indexOf("?");y>=0&&(o.search=i.substring(y),i=i.substring(0,y)),i&&(o.pathname=i)}return o}function zh(i,o,u,y={}){let{window:_=document.defaultView,v5Compat:w=!1}=y,E=_.history,z="POP",P=null,L=V();L==null&&(L=0,E.replaceState({...E.state,idx:L},""));function V(){return(E.state||{idx:null}).idx}function Z(){z="POP";let J=V(),W=J==null?null:J-L;L=J,P&&P({action:z,location:K.location,delta:W})}function $(J,W){z="PUSH";let Q=Fa(K.location,J,W);u(Q,J),L=V()+1;let le=Vc(Q,L),_e=K.createHref(Q);try{E.pushState(le,"",_e)}catch(ze){if(ze instanceof DOMException&&ze.name==="DataCloneError")throw ze;_.location.assign(_e)}w&&P&&P({action:z,location:K.location,delta:1})}function te(J,W){z="REPLACE";let Q=Fa(K.location,J,W);u(Q,J),L=V();let le=Vc(Q,L),_e=K.createHref(Q);E.replaceState(le,"",_e),w&&P&&P({action:z,location:K.location,delta:0})}function X(J){let W=_.location.origin!=="null"?_.location.origin:_.location.href,Q=typeof J=="string"?J:Si(J);return Q=Q.replace(/ $/,"%20"),Je(W,`No window.location.(origin|href) available to create URL for href: ${Q}`),new URL(Q,W)}let K={get action(){return z},get location(){return i(_,E)},listen(J){if(P)throw new Error("A history only accepts one active listener");return _.addEventListener($c,Z),P=J,()=>{_.removeEventListener($c,Z),P=null}},createHref(J){return o(_,J)},createURL:X,encodeLocation(J){let W=X(J);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:$,replace:te,go(J){return E.go(J)}};return K}function cd(i,o,u="/"){return Ch(i,o,u,!1)}function Ch(i,o,u,y){let _=typeof o=="string"?fr(o):o,w=Jn(_.pathname||"/",u);if(w==null)return null;let E=dd(i);Uh(E);let z=null;for(let P=0;z==null&&P<E.length;++P){let L=$h(w);z=Hh(E[P],L,y)}return z}function dd(i,o=[],u=[],y=""){let _=(w,E,z)=>{let P={relativePath:z===void 0?w.path||"":z,caseSensitive:w.caseSensitive===!0,childrenIndex:E,route:w};P.relativePath.startsWith("/")&&(Je(P.relativePath.startsWith(y),`Absolute route path "${P.relativePath}" nested under path "${y}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),P.relativePath=P.relativePath.slice(y.length));let L=Cn([y,P.relativePath]),V=u.concat(P);w.children&&w.children.length>0&&(Je(w.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${L}".`),dd(w.children,o,V,L)),!(w.path==null&&!w.index)&&o.push({path:L,score:Fh(L,w.index),routesMeta:V})};return i.forEach((w,E)=>{var z;if(w.path===""||!((z=w.path)!=null&&z.includes("?")))_(w,E);else for(let P of fd(w.path))_(w,E,P)}),o}function fd(i){let o=i.split("/");if(o.length===0)return[];let[u,...y]=o,_=u.endsWith("?"),w=u.replace(/\?$/,"");if(y.length===0)return _?[w,""]:[w];let E=fd(y.join("/")),z=[];return z.push(...E.map(P=>P===""?w:[w,P].join("/"))),_&&z.push(...E),z.map(P=>i.startsWith("/")&&P===""?"/":P)}function Uh(i){i.sort((o,u)=>o.score!==u.score?u.score-o.score:Bh(o.routesMeta.map(y=>y.childrenIndex),u.routesMeta.map(y=>y.childrenIndex)))}var kh=/^:[\w-]+$/,Ih=3,Dh=2,Oh=1,bh=10,Nh=-2,qc=i=>i==="*";function Fh(i,o){let u=i.split("/"),y=u.length;return u.some(qc)&&(y+=Nh),o&&(y+=Dh),u.filter(_=>!qc(_)).reduce((_,w)=>_+(kh.test(w)?Ih:w===""?Oh:bh),y)}function Bh(i,o){return i.length===o.length&&i.slice(0,-1).every((y,_)=>y===o[_])?i[i.length-1]-o[o.length-1]:0}function Hh(i,o,u=!1){let{routesMeta:y}=i,_={},w="/",E=[];for(let z=0;z<y.length;++z){let P=y[z],L=z===y.length-1,V=w==="/"?o:o.slice(w.length)||"/",Z=Hs({path:P.relativePath,caseSensitive:P.caseSensitive,end:L},V),$=P.route;if(!Z&&L&&u&&!y[y.length-1].route.index&&(Z=Hs({path:P.relativePath,caseSensitive:P.caseSensitive,end:!1},V)),!Z)return null;Object.assign(_,Z.params),E.push({params:_,pathname:Cn([w,Z.pathname]),pathnameBase:Wh(Cn([w,Z.pathnameBase])),route:$}),Z.pathnameBase!=="/"&&(w=Cn([w,Z.pathnameBase]))}return E}function Hs(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,y]=Gh(i.path,i.caseSensitive,i.end),_=o.match(u);if(!_)return null;let w=_[0],E=w.replace(/(.)\/+$/,"$1"),z=_.slice(1);return{params:y.reduce((L,{paramName:V,isOptional:Z},$)=>{if(V==="*"){let X=z[$]||"";E=w.slice(0,w.length-X.length).replace(/(.)\/+$/,"$1")}const te=z[$];return Z&&!te?L[V]=void 0:L[V]=(te||"").replace(/%2F/g,"/"),L},{}),pathname:w,pathnameBase:E,pattern:i}}function Gh(i,o=!1,u=!0){Wt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let y=[],_="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(E,z,P)=>(y.push({paramName:z,isOptional:P!=null}),P?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(y.push({paramName:"*"}),_+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?_+="\\/*$":i!==""&&i!=="/"&&(_+="(?:(?=\\/|$))"),[new RegExp(_,o?void 0:"i"),y]}function $h(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Wt(!1,`The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function Jn(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,y=i.charAt(u);return y&&y!=="/"?null:i.slice(u)||"/"}function Vh(i,o="/"){let{pathname:u,search:y="",hash:_=""}=typeof i=="string"?fr(i):i;return{pathname:u?u.startsWith("/")?u:qh(u,o):o,search:Zh(y),hash:Qh(_)}}function qh(i,o){let u=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(_=>{_===".."?u.length>1&&u.pop():_!=="."&&u.push(_)}),u.length>1?u.join("/"):"/"}function Ua(i,o,u,y){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(y)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jh(i){return i.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function ja(i){let o=jh(i);return o.map((u,y)=>y===o.length-1?u.pathname:u.pathnameBase)}function Wa(i,o,u,y=!1){let _;typeof i=="string"?_=fr(i):(_={...i},Je(!_.pathname||!_.pathname.includes("?"),Ua("?","pathname","search",_)),Je(!_.pathname||!_.pathname.includes("#"),Ua("#","pathname","hash",_)),Je(!_.search||!_.search.includes("#"),Ua("#","search","hash",_)));let w=i===""||_.pathname==="",E=w?"/":_.pathname,z;if(E==null)z=u;else{let Z=o.length-1;if(!y&&E.startsWith("..")){let $=E.split("/");for(;$[0]==="..";)$.shift(),Z-=1;_.pathname=$.join("/")}z=Z>=0?o[Z]:"/"}let P=Vh(_,z),L=E&&E!=="/"&&E.endsWith("/"),V=(w||E===".")&&u.endsWith("/");return!P.pathname.endsWith("/")&&(L||V)&&(P.pathname+="/"),P}var Cn=i=>i.join("/").replace(/\/\/+/g,"/"),Wh=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Zh=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Qh=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Yh(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var hd=["POST","PUT","PATCH","DELETE"];new Set(hd);var Kh=["GET",...hd];new Set(Kh);var br=q.createContext(null);br.displayName="DataRouter";var Gs=q.createContext(null);Gs.displayName="DataRouterState";var pd=q.createContext({isTransitioning:!1});pd.displayName="ViewTransition";var Xh=q.createContext(new Map);Xh.displayName="Fetchers";var Jh=q.createContext(null);Jh.displayName="Await";var un=q.createContext(null);un.displayName="Navigation";var Ti=q.createContext(null);Ti.displayName="Location";var _n=q.createContext({outlet:null,matches:[],isDataRoute:!1});_n.displayName="Route";var Za=q.createContext(null);Za.displayName="RouteError";function ep(i,{relative:o}={}){Je(Nr(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:y}=q.useContext(un),{hash:_,pathname:w,search:E}=Mi(i,{relative:o}),z=w;return u!=="/"&&(z=w==="/"?u:Cn([u,w])),y.createHref({pathname:z,search:E,hash:_})}function Nr(){return q.useContext(Ti)!=null}function wn(){return Je(Nr(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(Ti).location}var md="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function gd(i){q.useContext(un).static||q.useLayoutEffect(i)}function Ri(){let{isDataRoute:i}=q.useContext(_n);return i?hp():tp()}function tp(){Je(Nr(),"useNavigate() may be used only in the context of a <Router> component.");let i=q.useContext(br),{basename:o,navigator:u}=q.useContext(un),{matches:y}=q.useContext(_n),{pathname:_}=wn(),w=JSON.stringify(ja(y)),E=q.useRef(!1);return gd(()=>{E.current=!0}),q.useCallback((P,L={})=>{if(Wt(E.current,md),!E.current)return;if(typeof P=="number"){u.go(P);return}let V=Wa(P,JSON.parse(w),_,L.relative==="path");i==null&&o!=="/"&&(V.pathname=V.pathname==="/"?o:Cn([o,V.pathname])),(L.replace?u.replace:u.push)(V,L.state,L)},[o,u,w,_,i])}q.createContext(null);function Mi(i,{relative:o}={}){let{matches:u}=q.useContext(_n),{pathname:y}=wn(),_=JSON.stringify(ja(u));return q.useMemo(()=>Wa(i,JSON.parse(_),y,o==="path"),[i,_,y,o])}function np(i,o){return vd(i,o)}function vd(i,o,u,y){var W;Je(Nr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:_}=q.useContext(un),{matches:w}=q.useContext(_n),E=w[w.length-1],z=E?E.params:{},P=E?E.pathname:"/",L=E?E.pathnameBase:"/",V=E&&E.route;{let Q=V&&V.path||"";yd(P,!V||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${P}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let Z=wn(),$;if(o){let Q=typeof o=="string"?fr(o):o;Je(L==="/"||((W=Q.pathname)==null?void 0:W.startsWith(L)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${L}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),$=Q}else $=Z;let te=$.pathname||"/",X=te;if(L!=="/"){let Q=L.replace(/^\//,"").split("/");X="/"+te.replace(/^\//,"").split("/").slice(Q.length).join("/")}let K=cd(i,{pathname:X});Wt(V||K!=null,`No routes matched location "${$.pathname}${$.search}${$.hash}" `),Wt(K==null||K[K.length-1].route.element!==void 0||K[K.length-1].route.Component!==void 0||K[K.length-1].route.lazy!==void 0,`Matched leaf route at location "${$.pathname}${$.search}${$.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let J=ap(K&&K.map(Q=>Object.assign({},Q,{params:Object.assign({},z,Q.params),pathname:Cn([L,_.encodeLocation?_.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?L:Cn([L,_.encodeLocation?_.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),w,u,y);return o&&J?q.createElement(Ti.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...$},navigationType:"POP"}},J):J}function rp(){let i=fp(),o=Yh(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,y="rgba(200,200,200, 0.5)",_={padding:"0.5rem",backgroundColor:y},w={padding:"2px 4px",backgroundColor:y},E=null;return console.error("Error handled by React Router default ErrorBoundary:",i),E=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:w},"ErrorBoundary")," or"," ",q.createElement("code",{style:w},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},o),u?q.createElement("pre",{style:_},u):null,E)}var ip=q.createElement(rp,null),sp=class extends q.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?q.createElement(_n.Provider,{value:this.props.routeContext},q.createElement(Za.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function op({routeContext:i,match:o,children:u}){let y=q.useContext(br);return y&&y.static&&y.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(y.staticContext._deepestRenderedBoundaryId=o.route.id),q.createElement(_n.Provider,{value:i},u)}function ap(i,o=[],u=null,y=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let _=i,w=u==null?void 0:u.errors;if(w!=null){let P=_.findIndex(L=>L.route.id&&(w==null?void 0:w[L.route.id])!==void 0);Je(P>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(w).join(",")}`),_=_.slice(0,Math.min(_.length,P+1))}let E=!1,z=-1;if(u)for(let P=0;P<_.length;P++){let L=_[P];if((L.route.HydrateFallback||L.route.hydrateFallbackElement)&&(z=P),L.route.id){let{loaderData:V,errors:Z}=u,$=L.route.loader&&!V.hasOwnProperty(L.route.id)&&(!Z||Z[L.route.id]===void 0);if(L.route.lazy||$){E=!0,z>=0?_=_.slice(0,z+1):_=[_[0]];break}}}return _.reduceRight((P,L,V)=>{let Z,$=!1,te=null,X=null;u&&(Z=w&&L.route.id?w[L.route.id]:void 0,te=L.route.errorElement||ip,E&&(z<0&&V===0?(yd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),$=!0,X=null):z===V&&($=!0,X=L.route.hydrateFallbackElement||null)));let K=o.concat(_.slice(0,V+1)),J=()=>{let W;return Z?W=te:$?W=X:L.route.Component?W=q.createElement(L.route.Component,null):L.route.element?W=L.route.element:W=P,q.createElement(op,{match:L,routeContext:{outlet:P,matches:K,isDataRoute:u!=null},children:W})};return u&&(L.route.ErrorBoundary||L.route.errorElement||V===0)?q.createElement(sp,{location:u.location,revalidation:u.revalidation,component:te,error:Z,children:J(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):J()},null)}function Qa(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lp(i){let o=q.useContext(br);return Je(o,Qa(i)),o}function up(i){let o=q.useContext(Gs);return Je(o,Qa(i)),o}function cp(i){let o=q.useContext(_n);return Je(o,Qa(i)),o}function Ya(i){let o=cp(i),u=o.matches[o.matches.length-1];return Je(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function dp(){return Ya("useRouteId")}function fp(){var y;let i=q.useContext(Za),o=up("useRouteError"),u=Ya("useRouteError");return i!==void 0?i:(y=o.errors)==null?void 0:y[u]}function hp(){let{router:i}=lp("useNavigate"),o=Ya("useNavigate"),u=q.useRef(!1);return gd(()=>{u.current=!0}),q.useCallback(async(_,w={})=>{Wt(u.current,md),u.current&&(typeof _=="number"?i.navigate(_):await i.navigate(_,{fromRouteId:o,...w}))},[i,o])}var jc={};function yd(i,o,u){!o&&!jc[i]&&(jc[i]=!0,Wt(!1,u))}q.memo(pp);function pp({routes:i,future:o,state:u}){return vd(i,void 0,u,o)}function mp({to:i,replace:o,state:u,relative:y}){Je(Nr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:_}=q.useContext(un);Wt(!_,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:w}=q.useContext(_n),{pathname:E}=wn(),z=Ri(),P=Wa(i,ja(w),E,y==="path"),L=JSON.stringify(P);return q.useEffect(()=>{z(JSON.parse(L),{replace:o,state:u,relative:y})},[z,L,y,o,u]),null}function bs(i){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gp({basename:i="/",children:o=null,location:u,navigationType:y="POP",navigator:_,static:w=!1}){Je(!Nr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=i.replace(/^\/*/,"/"),z=q.useMemo(()=>({basename:E,navigator:_,static:w,future:{}}),[E,_,w]);typeof u=="string"&&(u=fr(u));let{pathname:P="/",search:L="",hash:V="",state:Z=null,key:$="default"}=u,te=q.useMemo(()=>{let X=Jn(P,E);return X==null?null:{location:{pathname:X,search:L,hash:V,state:Z,key:$},navigationType:y}},[E,P,L,V,Z,$,y]);return Wt(te!=null,`<Router basename="${E}"> is not able to match the URL "${P}${L}${V}" because it does not start with the basename, so the <Router> won't render anything.`),te==null?null:q.createElement(un.Provider,{value:z},q.createElement(Ti.Provider,{children:o,value:te}))}function vp({children:i,location:o}){return np(Ba(i),o)}function Ba(i,o=[]){let u=[];return q.Children.forEach(i,(y,_)=>{if(!q.isValidElement(y))return;let w=[...o,_];if(y.type===q.Fragment){u.push.apply(u,Ba(y.props.children,w));return}Je(y.type===bs,`[${typeof y.type=="string"?y.type:y.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!y.props.index||!y.props.children,"An index route cannot have child routes.");let E={id:y.props.id||w.join("-"),caseSensitive:y.props.caseSensitive,element:y.props.element,Component:y.props.Component,index:y.props.index,path:y.props.path,loader:y.props.loader,action:y.props.action,hydrateFallbackElement:y.props.hydrateFallbackElement,HydrateFallback:y.props.HydrateFallback,errorElement:y.props.errorElement,ErrorBoundary:y.props.ErrorBoundary,hasErrorBoundary:y.props.hasErrorBoundary===!0||y.props.ErrorBoundary!=null||y.props.errorElement!=null,shouldRevalidate:y.props.shouldRevalidate,handle:y.props.handle,lazy:y.props.lazy};y.props.children&&(E.children=Ba(y.props.children,w)),u.push(E)}),u}var Ns="get",Fs="application/x-www-form-urlencoded";function $s(i){return i!=null&&typeof i.tagName=="string"}function yp(i){return $s(i)&&i.tagName.toLowerCase()==="button"}function _p(i){return $s(i)&&i.tagName.toLowerCase()==="form"}function wp(i){return $s(i)&&i.tagName.toLowerCase()==="input"}function Sp(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function xp(i,o){return i.button===0&&(!o||o==="_self")&&!Sp(i)}function Ha(i=""){return new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((o,u)=>{let y=i[u];return o.concat(Array.isArray(y)?y.map(_=>[u,_]):[[u,y]])},[]))}function Tp(i,o){let u=Ha(i);return o&&o.forEach((y,_)=>{u.has(_)||o.getAll(_).forEach(w=>{u.append(_,w)})}),u}var Ds=null;function Rp(){if(Ds===null)try{new FormData(document.createElement("form"),0),Ds=!1}catch{Ds=!0}return Ds}var Mp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ka(i){return i!=null&&!Mp.has(i)?(Wt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fs}"`),null):i}function Ep(i,o){let u,y,_,w,E;if(_p(i)){let z=i.getAttribute("action");y=z?Jn(z,o):null,u=i.getAttribute("method")||Ns,_=ka(i.getAttribute("enctype"))||Fs,w=new FormData(i)}else if(yp(i)||wp(i)&&(i.type==="submit"||i.type==="image")){let z=i.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let P=i.getAttribute("formaction")||z.getAttribute("action");if(y=P?Jn(P,o):null,u=i.getAttribute("formmethod")||z.getAttribute("method")||Ns,_=ka(i.getAttribute("formenctype"))||ka(z.getAttribute("enctype"))||Fs,w=new FormData(z,i),!Rp()){let{name:L,type:V,value:Z}=i;if(V==="image"){let $=L?`${L}.`:"";w.append(`${$}x`,"0"),w.append(`${$}y`,"0")}else L&&w.append(L,Z)}}else{if($s(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Ns,y=null,_=Fs,E=i}return w&&_==="text/plain"&&(E=w,w=void 0),{action:y,method:u.toLowerCase(),encType:_,formData:w,body:E}}function Ka(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}async function Ap(i,o){if(i.id in o)return o[i.id];try{let u=await import(i.module);return o[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Pp(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Lp(i,o,u){let y=await Promise.all(i.map(async _=>{let w=o.routes[_.route.id];if(w){let E=await Ap(w,u);return E.links?E.links():[]}return[]}));return kp(y.flat(1).filter(Pp).filter(_=>_.rel==="stylesheet"||_.rel==="preload").map(_=>_.rel==="stylesheet"?{..._,rel:"prefetch",as:"style"}:{..._,rel:"prefetch"}))}function Wc(i,o,u,y,_,w){let E=(P,L)=>u[L]?P.route.id!==u[L].route.id:!0,z=(P,L)=>{var V;return u[L].pathname!==P.pathname||((V=u[L].route.path)==null?void 0:V.endsWith("*"))&&u[L].params["*"]!==P.params["*"]};return w==="assets"?o.filter((P,L)=>E(P,L)||z(P,L)):w==="data"?o.filter((P,L)=>{var Z;let V=y.routes[P.route.id];if(!V||!V.hasLoader)return!1;if(E(P,L)||z(P,L))return!0;if(P.route.shouldRevalidate){let $=P.route.shouldRevalidate({currentUrl:new URL(_.pathname+_.search+_.hash,window.origin),currentParams:((Z=u[0])==null?void 0:Z.params)||{},nextUrl:new URL(i,window.origin),nextParams:P.params,defaultShouldRevalidate:!0});if(typeof $=="boolean")return $}return!0}):[]}function zp(i,o){return Cp(i.map(u=>{let y=o.routes[u.route.id];if(!y)return[];let _=[y.module];return y.imports&&(_=_.concat(y.imports)),_}).flat(1))}function Cp(i){return[...new Set(i)]}function Up(i){let o={},u=Object.keys(i).sort();for(let y of u)o[y]=i[y];return o}function kp(i,o){let u=new Set;return new Set(o),i.reduce((y,_)=>{let w=JSON.stringify(Up(_));return u.has(w)||(u.add(w),y.push({key:w,link:_})),y},[])}function Ip(i){let o=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return o.pathname==="/"?o.pathname="_root.data":o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function Dp(){let i=q.useContext(br);return Ka(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Op(){let i=q.useContext(Gs);return Ka(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Xa=q.createContext(void 0);Xa.displayName="FrameworkContext";function _d(){let i=q.useContext(Xa);return Ka(i,"You must render this element inside a <HydratedRouter> element"),i}function bp(i,o){let u=q.useContext(Xa),[y,_]=q.useState(!1),[w,E]=q.useState(!1),{onFocus:z,onBlur:P,onMouseEnter:L,onMouseLeave:V,onTouchStart:Z}=o,$=q.useRef(null);q.useEffect(()=>{if(i==="render"&&E(!0),i==="viewport"){let K=W=>{W.forEach(Q=>{E(Q.isIntersecting)})},J=new IntersectionObserver(K,{threshold:.5});return $.current&&J.observe($.current),()=>{J.disconnect()}}},[i]),q.useEffect(()=>{if(y){let K=setTimeout(()=>{E(!0)},100);return()=>{clearTimeout(K)}}},[y]);let te=()=>{_(!0)},X=()=>{_(!1),E(!1)};return u?i!=="intent"?[w,$,{}]:[w,$,{onFocus:wi(z,te),onBlur:wi(P,X),onMouseEnter:wi(L,te),onMouseLeave:wi(V,X),onTouchStart:wi(Z,te)}]:[!1,$,{}]}function wi(i,o){return u=>{i&&i(u),u.defaultPrevented||o(u)}}function Np({page:i,...o}){let{router:u}=Dp(),y=q.useMemo(()=>cd(u.routes,i,u.basename),[u.routes,i,u.basename]);return y?q.createElement(Bp,{page:i,matches:y,...o}):null}function Fp(i){let{manifest:o,routeModules:u}=_d(),[y,_]=q.useState([]);return q.useEffect(()=>{let w=!1;return Lp(i,o,u).then(E=>{w||_(E)}),()=>{w=!0}},[i,o,u]),y}function Bp({page:i,matches:o,...u}){let y=wn(),{manifest:_,routeModules:w}=_d(),{loaderData:E,matches:z}=Op(),P=q.useMemo(()=>Wc(i,o,z,_,y,"data"),[i,o,z,_,y]),L=q.useMemo(()=>Wc(i,o,z,_,y,"assets"),[i,o,z,_,y]),V=q.useMemo(()=>{if(i===y.pathname+y.search+y.hash)return[];let te=new Set,X=!1;if(o.forEach(J=>{var Q;let W=_.routes[J.route.id];!W||!W.hasLoader||(!P.some(le=>le.route.id===J.route.id)&&J.route.id in E&&((Q=w[J.route.id])!=null&&Q.shouldRevalidate)||W.hasClientLoader?X=!0:te.add(J.route.id))}),te.size===0)return[];let K=Ip(i);return X&&te.size>0&&K.searchParams.set("_routes",o.filter(J=>te.has(J.route.id)).map(J=>J.route.id).join(",")),[K.pathname+K.search]},[E,y,_,P,o,i,w]),Z=q.useMemo(()=>zp(L,_),[L,_]),$=Fp(L);return q.createElement(q.Fragment,null,V.map(te=>q.createElement("link",{key:te,rel:"prefetch",as:"fetch",href:te,...u})),Z.map(te=>q.createElement("link",{key:te,rel:"modulepreload",href:te,...u})),$.map(({key:te,link:X})=>q.createElement("link",{key:te,...X})))}function Hp(...i){return o=>{i.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var wd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{wd&&(window.__reactRouterVersion="7.1.1")}catch{}function Gp({basename:i,children:o,window:u}){let y=q.useRef();y.current==null&&(y.current=Ph({window:u,v5Compat:!0}));let _=y.current,[w,E]=q.useState({action:_.action,location:_.location}),z=q.useCallback(P=>{q.startTransition(()=>E(P))},[E]);return q.useLayoutEffect(()=>_.listen(z),[_,z]),q.createElement(gp,{basename:i,children:o,location:w.location,navigationType:w.action,navigator:_})}var Sd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xd=q.forwardRef(function({onClick:o,discover:u="render",prefetch:y="none",relative:_,reloadDocument:w,replace:E,state:z,target:P,to:L,preventScrollReset:V,viewTransition:Z,...$},te){let{basename:X}=q.useContext(un),K=typeof L=="string"&&Sd.test(L),J,W=!1;if(typeof L=="string"&&K&&(J=L,wd))try{let Fe=new URL(window.location.href),Be=L.startsWith("//")?new URL(Fe.protocol+L):new URL(L),et=Jn(Be.pathname,X);Be.origin===Fe.origin&&et!=null?L=et+Be.search+Be.hash:W=!0}catch{Wt(!1,`<Link to="${L}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Q=ep(L,{relative:_}),[le,_e,ze]=bp(y,$),De=jp(L,{replace:E,state:z,target:P,preventScrollReset:V,relative:_,viewTransition:Z});function Ne(Fe){o&&o(Fe),Fe.defaultPrevented||De(Fe)}let He=q.createElement("a",{...$,...ze,href:J||Q,onClick:W||w?o:Ne,ref:Hp(te,_e),target:P,"data-discover":!K&&u==="render"?"true":void 0});return le&&!K?q.createElement(q.Fragment,null,He,q.createElement(Np,{page:Q})):He});xd.displayName="Link";var $p=q.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:y="",end:_=!1,style:w,to:E,viewTransition:z,children:P,...L},V){let Z=Mi(E,{relative:L.relative}),$=wn(),te=q.useContext(Gs),{navigator:X,basename:K}=q.useContext(un),J=te!=null&&Xp(Z)&&z===!0,W=X.encodeLocation?X.encodeLocation(Z).pathname:Z.pathname,Q=$.pathname,le=te&&te.navigation&&te.navigation.location?te.navigation.location.pathname:null;u||(Q=Q.toLowerCase(),le=le?le.toLowerCase():null,W=W.toLowerCase()),le&&K&&(le=Jn(le,K)||le);const _e=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let ze=Q===W||!_&&Q.startsWith(W)&&Q.charAt(_e)==="/",De=le!=null&&(le===W||!_&&le.startsWith(W)&&le.charAt(W.length)==="/"),Ne={isActive:ze,isPending:De,isTransitioning:J},He=ze?o:void 0,Fe;typeof y=="function"?Fe=y(Ne):Fe=[y,ze?"active":null,De?"pending":null,J?"transitioning":null].filter(Boolean).join(" ");let Be=typeof w=="function"?w(Ne):w;return q.createElement(xd,{...L,"aria-current":He,className:Fe,ref:V,style:Be,to:E,viewTransition:z},typeof P=="function"?P(Ne):P)});$p.displayName="NavLink";var Vp=q.forwardRef(({discover:i="render",fetcherKey:o,navigate:u,reloadDocument:y,replace:_,state:w,method:E=Ns,action:z,onSubmit:P,relative:L,preventScrollReset:V,viewTransition:Z,...$},te)=>{let X=Yp(),K=Kp(z,{relative:L}),J=E.toLowerCase()==="get"?"get":"post",W=typeof z=="string"&&Sd.test(z),Q=le=>{if(P&&P(le),le.defaultPrevented)return;le.preventDefault();let _e=le.nativeEvent.submitter,ze=(_e==null?void 0:_e.getAttribute("formmethod"))||E;X(_e||le.currentTarget,{fetcherKey:o,method:ze,navigate:u,replace:_,state:w,relative:L,preventScrollReset:V,viewTransition:Z})};return q.createElement("form",{ref:te,method:J,action:K,onSubmit:y?P:Q,...$,"data-discover":!W&&i==="render"?"true":void 0})});Vp.displayName="Form";function qp(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Td(i){let o=q.useContext(br);return Je(o,qp(i)),o}function jp(i,{target:o,replace:u,state:y,preventScrollReset:_,relative:w,viewTransition:E}={}){let z=Ri(),P=wn(),L=Mi(i,{relative:w});return q.useCallback(V=>{if(xp(V,o)){V.preventDefault();let Z=u!==void 0?u:Si(P)===Si(L);z(i,{replace:Z,state:y,preventScrollReset:_,relative:w,viewTransition:E})}},[P,z,L,u,y,o,i,_,w,E])}function Wp(i){Wt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=q.useRef(Ha(i)),u=q.useRef(!1),y=wn(),_=q.useMemo(()=>Tp(y.search,u.current?null:o.current),[y.search]),w=Ri(),E=q.useCallback((z,P)=>{const L=Ha(typeof z=="function"?z(_):z);u.current=!0,w("?"+L,P)},[w,_]);return[_,E]}var Zp=0,Qp=()=>`__${String(++Zp)}__`;function Yp(){let{router:i}=Td("useSubmit"),{basename:o}=q.useContext(un),u=dp();return q.useCallback(async(y,_={})=>{let{action:w,method:E,encType:z,formData:P,body:L}=Ep(y,o);if(_.navigate===!1){let V=_.fetcherKey||Qp();await i.fetch(V,u,_.action||w,{preventScrollReset:_.preventScrollReset,formData:P,body:L,formMethod:_.method||E,formEncType:_.encType||z,flushSync:_.flushSync})}else await i.navigate(_.action||w,{preventScrollReset:_.preventScrollReset,formData:P,body:L,formMethod:_.method||E,formEncType:_.encType||z,replace:_.replace,state:_.state,fromRouteId:u,flushSync:_.flushSync,viewTransition:_.viewTransition})},[i,o,u])}function Kp(i,{relative:o}={}){let{basename:u}=q.useContext(un),y=q.useContext(_n);Je(y,"useFormAction must be used inside a RouteContext");let[_]=y.matches.slice(-1),w={...Mi(i||".",{relative:o})},E=wn();if(i==null){w.search=E.search;let z=new URLSearchParams(w.search),P=z.getAll("index");if(P.some(V=>V==="")){z.delete("index"),P.filter(Z=>Z).forEach(Z=>z.append("index",Z));let V=z.toString();w.search=V?`?${V}`:""}}return(!i||i===".")&&_.route.index&&(w.search=w.search?w.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(w.pathname=w.pathname==="/"?u:Cn([u,w.pathname])),Si(w)}function Xp(i,o={}){let u=q.useContext(pd);Je(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:y}=Td("useViewTransitionState"),_=Mi(i,{relative:o.relative});if(!u.isTransitioning)return!1;let w=Jn(u.currentLocation.pathname,y)||u.currentLocation.pathname,E=Jn(u.nextLocation.pathname,y)||u.nextLocation.pathname;return Hs(_.pathname,E)!=null||Hs(_.pathname,w)!=null}new TextEncoder;const Jp=ye.jsx("a",{target:"_blank",rel:"noreferrer",href:"mailto:estelle.booher@gmail.com",children:"estelle.booher@gmail.com"}),em=ye.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/EllarBooher",children:"https://github.com/EllarBooher"}),Os=q.memo(function({hyperlink:o,externalLink:u=!0,thumbnailAssets:y=[],title:_="PLACEHOLDER TITLE",description:w="PLACEHOLDER DESCRIPTION"}){const E=ye.jsx("div",{className:"DisplayCard-thumbnails",children:y.map(L=>ye.jsx("div",{className:"DisplayCard-thumbnail",children:ye.jsx("img",{className:"DisplayCard-image",src:L.toString(),alt:""})},L.toString()))}),z=Ri(),P=()=>{var L;u?window.location.href=o:(L=z(o))==null||L.catch(V=>{throw new Error("Unable to navigate",{cause:V})})};return ye.jsx("button",{className:"DisplayCard",onClick:P,children:ye.jsxs("div",{children:[ye.jsx("div",{className:"DisplayCard-name",children:_}),ye.jsxs("div",{className:"DisplayCard-body",children:[w,E]})]})})});function tm(){return ye.jsxs("div",{className:"App",children:[ye.jsx("div",{className:"website-main",children:ye.jsxs("div",{children:["Hello, my name is Estelle Booher. My passion is realtime rendering and engine infrastructure, and I am actively working on building a portfolio and career in computer graphics. This website is a landing spot where I will host links to various projects of mine.",ye.jsx("br",{}),ye.jsx("br",{}),"My github is at ",em,", where I host the source code of my projects including this website.",ye.jsx("br",{}),"To contact me, please email at ",Jp,".",ye.jsx("br",{}),ye.jsx("h1",{children:"WebGPU"}),ye.jsx("div",{className:"DisplayGrid",children:ye.jsx(Os,{hyperlink:"/webgpu-samples?sample=hello-cube",externalLink:!1,thumbnailAssets:[],title:"Hello Cube",description:`
                Test of WebGPU.
              `})}),ye.jsx("h1",{children:"Computer Graphics Offline"}),ye.jsxs("div",{className:"DisplayGrid",children:[ye.jsx(Os,{hyperlink:"https://github.com/EllarBooher/Syzygy",thumbnailAssets:[new URL("/assets/syzygy1-CItzHwJc.png",import.meta.url)],title:"Syzygy",description:`
                A sandbox renderer I started to study C++ and Vulkan. 
                It aims to be a testbed of various features and techniques.
              `}),ye.jsx(Os,{hyperlink:"https://github.com/EllarBooher/VulkanTemplate/tree/SSAO",thumbnailAssets:[new URL("/assets/ssao1-8Qfbb4oF.png",import.meta.url)],title:"SSAO",description:`
                An implementation of Screen-Space Ambient Occlusion.
              `})]}),ye.jsx("h1",{children:"Video Games"}),ye.jsx(Os,{hyperlink:"https://ellarbooher.itch.io/snail-blazer",thumbnailAssets:[new URL("/assets/snailblazer1-Bl1793QZ.png",import.meta.url),new URL("/assets/snailblazer2-CU4gYciB.png",import.meta.url)],title:"Snail Blazer",description:`
              A short bullet-hell made for the Bullet Hell Jam 2023 on itch.io. 
              The player primarily moves via grappling on enemy projectiles and the environment, 
              instead of the conventional WASD-style of movement.
            `})]})}),ye.jsx("footer",{className:"website-footer",children:"All works present are copyrighted, unless provided with external attributions or license."})]})}const nm=`struct VertexOut {
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
}`;function rm(i,o){return class extends i{constructor(...u){super(...u),o(this)}}}const im=rm(Array,i=>i.fill(0));let Ie=1e-6;function sm(i){function o(a=0,g=0){const c=new i(2);return a!==void 0&&(c[0]=a,g!==void 0&&(c[1]=g)),c}const u=o;function y(a,g,c){const h=c??new i(2);return h[0]=a,h[1]=g,h}function _(a,g){const c=g??new i(2);return c[0]=Math.ceil(a[0]),c[1]=Math.ceil(a[1]),c}function w(a,g){const c=g??new i(2);return c[0]=Math.floor(a[0]),c[1]=Math.floor(a[1]),c}function E(a,g){const c=g??new i(2);return c[0]=Math.round(a[0]),c[1]=Math.round(a[1]),c}function z(a,g=0,c=1,h){const S=h??new i(2);return S[0]=Math.min(c,Math.max(g,a[0])),S[1]=Math.min(c,Math.max(g,a[1])),S}function P(a,g,c){const h=c??new i(2);return h[0]=a[0]+g[0],h[1]=a[1]+g[1],h}function L(a,g,c,h){const S=h??new i(2);return S[0]=a[0]+g[0]*c,S[1]=a[1]+g[1]*c,S}function V(a,g){const c=a[0],h=a[1],S=g[0],k=g[1],B=Math.sqrt(c*c+h*h),v=Math.sqrt(S*S+k*k),x=B*v,U=x&&Fe(a,g)/x;return Math.acos(U)}function Z(a,g,c){const h=c??new i(2);return h[0]=a[0]-g[0],h[1]=a[1]-g[1],h}const $=Z;function te(a,g){return Math.abs(a[0]-g[0])<Ie&&Math.abs(a[1]-g[1])<Ie}function X(a,g){return a[0]===g[0]&&a[1]===g[1]}function K(a,g,c,h){const S=h??new i(2);return S[0]=a[0]+c*(g[0]-a[0]),S[1]=a[1]+c*(g[1]-a[1]),S}function J(a,g,c,h){const S=h??new i(2);return S[0]=a[0]+c[0]*(g[0]-a[0]),S[1]=a[1]+c[1]*(g[1]-a[1]),S}function W(a,g,c){const h=c??new i(2);return h[0]=Math.max(a[0],g[0]),h[1]=Math.max(a[1],g[1]),h}function Q(a,g,c){const h=c??new i(2);return h[0]=Math.min(a[0],g[0]),h[1]=Math.min(a[1],g[1]),h}function le(a,g,c){const h=c??new i(2);return h[0]=a[0]*g,h[1]=a[1]*g,h}const _e=le;function ze(a,g,c){const h=c??new i(2);return h[0]=a[0]/g,h[1]=a[1]/g,h}function De(a,g){const c=g??new i(2);return c[0]=1/a[0],c[1]=1/a[1],c}const Ne=De;function He(a,g,c){const h=c??new i(3),S=a[0]*g[1]-a[1]*g[0];return h[0]=0,h[1]=0,h[2]=S,h}function Fe(a,g){return a[0]*g[0]+a[1]*g[1]}function Be(a){const g=a[0],c=a[1];return Math.sqrt(g*g+c*c)}const et=Be;function Ee(a){const g=a[0],c=a[1];return g*g+c*c}const Ue=Ee;function Re(a,g){const c=a[0]-g[0],h=a[1]-g[1];return Math.sqrt(c*c+h*h)}const ot=Re;function qe(a,g){const c=a[0]-g[0],h=a[1]-g[1];return c*c+h*h}const Ge=qe;function ae(a,g){const c=g??new i(2),h=a[0],S=a[1],k=Math.sqrt(h*h+S*S);return k>1e-5?(c[0]=h/k,c[1]=S/k):(c[0]=0,c[1]=0),c}function ge(a,g){const c=g??new i(2);return c[0]=-a[0],c[1]=-a[1],c}function se(a,g){const c=g??new i(2);return c[0]=a[0],c[1]=a[1],c}const O=se;function ee(a,g,c){const h=c??new i(2);return h[0]=a[0]*g[0],h[1]=a[1]*g[1],h}const Te=ee;function we(a,g,c){const h=c??new i(2);return h[0]=a[0]/g[0],h[1]=a[1]/g[1],h}const Ce=we;function Pe(a=1,g){const c=g??new i(2),h=Math.random()*2*Math.PI;return c[0]=Math.cos(h)*a,c[1]=Math.sin(h)*a,c}function f(a){const g=a??new i(2);return g[0]=0,g[1]=0,g}function R(a,g,c){const h=c??new i(2),S=a[0],k=a[1];return h[0]=S*g[0]+k*g[4]+g[12],h[1]=S*g[1]+k*g[5]+g[13],h}function d(a,g,c){const h=c??new i(2),S=a[0],k=a[1];return h[0]=g[0]*S+g[4]*k+g[8],h[1]=g[1]*S+g[5]*k+g[9],h}function p(a,g,c,h){const S=h??new i(2),k=a[0]-g[0],B=a[1]-g[1],v=Math.sin(c),x=Math.cos(c);return S[0]=k*x-B*v+g[0],S[1]=k*v+B*x+g[1],S}function T(a,g,c){const h=c??new i(2);return ae(a,h),le(h,g,h)}function A(a,g,c){const h=c??new i(2);return Be(a)>g?T(a,g,h):se(a,h)}function F(a,g,c){const h=c??new i(2);return K(a,g,.5,h)}return{create:o,fromValues:u,set:y,ceil:_,floor:w,round:E,clamp:z,add:P,addScaled:L,angle:V,subtract:Z,sub:$,equalsApproximately:te,equals:X,lerp:K,lerpV:J,max:W,min:Q,mulScalar:le,scale:_e,divScalar:ze,inverse:De,invert:Ne,cross:He,dot:Fe,length:Be,len:et,lengthSq:Ee,lenSq:Ue,distance:Re,dist:ot,distanceSq:qe,distSq:Ge,normalize:ae,negate:ge,copy:se,clone:O,multiply:ee,mul:Te,divide:we,div:Ce,random:Pe,zero:f,transformMat4:R,transformMat3:d,rotate:p,setLength:T,truncate:A,midpoint:F}}const Zc=new Map;function Rd(i){let o=Zc.get(i);return o||(o=sm(i),Zc.set(i,o)),o}function om(i){function o(v,x,U){const I=new i(3);return v!==void 0&&(I[0]=v,x!==void 0&&(I[1]=x,U!==void 0&&(I[2]=U))),I}const u=o;function y(v,x,U,I){const H=I??new i(3);return H[0]=v,H[1]=x,H[2]=U,H}function _(v,x){const U=x??new i(3);return U[0]=Math.ceil(v[0]),U[1]=Math.ceil(v[1]),U[2]=Math.ceil(v[2]),U}function w(v,x){const U=x??new i(3);return U[0]=Math.floor(v[0]),U[1]=Math.floor(v[1]),U[2]=Math.floor(v[2]),U}function E(v,x){const U=x??new i(3);return U[0]=Math.round(v[0]),U[1]=Math.round(v[1]),U[2]=Math.round(v[2]),U}function z(v,x=0,U=1,I){const H=I??new i(3);return H[0]=Math.min(U,Math.max(x,v[0])),H[1]=Math.min(U,Math.max(x,v[1])),H[2]=Math.min(U,Math.max(x,v[2])),H}function P(v,x,U){const I=U??new i(3);return I[0]=v[0]+x[0],I[1]=v[1]+x[1],I[2]=v[2]+x[2],I}function L(v,x,U,I){const H=I??new i(3);return H[0]=v[0]+x[0]*U,H[1]=v[1]+x[1]*U,H[2]=v[2]+x[2]*U,H}function V(v,x){const U=v[0],I=v[1],H=v[2],j=x[0],Y=x[1],fe=x[2],Me=Math.sqrt(U*U+I*I+H*H),ce=Math.sqrt(j*j+Y*Y+fe*fe),he=Me*ce,ke=he&&Fe(v,x)/he;return Math.acos(ke)}function Z(v,x,U){const I=U??new i(3);return I[0]=v[0]-x[0],I[1]=v[1]-x[1],I[2]=v[2]-x[2],I}const $=Z;function te(v,x){return Math.abs(v[0]-x[0])<Ie&&Math.abs(v[1]-x[1])<Ie&&Math.abs(v[2]-x[2])<Ie}function X(v,x){return v[0]===x[0]&&v[1]===x[1]&&v[2]===x[2]}function K(v,x,U,I){const H=I??new i(3);return H[0]=v[0]+U*(x[0]-v[0]),H[1]=v[1]+U*(x[1]-v[1]),H[2]=v[2]+U*(x[2]-v[2]),H}function J(v,x,U,I){const H=I??new i(3);return H[0]=v[0]+U[0]*(x[0]-v[0]),H[1]=v[1]+U[1]*(x[1]-v[1]),H[2]=v[2]+U[2]*(x[2]-v[2]),H}function W(v,x,U){const I=U??new i(3);return I[0]=Math.max(v[0],x[0]),I[1]=Math.max(v[1],x[1]),I[2]=Math.max(v[2],x[2]),I}function Q(v,x,U){const I=U??new i(3);return I[0]=Math.min(v[0],x[0]),I[1]=Math.min(v[1],x[1]),I[2]=Math.min(v[2],x[2]),I}function le(v,x,U){const I=U??new i(3);return I[0]=v[0]*x,I[1]=v[1]*x,I[2]=v[2]*x,I}const _e=le;function ze(v,x,U){const I=U??new i(3);return I[0]=v[0]/x,I[1]=v[1]/x,I[2]=v[2]/x,I}function De(v,x){const U=x??new i(3);return U[0]=1/v[0],U[1]=1/v[1],U[2]=1/v[2],U}const Ne=De;function He(v,x,U){const I=U??new i(3),H=v[2]*x[0]-v[0]*x[2],j=v[0]*x[1]-v[1]*x[0];return I[0]=v[1]*x[2]-v[2]*x[1],I[1]=H,I[2]=j,I}function Fe(v,x){return v[0]*x[0]+v[1]*x[1]+v[2]*x[2]}function Be(v){const x=v[0],U=v[1],I=v[2];return Math.sqrt(x*x+U*U+I*I)}const et=Be;function Ee(v){const x=v[0],U=v[1],I=v[2];return x*x+U*U+I*I}const Ue=Ee;function Re(v,x){const U=v[0]-x[0],I=v[1]-x[1],H=v[2]-x[2];return Math.sqrt(U*U+I*I+H*H)}const ot=Re;function qe(v,x){const U=v[0]-x[0],I=v[1]-x[1],H=v[2]-x[2];return U*U+I*I+H*H}const Ge=qe;function ae(v,x){const U=x??new i(3),I=v[0],H=v[1],j=v[2],Y=Math.sqrt(I*I+H*H+j*j);return Y>1e-5?(U[0]=I/Y,U[1]=H/Y,U[2]=j/Y):(U[0]=0,U[1]=0,U[2]=0),U}function ge(v,x){const U=x??new i(3);return U[0]=-v[0],U[1]=-v[1],U[2]=-v[2],U}function se(v,x){const U=x??new i(3);return U[0]=v[0],U[1]=v[1],U[2]=v[2],U}const O=se;function ee(v,x,U){const I=U??new i(3);return I[0]=v[0]*x[0],I[1]=v[1]*x[1],I[2]=v[2]*x[2],I}const Te=ee;function we(v,x,U){const I=U??new i(3);return I[0]=v[0]/x[0],I[1]=v[1]/x[1],I[2]=v[2]/x[2],I}const Ce=we;function Pe(v=1,x){const U=x??new i(3),I=Math.random()*2*Math.PI,H=Math.random()*2-1,j=Math.sqrt(1-H*H)*v;return U[0]=Math.cos(I)*j,U[1]=Math.sin(I)*j,U[2]=H*v,U}function f(v){const x=v??new i(3);return x[0]=0,x[1]=0,x[2]=0,x}function R(v,x,U){const I=U??new i(3),H=v[0],j=v[1],Y=v[2],fe=x[3]*H+x[7]*j+x[11]*Y+x[15]||1;return I[0]=(x[0]*H+x[4]*j+x[8]*Y+x[12])/fe,I[1]=(x[1]*H+x[5]*j+x[9]*Y+x[13])/fe,I[2]=(x[2]*H+x[6]*j+x[10]*Y+x[14])/fe,I}function d(v,x,U){const I=U??new i(3),H=v[0],j=v[1],Y=v[2];return I[0]=H*x[0*4+0]+j*x[1*4+0]+Y*x[2*4+0],I[1]=H*x[0*4+1]+j*x[1*4+1]+Y*x[2*4+1],I[2]=H*x[0*4+2]+j*x[1*4+2]+Y*x[2*4+2],I}function p(v,x,U){const I=U??new i(3),H=v[0],j=v[1],Y=v[2];return I[0]=H*x[0]+j*x[4]+Y*x[8],I[1]=H*x[1]+j*x[5]+Y*x[9],I[2]=H*x[2]+j*x[6]+Y*x[10],I}function T(v,x,U){const I=U??new i(3),H=x[0],j=x[1],Y=x[2],fe=x[3]*2,Me=v[0],ce=v[1],he=v[2],ke=j*he-Y*ce,Oe=Y*Me-H*he,We=H*ce-j*Me;return I[0]=Me+ke*fe+(j*We-Y*Oe)*2,I[1]=ce+Oe*fe+(Y*ke-H*We)*2,I[2]=he+We*fe+(H*Oe-j*ke)*2,I}function A(v,x){const U=x??new i(3);return U[0]=v[12],U[1]=v[13],U[2]=v[14],U}function F(v,x,U){const I=U??new i(3),H=x*4;return I[0]=v[H+0],I[1]=v[H+1],I[2]=v[H+2],I}function a(v,x){const U=x??new i(3),I=v[0],H=v[1],j=v[2],Y=v[4],fe=v[5],Me=v[6],ce=v[8],he=v[9],ke=v[10];return U[0]=Math.sqrt(I*I+H*H+j*j),U[1]=Math.sqrt(Y*Y+fe*fe+Me*Me),U[2]=Math.sqrt(ce*ce+he*he+ke*ke),U}function g(v,x,U,I){const H=I??new i(3),j=[],Y=[];return j[0]=v[0]-x[0],j[1]=v[1]-x[1],j[2]=v[2]-x[2],Y[0]=j[0],Y[1]=j[1]*Math.cos(U)-j[2]*Math.sin(U),Y[2]=j[1]*Math.sin(U)+j[2]*Math.cos(U),H[0]=Y[0]+x[0],H[1]=Y[1]+x[1],H[2]=Y[2]+x[2],H}function c(v,x,U,I){const H=I??new i(3),j=[],Y=[];return j[0]=v[0]-x[0],j[1]=v[1]-x[1],j[2]=v[2]-x[2],Y[0]=j[2]*Math.sin(U)+j[0]*Math.cos(U),Y[1]=j[1],Y[2]=j[2]*Math.cos(U)-j[0]*Math.sin(U),H[0]=Y[0]+x[0],H[1]=Y[1]+x[1],H[2]=Y[2]+x[2],H}function h(v,x,U,I){const H=I??new i(3),j=[],Y=[];return j[0]=v[0]-x[0],j[1]=v[1]-x[1],j[2]=v[2]-x[2],Y[0]=j[0]*Math.cos(U)-j[1]*Math.sin(U),Y[1]=j[0]*Math.sin(U)+j[1]*Math.cos(U),Y[2]=j[2],H[0]=Y[0]+x[0],H[1]=Y[1]+x[1],H[2]=Y[2]+x[2],H}function S(v,x,U){const I=U??new i(3);return ae(v,I),le(I,x,I)}function k(v,x,U){const I=U??new i(3);return Be(v)>x?S(v,x,I):se(v,I)}function B(v,x,U){const I=U??new i(3);return K(v,x,.5,I)}return{create:o,fromValues:u,set:y,ceil:_,floor:w,round:E,clamp:z,add:P,addScaled:L,angle:V,subtract:Z,sub:$,equalsApproximately:te,equals:X,lerp:K,lerpV:J,max:W,min:Q,mulScalar:le,scale:_e,divScalar:ze,inverse:De,invert:Ne,cross:He,dot:Fe,length:Be,len:et,lengthSq:Ee,lenSq:Ue,distance:Re,dist:ot,distanceSq:qe,distSq:Ge,normalize:ae,negate:ge,copy:se,clone:O,multiply:ee,mul:Te,divide:we,div:Ce,random:Pe,zero:f,transformMat4:R,transformMat4Upper3x3:d,transformMat3:p,transformQuat:T,getTranslation:A,getAxis:F,getScaling:a,rotateX:g,rotateY:c,rotateZ:h,setLength:S,truncate:k,midpoint:B}}const Qc=new Map;function Vs(i){let o=Qc.get(i);return o||(o=om(i),Qc.set(i,o)),o}function am(i){const o=Rd(i),u=Vs(i);function y(f,R,d,p,T,A,F,a,g){const c=new i(12);return c[3]=0,c[7]=0,c[11]=0,f!==void 0&&(c[0]=f,R!==void 0&&(c[1]=R,d!==void 0&&(c[2]=d,p!==void 0&&(c[4]=p,T!==void 0&&(c[5]=T,A!==void 0&&(c[6]=A,F!==void 0&&(c[8]=F,a!==void 0&&(c[9]=a,g!==void 0&&(c[10]=g))))))))),c}function _(f,R,d,p,T,A,F,a,g,c){const h=c??new i(12);return h[0]=f,h[1]=R,h[2]=d,h[3]=0,h[4]=p,h[5]=T,h[6]=A,h[7]=0,h[8]=F,h[9]=a,h[10]=g,h[11]=0,h}function w(f,R){const d=R??new i(12);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[3]=0,d[4]=f[4],d[5]=f[5],d[6]=f[6],d[7]=0,d[8]=f[8],d[9]=f[9],d[10]=f[10],d[11]=0,d}function E(f,R){const d=R??new i(12),p=f[0],T=f[1],A=f[2],F=f[3],a=p+p,g=T+T,c=A+A,h=p*a,S=T*a,k=T*g,B=A*a,v=A*g,x=A*c,U=F*a,I=F*g,H=F*c;return d[0]=1-k-x,d[1]=S+H,d[2]=B-I,d[3]=0,d[4]=S-H,d[5]=1-h-x,d[6]=v+U,d[7]=0,d[8]=B+I,d[9]=v-U,d[10]=1-h-k,d[11]=0,d}function z(f,R){const d=R??new i(12);return d[0]=-f[0],d[1]=-f[1],d[2]=-f[2],d[4]=-f[4],d[5]=-f[5],d[6]=-f[6],d[8]=-f[8],d[9]=-f[9],d[10]=-f[10],d}function P(f,R){const d=R??new i(12);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[4]=f[4],d[5]=f[5],d[6]=f[6],d[8]=f[8],d[9]=f[9],d[10]=f[10],d}const L=P;function V(f,R){return Math.abs(f[0]-R[0])<Ie&&Math.abs(f[1]-R[1])<Ie&&Math.abs(f[2]-R[2])<Ie&&Math.abs(f[4]-R[4])<Ie&&Math.abs(f[5]-R[5])<Ie&&Math.abs(f[6]-R[6])<Ie&&Math.abs(f[8]-R[8])<Ie&&Math.abs(f[9]-R[9])<Ie&&Math.abs(f[10]-R[10])<Ie}function Z(f,R){return f[0]===R[0]&&f[1]===R[1]&&f[2]===R[2]&&f[4]===R[4]&&f[5]===R[5]&&f[6]===R[6]&&f[8]===R[8]&&f[9]===R[9]&&f[10]===R[10]}function $(f){const R=f??new i(12);return R[0]=1,R[1]=0,R[2]=0,R[4]=0,R[5]=1,R[6]=0,R[8]=0,R[9]=0,R[10]=1,R}function te(f,R){const d=R??new i(12);if(d===f){let k;return k=f[1],f[1]=f[4],f[4]=k,k=f[2],f[2]=f[8],f[8]=k,k=f[6],f[6]=f[9],f[9]=k,d}const p=f[0*4+0],T=f[0*4+1],A=f[0*4+2],F=f[1*4+0],a=f[1*4+1],g=f[1*4+2],c=f[2*4+0],h=f[2*4+1],S=f[2*4+2];return d[0]=p,d[1]=F,d[2]=c,d[4]=T,d[5]=a,d[6]=h,d[8]=A,d[9]=g,d[10]=S,d}function X(f,R){const d=R??new i(12),p=f[0*4+0],T=f[0*4+1],A=f[0*4+2],F=f[1*4+0],a=f[1*4+1],g=f[1*4+2],c=f[2*4+0],h=f[2*4+1],S=f[2*4+2],k=S*a-g*h,B=-S*F+g*c,v=h*F-a*c,x=1/(p*k+T*B+A*v);return d[0]=k*x,d[1]=(-S*T+A*h)*x,d[2]=(g*T-A*a)*x,d[4]=B*x,d[5]=(S*p-A*c)*x,d[6]=(-g*p+A*F)*x,d[8]=v*x,d[9]=(-h*p+T*c)*x,d[10]=(a*p-T*F)*x,d}function K(f){const R=f[0],d=f[0*4+1],p=f[0*4+2],T=f[1*4+0],A=f[1*4+1],F=f[1*4+2],a=f[2*4+0],g=f[2*4+1],c=f[2*4+2];return R*(A*c-g*F)-T*(d*c-g*p)+a*(d*F-A*p)}const J=X;function W(f,R,d){const p=d??new i(12),T=f[0],A=f[1],F=f[2],a=f[4],g=f[5],c=f[6],h=f[8],S=f[9],k=f[10],B=R[0],v=R[1],x=R[2],U=R[4],I=R[5],H=R[6],j=R[8],Y=R[9],fe=R[10];return p[0]=T*B+a*v+h*x,p[1]=A*B+g*v+S*x,p[2]=F*B+c*v+k*x,p[4]=T*U+a*I+h*H,p[5]=A*U+g*I+S*H,p[6]=F*U+c*I+k*H,p[8]=T*j+a*Y+h*fe,p[9]=A*j+g*Y+S*fe,p[10]=F*j+c*Y+k*fe,p}const Q=W;function le(f,R,d){const p=d??$();return f!==p&&(p[0]=f[0],p[1]=f[1],p[2]=f[2],p[4]=f[4],p[5]=f[5],p[6]=f[6]),p[8]=R[0],p[9]=R[1],p[10]=1,p}function _e(f,R){const d=R??o.create();return d[0]=f[8],d[1]=f[9],d}function ze(f,R,d){const p=d??o.create(),T=R*4;return p[0]=f[T+0],p[1]=f[T+1],p}function De(f,R,d,p){const T=p===f?f:P(f,p),A=d*4;return T[A+0]=R[0],T[A+1]=R[1],T}function Ne(f,R){const d=R??o.create(),p=f[0],T=f[1],A=f[4],F=f[5];return d[0]=Math.sqrt(p*p+T*T),d[1]=Math.sqrt(A*A+F*F),d}function He(f,R){const d=R??u.create(),p=f[0],T=f[1],A=f[2],F=f[4],a=f[5],g=f[6],c=f[8],h=f[9],S=f[10];return d[0]=Math.sqrt(p*p+T*T+A*A),d[1]=Math.sqrt(F*F+a*a+g*g),d[2]=Math.sqrt(c*c+h*h+S*S),d}function Fe(f,R){const d=R??new i(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=f[0],d[9]=f[1],d[10]=1,d}function Be(f,R,d){const p=d??new i(12),T=R[0],A=R[1],F=f[0],a=f[1],g=f[2],c=f[1*4+0],h=f[1*4+1],S=f[1*4+2],k=f[2*4+0],B=f[2*4+1],v=f[2*4+2];return f!==p&&(p[0]=F,p[1]=a,p[2]=g,p[4]=c,p[5]=h,p[6]=S),p[8]=F*T+c*A+k,p[9]=a*T+h*A+B,p[10]=g*T+S*A+v,p}function et(f,R){const d=R??new i(12),p=Math.cos(f),T=Math.sin(f);return d[0]=p,d[1]=T,d[2]=0,d[4]=-T,d[5]=p,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Ee(f,R,d){const p=d??new i(12),T=f[0*4+0],A=f[0*4+1],F=f[0*4+2],a=f[1*4+0],g=f[1*4+1],c=f[1*4+2],h=Math.cos(R),S=Math.sin(R);return p[0]=h*T+S*a,p[1]=h*A+S*g,p[2]=h*F+S*c,p[4]=h*a-S*T,p[5]=h*g-S*A,p[6]=h*c-S*F,f!==p&&(p[8]=f[8],p[9]=f[9],p[10]=f[10]),p}function Ue(f,R){const d=R??new i(12),p=Math.cos(f),T=Math.sin(f);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=p,d[6]=T,d[8]=0,d[9]=-T,d[10]=p,d}function Re(f,R,d){const p=d??new i(12),T=f[4],A=f[5],F=f[6],a=f[8],g=f[9],c=f[10],h=Math.cos(R),S=Math.sin(R);return p[4]=h*T+S*a,p[5]=h*A+S*g,p[6]=h*F+S*c,p[8]=h*a-S*T,p[9]=h*g-S*A,p[10]=h*c-S*F,f!==p&&(p[0]=f[0],p[1]=f[1],p[2]=f[2]),p}function ot(f,R){const d=R??new i(12),p=Math.cos(f),T=Math.sin(f);return d[0]=p,d[1]=0,d[2]=-T,d[4]=0,d[5]=1,d[6]=0,d[8]=T,d[9]=0,d[10]=p,d}function qe(f,R,d){const p=d??new i(12),T=f[0*4+0],A=f[0*4+1],F=f[0*4+2],a=f[2*4+0],g=f[2*4+1],c=f[2*4+2],h=Math.cos(R),S=Math.sin(R);return p[0]=h*T-S*a,p[1]=h*A-S*g,p[2]=h*F-S*c,p[8]=h*a+S*T,p[9]=h*g+S*A,p[10]=h*c+S*F,f!==p&&(p[4]=f[4],p[5]=f[5],p[6]=f[6]),p}const Ge=et,ae=Ee;function ge(f,R){const d=R??new i(12);return d[0]=f[0],d[1]=0,d[2]=0,d[4]=0,d[5]=f[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function se(f,R,d){const p=d??new i(12),T=R[0],A=R[1];return p[0]=T*f[0*4+0],p[1]=T*f[0*4+1],p[2]=T*f[0*4+2],p[4]=A*f[1*4+0],p[5]=A*f[1*4+1],p[6]=A*f[1*4+2],f!==p&&(p[8]=f[8],p[9]=f[9],p[10]=f[10]),p}function O(f,R){const d=R??new i(12);return d[0]=f[0],d[1]=0,d[2]=0,d[4]=0,d[5]=f[1],d[6]=0,d[8]=0,d[9]=0,d[10]=f[2],d}function ee(f,R,d){const p=d??new i(12),T=R[0],A=R[1],F=R[2];return p[0]=T*f[0*4+0],p[1]=T*f[0*4+1],p[2]=T*f[0*4+2],p[4]=A*f[1*4+0],p[5]=A*f[1*4+1],p[6]=A*f[1*4+2],p[8]=F*f[2*4+0],p[9]=F*f[2*4+1],p[10]=F*f[2*4+2],p}function Te(f,R){const d=R??new i(12);return d[0]=f,d[1]=0,d[2]=0,d[4]=0,d[5]=f,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function we(f,R,d){const p=d??new i(12);return p[0]=R*f[0*4+0],p[1]=R*f[0*4+1],p[2]=R*f[0*4+2],p[4]=R*f[1*4+0],p[5]=R*f[1*4+1],p[6]=R*f[1*4+2],f!==p&&(p[8]=f[8],p[9]=f[9],p[10]=f[10]),p}function Ce(f,R){const d=R??new i(12);return d[0]=f,d[1]=0,d[2]=0,d[4]=0,d[5]=f,d[6]=0,d[8]=0,d[9]=0,d[10]=f,d}function Pe(f,R,d){const p=d??new i(12);return p[0]=R*f[0*4+0],p[1]=R*f[0*4+1],p[2]=R*f[0*4+2],p[4]=R*f[1*4+0],p[5]=R*f[1*4+1],p[6]=R*f[1*4+2],p[8]=R*f[2*4+0],p[9]=R*f[2*4+1],p[10]=R*f[2*4+2],p}return{clone:L,create:y,set:_,fromMat4:w,fromQuat:E,negate:z,copy:P,equalsApproximately:V,equals:Z,identity:$,transpose:te,inverse:X,invert:J,determinant:K,mul:Q,multiply:W,setTranslation:le,getTranslation:_e,getAxis:ze,setAxis:De,getScaling:Ne,get3DScaling:He,translation:Fe,translate:Be,rotation:et,rotate:Ee,rotationX:Ue,rotateX:Re,rotationY:ot,rotateY:qe,rotationZ:Ge,rotateZ:ae,scaling:ge,scale:se,uniformScaling:Te,uniformScale:we,scaling3D:O,scale3D:ee,uniformScaling3D:Ce,uniformScale3D:Pe}}const Yc=new Map;function lm(i){let o=Yc.get(i);return o||(o=am(i),Yc.set(i,o)),o}function um(i){const o=Vs(i);function u(a,g,c,h,S,k,B,v,x,U,I,H,j,Y,fe,Me){const ce=new i(16);return a!==void 0&&(ce[0]=a,g!==void 0&&(ce[1]=g,c!==void 0&&(ce[2]=c,h!==void 0&&(ce[3]=h,S!==void 0&&(ce[4]=S,k!==void 0&&(ce[5]=k,B!==void 0&&(ce[6]=B,v!==void 0&&(ce[7]=v,x!==void 0&&(ce[8]=x,U!==void 0&&(ce[9]=U,I!==void 0&&(ce[10]=I,H!==void 0&&(ce[11]=H,j!==void 0&&(ce[12]=j,Y!==void 0&&(ce[13]=Y,fe!==void 0&&(ce[14]=fe,Me!==void 0&&(ce[15]=Me)))))))))))))))),ce}function y(a,g,c,h,S,k,B,v,x,U,I,H,j,Y,fe,Me,ce){const he=ce??new i(16);return he[0]=a,he[1]=g,he[2]=c,he[3]=h,he[4]=S,he[5]=k,he[6]=B,he[7]=v,he[8]=x,he[9]=U,he[10]=I,he[11]=H,he[12]=j,he[13]=Y,he[14]=fe,he[15]=Me,he}function _(a,g){const c=g??new i(16);return c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=0,c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=0,c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function w(a,g){const c=g??new i(16),h=a[0],S=a[1],k=a[2],B=a[3],v=h+h,x=S+S,U=k+k,I=h*v,H=S*v,j=S*x,Y=k*v,fe=k*x,Me=k*U,ce=B*v,he=B*x,ke=B*U;return c[0]=1-j-Me,c[1]=H+ke,c[2]=Y-he,c[3]=0,c[4]=H-ke,c[5]=1-I-Me,c[6]=fe+ce,c[7]=0,c[8]=Y+he,c[9]=fe-ce,c[10]=1-I-j,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function E(a,g){const c=g??new i(16);return c[0]=-a[0],c[1]=-a[1],c[2]=-a[2],c[3]=-a[3],c[4]=-a[4],c[5]=-a[5],c[6]=-a[6],c[7]=-a[7],c[8]=-a[8],c[9]=-a[9],c[10]=-a[10],c[11]=-a[11],c[12]=-a[12],c[13]=-a[13],c[14]=-a[14],c[15]=-a[15],c}function z(a,g){const c=g??new i(16);return c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15],c}const P=z;function L(a,g){return Math.abs(a[0]-g[0])<Ie&&Math.abs(a[1]-g[1])<Ie&&Math.abs(a[2]-g[2])<Ie&&Math.abs(a[3]-g[3])<Ie&&Math.abs(a[4]-g[4])<Ie&&Math.abs(a[5]-g[5])<Ie&&Math.abs(a[6]-g[6])<Ie&&Math.abs(a[7]-g[7])<Ie&&Math.abs(a[8]-g[8])<Ie&&Math.abs(a[9]-g[9])<Ie&&Math.abs(a[10]-g[10])<Ie&&Math.abs(a[11]-g[11])<Ie&&Math.abs(a[12]-g[12])<Ie&&Math.abs(a[13]-g[13])<Ie&&Math.abs(a[14]-g[14])<Ie&&Math.abs(a[15]-g[15])<Ie}function V(a,g){return a[0]===g[0]&&a[1]===g[1]&&a[2]===g[2]&&a[3]===g[3]&&a[4]===g[4]&&a[5]===g[5]&&a[6]===g[6]&&a[7]===g[7]&&a[8]===g[8]&&a[9]===g[9]&&a[10]===g[10]&&a[11]===g[11]&&a[12]===g[12]&&a[13]===g[13]&&a[14]===g[14]&&a[15]===g[15]}function Z(a){const g=a??new i(16);return g[0]=1,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=1,g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,g}function $(a,g){const c=g??new i(16);if(c===a){let Oe;return Oe=a[1],a[1]=a[4],a[4]=Oe,Oe=a[2],a[2]=a[8],a[8]=Oe,Oe=a[3],a[3]=a[12],a[12]=Oe,Oe=a[6],a[6]=a[9],a[9]=Oe,Oe=a[7],a[7]=a[13],a[13]=Oe,Oe=a[11],a[11]=a[14],a[14]=Oe,c}const h=a[0*4+0],S=a[0*4+1],k=a[0*4+2],B=a[0*4+3],v=a[1*4+0],x=a[1*4+1],U=a[1*4+2],I=a[1*4+3],H=a[2*4+0],j=a[2*4+1],Y=a[2*4+2],fe=a[2*4+3],Me=a[3*4+0],ce=a[3*4+1],he=a[3*4+2],ke=a[3*4+3];return c[0]=h,c[1]=v,c[2]=H,c[3]=Me,c[4]=S,c[5]=x,c[6]=j,c[7]=ce,c[8]=k,c[9]=U,c[10]=Y,c[11]=he,c[12]=B,c[13]=I,c[14]=fe,c[15]=ke,c}function te(a,g){const c=g??new i(16),h=a[0*4+0],S=a[0*4+1],k=a[0*4+2],B=a[0*4+3],v=a[1*4+0],x=a[1*4+1],U=a[1*4+2],I=a[1*4+3],H=a[2*4+0],j=a[2*4+1],Y=a[2*4+2],fe=a[2*4+3],Me=a[3*4+0],ce=a[3*4+1],he=a[3*4+2],ke=a[3*4+3],Oe=Y*ke,We=he*fe,lt=U*ke,tt=he*I,ut=U*fe,ft=Y*I,ht=k*ke,pt=he*B,nt=k*fe,rt=Y*B,_t=k*I,wt=U*B,St=H*ce,xt=Me*j,Lt=v*ce,Et=Me*x,zt=v*j,cn=H*x,Un=h*ce,dn=Me*S,hr=h*j,fn=H*S,Sn=h*x,xn=v*S,pr=Oe*x+tt*j+ut*ce-(We*x+lt*j+ft*ce),Ei=We*S+ht*j+rt*ce-(Oe*S+pt*j+nt*ce),Ai=lt*S+pt*x+_t*ce-(tt*S+ht*x+wt*ce),Pi=ft*S+nt*x+wt*j-(ut*S+rt*x+_t*j),Ke=1/(h*pr+v*Ei+H*Ai+Me*Pi);return c[0]=Ke*pr,c[1]=Ke*Ei,c[2]=Ke*Ai,c[3]=Ke*Pi,c[4]=Ke*(We*v+lt*H+ft*Me-(Oe*v+tt*H+ut*Me)),c[5]=Ke*(Oe*h+pt*H+nt*Me-(We*h+ht*H+rt*Me)),c[6]=Ke*(tt*h+ht*v+wt*Me-(lt*h+pt*v+_t*Me)),c[7]=Ke*(ut*h+rt*v+_t*H-(ft*h+nt*v+wt*H)),c[8]=Ke*(St*I+Et*fe+zt*ke-(xt*I+Lt*fe+cn*ke)),c[9]=Ke*(xt*B+Un*fe+fn*ke-(St*B+dn*fe+hr*ke)),c[10]=Ke*(Lt*B+dn*I+Sn*ke-(Et*B+Un*I+xn*ke)),c[11]=Ke*(cn*B+hr*I+xn*fe-(zt*B+fn*I+Sn*fe)),c[12]=Ke*(Lt*Y+cn*he+xt*U-(zt*he+St*U+Et*Y)),c[13]=Ke*(hr*he+St*k+dn*Y-(Un*Y+fn*he+xt*k)),c[14]=Ke*(Un*U+xn*he+Et*k-(Sn*he+Lt*k+dn*U)),c[15]=Ke*(Sn*Y+zt*k+fn*U-(hr*U+xn*Y+cn*k)),c}function X(a){const g=a[0],c=a[0*4+1],h=a[0*4+2],S=a[0*4+3],k=a[1*4+0],B=a[1*4+1],v=a[1*4+2],x=a[1*4+3],U=a[2*4+0],I=a[2*4+1],H=a[2*4+2],j=a[2*4+3],Y=a[3*4+0],fe=a[3*4+1],Me=a[3*4+2],ce=a[3*4+3],he=H*ce,ke=Me*j,Oe=v*ce,We=Me*x,lt=v*j,tt=H*x,ut=h*ce,ft=Me*S,ht=h*j,pt=H*S,nt=h*x,rt=v*S,_t=he*B+We*I+lt*fe-(ke*B+Oe*I+tt*fe),wt=ke*c+ut*I+pt*fe-(he*c+ft*I+ht*fe),St=Oe*c+ft*B+nt*fe-(We*c+ut*B+rt*fe),xt=tt*c+ht*B+rt*I-(lt*c+pt*B+nt*I);return g*_t+k*wt+U*St+Y*xt}const K=te;function J(a,g,c){const h=c??new i(16),S=a[0],k=a[1],B=a[2],v=a[3],x=a[4],U=a[5],I=a[6],H=a[7],j=a[8],Y=a[9],fe=a[10],Me=a[11],ce=a[12],he=a[13],ke=a[14],Oe=a[15],We=g[0],lt=g[1],tt=g[2],ut=g[3],ft=g[4],ht=g[5],pt=g[6],nt=g[7],rt=g[8],_t=g[9],wt=g[10],St=g[11],xt=g[12],Lt=g[13],Et=g[14],zt=g[15];return h[0]=S*We+x*lt+j*tt+ce*ut,h[1]=k*We+U*lt+Y*tt+he*ut,h[2]=B*We+I*lt+fe*tt+ke*ut,h[3]=v*We+H*lt+Me*tt+Oe*ut,h[4]=S*ft+x*ht+j*pt+ce*nt,h[5]=k*ft+U*ht+Y*pt+he*nt,h[6]=B*ft+I*ht+fe*pt+ke*nt,h[7]=v*ft+H*ht+Me*pt+Oe*nt,h[8]=S*rt+x*_t+j*wt+ce*St,h[9]=k*rt+U*_t+Y*wt+he*St,h[10]=B*rt+I*_t+fe*wt+ke*St,h[11]=v*rt+H*_t+Me*wt+Oe*St,h[12]=S*xt+x*Lt+j*Et+ce*zt,h[13]=k*xt+U*Lt+Y*Et+he*zt,h[14]=B*xt+I*Lt+fe*Et+ke*zt,h[15]=v*xt+H*Lt+Me*Et+Oe*zt,h}const W=J;function Q(a,g,c){const h=c??Z();return a!==h&&(h[0]=a[0],h[1]=a[1],h[2]=a[2],h[3]=a[3],h[4]=a[4],h[5]=a[5],h[6]=a[6],h[7]=a[7],h[8]=a[8],h[9]=a[9],h[10]=a[10],h[11]=a[11]),h[12]=g[0],h[13]=g[1],h[14]=g[2],h[15]=1,h}function le(a,g){const c=g??o.create();return c[0]=a[12],c[1]=a[13],c[2]=a[14],c}function _e(a,g,c){const h=c??o.create(),S=g*4;return h[0]=a[S+0],h[1]=a[S+1],h[2]=a[S+2],h}function ze(a,g,c,h){const S=h===a?h:z(a,h),k=c*4;return S[k+0]=g[0],S[k+1]=g[1],S[k+2]=g[2],S}function De(a,g){const c=g??o.create(),h=a[0],S=a[1],k=a[2],B=a[4],v=a[5],x=a[6],U=a[8],I=a[9],H=a[10];return c[0]=Math.sqrt(h*h+S*S+k*k),c[1]=Math.sqrt(B*B+v*v+x*x),c[2]=Math.sqrt(U*U+I*I+H*H),c}function Ne(a,g,c,h,S){const k=S??new i(16),B=Math.tan(Math.PI*.5-.5*a);if(k[0]=B/g,k[1]=0,k[2]=0,k[3]=0,k[4]=0,k[5]=B,k[6]=0,k[7]=0,k[8]=0,k[9]=0,k[11]=-1,k[12]=0,k[13]=0,k[15]=0,Number.isFinite(h)){const v=1/(c-h);k[10]=h*v,k[14]=h*c*v}else k[10]=-1,k[14]=-c;return k}function He(a,g,c,h=1/0,S){const k=S??new i(16),B=1/Math.tan(a*.5);if(k[0]=B/g,k[1]=0,k[2]=0,k[3]=0,k[4]=0,k[5]=B,k[6]=0,k[7]=0,k[8]=0,k[9]=0,k[11]=-1,k[12]=0,k[13]=0,k[15]=0,h===1/0)k[10]=0,k[14]=c;else{const v=1/(h-c);k[10]=c*v,k[14]=h*c*v}return k}function Fe(a,g,c,h,S,k,B){const v=B??new i(16);return v[0]=2/(g-a),v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2/(h-c),v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1/(S-k),v[11]=0,v[12]=(g+a)/(a-g),v[13]=(h+c)/(c-h),v[14]=S/(S-k),v[15]=1,v}function Be(a,g,c,h,S,k,B){const v=B??new i(16),x=g-a,U=h-c,I=S-k;return v[0]=2*S/x,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*S/U,v[6]=0,v[7]=0,v[8]=(a+g)/x,v[9]=(h+c)/U,v[10]=k/I,v[11]=-1,v[12]=0,v[13]=0,v[14]=S*k/I,v[15]=0,v}function et(a,g,c,h,S,k=1/0,B){const v=B??new i(16),x=g-a,U=h-c;if(v[0]=2*S/x,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=2*S/U,v[6]=0,v[7]=0,v[8]=(a+g)/x,v[9]=(h+c)/U,v[11]=-1,v[12]=0,v[13]=0,v[15]=0,k===1/0)v[10]=0,v[14]=S;else{const I=1/(k-S);v[10]=S*I,v[14]=k*S*I}return v}const Ee=o.create(),Ue=o.create(),Re=o.create();function ot(a,g,c,h){const S=h??new i(16);return o.normalize(o.subtract(g,a,Re),Re),o.normalize(o.cross(c,Re,Ee),Ee),o.normalize(o.cross(Re,Ee,Ue),Ue),S[0]=Ee[0],S[1]=Ee[1],S[2]=Ee[2],S[3]=0,S[4]=Ue[0],S[5]=Ue[1],S[6]=Ue[2],S[7]=0,S[8]=Re[0],S[9]=Re[1],S[10]=Re[2],S[11]=0,S[12]=a[0],S[13]=a[1],S[14]=a[2],S[15]=1,S}function qe(a,g,c,h){const S=h??new i(16);return o.normalize(o.subtract(a,g,Re),Re),o.normalize(o.cross(c,Re,Ee),Ee),o.normalize(o.cross(Re,Ee,Ue),Ue),S[0]=Ee[0],S[1]=Ee[1],S[2]=Ee[2],S[3]=0,S[4]=Ue[0],S[5]=Ue[1],S[6]=Ue[2],S[7]=0,S[8]=Re[0],S[9]=Re[1],S[10]=Re[2],S[11]=0,S[12]=a[0],S[13]=a[1],S[14]=a[2],S[15]=1,S}function Ge(a,g,c,h){const S=h??new i(16);return o.normalize(o.subtract(a,g,Re),Re),o.normalize(o.cross(c,Re,Ee),Ee),o.normalize(o.cross(Re,Ee,Ue),Ue),S[0]=Ee[0],S[1]=Ue[0],S[2]=Re[0],S[3]=0,S[4]=Ee[1],S[5]=Ue[1],S[6]=Re[1],S[7]=0,S[8]=Ee[2],S[9]=Ue[2],S[10]=Re[2],S[11]=0,S[12]=-(Ee[0]*a[0]+Ee[1]*a[1]+Ee[2]*a[2]),S[13]=-(Ue[0]*a[0]+Ue[1]*a[1]+Ue[2]*a[2]),S[14]=-(Re[0]*a[0]+Re[1]*a[1]+Re[2]*a[2]),S[15]=1,S}function ae(a,g){const c=g??new i(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=a[0],c[13]=a[1],c[14]=a[2],c[15]=1,c}function ge(a,g,c){const h=c??new i(16),S=g[0],k=g[1],B=g[2],v=a[0],x=a[1],U=a[2],I=a[3],H=a[1*4+0],j=a[1*4+1],Y=a[1*4+2],fe=a[1*4+3],Me=a[2*4+0],ce=a[2*4+1],he=a[2*4+2],ke=a[2*4+3],Oe=a[3*4+0],We=a[3*4+1],lt=a[3*4+2],tt=a[3*4+3];return a!==h&&(h[0]=v,h[1]=x,h[2]=U,h[3]=I,h[4]=H,h[5]=j,h[6]=Y,h[7]=fe,h[8]=Me,h[9]=ce,h[10]=he,h[11]=ke),h[12]=v*S+H*k+Me*B+Oe,h[13]=x*S+j*k+ce*B+We,h[14]=U*S+Y*k+he*B+lt,h[15]=I*S+fe*k+ke*B+tt,h}function se(a,g){const c=g??new i(16),h=Math.cos(a),S=Math.sin(a);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=h,c[6]=S,c[7]=0,c[8]=0,c[9]=-S,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function O(a,g,c){const h=c??new i(16),S=a[4],k=a[5],B=a[6],v=a[7],x=a[8],U=a[9],I=a[10],H=a[11],j=Math.cos(g),Y=Math.sin(g);return h[4]=j*S+Y*x,h[5]=j*k+Y*U,h[6]=j*B+Y*I,h[7]=j*v+Y*H,h[8]=j*x-Y*S,h[9]=j*U-Y*k,h[10]=j*I-Y*B,h[11]=j*H-Y*v,a!==h&&(h[0]=a[0],h[1]=a[1],h[2]=a[2],h[3]=a[3],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function ee(a,g){const c=g??new i(16),h=Math.cos(a),S=Math.sin(a);return c[0]=h,c[1]=0,c[2]=-S,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=S,c[9]=0,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Te(a,g,c){const h=c??new i(16),S=a[0*4+0],k=a[0*4+1],B=a[0*4+2],v=a[0*4+3],x=a[2*4+0],U=a[2*4+1],I=a[2*4+2],H=a[2*4+3],j=Math.cos(g),Y=Math.sin(g);return h[0]=j*S-Y*x,h[1]=j*k-Y*U,h[2]=j*B-Y*I,h[3]=j*v-Y*H,h[8]=j*x+Y*S,h[9]=j*U+Y*k,h[10]=j*I+Y*B,h[11]=j*H+Y*v,a!==h&&(h[4]=a[4],h[5]=a[5],h[6]=a[6],h[7]=a[7],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function we(a,g){const c=g??new i(16),h=Math.cos(a),S=Math.sin(a);return c[0]=h,c[1]=S,c[2]=0,c[3]=0,c[4]=-S,c[5]=h,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Ce(a,g,c){const h=c??new i(16),S=a[0*4+0],k=a[0*4+1],B=a[0*4+2],v=a[0*4+3],x=a[1*4+0],U=a[1*4+1],I=a[1*4+2],H=a[1*4+3],j=Math.cos(g),Y=Math.sin(g);return h[0]=j*S+Y*x,h[1]=j*k+Y*U,h[2]=j*B+Y*I,h[3]=j*v+Y*H,h[4]=j*x-Y*S,h[5]=j*U-Y*k,h[6]=j*I-Y*B,h[7]=j*H-Y*v,a!==h&&(h[8]=a[8],h[9]=a[9],h[10]=a[10],h[11]=a[11],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function Pe(a,g,c){const h=c??new i(16);let S=a[0],k=a[1],B=a[2];const v=Math.sqrt(S*S+k*k+B*B);S/=v,k/=v,B/=v;const x=S*S,U=k*k,I=B*B,H=Math.cos(g),j=Math.sin(g),Y=1-H;return h[0]=x+(1-x)*H,h[1]=S*k*Y+B*j,h[2]=S*B*Y-k*j,h[3]=0,h[4]=S*k*Y-B*j,h[5]=U+(1-U)*H,h[6]=k*B*Y+S*j,h[7]=0,h[8]=S*B*Y+k*j,h[9]=k*B*Y-S*j,h[10]=I+(1-I)*H,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const f=Pe;function R(a,g,c,h){const S=h??new i(16);let k=g[0],B=g[1],v=g[2];const x=Math.sqrt(k*k+B*B+v*v);k/=x,B/=x,v/=x;const U=k*k,I=B*B,H=v*v,j=Math.cos(c),Y=Math.sin(c),fe=1-j,Me=U+(1-U)*j,ce=k*B*fe+v*Y,he=k*v*fe-B*Y,ke=k*B*fe-v*Y,Oe=I+(1-I)*j,We=B*v*fe+k*Y,lt=k*v*fe+B*Y,tt=B*v*fe-k*Y,ut=H+(1-H)*j,ft=a[0],ht=a[1],pt=a[2],nt=a[3],rt=a[4],_t=a[5],wt=a[6],St=a[7],xt=a[8],Lt=a[9],Et=a[10],zt=a[11];return S[0]=Me*ft+ce*rt+he*xt,S[1]=Me*ht+ce*_t+he*Lt,S[2]=Me*pt+ce*wt+he*Et,S[3]=Me*nt+ce*St+he*zt,S[4]=ke*ft+Oe*rt+We*xt,S[5]=ke*ht+Oe*_t+We*Lt,S[6]=ke*pt+Oe*wt+We*Et,S[7]=ke*nt+Oe*St+We*zt,S[8]=lt*ft+tt*rt+ut*xt,S[9]=lt*ht+tt*_t+ut*Lt,S[10]=lt*pt+tt*wt+ut*Et,S[11]=lt*nt+tt*St+ut*zt,a!==S&&(S[12]=a[12],S[13]=a[13],S[14]=a[14],S[15]=a[15]),S}const d=R;function p(a,g){const c=g??new i(16);return c[0]=a[0],c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=a[1],c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function T(a,g,c){const h=c??new i(16),S=g[0],k=g[1],B=g[2];return h[0]=S*a[0*4+0],h[1]=S*a[0*4+1],h[2]=S*a[0*4+2],h[3]=S*a[0*4+3],h[4]=k*a[1*4+0],h[5]=k*a[1*4+1],h[6]=k*a[1*4+2],h[7]=k*a[1*4+3],h[8]=B*a[2*4+0],h[9]=B*a[2*4+1],h[10]=B*a[2*4+2],h[11]=B*a[2*4+3],a!==h&&(h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function A(a,g){const c=g??new i(16);return c[0]=a,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=a,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=a,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function F(a,g,c){const h=c??new i(16);return h[0]=g*a[0*4+0],h[1]=g*a[0*4+1],h[2]=g*a[0*4+2],h[3]=g*a[0*4+3],h[4]=g*a[1*4+0],h[5]=g*a[1*4+1],h[6]=g*a[1*4+2],h[7]=g*a[1*4+3],h[8]=g*a[2*4+0],h[9]=g*a[2*4+1],h[10]=g*a[2*4+2],h[11]=g*a[2*4+3],a!==h&&(h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}return{create:u,set:y,fromMat3:_,fromQuat:w,negate:E,copy:z,clone:P,equalsApproximately:L,equals:V,identity:Z,transpose:$,inverse:te,determinant:X,invert:K,multiply:J,mul:W,setTranslation:Q,getTranslation:le,getAxis:_e,setAxis:ze,getScaling:De,perspective:Ne,perspectiveReverseZ:He,ortho:Fe,frustum:Be,frustumReverseZ:et,aim:ot,cameraAim:qe,lookAt:Ge,translation:ae,translate:ge,rotationX:se,rotateX:O,rotationY:ee,rotateY:Te,rotationZ:we,rotateZ:Ce,axisRotation:Pe,rotation:f,axisRotate:R,rotate:d,scaling:p,scale:T,uniformScaling:A,uniformScale:F}}const Kc=new Map;function cm(i){let o=Kc.get(i);return o||(o=um(i),Kc.set(i,o)),o}function dm(i){const o=Vs(i);function u(f,R,d,p){const T=new i(4);return f!==void 0&&(T[0]=f,R!==void 0&&(T[1]=R,d!==void 0&&(T[2]=d,p!==void 0&&(T[3]=p)))),T}const y=u;function _(f,R,d,p,T){const A=T??new i(4);return A[0]=f,A[1]=R,A[2]=d,A[3]=p,A}function w(f,R,d){const p=d??new i(4),T=R*.5,A=Math.sin(T);return p[0]=A*f[0],p[1]=A*f[1],p[2]=A*f[2],p[3]=Math.cos(T),p}function E(f,R){const d=R??o.create(3),p=Math.acos(f[3])*2,T=Math.sin(p*.5);return T>Ie?(d[0]=f[0]/T,d[1]=f[1]/T,d[2]=f[2]/T):(d[0]=1,d[1]=0,d[2]=0),{angle:p,axis:d}}function z(f,R){const d=Be(f,R);return Math.acos(2*d*d-1)}function P(f,R,d){const p=d??new i(4),T=f[0],A=f[1],F=f[2],a=f[3],g=R[0],c=R[1],h=R[2],S=R[3];return p[0]=T*S+a*g+A*h-F*c,p[1]=A*S+a*c+F*g-T*h,p[2]=F*S+a*h+T*c-A*g,p[3]=a*S-T*g-A*c-F*h,p}const L=P;function V(f,R,d){const p=d??new i(4),T=R*.5,A=f[0],F=f[1],a=f[2],g=f[3],c=Math.sin(T),h=Math.cos(T);return p[0]=A*h+g*c,p[1]=F*h+a*c,p[2]=a*h-F*c,p[3]=g*h-A*c,p}function Z(f,R,d){const p=d??new i(4),T=R*.5,A=f[0],F=f[1],a=f[2],g=f[3],c=Math.sin(T),h=Math.cos(T);return p[0]=A*h-a*c,p[1]=F*h+g*c,p[2]=a*h+A*c,p[3]=g*h-F*c,p}function $(f,R,d){const p=d??new i(4),T=R*.5,A=f[0],F=f[1],a=f[2],g=f[3],c=Math.sin(T),h=Math.cos(T);return p[0]=A*h+F*c,p[1]=F*h-A*c,p[2]=a*h+g*c,p[3]=g*h-a*c,p}function te(f,R,d,p){const T=p??new i(4),A=f[0],F=f[1],a=f[2],g=f[3];let c=R[0],h=R[1],S=R[2],k=R[3],B=A*c+F*h+a*S+g*k;B<0&&(B=-B,c=-c,h=-h,S=-S,k=-k);let v,x;if(1-B>Ie){const U=Math.acos(B),I=Math.sin(U);v=Math.sin((1-d)*U)/I,x=Math.sin(d*U)/I}else v=1-d,x=d;return T[0]=v*A+x*c,T[1]=v*F+x*h,T[2]=v*a+x*S,T[3]=v*g+x*k,T}function X(f,R){const d=R??new i(4),p=f[0],T=f[1],A=f[2],F=f[3],a=p*p+T*T+A*A+F*F,g=a?1/a:0;return d[0]=-p*g,d[1]=-T*g,d[2]=-A*g,d[3]=F*g,d}function K(f,R){const d=R??new i(4);return d[0]=-f[0],d[1]=-f[1],d[2]=-f[2],d[3]=f[3],d}function J(f,R){const d=R??new i(4),p=f[0]+f[5]+f[10];if(p>0){const T=Math.sqrt(p+1);d[3]=.5*T;const A=.5/T;d[0]=(f[6]-f[9])*A,d[1]=(f[8]-f[2])*A,d[2]=(f[1]-f[4])*A}else{let T=0;f[5]>f[0]&&(T=1),f[10]>f[T*4+T]&&(T=2);const A=(T+1)%3,F=(T+2)%3,a=Math.sqrt(f[T*4+T]-f[A*4+A]-f[F*4+F]+1);d[T]=.5*a;const g=.5/a;d[3]=(f[A*4+F]-f[F*4+A])*g,d[A]=(f[A*4+T]+f[T*4+A])*g,d[F]=(f[F*4+T]+f[T*4+F])*g}return d}function W(f,R,d,p,T){const A=T??new i(4),F=f*.5,a=R*.5,g=d*.5,c=Math.sin(F),h=Math.cos(F),S=Math.sin(a),k=Math.cos(a),B=Math.sin(g),v=Math.cos(g);switch(p){case"xyz":A[0]=c*k*v+h*S*B,A[1]=h*S*v-c*k*B,A[2]=h*k*B+c*S*v,A[3]=h*k*v-c*S*B;break;case"xzy":A[0]=c*k*v-h*S*B,A[1]=h*S*v-c*k*B,A[2]=h*k*B+c*S*v,A[3]=h*k*v+c*S*B;break;case"yxz":A[0]=c*k*v+h*S*B,A[1]=h*S*v-c*k*B,A[2]=h*k*B-c*S*v,A[3]=h*k*v+c*S*B;break;case"yzx":A[0]=c*k*v+h*S*B,A[1]=h*S*v+c*k*B,A[2]=h*k*B-c*S*v,A[3]=h*k*v-c*S*B;break;case"zxy":A[0]=c*k*v-h*S*B,A[1]=h*S*v+c*k*B,A[2]=h*k*B+c*S*v,A[3]=h*k*v-c*S*B;break;case"zyx":A[0]=c*k*v-h*S*B,A[1]=h*S*v+c*k*B,A[2]=h*k*B-c*S*v,A[3]=h*k*v+c*S*B;break;default:throw new Error(`Unknown rotation order: ${p}`)}return A}function Q(f,R){const d=R??new i(4);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[3]=f[3],d}const le=Q;function _e(f,R,d){const p=d??new i(4);return p[0]=f[0]+R[0],p[1]=f[1]+R[1],p[2]=f[2]+R[2],p[3]=f[3]+R[3],p}function ze(f,R,d){const p=d??new i(4);return p[0]=f[0]-R[0],p[1]=f[1]-R[1],p[2]=f[2]-R[2],p[3]=f[3]-R[3],p}const De=ze;function Ne(f,R,d){const p=d??new i(4);return p[0]=f[0]*R,p[1]=f[1]*R,p[2]=f[2]*R,p[3]=f[3]*R,p}const He=Ne;function Fe(f,R,d){const p=d??new i(4);return p[0]=f[0]/R,p[1]=f[1]/R,p[2]=f[2]/R,p[3]=f[3]/R,p}function Be(f,R){return f[0]*R[0]+f[1]*R[1]+f[2]*R[2]+f[3]*R[3]}function et(f,R,d,p){const T=p??new i(4);return T[0]=f[0]+d*(R[0]-f[0]),T[1]=f[1]+d*(R[1]-f[1]),T[2]=f[2]+d*(R[2]-f[2]),T[3]=f[3]+d*(R[3]-f[3]),T}function Ee(f){const R=f[0],d=f[1],p=f[2],T=f[3];return Math.sqrt(R*R+d*d+p*p+T*T)}const Ue=Ee;function Re(f){const R=f[0],d=f[1],p=f[2],T=f[3];return R*R+d*d+p*p+T*T}const ot=Re;function qe(f,R){const d=R??new i(4),p=f[0],T=f[1],A=f[2],F=f[3],a=Math.sqrt(p*p+T*T+A*A+F*F);return a>1e-5?(d[0]=p/a,d[1]=T/a,d[2]=A/a,d[3]=F/a):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function Ge(f,R){return Math.abs(f[0]-R[0])<Ie&&Math.abs(f[1]-R[1])<Ie&&Math.abs(f[2]-R[2])<Ie&&Math.abs(f[3]-R[3])<Ie}function ae(f,R){return f[0]===R[0]&&f[1]===R[1]&&f[2]===R[2]&&f[3]===R[3]}function ge(f){const R=f??new i(4);return R[0]=0,R[1]=0,R[2]=0,R[3]=1,R}const se=o.create(),O=o.create(),ee=o.create();function Te(f,R,d){const p=d??new i(4),T=o.dot(f,R);return T<-.999999?(o.cross(O,f,se),o.len(se)<1e-6&&o.cross(ee,f,se),o.normalize(se,se),w(se,Math.PI,p),p):T>.999999?(p[0]=0,p[1]=0,p[2]=0,p[3]=1,p):(o.cross(f,R,se),p[0]=se[0],p[1]=se[1],p[2]=se[2],p[3]=1+T,qe(p,p))}const we=new i(4),Ce=new i(4);function Pe(f,R,d,p,T,A){const F=A??new i(4);return te(f,p,T,we),te(R,d,T,Ce),te(we,Ce,2*T*(1-T),F),F}return{create:u,fromValues:y,set:_,fromAxisAngle:w,toAxisAngle:E,angle:z,multiply:P,mul:L,rotateX:V,rotateY:Z,rotateZ:$,slerp:te,inverse:X,conjugate:K,fromMat:J,fromEuler:W,copy:Q,clone:le,add:_e,subtract:ze,sub:De,mulScalar:Ne,scale:He,divScalar:Fe,dot:Be,lerp:et,length:Ee,len:Ue,lengthSq:Re,lenSq:ot,normalize:qe,equalsApproximately:Ge,equals:ae,identity:ge,rotationTo:Te,sqlerp:Pe}}const Xc=new Map;function fm(i){let o=Xc.get(i);return o||(o=dm(i),Xc.set(i,o)),o}function hm(i){function o(d,p,T,A){const F=new i(4);return d!==void 0&&(F[0]=d,p!==void 0&&(F[1]=p,T!==void 0&&(F[2]=T,A!==void 0&&(F[3]=A)))),F}const u=o;function y(d,p,T,A,F){const a=F??new i(4);return a[0]=d,a[1]=p,a[2]=T,a[3]=A,a}function _(d,p){const T=p??new i(4);return T[0]=Math.ceil(d[0]),T[1]=Math.ceil(d[1]),T[2]=Math.ceil(d[2]),T[3]=Math.ceil(d[3]),T}function w(d,p){const T=p??new i(4);return T[0]=Math.floor(d[0]),T[1]=Math.floor(d[1]),T[2]=Math.floor(d[2]),T[3]=Math.floor(d[3]),T}function E(d,p){const T=p??new i(4);return T[0]=Math.round(d[0]),T[1]=Math.round(d[1]),T[2]=Math.round(d[2]),T[3]=Math.round(d[3]),T}function z(d,p=0,T=1,A){const F=A??new i(4);return F[0]=Math.min(T,Math.max(p,d[0])),F[1]=Math.min(T,Math.max(p,d[1])),F[2]=Math.min(T,Math.max(p,d[2])),F[3]=Math.min(T,Math.max(p,d[3])),F}function P(d,p,T){const A=T??new i(4);return A[0]=d[0]+p[0],A[1]=d[1]+p[1],A[2]=d[2]+p[2],A[3]=d[3]+p[3],A}function L(d,p,T,A){const F=A??new i(4);return F[0]=d[0]+p[0]*T,F[1]=d[1]+p[1]*T,F[2]=d[2]+p[2]*T,F[3]=d[3]+p[3]*T,F}function V(d,p,T){const A=T??new i(4);return A[0]=d[0]-p[0],A[1]=d[1]-p[1],A[2]=d[2]-p[2],A[3]=d[3]-p[3],A}const Z=V;function $(d,p){return Math.abs(d[0]-p[0])<Ie&&Math.abs(d[1]-p[1])<Ie&&Math.abs(d[2]-p[2])<Ie&&Math.abs(d[3]-p[3])<Ie}function te(d,p){return d[0]===p[0]&&d[1]===p[1]&&d[2]===p[2]&&d[3]===p[3]}function X(d,p,T,A){const F=A??new i(4);return F[0]=d[0]+T*(p[0]-d[0]),F[1]=d[1]+T*(p[1]-d[1]),F[2]=d[2]+T*(p[2]-d[2]),F[3]=d[3]+T*(p[3]-d[3]),F}function K(d,p,T,A){const F=A??new i(4);return F[0]=d[0]+T[0]*(p[0]-d[0]),F[1]=d[1]+T[1]*(p[1]-d[1]),F[2]=d[2]+T[2]*(p[2]-d[2]),F[3]=d[3]+T[3]*(p[3]-d[3]),F}function J(d,p,T){const A=T??new i(4);return A[0]=Math.max(d[0],p[0]),A[1]=Math.max(d[1],p[1]),A[2]=Math.max(d[2],p[2]),A[3]=Math.max(d[3],p[3]),A}function W(d,p,T){const A=T??new i(4);return A[0]=Math.min(d[0],p[0]),A[1]=Math.min(d[1],p[1]),A[2]=Math.min(d[2],p[2]),A[3]=Math.min(d[3],p[3]),A}function Q(d,p,T){const A=T??new i(4);return A[0]=d[0]*p,A[1]=d[1]*p,A[2]=d[2]*p,A[3]=d[3]*p,A}const le=Q;function _e(d,p,T){const A=T??new i(4);return A[0]=d[0]/p,A[1]=d[1]/p,A[2]=d[2]/p,A[3]=d[3]/p,A}function ze(d,p){const T=p??new i(4);return T[0]=1/d[0],T[1]=1/d[1],T[2]=1/d[2],T[3]=1/d[3],T}const De=ze;function Ne(d,p){return d[0]*p[0]+d[1]*p[1]+d[2]*p[2]+d[3]*p[3]}function He(d){const p=d[0],T=d[1],A=d[2],F=d[3];return Math.sqrt(p*p+T*T+A*A+F*F)}const Fe=He;function Be(d){const p=d[0],T=d[1],A=d[2],F=d[3];return p*p+T*T+A*A+F*F}const et=Be;function Ee(d,p){const T=d[0]-p[0],A=d[1]-p[1],F=d[2]-p[2],a=d[3]-p[3];return Math.sqrt(T*T+A*A+F*F+a*a)}const Ue=Ee;function Re(d,p){const T=d[0]-p[0],A=d[1]-p[1],F=d[2]-p[2],a=d[3]-p[3];return T*T+A*A+F*F+a*a}const ot=Re;function qe(d,p){const T=p??new i(4),A=d[0],F=d[1],a=d[2],g=d[3],c=Math.sqrt(A*A+F*F+a*a+g*g);return c>1e-5?(T[0]=A/c,T[1]=F/c,T[2]=a/c,T[3]=g/c):(T[0]=0,T[1]=0,T[2]=0,T[3]=0),T}function Ge(d,p){const T=p??new i(4);return T[0]=-d[0],T[1]=-d[1],T[2]=-d[2],T[3]=-d[3],T}function ae(d,p){const T=p??new i(4);return T[0]=d[0],T[1]=d[1],T[2]=d[2],T[3]=d[3],T}const ge=ae;function se(d,p,T){const A=T??new i(4);return A[0]=d[0]*p[0],A[1]=d[1]*p[1],A[2]=d[2]*p[2],A[3]=d[3]*p[3],A}const O=se;function ee(d,p,T){const A=T??new i(4);return A[0]=d[0]/p[0],A[1]=d[1]/p[1],A[2]=d[2]/p[2],A[3]=d[3]/p[3],A}const Te=ee;function we(d){const p=d??new i(4);return p[0]=0,p[1]=0,p[2]=0,p[3]=0,p}function Ce(d,p,T){const A=T??new i(4),F=d[0],a=d[1],g=d[2],c=d[3];return A[0]=p[0]*F+p[4]*a+p[8]*g+p[12]*c,A[1]=p[1]*F+p[5]*a+p[9]*g+p[13]*c,A[2]=p[2]*F+p[6]*a+p[10]*g+p[14]*c,A[3]=p[3]*F+p[7]*a+p[11]*g+p[15]*c,A}function Pe(d,p,T){const A=T??new i(4);return qe(d,A),Q(A,p,A)}function f(d,p,T){const A=T??new i(4);return He(d)>p?Pe(d,p,A):ae(d,A)}function R(d,p,T){const A=T??new i(4);return X(d,p,.5,A)}return{create:o,fromValues:u,set:y,ceil:_,floor:w,round:E,clamp:z,add:P,addScaled:L,subtract:V,sub:Z,equalsApproximately:$,equals:te,lerp:X,lerpV:K,max:J,min:W,mulScalar:Q,scale:le,divScalar:_e,inverse:ze,invert:De,dot:Ne,length:He,len:Fe,lengthSq:Be,lenSq:et,distance:Ee,dist:Ue,distanceSq:Re,distSq:ot,normalize:qe,negate:Ge,copy:ae,clone:ge,multiply:se,mul:O,divide:ee,div:Te,zero:we,transformMat4:Ce,setLength:Pe,truncate:f,midpoint:R}}const Jc=new Map;function pm(i){let o=Jc.get(i);return o||(o=hm(i),Jc.set(i,o)),o}function Ja(i,o,u,y,_,w){return{mat3:lm(i),mat4:cm(o),quat:fm(u),vec2:Rd(y),vec3:Vs(_),vec4:pm(w)}}const{mat3:ig,mat4:ln,quat:sg,vec2:og,vec3:Xn,vec4:gt}=Ja(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Ja(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Ja(im,Array,Array,Array,Array,Array);const mm=new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]);class gm{constructor(o,u){Le(this,"device");Le(this,"presentFormat");Le(this,"quit",!1);Le(this,"pipeline");Le(this,"vertexBuffer");Le(this,"indexBuffer");Le(this,"indexCount");Le(this,"projViewModelBuffer");Le(this,"projViewModelBindGroup");Le(this,"supportedFeatures");this.device=o,this.presentFormat=u,this.supportedFeatures=o.features;const y=this.device.createShaderModule({code:nm}),_=new Float32Array([-1,-1,-1,1,0,0,0,1,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,-1,1,-1,1,0,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1]),w=new Uint32Array([0,1,2,0,2,3,1,5,6,1,6,2,2,6,7,2,7,3,4,7,6,4,6,5,0,3,7,0,7,4,0,4,5,0,5,1]);this.indexCount=w.length,this.vertexBuffer=this.device.createBuffer({size:_.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,_,0,_.length);const E=[{attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}],arrayStride:2*16,stepMode:"vertex"}];this.indexBuffer=this.device.createBuffer({size:w.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,w,0,w.length);const z=16*4;this.projViewModelBuffer=this.device.createBuffer({size:z,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const P=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.projViewModelBindGroup=this.device.createBindGroup({layout:P,entries:[{binding:0,resource:{buffer:this.projViewModelBuffer}}]});const L={vertex:{module:y,entryPoint:"vertex_main",buffers:E},fragment:{module:y,entryPoint:"fragment_main",targets:[{format:this.presentFormat}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},layout:this.device.createPipelineLayout({bindGroupLayouts:[P]})};this.pipeline=this.device.createRenderPipeline(L)}setupUI(o){mm.forEach(u=>{const y=this.supportedFeatures.has(u);o.add({enabled:y},"enabled").name(u).disable(!0)})}draw(o,u,y){const _=o.createView(),w=60*Math.PI/180,P=ln.perspective(w,u,.1,1e3),L=[3,5,10],V=[0,0,0],Z=[0,1,0],$=ln.lookAt(L,V,Z),te=ln.axisRotation([1,1,0],y/1e3),X=ln.mul(P,ln.mul($,te));this.device.queue.writeBuffer(this.projViewModelBuffer,0,X,0,X.length);const K=this.device.createCommandEncoder(),J={r:.5,g:.5,b:.5,a:0},W=K.beginRenderPass({colorAttachments:[{clearValue:J,loadOp:"clear",storeOp:"store",view:_}]});W.setPipeline(this.pipeline),W.setVertexBuffer(0,this.vertexBuffer),W.setIndexBuffer(this.indexBuffer,"uint32",0,this.indexBuffer.size),W.setBindGroup(0,this.projViewModelBindGroup),W.drawIndexed(this.indexCount,1,0,0,0),W.end(),this.device.queue.submit([K.finish()])}}const vm=(i,o,u)=>new gm(i,o),ym=`struct Atmosphere
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
    // Cosine of the angle with the direction to the sun
    mu_light: f32,
    // Cosine of travel direction vector and sun direction vector
    nu: f32,
};

// Returns 'start' moved 'stepDistance' units along the implicit direction vector 
// nu is the dot product between normalized direction and sun direction vector
fn stepRadiusMu(
    start: RaymarchStep, 
    stepDistance: f32,
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
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + stepDistance * start.nu) / result.radius;

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
}`,_m=`struct Atmosphere
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
    // Cosine of the angle with the direction to the sun
    mu_light: f32,
    // Cosine of travel direction vector and sun direction vector
    nu: f32,
};

// Returns 'start' moved 'stepDistance' units along the implicit direction vector 
// nu is the dot product between normalized direction and sun direction vector
fn stepRadiusMu(
    start: RaymarchStep, 
    stepDistance: f32,
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
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + stepDistance * start.nu) / result.radius;

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

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE HIGH_SAMPLE_COUNT

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

    let start_radius: f32 = length(origin);
    let start_mu: f32 = dot(origin, direction) / (length(origin) * length(direction));
    let start_mu_light: f32 = dot(origin, -(*light).forward) / (length(origin) * length((*light).forward));
    let nu: f32 = dot(-(*light).forward, direction) / (length((*light).forward) * length(direction));

    let originStep = RaymarchStep(start_radius, start_mu, start_mu_light, nu);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT = 256.0;

    let dT: f32 = 1.0 / SAMPLE_COUNT;
    let dSampleDistance: f32 = sampleDistance * dT;
    for (var i = 0u; f32(i) < SAMPLE_COUNT; i++)
    {
        var tBegin: f32 = f32(i) * dT;
        var tEnd: f32 = f32(i + 1) * dT;


        tBegin = tBegin * sampleDistance;
        tEnd = min(tEnd * sampleDistance, sampleDistance);

        let t: f32 = mix(tBegin, tEnd, 0.5);

        let sampleStep: RaymarchStep = stepRadiusMu(originStep, tBegin);
        let midwayStep: RaymarchStep = stepRadiusMu(originStep, tEnd);

        let altitude = sampleStep.radius - (*atmosphere).planetRadiusMm;
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
        let incidentCosine = dot((*light).forward, scatteringDir);

        let phaseTimesScattering = extinctionSample.scattering * ISOTROPIC_PHASE;

        let multiscatter = vec3<f32>(0.0);

        var shadow_count: f32 = 0;
        {
            let horizon_sin = (*atmosphere).planetRadiusMm / sampleStep.radius;
            let horizon_mu = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            shadow_count += f32(sampleStep.mu_light < horizon_mu);
        }
        {
            let horizon_sin = (*atmosphere).planetRadiusMm / midwayStep.radius;
            let horizon_mu = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            shadow_count += f32(midwayStep.mu_light < horizon_mu);
        }

        let transmittance_to_sun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, sampleStep.mu_light);
        var shadowing = vec3<f32>(transmittance_to_sun * (1.0 - 0.5 * f32(shadow_count)));

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

    if (includeGround && hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        let sampleStep: RaymarchStep = stepRadiusMu(originStep, sampleDistance);

        let transmittanceToSurface = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, lut_sampler, atmosphere, originStep, hitPlanet.t0);
        let transmittance_to_sun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, sampleStep.mu_light);

        let normalDotLight = clamp(sampleStep.mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).groundAlbedo / PI;

        result.luminance += 
            transmittanceToSurface * transmittance_to_sun * normalDotLight * diffuse
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

    // TODO: remove this
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
}`,wm=`struct Atmosphere
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
    // Cosine of the angle with the direction to the sun
    mu_light: f32,
    // Cosine of travel direction vector and sun direction vector
    nu: f32,
};

// Returns 'start' moved 'stepDistance' units along the implicit direction vector 
// nu is the dot product between normalized direction and sun direction vector
fn stepRadiusMu(
    start: RaymarchStep, 
    stepDistance: f32,
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
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + stepDistance * start.nu) / result.radius;

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

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE HIGH_SAMPLE_COUNT

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

    let start_radius: f32 = length(origin);
    let start_mu: f32 = dot(origin, direction) / (length(origin) * length(direction));
    let start_mu_light: f32 = dot(origin, -(*light).forward) / (length(origin) * length((*light).forward));
    let nu: f32 = dot(-(*light).forward, direction) / (length((*light).forward) * length(direction));

    let originStep = RaymarchStep(start_radius, start_mu, start_mu_light, nu);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT = 16.0;

    let dT: f32 = 1.0 / SAMPLE_COUNT;
    let dSampleDistance: f32 = sampleDistance * dT;
    for (var i = 0u; f32(i) < SAMPLE_COUNT; i++)
    {
        var tBegin: f32 = f32(i) * dT;
        var tEnd: f32 = f32(i + 1) * dT;

        tBegin = tBegin * tBegin;
        tEnd = tEnd * tEnd;

        tBegin = tBegin * sampleDistance;
        tEnd = min(tEnd * sampleDistance, sampleDistance);

        let t: f32 = mix(tBegin, tEnd, 0.5);

        let sampleStep: RaymarchStep = stepRadiusMu(originStep, tBegin);
        let midwayStep: RaymarchStep = stepRadiusMu(originStep, tEnd);

        let altitude = sampleStep.radius - (*atmosphere).planetRadiusMm;
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
        let incidentCosine = dot((*light).forward, scatteringDir);

        // Ozone does not scatter light normally, so we arbitrarily use rayleigh's phase function in case ozone's scattering
        // coefficient is nonzero
        let phaseTimesScattering: vec3<f32> = 
            extinctionSample.scatteringRayleigh * phaseRayleigh(incidentCosine)
            + extinctionSample.scatteringMie * phaseMie(incidentCosine, 0.8)
            + extinctionSample.scatteringOzone * phaseRayleigh(incidentCosine);

        let multiscatter = sampleMultiscatterLUT(multiscatterLUT, lut_sampler, atmosphere, sampleStep.radius, sampleStep.mu_light);

        var shadow_count: f32 = 0;
        {
            let horizon_sin = (*atmosphere).planetRadiusMm / sampleStep.radius;
            let horizon_mu = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            shadow_count += f32(sampleStep.mu_light < horizon_mu);
        }
        {
            let horizon_sin = (*atmosphere).planetRadiusMm / midwayStep.radius;
            let horizon_mu = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            shadow_count += f32(midwayStep.mu_light < horizon_mu);
        }

        let transmittance_to_sun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, sampleStep.mu_light);
        var shadowing = vec3<f32>(transmittance_to_sun * (1.0 - 0.5 * f32(shadow_count)));

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

    if (includeGround && hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        let sampleStep: RaymarchStep = stepRadiusMu(originStep, sampleDistance);

        let transmittanceToSurface = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, lut_sampler, atmosphere, originStep, hitPlanet.t0);
        let transmittance_to_sun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, sampleStep.mu_light);

        let normalDotLight = clamp(sampleStep.mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).groundAlbedo / PI;

        result.luminance += 
            transmittanceToSurface * transmittance_to_sun * normalDotLight * diffuse
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
}`,Sm=`struct Atmosphere
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

@group(0) @binding(0) var output_color: texture_storage_2d<rgba32float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;
@group(0) @binding(4) var skyview_lut: texture_2d<f32>;

struct CameraUBO
{
    inv_proj: mat4x4<f32>,
    inv_view: mat4x4<f32>,
    position: vec4<f32>,
}

@group(1) @binding(0) var<uniform> b_camera: CameraUBO;
@group(1) @binding(1) var<uniform> b_light: CelestialLightUBO;

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
    // Cosine of the angle with the direction to the sun
    mu_light: f32,
    // Cosine of travel direction vector and sun direction vector
    nu: f32,
};

// Returns 'start' moved 'stepDistance' units along the implicit direction vector 
// nu is the dot product between normalized direction and sun direction vector
fn stepRadiusMu(
    start: RaymarchStep, 
    stepDistance: f32,
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
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + stepDistance * start.nu) / result.radius;

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

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE HIGH_SAMPLE_COUNT

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

    let start_radius: f32 = length(origin);
    let start_mu: f32 = dot(origin, direction) / (length(origin) * length(direction));
    let start_mu_light: f32 = dot(origin, -(*light).forward) / (length(origin) * length((*light).forward));
    let nu: f32 = dot(-(*light).forward, direction) / (length((*light).forward) * length(direction));

    let originStep = RaymarchStep(start_radius, start_mu, start_mu_light, nu);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT = 16.0;

    let dT: f32 = 1.0 / SAMPLE_COUNT;
    let dSampleDistance: f32 = sampleDistance * dT;
    for (var i = 0u; f32(i) < SAMPLE_COUNT; i++)
    {
        var tBegin: f32 = f32(i) * dT;
        var tEnd: f32 = f32(i + 1) * dT;

        tBegin = tBegin * tBegin;
        tEnd = tEnd * tEnd;

        tBegin = tBegin * sampleDistance;
        tEnd = min(tEnd * sampleDistance, sampleDistance);

        let t: f32 = mix(tBegin, tEnd, 0.5);

        let sampleStep: RaymarchStep = stepRadiusMu(originStep, tBegin);
        let midwayStep: RaymarchStep = stepRadiusMu(originStep, tEnd);

        let altitude = sampleStep.radius - (*atmosphere).planetRadiusMm;
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
        let incidentCosine = dot((*light).forward, scatteringDir);

        // Ozone does not scatter light normally, so we arbitrarily use rayleigh's phase function in case ozone's scattering
        // coefficient is nonzero
        let phaseTimesScattering: vec3<f32> = 
            extinctionSample.scatteringRayleigh * phaseRayleigh(incidentCosine)
            + extinctionSample.scatteringMie * phaseMie(incidentCosine, 0.8)
            + extinctionSample.scatteringOzone * phaseRayleigh(incidentCosine);

        let multiscatter = sampleMultiscatterLUT(multiscatterLUT, lut_sampler, atmosphere, sampleStep.radius, sampleStep.mu_light);

        var shadow_count: f32 = 0;
        {
            let horizon_sin = (*atmosphere).planetRadiusMm / sampleStep.radius;
            let horizon_mu = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            shadow_count += f32(sampleStep.mu_light < horizon_mu);
        }
        {
            let horizon_sin = (*atmosphere).planetRadiusMm / midwayStep.radius;
            let horizon_mu = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            shadow_count += f32(midwayStep.mu_light < horizon_mu);
        }

        let transmittance_to_sun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, sampleStep.mu_light);
        var shadowing = vec3<f32>(transmittance_to_sun * (1.0 - 0.5 * f32(shadow_count)));

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

    if (includeGround && hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        let sampleStep: RaymarchStep = stepRadiusMu(originStep, sampleDistance);

        let transmittanceToSurface = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, lut_sampler, atmosphere, originStep, hitPlanet.t0);
        let transmittance_to_sun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, sampleStep.mu_light);

        let normalDotLight = clamp(sampleStep.mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).groundAlbedo / PI;

        result.luminance += 
            transmittanceToSurface * transmittance_to_sun * normalDotLight * diffuse
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
    let sinHorizonZenith = clamp((*atmosphere).planetRadiusMm / length(position), -1.0, 1.0);
    let horizonZenith = PI - asin(sinHorizonZenith);

    let cosViewZenith = clamp(dot(position, direction) / (length(position) * length(direction)), -1.0, 1.0);
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
    var luminance = sampleSkyViewLUT(atmosphere, position, direction);
    if(direction.y >= 0.0)
    {
        let light_direction = normalize(-(*light).forward);
        let radius = length(position);
        let mu_light = dot(position, light_direction) / radius;

        let transmittance_to_light = sampleTransmittanceLUT_Sun(
            transmittance_lut, 
            lut_sampler,
            atmosphere, 
            light, 
            radius,
            mu_light
        );

        luminance += transmittance_to_light * sampleSunDisk(atmosphere, light, position, direction) * (*light).color.rgb * (*light).strength;
    }
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

    // TODO: shadowmap, occlusion texture

    // Model water as perfect reflections with some diffuse scattering to emulate light coming up from underwater

    let diffuse = diffuseBRDF(material);

    // shift reflection vector up to make up for the lack of secondary bounces
    // Otherwise, the environmental luminance will be 0 and we get random black patches
    var reflection_direction = reflect(normalize(direction), normalize(material.normal));
    reflection_direction.y = max(reflection_direction.y, 0.001); 
    reflection_direction = normalize(reflection_direction);

    let surface_position = position + direction * distance;

    light_luminance_transfer += 
        transmittance_to_surface
        * sampleEnvironmentLuminance(atmosphere, light, surface_position, reflection_direction) 
        * mix(
            diffuse, 
            vec3<f32>(1.0), 
            computeFresnelPerfectReflection(material, reflection_direction)
        );

    light_luminance_transfer += 
        transmittance_to_surface
        * diffuse
        * sampleMultiscatterLUT(multiscatter_lut, lut_sampler, atmosphere, surface_step.radius, surface_step.mu_light);

    { 
        // Aerial perspective, the light scattered by air between viewer and the surface
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
            include_ground
        ).luminance;
    }

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

    var atmosphere = ATMOSPHERE_GLOBAL;
    var light = b_light.light;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    const METERS_PER_MM = 1000000.0;
    let origin = vec3<f32>(0.0, atmosphere.planetRadiusMm, 0.0) + b_camera.position.xyz / METERS_PER_MM;

    let uv_clip_space = (uv - vec2<f32>(0.5)) * 2.0;
    let near_plane_depth = 1.0;
    let direction_view_space = b_camera.inv_proj * vec4(uv_clip_space, near_plane_depth, 1.0);
    let direction_world = normalize((b_camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

    let color_with_depth_in_alpha = textureLoad(gbuffer_color_with_depth_in_alpha, texel_coord, 0);
    let normal = textureLoad(gbuffer_normal, texel_coord, 0); 

    let material: PBRTexel = convertPBRProperties(color_with_depth_in_alpha.xyz, normal.xyz);
    let depth = color_with_depth_in_alpha.a / METERS_PER_MM;

    var luminance_transfer = vec3<f32>(0.0);

    // TODO: Use radius/mu to test if mu is below horizon instead?
    let intersects_ground = raySphereTest(origin, direction_world, atmosphere.planetRadiusMm);

    if (depth <= 0.0)
    {
        // Unobscured view of the virtual environment, i.e. sky or ground

        /*
        This should not occur if the virtual ground is obscured by otherwise rendered terrain/geometry
        Uncomment if needed at some point
        if (intersects_ground)
        {
            let include_ground = true;

            // Ray intersects the ground, so the sky view LUT is not valid

            luminance_transfer = computeLuminanceScatteringIntegral(
                &atmosphere, 
                &light, 
                lut_sampler,
                transmittance_lut, 
                multiscatter_lut, 
                origin, 
                direction_world, 
                include_ground
            ).luminance;
        }
        else
        */
        {
            luminance_transfer = sampleEnvironmentLuminance(&atmosphere, &light, origin, direction_world);
        }
    }
    else
    {
        luminance_transfer = sampleGeometryLuminance(&atmosphere, &light, material, origin, direction_world, depth, intersects_ground);
    }

    let luminance = light.strength * light.color * luminance_transfer;

    let output = vec4<f32>(tonemapACES(luminance),1.0);

    textureStore(output_color, texel_coord, output);
}`,xm=`// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

@group(0) @binding(0) var b_texture: texture_2d<f32>;
@group(0) @binding(1) var b_sampler: sampler;

struct FullscreenQuadUBO
{
    color_gain: vec4<f32>,
    vertex_scale: vec4<f32>,
}

@group(1) @binding(0) var<uniform> b_ubo: FullscreenQuadUBO;

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
    output.position = b_ubo.vertex_scale * QUAD_VERTICES[index];
    output.uv = QUAD_UVS[index];
    return output; 
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4<f32>
{
    let color = b_ubo.color_gain * textureSample(b_texture, b_sampler, fragData.uv);
    return vec4<f32>(color.xyz, 1.0);
}`,Tm=`struct Atmosphere
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

struct CameraUBO
{
    inv_proj: mat4x4<f32>,
    inv_view: mat4x4<f32>,
    position: vec4<f32>,
}

struct TimeUBO
{
    time_seconds: f32,
}

@group(0) @binding(0) var gbuffer_color_with_depth_in_alpha: texture_storage_2d<rgba16float, write>;
@group(0) @binding(1) var gbuffer_normal: texture_storage_2d<rgba16float, write>;

@group(1) @binding(0) var<uniform> b_camera: CameraUBO;
@group(1) @binding(1) var<uniform> b_time: TimeUBO;

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
    // Cosine of the angle with the direction to the sun
    mu_light: f32,
    // Cosine of travel direction vector and sun direction vector
    nu: f32,
};

// Returns 'start' moved 'stepDistance' units along the implicit direction vector 
// nu is the dot product between normalized direction and sun direction vector
fn stepRadiusMu(
    start: RaymarchStep, 
    stepDistance: f32,
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
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + stepDistance * start.nu) / result.radius;

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

struct PlaneWave
{
    amplitude: f32,
    wavelength: f32,
    direction: vec2<f32>,
    speed: f32,
}

// Fairly arbitrary parameters I thought looked good
// Some wavelengths/velocities were derived from actual oceanographic data

const WAVE_1 = PlaneWave(
    1.5,
    33.8,
    vec2<f32>( 0.447213595499957, 0.89442719099991587856),
    5.9,
);

const WAVE_2 = PlaneWave(
    0.02,
    3.5,
    vec2<f32>(1.0, 0.0),
    0.5,
);

const WAVE_3 = PlaneWave(
    0.02,
    4.5,
    vec2<f32>(0.0, 1.0),
    1.5,
);

const WATER_COLOR = vec3<f32>(1.0 / 255.0, 123.0 / 255.0, 146.0 / 255.0);
const WAVE_NEUTRAL_PLANE = 1.0;
const WAVE_MAX_HEIGHT = WAVE_NEUTRAL_PLANE + (WAVE_1.amplitude + WAVE_2.amplitude + WAVE_3.amplitude);

fn sampleWave(
    wave: PlaneWave,
    time: f32, 
    coords: vec2<f32>, 
) -> f32
{
    let wave_number = 2.0 * 3.141592653589793 / wave.wavelength;
    let wave_vector = wave.direction * wave_number;
    let angular_frequency = wave.speed * wave_number;

    return wave.amplitude * (WAVE_NEUTRAL_PLANE + cos(dot(coords, wave_vector) - angular_frequency * time));
}

// Distance when waves 2 and 3 (the smaller, finer detail ones) drop out
const FIRST_DISTANCE = 100.0;
// Distance when wave 1 drops out
const SECOND_DISTANCE = 300.0;

fn sampleHeightmapCoarse(coords: vec2<f32>, time: f32) -> f32
{
    return (1.0 - smoothstep(0.0, SECOND_DISTANCE, length(coords))) * (sampleWave(
        WAVE_1,
        time, 
        coords, 
    ));
}

fn estimateCoarseHeightmapNormal(coords: vec2<f32>, time: f32) -> vec3<f32>
{
    // estimate of heightmap gradient
    const EPSILON = 0.001;

    let dFdx = sampleHeightmapCoarse(vec2<f32>(coords.x + EPSILON, coords.y), time) 
        - sampleHeightmapCoarse(vec2<f32>(coords.x - EPSILON, coords.y), time);
    let dFdz = sampleHeightmapCoarse(vec2<f32>(coords.x, coords.y + EPSILON), time)
        - sampleHeightmapCoarse(vec2<f32>(coords.x,coords.y - EPSILON), time);

    let normal = normalize(vec3<f32>(
        -dFdx,
        2.0 * EPSILON,
        -dFdz,
    ));
    return normal;
}

fn sampleHeightmap(coords: vec2<f32>, time: f32) -> f32
{
    return (1.0 - smoothstep(0.0, SECOND_DISTANCE, length(coords))) * (sampleWave(
        WAVE_1,
        time, 
        coords, 
    )) 
    + (1.0 - smoothstep(0.0, FIRST_DISTANCE, length(coords))) * (sampleWave(
        WAVE_2,
        time, 
        coords, 
    ) 
    + sampleWave(
        WAVE_3,
        time, 
        coords, 
    ));
}

fn estimateHeightmapNormal(coords: vec2<f32>, time: f32) -> vec3<f32>
{
    // estimate of heightmap gradient
    const EPSILON = 0.001;

    let dFdx = sampleHeightmap(vec2<f32>(coords.x + EPSILON, coords.y), time) 
        - sampleHeightmap(vec2<f32>(coords.x - EPSILON, coords.y), time);
    let dFdz = sampleHeightmap(vec2<f32>(coords.x, coords.y + EPSILON), time)
        - sampleHeightmap(vec2<f32>(coords.x,coords.y - EPSILON), time);

    let normal = normalize(vec3<f32>(
        -dFdx,
        2.0 * EPSILON,
        -dFdz,
    ));
    return normal;
}

struct HeightmapRaymarchResult
{
    color: vec4<f32>,
    normal: vec4<f32>,
    distance: f32,
}

fn raymarchHeightmap(
    atmosphere: ptr<function, Atmosphere>, 
    origin: vec3<f32>, 
    direction: vec3<f32>
) -> HeightmapRaymarchResult
{
    let time = b_time.time_seconds;
    // TODO: Figure out spherical coordinate raymarching

    // Skip to where waves can possibly start
    var t = -max(origin.y-WAVE_MAX_HEIGHT, 0.0) / direction.y;
    while(t < FIRST_DISTANCE)
    {
        // Make larger stepsize work for closer features
        let scaled_t = t;
        let position = scaled_t * direction + origin;

        let sampled_height = sampleHeightmap(
            position.xz,
            time
        );

        if(sampled_height > position.y)
        {
            let normal = estimateHeightmapNormal(position.xz, time);

            return HeightmapRaymarchResult(
                vec4<f32>(WATER_COLOR, 1.0),
                vec4<f32>(normal, 0.0),
                t,
            );
        }
        t += 0.1;
    }

    while(t < SECOND_DISTANCE)
    {
        let scaled_t = (t / SECOND_DISTANCE) * (t / SECOND_DISTANCE) * SECOND_DISTANCE;
        let position = scaled_t * direction + origin;

        let sampled_height = sampleHeightmapCoarse(
            position.xz,
            time
        );

        if(sampled_height > position.y)
        {
            let normal = estimateCoarseHeightmapNormal(position.xz, time);

            return HeightmapRaymarchResult(
                vec4<f32>(WATER_COLOR, 1.0),
                vec4<f32>(normal, 0.0),
                t,
            );
        }
        t += 0.2;
    }

    let sin_horizonZenith: f32 = (*atmosphere).planetRadiusMm / (length(origin) / METERS_PER_MM + (*atmosphere).planetRadiusMm);
    let cos_horizonZenith: f32 = -safeSqrt(1.0 - sin_horizonZenith * sin_horizonZenith);

    if(dot(normalize(origin / METERS_PER_MM + vec3<f32>(0.0, (*atmosphere).planetRadiusMm, 0.0)), normalize(direction)) > cos_horizonZenith)
    {
        return HeightmapRaymarchResult(
            vec4<f32>(0.0),
            vec4<f32>(0.0),
            0.0,
        );
    }

    // To fill in colors at the edge, estimate the ocean as a flat plane
    let distance_to_floor = max(-origin.y / direction.y, 0.0);

    return HeightmapRaymarchResult(
        vec4<f32>(WATER_COLOR, 1.0),
        vec4<f32>(0.0,1.0,0.0, 0.0),
        distance_to_floor,
    );
}

@compute @workgroup_size(16,16,1)
fn renderHeightmap(@builtin(global_invocation_id) global_id : vec3<u32>,) 
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(gbuffer_color_with_depth_in_alpha);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        return;
    }
    var atmosphere = ATMOSPHERE_GLOBAL;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    let origin = b_camera.position.xyz;

    let uv_clip_space = (uv - vec2<f32>(0.5)) * 2.0;
    let near_plane_depth = 1.0;
    let direction_view_space = b_camera.inv_proj * vec4(uv_clip_space, near_plane_depth, 1.0);
    let direction_world = normalize((b_camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

    // Assume we start far enough above the waves that upward rays cannot intersect the ocean
    // Eventually it would be nice to solve for that case, but not while we deferred render the waves
    if(direction_world.y > 0.0)
    {
        return;
    }

    let result = raymarchHeightmap(&atmosphere, origin, direction_world);

    textureStore(gbuffer_color_with_depth_in_alpha, texel_coord, vec4<f32>(result.color.xyz, result.distance));
    textureStore(gbuffer_normal, texel_coord, vec4<f32>(result.normal.xyz, 0.0));
}`,Ia={width:2048,height:1024},ed="rgba32float",el="float",td="rgba32float",Md="float",nd="rgba32float",Rm="float",rd="rgba16float",Mm="float",id="rgba16float",Em="float",Ga="rgba32float",Da={width:1024,height:1024},Oa={width:1024,height:256};class qs{constructor(o,u){Le(this,"stagingBuffer");Le(this,"buffer");this.stagingBuffer=new Float32Array(u),this.buffer=o.createBuffer({size:this.stagingBuffer.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM})}writeToGPU(o){this.stageFloats(),o.queue.writeBuffer(this.buffer,0,this.stagingBuffer,0,this.stagingBuffer.length)}}class Am extends qs{constructor(u){super(u,1);Le(this,"data",{time_seconds:0})}stageFloats(){this.stagingBuffer[0]=this.data.time_seconds}}class Pm extends qs{constructor(u){super(u,36);Le(this,"data",{inv_proj:ln.identity(),inv_view:ln.identity(),position:gt.create(0,0,0,1)})}stageFloats(){this.stagingBuffer.set(this.data.inv_proj,0),this.stagingBuffer.set(this.data.inv_view,16),this.stagingBuffer.set(this.data.position,32)}}class Lm extends qs{constructor(u){super(u,8);Le(this,"data",{color_gain:gt.create(1,1,1,1),vertex_scale:gt.create(1,1,1,1)})}stageFloats(){this.stagingBuffer.set(this.data.color_gain,0),this.stagingBuffer.set(this.data.vertex_scale,4)}}class zm extends qs{constructor(u){super(u,8);Le(this,"data",{light:{color:Xn.create(1,1,1),strength:100,forward:Xn.create(0,1,0),angularRadius:16/60*(3.141592653589793/180)}})}stageFloats(){this.stagingBuffer.set(this.data.light.color,0),this.stagingBuffer[3]=this.data.light.strength,this.stagingBuffer.set(this.data.light.forward,4),this.stagingBuffer[7]=this.data.light.angularRadius}}function sd(i,o,u){const y="GBuffer",_=i.createTexture({size:o,dimension:"2d",format:rd,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:y}),w=_.createView({label:y}),E=i.createTexture({size:o,dimension:"2d",format:id,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:y}),z=E.createView({label:y}),P=(u==null?void 0:u.readGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Mm}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Em}}]}),L=i.createBindGroup({layout:P,entries:[{binding:0,resource:w},{binding:1,resource:z}],label:y}),V=(u==null?void 0:u.writeGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:rd}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:id}}]}),Z=i.createBindGroup({layout:V,entries:[{binding:0,resource:w},{binding:1,resource:z}],label:y});return{colorWithDepthInAlpha:_,colorWithDepthInAlphaView:w,normal:E,normalView:z,readGroupLayout:P,readGroup:L,writeGroupLayout:V,writeGroup:Z}}function Cm(i,o){const u="Transmittance LUT",y=i.createTexture({size:o,dimension:"2d",format:ed,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:u}),_=y.createView({label:u}),w=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:ed}}],label:u}),E=i.createBindGroup({layout:w,entries:[{binding:0,resource:_}],label:u}),z=i.createShaderModule({code:ym,label:u}),P=i.createComputePipeline({compute:{module:z,entryPoint:"computeTransmittance"},layout:i.createPipelineLayout({bindGroupLayouts:[w]}),label:u});return{group0:E,pipeline:P,texture:y,view:_}}function Um(i,o,u){const y="Multiscatter LUT",_=i.createTexture({size:o,dimension:"2d",format:td,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:y}),w=_.createView({label:y}),E=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:td}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:el}}],label:y}),z=i.createBindGroup({layout:E,entries:[{binding:0,resource:w},{binding:1,resource:i.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:u}],label:y}),P=i.createShaderModule({code:_m,label:y}),L=i.createComputePipeline({compute:{module:P,entryPoint:"computeMultiscattering"},layout:i.createPipelineLayout({bindGroupLayouts:[E]}),label:y});return{group0:z,pipeline:L,texture:_,view:w}}function km(i,o,u,y,_){const w="Skyview LUT",E=i.createTexture({size:o,dimension:"2d",format:nd,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:w}),z=E.createView({label:w}),P=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:nd}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:el}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:Md}}],label:w}),L=i.createBindGroup({layout:P,entries:[{binding:0,resource:z},{binding:1,resource:i.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:u},{binding:3,resource:y}],label:w}),V=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}]}),Z=i.createBindGroup({layout:V,entries:[{binding:0,resource:{buffer:_.buffer}}]}),$=i.createShaderModule({code:wm,label:w}),te=i.createComputePipeline({compute:{module:$,entryPoint:"computeSkyViewLuminance"},layout:i.createPipelineLayout({bindGroupLayouts:[P,V]}),label:w});return{group0:L,group1:Z,pipeline:te,texture:E,view:z}}function Im(i,o,u,y){const _="Heightmap Pass",w=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:_}),E=i.createBindGroup({layout:w,entries:[{binding:0,resource:{buffer:u.buffer}},{binding:1,resource:{buffer:y.buffer}}]}),z=i.createShaderModule({code:Tm,label:_}),P=i.createComputePipeline({layout:i.createPipelineLayout({bindGroupLayouts:[o,w]}),compute:{module:z,entryPoint:"renderHeightmap"},label:_});return{group1:E,pipeline:P}}function Dm(i,o,u,y,_,w,E){const z=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Ga}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:el,viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:Md,viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:Rm,viewDimension:"2d"}}],label:"Atmosphere sampler/LUT/UBO Group"}),P=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Atmosphere Camera Group 1"}),L=[z,P,o],V=i.createTexture({format:Ga,size:{width:1,height:1},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),Z=V.createView(),$=i.createBindGroup({layout:z,entries:[{binding:0,resource:Z},{binding:1,resource:i.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:u},{binding:3,resource:y},{binding:4,resource:_}],label:"Atmosphere Camera Group 0"}),te=i.createBindGroup({layout:L[1],entries:[{binding:0,resource:{buffer:w.buffer}},{binding:1,resource:{buffer:E.buffer}}],label:"Atmosphere Camera Group 1"}),X=i.createShaderModule({code:Sm,label:"Atmosphere Camera"}),K=i.createComputePipeline({compute:{module:X,entryPoint:"renderCompositedAtmosphere"},layout:i.createPipelineLayout({bindGroupLayouts:L}),label:"Atmosphere Camera"});return{group0Layout:z,group1Layout:P,group0:$,group1:te,outputColor:V,outputColorView:Z,pipeline:K}}function Om(i,o,u){const y="Fullscreen Quad",_=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}}],label:y}),w=new Map,E=new Map,z=i.createSampler({magFilter:"linear",minFilter:"linear"});o.forEach(({view:te,defaultUBO:X},K)=>{w.set(K,i.createBindGroup({layout:_,entries:[{binding:0,resource:te},{binding:1,resource:z}],label:y+K.toString()})),E.set(K,X)});const P=new Lm(i),L=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}}],label:y}),V=i.createBindGroup({layout:L,entries:[{binding:0,resource:{buffer:P.buffer}}]}),Z=i.createShaderModule({code:xm,label:y}),$=i.createRenderPipeline({vertex:{module:Z,entryPoint:"vertex_main"},fragment:{module:Z,entryPoint:"fragment_main",targets:[{format:u}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:i.createPipelineLayout({bindGroupLayouts:[_,L]}),label:y});return{group0Layout:_,group0ByOutputTexture:w,group0Sampler:z,uboDataByOutputTexture:E,ubo:P,group1:V,pipeline:$}}const ba=[.25,.3333,.5,.75,1,1.5];var Bs=(i=>(i[i.DrawToDraw=0]="DrawToDraw",i[i.SkyviewLUT=1]="SkyviewLUT",i[i.Heightmap=2]="Heightmap",i[i.AtmosphereCamera=3]="AtmosphereCamera",i[i.FullscreenQuad=4]="FullscreenQuad",i))(Bs||{});class od{constructor(o){Le(this,"values");Le(this,"sum",0);Le(this,"average_",0);Le(this,"count",0);Le(this,"index",0);this.values=new Array(o).fill(0)}get average(){return this.average_}push(o){this.index>=this.values.length&&(this.index=0),this.index<this.count&&(this.sum-=this.values[this.index]),this.values[this.index]=o,this.sum+=o,this.count=Math.min(this.values.length,this.count+1),this.average_=this.sum/this.count,this.index+=1}}class bm{constructor(o,u,y){Le(this,"transmittanceLUTPassResources");Le(this,"multiscatterLUTPassResources");Le(this,"skyviewLUTPassResources");Le(this,"heightmapPassResources");Le(this,"atmosphereCameraPassResources");Le(this,"fullscreenQuadPassResources");Le(this,"gbuffer");Le(this,"scaledSize");Le(this,"rawSize");Le(this,"settings");Le(this,"uiReadonly");Le(this,"celestialLightUBO");Le(this,"cameraUBO");Le(this,"timeUBO");Le(this,"fullscreenQuadIndexBuffer");Le(this,"device");Le(this,"presentFormat");Le(this,"quit",!1);Le(this,"frametimeQuery");Le(this,"frametimeAverages");Le(this,"startTime");Le(this,"dummyFrameCounter");Le(this,"probationFrameCounter");Le(this,"targetFPS",0);if(this.device=o,this.presentFormat=u,this.startTime=y,this.settings={outputTexture:3,outputTextureSettings:new Map([[3,{flip:!1,color_gain:{r:1,g:1,b:1}}],[1,{flip:!1,color_gain:{r:1,g:1,b:1}}],[2,{flip:!1,color_gain:{r:15,g:15,b:15}}],[0,{flip:!0,color_gain:{r:8,g:8,b:8}}],[4,{flip:!1,color_gain:{r:1,g:1,b:1}}],[5,{flip:!1,color_gain:{r:1,g:1,b:1}}]]),currentOutputTextureSettings:{flip:!1,color_gain:{r:1,g:1,b:1}},orbit:{timeHours:5.5,timeSpeedupFactor:400,paused:!1,reversed:!1,inclinationRadians:Math.PI/2,sunsetAzimuthRadians:0},renderScale:1.5},this.uiReadonly={averageFPS:0,frametimeControllers:new Map},this.scaledSize={width:1,height:1},this.rawSize={width:1,height:1},this.settings.outputTextureSettings.has(this.settings.outputTexture)){const z=this.settings.outputTextureSettings.get(this.settings.outputTexture);this.settings.currentOutputTextureSettings.flip=z.flip,this.settings.currentOutputTextureSettings.color_gain.r=z.color_gain.r,this.settings.currentOutputTextureSettings.color_gain.g=z.color_gain.g,this.settings.currentOutputTextureSettings.color_gain.b=z.color_gain.b}if(this.frametimeAverages=new Map,o.features.has("timestamp-query")){const P=2*Object.keys(Bs).map(L=>Number(L)).filter(isNaN).length;this.frametimeQuery={mappingLock:!1,querySet:o.createQuerySet({type:"timestamp",count:P}),writeBuffer:o.createBuffer({size:8*P,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE}),readBuffer:o.createBuffer({size:8*P,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})},Object.keys(Bs).map(L=>Number(L)).filter(L=>!isNaN(L)).forEach(L=>{const V=L;this.frametimeAverages.set(V,new od(400)),Object.assign(this.uiReadonly,String(V),0)})}else console.warn("WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages."),this.frametimeAverages.set(0,new od(400));this.dummyFrameCounter=10,this.probationFrameCounter=100,this.cameraUBO=new Pm(o),this.timeUBO=new Am(o),this.celestialLightUBO=new zm(o),this.gbuffer=sd(o,{width:1,height:1}),this.transmittanceLUTPassResources=Cm(this.device,Ia),this.multiscatterLUTPassResources=Um(this.device,Da,this.transmittanceLUTPassResources.view),this.skyviewLUTPassResources=km(this.device,Oa,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.celestialLightUBO),this.heightmapPassResources=Im(this.device,this.gbuffer.writeGroupLayout,this.cameraUBO,this.timeUBO);const _=new Uint32Array([0,1,2,0,2,3]);this.fullscreenQuadIndexBuffer=o.createBuffer({size:_.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),o.queue.writeBuffer(this.fullscreenQuadIndexBuffer,0,_,0,_.length),this.atmosphereCameraPassResources=Dm(this.device,this.gbuffer.readGroupLayout,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.skyviewLUTPassResources.view,this.cameraUBO,this.celestialLightUBO),this.fullscreenQuadPassResources=Om(this.device,new Map([[3,{view:this.atmosphereCameraPassResources.outputColorView,defaultUBO:{vertex_scale:gt.create(1,1,1,1),color_gain:gt.create(1,1,1.01,0)}}],[1,{view:this.transmittanceLUTPassResources.view,defaultUBO:{vertex_scale:gt.create(1,1,1,1),color_gain:gt.create(1,1,1,1)}}],[2,{view:this.multiscatterLUTPassResources.view,defaultUBO:{vertex_scale:gt.create(1,1,1,1),color_gain:gt.create(15,15,15,15)}}],[0,{view:this.skyviewLUTPassResources.view,defaultUBO:{vertex_scale:gt.create(1,-1,1,1),color_gain:gt.create(8,8,8,8)}}],[4,{view:this.gbuffer.colorWithDepthInAlphaView,defaultUBO:{vertex_scale:gt.create(1,1,1,1),color_gain:gt.create(1,1,1,1)}}],[5,{view:this.gbuffer.normalView,defaultUBO:{vertex_scale:gt.create(1,1,1,1),color_gain:gt.create(1,1,1,1)}}]]),this.presentFormat);const w=o.createCommandEncoder();let E=w.beginComputePass();E.setPipeline(this.transmittanceLUTPassResources.pipeline),E.setBindGroup(0,this.transmittanceLUTPassResources.group0),E.dispatchWorkgroups(Math.ceil(Ia.width/16),Math.ceil(Ia.height/16)),E.end(),E=w.beginComputePass(),E.setPipeline(this.multiscatterLUTPassResources.pipeline),E.setBindGroup(0,this.multiscatterLUTPassResources.group0),E.dispatchWorkgroups(Math.ceil(Da.width/16),Math.ceil(Da.height/16)),E.end(),o.queue.submit([w.finish()])}setupUI(o){const u=o.add(this.settings,"outputTexture",{Scene:3,"Transmittance LUT":1,"Multiscatter LUT":2,"Skyview LUT":0,"GBuffer Color":4,"GBuffer Normal":5}).name("Render Output").listen();o.add(this.settings,"renderScale",ba).name("Render Resolution Scale").decimals(1).onFinishChange(w=>{this.handleResize(this.rawSize.width,this.rawSize.height)}).listen(),o.add(this.uiReadonly,"averageFPS").decimals(1).disable().name("Average FPS").listen(),o.add(this.settings.orbit,"timeHours").min(0).max(24).name("Time in Hours").listen(),o.add(this.settings.orbit,"timeSpeedupFactor").min(1).max(5e4).step(1).name("Time Multiplier"),o.add(this.settings.orbit,"paused").name("Pause Sun"),o.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?18+.5:6-.5}},"fn").name("Skip to Sunrise"),o.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?6+.5:18-.5}},"fn").name("Skip to Sunset"),o.add(this.settings.orbit,"reversed").name("Reverse Sun"),o.add(this.settings.orbit,"sunsetAzimuthRadians").name("Sun Azimuth").min(0).max(2*Math.PI),o.add(this.settings.orbit,"inclinationRadians").name("Sun Inclination").min(0).max(Math.PI);const y=o.addFolder("Output Transform").close();this.fullscreenQuadPassResources.uboDataByOutputTexture.has(this.settings.outputTexture)||y.hide(),y.add(this.settings.currentOutputTextureSettings,"flip").name("Flip Image").listen(),y.add({gain:0},"gain").name("RGB").min(0).max(100).onChange(w=>{this.settings.currentOutputTextureSettings.color_gain.r=w,this.settings.currentOutputTextureSettings.color_gain.g=w,this.settings.currentOutputTextureSettings.color_gain.b=w}),y.add(this.settings.currentOutputTextureSettings.color_gain,"r").name("R").min(0).max(100).listen(),y.add(this.settings.currentOutputTextureSettings.color_gain,"g").name("G").min(0).max(100).listen(),y.add(this.settings.currentOutputTextureSettings.color_gain,"b").name("B").min(0).max(100).listen(),u.onChange(w=>{if(this.fullscreenQuadPassResources.uboDataByOutputTexture.has(w)){if(this.settings.currentOutputTextureSettings.flip=!1,this.settings.currentOutputTextureSettings.color_gain.r=1,this.settings.currentOutputTextureSettings.color_gain.g=1,this.settings.currentOutputTextureSettings.color_gain.b=1,this.settings.outputTextureSettings.has(w)){const E=this.settings.outputTextureSettings.get(w);this.settings.currentOutputTextureSettings.flip=E.flip,this.settings.currentOutputTextureSettings.color_gain.r=E.color_gain.r,this.settings.currentOutputTextureSettings.color_gain.g=E.color_gain.g,this.settings.currentOutputTextureSettings.color_gain.b=E.color_gain.b}y.show()}else y.hide()});const _=o.addFolder("Performance").close();this.frametimeAverages.forEach((w,E)=>{this.uiReadonly.frametimeControllers.set(E,_.add({value:0},"value").name(`${Bs[E]} (ms)`).decimals(6).disable())})}updateOrbit(o){const u=this.settings.orbit;this.settings.orbit.paused||(u.timeHours+=(u.reversed?-1:1)*u.timeSpeedupFactor*o/36e5,u.timeHours=u.timeHours-Math.floor(u.timeHours/24)*24);const y=2*Math.PI/24,_=(12-u.timeHours)*y,w=Xn.create(-Math.sin(u.sunsetAzimuthRadians),0,Math.cos(u.sunsetAzimuthRadians)),E=Xn.create(Math.cos(u.sunsetAzimuthRadians)*Math.cos(u.inclinationRadians),Math.sin(u.inclinationRadians),Math.sin(u.sunsetAzimuthRadians)*Math.cos(u.inclinationRadians)),z=Xn.add(Xn.scale(w,Math.sin(_)),Xn.scale(E,Math.cos(_)));Xn.scale(z,-1,this.celestialLightUBO.data.light.forward),this.celestialLightUBO.writeToGPU(this.device)}updateFPSValues(o){var u,y,_,w;o>.01&&((u=this.frametimeAverages.get(0))==null||u.push(o),this.uiReadonly.averageFPS=1e3/(((y=this.frametimeAverages.get(0))==null?void 0:y.average)??1e3),(w=this.uiReadonly.frametimeControllers.get(0))==null||w.setValue(((_=this.frametimeAverages.get(0))==null?void 0:_.average)??-1))}updateCamera(o){const u=60*Math.PI/180,w=ln.perspective(u,o,.1,1e3),E=[0,10,0],z=ln.lookAt(E,[0,20,100],[0,1,0]);Object.assign(this.cameraUBO.data,{inv_proj:ln.inverse(w),inv_view:ln.inverse(z),position:gt.create(...E)}),this.cameraUBO.writeToGPU(this.device)}updateTime(o){this.timeUBO.data.time_seconds+=o/1e3,this.timeUBO.data.time_seconds>400&&(this.timeUBO.data.time_seconds=0),this.timeUBO.writeToGPU(this.device)}draw(o,u,y,_){if(this.dummyFrameCounter>0){this.dummyFrameCounter-=1;return}const w=o.createView();if(this.updateFPSValues(_),this.probationFrameCounter>49){this.probationFrameCounter-=1,this.probationFrameCounter<50&&(console.log(`Average FPS without load is ${this.uiReadonly.averageFPS}`),this.targetFPS=this.uiReadonly.averageFPS);return}if(this.probationFrameCounter>0&&(this.probationFrameCounter-=1,this.probationFrameCounter<1)){console.log(`Average FPS with load is ${this.uiReadonly.averageFPS}`);const K=this.uiReadonly.averageFPS/this.targetFPS;this.settings.renderScale=ba[0],ba.forEach(J=>{Math.abs(J-K)<Math.abs(this.settings.renderScale-K)&&(this.settings.renderScale=J)}),this.handleResize(this.rawSize.width,this.rawSize.height)}this.updateCamera(u),this.updateTime(_),this.updateOrbit(_);const E={r:0,g:0,b:0,a:1},z=this.device.createCommandEncoder({label:"Main"});let P=0;const L=new Map;L.set(2,P);const V=z.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:P++,endOfPassWriteIndex:P++}:void 0,label:"Heightmap"});V.setPipeline(this.heightmapPassResources.pipeline),V.setBindGroup(0,this.gbuffer.writeGroup),V.setBindGroup(1,this.heightmapPassResources.group1),V.dispatchWorkgroups(Math.ceil(this.gbuffer.colorWithDepthInAlpha.width/16),Math.ceil(this.gbuffer.colorWithDepthInAlpha.height/16)),V.end(),L.set(1,P);const Z=z.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:P++,endOfPassWriteIndex:P++}:void 0,label:"Skyview LUT"});Z.setPipeline(this.skyviewLUTPassResources.pipeline),Z.setBindGroup(0,this.skyviewLUTPassResources.group0),Z.setBindGroup(1,this.skyviewLUTPassResources.group1),Z.dispatchWorkgroups(Math.ceil(Oa.width/16),Math.ceil(Oa.height/31)),Z.end(),L.set(3,P);const $=z.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:P++,endOfPassWriteIndex:P++}:void 0,label:"Atmosphere Camera"});$.setPipeline(this.atmosphereCameraPassResources.pipeline),$.setBindGroup(0,this.atmosphereCameraPassResources.group0),$.setBindGroup(1,this.atmosphereCameraPassResources.group1),$.setBindGroup(2,this.gbuffer.readGroup),$.dispatchWorkgroups(Math.ceil(this.atmosphereCameraPassResources.outputColor.width/16),Math.ceil(this.atmosphereCameraPassResources.outputColor.height/16)),$.end(),L.set(4,P);const te=z.beginRenderPass({colorAttachments:[{clearValue:E,loadOp:"clear",storeOp:"store",view:w}],timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:P++,endOfPassWriteIndex:P++}:void 0,label:"Fullscreen Pass"});if(this.fullscreenQuadPassResources.uboDataByOutputTexture.has(this.settings.outputTexture)){const K=this.settings.currentOutputTextureSettings,J=this.fullscreenQuadPassResources.uboDataByOutputTexture.get(this.settings.outputTexture);J.color_gain=gt.create(K.color_gain.r,K.color_gain.g,K.color_gain.b,1),J.vertex_scale=gt.create(1,K.flip?-1:1,1,1)}te.setPipeline(this.fullscreenQuadPassResources.pipeline),te.setIndexBuffer(this.fullscreenQuadIndexBuffer,"uint32",0,this.fullscreenQuadIndexBuffer.size),te.setBindGroup(0,this.fullscreenQuadPassResources.group0ByOutputTexture.get(this.settings.outputTexture));const X=this.fullscreenQuadPassResources.uboDataByOutputTexture.get(this.settings.outputTexture);X?this.fullscreenQuadPassResources.ubo.data=X:this.fullscreenQuadPassResources.ubo.data={color_gain:gt.create(1,1,1,1),vertex_scale:gt.create(1,1,1,1)},this.fullscreenQuadPassResources.ubo.writeToGPU(this.device),te.setBindGroup(1,this.fullscreenQuadPassResources.group1),this.probationFrameCounter<1&&te.drawIndexed(6,1,0,0,0),te.end(),this.frametimeQuery!=null&&!this.frametimeQuery.mappingLock&&(z.resolveQuerySet(this.frametimeQuery.querySet,0,2*L.size,this.frametimeQuery.writeBuffer,0),z.copyBufferToBuffer(this.frametimeQuery.writeBuffer,0,this.frametimeQuery.readBuffer,0,this.frametimeQuery.readBuffer.size)),this.device.queue.submit([z.finish()]),this.frametimeQuery!==void 0&&!this.frametimeQuery.mappingLock&&(this.frametimeQuery.mappingLock=!0,this.frametimeQuery.readBuffer.mapAsync(GPUMapMode.READ,0,this.frametimeQuery.readBuffer.size).then(()=>{const K=new BigInt64Array(this.frametimeQuery.readBuffer.getMappedRange(0,this.frametimeQuery.readBuffer.size));L.forEach((J,W)=>{var _e,ze,De;const le=Number(K.at(J+1)-K.at(J))/1e6;(_e=this.frametimeAverages.get(W))==null||_e.push(le),(De=this.uiReadonly.frametimeControllers.get(W))==null||De.setValue(((ze=this.frametimeAverages.get(W))==null?void 0:ze.average)??-1)}),this.frametimeQuery.readBuffer.unmap(),this.frametimeQuery.mappingLock=!1}).catch(K=>{console.error("Failed while retrieving frametime values from GPU:"),console.error(K)}))}handleResize(o,u){this.scaledSize={width:o*this.settings.renderScale,height:u*this.settings.renderScale},this.rawSize={width:o,height:u},this.gbuffer=sd(this.device,this.scaledSize,this.gbuffer),this.fullscreenQuadPassResources.group0ByOutputTexture.set(4,this.device.createBindGroup({layout:this.fullscreenQuadPassResources.group0Layout,entries:[{binding:0,resource:this.gbuffer.colorWithDepthInAlphaView},{binding:1,resource:this.fullscreenQuadPassResources.group0Sampler}],label:"Fullscreen Quad Pass Bing Group 0 GBuffer Color Resized"})),this.fullscreenQuadPassResources.group0ByOutputTexture.set(5,this.device.createBindGroup({layout:this.fullscreenQuadPassResources.group0Layout,entries:[{binding:0,resource:this.gbuffer.normalView},{binding:1,resource:this.fullscreenQuadPassResources.group0Sampler}],label:"Fullscreen Quad Pass Bing Group 0 GBuffer Normal Resized"})),this.atmosphereCameraPassResources.outputColor=this.device.createTexture({format:Ga,size:this.scaledSize,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.atmosphereCameraPassResources.outputColorView=this.atmosphereCameraPassResources.outputColor.createView(),this.fullscreenQuadPassResources.group0ByOutputTexture.set(3,this.device.createBindGroup({layout:this.fullscreenQuadPassResources.group0Layout,entries:[{binding:0,resource:this.atmosphereCameraPassResources.outputColorView},{binding:1,resource:this.fullscreenQuadPassResources.group0Sampler}],label:"Fullscreen Quad Pass Bing Group 0 GBuffer Normal Resized"})),this.atmosphereCameraPassResources.group0=this.device.createBindGroup({layout:this.atmosphereCameraPassResources.group0Layout,entries:[{binding:0,resource:this.atmosphereCameraPassResources.outputColorView},{binding:1,resource:this.device.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:this.transmittanceLUTPassResources.view},{binding:3,resource:this.multiscatterLUTPassResources.view},{binding:4,resource:this.skyviewLUTPassResources.view}],label:"Atmosphere Camera Group 0"})}}const Nm=(i,o,u)=>new bm(i,o,u),$a={name:"Hello Cube",requiredFeatures:new Set,optionalFeatures:new Set,create:vm},Fm=new Map([["hello-cube",$a],["sky-sea",{name:"Sky and Sea",requiredFeatures:new Set(["float32-filterable"]),optionalFeatures:new Set(["timestamp-query"]),create:Nm}]]);async function Bm(i,o){if(console.log("Starting WebGPU"),!("gpu"in navigator))return Promise.reject(new Error("WebGPU is not available in this browser.",{cause:new Error("navigator.gpu is null")}));const u=navigator.gpu.requestAdapter().then(_=>_?Promise.resolve(_):Promise.reject(new Error("Requested WebGPU Adapter is not available."))).catch(_=>Promise.reject(new Error("Unable to get WebGPU Adapter",{cause:_}))),y=u.then(_=>{const w=Array.from(i.values()).filter(z=>_.features.has(z));if(w.length!=i.size){const z=`Required features unavailable: ${Array.from(i.values()).filter(P=>!_.features.has(P)).map(P=>`'${P}'`).join(",")}`;return Promise.reject(new Error("Unable to get WebGPU Device",{cause:z}))}const E=w.concat(...Array.from(o.values()).filter(z=>_.features.has(z)));return console.log(`Enabling features: '${E.join("', '")}'`),_.requestDevice({requiredFeatures:E}).catch(z=>Promise.reject(new Error("Unable to get WebGPU Device",{cause:z})))});return Promise.all([u,y]).then(_=>{const[w,E]=_;return{adapter:w,device:E}})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class yn{constructor(o,u,y,_,w="div"){this.parent=o,this.object=u,this.property=y,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(w),this.domElement.classList.add("controller"),this.domElement.classList.add(_),this.$name=document.createElement("div"),this.$name.classList.add("name"),yn.nextNameID=yn.nextNameID||0,this.$name.id=`lil-gui-name-${++yn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",E=>E.stopPropagation()),this.domElement.addEventListener("keyup",E=>E.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(y)}name(o){return this._name=o,this.$name.textContent=o,this}onChange(o){return this._onChange=o,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(o){return this._onFinishChange=o,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(o=!0){return this.disable(!o)}disable(o=!0){return o===this._disabled?this:(this._disabled=o,this.domElement.classList.toggle("disabled",o),this.$disable.toggleAttribute("disabled",o),this)}show(o=!0){return this._hidden=!o,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(o){const u=this.parent.add(this.object,this.property,o);return u.name(this._name),this.destroy(),u}min(o){return this}max(o){return this}step(o){return this}decimals(o){return this}listen(o=!0){return this._listening=o,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const o=this.save();o!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=o}getValue(){return this.object[this.property]}setValue(o){return this.getValue()!==o&&(this.object[this.property]=o,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(o){return this.setValue(o),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Hm extends yn{constructor(o,u,y){super(o,u,y,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Va(i){let o,u;return(o=i.match(/(#|0x)?([a-f0-9]{6})/i))?u=o[2]:(o=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?u=parseInt(o[1]).toString(16).padStart(2,0)+parseInt(o[2]).toString(16).padStart(2,0)+parseInt(o[3]).toString(16).padStart(2,0):(o=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(u=o[1]+o[1]+o[2]+o[2]+o[3]+o[3]),u?"#"+u:!1}const Gm={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Va,toHexString:Va},xi={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},$m={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,o,u=1){const y=xi.fromHexString(i);o[0]=(y>>16&255)/255*u,o[1]=(y>>8&255)/255*u,o[2]=(y&255)/255*u},toHexString([i,o,u],y=1){y=255/y;const _=i*y<<16^o*y<<8^u*y<<0;return xi.toHexString(_)}},Vm={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,o,u=1){const y=xi.fromHexString(i);o.r=(y>>16&255)/255*u,o.g=(y>>8&255)/255*u,o.b=(y&255)/255*u},toHexString({r:i,g:o,b:u},y=1){y=255/y;const _=i*y<<16^o*y<<8^u*y<<0;return xi.toHexString(_)}},qm=[Gm,xi,$m,Vm];function jm(i){return qm.find(o=>o.match(i))}class Wm extends yn{constructor(o,u,y,_){super(o,u,y,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=jm(this.initialValue),this._rgbScale=_,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const w=Va(this.$text.value);w&&this._setValueFromHexString(w)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(o){if(this._format.isPrimitive){const u=this._format.fromHexString(o);this.setValue(u)}else this._format.fromHexString(o,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(o){return this._setValueFromHexString(o),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Na extends yn{constructor(o,u,y){super(o,u,y,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",_=>{_.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Zm extends yn{constructor(o,u,y,_,w,E){super(o,u,y,"number"),this._initInput(),this.min(_),this.max(w);const z=E!==void 0;this.step(z?E:this._getImplicitStep(),z),this.updateDisplay()}decimals(o){return this._decimals=o,this.updateDisplay(),this}min(o){return this._min=o,this._onUpdateMinMax(),this}max(o){return this._max=o,this._onUpdateMinMax(),this}step(o,u=!0){return this._step=o,this._stepExplicit=u,this}updateDisplay(){const o=this.getValue();if(this._hasSlider){let u=(o-this._min)/(this._max-this._min);u=Math.max(0,Math.min(u,1)),this.$fill.style.width=u*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?o:o.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const u=()=>{let Q=parseFloat(this.$input.value);isNaN(Q)||(this._stepExplicit&&(Q=this._snap(Q)),this.setValue(this._clamp(Q)))},y=Q=>{const le=parseFloat(this.$input.value);isNaN(le)||(this._snapClampSetValue(le+Q),this.$input.value=this.getValue())},_=Q=>{Q.key==="Enter"&&this.$input.blur(),Q.code==="ArrowUp"&&(Q.preventDefault(),y(this._step*this._arrowKeyMultiplier(Q))),Q.code==="ArrowDown"&&(Q.preventDefault(),y(this._step*this._arrowKeyMultiplier(Q)*-1))},w=Q=>{this._inputFocused&&(Q.preventDefault(),y(this._step*this._normalizeMouseWheel(Q)))};let E=!1,z,P,L,V,Z;const $=5,te=Q=>{z=Q.clientX,P=L=Q.clientY,E=!0,V=this.getValue(),Z=0,window.addEventListener("mousemove",X),window.addEventListener("mouseup",K)},X=Q=>{if(E){const le=Q.clientX-z,_e=Q.clientY-P;Math.abs(_e)>$?(Q.preventDefault(),this.$input.blur(),E=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(le)>$&&K()}if(!E){const le=Q.clientY-L;Z-=le*this._step*this._arrowKeyMultiplier(Q),V+Z>this._max?Z=this._max-V:V+Z<this._min&&(Z=this._min-V),this._snapClampSetValue(V+Z)}L=Q.clientY},K=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",K)},J=()=>{this._inputFocused=!0},W=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",u),this.$input.addEventListener("keydown",_),this.$input.addEventListener("wheel",w,{passive:!1}),this.$input.addEventListener("mousedown",te),this.$input.addEventListener("focus",J),this.$input.addEventListener("blur",W)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const o=(W,Q,le,_e,ze)=>(W-Q)/(le-Q)*(ze-_e)+_e,u=W=>{const Q=this.$slider.getBoundingClientRect();let le=o(W,Q.left,Q.right,this._min,this._max);this._snapClampSetValue(le)},y=W=>{this._setDraggingStyle(!0),u(W.clientX),window.addEventListener("mousemove",_),window.addEventListener("mouseup",w)},_=W=>{u(W.clientX)},w=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",w)};let E=!1,z,P;const L=W=>{W.preventDefault(),this._setDraggingStyle(!0),u(W.touches[0].clientX),E=!1},V=W=>{W.touches.length>1||(this._hasScrollBar?(z=W.touches[0].clientX,P=W.touches[0].clientY,E=!0):L(W),window.addEventListener("touchmove",Z,{passive:!1}),window.addEventListener("touchend",$))},Z=W=>{if(E){const Q=W.touches[0].clientX-z,le=W.touches[0].clientY-P;Math.abs(Q)>Math.abs(le)?L(W):(window.removeEventListener("touchmove",Z),window.removeEventListener("touchend",$))}else W.preventDefault(),u(W.touches[0].clientX)},$=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",Z),window.removeEventListener("touchend",$)},te=this._callOnFinishChange.bind(this),X=400;let K;const J=W=>{if(Math.abs(W.deltaX)<Math.abs(W.deltaY)&&this._hasScrollBar)return;W.preventDefault();const le=this._normalizeMouseWheel(W)*this._step;this._snapClampSetValue(this.getValue()+le),this.$input.value=this.getValue(),clearTimeout(K),K=setTimeout(te,X)};this.$slider.addEventListener("mousedown",y),this.$slider.addEventListener("touchstart",V,{passive:!1}),this.$slider.addEventListener("wheel",J,{passive:!1})}_setDraggingStyle(o,u="horizontal"){this.$slider&&this.$slider.classList.toggle("active",o),document.body.classList.toggle("lil-gui-dragging",o),document.body.classList.toggle(`lil-gui-${u}`,o)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(o){let{deltaX:u,deltaY:y}=o;return Math.floor(o.deltaY)!==o.deltaY&&o.wheelDelta&&(u=0,y=-o.wheelDelta/120,y*=this._stepExplicit?1:10),u+-y}_arrowKeyMultiplier(o){let u=this._stepExplicit?1:10;return o.shiftKey?u*=10:o.altKey&&(u/=10),u}_snap(o){let u=0;return this._hasMin?u=this._min:this._hasMax&&(u=this._max),o-=u,o=Math.round(o/this._step)*this._step,o+=u,o=parseFloat(o.toPrecision(15)),o}_clamp(o){return o<this._min&&(o=this._min),o>this._max&&(o=this._max),o}_snapClampSetValue(o){this.setValue(this._clamp(this._snap(o)))}get _hasScrollBar(){const o=this.parent.root.$children;return o.scrollHeight>o.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Qm extends yn{constructor(o,u,y,_){super(o,u,y,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(_)}options(o){return this._values=Array.isArray(o)?o:Object.values(o),this._names=Array.isArray(o)?o:Object.keys(o),this.$select.replaceChildren(),this._names.forEach(u=>{const y=document.createElement("option");y.textContent=u,this.$select.appendChild(y)}),this.updateDisplay(),this}updateDisplay(){const o=this.getValue(),u=this._values.indexOf(o);return this.$select.selectedIndex=u,this.$display.textContent=u===-1?o:this._names[u],this}}class Ym extends yn{constructor(o,u,y){super(o,u,y,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",_=>{_.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Km=`.lil-gui {
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
}`;function Xm(i){const o=document.createElement("style");o.innerHTML=i;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(o,u):document.head.appendChild(o)}let ad=!1;class tl{constructor({parent:o,autoPlace:u=o===void 0,container:y,width:_,title:w="Controls",closeFolders:E=!1,injectStyles:z=!0,touchStyles:P=!0}={}){if(this.parent=o,this.root=o?o.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(w),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),P&&this.domElement.classList.add("allow-touch-styles"),!ad&&z&&(Xm(Km),ad=!0),y?y.appendChild(this.domElement):u&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),_&&this.domElement.style.setProperty("--width",_+"px"),this._closeFolders=E}add(o,u,y,_,w){if(Object(y)===y)return new Qm(this,o,u,y);const E=o[u];switch(typeof E){case"number":return new Zm(this,o,u,y,_,w);case"boolean":return new Hm(this,o,u);case"string":return new Ym(this,o,u);case"function":return new Na(this,o,u)}console.error(`gui.add failed
	property:`,u,`
	object:`,o,`
	value:`,E)}addColor(o,u,y=1){return new Wm(this,o,u,y)}addFolder(o){const u=new tl({parent:this,title:o});return this.root._closeFolders&&u.close(),u}load(o,u=!0){return o.controllers&&this.controllers.forEach(y=>{y instanceof Na||y._name in o.controllers&&y.load(o.controllers[y._name])}),u&&o.folders&&this.folders.forEach(y=>{y._title in o.folders&&y.load(o.folders[y._title])}),this}save(o=!0){const u={controllers:{},folders:{}};return this.controllers.forEach(y=>{if(!(y instanceof Na)){if(y._name in u.controllers)throw new Error(`Cannot save GUI with duplicate property "${y._name}"`);u.controllers[y._name]=y.save()}}),o&&this.folders.forEach(y=>{if(y._title in u.folders)throw new Error(`Cannot save GUI with duplicate folder "${y._title}"`);u.folders[y._title]=y.save()}),u}open(o=!0){return this._setClosed(!o),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(o){this._closed!==o&&(this._closed=o,this._callOnOpenClose(this))}show(o=!0){return this._hidden=!o,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(o=!0){return this._setClosed(!o),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const u=this.$children.clientHeight;this.$children.style.height=u+"px",this.domElement.classList.add("transition");const y=w=>{w.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",y))};this.$children.addEventListener("transitionend",y);const _=o?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!o),requestAnimationFrame(()=>{this.$children.style.height=_+"px"})}),this}title(o){return this._title=o,this.$title.textContent=o,this}reset(o=!0){return(o?this.controllersRecursive():this.controllers).forEach(y=>y.reset()),this}onChange(o){return this._onChange=o,this}_callOnChange(o){this.parent&&this.parent._callOnChange(o),this._onChange!==void 0&&this._onChange.call(this,{object:o.object,property:o.property,value:o.getValue(),controller:o})}onFinishChange(o){return this._onFinishChange=o,this}_callOnFinishChange(o){this.parent&&this.parent._callOnFinishChange(o),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:o.object,property:o.property,value:o.getValue(),controller:o})}onOpenClose(o){return this._onOpenClose=o,this}_callOnOpenClose(o){this.parent&&this.parent._callOnOpenClose(o),this._onOpenClose!==void 0&&this._onOpenClose.call(this,o)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(o=>o.destroy())}controllersRecursive(){let o=Array.from(this.controllers);return this.folders.forEach(u=>{o=o.concat(u.controllersRecursive())}),o}foldersRecursive(){let o=Array.from(this.folders);return this.folders.forEach(u=>{o=o.concat(u.foldersRecursive())}),o}}const Jm=function({app:o}){const u=q.useRef(),y=q.useRef(null),_=q.useRef(null),w=q.useRef(),E=q.useRef(),z=q.useCallback(()=>{var V;const L=y.current;if(L){const Z=window.devicePixelRatio;L.width=L.offsetWidth*Z,L.height=L.offsetHeight*Z,(V=o.handleResize)==null||V.call(o,L.width,L.height)}},[o]);q.useEffect(()=>(z(),window.addEventListener("resize",z),()=>{window.removeEventListener("resize",z)}),[z]);const P=q.useCallback(L=>{var Z;const V=(Z=y.current)==null?void 0:Z.getContext("webgpu");if(V){const $=L-(E.current?E.current:0);E.current=L;const te=V.getCurrentTexture();o.draw(te,y.current.width/y.current.height,L,$),o.quit||(u.current=requestAnimationFrame(P))}},[o]);return q.useEffect(()=>{var V,Z;const L=(V=y.current)==null?void 0:V.getContext("webgpu");if(w.current&&((Z=w.current)==null||Z.destroy()),o.setupUI&&(w.current=new tl({container:_.current}),o.setupUI(w.current)),!L){console.error("'webgpu' canvas context not found, cannot animate.");return}return L.configure({device:o.device,format:o.presentFormat}),u.current=requestAnimationFrame(P),()=>{u.current&&cancelAnimationFrame(u.current)}},[P,o]),ye.jsxs("div",{style:{display:"flex",color:"hsl(204, 50%, 95%)",position:"relative",width:"100%",height:"100%"},children:[ye.jsx("div",{style:{flex:1},children:ye.jsx("canvas",{ref:y,style:{width:"100%",height:"100%"}})}),ye.jsx("div",{style:{flex:0,position:"absolute",right:0},ref:_})]})},eg=q.memo(function(){const[o,u]=q.useState(),[y,_]=q.useState(""),[w,E]=q.useState(!1),[z,P]=Wp(),L=q.useCallback(()=>{const X=z.get("sample");if(!X)return $a;const K=Fm.get(X);return K||$a},[z]),V=q.useCallback(()=>{o&&(o.quit=!0)},[o]);q.useEffect(()=>{u(void 0)},[z,u]),q.useEffect(()=>{if(o)return;E(!1);const X=L();Bm(X.requiredFeatures,X.optionalFeatures).then(({adapter:K,device:J})=>{o?(console.warn("Device found, but app was already created. This is due to either a duplicate component rerender, or the sample changing without a full page refresh. Overriding the original."),V()):console.log("Got WebGPU device, initializing sample app."),J.lost.then(Q=>{console.log(`WebGPU device lost - ("${Q.reason}"):
 ${Q.message}`)},Q=>{throw new Error("WebGPU device lost rejected",{cause:Q})}),J.onuncapturederror=Q=>{console.error(`WebGPU device uncaptured error: ${Q.error.message}`),_(Q.error.message),V()};const W=navigator.gpu.getPreferredCanvasFormat();u(X.create(J,W,performance.now())),console.log("Finished initializing app.")},K=>{var J,W;console.error(K),_(`${K.message}
${(W=(J=K.cause)==null?void 0:J.toString)==null?void 0:W.call(J)}`)}).finally(()=>{E(!0)})},[o,V,L]);const Z={backgroundColor:"rgb(50, 99, 121)",margin:0,padding:"2em",flexGrow:"1",color:"hsl(204, 50%, 95%)",whiteSpace:"pre-line",fontSize:"1.5em"},$=ye.jsxs("p",{style:Z,children:[`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.

        `,y]}),te=ye.jsx("p",{style:Z,children:"Loading..."});return ye.jsx(ye.Fragment,{children:w?ye.jsx(ye.Fragment,{children:o?ye.jsx(Jm,{app:o}):$}):ye.jsx(ye.Fragment,{children:te})})}),ld=new Map([["","Estelle Booher"],["webgpu-samples","WebGPU Samples"]]),ud=q.memo(function({link:o,label:u}){const y=Ri(),_=()=>{var w;(w=y(o))==null||w.catch(E=>{throw new Error("Unable to navigate",{cause:E})})};return ye.jsx("button",{className:"nav-button",onClick:_,type:"button",children:u})}),tg=q.memo(function(){const o=wn(),u=[ye.jsx(q.Fragment,{children:ye.jsx(ud,{link:"/",label:ld.get("")})},"root")];if(o.pathname!="/"){const y=o.pathname.substring(1).split("/");let _="/";u.push(...y.map((w,E)=>{const z=ld.get(w),P=E>0?"/":"";return _=_.concat(`${P}${w}`),ye.jsxs(q.Fragment,{children:[" > ",ye.jsx(ud,{link:_,label:z||w})]},_)}))}return ye.jsx("header",{className:"website-header",children:u})}),ng=document.getElementById("root");Eh.createRoot(ng).render(ye.jsx(q.StrictMode,{children:ye.jsx(Gp,{children:ye.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[ye.jsx("div",{style:{flex:"0 1 auto"},children:ye.jsx(tg,{})}),ye.jsxs(vp,{children:[ye.jsx(bs,{index:!0,element:ye.jsx(tm,{})}),ye.jsx(bs,{path:"webgpu-samples",element:ye.jsx("div",{style:{flex:1,overflow:"hidden"},children:ye.jsx(eg,{})})}),ye.jsx(bs,{path:"*",element:ye.jsx(mp,{to:"/",replace:!0})})]})]})})}));
