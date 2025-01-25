var Sh=Object.defineProperty;var Th=(o,i,u)=>i in o?Sh(o,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[i]=u;var ie=(o,i,u)=>Th(o,typeof i!="symbol"?i+"":i,u);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))g(_);new MutationObserver(_=>{for(const T of _)if(T.type==="childList")for(const M of T.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&g(M)}).observe(document,{childList:!0,subtree:!0});function u(_){const T={};return _.integrity&&(T.integrity=_.integrity),_.referrerPolicy&&(T.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?T.credentials="include":_.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function g(_){if(_.ep)return;_.ep=!0;const T=u(_);fetch(_.href,T)}})();var La={exports:{}},_i={},Ua={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc;function xh(){if(bc)return Ge;bc=1;var o=Symbol.for("react.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),M=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),Q=Symbol.iterator;function $(O){return O===null||typeof O!="object"?null:(O=Q&&O[Q]||O["@@iterator"],typeof O=="function"?O:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,K={};function J(O,ee,Me){this.props=O,this.context=ee,this.refs=K,this.updater=Me||te}J.prototype.isReactComponent={},J.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},J.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function F(){}F.prototype=J.prototype;function q(O,ee,Me){this.props=O,this.context=ee,this.refs=K,this.updater=Me||te}var ue=q.prototype=new F;ue.constructor=q,X(ue,J.prototype),ue.isPureReactComponent=!0;var de=Array.isArray,Pe=Object.prototype.hasOwnProperty,Ie={current:null},Ne={key:!0,ref:!0,__self:!0,__source:!0};function Be(O,ee,Me){var Te,Ce={},Ue=null,f=null;if(ee!=null)for(Te in ee.ref!==void 0&&(f=ee.ref),ee.key!==void 0&&(Ue=""+ee.key),ee)Pe.call(ee,Te)&&!Ne.hasOwnProperty(Te)&&(Ce[Te]=ee[Te]);var R=arguments.length-2;if(R===1)Ce.children=Me;else if(1<R){for(var d=Array(R),p=0;p<R;p++)d[p]=arguments[p+2];Ce.children=d}if(O&&O.defaultProps)for(Te in R=O.defaultProps,R)Ce[Te]===void 0&&(Ce[Te]=R[Te]);return{$$typeof:o,type:O,key:Ue,ref:f,props:Ce,_owner:Ie.current}}function De(O,ee){return{$$typeof:o,type:O.type,key:ee,ref:O.ref,props:O.props,_owner:O._owner}}function ke(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function je(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Me){return ee[Me]})}var Ee=/\/+/g;function ze(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?je(""+O.key):ee.toString(36)}function Se(O,ee,Me,Te,Ce){var Ue=typeof O;(Ue==="undefined"||Ue==="boolean")&&(O=null);var f=!1;if(O===null)f=!0;else switch(Ue){case"string":case"number":f=!0;break;case"object":switch(O.$$typeof){case o:case i:f=!0}}if(f)return f=O,Ce=Ce(f),O=Te===""?"."+ze(f,0):Te,de(Ce)?(Me="",O!=null&&(Me=O.replace(Ee,"$&/")+"/"),Se(Ce,ee,Me,"",function(p){return p})):Ce!=null&&(ke(Ce)&&(Ce=De(Ce,Me+(!Ce.key||f&&f.key===Ce.key?"":(""+Ce.key).replace(Ee,"$&/")+"/")+O)),ee.push(Ce)),1;if(f=0,Te=Te===""?".":Te+":",de(O))for(var R=0;R<O.length;R++){Ue=O[R];var d=Te+ze(Ue,R);f+=Se(Ue,ee,Me,d,Ce)}else if(d=$(O),typeof d=="function")for(O=d.call(O),R=0;!(Ue=O.next()).done;)Ue=Ue.value,d=Te+ze(Ue,R++),f+=Se(Ue,ee,Me,d,Ce);else if(Ue==="object")throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return f}function Ke(O,ee,Me){if(O==null)return O;var Te=[],Ce=0;return Se(O,Te,"","",function(Ue){return ee.call(Me,Ue,Ce++)}),Te}function Ve(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(Me){(O._status===0||O._status===-1)&&(O._status=1,O._result=Me)},function(Me){(O._status===0||O._status===-1)&&(O._status=2,O._result=Me)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var He={current:null},le={transition:null},_e={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:le,ReactCurrentOwner:Ie};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ge.Children={map:Ke,forEach:function(O,ee,Me){Ke(O,function(){ee.apply(this,arguments)},Me)},count:function(O){var ee=0;return Ke(O,function(){ee++}),ee},toArray:function(O){return Ke(O,function(ee){return ee})||[]},only:function(O){if(!ke(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ge.Component=J,Ge.Fragment=u,Ge.Profiler=_,Ge.PureComponent=q,Ge.StrictMode=g,Ge.Suspense=A,Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,Ge.act=oe,Ge.cloneElement=function(O,ee,Me){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Te=X({},O.props),Ce=O.key,Ue=O.ref,f=O._owner;if(ee!=null){if(ee.ref!==void 0&&(Ue=ee.ref,f=Ie.current),ee.key!==void 0&&(Ce=""+ee.key),O.type&&O.type.defaultProps)var R=O.type.defaultProps;for(d in ee)Pe.call(ee,d)&&!Ne.hasOwnProperty(d)&&(Te[d]=ee[d]===void 0&&R!==void 0?R[d]:ee[d])}var d=arguments.length-2;if(d===1)Te.children=Me;else if(1<d){R=Array(d);for(var p=0;p<d;p++)R[p]=arguments[p+2];Te.children=R}return{$$typeof:o,type:O.type,key:Ce,ref:Ue,props:Te,_owner:f}},Ge.createContext=function(O){return O={$$typeof:M,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:T,_context:O},O.Consumer=O},Ge.createElement=Be,Ge.createFactory=function(O){var ee=Be.bind(null,O);return ee.type=O,ee},Ge.createRef=function(){return{current:null}},Ge.forwardRef=function(O){return{$$typeof:L,render:O}},Ge.isValidElement=ke,Ge.lazy=function(O){return{$$typeof:W,_payload:{_status:-1,_result:O},_init:Ve}},Ge.memo=function(O,ee){return{$$typeof:z,type:O,compare:ee===void 0?null:ee}},Ge.startTransition=function(O){var ee=le.transition;le.transition={};try{O()}finally{le.transition=ee}},Ge.unstable_act=oe,Ge.useCallback=function(O,ee){return He.current.useCallback(O,ee)},Ge.useContext=function(O){return He.current.useContext(O)},Ge.useDebugValue=function(){},Ge.useDeferredValue=function(O){return He.current.useDeferredValue(O)},Ge.useEffect=function(O,ee){return He.current.useEffect(O,ee)},Ge.useId=function(){return He.current.useId()},Ge.useImperativeHandle=function(O,ee,Me){return He.current.useImperativeHandle(O,ee,Me)},Ge.useInsertionEffect=function(O,ee){return He.current.useInsertionEffect(O,ee)},Ge.useLayoutEffect=function(O,ee){return He.current.useLayoutEffect(O,ee)},Ge.useMemo=function(O,ee){return He.current.useMemo(O,ee)},Ge.useReducer=function(O,ee,Me){return He.current.useReducer(O,ee,Me)},Ge.useRef=function(O){return He.current.useRef(O)},Ge.useState=function(O){return He.current.useState(O)},Ge.useSyncExternalStore=function(O,ee,Me){return He.current.useSyncExternalStore(O,ee,Me)},Ge.useTransition=function(){return He.current.useTransition()},Ge.version="18.3.1",Ge}var Nc;function Qa(){return Nc||(Nc=1,Ua.exports=xh()),Ua.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc;function Rh(){if(Bc)return _i;Bc=1;var o=Qa(),i=Symbol.for("react.element"),u=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,_=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function M(L,A,z){var W,Q={},$=null,te=null;z!==void 0&&($=""+z),A.key!==void 0&&($=""+A.key),A.ref!==void 0&&(te=A.ref);for(W in A)g.call(A,W)&&!T.hasOwnProperty(W)&&(Q[W]=A[W]);if(L&&L.defaultProps)for(W in A=L.defaultProps,A)Q[W]===void 0&&(Q[W]=A[W]);return{$$typeof:i,type:L,key:$,ref:te,props:Q,_owner:_.current}}return _i.Fragment=u,_i.jsx=M,_i.jsxs=M,_i}var Fc;function Eh(){return Fc||(Fc=1,La.exports=Rh()),La.exports}var ve=Eh(),j=Qa(),Ds={},za={exports:{}},Gt={},Ca={exports:{}},ka={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc;function Mh(){return Gc||(Gc=1,function(o){function i(le,_e){var oe=le.length;le.push(_e);e:for(;0<oe;){var O=oe-1>>>1,ee=le[O];if(0<_(ee,_e))le[O]=_e,le[oe]=ee,oe=O;else break e}}function u(le){return le.length===0?null:le[0]}function g(le){if(le.length===0)return null;var _e=le[0],oe=le.pop();if(oe!==_e){le[0]=oe;e:for(var O=0,ee=le.length,Me=ee>>>1;O<Me;){var Te=2*(O+1)-1,Ce=le[Te],Ue=Te+1,f=le[Ue];if(0>_(Ce,oe))Ue<ee&&0>_(f,Ce)?(le[O]=f,le[Ue]=oe,O=Ue):(le[O]=Ce,le[Te]=oe,O=Te);else if(Ue<ee&&0>_(f,oe))le[O]=f,le[Ue]=oe,O=Ue;else break e}}return _e}function _(le,_e){var oe=le.sortIndex-_e.sortIndex;return oe!==0?oe:le.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var T=performance;o.unstable_now=function(){return T.now()}}else{var M=Date,L=M.now();o.unstable_now=function(){return M.now()-L}}var A=[],z=[],W=1,Q=null,$=3,te=!1,X=!1,K=!1,J=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ue(le){for(var _e=u(z);_e!==null;){if(_e.callback===null)g(z);else if(_e.startTime<=le)g(z),_e.sortIndex=_e.expirationTime,i(A,_e);else break;_e=u(z)}}function de(le){if(K=!1,ue(le),!X)if(u(A)!==null)X=!0,Ve(Pe);else{var _e=u(z);_e!==null&&He(de,_e.startTime-le)}}function Pe(le,_e){X=!1,K&&(K=!1,F(Be),Be=-1),te=!0;var oe=$;try{for(ue(_e),Q=u(A);Q!==null&&(!(Q.expirationTime>_e)||le&&!je());){var O=Q.callback;if(typeof O=="function"){Q.callback=null,$=Q.priorityLevel;var ee=O(Q.expirationTime<=_e);_e=o.unstable_now(),typeof ee=="function"?Q.callback=ee:Q===u(A)&&g(A),ue(_e)}else g(A);Q=u(A)}if(Q!==null)var Me=!0;else{var Te=u(z);Te!==null&&He(de,Te.startTime-_e),Me=!1}return Me}finally{Q=null,$=oe,te=!1}}var Ie=!1,Ne=null,Be=-1,De=5,ke=-1;function je(){return!(o.unstable_now()-ke<De)}function Ee(){if(Ne!==null){var le=o.unstable_now();ke=le;var _e=!0;try{_e=Ne(!0,le)}finally{_e?ze():(Ie=!1,Ne=null)}}else Ie=!1}var ze;if(typeof q=="function")ze=function(){q(Ee)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Ke=Se.port2;Se.port1.onmessage=Ee,ze=function(){Ke.postMessage(null)}}else ze=function(){J(Ee,0)};function Ve(le){Ne=le,Ie||(Ie=!0,ze())}function He(le,_e){Be=J(function(){le(o.unstable_now())},_e)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(le){le.callback=null},o.unstable_continueExecution=function(){X||te||(X=!0,Ve(Pe))},o.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):De=0<le?Math.floor(1e3/le):5},o.unstable_getCurrentPriorityLevel=function(){return $},o.unstable_getFirstCallbackNode=function(){return u(A)},o.unstable_next=function(le){switch($){case 1:case 2:case 3:var _e=3;break;default:_e=$}var oe=$;$=_e;try{return le()}finally{$=oe}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(le,_e){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var oe=$;$=le;try{return _e()}finally{$=oe}},o.unstable_scheduleCallback=function(le,_e,oe){var O=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,le){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=oe+ee,le={id:W++,callback:_e,priorityLevel:le,startTime:oe,expirationTime:ee,sortIndex:-1},oe>O?(le.sortIndex=oe,i(z,le),u(A)===null&&le===u(z)&&(K?(F(Be),Be=-1):K=!0,He(de,oe-O))):(le.sortIndex=ee,i(A,le),X||te||(X=!0,Ve(Pe))),le},o.unstable_shouldYield=je,o.unstable_wrapCallback=function(le){var _e=$;return function(){var oe=$;$=_e;try{return le.apply(this,arguments)}finally{$=oe}}}}(ka)),ka}var Hc;function Ph(){return Hc||(Hc=1,Ca.exports=Mh()),Ca.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc;function Ah(){if(Vc)return Gt;Vc=1;var o=Qa(),i=Ph();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g=new Set,_={};function T(e,t){M(e,t),M(e+"Capture",t)}function M(e,t){for(_[e]=t,e=0;e<t.length;e++)g.add(t[e])}var L=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),A=Object.prototype.hasOwnProperty,z=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W={},Q={};function $(e){return A.call(Q,e)?!0:A.call(W,e)?!1:z.test(e)?Q[e]=!0:(W[e]=!0,!1)}function te(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,t,n,r){if(t===null||typeof t>"u"||te(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function K(e,t,n,r,s,l,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=m}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new K(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var F=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(F,q);J[t]=new K(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(F,q);J[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(F,q);J[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function ue(e,t,n,r){var s=J.hasOwnProperty(t)?J[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X(t,n,s,r)&&(n=null),r||s===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var de=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pe=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),Be=Symbol.for("react.strict_mode"),De=Symbol.for("react.profiler"),ke=Symbol.for("react.provider"),je=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),Ke=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),le=Symbol.iterator;function _e(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,O;function ee(e){if(O===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return`
`+O+e}var Me=!1;function Te(e,t){if(!e||Me)return"";Me=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(V){var r=V}Reflect.construct(e,[],t)}else{try{t.call()}catch(V){r=V}e.call(t.prototype)}else{try{throw Error()}catch(V){r=V}e()}}catch(V){if(V&&r&&typeof V.stack=="string"){for(var s=V.stack.split(`
`),l=r.stack.split(`
`),m=s.length-1,E=l.length-1;1<=m&&0<=E&&s[m]!==l[E];)E--;for(;1<=m&&0<=E;m--,E--)if(s[m]!==l[E]){if(m!==1||E!==1)do if(m--,E--,0>E||s[m]!==l[E]){var U=`
`+s[m].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=m&&0<=E);break}}}finally{Me=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ee(e):""}function Ce(e){switch(e.tag){case 5:return ee(e.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return e=Te(e.type,!1),e;case 11:return e=Te(e.type.render,!1),e;case 1:return e=Te(e.type,!0),e;default:return""}}function Ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case Ie:return"Portal";case De:return"Profiler";case Be:return"StrictMode";case ze:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case je:return(e.displayName||"Context")+".Consumer";case ke:return(e._context.displayName||"Context")+".Provider";case Ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ke:return t=e.displayName||null,t!==null?t:Ue(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return Ue(e(t))}catch{}}return null}function f(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ue(t);case 8:return t===Be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function R(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p(e){var t=d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(m){r=""+m,l.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(m){r=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function x(e){e._valueTracker||(e._valueTracker=p(e))}function P(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function B(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function a(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function v(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=R(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function c(e,t){t=t.checked,t!=null&&ue(e,"checked",t,!1)}function h(e,t){c(e,t);var n=R(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?k(e,t.type,n):t.hasOwnProperty("defaultValue")&&k(e,t.type,R(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function w(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function k(e,t,n){(t!=="number"||B(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var G=Array.isArray;function y(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+R(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function S(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function C(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(G(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:R(n)}}function I(e,t){var n=R(t.value),r=R(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function H(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Z(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Y(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Z(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pe,Ae=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pe=pe||document.createElement("div"),pe.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(me).forEach(function(e){Oe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),me[t]=me[e]})});function Fe(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||me.hasOwnProperty(e)&&me[e]?(""+t).trim():t+"px"}function Ze(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Fe(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var lt=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(e,t){if(t){if(lt[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function ut(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function ht(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pt=null,rt=null,it=null;function yt(e){if(e=ii(e)){if(typeof pt!="function")throw Error(u(280));var t=e.stateNode;t&&(t=Xi(t),pt(e.stateNode,e.type,t))}}function _t(e){rt?it?it.push(e):it=[e]:rt=e}function wt(){if(rt){var e=rt,t=it;if(it=rt=null,yt(e),t)for(e=0;e<t.length;e++)yt(t[e])}}function St(e,t){return e(t)}function At(){}var Et=!1;function Lt(e,t,n){if(Et)return e(t,n);Et=!0;try{return St(e,t,n)}finally{Et=!1,(rt!==null||it!==null)&&(At(),wt())}}function un(e,t){var n=e.stateNode;if(n===null)return null;var r=Xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Cn=!1;if(L)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){Cn=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{Cn=!1}function hr(e,t,n,r,s,l,m,E,U){var V=Array.prototype.slice.call(arguments,3);try{t.apply(n,V)}catch(re){this.onError(re)}}var dn=!1,Sn=null,Tn=!1,pr=null,Pi={onError:function(e){dn=!0,Sn=e}};function Ai(e,t,n,r,s,l,m,E,U){dn=!1,Sn=null,hr.apply(Pi,arguments)}function Li(e,t,n,r,s,l,m,E,U){if(Ai.apply(this,arguments),dn){if(dn){var V=Sn;dn=!1,Sn=null}else throw Error(u(198));Tn||(Tn=!0,pr=V)}}function Je(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ol(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function al(e){if(Je(e)!==e)throw Error(u(188))}function zd(e){var t=e.alternate;if(!t){if(t=Je(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return al(s),e;if(l===r)return al(s),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=s,r=l;else{for(var m=!1,E=s.child;E;){if(E===n){m=!0,n=s,r=l;break}if(E===r){m=!0,r=s,n=l;break}E=E.sibling}if(!m){for(E=l.child;E;){if(E===n){m=!0,n=l,r=s;break}if(E===r){m=!0,r=l,n=s;break}E=E.sibling}if(!m)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function ll(e){return e=zd(e),e!==null?ul(e):null}function ul(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ul(e);if(t!==null)return t;e=e.sibling}return null}var cl=i.unstable_scheduleCallback,dl=i.unstable_cancelCallback,Cd=i.unstable_shouldYield,kd=i.unstable_requestPaint,ct=i.unstable_now,Id=i.unstable_getCurrentPriorityLevel,Zs=i.unstable_ImmediatePriority,fl=i.unstable_UserBlockingPriority,Ui=i.unstable_NormalPriority,Dd=i.unstable_LowPriority,hl=i.unstable_IdlePriority,zi=null,fn=null;function Od(e){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Bd,bd=Math.log,Nd=Math.LN2;function Bd(e){return e>>>=0,e===0?32:31-(bd(e)/Nd|0)|0}var Ci=64,ki=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,l=e.pingedLanes,m=n&268435455;if(m!==0){var E=m&~s;E!==0?r=Fr(E):(l&=m,l!==0&&(r=Fr(l)))}else m=n&~s,m!==0?r=Fr(m):l!==0&&(r=Fr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,l=t&-t,s>=l||s===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-en(t),s=1<<n,r|=e[n],t&=~s;return r}function Fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var m=31-en(l),E=1<<m,U=s[m];U===-1?(!(E&n)||E&r)&&(s[m]=Fd(E,t)):U<=t&&(e.expiredLanes|=E),l&=~E}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pl(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function Xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-en(t),e[t]=n}function Hd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-en(n),l=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~l}}function Ys(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-en(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var qe=0;function ml(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gl,Ks,vl,yl,_l,Js=!1,Di=[],kn=null,In=null,Dn=null,Hr=new Map,Vr=new Map,On=[],Vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wl(e,t){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function $r(e,t,n,r,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},t!==null&&(t=ii(t),t!==null&&Ks(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function $d(e,t,n,r,s){switch(t){case"focusin":return kn=$r(kn,e,t,n,r,s),!0;case"dragenter":return In=$r(In,e,t,n,r,s),!0;case"mouseover":return Dn=$r(Dn,e,t,n,r,s),!0;case"pointerover":var l=s.pointerId;return Hr.set(l,$r(Hr.get(l)||null,e,t,n,r,s)),!0;case"gotpointercapture":return l=s.pointerId,Vr.set(l,$r(Vr.get(l)||null,e,t,n,r,s)),!0}return!1}function Sl(e){var t=er(e.target);if(t!==null){var n=Je(t);if(n!==null){if(t=n.tag,t===13){if(t=ol(n),t!==null){e.blockedOn=t,_l(e.priority,function(){vl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=to(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ft=r,n.target.dispatchEvent(r),ft=null}else return t=ii(n),t!==null&&Ks(t),e.blockedOn=n,!1;t.shift()}return!0}function Tl(e,t,n){Oi(e)&&n.delete(t)}function Wd(){Js=!1,kn!==null&&Oi(kn)&&(kn=null),In!==null&&Oi(In)&&(In=null),Dn!==null&&Oi(Dn)&&(Dn=null),Hr.forEach(Tl),Vr.forEach(Tl)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Js||(Js=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Wd)))}function qr(e){function t(s){return Wr(s,e)}if(0<Di.length){Wr(Di[0],e);for(var n=1;n<Di.length;n++){var r=Di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kn!==null&&Wr(kn,e),In!==null&&Wr(In,e),Dn!==null&&Wr(Dn,e),Hr.forEach(t),Vr.forEach(t),n=0;n<On.length;n++)r=On[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)Sl(n),n.blockedOn===null&&On.shift()}var mr=de.ReactCurrentBatchConfig,bi=!0;function qd(e,t,n,r){var s=qe,l=mr.transition;mr.transition=null;try{qe=1,eo(e,t,n,r)}finally{qe=s,mr.transition=l}}function jd(e,t,n,r){var s=qe,l=mr.transition;mr.transition=null;try{qe=4,eo(e,t,n,r)}finally{qe=s,mr.transition=l}}function eo(e,t,n,r){if(bi){var s=to(e,t,n,r);if(s===null)_o(e,t,r,Ni,n),wl(e,r);else if($d(s,e,t,n,r))r.stopPropagation();else if(wl(e,r),t&4&&-1<Vd.indexOf(e)){for(;s!==null;){var l=ii(s);if(l!==null&&gl(l),l=to(e,t,n,r),l===null&&_o(e,t,r,Ni,n),l===s)break;s=l}s!==null&&r.stopPropagation()}else _o(e,t,r,null,n)}}var Ni=null;function to(e,t,n,r){if(Ni=null,e=ht(r),e=er(e),e!==null)if(t=Je(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ol(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ni=e,null}function xl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Id()){case Zs:return 1;case fl:return 4;case Ui:case Dd:return 16;case hl:return 536870912;default:return 16}default:return 16}}var bn=null,no=null,Bi=null;function Rl(){if(Bi)return Bi;var e,t=no,n=t.length,r,s="value"in bn?bn.value:bn.textContent,l=s.length;for(e=0;e<n&&t[e]===s[e];e++);var m=n-e;for(r=1;r<=m&&t[n-r]===s[l-r];r++);return Bi=s.slice(e,1<r?1-r:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gi(){return!0}function El(){return!1}function Ht(e){function t(n,r,s,l,m){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=m,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(n=e[E],this[E]=n?n(l):l[E]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Gi:El,this.isPropagationStopped=El,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=Ht(gr),jr=oe({},gr,{view:0,detail:0}),Zd=Ht(jr),io,so,Zr,Hi=oe({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(io=e.screenX-Zr.screenX,so=e.screenY-Zr.screenY):so=io=0,Zr=e),io)},movementY:function(e){return"movementY"in e?e.movementY:so}}),Ml=Ht(Hi),Qd=oe({},Hi,{dataTransfer:0}),Xd=Ht(Qd),Yd=oe({},jr,{relatedTarget:0}),oo=Ht(Yd),Kd=oe({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jd=Ht(Kd),ef=oe({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tf=Ht(ef),nf=oe({},gr,{data:0}),Pl=Ht(nf),rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=of[e])?!!t[e]:!1}function ao(){return af}var lf=oe({},jr,{key:function(e){if(e.key){var t=rf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uf=Ht(lf),cf=oe({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Al=Ht(cf),df=oe({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),ff=Ht(df),hf=oe({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),pf=Ht(hf),mf=oe({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gf=Ht(mf),vf=[9,13,27,32],lo=L&&"CompositionEvent"in window,Qr=null;L&&"documentMode"in document&&(Qr=document.documentMode);var yf=L&&"TextEvent"in window&&!Qr,Ll=L&&(!lo||Qr&&8<Qr&&11>=Qr),Ul=" ",zl=!1;function Cl(e,t){switch(e){case"keyup":return vf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function _f(e,t){switch(e){case"compositionend":return kl(t);case"keypress":return t.which!==32?null:(zl=!0,Ul);case"textInput":return e=t.data,e===Ul&&zl?null:e;default:return null}}function wf(e,t){if(vr)return e==="compositionend"||!lo&&Cl(e,t)?(e=Rl(),Bi=no=bn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ll&&t.locale!=="ko"?null:t.data;default:return null}}var Sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sf[e.type]:t==="textarea"}function Dl(e,t,n,r){_t(r),t=ji(t,"onChange"),0<t.length&&(n=new ro("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,Yr=null;function Tf(e){Jl(e,0)}function Vi(e){var t=Tr(e);if(P(t))return e}function xf(e,t){if(e==="change")return t}var Ol=!1;if(L){var uo;if(L){var co="oninput"in document;if(!co){var bl=document.createElement("div");bl.setAttribute("oninput","return;"),co=typeof bl.oninput=="function"}uo=co}else uo=!1;Ol=uo&&(!document.documentMode||9<document.documentMode)}function Nl(){Xr&&(Xr.detachEvent("onpropertychange",Bl),Yr=Xr=null)}function Bl(e){if(e.propertyName==="value"&&Vi(Yr)){var t=[];Dl(t,Yr,e,ht(e)),Lt(Tf,t)}}function Rf(e,t,n){e==="focusin"?(Nl(),Xr=t,Yr=n,Xr.attachEvent("onpropertychange",Bl)):e==="focusout"&&Nl()}function Ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(Yr)}function Mf(e,t){if(e==="click")return Vi(t)}function Pf(e,t){if(e==="input"||e==="change")return Vi(t)}function Af(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tn=typeof Object.is=="function"?Object.is:Af;function Kr(e,t){if(tn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!A.call(t,s)||!tn(e[s],t[s]))return!1}return!0}function Fl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gl(e,t){var n=Fl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fl(n)}}function Hl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vl(){for(var e=window,t=B();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=B(e.document)}return t}function fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lf(e){var t=Vl(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hl(n.ownerDocument.documentElement,n)){if(r!==null&&fo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!e.extend&&l>r&&(s=r,r=l,l=s),s=Gl(n,l);var m=Gl(n,r);s&&m&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uf=L&&"documentMode"in document&&11>=document.documentMode,yr=null,ho=null,Jr=null,po=!1;function $l(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;po||yr==null||yr!==B(r)||(r=yr,"selectionStart"in r&&fo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Kr(Jr,r)||(Jr=r,r=ji(ho,"onSelect"),0<r.length&&(t=new ro("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function $i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:$i("Animation","AnimationEnd"),animationiteration:$i("Animation","AnimationIteration"),animationstart:$i("Animation","AnimationStart"),transitionend:$i("Transition","TransitionEnd")},mo={},Wl={};L&&(Wl=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Wi(e){if(mo[e])return mo[e];if(!_r[e])return e;var t=_r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wl)return mo[e]=t[n];return e}var ql=Wi("animationend"),jl=Wi("animationiteration"),Zl=Wi("animationstart"),Ql=Wi("transitionend"),Xl=new Map,Yl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){Xl.set(e,t),T(t,[e])}for(var go=0;go<Yl.length;go++){var vo=Yl[go],zf=vo.toLowerCase(),Cf=vo[0].toUpperCase()+vo.slice(1);Nn(zf,"on"+Cf)}Nn(ql,"onAnimationEnd"),Nn(jl,"onAnimationIteration"),Nn(Zl,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(Ql,"onTransitionEnd"),M("onMouseEnter",["mouseout","mouseover"]),M("onMouseLeave",["mouseout","mouseover"]),M("onPointerEnter",["pointerout","pointerover"]),M("onPointerLeave",["pointerout","pointerover"]),T("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),T("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),T("onBeforeInput",["compositionend","keypress","textInput","paste"]),T("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function Kl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Li(r,t,void 0,e),e.currentTarget=null}function Jl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var m=r.length-1;0<=m;m--){var E=r[m],U=E.instance,V=E.currentTarget;if(E=E.listener,U!==l&&s.isPropagationStopped())break e;Kl(s,E,V),l=U}else for(m=0;m<r.length;m++){if(E=r[m],U=E.instance,V=E.currentTarget,E=E.listener,U!==l&&s.isPropagationStopped())break e;Kl(s,E,V),l=U}}}if(Tn)throw e=pr,Tn=!1,pr=null,e}function Xe(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(eu(t,e,2,!1),n.add(r))}function yo(e,t,n){var r=0;t&&(r|=4),eu(n,e,r,t)}var qi="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[qi]){e[qi]=!0,g.forEach(function(n){n!=="selectionchange"&&(kf.has(n)||yo(n,!1,e),yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qi]||(t[qi]=!0,yo("selectionchange",!1,t))}}function eu(e,t,n,r){switch(xl(t)){case 1:var s=qd;break;case 4:s=jd;break;default:s=eo}n=s.bind(null,t,n,e),s=void 0,!Cn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function _o(e,t,n,r,s){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var E=r.stateNode.containerInfo;if(E===s||E.nodeType===8&&E.parentNode===s)break;if(m===4)for(m=r.return;m!==null;){var U=m.tag;if((U===3||U===4)&&(U=m.stateNode.containerInfo,U===s||U.nodeType===8&&U.parentNode===s))return;m=m.return}for(;E!==null;){if(m=er(E),m===null)return;if(U=m.tag,U===5||U===6){r=l=m;continue e}E=E.parentNode}}r=r.return}Lt(function(){var V=l,re=ht(n),se=[];e:{var ne=Xl.get(e);if(ne!==void 0){var ce=ro,ge=e;switch(e){case"keypress":if(Fi(n)===0)break e;case"keydown":case"keyup":ce=uf;break;case"focusin":ge="focus",ce=oo;break;case"focusout":ge="blur",ce=oo;break;case"beforeblur":case"afterblur":ce=oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Ml;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=ff;break;case ql:case jl:case Zl:ce=Jd;break;case Ql:ce=pf;break;case"scroll":ce=Zd;break;case"wheel":ce=gf;break;case"copy":case"cut":case"paste":ce=tf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Al}var ye=(t&4)!==0,dt=!ye&&e==="scroll",b=ye?ne!==null?ne+"Capture":null:ne;ye=[];for(var D=V,N;D!==null;){N=D;var ae=N.stateNode;if(N.tag===5&&ae!==null&&(N=ae,b!==null&&(ae=un(D,b),ae!=null&&ye.push(ni(D,ae,N)))),dt)break;D=D.return}0<ye.length&&(ne=new ce(ne,ge,null,n,re),se.push({event:ne,listeners:ye}))}}if(!(t&7)){e:{if(ne=e==="mouseover"||e==="pointerover",ce=e==="mouseout"||e==="pointerout",ne&&n!==ft&&(ge=n.relatedTarget||n.fromElement)&&(er(ge)||ge[xn]))break e;if((ce||ne)&&(ne=re.window===re?re:(ne=re.ownerDocument)?ne.defaultView||ne.parentWindow:window,ce?(ge=n.relatedTarget||n.toElement,ce=V,ge=ge?er(ge):null,ge!==null&&(dt=Je(ge),ge!==dt||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(ce=null,ge=V),ce!==ge)){if(ye=Ml,ae="onMouseLeave",b="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Al,ae="onPointerLeave",b="onPointerEnter",D="pointer"),dt=ce==null?ne:Tr(ce),N=ge==null?ne:Tr(ge),ne=new ye(ae,D+"leave",ce,n,re),ne.target=dt,ne.relatedTarget=N,ae=null,er(re)===V&&(ye=new ye(b,D+"enter",ge,n,re),ye.target=N,ye.relatedTarget=dt,ae=ye),dt=ae,ce&&ge)t:{for(ye=ce,b=ge,D=0,N=ye;N;N=wr(N))D++;for(N=0,ae=b;ae;ae=wr(ae))N++;for(;0<D-N;)ye=wr(ye),D--;for(;0<N-D;)b=wr(b),N--;for(;D--;){if(ye===b||b!==null&&ye===b.alternate)break t;ye=wr(ye),b=wr(b)}ye=null}else ye=null;ce!==null&&tu(se,ne,ce,ye,!1),ge!==null&&dt!==null&&tu(se,dt,ge,ye,!0)}}e:{if(ne=V?Tr(V):window,ce=ne.nodeName&&ne.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ne.type==="file")var we=xf;else if(Il(ne))if(Ol)we=Pf;else{we=Ef;var xe=Rf}else(ce=ne.nodeName)&&ce.toLowerCase()==="input"&&(ne.type==="checkbox"||ne.type==="radio")&&(we=Mf);if(we&&(we=we(e,V))){Dl(se,we,n,re);break e}xe&&xe(e,ne,V),e==="focusout"&&(xe=ne._wrapperState)&&xe.controlled&&ne.type==="number"&&k(ne,"number",ne.value)}switch(xe=V?Tr(V):window,e){case"focusin":(Il(xe)||xe.contentEditable==="true")&&(yr=xe,ho=V,Jr=null);break;case"focusout":Jr=ho=yr=null;break;case"mousedown":po=!0;break;case"contextmenu":case"mouseup":case"dragend":po=!1,$l(se,n,re);break;case"selectionchange":if(Uf)break;case"keydown":case"keyup":$l(se,n,re)}var Re;if(lo)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else vr?Cl(e,n)&&(Le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Le="onCompositionStart");Le&&(Ll&&n.locale!=="ko"&&(vr||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&vr&&(Re=Rl()):(bn=re,no="value"in bn?bn.value:bn.textContent,vr=!0)),xe=ji(V,Le),0<xe.length&&(Le=new Pl(Le,e,null,n,re),se.push({event:Le,listeners:xe}),Re?Le.data=Re:(Re=kl(n),Re!==null&&(Le.data=Re)))),(Re=yf?_f(e,n):wf(e,n))&&(V=ji(V,"onBeforeInput"),0<V.length&&(re=new Pl("onBeforeInput","beforeinput",null,n,re),se.push({event:re,listeners:V}),re.data=Re))}Jl(se,t)})}function ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ji(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=un(e,n),l!=null&&r.unshift(ni(e,l,s)),l=un(e,t),l!=null&&r.push(ni(e,l,s))),e=e.return}return r}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tu(e,t,n,r,s){for(var l=t._reactName,m=[];n!==null&&n!==r;){var E=n,U=E.alternate,V=E.stateNode;if(U!==null&&U===r)break;E.tag===5&&V!==null&&(E=V,s?(U=un(n,l),U!=null&&m.unshift(ni(n,U,E))):s||(U=un(n,l),U!=null&&m.push(ni(n,U,E)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var If=/\r\n?/g,Df=/\u0000|\uFFFD/g;function nu(e){return(typeof e=="string"?e:""+e).replace(If,`
`).replace(Df,"")}function Zi(e,t,n){if(t=nu(t),nu(e)!==t&&n)throw Error(u(425))}function Qi(){}var wo=null,So=null;function To(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xo=typeof setTimeout=="function"?setTimeout:void 0,Of=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,bf=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(e){return ru.resolve(null).then(e).catch(Nf)}:xo;function Nf(e){setTimeout(function(){throw e})}function Ro(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);qr(t)}function Bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function iu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),hn="__reactFiber$"+Sr,ri="__reactProps$"+Sr,xn="__reactContainer$"+Sr,Eo="__reactEvents$"+Sr,Bf="__reactListeners$"+Sr,Ff="__reactHandles$"+Sr;function er(e){var t=e[hn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xn]||n[hn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=iu(e);e!==null;){if(n=e[hn])return n;e=iu(e)}return t}e=n,n=e.parentNode}return null}function ii(e){return e=e[hn]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Xi(e){return e[ri]||null}var Mo=[],xr=-1;function Fn(e){return{current:e}}function Ye(e){0>xr||(e.current=Mo[xr],Mo[xr]=null,xr--)}function Qe(e,t){xr++,Mo[xr]=e.current,e.current=t}var Gn={},Ut=Fn(Gn),Ot=Fn(!1),tr=Gn;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function bt(e){return e=e.childContextTypes,e!=null}function Yi(){Ye(Ot),Ye(Ut)}function su(e,t,n){if(Ut.current!==Gn)throw Error(u(168));Qe(Ut,t),Qe(Ot,n)}function ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(u(108,f(e)||"Unknown",s));return oe({},n,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,tr=Ut.current,Qe(Ut,e),Qe(Ot,Ot.current),!0}function au(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=ou(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,Ye(Ot),Ye(Ut),Qe(Ut,e)):Ye(Ot),Qe(Ot,n)}var Rn=null,Ji=!1,Po=!1;function lu(e){Rn===null?Rn=[e]:Rn.push(e)}function Gf(e){Ji=!0,lu(e)}function Hn(){if(!Po&&Rn!==null){Po=!0;var e=0,t=qe;try{var n=Rn;for(qe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rn=null,Ji=!1}catch(s){throw Rn!==null&&(Rn=Rn.slice(e+1)),cl(Zs,Hn),s}finally{qe=t,Po=!1}}return null}var Er=[],Mr=0,es=null,ts=0,Zt=[],Qt=0,nr=null,En=1,Mn="";function rr(e,t){Er[Mr++]=ts,Er[Mr++]=es,es=e,ts=t}function uu(e,t,n){Zt[Qt++]=En,Zt[Qt++]=Mn,Zt[Qt++]=nr,nr=e;var r=En;e=Mn;var s=32-en(r)-1;r&=~(1<<s),n+=1;var l=32-en(t)+s;if(30<l){var m=s-s%5;l=(r&(1<<m)-1).toString(32),r>>=m,s-=m,En=1<<32-en(t)+s|n<<s|r,Mn=l+e}else En=1<<l|n<<s|r,Mn=e}function Ao(e){e.return!==null&&(rr(e,1),uu(e,1,0))}function Lo(e){for(;e===es;)es=Er[--Mr],Er[Mr]=null,ts=Er[--Mr],Er[Mr]=null;for(;e===nr;)nr=Zt[--Qt],Zt[Qt]=null,Mn=Zt[--Qt],Zt[Qt]=null,En=Zt[--Qt],Zt[Qt]=null}var Vt=null,$t=null,et=!1,nn=null;function cu(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Vt=e,$t=Bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Vt=e,$t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:En,overflow:Mn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Vt=e,$t=null,!0):!1;default:return!1}}function Uo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zo(e){if(et){var t=$t;if(t){var n=t;if(!du(e,t)){if(Uo(e))throw Error(u(418));t=Bn(n.nextSibling);var r=Vt;t&&du(e,t)?cu(r,n):(e.flags=e.flags&-4097|2,et=!1,Vt=e)}}else{if(Uo(e))throw Error(u(418));e.flags=e.flags&-4097|2,et=!1,Vt=e}}}function fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Vt=e}function ns(e){if(e!==Vt)return!1;if(!et)return fu(e),et=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!To(e.type,e.memoizedProps)),t&&(t=$t)){if(Uo(e))throw hu(),Error(u(418));for(;t;)cu(e,t),t=Bn(t.nextSibling)}if(fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$t=Bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$t=null}}else $t=Vt?Bn(e.stateNode.nextSibling):null;return!0}function hu(){for(var e=$t;e;)e=Bn(e.nextSibling)}function Pr(){$t=Vt=null,et=!1}function Co(e){nn===null?nn=[e]:nn.push(e)}var Hf=de.ReactCurrentBatchConfig;function si(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var s=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(m){var E=s.refs;m===null?delete E[l]:E[l]=m},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function rs(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function mu(e){function t(b,D){if(e){var N=b.deletions;N===null?(b.deletions=[D],b.flags|=16):N.push(D)}}function n(b,D){if(!e)return null;for(;D!==null;)t(b,D),D=D.sibling;return null}function r(b,D){for(b=new Map;D!==null;)D.key!==null?b.set(D.key,D):b.set(D.index,D),D=D.sibling;return b}function s(b,D){return b=Xn(b,D),b.index=0,b.sibling=null,b}function l(b,D,N){return b.index=N,e?(N=b.alternate,N!==null?(N=N.index,N<D?(b.flags|=2,D):N):(b.flags|=2,D)):(b.flags|=1048576,D)}function m(b){return e&&b.alternate===null&&(b.flags|=2),b}function E(b,D,N,ae){return D===null||D.tag!==6?(D=xa(N,b.mode,ae),D.return=b,D):(D=s(D,N),D.return=b,D)}function U(b,D,N,ae){var we=N.type;return we===Ne?re(b,D,N.props.children,ae,N.key):D!==null&&(D.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===Ve&&pu(we)===D.type)?(ae=s(D,N.props),ae.ref=si(b,D,N),ae.return=b,ae):(ae=Ps(N.type,N.key,N.props,null,b.mode,ae),ae.ref=si(b,D,N),ae.return=b,ae)}function V(b,D,N,ae){return D===null||D.tag!==4||D.stateNode.containerInfo!==N.containerInfo||D.stateNode.implementation!==N.implementation?(D=Ra(N,b.mode,ae),D.return=b,D):(D=s(D,N.children||[]),D.return=b,D)}function re(b,D,N,ae,we){return D===null||D.tag!==7?(D=dr(N,b.mode,ae,we),D.return=b,D):(D=s(D,N),D.return=b,D)}function se(b,D,N){if(typeof D=="string"&&D!==""||typeof D=="number")return D=xa(""+D,b.mode,N),D.return=b,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Pe:return N=Ps(D.type,D.key,D.props,null,b.mode,N),N.ref=si(b,null,D),N.return=b,N;case Ie:return D=Ra(D,b.mode,N),D.return=b,D;case Ve:var ae=D._init;return se(b,ae(D._payload),N)}if(G(D)||_e(D))return D=dr(D,b.mode,N,null),D.return=b,D;rs(b,D)}return null}function ne(b,D,N,ae){var we=D!==null?D.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return we!==null?null:E(b,D,""+N,ae);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Pe:return N.key===we?U(b,D,N,ae):null;case Ie:return N.key===we?V(b,D,N,ae):null;case Ve:return we=N._init,ne(b,D,we(N._payload),ae)}if(G(N)||_e(N))return we!==null?null:re(b,D,N,ae,null);rs(b,N)}return null}function ce(b,D,N,ae,we){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return b=b.get(N)||null,E(D,b,""+ae,we);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case Pe:return b=b.get(ae.key===null?N:ae.key)||null,U(D,b,ae,we);case Ie:return b=b.get(ae.key===null?N:ae.key)||null,V(D,b,ae,we);case Ve:var xe=ae._init;return ce(b,D,N,xe(ae._payload),we)}if(G(ae)||_e(ae))return b=b.get(N)||null,re(D,b,ae,we,null);rs(D,ae)}return null}function ge(b,D,N,ae){for(var we=null,xe=null,Re=D,Le=D=0,Rt=null;Re!==null&&Le<N.length;Le++){Re.index>Le?(Rt=Re,Re=null):Rt=Re.sibling;var We=ne(b,Re,N[Le],ae);if(We===null){Re===null&&(Re=Rt);break}e&&Re&&We.alternate===null&&t(b,Re),D=l(We,D,Le),xe===null?we=We:xe.sibling=We,xe=We,Re=Rt}if(Le===N.length)return n(b,Re),et&&rr(b,Le),we;if(Re===null){for(;Le<N.length;Le++)Re=se(b,N[Le],ae),Re!==null&&(D=l(Re,D,Le),xe===null?we=Re:xe.sibling=Re,xe=Re);return et&&rr(b,Le),we}for(Re=r(b,Re);Le<N.length;Le++)Rt=ce(Re,b,Le,N[Le],ae),Rt!==null&&(e&&Rt.alternate!==null&&Re.delete(Rt.key===null?Le:Rt.key),D=l(Rt,D,Le),xe===null?we=Rt:xe.sibling=Rt,xe=Rt);return e&&Re.forEach(function(Yn){return t(b,Yn)}),et&&rr(b,Le),we}function ye(b,D,N,ae){var we=_e(N);if(typeof we!="function")throw Error(u(150));if(N=we.call(N),N==null)throw Error(u(151));for(var xe=we=null,Re=D,Le=D=0,Rt=null,We=N.next();Re!==null&&!We.done;Le++,We=N.next()){Re.index>Le?(Rt=Re,Re=null):Rt=Re.sibling;var Yn=ne(b,Re,We.value,ae);if(Yn===null){Re===null&&(Re=Rt);break}e&&Re&&Yn.alternate===null&&t(b,Re),D=l(Yn,D,Le),xe===null?we=Yn:xe.sibling=Yn,xe=Yn,Re=Rt}if(We.done)return n(b,Re),et&&rr(b,Le),we;if(Re===null){for(;!We.done;Le++,We=N.next())We=se(b,We.value,ae),We!==null&&(D=l(We,D,Le),xe===null?we=We:xe.sibling=We,xe=We);return et&&rr(b,Le),we}for(Re=r(b,Re);!We.done;Le++,We=N.next())We=ce(Re,b,Le,We.value,ae),We!==null&&(e&&We.alternate!==null&&Re.delete(We.key===null?Le:We.key),D=l(We,D,Le),xe===null?we=We:xe.sibling=We,xe=We);return e&&Re.forEach(function(wh){return t(b,wh)}),et&&rr(b,Le),we}function dt(b,D,N,ae){if(typeof N=="object"&&N!==null&&N.type===Ne&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case Pe:e:{for(var we=N.key,xe=D;xe!==null;){if(xe.key===we){if(we=N.type,we===Ne){if(xe.tag===7){n(b,xe.sibling),D=s(xe,N.props.children),D.return=b,b=D;break e}}else if(xe.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===Ve&&pu(we)===xe.type){n(b,xe.sibling),D=s(xe,N.props),D.ref=si(b,xe,N),D.return=b,b=D;break e}n(b,xe);break}else t(b,xe);xe=xe.sibling}N.type===Ne?(D=dr(N.props.children,b.mode,ae,N.key),D.return=b,b=D):(ae=Ps(N.type,N.key,N.props,null,b.mode,ae),ae.ref=si(b,D,N),ae.return=b,b=ae)}return m(b);case Ie:e:{for(xe=N.key;D!==null;){if(D.key===xe)if(D.tag===4&&D.stateNode.containerInfo===N.containerInfo&&D.stateNode.implementation===N.implementation){n(b,D.sibling),D=s(D,N.children||[]),D.return=b,b=D;break e}else{n(b,D);break}else t(b,D);D=D.sibling}D=Ra(N,b.mode,ae),D.return=b,b=D}return m(b);case Ve:return xe=N._init,dt(b,D,xe(N._payload),ae)}if(G(N))return ge(b,D,N,ae);if(_e(N))return ye(b,D,N,ae);rs(b,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,D!==null&&D.tag===6?(n(b,D.sibling),D=s(D,N),D.return=b,b=D):(n(b,D),D=xa(N,b.mode,ae),D.return=b,b=D),m(b)):n(b,D)}return dt}var Ar=mu(!0),gu=mu(!1),is=Fn(null),ss=null,Lr=null,ko=null;function Io(){ko=Lr=ss=null}function Do(e){var t=is.current;Ye(is),e._currentValue=t}function Oo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ur(e,t){ss=e,ko=Lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Nt=!0),e.firstContext=null)}function Xt(e){var t=e._currentValue;if(ko!==e)if(e={context:e,memoizedValue:t,next:null},Lr===null){if(ss===null)throw Error(u(308));Lr=e,ss.dependencies={lanes:0,firstContext:e}}else Lr=Lr.next=e;return t}var ir=null;function bo(e){ir===null?ir=[e]:ir.push(e)}function vu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,bo(t)):(n.next=s.next,s.next=n),t.interleaved=n,Pn(e,r)}function Pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vn=!1;function No(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$e&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Pn(e,n)}return s=r.interleaved,s===null?(t.next=t,bo(r)):(t.next=s.next,s.next=t),r.interleaved=t,Pn(e,n)}function os(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ys(e,n)}}function _u(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var m={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=m:l=l.next=m,n=n.next}while(n!==null);l===null?s=l=t:l=l.next=t}else s=l=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function as(e,t,n,r){var s=e.updateQueue;Vn=!1;var l=s.firstBaseUpdate,m=s.lastBaseUpdate,E=s.shared.pending;if(E!==null){s.shared.pending=null;var U=E,V=U.next;U.next=null,m===null?l=V:m.next=V,m=U;var re=e.alternate;re!==null&&(re=re.updateQueue,E=re.lastBaseUpdate,E!==m&&(E===null?re.firstBaseUpdate=V:E.next=V,re.lastBaseUpdate=U))}if(l!==null){var se=s.baseState;m=0,re=V=U=null,E=l;do{var ne=E.lane,ce=E.eventTime;if((r&ne)===ne){re!==null&&(re=re.next={eventTime:ce,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var ge=e,ye=E;switch(ne=t,ce=n,ye.tag){case 1:if(ge=ye.payload,typeof ge=="function"){se=ge.call(ce,se,ne);break e}se=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ye.payload,ne=typeof ge=="function"?ge.call(ce,se,ne):ge,ne==null)break e;se=oe({},se,ne);break e;case 2:Vn=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,ne=s.effects,ne===null?s.effects=[E]:ne.push(E))}else ce={eventTime:ce,lane:ne,tag:E.tag,payload:E.payload,callback:E.callback,next:null},re===null?(V=re=ce,U=se):re=re.next=ce,m|=ne;if(E=E.next,E===null){if(E=s.shared.pending,E===null)break;ne=E,E=ne.next,ne.next=null,s.lastBaseUpdate=ne,s.shared.pending=null}}while(!0);if(re===null&&(U=se),s.baseState=U,s.firstBaseUpdate=V,s.lastBaseUpdate=re,t=s.shared.interleaved,t!==null){s=t;do m|=s.lane,s=s.next;while(s!==t)}else l===null&&(s.shared.lanes=0);ar|=m,e.lanes=m,e.memoizedState=se}}function wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(u(191,s));s.call(r)}}}var oi={},pn=Fn(oi),ai=Fn(oi),li=Fn(oi);function sr(e){if(e===oi)throw Error(u(174));return e}function Bo(e,t){switch(Qe(li,t),Qe(ai,e),Qe(pn,oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Y(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Y(t,e)}Ye(pn),Qe(pn,t)}function zr(){Ye(pn),Ye(ai),Ye(li)}function Su(e){sr(li.current);var t=sr(pn.current),n=Y(t,e.type);t!==n&&(Qe(ai,e),Qe(pn,n))}function Fo(e){ai.current===e&&(Ye(pn),Ye(ai))}var st=Fn(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Go=[];function Ho(){for(var e=0;e<Go.length;e++)Go[e]._workInProgressVersionPrimary=null;Go.length=0}var us=de.ReactCurrentDispatcher,Vo=de.ReactCurrentBatchConfig,or=0,ot=null,gt=null,Tt=null,cs=!1,ui=!1,ci=0,Vf=0;function zt(){throw Error(u(321))}function $o(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tn(e[n],t[n]))return!1;return!0}function Wo(e,t,n,r,s,l){if(or=l,ot=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,us.current=e===null||e.memoizedState===null?jf:Zf,e=n(r,s),ui){l=0;do{if(ui=!1,ci=0,25<=l)throw Error(u(301));l+=1,Tt=gt=null,t.updateQueue=null,us.current=Qf,e=n(r,s)}while(ui)}if(us.current=hs,t=gt!==null&&gt.next!==null,or=0,Tt=gt=ot=null,cs=!1,t)throw Error(u(300));return e}function qo(){var e=ci!==0;return ci=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?ot.memoizedState=Tt=e:Tt=Tt.next=e,Tt}function Yt(){if(gt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=gt.next;var t=Tt===null?ot.memoizedState:Tt.next;if(t!==null)Tt=t,gt=e;else{if(e===null)throw Error(u(310));gt=e,e={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?ot.memoizedState=Tt=e:Tt=Tt.next=e}return Tt}function di(e,t){return typeof t=="function"?t(e):t}function jo(e){var t=Yt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=gt,s=r.baseQueue,l=n.pending;if(l!==null){if(s!==null){var m=s.next;s.next=l.next,l.next=m}r.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,r=r.baseState;var E=m=null,U=null,V=l;do{var re=V.lane;if((or&re)===re)U!==null&&(U=U.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),r=V.hasEagerState?V.eagerState:e(r,V.action);else{var se={lane:re,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};U===null?(E=U=se,m=r):U=U.next=se,ot.lanes|=re,ar|=re}V=V.next}while(V!==null&&V!==l);U===null?m=r:U.next=E,tn(r,t.memoizedState)||(Nt=!0),t.memoizedState=r,t.baseState=m,t.baseQueue=U,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do l=s.lane,ot.lanes|=l,ar|=l,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zo(e){var t=Yt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,l=t.memoizedState;if(s!==null){n.pending=null;var m=s=s.next;do l=e(l,m.action),m=m.next;while(m!==s);tn(l,t.memoizedState)||(Nt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Tu(){}function xu(e,t){var n=ot,r=Yt(),s=t(),l=!tn(r.memoizedState,s);if(l&&(r.memoizedState=s,Nt=!0),r=r.queue,Qo(Mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,fi(9,Eu.bind(null,n,r,s,t),void 0,null),xt===null)throw Error(u(349));or&30||Ru(n,t,s)}return s}function Ru(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Eu(e,t,n,r){t.value=n,t.getSnapshot=r,Pu(t)&&Au(e)}function Mu(e,t,n){return n(function(){Pu(t)&&Au(e)})}function Pu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tn(e,n)}catch{return!0}}function Au(e){var t=Pn(e,1);t!==null&&an(t,e,1,-1)}function Lu(e){var t=mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:e},t.queue=e,e=e.dispatch=qf.bind(null,ot,e),[t.memoizedState,e]}function fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Uu(){return Yt().memoizedState}function ds(e,t,n,r){var s=mn();ot.flags|=e,s.memoizedState=fi(1|t,n,void 0,r===void 0?null:r)}function fs(e,t,n,r){var s=Yt();r=r===void 0?null:r;var l=void 0;if(gt!==null){var m=gt.memoizedState;if(l=m.destroy,r!==null&&$o(r,m.deps)){s.memoizedState=fi(t,n,l,r);return}}ot.flags|=e,s.memoizedState=fi(1|t,n,l,r)}function zu(e,t){return ds(8390656,8,e,t)}function Qo(e,t){return fs(2048,8,e,t)}function Cu(e,t){return fs(4,2,e,t)}function ku(e,t){return fs(4,4,e,t)}function Iu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Du(e,t,n){return n=n!=null?n.concat([e]):null,fs(4,4,Iu.bind(null,t,e),n)}function Xo(){}function Ou(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$o(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bu(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$o(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nu(e,t,n){return or&21?(tn(n,t)||(n=pl(),ot.lanes|=n,ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Nt=!0),e.memoizedState=n)}function $f(e,t){var n=qe;qe=n!==0&&4>n?n:4,e(!0);var r=Vo.transition;Vo.transition={};try{e(!1),t()}finally{qe=n,Vo.transition=r}}function Bu(){return Yt().memoizedState}function Wf(e,t,n){var r=Zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fu(e))Gu(t,n);else if(n=vu(e,t,n,r),n!==null){var s=Dt();an(n,e,r,s),Hu(n,t,r)}}function qf(e,t,n){var r=Zn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))Gu(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var m=t.lastRenderedState,E=l(m,n);if(s.hasEagerState=!0,s.eagerState=E,tn(E,m)){var U=t.interleaved;U===null?(s.next=s,bo(t)):(s.next=U.next,U.next=s),t.interleaved=s;return}}catch{}finally{}n=vu(e,t,s,r),n!==null&&(s=Dt(),an(n,e,r,s),Hu(n,t,r))}}function Fu(e){var t=e.alternate;return e===ot||t!==null&&t===ot}function Gu(e,t){ui=cs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ys(e,n)}}var hs={readContext:Xt,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},jf={readContext:Xt,useCallback:function(e,t){return mn().memoizedState=[e,t===void 0?null:t],e},useContext:Xt,useEffect:zu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ds(4194308,4,Iu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return ds(4,2,e,t)},useMemo:function(e,t){var n=mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wf.bind(null,ot,e),[r.memoizedState,e]},useRef:function(e){var t=mn();return e={current:e},t.memoizedState=e},useState:Lu,useDebugValue:Xo,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=Lu(!1),t=e[0];return e=$f.bind(null,e[1]),mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ot,s=mn();if(et){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),xt===null)throw Error(u(349));or&30||Ru(r,t,n)}s.memoizedState=n;var l={value:n,getSnapshot:t};return s.queue=l,zu(Mu.bind(null,r,l,e),[e]),r.flags|=2048,fi(9,Eu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=mn(),t=xt.identifierPrefix;if(et){var n=Mn,r=En;n=(r&~(1<<32-en(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zf={readContext:Xt,useCallback:Ou,useContext:Xt,useEffect:Qo,useImperativeHandle:Du,useInsertionEffect:Cu,useLayoutEffect:ku,useMemo:bu,useReducer:jo,useRef:Uu,useState:function(){return jo(di)},useDebugValue:Xo,useDeferredValue:function(e){var t=Yt();return Nu(t,gt.memoizedState,e)},useTransition:function(){var e=jo(di)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:xu,useId:Bu,unstable_isNewReconciler:!1},Qf={readContext:Xt,useCallback:Ou,useContext:Xt,useEffect:Qo,useImperativeHandle:Du,useInsertionEffect:Cu,useLayoutEffect:ku,useMemo:bu,useReducer:Zo,useRef:Uu,useState:function(){return Zo(di)},useDebugValue:Xo,useDeferredValue:function(e){var t=Yt();return gt===null?t.memoizedState=e:Nu(t,gt.memoizedState,e)},useTransition:function(){var e=Zo(di)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:xu,useId:Bu,unstable_isNewReconciler:!1};function rn(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ps={isMounted:function(e){return(e=e._reactInternals)?Je(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Dt(),s=Zn(e),l=An(r,s);l.payload=t,n!=null&&(l.callback=n),t=$n(e,l,s),t!==null&&(an(t,e,s,r),os(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Dt(),s=Zn(e),l=An(r,s);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=$n(e,l,s),t!==null&&(an(t,e,s,r),os(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),r=Zn(e),s=An(n,r);s.tag=2,t!=null&&(s.callback=t),t=$n(e,s,r),t!==null&&(an(t,e,r,n),os(t,e,r))}};function Vu(e,t,n,r,s,l,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,m):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(s,l):!0}function $u(e,t,n){var r=!1,s=Gn,l=t.contextType;return typeof l=="object"&&l!==null?l=Xt(l):(s=bt(t)?tr:Ut.current,r=t.contextTypes,l=(r=r!=null)?Rr(e,s):Gn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ps,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),t}function Wu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ps.enqueueReplaceState(t,t.state,null)}function Ko(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},No(e);var l=t.contextType;typeof l=="object"&&l!==null?s.context=Xt(l):(l=bt(t)?tr:Ut.current,s.context=Rr(e,l)),s.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Yo(e,t,l,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ps.enqueueReplaceState(s,s.state,null),as(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t){try{var n="",r=t;do n+=Ce(r),r=r.return;while(r);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:s,digest:null}}function Jo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ea(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xf=typeof WeakMap=="function"?WeakMap:Map;function qu(e,t,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ss||(Ss=!0,ma=r),ea(e,t)},n}function ju(e,t,n){n=An(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ea(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ea(e,t),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),n}function Zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xf;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=ch.bind(null,e,t,n),t.then(e,e))}function Qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xu(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=An(-1,1),t.tag=2,$n(n,t,1))),n.lanes|=1),e)}var Yf=de.ReactCurrentOwner,Nt=!1;function It(e,t,n,r){t.child=e===null?gu(t,null,n,r):Ar(t,e.child,n,r)}function Yu(e,t,n,r,s){n=n.render;var l=t.ref;return Ur(t,s),r=Wo(e,t,n,r,l,s),n=qo(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ln(e,t,s)):(et&&n&&Ao(t),t.flags|=1,It(e,t,r,s),t.child)}function Ku(e,t,n,r,s){if(e===null){var l=n.type;return typeof l=="function"&&!Ta(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ju(e,t,l,r,s)):(e=Ps(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&s)){var m=l.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(m,r)&&e.ref===t.ref)return Ln(e,t,s)}return t.flags|=1,e=Xn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ju(e,t,n,r,s){if(e!==null){var l=e.memoizedProps;if(Kr(l,r)&&e.ref===t.ref)if(Nt=!1,t.pendingProps=r=l,(e.lanes&s)!==0)e.flags&131072&&(Nt=!0);else return t.lanes=e.lanes,Ln(e,t,s)}return ta(e,t,n,r,s)}function ec(e,t,n){var r=t.pendingProps,s=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(Ir,Wt),Wt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Qe(Ir,Wt),Wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Qe(Ir,Wt),Wt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Qe(Ir,Wt),Wt|=r;return It(e,t,s,n),t.child}function tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ta(e,t,n,r,s){var l=bt(n)?tr:Ut.current;return l=Rr(t,l),Ur(t,s),n=Wo(e,t,n,r,l,s),r=qo(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ln(e,t,s)):(et&&r&&Ao(t),t.flags|=1,It(e,t,n,s),t.child)}function nc(e,t,n,r,s){if(bt(n)){var l=!0;Ki(t)}else l=!1;if(Ur(t,s),t.stateNode===null)gs(e,t),$u(t,n,r),Ko(t,n,r,s),r=!0;else if(e===null){var m=t.stateNode,E=t.memoizedProps;m.props=E;var U=m.context,V=n.contextType;typeof V=="object"&&V!==null?V=Xt(V):(V=bt(n)?tr:Ut.current,V=Rr(t,V));var re=n.getDerivedStateFromProps,se=typeof re=="function"||typeof m.getSnapshotBeforeUpdate=="function";se||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==r||U!==V)&&Wu(t,m,r,V),Vn=!1;var ne=t.memoizedState;m.state=ne,as(t,r,m,s),U=t.memoizedState,E!==r||ne!==U||Ot.current||Vn?(typeof re=="function"&&(Yo(t,n,re,r),U=t.memoizedState),(E=Vn||Vu(t,n,E,r,ne,U,V))?(se||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=U),m.props=r,m.state=U,m.context=V,r=E):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{m=t.stateNode,yu(e,t),E=t.memoizedProps,V=t.type===t.elementType?E:rn(t.type,E),m.props=V,se=t.pendingProps,ne=m.context,U=n.contextType,typeof U=="object"&&U!==null?U=Xt(U):(U=bt(n)?tr:Ut.current,U=Rr(t,U));var ce=n.getDerivedStateFromProps;(re=typeof ce=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==se||ne!==U)&&Wu(t,m,r,U),Vn=!1,ne=t.memoizedState,m.state=ne,as(t,r,m,s);var ge=t.memoizedState;E!==se||ne!==ge||Ot.current||Vn?(typeof ce=="function"&&(Yo(t,n,ce,r),ge=t.memoizedState),(V=Vn||Vu(t,n,V,r,ne,ge,U)||!1)?(re||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,ge,U),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,ge,U)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ne===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ne===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ge),m.props=r,m.state=ge,m.context=U,r=V):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ne===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ne===e.memoizedState||(t.flags|=1024),r=!1)}return na(e,t,n,r,l,s)}function na(e,t,n,r,s,l){tc(e,t);var m=(t.flags&128)!==0;if(!r&&!m)return s&&au(t,n,!1),Ln(e,t,l);r=t.stateNode,Yf.current=t;var E=m&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&m?(t.child=Ar(t,e.child,null,l),t.child=Ar(t,null,E,l)):It(e,t,E,l),t.memoizedState=r.state,s&&au(t,n,!0),t.child}function rc(e){var t=e.stateNode;t.pendingContext?su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&su(e,t.context,!1),Bo(e,t.containerInfo)}function ic(e,t,n,r,s){return Pr(),Co(s),t.flags|=256,It(e,t,n,r),t.child}var ra={dehydrated:null,treeContext:null,retryLane:0};function ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function sc(e,t,n){var r=t.pendingProps,s=st.current,l=!1,m=(t.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(s&2)!==0),E?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Qe(st,s&1),e===null)return zo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(m=r.children,e=r.fallback,l?(r=t.mode,l=t.child,m={mode:"hidden",children:m},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=m):l=As(m,r,0,null),e=dr(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ia(n),t.memoizedState=ra,e):sa(t,m));if(s=e.memoizedState,s!==null&&(E=s.dehydrated,E!==null))return Kf(e,t,m,r,E,s,n);if(l){l=r.fallback,m=t.mode,s=e.child,E=s.sibling;var U={mode:"hidden",children:r.children};return!(m&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=U,t.deletions=null):(r=Xn(s,U),r.subtreeFlags=s.subtreeFlags&14680064),E!==null?l=Xn(E,l):(l=dr(l,m,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,m=e.child.memoizedState,m=m===null?ia(n):{baseLanes:m.baseLanes|n,cachePool:null,transitions:m.transitions},l.memoizedState=m,l.childLanes=e.childLanes&~n,t.memoizedState=ra,r}return l=e.child,e=l.sibling,r=Xn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sa(e,t){return t=As({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ms(e,t,n,r){return r!==null&&Co(r),Ar(t,e.child,null,n),e=sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kf(e,t,n,r,s,l,m){if(n)return t.flags&256?(t.flags&=-257,r=Jo(Error(u(422))),ms(e,t,m,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,s=t.mode,r=As({mode:"visible",children:r.children},s,0,null),l=dr(l,s,m,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Ar(t,e.child,null,m),t.child.memoizedState=ia(m),t.memoizedState=ra,l);if(!(t.mode&1))return ms(e,t,m,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var E=r.dgst;return r=E,l=Error(u(419)),r=Jo(l,r,void 0),ms(e,t,m,r)}if(E=(m&e.childLanes)!==0,Nt||E){if(r=xt,r!==null){switch(m&-m){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|m)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,Pn(e,s),an(r,e,s,-1))}return Sa(),r=Jo(Error(u(421))),ms(e,t,m,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=dh.bind(null,e),s._reactRetry=t,null):(e=l.treeContext,$t=Bn(s.nextSibling),Vt=t,et=!0,nn=null,e!==null&&(Zt[Qt++]=En,Zt[Qt++]=Mn,Zt[Qt++]=nr,En=e.id,Mn=e.overflow,nr=t),t=sa(t,r.children),t.flags|=4096,t)}function oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oo(e.return,t,n)}function oa(e,t,n,r,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=s)}function ac(e,t,n){var r=t.pendingProps,s=r.revealOrder,l=r.tail;if(It(e,t,r.children,n),r=st.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oc(e,n,t);else if(e.tag===19)oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Qe(st,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ls(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),oa(t,!1,s,n,l);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ls(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}oa(t,!0,n,null,l);break;case"together":oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jf(e,t,n){switch(t.tag){case 3:rc(t),Pr();break;case 5:Su(t);break;case 1:bt(t.type)&&Ki(t);break;case 4:Bo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Qe(is,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Qe(st,st.current&1),t.flags|=128,null):n&t.child.childLanes?sc(e,t,n):(Qe(st,st.current&1),e=Ln(e,t,n),e!==null?e.sibling:null);Qe(st,st.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ac(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Qe(st,st.current),r)break;return null;case 22:case 23:return t.lanes=0,ec(e,t,n)}return Ln(e,t,n)}var lc,aa,uc,cc;lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},aa=function(){},uc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,sr(pn.current);var l=null;switch(n){case"input":s=a(e,s),r=a(e,r),l=[];break;case"select":s=oe({},s,{value:void 0}),r=oe({},r,{value:void 0}),l=[];break;case"textarea":s=S(e,s),r=S(e,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qi)}nt(n,r);var m;n=null;for(V in s)if(!r.hasOwnProperty(V)&&s.hasOwnProperty(V)&&s[V]!=null)if(V==="style"){var E=s[V];for(m in E)E.hasOwnProperty(m)&&(n||(n={}),n[m]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(_.hasOwnProperty(V)?l||(l=[]):(l=l||[]).push(V,null));for(V in r){var U=r[V];if(E=s!=null?s[V]:void 0,r.hasOwnProperty(V)&&U!==E&&(U!=null||E!=null))if(V==="style")if(E){for(m in E)!E.hasOwnProperty(m)||U&&U.hasOwnProperty(m)||(n||(n={}),n[m]="");for(m in U)U.hasOwnProperty(m)&&E[m]!==U[m]&&(n||(n={}),n[m]=U[m])}else n||(l||(l=[]),l.push(V,n)),n=U;else V==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,E=E?E.__html:void 0,U!=null&&E!==U&&(l=l||[]).push(V,U)):V==="children"?typeof U!="string"&&typeof U!="number"||(l=l||[]).push(V,""+U):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(_.hasOwnProperty(V)?(U!=null&&V==="onScroll"&&Xe("scroll",e),l||E===U||(l=[])):(l=l||[]).push(V,U))}n&&(l=l||[]).push("style",n);var V=l;(t.updateQueue=V)&&(t.flags|=4)}},cc=function(e,t,n,r){n!==r&&(t.flags|=4)};function hi(e,t){if(!et)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function eh(e,t,n){var r=t.pendingProps;switch(Lo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(t),null;case 1:return bt(t.type)&&Yi(),Ct(t),null;case 3:return r=t.stateNode,zr(),Ye(Ot),Ye(Ut),Ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nn!==null&&(ya(nn),nn=null))),aa(e,t),Ct(t),null;case 5:Fo(t);var s=sr(li.current);if(n=t.type,e!==null&&t.stateNode!=null)uc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Ct(t),null}if(e=sr(pn.current),ns(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[hn]=t,r[ri]=l,e=(t.mode&1)!==0,n){case"dialog":Xe("cancel",r),Xe("close",r);break;case"iframe":case"object":case"embed":Xe("load",r);break;case"video":case"audio":for(s=0;s<ei.length;s++)Xe(ei[s],r);break;case"source":Xe("error",r);break;case"img":case"image":case"link":Xe("error",r),Xe("load",r);break;case"details":Xe("toggle",r);break;case"input":v(r,l),Xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Xe("invalid",r);break;case"textarea":C(r,l),Xe("invalid",r)}nt(n,l),s=null;for(var m in l)if(l.hasOwnProperty(m)){var E=l[m];m==="children"?typeof E=="string"?r.textContent!==E&&(l.suppressHydrationWarning!==!0&&Zi(r.textContent,E,e),s=["children",E]):typeof E=="number"&&r.textContent!==""+E&&(l.suppressHydrationWarning!==!0&&Zi(r.textContent,E,e),s=["children",""+E]):_.hasOwnProperty(m)&&E!=null&&m==="onScroll"&&Xe("scroll",r)}switch(n){case"input":x(r),w(r,l,!0);break;case"textarea":x(r),H(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Qi)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{m=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Z(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=m.createElement(n,{is:r.is}):(e=m.createElement(n),n==="select"&&(m=e,r.multiple?m.multiple=!0:r.size&&(m.size=r.size))):e=m.createElementNS(e,n),e[hn]=t,e[ri]=r,lc(e,t,!1,!1),t.stateNode=e;e:{switch(m=ut(n,r),n){case"dialog":Xe("cancel",e),Xe("close",e),s=r;break;case"iframe":case"object":case"embed":Xe("load",e),s=r;break;case"video":case"audio":for(s=0;s<ei.length;s++)Xe(ei[s],e);s=r;break;case"source":Xe("error",e),s=r;break;case"img":case"image":case"link":Xe("error",e),Xe("load",e),s=r;break;case"details":Xe("toggle",e),s=r;break;case"input":v(e,r),s=a(e,r),Xe("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=oe({},r,{value:void 0}),Xe("invalid",e);break;case"textarea":C(e,r),s=S(e,r),Xe("invalid",e);break;default:s=r}nt(n,s),E=s;for(l in E)if(E.hasOwnProperty(l)){var U=E[l];l==="style"?Ze(e,U):l==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,U!=null&&Ae(e,U)):l==="children"?typeof U=="string"?(n!=="textarea"||U!=="")&&fe(e,U):typeof U=="number"&&fe(e,""+U):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_.hasOwnProperty(l)?U!=null&&l==="onScroll"&&Xe("scroll",e):U!=null&&ue(e,l,U,m))}switch(n){case"input":x(e),w(e,r,!1);break;case"textarea":x(e),H(e);break;case"option":r.value!=null&&e.setAttribute("value",""+R(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?y(e,!!r.multiple,l,!1):r.defaultValue!=null&&y(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ct(t),null;case 6:if(e&&t.stateNode!=null)cc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=sr(li.current),sr(pn.current),ns(t)){if(r=t.stateNode,n=t.memoizedProps,r[hn]=t,(l=r.nodeValue!==n)&&(e=Vt,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=t,t.stateNode=r}return Ct(t),null;case 13:if(Ye(st),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(et&&$t!==null&&t.mode&1&&!(t.flags&128))hu(),Pr(),t.flags|=98560,l=!1;else if(l=ns(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[hn]=t}else Pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ct(t),l=!1}else nn!==null&&(ya(nn),nn=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||st.current&1?vt===0&&(vt=3):Sa())),t.updateQueue!==null&&(t.flags|=4),Ct(t),null);case 4:return zr(),aa(e,t),e===null&&ti(t.stateNode.containerInfo),Ct(t),null;case 10:return Do(t.type._context),Ct(t),null;case 17:return bt(t.type)&&Yi(),Ct(t),null;case 19:if(Ye(st),l=t.memoizedState,l===null)return Ct(t),null;if(r=(t.flags&128)!==0,m=l.rendering,m===null)if(r)hi(l,!1);else{if(vt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(m=ls(e),m!==null){for(t.flags|=128,hi(l,!1),r=m.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,m=l.alternate,m===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=m.childLanes,l.lanes=m.lanes,l.child=m.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=m.memoizedProps,l.memoizedState=m.memoizedState,l.updateQueue=m.updateQueue,l.type=m.type,e=m.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Qe(st,st.current&1|2),t.child}e=e.sibling}l.tail!==null&&ct()>Dr&&(t.flags|=128,r=!0,hi(l,!1),t.lanes=4194304)}else{if(!r)if(e=ls(m),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!et)return Ct(t),null}else 2*ct()-l.renderingStartTime>Dr&&n!==1073741824&&(t.flags|=128,r=!0,hi(l,!1),t.lanes=4194304);l.isBackwards?(m.sibling=t.child,t.child=m):(n=l.last,n!==null?n.sibling=m:t.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ct(),t.sibling=null,n=st.current,Qe(st,r?n&1|2:n&1),t):(Ct(t),null);case 22:case 23:return wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Wt&1073741824&&(Ct(t),t.subtreeFlags&6&&(t.flags|=8192)):Ct(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function th(e,t){switch(Lo(t),t.tag){case 1:return bt(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),Ye(Ot),Ye(Ut),Ho(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fo(t),null;case 13:if(Ye(st),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ye(st),null;case 4:return zr(),null;case 10:return Do(t.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var vs=!1,kt=!1,nh=typeof WeakSet=="function"?WeakSet:Set,he=null;function kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){at(e,t,r)}else n.current=null}function la(e,t,n){try{n()}catch(r){at(e,t,r)}}var dc=!1;function rh(e,t){if(wo=bi,e=Vl(),fo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var m=0,E=-1,U=-1,V=0,re=0,se=e,ne=null;t:for(;;){for(var ce;se!==n||s!==0&&se.nodeType!==3||(E=m+s),se!==l||r!==0&&se.nodeType!==3||(U=m+r),se.nodeType===3&&(m+=se.nodeValue.length),(ce=se.firstChild)!==null;)ne=se,se=ce;for(;;){if(se===e)break t;if(ne===n&&++V===s&&(E=m),ne===l&&++re===r&&(U=m),(ce=se.nextSibling)!==null)break;se=ne,ne=se.parentNode}se=ce}n=E===-1||U===-1?null:{start:E,end:U}}else n=null}n=n||{start:0,end:0}}else n=null;for(So={focusedElem:e,selectionRange:n},bi=!1,he=t;he!==null;)if(t=he,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,he=e;else for(;he!==null;){t=he;try{var ge=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ye=ge.memoizedProps,dt=ge.memoizedState,b=t.stateNode,D=b.getSnapshotBeforeUpdate(t.elementType===t.type?ye:rn(t.type,ye),dt);b.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(ae){at(t,t.return,ae)}if(e=t.sibling,e!==null){e.return=t.return,he=e;break}he=t.return}return ge=dc,dc=!1,ge}function pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&la(t,n,l)}s=s.next}while(s!==r)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fc(e){var t=e.alternate;t!==null&&(e.alternate=null,fc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[hn],delete t[ri],delete t[Eo],delete t[Bf],delete t[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hc(e){return e.tag===5||e.tag===3||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qi));else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}function da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(da(e,t,n),e=e.sibling;e!==null;)da(e,t,n),e=e.sibling}var Mt=null,sn=!1;function Wn(e,t,n){for(n=n.child;n!==null;)mc(e,t,n),n=n.sibling}function mc(e,t,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:kt||kr(n,t);case 6:var r=Mt,s=sn;Mt=null,Wn(e,t,n),Mt=r,sn=s,Mt!==null&&(sn?(e=Mt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Mt.removeChild(n.stateNode));break;case 18:Mt!==null&&(sn?(e=Mt,n=n.stateNode,e.nodeType===8?Ro(e.parentNode,n):e.nodeType===1&&Ro(e,n),qr(e)):Ro(Mt,n.stateNode));break;case 4:r=Mt,s=sn,Mt=n.stateNode.containerInfo,sn=!0,Wn(e,t,n),Mt=r,sn=s;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,m=l.destroy;l=l.tag,m!==void 0&&(l&2||l&4)&&la(n,t,m),s=s.next}while(s!==r)}Wn(e,t,n);break;case 1:if(!kt&&(kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(E){at(n,t,E)}Wn(e,t,n);break;case 21:Wn(e,t,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,Wn(e,t,n),kt=r):Wn(e,t,n);break;default:Wn(e,t,n)}}function gc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nh),t.forEach(function(r){var s=fh.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function on(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var l=e,m=t,E=m;e:for(;E!==null;){switch(E.tag){case 5:Mt=E.stateNode,sn=!1;break e;case 3:Mt=E.stateNode.containerInfo,sn=!0;break e;case 4:Mt=E.stateNode.containerInfo,sn=!0;break e}E=E.return}if(Mt===null)throw Error(u(160));mc(l,m,s),Mt=null,sn=!1;var U=s.alternate;U!==null&&(U.return=null),s.return=null}catch(V){at(s,t,V)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(t,e),gn(e),r&4){try{pi(3,e,e.return),ys(3,e)}catch(ye){at(e,e.return,ye)}try{pi(5,e,e.return)}catch(ye){at(e,e.return,ye)}}break;case 1:on(t,e),gn(e),r&512&&n!==null&&kr(n,n.return);break;case 5:if(on(t,e),gn(e),r&512&&n!==null&&kr(n,n.return),e.flags&32){var s=e.stateNode;try{fe(s,"")}catch(ye){at(e,e.return,ye)}}if(r&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,m=n!==null?n.memoizedProps:l,E=e.type,U=e.updateQueue;if(e.updateQueue=null,U!==null)try{E==="input"&&l.type==="radio"&&l.name!=null&&c(s,l),ut(E,m);var V=ut(E,l);for(m=0;m<U.length;m+=2){var re=U[m],se=U[m+1];re==="style"?Ze(s,se):re==="dangerouslySetInnerHTML"?Ae(s,se):re==="children"?fe(s,se):ue(s,re,se,V)}switch(E){case"input":h(s,l);break;case"textarea":I(s,l);break;case"select":var ne=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var ce=l.value;ce!=null?y(s,!!l.multiple,ce,!1):ne!==!!l.multiple&&(l.defaultValue!=null?y(s,!!l.multiple,l.defaultValue,!0):y(s,!!l.multiple,l.multiple?[]:"",!1))}s[ri]=l}catch(ye){at(e,e.return,ye)}}break;case 6:if(on(t,e),gn(e),r&4){if(e.stateNode===null)throw Error(u(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(ye){at(e,e.return,ye)}}break;case 3:if(on(t,e),gn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qr(t.containerInfo)}catch(ye){at(e,e.return,ye)}break;case 4:on(t,e),gn(e);break;case 13:on(t,e),gn(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(pa=ct())),r&4&&gc(e);break;case 22:if(re=n!==null&&n.memoizedState!==null,e.mode&1?(kt=(V=kt)||re,on(t,e),kt=V):on(t,e),gn(e),r&8192){if(V=e.memoizedState!==null,(e.stateNode.isHidden=V)&&!re&&e.mode&1)for(he=e,re=e.child;re!==null;){for(se=he=re;he!==null;){switch(ne=he,ce=ne.child,ne.tag){case 0:case 11:case 14:case 15:pi(4,ne,ne.return);break;case 1:kr(ne,ne.return);var ge=ne.stateNode;if(typeof ge.componentWillUnmount=="function"){r=ne,n=ne.return;try{t=r,ge.props=t.memoizedProps,ge.state=t.memoizedState,ge.componentWillUnmount()}catch(ye){at(r,n,ye)}}break;case 5:kr(ne,ne.return);break;case 22:if(ne.memoizedState!==null){wc(se);continue}}ce!==null?(ce.return=ne,he=ce):wc(se)}re=re.sibling}e:for(re=null,se=e;;){if(se.tag===5){if(re===null){re=se;try{s=se.stateNode,V?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(E=se.stateNode,U=se.memoizedProps.style,m=U!=null&&U.hasOwnProperty("display")?U.display:null,E.style.display=Fe("display",m))}catch(ye){at(e,e.return,ye)}}}else if(se.tag===6){if(re===null)try{se.stateNode.nodeValue=V?"":se.memoizedProps}catch(ye){at(e,e.return,ye)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===e)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===e)break e;for(;se.sibling===null;){if(se.return===null||se.return===e)break e;re===se&&(re=null),se=se.return}re===se&&(re=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:on(t,e),gn(e),r&4&&gc(e);break;case 21:break;default:on(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hc(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(fe(s,""),r.flags&=-33);var l=pc(e);da(e,l,s);break;case 3:case 4:var m=r.stateNode.containerInfo,E=pc(e);ca(e,E,m);break;default:throw Error(u(161))}}catch(U){at(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ih(e,t,n){he=e,yc(e)}function yc(e,t,n){for(var r=(e.mode&1)!==0;he!==null;){var s=he,l=s.child;if(s.tag===22&&r){var m=s.memoizedState!==null||vs;if(!m){var E=s.alternate,U=E!==null&&E.memoizedState!==null||kt;E=vs;var V=kt;if(vs=m,(kt=U)&&!V)for(he=s;he!==null;)m=he,U=m.child,m.tag===22&&m.memoizedState!==null?Sc(s):U!==null?(U.return=m,he=U):Sc(s);for(;l!==null;)he=l,yc(l),l=l.sibling;he=s,vs=E,kt=V}_c(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,he=l):_c(e)}}function _c(e){for(;he!==null;){var t=he;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:kt||ys(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!kt)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:rn(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&wu(t,l,r);break;case 3:var m=t.updateQueue;if(m!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wu(t,m,n)}break;case 5:var E=t.stateNode;if(n===null&&t.flags&4){n=E;var U=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":U.autoFocus&&n.focus();break;case"img":U.src&&(n.src=U.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var V=t.alternate;if(V!==null){var re=V.memoizedState;if(re!==null){var se=re.dehydrated;se!==null&&qr(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}kt||t.flags&512&&ua(t)}catch(ne){at(t,t.return,ne)}}if(t===e){he=null;break}if(n=t.sibling,n!==null){n.return=t.return,he=n;break}he=t.return}}function wc(e){for(;he!==null;){var t=he;if(t===e){he=null;break}var n=t.sibling;if(n!==null){n.return=t.return,he=n;break}he=t.return}}function Sc(e){for(;he!==null;){var t=he;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ys(4,t)}catch(U){at(t,n,U)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(U){at(t,s,U)}}var l=t.return;try{ua(t)}catch(U){at(t,l,U)}break;case 5:var m=t.return;try{ua(t)}catch(U){at(t,m,U)}}}catch(U){at(t,t.return,U)}if(t===e){he=null;break}var E=t.sibling;if(E!==null){E.return=t.return,he=E;break}he=t.return}}var sh=Math.ceil,_s=de.ReactCurrentDispatcher,fa=de.ReactCurrentOwner,Kt=de.ReactCurrentBatchConfig,$e=0,xt=null,mt=null,Pt=0,Wt=0,Ir=Fn(0),vt=0,mi=null,ar=0,ws=0,ha=0,gi=null,Bt=null,pa=0,Dr=1/0,Un=null,Ss=!1,ma=null,qn=null,Ts=!1,jn=null,xs=0,vi=0,ga=null,Rs=-1,Es=0;function Dt(){return $e&6?ct():Rs!==-1?Rs:Rs=ct()}function Zn(e){return e.mode&1?$e&2&&Pt!==0?Pt&-Pt:Hf.transition!==null?(Es===0&&(Es=pl()),Es):(e=qe,e!==0||(e=window.event,e=e===void 0?16:xl(e.type)),e):1}function an(e,t,n,r){if(50<vi)throw vi=0,ga=null,Error(u(185));Gr(e,n,r),(!($e&2)||e!==xt)&&(e===xt&&(!($e&2)&&(ws|=n),vt===4&&Qn(e,Pt)),Ft(e,r),n===1&&$e===0&&!(t.mode&1)&&(Dr=ct()+500,Ji&&Hn()))}function Ft(e,t){var n=e.callbackNode;Gd(e,t);var r=Ii(e,e===xt?Pt:0);if(r===0)n!==null&&dl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dl(n),t===1)e.tag===0?Gf(xc.bind(null,e)):lu(xc.bind(null,e)),bf(function(){!($e&6)&&Hn()}),n=null;else{switch(ml(r)){case 1:n=Zs;break;case 4:n=fl;break;case 16:n=Ui;break;case 536870912:n=hl;break;default:n=Ui}n=zc(n,Tc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tc(e,t){if(Rs=-1,Es=0,$e&6)throw Error(u(327));var n=e.callbackNode;if(Or()&&e.callbackNode!==n)return null;var r=Ii(e,e===xt?Pt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ms(e,r);else{t=r;var s=$e;$e|=2;var l=Ec();(xt!==e||Pt!==t)&&(Un=null,Dr=ct()+500,ur(e,t));do try{lh();break}catch(E){Rc(e,E)}while(!0);Io(),_s.current=l,$e=s,mt!==null?t=0:(xt=null,Pt=0,t=vt)}if(t!==0){if(t===2&&(s=Qs(e),s!==0&&(r=s,t=va(e,s))),t===1)throw n=mi,ur(e,0),Qn(e,r),Ft(e,ct()),n;if(t===6)Qn(e,r);else{if(s=e.current.alternate,!(r&30)&&!oh(s)&&(t=Ms(e,r),t===2&&(l=Qs(e),l!==0&&(r=l,t=va(e,l))),t===1))throw n=mi,ur(e,0),Qn(e,r),Ft(e,ct()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:cr(e,Bt,Un);break;case 3:if(Qn(e,r),(r&130023424)===r&&(t=pa+500-ct(),10<t)){if(Ii(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Dt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=xo(cr.bind(null,e,Bt,Un),t);break}cr(e,Bt,Un);break;case 4:if(Qn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var m=31-en(r);l=1<<m,m=t[m],m>s&&(s=m),r&=~l}if(r=s,r=ct()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sh(r/1960))-r,10<r){e.timeoutHandle=xo(cr.bind(null,e,Bt,Un),r);break}cr(e,Bt,Un);break;case 5:cr(e,Bt,Un);break;default:throw Error(u(329))}}}return Ft(e,ct()),e.callbackNode===n?Tc.bind(null,e):null}function va(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(ur(e,t).flags|=256),e=Ms(e,t),e!==2&&(t=Bt,Bt=n,t!==null&&ya(t)),e}function ya(e){Bt===null?Bt=e:Bt.push.apply(Bt,e)}function oh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],l=s.getSnapshot;s=s.value;try{if(!tn(l(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t){for(t&=~ha,t&=~ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-en(t),r=1<<n;e[n]=-1,t&=~r}}function xc(e){if($e&6)throw Error(u(327));Or();var t=Ii(e,0);if(!(t&1))return Ft(e,ct()),null;var n=Ms(e,t);if(e.tag!==0&&n===2){var r=Qs(e);r!==0&&(t=r,n=va(e,r))}if(n===1)throw n=mi,ur(e,0),Qn(e,t),Ft(e,ct()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cr(e,Bt,Un),Ft(e,ct()),null}function _a(e,t){var n=$e;$e|=1;try{return e(t)}finally{$e=n,$e===0&&(Dr=ct()+500,Ji&&Hn())}}function lr(e){jn!==null&&jn.tag===0&&!($e&6)&&Or();var t=$e;$e|=1;var n=Kt.transition,r=qe;try{if(Kt.transition=null,qe=1,e)return e()}finally{qe=r,Kt.transition=n,$e=t,!($e&6)&&Hn()}}function wa(){Wt=Ir.current,Ye(Ir)}function ur(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Of(n)),mt!==null)for(n=mt.return;n!==null;){var r=n;switch(Lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:zr(),Ye(Ot),Ye(Ut),Ho();break;case 5:Fo(r);break;case 4:zr();break;case 13:Ye(st);break;case 19:Ye(st);break;case 10:Do(r.type._context);break;case 22:case 23:wa()}n=n.return}if(xt=e,mt=e=Xn(e.current,null),Pt=Wt=t,vt=0,mi=null,ha=ws=ar=0,Bt=gi=null,ir!==null){for(t=0;t<ir.length;t++)if(n=ir[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,l=n.pending;if(l!==null){var m=l.next;l.next=s,r.next=m}n.pending=r}ir=null}return e}function Rc(e,t){do{var n=mt;try{if(Io(),us.current=hs,cs){for(var r=ot.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}cs=!1}if(or=0,Tt=gt=ot=null,ui=!1,ci=0,fa.current=null,n===null||n.return===null){vt=1,mi=t,mt=null;break}e:{var l=e,m=n.return,E=n,U=t;if(t=Pt,E.flags|=32768,U!==null&&typeof U=="object"&&typeof U.then=="function"){var V=U,re=E,se=re.tag;if(!(re.mode&1)&&(se===0||se===11||se===15)){var ne=re.alternate;ne?(re.updateQueue=ne.updateQueue,re.memoizedState=ne.memoizedState,re.lanes=ne.lanes):(re.updateQueue=null,re.memoizedState=null)}var ce=Qu(m);if(ce!==null){ce.flags&=-257,Xu(ce,m,E,l,t),ce.mode&1&&Zu(l,V,t),t=ce,U=V;var ge=t.updateQueue;if(ge===null){var ye=new Set;ye.add(U),t.updateQueue=ye}else ge.add(U);break e}else{if(!(t&1)){Zu(l,V,t),Sa();break e}U=Error(u(426))}}else if(et&&E.mode&1){var dt=Qu(m);if(dt!==null){!(dt.flags&65536)&&(dt.flags|=256),Xu(dt,m,E,l,t),Co(Cr(U,E));break e}}l=U=Cr(U,E),vt!==4&&(vt=2),gi===null?gi=[l]:gi.push(l),l=m;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var b=qu(l,U,t);_u(l,b);break e;case 1:E=U;var D=l.type,N=l.stateNode;if(!(l.flags&128)&&(typeof D.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(qn===null||!qn.has(N)))){l.flags|=65536,t&=-t,l.lanes|=t;var ae=ju(l,E,t);_u(l,ae);break e}}l=l.return}while(l!==null)}Pc(n)}catch(we){t=we,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(!0)}function Ec(){var e=_s.current;return _s.current=hs,e===null?hs:e}function Sa(){(vt===0||vt===3||vt===2)&&(vt=4),xt===null||!(ar&268435455)&&!(ws&268435455)||Qn(xt,Pt)}function Ms(e,t){var n=$e;$e|=2;var r=Ec();(xt!==e||Pt!==t)&&(Un=null,ur(e,t));do try{ah();break}catch(s){Rc(e,s)}while(!0);if(Io(),$e=n,_s.current=r,mt!==null)throw Error(u(261));return xt=null,Pt=0,vt}function ah(){for(;mt!==null;)Mc(mt)}function lh(){for(;mt!==null&&!Cd();)Mc(mt)}function Mc(e){var t=Uc(e.alternate,e,Wt);e.memoizedProps=e.pendingProps,t===null?Pc(e):mt=t,fa.current=null}function Pc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=th(n,t),n!==null){n.flags&=32767,mt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{vt=6,mt=null;return}}else if(n=eh(n,t,Wt),n!==null){mt=n;return}if(t=t.sibling,t!==null){mt=t;return}mt=t=e}while(t!==null);vt===0&&(vt=5)}function cr(e,t,n){var r=qe,s=Kt.transition;try{Kt.transition=null,qe=1,uh(e,t,n,r)}finally{Kt.transition=s,qe=r}return null}function uh(e,t,n,r){do Or();while(jn!==null);if($e&6)throw Error(u(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Hd(e,l),e===xt&&(mt=xt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ts||(Ts=!0,zc(Ui,function(){return Or(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Kt.transition,Kt.transition=null;var m=qe;qe=1;var E=$e;$e|=4,fa.current=null,rh(e,n),vc(n,e),Lf(So),bi=!!wo,So=wo=null,e.current=n,ih(n),kd(),$e=E,qe=m,Kt.transition=l}else e.current=n;if(Ts&&(Ts=!1,jn=e,xs=s),l=e.pendingLanes,l===0&&(qn=null),Od(n.stateNode),Ft(e,ct()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ss)throw Ss=!1,e=ma,ma=null,e;return xs&1&&e.tag!==0&&Or(),l=e.pendingLanes,l&1?e===ga?vi++:(vi=0,ga=e):vi=0,Hn(),null}function Or(){if(jn!==null){var e=ml(xs),t=Kt.transition,n=qe;try{if(Kt.transition=null,qe=16>e?16:e,jn===null)var r=!1;else{if(e=jn,jn=null,xs=0,$e&6)throw Error(u(331));var s=$e;for($e|=4,he=e.current;he!==null;){var l=he,m=l.child;if(he.flags&16){var E=l.deletions;if(E!==null){for(var U=0;U<E.length;U++){var V=E[U];for(he=V;he!==null;){var re=he;switch(re.tag){case 0:case 11:case 15:pi(8,re,l)}var se=re.child;if(se!==null)se.return=re,he=se;else for(;he!==null;){re=he;var ne=re.sibling,ce=re.return;if(fc(re),re===V){he=null;break}if(ne!==null){ne.return=ce,he=ne;break}he=ce}}}var ge=l.alternate;if(ge!==null){var ye=ge.child;if(ye!==null){ge.child=null;do{var dt=ye.sibling;ye.sibling=null,ye=dt}while(ye!==null)}}he=l}}if(l.subtreeFlags&2064&&m!==null)m.return=l,he=m;else e:for(;he!==null;){if(l=he,l.flags&2048)switch(l.tag){case 0:case 11:case 15:pi(9,l,l.return)}var b=l.sibling;if(b!==null){b.return=l.return,he=b;break e}he=l.return}}var D=e.current;for(he=D;he!==null;){m=he;var N=m.child;if(m.subtreeFlags&2064&&N!==null)N.return=m,he=N;else e:for(m=D;he!==null;){if(E=he,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:ys(9,E)}}catch(we){at(E,E.return,we)}if(E===m){he=null;break e}var ae=E.sibling;if(ae!==null){ae.return=E.return,he=ae;break e}he=E.return}}if($e=s,Hn(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(zi,e)}catch{}r=!0}return r}finally{qe=n,Kt.transition=t}}return!1}function Ac(e,t,n){t=Cr(n,t),t=qu(e,t,1),e=$n(e,t,1),t=Dt(),e!==null&&(Gr(e,1,t),Ft(e,t))}function at(e,t,n){if(e.tag===3)Ac(e,e,n);else for(;t!==null;){if(t.tag===3){Ac(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){e=Cr(n,e),e=ju(t,e,1),t=$n(t,e,1),e=Dt(),t!==null&&(Gr(t,1,e),Ft(t,e));break}}t=t.return}}function ch(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Dt(),e.pingedLanes|=e.suspendedLanes&n,xt===e&&(Pt&n)===n&&(vt===4||vt===3&&(Pt&130023424)===Pt&&500>ct()-pa?ur(e,0):ha|=n),Ft(e,t)}function Lc(e,t){t===0&&(e.mode&1?(t=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):t=1);var n=Dt();e=Pn(e,t),e!==null&&(Gr(e,t,n),Ft(e,n))}function dh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lc(e,n)}function fh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Lc(e,n)}var Uc;Uc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ot.current)Nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Nt=!1,Jf(e,t,n);Nt=!!(e.flags&131072)}else Nt=!1,et&&t.flags&1048576&&uu(t,ts,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gs(e,t),e=t.pendingProps;var s=Rr(t,Ut.current);Ur(t,n),s=Wo(null,t,r,e,s,n);var l=qo();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(l=!0,Ki(t)):l=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,No(t),s.updater=ps,t.stateNode=s,s._reactInternals=t,Ko(t,r,e,n),t=na(null,t,r,!0,l,n)):(t.tag=0,et&&l&&Ao(t),It(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gs(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=ph(r),e=rn(r,e),s){case 0:t=ta(null,t,r,e,n);break e;case 1:t=nc(null,t,r,e,n);break e;case 11:t=Yu(null,t,r,e,n);break e;case 14:t=Ku(null,t,r,rn(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:rn(r,s),ta(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:rn(r,s),nc(e,t,r,s,n);case 3:e:{if(rc(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,s=l.element,yu(e,t),as(t,r,null,n);var m=t.memoizedState;if(r=m.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){s=Cr(Error(u(423)),t),t=ic(e,t,r,n,s);break e}else if(r!==s){s=Cr(Error(u(424)),t),t=ic(e,t,r,n,s);break e}else for($t=Bn(t.stateNode.containerInfo.firstChild),Vt=t,et=!0,nn=null,n=gu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pr(),r===s){t=Ln(e,t,n);break e}It(e,t,r,n)}t=t.child}return t;case 5:return Su(t),e===null&&zo(t),r=t.type,s=t.pendingProps,l=e!==null?e.memoizedProps:null,m=s.children,To(r,s)?m=null:l!==null&&To(r,l)&&(t.flags|=32),tc(e,t),It(e,t,m,n),t.child;case 6:return e===null&&zo(t),null;case 13:return sc(e,t,n);case 4:return Bo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):It(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:rn(r,s),Yu(e,t,r,s,n);case 7:return It(e,t,t.pendingProps,n),t.child;case 8:return It(e,t,t.pendingProps.children,n),t.child;case 12:return It(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,l=t.memoizedProps,m=s.value,Qe(is,r._currentValue),r._currentValue=m,l!==null)if(tn(l.value,m)){if(l.children===s.children&&!Ot.current){t=Ln(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var E=l.dependencies;if(E!==null){m=l.child;for(var U=E.firstContext;U!==null;){if(U.context===r){if(l.tag===1){U=An(-1,n&-n),U.tag=2;var V=l.updateQueue;if(V!==null){V=V.shared;var re=V.pending;re===null?U.next=U:(U.next=re.next,re.next=U),V.pending=U}}l.lanes|=n,U=l.alternate,U!==null&&(U.lanes|=n),Oo(l.return,n,t),E.lanes|=n;break}U=U.next}}else if(l.tag===10)m=l.type===t.type?null:l.child;else if(l.tag===18){if(m=l.return,m===null)throw Error(u(341));m.lanes|=n,E=m.alternate,E!==null&&(E.lanes|=n),Oo(m,n,t),m=l.sibling}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===t){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}It(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Ur(t,n),s=Xt(s),r=r(s),t.flags|=1,It(e,t,r,n),t.child;case 14:return r=t.type,s=rn(r,t.pendingProps),s=rn(r.type,s),Ku(e,t,r,s,n);case 15:return Ju(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:rn(r,s),gs(e,t),t.tag=1,bt(r)?(e=!0,Ki(t)):e=!1,Ur(t,n),$u(t,r,s),Ko(t,r,s,n),na(null,t,r,!0,e,n);case 19:return ac(e,t,n);case 22:return ec(e,t,n)}throw Error(u(156,t.tag))};function zc(e,t){return cl(e,t)}function hh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,r){return new hh(e,t,n,r)}function Ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ph(e){if(typeof e=="function")return Ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ee)return 11;if(e===Ke)return 14}return 2}function Xn(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ps(e,t,n,r,s,l){var m=2;if(r=e,typeof e=="function")Ta(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case Ne:return dr(n.children,s,l,t);case Be:m=8,s|=8;break;case De:return e=Jt(12,n,t,s|2),e.elementType=De,e.lanes=l,e;case ze:return e=Jt(13,n,t,s),e.elementType=ze,e.lanes=l,e;case Se:return e=Jt(19,n,t,s),e.elementType=Se,e.lanes=l,e;case He:return As(n,s,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ke:m=10;break e;case je:m=9;break e;case Ee:m=11;break e;case Ke:m=14;break e;case Ve:m=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=Jt(m,n,t,s),t.elementType=e,t.type=r,t.lanes=l,t}function dr(e,t,n,r){return e=Jt(7,e,r,t),e.lanes=n,e}function As(e,t,n,r){return e=Jt(22,e,r,t),e.elementType=He,e.lanes=n,e.stateNode={isHidden:!1},e}function xa(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function Ra(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mh(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xs(0),this.expirationTimes=Xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ea(e,t,n,r,s,l,m,E,U){return e=new mh(e,t,n,E,U),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Jt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},No(l),e}function gh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cc(e){if(!e)return Gn;e=e._reactInternals;e:{if(Je(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(bt(n))return ou(e,n,t)}return t}function kc(e,t,n,r,s,l,m,E,U){return e=Ea(n,r,!0,e,s,l,m,E,U),e.context=Cc(null),n=e.current,r=Dt(),s=Zn(n),l=An(r,s),l.callback=t??null,$n(n,l,s),e.current.lanes=s,Gr(e,s,r),Ft(e,r),e}function Ls(e,t,n,r){var s=t.current,l=Dt(),m=Zn(s);return n=Cc(n),t.context===null?t.context=n:t.pendingContext=n,t=An(l,m),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$n(s,t,m),e!==null&&(an(e,s,m,l),os(e,s,m)),m}function Us(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ic(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ma(e,t){Ic(e,t),(e=e.alternate)&&Ic(e,t)}var Dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pa(e){this._internalRoot=e}zs.prototype.render=Pa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Ls(e,t,null,null)},zs.prototype.unmount=Pa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){Ls(null,e,null,null)}),t[xn]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=yl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<On.length&&t!==0&&t<On[n].priority;n++);On.splice(n,0,e),n===0&&Sl(e)}};function Aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oc(){}function vh(e,t,n,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var V=Us(m);l.call(V)}}var m=kc(t,r,e,0,null,!1,!1,"",Oc);return e._reactRootContainer=m,e[xn]=m.current,ti(e.nodeType===8?e.parentNode:e),lr(),m}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var E=r;r=function(){var V=Us(U);E.call(V)}}var U=Ea(e,0,!1,null,null,!1,!1,"",Oc);return e._reactRootContainer=U,e[xn]=U.current,ti(e.nodeType===8?e.parentNode:e),lr(function(){Ls(t,U,n,r)}),U}function ks(e,t,n,r,s){var l=n._reactRootContainer;if(l){var m=l;if(typeof s=="function"){var E=s;s=function(){var U=Us(m);E.call(U)}}Ls(t,m,e,s)}else m=vh(n,t,e,s,r);return Us(m)}gl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fr(t.pendingLanes);n!==0&&(Ys(t,n|1),Ft(t,ct()),!($e&6)&&(Dr=ct()+500,Hn()))}break;case 13:lr(function(){var r=Pn(e,1);if(r!==null){var s=Dt();an(r,e,1,s)}}),Ma(e,1)}},Ks=function(e){if(e.tag===13){var t=Pn(e,134217728);if(t!==null){var n=Dt();an(t,e,134217728,n)}Ma(e,134217728)}},vl=function(e){if(e.tag===13){var t=Zn(e),n=Pn(e,t);if(n!==null){var r=Dt();an(n,e,t,r)}Ma(e,t)}},yl=function(){return qe},_l=function(e,t){var n=qe;try{return qe=e,t()}finally{qe=n}},pt=function(e,t,n){switch(t){case"input":if(h(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Xi(r);if(!s)throw Error(u(90));P(r),h(r,s)}}}break;case"textarea":I(e,n);break;case"select":t=n.value,t!=null&&y(e,!!n.multiple,t,!1)}},St=_a,At=lr;var yh={usingClientEntryPoint:!1,Events:[ii,Tr,Xi,_t,wt,_a]},yi={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_h={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ll(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Is.isDisabled&&Is.supportsFiber)try{zi=Is.inject(_h),fn=Is}catch{}}return Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yh,Gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Aa(t))throw Error(u(200));return gh(e,t,null,n)},Gt.createRoot=function(e,t){if(!Aa(e))throw Error(u(299));var n=!1,r="",s=Dc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ea(e,1,!1,null,null,n,!1,r,s),e[xn]=t.current,ti(e.nodeType===8?e.parentNode:e),new Pa(t)},Gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=ll(t),e=e===null?null:e.stateNode,e},Gt.flushSync=function(e){return lr(e)},Gt.hydrate=function(e,t,n){if(!Cs(t))throw Error(u(200));return ks(null,e,t,!0,n)},Gt.hydrateRoot=function(e,t,n){if(!Aa(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,s=!1,l="",m=Dc;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),t=kc(t,null,e,1,n??null,s,!1,l,m),e[xn]=t.current,ti(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new zs(t)},Gt.render=function(e,t,n){if(!Cs(t))throw Error(u(200));return ks(null,e,t,!1,n)},Gt.unmountComponentAtNode=function(e){if(!Cs(e))throw Error(u(40));return e._reactRootContainer?(lr(function(){ks(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1},Gt.unstable_batchedUpdates=_a,Gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cs(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return ks(e,t,n,!1,r)},Gt.version="18.3.1-next-f1338f8080-20240426",Gt}var $c;function hd(){if($c)return za.exports;$c=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),za.exports=Ah(),za.exports}var Wc;function Lh(){if(Wc)return Ds;Wc=1;var o=hd();return Ds.createRoot=o.createRoot,Ds.hydrateRoot=o.hydrateRoot,Ds}var Uh=Lh(),wi={},qc;function zh(){if(qc)return wi;qc=1,Object.defineProperty(wi,"__esModule",{value:!0}),wi.parse=M,wi.serialize=z;const o=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,g=/^[\u0020-\u003A\u003D-\u007E]*$/,_=Object.prototype.toString,T=(()=>{const $=function(){};return $.prototype=Object.create(null),$})();function M($,te){const X=new T,K=$.length;if(K<2)return X;const J=(te==null?void 0:te.decode)||W;let F=0;do{const q=$.indexOf("=",F);if(q===-1)break;const ue=$.indexOf(";",F),de=ue===-1?K:ue;if(q>de){F=$.lastIndexOf(";",q-1)+1;continue}const Pe=L($,F,q),Ie=A($,q,Pe),Ne=$.slice(Pe,Ie);if(X[Ne]===void 0){let Be=L($,q+1,de),De=A($,de,Be);const ke=J($.slice(Be,De));X[Ne]=ke}F=de+1}while(F<K);return X}function L($,te,X){do{const K=$.charCodeAt(te);if(K!==32&&K!==9)return te}while(++te<X);return X}function A($,te,X){for(;te>X;){const K=$.charCodeAt(--te);if(K!==32&&K!==9)return te+1}return X}function z($,te,X){const K=(X==null?void 0:X.encode)||encodeURIComponent;if(!o.test($))throw new TypeError(`argument name is invalid: ${$}`);const J=K(te);if(!i.test(J))throw new TypeError(`argument val is invalid: ${te}`);let F=$+"="+J;if(!X)return F;if(X.maxAge!==void 0){if(!Number.isInteger(X.maxAge))throw new TypeError(`option maxAge is invalid: ${X.maxAge}`);F+="; Max-Age="+X.maxAge}if(X.domain){if(!u.test(X.domain))throw new TypeError(`option domain is invalid: ${X.domain}`);F+="; Domain="+X.domain}if(X.path){if(!g.test(X.path))throw new TypeError(`option path is invalid: ${X.path}`);F+="; Path="+X.path}if(X.expires){if(!Q(X.expires)||!Number.isFinite(X.expires.valueOf()))throw new TypeError(`option expires is invalid: ${X.expires}`);F+="; Expires="+X.expires.toUTCString()}if(X.httpOnly&&(F+="; HttpOnly"),X.secure&&(F+="; Secure"),X.partitioned&&(F+="; Partitioned"),X.priority)switch(typeof X.priority=="string"?X.priority.toLowerCase():void 0){case"low":F+="; Priority=Low";break;case"medium":F+="; Priority=Medium";break;case"high":F+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${X.priority}`)}if(X.sameSite)switch(typeof X.sameSite=="string"?X.sameSite.toLowerCase():X.sameSite){case!0:case"strict":F+="; SameSite=Strict";break;case"lax":F+="; SameSite=Lax";break;case"none":F+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${X.sameSite}`)}return F}function W($){if($.indexOf("%")===-1)return $;try{return decodeURIComponent($)}catch{return $}}function Q($){return _.call($)==="[object Date]"}return wi}zh();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var jc="popstate";function Ch(o={}){function i(_,T){let{pathname:M="/",search:L="",hash:A=""}=fr(_.location.hash.substring(1));return!M.startsWith("/")&&!M.startsWith(".")&&(M="/"+M),Fa("",{pathname:M,search:L,hash:A},T.state&&T.state.usr||null,T.state&&T.state.key||"default")}function u(_,T){let M=_.document.querySelector("base"),L="";if(M&&M.getAttribute("href")){let A=_.location.href,z=A.indexOf("#");L=z===-1?A:A.slice(0,z)}return L+"#"+(typeof T=="string"?T:Ti(T))}function g(_,T){jt(_.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(T)})`)}return Ih(i,u,g,o)}function tt(o,i){if(o===!1||o===null||typeof o>"u")throw new Error(i)}function jt(o,i){if(!o){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function kh(){return Math.random().toString(36).substring(2,10)}function Zc(o,i){return{usr:o.state,key:o.key,idx:i}}function Fa(o,i,u=null,g){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof i=="string"?fr(i):i,state:u,key:i&&i.key||g||kh()}}function Ti({pathname:o="/",search:i="",hash:u=""}){return i&&i!=="?"&&(o+=i.charAt(0)==="?"?i:"?"+i),u&&u!=="#"&&(o+=u.charAt(0)==="#"?u:"#"+u),o}function fr(o){let i={};if(o){let u=o.indexOf("#");u>=0&&(i.hash=o.substring(u),o=o.substring(0,u));let g=o.indexOf("?");g>=0&&(i.search=o.substring(g),o=o.substring(0,g)),o&&(i.pathname=o)}return i}function Ih(o,i,u,g={}){let{window:_=document.defaultView,v5Compat:T=!1}=g,M=_.history,L="POP",A=null,z=W();z==null&&(z=0,M.replaceState({...M.state,idx:z},""));function W(){return(M.state||{idx:null}).idx}function Q(){L="POP";let J=W(),F=J==null?null:J-z;z=J,A&&A({action:L,location:K.location,delta:F})}function $(J,F){L="PUSH";let q=Fa(K.location,J,F);u(q,J),z=W()+1;let ue=Zc(q,z),de=K.createHref(q);try{M.pushState(ue,"",de)}catch(Pe){if(Pe instanceof DOMException&&Pe.name==="DataCloneError")throw Pe;_.location.assign(de)}T&&A&&A({action:L,location:K.location,delta:1})}function te(J,F){L="REPLACE";let q=Fa(K.location,J,F);u(q,J),z=W();let ue=Zc(q,z),de=K.createHref(q);M.replaceState(ue,"",de),T&&A&&A({action:L,location:K.location,delta:0})}function X(J){let F=_.location.origin!=="null"?_.location.origin:_.location.href,q=typeof J=="string"?J:Ti(J);return q=q.replace(/ $/,"%20"),tt(F,`No window.location.(origin|href) available to create URL for href: ${q}`),new URL(q,F)}let K={get action(){return L},get location(){return o(_,M)},listen(J){if(A)throw new Error("A history only accepts one active listener");return _.addEventListener(jc,Q),A=J,()=>{_.removeEventListener(jc,Q),A=null}},createHref(J){return i(_,J)},createURL:X,encodeLocation(J){let F=X(J);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:$,replace:te,go(J){return M.go(J)}};return K}function pd(o,i,u="/"){return Dh(o,i,u,!1)}function Dh(o,i,u,g){let _=typeof i=="string"?fr(i):i,T=Jn(_.pathname||"/",u);if(T==null)return null;let M=md(o);Oh(M);let L=null;for(let A=0;L==null&&A<M.length;++A){let z=jh(T);L=Wh(M[A],z,g)}return L}function md(o,i=[],u=[],g=""){let _=(T,M,L)=>{let A={relativePath:L===void 0?T.path||"":L,caseSensitive:T.caseSensitive===!0,childrenIndex:M,route:T};A.relativePath.startsWith("/")&&(tt(A.relativePath.startsWith(g),`Absolute route path "${A.relativePath}" nested under path "${g}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(g.length));let z=zn([g,A.relativePath]),W=u.concat(A);T.children&&T.children.length>0&&(tt(T.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${z}".`),md(T.children,i,W,z)),!(T.path==null&&!T.index)&&i.push({path:z,score:Vh(z,T.index),routesMeta:W})};return o.forEach((T,M)=>{var L;if(T.path===""||!((L=T.path)!=null&&L.includes("?")))_(T,M);else for(let A of gd(T.path))_(T,M,A)}),i}function gd(o){let i=o.split("/");if(i.length===0)return[];let[u,...g]=i,_=u.endsWith("?"),T=u.replace(/\?$/,"");if(g.length===0)return _?[T,""]:[T];let M=gd(g.join("/")),L=[];return L.push(...M.map(A=>A===""?T:[T,A].join("/"))),_&&L.push(...M),L.map(A=>o.startsWith("/")&&A===""?"/":A)}function Oh(o){o.sort((i,u)=>i.score!==u.score?u.score-i.score:$h(i.routesMeta.map(g=>g.childrenIndex),u.routesMeta.map(g=>g.childrenIndex)))}var bh=/^:[\w-]+$/,Nh=3,Bh=2,Fh=1,Gh=10,Hh=-2,Qc=o=>o==="*";function Vh(o,i){let u=o.split("/"),g=u.length;return u.some(Qc)&&(g+=Hh),i&&(g+=Bh),u.filter(_=>!Qc(_)).reduce((_,T)=>_+(bh.test(T)?Nh:T===""?Fh:Gh),g)}function $h(o,i){return o.length===i.length&&o.slice(0,-1).every((g,_)=>g===i[_])?o[o.length-1]-i[i.length-1]:0}function Wh(o,i,u=!1){let{routesMeta:g}=o,_={},T="/",M=[];for(let L=0;L<g.length;++L){let A=g[L],z=L===g.length-1,W=T==="/"?i:i.slice(T.length)||"/",Q=Vs({path:A.relativePath,caseSensitive:A.caseSensitive,end:z},W),$=A.route;if(!Q&&z&&u&&!g[g.length-1].route.index&&(Q=Vs({path:A.relativePath,caseSensitive:A.caseSensitive,end:!1},W)),!Q)return null;Object.assign(_,Q.params),M.push({params:_,pathname:zn([T,Q.pathname]),pathnameBase:Yh(zn([T,Q.pathnameBase])),route:$}),Q.pathnameBase!=="/"&&(T=zn([T,Q.pathnameBase]))}return M}function Vs(o,i){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[u,g]=qh(o.path,o.caseSensitive,o.end),_=i.match(u);if(!_)return null;let T=_[0],M=T.replace(/(.)\/+$/,"$1"),L=_.slice(1);return{params:g.reduce((z,{paramName:W,isOptional:Q},$)=>{if(W==="*"){let X=L[$]||"";M=T.slice(0,T.length-X.length).replace(/(.)\/+$/,"$1")}const te=L[$];return Q&&!te?z[W]=void 0:z[W]=(te||"").replace(/%2F/g,"/"),z},{}),pathname:T,pathnameBase:M,pattern:o}}function qh(o,i=!1,u=!0){jt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let g=[],_="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(M,L,A)=>(g.push({paramName:L,isOptional:A!=null}),A?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(g.push({paramName:"*"}),_+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?_+="\\/*$":o!==""&&o!=="/"&&(_+="(?:(?=\\/|$))"),[new RegExp(_,i?void 0:"i"),g]}function jh(o){try{return o.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return jt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),o}}function Jn(o,i){if(i==="/")return o;if(!o.toLowerCase().startsWith(i.toLowerCase()))return null;let u=i.endsWith("/")?i.length-1:i.length,g=o.charAt(u);return g&&g!=="/"?null:o.slice(u)||"/"}function Zh(o,i="/"){let{pathname:u,search:g="",hash:_=""}=typeof o=="string"?fr(o):o;return{pathname:u?u.startsWith("/")?u:Qh(u,i):i,search:Kh(g),hash:Jh(_)}}function Qh(o,i){let u=i.replace(/\/+$/,"").split("/");return o.split("/").forEach(_=>{_===".."?u.length>1&&u.pop():_!=="."&&u.push(_)}),u.length>1?u.join("/"):"/"}function Ia(o,i,u,g){return`Cannot include a '${o}' character in a manually specified \`to.${i}\` field [${JSON.stringify(g)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Xh(o){return o.filter((i,u)=>u===0||i.route.path&&i.route.path.length>0)}function Xa(o){let i=Xh(o);return i.map((u,g)=>g===i.length-1?u.pathname:u.pathnameBase)}function Ya(o,i,u,g=!1){let _;typeof o=="string"?_=fr(o):(_={...o},tt(!_.pathname||!_.pathname.includes("?"),Ia("?","pathname","search",_)),tt(!_.pathname||!_.pathname.includes("#"),Ia("#","pathname","hash",_)),tt(!_.search||!_.search.includes("#"),Ia("#","search","hash",_)));let T=o===""||_.pathname==="",M=T?"/":_.pathname,L;if(M==null)L=u;else{let Q=i.length-1;if(!g&&M.startsWith("..")){let $=M.split("/");for(;$[0]==="..";)$.shift(),Q-=1;_.pathname=$.join("/")}L=Q>=0?i[Q]:"/"}let A=Zh(_,L),z=M&&M!=="/"&&M.endsWith("/"),W=(T||M===".")&&u.endsWith("/");return!A.pathname.endsWith("/")&&(z||W)&&(A.pathname+="/"),A}var zn=o=>o.join("/").replace(/\/\/+/g,"/"),Yh=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Kh=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Jh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function ep(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var vd=["POST","PUT","PATCH","DELETE"];new Set(vd);var tp=["GET",...vd];new Set(tp);var Nr=j.createContext(null);Nr.displayName="DataRouter";var $s=j.createContext(null);$s.displayName="DataRouterState";var yd=j.createContext({isTransitioning:!1});yd.displayName="ViewTransition";var np=j.createContext(new Map);np.displayName="Fetchers";var rp=j.createContext(null);rp.displayName="Await";var ln=j.createContext(null);ln.displayName="Navigation";var Ri=j.createContext(null);Ri.displayName="Location";var _n=j.createContext({outlet:null,matches:[],isDataRoute:!1});_n.displayName="Route";var Ka=j.createContext(null);Ka.displayName="RouteError";function ip(o,{relative:i}={}){tt(Br(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:g}=j.useContext(ln),{hash:_,pathname:T,search:M}=Mi(o,{relative:i}),L=T;return u!=="/"&&(L=T==="/"?u:zn([u,T])),g.createHref({pathname:L,search:M,hash:_})}function Br(){return j.useContext(Ri)!=null}function wn(){return tt(Br(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Ri).location}var _d="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wd(o){j.useContext(ln).static||j.useLayoutEffect(o)}function Ei(){let{isDataRoute:o}=j.useContext(_n);return o?vp():sp()}function sp(){tt(Br(),"useNavigate() may be used only in the context of a <Router> component.");let o=j.useContext(Nr),{basename:i,navigator:u}=j.useContext(ln),{matches:g}=j.useContext(_n),{pathname:_}=wn(),T=JSON.stringify(Xa(g)),M=j.useRef(!1);return wd(()=>{M.current=!0}),j.useCallback((A,z={})=>{if(jt(M.current,_d),!M.current)return;if(typeof A=="number"){u.go(A);return}let W=Ya(A,JSON.parse(T),_,z.relative==="path");o==null&&i!=="/"&&(W.pathname=W.pathname==="/"?i:zn([i,W.pathname])),(z.replace?u.replace:u.push)(W,z.state,z)},[i,u,T,_,o])}j.createContext(null);function Mi(o,{relative:i}={}){let{matches:u}=j.useContext(_n),{pathname:g}=wn(),_=JSON.stringify(Xa(u));return j.useMemo(()=>Ya(o,JSON.parse(_),g,i==="path"),[o,_,g,i])}function op(o,i){return Sd(o,i)}function Sd(o,i,u,g){var F;tt(Br(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:_}=j.useContext(ln),{matches:T}=j.useContext(_n),M=T[T.length-1],L=M?M.params:{},A=M?M.pathname:"/",z=M?M.pathnameBase:"/",W=M&&M.route;{let q=W&&W.path||"";Td(A,!W||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${A}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let Q=wn(),$;if(i){let q=typeof i=="string"?fr(i):i;tt(z==="/"||((F=q.pathname)==null?void 0:F.startsWith(z)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${z}" but pathname "${q.pathname}" was given in the \`location\` prop.`),$=q}else $=Q;let te=$.pathname||"/",X=te;if(z!=="/"){let q=z.replace(/^\//,"").split("/");X="/"+te.replace(/^\//,"").split("/").slice(q.length).join("/")}let K=pd(o,{pathname:X});jt(W||K!=null,`No routes matched location "${$.pathname}${$.search}${$.hash}" `),jt(K==null||K[K.length-1].route.element!==void 0||K[K.length-1].route.Component!==void 0||K[K.length-1].route.lazy!==void 0,`Matched leaf route at location "${$.pathname}${$.search}${$.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let J=dp(K&&K.map(q=>Object.assign({},q,{params:Object.assign({},L,q.params),pathname:zn([z,_.encodeLocation?_.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?z:zn([z,_.encodeLocation?_.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),T,u,g);return i&&J?j.createElement(Ri.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...$},navigationType:"POP"}},J):J}function ap(){let o=gp(),i=ep(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),u=o instanceof Error?o.stack:null,g="rgba(200,200,200, 0.5)",_={padding:"0.5rem",backgroundColor:g},T={padding:"2px 4px",backgroundColor:g},M=null;return console.error("Error handled by React Router default ErrorBoundary:",o),M=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:T},"ErrorBoundary")," or"," ",j.createElement("code",{style:T},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},i),u?j.createElement("pre",{style:_},u):null,M)}var lp=j.createElement(ap,null),up=class extends j.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,i){return i.location!==o.location||i.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:i.error,location:i.location,revalidation:o.revalidation||i.revalidation}}componentDidCatch(o,i){console.error("React Router caught the following error during render",o,i)}render(){return this.state.error!==void 0?j.createElement(_n.Provider,{value:this.props.routeContext},j.createElement(Ka.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function cp({routeContext:o,match:i,children:u}){let g=j.useContext(Nr);return g&&g.static&&g.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(g.staticContext._deepestRenderedBoundaryId=i.route.id),j.createElement(_n.Provider,{value:o},u)}function dp(o,i=[],u=null,g=null){if(o==null){if(!u)return null;if(u.errors)o=u.matches;else if(i.length===0&&!u.initialized&&u.matches.length>0)o=u.matches;else return null}let _=o,T=u==null?void 0:u.errors;if(T!=null){let A=_.findIndex(z=>z.route.id&&(T==null?void 0:T[z.route.id])!==void 0);tt(A>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(T).join(",")}`),_=_.slice(0,Math.min(_.length,A+1))}let M=!1,L=-1;if(u)for(let A=0;A<_.length;A++){let z=_[A];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(L=A),z.route.id){let{loaderData:W,errors:Q}=u,$=z.route.loader&&!W.hasOwnProperty(z.route.id)&&(!Q||Q[z.route.id]===void 0);if(z.route.lazy||$){M=!0,L>=0?_=_.slice(0,L+1):_=[_[0]];break}}}return _.reduceRight((A,z,W)=>{let Q,$=!1,te=null,X=null;u&&(Q=T&&z.route.id?T[z.route.id]:void 0,te=z.route.errorElement||lp,M&&(L<0&&W===0?(Td("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),$=!0,X=null):L===W&&($=!0,X=z.route.hydrateFallbackElement||null)));let K=i.concat(_.slice(0,W+1)),J=()=>{let F;return Q?F=te:$?F=X:z.route.Component?F=j.createElement(z.route.Component,null):z.route.element?F=z.route.element:F=A,j.createElement(cp,{match:z,routeContext:{outlet:A,matches:K,isDataRoute:u!=null},children:F})};return u&&(z.route.ErrorBoundary||z.route.errorElement||W===0)?j.createElement(up,{location:u.location,revalidation:u.revalidation,component:te,error:Q,children:J(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):J()},null)}function Ja(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fp(o){let i=j.useContext(Nr);return tt(i,Ja(o)),i}function hp(o){let i=j.useContext($s);return tt(i,Ja(o)),i}function pp(o){let i=j.useContext(_n);return tt(i,Ja(o)),i}function el(o){let i=pp(o),u=i.matches[i.matches.length-1];return tt(u.route.id,`${o} can only be used on routes that contain a unique "id"`),u.route.id}function mp(){return el("useRouteId")}function gp(){var g;let o=j.useContext(Ka),i=hp("useRouteError"),u=el("useRouteError");return o!==void 0?o:(g=i.errors)==null?void 0:g[u]}function vp(){let{router:o}=fp("useNavigate"),i=el("useNavigate"),u=j.useRef(!1);return wd(()=>{u.current=!0}),j.useCallback(async(_,T={})=>{jt(u.current,_d),u.current&&(typeof _=="number"?o.navigate(_):await o.navigate(_,{fromRouteId:i,...T}))},[o,i])}var Xc={};function Td(o,i,u){!i&&!Xc[o]&&(Xc[o]=!0,jt(!1,u))}j.memo(yp);function yp({routes:o,future:i,state:u}){return Sd(o,void 0,u,i)}function _p({to:o,replace:i,state:u,relative:g}){tt(Br(),"<Navigate> may be used only in the context of a <Router> component.");let{static:_}=j.useContext(ln);jt(!_,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:T}=j.useContext(_n),{pathname:M}=wn(),L=Ei(),A=Ya(o,Xa(T),M,g==="path"),z=JSON.stringify(A);return j.useEffect(()=>{L(JSON.parse(z),{replace:i,state:u,relative:g})},[L,z,g,i,u]),null}function Bs(o){tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wp({basename:o="/",children:i=null,location:u,navigationType:g="POP",navigator:_,static:T=!1}){tt(!Br(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let M=o.replace(/^\/*/,"/"),L=j.useMemo(()=>({basename:M,navigator:_,static:T,future:{}}),[M,_,T]);typeof u=="string"&&(u=fr(u));let{pathname:A="/",search:z="",hash:W="",state:Q=null,key:$="default"}=u,te=j.useMemo(()=>{let X=Jn(A,M);return X==null?null:{location:{pathname:X,search:z,hash:W,state:Q,key:$},navigationType:g}},[M,A,z,W,Q,$,g]);return jt(te!=null,`<Router basename="${M}"> is not able to match the URL "${A}${z}${W}" because it does not start with the basename, so the <Router> won't render anything.`),te==null?null:j.createElement(ln.Provider,{value:L},j.createElement(Ri.Provider,{children:i,value:te}))}function Sp({children:o,location:i}){return op(Ga(o),i)}function Ga(o,i=[]){let u=[];return j.Children.forEach(o,(g,_)=>{if(!j.isValidElement(g))return;let T=[...i,_];if(g.type===j.Fragment){u.push.apply(u,Ga(g.props.children,T));return}tt(g.type===Bs,`[${typeof g.type=="string"?g.type:g.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tt(!g.props.index||!g.props.children,"An index route cannot have child routes.");let M={id:g.props.id||T.join("-"),caseSensitive:g.props.caseSensitive,element:g.props.element,Component:g.props.Component,index:g.props.index,path:g.props.path,loader:g.props.loader,action:g.props.action,hydrateFallbackElement:g.props.hydrateFallbackElement,HydrateFallback:g.props.HydrateFallback,errorElement:g.props.errorElement,ErrorBoundary:g.props.ErrorBoundary,hasErrorBoundary:g.props.hasErrorBoundary===!0||g.props.ErrorBoundary!=null||g.props.errorElement!=null,shouldRevalidate:g.props.shouldRevalidate,handle:g.props.handle,lazy:g.props.lazy};g.props.children&&(M.children=Ga(g.props.children,T)),u.push(M)}),u}var Fs="get",Gs="application/x-www-form-urlencoded";function Ws(o){return o!=null&&typeof o.tagName=="string"}function Tp(o){return Ws(o)&&o.tagName.toLowerCase()==="button"}function xp(o){return Ws(o)&&o.tagName.toLowerCase()==="form"}function Rp(o){return Ws(o)&&o.tagName.toLowerCase()==="input"}function Ep(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Mp(o,i){return o.button===0&&(!i||i==="_self")&&!Ep(o)}function Ha(o=""){return new URLSearchParams(typeof o=="string"||Array.isArray(o)||o instanceof URLSearchParams?o:Object.keys(o).reduce((i,u)=>{let g=o[u];return i.concat(Array.isArray(g)?g.map(_=>[u,_]):[[u,g]])},[]))}function Pp(o,i){let u=Ha(o);return i&&i.forEach((g,_)=>{u.has(_)||i.getAll(_).forEach(T=>{u.append(_,T)})}),u}var Os=null;function Ap(){if(Os===null)try{new FormData(document.createElement("form"),0),Os=!1}catch{Os=!0}return Os}var Lp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Da(o){return o!=null&&!Lp.has(o)?(jt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gs}"`),null):o}function Up(o,i){let u,g,_,T,M;if(xp(o)){let L=o.getAttribute("action");g=L?Jn(L,i):null,u=o.getAttribute("method")||Fs,_=Da(o.getAttribute("enctype"))||Gs,T=new FormData(o)}else if(Tp(o)||Rp(o)&&(o.type==="submit"||o.type==="image")){let L=o.form;if(L==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let A=o.getAttribute("formaction")||L.getAttribute("action");if(g=A?Jn(A,i):null,u=o.getAttribute("formmethod")||L.getAttribute("method")||Fs,_=Da(o.getAttribute("formenctype"))||Da(L.getAttribute("enctype"))||Gs,T=new FormData(L,o),!Ap()){let{name:z,type:W,value:Q}=o;if(W==="image"){let $=z?`${z}.`:"";T.append(`${$}x`,"0"),T.append(`${$}y`,"0")}else z&&T.append(z,Q)}}else{if(Ws(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Fs,g=null,_=Gs,M=o}return T&&_==="text/plain"&&(M=T,T=void 0),{action:g,method:u.toLowerCase(),encType:_,formData:T,body:M}}function tl(o,i){if(o===!1||o===null||typeof o>"u")throw new Error(i)}async function zp(o,i){if(o.id in i)return i[o.id];try{let u=await import(o.module);return i[o.id]=u,u}catch(u){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Cp(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function kp(o,i,u){let g=await Promise.all(o.map(async _=>{let T=i.routes[_.route.id];if(T){let M=await zp(T,u);return M.links?M.links():[]}return[]}));return bp(g.flat(1).filter(Cp).filter(_=>_.rel==="stylesheet"||_.rel==="preload").map(_=>_.rel==="stylesheet"?{..._,rel:"prefetch",as:"style"}:{..._,rel:"prefetch"}))}function Yc(o,i,u,g,_,T){let M=(A,z)=>u[z]?A.route.id!==u[z].route.id:!0,L=(A,z)=>{var W;return u[z].pathname!==A.pathname||((W=u[z].route.path)==null?void 0:W.endsWith("*"))&&u[z].params["*"]!==A.params["*"]};return T==="assets"?i.filter((A,z)=>M(A,z)||L(A,z)):T==="data"?i.filter((A,z)=>{var Q;let W=g.routes[A.route.id];if(!W||!W.hasLoader)return!1;if(M(A,z)||L(A,z))return!0;if(A.route.shouldRevalidate){let $=A.route.shouldRevalidate({currentUrl:new URL(_.pathname+_.search+_.hash,window.origin),currentParams:((Q=u[0])==null?void 0:Q.params)||{},nextUrl:new URL(o,window.origin),nextParams:A.params,defaultShouldRevalidate:!0});if(typeof $=="boolean")return $}return!0}):[]}function Ip(o,i){return Dp(o.map(u=>{let g=i.routes[u.route.id];if(!g)return[];let _=[g.module];return g.imports&&(_=_.concat(g.imports)),_}).flat(1))}function Dp(o){return[...new Set(o)]}function Op(o){let i={},u=Object.keys(o).sort();for(let g of u)i[g]=o[g];return i}function bp(o,i){let u=new Set;return new Set(i),o.reduce((g,_)=>{let T=JSON.stringify(Op(_));return u.has(T)||(u.add(T),g.push({key:T,link:_})),g},[])}function Np(o){let i=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return i.pathname==="/"?i.pathname="_root.data":i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Bp(){let o=j.useContext(Nr);return tl(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Fp(){let o=j.useContext($s);return tl(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var nl=j.createContext(void 0);nl.displayName="FrameworkContext";function xd(){let o=j.useContext(nl);return tl(o,"You must render this element inside a <HydratedRouter> element"),o}function Gp(o,i){let u=j.useContext(nl),[g,_]=j.useState(!1),[T,M]=j.useState(!1),{onFocus:L,onBlur:A,onMouseEnter:z,onMouseLeave:W,onTouchStart:Q}=i,$=j.useRef(null);j.useEffect(()=>{if(o==="render"&&M(!0),o==="viewport"){let K=F=>{F.forEach(q=>{M(q.isIntersecting)})},J=new IntersectionObserver(K,{threshold:.5});return $.current&&J.observe($.current),()=>{J.disconnect()}}},[o]),j.useEffect(()=>{if(g){let K=setTimeout(()=>{M(!0)},100);return()=>{clearTimeout(K)}}},[g]);let te=()=>{_(!0)},X=()=>{_(!1),M(!1)};return u?o!=="intent"?[T,$,{}]:[T,$,{onFocus:Si(L,te),onBlur:Si(A,X),onMouseEnter:Si(z,te),onMouseLeave:Si(W,X),onTouchStart:Si(Q,te)}]:[!1,$,{}]}function Si(o,i){return u=>{o&&o(u),u.defaultPrevented||i(u)}}function Hp({page:o,...i}){let{router:u}=Bp(),g=j.useMemo(()=>pd(u.routes,o,u.basename),[u.routes,o,u.basename]);return g?j.createElement($p,{page:o,matches:g,...i}):null}function Vp(o){let{manifest:i,routeModules:u}=xd(),[g,_]=j.useState([]);return j.useEffect(()=>{let T=!1;return kp(o,i,u).then(M=>{T||_(M)}),()=>{T=!0}},[o,i,u]),g}function $p({page:o,matches:i,...u}){let g=wn(),{manifest:_,routeModules:T}=xd(),{loaderData:M,matches:L}=Fp(),A=j.useMemo(()=>Yc(o,i,L,_,g,"data"),[o,i,L,_,g]),z=j.useMemo(()=>Yc(o,i,L,_,g,"assets"),[o,i,L,_,g]),W=j.useMemo(()=>{if(o===g.pathname+g.search+g.hash)return[];let te=new Set,X=!1;if(i.forEach(J=>{var q;let F=_.routes[J.route.id];!F||!F.hasLoader||(!A.some(ue=>ue.route.id===J.route.id)&&J.route.id in M&&((q=T[J.route.id])!=null&&q.shouldRevalidate)||F.hasClientLoader?X=!0:te.add(J.route.id))}),te.size===0)return[];let K=Np(o);return X&&te.size>0&&K.searchParams.set("_routes",i.filter(J=>te.has(J.route.id)).map(J=>J.route.id).join(",")),[K.pathname+K.search]},[M,g,_,A,i,o,T]),Q=j.useMemo(()=>Ip(z,_),[z,_]),$=Vp(z);return j.createElement(j.Fragment,null,W.map(te=>j.createElement("link",{key:te,rel:"prefetch",as:"fetch",href:te,...u})),Q.map(te=>j.createElement("link",{key:te,rel:"modulepreload",href:te,...u})),$.map(({key:te,link:X})=>j.createElement("link",{key:te,...X})))}function Wp(...o){return i=>{o.forEach(u=>{typeof u=="function"?u(i):u!=null&&(u.current=i)})}}var Rd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rd&&(window.__reactRouterVersion="7.1.3")}catch{}function qp({basename:o,children:i,window:u}){let g=j.useRef();g.current==null&&(g.current=Ch({window:u,v5Compat:!0}));let _=g.current,[T,M]=j.useState({action:_.action,location:_.location}),L=j.useCallback(A=>{j.startTransition(()=>M(A))},[M]);return j.useLayoutEffect(()=>_.listen(L),[_,L]),j.createElement(wp,{basename:o,children:i,location:T.location,navigationType:T.action,navigator:_})}var Ed=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Md=j.forwardRef(function({onClick:i,discover:u="render",prefetch:g="none",relative:_,reloadDocument:T,replace:M,state:L,target:A,to:z,preventScrollReset:W,viewTransition:Q,...$},te){let{basename:X}=j.useContext(ln),K=typeof z=="string"&&Ed.test(z),J,F=!1;if(typeof z=="string"&&K&&(J=z,Rd))try{let De=new URL(window.location.href),ke=z.startsWith("//")?new URL(De.protocol+z):new URL(z),je=Jn(ke.pathname,X);ke.origin===De.origin&&je!=null?z=je+ke.search+ke.hash:F=!0}catch{jt(!1,`<Link to="${z}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=ip(z,{relative:_}),[ue,de,Pe]=Gp(g,$),Ie=Xp(z,{replace:M,state:L,target:A,preventScrollReset:W,relative:_,viewTransition:Q});function Ne(De){i&&i(De),De.defaultPrevented||Ie(De)}let Be=j.createElement("a",{...$,...Pe,href:J||q,onClick:F||T?i:Ne,ref:Wp(te,de),target:A,"data-discover":!K&&u==="render"?"true":void 0});return ue&&!K?j.createElement(j.Fragment,null,Be,j.createElement(Hp,{page:q})):Be});Md.displayName="Link";var jp=j.forwardRef(function({"aria-current":i="page",caseSensitive:u=!1,className:g="",end:_=!1,style:T,to:M,viewTransition:L,children:A,...z},W){let Q=Mi(M,{relative:z.relative}),$=wn(),te=j.useContext($s),{navigator:X,basename:K}=j.useContext(ln),J=te!=null&&nm(Q)&&L===!0,F=X.encodeLocation?X.encodeLocation(Q).pathname:Q.pathname,q=$.pathname,ue=te&&te.navigation&&te.navigation.location?te.navigation.location.pathname:null;u||(q=q.toLowerCase(),ue=ue?ue.toLowerCase():null,F=F.toLowerCase()),ue&&K&&(ue=Jn(ue,K)||ue);const de=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let Pe=q===F||!_&&q.startsWith(F)&&q.charAt(de)==="/",Ie=ue!=null&&(ue===F||!_&&ue.startsWith(F)&&ue.charAt(F.length)==="/"),Ne={isActive:Pe,isPending:Ie,isTransitioning:J},Be=Pe?i:void 0,De;typeof g=="function"?De=g(Ne):De=[g,Pe?"active":null,Ie?"pending":null,J?"transitioning":null].filter(Boolean).join(" ");let ke=typeof T=="function"?T(Ne):T;return j.createElement(Md,{...z,"aria-current":Be,className:De,ref:W,style:ke,to:M,viewTransition:L},typeof A=="function"?A(Ne):A)});jp.displayName="NavLink";var Zp=j.forwardRef(({discover:o="render",fetcherKey:i,navigate:u,reloadDocument:g,replace:_,state:T,method:M=Fs,action:L,onSubmit:A,relative:z,preventScrollReset:W,viewTransition:Q,...$},te)=>{let X=em(),K=tm(L,{relative:z}),J=M.toLowerCase()==="get"?"get":"post",F=typeof L=="string"&&Ed.test(L),q=ue=>{if(A&&A(ue),ue.defaultPrevented)return;ue.preventDefault();let de=ue.nativeEvent.submitter,Pe=(de==null?void 0:de.getAttribute("formmethod"))||M;X(de||ue.currentTarget,{fetcherKey:i,method:Pe,navigate:u,replace:_,state:T,relative:z,preventScrollReset:W,viewTransition:Q})};return j.createElement("form",{ref:te,method:J,action:K,onSubmit:g?A:q,...$,"data-discover":!F&&o==="render"?"true":void 0})});Zp.displayName="Form";function Qp(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pd(o){let i=j.useContext(Nr);return tt(i,Qp(o)),i}function Xp(o,{target:i,replace:u,state:g,preventScrollReset:_,relative:T,viewTransition:M}={}){let L=Ei(),A=wn(),z=Mi(o,{relative:T});return j.useCallback(W=>{if(Mp(W,i)){W.preventDefault();let Q=u!==void 0?u:Ti(A)===Ti(z);L(o,{replace:Q,state:g,preventScrollReset:_,relative:T,viewTransition:M})}},[A,L,z,u,g,i,o,_,T,M])}function Yp(o){jt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let i=j.useRef(Ha(o)),u=j.useRef(!1),g=wn(),_=j.useMemo(()=>Pp(g.search,u.current?null:i.current),[g.search]),T=Ei(),M=j.useCallback((L,A)=>{const z=Ha(typeof L=="function"?L(_):L);u.current=!0,T("?"+z,A)},[T,_]);return[_,M]}var Kp=0,Jp=()=>`__${String(++Kp)}__`;function em(){let{router:o}=Pd("useSubmit"),{basename:i}=j.useContext(ln),u=mp();return j.useCallback(async(g,_={})=>{let{action:T,method:M,encType:L,formData:A,body:z}=Up(g,i);if(_.navigate===!1){let W=_.fetcherKey||Jp();await o.fetch(W,u,_.action||T,{preventScrollReset:_.preventScrollReset,formData:A,body:z,formMethod:_.method||M,formEncType:_.encType||L,flushSync:_.flushSync})}else await o.navigate(_.action||T,{preventScrollReset:_.preventScrollReset,formData:A,body:z,formMethod:_.method||M,formEncType:_.encType||L,replace:_.replace,state:_.state,fromRouteId:u,flushSync:_.flushSync,viewTransition:_.viewTransition})},[o,i,u])}function tm(o,{relative:i}={}){let{basename:u}=j.useContext(ln),g=j.useContext(_n);tt(g,"useFormAction must be used inside a RouteContext");let[_]=g.matches.slice(-1),T={...Mi(o||".",{relative:i})},M=wn();if(o==null){T.search=M.search;let L=new URLSearchParams(T.search),A=L.getAll("index");if(A.some(W=>W==="")){L.delete("index"),A.filter(Q=>Q).forEach(Q=>L.append("index",Q));let W=L.toString();T.search=W?`?${W}`:""}}return(!o||o===".")&&_.route.index&&(T.search=T.search?T.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(T.pathname=T.pathname==="/"?u:zn([u,T.pathname])),Ti(T)}function nm(o,i={}){let u=j.useContext(yd);tt(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:g}=Pd("useViewTransitionState"),_=Mi(o,{relative:i.relative});if(!u.isTransitioning)return!1;let T=Jn(u.currentLocation.pathname,g)||u.currentLocation.pathname,M=Jn(u.nextLocation.pathname,g)||u.nextLocation.pathname;return Vs(_.pathname,M)!=null||Vs(_.pathname,T)!=null}new TextEncoder;const rm=`struct VertexOut {
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
}`;function im(o,i){return class extends o{constructor(...u){super(...u),i(this)}}}const sm=im(Array,o=>o.fill(0));let be=1e-6;function om(o){function i(a=0,v=0){const c=new o(2);return a!==void 0&&(c[0]=a,v!==void 0&&(c[1]=v)),c}const u=i;function g(a,v,c){const h=c??new o(2);return h[0]=a,h[1]=v,h}function _(a,v){const c=v??new o(2);return c[0]=Math.ceil(a[0]),c[1]=Math.ceil(a[1]),c}function T(a,v){const c=v??new o(2);return c[0]=Math.floor(a[0]),c[1]=Math.floor(a[1]),c}function M(a,v){const c=v??new o(2);return c[0]=Math.round(a[0]),c[1]=Math.round(a[1]),c}function L(a,v=0,c=1,h){const w=h??new o(2);return w[0]=Math.min(c,Math.max(v,a[0])),w[1]=Math.min(c,Math.max(v,a[1])),w}function A(a,v,c){const h=c??new o(2);return h[0]=a[0]+v[0],h[1]=a[1]+v[1],h}function z(a,v,c,h){const w=h??new o(2);return w[0]=a[0]+v[0]*c,w[1]=a[1]+v[1]*c,w}function W(a,v){const c=a[0],h=a[1],w=v[0],k=v[1],G=Math.sqrt(c*c+h*h),y=Math.sqrt(w*w+k*k),S=G*y,C=S&&De(a,v)/S;return Math.acos(C)}function Q(a,v,c){const h=c??new o(2);return h[0]=a[0]-v[0],h[1]=a[1]-v[1],h}const $=Q;function te(a,v){return Math.abs(a[0]-v[0])<be&&Math.abs(a[1]-v[1])<be}function X(a,v){return a[0]===v[0]&&a[1]===v[1]}function K(a,v,c,h){const w=h??new o(2);return w[0]=a[0]+c*(v[0]-a[0]),w[1]=a[1]+c*(v[1]-a[1]),w}function J(a,v,c,h){const w=h??new o(2);return w[0]=a[0]+c[0]*(v[0]-a[0]),w[1]=a[1]+c[1]*(v[1]-a[1]),w}function F(a,v,c){const h=c??new o(2);return h[0]=Math.max(a[0],v[0]),h[1]=Math.max(a[1],v[1]),h}function q(a,v,c){const h=c??new o(2);return h[0]=Math.min(a[0],v[0]),h[1]=Math.min(a[1],v[1]),h}function ue(a,v,c){const h=c??new o(2);return h[0]=a[0]*v,h[1]=a[1]*v,h}const de=ue;function Pe(a,v,c){const h=c??new o(2);return h[0]=a[0]/v,h[1]=a[1]/v,h}function Ie(a,v){const c=v??new o(2);return c[0]=1/a[0],c[1]=1/a[1],c}const Ne=Ie;function Be(a,v,c){const h=c??new o(3),w=a[0]*v[1]-a[1]*v[0];return h[0]=0,h[1]=0,h[2]=w,h}function De(a,v){return a[0]*v[0]+a[1]*v[1]}function ke(a){const v=a[0],c=a[1];return Math.sqrt(v*v+c*c)}const je=ke;function Ee(a){const v=a[0],c=a[1];return v*v+c*c}const ze=Ee;function Se(a,v){const c=a[0]-v[0],h=a[1]-v[1];return Math.sqrt(c*c+h*h)}const Ke=Se;function Ve(a,v){const c=a[0]-v[0],h=a[1]-v[1];return c*c+h*h}const He=Ve;function le(a,v){const c=v??new o(2),h=a[0],w=a[1],k=Math.sqrt(h*h+w*w);return k>1e-5?(c[0]=h/k,c[1]=w/k):(c[0]=0,c[1]=0),c}function _e(a,v){const c=v??new o(2);return c[0]=-a[0],c[1]=-a[1],c}function oe(a,v){const c=v??new o(2);return c[0]=a[0],c[1]=a[1],c}const O=oe;function ee(a,v,c){const h=c??new o(2);return h[0]=a[0]*v[0],h[1]=a[1]*v[1],h}const Me=ee;function Te(a,v,c){const h=c??new o(2);return h[0]=a[0]/v[0],h[1]=a[1]/v[1],h}const Ce=Te;function Ue(a=1,v){const c=v??new o(2),h=Math.random()*2*Math.PI;return c[0]=Math.cos(h)*a,c[1]=Math.sin(h)*a,c}function f(a){const v=a??new o(2);return v[0]=0,v[1]=0,v}function R(a,v,c){const h=c??new o(2),w=a[0],k=a[1];return h[0]=w*v[0]+k*v[4]+v[12],h[1]=w*v[1]+k*v[5]+v[13],h}function d(a,v,c){const h=c??new o(2),w=a[0],k=a[1];return h[0]=v[0]*w+v[4]*k+v[8],h[1]=v[1]*w+v[5]*k+v[9],h}function p(a,v,c,h){const w=h??new o(2),k=a[0]-v[0],G=a[1]-v[1],y=Math.sin(c),S=Math.cos(c);return w[0]=k*S-G*y+v[0],w[1]=k*y+G*S+v[1],w}function x(a,v,c){const h=c??new o(2);return le(a,h),ue(h,v,h)}function P(a,v,c){const h=c??new o(2);return ke(a)>v?x(a,v,h):oe(a,h)}function B(a,v,c){const h=c??new o(2);return K(a,v,.5,h)}return{create:i,fromValues:u,set:g,ceil:_,floor:T,round:M,clamp:L,add:A,addScaled:z,angle:W,subtract:Q,sub:$,equalsApproximately:te,equals:X,lerp:K,lerpV:J,max:F,min:q,mulScalar:ue,scale:de,divScalar:Pe,inverse:Ie,invert:Ne,cross:Be,dot:De,length:ke,len:je,lengthSq:Ee,lenSq:ze,distance:Se,dist:Ke,distanceSq:Ve,distSq:He,normalize:le,negate:_e,copy:oe,clone:O,multiply:ee,mul:Me,divide:Te,div:Ce,random:Ue,zero:f,transformMat4:R,transformMat3:d,rotate:p,setLength:x,truncate:P,midpoint:B}}const Kc=new Map;function Ad(o){let i=Kc.get(o);return i||(i=om(o),Kc.set(o,i)),i}function am(o){function i(y,S,C){const I=new o(3);return y!==void 0&&(I[0]=y,S!==void 0&&(I[1]=S,C!==void 0&&(I[2]=C))),I}const u=i;function g(y,S,C,I){const H=I??new o(3);return H[0]=y,H[1]=S,H[2]=C,H}function _(y,S){const C=S??new o(3);return C[0]=Math.ceil(y[0]),C[1]=Math.ceil(y[1]),C[2]=Math.ceil(y[2]),C}function T(y,S){const C=S??new o(3);return C[0]=Math.floor(y[0]),C[1]=Math.floor(y[1]),C[2]=Math.floor(y[2]),C}function M(y,S){const C=S??new o(3);return C[0]=Math.round(y[0]),C[1]=Math.round(y[1]),C[2]=Math.round(y[2]),C}function L(y,S=0,C=1,I){const H=I??new o(3);return H[0]=Math.min(C,Math.max(S,y[0])),H[1]=Math.min(C,Math.max(S,y[1])),H[2]=Math.min(C,Math.max(S,y[2])),H}function A(y,S,C){const I=C??new o(3);return I[0]=y[0]+S[0],I[1]=y[1]+S[1],I[2]=y[2]+S[2],I}function z(y,S,C,I){const H=I??new o(3);return H[0]=y[0]+S[0]*C,H[1]=y[1]+S[1]*C,H[2]=y[2]+S[2]*C,H}function W(y,S){const C=y[0],I=y[1],H=y[2],Z=S[0],Y=S[1],pe=S[2],Ae=Math.sqrt(C*C+I*I+H*H),fe=Math.sqrt(Z*Z+Y*Y+pe*pe),me=Ae*fe,Oe=me&&De(y,S)/me;return Math.acos(Oe)}function Q(y,S,C){const I=C??new o(3);return I[0]=y[0]-S[0],I[1]=y[1]-S[1],I[2]=y[2]-S[2],I}const $=Q;function te(y,S){return Math.abs(y[0]-S[0])<be&&Math.abs(y[1]-S[1])<be&&Math.abs(y[2]-S[2])<be}function X(y,S){return y[0]===S[0]&&y[1]===S[1]&&y[2]===S[2]}function K(y,S,C,I){const H=I??new o(3);return H[0]=y[0]+C*(S[0]-y[0]),H[1]=y[1]+C*(S[1]-y[1]),H[2]=y[2]+C*(S[2]-y[2]),H}function J(y,S,C,I){const H=I??new o(3);return H[0]=y[0]+C[0]*(S[0]-y[0]),H[1]=y[1]+C[1]*(S[1]-y[1]),H[2]=y[2]+C[2]*(S[2]-y[2]),H}function F(y,S,C){const I=C??new o(3);return I[0]=Math.max(y[0],S[0]),I[1]=Math.max(y[1],S[1]),I[2]=Math.max(y[2],S[2]),I}function q(y,S,C){const I=C??new o(3);return I[0]=Math.min(y[0],S[0]),I[1]=Math.min(y[1],S[1]),I[2]=Math.min(y[2],S[2]),I}function ue(y,S,C){const I=C??new o(3);return I[0]=y[0]*S,I[1]=y[1]*S,I[2]=y[2]*S,I}const de=ue;function Pe(y,S,C){const I=C??new o(3);return I[0]=y[0]/S,I[1]=y[1]/S,I[2]=y[2]/S,I}function Ie(y,S){const C=S??new o(3);return C[0]=1/y[0],C[1]=1/y[1],C[2]=1/y[2],C}const Ne=Ie;function Be(y,S,C){const I=C??new o(3),H=y[2]*S[0]-y[0]*S[2],Z=y[0]*S[1]-y[1]*S[0];return I[0]=y[1]*S[2]-y[2]*S[1],I[1]=H,I[2]=Z,I}function De(y,S){return y[0]*S[0]+y[1]*S[1]+y[2]*S[2]}function ke(y){const S=y[0],C=y[1],I=y[2];return Math.sqrt(S*S+C*C+I*I)}const je=ke;function Ee(y){const S=y[0],C=y[1],I=y[2];return S*S+C*C+I*I}const ze=Ee;function Se(y,S){const C=y[0]-S[0],I=y[1]-S[1],H=y[2]-S[2];return Math.sqrt(C*C+I*I+H*H)}const Ke=Se;function Ve(y,S){const C=y[0]-S[0],I=y[1]-S[1],H=y[2]-S[2];return C*C+I*I+H*H}const He=Ve;function le(y,S){const C=S??new o(3),I=y[0],H=y[1],Z=y[2],Y=Math.sqrt(I*I+H*H+Z*Z);return Y>1e-5?(C[0]=I/Y,C[1]=H/Y,C[2]=Z/Y):(C[0]=0,C[1]=0,C[2]=0),C}function _e(y,S){const C=S??new o(3);return C[0]=-y[0],C[1]=-y[1],C[2]=-y[2],C}function oe(y,S){const C=S??new o(3);return C[0]=y[0],C[1]=y[1],C[2]=y[2],C}const O=oe;function ee(y,S,C){const I=C??new o(3);return I[0]=y[0]*S[0],I[1]=y[1]*S[1],I[2]=y[2]*S[2],I}const Me=ee;function Te(y,S,C){const I=C??new o(3);return I[0]=y[0]/S[0],I[1]=y[1]/S[1],I[2]=y[2]/S[2],I}const Ce=Te;function Ue(y=1,S){const C=S??new o(3),I=Math.random()*2*Math.PI,H=Math.random()*2-1,Z=Math.sqrt(1-H*H)*y;return C[0]=Math.cos(I)*Z,C[1]=Math.sin(I)*Z,C[2]=H*y,C}function f(y){const S=y??new o(3);return S[0]=0,S[1]=0,S[2]=0,S}function R(y,S,C){const I=C??new o(3),H=y[0],Z=y[1],Y=y[2],pe=S[3]*H+S[7]*Z+S[11]*Y+S[15]||1;return I[0]=(S[0]*H+S[4]*Z+S[8]*Y+S[12])/pe,I[1]=(S[1]*H+S[5]*Z+S[9]*Y+S[13])/pe,I[2]=(S[2]*H+S[6]*Z+S[10]*Y+S[14])/pe,I}function d(y,S,C){const I=C??new o(3),H=y[0],Z=y[1],Y=y[2];return I[0]=H*S[0*4+0]+Z*S[1*4+0]+Y*S[2*4+0],I[1]=H*S[0*4+1]+Z*S[1*4+1]+Y*S[2*4+1],I[2]=H*S[0*4+2]+Z*S[1*4+2]+Y*S[2*4+2],I}function p(y,S,C){const I=C??new o(3),H=y[0],Z=y[1],Y=y[2];return I[0]=H*S[0]+Z*S[4]+Y*S[8],I[1]=H*S[1]+Z*S[5]+Y*S[9],I[2]=H*S[2]+Z*S[6]+Y*S[10],I}function x(y,S,C){const I=C??new o(3),H=S[0],Z=S[1],Y=S[2],pe=S[3]*2,Ae=y[0],fe=y[1],me=y[2],Oe=Z*me-Y*fe,Fe=Y*Ae-H*me,Ze=H*fe-Z*Ae;return I[0]=Ae+Oe*pe+(Z*Ze-Y*Fe)*2,I[1]=fe+Fe*pe+(Y*Oe-H*Ze)*2,I[2]=me+Ze*pe+(H*Fe-Z*Oe)*2,I}function P(y,S){const C=S??new o(3);return C[0]=y[12],C[1]=y[13],C[2]=y[14],C}function B(y,S,C){const I=C??new o(3),H=S*4;return I[0]=y[H+0],I[1]=y[H+1],I[2]=y[H+2],I}function a(y,S){const C=S??new o(3),I=y[0],H=y[1],Z=y[2],Y=y[4],pe=y[5],Ae=y[6],fe=y[8],me=y[9],Oe=y[10];return C[0]=Math.sqrt(I*I+H*H+Z*Z),C[1]=Math.sqrt(Y*Y+pe*pe+Ae*Ae),C[2]=Math.sqrt(fe*fe+me*me+Oe*Oe),C}function v(y,S,C,I){const H=I??new o(3),Z=[],Y=[];return Z[0]=y[0]-S[0],Z[1]=y[1]-S[1],Z[2]=y[2]-S[2],Y[0]=Z[0],Y[1]=Z[1]*Math.cos(C)-Z[2]*Math.sin(C),Y[2]=Z[1]*Math.sin(C)+Z[2]*Math.cos(C),H[0]=Y[0]+S[0],H[1]=Y[1]+S[1],H[2]=Y[2]+S[2],H}function c(y,S,C,I){const H=I??new o(3),Z=[],Y=[];return Z[0]=y[0]-S[0],Z[1]=y[1]-S[1],Z[2]=y[2]-S[2],Y[0]=Z[2]*Math.sin(C)+Z[0]*Math.cos(C),Y[1]=Z[1],Y[2]=Z[2]*Math.cos(C)-Z[0]*Math.sin(C),H[0]=Y[0]+S[0],H[1]=Y[1]+S[1],H[2]=Y[2]+S[2],H}function h(y,S,C,I){const H=I??new o(3),Z=[],Y=[];return Z[0]=y[0]-S[0],Z[1]=y[1]-S[1],Z[2]=y[2]-S[2],Y[0]=Z[0]*Math.cos(C)-Z[1]*Math.sin(C),Y[1]=Z[0]*Math.sin(C)+Z[1]*Math.cos(C),Y[2]=Z[2],H[0]=Y[0]+S[0],H[1]=Y[1]+S[1],H[2]=Y[2]+S[2],H}function w(y,S,C){const I=C??new o(3);return le(y,I),ue(I,S,I)}function k(y,S,C){const I=C??new o(3);return ke(y)>S?w(y,S,I):oe(y,I)}function G(y,S,C){const I=C??new o(3);return K(y,S,.5,I)}return{create:i,fromValues:u,set:g,ceil:_,floor:T,round:M,clamp:L,add:A,addScaled:z,angle:W,subtract:Q,sub:$,equalsApproximately:te,equals:X,lerp:K,lerpV:J,max:F,min:q,mulScalar:ue,scale:de,divScalar:Pe,inverse:Ie,invert:Ne,cross:Be,dot:De,length:ke,len:je,lengthSq:Ee,lenSq:ze,distance:Se,dist:Ke,distanceSq:Ve,distSq:He,normalize:le,negate:_e,copy:oe,clone:O,multiply:ee,mul:Me,divide:Te,div:Ce,random:Ue,zero:f,transformMat4:R,transformMat4Upper3x3:d,transformMat3:p,transformQuat:x,getTranslation:P,getAxis:B,getScaling:a,rotateX:v,rotateY:c,rotateZ:h,setLength:w,truncate:k,midpoint:G}}const Jc=new Map;function qs(o){let i=Jc.get(o);return i||(i=am(o),Jc.set(o,i)),i}function lm(o){const i=Ad(o),u=qs(o);function g(f,R,d,p,x,P,B,a,v){const c=new o(12);return c[3]=0,c[7]=0,c[11]=0,f!==void 0&&(c[0]=f,R!==void 0&&(c[1]=R,d!==void 0&&(c[2]=d,p!==void 0&&(c[4]=p,x!==void 0&&(c[5]=x,P!==void 0&&(c[6]=P,B!==void 0&&(c[8]=B,a!==void 0&&(c[9]=a,v!==void 0&&(c[10]=v))))))))),c}function _(f,R,d,p,x,P,B,a,v,c){const h=c??new o(12);return h[0]=f,h[1]=R,h[2]=d,h[3]=0,h[4]=p,h[5]=x,h[6]=P,h[7]=0,h[8]=B,h[9]=a,h[10]=v,h[11]=0,h}function T(f,R){const d=R??new o(12);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[3]=0,d[4]=f[4],d[5]=f[5],d[6]=f[6],d[7]=0,d[8]=f[8],d[9]=f[9],d[10]=f[10],d[11]=0,d}function M(f,R){const d=R??new o(12),p=f[0],x=f[1],P=f[2],B=f[3],a=p+p,v=x+x,c=P+P,h=p*a,w=x*a,k=x*v,G=P*a,y=P*v,S=P*c,C=B*a,I=B*v,H=B*c;return d[0]=1-k-S,d[1]=w+H,d[2]=G-I,d[3]=0,d[4]=w-H,d[5]=1-h-S,d[6]=y+C,d[7]=0,d[8]=G+I,d[9]=y-C,d[10]=1-h-k,d[11]=0,d}function L(f,R){const d=R??new o(12);return d[0]=-f[0],d[1]=-f[1],d[2]=-f[2],d[4]=-f[4],d[5]=-f[5],d[6]=-f[6],d[8]=-f[8],d[9]=-f[9],d[10]=-f[10],d}function A(f,R){const d=R??new o(12);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[4]=f[4],d[5]=f[5],d[6]=f[6],d[8]=f[8],d[9]=f[9],d[10]=f[10],d}const z=A;function W(f,R){return Math.abs(f[0]-R[0])<be&&Math.abs(f[1]-R[1])<be&&Math.abs(f[2]-R[2])<be&&Math.abs(f[4]-R[4])<be&&Math.abs(f[5]-R[5])<be&&Math.abs(f[6]-R[6])<be&&Math.abs(f[8]-R[8])<be&&Math.abs(f[9]-R[9])<be&&Math.abs(f[10]-R[10])<be}function Q(f,R){return f[0]===R[0]&&f[1]===R[1]&&f[2]===R[2]&&f[4]===R[4]&&f[5]===R[5]&&f[6]===R[6]&&f[8]===R[8]&&f[9]===R[9]&&f[10]===R[10]}function $(f){const R=f??new o(12);return R[0]=1,R[1]=0,R[2]=0,R[4]=0,R[5]=1,R[6]=0,R[8]=0,R[9]=0,R[10]=1,R}function te(f,R){const d=R??new o(12);if(d===f){let k;return k=f[1],f[1]=f[4],f[4]=k,k=f[2],f[2]=f[8],f[8]=k,k=f[6],f[6]=f[9],f[9]=k,d}const p=f[0*4+0],x=f[0*4+1],P=f[0*4+2],B=f[1*4+0],a=f[1*4+1],v=f[1*4+2],c=f[2*4+0],h=f[2*4+1],w=f[2*4+2];return d[0]=p,d[1]=B,d[2]=c,d[4]=x,d[5]=a,d[6]=h,d[8]=P,d[9]=v,d[10]=w,d}function X(f,R){const d=R??new o(12),p=f[0*4+0],x=f[0*4+1],P=f[0*4+2],B=f[1*4+0],a=f[1*4+1],v=f[1*4+2],c=f[2*4+0],h=f[2*4+1],w=f[2*4+2],k=w*a-v*h,G=-w*B+v*c,y=h*B-a*c,S=1/(p*k+x*G+P*y);return d[0]=k*S,d[1]=(-w*x+P*h)*S,d[2]=(v*x-P*a)*S,d[4]=G*S,d[5]=(w*p-P*c)*S,d[6]=(-v*p+P*B)*S,d[8]=y*S,d[9]=(-h*p+x*c)*S,d[10]=(a*p-x*B)*S,d}function K(f){const R=f[0],d=f[0*4+1],p=f[0*4+2],x=f[1*4+0],P=f[1*4+1],B=f[1*4+2],a=f[2*4+0],v=f[2*4+1],c=f[2*4+2];return R*(P*c-v*B)-x*(d*c-v*p)+a*(d*B-P*p)}const J=X;function F(f,R,d){const p=d??new o(12),x=f[0],P=f[1],B=f[2],a=f[4],v=f[5],c=f[6],h=f[8],w=f[9],k=f[10],G=R[0],y=R[1],S=R[2],C=R[4],I=R[5],H=R[6],Z=R[8],Y=R[9],pe=R[10];return p[0]=x*G+a*y+h*S,p[1]=P*G+v*y+w*S,p[2]=B*G+c*y+k*S,p[4]=x*C+a*I+h*H,p[5]=P*C+v*I+w*H,p[6]=B*C+c*I+k*H,p[8]=x*Z+a*Y+h*pe,p[9]=P*Z+v*Y+w*pe,p[10]=B*Z+c*Y+k*pe,p}const q=F;function ue(f,R,d){const p=d??$();return f!==p&&(p[0]=f[0],p[1]=f[1],p[2]=f[2],p[4]=f[4],p[5]=f[5],p[6]=f[6]),p[8]=R[0],p[9]=R[1],p[10]=1,p}function de(f,R){const d=R??i.create();return d[0]=f[8],d[1]=f[9],d}function Pe(f,R,d){const p=d??i.create(),x=R*4;return p[0]=f[x+0],p[1]=f[x+1],p}function Ie(f,R,d,p){const x=p===f?f:A(f,p),P=d*4;return x[P+0]=R[0],x[P+1]=R[1],x}function Ne(f,R){const d=R??i.create(),p=f[0],x=f[1],P=f[4],B=f[5];return d[0]=Math.sqrt(p*p+x*x),d[1]=Math.sqrt(P*P+B*B),d}function Be(f,R){const d=R??u.create(),p=f[0],x=f[1],P=f[2],B=f[4],a=f[5],v=f[6],c=f[8],h=f[9],w=f[10];return d[0]=Math.sqrt(p*p+x*x+P*P),d[1]=Math.sqrt(B*B+a*a+v*v),d[2]=Math.sqrt(c*c+h*h+w*w),d}function De(f,R){const d=R??new o(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=f[0],d[9]=f[1],d[10]=1,d}function ke(f,R,d){const p=d??new o(12),x=R[0],P=R[1],B=f[0],a=f[1],v=f[2],c=f[1*4+0],h=f[1*4+1],w=f[1*4+2],k=f[2*4+0],G=f[2*4+1],y=f[2*4+2];return f!==p&&(p[0]=B,p[1]=a,p[2]=v,p[4]=c,p[5]=h,p[6]=w),p[8]=B*x+c*P+k,p[9]=a*x+h*P+G,p[10]=v*x+w*P+y,p}function je(f,R){const d=R??new o(12),p=Math.cos(f),x=Math.sin(f);return d[0]=p,d[1]=x,d[2]=0,d[4]=-x,d[5]=p,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Ee(f,R,d){const p=d??new o(12),x=f[0*4+0],P=f[0*4+1],B=f[0*4+2],a=f[1*4+0],v=f[1*4+1],c=f[1*4+2],h=Math.cos(R),w=Math.sin(R);return p[0]=h*x+w*a,p[1]=h*P+w*v,p[2]=h*B+w*c,p[4]=h*a-w*x,p[5]=h*v-w*P,p[6]=h*c-w*B,f!==p&&(p[8]=f[8],p[9]=f[9],p[10]=f[10]),p}function ze(f,R){const d=R??new o(12),p=Math.cos(f),x=Math.sin(f);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=p,d[6]=x,d[8]=0,d[9]=-x,d[10]=p,d}function Se(f,R,d){const p=d??new o(12),x=f[4],P=f[5],B=f[6],a=f[8],v=f[9],c=f[10],h=Math.cos(R),w=Math.sin(R);return p[4]=h*x+w*a,p[5]=h*P+w*v,p[6]=h*B+w*c,p[8]=h*a-w*x,p[9]=h*v-w*P,p[10]=h*c-w*B,f!==p&&(p[0]=f[0],p[1]=f[1],p[2]=f[2]),p}function Ke(f,R){const d=R??new o(12),p=Math.cos(f),x=Math.sin(f);return d[0]=p,d[1]=0,d[2]=-x,d[4]=0,d[5]=1,d[6]=0,d[8]=x,d[9]=0,d[10]=p,d}function Ve(f,R,d){const p=d??new o(12),x=f[0*4+0],P=f[0*4+1],B=f[0*4+2],a=f[2*4+0],v=f[2*4+1],c=f[2*4+2],h=Math.cos(R),w=Math.sin(R);return p[0]=h*x-w*a,p[1]=h*P-w*v,p[2]=h*B-w*c,p[8]=h*a+w*x,p[9]=h*v+w*P,p[10]=h*c+w*B,f!==p&&(p[4]=f[4],p[5]=f[5],p[6]=f[6]),p}const He=je,le=Ee;function _e(f,R){const d=R??new o(12);return d[0]=f[0],d[1]=0,d[2]=0,d[4]=0,d[5]=f[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function oe(f,R,d){const p=d??new o(12),x=R[0],P=R[1];return p[0]=x*f[0*4+0],p[1]=x*f[0*4+1],p[2]=x*f[0*4+2],p[4]=P*f[1*4+0],p[5]=P*f[1*4+1],p[6]=P*f[1*4+2],f!==p&&(p[8]=f[8],p[9]=f[9],p[10]=f[10]),p}function O(f,R){const d=R??new o(12);return d[0]=f[0],d[1]=0,d[2]=0,d[4]=0,d[5]=f[1],d[6]=0,d[8]=0,d[9]=0,d[10]=f[2],d}function ee(f,R,d){const p=d??new o(12),x=R[0],P=R[1],B=R[2];return p[0]=x*f[0*4+0],p[1]=x*f[0*4+1],p[2]=x*f[0*4+2],p[4]=P*f[1*4+0],p[5]=P*f[1*4+1],p[6]=P*f[1*4+2],p[8]=B*f[2*4+0],p[9]=B*f[2*4+1],p[10]=B*f[2*4+2],p}function Me(f,R){const d=R??new o(12);return d[0]=f,d[1]=0,d[2]=0,d[4]=0,d[5]=f,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Te(f,R,d){const p=d??new o(12);return p[0]=R*f[0*4+0],p[1]=R*f[0*4+1],p[2]=R*f[0*4+2],p[4]=R*f[1*4+0],p[5]=R*f[1*4+1],p[6]=R*f[1*4+2],f!==p&&(p[8]=f[8],p[9]=f[9],p[10]=f[10]),p}function Ce(f,R){const d=R??new o(12);return d[0]=f,d[1]=0,d[2]=0,d[4]=0,d[5]=f,d[6]=0,d[8]=0,d[9]=0,d[10]=f,d}function Ue(f,R,d){const p=d??new o(12);return p[0]=R*f[0*4+0],p[1]=R*f[0*4+1],p[2]=R*f[0*4+2],p[4]=R*f[1*4+0],p[5]=R*f[1*4+1],p[6]=R*f[1*4+2],p[8]=R*f[2*4+0],p[9]=R*f[2*4+1],p[10]=R*f[2*4+2],p}return{clone:z,create:g,set:_,fromMat4:T,fromQuat:M,negate:L,copy:A,equalsApproximately:W,equals:Q,identity:$,transpose:te,inverse:X,invert:J,determinant:K,mul:q,multiply:F,setTranslation:ue,getTranslation:de,getAxis:Pe,setAxis:Ie,getScaling:Ne,get3DScaling:Be,translation:De,translate:ke,rotation:je,rotate:Ee,rotationX:ze,rotateX:Se,rotationY:Ke,rotateY:Ve,rotationZ:He,rotateZ:le,scaling:_e,scale:oe,uniformScaling:Me,uniformScale:Te,scaling3D:O,scale3D:ee,uniformScaling3D:Ce,uniformScale3D:Ue}}const ed=new Map;function um(o){let i=ed.get(o);return i||(i=lm(o),ed.set(o,i)),i}function cm(o){const i=qs(o);function u(a,v,c,h,w,k,G,y,S,C,I,H,Z,Y,pe,Ae){const fe=new o(16);return a!==void 0&&(fe[0]=a,v!==void 0&&(fe[1]=v,c!==void 0&&(fe[2]=c,h!==void 0&&(fe[3]=h,w!==void 0&&(fe[4]=w,k!==void 0&&(fe[5]=k,G!==void 0&&(fe[6]=G,y!==void 0&&(fe[7]=y,S!==void 0&&(fe[8]=S,C!==void 0&&(fe[9]=C,I!==void 0&&(fe[10]=I,H!==void 0&&(fe[11]=H,Z!==void 0&&(fe[12]=Z,Y!==void 0&&(fe[13]=Y,pe!==void 0&&(fe[14]=pe,Ae!==void 0&&(fe[15]=Ae)))))))))))))))),fe}function g(a,v,c,h,w,k,G,y,S,C,I,H,Z,Y,pe,Ae,fe){const me=fe??new o(16);return me[0]=a,me[1]=v,me[2]=c,me[3]=h,me[4]=w,me[5]=k,me[6]=G,me[7]=y,me[8]=S,me[9]=C,me[10]=I,me[11]=H,me[12]=Z,me[13]=Y,me[14]=pe,me[15]=Ae,me}function _(a,v){const c=v??new o(16);return c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=0,c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=0,c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function T(a,v){const c=v??new o(16),h=a[0],w=a[1],k=a[2],G=a[3],y=h+h,S=w+w,C=k+k,I=h*y,H=w*y,Z=w*S,Y=k*y,pe=k*S,Ae=k*C,fe=G*y,me=G*S,Oe=G*C;return c[0]=1-Z-Ae,c[1]=H+Oe,c[2]=Y-me,c[3]=0,c[4]=H-Oe,c[5]=1-I-Ae,c[6]=pe+fe,c[7]=0,c[8]=Y+me,c[9]=pe-fe,c[10]=1-I-Z,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function M(a,v){const c=v??new o(16);return c[0]=-a[0],c[1]=-a[1],c[2]=-a[2],c[3]=-a[3],c[4]=-a[4],c[5]=-a[5],c[6]=-a[6],c[7]=-a[7],c[8]=-a[8],c[9]=-a[9],c[10]=-a[10],c[11]=-a[11],c[12]=-a[12],c[13]=-a[13],c[14]=-a[14],c[15]=-a[15],c}function L(a,v){const c=v??new o(16);return c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15],c}const A=L;function z(a,v){return Math.abs(a[0]-v[0])<be&&Math.abs(a[1]-v[1])<be&&Math.abs(a[2]-v[2])<be&&Math.abs(a[3]-v[3])<be&&Math.abs(a[4]-v[4])<be&&Math.abs(a[5]-v[5])<be&&Math.abs(a[6]-v[6])<be&&Math.abs(a[7]-v[7])<be&&Math.abs(a[8]-v[8])<be&&Math.abs(a[9]-v[9])<be&&Math.abs(a[10]-v[10])<be&&Math.abs(a[11]-v[11])<be&&Math.abs(a[12]-v[12])<be&&Math.abs(a[13]-v[13])<be&&Math.abs(a[14]-v[14])<be&&Math.abs(a[15]-v[15])<be}function W(a,v){return a[0]===v[0]&&a[1]===v[1]&&a[2]===v[2]&&a[3]===v[3]&&a[4]===v[4]&&a[5]===v[5]&&a[6]===v[6]&&a[7]===v[7]&&a[8]===v[8]&&a[9]===v[9]&&a[10]===v[10]&&a[11]===v[11]&&a[12]===v[12]&&a[13]===v[13]&&a[14]===v[14]&&a[15]===v[15]}function Q(a){const v=a??new o(16);return v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,v}function $(a,v){const c=v??new o(16);if(c===a){let Fe;return Fe=a[1],a[1]=a[4],a[4]=Fe,Fe=a[2],a[2]=a[8],a[8]=Fe,Fe=a[3],a[3]=a[12],a[12]=Fe,Fe=a[6],a[6]=a[9],a[9]=Fe,Fe=a[7],a[7]=a[13],a[13]=Fe,Fe=a[11],a[11]=a[14],a[14]=Fe,c}const h=a[0*4+0],w=a[0*4+1],k=a[0*4+2],G=a[0*4+3],y=a[1*4+0],S=a[1*4+1],C=a[1*4+2],I=a[1*4+3],H=a[2*4+0],Z=a[2*4+1],Y=a[2*4+2],pe=a[2*4+3],Ae=a[3*4+0],fe=a[3*4+1],me=a[3*4+2],Oe=a[3*4+3];return c[0]=h,c[1]=y,c[2]=H,c[3]=Ae,c[4]=w,c[5]=S,c[6]=Z,c[7]=fe,c[8]=k,c[9]=C,c[10]=Y,c[11]=me,c[12]=G,c[13]=I,c[14]=pe,c[15]=Oe,c}function te(a,v){const c=v??new o(16),h=a[0*4+0],w=a[0*4+1],k=a[0*4+2],G=a[0*4+3],y=a[1*4+0],S=a[1*4+1],C=a[1*4+2],I=a[1*4+3],H=a[2*4+0],Z=a[2*4+1],Y=a[2*4+2],pe=a[2*4+3],Ae=a[3*4+0],fe=a[3*4+1],me=a[3*4+2],Oe=a[3*4+3],Fe=Y*Oe,Ze=me*pe,lt=C*Oe,nt=me*I,ut=C*pe,ft=Y*I,ht=k*Oe,pt=me*G,rt=k*pe,it=Y*G,yt=k*I,_t=C*G,wt=H*fe,St=Ae*Z,At=y*fe,Et=Ae*S,Lt=y*Z,un=H*S,Cn=h*fe,cn=Ae*w,hr=h*Z,dn=H*w,Sn=h*S,Tn=y*w,pr=Fe*S+nt*Z+ut*fe-(Ze*S+lt*Z+ft*fe),Pi=Ze*w+ht*Z+it*fe-(Fe*w+pt*Z+rt*fe),Ai=lt*w+pt*S+yt*fe-(nt*w+ht*S+_t*fe),Li=ft*w+rt*S+_t*Z-(ut*w+it*S+yt*Z),Je=1/(h*pr+y*Pi+H*Ai+Ae*Li);return c[0]=Je*pr,c[1]=Je*Pi,c[2]=Je*Ai,c[3]=Je*Li,c[4]=Je*(Ze*y+lt*H+ft*Ae-(Fe*y+nt*H+ut*Ae)),c[5]=Je*(Fe*h+pt*H+rt*Ae-(Ze*h+ht*H+it*Ae)),c[6]=Je*(nt*h+ht*y+_t*Ae-(lt*h+pt*y+yt*Ae)),c[7]=Je*(ut*h+it*y+yt*H-(ft*h+rt*y+_t*H)),c[8]=Je*(wt*I+Et*pe+Lt*Oe-(St*I+At*pe+un*Oe)),c[9]=Je*(St*G+Cn*pe+dn*Oe-(wt*G+cn*pe+hr*Oe)),c[10]=Je*(At*G+cn*I+Sn*Oe-(Et*G+Cn*I+Tn*Oe)),c[11]=Je*(un*G+hr*I+Tn*pe-(Lt*G+dn*I+Sn*pe)),c[12]=Je*(At*Y+un*me+St*C-(Lt*me+wt*C+Et*Y)),c[13]=Je*(hr*me+wt*k+cn*Y-(Cn*Y+dn*me+St*k)),c[14]=Je*(Cn*C+Tn*me+Et*k-(Sn*me+At*k+cn*C)),c[15]=Je*(Sn*Y+Lt*k+dn*C-(hr*C+Tn*Y+un*k)),c}function X(a){const v=a[0],c=a[0*4+1],h=a[0*4+2],w=a[0*4+3],k=a[1*4+0],G=a[1*4+1],y=a[1*4+2],S=a[1*4+3],C=a[2*4+0],I=a[2*4+1],H=a[2*4+2],Z=a[2*4+3],Y=a[3*4+0],pe=a[3*4+1],Ae=a[3*4+2],fe=a[3*4+3],me=H*fe,Oe=Ae*Z,Fe=y*fe,Ze=Ae*S,lt=y*Z,nt=H*S,ut=h*fe,ft=Ae*w,ht=h*Z,pt=H*w,rt=h*S,it=y*w,yt=me*G+Ze*I+lt*pe-(Oe*G+Fe*I+nt*pe),_t=Oe*c+ut*I+pt*pe-(me*c+ft*I+ht*pe),wt=Fe*c+ft*G+rt*pe-(Ze*c+ut*G+it*pe),St=nt*c+ht*G+it*I-(lt*c+pt*G+rt*I);return v*yt+k*_t+C*wt+Y*St}const K=te;function J(a,v,c){const h=c??new o(16),w=a[0],k=a[1],G=a[2],y=a[3],S=a[4],C=a[5],I=a[6],H=a[7],Z=a[8],Y=a[9],pe=a[10],Ae=a[11],fe=a[12],me=a[13],Oe=a[14],Fe=a[15],Ze=v[0],lt=v[1],nt=v[2],ut=v[3],ft=v[4],ht=v[5],pt=v[6],rt=v[7],it=v[8],yt=v[9],_t=v[10],wt=v[11],St=v[12],At=v[13],Et=v[14],Lt=v[15];return h[0]=w*Ze+S*lt+Z*nt+fe*ut,h[1]=k*Ze+C*lt+Y*nt+me*ut,h[2]=G*Ze+I*lt+pe*nt+Oe*ut,h[3]=y*Ze+H*lt+Ae*nt+Fe*ut,h[4]=w*ft+S*ht+Z*pt+fe*rt,h[5]=k*ft+C*ht+Y*pt+me*rt,h[6]=G*ft+I*ht+pe*pt+Oe*rt,h[7]=y*ft+H*ht+Ae*pt+Fe*rt,h[8]=w*it+S*yt+Z*_t+fe*wt,h[9]=k*it+C*yt+Y*_t+me*wt,h[10]=G*it+I*yt+pe*_t+Oe*wt,h[11]=y*it+H*yt+Ae*_t+Fe*wt,h[12]=w*St+S*At+Z*Et+fe*Lt,h[13]=k*St+C*At+Y*Et+me*Lt,h[14]=G*St+I*At+pe*Et+Oe*Lt,h[15]=y*St+H*At+Ae*Et+Fe*Lt,h}const F=J;function q(a,v,c){const h=c??Q();return a!==h&&(h[0]=a[0],h[1]=a[1],h[2]=a[2],h[3]=a[3],h[4]=a[4],h[5]=a[5],h[6]=a[6],h[7]=a[7],h[8]=a[8],h[9]=a[9],h[10]=a[10],h[11]=a[11]),h[12]=v[0],h[13]=v[1],h[14]=v[2],h[15]=1,h}function ue(a,v){const c=v??i.create();return c[0]=a[12],c[1]=a[13],c[2]=a[14],c}function de(a,v,c){const h=c??i.create(),w=v*4;return h[0]=a[w+0],h[1]=a[w+1],h[2]=a[w+2],h}function Pe(a,v,c,h){const w=h===a?h:L(a,h),k=c*4;return w[k+0]=v[0],w[k+1]=v[1],w[k+2]=v[2],w}function Ie(a,v){const c=v??i.create(),h=a[0],w=a[1],k=a[2],G=a[4],y=a[5],S=a[6],C=a[8],I=a[9],H=a[10];return c[0]=Math.sqrt(h*h+w*w+k*k),c[1]=Math.sqrt(G*G+y*y+S*S),c[2]=Math.sqrt(C*C+I*I+H*H),c}function Ne(a,v,c,h,w){const k=w??new o(16),G=Math.tan(Math.PI*.5-.5*a);if(k[0]=G/v,k[1]=0,k[2]=0,k[3]=0,k[4]=0,k[5]=G,k[6]=0,k[7]=0,k[8]=0,k[9]=0,k[11]=-1,k[12]=0,k[13]=0,k[15]=0,Number.isFinite(h)){const y=1/(c-h);k[10]=h*y,k[14]=h*c*y}else k[10]=-1,k[14]=-c;return k}function Be(a,v,c,h=1/0,w){const k=w??new o(16),G=1/Math.tan(a*.5);if(k[0]=G/v,k[1]=0,k[2]=0,k[3]=0,k[4]=0,k[5]=G,k[6]=0,k[7]=0,k[8]=0,k[9]=0,k[11]=-1,k[12]=0,k[13]=0,k[15]=0,h===1/0)k[10]=0,k[14]=c;else{const y=1/(h-c);k[10]=c*y,k[14]=h*c*y}return k}function De(a,v,c,h,w,k,G){const y=G??new o(16);return y[0]=2/(v-a),y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2/(h-c),y[6]=0,y[7]=0,y[8]=0,y[9]=0,y[10]=1/(w-k),y[11]=0,y[12]=(v+a)/(a-v),y[13]=(h+c)/(c-h),y[14]=w/(w-k),y[15]=1,y}function ke(a,v,c,h,w,k,G){const y=G??new o(16),S=v-a,C=h-c,I=w-k;return y[0]=2*w/S,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*w/C,y[6]=0,y[7]=0,y[8]=(a+v)/S,y[9]=(h+c)/C,y[10]=k/I,y[11]=-1,y[12]=0,y[13]=0,y[14]=w*k/I,y[15]=0,y}function je(a,v,c,h,w,k=1/0,G){const y=G??new o(16),S=v-a,C=h-c;if(y[0]=2*w/S,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*w/C,y[6]=0,y[7]=0,y[8]=(a+v)/S,y[9]=(h+c)/C,y[11]=-1,y[12]=0,y[13]=0,y[15]=0,k===1/0)y[10]=0,y[14]=w;else{const I=1/(k-w);y[10]=w*I,y[14]=k*w*I}return y}const Ee=i.create(),ze=i.create(),Se=i.create();function Ke(a,v,c,h){const w=h??new o(16);return i.normalize(i.subtract(v,a,Se),Se),i.normalize(i.cross(c,Se,Ee),Ee),i.normalize(i.cross(Se,Ee,ze),ze),w[0]=Ee[0],w[1]=Ee[1],w[2]=Ee[2],w[3]=0,w[4]=ze[0],w[5]=ze[1],w[6]=ze[2],w[7]=0,w[8]=Se[0],w[9]=Se[1],w[10]=Se[2],w[11]=0,w[12]=a[0],w[13]=a[1],w[14]=a[2],w[15]=1,w}function Ve(a,v,c,h){const w=h??new o(16);return i.normalize(i.subtract(a,v,Se),Se),i.normalize(i.cross(c,Se,Ee),Ee),i.normalize(i.cross(Se,Ee,ze),ze),w[0]=Ee[0],w[1]=Ee[1],w[2]=Ee[2],w[3]=0,w[4]=ze[0],w[5]=ze[1],w[6]=ze[2],w[7]=0,w[8]=Se[0],w[9]=Se[1],w[10]=Se[2],w[11]=0,w[12]=a[0],w[13]=a[1],w[14]=a[2],w[15]=1,w}function He(a,v,c,h){const w=h??new o(16);return i.normalize(i.subtract(a,v,Se),Se),i.normalize(i.cross(c,Se,Ee),Ee),i.normalize(i.cross(Se,Ee,ze),ze),w[0]=Ee[0],w[1]=ze[0],w[2]=Se[0],w[3]=0,w[4]=Ee[1],w[5]=ze[1],w[6]=Se[1],w[7]=0,w[8]=Ee[2],w[9]=ze[2],w[10]=Se[2],w[11]=0,w[12]=-(Ee[0]*a[0]+Ee[1]*a[1]+Ee[2]*a[2]),w[13]=-(ze[0]*a[0]+ze[1]*a[1]+ze[2]*a[2]),w[14]=-(Se[0]*a[0]+Se[1]*a[1]+Se[2]*a[2]),w[15]=1,w}function le(a,v){const c=v??new o(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=a[0],c[13]=a[1],c[14]=a[2],c[15]=1,c}function _e(a,v,c){const h=c??new o(16),w=v[0],k=v[1],G=v[2],y=a[0],S=a[1],C=a[2],I=a[3],H=a[1*4+0],Z=a[1*4+1],Y=a[1*4+2],pe=a[1*4+3],Ae=a[2*4+0],fe=a[2*4+1],me=a[2*4+2],Oe=a[2*4+3],Fe=a[3*4+0],Ze=a[3*4+1],lt=a[3*4+2],nt=a[3*4+3];return a!==h&&(h[0]=y,h[1]=S,h[2]=C,h[3]=I,h[4]=H,h[5]=Z,h[6]=Y,h[7]=pe,h[8]=Ae,h[9]=fe,h[10]=me,h[11]=Oe),h[12]=y*w+H*k+Ae*G+Fe,h[13]=S*w+Z*k+fe*G+Ze,h[14]=C*w+Y*k+me*G+lt,h[15]=I*w+pe*k+Oe*G+nt,h}function oe(a,v){const c=v??new o(16),h=Math.cos(a),w=Math.sin(a);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=h,c[6]=w,c[7]=0,c[8]=0,c[9]=-w,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function O(a,v,c){const h=c??new o(16),w=a[4],k=a[5],G=a[6],y=a[7],S=a[8],C=a[9],I=a[10],H=a[11],Z=Math.cos(v),Y=Math.sin(v);return h[4]=Z*w+Y*S,h[5]=Z*k+Y*C,h[6]=Z*G+Y*I,h[7]=Z*y+Y*H,h[8]=Z*S-Y*w,h[9]=Z*C-Y*k,h[10]=Z*I-Y*G,h[11]=Z*H-Y*y,a!==h&&(h[0]=a[0],h[1]=a[1],h[2]=a[2],h[3]=a[3],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function ee(a,v){const c=v??new o(16),h=Math.cos(a),w=Math.sin(a);return c[0]=h,c[1]=0,c[2]=-w,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=w,c[9]=0,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Me(a,v,c){const h=c??new o(16),w=a[0*4+0],k=a[0*4+1],G=a[0*4+2],y=a[0*4+3],S=a[2*4+0],C=a[2*4+1],I=a[2*4+2],H=a[2*4+3],Z=Math.cos(v),Y=Math.sin(v);return h[0]=Z*w-Y*S,h[1]=Z*k-Y*C,h[2]=Z*G-Y*I,h[3]=Z*y-Y*H,h[8]=Z*S+Y*w,h[9]=Z*C+Y*k,h[10]=Z*I+Y*G,h[11]=Z*H+Y*y,a!==h&&(h[4]=a[4],h[5]=a[5],h[6]=a[6],h[7]=a[7],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function Te(a,v){const c=v??new o(16),h=Math.cos(a),w=Math.sin(a);return c[0]=h,c[1]=w,c[2]=0,c[3]=0,c[4]=-w,c[5]=h,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Ce(a,v,c){const h=c??new o(16),w=a[0*4+0],k=a[0*4+1],G=a[0*4+2],y=a[0*4+3],S=a[1*4+0],C=a[1*4+1],I=a[1*4+2],H=a[1*4+3],Z=Math.cos(v),Y=Math.sin(v);return h[0]=Z*w+Y*S,h[1]=Z*k+Y*C,h[2]=Z*G+Y*I,h[3]=Z*y+Y*H,h[4]=Z*S-Y*w,h[5]=Z*C-Y*k,h[6]=Z*I-Y*G,h[7]=Z*H-Y*y,a!==h&&(h[8]=a[8],h[9]=a[9],h[10]=a[10],h[11]=a[11],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function Ue(a,v,c){const h=c??new o(16);let w=a[0],k=a[1],G=a[2];const y=Math.sqrt(w*w+k*k+G*G);w/=y,k/=y,G/=y;const S=w*w,C=k*k,I=G*G,H=Math.cos(v),Z=Math.sin(v),Y=1-H;return h[0]=S+(1-S)*H,h[1]=w*k*Y+G*Z,h[2]=w*G*Y-k*Z,h[3]=0,h[4]=w*k*Y-G*Z,h[5]=C+(1-C)*H,h[6]=k*G*Y+w*Z,h[7]=0,h[8]=w*G*Y+k*Z,h[9]=k*G*Y-w*Z,h[10]=I+(1-I)*H,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const f=Ue;function R(a,v,c,h){const w=h??new o(16);let k=v[0],G=v[1],y=v[2];const S=Math.sqrt(k*k+G*G+y*y);k/=S,G/=S,y/=S;const C=k*k,I=G*G,H=y*y,Z=Math.cos(c),Y=Math.sin(c),pe=1-Z,Ae=C+(1-C)*Z,fe=k*G*pe+y*Y,me=k*y*pe-G*Y,Oe=k*G*pe-y*Y,Fe=I+(1-I)*Z,Ze=G*y*pe+k*Y,lt=k*y*pe+G*Y,nt=G*y*pe-k*Y,ut=H+(1-H)*Z,ft=a[0],ht=a[1],pt=a[2],rt=a[3],it=a[4],yt=a[5],_t=a[6],wt=a[7],St=a[8],At=a[9],Et=a[10],Lt=a[11];return w[0]=Ae*ft+fe*it+me*St,w[1]=Ae*ht+fe*yt+me*At,w[2]=Ae*pt+fe*_t+me*Et,w[3]=Ae*rt+fe*wt+me*Lt,w[4]=Oe*ft+Fe*it+Ze*St,w[5]=Oe*ht+Fe*yt+Ze*At,w[6]=Oe*pt+Fe*_t+Ze*Et,w[7]=Oe*rt+Fe*wt+Ze*Lt,w[8]=lt*ft+nt*it+ut*St,w[9]=lt*ht+nt*yt+ut*At,w[10]=lt*pt+nt*_t+ut*Et,w[11]=lt*rt+nt*wt+ut*Lt,a!==w&&(w[12]=a[12],w[13]=a[13],w[14]=a[14],w[15]=a[15]),w}const d=R;function p(a,v){const c=v??new o(16);return c[0]=a[0],c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=a[1],c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function x(a,v,c){const h=c??new o(16),w=v[0],k=v[1],G=v[2];return h[0]=w*a[0*4+0],h[1]=w*a[0*4+1],h[2]=w*a[0*4+2],h[3]=w*a[0*4+3],h[4]=k*a[1*4+0],h[5]=k*a[1*4+1],h[6]=k*a[1*4+2],h[7]=k*a[1*4+3],h[8]=G*a[2*4+0],h[9]=G*a[2*4+1],h[10]=G*a[2*4+2],h[11]=G*a[2*4+3],a!==h&&(h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function P(a,v){const c=v??new o(16);return c[0]=a,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=a,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=a,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function B(a,v,c){const h=c??new o(16);return h[0]=v*a[0*4+0],h[1]=v*a[0*4+1],h[2]=v*a[0*4+2],h[3]=v*a[0*4+3],h[4]=v*a[1*4+0],h[5]=v*a[1*4+1],h[6]=v*a[1*4+2],h[7]=v*a[1*4+3],h[8]=v*a[2*4+0],h[9]=v*a[2*4+1],h[10]=v*a[2*4+2],h[11]=v*a[2*4+3],a!==h&&(h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}return{create:u,set:g,fromMat3:_,fromQuat:T,negate:M,copy:L,clone:A,equalsApproximately:z,equals:W,identity:Q,transpose:$,inverse:te,determinant:X,invert:K,multiply:J,mul:F,setTranslation:q,getTranslation:ue,getAxis:de,setAxis:Pe,getScaling:Ie,perspective:Ne,perspectiveReverseZ:Be,ortho:De,frustum:ke,frustumReverseZ:je,aim:Ke,cameraAim:Ve,lookAt:He,translation:le,translate:_e,rotationX:oe,rotateX:O,rotationY:ee,rotateY:Me,rotationZ:Te,rotateZ:Ce,axisRotation:Ue,rotation:f,axisRotate:R,rotate:d,scaling:p,scale:x,uniformScaling:P,uniformScale:B}}const td=new Map;function dm(o){let i=td.get(o);return i||(i=cm(o),td.set(o,i)),i}function fm(o){const i=qs(o);function u(f,R,d,p){const x=new o(4);return f!==void 0&&(x[0]=f,R!==void 0&&(x[1]=R,d!==void 0&&(x[2]=d,p!==void 0&&(x[3]=p)))),x}const g=u;function _(f,R,d,p,x){const P=x??new o(4);return P[0]=f,P[1]=R,P[2]=d,P[3]=p,P}function T(f,R,d){const p=d??new o(4),x=R*.5,P=Math.sin(x);return p[0]=P*f[0],p[1]=P*f[1],p[2]=P*f[2],p[3]=Math.cos(x),p}function M(f,R){const d=R??i.create(3),p=Math.acos(f[3])*2,x=Math.sin(p*.5);return x>be?(d[0]=f[0]/x,d[1]=f[1]/x,d[2]=f[2]/x):(d[0]=1,d[1]=0,d[2]=0),{angle:p,axis:d}}function L(f,R){const d=ke(f,R);return Math.acos(2*d*d-1)}function A(f,R,d){const p=d??new o(4),x=f[0],P=f[1],B=f[2],a=f[3],v=R[0],c=R[1],h=R[2],w=R[3];return p[0]=x*w+a*v+P*h-B*c,p[1]=P*w+a*c+B*v-x*h,p[2]=B*w+a*h+x*c-P*v,p[3]=a*w-x*v-P*c-B*h,p}const z=A;function W(f,R,d){const p=d??new o(4),x=R*.5,P=f[0],B=f[1],a=f[2],v=f[3],c=Math.sin(x),h=Math.cos(x);return p[0]=P*h+v*c,p[1]=B*h+a*c,p[2]=a*h-B*c,p[3]=v*h-P*c,p}function Q(f,R,d){const p=d??new o(4),x=R*.5,P=f[0],B=f[1],a=f[2],v=f[3],c=Math.sin(x),h=Math.cos(x);return p[0]=P*h-a*c,p[1]=B*h+v*c,p[2]=a*h+P*c,p[3]=v*h-B*c,p}function $(f,R,d){const p=d??new o(4),x=R*.5,P=f[0],B=f[1],a=f[2],v=f[3],c=Math.sin(x),h=Math.cos(x);return p[0]=P*h+B*c,p[1]=B*h-P*c,p[2]=a*h+v*c,p[3]=v*h-a*c,p}function te(f,R,d,p){const x=p??new o(4),P=f[0],B=f[1],a=f[2],v=f[3];let c=R[0],h=R[1],w=R[2],k=R[3],G=P*c+B*h+a*w+v*k;G<0&&(G=-G,c=-c,h=-h,w=-w,k=-k);let y,S;if(1-G>be){const C=Math.acos(G),I=Math.sin(C);y=Math.sin((1-d)*C)/I,S=Math.sin(d*C)/I}else y=1-d,S=d;return x[0]=y*P+S*c,x[1]=y*B+S*h,x[2]=y*a+S*w,x[3]=y*v+S*k,x}function X(f,R){const d=R??new o(4),p=f[0],x=f[1],P=f[2],B=f[3],a=p*p+x*x+P*P+B*B,v=a?1/a:0;return d[0]=-p*v,d[1]=-x*v,d[2]=-P*v,d[3]=B*v,d}function K(f,R){const d=R??new o(4);return d[0]=-f[0],d[1]=-f[1],d[2]=-f[2],d[3]=f[3],d}function J(f,R){const d=R??new o(4),p=f[0]+f[5]+f[10];if(p>0){const x=Math.sqrt(p+1);d[3]=.5*x;const P=.5/x;d[0]=(f[6]-f[9])*P,d[1]=(f[8]-f[2])*P,d[2]=(f[1]-f[4])*P}else{let x=0;f[5]>f[0]&&(x=1),f[10]>f[x*4+x]&&(x=2);const P=(x+1)%3,B=(x+2)%3,a=Math.sqrt(f[x*4+x]-f[P*4+P]-f[B*4+B]+1);d[x]=.5*a;const v=.5/a;d[3]=(f[P*4+B]-f[B*4+P])*v,d[P]=(f[P*4+x]+f[x*4+P])*v,d[B]=(f[B*4+x]+f[x*4+B])*v}return d}function F(f,R,d,p,x){const P=x??new o(4),B=f*.5,a=R*.5,v=d*.5,c=Math.sin(B),h=Math.cos(B),w=Math.sin(a),k=Math.cos(a),G=Math.sin(v),y=Math.cos(v);switch(p){case"xyz":P[0]=c*k*y+h*w*G,P[1]=h*w*y-c*k*G,P[2]=h*k*G+c*w*y,P[3]=h*k*y-c*w*G;break;case"xzy":P[0]=c*k*y-h*w*G,P[1]=h*w*y-c*k*G,P[2]=h*k*G+c*w*y,P[3]=h*k*y+c*w*G;break;case"yxz":P[0]=c*k*y+h*w*G,P[1]=h*w*y-c*k*G,P[2]=h*k*G-c*w*y,P[3]=h*k*y+c*w*G;break;case"yzx":P[0]=c*k*y+h*w*G,P[1]=h*w*y+c*k*G,P[2]=h*k*G-c*w*y,P[3]=h*k*y-c*w*G;break;case"zxy":P[0]=c*k*y-h*w*G,P[1]=h*w*y+c*k*G,P[2]=h*k*G+c*w*y,P[3]=h*k*y-c*w*G;break;case"zyx":P[0]=c*k*y-h*w*G,P[1]=h*w*y+c*k*G,P[2]=h*k*G-c*w*y,P[3]=h*k*y+c*w*G;break;default:throw new Error(`Unknown rotation order: ${p}`)}return P}function q(f,R){const d=R??new o(4);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[3]=f[3],d}const ue=q;function de(f,R,d){const p=d??new o(4);return p[0]=f[0]+R[0],p[1]=f[1]+R[1],p[2]=f[2]+R[2],p[3]=f[3]+R[3],p}function Pe(f,R,d){const p=d??new o(4);return p[0]=f[0]-R[0],p[1]=f[1]-R[1],p[2]=f[2]-R[2],p[3]=f[3]-R[3],p}const Ie=Pe;function Ne(f,R,d){const p=d??new o(4);return p[0]=f[0]*R,p[1]=f[1]*R,p[2]=f[2]*R,p[3]=f[3]*R,p}const Be=Ne;function De(f,R,d){const p=d??new o(4);return p[0]=f[0]/R,p[1]=f[1]/R,p[2]=f[2]/R,p[3]=f[3]/R,p}function ke(f,R){return f[0]*R[0]+f[1]*R[1]+f[2]*R[2]+f[3]*R[3]}function je(f,R,d,p){const x=p??new o(4);return x[0]=f[0]+d*(R[0]-f[0]),x[1]=f[1]+d*(R[1]-f[1]),x[2]=f[2]+d*(R[2]-f[2]),x[3]=f[3]+d*(R[3]-f[3]),x}function Ee(f){const R=f[0],d=f[1],p=f[2],x=f[3];return Math.sqrt(R*R+d*d+p*p+x*x)}const ze=Ee;function Se(f){const R=f[0],d=f[1],p=f[2],x=f[3];return R*R+d*d+p*p+x*x}const Ke=Se;function Ve(f,R){const d=R??new o(4),p=f[0],x=f[1],P=f[2],B=f[3],a=Math.sqrt(p*p+x*x+P*P+B*B);return a>1e-5?(d[0]=p/a,d[1]=x/a,d[2]=P/a,d[3]=B/a):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function He(f,R){return Math.abs(f[0]-R[0])<be&&Math.abs(f[1]-R[1])<be&&Math.abs(f[2]-R[2])<be&&Math.abs(f[3]-R[3])<be}function le(f,R){return f[0]===R[0]&&f[1]===R[1]&&f[2]===R[2]&&f[3]===R[3]}function _e(f){const R=f??new o(4);return R[0]=0,R[1]=0,R[2]=0,R[3]=1,R}const oe=i.create(),O=i.create(),ee=i.create();function Me(f,R,d){const p=d??new o(4),x=i.dot(f,R);return x<-.999999?(i.cross(O,f,oe),i.len(oe)<1e-6&&i.cross(ee,f,oe),i.normalize(oe,oe),T(oe,Math.PI,p),p):x>.999999?(p[0]=0,p[1]=0,p[2]=0,p[3]=1,p):(i.cross(f,R,oe),p[0]=oe[0],p[1]=oe[1],p[2]=oe[2],p[3]=1+x,Ve(p,p))}const Te=new o(4),Ce=new o(4);function Ue(f,R,d,p,x,P){const B=P??new o(4);return te(f,p,x,Te),te(R,d,x,Ce),te(Te,Ce,2*x*(1-x),B),B}return{create:u,fromValues:g,set:_,fromAxisAngle:T,toAxisAngle:M,angle:L,multiply:A,mul:z,rotateX:W,rotateY:Q,rotateZ:$,slerp:te,inverse:X,conjugate:K,fromMat:J,fromEuler:F,copy:q,clone:ue,add:de,subtract:Pe,sub:Ie,mulScalar:Ne,scale:Be,divScalar:De,dot:ke,lerp:je,length:Ee,len:ze,lengthSq:Se,lenSq:Ke,normalize:Ve,equalsApproximately:He,equals:le,identity:_e,rotationTo:Me,sqlerp:Ue}}const nd=new Map;function hm(o){let i=nd.get(o);return i||(i=fm(o),nd.set(o,i)),i}function pm(o){function i(d,p,x,P){const B=new o(4);return d!==void 0&&(B[0]=d,p!==void 0&&(B[1]=p,x!==void 0&&(B[2]=x,P!==void 0&&(B[3]=P)))),B}const u=i;function g(d,p,x,P,B){const a=B??new o(4);return a[0]=d,a[1]=p,a[2]=x,a[3]=P,a}function _(d,p){const x=p??new o(4);return x[0]=Math.ceil(d[0]),x[1]=Math.ceil(d[1]),x[2]=Math.ceil(d[2]),x[3]=Math.ceil(d[3]),x}function T(d,p){const x=p??new o(4);return x[0]=Math.floor(d[0]),x[1]=Math.floor(d[1]),x[2]=Math.floor(d[2]),x[3]=Math.floor(d[3]),x}function M(d,p){const x=p??new o(4);return x[0]=Math.round(d[0]),x[1]=Math.round(d[1]),x[2]=Math.round(d[2]),x[3]=Math.round(d[3]),x}function L(d,p=0,x=1,P){const B=P??new o(4);return B[0]=Math.min(x,Math.max(p,d[0])),B[1]=Math.min(x,Math.max(p,d[1])),B[2]=Math.min(x,Math.max(p,d[2])),B[3]=Math.min(x,Math.max(p,d[3])),B}function A(d,p,x){const P=x??new o(4);return P[0]=d[0]+p[0],P[1]=d[1]+p[1],P[2]=d[2]+p[2],P[3]=d[3]+p[3],P}function z(d,p,x,P){const B=P??new o(4);return B[0]=d[0]+p[0]*x,B[1]=d[1]+p[1]*x,B[2]=d[2]+p[2]*x,B[3]=d[3]+p[3]*x,B}function W(d,p,x){const P=x??new o(4);return P[0]=d[0]-p[0],P[1]=d[1]-p[1],P[2]=d[2]-p[2],P[3]=d[3]-p[3],P}const Q=W;function $(d,p){return Math.abs(d[0]-p[0])<be&&Math.abs(d[1]-p[1])<be&&Math.abs(d[2]-p[2])<be&&Math.abs(d[3]-p[3])<be}function te(d,p){return d[0]===p[0]&&d[1]===p[1]&&d[2]===p[2]&&d[3]===p[3]}function X(d,p,x,P){const B=P??new o(4);return B[0]=d[0]+x*(p[0]-d[0]),B[1]=d[1]+x*(p[1]-d[1]),B[2]=d[2]+x*(p[2]-d[2]),B[3]=d[3]+x*(p[3]-d[3]),B}function K(d,p,x,P){const B=P??new o(4);return B[0]=d[0]+x[0]*(p[0]-d[0]),B[1]=d[1]+x[1]*(p[1]-d[1]),B[2]=d[2]+x[2]*(p[2]-d[2]),B[3]=d[3]+x[3]*(p[3]-d[3]),B}function J(d,p,x){const P=x??new o(4);return P[0]=Math.max(d[0],p[0]),P[1]=Math.max(d[1],p[1]),P[2]=Math.max(d[2],p[2]),P[3]=Math.max(d[3],p[3]),P}function F(d,p,x){const P=x??new o(4);return P[0]=Math.min(d[0],p[0]),P[1]=Math.min(d[1],p[1]),P[2]=Math.min(d[2],p[2]),P[3]=Math.min(d[3],p[3]),P}function q(d,p,x){const P=x??new o(4);return P[0]=d[0]*p,P[1]=d[1]*p,P[2]=d[2]*p,P[3]=d[3]*p,P}const ue=q;function de(d,p,x){const P=x??new o(4);return P[0]=d[0]/p,P[1]=d[1]/p,P[2]=d[2]/p,P[3]=d[3]/p,P}function Pe(d,p){const x=p??new o(4);return x[0]=1/d[0],x[1]=1/d[1],x[2]=1/d[2],x[3]=1/d[3],x}const Ie=Pe;function Ne(d,p){return d[0]*p[0]+d[1]*p[1]+d[2]*p[2]+d[3]*p[3]}function Be(d){const p=d[0],x=d[1],P=d[2],B=d[3];return Math.sqrt(p*p+x*x+P*P+B*B)}const De=Be;function ke(d){const p=d[0],x=d[1],P=d[2],B=d[3];return p*p+x*x+P*P+B*B}const je=ke;function Ee(d,p){const x=d[0]-p[0],P=d[1]-p[1],B=d[2]-p[2],a=d[3]-p[3];return Math.sqrt(x*x+P*P+B*B+a*a)}const ze=Ee;function Se(d,p){const x=d[0]-p[0],P=d[1]-p[1],B=d[2]-p[2],a=d[3]-p[3];return x*x+P*P+B*B+a*a}const Ke=Se;function Ve(d,p){const x=p??new o(4),P=d[0],B=d[1],a=d[2],v=d[3],c=Math.sqrt(P*P+B*B+a*a+v*v);return c>1e-5?(x[0]=P/c,x[1]=B/c,x[2]=a/c,x[3]=v/c):(x[0]=0,x[1]=0,x[2]=0,x[3]=0),x}function He(d,p){const x=p??new o(4);return x[0]=-d[0],x[1]=-d[1],x[2]=-d[2],x[3]=-d[3],x}function le(d,p){const x=p??new o(4);return x[0]=d[0],x[1]=d[1],x[2]=d[2],x[3]=d[3],x}const _e=le;function oe(d,p,x){const P=x??new o(4);return P[0]=d[0]*p[0],P[1]=d[1]*p[1],P[2]=d[2]*p[2],P[3]=d[3]*p[3],P}const O=oe;function ee(d,p,x){const P=x??new o(4);return P[0]=d[0]/p[0],P[1]=d[1]/p[1],P[2]=d[2]/p[2],P[3]=d[3]/p[3],P}const Me=ee;function Te(d){const p=d??new o(4);return p[0]=0,p[1]=0,p[2]=0,p[3]=0,p}function Ce(d,p,x){const P=x??new o(4),B=d[0],a=d[1],v=d[2],c=d[3];return P[0]=p[0]*B+p[4]*a+p[8]*v+p[12]*c,P[1]=p[1]*B+p[5]*a+p[9]*v+p[13]*c,P[2]=p[2]*B+p[6]*a+p[10]*v+p[14]*c,P[3]=p[3]*B+p[7]*a+p[11]*v+p[15]*c,P}function Ue(d,p,x){const P=x??new o(4);return Ve(d,P),q(P,p,P)}function f(d,p,x){const P=x??new o(4);return Be(d)>p?Ue(d,p,P):le(d,P)}function R(d,p,x){const P=x??new o(4);return X(d,p,.5,P)}return{create:i,fromValues:u,set:g,ceil:_,floor:T,round:M,clamp:L,add:A,addScaled:z,subtract:W,sub:Q,equalsApproximately:$,equals:te,lerp:X,lerpV:K,max:J,min:F,mulScalar:q,scale:ue,divScalar:de,inverse:Pe,invert:Ie,dot:Ne,length:Be,len:De,lengthSq:ke,lenSq:je,distance:Ee,dist:ze,distanceSq:Se,distSq:Ke,normalize:Ve,negate:He,copy:le,clone:_e,multiply:oe,mul:O,divide:ee,div:Me,zero:Te,transformMat4:Ce,setLength:Ue,truncate:f,midpoint:R}}const rd=new Map;function mm(o){let i=rd.get(o);return i||(i=pm(o),rd.set(o,i)),i}function rl(o,i,u,g,_,T){return{mat3:um(o),mat4:dm(i),quat:hm(u),vec2:Ad(g),vec3:qs(_),vec4:mm(T)}}const{mat3:ug,mat4:qt,quat:cg,vec2:br,vec3:Kn,vec4:vn}=rl(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);rl(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);rl(sm,Array,Array,Array,Array,Array);const gm=new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]);class vm{constructor(i,u){ie(this,"device");ie(this,"presentFormat");ie(this,"quit",!1);ie(this,"pipeline");ie(this,"vertexBuffer");ie(this,"indexBuffer");ie(this,"indexCount");ie(this,"projViewModelBuffer");ie(this,"projViewModelBindGroup");ie(this,"supportedFeatures");this.device=i,this.presentFormat=u,this.supportedFeatures=i.features;const g=this.device.createShaderModule({code:rm}),_=new Float32Array([-1,-1,-1,1,0,0,0,1,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,-1,1,-1,1,0,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1]),T=new Uint32Array([0,1,2,0,2,3,1,5,6,1,6,2,2,6,7,2,7,3,4,7,6,4,6,5,0,3,7,0,7,4,0,4,5,0,5,1]);this.indexCount=T.length,this.vertexBuffer=this.device.createBuffer({size:_.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,_,0,_.length);const M=[{attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}],arrayStride:2*16,stepMode:"vertex"}];this.indexBuffer=this.device.createBuffer({size:T.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,T,0,T.length);const L=16*4;this.projViewModelBuffer=this.device.createBuffer({size:L,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const A=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.projViewModelBindGroup=this.device.createBindGroup({layout:A,entries:[{binding:0,resource:{buffer:this.projViewModelBuffer}}]});const z={vertex:{module:g,entryPoint:"vertex_main",buffers:M},fragment:{module:g,entryPoint:"fragment_main",targets:[{format:this.presentFormat}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},layout:this.device.createPipelineLayout({bindGroupLayouts:[A]})};this.pipeline=this.device.createRenderPipeline(z)}setupUI(i){gm.forEach(u=>{const g=this.supportedFeatures.has(u);i.add({enabled:g},"enabled").name(u).disable(!0)})}draw(i,u,g){const _=i.createView(),T=60*Math.PI/180,A=qt.perspective(T,u,.1,1e3),z=[3,5,10],W=[0,0,0],Q=[0,1,0],$=qt.lookAt(z,W,Q),te=qt.axisRotation([1,1,0],g/1e3),X=qt.mul(A,qt.mul($,te));this.device.queue.writeBuffer(this.projViewModelBuffer,0,X,0,X.length);const K=this.device.createCommandEncoder(),J={r:.5,g:.5,b:.5,a:0},F=K.beginRenderPass({colorAttachments:[{clearValue:J,loadOp:"clear",storeOp:"store",view:_}]});F.setPipeline(this.pipeline),F.setVertexBuffer(0,this.vertexBuffer),F.setIndexBuffer(this.indexBuffer,"uint32",0,this.indexBuffer.size),F.setBindGroup(0,this.projViewModelBindGroup),F.drawIndexed(this.indexCount,1,0,0,0),F.end(),this.device.queue.submit([K.finish()])}}const ym=(o,i,u)=>new vm(o,i),_m=`struct Atmosphere
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

@group(0) @binding(0) var output_color: texture_storage_2d<rgba32float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;
@group(0) @binding(4) var skyview_lut: texture_2d<f32>;

struct CameraUBO
{
    inv_proj: mat4x4<f32>,
    inv_view: mat4x4<f32>,
    proj_view: mat4x4<f32>,
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

fn sampleSkyLuminance(
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
        * sampleSkyLuminance(atmosphere, light, surface_position, reflection_direction) 
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

    let ndc_space_coord = (uv - vec2<f32>(0.5)) * 2.0 * vec2<f32>(1.0, -1.0);
    let near_plane_depth = 1.0;
    let direction_view_space = b_camera.inv_proj * vec4(ndc_space_coord, near_plane_depth, 1.0);
    let direction_world = normalize((b_camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

    let color_with_depth_in_alpha = textureLoad(gbuffer_color_with_depth_in_alpha, texel_coord, 0);
    let normal = textureLoad(gbuffer_normal, texel_coord, 0); 

    let depth = color_with_depth_in_alpha.a / METERS_PER_MM;

    var luminance_transfer = vec3<f32>(0.0);

    let sin_horizon: f32 = atmosphere.planetRadiusMm / length(origin);
    let cos_horizon: f32 = -safeSqrt(1.0 - sin_horizon * sin_horizon);
    let intersects_ground = dot(normalize(origin), normalize(direction_world)) < cos_horizon;
    
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
    output.position = b_ubo.vertex_scale * QUAD_VERTICES[index];
    output.uv = QUAD_UVS[index];
    return output; 
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4<f32>
{
    let color = b_ubo.color_gain * textureSample(b_texture, b_sampler, fragData.uv);
    return vec4<f32>(color.xyz, 1.0);
}`,Rm=`// Displace a grid of vertices representing the ocean surface, then rasterize into the gbuffer with a graphics pass

/* --- begin ocean mesh displacement --- */

// Defines the world half-extent (radius of the square) of the patch where the ocean waves are defined  
const WORLD_HALF_EXTENT_METERS = 300.0;

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
    let wave_amplitude = (1.0 - smoothstep(0.0, WORLD_HALF_EXTENT_METERS, length(coords))) * wave.amplitude;
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
    let wave_amplitude = (1.0 - smoothstep(0.0, WORLD_HALF_EXTENT_METERS, length(coords))) * wave.amplitude;
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

const VERTEX_DIMENSION = 2048u;
const VERTEX_COUNT = VERTEX_DIMENSION * VERTEX_DIMENSION;
// const TRIANGLE_COUNT = 2u * (VERTEX_DIMENSION - 1u) * (VERTEX_DIMENSION - 1u);
// const INDEX_COUNT = 3u * TRIANGLE_COUNT;

const WAVE_COUNT = 6u;

@id(0) override wave_model: u32 = 1u;
const WAVE_MODEL_COSINE = 0u;
const WAVE_MODEL_GERSTNER = 1u;

// Vertices are in (x,y,z) world coordinates, so during rasterization you must swizzle y <-> z
@group(0) @binding(0) var<storage, read_write> output_vertices: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(1) var<storage, read_write> output_world_normals: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(2) var<uniform> waves: array<PlaneWave, WAVE_COUNT>;

@group(1) @binding(0) var<uniform> b_camera: CameraUBO;
@group(1) @binding(1) var<uniform> b_time: TimeUBO;

@compute @workgroup_size(16, 16, 1)
fn displaceVertices(@builtin(global_invocation_id) global_id : vec3<u32>,)
{
    let vertex_coord = vec2<u32>(global_id.xy);
    let size = vec2<u32>(VERTEX_DIMENSION);
    if(vertex_coord.x >= size.x || vertex_coord.y >= size.y)
    {
        return;
    }

    let uv = (vec2<f32>(vertex_coord) + vec2<f32>(0.5,0.5)) / vec2<f32>(size);

    let world_position_xz = vec2<f32>(WORLD_HALF_EXTENT_METERS) * 2.0 * (uv - vec2<f32>(0.5));
    let time = b_time.time_seconds;

    var displaced_position = vec3<f32>(world_position_xz.x, WAVE_NEUTRAL_PLANE, world_position_xz.y);
    var tangent = vec3<f32>(1.0, 0.0, 0.0);
    var bitangent = vec3<f32>(0.0, 0.0, 1.0);

    for (var i = 0u; i < WAVE_COUNT; i++)
    {
        var result: WaveDisplacementResult;
        switch wave_model {
            case WAVE_MODEL_COSINE: {
                result = sampleCosine(waves[i], time, world_position_xz);
            }
            default {
                result = sampleGerstner(waves[i], time, world_position_xz);
            }
        }

        displaced_position += result.displacement;
        tangent += result.tangent;
        bitangent += result.bitangent;
    }

    let vertex_index = vertex_coord.x + vertex_coord.y * VERTEX_DIMENSION;
    output_vertices[vertex_index] = vec4<f32>(displaced_position, 1.0);

    let world_normal = -normalize(cross(tangent, bitangent));
    output_world_normals[vertex_index] = vec4<f32>(world_normal, 0.0);
}

/* --- begin surface rasterization --- */

struct CameraUBO
{
    inv_proj: mat4x4<f32>,
    inv_view: mat4x4<f32>,
    proj_view: mat4x4<f32>,
    position: vec4<f32>,
}

struct TimeUBO
{
    time_seconds: f32,
}

@group(0) @binding(0) var<storage> vertices: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(1) var<storage> world_normals: array<vec4<f32>, VERTEX_COUNT>;

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(1) world_normal : vec3<f32>,
    @location(2) color : vec3<f32>,
    @location(3) camera_distance : f32,
}

@vertex
fn rasterizationVertex(@builtin(vertex_index) index : u32) -> VertexOut 
{
    var output : VertexOut;

    let world_position = vertices[index];

    output.position = b_camera.proj_view * world_position;
    output.world_normal = world_normals[index].xyz;
    output.color = vec3<f32>(WATER_COLOR);
    output.camera_distance = distance(b_camera.position, world_position);

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
}`,Oa={width:2048,height:1024},ba={width:1024,height:1024},Na={width:1024,height:256},id="rgba32float",il="float",sd="rgba32float",Ld="float",od="rgba32float",Em="float",Va="rgba16float",Mm="float",Ud="depth32float",$a="rgba16float",Pm="float",Wa="rgba32float";class js{constructor(i,u){ie(this,"stagingBuffer");ie(this,"buffer");this.stagingBuffer=new Float32Array(u),this.buffer=i.createBuffer({size:this.stagingBuffer.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM})}writeToGPU(i){this.stageFloats(),i.queue.writeBuffer(this.buffer,0,this.stagingBuffer,0,this.stagingBuffer.length)}}class Am extends js{constructor(u){super(u,1);ie(this,"data",{time_seconds:0})}stageFloats(){this.stagingBuffer[0]=this.data.time_seconds}}class Lm extends js{constructor(u){super(u,52);ie(this,"data",{inv_proj:qt.identity(),inv_view:qt.identity(),proj_view:qt.identity(),position:vn.create(0,0,0,1)})}stageFloats(){this.stagingBuffer.set(this.data.inv_proj,0),this.stagingBuffer.set(this.data.inv_view,16),this.stagingBuffer.set(this.data.proj_view,32),this.stagingBuffer.set(this.data.position,48)}}class Um{constructor(){ie(this,"color_gain",vn.create(1,1,1,1));ie(this,"vertex_scale",vn.create(1,1,1,1))}}class zm extends js{constructor(u){super(u,8);ie(this,"data",{color_gain:vn.create(1,1,1,1),vertex_scale:vn.create(1,1,1,1)})}stageFloats(){this.stagingBuffer.set(this.data.color_gain,0),this.stagingBuffer.set(this.data.vertex_scale,4)}}class Cm extends js{constructor(u){super(u,8);ie(this,"data",{light:{color:Kn.create(1,1,1),strength:100,forward:Kn.create(0,-1,0),angularRadius:16/60*(3.141592653589793/180)}})}stageFloats(){this.stagingBuffer.set(this.data.light.color,0),this.stagingBuffer[3]=this.data.light.strength,this.stagingBuffer.set(this.data.light.forward,4),this.stagingBuffer[7]=this.data.light.angularRadius}}class ad{constructor(i,u,g){ie(this,"colorWithDepthInAlpha");ie(this,"colorWithDepthInAlphaView");ie(this,"normal");ie(this,"normalView");ie(this,"depth");ie(this,"depthView");ie(this,"readGroupLayout");ie(this,"readGroup");ie(this,"writeGroupLayout");ie(this,"writeGroup");this.colorWithDepthInAlpha=i.createTexture({size:u,dimension:"2d",format:Va,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer ColorWithDepthInAlpha"}),this.colorWithDepthInAlphaView=this.colorWithDepthInAlpha.createView({label:"GBuffer ColorWithDepthInAlpha"}),this.normal=i.createTexture({size:u,dimension:"2d",format:$a,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Normal"}),this.normalView=this.normal.createView({label:"GBuffer Normal"}),this.readGroupLayout=(g==null?void 0:g.readGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Mm}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Pm}}],label:"GBuffer Read Group Layout"}),this.readGroup=i.createBindGroup({layout:this.readGroupLayout,entries:[{binding:0,resource:this.colorWithDepthInAlphaView},{binding:1,resource:this.normalView}],label:"GBuffer Read Group"}),this.writeGroupLayout=(g==null?void 0:g.writeGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:Va}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:$a}}],label:"GBuffer Write Group Layout"}),this.writeGroup=i.createBindGroup({layout:this.writeGroupLayout,entries:[{binding:0,resource:this.colorWithDepthInAlphaView},{binding:1,resource:this.normalView}],label:"GBuffer Write Group"}),this.depth=i.createTexture({size:u,dimension:"2d",format:Ud,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Depth"}),this.depthView=this.depth.createView({label:"GBuffer Depth"})}}class km{constructor(i,u){ie(this,"texture");ie(this,"view");ie(this,"group0");ie(this,"pipeline");this.texture=i.createTexture({size:u,dimension:"2d",format:id,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Transmittance LUT"}),this.view=this.texture.createView({label:"Transmittance LUT"});const g=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:id}}],label:"Transmittance LUT Group 0"});this.group0=i.createBindGroup({layout:g,entries:[{binding:0,resource:this.view}],label:"Transmittance LUT Group 0"});const _=i.createShaderModule({code:_m,label:"Transmittance LUT"});this.pipeline=i.createComputePipeline({compute:{module:_,entryPoint:"computeTransmittance"},layout:i.createPipelineLayout({bindGroupLayouts:[g]}),label:"Transmittance LUT"})}}class Im{constructor(i,u,g){ie(this,"texture");ie(this,"view");ie(this,"group0");ie(this,"pipeline");const _="Multiscatter LUT";this.texture=i.createTexture({size:u,dimension:"2d",format:sd,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Multiscatter LUT"}),this.view=this.texture.createView({label:_});const T=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:sd}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:il}}],label:"Multiscatter LUT Group 0"});this.group0=i.createBindGroup({layout:T,entries:[{binding:0,resource:this.view},{binding:1,resource:i.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:g}],label:"Multiscatter LUT Group 0"});const M=i.createShaderModule({code:wm,label:_});this.pipeline=i.createComputePipeline({compute:{module:M,entryPoint:"computeMultiscattering"},layout:i.createPipelineLayout({bindGroupLayouts:[T]}),label:"Multiscatter LUT"})}}class Dm{constructor(i,u,g,_,T){ie(this,"texture");ie(this,"view");ie(this,"group0");ie(this,"group1");ie(this,"pipeline");this.texture=i.createTexture({size:u,dimension:"2d",format:od,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Skyview LUT"}),this.view=this.texture.createView({label:"Skyview LUT"});const M=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:od}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:il}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:Ld}}],label:"Skyview LUT"});this.group0=i.createBindGroup({layout:M,entries:[{binding:0,resource:this.view},{binding:1,resource:i.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:g},{binding:3,resource:_}],label:"Skyview LUT Group 0"});const L=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Skyview LUT Group 1"});this.group1=i.createBindGroup({layout:L,entries:[{binding:0,resource:{buffer:T.buffer}}],label:"Skyview LUT Group 1"});const A=i.createShaderModule({code:Sm});this.pipeline=i.createComputePipeline({compute:{module:A,entryPoint:"computeSkyViewLuminance"},layout:i.createPipelineLayout({bindGroupLayouts:[M,L]}),label:"Skyview LUT"})}}class Om{constructor(i){ie(this,"spectrumDimension");ie(this,"gaussianNoise");ie(this,"gaussianNoiseView");const u="rg32float";this.spectrumDimension=2048,this.gaussianNoise=i.createTexture({label:"FFT Wave Gaussian Noise",format:u,size:{width:this.spectrumDimension,height:this.spectrumDimension},usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.gaussianNoiseView=this.gaussianNoise.createView();const _=2,M=8*this.spectrumDimension,L=new Float32Array(this.spectrumDimension*this.spectrumDimension*_);for(let A=0;A<L.length;A++){const z=Math.random(),W=Math.random(),Q=Math.sqrt(-2*Math.log(z)),$=2*Math.PI*W,te=Q*Math.cos($);L[A]=te}i.queue.writeTexture({texture:this.gaussianNoise},L,{bytesPerRow:M},{width:this.gaussianNoise.width,height:this.gaussianNoise.height})}}class bm{constructor(i,u,g){ie(this,"group0Compute");ie(this,"group0Graphics");ie(this,"group1");ie(this,"vertices");ie(this,"worldNormals");ie(this,"indices");ie(this,"displacementCosinePipeline");ie(this,"displacementGerstnerPipeline");ie(this,"surfaceRasterizationPipeline");this.vertices=i.createBuffer({size:16*4194304,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE,label:"Wave Surface Displacement Vertices"}),this.worldNormals=i.createBuffer({size:16*4194304,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE,label:"Wave Surface Displacement Normals"}),this.indices=i.createBuffer({size:25141254*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX,label:"Wave Surface Displacement Indices"});const W=new Uint32Array(25141254);let Q=0;for(let ke=0;ke<2047;ke++)for(let je=0;je<2047;je++){const Ee=je+ke*2048,ze=Ee+1,Se=Ee+2048,Ke=Se+1,Ve=new Uint32Array([Ee,Se,ze,ze,Se,Ke]);W.set(Ve,Q),Q+=Ve.length}i.queue.writeBuffer(this.indices,0,W);const $=6,te=4,X=4*te,K=i.createBuffer({size:$*X,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM,label:"Wave Surface Displacement Waves"}),J=9.8,F=60,q=F*F*J/(2*Math.PI),ue=new Array({direction:br.create(1,2),amplitude:.75,wavelength:q/(16*16)},{direction:br.create(1.2,2),amplitude:.75,wavelength:q/(14*14)},{direction:br.create(.8,2),amplitude:.75,wavelength:q/(12*12)},{direction:br.create(1.25,2),amplitude:.75,wavelength:q/(16*16)},{direction:br.create(-2,1),amplitude:.1,wavelength:q/(19*19)},{direction:br.create(0,1),amplitude:.1,wavelength:q/(19*19)}),de=new Float32Array($*te);let Pe=0;ue.forEach(ke=>{de.set(ke.direction,Pe),de[Pe+2]=ke.amplitude,de[Pe+3]=ke.wavelength,Pe+=4}),i.queue.writeBuffer(K,0,de);const Ie=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],label:"Wave Surface Displacement Group 0 Compute"});this.group0Compute=i.createBindGroup({layout:Ie,entries:[{binding:0,resource:{buffer:this.vertices}},{binding:1,resource:{buffer:this.worldNormals}},{binding:2,resource:{buffer:K}}],label:"Wave Surface Displacement Group 0 Compute"});const Ne=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}],label:"Wave Surface Displacement Group 0 Graphics"});this.group0Graphics=i.createBindGroup({layout:Ne,entries:[{binding:0,resource:{buffer:this.vertices}},{binding:1,resource:{buffer:this.worldNormals}}],label:"Wave Surface Displacement Group 0 Graphics"});const Be=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Wave Surface Displacement Group 1"});this.group1=i.createBindGroup({layout:Be,entries:[{binding:0,resource:{buffer:u.buffer}},{binding:1,resource:{buffer:g.buffer}}],label:"Wave Surface Displacement Group 1"});const De=i.createShaderModule({code:Rm,label:"Wave Surface Displacement"});this.displacementCosinePipeline=i.createComputePipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Ie,Be]}),compute:{module:De,entryPoint:"displaceVertices",constants:{0:0}},label:"Wave Surface Displacement Cosine Kernel"}),this.displacementGerstnerPipeline=i.createComputePipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Ie,Be]}),compute:{module:De,entryPoint:"displaceVertices",constants:{0:1}},label:"Wave Surface Displacement Gerstner Kernel"}),this.surfaceRasterizationPipeline=i.createRenderPipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Ne,Be]}),vertex:{module:De,entryPoint:"rasterizationVertex"},fragment:{module:De,entryPoint:"rasterizationFragment",targets:[{format:Va},{format:$a}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"ccw"},depthStencil:{format:Ud,depthWriteEnabled:!0,depthCompare:"less"},label:"Wave Surface Displacement Surface Rasterization"})}}class Nm{constructor(i,u,g,_,T,M,L){ie(this,"group0Layout");ie(this,"group1Layout");ie(this,"group0");ie(this,"group1");ie(this,"outputColor");ie(this,"outputColorView");ie(this,"pipeline");this.group0Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Wa}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:il,viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:Ld,viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:Em,viewDimension:"2d"}}],label:"Atmosphere Camera Group 0"}),this.group1Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Atmosphere Camera Group 1"}),this.outputColor=i.createTexture({format:Wa,size:{width:1,height:1},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Atmosphere Camera Output Color"}),this.outputColorView=this.outputColor.createView(),this.group0=i.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:this.outputColorView},{binding:1,resource:i.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:g},{binding:3,resource:_},{binding:4,resource:T}],label:"Atmosphere Camera Group 0"}),this.group1=i.createBindGroup({layout:this.group1Layout,entries:[{binding:0,resource:{buffer:M.buffer}},{binding:1,resource:{buffer:L.buffer}}],label:"Atmosphere Camera Group 1"});const A=i.createShaderModule({code:Tm,label:"Atmosphere Camera"});this.pipeline=i.createComputePipeline({compute:{module:A,entryPoint:"renderCompositedAtmosphere"},layout:i.createPipelineLayout({bindGroupLayouts:[this.group0Layout,this.group1Layout,u]}),label:"Atmosphere Camera"})}}class Bm{constructor(i,u,g){ie(this,"group0Layout");ie(this,"group0ByOutputTexture");ie(this,"group0Sampler");ie(this,"uboDataByOutputTexture");ie(this,"ubo");ie(this,"group1");ie(this,"pipeline");this.group0Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}}],label:"Fullscreen Quad Group 0"}),this.group0ByOutputTexture=new Map,this.uboDataByOutputTexture=new Map,this.group0Sampler=i.createSampler({magFilter:"linear",minFilter:"linear"}),u.forEach((M,L)=>{this.group0ByOutputTexture.set(L,i.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:M},{binding:1,resource:this.group0Sampler}],label:`Fullscreen Quad Group 0 Texture '${L.toString()}'`})),this.uboDataByOutputTexture.set(L,new Um)}),this.ubo=new zm(i);const _=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}}],label:"Fullscreen Quad Group 1"});this.group1=i.createBindGroup({layout:_,entries:[{binding:0,resource:{buffer:this.ubo.buffer}}]});const T=i.createShaderModule({code:xm,label:"Fullscreen Quad"});this.pipeline=i.createRenderPipeline({vertex:{module:T,entryPoint:"vertex_main"},fragment:{module:T,entryPoint:"fragment_main",targets:[{format:g}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:i.createPipelineLayout({bindGroupLayouts:[this.group0Layout,_]}),label:"Fullscreen Quad"})}rebuildOutputTextureBinding(i,u,g){this.group0ByOutputTexture.set(u,i.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:g},{binding:1,resource:this.group0Sampler}],label:`Fullscreen Quad Group 0 Texture '${u.toString()}'`}))}}class ld{constructor(){ie(this,"flip",!1);ie(this,"color_gain",{r:1,g:1,b:1})}}const bs=[.25,.3333,.5,.75,1,1.5,2,4];var Hs=(o=>(o[o.DrawToDraw=0]="DrawToDraw",o[o.SkyviewLUT=1]="SkyviewLUT",o[o.OceanSurface=2]="OceanSurface",o[o.AtmosphereCamera=3]="AtmosphereCamera",o[o.FullscreenQuad=4]="FullscreenQuad",o))(Hs||{});class ud{constructor(i){ie(this,"values");ie(this,"sum",0);ie(this,"average_",0);ie(this,"count",0);ie(this,"index",0);this.values=new Array(i).fill(0)}get average(){return this.average_}push(i){this.index>=this.values.length&&(this.index=0),this.index<this.count&&(this.sum-=this.values[this.index]),this.values[this.index]=i,this.sum+=i,this.count=Math.min(this.values.length,this.count+1),this.average_=this.sum/this.count,this.index+=1}}class Fm{constructor(i,u,g){ie(this,"transmittanceLUTPassResources");ie(this,"multiscatterLUTPassResources");ie(this,"skyviewLUTPassResources");ie(this,"fftWaveSpectrumResources");ie(this,"waveSurfaceDisplacementPassResources");ie(this,"atmosphereCameraPassResources");ie(this,"fullscreenQuadPassResources");ie(this,"gbuffer");ie(this,"scaledSize");ie(this,"rawSize");ie(this,"settings");ie(this,"uiReadonly");ie(this,"celestialLightUBO");ie(this,"cameraUBO");ie(this,"timeUBO");ie(this,"fullscreenQuadIndexBuffer");ie(this,"device");ie(this,"presentFormat");ie(this,"quit",!1);ie(this,"frametimeQuery");ie(this,"frametimeAverages");ie(this,"startTime");ie(this,"dummyFrameCounter");ie(this,"probationFrameCounter");ie(this,"targetFPS",0);if(this.device=i,this.presentFormat=u,this.startTime=g,this.settings={outputTexture:3,oceanWaveModel:1,outputTextureSettings:new Map([[3,{flip:!1,color_gain:{r:1,g:1,b:1}}],[1,{flip:!0,color_gain:{r:1,g:1,b:1}}],[2,{flip:!0,color_gain:{r:15,g:15,b:15}}],[0,{flip:!1,color_gain:{r:8,g:8,b:8}}],[4,{flip:!1,color_gain:{r:1,g:1,b:1}}],[5,{flip:!1,color_gain:{r:1,g:1,b:1}}],[6,{flip:!1,color_gain:{r:1,g:1,b:1}}]]),currentOutputTextureSettings:{flip:!1,color_gain:{r:1,g:1,b:1}},orbit:{timeHours:5.5,timeSpeedupFactor:400,paused:!1,reversed:!1,inclinationRadians:Math.PI/2,sunsetAzimuthRadians:0},renderScale:1.5},this.uiReadonly={averageFPS:0,frametimeControllers:new Map},this.scaledSize={width:1,height:1},this.rawSize={width:1,height:1},this.settings.outputTextureSettings.has(this.settings.outputTexture)){const L=this.settings.outputTextureSettings.get(this.settings.outputTexture);this.settings.currentOutputTextureSettings.flip=L.flip,this.settings.currentOutputTextureSettings.color_gain.r=L.color_gain.r,this.settings.currentOutputTextureSettings.color_gain.g=L.color_gain.g,this.settings.currentOutputTextureSettings.color_gain.b=L.color_gain.b}if(this.frametimeAverages=new Map,i.features.has("timestamp-query")){const A=2*Object.keys(Hs).map(z=>Number(z)).filter(isNaN).length;this.frametimeQuery={mappingLock:!1,querySet:i.createQuerySet({type:"timestamp",count:A}),writeBuffer:i.createBuffer({size:8*A,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE}),readBuffer:i.createBuffer({size:8*A,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})},Object.keys(Hs).map(z=>Number(z)).filter(z=>!isNaN(z)).forEach(z=>{const W=z;this.frametimeAverages.set(W,new ud(400)),Object.assign(this.uiReadonly,String(W),0)})}else console.warn("WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages."),this.frametimeAverages.set(0,new ud(400));this.dummyFrameCounter=10,this.probationFrameCounter=100,this.cameraUBO=new Lm(i),this.timeUBO=new Am(i),this.celestialLightUBO=new Cm(i),this.gbuffer=new ad(i,{width:1,height:1}),this.transmittanceLUTPassResources=new km(this.device,Oa),this.multiscatterLUTPassResources=new Im(this.device,ba,this.transmittanceLUTPassResources.view),this.skyviewLUTPassResources=new Dm(this.device,Na,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.celestialLightUBO),this.fftWaveSpectrumResources=new Om(this.device),this.waveSurfaceDisplacementPassResources=new bm(this.device,this.cameraUBO,this.timeUBO);const _=new Uint32Array([0,1,2,0,2,3]);this.fullscreenQuadIndexBuffer=i.createBuffer({size:_.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),i.queue.writeBuffer(this.fullscreenQuadIndexBuffer,0,_,0,_.length),this.atmosphereCameraPassResources=new Nm(this.device,this.gbuffer.readGroupLayout,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.skyviewLUTPassResources.view,this.cameraUBO,this.celestialLightUBO),this.fullscreenQuadPassResources=new Bm(this.device,new Map([[3,this.atmosphereCameraPassResources.outputColorView],[1,this.transmittanceLUTPassResources.view],[2,this.multiscatterLUTPassResources.view],[0,this.skyviewLUTPassResources.view],[4,this.gbuffer.colorWithDepthInAlphaView],[5,this.gbuffer.normalView],[6,this.fftWaveSpectrumResources.gaussianNoiseView]]),this.presentFormat);const T=i.createCommandEncoder();let M=T.beginComputePass();M.setPipeline(this.transmittanceLUTPassResources.pipeline),M.setBindGroup(0,this.transmittanceLUTPassResources.group0),M.dispatchWorkgroups(Math.ceil(Oa.width/16),Math.ceil(Oa.height/16)),M.end(),M=T.beginComputePass(),M.setPipeline(this.multiscatterLUTPassResources.pipeline),M.setBindGroup(0,this.multiscatterLUTPassResources.group0),M.dispatchWorkgroups(Math.ceil(ba.width/16),Math.ceil(ba.height/16)),M.end(),i.queue.submit([T.finish()])}setupUI(i){const u=i.add(this.settings,"outputTexture",{Scene:3,"Transmittance LUT":1,"Multiscatter LUT":2,"Skyview LUT":0,"GBuffer Color":4,"GBuffer Normal":5,"Wave Spectrum Gaussian Noise":6}).name("Render Output").listen();i.add(this.settings,"renderScale",bs).name("Render Resolution Scale").decimals(1).onFinishChange(M=>{this.handleResize(this.rawSize.width,this.rawSize.height)}).listen(),i.add(this.uiReadonly,"averageFPS").decimals(1).disable().name("Average FPS").listen(),i.add(this.settings,"oceanWaveModel",{Cosine:0,Gerstner:1}).name("Ocean Wave Model");const g=i.addFolder("Sun Parameters").open();g.add(this.settings.orbit,"timeHours").min(0).max(24).name("Time in Hours").listen(),g.add(this.settings.orbit,"timeSpeedupFactor").min(1).max(5e4).step(1).name("Time Multiplier"),g.add(this.settings.orbit,"paused").name("Pause Sun"),g.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?18+.5:6-.5}},"fn").name("Skip to Sunrise"),g.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?6+.5:18-.5}},"fn").name("Skip to Sunset"),g.add(this.settings.orbit,"reversed").name("Reverse Sun"),g.add(this.settings.orbit,"sunsetAzimuthRadians").name("Sun Azimuth").min(0).max(2*Math.PI),g.add(this.settings.orbit,"inclinationRadians").name("Sun Inclination").min(0).max(Math.PI);const _=i.addFolder("Output Transform").close();this.fullscreenQuadPassResources.uboDataByOutputTexture.has(this.settings.outputTexture)||_.hide(),_.add(this.settings.currentOutputTextureSettings,"flip").name("Flip Image").listen(),_.add({gain:0},"gain").name("RGB").min(0).max(100).onChange(M=>{this.settings.currentOutputTextureSettings.color_gain.r=M,this.settings.currentOutputTextureSettings.color_gain.g=M,this.settings.currentOutputTextureSettings.color_gain.b=M}),_.add(this.settings.currentOutputTextureSettings.color_gain,"r").name("R").min(0).max(100).listen(),_.add(this.settings.currentOutputTextureSettings.color_gain,"g").name("G").min(0).max(100).listen(),_.add(this.settings.currentOutputTextureSettings.color_gain,"b").name("B").min(0).max(100).listen(),u.onChange(M=>{const L=u._listenPrevValue;this.settings.outputTextureSettings.has(L)||this.settings.outputTextureSettings.set(L,new ld);const A=this.settings.outputTextureSettings.get(L);A.flip=this.settings.currentOutputTextureSettings.flip,Object.assign(A.color_gain,this.settings.currentOutputTextureSettings.color_gain),this.settings.outputTextureSettings.has(M)||this.settings.outputTextureSettings.set(M,new ld);const z=this.settings.outputTextureSettings.get(M);this.settings.currentOutputTextureSettings.flip=z.flip,Object.assign(this.settings.currentOutputTextureSettings.color_gain,z.color_gain)});const T=i.addFolder("Performance").close();this.frametimeAverages.forEach((M,L)=>{this.uiReadonly.frametimeControllers.set(L,T.add({value:0},"value").name(`${Hs[L]} (ms)`).decimals(6).disable())})}updateOrbit(i){const u=this.settings.orbit;this.settings.orbit.paused||(u.timeHours+=(u.reversed?-1:1)*u.timeSpeedupFactor*i/36e5,u.timeHours=u.timeHours-Math.floor(u.timeHours/24)*24);const g=2*Math.PI/24,_=(12-u.timeHours)*g,T=Kn.create(-Math.sin(u.sunsetAzimuthRadians),0,Math.cos(u.sunsetAzimuthRadians)),M=Kn.create(Math.cos(u.sunsetAzimuthRadians)*Math.cos(u.inclinationRadians),Math.sin(u.inclinationRadians),Math.sin(u.sunsetAzimuthRadians)*Math.cos(u.inclinationRadians)),L=Kn.add(Kn.scale(T,Math.sin(_)),Kn.scale(M,Math.cos(_)));Kn.scale(L,-1,this.celestialLightUBO.data.light.forward),this.celestialLightUBO.writeToGPU(this.device)}updateFPSValues(i){var u,g,_,T;i>.01&&((u=this.frametimeAverages.get(0))==null||u.push(i),this.uiReadonly.averageFPS=1e3/(((g=this.frametimeAverages.get(0))==null?void 0:g.average)??1e3),(T=this.uiReadonly.frametimeControllers.get(0))==null||T.setValue(((_=this.frametimeAverages.get(0))==null?void 0:_.average)??-1))}updateCamera(i){const u=60*Math.PI/180,T=qt.perspective(u,i,.1,1e3),M=[0,10,-20],L=qt.lookAt(M,[0,0,200],[0,1,0]);Object.assign(this.cameraUBO.data,{inv_proj:qt.inverse(T),inv_view:qt.inverse(L),proj_view:qt.mul(T,L),position:vn.create(...M)}),this.cameraUBO.writeToGPU(this.device)}updateTime(i){this.timeUBO.data.time_seconds+=i/1e3,this.timeUBO.data.time_seconds>60&&(this.timeUBO.data.time_seconds=0),this.timeUBO.writeToGPU(this.device)}draw(i,u,g,_){if(this.dummyFrameCounter>0){this.dummyFrameCounter-=1;return}const T=i.createView();if(this.updateFPSValues(_),this.probationFrameCounter>49){this.probationFrameCounter-=1,this.probationFrameCounter<50&&(console.log(`Average FPS without load is ${this.uiReadonly.averageFPS}`),this.targetFPS=this.uiReadonly.averageFPS);return}if(this.probationFrameCounter>0&&(this.probationFrameCounter-=1,this.probationFrameCounter<1)){console.log(`Average FPS with load is ${this.uiReadonly.averageFPS}`);const X=this.uiReadonly.averageFPS/this.targetFPS;this.settings.renderScale=bs[0],bs.forEach(K=>{Math.abs(K-X)<Math.abs(this.settings.renderScale-X)&&(this.settings.renderScale=K)}),this.handleResize(this.rawSize.width,this.rawSize.height)}this.updateCamera(u),this.updateTime(_),this.updateOrbit(_);const M={r:0,g:0,b:0,a:1},L=this.device.createCommandEncoder({label:"Main"});let A=0;const z=new Map;switch(z.set(2,A),this.settings.oceanWaveModel){case 0:case 1:{const X=L.beginComputePass({label:"Wave Surface Mesh Displacement",timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:A++}:void 0});this.settings.oceanWaveModel==0?X.setPipeline(this.waveSurfaceDisplacementPassResources.displacementCosinePipeline):X.setPipeline(this.waveSurfaceDisplacementPassResources.displacementGerstnerPipeline),X.setBindGroup(0,this.waveSurfaceDisplacementPassResources.group0Compute),X.setBindGroup(1,this.waveSurfaceDisplacementPassResources.group1),X.dispatchWorkgroups(Math.ceil(2048/16),Math.ceil(2048/16)),X.end();const K=L.beginRenderPass({label:"Wave Surface Rasterization",colorAttachments:[{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:this.gbuffer.colorWithDepthInAlphaView},{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:this.gbuffer.normalView}],depthStencilAttachment:{view:this.gbuffer.depthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"},timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,endOfPassWriteIndex:A++}:void 0});K.setPipeline(this.waveSurfaceDisplacementPassResources.surfaceRasterizationPipeline),K.setBindGroup(0,this.waveSurfaceDisplacementPassResources.group0Graphics),K.setBindGroup(1,this.waveSurfaceDisplacementPassResources.group1),K.setIndexBuffer(this.waveSurfaceDisplacementPassResources.indices,"uint32"),K.drawIndexed(this.waveSurfaceDisplacementPassResources.indices.size/4),K.end();break}}z.set(1,A);const W=L.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:A++,endOfPassWriteIndex:A++}:void 0,label:"Skyview LUT"});W.setPipeline(this.skyviewLUTPassResources.pipeline),W.setBindGroup(0,this.skyviewLUTPassResources.group0),W.setBindGroup(1,this.skyviewLUTPassResources.group1),W.dispatchWorkgroups(Math.ceil(Na.width/16),Math.ceil(Na.height/31)),W.end(),z.set(3,A);const Q=L.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:A++,endOfPassWriteIndex:A++}:void 0,label:"Atmosphere Camera"});Q.setPipeline(this.atmosphereCameraPassResources.pipeline),Q.setBindGroup(0,this.atmosphereCameraPassResources.group0),Q.setBindGroup(1,this.atmosphereCameraPassResources.group1),Q.setBindGroup(2,this.gbuffer.readGroup),Q.dispatchWorkgroups(Math.ceil(this.atmosphereCameraPassResources.outputColor.width/16),Math.ceil(this.atmosphereCameraPassResources.outputColor.height/16)),Q.end(),z.set(4,A);const $=L.beginRenderPass({colorAttachments:[{clearValue:M,loadOp:"clear",storeOp:"store",view:T}],timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:A++,endOfPassWriteIndex:A++}:void 0,label:"Fullscreen Pass"});if(this.fullscreenQuadPassResources.uboDataByOutputTexture.has(this.settings.outputTexture)){const X=this.settings.currentOutputTextureSettings,K=this.fullscreenQuadPassResources.uboDataByOutputTexture.get(this.settings.outputTexture);K.color_gain=vn.create(X.color_gain.r,X.color_gain.g,X.color_gain.b,1),K.vertex_scale=vn.create(1,X.flip?-1:1,1,1)}$.setPipeline(this.fullscreenQuadPassResources.pipeline),$.setIndexBuffer(this.fullscreenQuadIndexBuffer,"uint32",0,this.fullscreenQuadIndexBuffer.size),$.setBindGroup(0,this.fullscreenQuadPassResources.group0ByOutputTexture.get(this.settings.outputTexture));const te=this.fullscreenQuadPassResources.uboDataByOutputTexture.get(this.settings.outputTexture);if(te?this.fullscreenQuadPassResources.ubo.data=te:this.fullscreenQuadPassResources.ubo.data={color_gain:vn.create(1,1,1,1),vertex_scale:vn.create(1,1,1,1)},this.fullscreenQuadPassResources.ubo.writeToGPU(this.device),$.setBindGroup(1,this.fullscreenQuadPassResources.group1),this.probationFrameCounter<1&&$.drawIndexed(6,1,0,0,0),$.end(),this.frametimeQuery!=null&&!this.frametimeQuery.mappingLock&&(L.resolveQuerySet(this.frametimeQuery.querySet,0,2*z.size,this.frametimeQuery.writeBuffer,0),L.copyBufferToBuffer(this.frametimeQuery.writeBuffer,0,this.frametimeQuery.readBuffer,0,this.frametimeQuery.readBuffer.size)),this.device.queue.submit([L.finish()]),this.frametimeQuery!==void 0&&!this.frametimeQuery.mappingLock){const X=this.frametimeQuery;this.frametimeQuery.mappingLock=!0,this.frametimeQuery.readBuffer.mapAsync(GPUMapMode.READ,0,this.frametimeQuery.readBuffer.size).then(()=>{const K=new BigInt64Array(X.readBuffer.getMappedRange(0,X.readBuffer.size));z.forEach((J,F)=>{var de,Pe,Ie;const ue=Number(K.at(J+1)-K.at(J))/1e6;(de=this.frametimeAverages.get(F))==null||de.push(ue),(Ie=this.uiReadonly.frametimeControllers.get(F))==null||Ie.setValue(((Pe=this.frametimeAverages.get(F))==null?void 0:Pe.average)??-1)}),X.readBuffer.unmap(),X.mappingLock=!1}).catch(K=>{console.error("Failed while retrieving frametime values from GPU:"),console.error(K)})}}handleResize(i,u){const g={width:i*this.settings.renderScale,height:u*this.settings.renderScale},_=8192,T=268435456,M=16,L=(A,z)=>A<_&&z<_&&A*z*M<T;L(g.width,g.height)?this.scaledSize=g:(bs.slice().reverse().some(A=>{if(L(i*A,u*A))return this.settings.renderScale=A,!0}),console.warn(`During resize: Texture size (${g.width},${g.height}) exceeds WebGPU guaranteed limit (8192, 8192).
								Defaulting to highest possible render scale of ${this.settings.renderScale}`),this.scaledSize={width:i*this.settings.renderScale,height:u*this.settings.renderScale}),console.log(`Resizing to (${this.scaledSize.width},${this.scaledSize.height})`),this.rawSize={width:i,height:u},this.gbuffer=new ad(this.device,this.scaledSize,this.gbuffer),this.fullscreenQuadPassResources.rebuildOutputTextureBinding(this.device,4,this.gbuffer.colorWithDepthInAlphaView),this.fullscreenQuadPassResources.rebuildOutputTextureBinding(this.device,5,this.gbuffer.normalView),this.atmosphereCameraPassResources.outputColor=this.device.createTexture({format:Wa,size:this.scaledSize,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.atmosphereCameraPassResources.outputColorView=this.atmosphereCameraPassResources.outputColor.createView(),this.fullscreenQuadPassResources.rebuildOutputTextureBinding(this.device,3,this.atmosphereCameraPassResources.outputColorView),this.atmosphereCameraPassResources.group0=this.device.createBindGroup({layout:this.atmosphereCameraPassResources.group0Layout,entries:[{binding:0,resource:this.atmosphereCameraPassResources.outputColorView},{binding:1,resource:this.device.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:this.transmittanceLUTPassResources.view},{binding:3,resource:this.multiscatterLUTPassResources.view},{binding:4,resource:this.skyviewLUTPassResources.view}],label:"Atmosphere Camera Group 0"})}}const Gm=(o,i,u)=>new Fm(o,i,u),qa={name:"Hello Cube",requiredFeatures:new Set,optionalFeatures:new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]),description:"Tests WebGPU functionality with a simple spinning cube.",create:ym},ja=new Map([["hello-cube",qa],["sky-sea",{name:"Sky and Sea",description:"Real-time rendering of a dynamic sun over the open ocean, with various models for surface waves and raymarched atmospheric scattering.",requiredFeatures:new Set(["float32-filterable"]),optionalFeatures:new Set(["timestamp-query"]),create:Gm}]]),Hm=ve.jsx("a",{target:"_blank",rel:"noreferrer",href:"mailto:estelle.booher@gmail.com",children:"estelle.booher@gmail.com"}),Vm=ve.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/EllarBooher",children:"https://github.com/EllarBooher"}),Ns=j.memo(function({hyperlink:i,externalLink:u=!0,thumbnailAssets:g=[],thumbnailAltTexts:_,title:T="PLACEHOLDER TITLE",description:M="PLACEHOLDER DESCRIPTION"}){const L=ve.jsx("div",{className:"display-card-thumbnails",children:g.map((W,Q)=>ve.jsx("div",{className:"display-card-thumbnail",children:ve.jsx("img",{className:"display-card-image",src:W.toString(),alt:_[Q]??null})},W.toString()))}),A=Ei(),z=()=>{var W;u?window.location.href=i:(W=A(i))==null||W.catch(Q=>{throw new Error("Unable to navigate",{cause:Q})})};return ve.jsx("button",{className:"display-card",onClick:z,children:ve.jsxs("div",{children:[ve.jsx("h2",{className:"display-card-name",children:T}),ve.jsxs("div",{className:"display-card-body",children:[ve.jsx("p",{children:M}),L]})]})})});function $m(){const o=[];ja.forEach((g,_)=>{o.push(ve.jsx(Ns,{hyperlink:`/webgpu-samples?sample=${_}`,externalLink:!1,thumbnailAssets:[],thumbnailAltTexts:[],title:g.name,description:g.description},_))});const i=[ve.jsx(Ns,{hyperlink:"https://github.com/EllarBooher/Syzygy",thumbnailAssets:[new URL("/assets/syzygy1-CItzHwJc.png",import.meta.url)],thumbnailAltTexts:["A computer rendered sun rises over chess pieces. Application interface elements appear to the left and bottom."],title:"Syzygy",description:`
                A sandbox renderer I started to study C++ and Vulkan.
                It aims to be a testbed of various features and techniques.
            `},"Syzygy"),ve.jsx(Ns,{hyperlink:"https://github.com/EllarBooher/VulkanTemplate/tree/SSAO",thumbnailAssets:[new URL("/assets/ssao1-8Qfbb4oF.png",import.meta.url)],thumbnailAltTexts:["A computer rendered building, with various decorations such as banners and pillars. Only the shadows are visible, with no color information."],title:"SSAO",description:`
                An implementation of Screen-Space Ambient Occlusion written in C++ with Vulkan.
            `},"SSAO")],u=[ve.jsx(Ns,{hyperlink:"https://ellarbooher.itch.io/snail-blazer",thumbnailAssets:[new URL("/assets/snailblazer1-Bl1793QZ.png",import.meta.url),new URL("/assets/snailblazer2-CU4gYciB.png",import.meta.url)],thumbnailAltTexts:["A smirking cartoon character with yellow hair faces off against a grimacing cartoon character with blue hair. In the middle is an arena filled with magma and colorful battle effects.","A crying cartoon character with yellow hair faces off against a scowling cartoon character with blue hair. In the middle is an arena filled with magma and colorful battle effects."],title:"Snail Blazer",description:`
                A short bullet-hell made for the Bullet Hell Jam 2023 on itch.io.
                The player primarily moves via grappling on enemy projectiles and the environment,
                instead of the conventional WASD-style of movement.
            `},"Snail Blazer")];return ve.jsxs(ve.Fragment,{children:[ve.jsxs("main",{style:{flexDirection:"column",flex:"1",padding:"2em"},children:[ve.jsx("h1",{className:"visuallyhidden",children:"Portfolio Landing Page"}),ve.jsx("p",{children:"Hello, my name is Estelle Booher. My passion is realtime rendering and engine infrastructure, and I am actively working on building a portfolio and career in computer graphics. This website is a landing spot where I will host links to various projects of mine."}),ve.jsxs("p",{children:["My github is at ",Vm,", where I host the source code of my projects including this website."]}),ve.jsxs("p",{children:["To contact me, please email at ",Hm,"."]}),ve.jsx("h2",{children:"In-Browser WebGPU Samples"}),ve.jsx("div",{className:"display-grid",children:o}),ve.jsx("h2",{children:"Offline Computer Graphics"}),ve.jsx("div",{className:"display-grid",children:i}),ve.jsx("h2",{children:"Video Games"}),ve.jsx("div",{className:"display-grid",children:u})]}),ve.jsx("footer",{style:{padding:"1em"},children:"All works present are copyrighted, unless provided with external attributions or license."})]})}async function Wm(o,i){if(console.log("Starting WebGPU"),!("gpu"in navigator))return Promise.reject(new Error("WebGPU is not available in this browser.",{cause:new Error("navigator.gpu is null")}));const u=navigator.gpu.requestAdapter().then(_=>_?Promise.resolve(_):Promise.reject(new Error("Requested WebGPU Adapter is not available."))).catch(_=>Promise.reject(new Error("Unable to get WebGPU Adapter",{cause:_}))),g=u.then(_=>{const T=Array.from(o.values()).filter(L=>_.features.has(L));if(T.length!=o.size){const L=`Required features unavailable: ${Array.from(o.values()).filter(A=>!_.features.has(A)).map(A=>`'${A}'`).join(",")}`;return Promise.reject(new Error("Unable to get WebGPU Device",{cause:L}))}const M=T.concat(...Array.from(i.values()).filter(L=>_.features.has(L)));return console.log(`Enabling features: '${M.join("', '")}'`),_.requestDevice({requiredFeatures:M}).catch(L=>Promise.reject(new Error("Unable to get WebGPU Device",{cause:L})))});return Promise.all([u,g]).then(_=>{const[T,M]=_;return{adapter:T,device:M}})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class yn{constructor(i,u,g,_,T="div"){this.parent=i,this.object=u,this.property=g,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(T),this.domElement.classList.add("controller"),this.domElement.classList.add(_),this.$name=document.createElement("div"),this.$name.classList.add("name"),yn.nextNameID=yn.nextNameID||0,this.$name.id=`lil-gui-name-${++yn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",M=>M.stopPropagation()),this.domElement.addEventListener("keyup",M=>M.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(g)}name(i){return this._name=i,this.$name.textContent=i,this}onChange(i){return this._onChange=i,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(i=!0){return this.disable(!i)}disable(i=!0){return i===this._disabled?this:(this._disabled=i,this.domElement.classList.toggle("disabled",i),this.$disable.toggleAttribute("disabled",i),this)}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(i){const u=this.parent.add(this.object,this.property,i);return u.name(this._name),this.destroy(),u}min(i){return this}max(i){return this}step(i){return this}decimals(i){return this}listen(i=!0){return this._listening=i,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const i=this.save();i!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=i}getValue(){return this.object[this.property]}setValue(i){return this.getValue()!==i&&(this.object[this.property]=i,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(i){return this.setValue(i),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class qm extends yn{constructor(i,u,g){super(i,u,g,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Za(o){let i,u;return(i=o.match(/(#|0x)?([a-f0-9]{6})/i))?u=i[2]:(i=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?u=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(u=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),u?"#"+u:!1}const jm={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Za,toHexString:Za},xi={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Zm={isPrimitive:!1,match:o=>Array.isArray(o),fromHexString(o,i,u=1){const g=xi.fromHexString(o);i[0]=(g>>16&255)/255*u,i[1]=(g>>8&255)/255*u,i[2]=(g&255)/255*u},toHexString([o,i,u],g=1){g=255/g;const _=o*g<<16^i*g<<8^u*g<<0;return xi.toHexString(_)}},Qm={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,i,u=1){const g=xi.fromHexString(o);i.r=(g>>16&255)/255*u,i.g=(g>>8&255)/255*u,i.b=(g&255)/255*u},toHexString({r:o,g:i,b:u},g=1){g=255/g;const _=o*g<<16^i*g<<8^u*g<<0;return xi.toHexString(_)}},Xm=[jm,xi,Zm,Qm];function Ym(o){return Xm.find(i=>i.match(o))}class Km extends yn{constructor(i,u,g,_){super(i,u,g,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ym(this.initialValue),this._rgbScale=_,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const T=Za(this.$text.value);T&&this._setValueFromHexString(T)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(i){if(this._format.isPrimitive){const u=this._format.fromHexString(i);this.setValue(u)}else this._format.fromHexString(i,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(i){return this._setValueFromHexString(i),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ba extends yn{constructor(i,u,g){super(i,u,g,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",_=>{_.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Jm extends yn{constructor(i,u,g,_,T,M){super(i,u,g,"number"),this._initInput(),this.min(_),this.max(T);const L=M!==void 0;this.step(L?M:this._getImplicitStep(),L),this.updateDisplay()}decimals(i){return this._decimals=i,this.updateDisplay(),this}min(i){return this._min=i,this._onUpdateMinMax(),this}max(i){return this._max=i,this._onUpdateMinMax(),this}step(i,u=!0){return this._step=i,this._stepExplicit=u,this}updateDisplay(){const i=this.getValue();if(this._hasSlider){let u=(i-this._min)/(this._max-this._min);u=Math.max(0,Math.min(u,1)),this.$fill.style.width=u*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?i:i.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const u=()=>{let q=parseFloat(this.$input.value);isNaN(q)||(this._stepExplicit&&(q=this._snap(q)),this.setValue(this._clamp(q)))},g=q=>{const ue=parseFloat(this.$input.value);isNaN(ue)||(this._snapClampSetValue(ue+q),this.$input.value=this.getValue())},_=q=>{q.key==="Enter"&&this.$input.blur(),q.code==="ArrowUp"&&(q.preventDefault(),g(this._step*this._arrowKeyMultiplier(q))),q.code==="ArrowDown"&&(q.preventDefault(),g(this._step*this._arrowKeyMultiplier(q)*-1))},T=q=>{this._inputFocused&&(q.preventDefault(),g(this._step*this._normalizeMouseWheel(q)))};let M=!1,L,A,z,W,Q;const $=5,te=q=>{L=q.clientX,A=z=q.clientY,M=!0,W=this.getValue(),Q=0,window.addEventListener("mousemove",X),window.addEventListener("mouseup",K)},X=q=>{if(M){const ue=q.clientX-L,de=q.clientY-A;Math.abs(de)>$?(q.preventDefault(),this.$input.blur(),M=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(ue)>$&&K()}if(!M){const ue=q.clientY-z;Q-=ue*this._step*this._arrowKeyMultiplier(q),W+Q>this._max?Q=this._max-W:W+Q<this._min&&(Q=this._min-W),this._snapClampSetValue(W+Q)}z=q.clientY},K=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",K)},J=()=>{this._inputFocused=!0},F=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",u),this.$input.addEventListener("keydown",_),this.$input.addEventListener("wheel",T,{passive:!1}),this.$input.addEventListener("mousedown",te),this.$input.addEventListener("focus",J),this.$input.addEventListener("blur",F)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const i=(F,q,ue,de,Pe)=>(F-q)/(ue-q)*(Pe-de)+de,u=F=>{const q=this.$slider.getBoundingClientRect();let ue=i(F,q.left,q.right,this._min,this._max);this._snapClampSetValue(ue)},g=F=>{this._setDraggingStyle(!0),u(F.clientX),window.addEventListener("mousemove",_),window.addEventListener("mouseup",T)},_=F=>{u(F.clientX)},T=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",T)};let M=!1,L,A;const z=F=>{F.preventDefault(),this._setDraggingStyle(!0),u(F.touches[0].clientX),M=!1},W=F=>{F.touches.length>1||(this._hasScrollBar?(L=F.touches[0].clientX,A=F.touches[0].clientY,M=!0):z(F),window.addEventListener("touchmove",Q,{passive:!1}),window.addEventListener("touchend",$))},Q=F=>{if(M){const q=F.touches[0].clientX-L,ue=F.touches[0].clientY-A;Math.abs(q)>Math.abs(ue)?z(F):(window.removeEventListener("touchmove",Q),window.removeEventListener("touchend",$))}else F.preventDefault(),u(F.touches[0].clientX)},$=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",Q),window.removeEventListener("touchend",$)},te=this._callOnFinishChange.bind(this),X=400;let K;const J=F=>{if(Math.abs(F.deltaX)<Math.abs(F.deltaY)&&this._hasScrollBar)return;F.preventDefault();const ue=this._normalizeMouseWheel(F)*this._step;this._snapClampSetValue(this.getValue()+ue),this.$input.value=this.getValue(),clearTimeout(K),K=setTimeout(te,X)};this.$slider.addEventListener("mousedown",g),this.$slider.addEventListener("touchstart",W,{passive:!1}),this.$slider.addEventListener("wheel",J,{passive:!1})}_setDraggingStyle(i,u="horizontal"){this.$slider&&this.$slider.classList.toggle("active",i),document.body.classList.toggle("lil-gui-dragging",i),document.body.classList.toggle(`lil-gui-${u}`,i)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(i){let{deltaX:u,deltaY:g}=i;return Math.floor(i.deltaY)!==i.deltaY&&i.wheelDelta&&(u=0,g=-i.wheelDelta/120,g*=this._stepExplicit?1:10),u+-g}_arrowKeyMultiplier(i){let u=this._stepExplicit?1:10;return i.shiftKey?u*=10:i.altKey&&(u/=10),u}_snap(i){let u=0;return this._hasMin?u=this._min:this._hasMax&&(u=this._max),i-=u,i=Math.round(i/this._step)*this._step,i+=u,i=parseFloat(i.toPrecision(15)),i}_clamp(i){return i<this._min&&(i=this._min),i>this._max&&(i=this._max),i}_snapClampSetValue(i){this.setValue(this._clamp(this._snap(i)))}get _hasScrollBar(){const i=this.parent.root.$children;return i.scrollHeight>i.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class eg extends yn{constructor(i,u,g,_){super(i,u,g,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(_)}options(i){return this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this.$select.replaceChildren(),this._names.forEach(u=>{const g=document.createElement("option");g.textContent=u,this.$select.appendChild(g)}),this.updateDisplay(),this}updateDisplay(){const i=this.getValue(),u=this._values.indexOf(i);return this.$select.selectedIndex=u,this.$display.textContent=u===-1?i:this._names[u],this}}class tg extends yn{constructor(i,u,g){super(i,u,g,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",_=>{_.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var ng=`.lil-gui {
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
}`;function rg(o){const i=document.createElement("style");i.innerHTML=o;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(i,u):document.head.appendChild(i)}let cd=!1;class sl{constructor({parent:i,autoPlace:u=i===void 0,container:g,width:_,title:T="Controls",closeFolders:M=!1,injectStyles:L=!0,touchStyles:A=!0}={}){if(this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(T),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),A&&this.domElement.classList.add("allow-touch-styles"),!cd&&L&&(rg(ng),cd=!0),g?g.appendChild(this.domElement):u&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),_&&this.domElement.style.setProperty("--width",_+"px"),this._closeFolders=M}add(i,u,g,_,T){if(Object(g)===g)return new eg(this,i,u,g);const M=i[u];switch(typeof M){case"number":return new Jm(this,i,u,g,_,T);case"boolean":return new qm(this,i,u);case"string":return new tg(this,i,u);case"function":return new Ba(this,i,u)}console.error(`gui.add failed
	property:`,u,`
	object:`,i,`
	value:`,M)}addColor(i,u,g=1){return new Km(this,i,u,g)}addFolder(i){const u=new sl({parent:this,title:i});return this.root._closeFolders&&u.close(),u}load(i,u=!0){return i.controllers&&this.controllers.forEach(g=>{g instanceof Ba||g._name in i.controllers&&g.load(i.controllers[g._name])}),u&&i.folders&&this.folders.forEach(g=>{g._title in i.folders&&g.load(i.folders[g._title])}),this}save(i=!0){const u={controllers:{},folders:{}};return this.controllers.forEach(g=>{if(!(g instanceof Ba)){if(g._name in u.controllers)throw new Error(`Cannot save GUI with duplicate property "${g._name}"`);u.controllers[g._name]=g.save()}}),i&&this.folders.forEach(g=>{if(g._title in u.folders)throw new Error(`Cannot save GUI with duplicate folder "${g._title}"`);u.folders[g._title]=g.save()}),u}open(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(i){this._closed!==i&&(this._closed=i,this._callOnOpenClose(this))}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const u=this.$children.clientHeight;this.$children.style.height=u+"px",this.domElement.classList.add("transition");const g=T=>{T.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",g))};this.$children.addEventListener("transitionend",g);const _=i?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!i),requestAnimationFrame(()=>{this.$children.style.height=_+"px"})}),this}title(i){return this._title=i,this.$title.textContent=i,this}reset(i=!0){return(i?this.controllersRecursive():this.controllers).forEach(g=>g.reset()),this}onChange(i){return this._onChange=i,this}_callOnChange(i){this.parent&&this.parent._callOnChange(i),this._onChange!==void 0&&this._onChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(i){this.parent&&this.parent._callOnFinishChange(i),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onOpenClose(i){return this._onOpenClose=i,this}_callOnOpenClose(i){this.parent&&this.parent._callOnOpenClose(i),this._onOpenClose!==void 0&&this._onOpenClose.call(this,i)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(i=>i.destroy())}controllersRecursive(){let i=Array.from(this.controllers);return this.folders.forEach(u=>{i=i.concat(u.controllersRecursive())}),i}foldersRecursive(){let i=Array.from(this.folders);return this.folders.forEach(u=>{i=i.concat(u.foldersRecursive())}),i}}const ig=function({app:i}){const u=j.useRef(),g=j.useRef(null),_=j.useRef(null),T=j.useRef(),M=j.useRef(),L=j.useCallback(()=>{var W;const z=g.current;if(z){const Q=window.devicePixelRatio;z.width=z.offsetWidth*Q,z.height=z.offsetHeight*Q,(W=i.handleResize)==null||W.call(i,z.width,z.height)}},[i]);j.useEffect(()=>(L(),window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L)}),[L]);const A=j.useCallback(z=>{var Q;const W=(Q=g.current)==null?void 0:Q.getContext("webgpu");if(W){const $=z-(M.current?M.current:0);M.current=z;const te=W.getCurrentTexture();i.draw(te,g.current.width/g.current.height,z,$),i.quit||(u.current=requestAnimationFrame(A))}},[i]);return j.useEffect(()=>{var W,Q;const z=(W=g.current)==null?void 0:W.getContext("webgpu");if(T.current&&((Q=T.current)==null||Q.destroy()),i.setupUI&&(T.current=new sl({container:_.current}),i.setupUI(T.current)),!z){console.error("'webgpu' canvas context not found, cannot animate.");return}return z.configure({device:i.device,format:i.presentFormat}),u.current=requestAnimationFrame(A),()=>{u.current&&cancelAnimationFrame(u.current)}},[A,i]),ve.jsxs("div",{style:{flex:"1",position:"relative",display:"flex"},children:[ve.jsx("div",{style:{flex:"1",position:"relative",overflow:"hidden"},children:ve.jsx("canvas",{style:{position:"absolute",width:"100%",height:"100%"},ref:g})}),ve.jsx("div",{style:{position:"absolute",top:0,right:0},ref:_})]})},sg=j.memo(function(){const[i,u]=j.useState(),[g,_]=j.useState(""),[T,M]=j.useState(!1),[L,A]=Yp(),z=j.useCallback(()=>{const J=L.get("sample");if(!J)return qa;const F=ja.get(J);return F||qa},[L]),W=j.useCallback(()=>{i&&(i.quit=!0)},[i]);j.useEffect(()=>{u(void 0)},[L,u]),j.useEffect(()=>{if(i)return;M(!1);const J=z();Wm(J.requiredFeatures,J.optionalFeatures).then(({adapter:F,device:q})=>{i?(console.warn("Device found, but app was already created. This is due to either a duplicate component rerender, or the sample changing without a full page refresh. Overriding the original."),W()):console.log("Got WebGPU device, initializing sample app."),q.lost.then(de=>{console.log(`WebGPU device lost - ("${de.reason}"):
 ${de.message}`)},de=>{throw new Error("WebGPU device lost rejected",{cause:de})}),q.onuncapturederror=de=>{console.error(`WebGPU device uncaptured error: ${de.error.message}`),_(de.error.message),W()};const ue=navigator.gpu.getPreferredCanvasFormat();u(J.create(q,ue,performance.now())),console.log("Finished initializing app.")},F=>{var q,ue;console.error(F),_(`${F.message}
${(ue=(q=F.cause)==null?void 0:q.toString)==null?void 0:ue.call(q)}`)}).finally(()=>{M(!0)})},[i,W,z]);const Q={margin:0,padding:"2em",flexGrow:"1",whiteSpace:"pre-line",fontSize:"1.5em"},$=ve.jsxs("p",{style:Q,children:[`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.

        `,g]}),te=ve.jsx("p",{style:Q,children:"Loading..."}),X=[];ja.forEach((J,F)=>{X.push(ve.jsx("li",{style:{display:"flex",alignContent:"center",listStyleType:"none"},children:ve.jsx("a",{href:`/#/webgpu-samples?sample=${F}`,children:J.name},F)},F))});const K=ve.jsxs("nav",{"aria-label":"WebGPU Samples",style:{justifyItems:"center"},children:[ve.jsx("h2",{style:{paddingInline:"1em",margin:"0"},children:"Samples"}),ve.jsx("hr",{}),ve.jsx("ul",{style:{padding:0,margin:0},children:X})]});return ve.jsxs("main",{style:{flex:"1",display:"flex"},children:[ve.jsx("h1",{className:"visuallyhidden",children:"WebGPU Animated Sample"}),K,T?ve.jsx(ve.Fragment,{children:i?ve.jsx(ig,{app:i}):$}):ve.jsx(ve.Fragment,{children:te})]})}),dd=new Map([["","Estelle Booher"],["webgpu-samples","WebGPU Samples"]]),fd=j.memo(function({link:i,label:u}){const g=Ei(),_=()=>{var T;(T=g(i))==null||T.catch(M=>{throw new Error("Unable to navigate",{cause:M})})};return ve.jsx("button",{className:"nav-button",onClick:_,type:"button",children:u})}),og=j.memo(function(){const i=wn(),u=[ve.jsx(j.Fragment,{children:ve.jsx(fd,{link:"/",label:dd.get("")})},"root")];if(i.pathname!="/"){const g=i.pathname.substring(1).split("/");let _="/";u.push(...g.map((T,M)=>{const L=dd.get(T),A=M>0?"/":"";return _=_.concat(`${A}${T}`),ve.jsxs(j.Fragment,{children:[" > ",ve.jsx(fd,{link:_,label:L||T})]},_)}))}return ve.jsx("nav",{"aria-label":"Main",style:{padding:"1em",alignItems:"start"},children:u})});hd();const ag=document.getElementById("root");Uh.createRoot(ag).render(ve.jsx(j.StrictMode,{children:ve.jsxs(qp,{children:[!1,ve.jsx(og,{}),ve.jsxs(Sp,{children:[ve.jsx(Bs,{index:!0,element:ve.jsx($m,{})}),ve.jsx(Bs,{path:"webgpu-samples",element:ve.jsx(sg,{})}),ve.jsx(Bs,{path:"*",element:ve.jsx(_p,{to:"/",replace:!0})})]})]})}));
