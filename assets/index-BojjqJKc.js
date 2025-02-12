var bp=Object.defineProperty;var Ap=(a,i,o)=>i in a?bp(a,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[i]=o;var V=(a,i,o)=>Ap(a,typeof i!="symbol"?i+"":i,o);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))f(g);new MutationObserver(g=>{for(const w of g)if(w.type==="childList")for(const S of w.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&f(S)}).observe(document,{childList:!0,subtree:!0});function o(g){const w={};return g.integrity&&(w.integrity=g.integrity),g.referrerPolicy&&(w.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?w.credentials="include":g.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function f(g){if(g.ep)return;g.ep=!0;const w=o(g);fetch(g.href,w)}})();var Uo={exports:{}},Ti={},ko={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc;function Pp(){if(Nc)return Be;Nc=1;var a=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),S=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),N=Symbol.iterator;function F(I){return I===null||typeof I!="object"?null:(I=N&&I[N]||I["@@iterator"],typeof I=="function"?I:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,ee={};function te(I,ne,Me){this.props=I,this.context=ne,this.refs=ee,this.updater=Me||J}te.prototype.isReactComponent={},te.prototype.setState=function(I,ne){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ne,"setState")},te.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function X(){}X.prototype=te.prototype;function Z(I,ne,Me){this.props=I,this.context=ne,this.refs=ee,this.updater=Me||J}var ue=Z.prototype=new X;ue.constructor=Z,j(ue,te.prototype),ue.isPureReactComponent=!0;var he=Array.isArray,Ue=Object.prototype.hasOwnProperty,ke={current:null},Ce={key:!0,ref:!0,__self:!0,__source:!0};function We(I,ne,Me){var Se,Le={},Re=null,p=null;if(ne!=null)for(Se in ne.ref!==void 0&&(p=ne.ref),ne.key!==void 0&&(Re=""+ne.key),ne)Ue.call(ne,Se)&&!Ce.hasOwnProperty(Se)&&(Le[Se]=ne[Se]);var M=arguments.length-2;if(M===1)Le.children=Me;else if(1<M){for(var d=Array(M),m=0;m<M;m++)d[m]=arguments[m+2];Le.children=d}if(I&&I.defaultProps)for(Se in M=I.defaultProps,M)Le[Se]===void 0&&(Le[Se]=M[Se]);return{$$typeof:a,type:I,key:Re,ref:p,props:Le,_owner:ke.current}}function Ne(I,ne){return{$$typeof:a,type:I.type,key:ne,ref:I.ref,props:I.props,_owner:I._owner}}function Oe(I){return typeof I=="object"&&I!==null&&I.$$typeof===a}function je(I){var ne={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Me){return ne[Me]})}var De=/\/+/g;function Pe(I,ne){return typeof I=="object"&&I!==null&&I.key!=null?je(""+I.key):ne.toString(36)}function xe(I,ne,Me,Se,Le){var Re=typeof I;(Re==="undefined"||Re==="boolean")&&(I=null);var p=!1;if(I===null)p=!0;else switch(Re){case"string":case"number":p=!0;break;case"object":switch(I.$$typeof){case a:case i:p=!0}}if(p)return p=I,Le=Le(p),I=Se===""?"."+Pe(p,0):Se,he(Le)?(Me="",I!=null&&(Me=I.replace(De,"$&/")+"/"),xe(Le,ne,Me,"",function(m){return m})):Le!=null&&(Oe(Le)&&(Le=Ne(Le,Me+(!Le.key||p&&p.key===Le.key?"":(""+Le.key).replace(De,"$&/")+"/")+I)),ne.push(Le)),1;if(p=0,Se=Se===""?".":Se+":",he(I))for(var M=0;M<I.length;M++){Re=I[M];var d=Se+Pe(Re,M);p+=xe(Re,ne,Me,d,Le)}else if(d=F(I),typeof d=="function")for(I=d.call(I),M=0;!(Re=I.next()).done;)Re=Re.value,d=Se+Pe(Re,M++),p+=xe(Re,ne,Me,d,Le);else if(Re==="object")throw ne=String(I),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return p}function Ye(I,ne,Me){if(I==null)return I;var Se=[],Le=0;return xe(I,Se,"","",function(Re){return ne.call(Me,Re,Le++)}),Se}function He(I){if(I._status===-1){var ne=I._result;ne=ne(),ne.then(function(Me){(I._status===0||I._status===-1)&&(I._status=1,I._result=Me)},function(Me){(I._status===0||I._status===-1)&&(I._status=2,I._result=Me)}),I._status===-1&&(I._status=0,I._result=ne)}if(I._status===1)return I._result.default;throw I._result}var Ve={current:null},le={transition:null},ye={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:le,ReactCurrentOwner:ke};function se(){throw Error("act(...) is not supported in production builds of React.")}return Be.Children={map:Ye,forEach:function(I,ne,Me){Ye(I,function(){ne.apply(this,arguments)},Me)},count:function(I){var ne=0;return Ye(I,function(){ne++}),ne},toArray:function(I){return Ye(I,function(ne){return ne})||[]},only:function(I){if(!Oe(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Be.Component=te,Be.Fragment=o,Be.Profiler=g,Be.PureComponent=Z,Be.StrictMode=f,Be.Suspense=D,Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,Be.act=se,Be.cloneElement=function(I,ne,Me){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Se=j({},I.props),Le=I.key,Re=I.ref,p=I._owner;if(ne!=null){if(ne.ref!==void 0&&(Re=ne.ref,p=ke.current),ne.key!==void 0&&(Le=""+ne.key),I.type&&I.type.defaultProps)var M=I.type.defaultProps;for(d in ne)Ue.call(ne,d)&&!Ce.hasOwnProperty(d)&&(Se[d]=ne[d]===void 0&&M!==void 0?M[d]:ne[d])}var d=arguments.length-2;if(d===1)Se.children=Me;else if(1<d){M=Array(d);for(var m=0;m<d;m++)M[m]=arguments[m+2];Se.children=M}return{$$typeof:a,type:I.type,key:Le,ref:Re,props:Se,_owner:p}},Be.createContext=function(I){return I={$$typeof:S,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:w,_context:I},I.Consumer=I},Be.createElement=We,Be.createFactory=function(I){var ne=We.bind(null,I);return ne.type=I,ne},Be.createRef=function(){return{current:null}},Be.forwardRef=function(I){return{$$typeof:A,render:I}},Be.isValidElement=Oe,Be.lazy=function(I){return{$$typeof:G,_payload:{_status:-1,_result:I},_init:He}},Be.memo=function(I,ne){return{$$typeof:b,type:I,compare:ne===void 0?null:ne}},Be.startTransition=function(I){var ne=le.transition;le.transition={};try{I()}finally{le.transition=ne}},Be.unstable_act=se,Be.useCallback=function(I,ne){return Ve.current.useCallback(I,ne)},Be.useContext=function(I){return Ve.current.useContext(I)},Be.useDebugValue=function(){},Be.useDeferredValue=function(I){return Ve.current.useDeferredValue(I)},Be.useEffect=function(I,ne){return Ve.current.useEffect(I,ne)},Be.useId=function(){return Ve.current.useId()},Be.useImperativeHandle=function(I,ne,Me){return Ve.current.useImperativeHandle(I,ne,Me)},Be.useInsertionEffect=function(I,ne){return Ve.current.useInsertionEffect(I,ne)},Be.useLayoutEffect=function(I,ne){return Ve.current.useLayoutEffect(I,ne)},Be.useMemo=function(I,ne){return Ve.current.useMemo(I,ne)},Be.useReducer=function(I,ne,Me){return Ve.current.useReducer(I,ne,Me)},Be.useRef=function(I){return Ve.current.useRef(I)},Be.useState=function(I){return Ve.current.useState(I)},Be.useSyncExternalStore=function(I,ne,Me){return Ve.current.useSyncExternalStore(I,ne,Me)},Be.useTransition=function(){return Ve.current.useTransition()},Be.version="18.3.1",Be}var Oc;function Xo(){return Oc||(Oc=1,ko.exports=Pp()),ko.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc;function Rp(){if(Gc)return Ti;Gc=1;var a=Xo(),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function S(A,D,b){var G,N={},F=null,J=null;b!==void 0&&(F=""+b),D.key!==void 0&&(F=""+D.key),D.ref!==void 0&&(J=D.ref);for(G in D)f.call(D,G)&&!w.hasOwnProperty(G)&&(N[G]=D[G]);if(A&&A.defaultProps)for(G in D=A.defaultProps,D)N[G]===void 0&&(N[G]=D[G]);return{$$typeof:i,type:A,key:F,ref:J,props:N,_owner:g.current}}return Ti.Fragment=o,Ti.jsx=S,Ti.jsxs=S,Ti}var Bc;function Lp(){return Bc||(Bc=1,Uo.exports=Rp()),Uo.exports}var ce=Lp(),Y=Xo(),Na={},Co={exports:{}},qt={},Io={exports:{}},Fo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc;function Up(){return Wc||(Wc=1,function(a){function i(le,ye){var se=le.length;le.push(ye);e:for(;0<se;){var I=se-1>>>1,ne=le[I];if(0<g(ne,ye))le[I]=ye,le[se]=ne,se=I;else break e}}function o(le){return le.length===0?null:le[0]}function f(le){if(le.length===0)return null;var ye=le[0],se=le.pop();if(se!==ye){le[0]=se;e:for(var I=0,ne=le.length,Me=ne>>>1;I<Me;){var Se=2*(I+1)-1,Le=le[Se],Re=Se+1,p=le[Re];if(0>g(Le,se))Re<ne&&0>g(p,Le)?(le[I]=p,le[Re]=se,I=Re):(le[I]=Le,le[Se]=se,I=Se);else if(Re<ne&&0>g(p,se))le[I]=p,le[Re]=se,I=Re;else break e}}return ye}function g(le,ye){var se=le.sortIndex-ye.sortIndex;return se!==0?se:le.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;a.unstable_now=function(){return w.now()}}else{var S=Date,A=S.now();a.unstable_now=function(){return S.now()-A}}var D=[],b=[],G=1,N=null,F=3,J=!1,j=!1,ee=!1,te=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ue(le){for(var ye=o(b);ye!==null;){if(ye.callback===null)f(b);else if(ye.startTime<=le)f(b),ye.sortIndex=ye.expirationTime,i(D,ye);else break;ye=o(b)}}function he(le){if(ee=!1,ue(le),!j)if(o(D)!==null)j=!0,He(Ue);else{var ye=o(b);ye!==null&&Ve(he,ye.startTime-le)}}function Ue(le,ye){j=!1,ee&&(ee=!1,X(We),We=-1),J=!0;var se=F;try{for(ue(ye),N=o(D);N!==null&&(!(N.expirationTime>ye)||le&&!je());){var I=N.callback;if(typeof I=="function"){N.callback=null,F=N.priorityLevel;var ne=I(N.expirationTime<=ye);ye=a.unstable_now(),typeof ne=="function"?N.callback=ne:N===o(D)&&f(D),ue(ye)}else f(D);N=o(D)}if(N!==null)var Me=!0;else{var Se=o(b);Se!==null&&Ve(he,Se.startTime-ye),Me=!1}return Me}finally{N=null,F=se,J=!1}}var ke=!1,Ce=null,We=-1,Ne=5,Oe=-1;function je(){return!(a.unstable_now()-Oe<Ne)}function De(){if(Ce!==null){var le=a.unstable_now();Oe=le;var ye=!0;try{ye=Ce(!0,le)}finally{ye?Pe():(ke=!1,Ce=null)}}else ke=!1}var Pe;if(typeof Z=="function")Pe=function(){Z(De)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Ye=xe.port2;xe.port1.onmessage=De,Pe=function(){Ye.postMessage(null)}}else Pe=function(){te(De,0)};function He(le){Ce=le,ke||(ke=!0,Pe())}function Ve(le,ye){We=te(function(){le(a.unstable_now())},ye)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(le){le.callback=null},a.unstable_continueExecution=function(){j||J||(j=!0,He(Ue))},a.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ne=0<le?Math.floor(1e3/le):5},a.unstable_getCurrentPriorityLevel=function(){return F},a.unstable_getFirstCallbackNode=function(){return o(D)},a.unstable_next=function(le){switch(F){case 1:case 2:case 3:var ye=3;break;default:ye=F}var se=F;F=ye;try{return le()}finally{F=se}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(le,ye){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var se=F;F=le;try{return ye()}finally{F=se}},a.unstable_scheduleCallback=function(le,ye,se){var I=a.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,le){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,le={id:G++,callback:ye,priorityLevel:le,startTime:se,expirationTime:ne,sortIndex:-1},se>I?(le.sortIndex=se,i(b,le),o(D)===null&&le===o(b)&&(ee?(X(We),We=-1):ee=!0,Ve(he,se-I))):(le.sortIndex=ne,i(D,le),j||J||(j=!0,He(Ue))),le},a.unstable_shouldYield=je,a.unstable_wrapCallback=function(le){var ye=F;return function(){var se=F;F=ye;try{return le.apply(this,arguments)}finally{F=se}}}}(Fo)),Fo}var Vc;function kp(){return Vc||(Vc=1,Io.exports=Up()),Io.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc;function Cp(){if(qc)return qt;qc=1;var a=Xo(),i=kp();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,g={};function w(e,t){S(e,t),S(e+"Capture",t)}function S(e,t){for(g[e]=t,e=0;e<t.length;e++)f.add(t[e])}var A=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),D=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},N={};function F(e){return D.call(N,e)?!0:D.call(G,e)?!1:b.test(e)?N[e]=!0:(G[e]=!0,!1)}function J(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,t,n,r){if(t===null||typeof t>"u"||J(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ee(e,t,n,r,s,u,_){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=_}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ee(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ee(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ee(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ee(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ee(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ee(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){te[e]=new ee(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){te[e]=new ee(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){te[e]=new ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var X=/[\-:]([a-z])/g;function Z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(X,Z);te[t]=new ee(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(X,Z);te[t]=new ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(X,Z);te[t]=new ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ee(e,1,!1,e.toLowerCase(),null,!1,!1)}),te.xlinkHref=new ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){te[e]=new ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function ue(e,t,n,r){var s=te.hasOwnProperty(t)?te[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(j(t,n,s,r)&&(n=null),r||s===null?F(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var he=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ue=Symbol.for("react.element"),ke=Symbol.for("react.portal"),Ce=Symbol.for("react.fragment"),We=Symbol.for("react.strict_mode"),Ne=Symbol.for("react.profiler"),Oe=Symbol.for("react.provider"),je=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),Ye=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),Ve=Symbol.for("react.offscreen"),le=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,I;function ne(e){if(I===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return`
`+I+e}var Me=!1;function Se(e,t){if(!e||Me)return"";Me=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch($){var r=$}Reflect.construct(e,[],t)}else{try{t.call()}catch($){r=$}e.call(t.prototype)}else{try{throw Error()}catch($){r=$}e()}}catch($){if($&&r&&typeof $.stack=="string"){for(var s=$.stack.split(`
`),u=r.stack.split(`
`),_=s.length-1,z=u.length-1;1<=_&&0<=z&&s[_]!==u[z];)z--;for(;1<=_&&0<=z;_--,z--)if(s[_]!==u[z]){if(_!==1||z!==1)do if(_--,z--,0>z||s[_]!==u[z]){var R=`
`+s[_].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=_&&0<=z);break}}}finally{Me=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ne(e):""}function Le(e){switch(e.tag){case 5:return ne(e.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return e=Se(e.type,!1),e;case 11:return e=Se(e.type.render,!1),e;case 1:return e=Se(e.type,!0),e;default:return""}}function Re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ce:return"Fragment";case ke:return"Portal";case Ne:return"Profiler";case We:return"StrictMode";case Pe:return"Suspense";case xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case je:return(e.displayName||"Context")+".Consumer";case Oe:return(e._context.displayName||"Context")+".Provider";case De:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ye:return t=e.displayName||null,t!==null?t:Re(e.type)||"Memo";case He:t=e._payload,e=e._init;try{return Re(e(t))}catch{}}return null}function p(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(t);case 8:return t===We?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function M(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function m(e){var t=d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(_){r=""+_,u.call(this,_)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(_){r=""+_},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function E(e){e._valueTracker||(e._valueTracker=m(e))}function P(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function W(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function l(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function v(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=M(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function c(e,t){t=t.checked,t!=null&&ue(e,"checked",t,!1)}function h(e,t){c(e,t);var n=M(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?U(e,t.type,n):t.hasOwnProperty("defaultValue")&&U(e,t.type,M(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function x(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function U(e,t,n){(t!=="number"||W(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var q=Array.isArray;function y(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+M(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function T(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function L(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(o(92));if(q(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:M(n)}}function k(e,t){var n=M(t.value),r=M(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function H(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Q(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function K(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Q(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var me,ze=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(me=me||document.createElement("div"),me.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=me.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(_e).forEach(function(e){Ie.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_e[t]=_e[e]})});function Ge(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_e.hasOwnProperty(e)&&_e[e]?(""+t).trim():t+"px"}function Xe(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Ge(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var ut=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rt(e,t){if(t){if(ut[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ct(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pt=null;function ht(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mt=null,it=null,at=null;function yt(e){if(e=li(e)){if(typeof mt!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Ji(t),mt(e.stateNode,e.type,t))}}function wt(e){it?at?at.push(e):at=[e]:it=e}function xt(){if(it){var e=it,t=at;if(at=it=null,yt(e),t)for(e=0;e<t.length;e++)yt(t[e])}}function St(e,t){return e(t)}function Pt(){}var Mt=!1;function Rt(e,t,n){if(Mt)return e(t,n);Mt=!0;try{return St(e,t,n)}finally{Mt=!1,(it!==null||at!==null)&&(Pt(),xt())}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ji(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Cn=!1;if(A)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){Cn=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{Cn=!1}function gr(e,t,n,r,s,u,_,z,R){var $=Array.prototype.slice.call(arguments,3);try{t.apply(n,$)}catch(ie){this.onError(ie)}}var mn=!1,En=null,Dn=!1,vr=null,Pi={onError:function(e){mn=!0,En=e}};function Ri(e,t,n,r,s,u,_,z,R){mn=!1,En=null,gr.apply(Pi,arguments)}function Li(e,t,n,r,s,u,_,z,R){if(Ri.apply(this,arguments),mn){if(mn){var $=En;mn=!1,En=null}else throw Error(o(198));Dn||(Dn=!0,vr=$)}}function et(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ol(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ll(e){if(et(e)!==e)throw Error(o(188))}function Nd(e){var t=e.alternate;if(!t){if(t=et(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return ll(s),e;if(u===r)return ll(s),t;u=u.sibling}throw Error(o(188))}if(n.return!==r.return)n=s,r=u;else{for(var _=!1,z=s.child;z;){if(z===n){_=!0,n=s,r=u;break}if(z===r){_=!0,r=s,n=u;break}z=z.sibling}if(!_){for(z=u.child;z;){if(z===n){_=!0,n=u,r=s;break}if(z===r){_=!0,r=u,n=s;break}z=z.sibling}if(!_)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function ul(e){return e=Nd(e),e!==null?cl(e):null}function cl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cl(e);if(t!==null)return t;e=e.sibling}return null}var dl=i.unstable_scheduleCallback,fl=i.unstable_cancelCallback,Od=i.unstable_shouldYield,Gd=i.unstable_requestPaint,dt=i.unstable_now,Bd=i.unstable_getCurrentPriorityLevel,Za=i.unstable_ImmediatePriority,pl=i.unstable_UserBlockingPriority,Ui=i.unstable_NormalPriority,Wd=i.unstable_LowPriority,hl=i.unstable_IdlePriority,ki=null,_n=null;function Vd(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:$d,qd=Math.log,Hd=Math.LN2;function $d(e){return e>>>=0,e===0?32:31-(qd(e)/Hd|0)|0}var Ci=64,Ii=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,u=e.pingedLanes,_=n&268435455;if(_!==0){var z=_&~s;z!==0?r=qr(z):(u&=_,u!==0&&(r=qr(u)))}else _=n&~s,_!==0?r=qr(_):u!==0&&(r=qr(u));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,u=t&-t,s>=u||s===16&&(u&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),s=1<<n,r|=e[n],t&=~s;return r}function jd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes;0<u;){var _=31-an(u),z=1<<_,R=s[_];R===-1?(!(z&n)||z&r)&&(s[_]=jd(z,t)):R<=t&&(e.expiredLanes|=z),u&=~z}}function Ja(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ml(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function es(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function Yd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-an(n),u=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~u}}function ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var Qe=0;function _l(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gl,ns,vl,yl,wl,rs=!1,Ni=[],In=null,Fn=null,Nn=null,$r=new Map,jr=new Map,On=[],Xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xl(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function Qr(e,t,n,r,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[s]},t!==null&&(t=li(t),t!==null&&ns(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Kd(e,t,n,r,s){switch(t){case"focusin":return In=Qr(In,e,t,n,r,s),!0;case"dragenter":return Fn=Qr(Fn,e,t,n,r,s),!0;case"mouseover":return Nn=Qr(Nn,e,t,n,r,s),!0;case"pointerover":var u=s.pointerId;return $r.set(u,Qr($r.get(u)||null,e,t,n,r,s)),!0;case"gotpointercapture":return u=s.pointerId,jr.set(u,Qr(jr.get(u)||null,e,t,n,r,s)),!0}return!1}function Sl(e){var t=rr(e.target);if(t!==null){var n=et(t);if(n!==null){if(t=n.tag,t===13){if(t=ol(n),t!==null){e.blockedOn=t,wl(e.priority,function(){vl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=as(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pt=r,n.target.dispatchEvent(r),pt=null}else return t=li(n),t!==null&&ns(t),e.blockedOn=n,!1;t.shift()}return!0}function Tl(e,t,n){Oi(e)&&n.delete(t)}function Zd(){rs=!1,In!==null&&Oi(In)&&(In=null),Fn!==null&&Oi(Fn)&&(Fn=null),Nn!==null&&Oi(Nn)&&(Nn=null),$r.forEach(Tl),jr.forEach(Tl)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,rs||(rs=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Zd)))}function Xr(e){function t(s){return Yr(s,e)}if(0<Ni.length){Yr(Ni[0],e);for(var n=1;n<Ni.length;n++){var r=Ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&Yr(In,e),Fn!==null&&Yr(Fn,e),Nn!==null&&Yr(Nn,e),$r.forEach(t),jr.forEach(t),n=0;n<On.length;n++)r=On[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)Sl(n),n.blockedOn===null&&On.shift()}var yr=he.ReactCurrentBatchConfig,Gi=!0;function Jd(e,t,n,r){var s=Qe,u=yr.transition;yr.transition=null;try{Qe=1,is(e,t,n,r)}finally{Qe=s,yr.transition=u}}function ef(e,t,n,r){var s=Qe,u=yr.transition;yr.transition=null;try{Qe=4,is(e,t,n,r)}finally{Qe=s,yr.transition=u}}function is(e,t,n,r){if(Gi){var s=as(e,t,n,r);if(s===null)Ss(e,t,r,Bi,n),xl(e,r);else if(Kd(s,e,t,n,r))r.stopPropagation();else if(xl(e,r),t&4&&-1<Xd.indexOf(e)){for(;s!==null;){var u=li(s);if(u!==null&&gl(u),u=as(e,t,n,r),u===null&&Ss(e,t,r,Bi,n),u===s)break;s=u}s!==null&&r.stopPropagation()}else Ss(e,t,r,null,n)}}var Bi=null;function as(e,t,n,r){if(Bi=null,e=ht(r),e=rr(e),e!==null)if(t=et(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ol(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bi=e,null}function El(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bd()){case Za:return 1;case pl:return 4;case Ui:case Wd:return 16;case hl:return 536870912;default:return 16}default:return 16}}var Gn=null,ss=null,Wi=null;function Dl(){if(Wi)return Wi;var e,t=ss,n=t.length,r,s="value"in Gn?Gn.value:Gn.textContent,u=s.length;for(e=0;e<n&&t[e]===s[e];e++);var _=n-e;for(r=1;r<=_&&t[n-r]===s[u-r];r++);return Wi=s.slice(e,1<r?1-r:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function Ml(){return!1}function Ht(e){function t(n,r,s,u,_){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=u,this.target=_,this.currentTarget=null;for(var z in e)e.hasOwnProperty(z)&&(n=e[z],this[z]=n?n(u):u[z]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?qi:Ml,this.isPropagationStopped=Ml,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=Ht(wr),Kr=se({},wr,{view:0,detail:0}),tf=Ht(Kr),ls,us,Zr,Hi=se({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(ls=e.screenX-Zr.screenX,us=e.screenY-Zr.screenY):us=ls=0,Zr=e),ls)},movementY:function(e){return"movementY"in e?e.movementY:us}}),zl=Ht(Hi),nf=se({},Hi,{dataTransfer:0}),rf=Ht(nf),af=se({},Kr,{relatedTarget:0}),cs=Ht(af),sf=se({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),of=Ht(sf),lf=se({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uf=Ht(lf),cf=se({},wr,{data:0}),bl=Ht(cf),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pf[e])?!!t[e]:!1}function ds(){return hf}var mf=se({},Kr,{key:function(e){if(e.key){var t=df[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_f=Ht(mf),gf=se({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Al=Ht(gf),vf=se({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),yf=Ht(vf),wf=se({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xf=Ht(wf),Sf=se({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tf=Ht(Sf),Ef=[9,13,27,32],fs=A&&"CompositionEvent"in window,Jr=null;A&&"documentMode"in document&&(Jr=document.documentMode);var Df=A&&"TextEvent"in window&&!Jr,Pl=A&&(!fs||Jr&&8<Jr&&11>=Jr),Rl=" ",Ll=!1;function Ul(e,t){switch(e){case"keyup":return Ef.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function Mf(e,t){switch(e){case"compositionend":return kl(t);case"keypress":return t.which!==32?null:(Ll=!0,Rl);case"textInput":return e=t.data,e===Rl&&Ll?null:e;default:return null}}function zf(e,t){if(xr)return e==="compositionend"||!fs&&Ul(e,t)?(e=Dl(),Wi=ss=Gn=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pl&&t.locale!=="ko"?null:t.data;default:return null}}var bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bf[e.type]:t==="textarea"}function Il(e,t,n,r){wt(r),t=Xi(t,"onChange"),0<t.length&&(n=new os("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ei=null,ti=null;function Af(e){eu(e,0)}function $i(e){var t=Mr(e);if(P(t))return e}function Pf(e,t){if(e==="change")return t}var Fl=!1;if(A){var ps;if(A){var hs="oninput"in document;if(!hs){var Nl=document.createElement("div");Nl.setAttribute("oninput","return;"),hs=typeof Nl.oninput=="function"}ps=hs}else ps=!1;Fl=ps&&(!document.documentMode||9<document.documentMode)}function Ol(){ei&&(ei.detachEvent("onpropertychange",Gl),ti=ei=null)}function Gl(e){if(e.propertyName==="value"&&$i(ti)){var t=[];Il(t,ti,e,ht(e)),Rt(Af,t)}}function Rf(e,t,n){e==="focusin"?(Ol(),ei=t,ti=n,ei.attachEvent("onpropertychange",Gl)):e==="focusout"&&Ol()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(ti)}function Uf(e,t){if(e==="click")return $i(t)}function kf(e,t){if(e==="input"||e==="change")return $i(t)}function Cf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:Cf;function ni(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!D.call(t,s)||!sn(e[s],t[s]))return!1}return!0}function Bl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wl(e,t){var n=Bl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bl(n)}}function Vl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ql(){for(var e=window,t=W();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=W(e.document)}return t}function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function If(e){var t=ql(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vl(n.ownerDocument.documentElement,n)){if(r!==null&&ms(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,u=Math.min(r.start,s);r=r.end===void 0?u:Math.min(r.end,s),!e.extend&&u>r&&(s=r,r=u,u=s),s=Wl(n,u);var _=Wl(n,r);s&&_&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==_.node||e.focusOffset!==_.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),u>r?(e.addRange(t),e.extend(_.node,_.offset)):(t.setEnd(_.node,_.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=A&&"documentMode"in document&&11>=document.documentMode,Sr=null,_s=null,ri=null,gs=!1;function Hl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gs||Sr==null||Sr!==W(r)||(r=Sr,"selectionStart"in r&&ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ri&&ni(ri,r)||(ri=r,r=Xi(_s,"onSelect"),0<r.length&&(t=new os("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tr={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionend:ji("Transition","TransitionEnd")},vs={},$l={};A&&($l=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Qi(e){if(vs[e])return vs[e];if(!Tr[e])return e;var t=Tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $l)return vs[e]=t[n];return e}var jl=Qi("animationend"),Ql=Qi("animationiteration"),Yl=Qi("animationstart"),Xl=Qi("transitionend"),Kl=new Map,Zl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){Kl.set(e,t),w(t,[e])}for(var ys=0;ys<Zl.length;ys++){var ws=Zl[ys],Nf=ws.toLowerCase(),Of=ws[0].toUpperCase()+ws.slice(1);Bn(Nf,"on"+Of)}Bn(jl,"onAnimationEnd"),Bn(Ql,"onAnimationIteration"),Bn(Yl,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(Xl,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function Jl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Li(r,t,void 0,e),e.currentTarget=null}function eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var _=r.length-1;0<=_;_--){var z=r[_],R=z.instance,$=z.currentTarget;if(z=z.listener,R!==u&&s.isPropagationStopped())break e;Jl(s,z,$),u=R}else for(_=0;_<r.length;_++){if(z=r[_],R=z.instance,$=z.currentTarget,z=z.listener,R!==u&&s.isPropagationStopped())break e;Jl(s,z,$),u=R}}}if(Dn)throw e=vr,Dn=!1,vr=null,e}function Ze(e,t){var n=t[bs];n===void 0&&(n=t[bs]=new Set);var r=e+"__bubble";n.has(r)||(tu(t,e,2,!1),n.add(r))}function xs(e,t,n){var r=0;t&&(r|=4),tu(n,e,r,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function ai(e){if(!e[Yi]){e[Yi]=!0,f.forEach(function(n){n!=="selectionchange"&&(Gf.has(n)||xs(n,!1,e),xs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,xs("selectionchange",!1,t))}}function tu(e,t,n,r){switch(El(t)){case 1:var s=Jd;break;case 4:s=ef;break;default:s=is}n=s.bind(null,t,n,e),s=void 0,!Cn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ss(e,t,n,r,s){var u=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var z=r.stateNode.containerInfo;if(z===s||z.nodeType===8&&z.parentNode===s)break;if(_===4)for(_=r.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===s||R.nodeType===8&&R.parentNode===s))return;_=_.return}for(;z!==null;){if(_=rr(z),_===null)return;if(R=_.tag,R===5||R===6){r=u=_;continue e}z=z.parentNode}}r=r.return}Rt(function(){var $=u,ie=ht(n),ae=[];e:{var re=Kl.get(e);if(re!==void 0){var de=os,ge=e;switch(e){case"keypress":if(Vi(n)===0)break e;case"keydown":case"keyup":de=_f;break;case"focusin":ge="focus",de=cs;break;case"focusout":ge="blur",de=cs;break;case"beforeblur":case"afterblur":de=cs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=zl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=yf;break;case jl:case Ql:case Yl:de=of;break;case Xl:de=xf;break;case"scroll":de=tf;break;case"wheel":de=Tf;break;case"copy":case"cut":case"paste":de=uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Al}var ve=(t&4)!==0,ft=!ve&&e==="scroll",O=ve?re!==null?re+"Capture":null:re;ve=[];for(var C=$,B;C!==null;){B=C;var oe=B.stateNode;if(B.tag===5&&oe!==null&&(B=oe,O!==null&&(oe=pn(C,O),oe!=null&&ve.push(si(C,oe,B)))),ft)break;C=C.return}0<ve.length&&(re=new de(re,ge,null,n,ie),ae.push({event:re,listeners:ve}))}}if(!(t&7)){e:{if(re=e==="mouseover"||e==="pointerover",de=e==="mouseout"||e==="pointerout",re&&n!==pt&&(ge=n.relatedTarget||n.fromElement)&&(rr(ge)||ge[Mn]))break e;if((de||re)&&(re=ie.window===ie?ie:(re=ie.ownerDocument)?re.defaultView||re.parentWindow:window,de?(ge=n.relatedTarget||n.toElement,de=$,ge=ge?rr(ge):null,ge!==null&&(ft=et(ge),ge!==ft||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(de=null,ge=$),de!==ge)){if(ve=zl,oe="onMouseLeave",O="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(ve=Al,oe="onPointerLeave",O="onPointerEnter",C="pointer"),ft=de==null?re:Mr(de),B=ge==null?re:Mr(ge),re=new ve(oe,C+"leave",de,n,ie),re.target=ft,re.relatedTarget=B,oe=null,rr(ie)===$&&(ve=new ve(O,C+"enter",ge,n,ie),ve.target=B,ve.relatedTarget=ft,oe=ve),ft=oe,de&&ge)t:{for(ve=de,O=ge,C=0,B=ve;B;B=Er(B))C++;for(B=0,oe=O;oe;oe=Er(oe))B++;for(;0<C-B;)ve=Er(ve),C--;for(;0<B-C;)O=Er(O),B--;for(;C--;){if(ve===O||O!==null&&ve===O.alternate)break t;ve=Er(ve),O=Er(O)}ve=null}else ve=null;de!==null&&nu(ae,re,de,ve,!1),ge!==null&&ft!==null&&nu(ae,ft,ge,ve,!0)}}e:{if(re=$?Mr($):window,de=re.nodeName&&re.nodeName.toLowerCase(),de==="select"||de==="input"&&re.type==="file")var we=Pf;else if(Cl(re))if(Fl)we=kf;else{we=Lf;var Te=Rf}else(de=re.nodeName)&&de.toLowerCase()==="input"&&(re.type==="checkbox"||re.type==="radio")&&(we=Uf);if(we&&(we=we(e,$))){Il(ae,we,n,ie);break e}Te&&Te(e,re,$),e==="focusout"&&(Te=re._wrapperState)&&Te.controlled&&re.type==="number"&&U(re,"number",re.value)}switch(Te=$?Mr($):window,e){case"focusin":(Cl(Te)||Te.contentEditable==="true")&&(Sr=Te,_s=$,ri=null);break;case"focusout":ri=_s=Sr=null;break;case"mousedown":gs=!0;break;case"contextmenu":case"mouseup":case"dragend":gs=!1,Hl(ae,n,ie);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":Hl(ae,n,ie)}var Ee;if(fs)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else xr?Ul(e,n)&&(be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(be="onCompositionStart");be&&(Pl&&n.locale!=="ko"&&(xr||be!=="onCompositionStart"?be==="onCompositionEnd"&&xr&&(Ee=Dl()):(Gn=ie,ss="value"in Gn?Gn.value:Gn.textContent,xr=!0)),Te=Xi($,be),0<Te.length&&(be=new bl(be,e,null,n,ie),ae.push({event:be,listeners:Te}),Ee?be.data=Ee:(Ee=kl(n),Ee!==null&&(be.data=Ee)))),(Ee=Df?Mf(e,n):zf(e,n))&&($=Xi($,"onBeforeInput"),0<$.length&&(ie=new bl("onBeforeInput","beforeinput",null,n,ie),ae.push({event:ie,listeners:$}),ie.data=Ee))}eu(ae,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,u=s.stateNode;s.tag===5&&u!==null&&(s=u,u=pn(e,n),u!=null&&r.unshift(si(e,u,s)),u=pn(e,t),u!=null&&r.push(si(e,u,s))),e=e.return}return r}function Er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nu(e,t,n,r,s){for(var u=t._reactName,_=[];n!==null&&n!==r;){var z=n,R=z.alternate,$=z.stateNode;if(R!==null&&R===r)break;z.tag===5&&$!==null&&(z=$,s?(R=pn(n,u),R!=null&&_.unshift(si(n,R,z))):s||(R=pn(n,u),R!=null&&_.push(si(n,R,z)))),n=n.return}_.length!==0&&e.push({event:t,listeners:_})}var Bf=/\r\n?/g,Wf=/\u0000|\uFFFD/g;function ru(e){return(typeof e=="string"?e:""+e).replace(Bf,`
`).replace(Wf,"")}function Ki(e,t,n){if(t=ru(t),ru(e)!==t&&n)throw Error(o(425))}function Zi(){}var Ts=null,Es=null;function Ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ms=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,iu=typeof Promise=="function"?Promise:void 0,qf=typeof queueMicrotask=="function"?queueMicrotask:typeof iu<"u"?function(e){return iu.resolve(null).then(e).catch(Hf)}:Ms;function Hf(e){setTimeout(function(){throw e})}function zs(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Xr(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),gn="__reactFiber$"+Dr,oi="__reactProps$"+Dr,Mn="__reactContainer$"+Dr,bs="__reactEvents$"+Dr,$f="__reactListeners$"+Dr,jf="__reactHandles$"+Dr;function rr(e){var t=e[gn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mn]||n[gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=au(e);e!==null;){if(n=e[gn])return n;e=au(e)}return t}e=n,n=e.parentNode}return null}function li(e){return e=e[gn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Ji(e){return e[oi]||null}var As=[],zr=-1;function Vn(e){return{current:e}}function Je(e){0>zr||(e.current=As[zr],As[zr]=null,zr--)}function Ke(e,t){zr++,As[zr]=e.current,e.current=t}var qn={},Lt=Vn(qn),Ot=Vn(!1),ir=qn;function br(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},u;for(u in n)s[u]=t[u];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Gt(e){return e=e.childContextTypes,e!=null}function ea(){Je(Ot),Je(Lt)}function su(e,t,n){if(Lt.current!==qn)throw Error(o(168));Ke(Lt,t),Ke(Ot,n)}function ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(o(108,p(e)||"Unknown",s));return se({},n,r)}function ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,ir=Lt.current,Ke(Lt,e),Ke(Ot,Ot.current),!0}function lu(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=ou(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,Je(Ot),Je(Lt),Ke(Lt,e)):Je(Ot),Ke(Ot,n)}var zn=null,na=!1,Ps=!1;function uu(e){zn===null?zn=[e]:zn.push(e)}function Qf(e){na=!0,uu(e)}function Hn(){if(!Ps&&zn!==null){Ps=!0;var e=0,t=Qe;try{var n=zn;for(Qe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zn=null,na=!1}catch(s){throw zn!==null&&(zn=zn.slice(e+1)),dl(Za,Hn),s}finally{Qe=t,Ps=!1}}return null}var Ar=[],Pr=0,ra=null,ia=0,Kt=[],Zt=0,ar=null,bn=1,An="";function sr(e,t){Ar[Pr++]=ia,Ar[Pr++]=ra,ra=e,ia=t}function cu(e,t,n){Kt[Zt++]=bn,Kt[Zt++]=An,Kt[Zt++]=ar,ar=e;var r=bn;e=An;var s=32-an(r)-1;r&=~(1<<s),n+=1;var u=32-an(t)+s;if(30<u){var _=s-s%5;u=(r&(1<<_)-1).toString(32),r>>=_,s-=_,bn=1<<32-an(t)+s|n<<s|r,An=u+e}else bn=1<<u|n<<s|r,An=e}function Rs(e){e.return!==null&&(sr(e,1),cu(e,1,0))}function Ls(e){for(;e===ra;)ra=Ar[--Pr],Ar[Pr]=null,ia=Ar[--Pr],Ar[Pr]=null;for(;e===ar;)ar=Kt[--Zt],Kt[Zt]=null,An=Kt[--Zt],Kt[Zt]=null,bn=Kt[--Zt],Kt[Zt]=null}var $t=null,jt=null,tt=!1,on=null;function du(e,t){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$t=e,jt=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$t=e,jt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:bn,overflow:An}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$t=e,jt=null,!0):!1;default:return!1}}function Us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ks(e){if(tt){var t=jt;if(t){var n=t;if(!fu(e,t)){if(Us(e))throw Error(o(418));t=Wn(n.nextSibling);var r=$t;t&&fu(e,t)?du(r,n):(e.flags=e.flags&-4097|2,tt=!1,$t=e)}}else{if(Us(e))throw Error(o(418));e.flags=e.flags&-4097|2,tt=!1,$t=e}}}function pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$t=e}function aa(e){if(e!==$t)return!1;if(!tt)return pu(e),tt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ds(e.type,e.memoizedProps)),t&&(t=jt)){if(Us(e))throw hu(),Error(o(418));for(;t;)du(e,t),t=Wn(t.nextSibling)}if(pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){jt=Wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}jt=null}}else jt=$t?Wn(e.stateNode.nextSibling):null;return!0}function hu(){for(var e=jt;e;)e=Wn(e.nextSibling)}function Rr(){jt=$t=null,tt=!1}function Cs(e){on===null?on=[e]:on.push(e)}var Yf=he.ReactCurrentBatchConfig;function ui(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var s=r,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(_){var z=s.refs;_===null?delete z[u]:z[u]=_},t._stringRef=u,t)}if(typeof e!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function sa(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mu(e){var t=e._init;return t(e._payload)}function _u(e){function t(O,C){if(e){var B=O.deletions;B===null?(O.deletions=[C],O.flags|=16):B.push(C)}}function n(O,C){if(!e)return null;for(;C!==null;)t(O,C),C=C.sibling;return null}function r(O,C){for(O=new Map;C!==null;)C.key!==null?O.set(C.key,C):O.set(C.index,C),C=C.sibling;return O}function s(O,C){return O=Jn(O,C),O.index=0,O.sibling=null,O}function u(O,C,B){return O.index=B,e?(B=O.alternate,B!==null?(B=B.index,B<C?(O.flags|=2,C):B):(O.flags|=2,C)):(O.flags|=1048576,C)}function _(O){return e&&O.alternate===null&&(O.flags|=2),O}function z(O,C,B,oe){return C===null||C.tag!==6?(C=zo(B,O.mode,oe),C.return=O,C):(C=s(C,B),C.return=O,C)}function R(O,C,B,oe){var we=B.type;return we===Ce?ie(O,C,B.props.children,oe,B.key):C!==null&&(C.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===He&&mu(we)===C.type)?(oe=s(C,B.props),oe.ref=ui(O,C,B),oe.return=O,oe):(oe=Pa(B.type,B.key,B.props,null,O.mode,oe),oe.ref=ui(O,C,B),oe.return=O,oe)}function $(O,C,B,oe){return C===null||C.tag!==4||C.stateNode.containerInfo!==B.containerInfo||C.stateNode.implementation!==B.implementation?(C=bo(B,O.mode,oe),C.return=O,C):(C=s(C,B.children||[]),C.return=O,C)}function ie(O,C,B,oe,we){return C===null||C.tag!==7?(C=hr(B,O.mode,oe,we),C.return=O,C):(C=s(C,B),C.return=O,C)}function ae(O,C,B){if(typeof C=="string"&&C!==""||typeof C=="number")return C=zo(""+C,O.mode,B),C.return=O,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ue:return B=Pa(C.type,C.key,C.props,null,O.mode,B),B.ref=ui(O,null,C),B.return=O,B;case ke:return C=bo(C,O.mode,B),C.return=O,C;case He:var oe=C._init;return ae(O,oe(C._payload),B)}if(q(C)||ye(C))return C=hr(C,O.mode,B,null),C.return=O,C;sa(O,C)}return null}function re(O,C,B,oe){var we=C!==null?C.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return we!==null?null:z(O,C,""+B,oe);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Ue:return B.key===we?R(O,C,B,oe):null;case ke:return B.key===we?$(O,C,B,oe):null;case He:return we=B._init,re(O,C,we(B._payload),oe)}if(q(B)||ye(B))return we!==null?null:ie(O,C,B,oe,null);sa(O,B)}return null}function de(O,C,B,oe,we){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return O=O.get(B)||null,z(C,O,""+oe,we);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case Ue:return O=O.get(oe.key===null?B:oe.key)||null,R(C,O,oe,we);case ke:return O=O.get(oe.key===null?B:oe.key)||null,$(C,O,oe,we);case He:var Te=oe._init;return de(O,C,B,Te(oe._payload),we)}if(q(oe)||ye(oe))return O=O.get(B)||null,ie(C,O,oe,we,null);sa(C,oe)}return null}function ge(O,C,B,oe){for(var we=null,Te=null,Ee=C,be=C=0,Dt=null;Ee!==null&&be<B.length;be++){Ee.index>be?(Dt=Ee,Ee=null):Dt=Ee.sibling;var $e=re(O,Ee,B[be],oe);if($e===null){Ee===null&&(Ee=Dt);break}e&&Ee&&$e.alternate===null&&t(O,Ee),C=u($e,C,be),Te===null?we=$e:Te.sibling=$e,Te=$e,Ee=Dt}if(be===B.length)return n(O,Ee),tt&&sr(O,be),we;if(Ee===null){for(;be<B.length;be++)Ee=ae(O,B[be],oe),Ee!==null&&(C=u(Ee,C,be),Te===null?we=Ee:Te.sibling=Ee,Te=Ee);return tt&&sr(O,be),we}for(Ee=r(O,Ee);be<B.length;be++)Dt=de(Ee,O,be,B[be],oe),Dt!==null&&(e&&Dt.alternate!==null&&Ee.delete(Dt.key===null?be:Dt.key),C=u(Dt,C,be),Te===null?we=Dt:Te.sibling=Dt,Te=Dt);return e&&Ee.forEach(function(er){return t(O,er)}),tt&&sr(O,be),we}function ve(O,C,B,oe){var we=ye(B);if(typeof we!="function")throw Error(o(150));if(B=we.call(B),B==null)throw Error(o(151));for(var Te=we=null,Ee=C,be=C=0,Dt=null,$e=B.next();Ee!==null&&!$e.done;be++,$e=B.next()){Ee.index>be?(Dt=Ee,Ee=null):Dt=Ee.sibling;var er=re(O,Ee,$e.value,oe);if(er===null){Ee===null&&(Ee=Dt);break}e&&Ee&&er.alternate===null&&t(O,Ee),C=u(er,C,be),Te===null?we=er:Te.sibling=er,Te=er,Ee=Dt}if($e.done)return n(O,Ee),tt&&sr(O,be),we;if(Ee===null){for(;!$e.done;be++,$e=B.next())$e=ae(O,$e.value,oe),$e!==null&&(C=u($e,C,be),Te===null?we=$e:Te.sibling=$e,Te=$e);return tt&&sr(O,be),we}for(Ee=r(O,Ee);!$e.done;be++,$e=B.next())$e=de(Ee,O,be,$e.value,oe),$e!==null&&(e&&$e.alternate!==null&&Ee.delete($e.key===null?be:$e.key),C=u($e,C,be),Te===null?we=$e:Te.sibling=$e,Te=$e);return e&&Ee.forEach(function(zp){return t(O,zp)}),tt&&sr(O,be),we}function ft(O,C,B,oe){if(typeof B=="object"&&B!==null&&B.type===Ce&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Ue:e:{for(var we=B.key,Te=C;Te!==null;){if(Te.key===we){if(we=B.type,we===Ce){if(Te.tag===7){n(O,Te.sibling),C=s(Te,B.props.children),C.return=O,O=C;break e}}else if(Te.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===He&&mu(we)===Te.type){n(O,Te.sibling),C=s(Te,B.props),C.ref=ui(O,Te,B),C.return=O,O=C;break e}n(O,Te);break}else t(O,Te);Te=Te.sibling}B.type===Ce?(C=hr(B.props.children,O.mode,oe,B.key),C.return=O,O=C):(oe=Pa(B.type,B.key,B.props,null,O.mode,oe),oe.ref=ui(O,C,B),oe.return=O,O=oe)}return _(O);case ke:e:{for(Te=B.key;C!==null;){if(C.key===Te)if(C.tag===4&&C.stateNode.containerInfo===B.containerInfo&&C.stateNode.implementation===B.implementation){n(O,C.sibling),C=s(C,B.children||[]),C.return=O,O=C;break e}else{n(O,C);break}else t(O,C);C=C.sibling}C=bo(B,O.mode,oe),C.return=O,O=C}return _(O);case He:return Te=B._init,ft(O,C,Te(B._payload),oe)}if(q(B))return ge(O,C,B,oe);if(ye(B))return ve(O,C,B,oe);sa(O,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,C!==null&&C.tag===6?(n(O,C.sibling),C=s(C,B),C.return=O,O=C):(n(O,C),C=zo(B,O.mode,oe),C.return=O,O=C),_(O)):n(O,C)}return ft}var Lr=_u(!0),gu=_u(!1),oa=Vn(null),la=null,Ur=null,Is=null;function Fs(){Is=Ur=la=null}function Ns(e){var t=oa.current;Je(oa),e._currentValue=t}function Os(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kr(e,t){la=e,Is=Ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Bt=!0),e.firstContext=null)}function Jt(e){var t=e._currentValue;if(Is!==e)if(e={context:e,memoizedValue:t,next:null},Ur===null){if(la===null)throw Error(o(308));Ur=e,la.dependencies={lanes:0,firstContext:e}}else Ur=Ur.next=e;return t}var or=null;function Gs(e){or===null?or=[e]:or.push(e)}function vu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Gs(t)):(n.next=s.next,s.next=n),t.interleaved=n,Pn(e,r)}function Pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $n=!1;function Bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,qe&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Pn(e,n)}return s=r.interleaved,s===null?(t.next=t,Gs(r)):(t.next=s.next,s.next=t),r.interleaved=t,Pn(e,n)}function ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ts(e,n)}}function wu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var _={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?s=u=_:u=u.next=_,n=n.next}while(n!==null);u===null?s=u=t:u=u.next=t}else s=u=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ca(e,t,n,r){var s=e.updateQueue;$n=!1;var u=s.firstBaseUpdate,_=s.lastBaseUpdate,z=s.shared.pending;if(z!==null){s.shared.pending=null;var R=z,$=R.next;R.next=null,_===null?u=$:_.next=$,_=R;var ie=e.alternate;ie!==null&&(ie=ie.updateQueue,z=ie.lastBaseUpdate,z!==_&&(z===null?ie.firstBaseUpdate=$:z.next=$,ie.lastBaseUpdate=R))}if(u!==null){var ae=s.baseState;_=0,ie=$=R=null,z=u;do{var re=z.lane,de=z.eventTime;if((r&re)===re){ie!==null&&(ie=ie.next={eventTime:de,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var ge=e,ve=z;switch(re=t,de=n,ve.tag){case 1:if(ge=ve.payload,typeof ge=="function"){ae=ge.call(de,ae,re);break e}ae=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ve.payload,re=typeof ge=="function"?ge.call(de,ae,re):ge,re==null)break e;ae=se({},ae,re);break e;case 2:$n=!0}}z.callback!==null&&z.lane!==0&&(e.flags|=64,re=s.effects,re===null?s.effects=[z]:re.push(z))}else de={eventTime:de,lane:re,tag:z.tag,payload:z.payload,callback:z.callback,next:null},ie===null?($=ie=de,R=ae):ie=ie.next=de,_|=re;if(z=z.next,z===null){if(z=s.shared.pending,z===null)break;re=z,z=re.next,re.next=null,s.lastBaseUpdate=re,s.shared.pending=null}}while(!0);if(ie===null&&(R=ae),s.baseState=R,s.firstBaseUpdate=$,s.lastBaseUpdate=ie,t=s.shared.interleaved,t!==null){s=t;do _|=s.lane,s=s.next;while(s!==t)}else u===null&&(s.shared.lanes=0);cr|=_,e.lanes=_,e.memoizedState=ae}}function xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(o(191,s));s.call(r)}}}var ci={},vn=Vn(ci),di=Vn(ci),fi=Vn(ci);function lr(e){if(e===ci)throw Error(o(174));return e}function Ws(e,t){switch(Ke(fi,t),Ke(di,e),Ke(vn,ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:K(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=K(t,e)}Je(vn),Ke(vn,t)}function Cr(){Je(vn),Je(di),Je(fi)}function Su(e){lr(fi.current);var t=lr(vn.current),n=K(t,e.type);t!==n&&(Ke(di,e),Ke(vn,n))}function Vs(e){di.current===e&&(Je(vn),Je(di))}var st=Vn(0);function da(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qs=[];function Hs(){for(var e=0;e<qs.length;e++)qs[e]._workInProgressVersionPrimary=null;qs.length=0}var fa=he.ReactCurrentDispatcher,$s=he.ReactCurrentBatchConfig,ur=0,ot=null,gt=null,Tt=null,pa=!1,pi=!1,hi=0,Xf=0;function Ut(){throw Error(o(321))}function js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sn(e[n],t[n]))return!1;return!0}function Qs(e,t,n,r,s,u){if(ur=u,ot=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fa.current=e===null||e.memoizedState===null?ep:tp,e=n(r,s),pi){u=0;do{if(pi=!1,hi=0,25<=u)throw Error(o(301));u+=1,Tt=gt=null,t.updateQueue=null,fa.current=np,e=n(r,s)}while(pi)}if(fa.current=_a,t=gt!==null&&gt.next!==null,ur=0,Tt=gt=ot=null,pa=!1,t)throw Error(o(300));return e}function Ys(){var e=hi!==0;return hi=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?ot.memoizedState=Tt=e:Tt=Tt.next=e,Tt}function en(){if(gt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=gt.next;var t=Tt===null?ot.memoizedState:Tt.next;if(t!==null)Tt=t,gt=e;else{if(e===null)throw Error(o(310));gt=e,e={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?ot.memoizedState=Tt=e:Tt=Tt.next=e}return Tt}function mi(e,t){return typeof t=="function"?t(e):t}function Xs(e){var t=en(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=gt,s=r.baseQueue,u=n.pending;if(u!==null){if(s!==null){var _=s.next;s.next=u.next,u.next=_}r.baseQueue=s=u,n.pending=null}if(s!==null){u=s.next,r=r.baseState;var z=_=null,R=null,$=u;do{var ie=$.lane;if((ur&ie)===ie)R!==null&&(R=R.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),r=$.hasEagerState?$.eagerState:e(r,$.action);else{var ae={lane:ie,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};R===null?(z=R=ae,_=r):R=R.next=ae,ot.lanes|=ie,cr|=ie}$=$.next}while($!==null&&$!==u);R===null?_=r:R.next=z,sn(r,t.memoizedState)||(Bt=!0),t.memoizedState=r,t.baseState=_,t.baseQueue=R,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do u=s.lane,ot.lanes|=u,cr|=u,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ks(e){var t=en(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,u=t.memoizedState;if(s!==null){n.pending=null;var _=s=s.next;do u=e(u,_.action),_=_.next;while(_!==s);sn(u,t.memoizedState)||(Bt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}function Tu(){}function Eu(e,t){var n=ot,r=en(),s=t(),u=!sn(r.memoizedState,s);if(u&&(r.memoizedState=s,Bt=!0),r=r.queue,Zs(zu.bind(null,n,r,e),[e]),r.getSnapshot!==t||u||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,_i(9,Mu.bind(null,n,r,s,t),void 0,null),Et===null)throw Error(o(349));ur&30||Du(n,t,s)}return s}function Du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mu(e,t,n,r){t.value=n,t.getSnapshot=r,bu(t)&&Au(e)}function zu(e,t,n){return n(function(){bu(t)&&Au(e)})}function bu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sn(e,n)}catch{return!0}}function Au(e){var t=Pn(e,1);t!==null&&dn(t,e,1,-1)}function Pu(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t.queue=e,e=e.dispatch=Jf.bind(null,ot,e),[t.memoizedState,e]}function _i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ru(){return en().memoizedState}function ha(e,t,n,r){var s=yn();ot.flags|=e,s.memoizedState=_i(1|t,n,void 0,r===void 0?null:r)}function ma(e,t,n,r){var s=en();r=r===void 0?null:r;var u=void 0;if(gt!==null){var _=gt.memoizedState;if(u=_.destroy,r!==null&&js(r,_.deps)){s.memoizedState=_i(t,n,u,r);return}}ot.flags|=e,s.memoizedState=_i(1|t,n,u,r)}function Lu(e,t){return ha(8390656,8,e,t)}function Zs(e,t){return ma(2048,8,e,t)}function Uu(e,t){return ma(4,2,e,t)}function ku(e,t){return ma(4,4,e,t)}function Cu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Iu(e,t,n){return n=n!=null?n.concat([e]):null,ma(4,4,Cu.bind(null,t,e),n)}function Js(){}function Fu(e,t){var n=en();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nu(e,t){var n=en();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ou(e,t,n){return ur&21?(sn(n,t)||(n=ml(),ot.lanes|=n,cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Bt=!0),e.memoizedState=n)}function Kf(e,t){var n=Qe;Qe=n!==0&&4>n?n:4,e(!0);var r=$s.transition;$s.transition={};try{e(!1),t()}finally{Qe=n,$s.transition=r}}function Gu(){return en().memoizedState}function Zf(e,t,n){var r=Kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bu(e))Wu(t,n);else if(n=vu(e,t,n,r),n!==null){var s=Nt();dn(n,e,r,s),Vu(n,t,r)}}function Jf(e,t,n){var r=Kn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Wu(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var _=t.lastRenderedState,z=u(_,n);if(s.hasEagerState=!0,s.eagerState=z,sn(z,_)){var R=t.interleaved;R===null?(s.next=s,Gs(t)):(s.next=R.next,R.next=s),t.interleaved=s;return}}catch{}finally{}n=vu(e,t,s,r),n!==null&&(s=Nt(),dn(n,e,r,s),Vu(n,t,r))}}function Bu(e){var t=e.alternate;return e===ot||t!==null&&t===ot}function Wu(e,t){pi=pa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ts(e,n)}}var _a={readContext:Jt,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},ep={readContext:Jt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:Lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ha(4194308,4,Cu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ha(4194308,4,e,t)},useInsertionEffect:function(e,t){return ha(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zf.bind(null,ot,e),[r.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:Pu,useDebugValue:Js,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Pu(!1),t=e[0];return e=Kf.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ot,s=yn();if(tt){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Et===null)throw Error(o(349));ur&30||Du(r,t,n)}s.memoizedState=n;var u={value:n,getSnapshot:t};return s.queue=u,Lu(zu.bind(null,r,u,e),[e]),r.flags|=2048,_i(9,Mu.bind(null,r,u,n,t),void 0,null),n},useId:function(){var e=yn(),t=Et.identifierPrefix;if(tt){var n=An,r=bn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tp={readContext:Jt,useCallback:Fu,useContext:Jt,useEffect:Zs,useImperativeHandle:Iu,useInsertionEffect:Uu,useLayoutEffect:ku,useMemo:Nu,useReducer:Xs,useRef:Ru,useState:function(){return Xs(mi)},useDebugValue:Js,useDeferredValue:function(e){var t=en();return Ou(t,gt.memoizedState,e)},useTransition:function(){var e=Xs(mi)[0],t=en().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:Eu,useId:Gu,unstable_isNewReconciler:!1},np={readContext:Jt,useCallback:Fu,useContext:Jt,useEffect:Zs,useImperativeHandle:Iu,useInsertionEffect:Uu,useLayoutEffect:ku,useMemo:Nu,useReducer:Ks,useRef:Ru,useState:function(){return Ks(mi)},useDebugValue:Js,useDeferredValue:function(e){var t=en();return gt===null?t.memoizedState=e:Ou(t,gt.memoizedState,e)},useTransition:function(){var e=Ks(mi)[0],t=en().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:Eu,useId:Gu,unstable_isNewReconciler:!1};function ln(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ga={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Nt(),s=Kn(e),u=Rn(r,s);u.payload=t,n!=null&&(u.callback=n),t=jn(e,u,s),t!==null&&(dn(t,e,s,r),ua(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Nt(),s=Kn(e),u=Rn(r,s);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=jn(e,u,s),t!==null&&(dn(t,e,s,r),ua(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nt(),r=Kn(e),s=Rn(n,r);s.tag=2,t!=null&&(s.callback=t),t=jn(e,s,r),t!==null&&(dn(t,e,r,n),ua(t,e,r))}};function qu(e,t,n,r,s,u,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,_):t.prototype&&t.prototype.isPureReactComponent?!ni(n,r)||!ni(s,u):!0}function Hu(e,t,n){var r=!1,s=qn,u=t.contextType;return typeof u=="object"&&u!==null?u=Jt(u):(s=Gt(t)?ir:Lt.current,r=t.contextTypes,u=(r=r!=null)?br(e,s):qn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ga,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=u),t}function $u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ga.enqueueReplaceState(t,t.state,null)}function to(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Bs(e);var u=t.contextType;typeof u=="object"&&u!==null?s.context=Jt(u):(u=Gt(t)?ir:Lt.current,s.context=br(e,u)),s.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(eo(e,t,u,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ga.enqueueReplaceState(s,s.state,null),ca(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t){try{var n="",r=t;do n+=Le(r),r=r.return;while(r);var s=n}catch(u){s=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:s,digest:null}}function no(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ro(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rp=typeof WeakMap=="function"?WeakMap:Map;function ju(e,t,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ea||(Ea=!0,yo=r),ro(e,t)},n}function Qu(e,t,n){n=Rn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ro(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){ro(e,t),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var _=t.stack;this.componentDidCatch(t.value,{componentStack:_!==null?_:""})}),n}function Yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rp;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=gp.bind(null,e,t,n),t.then(e,e))}function Xu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ku(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rn(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var ip=he.ReactCurrentOwner,Bt=!1;function Ft(e,t,n,r){t.child=e===null?gu(t,null,n,r):Lr(t,e.child,n,r)}function Zu(e,t,n,r,s){n=n.render;var u=t.ref;return kr(t,s),r=Qs(e,t,n,r,u,s),n=Ys(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ln(e,t,s)):(tt&&n&&Rs(t),t.flags|=1,Ft(e,t,r,s),t.child)}function Ju(e,t,n,r,s){if(e===null){var u=n.type;return typeof u=="function"&&!Mo(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,ec(e,t,u,r,s)):(e=Pa(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!(e.lanes&s)){var _=u.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(_,r)&&e.ref===t.ref)return Ln(e,t,s)}return t.flags|=1,e=Jn(u,r),e.ref=t.ref,e.return=t,t.child=e}function ec(e,t,n,r,s){if(e!==null){var u=e.memoizedProps;if(ni(u,r)&&e.ref===t.ref)if(Bt=!1,t.pendingProps=r=u,(e.lanes&s)!==0)e.flags&131072&&(Bt=!0);else return t.lanes=e.lanes,Ln(e,t,s)}return io(e,t,n,r,s)}function tc(e,t,n){var r=t.pendingProps,s=r.children,u=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Nr,Qt),Qt|=n;else{if(!(n&1073741824))return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ke(Nr,Qt),Qt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=u!==null?u.baseLanes:n,Ke(Nr,Qt),Qt|=r}else u!==null?(r=u.baseLanes|n,t.memoizedState=null):r=n,Ke(Nr,Qt),Qt|=r;return Ft(e,t,s,n),t.child}function nc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function io(e,t,n,r,s){var u=Gt(n)?ir:Lt.current;return u=br(t,u),kr(t,s),n=Qs(e,t,n,r,u,s),r=Ys(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ln(e,t,s)):(tt&&r&&Rs(t),t.flags|=1,Ft(e,t,n,s),t.child)}function rc(e,t,n,r,s){if(Gt(n)){var u=!0;ta(t)}else u=!1;if(kr(t,s),t.stateNode===null)ya(e,t),Hu(t,n,r),to(t,n,r,s),r=!0;else if(e===null){var _=t.stateNode,z=t.memoizedProps;_.props=z;var R=_.context,$=n.contextType;typeof $=="object"&&$!==null?$=Jt($):($=Gt(n)?ir:Lt.current,$=br(t,$));var ie=n.getDerivedStateFromProps,ae=typeof ie=="function"||typeof _.getSnapshotBeforeUpdate=="function";ae||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(z!==r||R!==$)&&$u(t,_,r,$),$n=!1;var re=t.memoizedState;_.state=re,ca(t,r,_,s),R=t.memoizedState,z!==r||re!==R||Ot.current||$n?(typeof ie=="function"&&(eo(t,n,ie,r),R=t.memoizedState),(z=$n||qu(t,n,z,r,re,R,$))?(ae||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(t.flags|=4194308)):(typeof _.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=R),_.props=r,_.state=R,_.context=$,r=z):(typeof _.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{_=t.stateNode,yu(e,t),z=t.memoizedProps,$=t.type===t.elementType?z:ln(t.type,z),_.props=$,ae=t.pendingProps,re=_.context,R=n.contextType,typeof R=="object"&&R!==null?R=Jt(R):(R=Gt(n)?ir:Lt.current,R=br(t,R));var de=n.getDerivedStateFromProps;(ie=typeof de=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(z!==ae||re!==R)&&$u(t,_,r,R),$n=!1,re=t.memoizedState,_.state=re,ca(t,r,_,s);var ge=t.memoizedState;z!==ae||re!==ge||Ot.current||$n?(typeof de=="function"&&(eo(t,n,de,r),ge=t.memoizedState),($=$n||qu(t,n,$,r,re,ge,R)||!1)?(ie||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(r,ge,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(r,ge,R)),typeof _.componentDidUpdate=="function"&&(t.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof _.componentDidUpdate!="function"||z===e.memoizedProps&&re===e.memoizedState||(t.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&re===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ge),_.props=r,_.state=ge,_.context=R,r=$):(typeof _.componentDidUpdate!="function"||z===e.memoizedProps&&re===e.memoizedState||(t.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&re===e.memoizedState||(t.flags|=1024),r=!1)}return ao(e,t,n,r,u,s)}function ao(e,t,n,r,s,u){nc(e,t);var _=(t.flags&128)!==0;if(!r&&!_)return s&&lu(t,n,!1),Ln(e,t,u);r=t.stateNode,ip.current=t;var z=_&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&_?(t.child=Lr(t,e.child,null,u),t.child=Lr(t,null,z,u)):Ft(e,t,z,u),t.memoizedState=r.state,s&&lu(t,n,!0),t.child}function ic(e){var t=e.stateNode;t.pendingContext?su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&su(e,t.context,!1),Ws(e,t.containerInfo)}function ac(e,t,n,r,s){return Rr(),Cs(s),t.flags|=256,Ft(e,t,n,r),t.child}var so={dehydrated:null,treeContext:null,retryLane:0};function oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function sc(e,t,n){var r=t.pendingProps,s=st.current,u=!1,_=(t.flags&128)!==0,z;if((z=_)||(z=e!==null&&e.memoizedState===null?!1:(s&2)!==0),z?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ke(st,s&1),e===null)return ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(_=r.children,e=r.fallback,u?(r=t.mode,u=t.child,_={mode:"hidden",children:_},!(r&1)&&u!==null?(u.childLanes=0,u.pendingProps=_):u=Ra(_,r,0,null),e=hr(e,r,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=oo(n),t.memoizedState=so,e):lo(t,_));if(s=e.memoizedState,s!==null&&(z=s.dehydrated,z!==null))return ap(e,t,_,r,z,s,n);if(u){u=r.fallback,_=t.mode,s=e.child,z=s.sibling;var R={mode:"hidden",children:r.children};return!(_&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=R,t.deletions=null):(r=Jn(s,R),r.subtreeFlags=s.subtreeFlags&14680064),z!==null?u=Jn(z,u):(u=hr(u,_,n,null),u.flags|=2),u.return=t,r.return=t,r.sibling=u,t.child=r,r=u,u=t.child,_=e.child.memoizedState,_=_===null?oo(n):{baseLanes:_.baseLanes|n,cachePool:null,transitions:_.transitions},u.memoizedState=_,u.childLanes=e.childLanes&~n,t.memoizedState=so,r}return u=e.child,e=u.sibling,r=Jn(u,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lo(e,t){return t=Ra({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function va(e,t,n,r){return r!==null&&Cs(r),Lr(t,e.child,null,n),e=lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ap(e,t,n,r,s,u,_){if(n)return t.flags&256?(t.flags&=-257,r=no(Error(o(422))),va(e,t,_,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=r.fallback,s=t.mode,r=Ra({mode:"visible",children:r.children},s,0,null),u=hr(u,s,_,null),u.flags|=2,r.return=t,u.return=t,r.sibling=u,t.child=r,t.mode&1&&Lr(t,e.child,null,_),t.child.memoizedState=oo(_),t.memoizedState=so,u);if(!(t.mode&1))return va(e,t,_,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var z=r.dgst;return r=z,u=Error(o(419)),r=no(u,r,void 0),va(e,t,_,r)}if(z=(_&e.childLanes)!==0,Bt||z){if(r=Et,r!==null){switch(_&-_){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|_)?0:s,s!==0&&s!==u.retryLane&&(u.retryLane=s,Pn(e,s),dn(r,e,s,-1))}return Do(),r=no(Error(o(421))),va(e,t,_,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=vp.bind(null,e),s._reactRetry=t,null):(e=u.treeContext,jt=Wn(s.nextSibling),$t=t,tt=!0,on=null,e!==null&&(Kt[Zt++]=bn,Kt[Zt++]=An,Kt[Zt++]=ar,bn=e.id,An=e.overflow,ar=t),t=lo(t,r.children),t.flags|=4096,t)}function oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Os(e.return,t,n)}function uo(e,t,n,r,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=s)}function lc(e,t,n){var r=t.pendingProps,s=r.revealOrder,u=r.tail;if(Ft(e,t,r.children,n),r=st.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oc(e,n,t);else if(e.tag===19)oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ke(st,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&da(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),uo(t,!1,s,n,u);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&da(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}uo(t,!0,n,null,u);break;case"together":uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ya(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sp(e,t,n){switch(t.tag){case 3:ic(t),Rr();break;case 5:Su(t);break;case 1:Gt(t.type)&&ta(t);break;case 4:Ws(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Ke(oa,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ke(st,st.current&1),t.flags|=128,null):n&t.child.childLanes?sc(e,t,n):(Ke(st,st.current&1),e=Ln(e,t,n),e!==null?e.sibling:null);Ke(st,st.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ke(st,st.current),r)break;return null;case 22:case 23:return t.lanes=0,tc(e,t,n)}return Ln(e,t,n)}var uc,co,cc,dc;uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},co=function(){},cc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,lr(vn.current);var u=null;switch(n){case"input":s=l(e,s),r=l(e,r),u=[];break;case"select":s=se({},s,{value:void 0}),r=se({},r,{value:void 0}),u=[];break;case"textarea":s=T(e,s),r=T(e,r),u=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}rt(n,r);var _;n=null;for($ in s)if(!r.hasOwnProperty($)&&s.hasOwnProperty($)&&s[$]!=null)if($==="style"){var z=s[$];for(_ in z)z.hasOwnProperty(_)&&(n||(n={}),n[_]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(g.hasOwnProperty($)?u||(u=[]):(u=u||[]).push($,null));for($ in r){var R=r[$];if(z=s!=null?s[$]:void 0,r.hasOwnProperty($)&&R!==z&&(R!=null||z!=null))if($==="style")if(z){for(_ in z)!z.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(n||(n={}),n[_]="");for(_ in R)R.hasOwnProperty(_)&&z[_]!==R[_]&&(n||(n={}),n[_]=R[_])}else n||(u||(u=[]),u.push($,n)),n=R;else $==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,z=z?z.__html:void 0,R!=null&&z!==R&&(u=u||[]).push($,R)):$==="children"?typeof R!="string"&&typeof R!="number"||(u=u||[]).push($,""+R):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(g.hasOwnProperty($)?(R!=null&&$==="onScroll"&&Ze("scroll",e),u||z===R||(u=[])):(u=u||[]).push($,R))}n&&(u=u||[]).push("style",n);var $=u;(t.updateQueue=$)&&(t.flags|=4)}},dc=function(e,t,n,r){n!==r&&(t.flags|=4)};function gi(e,t){if(!tt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function kt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function op(e,t,n){var r=t.pendingProps;switch(Ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(t),null;case 1:return Gt(t.type)&&ea(),kt(t),null;case 3:return r=t.stateNode,Cr(),Je(Ot),Je(Lt),Hs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(aa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,on!==null&&(So(on),on=null))),co(e,t),kt(t),null;case 5:Vs(t);var s=lr(fi.current);if(n=t.type,e!==null&&t.stateNode!=null)cc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(o(166));return kt(t),null}if(e=lr(vn.current),aa(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[gn]=t,r[oi]=u,e=(t.mode&1)!==0,n){case"dialog":Ze("cancel",r),Ze("close",r);break;case"iframe":case"object":case"embed":Ze("load",r);break;case"video":case"audio":for(s=0;s<ii.length;s++)Ze(ii[s],r);break;case"source":Ze("error",r);break;case"img":case"image":case"link":Ze("error",r),Ze("load",r);break;case"details":Ze("toggle",r);break;case"input":v(r,u),Ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},Ze("invalid",r);break;case"textarea":L(r,u),Ze("invalid",r)}rt(n,u),s=null;for(var _ in u)if(u.hasOwnProperty(_)){var z=u[_];_==="children"?typeof z=="string"?r.textContent!==z&&(u.suppressHydrationWarning!==!0&&Ki(r.textContent,z,e),s=["children",z]):typeof z=="number"&&r.textContent!==""+z&&(u.suppressHydrationWarning!==!0&&Ki(r.textContent,z,e),s=["children",""+z]):g.hasOwnProperty(_)&&z!=null&&_==="onScroll"&&Ze("scroll",r)}switch(n){case"input":E(r),x(r,u,!0);break;case"textarea":E(r),H(r);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(r.onclick=Zi)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{_=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Q(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=_.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=_.createElement(n,{is:r.is}):(e=_.createElement(n),n==="select"&&(_=e,r.multiple?_.multiple=!0:r.size&&(_.size=r.size))):e=_.createElementNS(e,n),e[gn]=t,e[oi]=r,uc(e,t,!1,!1),t.stateNode=e;e:{switch(_=ct(n,r),n){case"dialog":Ze("cancel",e),Ze("close",e),s=r;break;case"iframe":case"object":case"embed":Ze("load",e),s=r;break;case"video":case"audio":for(s=0;s<ii.length;s++)Ze(ii[s],e);s=r;break;case"source":Ze("error",e),s=r;break;case"img":case"image":case"link":Ze("error",e),Ze("load",e),s=r;break;case"details":Ze("toggle",e),s=r;break;case"input":v(e,r),s=l(e,r),Ze("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=se({},r,{value:void 0}),Ze("invalid",e);break;case"textarea":L(e,r),s=T(e,r),Ze("invalid",e);break;default:s=r}rt(n,s),z=s;for(u in z)if(z.hasOwnProperty(u)){var R=z[u];u==="style"?Xe(e,R):u==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&ze(e,R)):u==="children"?typeof R=="string"?(n!=="textarea"||R!=="")&&fe(e,R):typeof R=="number"&&fe(e,""+R):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(g.hasOwnProperty(u)?R!=null&&u==="onScroll"&&Ze("scroll",e):R!=null&&ue(e,u,R,_))}switch(n){case"input":E(e),x(e,r,!1);break;case"textarea":E(e),H(e);break;case"option":r.value!=null&&e.setAttribute("value",""+M(r.value));break;case"select":e.multiple=!!r.multiple,u=r.value,u!=null?y(e,!!r.multiple,u,!1):r.defaultValue!=null&&y(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return kt(t),null;case 6:if(e&&t.stateNode!=null)dc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(o(166));if(n=lr(fi.current),lr(vn.current),aa(t)){if(r=t.stateNode,n=t.memoizedProps,r[gn]=t,(u=r.nodeValue!==n)&&(e=$t,e!==null))switch(e.tag){case 3:Ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=t,t.stateNode=r}return kt(t),null;case 13:if(Je(st),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(tt&&jt!==null&&t.mode&1&&!(t.flags&128))hu(),Rr(),t.flags|=98560,u=!1;else if(u=aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[gn]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;kt(t),u=!1}else on!==null&&(So(on),on=null),u=!0;if(!u)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||st.current&1?vt===0&&(vt=3):Do())),t.updateQueue!==null&&(t.flags|=4),kt(t),null);case 4:return Cr(),co(e,t),e===null&&ai(t.stateNode.containerInfo),kt(t),null;case 10:return Ns(t.type._context),kt(t),null;case 17:return Gt(t.type)&&ea(),kt(t),null;case 19:if(Je(st),u=t.memoizedState,u===null)return kt(t),null;if(r=(t.flags&128)!==0,_=u.rendering,_===null)if(r)gi(u,!1);else{if(vt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(_=da(e),_!==null){for(t.flags|=128,gi(u,!1),r=_.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)u=n,e=r,u.flags&=14680066,_=u.alternate,_===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=_.childLanes,u.lanes=_.lanes,u.child=_.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=_.memoizedProps,u.memoizedState=_.memoizedState,u.updateQueue=_.updateQueue,u.type=_.type,e=_.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ke(st,st.current&1|2),t.child}e=e.sibling}u.tail!==null&&dt()>Or&&(t.flags|=128,r=!0,gi(u,!1),t.lanes=4194304)}else{if(!r)if(e=da(_),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gi(u,!0),u.tail===null&&u.tailMode==="hidden"&&!_.alternate&&!tt)return kt(t),null}else 2*dt()-u.renderingStartTime>Or&&n!==1073741824&&(t.flags|=128,r=!0,gi(u,!1),t.lanes=4194304);u.isBackwards?(_.sibling=t.child,t.child=_):(n=u.last,n!==null?n.sibling=_:t.child=_,u.last=_)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=dt(),t.sibling=null,n=st.current,Ke(st,r?n&1|2:n&1),t):(kt(t),null);case 22:case 23:return Eo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qt&1073741824&&(kt(t),t.subtreeFlags&6&&(t.flags|=8192)):kt(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function lp(e,t){switch(Ls(t),t.tag){case 1:return Gt(t.type)&&ea(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),Je(Ot),Je(Lt),Hs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vs(t),null;case 13:if(Je(st),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Je(st),null;case 4:return Cr(),null;case 10:return Ns(t.type._context),null;case 22:case 23:return Eo(),null;case 24:return null;default:return null}}var wa=!1,Ct=!1,up=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Fr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){lt(e,t,r)}else n.current=null}function fo(e,t,n){try{n()}catch(r){lt(e,t,r)}}var fc=!1;function cp(e,t){if(Ts=Gi,e=ql(),ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var _=0,z=-1,R=-1,$=0,ie=0,ae=e,re=null;t:for(;;){for(var de;ae!==n||s!==0&&ae.nodeType!==3||(z=_+s),ae!==u||r!==0&&ae.nodeType!==3||(R=_+r),ae.nodeType===3&&(_+=ae.nodeValue.length),(de=ae.firstChild)!==null;)re=ae,ae=de;for(;;){if(ae===e)break t;if(re===n&&++$===s&&(z=_),re===u&&++ie===r&&(R=_),(de=ae.nextSibling)!==null)break;ae=re,re=ae.parentNode}ae=de}n=z===-1||R===-1?null:{start:z,end:R}}else n=null}n=n||{start:0,end:0}}else n=null;for(Es={focusedElem:e,selectionRange:n},Gi=!1,pe=t;pe!==null;)if(t=pe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,pe=e;else for(;pe!==null;){t=pe;try{var ge=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ve=ge.memoizedProps,ft=ge.memoizedState,O=t.stateNode,C=O.getSnapshotBeforeUpdate(t.elementType===t.type?ve:ln(t.type,ve),ft);O.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var B=t.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(oe){lt(t,t.return,oe)}if(e=t.sibling,e!==null){e.return=t.return,pe=e;break}pe=t.return}return ge=fc,fc=!1,ge}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var u=s.destroy;s.destroy=void 0,u!==void 0&&fo(t,n,u)}s=s.next}while(s!==r)}}function xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function po(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pc(e){var t=e.alternate;t!==null&&(e.alternate=null,pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gn],delete t[oi],delete t[bs],delete t[$f],delete t[jf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hc(e){return e.tag===5||e.tag===3||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ho(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(ho(e,t,n),e=e.sibling;e!==null;)ho(e,t,n),e=e.sibling}function mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mo(e,t,n),e=e.sibling;e!==null;)mo(e,t,n),e=e.sibling}var zt=null,un=!1;function Qn(e,t,n){for(n=n.child;n!==null;)_c(e,t,n),n=n.sibling}function _c(e,t,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 5:Ct||Fr(n,t);case 6:var r=zt,s=un;zt=null,Qn(e,t,n),zt=r,un=s,zt!==null&&(un?(e=zt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(un?(e=zt,n=n.stateNode,e.nodeType===8?zs(e.parentNode,n):e.nodeType===1&&zs(e,n),Xr(e)):zs(zt,n.stateNode));break;case 4:r=zt,s=un,zt=n.stateNode.containerInfo,un=!0,Qn(e,t,n),zt=r,un=s;break;case 0:case 11:case 14:case 15:if(!Ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var u=s,_=u.destroy;u=u.tag,_!==void 0&&(u&2||u&4)&&fo(n,t,_),s=s.next}while(s!==r)}Qn(e,t,n);break;case 1:if(!Ct&&(Fr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(z){lt(n,t,z)}Qn(e,t,n);break;case 21:Qn(e,t,n);break;case 22:n.mode&1?(Ct=(r=Ct)||n.memoizedState!==null,Qn(e,t,n),Ct=r):Qn(e,t,n);break;default:Qn(e,t,n)}}function gc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new up),t.forEach(function(r){var s=yp.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var u=e,_=t,z=_;e:for(;z!==null;){switch(z.tag){case 5:zt=z.stateNode,un=!1;break e;case 3:zt=z.stateNode.containerInfo,un=!0;break e;case 4:zt=z.stateNode.containerInfo,un=!0;break e}z=z.return}if(zt===null)throw Error(o(160));_c(u,_,s),zt=null,un=!1;var R=s.alternate;R!==null&&(R.return=null),s.return=null}catch($){lt(s,t,$)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),wn(e),r&4){try{vi(3,e,e.return),xa(3,e)}catch(ve){lt(e,e.return,ve)}try{vi(5,e,e.return)}catch(ve){lt(e,e.return,ve)}}break;case 1:cn(t,e),wn(e),r&512&&n!==null&&Fr(n,n.return);break;case 5:if(cn(t,e),wn(e),r&512&&n!==null&&Fr(n,n.return),e.flags&32){var s=e.stateNode;try{fe(s,"")}catch(ve){lt(e,e.return,ve)}}if(r&4&&(s=e.stateNode,s!=null)){var u=e.memoizedProps,_=n!==null?n.memoizedProps:u,z=e.type,R=e.updateQueue;if(e.updateQueue=null,R!==null)try{z==="input"&&u.type==="radio"&&u.name!=null&&c(s,u),ct(z,_);var $=ct(z,u);for(_=0;_<R.length;_+=2){var ie=R[_],ae=R[_+1];ie==="style"?Xe(s,ae):ie==="dangerouslySetInnerHTML"?ze(s,ae):ie==="children"?fe(s,ae):ue(s,ie,ae,$)}switch(z){case"input":h(s,u);break;case"textarea":k(s,u);break;case"select":var re=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!u.multiple;var de=u.value;de!=null?y(s,!!u.multiple,de,!1):re!==!!u.multiple&&(u.defaultValue!=null?y(s,!!u.multiple,u.defaultValue,!0):y(s,!!u.multiple,u.multiple?[]:"",!1))}s[oi]=u}catch(ve){lt(e,e.return,ve)}}break;case 6:if(cn(t,e),wn(e),r&4){if(e.stateNode===null)throw Error(o(162));s=e.stateNode,u=e.memoizedProps;try{s.nodeValue=u}catch(ve){lt(e,e.return,ve)}}break;case 3:if(cn(t,e),wn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(ve){lt(e,e.return,ve)}break;case 4:cn(t,e),wn(e);break;case 13:cn(t,e),wn(e),s=e.child,s.flags&8192&&(u=s.memoizedState!==null,s.stateNode.isHidden=u,!u||s.alternate!==null&&s.alternate.memoizedState!==null||(vo=dt())),r&4&&gc(e);break;case 22:if(ie=n!==null&&n.memoizedState!==null,e.mode&1?(Ct=($=Ct)||ie,cn(t,e),Ct=$):cn(t,e),wn(e),r&8192){if($=e.memoizedState!==null,(e.stateNode.isHidden=$)&&!ie&&e.mode&1)for(pe=e,ie=e.child;ie!==null;){for(ae=pe=ie;pe!==null;){switch(re=pe,de=re.child,re.tag){case 0:case 11:case 14:case 15:vi(4,re,re.return);break;case 1:Fr(re,re.return);var ge=re.stateNode;if(typeof ge.componentWillUnmount=="function"){r=re,n=re.return;try{t=r,ge.props=t.memoizedProps,ge.state=t.memoizedState,ge.componentWillUnmount()}catch(ve){lt(r,n,ve)}}break;case 5:Fr(re,re.return);break;case 22:if(re.memoizedState!==null){xc(ae);continue}}de!==null?(de.return=re,pe=de):xc(ae)}ie=ie.sibling}e:for(ie=null,ae=e;;){if(ae.tag===5){if(ie===null){ie=ae;try{s=ae.stateNode,$?(u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(z=ae.stateNode,R=ae.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,z.style.display=Ge("display",_))}catch(ve){lt(e,e.return,ve)}}}else if(ae.tag===6){if(ie===null)try{ae.stateNode.nodeValue=$?"":ae.memoizedProps}catch(ve){lt(e,e.return,ve)}}else if((ae.tag!==22&&ae.tag!==23||ae.memoizedState===null||ae===e)&&ae.child!==null){ae.child.return=ae,ae=ae.child;continue}if(ae===e)break e;for(;ae.sibling===null;){if(ae.return===null||ae.return===e)break e;ie===ae&&(ie=null),ae=ae.return}ie===ae&&(ie=null),ae.sibling.return=ae.return,ae=ae.sibling}}break;case 19:cn(t,e),wn(e),r&4&&gc(e);break;case 21:break;default:cn(t,e),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hc(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(fe(s,""),r.flags&=-33);var u=mc(e);mo(e,u,s);break;case 3:case 4:var _=r.stateNode.containerInfo,z=mc(e);ho(e,z,_);break;default:throw Error(o(161))}}catch(R){lt(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dp(e,t,n){pe=e,yc(e)}function yc(e,t,n){for(var r=(e.mode&1)!==0;pe!==null;){var s=pe,u=s.child;if(s.tag===22&&r){var _=s.memoizedState!==null||wa;if(!_){var z=s.alternate,R=z!==null&&z.memoizedState!==null||Ct;z=wa;var $=Ct;if(wa=_,(Ct=R)&&!$)for(pe=s;pe!==null;)_=pe,R=_.child,_.tag===22&&_.memoizedState!==null?Sc(s):R!==null?(R.return=_,pe=R):Sc(s);for(;u!==null;)pe=u,yc(u),u=u.sibling;pe=s,wa=z,Ct=$}wc(e)}else s.subtreeFlags&8772&&u!==null?(u.return=s,pe=u):wc(e)}}function wc(e){for(;pe!==null;){var t=pe;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ct||xa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ct)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:ln(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&xu(t,u,r);break;case 3:var _=t.updateQueue;if(_!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xu(t,_,n)}break;case 5:var z=t.stateNode;if(n===null&&t.flags&4){n=z;var R=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&n.focus();break;case"img":R.src&&(n.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var $=t.alternate;if($!==null){var ie=$.memoizedState;if(ie!==null){var ae=ie.dehydrated;ae!==null&&Xr(ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Ct||t.flags&512&&po(t)}catch(re){lt(t,t.return,re)}}if(t===e){pe=null;break}if(n=t.sibling,n!==null){n.return=t.return,pe=n;break}pe=t.return}}function xc(e){for(;pe!==null;){var t=pe;if(t===e){pe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,pe=n;break}pe=t.return}}function Sc(e){for(;pe!==null;){var t=pe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xa(4,t)}catch(R){lt(t,n,R)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(R){lt(t,s,R)}}var u=t.return;try{po(t)}catch(R){lt(t,u,R)}break;case 5:var _=t.return;try{po(t)}catch(R){lt(t,_,R)}}}catch(R){lt(t,t.return,R)}if(t===e){pe=null;break}var z=t.sibling;if(z!==null){z.return=t.return,pe=z;break}pe=t.return}}var fp=Math.ceil,Sa=he.ReactCurrentDispatcher,_o=he.ReactCurrentOwner,tn=he.ReactCurrentBatchConfig,qe=0,Et=null,_t=null,bt=0,Qt=0,Nr=Vn(0),vt=0,yi=null,cr=0,Ta=0,go=0,wi=null,Wt=null,vo=0,Or=1/0,Un=null,Ea=!1,yo=null,Yn=null,Da=!1,Xn=null,Ma=0,xi=0,wo=null,za=-1,ba=0;function Nt(){return qe&6?dt():za!==-1?za:za=dt()}function Kn(e){return e.mode&1?qe&2&&bt!==0?bt&-bt:Yf.transition!==null?(ba===0&&(ba=ml()),ba):(e=Qe,e!==0||(e=window.event,e=e===void 0?16:El(e.type)),e):1}function dn(e,t,n,r){if(50<xi)throw xi=0,wo=null,Error(o(185));Hr(e,n,r),(!(qe&2)||e!==Et)&&(e===Et&&(!(qe&2)&&(Ta|=n),vt===4&&Zn(e,bt)),Vt(e,r),n===1&&qe===0&&!(t.mode&1)&&(Or=dt()+500,na&&Hn()))}function Vt(e,t){var n=e.callbackNode;Qd(e,t);var r=Fi(e,e===Et?bt:0);if(r===0)n!==null&&fl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fl(n),t===1)e.tag===0?Qf(Ec.bind(null,e)):uu(Ec.bind(null,e)),qf(function(){!(qe&6)&&Hn()}),n=null;else{switch(_l(r)){case 1:n=Za;break;case 4:n=pl;break;case 16:n=Ui;break;case 536870912:n=hl;break;default:n=Ui}n=Lc(n,Tc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tc(e,t){if(za=-1,ba=0,qe&6)throw Error(o(327));var n=e.callbackNode;if(Gr()&&e.callbackNode!==n)return null;var r=Fi(e,e===Et?bt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Aa(e,r);else{t=r;var s=qe;qe|=2;var u=Mc();(Et!==e||bt!==t)&&(Un=null,Or=dt()+500,fr(e,t));do try{mp();break}catch(z){Dc(e,z)}while(!0);Fs(),Sa.current=u,qe=s,_t!==null?t=0:(Et=null,bt=0,t=vt)}if(t!==0){if(t===2&&(s=Ja(e),s!==0&&(r=s,t=xo(e,s))),t===1)throw n=yi,fr(e,0),Zn(e,r),Vt(e,dt()),n;if(t===6)Zn(e,r);else{if(s=e.current.alternate,!(r&30)&&!pp(s)&&(t=Aa(e,r),t===2&&(u=Ja(e),u!==0&&(r=u,t=xo(e,u))),t===1))throw n=yi,fr(e,0),Zn(e,r),Vt(e,dt()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:pr(e,Wt,Un);break;case 3:if(Zn(e,r),(r&130023424)===r&&(t=vo+500-dt(),10<t)){if(Fi(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Nt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ms(pr.bind(null,e,Wt,Un),t);break}pr(e,Wt,Un);break;case 4:if(Zn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var _=31-an(r);u=1<<_,_=t[_],_>s&&(s=_),r&=~u}if(r=s,r=dt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fp(r/1960))-r,10<r){e.timeoutHandle=Ms(pr.bind(null,e,Wt,Un),r);break}pr(e,Wt,Un);break;case 5:pr(e,Wt,Un);break;default:throw Error(o(329))}}}return Vt(e,dt()),e.callbackNode===n?Tc.bind(null,e):null}function xo(e,t){var n=wi;return e.current.memoizedState.isDehydrated&&(fr(e,t).flags|=256),e=Aa(e,t),e!==2&&(t=Wt,Wt=n,t!==null&&So(t)),e}function So(e){Wt===null?Wt=e:Wt.push.apply(Wt,e)}function pp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],u=s.getSnapshot;s=s.value;try{if(!sn(u(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t){for(t&=~go,t&=~Ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function Ec(e){if(qe&6)throw Error(o(327));Gr();var t=Fi(e,0);if(!(t&1))return Vt(e,dt()),null;var n=Aa(e,t);if(e.tag!==0&&n===2){var r=Ja(e);r!==0&&(t=r,n=xo(e,r))}if(n===1)throw n=yi,fr(e,0),Zn(e,t),Vt(e,dt()),n;if(n===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,Wt,Un),Vt(e,dt()),null}function To(e,t){var n=qe;qe|=1;try{return e(t)}finally{qe=n,qe===0&&(Or=dt()+500,na&&Hn())}}function dr(e){Xn!==null&&Xn.tag===0&&!(qe&6)&&Gr();var t=qe;qe|=1;var n=tn.transition,r=Qe;try{if(tn.transition=null,Qe=1,e)return e()}finally{Qe=r,tn.transition=n,qe=t,!(qe&6)&&Hn()}}function Eo(){Qt=Nr.current,Je(Nr)}function fr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vf(n)),_t!==null)for(n=_t.return;n!==null;){var r=n;switch(Ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ea();break;case 3:Cr(),Je(Ot),Je(Lt),Hs();break;case 5:Vs(r);break;case 4:Cr();break;case 13:Je(st);break;case 19:Je(st);break;case 10:Ns(r.type._context);break;case 22:case 23:Eo()}n=n.return}if(Et=e,_t=e=Jn(e.current,null),bt=Qt=t,vt=0,yi=null,go=Ta=cr=0,Wt=wi=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,u=n.pending;if(u!==null){var _=u.next;u.next=s,r.next=_}n.pending=r}or=null}return e}function Dc(e,t){do{var n=_t;try{if(Fs(),fa.current=_a,pa){for(var r=ot.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}pa=!1}if(ur=0,Tt=gt=ot=null,pi=!1,hi=0,_o.current=null,n===null||n.return===null){vt=1,yi=t,_t=null;break}e:{var u=e,_=n.return,z=n,R=t;if(t=bt,z.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var $=R,ie=z,ae=ie.tag;if(!(ie.mode&1)&&(ae===0||ae===11||ae===15)){var re=ie.alternate;re?(ie.updateQueue=re.updateQueue,ie.memoizedState=re.memoizedState,ie.lanes=re.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var de=Xu(_);if(de!==null){de.flags&=-257,Ku(de,_,z,u,t),de.mode&1&&Yu(u,$,t),t=de,R=$;var ge=t.updateQueue;if(ge===null){var ve=new Set;ve.add(R),t.updateQueue=ve}else ge.add(R);break e}else{if(!(t&1)){Yu(u,$,t),Do();break e}R=Error(o(426))}}else if(tt&&z.mode&1){var ft=Xu(_);if(ft!==null){!(ft.flags&65536)&&(ft.flags|=256),Ku(ft,_,z,u,t),Cs(Ir(R,z));break e}}u=R=Ir(R,z),vt!==4&&(vt=2),wi===null?wi=[u]:wi.push(u),u=_;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var O=ju(u,R,t);wu(u,O);break e;case 1:z=R;var C=u.type,B=u.stateNode;if(!(u.flags&128)&&(typeof C.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Yn===null||!Yn.has(B)))){u.flags|=65536,t&=-t,u.lanes|=t;var oe=Qu(u,z,t);wu(u,oe);break e}}u=u.return}while(u!==null)}bc(n)}catch(we){t=we,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function Mc(){var e=Sa.current;return Sa.current=_a,e===null?_a:e}function Do(){(vt===0||vt===3||vt===2)&&(vt=4),Et===null||!(cr&268435455)&&!(Ta&268435455)||Zn(Et,bt)}function Aa(e,t){var n=qe;qe|=2;var r=Mc();(Et!==e||bt!==t)&&(Un=null,fr(e,t));do try{hp();break}catch(s){Dc(e,s)}while(!0);if(Fs(),qe=n,Sa.current=r,_t!==null)throw Error(o(261));return Et=null,bt=0,vt}function hp(){for(;_t!==null;)zc(_t)}function mp(){for(;_t!==null&&!Od();)zc(_t)}function zc(e){var t=Rc(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?bc(e):_t=t,_o.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lp(n,t),n!==null){n.flags&=32767,_t=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{vt=6,_t=null;return}}else if(n=op(n,t,Qt),n!==null){_t=n;return}if(t=t.sibling,t!==null){_t=t;return}_t=t=e}while(t!==null);vt===0&&(vt=5)}function pr(e,t,n){var r=Qe,s=tn.transition;try{tn.transition=null,Qe=1,_p(e,t,n,r)}finally{tn.transition=s,Qe=r}return null}function _p(e,t,n,r){do Gr();while(Xn!==null);if(qe&6)throw Error(o(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(Yd(e,u),e===Et&&(_t=Et=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Da||(Da=!0,Lc(Ui,function(){return Gr(),null})),u=(n.flags&15990)!==0,n.subtreeFlags&15990||u){u=tn.transition,tn.transition=null;var _=Qe;Qe=1;var z=qe;qe|=4,_o.current=null,cp(e,n),vc(n,e),If(Es),Gi=!!Ts,Es=Ts=null,e.current=n,dp(n),Gd(),qe=z,Qe=_,tn.transition=u}else e.current=n;if(Da&&(Da=!1,Xn=e,Ma=s),u=e.pendingLanes,u===0&&(Yn=null),Vd(n.stateNode),Vt(e,dt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ea)throw Ea=!1,e=yo,yo=null,e;return Ma&1&&e.tag!==0&&Gr(),u=e.pendingLanes,u&1?e===wo?xi++:(xi=0,wo=e):xi=0,Hn(),null}function Gr(){if(Xn!==null){var e=_l(Ma),t=tn.transition,n=Qe;try{if(tn.transition=null,Qe=16>e?16:e,Xn===null)var r=!1;else{if(e=Xn,Xn=null,Ma=0,qe&6)throw Error(o(331));var s=qe;for(qe|=4,pe=e.current;pe!==null;){var u=pe,_=u.child;if(pe.flags&16){var z=u.deletions;if(z!==null){for(var R=0;R<z.length;R++){var $=z[R];for(pe=$;pe!==null;){var ie=pe;switch(ie.tag){case 0:case 11:case 15:vi(8,ie,u)}var ae=ie.child;if(ae!==null)ae.return=ie,pe=ae;else for(;pe!==null;){ie=pe;var re=ie.sibling,de=ie.return;if(pc(ie),ie===$){pe=null;break}if(re!==null){re.return=de,pe=re;break}pe=de}}}var ge=u.alternate;if(ge!==null){var ve=ge.child;if(ve!==null){ge.child=null;do{var ft=ve.sibling;ve.sibling=null,ve=ft}while(ve!==null)}}pe=u}}if(u.subtreeFlags&2064&&_!==null)_.return=u,pe=_;else e:for(;pe!==null;){if(u=pe,u.flags&2048)switch(u.tag){case 0:case 11:case 15:vi(9,u,u.return)}var O=u.sibling;if(O!==null){O.return=u.return,pe=O;break e}pe=u.return}}var C=e.current;for(pe=C;pe!==null;){_=pe;var B=_.child;if(_.subtreeFlags&2064&&B!==null)B.return=_,pe=B;else e:for(_=C;pe!==null;){if(z=pe,z.flags&2048)try{switch(z.tag){case 0:case 11:case 15:xa(9,z)}}catch(we){lt(z,z.return,we)}if(z===_){pe=null;break e}var oe=z.sibling;if(oe!==null){oe.return=z.return,pe=oe;break e}pe=z.return}}if(qe=s,Hn(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{Qe=n,tn.transition=t}}return!1}function Ac(e,t,n){t=Ir(n,t),t=ju(e,t,1),e=jn(e,t,1),t=Nt(),e!==null&&(Hr(e,1,t),Vt(e,t))}function lt(e,t,n){if(e.tag===3)Ac(e,e,n);else for(;t!==null;){if(t.tag===3){Ac(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=Ir(n,e),e=Qu(t,e,1),t=jn(t,e,1),e=Nt(),t!==null&&(Hr(t,1,e),Vt(t,e));break}}t=t.return}}function gp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Nt(),e.pingedLanes|=e.suspendedLanes&n,Et===e&&(bt&n)===n&&(vt===4||vt===3&&(bt&130023424)===bt&&500>dt()-vo?fr(e,0):go|=n),Vt(e,t)}function Pc(e,t){t===0&&(e.mode&1?(t=Ii,Ii<<=1,!(Ii&130023424)&&(Ii=4194304)):t=1);var n=Nt();e=Pn(e,t),e!==null&&(Hr(e,t,n),Vt(e,n))}function vp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pc(e,n)}function yp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}r!==null&&r.delete(t),Pc(e,n)}var Rc;Rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ot.current)Bt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Bt=!1,sp(e,t,n);Bt=!!(e.flags&131072)}else Bt=!1,tt&&t.flags&1048576&&cu(t,ia,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ya(e,t),e=t.pendingProps;var s=br(t,Lt.current);kr(t,n),s=Qs(null,t,r,e,s,n);var u=Ys();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Gt(r)?(u=!0,ta(t)):u=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Bs(t),s.updater=ga,t.stateNode=s,s._reactInternals=t,to(t,r,e,n),t=ao(null,t,r,!0,u,n)):(t.tag=0,tt&&u&&Rs(t),Ft(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ya(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=xp(r),e=ln(r,e),s){case 0:t=io(null,t,r,e,n);break e;case 1:t=rc(null,t,r,e,n);break e;case 11:t=Zu(null,t,r,e,n);break e;case 14:t=Ju(null,t,r,ln(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ln(r,s),io(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ln(r,s),rc(e,t,r,s,n);case 3:e:{if(ic(t),e===null)throw Error(o(387));r=t.pendingProps,u=t.memoizedState,s=u.element,yu(e,t),ca(t,r,null,n);var _=t.memoizedState;if(r=_.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){s=Ir(Error(o(423)),t),t=ac(e,t,r,n,s);break e}else if(r!==s){s=Ir(Error(o(424)),t),t=ac(e,t,r,n,s);break e}else for(jt=Wn(t.stateNode.containerInfo.firstChild),$t=t,tt=!0,on=null,n=gu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===s){t=Ln(e,t,n);break e}Ft(e,t,r,n)}t=t.child}return t;case 5:return Su(t),e===null&&ks(t),r=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,_=s.children,Ds(r,s)?_=null:u!==null&&Ds(r,u)&&(t.flags|=32),nc(e,t),Ft(e,t,_,n),t.child;case 6:return e===null&&ks(t),null;case 13:return sc(e,t,n);case 4:return Ws(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Lr(t,null,r,n):Ft(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ln(r,s),Zu(e,t,r,s,n);case 7:return Ft(e,t,t.pendingProps,n),t.child;case 8:return Ft(e,t,t.pendingProps.children,n),t.child;case 12:return Ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,u=t.memoizedProps,_=s.value,Ke(oa,r._currentValue),r._currentValue=_,u!==null)if(sn(u.value,_)){if(u.children===s.children&&!Ot.current){t=Ln(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var z=u.dependencies;if(z!==null){_=u.child;for(var R=z.firstContext;R!==null;){if(R.context===r){if(u.tag===1){R=Rn(-1,n&-n),R.tag=2;var $=u.updateQueue;if($!==null){$=$.shared;var ie=$.pending;ie===null?R.next=R:(R.next=ie.next,ie.next=R),$.pending=R}}u.lanes|=n,R=u.alternate,R!==null&&(R.lanes|=n),Os(u.return,n,t),z.lanes|=n;break}R=R.next}}else if(u.tag===10)_=u.type===t.type?null:u.child;else if(u.tag===18){if(_=u.return,_===null)throw Error(o(341));_.lanes|=n,z=_.alternate,z!==null&&(z.lanes|=n),Os(_,n,t),_=u.sibling}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}Ft(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,kr(t,n),s=Jt(s),r=r(s),t.flags|=1,Ft(e,t,r,n),t.child;case 14:return r=t.type,s=ln(r,t.pendingProps),s=ln(r.type,s),Ju(e,t,r,s,n);case 15:return ec(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ln(r,s),ya(e,t),t.tag=1,Gt(r)?(e=!0,ta(t)):e=!1,kr(t,n),Hu(t,r,s),to(t,r,s,n),ao(null,t,r,!0,e,n);case 19:return lc(e,t,n);case 22:return tc(e,t,n)}throw Error(o(156,t.tag))};function Lc(e,t){return dl(e,t)}function wp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(e,t,n,r){return new wp(e,t,n,r)}function Mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return Mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===De)return 11;if(e===Ye)return 14}return 2}function Jn(e,t){var n=e.alternate;return n===null?(n=nn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pa(e,t,n,r,s,u){var _=2;if(r=e,typeof e=="function")Mo(e)&&(_=1);else if(typeof e=="string")_=5;else e:switch(e){case Ce:return hr(n.children,s,u,t);case We:_=8,s|=8;break;case Ne:return e=nn(12,n,t,s|2),e.elementType=Ne,e.lanes=u,e;case Pe:return e=nn(13,n,t,s),e.elementType=Pe,e.lanes=u,e;case xe:return e=nn(19,n,t,s),e.elementType=xe,e.lanes=u,e;case Ve:return Ra(n,s,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oe:_=10;break e;case je:_=9;break e;case De:_=11;break e;case Ye:_=14;break e;case He:_=16,r=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=nn(_,n,t,s),t.elementType=e,t.type=r,t.lanes=u,t}function hr(e,t,n,r){return e=nn(7,e,r,t),e.lanes=n,e}function Ra(e,t,n,r){return e=nn(22,e,r,t),e.elementType=Ve,e.lanes=n,e.stateNode={isHidden:!1},e}function zo(e,t,n){return e=nn(6,e,null,t),e.lanes=n,e}function bo(e,t,n){return t=nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sp(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ao(e,t,n,r,s,u,_,z,R){return e=new Sp(e,t,n,z,R),t===1?(t=1,u===!0&&(t|=8)):t=0,u=nn(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(u),e}function Tp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uc(e){if(!e)return qn;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var n=e.type;if(Gt(n))return ou(e,n,t)}return t}function kc(e,t,n,r,s,u,_,z,R){return e=Ao(n,r,!0,e,s,u,_,z,R),e.context=Uc(null),n=e.current,r=Nt(),s=Kn(n),u=Rn(r,s),u.callback=t??null,jn(n,u,s),e.current.lanes=s,Hr(e,s,r),Vt(e,r),e}function La(e,t,n,r){var s=t.current,u=Nt(),_=Kn(s);return n=Uc(n),t.context===null?t.context=n:t.pendingContext=n,t=Rn(u,_),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jn(s,t,_),e!==null&&(dn(e,s,_,u),ua(e,s,_)),_}function Ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Po(e,t){Cc(e,t),(e=e.alternate)&&Cc(e,t)}var Ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ro(e){this._internalRoot=e}ka.prototype.render=Ro.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));La(e,t,null,null)},ka.prototype.unmount=Ro.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dr(function(){La(null,e,null,null)}),t[Mn]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=yl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<On.length&&t!==0&&t<On[n].priority;n++);On.splice(n,0,e),n===0&&Sl(e)}};function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fc(){}function Ep(e,t,n,r,s){if(s){if(typeof r=="function"){var u=r;r=function(){var $=Ua(_);u.call($)}}var _=kc(t,r,e,0,null,!1,!1,"",Fc);return e._reactRootContainer=_,e[Mn]=_.current,ai(e.nodeType===8?e.parentNode:e),dr(),_}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var z=r;r=function(){var $=Ua(R);z.call($)}}var R=Ao(e,0,!1,null,null,!1,!1,"",Fc);return e._reactRootContainer=R,e[Mn]=R.current,ai(e.nodeType===8?e.parentNode:e),dr(function(){La(t,R,n,r)}),R}function Ia(e,t,n,r,s){var u=n._reactRootContainer;if(u){var _=u;if(typeof s=="function"){var z=s;s=function(){var R=Ua(_);z.call(R)}}La(t,_,e,s)}else _=Ep(n,t,e,s,r);return Ua(_)}gl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(ts(t,n|1),Vt(t,dt()),!(qe&6)&&(Or=dt()+500,Hn()))}break;case 13:dr(function(){var r=Pn(e,1);if(r!==null){var s=Nt();dn(r,e,1,s)}}),Po(e,1)}},ns=function(e){if(e.tag===13){var t=Pn(e,134217728);if(t!==null){var n=Nt();dn(t,e,134217728,n)}Po(e,134217728)}},vl=function(e){if(e.tag===13){var t=Kn(e),n=Pn(e,t);if(n!==null){var r=Nt();dn(n,e,t,r)}Po(e,t)}},yl=function(){return Qe},wl=function(e,t){var n=Qe;try{return Qe=e,t()}finally{Qe=n}},mt=function(e,t,n){switch(t){case"input":if(h(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Ji(r);if(!s)throw Error(o(90));P(r),h(r,s)}}}break;case"textarea":k(e,n);break;case"select":t=n.value,t!=null&&y(e,!!n.multiple,t,!1)}},St=To,Pt=dr;var Dp={usingClientEntryPoint:!1,Events:[li,Mr,Ji,wt,xt,To]},Si={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mp={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:he.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ul(e),e===null?null:e.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{ki=Fa.inject(Mp),_n=Fa}catch{}}return qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp,qt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lo(t))throw Error(o(200));return Tp(e,t,null,n)},qt.createRoot=function(e,t){if(!Lo(e))throw Error(o(299));var n=!1,r="",s=Ic;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ao(e,1,!1,null,null,n,!1,r,s),e[Mn]=t.current,ai(e.nodeType===8?e.parentNode:e),new Ro(t)},qt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=ul(t),e=e===null?null:e.stateNode,e},qt.flushSync=function(e){return dr(e)},qt.hydrate=function(e,t,n){if(!Ca(t))throw Error(o(200));return Ia(null,e,t,!0,n)},qt.hydrateRoot=function(e,t,n){if(!Lo(e))throw Error(o(405));var r=n!=null&&n.hydratedSources||null,s=!1,u="",_=Ic;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),t=kc(t,null,e,1,n??null,s,!1,u,_),e[Mn]=t.current,ai(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new ka(t)},qt.render=function(e,t,n){if(!Ca(t))throw Error(o(200));return Ia(null,e,t,!1,n)},qt.unmountComponentAtNode=function(e){if(!Ca(e))throw Error(o(40));return e._reactRootContainer?(dr(function(){Ia(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1},qt.unstable_batchedUpdates=To,qt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ca(n))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ia(e,t,n,!1,r)},qt.version="18.3.1-next-f1338f8080-20240426",qt}var Hc;function yd(){if(Hc)return Co.exports;Hc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Co.exports=Cp(),Co.exports}var $c;function Ip(){if($c)return Na;$c=1;var a=yd();return Na.createRoot=a.createRoot,Na.hydrateRoot=a.hydrateRoot,Na}var Fp=Ip(),Ei={},jc;function Np(){if(jc)return Ei;jc=1,Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.parse=S,Ei.serialize=b;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,f=/^[\u0020-\u003A\u003D-\u007E]*$/,g=Object.prototype.toString,w=(()=>{const F=function(){};return F.prototype=Object.create(null),F})();function S(F,J){const j=new w,ee=F.length;if(ee<2)return j;const te=(J==null?void 0:J.decode)||G;let X=0;do{const Z=F.indexOf("=",X);if(Z===-1)break;const ue=F.indexOf(";",X),he=ue===-1?ee:ue;if(Z>he){X=F.lastIndexOf(";",Z-1)+1;continue}const Ue=A(F,X,Z),ke=D(F,Z,Ue),Ce=F.slice(Ue,ke);if(j[Ce]===void 0){let We=A(F,Z+1,he),Ne=D(F,he,We);const Oe=te(F.slice(We,Ne));j[Ce]=Oe}X=he+1}while(X<ee);return j}function A(F,J,j){do{const ee=F.charCodeAt(J);if(ee!==32&&ee!==9)return J}while(++J<j);return j}function D(F,J,j){for(;J>j;){const ee=F.charCodeAt(--J);if(ee!==32&&ee!==9)return J+1}return j}function b(F,J,j){const ee=(j==null?void 0:j.encode)||encodeURIComponent;if(!a.test(F))throw new TypeError(`argument name is invalid: ${F}`);const te=ee(J);if(!i.test(te))throw new TypeError(`argument val is invalid: ${J}`);let X=F+"="+te;if(!j)return X;if(j.maxAge!==void 0){if(!Number.isInteger(j.maxAge))throw new TypeError(`option maxAge is invalid: ${j.maxAge}`);X+="; Max-Age="+j.maxAge}if(j.domain){if(!o.test(j.domain))throw new TypeError(`option domain is invalid: ${j.domain}`);X+="; Domain="+j.domain}if(j.path){if(!f.test(j.path))throw new TypeError(`option path is invalid: ${j.path}`);X+="; Path="+j.path}if(j.expires){if(!N(j.expires)||!Number.isFinite(j.expires.valueOf()))throw new TypeError(`option expires is invalid: ${j.expires}`);X+="; Expires="+j.expires.toUTCString()}if(j.httpOnly&&(X+="; HttpOnly"),j.secure&&(X+="; Secure"),j.partitioned&&(X+="; Partitioned"),j.priority)switch(typeof j.priority=="string"?j.priority.toLowerCase():void 0){case"low":X+="; Priority=Low";break;case"medium":X+="; Priority=Medium";break;case"high":X+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${j.priority}`)}if(j.sameSite)switch(typeof j.sameSite=="string"?j.sameSite.toLowerCase():j.sameSite){case!0:case"strict":X+="; SameSite=Strict";break;case"lax":X+="; SameSite=Lax";break;case"none":X+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${j.sameSite}`)}return X}function G(F){if(F.indexOf("%")===-1)return F;try{return decodeURIComponent(F)}catch{return F}}function N(F){return g.call(F)==="[object Date]"}return Ei}Np();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Qc="popstate";function Op(a={}){function i(g,w){let{pathname:S="/",search:A="",hash:D=""}=_r(g.location.hash.substring(1));return!S.startsWith("/")&&!S.startsWith(".")&&(S="/"+S),$o("",{pathname:S,search:A,hash:D},w.state&&w.state.usr||null,w.state&&w.state.key||"default")}function o(g,w){let S=g.document.querySelector("base"),A="";if(S&&S.getAttribute("href")){let D=g.location.href,b=D.indexOf("#");A=b===-1?D:D.slice(0,b)}return A+"#"+(typeof w=="string"?w:Mi(w))}function f(g,w){Xt(g.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(w)})`)}return Bp(i,o,f,a)}function nt(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function Xt(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Gp(){return Math.random().toString(36).substring(2,10)}function Yc(a,i){return{usr:a.state,key:a.key,idx:i}}function $o(a,i,o=null,f){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?_r(i):i,state:o,key:i&&i.key||f||Gp()}}function Mi({pathname:a="/",search:i="",hash:o=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function _r(a){let i={};if(a){let o=a.indexOf("#");o>=0&&(i.hash=a.substring(o),a=a.substring(0,o));let f=a.indexOf("?");f>=0&&(i.search=a.substring(f),a=a.substring(0,f)),a&&(i.pathname=a)}return i}function Bp(a,i,o,f={}){let{window:g=document.defaultView,v5Compat:w=!1}=f,S=g.history,A="POP",D=null,b=G();b==null&&(b=0,S.replaceState({...S.state,idx:b},""));function G(){return(S.state||{idx:null}).idx}function N(){A="POP";let te=G(),X=te==null?null:te-b;b=te,D&&D({action:A,location:ee.location,delta:X})}function F(te,X){A="PUSH";let Z=$o(ee.location,te,X);o(Z,te),b=G()+1;let ue=Yc(Z,b),he=ee.createHref(Z);try{S.pushState(ue,"",he)}catch(Ue){if(Ue instanceof DOMException&&Ue.name==="DataCloneError")throw Ue;g.location.assign(he)}w&&D&&D({action:A,location:ee.location,delta:1})}function J(te,X){A="REPLACE";let Z=$o(ee.location,te,X);o(Z,te),b=G();let ue=Yc(Z,b),he=ee.createHref(Z);S.replaceState(ue,"",he),w&&D&&D({action:A,location:ee.location,delta:0})}function j(te){let X=g.location.origin!=="null"?g.location.origin:g.location.href,Z=typeof te=="string"?te:Mi(te);return Z=Z.replace(/ $/,"%20"),nt(X,`No window.location.(origin|href) available to create URL for href: ${Z}`),new URL(Z,X)}let ee={get action(){return A},get location(){return a(g,S)},listen(te){if(D)throw new Error("A history only accepts one active listener");return g.addEventListener(Qc,N),D=te,()=>{g.removeEventListener(Qc,N),D=null}},createHref(te){return i(g,te)},createURL:j,encodeLocation(te){let X=j(te);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:F,replace:J,go(te){return S.go(te)}};return ee}function wd(a,i,o="/"){return Wp(a,i,o,!1)}function Wp(a,i,o,f){let g=typeof i=="string"?_r(i):i,w=nr(g.pathname||"/",o);if(w==null)return null;let S=xd(a);Vp(S);let A=null;for(let D=0;A==null&&D<S.length;++D){let b=eh(w);A=Zp(S[D],b,f)}return A}function xd(a,i=[],o=[],f=""){let g=(w,S,A)=>{let D={relativePath:A===void 0?w.path||"":A,caseSensitive:w.caseSensitive===!0,childrenIndex:S,route:w};D.relativePath.startsWith("/")&&(nt(D.relativePath.startsWith(f),`Absolute route path "${D.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),D.relativePath=D.relativePath.slice(f.length));let b=kn([f,D.relativePath]),G=o.concat(D);w.children&&w.children.length>0&&(nt(w.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),xd(w.children,i,G,b)),!(w.path==null&&!w.index)&&i.push({path:b,score:Xp(b,w.index),routesMeta:G})};return a.forEach((w,S)=>{var A;if(w.path===""||!((A=w.path)!=null&&A.includes("?")))g(w,S);else for(let D of Sd(w.path))g(w,S,D)}),i}function Sd(a){let i=a.split("/");if(i.length===0)return[];let[o,...f]=i,g=o.endsWith("?"),w=o.replace(/\?$/,"");if(f.length===0)return g?[w,""]:[w];let S=Sd(f.join("/")),A=[];return A.push(...S.map(D=>D===""?w:[w,D].join("/"))),g&&A.push(...S),A.map(D=>a.startsWith("/")&&D===""?"/":D)}function Vp(a){a.sort((i,o)=>i.score!==o.score?o.score-i.score:Kp(i.routesMeta.map(f=>f.childrenIndex),o.routesMeta.map(f=>f.childrenIndex)))}var qp=/^:[\w-]+$/,Hp=3,$p=2,jp=1,Qp=10,Yp=-2,Xc=a=>a==="*";function Xp(a,i){let o=a.split("/"),f=o.length;return o.some(Xc)&&(f+=Yp),i&&(f+=$p),o.filter(g=>!Xc(g)).reduce((g,w)=>g+(qp.test(w)?Hp:w===""?jp:Qp),f)}function Kp(a,i){return a.length===i.length&&a.slice(0,-1).every((f,g)=>f===i[g])?a[a.length-1]-i[i.length-1]:0}function Zp(a,i,o=!1){let{routesMeta:f}=a,g={},w="/",S=[];for(let A=0;A<f.length;++A){let D=f[A],b=A===f.length-1,G=w==="/"?i:i.slice(w.length)||"/",N=$a({path:D.relativePath,caseSensitive:D.caseSensitive,end:b},G),F=D.route;if(!N&&b&&o&&!f[f.length-1].route.index&&(N=$a({path:D.relativePath,caseSensitive:D.caseSensitive,end:!1},G)),!N)return null;Object.assign(g,N.params),S.push({params:g,pathname:kn([w,N.pathname]),pathnameBase:ih(kn([w,N.pathnameBase])),route:F}),N.pathnameBase!=="/"&&(w=kn([w,N.pathnameBase]))}return S}function $a(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,f]=Jp(a.path,a.caseSensitive,a.end),g=i.match(o);if(!g)return null;let w=g[0],S=w.replace(/(.)\/+$/,"$1"),A=g.slice(1);return{params:f.reduce((b,{paramName:G,isOptional:N},F)=>{if(G==="*"){let j=A[F]||"";S=w.slice(0,w.length-j.length).replace(/(.)\/+$/,"$1")}const J=A[F];return N&&!J?b[G]=void 0:b[G]=(J||"").replace(/%2F/g,"/"),b},{}),pathname:w,pathnameBase:S,pattern:a}}function Jp(a,i=!1,o=!0){Xt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let f=[],g="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,A,D)=>(f.push({paramName:A,isOptional:D!=null}),D?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(f.push({paramName:"*"}),g+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?g+="\\/*$":a!==""&&a!=="/"&&(g+="(?:(?=\\/|$))"),[new RegExp(g,i?void 0:"i"),f]}function eh(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Xt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function nr(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,f=a.charAt(o);return f&&f!=="/"?null:a.slice(o)||"/"}function th(a,i="/"){let{pathname:o,search:f="",hash:g=""}=typeof a=="string"?_r(a):a;return{pathname:o?o.startsWith("/")?o:nh(o,i):i,search:ah(f),hash:sh(g)}}function nh(a,i){let o=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(g=>{g===".."?o.length>1&&o.pop():g!=="."&&o.push(g)}),o.length>1?o.join("/"):"/"}function No(a,i,o,f){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rh(a){return a.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Ko(a){let i=rh(a);return i.map((o,f)=>f===i.length-1?o.pathname:o.pathnameBase)}function Zo(a,i,o,f=!1){let g;typeof a=="string"?g=_r(a):(g={...a},nt(!g.pathname||!g.pathname.includes("?"),No("?","pathname","search",g)),nt(!g.pathname||!g.pathname.includes("#"),No("#","pathname","hash",g)),nt(!g.search||!g.search.includes("#"),No("#","search","hash",g)));let w=a===""||g.pathname==="",S=w?"/":g.pathname,A;if(S==null)A=o;else{let N=i.length-1;if(!f&&S.startsWith("..")){let F=S.split("/");for(;F[0]==="..";)F.shift(),N-=1;g.pathname=F.join("/")}A=N>=0?i[N]:"/"}let D=th(g,A),b=S&&S!=="/"&&S.endsWith("/"),G=(w||S===".")&&o.endsWith("/");return!D.pathname.endsWith("/")&&(b||G)&&(D.pathname+="/"),D}var kn=a=>a.join("/").replace(/\/\/+/g,"/"),ih=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),ah=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,sh=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function oh(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Td=["POST","PUT","PATCH","DELETE"];new Set(Td);var lh=["GET",...Td];new Set(lh);var Wr=Y.createContext(null);Wr.displayName="DataRouter";var Qa=Y.createContext(null);Qa.displayName="DataRouterState";var Ed=Y.createContext({isTransitioning:!1});Ed.displayName="ViewTransition";var uh=Y.createContext(new Map);uh.displayName="Fetchers";var ch=Y.createContext(null);ch.displayName="Await";var fn=Y.createContext(null);fn.displayName="Navigation";var bi=Y.createContext(null);bi.displayName="Location";var Sn=Y.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var Jo=Y.createContext(null);Jo.displayName="RouteError";function dh(a,{relative:i}={}){nt(Vr(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:f}=Y.useContext(fn),{hash:g,pathname:w,search:S}=Ai(a,{relative:i}),A=w;return o!=="/"&&(A=w==="/"?o:kn([o,w])),f.createHref({pathname:A,search:S,hash:g})}function Vr(){return Y.useContext(bi)!=null}function Tn(){return nt(Vr(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(bi).location}var Dd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Md(a){Y.useContext(fn).static||Y.useLayoutEffect(a)}function el(){let{isDataRoute:a}=Y.useContext(Sn);return a?Eh():fh()}function fh(){nt(Vr(),"useNavigate() may be used only in the context of a <Router> component.");let a=Y.useContext(Wr),{basename:i,navigator:o}=Y.useContext(fn),{matches:f}=Y.useContext(Sn),{pathname:g}=Tn(),w=JSON.stringify(Ko(f)),S=Y.useRef(!1);return Md(()=>{S.current=!0}),Y.useCallback((D,b={})=>{if(Xt(S.current,Dd),!S.current)return;if(typeof D=="number"){o.go(D);return}let G=Zo(D,JSON.parse(w),g,b.relative==="path");a==null&&i!=="/"&&(G.pathname=G.pathname==="/"?i:kn([i,G.pathname])),(b.replace?o.replace:o.push)(G,b.state,b)},[i,o,w,g,a])}Y.createContext(null);function Ai(a,{relative:i}={}){let{matches:o}=Y.useContext(Sn),{pathname:f}=Tn(),g=JSON.stringify(Ko(o));return Y.useMemo(()=>Zo(a,JSON.parse(g),f,i==="path"),[a,g,f,i])}function ph(a,i){return zd(a,i)}function zd(a,i,o,f){var X;nt(Vr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:g}=Y.useContext(fn),{matches:w}=Y.useContext(Sn),S=w[w.length-1],A=S?S.params:{},D=S?S.pathname:"/",b=S?S.pathnameBase:"/",G=S&&S.route;{let Z=G&&G.path||"";bd(D,!G||Z.endsWith("*")||Z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${D}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z==="/"?"*":`${Z}/*`}">.`)}let N=Tn(),F;if(i){let Z=typeof i=="string"?_r(i):i;nt(b==="/"||((X=Z.pathname)==null?void 0:X.startsWith(b)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Z.pathname}" was given in the \`location\` prop.`),F=Z}else F=N;let J=F.pathname||"/",j=J;if(b!=="/"){let Z=b.replace(/^\//,"").split("/");j="/"+J.replace(/^\//,"").split("/").slice(Z.length).join("/")}let ee=wd(a,{pathname:j});Xt(G||ee!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),Xt(ee==null||ee[ee.length-1].route.element!==void 0||ee[ee.length-1].route.Component!==void 0||ee[ee.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let te=vh(ee&&ee.map(Z=>Object.assign({},Z,{params:Object.assign({},A,Z.params),pathname:kn([b,g.encodeLocation?g.encodeLocation(Z.pathname).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?b:kn([b,g.encodeLocation?g.encodeLocation(Z.pathnameBase).pathname:Z.pathnameBase])})),w,o,f);return i&&te?Y.createElement(bi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...F},navigationType:"POP"}},te):te}function hh(){let a=Th(),i=oh(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,f="rgba(200,200,200, 0.5)",g={padding:"0.5rem",backgroundColor:f},w={padding:"2px 4px",backgroundColor:f},S=null;return console.error("Error handled by React Router default ErrorBoundary:",a),S=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:w},"ErrorBoundary")," or"," ",Y.createElement("code",{style:w},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},i),o?Y.createElement("pre",{style:g},o):null,S)}var mh=Y.createElement(hh,null),_h=class extends Y.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){console.error("React Router caught the following error during render",a,i)}render(){return this.state.error!==void 0?Y.createElement(Sn.Provider,{value:this.props.routeContext},Y.createElement(Jo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function gh({routeContext:a,match:i,children:o}){let f=Y.useContext(Wr);return f&&f.static&&f.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=i.route.id),Y.createElement(Sn.Provider,{value:a},o)}function vh(a,i=[],o=null,f=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let g=a,w=o==null?void 0:o.errors;if(w!=null){let D=g.findIndex(b=>b.route.id&&(w==null?void 0:w[b.route.id])!==void 0);nt(D>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(w).join(",")}`),g=g.slice(0,Math.min(g.length,D+1))}let S=!1,A=-1;if(o)for(let D=0;D<g.length;D++){let b=g[D];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(A=D),b.route.id){let{loaderData:G,errors:N}=o,F=b.route.loader&&!G.hasOwnProperty(b.route.id)&&(!N||N[b.route.id]===void 0);if(b.route.lazy||F){S=!0,A>=0?g=g.slice(0,A+1):g=[g[0]];break}}}return g.reduceRight((D,b,G)=>{let N,F=!1,J=null,j=null;o&&(N=w&&b.route.id?w[b.route.id]:void 0,J=b.route.errorElement||mh,S&&(A<0&&G===0?(bd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,j=null):A===G&&(F=!0,j=b.route.hydrateFallbackElement||null)));let ee=i.concat(g.slice(0,G+1)),te=()=>{let X;return N?X=J:F?X=j:b.route.Component?X=Y.createElement(b.route.Component,null):b.route.element?X=b.route.element:X=D,Y.createElement(gh,{match:b,routeContext:{outlet:D,matches:ee,isDataRoute:o!=null},children:X})};return o&&(b.route.ErrorBoundary||b.route.errorElement||G===0)?Y.createElement(_h,{location:o.location,revalidation:o.revalidation,component:J,error:N,children:te(),routeContext:{outlet:null,matches:ee,isDataRoute:!0}}):te()},null)}function tl(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yh(a){let i=Y.useContext(Wr);return nt(i,tl(a)),i}function wh(a){let i=Y.useContext(Qa);return nt(i,tl(a)),i}function xh(a){let i=Y.useContext(Sn);return nt(i,tl(a)),i}function nl(a){let i=xh(a),o=i.matches[i.matches.length-1];return nt(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function Sh(){return nl("useRouteId")}function Th(){var f;let a=Y.useContext(Jo),i=wh("useRouteError"),o=nl("useRouteError");return a!==void 0?a:(f=i.errors)==null?void 0:f[o]}function Eh(){let{router:a}=yh("useNavigate"),i=nl("useNavigate"),o=Y.useRef(!1);return Md(()=>{o.current=!0}),Y.useCallback(async(g,w={})=>{Xt(o.current,Dd),o.current&&(typeof g=="number"?a.navigate(g):await a.navigate(g,{fromRouteId:i,...w}))},[a,i])}var Kc={};function bd(a,i,o){!i&&!Kc[a]&&(Kc[a]=!0,Xt(!1,o))}Y.memo(Dh);function Dh({routes:a,future:i,state:o}){return zd(a,void 0,o,i)}function Mh({to:a,replace:i,state:o,relative:f}){nt(Vr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:g}=Y.useContext(fn);Xt(!g,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:w}=Y.useContext(Sn),{pathname:S}=Tn(),A=el(),D=Zo(a,Ko(w),S,f==="path"),b=JSON.stringify(D);return Y.useEffect(()=>{A(JSON.parse(b),{replace:i,state:o,relative:f})},[A,b,f,i,o]),null}function Wa(a){nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zh({basename:a="/",children:i=null,location:o,navigationType:f="POP",navigator:g,static:w=!1}){nt(!Vr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=a.replace(/^\/*/,"/"),A=Y.useMemo(()=>({basename:S,navigator:g,static:w,future:{}}),[S,g,w]);typeof o=="string"&&(o=_r(o));let{pathname:D="/",search:b="",hash:G="",state:N=null,key:F="default"}=o,J=Y.useMemo(()=>{let j=nr(D,S);return j==null?null:{location:{pathname:j,search:b,hash:G,state:N,key:F},navigationType:f}},[S,D,b,G,N,F,f]);return Xt(J!=null,`<Router basename="${S}"> is not able to match the URL "${D}${b}${G}" because it does not start with the basename, so the <Router> won't render anything.`),J==null?null:Y.createElement(fn.Provider,{value:A},Y.createElement(bi.Provider,{children:i,value:J}))}function bh({children:a,location:i}){return ph(jo(a),i)}function jo(a,i=[]){let o=[];return Y.Children.forEach(a,(f,g)=>{if(!Y.isValidElement(f))return;let w=[...i,g];if(f.type===Y.Fragment){o.push.apply(o,jo(f.props.children,w));return}nt(f.type===Wa,`[${typeof f.type=="string"?f.type:f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nt(!f.props.index||!f.props.children,"An index route cannot have child routes.");let S={id:f.props.id||w.join("-"),caseSensitive:f.props.caseSensitive,element:f.props.element,Component:f.props.Component,index:f.props.index,path:f.props.path,loader:f.props.loader,action:f.props.action,hydrateFallbackElement:f.props.hydrateFallbackElement,HydrateFallback:f.props.HydrateFallback,errorElement:f.props.errorElement,ErrorBoundary:f.props.ErrorBoundary,hasErrorBoundary:f.props.hasErrorBoundary===!0||f.props.ErrorBoundary!=null||f.props.errorElement!=null,shouldRevalidate:f.props.shouldRevalidate,handle:f.props.handle,lazy:f.props.lazy};f.props.children&&(S.children=jo(f.props.children,w)),o.push(S)}),o}var Va="get",qa="application/x-www-form-urlencoded";function Ya(a){return a!=null&&typeof a.tagName=="string"}function Ah(a){return Ya(a)&&a.tagName.toLowerCase()==="button"}function Ph(a){return Ya(a)&&a.tagName.toLowerCase()==="form"}function Rh(a){return Ya(a)&&a.tagName.toLowerCase()==="input"}function Lh(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Uh(a,i){return a.button===0&&(!i||i==="_self")&&!Lh(a)}function Qo(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((i,o)=>{let f=a[o];return i.concat(Array.isArray(f)?f.map(g=>[o,g]):[[o,f]])},[]))}function kh(a,i){let o=Qo(a);return i&&i.forEach((f,g)=>{o.has(g)||i.getAll(g).forEach(w=>{o.append(g,w)})}),o}var Oa=null;function Ch(){if(Oa===null)try{new FormData(document.createElement("form"),0),Oa=!1}catch{Oa=!0}return Oa}var Ih=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Oo(a){return a!=null&&!Ih.has(a)?(Xt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qa}"`),null):a}function Fh(a,i){let o,f,g,w,S;if(Ph(a)){let A=a.getAttribute("action");f=A?nr(A,i):null,o=a.getAttribute("method")||Va,g=Oo(a.getAttribute("enctype"))||qa,w=new FormData(a)}else if(Ah(a)||Rh(a)&&(a.type==="submit"||a.type==="image")){let A=a.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let D=a.getAttribute("formaction")||A.getAttribute("action");if(f=D?nr(D,i):null,o=a.getAttribute("formmethod")||A.getAttribute("method")||Va,g=Oo(a.getAttribute("formenctype"))||Oo(A.getAttribute("enctype"))||qa,w=new FormData(A,a),!Ch()){let{name:b,type:G,value:N}=a;if(G==="image"){let F=b?`${b}.`:"";w.append(`${F}x`,"0"),w.append(`${F}y`,"0")}else b&&w.append(b,N)}}else{if(Ya(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Va,f=null,g=qa,S=a}return w&&g==="text/plain"&&(S=w,w=void 0),{action:f,method:o.toLowerCase(),encType:g,formData:w,body:S}}function rl(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}async function Nh(a,i){if(a.id in i)return i[a.id];try{let o=await import(a.module);return i[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Oh(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Gh(a,i,o){let f=await Promise.all(a.map(async g=>{let w=i.routes[g.route.id];if(w){let S=await Nh(w,o);return S.links?S.links():[]}return[]}));return qh(f.flat(1).filter(Oh).filter(g=>g.rel==="stylesheet"||g.rel==="preload").map(g=>g.rel==="stylesheet"?{...g,rel:"prefetch",as:"style"}:{...g,rel:"prefetch"}))}function Zc(a,i,o,f,g,w){let S=(D,b)=>o[b]?D.route.id!==o[b].route.id:!0,A=(D,b)=>{var G;return o[b].pathname!==D.pathname||((G=o[b].route.path)==null?void 0:G.endsWith("*"))&&o[b].params["*"]!==D.params["*"]};return w==="assets"?i.filter((D,b)=>S(D,b)||A(D,b)):w==="data"?i.filter((D,b)=>{var N;let G=f.routes[D.route.id];if(!G||!G.hasLoader)return!1;if(S(D,b)||A(D,b))return!0;if(D.route.shouldRevalidate){let F=D.route.shouldRevalidate({currentUrl:new URL(g.pathname+g.search+g.hash,window.origin),currentParams:((N=o[0])==null?void 0:N.params)||{},nextUrl:new URL(a,window.origin),nextParams:D.params,defaultShouldRevalidate:!0});if(typeof F=="boolean")return F}return!0}):[]}function Bh(a,i){return Wh(a.map(o=>{let f=i.routes[o.route.id];if(!f)return[];let g=[f.module];return f.imports&&(g=g.concat(f.imports)),g}).flat(1))}function Wh(a){return[...new Set(a)]}function Vh(a){let i={},o=Object.keys(a).sort();for(let f of o)i[f]=a[f];return i}function qh(a,i){let o=new Set;return new Set(i),a.reduce((f,g)=>{let w=JSON.stringify(Vh(g));return o.has(w)||(o.add(w),f.push({key:w,link:g})),f},[])}function Hh(a){let i=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return i.pathname==="/"?i.pathname="_root.data":i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function $h(){let a=Y.useContext(Wr);return rl(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function jh(){let a=Y.useContext(Qa);return rl(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var il=Y.createContext(void 0);il.displayName="FrameworkContext";function Ad(){let a=Y.useContext(il);return rl(a,"You must render this element inside a <HydratedRouter> element"),a}function Qh(a,i){let o=Y.useContext(il),[f,g]=Y.useState(!1),[w,S]=Y.useState(!1),{onFocus:A,onBlur:D,onMouseEnter:b,onMouseLeave:G,onTouchStart:N}=i,F=Y.useRef(null);Y.useEffect(()=>{if(a==="render"&&S(!0),a==="viewport"){let ee=X=>{X.forEach(Z=>{S(Z.isIntersecting)})},te=new IntersectionObserver(ee,{threshold:.5});return F.current&&te.observe(F.current),()=>{te.disconnect()}}},[a]),Y.useEffect(()=>{if(f){let ee=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(ee)}}},[f]);let J=()=>{g(!0)},j=()=>{g(!1),S(!1)};return o?a!=="intent"?[w,F,{}]:[w,F,{onFocus:Di(A,J),onBlur:Di(D,j),onMouseEnter:Di(b,J),onMouseLeave:Di(G,j),onTouchStart:Di(N,J)}]:[!1,F,{}]}function Di(a,i){return o=>{a&&a(o),o.defaultPrevented||i(o)}}function Yh({page:a,...i}){let{router:o}=$h(),f=Y.useMemo(()=>wd(o.routes,a,o.basename),[o.routes,a,o.basename]);return f?Y.createElement(Kh,{page:a,matches:f,...i}):null}function Xh(a){let{manifest:i,routeModules:o}=Ad(),[f,g]=Y.useState([]);return Y.useEffect(()=>{let w=!1;return Gh(a,i,o).then(S=>{w||g(S)}),()=>{w=!0}},[a,i,o]),f}function Kh({page:a,matches:i,...o}){let f=Tn(),{manifest:g,routeModules:w}=Ad(),{loaderData:S,matches:A}=jh(),D=Y.useMemo(()=>Zc(a,i,A,g,f,"data"),[a,i,A,g,f]),b=Y.useMemo(()=>Zc(a,i,A,g,f,"assets"),[a,i,A,g,f]),G=Y.useMemo(()=>{if(a===f.pathname+f.search+f.hash)return[];let J=new Set,j=!1;if(i.forEach(te=>{var Z;let X=g.routes[te.route.id];!X||!X.hasLoader||(!D.some(ue=>ue.route.id===te.route.id)&&te.route.id in S&&((Z=w[te.route.id])!=null&&Z.shouldRevalidate)||X.hasClientLoader?j=!0:J.add(te.route.id))}),J.size===0)return[];let ee=Hh(a);return j&&J.size>0&&ee.searchParams.set("_routes",i.filter(te=>J.has(te.route.id)).map(te=>te.route.id).join(",")),[ee.pathname+ee.search]},[S,f,g,D,i,a,w]),N=Y.useMemo(()=>Bh(b,g),[b,g]),F=Xh(b);return Y.createElement(Y.Fragment,null,G.map(J=>Y.createElement("link",{key:J,rel:"prefetch",as:"fetch",href:J,...o})),N.map(J=>Y.createElement("link",{key:J,rel:"modulepreload",href:J,...o})),F.map(({key:J,link:j})=>Y.createElement("link",{key:J,...j})))}function Zh(...a){return i=>{a.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var Pd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Pd&&(window.__reactRouterVersion="7.1.3")}catch{}function Jh({basename:a,children:i,window:o}){let f=Y.useRef();f.current==null&&(f.current=Op({window:o,v5Compat:!0}));let g=f.current,[w,S]=Y.useState({action:g.action,location:g.location}),A=Y.useCallback(D=>{Y.startTransition(()=>S(D))},[S]);return Y.useLayoutEffect(()=>g.listen(A),[g,A]),Y.createElement(zh,{basename:a,children:i,location:w.location,navigationType:w.action,navigator:g})}var Rd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tr=Y.forwardRef(function({onClick:i,discover:o="render",prefetch:f="none",relative:g,reloadDocument:w,replace:S,state:A,target:D,to:b,preventScrollReset:G,viewTransition:N,...F},J){let{basename:j}=Y.useContext(fn),ee=typeof b=="string"&&Rd.test(b),te,X=!1;if(typeof b=="string"&&ee&&(te=b,Pd))try{let Ne=new URL(window.location.href),Oe=b.startsWith("//")?new URL(Ne.protocol+b):new URL(b),je=nr(Oe.pathname,j);Oe.origin===Ne.origin&&je!=null?b=je+Oe.search+Oe.hash:X=!0}catch{Xt(!1,`<Link to="${b}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=dh(b,{relative:g}),[ue,he,Ue]=Qh(f,F),ke=rm(b,{replace:S,state:A,target:D,preventScrollReset:G,relative:g,viewTransition:N});function Ce(Ne){i&&i(Ne),Ne.defaultPrevented||ke(Ne)}let We=Y.createElement("a",{...F,...Ue,href:te||Z,onClick:X||w?i:Ce,ref:Zh(J,he),target:D,"data-discover":!ee&&o==="render"?"true":void 0});return ue&&!ee?Y.createElement(Y.Fragment,null,We,Y.createElement(Yh,{page:Z})):We});tr.displayName="Link";var em=Y.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:f="",end:g=!1,style:w,to:S,viewTransition:A,children:D,...b},G){let N=Ai(S,{relative:b.relative}),F=Tn(),J=Y.useContext(Qa),{navigator:j,basename:ee}=Y.useContext(fn),te=J!=null&&lm(N)&&A===!0,X=j.encodeLocation?j.encodeLocation(N).pathname:N.pathname,Z=F.pathname,ue=J&&J.navigation&&J.navigation.location?J.navigation.location.pathname:null;o||(Z=Z.toLowerCase(),ue=ue?ue.toLowerCase():null,X=X.toLowerCase()),ue&&ee&&(ue=nr(ue,ee)||ue);const he=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let Ue=Z===X||!g&&Z.startsWith(X)&&Z.charAt(he)==="/",ke=ue!=null&&(ue===X||!g&&ue.startsWith(X)&&ue.charAt(X.length)==="/"),Ce={isActive:Ue,isPending:ke,isTransitioning:te},We=Ue?i:void 0,Ne;typeof f=="function"?Ne=f(Ce):Ne=[f,Ue?"active":null,ke?"pending":null,te?"transitioning":null].filter(Boolean).join(" ");let Oe=typeof w=="function"?w(Ce):w;return Y.createElement(tr,{...b,"aria-current":We,className:Ne,ref:G,style:Oe,to:S,viewTransition:A},typeof D=="function"?D(Ce):D)});em.displayName="NavLink";var tm=Y.forwardRef(({discover:a="render",fetcherKey:i,navigate:o,reloadDocument:f,replace:g,state:w,method:S=Va,action:A,onSubmit:D,relative:b,preventScrollReset:G,viewTransition:N,...F},J)=>{let j=sm(),ee=om(A,{relative:b}),te=S.toLowerCase()==="get"?"get":"post",X=typeof A=="string"&&Rd.test(A),Z=ue=>{if(D&&D(ue),ue.defaultPrevented)return;ue.preventDefault();let he=ue.nativeEvent.submitter,Ue=(he==null?void 0:he.getAttribute("formmethod"))||S;j(he||ue.currentTarget,{fetcherKey:i,method:Ue,navigate:o,replace:g,state:w,relative:b,preventScrollReset:G,viewTransition:N})};return Y.createElement("form",{ref:J,method:te,action:ee,onSubmit:f?D:Z,...F,"data-discover":!X&&a==="render"?"true":void 0})});tm.displayName="Form";function nm(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ld(a){let i=Y.useContext(Wr);return nt(i,nm(a)),i}function rm(a,{target:i,replace:o,state:f,preventScrollReset:g,relative:w,viewTransition:S}={}){let A=el(),D=Tn(),b=Ai(a,{relative:w});return Y.useCallback(G=>{if(Uh(G,i)){G.preventDefault();let N=o!==void 0?o:Mi(D)===Mi(b);A(a,{replace:N,state:f,preventScrollReset:g,relative:w,viewTransition:S})}},[D,A,b,o,f,i,a,g,w,S])}function Ud(a){Xt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let i=Y.useRef(Qo(a)),o=Y.useRef(!1),f=Tn(),g=Y.useMemo(()=>kh(f.search,o.current?null:i.current),[f.search]),w=el(),S=Y.useCallback((A,D)=>{const b=Qo(typeof A=="function"?A(g):A);o.current=!0,w("?"+b,D)},[w,g]);return[g,S]}var im=0,am=()=>`__${String(++im)}__`;function sm(){let{router:a}=Ld("useSubmit"),{basename:i}=Y.useContext(fn),o=Sh();return Y.useCallback(async(f,g={})=>{let{action:w,method:S,encType:A,formData:D,body:b}=Fh(f,i);if(g.navigate===!1){let G=g.fetcherKey||am();await a.fetch(G,o,g.action||w,{preventScrollReset:g.preventScrollReset,formData:D,body:b,formMethod:g.method||S,formEncType:g.encType||A,flushSync:g.flushSync})}else await a.navigate(g.action||w,{preventScrollReset:g.preventScrollReset,formData:D,body:b,formMethod:g.method||S,formEncType:g.encType||A,replace:g.replace,state:g.state,fromRouteId:o,flushSync:g.flushSync,viewTransition:g.viewTransition})},[a,i,o])}function om(a,{relative:i}={}){let{basename:o}=Y.useContext(fn),f=Y.useContext(Sn);nt(f,"useFormAction must be used inside a RouteContext");let[g]=f.matches.slice(-1),w={...Ai(a||".",{relative:i})},S=Tn();if(a==null){w.search=S.search;let A=new URLSearchParams(w.search),D=A.getAll("index");if(D.some(G=>G==="")){A.delete("index"),D.filter(N=>N).forEach(N=>A.append("index",N));let G=A.toString();w.search=G?`?${G}`:""}}return(!a||a===".")&&g.route.index&&(w.search=w.search?w.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(w.pathname=w.pathname==="/"?o:kn([o,w.pathname])),Mi(w)}function lm(a,i={}){let o=Y.useContext(Ed);nt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:f}=Ld("useViewTransitionState"),g=Ai(a,{relative:i.relative});if(!o.isTransitioning)return!1;let w=nr(o.currentLocation.pathname,f)||o.currentLocation.pathname,S=nr(o.nextLocation.pathname,f)||o.nextLocation.pathname;return $a(g.pathname,S)!=null||$a(g.pathname,w)!=null}new TextEncoder;const um=`struct VertexOut {
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
}`;function cm(a,i){return class extends a{constructor(...o){super(...o),i(this)}}}const dm=cm(Array,a=>a.fill(0));let Fe=1e-6;function fm(a){function i(l=0,v=0){const c=new a(2);return l!==void 0&&(c[0]=l,v!==void 0&&(c[1]=v)),c}const o=i;function f(l,v,c){const h=c??new a(2);return h[0]=l,h[1]=v,h}function g(l,v){const c=v??new a(2);return c[0]=Math.ceil(l[0]),c[1]=Math.ceil(l[1]),c}function w(l,v){const c=v??new a(2);return c[0]=Math.floor(l[0]),c[1]=Math.floor(l[1]),c}function S(l,v){const c=v??new a(2);return c[0]=Math.round(l[0]),c[1]=Math.round(l[1]),c}function A(l,v=0,c=1,h){const x=h??new a(2);return x[0]=Math.min(c,Math.max(v,l[0])),x[1]=Math.min(c,Math.max(v,l[1])),x}function D(l,v,c){const h=c??new a(2);return h[0]=l[0]+v[0],h[1]=l[1]+v[1],h}function b(l,v,c,h){const x=h??new a(2);return x[0]=l[0]+v[0]*c,x[1]=l[1]+v[1]*c,x}function G(l,v){const c=l[0],h=l[1],x=v[0],U=v[1],q=Math.sqrt(c*c+h*h),y=Math.sqrt(x*x+U*U),T=q*y,L=T&&Ne(l,v)/T;return Math.acos(L)}function N(l,v,c){const h=c??new a(2);return h[0]=l[0]-v[0],h[1]=l[1]-v[1],h}const F=N;function J(l,v){return Math.abs(l[0]-v[0])<Fe&&Math.abs(l[1]-v[1])<Fe}function j(l,v){return l[0]===v[0]&&l[1]===v[1]}function ee(l,v,c,h){const x=h??new a(2);return x[0]=l[0]+c*(v[0]-l[0]),x[1]=l[1]+c*(v[1]-l[1]),x}function te(l,v,c,h){const x=h??new a(2);return x[0]=l[0]+c[0]*(v[0]-l[0]),x[1]=l[1]+c[1]*(v[1]-l[1]),x}function X(l,v,c){const h=c??new a(2);return h[0]=Math.max(l[0],v[0]),h[1]=Math.max(l[1],v[1]),h}function Z(l,v,c){const h=c??new a(2);return h[0]=Math.min(l[0],v[0]),h[1]=Math.min(l[1],v[1]),h}function ue(l,v,c){const h=c??new a(2);return h[0]=l[0]*v,h[1]=l[1]*v,h}const he=ue;function Ue(l,v,c){const h=c??new a(2);return h[0]=l[0]/v,h[1]=l[1]/v,h}function ke(l,v){const c=v??new a(2);return c[0]=1/l[0],c[1]=1/l[1],c}const Ce=ke;function We(l,v,c){const h=c??new a(3),x=l[0]*v[1]-l[1]*v[0];return h[0]=0,h[1]=0,h[2]=x,h}function Ne(l,v){return l[0]*v[0]+l[1]*v[1]}function Oe(l){const v=l[0],c=l[1];return Math.sqrt(v*v+c*c)}const je=Oe;function De(l){const v=l[0],c=l[1];return v*v+c*c}const Pe=De;function xe(l,v){const c=l[0]-v[0],h=l[1]-v[1];return Math.sqrt(c*c+h*h)}const Ye=xe;function He(l,v){const c=l[0]-v[0],h=l[1]-v[1];return c*c+h*h}const Ve=He;function le(l,v){const c=v??new a(2),h=l[0],x=l[1],U=Math.sqrt(h*h+x*x);return U>1e-5?(c[0]=h/U,c[1]=x/U):(c[0]=0,c[1]=0),c}function ye(l,v){const c=v??new a(2);return c[0]=-l[0],c[1]=-l[1],c}function se(l,v){const c=v??new a(2);return c[0]=l[0],c[1]=l[1],c}const I=se;function ne(l,v,c){const h=c??new a(2);return h[0]=l[0]*v[0],h[1]=l[1]*v[1],h}const Me=ne;function Se(l,v,c){const h=c??new a(2);return h[0]=l[0]/v[0],h[1]=l[1]/v[1],h}const Le=Se;function Re(l=1,v){const c=v??new a(2),h=Math.random()*2*Math.PI;return c[0]=Math.cos(h)*l,c[1]=Math.sin(h)*l,c}function p(l){const v=l??new a(2);return v[0]=0,v[1]=0,v}function M(l,v,c){const h=c??new a(2),x=l[0],U=l[1];return h[0]=x*v[0]+U*v[4]+v[12],h[1]=x*v[1]+U*v[5]+v[13],h}function d(l,v,c){const h=c??new a(2),x=l[0],U=l[1];return h[0]=v[0]*x+v[4]*U+v[8],h[1]=v[1]*x+v[5]*U+v[9],h}function m(l,v,c,h){const x=h??new a(2),U=l[0]-v[0],q=l[1]-v[1],y=Math.sin(c),T=Math.cos(c);return x[0]=U*T-q*y+v[0],x[1]=U*y+q*T+v[1],x}function E(l,v,c){const h=c??new a(2);return le(l,h),ue(h,v,h)}function P(l,v,c){const h=c??new a(2);return Oe(l)>v?E(l,v,h):se(l,h)}function W(l,v,c){const h=c??new a(2);return ee(l,v,.5,h)}return{create:i,fromValues:o,set:f,ceil:g,floor:w,round:S,clamp:A,add:D,addScaled:b,angle:G,subtract:N,sub:F,equalsApproximately:J,equals:j,lerp:ee,lerpV:te,max:X,min:Z,mulScalar:ue,scale:he,divScalar:Ue,inverse:ke,invert:Ce,cross:We,dot:Ne,length:Oe,len:je,lengthSq:De,lenSq:Pe,distance:xe,dist:Ye,distanceSq:He,distSq:Ve,normalize:le,negate:ye,copy:se,clone:I,multiply:ne,mul:Me,divide:Se,div:Le,random:Re,zero:p,transformMat4:M,transformMat3:d,rotate:m,setLength:E,truncate:P,midpoint:W}}const Jc=new Map;function kd(a){let i=Jc.get(a);return i||(i=fm(a),Jc.set(a,i)),i}function pm(a){function i(y,T,L){const k=new a(3);return y!==void 0&&(k[0]=y,T!==void 0&&(k[1]=T,L!==void 0&&(k[2]=L))),k}const o=i;function f(y,T,L,k){const H=k??new a(3);return H[0]=y,H[1]=T,H[2]=L,H}function g(y,T){const L=T??new a(3);return L[0]=Math.ceil(y[0]),L[1]=Math.ceil(y[1]),L[2]=Math.ceil(y[2]),L}function w(y,T){const L=T??new a(3);return L[0]=Math.floor(y[0]),L[1]=Math.floor(y[1]),L[2]=Math.floor(y[2]),L}function S(y,T){const L=T??new a(3);return L[0]=Math.round(y[0]),L[1]=Math.round(y[1]),L[2]=Math.round(y[2]),L}function A(y,T=0,L=1,k){const H=k??new a(3);return H[0]=Math.min(L,Math.max(T,y[0])),H[1]=Math.min(L,Math.max(T,y[1])),H[2]=Math.min(L,Math.max(T,y[2])),H}function D(y,T,L){const k=L??new a(3);return k[0]=y[0]+T[0],k[1]=y[1]+T[1],k[2]=y[2]+T[2],k}function b(y,T,L,k){const H=k??new a(3);return H[0]=y[0]+T[0]*L,H[1]=y[1]+T[1]*L,H[2]=y[2]+T[2]*L,H}function G(y,T){const L=y[0],k=y[1],H=y[2],Q=T[0],K=T[1],me=T[2],ze=Math.sqrt(L*L+k*k+H*H),fe=Math.sqrt(Q*Q+K*K+me*me),_e=ze*fe,Ie=_e&&Ne(y,T)/_e;return Math.acos(Ie)}function N(y,T,L){const k=L??new a(3);return k[0]=y[0]-T[0],k[1]=y[1]-T[1],k[2]=y[2]-T[2],k}const F=N;function J(y,T){return Math.abs(y[0]-T[0])<Fe&&Math.abs(y[1]-T[1])<Fe&&Math.abs(y[2]-T[2])<Fe}function j(y,T){return y[0]===T[0]&&y[1]===T[1]&&y[2]===T[2]}function ee(y,T,L,k){const H=k??new a(3);return H[0]=y[0]+L*(T[0]-y[0]),H[1]=y[1]+L*(T[1]-y[1]),H[2]=y[2]+L*(T[2]-y[2]),H}function te(y,T,L,k){const H=k??new a(3);return H[0]=y[0]+L[0]*(T[0]-y[0]),H[1]=y[1]+L[1]*(T[1]-y[1]),H[2]=y[2]+L[2]*(T[2]-y[2]),H}function X(y,T,L){const k=L??new a(3);return k[0]=Math.max(y[0],T[0]),k[1]=Math.max(y[1],T[1]),k[2]=Math.max(y[2],T[2]),k}function Z(y,T,L){const k=L??new a(3);return k[0]=Math.min(y[0],T[0]),k[1]=Math.min(y[1],T[1]),k[2]=Math.min(y[2],T[2]),k}function ue(y,T,L){const k=L??new a(3);return k[0]=y[0]*T,k[1]=y[1]*T,k[2]=y[2]*T,k}const he=ue;function Ue(y,T,L){const k=L??new a(3);return k[0]=y[0]/T,k[1]=y[1]/T,k[2]=y[2]/T,k}function ke(y,T){const L=T??new a(3);return L[0]=1/y[0],L[1]=1/y[1],L[2]=1/y[2],L}const Ce=ke;function We(y,T,L){const k=L??new a(3),H=y[2]*T[0]-y[0]*T[2],Q=y[0]*T[1]-y[1]*T[0];return k[0]=y[1]*T[2]-y[2]*T[1],k[1]=H,k[2]=Q,k}function Ne(y,T){return y[0]*T[0]+y[1]*T[1]+y[2]*T[2]}function Oe(y){const T=y[0],L=y[1],k=y[2];return Math.sqrt(T*T+L*L+k*k)}const je=Oe;function De(y){const T=y[0],L=y[1],k=y[2];return T*T+L*L+k*k}const Pe=De;function xe(y,T){const L=y[0]-T[0],k=y[1]-T[1],H=y[2]-T[2];return Math.sqrt(L*L+k*k+H*H)}const Ye=xe;function He(y,T){const L=y[0]-T[0],k=y[1]-T[1],H=y[2]-T[2];return L*L+k*k+H*H}const Ve=He;function le(y,T){const L=T??new a(3),k=y[0],H=y[1],Q=y[2],K=Math.sqrt(k*k+H*H+Q*Q);return K>1e-5?(L[0]=k/K,L[1]=H/K,L[2]=Q/K):(L[0]=0,L[1]=0,L[2]=0),L}function ye(y,T){const L=T??new a(3);return L[0]=-y[0],L[1]=-y[1],L[2]=-y[2],L}function se(y,T){const L=T??new a(3);return L[0]=y[0],L[1]=y[1],L[2]=y[2],L}const I=se;function ne(y,T,L){const k=L??new a(3);return k[0]=y[0]*T[0],k[1]=y[1]*T[1],k[2]=y[2]*T[2],k}const Me=ne;function Se(y,T,L){const k=L??new a(3);return k[0]=y[0]/T[0],k[1]=y[1]/T[1],k[2]=y[2]/T[2],k}const Le=Se;function Re(y=1,T){const L=T??new a(3),k=Math.random()*2*Math.PI,H=Math.random()*2-1,Q=Math.sqrt(1-H*H)*y;return L[0]=Math.cos(k)*Q,L[1]=Math.sin(k)*Q,L[2]=H*y,L}function p(y){const T=y??new a(3);return T[0]=0,T[1]=0,T[2]=0,T}function M(y,T,L){const k=L??new a(3),H=y[0],Q=y[1],K=y[2],me=T[3]*H+T[7]*Q+T[11]*K+T[15]||1;return k[0]=(T[0]*H+T[4]*Q+T[8]*K+T[12])/me,k[1]=(T[1]*H+T[5]*Q+T[9]*K+T[13])/me,k[2]=(T[2]*H+T[6]*Q+T[10]*K+T[14])/me,k}function d(y,T,L){const k=L??new a(3),H=y[0],Q=y[1],K=y[2];return k[0]=H*T[0*4+0]+Q*T[1*4+0]+K*T[2*4+0],k[1]=H*T[0*4+1]+Q*T[1*4+1]+K*T[2*4+1],k[2]=H*T[0*4+2]+Q*T[1*4+2]+K*T[2*4+2],k}function m(y,T,L){const k=L??new a(3),H=y[0],Q=y[1],K=y[2];return k[0]=H*T[0]+Q*T[4]+K*T[8],k[1]=H*T[1]+Q*T[5]+K*T[9],k[2]=H*T[2]+Q*T[6]+K*T[10],k}function E(y,T,L){const k=L??new a(3),H=T[0],Q=T[1],K=T[2],me=T[3]*2,ze=y[0],fe=y[1],_e=y[2],Ie=Q*_e-K*fe,Ge=K*ze-H*_e,Xe=H*fe-Q*ze;return k[0]=ze+Ie*me+(Q*Xe-K*Ge)*2,k[1]=fe+Ge*me+(K*Ie-H*Xe)*2,k[2]=_e+Xe*me+(H*Ge-Q*Ie)*2,k}function P(y,T){const L=T??new a(3);return L[0]=y[12],L[1]=y[13],L[2]=y[14],L}function W(y,T,L){const k=L??new a(3),H=T*4;return k[0]=y[H+0],k[1]=y[H+1],k[2]=y[H+2],k}function l(y,T){const L=T??new a(3),k=y[0],H=y[1],Q=y[2],K=y[4],me=y[5],ze=y[6],fe=y[8],_e=y[9],Ie=y[10];return L[0]=Math.sqrt(k*k+H*H+Q*Q),L[1]=Math.sqrt(K*K+me*me+ze*ze),L[2]=Math.sqrt(fe*fe+_e*_e+Ie*Ie),L}function v(y,T,L,k){const H=k??new a(3),Q=[],K=[];return Q[0]=y[0]-T[0],Q[1]=y[1]-T[1],Q[2]=y[2]-T[2],K[0]=Q[0],K[1]=Q[1]*Math.cos(L)-Q[2]*Math.sin(L),K[2]=Q[1]*Math.sin(L)+Q[2]*Math.cos(L),H[0]=K[0]+T[0],H[1]=K[1]+T[1],H[2]=K[2]+T[2],H}function c(y,T,L,k){const H=k??new a(3),Q=[],K=[];return Q[0]=y[0]-T[0],Q[1]=y[1]-T[1],Q[2]=y[2]-T[2],K[0]=Q[2]*Math.sin(L)+Q[0]*Math.cos(L),K[1]=Q[1],K[2]=Q[2]*Math.cos(L)-Q[0]*Math.sin(L),H[0]=K[0]+T[0],H[1]=K[1]+T[1],H[2]=K[2]+T[2],H}function h(y,T,L,k){const H=k??new a(3),Q=[],K=[];return Q[0]=y[0]-T[0],Q[1]=y[1]-T[1],Q[2]=y[2]-T[2],K[0]=Q[0]*Math.cos(L)-Q[1]*Math.sin(L),K[1]=Q[0]*Math.sin(L)+Q[1]*Math.cos(L),K[2]=Q[2],H[0]=K[0]+T[0],H[1]=K[1]+T[1],H[2]=K[2]+T[2],H}function x(y,T,L){const k=L??new a(3);return le(y,k),ue(k,T,k)}function U(y,T,L){const k=L??new a(3);return Oe(y)>T?x(y,T,k):se(y,k)}function q(y,T,L){const k=L??new a(3);return ee(y,T,.5,k)}return{create:i,fromValues:o,set:f,ceil:g,floor:w,round:S,clamp:A,add:D,addScaled:b,angle:G,subtract:N,sub:F,equalsApproximately:J,equals:j,lerp:ee,lerpV:te,max:X,min:Z,mulScalar:ue,scale:he,divScalar:Ue,inverse:ke,invert:Ce,cross:We,dot:Ne,length:Oe,len:je,lengthSq:De,lenSq:Pe,distance:xe,dist:Ye,distanceSq:He,distSq:Ve,normalize:le,negate:ye,copy:se,clone:I,multiply:ne,mul:Me,divide:Se,div:Le,random:Re,zero:p,transformMat4:M,transformMat4Upper3x3:d,transformMat3:m,transformQuat:E,getTranslation:P,getAxis:W,getScaling:l,rotateX:v,rotateY:c,rotateZ:h,setLength:x,truncate:U,midpoint:q}}const ed=new Map;function Xa(a){let i=ed.get(a);return i||(i=pm(a),ed.set(a,i)),i}function hm(a){const i=kd(a),o=Xa(a);function f(p,M,d,m,E,P,W,l,v){const c=new a(12);return c[3]=0,c[7]=0,c[11]=0,p!==void 0&&(c[0]=p,M!==void 0&&(c[1]=M,d!==void 0&&(c[2]=d,m!==void 0&&(c[4]=m,E!==void 0&&(c[5]=E,P!==void 0&&(c[6]=P,W!==void 0&&(c[8]=W,l!==void 0&&(c[9]=l,v!==void 0&&(c[10]=v))))))))),c}function g(p,M,d,m,E,P,W,l,v,c){const h=c??new a(12);return h[0]=p,h[1]=M,h[2]=d,h[3]=0,h[4]=m,h[5]=E,h[6]=P,h[7]=0,h[8]=W,h[9]=l,h[10]=v,h[11]=0,h}function w(p,M){const d=M??new a(12);return d[0]=p[0],d[1]=p[1],d[2]=p[2],d[3]=0,d[4]=p[4],d[5]=p[5],d[6]=p[6],d[7]=0,d[8]=p[8],d[9]=p[9],d[10]=p[10],d[11]=0,d}function S(p,M){const d=M??new a(12),m=p[0],E=p[1],P=p[2],W=p[3],l=m+m,v=E+E,c=P+P,h=m*l,x=E*l,U=E*v,q=P*l,y=P*v,T=P*c,L=W*l,k=W*v,H=W*c;return d[0]=1-U-T,d[1]=x+H,d[2]=q-k,d[3]=0,d[4]=x-H,d[5]=1-h-T,d[6]=y+L,d[7]=0,d[8]=q+k,d[9]=y-L,d[10]=1-h-U,d[11]=0,d}function A(p,M){const d=M??new a(12);return d[0]=-p[0],d[1]=-p[1],d[2]=-p[2],d[4]=-p[4],d[5]=-p[5],d[6]=-p[6],d[8]=-p[8],d[9]=-p[9],d[10]=-p[10],d}function D(p,M){const d=M??new a(12);return d[0]=p[0],d[1]=p[1],d[2]=p[2],d[4]=p[4],d[5]=p[5],d[6]=p[6],d[8]=p[8],d[9]=p[9],d[10]=p[10],d}const b=D;function G(p,M){return Math.abs(p[0]-M[0])<Fe&&Math.abs(p[1]-M[1])<Fe&&Math.abs(p[2]-M[2])<Fe&&Math.abs(p[4]-M[4])<Fe&&Math.abs(p[5]-M[5])<Fe&&Math.abs(p[6]-M[6])<Fe&&Math.abs(p[8]-M[8])<Fe&&Math.abs(p[9]-M[9])<Fe&&Math.abs(p[10]-M[10])<Fe}function N(p,M){return p[0]===M[0]&&p[1]===M[1]&&p[2]===M[2]&&p[4]===M[4]&&p[5]===M[5]&&p[6]===M[6]&&p[8]===M[8]&&p[9]===M[9]&&p[10]===M[10]}function F(p){const M=p??new a(12);return M[0]=1,M[1]=0,M[2]=0,M[4]=0,M[5]=1,M[6]=0,M[8]=0,M[9]=0,M[10]=1,M}function J(p,M){const d=M??new a(12);if(d===p){let U;return U=p[1],p[1]=p[4],p[4]=U,U=p[2],p[2]=p[8],p[8]=U,U=p[6],p[6]=p[9],p[9]=U,d}const m=p[0*4+0],E=p[0*4+1],P=p[0*4+2],W=p[1*4+0],l=p[1*4+1],v=p[1*4+2],c=p[2*4+0],h=p[2*4+1],x=p[2*4+2];return d[0]=m,d[1]=W,d[2]=c,d[4]=E,d[5]=l,d[6]=h,d[8]=P,d[9]=v,d[10]=x,d}function j(p,M){const d=M??new a(12),m=p[0*4+0],E=p[0*4+1],P=p[0*4+2],W=p[1*4+0],l=p[1*4+1],v=p[1*4+2],c=p[2*4+0],h=p[2*4+1],x=p[2*4+2],U=x*l-v*h,q=-x*W+v*c,y=h*W-l*c,T=1/(m*U+E*q+P*y);return d[0]=U*T,d[1]=(-x*E+P*h)*T,d[2]=(v*E-P*l)*T,d[4]=q*T,d[5]=(x*m-P*c)*T,d[6]=(-v*m+P*W)*T,d[8]=y*T,d[9]=(-h*m+E*c)*T,d[10]=(l*m-E*W)*T,d}function ee(p){const M=p[0],d=p[0*4+1],m=p[0*4+2],E=p[1*4+0],P=p[1*4+1],W=p[1*4+2],l=p[2*4+0],v=p[2*4+1],c=p[2*4+2];return M*(P*c-v*W)-E*(d*c-v*m)+l*(d*W-P*m)}const te=j;function X(p,M,d){const m=d??new a(12),E=p[0],P=p[1],W=p[2],l=p[4],v=p[5],c=p[6],h=p[8],x=p[9],U=p[10],q=M[0],y=M[1],T=M[2],L=M[4],k=M[5],H=M[6],Q=M[8],K=M[9],me=M[10];return m[0]=E*q+l*y+h*T,m[1]=P*q+v*y+x*T,m[2]=W*q+c*y+U*T,m[4]=E*L+l*k+h*H,m[5]=P*L+v*k+x*H,m[6]=W*L+c*k+U*H,m[8]=E*Q+l*K+h*me,m[9]=P*Q+v*K+x*me,m[10]=W*Q+c*K+U*me,m}const Z=X;function ue(p,M,d){const m=d??F();return p!==m&&(m[0]=p[0],m[1]=p[1],m[2]=p[2],m[4]=p[4],m[5]=p[5],m[6]=p[6]),m[8]=M[0],m[9]=M[1],m[10]=1,m}function he(p,M){const d=M??i.create();return d[0]=p[8],d[1]=p[9],d}function Ue(p,M,d){const m=d??i.create(),E=M*4;return m[0]=p[E+0],m[1]=p[E+1],m}function ke(p,M,d,m){const E=m===p?p:D(p,m),P=d*4;return E[P+0]=M[0],E[P+1]=M[1],E}function Ce(p,M){const d=M??i.create(),m=p[0],E=p[1],P=p[4],W=p[5];return d[0]=Math.sqrt(m*m+E*E),d[1]=Math.sqrt(P*P+W*W),d}function We(p,M){const d=M??o.create(),m=p[0],E=p[1],P=p[2],W=p[4],l=p[5],v=p[6],c=p[8],h=p[9],x=p[10];return d[0]=Math.sqrt(m*m+E*E+P*P),d[1]=Math.sqrt(W*W+l*l+v*v),d[2]=Math.sqrt(c*c+h*h+x*x),d}function Ne(p,M){const d=M??new a(12);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=1,d[6]=0,d[8]=p[0],d[9]=p[1],d[10]=1,d}function Oe(p,M,d){const m=d??new a(12),E=M[0],P=M[1],W=p[0],l=p[1],v=p[2],c=p[1*4+0],h=p[1*4+1],x=p[1*4+2],U=p[2*4+0],q=p[2*4+1],y=p[2*4+2];return p!==m&&(m[0]=W,m[1]=l,m[2]=v,m[4]=c,m[5]=h,m[6]=x),m[8]=W*E+c*P+U,m[9]=l*E+h*P+q,m[10]=v*E+x*P+y,m}function je(p,M){const d=M??new a(12),m=Math.cos(p),E=Math.sin(p);return d[0]=m,d[1]=E,d[2]=0,d[4]=-E,d[5]=m,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function De(p,M,d){const m=d??new a(12),E=p[0*4+0],P=p[0*4+1],W=p[0*4+2],l=p[1*4+0],v=p[1*4+1],c=p[1*4+2],h=Math.cos(M),x=Math.sin(M);return m[0]=h*E+x*l,m[1]=h*P+x*v,m[2]=h*W+x*c,m[4]=h*l-x*E,m[5]=h*v-x*P,m[6]=h*c-x*W,p!==m&&(m[8]=p[8],m[9]=p[9],m[10]=p[10]),m}function Pe(p,M){const d=M??new a(12),m=Math.cos(p),E=Math.sin(p);return d[0]=1,d[1]=0,d[2]=0,d[4]=0,d[5]=m,d[6]=E,d[8]=0,d[9]=-E,d[10]=m,d}function xe(p,M,d){const m=d??new a(12),E=p[4],P=p[5],W=p[6],l=p[8],v=p[9],c=p[10],h=Math.cos(M),x=Math.sin(M);return m[4]=h*E+x*l,m[5]=h*P+x*v,m[6]=h*W+x*c,m[8]=h*l-x*E,m[9]=h*v-x*P,m[10]=h*c-x*W,p!==m&&(m[0]=p[0],m[1]=p[1],m[2]=p[2]),m}function Ye(p,M){const d=M??new a(12),m=Math.cos(p),E=Math.sin(p);return d[0]=m,d[1]=0,d[2]=-E,d[4]=0,d[5]=1,d[6]=0,d[8]=E,d[9]=0,d[10]=m,d}function He(p,M,d){const m=d??new a(12),E=p[0*4+0],P=p[0*4+1],W=p[0*4+2],l=p[2*4+0],v=p[2*4+1],c=p[2*4+2],h=Math.cos(M),x=Math.sin(M);return m[0]=h*E-x*l,m[1]=h*P-x*v,m[2]=h*W-x*c,m[8]=h*l+x*E,m[9]=h*v+x*P,m[10]=h*c+x*W,p!==m&&(m[4]=p[4],m[5]=p[5],m[6]=p[6]),m}const Ve=je,le=De;function ye(p,M){const d=M??new a(12);return d[0]=p[0],d[1]=0,d[2]=0,d[4]=0,d[5]=p[1],d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function se(p,M,d){const m=d??new a(12),E=M[0],P=M[1];return m[0]=E*p[0*4+0],m[1]=E*p[0*4+1],m[2]=E*p[0*4+2],m[4]=P*p[1*4+0],m[5]=P*p[1*4+1],m[6]=P*p[1*4+2],p!==m&&(m[8]=p[8],m[9]=p[9],m[10]=p[10]),m}function I(p,M){const d=M??new a(12);return d[0]=p[0],d[1]=0,d[2]=0,d[4]=0,d[5]=p[1],d[6]=0,d[8]=0,d[9]=0,d[10]=p[2],d}function ne(p,M,d){const m=d??new a(12),E=M[0],P=M[1],W=M[2];return m[0]=E*p[0*4+0],m[1]=E*p[0*4+1],m[2]=E*p[0*4+2],m[4]=P*p[1*4+0],m[5]=P*p[1*4+1],m[6]=P*p[1*4+2],m[8]=W*p[2*4+0],m[9]=W*p[2*4+1],m[10]=W*p[2*4+2],m}function Me(p,M){const d=M??new a(12);return d[0]=p,d[1]=0,d[2]=0,d[4]=0,d[5]=p,d[6]=0,d[8]=0,d[9]=0,d[10]=1,d}function Se(p,M,d){const m=d??new a(12);return m[0]=M*p[0*4+0],m[1]=M*p[0*4+1],m[2]=M*p[0*4+2],m[4]=M*p[1*4+0],m[5]=M*p[1*4+1],m[6]=M*p[1*4+2],p!==m&&(m[8]=p[8],m[9]=p[9],m[10]=p[10]),m}function Le(p,M){const d=M??new a(12);return d[0]=p,d[1]=0,d[2]=0,d[4]=0,d[5]=p,d[6]=0,d[8]=0,d[9]=0,d[10]=p,d}function Re(p,M,d){const m=d??new a(12);return m[0]=M*p[0*4+0],m[1]=M*p[0*4+1],m[2]=M*p[0*4+2],m[4]=M*p[1*4+0],m[5]=M*p[1*4+1],m[6]=M*p[1*4+2],m[8]=M*p[2*4+0],m[9]=M*p[2*4+1],m[10]=M*p[2*4+2],m}return{clone:b,create:f,set:g,fromMat4:w,fromQuat:S,negate:A,copy:D,equalsApproximately:G,equals:N,identity:F,transpose:J,inverse:j,invert:te,determinant:ee,mul:Z,multiply:X,setTranslation:ue,getTranslation:he,getAxis:Ue,setAxis:ke,getScaling:Ce,get3DScaling:We,translation:Ne,translate:Oe,rotation:je,rotate:De,rotationX:Pe,rotateX:xe,rotationY:Ye,rotateY:He,rotationZ:Ve,rotateZ:le,scaling:ye,scale:se,uniformScaling:Me,uniformScale:Se,scaling3D:I,scale3D:ne,uniformScaling3D:Le,uniformScale3D:Re}}const td=new Map;function mm(a){let i=td.get(a);return i||(i=hm(a),td.set(a,i)),i}function _m(a){const i=Xa(a);function o(l,v,c,h,x,U,q,y,T,L,k,H,Q,K,me,ze){const fe=new a(16);return l!==void 0&&(fe[0]=l,v!==void 0&&(fe[1]=v,c!==void 0&&(fe[2]=c,h!==void 0&&(fe[3]=h,x!==void 0&&(fe[4]=x,U!==void 0&&(fe[5]=U,q!==void 0&&(fe[6]=q,y!==void 0&&(fe[7]=y,T!==void 0&&(fe[8]=T,L!==void 0&&(fe[9]=L,k!==void 0&&(fe[10]=k,H!==void 0&&(fe[11]=H,Q!==void 0&&(fe[12]=Q,K!==void 0&&(fe[13]=K,me!==void 0&&(fe[14]=me,ze!==void 0&&(fe[15]=ze)))))))))))))))),fe}function f(l,v,c,h,x,U,q,y,T,L,k,H,Q,K,me,ze,fe){const _e=fe??new a(16);return _e[0]=l,_e[1]=v,_e[2]=c,_e[3]=h,_e[4]=x,_e[5]=U,_e[6]=q,_e[7]=y,_e[8]=T,_e[9]=L,_e[10]=k,_e[11]=H,_e[12]=Q,_e[13]=K,_e[14]=me,_e[15]=ze,_e}function g(l,v){const c=v??new a(16);return c[0]=l[0],c[1]=l[1],c[2]=l[2],c[3]=0,c[4]=l[4],c[5]=l[5],c[6]=l[6],c[7]=0,c[8]=l[8],c[9]=l[9],c[10]=l[10],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function w(l,v){const c=v??new a(16),h=l[0],x=l[1],U=l[2],q=l[3],y=h+h,T=x+x,L=U+U,k=h*y,H=x*y,Q=x*T,K=U*y,me=U*T,ze=U*L,fe=q*y,_e=q*T,Ie=q*L;return c[0]=1-Q-ze,c[1]=H+Ie,c[2]=K-_e,c[3]=0,c[4]=H-Ie,c[5]=1-k-ze,c[6]=me+fe,c[7]=0,c[8]=K+_e,c[9]=me-fe,c[10]=1-k-Q,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function S(l,v){const c=v??new a(16);return c[0]=-l[0],c[1]=-l[1],c[2]=-l[2],c[3]=-l[3],c[4]=-l[4],c[5]=-l[5],c[6]=-l[6],c[7]=-l[7],c[8]=-l[8],c[9]=-l[9],c[10]=-l[10],c[11]=-l[11],c[12]=-l[12],c[13]=-l[13],c[14]=-l[14],c[15]=-l[15],c}function A(l,v){const c=v??new a(16);return c[0]=l[0],c[1]=l[1],c[2]=l[2],c[3]=l[3],c[4]=l[4],c[5]=l[5],c[6]=l[6],c[7]=l[7],c[8]=l[8],c[9]=l[9],c[10]=l[10],c[11]=l[11],c[12]=l[12],c[13]=l[13],c[14]=l[14],c[15]=l[15],c}const D=A;function b(l,v){return Math.abs(l[0]-v[0])<Fe&&Math.abs(l[1]-v[1])<Fe&&Math.abs(l[2]-v[2])<Fe&&Math.abs(l[3]-v[3])<Fe&&Math.abs(l[4]-v[4])<Fe&&Math.abs(l[5]-v[5])<Fe&&Math.abs(l[6]-v[6])<Fe&&Math.abs(l[7]-v[7])<Fe&&Math.abs(l[8]-v[8])<Fe&&Math.abs(l[9]-v[9])<Fe&&Math.abs(l[10]-v[10])<Fe&&Math.abs(l[11]-v[11])<Fe&&Math.abs(l[12]-v[12])<Fe&&Math.abs(l[13]-v[13])<Fe&&Math.abs(l[14]-v[14])<Fe&&Math.abs(l[15]-v[15])<Fe}function G(l,v){return l[0]===v[0]&&l[1]===v[1]&&l[2]===v[2]&&l[3]===v[3]&&l[4]===v[4]&&l[5]===v[5]&&l[6]===v[6]&&l[7]===v[7]&&l[8]===v[8]&&l[9]===v[9]&&l[10]===v[10]&&l[11]===v[11]&&l[12]===v[12]&&l[13]===v[13]&&l[14]===v[14]&&l[15]===v[15]}function N(l){const v=l??new a(16);return v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,v}function F(l,v){const c=v??new a(16);if(c===l){let Ge;return Ge=l[1],l[1]=l[4],l[4]=Ge,Ge=l[2],l[2]=l[8],l[8]=Ge,Ge=l[3],l[3]=l[12],l[12]=Ge,Ge=l[6],l[6]=l[9],l[9]=Ge,Ge=l[7],l[7]=l[13],l[13]=Ge,Ge=l[11],l[11]=l[14],l[14]=Ge,c}const h=l[0*4+0],x=l[0*4+1],U=l[0*4+2],q=l[0*4+3],y=l[1*4+0],T=l[1*4+1],L=l[1*4+2],k=l[1*4+3],H=l[2*4+0],Q=l[2*4+1],K=l[2*4+2],me=l[2*4+3],ze=l[3*4+0],fe=l[3*4+1],_e=l[3*4+2],Ie=l[3*4+3];return c[0]=h,c[1]=y,c[2]=H,c[3]=ze,c[4]=x,c[5]=T,c[6]=Q,c[7]=fe,c[8]=U,c[9]=L,c[10]=K,c[11]=_e,c[12]=q,c[13]=k,c[14]=me,c[15]=Ie,c}function J(l,v){const c=v??new a(16),h=l[0*4+0],x=l[0*4+1],U=l[0*4+2],q=l[0*4+3],y=l[1*4+0],T=l[1*4+1],L=l[1*4+2],k=l[1*4+3],H=l[2*4+0],Q=l[2*4+1],K=l[2*4+2],me=l[2*4+3],ze=l[3*4+0],fe=l[3*4+1],_e=l[3*4+2],Ie=l[3*4+3],Ge=K*Ie,Xe=_e*me,ut=L*Ie,rt=_e*k,ct=L*me,pt=K*k,ht=U*Ie,mt=_e*q,it=U*me,at=K*q,yt=U*k,wt=L*q,xt=H*fe,St=ze*Q,Pt=y*fe,Mt=ze*T,Rt=y*Q,pn=H*T,Cn=h*fe,hn=ze*x,gr=h*Q,mn=H*x,En=h*T,Dn=y*x,vr=Ge*T+rt*Q+ct*fe-(Xe*T+ut*Q+pt*fe),Pi=Xe*x+ht*Q+at*fe-(Ge*x+mt*Q+it*fe),Ri=ut*x+mt*T+yt*fe-(rt*x+ht*T+wt*fe),Li=pt*x+it*T+wt*Q-(ct*x+at*T+yt*Q),et=1/(h*vr+y*Pi+H*Ri+ze*Li);return c[0]=et*vr,c[1]=et*Pi,c[2]=et*Ri,c[3]=et*Li,c[4]=et*(Xe*y+ut*H+pt*ze-(Ge*y+rt*H+ct*ze)),c[5]=et*(Ge*h+mt*H+it*ze-(Xe*h+ht*H+at*ze)),c[6]=et*(rt*h+ht*y+wt*ze-(ut*h+mt*y+yt*ze)),c[7]=et*(ct*h+at*y+yt*H-(pt*h+it*y+wt*H)),c[8]=et*(xt*k+Mt*me+Rt*Ie-(St*k+Pt*me+pn*Ie)),c[9]=et*(St*q+Cn*me+mn*Ie-(xt*q+hn*me+gr*Ie)),c[10]=et*(Pt*q+hn*k+En*Ie-(Mt*q+Cn*k+Dn*Ie)),c[11]=et*(pn*q+gr*k+Dn*me-(Rt*q+mn*k+En*me)),c[12]=et*(Pt*K+pn*_e+St*L-(Rt*_e+xt*L+Mt*K)),c[13]=et*(gr*_e+xt*U+hn*K-(Cn*K+mn*_e+St*U)),c[14]=et*(Cn*L+Dn*_e+Mt*U-(En*_e+Pt*U+hn*L)),c[15]=et*(En*K+Rt*U+mn*L-(gr*L+Dn*K+pn*U)),c}function j(l){const v=l[0],c=l[0*4+1],h=l[0*4+2],x=l[0*4+3],U=l[1*4+0],q=l[1*4+1],y=l[1*4+2],T=l[1*4+3],L=l[2*4+0],k=l[2*4+1],H=l[2*4+2],Q=l[2*4+3],K=l[3*4+0],me=l[3*4+1],ze=l[3*4+2],fe=l[3*4+3],_e=H*fe,Ie=ze*Q,Ge=y*fe,Xe=ze*T,ut=y*Q,rt=H*T,ct=h*fe,pt=ze*x,ht=h*Q,mt=H*x,it=h*T,at=y*x,yt=_e*q+Xe*k+ut*me-(Ie*q+Ge*k+rt*me),wt=Ie*c+ct*k+mt*me-(_e*c+pt*k+ht*me),xt=Ge*c+pt*q+it*me-(Xe*c+ct*q+at*me),St=rt*c+ht*q+at*k-(ut*c+mt*q+it*k);return v*yt+U*wt+L*xt+K*St}const ee=J;function te(l,v,c){const h=c??new a(16),x=l[0],U=l[1],q=l[2],y=l[3],T=l[4],L=l[5],k=l[6],H=l[7],Q=l[8],K=l[9],me=l[10],ze=l[11],fe=l[12],_e=l[13],Ie=l[14],Ge=l[15],Xe=v[0],ut=v[1],rt=v[2],ct=v[3],pt=v[4],ht=v[5],mt=v[6],it=v[7],at=v[8],yt=v[9],wt=v[10],xt=v[11],St=v[12],Pt=v[13],Mt=v[14],Rt=v[15];return h[0]=x*Xe+T*ut+Q*rt+fe*ct,h[1]=U*Xe+L*ut+K*rt+_e*ct,h[2]=q*Xe+k*ut+me*rt+Ie*ct,h[3]=y*Xe+H*ut+ze*rt+Ge*ct,h[4]=x*pt+T*ht+Q*mt+fe*it,h[5]=U*pt+L*ht+K*mt+_e*it,h[6]=q*pt+k*ht+me*mt+Ie*it,h[7]=y*pt+H*ht+ze*mt+Ge*it,h[8]=x*at+T*yt+Q*wt+fe*xt,h[9]=U*at+L*yt+K*wt+_e*xt,h[10]=q*at+k*yt+me*wt+Ie*xt,h[11]=y*at+H*yt+ze*wt+Ge*xt,h[12]=x*St+T*Pt+Q*Mt+fe*Rt,h[13]=U*St+L*Pt+K*Mt+_e*Rt,h[14]=q*St+k*Pt+me*Mt+Ie*Rt,h[15]=y*St+H*Pt+ze*Mt+Ge*Rt,h}const X=te;function Z(l,v,c){const h=c??N();return l!==h&&(h[0]=l[0],h[1]=l[1],h[2]=l[2],h[3]=l[3],h[4]=l[4],h[5]=l[5],h[6]=l[6],h[7]=l[7],h[8]=l[8],h[9]=l[9],h[10]=l[10],h[11]=l[11]),h[12]=v[0],h[13]=v[1],h[14]=v[2],h[15]=1,h}function ue(l,v){const c=v??i.create();return c[0]=l[12],c[1]=l[13],c[2]=l[14],c}function he(l,v,c){const h=c??i.create(),x=v*4;return h[0]=l[x+0],h[1]=l[x+1],h[2]=l[x+2],h}function Ue(l,v,c,h){const x=h===l?h:A(l,h),U=c*4;return x[U+0]=v[0],x[U+1]=v[1],x[U+2]=v[2],x}function ke(l,v){const c=v??i.create(),h=l[0],x=l[1],U=l[2],q=l[4],y=l[5],T=l[6],L=l[8],k=l[9],H=l[10];return c[0]=Math.sqrt(h*h+x*x+U*U),c[1]=Math.sqrt(q*q+y*y+T*T),c[2]=Math.sqrt(L*L+k*k+H*H),c}function Ce(l,v,c,h,x){const U=x??new a(16),q=Math.tan(Math.PI*.5-.5*l);if(U[0]=q/v,U[1]=0,U[2]=0,U[3]=0,U[4]=0,U[5]=q,U[6]=0,U[7]=0,U[8]=0,U[9]=0,U[11]=-1,U[12]=0,U[13]=0,U[15]=0,Number.isFinite(h)){const y=1/(c-h);U[10]=h*y,U[14]=h*c*y}else U[10]=-1,U[14]=-c;return U}function We(l,v,c,h=1/0,x){const U=x??new a(16),q=1/Math.tan(l*.5);if(U[0]=q/v,U[1]=0,U[2]=0,U[3]=0,U[4]=0,U[5]=q,U[6]=0,U[7]=0,U[8]=0,U[9]=0,U[11]=-1,U[12]=0,U[13]=0,U[15]=0,h===1/0)U[10]=0,U[14]=c;else{const y=1/(h-c);U[10]=c*y,U[14]=h*c*y}return U}function Ne(l,v,c,h,x,U,q){const y=q??new a(16);return y[0]=2/(v-l),y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2/(h-c),y[6]=0,y[7]=0,y[8]=0,y[9]=0,y[10]=1/(x-U),y[11]=0,y[12]=(v+l)/(l-v),y[13]=(h+c)/(c-h),y[14]=x/(x-U),y[15]=1,y}function Oe(l,v,c,h,x,U,q){const y=q??new a(16),T=v-l,L=h-c,k=x-U;return y[0]=2*x/T,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*x/L,y[6]=0,y[7]=0,y[8]=(l+v)/T,y[9]=(h+c)/L,y[10]=U/k,y[11]=-1,y[12]=0,y[13]=0,y[14]=x*U/k,y[15]=0,y}function je(l,v,c,h,x,U=1/0,q){const y=q??new a(16),T=v-l,L=h-c;if(y[0]=2*x/T,y[1]=0,y[2]=0,y[3]=0,y[4]=0,y[5]=2*x/L,y[6]=0,y[7]=0,y[8]=(l+v)/T,y[9]=(h+c)/L,y[11]=-1,y[12]=0,y[13]=0,y[15]=0,U===1/0)y[10]=0,y[14]=x;else{const k=1/(U-x);y[10]=x*k,y[14]=U*x*k}return y}const De=i.create(),Pe=i.create(),xe=i.create();function Ye(l,v,c,h){const x=h??new a(16);return i.normalize(i.subtract(v,l,xe),xe),i.normalize(i.cross(c,xe,De),De),i.normalize(i.cross(xe,De,Pe),Pe),x[0]=De[0],x[1]=De[1],x[2]=De[2],x[3]=0,x[4]=Pe[0],x[5]=Pe[1],x[6]=Pe[2],x[7]=0,x[8]=xe[0],x[9]=xe[1],x[10]=xe[2],x[11]=0,x[12]=l[0],x[13]=l[1],x[14]=l[2],x[15]=1,x}function He(l,v,c,h){const x=h??new a(16);return i.normalize(i.subtract(l,v,xe),xe),i.normalize(i.cross(c,xe,De),De),i.normalize(i.cross(xe,De,Pe),Pe),x[0]=De[0],x[1]=De[1],x[2]=De[2],x[3]=0,x[4]=Pe[0],x[5]=Pe[1],x[6]=Pe[2],x[7]=0,x[8]=xe[0],x[9]=xe[1],x[10]=xe[2],x[11]=0,x[12]=l[0],x[13]=l[1],x[14]=l[2],x[15]=1,x}function Ve(l,v,c,h){const x=h??new a(16);return i.normalize(i.subtract(l,v,xe),xe),i.normalize(i.cross(c,xe,De),De),i.normalize(i.cross(xe,De,Pe),Pe),x[0]=De[0],x[1]=Pe[0],x[2]=xe[0],x[3]=0,x[4]=De[1],x[5]=Pe[1],x[6]=xe[1],x[7]=0,x[8]=De[2],x[9]=Pe[2],x[10]=xe[2],x[11]=0,x[12]=-(De[0]*l[0]+De[1]*l[1]+De[2]*l[2]),x[13]=-(Pe[0]*l[0]+Pe[1]*l[1]+Pe[2]*l[2]),x[14]=-(xe[0]*l[0]+xe[1]*l[1]+xe[2]*l[2]),x[15]=1,x}function le(l,v){const c=v??new a(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=l[0],c[13]=l[1],c[14]=l[2],c[15]=1,c}function ye(l,v,c){const h=c??new a(16),x=v[0],U=v[1],q=v[2],y=l[0],T=l[1],L=l[2],k=l[3],H=l[1*4+0],Q=l[1*4+1],K=l[1*4+2],me=l[1*4+3],ze=l[2*4+0],fe=l[2*4+1],_e=l[2*4+2],Ie=l[2*4+3],Ge=l[3*4+0],Xe=l[3*4+1],ut=l[3*4+2],rt=l[3*4+3];return l!==h&&(h[0]=y,h[1]=T,h[2]=L,h[3]=k,h[4]=H,h[5]=Q,h[6]=K,h[7]=me,h[8]=ze,h[9]=fe,h[10]=_e,h[11]=Ie),h[12]=y*x+H*U+ze*q+Ge,h[13]=T*x+Q*U+fe*q+Xe,h[14]=L*x+K*U+_e*q+ut,h[15]=k*x+me*U+Ie*q+rt,h}function se(l,v){const c=v??new a(16),h=Math.cos(l),x=Math.sin(l);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=h,c[6]=x,c[7]=0,c[8]=0,c[9]=-x,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function I(l,v,c){const h=c??new a(16),x=l[4],U=l[5],q=l[6],y=l[7],T=l[8],L=l[9],k=l[10],H=l[11],Q=Math.cos(v),K=Math.sin(v);return h[4]=Q*x+K*T,h[5]=Q*U+K*L,h[6]=Q*q+K*k,h[7]=Q*y+K*H,h[8]=Q*T-K*x,h[9]=Q*L-K*U,h[10]=Q*k-K*q,h[11]=Q*H-K*y,l!==h&&(h[0]=l[0],h[1]=l[1],h[2]=l[2],h[3]=l[3],h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}function ne(l,v){const c=v??new a(16),h=Math.cos(l),x=Math.sin(l);return c[0]=h,c[1]=0,c[2]=-x,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=x,c[9]=0,c[10]=h,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Me(l,v,c){const h=c??new a(16),x=l[0*4+0],U=l[0*4+1],q=l[0*4+2],y=l[0*4+3],T=l[2*4+0],L=l[2*4+1],k=l[2*4+2],H=l[2*4+3],Q=Math.cos(v),K=Math.sin(v);return h[0]=Q*x-K*T,h[1]=Q*U-K*L,h[2]=Q*q-K*k,h[3]=Q*y-K*H,h[8]=Q*T+K*x,h[9]=Q*L+K*U,h[10]=Q*k+K*q,h[11]=Q*H+K*y,l!==h&&(h[4]=l[4],h[5]=l[5],h[6]=l[6],h[7]=l[7],h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}function Se(l,v){const c=v??new a(16),h=Math.cos(l),x=Math.sin(l);return c[0]=h,c[1]=x,c[2]=0,c[3]=0,c[4]=-x,c[5]=h,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function Le(l,v,c){const h=c??new a(16),x=l[0*4+0],U=l[0*4+1],q=l[0*4+2],y=l[0*4+3],T=l[1*4+0],L=l[1*4+1],k=l[1*4+2],H=l[1*4+3],Q=Math.cos(v),K=Math.sin(v);return h[0]=Q*x+K*T,h[1]=Q*U+K*L,h[2]=Q*q+K*k,h[3]=Q*y+K*H,h[4]=Q*T-K*x,h[5]=Q*L-K*U,h[6]=Q*k-K*q,h[7]=Q*H-K*y,l!==h&&(h[8]=l[8],h[9]=l[9],h[10]=l[10],h[11]=l[11],h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}function Re(l,v,c){const h=c??new a(16);let x=l[0],U=l[1],q=l[2];const y=Math.sqrt(x*x+U*U+q*q);x/=y,U/=y,q/=y;const T=x*x,L=U*U,k=q*q,H=Math.cos(v),Q=Math.sin(v),K=1-H;return h[0]=T+(1-T)*H,h[1]=x*U*K+q*Q,h[2]=x*q*K-U*Q,h[3]=0,h[4]=x*U*K-q*Q,h[5]=L+(1-L)*H,h[6]=U*q*K+x*Q,h[7]=0,h[8]=x*q*K+U*Q,h[9]=U*q*K-x*Q,h[10]=k+(1-k)*H,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,h}const p=Re;function M(l,v,c,h){const x=h??new a(16);let U=v[0],q=v[1],y=v[2];const T=Math.sqrt(U*U+q*q+y*y);U/=T,q/=T,y/=T;const L=U*U,k=q*q,H=y*y,Q=Math.cos(c),K=Math.sin(c),me=1-Q,ze=L+(1-L)*Q,fe=U*q*me+y*K,_e=U*y*me-q*K,Ie=U*q*me-y*K,Ge=k+(1-k)*Q,Xe=q*y*me+U*K,ut=U*y*me+q*K,rt=q*y*me-U*K,ct=H+(1-H)*Q,pt=l[0],ht=l[1],mt=l[2],it=l[3],at=l[4],yt=l[5],wt=l[6],xt=l[7],St=l[8],Pt=l[9],Mt=l[10],Rt=l[11];return x[0]=ze*pt+fe*at+_e*St,x[1]=ze*ht+fe*yt+_e*Pt,x[2]=ze*mt+fe*wt+_e*Mt,x[3]=ze*it+fe*xt+_e*Rt,x[4]=Ie*pt+Ge*at+Xe*St,x[5]=Ie*ht+Ge*yt+Xe*Pt,x[6]=Ie*mt+Ge*wt+Xe*Mt,x[7]=Ie*it+Ge*xt+Xe*Rt,x[8]=ut*pt+rt*at+ct*St,x[9]=ut*ht+rt*yt+ct*Pt,x[10]=ut*mt+rt*wt+ct*Mt,x[11]=ut*it+rt*xt+ct*Rt,l!==x&&(x[12]=l[12],x[13]=l[13],x[14]=l[14],x[15]=l[15]),x}const d=M;function m(l,v){const c=v??new a(16);return c[0]=l[0],c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=l[1],c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=l[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function E(l,v,c){const h=c??new a(16),x=v[0],U=v[1],q=v[2];return h[0]=x*l[0*4+0],h[1]=x*l[0*4+1],h[2]=x*l[0*4+2],h[3]=x*l[0*4+3],h[4]=U*l[1*4+0],h[5]=U*l[1*4+1],h[6]=U*l[1*4+2],h[7]=U*l[1*4+3],h[8]=q*l[2*4+0],h[9]=q*l[2*4+1],h[10]=q*l[2*4+2],h[11]=q*l[2*4+3],l!==h&&(h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}function P(l,v){const c=v??new a(16);return c[0]=l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=l,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=l,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function W(l,v,c){const h=c??new a(16);return h[0]=v*l[0*4+0],h[1]=v*l[0*4+1],h[2]=v*l[0*4+2],h[3]=v*l[0*4+3],h[4]=v*l[1*4+0],h[5]=v*l[1*4+1],h[6]=v*l[1*4+2],h[7]=v*l[1*4+3],h[8]=v*l[2*4+0],h[9]=v*l[2*4+1],h[10]=v*l[2*4+2],h[11]=v*l[2*4+3],l!==h&&(h[12]=l[12],h[13]=l[13],h[14]=l[14],h[15]=l[15]),h}return{create:o,set:f,fromMat3:g,fromQuat:w,negate:S,copy:A,clone:D,equalsApproximately:b,equals:G,identity:N,transpose:F,inverse:J,determinant:j,invert:ee,multiply:te,mul:X,setTranslation:Z,getTranslation:ue,getAxis:he,setAxis:Ue,getScaling:ke,perspective:Ce,perspectiveReverseZ:We,ortho:Ne,frustum:Oe,frustumReverseZ:je,aim:Ye,cameraAim:He,lookAt:Ve,translation:le,translate:ye,rotationX:se,rotateX:I,rotationY:ne,rotateY:Me,rotationZ:Se,rotateZ:Le,axisRotation:Re,rotation:p,axisRotate:M,rotate:d,scaling:m,scale:E,uniformScaling:P,uniformScale:W}}const nd=new Map;function gm(a){let i=nd.get(a);return i||(i=_m(a),nd.set(a,i)),i}function vm(a){const i=Xa(a);function o(p,M,d,m){const E=new a(4);return p!==void 0&&(E[0]=p,M!==void 0&&(E[1]=M,d!==void 0&&(E[2]=d,m!==void 0&&(E[3]=m)))),E}const f=o;function g(p,M,d,m,E){const P=E??new a(4);return P[0]=p,P[1]=M,P[2]=d,P[3]=m,P}function w(p,M,d){const m=d??new a(4),E=M*.5,P=Math.sin(E);return m[0]=P*p[0],m[1]=P*p[1],m[2]=P*p[2],m[3]=Math.cos(E),m}function S(p,M){const d=M??i.create(3),m=Math.acos(p[3])*2,E=Math.sin(m*.5);return E>Fe?(d[0]=p[0]/E,d[1]=p[1]/E,d[2]=p[2]/E):(d[0]=1,d[1]=0,d[2]=0),{angle:m,axis:d}}function A(p,M){const d=Oe(p,M);return Math.acos(2*d*d-1)}function D(p,M,d){const m=d??new a(4),E=p[0],P=p[1],W=p[2],l=p[3],v=M[0],c=M[1],h=M[2],x=M[3];return m[0]=E*x+l*v+P*h-W*c,m[1]=P*x+l*c+W*v-E*h,m[2]=W*x+l*h+E*c-P*v,m[3]=l*x-E*v-P*c-W*h,m}const b=D;function G(p,M,d){const m=d??new a(4),E=M*.5,P=p[0],W=p[1],l=p[2],v=p[3],c=Math.sin(E),h=Math.cos(E);return m[0]=P*h+v*c,m[1]=W*h+l*c,m[2]=l*h-W*c,m[3]=v*h-P*c,m}function N(p,M,d){const m=d??new a(4),E=M*.5,P=p[0],W=p[1],l=p[2],v=p[3],c=Math.sin(E),h=Math.cos(E);return m[0]=P*h-l*c,m[1]=W*h+v*c,m[2]=l*h+P*c,m[3]=v*h-W*c,m}function F(p,M,d){const m=d??new a(4),E=M*.5,P=p[0],W=p[1],l=p[2],v=p[3],c=Math.sin(E),h=Math.cos(E);return m[0]=P*h+W*c,m[1]=W*h-P*c,m[2]=l*h+v*c,m[3]=v*h-l*c,m}function J(p,M,d,m){const E=m??new a(4),P=p[0],W=p[1],l=p[2],v=p[3];let c=M[0],h=M[1],x=M[2],U=M[3],q=P*c+W*h+l*x+v*U;q<0&&(q=-q,c=-c,h=-h,x=-x,U=-U);let y,T;if(1-q>Fe){const L=Math.acos(q),k=Math.sin(L);y=Math.sin((1-d)*L)/k,T=Math.sin(d*L)/k}else y=1-d,T=d;return E[0]=y*P+T*c,E[1]=y*W+T*h,E[2]=y*l+T*x,E[3]=y*v+T*U,E}function j(p,M){const d=M??new a(4),m=p[0],E=p[1],P=p[2],W=p[3],l=m*m+E*E+P*P+W*W,v=l?1/l:0;return d[0]=-m*v,d[1]=-E*v,d[2]=-P*v,d[3]=W*v,d}function ee(p,M){const d=M??new a(4);return d[0]=-p[0],d[1]=-p[1],d[2]=-p[2],d[3]=p[3],d}function te(p,M){const d=M??new a(4),m=p[0]+p[5]+p[10];if(m>0){const E=Math.sqrt(m+1);d[3]=.5*E;const P=.5/E;d[0]=(p[6]-p[9])*P,d[1]=(p[8]-p[2])*P,d[2]=(p[1]-p[4])*P}else{let E=0;p[5]>p[0]&&(E=1),p[10]>p[E*4+E]&&(E=2);const P=(E+1)%3,W=(E+2)%3,l=Math.sqrt(p[E*4+E]-p[P*4+P]-p[W*4+W]+1);d[E]=.5*l;const v=.5/l;d[3]=(p[P*4+W]-p[W*4+P])*v,d[P]=(p[P*4+E]+p[E*4+P])*v,d[W]=(p[W*4+E]+p[E*4+W])*v}return d}function X(p,M,d,m,E){const P=E??new a(4),W=p*.5,l=M*.5,v=d*.5,c=Math.sin(W),h=Math.cos(W),x=Math.sin(l),U=Math.cos(l),q=Math.sin(v),y=Math.cos(v);switch(m){case"xyz":P[0]=c*U*y+h*x*q,P[1]=h*x*y-c*U*q,P[2]=h*U*q+c*x*y,P[3]=h*U*y-c*x*q;break;case"xzy":P[0]=c*U*y-h*x*q,P[1]=h*x*y-c*U*q,P[2]=h*U*q+c*x*y,P[3]=h*U*y+c*x*q;break;case"yxz":P[0]=c*U*y+h*x*q,P[1]=h*x*y-c*U*q,P[2]=h*U*q-c*x*y,P[3]=h*U*y+c*x*q;break;case"yzx":P[0]=c*U*y+h*x*q,P[1]=h*x*y+c*U*q,P[2]=h*U*q-c*x*y,P[3]=h*U*y-c*x*q;break;case"zxy":P[0]=c*U*y-h*x*q,P[1]=h*x*y+c*U*q,P[2]=h*U*q+c*x*y,P[3]=h*U*y-c*x*q;break;case"zyx":P[0]=c*U*y-h*x*q,P[1]=h*x*y+c*U*q,P[2]=h*U*q-c*x*y,P[3]=h*U*y+c*x*q;break;default:throw new Error(`Unknown rotation order: ${m}`)}return P}function Z(p,M){const d=M??new a(4);return d[0]=p[0],d[1]=p[1],d[2]=p[2],d[3]=p[3],d}const ue=Z;function he(p,M,d){const m=d??new a(4);return m[0]=p[0]+M[0],m[1]=p[1]+M[1],m[2]=p[2]+M[2],m[3]=p[3]+M[3],m}function Ue(p,M,d){const m=d??new a(4);return m[0]=p[0]-M[0],m[1]=p[1]-M[1],m[2]=p[2]-M[2],m[3]=p[3]-M[3],m}const ke=Ue;function Ce(p,M,d){const m=d??new a(4);return m[0]=p[0]*M,m[1]=p[1]*M,m[2]=p[2]*M,m[3]=p[3]*M,m}const We=Ce;function Ne(p,M,d){const m=d??new a(4);return m[0]=p[0]/M,m[1]=p[1]/M,m[2]=p[2]/M,m[3]=p[3]/M,m}function Oe(p,M){return p[0]*M[0]+p[1]*M[1]+p[2]*M[2]+p[3]*M[3]}function je(p,M,d,m){const E=m??new a(4);return E[0]=p[0]+d*(M[0]-p[0]),E[1]=p[1]+d*(M[1]-p[1]),E[2]=p[2]+d*(M[2]-p[2]),E[3]=p[3]+d*(M[3]-p[3]),E}function De(p){const M=p[0],d=p[1],m=p[2],E=p[3];return Math.sqrt(M*M+d*d+m*m+E*E)}const Pe=De;function xe(p){const M=p[0],d=p[1],m=p[2],E=p[3];return M*M+d*d+m*m+E*E}const Ye=xe;function He(p,M){const d=M??new a(4),m=p[0],E=p[1],P=p[2],W=p[3],l=Math.sqrt(m*m+E*E+P*P+W*W);return l>1e-5?(d[0]=m/l,d[1]=E/l,d[2]=P/l,d[3]=W/l):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function Ve(p,M){return Math.abs(p[0]-M[0])<Fe&&Math.abs(p[1]-M[1])<Fe&&Math.abs(p[2]-M[2])<Fe&&Math.abs(p[3]-M[3])<Fe}function le(p,M){return p[0]===M[0]&&p[1]===M[1]&&p[2]===M[2]&&p[3]===M[3]}function ye(p){const M=p??new a(4);return M[0]=0,M[1]=0,M[2]=0,M[3]=1,M}const se=i.create(),I=i.create(),ne=i.create();function Me(p,M,d){const m=d??new a(4),E=i.dot(p,M);return E<-.999999?(i.cross(I,p,se),i.len(se)<1e-6&&i.cross(ne,p,se),i.normalize(se,se),w(se,Math.PI,m),m):E>.999999?(m[0]=0,m[1]=0,m[2]=0,m[3]=1,m):(i.cross(p,M,se),m[0]=se[0],m[1]=se[1],m[2]=se[2],m[3]=1+E,He(m,m))}const Se=new a(4),Le=new a(4);function Re(p,M,d,m,E,P){const W=P??new a(4);return J(p,m,E,Se),J(M,d,E,Le),J(Se,Le,2*E*(1-E),W),W}return{create:o,fromValues:f,set:g,fromAxisAngle:w,toAxisAngle:S,angle:A,multiply:D,mul:b,rotateX:G,rotateY:N,rotateZ:F,slerp:J,inverse:j,conjugate:ee,fromMat:te,fromEuler:X,copy:Z,clone:ue,add:he,subtract:Ue,sub:ke,mulScalar:Ce,scale:We,divScalar:Ne,dot:Oe,lerp:je,length:De,len:Pe,lengthSq:xe,lenSq:Ye,normalize:He,equalsApproximately:Ve,equals:le,identity:ye,rotationTo:Me,sqlerp:Re}}const rd=new Map;function ym(a){let i=rd.get(a);return i||(i=vm(a),rd.set(a,i)),i}function wm(a){function i(d,m,E,P){const W=new a(4);return d!==void 0&&(W[0]=d,m!==void 0&&(W[1]=m,E!==void 0&&(W[2]=E,P!==void 0&&(W[3]=P)))),W}const o=i;function f(d,m,E,P,W){const l=W??new a(4);return l[0]=d,l[1]=m,l[2]=E,l[3]=P,l}function g(d,m){const E=m??new a(4);return E[0]=Math.ceil(d[0]),E[1]=Math.ceil(d[1]),E[2]=Math.ceil(d[2]),E[3]=Math.ceil(d[3]),E}function w(d,m){const E=m??new a(4);return E[0]=Math.floor(d[0]),E[1]=Math.floor(d[1]),E[2]=Math.floor(d[2]),E[3]=Math.floor(d[3]),E}function S(d,m){const E=m??new a(4);return E[0]=Math.round(d[0]),E[1]=Math.round(d[1]),E[2]=Math.round(d[2]),E[3]=Math.round(d[3]),E}function A(d,m=0,E=1,P){const W=P??new a(4);return W[0]=Math.min(E,Math.max(m,d[0])),W[1]=Math.min(E,Math.max(m,d[1])),W[2]=Math.min(E,Math.max(m,d[2])),W[3]=Math.min(E,Math.max(m,d[3])),W}function D(d,m,E){const P=E??new a(4);return P[0]=d[0]+m[0],P[1]=d[1]+m[1],P[2]=d[2]+m[2],P[3]=d[3]+m[3],P}function b(d,m,E,P){const W=P??new a(4);return W[0]=d[0]+m[0]*E,W[1]=d[1]+m[1]*E,W[2]=d[2]+m[2]*E,W[3]=d[3]+m[3]*E,W}function G(d,m,E){const P=E??new a(4);return P[0]=d[0]-m[0],P[1]=d[1]-m[1],P[2]=d[2]-m[2],P[3]=d[3]-m[3],P}const N=G;function F(d,m){return Math.abs(d[0]-m[0])<Fe&&Math.abs(d[1]-m[1])<Fe&&Math.abs(d[2]-m[2])<Fe&&Math.abs(d[3]-m[3])<Fe}function J(d,m){return d[0]===m[0]&&d[1]===m[1]&&d[2]===m[2]&&d[3]===m[3]}function j(d,m,E,P){const W=P??new a(4);return W[0]=d[0]+E*(m[0]-d[0]),W[1]=d[1]+E*(m[1]-d[1]),W[2]=d[2]+E*(m[2]-d[2]),W[3]=d[3]+E*(m[3]-d[3]),W}function ee(d,m,E,P){const W=P??new a(4);return W[0]=d[0]+E[0]*(m[0]-d[0]),W[1]=d[1]+E[1]*(m[1]-d[1]),W[2]=d[2]+E[2]*(m[2]-d[2]),W[3]=d[3]+E[3]*(m[3]-d[3]),W}function te(d,m,E){const P=E??new a(4);return P[0]=Math.max(d[0],m[0]),P[1]=Math.max(d[1],m[1]),P[2]=Math.max(d[2],m[2]),P[3]=Math.max(d[3],m[3]),P}function X(d,m,E){const P=E??new a(4);return P[0]=Math.min(d[0],m[0]),P[1]=Math.min(d[1],m[1]),P[2]=Math.min(d[2],m[2]),P[3]=Math.min(d[3],m[3]),P}function Z(d,m,E){const P=E??new a(4);return P[0]=d[0]*m,P[1]=d[1]*m,P[2]=d[2]*m,P[3]=d[3]*m,P}const ue=Z;function he(d,m,E){const P=E??new a(4);return P[0]=d[0]/m,P[1]=d[1]/m,P[2]=d[2]/m,P[3]=d[3]/m,P}function Ue(d,m){const E=m??new a(4);return E[0]=1/d[0],E[1]=1/d[1],E[2]=1/d[2],E[3]=1/d[3],E}const ke=Ue;function Ce(d,m){return d[0]*m[0]+d[1]*m[1]+d[2]*m[2]+d[3]*m[3]}function We(d){const m=d[0],E=d[1],P=d[2],W=d[3];return Math.sqrt(m*m+E*E+P*P+W*W)}const Ne=We;function Oe(d){const m=d[0],E=d[1],P=d[2],W=d[3];return m*m+E*E+P*P+W*W}const je=Oe;function De(d,m){const E=d[0]-m[0],P=d[1]-m[1],W=d[2]-m[2],l=d[3]-m[3];return Math.sqrt(E*E+P*P+W*W+l*l)}const Pe=De;function xe(d,m){const E=d[0]-m[0],P=d[1]-m[1],W=d[2]-m[2],l=d[3]-m[3];return E*E+P*P+W*W+l*l}const Ye=xe;function He(d,m){const E=m??new a(4),P=d[0],W=d[1],l=d[2],v=d[3],c=Math.sqrt(P*P+W*W+l*l+v*v);return c>1e-5?(E[0]=P/c,E[1]=W/c,E[2]=l/c,E[3]=v/c):(E[0]=0,E[1]=0,E[2]=0,E[3]=0),E}function Ve(d,m){const E=m??new a(4);return E[0]=-d[0],E[1]=-d[1],E[2]=-d[2],E[3]=-d[3],E}function le(d,m){const E=m??new a(4);return E[0]=d[0],E[1]=d[1],E[2]=d[2],E[3]=d[3],E}const ye=le;function se(d,m,E){const P=E??new a(4);return P[0]=d[0]*m[0],P[1]=d[1]*m[1],P[2]=d[2]*m[2],P[3]=d[3]*m[3],P}const I=se;function ne(d,m,E){const P=E??new a(4);return P[0]=d[0]/m[0],P[1]=d[1]/m[1],P[2]=d[2]/m[2],P[3]=d[3]/m[3],P}const Me=ne;function Se(d){const m=d??new a(4);return m[0]=0,m[1]=0,m[2]=0,m[3]=0,m}function Le(d,m,E){const P=E??new a(4),W=d[0],l=d[1],v=d[2],c=d[3];return P[0]=m[0]*W+m[4]*l+m[8]*v+m[12]*c,P[1]=m[1]*W+m[5]*l+m[9]*v+m[13]*c,P[2]=m[2]*W+m[6]*l+m[10]*v+m[14]*c,P[3]=m[3]*W+m[7]*l+m[11]*v+m[15]*c,P}function Re(d,m,E){const P=E??new a(4);return He(d,P),Z(P,m,P)}function p(d,m,E){const P=E??new a(4);return We(d)>m?Re(d,m,P):le(d,P)}function M(d,m,E){const P=E??new a(4);return j(d,m,.5,P)}return{create:i,fromValues:o,set:f,ceil:g,floor:w,round:S,clamp:A,add:D,addScaled:b,subtract:G,sub:N,equalsApproximately:F,equals:J,lerp:j,lerpV:ee,max:te,min:X,mulScalar:Z,scale:ue,divScalar:he,inverse:Ue,invert:ke,dot:Ce,length:We,len:Ne,lengthSq:Oe,lenSq:je,distance:De,dist:Pe,distanceSq:xe,distSq:Ye,normalize:He,negate:Ve,copy:le,clone:ye,multiply:se,mul:I,divide:ne,div:Me,zero:Se,transformMat4:Le,setLength:Re,truncate:p,midpoint:M}}const id=new Map;function xm(a){let i=id.get(a);return i||(i=wm(a),id.set(a,i)),i}function al(a,i,o,f,g,w){return{mat3:mm(a),mat4:gm(i),quat:ym(o),vec2:kd(f),vec3:Xa(g),vec4:xm(w)}}const{mat3:O_,mat4:Yt,quat:G_,vec2:rn,vec3:It,vec4:mr}=al(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);al(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);al(dm,Array,Array,Array,Array,Array);const Sm=new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]);class Tm{constructor(i,o){V(this,"device");V(this,"presentFormat");V(this,"quit",!1);V(this,"pipeline");V(this,"vertexBuffer");V(this,"indexBuffer");V(this,"indexCount");V(this,"projViewModelBuffer");V(this,"projViewModelBindGroup");V(this,"supportedFeatures");this.device=i,this.presentFormat=o,this.supportedFeatures=i.features;const f=this.device.createShaderModule({code:um}),g=new Float32Array([-1,-1,-1,1,0,0,0,1,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,-1,1,-1,1,0,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1]),w=new Uint32Array([0,1,2,0,2,3,1,5,6,1,6,2,2,6,7,2,7,3,4,7,6,4,6,5,0,3,7,0,7,4,0,4,5,0,5,1]);this.indexCount=w.length,this.vertexBuffer=this.device.createBuffer({size:g.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,g,0,g.length);const S=[{attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}],arrayStride:2*16,stepMode:"vertex"}];this.indexBuffer=this.device.createBuffer({size:w.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,w,0,w.length);const A=16*4;this.projViewModelBuffer=this.device.createBuffer({size:A,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const D=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.projViewModelBindGroup=this.device.createBindGroup({layout:D,entries:[{binding:0,resource:{buffer:this.projViewModelBuffer}}]});const b={vertex:{module:f,entryPoint:"vertex_main",buffers:S},fragment:{module:f,entryPoint:"fragment_main",targets:[{format:this.presentFormat}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},layout:this.device.createPipelineLayout({bindGroupLayouts:[D]})};this.pipeline=this.device.createRenderPipeline(b)}setupUI(i){Sm.forEach(o=>{const f=this.supportedFeatures.has(o);i.add({enabled:f},"enabled").name(o).disable(!0)})}draw(i,o,f){const g=i.createView(),w=60*Math.PI/180,D=Yt.perspective(w,o,.1,1e3),b=[3,5,10],G=[0,0,0],N=[0,1,0],F=Yt.lookAt(b,G,N),J=Yt.axisRotation([1,1,0],f/1e3),j=Yt.mul(D,Yt.mul(F,J));this.device.queue.writeBuffer(this.projViewModelBuffer,0,j,0,j.length);const ee=this.device.createCommandEncoder(),te={r:.5,g:.5,b:.5,a:0},X=ee.beginRenderPass({colorAttachments:[{clearValue:te,loadOp:"clear",storeOp:"store",view:g}]});X.setPipeline(this.pipeline),X.setVertexBuffer(0,this.vertexBuffer),X.setIndexBuffer(this.indexBuffer,"uint32",0,this.indexBuffer.size),X.setBindGroup(0,this.projViewModelBindGroup),X.drawIndexed(this.indexCount,1,0,0,0),X.end(),this.device.queue.submit([ee.finish()])}}const Em=(a,i,o)=>new Tm(a,i),Cd=4;class Ka{constructor(i,o,f){V(this,"buffer");this.buffer=i.createBuffer({size:o*Cd,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM,label:f})}writeToGPU(i){const o=this.packed();o.byteLength!=this.buffer.size&&console.warn(`GPUBuffer label: '${this.buffer.label}' uploaded with improper size. Expected: ${this.buffer.size} bytes, got ${o.byteLength} bytes.`),i.writeBuffer(this.buffer,0,o)}}function Dm(){return{rayleighMm:{scattering:It.create(5.802,13.558,33.1),absorption:It.create(0,0,0),densityScale:.008},mieMm:{scattering:It.create(3.996,3.996,3.996),absorption:It.create(4.4,4.4,4.4),densityScale:.0012},ozoneMm:{scattering:It.create(0,0,0),absorption:It.create(.65,1.881,.085)},planetRadiusMm:6.36,atmosphereRadiusMm:6.42,groundAlbedo:It.create(.3*1,.3*.75,.3*.4)}}function Mm(){return{color:It.create(1,1,1),strength:60,forward:It.create(0,-1,0),angularRadius:16/60*(3.141592653589793/180)}}const zm=16,bm=128,Am=16,Pm=32,Rm=16,Lm=256,Um=16,km=16;function Cm(a,i){return Math.ceil(i/a)*a}const Im=Math.max(zm,Am,Rm,Um),Fm=Cm(Im,bm+Pm+Lm+km);class Nm extends Ka{constructor(o){super(o,Fm/Cd,"Global UBO");V(this,"data",{atmosphere:Dm(),light:Mm(),camera:{invProj:Yt.identity(),invView:Yt.identity(),projView:Yt.identity(),position:mr.create(0,0,0,1),forward:mr.create(0,0,-1,0)},time:{timeSeconds:0}})}packed(){const o=new Float32Array(3).fill(0),f=new Float32Array(4).fill(0),g=new Float32Array(4*2).fill(0),w=this.data.atmosphere,S=w.rayleighMm,A=w.mieMm,D=new Float32Array([...S.scattering,S.densityScale,...S.absorption,w.planetRadiusMm,...A.scattering,A.densityScale,...A.absorption,w.atmosphereRadiusMm,...w.groundAlbedo,0,...w.ozoneMm.scattering,0,...w.ozoneMm.absorption,0,...f]),b=this.data.light,G=new Float32Array([...b.color,b.strength,...b.forward,b.angularRadius]),N=this.data.camera,F=new Float32Array([...N.invProj,...N.invView,...N.projView,...N.position,...N.forward,...g]),J=this.data.time,j=new Float32Array([...o,J.timeSeconds]);return new Float32Array([...F,...D,...G,...j])}}var Ae=(a=>(a[a.SkyviewLUT=0]="SkyviewLUT",a[a.TransmittanceLUT=1]="TransmittanceLUT",a[a.MultiscatterLUT=2]="MultiscatterLUT",a[a.Scene=3]="Scene",a[a.GBufferColor=4]="GBufferColor",a[a.GBufferNormal=5]="GBufferNormal",a[a.FFTWaveSpectrumGaussianNoise=6]="FFTWaveSpectrumGaussianNoise",a[a.FFTWaveFourierAmplitude=7]="FFTWaveFourierAmplitude",a[a.FFTWaveDy_plus_iDxdz_Amplitude=8]="FFTWaveDy_plus_iDxdz_Amplitude",a[a.FFTWaveDx_plus_iDz_Amplitude=9]="FFTWaveDx_plus_iDz_Amplitude",a[a.FFTWaveDydx_plus_iDydz_Amplitude=10]="FFTWaveDydx_plus_iDydz_Amplitude",a[a.FFTWaveDxdx_plus_iDzdz_Amplitude=11]="FFTWaveDxdx_plus_iDzdz_Amplitude",a[a.FFTWaveDx_Dy_Dz_Dxdz_Spatial=12]="FFTWaveDx_Dy_Dz_Dxdz_Spatial",a[a.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial=13]="FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial",a))(Ae||{});class At{constructor(i){V(this,"texture");V(this,"view");this.texture=i,this.view=i.createView()}get mipLevelCount(){return this.texture.mipLevelCount}}const ad="rgba16float",Om="float",Gm="depth32float",sd="rgba16float",Bm="float";class od{constructor(i,o,f){V(this,"colorWithDepthInAlpha");V(this,"colorWithDepthInAlphaView");V(this,"normal");V(this,"normalView");V(this,"depth");V(this,"depthView");V(this,"readGroupLayout");V(this,"readGroup");V(this,"writeGroupLayout");V(this,"writeGroup");this.colorWithDepthInAlpha=i.createTexture({size:o,dimension:"2d",format:ad,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer ColorWithDepthInAlpha"}),this.colorWithDepthInAlphaView=this.colorWithDepthInAlpha.createView({label:"GBuffer ColorWithDepthInAlpha"}),this.normal=i.createTexture({size:o,dimension:"2d",format:sd,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Normal"}),this.normalView=this.normal.createView({label:"GBuffer Normal"}),this.readGroupLayout=(f==null?void 0:f.readGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Om}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Bm}}],label:"GBuffer Read Group Layout"}),this.readGroup=i.createBindGroup({layout:this.readGroupLayout,entries:[{binding:0,resource:this.colorWithDepthInAlphaView},{binding:1,resource:this.normalView}],label:"GBuffer Read Group"}),this.writeGroupLayout=(f==null?void 0:f.writeGroupLayout)??i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:ad}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:sd}}],label:"GBuffer Write Group Layout"}),this.writeGroup=i.createBindGroup({layout:this.writeGroupLayout,entries:[{binding:0,resource:this.colorWithDepthInAlphaView},{binding:1,resource:this.normalView}],label:"GBuffer Write Group"}),this.depth=i.createTexture({size:o,dimension:"2d",format:Gm,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Depth"}),this.depthView=this.depth.createView({label:"GBuffer Depth"})}}const Wm=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
`,Vm="rgba32float";class qm{constructor(i,o,f){V(this,"texture");V(this,"view");V(this,"group0");V(this,"group1");V(this,"pipeline");this.texture=i.createTexture({size:o,dimension:"2d",format:Vm,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Transmittance LUT"}),this.view=this.texture.createView({label:"Transmittance LUT"});const g=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:this.texture.format}}],label:"Transmittance LUT Group 0"});this.group0=i.createBindGroup({layout:g,entries:[{binding:0,resource:this.view}],label:"Transmittance LUT Group 0"});const w=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Transmittance LUT Group 1"});this.group1=i.createBindGroup({layout:w,entries:[{binding:0,resource:{buffer:f.buffer}}],label:"Transmittance LUT Group 1"});const S=i.createShaderModule({code:Wm,label:"Transmittance LUT"});this.pipeline=i.createComputePipeline({compute:{module:S,entryPoint:"computeTransmittance"},layout:i.createPipelineLayout({bindGroupLayouts:[g,w]}),label:"Transmittance LUT"})}}const Hm=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
`,ld="rgba32float";class $m{constructor(i,o,f,g,w){V(this,"texture");V(this,"view");V(this,"group0");V(this,"group1");V(this,"pipeline");const S="Multiscatter LUT";this.texture=i.createTexture({size:o,dimension:"2d",format:ld,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Multiscatter LUT"}),this.view=this.texture.createView({label:S});const A=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:ld}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:g?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:g?"float":"unfilterable-float"}}],label:"Multiscatter LUT Group 0"});this.group0=i.createBindGroup({layout:A,entries:[{binding:0,resource:this.view},{binding:1,resource:i.createSampler({magFilter:g?"linear":"nearest",minFilter:g?"linear":"nearest"})},{binding:2,resource:f}],label:"Multiscatter LUT Group 0"});const D=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Multiscatter LUT Group 1"});this.group1=i.createBindGroup({layout:D,entries:[{binding:0,resource:{buffer:w.buffer}}],label:"Multiscatter LUT Group 1"});const b=i.createShaderModule({code:Hm,label:S});this.pipeline=i.createComputePipeline({compute:{module:b,entryPoint:"computeMultiscattering"},layout:i.createPipelineLayout({bindGroupLayouts:[A,D]}),label:"Multiscatter LUT"})}}const jm=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
`,ud="rgba32float";class Qm{constructor(i,o,f,g,w,S){V(this,"texture");V(this,"view");V(this,"group0");V(this,"group1");V(this,"pipeline");this.texture=i.createTexture({size:o,dimension:"2d",format:ud,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Skyview LUT"}),this.view=this.texture.createView({label:"Skyview LUT"});const A=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:ud}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:w?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:w?"float":"unfilterable-float"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:w?"float":"unfilterable-float"}}],label:"Skyview LUT"});this.group0=i.createBindGroup({layout:A,entries:[{binding:0,resource:this.view},{binding:1,resource:i.createSampler({magFilter:w?"linear":"nearest",minFilter:w?"linear":"nearest"})},{binding:2,resource:f},{binding:3,resource:g}],label:"Skyview LUT Group 0"});const D=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Skyview LUT Group 1"});this.group1=i.createBindGroup({layout:D,entries:[{binding:0,resource:{buffer:S.buffer}}],label:"Skyview LUT Group 1"});const b=i.createShaderModule({code:jm});this.pipeline=i.createComputePipeline({compute:{module:b,entryPoint:"computeSkyViewLuminance"},layout:i.createPipelineLayout({bindGroupLayouts:[A,D]}),label:"Skyview LUT"})}}const Ym=`// Textures must have the same dimension
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


const FOURIER_GRID_DIMENSION = 1024u;
const WAVE_PATCH_EXTENT_METERS = 50.0;

const PI = 3.141592653589793;
const WAVE_PERIOD_SECONDS = 100.0;

const GRAVITY = 9.8;

const WIND_SPEED_METERS_PER_SECOND = 5.0;
// 10 km fetch
const WIND_FETCH_METERS = 10.0 * 1000.0;
const SWELL = 0.3;

// Implementation derived from:
// Nicolas Lutz, Arnaud Schoentgen, and Guillaume Gilet. 2024. Fast orientable aperiodic ocean synthesis using tiling and blending. Proc. ACM Comput. Graph. Interact. Tech. 7, 3, Article 49 (August 2024), 22 pages. https://doi.org/10.1145/3675388

// Deterministic wave parameters derived from texture coordinate
struct WaveParameters
{
	// Ranges from -FOURIER_GRID_DIMENSION / 2 to FOURIER_GRID_DIMENSION / 2
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

fn waveParameters(texel_coord: vec2<u32>) -> WaveParameters
{
	var result: WaveParameters;

	const wave_coord_offset = i32(FOURIER_GRID_DIMENSION / 2u);
	const g = GRAVITY;

	result.wave_coord = vec2<i32>(i32(texel_coord.x), i32(texel_coord.y)) - vec2<i32>(wave_coord_offset);

	const QUANTIZED_FREQUENCIES = true;
	if (QUANTIZED_FREQUENCIES)
	{
		let frequency_quantization_step = 2.0 * PI / WAVE_PERIOD_SECONDS;
		let fundamental_frequency = quantizeFrequency(sqrt(g * 2.0 * PI / WAVE_PATCH_EXTENT_METERS), frequency_quantization_step);
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
		let fundamental_wave_number = 2.0 * PI / WAVE_PATCH_EXTENT_METERS;
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
	let wave = waveParameters(texel_coord);

	if (abs(wave.wave_number) < wave.delta_wave_number)
	{
		let amplitude = vec2<f32>(0.0, 0.0);
		textureStore(out_fourier_amplitude, texel_coord, vec4<f32>(amplitude, 0.0, 0.0));
		return;
	}

	let peak_frequency = 22.0 * pow(GRAVITY * GRAVITY / (WIND_SPEED_METERS_PER_SECOND * WIND_FETCH_METERS), 1.0 / 3.0);

	let spectrum = waveSpectrumJONSWAP(wave.frequency, peak_frequency)
		* waveDirectionalSpreading(wave.frequency, peak_frequency, wave.wind_angle);

	let magnitude = sqrt(
		2.0
		* spectrum
		* (wave.d_frequency_d_wave_number / wave.wave_number)
		* wave.delta_wave_number * wave.delta_wave_number
	);

	let amplitude = inverseSqrt(2.0)
		* gaussian_pair
		* magnitude;

	textureStore(out_fourier_amplitude, texel_coord, vec4<f32>(amplitude, 0.0, 0.0));
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
@group(0) @binding(4) var in_fourier_amplitude: texture_storage_2d<rg32float, read>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x);
}

@compute @workgroup_size(16, 16, 1)
fn realizeFourierAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>,)
{
	let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_packed_Dy_plus_iDxdz_amplitude);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let wave = waveParameters(texel_coord);
	let k_amplitude = textureLoad(in_fourier_amplitude, texel_coord).xy;

	let k_minus_coord = vec2<u32>(
		(FOURIER_GRID_DIMENSION - texel_coord.x) % FOURIER_GRID_DIMENSION,
		(FOURIER_GRID_DIMENSION - texel_coord.y) % FOURIER_GRID_DIMENSION
	);
	let k_minus_amplitude = textureLoad(in_fourier_amplitude, k_minus_coord).xy;
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
`;class Km extends Ka{constructor(o){super(o,3,"DFFT Parameters UBO");V(this,"data",{log_2_size:1,size:2,b_inverse:!1})}packed(){const o=new ArrayBuffer(this.buffer.size),f=new DataView(o);return f.setUint32(0,this.data.log_2_size,!0),f.setUint32(4,this.data.size,!0),f.setFloat32(8,this.data.b_inverse?1:0,!0),o}}class Zm{constructor(i,o){V(this,"parametersUBO");V(this,"intermediateDFTs");V(this,"complexBuffer0");V(this,"complexBuffer1");V(this,"stepCounterBuffer");V(this,"intermediateDFTsBindGroup");V(this,"intermediateDFTsKernel");V(this,"performBindGroup");V(this,"performKernel");V(this,"performSwapEvenSignsKernel");V(this,"stepCounterBindGroup");V(this,"incrementStepCounterKernel");V(this,"resetStepCounterKernel");V(this,"debugBuffersCopied",!1);if(o<5)throw new RangeError("gridSizeExponent must be greater than 4.");const f=Math.pow(2,o);this.parametersUBO=new Km(i),this.parametersUBO.data.log_2_size=o,this.parametersUBO.data.size=f,this.parametersUBO.data.b_inverse=!1,this.parametersUBO.writeToGPU(i.queue);const g=16;this.intermediateDFTs=i.createBuffer({label:"DFFT Precompute Stage Steps",size:o*f*g,usage:GPUBufferUsage.STORAGE});const w=i.createShaderModule({label:"DFFT Precompute Stage",code:Xm}),S=i.createBindGroupLayout({label:"DFFT Precompute Stage Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.intermediateDFTsBindGroup=i.createBindGroup({label:"DFFT Precompute Stage Group 0",layout:S,entries:[{binding:0,resource:{buffer:this.parametersUBO.buffer}},{binding:1,resource:{buffer:this.intermediateDFTs}}]});const A=i.createPipelineLayout({label:"DFFT Precompute Steps Kernel",bindGroupLayouts:[S]});this.intermediateDFTsKernel=i.createComputePipeline({label:"DFFT Precompute Stage",compute:{module:w,entryPoint:"precomputeDFFTInstructions"},layout:A});const D=i.createBindGroupLayout({label:"DFFT Perform Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),b=8;this.complexBuffer0=i.createBuffer({label:"DFFT Buffer 0",size:f*f*b,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.complexBuffer1=i.createBuffer({label:"DFFT Buffer 1",size:this.complexBuffer0.size,usage:this.complexBuffer0.usage}),this.stepCounterBuffer=i.createBuffer({label:"DFFT Step Counter",size:4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE|GPUBufferUsage.UNIFORM});const G=new Uint32Array(1);G[0]=0,i.queue.writeBuffer(this.stepCounterBuffer,0,G),this.performBindGroup=i.createBindGroup({label:"DFFT Perform Group 0",layout:D,entries:[{binding:0,resource:{buffer:this.parametersUBO.buffer}},{binding:1,resource:{buffer:this.intermediateDFTs}},{binding:2,resource:{buffer:this.complexBuffer0}},{binding:3,resource:{buffer:this.complexBuffer1}},{binding:4,resource:{buffer:this.stepCounterBuffer}}]});const N=i.createPipelineLayout({label:"DFFT Perform",bindGroupLayouts:[D]});this.performKernel=i.createComputePipeline({label:"DFFT Perform DFFT Step",compute:{module:w,entryPoint:"performDFFTStep"},layout:N}),this.performSwapEvenSignsKernel=i.createComputePipeline({label:"DFFT Perform Swap Even Signs",compute:{module:w,entryPoint:"performSwapEvenSigns"},layout:N});const F=i.createBindGroupLayout({label:"DFFT Step Counter Bind Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.stepCounterBindGroup=i.createBindGroup({label:"DFFT Step Counter Bind Group 0",layout:F,entries:[{binding:0,resource:{buffer:this.stepCounterBuffer}}]});const J=i.createPipelineLayout({label:"DFFT Step Counter",bindGroupLayouts:[F]});this.incrementStepCounterKernel=i.createComputePipeline({label:"DFFT Increment Step Counter Kernel",layout:J,compute:{module:w,entryPoint:"incrementStepCounter"}}),this.resetStepCounterKernel=i.createComputePipeline({label:"DFFT Reset Step Counter Kernel",layout:J,compute:{module:w,entryPoint:"resetStepCounter"}}),this.parametersUBO.data.b_inverse=!0,this.parametersUBO.writeToGPU(i.queue);const j=i.createCommandEncoder({label:"DFFT Precompute"}),ee=j.beginComputePass({label:"DFFT Precompute Steps"});ee.setPipeline(this.intermediateDFTsKernel),ee.setBindGroup(0,this.intermediateDFTsBindGroup),ee.dispatchWorkgroups(f/2/2,1,1),ee.end(),i.queue.submit([j.finish()])}recordPerformOnBuffer0(i,o){const f=this.parametersUBO.data.size,g=this.parametersUBO.data.log_2_size,w=i.beginComputePass({label:"DFFT Perform",timestampWrites:o});for(let S=0;S<2*g;S++)S===0?(w.setPipeline(this.resetStepCounterKernel),w.setBindGroup(0,this.stepCounterBindGroup),w.dispatchWorkgroups(1,1,1)):(w.setPipeline(this.incrementStepCounterKernel),w.setBindGroup(0,this.stepCounterBindGroup),w.dispatchWorkgroups(1,1,1)),w.setPipeline(this.performKernel),w.setBindGroup(0,this.performBindGroup),w.dispatchWorkgroups(f/16,f/16,1);w.setPipeline(this.performSwapEvenSignsKernel),w.setBindGroup(0,this.performBindGroup),w.dispatchWorkgroups(f/16,f/16,1),w.end()}recordPerform(i,o,f,g,w,S){const A="rg32float";if(f.format!=A||g.format!=A)throw RangeError(`SourceTexture (format ${f.format}) and DestinationTexture (format ${g.format}) must both be ${A}`);this.parametersUBO.data.b_inverse=w,this.parametersUBO.writeToGPU(i.queue);const D=this.parametersUBO.data.size;o.copyTextureToBuffer({texture:f},{buffer:this.complexBuffer0,bytesPerRow:this.complexBuffer0.size/D},{width:f.width,height:f.height,depthOrArrayLayers:f.depthOrArrayLayers}),this.recordPerformOnBuffer0(o,S),o.copyBufferToTexture({buffer:this.complexBuffer0,bytesPerRow:this.complexBuffer0.size/D},{texture:g},{width:g.width,height:g.height,depthOrArrayLayers:g.depthOrArrayLayers})}}const Jm=`@group(0) @binding(0) var out_next_mip_level: texture_storage_2d<rgba16float, write>;
@group(0) @binding(1) var in_previous_mip_level: texture_2d<f32>;

@compute @workgroup_size(16, 16)
fn fillMipMap(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	// Each mip level halves the resolution

	let color = 0.25 * (
		  textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(0,0), 0)
		+ textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(0,1), 0)
		+ textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(1,0), 0)
		+ textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(1,1), 0)
	);
	textureStore(out_next_mip_level, global_id.xy, color);
}
`,Go="rgba16float";class e_{constructor(i){V(this,"fillMipMapTextureInOutLayout");V(this,"fillMipMapKernel");this.fillMipMapTextureInOutLayout=i.createBindGroupLayout({label:"MipMap Generation fillMipMap Texture In-Out",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Go}},{binding:1,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float"}}]});const o=i.createShaderModule({label:"sky-sea/mipmap.wgsl",code:Jm}),f=i.createPipelineLayout({label:"MipMap Generation fillMipMap Kernel",bindGroupLayouts:[this.fillMipMapTextureInOutLayout]});this.fillMipMapKernel=i.createComputePipeline({label:"MipMap Generation fillMipMap Kernel",layout:f,compute:{module:o,entryPoint:"fillMipMap"}})}createBindGroups(i,o){if(o.format!=Go)throw new RangeError(`Invalid source texture (label ${o.label}) for MipMap generation`,{cause:`Source format is ${o.format} when expected ${Go}`});if(!(o.usage&GPUTextureUsage.COPY_SRC))throw new RangeError(`Invalid source texture (label ${o.label}) for MipMap generation`,{cause:"Source usage is missing required flag COPY_SRC"});if(o.width!=o.height||!Number.isInteger(Math.log2(o.width)))throw new RangeError(`Invalid source texture (label ${o.label}) for MipMap generation`,{cause:`Source dimensions of (${o.width},${o.height}) are invalid, texture must be square and power-of-2.`});const f=Math.log2(o.width);return{level0Size:{width:o.width,height:o.height},bindGroupsByMipLevel:[...new Array(Math.min(f,o.mipLevelCount)-1).keys()].map((g,w)=>{const S=w+1,A=w;return i.createBindGroup({label:`MipMap Generation for '${o.label}' IO Bind Group '${A} => ${S}'`,layout:this.fillMipMapTextureInOutLayout,entries:[{binding:0,resource:o.createView({baseMipLevel:S,mipLevelCount:1})},{binding:1,resource:o.createView({baseMipLevel:A,mipLevelCount:1})}]})})}}updateMipMaps(i,o){const f=i.beginComputePass({label:"MipMap Generation"});f.setPipeline(this.fillMipMapKernel),o.bindGroupsByMipLevel.forEach((g,w)=>{f.setBindGroup(0,g);const S=1<<w;f.dispatchWorkgroups(o.level0Size.width/S/16,o.level0Size.height/S/16)}),f.end()}}const t_=1024,cd=10,dd="rg32float",fd="rg32float",pd="rgba16float",hd="rgba16float",Br="rg32float";function n_(){const a=Math.random(),i=Math.random(),o=Math.sqrt(-2*Math.log(a)),f=2*Math.PI*i,g=o*Math.cos(f),w=o*Math.sin(f);return[g,w]}class r_{constructor(i,o){V(this,"Dx_Dy_Dz_Dxdz_Spatial");V(this,"Dydx_Dydz_Dxdx_Dzdz_Spatial");V(this,"Dx_Dy_Dz_Dxdz_SpatialAllMips");V(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips");i.mipLevelCount!=o.mipLevelCount&&console.warn(`FFT Displacement maps do not have identical mip levels. ${i.mipLevelCount} vs ${o.mipLevelCount}`),this.Dx_Dy_Dz_Dxdz_Spatial=i,this.Dydx_Dydz_Dxdx_Dzdz_Spatial=o,this.Dx_Dy_Dz_Dxdz_SpatialAllMips=this.Dx_Dy_Dz_Dxdz_Spatial.createView({label:`FFTWaveDisplacementMaps for ${this.Dx_Dy_Dz_Dxdz_Spatial.label}`}),this.Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips=this.Dydx_Dydz_Dxdx_Dzdz_Spatial.createView({label:`FFTWaveDisplacementMaps for ${this.Dydx_Dydz_Dxdx_Dzdz_Spatial.label}`})}get mipLevelCount(){return this.Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount}}class i_{constructor(i,o){V(this,"spectrumDimension");V(this,"gaussianNoise");V(this,"fourierAmplitude");V(this,"fourierAmplitudeGroup0");V(this,"fourierAmplitudePipeline");V(this,"packed_Dy_plus_iDxdz_Amplitude");V(this,"packed_Dx_plus_iDz_Amplitude");V(this,"packed_Dydx_plus_iDydz_Amplitude");V(this,"packed_Dxdx_plus_iDzdz_Amplitude");V(this,"realizedFourierAmplitudeGroup0");V(this,"realizedFourierAmplitudeGroup1");V(this,"realizedFourierAmplitudePipeline");V(this,"Dy_Dxdz_Spatial");V(this,"Dx_Dz_Spatial");V(this,"Dydx_Dydz_Spatial");V(this,"Dxdx_Dzdz_Spatial");V(this,"Dx_Dy_Dz_Dxdz_Spatial");V(this,"Dydx_Dydz_Dxdx_Dzdz_Spatial");V(this,"fillSpatialTexturesGroup0");V(this,"fillSpatialTexturesKernel");V(this,"dfftResources");V(this,"mipMapGenerator");V(this,"mipMapBindings_Dx_Dy_Dz_Dxdz_Spatial");V(this,"mipMapBindings_Dydx_Dydz_Dxdx_Dzdz_Spatial");this.spectrumDimension=t_;const f={width:this.spectrumDimension,height:this.spectrumDimension};this.gaussianNoise=i.createTexture({label:"FFT Wave Gaussian Noise",format:dd,size:f,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING});const g=2,S=8*this.spectrumDimension,A=new Float32Array(this.spectrumDimension*this.spectrumDimension*g);for(let te=0;te<A.length;te++)A[te]=n_()[0];i.queue.writeTexture({texture:this.gaussianNoise},A,{bytesPerRow:S},{width:this.gaussianNoise.width,height:this.gaussianNoise.height}),this.fourierAmplitude=i.createTexture({label:"FFT Wave Fourier Amplitude h_0(k)",format:fd,size:f,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING});const D=i.createBindGroupLayout({label:"FFT Wave Fourier Amplitude h_0(k) Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:fd,access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:dd,access:"read-only"}}]});this.fourierAmplitudeGroup0=i.createBindGroup({label:"FFT Wave Fourier Amplitude h_0(k) Group 0",layout:D,entries:[{binding:0,resource:this.fourierAmplitude.createView()},{binding:1,resource:this.gaussianNoise.createView()}]}),this.dfftResources=new Zm(i,cd);const b=i.createShaderModule({label:"FFT Wave",code:Ym});this.fourierAmplitudePipeline=i.createComputePipeline({label:"FFT Wave Fourier Amplitude h_0(k)",layout:i.createPipelineLayout({label:"FFT Wave Fourier Amplitude h_0(k)",bindGroupLayouts:[D]}),compute:{module:b,entryPoint:"computeFourierAmplitude"}}),this.packed_Dy_plus_iDxdz_Amplitude=i.createTexture({label:"FFT Wave Dy Amplitude",format:Br,size:f,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),this.packed_Dx_plus_iDz_Amplitude=i.createTexture({label:"FFT Wave Packed Dx + i * Dz Amplitude",format:this.packed_Dy_plus_iDxdz_Amplitude.format,size:f,usage:this.packed_Dy_plus_iDxdz_Amplitude.usage}),this.packed_Dydx_plus_iDydz_Amplitude=i.createTexture({label:"FFT Wave Packed Dydx + i * Dydz Amplitude",format:this.packed_Dy_plus_iDxdz_Amplitude.format,size:f,usage:this.packed_Dy_plus_iDxdz_Amplitude.usage}),this.packed_Dxdx_plus_iDzdz_Amplitude=i.createTexture({label:"FFT Wave Packed Dxdx + i * Dzdz Amplitude",format:this.packed_Dy_plus_iDxdz_Amplitude.format,size:f,usage:this.packed_Dy_plus_iDxdz_Amplitude.usage}),this.Dy_Dxdz_Spatial=i.createTexture({label:"FFT Wave Spatial (Dy, 0)",format:Br,size:f,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.Dx_Dz_Spatial=i.createTexture({label:"FFT Wave Spatial (Dx, Dz)",format:this.Dy_Dxdz_Spatial.format,size:f,usage:this.Dy_Dxdz_Spatial.usage}),this.Dydx_Dydz_Spatial=i.createTexture({label:"FFT Wave Spatial (Dydx, Dydz)",format:this.Dy_Dxdz_Spatial.format,size:f,usage:this.Dy_Dxdz_Spatial.usage}),this.Dxdx_Dzdz_Spatial=i.createTexture({label:"FFT Wave Spatial (Dxdx, Dzdz)",format:this.Dy_Dxdz_Spatial.format,size:f,usage:this.Dy_Dxdz_Spatial.usage}),this.Dx_Dy_Dz_Dxdz_Spatial=i.createTexture({label:"FFT Wave Final Displacement",format:pd,size:f,mipLevelCount:cd,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST}),this.Dydx_Dydz_Dxdx_Dzdz_Spatial=i.createTexture({label:"FFT Wave Final Derivatives",format:hd,size:f,mipLevelCount:this.Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount,usage:this.Dx_Dy_Dz_Dxdz_Spatial.usage}),this.mipMapGenerator=new e_(i),this.mipMapBindings_Dx_Dy_Dz_Dxdz_Spatial=this.mipMapGenerator.createBindGroups(i,this.Dx_Dy_Dz_Dxdz_Spatial),this.mipMapBindings_Dydx_Dydz_Dxdx_Dzdz_Spatial=this.mipMapGenerator.createBindGroups(i,this.Dydx_Dydz_Dxdx_Dzdz_Spatial);const G=i.createBindGroupLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"write-only"}},{binding:2,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"write-only"}},{binding:3,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"write-only"}},{binding:4,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:"rg32float",access:"read-only"}}]});this.realizedFourierAmplitudeGroup0=i.createBindGroup({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 0",layout:G,entries:[{binding:0,resource:this.packed_Dy_plus_iDxdz_Amplitude.createView()},{binding:1,resource:this.packed_Dx_plus_iDz_Amplitude.createView()},{binding:2,resource:this.packed_Dydx_plus_iDydz_Amplitude.createView()},{binding:3,resource:this.packed_Dxdx_plus_iDzdz_Amplitude.createView()},{binding:4,resource:this.fourierAmplitude.createView()}]});const N=i.createBindGroupLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 1",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.realizedFourierAmplitudeGroup1=i.createBindGroup({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 1",layout:N,entries:[{binding:0,resource:{buffer:o.buffer}}]}),this.realizedFourierAmplitudePipeline=i.createComputePipeline({label:"FFT Wave Realized Fourier Amplitude h(k,t)",layout:i.createPipelineLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t)",bindGroupLayouts:[G,N]}),compute:{module:b,entryPoint:"realizeFourierAmplitude"}});const F=i.createBindGroupLayout({label:"FFT Wave Fill Spatial Textures Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:pd,access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:hd,access:"write-only"}},{binding:2,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Br,access:"read-only"}},{binding:3,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Br,access:"read-only"}},{binding:4,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Br,access:"read-only"}},{binding:5,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:Br,access:"read-only"}}]});this.fillSpatialTexturesGroup0=i.createBindGroup({label:"FFT Wave Fill Spatial Textures Group 0",layout:F,entries:[{binding:0,resource:this.Dx_Dy_Dz_Dxdz_Spatial.createView({mipLevelCount:1})},{binding:1,resource:this.Dydx_Dydz_Dxdx_Dzdz_Spatial.createView({mipLevelCount:1})},{binding:2,resource:this.Dy_Dxdz_Spatial.createView()},{binding:3,resource:this.Dx_Dz_Spatial.createView()},{binding:4,resource:this.Dydx_Dydz_Spatial.createView()},{binding:5,resource:this.Dxdx_Dzdz_Spatial.createView()}]}),this.fillSpatialTexturesKernel=i.createComputePipeline({label:"FFT Wave Fill Spatial Textures",layout:i.createPipelineLayout({label:"FFT Wave Fill SpatialTextures",bindGroupLayouts:[F]}),compute:{module:b,entryPoint:"fillSpatialTextures"}});const J=i.createCommandEncoder({label:"FFT Wave Precompute"}),j=J.beginComputePass({label:"FFT Wave Fourier Amplitude"});j.setPipeline(this.fourierAmplitudePipeline),j.setBindGroup(0,this.fourierAmplitudeGroup0);const ee={width:this.fourierAmplitude.width,height:this.fourierAmplitude.height,depth:1};j.dispatchWorkgroups(ee.width/16,ee.height/16,ee.depth/1),j.end(),i.queue.submit([J.finish()])}views(){return{gaussianNoise:new At(this.gaussianNoise),fourierAmplitude:new At(this.fourierAmplitude),Dy_Amplitude:new At(this.packed_Dy_plus_iDxdz_Amplitude),Dx_plus_iDz_Amplitude:new At(this.packed_Dx_plus_iDz_Amplitude),Dx_Dy_Dz_Dxdz_Spatial:new At(this.Dx_Dy_Dz_Dxdz_Spatial),packed_Dxdx_plus_iDzdz_Amplitude:new At(this.packed_Dxdx_plus_iDzdz_Amplitude),packed_Dydx_plus_iDydz_Amplitude:new At(this.packed_Dydx_plus_iDydz_Amplitude),Dydx_Dydz_Dxdx_Dzdz_Spatial:new At(this.Dydx_Dydz_Dxdx_Dzdz_Spatial)}}displacementMaps(){return new r_(this.Dx_Dy_Dz_Dxdz_Spatial,this.Dydx_Dydz_Dxdx_Dzdz_Spatial)}record(i,o,f){const g=o.beginComputePass({label:"FFT Wave Fourier Amplitude Realization",timestampWrites:f!==void 0?{querySet:f.querySet,beginningOfPassWriteIndex:f.beginWriteIndex}:void 0});g.setPipeline(this.realizedFourierAmplitudePipeline),g.setBindGroup(0,this.realizedFourierAmplitudeGroup0),g.setBindGroup(1,this.realizedFourierAmplitudeGroup1);const w={width:this.packed_Dy_plus_iDxdz_Amplitude.width,height:this.packed_Dy_plus_iDxdz_Amplitude.height,depth:1};g.dispatchWorkgroups(w.width/16,w.height/16,w.depth/1),g.end(),this.dfftResources.recordPerform(i,o,this.packed_Dy_plus_iDxdz_Amplitude,this.Dy_Dxdz_Spatial,!0,void 0),this.dfftResources.recordPerform(i,o,this.packed_Dx_plus_iDz_Amplitude,this.Dx_Dz_Spatial,!0,void 0),this.dfftResources.recordPerform(i,o,this.packed_Dydx_plus_iDydz_Amplitude,this.Dydx_Dydz_Spatial,!0,void 0),this.dfftResources.recordPerform(i,o,this.packed_Dxdx_plus_iDzdz_Amplitude,this.Dxdx_Dzdz_Spatial,!0,void 0);const S=o.beginComputePass({label:"FFT Wave Fill Displacement",timestampWrites:f!==void 0?{querySet:f.querySet,endOfPassWriteIndex:f.endWriteIndex}:void 0});S.setPipeline(this.fillSpatialTexturesKernel),S.setBindGroup(0,this.fillSpatialTexturesGroup0),S.dispatchWorkgroups(this.Dx_Dy_Dz_Dxdz_Spatial.width/16,this.Dx_Dy_Dz_Dxdz_Spatial.height/16,1),S.end(),this.mipMapGenerator.updateMipMaps(o,this.mipMapBindings_Dx_Dy_Dz_Dxdz_Spatial),this.mipMapGenerator.updateMipMaps(o,this.mipMapBindings_Dydx_Dydz_Dxdx_Dzdz_Spatial)}}const a_=`// Displace a grid of vertices representing the ocean surface, then rasterize into the gbuffer with a graphics pass

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
@group(1) @binding(1) var Dx_Dy_Dz_Dxdz_spatial: texture_2d<f32>;
@group(1) @binding(2) var Dydx_Dydz_Dxdx_Dzdz_spatial: texture_2d<f32>;
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

    return output;
}

fn sampleMap(map: texture_2d<f32>, sampler: sampler, patch_uv: vec2<f32>, gerstner: bool, lod: f32) -> WaveDisplacementResult
{
	let delta = 0.5 / vec2<f32>(textureDimensions(Dx_Dy_Dz_Dxdz_spatial));

    var output: WaveDisplacementResult;

	let Dx_Dy_Dz_Dxdz = textureSampleLevel(Dx_Dy_Dz_Dxdz_spatial, displacement_map_sampler, patch_uv, f32(lod));

	output.displacement = Dx_Dy_Dz_Dxdz.xyz;

	if(!gerstner)
	{
		output.displacement.x = 0.0;
		output.displacement.z = 0.0;
	}

	let Dydx_Dydz_Dxdx_Dzdz = textureSampleLevel(Dydx_Dydz_Dxdx_Dzdz_spatial, displacement_map_sampler, patch_uv, f32(lod));

	let Dydx = Dydx_Dydz_Dxdx_Dzdz.x;
	let Dydz = Dydx_Dydz_Dxdx_Dzdz.y;

	let Dxdz = Dx_Dy_Dz_Dxdz.w * f32(gerstner);
	let Dzdx = Dxdz;

	var Dxdx = Dydx_Dydz_Dxdx_Dzdz.z * f32(gerstner);
	var Dzdz = Dydx_Dydz_Dxdx_Dzdz.w * f32(gerstner);

	output.tangent = vec3<f32>(Dxdx, Dydx, Dzdx);
	output.bitangent = vec3<f32>(Dxdz, Dydz, Dzdz);

	return output;
}

struct DisplacementResult
{
	world_position: vec3<f32>,
	world_normal: vec3<f32>,
}

fn computeDisplacement(in_world_position: vec3<f32>, time: f32, lod: f32, max_lod: f32) -> DisplacementResult
{
	var displacement = vec3<f32>(0.0);
    var tangent = vec3<f32>(1.0, 0.0, 0.0);
    var bitangent = vec3<f32>(0.0, 0.0, 1.0);

    let uv = (in_world_position.xz + vec2<f32>(0.5,0.5)) / (2.0 * u_settings.patch_world_half_extent);

	if(u_settings.b_displacement_map == 1u)
	{
		let gerstner = u_settings.b_gerstner == 1u;
		let result: WaveDisplacementResult = sampleMap(Dx_Dy_Dz_Dxdz_spatial, displacement_map_sampler, uv, gerstner, lod);

		displacement += result.displacement;
		tangent += result.tangent;
		bitangent += result.bitangent;
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
    let direction_view_space = camera.inv_proj * vec4(ndc_space_coord, near_plane_depth, 1.0);
    let direction_world = normalize((camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

	let ocean_origin = vec3<f32>(0.0, WAVE_NEUTRAL_PLANE, 0.0);
	let ocean_normal = vec3<f32>(0.0,1.0,0.0);
	let ocean_plane_hit = rayPlaneIntersection(camera.position.xyz, direction_world, ocean_origin, ocean_normal);
	// We assume the camera is nice, and that our manipulation of uv above guarantees a hit
	// assert(ocean_plane_hit.hit)
	var t = mix(1000.0, ocean_plane_hit.t, f32(ocean_plane_hit.hit));

	var in_world_position = camera.position.xyz + t * direction_world;
	in_world_position.y = WAVE_NEUTRAL_PLANE;

	const max_lod = 9.0;
	const lod_scale_meters = 2000.0;
	let lod = max_lod * atan(t / lod_scale_meters) / (0.5 * PI);
	let displacement_result = computeDisplacement(in_world_position, u_global.time.time_seconds, lod, max_lod);

	let world_position = displacement_result.world_position;

    output.position = u_global.camera.proj_view * vec4<f32>(world_position, 1.0);
	// Unclipped depth didn't work (and requires a feature) so this is a workaround
	output.position.z /= 1.001;
	output.world_normal = displacement_result.world_normal;
	output.color = vec3<f32>(WATER_COLOR);

	// Test screen-space density of vertices
	// output.color = vec3<f32>(step(fract(50 * ndc_space_coord), vec2<f32>(0.1)),0.0);
 	// output.color = vec3<f32>(step(fract(1.0 * world_position.x), 0.05),0.0,0.0);

    output.camera_distance = distance(u_global.camera.position.xyz, world_position);

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
`;class s_ extends Ka{constructor(o){super(o,3,"Wave Surface Displacement Patch World Half Extent UBO");V(this,"data",{patch_world_half_extent:50,b_gerstner:!0,b_fft:!0})}packed(){const o=new ArrayBuffer(this.buffer.size),f=new DataView(o);return f.setFloat32(0,this.data.patch_world_half_extent,!0),f.setUint32(4,this.data.b_gerstner?1:0,!0),f.setUint32(8,this.data.b_fft?1:0,!0),o}}class o_{constructor(i,o,f,g,w,S){V(this,"group0");V(this,"group1");V(this,"settingsUBO");V(this,"vertexDimension");V(this,"lodCount");V(this,"baseIndexCount");V(this,"mipLevelCount");V(this,"indices");V(this,"oceanSurfaceRasterizationPipeline");this.vertexDimension=3e3;const D=4,G=3*(2*2999*2999);this.baseIndexCount=G;const N=10;this.lodCount=N,this.indices=i.createBuffer({size:G*D,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX,label:"Wave Surface Displacement Indices"});const F=new Uint32Array(G);let J=0;for(let je=0;je<2999;je++)for(let De=0;De<2999;De++){const Pe=De+je*3e3,xe=Pe+1,Ye=Pe+3e3,He=Ye+1,Ve=new Uint32Array([Pe,Ye,xe,xe,Ye,He]);F.set(Ve,J),J+=Ve.length}i.queue.writeBuffer(this.indices,0,F);const j=12,ee=4,te=4*ee,X=i.createBuffer({size:j*te,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM,label:"Wave Surface Displacement Waves"}),Z=9.8,ue=60,he=ue*ue*Z/(2*Math.PI),Ue=new Array({direction:rn.create(.4,2),amplitude:.25,wavelength:he/(12*12)},{direction:rn.create(.6,2),amplitude:.3,wavelength:he/(14*14)},{direction:rn.create(.8,2),amplitude:.35,wavelength:he/(12*12)},{direction:rn.create(1,2),amplitude:.4,wavelength:he/(16*16)},{direction:rn.create(1.2,2),amplitude:.45,wavelength:he/(12*12)},{direction:rn.create(1.4,2),amplitude:.4,wavelength:he/(14*14)},{direction:rn.create(1.6,2),amplitude:.35,wavelength:he/(12*12)},{direction:rn.create(1.8,2),amplitude:.3,wavelength:he/(16*16)},{direction:rn.create(.8,1.5),amplitude:.02,wavelength:he/(30*30)},{direction:rn.create(1.1,1.5),amplitude:.02,wavelength:he/(30*30)},{direction:rn.create(1.2,1.5),amplitude:.02,wavelength:he/(30*30)},{direction:rn.create(1.3,1.5),amplitude:.02,wavelength:he/(30*30)}),ke=new Float32Array(j*ee);let Ce=0;Ue.forEach(je=>{ke.set(je.direction,Ce),ke[Ce+2]=je.amplitude,ke[Ce+3]=je.wavelength,Ce+=4}),i.queue.writeBuffer(X,0,ke),this.settingsUBO=new s_(i);const We=i.createBindGroupLayout({label:"Wave Surface Displacement Group 2 Compute (Displacement Map)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,sampler:{type:"filtering"}},{binding:1,visibility:GPUShaderStage.VERTEX,texture:{sampleType:"float"}},{binding:2,visibility:GPUShaderStage.VERTEX,texture:{sampleType:"float"}},{binding:3,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.group1=i.createBindGroup({label:"Wave Surface Displacement Group 2 Compute (Displacement Map)",layout:We,entries:[{binding:0,resource:i.createSampler({label:"Wave Surface Displacement Group 2 Sampler",minFilter:"linear",magFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"})},{binding:1,resource:S.Dx_Dy_Dz_Dxdz_SpatialAllMips},{binding:2,resource:S.Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips},{binding:3,resource:{buffer:X}}]}),this.mipLevelCount=S.mipLevelCount;const Ne=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}],label:"Wave Surface Displacement Group 0"});this.group0=i.createBindGroup({layout:Ne,entries:[{binding:0,resource:{buffer:this.settingsUBO.buffer}},{binding:1,resource:{buffer:o.buffer}}],label:"Wave Surface Displacement Group 0"});const Oe=i.createShaderModule({code:a_,label:"Wave Surface Displacement"});this.oceanSurfaceRasterizationPipeline=i.createRenderPipeline({layout:i.createPipelineLayout({bindGroupLayouts:[Ne,We]}),vertex:{module:Oe,entryPoint:"screenSpaceWarped"},fragment:{module:Oe,entryPoint:"rasterizationFragment",targets:[{format:f},{format:g}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},depthStencil:{format:w,depthWriteEnabled:!0,depthCompare:"less"},label:"Wave Surface Displacement Surface Rasterization"})}record(i,o,f,g,w){this.settingsUBO.data.patch_world_half_extent=g.fft?25:300,this.settingsUBO.data.b_gerstner=g.gerstner,this.settingsUBO.data.b_fft=g.fft,this.settingsUBO.writeToGPU(i.queue);const S=o.beginRenderPass({label:"Wave Surface Rasterization",colorAttachments:[{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:w.colorWithDepthInAlpha},{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:w.normal}],depthStencilAttachment:{view:w.depth,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"},timestampWrites:f!==void 0?{querySet:f.querySet,beginningOfPassWriteIndex:f.beginWriteIndex,endOfPassWriteIndex:f.endWriteIndex}:void 0});S.setPipeline(this.oceanSurfaceRasterizationPipeline),S.setBindGroup(0,this.group0),S.setBindGroup(1,this.group1),S.setIndexBuffer(this.indices,"uint32"),S.drawIndexed(this.baseIndexCount,1),S.end()}}const l_=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
    subscattering_albedo: vec3<f32>,
    normal_reflectance: vec3<f32>,
//    occlusion: f32,
    specular_power: f32,
    metallic: f32,
};

fn convertPBRProperties(color: vec3<f32>, normal: vec3<f32>) -> PBRTexel
{
    let metallic = 1.0;

	let specular_power = 160.0;
    let roughness = 0.05;

    let WATER_DEEP_COLOR = 0.2 * vec3<f32>(16.0 / 255.0, 97.0 / 255.0, 171.0 / 255.0);

    let dielectric_reflectance = vec3<f32>(0.04);
    let metallic_reflectance = vec3<f32>(0.5) * color / max3(color);

    let normal_reflectance = mix(dielectric_reflectance, metallic_reflectance, metallic);

    var texel = PBRTexel();
    texel.normal = normal;
    texel.subscattering_albedo = WATER_DEEP_COLOR;
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
        luminance_transfer = sampleGeometryLuminance(&atmosphere, &light, material, origin, direction_world, depth, true);
    }

    let luminance = light.strength * light.color * luminance_transfer;

    let output = vec4<f32>(tonemapACES(luminance),1.0);

    textureStore(output_color, texel_coord, output);
}
`,md="rgba16float";class u_{constructor(i,o,f,g,w,S,A){V(this,"group0Layout");V(this,"group1Layout");V(this,"lutSampler");V(this,"group0");V(this,"group1");V(this,"outputColor");V(this,"outputColorView");V(this,"pipeline");this.group0Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:md}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:S?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:S?"float":"unfilterable-float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:S?"float":"unfilterable-float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:S?"float":"unfilterable-float",viewDimension:"2d"}}],label:"Atmosphere Camera Group 0"}),this.group1Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Atmosphere Camera Group 1"}),this.outputColor=i.createTexture({format:md,size:{width:1,height:1},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Atmosphere Camera Output Color"}),this.outputColorView=this.outputColor.createView(),this.lutSampler=i.createSampler({label:"Atmosphere Camera LUT Sampler",magFilter:S?"linear":"nearest",minFilter:S?"linear":"nearest"}),this.group0=i.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:this.outputColorView},{binding:1,resource:this.lutSampler},{binding:2,resource:f},{binding:3,resource:g},{binding:4,resource:w}],label:"Atmosphere Camera Group 0"}),this.group1=i.createBindGroup({layout:this.group1Layout,entries:[{binding:0,resource:{buffer:A.buffer}}],label:"Atmosphere Camera Group 1"});const D=i.createShaderModule({code:l_,label:"Atmosphere Camera"});this.pipeline=i.createComputePipeline({compute:{module:D,entryPoint:"renderCompositedAtmosphere"},layout:i.createPipelineLayout({bindGroupLayouts:[this.group0Layout,this.group1Layout,o]}),label:"Atmosphere Camera"})}}const c_=`// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

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
`;class Id{constructor(){V(this,"color_gain",mr.create(1,1,1,1));V(this,"vertex_scale",mr.create(1,1,1,1));V(this,"padding0",It.create());V(this,"mip_level_u32",0)}}class d_ extends Ka{constructor(o){super(o,12,"Fullscreen Quad UBO");V(this,"data",new Id)}packed(){const o=new ArrayBuffer(this.buffer.size),f=new DataView(o);return new Float32Array(o).set(this.data.color_gain,0/4),new Float32Array(o).set(this.data.vertex_scale,16/4),f.setUint32(44,this.data.mip_level_u32,!0),o}}class f_{constructor(i,o){V(this,"group0Layout");V(this,"group0ByOutputTexture");V(this,"group0Sampler");V(this,"ubo");V(this,"fullscreenQuadIndexBuffer");V(this,"group1");V(this,"pipeline");const f=new Uint32Array([0,1,2,0,2,3]);this.fullscreenQuadIndexBuffer=i.createBuffer({size:f.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),i.queue.writeBuffer(this.fullscreenQuadIndexBuffer,0,f,0,f.length),this.group0Layout=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"non-filtering"}}],label:"Fullscreen Quad Group 0"}),this.group0ByOutputTexture=new Map,this.group0Sampler=i.createSampler({magFilter:"nearest",minFilter:"nearest"}),this.ubo=new d_(i);const g=i.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}}],label:"Fullscreen Quad Group 1"});this.group1=i.createBindGroup({layout:g,entries:[{binding:0,resource:{buffer:this.ubo.buffer}}]});const w=i.createShaderModule({code:c_,label:"Fullscreen Quad"});this.pipeline=i.createRenderPipeline({vertex:{module:w,entryPoint:"vertex_main"},fragment:{module:w,entryPoint:"fragment_main",targets:[{format:o}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:i.createPipelineLayout({bindGroupLayouts:[this.group0Layout,g]}),label:"Fullscreen Quad"})}setView(i,o,f){this.group0ByOutputTexture.set(o,i.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:f},{binding:1,resource:this.group0Sampler}],label:`Fullscreen Quad Group 0 Texture '${f.label}'`}))}recordPresent(i,o,f,g,w,S){const A={r:0,g:0,b:0,a:1},D=this.group0ByOutputTexture.get(g);if(D===void 0){console.warn("FullscreenQuadPass: No texture to output.");return}const b=o.beginRenderPass({colorAttachments:[{clearValue:A,loadOp:"clear",storeOp:"store",view:f}],timestampWrites:S!==void 0?{querySet:S.querySet,beginningOfPassWriteIndex:S.beginWriteIndex,endOfPassWriteIndex:S.endWriteIndex}:void 0,label:"Fullscreen Pass"});b.setPipeline(this.pipeline),b.setIndexBuffer(this.fullscreenQuadIndexBuffer,"uint32",0,this.fullscreenQuadIndexBuffer.size),b.setBindGroup(0,D),this.ubo.data=w,this.ubo.writeToGPU(i.queue),b.setBindGroup(1,this.group1),b.drawIndexed(6,1,0,0,0),b.end()}}const Bo={width:2048,height:1024},Wo={width:1024,height:1024},Vo={width:1024,height:512};class qo{constructor(){V(this,"flip",!1);V(this,"colorGain",{r:1,g:1,b:1});V(this,"mipLevel",0)}}const p_=[{id:Ae.Scene},{id:Ae.TransmittanceLUT,flip:!0},{id:Ae.MultiscatterLUT,flip:!0},{id:Ae.SkyviewLUT,colorGain:{r:8,g:8,b:8}},{id:Ae.GBufferColor},{id:Ae.GBufferNormal},{id:Ae.FFTWaveSpectrumGaussianNoise},{id:Ae.FFTWaveFourierAmplitude,colorGain:{r:100,g:100,b:100}},{id:Ae.FFTWaveDy_plus_iDxdz_Amplitude,colorGain:{r:100,g:100,b:100}},{id:Ae.FFTWaveDx_plus_iDz_Amplitude,colorGain:{r:100,g:100,b:100}},{id:Ae.FFTWaveDydx_plus_iDydz_Amplitude,colorGain:{r:100,g:100,b:100}},{id:Ae.FFTWaveDxdx_plus_iDzdz_Amplitude,colorGain:{r:100,g:100,b:100}},{id:Ae.FFTWaveDx_Dy_Dz_Dxdz_Spatial},{id:Ae.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial}],Ga=[.25,.3333,.5,.75,1,1.5,2,4];var Ha=(a=>(a[a.DrawToDraw=0]="DrawToDraw",a[a.SkyviewLUT=1]="SkyviewLUT",a[a.FFTWaves=2]="FFTWaves",a[a.OceanSurface=3]="OceanSurface",a[a.AtmosphereCamera=4]="AtmosphereCamera",a[a.FullscreenQuad=5]="FullscreenQuad",a))(Ha||{});class _d{constructor(i){V(this,"values");V(this,"sum",0);V(this,"average_",0);V(this,"count",0);V(this,"index",0);this.values=new Array(i).fill(0)}get average(){return this.average_}push(i){this.index>=this.values.length&&(this.index=0),this.index<this.count&&(this.sum-=this.values[this.index]),this.values[this.index]=i,this.sum+=i,this.count=Math.min(this.values.length,this.count+1),this.average_=this.sum/this.count,this.index+=1}}class h_{constructor(i,o,f){V(this,"transmittanceLUTPassResources");V(this,"multiscatterLUTPassResources");V(this,"skyviewLUTPassResources");V(this,"fftWaveSpectrumResources");V(this,"waveSurfaceDisplacementPassResources");V(this,"atmosphereCameraPassResources");V(this,"fullscreenQuadPassResources");V(this,"gbuffer");V(this,"scaledSize");V(this,"rawSize");V(this,"renderOutputs");V(this,"settings");V(this,"uiReadonly");V(this,"globalUBO");V(this,"device");V(this,"presentFormat");V(this,"quit",!1);V(this,"frametimeQuery");V(this,"frametimeAverages");V(this,"startTime");V(this,"dummyFrameCounter");V(this,"probationFrameCounter");V(this,"targetFPS",0);V(this,"float32Filterable");if(this.device=i,this.float32Filterable=i.features.has("float32-filterable"),this.presentFormat=o,this.startTime=f,this.settings={outputTexture:Ae.Scene,oceanWaveSettings:{gerstner:!0,fft:!0},renderOutputTransforms:new Map,currentRenderOutputTransform:new qo,orbit:{timeHours:5.6,timeSpeedupFactor:400,paused:!1,reversed:!1,inclinationRadians:Math.PI/2,sunsetAzimuthRadians:0},renderScale:1.5},this.uiReadonly={averageFPS:0,frametimeControllers:new Map},this.scaledSize={width:1,height:1},this.rawSize={width:1,height:1},p_.reduce((A,{id:D,...b})=>(A.set(D,{...new qo,...b}),A),this.settings.renderOutputTransforms),this.settings.renderOutputTransforms.has(this.settings.outputTexture)){const A=this.settings.renderOutputTransforms.get(this.settings.outputTexture);this.settings.currentRenderOutputTransform.flip=A.flip,this.settings.currentRenderOutputTransform.colorGain.r=A.colorGain.r,this.settings.currentRenderOutputTransform.colorGain.g=A.colorGain.g,this.settings.currentRenderOutputTransform.colorGain.b=A.colorGain.b}if(this.frametimeAverages=new Map,i.features.has("timestamp-query")){const D=2*Object.keys(Ha).map(b=>Number(b)).filter(isNaN).length;this.frametimeQuery={mappingLock:!1,querySet:i.createQuerySet({type:"timestamp",count:D}),writeBuffer:i.createBuffer({size:8*D,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE}),readBuffer:i.createBuffer({size:8*D,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})},Object.keys(Ha).map(b=>Number(b)).filter(b=>!isNaN(b)).forEach(b=>{const G=b;this.frametimeAverages.set(G,new _d(400)),Object.assign(this.uiReadonly,String(G),0)})}else console.warn("WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages."),this.frametimeAverages.set(0,new _d(400));this.dummyFrameCounter=10,this.probationFrameCounter=100,this.globalUBO=new Nm(this.device),this.globalUBO.writeToGPU(this.device.queue),this.gbuffer=new od(i,{width:1,height:1}),this.transmittanceLUTPassResources=new qm(this.device,Bo,this.globalUBO),this.multiscatterLUTPassResources=new $m(this.device,Wo,this.transmittanceLUTPassResources.view,this.float32Filterable,this.globalUBO),this.skyviewLUTPassResources=new Qm(this.device,Vo,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.float32Filterable,this.globalUBO),this.fftWaveSpectrumResources=new i_(this.device,this.globalUBO);const g=this.fftWaveSpectrumResources.views();this.waveSurfaceDisplacementPassResources=new o_(this.device,this.globalUBO,this.gbuffer.colorWithDepthInAlpha.format,this.gbuffer.normal.format,this.gbuffer.depth.format,this.fftWaveSpectrumResources.displacementMaps()),this.atmosphereCameraPassResources=new u_(this.device,this.gbuffer.readGroupLayout,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.skyviewLUTPassResources.view,this.float32Filterable,this.globalUBO),this.fullscreenQuadPassResources=new f_(this.device,this.presentFormat),this.renderOutputs=new Map([[Ae.Scene,new At(this.atmosphereCameraPassResources.outputColor)],[Ae.TransmittanceLUT,new At(this.transmittanceLUTPassResources.texture)],[Ae.MultiscatterLUT,new At(this.multiscatterLUTPassResources.texture)],[Ae.SkyviewLUT,new At(this.skyviewLUTPassResources.texture)],[Ae.GBufferColor,new At(this.gbuffer.colorWithDepthInAlpha)],[Ae.GBufferNormal,new At(this.gbuffer.normal)],[Ae.FFTWaveSpectrumGaussianNoise,g.gaussianNoise],[Ae.FFTWaveFourierAmplitude,g.fourierAmplitude],[Ae.FFTWaveDy_plus_iDxdz_Amplitude,g.Dy_Amplitude],[Ae.FFTWaveDx_plus_iDz_Amplitude,g.Dx_plus_iDz_Amplitude],[Ae.FFTWaveDydx_plus_iDydz_Amplitude,g.packed_Dydx_plus_iDydz_Amplitude],[Ae.FFTWaveDxdx_plus_iDzdz_Amplitude,g.packed_Dxdx_plus_iDzdz_Amplitude],[Ae.FFTWaveDx_Dy_Dz_Dxdz_Spatial,g.Dx_Dy_Dz_Dxdz_Spatial],[Ae.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial,g.Dydx_Dydz_Dxdx_Dzdz_Spatial]]);for(const[A,D]of this.renderOutputs)this.fullscreenQuadPassResources.setView(i,A,D.view);const w=i.createCommandEncoder();let S=w.beginComputePass();S.setPipeline(this.transmittanceLUTPassResources.pipeline),S.setBindGroup(0,this.transmittanceLUTPassResources.group0),S.setBindGroup(1,this.transmittanceLUTPassResources.group1),S.dispatchWorkgroups(Math.ceil(Bo.width/16),Math.ceil(Bo.height/16)),S.end(),S=w.beginComputePass(),S.setPipeline(this.multiscatterLUTPassResources.pipeline),S.setBindGroup(0,this.multiscatterLUTPassResources.group0),S.setBindGroup(1,this.multiscatterLUTPassResources.group1),S.dispatchWorkgroups(Math.ceil(Wo.width/16),Math.ceil(Wo.height/16)),S.end(),i.queue.submit([w.finish()])}setupUI(i){const o=i.add(this.settings,"outputTexture",{Scene:Ae.Scene,"Transmittance LUT":Ae.TransmittanceLUT,"Multiscatter LUT":Ae.MultiscatterLUT,"Skyview LUT":Ae.SkyviewLUT,"GBuffer Color":Ae.GBufferColor,"GBuffer Normal":Ae.GBufferNormal,"FFT Wave Gaussian Noise":Ae.FFTWaveSpectrumGaussianNoise,"FFT Wave Initial Amplitude":Ae.FFTWaveFourierAmplitude,"FFT Wave Frequency Domain (Dy + i*Dxdz)":Ae.FFTWaveDy_plus_iDxdz_Amplitude,"FFT Wave Frequency Domain (Dx + i*Dz)":Ae.FFTWaveDx_plus_iDz_Amplitude,"FFT Wave Frequency Domain (Dydx + i*Dydz)":Ae.FFTWaveDydx_plus_iDydz_Amplitude,"FFT Wave Frequency Domain (Dxdx + i*Dzdz)":Ae.FFTWaveDxdx_plus_iDzdz_Amplitude,"FFT Wave Spatial Domain (Dx, Dy, Dz, Dxdz)":Ae.FFTWaveDx_Dy_Dz_Dxdz_Spatial,"FFT Wave Spatial Domain (Dydx, Dydz, Dxdx, Dzdx)":Ae.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial}).name("Render Output").listen();i.add(this.settings,"renderScale",Ga).name("Render Resolution Scale").decimals(1).onFinishChange(G=>{this.handleResize(this.rawSize.width,this.rawSize.height)}).listen(),i.add(this.uiReadonly,"averageFPS").decimals(1).disable().name("Average FPS").listen(),i.add(this.settings.oceanWaveSettings,"gerstner").name("Gerstner Waves"),i.add(this.settings.oceanWaveSettings,"fft").name("FFT Accelerated Waves");const f=i.addFolder("Sun Parameters").open();f.add(this.settings.orbit,"timeHours").min(0).max(24).name("Time in Hours").listen(),f.add(this.settings.orbit,"timeSpeedupFactor").min(1).max(5e4).step(1).name("Time Multiplier"),f.add(this.settings.orbit,"paused").name("Pause Sun"),f.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?18+.5:6-.5}},"fn").name("Skip to Sunrise"),f.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?6+.5:18-.5}},"fn").name("Skip to Sunset"),f.add(this.settings.orbit,"reversed").name("Reverse Sun"),f.add(this.settings.orbit,"sunsetAzimuthRadians").name("Sun Azimuth").min(0).max(2*Math.PI),f.add(this.settings.orbit,"inclinationRadians").name("Sun Inclination").min(0).max(Math.PI);const g=i.addFolder("Output Transform").close();g.add(this.settings.currentRenderOutputTransform,"flip").name("Flip Image").listen();const w=g.add(this.settings.currentRenderOutputTransform,"mipLevel").min(0).max(0).step(1).name("Mip Level").listen();g.add({gain:0},"gain").name("RGB").min(0).max(100).onChange(G=>{this.settings.currentRenderOutputTransform.colorGain.r=G,this.settings.currentRenderOutputTransform.colorGain.g=G,this.settings.currentRenderOutputTransform.colorGain.b=G});const S=g.add(this.settings.currentRenderOutputTransform.colorGain,"r").name("R").min(0).max(100).listen(),A=g.add(this.settings.currentRenderOutputTransform.colorGain,"g").name("G").min(0).max(100).listen(),D=g.add(this.settings.currentRenderOutputTransform.colorGain,"b").name("B").min(0).max(100).listen();o.onChange(G=>{const N=o._listenPrevValue;this.settings.renderOutputTransforms.set(N,structuredClone(this.settings.currentRenderOutputTransform)),Object.assign(this.settings.currentRenderOutputTransform,structuredClone(this.settings.renderOutputTransforms.get(G)??new qo));const F=this.renderOutputs.get(G);w.max((F==null?void 0:F.mipLevelCount)??0),w.updateDisplay(),S.object=this.settings.currentRenderOutputTransform.colorGain,A.object=this.settings.currentRenderOutputTransform.colorGain,D.object=this.settings.currentRenderOutputTransform.colorGain});const b=i.addFolder("Performance").close();this.frametimeAverages.forEach((G,N)=>{this.uiReadonly.frametimeControllers.set(N,b.add({value:0},"value").name(`${Ha[N]} (ms)`).decimals(6).disable())})}updateOrbit(i){const o=this.settings.orbit;this.settings.orbit.paused||(o.timeHours+=(o.reversed?-1:1)*o.timeSpeedupFactor*i/36e5,o.timeHours=o.timeHours-Math.floor(o.timeHours/24)*24);const f=2*Math.PI/24,g=(12-o.timeHours)*f,w=It.create(-Math.sin(o.sunsetAzimuthRadians),0,Math.cos(o.sunsetAzimuthRadians)),S=It.create(Math.cos(o.sunsetAzimuthRadians)*Math.cos(o.inclinationRadians),Math.sin(o.inclinationRadians),Math.sin(o.sunsetAzimuthRadians)*Math.cos(o.inclinationRadians)),A=It.add(It.scale(w,Math.sin(g)),It.scale(S,Math.cos(g)));It.scale(A,-1,this.globalUBO.data.light.forward)}updateFPSValues(i){var o,f,g,w;i>.01&&((o=this.frametimeAverages.get(0))==null||o.push(i),this.uiReadonly.averageFPS=1e3/(((f=this.frametimeAverages.get(0))==null?void 0:f.average)??1e3),(w=this.uiReadonly.frametimeControllers.get(0))==null||w.setValue(((g=this.frametimeAverages.get(0))==null?void 0:g.average)??-1))}updateCamera(i){const o=60*Math.PI/180,w=Yt.perspective(o,i,.1,1e3),S=[0,10,-20],A=Yt.lookAt(S,[0,0,400],[0,1,0]);Object.assign(this.globalUBO.data.camera,{invProj:Yt.inverse(w),invView:Yt.inverse(A),projView:Yt.mul(w,A),position:mr.create(S[0],S[1],S[2],1)})}updateTime(i){const o=this.globalUBO.data.time;o.timeSeconds+=i/1e3;const w=this.settings.oceanWaveSettings.fft?100:60;o.timeSeconds-=Math.floor(o.timeSeconds/w)*w}draw(i,o,f,g){if(this.dummyFrameCounter>0){this.dummyFrameCounter-=1;return}const w=i.createView();if(this.updateFPSValues(g),this.probationFrameCounter>49){this.probationFrameCounter-=1,this.probationFrameCounter<50&&(console.log(`Average FPS without load is ${this.uiReadonly.averageFPS}`),this.targetFPS=this.uiReadonly.averageFPS);return}if(this.probationFrameCounter>0&&(this.probationFrameCounter-=1,this.probationFrameCounter<1)){console.log(`Average FPS with load is ${this.uiReadonly.averageFPS}`);const N=this.uiReadonly.averageFPS/this.targetFPS;this.settings.renderScale=Ga[0],Ga.forEach(F=>{Math.abs(F-N)<Math.abs(this.settings.renderScale-N)&&(this.settings.renderScale=F)}),this.handleResize(this.rawSize.width,this.rawSize.height)}this.updateCamera(o),this.updateTime(g),this.updateOrbit(g),this.globalUBO.writeToGPU(this.device.queue);const S=this.device.createCommandEncoder({label:"Main"}),A=new Map;let D=0;A.set(2,D),this.fftWaveSpectrumResources.record(this.device,S,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:D++,endWriteIndex:D++}:void 0),A.set(3,D),this.waveSurfaceDisplacementPassResources.record(this.device,S,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:D++,endWriteIndex:D++}:void 0,{gerstner:this.settings.oceanWaveSettings.gerstner,fft:this.settings.oceanWaveSettings.fft},{colorWithDepthInAlpha:this.gbuffer.colorWithDepthInAlphaView,normal:this.gbuffer.normalView,depth:this.gbuffer.depthView}),A.set(1,D);const b=S.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:D++,endOfPassWriteIndex:D++}:void 0,label:"Skyview LUT"});b.setPipeline(this.skyviewLUTPassResources.pipeline),b.setBindGroup(0,this.skyviewLUTPassResources.group0),b.setBindGroup(1,this.skyviewLUTPassResources.group1),b.dispatchWorkgroups(Math.ceil(Vo.width/16),Math.ceil(Vo.height/(16*1.9))),b.end(),A.set(4,D);const G=S.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:D++,endOfPassWriteIndex:D++}:void 0,label:"Atmosphere Camera"});G.setPipeline(this.atmosphereCameraPassResources.pipeline),G.setBindGroup(0,this.atmosphereCameraPassResources.group0),G.setBindGroup(1,this.atmosphereCameraPassResources.group1),G.setBindGroup(2,this.gbuffer.readGroup),G.dispatchWorkgroups(Math.ceil(this.atmosphereCameraPassResources.outputColor.width/16),Math.ceil(this.atmosphereCameraPassResources.outputColor.height/16)),G.end();{const N=this.settings.currentRenderOutputTransform,F=new Id;F.color_gain=mr.create(N.colorGain.r,N.colorGain.g,N.colorGain.b,1),F.vertex_scale=mr.create(1,N.flip?-1:1,1,1),F.mip_level_u32=Math.round(N.mipLevel),A.set(5,D),this.fullscreenQuadPassResources.recordPresent(this.device,S,w,this.settings.outputTexture,F,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:D++,endWriteIndex:D++}:void 0)}if(this.frametimeQuery!=null&&!this.frametimeQuery.mappingLock&&(S.resolveQuerySet(this.frametimeQuery.querySet,0,2*A.size,this.frametimeQuery.writeBuffer,0),S.copyBufferToBuffer(this.frametimeQuery.writeBuffer,0,this.frametimeQuery.readBuffer,0,this.frametimeQuery.readBuffer.size)),this.device.queue.submit([S.finish()]),this.frametimeQuery!==void 0&&!this.frametimeQuery.mappingLock){const N=this.frametimeQuery;this.frametimeQuery.mappingLock=!0,this.frametimeQuery.readBuffer.mapAsync(GPUMapMode.READ,0,this.frametimeQuery.readBuffer.size).then(()=>{const F=new BigInt64Array(N.readBuffer.getMappedRange(0,N.readBuffer.size));A.forEach((J,j)=>{var X,Z,ue;const te=Number(F.at(J+1)-F.at(J))/1e6;(X=this.frametimeAverages.get(j))==null||X.push(te),(ue=this.uiReadonly.frametimeControllers.get(j))==null||ue.setValue(((Z=this.frametimeAverages.get(j))==null?void 0:Z.average)??-1)}),N.readBuffer.unmap(),N.mappingLock=!1}).catch(F=>{console.error("Failed while retrieving frametime values from GPU:"),console.error(F)})}}handleResize(i,o){const f={width:i*this.settings.renderScale,height:o*this.settings.renderScale},g=8192,w=268435456,S=16,A=(D,b)=>D<g&&b<g&&D*b*S<w;A(f.width,f.height)?this.scaledSize=f:(Ga.slice().reverse().some(D=>{if(A(i*D,o*D))return this.settings.renderScale=D,!0}),console.warn(`During resize: Texture size (${f.width},${f.height}) exceeds WebGPU guaranteed limit (8192, 8192).
								Defaulting to highest possible render scale of ${this.settings.renderScale}`),this.scaledSize={width:i*this.settings.renderScale,height:o*this.settings.renderScale}),console.log(`Resizing to (${this.scaledSize.width},${this.scaledSize.height})`),this.rawSize={width:i,height:o},this.gbuffer=new od(this.device,this.scaledSize,this.gbuffer),this.renderOutputs.set(Ae.GBufferColor,new At(this.gbuffer.colorWithDepthInAlpha)),this.renderOutputs.set(Ae.GBufferNormal,new At(this.gbuffer.normal)),this.atmosphereCameraPassResources.outputColor=this.device.createTexture({format:this.atmosphereCameraPassResources.outputColor.format,size:this.scaledSize,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.atmosphereCameraPassResources.outputColorView=this.atmosphereCameraPassResources.outputColor.createView(),this.renderOutputs.set(Ae.Scene,new At(this.atmosphereCameraPassResources.outputColor)),this.atmosphereCameraPassResources.group0=this.device.createBindGroup({layout:this.atmosphereCameraPassResources.group0Layout,entries:[{binding:0,resource:this.atmosphereCameraPassResources.outputColorView},{binding:1,resource:this.atmosphereCameraPassResources.lutSampler},{binding:2,resource:this.transmittanceLUTPassResources.view},{binding:3,resource:this.multiscatterLUTPassResources.view},{binding:4,resource:this.skyviewLUTPassResources.view}],label:"Atmosphere Camera Group 0"}),this.renderOutputs.forEach((D,b)=>{this.fullscreenQuadPassResources.setView(this.device,b,D.view)})}}const m_=(a,i,o)=>new h_(a,i,o),__="hello-cube",Fd={name:"Hello Cube",requiredLimits:new Map,requiredFeatures:new Set,optionalFeatures:new Set(["depth-clip-control","depth32float-stencil8","texture-compression-bc","texture-compression-bc-sliced-3d","texture-compression-etc2","texture-compression-astc","texture-compression-astc-sliced-3d","timestamp-query","indirect-first-instance","shader-f16","rg11b10ufloat-renderable","bgra8unorm-storage","float32-filterable","float32-blendable","clip-distances","dual-source-blending"]),description:"Tests WebGPU functionality with a simple spinning cube.",create:Em},ja=new Map([[__,Fd],["sky-sea",{name:"Sky and Sea",description:"Real-time rendering of a dynamic sun over the open ocean, with various models for surface waves and raymarched atmospheric scattering.",requiredLimits:new Map([["maxStorageTexturesPerShaderStage",8]]),requiredFeatures:new Set,optionalFeatures:new Set(["timestamp-query","float32-filterable"]),create:m_}]]),g_=ce.jsx("a",{target:"_blank",rel:"noreferrer",href:"mailto:estelle.booher@gmail.com",children:"estelle.booher@gmail.com"}),v_=ce.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/EllarBooher",children:"https://github.com/EllarBooher"}),Ba=Y.memo(function({hyperlink:i,thumbnailAssets:o=[],thumbnailAltTexts:f,title:g="PLACEHOLDER TITLE",description:w="PLACEHOLDER DESCRIPTION"}){const S=ce.jsx("div",{className:"display-card-thumbnails",children:o.map((A,D)=>ce.jsx("div",{className:"display-card-thumbnail",children:ce.jsx("img",{className:"display-card-image",src:A.toString(),alt:f[D]??null})},A.toString()))});return ce.jsxs(tr,{className:"nav-card",to:i,children:[ce.jsx("h2",{children:g}),ce.jsx("p",{children:w}),S]})});function y_(){const a=[];ja.forEach((f,g)=>{a.push(ce.jsx(Ba,{hyperlink:`/webgpu-samples?sample=${g}`,externalLink:!1,thumbnailAssets:[],thumbnailAltTexts:[],title:f.name,description:f.description},g))});const i=[ce.jsx(Ba,{hyperlink:"https://github.com/EllarBooher/Syzygy",thumbnailAssets:[new URL("/assets/syzygy1-CItzHwJc.png",import.meta.url)],thumbnailAltTexts:["A computer rendered sun rises over chess pieces. Application interface elements appear to the left and bottom."],title:"Syzygy",description:`
                A sandbox renderer I started to study C++ and Vulkan.
                It aims to be a testbed of various features and techniques.
            `},"Syzygy"),ce.jsx(Ba,{hyperlink:"https://github.com/EllarBooher/VulkanTemplate/tree/SSAO",thumbnailAssets:[new URL("/assets/ssao1-8Qfbb4oF.png",import.meta.url)],thumbnailAltTexts:["A computer rendered building, with various decorations such as banners and pillars. Only the shadows are visible, with no color information."],title:"SSAO",description:`
                An implementation of Screen-Space Ambient Occlusion written in C++ with Vulkan.
            `},"SSAO")],o=[ce.jsx(Ba,{hyperlink:"https://ellarbooher.itch.io/snail-blazer",thumbnailAssets:[new URL("/assets/snailblazer1-Bl1793QZ.png",import.meta.url),new URL("/assets/snailblazer2-CU4gYciB.png",import.meta.url)],thumbnailAltTexts:["A smirking cartoon character with yellow hair faces off against a grimacing cartoon character with blue hair. In the middle is an arena filled with magma and colorful battle effects.","A crying cartoon character with yellow hair faces off against a scowling cartoon character with blue hair. In the middle is an arena filled with magma and colorful battle effects."],title:"Snail Blazer",description:`
                A short bullet-hell made for the Bullet Hell Jam 2023 on itch.io.
                The player primarily moves via grappling on enemy projectiles and the environment,
                instead of the conventional WASD-style of movement.
            `},"Snail Blazer")];return ce.jsxs(ce.Fragment,{children:[ce.jsxs("main",{className:"landing-main",children:[ce.jsx("h1",{className:"visuallyhidden",children:"Portfolio Landing Page"}),ce.jsx("p",{children:"Hello, my name is Estelle Booher. My passion is realtime rendering and engine infrastructure, and I am actively working on building a portfolio and career in computer graphics. This website is a landing spot where I will host links to various projects of mine."}),ce.jsxs("p",{children:["My github is at ",v_,", where I host the source code of my projects including this website."]}),ce.jsxs("p",{children:["To contact me, please email at ",g_,"."]}),ce.jsx("h2",{children:"In-Browser WebGPU Samples"}),ce.jsx("nav",{className:"display-grid","aria-label":"WebGPU Samples",children:a}),ce.jsx("h2",{children:"Offline Computer Graphics"}),ce.jsx("nav",{className:"display-grid","aria-label":"Offline Computer Graphics",children:i}),ce.jsx("h2",{children:"Video Games"}),ce.jsx("nav",{className:"display-grid","aria-label":"Video Games",children:o})]}),ce.jsx("footer",{style:{padding:"1em"},children:"All works present are copyrighted, unless provided with external attributions or license."})]})}async function w_(a,i,o){if(console.log("Starting WebGPU"),!("gpu"in navigator))return Promise.reject(new Error("WebGPU is not available in this browser.",{cause:new Error("navigator.gpu is null")}));const f=navigator.gpu.requestAdapter().then(w=>w?Promise.resolve(w):Promise.reject(new Error("Requested WebGPU Adapter is not available."))).catch(w=>Promise.reject(new Error("Unable to get WebGPU Adapter",{cause:w}))),g=f.then(w=>{const S=Array.from(a.values()).filter(N=>w.features.has(N));if(S.length!=a.size){const N=`Required features unavailable: ${Array.from(a.values()).filter(F=>!w.features.has(F)).map(F=>`'${F}'`).join(",")}`;return Promise.reject(new Error("Unable to get WebGPU Device",{cause:N}))}const A=S.concat(...Array.from(i.values()).filter(N=>w.features.has(N)));console.log(`Enabling features: '${A.join("', '")}'`);const D=new Map,b=new Array;for(const[N,F]of o.entries()){const J=w.limits[N];J>=F?D.set(N,F):b.push({name:N,requestedMinimum:F,supported:J})}if(D.size<o.size){const N=`Required limits unsatisfied: ${b.map(F=>`( name: '${F.name}' supported: '${F.supported}' requested: '${F.requestedMinimum}' )`).join(",")}`;return Promise.reject(new Error("Unable to get WebGPU Device",{cause:N}))}const G={};for(const[N,F]of D)G[N]=F;return w.requestDevice({requiredFeatures:A,requiredLimits:G}).catch(N=>Promise.reject(new Error("Unable to get WebGPU Device",{cause:N})))});return Promise.all([f,g]).then(w=>{const[S,A]=w;return{adapter:S,device:A}})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class xn{constructor(i,o,f,g,w="div"){this.parent=i,this.object=o,this.property=f,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(w),this.domElement.classList.add("controller"),this.domElement.classList.add(g),this.$name=document.createElement("div"),this.$name.classList.add("name"),xn.nextNameID=xn.nextNameID||0,this.$name.id=`lil-gui-name-${++xn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",S=>S.stopPropagation()),this.domElement.addEventListener("keyup",S=>S.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(f)}name(i){return this._name=i,this.$name.textContent=i,this}onChange(i){return this._onChange=i,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(i=!0){return this.disable(!i)}disable(i=!0){return i===this._disabled?this:(this._disabled=i,this.domElement.classList.toggle("disabled",i),this.$disable.toggleAttribute("disabled",i),this)}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(i){const o=this.parent.add(this.object,this.property,i);return o.name(this._name),this.destroy(),o}min(i){return this}max(i){return this}step(i){return this}decimals(i){return this}listen(i=!0){return this._listening=i,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const i=this.save();i!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=i}getValue(){return this.object[this.property]}setValue(i){return this.getValue()!==i&&(this.object[this.property]=i,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(i){return this.setValue(i),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class x_ extends xn{constructor(i,o,f){super(i,o,f,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Yo(a){let i,o;return(i=a.match(/(#|0x)?([a-f0-9]{6})/i))?o=i[2]:(i=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?o=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(o=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),o?"#"+o:!1}const S_={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:Yo,toHexString:Yo},zi={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},T_={isPrimitive:!1,match:a=>Array.isArray(a),fromHexString(a,i,o=1){const f=zi.fromHexString(a);i[0]=(f>>16&255)/255*o,i[1]=(f>>8&255)/255*o,i[2]=(f&255)/255*o},toHexString([a,i,o],f=1){f=255/f;const g=a*f<<16^i*f<<8^o*f<<0;return zi.toHexString(g)}},E_={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,i,o=1){const f=zi.fromHexString(a);i.r=(f>>16&255)/255*o,i.g=(f>>8&255)/255*o,i.b=(f&255)/255*o},toHexString({r:a,g:i,b:o},f=1){f=255/f;const g=a*f<<16^i*f<<8^o*f<<0;return zi.toHexString(g)}},D_=[S_,zi,T_,E_];function M_(a){return D_.find(i=>i.match(a))}class z_ extends xn{constructor(i,o,f,g){super(i,o,f,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=M_(this.initialValue),this._rgbScale=g,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const w=Yo(this.$text.value);w&&this._setValueFromHexString(w)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(i){if(this._format.isPrimitive){const o=this._format.fromHexString(i);this.setValue(o)}else this._format.fromHexString(i,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(i){return this._setValueFromHexString(i),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ho extends xn{constructor(i,o,f){super(i,o,f,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",g=>{g.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class b_ extends xn{constructor(i,o,f,g,w,S){super(i,o,f,"number"),this._initInput(),this.min(g),this.max(w);const A=S!==void 0;this.step(A?S:this._getImplicitStep(),A),this.updateDisplay()}decimals(i){return this._decimals=i,this.updateDisplay(),this}min(i){return this._min=i,this._onUpdateMinMax(),this}max(i){return this._max=i,this._onUpdateMinMax(),this}step(i,o=!0){return this._step=i,this._stepExplicit=o,this}updateDisplay(){const i=this.getValue();if(this._hasSlider){let o=(i-this._min)/(this._max-this._min);o=Math.max(0,Math.min(o,1)),this.$fill.style.width=o*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?i:i.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const o=()=>{let Z=parseFloat(this.$input.value);isNaN(Z)||(this._stepExplicit&&(Z=this._snap(Z)),this.setValue(this._clamp(Z)))},f=Z=>{const ue=parseFloat(this.$input.value);isNaN(ue)||(this._snapClampSetValue(ue+Z),this.$input.value=this.getValue())},g=Z=>{Z.key==="Enter"&&this.$input.blur(),Z.code==="ArrowUp"&&(Z.preventDefault(),f(this._step*this._arrowKeyMultiplier(Z))),Z.code==="ArrowDown"&&(Z.preventDefault(),f(this._step*this._arrowKeyMultiplier(Z)*-1))},w=Z=>{this._inputFocused&&(Z.preventDefault(),f(this._step*this._normalizeMouseWheel(Z)))};let S=!1,A,D,b,G,N;const F=5,J=Z=>{A=Z.clientX,D=b=Z.clientY,S=!0,G=this.getValue(),N=0,window.addEventListener("mousemove",j),window.addEventListener("mouseup",ee)},j=Z=>{if(S){const ue=Z.clientX-A,he=Z.clientY-D;Math.abs(he)>F?(Z.preventDefault(),this.$input.blur(),S=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(ue)>F&&ee()}if(!S){const ue=Z.clientY-b;N-=ue*this._step*this._arrowKeyMultiplier(Z),G+N>this._max?N=this._max-G:G+N<this._min&&(N=this._min-G),this._snapClampSetValue(G+N)}b=Z.clientY},ee=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",ee)},te=()=>{this._inputFocused=!0},X=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",o),this.$input.addEventListener("keydown",g),this.$input.addEventListener("wheel",w,{passive:!1}),this.$input.addEventListener("mousedown",J),this.$input.addEventListener("focus",te),this.$input.addEventListener("blur",X)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const i=(X,Z,ue,he,Ue)=>(X-Z)/(ue-Z)*(Ue-he)+he,o=X=>{const Z=this.$slider.getBoundingClientRect();let ue=i(X,Z.left,Z.right,this._min,this._max);this._snapClampSetValue(ue)},f=X=>{this._setDraggingStyle(!0),o(X.clientX),window.addEventListener("mousemove",g),window.addEventListener("mouseup",w)},g=X=>{o(X.clientX)},w=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",w)};let S=!1,A,D;const b=X=>{X.preventDefault(),this._setDraggingStyle(!0),o(X.touches[0].clientX),S=!1},G=X=>{X.touches.length>1||(this._hasScrollBar?(A=X.touches[0].clientX,D=X.touches[0].clientY,S=!0):b(X),window.addEventListener("touchmove",N,{passive:!1}),window.addEventListener("touchend",F))},N=X=>{if(S){const Z=X.touches[0].clientX-A,ue=X.touches[0].clientY-D;Math.abs(Z)>Math.abs(ue)?b(X):(window.removeEventListener("touchmove",N),window.removeEventListener("touchend",F))}else X.preventDefault(),o(X.touches[0].clientX)},F=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",N),window.removeEventListener("touchend",F)},J=this._callOnFinishChange.bind(this),j=400;let ee;const te=X=>{if(Math.abs(X.deltaX)<Math.abs(X.deltaY)&&this._hasScrollBar)return;X.preventDefault();const ue=this._normalizeMouseWheel(X)*this._step;this._snapClampSetValue(this.getValue()+ue),this.$input.value=this.getValue(),clearTimeout(ee),ee=setTimeout(J,j)};this.$slider.addEventListener("mousedown",f),this.$slider.addEventListener("touchstart",G,{passive:!1}),this.$slider.addEventListener("wheel",te,{passive:!1})}_setDraggingStyle(i,o="horizontal"){this.$slider&&this.$slider.classList.toggle("active",i),document.body.classList.toggle("lil-gui-dragging",i),document.body.classList.toggle(`lil-gui-${o}`,i)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(i){let{deltaX:o,deltaY:f}=i;return Math.floor(i.deltaY)!==i.deltaY&&i.wheelDelta&&(o=0,f=-i.wheelDelta/120,f*=this._stepExplicit?1:10),o+-f}_arrowKeyMultiplier(i){let o=this._stepExplicit?1:10;return i.shiftKey?o*=10:i.altKey&&(o/=10),o}_snap(i){let o=0;return this._hasMin?o=this._min:this._hasMax&&(o=this._max),i-=o,i=Math.round(i/this._step)*this._step,i+=o,i=parseFloat(i.toPrecision(15)),i}_clamp(i){return i<this._min&&(i=this._min),i>this._max&&(i=this._max),i}_snapClampSetValue(i){this.setValue(this._clamp(this._snap(i)))}get _hasScrollBar(){const i=this.parent.root.$children;return i.scrollHeight>i.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class A_ extends xn{constructor(i,o,f,g){super(i,o,f,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(g)}options(i){return this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this.$select.replaceChildren(),this._names.forEach(o=>{const f=document.createElement("option");f.textContent=o,this.$select.appendChild(f)}),this.updateDisplay(),this}updateDisplay(){const i=this.getValue(),o=this._values.indexOf(i);return this.$select.selectedIndex=o,this.$display.textContent=o===-1?i:this._names[o],this}}class P_ extends xn{constructor(i,o,f){super(i,o,f,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",g=>{g.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var R_=`.lil-gui {
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
}`;function L_(a){const i=document.createElement("style");i.innerHTML=a;const o=document.querySelector("head link[rel=stylesheet], head style");o?document.head.insertBefore(i,o):document.head.appendChild(i)}let gd=!1;class sl{constructor({parent:i,autoPlace:o=i===void 0,container:f,width:g,title:w="Controls",closeFolders:S=!1,injectStyles:A=!0,touchStyles:D=!0}={}){if(this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(w),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),D&&this.domElement.classList.add("allow-touch-styles"),!gd&&A&&(L_(R_),gd=!0),f?f.appendChild(this.domElement):o&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),g&&this.domElement.style.setProperty("--width",g+"px"),this._closeFolders=S}add(i,o,f,g,w){if(Object(f)===f)return new A_(this,i,o,f);const S=i[o];switch(typeof S){case"number":return new b_(this,i,o,f,g,w);case"boolean":return new x_(this,i,o);case"string":return new P_(this,i,o);case"function":return new Ho(this,i,o)}console.error(`gui.add failed
	property:`,o,`
	object:`,i,`
	value:`,S)}addColor(i,o,f=1){return new z_(this,i,o,f)}addFolder(i){const o=new sl({parent:this,title:i});return this.root._closeFolders&&o.close(),o}load(i,o=!0){return i.controllers&&this.controllers.forEach(f=>{f instanceof Ho||f._name in i.controllers&&f.load(i.controllers[f._name])}),o&&i.folders&&this.folders.forEach(f=>{f._title in i.folders&&f.load(i.folders[f._title])}),this}save(i=!0){const o={controllers:{},folders:{}};return this.controllers.forEach(f=>{if(!(f instanceof Ho)){if(f._name in o.controllers)throw new Error(`Cannot save GUI with duplicate property "${f._name}"`);o.controllers[f._name]=f.save()}}),i&&this.folders.forEach(f=>{if(f._title in o.folders)throw new Error(`Cannot save GUI with duplicate folder "${f._title}"`);o.folders[f._title]=f.save()}),o}open(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(i){this._closed!==i&&(this._closed=i,this._callOnOpenClose(this))}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const o=this.$children.clientHeight;this.$children.style.height=o+"px",this.domElement.classList.add("transition");const f=w=>{w.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",f))};this.$children.addEventListener("transitionend",f);const g=i?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!i),requestAnimationFrame(()=>{this.$children.style.height=g+"px"})}),this}title(i){return this._title=i,this.$title.textContent=i,this}reset(i=!0){return(i?this.controllersRecursive():this.controllers).forEach(f=>f.reset()),this}onChange(i){return this._onChange=i,this}_callOnChange(i){this.parent&&this.parent._callOnChange(i),this._onChange!==void 0&&this._onChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(i){this.parent&&this.parent._callOnFinishChange(i),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onOpenClose(i){return this._onOpenClose=i,this}_callOnOpenClose(i){this.parent&&this.parent._callOnOpenClose(i),this._onOpenClose!==void 0&&this._onOpenClose.call(this,i)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(i=>i.destroy())}controllersRecursive(){let i=Array.from(this.controllers);return this.folders.forEach(o=>{i=i.concat(o.controllersRecursive())}),i}foldersRecursive(){let i=Array.from(this.folders);return this.folders.forEach(o=>{i=i.concat(o.foldersRecursive())}),i}}const U_=function({app:i}){const o=Y.useRef(),f=Y.useRef(null),g=Y.useRef(null),w=Y.useRef(),S=Y.useRef(),A=Y.useCallback(()=>{var G;const b=f.current;if(b){const N=window.devicePixelRatio;b.width=b.offsetWidth*N,b.height=b.offsetHeight*N,(G=i.handleResize)==null||G.call(i,b.width,b.height)}},[i]);Y.useEffect(()=>(A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}),[A]);const D=Y.useCallback(b=>{var N;const G=(N=f.current)==null?void 0:N.getContext("webgpu");if(G){const F=b-(S.current?S.current:0);S.current=b;const J=G.getCurrentTexture();i.draw(J,f.current.width/f.current.height,b,F),i.quit||(o.current=requestAnimationFrame(D))}},[i]);return Y.useEffect(()=>{var G,N;const b=(G=f.current)==null?void 0:G.getContext("webgpu");if(w.current&&((N=w.current)==null||N.destroy()),i.setupUI&&(w.current=new sl({container:g.current}),i.setupUI(w.current)),!b){console.error("'webgpu' canvas context not found, cannot animate.");return}return b.configure({device:i.device,format:i.presentFormat}),o.current=requestAnimationFrame(D),()=>{o.current!==void 0&&cancelAnimationFrame(o.current)}},[D,i]),ce.jsxs("div",{className:"canvas-container",children:[ce.jsx("canvas",{className:"sample-canvas",ref:f}),ce.jsx("div",{className:"gui-pane",ref:g})]})},k_=function({sample:i}){const[o,f]=Y.useState(),g=Y.useRef(),w=Y.useRef(),[S,A]=Y.useState(!1),D=Y.useCallback(()=>{g.current&&(g.current.quit=!0)},[]),b=Y.useCallback((J,j)=>{g.current&&D(),console.log("Got WebGPU device, initializing sample app."),j.lost.then(te=>{console.log(`WebGPU device lost - ("${te.reason}"):
 ${te.message}`)},te=>{throw new Error("WebGPU device lost rejected",{cause:te})}),j.onuncapturederror=te=>{console.error(`WebGPU device uncaptured error: ${te.error.message}`),f([te.error.message]),D()};const ee=navigator.gpu.getPreferredCanvasFormat();g.current=i.create(j,ee,performance.now()),console.log("Finished initializing app.")},[i,D]);Y.useEffect(()=>{w.current||(A(!1),f(void 0),w.current=w_(i.requiredFeatures,i.optionalFeatures,i.requiredLimits).then(({adapter:J,device:j})=>b(J,j),J=>{var j,ee;console.error(J),f([J.message,((ee=(j=J.cause)==null?void 0:j.toString)==null?void 0:ee.call(j))??"Unknown Cause"]),g.current=void 0,A(!1)}).finally(()=>{w.current=void 0,A(!0)}))},[i,b]);const G=ce.jsxs(ce.Fragment,{children:[ce.jsx("p",{children:`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.`}),ce.jsx("ol",{className:"sample-errors",children:o==null?void 0:o.map(J=>ce.jsx("li",{children:J},J))})]}),N=ce.jsx("p",{children:"Loading..."}),F=ce.jsx("div",{className:"sample-text",children:o?G:N});return ce.jsx(ce.Fragment,{children:S&&g.current?ce.jsx(U_,{app:g.current}):F})},C_=Y.memo(function(){const[i,o]=Ud(),f=[],g=[];ja.forEach((D,b)=>{const G=`/webgpu-samples?sample=${b}`;f.push(ce.jsx("li",{children:ce.jsx(tr,{to:G,children:D.name},b)},b)),g.push(ce.jsxs(tr,{className:"nav-card",to:G,children:[ce.jsx("h2",{children:D.name}),ce.jsx("p",{children:D.description})]},b))});const w=i.get("sample"),S=w?ja.get(w):void 0;if(w&&!S&&(i.delete("sample"),o(i)),S==null)return ce.jsx("main",{className:"sample",children:ce.jsxs("div",{className:"sample-text",children:[ce.jsx("h1",{children:"WebGPU Samples"}),ce.jsx("nav",{"aria-label":"WebGPU Samples",className:"nav-card-container",children:g})]})});const A=ce.jsxs("nav",{"aria-label":"WebGPU Samples",className:"sample-sidebar",children:[ce.jsx("h2",{children:"Samples"}),ce.jsx("hr",{}),ce.jsx("ul",{children:f})]});return ce.jsxs("main",{className:"sample",children:[ce.jsx("h1",{className:"visuallyhidden",children:"WebGPU Animated Sample"}),A,ce.jsx(k_,{sample:S})]})}),vd=new Map([["","Estelle Booher"],["webgpu-samples","WebGPU Samples"]]),I_=Y.memo(function(){var S;const i=Tn(),[o,f]=Ud(),g=[ce.jsx(tr,{to:"/",children:vd.get("")},"root")];if(i.pathname!="/"){const A=i.pathname.substring(1).split("/");let D="/";g.push(...A.map((b,G)=>{const N=vd.get(b),F=G>0?"/":"";return D=D.concat(`${F}${b}`),ce.jsxs(Y.Fragment,{children:[" > ",ce.jsx(tr,{to:D,children:N||b})]},D)}))}const w=o.get("sample");return w&&i.pathname=="/webgpu-samples"&&g.push(ce.jsxs(Y.Fragment,{children:[" > ",ce.jsx(tr,{to:i.pathname+i.search,children:((S=ja.get(w))==null?void 0:S.name)??Fd.name})]},"sample-caboose")),ce.jsx("nav",{className:"main-nav","aria-label":"Main",children:g})});yd();const F_=document.getElementById("root");Fp.createRoot(F_).render(ce.jsx(Y.StrictMode,{children:ce.jsxs(Jh,{children:[!1,ce.jsx(I_,{}),ce.jsxs(bh,{children:[ce.jsx(Wa,{index:!0,element:ce.jsx(y_,{})}),ce.jsx(Wa,{path:"webgpu-samples",element:ce.jsx(C_,{})}),ce.jsx(Wa,{path:"*",element:ce.jsx(Mh,{to:"/",replace:!0})})]})]})}));
