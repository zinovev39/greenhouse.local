import{g as l,z as i,a as c}from"./isArrayLikeObject.59b68b05.js";import{b as p}from"./_getTag.2eb83be0.js";function f(n){return l(n)?i(n):p(n)}function y(n,t){for(var r=-1,e=t.length,s=n.length;++r<e;)n[s+r]=t[r];return n}function g(n,t){for(var r=-1,e=n==null?0:n.length,s=0,o=[];++r<e;){var u=n[r];t(u,r,n)&&(o[s++]=u)}return o}function m(){return[]}var _=Object.prototype,h=_.propertyIsEnumerable,a=Object.getOwnPropertySymbols,A=a?function(n){return n==null?[]:(n=Object(n),g(a(n),function(t){return h.call(n,t)}))}:m;const b=A;function v(n,t,r){var e=t(n);return c(n)?e:y(e,r(n))}function k(n){return v(n,f,b)}export{y as a,v as b,k as c,g as d,b as g,f as k,m as s};
