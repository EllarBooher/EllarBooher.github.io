var _h=Object.defineProperty;var wh=(i,o,u)=>o in i?_h(i,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[o]=u;var Ce=(i,o,u)=>wh(i,typeof o!="symbol"?o+"":o,u);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))m(_);new MutationObserver(_=>{for(const S of _)if(S.type==="childList")for(const M of S.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&m(M)}).observe(document,{childList:!0,subtree:!0});function u(_){const S={};return _.integrity&&(S.integrity=_.integrity),_.referrerPolicy&&(S.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?S.credentials="include":_.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function m(_){if(_.ep)return;_.ep=!0;const S=u(_);fetch(_.href,S)}})();var La={exports:{}},_i={},za={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc;function Sh(){if(bc)return Ge;bc=1;var i=Symbol.for("react.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),M=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),j=Symbol.iterator;function B(O){return O===null||typeof O!="object"?null:(O=j&&O[j]||O["@@iterator"],typeof O=="function"?O:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,Y={};function ee(O,J,we){this.props=O,this.context=J,this.refs=Y,this.updater=we||te}ee.prototype.isReactComponent={},ee.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},ee.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function q(){}q.prototype=ee.prototype;function X(O,J,we){this.props=O,this.context=J,this.refs=Y,this.updater=we||te}var le=X.prototype=new q;le.constructor=X,W(le,ee.prototype),le.isPureReactComponent=!0;var de=Array.isArray,xe=Object.prototype.hasOwnProperty,ke={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function Ne(O,J,we){var Se,Ae={},Ue=null,f=null;if(J!=null)for(Se in J.ref!==void 0&&(f=J.ref),J.key!==void 0&&(Ue=""+J.key),J)xe.call(J,Se)&&!Ie.hasOwnProperty(Se)&&(Ae[Se]=J[Se]);var R=arguments.length-2;if(R===1)Ae.children=we;else if(1<R){for(var d=Array(R),p=0;p<R;p++)d[p]=arguments[p+2];Ae.children=d}if(O&&O.defaultProps)for(Se in R=O.defaultProps,R)Ae[Se]===void 0&&(Ae[Se]=R[Se]);return{$$typeof:i,type:O,key:Ue,ref:f,props:Ae,_owner:ke.current}}function Oe(O,J){return{$$typeof:i,type:O.type,key:J,ref:O.ref,props:O.props,_owner:O._owner}}function Fe(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function Ze(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(we){return J[we]})}var Me=/\/+/g;function Le(O,J){return typeof O=="object"&&O!==null&&O.key!=null?Ze(""+O.key):J.toString(36)}function Te(O,J,we,Se,Ae){var Ue=typeof O;(Ue==="undefined"||Ue==="boolean")&&(O=null);var f=!1;if(O===null)f=!0;else switch(Ue){case"string":case"number":f=!0;break;case"object":switch(O.$$typeof){case i:case o:f=!0}}if(f)return f=O,Ae=Ae(f),O=Se===""?"."+Le(f,0):Se,de(Ae)?(we="",O!=null&&(we=O.replace(Me,"$&/")+"/"),Te(Ae,J,we,"",function(p){return p})):Ae!=null&&(Fe(Ae)&&(Ae=Oe(Ae,we+(!Ae.key||f&&f.key===Ae.key?"":(""+Ae.key).replace(Me,"$&/")+"/")+O)),J.push(Ae)),1;if(f=0,Se=Se===""?".":Se+":",de(O))for(var R=0;R<O.length;R++){Ue=O[R];var d=Se+Le(Ue,R);f+=Te(Ue,J,we,d,Ae)}else if(d=B(O),typeof d=="function")for(O=d.call(O),R=0;!(Ue=O.next()).done;)Ue=Ue.value,d=Se+Le(Ue,R++),f+=Te(Ue,J,we,d,Ae);else if(Ue==="object")throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return f}function We(O,J,we){if(O==null)return O;var Se=[],Ae=0;return Te(O,Se,"","",function(Ue){return J.call(we,Ue,Ae++)}),Se}function $e(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(we){(O._status===0||O._status===-1)&&(O._status=1,O._result=we)},function(we){(O._status===0||O._status===-1)&&(O._status=2,O._result=we)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var He={current:null},oe={transition:null},ce={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:oe,ReactCurrentOwner:ke};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ge.Children={map:We,forEach:function(O,J,we){We(O,function(){J.apply(this,arguments)},we)},count:function(O){var J=0;return We(O,function(){J++}),J},toArray:function(O){return We(O,function(J){return J})||[]},only:function(O){if(!Fe(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ge.Component=ee,Ge.Fragment=u,Ge.Profiler=_,Ge.PureComponent=X,Ge.StrictMode=m,Ge.Suspense=P,Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Ge.act=se,Ge.cloneElement=function(O,J,we){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Se=W({},O.props),Ae=O.key,Ue=O.ref,f=O._owner;if(J!=null){if(J.ref!==void 0&&(Ue=J.ref,f=ke.current),J.key!==void 0&&(Ae=""+J.key),O.type&&O.type.defaultProps)var R=O.type.defaultProps;for(d in J)xe.call(J,d)&&!Ie.hasOwnProperty(d)&&(Se[d]=J[d]===void 0&&R!==void 0?R[d]:J[d])}var d=arguments.length-2;if(d===1)Se.children=we;else if(1<d){R=Array(d);for(var p=0;p<d;p++)R[p]=arguments[p+2];Se.children=R}return{$$typeof:i,type:O.type,key:Ae,ref:Ue,props:Se,_owner:f}},Ge.createContext=function(O){return O={$$typeof:M,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:S,_context:O},O.Consumer=O},Ge.createElement=Ne,Ge.createFactory=function(O){var J=Ne.bind(null,O);return J.type=O,J},Ge.createRef=function(){return{current:null}},Ge.forwardRef=function(O){return{$$typeof:L,render:O}},Ge.isValidElement=Fe,Ge.lazy=function(O){return{$$typeof:F,_payload:{_status:-1,_result:O},_init:$e}},Ge.memo=function(O,J){return{$$typeof:z,type:O,compare:J===void 0?null:J}},Ge.startTransition=function(O){var J=oe.transition;oe.transition={};try{O()}finally{oe.transition=J}},Ge.unstable_act=se,Ge.useCallback=function(O,J){return He.current.useCallback(O,J)},Ge.useContext=function(O){return He.current.useContext(O)},Ge.useDebugValue=function(){},Ge.useDeferredValue=function(O){return He.current.useDeferredValue(O)},Ge.useEffect=function(O,J){return He.current.useEffect(O,J)},Ge.useId=function(){return He.current.useId()},Ge.useImperativeHandle=function(O,J,we){return He.current.useImperativeHandle(O,J,we)},Ge.useInsertionEffect=function(O,J){return He.current.useInsertionEffect(O,J)},Ge.useLayoutEffect=function(O,J){return He.current.useLayoutEffect(O,J)},Ge.useMemo=function(O,J){return He.current.useMemo(O,J)},Ge.useReducer=function(O,J,we){return He.current.useReducer(O,J,we)},Ge.useRef=function(O){return He.current.useRef(O)},Ge.useState=function(O){return He.current.useState(O)},Ge.useSyncExternalStore=function(O,J,we){return He.current.useSyncExternalStore(O,J,we)},Ge.useTransition=function(){return He.current.useTransition()},Ge.version="18.3.1",Ge}var Nc;function Qa(){return Nc||(Nc=1,za.exports=Sh()),za.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc;function xh(){if(Bc)return _i;Bc=1;var i=Qa(),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,_=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function M(L,P,z){var F,j={},B=null,te=null;z!==void 0&&(B=""+z),P.key!==void 0&&(B=""+P.key),P.ref!==void 0&&(te=P.ref);for(F in P)m.call(P,F)&&!S.hasOwnProperty(F)&&(j[F]=P[F]);if(L&&L.defaultProps)for(F in P=L.defaultProps,P)j[F]===void 0&&(j[F]=P[F]);return{$$typeof:o,type:L,key:B,ref:te,props:j,_owner:_.current}}return _i.Fragment=u,_i.jsx=M,_i.jsxs=M,_i}var Fc;function Th(){return Fc||(Fc=1,La.exports=xh()),La.exports}var ve=Th(),Z=Qa(),Ds={},Ua={exports:{}},Ht={},Ca={exports:{}},ka={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc;function Rh(){return Gc||(Gc=1,function(i){function o(oe,ce){var se=oe.length;oe.push(ce);e:for(;0<se;){var O=se-1>>>1,J=oe[O];if(0<_(J,ce))oe[O]=ce,oe[se]=J,se=O;else break e}}function u(oe){return oe.length===0?null:oe[0]}function m(oe){if(oe.length===0)return null;var ce=oe[0],se=oe.pop();if(se!==ce){oe[0]=se;e:for(var O=0,J=oe.length,we=J>>>1;O<we;){var Se=2*(O+1)-1,Ae=oe[Se],Ue=Se+1,f=oe[Ue];if(0>_(Ae,se))Ue<J&&0>_(f,Ae)?(oe[O]=f,oe[Ue]=se,O=Ue):(oe[O]=Ae,oe[Se]=se,O=Se);else if(Ue<J&&0>_(f,se))oe[O]=f,oe[Ue]=se,O=Ue;else break e}}return ce}function _(oe,ce){var se=oe.sortIndex-ce.sortIndex;return se!==0?se:oe.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var S=performance;i.unstable_now=function(){return S.now()}}else{var M=Date,L=M.now();i.unstable_now=function(){return M.now()-L}}var P=[],z=[],F=1,j=null,B=3,te=!1,W=!1,Y=!1,ee=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function le(oe){for(var ce=u(z);ce!==null;){if(ce.callback===null)m(z);else if(ce.startTime<=oe)m(z),ce.sortIndex=ce.expirationTime,o(P,ce);else break;ce=u(z)}}function de(oe){if(Y=!1,le(oe),!W)if(u(P)!==null)W=!0,$e(xe);else{var ce=u(z);ce!==null&&He(de,ce.startTime-oe)}}function xe(oe,ce){W=!1,Y&&(Y=!1,q(Ne),Ne=-1),te=!0;var se=B;try{for(le(ce),j=u(P);j!==null&&(!(j.expirationTime>ce)||oe&&!Ze());){var O=j.callback;if(typeof O=="function"){j.callback=null,B=j.priorityLevel;var J=O(j.expirationTime<=ce);ce=i.unstable_now(),typeof J=="function"?j.callback=J:j===u(P)&&m(P),le(ce)}else m(P);j=u(P)}if(j!==null)var we=!0;else{var Se=u(z);Se!==null&&He(de,Se.startTime-ce),we=!1}return we}finally{j=null,B=se,te=!1}}var ke=!1,Ie=null,Ne=-1,Oe=5,Fe=-1;function Ze(){return!(i.unstable_now()-Fe<Oe)}function Me(){if(Ie!==null){var oe=i.unstable_now();Fe=oe;var ce=!0;try{ce=Ie(!0,oe)}finally{ce?Le():(ke=!1,Ie=null)}}else ke=!1}var Le;if(typeof X=="function")Le=function(){X(Me)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,We=Te.port2;Te.port1.onmessage=Me,Le=function(){We.postMessage(null)}}else Le=function(){ee(Me,0)};function $e(oe){Ie=oe,ke||(ke=!0,Le())}function He(oe,ce){Ne=ee(function(){oe(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(oe){oe.callback=null},i.unstable_continueExecution=function(){W||te||(W=!0,$e(xe))},i.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<oe?Math.floor(1e3/oe):5},i.unstable_getCurrentPriorityLevel=function(){return B},i.unstable_getFirstCallbackNode=function(){return u(P)},i.unstable_next=function(oe){switch(B){case 1:case 2:case 3:var ce=3;break;default:ce=B}var se=B;B=ce;try{return oe()}finally{B=se}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(oe,ce){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var se=B;B=oe;try{return ce()}finally{B=se}},i.unstable_scheduleCallback=function(oe,ce,se){var O=i.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,oe){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=se+J,oe={id:F++,callback:ce,priorityLevel:oe,startTime:se,expirationTime:J,sortIndex:-1},se>O?(oe.sortIndex=se,o(z,oe),u(P)===null&&oe===u(z)&&(Y?(q(Ne),Ne=-1):Y=!0,He(de,se-O))):(oe.sortIndex=J,o(P,oe),W||te||(W=!0,$e(xe))),oe},i.unstable_shouldYield=Ze,i.unstable_wrapCallback=function(oe){var ce=B;return function(){var se=B;B=ce;try{return oe.apply(this,arguments)}finally{B=se}}}}(ka)),ka}var Hc;function Eh(){return Hc||(Hc=1,Ca.exports=Rh()),Ca.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc;function Mh(){if(Vc)return Ht;Vc=1;var i=Qa(),o=Eh();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,_={};function S(e,t){M(e,t),M(e+"Capture",t)}function M(e,t){for(_[e]=t,e=0;e<t.length;e++)m.add(t[e])}var L=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),P=Object.prototype.hasOwnProperty,z=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,F={},j={};function B(e){return P.call(j,e)?!0:P.call(F,e)?!1:z.test(e)?j[e]=!0:(F[e]=!0,!1)}function te(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function W(e,t,n,r){if(t===null||typeof t>"u"||te(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Y(e,t,n,r,s,l,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=g}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new Y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new Y(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new Y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new Y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new Y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new Y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ee[e]=new Y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ee[e]=new Y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ee[e]=new Y(e,5,!1,e.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(q,X);ee[t]=new Y(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(q,X);ee[t]=new Y(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(q,X);ee[t]=new Y(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new Y(e,1,!1,e.toLowerCase(),null,!1,!1)}),ee.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ee[e]=new Y(e,1,!1,e.toLowerCase(),null,!0,!0)});function le(e,t,n,r){var s=ee.hasOwnProperty(t)?ee[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(W(t,n,s,r)&&(n=null),r||s===null?B(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var de=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),ke=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),Ze=Symbol.for("react.context"),Me=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),We=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),oe=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,O;function J(e){if(O===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return`
`+O+e}var we=!1;function Se(e,t){if(!e||we)return"";we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch($){var r=$}Reflect.construct(e,[],t)}else{try{t.call()}catch($){r=$}e.call(t.prototype)}else{try{throw Error()}catch($){r=$}e()}}catch($){if($&&r&&typeof $.stack=="string"){for(var s=$.stack.split(`
`),l=r.stack.split(`
`),g=s.length-1,E=l.length-1;1<=g&&0<=E&&s[g]!==l[E];)E--;for(;1<=g&&0<=E;g--,E--)if(s[g]!==l[E]){if(g!==1||E!==1)do if(g--,E--,0>E||s[g]!==l[E]){var U=`
`+s[g].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=g&&0<=E);break}}}finally{we=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?J(e):""}function Ae(e){switch(e.tag){case 5:return J(e.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return e=Se(e.type,!1),e;case 11:return e=Se(e.type.render,!1),e;case 1:return e=Se(e.type,!0),e;default:return""}}function Ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case ke:return"Portal";case Oe:return"Profiler";case Ne:return"StrictMode";case Le:return"Suspense";case Te:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ze:return(e.displayName||"Context")+".Consumer";case Fe:return(e._context.displayName||"Context")+".Provider";case Me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case We:return t=e.displayName||null,t!==null?t:Ue(e.type)||"Memo";case $e:t=e._payload,e=e._init;try{return Ue(e(t))}catch{}}return null}function f(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ue(t);case 8:return t===Ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function R(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p(e){var t=d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(g){r=""+g,l.call(this,g)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(g){r=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function T(e){e._valueTracker||(e._valueTracker=p(e))}function A(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function G(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function a(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function v(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=R(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function c(e,t){t=t.checked,t!=null&&le(e,"checked",t,!1)}function h(e,t){c(e,t);var n=R(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?k(e,t.type,n):t.hasOwnProperty("defaultValue")&&k(e,t.type,R(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function w(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function k(e,t,n){(t!=="number"||G(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var H=Array.isArray;function y(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+R(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function x(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function C(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(H(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:R(n)}}function I(e,t){var n=R(t.value),r=R(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function V(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Q(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function K(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Q(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pe,Pe=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pe=pe||document.createElement("div"),pe.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},De=["Webkit","ms","Moz","O"];Object.keys(me).forEach(function(e){De.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),me[t]=me[e]})});function Be(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||me.hasOwnProperty(e)&&me[e]?(""+t).trim():t+"px"}function Qe(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Be(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var lt=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(e,t){if(t){if(lt[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function ut(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function ht(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pt=null,rt=null,it=null;function _t(e){if(e=ii(e)){if(typeof pt!="function")throw Error(u(280));var t=e.stateNode;t&&(t=Xi(t),pt(e.stateNode,e.type,t))}}function wt(e){rt?it?it.push(e):it=[e]:rt=e}function St(){if(rt){var e=rt,t=it;if(it=rt=null,_t(e),t)for(e=0;e<t.length;e++)_t(t[e])}}function xt(e,t){return e(t)}function Lt(){}var Mt=!1;function zt(e,t,n){if(Mt)return e(t,n);Mt=!0;try{return xt(e,t,n)}finally{Mt=!1,(rt!==null||it!==null)&&(Lt(),St())}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=Xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Cn=!1;if(L)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){Cn=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{Cn=!1}function hr(e,t,n,r,s,l,g,E,U){var $=Array.prototype.slice.call(arguments,3);try{t.apply(n,$)}catch(re){this.onError(re)}}var fn=!1,Sn=null,xn=!1,pr=null,Pi={onError:function(e){fn=!0,Sn=e}};function Ai(e,t,n,r,s,l,g,E,U){fn=!1,Sn=null,hr.apply(Pi,arguments)}function Li(e,t,n,r,s,l,g,E,U){if(Ai.apply(this,arguments),fn){if(fn){var $=Sn;fn=!1,Sn=null}else throw Error(u(198));xn||(xn=!0,pr=$)}}function Je(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ol(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function al(e){if(Je(e)!==e)throw Error(u(188))}function Ld(e){var t=e.alternate;if(!t){if(t=Je(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return al(s),e;if(l===r)return al(s),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=s,r=l;else{for(var g=!1,E=s.child;E;){if(E===n){g=!0,n=s,r=l;break}if(E===r){g=!0,r=s,n=l;break}E=E.sibling}if(!g){for(E=l.child;E;){if(E===n){g=!0,n=l,r=s;break}if(E===r){g=!0,r=l,n=s;break}E=E.sibling}if(!g)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function ll(e){return e=Ld(e),e!==null?ul(e):null}function ul(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ul(e);if(t!==null)return t;e=e.sibling}return null}var cl=o.unstable_scheduleCallback,dl=o.unstable_cancelCallback,zd=o.unstable_shouldYield,Ud=o.unstable_requestPaint,ct=o.unstable_now,Cd=o.unstable_getCurrentPriorityLevel,Zs=o.unstable_ImmediatePriority,fl=o.unstable_UserBlockingPriority,zi=o.unstable_NormalPriority,kd=o.unstable_LowPriority,hl=o.unstable_IdlePriority,Ui=null,hn=null;function Id(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Ui,e,void 0,(e.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:bd,Dd=Math.log,Od=Math.LN2;function bd(e){return e>>>=0,e===0?32:31-(Dd(e)/Od|0)|0}var Ci=64,ki=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,l=e.pingedLanes,g=n&268435455;if(g!==0){var E=g&~s;E!==0?r=Fr(E):(l&=g,l!==0&&(r=Fr(l)))}else g=n&~s,g!==0?r=Fr(g):l!==0&&(r=Fr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,l=t&-t,s>=l||s===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tn(t),s=1<<n,r|=e[n],t&=~s;return r}function Nd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var g=31-tn(l),E=1<<g,U=s[g];U===-1?(!(E&n)||E&r)&&(s[g]=Nd(E,t)):U<=t&&(e.expiredLanes|=E),l&=~E}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pl(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function Xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tn(t),e[t]=n}function Fd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-tn(n),l=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~l}}function Ys(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tn(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var je=0;function ml(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gl,Ks,vl,yl,_l,Js=!1,Di=[],kn=null,In=null,Dn=null,Hr=new Map,Vr=new Map,On=[],Gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wl(e,t){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function $r(e,t,n,r,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},t!==null&&(t=ii(t),t!==null&&Ks(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Hd(e,t,n,r,s){switch(t){case"focusin":return kn=$r(kn,e,t,n,r,s),!0;case"dragenter":return In=$r(In,e,t,n,r,s),!0;case"mouseover":return Dn=$r(Dn,e,t,n,r,s),!0;case"pointerover":var l=s.pointerId;return Hr.set(l,$r(Hr.get(l)||null,e,t,n,r,s)),!0;case"gotpointercapture":return l=s.pointerId,Vr.set(l,$r(Vr.get(l)||null,e,t,n,r,s)),!0}return!1}function Sl(e){var t=er(e.target);if(t!==null){var n=Je(t);if(n!==null){if(t=n.tag,t===13){if(t=ol(n),t!==null){e.blockedOn=t,_l(e.priority,function(){vl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=to(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ft=r,n.target.dispatchEvent(r),ft=null}else return t=ii(n),t!==null&&Ks(t),e.blockedOn=n,!1;t.shift()}return!0}function xl(e,t,n){Oi(e)&&n.delete(t)}function Vd(){Js=!1,kn!==null&&Oi(kn)&&(kn=null),In!==null&&Oi(In)&&(In=null),Dn!==null&&Oi(Dn)&&(Dn=null),Hr.forEach(xl),Vr.forEach(xl)}function qr(e,t){e.blockedOn===t&&(e.blockedOn=null,Js||(Js=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Vd)))}function jr(e){function t(s){return qr(s,e)}if(0<Di.length){qr(Di[0],e);for(var n=1;n<Di.length;n++){var r=Di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kn!==null&&qr(kn,e),In!==null&&qr(In,e),Dn!==null&&qr(Dn,e),Hr.forEach(t),Vr.forEach(t),n=0;n<On.length;n++)r=On[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)Sl(n),n.blockedOn===null&&On.shift()}var mr=de.ReactCurrentBatchConfig,bi=!0;function $d(e,t,n,r){var s=je,l=mr.transition;mr.transition=null;try{je=1,eo(e,t,n,r)}finally{je=s,mr.transition=l}}function qd(e,t,n,r){var s=je,l=mr.transition;mr.transition=null;try{je=4,eo(e,t,n,r)}finally{je=s,mr.transition=l}}function eo(e,t,n,r){if(bi){var s=to(e,t,n,r);if(s===null)_o(e,t,r,Ni,n),wl(e,r);else if(Hd(s,e,t,n,r))r.stopPropagation();else if(wl(e,r),t&4&&-1<Gd.indexOf(e)){for(;s!==null;){var l=ii(s);if(l!==null&&gl(l),l=to(e,t,n,r),l===null&&_o(e,t,r,Ni,n),l===s)break;s=l}s!==null&&r.stopPropagation()}else _o(e,t,r,null,n)}}var Ni=null;function to(e,t,n,r){if(Ni=null,e=ht(r),e=er(e),e!==null)if(t=Je(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ol(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ni=e,null}function Tl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cd()){case Zs:return 1;case fl:return 4;case zi:case kd:return 16;case hl:return 536870912;default:return 16}default:return 16}}var bn=null,no=null,Bi=null;function Rl(){if(Bi)return Bi;var e,t=no,n=t.length,r,s="value"in bn?bn.value:bn.textContent,l=s.length;for(e=0;e<n&&t[e]===s[e];e++);var g=n-e;for(r=1;r<=g&&t[n-r]===s[l-r];r++);return Bi=s.slice(e,1<r?1-r:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gi(){return!0}function El(){return!1}function Vt(e){function t(n,r,s,l,g){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=g,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(n=e[E],this[E]=n?n(l):l[E]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Gi:El,this.isPropagationStopped=El,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=Vt(gr),Wr=se({},gr,{view:0,detail:0}),jd=Vt(Wr),io,so,Zr,Hi=se({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(io=e.screenX-Zr.screenX,so=e.screenY-Zr.screenY):so=io=0,Zr=e),io)},movementY:function(e){return"movementY"in e?e.movementY:so}}),Ml=Vt(Hi),Wd=se({},Hi,{dataTransfer:0}),Zd=Vt(Wd),Qd=se({},Wr,{relatedTarget:0}),oo=Vt(Qd),Xd=se({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yd=Vt(Xd),Kd=se({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=Vt(Kd),ef=se({},gr,{data:0}),Pl=Vt(ef),tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rf[e])?!!t[e]:!1}function ao(){return sf}var of=se({},Wr,{key:function(e){if(e.key){var t=tf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),af=Vt(of),lf=se({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Al=Vt(lf),uf=se({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),cf=Vt(uf),df=se({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ff=Vt(df),hf=se({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pf=Vt(hf),mf=[9,13,27,32],lo=L&&"CompositionEvent"in window,Qr=null;L&&"documentMode"in document&&(Qr=document.documentMode);var gf=L&&"TextEvent"in window&&!Qr,Ll=L&&(!lo||Qr&&8<Qr&&11>=Qr),zl=" ",Ul=!1;function Cl(e,t){switch(e){case"keyup":return mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function vf(e,t){switch(e){case"compositionend":return kl(t);case"keypress":return t.which!==32?null:(Ul=!0,zl);case"textInput":return e=t.data,e===zl&&Ul?null:e;default:return null}}function yf(e,t){if(vr)return e==="compositionend"||!lo&&Cl(e,t)?(e=Rl(),Bi=no=bn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ll&&t.locale!=="ko"?null:t.data;default:return null}}var _f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_f[e.type]:t==="textarea"}function Dl(e,t,n,r){wt(r),t=Wi(t,"onChange"),0<t.length&&(n=new ro("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,Yr=null;function wf(e){Jl(e,0)}function Vi(e){var t=xr(e);if(A(t))return e}function Sf(e,t){if(e==="change")return t}var Ol=!1;if(L){var uo;if(L){var co="oninput"in document;if(!co){var bl=document.createElement("div");bl.setAttribute("oninput","return;"),co=typeof bl.oninput=="function"}uo=co}else uo=!1;Ol=uo&&(!document.documentMode||9<document.documentMode)}function Nl(){Xr&&(Xr.detachEvent("onpropertychange",Bl),Yr=Xr=null)}function Bl(e){if(e.propertyName==="value"&&Vi(Yr)){var t=[];Dl(t,Yr,e,ht(e)),zt(wf,t)}}function xf(e,t,n){e==="focusin"?(Nl(),Xr=t,Yr=n,Xr.attachEvent("onpropertychange",Bl)):e==="focusout"&&Nl()}function Tf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(Yr)}function Rf(e,t){if(e==="click")return Vi(t)}function Ef(e,t){if(e==="input"||e==="change")return Vi(t)}function Mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nn=typeof Object.is=="function"?Object.is:Mf;function Kr(e,t){if(nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!P.call(t,s)||!nn(e[s],t[s]))return!1}return!0}function Fl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gl(e,t){var n=Fl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fl(n)}}function Hl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vl(){for(var e=window,t=G();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=G(e.document)}return t}function fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pf(e){var t=Vl(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hl(n.ownerDocument.documentElement,n)){if(r!==null&&fo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!e.extend&&l>r&&(s=r,r=l,l=s),s=Gl(n,l);var g=Gl(n,r);s&&g&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Af=L&&"documentMode"in document&&11>=document.documentMode,yr=null,ho=null,Jr=null,po=!1;function $l(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;po||yr==null||yr!==G(r)||(r=yr,"selectionStart"in r&&fo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Kr(Jr,r)||(Jr=r,r=Wi(ho,"onSelect"),0<r.length&&(t=new ro("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function $i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:$i("Animation","AnimationEnd"),animationiteration:$i("Animation","AnimationIteration"),animationstart:$i("Animation","AnimationStart"),transitionend:$i("Transition","TransitionEnd")},mo={},ql={};L&&(ql=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function qi(e){if(mo[e])return mo[e];if(!_r[e])return e;var t=_r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ql)return mo[e]=t[n];return e}var jl=qi("animationend"),Wl=qi("animationiteration"),Zl=qi("animationstart"),Ql=qi("transitionend"),Xl=new Map,Yl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){Xl.set(e,t),S(t,[e])}for(var go=0;go<Yl.length;go++){var vo=Yl[go],Lf=vo.toLowerCase(),zf=vo[0].toUpperCase()+vo.slice(1);Nn(Lf,"on"+zf)}Nn(jl,"onAnimationEnd"),Nn(Wl,"onAnimationIteration"),Nn(Zl,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(Ql,"onTransitionEnd"),M("onMouseEnter",["mouseout","mouseover"]),M("onMouseLeave",["mouseout","mouseover"]),M("onPointerEnter",["pointerout","pointerover"]),M("onPointerLeave",["pointerout","pointerover"]),S("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),S("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),S("onBeforeInput",["compositionend","keypress","textInput","paste"]),S("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function Kl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Li(r,t,void 0,e),e.currentTarget=null}function Jl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var g=r.length-1;0<=g;g--){var E=r[g],U=E.instance,$=E.currentTarget;if(E=E.listener,U!==l&&s.isPropagationStopped())break e;Kl(s,E,$),l=U}else for(g=0;g<r.length;g++){if(E=r[g],U=E.instance,$=E.currentTarget,E=E.listener,U!==l&&s.isPropagationStopped())break e;Kl(s,E,$),l=U}}}if(xn)throw e=pr,xn=!1,pr=null,e}function Ye(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(eu(t,e,2,!1),n.add(r))}function yo(e,t,n){var r=0;t&&(r|=4),eu(n,e,r,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[ji]){e[ji]=!0,m.forEach(function(n){n!=="selectionchange"&&(Uf.has(n)||yo(n,!1,e),yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,yo("selectionchange",!1,t))}}function eu(e,t,n,r){switch(Tl(t)){case 1:var s=$d;break;case 4:s=qd;break;default:s=eo}n=s.bind(null,t,n,e),s=void 0,!Cn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function _o(e,t,n,r,s){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===s||E.nodeType===8&&E.parentNode===s)break;if(g===4)for(g=r.return;g!==null;){var U=g.tag;if((U===3||U===4)&&(U=g.stateNode.containerInfo,U===s||U.nodeType===8&&U.parentNode===s))return;g=g.return}for(;E!==null;){if(g=er(E),g===null)return;if(U=g.tag,U===5||U===6){r=l=g;continue e}E=E.parentNode}}r=r.return}zt(function(){var $=l,re=ht(n),ie=[];e:{var ne=Xl.get(e);if(ne!==void 0){var ue=ro,ge=e;switch(e){case"keypress":if(Fi(n)===0)break e;case"keydown":case"keyup":ue=af;break;case"focusin":ge="focus",ue=oo;break;case"focusout":ge="blur",ue=oo;break;case"beforeblur":case"afterblur":ue=oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Ml;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Zd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=cf;break;case jl:case Wl:case Zl:ue=Yd;break;case Ql:ue=ff;break;case"scroll":ue=jd;break;case"wheel":ue=pf;break;case"copy":case"cut":case"paste":ue=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Al}var ye=(t&4)!==0,dt=!ye&&e==="scroll",b=ye?ne!==null?ne+"Capture":null:ne;ye=[];for(var D=$,N;D!==null;){N=D;var ae=N.stateNode;if(N.tag===5&&ae!==null&&(N=ae,b!==null&&(ae=cn(D,b),ae!=null&&ye.push(ni(D,ae,N)))),dt)break;D=D.return}0<ye.length&&(ne=new ue(ne,ge,null,n,re),ie.push({event:ne,listeners:ye}))}}if(!(t&7)){e:{if(ne=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",ne&&n!==ft&&(ge=n.relatedTarget||n.fromElement)&&(er(ge)||ge[Tn]))break e;if((ue||ne)&&(ne=re.window===re?re:(ne=re.ownerDocument)?ne.defaultView||ne.parentWindow:window,ue?(ge=n.relatedTarget||n.toElement,ue=$,ge=ge?er(ge):null,ge!==null&&(dt=Je(ge),ge!==dt||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(ue=null,ge=$),ue!==ge)){if(ye=Ml,ae="onMouseLeave",b="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Al,ae="onPointerLeave",b="onPointerEnter",D="pointer"),dt=ue==null?ne:xr(ue),N=ge==null?ne:xr(ge),ne=new ye(ae,D+"leave",ue,n,re),ne.target=dt,ne.relatedTarget=N,ae=null,er(re)===$&&(ye=new ye(b,D+"enter",ge,n,re),ye.target=N,ye.relatedTarget=dt,ae=ye),dt=ae,ue&&ge)t:{for(ye=ue,b=ge,D=0,N=ye;N;N=wr(N))D++;for(N=0,ae=b;ae;ae=wr(ae))N++;for(;0<D-N;)ye=wr(ye),D--;for(;0<N-D;)b=wr(b),N--;for(;D--;){if(ye===b||b!==null&&ye===b.alternate)break t;ye=wr(ye),b=wr(b)}ye=null}else ye=null;ue!==null&&tu(ie,ne,ue,ye,!1),ge!==null&&dt!==null&&tu(ie,dt,ge,ye,!0)}}e:{if(ne=$?xr($):window,ue=ne.nodeName&&ne.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ne.type==="file")var _e=Sf;else if(Il(ne))if(Ol)_e=Ef;else{_e=Tf;var Re=xf}else(ue=ne.nodeName)&&ue.toLowerCase()==="input"&&(ne.type==="checkbox"||ne.type==="radio")&&(_e=Rf);if(_e&&(_e=_e(e,$))){Dl(ie,_e,n,re);break e}Re&&Re(e,ne,$),e==="focusout"&&(Re=ne._wrapperState)&&Re.controlled&&ne.type==="number"&&k(ne,"number",ne.value)}switch(Re=$?xr($):window,e){case"focusin":(Il(Re)||Re.contentEditable==="true")&&(yr=Re,ho=$,Jr=null);break;case"focusout":Jr=ho=yr=null;break;case"mousedown":po=!0;break;case"contextmenu":case"mouseup":case"dragend":po=!1,$l(ie,n,re);break;case"selectionchange":if(Af)break;case"keydown":case"keyup":$l(ie,n,re)}var Ee;if(lo)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else vr?Cl(e,n)&&(ze="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ze="onCompositionStart");ze&&(Ll&&n.locale!=="ko"&&(vr||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&vr&&(Ee=Rl()):(bn=re,no="value"in bn?bn.value:bn.textContent,vr=!0)),Re=Wi($,ze),0<Re.length&&(ze=new Pl(ze,e,null,n,re),ie.push({event:ze,listeners:Re}),Ee?ze.data=Ee:(Ee=kl(n),Ee!==null&&(ze.data=Ee)))),(Ee=gf?vf(e,n):yf(e,n))&&($=Wi($,"onBeforeInput"),0<$.length&&(re=new Pl("onBeforeInput","beforeinput",null,n,re),ie.push({event:re,listeners:$}),re.data=Ee))}Jl(ie,t)})}function ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wi(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=cn(e,n),l!=null&&r.unshift(ni(e,l,s)),l=cn(e,t),l!=null&&r.push(ni(e,l,s))),e=e.return}return r}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tu(e,t,n,r,s){for(var l=t._reactName,g=[];n!==null&&n!==r;){var E=n,U=E.alternate,$=E.stateNode;if(U!==null&&U===r)break;E.tag===5&&$!==null&&(E=$,s?(U=cn(n,l),U!=null&&g.unshift(ni(n,U,E))):s||(U=cn(n,l),U!=null&&g.push(ni(n,U,E)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var Cf=/\r\n?/g,kf=/\u0000|\uFFFD/g;function nu(e){return(typeof e=="string"?e:""+e).replace(Cf,`
`).replace(kf,"")}function Zi(e,t,n){if(t=nu(t),nu(e)!==t&&n)throw Error(u(425))}function Qi(){}var wo=null,So=null;function xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,If=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,Df=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(e){return ru.resolve(null).then(e).catch(Of)}:To;function Of(e){setTimeout(function(){throw e})}function Ro(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);jr(t)}function Bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function iu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),pn="__reactFiber$"+Sr,ri="__reactProps$"+Sr,Tn="__reactContainer$"+Sr,Eo="__reactEvents$"+Sr,bf="__reactListeners$"+Sr,Nf="__reactHandles$"+Sr;function er(e){var t=e[pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tn]||n[pn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=iu(e);e!==null;){if(n=e[pn])return n;e=iu(e)}return t}e=n,n=e.parentNode}return null}function ii(e){return e=e[pn]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Xi(e){return e[ri]||null}var Mo=[],Tr=-1;function Fn(e){return{current:e}}function Ke(e){0>Tr||(e.current=Mo[Tr],Mo[Tr]=null,Tr--)}function Xe(e,t){Tr++,Mo[Tr]=e.current,e.current=t}var Gn={},Ut=Fn(Gn),bt=Fn(!1),tr=Gn;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Nt(e){return e=e.childContextTypes,e!=null}function Yi(){Ke(bt),Ke(Ut)}function su(e,t,n){if(Ut.current!==Gn)throw Error(u(168));Xe(Ut,t),Xe(bt,n)}function ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(u(108,f(e)||"Unknown",s));return se({},n,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,tr=Ut.current,Xe(Ut,e),Xe(bt,bt.current),!0}function au(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=ou(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,Ke(bt),Ke(Ut),Xe(Ut,e)):Ke(bt),Xe(bt,n)}var Rn=null,Ji=!1,Po=!1;function lu(e){Rn===null?Rn=[e]:Rn.push(e)}function Bf(e){Ji=!0,lu(e)}function Hn(){if(!Po&&Rn!==null){Po=!0;var e=0,t=je;try{var n=Rn;for(je=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rn=null,Ji=!1}catch(s){throw Rn!==null&&(Rn=Rn.slice(e+1)),cl(Zs,Hn),s}finally{je=t,Po=!1}}return null}var Er=[],Mr=0,es=null,ts=0,Qt=[],Xt=0,nr=null,En=1,Mn="";function rr(e,t){Er[Mr++]=ts,Er[Mr++]=es,es=e,ts=t}function uu(e,t,n){Qt[Xt++]=En,Qt[Xt++]=Mn,Qt[Xt++]=nr,nr=e;var r=En;e=Mn;var s=32-tn(r)-1;r&=~(1<<s),n+=1;var l=32-tn(t)+s;if(30<l){var g=s-s%5;l=(r&(1<<g)-1).toString(32),r>>=g,s-=g,En=1<<32-tn(t)+s|n<<s|r,Mn=l+e}else En=1<<l|n<<s|r,Mn=e}function Ao(e){e.return!==null&&(rr(e,1),uu(e,1,0))}function Lo(e){for(;e===es;)es=Er[--Mr],Er[Mr]=null,ts=Er[--Mr],Er[Mr]=null;for(;e===nr;)nr=Qt[--Xt],Qt[Xt]=null,Mn=Qt[--Xt],Qt[Xt]=null,En=Qt[--Xt],Qt[Xt]=null}var $t=null,qt=null,et=!1,rn=null;function cu(e,t){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$t=e,qt=Bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$t=e,qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:En,overflow:Mn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$t=e,qt=null,!0):!1;default:return!1}}function zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Uo(e){if(et){var t=qt;if(t){var n=t;if(!du(e,t)){if(zo(e))throw Error(u(418));t=Bn(n.nextSibling);var r=$t;t&&du(e,t)?cu(r,n):(e.flags=e.flags&-4097|2,et=!1,$t=e)}}else{if(zo(e))throw Error(u(418));e.flags=e.flags&-4097|2,et=!1,$t=e}}}function fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$t=e}function ns(e){if(e!==$t)return!1;if(!et)return fu(e),et=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xo(e.type,e.memoizedProps)),t&&(t=qt)){if(zo(e))throw hu(),Error(u(418));for(;t;)cu(e,t),t=Bn(t.nextSibling)}if(fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qt=Bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qt=null}}else qt=$t?Bn(e.stateNode.nextSibling):null;return!0}function hu(){for(var e=qt;e;)e=Bn(e.nextSibling)}function Pr(){qt=$t=null,et=!1}function Co(e){rn===null?rn=[e]:rn.push(e)}var Ff=de.ReactCurrentBatchConfig;function si(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var s=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(g){var E=s.refs;g===null?delete E[l]:E[l]=g},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function rs(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function mu(e){function t(b,D){if(e){var N=b.deletions;N===null?(b.deletions=[D],b.flags|=16):N.push(D)}}function n(b,D){if(!e)return null;for(;D!==null;)t(b,D),D=D.sibling;return null}function r(b,D){for(b=new Map;D!==null;)D.key!==null?b.set(D.key,D):b.set(D.index,D),D=D.sibling;return b}function s(b,D){return b=Xn(b,D),b.index=0,b.sibling=null,b}function l(b,D,N){return b.index=N,e?(N=b.alternate,N!==null?(N=N.index,N<D?(b.flags|=2,D):N):(b.flags|=2,D)):(b.flags|=1048576,D)}function g(b){return e&&b.alternate===null&&(b.flags|=2),b}function E(b,D,N,ae){return D===null||D.tag!==6?(D=Ta(N,b.mode,ae),D.return=b,D):(D=s(D,N),D.return=b,D)}function U(b,D,N,ae){var _e=N.type;return _e===Ie?re(b,D,N.props.children,ae,N.key):D!==null&&(D.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===$e&&pu(_e)===D.type)?(ae=s(D,N.props),ae.ref=si(b,D,N),ae.return=b,ae):(ae=Ps(N.type,N.key,N.props,null,b.mode,ae),ae.ref=si(b,D,N),ae.return=b,ae)}function $(b,D,N,ae){return D===null||D.tag!==4||D.stateNode.containerInfo!==N.containerInfo||D.stateNode.implementation!==N.implementation?(D=Ra(N,b.mode,ae),D.return=b,D):(D=s(D,N.children||[]),D.return=b,D)}function re(b,D,N,ae,_e){return D===null||D.tag!==7?(D=dr(N,b.mode,ae,_e),D.return=b,D):(D=s(D,N),D.return=b,D)}function ie(b,D,N){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Ta(""+D,b.mode,N),D.return=b,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case xe:return N=Ps(D.type,D.key,D.props,null,b.mode,N),N.ref=si(b,null,D),N.return=b,N;case ke:return D=Ra(D,b.mode,N),D.return=b,D;case $e:var ae=D._init;return ie(b,ae(D._payload),N)}if(H(D)||ce(D))return D=dr(D,b.mode,N,null),D.return=b,D;rs(b,D)}return null}function ne(b,D,N,ae){var _e=D!==null?D.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return _e!==null?null:E(b,D,""+N,ae);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case xe:return N.key===_e?U(b,D,N,ae):null;case ke:return N.key===_e?$(b,D,N,ae):null;case $e:return _e=N._init,ne(b,D,_e(N._payload),ae)}if(H(N)||ce(N))return _e!==null?null:re(b,D,N,ae,null);rs(b,N)}return null}function ue(b,D,N,ae,_e){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return b=b.get(N)||null,E(D,b,""+ae,_e);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case xe:return b=b.get(ae.key===null?N:ae.key)||null,U(D,b,ae,_e);case ke:return b=b.get(ae.key===null?N:ae.key)||null,$(D,b,ae,_e);case $e:var Re=ae._init;return ue(b,D,N,Re(ae._payload),_e)}if(H(ae)||ce(ae))return b=b.get(N)||null,re(D,b,ae,_e,null);rs(D,ae)}return null}function ge(b,D,N,ae){for(var _e=null,Re=null,Ee=D,ze=D=0,Et=null;Ee!==null&&ze<N.length;ze++){Ee.index>ze?(Et=Ee,Ee=null):Et=Ee.sibling;var qe=ne(b,Ee,N[ze],ae);if(qe===null){Ee===null&&(Ee=Et);break}e&&Ee&&qe.alternate===null&&t(b,Ee),D=l(qe,D,ze),Re===null?_e=qe:Re.sibling=qe,Re=qe,Ee=Et}if(ze===N.length)return n(b,Ee),et&&rr(b,ze),_e;if(Ee===null){for(;ze<N.length;ze++)Ee=ie(b,N[ze],ae),Ee!==null&&(D=l(Ee,D,ze),Re===null?_e=Ee:Re.sibling=Ee,Re=Ee);return et&&rr(b,ze),_e}for(Ee=r(b,Ee);ze<N.length;ze++)Et=ue(Ee,b,ze,N[ze],ae),Et!==null&&(e&&Et.alternate!==null&&Ee.delete(Et.key===null?ze:Et.key),D=l(Et,D,ze),Re===null?_e=Et:Re.sibling=Et,Re=Et);return e&&Ee.forEach(function(Yn){return t(b,Yn)}),et&&rr(b,ze),_e}function ye(b,D,N,ae){var _e=ce(N);if(typeof _e!="function")throw Error(u(150));if(N=_e.call(N),N==null)throw Error(u(151));for(var Re=_e=null,Ee=D,ze=D=0,Et=null,qe=N.next();Ee!==null&&!qe.done;ze++,qe=N.next()){Ee.index>ze?(Et=Ee,Ee=null):Et=Ee.sibling;var Yn=ne(b,Ee,qe.value,ae);if(Yn===null){Ee===null&&(Ee=Et);break}e&&Ee&&Yn.alternate===null&&t(b,Ee),D=l(Yn,D,ze),Re===null?_e=Yn:Re.sibling=Yn,Re=Yn,Ee=Et}if(qe.done)return n(b,Ee),et&&rr(b,ze),_e;if(Ee===null){for(;!qe.done;ze++,qe=N.next())qe=ie(b,qe.value,ae),qe!==null&&(D=l(qe,D,ze),Re===null?_e=qe:Re.sibling=qe,Re=qe);return et&&rr(b,ze),_e}for(Ee=r(b,Ee);!qe.done;ze++,qe=N.next())qe=ue(Ee,b,ze,qe.value,ae),qe!==null&&(e&&qe.alternate!==null&&Ee.delete(qe.key===null?ze:qe.key),D=l(qe,D,ze),Re===null?_e=qe:Re.sibling=qe,Re=qe);return e&&Ee.forEach(function(yh){return t(b,yh)}),et&&rr(b,ze),_e}function dt(b,D,N,ae){if(typeof N=="object"&&N!==null&&N.type===Ie&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case xe:e:{for(var _e=N.key,Re=D;Re!==null;){if(Re.key===_e){if(_e=N.type,_e===Ie){if(Re.tag===7){n(b,Re.sibling),D=s(Re,N.props.children),D.return=b,b=D;break e}}else if(Re.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===$e&&pu(_e)===Re.type){n(b,Re.sibling),D=s(Re,N.props),D.ref=si(b,Re,N),D.return=b,b=D;break e}n(b,Re);break}else t(b,Re);Re=Re.sibling}N.type===Ie?(D=dr(N.props.children,b.mode,ae,N.key),D.return=b,b=D):(ae=Ps(N.type,N.key,N.props,null,b.mode,ae),ae.ref=si(b,D,N),ae.return=b,b=ae)}return g(b);case ke:e:{for(Re=N.key;D!==null;){if(D.key===Re)if(D.tag===4&&D.stateNode.containerInfo===N.containerInfo&&D.stateNode.implementation===N.implementation){n(b,D.sibling),D=s(D,N.children||[]),D.return=b,b=D;break e}else{n(b,D);break}else t(b,D);D=D.sibling}D=Ra(N,b.mode,ae),D.return=b,b=D}return g(b);case $e:return Re=N._init,dt(b,D,Re(N._payload),ae)}if(H(N))return ge(b,D,N,ae);if(ce(N))return ye(b,D,N,ae);rs(b,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,D!==null&&D.tag===6?(n(b,D.sibling),D=s(D,N),D.return=b,b=D):(n(b,D),D=Ta(N,b.mode,ae),D.return=b,b=D),g(b)):n(b,D)}return dt}var Ar=mu(!0),gu=mu(!1),is=Fn(null),ss=null,Lr=null,ko=null;function Io(){ko=Lr=ss=null}function Do(e){var t=is.current;Ke(is),e._currentValue=t}function Oo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){ss=e,ko=Lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Bt=!0),e.firstContext=null)}function Yt(e){var t=e._currentValue;if(ko!==e)if(e={context:e,memoizedValue:t,next:null},Lr===null){if(ss===null)throw Error(u(308));Lr=e,ss.dependencies={lanes:0,firstContext:e}}else Lr=Lr.next=e;return t}var ir=null;function bo(e){ir===null?ir=[e]:ir.push(e)}function vu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,bo(t)):(n.next=s.next,s.next=n),t.interleaved=n,Pn(e,r)}function Pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vn=!1;function No(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ve&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Pn(e,n)}return s=r.interleaved,s===null?(t.next=t,bo(r)):(t.next=s.next,s.next=t),r.interleaved=t,Pn(e,n)}function os(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ys(e,n)}}function _u(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var g={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=g:l=l.next=g,n=n.next}while(n!==null);l===null?s=l=t:l=l.next=t}else s=l=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function as(e,t,n,r){var s=e.updateQueue;Vn=!1;var l=s.firstBaseUpdate,g=s.lastBaseUpdate,E=s.shared.pending;if(E!==null){s.shared.pending=null;var U=E,$=U.next;U.next=null,g===null?l=$:g.next=$,g=U;var re=e.alternate;re!==null&&(re=re.updateQueue,E=re.lastBaseUpdate,E!==g&&(E===null?re.firstBaseUpdate=$:E.next=$,re.lastBaseUpdate=U))}if(l!==null){var ie=s.baseState;g=0,re=$=U=null,E=l;do{var ne=E.lane,ue=E.eventTime;if((r&ne)===ne){re!==null&&(re=re.next={eventTime:ue,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var ge=e,ye=E;switch(ne=t,ue=n,ye.tag){case 1:if(ge=ye.payload,typeof ge=="function"){ie=ge.call(ue,ie,ne);break e}ie=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ye.payload,ne=typeof ge=="function"?ge.call(ue,ie,ne):ge,ne==null)break e;ie=se({},ie,ne);break e;case 2:Vn=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,ne=s.effects,ne===null?s.effects=[E]:ne.push(E))}else ue={eventTime:ue,lane:ne,tag:E.tag,payload:E.payload,callback:E.callback,next:null},re===null?($=re=ue,U=ie):re=re.next=ue,g|=ne;if(E=E.next,E===null){if(E=s.shared.pending,E===null)break;ne=E,E=ne.next,ne.next=null,s.lastBaseUpdate=ne,s.shared.pending=null}}while(!0);if(re===null&&(U=ie),s.baseState=U,s.firstBaseUpdate=$,s.lastBaseUpdate=re,t=s.shared.interleaved,t!==null){s=t;do g|=s.lane,s=s.next;while(s!==t)}else l===null&&(s.shared.lanes=0);ar|=g,e.lanes=g,e.memoizedState=ie}}function wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(u(191,s));s.call(r)}}}var oi={},mn=Fn(oi),ai=Fn(oi),li=Fn(oi);function sr(e){if(e===oi)throw Error(u(174));return e}function Bo(e,t){switch(Xe(li,t),Xe(ai,e),Xe(mn,oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:K(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=K(t,e)}Ke(mn),Xe(mn,t)}function Ur(){Ke(mn),Ke(ai),Ke(li)}function Su(e){sr(li.current);var t=sr(mn.current),n=K(t,e.type);t!==n&&(Xe(ai,e),Xe(mn,n))}function Fo(e){ai.current===e&&(Ke(mn),Ke(ai))}var st=Fn(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Go=[];function Ho(){for(var e=0;e<Go.length;e++)Go[e]._workInProgressVersionPrimary=null;Go.length=0}var us=de.ReactCurrentDispatcher,Vo=de.ReactCurrentBatchConfig,or=0,ot=null,vt=null,Tt=null,cs=!1,ui=!1,ci=0,Gf=0;function Ct(){throw Error(u(321))}function $o(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nn(e[n],t[n]))return!1;return!0}function qo(e,t,n,r,s,l){if(or=l,ot=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,us.current=e===null||e.memoizedState===null?qf:jf,e=n(r,s),ui){l=0;do{if(ui=!1,ci=0,25<=l)throw Error(u(301));l+=1,Tt=vt=null,t.updateQueue=null,us.current=Wf,e=n(r,s)}while(ui)}if(us.current=hs,t=vt!==null&&vt.next!==null,or=0,Tt=vt=ot=null,cs=!1,t)throw Error(u(300));return e}function jo(){var e=ci!==0;return ci=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?ot.memoizedState=Tt=e:Tt=Tt.next=e,Tt}function Kt(){if(vt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=vt.next;var t=Tt===null?ot.memoizedState:Tt.next;if(t!==null)Tt=t,vt=e;else{if(e===null)throw Error(u(310));vt=e,e={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Tt===null?ot.memoizedState=Tt=e:Tt=Tt.next=e}return Tt}function di(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=Kt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=vt,s=r.baseQueue,l=n.pending;if(l!==null){if(s!==null){var g=s.next;s.next=l.next,l.next=g}r.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,r=r.baseState;var E=g=null,U=null,$=l;do{var re=$.lane;if((or&re)===re)U!==null&&(U=U.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),r=$.hasEagerState?$.eagerState:e(r,$.action);else{var ie={lane:re,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};U===null?(E=U=ie,g=r):U=U.next=ie,ot.lanes|=re,ar|=re}$=$.next}while($!==null&&$!==l);U===null?g=r:U.next=E,nn(r,t.memoizedState)||(Bt=!0),t.memoizedState=r,t.baseState=g,t.baseQueue=U,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do l=s.lane,ot.lanes|=l,ar|=l,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zo(e){var t=Kt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,l=t.memoizedState;if(s!==null){n.pending=null;var g=s=s.next;do l=e(l,g.action),g=g.next;while(g!==s);nn(l,t.memoizedState)||(Bt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function xu(){}function Tu(e,t){var n=ot,r=Kt(),s=t(),l=!nn(r.memoizedState,s);if(l&&(r.memoizedState=s,Bt=!0),r=r.queue,Qo(Mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,fi(9,Eu.bind(null,n,r,s,t),void 0,null),Rt===null)throw Error(u(349));or&30||Ru(n,t,s)}return s}function Ru(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Eu(e,t,n,r){t.value=n,t.getSnapshot=r,Pu(t)&&Au(e)}function Mu(e,t,n){return n(function(){Pu(t)&&Au(e)})}function Pu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nn(e,n)}catch{return!0}}function Au(e){var t=Pn(e,1);t!==null&&ln(t,e,1,-1)}function Lu(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:e},t.queue=e,e=e.dispatch=$f.bind(null,ot,e),[t.memoizedState,e]}function fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zu(){return Kt().memoizedState}function ds(e,t,n,r){var s=gn();ot.flags|=e,s.memoizedState=fi(1|t,n,void 0,r===void 0?null:r)}function fs(e,t,n,r){var s=Kt();r=r===void 0?null:r;var l=void 0;if(vt!==null){var g=vt.memoizedState;if(l=g.destroy,r!==null&&$o(r,g.deps)){s.memoizedState=fi(t,n,l,r);return}}ot.flags|=e,s.memoizedState=fi(1|t,n,l,r)}function Uu(e,t){return ds(8390656,8,e,t)}function Qo(e,t){return fs(2048,8,e,t)}function Cu(e,t){return fs(4,2,e,t)}function ku(e,t){return fs(4,4,e,t)}function Iu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Du(e,t,n){return n=n!=null?n.concat([e]):null,fs(4,4,Iu.bind(null,t,e),n)}function Xo(){}function Ou(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$o(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bu(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$o(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nu(e,t,n){return or&21?(nn(n,t)||(n=pl(),ot.lanes|=n,ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Bt=!0),e.memoizedState=n)}function Hf(e,t){var n=je;je=n!==0&&4>n?n:4,e(!0);var r=Vo.transition;Vo.transition={};try{e(!1),t()}finally{je=n,Vo.transition=r}}function Bu(){return Kt().memoizedState}function Vf(e,t,n){var r=Zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fu(e))Gu(t,n);else if(n=vu(e,t,n,r),n!==null){var s=Ot();ln(n,e,r,s),Hu(n,t,r)}}function $f(e,t,n){var r=Zn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))Gu(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var g=t.lastRenderedState,E=l(g,n);if(s.hasEagerState=!0,s.eagerState=E,nn(E,g)){var U=t.interleaved;U===null?(s.next=s,bo(t)):(s.next=U.next,U.next=s),t.interleaved=s;return}}catch{}finally{}n=vu(e,t,s,r),n!==null&&(s=Ot(),ln(n,e,r,s),Hu(n,t,r))}}function Fu(e){var t=e.alternate;return e===ot||t!==null&&t===ot}function Gu(e,t){ui=cs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ys(e,n)}}var hs={readContext:Yt,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},qf={readContext:Yt,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:Uu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ds(4194308,4,Iu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return ds(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vf.bind(null,ot,e),[r.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:Lu,useDebugValue:Xo,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Lu(!1),t=e[0];return e=Hf.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ot,s=gn();if(et){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Rt===null)throw Error(u(349));or&30||Ru(r,t,n)}s.memoizedState=n;var l={value:n,getSnapshot:t};return s.queue=l,Uu(Mu.bind(null,r,l,e),[e]),r.flags|=2048,fi(9,Eu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=gn(),t=Rt.identifierPrefix;if(et){var n=Mn,r=En;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jf={readContext:Yt,useCallback:Ou,useContext:Yt,useEffect:Qo,useImperativeHandle:Du,useInsertionEffect:Cu,useLayoutEffect:ku,useMemo:bu,useReducer:Wo,useRef:zu,useState:function(){return Wo(di)},useDebugValue:Xo,useDeferredValue:function(e){var t=Kt();return Nu(t,vt.memoizedState,e)},useTransition:function(){var e=Wo(di)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:xu,useSyncExternalStore:Tu,useId:Bu,unstable_isNewReconciler:!1},Wf={readContext:Yt,useCallback:Ou,useContext:Yt,useEffect:Qo,useImperativeHandle:Du,useInsertionEffect:Cu,useLayoutEffect:ku,useMemo:bu,useReducer:Zo,useRef:zu,useState:function(){return Zo(di)},useDebugValue:Xo,useDeferredValue:function(e){var t=Kt();return vt===null?t.memoizedState=e:Nu(t,vt.memoizedState,e)},useTransition:function(){var e=Zo(di)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:xu,useSyncExternalStore:Tu,useId:Bu,unstable_isNewReconciler:!1};function sn(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ps={isMounted:function(e){return(e=e._reactInternals)?Je(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ot(),s=Zn(e),l=An(r,s);l.payload=t,n!=null&&(l.callback=n),t=$n(e,l,s),t!==null&&(ln(t,e,s,r),os(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ot(),s=Zn(e),l=An(r,s);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=$n(e,l,s),t!==null&&(ln(t,e,s,r),os(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),r=Zn(e),s=An(n,r);s.tag=2,t!=null&&(s.callback=t),t=$n(e,s,r),t!==null&&(ln(t,e,r,n),os(t,e,r))}};function Vu(e,t,n,r,s,l,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,g):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(s,l):!0}function $u(e,t,n){var r=!1,s=Gn,l=t.contextType;return typeof l=="object"&&l!==null?l=Yt(l):(s=Nt(t)?tr:Ut.current,r=t.contextTypes,l=(r=r!=null)?Rr(e,s):Gn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ps,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),t}function qu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ps.enqueueReplaceState(t,t.state,null)}function Ko(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},No(e);var l=t.contextType;typeof l=="object"&&l!==null?s.context=Yt(l):(l=Nt(t)?tr:Ut.current,s.context=Rr(e,l)),s.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Yo(e,t,l,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ps.enqueueReplaceState(s,s.state,null),as(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t){try{var n="",r=t;do n+=Ae(r),r=r.return;while(r);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:s,digest:null}}function Jo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ea(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zf=typeof WeakMap=="function"?WeakMap:Map;function ju(e,t,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ss||(Ss=!0,ma=r),ea(e,t)},n}function Wu(e,t,n){n=An(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ea(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ea(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),n}function Zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zf;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=lh.bind(null,e,t,n),t.then(e,e))}function Qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xu(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=An(-1,1),t.tag=2,$n(n,t,1))),n.lanes|=1),e)}var Qf=de.ReactCurrentOwner,Bt=!1;function Dt(e,t,n,r){t.child=e===null?gu(t,null,n,r):Ar(t,e.child,n,r)}function Yu(e,t,n,r,s){n=n.render;var l=t.ref;return zr(t,s),r=qo(e,t,n,r,l,s),n=jo(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ln(e,t,s)):(et&&n&&Ao(t),t.flags|=1,Dt(e,t,r,s),t.child)}function Ku(e,t,n,r,s){if(e===null){var l=n.type;return typeof l=="function"&&!xa(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ju(e,t,l,r,s)):(e=Ps(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&s)){var g=l.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(g,r)&&e.ref===t.ref)return Ln(e,t,s)}return t.flags|=1,e=Xn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ju(e,t,n,r,s){if(e!==null){var l=e.memoizedProps;if(Kr(l,r)&&e.ref===t.ref)if(Bt=!1,t.pendingProps=r=l,(e.lanes&s)!==0)e.flags&131072&&(Bt=!0);else return t.lanes=e.lanes,Ln(e,t,s)}return ta(e,t,n,r,s)}function ec(e,t,n){var r=t.pendingProps,s=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(Ir,jt),jt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Xe(Ir,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Xe(Ir,jt),jt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Xe(Ir,jt),jt|=r;return Dt(e,t,s,n),t.child}function tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ta(e,t,n,r,s){var l=Nt(n)?tr:Ut.current;return l=Rr(t,l),zr(t,s),n=qo(e,t,n,r,l,s),r=jo(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ln(e,t,s)):(et&&r&&Ao(t),t.flags|=1,Dt(e,t,n,s),t.child)}function nc(e,t,n,r,s){if(Nt(n)){var l=!0;Ki(t)}else l=!1;if(zr(t,s),t.stateNode===null)gs(e,t),$u(t,n,r),Ko(t,n,r,s),r=!0;else if(e===null){var g=t.stateNode,E=t.memoizedProps;g.props=E;var U=g.context,$=n.contextType;typeof $=="object"&&$!==null?$=Yt($):($=Nt(n)?tr:Ut.current,$=Rr(t,$));var re=n.getDerivedStateFromProps,ie=typeof re=="function"||typeof g.getSnapshotBeforeUpdate=="function";ie||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==r||U!==$)&&qu(t,g,r,$),Vn=!1;var ne=t.memoizedState;g.state=ne,as(t,r,g,s),U=t.memoizedState,E!==r||ne!==U||bt.current||Vn?(typeof re=="function"&&(Yo(t,n,re,r),U=t.memoizedState),(E=Vn||Vu(t,n,E,r,ne,U,$))?(ie||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=U),g.props=r,g.state=U,g.context=$,r=E):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{g=t.stateNode,yu(e,t),E=t.memoizedProps,$=t.type===t.elementType?E:sn(t.type,E),g.props=$,ie=t.pendingProps,ne=g.context,U=n.contextType,typeof U=="object"&&U!==null?U=Yt(U):(U=Nt(n)?tr:Ut.current,U=Rr(t,U));var ue=n.getDerivedStateFromProps;(re=typeof ue=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==ie||ne!==U)&&qu(t,g,r,U),Vn=!1,ne=t.memoizedState,g.state=ne,as(t,r,g,s);var ge=t.memoizedState;E!==ie||ne!==ge||bt.current||Vn?(typeof ue=="function"&&(Yo(t,n,ue,r),ge=t.memoizedState),($=Vn||Vu(t,n,$,r,ne,ge,U)||!1)?(re||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(r,ge,U),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(r,ge,U)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===e.memoizedProps&&ne===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ne===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ge),g.props=r,g.state=ge,g.context=U,r=$):(typeof g.componentDidUpdate!="function"||E===e.memoizedProps&&ne===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ne===e.memoizedState||(t.flags|=1024),r=!1)}return na(e,t,n,r,l,s)}function na(e,t,n,r,s,l){tc(e,t);var g=(t.flags&128)!==0;if(!r&&!g)return s&&au(t,n,!1),Ln(e,t,l);r=t.stateNode,Qf.current=t;var E=g&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&g?(t.child=Ar(t,e.child,null,l),t.child=Ar(t,null,E,l)):Dt(e,t,E,l),t.memoizedState=r.state,s&&au(t,n,!0),t.child}function rc(e){var t=e.stateNode;t.pendingContext?su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&su(e,t.context,!1),Bo(e,t.containerInfo)}function ic(e,t,n,r,s){return Pr(),Co(s),t.flags|=256,Dt(e,t,n,r),t.child}var ra={dehydrated:null,treeContext:null,retryLane:0};function ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function sc(e,t,n){var r=t.pendingProps,s=st.current,l=!1,g=(t.flags&128)!==0,E;if((E=g)||(E=e!==null&&e.memoizedState===null?!1:(s&2)!==0),E?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Xe(st,s&1),e===null)return Uo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(g=r.children,e=r.fallback,l?(r=t.mode,l=t.child,g={mode:"hidden",children:g},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=g):l=As(g,r,0,null),e=dr(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ia(n),t.memoizedState=ra,e):sa(t,g));if(s=e.memoizedState,s!==null&&(E=s.dehydrated,E!==null))return Xf(e,t,g,r,E,s,n);if(l){l=r.fallback,g=t.mode,s=e.child,E=s.sibling;var U={mode:"hidden",children:r.children};return!(g&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=U,t.deletions=null):(r=Xn(s,U),r.subtreeFlags=s.subtreeFlags&14680064),E!==null?l=Xn(E,l):(l=dr(l,g,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,g=e.child.memoizedState,g=g===null?ia(n):{baseLanes:g.baseLanes|n,cachePool:null,transitions:g.transitions},l.memoizedState=g,l.childLanes=e.childLanes&~n,t.memoizedState=ra,r}return l=e.child,e=l.sibling,r=Xn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sa(e,t){return t=As({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ms(e,t,n,r){return r!==null&&Co(r),Ar(t,e.child,null,n),e=sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xf(e,t,n,r,s,l,g){if(n)return t.flags&256?(t.flags&=-257,r=Jo(Error(u(422))),ms(e,t,g,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,s=t.mode,r=As({mode:"visible",children:r.children},s,0,null),l=dr(l,s,g,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Ar(t,e.child,null,g),t.child.memoizedState=ia(g),t.memoizedState=ra,l);if(!(t.mode&1))return ms(e,t,g,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var E=r.dgst;return r=E,l=Error(u(419)),r=Jo(l,r,void 0),ms(e,t,g,r)}if(E=(g&e.childLanes)!==0,Bt||E){if(r=Rt,r!==null){switch(g&-g){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|g)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,Pn(e,s),ln(r,e,s,-1))}return Sa(),r=Jo(Error(u(421))),ms(e,t,g,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=uh.bind(null,e),s._reactRetry=t,null):(e=l.treeContext,qt=Bn(s.nextSibling),$t=t,et=!0,rn=null,e!==null&&(Qt[Xt++]=En,Qt[Xt++]=Mn,Qt[Xt++]=nr,En=e.id,Mn=e.overflow,nr=t),t=sa(t,r.children),t.flags|=4096,t)}function oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oo(e.return,t,n)}function oa(e,t,n,r,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=s)}function ac(e,t,n){var r=t.pendingProps,s=r.revealOrder,l=r.tail;if(Dt(e,t,r.children,n),r=st.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oc(e,n,t);else if(e.tag===19)oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Xe(st,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ls(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),oa(t,!1,s,n,l);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ls(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}oa(t,!0,n,null,l);break;case"together":oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yf(e,t,n){switch(t.tag){case 3:rc(t),Pr();break;case 5:Su(t);break;case 1:Nt(t.type)&&Ki(t);break;case 4:Bo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Xe(is,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Xe(st,st.current&1),t.flags|=128,null):n&t.child.childLanes?sc(e,t,n):(Xe(st,st.current&1),e=Ln(e,t,n),e!==null?e.sibling:null);Xe(st,st.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ac(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Xe(st,st.current),r)break;return null;case 22:case 23:return t.lanes=0,ec(e,t,n)}return Ln(e,t,n)}var lc,aa,uc,cc;lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},aa=function(){},uc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,sr(mn.current);var l=null;switch(n){case"input":s=a(e,s),r=a(e,r),l=[];break;case"select":s=se({},s,{value:void 0}),r=se({},r,{value:void 0}),l=[];break;case"textarea":s=x(e,s),r=x(e,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qi)}nt(n,r);var g;n=null;for($ in s)if(!r.hasOwnProperty($)&&s.hasOwnProperty($)&&s[$]!=null)if($==="style"){var E=s[$];for(g in E)E.hasOwnProperty(g)&&(n||(n={}),n[g]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(_.hasOwnProperty($)?l||(l=[]):(l=l||[]).push($,null));for($ in r){var U=r[$];if(E=s!=null?s[$]:void 0,r.hasOwnProperty($)&&U!==E&&(U!=null||E!=null))if($==="style")if(E){for(g in E)!E.hasOwnProperty(g)||U&&U.hasOwnProperty(g)||(n||(n={}),n[g]="");for(g in U)U.hasOwnProperty(g)&&E[g]!==U[g]&&(n||(n={}),n[g]=U[g])}else n||(l||(l=[]),l.push($,n)),n=U;else $==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,E=E?E.__html:void 0,U!=null&&E!==U&&(l=l||[]).push($,U)):$==="children"?typeof U!="string"&&typeof U!="number"||(l=l||[]).push($,""+U):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(_.hasOwnProperty($)?(U!=null&&$==="onScroll"&&Ye("scroll",e),l||E===U||(l=[])):(l=l||[]).push($,U))}n&&(l=l||[]).push("style",n);var $=l;(t.updateQueue=$)&&(t.flags|=4)}},cc=function(e,t,n,r){n!==r&&(t.flags|=4)};function hi(e,t){if(!et)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function kt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kf(e,t,n){var r=t.pendingProps;switch(Lo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(t),null;case 1:return Nt(t.type)&&Yi(),kt(t),null;case 3:return r=t.stateNode,Ur(),Ke(bt),Ke(Ut),Ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(ya(rn),rn=null))),aa(e,t),kt(t),null;case 5:Fo(t);var s=sr(li.current);if(n=t.type,e!==null&&t.stateNode!=null)uc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return kt(t),null}if(e=sr(mn.current),ns(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[pn]=t,r[ri]=l,e=(t.mode&1)!==0,n){case"dialog":Ye("cancel",r),Ye("close",r);break;case"iframe":case"object":case"embed":Ye("load",r);break;case"video":case"audio":for(s=0;s<ei.length;s++)Ye(ei[s],r);break;case"source":Ye("error",r);break;case"img":case"image":case"link":Ye("error",r),Ye("load",r);break;case"details":Ye("toggle",r);break;case"input":v(r,l),Ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Ye("invalid",r);break;case"textarea":C(r,l),Ye("invalid",r)}nt(n,l),s=null;for(var g in l)if(l.hasOwnProperty(g)){var E=l[g];g==="children"?typeof E=="string"?r.textContent!==E&&(l.suppressHydrationWarning!==!0&&Zi(r.textContent,E,e),s=["children",E]):typeof E=="number"&&r.textContent!==""+E&&(l.suppressHydrationWarning!==!0&&Zi(r.textContent,E,e),s=["children",""+E]):_.hasOwnProperty(g)&&E!=null&&g==="onScroll"&&Ye("scroll",r)}switch(n){case"input":T(r),w(r,l,!0);break;case"textarea":T(r),V(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Qi)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{g=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Q(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=g.createElement(n,{is:r.is}):(e=g.createElement(n),n==="select"&&(g=e,r.multiple?g.multiple=!0:r.size&&(g.size=r.size))):e=g.createElementNS(e,n),e[pn]=t,e[ri]=r,lc(e,t,!1,!1),t.stateNode=e;e:{switch(g=ut(n,r),n){case"dialog":Ye("cancel",e),Ye("close",e),s=r;break;case"iframe":case"object":case"embed":Ye("load",e),s=r;break;case"video":case"audio":for(s=0;s<ei.length;s++)Ye(ei[s],e);s=r;break;case"source":Ye("error",e),s=r;break;case"img":case"image":case"link":Ye("error",e),Ye("load",e),s=r;break;case"details":Ye("toggle",e),s=r;break;case"input":v(e,r),s=a(e,r),Ye("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=se({},r,{value:void 0}),Ye("invalid",e);break;case"textarea":C(e,r),s=x(e,r),Ye("invalid",e);break;default:s=r}nt(n,s),E=s;for(l in E)if(E.hasOwnProperty(l)){var U=E[l];l==="style"?Qe(e,U):l==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,U!=null&&Pe(e,U)):l==="children"?typeof U=="string"?(n!=="textarea"||U!=="")&&fe(e,U):typeof U=="number"&&fe(e,""+U):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_.hasOwnProperty(l)?U!=null&&l==="onScroll"&&Ye("scroll",e):U!=null&&le(e,l,U,g))}switch(n){case"input":T(e),w(e,r,!1);break;case"textarea":T(e),V(e);break;case"option":r.value!=null&&e.setAttribute("value",""+R(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?y(e,!!r.multiple,l,!1):r.defaultValue!=null&&y(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return kt(t),null;case 6:if(e&&t.stateNode!=null)cc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=sr(li.current),sr(mn.current),ns(t)){if(r=t.stateNode,n=t.memoizedProps,r[pn]=t,(l=r.nodeValue!==n)&&(e=$t,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=t,t.stateNode=r}return kt(t),null;case 13:if(Ke(st),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(et&&qt!==null&&t.mode&1&&!(t.flags&128))hu(),Pr(),t.flags|=98560,l=!1;else if(l=ns(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[pn]=t}else Pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;kt(t),l=!1}else rn!==null&&(ya(rn),rn=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||st.current&1?yt===0&&(yt=3):Sa())),t.updateQueue!==null&&(t.flags|=4),kt(t),null);case 4:return Ur(),aa(e,t),e===null&&ti(t.stateNode.containerInfo),kt(t),null;case 10:return Do(t.type._context),kt(t),null;case 17:return Nt(t.type)&&Yi(),kt(t),null;case 19:if(Ke(st),l=t.memoizedState,l===null)return kt(t),null;if(r=(t.flags&128)!==0,g=l.rendering,g===null)if(r)hi(l,!1);else{if(yt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(g=ls(e),g!==null){for(t.flags|=128,hi(l,!1),r=g.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,g=l.alternate,g===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=g.childLanes,l.lanes=g.lanes,l.child=g.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=g.memoizedProps,l.memoizedState=g.memoizedState,l.updateQueue=g.updateQueue,l.type=g.type,e=g.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Xe(st,st.current&1|2),t.child}e=e.sibling}l.tail!==null&&ct()>Dr&&(t.flags|=128,r=!0,hi(l,!1),t.lanes=4194304)}else{if(!r)if(e=ls(g),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!g.alternate&&!et)return kt(t),null}else 2*ct()-l.renderingStartTime>Dr&&n!==1073741824&&(t.flags|=128,r=!0,hi(l,!1),t.lanes=4194304);l.isBackwards?(g.sibling=t.child,t.child=g):(n=l.last,n!==null?n.sibling=g:t.child=g,l.last=g)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ct(),t.sibling=null,n=st.current,Xe(st,r?n&1|2:n&1),t):(kt(t),null);case 22:case 23:return wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?jt&1073741824&&(kt(t),t.subtreeFlags&6&&(t.flags|=8192)):kt(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function Jf(e,t){switch(Lo(t),t.tag){case 1:return Nt(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ur(),Ke(bt),Ke(Ut),Ho(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fo(t),null;case 13:if(Ke(st),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ke(st),null;case 4:return Ur(),null;case 10:return Do(t.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var vs=!1,It=!1,eh=typeof WeakSet=="function"?WeakSet:Set,he=null;function kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){at(e,t,r)}else n.current=null}function la(e,t,n){try{n()}catch(r){at(e,t,r)}}var dc=!1;function th(e,t){if(wo=bi,e=Vl(),fo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var g=0,E=-1,U=-1,$=0,re=0,ie=e,ne=null;t:for(;;){for(var ue;ie!==n||s!==0&&ie.nodeType!==3||(E=g+s),ie!==l||r!==0&&ie.nodeType!==3||(U=g+r),ie.nodeType===3&&(g+=ie.nodeValue.length),(ue=ie.firstChild)!==null;)ne=ie,ie=ue;for(;;){if(ie===e)break t;if(ne===n&&++$===s&&(E=g),ne===l&&++re===r&&(U=g),(ue=ie.nextSibling)!==null)break;ie=ne,ne=ie.parentNode}ie=ue}n=E===-1||U===-1?null:{start:E,end:U}}else n=null}n=n||{start:0,end:0}}else n=null;for(So={focusedElem:e,selectionRange:n},bi=!1,he=t;he!==null;)if(t=he,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,he=e;else for(;he!==null;){t=he;try{var ge=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ye=ge.memoizedProps,dt=ge.memoizedState,b=t.stateNode,D=b.getSnapshotBeforeUpdate(t.elementType===t.type?ye:sn(t.type,ye),dt);b.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(ae){at(t,t.return,ae)}if(e=t.sibling,e!==null){e.return=t.return,he=e;break}he=t.return}return ge=dc,dc=!1,ge}function pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&la(t,n,l)}s=s.next}while(s!==r)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fc(e){var t=e.alternate;t!==null&&(e.alternate=null,fc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pn],delete t[ri],delete t[Eo],delete t[bf],delete t[Nf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hc(e){return e.tag===5||e.tag===3||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qi));else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}function da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(da(e,t,n),e=e.sibling;e!==null;)da(e,t,n),e=e.sibling}var Pt=null,on=!1;function qn(e,t,n){for(n=n.child;n!==null;)mc(e,t,n),n=n.sibling}function mc(e,t,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Ui,n)}catch{}switch(n.tag){case 5:It||kr(n,t);case 6:var r=Pt,s=on;Pt=null,qn(e,t,n),Pt=r,on=s,Pt!==null&&(on?(e=Pt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(on?(e=Pt,n=n.stateNode,e.nodeType===8?Ro(e.parentNode,n):e.nodeType===1&&Ro(e,n),jr(e)):Ro(Pt,n.stateNode));break;case 4:r=Pt,s=on,Pt=n.stateNode.containerInfo,on=!0,qn(e,t,n),Pt=r,on=s;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,g=l.destroy;l=l.tag,g!==void 0&&(l&2||l&4)&&la(n,t,g),s=s.next}while(s!==r)}qn(e,t,n);break;case 1:if(!It&&(kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(E){at(n,t,E)}qn(e,t,n);break;case 21:qn(e,t,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,qn(e,t,n),It=r):qn(e,t,n);break;default:qn(e,t,n)}}function gc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new eh),t.forEach(function(r){var s=ch.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function an(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var l=e,g=t,E=g;e:for(;E!==null;){switch(E.tag){case 5:Pt=E.stateNode,on=!1;break e;case 3:Pt=E.stateNode.containerInfo,on=!0;break e;case 4:Pt=E.stateNode.containerInfo,on=!0;break e}E=E.return}if(Pt===null)throw Error(u(160));mc(l,g,s),Pt=null,on=!1;var U=s.alternate;U!==null&&(U.return=null),s.return=null}catch($){at(s,t,$)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(an(t,e),vn(e),r&4){try{pi(3,e,e.return),ys(3,e)}catch(ye){at(e,e.return,ye)}try{pi(5,e,e.return)}catch(ye){at(e,e.return,ye)}}break;case 1:an(t,e),vn(e),r&512&&n!==null&&kr(n,n.return);break;case 5:if(an(t,e),vn(e),r&512&&n!==null&&kr(n,n.return),e.flags&32){var s=e.stateNode;try{fe(s,"")}catch(ye){at(e,e.return,ye)}}if(r&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,g=n!==null?n.memoizedProps:l,E=e.type,U=e.updateQueue;if(e.updateQueue=null,U!==null)try{E==="input"&&l.type==="radio"&&l.name!=null&&c(s,l),ut(E,g);var $=ut(E,l);for(g=0;g<U.length;g+=2){var re=U[g],ie=U[g+1];re==="style"?Qe(s,ie):re==="dangerouslySetInnerHTML"?Pe(s,ie):re==="children"?fe(s,ie):le(s,re,ie,$)}switch(E){case"input":h(s,l);break;case"textarea":I(s,l);break;case"select":var ne=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var ue=l.value;ue!=null?y(s,!!l.multiple,ue,!1):ne!==!!l.multiple&&(l.defaultValue!=null?y(s,!!l.multiple,l.defaultValue,!0):y(s,!!l.multiple,l.multiple?[]:"",!1))}s[ri]=l}catch(ye){at(e,e.return,ye)}}break;case 6:if(an(t,e),vn(e),r&4){if(e.stateNode===null)throw Error(u(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(ye){at(e,e.return,ye)}}break;case 3:if(an(t,e),vn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(ye){at(e,e.return,ye)}break;case 4:an(t,e),vn(e);break;case 13:an(t,e),vn(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(pa=ct())),r&4&&gc(e);break;case 22:if(re=n!==null&&n.memoizedState!==null,e.mode&1?(It=($=It)||re,an(t,e),It=$):an(t,e),vn(e),r&8192){if($=e.memoizedState!==null,(e.stateNode.isHidden=$)&&!re&&e.mode&1)for(he=e,re=e.child;re!==null;){for(ie=he=re;he!==null;){switch(ne=he,ue=ne.child,ne.tag){case 0:case 11:case 14:case 15:pi(4,ne,ne.return);break;case 1:kr(ne,ne.return);var ge=ne.stateNode;if(typeof ge.componentWillUnmount=="function"){r=ne,n=ne.return;try{t=r,ge.props=t.memoizedProps,ge.state=t.memoizedState,ge.componentWillUnmount()}catch(ye){at(r,n,ye)}}break;case 5:kr(ne,ne.return);break;case 22:if(ne.memoizedState!==null){wc(ie);continue}}ue!==null?(ue.return=ne,he=ue):wc(ie)}re=re.sibling}e:for(re=null,ie=e;;){if(ie.tag===5){if(re===null){re=ie;try{s=ie.stateNode,$?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(E=ie.stateNode,U=ie.memoizedProps.style,g=U!=null&&U.hasOwnProperty("display")?U.display:null,E.style.display=Be("display",g))}catch(ye){at(e,e.return,ye)}}}else if(ie.tag===6){if(re===null)try{ie.stateNode.nodeValue=$?"":ie.memoizedProps}catch(ye){at(e,e.return,ye)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===e)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===e)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===e)break e;re===ie&&(re=null),ie=ie.return}re===ie&&(re=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:an(t,e),vn(e),r&4&&gc(e);break;case 21:break;default:an(t,e),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hc(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(fe(s,""),r.flags&=-33);var l=pc(e);da(e,l,s);break;case 3:case 4:var g=r.stateNode.containerInfo,E=pc(e);ca(e,E,g);break;default:throw Error(u(161))}}catch(U){at(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nh(e,t,n){he=e,yc(e)}function yc(e,t,n){for(var r=(e.mode&1)!==0;he!==null;){var s=he,l=s.child;if(s.tag===22&&r){var g=s.memoizedState!==null||vs;if(!g){var E=s.alternate,U=E!==null&&E.memoizedState!==null||It;E=vs;var $=It;if(vs=g,(It=U)&&!$)for(he=s;he!==null;)g=he,U=g.child,g.tag===22&&g.memoizedState!==null?Sc(s):U!==null?(U.return=g,he=U):Sc(s);for(;l!==null;)he=l,yc(l),l=l.sibling;he=s,vs=E,It=$}_c(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,he=l):_c(e)}}function _c(e){for(;he!==null;){var t=he;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:It||ys(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!It)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:sn(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&wu(t,l,r);break;case 3:var g=t.updateQueue;if(g!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wu(t,g,n)}break;case 5:var E=t.stateNode;if(n===null&&t.flags&4){n=E;var U=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":U.autoFocus&&n.focus();break;case"img":U.src&&(n.src=U.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var $=t.alternate;if($!==null){var re=$.memoizedState;if(re!==null){var ie=re.dehydrated;ie!==null&&jr(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}It||t.flags&512&&ua(t)}catch(ne){at(t,t.return,ne)}}if(t===e){he=null;break}if(n=t.sibling,n!==null){n.return=t.return,he=n;break}he=t.return}}function wc(e){for(;he!==null;){var t=he;if(t===e){he=null;break}var n=t.sibling;if(n!==null){n.return=t.return,he=n;break}he=t.return}}function Sc(e){for(;he!==null;){var t=he;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ys(4,t)}catch(U){at(t,n,U)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(U){at(t,s,U)}}var l=t.return;try{ua(t)}catch(U){at(t,l,U)}break;case 5:var g=t.return;try{ua(t)}catch(U){at(t,g,U)}}}catch(U){at(t,t.return,U)}if(t===e){he=null;break}var E=t.sibling;if(E!==null){E.return=t.return,he=E;break}he=t.return}}var rh=Math.ceil,_s=de.ReactCurrentDispatcher,fa=de.ReactCurrentOwner,Jt=de.ReactCurrentBatchConfig,Ve=0,Rt=null,mt=null,At=0,jt=0,Ir=Fn(0),yt=0,mi=null,ar=0,ws=0,ha=0,gi=null,Ft=null,pa=0,Dr=1/0,zn=null,Ss=!1,ma=null,jn=null,xs=!1,Wn=null,Ts=0,vi=0,ga=null,Rs=-1,Es=0;function Ot(){return Ve&6?ct():Rs!==-1?Rs:Rs=ct()}function Zn(e){return e.mode&1?Ve&2&&At!==0?At&-At:Ff.transition!==null?(Es===0&&(Es=pl()),Es):(e=je,e!==0||(e=window.event,e=e===void 0?16:Tl(e.type)),e):1}function ln(e,t,n,r){if(50<vi)throw vi=0,ga=null,Error(u(185));Gr(e,n,r),(!(Ve&2)||e!==Rt)&&(e===Rt&&(!(Ve&2)&&(ws|=n),yt===4&&Qn(e,At)),Gt(e,r),n===1&&Ve===0&&!(t.mode&1)&&(Dr=ct()+500,Ji&&Hn()))}function Gt(e,t){var n=e.callbackNode;Bd(e,t);var r=Ii(e,e===Rt?At:0);if(r===0)n!==null&&dl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dl(n),t===1)e.tag===0?Bf(Tc.bind(null,e)):lu(Tc.bind(null,e)),Df(function(){!(Ve&6)&&Hn()}),n=null;else{switch(ml(r)){case 1:n=Zs;break;case 4:n=fl;break;case 16:n=zi;break;case 536870912:n=hl;break;default:n=zi}n=Uc(n,xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xc(e,t){if(Rs=-1,Es=0,Ve&6)throw Error(u(327));var n=e.callbackNode;if(Or()&&e.callbackNode!==n)return null;var r=Ii(e,e===Rt?At:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ms(e,r);else{t=r;var s=Ve;Ve|=2;var l=Ec();(Rt!==e||At!==t)&&(zn=null,Dr=ct()+500,ur(e,t));do try{oh();break}catch(E){Rc(e,E)}while(!0);Io(),_s.current=l,Ve=s,mt!==null?t=0:(Rt=null,At=0,t=yt)}if(t!==0){if(t===2&&(s=Qs(e),s!==0&&(r=s,t=va(e,s))),t===1)throw n=mi,ur(e,0),Qn(e,r),Gt(e,ct()),n;if(t===6)Qn(e,r);else{if(s=e.current.alternate,!(r&30)&&!ih(s)&&(t=Ms(e,r),t===2&&(l=Qs(e),l!==0&&(r=l,t=va(e,l))),t===1))throw n=mi,ur(e,0),Qn(e,r),Gt(e,ct()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:cr(e,Ft,zn);break;case 3:if(Qn(e,r),(r&130023424)===r&&(t=pa+500-ct(),10<t)){if(Ii(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Ot(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=To(cr.bind(null,e,Ft,zn),t);break}cr(e,Ft,zn);break;case 4:if(Qn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var g=31-tn(r);l=1<<g,g=t[g],g>s&&(s=g),r&=~l}if(r=s,r=ct()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rh(r/1960))-r,10<r){e.timeoutHandle=To(cr.bind(null,e,Ft,zn),r);break}cr(e,Ft,zn);break;case 5:cr(e,Ft,zn);break;default:throw Error(u(329))}}}return Gt(e,ct()),e.callbackNode===n?xc.bind(null,e):null}function va(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(ur(e,t).flags|=256),e=Ms(e,t),e!==2&&(t=Ft,Ft=n,t!==null&&ya(t)),e}function ya(e){Ft===null?Ft=e:Ft.push.apply(Ft,e)}function ih(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],l=s.getSnapshot;s=s.value;try{if(!nn(l(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t){for(t&=~ha,t&=~ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tn(t),r=1<<n;e[n]=-1,t&=~r}}function Tc(e){if(Ve&6)throw Error(u(327));Or();var t=Ii(e,0);if(!(t&1))return Gt(e,ct()),null;var n=Ms(e,t);if(e.tag!==0&&n===2){var r=Qs(e);r!==0&&(t=r,n=va(e,r))}if(n===1)throw n=mi,ur(e,0),Qn(e,t),Gt(e,ct()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cr(e,Ft,zn),Gt(e,ct()),null}function _a(e,t){var n=Ve;Ve|=1;try{return e(t)}finally{Ve=n,Ve===0&&(Dr=ct()+500,Ji&&Hn())}}function lr(e){Wn!==null&&Wn.tag===0&&!(Ve&6)&&Or();var t=Ve;Ve|=1;var n=Jt.transition,r=je;try{if(Jt.transition=null,je=1,e)return e()}finally{je=r,Jt.transition=n,Ve=t,!(Ve&6)&&Hn()}}function wa(){jt=Ir.current,Ke(Ir)}function ur(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,If(n)),mt!==null)for(n=mt.return;n!==null;){var r=n;switch(Lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:Ur(),Ke(bt),Ke(Ut),Ho();break;case 5:Fo(r);break;case 4:Ur();break;case 13:Ke(st);break;case 19:Ke(st);break;case 10:Do(r.type._context);break;case 22:case 23:wa()}n=n.return}if(Rt=e,mt=e=Xn(e.current,null),At=jt=t,yt=0,mi=null,ha=ws=ar=0,Ft=gi=null,ir!==null){for(t=0;t<ir.length;t++)if(n=ir[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,l=n.pending;if(l!==null){var g=l.next;l.next=s,r.next=g}n.pending=r}ir=null}return e}function Rc(e,t){do{var n=mt;try{if(Io(),us.current=hs,cs){for(var r=ot.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}cs=!1}if(or=0,Tt=vt=ot=null,ui=!1,ci=0,fa.current=null,n===null||n.return===null){yt=1,mi=t,mt=null;break}e:{var l=e,g=n.return,E=n,U=t;if(t=At,E.flags|=32768,U!==null&&typeof U=="object"&&typeof U.then=="function"){var $=U,re=E,ie=re.tag;if(!(re.mode&1)&&(ie===0||ie===11||ie===15)){var ne=re.alternate;ne?(re.updateQueue=ne.updateQueue,re.memoizedState=ne.memoizedState,re.lanes=ne.lanes):(re.updateQueue=null,re.memoizedState=null)}var ue=Qu(g);if(ue!==null){ue.flags&=-257,Xu(ue,g,E,l,t),ue.mode&1&&Zu(l,$,t),t=ue,U=$;var ge=t.updateQueue;if(ge===null){var ye=new Set;ye.add(U),t.updateQueue=ye}else ge.add(U);break e}else{if(!(t&1)){Zu(l,$,t),Sa();break e}U=Error(u(426))}}else if(et&&E.mode&1){var dt=Qu(g);if(dt!==null){!(dt.flags&65536)&&(dt.flags|=256),Xu(dt,g,E,l,t),Co(Cr(U,E));break e}}l=U=Cr(U,E),yt!==4&&(yt=2),gi===null?gi=[l]:gi.push(l),l=g;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var b=ju(l,U,t);_u(l,b);break e;case 1:E=U;var D=l.type,N=l.stateNode;if(!(l.flags&128)&&(typeof D.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(jn===null||!jn.has(N)))){l.flags|=65536,t&=-t,l.lanes|=t;var ae=Wu(l,E,t);_u(l,ae);break e}}l=l.return}while(l!==null)}Pc(n)}catch(_e){t=_e,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(!0)}function Ec(){var e=_s.current;return _s.current=hs,e===null?hs:e}function Sa(){(yt===0||yt===3||yt===2)&&(yt=4),Rt===null||!(ar&268435455)&&!(ws&268435455)||Qn(Rt,At)}function Ms(e,t){var n=Ve;Ve|=2;var r=Ec();(Rt!==e||At!==t)&&(zn=null,ur(e,t));do try{sh();break}catch(s){Rc(e,s)}while(!0);if(Io(),Ve=n,_s.current=r,mt!==null)throw Error(u(261));return Rt=null,At=0,yt}function sh(){for(;mt!==null;)Mc(mt)}function oh(){for(;mt!==null&&!zd();)Mc(mt)}function Mc(e){var t=zc(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?Pc(e):mt=t,fa.current=null}function Pc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jf(n,t),n!==null){n.flags&=32767,mt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yt=6,mt=null;return}}else if(n=Kf(n,t,jt),n!==null){mt=n;return}if(t=t.sibling,t!==null){mt=t;return}mt=t=e}while(t!==null);yt===0&&(yt=5)}function cr(e,t,n){var r=je,s=Jt.transition;try{Jt.transition=null,je=1,ah(e,t,n,r)}finally{Jt.transition=s,je=r}return null}function ah(e,t,n,r){do Or();while(Wn!==null);if(Ve&6)throw Error(u(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Fd(e,l),e===Rt&&(mt=Rt=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xs||(xs=!0,Uc(zi,function(){return Or(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Jt.transition,Jt.transition=null;var g=je;je=1;var E=Ve;Ve|=4,fa.current=null,th(e,n),vc(n,e),Pf(So),bi=!!wo,So=wo=null,e.current=n,nh(n),Ud(),Ve=E,je=g,Jt.transition=l}else e.current=n;if(xs&&(xs=!1,Wn=e,Ts=s),l=e.pendingLanes,l===0&&(jn=null),Id(n.stateNode),Gt(e,ct()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ss)throw Ss=!1,e=ma,ma=null,e;return Ts&1&&e.tag!==0&&Or(),l=e.pendingLanes,l&1?e===ga?vi++:(vi=0,ga=e):vi=0,Hn(),null}function Or(){if(Wn!==null){var e=ml(Ts),t=Jt.transition,n=je;try{if(Jt.transition=null,je=16>e?16:e,Wn===null)var r=!1;else{if(e=Wn,Wn=null,Ts=0,Ve&6)throw Error(u(331));var s=Ve;for(Ve|=4,he=e.current;he!==null;){var l=he,g=l.child;if(he.flags&16){var E=l.deletions;if(E!==null){for(var U=0;U<E.length;U++){var $=E[U];for(he=$;he!==null;){var re=he;switch(re.tag){case 0:case 11:case 15:pi(8,re,l)}var ie=re.child;if(ie!==null)ie.return=re,he=ie;else for(;he!==null;){re=he;var ne=re.sibling,ue=re.return;if(fc(re),re===$){he=null;break}if(ne!==null){ne.return=ue,he=ne;break}he=ue}}}var ge=l.alternate;if(ge!==null){var ye=ge.child;if(ye!==null){ge.child=null;do{var dt=ye.sibling;ye.sibling=null,ye=dt}while(ye!==null)}}he=l}}if(l.subtreeFlags&2064&&g!==null)g.return=l,he=g;else e:for(;he!==null;){if(l=he,l.flags&2048)switch(l.tag){case 0:case 11:case 15:pi(9,l,l.return)}var b=l.sibling;if(b!==null){b.return=l.return,he=b;break e}he=l.return}}var D=e.current;for(he=D;he!==null;){g=he;var N=g.child;if(g.subtreeFlags&2064&&N!==null)N.return=g,he=N;else e:for(g=D;he!==null;){if(E=he,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:ys(9,E)}}catch(_e){at(E,E.return,_e)}if(E===g){he=null;break e}var ae=E.sibling;if(ae!==null){ae.return=E.return,he=ae;break e}he=E.return}}if(Ve=s,Hn(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Ui,e)}catch{}r=!0}return r}finally{je=n,Jt.transition=t}}return!1}function Ac(e,t,n){t=Cr(n,t),t=ju(e,t,1),e=$n(e,t,1),t=Ot(),e!==null&&(Gr(e,1,t),Gt(e,t))}function at(e,t,n){if(e.tag===3)Ac(e,e,n);else for(;t!==null;){if(t.tag===3){Ac(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=Cr(n,e),e=Wu(t,e,1),t=$n(t,e,1),e=Ot(),t!==null&&(Gr(t,1,e),Gt(t,e));break}}t=t.return}}function lh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ot(),e.pingedLanes|=e.suspendedLanes&n,Rt===e&&(At&n)===n&&(yt===4||yt===3&&(At&130023424)===At&&500>ct()-pa?ur(e,0):ha|=n),Gt(e,t)}function Lc(e,t){t===0&&(e.mode&1?(t=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):t=1);var n=Ot();e=Pn(e,t),e!==null&&(Gr(e,t,n),Gt(e,n))}function uh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lc(e,n)}function ch(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Lc(e,n)}var zc;zc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||bt.current)Bt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Bt=!1,Yf(e,t,n);Bt=!!(e.flags&131072)}else Bt=!1,et&&t.flags&1048576&&uu(t,ts,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gs(e,t),e=t.pendingProps;var s=Rr(t,Ut.current);zr(t,n),s=qo(null,t,r,e,s,n);var l=jo();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Nt(r)?(l=!0,Ki(t)):l=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,No(t),s.updater=ps,t.stateNode=s,s._reactInternals=t,Ko(t,r,e,n),t=na(null,t,r,!0,l,n)):(t.tag=0,et&&l&&Ao(t),Dt(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gs(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=fh(r),e=sn(r,e),s){case 0:t=ta(null,t,r,e,n);break e;case 1:t=nc(null,t,r,e,n);break e;case 11:t=Yu(null,t,r,e,n);break e;case 14:t=Ku(null,t,r,sn(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:sn(r,s),ta(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:sn(r,s),nc(e,t,r,s,n);case 3:e:{if(rc(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,s=l.element,yu(e,t),as(t,r,null,n);var g=t.memoizedState;if(r=g.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){s=Cr(Error(u(423)),t),t=ic(e,t,r,n,s);break e}else if(r!==s){s=Cr(Error(u(424)),t),t=ic(e,t,r,n,s);break e}else for(qt=Bn(t.stateNode.containerInfo.firstChild),$t=t,et=!0,rn=null,n=gu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pr(),r===s){t=Ln(e,t,n);break e}Dt(e,t,r,n)}t=t.child}return t;case 5:return Su(t),e===null&&Uo(t),r=t.type,s=t.pendingProps,l=e!==null?e.memoizedProps:null,g=s.children,xo(r,s)?g=null:l!==null&&xo(r,l)&&(t.flags|=32),tc(e,t),Dt(e,t,g,n),t.child;case 6:return e===null&&Uo(t),null;case 13:return sc(e,t,n);case 4:return Bo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):Dt(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:sn(r,s),Yu(e,t,r,s,n);case 7:return Dt(e,t,t.pendingProps,n),t.child;case 8:return Dt(e,t,t.pendingProps.children,n),t.child;case 12:return Dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,l=t.memoizedProps,g=s.value,Xe(is,r._currentValue),r._currentValue=g,l!==null)if(nn(l.value,g)){if(l.children===s.children&&!bt.current){t=Ln(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var E=l.dependencies;if(E!==null){g=l.child;for(var U=E.firstContext;U!==null;){if(U.context===r){if(l.tag===1){U=An(-1,n&-n),U.tag=2;var $=l.updateQueue;if($!==null){$=$.shared;var re=$.pending;re===null?U.next=U:(U.next=re.next,re.next=U),$.pending=U}}l.lanes|=n,U=l.alternate,U!==null&&(U.lanes|=n),Oo(l.return,n,t),E.lanes|=n;break}U=U.next}}else if(l.tag===10)g=l.type===t.type?null:l.child;else if(l.tag===18){if(g=l.return,g===null)throw Error(u(341));g.lanes|=n,E=g.alternate,E!==null&&(E.lanes|=n),Oo(g,n,t),g=l.sibling}else g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}Dt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,zr(t,n),s=Yt(s),r=r(s),t.flags|=1,Dt(e,t,r,n),t.child;case 14:return r=t.type,s=sn(r,t.pendingProps),s=sn(r.type,s),Ku(e,t,r,s,n);case 15:return Ju(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:sn(r,s),gs(e,t),t.tag=1,Nt(r)?(e=!0,Ki(t)):e=!1,zr(t,n),$u(t,r,s),Ko(t,r,s,n),na(null,t,r,!0,e,n);case 19:return ac(e,t,n);case 22:return ec(e,t,n)}throw Error(u(156,t.tag))};function Uc(e,t){return cl(e,t)}function dh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,t,n,r){return new dh(e,t,n,r)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fh(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Me)return 11;if(e===We)return 14}return 2}function Xn(e,t){var n=e.alternate;return n===null?(n=en(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ps(e,t,n,r,s,l){var g=2;if(r=e,typeof e=="function")xa(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case Ie:return dr(n.children,s,l,t);case Ne:g=8,s|=8;break;case Oe:return e=en(12,n,t,s|2),e.elementType=Oe,e.lanes=l,e;case Le:return e=en(13,n,t,s),e.elementType=Le,e.lanes=l,e;case Te:return e=en(19,n,t,s),e.elementType=Te,e.lanes=l,e;case He:return As(n,s,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fe:g=10;break e;case Ze:g=9;break e;case Me:g=11;break e;case We:g=14;break e;case $e:g=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=en(g,n,t,s),t.elementType=e,t.type=r,t.lanes=l,t}function dr(e,t,n,r){return e=en(7,e,r,t),e.lanes=n,e}function As(e,t,n,r){return e=en(22,e,r,t),e.elementType=He,e.lanes=n,e.stateNode={isHidden:!1},e}function Ta(e,t,n){return e=en(6,e,null,t),e.lanes=n,e}function Ra(e,t,n){return t=en(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hh(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xs(0),this.expirationTimes=Xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ea(e,t,n,r,s,l,g,E,U){return e=new hh(e,t,n,E,U),t===1?(t=1,l===!0&&(t|=8)):t=0,l=en(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},No(l),e}function ph(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cc(e){if(!e)return Gn;e=e._reactInternals;e:{if(Je(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(Nt(n))return ou(e,n,t)}return t}function kc(e,t,n,r,s,l,g,E,U){return e=Ea(n,r,!0,e,s,l,g,E,U),e.context=Cc(null),n=e.current,r=Ot(),s=Zn(n),l=An(r,s),l.callback=t??null,$n(n,l,s),e.current.lanes=s,Gr(e,s,r),Gt(e,r),e}function Ls(e,t,n,r){var s=t.current,l=Ot(),g=Zn(s);return n=Cc(n),t.context===null?t.context=n:t.pendingContext=n,t=An(l,g),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$n(s,t,g),e!==null&&(ln(e,s,g,l),os(e,s,g)),g}function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ic(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ma(e,t){Ic(e,t),(e=e.alternate)&&Ic(e,t)}var Dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pa(e){this._internalRoot=e}Us.prototype.render=Pa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Ls(e,t,null,null)},Us.prototype.unmount=Pa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){Ls(null,e,null,null)}),t[Tn]=null}};function Us(e){this._internalRoot=e}Us.prototype.unstable_scheduleHydration=function(e){if(e){var t=yl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<On.length&&t!==0&&t<On[n].priority;n++);On.splice(n,0,e),n===0&&Sl(e)}};function Aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oc(){}function mh(e,t,n,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var $=zs(g);l.call($)}}var g=kc(t,r,e,0,null,!1,!1,"",Oc);return e._reactRootContainer=g,e[Tn]=g.current,ti(e.nodeType===8?e.parentNode:e),lr(),g}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var E=r;r=function(){var $=zs(U);E.call($)}}var U=Ea(e,0,!1,null,null,!1,!1,"",Oc);return e._reactRootContainer=U,e[Tn]=U.current,ti(e.nodeType===8?e.parentNode:e),lr(function(){Ls(t,U,n,r)}),U}function ks(e,t,n,r,s){var l=n._reactRootContainer;if(l){var g=l;if(typeof s=="function"){var E=s;s=function(){var U=zs(g);E.call(U)}}Ls(t,g,e,s)}else g=mh(n,t,e,s,r);return zs(g)}gl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fr(t.pendingLanes);n!==0&&(Ys(t,n|1),Gt(t,ct()),!(Ve&6)&&(Dr=ct()+500,Hn()))}break;case 13:lr(function(){var r=Pn(e,1);if(r!==null){var s=Ot();ln(r,e,1,s)}}),Ma(e,1)}},Ks=function(e){if(e.tag===13){var t=Pn(e,134217728);if(t!==null){var n=Ot();ln(t,e,134217728,n)}Ma(e,134217728)}},vl=function(e){if(e.tag===13){var t=Zn(e),n=Pn(e,t);if(n!==null){var r=Ot();ln(n,e,t,r)}Ma(e,t)}},yl=function(){return je},_l=function(e,t){var n=je;try{return je=e,t()}finally{je=n}},pt=function(e,t,n){switch(t){case"input":if(h(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Xi(r);if(!s)throw Error(u(90));A(r),h(r,s)}}}break;case"textarea":I(e,n);break;case"select":t=n.value,t!=null&&y(e,!!n.multiple,t,!1)}},xt=_a,Lt=lr;var gh={usingClientEntryPoint:!1,Events:[ii,xr,Xi,wt,St,_a]},yi={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vh={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ll(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Is.isDisabled&&Is.supportsFiber)try{Ui=Is.inject(vh),hn=Is}catch{}}return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gh,Ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Aa(t))throw Error(u(200));return ph(e,t,null,n)},Ht.createRoot=function(e,t){if(!Aa(e))throw Error(u(299));var n=!1,r="",s=Dc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ea(e,1,!1,null,null,n,!1,r,s),e[Tn]=t.current,ti(e.nodeType===8?e.parentNode:e),new Pa(t)},Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=ll(t),e=e===null?null:e.stateNode,e},Ht.flushSync=function(e){return lr(e)},Ht.hydrate=function(e,t,n){if(!Cs(t))throw Error(u(200));return ks(null,e,t,!0,n)},Ht.hydrateRoot=function(e,t,n){if(!Aa(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,s=!1,l="",g=Dc;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),t=kc(t,null,e,1,n??null,s,!1,l,g),e[Tn]=t.current,ti(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Us(t)},Ht.render=function(e,t,n){if(!Cs(t))throw Error(u(200));return ks(null,e,t,!1,n)},Ht.unmountComponentAtNode=function(e){if(!Cs(e))throw Error(u(40));return e._reactRootContainer?(lr(function(){ks(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1},Ht.unstable_batchedUpdates=_a,Ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cs(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return ks(e,t,n,!1,r)},Ht.version="18.3.1-next-f1338f8080-20240426",Ht}var $c;function Ph(){if($c)return Ua.exports;$c=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),Ua.exports=Mh(),Ua.exports}var qc;function Ah(){if(qc)return Ds;qc=1;var i=Ph();return Ds.createRoot=i.createRoot,Ds.hydrateRoot=i.hydrateRoot,Ds}var Lh=Ah(),wi={},jc;function zh(){if(jc)return wi;jc=1,Object.defineProperty(wi,"__esModule",{value:!0}),wi.parse=M,wi.serialize=z;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,m=/^[\u0020-\u003A\u003D-\u007E]*$/,_=Object.prototype.toString,S=(()=>{const B=function(){};return B.prototype=Object.create(null),B})();function M(B,te){const W=new S,Y=B.length;if(Y<2)return W;const ee=(te==null?void 0:te.decode)||F;let q=0;do{const X=B.indexOf("=",q);if(X===-1)break;const le=B.indexOf(";",q),de=le===-1?Y:le;if(X>de){q=B.lastIndexOf(";",X-1)+1;continue}const xe=L(B,q,X),ke=P(B,X,xe),Ie=B.slice(xe,ke);if(W[Ie]===void 0){let Ne=L(B,X+1,de),Oe=P(B,de,Ne);const Fe=ee(B.slice(Ne,Oe));W[Ie]=Fe}q=de+1}while(q<Y);return W}function L(B,te,W){do{const Y=B.charCodeAt(te);if(Y!==32&&Y!==9)return te}while(++te<W);return W}function P(B,te,W){for(;te>W;){const Y=B.charCodeAt(--te);if(Y!==32&&Y!==9)return te+1}return W}function z(B,te,W){const Y=(W==null?void 0:W.encode)||encodeURIComponent;if(!i.test(B))throw new TypeError(`argument name is invalid: ${B}`);const ee=Y(te);if(!o.test(ee))throw new TypeError(`argument val is invalid: ${te}`);let q=B+"="+ee;if(!W)return q;if(W.maxAge!==void 0){if(!Number.isInteger(W.maxAge))throw new TypeError(`option maxAge is invalid: ${W.maxAge}`);q+="; Max-Age="+W.maxAge}if(W.domain){if(!u.test(W.domain))throw new TypeError(`option domain is invalid: ${W.domain}`);q+="; Domain="+W.domain}if(W.path){if(!m.test(W.path))throw new TypeError(`option path is invalid: ${W.path}`);q+="; Path="+W.path}if(W.expires){if(!j(W.expires)||!Number.isFinite(W.expires.valueOf()))throw new TypeError(`option expires is invalid: ${W.expires}`);q+="; Expires="+W.expires.toUTCString()}if(W.httpOnly&&(q+="; HttpOnly"),W.secure&&(q+="; Secure"),W.partitioned&&(q+="; Partitioned"),W.priority)switch(typeof W.priority=="string"?W.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${W.priority}`)}if(W.sameSite)switch(typeof W.sameSite=="string"?W.sameSite.toLowerCase():W.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${W.sameSite}`)}return q}function F(B){if(B.indexOf("%")===-1)return B;try{return decodeURIComponent(B)}catch{return B}}function j(B){return _.call(B)==="[object Date]"}return wi}zh();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Wc="popstate";function Uh(i={}){function o(_,S){let{pathname:M="/",search:L="",hash:P=""}=fr(_.location.hash.substring(1));return!M.startsWith("/")&&!M.startsWith(".")&&(M="/"+M),Fa("",{pathname:M,search:L,hash:P},S.state&&S.state.usr||null,S.state&&S.state.key||"default")}function u(_,S){let M=_.document.querySelector("base"),L="";if(M&&M.getAttribute("href")){let P=_.location.href,z=P.indexOf("#");L=z===-1?P:P.slice(0,z)}return L+"#"+(typeof S=="string"?S:xi(S))}function m(_,S){Zt(_.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(S)})`)}return kh(o,u,m,i)}function tt(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function Zt(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Ch(){return Math.random().toString(36).substring(2,10)}function Zc(i,o){return{usr:i.state,key:i.key,idx:o}}function Fa(i,o,u=null,m){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?fr(o):o,state:u,key:o&&o.key||m||Ch()}}function xi({pathname:i="/",search:o="",hash:u=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function fr(i){let o={};if(i){let u=i.indexOf("#");u>=0&&(o.hash=i.substring(u),i=i.substring(0,u));let m=i.indexOf("?");m>=0&&(o.search=i.substring(m),i=i.substring(0,m)),i&&(o.pathname=i)}return o}function kh(i,o,u,m={}){let{window:_=document.defaultView,v5Compat:S=!1}=m,M=_.history,L="POP",P=null,z=F();z==null&&(z=0,M.replaceState({...M.state,idx:z},""));function F(){return(M.state||{idx:null}).idx}function j(){L="POP";let ee=F(),q=ee==null?null:ee-z;z=ee,P&&P({action:L,location:Y.location,delta:q})}function B(ee,q){L="PUSH";let X=Fa(Y.location,ee,q);u(X,ee),z=F()+1;let le=Zc(X,z),de=Y.createHref(X);try{M.pushState(le,"",de)}catch(xe){if(xe instanceof DOMException&&xe.name==="DataCloneError")throw xe;_.location.assign(de)}S&&P&&P({action:L,location:Y.location,delta:1})}function te(ee,q){L="REPLACE";let X=Fa(Y.location,ee,q);u(X,ee),z=F();let le=Zc(X,z),de=Y.createHref(X);M.replaceState(le,"",de),S&&P&&P({action:L,location:Y.location,delta:0})}function W(ee){let q=_.location.origin!=="null"?_.location.origin:_.location.href,X=typeof ee=="string"?ee:xi(ee);return X=X.replace(/ $/,"%20"),tt(q,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,q)}let Y={get action(){return L},get location(){return i(_,M)},listen(ee){if(P)throw new Error("A history only accepts one active listener");return _.addEventListener(Wc,j),P=ee,()=>{_.removeEventListener(Wc,j),P=null}},createHref(ee){return o(_,ee)},createURL:W,encodeLocation(ee){let q=W(ee);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:B,replace:te,go(ee){return M.go(ee)}};return Y}function fd(i,o,u="/"){return Ih(i,o,u,!1)}function Ih(i,o,u,m){let _=typeof o=="string"?fr(o):o,S=Jn(_.pathname||"/",u);if(S==null)return null;let M=hd(i);Dh(M);let L=null;for(let P=0;L==null&&P<M.length;++P){let z=jh(S);L=$h(M[P],z,m)}return L}function hd(i,o=[],u=[],m=""){let _=(S,M,L)=>{let P={relativePath:L===void 0?S.path||"":L,caseSensitive:S.caseSensitive===!0,childrenIndex:M,route:S};P.relativePath.startsWith("/")&&(tt(P.relativePath.startsWith(m),`Absolute route path "${P.relativePath}" nested under path "${m}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),P.relativePath=P.relativePath.slice(m.length));let z=Un([m,P.relativePath]),F=u.concat(P);S.children&&S.children.length>0&&(tt(S.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${z}".`),hd(S.children,o,F,z)),!(S.path==null&&!S.index)&&o.push({path:z,score:Hh(z,S.index),routesMeta:F})};return i.forEach((S,M)=>{var L;if(S.path===""||!((L=S.path)!=null&&L.includes("?")))_(S,M);else for(let P of pd(S.path))_(S,M,P)}),o}function pd(i){let o=i.split("/");if(o.length===0)return[];let[u,...m]=o,_=u.endsWith("?"),S=u.replace(/\?$/,"");if(m.length===0)return _?[S,""]:[S];let M=pd(m.join("/")),L=[];return L.push(...M.map(P=>P===""?S:[S,P].join("/"))),_&&L.push(...M),L.map(P=>i.startsWith("/")&&P===""?"/":P)}function Dh(i){i.sort((o,u)=>o.score!==u.score?u.score-o.score:Vh(o.routesMeta.map(m=>m.childrenIndex),u.routesMeta.map(m=>m.childrenIndex)))}var Oh=/^:[\w-]+$/,bh=3,Nh=2,Bh=1,Fh=10,Gh=-2,Qc=i=>i==="*";function Hh(i,o){let u=i.split("/"),m=u.length;return u.some(Qc)&&(m+=Gh),o&&(m+=Nh),u.filter(_=>!Qc(_)).reduce((_,S)=>_+(Oh.test(S)?bh:S===""?Bh:Fh),m)}function Vh(i,o){return i.length===o.length&&i.slice(0,-1).every((m,_)=>m===o[_])?i[i.length-1]-o[o.length-1]:0}function $h(i,o,u=!1){let{routesMeta:m}=i,_={},S="/",M=[];for(let L=0;L<m.length;++L){let P=m[L],z=L===m.length-1,F=S==="/"?o:o.slice(S.length)||"/",j=Vs({path:P.relativePath,caseSensitive:P.caseSensitive,end:z},F),B=P.route;if(!j&&z&&u&&!m[m.length-1].route.index&&(j=Vs({path:P.relativePath,caseSensitive:P.caseSensitive,end:!1},F)),!j)return null;Object.assign(_,j.params),M.push({params:_,pathname:Un([S,j.pathname]),pathnameBase:Xh(Un([S,j.pathnameBase])),route:B}),j.pathnameBase!=="/"&&(S=Un([S,j.pathnameBase]))}return M}function Vs(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,m]=qh(i.path,i.caseSensitive,i.end),_=o.match(u);if(!_)return null;let S=_[0],M=S.replace(/(.)\/+$/,"$1"),L=_.slice(1);return{params:m.reduce((z,{paramName:F,isOptional:j},B)=>{if(F==="*"){let W=L[B]||"";M=S.slice(0,S.length-W.length).replace(/(.)\/+$/,"$1")}const te=L[B];return j&&!te?z[F]=void 0:z[F]=(te||"").replace(/%2F/g,"/"),z},{}),pathname:S,pathnameBase:M,pattern:i}}function qh(i,o=!1,u=!0){Zt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let m=[],_="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(M,L,P)=>(m.push({paramName:L,isOptional:P!=null}),P?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(m.push({paramName:"*"}),_+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?_+="\\/*$":i!==""&&i!=="/"&&(_+="(?:(?=\\/|$))"),[new RegExp(_,o?void 0:"i"),m]}function jh(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Zt(!1,`The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function Jn(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,m=i.charAt(u);return m&&m!=="/"?null:i.slice(u)||"/"}function Wh(i,o="/"){let{pathname:u,search:m="",hash:_=""}=typeof i=="string"?fr(i):i;return{pathname:u?u.startsWith("/")?u:Zh(u,o):o,search:Yh(m),hash:Kh(_)}}function Zh(i,o){let u=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(_=>{_===".."?u.length>1&&u.pop():_!=="."&&u.push(_)}),u.length>1?u.join("/"):"/"}function Ia(i,o,u,m){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(m)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qh(i){return i.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function Xa(i){let o=Qh(i);return o.map((u,m)=>m===o.length-1?u.pathname:u.pathnameBase)}function Ya(i,o,u,m=!1){let _;typeof i=="string"?_=fr(i):(_={...i},tt(!_.pathname||!_.pathname.includes("?"),Ia("?","pathname","search",_)),tt(!_.pathname||!_.pathname.includes("#"),Ia("#","pathname","hash",_)),tt(!_.search||!_.search.includes("#"),Ia("#","search","hash",_)));let S=i===""||_.pathname==="",M=S?"/":_.pathname,L;if(M==null)L=u;else{let j=o.length-1;if(!m&&M.startsWith("..")){let B=M.split("/");for(;B[0]==="..";)B.shift(),j-=1;_.pathname=B.join("/")}L=j>=0?o[j]:"/"}let P=Wh(_,L),z=M&&M!=="/"&&M.endsWith("/"),F=(S||M===".")&&u.endsWith("/");return!P.pathname.endsWith("/")&&(z||F)&&(P.pathname+="/"),P}var Un=i=>i.join("/").replace(/\/\/+/g,"/"),Xh=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Yh=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Kh=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Jh(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var md=["POST","PUT","PATCH","DELETE"];new Set(md);var ep=["GET",...md];new Set(ep);var Nr=Z.createContext(null);Nr.displayName="DataRouter";var $s=Z.createContext(null);$s.displayName="DataRouterState";var gd=Z.createContext({isTransitioning:!1});gd.displayName="ViewTransition";var tp=Z.createContext(new Map);tp.displayName="Fetchers";var np=Z.createContext(null);np.displayName="Await";var un=Z.createContext(null);un.displayName="Navigation";var Ri=Z.createContext(null);Ri.displayName="Location";var _n=Z.createContext({outlet:null,matches:[],isDataRoute:!1});_n.displayName="Route";var Ka=Z.createContext(null);Ka.displayName="RouteError";function rp(i,{relative:o}={}){tt(Br(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:m}=Z.useContext(un),{hash:_,pathname:S,search:M}=Mi(i,{relative:o}),L=S;return u!=="/"&&(L=S==="/"?u:Un([u,S])),m.createHref({pathname:L,search:M,hash:_})}function Br(){return Z.useContext(Ri)!=null}function wn(){return tt(Br(),"useLocation() may be used only in the context of a <Router> component."),Z.useContext(Ri).location}var vd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function yd(i){Z.useContext(un).static||Z.useLayoutEffect(i)}function Ei(){let{isDataRoute:i}=Z.useContext(_n);return i?gp():ip()}function ip(){tt(Br(),"useNavigate() may be used only in the context of a <Router> component.");let i=Z.useContext(Nr),{basename:o,navigator:u}=Z.useContext(un),{matches:m}=Z.useContext(_n),{pathname:_}=wn(),S=JSON.stringify(Xa(m)),M=Z.useRef(!1);return yd(()=>{M.current=!0}),Z.useCallback((P,z={})=>{if(Zt(M.current,vd),!M.current)return;if(typeof P=="number"){u.go(P);return}let F=Ya(P,JSON.parse(S),_,z.relative==="path");i==null&&o!=="/"&&(F.pathname=F.pathname==="/"?o:Un([o,F.pathname])),(z.replace?u.replace:u.push)(F,z.state,z)},[o,u,S,_,i])}Z.createContext(null);function Mi(i,{relative:o}={}){let{matches:u}=Z.useContext(_n),{pathname:m}=wn(),_=JSON.stringify(Xa(u));return Z.useMemo(()=>Ya(i,JSON.parse(_),m,o==="path"),[i,_,m,o])}function sp(i,o){return _d(i,o)}function _d(i,o,u,m){var q;tt(Br(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:_}=Z.useContext(un),{matches:S}=Z.useContext(_n),M=S[S.length-1],L=M?M.params:{},P=M?M.pathname:"/",z=M?M.pathnameBase:"/",F=M&&M.route;{let X=F&&F.path||"";wd(P,!F||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${P}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let j=wn(),B;if(o){let X=typeof o=="string"?fr(o):o;tt(z==="/"||((q=X.pathname)==null?void 0:q.startsWith(z)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${z}" but pathname "${X.pathname}" was given in the \`location\` prop.`),B=X}else B=j;let te=B.pathname||"/",W=te;if(z!=="/"){let X=z.replace(/^\//,"").split("/");W="/"+te.replace(/^\//,"").split("/").slice(X.length).join("/")}let Y=fd(i,{pathname:W});Zt(F||Y!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),Zt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let ee=cp(Y&&Y.map(X=>Object.assign({},X,{params:Object.assign({},L,X.params),pathname:Un([z,_.encodeLocation?_.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?z:Un([z,_.encodeLocation?_.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),S,u,m);return o&&ee?Z.createElement(Ri.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},ee):ee}function op(){let i=mp(),o=Jh(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,m="rgba(200,200,200, 0.5)",_={padding:"0.5rem",backgroundColor:m},S={padding:"2px 4px",backgroundColor:m},M=null;return console.error("Error handled by React Router default ErrorBoundary:",i),M=Z.createElement(Z.Fragment,null,Z.createElement("p",null,"💿 Hey developer 👋"),Z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Z.createElement("code",{style:S},"ErrorBoundary")," or"," ",Z.createElement("code",{style:S},"errorElement")," prop on your route.")),Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},o),u?Z.createElement("pre",{style:_},u):null,M)}var ap=Z.createElement(op,null),lp=class extends Z.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?Z.createElement(_n.Provider,{value:this.props.routeContext},Z.createElement(Ka.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function up({routeContext:i,match:o,children:u}){let m=Z.useContext(Nr);return m&&m.static&&m.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=o.route.id),Z.createElement(_n.Provider,{value:i},u)}function cp(i,o=[],u=null,m=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let _=i,S=u==null?void 0:u.errors;if(S!=null){let P=_.findIndex(z=>z.route.id&&(S==null?void 0:S[z.route.id])!==void 0);tt(P>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(S).join(",")}`),_=_.slice(0,Math.min(_.length,P+1))}let M=!1,L=-1;if(u)for(let P=0;P<_.length;P++){let z=_[P];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(L=P),z.route.id){let{loaderData:F,errors:j}=u,B=z.route.loader&&!F.hasOwnProperty(z.route.id)&&(!j||j[z.route.id]===void 0);if(z.route.lazy||B){M=!0,L>=0?_=_.slice(0,L+1):_=[_[0]];break}}}return _.reduceRight((P,z,F)=>{let j,B=!1,te=null,W=null;u&&(j=S&&z.route.id?S[z.route.id]:void 0,te=z.route.errorElement||ap,M&&(L<0&&F===0?(wd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,W=null):L===F&&(B=!0,W=z.route.hydrateFallbackElement||null)));let Y=o.concat(_.slice(0,F+1)),ee=()=>{let q;return j?q=te:B?q=W:z.route.Component?q=Z.createElement(z.route.Component,null):z.route.element?q=z.route.element:q=P,Z.createElement(up,{match:z,routeContext:{outlet:P,matches:Y,isDataRoute:u!=null},children:q})};return u&&(z.route.ErrorBoundary||z.route.errorElement||F===0)?Z.createElement(lp,{location:u.location,revalidation:u.revalidation,component:te,error:j,children:ee(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):ee()},null)}function Ja(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dp(i){let o=Z.useContext(Nr);return tt(o,Ja(i)),o}function fp(i){let o=Z.useContext($s);return tt(o,Ja(i)),o}function hp(i){let o=Z.useContext(_n);return tt(o,Ja(i)),o}function el(i){let o=hp(i),u=o.matches[o.matches.length-1];return tt(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function pp(){return el("useRouteId")}function mp(){var m;let i=Z.useContext(Ka),o=fp("useRouteError"),u=el("useRouteError");return i!==void 0?i:(m=o.errors)==null?void 0:m[u]}function gp(){let{router:i}=dp("useNavigate"),o=el("useNavigate"),u=Z.useRef(!1);return yd(()=>{u.current=!0}),Z.useCallback(async(_,S={})=>{Zt(u.current,vd),u.current&&(typeof _=="number"?i.navigate(_):await i.navigate(_,{fromRouteId:o,...S}))},[i,o])}var Xc={};function wd(i,o,u){!o&&!Xc[i]&&(Xc[i]=!0,Zt(!1,u))}Z.memo(vp);function vp({routes:i,future:o,state:u}){return _d(i,void 0,u,o)}function yp({to:i,replace:o,state:u,relative:m}){tt(Br(),"<Navigate> may be used only in the context of a <Router> component.");let{static:_}=Z.useContext(un);Zt(!_,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:S}=Z.useContext(_n),{pathname:M}=wn(),L=Ei(),P=Ya(i,Xa(S),M,m==="path"),z=JSON.stringify(P);return Z.useEffect(()=>{L(JSON.parse(z),{replace:o,state:u,relative:m})},[L,z,m,o,u]),null}function Bs(i){tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _p({basename:i="/",children:o=null,location:u,navigationType:m="POP",navigator:_,static:S=!1}){tt(!Br(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let M=i.replace(/^\/*/,"/"),L=Z.useMemo(()=>({basename:M,navigator:_,static:S,future:{}}),[M,_,S]);typeof u=="string"&&(u=fr(u));let{pathname:P="/",search:z="",hash:F="",state:j=null,key:B="default"}=u,te=Z.useMemo(()=>{let W=Jn(P,M);return W==null?null:{location:{pathname:W,search:z,hash:F,state:j,key:B},navigationType:m}},[M,P,z,F,j,B,m]);return Zt(te!=null,`<Router basename="${M}"> is not able to match the URL "${P}${z}${F}" because it does not start with the basename, so the <Router> won't render anything.`),te==null?null:Z.createElement(un.Provider,{value:L},Z.createElement(Ri.Provider,{children:o,value:te}))}function wp({children:i,location:o}){return sp(Ga(i),o)}function Ga(i,o=[]){let u=[];return Z.Children.forEach(i,(m,_)=>{if(!Z.isValidElement(m))return;let S=[...o,_];if(m.type===Z.Fragment){u.push.apply(u,Ga(m.props.children,S));return}tt(m.type===Bs,`[${typeof m.type=="string"?m.type:m.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tt(!m.props.index||!m.props.children,"An index route cannot have child routes.");let M={id:m.props.id||S.join("-"),caseSensitive:m.props.caseSensitive,element:m.props.element,Component:m.props.Component,index:m.props.index,path:m.props.path,loader:m.props.loader,action:m.props.action,hydrateFallbackElement:m.props.hydrateFallbackElement,HydrateFallback:m.props.HydrateFallback,errorElement:m.props.errorElement,ErrorBoundary:m.props.ErrorBoundary,hasErrorBoundary:m.props.hasErrorBoundary===!0||m.props.ErrorBoundary!=null||m.props.errorElement!=null,shouldRevalidate:m.props.shouldRevalidate,handle:m.props.handle,lazy:m.props.lazy};m.props.children&&(M.children=Ga(m.props.children,S)),u.push(M)}),u}var Fs="get",Gs="application/x-www-form-urlencoded";function qs(i){return i!=null&&typeof i.tagName=="string"}function Sp(i){return qs(i)&&i.tagName.toLowerCase()==="button"}function xp(i){return qs(i)&&i.tagName.toLowerCase()==="form"}function Tp(i){return qs(i)&&i.tagName.toLowerCase()==="input"}function Rp(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Ep(i,o){return i.button===0&&(!o||o==="_self")&&!Rp(i)}function Ha(i=""){return new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((o,u)=>{let m=i[u];return o.concat(Array.isArray(m)?m.map(_=>[u,_]):[[u,m]])},[]))}function Mp(i,o){let u=Ha(i);return o&&o.forEach((m,_)=>{u.has(_)||o.getAll(_).forEach(S=>{u.append(_,S)})}),u}var Os=null;function Pp(){if(Os===null)try{new FormData(document.createElement("form"),0),Os=!1}catch{Os=!0}return Os}var Ap=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Da(i){return i!=null&&!Ap.has(i)?(Zt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gs}"`),null):i}function Lp(i,o){let u,m,_,S,M;if(xp(i)){let L=i.getAttribute("action");m=L?Jn(L,o):null,u=i.getAttribute("method")||Fs,_=Da(i.getAttribute("enctype"))||Gs,S=new FormData(i)}else if(Sp(i)||Tp(i)&&(i.type==="submit"||i.type==="image")){let L=i.form;if(L==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let P=i.getAttribute("formaction")||L.getAttribute("action");if(m=P?Jn(P,o):null,u=i.getAttribute("formmethod")||L.getAttribute("method")||Fs,_=Da(i.getAttribute("formenctype"))||Da(L.getAttribute("enctype"))||Gs,S=new FormData(L,i),!Pp()){let{name:z,type:F,value:j}=i;if(F==="image"){let B=z?`${z}.`:"";S.append(`${B}x`,"0"),S.append(`${B}y`,"0")}else z&&S.append(z,j)}}else{if(qs(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Fs,m=null,_=Gs,M=i}return S&&_==="text/plain"&&(M=S,S=void 0),{action:m,method:u.toLowerCase(),encType:_,formData:S,body:M}}function tl(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}async function zp(i,o){if(i.id in o)return o[i.id];try{let u=await import(i.module);return o[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Up(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Cp(i,o,u){let m=await Promise.all(i.map(async _=>{let S=o.routes[_.route.id];if(S){let M=await zp(S,u);return M.links?M.links():[]}return[]}));return Op(m.flat(1).filter(Up).filter(_=>_.rel==="stylesheet"||_.rel==="preload").map(_=>_.rel==="stylesheet"?{..._,rel:"prefetch",as:"style"}:{..._,rel:"prefetch"}))}function Yc(i,o,u,m,_,S){let M=(P,z)=>u[z]?P.route.id!==u[z].route.id:!0,L=(P,z)=>{var F;return u[z].pathname!==P.pathname||((F=u[z].route.path)==null?void 0:F.endsWith("*"))&&u[z].params["*"]!==P.params["*"]};return S==="assets"?o.filter((P,z)=>M(P,z)||L(P,z)):S==="data"?o.filter((P,z)=>{var j;let F=m.routes[P.route.id];if(!F||!F.hasLoader)return!1;if(M(P,z)||L(P,z))return!0;if(P.route.shouldRevalidate){let B=P.route.shouldRevalidate({currentUrl:new URL(_.pathname+_.search+_.hash,window.origin),currentParams:((j=u[0])==null?void 0:j.params)||{},nextUrl:new URL(i,window.origin),nextParams:P.params,defaultShouldRevalidate:!0});if(typeof B=="boolean")return B}return!0}):[]}function kp(i,o){return Ip(i.map(u=>{let m=o.routes[u.route.id];if(!m)return[];let _=[m.module];return m.imports&&(_=_.concat(m.imports)),_}).flat(1))}function Ip(i){return[...new Set(i)]}function Dp(i){let o={},u=Object.keys(i).sort();for(let m of u)o[m]=i[m];return o}function Op(i,o){let u=new Set;return new Set(o),i.reduce((m,_)=>{let S=JSON.stringify(Dp(_));return u.has(S)||(u.add(S),m.push({key:S,link:_})),m},[])}function bp(i){let o=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return o.pathname==="/"?o.pathname="_root.data":o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function Np(){let i=Z.useContext(Nr);return tl(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Bp(){let i=Z.useContext($s);return tl(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var nl=Z.createContext(void 0);nl.displayName="FrameworkContext";function Sd(){let i=Z.useContext(nl);return tl(i,"You must render this element inside a <HydratedRouter> element"),i}function Fp(i,o){let u=Z.useContext(nl),[m,_]=Z.useState(!1),[S,M]=Z.useState(!1),{onFocus:L,onBlur:P,onMouseEnter:z,onMouseLeave:F,onTouchStart:j}=o,B=Z.useRef(null);Z.useEffect(()=>{if(i==="render"&&M(!0),i==="viewport"){let Y=q=>{q.forEach(X=>{M(X.isIntersecting)})},ee=new IntersectionObserver(Y,{threshold:.5});return B.current&&ee.observe(B.current),()=>{ee.disconnect()}}},[i]),Z.useEffect(()=>{if(m){let Y=setTimeout(()=>{M(!0)},100);return()=>{clearTimeout(Y)}}},[m]);let te=()=>{_(!0)},W=()=>{_(!1),M(!1)};return u?i!=="intent"?[S,B,{}]:[S,B,{onFocus:Si(L,te),onBlur:Si(P,W),onMouseEnter:Si(z,te),onMouseLeave:Si(F,W),onTouchStart:Si(j,te)}]:[!1,B,{}]}function Si(i,o){return u=>{i&&i(u),u.defaultPrevented||o(u)}}function Gp({page:i,...o}){let{router:u}=Np(),m=Z.useMemo(()=>fd(u.routes,i,u.basename),[u.routes,i,u.basename]);return m?Z.createElement(Vp,{page:i,matches:m,...o}):null}function Hp(i){let{manifest:o,routeModules:u}=Sd(),[m,_]=Z.useState([]);return Z.useEffect(()=>{let S=!1;return Cp(i,o,u).then(M=>{S||_(M)}),()=>{S=!0}},[i,o,u]),m}function Vp({page:i,matches:o,...u}){let m=wn(),{manifest:_,routeModules:S}=Sd(),{loaderData:M,matches:L}=Bp(),P=Z.useMemo(()=>Yc(i,o,L,_,m,"data"),[i,o,L,_,m]),z=Z.useMemo(()=>Yc(i,o,L,_,m,"assets"),[i,o,L,_,m]),F=Z.useMemo(()=>{if(i===m.pathname+m.search+m.hash)return[];let te=new Set,W=!1;if(o.forEach(ee=>{var X;let q=_.routes[ee.route.id];!q||!q.hasLoader||(!P.some(le=>le.route.id===ee.route.id)&&ee.route.id in M&&((X=S[ee.route.id])!=null&&X.shouldRevalidate)||q.hasClientLoader?W=!0:te.add(ee.route.id))}),te.size===0)return[];let Y=bp(i);return W&&te.size>0&&Y.searchParams.set("_routes",o.filter(ee=>te.has(ee.route.id)).map(ee=>ee.route.id).join(",")),[Y.pathname+Y.search]},[M,m,_,P,o,i,S]),j=Z.useMemo(()=>kp(z,_),[z,_]),B=Hp(z);return Z.createElement(Z.Fragment,null,F.map(te=>Z.createElement("link",{key:te,rel:"prefetch",as:"fetch",href:te,...u})),j.map(te=>Z.createElement("link",{key:te,rel:"modulepreload",href:te,...u})),B.map(({key:te,link:W})=>Z.createElement("link",{key:te,...W})))}function $p(...i){return o=>{i.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var xd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xd&&(window.__reactRouterVersion="7.1.1")}catch{}function qp({basename:i,children:o,window:u}){let m=Z.useRef();m.current==null&&(m.current=Uh({window:u,v5Compat:!0}));let _=m.current,[S,M]=Z.useState({action:_.action,location:_.location}),L=Z.useCallback(P=>{Z.startTransition(()=>M(P))},[M]);return Z.useLayoutEffect(()=>_.listen(L),[_,L]),Z.createElement(_p,{basename:i,children:o,location:S.location,navigationType:S.action,navigator:_})}var Td=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rd=Z.forwardRef(function({onClick:o,discover:u="render",prefetch:m="none",relative:_,reloadDocument:S,replace:M,state:L,target:P,to:z,preventScrollReset:F,viewTransition:j,...B},te){let{basename:W}=Z.useContext(un),Y=typeof z=="string"&&Td.test(z),ee,q=!1;if(typeof z=="string"&&Y&&(ee=z,xd))try{let Oe=new URL(window.location.href),Fe=z.startsWith("//")?new URL(Oe.protocol+z):new URL(z),Ze=Jn(Fe.pathname,W);Fe.origin===Oe.origin&&Ze!=null?z=Ze+Fe.search+Fe.hash:q=!0}catch{Zt(!1,`<Link to="${z}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=rp(z,{relative:_}),[le,de,xe]=Fp(m,B),ke=Qp(z,{replace:M,state:L,target:P,preventScrollReset:F,relative:_,viewTransition:j});function Ie(Oe){o&&o(Oe),Oe.defaultPrevented||ke(Oe)}let Ne=Z.createElement("a",{...B,...xe,href:ee||X,onClick:q||S?o:Ie,ref:$p(te,de),target:P,"data-discover":!Y&&u==="render"?"true":void 0});return le&&!Y?Z.createElement(Z.Fragment,null,Ne,Z.createElement(Gp,{page:X})):Ne});Rd.displayName="Link";var jp=Z.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:m="",end:_=!1,style:S,to:M,viewTransition:L,children:P,...z},F){let j=Mi(M,{relative:z.relative}),B=wn(),te=Z.useContext($s),{navigator:W,basename:Y}=Z.useContext(un),ee=te!=null&&tm(j)&&L===!0,q=W.encodeLocation?W.encodeLocation(j).pathname:j.pathname,X=B.pathname,le=te&&te.navigation&&te.navigation.location?te.navigation.location.pathname:null;u||(X=X.toLowerCase(),le=le?le.toLowerCase():null,q=q.toLowerCase()),le&&Y&&(le=Jn(le,Y)||le);const de=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let xe=X===q||!_&&X.startsWith(q)&&X.charAt(de)==="/",ke=le!=null&&(le===q||!_&&le.startsWith(q)&&le.charAt(q.length)==="/"),Ie={isActive:xe,isPending:ke,isTransitioning:ee},Ne=xe?o:void 0,Oe;typeof m=="function"?Oe=m(Ie):Oe=[m,xe?"active":null,ke?"pending":null,ee?"transitioning":null].filter(Boolean).join(" ");let Fe=typeof S=="function"?S(Ie):S;return Z.createElement(Rd,{...z,"aria-current":Ne,className:Oe,ref:F,style:Fe,to:M,viewTransition:L},typeof P=="function"?P(Ie):P)});jp.displayName="NavLink";var Wp=Z.forwardRef(({discover:i="render",fetcherKey:o,navigate:u,reloadDocument:m,replace:_,state:S,method:M=Fs,action:L,onSubmit:P,relative:z,preventScrollReset:F,viewTransition:j,...B},te)=>{let W=Jp(),Y=em(L,{relative:z}),ee=M.toLowerCase()==="get"?"get":"post",q=typeof L=="string"&&Td.test(L),X=le=>{if(P&&P(le),le.defaultPrevented)return;le.preventDefault();let de=le.nativeEvent.submitter,xe=(de==null?void 0:de.getAttribute("formmethod"))||M;W(de||le.currentTarget,{fetcherKey:o,method:xe,navigate:u,replace:_,state:S,relative:z,preventScrollReset:F,viewTransition:j})};return Z.createElement("form",{ref:te,method:ee,action:Y,onSubmit:m?P:X,...B,"data-discover":!q&&i==="render"?"true":void 0})});Wp.displayName="Form";function Zp(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ed(i){let o=Z.useContext(Nr);return tt(o,Zp(i)),o}function Qp(i,{target:o,replace:u,state:m,preventScrollReset:_,relative:S,viewTransition:M}={}){let L=Ei(),P=wn(),z=Mi(i,{relative:S});return Z.useCallback(F=>{if(Ep(F,o)){F.preventDefault();let j=u!==void 0?u:xi(P)===xi(z);L(i,{replace:j,state:m,preventScrollReset:_,relative:S,viewTransition:M})}},[P,L,z,u,m,o,i,_,S,M])}function Xp(i){Zt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=Z.useRef(Ha(i)),u=Z.useRef(!1),m=wn(),_=Z.useMemo(()=>Mp(m.search,u.current?null:o.current),[m.search]),S=Ei(),M=Z.useCallback((L,P)=>{const z=Ha(typeof L=="function"?L(_):L);u.current=!0,S("?"+z,P)},[S,_]);return[_,M]}var Yp=0,Kp=()=>`__${String(++Yp)}__`;function Jp(){let{router:i}=Ed("useSubmit"),{basename:o}=Z.useContext(un),u=pp();return Z.useCallback(async(m,_={})=>{let{action:S,method:M,encType:L,formData:P,body:z}=Lp(m,o);if(_.navigate===!1){let F=_.fetcherKey||Kp();await i.fetch(F,u,_.action||S,{preventScrollReset:_.preventScrollReset,formData:P,body:z,formMethod:_.method||M,formEncType:_.encType||L,flushSync:_.flushSync})}else await i.navigate(_.action||S,{preventScrollReset:_.preventScrollReset,formData:P,body:z,formMethod:_.method||M,formEncType:_.encType||L,replace:_.replace,state:_.state,fromRouteId:u,flushSync:_.flushSync,viewTransition:_.viewTransition})},[i,o,u])}function em(i,{relative:o}={}){let{basename:u}=Z.useContext(un),m=Z.useContext(_n);tt(m,"useFormAction must be used inside a RouteContext");let[_]=m.matches.slice(-1),S={...Mi(i||".",{relative:o})},M=wn();if(i==null){S.search=M.search;let L=new URLSearchParams(S.search),P=L.getAll("index");if(P.some(F=>F==="")){L.delete("index"),P.filter(j=>j).forEach(j=>L.append("index",j));let F=L.toString();S.search=F?`?${F}`:""}}return(!i||i===".")&&_.route.index&&(S.search=S.search?S.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(S.pathname=S.pathname==="/"?u:Un([u,S.pathname])),xi(S)}function tm(i,o={}){let u=Z.useContext(gd);tt(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:m}=Ed("useViewTransitionState"),_=Mi(i,{relative:o.relative});if(!u.isTransitioning)return!1;let S=Jn(u.currentLocation.pathname,m)||u.currentLocation.pathname,M=Jn(u.nextLocation.pathname,m)||u.nextLocation.pathname;return Vs(_.pathname,M)!=null||Vs(_.pathname,S)!=null}new TextEncoder;const nm=`struct VertexOut {
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
}`;function rm(i,o){return class extends i{constructor(...u){super(...u),o(this)}}}const im=rm(Array,i=>i.fill(0));let be=1e-6;function sm(i){function o(a=0,v=0){const c=new i(2);return a!==void 0&&(c[0]=a,v!==void 0&&(c[1]=v)),c}const u=o;function m(a,v,c){const h=c??new i(2);return h[0]=a,h[1]=v,h}function _(a,v){const c=v??new i(2);return c[0]=Math.ceil(a[0]),c[1]=Math.ceil(a[1]),c}function S(a,v){const c=v??new i(2);return c[0]=Math.floor(a[0]),c[1]=Math.floor(a[1]),c}function M(a,v){const c=v??new i(2);return c[0]=Math.round(a[0]),c[1]=Math.round(a[1]),c}function L(a,v=0,c=1,h){const w=h??new i(2);return w[0]=Math.min(c,Math.max(v,a[0])),w[1]=Math.min(c,Math.max(v,a[1])),w}function P(a,v,c){const h=c??new i(2);return h[0]=a[0]+v[0],h[1]=a[1]+v[1],h}function z(a,v,c,h){const w=h??new i(2);return w[0]=a[0]+v[0]*c,w[1]=a[1]+v[1]*c,w}function F(a,v){const c=a[0],h=a[1],w=v[0],k=v[1],H=Math.sqrt(c*c+h*h),y=Math.sqrt(w*w+k*k),x=H*y,C=x&&Oe(a,v)/x;return Math.acos(C)}function j(a,v,c){const h=c??new i(2);return h[0]=a[0]-v[0],h[1]=a[1]-v[1],h}const B=j;function te(a,v){return Math.abs(a[0]-v[0])<be&&Math.abs(a[1]-v[1])<be}function W(a,v){return a[0]===v[0]&&a[1]===v[1]}function Y(a,v,c,h){const w=h??new i(2);return w[0]=a[0]+c*(v[0]-a[0]),w[1]=a[1]+c*(v[1]-a[1]),w}function ee(a,v,c,h){const w=h??new i(2);return w[0]=a[0]+c[0]*(v[0]-a[0]),w[1]=a[1]+c[1]*(v[1]-a[1]),w}function q(a,v,c){const h=c??new i(2);return h[0]=Math.max(a[0],v[0]),h[1]=Math.max(a[1],v[1]),h}function X(a,v,c){const h=c??new i(2);return h[0]=Math.min(a[0],v[0]),h[1]=Math.min(a[1],v[1]),h}function le(a,v,c){const h=c??new i(2);return h[0]=a[0]*v,h[1]=a[1]*v,h}const de=le;function xe(a,v,c){const h=c??new i(2);return h[0]=a[0]/v,h[1]=a[1]/v,h}function ke(a,v){const c=v??new i(2);return c[0]=1/a[0],c[1]=1/a[1],c}const Ie=ke;function Ne(a,v,c){const h=c??new i(3),w=a[0]*v[1]-a[1]*v[0];return h[0]=0,h[1]=0,h[2]=w,h}function Oe(a,v){return a[0]*v[0]+a[1]*v[1]}function Fe(a){const v=a[0],c=a[1];return Math.sqrt(v*v+c*c)}const Ze=Fe;function Me(a){const v=a[0],c=a[1];return v*v+c*c}const Le=Me;function Te(a,v){const c=a[0]-v[0],h=a[1]-v[1];return Math.sqrt(c*c+h*h)}const We=Te;function $e(a,v){const c=a[0]-v[0],h=a[1]-v[1];return c*c+h*h}const He=$e;function oe(a,v){const c=v??new i(2),h=a[0],w=a[1],k=Math.sqrt(h*h+w*w);return k>1e-5?(c[0]=h/k,c[1]=w/k):(c[0]=0,c[1]=0),c}function ce(a,v){const c=v??new i(2);return c[0]=-a[0],c[1]=-a[1],c}function se(a,v){const c=v??new i(2);return c[0]=a[0],c[1]=a[1],c}const O=se;function J(a,v,c){const h=c??new i(2);return h[0]=a[0]*v[0],h[1]=a[1]*v[1],h}const we=J;function Se(a,v,c){const h=c??new i(2);return h[0]=a[0]/v[0],h[1]=a[1]/v[1],h}const Ae=Se;function Ue(a=1,v){const c=v??new i(2),h=Math.random()*2*Math.PI;return c[0]=Math.cos(h)*a,c[1]=Math.sin(h)*a,c}function f(a){const v=a??new i(2);return v[0]=0,v[1]=0,v}function R(a,v,c){const h=c??new i(2),w=a[0],k=a[1];return h[0]=w*v[0]+k*v[4]+v[12],h[1]=w*v[1]+k*v[5]+v[13],h}function d(a,v,c){const h=c??new i(2),w=a[0],k=a[1];return h[0]=v[0]*w+v[4]*k+v[8],h[1]=v[1]*w+v[5]*k+v[9],h}function p(a,v,c,h){const w=h??new i(2),k=a[0]-v[0],H=a[1]-v[1],y=Math.sin(c),x=Math.cos(c);return w[0]=k*x-H*y+v[0],w[1]=k*y+H*x+v[1],w}function T(a,v,c){const h=c??new i(2);return oe(a,h),le(h,v,h)}function A(a,v,c){const h=c??new i(2);return Fe(a)>v?T(a,v,h):se(a,h)}function G(a,v,c){const h=c??new i(2);return Y(a,v,.5,h)}return{create:o,fromValues:u,set:m,ceil:_,floor:S,round:M,clamp:L,add:P,addScaled:z,angle:F,subtract:j,sub:B,equalsApproximately:te,equals:W,lerp:Y,lerpV:ee,max:q,min:X,mulScalar:le,scale:de,divScalar:xe,inverse:ke,invert:Ie,cross:Ne,dot:Oe,length:Fe,len:Ze,lengthSq:Me,lenSq:Le,distance:Te,dist:We,distanceSq:$e,distSq:He,normalize:oe,negate:ce,copy:se,clone:O,multiply:J,mul:we,divide:Se,div:Ae,random:Ue,zero:f,transformMat4:R,transformMat3:d,rotate:p,setLength:T,truncate:A,midpoint:G}}const Kc=new Map;function Md(i){let o=Kc.get(i);return o||(o=sm(i),Kc.set(i,o)),o}function om(i){function o(y,x,C){const I=new i(3);return y!==void 0&&(I[0]=y,x!==void 0&&(I[1]=x,C!==void 0&&(I[2]=C))),I}const u=o;function m(y,x,C,I){const V=I??new i(3);return V[0]=y,V[1]=x,V[2]=C,V}function _(y,x){const C=x??new i(3);return C[0]=Math.ceil(y[0]),C[1]=Math.ceil(y[1]),C[2]=Math.ceil(y[2]),C}function S(y,x){const C=x??new i(3);return C[0]=Math.floor(y[0]),C[1]=Math.floor(y[1]),C[2]=Math.floor(y[2]),C}function M(y,x){const C=x??new i(3);return C[0]=Math.round(y[0]),C[1]=Math.round(y[1]),C[2]=Math.round(y[2]),C}function L(y,x=0,C=1,I){const V=I??new i(3);return V[0]=Math.min(C,Math.max(x,y[0])),V[1]=Math.min(C,Math.max(x,y[1])),V[2]=Math.min(C,Math.max(x,y[2])),V}function P(y,x,C){const I=C??new i(3);return I[0]=y[0]+x[0],I[1]=y[1]+x[1],I[2]=y[2]+x[2],I}function z(y,x,C,I){const V=I??new i(3);return V[0]=y[0]+x[0]*C,V[1]=y[1]+x[1]*C,V[2]=y[2]+x[2]*C,V}function F(y,x){const C=y[0],I=y[1],V=y[2],Q=x[0],K=x[1],pe=x[2],Pe=Math.sqrt(C*C+I*I+V*V),fe=Math.sqrt(Q*Q+K*K+pe*pe),me=Pe*fe,De=me&&Oe(y,x)/me;return Math.acos(De)}function j(y,x,C){const I=C??new i(3);return I[0]=y[0]-x[0],I[1]=y[1]-x[1],I[2]=y[2]-x[2],I}const B=j;function te(y,x){return Math.abs(y[0]-x[0])<be&&Math.abs(y[1]-x[1])<be&&Math.abs(y[2]-x[2])<be}function W(y,x){return y[0]===x[0]&&y[1]===x[1]&&y[2]===x[2]}function Y(y,x,C,I){const V=I??new i(3);return V[0]=y[0]+C*(x[0]-y[0]),V[1]=y[1]+C*(x[1]-y[1]),V[2]=y[2]+C*(x[2]-y[2]),V}function ee(y,x,C,I){const V=I??new i(3);return V[0]=y[0]+C[0]*(x[0]-y[0]),V[1]=y[1]+C[1]*(x[1]-y[1]),V[2]=y[2]+C[2]*(x[2]-y[2]),V}function q(y,x,C){const I=C??new i(3);return I[0]=Math.max(y[0],x[0]),I[1]=Math.max(y[1],x[1]),I[2]=Math.max(y[2],x[2]),I}function X(y,x,C){const I=C??new i(3);return I[0]=Math.min(y[0],x[0]),I[1]=Math.min(y[1],x[1]),I[2]=Math.min(y[2],x[2]),I}function le(y,x,C){const I=C??new i(3);return I[0]=y[0]*x,I[1]=y[1]*x,I[2]=y[2]*x,I}const de=le;function xe(y,x,C){const I=C??new i(3);return I[0]=y[0]/x,I[1]=y[1]/x,I[2]=y[2]/x,I}function ke(y,x){const C=x??new i(3);return C[0]=1/y[0],C[1]=1/y[1],C[2]=1/y[2],C}const Ie=ke;function Ne(y,x,C){const I=C??new i(3),V=y[2]*x[0]-y[0]*x[2],Q=y[0]*x[1]-y[1]*x[0];return I[0]=y[1]*x[2]-y[2]*x[1],I[1]=V,I[2]=Q,I}function Oe(y,x){return y[0]*x[0]+y[1]*x[1]+y[2]*x[2]}function Fe(y){const x=y[0],C=y[1],I=y[2];return Math.sqrt(x*x+C*C+I*I)}const Ze=Fe;function Me(y){const x=y[0],C=y[1],I=y[2];return x*x+C*C+I*I}const Le=Me;function Te(y,x){const C=y[0]-x[0],I=y[1]-x[1],V=y[2]-x[2];return Math.sqrt(C*C+I*I+V*V)}const We=Te;function $e(y,x){const C=y[0]-x[0],I=y[1]-x[1],V=y[2]-x[2];return C*C+I*I+V*V}const He=$e;function oe(y,x){const C=x??new i(3),I=y[0],V=y[1],Q=y[2],K=Math.sqrt(I*I+V*V+Q*Q);return K>1e-5?(C[0]=I/K,C[1]=V/K,C[2]=Q/K):(C[0]=0,C[1]=0,C[2]=0),C}function ce(y,x){const C=x??new i(3);return C[0]=-y[0],C[1]=-y[1],C[2]=-y[2],C}function se(y,x){const C=x??new i(3);return C[0]=y[0],C[1]=y[1],C[2]=y[2],C}const O=se;function J(y,x,C){const I=C??new i(3);return I[0]=y[0]*x[0],I[1]=y[1]*x[1],I[2]=y[2]*x[2],I}const we=J;function Se(y,x,C){const I=C??new i(3);return I[0]=y[0]/x[0],I[1]=y[1]/x[1],I[2]=y[2]/x[2],I}const Ae=Se;function Ue(y=1,x){const C=x??new i(3),I=Math.random()*2*Math.PI,V=Math.random()*2-1,Q=Math.sqrt(1-V*V)*y;return C[0]=Math.cos(I)*Q,C[1]=Math.sin(I)*Q,C[2]=V*y,C}function f(y){const x=y??new i(3);return x[0]=0,x[1]=0,x[2]=0,x}function R(y,x,C){const I=C??new i(3),V=y[0],Q=y[1],K=y[2],pe=x[3]*V+x[7]*Q+x[11]*K+x[15]||1;return I[0]=(x[0]*V+x[4]*Q+x[8]*K+x[12])/pe,I[1]=(x[1]*V+x[5]*Q+x[9]*K+x[13])/pe,I[2]=(x[2]*V+x[6]*Q+x[10]*K+x[14])/pe,I}function d(y,x,C){const I=C??new i(3),V=y[0],Q=y[1],K=y[2];return I[0]=V*x[0*4+0]+Q*x[1*4+0]+K*x[2*4+0],I[1]=V*x[0*4+1]+Q*x[1*4+1]+K*x[2*4+1],I[2]=V*x[0*4+2]+Q*x[1*4+2]+K*x[2*4+2],I}function p(y,x,C){const I=C??new i(3),V=y[0],Q=y[1],K=y[2];return I[0]=V*x[0]+Q*x[4]+K*x[8],I[1]=V*x[1]+Q*x[5]+K*x[9],I[2]=V*x[2]+Q*x[6]+K*x[10],I}function T(y,x,C){const I=C??new i(3),V=x[0],Q=x[1],K=x[2],pe=x[3]*2,Pe=y[0],fe=y[1],me=y[2],De=Q*me-K*fe,Be=K*Pe-V*me,Qe=V*fe-Q*Pe;return I[0]=Pe+De*pe+(Q*Qe-K*Be)*2,I[1]=fe+Be*pe+(K*De-V*Qe)*2,I[2]=me+Qe*pe+(V*Be-Q*De)*2,I}function A(y,x){const C=x??new i(3);return C[0]=y[12],C[1]=y[13],C[2]=y[14],C}function G(y,x,C){const I=C??new i(3),V=x*4;return I[0]=y[V+0],I[1]=y[V+1],I[2]=y[V+2],I}function a(y,x){const C=x??new i(3),I=y[0],V=y[1],Q=y[2],K=y[4],pe=y[5],Pe=y[6],fe=y[8],me=y[9],De=y[10];return C[0]=Math.sqrt(I*I+V*V+Q*Q),C[1]=Math.sqrt(K*K+pe*pe+Pe*Pe),C[2]=Math.sqrt(fe*fe+me*me+De*De),C}function v(y,x,C,I){const V=I??new i(3),Q=[],K=[];return Q[0]=y[0]-x[0],Q[1]=y[1]-x[1],Q[2]=y[2]-x[2],K[0]=Q[0],K[1]=Q[1]*Math.cos(C)-Q[2]*Math.sin(C),K[2]=Q[1]*Math.sin(C)+Q[2]*Math.cos(C),V[0]=K[0]+x[0],V[1]=K[1]+x[1],V[2]=K[2]+x[2],V}function c(y,x,C,I){const V=I??new i(3),Q=[],K=[];return Q[0]=y[0]-x[0],Q[1]=y[1]-x[1],Q[2]=y[2]-x[2],K[0]=Q[2]*Math.sin(C)+Q[0]*Math.cos(C),K[1]=Q[1],K[2]=Q[2]*Math.cos(C)-Q[0]*Math.sin(C),V[0]=K[0]+x[0],V[1]=K[1]+x[1],V[2]=K[2]+x[2],V}function h(y,x,C,I){const V=I??new i(3),Q=[],K=[];return Q[0]=y[0]-x[0],Q[1]=y[1]-x[1],Q[2]=y[2]-x[2],K[0]=Q[0]*Math.cos(C)-Q[1]*Math.sin(C),K[1]=Q[0]*Math.sin(C)+Q[1]*Math.cos(C),K[2]=Q[2],V[0]=K[0]+x[0],V[1]=K[1]+x[1],V[2]=K[2]+x[2],V}function w(y,x,C){const I=C??new i(3);return oe(y,I),le(I,x,I)}function k(y,x,C){const I=C??new i(3);return Fe(y)>x?w(y,x,I):se(y,I)}function H(y,x,C){const I=C??new i(3);return Y(y,x,.5,I)}return{create:o,fromValues:u,set:m,ceil:_,floor:S,round:M,clamp:L,add:P,addScaled:z,angle:F,subtract:j,sub:B,equalsApproximately:te,equals:W,lerp:Y,lerpV:ee,max:q,min:X,mulScalar:le,scale:de,divScalar:xe,inverse:ke,invert:Ie,cross:Ne,dot:Oe,length:Fe,len:Ze,lengthSq:Me,lenSq:Le,distance:Te,dist:We,distanceSq:$e,distSq:He,normalize:oe,negate:ce,copy:se,clone:O,multiply:J,mul:we,divide:Se,div:Ae,random:Ue,zero:f,transformMat4:R,transformMat4Upper3x3:d,transformMat3:p,transformQuat:T,getTranslation:A,getAxis:G,getScaling:a,rotateX:v,rotateY:c,rotateZ:h,setLength:w,truncate:k,midpoint:H}}const Jc=new Map;function js(i){let o=Jc.get(i);return o||(o=om(i),Jc.set(i,o)),o}function am(i){const o=Md(i),u=js(i);function m(f,R,d,p,T,A,G,a,v){const c=new i(12);return c[3]=0,c[7]=0,c[11]=0,f!==void 0&&(c[0]=f,R!==void 0&&(c[1]=R,d!==void 0&&(c[2]=d,p!==void 0&&(c[4]=p,T!==void 0&&(c[5]=T,A!==void 0&&(c[6]=A,G!==void 0&&(c[8]=G,a!==void 0&&(c[9]=a,v!==void 0&&(c[10]=v))))))))),c}function _(f,R,d,p,T,A,G,a,v,c){const h=c??new i(12);return h[0]=f,h[1]=R,h[2]=d,h[3]=0,h[4]=p,h[5]=T,h[6]=A,h[7]=0,h[8]=G,h[9]=a,h[10]=v,h[11]=0,h}function S(f,R){const d=R??new i(12);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[3]=0,d[4]=f[4],d[5]=f[5],d[6]=f[6],d[7]=0,d[8]=f[8],d[9]=f[9],d[10]=f[10],d[11]=0,d}function M(f,R){const d=R??new i(12),p=f[0],T=f[1],A=f[2],G=f[3],a=p+p,v=T+T,c=A+A,h=p*a,w=T*a,k=T*v,H=A*a,y=A*v,x=A*c,C=G*a,I=G*v,V=G*c;return d[0]=1-k-x,d[1]=w+V,d[2]=H-I,d[3]=0,d[4]=w-V,d[5]=1-h-x,d[6]=y+C,d[7]=0,d[8]=H+I,d[9]=y-C,d[10]=1-h-k,d[11]=0,d}function L(f,R){const d=R??new i(12);return d[0]=-f[0],d[1]=-f[1],d[2]=-f[2],d[4]=-f[4],d[5]=-f[5],d[6]=-f[6],d[8]=-f[8],d[9]=-f[9],d[10]=-f[10],d}function P(f,R){const d=R??new i(12);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[4]=f[4],d[5]=f[5],d[6]=f[6],d[8]=f[8],d[9]=f[9],d[10]=f[10],d}const z=P;function F(f,R){return Math.abs(f[0]-R[0])<be&&Math.abs(f[1]-R[1])<be&&Math.abs(f[2]-R[2])<be&&Math.abs(f[4]-R[4])<be&&Math.abs(f[5]-R[5])<be&&Math.abs(f[6]-R[6])<be&&Math.abs(f[8]-R[8])<be&&Math.abs(f[9]-R[9])<be&&Math.abs(f[10]-R[10])<be}function j(f,R){return f[0]===R[0]&&f[1]===R[1]&&f[2]===R[2]&&f[4]===R[4]&&f[5]===R[5]&&f[6]===R[6]&&f[8]===R[8]&&f[9]===R[9]&&f[10]===R[10]}function B(f){const R=f??new i(12);return R[0]=1,R[1]=0,R[2]=0,R[4]=0,R[5]=1,R[6]=0,R[8]=0,R[9]=0,R[10]=1,R}function te(f,R){const d=R??new i(12);if(d===f){let k;return k=f[1],f[1]=f[4],f[4]=k,k=f[2],f[2]=f[8],f[8]=k,k=f[6],f[6]=f[9],f[9]=k,d}const p=f[0*4+0],T=f[0*4+1],A=f[0*4+2],G=f[1*4+0],a=f[1*4+1],v=f[1*4+2],c=f[2*4+0],h=f[2*4+1],w=f[2*4+2];return d[0]=p,d[1]=G,d[2]=c,d[4]=T,d[5]=a,d[6]=h,d[8]=A,d[9]=v,d[10]=w,d}function W(f,R){const d=R??new i(12),p=f[0*4+0],T=f[0*4+1],A=f[0*4+2],G=f[1*4+0],a=f[1*4+1],v=f[1*4+2],c=f[2*4+0],h=f[2*4+1],w=f[2*4+2],k=w*a-v*h,H=-w*G+v*c,y=h*G-a*c,x=1/(p*k+T*H+A*y);return d[0]=k*x,d[1]=(-w*T+A*h)*x,d[2]=(v*T-A*a)*x,d[4]=H*x,d[5]=(w*p-A*c)*x,d[6]=(-v*p+A*G)*x,d[8]=y*x,d[9]=(-h*p+T*c)*x,d[10]=(a*p-T*G)*x,d}function Y(f){const R=f[0],d=f[0*4+1],p=f[0*4+2],T=f[1*4+0],A=f[1*4+1],G=f[1*4+2],a=f[2*4+0],v=f[2*4+1],c=f[2*4+2];return R*(A*c-v*G)-T*(d*c-v*p)+a*(d*G-A*p)}const ee=W;function q(f,R,d){const p=d??new i(12),T=f[0],A=f[1],G=f[2],a=f[4],v=f[5],c=f[6],h=f[8],w=f[9],k=f[10],H=R[0],y=R[1],x=R[2],C=R[4],I=R[5],V=R[6],Q=R[8],K=R[9],pe=R[10];return p[0]=T*H+a*y+h*x,p[1]=A*H+v*y+w*x,p[2]=G*H+c*y+k*x,p[4]=T*C+a*I+h*V,p[5]=A*C+v*I+w*V,p[6]=G*C+c*I+k*V,p[8]=T*Q+a*K+h*pe,p[9]=A*Q+v*K+w*pe,p[10]=G*Q+c*K+k*pe,p}const X=q;function le(f,R,d){const p=d??B();return f!==p&&(p[0]=f[0],p[1]=f[1],p[2]=f[2],p[4]=f[4],p[5]=f[5],p[6]=f[6]),p[8]=R[0],p[9]=R[1],p[10]=1,p}function de(f,R){const d=R??o.create();return d[0]=f[8],d[1]=f[9],d}function xe(f,R,d){const p=d??o.create(),T=R*4;return p[0]=f[T+0],p[1]=f[T+1],p}function ke(f,R,d,p){const T=p===f?f:P(f,p),A=d*4;return T[A+0]=R[0],T[A+1]=R[1],T}function Ie(f,R){const d=R??o.create(),p=f[0],T=f[1],A=f[4],G=f[5];return d[0]=Math.sqrt(p*p+T*T),d[1]=Math.sqrt(A*A+G*G),d}function Ne(f,R){const d=R??u.create(),p=f[0],T=f[1],A=f[2],G=f[4],a=f[5],v=f[6],c=f[8],h=f[9],w=f[10];return d[0]=Math.sqrt(p*p+T*T+A*A),d[1]=Math.sqrt(G*G+a*a+v*v),d[2]=Math.sqrt(c*c+h*h+w*w),d}function Oe(f,R){const d=R??new i(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=f[0],d[9]=f[1],d[10]=1,d}function Fe(f,R,d){const p=d??new i(12),T=R[0],A=R[1],G=f[0],a=f[1],v=f[2],c=f[1*4+0],h=f[1*4+1],w=f[1*4+2],k=f[2*4+0],H=f[2*4+1],y=f[2*4+2];return f!==p&&(p[0]=G,p[1]=a,p[2]=v,p[4]=c,p[5]=h,p[6]=w),p[8]=G*T+c*A+k,p[9]=a*T+h*A+H,p[10]=v*T+w*A+y,p}function Ze(f,R){const d=R??new i(12),p=Math.cos(f),T=Math.sin(f);return d[0]=p,d[1]=T,d[2]=0,d[4]=-T,d[5]=p,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Me(f,R,d){const p=d??new i(12),T=f[0*4+0],A=f[0*4+1],G=f[0*4+2],a=f[1*4+0],v=f[1*4+1],c=f[1*4+2],h=Math.cos(R),w=Math.sin(R);return p[0]=h*T+w*a,p[1]=h*A+w*v,p[2]=h*G+w*c,p[4]=h*a-w*T,p[5]=h*v-w*A,p[6]=h*c-w*G,f!==p&&(p[8]=f[8],p[9]=f[9],p[10]=f[10]),p}function Le(f,R){const d=R??new i(12),p=Math.cos(f),T=Math.sin(f);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=p,d[6]=T,d[8]=0,d[9]=-T,d[10]=p,d}function Te(f,R,d){const p=d??new i(12),T=f[4],A=f[5],G=f[6],a=f[8],v=f[9],c=f[10],h=Math.cos(R),w=Math.sin(R);return p[4]=h*T+w*a,p[5]=h*A+w*v,p[6]=h*G+w*c,p[8]=h*a-w*T,p[9]=h*v-w*A,p[10]=h*c-w*G,f!==p&&(p[0]=f[0],p[1]=f[1],p[2]=f[2]),p}function We(f,R){const d=R??new i(12),p=Math.cos(f),T=Math.sin(f);return d[0]=p,d[1]=0,d[2]=-T,d[4]=0,d[5]=1,d[6]=0,d[8]=T,d[9]=0,d[10]=p,d}function $e(f,R,d){const p=d??new i(12),T=f[0*4+0],A=f[0*4+1],G=f[0*4+2],a=f[2*4+0],v=f[2*4+1],c=f[2*4+2],h=Math.cos(R),w=Math.sin(R);return p[0]=h*T-w*a,p[1]=h*A-w*v,p[2]=h*G-w*c,p[8]=h*a+w*T,p[9]=h*v+w*A,p[10]=h*c+w*G,f!==p&&(p[4]=f[4],p[5]=f[5],p[6]=f[6]),p}const He=Ze,oe=Me;function ce(f,R){const d=R??new i(12);return d[0]=f[0],d[1]=0,d[2]=0,d[4]=0,d[5]=f[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function se(f,R,d){const p=d??new i(12),T=R[0],A=R[1];return p[0]=T*f[0*4+0],p[1]=T*f[0*4+1],p[2]=T*f[0*4+2],p[4]=A*f[1*4+0],p[5]=A*f[1*4+1],p[6]=A*f[1*4+2],f!==p&&(p[8]=f[8],p[9]=f[9],p[10]=f[10]),p}function O(f,R){const d=R??new i(12);return d[0]=f[0],d[1]=0,d[2]=0,d[4]=0,d[5]=f[1],d[6]=0,d[8]=0,d[9]=0,d[10]=f[2],d}function J(f,R,d){const p=d??new i(12),T=R[0],A=R[1],G=R[2];return p[0]=T*f[0*4+0],p[1]=T*f[0*4+1],p[2]=T*f[0*4+2],p[4]=A*f[1*4+0],p[5]=A*f[1*4+1],p[6]=A*f[1*4+2],p[8]=G*f[2*4+0],p[9]=G*f[2*4+1],p[10]=G*f[2*4+2],p}function we(f,R){const d=R??new i(12);return d[0]=f,d[1]=0,d[2]=0,d[4]=0,d[5]=f,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Se(f,R,d){const p=d??new i(12);return p[0]=R*f[0*4+0],p[1]=R*f[0*4+1],p[2]=R*f[0*4+2],p[4]=R*f[1*4+0],p[5]=R*f[1*4+1],p[6]=R*f[1*4+2],f!==p&&(p[8]=f[8],p[9]=f[9],p[10]=f[10]),p}function Ae(f,R){const d=R??new i(12);return d[0]=f,d[1]=0,d[2]=0,d[4]=0,d[5]=f,d[6]=0,d[8]=0,d[9]=0,d[10]=f,d}function Ue(f,R,d){const p=d??new i(12);return p[0]=R*f[0*4+0],p[1]=R*f[0*4+1],p[2]=R*f[0*4+2],p[4]=R*f[1*4+0],p[5]=R*f[1*4+1],p[6]=R*f[1*4+2],p[8]=R*f[2*4+0],p[9]=R*f[2*4+1],p[10]=R*f[2*4+2],p}return{clone:z,create:m,set:_,fromMat4:S,fromQuat:M,negate:L,copy:P,equalsApproximately:F,equals:j,identity:B,transpose:te,inverse:W,invert:ee,determinant:Y,mul:X,multiply:q,setTranslation:le,getTranslation:de,getAxis:xe,setAxis:ke,getScaling:Ie,get3DScaling:Ne,translation:Oe,translate:Fe,rotation:Ze,rotate:Me,rotationX:Le,rotateX:Te,rotationY:We,rotateY:$e,rotationZ:He,rotateZ:oe,scaling:ce,scale:se,uniformScaling:we,uniformScale:Se,scaling3D:O,scale3D:J,uniformScaling3D:Ae,uniformScale3D:Ue}}const ed=new Map;function lm(i){let o=ed.get(i);return o||(o=am(i),ed.set(i,o)),o}function um(i){const o=js(i);function u(a,v,c,h,w,k,H,y,x,C,I,V,Q,K,pe,Pe){const fe=new i(16);return a!==void 0&&(fe[0]=a,v!==void 0&&(fe[1]=v,c!==void 0&&(fe[2]=c,h!==void 0&&(fe[3]=h,w!==void 0&&(fe[4]=w,k!==void 0&&(fe[5]=k,H!==void 0&&(fe[6]=H,y!==void 0&&(fe[7]=y,x!==void 0&&(fe[8]=x,C!==void 0&&(fe[9]=C,I!==void 0&&(fe[10]=I,V!==void 0&&(fe[11]=V,Q!==void 0&&(fe[12]=Q,K!==void 0&&(fe[13]=K,pe!==void 0&&(fe[14]=pe,Pe!==void 0&&(fe[15]=Pe)))))))))))))))),fe}function m(a,v,c,h,w,k,H,y,x,C,I,V,Q,K,pe,Pe,fe){const me=fe??new i(16);return me[0]=a,me[1]=v,me[2]=c,me[3]=h,me[4]=w,me[5]=k,me[6]=H,me[7]=y,me[8]=x,me[9]=C,me[10]=I,me[11]=V,me[12]=Q,me[13]=K,me[14]=pe,me[15]=Pe,me}function _(a,v){const c=v??new i(16);return c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=0,c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=0,c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function S(a,v){const c=v??new i(16),h=a[0],w=a[1],k=a[2],H=a[3],y=h+h,x=w+w,C=k+k,I=h*y,V=w*y,Q=w*x,K=k*y,pe=k*x,Pe=k*C,fe=H*y,me=H*x,De=H*C;return c[0]=1-Q-Pe,c[1]=V+De,c[2]=K-me,c[3]=0,c[4]=V-De,c[5]=1-I-Pe,c[6]=pe+fe,c[7]=0,c[8]=K+me,c[9]=pe-fe,c[10]=1-I-Q,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function M(a,v){const c=v??new i(16);return c[0]=-a[0],c[1]=-a[1],c[2]=-a[2],c[3]=-a[3],c[4]=-a[4],c[5]=-a[5],c[6]=-a[6],c[7]=-a[7],c[8]=-a[8],c[9]=-a[9],c[10]=-a[10],c[11]=-a[11],c[12]=-a[12],c[13]=-a[13],c[14]=-a[14],c[15]=-a[15],c}function L(a,v){const c=v??new i(16);return c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15],c}const P=L;function z(a,v){return Math.abs(a[0]-v[0])<be&&Math.abs(a[1]-v[1])<be&&Math.abs(a[2]-v[2])<be&&Math.abs(a[3]-v[3])<be&&Math.abs(a[4]-v[4])<be&&Math.abs(a[5]-v[5])<be&&Math.abs(a[6]-v[6])<be&&Math.abs(a[7]-v[7])<be&&Math.abs(a[8]-v[8])<be&&Math.abs(a[9]-v[9])<be&&Math.abs(a[10]-v[10])<be&&Math.abs(a[11]-v[11])<be&&Math.abs(a[12]-v[12])<be&&Math.abs(a[13]-v[13])<be&&Math.abs(a[14]-v[14])<be&&Math.abs(a[15]-v[15])<be}function F(a,v){return a[0]===v[0]&&a[1]===v[1]&&a[2]===v[2]&&a[3]===v[3]&&a[4]===v[4]&&a[5]===v[5]&&a[6]===v[6]&&a[7]===v[7]&&a[8]===v[8]&&a[9]===v[9]&&a[10]===v[10]&&a[11]===v[11]&&a[12]===v[12]&&a[13]===v[13]&&a[14]===v[14]&&a[15]===v[15]}function j(a){const v=a??new i(16);return v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,v}function B(a,v){const c=v??new i(16);if(c===a){let Be;return Be=a[1],a[1]=a[4],a[4]=Be,Be=a[2],a[2]=a[8],a[8]=Be,Be=a[3],a[3]=a[12],a[12]=Be,Be=a[6],a[6]=a[9],a[9]=Be,Be=a[7],a[7]=a[13],a[13]=Be,Be=a[11],a[11]=a[14],a[14]=Be,c}const h=a[0*4+0],w=a[0*4+1],k=a[0*4+2],H=a[0*4+3],y=a[1*4+0],x=a[1*4+1],C=a[1*4+2],I=a[1*4+3],V=a[2*4+0],Q=a[2*4+1],K=a[2*4+2],pe=a[2*4+3],Pe=a[3*4+0],fe=a[3*4+1],me=a[3*4+2],De=a[3*4+3];return c[0]=h,c[1]=y,c[2]=V,c[3]=Pe,c[4]=w,c[5]=x,c[6]=Q,c[7]=fe,c[8]=k,c[9]=C,c[10]=K,c[11]=me,c[12]=H,c[13]=I,c[14]=pe,c[15]=De,c}function te(a,v){const c=v??new i(16),h=a[0*4+0],w=a[0*4+1],k=a[0*4+2],H=a[0*4+3],y=a[1*4+0],x=a[1*4+1],C=a[1*4+2],I=a[1*4+3],V=a[2*4+0],Q=a[2*4+1],K=a[2*4+2],pe=a[2*4+3],Pe=a[3*4+0],fe=a[3*4+1],me=a[3*4+2],De=a[3*4+3],Be=K*De,Qe=me*pe,lt=C*De,nt=me*I,ut=C*pe,ft=K*I,ht=k*De,pt=me*H,rt=k*pe,it=K*H,_t=k*I,wt=C*H,St=V*fe,xt=Pe*Q,Lt=y*fe,Mt=Pe*x,zt=y*Q,cn=V*x,Cn=h*fe,dn=Pe*w,hr=h*Q,fn=V*w,Sn=h*x,xn=y*w,pr=Be*x+nt*Q+ut*fe-(Qe*x+lt*Q+ft*fe),Pi=Qe*w+ht*Q+it*fe-(Be*w+pt*Q+rt*fe),Ai=lt*w+pt*x+_t*fe-(nt*w+ht*x+wt*fe),Li=ft*w+rt*x+wt*Q-(ut*w+it*x+_t*Q),Je=1/(h*pr+y*Pi+V*Ai+Pe*Li);return c[0]=Je*pr,c[1]=Je*Pi,c[2]=Je*Ai,c[3]=Je*Li,c[4]=Je*(Qe*y+lt*V+ft*Pe-(Be*y+nt*V+ut*Pe)),c[5]=Je*(Be*h+pt*V+rt*Pe-(Qe*h+ht*V+it*Pe)),c[6]=Je*(nt*h+ht*y+wt*Pe-(lt*h+pt*y+_t*Pe)),c[7]=Je*(ut*h+it*y+_t*V-(ft*h+rt*y+wt*V)),c[8]=Je*(St*I+Mt*pe+zt*De-(xt*I+Lt*pe+cn*De)),c[9]=Je*(xt*H+Cn*pe+fn*De-(St*H+dn*pe+hr*De)),c[10]=Je*(Lt*H+dn*I+Sn*De-(Mt*H+Cn*I+xn*De)),c[11]=Je*(cn*H+hr*I+xn*pe-(zt*H+fn*I+Sn*pe)),c[12]=Je*(Lt*K+cn*me+xt*C-(zt*me+St*C+Mt*K)),c[13]=Je*(hr*me+St*k+dn*K-(Cn*K+fn*me+xt*k)),c[14]=Je*(Cn*C+xn*me+Mt*k-(Sn*me+Lt*k+dn*C)),c[15]=Je*(Sn*K+zt*k+fn*C-(hr*C+xn*K+cn*k)),c}function W(a){const v=a[0],c=a[0*4+1],h=a[0*4+2],w=a[0*4+3],k=a[1*4+0],H=a[1*4+1],y=a[1*4+2],x=a[1*4+3],C=a[2*4+0],I=a[2*4+1],V=a[2*4+2],Q=a[2*4+3],K=a[3*4+0],pe=a[3*4+1],Pe=a[3*4+2],fe=a[3*4+3],me=V*fe,De=Pe*Q,Be=y*fe,Qe=Pe*x,lt=y*Q,nt=V*x,ut=h*fe,ft=Pe*w,ht=h*Q,pt=V*w,rt=h*x,it=y*w,_t=me*H+Qe*I+lt*pe-(De*H+Be*I+nt*pe),wt=De*c+ut*I+pt*pe-(me*c+ft*I+ht*pe),St=Be*c+ft*H+rt*pe-(Qe*c+ut*H+it*pe),xt=nt*c+ht*H+it*I-(lt*c+pt*H+rt*I);return v*_t+k*wt+C*St+K*xt}const Y=te;function ee(a,v,c){const h=c??new i(16),w=a[0],k=a[1],H=a[2],y=a[3],x=a[4],C=a[5],I=a[6],V=a[7],Q=a[8],K=a[9],pe=a[10],Pe=a[11],fe=a[12],me=a[13],De=a[14],Be=a[15],Qe=v[0],lt=v[1],nt=v[2],ut=v[3],ft=v[4],ht=v[5],pt=v[6],rt=v[7],it=v[8],_t=v[9],wt=v[10],St=v[11],xt=v[12],Lt=v[13],Mt=v[14],zt=v[15];return h[0]=w*Qe+x*lt+Q*nt+fe*ut,h[1]=k*Qe+C*lt+K*nt+me*ut,h[2]=H*Qe+I*lt+pe*nt+De*ut,h[3]=y*Qe+V*lt+Pe*nt+Be*ut,h[4]=w*ft+x*ht+Q*pt+fe*rt,h[5]=k*ft+C*ht+K*pt+me*rt,h[6]=H*ft+I*ht+pe*pt+De*rt,h[7]=y*ft+V*ht+Pe*pt+Be*rt,h[8]=w*it+x*_t+Q*wt+fe*St,h[9]=k*it+C*_t+K*wt+me*St,h[10]=H*it+I*_t+pe*wt+De*St,h[11]=y*it+V*_t+Pe*wt+Be*St,h[12]=w*xt+x*Lt+Q*Mt+fe*zt,h[13]=k*xt+C*Lt+K*Mt+me*zt,h[14]=H*xt+I*Lt+pe*Mt+De*zt,h[15]=y*xt+V*Lt+Pe*Mt+Be*zt,h}const q=ee;function X(a,v,c){const h=c??j();return a!==h&&(h[0]=a[0],h[1]=a[1],h[2]=a[2],h[3]=a[3],h[4]=a[4],h[5]=a[5],h[6]=a[6],h[7]=a[7],h[8]=a[8],h[9]=a[9],h[10]=a[10],h[11]=a[11]),h[12]=v[0],h[13]=v[1],h[14]=v[2],h[15]=1,h}function le(a,v){const c=v??o.create();return c[0]=a[12],c[1]=a[13],c[2]=a[14],c}function de(a,v,c){const h=c??o.create(),w=v*4;return h[0]=a[w+0],h[1]=a[w+1],h[2]=a[w+2],h}function xe(a,v,c,h){const w=h===a?h:L(a,h),k=c*4;return w[k+0]=v[0],w[k+1]=v[1],w[k+2]=v[2],w}function ke(a,v){const c=v??o.create(),h=a[0],w=a[1],k=a[2],H=a[4],y=a[5],x=a[6],C=a[8],I=a[9],V=a[10];return c[0]=Math.sqrt(h*h+w*w+k*k),c[1]=Math.sqrt(H*H+y*y+x*x),c[2]=Math.sqrt(C*C+I*I+V*V),c}function Ie(a,v,c,h,w){const k=w??new i(16),H=Math.tan(Math.PI*.5-.5*a);if(k[0]=H/v,k[1]=0,k[2]=0,k[3]=0,k[4]=0,k[5]=H,k[6]=0,k[7]=0,k[8]=0,k[9]=0,k[11]=-1,k[12]=0,k[13]=0,k[15]=0,Number.isFinite(h)){const y=1/(c-h);k[10]=h*y,k[14]=h*c*y}else k[10]=-1,k[14]=-c;return k}function Ne(a,v,c,h=1/0,w){const k=w??new i(16),H=1/Math.tan(a*.5);if(k[0]=H/v,k[1]=0,k[2]=0,k[3]=0,k[4]=0,k[5]=H,k[6]=0,k[7]=0,k[8]=0,k[9]=0,k[11]=-1,k[12]=0,k[13]=0,k[15]=0,h===1/0)k[10]=0,k[14]=c;else{const y=1/(h-c);k[10]=c*y,k[14]=h*c*y}return k}function Oe(a,v,c,h,w,k,H){const y=H??new i(16);return y[0]=2/(v-a),y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2/(h-c),y[6]=0,y[7]=0,y[8]=0,y[9]=0,y[10]=1/(w-k),y[11]=0,y[12]=(v+a)/(a-v),y[13]=(h+c)/(c-h),y[14]=w/(w-k),y[15]=1,y}function Fe(a,v,c,h,w,k,H){const y=H??new i(16),x=v-a,C=h-c,I=w-k;return y[0]=2*w/x,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*w/C,y[6]=0,y[7]=0,y[8]=(a+v)/x,y[9]=(h+c)/C,y[10]=k/I,y[11]=-1,y[12]=0,y[13]=0,y[14]=w*k/I,y[15]=0,y}function Ze(a,v,c,h,w,k=1/0,H){const y=H??new i(16),x=v-a,C=h-c;if(y[0]=2*w/x,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*w/C,y[6]=0,y[7]=0,y[8]=(a+v)/x,y[9]=(h+c)/C,y[11]=-1,y[12]=0,y[13]=0,y[15]=0,k===1/0)y[10]=0,y[14]=w;else{const I=1/(k-w);y[10]=w*I,y[14]=k*w*I}return y}const Me=o.create(),Le=o.create(),Te=o.create();function We(a,v,c,h){const w=h??new i(16);return o.normalize(o.subtract(v,a,Te),Te),o.normalize(o.cross(c,Te,Me),Me),o.normalize(o.cross(Te,Me,Le),Le),w[0]=Me[0],w[1]=Me[1],w[2]=Me[2],w[3]=0,w[4]=Le[0],w[5]=Le[1],w[6]=Le[2],w[7]=0,w[8]=Te[0],w[9]=Te[1],w[10]=Te[2],w[11]=0,w[12]=a[0],w[13]=a[1],w[14]=a[2],w[15]=1,w}function $e(a,v,c,h){const w=h??new i(16);return o.normalize(o.subtract(a,v,Te),Te),o.normalize(o.cross(c,Te,Me),Me),o.normalize(o.cross(Te,Me,Le),Le),w[0]=Me[0],w[1]=Me[1],w[2]=Me[2],w[3]=0,w[4]=Le[0],w[5]=Le[1],w[6]=Le[2],w[7]=0,w[8]=Te[0],w[9]=Te[1],w[10]=Te[2],w[11]=0,w[12]=a[0],w[13]=a[1],w[14]=a[2],w[15]=1,w}function He(a,v,c,h){const w=h??new i(16);return o.normalize(o.subtract(a,v,Te),Te),o.normalize(o.cross(c,Te,Me),Me),o.normalize(o.cross(Te,Me,Le),Le),w[0]=Me[0],w[1]=Le[0],w[2]=Te[0],w[3]=0,w[4]=Me[1],w[5]=Le[1],w[6]=Te[1],w[7]=0,w[8]=Me[2],w[9]=Le[2],w[10]=Te[2],w[11]=0,w[12]=-(Me[0]*a[0]+Me[1]*a[1]+Me[2]*a[2]),w[13]=-(Le[0]*a[0]+Le[1]*a[1]+Le[2]*a[2]),w[14]=-(Te[0]*a[0]+Te[1]*a[1]+Te[2]*a[2]),w[15]=1,w}function oe(a,v){const c=v??new i(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=a[0],c[13]=a[1],c[14]=a[2],c[15]=1,c}function ce(a,v,c){const h=c??new i(16),w=v[0],k=v[1],H=v[2],y=a[0],x=a[1],C=a[2],I=a[3],V=a[1*4+0],Q=a[1*4+1],K=a[1*4+2],pe=a[1*4+3],Pe=a[2*4+0],fe=a[2*4+1],me=a[2*4+2],De=a[2*4+3],Be=a[3*4+0],Qe=a[3*4+1],lt=a[3*4+2],nt=a[3*4+3];return a!==h&&(h[0]=y,h[1]=x,h[2]=C,h[3]=I,h[4]=V,h[5]=Q,h[6]=K,h[7]=pe,h[8]=Pe,h[9]=fe,h[10]=me,h[11]=De),h[12]=y*w+V*k+Pe*H+Be,h[13]=x*w+Q*k+fe*H+Qe,h[14]=C*w+K*k+me*H+lt,h[15]=I*w+pe*k+De*H+nt,h}function se(a,v){const c=v??new i(16),h=Math.cos(a),w=Math.sin(a);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=h,c[6]=w,c[7]=0,c[8]=0,c[9]=-w,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function O(a,v,c){const h=c??new i(16),w=a[4],k=a[5],H=a[6],y=a[7],x=a[8],C=a[9],I=a[10],V=a[11],Q=Math.cos(v),K=Math.sin(v);return h[4]=Q*w+K*x,h[5]=Q*k+K*C,h[6]=Q*H+K*I,h[7]=Q*y+K*V,h[8]=Q*x-K*w,h[9]=Q*C-K*k,h[10]=Q*I-K*H,h[11]=Q*V-K*y,a!==h&&(h[0]=a[0],h[1]=a[1],h[2]=a[2],h[3]=a[3],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function J(a,v){const c=v??new i(16),h=Math.cos(a),w=Math.sin(a);return c[0]=h,c[1]=0,c[2]=-w,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=w,c[9]=0,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function we(a,v,c){const h=c??new i(16),w=a[0*4+0],k=a[0*4+1],H=a[0*4+2],y=a[0*4+3],x=a[2*4+0],C=a[2*4+1],I=a[2*4+2],V=a[2*4+3],Q=Math.cos(v),K=Math.sin(v);return h[0]=Q*w-K*x,h[1]=Q*k-K*C,h[2]=Q*H-K*I,h[3]=Q*y-K*V,h[8]=Q*x+K*w,h[9]=Q*C+K*k,h[10]=Q*I+K*H,h[11]=Q*V+K*y,a!==h&&(h[4]=a[4],h[5]=a[5],h[6]=a[6],h[7]=a[7],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function Se(a,v){const c=v??new i(16),h=Math.cos(a),w=Math.sin(a);return c[0]=h,c[1]=w,c[2]=0,c[3]=0,c[4]=-w,c[5]=h,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Ae(a,v,c){const h=c??new i(16),w=a[0*4+0],k=a[0*4+1],H=a[0*4+2],y=a[0*4+3],x=a[1*4+0],C=a[1*4+1],I=a[1*4+2],V=a[1*4+3],Q=Math.cos(v),K=Math.sin(v);return h[0]=Q*w+K*x,h[1]=Q*k+K*C,h[2]=Q*H+K*I,h[3]=Q*y+K*V,h[4]=Q*x-K*w,h[5]=Q*C-K*k,h[6]=Q*I-K*H,h[7]=Q*V-K*y,a!==h&&(h[8]=a[8],h[9]=a[9],h[10]=a[10],h[11]=a[11],h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function Ue(a,v,c){const h=c??new i(16);let w=a[0],k=a[1],H=a[2];const y=Math.sqrt(w*w+k*k+H*H);w/=y,k/=y,H/=y;const x=w*w,C=k*k,I=H*H,V=Math.cos(v),Q=Math.sin(v),K=1-V;return h[0]=x+(1-x)*V,h[1]=w*k*K+H*Q,h[2]=w*H*K-k*Q,h[3]=0,h[4]=w*k*K-H*Q,h[5]=C+(1-C)*V,h[6]=k*H*K+w*Q,h[7]=0,h[8]=w*H*K+k*Q,h[9]=k*H*K-w*Q,h[10]=I+(1-I)*V,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const f=Ue;function R(a,v,c,h){const w=h??new i(16);let k=v[0],H=v[1],y=v[2];const x=Math.sqrt(k*k+H*H+y*y);k/=x,H/=x,y/=x;const C=k*k,I=H*H,V=y*y,Q=Math.cos(c),K=Math.sin(c),pe=1-Q,Pe=C+(1-C)*Q,fe=k*H*pe+y*K,me=k*y*pe-H*K,De=k*H*pe-y*K,Be=I+(1-I)*Q,Qe=H*y*pe+k*K,lt=k*y*pe+H*K,nt=H*y*pe-k*K,ut=V+(1-V)*Q,ft=a[0],ht=a[1],pt=a[2],rt=a[3],it=a[4],_t=a[5],wt=a[6],St=a[7],xt=a[8],Lt=a[9],Mt=a[10],zt=a[11];return w[0]=Pe*ft+fe*it+me*xt,w[1]=Pe*ht+fe*_t+me*Lt,w[2]=Pe*pt+fe*wt+me*Mt,w[3]=Pe*rt+fe*St+me*zt,w[4]=De*ft+Be*it+Qe*xt,w[5]=De*ht+Be*_t+Qe*Lt,w[6]=De*pt+Be*wt+Qe*Mt,w[7]=De*rt+Be*St+Qe*zt,w[8]=lt*ft+nt*it+ut*xt,w[9]=lt*ht+nt*_t+ut*Lt,w[10]=lt*pt+nt*wt+ut*Mt,w[11]=lt*rt+nt*St+ut*zt,a!==w&&(w[12]=a[12],w[13]=a[13],w[14]=a[14],w[15]=a[15]),w}const d=R;function p(a,v){const c=v??new i(16);return c[0]=a[0],c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=a[1],c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function T(a,v,c){const h=c??new i(16),w=v[0],k=v[1],H=v[2];return h[0]=w*a[0*4+0],h[1]=w*a[0*4+1],h[2]=w*a[0*4+2],h[3]=w*a[0*4+3],h[4]=k*a[1*4+0],h[5]=k*a[1*4+1],h[6]=k*a[1*4+2],h[7]=k*a[1*4+3],h[8]=H*a[2*4+0],h[9]=H*a[2*4+1],h[10]=H*a[2*4+2],h[11]=H*a[2*4+3],a!==h&&(h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}function A(a,v){const c=v??new i(16);return c[0]=a,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=a,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=a,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function G(a,v,c){const h=c??new i(16);return h[0]=v*a[0*4+0],h[1]=v*a[0*4+1],h[2]=v*a[0*4+2],h[3]=v*a[0*4+3],h[4]=v*a[1*4+0],h[5]=v*a[1*4+1],h[6]=v*a[1*4+2],h[7]=v*a[1*4+3],h[8]=v*a[2*4+0],h[9]=v*a[2*4+1],h[10]=v*a[2*4+2],h[11]=v*a[2*4+3],a!==h&&(h[12]=a[12],h[13]=a[13],h[14]=a[14],h[15]=a[15]),h}return{create:u,set:m,fromMat3:_,fromQuat:S,negate:M,copy:L,clone:P,equalsApproximately:z,equals:F,identity:j,transpose:B,inverse:te,determinant:W,invert:Y,multiply:ee,mul:q,setTranslation:X,getTranslation:le,getAxis:de,setAxis:xe,getScaling:ke,perspective:Ie,perspectiveReverseZ:Ne,ortho:Oe,frustum:Fe,frustumReverseZ:Ze,aim:We,cameraAim:$e,lookAt:He,translation:oe,translate:ce,rotationX:se,rotateX:O,rotationY:J,rotateY:we,rotationZ:Se,rotateZ:Ae,axisRotation:Ue,rotation:f,axisRotate:R,rotate:d,scaling:p,scale:T,uniformScaling:A,uniformScale:G}}const td=new Map;function cm(i){let o=td.get(i);return o||(o=um(i),td.set(i,o)),o}function dm(i){const o=js(i);function u(f,R,d,p){const T=new i(4);return f!==void 0&&(T[0]=f,R!==void 0&&(T[1]=R,d!==void 0&&(T[2]=d,p!==void 0&&(T[3]=p)))),T}const m=u;function _(f,R,d,p,T){const A=T??new i(4);return A[0]=f,A[1]=R,A[2]=d,A[3]=p,A}function S(f,R,d){const p=d??new i(4),T=R*.5,A=Math.sin(T);return p[0]=A*f[0],p[1]=A*f[1],p[2]=A*f[2],p[3]=Math.cos(T),p}function M(f,R){const d=R??o.create(3),p=Math.acos(f[3])*2,T=Math.sin(p*.5);return T>be?(d[0]=f[0]/T,d[1]=f[1]/T,d[2]=f[2]/T):(d[0]=1,d[1]=0,d[2]=0),{angle:p,axis:d}}function L(f,R){const d=Fe(f,R);return Math.acos(2*d*d-1)}function P(f,R,d){const p=d??new i(4),T=f[0],A=f[1],G=f[2],a=f[3],v=R[0],c=R[1],h=R[2],w=R[3];return p[0]=T*w+a*v+A*h-G*c,p[1]=A*w+a*c+G*v-T*h,p[2]=G*w+a*h+T*c-A*v,p[3]=a*w-T*v-A*c-G*h,p}const z=P;function F(f,R,d){const p=d??new i(4),T=R*.5,A=f[0],G=f[1],a=f[2],v=f[3],c=Math.sin(T),h=Math.cos(T);return p[0]=A*h+v*c,p[1]=G*h+a*c,p[2]=a*h-G*c,p[3]=v*h-A*c,p}function j(f,R,d){const p=d??new i(4),T=R*.5,A=f[0],G=f[1],a=f[2],v=f[3],c=Math.sin(T),h=Math.cos(T);return p[0]=A*h-a*c,p[1]=G*h+v*c,p[2]=a*h+A*c,p[3]=v*h-G*c,p}function B(f,R,d){const p=d??new i(4),T=R*.5,A=f[0],G=f[1],a=f[2],v=f[3],c=Math.sin(T),h=Math.cos(T);return p[0]=A*h+G*c,p[1]=G*h-A*c,p[2]=a*h+v*c,p[3]=v*h-a*c,p}function te(f,R,d,p){const T=p??new i(4),A=f[0],G=f[1],a=f[2],v=f[3];let c=R[0],h=R[1],w=R[2],k=R[3],H=A*c+G*h+a*w+v*k;H<0&&(H=-H,c=-c,h=-h,w=-w,k=-k);let y,x;if(1-H>be){const C=Math.acos(H),I=Math.sin(C);y=Math.sin((1-d)*C)/I,x=Math.sin(d*C)/I}else y=1-d,x=d;return T[0]=y*A+x*c,T[1]=y*G+x*h,T[2]=y*a+x*w,T[3]=y*v+x*k,T}function W(f,R){const d=R??new i(4),p=f[0],T=f[1],A=f[2],G=f[3],a=p*p+T*T+A*A+G*G,v=a?1/a:0;return d[0]=-p*v,d[1]=-T*v,d[2]=-A*v,d[3]=G*v,d}function Y(f,R){const d=R??new i(4);return d[0]=-f[0],d[1]=-f[1],d[2]=-f[2],d[3]=f[3],d}function ee(f,R){const d=R??new i(4),p=f[0]+f[5]+f[10];if(p>0){const T=Math.sqrt(p+1);d[3]=.5*T;const A=.5/T;d[0]=(f[6]-f[9])*A,d[1]=(f[8]-f[2])*A,d[2]=(f[1]-f[4])*A}else{let T=0;f[5]>f[0]&&(T=1),f[10]>f[T*4+T]&&(T=2);const A=(T+1)%3,G=(T+2)%3,a=Math.sqrt(f[T*4+T]-f[A*4+A]-f[G*4+G]+1);d[T]=.5*a;const v=.5/a;d[3]=(f[A*4+G]-f[G*4+A])*v,d[A]=(f[A*4+T]+f[T*4+A])*v,d[G]=(f[G*4+T]+f[T*4+G])*v}return d}function q(f,R,d,p,T){const A=T??new i(4),G=f*.5,a=R*.5,v=d*.5,c=Math.sin(G),h=Math.cos(G),w=Math.sin(a),k=Math.cos(a),H=Math.sin(v),y=Math.cos(v);switch(p){case"xyz":A[0]=c*k*y+h*w*H,A[1]=h*w*y-c*k*H,A[2]=h*k*H+c*w*y,A[3]=h*k*y-c*w*H;break;case"xzy":A[0]=c*k*y-h*w*H,A[1]=h*w*y-c*k*H,A[2]=h*k*H+c*w*y,A[3]=h*k*y+c*w*H;break;case"yxz":A[0]=c*k*y+h*w*H,A[1]=h*w*y-c*k*H,A[2]=h*k*H-c*w*y,A[3]=h*k*y+c*w*H;break;case"yzx":A[0]=c*k*y+h*w*H,A[1]=h*w*y+c*k*H,A[2]=h*k*H-c*w*y,A[3]=h*k*y-c*w*H;break;case"zxy":A[0]=c*k*y-h*w*H,A[1]=h*w*y+c*k*H,A[2]=h*k*H+c*w*y,A[3]=h*k*y-c*w*H;break;case"zyx":A[0]=c*k*y-h*w*H,A[1]=h*w*y+c*k*H,A[2]=h*k*H-c*w*y,A[3]=h*k*y+c*w*H;break;default:throw new Error(`Unknown rotation order: ${p}`)}return A}function X(f,R){const d=R??new i(4);return d[0]=f[0],d[1]=f[1],d[2]=f[2],d[3]=f[3],d}const le=X;function de(f,R,d){const p=d??new i(4);return p[0]=f[0]+R[0],p[1]=f[1]+R[1],p[2]=f[2]+R[2],p[3]=f[3]+R[3],p}function xe(f,R,d){const p=d??new i(4);return p[0]=f[0]-R[0],p[1]=f[1]-R[1],p[2]=f[2]-R[2],p[3]=f[3]-R[3],p}const ke=xe;function Ie(f,R,d){const p=d??new i(4);return p[0]=f[0]*R,p[1]=f[1]*R,p[2]=f[2]*R,p[3]=f[3]*R,p}const Ne=Ie;function Oe(f,R,d){const p=d??new i(4);return p[0]=f[0]/R,p[1]=f[1]/R,p[2]=f[2]/R,p[3]=f[3]/R,p}function Fe(f,R){return f[0]*R[0]+f[1]*R[1]+f[2]*R[2]+f[3]*R[3]}function Ze(f,R,d,p){const T=p??new i(4);return T[0]=f[0]+d*(R[0]-f[0]),T[1]=f[1]+d*(R[1]-f[1]),T[2]=f[2]+d*(R[2]-f[2]),T[3]=f[3]+d*(R[3]-f[3]),T}function Me(f){const R=f[0],d=f[1],p=f[2],T=f[3];return Math.sqrt(R*R+d*d+p*p+T*T)}const Le=Me;function Te(f){const R=f[0],d=f[1],p=f[2],T=f[3];return R*R+d*d+p*p+T*T}const We=Te;function $e(f,R){const d=R??new i(4),p=f[0],T=f[1],A=f[2],G=f[3],a=Math.sqrt(p*p+T*T+A*A+G*G);return a>1e-5?(d[0]=p/a,d[1]=T/a,d[2]=A/a,d[3]=G/a):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function He(f,R){return Math.abs(f[0]-R[0])<be&&Math.abs(f[1]-R[1])<be&&Math.abs(f[2]-R[2])<be&&Math.abs(f[3]-R[3])<be}function oe(f,R){return f[0]===R[0]&&f[1]===R[1]&&f[2]===R[2]&&f[3]===R[3]}function ce(f){const R=f??new i(4);return R[0]=0,R[1]=0,R[2]=0,R[3]=1,R}const se=o.create(),O=o.create(),J=o.create();function we(f,R,d){const p=d??new i(4),T=o.dot(f,R);return T<-.999999?(o.cross(O,f,se),o.len(se)<1e-6&&o.cross(J,f,se),o.normalize(se,se),S(se,Math.PI,p),p):T>.999999?(p[0]=0,p[1]=0,p[2]=0,p[3]=1,p):(o.cross(f,R,se),p[0]=se[0],p[1]=se[1],p[2]=se[2],p[3]=1+T,$e(p,p))}const Se=new i(4),Ae=new i(4);function Ue(f,R,d,p,T,A){const G=A??new i(4);return te(f,p,T,Se),te(R,d,T,Ae),te(Se,Ae,2*T*(1-T),G),G}return{create:u,fromValues:m,set:_,fromAxisAngle:S,toAxisAngle:M,angle:L,multiply:P,mul:z,rotateX:F,rotateY:j,rotateZ:B,slerp:te,inverse:W,conjugate:Y,fromMat:ee,fromEuler:q,copy:X,clone:le,add:de,subtract:xe,sub:ke,mulScalar:Ie,scale:Ne,divScalar:Oe,dot:Fe,lerp:Ze,length:Me,len:Le,lengthSq:Te,lenSq:We,normalize:$e,equalsApproximately:He,equals:oe,identity:ce,rotationTo:we,sqlerp:Ue}}const nd=new Map;function fm(i){let o=nd.get(i);return o||(o=dm(i),nd.set(i,o)),o}function hm(i){function o(d,p,T,A){const G=new i(4);return d!==void 0&&(G[0]=d,p!==void 0&&(G[1]=p,T!==void 0&&(G[2]=T,A!==void 0&&(G[3]=A)))),G}const u=o;function m(d,p,T,A,G){const a=G??new i(4);return a[0]=d,a[1]=p,a[2]=T,a[3]=A,a}function _(d,p){const T=p??new i(4);return T[0]=Math.ceil(d[0]),T[1]=Math.ceil(d[1]),T[2]=Math.ceil(d[2]),T[3]=Math.ceil(d[3]),T}function S(d,p){const T=p??new i(4);return T[0]=Math.floor(d[0]),T[1]=Math.floor(d[1]),T[2]=Math.floor(d[2]),T[3]=Math.floor(d[3]),T}function M(d,p){const T=p??new i(4);return T[0]=Math.round(d[0]),T[1]=Math.round(d[1]),T[2]=Math.round(d[2]),T[3]=Math.round(d[3]),T}function L(d,p=0,T=1,A){const G=A??new i(4);return G[0]=Math.min(T,Math.max(p,d[0])),G[1]=Math.min(T,Math.max(p,d[1])),G[2]=Math.min(T,Math.max(p,d[2])),G[3]=Math.min(T,Math.max(p,d[3])),G}function P(d,p,T){const A=T??new i(4);return A[0]=d[0]+p[0],A[1]=d[1]+p[1],A[2]=d[2]+p[2],A[3]=d[3]+p[3],A}function z(d,p,T,A){const G=A??new i(4);return G[0]=d[0]+p[0]*T,G[1]=d[1]+p[1]*T,G[2]=d[2]+p[2]*T,G[3]=d[3]+p[3]*T,G}function F(d,p,T){const A=T??new i(4);return A[0]=d[0]-p[0],A[1]=d[1]-p[1],A[2]=d[2]-p[2],A[3]=d[3]-p[3],A}const j=F;function B(d,p){return Math.abs(d[0]-p[0])<be&&Math.abs(d[1]-p[1])<be&&Math.abs(d[2]-p[2])<be&&Math.abs(d[3]-p[3])<be}function te(d,p){return d[0]===p[0]&&d[1]===p[1]&&d[2]===p[2]&&d[3]===p[3]}function W(d,p,T,A){const G=A??new i(4);return G[0]=d[0]+T*(p[0]-d[0]),G[1]=d[1]+T*(p[1]-d[1]),G[2]=d[2]+T*(p[2]-d[2]),G[3]=d[3]+T*(p[3]-d[3]),G}function Y(d,p,T,A){const G=A??new i(4);return G[0]=d[0]+T[0]*(p[0]-d[0]),G[1]=d[1]+T[1]*(p[1]-d[1]),G[2]=d[2]+T[2]*(p[2]-d[2]),G[3]=d[3]+T[3]*(p[3]-d[3]),G}function ee(d,p,T){const A=T??new i(4);return A[0]=Math.max(d[0],p[0]),A[1]=Math.max(d[1],p[1]),A[2]=Math.max(d[2],p[2]),A[3]=Math.max(d[3],p[3]),A}function q(d,p,T){const A=T??new i(4);return A[0]=Math.min(d[0],p[0]),A[1]=Math.min(d[1],p[1]),A[2]=Math.min(d[2],p[2]),A[3]=Math.min(d[3],p[3]),A}function X(d,p,T){const A=T??new i(4);return A[0]=d[0]*p,A[1]=d[1]*p,A[2]=d[2]*p,A[3]=d[3]*p,A}const le=X;function de(d,p,T){const A=T??new i(4);return A[0]=d[0]/p,A[1]=d[1]/p,A[2]=d[2]/p,A[3]=d[3]/p,A}function xe(d,p){const T=p??new i(4);return T[0]=1/d[0],T[1]=1/d[1],T[2]=1/d[2],T[3]=1/d[3],T}const ke=xe;function Ie(d,p){return d[0]*p[0]+d[1]*p[1]+d[2]*p[2]+d[3]*p[3]}function Ne(d){const p=d[0],T=d[1],A=d[2],G=d[3];return Math.sqrt(p*p+T*T+A*A+G*G)}const Oe=Ne;function Fe(d){const p=d[0],T=d[1],A=d[2],G=d[3];return p*p+T*T+A*A+G*G}const Ze=Fe;function Me(d,p){const T=d[0]-p[0],A=d[1]-p[1],G=d[2]-p[2],a=d[3]-p[3];return Math.sqrt(T*T+A*A+G*G+a*a)}const Le=Me;function Te(d,p){const T=d[0]-p[0],A=d[1]-p[1],G=d[2]-p[2],a=d[3]-p[3];return T*T+A*A+G*G+a*a}const We=Te;function $e(d,p){const T=p??new i(4),A=d[0],G=d[1],a=d[2],v=d[3],c=Math.sqrt(A*A+G*G+a*a+v*v);return c>1e-5?(T[0]=A/c,T[1]=G/c,T[2]=a/c,T[3]=v/c):(T[0]=0,T[1]=0,T[2]=0,T[3]=0),T}function He(d,p){const T=p??new i(4);return T[0]=-d[0],T[1]=-d[1],T[2]=-d[2],T[3]=-d[3],T}function oe(d,p){const T=p??new i(4);return T[0]=d[0],T[1]=d[1],T[2]=d[2],T[3]=d[3],T}const ce=oe;function se(d,p,T){const A=T??new i(4);return A[0]=d[0]*p[0],A[1]=d[1]*p[1],A[2]=d[2]*p[2],A[3]=d[3]*p[3],A}const O=se;function J(d,p,T){const A=T??new i(4);return A[0]=d[0]/p[0],A[1]=d[1]/p[1],A[2]=d[2]/p[2],A[3]=d[3]/p[3],A}const we=J;function Se(d){const p=d??new i(4);return p[0]=0,p[1]=0,p[2]=0,p[3]=0,p}function Ae(d,p,T){const A=T??new i(4),G=d[0],a=d[1],v=d[2],c=d[3];return A[0]=p[0]*G+p[4]*a+p[8]*v+p[12]*c,A[1]=p[1]*G+p[5]*a+p[9]*v+p[13]*c,A[2]=p[2]*G+p[6]*a+p[10]*v+p[14]*c,A[3]=p[3]*G+p[7]*a+p[11]*v+p[15]*c,A}function Ue(d,p,T){const A=T??new i(4);return $e(d,A),X(A,p,A)}function f(d,p,T){const A=T??new i(4);return Ne(d)>p?Ue(d,p,A):oe(d,A)}function R(d,p,T){const A=T??new i(4);return W(d,p,.5,A)}return{create:o,fromValues:u,set:m,ceil:_,floor:S,round:M,clamp:L,add:P,addScaled:z,subtract:F,sub:j,equalsApproximately:B,equals:te,lerp:W,lerpV:Y,max:ee,min:q,mulScalar:X,scale:le,divScalar:de,inverse:xe,invert:ke,dot:Ie,length:Ne,len:Oe,lengthSq:Fe,lenSq:Ze,distance:Me,dist:Le,distanceSq:Te,distSq:We,normalize:$e,negate:He,copy:oe,clone:ce,multiply:se,mul:O,divide:J,div:we,zero:Se,transformMat4:Ae,setLength:Ue,truncate:f,midpoint:R}}const rd=new Map;function pm(i){let o=rd.get(i);return o||(o=hm(i),rd.set(i,o)),o}function rl(i,o,u,m,_,S){return{mat3:lm(i),mat4:cm(o),quat:fm(u),vec2:Md(m),vec3:js(_),vec4:pm(S)}}const{mat3:og,mat4:Wt,quat:ag,vec2:br,vec3:Kn,vec4:gt}=rl(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);rl(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);rl(im,Array,Array,Array,Array,Array);const mm=new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]);class gm{constructor(o,u){Ce(this,"device");Ce(this,"presentFormat");Ce(this,"quit",!1);Ce(this,"pipeline");Ce(this,"vertexBuffer");Ce(this,"indexBuffer");Ce(this,"indexCount");Ce(this,"projViewModelBuffer");Ce(this,"projViewModelBindGroup");Ce(this,"supportedFeatures");this.device=o,this.presentFormat=u,this.supportedFeatures=o.features;const m=this.device.createShaderModule({code:nm}),_=new Float32Array([-1,-1,-1,1,0,0,0,1,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,-1,1,-1,1,0,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1]),S=new Uint32Array([0,1,2,0,2,3,1,5,6,1,6,2,2,6,7,2,7,3,4,7,6,4,6,5,0,3,7,0,7,4,0,4,5,0,5,1]);this.indexCount=S.length,this.vertexBuffer=this.device.createBuffer({size:_.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,_,0,_.length);const M=[{attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}],arrayStride:2*16,stepMode:"vertex"}];this.indexBuffer=this.device.createBuffer({size:S.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,S,0,S.length);const L=16*4;this.projViewModelBuffer=this.device.createBuffer({size:L,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const P=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.projViewModelBindGroup=this.device.createBindGroup({layout:P,entries:[{binding:0,resource:{buffer:this.projViewModelBuffer}}]});const z={vertex:{module:m,entryPoint:"vertex_main",buffers:M},fragment:{module:m,entryPoint:"fragment_main",targets:[{format:this.presentFormat}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},layout:this.device.createPipelineLayout({bindGroupLayouts:[P]})};this.pipeline=this.device.createRenderPipeline(z)}setupUI(o){mm.forEach(u=>{const m=this.supportedFeatures.has(u);o.add({enabled:m},"enabled").name(u).disable(!0)})}draw(o,u,m){const _=o.createView(),S=60*Math.PI/180,P=Wt.perspective(S,u,.1,1e3),z=[3,5,10],F=[0,0,0],j=[0,1,0],B=Wt.lookAt(z,F,j),te=Wt.axisRotation([1,1,0],m/1e3),W=Wt.mul(P,Wt.mul(B,te));this.device.queue.writeBuffer(this.projViewModelBuffer,0,W,0,W.length);const Y=this.device.createCommandEncoder(),ee={r:.5,g:.5,b:.5,a:0},q=Y.beginRenderPass({colorAttachments:[{clearValue:ee,loadOp:"clear",storeOp:"store",view:_}]});q.setPipeline(this.pipeline),q.setVertexBuffer(0,this.vertexBuffer),q.setIndexBuffer(this.indexBuffer,"uint32",0,this.indexBuffer.size),q.setBindGroup(0,this.projViewModelBindGroup),q.drawIndexed(this.indexCount,1,0,0,0),q.end(),this.device.queue.submit([Y.finish()])}}const vm=(i,o,u)=>new gm(i,o),ym=`struct Atmosphere
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
}`,Tm=`// Displace a grid of vertices representing the ocean surface, then rasterize into the gbuffer with a graphics pass

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
}`,Oa={width:2048,height:1024},id="rgba32float",il="float",sd="rgba32float",Pd="float",od="rgba32float",Rm="float",Va="rgba16float",Em="float",Ad="depth32float",$a="rgba16float",Mm="float",qa="rgba32float",ba={width:1024,height:1024},Na={width:1024,height:256};class Ws{constructor(o,u){Ce(this,"stagingBuffer");Ce(this,"buffer");this.stagingBuffer=new Float32Array(u),this.buffer=o.createBuffer({size:this.stagingBuffer.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM})}writeToGPU(o){this.stageFloats(),o.queue.writeBuffer(this.buffer,0,this.stagingBuffer,0,this.stagingBuffer.length)}}class Pm extends Ws{constructor(u){super(u,1);Ce(this,"data",{time_seconds:0})}stageFloats(){this.stagingBuffer[0]=this.data.time_seconds}}class Am extends Ws{constructor(u){super(u,52);Ce(this,"data",{inv_proj:Wt.identity(),inv_view:Wt.identity(),proj_view:Wt.identity(),position:gt.create(0,0,0,1)})}stageFloats(){this.stagingBuffer.set(this.data.inv_proj,0),this.stagingBuffer.set(this.data.inv_view,16),this.stagingBuffer.set(this.data.proj_view,32),this.stagingBuffer.set(this.data.position,48)}}class Lm extends Ws{constructor(u){super(u,8);Ce(this,"data",{color_gain:gt.create(1,1,1,1),vertex_scale:gt.create(1,1,1,1)})}stageFloats(){this.stagingBuffer.set(this.data.color_gain,0),this.stagingBuffer.set(this.data.vertex_scale,4)}}class zm extends Ws{constructor(u){super(u,8);Ce(this,"data",{light:{color:Kn.create(1,1,1),strength:100,forward:Kn.create(0,1,0),angularRadius:16/60*(3.141592653589793/180)}})}stageFloats(){this.stagingBuffer.set(this.data.light.color,0),this.stagingBuffer[3]=this.data.light.strength,this.stagingBuffer.set(this.data.light.forward,4),this.stagingBuffer[7]=this.data.light.angularRadius}}function ad(i,o,u){const m="GBuffer",_=i.createTexture({size:o,dimension:"2d",format:Va,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:m}),S=_.createView({label:m}),M=i.createTexture({size:o,dimension:"2d",format:$a,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:m}),L=M.createView({label:m}),P=(u==null?void 0:u.readGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Em}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Mm}}]}),z=i.createBindGroup({layout:P,entries:[{binding:0,resource:S},{binding:1,resource:L}],label:m}),F=(u==null?void 0:u.writeGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:Va}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:$a}}]}),j=i.createBindGroup({layout:F,entries:[{binding:0,resource:S},{binding:1,resource:L}],label:m}),B=i.createTexture({size:o,dimension:"2d",format:Ad,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:m}),te=B.createView({label:m});return{colorWithDepthInAlpha:_,colorWithDepthInAlphaView:S,normal:M,normalView:L,depth:B,depthView:te,readGroupLayout:P,readGroup:z,writeGroupLayout:F,writeGroup:j}}function Um(i,o){const u="Transmittance LUT",m=i.createTexture({size:o,dimension:"2d",format:id,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:u}),_=m.createView({label:u}),S=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:id}}],label:u}),M=i.createBindGroup({layout:S,entries:[{binding:0,resource:_}],label:u}),L=i.createShaderModule({code:ym,label:u}),P=i.createComputePipeline({compute:{module:L,entryPoint:"computeTransmittance"},layout:i.createPipelineLayout({bindGroupLayouts:[S]}),label:u});return{group0:M,pipeline:P,texture:m,view:_}}function Cm(i,o,u){const m="Multiscatter LUT",_=i.createTexture({size:o,dimension:"2d",format:sd,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:m}),S=_.createView({label:m}),M=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:sd}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:il}}],label:m}),L=i.createBindGroup({layout:M,entries:[{binding:0,resource:S},{binding:1,resource:i.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:u}],label:m}),P=i.createShaderModule({code:_m,label:m}),z=i.createComputePipeline({compute:{module:P,entryPoint:"computeMultiscattering"},layout:i.createPipelineLayout({bindGroupLayouts:[M]}),label:m});return{group0:L,pipeline:z,texture:_,view:S}}function km(i,o,u,m,_){const S="Skyview LUT",M=i.createTexture({size:o,dimension:"2d",format:od,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:S}),L=M.createView({label:S}),P=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:od}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:il}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:Pd}}],label:S}),z=i.createBindGroup({layout:P,entries:[{binding:0,resource:L},{binding:1,resource:i.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:u},{binding:3,resource:m}],label:S}),F=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}]}),j=i.createBindGroup({layout:F,entries:[{binding:0,resource:{buffer:_.buffer}}]}),B=i.createShaderModule({code:wm,label:S}),te=i.createComputePipeline({compute:{module:B,entryPoint:"computeSkyViewLuminance"},layout:i.createPipelineLayout({bindGroupLayouts:[P,F]}),label:S});return{group0:z,group1:j,pipeline:te,texture:M,view:L}}function Im(i,o,u){const m="Wave Surface Displacement",F=i.createBuffer({size:67108864,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE,label:m}),j=i.createBuffer({size:16*4194304,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE,label:m}),B=i.createBuffer({size:25141254*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX}),te=new Uint32Array(25141254);let W=0;for(let ce=0;ce<2047;ce++)for(let se=0;se<2047;se++){const O=se+ce*2048,J=O+1,we=O+2048,Se=we+1,Ae=new Uint32Array([O,we,J,J,we,Se]);te.set(Ae,W),W+=Ae.length}i.queue.writeBuffer(B,0,te,0,te.length);const Y=6,ee=4,q=4*ee,X=i.createBuffer({size:Y*q,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM}),le=9.8,de=60,xe=de*de*le/(2*Math.PI),ke=new Array({direction:br.create(1,2),amplitude:.75,wavelength:xe/(16*16)},{direction:br.create(1.2,2),amplitude:.75,wavelength:xe/(14*14)},{direction:br.create(.8,2),amplitude:.75,wavelength:xe/(12*12)},{direction:br.create(1.25,2),amplitude:.75,wavelength:xe/(16*16)},{direction:br.create(-2,1),amplitude:.1,wavelength:xe/(19*19)},{direction:br.create(0,1),amplitude:.1,wavelength:xe/(19*19)}),Ie=new Float32Array(Y*ee);let Ne=0;ke.forEach(ce=>{Ie.set(ce.direction,Ne),Ie[Ne+2]=ce.amplitude,Ie[Ne+3]=ce.wavelength,Ne+=4}),i.queue.writeBuffer(X,0,Ie);const Oe=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}],label:m}),Fe=i.createBindGroup({layout:Oe,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:X}}],label:m}),Ze=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}],label:m}),Me=i.createBindGroup({layout:Ze,entries:[{binding:0,resource:{buffer:F}},{binding:1,resource:{buffer:j}}],label:m}),Le=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:m}),Te=i.createBindGroup({layout:Le,entries:[{binding:0,resource:{buffer:o.buffer}},{binding:1,resource:{buffer:u.buffer}}],label:m}),We=i.createShaderModule({code:Tm,label:m}),$e=i.createComputePipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Oe,Le]}),compute:{module:We,entryPoint:"displaceVertices",constants:{0:0}},label:m}),He=i.createComputePipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Oe,Le]}),compute:{module:We,entryPoint:"displaceVertices",constants:{0:1}},label:m}),oe=i.createRenderPipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Ze,Le]}),vertex:{module:We,entryPoint:"rasterizationVertex"},fragment:{module:We,entryPoint:"rasterizationFragment",targets:[{format:Va},{format:$a}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"ccw"},depthStencil:{format:Ad,depthWriteEnabled:!0,depthCompare:"less"}});return{group0Compute:Fe,group0Graphics:Me,group1:Te,vertices:F,worldNormals:j,indices:B,displacementCosinePipeline:$e,displacementGerstnerPipeline:He,surfaceRasterizationPipeline:oe}}function Dm(i,o,u,m,_,S,M){const L=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:qa}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:il,viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:Pd,viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:Rm,viewDimension:"2d"}}],label:"Atmosphere sampler/LUT/UBO Group"}),P=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Atmosphere Camera Group 1"}),z=[L,P,o],F=i.createTexture({format:qa,size:{width:1,height:1},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),j=F.createView(),B=i.createBindGroup({layout:L,entries:[{binding:0,resource:j},{binding:1,resource:i.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:u},{binding:3,resource:m},{binding:4,resource:_}],label:"Atmosphere Camera Group 0"}),te=i.createBindGroup({layout:z[1],entries:[{binding:0,resource:{buffer:S.buffer}},{binding:1,resource:{buffer:M.buffer}}],label:"Atmosphere Camera Group 1"}),W=i.createShaderModule({code:Sm,label:"Atmosphere Camera"}),Y=i.createComputePipeline({compute:{module:W,entryPoint:"renderCompositedAtmosphere"},layout:i.createPipelineLayout({bindGroupLayouts:z}),label:"Atmosphere Camera"});return{group0Layout:L,group1Layout:P,group0:B,group1:te,outputColor:F,outputColorView:j,pipeline:Y}}function Om(i,o,u){const m="Fullscreen Quad",_=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}}],label:m}),S=new Map,M=new Map,L=i.createSampler({magFilter:"linear",minFilter:"linear"});o.forEach(({view:te,defaultUBO:W},Y)=>{S.set(Y,i.createBindGroup({layout:_,entries:[{binding:0,resource:te},{binding:1,resource:L}],label:m+Y.toString()})),M.set(Y,W)});const P=new Lm(i),z=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}}],label:m}),F=i.createBindGroup({layout:z,entries:[{binding:0,resource:{buffer:P.buffer}}]}),j=i.createShaderModule({code:xm,label:m}),B=i.createRenderPipeline({vertex:{module:j,entryPoint:"vertex_main"},fragment:{module:j,entryPoint:"fragment_main",targets:[{format:u}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:i.createPipelineLayout({bindGroupLayouts:[_,z]}),label:m});return{group0Layout:_,group0ByOutputTexture:S,group0Sampler:L,uboDataByOutputTexture:M,ubo:P,group1:F,pipeline:B}}const bs=[.25,.3333,.5,.75,1,1.5,2,4];var Hs=(i=>(i[i.DrawToDraw=0]="DrawToDraw",i[i.SkyviewLUT=1]="SkyviewLUT",i[i.OceanSurface=2]="OceanSurface",i[i.AtmosphereCamera=3]="AtmosphereCamera",i[i.FullscreenQuad=4]="FullscreenQuad",i))(Hs||{});class ld{constructor(o){Ce(this,"values");Ce(this,"sum",0);Ce(this,"average_",0);Ce(this,"count",0);Ce(this,"index",0);this.values=new Array(o).fill(0)}get average(){return this.average_}push(o){this.index>=this.values.length&&(this.index=0),this.index<this.count&&(this.sum-=this.values[this.index]),this.values[this.index]=o,this.sum+=o,this.count=Math.min(this.values.length,this.count+1),this.average_=this.sum/this.count,this.index+=1}}class bm{constructor(o,u,m){Ce(this,"transmittanceLUTPassResources");Ce(this,"multiscatterLUTPassResources");Ce(this,"skyviewLUTPassResources");Ce(this,"waveSurfaceDisplacementPassResources");Ce(this,"atmosphereCameraPassResources");Ce(this,"fullscreenQuadPassResources");Ce(this,"gbuffer");Ce(this,"scaledSize");Ce(this,"rawSize");Ce(this,"settings");Ce(this,"uiReadonly");Ce(this,"celestialLightUBO");Ce(this,"cameraUBO");Ce(this,"timeUBO");Ce(this,"fullscreenQuadIndexBuffer");Ce(this,"device");Ce(this,"presentFormat");Ce(this,"quit",!1);Ce(this,"frametimeQuery");Ce(this,"frametimeAverages");Ce(this,"startTime");Ce(this,"dummyFrameCounter");Ce(this,"probationFrameCounter");Ce(this,"targetFPS",0);if(this.device=o,this.presentFormat=u,this.startTime=m,this.settings={outputTexture:3,oceanWaveModel:1,outputTextureSettings:new Map([[3,{flip:!1,color_gain:{r:1,g:1,b:1}}],[1,{flip:!0,color_gain:{r:1,g:1,b:1}}],[2,{flip:!0,color_gain:{r:15,g:15,b:15}}],[0,{flip:!1,color_gain:{r:8,g:8,b:8}}],[4,{flip:!1,color_gain:{r:1,g:1,b:1}}],[5,{flip:!1,color_gain:{r:1,g:1,b:1}}]]),currentOutputTextureSettings:{flip:!1,color_gain:{r:1,g:1,b:1}},orbit:{timeHours:5.5,timeSpeedupFactor:400,paused:!1,reversed:!1,inclinationRadians:Math.PI/2,sunsetAzimuthRadians:0},renderScale:1.5},this.uiReadonly={averageFPS:0,frametimeControllers:new Map},this.scaledSize={width:1,height:1},this.rawSize={width:1,height:1},this.settings.outputTextureSettings.has(this.settings.outputTexture)){const L=this.settings.outputTextureSettings.get(this.settings.outputTexture);this.settings.currentOutputTextureSettings.flip=L.flip,this.settings.currentOutputTextureSettings.color_gain.r=L.color_gain.r,this.settings.currentOutputTextureSettings.color_gain.g=L.color_gain.g,this.settings.currentOutputTextureSettings.color_gain.b=L.color_gain.b}if(this.frametimeAverages=new Map,o.features.has("timestamp-query")){const P=2*Object.keys(Hs).map(z=>Number(z)).filter(isNaN).length;this.frametimeQuery={mappingLock:!1,querySet:o.createQuerySet({type:"timestamp",count:P}),writeBuffer:o.createBuffer({size:8*P,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE}),readBuffer:o.createBuffer({size:8*P,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})},Object.keys(Hs).map(z=>Number(z)).filter(z=>!isNaN(z)).forEach(z=>{const F=z;this.frametimeAverages.set(F,new ld(400)),Object.assign(this.uiReadonly,String(F),0)})}else console.warn("WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages."),this.frametimeAverages.set(0,new ld(400));this.dummyFrameCounter=10,this.probationFrameCounter=100,this.cameraUBO=new Am(o),this.timeUBO=new Pm(o),this.celestialLightUBO=new zm(o),this.gbuffer=ad(o,{width:1,height:1}),this.transmittanceLUTPassResources=Um(this.device,Oa),this.multiscatterLUTPassResources=Cm(this.device,ba,this.transmittanceLUTPassResources.view),this.skyviewLUTPassResources=km(this.device,Na,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.celestialLightUBO),this.waveSurfaceDisplacementPassResources=Im(this.device,this.cameraUBO,this.timeUBO);const _=new Uint32Array([0,1,2,0,2,3]);this.fullscreenQuadIndexBuffer=o.createBuffer({size:_.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),o.queue.writeBuffer(this.fullscreenQuadIndexBuffer,0,_,0,_.length),this.atmosphereCameraPassResources=Dm(this.device,this.gbuffer.readGroupLayout,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.skyviewLUTPassResources.view,this.cameraUBO,this.celestialLightUBO),this.fullscreenQuadPassResources=Om(this.device,new Map([[3,{view:this.atmosphereCameraPassResources.outputColorView,defaultUBO:{vertex_scale:gt.create(1,1,1,1),color_gain:gt.create(1,1,1.01,0)}}],[1,{view:this.transmittanceLUTPassResources.view,defaultUBO:{vertex_scale:gt.create(1,1,1,1),color_gain:gt.create(1,1,1,1)}}],[2,{view:this.multiscatterLUTPassResources.view,defaultUBO:{vertex_scale:gt.create(1,1,1,1),color_gain:gt.create(15,15,15,15)}}],[0,{view:this.skyviewLUTPassResources.view,defaultUBO:{vertex_scale:gt.create(1,-1,1,1),color_gain:gt.create(8,8,8,8)}}],[4,{view:this.gbuffer.colorWithDepthInAlphaView,defaultUBO:{vertex_scale:gt.create(1,1,1,1),color_gain:gt.create(1,1,1,1)}}],[5,{view:this.gbuffer.normalView,defaultUBO:{vertex_scale:gt.create(1,1,1,1),color_gain:gt.create(1,1,1,1)}}]]),this.presentFormat);const S=o.createCommandEncoder();let M=S.beginComputePass();M.setPipeline(this.transmittanceLUTPassResources.pipeline),M.setBindGroup(0,this.transmittanceLUTPassResources.group0),M.dispatchWorkgroups(Math.ceil(Oa.width/16),Math.ceil(Oa.height/16)),M.end(),M=S.beginComputePass(),M.setPipeline(this.multiscatterLUTPassResources.pipeline),M.setBindGroup(0,this.multiscatterLUTPassResources.group0),M.dispatchWorkgroups(Math.ceil(ba.width/16),Math.ceil(ba.height/16)),M.end(),o.queue.submit([S.finish()])}setupUI(o){const u=o.add(this.settings,"outputTexture",{Scene:3,"Transmittance LUT":1,"Multiscatter LUT":2,"Skyview LUT":0,"GBuffer Color":4,"GBuffer Normal":5}).name("Render Output").listen();o.add(this.settings,"renderScale",bs).name("Render Resolution Scale").decimals(1).onFinishChange(M=>{this.handleResize(this.rawSize.width,this.rawSize.height)}).listen(),o.add(this.uiReadonly,"averageFPS").decimals(1).disable().name("Average FPS").listen(),o.add(this.settings,"oceanWaveModel",{Cosine:0,Gerstner:1}).name("Ocean Wave Model");const m=o.addFolder("Sun Parameters").open();m.add(this.settings.orbit,"timeHours").min(0).max(24).name("Time in Hours").listen(),m.add(this.settings.orbit,"timeSpeedupFactor").min(1).max(5e4).step(1).name("Time Multiplier"),m.add(this.settings.orbit,"paused").name("Pause Sun"),m.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?18+.5:6-.5}},"fn").name("Skip to Sunrise"),m.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?6+.5:18-.5}},"fn").name("Skip to Sunset"),m.add(this.settings.orbit,"reversed").name("Reverse Sun"),m.add(this.settings.orbit,"sunsetAzimuthRadians").name("Sun Azimuth").min(0).max(2*Math.PI),m.add(this.settings.orbit,"inclinationRadians").name("Sun Inclination").min(0).max(Math.PI);const _=o.addFolder("Output Transform").close();this.fullscreenQuadPassResources.uboDataByOutputTexture.has(this.settings.outputTexture)||_.hide(),_.add(this.settings.currentOutputTextureSettings,"flip").name("Flip Image").listen(),_.add({gain:0},"gain").name("RGB").min(0).max(100).onChange(M=>{this.settings.currentOutputTextureSettings.color_gain.r=M,this.settings.currentOutputTextureSettings.color_gain.g=M,this.settings.currentOutputTextureSettings.color_gain.b=M}),_.add(this.settings.currentOutputTextureSettings.color_gain,"r").name("R").min(0).max(100).listen(),_.add(this.settings.currentOutputTextureSettings.color_gain,"g").name("G").min(0).max(100).listen(),_.add(this.settings.currentOutputTextureSettings.color_gain,"b").name("B").min(0).max(100).listen(),u.onChange(M=>{if(this.fullscreenQuadPassResources.uboDataByOutputTexture.has(M)){if(this.settings.currentOutputTextureSettings.flip=!1,this.settings.currentOutputTextureSettings.color_gain.r=1,this.settings.currentOutputTextureSettings.color_gain.g=1,this.settings.currentOutputTextureSettings.color_gain.b=1,this.settings.outputTextureSettings.has(M)){const L=this.settings.outputTextureSettings.get(M);this.settings.currentOutputTextureSettings.flip=L.flip,this.settings.currentOutputTextureSettings.color_gain.r=L.color_gain.r,this.settings.currentOutputTextureSettings.color_gain.g=L.color_gain.g,this.settings.currentOutputTextureSettings.color_gain.b=L.color_gain.b}_.show()}else _.hide()});const S=o.addFolder("Performance").close();this.frametimeAverages.forEach((M,L)=>{this.uiReadonly.frametimeControllers.set(L,S.add({value:0},"value").name(`${Hs[L]} (ms)`).decimals(6).disable())})}updateOrbit(o){const u=this.settings.orbit;this.settings.orbit.paused||(u.timeHours+=(u.reversed?-1:1)*u.timeSpeedupFactor*o/36e5,u.timeHours=u.timeHours-Math.floor(u.timeHours/24)*24);const m=2*Math.PI/24,_=(12-u.timeHours)*m,S=Kn.create(-Math.sin(u.sunsetAzimuthRadians),0,Math.cos(u.sunsetAzimuthRadians)),M=Kn.create(Math.cos(u.sunsetAzimuthRadians)*Math.cos(u.inclinationRadians),Math.sin(u.inclinationRadians),Math.sin(u.sunsetAzimuthRadians)*Math.cos(u.inclinationRadians)),L=Kn.add(Kn.scale(S,Math.sin(_)),Kn.scale(M,Math.cos(_)));Kn.scale(L,-1,this.celestialLightUBO.data.light.forward),this.celestialLightUBO.writeToGPU(this.device)}updateFPSValues(o){var u,m,_,S;o>.01&&((u=this.frametimeAverages.get(0))==null||u.push(o),this.uiReadonly.averageFPS=1e3/(((m=this.frametimeAverages.get(0))==null?void 0:m.average)??1e3),(S=this.uiReadonly.frametimeControllers.get(0))==null||S.setValue(((_=this.frametimeAverages.get(0))==null?void 0:_.average)??-1))}updateCamera(o){const u=60*Math.PI/180,S=Wt.perspective(u,o,.1,1e3),M=[0,10,-20],L=Wt.lookAt(M,[0,0,200],[0,1,0]);Object.assign(this.cameraUBO.data,{inv_proj:Wt.inverse(S),inv_view:Wt.inverse(L),proj_view:Wt.mul(S,L),position:gt.create(...M)}),this.cameraUBO.writeToGPU(this.device)}updateTime(o){this.timeUBO.data.time_seconds+=o/1e3,this.timeUBO.data.time_seconds>60&&(this.timeUBO.data.time_seconds=0),this.timeUBO.writeToGPU(this.device)}draw(o,u,m,_){if(this.dummyFrameCounter>0){this.dummyFrameCounter-=1;return}const S=o.createView();if(this.updateFPSValues(_),this.probationFrameCounter>49){this.probationFrameCounter-=1,this.probationFrameCounter<50&&(console.log(`Average FPS without load is ${this.uiReadonly.averageFPS}`),this.targetFPS=this.uiReadonly.averageFPS);return}if(this.probationFrameCounter>0&&(this.probationFrameCounter-=1,this.probationFrameCounter<1)){console.log(`Average FPS with load is ${this.uiReadonly.averageFPS}`);const W=this.uiReadonly.averageFPS/this.targetFPS;this.settings.renderScale=bs[0],bs.forEach(Y=>{Math.abs(Y-W)<Math.abs(this.settings.renderScale-W)&&(this.settings.renderScale=Y)}),this.handleResize(this.rawSize.width,this.rawSize.height)}this.updateCamera(u),this.updateTime(_),this.updateOrbit(_);const M={r:0,g:0,b:0,a:1},L=this.device.createCommandEncoder({label:"Main"});let P=0;const z=new Map;switch(z.set(2,P),this.settings.oceanWaveModel){case 0:case 1:{const W=L.beginComputePass({label:"Wave Surface Mesh Displacement",timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:P++}:void 0});this.settings.oceanWaveModel==0?W.setPipeline(this.waveSurfaceDisplacementPassResources.displacementCosinePipeline):W.setPipeline(this.waveSurfaceDisplacementPassResources.displacementGerstnerPipeline),W.setBindGroup(0,this.waveSurfaceDisplacementPassResources.group0Compute),W.setBindGroup(1,this.waveSurfaceDisplacementPassResources.group1),W.dispatchWorkgroups(Math.ceil(2048/16),Math.ceil(2048/16)),W.end();const Y=L.beginRenderPass({label:"Wave Surface Rasterization",colorAttachments:[{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:this.gbuffer.colorWithDepthInAlphaView},{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:this.gbuffer.normalView}],depthStencilAttachment:{view:this.gbuffer.depthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"},timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,endOfPassWriteIndex:P++}:void 0});Y.setPipeline(this.waveSurfaceDisplacementPassResources.surfaceRasterizationPipeline),Y.setBindGroup(0,this.waveSurfaceDisplacementPassResources.group0Graphics),Y.setBindGroup(1,this.waveSurfaceDisplacementPassResources.group1),Y.setIndexBuffer(this.waveSurfaceDisplacementPassResources.indices,"uint32"),Y.drawIndexed(this.waveSurfaceDisplacementPassResources.indices.size/4),Y.end();break}}z.set(1,P);const F=L.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:P++,endOfPassWriteIndex:P++}:void 0,label:"Skyview LUT"});F.setPipeline(this.skyviewLUTPassResources.pipeline),F.setBindGroup(0,this.skyviewLUTPassResources.group0),F.setBindGroup(1,this.skyviewLUTPassResources.group1),F.dispatchWorkgroups(Math.ceil(Na.width/16),Math.ceil(Na.height/31)),F.end(),z.set(3,P);const j=L.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:P++,endOfPassWriteIndex:P++}:void 0,label:"Atmosphere Camera"});j.setPipeline(this.atmosphereCameraPassResources.pipeline),j.setBindGroup(0,this.atmosphereCameraPassResources.group0),j.setBindGroup(1,this.atmosphereCameraPassResources.group1),j.setBindGroup(2,this.gbuffer.readGroup),j.dispatchWorkgroups(Math.ceil(this.atmosphereCameraPassResources.outputColor.width/16),Math.ceil(this.atmosphereCameraPassResources.outputColor.height/16)),j.end(),z.set(4,P);const B=L.beginRenderPass({colorAttachments:[{clearValue:M,loadOp:"clear",storeOp:"store",view:S}],timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:P++,endOfPassWriteIndex:P++}:void 0,label:"Fullscreen Pass"});if(this.fullscreenQuadPassResources.uboDataByOutputTexture.has(this.settings.outputTexture)){const W=this.settings.currentOutputTextureSettings,Y=this.fullscreenQuadPassResources.uboDataByOutputTexture.get(this.settings.outputTexture);Y.color_gain=gt.create(W.color_gain.r,W.color_gain.g,W.color_gain.b,1),Y.vertex_scale=gt.create(1,W.flip?-1:1,1,1)}B.setPipeline(this.fullscreenQuadPassResources.pipeline),B.setIndexBuffer(this.fullscreenQuadIndexBuffer,"uint32",0,this.fullscreenQuadIndexBuffer.size),B.setBindGroup(0,this.fullscreenQuadPassResources.group0ByOutputTexture.get(this.settings.outputTexture));const te=this.fullscreenQuadPassResources.uboDataByOutputTexture.get(this.settings.outputTexture);if(te?this.fullscreenQuadPassResources.ubo.data=te:this.fullscreenQuadPassResources.ubo.data={color_gain:gt.create(1,1,1,1),vertex_scale:gt.create(1,1,1,1)},this.fullscreenQuadPassResources.ubo.writeToGPU(this.device),B.setBindGroup(1,this.fullscreenQuadPassResources.group1),this.probationFrameCounter<1&&B.drawIndexed(6,1,0,0,0),B.end(),this.frametimeQuery!=null&&!this.frametimeQuery.mappingLock&&(L.resolveQuerySet(this.frametimeQuery.querySet,0,2*z.size,this.frametimeQuery.writeBuffer,0),L.copyBufferToBuffer(this.frametimeQuery.writeBuffer,0,this.frametimeQuery.readBuffer,0,this.frametimeQuery.readBuffer.size)),this.device.queue.submit([L.finish()]),this.frametimeQuery!==void 0&&!this.frametimeQuery.mappingLock){const W=this.frametimeQuery;this.frametimeQuery.mappingLock=!0,this.frametimeQuery.readBuffer.mapAsync(GPUMapMode.READ,0,this.frametimeQuery.readBuffer.size).then(()=>{const Y=new BigInt64Array(W.readBuffer.getMappedRange(0,W.readBuffer.size));z.forEach((ee,q)=>{var de,xe,ke;const le=Number(Y.at(ee+1)-Y.at(ee))/1e6;(de=this.frametimeAverages.get(q))==null||de.push(le),(ke=this.uiReadonly.frametimeControllers.get(q))==null||ke.setValue(((xe=this.frametimeAverages.get(q))==null?void 0:xe.average)??-1)}),W.readBuffer.unmap(),W.mappingLock=!1}).catch(Y=>{console.error("Failed while retrieving frametime values from GPU:"),console.error(Y)})}}handleResize(o,u){const m={width:o*this.settings.renderScale,height:u*this.settings.renderScale},_=8192,S=268435456,M=16,L=(P,z)=>P<_&&z<_&&P*z*M<S;L(m.width,m.height)?this.scaledSize=m:(bs.slice().reverse().some(P=>{if(L(o*P,u*P))return this.settings.renderScale=P,!0}),console.warn(`During resize: Texture size (${m.width},${m.height}) exceeds WebGPU guaranteed limit (8192, 8192).
                Defaulting to highest possible render scale of ${this.settings.renderScale}`),this.scaledSize={width:o*this.settings.renderScale,height:u*this.settings.renderScale}),console.log(`Resizing to (${this.scaledSize.width},${this.scaledSize.height})`),this.rawSize={width:o,height:u},this.gbuffer=ad(this.device,this.scaledSize,this.gbuffer),this.fullscreenQuadPassResources.group0ByOutputTexture.set(4,this.device.createBindGroup({layout:this.fullscreenQuadPassResources.group0Layout,entries:[{binding:0,resource:this.gbuffer.colorWithDepthInAlphaView},{binding:1,resource:this.fullscreenQuadPassResources.group0Sampler}],label:"Fullscreen Quad Pass Bing Group 0 GBuffer Color Resized"})),this.fullscreenQuadPassResources.group0ByOutputTexture.set(5,this.device.createBindGroup({layout:this.fullscreenQuadPassResources.group0Layout,entries:[{binding:0,resource:this.gbuffer.normalView},{binding:1,resource:this.fullscreenQuadPassResources.group0Sampler}],label:"Fullscreen Quad Pass Bing Group 0 GBuffer Normal Resized"})),this.atmosphereCameraPassResources.outputColor=this.device.createTexture({format:qa,size:this.scaledSize,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.atmosphereCameraPassResources.outputColorView=this.atmosphereCameraPassResources.outputColor.createView(),this.fullscreenQuadPassResources.group0ByOutputTexture.set(3,this.device.createBindGroup({layout:this.fullscreenQuadPassResources.group0Layout,entries:[{binding:0,resource:this.atmosphereCameraPassResources.outputColorView},{binding:1,resource:this.fullscreenQuadPassResources.group0Sampler}],label:"Fullscreen Quad Pass Bing Group 0 GBuffer Normal Resized"})),this.atmosphereCameraPassResources.group0=this.device.createBindGroup({layout:this.atmosphereCameraPassResources.group0Layout,entries:[{binding:0,resource:this.atmosphereCameraPassResources.outputColorView},{binding:1,resource:this.device.createSampler({magFilter:"linear",minFilter:"linear"})},{binding:2,resource:this.transmittanceLUTPassResources.view},{binding:3,resource:this.multiscatterLUTPassResources.view},{binding:4,resource:this.skyviewLUTPassResources.view}],label:"Atmosphere Camera Group 0"})}}const Nm=(i,o,u)=>new bm(i,o,u),ja={name:"Hello Cube",requiredFeatures:new Set,optionalFeatures:new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]),description:"Tests WebGPU functionality with a simple spinning cube.",create:vm},Wa=new Map([["hello-cube",ja],["sky-sea",{name:"Sky and Sea",description:"Real-time rendering of a dynamic sun over the open ocean, with various models for surface waves and raymarched atmospheric scattering.",requiredFeatures:new Set(["float32-filterable"]),optionalFeatures:new Set(["timestamp-query"]),create:Nm}]]),Bm=ve.jsx("a",{target:"_blank",rel:"noreferrer",href:"mailto:estelle.booher@gmail.com",children:"estelle.booher@gmail.com"}),Fm=ve.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/EllarBooher",children:"https://github.com/EllarBooher"}),Ns=Z.memo(function({hyperlink:o,externalLink:u=!0,thumbnailAssets:m=[],title:_="PLACEHOLDER TITLE",description:S="PLACEHOLDER DESCRIPTION"}){const M=ve.jsx("div",{className:"DisplayCard-thumbnails",children:m.map(z=>ve.jsx("div",{className:"DisplayCard-thumbnail",children:ve.jsx("img",{className:"DisplayCard-image",src:z.toString(),alt:""})},z.toString()))}),L=Ei(),P=()=>{var z;u?window.location.href=o:(z=L(o))==null||z.catch(F=>{throw new Error("Unable to navigate",{cause:F})})};return ve.jsx("button",{className:"DisplayCard",onClick:P,children:ve.jsxs("div",{children:[ve.jsx("div",{className:"DisplayCard-name",children:_}),ve.jsxs("div",{className:"DisplayCard-body",children:[S,M]})]})})});function Gm(){const i=[];Wa.forEach((m,_)=>{i.push(ve.jsx(Ns,{hyperlink:`/webgpu-samples?sample=${_}`,externalLink:!1,thumbnailAssets:[],title:m.name,description:m.description},_))});const o=[ve.jsx(Ns,{hyperlink:"https://github.com/EllarBooher/Syzygy",thumbnailAssets:[new URL("/assets/syzygy1-CItzHwJc.png",import.meta.url)],title:"Syzygy",description:`
                A sandbox renderer I started to study C++ and Vulkan. 
                It aims to be a testbed of various features and techniques.
            `},"Syzygy"),ve.jsx(Ns,{hyperlink:"https://github.com/EllarBooher/VulkanTemplate/tree/SSAO",thumbnailAssets:[new URL("/assets/ssao1-8Qfbb4oF.png",import.meta.url)],title:"SSAO",description:`
                An implementation of Screen-Space Ambient Occlusion written in C++ with Vulkan.
            `},"SSAO")],u=[ve.jsx(Ns,{hyperlink:"https://ellarbooher.itch.io/snail-blazer",thumbnailAssets:[new URL("/assets/snailblazer1-Bl1793QZ.png",import.meta.url),new URL("/assets/snailblazer2-CU4gYciB.png",import.meta.url)],title:"Snail Blazer",description:`
                A short bullet-hell made for the Bullet Hell Jam 2023 on itch.io. 
                The player primarily moves via grappling on enemy projectiles and the environment, 
                instead of the conventional WASD-style of movement.
            `},"Snail Blazer")];return ve.jsxs("div",{className:"App",children:[ve.jsx("div",{className:"website-main",children:ve.jsxs("div",{children:["Hello, my name is Estelle Booher. My passion is realtime rendering and engine infrastructure, and I am actively working on building a portfolio and career in computer graphics. This website is a landing spot where I will host links to various projects of mine.",ve.jsx("br",{}),ve.jsx("br",{}),"My github is at ",Fm,", where I host the source code of my projects including this website.",ve.jsx("br",{}),"To contact me, please email at ",Bm,".",ve.jsx("br",{}),ve.jsx("h1",{children:"In-Browser WebGPU Samples"}),ve.jsx("div",{className:"DisplayGrid",children:i}),ve.jsx("h1",{children:"Offline Computer Graphics"}),ve.jsx("div",{className:"DisplayGrid",children:o}),ve.jsx("h1",{children:"Video Games"}),ve.jsx("div",{className:"DisplayGrid",children:u})]})}),ve.jsx("footer",{className:"website-footer",children:"All works present are copyrighted, unless provided with external attributions or license."})]})}async function Hm(i,o){if(console.log("Starting WebGPU"),!("gpu"in navigator))return Promise.reject(new Error("WebGPU is not available in this browser.",{cause:new Error("navigator.gpu is null")}));const u=navigator.gpu.requestAdapter().then(_=>_?Promise.resolve(_):Promise.reject(new Error("Requested WebGPU Adapter is not available."))).catch(_=>Promise.reject(new Error("Unable to get WebGPU Adapter",{cause:_}))),m=u.then(_=>{const S=Array.from(i.values()).filter(L=>_.features.has(L));if(S.length!=i.size){const L=`Required features unavailable: ${Array.from(i.values()).filter(P=>!_.features.has(P)).map(P=>`'${P}'`).join(",")}`;return Promise.reject(new Error("Unable to get WebGPU Device",{cause:L}))}const M=S.concat(...Array.from(o.values()).filter(L=>_.features.has(L)));return console.log(`Enabling features: '${M.join("', '")}'`),_.requestDevice({requiredFeatures:M}).catch(L=>Promise.reject(new Error("Unable to get WebGPU Device",{cause:L})))});return Promise.all([u,m]).then(_=>{const[S,M]=_;return{adapter:S,device:M}})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class yn{constructor(o,u,m,_,S="div"){this.parent=o,this.object=u,this.property=m,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(S),this.domElement.classList.add("controller"),this.domElement.classList.add(_),this.$name=document.createElement("div"),this.$name.classList.add("name"),yn.nextNameID=yn.nextNameID||0,this.$name.id=`lil-gui-name-${++yn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",M=>M.stopPropagation()),this.domElement.addEventListener("keyup",M=>M.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(m)}name(o){return this._name=o,this.$name.textContent=o,this}onChange(o){return this._onChange=o,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(o){return this._onFinishChange=o,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(o=!0){return this.disable(!o)}disable(o=!0){return o===this._disabled?this:(this._disabled=o,this.domElement.classList.toggle("disabled",o),this.$disable.toggleAttribute("disabled",o),this)}show(o=!0){return this._hidden=!o,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(o){const u=this.parent.add(this.object,this.property,o);return u.name(this._name),this.destroy(),u}min(o){return this}max(o){return this}step(o){return this}decimals(o){return this}listen(o=!0){return this._listening=o,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const o=this.save();o!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=o}getValue(){return this.object[this.property]}setValue(o){return this.getValue()!==o&&(this.object[this.property]=o,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(o){return this.setValue(o),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Vm extends yn{constructor(o,u,m){super(o,u,m,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Za(i){let o,u;return(o=i.match(/(#|0x)?([a-f0-9]{6})/i))?u=o[2]:(o=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?u=parseInt(o[1]).toString(16).padStart(2,0)+parseInt(o[2]).toString(16).padStart(2,0)+parseInt(o[3]).toString(16).padStart(2,0):(o=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(u=o[1]+o[1]+o[2]+o[2]+o[3]+o[3]),u?"#"+u:!1}const $m={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Za,toHexString:Za},Ti={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},qm={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,o,u=1){const m=Ti.fromHexString(i);o[0]=(m>>16&255)/255*u,o[1]=(m>>8&255)/255*u,o[2]=(m&255)/255*u},toHexString([i,o,u],m=1){m=255/m;const _=i*m<<16^o*m<<8^u*m<<0;return Ti.toHexString(_)}},jm={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,o,u=1){const m=Ti.fromHexString(i);o.r=(m>>16&255)/255*u,o.g=(m>>8&255)/255*u,o.b=(m&255)/255*u},toHexString({r:i,g:o,b:u},m=1){m=255/m;const _=i*m<<16^o*m<<8^u*m<<0;return Ti.toHexString(_)}},Wm=[$m,Ti,qm,jm];function Zm(i){return Wm.find(o=>o.match(i))}class Qm extends yn{constructor(o,u,m,_){super(o,u,m,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Zm(this.initialValue),this._rgbScale=_,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const S=Za(this.$text.value);S&&this._setValueFromHexString(S)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(o){if(this._format.isPrimitive){const u=this._format.fromHexString(o);this.setValue(u)}else this._format.fromHexString(o,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(o){return this._setValueFromHexString(o),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ba extends yn{constructor(o,u,m){super(o,u,m,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",_=>{_.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Xm extends yn{constructor(o,u,m,_,S,M){super(o,u,m,"number"),this._initInput(),this.min(_),this.max(S);const L=M!==void 0;this.step(L?M:this._getImplicitStep(),L),this.updateDisplay()}decimals(o){return this._decimals=o,this.updateDisplay(),this}min(o){return this._min=o,this._onUpdateMinMax(),this}max(o){return this._max=o,this._onUpdateMinMax(),this}step(o,u=!0){return this._step=o,this._stepExplicit=u,this}updateDisplay(){const o=this.getValue();if(this._hasSlider){let u=(o-this._min)/(this._max-this._min);u=Math.max(0,Math.min(u,1)),this.$fill.style.width=u*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?o:o.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const u=()=>{let X=parseFloat(this.$input.value);isNaN(X)||(this._stepExplicit&&(X=this._snap(X)),this.setValue(this._clamp(X)))},m=X=>{const le=parseFloat(this.$input.value);isNaN(le)||(this._snapClampSetValue(le+X),this.$input.value=this.getValue())},_=X=>{X.key==="Enter"&&this.$input.blur(),X.code==="ArrowUp"&&(X.preventDefault(),m(this._step*this._arrowKeyMultiplier(X))),X.code==="ArrowDown"&&(X.preventDefault(),m(this._step*this._arrowKeyMultiplier(X)*-1))},S=X=>{this._inputFocused&&(X.preventDefault(),m(this._step*this._normalizeMouseWheel(X)))};let M=!1,L,P,z,F,j;const B=5,te=X=>{L=X.clientX,P=z=X.clientY,M=!0,F=this.getValue(),j=0,window.addEventListener("mousemove",W),window.addEventListener("mouseup",Y)},W=X=>{if(M){const le=X.clientX-L,de=X.clientY-P;Math.abs(de)>B?(X.preventDefault(),this.$input.blur(),M=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(le)>B&&Y()}if(!M){const le=X.clientY-z;j-=le*this._step*this._arrowKeyMultiplier(X),F+j>this._max?j=this._max-F:F+j<this._min&&(j=this._min-F),this._snapClampSetValue(F+j)}z=X.clientY},Y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",W),window.removeEventListener("mouseup",Y)},ee=()=>{this._inputFocused=!0},q=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",u),this.$input.addEventListener("keydown",_),this.$input.addEventListener("wheel",S,{passive:!1}),this.$input.addEventListener("mousedown",te),this.$input.addEventListener("focus",ee),this.$input.addEventListener("blur",q)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const o=(q,X,le,de,xe)=>(q-X)/(le-X)*(xe-de)+de,u=q=>{const X=this.$slider.getBoundingClientRect();let le=o(q,X.left,X.right,this._min,this._max);this._snapClampSetValue(le)},m=q=>{this._setDraggingStyle(!0),u(q.clientX),window.addEventListener("mousemove",_),window.addEventListener("mouseup",S)},_=q=>{u(q.clientX)},S=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",S)};let M=!1,L,P;const z=q=>{q.preventDefault(),this._setDraggingStyle(!0),u(q.touches[0].clientX),M=!1},F=q=>{q.touches.length>1||(this._hasScrollBar?(L=q.touches[0].clientX,P=q.touches[0].clientY,M=!0):z(q),window.addEventListener("touchmove",j,{passive:!1}),window.addEventListener("touchend",B))},j=q=>{if(M){const X=q.touches[0].clientX-L,le=q.touches[0].clientY-P;Math.abs(X)>Math.abs(le)?z(q):(window.removeEventListener("touchmove",j),window.removeEventListener("touchend",B))}else q.preventDefault(),u(q.touches[0].clientX)},B=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",j),window.removeEventListener("touchend",B)},te=this._callOnFinishChange.bind(this),W=400;let Y;const ee=q=>{if(Math.abs(q.deltaX)<Math.abs(q.deltaY)&&this._hasScrollBar)return;q.preventDefault();const le=this._normalizeMouseWheel(q)*this._step;this._snapClampSetValue(this.getValue()+le),this.$input.value=this.getValue(),clearTimeout(Y),Y=setTimeout(te,W)};this.$slider.addEventListener("mousedown",m),this.$slider.addEventListener("touchstart",F,{passive:!1}),this.$slider.addEventListener("wheel",ee,{passive:!1})}_setDraggingStyle(o,u="horizontal"){this.$slider&&this.$slider.classList.toggle("active",o),document.body.classList.toggle("lil-gui-dragging",o),document.body.classList.toggle(`lil-gui-${u}`,o)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(o){let{deltaX:u,deltaY:m}=o;return Math.floor(o.deltaY)!==o.deltaY&&o.wheelDelta&&(u=0,m=-o.wheelDelta/120,m*=this._stepExplicit?1:10),u+-m}_arrowKeyMultiplier(o){let u=this._stepExplicit?1:10;return o.shiftKey?u*=10:o.altKey&&(u/=10),u}_snap(o){let u=0;return this._hasMin?u=this._min:this._hasMax&&(u=this._max),o-=u,o=Math.round(o/this._step)*this._step,o+=u,o=parseFloat(o.toPrecision(15)),o}_clamp(o){return o<this._min&&(o=this._min),o>this._max&&(o=this._max),o}_snapClampSetValue(o){this.setValue(this._clamp(this._snap(o)))}get _hasScrollBar(){const o=this.parent.root.$children;return o.scrollHeight>o.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ym extends yn{constructor(o,u,m,_){super(o,u,m,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(_)}options(o){return this._values=Array.isArray(o)?o:Object.values(o),this._names=Array.isArray(o)?o:Object.keys(o),this.$select.replaceChildren(),this._names.forEach(u=>{const m=document.createElement("option");m.textContent=u,this.$select.appendChild(m)}),this.updateDisplay(),this}updateDisplay(){const o=this.getValue(),u=this._values.indexOf(o);return this.$select.selectedIndex=u,this.$display.textContent=u===-1?o:this._names[u],this}}class Km extends yn{constructor(o,u,m){super(o,u,m,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",_=>{_.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Jm=`.lil-gui {
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
}`;function eg(i){const o=document.createElement("style");o.innerHTML=i;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(o,u):document.head.appendChild(o)}let ud=!1;class sl{constructor({parent:o,autoPlace:u=o===void 0,container:m,width:_,title:S="Controls",closeFolders:M=!1,injectStyles:L=!0,touchStyles:P=!0}={}){if(this.parent=o,this.root=o?o.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(S),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),P&&this.domElement.classList.add("allow-touch-styles"),!ud&&L&&(eg(Jm),ud=!0),m?m.appendChild(this.domElement):u&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),_&&this.domElement.style.setProperty("--width",_+"px"),this._closeFolders=M}add(o,u,m,_,S){if(Object(m)===m)return new Ym(this,o,u,m);const M=o[u];switch(typeof M){case"number":return new Xm(this,o,u,m,_,S);case"boolean":return new Vm(this,o,u);case"string":return new Km(this,o,u);case"function":return new Ba(this,o,u)}console.error(`gui.add failed
	property:`,u,`
	object:`,o,`
	value:`,M)}addColor(o,u,m=1){return new Qm(this,o,u,m)}addFolder(o){const u=new sl({parent:this,title:o});return this.root._closeFolders&&u.close(),u}load(o,u=!0){return o.controllers&&this.controllers.forEach(m=>{m instanceof Ba||m._name in o.controllers&&m.load(o.controllers[m._name])}),u&&o.folders&&this.folders.forEach(m=>{m._title in o.folders&&m.load(o.folders[m._title])}),this}save(o=!0){const u={controllers:{},folders:{}};return this.controllers.forEach(m=>{if(!(m instanceof Ba)){if(m._name in u.controllers)throw new Error(`Cannot save GUI with duplicate property "${m._name}"`);u.controllers[m._name]=m.save()}}),o&&this.folders.forEach(m=>{if(m._title in u.folders)throw new Error(`Cannot save GUI with duplicate folder "${m._title}"`);u.folders[m._title]=m.save()}),u}open(o=!0){return this._setClosed(!o),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(o){this._closed!==o&&(this._closed=o,this._callOnOpenClose(this))}show(o=!0){return this._hidden=!o,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(o=!0){return this._setClosed(!o),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const u=this.$children.clientHeight;this.$children.style.height=u+"px",this.domElement.classList.add("transition");const m=S=>{S.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",m))};this.$children.addEventListener("transitionend",m);const _=o?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!o),requestAnimationFrame(()=>{this.$children.style.height=_+"px"})}),this}title(o){return this._title=o,this.$title.textContent=o,this}reset(o=!0){return(o?this.controllersRecursive():this.controllers).forEach(m=>m.reset()),this}onChange(o){return this._onChange=o,this}_callOnChange(o){this.parent&&this.parent._callOnChange(o),this._onChange!==void 0&&this._onChange.call(this,{object:o.object,property:o.property,value:o.getValue(),controller:o})}onFinishChange(o){return this._onFinishChange=o,this}_callOnFinishChange(o){this.parent&&this.parent._callOnFinishChange(o),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:o.object,property:o.property,value:o.getValue(),controller:o})}onOpenClose(o){return this._onOpenClose=o,this}_callOnOpenClose(o){this.parent&&this.parent._callOnOpenClose(o),this._onOpenClose!==void 0&&this._onOpenClose.call(this,o)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(o=>o.destroy())}controllersRecursive(){let o=Array.from(this.controllers);return this.folders.forEach(u=>{o=o.concat(u.controllersRecursive())}),o}foldersRecursive(){let o=Array.from(this.folders);return this.folders.forEach(u=>{o=o.concat(u.foldersRecursive())}),o}}const tg=function({app:o}){const u=Z.useRef(),m=Z.useRef(null),_=Z.useRef(null),S=Z.useRef(),M=Z.useRef(),L=Z.useCallback(()=>{var F;const z=m.current;if(z){const j=window.devicePixelRatio;z.width=z.offsetWidth*j,z.height=z.offsetHeight*j,(F=o.handleResize)==null||F.call(o,z.width,z.height)}},[o]);Z.useEffect(()=>(L(),window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L)}),[L]);const P=Z.useCallback(z=>{var j;const F=(j=m.current)==null?void 0:j.getContext("webgpu");if(F){const B=z-(M.current?M.current:0);M.current=z;const te=F.getCurrentTexture();o.draw(te,m.current.width/m.current.height,z,B),o.quit||(u.current=requestAnimationFrame(P))}},[o]);return Z.useEffect(()=>{var F,j;const z=(F=m.current)==null?void 0:F.getContext("webgpu");if(S.current&&((j=S.current)==null||j.destroy()),o.setupUI&&(S.current=new sl({container:_.current}),o.setupUI(S.current)),!z){console.error("'webgpu' canvas context not found, cannot animate.");return}return z.configure({device:o.device,format:o.presentFormat}),u.current=requestAnimationFrame(P),()=>{u.current&&cancelAnimationFrame(u.current)}},[P,o]),ve.jsxs("div",{style:{display:"flex",color:"hsl(204, 50%, 95%)",position:"relative",width:"100%",height:"100%"},children:[ve.jsx("div",{style:{flex:1},children:ve.jsx("canvas",{ref:m,style:{width:"100%",height:"100%"}})}),ve.jsx("div",{style:{flex:0,position:"absolute",right:0},ref:_})]})},ng=Z.memo(function(){const[o,u]=Z.useState(),[m,_]=Z.useState(""),[S,M]=Z.useState(!1),[L,P]=Xp(),z=Z.useCallback(()=>{const ee=L.get("sample");if(!ee)return ja;const q=Wa.get(ee);return q||ja},[L]),F=Z.useCallback(()=>{o&&(o.quit=!0)},[o]);Z.useEffect(()=>{u(void 0)},[L,u]),Z.useEffect(()=>{if(o)return;M(!1);const ee=z();Hm(ee.requiredFeatures,ee.optionalFeatures).then(({adapter:q,device:X})=>{o?(console.warn("Device found, but app was already created. This is due to either a duplicate component rerender, or the sample changing without a full page refresh. Overriding the original."),F()):console.log("Got WebGPU device, initializing sample app."),X.lost.then(de=>{console.log(`WebGPU device lost - ("${de.reason}"):
 ${de.message}`)},de=>{throw new Error("WebGPU device lost rejected",{cause:de})}),X.onuncapturederror=de=>{console.error(`WebGPU device uncaptured error: ${de.error.message}`),_(de.error.message),F()};const le=navigator.gpu.getPreferredCanvasFormat();u(ee.create(X,le,performance.now())),console.log("Finished initializing app.")},q=>{var X,le;console.error(q),_(`${q.message}
${(le=(X=q.cause)==null?void 0:X.toString)==null?void 0:le.call(X)}`)}).finally(()=>{M(!0)})},[o,F,z]);const j={backgroundColor:"rgb(50, 99, 121)",margin:0,padding:"2em",flexGrow:"1",color:"hsl(204, 50%, 95%)",whiteSpace:"pre-line",fontSize:"1.5em"},B=ve.jsxs("p",{style:j,children:[`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.

        `,m]}),te=ve.jsx("p",{style:j,children:"Loading..."}),W=[];Wa.forEach((ee,q)=>{W.push(ve.jsx("button",{className:"sidebar-button",onClick:()=>{P({sample:q})},children:ee.name},q))});const Y=ve.jsxs("div",{style:{color:"hsl(204, 50%, 95%)",flexShrink:0,whiteSpace:"pre-line",fontSize:"1.0em"},children:[ve.jsxs("div",{style:{paddingLeft:"0.5em",paddingRight:"0.5em"},children:[ve.jsx("div",{style:{padding:"0.5em"},children:"Samples"}),ve.jsx("hr",{})]}),ve.jsx("div",{style:{display:"flex",flexDirection:"column"},children:W})]});return ve.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"row"},children:[Y,S?ve.jsx(ve.Fragment,{children:o?ve.jsx(tg,{app:o}):B}):ve.jsx(ve.Fragment,{children:te})]})}),cd=new Map([["","Estelle Booher"],["webgpu-samples","WebGPU Samples"]]),dd=Z.memo(function({link:o,label:u}){const m=Ei(),_=()=>{var S;(S=m(o))==null||S.catch(M=>{throw new Error("Unable to navigate",{cause:M})})};return ve.jsx("button",{className:"nav-button",onClick:_,type:"button",children:u})}),rg=Z.memo(function(){const o=wn(),u=[ve.jsx(Z.Fragment,{children:ve.jsx(dd,{link:"/",label:cd.get("")})},"root")];if(o.pathname!="/"){const m=o.pathname.substring(1).split("/");let _="/";u.push(...m.map((S,M)=>{const L=cd.get(S),P=M>0?"/":"";return _=_.concat(`${P}${S}`),ve.jsxs(Z.Fragment,{children:[" > ",ve.jsx(dd,{link:_,label:L||S})]},_)}))}return ve.jsx("header",{className:"website-header",children:u})}),ig=document.getElementById("root");Lh.createRoot(ig).render(ve.jsx(Z.StrictMode,{children:ve.jsx(qp,{children:ve.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[ve.jsx("div",{style:{flex:"0 1 auto"},children:ve.jsx(rg,{})}),ve.jsxs(wp,{children:[ve.jsx(Bs,{index:!0,element:ve.jsx(Gm,{})}),ve.jsx(Bs,{path:"webgpu-samples",element:ve.jsx("div",{style:{flex:1,overflow:"hidden"},children:ve.jsx(ng,{})})}),ve.jsx(Bs,{path:"*",element:ve.jsx(yp,{to:"/",replace:!0})})]})]})})}));
