var Ap=Object.defineProperty;var Pp=(a,i,o)=>i in a?Ap(a,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[i]=o;var q=(a,i,o)=>Pp(a,typeof i!="symbol"?i+"":i,o);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))f(_);new MutationObserver(_=>{for(const w of _)if(w.type==="childList")for(const x of w.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&f(x)}).observe(document,{childList:!0,subtree:!0});function o(_){const w={};return _.integrity&&(w.integrity=_.integrity),_.referrerPolicy&&(w.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?w.credentials="include":_.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function f(_){if(_.ep)return;_.ep=!0;const w=o(_);fetch(_.href,w)}})();var Lo={exports:{}},Si={},Uo={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc;function Rp(){if(Bc)return Be;Bc=1;var a=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),x=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),D=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),I=Symbol.iterator;function F(O){return O===null||typeof O!="object"?null:(O=I&&O[I]||O["@@iterator"],typeof O=="function"?O:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Z={};function ee(O,ne,Me){this.props=O,this.context=ne,this.refs=Z,this.updater=Me||X}ee.prototype.isReactComponent={},ee.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},ee.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function W(){}W.prototype=ee.prototype;function J(O,ne,Me){this.props=O,this.context=ne,this.refs=Z,this.updater=Me||X}var ue=J.prototype=new W;ue.constructor=J,Q(ue,ee.prototype),ue.isPureReactComponent=!0;var fe=Array.isArray,Le=Object.prototype.hasOwnProperty,Ce={current:null},ke={key:!0,ref:!0,__self:!0,__source:!0};function We(O,ne,Me){var Te,Re={},Pe=null,p=null;if(ne!=null)for(Te in ne.ref!==void 0&&(p=ne.ref),ne.key!==void 0&&(Pe=""+ne.key),ne)Le.call(ne,Te)&&!ke.hasOwnProperty(Te)&&(Re[Te]=ne[Te]);var M=arguments.length-2;if(M===1)Re.children=Me;else if(1<M){for(var d=Array(M),m=0;m<M;m++)d[m]=arguments[m+2];Re.children=d}if(O&&O.defaultProps)for(Te in M=O.defaultProps,M)Re[Te]===void 0&&(Re[Te]=M[Te]);return{$$typeof:a,type:O,key:Pe,ref:p,props:Re,_owner:Ce.current}}function Fe(O,ne){return{$$typeof:a,type:O.type,key:ne,ref:O.ref,props:O.props,_owner:O._owner}}function Ne(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function Qe(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Me){return ne[Me]})}var xe=/\/+/g;function ze(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?Qe(""+O.key):ne.toString(36)}function Se(O,ne,Me,Te,Re){var Pe=typeof O;(Pe==="undefined"||Pe==="boolean")&&(O=null);var p=!1;if(O===null)p=!0;else switch(Pe){case"string":case"number":p=!0;break;case"object":switch(O.$$typeof){case a:case i:p=!0}}if(p)return p=O,Re=Re(p),O=Te===""?"."+ze(p,0):Te,fe(Re)?(Me="",O!=null&&(Me=O.replace(xe,"$&/")+"/"),Se(Re,ne,Me,"",function(m){return m})):Re!=null&&(Ne(Re)&&(Re=Fe(Re,Me+(!Re.key||p&&p.key===Re.key?"":(""+Re.key).replace(xe,"$&/")+"/")+O)),ne.push(Re)),1;if(p=0,Te=Te===""?".":Te+":",fe(O))for(var M=0;M<O.length;M++){Pe=O[M];var d=Te+ze(Pe,M);p+=Se(Pe,ne,Me,d,Re)}else if(d=F(O),typeof d=="function")for(O=d.call(O),M=0;!(Pe=O.next()).done;)Pe=Pe.value,d=Te+ze(Pe,M++),p+=Se(Pe,ne,Me,d,Re);else if(Pe==="object")throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return p}function Xe(O,ne,Me){if(O==null)return O;var Te=[],Re=0;return Se(O,Te,"","",function(Pe){return ne.call(Me,Pe,Re++)}),Te}function qe(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(Me){(O._status===0||O._status===-1)&&(O._status=1,O._result=Me)},function(Me){(O._status===0||O._status===-1)&&(O._status=2,O._result=Me)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var Ve={current:null},se={transition:null},ye={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:se,ReactCurrentOwner:Ce};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Be.Children={map:Xe,forEach:function(O,ne,Me){Xe(O,function(){ne.apply(this,arguments)},Me)},count:function(O){var ne=0;return Xe(O,function(){ne++}),ne},toArray:function(O){return Xe(O,function(ne){return ne})||[]},only:function(O){if(!Ne(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Be.Component=ee,Be.Fragment=o,Be.Profiler=_,Be.PureComponent=J,Be.StrictMode=f,Be.Suspense=b,Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,Be.act=oe,Be.cloneElement=function(O,ne,Me){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Te=Q({},O.props),Re=O.key,Pe=O.ref,p=O._owner;if(ne!=null){if(ne.ref!==void 0&&(Pe=ne.ref,p=Ce.current),ne.key!==void 0&&(Re=""+ne.key),O.type&&O.type.defaultProps)var M=O.type.defaultProps;for(d in ne)Le.call(ne,d)&&!ke.hasOwnProperty(d)&&(Te[d]=ne[d]===void 0&&M!==void 0?M[d]:ne[d])}var d=arguments.length-2;if(d===1)Te.children=Me;else if(1<d){M=Array(d);for(var m=0;m<d;m++)M[m]=arguments[m+2];Te.children=M}return{$$typeof:a,type:O.type,key:Re,ref:Pe,props:Te,_owner:p}},Be.createContext=function(O){return O={$$typeof:x,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:w,_context:O},O.Consumer=O},Be.createElement=We,Be.createFactory=function(O){var ne=We.bind(null,O);return ne.type=O,ne},Be.createRef=function(){return{current:null}},Be.forwardRef=function(O){return{$$typeof:z,render:O}},Be.isValidElement=Ne,Be.lazy=function(O){return{$$typeof:N,_payload:{_status:-1,_result:O},_init:qe}},Be.memo=function(O,ne){return{$$typeof:D,type:O,compare:ne===void 0?null:ne}},Be.startTransition=function(O){var ne=se.transition;se.transition={};try{O()}finally{se.transition=ne}},Be.unstable_act=oe,Be.useCallback=function(O,ne){return Ve.current.useCallback(O,ne)},Be.useContext=function(O){return Ve.current.useContext(O)},Be.useDebugValue=function(){},Be.useDeferredValue=function(O){return Ve.current.useDeferredValue(O)},Be.useEffect=function(O,ne){return Ve.current.useEffect(O,ne)},Be.useId=function(){return Ve.current.useId()},Be.useImperativeHandle=function(O,ne,Me){return Ve.current.useImperativeHandle(O,ne,Me)},Be.useInsertionEffect=function(O,ne){return Ve.current.useInsertionEffect(O,ne)},Be.useLayoutEffect=function(O,ne){return Ve.current.useLayoutEffect(O,ne)},Be.useMemo=function(O,ne){return Ve.current.useMemo(O,ne)},Be.useReducer=function(O,ne,Me){return Ve.current.useReducer(O,ne,Me)},Be.useRef=function(O){return Ve.current.useRef(O)},Be.useState=function(O){return Ve.current.useState(O)},Be.useSyncExternalStore=function(O,ne,Me){return Ve.current.useSyncExternalStore(O,ne,Me)},Be.useTransition=function(){return Ve.current.useTransition()},Be.version="18.3.1",Be}var Wc;function Zo(){return Wc||(Wc=1,Uo.exports=Rp()),Uo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc;function Lp(){if(Vc)return Si;Vc=1;var a=Zo(),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,_=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function x(z,b,D){var N,I={},F=null,X=null;D!==void 0&&(F=""+D),b.key!==void 0&&(F=""+b.key),b.ref!==void 0&&(X=b.ref);for(N in b)f.call(b,N)&&!w.hasOwnProperty(N)&&(I[N]=b[N]);if(z&&z.defaultProps)for(N in b=z.defaultProps,b)I[N]===void 0&&(I[N]=b[N]);return{$$typeof:i,type:z,key:F,ref:X,props:I,_owner:_.current}}return Si.Fragment=o,Si.jsx=x,Si.jsxs=x,Si}var qc;function Up(){return qc||(qc=1,Lo.exports=Lp()),Lo.exports}var ce=Up(),K=Zo(),Fa={},Co={exports:{}},Ht={},ko={exports:{}},Io={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function Cp(){return Hc||(Hc=1,function(a){function i(se,ye){var oe=se.length;se.push(ye);e:for(;0<oe;){var O=oe-1>>>1,ne=se[O];if(0<_(ne,ye))se[O]=ye,se[oe]=ne,oe=O;else break e}}function o(se){return se.length===0?null:se[0]}function f(se){if(se.length===0)return null;var ye=se[0],oe=se.pop();if(oe!==ye){se[0]=oe;e:for(var O=0,ne=se.length,Me=ne>>>1;O<Me;){var Te=2*(O+1)-1,Re=se[Te],Pe=Te+1,p=se[Pe];if(0>_(Re,oe))Pe<ne&&0>_(p,Re)?(se[O]=p,se[Pe]=oe,O=Pe):(se[O]=Re,se[Te]=oe,O=Te);else if(Pe<ne&&0>_(p,oe))se[O]=p,se[Pe]=oe,O=Pe;else break e}}return ye}function _(se,ye){var oe=se.sortIndex-ye.sortIndex;return oe!==0?oe:se.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;a.unstable_now=function(){return w.now()}}else{var x=Date,z=x.now();a.unstable_now=function(){return x.now()-z}}var b=[],D=[],N=1,I=null,F=3,X=!1,Q=!1,Z=!1,ee=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ue(se){for(var ye=o(D);ye!==null;){if(ye.callback===null)f(D);else if(ye.startTime<=se)f(D),ye.sortIndex=ye.expirationTime,i(b,ye);else break;ye=o(D)}}function fe(se){if(Z=!1,ue(se),!Q)if(o(b)!==null)Q=!0,qe(Le);else{var ye=o(D);ye!==null&&Ve(fe,ye.startTime-se)}}function Le(se,ye){Q=!1,Z&&(Z=!1,W(We),We=-1),X=!0;var oe=F;try{for(ue(ye),I=o(b);I!==null&&(!(I.expirationTime>ye)||se&&!Qe());){var O=I.callback;if(typeof O=="function"){I.callback=null,F=I.priorityLevel;var ne=O(I.expirationTime<=ye);ye=a.unstable_now(),typeof ne=="function"?I.callback=ne:I===o(b)&&f(b),ue(ye)}else f(b);I=o(b)}if(I!==null)var Me=!0;else{var Te=o(D);Te!==null&&Ve(fe,Te.startTime-ye),Me=!1}return Me}finally{I=null,F=oe,X=!1}}var Ce=!1,ke=null,We=-1,Fe=5,Ne=-1;function Qe(){return!(a.unstable_now()-Ne<Fe)}function xe(){if(ke!==null){var se=a.unstable_now();Ne=se;var ye=!0;try{ye=ke(!0,se)}finally{ye?ze():(Ce=!1,ke=null)}}else Ce=!1}var ze;if(typeof J=="function")ze=function(){J(xe)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Xe=Se.port2;Se.port1.onmessage=xe,ze=function(){Xe.postMessage(null)}}else ze=function(){ee(xe,0)};function qe(se){ke=se,Ce||(Ce=!0,ze())}function Ve(se,ye){We=ee(function(){se(a.unstable_now())},ye)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(se){se.callback=null},a.unstable_continueExecution=function(){Q||X||(Q=!0,qe(Le))},a.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fe=0<se?Math.floor(1e3/se):5},a.unstable_getCurrentPriorityLevel=function(){return F},a.unstable_getFirstCallbackNode=function(){return o(b)},a.unstable_next=function(se){switch(F){case 1:case 2:case 3:var ye=3;break;default:ye=F}var oe=F;F=ye;try{return se()}finally{F=oe}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(se,ye){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var oe=F;F=se;try{return ye()}finally{F=oe}},a.unstable_scheduleCallback=function(se,ye,oe){var O=a.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,se){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=oe+ne,se={id:N++,callback:ye,priorityLevel:se,startTime:oe,expirationTime:ne,sortIndex:-1},oe>O?(se.sortIndex=oe,i(D,se),o(b)===null&&se===o(D)&&(Z?(W(We),We=-1):Z=!0,Ve(fe,oe-O))):(se.sortIndex=ne,i(b,se),Q||X||(Q=!0,qe(Le))),se},a.unstable_shouldYield=Qe,a.unstable_wrapCallback=function(se){var ye=F;return function(){var oe=F;F=ye;try{return se.apply(this,arguments)}finally{F=oe}}}}(Io)),Io}var $c;function kp(){return $c||($c=1,ko.exports=Cp()),ko.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc;function Ip(){if(jc)return Ht;jc=1;var a=Zo(),i=kp();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,_={};function w(e,t){x(e,t),x(e+"Capture",t)}function x(e,t){for(_[e]=t,e=0;e<t.length;e++)f.add(t[e])}var z=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,D=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},I={};function F(e){return b.call(I,e)?!0:b.call(N,e)?!1:D.test(e)?I[e]=!0:(N[e]=!0,!1)}function X(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q(e,t,n,r){if(t===null||typeof t>"u"||X(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Z(e,t,n,r,s,u,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=g}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new Z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new Z(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new Z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new Z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new Z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new Z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ee[e]=new Z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ee[e]=new Z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ee[e]=new Z(e,5,!1,e.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function J(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(W,J);ee[t]=new Z(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(W,J);ee[t]=new Z(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(W,J);ee[t]=new Z(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new Z(e,1,!1,e.toLowerCase(),null,!1,!1)}),ee.xlinkHref=new Z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ee[e]=new Z(e,1,!1,e.toLowerCase(),null,!0,!0)});function ue(e,t,n,r){var s=ee.hasOwnProperty(t)?ee[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q(t,n,s,r)&&(n=null),r||s===null?F(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fe=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Le=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),We=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Ne=Symbol.for("react.provider"),Qe=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),Xe=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Ve=Symbol.for("react.offscreen"),se=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,O;function ne(e){if(O===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return`
`+O+e}var Me=!1;function Te(e,t){if(!e||Me)return"";Me=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(j){var r=j}Reflect.construct(e,[],t)}else{try{t.call()}catch(j){r=j}e.call(t.prototype)}else{try{throw Error()}catch(j){r=j}e()}}catch(j){if(j&&r&&typeof j.stack=="string"){for(var s=j.stack.split(`
`),u=r.stack.split(`
`),g=s.length-1,A=u.length-1;1<=g&&0<=A&&s[g]!==u[A];)A--;for(;1<=g&&0<=A;g--,A--)if(s[g]!==u[A]){if(g!==1||A!==1)do if(g--,A--,0>A||s[g]!==u[A]){var R=`
`+s[g].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=g&&0<=A);break}}}finally{Me=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ne(e):""}function Re(e){switch(e.tag){case 5:return ne(e.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return e=Te(e.type,!1),e;case 11:return e=Te(e.type.render,!1),e;case 1:return e=Te(e.type,!0),e;default:return""}}function Pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ke:return"Fragment";case Ce:return"Portal";case Fe:return"Profiler";case We:return"StrictMode";case ze:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qe:return(e.displayName||"Context")+".Consumer";case Ne:return(e._context.displayName||"Context")+".Provider";case xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xe:return t=e.displayName||null,t!==null?t:Pe(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Pe(e(t))}catch{}}return null}function p(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(t);case 8:return t===We?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function M(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function m(e){var t=d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(g){r=""+g,u.call(this,g)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(g){r=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function E(e){e._valueTracker||(e._valueTracker=m(e))}function P(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function V(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function l(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function v(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=M(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function c(e,t){t=t.checked,t!=null&&ue(e,"checked",t,!1)}function h(e,t){c(e,t);var n=M(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?U(e,t.type,n):t.hasOwnProperty("defaultValue")&&U(e,t.type,M(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function S(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function U(e,t,n){(t!=="number"||V(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var H=Array.isArray;function y(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+M(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function T(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function L(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(o(92));if(H(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:M(n)}}function C(e,t){var n=M(t.value),r=M(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Y(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function te(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Y(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var me,De=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(me=me||document.createElement("div"),me.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=me.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(_e).forEach(function(e){Ie.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_e[t]=_e[e]})});function Ge(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_e.hasOwnProperty(e)&&_e[e]?(""+t).trim():t+"px"}function Ye(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Ge(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var ut=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rt(e,t){if(t){if(ut[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ct(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pt=null;function ht(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mt=null,it=null,at=null;function yt(e){if(e=oi(e)){if(typeof mt!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Zi(t),mt(e.stateNode,e.type,t))}}function wt(e){it?at?at.push(e):at=[e]:it=e}function xt(){if(it){var e=it,t=at;if(at=it=null,yt(e),t)for(e=0;e<t.length;e++)yt(t[e])}}function St(e,t){return e(t)}function Pt(){}var Dt=!1;function Rt(e,t,n){if(Dt)return e(t,n);Dt=!0;try{return St(e,t,n)}finally{Dt=!1,(it!==null||at!==null)&&(Pt(),xt())}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=Zi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var kn=!1;if(z)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){kn=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{kn=!1}function gr(e,t,n,r,s,u,g,A,R){var j=Array.prototype.slice.call(arguments,3);try{t.apply(n,j)}catch(ie){this.onError(ie)}}var mn=!1,bn=null,En=!1,vr=null,Pi={onError:function(e){mn=!0,bn=e}};function Ri(e,t,n,r,s,u,g,A,R){mn=!1,bn=null,gr.apply(Pi,arguments)}function Li(e,t,n,r,s,u,g,A,R){if(Ri.apply(this,arguments),mn){if(mn){var j=bn;mn=!1,bn=null}else throw Error(o(198));En||(En=!0,vr=j)}}function et(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dl(e){if(et(e)!==e)throw Error(o(188))}function Nd(e){var t=e.alternate;if(!t){if(t=et(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return dl(s),e;if(u===r)return dl(s),t;u=u.sibling}throw Error(o(188))}if(n.return!==r.return)n=s,r=u;else{for(var g=!1,A=s.child;A;){if(A===n){g=!0,n=s,r=u;break}if(A===r){g=!0,r=s,n=u;break}A=A.sibling}if(!g){for(A=u.child;A;){if(A===n){g=!0,n=u,r=s;break}if(A===r){g=!0,r=u,n=s;break}A=A.sibling}if(!g)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function fl(e){return e=Nd(e),e!==null?pl(e):null}function pl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pl(e);if(t!==null)return t;e=e.sibling}return null}var hl=i.unstable_scheduleCallback,ml=i.unstable_cancelCallback,Gd=i.unstable_shouldYield,Bd=i.unstable_requestPaint,dt=i.unstable_now,Wd=i.unstable_getCurrentPriorityLevel,Xa=i.unstable_ImmediatePriority,_l=i.unstable_UserBlockingPriority,Ui=i.unstable_NormalPriority,Vd=i.unstable_LowPriority,gl=i.unstable_IdlePriority,Ci=null,_n=null;function qd(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Ci,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:jd,Hd=Math.log,$d=Math.LN2;function jd(e){return e>>>=0,e===0?32:31-(Hd(e)/$d|0)|0}var ki=64,Ii=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,u=e.pingedLanes,g=n&268435455;if(g!==0){var A=g&~s;A!==0?r=Vr(A):(u&=g,u!==0&&(r=Vr(u)))}else g=n&~s,g!==0?r=Vr(g):u!==0&&(r=Vr(u));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,u=t&-t,s>=u||s===16&&(u&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),s=1<<n,r|=e[n],t&=~s;return r}function Qd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes;0<u;){var g=31-an(u),A=1<<g,R=s[g];R===-1?(!(A&n)||A&r)&&(s[g]=Qd(A,t)):R<=t&&(e.expiredLanes|=A),u&=~A}}function Ja(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vl(){var e=ki;return ki<<=1,!(ki&4194240)&&(ki=64),e}function Za(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function Kd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-an(n),u=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~u}}function es(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var je=0;function yl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wl,ts,xl,Sl,Tl,ns=!1,Fi=[],In=null,On=null,Fn=null,Hr=new Map,$r=new Map,Nn=[],Xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bl(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function jr(e,t,n,r,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[s]},t!==null&&(t=oi(t),t!==null&&ts(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Jd(e,t,n,r,s){switch(t){case"focusin":return In=jr(In,e,t,n,r,s),!0;case"dragenter":return On=jr(On,e,t,n,r,s),!0;case"mouseover":return Fn=jr(Fn,e,t,n,r,s),!0;case"pointerover":var u=s.pointerId;return Hr.set(u,jr(Hr.get(u)||null,e,t,n,r,s)),!0;case"gotpointercapture":return u=s.pointerId,$r.set(u,jr($r.get(u)||null,e,t,n,r,s)),!0}return!1}function El(e){var t=rr(e.target);if(t!==null){var n=et(t);if(n!==null){if(t=n.tag,t===13){if(t=cl(n),t!==null){e.blockedOn=t,Tl(e.priority,function(){xl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=is(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pt=r,n.target.dispatchEvent(r),pt=null}else return t=oi(n),t!==null&&ts(t),e.blockedOn=n,!1;t.shift()}return!0}function Ml(e,t,n){Ni(e)&&n.delete(t)}function Zd(){ns=!1,In!==null&&Ni(In)&&(In=null),On!==null&&Ni(On)&&(On=null),Fn!==null&&Ni(Fn)&&(Fn=null),Hr.forEach(Ml),$r.forEach(Ml)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,ns||(ns=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Zd)))}function Yr(e){function t(s){return Qr(s,e)}if(0<Fi.length){Qr(Fi[0],e);for(var n=1;n<Fi.length;n++){var r=Fi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&Qr(In,e),On!==null&&Qr(On,e),Fn!==null&&Qr(Fn,e),Hr.forEach(t),$r.forEach(t),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)El(n),n.blockedOn===null&&Nn.shift()}var yr=fe.ReactCurrentBatchConfig,Gi=!0;function ef(e,t,n,r){var s=je,u=yr.transition;yr.transition=null;try{je=1,rs(e,t,n,r)}finally{je=s,yr.transition=u}}function tf(e,t,n,r){var s=je,u=yr.transition;yr.transition=null;try{je=4,rs(e,t,n,r)}finally{je=s,yr.transition=u}}function rs(e,t,n,r){if(Gi){var s=is(e,t,n,r);if(s===null)xs(e,t,r,Bi,n),bl(e,r);else if(Jd(s,e,t,n,r))r.stopPropagation();else if(bl(e,r),t&4&&-1<Xd.indexOf(e)){for(;s!==null;){var u=oi(s);if(u!==null&&wl(u),u=is(e,t,n,r),u===null&&xs(e,t,r,Bi,n),u===s)break;s=u}s!==null&&r.stopPropagation()}else xs(e,t,r,null,n)}}var Bi=null;function is(e,t,n,r){if(Bi=null,e=ht(r),e=rr(e),e!==null)if(t=et(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bi=e,null}function Dl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wd()){case Xa:return 1;case _l:return 4;case Ui:case Vd:return 16;case gl:return 536870912;default:return 16}default:return 16}}var Gn=null,as=null,Wi=null;function zl(){if(Wi)return Wi;var e,t=as,n=t.length,r,s="value"in Gn?Gn.value:Gn.textContent,u=s.length;for(e=0;e<n&&t[e]===s[e];e++);var g=n-e;for(r=1;r<=g&&t[n-r]===s[u-r];r++);return Wi=s.slice(e,1<r?1-r:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function Al(){return!1}function $t(e){function t(n,r,s,u,g){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(n=e[A],this[A]=n?n(u):u[A]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?qi:Al,this.isPropagationStopped=Al,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=$t(wr),Kr=oe({},wr,{view:0,detail:0}),nf=$t(Kr),os,ls,Xr,Hi=oe({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(os=e.screenX-Xr.screenX,ls=e.screenY-Xr.screenY):ls=os=0,Xr=e),os)},movementY:function(e){return"movementY"in e?e.movementY:ls}}),Pl=$t(Hi),rf=oe({},Hi,{dataTransfer:0}),af=$t(rf),sf=oe({},Kr,{relatedTarget:0}),us=$t(sf),of=oe({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=$t(of),uf=oe({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cf=$t(uf),df=oe({},wr,{data:0}),Rl=$t(df),ff={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hf[e])?!!t[e]:!1}function cs(){return mf}var _f=oe({},Kr,{key:function(e){if(e.key){var t=ff[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=$t(_f),vf=oe({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ll=$t(vf),yf=oe({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),wf=$t(yf),xf=oe({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sf=$t(xf),Tf=oe({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bf=$t(Tf),Ef=[9,13,27,32],ds=z&&"CompositionEvent"in window,Jr=null;z&&"documentMode"in document&&(Jr=document.documentMode);var Mf=z&&"TextEvent"in window&&!Jr,Ul=z&&(!ds||Jr&&8<Jr&&11>=Jr),Cl=" ",kl=!1;function Il(e,t){switch(e){case"keyup":return Ef.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ol(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function Df(e,t){switch(e){case"compositionend":return Ol(t);case"keypress":return t.which!==32?null:(kl=!0,Cl);case"textInput":return e=t.data,e===Cl&&kl?null:e;default:return null}}function zf(e,t){if(xr)return e==="compositionend"||!ds&&Il(e,t)?(e=zl(),Wi=as=Gn=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ul&&t.locale!=="ko"?null:t.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Af[e.type]:t==="textarea"}function Nl(e,t,n,r){wt(r),t=Ki(t,"onChange"),0<t.length&&(n=new ss("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zr=null,ei=null;function Pf(e){ru(e,0)}function $i(e){var t=Mr(e);if(P(t))return e}function Rf(e,t){if(e==="change")return t}var Gl=!1;if(z){var fs;if(z){var ps="oninput"in document;if(!ps){var Bl=document.createElement("div");Bl.setAttribute("oninput","return;"),ps=typeof Bl.oninput=="function"}fs=ps}else fs=!1;Gl=fs&&(!document.documentMode||9<document.documentMode)}function Wl(){Zr&&(Zr.detachEvent("onpropertychange",Vl),ei=Zr=null)}function Vl(e){if(e.propertyName==="value"&&$i(ei)){var t=[];Nl(t,ei,e,ht(e)),Rt(Pf,t)}}function Lf(e,t,n){e==="focusin"?(Wl(),Zr=t,ei=n,Zr.attachEvent("onpropertychange",Vl)):e==="focusout"&&Wl()}function Uf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(ei)}function Cf(e,t){if(e==="click")return $i(t)}function kf(e,t){if(e==="input"||e==="change")return $i(t)}function If(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:If;function ti(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!b.call(t,s)||!sn(e[s],t[s]))return!1}return!0}function ql(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hl(e,t){var n=ql(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ql(n)}}function $l(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$l(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jl(){for(var e=window,t=V();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=V(e.document)}return t}function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Of(e){var t=jl(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$l(n.ownerDocument.documentElement,n)){if(r!==null&&hs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,u=Math.min(r.start,s);r=r.end===void 0?u:Math.min(r.end,s),!e.extend&&u>r&&(s=r,r=u,u=s),s=Hl(n,u);var g=Hl(n,r);s&&g&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),u>r?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=z&&"documentMode"in document&&11>=document.documentMode,Sr=null,ms=null,ni=null,_s=!1;function Ql(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_s||Sr==null||Sr!==V(r)||(r=Sr,"selectionStart"in r&&hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&ti(ni,r)||(ni=r,r=Ki(ms,"onSelect"),0<r.length&&(t=new ss("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tr={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionend:ji("Transition","TransitionEnd")},gs={},Yl={};z&&(Yl=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Qi(e){if(gs[e])return gs[e];if(!Tr[e])return e;var t=Tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yl)return gs[e]=t[n];return e}var Kl=Qi("animationend"),Xl=Qi("animationiteration"),Jl=Qi("animationstart"),Zl=Qi("transitionend"),eu=new Map,tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){eu.set(e,t),w(t,[e])}for(var vs=0;vs<tu.length;vs++){var ys=tu[vs],Nf=ys.toLowerCase(),Gf=ys[0].toUpperCase()+ys.slice(1);Bn(Nf,"on"+Gf)}Bn(Kl,"onAnimationEnd"),Bn(Xl,"onAnimationIteration"),Bn(Jl,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(Zl,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function nu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Li(r,t,void 0,e),e.currentTarget=null}function ru(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var g=r.length-1;0<=g;g--){var A=r[g],R=A.instance,j=A.currentTarget;if(A=A.listener,R!==u&&s.isPropagationStopped())break e;nu(s,A,j),u=R}else for(g=0;g<r.length;g++){if(A=r[g],R=A.instance,j=A.currentTarget,A=A.listener,R!==u&&s.isPropagationStopped())break e;nu(s,A,j),u=R}}}if(En)throw e=vr,En=!1,vr=null,e}function Je(e,t){var n=t[Ds];n===void 0&&(n=t[Ds]=new Set);var r=e+"__bubble";n.has(r)||(iu(t,e,2,!1),n.add(r))}function ws(e,t,n){var r=0;t&&(r|=4),iu(n,e,r,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[Yi]){e[Yi]=!0,f.forEach(function(n){n!=="selectionchange"&&(Bf.has(n)||ws(n,!1,e),ws(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,ws("selectionchange",!1,t))}}function iu(e,t,n,r){switch(Dl(t)){case 1:var s=ef;break;case 4:s=tf;break;default:s=rs}n=s.bind(null,t,n,e),s=void 0,!kn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function xs(e,t,n,r,s){var u=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===s||A.nodeType===8&&A.parentNode===s)break;if(g===4)for(g=r.return;g!==null;){var R=g.tag;if((R===3||R===4)&&(R=g.stateNode.containerInfo,R===s||R.nodeType===8&&R.parentNode===s))return;g=g.return}for(;A!==null;){if(g=rr(A),g===null)return;if(R=g.tag,R===5||R===6){r=u=g;continue e}A=A.parentNode}}r=r.return}Rt(function(){var j=u,ie=ht(n),ae=[];e:{var re=eu.get(e);if(re!==void 0){var de=ss,ge=e;switch(e){case"keypress":if(Vi(n)===0)break e;case"keydown":case"keyup":de=gf;break;case"focusin":ge="focus",de=us;break;case"focusout":ge="blur",de=us;break;case"beforeblur":case"afterblur":de=us;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Pl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=wf;break;case Kl:case Xl:case Jl:de=lf;break;case Zl:de=Sf;break;case"scroll":de=nf;break;case"wheel":de=bf;break;case"copy":case"cut":case"paste":de=cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Ll}var ve=(t&4)!==0,ft=!ve&&e==="scroll",G=ve?re!==null?re+"Capture":null:re;ve=[];for(var k=j,B;k!==null;){B=k;var le=B.stateNode;if(B.tag===5&&le!==null&&(B=le,G!==null&&(le=pn(k,G),le!=null&&ve.push(ai(k,le,B)))),ft)break;k=k.return}0<ve.length&&(re=new de(re,ge,null,n,ie),ae.push({event:re,listeners:ve}))}}if(!(t&7)){e:{if(re=e==="mouseover"||e==="pointerover",de=e==="mouseout"||e==="pointerout",re&&n!==pt&&(ge=n.relatedTarget||n.fromElement)&&(rr(ge)||ge[Mn]))break e;if((de||re)&&(re=ie.window===ie?ie:(re=ie.ownerDocument)?re.defaultView||re.parentWindow:window,de?(ge=n.relatedTarget||n.toElement,de=j,ge=ge?rr(ge):null,ge!==null&&(ft=et(ge),ge!==ft||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(de=null,ge=j),de!==ge)){if(ve=Pl,le="onMouseLeave",G="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ve=Ll,le="onPointerLeave",G="onPointerEnter",k="pointer"),ft=de==null?re:Mr(de),B=ge==null?re:Mr(ge),re=new ve(le,k+"leave",de,n,ie),re.target=ft,re.relatedTarget=B,le=null,rr(ie)===j&&(ve=new ve(G,k+"enter",ge,n,ie),ve.target=B,ve.relatedTarget=ft,le=ve),ft=le,de&&ge)t:{for(ve=de,G=ge,k=0,B=ve;B;B=br(B))k++;for(B=0,le=G;le;le=br(le))B++;for(;0<k-B;)ve=br(ve),k--;for(;0<B-k;)G=br(G),B--;for(;k--;){if(ve===G||G!==null&&ve===G.alternate)break t;ve=br(ve),G=br(G)}ve=null}else ve=null;de!==null&&au(ae,re,de,ve,!1),ge!==null&&ft!==null&&au(ae,ft,ge,ve,!0)}}e:{if(re=j?Mr(j):window,de=re.nodeName&&re.nodeName.toLowerCase(),de==="select"||de==="input"&&re.type==="file")var we=Rf;else if(Fl(re))if(Gl)we=kf;else{we=Uf;var be=Lf}else(de=re.nodeName)&&de.toLowerCase()==="input"&&(re.type==="checkbox"||re.type==="radio")&&(we=Cf);if(we&&(we=we(e,j))){Nl(ae,we,n,ie);break e}be&&be(e,re,j),e==="focusout"&&(be=re._wrapperState)&&be.controlled&&re.type==="number"&&U(re,"number",re.value)}switch(be=j?Mr(j):window,e){case"focusin":(Fl(be)||be.contentEditable==="true")&&(Sr=be,ms=j,ni=null);break;case"focusout":ni=ms=Sr=null;break;case"mousedown":_s=!0;break;case"contextmenu":case"mouseup":case"dragend":_s=!1,Ql(ae,n,ie);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":Ql(ae,n,ie)}var Ee;if(ds)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else xr?Il(e,n)&&(Ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ae="onCompositionStart");Ae&&(Ul&&n.locale!=="ko"&&(xr||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&xr&&(Ee=zl()):(Gn=ie,as="value"in Gn?Gn.value:Gn.textContent,xr=!0)),be=Ki(j,Ae),0<be.length&&(Ae=new Rl(Ae,e,null,n,ie),ae.push({event:Ae,listeners:be}),Ee?Ae.data=Ee:(Ee=Ol(n),Ee!==null&&(Ae.data=Ee)))),(Ee=Mf?Df(e,n):zf(e,n))&&(j=Ki(j,"onBeforeInput"),0<j.length&&(ie=new Rl("onBeforeInput","beforeinput",null,n,ie),ae.push({event:ie,listeners:j}),ie.data=Ee))}ru(ae,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,u=s.stateNode;s.tag===5&&u!==null&&(s=u,u=pn(e,n),u!=null&&r.unshift(ai(e,u,s)),u=pn(e,t),u!=null&&r.push(ai(e,u,s))),e=e.return}return r}function br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,t,n,r,s){for(var u=t._reactName,g=[];n!==null&&n!==r;){var A=n,R=A.alternate,j=A.stateNode;if(R!==null&&R===r)break;A.tag===5&&j!==null&&(A=j,s?(R=pn(n,u),R!=null&&g.unshift(ai(n,R,A))):s||(R=pn(n,u),R!=null&&g.push(ai(n,R,A)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var Wf=/\r\n?/g,Vf=/\u0000|\uFFFD/g;function su(e){return(typeof e=="string"?e:""+e).replace(Wf,`
`).replace(Vf,"")}function Xi(e,t,n){if(t=su(t),su(e)!==t&&n)throw Error(o(425))}function Ji(){}var Ss=null,Ts=null;function bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Es=typeof setTimeout=="function"?setTimeout:void 0,qf=typeof clearTimeout=="function"?clearTimeout:void 0,ou=typeof Promise=="function"?Promise:void 0,Hf=typeof queueMicrotask=="function"?queueMicrotask:typeof ou<"u"?function(e){return ou.resolve(null).then(e).catch($f)}:Es;function $f(e){setTimeout(function(){throw e})}function Ms(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Yr(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),gn="__reactFiber$"+Er,si="__reactProps$"+Er,Mn="__reactContainer$"+Er,Ds="__reactEvents$"+Er,jf="__reactListeners$"+Er,Qf="__reactHandles$"+Er;function rr(e){var t=e[gn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mn]||n[gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lu(e);e!==null;){if(n=e[gn])return n;e=lu(e)}return t}e=n,n=e.parentNode}return null}function oi(e){return e=e[gn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Zi(e){return e[si]||null}var zs=[],Dr=-1;function Vn(e){return{current:e}}function Ze(e){0>Dr||(e.current=zs[Dr],zs[Dr]=null,Dr--)}function Ke(e,t){Dr++,zs[Dr]=e.current,e.current=t}var qn={},Lt=Vn(qn),Gt=Vn(!1),ir=qn;function zr(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},u;for(u in n)s[u]=t[u];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Bt(e){return e=e.childContextTypes,e!=null}function ea(){Ze(Gt),Ze(Lt)}function uu(e,t,n){if(Lt.current!==qn)throw Error(o(168));Ke(Lt,t),Ke(Gt,n)}function cu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(o(108,p(e)||"Unknown",s));return oe({},n,r)}function ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,ir=Lt.current,Ke(Lt,e),Ke(Gt,Gt.current),!0}function du(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=cu(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,Ze(Gt),Ze(Lt),Ke(Lt,e)):Ze(Gt),Ke(Gt,n)}var Dn=null,na=!1,As=!1;function fu(e){Dn===null?Dn=[e]:Dn.push(e)}function Yf(e){na=!0,fu(e)}function Hn(){if(!As&&Dn!==null){As=!0;var e=0,t=je;try{var n=Dn;for(je=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dn=null,na=!1}catch(s){throw Dn!==null&&(Dn=Dn.slice(e+1)),hl(Xa,Hn),s}finally{je=t,As=!1}}return null}var Ar=[],Pr=0,ra=null,ia=0,Jt=[],Zt=0,ar=null,zn=1,An="";function sr(e,t){Ar[Pr++]=ia,Ar[Pr++]=ra,ra=e,ia=t}function pu(e,t,n){Jt[Zt++]=zn,Jt[Zt++]=An,Jt[Zt++]=ar,ar=e;var r=zn;e=An;var s=32-an(r)-1;r&=~(1<<s),n+=1;var u=32-an(t)+s;if(30<u){var g=s-s%5;u=(r&(1<<g)-1).toString(32),r>>=g,s-=g,zn=1<<32-an(t)+s|n<<s|r,An=u+e}else zn=1<<u|n<<s|r,An=e}function Ps(e){e.return!==null&&(sr(e,1),pu(e,1,0))}function Rs(e){for(;e===ra;)ra=Ar[--Pr],Ar[Pr]=null,ia=Ar[--Pr],Ar[Pr]=null;for(;e===ar;)ar=Jt[--Zt],Jt[Zt]=null,An=Jt[--Zt],Jt[Zt]=null,zn=Jt[--Zt],Jt[Zt]=null}var jt=null,Qt=null,tt=!1,on=null;function hu(e,t){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,Qt=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,Qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:zn,overflow:An}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,Qt=null,!0):!1;default:return!1}}function Ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Us(e){if(tt){var t=Qt;if(t){var n=t;if(!mu(e,t)){if(Ls(e))throw Error(o(418));t=Wn(n.nextSibling);var r=jt;t&&mu(e,t)?hu(r,n):(e.flags=e.flags&-4097|2,tt=!1,jt=e)}}else{if(Ls(e))throw Error(o(418));e.flags=e.flags&-4097|2,tt=!1,jt=e}}}function _u(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function aa(e){if(e!==jt)return!1;if(!tt)return _u(e),tt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bs(e.type,e.memoizedProps)),t&&(t=Qt)){if(Ls(e))throw gu(),Error(o(418));for(;t;)hu(e,t),t=Wn(t.nextSibling)}if(_u(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qt=Wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qt=null}}else Qt=jt?Wn(e.stateNode.nextSibling):null;return!0}function gu(){for(var e=Qt;e;)e=Wn(e.nextSibling)}function Rr(){Qt=jt=null,tt=!1}function Cs(e){on===null?on=[e]:on.push(e)}var Kf=fe.ReactCurrentBatchConfig;function li(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var s=r,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(g){var A=s.refs;g===null?delete A[u]:A[u]=g},t._stringRef=u,t)}if(typeof e!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function sa(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vu(e){var t=e._init;return t(e._payload)}function yu(e){function t(G,k){if(e){var B=G.deletions;B===null?(G.deletions=[k],G.flags|=16):B.push(k)}}function n(G,k){if(!e)return null;for(;k!==null;)t(G,k),k=k.sibling;return null}function r(G,k){for(G=new Map;k!==null;)k.key!==null?G.set(k.key,k):G.set(k.index,k),k=k.sibling;return G}function s(G,k){return G=Zn(G,k),G.index=0,G.sibling=null,G}function u(G,k,B){return G.index=B,e?(B=G.alternate,B!==null?(B=B.index,B<k?(G.flags|=2,k):B):(G.flags|=2,k)):(G.flags|=1048576,k)}function g(G){return e&&G.alternate===null&&(G.flags|=2),G}function A(G,k,B,le){return k===null||k.tag!==6?(k=Mo(B,G.mode,le),k.return=G,k):(k=s(k,B),k.return=G,k)}function R(G,k,B,le){var we=B.type;return we===ke?ie(G,k,B.props.children,le,B.key):k!==null&&(k.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===qe&&vu(we)===k.type)?(le=s(k,B.props),le.ref=li(G,k,B),le.return=G,le):(le=Pa(B.type,B.key,B.props,null,G.mode,le),le.ref=li(G,k,B),le.return=G,le)}function j(G,k,B,le){return k===null||k.tag!==4||k.stateNode.containerInfo!==B.containerInfo||k.stateNode.implementation!==B.implementation?(k=Do(B,G.mode,le),k.return=G,k):(k=s(k,B.children||[]),k.return=G,k)}function ie(G,k,B,le,we){return k===null||k.tag!==7?(k=hr(B,G.mode,le,we),k.return=G,k):(k=s(k,B),k.return=G,k)}function ae(G,k,B){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Mo(""+k,G.mode,B),k.return=G,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Le:return B=Pa(k.type,k.key,k.props,null,G.mode,B),B.ref=li(G,null,k),B.return=G,B;case Ce:return k=Do(k,G.mode,B),k.return=G,k;case qe:var le=k._init;return ae(G,le(k._payload),B)}if(H(k)||ye(k))return k=hr(k,G.mode,B,null),k.return=G,k;sa(G,k)}return null}function re(G,k,B,le){var we=k!==null?k.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return we!==null?null:A(G,k,""+B,le);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Le:return B.key===we?R(G,k,B,le):null;case Ce:return B.key===we?j(G,k,B,le):null;case qe:return we=B._init,re(G,k,we(B._payload),le)}if(H(B)||ye(B))return we!==null?null:ie(G,k,B,le,null);sa(G,B)}return null}function de(G,k,B,le,we){if(typeof le=="string"&&le!==""||typeof le=="number")return G=G.get(B)||null,A(k,G,""+le,we);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case Le:return G=G.get(le.key===null?B:le.key)||null,R(k,G,le,we);case Ce:return G=G.get(le.key===null?B:le.key)||null,j(k,G,le,we);case qe:var be=le._init;return de(G,k,B,be(le._payload),we)}if(H(le)||ye(le))return G=G.get(B)||null,ie(k,G,le,we,null);sa(k,le)}return null}function ge(G,k,B,le){for(var we=null,be=null,Ee=k,Ae=k=0,Et=null;Ee!==null&&Ae<B.length;Ae++){Ee.index>Ae?(Et=Ee,Ee=null):Et=Ee.sibling;var $e=re(G,Ee,B[Ae],le);if($e===null){Ee===null&&(Ee=Et);break}e&&Ee&&$e.alternate===null&&t(G,Ee),k=u($e,k,Ae),be===null?we=$e:be.sibling=$e,be=$e,Ee=Et}if(Ae===B.length)return n(G,Ee),tt&&sr(G,Ae),we;if(Ee===null){for(;Ae<B.length;Ae++)Ee=ae(G,B[Ae],le),Ee!==null&&(k=u(Ee,k,Ae),be===null?we=Ee:be.sibling=Ee,be=Ee);return tt&&sr(G,Ae),we}for(Ee=r(G,Ee);Ae<B.length;Ae++)Et=de(Ee,G,Ae,B[Ae],le),Et!==null&&(e&&Et.alternate!==null&&Ee.delete(Et.key===null?Ae:Et.key),k=u(Et,k,Ae),be===null?we=Et:be.sibling=Et,be=Et);return e&&Ee.forEach(function(er){return t(G,er)}),tt&&sr(G,Ae),we}function ve(G,k,B,le){var we=ye(B);if(typeof we!="function")throw Error(o(150));if(B=we.call(B),B==null)throw Error(o(151));for(var be=we=null,Ee=k,Ae=k=0,Et=null,$e=B.next();Ee!==null&&!$e.done;Ae++,$e=B.next()){Ee.index>Ae?(Et=Ee,Ee=null):Et=Ee.sibling;var er=re(G,Ee,$e.value,le);if(er===null){Ee===null&&(Ee=Et);break}e&&Ee&&er.alternate===null&&t(G,Ee),k=u(er,k,Ae),be===null?we=er:be.sibling=er,be=er,Ee=Et}if($e.done)return n(G,Ee),tt&&sr(G,Ae),we;if(Ee===null){for(;!$e.done;Ae++,$e=B.next())$e=ae(G,$e.value,le),$e!==null&&(k=u($e,k,Ae),be===null?we=$e:be.sibling=$e,be=$e);return tt&&sr(G,Ae),we}for(Ee=r(G,Ee);!$e.done;Ae++,$e=B.next())$e=de(Ee,G,Ae,$e.value,le),$e!==null&&(e&&$e.alternate!==null&&Ee.delete($e.key===null?Ae:$e.key),k=u($e,k,Ae),be===null?we=$e:be.sibling=$e,be=$e);return e&&Ee.forEach(function(zp){return t(G,zp)}),tt&&sr(G,Ae),we}function ft(G,k,B,le){if(typeof B=="object"&&B!==null&&B.type===ke&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Le:e:{for(var we=B.key,be=k;be!==null;){if(be.key===we){if(we=B.type,we===ke){if(be.tag===7){n(G,be.sibling),k=s(be,B.props.children),k.return=G,G=k;break e}}else if(be.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===qe&&vu(we)===be.type){n(G,be.sibling),k=s(be,B.props),k.ref=li(G,be,B),k.return=G,G=k;break e}n(G,be);break}else t(G,be);be=be.sibling}B.type===ke?(k=hr(B.props.children,G.mode,le,B.key),k.return=G,G=k):(le=Pa(B.type,B.key,B.props,null,G.mode,le),le.ref=li(G,k,B),le.return=G,G=le)}return g(G);case Ce:e:{for(be=B.key;k!==null;){if(k.key===be)if(k.tag===4&&k.stateNode.containerInfo===B.containerInfo&&k.stateNode.implementation===B.implementation){n(G,k.sibling),k=s(k,B.children||[]),k.return=G,G=k;break e}else{n(G,k);break}else t(G,k);k=k.sibling}k=Do(B,G.mode,le),k.return=G,G=k}return g(G);case qe:return be=B._init,ft(G,k,be(B._payload),le)}if(H(B))return ge(G,k,B,le);if(ye(B))return ve(G,k,B,le);sa(G,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,k!==null&&k.tag===6?(n(G,k.sibling),k=s(k,B),k.return=G,G=k):(n(G,k),k=Mo(B,G.mode,le),k.return=G,G=k),g(G)):n(G,k)}return ft}var Lr=yu(!0),wu=yu(!1),oa=Vn(null),la=null,Ur=null,ks=null;function Is(){ks=Ur=la=null}function Os(e){var t=oa.current;Ze(oa),e._currentValue=t}function Fs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cr(e,t){la=e,ks=Ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Wt=!0),e.firstContext=null)}function en(e){var t=e._currentValue;if(ks!==e)if(e={context:e,memoizedValue:t,next:null},Ur===null){if(la===null)throw Error(o(308));Ur=e,la.dependencies={lanes:0,firstContext:e}}else Ur=Ur.next=e;return t}var or=null;function Ns(e){or===null?or=[e]:or.push(e)}function xu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Ns(t)):(n.next=s.next,s.next=n),t.interleaved=n,Pn(e,r)}function Pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $n=!1;function Gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,He&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Pn(e,n)}return s=r.interleaved,s===null?(t.next=t,Ns(r)):(t.next=s.next,s.next=t),r.interleaved=t,Pn(e,n)}function ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,es(e,n)}}function Tu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var g={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?s=u=g:u=u.next=g,n=n.next}while(n!==null);u===null?s=u=t:u=u.next=t}else s=u=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ca(e,t,n,r){var s=e.updateQueue;$n=!1;var u=s.firstBaseUpdate,g=s.lastBaseUpdate,A=s.shared.pending;if(A!==null){s.shared.pending=null;var R=A,j=R.next;R.next=null,g===null?u=j:g.next=j,g=R;var ie=e.alternate;ie!==null&&(ie=ie.updateQueue,A=ie.lastBaseUpdate,A!==g&&(A===null?ie.firstBaseUpdate=j:A.next=j,ie.lastBaseUpdate=R))}if(u!==null){var ae=s.baseState;g=0,ie=j=R=null,A=u;do{var re=A.lane,de=A.eventTime;if((r&re)===re){ie!==null&&(ie=ie.next={eventTime:de,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ge=e,ve=A;switch(re=t,de=n,ve.tag){case 1:if(ge=ve.payload,typeof ge=="function"){ae=ge.call(de,ae,re);break e}ae=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ve.payload,re=typeof ge=="function"?ge.call(de,ae,re):ge,re==null)break e;ae=oe({},ae,re);break e;case 2:$n=!0}}A.callback!==null&&A.lane!==0&&(e.flags|=64,re=s.effects,re===null?s.effects=[A]:re.push(A))}else de={eventTime:de,lane:re,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ie===null?(j=ie=de,R=ae):ie=ie.next=de,g|=re;if(A=A.next,A===null){if(A=s.shared.pending,A===null)break;re=A,A=re.next,re.next=null,s.lastBaseUpdate=re,s.shared.pending=null}}while(!0);if(ie===null&&(R=ae),s.baseState=R,s.firstBaseUpdate=j,s.lastBaseUpdate=ie,t=s.shared.interleaved,t!==null){s=t;do g|=s.lane,s=s.next;while(s!==t)}else u===null&&(s.shared.lanes=0);cr|=g,e.lanes=g,e.memoizedState=ae}}function bu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(o(191,s));s.call(r)}}}var ui={},vn=Vn(ui),ci=Vn(ui),di=Vn(ui);function lr(e){if(e===ui)throw Error(o(174));return e}function Bs(e,t){switch(Ke(di,t),Ke(ci,e),Ke(vn,ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:te(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=te(t,e)}Ze(vn),Ke(vn,t)}function kr(){Ze(vn),Ze(ci),Ze(di)}function Eu(e){lr(di.current);var t=lr(vn.current),n=te(t,e.type);t!==n&&(Ke(ci,e),Ke(vn,n))}function Ws(e){ci.current===e&&(Ze(vn),Ze(ci))}var st=Vn(0);function da(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vs=[];function qs(){for(var e=0;e<Vs.length;e++)Vs[e]._workInProgressVersionPrimary=null;Vs.length=0}var fa=fe.ReactCurrentDispatcher,Hs=fe.ReactCurrentBatchConfig,ur=0,ot=null,gt=null,Tt=null,pa=!1,fi=!1,pi=0,Xf=0;function Ut(){throw Error(o(321))}function $s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sn(e[n],t[n]))return!1;return!0}function js(e,t,n,r,s,u){if(ur=u,ot=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fa.current=e===null||e.memoizedState===null?tp:np,e=n(r,s),fi){u=0;do{if(fi=!1,pi=0,25<=u)throw Error(o(301));u+=1,Tt=gt=null,t.updateQueue=null,fa.current=rp,e=n(r,s)}while(fi)}if(fa.current=_a,t=gt!==null&&gt.next!==null,ur=0,Tt=gt=ot=null,pa=!1,t)throw Error(o(300));return e}function Qs(){var e=pi!==0;return pi=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?ot.memoizedState=Tt=e:Tt=Tt.next=e,Tt}function tn(){if(gt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=gt.next;var t=Tt===null?ot.memoizedState:Tt.next;if(t!==null)Tt=t,gt=e;else{if(e===null)throw Error(o(310));gt=e,e={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?ot.memoizedState=Tt=e:Tt=Tt.next=e}return Tt}function hi(e,t){return typeof t=="function"?t(e):t}function Ys(e){var t=tn(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=gt,s=r.baseQueue,u=n.pending;if(u!==null){if(s!==null){var g=s.next;s.next=u.next,u.next=g}r.baseQueue=s=u,n.pending=null}if(s!==null){u=s.next,r=r.baseState;var A=g=null,R=null,j=u;do{var ie=j.lane;if((ur&ie)===ie)R!==null&&(R=R.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),r=j.hasEagerState?j.eagerState:e(r,j.action);else{var ae={lane:ie,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};R===null?(A=R=ae,g=r):R=R.next=ae,ot.lanes|=ie,cr|=ie}j=j.next}while(j!==null&&j!==u);R===null?g=r:R.next=A,sn(r,t.memoizedState)||(Wt=!0),t.memoizedState=r,t.baseState=g,t.baseQueue=R,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do u=s.lane,ot.lanes|=u,cr|=u,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ks(e){var t=tn(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,u=t.memoizedState;if(s!==null){n.pending=null;var g=s=s.next;do u=e(u,g.action),g=g.next;while(g!==s);sn(u,t.memoizedState)||(Wt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}function Mu(){}function Du(e,t){var n=ot,r=tn(),s=t(),u=!sn(r.memoizedState,s);if(u&&(r.memoizedState=s,Wt=!0),r=r.queue,Xs(Pu.bind(null,n,r,e),[e]),r.getSnapshot!==t||u||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,mi(9,Au.bind(null,n,r,s,t),void 0,null),bt===null)throw Error(o(349));ur&30||zu(n,t,s)}return s}function zu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Au(e,t,n,r){t.value=n,t.getSnapshot=r,Ru(t)&&Lu(e)}function Pu(e,t,n){return n(function(){Ru(t)&&Lu(e)})}function Ru(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sn(e,n)}catch{return!0}}function Lu(e){var t=Pn(e,1);t!==null&&dn(t,e,1,-1)}function Uu(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hi,lastRenderedState:e},t.queue=e,e=e.dispatch=ep.bind(null,ot,e),[t.memoizedState,e]}function mi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cu(){return tn().memoizedState}function ha(e,t,n,r){var s=yn();ot.flags|=e,s.memoizedState=mi(1|t,n,void 0,r===void 0?null:r)}function ma(e,t,n,r){var s=tn();r=r===void 0?null:r;var u=void 0;if(gt!==null){var g=gt.memoizedState;if(u=g.destroy,r!==null&&$s(r,g.deps)){s.memoizedState=mi(t,n,u,r);return}}ot.flags|=e,s.memoizedState=mi(1|t,n,u,r)}function ku(e,t){return ha(8390656,8,e,t)}function Xs(e,t){return ma(2048,8,e,t)}function Iu(e,t){return ma(4,2,e,t)}function Ou(e,t){return ma(4,4,e,t)}function Fu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nu(e,t,n){return n=n!=null?n.concat([e]):null,ma(4,4,Fu.bind(null,t,e),n)}function Js(){}function Gu(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bu(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wu(e,t,n){return ur&21?(sn(n,t)||(n=vl(),ot.lanes|=n,cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Wt=!0),e.memoizedState=n)}function Jf(e,t){var n=je;je=n!==0&&4>n?n:4,e(!0);var r=Hs.transition;Hs.transition={};try{e(!1),t()}finally{je=n,Hs.transition=r}}function Vu(){return tn().memoizedState}function Zf(e,t,n){var r=Xn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qu(e))Hu(t,n);else if(n=xu(e,t,n,r),n!==null){var s=Ft();dn(n,e,r,s),$u(n,t,r)}}function ep(e,t,n){var r=Xn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qu(e))Hu(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var g=t.lastRenderedState,A=u(g,n);if(s.hasEagerState=!0,s.eagerState=A,sn(A,g)){var R=t.interleaved;R===null?(s.next=s,Ns(t)):(s.next=R.next,R.next=s),t.interleaved=s;return}}catch{}finally{}n=xu(e,t,s,r),n!==null&&(s=Ft(),dn(n,e,r,s),$u(n,t,r))}}function qu(e){var t=e.alternate;return e===ot||t!==null&&t===ot}function Hu(e,t){fi=pa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $u(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,es(e,n)}}var _a={readContext:en,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},tp={readContext:en,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:en,useEffect:ku,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ha(4194308,4,Fu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ha(4194308,4,e,t)},useInsertionEffect:function(e,t){return ha(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zf.bind(null,ot,e),[r.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:Uu,useDebugValue:Js,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Uu(!1),t=e[0];return e=Jf.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ot,s=yn();if(tt){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),bt===null)throw Error(o(349));ur&30||zu(r,t,n)}s.memoizedState=n;var u={value:n,getSnapshot:t};return s.queue=u,ku(Pu.bind(null,r,u,e),[e]),r.flags|=2048,mi(9,Au.bind(null,r,u,n,t),void 0,null),n},useId:function(){var e=yn(),t=bt.identifierPrefix;if(tt){var n=An,r=zn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},np={readContext:en,useCallback:Gu,useContext:en,useEffect:Xs,useImperativeHandle:Nu,useInsertionEffect:Iu,useLayoutEffect:Ou,useMemo:Bu,useReducer:Ys,useRef:Cu,useState:function(){return Ys(hi)},useDebugValue:Js,useDeferredValue:function(e){var t=tn();return Wu(t,gt.memoizedState,e)},useTransition:function(){var e=Ys(hi)[0],t=tn().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Du,useId:Vu,unstable_isNewReconciler:!1},rp={readContext:en,useCallback:Gu,useContext:en,useEffect:Xs,useImperativeHandle:Nu,useInsertionEffect:Iu,useLayoutEffect:Ou,useMemo:Bu,useReducer:Ks,useRef:Cu,useState:function(){return Ks(hi)},useDebugValue:Js,useDeferredValue:function(e){var t=tn();return gt===null?t.memoizedState=e:Wu(t,gt.memoizedState,e)},useTransition:function(){var e=Ks(hi)[0],t=tn().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Du,useId:Vu,unstable_isNewReconciler:!1};function ln(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ga={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ft(),s=Xn(e),u=Rn(r,s);u.payload=t,n!=null&&(u.callback=n),t=jn(e,u,s),t!==null&&(dn(t,e,s,r),ua(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ft(),s=Xn(e),u=Rn(r,s);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=jn(e,u,s),t!==null&&(dn(t,e,s,r),ua(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ft(),r=Xn(e),s=Rn(n,r);s.tag=2,t!=null&&(s.callback=t),t=jn(e,s,r),t!==null&&(dn(t,e,r,n),ua(t,e,r))}};function ju(e,t,n,r,s,u,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,g):t.prototype&&t.prototype.isPureReactComponent?!ti(n,r)||!ti(s,u):!0}function Qu(e,t,n){var r=!1,s=qn,u=t.contextType;return typeof u=="object"&&u!==null?u=en(u):(s=Bt(t)?ir:Lt.current,r=t.contextTypes,u=(r=r!=null)?zr(e,s):qn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ga,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=u),t}function Yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ga.enqueueReplaceState(t,t.state,null)}function eo(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Gs(e);var u=t.contextType;typeof u=="object"&&u!==null?s.context=en(u):(u=Bt(t)?ir:Lt.current,s.context=zr(e,u)),s.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Zs(e,t,u,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ga.enqueueReplaceState(s,s.state,null),ca(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t){try{var n="",r=t;do n+=Re(r),r=r.return;while(r);var s=n}catch(u){s=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:s,digest:null}}function to(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function no(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ip=typeof WeakMap=="function"?WeakMap:Map;function Ku(e,t,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ba||(ba=!0,vo=r),no(e,t)},n}function Xu(e,t,n){n=Rn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){no(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){no(e,t),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),n}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ip;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=vp.bind(null,e,t,n),t.then(e,e))}function Zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ec(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rn(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var ap=fe.ReactCurrentOwner,Wt=!1;function Ot(e,t,n,r){t.child=e===null?wu(t,null,n,r):Lr(t,e.child,n,r)}function tc(e,t,n,r,s){n=n.render;var u=t.ref;return Cr(t,s),r=js(e,t,n,r,u,s),n=Qs(),e!==null&&!Wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ln(e,t,s)):(tt&&n&&Ps(t),t.flags|=1,Ot(e,t,r,s),t.child)}function nc(e,t,n,r,s){if(e===null){var u=n.type;return typeof u=="function"&&!Eo(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,rc(e,t,u,r,s)):(e=Pa(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!(e.lanes&s)){var g=u.memoizedProps;if(n=n.compare,n=n!==null?n:ti,n(g,r)&&e.ref===t.ref)return Ln(e,t,s)}return t.flags|=1,e=Zn(u,r),e.ref=t.ref,e.return=t,t.child=e}function rc(e,t,n,r,s){if(e!==null){var u=e.memoizedProps;if(ti(u,r)&&e.ref===t.ref)if(Wt=!1,t.pendingProps=r=u,(e.lanes&s)!==0)e.flags&131072&&(Wt=!0);else return t.lanes=e.lanes,Ln(e,t,s)}return ro(e,t,n,r,s)}function ic(e,t,n){var r=t.pendingProps,s=r.children,u=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Fr,Yt),Yt|=n;else{if(!(n&1073741824))return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ke(Fr,Yt),Yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=u!==null?u.baseLanes:n,Ke(Fr,Yt),Yt|=r}else u!==null?(r=u.baseLanes|n,t.memoizedState=null):r=n,Ke(Fr,Yt),Yt|=r;return Ot(e,t,s,n),t.child}function ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ro(e,t,n,r,s){var u=Bt(n)?ir:Lt.current;return u=zr(t,u),Cr(t,s),n=js(e,t,n,r,u,s),r=Qs(),e!==null&&!Wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ln(e,t,s)):(tt&&r&&Ps(t),t.flags|=1,Ot(e,t,n,s),t.child)}function sc(e,t,n,r,s){if(Bt(n)){var u=!0;ta(t)}else u=!1;if(Cr(t,s),t.stateNode===null)ya(e,t),Qu(t,n,r),eo(t,n,r,s),r=!0;else if(e===null){var g=t.stateNode,A=t.memoizedProps;g.props=A;var R=g.context,j=n.contextType;typeof j=="object"&&j!==null?j=en(j):(j=Bt(n)?ir:Lt.current,j=zr(t,j));var ie=n.getDerivedStateFromProps,ae=typeof ie=="function"||typeof g.getSnapshotBeforeUpdate=="function";ae||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(A!==r||R!==j)&&Yu(t,g,r,j),$n=!1;var re=t.memoizedState;g.state=re,ca(t,r,g,s),R=t.memoizedState,A!==r||re!==R||Gt.current||$n?(typeof ie=="function"&&(Zs(t,n,ie,r),R=t.memoizedState),(A=$n||ju(t,n,A,r,re,R,j))?(ae||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=R),g.props=r,g.state=R,g.context=j,r=A):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{g=t.stateNode,Su(e,t),A=t.memoizedProps,j=t.type===t.elementType?A:ln(t.type,A),g.props=j,ae=t.pendingProps,re=g.context,R=n.contextType,typeof R=="object"&&R!==null?R=en(R):(R=Bt(n)?ir:Lt.current,R=zr(t,R));var de=n.getDerivedStateFromProps;(ie=typeof de=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(A!==ae||re!==R)&&Yu(t,g,r,R),$n=!1,re=t.memoizedState,g.state=re,ca(t,r,g,s);var ge=t.memoizedState;A!==ae||re!==ge||Gt.current||$n?(typeof de=="function"&&(Zs(t,n,de,r),ge=t.memoizedState),(j=$n||ju(t,n,j,r,re,ge,R)||!1)?(ie||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(r,ge,R),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(r,ge,R)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||A===e.memoizedProps&&re===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&re===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ge),g.props=r,g.state=ge,g.context=R,r=j):(typeof g.componentDidUpdate!="function"||A===e.memoizedProps&&re===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&re===e.memoizedState||(t.flags|=1024),r=!1)}return io(e,t,n,r,u,s)}function io(e,t,n,r,s,u){ac(e,t);var g=(t.flags&128)!==0;if(!r&&!g)return s&&du(t,n,!1),Ln(e,t,u);r=t.stateNode,ap.current=t;var A=g&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&g?(t.child=Lr(t,e.child,null,u),t.child=Lr(t,null,A,u)):Ot(e,t,A,u),t.memoizedState=r.state,s&&du(t,n,!0),t.child}function oc(e){var t=e.stateNode;t.pendingContext?uu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uu(e,t.context,!1),Bs(e,t.containerInfo)}function lc(e,t,n,r,s){return Rr(),Cs(s),t.flags|=256,Ot(e,t,n,r),t.child}var ao={dehydrated:null,treeContext:null,retryLane:0};function so(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,t,n){var r=t.pendingProps,s=st.current,u=!1,g=(t.flags&128)!==0,A;if((A=g)||(A=e!==null&&e.memoizedState===null?!1:(s&2)!==0),A?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ke(st,s&1),e===null)return Us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(g=r.children,e=r.fallback,u?(r=t.mode,u=t.child,g={mode:"hidden",children:g},!(r&1)&&u!==null?(u.childLanes=0,u.pendingProps=g):u=Ra(g,r,0,null),e=hr(e,r,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=so(n),t.memoizedState=ao,e):oo(t,g));if(s=e.memoizedState,s!==null&&(A=s.dehydrated,A!==null))return sp(e,t,g,r,A,s,n);if(u){u=r.fallback,g=t.mode,s=e.child,A=s.sibling;var R={mode:"hidden",children:r.children};return!(g&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=R,t.deletions=null):(r=Zn(s,R),r.subtreeFlags=s.subtreeFlags&14680064),A!==null?u=Zn(A,u):(u=hr(u,g,n,null),u.flags|=2),u.return=t,r.return=t,r.sibling=u,t.child=r,r=u,u=t.child,g=e.child.memoizedState,g=g===null?so(n):{baseLanes:g.baseLanes|n,cachePool:null,transitions:g.transitions},u.memoizedState=g,u.childLanes=e.childLanes&~n,t.memoizedState=ao,r}return u=e.child,e=u.sibling,r=Zn(u,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function oo(e,t){return t=Ra({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function va(e,t,n,r){return r!==null&&Cs(r),Lr(t,e.child,null,n),e=oo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sp(e,t,n,r,s,u,g){if(n)return t.flags&256?(t.flags&=-257,r=to(Error(o(422))),va(e,t,g,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=r.fallback,s=t.mode,r=Ra({mode:"visible",children:r.children},s,0,null),u=hr(u,s,g,null),u.flags|=2,r.return=t,u.return=t,r.sibling=u,t.child=r,t.mode&1&&Lr(t,e.child,null,g),t.child.memoizedState=so(g),t.memoizedState=ao,u);if(!(t.mode&1))return va(e,t,g,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var A=r.dgst;return r=A,u=Error(o(419)),r=to(u,r,void 0),va(e,t,g,r)}if(A=(g&e.childLanes)!==0,Wt||A){if(r=bt,r!==null){switch(g&-g){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|g)?0:s,s!==0&&s!==u.retryLane&&(u.retryLane=s,Pn(e,s),dn(r,e,s,-1))}return bo(),r=to(Error(o(421))),va(e,t,g,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=yp.bind(null,e),s._reactRetry=t,null):(e=u.treeContext,Qt=Wn(s.nextSibling),jt=t,tt=!0,on=null,e!==null&&(Jt[Zt++]=zn,Jt[Zt++]=An,Jt[Zt++]=ar,zn=e.id,An=e.overflow,ar=t),t=oo(t,r.children),t.flags|=4096,t)}function cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fs(e.return,t,n)}function lo(e,t,n,r,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=s)}function dc(e,t,n){var r=t.pendingProps,s=r.revealOrder,u=r.tail;if(Ot(e,t,r.children,n),r=st.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cc(e,n,t);else if(e.tag===19)cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ke(st,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&da(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),lo(t,!1,s,n,u);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&da(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}lo(t,!0,n,null,u);break;case"together":lo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ya(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function op(e,t,n){switch(t.tag){case 3:oc(t),Rr();break;case 5:Eu(t);break;case 1:Bt(t.type)&&ta(t);break;case 4:Bs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Ke(oa,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ke(st,st.current&1),t.flags|=128,null):n&t.child.childLanes?uc(e,t,n):(Ke(st,st.current&1),e=Ln(e,t,n),e!==null?e.sibling:null);Ke(st,st.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ke(st,st.current),r)break;return null;case 22:case 23:return t.lanes=0,ic(e,t,n)}return Ln(e,t,n)}var fc,uo,pc,hc;fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},uo=function(){},pc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,lr(vn.current);var u=null;switch(n){case"input":s=l(e,s),r=l(e,r),u=[];break;case"select":s=oe({},s,{value:void 0}),r=oe({},r,{value:void 0}),u=[];break;case"textarea":s=T(e,s),r=T(e,r),u=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ji)}rt(n,r);var g;n=null;for(j in s)if(!r.hasOwnProperty(j)&&s.hasOwnProperty(j)&&s[j]!=null)if(j==="style"){var A=s[j];for(g in A)A.hasOwnProperty(g)&&(n||(n={}),n[g]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(_.hasOwnProperty(j)?u||(u=[]):(u=u||[]).push(j,null));for(j in r){var R=r[j];if(A=s!=null?s[j]:void 0,r.hasOwnProperty(j)&&R!==A&&(R!=null||A!=null))if(j==="style")if(A){for(g in A)!A.hasOwnProperty(g)||R&&R.hasOwnProperty(g)||(n||(n={}),n[g]="");for(g in R)R.hasOwnProperty(g)&&A[g]!==R[g]&&(n||(n={}),n[g]=R[g])}else n||(u||(u=[]),u.push(j,n)),n=R;else j==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,A=A?A.__html:void 0,R!=null&&A!==R&&(u=u||[]).push(j,R)):j==="children"?typeof R!="string"&&typeof R!="number"||(u=u||[]).push(j,""+R):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(_.hasOwnProperty(j)?(R!=null&&j==="onScroll"&&Je("scroll",e),u||A===R||(u=[])):(u=u||[]).push(j,R))}n&&(u=u||[]).push("style",n);var j=u;(t.updateQueue=j)&&(t.flags|=4)}},hc=function(e,t,n,r){n!==r&&(t.flags|=4)};function _i(e,t){if(!tt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lp(e,t,n){var r=t.pendingProps;switch(Rs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(t),null;case 1:return Bt(t.type)&&ea(),Ct(t),null;case 3:return r=t.stateNode,kr(),Ze(Gt),Ze(Lt),qs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(aa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,on!==null&&(xo(on),on=null))),uo(e,t),Ct(t),null;case 5:Ws(t);var s=lr(di.current);if(n=t.type,e!==null&&t.stateNode!=null)pc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(o(166));return Ct(t),null}if(e=lr(vn.current),aa(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[gn]=t,r[si]=u,e=(t.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(s=0;s<ri.length;s++)Je(ri[s],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":v(r,u),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},Je("invalid",r);break;case"textarea":L(r,u),Je("invalid",r)}rt(n,u),s=null;for(var g in u)if(u.hasOwnProperty(g)){var A=u[g];g==="children"?typeof A=="string"?r.textContent!==A&&(u.suppressHydrationWarning!==!0&&Xi(r.textContent,A,e),s=["children",A]):typeof A=="number"&&r.textContent!==""+A&&(u.suppressHydrationWarning!==!0&&Xi(r.textContent,A,e),s=["children",""+A]):_.hasOwnProperty(g)&&A!=null&&g==="onScroll"&&Je("scroll",r)}switch(n){case"input":E(r),S(r,u,!0);break;case"textarea":E(r),$(r);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(r.onclick=Ji)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{g=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Y(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=g.createElement(n,{is:r.is}):(e=g.createElement(n),n==="select"&&(g=e,r.multiple?g.multiple=!0:r.size&&(g.size=r.size))):e=g.createElementNS(e,n),e[gn]=t,e[si]=r,fc(e,t,!1,!1),t.stateNode=e;e:{switch(g=ct(n,r),n){case"dialog":Je("cancel",e),Je("close",e),s=r;break;case"iframe":case"object":case"embed":Je("load",e),s=r;break;case"video":case"audio":for(s=0;s<ri.length;s++)Je(ri[s],e);s=r;break;case"source":Je("error",e),s=r;break;case"img":case"image":case"link":Je("error",e),Je("load",e),s=r;break;case"details":Je("toggle",e),s=r;break;case"input":v(e,r),s=l(e,r),Je("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=oe({},r,{value:void 0}),Je("invalid",e);break;case"textarea":L(e,r),s=T(e,r),Je("invalid",e);break;default:s=r}rt(n,s),A=s;for(u in A)if(A.hasOwnProperty(u)){var R=A[u];u==="style"?Ye(e,R):u==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&De(e,R)):u==="children"?typeof R=="string"?(n!=="textarea"||R!=="")&&pe(e,R):typeof R=="number"&&pe(e,""+R):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_.hasOwnProperty(u)?R!=null&&u==="onScroll"&&Je("scroll",e):R!=null&&ue(e,u,R,g))}switch(n){case"input":E(e),S(e,r,!1);break;case"textarea":E(e),$(e);break;case"option":r.value!=null&&e.setAttribute("value",""+M(r.value));break;case"select":e.multiple=!!r.multiple,u=r.value,u!=null?y(e,!!r.multiple,u,!1):r.defaultValue!=null&&y(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ji)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ct(t),null;case 6:if(e&&t.stateNode!=null)hc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(o(166));if(n=lr(di.current),lr(vn.current),aa(t)){if(r=t.stateNode,n=t.memoizedProps,r[gn]=t,(u=r.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:Xi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xi(r.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=t,t.stateNode=r}return Ct(t),null;case 13:if(Ze(st),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(tt&&Qt!==null&&t.mode&1&&!(t.flags&128))gu(),Rr(),t.flags|=98560,u=!1;else if(u=aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[gn]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ct(t),u=!1}else on!==null&&(xo(on),on=null),u=!0;if(!u)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||st.current&1?vt===0&&(vt=3):bo())),t.updateQueue!==null&&(t.flags|=4),Ct(t),null);case 4:return kr(),uo(e,t),e===null&&ii(t.stateNode.containerInfo),Ct(t),null;case 10:return Os(t.type._context),Ct(t),null;case 17:return Bt(t.type)&&ea(),Ct(t),null;case 19:if(Ze(st),u=t.memoizedState,u===null)return Ct(t),null;if(r=(t.flags&128)!==0,g=u.rendering,g===null)if(r)_i(u,!1);else{if(vt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(g=da(e),g!==null){for(t.flags|=128,_i(u,!1),r=g.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)u=n,e=r,u.flags&=14680066,g=u.alternate,g===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=g.childLanes,u.lanes=g.lanes,u.child=g.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=g.memoizedProps,u.memoizedState=g.memoizedState,u.updateQueue=g.updateQueue,u.type=g.type,e=g.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ke(st,st.current&1|2),t.child}e=e.sibling}u.tail!==null&&dt()>Nr&&(t.flags|=128,r=!0,_i(u,!1),t.lanes=4194304)}else{if(!r)if(e=da(g),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_i(u,!0),u.tail===null&&u.tailMode==="hidden"&&!g.alternate&&!tt)return Ct(t),null}else 2*dt()-u.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,_i(u,!1),t.lanes=4194304);u.isBackwards?(g.sibling=t.child,t.child=g):(n=u.last,n!==null?n.sibling=g:t.child=g,u.last=g)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=dt(),t.sibling=null,n=st.current,Ke(st,r?n&1|2:n&1),t):(Ct(t),null);case 22:case 23:return To(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Yt&1073741824&&(Ct(t),t.subtreeFlags&6&&(t.flags|=8192)):Ct(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function up(e,t){switch(Rs(t),t.tag){case 1:return Bt(t.type)&&ea(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),Ze(Gt),Ze(Lt),qs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ws(t),null;case 13:if(Ze(st),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ze(st),null;case 4:return kr(),null;case 10:return Os(t.type._context),null;case 22:case 23:return To(),null;case 24:return null;default:return null}}var wa=!1,kt=!1,cp=typeof WeakSet=="function"?WeakSet:Set,he=null;function Or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){lt(e,t,r)}else n.current=null}function co(e,t,n){try{n()}catch(r){lt(e,t,r)}}var mc=!1;function dp(e,t){if(Ss=Gi,e=jl(),hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var g=0,A=-1,R=-1,j=0,ie=0,ae=e,re=null;t:for(;;){for(var de;ae!==n||s!==0&&ae.nodeType!==3||(A=g+s),ae!==u||r!==0&&ae.nodeType!==3||(R=g+r),ae.nodeType===3&&(g+=ae.nodeValue.length),(de=ae.firstChild)!==null;)re=ae,ae=de;for(;;){if(ae===e)break t;if(re===n&&++j===s&&(A=g),re===u&&++ie===r&&(R=g),(de=ae.nextSibling)!==null)break;ae=re,re=ae.parentNode}ae=de}n=A===-1||R===-1?null:{start:A,end:R}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ts={focusedElem:e,selectionRange:n},Gi=!1,he=t;he!==null;)if(t=he,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,he=e;else for(;he!==null;){t=he;try{var ge=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ve=ge.memoizedProps,ft=ge.memoizedState,G=t.stateNode,k=G.getSnapshotBeforeUpdate(t.elementType===t.type?ve:ln(t.type,ve),ft);G.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var B=t.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(le){lt(t,t.return,le)}if(e=t.sibling,e!==null){e.return=t.return,he=e;break}he=t.return}return ge=mc,mc=!1,ge}function gi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var u=s.destroy;s.destroy=void 0,u!==void 0&&co(t,n,u)}s=s.next}while(s!==r)}}function xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _c(e){var t=e.alternate;t!==null&&(e.alternate=null,_c(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gn],delete t[si],delete t[Ds],delete t[jf],delete t[Qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gc(e){return e.tag===5||e.tag===3||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function po(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ji));else if(r!==4&&(e=e.child,e!==null))for(po(e,t,n),e=e.sibling;e!==null;)po(e,t,n),e=e.sibling}function ho(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ho(e,t,n),e=e.sibling;e!==null;)ho(e,t,n),e=e.sibling}var zt=null,un=!1;function Qn(e,t,n){for(n=n.child;n!==null;)yc(e,t,n),n=n.sibling}function yc(e,t,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Ci,n)}catch{}switch(n.tag){case 5:kt||Or(n,t);case 6:var r=zt,s=un;zt=null,Qn(e,t,n),zt=r,un=s,zt!==null&&(un?(e=zt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(un?(e=zt,n=n.stateNode,e.nodeType===8?Ms(e.parentNode,n):e.nodeType===1&&Ms(e,n),Yr(e)):Ms(zt,n.stateNode));break;case 4:r=zt,s=un,zt=n.stateNode.containerInfo,un=!0,Qn(e,t,n),zt=r,un=s;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var u=s,g=u.destroy;u=u.tag,g!==void 0&&(u&2||u&4)&&co(n,t,g),s=s.next}while(s!==r)}Qn(e,t,n);break;case 1:if(!kt&&(Or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(A){lt(n,t,A)}Qn(e,t,n);break;case 21:Qn(e,t,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,Qn(e,t,n),kt=r):Qn(e,t,n);break;default:Qn(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cp),t.forEach(function(r){var s=wp.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var u=e,g=t,A=g;e:for(;A!==null;){switch(A.tag){case 5:zt=A.stateNode,un=!1;break e;case 3:zt=A.stateNode.containerInfo,un=!0;break e;case 4:zt=A.stateNode.containerInfo,un=!0;break e}A=A.return}if(zt===null)throw Error(o(160));yc(u,g,s),zt=null,un=!1;var R=s.alternate;R!==null&&(R.return=null),s.return=null}catch(j){lt(s,t,j)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xc(t,e),t=t.sibling}function xc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),wn(e),r&4){try{gi(3,e,e.return),xa(3,e)}catch(ve){lt(e,e.return,ve)}try{gi(5,e,e.return)}catch(ve){lt(e,e.return,ve)}}break;case 1:cn(t,e),wn(e),r&512&&n!==null&&Or(n,n.return);break;case 5:if(cn(t,e),wn(e),r&512&&n!==null&&Or(n,n.return),e.flags&32){var s=e.stateNode;try{pe(s,"")}catch(ve){lt(e,e.return,ve)}}if(r&4&&(s=e.stateNode,s!=null)){var u=e.memoizedProps,g=n!==null?n.memoizedProps:u,A=e.type,R=e.updateQueue;if(e.updateQueue=null,R!==null)try{A==="input"&&u.type==="radio"&&u.name!=null&&c(s,u),ct(A,g);var j=ct(A,u);for(g=0;g<R.length;g+=2){var ie=R[g],ae=R[g+1];ie==="style"?Ye(s,ae):ie==="dangerouslySetInnerHTML"?De(s,ae):ie==="children"?pe(s,ae):ue(s,ie,ae,j)}switch(A){case"input":h(s,u);break;case"textarea":C(s,u);break;case"select":var re=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!u.multiple;var de=u.value;de!=null?y(s,!!u.multiple,de,!1):re!==!!u.multiple&&(u.defaultValue!=null?y(s,!!u.multiple,u.defaultValue,!0):y(s,!!u.multiple,u.multiple?[]:"",!1))}s[si]=u}catch(ve){lt(e,e.return,ve)}}break;case 6:if(cn(t,e),wn(e),r&4){if(e.stateNode===null)throw Error(o(162));s=e.stateNode,u=e.memoizedProps;try{s.nodeValue=u}catch(ve){lt(e,e.return,ve)}}break;case 3:if(cn(t,e),wn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(ve){lt(e,e.return,ve)}break;case 4:cn(t,e),wn(e);break;case 13:cn(t,e),wn(e),s=e.child,s.flags&8192&&(u=s.memoizedState!==null,s.stateNode.isHidden=u,!u||s.alternate!==null&&s.alternate.memoizedState!==null||(go=dt())),r&4&&wc(e);break;case 22:if(ie=n!==null&&n.memoizedState!==null,e.mode&1?(kt=(j=kt)||ie,cn(t,e),kt=j):cn(t,e),wn(e),r&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!ie&&e.mode&1)for(he=e,ie=e.child;ie!==null;){for(ae=he=ie;he!==null;){switch(re=he,de=re.child,re.tag){case 0:case 11:case 14:case 15:gi(4,re,re.return);break;case 1:Or(re,re.return);var ge=re.stateNode;if(typeof ge.componentWillUnmount=="function"){r=re,n=re.return;try{t=r,ge.props=t.memoizedProps,ge.state=t.memoizedState,ge.componentWillUnmount()}catch(ve){lt(r,n,ve)}}break;case 5:Or(re,re.return);break;case 22:if(re.memoizedState!==null){bc(ae);continue}}de!==null?(de.return=re,he=de):bc(ae)}ie=ie.sibling}e:for(ie=null,ae=e;;){if(ae.tag===5){if(ie===null){ie=ae;try{s=ae.stateNode,j?(u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(A=ae.stateNode,R=ae.memoizedProps.style,g=R!=null&&R.hasOwnProperty("display")?R.display:null,A.style.display=Ge("display",g))}catch(ve){lt(e,e.return,ve)}}}else if(ae.tag===6){if(ie===null)try{ae.stateNode.nodeValue=j?"":ae.memoizedProps}catch(ve){lt(e,e.return,ve)}}else if((ae.tag!==22&&ae.tag!==23||ae.memoizedState===null||ae===e)&&ae.child!==null){ae.child.return=ae,ae=ae.child;continue}if(ae===e)break e;for(;ae.sibling===null;){if(ae.return===null||ae.return===e)break e;ie===ae&&(ie=null),ae=ae.return}ie===ae&&(ie=null),ae.sibling.return=ae.return,ae=ae.sibling}}break;case 19:cn(t,e),wn(e),r&4&&wc(e);break;case 21:break;default:cn(t,e),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gc(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(pe(s,""),r.flags&=-33);var u=vc(e);ho(e,u,s);break;case 3:case 4:var g=r.stateNode.containerInfo,A=vc(e);po(e,A,g);break;default:throw Error(o(161))}}catch(R){lt(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fp(e,t,n){he=e,Sc(e)}function Sc(e,t,n){for(var r=(e.mode&1)!==0;he!==null;){var s=he,u=s.child;if(s.tag===22&&r){var g=s.memoizedState!==null||wa;if(!g){var A=s.alternate,R=A!==null&&A.memoizedState!==null||kt;A=wa;var j=kt;if(wa=g,(kt=R)&&!j)for(he=s;he!==null;)g=he,R=g.child,g.tag===22&&g.memoizedState!==null?Ec(s):R!==null?(R.return=g,he=R):Ec(s);for(;u!==null;)he=u,Sc(u),u=u.sibling;he=s,wa=A,kt=j}Tc(e)}else s.subtreeFlags&8772&&u!==null?(u.return=s,he=u):Tc(e)}}function Tc(e){for(;he!==null;){var t=he;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:kt||xa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!kt)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:ln(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&bu(t,u,r);break;case 3:var g=t.updateQueue;if(g!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bu(t,g,n)}break;case 5:var A=t.stateNode;if(n===null&&t.flags&4){n=A;var R=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&n.focus();break;case"img":R.src&&(n.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var j=t.alternate;if(j!==null){var ie=j.memoizedState;if(ie!==null){var ae=ie.dehydrated;ae!==null&&Yr(ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}kt||t.flags&512&&fo(t)}catch(re){lt(t,t.return,re)}}if(t===e){he=null;break}if(n=t.sibling,n!==null){n.return=t.return,he=n;break}he=t.return}}function bc(e){for(;he!==null;){var t=he;if(t===e){he=null;break}var n=t.sibling;if(n!==null){n.return=t.return,he=n;break}he=t.return}}function Ec(e){for(;he!==null;){var t=he;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xa(4,t)}catch(R){lt(t,n,R)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(R){lt(t,s,R)}}var u=t.return;try{fo(t)}catch(R){lt(t,u,R)}break;case 5:var g=t.return;try{fo(t)}catch(R){lt(t,g,R)}}}catch(R){lt(t,t.return,R)}if(t===e){he=null;break}var A=t.sibling;if(A!==null){A.return=t.return,he=A;break}he=t.return}}var pp=Math.ceil,Sa=fe.ReactCurrentDispatcher,mo=fe.ReactCurrentOwner,nn=fe.ReactCurrentBatchConfig,He=0,bt=null,_t=null,At=0,Yt=0,Fr=Vn(0),vt=0,vi=null,cr=0,Ta=0,_o=0,yi=null,Vt=null,go=0,Nr=1/0,Un=null,ba=!1,vo=null,Yn=null,Ea=!1,Kn=null,Ma=0,wi=0,yo=null,Da=-1,za=0;function Ft(){return He&6?dt():Da!==-1?Da:Da=dt()}function Xn(e){return e.mode&1?He&2&&At!==0?At&-At:Kf.transition!==null?(za===0&&(za=vl()),za):(e=je,e!==0||(e=window.event,e=e===void 0?16:Dl(e.type)),e):1}function dn(e,t,n,r){if(50<wi)throw wi=0,yo=null,Error(o(185));qr(e,n,r),(!(He&2)||e!==bt)&&(e===bt&&(!(He&2)&&(Ta|=n),vt===4&&Jn(e,At)),qt(e,r),n===1&&He===0&&!(t.mode&1)&&(Nr=dt()+500,na&&Hn()))}function qt(e,t){var n=e.callbackNode;Yd(e,t);var r=Oi(e,e===bt?At:0);if(r===0)n!==null&&ml(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ml(n),t===1)e.tag===0?Yf(Dc.bind(null,e)):fu(Dc.bind(null,e)),Hf(function(){!(He&6)&&Hn()}),n=null;else{switch(yl(r)){case 1:n=Xa;break;case 4:n=_l;break;case 16:n=Ui;break;case 536870912:n=gl;break;default:n=Ui}n=kc(n,Mc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mc(e,t){if(Da=-1,za=0,He&6)throw Error(o(327));var n=e.callbackNode;if(Gr()&&e.callbackNode!==n)return null;var r=Oi(e,e===bt?At:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Aa(e,r);else{t=r;var s=He;He|=2;var u=Ac();(bt!==e||At!==t)&&(Un=null,Nr=dt()+500,fr(e,t));do try{_p();break}catch(A){zc(e,A)}while(!0);Is(),Sa.current=u,He=s,_t!==null?t=0:(bt=null,At=0,t=vt)}if(t!==0){if(t===2&&(s=Ja(e),s!==0&&(r=s,t=wo(e,s))),t===1)throw n=vi,fr(e,0),Jn(e,r),qt(e,dt()),n;if(t===6)Jn(e,r);else{if(s=e.current.alternate,!(r&30)&&!hp(s)&&(t=Aa(e,r),t===2&&(u=Ja(e),u!==0&&(r=u,t=wo(e,u))),t===1))throw n=vi,fr(e,0),Jn(e,r),qt(e,dt()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:pr(e,Vt,Un);break;case 3:if(Jn(e,r),(r&130023424)===r&&(t=go+500-dt(),10<t)){if(Oi(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Ft(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Es(pr.bind(null,e,Vt,Un),t);break}pr(e,Vt,Un);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var g=31-an(r);u=1<<g,g=t[g],g>s&&(s=g),r&=~u}if(r=s,r=dt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pp(r/1960))-r,10<r){e.timeoutHandle=Es(pr.bind(null,e,Vt,Un),r);break}pr(e,Vt,Un);break;case 5:pr(e,Vt,Un);break;default:throw Error(o(329))}}}return qt(e,dt()),e.callbackNode===n?Mc.bind(null,e):null}function wo(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(fr(e,t).flags|=256),e=Aa(e,t),e!==2&&(t=Vt,Vt=n,t!==null&&xo(t)),e}function xo(e){Vt===null?Vt=e:Vt.push.apply(Vt,e)}function hp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],u=s.getSnapshot;s=s.value;try{if(!sn(u(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t){for(t&=~_o,t&=~Ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function Dc(e){if(He&6)throw Error(o(327));Gr();var t=Oi(e,0);if(!(t&1))return qt(e,dt()),null;var n=Aa(e,t);if(e.tag!==0&&n===2){var r=Ja(e);r!==0&&(t=r,n=wo(e,r))}if(n===1)throw n=vi,fr(e,0),Jn(e,t),qt(e,dt()),n;if(n===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,Vt,Un),qt(e,dt()),null}function So(e,t){var n=He;He|=1;try{return e(t)}finally{He=n,He===0&&(Nr=dt()+500,na&&Hn())}}function dr(e){Kn!==null&&Kn.tag===0&&!(He&6)&&Gr();var t=He;He|=1;var n=nn.transition,r=je;try{if(nn.transition=null,je=1,e)return e()}finally{je=r,nn.transition=n,He=t,!(He&6)&&Hn()}}function To(){Yt=Fr.current,Ze(Fr)}function fr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qf(n)),_t!==null)for(n=_t.return;n!==null;){var r=n;switch(Rs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ea();break;case 3:kr(),Ze(Gt),Ze(Lt),qs();break;case 5:Ws(r);break;case 4:kr();break;case 13:Ze(st);break;case 19:Ze(st);break;case 10:Os(r.type._context);break;case 22:case 23:To()}n=n.return}if(bt=e,_t=e=Zn(e.current,null),At=Yt=t,vt=0,vi=null,_o=Ta=cr=0,Vt=yi=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,u=n.pending;if(u!==null){var g=u.next;u.next=s,r.next=g}n.pending=r}or=null}return e}function zc(e,t){do{var n=_t;try{if(Is(),fa.current=_a,pa){for(var r=ot.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}pa=!1}if(ur=0,Tt=gt=ot=null,fi=!1,pi=0,mo.current=null,n===null||n.return===null){vt=1,vi=t,_t=null;break}e:{var u=e,g=n.return,A=n,R=t;if(t=At,A.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var j=R,ie=A,ae=ie.tag;if(!(ie.mode&1)&&(ae===0||ae===11||ae===15)){var re=ie.alternate;re?(ie.updateQueue=re.updateQueue,ie.memoizedState=re.memoizedState,ie.lanes=re.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var de=Zu(g);if(de!==null){de.flags&=-257,ec(de,g,A,u,t),de.mode&1&&Ju(u,j,t),t=de,R=j;var ge=t.updateQueue;if(ge===null){var ve=new Set;ve.add(R),t.updateQueue=ve}else ge.add(R);break e}else{if(!(t&1)){Ju(u,j,t),bo();break e}R=Error(o(426))}}else if(tt&&A.mode&1){var ft=Zu(g);if(ft!==null){!(ft.flags&65536)&&(ft.flags|=256),ec(ft,g,A,u,t),Cs(Ir(R,A));break e}}u=R=Ir(R,A),vt!==4&&(vt=2),yi===null?yi=[u]:yi.push(u),u=g;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var G=Ku(u,R,t);Tu(u,G);break e;case 1:A=R;var k=u.type,B=u.stateNode;if(!(u.flags&128)&&(typeof k.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Yn===null||!Yn.has(B)))){u.flags|=65536,t&=-t,u.lanes|=t;var le=Xu(u,A,t);Tu(u,le);break e}}u=u.return}while(u!==null)}Rc(n)}catch(we){t=we,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function Ac(){var e=Sa.current;return Sa.current=_a,e===null?_a:e}function bo(){(vt===0||vt===3||vt===2)&&(vt=4),bt===null||!(cr&268435455)&&!(Ta&268435455)||Jn(bt,At)}function Aa(e,t){var n=He;He|=2;var r=Ac();(bt!==e||At!==t)&&(Un=null,fr(e,t));do try{mp();break}catch(s){zc(e,s)}while(!0);if(Is(),He=n,Sa.current=r,_t!==null)throw Error(o(261));return bt=null,At=0,vt}function mp(){for(;_t!==null;)Pc(_t)}function _p(){for(;_t!==null&&!Gd();)Pc(_t)}function Pc(e){var t=Cc(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?Rc(e):_t=t,mo.current=null}function Rc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=up(n,t),n!==null){n.flags&=32767,_t=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{vt=6,_t=null;return}}else if(n=lp(n,t,Yt),n!==null){_t=n;return}if(t=t.sibling,t!==null){_t=t;return}_t=t=e}while(t!==null);vt===0&&(vt=5)}function pr(e,t,n){var r=je,s=nn.transition;try{nn.transition=null,je=1,gp(e,t,n,r)}finally{nn.transition=s,je=r}return null}function gp(e,t,n,r){do Gr();while(Kn!==null);if(He&6)throw Error(o(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(Kd(e,u),e===bt&&(_t=bt=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,kc(Ui,function(){return Gr(),null})),u=(n.flags&15990)!==0,n.subtreeFlags&15990||u){u=nn.transition,nn.transition=null;var g=je;je=1;var A=He;He|=4,mo.current=null,dp(e,n),xc(n,e),Of(Ts),Gi=!!Ss,Ts=Ss=null,e.current=n,fp(n),Bd(),He=A,je=g,nn.transition=u}else e.current=n;if(Ea&&(Ea=!1,Kn=e,Ma=s),u=e.pendingLanes,u===0&&(Yn=null),qd(n.stateNode),qt(e,dt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ba)throw ba=!1,e=vo,vo=null,e;return Ma&1&&e.tag!==0&&Gr(),u=e.pendingLanes,u&1?e===yo?wi++:(wi=0,yo=e):wi=0,Hn(),null}function Gr(){if(Kn!==null){var e=yl(Ma),t=nn.transition,n=je;try{if(nn.transition=null,je=16>e?16:e,Kn===null)var r=!1;else{if(e=Kn,Kn=null,Ma=0,He&6)throw Error(o(331));var s=He;for(He|=4,he=e.current;he!==null;){var u=he,g=u.child;if(he.flags&16){var A=u.deletions;if(A!==null){for(var R=0;R<A.length;R++){var j=A[R];for(he=j;he!==null;){var ie=he;switch(ie.tag){case 0:case 11:case 15:gi(8,ie,u)}var ae=ie.child;if(ae!==null)ae.return=ie,he=ae;else for(;he!==null;){ie=he;var re=ie.sibling,de=ie.return;if(_c(ie),ie===j){he=null;break}if(re!==null){re.return=de,he=re;break}he=de}}}var ge=u.alternate;if(ge!==null){var ve=ge.child;if(ve!==null){ge.child=null;do{var ft=ve.sibling;ve.sibling=null,ve=ft}while(ve!==null)}}he=u}}if(u.subtreeFlags&2064&&g!==null)g.return=u,he=g;else e:for(;he!==null;){if(u=he,u.flags&2048)switch(u.tag){case 0:case 11:case 15:gi(9,u,u.return)}var G=u.sibling;if(G!==null){G.return=u.return,he=G;break e}he=u.return}}var k=e.current;for(he=k;he!==null;){g=he;var B=g.child;if(g.subtreeFlags&2064&&B!==null)B.return=g,he=B;else e:for(g=k;he!==null;){if(A=he,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:xa(9,A)}}catch(we){lt(A,A.return,we)}if(A===g){he=null;break e}var le=A.sibling;if(le!==null){le.return=A.return,he=le;break e}he=A.return}}if(He=s,Hn(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Ci,e)}catch{}r=!0}return r}finally{je=n,nn.transition=t}}return!1}function Lc(e,t,n){t=Ir(n,t),t=Ku(e,t,1),e=jn(e,t,1),t=Ft(),e!==null&&(qr(e,1,t),qt(e,t))}function lt(e,t,n){if(e.tag===3)Lc(e,e,n);else for(;t!==null;){if(t.tag===3){Lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=Ir(n,e),e=Xu(t,e,1),t=jn(t,e,1),e=Ft(),t!==null&&(qr(t,1,e),qt(t,e));break}}t=t.return}}function vp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ft(),e.pingedLanes|=e.suspendedLanes&n,bt===e&&(At&n)===n&&(vt===4||vt===3&&(At&130023424)===At&&500>dt()-go?fr(e,0):_o|=n),qt(e,t)}function Uc(e,t){t===0&&(e.mode&1?(t=Ii,Ii<<=1,!(Ii&130023424)&&(Ii=4194304)):t=1);var n=Ft();e=Pn(e,t),e!==null&&(qr(e,t,n),qt(e,n))}function yp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uc(e,n)}function wp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}r!==null&&r.delete(t),Uc(e,n)}var Cc;Cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Gt.current)Wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Wt=!1,op(e,t,n);Wt=!!(e.flags&131072)}else Wt=!1,tt&&t.flags&1048576&&pu(t,ia,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ya(e,t),e=t.pendingProps;var s=zr(t,Lt.current);Cr(t,n),s=js(null,t,r,e,s,n);var u=Qs();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Bt(r)?(u=!0,ta(t)):u=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Gs(t),s.updater=ga,t.stateNode=s,s._reactInternals=t,eo(t,r,e,n),t=io(null,t,r,!0,u,n)):(t.tag=0,tt&&u&&Ps(t),Ot(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ya(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Sp(r),e=ln(r,e),s){case 0:t=ro(null,t,r,e,n);break e;case 1:t=sc(null,t,r,e,n);break e;case 11:t=tc(null,t,r,e,n);break e;case 14:t=nc(null,t,r,ln(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ln(r,s),ro(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ln(r,s),sc(e,t,r,s,n);case 3:e:{if(oc(t),e===null)throw Error(o(387));r=t.pendingProps,u=t.memoizedState,s=u.element,Su(e,t),ca(t,r,null,n);var g=t.memoizedState;if(r=g.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){s=Ir(Error(o(423)),t),t=lc(e,t,r,n,s);break e}else if(r!==s){s=Ir(Error(o(424)),t),t=lc(e,t,r,n,s);break e}else for(Qt=Wn(t.stateNode.containerInfo.firstChild),jt=t,tt=!0,on=null,n=wu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===s){t=Ln(e,t,n);break e}Ot(e,t,r,n)}t=t.child}return t;case 5:return Eu(t),e===null&&Us(t),r=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,g=s.children,bs(r,s)?g=null:u!==null&&bs(r,u)&&(t.flags|=32),ac(e,t),Ot(e,t,g,n),t.child;case 6:return e===null&&Us(t),null;case 13:return uc(e,t,n);case 4:return Bs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Lr(t,null,r,n):Ot(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ln(r,s),tc(e,t,r,s,n);case 7:return Ot(e,t,t.pendingProps,n),t.child;case 8:return Ot(e,t,t.pendingProps.children,n),t.child;case 12:return Ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,u=t.memoizedProps,g=s.value,Ke(oa,r._currentValue),r._currentValue=g,u!==null)if(sn(u.value,g)){if(u.children===s.children&&!Gt.current){t=Ln(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var A=u.dependencies;if(A!==null){g=u.child;for(var R=A.firstContext;R!==null;){if(R.context===r){if(u.tag===1){R=Rn(-1,n&-n),R.tag=2;var j=u.updateQueue;if(j!==null){j=j.shared;var ie=j.pending;ie===null?R.next=R:(R.next=ie.next,ie.next=R),j.pending=R}}u.lanes|=n,R=u.alternate,R!==null&&(R.lanes|=n),Fs(u.return,n,t),A.lanes|=n;break}R=R.next}}else if(u.tag===10)g=u.type===t.type?null:u.child;else if(u.tag===18){if(g=u.return,g===null)throw Error(o(341));g.lanes|=n,A=g.alternate,A!==null&&(A.lanes|=n),Fs(g,n,t),g=u.sibling}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}Ot(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Cr(t,n),s=en(s),r=r(s),t.flags|=1,Ot(e,t,r,n),t.child;case 14:return r=t.type,s=ln(r,t.pendingProps),s=ln(r.type,s),nc(e,t,r,s,n);case 15:return rc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ln(r,s),ya(e,t),t.tag=1,Bt(r)?(e=!0,ta(t)):e=!1,Cr(t,n),Qu(t,r,s),eo(t,r,s,n),io(null,t,r,!0,e,n);case 19:return dc(e,t,n);case 22:return ic(e,t,n)}throw Error(o(156,t.tag))};function kc(e,t){return hl(e,t)}function xp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(e,t,n,r){return new xp(e,t,n,r)}function Eo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sp(e){if(typeof e=="function")return Eo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xe)return 11;if(e===Xe)return 14}return 2}function Zn(e,t){var n=e.alternate;return n===null?(n=rn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pa(e,t,n,r,s,u){var g=2;if(r=e,typeof e=="function")Eo(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case ke:return hr(n.children,s,u,t);case We:g=8,s|=8;break;case Fe:return e=rn(12,n,t,s|2),e.elementType=Fe,e.lanes=u,e;case ze:return e=rn(13,n,t,s),e.elementType=ze,e.lanes=u,e;case Se:return e=rn(19,n,t,s),e.elementType=Se,e.lanes=u,e;case Ve:return Ra(n,s,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ne:g=10;break e;case Qe:g=9;break e;case xe:g=11;break e;case Xe:g=14;break e;case qe:g=16,r=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=rn(g,n,t,s),t.elementType=e,t.type=r,t.lanes=u,t}function hr(e,t,n,r){return e=rn(7,e,r,t),e.lanes=n,e}function Ra(e,t,n,r){return e=rn(22,e,r,t),e.elementType=Ve,e.lanes=n,e.stateNode={isHidden:!1},e}function Mo(e,t,n){return e=rn(6,e,null,t),e.lanes=n,e}function Do(e,t,n){return t=rn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tp(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Za(0),this.expirationTimes=Za(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Za(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function zo(e,t,n,r,s,u,g,A,R){return e=new Tp(e,t,n,A,R),t===1?(t=1,u===!0&&(t|=8)):t=0,u=rn(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gs(u),e}function bp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ic(e){if(!e)return qn;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var n=e.type;if(Bt(n))return cu(e,n,t)}return t}function Oc(e,t,n,r,s,u,g,A,R){return e=zo(n,r,!0,e,s,u,g,A,R),e.context=Ic(null),n=e.current,r=Ft(),s=Xn(n),u=Rn(r,s),u.callback=t??null,jn(n,u,s),e.current.lanes=s,qr(e,s,r),qt(e,r),e}function La(e,t,n,r){var s=t.current,u=Ft(),g=Xn(s);return n=Ic(n),t.context===null?t.context=n:t.pendingContext=n,t=Rn(u,g),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jn(s,t,g),e!==null&&(dn(e,s,g,u),ua(e,s,g)),g}function Ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ao(e,t){Fc(e,t),(e=e.alternate)&&Fc(e,t)}var Nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Po(e){this._internalRoot=e}Ca.prototype.render=Po.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));La(e,t,null,null)},Ca.prototype.unmount=Po.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dr(function(){La(null,e,null,null)}),t[Mn]=null}};function Ca(e){this._internalRoot=e}Ca.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&El(e)}};function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gc(){}function Ep(e,t,n,r,s){if(s){if(typeof r=="function"){var u=r;r=function(){var j=Ua(g);u.call(j)}}var g=Oc(t,r,e,0,null,!1,!1,"",Gc);return e._reactRootContainer=g,e[Mn]=g.current,ii(e.nodeType===8?e.parentNode:e),dr(),g}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var A=r;r=function(){var j=Ua(R);A.call(j)}}var R=zo(e,0,!1,null,null,!1,!1,"",Gc);return e._reactRootContainer=R,e[Mn]=R.current,ii(e.nodeType===8?e.parentNode:e),dr(function(){La(t,R,n,r)}),R}function Ia(e,t,n,r,s){var u=n._reactRootContainer;if(u){var g=u;if(typeof s=="function"){var A=s;s=function(){var R=Ua(g);A.call(R)}}La(t,g,e,s)}else g=Ep(n,t,e,s,r);return Ua(g)}wl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(es(t,n|1),qt(t,dt()),!(He&6)&&(Nr=dt()+500,Hn()))}break;case 13:dr(function(){var r=Pn(e,1);if(r!==null){var s=Ft();dn(r,e,1,s)}}),Ao(e,1)}},ts=function(e){if(e.tag===13){var t=Pn(e,134217728);if(t!==null){var n=Ft();dn(t,e,134217728,n)}Ao(e,134217728)}},xl=function(e){if(e.tag===13){var t=Xn(e),n=Pn(e,t);if(n!==null){var r=Ft();dn(n,e,t,r)}Ao(e,t)}},Sl=function(){return je},Tl=function(e,t){var n=je;try{return je=e,t()}finally{je=n}},mt=function(e,t,n){switch(t){case"input":if(h(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Zi(r);if(!s)throw Error(o(90));P(r),h(r,s)}}}break;case"textarea":C(e,n);break;case"select":t=n.value,t!=null&&y(e,!!n.multiple,t,!1)}},St=So,Pt=dr;var Mp={usingClientEntryPoint:!1,Events:[oi,Mr,Zi,wt,xt,So]},xi={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dp={bundleType:xi.bundleType,version:xi.version,rendererPackageName:xi.rendererPackageName,rendererConfig:xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fl(e),e===null?null:e.stateNode},findFiberByHostInstance:xi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{Ci=Oa.inject(Dp),_n=Oa}catch{}}return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp,Ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ro(t))throw Error(o(200));return bp(e,t,null,n)},Ht.createRoot=function(e,t){if(!Ro(e))throw Error(o(299));var n=!1,r="",s=Nc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=zo(e,1,!1,null,null,n,!1,r,s),e[Mn]=t.current,ii(e.nodeType===8?e.parentNode:e),new Po(t)},Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=fl(t),e=e===null?null:e.stateNode,e},Ht.flushSync=function(e){return dr(e)},Ht.hydrate=function(e,t,n){if(!ka(t))throw Error(o(200));return Ia(null,e,t,!0,n)},Ht.hydrateRoot=function(e,t,n){if(!Ro(e))throw Error(o(405));var r=n!=null&&n.hydratedSources||null,s=!1,u="",g=Nc;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),t=Oc(t,null,e,1,n??null,s,!1,u,g),e[Mn]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Ca(t)},Ht.render=function(e,t,n){if(!ka(t))throw Error(o(200));return Ia(null,e,t,!1,n)},Ht.unmountComponentAtNode=function(e){if(!ka(e))throw Error(o(40));return e._reactRootContainer?(dr(function(){Ia(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1},Ht.unstable_batchedUpdates=So,Ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ka(n))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ia(e,t,n,!1,r)},Ht.version="18.3.1-next-f1338f8080-20240426",Ht}var Qc;function yd(){if(Qc)return Co.exports;Qc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Co.exports=Ip(),Co.exports}var Yc;function Op(){if(Yc)return Fa;Yc=1;var a=yd();return Fa.createRoot=a.createRoot,Fa.hydrateRoot=a.hydrateRoot,Fa}var Fp=Op(),Ti={},Kc;function Np(){if(Kc)return Ti;Kc=1,Object.defineProperty(Ti,"__esModule",{value:!0}),Ti.parse=x,Ti.serialize=D;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,f=/^[\u0020-\u003A\u003D-\u007E]*$/,_=Object.prototype.toString,w=(()=>{const F=function(){};return F.prototype=Object.create(null),F})();function x(F,X){const Q=new w,Z=F.length;if(Z<2)return Q;const ee=(X==null?void 0:X.decode)||N;let W=0;do{const J=F.indexOf("=",W);if(J===-1)break;const ue=F.indexOf(";",W),fe=ue===-1?Z:ue;if(J>fe){W=F.lastIndexOf(";",J-1)+1;continue}const Le=z(F,W,J),Ce=b(F,J,Le),ke=F.slice(Le,Ce);if(Q[ke]===void 0){let We=z(F,J+1,fe),Fe=b(F,fe,We);const Ne=ee(F.slice(We,Fe));Q[ke]=Ne}W=fe+1}while(W<Z);return Q}function z(F,X,Q){do{const Z=F.charCodeAt(X);if(Z!==32&&Z!==9)return X}while(++X<Q);return Q}function b(F,X,Q){for(;X>Q;){const Z=F.charCodeAt(--X);if(Z!==32&&Z!==9)return X+1}return Q}function D(F,X,Q){const Z=(Q==null?void 0:Q.encode)||encodeURIComponent;if(!a.test(F))throw new TypeError(`argument name is invalid: ${F}`);const ee=Z(X);if(!i.test(ee))throw new TypeError(`argument val is invalid: ${X}`);let W=F+"="+ee;if(!Q)return W;if(Q.maxAge!==void 0){if(!Number.isInteger(Q.maxAge))throw new TypeError(`option maxAge is invalid: ${Q.maxAge}`);W+="; Max-Age="+Q.maxAge}if(Q.domain){if(!o.test(Q.domain))throw new TypeError(`option domain is invalid: ${Q.domain}`);W+="; Domain="+Q.domain}if(Q.path){if(!f.test(Q.path))throw new TypeError(`option path is invalid: ${Q.path}`);W+="; Path="+Q.path}if(Q.expires){if(!I(Q.expires)||!Number.isFinite(Q.expires.valueOf()))throw new TypeError(`option expires is invalid: ${Q.expires}`);W+="; Expires="+Q.expires.toUTCString()}if(Q.httpOnly&&(W+="; HttpOnly"),Q.secure&&(W+="; Secure"),Q.partitioned&&(W+="; Partitioned"),Q.priority)switch(typeof Q.priority=="string"?Q.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${Q.priority}`)}if(Q.sameSite)switch(typeof Q.sameSite=="string"?Q.sameSite.toLowerCase():Q.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${Q.sameSite}`)}return W}function N(F){if(F.indexOf("%")===-1)return F;try{return decodeURIComponent(F)}catch{return F}}function I(F){return _.call(F)==="[object Date]"}return Ti}Np();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xc="popstate";function Gp(a={}){function i(_,w){let{pathname:x="/",search:z="",hash:b=""}=_r(_.location.hash.substring(1));return!x.startsWith("/")&&!x.startsWith(".")&&(x="/"+x),Yo("",{pathname:x,search:z,hash:b},w.state&&w.state.usr||null,w.state&&w.state.key||"default")}function o(_,w){let x=_.document.querySelector("base"),z="";if(x&&x.getAttribute("href")){let b=_.location.href,D=b.indexOf("#");z=D===-1?b:b.slice(0,D)}return z+"#"+(typeof w=="string"?w:Ei(w))}function f(_,w){Xt(_.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(w)})`)}return Wp(i,o,f,a)}function nt(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function Xt(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Bp(){return Math.random().toString(36).substring(2,10)}function Jc(a,i){return{usr:a.state,key:a.key,idx:i}}function Yo(a,i,o=null,f){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?_r(i):i,state:o,key:i&&i.key||f||Bp()}}function Ei({pathname:a="/",search:i="",hash:o=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function _r(a){let i={};if(a){let o=a.indexOf("#");o>=0&&(i.hash=a.substring(o),a=a.substring(0,o));let f=a.indexOf("?");f>=0&&(i.search=a.substring(f),a=a.substring(0,f)),a&&(i.pathname=a)}return i}function Wp(a,i,o,f={}){let{window:_=document.defaultView,v5Compat:w=!1}=f,x=_.history,z="POP",b=null,D=N();D==null&&(D=0,x.replaceState({...x.state,idx:D},""));function N(){return(x.state||{idx:null}).idx}function I(){z="POP";let ee=N(),W=ee==null?null:ee-D;D=ee,b&&b({action:z,location:Z.location,delta:W})}function F(ee,W){z="PUSH";let J=Yo(Z.location,ee,W);o(J,ee),D=N()+1;let ue=Jc(J,D),fe=Z.createHref(J);try{x.pushState(ue,"",fe)}catch(Le){if(Le instanceof DOMException&&Le.name==="DataCloneError")throw Le;_.location.assign(fe)}w&&b&&b({action:z,location:Z.location,delta:1})}function X(ee,W){z="REPLACE";let J=Yo(Z.location,ee,W);o(J,ee),D=N();let ue=Jc(J,D),fe=Z.createHref(J);x.replaceState(ue,"",fe),w&&b&&b({action:z,location:Z.location,delta:0})}function Q(ee){let W=_.location.origin!=="null"?_.location.origin:_.location.href,J=typeof ee=="string"?ee:Ei(ee);return J=J.replace(/ $/,"%20"),nt(W,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,W)}let Z={get action(){return z},get location(){return a(_,x)},listen(ee){if(b)throw new Error("A history only accepts one active listener");return _.addEventListener(Xc,I),b=ee,()=>{_.removeEventListener(Xc,I),b=null}},createHref(ee){return i(_,ee)},createURL:Q,encodeLocation(ee){let W=Q(ee);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:F,replace:X,go(ee){return x.go(ee)}};return Z}function wd(a,i,o="/"){return Vp(a,i,o,!1)}function Vp(a,i,o,f){let _=typeof i=="string"?_r(i):i,w=nr(_.pathname||"/",o);if(w==null)return null;let x=xd(a);qp(x);let z=null;for(let b=0;z==null&&b<x.length;++b){let D=th(w);z=Zp(x[b],D,f)}return z}function xd(a,i=[],o=[],f=""){let _=(w,x,z)=>{let b={relativePath:z===void 0?w.path||"":z,caseSensitive:w.caseSensitive===!0,childrenIndex:x,route:w};b.relativePath.startsWith("/")&&(nt(b.relativePath.startsWith(f),`Absolute route path "${b.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(f.length));let D=Cn([f,b.relativePath]),N=o.concat(b);w.children&&w.children.length>0&&(nt(w.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${D}".`),xd(w.children,i,N,D)),!(w.path==null&&!w.index)&&i.push({path:D,score:Xp(D,w.index),routesMeta:N})};return a.forEach((w,x)=>{var z;if(w.path===""||!((z=w.path)!=null&&z.includes("?")))_(w,x);else for(let b of Sd(w.path))_(w,x,b)}),i}function Sd(a){let i=a.split("/");if(i.length===0)return[];let[o,...f]=i,_=o.endsWith("?"),w=o.replace(/\?$/,"");if(f.length===0)return _?[w,""]:[w];let x=Sd(f.join("/")),z=[];return z.push(...x.map(b=>b===""?w:[w,b].join("/"))),_&&z.push(...x),z.map(b=>a.startsWith("/")&&b===""?"/":b)}function qp(a){a.sort((i,o)=>i.score!==o.score?o.score-i.score:Jp(i.routesMeta.map(f=>f.childrenIndex),o.routesMeta.map(f=>f.childrenIndex)))}var Hp=/^:[\w-]+$/,$p=3,jp=2,Qp=1,Yp=10,Kp=-2,Zc=a=>a==="*";function Xp(a,i){let o=a.split("/"),f=o.length;return o.some(Zc)&&(f+=Kp),i&&(f+=jp),o.filter(_=>!Zc(_)).reduce((_,w)=>_+(Hp.test(w)?$p:w===""?Qp:Yp),f)}function Jp(a,i){return a.length===i.length&&a.slice(0,-1).every((f,_)=>f===i[_])?a[a.length-1]-i[i.length-1]:0}function Zp(a,i,o=!1){let{routesMeta:f}=a,_={},w="/",x=[];for(let z=0;z<f.length;++z){let b=f[z],D=z===f.length-1,N=w==="/"?i:i.slice(w.length)||"/",I=$a({path:b.relativePath,caseSensitive:b.caseSensitive,end:D},N),F=b.route;if(!I&&D&&o&&!f[f.length-1].route.index&&(I=$a({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},N)),!I)return null;Object.assign(_,I.params),x.push({params:_,pathname:Cn([w,I.pathname]),pathnameBase:ah(Cn([w,I.pathnameBase])),route:F}),I.pathnameBase!=="/"&&(w=Cn([w,I.pathnameBase]))}return x}function $a(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,f]=eh(a.path,a.caseSensitive,a.end),_=i.match(o);if(!_)return null;let w=_[0],x=w.replace(/(.)\/+$/,"$1"),z=_.slice(1);return{params:f.reduce((D,{paramName:N,isOptional:I},F)=>{if(N==="*"){let Q=z[F]||"";x=w.slice(0,w.length-Q.length).replace(/(.)\/+$/,"$1")}const X=z[F];return I&&!X?D[N]=void 0:D[N]=(X||"").replace(/%2F/g,"/"),D},{}),pathname:w,pathnameBase:x,pattern:a}}function eh(a,i=!1,o=!0){Xt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let f=[],_="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,z,b)=>(f.push({paramName:z,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(f.push({paramName:"*"}),_+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?_+="\\/*$":a!==""&&a!=="/"&&(_+="(?:(?=\\/|$))"),[new RegExp(_,i?void 0:"i"),f]}function th(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Xt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function nr(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,f=a.charAt(o);return f&&f!=="/"?null:a.slice(o)||"/"}function nh(a,i="/"){let{pathname:o,search:f="",hash:_=""}=typeof a=="string"?_r(a):a;return{pathname:o?o.startsWith("/")?o:rh(o,i):i,search:sh(f),hash:oh(_)}}function rh(a,i){let o=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(_=>{_===".."?o.length>1&&o.pop():_!=="."&&o.push(_)}),o.length>1?o.join("/"):"/"}function Oo(a,i,o,f){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ih(a){return a.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function el(a){let i=ih(a);return i.map((o,f)=>f===i.length-1?o.pathname:o.pathnameBase)}function tl(a,i,o,f=!1){let _;typeof a=="string"?_=_r(a):(_={...a},nt(!_.pathname||!_.pathname.includes("?"),Oo("?","pathname","search",_)),nt(!_.pathname||!_.pathname.includes("#"),Oo("#","pathname","hash",_)),nt(!_.search||!_.search.includes("#"),Oo("#","search","hash",_)));let w=a===""||_.pathname==="",x=w?"/":_.pathname,z;if(x==null)z=o;else{let I=i.length-1;if(!f&&x.startsWith("..")){let F=x.split("/");for(;F[0]==="..";)F.shift(),I-=1;_.pathname=F.join("/")}z=I>=0?i[I]:"/"}let b=nh(_,z),D=x&&x!=="/"&&x.endsWith("/"),N=(w||x===".")&&o.endsWith("/");return!b.pathname.endsWith("/")&&(D||N)&&(b.pathname+="/"),b}var Cn=a=>a.join("/").replace(/\/\/+/g,"/"),ah=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),sh=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,oh=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function lh(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Td=["POST","PUT","PATCH","DELETE"];new Set(Td);var uh=["GET",...Td];new Set(uh);var Br=K.createContext(null);Br.displayName="DataRouter";var Qa=K.createContext(null);Qa.displayName="DataRouterState";var bd=K.createContext({isTransitioning:!1});bd.displayName="ViewTransition";var ch=K.createContext(new Map);ch.displayName="Fetchers";var dh=K.createContext(null);dh.displayName="Await";var fn=K.createContext(null);fn.displayName="Navigation";var Di=K.createContext(null);Di.displayName="Location";var Sn=K.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var nl=K.createContext(null);nl.displayName="RouteError";function fh(a,{relative:i}={}){nt(Wr(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:f}=K.useContext(fn),{hash:_,pathname:w,search:x}=zi(a,{relative:i}),z=w;return o!=="/"&&(z=w==="/"?o:Cn([o,w])),f.createHref({pathname:z,search:x,hash:_})}function Wr(){return K.useContext(Di)!=null}function Tn(){return nt(Wr(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(Di).location}var Ed="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Md(a){K.useContext(fn).static||K.useLayoutEffect(a)}function rl(){let{isDataRoute:a}=K.useContext(Sn);return a?Eh():ph()}function ph(){nt(Wr(),"useNavigate() may be used only in the context of a <Router> component.");let a=K.useContext(Br),{basename:i,navigator:o}=K.useContext(fn),{matches:f}=K.useContext(Sn),{pathname:_}=Tn(),w=JSON.stringify(el(f)),x=K.useRef(!1);return Md(()=>{x.current=!0}),K.useCallback((b,D={})=>{if(Xt(x.current,Ed),!x.current)return;if(typeof b=="number"){o.go(b);return}let N=tl(b,JSON.parse(w),_,D.relative==="path");a==null&&i!=="/"&&(N.pathname=N.pathname==="/"?i:Cn([i,N.pathname])),(D.replace?o.replace:o.push)(N,D.state,D)},[i,o,w,_,a])}K.createContext(null);function zi(a,{relative:i}={}){let{matches:o}=K.useContext(Sn),{pathname:f}=Tn(),_=JSON.stringify(el(o));return K.useMemo(()=>tl(a,JSON.parse(_),f,i==="path"),[a,_,f,i])}function hh(a,i){return Dd(a,i)}function Dd(a,i,o,f){var W;nt(Wr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:_}=K.useContext(fn),{matches:w}=K.useContext(Sn),x=w[w.length-1],z=x?x.params:{},b=x?x.pathname:"/",D=x?x.pathnameBase:"/",N=x&&x.route;{let J=N&&N.path||"";zd(b,!N||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let I=Tn(),F;if(i){let J=typeof i=="string"?_r(i):i;nt(D==="/"||((W=J.pathname)==null?void 0:W.startsWith(D)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${D}" but pathname "${J.pathname}" was given in the \`location\` prop.`),F=J}else F=I;let X=F.pathname||"/",Q=X;if(D!=="/"){let J=D.replace(/^\//,"").split("/");Q="/"+X.replace(/^\//,"").split("/").slice(J.length).join("/")}let Z=wd(a,{pathname:Q});Xt(N||Z!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),Xt(Z==null||Z[Z.length-1].route.element!==void 0||Z[Z.length-1].route.Component!==void 0||Z[Z.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let ee=yh(Z&&Z.map(J=>Object.assign({},J,{params:Object.assign({},z,J.params),pathname:Cn([D,_.encodeLocation?_.encodeLocation(J.pathname).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?D:Cn([D,_.encodeLocation?_.encodeLocation(J.pathnameBase).pathname:J.pathnameBase])})),w,o,f);return i&&ee?K.createElement(Di.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...F},navigationType:"POP"}},ee):ee}function mh(){let a=bh(),i=lh(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,f="rgba(200,200,200, 0.5)",_={padding:"0.5rem",backgroundColor:f},w={padding:"2px 4px",backgroundColor:f},x=null;return console.error("Error handled by React Router default ErrorBoundary:",a),x=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:w},"ErrorBoundary")," or"," ",K.createElement("code",{style:w},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},i),o?K.createElement("pre",{style:_},o):null,x)}var _h=K.createElement(mh,null),gh=class extends K.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){console.error("React Router caught the following error during render",a,i)}render(){return this.state.error!==void 0?K.createElement(Sn.Provider,{value:this.props.routeContext},K.createElement(nl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vh({routeContext:a,match:i,children:o}){let f=K.useContext(Br);return f&&f.static&&f.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=i.route.id),K.createElement(Sn.Provider,{value:a},o)}function yh(a,i=[],o=null,f=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let _=a,w=o==null?void 0:o.errors;if(w!=null){let b=_.findIndex(D=>D.route.id&&(w==null?void 0:w[D.route.id])!==void 0);nt(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(w).join(",")}`),_=_.slice(0,Math.min(_.length,b+1))}let x=!1,z=-1;if(o)for(let b=0;b<_.length;b++){let D=_[b];if((D.route.HydrateFallback||D.route.hydrateFallbackElement)&&(z=b),D.route.id){let{loaderData:N,errors:I}=o,F=D.route.loader&&!N.hasOwnProperty(D.route.id)&&(!I||I[D.route.id]===void 0);if(D.route.lazy||F){x=!0,z>=0?_=_.slice(0,z+1):_=[_[0]];break}}}return _.reduceRight((b,D,N)=>{let I,F=!1,X=null,Q=null;o&&(I=w&&D.route.id?w[D.route.id]:void 0,X=D.route.errorElement||_h,x&&(z<0&&N===0?(zd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,Q=null):z===N&&(F=!0,Q=D.route.hydrateFallbackElement||null)));let Z=i.concat(_.slice(0,N+1)),ee=()=>{let W;return I?W=X:F?W=Q:D.route.Component?W=K.createElement(D.route.Component,null):D.route.element?W=D.route.element:W=b,K.createElement(vh,{match:D,routeContext:{outlet:b,matches:Z,isDataRoute:o!=null},children:W})};return o&&(D.route.ErrorBoundary||D.route.errorElement||N===0)?K.createElement(gh,{location:o.location,revalidation:o.revalidation,component:X,error:I,children:ee(),routeContext:{outlet:null,matches:Z,isDataRoute:!0}}):ee()},null)}function il(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wh(a){let i=K.useContext(Br);return nt(i,il(a)),i}function xh(a){let i=K.useContext(Qa);return nt(i,il(a)),i}function Sh(a){let i=K.useContext(Sn);return nt(i,il(a)),i}function al(a){let i=Sh(a),o=i.matches[i.matches.length-1];return nt(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function Th(){return al("useRouteId")}function bh(){var f;let a=K.useContext(nl),i=xh("useRouteError"),o=al("useRouteError");return a!==void 0?a:(f=i.errors)==null?void 0:f[o]}function Eh(){let{router:a}=wh("useNavigate"),i=al("useNavigate"),o=K.useRef(!1);return Md(()=>{o.current=!0}),K.useCallback(async(_,w={})=>{Xt(o.current,Ed),o.current&&(typeof _=="number"?a.navigate(_):await a.navigate(_,{fromRouteId:i,...w}))},[a,i])}var ed={};function zd(a,i,o){!i&&!ed[a]&&(ed[a]=!0,Xt(!1,o))}K.memo(Mh);function Mh({routes:a,future:i,state:o}){return Dd(a,void 0,o,i)}function Dh({to:a,replace:i,state:o,relative:f}){nt(Wr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:_}=K.useContext(fn);Xt(!_,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:w}=K.useContext(Sn),{pathname:x}=Tn(),z=rl(),b=tl(a,el(w),x,f==="path"),D=JSON.stringify(b);return K.useEffect(()=>{z(JSON.parse(D),{replace:i,state:o,relative:f})},[z,D,f,i,o]),null}function Wa(a){nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zh({basename:a="/",children:i=null,location:o,navigationType:f="POP",navigator:_,static:w=!1}){nt(!Wr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=a.replace(/^\/*/,"/"),z=K.useMemo(()=>({basename:x,navigator:_,static:w,future:{}}),[x,_,w]);typeof o=="string"&&(o=_r(o));let{pathname:b="/",search:D="",hash:N="",state:I=null,key:F="default"}=o,X=K.useMemo(()=>{let Q=nr(b,x);return Q==null?null:{location:{pathname:Q,search:D,hash:N,state:I,key:F},navigationType:f}},[x,b,D,N,I,F,f]);return Xt(X!=null,`<Router basename="${x}"> is not able to match the URL "${b}${D}${N}" because it does not start with the basename, so the <Router> won't render anything.`),X==null?null:K.createElement(fn.Provider,{value:z},K.createElement(Di.Provider,{children:i,value:X}))}function Ah({children:a,location:i}){return hh(Ko(a),i)}function Ko(a,i=[]){let o=[];return K.Children.forEach(a,(f,_)=>{if(!K.isValidElement(f))return;let w=[...i,_];if(f.type===K.Fragment){o.push.apply(o,Ko(f.props.children,w));return}nt(f.type===Wa,`[${typeof f.type=="string"?f.type:f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nt(!f.props.index||!f.props.children,"An index route cannot have child routes.");let x={id:f.props.id||w.join("-"),caseSensitive:f.props.caseSensitive,element:f.props.element,Component:f.props.Component,index:f.props.index,path:f.props.path,loader:f.props.loader,action:f.props.action,hydrateFallbackElement:f.props.hydrateFallbackElement,HydrateFallback:f.props.HydrateFallback,errorElement:f.props.errorElement,ErrorBoundary:f.props.ErrorBoundary,hasErrorBoundary:f.props.hasErrorBoundary===!0||f.props.ErrorBoundary!=null||f.props.errorElement!=null,shouldRevalidate:f.props.shouldRevalidate,handle:f.props.handle,lazy:f.props.lazy};f.props.children&&(x.children=Ko(f.props.children,w)),o.push(x)}),o}var Va="get",qa="application/x-www-form-urlencoded";function Ya(a){return a!=null&&typeof a.tagName=="string"}function Ph(a){return Ya(a)&&a.tagName.toLowerCase()==="button"}function Rh(a){return Ya(a)&&a.tagName.toLowerCase()==="form"}function Lh(a){return Ya(a)&&a.tagName.toLowerCase()==="input"}function Uh(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Ch(a,i){return a.button===0&&(!i||i==="_self")&&!Uh(a)}function Xo(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((i,o)=>{let f=a[o];return i.concat(Array.isArray(f)?f.map(_=>[o,_]):[[o,f]])},[]))}function kh(a,i){let o=Xo(a);return i&&i.forEach((f,_)=>{o.has(_)||i.getAll(_).forEach(w=>{o.append(_,w)})}),o}var Na=null;function Ih(){if(Na===null)try{new FormData(document.createElement("form"),0),Na=!1}catch{Na=!0}return Na}var Oh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fo(a){return a!=null&&!Oh.has(a)?(Xt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qa}"`),null):a}function Fh(a,i){let o,f,_,w,x;if(Rh(a)){let z=a.getAttribute("action");f=z?nr(z,i):null,o=a.getAttribute("method")||Va,_=Fo(a.getAttribute("enctype"))||qa,w=new FormData(a)}else if(Ph(a)||Lh(a)&&(a.type==="submit"||a.type==="image")){let z=a.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=a.getAttribute("formaction")||z.getAttribute("action");if(f=b?nr(b,i):null,o=a.getAttribute("formmethod")||z.getAttribute("method")||Va,_=Fo(a.getAttribute("formenctype"))||Fo(z.getAttribute("enctype"))||qa,w=new FormData(z,a),!Ih()){let{name:D,type:N,value:I}=a;if(N==="image"){let F=D?`${D}.`:"";w.append(`${F}x`,"0"),w.append(`${F}y`,"0")}else D&&w.append(D,I)}}else{if(Ya(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Va,f=null,_=qa,x=a}return w&&_==="text/plain"&&(x=w,w=void 0),{action:f,method:o.toLowerCase(),encType:_,formData:w,body:x}}function sl(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}async function Nh(a,i){if(a.id in i)return i[a.id];try{let o=await import(a.module);return i[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gh(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Bh(a,i,o){let f=await Promise.all(a.map(async _=>{let w=i.routes[_.route.id];if(w){let x=await Nh(w,o);return x.links?x.links():[]}return[]}));return Hh(f.flat(1).filter(Gh).filter(_=>_.rel==="stylesheet"||_.rel==="preload").map(_=>_.rel==="stylesheet"?{..._,rel:"prefetch",as:"style"}:{..._,rel:"prefetch"}))}function td(a,i,o,f,_,w){let x=(b,D)=>o[D]?b.route.id!==o[D].route.id:!0,z=(b,D)=>{var N;return o[D].pathname!==b.pathname||((N=o[D].route.path)==null?void 0:N.endsWith("*"))&&o[D].params["*"]!==b.params["*"]};return w==="assets"?i.filter((b,D)=>x(b,D)||z(b,D)):w==="data"?i.filter((b,D)=>{var I;let N=f.routes[b.route.id];if(!N||!N.hasLoader)return!1;if(x(b,D)||z(b,D))return!0;if(b.route.shouldRevalidate){let F=b.route.shouldRevalidate({currentUrl:new URL(_.pathname+_.search+_.hash,window.origin),currentParams:((I=o[0])==null?void 0:I.params)||{},nextUrl:new URL(a,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof F=="boolean")return F}return!0}):[]}function Wh(a,i){return Vh(a.map(o=>{let f=i.routes[o.route.id];if(!f)return[];let _=[f.module];return f.imports&&(_=_.concat(f.imports)),_}).flat(1))}function Vh(a){return[...new Set(a)]}function qh(a){let i={},o=Object.keys(a).sort();for(let f of o)i[f]=a[f];return i}function Hh(a,i){let o=new Set;return new Set(i),a.reduce((f,_)=>{let w=JSON.stringify(qh(_));return o.has(w)||(o.add(w),f.push({key:w,link:_})),f},[])}function $h(a){let i=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return i.pathname==="/"?i.pathname="_root.data":i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function jh(){let a=K.useContext(Br);return sl(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Qh(){let a=K.useContext(Qa);return sl(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var ol=K.createContext(void 0);ol.displayName="FrameworkContext";function Ad(){let a=K.useContext(ol);return sl(a,"You must render this element inside a <HydratedRouter> element"),a}function Yh(a,i){let o=K.useContext(ol),[f,_]=K.useState(!1),[w,x]=K.useState(!1),{onFocus:z,onBlur:b,onMouseEnter:D,onMouseLeave:N,onTouchStart:I}=i,F=K.useRef(null);K.useEffect(()=>{if(a==="render"&&x(!0),a==="viewport"){let Z=W=>{W.forEach(J=>{x(J.isIntersecting)})},ee=new IntersectionObserver(Z,{threshold:.5});return F.current&&ee.observe(F.current),()=>{ee.disconnect()}}},[a]),K.useEffect(()=>{if(f){let Z=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(Z)}}},[f]);let X=()=>{_(!0)},Q=()=>{_(!1),x(!1)};return o?a!=="intent"?[w,F,{}]:[w,F,{onFocus:bi(z,X),onBlur:bi(b,Q),onMouseEnter:bi(D,X),onMouseLeave:bi(N,Q),onTouchStart:bi(I,X)}]:[!1,F,{}]}function bi(a,i){return o=>{a&&a(o),o.defaultPrevented||i(o)}}function Kh({page:a,...i}){let{router:o}=jh(),f=K.useMemo(()=>wd(o.routes,a,o.basename),[o.routes,a,o.basename]);return f?K.createElement(Jh,{page:a,matches:f,...i}):null}function Xh(a){let{manifest:i,routeModules:o}=Ad(),[f,_]=K.useState([]);return K.useEffect(()=>{let w=!1;return Bh(a,i,o).then(x=>{w||_(x)}),()=>{w=!0}},[a,i,o]),f}function Jh({page:a,matches:i,...o}){let f=Tn(),{manifest:_,routeModules:w}=Ad(),{loaderData:x,matches:z}=Qh(),b=K.useMemo(()=>td(a,i,z,_,f,"data"),[a,i,z,_,f]),D=K.useMemo(()=>td(a,i,z,_,f,"assets"),[a,i,z,_,f]),N=K.useMemo(()=>{if(a===f.pathname+f.search+f.hash)return[];let X=new Set,Q=!1;if(i.forEach(ee=>{var J;let W=_.routes[ee.route.id];!W||!W.hasLoader||(!b.some(ue=>ue.route.id===ee.route.id)&&ee.route.id in x&&((J=w[ee.route.id])!=null&&J.shouldRevalidate)||W.hasClientLoader?Q=!0:X.add(ee.route.id))}),X.size===0)return[];let Z=$h(a);return Q&&X.size>0&&Z.searchParams.set("_routes",i.filter(ee=>X.has(ee.route.id)).map(ee=>ee.route.id).join(",")),[Z.pathname+Z.search]},[x,f,_,b,i,a,w]),I=K.useMemo(()=>Wh(D,_),[D,_]),F=Xh(D);return K.createElement(K.Fragment,null,N.map(X=>K.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...o})),I.map(X=>K.createElement("link",{key:X,rel:"modulepreload",href:X,...o})),F.map(({key:X,link:Q})=>K.createElement("link",{key:X,...Q})))}function Zh(...a){return i=>{a.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var Pd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Pd&&(window.__reactRouterVersion="7.1.3")}catch{}function em({basename:a,children:i,window:o}){let f=K.useRef();f.current==null&&(f.current=Gp({window:o,v5Compat:!0}));let _=f.current,[w,x]=K.useState({action:_.action,location:_.location}),z=K.useCallback(b=>{K.startTransition(()=>x(b))},[x]);return K.useLayoutEffect(()=>_.listen(z),[_,z]),K.createElement(zh,{basename:a,children:i,location:w.location,navigationType:w.action,navigator:_})}var Rd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tr=K.forwardRef(function({onClick:i,discover:o="render",prefetch:f="none",relative:_,reloadDocument:w,replace:x,state:z,target:b,to:D,preventScrollReset:N,viewTransition:I,...F},X){let{basename:Q}=K.useContext(fn),Z=typeof D=="string"&&Rd.test(D),ee,W=!1;if(typeof D=="string"&&Z&&(ee=D,Pd))try{let Fe=new URL(window.location.href),Ne=D.startsWith("//")?new URL(Fe.protocol+D):new URL(D),Qe=nr(Ne.pathname,Q);Ne.origin===Fe.origin&&Qe!=null?D=Qe+Ne.search+Ne.hash:W=!0}catch{Xt(!1,`<Link to="${D}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=fh(D,{relative:_}),[ue,fe,Le]=Yh(f,F),Ce=im(D,{replace:x,state:z,target:b,preventScrollReset:N,relative:_,viewTransition:I});function ke(Fe){i&&i(Fe),Fe.defaultPrevented||Ce(Fe)}let We=K.createElement("a",{...F,...Le,href:ee||J,onClick:W||w?i:ke,ref:Zh(X,fe),target:b,"data-discover":!Z&&o==="render"?"true":void 0});return ue&&!Z?K.createElement(K.Fragment,null,We,K.createElement(Kh,{page:J})):We});tr.displayName="Link";var tm=K.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:f="",end:_=!1,style:w,to:x,viewTransition:z,children:b,...D},N){let I=zi(x,{relative:D.relative}),F=Tn(),X=K.useContext(Qa),{navigator:Q,basename:Z}=K.useContext(fn),ee=X!=null&&um(I)&&z===!0,W=Q.encodeLocation?Q.encodeLocation(I).pathname:I.pathname,J=F.pathname,ue=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;o||(J=J.toLowerCase(),ue=ue?ue.toLowerCase():null,W=W.toLowerCase()),ue&&Z&&(ue=nr(ue,Z)||ue);const fe=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let Le=J===W||!_&&J.startsWith(W)&&J.charAt(fe)==="/",Ce=ue!=null&&(ue===W||!_&&ue.startsWith(W)&&ue.charAt(W.length)==="/"),ke={isActive:Le,isPending:Ce,isTransitioning:ee},We=Le?i:void 0,Fe;typeof f=="function"?Fe=f(ke):Fe=[f,Le?"active":null,Ce?"pending":null,ee?"transitioning":null].filter(Boolean).join(" ");let Ne=typeof w=="function"?w(ke):w;return K.createElement(tr,{...D,"aria-current":We,className:Fe,ref:N,style:Ne,to:x,viewTransition:z},typeof b=="function"?b(ke):b)});tm.displayName="NavLink";var nm=K.forwardRef(({discover:a="render",fetcherKey:i,navigate:o,reloadDocument:f,replace:_,state:w,method:x=Va,action:z,onSubmit:b,relative:D,preventScrollReset:N,viewTransition:I,...F},X)=>{let Q=om(),Z=lm(z,{relative:D}),ee=x.toLowerCase()==="get"?"get":"post",W=typeof z=="string"&&Rd.test(z),J=ue=>{if(b&&b(ue),ue.defaultPrevented)return;ue.preventDefault();let fe=ue.nativeEvent.submitter,Le=(fe==null?void 0:fe.getAttribute("formmethod"))||x;Q(fe||ue.currentTarget,{fetcherKey:i,method:Le,navigate:o,replace:_,state:w,relative:D,preventScrollReset:N,viewTransition:I})};return K.createElement("form",{ref:X,method:ee,action:Z,onSubmit:f?b:J,...F,"data-discover":!W&&a==="render"?"true":void 0})});nm.displayName="Form";function rm(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ld(a){let i=K.useContext(Br);return nt(i,rm(a)),i}function im(a,{target:i,replace:o,state:f,preventScrollReset:_,relative:w,viewTransition:x}={}){let z=rl(),b=Tn(),D=zi(a,{relative:w});return K.useCallback(N=>{if(Ch(N,i)){N.preventDefault();let I=o!==void 0?o:Ei(b)===Ei(D);z(a,{replace:I,state:f,preventScrollReset:_,relative:w,viewTransition:x})}},[b,z,D,o,f,i,a,_,w,x])}function Ud(a){Xt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let i=K.useRef(Xo(a)),o=K.useRef(!1),f=Tn(),_=K.useMemo(()=>kh(f.search,o.current?null:i.current),[f.search]),w=rl(),x=K.useCallback((z,b)=>{const D=Xo(typeof z=="function"?z(_):z);o.current=!0,w("?"+D,b)},[w,_]);return[_,x]}var am=0,sm=()=>`__${String(++am)}__`;function om(){let{router:a}=Ld("useSubmit"),{basename:i}=K.useContext(fn),o=Th();return K.useCallback(async(f,_={})=>{let{action:w,method:x,encType:z,formData:b,body:D}=Fh(f,i);if(_.navigate===!1){let N=_.fetcherKey||sm();await a.fetch(N,o,_.action||w,{preventScrollReset:_.preventScrollReset,formData:b,body:D,formMethod:_.method||x,formEncType:_.encType||z,flushSync:_.flushSync})}else await a.navigate(_.action||w,{preventScrollReset:_.preventScrollReset,formData:b,body:D,formMethod:_.method||x,formEncType:_.encType||z,replace:_.replace,state:_.state,fromRouteId:o,flushSync:_.flushSync,viewTransition:_.viewTransition})},[a,i,o])}function lm(a,{relative:i}={}){let{basename:o}=K.useContext(fn),f=K.useContext(Sn);nt(f,"useFormAction must be used inside a RouteContext");let[_]=f.matches.slice(-1),w={...zi(a||".",{relative:i})},x=Tn();if(a==null){w.search=x.search;let z=new URLSearchParams(w.search),b=z.getAll("index");if(b.some(N=>N==="")){z.delete("index"),b.filter(I=>I).forEach(I=>z.append("index",I));let N=z.toString();w.search=N?`?${N}`:""}}return(!a||a===".")&&_.route.index&&(w.search=w.search?w.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(w.pathname=w.pathname==="/"?o:Cn([o,w.pathname])),Ei(w)}function um(a,i={}){let o=K.useContext(bd);nt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:f}=Ld("useViewTransitionState"),_=zi(a,{relative:i.relative});if(!o.isTransitioning)return!1;let w=nr(o.currentLocation.pathname,f)||o.currentLocation.pathname,x=nr(o.nextLocation.pathname,f)||o.nextLocation.pathname;return $a(_.pathname,x)!=null||$a(_.pathname,w)!=null}new TextEncoder;const cm=`struct VertexOut {
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
}`;function dm(a,i){return class extends a{constructor(...o){super(...o),i(this)}}}const fm=dm(Array,a=>a.fill(0));let Oe=1e-6;function pm(a){function i(l=0,v=0){const c=new a(2);return l!==void 0&&(c[0]=l,v!==void 0&&(c[1]=v)),c}const o=i;function f(l,v,c){const h=c??new a(2);return h[0]=l,h[1]=v,h}function _(l,v){const c=v??new a(2);return c[0]=Math.ceil(l[0]),c[1]=Math.ceil(l[1]),c}function w(l,v){const c=v??new a(2);return c[0]=Math.floor(l[0]),c[1]=Math.floor(l[1]),c}function x(l,v){const c=v??new a(2);return c[0]=Math.round(l[0]),c[1]=Math.round(l[1]),c}function z(l,v=0,c=1,h){const S=h??new a(2);return S[0]=Math.min(c,Math.max(v,l[0])),S[1]=Math.min(c,Math.max(v,l[1])),S}function b(l,v,c){const h=c??new a(2);return h[0]=l[0]+v[0],h[1]=l[1]+v[1],h}function D(l,v,c,h){const S=h??new a(2);return S[0]=l[0]+v[0]*c,S[1]=l[1]+v[1]*c,S}function N(l,v){const c=l[0],h=l[1],S=v[0],U=v[1],H=Math.sqrt(c*c+h*h),y=Math.sqrt(S*S+U*U),T=H*y,L=T&&Fe(l,v)/T;return Math.acos(L)}function I(l,v,c){const h=c??new a(2);return h[0]=l[0]-v[0],h[1]=l[1]-v[1],h}const F=I;function X(l,v){return Math.abs(l[0]-v[0])<Oe&&Math.abs(l[1]-v[1])<Oe}function Q(l,v){return l[0]===v[0]&&l[1]===v[1]}function Z(l,v,c,h){const S=h??new a(2);return S[0]=l[0]+c*(v[0]-l[0]),S[1]=l[1]+c*(v[1]-l[1]),S}function ee(l,v,c,h){const S=h??new a(2);return S[0]=l[0]+c[0]*(v[0]-l[0]),S[1]=l[1]+c[1]*(v[1]-l[1]),S}function W(l,v,c){const h=c??new a(2);return h[0]=Math.max(l[0],v[0]),h[1]=Math.max(l[1],v[1]),h}function J(l,v,c){const h=c??new a(2);return h[0]=Math.min(l[0],v[0]),h[1]=Math.min(l[1],v[1]),h}function ue(l,v,c){const h=c??new a(2);return h[0]=l[0]*v,h[1]=l[1]*v,h}const fe=ue;function Le(l,v,c){const h=c??new a(2);return h[0]=l[0]/v,h[1]=l[1]/v,h}function Ce(l,v){const c=v??new a(2);return c[0]=1/l[0],c[1]=1/l[1],c}const ke=Ce;function We(l,v,c){const h=c??new a(3),S=l[0]*v[1]-l[1]*v[0];return h[0]=0,h[1]=0,h[2]=S,h}function Fe(l,v){return l[0]*v[0]+l[1]*v[1]}function Ne(l){const v=l[0],c=l[1];return Math.sqrt(v*v+c*c)}const Qe=Ne;function xe(l){const v=l[0],c=l[1];return v*v+c*c}const ze=xe;function Se(l,v){const c=l[0]-v[0],h=l[1]-v[1];return Math.sqrt(c*c+h*h)}const Xe=Se;function qe(l,v){const c=l[0]-v[0],h=l[1]-v[1];return c*c+h*h}const Ve=qe;function se(l,v){const c=v??new a(2),h=l[0],S=l[1],U=Math.sqrt(h*h+S*S);return U>1e-5?(c[0]=h/U,c[1]=S/U):(c[0]=0,c[1]=0),c}function ye(l,v){const c=v??new a(2);return c[0]=-l[0],c[1]=-l[1],c}function oe(l,v){const c=v??new a(2);return c[0]=l[0],c[1]=l[1],c}const O=oe;function ne(l,v,c){const h=c??new a(2);return h[0]=l[0]*v[0],h[1]=l[1]*v[1],h}const Me=ne;function Te(l,v,c){const h=c??new a(2);return h[0]=l[0]/v[0],h[1]=l[1]/v[1],h}const Re=Te;function Pe(l=1,v){const c=v??new a(2),h=Math.random()*2*Math.PI;return c[0]=Math.cos(h)*l,c[1]=Math.sin(h)*l,c}function p(l){const v=l??new a(2);return v[0]=0,v[1]=0,v}function M(l,v,c){const h=c??new a(2),S=l[0],U=l[1];return h[0]=S*v[0]+U*v[4]+v[12],h[1]=S*v[1]+U*v[5]+v[13],h}function d(l,v,c){const h=c??new a(2),S=l[0],U=l[1];return h[0]=v[0]*S+v[4]*U+v[8],h[1]=v[1]*S+v[5]*U+v[9],h}function m(l,v,c,h){const S=h??new a(2),U=l[0]-v[0],H=l[1]-v[1],y=Math.sin(c),T=Math.cos(c);return S[0]=U*T-H*y+v[0],S[1]=U*y+H*T+v[1],S}function E(l,v,c){const h=c??new a(2);return se(l,h),ue(h,v,h)}function P(l,v,c){const h=c??new a(2);return Ne(l)>v?E(l,v,h):oe(l,h)}function V(l,v,c){const h=c??new a(2);return Z(l,v,.5,h)}return{create:i,fromValues:o,set:f,ceil:_,floor:w,round:x,clamp:z,add:b,addScaled:D,angle:N,subtract:I,sub:F,equalsApproximately:X,equals:Q,lerp:Z,lerpV:ee,max:W,min:J,mulScalar:ue,scale:fe,divScalar:Le,inverse:Ce,invert:ke,cross:We,dot:Fe,length:Ne,len:Qe,lengthSq:xe,lenSq:ze,distance:Se,dist:Xe,distanceSq:qe,distSq:Ve,normalize:se,negate:ye,copy:oe,clone:O,multiply:ne,mul:Me,divide:Te,div:Re,random:Pe,zero:p,transformMat4:M,transformMat3:d,rotate:m,setLength:E,truncate:P,midpoint:V}}const nd=new Map;function Cd(a){let i=nd.get(a);return i||(i=pm(a),nd.set(a,i)),i}function hm(a){function i(y,T,L){const C=new a(3);return y!==void 0&&(C[0]=y,T!==void 0&&(C[1]=T,L!==void 0&&(C[2]=L))),C}const o=i;function f(y,T,L,C){const $=C??new a(3);return $[0]=y,$[1]=T,$[2]=L,$}function _(y,T){const L=T??new a(3);return L[0]=Math.ceil(y[0]),L[1]=Math.ceil(y[1]),L[2]=Math.ceil(y[2]),L}function w(y,T){const L=T??new a(3);return L[0]=Math.floor(y[0]),L[1]=Math.floor(y[1]),L[2]=Math.floor(y[2]),L}function x(y,T){const L=T??new a(3);return L[0]=Math.round(y[0]),L[1]=Math.round(y[1]),L[2]=Math.round(y[2]),L}function z(y,T=0,L=1,C){const $=C??new a(3);return $[0]=Math.min(L,Math.max(T,y[0])),$[1]=Math.min(L,Math.max(T,y[1])),$[2]=Math.min(L,Math.max(T,y[2])),$}function b(y,T,L){const C=L??new a(3);return C[0]=y[0]+T[0],C[1]=y[1]+T[1],C[2]=y[2]+T[2],C}function D(y,T,L,C){const $=C??new a(3);return $[0]=y[0]+T[0]*L,$[1]=y[1]+T[1]*L,$[2]=y[2]+T[2]*L,$}function N(y,T){const L=y[0],C=y[1],$=y[2],Y=T[0],te=T[1],me=T[2],De=Math.sqrt(L*L+C*C+$*$),pe=Math.sqrt(Y*Y+te*te+me*me),_e=De*pe,Ie=_e&&Fe(y,T)/_e;return Math.acos(Ie)}function I(y,T,L){const C=L??new a(3);return C[0]=y[0]-T[0],C[1]=y[1]-T[1],C[2]=y[2]-T[2],C}const F=I;function X(y,T){return Math.abs(y[0]-T[0])<Oe&&Math.abs(y[1]-T[1])<Oe&&Math.abs(y[2]-T[2])<Oe}function Q(y,T){return y[0]===T[0]&&y[1]===T[1]&&y[2]===T[2]}function Z(y,T,L,C){const $=C??new a(3);return $[0]=y[0]+L*(T[0]-y[0]),$[1]=y[1]+L*(T[1]-y[1]),$[2]=y[2]+L*(T[2]-y[2]),$}function ee(y,T,L,C){const $=C??new a(3);return $[0]=y[0]+L[0]*(T[0]-y[0]),$[1]=y[1]+L[1]*(T[1]-y[1]),$[2]=y[2]+L[2]*(T[2]-y[2]),$}function W(y,T,L){const C=L??new a(3);return C[0]=Math.max(y[0],T[0]),C[1]=Math.max(y[1],T[1]),C[2]=Math.max(y[2],T[2]),C}function J(y,T,L){const C=L??new a(3);return C[0]=Math.min(y[0],T[0]),C[1]=Math.min(y[1],T[1]),C[2]=Math.min(y[2],T[2]),C}function ue(y,T,L){const C=L??new a(3);return C[0]=y[0]*T,C[1]=y[1]*T,C[2]=y[2]*T,C}const fe=ue;function Le(y,T,L){const C=L??new a(3);return C[0]=y[0]/T,C[1]=y[1]/T,C[2]=y[2]/T,C}function Ce(y,T){const L=T??new a(3);return L[0]=1/y[0],L[1]=1/y[1],L[2]=1/y[2],L}const ke=Ce;function We(y,T,L){const C=L??new a(3),$=y[2]*T[0]-y[0]*T[2],Y=y[0]*T[1]-y[1]*T[0];return C[0]=y[1]*T[2]-y[2]*T[1],C[1]=$,C[2]=Y,C}function Fe(y,T){return y[0]*T[0]+y[1]*T[1]+y[2]*T[2]}function Ne(y){const T=y[0],L=y[1],C=y[2];return Math.sqrt(T*T+L*L+C*C)}const Qe=Ne;function xe(y){const T=y[0],L=y[1],C=y[2];return T*T+L*L+C*C}const ze=xe;function Se(y,T){const L=y[0]-T[0],C=y[1]-T[1],$=y[2]-T[2];return Math.sqrt(L*L+C*C+$*$)}const Xe=Se;function qe(y,T){const L=y[0]-T[0],C=y[1]-T[1],$=y[2]-T[2];return L*L+C*C+$*$}const Ve=qe;function se(y,T){const L=T??new a(3),C=y[0],$=y[1],Y=y[2],te=Math.sqrt(C*C+$*$+Y*Y);return te>1e-5?(L[0]=C/te,L[1]=$/te,L[2]=Y/te):(L[0]=0,L[1]=0,L[2]=0),L}function ye(y,T){const L=T??new a(3);return L[0]=-y[0],L[1]=-y[1],L[2]=-y[2],L}function oe(y,T){const L=T??new a(3);return L[0]=y[0],L[1]=y[1],L[2]=y[2],L}const O=oe;function ne(y,T,L){const C=L??new a(3);return C[0]=y[0]*T[0],C[1]=y[1]*T[1],C[2]=y[2]*T[2],C}const Me=ne;function Te(y,T,L){const C=L??new a(3);return C[0]=y[0]/T[0],C[1]=y[1]/T[1],C[2]=y[2]/T[2],C}const Re=Te;function Pe(y=1,T){const L=T??new a(3),C=Math.random()*2*Math.PI,$=Math.random()*2-1,Y=Math.sqrt(1-$*$)*y;return L[0]=Math.cos(C)*Y,L[1]=Math.sin(C)*Y,L[2]=$*y,L}function p(y){const T=y??new a(3);return T[0]=0,T[1]=0,T[2]=0,T}function M(y,T,L){const C=L??new a(3),$=y[0],Y=y[1],te=y[2],me=T[3]*$+T[7]*Y+T[11]*te+T[15]||1;return C[0]=(T[0]*$+T[4]*Y+T[8]*te+T[12])/me,C[1]=(T[1]*$+T[5]*Y+T[9]*te+T[13])/me,C[2]=(T[2]*$+T[6]*Y+T[10]*te+T[14])/me,C}function d(y,T,L){const C=L??new a(3),$=y[0],Y=y[1],te=y[2];return C[0]=$*T[0*4+0]+Y*T[1*4+0]+te*T[2*4+0],C[1]=$*T[0*4+1]+Y*T[1*4+1]+te*T[2*4+1],C[2]=$*T[0*4+2]+Y*T[1*4+2]+te*T[2*4+2],C}function m(y,T,L){const C=L??new a(3),$=y[0],Y=y[1],te=y[2];return C[0]=$*T[0]+Y*T[4]+te*T[8],C[1]=$*T[1]+Y*T[5]+te*T[9],C[2]=$*T[2]+Y*T[6]+te*T[10],C}function E(y,T,L){const C=L??new a(3),$=T[0],Y=T[1],te=T[2],me=T[3]*2,De=y[0],pe=y[1],_e=y[2],Ie=Y*_e-te*pe,Ge=te*De-$*_e,Ye=$*pe-Y*De;return C[0]=De+Ie*me+(Y*Ye-te*Ge)*2,C[1]=pe+Ge*me+(te*Ie-$*Ye)*2,C[2]=_e+Ye*me+($*Ge-Y*Ie)*2,C}function P(y,T){const L=T??new a(3);return L[0]=y[12],L[1]=y[13],L[2]=y[14],L}function V(y,T,L){const C=L??new a(3),$=T*4;return C[0]=y[$+0],C[1]=y[$+1],C[2]=y[$+2],C}function l(y,T){const L=T??new a(3),C=y[0],$=y[1],Y=y[2],te=y[4],me=y[5],De=y[6],pe=y[8],_e=y[9],Ie=y[10];return L[0]=Math.sqrt(C*C+$*$+Y*Y),L[1]=Math.sqrt(te*te+me*me+De*De),L[2]=Math.sqrt(pe*pe+_e*_e+Ie*Ie),L}function v(y,T,L,C){const $=C??new a(3),Y=[],te=[];return Y[0]=y[0]-T[0],Y[1]=y[1]-T[1],Y[2]=y[2]-T[2],te[0]=Y[0],te[1]=Y[1]*Math.cos(L)-Y[2]*Math.sin(L),te[2]=Y[1]*Math.sin(L)+Y[2]*Math.cos(L),$[0]=te[0]+T[0],$[1]=te[1]+T[1],$[2]=te[2]+T[2],$}function c(y,T,L,C){const $=C??new a(3),Y=[],te=[];return Y[0]=y[0]-T[0],Y[1]=y[1]-T[1],Y[2]=y[2]-T[2],te[0]=Y[2]*Math.sin(L)+Y[0]*Math.cos(L),te[1]=Y[1],te[2]=Y[2]*Math.cos(L)-Y[0]*Math.sin(L),$[0]=te[0]+T[0],$[1]=te[1]+T[1],$[2]=te[2]+T[2],$}function h(y,T,L,C){const $=C??new a(3),Y=[],te=[];return Y[0]=y[0]-T[0],Y[1]=y[1]-T[1],Y[2]=y[2]-T[2],te[0]=Y[0]*Math.cos(L)-Y[1]*Math.sin(L),te[1]=Y[0]*Math.sin(L)+Y[1]*Math.cos(L),te[2]=Y[2],$[0]=te[0]+T[0],$[1]=te[1]+T[1],$[2]=te[2]+T[2],$}function S(y,T,L){const C=L??new a(3);return se(y,C),ue(C,T,C)}function U(y,T,L){const C=L??new a(3);return Ne(y)>T?S(y,T,C):oe(y,C)}function H(y,T,L){const C=L??new a(3);return Z(y,T,.5,C)}return{create:i,fromValues:o,set:f,ceil:_,floor:w,round:x,clamp:z,add:b,addScaled:D,angle:N,subtract:I,sub:F,equalsApproximately:X,equals:Q,lerp:Z,lerpV:ee,max:W,min:J,mulScalar:ue,scale:fe,divScalar:Le,inverse:Ce,invert:ke,cross:We,dot:Fe,length:Ne,len:Qe,lengthSq:xe,lenSq:ze,distance:Se,dist:Xe,distanceSq:qe,distSq:Ve,normalize:se,negate:ye,copy:oe,clone:O,multiply:ne,mul:Me,divide:Te,div:Re,random:Pe,zero:p,transformMat4:M,transformMat4Upper3x3:d,transformMat3:m,transformQuat:E,getTranslation:P,getAxis:V,getScaling:l,rotateX:v,rotateY:c,rotateZ:h,setLength:S,truncate:U,midpoint:H}}const rd=new Map;function Ka(a){let i=rd.get(a);return i||(i=hm(a),rd.set(a,i)),i}function mm(a){const i=Cd(a),o=Ka(a);function f(p,M,d,m,E,P,V,l,v){const c=new a(12);return c[3]=0,c[7]=0,c[11]=0,p!==void 0&&(c[0]=p,M!==void 0&&(c[1]=M,d!==void 0&&(c[2]=d,m!==void 0&&(c[4]=m,E!==void 0&&(c[5]=E,P!==void 0&&(c[6]=P,V!==void 0&&(c[8]=V,l!==void 0&&(c[9]=l,v!==void 0&&(c[10]=v))))))))),c}function _(p,M,d,m,E,P,V,l,v,c){const h=c??new a(12);return h[0]=p,h[1]=M,h[2]=d,h[3]=0,h[4]=m,h[5]=E,h[6]=P,h[7]=0,h[8]=V,h[9]=l,h[10]=v,h[11]=0,h}function w(p,M){const d=M??new a(12);return d[0]=p[0],d[1]=p[1],d[2]=p[2],d[3]=0,d[4]=p[4],d[5]=p[5],d[6]=p[6],d[7]=0,d[8]=p[8],d[9]=p[9],d[10]=p[10],d[11]=0,d}function x(p,M){const d=M??new a(12),m=p[0],E=p[1],P=p[2],V=p[3],l=m+m,v=E+E,c=P+P,h=m*l,S=E*l,U=E*v,H=P*l,y=P*v,T=P*c,L=V*l,C=V*v,$=V*c;return d[0]=1-U-T,d[1]=S+$,d[2]=H-C,d[3]=0,d[4]=S-$,d[5]=1-h-T,d[6]=y+L,d[7]=0,d[8]=H+C,d[9]=y-L,d[10]=1-h-U,d[11]=0,d}function z(p,M){const d=M??new a(12);return d[0]=-p[0],d[1]=-p[1],d[2]=-p[2],d[4]=-p[4],d[5]=-p[5],d[6]=-p[6],d[8]=-p[8],d[9]=-p[9],d[10]=-p[10],d}function b(p,M){const d=M??new a(12);return d[0]=p[0],d[1]=p[1],d[2]=p[2],d[4]=p[4],d[5]=p[5],d[6]=p[6],d[8]=p[8],d[9]=p[9],d[10]=p[10],d}const D=b;function N(p,M){return Math.abs(p[0]-M[0])<Oe&&Math.abs(p[1]-M[1])<Oe&&Math.abs(p[2]-M[2])<Oe&&Math.abs(p[4]-M[4])<Oe&&Math.abs(p[5]-M[5])<Oe&&Math.abs(p[6]-M[6])<Oe&&Math.abs(p[8]-M[8])<Oe&&Math.abs(p[9]-M[9])<Oe&&Math.abs(p[10]-M[10])<Oe}function I(p,M){return p[0]===M[0]&&p[1]===M[1]&&p[2]===M[2]&&p[4]===M[4]&&p[5]===M[5]&&p[6]===M[6]&&p[8]===M[8]&&p[9]===M[9]&&p[10]===M[10]}function F(p){const M=p??new a(12);return M[0]=1,M[1]=0,M[2]=0,M[4]=0,M[5]=1,M[6]=0,M[8]=0,M[9]=0,M[10]=1,M}function X(p,M){const d=M??new a(12);if(d===p){let U;return U=p[1],p[1]=p[4],p[4]=U,U=p[2],p[2]=p[8],p[8]=U,U=p[6],p[6]=p[9],p[9]=U,d}const m=p[0*4+0],E=p[0*4+1],P=p[0*4+2],V=p[1*4+0],l=p[1*4+1],v=p[1*4+2],c=p[2*4+0],h=p[2*4+1],S=p[2*4+2];return d[0]=m,d[1]=V,d[2]=c,d[4]=E,d[5]=l,d[6]=h,d[8]=P,d[9]=v,d[10]=S,d}function Q(p,M){const d=M??new a(12),m=p[0*4+0],E=p[0*4+1],P=p[0*4+2],V=p[1*4+0],l=p[1*4+1],v=p[1*4+2],c=p[2*4+0],h=p[2*4+1],S=p[2*4+2],U=S*l-v*h,H=-S*V+v*c,y=h*V-l*c,T=1/(m*U+E*H+P*y);return d[0]=U*T,d[1]=(-S*E+P*h)*T,d[2]=(v*E-P*l)*T,d[4]=H*T,d[5]=(S*m-P*c)*T,d[6]=(-v*m+P*V)*T,d[8]=y*T,d[9]=(-h*m+E*c)*T,d[10]=(l*m-E*V)*T,d}function Z(p){const M=p[0],d=p[0*4+1],m=p[0*4+2],E=p[1*4+0],P=p[1*4+1],V=p[1*4+2],l=p[2*4+0],v=p[2*4+1],c=p[2*4+2];return M*(P*c-v*V)-E*(d*c-v*m)+l*(d*V-P*m)}const ee=Q;function W(p,M,d){const m=d??new a(12),E=p[0],P=p[1],V=p[2],l=p[4],v=p[5],c=p[6],h=p[8],S=p[9],U=p[10],H=M[0],y=M[1],T=M[2],L=M[4],C=M[5],$=M[6],Y=M[8],te=M[9],me=M[10];return m[0]=E*H+l*y+h*T,m[1]=P*H+v*y+S*T,m[2]=V*H+c*y+U*T,m[4]=E*L+l*C+h*$,m[5]=P*L+v*C+S*$,m[6]=V*L+c*C+U*$,m[8]=E*Y+l*te+h*me,m[9]=P*Y+v*te+S*me,m[10]=V*Y+c*te+U*me,m}const J=W;function ue(p,M,d){const m=d??F();return p!==m&&(m[0]=p[0],m[1]=p[1],m[2]=p[2],m[4]=p[4],m[5]=p[5],m[6]=p[6]),m[8]=M[0],m[9]=M[1],m[10]=1,m}function fe(p,M){const d=M??i.create();return d[0]=p[8],d[1]=p[9],d}function Le(p,M,d){const m=d??i.create(),E=M*4;return m[0]=p[E+0],m[1]=p[E+1],m}function Ce(p,M,d,m){const E=m===p?p:b(p,m),P=d*4;return E[P+0]=M[0],E[P+1]=M[1],E}function ke(p,M){const d=M??i.create(),m=p[0],E=p[1],P=p[4],V=p[5];return d[0]=Math.sqrt(m*m+E*E),d[1]=Math.sqrt(P*P+V*V),d}function We(p,M){const d=M??o.create(),m=p[0],E=p[1],P=p[2],V=p[4],l=p[5],v=p[6],c=p[8],h=p[9],S=p[10];return d[0]=Math.sqrt(m*m+E*E+P*P),d[1]=Math.sqrt(V*V+l*l+v*v),d[2]=Math.sqrt(c*c+h*h+S*S),d}function Fe(p,M){const d=M??new a(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=p[0],d[9]=p[1],d[10]=1,d}function Ne(p,M,d){const m=d??new a(12),E=M[0],P=M[1],V=p[0],l=p[1],v=p[2],c=p[1*4+0],h=p[1*4+1],S=p[1*4+2],U=p[2*4+0],H=p[2*4+1],y=p[2*4+2];return p!==m&&(m[0]=V,m[1]=l,m[2]=v,m[4]=c,m[5]=h,m[6]=S),m[8]=V*E+c*P+U,m[9]=l*E+h*P+H,m[10]=v*E+S*P+y,m}function Qe(p,M){const d=M??new a(12),m=Math.cos(p),E=Math.sin(p);return d[0]=m,d[1]=E,d[2]=0,d[4]=-E,d[5]=m,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function xe(p,M,d){const m=d??new a(12),E=p[0*4+0],P=p[0*4+1],V=p[0*4+2],l=p[1*4+0],v=p[1*4+1],c=p[1*4+2],h=Math.cos(M),S=Math.sin(M);return m[0]=h*E+S*l,m[1]=h*P+S*v,m[2]=h*V+S*c,m[4]=h*l-S*E,m[5]=h*v-S*P,m[6]=h*c-S*V,p!==m&&(m[8]=p[8],m[9]=p[9],m[10]=p[10]),m}function ze(p,M){const d=M??new a(12),m=Math.cos(p),E=Math.sin(p);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=m,d[6]=E,d[8]=0,d[9]=-E,d[10]=m,d}function Se(p,M,d){const m=d??new a(12),E=p[4],P=p[5],V=p[6],l=p[8],v=p[9],c=p[10],h=Math.cos(M),S=Math.sin(M);return m[4]=h*E+S*l,m[5]=h*P+S*v,m[6]=h*V+S*c,m[8]=h*l-S*E,m[9]=h*v-S*P,m[10]=h*c-S*V,p!==m&&(m[0]=p[0],m[1]=p[1],m[2]=p[2]),m}function Xe(p,M){const d=M??new a(12),m=Math.cos(p),E=Math.sin(p);return d[0]=m,d[1]=0,d[2]=-E,d[4]=0,d[5]=1,d[6]=0,d[8]=E,d[9]=0,d[10]=m,d}function qe(p,M,d){const m=d??new a(12),E=p[0*4+0],P=p[0*4+1],V=p[0*4+2],l=p[2*4+0],v=p[2*4+1],c=p[2*4+2],h=Math.cos(M),S=Math.sin(M);return m[0]=h*E-S*l,m[1]=h*P-S*v,m[2]=h*V-S*c,m[8]=h*l+S*E,m[9]=h*v+S*P,m[10]=h*c+S*V,p!==m&&(m[4]=p[4],m[5]=p[5],m[6]=p[6]),m}const Ve=Qe,se=xe;function ye(p,M){const d=M??new a(12);return d[0]=p[0],d[1]=0,d[2]=0,d[4]=0,d[5]=p[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function oe(p,M,d){const m=d??new a(12),E=M[0],P=M[1];return m[0]=E*p[0*4+0],m[1]=E*p[0*4+1],m[2]=E*p[0*4+2],m[4]=P*p[1*4+0],m[5]=P*p[1*4+1],m[6]=P*p[1*4+2],p!==m&&(m[8]=p[8],m[9]=p[9],m[10]=p[10]),m}function O(p,M){const d=M??new a(12);return d[0]=p[0],d[1]=0,d[2]=0,d[4]=0,d[5]=p[1],d[6]=0,d[8]=0,d[9]=0,d[10]=p[2],d}function ne(p,M,d){const m=d??new a(12),E=M[0],P=M[1],V=M[2];return m[0]=E*p[0*4+0],m[1]=E*p[0*4+1],m[2]=E*p[0*4+2],m[4]=P*p[1*4+0],m[5]=P*p[1*4+1],m[6]=P*p[1*4+2],m[8]=V*p[2*4+0],m[9]=V*p[2*4+1],m[10]=V*p[2*4+2],m}function Me(p,M){const d=M??new a(12);return d[0]=p,d[1]=0,d[2]=0,d[4]=0,d[5]=p,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Te(p,M,d){const m=d??new a(12);return m[0]=M*p[0*4+0],m[1]=M*p[0*4+1],m[2]=M*p[0*4+2],m[4]=M*p[1*4+0],m[5]=M*p[1*4+1],m[6]=M*p[1*4+2],p!==m&&(m[8]=p[8],m[9]=p[9],m[10]=p[10]),m}function Re(p,M){const d=M??new a(12);return d[0]=p,d[1]=0,d[2]=0,d[4]=0,d[5]=p,d[6]=0,d[8]=0,d[9]=0,d[10]=p,d}function Pe(p,M,d){const m=d??new a(12);return m[0]=M*p[0*4+0],m[1]=M*p[0*4+1],m[2]=M*p[0*4+2],m[4]=M*p[1*4+0],m[5]=M*p[1*4+1],m[6]=M*p[1*4+2],m[8]=M*p[2*4+0],m[9]=M*p[2*4+1],m[10]=M*p[2*4+2],m}return{clone:D,create:f,set:_,fromMat4:w,fromQuat:x,negate:z,copy:b,equalsApproximately:N,equals:I,identity:F,transpose:X,inverse:Q,invert:ee,determinant:Z,mul:J,multiply:W,setTranslation:ue,getTranslation:fe,getAxis:Le,setAxis:Ce,getScaling:ke,get3DScaling:We,translation:Fe,translate:Ne,rotation:Qe,rotate:xe,rotationX:ze,rotateX:Se,rotationY:Xe,rotateY:qe,rotationZ:Ve,rotateZ:se,scaling:ye,scale:oe,uniformScaling:Me,uniformScale:Te,scaling3D:O,scale3D:ne,uniformScaling3D:Re,uniformScale3D:Pe}}const id=new Map;function _m(a){let i=id.get(a);return i||(i=mm(a),id.set(a,i)),i}function gm(a){const i=Ka(a);function o(l,v,c,h,S,U,H,y,T,L,C,$,Y,te,me,De){const pe=new a(16);return l!==void 0&&(pe[0]=l,v!==void 0&&(pe[1]=v,c!==void 0&&(pe[2]=c,h!==void 0&&(pe[3]=h,S!==void 0&&(pe[4]=S,U!==void 0&&(pe[5]=U,H!==void 0&&(pe[6]=H,y!==void 0&&(pe[7]=y,T!==void 0&&(pe[8]=T,L!==void 0&&(pe[9]=L,C!==void 0&&(pe[10]=C,$!==void 0&&(pe[11]=$,Y!==void 0&&(pe[12]=Y,te!==void 0&&(pe[13]=te,me!==void 0&&(pe[14]=me,De!==void 0&&(pe[15]=De)))))))))))))))),pe}function f(l,v,c,h,S,U,H,y,T,L,C,$,Y,te,me,De,pe){const _e=pe??new a(16);return _e[0]=l,_e[1]=v,_e[2]=c,_e[3]=h,_e[4]=S,_e[5]=U,_e[6]=H,_e[7]=y,_e[8]=T,_e[9]=L,_e[10]=C,_e[11]=$,_e[12]=Y,_e[13]=te,_e[14]=me,_e[15]=De,_e}function _(l,v){const c=v??new a(16);return c[0]=l[0],c[1]=l[1],c[2]=l[2],c[3]=0,c[4]=l[4],c[5]=l[5],c[6]=l[6],c[7]=0,c[8]=l[8],c[9]=l[9],c[10]=l[10],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function w(l,v){const c=v??new a(16),h=l[0],S=l[1],U=l[2],H=l[3],y=h+h,T=S+S,L=U+U,C=h*y,$=S*y,Y=S*T,te=U*y,me=U*T,De=U*L,pe=H*y,_e=H*T,Ie=H*L;return c[0]=1-Y-De,c[1]=$+Ie,c[2]=te-_e,c[3]=0,c[4]=$-Ie,c[5]=1-C-De,c[6]=me+pe,c[7]=0,c[8]=te+_e,c[9]=me-pe,c[10]=1-C-Y,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function x(l,v){const c=v??new a(16);return c[0]=-l[0],c[1]=-l[1],c[2]=-l[2],c[3]=-l[3],c[4]=-l[4],c[5]=-l[5],c[6]=-l[6],c[7]=-l[7],c[8]=-l[8],c[9]=-l[9],c[10]=-l[10],c[11]=-l[11],c[12]=-l[12],c[13]=-l[13],c[14]=-l[14],c[15]=-l[15],c}function z(l,v){const c=v??new a(16);return c[0]=l[0],c[1]=l[1],c[2]=l[2],c[3]=l[3],c[4]=l[4],c[5]=l[5],c[6]=l[6],c[7]=l[7],c[8]=l[8],c[9]=l[9],c[10]=l[10],c[11]=l[11],c[12]=l[12],c[13]=l[13],c[14]=l[14],c[15]=l[15],c}const b=z;function D(l,v){return Math.abs(l[0]-v[0])<Oe&&Math.abs(l[1]-v[1])<Oe&&Math.abs(l[2]-v[2])<Oe&&Math.abs(l[3]-v[3])<Oe&&Math.abs(l[4]-v[4])<Oe&&Math.abs(l[5]-v[5])<Oe&&Math.abs(l[6]-v[6])<Oe&&Math.abs(l[7]-v[7])<Oe&&Math.abs(l[8]-v[8])<Oe&&Math.abs(l[9]-v[9])<Oe&&Math.abs(l[10]-v[10])<Oe&&Math.abs(l[11]-v[11])<Oe&&Math.abs(l[12]-v[12])<Oe&&Math.abs(l[13]-v[13])<Oe&&Math.abs(l[14]-v[14])<Oe&&Math.abs(l[15]-v[15])<Oe}function N(l,v){return l[0]===v[0]&&l[1]===v[1]&&l[2]===v[2]&&l[3]===v[3]&&l[4]===v[4]&&l[5]===v[5]&&l[6]===v[6]&&l[7]===v[7]&&l[8]===v[8]&&l[9]===v[9]&&l[10]===v[10]&&l[11]===v[11]&&l[12]===v[12]&&l[13]===v[13]&&l[14]===v[14]&&l[15]===v[15]}function I(l){const v=l??new a(16);return v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,v}function F(l,v){const c=v??new a(16);if(c===l){let Ge;return Ge=l[1],l[1]=l[4],l[4]=Ge,Ge=l[2],l[2]=l[8],l[8]=Ge,Ge=l[3],l[3]=l[12],l[12]=Ge,Ge=l[6],l[6]=l[9],l[9]=Ge,Ge=l[7],l[7]=l[13],l[13]=Ge,Ge=l[11],l[11]=l[14],l[14]=Ge,c}const h=l[0*4+0],S=l[0*4+1],U=l[0*4+2],H=l[0*4+3],y=l[1*4+0],T=l[1*4+1],L=l[1*4+2],C=l[1*4+3],$=l[2*4+0],Y=l[2*4+1],te=l[2*4+2],me=l[2*4+3],De=l[3*4+0],pe=l[3*4+1],_e=l[3*4+2],Ie=l[3*4+3];return c[0]=h,c[1]=y,c[2]=$,c[3]=De,c[4]=S,c[5]=T,c[6]=Y,c[7]=pe,c[8]=U,c[9]=L,c[10]=te,c[11]=_e,c[12]=H,c[13]=C,c[14]=me,c[15]=Ie,c}function X(l,v){const c=v??new a(16),h=l[0*4+0],S=l[0*4+1],U=l[0*4+2],H=l[0*4+3],y=l[1*4+0],T=l[1*4+1],L=l[1*4+2],C=l[1*4+3],$=l[2*4+0],Y=l[2*4+1],te=l[2*4+2],me=l[2*4+3],De=l[3*4+0],pe=l[3*4+1],_e=l[3*4+2],Ie=l[3*4+3],Ge=te*Ie,Ye=_e*me,ut=L*Ie,rt=_e*C,ct=L*me,pt=te*C,ht=U*Ie,mt=_e*H,it=U*me,at=te*H,yt=U*C,wt=L*H,xt=$*pe,St=De*Y,Pt=y*pe,Dt=De*T,Rt=y*Y,pn=$*T,kn=h*pe,hn=De*S,gr=h*Y,mn=$*S,bn=h*T,En=y*S,vr=Ge*T+rt*Y+ct*pe-(Ye*T+ut*Y+pt*pe),Pi=Ye*S+ht*Y+at*pe-(Ge*S+mt*Y+it*pe),Ri=ut*S+mt*T+yt*pe-(rt*S+ht*T+wt*pe),Li=pt*S+it*T+wt*Y-(ct*S+at*T+yt*Y),et=1/(h*vr+y*Pi+$*Ri+De*Li);return c[0]=et*vr,c[1]=et*Pi,c[2]=et*Ri,c[3]=et*Li,c[4]=et*(Ye*y+ut*$+pt*De-(Ge*y+rt*$+ct*De)),c[5]=et*(Ge*h+mt*$+it*De-(Ye*h+ht*$+at*De)),c[6]=et*(rt*h+ht*y+wt*De-(ut*h+mt*y+yt*De)),c[7]=et*(ct*h+at*y+yt*$-(pt*h+it*y+wt*$)),c[8]=et*(xt*C+Dt*me+Rt*Ie-(St*C+Pt*me+pn*Ie)),c[9]=et*(St*H+kn*me+mn*Ie-(xt*H+hn*me+gr*Ie)),c[10]=et*(Pt*H+hn*C+bn*Ie-(Dt*H+kn*C+En*Ie)),c[11]=et*(pn*H+gr*C+En*me-(Rt*H+mn*C+bn*me)),c[12]=et*(Pt*te+pn*_e+St*L-(Rt*_e+xt*L+Dt*te)),c[13]=et*(gr*_e+xt*U+hn*te-(kn*te+mn*_e+St*U)),c[14]=et*(kn*L+En*_e+Dt*U-(bn*_e+Pt*U+hn*L)),c[15]=et*(bn*te+Rt*U+mn*L-(gr*L+En*te+pn*U)),c}function Q(l){const v=l[0],c=l[0*4+1],h=l[0*4+2],S=l[0*4+3],U=l[1*4+0],H=l[1*4+1],y=l[1*4+2],T=l[1*4+3],L=l[2*4+0],C=l[2*4+1],$=l[2*4+2],Y=l[2*4+3],te=l[3*4+0],me=l[3*4+1],De=l[3*4+2],pe=l[3*4+3],_e=$*pe,Ie=De*Y,Ge=y*pe,Ye=De*T,ut=y*Y,rt=$*T,ct=h*pe,pt=De*S,ht=h*Y,mt=$*S,it=h*T,at=y*S,yt=_e*H+Ye*C+ut*me-(Ie*H+Ge*C+rt*me),wt=Ie*c+ct*C+mt*me-(_e*c+pt*C+ht*me),xt=Ge*c+pt*H+it*me-(Ye*c+ct*H+at*me),St=rt*c+ht*H+at*C-(ut*c+mt*H+it*C);return v*yt+U*wt+L*xt+te*St}const Z=X;function ee(l,v,c){const h=c??new a(16),S=l[0],U=l[1],H=l[2],y=l[3],T=l[4],L=l[5],C=l[6],$=l[7],Y=l[8],te=l[9],me=l[10],De=l[11],pe=l[12],_e=l[13],Ie=l[14],Ge=l[15],Ye=v[0],ut=v[1],rt=v[2],ct=v[3],pt=v[4],ht=v[5],mt=v[6],it=v[7],at=v[8],yt=v[9],wt=v[10],xt=v[11],St=v[12],Pt=v[13],Dt=v[14],Rt=v[15];return h[0]=S*Ye+T*ut+Y*rt+pe*ct,h[1]=U*Ye+L*ut+te*rt+_e*ct,h[2]=H*Ye+C*ut+me*rt+Ie*ct,h[3]=y*Ye+$*ut+De*rt+Ge*ct,h[4]=S*pt+T*ht+Y*mt+pe*it,h[5]=U*pt+L*ht+te*mt+_e*it,h[6]=H*pt+C*ht+me*mt+Ie*it,h[7]=y*pt+$*ht+De*mt+Ge*it,h[8]=S*at+T*yt+Y*wt+pe*xt,h[9]=U*at+L*yt+te*wt+_e*xt,h[10]=H*at+C*yt+me*wt+Ie*xt,h[11]=y*at+$*yt+De*wt+Ge*xt,h[12]=S*St+T*Pt+Y*Dt+pe*Rt,h[13]=U*St+L*Pt+te*Dt+_e*Rt,h[14]=H*St+C*Pt+me*Dt+Ie*Rt,h[15]=y*St+$*Pt+De*Dt+Ge*Rt,h}const W=ee;function J(l,v,c){const h=c??I();return l!==h&&(h[0]=l[0],h[1]=l[1],h[2]=l[2],h[3]=l[3],h[4]=l[4],h[5]=l[5],h[6]=l[6],h[7]=l[7],h[8]=l[8],h[9]=l[9],h[10]=l[10],h[11]=l[11]),h[12]=v[0],h[13]=v[1],h[14]=v[2],h[15]=1,h}function ue(l,v){const c=v??i.create();return c[0]=l[12],c[1]=l[13],c[2]=l[14],c}function fe(l,v,c){const h=c??i.create(),S=v*4;return h[0]=l[S+0],h[1]=l[S+1],h[2]=l[S+2],h}function Le(l,v,c,h){const S=h===l?h:z(l,h),U=c*4;return S[U+0]=v[0],S[U+1]=v[1],S[U+2]=v[2],S}function Ce(l,v){const c=v??i.create(),h=l[0],S=l[1],U=l[2],H=l[4],y=l[5],T=l[6],L=l[8],C=l[9],$=l[10];return c[0]=Math.sqrt(h*h+S*S+U*U),c[1]=Math.sqrt(H*H+y*y+T*T),c[2]=Math.sqrt(L*L+C*C+$*$),c}function ke(l,v,c,h,S){const U=S??new a(16),H=Math.tan(Math.PI*.5-.5*l);if(U[0]=H/v,U[1]=0,U[2]=0,U[3]=0,U[4]=0,U[5]=H,U[6]=0,U[7]=0,U[8]=0,U[9]=0,U[11]=-1,U[12]=0,U[13]=0,U[15]=0,Number.isFinite(h)){const y=1/(c-h);U[10]=h*y,U[14]=h*c*y}else U[10]=-1,U[14]=-c;return U}function We(l,v,c,h=1/0,S){const U=S??new a(16),H=1/Math.tan(l*.5);if(U[0]=H/v,U[1]=0,U[2]=0,U[3]=0,U[4]=0,U[5]=H,U[6]=0,U[7]=0,U[8]=0,U[9]=0,U[11]=-1,U[12]=0,U[13]=0,U[15]=0,h===1/0)U[10]=0,U[14]=c;else{const y=1/(h-c);U[10]=c*y,U[14]=h*c*y}return U}function Fe(l,v,c,h,S,U,H){const y=H??new a(16);return y[0]=2/(v-l),y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2/(h-c),y[6]=0,y[7]=0,y[8]=0,y[9]=0,y[10]=1/(S-U),y[11]=0,y[12]=(v+l)/(l-v),y[13]=(h+c)/(c-h),y[14]=S/(S-U),y[15]=1,y}function Ne(l,v,c,h,S,U,H){const y=H??new a(16),T=v-l,L=h-c,C=S-U;return y[0]=2*S/T,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*S/L,y[6]=0,y[7]=0,y[8]=(l+v)/T,y[9]=(h+c)/L,y[10]=U/C,y[11]=-1,y[12]=0,y[13]=0,y[14]=S*U/C,y[15]=0,y}function Qe(l,v,c,h,S,U=1/0,H){const y=H??new a(16),T=v-l,L=h-c;if(y[0]=2*S/T,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*S/L,y[6]=0,y[7]=0,y[8]=(l+v)/T,y[9]=(h+c)/L,y[11]=-1,y[12]=0,y[13]=0,y[15]=0,U===1/0)y[10]=0,y[14]=S;else{const C=1/(U-S);y[10]=S*C,y[14]=U*S*C}return y}const xe=i.create(),ze=i.create(),Se=i.create();function Xe(l,v,c,h){const S=h??new a(16);return i.normalize(i.subtract(v,l,Se),Se),i.normalize(i.cross(c,Se,xe),xe),i.normalize(i.cross(Se,xe,ze),ze),S[0]=xe[0],S[1]=xe[1],S[2]=xe[2],S[3]=0,S[4]=ze[0],S[5]=ze[1],S[6]=ze[2],S[7]=0,S[8]=Se[0],S[9]=Se[1],S[10]=Se[2],S[11]=0,S[12]=l[0],S[13]=l[1],S[14]=l[2],S[15]=1,S}function qe(l,v,c,h){const S=h??new a(16);return i.normalize(i.subtract(l,v,Se),Se),i.normalize(i.cross(c,Se,xe),xe),i.normalize(i.cross(Se,xe,ze),ze),S[0]=xe[0],S[1]=xe[1],S[2]=xe[2],S[3]=0,S[4]=ze[0],S[5]=ze[1],S[6]=ze[2],S[7]=0,S[8]=Se[0],S[9]=Se[1],S[10]=Se[2],S[11]=0,S[12]=l[0],S[13]=l[1],S[14]=l[2],S[15]=1,S}function Ve(l,v,c,h){const S=h??new a(16);return i.normalize(i.subtract(l,v,Se),Se),i.normalize(i.cross(c,Se,xe),xe),i.normalize(i.cross(Se,xe,ze),ze),S[0]=xe[0],S[1]=ze[0],S[2]=Se[0],S[3]=0,S[4]=xe[1],S[5]=ze[1],S[6]=Se[1],S[7]=0,S[8]=xe[2],S[9]=ze[2],S[10]=Se[2],S[11]=0,S[12]=-(xe[0]*l[0]+xe[1]*l[1]+xe[2]*l[2]),S[13]=-(ze[0]*l[0]+ze[1]*l[1]+ze[2]*l[2]),S[14]=-(Se[0]*l[0]+Se[1]*l[1]+Se[2]*l[2]),S[15]=1,S}function se(l,v){const c=v??new a(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=l[0],c[13]=l[1],c[14]=l[2],c[15]=1,c}function ye(l,v,c){const h=c??new a(16),S=v[0],U=v[1],H=v[2],y=l[0],T=l[1],L=l[2],C=l[3],$=l[1*4+0],Y=l[1*4+1],te=l[1*4+2],me=l[1*4+3],De=l[2*4+0],pe=l[2*4+1],_e=l[2*4+2],Ie=l[2*4+3],Ge=l[3*4+0],Ye=l[3*4+1],ut=l[3*4+2],rt=l[3*4+3];return l!==h&&(h[0]=y,h[1]=T,h[2]=L,h[3]=C,h[4]=$,h[5]=Y,h[6]=te,h[7]=me,h[8]=De,h[9]=pe,h[10]=_e,h[11]=Ie),h[12]=y*S+$*U+De*H+Ge,h[13]=T*S+Y*U+pe*H+Ye,h[14]=L*S+te*U+_e*H+ut,h[15]=C*S+me*U+Ie*H+rt,h}function oe(l,v){const c=v??new a(16),h=Math.cos(l),S=Math.sin(l);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=h,c[6]=S,c[7]=0,c[8]=0,c[9]=-S,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function O(l,v,c){const h=c??new a(16),S=l[4],U=l[5],H=l[6],y=l[7],T=l[8],L=l[9],C=l[10],$=l[11],Y=Math.cos(v),te=Math.sin(v);return h[4]=Y*S+te*T,h[5]=Y*U+te*L,h[6]=Y*H+te*C,h[7]=Y*y+te*$,h[8]=Y*T-te*S,h[9]=Y*L-te*U,h[10]=Y*C-te*H,h[11]=Y*$-te*y,l!==h&&(h[0]=l[0],h[1]=l[1],h[2]=l[2],h[3]=l[3],h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}function ne(l,v){const c=v??new a(16),h=Math.cos(l),S=Math.sin(l);return c[0]=h,c[1]=0,c[2]=-S,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=S,c[9]=0,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Me(l,v,c){const h=c??new a(16),S=l[0*4+0],U=l[0*4+1],H=l[0*4+2],y=l[0*4+3],T=l[2*4+0],L=l[2*4+1],C=l[2*4+2],$=l[2*4+3],Y=Math.cos(v),te=Math.sin(v);return h[0]=Y*S-te*T,h[1]=Y*U-te*L,h[2]=Y*H-te*C,h[3]=Y*y-te*$,h[8]=Y*T+te*S,h[9]=Y*L+te*U,h[10]=Y*C+te*H,h[11]=Y*$+te*y,l!==h&&(h[4]=l[4],h[5]=l[5],h[6]=l[6],h[7]=l[7],h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}function Te(l,v){const c=v??new a(16),h=Math.cos(l),S=Math.sin(l);return c[0]=h,c[1]=S,c[2]=0,c[3]=0,c[4]=-S,c[5]=h,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Re(l,v,c){const h=c??new a(16),S=l[0*4+0],U=l[0*4+1],H=l[0*4+2],y=l[0*4+3],T=l[1*4+0],L=l[1*4+1],C=l[1*4+2],$=l[1*4+3],Y=Math.cos(v),te=Math.sin(v);return h[0]=Y*S+te*T,h[1]=Y*U+te*L,h[2]=Y*H+te*C,h[3]=Y*y+te*$,h[4]=Y*T-te*S,h[5]=Y*L-te*U,h[6]=Y*C-te*H,h[7]=Y*$-te*y,l!==h&&(h[8]=l[8],h[9]=l[9],h[10]=l[10],h[11]=l[11],h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}function Pe(l,v,c){const h=c??new a(16);let S=l[0],U=l[1],H=l[2];const y=Math.sqrt(S*S+U*U+H*H);S/=y,U/=y,H/=y;const T=S*S,L=U*U,C=H*H,$=Math.cos(v),Y=Math.sin(v),te=1-$;return h[0]=T+(1-T)*$,h[1]=S*U*te+H*Y,h[2]=S*H*te-U*Y,h[3]=0,h[4]=S*U*te-H*Y,h[5]=L+(1-L)*$,h[6]=U*H*te+S*Y,h[7]=0,h[8]=S*H*te+U*Y,h[9]=U*H*te-S*Y,h[10]=C+(1-C)*$,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const p=Pe;function M(l,v,c,h){const S=h??new a(16);let U=v[0],H=v[1],y=v[2];const T=Math.sqrt(U*U+H*H+y*y);U/=T,H/=T,y/=T;const L=U*U,C=H*H,$=y*y,Y=Math.cos(c),te=Math.sin(c),me=1-Y,De=L+(1-L)*Y,pe=U*H*me+y*te,_e=U*y*me-H*te,Ie=U*H*me-y*te,Ge=C+(1-C)*Y,Ye=H*y*me+U*te,ut=U*y*me+H*te,rt=H*y*me-U*te,ct=$+(1-$)*Y,pt=l[0],ht=l[1],mt=l[2],it=l[3],at=l[4],yt=l[5],wt=l[6],xt=l[7],St=l[8],Pt=l[9],Dt=l[10],Rt=l[11];return S[0]=De*pt+pe*at+_e*St,S[1]=De*ht+pe*yt+_e*Pt,S[2]=De*mt+pe*wt+_e*Dt,S[3]=De*it+pe*xt+_e*Rt,S[4]=Ie*pt+Ge*at+Ye*St,S[5]=Ie*ht+Ge*yt+Ye*Pt,S[6]=Ie*mt+Ge*wt+Ye*Dt,S[7]=Ie*it+Ge*xt+Ye*Rt,S[8]=ut*pt+rt*at+ct*St,S[9]=ut*ht+rt*yt+ct*Pt,S[10]=ut*mt+rt*wt+ct*Dt,S[11]=ut*it+rt*xt+ct*Rt,l!==S&&(S[12]=l[12],S[13]=l[13],S[14]=l[14],S[15]=l[15]),S}const d=M;function m(l,v){const c=v??new a(16);return c[0]=l[0],c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=l[1],c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=l[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function E(l,v,c){const h=c??new a(16),S=v[0],U=v[1],H=v[2];return h[0]=S*l[0*4+0],h[1]=S*l[0*4+1],h[2]=S*l[0*4+2],h[3]=S*l[0*4+3],h[4]=U*l[1*4+0],h[5]=U*l[1*4+1],h[6]=U*l[1*4+2],h[7]=U*l[1*4+3],h[8]=H*l[2*4+0],h[9]=H*l[2*4+1],h[10]=H*l[2*4+2],h[11]=H*l[2*4+3],l!==h&&(h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}function P(l,v){const c=v??new a(16);return c[0]=l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=l,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=l,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function V(l,v,c){const h=c??new a(16);return h[0]=v*l[0*4+0],h[1]=v*l[0*4+1],h[2]=v*l[0*4+2],h[3]=v*l[0*4+3],h[4]=v*l[1*4+0],h[5]=v*l[1*4+1],h[6]=v*l[1*4+2],h[7]=v*l[1*4+3],h[8]=v*l[2*4+0],h[9]=v*l[2*4+1],h[10]=v*l[2*4+2],h[11]=v*l[2*4+3],l!==h&&(h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}return{create:o,set:f,fromMat3:_,fromQuat:w,negate:x,copy:z,clone:b,equalsApproximately:D,equals:N,identity:I,transpose:F,inverse:X,determinant:Q,invert:Z,multiply:ee,mul:W,setTranslation:J,getTranslation:ue,getAxis:fe,setAxis:Le,getScaling:Ce,perspective:ke,perspectiveReverseZ:We,ortho:Fe,frustum:Ne,frustumReverseZ:Qe,aim:Xe,cameraAim:qe,lookAt:Ve,translation:se,translate:ye,rotationX:oe,rotateX:O,rotationY:ne,rotateY:Me,rotationZ:Te,rotateZ:Re,axisRotation:Pe,rotation:p,axisRotate:M,rotate:d,scaling:m,scale:E,uniformScaling:P,uniformScale:V}}const ad=new Map;function vm(a){let i=ad.get(a);return i||(i=gm(a),ad.set(a,i)),i}function ym(a){const i=Ka(a);function o(p,M,d,m){const E=new a(4);return p!==void 0&&(E[0]=p,M!==void 0&&(E[1]=M,d!==void 0&&(E[2]=d,m!==void 0&&(E[3]=m)))),E}const f=o;function _(p,M,d,m,E){const P=E??new a(4);return P[0]=p,P[1]=M,P[2]=d,P[3]=m,P}function w(p,M,d){const m=d??new a(4),E=M*.5,P=Math.sin(E);return m[0]=P*p[0],m[1]=P*p[1],m[2]=P*p[2],m[3]=Math.cos(E),m}function x(p,M){const d=M??i.create(3),m=Math.acos(p[3])*2,E=Math.sin(m*.5);return E>Oe?(d[0]=p[0]/E,d[1]=p[1]/E,d[2]=p[2]/E):(d[0]=1,d[1]=0,d[2]=0),{angle:m,axis:d}}function z(p,M){const d=Ne(p,M);return Math.acos(2*d*d-1)}function b(p,M,d){const m=d??new a(4),E=p[0],P=p[1],V=p[2],l=p[3],v=M[0],c=M[1],h=M[2],S=M[3];return m[0]=E*S+l*v+P*h-V*c,m[1]=P*S+l*c+V*v-E*h,m[2]=V*S+l*h+E*c-P*v,m[3]=l*S-E*v-P*c-V*h,m}const D=b;function N(p,M,d){const m=d??new a(4),E=M*.5,P=p[0],V=p[1],l=p[2],v=p[3],c=Math.sin(E),h=Math.cos(E);return m[0]=P*h+v*c,m[1]=V*h+l*c,m[2]=l*h-V*c,m[3]=v*h-P*c,m}function I(p,M,d){const m=d??new a(4),E=M*.5,P=p[0],V=p[1],l=p[2],v=p[3],c=Math.sin(E),h=Math.cos(E);return m[0]=P*h-l*c,m[1]=V*h+v*c,m[2]=l*h+P*c,m[3]=v*h-V*c,m}function F(p,M,d){const m=d??new a(4),E=M*.5,P=p[0],V=p[1],l=p[2],v=p[3],c=Math.sin(E),h=Math.cos(E);return m[0]=P*h+V*c,m[1]=V*h-P*c,m[2]=l*h+v*c,m[3]=v*h-l*c,m}function X(p,M,d,m){const E=m??new a(4),P=p[0],V=p[1],l=p[2],v=p[3];let c=M[0],h=M[1],S=M[2],U=M[3],H=P*c+V*h+l*S+v*U;H<0&&(H=-H,c=-c,h=-h,S=-S,U=-U);let y,T;if(1-H>Oe){const L=Math.acos(H),C=Math.sin(L);y=Math.sin((1-d)*L)/C,T=Math.sin(d*L)/C}else y=1-d,T=d;return E[0]=y*P+T*c,E[1]=y*V+T*h,E[2]=y*l+T*S,E[3]=y*v+T*U,E}function Q(p,M){const d=M??new a(4),m=p[0],E=p[1],P=p[2],V=p[3],l=m*m+E*E+P*P+V*V,v=l?1/l:0;return d[0]=-m*v,d[1]=-E*v,d[2]=-P*v,d[3]=V*v,d}function Z(p,M){const d=M??new a(4);return d[0]=-p[0],d[1]=-p[1],d[2]=-p[2],d[3]=p[3],d}function ee(p,M){const d=M??new a(4),m=p[0]+p[5]+p[10];if(m>0){const E=Math.sqrt(m+1);d[3]=.5*E;const P=.5/E;d[0]=(p[6]-p[9])*P,d[1]=(p[8]-p[2])*P,d[2]=(p[1]-p[4])*P}else{let E=0;p[5]>p[0]&&(E=1),p[10]>p[E*4+E]&&(E=2);const P=(E+1)%3,V=(E+2)%3,l=Math.sqrt(p[E*4+E]-p[P*4+P]-p[V*4+V]+1);d[E]=.5*l;const v=.5/l;d[3]=(p[P*4+V]-p[V*4+P])*v,d[P]=(p[P*4+E]+p[E*4+P])*v,d[V]=(p[V*4+E]+p[E*4+V])*v}return d}function W(p,M,d,m,E){const P=E??new a(4),V=p*.5,l=M*.5,v=d*.5,c=Math.sin(V),h=Math.cos(V),S=Math.sin(l),U=Math.cos(l),H=Math.sin(v),y=Math.cos(v);switch(m){case"xyz":P[0]=c*U*y+h*S*H,P[1]=h*S*y-c*U*H,P[2]=h*U*H+c*S*y,P[3]=h*U*y-c*S*H;break;case"xzy":P[0]=c*U*y-h*S*H,P[1]=h*S*y-c*U*H,P[2]=h*U*H+c*S*y,P[3]=h*U*y+c*S*H;break;case"yxz":P[0]=c*U*y+h*S*H,P[1]=h*S*y-c*U*H,P[2]=h*U*H-c*S*y,P[3]=h*U*y+c*S*H;break;case"yzx":P[0]=c*U*y+h*S*H,P[1]=h*S*y+c*U*H,P[2]=h*U*H-c*S*y,P[3]=h*U*y-c*S*H;break;case"zxy":P[0]=c*U*y-h*S*H,P[1]=h*S*y+c*U*H,P[2]=h*U*H+c*S*y,P[3]=h*U*y-c*S*H;break;case"zyx":P[0]=c*U*y-h*S*H,P[1]=h*S*y+c*U*H,P[2]=h*U*H-c*S*y,P[3]=h*U*y+c*S*H;break;default:throw new Error(`Unknown rotation order: ${m}`)}return P}function J(p,M){const d=M??new a(4);return d[0]=p[0],d[1]=p[1],d[2]=p[2],d[3]=p[3],d}const ue=J;function fe(p,M,d){const m=d??new a(4);return m[0]=p[0]+M[0],m[1]=p[1]+M[1],m[2]=p[2]+M[2],m[3]=p[3]+M[3],m}function Le(p,M,d){const m=d??new a(4);return m[0]=p[0]-M[0],m[1]=p[1]-M[1],m[2]=p[2]-M[2],m[3]=p[3]-M[3],m}const Ce=Le;function ke(p,M,d){const m=d??new a(4);return m[0]=p[0]*M,m[1]=p[1]*M,m[2]=p[2]*M,m[3]=p[3]*M,m}const We=ke;function Fe(p,M,d){const m=d??new a(4);return m[0]=p[0]/M,m[1]=p[1]/M,m[2]=p[2]/M,m[3]=p[3]/M,m}function Ne(p,M){return p[0]*M[0]+p[1]*M[1]+p[2]*M[2]+p[3]*M[3]}function Qe(p,M,d,m){const E=m??new a(4);return E[0]=p[0]+d*(M[0]-p[0]),E[1]=p[1]+d*(M[1]-p[1]),E[2]=p[2]+d*(M[2]-p[2]),E[3]=p[3]+d*(M[3]-p[3]),E}function xe(p){const M=p[0],d=p[1],m=p[2],E=p[3];return Math.sqrt(M*M+d*d+m*m+E*E)}const ze=xe;function Se(p){const M=p[0],d=p[1],m=p[2],E=p[3];return M*M+d*d+m*m+E*E}const Xe=Se;function qe(p,M){const d=M??new a(4),m=p[0],E=p[1],P=p[2],V=p[3],l=Math.sqrt(m*m+E*E+P*P+V*V);return l>1e-5?(d[0]=m/l,d[1]=E/l,d[2]=P/l,d[3]=V/l):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function Ve(p,M){return Math.abs(p[0]-M[0])<Oe&&Math.abs(p[1]-M[1])<Oe&&Math.abs(p[2]-M[2])<Oe&&Math.abs(p[3]-M[3])<Oe}function se(p,M){return p[0]===M[0]&&p[1]===M[1]&&p[2]===M[2]&&p[3]===M[3]}function ye(p){const M=p??new a(4);return M[0]=0,M[1]=0,M[2]=0,M[3]=1,M}const oe=i.create(),O=i.create(),ne=i.create();function Me(p,M,d){const m=d??new a(4),E=i.dot(p,M);return E<-.999999?(i.cross(O,p,oe),i.len(oe)<1e-6&&i.cross(ne,p,oe),i.normalize(oe,oe),w(oe,Math.PI,m),m):E>.999999?(m[0]=0,m[1]=0,m[2]=0,m[3]=1,m):(i.cross(p,M,oe),m[0]=oe[0],m[1]=oe[1],m[2]=oe[2],m[3]=1+E,qe(m,m))}const Te=new a(4),Re=new a(4);function Pe(p,M,d,m,E,P){const V=P??new a(4);return X(p,m,E,Te),X(M,d,E,Re),X(Te,Re,2*E*(1-E),V),V}return{create:o,fromValues:f,set:_,fromAxisAngle:w,toAxisAngle:x,angle:z,multiply:b,mul:D,rotateX:N,rotateY:I,rotateZ:F,slerp:X,inverse:Q,conjugate:Z,fromMat:ee,fromEuler:W,copy:J,clone:ue,add:fe,subtract:Le,sub:Ce,mulScalar:ke,scale:We,divScalar:Fe,dot:Ne,lerp:Qe,length:xe,len:ze,lengthSq:Se,lenSq:Xe,normalize:qe,equalsApproximately:Ve,equals:se,identity:ye,rotationTo:Me,sqlerp:Pe}}const sd=new Map;function wm(a){let i=sd.get(a);return i||(i=ym(a),sd.set(a,i)),i}function xm(a){function i(d,m,E,P){const V=new a(4);return d!==void 0&&(V[0]=d,m!==void 0&&(V[1]=m,E!==void 0&&(V[2]=E,P!==void 0&&(V[3]=P)))),V}const o=i;function f(d,m,E,P,V){const l=V??new a(4);return l[0]=d,l[1]=m,l[2]=E,l[3]=P,l}function _(d,m){const E=m??new a(4);return E[0]=Math.ceil(d[0]),E[1]=Math.ceil(d[1]),E[2]=Math.ceil(d[2]),E[3]=Math.ceil(d[3]),E}function w(d,m){const E=m??new a(4);return E[0]=Math.floor(d[0]),E[1]=Math.floor(d[1]),E[2]=Math.floor(d[2]),E[3]=Math.floor(d[3]),E}function x(d,m){const E=m??new a(4);return E[0]=Math.round(d[0]),E[1]=Math.round(d[1]),E[2]=Math.round(d[2]),E[3]=Math.round(d[3]),E}function z(d,m=0,E=1,P){const V=P??new a(4);return V[0]=Math.min(E,Math.max(m,d[0])),V[1]=Math.min(E,Math.max(m,d[1])),V[2]=Math.min(E,Math.max(m,d[2])),V[3]=Math.min(E,Math.max(m,d[3])),V}function b(d,m,E){const P=E??new a(4);return P[0]=d[0]+m[0],P[1]=d[1]+m[1],P[2]=d[2]+m[2],P[3]=d[3]+m[3],P}function D(d,m,E,P){const V=P??new a(4);return V[0]=d[0]+m[0]*E,V[1]=d[1]+m[1]*E,V[2]=d[2]+m[2]*E,V[3]=d[3]+m[3]*E,V}function N(d,m,E){const P=E??new a(4);return P[0]=d[0]-m[0],P[1]=d[1]-m[1],P[2]=d[2]-m[2],P[3]=d[3]-m[3],P}const I=N;function F(d,m){return Math.abs(d[0]-m[0])<Oe&&Math.abs(d[1]-m[1])<Oe&&Math.abs(d[2]-m[2])<Oe&&Math.abs(d[3]-m[3])<Oe}function X(d,m){return d[0]===m[0]&&d[1]===m[1]&&d[2]===m[2]&&d[3]===m[3]}function Q(d,m,E,P){const V=P??new a(4);return V[0]=d[0]+E*(m[0]-d[0]),V[1]=d[1]+E*(m[1]-d[1]),V[2]=d[2]+E*(m[2]-d[2]),V[3]=d[3]+E*(m[3]-d[3]),V}function Z(d,m,E,P){const V=P??new a(4);return V[0]=d[0]+E[0]*(m[0]-d[0]),V[1]=d[1]+E[1]*(m[1]-d[1]),V[2]=d[2]+E[2]*(m[2]-d[2]),V[3]=d[3]+E[3]*(m[3]-d[3]),V}function ee(d,m,E){const P=E??new a(4);return P[0]=Math.max(d[0],m[0]),P[1]=Math.max(d[1],m[1]),P[2]=Math.max(d[2],m[2]),P[3]=Math.max(d[3],m[3]),P}function W(d,m,E){const P=E??new a(4);return P[0]=Math.min(d[0],m[0]),P[1]=Math.min(d[1],m[1]),P[2]=Math.min(d[2],m[2]),P[3]=Math.min(d[3],m[3]),P}function J(d,m,E){const P=E??new a(4);return P[0]=d[0]*m,P[1]=d[1]*m,P[2]=d[2]*m,P[3]=d[3]*m,P}const ue=J;function fe(d,m,E){const P=E??new a(4);return P[0]=d[0]/m,P[1]=d[1]/m,P[2]=d[2]/m,P[3]=d[3]/m,P}function Le(d,m){const E=m??new a(4);return E[0]=1/d[0],E[1]=1/d[1],E[2]=1/d[2],E[3]=1/d[3],E}const Ce=Le;function ke(d,m){return d[0]*m[0]+d[1]*m[1]+d[2]*m[2]+d[3]*m[3]}function We(d){const m=d[0],E=d[1],P=d[2],V=d[3];return Math.sqrt(m*m+E*E+P*P+V*V)}const Fe=We;function Ne(d){const m=d[0],E=d[1],P=d[2],V=d[3];return m*m+E*E+P*P+V*V}const Qe=Ne;function xe(d,m){const E=d[0]-m[0],P=d[1]-m[1],V=d[2]-m[2],l=d[3]-m[3];return Math.sqrt(E*E+P*P+V*V+l*l)}const ze=xe;function Se(d,m){const E=d[0]-m[0],P=d[1]-m[1],V=d[2]-m[2],l=d[3]-m[3];return E*E+P*P+V*V+l*l}const Xe=Se;function qe(d,m){const E=m??new a(4),P=d[0],V=d[1],l=d[2],v=d[3],c=Math.sqrt(P*P+V*V+l*l+v*v);return c>1e-5?(E[0]=P/c,E[1]=V/c,E[2]=l/c,E[3]=v/c):(E[0]=0,E[1]=0,E[2]=0,E[3]=0),E}function Ve(d,m){const E=m??new a(4);return E[0]=-d[0],E[1]=-d[1],E[2]=-d[2],E[3]=-d[3],E}function se(d,m){const E=m??new a(4);return E[0]=d[0],E[1]=d[1],E[2]=d[2],E[3]=d[3],E}const ye=se;function oe(d,m,E){const P=E??new a(4);return P[0]=d[0]*m[0],P[1]=d[1]*m[1],P[2]=d[2]*m[2],P[3]=d[3]*m[3],P}const O=oe;function ne(d,m,E){const P=E??new a(4);return P[0]=d[0]/m[0],P[1]=d[1]/m[1],P[2]=d[2]/m[2],P[3]=d[3]/m[3],P}const Me=ne;function Te(d){const m=d??new a(4);return m[0]=0,m[1]=0,m[2]=0,m[3]=0,m}function Re(d,m,E){const P=E??new a(4),V=d[0],l=d[1],v=d[2],c=d[3];return P[0]=m[0]*V+m[4]*l+m[8]*v+m[12]*c,P[1]=m[1]*V+m[5]*l+m[9]*v+m[13]*c,P[2]=m[2]*V+m[6]*l+m[10]*v+m[14]*c,P[3]=m[3]*V+m[7]*l+m[11]*v+m[15]*c,P}function Pe(d,m,E){const P=E??new a(4);return qe(d,P),J(P,m,P)}function p(d,m,E){const P=E??new a(4);return We(d)>m?Pe(d,m,P):se(d,P)}function M(d,m,E){const P=E??new a(4);return Q(d,m,.5,P)}return{create:i,fromValues:o,set:f,ceil:_,floor:w,round:x,clamp:z,add:b,addScaled:D,subtract:N,sub:I,equalsApproximately:F,equals:X,lerp:Q,lerpV:Z,max:ee,min:W,mulScalar:J,scale:ue,divScalar:fe,inverse:Le,invert:Ce,dot:ke,length:We,len:Fe,lengthSq:Ne,lenSq:Qe,distance:xe,dist:ze,distanceSq:Se,distSq:Xe,normalize:qe,negate:Ve,copy:se,clone:ye,multiply:oe,mul:O,divide:ne,div:Me,zero:Te,transformMat4:Re,setLength:Pe,truncate:p,midpoint:M}}const od=new Map;function Sm(a){let i=od.get(a);return i||(i=xm(a),od.set(a,i)),i}function ll(a,i,o,f,_,w){return{mat3:_m(a),mat4:vm(i),quat:wm(o),vec2:Cd(f),vec3:Ka(_),vec4:Sm(w)}}const{mat3:V_,mat4:Kt,quat:q_,vec2:Mt,vec3:Nt,vec4:mr}=ll(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);ll(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);ll(fm,Array,Array,Array,Array,Array);const Tm=new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]);class bm{constructor(i,o){q(this,"device");q(this,"presentFormat");q(this,"quit",!1);q(this,"pipeline");q(this,"vertexBuffer");q(this,"indexBuffer");q(this,"indexCount");q(this,"projViewModelBuffer");q(this,"projViewModelBindGroup");q(this,"supportedFeatures");this.device=i,this.presentFormat=o,this.supportedFeatures=i.features;const f=this.device.createShaderModule({code:cm}),_=new Float32Array([-1,-1,-1,1,0,0,0,1,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,-1,1,-1,1,0,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1]),w=new Uint32Array([0,1,2,0,2,3,1,5,6,1,6,2,2,6,7,2,7,3,4,7,6,4,6,5,0,3,7,0,7,4,0,4,5,0,5,1]);this.indexCount=w.length,this.vertexBuffer=this.device.createBuffer({size:_.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,_,0,_.length);const x=[{attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}],arrayStride:2*16,stepMode:"vertex"}];this.indexBuffer=this.device.createBuffer({size:w.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,w,0,w.length);const z=16*4;this.projViewModelBuffer=this.device.createBuffer({size:z,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const b=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.projViewModelBindGroup=this.device.createBindGroup({layout:b,entries:[{binding:0,resource:{buffer:this.projViewModelBuffer}}]});const D={vertex:{module:f,entryPoint:"vertex_main",buffers:x},fragment:{module:f,entryPoint:"fragment_main",targets:[{format:this.presentFormat}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},layout:this.device.createPipelineLayout({bindGroupLayouts:[b]})};this.pipeline=this.device.createRenderPipeline(D)}setupUI(i){Tm.forEach(o=>{const f=this.supportedFeatures.has(o);i.add({enabled:f},"enabled").name(o).disable(!0)})}draw(i,o,f){const _=i.createView(),w=60*Math.PI/180,b=Kt.perspective(w,o,.1,1e3),D=[3,5,10],N=[0,0,0],I=[0,1,0],F=Kt.lookAt(D,N,I),X=Kt.axisRotation([1,1,0],f/1e3),Q=Kt.mul(b,Kt.mul(F,X));this.device.queue.writeBuffer(this.projViewModelBuffer,0,Q,0,Q.length);const Z=this.device.createCommandEncoder(),ee={r:.5,g:.5,b:.5,a:0},W=Z.beginRenderPass({colorAttachments:[{clearValue:ee,loadOp:"clear",storeOp:"store",view:_}]});W.setPipeline(this.pipeline),W.setVertexBuffer(0,this.vertexBuffer),W.setIndexBuffer(this.indexBuffer,"uint32",0,this.indexBuffer.size),W.setBindGroup(0,this.projViewModelBindGroup),W.drawIndexed(this.indexCount,1,0,0,0),W.end(),this.device.queue.submit([Z.finish()])}}const Em=(a,i,o)=>new bm(a,i),kd=4;class Ai{constructor(i,o,f){q(this,"buffer");this.buffer=i.createBuffer({size:o*kd,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM,label:f})}writeToGPU(i){const o=this.packed();o.byteLength!=this.buffer.size&&console.warn(`GPUBuffer label: '${this.buffer.label}' uploaded with improper size. Expected: ${this.buffer.size} bytes, got ${o.byteLength} bytes.`),i.writeBuffer(this.buffer,0,o)}}function Mm(){return{rayleighMm:{scattering:Nt.create(5.802,13.558,33.1),absorption:Nt.create(0,0,0),densityScale:.008},mieMm:{scattering:Nt.create(3.996,3.996,3.996),absorption:Nt.create(4.4,4.4,4.4),densityScale:.0012},ozoneMm:{scattering:Nt.create(0,0,0),absorption:Nt.create(.65,1.881,.085)},planetRadiusMm:6.36,atmosphereRadiusMm:6.42,groundAlbedo:Nt.create(.3*1,.3*.75,.3*.4)}}function Dm(){return{color:Nt.create(1,1,1),strength:60,forward:Nt.create(0,-1,0),angularRadius:16/60*(3.141592653589793/180)}}const zm=16,Am=128,Pm=16,Rm=32,Lm=16,Um=256,Cm=16,km=16;function Im(a,i){return Math.ceil(i/a)*a}const Om=Math.max(zm,Pm,Lm,Cm),Fm=Im(Om,Am+Rm+Um+km);class Nm extends Ai{constructor(o){super(o,Fm/kd,"Global UBO");q(this,"data",{atmosphere:Mm(),light:Dm(),camera:{invProj:Kt.identity(),invView:Kt.identity(),projView:Kt.identity(),position:mr.create(0,0,0,1),forward:mr.create(0,0,-1,0)},time:{timeSeconds:0,deltaTimeSeconds:0}})}packed(){const o=new Float32Array(2).fill(0),f=new Float32Array(4).fill(0),_=new Float32Array(4*2).fill(0),w=this.data.atmosphere,x=w.rayleighMm,z=w.mieMm,b=new Float32Array([...x.scattering,x.densityScale,...x.absorption,w.planetRadiusMm,...z.scattering,z.densityScale,...z.absorption,w.atmosphereRadiusMm,...w.groundAlbedo,0,...w.ozoneMm.scattering,0,...w.ozoneMm.absorption,0,...f]),D=this.data.light,N=new Float32Array([...D.color,D.strength,...D.forward,D.angularRadius]),I=this.data.camera,F=new Float32Array([...I.invProj,...I.invView,...I.projView,...I.position,...I.forward,..._]),X=this.data.time,Q=new Float32Array([...o,X.timeSeconds,X.deltaTimeSeconds]);return new Float32Array([...F,...b,...N,...Q])}}var Ue=(a=>(a[a.SkyviewLUT=0]="SkyviewLUT",a[a.TransmittanceLUT=1]="TransmittanceLUT",a[a.MultiscatterLUT=2]="MultiscatterLUT",a[a.Scene=3]="Scene",a[a.GBufferColor=4]="GBufferColor",a[a.GBufferNormal=5]="GBufferNormal",a[a.FFTWaveSpectrumGaussianNoise=6]="FFTWaveSpectrumGaussianNoise",a[a.FFTWaveInitialAmplitude=7]="FFTWaveInitialAmplitude",a[a.FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude=8]="FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude",a[a.FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude=9]="FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude",a[a.FFTWaveTurbulenceJacobian=10]="FFTWaveTurbulenceJacobian",a[a.FFTWaveDx_Dy_Dz_Dxdz_Spatial=11]="FFTWaveDx_Dy_Dz_Dxdz_Spatial",a[a.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial=12]="FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial",a))(Ue||{});class It{constructor(i){q(this,"texture");q(this,"view");this.texture=i,this.view=i.createView({label:`Render Output View for '${i.label}'`,dimension:this.depthOrArrayLayerCount>1?"2d-array":"2d",arrayLayerCount:this.depthOrArrayLayerCount,baseArrayLayer:0})}get mipLevelCount(){return this.texture.mipLevelCount}get depthOrArrayLayerCount(){return this.texture.depthOrArrayLayers}}const ld="rgba16float",Gm="float",Bm="depth32float",ud="rgba16float",Wm="float";class cd{constructor(i,o,f){q(this,"colorWithSurfaceWorldDepthInAlpha");q(this,"colorWithSurfaceWorldDepthInAlphaView");q(this,"normalWithSurfaceFoamStrengthInAlpha");q(this,"normalWithSurfaceFoamStrengthInAlphaView");q(this,"depth");q(this,"depthView");q(this,"readGroupLayout");q(this,"readGroup");q(this,"writeGroupLayout");q(this,"writeGroup");this.colorWithSurfaceWorldDepthInAlpha=i.createTexture({size:o,dimension:"2d",format:ld,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer ColorWithSurfaceWorldDepthInAlpha"}),this.colorWithSurfaceWorldDepthInAlphaView=this.colorWithSurfaceWorldDepthInAlpha.createView({label:"GBuffer ColorWithSurfaceWorldDepthInAlpha"}),this.normalWithSurfaceFoamStrengthInAlpha=i.createTexture({size:o,dimension:"2d",format:ud,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Normal"}),this.normalWithSurfaceFoamStrengthInAlphaView=this.normalWithSurfaceFoamStrengthInAlpha.createView({label:"GBuffer Normal"}),this.readGroupLayout=(f==null?void 0:f.readGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Gm}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Wm}}],label:"GBuffer Read Group Layout"}),this.readGroup=i.createBindGroup({layout:this.readGroupLayout,entries:[{binding:0,resource:this.colorWithSurfaceWorldDepthInAlphaView},{binding:1,resource:this.normalWithSurfaceFoamStrengthInAlphaView}],label:"GBuffer Read Group"}),this.writeGroupLayout=(f==null?void 0:f.writeGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:ld}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:ud}}],label:"GBuffer Write Group Layout"}),this.writeGroup=i.createBindGroup({layout:this.writeGroupLayout,entries:[{binding:0,resource:this.colorWithSurfaceWorldDepthInAlphaView},{binding:1,resource:this.normalWithSurfaceFoamStrengthInAlphaView}],label:"GBuffer Write Group"}),this.depth=i.createTexture({size:o,dimension:"2d",format:Bm,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Depth"}),this.depthView=this.depth.createView({label:"GBuffer Depth"})}}const Vm=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
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
`,qm="rgba32float";class Hm{constructor(i,o,f){q(this,"texture");q(this,"view");q(this,"group0");q(this,"group1");q(this,"pipeline");this.texture=i.createTexture({size:o,dimension:"2d",format:qm,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Transmittance LUT"}),this.view=this.texture.createView({label:"Transmittance LUT"});const _=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:this.texture.format}}],label:"Transmittance LUT Group 0"});this.group0=i.createBindGroup({layout:_,entries:[{binding:0,resource:this.view}],label:"Transmittance LUT Group 0"});const w=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Transmittance LUT Group 1"});this.group1=i.createBindGroup({layout:w,entries:[{binding:0,resource:{buffer:f.buffer}}],label:"Transmittance LUT Group 1"});const x=i.createShaderModule({code:Vm,label:"Transmittance LUT"});this.pipeline=i.createComputePipeline({compute:{module:x,entryPoint:"computeTransmittance"},layout:i.createPipelineLayout({bindGroupLayouts:[_,w]}),label:"Transmittance LUT"})}}const $m=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
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
`,dd="rgba32float";class jm{constructor(i,o,f,_,w){q(this,"texture");q(this,"view");q(this,"group0");q(this,"group1");q(this,"pipeline");const x="Multiscatter LUT";this.texture=i.createTexture({size:o,dimension:"2d",format:dd,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Multiscatter LUT"}),this.view=this.texture.createView({label:x});const z=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:dd}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:_?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:_?"float":"unfilterable-float"}}],label:"Multiscatter LUT Group 0"});this.group0=i.createBindGroup({layout:z,entries:[{binding:0,resource:this.view},{binding:1,resource:i.createSampler({magFilter:_?"linear":"nearest",minFilter:_?"linear":"nearest"})},{binding:2,resource:f}],label:"Multiscatter LUT Group 0"});const b=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Multiscatter LUT Group 1"});this.group1=i.createBindGroup({layout:b,entries:[{binding:0,resource:{buffer:w.buffer}}],label:"Multiscatter LUT Group 1"});const D=i.createShaderModule({code:$m,label:x});this.pipeline=i.createComputePipeline({compute:{module:D,entryPoint:"computeMultiscattering"},layout:i.createPipelineLayout({bindGroupLayouts:[z,b]}),label:"Multiscatter LUT"})}}const Qm=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
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
`,fd="rgba32float";class Ym{constructor(i,o,f,_,w,x){q(this,"texture");q(this,"view");q(this,"group0");q(this,"group1");q(this,"pipeline");this.texture=i.createTexture({size:o,dimension:"2d",format:fd,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Skyview LUT"}),this.view=this.texture.createView({label:"Skyview LUT"});const z=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:fd}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:w?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:w?"float":"unfilterable-float"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:w?"float":"unfilterable-float"}}],label:"Skyview LUT"});this.group0=i.createBindGroup({layout:z,entries:[{binding:0,resource:this.view},{binding:1,resource:i.createSampler({magFilter:w?"linear":"nearest",minFilter:w?"linear":"nearest"})},{binding:2,resource:f},{binding:3,resource:_}],label:"Skyview LUT Group 0"});const b=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Skyview LUT Group 1"});this.group1=i.createBindGroup({layout:b,entries:[{binding:0,resource:{buffer:x.buffer}}],label:"Skyview LUT Group 1"});const D=i.createShaderModule({code:Qm});this.pipeline=i.createComputePipeline({compute:{module:D,entryPoint:"computeSkyViewLuminance"},layout:i.createPipelineLayout({bindGroupLayouts:[z,b]}),label:"Skyview LUT"})}}const Km=`// Textures must have the same dimension
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
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
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

@compute @workgroup_size(16, 16)
fn computeInitialAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>)
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
@group(0) @binding(0) var out_packed_Dx_plus_iDy_Dz_iDxdz_amplitude: texture_storage_2d<rgba32float, write>;
@group(0) @binding(1) var out_packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_amplitude: texture_storage_2d<rgba32float, write>;
@group(0) @binding(2) var in_initial_amplitude: texture_storage_2d<rg32float, read>;

/* Commented to avoid re-declaration
@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
@group(1) @binding(1) var<uniform> u_fourier_waves: FourierWavesUBO;
*/
fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x);
}

@compute @workgroup_size(16, 16)
fn computeRealizedAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_packed_Dx_plus_iDy_Dz_iDxdz_amplitude);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let wave = waveParameters(&u_fourier_waves, texel_coord);

	if (abs(wave.wave_number) < wave.delta_wave_number
		|| abs(wave.wave_number) < u_fourier_waves.wave_number_min_max.x
		|| abs(wave.wave_number) > u_fourier_waves.wave_number_min_max.y)
	{
		textureStore(
			out_packed_Dx_plus_iDy_Dz_iDxdz_amplitude,
			texel_coord,
			vec4<f32>(0.0)
		);
		textureStore(
			out_packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_amplitude,
			texel_coord,
			vec4<f32>(0.0)
		);
		return;
	}

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
	 * For gerstner waves, displacement in x/z directions is based on the
	 * gradient (x,z)-Displacement of:
	 *
	 * h(k,t) * exp(i * dot(k,x))
	 * 	= i * k(k,t)/k * h(k,t) * exp(i * dot(k,x))
	 *
	 * Where i is the imaginary number sqrt(-1)
	 *
	 * We're going to be doing a few derivatives.
	 * h(k,t) is independent of (x,z) when performing the fourier transform sum,
	 * since we sum over all fixed k and k is not a function of position at this
	 * point. So in general taking the derivative brings down a factor of
	 * i * k_x or i * k_z from the exponential
	 */

	let iDy_amplitude = vec2<f32>(-Dy_amplitude.y, Dy_amplitude.x);

	var one_over_wave_number = 1.0 / wave.wave_number;

	// wave.wave_vector.y here actually refers to the wave-vector's z component, since it is two-channel
	let k_x = wave.wave_vector.x;
	let k_z = wave.wave_vector.y;

	let Dx_amplitude = iDy_amplitude * k_x * one_over_wave_number;
	let Dz_amplitude = iDy_amplitude * k_z * one_over_wave_number;

	let Dxdx_amplitude = -Dy_amplitude * k_x * k_x * one_over_wave_number;
	let Dydx_amplitude = iDy_amplitude * k_x;
	// Mixed derivative is redundant, since Dxdz = Dzdx, so we do not keep it
	// let Dzdx_amplitude = -Dy_amplitude * k_x * k_z / wave.wave_number;

	let Dxdz_amplitude = -Dy_amplitude * k_x * k_z * one_over_wave_number;
	let Dydz_amplitude = iDy_amplitude * k_z;
	let Dzdz_amplitude = -Dy_amplitude * k_z * k_z * one_over_wave_number;

	let iDxdz_amplitude = vec2<f32>(-Dxdz_amplitude.y, Dxdz_amplitude.x);
	let iDydz_amplitude = vec2<f32>(-Dydz_amplitude.y, Dydz_amplitude.x);
	let iDzdz_amplitude = vec2<f32>(-Dzdz_amplitude.y, Dzdz_amplitude.x);

	textureStore(
		out_packed_Dx_plus_iDy_Dz_iDxdz_amplitude,
		texel_coord,
		vec4<f32>(Dx_amplitude + iDy_amplitude, Dz_amplitude + iDxdz_amplitude)
	);
	textureStore(
		out_packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_amplitude,
		texel_coord,
		vec4<f32>(Dydx_amplitude + iDydz_amplitude, Dxdx_amplitude + iDzdz_amplitude)
	);
}

@group(0) @binding(0) var out_turbulence_jacobian_array: texture_storage_2d_array<rgba16float, write>;
@group(0) @binding(1) var in_turbulence_jacobian_array: texture_2d_array<f32>;
@group(0) @binding(2) var in_Dx_Dy_Dz_Dxdz_spatial_array: texture_2d_array<f32>;
@group(0) @binding(3) var in_Dydx_Dydz_Dxdx_Dzdz_spatial_array: texture_2d_array<f32>;
@group(0) @binding(4) var<uniform> u_global_0: GlobalUBO;

@compute @workgroup_size(16, 16)
fn accumulateTurbulence(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_turbulence_jacobian_array);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	// TODO: support for mipmapping and lambda scaling factor present in wave_surface_displacement.wgsl

	const mip = 0u;

	for(var array_layer = 0u; array_layer <= textureNumLayers(out_turbulence_jacobian_array); array_layer++)
	{
		let Dx_Dy_Dz_Dxdz = textureLoad(in_Dx_Dy_Dz_Dxdz_spatial_array, texel_coord, array_layer, mip);
		let Dydx_Dydz_Dxdx_Dzdz = textureLoad(in_Dydx_Dydz_Dxdx_Dzdz_spatial_array, texel_coord, array_layer, mip);

		let Dydx = Dydx_Dydz_Dxdx_Dzdz.x;
		let Dydz = Dydx_Dydz_Dxdx_Dzdz.y;

		let Dxdz = Dx_Dy_Dz_Dxdz.w;
		let Dzdx = Dxdz;

		var Dxdx = Dydx_Dydz_Dxdx_Dzdz.z;
		var Dzdz = Dydx_Dydz_Dxdx_Dzdz.w;

		var jacobian_xx = 1.0;
		var jacobian_zz = 1.0;
		var jacobian_xz = 0.0;
		var jacobian_zx = 0.0;

		jacobian_xx += Dxdx;
		jacobian_zz += Dzdz;

		jacobian_xz += Dxdz;
		jacobian_zx += Dzdx;

		let jacobian = jacobian_xx * jacobian_zz - jacobian_xz * jacobian_zx;
		let turbulence_previous = textureLoad(in_turbulence_jacobian_array, texel_coord, array_layer, mip).x;

		/*
		 * Function that causes foam to linger.
		 *
		 * Note this is not actually the turbulence of the displacement as a
		 * field, but instead an ad-hoc visually appealing approximation.
		 *
		 * This creates foam even when jacobian is nonnegative, but visually
		 * this does not look too strange. Utilizing this value takes a lot of
		 * tweaking with scaling/bias factors anyway.
		 *
		 * I found this on a few examples on github, and I'd like to know where
		 * it originates since I struggled to come up with my own function that
		 * works well.
		 */
		let turbulence = min(
			turbulence_previous + u_global_0.time.delta_time_seconds * 0.5 / max(jacobian, 0.5),
			jacobian
		);

		textureStore(out_turbulence_jacobian_array, texel_coord, array_layer,
			vec4<f32>(turbulence, jacobian, 0.0, 0.0)
		);
	}
}
`,Xm=`const PI = 3.141592653589793;

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

// Dispatch should have (N / 2, 1) invocations, where N is the grid size.
@compute @workgroup_size(2, 1)
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
@group(0) @binding(2) var<storage, read_write> buffer_0: array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> buffer_1: array<vec4<f32>>;
@group(0) @binding(4) var<uniform> step_counter: u32;
@group(0) @binding(5) var out_texture: texture_storage_2d<rgba16float, write>;

fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

fn complexMult2(a: vec4<f32>, b: vec4<f32>) -> vec4<f32>
{
	return vec4<f32>(complexMult(a.xy, b.xy), complexMult(a.zw, b.zw));
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
@compute @workgroup_size(16, 16)
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

			let result = lower_input + complexMult2(vec4<f32>(two_point_dft.twiddle, two_point_dft.twiddle), upper_input);

			buffer_0[bufferIndex(global_id.x, global_id.y)] = result;
		}
		else
		{
			let lower_input = buffer_0[bufferIndex(two_point_dft.lower_index, global_id.y)];
			let upper_input = buffer_0[bufferIndex(two_point_dft.upper_index, global_id.y)];

			let result = lower_input + complexMult2(vec4<f32>(two_point_dft.twiddle, two_point_dft.twiddle), upper_input);

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

			let result = lower_input + complexMult2(vec4<f32>(two_point_dft.twiddle, two_point_dft.twiddle), upper_input);

			buffer_0[bufferIndex(global_id.x, global_id.y)] = result;
		}
		else
		{
			let lower_input = buffer_0[bufferIndex(global_id.x, two_point_dft.lower_index)];
			let upper_input = buffer_0[bufferIndex(global_id.x, two_point_dft.upper_index)];

			let result = lower_input + complexMult2(vec4<f32>(two_point_dft.twiddle, two_point_dft.twiddle), upper_input);

			buffer_1[bufferIndex(global_id.x, global_id.y)] = result;
		}
	}
}

/*
 * Flips the sign of even numbered cells in the fourier grid. A cell at (x,y) is even when (x + y) is even.
 * step_counter should be left as it was for the last step performed.
 *
 * Why you might do this:
 * When an DFT's input data has its energy clustered around the middle (grid_size / 2), the result will have alternating sign flips from the desired result.
 * This is since a frequency of (grid_size)/2 will show up as a wave with wavelength 2.
 *
 * This sort of clustering occurs with how we process ocean waves, since our wave "origin" with the longest wavelength, highest frequency/energy waves is at (grid_size/2, grid_size/2)
 */
@compute @workgroup_size(16, 16)
fn performSwapEvenSignsAndCopyToHalfPrecisionOutput(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	let ping_pong = (step_counter % 2u) == 1u;

	let factor = 1.0 - 2.0 * f32((global_id.x + global_id.y) % 2);

	if(ping_pong)
	{
		textureStore(out_texture, global_id.xy, buffer_0[bufferIndex(global_id.x, global_id.y)] * factor);
	}
	else
	{
		textureStore(out_texture, global_id.xy, buffer_1[bufferIndex(global_id.x, global_id.y)] * factor);
	}
}

@group(0) @binding(0) var<storage, read_write> out_step_counter: u32;

@compute @workgroup_size(1)
fn incrementStepCounter(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	if(global_id.x == 0)
	{
		out_step_counter = out_step_counter + 1;
	}
}
@compute @workgroup_size(1)
fn resetStepCounter(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	if(global_id.x == 0)
	{
		out_step_counter = 0;
	}
}
`;class Jm extends Ai{constructor(o){super(o,3,"DFFT Parameters UBO");q(this,"data",{log_2_size:1,size:2,b_inverse:!1})}packed(){const o=new ArrayBuffer(this.buffer.size),f=new DataView(o);return f.setUint32(0,this.data.log_2_size,!0),f.setUint32(4,this.data.size,!0),f.setFloat32(8,this.data.b_inverse?1:0,!0),o}}const No="rgba16float";class Zm{constructor(i,o){q(this,"parametersUBO");q(this,"intermediateDFTs");q(this,"complexBuffer0");q(this,"complexBuffer1");q(this,"stepCounterBuffer");q(this,"outputTexture");q(this,"intermediateDFTsBindGroup");q(this,"intermediateDFTsKernel");q(this,"performBindGroup");q(this,"performKernel");q(this,"performSwapEvenSignsAndCopyToHalfPrecisionOutputKernel");q(this,"stepCounterBindGroup");q(this,"incrementStepCounterKernel");q(this,"resetStepCounterKernel");q(this,"debugBuffersCopied",!1);if(o<5)throw new RangeError("gridSizeExponent must be greater than 4.");const f=Math.pow(2,o);this.parametersUBO=new Jm(i),this.parametersUBO.data.log_2_size=o,this.parametersUBO.data.size=f,this.parametersUBO.data.b_inverse=!1,this.parametersUBO.writeToGPU(i.queue);const _=16;this.intermediateDFTs=i.createBuffer({label:"DFFT Precompute Stage Steps",size:o*f*_,usage:GPUBufferUsage.STORAGE});const w=i.createShaderModule({label:"DFFT Precompute Stage",code:Xm}),x=i.createBindGroupLayout({label:"DFFT Precompute Stage Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.intermediateDFTsBindGroup=i.createBindGroup({label:"DFFT Precompute Stage Group 0",layout:x,entries:[{binding:0,resource:{buffer:this.parametersUBO.buffer}},{binding:1,resource:{buffer:this.intermediateDFTs}}]});const z=i.createPipelineLayout({label:"DFFT Precompute Steps Kernel",bindGroupLayouts:[x]});this.intermediateDFTsKernel=i.createComputePipeline({label:"DFFT Precompute Stage",compute:{module:w,entryPoint:"precomputeDFFTInstructions"},layout:z});const b=i.createBindGroupLayout({label:"DFFT Perform Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:5,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:No,access:"write-only"}}]}),D=16;this.complexBuffer0=i.createBuffer({label:"DFFT Buffer 0",size:f*f*D,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.complexBuffer1=i.createBuffer({label:"DFFT Buffer 1",size:this.complexBuffer0.size,usage:this.complexBuffer0.usage}),this.stepCounterBuffer=i.createBuffer({label:"DFFT Step Counter",size:4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE|GPUBufferUsage.UNIFORM});const N=new Uint32Array(1);N[0]=0,i.queue.writeBuffer(this.stepCounterBuffer,0,N),this.outputTexture=i.createTexture({label:"DFFT Output Texture",format:No,size:{width:f,height:f,depthOrArrayLayers:1},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC}),this.performBindGroup=i.createBindGroup({label:"DFFT Perform Group 0",layout:b,entries:[{binding:0,resource:{buffer:this.parametersUBO.buffer}},{binding:1,resource:{buffer:this.intermediateDFTs}},{binding:2,resource:{buffer:this.complexBuffer0}},{binding:3,resource:{buffer:this.complexBuffer1}},{binding:4,resource:{buffer:this.stepCounterBuffer}},{binding:5,resource:this.outputTexture.createView()}]});const I=i.createPipelineLayout({label:"DFFT Perform",bindGroupLayouts:[b]});this.performKernel=i.createComputePipeline({label:"DFFT Perform DFFT Step",compute:{module:w,entryPoint:"performDFFTStep"},layout:I}),this.performSwapEvenSignsAndCopyToHalfPrecisionOutputKernel=i.createComputePipeline({label:"DFFT Perform Swap Even Signs",compute:{module:w,entryPoint:"performSwapEvenSignsAndCopyToHalfPrecisionOutput"},layout:I});const F=i.createBindGroupLayout({label:"DFFT Step Counter Bind Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.stepCounterBindGroup=i.createBindGroup({label:"DFFT Step Counter Bind Group 0",layout:F,entries:[{binding:0,resource:{buffer:this.stepCounterBuffer}}]});const X=i.createPipelineLayout({label:"DFFT Step Counter",bindGroupLayouts:[F]});this.incrementStepCounterKernel=i.createComputePipeline({label:"DFFT Increment Step Counter Kernel",layout:X,compute:{module:w,entryPoint:"incrementStepCounter"}}),this.resetStepCounterKernel=i.createComputePipeline({label:"DFFT Reset Step Counter Kernel",layout:X,compute:{module:w,entryPoint:"resetStepCounter"}}),this.parametersUBO.data.b_inverse=!0,this.parametersUBO.writeToGPU(i.queue);const Q=i.createCommandEncoder({label:"DFFT Precompute"}),Z=Q.beginComputePass({label:"DFFT Precompute Steps"});Z.setPipeline(this.intermediateDFTsKernel),Z.setBindGroup(0,this.intermediateDFTsBindGroup),Z.dispatchWorkgroups(f/2/2,1),Z.end(),i.queue.submit([Q.finish()])}recordPerformOnBuffer0(i,o){const f=this.parametersUBO.data.size,_=this.parametersUBO.data.log_2_size,w=i.beginComputePass({label:"DFFT Perform",timestampWrites:o});for(let x=0;x<2*_;x++)x===0?(w.setPipeline(this.resetStepCounterKernel),w.setBindGroup(0,this.stepCounterBindGroup),w.dispatchWorkgroups(1)):(w.setPipeline(this.incrementStepCounterKernel),w.setBindGroup(0,this.stepCounterBindGroup),w.dispatchWorkgroups(1)),w.setPipeline(this.performKernel),w.setBindGroup(0,this.performBindGroup),w.dispatchWorkgroups(f/16,f/16);w.setPipeline(this.performSwapEvenSignsAndCopyToHalfPrecisionOutputKernel),w.setBindGroup(0,this.performBindGroup),w.dispatchWorkgroups(f/16,f/16),w.end()}recordPerform(i,o,f,_,w,x,z){const b="rgba32float";if(f.format!=b)throw RangeError(`sourceTexture (format ${f.format}) must be ${b}`);if(_.format!=No)throw RangeError(`destinationArray (format ${f.format}) must be ${b}`);f.depthOrArrayLayers!==1&&console.warn(`Source Texture '${f.label}' DepthOrArrayLayers > 1 - will only use the first layer.`),this.parametersUBO.data.b_inverse=x,this.parametersUBO.writeToGPU(i.queue);const D=this.parametersUBO.data.size;o.copyTextureToBuffer({texture:f},{buffer:this.complexBuffer0,bytesPerRow:this.complexBuffer0.size/D},{width:f.width,height:f.height,depthOrArrayLayers:1}),this.recordPerformOnBuffer0(o,z),o.copyTextureToTexture({texture:this.outputTexture},{texture:_,origin:{x:0,y:0,z:w}},{width:_.width,height:_.height,depthOrArrayLayers:1})}}const e_=`@group(0) @binding(0) var out_next_mip_level: texture_storage_2d_array<rgba16float, write>;
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

// A separate kernel for generating mips smaller than 16 by 16
@compute @workgroup_size(1, 1, 1)
fn fillMipMapSmaller(@builtin(global_invocation_id) global_id: vec3<u32>)
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
`,Go="rgba16float";class t_{constructor(i){q(this,"fillMipMapTextureInOutLayout");q(this,"fillMipMapKernel");q(this,"fillMipMapSmallerKernel");this.fillMipMapTextureInOutLayout=i.createBindGroupLayout({label:"MipMap Generation fillMipMap Texture In-Out",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Go,viewDimension:"2d-array"}},{binding:1,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float",viewDimension:"2d-array"}}]});const o=i.createShaderModule({label:"sky-sea/mipmap.wgsl",code:e_}),f=i.createPipelineLayout({label:"MipMap Generation fillMipMap Kernel",bindGroupLayouts:[this.fillMipMapTextureInOutLayout]});this.fillMipMapKernel=i.createComputePipeline({label:"MipMap Generation fillMipMap Kernel",layout:f,compute:{module:o,entryPoint:"fillMipMap"}}),this.fillMipMapSmallerKernel=i.createComputePipeline({label:"MipMap Generation fillMipMapSmaller Kernel",layout:f,compute:{module:o,entryPoint:"fillMipMapSmaller"}})}createBindGroups(i,o){if(o.format!=Go)throw new RangeError(`Invalid source texture (label ${o.label}) for MipMap generation`,{cause:`Source format is ${o.format} when expected ${Go}`});if(o.dimension!="2d")throw new RangeError(`Invalid source texture (label ${o.label}) for MipMap generation`,{cause:"Source texture is not 2d"});if(!(o.usage&GPUTextureUsage.COPY_SRC))throw new RangeError(`Invalid source texture (label ${o.label}) for MipMap generation`,{cause:"Source usage is missing required flag COPY_SRC"});if(o.width!=o.height||!Number.isInteger(Math.log2(o.width)))throw new RangeError(`Invalid source texture (label ${o.label}) for MipMap generation`,{cause:`Source dimensions of (${o.width},${o.height}) are invalid, texture must be square and power-of-2.`});const f=Math.log2(o.width);return{level0Size:{width:o.width,height:o.height},bindGroupsByMipLevel:[...new Array(Math.min(f,o.mipLevelCount)-1).keys()].map((_,w)=>{const x=w+1,z=w;return i.createBindGroup({label:`MipMap Generation for '${o.label}' IO Bind Group '${z} => ${x}'`,layout:this.fillMipMapTextureInOutLayout,entries:[{binding:0,resource:o.createView({dimension:"2d-array",baseMipLevel:x,mipLevelCount:1})},{binding:1,resource:o.createView({dimension:"2d-array",baseMipLevel:z,mipLevelCount:1})}]})}),arrayLevelCount:o.depthOrArrayLayers}}updateMipMaps(i,o){o.bindGroupsByMipLevel.forEach((f,_)=>{i.setBindGroup(0,f);const w=1<<_,x=o.level0Size.width/w,z=o.level0Size.height/w;x>=16&&z>=16?(i.setPipeline(this.fillMipMapKernel),i.dispatchWorkgroups(x/16,z/16,o.arrayLevelCount)):(i.setPipeline(this.fillMipMapSmallerKernel),i.dispatchWorkgroups(x,z,o.arrayLevelCount))})}}const Id=512,Bo=9,n_=9.8,r_=100,pd="rg32float",Wo="rg32float",i_="rgba16float",hd="rgba16float",Vo="rgba32float";class a_ extends Ai{constructor(o){super(o,12,"Fourier Waves UBO");q(this,"data",{fourier_grid_size:Id,gravity:n_,wave_patch_extent_meters:50,wave_period_seconds:r_,wind_speed_meters_per_second:10,wind_fetch_meters:10*1e3,wave_swell:.3,padding0:0,wave_number_min_max:Mt.create(0,1e3),padding1:Mt.create(0,0)})}packed(){const o=new ArrayBuffer(this.buffer.size),f=new DataView(o),_=new Float32Array(o);return f.setUint32(0,this.data.fourier_grid_size,!0),f.setFloat32(4,this.data.gravity,!0),f.setFloat32(8,this.data.wave_patch_extent_meters,!0),f.setFloat32(12,this.data.wave_period_seconds,!0),f.setFloat32(16,this.data.wind_speed_meters_per_second,!0),f.setFloat32(20,this.data.wind_fetch_meters,!0),f.setFloat32(24,this.data.wave_swell,!0),f.setFloat32(28,this.data.padding0,!0),_.set(this.data.wave_number_min_max,8),_.set(this.data.padding1,10),o}}function s_(){const a=Math.random(),i=Math.random(),o=Math.sqrt(-2*Math.log(a)),f=2*Math.PI*i,_=o*Math.cos(f),w=o*Math.sin(f);return[_,w]}class o_{constructor(i,o,f){q(this,"Dx_Dy_Dz_Dxdz_Spatial");q(this,"Dydx_Dydz_Dxdx_Dzdz_Spatial");q(this,"turbulenceJacobian");q(this,"Dx_Dy_Dz_Dxdz_SpatialAllMips");q(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips");q(this,"turbulenceJacobianOneMip");i.mipLevelCount!=o.mipLevelCount&&console.warn(`FFT Wave Displacement maps do not have identical mip levels. ${i.mipLevelCount} vs ${o.mipLevelCount}`),this.Dx_Dy_Dz_Dxdz_Spatial=i,this.Dydx_Dydz_Dxdx_Dzdz_Spatial=o,this.turbulenceJacobian=f,this.Dx_Dy_Dz_Dxdz_SpatialAllMips=this.Dx_Dy_Dz_Dxdz_Spatial.createView({label:`FFT Wave DisplacementMaps for ${this.Dx_Dy_Dz_Dxdz_Spatial.label}`}),this.Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips=this.Dydx_Dydz_Dxdx_Dzdz_Spatial.createView({label:`FFT Wave DisplacementMaps for ${this.Dydx_Dydz_Dxdx_Dzdz_Spatial.label}`}),this.turbulenceJacobianOneMip=this.turbulenceJacobian.map((_,w)=>_.createView({label:`FFT Wave DisplacementMaps for ${this.turbulenceJacobian[w].label} index ${w}`}))}get mipLevelCount(){return this.Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount}}class l_{constructor(i,o){q(this,"gridSize");q(this,"initialAmplitudeKernel");q(this,"realizedAmplitudeKernel");q(this,"accumulateTurbulenceKernel");q(this,"dfftResources");q(this,"mipMapGenerator");q(this,"cascades");q(this,"Dx_Dy_Dz_Dxdz_SpatialArray");q(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialArray");q(this,"turbulenceJacobianArrays");q(this,"turbulenceJacobianIndex",0);q(this,"Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings");q(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings");q(this,"waveSettings");this.gridSize=Id;const f=i.createBindGroupLayout({label:"FFT Wave Initial Amplitude h_0(k) Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Wo,access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:pd,access:"read-only"}}]}),_=i.createBindGroupLayout({label:"FFT Wave Initial Amplitude h_0(k) Group 1",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.dfftResources=new Zm(i,Bo);const w=i.createShaderModule({label:"FFT Wave",code:Km});this.initialAmplitudeKernel=i.createComputePipeline({label:"FFT Wave Initial Amplitude h_0(k)",layout:i.createPipelineLayout({label:"FFT Wave Initial Amplitude h_0(k)",bindGroupLayouts:[f,_]}),compute:{module:w,entryPoint:"computeInitialAmplitude"}}),this.mipMapGenerator=new t_(i);const x=i.createBindGroupLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Vo,access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Vo,access:"write-only"}},{binding:2,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Wo,access:"read-only"}}]}),z=i.createBindGroupLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 1",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.realizedAmplitudeKernel=i.createComputePipeline({label:"FFT Wave Realized Fourier Amplitude h(k,t)",layout:i.createPipelineLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t)",bindGroupLayouts:[x,z]}),compute:{module:w,entryPoint:"computeRealizedAmplitude"}});const b=i.createBindGroupLayout({label:"FFT Wave Accumulate Turbulence Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{viewDimension:"2d-array",format:hd}},{binding:1,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array",sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array",sampleType:"unfilterable-float"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array",sampleType:"unfilterable-float"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.accumulateTurbulenceKernel=i.createComputePipeline({label:"FFT Wave Accumulate Turbulence",layout:i.createPipelineLayout({label:"FFT Wave Accumulate Turbulence",bindGroupLayouts:[b]}),compute:{module:w,entryPoint:"accumulateTurbulence"}});function D(ee){const W=2*ee;return 2*Math.PI/W}const N=[200,50,10],I=[.001,...N.map(ee=>D(ee/this.gridSize)),1e3],F=N.map((ee,W)=>({patchExtentMeters:ee,waveNumberMinMax:[I[W],I[W+1]]})),X=F.length;this.Dx_Dy_Dz_Dxdz_SpatialArray=i.createTexture({label:"FFT Wave Final Displacement Array",format:i_,dimension:"2d",size:{width:this.gridSize,height:this.gridSize,depthOrArrayLayers:X},mipLevelCount:Bo,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST}),this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray=i.createTexture({label:"FFT Wave Final Derivatives Array",format:this.Dx_Dy_Dz_Dxdz_SpatialArray.format,size:{width:this.Dx_Dy_Dz_Dxdz_SpatialArray.width,height:this.Dx_Dy_Dz_Dxdz_SpatialArray.height,depthOrArrayLayers:this.Dx_Dy_Dz_Dxdz_SpatialArray.depthOrArrayLayers},mipLevelCount:this.Dx_Dy_Dz_Dxdz_SpatialArray.mipLevelCount,usage:this.Dx_Dy_Dz_Dxdz_SpatialArray.usage}),this.cascades=F.map(ee=>this.createCascade(i,o,ee.patchExtentMeters,ee.waveNumberMinMax));const Z=new Uint16Array(this.Dx_Dy_Dz_Dxdz_SpatialArray.width*this.Dx_Dy_Dz_Dxdz_SpatialArray.height*this.Dx_Dy_Dz_Dxdz_SpatialArray.depthOrArrayLayers*4).fill(15360);this.turbulenceJacobianArrays=[0,0].map((ee,W)=>i.createTexture({label:`FFT Wave (Turbulence,Jacobian) Array ${W}`,format:hd,size:{width:this.Dx_Dy_Dz_Dxdz_SpatialArray.width,height:this.Dx_Dy_Dz_Dxdz_SpatialArray.height,depthOrArrayLayers:this.Dx_Dy_Dz_Dxdz_SpatialArray.depthOrArrayLayers},mipLevelCount:Bo,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST})).reduce((ee,W,J,ue)=>{i.queue.writeTexture({texture:W},Z,{bytesPerRow:this.Dx_Dy_Dz_Dxdz_SpatialArray.width*8,rowsPerImage:this.Dx_Dy_Dz_Dxdz_SpatialArray.height},{width:this.Dx_Dy_Dz_Dxdz_SpatialArray.width,height:this.Dx_Dy_Dz_Dxdz_SpatialArray.height,depthOrArrayLayers:this.Dx_Dy_Dz_Dxdz_SpatialArray.depthOrArrayLayers});const fe=i.createBindGroup({layout:this.accumulateTurbulenceKernel.getBindGroupLayout(0),entries:[{binding:0,resource:W.createView({mipLevelCount:1})},{binding:1,resource:ue[(J+1)%ue.length].createView({})},{binding:2,resource:this.Dx_Dy_Dz_Dxdz_SpatialArray.createView({})},{binding:3,resource:this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray.createView({})},{binding:4,resource:{buffer:o.buffer}}]});return ee.concat({textureArray:W,bindGroup:fe,mipMapBindings:this.mipMapGenerator.createBindGroups(i,W)})},[]),this.Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings=this.mipMapGenerator.createBindGroups(i,this.Dx_Dy_Dz_Dxdz_SpatialArray),this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings=this.mipMapGenerator.createBindGroups(i,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray),this.waveSettings={gravity:0,waveSwell:0,windFetchMeters:0,windSpeedMetersPerSeconds:0}}get turbulenceMapIndex(){return this.turbulenceJacobianIndex}createCascade(i,o,f,_){const w={width:this.gridSize,height:this.gridSize},x=i.createTexture({label:"FFT Wave Gaussian Noise",format:pd,size:w,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),z=2,D=8*this.gridSize,N=new Float32Array(this.gridSize*this.gridSize*z);for(let ue=0;ue<N.length;ue++)N[ue]=s_()[0];i.queue.writeTexture({texture:x},N,{bytesPerRow:D},{width:x.width,height:x.height});const I=new a_(i);I.data.wave_patch_extent_meters=f,Mt.set(_[0],_[1],I.data.wave_number_min_max),I.writeToGPU(i.queue);const F=i.createTexture({label:"FFT Wave Fourier Amplitude h_0(k)",format:Wo,size:w,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),X=i.createBindGroup({label:"FFT Wave Initial Amplitude h_0(k) Group 0",layout:this.initialAmplitudeKernel.getBindGroupLayout(0),entries:[{binding:0,resource:F.createView()},{binding:1,resource:x.createView()}]}),Q=i.createBindGroup({label:"FFT Wave Initial Amplitude h_0(k) Group 1",layout:this.initialAmplitudeKernel.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:o.buffer}},{binding:1,resource:{buffer:I.buffer}}]}),Z=i.createTexture({label:"FFT Wave Packed (Dx + iDy, Dz + iDxdz) Amplitude",format:Vo,size:w,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),ee=i.createTexture({label:"FFT Wave Packed (Dydx + iDydz, Dxdx + iDzdz) Amplitude",format:Z.format,size:w,usage:Z.usage}),W=i.createBindGroup({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 0",layout:this.realizedAmplitudeKernel.getBindGroupLayout(0),entries:[{binding:0,resource:Z.createView()},{binding:1,resource:ee.createView()},{binding:2,resource:F.createView()}]}),J=i.createBindGroup({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 1",layout:this.realizedAmplitudeKernel.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:o.buffer}},{binding:1,resource:{buffer:I.buffer}}]});return{gaussianNoise:x,initialAmplitude:F,waveSettings:I,initialAmplitudeGroup0:X,initialAmplitudeGroup1:Q,packed_Dx_plus_iDy_Dz_iDxdz_Amplitude:Z,packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude:ee,realizedAmplitudeGroup0:W,realizedAmplitudeGroup1:J}}views(){const i=this.cascades[0];return{gaussianNoise:new It(i.gaussianNoise),initialAmplitude:new It(i.initialAmplitude),packed_Dx_plus_iDy_Dz_iDxdz_Amplitude:new It(i.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude),packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude:new It(i.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude),turbulenceJacobian:new It(this.turbulenceJacobianArrays[0].textureArray),Dx_Dy_Dz_Dxdz_Spatial:new It(this.Dx_Dy_Dz_Dxdz_SpatialArray),Dydx_Dydz_Dxdx_Dzdz_Spatial:new It(this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray)}}displacementMaps(){return new o_(this.Dx_Dy_Dz_Dxdz_SpatialArray,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray,this.turbulenceJacobianArrays.map(i=>i.textureArray))}record(i,o,f,_){if(f.gravity!=this.waveSettings.gravity||f.waveSwell!=this.waveSettings.waveSwell||f.windSpeedMetersPerSeconds!=this.waveSettings.windSpeedMetersPerSeconds||f.windFetchMeters!=this.waveSettings.windFetchMeters){this.waveSettings=structuredClone(f);const D=o.beginComputePass({label:"FFT Wave Initial Amplitude"});this.cascades.forEach(N=>{N.waveSettings.data.wave_swell=this.waveSettings.waveSwell,N.waveSettings.data.wind_fetch_meters=this.waveSettings.windFetchMeters,N.waveSettings.data.wind_speed_meters_per_second=this.waveSettings.windSpeedMetersPerSeconds,N.waveSettings.data.gravity=this.waveSettings.gravity,N.waveSettings.writeToGPU(i.queue),D.setPipeline(this.initialAmplitudeKernel),D.setBindGroup(0,N.initialAmplitudeGroup0),D.setBindGroup(1,N.initialAmplitudeGroup1);const I={width:N.initialAmplitude.width,height:N.initialAmplitude.height,depth:N.initialAmplitude.depthOrArrayLayers};D.dispatchWorkgroups(I.width/16,I.height/16,I.depth/1)}),D.end()}const x=o.beginComputePass({label:"FFT Wave Fourier Amplitude Realization",timestampWrites:_!==void 0?{querySet:_.querySet,beginningOfPassWriteIndex:_.beginWriteIndex}:void 0});this.cascades.forEach(D=>{x.setPipeline(this.realizedAmplitudeKernel),x.setBindGroup(0,D.realizedAmplitudeGroup0),x.setBindGroup(1,D.realizedAmplitudeGroup1);const N={width:D.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude.width,height:D.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude.height,depth:1};x.dispatchWorkgroups(N.width/16,N.height/16,N.depth/1)}),x.end(),this.cascades.forEach((D,N)=>{this.dfftResources.recordPerform(i,o,D.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude,this.Dx_Dy_Dz_Dxdz_SpatialArray,N,!0,void 0),this.dfftResources.recordPerform(i,o,D.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray,N,!0,void 0)});const z=o.beginComputePass({label:"Turbulence Accumulation"});z.setPipeline(this.accumulateTurbulenceKernel),z.setBindGroup(0,this.turbulenceJacobianArrays[this.turbulenceJacobianIndex].bindGroup),z.dispatchWorkgroups(this.gridSize/16,this.gridSize/16),z.end();const b=o.beginComputePass({label:"MipMap Generation",timestampWrites:_!==void 0?{querySet:_.querySet,endOfPassWriteIndex:_.endWriteIndex}:void 0});this.mipMapGenerator.updateMipMaps(b,this.Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings),this.mipMapGenerator.updateMipMaps(b,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings),this.mipMapGenerator.updateMipMaps(b,this.turbulenceJacobianArrays[this.turbulenceJacobianIndex].mipMapBindings),this.turbulenceJacobianIndex+=1,this.turbulenceJacobianIndex%=this.turbulenceJacobianArrays.length,b.end()}}const u_=`// Displace a grid of vertices representing the ocean surface, then rasterize into the gbuffer with a graphics pass

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
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
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
	padding0: f32,

	gbuffer_extent: vec2<f32>,
	foam_scale: f32,
	foam_bias: f32,
}

@group(0) @binding(0) var<uniform> u_settings: WaveSurfaceDisplacementUBO;
@group(0) @binding(1) var<uniform> u_global: GlobalUBO;

@group(1) @binding(0) var displacement_map_sampler: sampler;
@group(1) @binding(1) var Dx_Dy_Dz_Dxdz_spatial: texture_2d_array<f32>;
@group(1) @binding(2) var Dydx_Dydz_Dxdx_Dzdz_spatial: texture_2d_array<f32>;
@group(1) @binding(3) var<uniform> u_waves: array<PlaneWave, WAVE_COUNT>;

@group(2) @binding(0) var turbulence_jacobian: texture_2d_array<f32>;

const PI = 3.141592653589793;

// Extra 1 for tiling
const VERTEX_DIMENSION = 1000u;
const VERTEX_COUNT = VERTEX_DIMENSION * VERTEX_DIMENSION;
// const TRIANGLE_COUNT = 2u * (VERTEX_DIMENSION - 1u) * (VERTEX_DIMENSION - 1u);
// const INDEX_COUNT = 3u * TRIANGLE_COUNT;

const WAVE_COUNT = 12u;

const WATER_COLOR = vec3<f32>(1.0 / 255.0, 123.0 / 255.0, 146.0 / 255.0);
const WAVE_NEUTRAL_PLANE = 1.0;

const CASCADE_CAPACITY = 4u;
const WAVE_CASCADE_SIZES = array<f32,3>(200.0, 50.0, 10.0);

struct OceanSurfaceDisplacement
{
	displacement: vec3<f32>,
}

fn sampleOceanSurfaceDisplacementFromMap(
	global_uv: vec2<f32>,
	cascade_position_weights: array<f32,CASCADE_CAPACITY>,
	gerstner: bool,
) -> OceanSurfaceDisplacement
{
    var result: OceanSurfaceDisplacement;
	result.displacement = vec3<f32>(0.0);

	for(var array_layer = 0u; array_layer <= 3u; array_layer++)
	{
		let position_lambda = cascade_position_weights[array_layer];

		let patch_uv = global_uv / WAVE_CASCADE_SIZES[array_layer];

		let Dx_Dy_Dz_Dxdz = textureSampleLevel(
			Dx_Dy_Dz_Dxdz_spatial,
			displacement_map_sampler,
			patch_uv,
			array_layer,
			0.0
		);

		var delta_displacement = Dx_Dy_Dz_Dxdz.xyz;
		if(!gerstner)
		{
			delta_displacement.x = 0.0;
			delta_displacement.z = 0.0;
		}

		result.displacement += position_lambda * delta_displacement;
	}

	return result;
}

fn sampleOceanSurfaceDisplacementFromWave(
	wave: PlaneWave,
	time: f32,
	coords: vec2<f32>,
	falloff_distance: f32
) -> OceanSurfaceDisplacement
{
	let falloff_factor = (1.0 - smoothstep(0.0, falloff_distance, length(coords)));
    let wave_amplitude = falloff_factor * wave.amplitude;
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

    var result: OceanSurfaceDisplacement;

    let result_xz = -wave_direction * wave_amplitude * sin_theta;
    let result_y = wave_amplitude * cos_theta;
    result.displacement = vec3<f32>(result_xz.x, result_y, result_xz.y);

    return result;
}

fn getOceanSurfaceDisplacement(
	global_uv: vec2<f32>,
	cascade_position_weights: array<f32,CASCADE_CAPACITY>,
) -> OceanSurfaceDisplacement
{
	var result: OceanSurfaceDisplacement;
	result.displacement = vec3<f32>(0.0);

	if(u_settings.b_displacement_map == 1u)
	{
    	let uv = (global_uv + vec2<f32>(0.5,0.5));
		let gerstner = u_settings.b_gerstner == 1u;
		let sample = sampleOceanSurfaceDisplacementFromMap(uv, cascade_position_weights, gerstner);

		result.displacement += sample.displacement;
	}
	else
	{
		var sample: OceanSurfaceDisplacement;

		for (var i = 0u; i < WAVE_COUNT; i++)
		{
			sample = sampleOceanSurfaceDisplacementFromWave(
				u_waves[i],
				u_global.time.time_seconds,
				global_uv,
				u_settings.patch_world_half_extent
			);

			result.displacement += result.displacement;
		}
	}

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

fn projectNDCToOceanSurface(
	ndc: vec2<f32>,
	ndc_offset: vec2<f32>,
	camera: Camera,
	height: f32,
) -> vec3<f32>
{
	let near_plane = 1.0;
	let direction_view_space = camera.inv_proj * vec4<f32>(
		ndc + ndc_offset,
		near_plane,
		1.0
	);

	let direction_world = normalize((camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

	let ocean_origin = vec3<f32>(0.0, height, 0.0);
	let ocean_normal = vec3<f32>(0.0, 1.0, 0.0);

	let ocean_plane_hit = rayPlaneIntersection(camera.position.xyz, direction_world, ocean_origin, ocean_normal);
	let t = mix(1000.0, ocean_plane_hit.t, f32(ocean_plane_hit.hit));
	var world_position = camera.position.xyz + t * direction_world;
	world_position.y = ocean_origin.y;

	return world_position;
}

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(1) color : vec3<f32>,
    @location(2) camera_distance : f32,
	@location(3) cascade_1234_normal_weights: vec4<f32>,
	@location(5) global_uv: vec2<f32>,
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

	let ocean_origin = vec3<f32>(0.0, WAVE_NEUTRAL_PLANE, 0.0);
	let ocean_normal = vec3<f32>(0.0,1.0,0.0);

	let cell_world_position = projectNDCToOceanSurface(
		ndc_space_coord,
		vec2<f32>(0.0,0.0),
		camera,
		WAVE_NEUTRAL_PLANE
	);
	let neighbor_world_position = projectNDCToOceanSurface(
		ndc_space_coord,
		vec2<f32>(1.0) / f32(VERTEX_DIMENSION - 1u),
		camera,
		WAVE_NEUTRAL_PLANE
	);
	let pixel_neighbor_world_position = projectNDCToOceanSurface(
		ndc_space_coord,
		vec2<f32>(1.0) / u_settings.gbuffer_extent,
		camera,
		WAVE_NEUTRAL_PLANE
	);

	var cascade_position_weights = array<f32, CASCADE_CAPACITY>(1,1,1,1);
	var cascade_normal_weights = array<f32, CASCADE_CAPACITY>(1,1,1,1);

	/*
	 * Disable this since mipmapping is good enough.
	 * The eventual goal to enable this would be to transition to a
	 * distant ocean BRDF in order to replace the normal perturbations we filter
	 * out.
	 */
	const WITH_NYQUIST_FILTERING = false;
	if(WITH_NYQUIST_FILTERING)
	{
		/*
		* When projecting this grid of screen-space triangles to the ocean, each
		* vertex and fragment is a sample of our ocean wave data. We don't want to
		* sample waves outside the nyquist limit for a given cell/pixel.
		*
		* We filter cascades' effect on POSITION by the sample rate of the entire
		* triangle/cell, i.e. per vertex.
		*
		* We filter cascades' effect on NORMAL by the sample rate of each pixel,
		* i.e. per fragment.
		*
		* These criteria are distinct since normals are per pixel, while
		* displacement visually relies on triangle rasterization and visible
		* feature detail is bounded by the final distance of vertices.
		*/

		// TODO: this is hardcoded right now, but should be updated as wave initial amplitudes are changed
		const WAVE_NUMBER_FENCE_POSTS = array<f32, 5>(
			0.001,
			8.042477193189871,
			32.169908772759484,
			160.8495438637974,
			1000
		);

		// Any wave with wavenumber greater than this should NOT be sampled
		let cell_nyquist_wavenumber = (2.0 * PI) / (distance(neighbor_world_position, cell_world_position) * 2.0);
		let pixel_nyquist_wavenumber = (2.0 * PI) / (distance(pixel_neighbor_world_position, cell_world_position) * 2.0);

		for(var cascade = 0u; cascade < textureNumLayers(Dx_Dy_Dz_Dxdz_spatial); cascade++)
		{
			let wave_number_min = WAVE_NUMBER_FENCE_POSTS[cascade];
			let wave_number_max = WAVE_NUMBER_FENCE_POSTS[cascade + 1u];

			let wave_number_concentration = mix(wave_number_min, wave_number_max, 0.15);

			let position_weight = 1.0 - smoothstep(
				cell_nyquist_wavenumber * 1.0,
				cell_nyquist_wavenumber * 2.5,
				wave_number_concentration
			);
			let normal_weight = 1.0 - smoothstep(
				pixel_nyquist_wavenumber * 1.0,
				pixel_nyquist_wavenumber * 3.0,
				wave_number_concentration
			);

			cascade_position_weights[cascade] = position_weight;
			cascade_normal_weights[cascade] = normal_weight;
		}
	}

	let global_uv = cell_world_position.xz;
	let displacement_result = getOceanSurfaceDisplacement(
		global_uv,
		cascade_position_weights
	);
	let world_position = cell_world_position + displacement_result.displacement;

	output.global_uv = global_uv;
    output.position = u_global.camera.proj_view * vec4<f32>(world_position, 1.0);
	// Unclipped depth didn't work (and requires a feature) so this is a workaround
	output.position.z /= 1.001;

	output.color = vec3<f32>(WATER_COLOR);

	// Test screen-space density of vertices
	// output.color = vec3<f32>(step(fract(50 * ndc_space_coord), vec2<f32>(0.1)),0.0);
 	// output.color = vec3<f32>(step(fract(1.0 * world_position.x), 0.05),0.0,0.0);

    output.camera_distance = distance(u_global.camera.position.xyz, world_position);

	output.cascade_1234_normal_weights = vec4<f32>(
		cascade_normal_weights[0],
		cascade_normal_weights[1],
		cascade_normal_weights[2],
		cascade_normal_weights[3],
	);

    return output;
}

struct FragmentOut
{
    @location(0) color_with_surface_world_depth_in_alpha: vec4<f32>,
    @location(1) world_normal_with_surface_foam_strength_in_alpha: vec4<f32>,
}

struct OceanSurfaceTangents
{
	tangent: vec3<f32>,
	bitangent: vec3<f32>,
	foam_strength: f32,
}

fn sampleOceanSurfaceTangentDifferentialFromMap(
	global_uv: vec2<f32>,
	cascade_normal_weights: array<f32,CASCADE_CAPACITY>,
	gerstner: bool,
) -> OceanSurfaceTangents
{
    var result: OceanSurfaceTangents;
	result.tangent = vec3<f32>(0.0);
	result.bitangent = vec3<f32>(0.0);

	var turbulence_accumulated = 0.0;
	var turbulence_max = 0.0;
	for(var array_layer = 0u; array_layer < textureNumLayers(Dx_Dy_Dz_Dxdz_spatial); array_layer++)
	{
		let normal_lambda = cascade_normal_weights[array_layer];

		let patch_uv = global_uv / WAVE_CASCADE_SIZES[array_layer];

		let Dx_Dy_Dz_Dxdz = textureSample(
			Dx_Dy_Dz_Dxdz_spatial,
			displacement_map_sampler,
			patch_uv,
			array_layer
		);

		let Dydx_Dydz_Dxdx_Dzdz = textureSample(
			Dydx_Dydz_Dxdx_Dzdz_spatial,
			displacement_map_sampler,
			patch_uv,
			array_layer
		);

		let Dydx = Dydx_Dydz_Dxdx_Dzdz.x;
		let Dydz = Dydx_Dydz_Dxdx_Dzdz.y;

		let Dxdz = Dx_Dy_Dz_Dxdz.w * f32(gerstner);
		let Dzdx = Dxdz;

		var Dxdx = Dydx_Dydz_Dxdx_Dzdz.z * f32(gerstner);
		var Dzdz = Dydx_Dydz_Dxdx_Dzdz.w * f32(gerstner);

		result.tangent += normal_lambda * vec3<f32>(Dxdx, Dydx, Dzdx);
		result.bitangent += normal_lambda * vec3<f32>(Dxdz, Dydz, Dzdz);

		let turbulence = textureSample(
			turbulence_jacobian,
			displacement_map_sampler,
			patch_uv,
			array_layer
		).x;
		turbulence_accumulated += normal_lambda * clamp(1.0 - turbulence, 0.0, 1.0);
		turbulence_max += max(normal_lambda, 0.1);
	}

	// TODO: this could use more rigour
	result.foam_strength = clamp(
		u_settings.foam_scale * (turbulence_accumulated / turbulence_max - u_settings.foam_bias),
		0.0,
		1.0
	);

	return result;
}

fn sampleOceanSurfaceTangentDifferentialFromWave(
	global_uv: vec2<f32>,
	wave: PlaneWave,
	time: f32,
	falloff_distance: f32,
	gerstner: bool,
) -> OceanSurfaceTangents
{
	let falloff_factor = (1.0 - smoothstep(0.0, falloff_distance, length(global_uv)));
    let wave_amplitude = falloff_factor * wave.amplitude;
    let wave_direction = normalize(wave.direction);
    let wavelength = wave.wavelength;

    let wave_number = 2.0 * 3.141592653589793 / wavelength;

	// TODO: parameterize this in ubo (like how the FFT waves do it)
    let gravity = 9.8;

    // Dispersion relationship for deep ocean waves
    // wave_speed = sqrt(gravity / wave_number)
    // angular_frequency = wave_speed * wave_number
    let angular_frequency = sqrt(gravity * wave_number);

    let wave_vector = wave_direction * wave_number;

    let theta = dot(global_uv, wave_vector) - angular_frequency * time;
    let sin_theta = sin(theta);
    let cos_theta = cos(theta);

    var result: OceanSurfaceTangents;

    // partial derivatives computed exactly via the above formula
    // Note these vectors are parallel, since wave only displaces in travel direction
    result.tangent = vec3<f32>(
        - wave_amplitude * wave_direction.x * cos_theta * wave_vector.x,
        - wave_amplitude * sin_theta * wave_vector.x,
        - wave_amplitude * wave_direction.y * cos_theta * wave_vector.x,
    );
    result.bitangent = vec3<f32>(
        - wave_amplitude * wave_direction.x * cos_theta * wave_vector.y,
        - wave_amplitude * sin_theta * wave_vector.y,
        - wave_amplitude * wave_direction.y * cos_theta * wave_vector.y,
    );
	result.foam_strength = 0.0;

	if(!gerstner)
	{
		result.tangent.x = 0.0;
		result.tangent.z = 0.0;

		result.bitangent.x = 0.0;
		result.bitangent.z = 0.0;
	}

    return result;
}

fn getOceanSurfaceTangents(
	global_uv: vec2<f32>,
	cascade_normal_weights: array<f32,CASCADE_CAPACITY>,
) -> OceanSurfaceTangents
{
	var result: OceanSurfaceTangents;
	/*
	 * The derivative of the sum of all waves is the sum of the derivatives.
	 * Thus, the unperturbed tangent T=(1,0,0) (which comes from d/dx(x,y,z))
	 * is summed with the tangent differentials dT=d/dx(Dx,Dy,Dz) for each
	 * contribution, where (Dx,Dy,Dz) is the displacement due to the wave as a
	 * function of (x,y,z).
	 * Same for bitangent, just replace d/dx with d/dz
	 */
    result.tangent = vec3<f32>(1.0, 0.0, 0.0);
    result.bitangent = vec3<f32>(0.0, 0.0, 1.0);
	result.foam_strength = 0.0;

	let gerstner = u_settings.b_gerstner == 1u;
	if(u_settings.b_displacement_map == 1u)
	{
		let sample: OceanSurfaceTangents = sampleOceanSurfaceTangentDifferentialFromMap(
			global_uv,
			cascade_normal_weights,
			gerstner
		);

		result.tangent += sample.tangent;
		result.bitangent += sample.bitangent;
		result.foam_strength += sample.foam_strength;
	}
	else
	{
		var sample: OceanSurfaceTangents;

		for (var i = 0u; i < WAVE_COUNT; i++)
		{
			sample = sampleOceanSurfaceTangentDifferentialFromWave(
				global_uv,
				u_waves[i],
				u_global.time.time_seconds,
				u_settings.patch_world_half_extent,
				gerstner
			);

			result.tangent += sample.tangent;
			result.bitangent += sample.bitangent;
			result.foam_strength += sample.foam_strength / f32(WAVE_COUNT);
		}
	}

	result.tangent = normalize(result.tangent);
	result.bitangent = normalize(result.bitangent);

	return result;
}

@fragment
fn rasterizationFragment(frag_interpolated: VertexOut) -> FragmentOut
{
    var output : FragmentOut;

    output.color_with_surface_world_depth_in_alpha = vec4<f32>(
		frag_interpolated.color,
		frag_interpolated.camera_distance
	);

	var cascade_normal_weights = array<f32, CASCADE_CAPACITY>();
	cascade_normal_weights[0] = frag_interpolated.cascade_1234_normal_weights.x;
	cascade_normal_weights[1] = frag_interpolated.cascade_1234_normal_weights.y;
	cascade_normal_weights[2] = frag_interpolated.cascade_1234_normal_weights.z;
	cascade_normal_weights[3] = frag_interpolated.cascade_1234_normal_weights.w;

	let surface = getOceanSurfaceTangents(
		frag_interpolated.global_uv,
		cascade_normal_weights,
	);

	// reverse left-handed WGSL coordinates
	let normal = normalize(-cross(surface.tangent, surface.bitangent));

    output.world_normal_with_surface_foam_strength_in_alpha = vec4<f32>(normal, surface.foam_strength);
    return output;
}
`;class c_ extends Ai{constructor(o){super(o,8,"Wave Surface Displacement Patch World Half Extent UBO");q(this,"data",{patch_world_half_extent:50,b_gerstner:!0,b_fft:!0,gbuffer_extent:Mt.create(1,1),foam_scale:1,foam_bias:0})}packed(){const o=new ArrayBuffer(this.buffer.size),f=new DataView(o),_=new Float32Array(o);return f.setFloat32(0,this.data.patch_world_half_extent,!0),f.setUint32(4,this.data.b_gerstner?1:0,!0),f.setUint32(8,this.data.b_fft?1:0,!0),f.setFloat32(12,0,!0),_.set(this.data.gbuffer_extent,4),f.setFloat32(24,this.data.foam_scale,!0),f.setFloat32(28,this.data.foam_bias,!0),o}}class d_{constructor(i,o,f,_,w,x){q(this,"group0");q(this,"group1");q(this,"group2ByTurbulenceMapIndex");q(this,"settingsUBO");q(this,"vertexDimension");q(this,"lodCount");q(this,"baseIndexCount");q(this,"mipLevelCount");q(this,"indices");q(this,"oceanSurfaceRasterizationPipeline");this.vertexDimension=1e3;const b=4,N=3*(2*999*999);this.baseIndexCount=N;const I=10;this.lodCount=I,this.indices=i.createBuffer({size:N*b,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX,label:"Wave Surface Displacement Indices"});const F=new Uint32Array(N);let X=0;for(let xe=0;xe<999;xe++)for(let ze=0;ze<999;ze++){const Se=ze+xe*1e3,Xe=Se+1,qe=Se+1e3,Ve=qe+1,se=new Uint32Array([Se,qe,Xe,Xe,qe,Ve]);F.set(se,X),X+=se.length}i.queue.writeBuffer(this.indices,0,F);const Q=12,Z=4,ee=4*Z,W=i.createBuffer({size:Q*ee,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM,label:"Wave Surface Displacement Waves"}),J=9.8,ue=60,fe=ue*ue*J/(2*Math.PI),Le=new Array({direction:Mt.create(.4,2),amplitude:.25,wavelength:fe/(12*12)},{direction:Mt.create(.6,2),amplitude:.3,wavelength:fe/(14*14)},{direction:Mt.create(.8,2),amplitude:.35,wavelength:fe/(12*12)},{direction:Mt.create(1,2),amplitude:.4,wavelength:fe/(16*16)},{direction:Mt.create(1.2,2),amplitude:.45,wavelength:fe/(12*12)},{direction:Mt.create(1.4,2),amplitude:.4,wavelength:fe/(14*14)},{direction:Mt.create(1.6,2),amplitude:.35,wavelength:fe/(12*12)},{direction:Mt.create(1.8,2),amplitude:.3,wavelength:fe/(16*16)},{direction:Mt.create(.8,1.5),amplitude:.02,wavelength:fe/(30*30)},{direction:Mt.create(1.1,1.5),amplitude:.02,wavelength:fe/(30*30)},{direction:Mt.create(1.2,1.5),amplitude:.02,wavelength:fe/(30*30)},{direction:Mt.create(1.3,1.5),amplitude:.02,wavelength:fe/(30*30)}),Ce=new Float32Array(Q*Z);let ke=0;Le.forEach(xe=>{Ce.set(xe.direction,ke),Ce[ke+2]=xe.amplitude,Ce[ke+3]=xe.wavelength,ke+=4}),i.queue.writeBuffer(W,0,Ce),this.settingsUBO=new c_(i);const We=i.createBindGroupLayout({label:"Wave Surface Displacement Group 1 Compute (Displacement Map)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:3,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]});this.group1=i.createBindGroup({label:"Wave Surface Displacement Group 1 Compute (Displacement Map)",layout:We,entries:[{binding:0,resource:i.createSampler({label:"Wave Surface Displacement Group 1 Sampler",minFilter:"linear",magFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"})},{binding:1,resource:x.Dx_Dy_Dz_Dxdz_SpatialAllMips},{binding:2,resource:x.Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips},{binding:3,resource:{buffer:W}}]}),this.mipLevelCount=x.mipLevelCount;const Fe=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}}]});this.group2ByTurbulenceMapIndex=x.turbulenceJacobianOneMip.map((xe,ze)=>i.createBindGroup({label:`Wave Surface Displacement Group 2 Compute (Turbulence) index ${ze}`,layout:Fe,entries:[{binding:0,resource:xe}]}));const Ne=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}],label:"Wave Surface Displacement Group 0"});this.group0=i.createBindGroup({layout:Ne,entries:[{binding:0,resource:{buffer:this.settingsUBO.buffer}},{binding:1,resource:{buffer:o.buffer}}],label:"Wave Surface Displacement Group 0"});const Qe=i.createShaderModule({code:u_,label:"Wave Surface Displacement"});this.oceanSurfaceRasterizationPipeline=i.createRenderPipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Ne,We,Fe]}),vertex:{module:Qe,entryPoint:"screenSpaceWarped"},fragment:{module:Qe,entryPoint:"rasterizationFragment",targets:[{format:f},{format:_}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},depthStencil:{format:w,depthWriteEnabled:!0,depthCompare:"less"},label:"Wave Surface Displacement Surface Rasterization"})}record(i,o,f,_,w,x){this.settingsUBO.data.patch_world_half_extent=w.fft?100:300,this.settingsUBO.data.b_gerstner=w.gerstner,this.settingsUBO.data.b_fft=w.fft,this.settingsUBO.data.foam_bias=w.foamBias,this.settingsUBO.data.gbuffer_extent=x.extent,this.settingsUBO.data.foam_scale=w.foamScale,this.settingsUBO.writeToGPU(i.queue);const z=o.beginRenderPass({label:"Wave Surface Rasterization",colorAttachments:[{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:x.colorWithSurfaceWorldDepthInAlpha},{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:x.normalWithSurfaceFoamInAlpha}],depthStencilAttachment:{view:x.depth,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"},timestampWrites:f!==void 0?{querySet:f.querySet,beginningOfPassWriteIndex:f.beginWriteIndex,endOfPassWriteIndex:f.endWriteIndex}:void 0});z.setPipeline(this.oceanSurfaceRasterizationPipeline),z.setBindGroup(0,this.group0),z.setBindGroup(1,this.group1),z.setBindGroup(2,this.group2ByTurbulenceMapIndex[_]),z.setIndexBuffer(this.indices,"uint32"),z.drawIndexed(this.baseIndexCount,1),z.end()}}const f_=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
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
@group(2) @binding(1) var gbuffer_normal_with_surface_foam_strength_in_alpha: texture_2d<f32>;

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

fn convertPBRPropertiesWater(color: vec3<f32>, normal: vec3<f32>, foam: f32) -> PBRTexel
{
    let metallic = 1.0;

	let foam_intensity = foam;

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

	// Reflected luminance from the sky
	let sky_luminance = sampleSkyViewLUT(atmosphere, surface_position, reflection_direction);
	light_luminance_transfer +=
		transmittance_to_surface
		* sky_luminance
		* computeFresnelPerfectReflection(material, reflection_direction);

	// Reflected and scattered luminance directly from light
	let light_luminance = surface_transmittance_to_sun
		* sunFractionOfRadianceVisible(atmosphere, light, surface_position, light_direction);
	light_luminance_transfer +=
		transmittance_to_surface
		* light_luminance
		* mix(
			specularBRDF(material, light_direction, -direction),
			diffuseBRDF(material),
			computeFresnelMicrofacet(material, light_direction, -direction)
		);

	// Scattered luminance from below the sea (mostly near-surface interactions)
	let sky_visible_solid_angle = mix(0.0, 2.0 * PI, 0.5 * dot(vec3<f32>(0.0, 1.0, 0.0), material.normal) + 0.5);
	let sky_indirect_radiance = sampleSkyViewLUT(atmosphere, surface_position, reflect(-light_direction, vec3<f32>(0.0,1.0,0.0)));
	let sea_luminance = diffuseBRDF(material) * sky_visible_solid_angle * sky_indirect_radiance;
	light_luminance_transfer += transmittance_to_surface * sea_luminance;

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
    let normal_with_surface_foam_strength_in_alpha = textureLoad(gbuffer_normal_with_surface_foam_strength_in_alpha, texel_coord, 0);
	let normal = normal_with_surface_foam_strength_in_alpha.xyz;
	let foam_strength = normal_with_surface_foam_strength_in_alpha.w;

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
            let material: PBRTexel = convertPBRPropertiesWater(
				vec3<f32>(1.0),
				vec3<f32>(0.0,1.0,0.0),
				1.0
			);
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
        let material: PBRTexel = convertPBRPropertiesWater(
			color,
			normal.xyz,
			foam_strength
		);
        luminance_transfer = sampleGeometryLuminance(&atmosphere, &light, material, origin, direction_world, depth, true);
    }

    let luminance = light.strength * light.color * luminance_transfer;

    let output = vec4<f32>(tonemapACES(luminance),1.0);

    textureStore(output_color, texel_coord, output);
}
`,md="rgba16float";class p_{constructor(i,o,f,_,w,x,z){q(this,"group0Layout");q(this,"group1Layout");q(this,"lutSampler");q(this,"group0");q(this,"group1");q(this,"outputColor");q(this,"outputColorView");q(this,"pipeline");this.group0Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:md}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:x?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:x?"float":"unfilterable-float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:x?"float":"unfilterable-float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:x?"float":"unfilterable-float",viewDimension:"2d"}}],label:"Atmosphere Camera Group 0"}),this.group1Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Atmosphere Camera Group 1"}),this.outputColor=i.createTexture({format:md,size:{width:1,height:1},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Atmosphere Camera Output Color"}),this.outputColorView=this.outputColor.createView(),this.lutSampler=i.createSampler({label:"Atmosphere Camera LUT Sampler",magFilter:x?"linear":"nearest",minFilter:x?"linear":"nearest"}),this.group0=i.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:this.outputColorView},{binding:1,resource:this.lutSampler},{binding:2,resource:f},{binding:3,resource:_},{binding:4,resource:w}],label:"Atmosphere Camera Group 0"}),this.group1=i.createBindGroup({layout:this.group1Layout,entries:[{binding:0,resource:{buffer:z.buffer}}],label:"Atmosphere Camera Group 1"});const b=i.createShaderModule({code:f_,label:"Atmosphere Camera"});this.pipeline=i.createComputePipeline({compute:{module:b,entryPoint:"renderCompositedAtmosphere"},layout:i.createPipelineLayout({bindGroupLayouts:[this.group0Layout,this.group1Layout,o]}),label:"Atmosphere Camera"})}}const h_=`// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

@group(0) @binding(0) var b_texture: texture_2d<f32>;
@group(0) @binding(0) var b_texture_array: texture_2d_array<f32>;
@group(0) @binding(1) var b_sampler: sampler;

struct FullscreenQuadUBO
{
    color_gain: vec4<f32>,
    vertex_scale: vec4<f32>,
	padding0: vec2<f32>,
	array_layer: u32,
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
fn vertexMain(@builtin(vertex_index) index : u32) -> VertexOut
{
    var output : VertexOut;
    output.position = u_fullscreen_quad.vertex_scale * QUAD_VERTICES[index];
    output.uv = QUAD_UVS[index];
    return output;
}

@fragment
fn fragmentMain(fragData: VertexOut) -> @location(0) vec4<f32>
{
    let color = u_fullscreen_quad.color_gain * textureSampleLevel(b_texture, b_sampler, fragData.uv, f32(u_fullscreen_quad.mip_level));
    return vec4<f32>(color.xyz, 1.0);
}

@fragment
fn fragmentMainArray(fragData: VertexOut) -> @location(0) vec4<f32>
{
    let color = u_fullscreen_quad.color_gain * textureSampleLevel(b_texture_array, b_sampler, fragData.uv, u_fullscreen_quad.array_layer, f32(u_fullscreen_quad.mip_level));
    return vec4<f32>(color.xyz, 1.0);
}
`;class Od{constructor(){q(this,"color_gain",mr.create(1,1,1,1));q(this,"vertex_scale",mr.create(1,1,1,1));q(this,"padding0",Mt.create());q(this,"array_layer_u32",0);q(this,"mip_level_u32",0)}}class m_ extends Ai{constructor(o){super(o,12,"Fullscreen Quad UBO");q(this,"data",new Od)}packed(){const o=new ArrayBuffer(this.buffer.size),f=new DataView(o);return new Float32Array(o).set(this.data.color_gain,0/4),new Float32Array(o).set(this.data.vertex_scale,16/4),f.setUint32(40,this.data.array_layer_u32,!0),f.setUint32(44,this.data.mip_level_u32,!0),o}}class __{constructor(i,o){q(this,"group0Layout");q(this,"group0LayoutArray");q(this,"group0ByOutputTexture");q(this,"group0Sampler");q(this,"ubo");q(this,"fullscreenQuadIndexBuffer");q(this,"group1");q(this,"pipeline");q(this,"arrayPipeline");const f=new Uint32Array([0,1,2,0,2,3]);this.fullscreenQuadIndexBuffer=i.createBuffer({size:f.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),i.queue.writeBuffer(this.fullscreenQuadIndexBuffer,0,f,0,f.length),this.group0Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"non-filtering"}}],label:"Fullscreen Quad Group 0"}),this.group0LayoutArray=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d-array",sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"non-filtering"}}],label:"Fullscreen Quad Group 0 Array"}),this.group0ByOutputTexture=new Map,this.group0Sampler=i.createSampler({magFilter:"nearest",minFilter:"nearest"}),this.ubo=new m_(i);const _=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}}],label:"Fullscreen Quad Group 1"});this.group1=i.createBindGroup({layout:_,entries:[{binding:0,resource:{buffer:this.ubo.buffer}}]});const w=i.createShaderModule({code:h_,label:"Fullscreen Quad"});this.pipeline=i.createRenderPipeline({vertex:{module:w,entryPoint:"vertexMain"},fragment:{module:w,entryPoint:"fragmentMain",targets:[{format:o}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:i.createPipelineLayout({bindGroupLayouts:[this.group0Layout,_]}),label:"Fullscreen Quad"}),this.arrayPipeline=i.createRenderPipeline({vertex:{module:w,entryPoint:"vertexMain"},fragment:{module:w,entryPoint:"fragmentMainArray",targets:[{format:o}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:i.createPipelineLayout({bindGroupLayouts:[this.group0LayoutArray,_]}),label:"Fullscreen Quad"})}setView(i,o,f,_){this.group0ByOutputTexture.set(o,{array:_,bindGroup:i.createBindGroup({layout:_?this.group0LayoutArray:this.group0Layout,entries:[{binding:0,resource:f},{binding:1,resource:this.group0Sampler}],label:`Fullscreen Quad Group 0 Texture '${f.label}'`})})}recordPresent(i,o,f,_,w,x){const z={r:0,g:0,b:0,a:1},b=this.group0ByOutputTexture.get(_);if(b===void 0){console.warn("FullscreenQuadPass: No texture to output.");return}const D=o.beginRenderPass({colorAttachments:[{clearValue:z,loadOp:"clear",storeOp:"store",view:f}],timestampWrites:x!==void 0?{querySet:x.querySet,beginningOfPassWriteIndex:x.beginWriteIndex,endOfPassWriteIndex:x.endWriteIndex}:void 0,label:"Fullscreen Pass"});this.ubo.data=w,this.ubo.writeToGPU(i.queue),D.setIndexBuffer(this.fullscreenQuadIndexBuffer,"uint32",0,this.fullscreenQuadIndexBuffer.size),D.setBindGroup(1,this.group1),D.setPipeline(b.array?this.arrayPipeline:this.pipeline),D.setBindGroup(0,b.bindGroup),D.drawIndexed(6,1,0,0,0),D.end()}}const qo={width:2048,height:1024},Ho={width:1024,height:1024},$o={width:1024,height:512};class jo{constructor(){q(this,"flip",!1);q(this,"colorGain",{r:1,g:1,b:1});q(this,"mipLevel",0);q(this,"arrayLayer",0)}}const g_=[{id:Ue.Scene},{id:Ue.TransmittanceLUT,flip:!0},{id:Ue.MultiscatterLUT,flip:!0},{id:Ue.SkyviewLUT,colorGain:{r:8,g:8,b:8}},{id:Ue.GBufferColor},{id:Ue.GBufferNormal},{id:Ue.FFTWaveSpectrumGaussianNoise},{id:Ue.FFTWaveInitialAmplitude,colorGain:{r:100,g:100,b:100}},{id:Ue.FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude,colorGain:{r:100,g:100,b:100}},{id:Ue.FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,colorGain:{r:100,g:100,b:100}},{id:Ue.FFTWaveDx_Dy_Dz_Dxdz_Spatial},{id:Ue.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial}],Ga=[.25,.3333,.5,.75,1,1.5,2,4];var Ha=(a=>(a[a.DrawToDraw=0]="DrawToDraw",a[a.SkyviewLUT=1]="SkyviewLUT",a[a.FFTWaves=2]="FFTWaves",a[a.OceanSurface=3]="OceanSurface",a[a.AtmosphereCamera=4]="AtmosphereCamera",a[a.FullscreenQuad=5]="FullscreenQuad",a))(Ha||{});class _d{constructor(i){q(this,"values");q(this,"sum",0);q(this,"average_",0);q(this,"count",0);q(this,"index",0);this.values=new Array(i).fill(0)}get average(){return this.average_}push(i){this.index>=this.values.length&&(this.index=0),this.index<this.count&&(this.sum-=this.values[this.index]),this.values[this.index]=i,this.sum+=i,this.count=Math.min(this.values.length,this.count+1),this.average_=this.sum/this.count,this.index+=1}}class v_{constructor(i,o,f){q(this,"transmittanceLUTPassResources");q(this,"multiscatterLUTPassResources");q(this,"skyviewLUTPassResources");q(this,"fftWaveSpectrumResources");q(this,"waveSurfaceDisplacementPassResources");q(this,"atmosphereCameraPassResources");q(this,"fullscreenQuadPassResources");q(this,"gbuffer");q(this,"scaledSize");q(this,"rawSize");q(this,"renderOutputs");q(this,"settings");q(this,"uiReadonly");q(this,"globalUBO");q(this,"device");q(this,"presentFormat");q(this,"quit",!1);q(this,"frametimeQuery");q(this,"frametimeAverages");q(this,"startTime");q(this,"dummyFrameCounter");q(this,"probationFrameCounter");q(this,"targetFPS",0);q(this,"float32Filterable");if(this.device=i,this.float32Filterable=i.features.has("float32-filterable"),this.presentFormat=o,this.startTime=f,this.settings={outputTexture:Ue.Scene,oceanSurfaceSettings:{gerstner:!0,fft:!0,foamScale:5,foamBias:.25},fourierWavesSettings:{gravity:9.8,windSpeedMetersPerSeconds:10,windFetchMeters:10*1e3,waveSwell:.3},renderOutputTransforms:new Map,pauseGlobalTime:!1,currentRenderOutputTransform:new jo,orbit:{timeHours:5.6,timeSpeedupFactor:400,paused:!1,reversed:!1,inclinationRadians:Math.PI/2,sunsetAzimuthRadians:0},renderScale:1.5},this.uiReadonly={averageFPS:0,frametimeControllers:new Map},this.scaledSize={width:1,height:1},this.rawSize={width:1,height:1},g_.reduce((z,{id:b,...D})=>(z.set(b,{...new jo,...D}),z),this.settings.renderOutputTransforms),this.settings.renderOutputTransforms.has(this.settings.outputTexture)){const z=this.settings.renderOutputTransforms.get(this.settings.outputTexture);this.settings.currentRenderOutputTransform.flip=z.flip,this.settings.currentRenderOutputTransform.colorGain.r=z.colorGain.r,this.settings.currentRenderOutputTransform.colorGain.g=z.colorGain.g,this.settings.currentRenderOutputTransform.colorGain.b=z.colorGain.b}if(this.frametimeAverages=new Map,i.features.has("timestamp-query")){const b=2*Object.keys(Ha).map(D=>Number(D)).filter(isNaN).length;this.frametimeQuery={mappingLock:!1,querySet:i.createQuerySet({type:"timestamp",count:b}),writeBuffer:i.createBuffer({size:8*b,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE}),readBuffer:i.createBuffer({size:8*b,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})},Object.keys(Ha).map(D=>Number(D)).filter(D=>!isNaN(D)).forEach(D=>{const N=D;this.frametimeAverages.set(N,new _d(400)),Object.assign(this.uiReadonly,String(N),0)})}else console.warn("WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages."),this.frametimeAverages.set(0,new _d(400));this.dummyFrameCounter=10,this.probationFrameCounter=100,this.globalUBO=new Nm(this.device),this.globalUBO.writeToGPU(this.device.queue),this.gbuffer=new cd(i,{width:1,height:1}),this.transmittanceLUTPassResources=new Hm(this.device,qo,this.globalUBO),this.multiscatterLUTPassResources=new jm(this.device,Ho,this.transmittanceLUTPassResources.view,this.float32Filterable,this.globalUBO),this.skyviewLUTPassResources=new Ym(this.device,$o,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.float32Filterable,this.globalUBO),this.fftWaveSpectrumResources=new l_(this.device,this.globalUBO);const _=this.fftWaveSpectrumResources.views();this.waveSurfaceDisplacementPassResources=new d_(this.device,this.globalUBO,this.gbuffer.colorWithSurfaceWorldDepthInAlpha.format,this.gbuffer.normalWithSurfaceFoamStrengthInAlpha.format,this.gbuffer.depth.format,this.fftWaveSpectrumResources.displacementMaps()),this.atmosphereCameraPassResources=new p_(this.device,this.gbuffer.readGroupLayout,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.skyviewLUTPassResources.view,this.float32Filterable,this.globalUBO),this.fullscreenQuadPassResources=new __(this.device,this.presentFormat),this.renderOutputs=new Map([[Ue.Scene,new It(this.atmosphereCameraPassResources.outputColor)],[Ue.TransmittanceLUT,new It(this.transmittanceLUTPassResources.texture)],[Ue.MultiscatterLUT,new It(this.multiscatterLUTPassResources.texture)],[Ue.SkyviewLUT,new It(this.skyviewLUTPassResources.texture)],[Ue.GBufferColor,new It(this.gbuffer.colorWithSurfaceWorldDepthInAlpha)],[Ue.GBufferNormal,new It(this.gbuffer.normalWithSurfaceFoamStrengthInAlpha)],[Ue.FFTWaveSpectrumGaussianNoise,_.gaussianNoise],[Ue.FFTWaveInitialAmplitude,_.initialAmplitude],[Ue.FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude,_.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude],[Ue.FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,_.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude],[Ue.FFTWaveTurbulenceJacobian,_.turbulenceJacobian],[Ue.FFTWaveDx_Dy_Dz_Dxdz_Spatial,_.Dx_Dy_Dz_Dxdz_Spatial],[Ue.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial,_.Dydx_Dydz_Dxdx_Dzdz_Spatial]]);for(const[z,b]of this.renderOutputs)this.fullscreenQuadPassResources.setView(i,z,b.view,b.depthOrArrayLayerCount>1);const w=i.createCommandEncoder();let x=w.beginComputePass();x.setPipeline(this.transmittanceLUTPassResources.pipeline),x.setBindGroup(0,this.transmittanceLUTPassResources.group0),x.setBindGroup(1,this.transmittanceLUTPassResources.group1),x.dispatchWorkgroups(Math.ceil(qo.width/16),Math.ceil(qo.height/16)),x.end(),x=w.beginComputePass(),x.setPipeline(this.multiscatterLUTPassResources.pipeline),x.setBindGroup(0,this.multiscatterLUTPassResources.group0),x.setBindGroup(1,this.multiscatterLUTPassResources.group1),x.dispatchWorkgroups(Math.ceil(Ho.width/16),Math.ceil(Ho.height/16)),x.end(),i.queue.submit([w.finish()])}setupUI(i){const o=i.add(this.settings,"outputTexture",{Scene:Ue.Scene,"Transmittance LUT":Ue.TransmittanceLUT,"Multiscatter LUT":Ue.MultiscatterLUT,"Skyview LUT":Ue.SkyviewLUT,"GBuffer Color":Ue.GBufferColor,"GBuffer Normal":Ue.GBufferNormal,"FFT Wave Gaussian Noise":Ue.FFTWaveSpectrumGaussianNoise,"FFT Wave Initial Amplitude":Ue.FFTWaveInitialAmplitude,"FFT Wave Frequency Domain (Dx + i * Dy, Dz + i * Dxdz)":Ue.FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude,"FFT Wave Frequency Domain (Dydx + i * Dydz, Dxdx + i * Dzdz)":Ue.FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,"FFT Wave (Turbulence, Jacobian)":Ue.FFTWaveTurbulenceJacobian,"FFT Wave Spatial Domain (Dx, Dy, Dz, Dxdz)":Ue.FFTWaveDx_Dy_Dz_Dxdz_Spatial,"FFT Wave Spatial Domain (Dydx, Dydz, Dxdx, Dzdx)":Ue.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial}).name("Render Output").listen();i.add(this.settings,"renderScale",Ga).name("Render Resolution Scale").decimals(1).onFinishChange(X=>{this.handleResize(this.rawSize.width,this.rawSize.height)}).listen(),i.add(this.uiReadonly,"averageFPS").decimals(1).disable().name("Average FPS").listen();const f=i.addFolder("Ocean Parameters").open();f.add(this.settings.oceanSurfaceSettings,"gerstner").name("Gerstner Waves"),f.add(this.settings.oceanSurfaceSettings,"fft").name("FFT Accelerated Waves"),f.add(this.settings,"pauseGlobalTime").name("Pause Waves"),f.add(this.settings.oceanSurfaceSettings,"foamScale").name("Foam Scale").min(-10).max(10),f.add(this.settings.oceanSurfaceSettings,"foamBias").name("Foam Bias").min(-1).max(1),f.add(this.settings.fourierWavesSettings,"gravity").name("Gravity (m / s^2)").min(.01).max(20),f.add(this.settings.fourierWavesSettings,"waveSwell").name("Wave Swell").min(.01).max(1),f.add(this.settings.fourierWavesSettings,"windFetchMeters").name("Wind Fetch (m)").min(1e3).max(100*1e3),f.add(this.settings.fourierWavesSettings,"windSpeedMetersPerSeconds").name("Wind Speed (m/s)").min(.01).max(100);const _=i.addFolder("Sun Parameters").open();_.add(this.settings.orbit,"timeHours").min(0).max(24).name("Time in Hours").listen(),_.add(this.settings.orbit,"timeSpeedupFactor").min(1).max(5e4).step(1).name("Time Multiplier"),_.add(this.settings.orbit,"paused").name("Pause Sun"),_.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?18+.5:6-.5}},"fn").name("Skip to Sunrise"),_.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?6+.5:18-.5}},"fn").name("Skip to Sunset"),_.add(this.settings.orbit,"reversed").name("Reverse Sun"),_.add(this.settings.orbit,"sunsetAzimuthRadians").name("Sun Azimuth").min(0).max(2*Math.PI),_.add(this.settings.orbit,"inclinationRadians").name("Sun Inclination").min(0).max(Math.PI);const w=i.addFolder("Output Transform").close();w.add(this.settings.currentRenderOutputTransform,"flip").name("Flip Image").listen();const x=w.add(this.settings.currentRenderOutputTransform,"mipLevel").min(0).max(0).step(1).name("Mip Level").listen(),z=w.add(this.settings.currentRenderOutputTransform,"arrayLayer").min(0).max(0).step(1).name("Array Layer").listen();w.add({gain:0},"gain").name("RGB").min(0).max(100).onChange(X=>{this.settings.currentRenderOutputTransform.colorGain.r=X,this.settings.currentRenderOutputTransform.colorGain.g=X,this.settings.currentRenderOutputTransform.colorGain.b=X});const b=w.add(this.settings.currentRenderOutputTransform.colorGain,"r").name("R").min(0).max(100).listen(),D=w.add(this.settings.currentRenderOutputTransform.colorGain,"g").name("G").min(0).max(100).listen(),N=w.add(this.settings.currentRenderOutputTransform.colorGain,"b").name("B").min(0).max(100).listen();o.onChange(X=>{const Q=o._listenPrevValue;this.settings.renderOutputTransforms.set(Q,structuredClone(this.settings.currentRenderOutputTransform)),Object.assign(this.settings.currentRenderOutputTransform,structuredClone(this.settings.renderOutputTransforms.get(X)??new jo));const Z=this.renderOutputs.get(X);Z!==void 0&&(x.max(Z.mipLevelCount-1),x.disable(Z.mipLevelCount==1),Z.mipLevelCount==1&&x.setValue(0),x.updateDisplay(),z.max(Z.depthOrArrayLayerCount-1),z.disable(Z.depthOrArrayLayerCount==1),Z.depthOrArrayLayerCount==1&&z.setValue(0),z.updateDisplay()),b.object=this.settings.currentRenderOutputTransform.colorGain,D.object=this.settings.currentRenderOutputTransform.colorGain,N.object=this.settings.currentRenderOutputTransform.colorGain});const I=this.renderOutputs.get(o.getValue());I!==void 0&&(x.max(I.mipLevelCount-1),x.disable(I.mipLevelCount==1),I.mipLevelCount==1&&x.setValue(0),x.updateDisplay(),z.max(I.depthOrArrayLayerCount-1),z.disable(I.depthOrArrayLayerCount==1),I.depthOrArrayLayerCount==1&&z.setValue(0),z.updateDisplay());const F=i.addFolder("Performance").close();this.frametimeAverages.forEach((X,Q)=>{this.uiReadonly.frametimeControllers.set(Q,F.add({value:0},"value").name(`${Ha[Q]} (ms)`).decimals(6).disable())})}updateOrbit(i){const o=this.settings.orbit;this.settings.orbit.paused||(o.timeHours+=(o.reversed?-1:1)*o.timeSpeedupFactor*i/36e5,o.timeHours=o.timeHours-Math.floor(o.timeHours/24)*24);const f=2*Math.PI/24,_=(12-o.timeHours)*f,w=Nt.create(-Math.sin(o.sunsetAzimuthRadians),0,Math.cos(o.sunsetAzimuthRadians)),x=Nt.create(Math.cos(o.sunsetAzimuthRadians)*Math.cos(o.inclinationRadians),Math.sin(o.inclinationRadians),Math.sin(o.sunsetAzimuthRadians)*Math.cos(o.inclinationRadians)),z=Nt.add(Nt.scale(w,Math.sin(_)),Nt.scale(x,Math.cos(_)));Nt.scale(z,-1,this.globalUBO.data.light.forward)}updateFPSValues(i){var o,f,_,w;i>.01&&((o=this.frametimeAverages.get(0))==null||o.push(i),this.uiReadonly.averageFPS=1e3/(((f=this.frametimeAverages.get(0))==null?void 0:f.average)??1e3),(w=this.uiReadonly.frametimeControllers.get(0))==null||w.setValue(((_=this.frametimeAverages.get(0))==null?void 0:_.average)??-1))}updateCamera(i){const o=60*Math.PI/180,w=Kt.perspective(o,i,.1,1e3),x=[0,10,-20],z=Kt.lookAt(x,[0,0,400],[0,1,0]);Object.assign(this.globalUBO.data.camera,{invProj:Kt.inverse(w),invView:Kt.inverse(z),projView:Kt.mul(w,z),position:mr.create(x[0],x[1],x[2],1)})}updateTime(i){const o=this.globalUBO.data.time;this.settings.pauseGlobalTime?o.deltaTimeSeconds=0:(o.deltaTimeSeconds=i/1e3,o.timeSeconds+=o.deltaTimeSeconds);const w=this.settings.oceanSurfaceSettings.fft?100:60;o.timeSeconds-=Math.floor(o.timeSeconds/w)*w}draw(i,o,f,_){if(this.dummyFrameCounter>0){this.dummyFrameCounter-=1;return}const w=i.createView();if(this.updateFPSValues(_),this.probationFrameCounter>49){this.probationFrameCounter-=1,this.probationFrameCounter<50&&(console.log(`Average FPS without load is ${this.uiReadonly.averageFPS}`),this.targetFPS=this.uiReadonly.averageFPS);return}if(this.probationFrameCounter>0&&(this.probationFrameCounter-=1,this.probationFrameCounter<1)){console.log(`Average FPS with load is ${this.uiReadonly.averageFPS}`);const I=this.uiReadonly.averageFPS/this.targetFPS;this.settings.renderScale=Ga[0],Ga.forEach(F=>{Math.abs(F-I)<Math.abs(this.settings.renderScale-I)&&(this.settings.renderScale=F)}),this.handleResize(this.rawSize.width,this.rawSize.height)}this.updateCamera(o),this.updateTime(_),this.updateOrbit(_),this.globalUBO.writeToGPU(this.device.queue);const x=this.device.createCommandEncoder({label:"Main"}),z=new Map;let b=0;z.set(2,b),this.fftWaveSpectrumResources.record(this.device,x,this.settings.fourierWavesSettings,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:b++,endWriteIndex:b++}:void 0),z.set(3,b),this.waveSurfaceDisplacementPassResources.record(this.device,x,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:b++,endWriteIndex:b++}:void 0,this.fftWaveSpectrumResources.turbulenceMapIndex,{gerstner:this.settings.oceanSurfaceSettings.gerstner,fft:this.settings.oceanSurfaceSettings.fft,foamBias:this.settings.oceanSurfaceSettings.foamBias,foamScale:this.settings.oceanSurfaceSettings.foamScale},{extent:Mt.create(this.gbuffer.colorWithSurfaceWorldDepthInAlpha.width,this.gbuffer.colorWithSurfaceWorldDepthInAlpha.height),colorWithSurfaceWorldDepthInAlpha:this.gbuffer.colorWithSurfaceWorldDepthInAlphaView,normalWithSurfaceFoamInAlpha:this.gbuffer.normalWithSurfaceFoamStrengthInAlphaView,depth:this.gbuffer.depthView}),z.set(1,b);const D=x.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:b++,endOfPassWriteIndex:b++}:void 0,label:"Skyview LUT"});D.setPipeline(this.skyviewLUTPassResources.pipeline),D.setBindGroup(0,this.skyviewLUTPassResources.group0),D.setBindGroup(1,this.skyviewLUTPassResources.group1),D.dispatchWorkgroups(Math.ceil($o.width/16),Math.ceil($o.height/(16*1.9))),D.end(),z.set(4,b);const N=x.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:b++,endOfPassWriteIndex:b++}:void 0,label:"Atmosphere Camera"});N.setPipeline(this.atmosphereCameraPassResources.pipeline),N.setBindGroup(0,this.atmosphereCameraPassResources.group0),N.setBindGroup(1,this.atmosphereCameraPassResources.group1),N.setBindGroup(2,this.gbuffer.readGroup),N.dispatchWorkgroups(Math.ceil(this.atmosphereCameraPassResources.outputColor.width/16),Math.ceil(this.atmosphereCameraPassResources.outputColor.height/16)),N.end();{const I=this.settings.currentRenderOutputTransform,F=new Od;F.color_gain=mr.create(I.colorGain.r,I.colorGain.g,I.colorGain.b,1),F.vertex_scale=mr.create(1,I.flip?-1:1,1,1),F.mip_level_u32=Math.round(I.mipLevel),F.array_layer_u32=Math.round(I.arrayLayer),z.set(5,b),this.fullscreenQuadPassResources.recordPresent(this.device,x,w,this.settings.outputTexture,F,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:b++,endWriteIndex:b++}:void 0)}if(this.frametimeQuery!=null&&!this.frametimeQuery.mappingLock&&(x.resolveQuerySet(this.frametimeQuery.querySet,0,2*z.size,this.frametimeQuery.writeBuffer,0),x.copyBufferToBuffer(this.frametimeQuery.writeBuffer,0,this.frametimeQuery.readBuffer,0,this.frametimeQuery.readBuffer.size)),this.device.queue.submit([x.finish()]),this.frametimeQuery!==void 0&&!this.frametimeQuery.mappingLock){const I=this.frametimeQuery;this.frametimeQuery.mappingLock=!0,this.frametimeQuery.readBuffer.mapAsync(GPUMapMode.READ,0,this.frametimeQuery.readBuffer.size).then(()=>{const F=new BigInt64Array(I.readBuffer.getMappedRange(0,I.readBuffer.size));z.forEach((X,Q)=>{var W,J,ue;const ee=Number(F.at(X+1)-F.at(X))/1e6;(W=this.frametimeAverages.get(Q))==null||W.push(ee),(ue=this.uiReadonly.frametimeControllers.get(Q))==null||ue.setValue(((J=this.frametimeAverages.get(Q))==null?void 0:J.average)??-1)}),I.readBuffer.unmap(),I.mappingLock=!1}).catch(F=>{console.error("Failed while retrieving frametime values from GPU:"),console.error(F)})}}handleResize(i,o){const f={width:i*this.settings.renderScale,height:o*this.settings.renderScale},_=8192,w=268435456,x=16,z=(b,D)=>b<_&&D<_&&b*D*x<w;z(f.width,f.height)?this.scaledSize=f:(Ga.slice().reverse().some(b=>{if(z(i*b,o*b))return this.settings.renderScale=b,!0}),console.warn(`During resize: Texture size (${f.width},${f.height}) exceeds WebGPU guaranteed limit (8192, 8192).
								Defaulting to highest possible render scale of ${this.settings.renderScale}`),this.scaledSize={width:i*this.settings.renderScale,height:o*this.settings.renderScale}),console.log(`Resizing to (${this.scaledSize.width},${this.scaledSize.height})`),this.rawSize={width:i,height:o},this.gbuffer=new cd(this.device,this.scaledSize,this.gbuffer),this.renderOutputs.set(Ue.GBufferColor,new It(this.gbuffer.colorWithSurfaceWorldDepthInAlpha)),this.renderOutputs.set(Ue.GBufferNormal,new It(this.gbuffer.normalWithSurfaceFoamStrengthInAlpha)),this.atmosphereCameraPassResources.outputColor=this.device.createTexture({format:this.atmosphereCameraPassResources.outputColor.format,size:this.scaledSize,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.atmosphereCameraPassResources.outputColorView=this.atmosphereCameraPassResources.outputColor.createView(),this.renderOutputs.set(Ue.Scene,new It(this.atmosphereCameraPassResources.outputColor)),this.atmosphereCameraPassResources.group0=this.device.createBindGroup({layout:this.atmosphereCameraPassResources.group0Layout,entries:[{binding:0,resource:this.atmosphereCameraPassResources.outputColorView},{binding:1,resource:this.atmosphereCameraPassResources.lutSampler},{binding:2,resource:this.transmittanceLUTPassResources.view},{binding:3,resource:this.multiscatterLUTPassResources.view},{binding:4,resource:this.skyviewLUTPassResources.view}],label:"Atmosphere Camera Group 0"}),this.renderOutputs.forEach((b,D)=>{this.fullscreenQuadPassResources.setView(this.device,D,b.view,b.depthOrArrayLayerCount>1)})}}const y_=(a,i,o)=>new v_(a,i,o),w_="hello-cube",Fd={name:"Hello Cube",requiredLimits:new Map,requiredFeatures:new Set,optionalFeatures:new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]),description:"Tests WebGPU functionality with a simple spinning cube.",create:Em},ja=new Map([[w_,Fd],["sky-sea",{name:"Sky and Sea",description:"Real-time rendering of a dynamic sun over the open ocean, with various models for surface waves and raymarched atmospheric scattering.",requiredLimits:new Map([["maxStorageTexturesPerShaderStage",8]]),requiredFeatures:new Set,optionalFeatures:new Set(["timestamp-query","float32-filterable"]),create:y_}]]),x_=ce.jsx("a",{target:"_blank",rel:"noreferrer",href:"mailto:estelle.booher@gmail.com",children:"estelle.booher@gmail.com"}),S_=ce.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/EllarBooher",children:"https://github.com/EllarBooher"}),Ba=K.memo(function({hyperlink:i,thumbnailAssets:o=[],thumbnailAltTexts:f,title:_="PLACEHOLDER TITLE",description:w="PLACEHOLDER DESCRIPTION"}){const x=ce.jsx("div",{className:"display-card-thumbnails",children:o.map((z,b)=>ce.jsx("div",{className:"display-card-thumbnail",children:ce.jsx("img",{className:"display-card-image",src:z.toString(),alt:f[b]??null})},z.toString()))});return ce.jsxs(tr,{className:"nav-card",to:i,children:[ce.jsx("h2",{children:_}),ce.jsx("p",{children:w}),x]})});function T_(){const a=[];ja.forEach((f,_)=>{a.push(ce.jsx(Ba,{hyperlink:`/webgpu-samples?sample=${_}`,externalLink:!1,thumbnailAssets:[],thumbnailAltTexts:[],title:f.name,description:f.description},_))});const i=[ce.jsx(Ba,{hyperlink:"https://github.com/EllarBooher/Syzygy",thumbnailAssets:[new URL("/assets/syzygy1-CItzHwJc.png",import.meta.url)],thumbnailAltTexts:["A computer rendered sun rises over chess pieces. Application interface elements appear to the left and bottom."],title:"Syzygy",description:`
                A sandbox renderer I started to study C++ and Vulkan.
                It aims to be a testbed of various features and techniques.
            `},"Syzygy"),ce.jsx(Ba,{hyperlink:"https://github.com/EllarBooher/VulkanTemplate/tree/SSAO",thumbnailAssets:[new URL("/assets/ssao1-8Qfbb4oF.png",import.meta.url)],thumbnailAltTexts:["A computer rendered building, with various decorations such as banners and pillars. Only the shadows are visible, with no color information."],title:"SSAO",description:`
                An implementation of Screen-Space Ambient Occlusion written in C++ with Vulkan.
            `},"SSAO")],o=[ce.jsx(Ba,{hyperlink:"https://ellarbooher.itch.io/snail-blazer",thumbnailAssets:[new URL("/assets/snailblazer1-Bl1793QZ.png",import.meta.url),new URL("/assets/snailblazer2-CU4gYciB.png",import.meta.url)],thumbnailAltTexts:["A smirking cartoon character with yellow hair faces off against a grimacing cartoon character with blue hair. In the middle is an arena filled with magma and colorful battle effects.","A crying cartoon character with yellow hair faces off against a scowling cartoon character with blue hair. In the middle is an arena filled with magma and colorful battle effects."],title:"Snail Blazer",description:`
                A short bullet-hell made for the Bullet Hell Jam 2023 on itch.io.
                The player primarily moves via grappling on enemy projectiles and the environment,
                instead of the conventional WASD-style of movement.
            `},"Snail Blazer")];return ce.jsxs(ce.Fragment,{children:[ce.jsxs("main",{className:"landing-main",children:[ce.jsx("h1",{className:"visuallyhidden",children:"Portfolio Landing Page"}),ce.jsx("p",{children:"Hello, my name is Estelle Booher. My passion is realtime rendering and engine infrastructure, and I am actively working on building a portfolio and career in computer graphics. This website is a landing spot where I will host links to various projects of mine."}),ce.jsxs("p",{children:["My github is at ",S_,", where I host the source code of my projects including this website."]}),ce.jsxs("p",{children:["To contact me, please email at ",x_,"."]}),ce.jsx("h2",{children:"In-Browser WebGPU Samples"}),ce.jsx("nav",{className:"display-grid","aria-label":"WebGPU Samples",children:a}),ce.jsx("h2",{children:"Offline Computer Graphics"}),ce.jsx("nav",{className:"display-grid","aria-label":"Offline Computer Graphics",children:i}),ce.jsx("h2",{children:"Video Games"}),ce.jsx("nav",{className:"display-grid","aria-label":"Video Games",children:o})]}),ce.jsx("footer",{style:{padding:"1em"},children:"All works present are copyrighted, unless provided with external attributions or license."})]})}async function b_(a,i,o){if(console.log("Starting WebGPU"),!("gpu"in navigator))return Promise.reject(new Error("WebGPU is not available in this browser.",{cause:new Error("navigator.gpu is null")}));const f=navigator.gpu.requestAdapter().then(w=>w?Promise.resolve(w):Promise.reject(new Error("Requested WebGPU Adapter is not available."))).catch(w=>Promise.reject(new Error("Unable to get WebGPU Adapter",{cause:w}))),_=f.then(w=>{const x=Array.from(a.values()).filter(I=>w.features.has(I));if(x.length!=a.size){const I=`Required features unavailable: ${Array.from(a.values()).filter(F=>!w.features.has(F)).map(F=>`'${F}'`).join(",")}`;return Promise.reject(new Error("Unable to get WebGPU Device",{cause:I}))}const z=x.concat(...Array.from(i.values()).filter(I=>w.features.has(I)));console.log(`Enabling features: '${z.join("', '")}'`);const b=new Map,D=new Array;for(const[I,F]of o.entries()){const X=w.limits[I];X>=F?b.set(I,F):D.push({name:I,requestedMinimum:F,supported:X})}if(b.size<o.size){const I=`Required limits unsatisfied: ${D.map(F=>`( name: '${F.name}' supported: '${F.supported}' requested: '${F.requestedMinimum}' )`).join(",")}`;return Promise.reject(new Error("Unable to get WebGPU Device",{cause:I}))}const N={};for(const[I,F]of b)N[I]=F;return w.requestDevice({requiredFeatures:z,requiredLimits:N}).catch(I=>Promise.reject(new Error("Unable to get WebGPU Device",{cause:I})))});return Promise.all([f,_]).then(w=>{const[x,z]=w;return{adapter:x,device:z}})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class xn{constructor(i,o,f,_,w="div"){this.parent=i,this.object=o,this.property=f,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(w),this.domElement.classList.add("controller"),this.domElement.classList.add(_),this.$name=document.createElement("div"),this.$name.classList.add("name"),xn.nextNameID=xn.nextNameID||0,this.$name.id=`lil-gui-name-${++xn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",x=>x.stopPropagation()),this.domElement.addEventListener("keyup",x=>x.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(f)}name(i){return this._name=i,this.$name.textContent=i,this}onChange(i){return this._onChange=i,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(i=!0){return this.disable(!i)}disable(i=!0){return i===this._disabled?this:(this._disabled=i,this.domElement.classList.toggle("disabled",i),this.$disable.toggleAttribute("disabled",i),this)}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(i){const o=this.parent.add(this.object,this.property,i);return o.name(this._name),this.destroy(),o}min(i){return this}max(i){return this}step(i){return this}decimals(i){return this}listen(i=!0){return this._listening=i,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const i=this.save();i!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=i}getValue(){return this.object[this.property]}setValue(i){return this.getValue()!==i&&(this.object[this.property]=i,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(i){return this.setValue(i),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class E_ extends xn{constructor(i,o,f){super(i,o,f,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Jo(a){let i,o;return(i=a.match(/(#|0x)?([a-f0-9]{6})/i))?o=i[2]:(i=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?o=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(o=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),o?"#"+o:!1}const M_={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:Jo,toHexString:Jo},Mi={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},D_={isPrimitive:!1,match:a=>Array.isArray(a),fromHexString(a,i,o=1){const f=Mi.fromHexString(a);i[0]=(f>>16&255)/255*o,i[1]=(f>>8&255)/255*o,i[2]=(f&255)/255*o},toHexString([a,i,o],f=1){f=255/f;const _=a*f<<16^i*f<<8^o*f<<0;return Mi.toHexString(_)}},z_={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,i,o=1){const f=Mi.fromHexString(a);i.r=(f>>16&255)/255*o,i.g=(f>>8&255)/255*o,i.b=(f&255)/255*o},toHexString({r:a,g:i,b:o},f=1){f=255/f;const _=a*f<<16^i*f<<8^o*f<<0;return Mi.toHexString(_)}},A_=[M_,Mi,D_,z_];function P_(a){return A_.find(i=>i.match(a))}class R_ extends xn{constructor(i,o,f,_){super(i,o,f,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=P_(this.initialValue),this._rgbScale=_,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const w=Jo(this.$text.value);w&&this._setValueFromHexString(w)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(i){if(this._format.isPrimitive){const o=this._format.fromHexString(i);this.setValue(o)}else this._format.fromHexString(i,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(i){return this._setValueFromHexString(i),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Qo extends xn{constructor(i,o,f){super(i,o,f,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",_=>{_.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class L_ extends xn{constructor(i,o,f,_,w,x){super(i,o,f,"number"),this._initInput(),this.min(_),this.max(w);const z=x!==void 0;this.step(z?x:this._getImplicitStep(),z),this.updateDisplay()}decimals(i){return this._decimals=i,this.updateDisplay(),this}min(i){return this._min=i,this._onUpdateMinMax(),this}max(i){return this._max=i,this._onUpdateMinMax(),this}step(i,o=!0){return this._step=i,this._stepExplicit=o,this}updateDisplay(){const i=this.getValue();if(this._hasSlider){let o=(i-this._min)/(this._max-this._min);o=Math.max(0,Math.min(o,1)),this.$fill.style.width=o*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?i:i.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const o=()=>{let J=parseFloat(this.$input.value);isNaN(J)||(this._stepExplicit&&(J=this._snap(J)),this.setValue(this._clamp(J)))},f=J=>{const ue=parseFloat(this.$input.value);isNaN(ue)||(this._snapClampSetValue(ue+J),this.$input.value=this.getValue())},_=J=>{J.key==="Enter"&&this.$input.blur(),J.code==="ArrowUp"&&(J.preventDefault(),f(this._step*this._arrowKeyMultiplier(J))),J.code==="ArrowDown"&&(J.preventDefault(),f(this._step*this._arrowKeyMultiplier(J)*-1))},w=J=>{this._inputFocused&&(J.preventDefault(),f(this._step*this._normalizeMouseWheel(J)))};let x=!1,z,b,D,N,I;const F=5,X=J=>{z=J.clientX,b=D=J.clientY,x=!0,N=this.getValue(),I=0,window.addEventListener("mousemove",Q),window.addEventListener("mouseup",Z)},Q=J=>{if(x){const ue=J.clientX-z,fe=J.clientY-b;Math.abs(fe)>F?(J.preventDefault(),this.$input.blur(),x=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(ue)>F&&Z()}if(!x){const ue=J.clientY-D;I-=ue*this._step*this._arrowKeyMultiplier(J),N+I>this._max?I=this._max-N:N+I<this._min&&(I=this._min-N),this._snapClampSetValue(N+I)}D=J.clientY},Z=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",Q),window.removeEventListener("mouseup",Z)},ee=()=>{this._inputFocused=!0},W=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",o),this.$input.addEventListener("keydown",_),this.$input.addEventListener("wheel",w,{passive:!1}),this.$input.addEventListener("mousedown",X),this.$input.addEventListener("focus",ee),this.$input.addEventListener("blur",W)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const i=(W,J,ue,fe,Le)=>(W-J)/(ue-J)*(Le-fe)+fe,o=W=>{const J=this.$slider.getBoundingClientRect();let ue=i(W,J.left,J.right,this._min,this._max);this._snapClampSetValue(ue)},f=W=>{this._setDraggingStyle(!0),o(W.clientX),window.addEventListener("mousemove",_),window.addEventListener("mouseup",w)},_=W=>{o(W.clientX)},w=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",w)};let x=!1,z,b;const D=W=>{W.preventDefault(),this._setDraggingStyle(!0),o(W.touches[0].clientX),x=!1},N=W=>{W.touches.length>1||(this._hasScrollBar?(z=W.touches[0].clientX,b=W.touches[0].clientY,x=!0):D(W),window.addEventListener("touchmove",I,{passive:!1}),window.addEventListener("touchend",F))},I=W=>{if(x){const J=W.touches[0].clientX-z,ue=W.touches[0].clientY-b;Math.abs(J)>Math.abs(ue)?D(W):(window.removeEventListener("touchmove",I),window.removeEventListener("touchend",F))}else W.preventDefault(),o(W.touches[0].clientX)},F=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",I),window.removeEventListener("touchend",F)},X=this._callOnFinishChange.bind(this),Q=400;let Z;const ee=W=>{if(Math.abs(W.deltaX)<Math.abs(W.deltaY)&&this._hasScrollBar)return;W.preventDefault();const ue=this._normalizeMouseWheel(W)*this._step;this._snapClampSetValue(this.getValue()+ue),this.$input.value=this.getValue(),clearTimeout(Z),Z=setTimeout(X,Q)};this.$slider.addEventListener("mousedown",f),this.$slider.addEventListener("touchstart",N,{passive:!1}),this.$slider.addEventListener("wheel",ee,{passive:!1})}_setDraggingStyle(i,o="horizontal"){this.$slider&&this.$slider.classList.toggle("active",i),document.body.classList.toggle("lil-gui-dragging",i),document.body.classList.toggle(`lil-gui-${o}`,i)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(i){let{deltaX:o,deltaY:f}=i;return Math.floor(i.deltaY)!==i.deltaY&&i.wheelDelta&&(o=0,f=-i.wheelDelta/120,f*=this._stepExplicit?1:10),o+-f}_arrowKeyMultiplier(i){let o=this._stepExplicit?1:10;return i.shiftKey?o*=10:i.altKey&&(o/=10),o}_snap(i){let o=0;return this._hasMin?o=this._min:this._hasMax&&(o=this._max),i-=o,i=Math.round(i/this._step)*this._step,i+=o,i=parseFloat(i.toPrecision(15)),i}_clamp(i){return i<this._min&&(i=this._min),i>this._max&&(i=this._max),i}_snapClampSetValue(i){this.setValue(this._clamp(this._snap(i)))}get _hasScrollBar(){const i=this.parent.root.$children;return i.scrollHeight>i.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class U_ extends xn{constructor(i,o,f,_){super(i,o,f,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(_)}options(i){return this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this.$select.replaceChildren(),this._names.forEach(o=>{const f=document.createElement("option");f.textContent=o,this.$select.appendChild(f)}),this.updateDisplay(),this}updateDisplay(){const i=this.getValue(),o=this._values.indexOf(i);return this.$select.selectedIndex=o,this.$display.textContent=o===-1?i:this._names[o],this}}class C_ extends xn{constructor(i,o,f){super(i,o,f,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",_=>{_.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var k_=`.lil-gui {
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
}`;function I_(a){const i=document.createElement("style");i.innerHTML=a;const o=document.querySelector("head link[rel=stylesheet], head style");o?document.head.insertBefore(i,o):document.head.appendChild(i)}let gd=!1;class ul{constructor({parent:i,autoPlace:o=i===void 0,container:f,width:_,title:w="Controls",closeFolders:x=!1,injectStyles:z=!0,touchStyles:b=!0}={}){if(this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(w),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),b&&this.domElement.classList.add("allow-touch-styles"),!gd&&z&&(I_(k_),gd=!0),f?f.appendChild(this.domElement):o&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),_&&this.domElement.style.setProperty("--width",_+"px"),this._closeFolders=x}add(i,o,f,_,w){if(Object(f)===f)return new U_(this,i,o,f);const x=i[o];switch(typeof x){case"number":return new L_(this,i,o,f,_,w);case"boolean":return new E_(this,i,o);case"string":return new C_(this,i,o);case"function":return new Qo(this,i,o)}console.error(`gui.add failed
	property:`,o,`
	object:`,i,`
	value:`,x)}addColor(i,o,f=1){return new R_(this,i,o,f)}addFolder(i){const o=new ul({parent:this,title:i});return this.root._closeFolders&&o.close(),o}load(i,o=!0){return i.controllers&&this.controllers.forEach(f=>{f instanceof Qo||f._name in i.controllers&&f.load(i.controllers[f._name])}),o&&i.folders&&this.folders.forEach(f=>{f._title in i.folders&&f.load(i.folders[f._title])}),this}save(i=!0){const o={controllers:{},folders:{}};return this.controllers.forEach(f=>{if(!(f instanceof Qo)){if(f._name in o.controllers)throw new Error(`Cannot save GUI with duplicate property "${f._name}"`);o.controllers[f._name]=f.save()}}),i&&this.folders.forEach(f=>{if(f._title in o.folders)throw new Error(`Cannot save GUI with duplicate folder "${f._title}"`);o.folders[f._title]=f.save()}),o}open(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(i){this._closed!==i&&(this._closed=i,this._callOnOpenClose(this))}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const o=this.$children.clientHeight;this.$children.style.height=o+"px",this.domElement.classList.add("transition");const f=w=>{w.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",f))};this.$children.addEventListener("transitionend",f);const _=i?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!i),requestAnimationFrame(()=>{this.$children.style.height=_+"px"})}),this}title(i){return this._title=i,this.$title.textContent=i,this}reset(i=!0){return(i?this.controllersRecursive():this.controllers).forEach(f=>f.reset()),this}onChange(i){return this._onChange=i,this}_callOnChange(i){this.parent&&this.parent._callOnChange(i),this._onChange!==void 0&&this._onChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(i){this.parent&&this.parent._callOnFinishChange(i),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onOpenClose(i){return this._onOpenClose=i,this}_callOnOpenClose(i){this.parent&&this.parent._callOnOpenClose(i),this._onOpenClose!==void 0&&this._onOpenClose.call(this,i)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(i=>i.destroy())}controllersRecursive(){let i=Array.from(this.controllers);return this.folders.forEach(o=>{i=i.concat(o.controllersRecursive())}),i}foldersRecursive(){let i=Array.from(this.folders);return this.folders.forEach(o=>{i=i.concat(o.foldersRecursive())}),i}}const O_=function({app:i}){const o=K.useRef(),f=K.useRef(null),_=K.useRef(null),w=K.useRef(),x=K.useRef(),z=K.useCallback(()=>{var N;const D=f.current;if(D){const I=window.devicePixelRatio;D.width=D.offsetWidth*I,D.height=D.offsetHeight*I,(N=i.handleResize)==null||N.call(i,D.width,D.height)}},[i]);K.useEffect(()=>(z(),window.addEventListener("resize",z),()=>{window.removeEventListener("resize",z)}),[z]);const b=K.useCallback(D=>{var I;const N=(I=f.current)==null?void 0:I.getContext("webgpu");if(N){const F=D-(x.current?x.current:0);x.current=D;const X=N.getCurrentTexture();i.draw(X,f.current.width/f.current.height,D,F),i.quit||(o.current=requestAnimationFrame(b))}},[i]);return K.useEffect(()=>{var N,I;const D=(N=f.current)==null?void 0:N.getContext("webgpu");if(w.current&&((I=w.current)==null||I.destroy()),i.setupUI&&(w.current=new ul({container:_.current}),i.setupUI(w.current)),!D){console.error("'webgpu' canvas context not found, cannot animate.");return}return D.configure({device:i.device,format:i.presentFormat}),o.current=requestAnimationFrame(b),()=>{o.current!==void 0&&cancelAnimationFrame(o.current)}},[b,i]),ce.jsxs("div",{className:"canvas-container",children:[ce.jsx("canvas",{className:"sample-canvas",ref:f}),ce.jsx("div",{className:"gui-pane",ref:_})]})},F_=function({sample:i}){const[o,f]=K.useState(),_=K.useRef(),w=K.useRef(),[x,z]=K.useState(!1),b=K.useCallback(()=>{_.current&&(_.current.quit=!0)},[]),D=K.useCallback((X,Q)=>{_.current&&b(),console.log("Got WebGPU device, initializing sample app."),Q.lost.then(ee=>{console.log(`WebGPU device lost - ("${ee.reason}"):
 ${ee.message}`)},ee=>{throw new Error("WebGPU device lost rejected",{cause:ee})}),Q.onuncapturederror=ee=>{console.error(`WebGPU device uncaptured error: ${ee.error.message}`),f([ee.error.message]),b()};const Z=navigator.gpu.getPreferredCanvasFormat();_.current=i.create(Q,Z,performance.now()),console.log("Finished initializing app.")},[i,b]);K.useEffect(()=>{w.current||(z(!1),f(void 0),w.current=b_(i.requiredFeatures,i.optionalFeatures,i.requiredLimits).then(({adapter:X,device:Q})=>D(X,Q),X=>{var Q,Z;console.error(X),f([X.message,((Z=(Q=X.cause)==null?void 0:Q.toString)==null?void 0:Z.call(Q))??"Unknown Cause"]),_.current=void 0,z(!1)}).finally(()=>{w.current=void 0,z(!0)}))},[i,D]);const N=ce.jsxs(ce.Fragment,{children:[ce.jsx("p",{children:`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.`}),ce.jsx("ol",{className:"sample-errors",children:o==null?void 0:o.map(X=>ce.jsx("li",{children:X},X))})]}),I=ce.jsx("p",{children:"Loading..."}),F=ce.jsx("div",{className:"sample-text",children:o?N:I});return ce.jsx(ce.Fragment,{children:x&&_.current?ce.jsx(O_,{app:_.current}):F})},N_=K.memo(function(){const[i,o]=Ud(),f=[],_=[];ja.forEach((b,D)=>{const N=`/webgpu-samples?sample=${D}`;f.push(ce.jsx("li",{children:ce.jsx(tr,{to:N,children:b.name},D)},D)),_.push(ce.jsxs(tr,{className:"nav-card",to:N,children:[ce.jsx("h2",{children:b.name}),ce.jsx("p",{children:b.description})]},D))});const w=i.get("sample"),x=w?ja.get(w):void 0;if(w&&!x&&(i.delete("sample"),o(i)),x==null)return ce.jsx("main",{className:"sample",children:ce.jsxs("div",{className:"sample-text",children:[ce.jsx("h1",{children:"WebGPU Samples"}),ce.jsx("nav",{"aria-label":"WebGPU Samples",className:"nav-card-container",children:_})]})});const z=ce.jsxs("nav",{"aria-label":"WebGPU Samples",className:"sample-sidebar",children:[ce.jsx("h2",{children:"Samples"}),ce.jsx("hr",{}),ce.jsx("ul",{children:f})]});return ce.jsxs("main",{className:"sample",children:[ce.jsx("h1",{className:"visuallyhidden",children:"WebGPU Animated Sample"}),z,ce.jsx(F_,{sample:x})]})}),vd=new Map([["","Estelle Booher"],["webgpu-samples","WebGPU Samples"]]),G_=K.memo(function(){var x;const i=Tn(),[o,f]=Ud(),_=[ce.jsx(tr,{to:"/",children:vd.get("")},"root")];if(i.pathname!="/"){const z=i.pathname.substring(1).split("/");let b="/";_.push(...z.map((D,N)=>{const I=vd.get(D),F=N>0?"/":"";return b=b.concat(`${F}${D}`),ce.jsxs(K.Fragment,{children:[" > ",ce.jsx(tr,{to:b,children:I||D})]},b)}))}const w=o.get("sample");return w&&i.pathname=="/webgpu-samples"&&_.push(ce.jsxs(K.Fragment,{children:[" > ",ce.jsx(tr,{to:i.pathname+i.search,children:((x=ja.get(w))==null?void 0:x.name)??Fd.name})]},"sample-caboose")),ce.jsx("nav",{className:"main-nav","aria-label":"Main",children:_})});yd();const B_=document.getElementById("root");Fp.createRoot(B_).render(ce.jsx(K.StrictMode,{children:ce.jsxs(em,{children:[!1,ce.jsx(G_,{}),ce.jsxs(Ah,{children:[ce.jsx(Wa,{index:!0,element:ce.jsx(T_,{})}),ce.jsx(Wa,{path:"webgpu-samples",element:ce.jsx(N_,{})}),ce.jsx(Wa,{path:"*",element:ce.jsx(Dh,{to:"/",replace:!0})})]})]})}));
