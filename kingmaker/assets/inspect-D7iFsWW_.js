(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const No="181",Vu=0,xc=1,Hu=2,Lh=1,Gu=2,Fn=3,fn=0,Xt=1,on=2,zn=0,Ui=1,gc=2,_c=3,vc=4,Wu=5,ui=100,Xu=101,$u=102,qu=103,ju=104,Ku=200,Yu=201,Zu=202,Ju=203,ka=204,za=205,Qu=206,ed=207,td=208,nd=209,id=210,sd=211,rd=212,ad=213,od=214,Ba=0,Va=1,Ha=2,ki=3,Ga=4,Wa=5,Xa=6,$a=7,Dh=0,cd=1,ld=2,Zn=0,hd=1,ud=2,dd=3,fd=4,pd=5,md=6,xd=7,yc="attached",gd="detached",Ih=300,zi=301,Bi=302,qa=303,ja=304,kr=306,Jn=1e3,yn=1001,Ar=1002,Vt=1003,Nh=1004,us=1005,Bt=1006,vr=1007,On=1008,En=1009,Uh=1010,Fh=1011,Ss=1012,Uo=1013,pi=1014,hn=1015,qi=1016,Fo=1017,Oo=1018,bs=1020,Oh=35902,kh=35899,zh=1021,Bh=1022,Yt=1023,Es=1026,Ts=1027,ko=1028,zo=1029,Bo=1030,Vo=1031,Ho=1033,yr=33776,Mr=33777,Sr=33778,br=33779,Ka=35840,Ya=35841,Za=35842,Ja=35843,Qa=36196,eo=37492,to=37496,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,co=37814,lo=37815,ho=37816,uo=37817,fo=37818,po=37819,mo=37820,xo=37821,go=36492,_o=36494,vo=36495,yo=36283,Mo=36284,So=36285,bo=36286,ws=2300,As=2301,$r=2302,Mc=2400,Sc=2401,bc=2402,_d=2500,vd=0,Vh=1,Eo=2,yd=3200,Md=3201,Hh=0,Sd=1,Kn="",pt="srgb",Ht="srgb-linear",Rr="linear",st="srgb",gi=7680,Ec=519,bd=512,Ed=513,Td=514,Gh=515,wd=516,Ad=517,Rd=518,Cd=519,To=35044,Tc="300 es",Mn=2e3,Cr=2001;function Wh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pd(){const s=Rs("canvas");return s.style.display="block",s}const wc={};function Pr(...s){const e="THREE."+s.shift();console.log(e,...s)}function ve(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Oe(...s){const e="THREE."+s.shift();console.error(e,...s)}function Cs(...s){const e=s.join(" ");e in wc||(wc[e]=!0,ve(...s))}function Ld(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ac=1234567;const ms=Math.PI/180,Vi=180/Math.PI;function dn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function ze(s,e,t){return Math.max(e,Math.min(t,s))}function Go(s,e){return(s%e+e)%e}function Dd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Id(s,e,t){return s!==e?(t-s)/(e-s):0}function xs(s,e,t){return(1-t)*s+t*e}function Nd(s,e,t,n){return xs(s,e,1-Math.exp(-t*n))}function Ud(s,e=1){return e-Math.abs(Go(s,e*2)-e)}function Fd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Od(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function kd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function zd(s,e){return s+Math.random()*(e-s)}function Bd(s){return s*(.5-Math.random())}function Vd(s){s!==void 0&&(Ac=s);let e=Ac+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hd(s){return s*ms}function Gd(s){return s*Vi}function Wd(s){return(s&s-1)===0&&s!==0}function Xd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $d(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*x,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*x,o*c);break;case"ZYZ":s.set(l*x,l*f,o*h,o*c);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const jd={DEG2RAD:ms,RAD2DEG:Vi,generateUUID:dn,clamp:ze,euclideanModulo:Go,mapLinear:Dd,inverseLerp:Id,lerp:xs,damp:Nd,pingpong:Ud,smoothstep:Fd,smootherstep:Od,randInt:kd,randFloat:zd,randFloatSpread:Bd,seededRandom:Vd,degToRad:Hd,radToDeg:Gd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:$d,setQuaternionFromProperEuler:qd,normalize:Qe,denormalize:cn};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],x=r[a+2],g=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==x){let m=l*d+c*f+h*x+u*g;m<0&&(d=-d,f=-f,x=-x,g=-g,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),_=Math.sin(v);p=Math.sin(p*v)/_,o=Math.sin(o*v)/_,l=l*p+d*o,c=c*p+f*o,h=h*p+x*o,u=u*p+g*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+x*o,u=u*p+g*o;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+h*u+l*f-c*d,e[t+1]=l*x+h*d+c*u-o*f,e[t+2]=c*x+h*f+o*d-l*u,e[t+3]=h*x-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"YZX":this._x=d*h*u+c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u-d*f*x;break;case"XZY":this._x=d*h*u-c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u+d*f*x;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new I,Rc=new mt;class Ue{constructor(e,t,n,i,r,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],x=n[8],g=i[0],m=i[3],p=i[6],v=i[1],_=i[4],M=i[7],w=i[2],E=i[5],A=i[8];return r[0]=a*g+o*v+l*w,r[3]=a*m+o*_+l*E,r[6]=a*p+o*M+l*A,r[1]=c*g+h*v+u*w,r[4]=c*m+h*_+u*E,r[7]=c*p+h*M+u*A,r[2]=d*g+f*v+x*w,r[5]=d*m+f*_+x*E,r[8]=d*p+f*M+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,x=t*u+n*d+i*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jr.makeScale(e,t)),this}rotate(e){return this.premultiply(jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jr=new Ue,Cc=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kd(){const s={enabled:!0,workingColorSpace:Ht,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Kn?Rr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ht]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),s}const je=Kd();function Bn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let _i;class Yd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_i===void 0&&(_i=Rs("canvas")),_i.width=e.width,_i.height=e.height;const i=_i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=_i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zd=0;class Wo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Kr(i[a].image)):r.push(Kr(i[a]))}else r=Kr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Kr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}let Jd=0;const Yr=new I;class Et extends ji{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=yn,i=yn,r=Bt,a=On,o=Yt,l=En,c=Et.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=dn(),this.name="",this.source=new Wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yr).x}get height(){return this.source.getSize(Yr).y}get depth(){return this.source.getSize(Yr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ve(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Ih;Et.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,M=(f+1)/2,w=(p+1)/2,E=(h+d)/4,A=(u+g)/4,P=(x+m)/4;return _>M&&_>w?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=A/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=P/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=A/r,i=P/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qd extends ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Et(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Wo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Qd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xh extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ef extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Bs.subVectors(this.max,ts),vi.subVectors(e.a,ts),yi.subVectors(e.b,ts),Mi.subVectors(e.c,ts),Vn.subVectors(yi,vi),Hn.subVectors(Mi,yi),ni.subVectors(vi,Mi);let t=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-ni.z,ni.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,ni.z,0,-ni.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-ni.y,ni.x,0];return!Zr(t,vi,yi,Mi,Bs)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,vi,yi,Mi,Bs))?!1:(Vs.crossVectors(Vn,Hn),t=[Vs.x,Vs.y,Vs.z],Zr(t,vi,yi,Mi,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new I,new I,new I,new I,new I,new I,new I,new I],sn=new I,zs=new Rt,vi=new I,yi=new I,Mi=new I,Vn=new I,Hn=new I,ni=new I,ts=new I,Bs=new I,Vs=new I,ii=new I;function Zr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ii.fromArray(s,r);const o=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const tf=new Rt,ns=new I,Jr=new I;class wn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Jr)),this.expandByPoint(ns.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Cn=new I,Qr=new I,Hs=new I,Gn=new I,ea=new I,Gs=new I,ta=new I;class Ds{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qr.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Qr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Hs),o=Gn.dot(this.direction),l=-Gn.dot(Hs),c=Gn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,x;if(h>0)if(u=a*l-o,d=a*o-l,x=r*h,u>=0)if(d>=-x)if(d<=x){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qr).addScaledVector(Hs,d),f}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,i,r){ea.subVectors(t,e),Gs.subVectors(n,e),ta.crossVectors(ea,Gs);let a=this.direction.dot(ta),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const l=o*this.direction.dot(Gs.crossVectors(Gn,Gs));if(l<0)return null;const c=o*this.direction.dot(ea.cross(Gn));if(c<0||l+c>a)return null;const h=-o*Gn.dot(ta);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,x,g,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,x,g,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,x,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Si.setFromMatrixColumn(e,0).length(),r=1/Si.setFromMatrixColumn(e,1).length(),a=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,x=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+x*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,x=c*h,g=c*u;t[0]=d+g*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,x=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,x=o*h,g=o*u;t[0]=l*h,t[4]=x*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,x=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=x*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+x,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*l,f=a*c,x=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-x,t[2]=x*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nf,e,sf)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Wn.crossVectors(n,jt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Wn.crossVectors(n,jt)),Wn.normalize(),Ws.crossVectors(jt,Wn),i[0]=Wn.x,i[4]=Ws.x,i[8]=jt.x,i[1]=Wn.y,i[5]=Ws.y,i[9]=jt.y,i[2]=Wn.z,i[6]=Ws.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],x=n[2],g=n[6],m=n[10],p=n[14],v=n[3],_=n[7],M=n[11],w=n[15],E=i[0],A=i[4],P=i[8],b=i[12],S=i[1],C=i[5],U=i[9],k=i[13],V=i[2],X=i[6],W=i[10],Q=i[14],G=i[3],ee=i[7],re=i[11],be=i[15];return r[0]=a*E+o*S+l*V+c*G,r[4]=a*A+o*C+l*X+c*ee,r[8]=a*P+o*U+l*W+c*re,r[12]=a*b+o*k+l*Q+c*be,r[1]=h*E+u*S+d*V+f*G,r[5]=h*A+u*C+d*X+f*ee,r[9]=h*P+u*U+d*W+f*re,r[13]=h*b+u*k+d*Q+f*be,r[2]=x*E+g*S+m*V+p*G,r[6]=x*A+g*C+m*X+p*ee,r[10]=x*P+g*U+m*W+p*re,r[14]=x*b+g*k+m*Q+p*be,r[3]=v*E+_*S+M*V+w*G,r[7]=v*A+_*C+M*X+w*ee,r[11]=v*P+_*U+M*W+w*re,r[15]=v*b+_*k+M*Q+w*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],x=e[3],g=e[7],m=e[11],p=e[15];return x*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+g*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],x=e[12],g=e[13],m=e[14],p=e[15],v=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,_=x*d*c-h*m*c-x*l*f+a*m*f+h*l*p-a*d*p,M=h*g*c-x*u*c+x*o*f-a*g*f-h*o*p+a*u*p,w=x*u*l-h*g*l-x*o*d+a*g*d+h*o*m-a*u*m,E=t*v+n*_+i*M+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*A,e[4]=_*A,e[5]=(h*m*r-x*d*r+x*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(x*l*r-a*m*r-x*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*A,e[8]=M*A,e[9]=(x*u*r-h*g*r-x*n*f+t*g*f+h*n*p-t*u*p)*A,e[10]=(a*g*r-x*o*r+x*n*c-t*g*c-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=w*A,e[13]=(h*g*i-x*u*i+x*n*d-t*g*d-h*n*m+t*u*m)*A,e[14]=(x*o*i-a*g*i-x*n*l+t*g*l+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,x=r*u,g=a*h,m=a*u,p=o*u,v=l*c,_=l*h,M=l*u,w=n.x,E=n.y,A=n.z;return i[0]=(1-(g+p))*w,i[1]=(f+M)*w,i[2]=(x-_)*w,i[3]=0,i[4]=(f-M)*E,i[5]=(1-(d+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(x+_)*A,i[9]=(m-v)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Si.set(i[0],i[1],i[2]).length();const a=Si.set(i[4],i[5],i[6]).length(),o=Si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);const c=1/r,h=1/a,u=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Mn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let x,g;if(l)x=r/(a-r),g=a*r/(a-r);else if(o===Mn)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Cr)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Mn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let x,g;if(l)x=1/(a-r),g=a/(a-r);else if(o===Mn)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===Cr)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Si=new I,rn=new Le,nf=new I(0,0,0),sf=new I(1,1,1),Wn=new I,Ws=new I,jt=new I,Lc=new Le,Dc=new mt;class tn{constructor(e=0,t=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rf=0;const Ic=new I,bi=new mt,Pn=new Le,Xs=new I,is=new I,af=new I,of=new mt,Nc=new I(1,0,0),Uc=new I(0,1,0),Fc=new I(0,0,1),Oc={type:"added"},cf={type:"removed"},Ei={type:"childadded",child:null},na={type:"childremoved",child:null};class dt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new I,t=new tn,n=new mt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ue}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(Nc,e)}rotateY(e){return this.rotateOnAxis(Uc,e)}rotateZ(e){return this.rotateOnAxis(Fc,e)}translateOnAxis(e,t){return Ic.copy(e).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nc,e)}translateY(e){return this.translateOnAxis(Uc,e)}translateZ(e){return this.translateOnAxis(Fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(is,Xs,this.up):Pn.lookAt(Xs,is,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(Pn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oc),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cf),na.child=e,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oc),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new I(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new I,Ln=new I,ia=new I,Dn=new I,Ti=new I,wi=new I,kc=new I,sa=new I,ra=new I,aa=new I,oa=new Je,ca=new Je,la=new Je;class ln{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){an.subVectors(i,t),Ln.subVectors(n,t),ia.subVectors(e,t);const a=an.dot(an),o=an.dot(Ln),l=an.dot(ia),c=Ln.dot(Ln),h=Ln.dot(ia),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return oa.setScalar(0),ca.setScalar(0),la.setScalar(0),oa.fromBufferAttribute(e,t),ca.fromBufferAttribute(e,n),la.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(oa,r.x),a.addScaledVector(ca,r.y),a.addScaledVector(la,r.z),a}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),Ln.subVectors(e,t),an.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),an.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ti.subVectors(i,n),wi.subVectors(r,n),sa.subVectors(e,n);const l=Ti.dot(sa),c=wi.dot(sa);if(l<=0&&c<=0)return t.copy(n);ra.subVectors(e,i);const h=Ti.dot(ra),u=wi.dot(ra);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ti,a);aa.subVectors(e,r);const f=Ti.dot(aa),x=wi.dot(aa);if(x>=0&&f<=x)return t.copy(r);const g=f*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(wi,o);const m=h*x-f*u;if(m<=0&&u-h>=0&&f-x>=0)return kc.subVectors(r,i),o=(u-h)/(u-h+(f-x)),t.copy(i).addScaledVector(kc,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(Ti,a).addScaledVector(wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function ha(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Go(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ha(a,r,e+1/3),this.g=ha(a,r,e),this.b=ha(a,r,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&ve("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ve("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const n=$h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return je.workingToColorSpace(It.copy(this),e),Math.round(ze(It.r*255,0,255))*65536+Math.round(ze(It.g*255,0,255))*256+Math.round(ze(It.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(It.copy(this),t);const n=It.r,i=It.g,r=It.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=pt){je.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL($s);const n=xs(Xn.h,$s.h,t),i=xs(Xn.s,$s.s,t),r=xs(Xn.l,$s.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new xe;xe.NAMES=$h;let lf=0;class Sn extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=Ui,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=za,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ve(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class un extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new I,qs=new Ve;let hf=0;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=To,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==To&&(e.usage=this.usage),e}}class qh extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jh extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uf=0;const Jt=new Le,ua=new dt,Ai=new I,Kt=new Rt,ss=new Rt,At=new I;class Lt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wh(e)?jh:qh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Kt.min,ss.min),Kt.expandByPoint(At),At.addVectors(Kt.max,ss.max),Kt.expandByPoint(At)):(Kt.expandByPoint(ss.min),Kt.expandByPoint(ss.max))}Kt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(e,c),At.add(Ai)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;const c=new I,h=new I,u=new I,d=new Ve,f=new Ve,x=new Ve,g=new I,m=new I;function p(P,b,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),x.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),x.sub(d);const C=1/(f.x*x.y-x.x*f.y);isFinite(C)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(C),o[P].add(g),o[b].add(g),o[S].add(g),l[P].add(m),l[b].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,b=v.length;P<b;++P){const S=v[P],C=S.start,U=S.count;for(let k=C,V=C+U;k<V;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new I,M=new I,w=new I,E=new I;function A(P){w.fromBufferAttribute(i,P),E.copy(w);const b=o[P];_.copy(b),_.sub(w.multiplyScalar(w.dot(b))).normalize(),M.crossVectors(E,b);const C=M.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,C)}for(let P=0,b=v.length;P<b;++P){const S=v[P],C=S.start,U=S.count;for(let k=C,V=C+U;k<V;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const x=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[x++]=c[f++]}return new Ut(d,h,u)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new Le,si=new Ds,js=new wn,Bc=new I,Ks=new I,Ys=new I,Zs=new I,da=new I,Js=new I,Vc=new I,Qs=new I;class Ze extends dt{constructor(e=new Lt,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(da.fromBufferAttribute(u,e),a?Js.addScaledVector(da,h):Js.addScaledVector(da.sub(t),h))}t.add(Js)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(js.containsPoint(si.origin)===!1&&(si.intersectSphere(js,Bc)===null||si.origin.distanceToSquared(Bc)>(e.far-e.near)**2))&&(zc.copy(r).invert(),si.copy(e.ray).applyMatrix4(zc),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,w=_;M<w;M+=3){const E=o.getX(M),A=o.getX(M+1),P=o.getX(M+2);i=er(this,p,e,n,c,h,u,E,A,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const v=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);i=er(this,a,e,n,c,h,u,v,_,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,w=_;M<w;M+=3){const E=M,A=M+1,P=M+2;i=er(this,p,e,n,c,h,u,E,A,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const v=m,_=m+1,M=m+2;i=er(this,a,e,n,c,h,u,v,_,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function df(s,e,t,n,i,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===fn,o),l===null)return null;Qs.copy(o),Qs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Qs);return c<t.near||c>t.far?null:{distance:c,point:Qs.clone(),object:s}}function er(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ks),s.getVertexPosition(l,Ys),s.getVertexPosition(c,Zs);const h=df(s,e,t,n,Ks,Ys,Zs,Vc);if(h){const u=new I;ln.getBarycoord(Vc,Ks,Ys,Zs,u),i&&(h.uv=ln.getInterpolatedAttribute(i,o,l,c,u,new Ve)),r&&(h.uv1=ln.getInterpolatedAttribute(r,o,l,c,u,new Ve)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};ln.getNormal(Ks,Ys,Zs,d.normal),h.face=d,h.barycoord=u}return h}class Qn extends Lt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(u,2));function x(g,m,p,v,_,M,w,E,A,P,b){const S=M/A,C=w/P,U=M/2,k=w/2,V=E/2,X=A+1,W=P+1;let Q=0,G=0;const ee=new I;for(let re=0;re<W;re++){const be=re*C-k;for(let $e=0;$e<X;$e++){const tt=$e*S-U;ee[g]=tt*v,ee[m]=be*_,ee[p]=V,c.push(ee.x,ee.y,ee.z),ee[g]=0,ee[m]=0,ee[p]=E>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push($e/A),u.push(1-re/P),Q+=1}}for(let re=0;re<P;re++)for(let be=0;be<A;be++){const $e=d+be+X*re,tt=d+be+X*(re+1),ot=d+(be+1)+X*(re+1),ct=d+(be+1)+X*re;l.push($e,tt,ct),l.push(tt,ot,ct),G+=6}o.addGroup(f,G,b),f+=G,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(s){const e={};for(let t=0;t<s.length;t++){const n=Hi(s[t]);for(const i in n)e[i]=n[i]}return e}function ff(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Kh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const pf={clone:Hi,merge:kt};var mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yh extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new I,Hc=new Ve,Gc=new Ve;class zt extends Yh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Hc,Gc),t.subVectors(Gc,Hc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,Ci=1;class gf extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt(Ri,Ci,e,t);i.layers=this.layers,this.add(i);const r=new zt(Ri,Ci,e,t);r.layers=this.layers,this.add(r);const a=new zt(Ri,Ci,e,t);a.layers=this.layers,this.add(a);const o=new zt(Ri,Ci,e,t);o.layers=this.layers,this.add(o);const l=new zt(Ri,Ci,e,t);l.layers=this.layers,this.add(l);const c=new zt(Ri,Ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Zh extends Et{constructor(e=[],t=zi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _f extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qn(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:zn});r.uniforms.tEquirect.value=t;const a=new Ze(i,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Bt),new gf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class Pt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vf={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pM extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=To,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new I;class $o{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $o(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wc=new I,Xc=new Je,$c=new Je,Mf=new I,qc=new Le,tr=new I,pa=new wn,jc=new Le,ma=new Ds;class Sf extends Ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yc,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tr),this.boundingBox.expandByPoint(tr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tr),this.boundingSphere.expandByPoint(tr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(i),e.ray.intersectsSphere(pa)!==!1&&(jc.copy(i).invert(),ma.copy(e.ray).applyMatrix4(jc),!(this.boundingBox!==null&&ma.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ma)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():ve("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Xc.fromBufferAttribute(i.attributes.skinIndex,e),$c.fromBufferAttribute(i.attributes.skinWeight,e),Wc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=$c.getComponent(r);if(a!==0){const o=Xc.getComponent(r);qc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Mf.copy(Wc).applyMatrix4(qc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Jh extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ki extends Et{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Vt,h=Vt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kc=new Le,bf=new Le;class qo{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ve("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:bf;Kc.multiplyMatrices(o,t[r]),Kc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new qo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ki(t,e,e,Yt,hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(ve("Skeleton: No bone found with UUID:",r),a=new Jh),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class wo extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pi=new Le,Yc=new Le,nr=[],Zc=new Rt,Ef=new Le,rs=new Ze,as=new wn;class Tf extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ef)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),Zc.copy(e.boundingBox).applyMatrix4(Pi),this.boundingBox.union(Zc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),as.copy(e.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(as)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),e.ray.intersectsSphere(as)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Pi),Yc.multiplyMatrices(n,Pi),rs.matrixWorld=Yc,rs.raycast(e,nr);for(let a=0,o=nr.length;a<o;a++){const l=nr[a];l.instanceId=r,l.object=this,t.push(l)}nr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ki(new Float32Array(i*this.count),i,this.count,ko,hn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xa=new I,wf=new I,Af=new Ue;class hi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xa.subVectors(n,t).cross(wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Af.getNormalMatrix(e),i=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new wn,Rf=new Ve(.5,.5),ir=new I;class jo{constructor(e=new hi,t=new hi,n=new hi,i=new hi,r=new hi,a=new hi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],x=r[8],g=r[9],m=r[10],p=r[11],v=r[12],_=r[13],M=r[14],w=r[15];if(i[0].setComponents(c-a,f-h,p-x,w-v).normalize(),i[1].setComponents(c+a,f+h,p+x,w+v).normalize(),i[2].setComponents(c+o,f+u,p+g,w+_).normalize(),i[3].setComponents(c-o,f-u,p-g,w-_).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,f-d,p-m,w-M).normalize();else if(i[4].setComponents(c-l,f-d,p-m,w-M).normalize(),t===Mn)i[5].setComponents(c+l,f+d,p+m,w+M).normalize();else if(t===Cr)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);const t=Rf.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ir.x=i.normal.x>0?e.max.x:e.min.x,ir.y=i.normal.y>0?e.max.y:e.min.y,ir.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qh extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lr=new I,Dr=new I,Jc=new Le,os=new Ds,sr=new wn,ga=new I,Qc=new I;class Ko extends dt{constructor(e=new Lt,t=new Qh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Lr.fromBufferAttribute(t,i-1),Dr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lr.distanceTo(Dr);e.setAttribute("lineDistance",new St(n,1))}else ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(i),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;Jc.copy(i).invert(),os.copy(e.ray).applyMatrix4(Jc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let g=f,m=x-1;g<m;g+=c){const p=h.getX(g),v=h.getX(g+1),_=rr(this,e,os,l,p,v,g);_&&t.push(_)}if(this.isLineLoop){const g=h.getX(x-1),m=h.getX(f),p=rr(this,e,os,l,g,m,x-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let g=f,m=x-1;g<m;g+=c){const p=rr(this,e,os,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=rr(this,e,os,l,x-1,f,x-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Lr.fromBufferAttribute(o,i),Dr.fromBufferAttribute(o,r),t.distanceSqToSegment(Lr,Dr,ga,Qc)>n)return;ga.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ga);if(!(c<e.near||c>e.far))return{distance:c,point:Qc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const el=new I,tl=new I;class Cf extends Ko{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)el.fromBufferAttribute(t,i),tl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+el.distanceTo(tl);e.setAttribute("lineDistance",new St(n,1))}else ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pf extends Ko{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class eu extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nl=new Le,Ao=new Ds,ar=new wn,or=new I;class Lf extends dt{constructor(e=new Lt,t=new eu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(i),ar.radius+=r,e.ray.intersectsSphere(ar)===!1)return;nl.copy(i).invert(),Ao.copy(e.ray).applyMatrix4(nl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=d,g=f;x<g;x++){const m=c.getX(x);or.fromBufferAttribute(u,m),il(or,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=d,g=f;x<g;x++)or.fromBufferAttribute(u,x),il(or,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function il(s,e,t,n,i,r,a){const o=Ao.distanceSqToPoint(s);if(o<t){const l=new I;Ao.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class zr extends Et{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tu extends Et{constructor(e,t,n=pi,i,r,a,o=Vt,l=Vt,c,h=Es,u=1){if(h!==Es&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nu extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class iu extends Lt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new I,h=new Ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(o,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Br extends Lt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let x=0;const g=[],m=n/2;let p=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2));function v(){const M=new I,w=new I;let E=0;const A=(t-e)/n;for(let P=0;P<=r;P++){const b=[],S=P/r,C=S*(t-e)+e;for(let U=0;U<=i;U++){const k=U/i,V=k*l+o,X=Math.sin(V),W=Math.cos(V);w.x=C*X,w.y=-S*n+m,w.z=C*W,u.push(w.x,w.y,w.z),M.set(X,A,W).normalize(),d.push(M.x,M.y,M.z),f.push(k,1-S),b.push(x++)}g.push(b)}for(let P=0;P<i;P++)for(let b=0;b<r;b++){const S=g[b][P],C=g[b+1][P],U=g[b+1][P+1],k=g[b][P+1];(e>0||b!==0)&&(h.push(S,C,k),E+=3),(t>0||b!==r-1)&&(h.push(C,U,k),E+=3)}c.addGroup(p,E,0),p+=E}function _(M){const w=x,E=new Ve,A=new I;let P=0;const b=M===!0?e:t,S=M===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),x++;const C=x;for(let U=0;U<=i;U++){const V=U/i*l+o,X=Math.cos(V),W=Math.sin(V);A.x=b*W,A.y=m*S,A.z=b*X,u.push(A.x,A.y,A.z),d.push(0,S,0),E.x=X*.5+.5,E.y=W*.5*S+.5,f.push(E.x,E.y),x++}for(let U=0;U<i;U++){const k=w+U,V=C+U;M===!0?h.push(V,V+1,k):h.push(V+1,V,k),P+=3}c.addGroup(p,P,M===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class en extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],x=[],g=[],m=[];for(let p=0;p<h;p++){const v=p*d-a;for(let _=0;_<c;_++){const M=_*u-r;x.push(M,-v,0),g.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const _=v+c*p,M=v+c*(p+1),w=v+1+c*(p+1),E=v+1+c*p;f.push(_,M,E),f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new St(x,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vr extends Lt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],x=[],g=[],m=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const E=w/t;u.x=-e*Math.cos(i+E*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(i+E*r)*Math.sin(a+_*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+M,1-_),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const _=h[p][v+1],M=h[p][v],w=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&f.push(_,M,E),(p!==n-1||l<Math.PI)&&f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new St(x,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yo extends Lt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let x=0;x<=i;x++){const g=x/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=i;x++){const g=(i+1)*f+x-1,m=(i+1)*(f-1)+x-1,p=(i+1)*(f-1)+x,v=(i+1)*f+x;a.push(g,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vt extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class An extends vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Df extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class If extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function cr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Nf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Uf(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function sl(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function su(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Is{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ff extends Is{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sc:r=e,o=2*t-n;break;case bc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sc:a=e,l=2*n-t;break;case bc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-t)/(i-t),g=x*x,m=g*x,p=-d*m+2*d*g-d*x,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*x+1,_=(-1-f)*m+(1.5+f)*g+.5*x,M=f*m-f*g;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+v*a[c+w]+_*a[l+w]+M*a[u+w];return r}}class Of extends Is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class kf extends Is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cr(t,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cr(e.times,Array),values:cr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Of(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ff(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ws:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case $r:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return $r}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Nf(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$r,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let x=0;x!==n;++x){const g=t[u+x];if(g!==t[d+x]||g!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=As;class Yi extends pn{constructor(e,t,n){super(e,t,n)}}Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=ws;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class ru extends pn{constructor(e,t,n,i){super(e,t,n,i)}}ru.prototype.ValueTypeName="color";class Gi extends pn{constructor(e,t,n,i){super(e,t,n,i)}}Gi.prototype.ValueTypeName="number";class zf extends Is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)mt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Wi extends pn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new zf(this.times,this.values,this.getValueSize(),e)}}Wi.prototype.ValueTypeName="quaternion";Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Zi extends pn{constructor(e,t,n){super(e,t,n)}}Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ws;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class Xi extends pn{constructor(e,t,n,i){super(e,t,n,i)}}Xi.prototype.ValueTypeName="vector";class Bf{constructor(e="",t=-1,n=[],i=_d){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Hf(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Uf(l);l=sl(l,1,h),c=sl(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Gi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(ve("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Oe("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,x,g){if(f.length!==0){const m=[],p=[];su(f,m,p,x),m.length!==0&&g.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let g=0;g<d[x].morphTargets.length;g++)f[d[x].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let v=0;v!==d[x].morphTargets.length;++v){const _=d[x];m.push(_.time),p.push(_.morphTarget===g?1:0)}i.push(new Gi(".morphTargetInfluence["+g+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Xi,f+".position",d,"pos",i),n(Wi,f+".quaternion",d,"rot",i),n(Xi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Vf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gi;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return ru;case"quaternion":return Wi;case"bool":case"boolean":return Yi;case"string":return Zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Hf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vf(s.type);if(s.times===void 0){const t=[],n=[];su(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const kn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Gf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],x=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Wf=new Gf;class Ji{constructor(e){this.manager=e!==void 0?e:Wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class Xf extends Error{constructor(e,t){super(e),this.response=t}}class au extends Ji{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=kn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:n,onError:i});return}In[e]=[],In[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=In[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,x=f!==0;let g=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:_,value:M})=>{if(_)p.close();else{g+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:f});for(let E=0,A=h.length;E<A;E++){const P=h[E];P.onProgress&&P.onProgress(w)}p.enqueue(M),v()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Xf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(x=>f.decode(x))}}}).then(c=>{kn.add(`file:${e}`,c);const h=In[e];delete In[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=In[e];if(h===void 0)throw this.manager.itemError(e),c;delete In[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Li=new WeakMap;class $f extends Ji{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=kn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Li.get(a);u===void 0&&(u=[],Li.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Rs("img");function l(){h(),t&&t(this);const u=Li.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Li.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),kn.remove(`image:${e}`);const d=Li.get(this)||[];for(let f=0;f<d.length;f++){const x=d[f];x.onError&&x.onError(u)}Li.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),kn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Zo extends Ji{constructor(e){super(e)}load(e,t,n,i){const r=new Et,a=new $f(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ns extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mM extends Ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _a=new Le,rl=new I,al=new I;class Jo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(rl),al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(al),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qf extends Jo{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Vi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jf extends Ns{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new qf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ol=new Le,cs=new I,va=new I;class Kf extends Jo{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cs.setFromMatrixPosition(e.matrixWorld),n.position.copy(cs),va.copy(n.position),va.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(va),n.updateMatrixWorld(),i.makeTranslation(-cs.x,-cs.y,-cs.z),ol.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol,n.coordinateSystem,n.reversedDepth)}}class Yf extends Ns{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qo extends Yh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zf extends Jo{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jf extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Zf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xM extends Ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ya=new WeakMap;class Qf extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ve("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ve("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=kn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(ya.has(a)===!0)i&&i(ya.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return kn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ya.set(l,c),kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});kn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ep extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ec="\\[\\]\\.:\\/",tp=new RegExp("["+ec+"]","g"),tc="[^"+ec+"]",np="[^"+ec.replace("\\.","")+"]",ip=/((?:WC+[\/:])*)/.source.replace("WC",tc),sp=/(WCOD+)?/.source.replace("WCOD",np),rp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tc),ap=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tc),op=new RegExp("^"+ip+sp+rp+ap+"$"),cp=["material","materials","bones","map"];class lp{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tp,"")}static parseTrackName(e){const t=op.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);cp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=lp;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const cl=new Le;class gM{constructor(e,t,n=0,i=1/0){this.ray=new Ds(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Oe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cl),this}intersectObject(e,t=!0,n=[]){return Ro(e,this,n,t),n.sort(ll),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ro(e[i],this,n,t);return n.sort(ll),n}}function ll(s,e){return s.distance-e.distance}function Ro(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Ro(r[a],e,t,!0)}}function hl(s,e,t,n){const i=hp(n);switch(t){case zh:return s*e;case ko:return s*e/i.components*i.byteLength;case zo:return s*e/i.components*i.byteLength;case Bo:return s*e*2/i.components*i.byteLength;case Vo:return s*e*2/i.components*i.byteLength;case Bh:return s*e*3/i.components*i.byteLength;case Yt:return s*e*4/i.components*i.byteLength;case Ho:return s*e*4/i.components*i.byteLength;case yr:case Mr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sr:case br:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ya:case Ja:return Math.max(s,16)*Math.max(e,8)/4;case Ka:case Za:return Math.max(s,8)*Math.max(e,8)/2;case Qa:case eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case to:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case no:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case so:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ro:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ao:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case oo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case co:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case lo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ho:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case uo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case fo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case po:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case mo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case xo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case go:case _o:case vo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yo:case Mo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case So:case bo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hp(s){switch(s){case En:case Uh:return{byteLength:1,components:1};case Ss:case Fh:case qi:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case pi:case Uo:case hn:return{byteLength:4,components:1};case Oh:case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);function ou(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function up(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){const x=u[d],g=u[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){const g=u[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Up=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Op=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,um=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,h0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:dp,alphahash_pars_fragment:fp,alphamap_fragment:pp,alphamap_pars_fragment:mp,alphatest_fragment:xp,alphatest_pars_fragment:gp,aomap_fragment:_p,aomap_pars_fragment:vp,batching_pars_vertex:yp,batching_vertex:Mp,begin_vertex:Sp,beginnormal_vertex:bp,bsdfs:Ep,iridescence_fragment:Tp,bumpmap_pars_fragment:wp,clipping_planes_fragment:Ap,clipping_planes_pars_fragment:Rp,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Pp,color_fragment:Lp,color_pars_fragment:Dp,color_pars_vertex:Ip,color_vertex:Np,common:Up,cube_uv_reflection_fragment:Fp,defaultnormal_vertex:Op,displacementmap_pars_vertex:kp,displacementmap_vertex:zp,emissivemap_fragment:Bp,emissivemap_pars_fragment:Vp,colorspace_fragment:Hp,colorspace_pars_fragment:Gp,envmap_fragment:Wp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:$p,envmap_pars_vertex:qp,envmap_physical_pars_fragment:sm,envmap_vertex:jp,fog_vertex:Kp,fog_pars_vertex:Yp,fog_fragment:Zp,fog_pars_fragment:Jp,gradientmap_pars_fragment:Qp,lightmap_pars_fragment:em,lights_lambert_fragment:tm,lights_lambert_pars_fragment:nm,lights_pars_begin:im,lights_toon_fragment:rm,lights_toon_pars_fragment:am,lights_phong_fragment:om,lights_phong_pars_fragment:cm,lights_physical_fragment:lm,lights_physical_pars_fragment:hm,lights_fragment_begin:um,lights_fragment_maps:dm,lights_fragment_end:fm,logdepthbuf_fragment:pm,logdepthbuf_pars_fragment:mm,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:gm,map_fragment:_m,map_pars_fragment:vm,map_particle_fragment:ym,map_particle_pars_fragment:Mm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:bm,morphinstance_vertex:Em,morphcolor_vertex:Tm,morphnormal_vertex:wm,morphtarget_pars_vertex:Am,morphtarget_vertex:Rm,normal_fragment_begin:Cm,normal_fragment_maps:Pm,normal_pars_fragment:Lm,normal_pars_vertex:Dm,normal_vertex:Im,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Um,clearcoat_normal_fragment_maps:Fm,clearcoat_pars_fragment:Om,iridescence_pars_fragment:km,opaque_fragment:zm,packing:Bm,premultiplied_alpha_fragment:Vm,project_vertex:Hm,dithering_fragment:Gm,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:$m,shadowmap_pars_fragment:qm,shadowmap_pars_vertex:jm,shadowmap_vertex:Km,shadowmask_pars_fragment:Ym,skinbase_vertex:Zm,skinning_pars_vertex:Jm,skinning_vertex:Qm,skinnormal_vertex:e0,specularmap_fragment:t0,specularmap_pars_fragment:n0,tonemapping_fragment:i0,tonemapping_pars_fragment:s0,transmission_fragment:r0,transmission_pars_fragment:a0,uv_pars_fragment:o0,uv_pars_vertex:c0,uv_vertex:l0,worldpos_vertex:h0,background_vert:u0,background_frag:d0,backgroundCube_vert:f0,backgroundCube_frag:p0,cube_vert:m0,cube_frag:x0,depth_vert:g0,depth_frag:_0,distanceRGBA_vert:v0,distanceRGBA_frag:y0,equirect_vert:M0,equirect_frag:S0,linedashed_vert:b0,linedashed_frag:E0,meshbasic_vert:T0,meshbasic_frag:w0,meshlambert_vert:A0,meshlambert_frag:R0,meshmatcap_vert:C0,meshmatcap_frag:P0,meshnormal_vert:L0,meshnormal_frag:D0,meshphong_vert:I0,meshphong_frag:N0,meshphysical_vert:U0,meshphysical_frag:F0,meshtoon_vert:O0,meshtoon_frag:k0,points_vert:z0,points_frag:B0,shadow_vert:V0,shadow_frag:H0,sprite_vert:G0,sprite_frag:W0},ae={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},vn={basic:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new xe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:kt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:kt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new xe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:kt([ae.points,ae.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:kt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:kt([ae.common,ae.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:kt([ae.sprite,ae.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:kt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:kt([ae.lights,ae.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};vn.physical={uniforms:kt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const lr={r:0,b:0,g:0},ai=new tn,X0=new Le;function $0(s,e,t,n,i,r,a){const o=new xe(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function x(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M}function g(_){let M=!1;const w=x(_);w===null?p(o,l):w&&w.isColor&&(p(w,1),M=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,M){const w=x(M);w&&(w.isCubeTexture||w.mapping===kr)?(h===void 0&&(h=new Ze(new Qn(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Hi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ai.copy(M.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(ai)),h.material.toneMapped=je.getTransfer(w.colorSpace)!==st,(u!==w||d!==w.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ze(new en(2,2),new Tn({name:"BackgroundMaterial",uniforms:Hi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=je.getTransfer(w.colorSpace)!==st,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,M){_.getRGB(lr,Kh(s)),n.buffers.color.setClear(lr.r,lr.g,lr.b,M,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:g,addToRenderList:m,dispose:v}}function q0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(S,C,U,k,V){let X=!1;const W=u(k,U,C);r!==W&&(r=W,c(r.object)),X=f(S,k,U,V),X&&x(S,k,U,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(S,C,U,k),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,C,U){const k=U.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let X=V[C.id];X===void 0&&(X={},V[C.id]=X);let W=X[k];return W===void 0&&(W=d(l()),X[k]=W),W}function d(S){const C=[],U=[],k=[];for(let V=0;V<t;V++)C[V]=0,U[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,C,U,k){const V=r.attributes,X=C.attributes;let W=0;const Q=U.getAttributes();for(const G in Q)if(Q[G].location>=0){const re=V[G];let be=X[G];if(be===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(be=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(be=S.instanceColor)),re===void 0||re.attribute!==be||be&&re.data!==be.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function x(S,C,U,k){const V={},X=C.attributes;let W=0;const Q=U.getAttributes();for(const G in Q)if(Q[G].location>=0){let re=X[G];re===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(re=S.instanceColor));const be={};be.attribute=re,re&&re.data&&(be.data=re.data),V[G]=be,W++}r.attributes=V,r.attributesNum=W,r.index=k}function g(){const S=r.newAttributes;for(let C=0,U=S.length;C<U;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){const U=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;U[S]=1,k[S]===0&&(s.enableVertexAttribArray(S),k[S]=1),V[S]!==C&&(s.vertexAttribDivisor(S,C),V[S]=C)}function v(){const S=r.newAttributes,C=r.enabledAttributes;for(let U=0,k=C.length;U<k;U++)C[U]!==S[U]&&(s.disableVertexAttribArray(U),C[U]=0)}function _(S,C,U,k,V,X,W){W===!0?s.vertexAttribIPointer(S,C,U,V,X):s.vertexAttribPointer(S,C,U,k,V,X)}function M(S,C,U,k){g();const V=k.attributes,X=U.getAttributes(),W=C.defaultAttributeValues;for(const Q in X){const G=X[Q];if(G.location>=0){let ee=V[Q];if(ee===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){const re=ee.normalized,be=ee.itemSize,$e=e.get(ee);if($e===void 0)continue;const tt=$e.buffer,ot=$e.type,ct=$e.bytesPerElement,q=ot===s.INT||ot===s.UNSIGNED_INT||ee.gpuType===Uo;if(ee.isInterleavedBufferAttribute){const Y=ee.data,de=Y.stride,Ne=ee.offset;if(Y.isInstancedInterleavedBuffer){for(let ye=0;ye<G.locationSize;ye++)p(G.location+ye,Y.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ye=0;ye<G.locationSize;ye++)m(G.location+ye);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let ye=0;ye<G.locationSize;ye++)_(G.location+ye,be/G.locationSize,ot,re,de*ct,(Ne+be/G.locationSize*ye)*ct,q)}else{if(ee.isInstancedBufferAttribute){for(let Y=0;Y<G.locationSize;Y++)p(G.location+Y,ee.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Y=0;Y<G.locationSize;Y++)m(G.location+Y);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let Y=0;Y<G.locationSize;Y++)_(G.location+Y,be/G.locationSize,ot,re,be*ct,be/G.locationSize*Y*ct,q)}}else if(W!==void 0){const re=W[Q];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(G.location,re);break;case 3:s.vertexAttrib3fv(G.location,re);break;case 4:s.vertexAttrib4fv(G.location,re);break;default:s.vertexAttrib1fv(G.location,re)}}}}v()}function w(){P();for(const S in n){const C=n[S];for(const U in C){const k=C[U];for(const V in k)h(k[V].object),delete k[V];delete C[U]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const U in C){const k=C[U];for(const V in k)h(k[V].object),delete k[V];delete C[U]}delete n[S.id]}function A(S){for(const C in n){const U=n[C];if(U[S.id]===void 0)continue;const k=U[S.id];for(const V in k)h(k[V].object),delete k[V];delete U[S.id]}}function P(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function j0(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)a(c[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let x=0;for(let g=0;g<u;g++)x+=h[g]*d[g];t.update(x,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function K0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Yt&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==En&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==hn&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:w,maxSamples:E}}function Y0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new hi,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||x===null||x.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,_=v*4;let M=p.clippingState||null;l.value=M,M=h(x,d,_,f);for(let w=0;w!==_;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,x){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const p=f+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=f;_!==g;++_,M+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Z0(s){let e=new WeakMap;function t(a,o){return o===qa?a.mapping=zi:o===ja&&(a.mapping=Bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===qa||o===ja)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _f(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Yn=4,ul=[.125,.215,.35,.446,.526,.582],di=20,J0=256,ls=new Qo,dl=new xe;let Ma=null,Sa=0,ba=0,Ea=!1;const Q0=new I;class fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Q0}=r;Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma,Sa,ba),this._renderer.xr.enabled=Ea,e.scissorTest=!1,Di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:qi,format:Yt,colorSpace:Ht,depthBuffer:!1},i=pl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ex(r)),this._blurMaterial=nx(r,e,t),this._ggxMaterial=tx(r,e,t)}return i}_compileMaterial(e){const t=new Ze(new Lt,e);this._renderer.compile(t,ls)}_sceneToCubeUV(e,t,n,i,r){const l=new zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(dl),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ze(new Qn,new un({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(dl),p=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const w=this._cubeSize;Di(i,M*w,_>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(g,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===zi||e.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Di(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ls)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=.05+c*.95,f=u*d,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-Yn?n-x+Yn:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,Di(r,m,p,3*g,2*g),i.setRenderTarget(r),i.render(o,ls),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Di(e,m,p,3*g,2*g),i.setRenderTarget(e),i.render(o,ls)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*di-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):di;m>di&&ve(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const p=[];let v=0;for(let A=0;A<di;++A){const P=A/g,b=Math.exp(-P*P/2);p.push(b),A===0?v+=b:A<m&&(v+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-n;const M=this._sizeLods[i],w=3*M*(i>_-Yn?i-_+Yn:0),E=4*(this._cubeSize-M);Di(t,w,E,3*M,2*M),l.setRenderTarget(t),l.render(u,ls)}}function ex(s){const e=[],t=[],n=[];let i=s;const r=s-Yn+1+ul.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Yn?l=ul[a-s+Yn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,g=3,m=2,p=1,v=new Float32Array(g*x*f),_=new Float32Array(m*x*f),M=new Float32Array(p*x*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,P=E>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(b,g*x*E),_.set(d,m*x*E);const S=[E,E,E,E,E,E];M.set(S,p*x*E)}const w=new Lt;w.setAttribute("position",new Ut(v,g)),w.setAttribute("uv",new Ut(_,m)),w.setAttribute("faceIndex",new Ut(M,p)),n.push(new Ze(w,null)),i>Yn&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function pl(s,e,t){const n=new mi(s,e,t);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Di(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function tx(s,e,t){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function nx(s,e,t){const n=new Float32Array(di),i=new I(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ml(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function xl(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Hr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ix(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===qa||l===ja,h=l===zi||l===Bi;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new fl(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new fl(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function sx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Cs("WebGLRenderer: "+n+" extension not supported."),i}}}function rx(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,x=u.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let _=0,M=v.length;_<M;_+=3){const w=v[_+0],E=v[_+1],A=v[_+2];d.push(w,E,E,A,A,w)}}else if(x!==void 0){const v=x.array;g=x.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const w=_+0,E=_+1,A=_+2;d.push(w,E,E,A,A,w)}}else return;const m=new(Wh(d)?jh:qh)(d,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ax(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,x){x!==0&&(s.drawElementsInstanced(n,f,r,d*a,x),t.update(f,n,x))}function h(d,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];t.update(m,n,1)}function u(d,f,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,x);let p=0;for(let v=0;v<x;v++)p+=f[v]*g[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ox(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cx(s,e,t){const n=new WeakMap,i=new Je;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let M=o.attributes.position.count*_,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*w*4*u),A=new Xh(E,M,w,u);A.type=hn,A.needsUpdate=!0;const P=_*4;for(let S=0;S<u;S++){const C=m[S],U=p[S],k=v[S],V=M*w*4*S;for(let X=0;X<C.count;X++){const W=X*P;f===!0&&(i.fromBufferAttribute(C,X),E[V+W+0]=i.x,E[V+W+1]=i.y,E[V+W+2]=i.z,E[V+W+3]=0),x===!0&&(i.fromBufferAttribute(U,X),E[V+W+4]=i.x,E[V+W+5]=i.y,E[V+W+6]=i.z,E[V+W+7]=0),g===!0&&(i.fromBufferAttribute(k,X),E[V+W+8]=i.x,E[V+W+9]=i.y,E[V+W+10]=i.z,E[V+W+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Ve(M,w)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function lx(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const cu=new Et,gl=new tu(1,1),lu=new Xh,hu=new ef,uu=new Zh,_l=[],vl=[],yl=new Float32Array(16),Ml=new Float32Array(9),Sl=new Float32Array(4);function Qi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=_l[i];if(r===void 0&&(r=new Float32Array(i),_l[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Gr(s,e){let t=vl[e];t===void 0&&(t=new Int32Array(e),vl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function hx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ux(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),wt(t,e)}}function dx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),wt(t,e)}}function fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),wt(t,e)}}function px(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Sl.set(n),s.uniformMatrix2fv(this.addr,!1,Sl),wt(t,n)}}function mx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Ml.set(n),s.uniformMatrix3fv(this.addr,!1,Ml),wt(t,n)}}function xx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;yl.set(n),s.uniformMatrix4fv(this.addr,!1,yl),wt(t,n)}}function gx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function _x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2iv(this.addr,e),wt(t,e)}}function vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3iv(this.addr,e),wt(t,e)}}function yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4iv(this.addr,e),wt(t,e)}}function Mx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2uiv(this.addr,e),wt(t,e)}}function bx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3uiv(this.addr,e),wt(t,e)}}function Ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4uiv(this.addr,e),wt(t,e)}}function Tx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(gl.compareFunction=Gh,r=gl):r=cu,t.setTexture2D(e||r,i)}function wx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hu,i)}function Ax(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uu,i)}function Rx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lu,i)}function Cx(s){switch(s){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return xx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return vx;case 35669:case 35673:return yx;case 5125:return Mx;case 36294:return Sx;case 36295:return bx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}function Px(s,e){s.uniform1fv(this.addr,e)}function Lx(s,e){const t=Qi(e,this.size,2);s.uniform2fv(this.addr,t)}function Dx(s,e){const t=Qi(e,this.size,3);s.uniform3fv(this.addr,t)}function Ix(s,e){const t=Qi(e,this.size,4);s.uniform4fv(this.addr,t)}function Nx(s,e){const t=Qi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ux(s,e){const t=Qi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Fx(s,e){const t=Qi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ox(s,e){s.uniform1iv(this.addr,e)}function kx(s,e){s.uniform2iv(this.addr,e)}function zx(s,e){s.uniform3iv(this.addr,e)}function Bx(s,e){s.uniform4iv(this.addr,e)}function Vx(s,e){s.uniform1uiv(this.addr,e)}function Hx(s,e){s.uniform2uiv(this.addr,e)}function Gx(s,e){s.uniform3uiv(this.addr,e)}function Wx(s,e){s.uniform4uiv(this.addr,e)}function Xx(s,e,t){const n=this.cache,i=e.length,r=Gr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||cu,r[a])}function $x(s,e,t){const n=this.cache,i=e.length,r=Gr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hu,r[a])}function qx(s,e,t){const n=this.cache,i=e.length,r=Gr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||uu,r[a])}function jx(s,e,t){const n=this.cache,i=e.length,r=Gr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||lu,r[a])}function Kx(s){switch(s){case 5126:return Px;case 35664:return Lx;case 35665:return Dx;case 35666:return Ix;case 35674:return Nx;case 35675:return Ux;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return kx;case 35668:case 35672:return zx;case 35669:case 35673:return Bx;case 5125:return Vx;case 36294:return Hx;case 36295:return Gx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return jx}}class Yx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cx(t.type)}}class Zx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kx(t.type)}}class Jx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function bl(s,e){s.seq.push(e),s.map[e.id]=e}function Qx(s,e,t){const n=s.name,i=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),a=Ta.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){bl(t,c===void 0?new Yx(o,s,e):new Zx(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Jx(o),bl(t,u)),t=u}}}class Er{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Qx(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function El(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const eg=37297;let tg=0;function ng(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Tl=new Ue;function ig(s){je._getMatrix(Tl,je.workingColorSpace,s);const e=`mat3( ${Tl.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Rr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ng(s.getShaderSource(e),o)}else return r}function sg(s,e){const t=ig(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rg(s,e){let t;switch(e){case hd:t="Linear";break;case ud:t="Reinhard";break;case dd:t="Cineon";break;case fd:t="ACESFilmic";break;case md:t="AgX";break;case xd:t="Neutral";break;case pd:t="Custom";break;default:ve("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hr=new I;function ag(){je.getLuminanceCoefficients(hr);const s=hr.x.toFixed(4),e=hr.y.toFixed(4),t=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function og(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function cg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ds(s){return s!==""}function Al(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(s){return s.replace(hg,dg)}const ug=new Map;function dg(s,e){let t=Fe[e];if(t===void 0){const n=ug.get(e);if(n!==void 0)t=Fe[n],ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Co(t)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(s){return s.replace(fg,pg)}function pg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function xg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zi:case Bi:e="ENVMAP_TYPE_CUBE";break;case kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gg(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Bi&&(e="ENVMAP_MODE_REFRACTION"),e}function _g(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dh:e="ENVMAP_BLENDING_MULTIPLY";break;case cd:e="ENVMAP_BLENDING_MIX";break;case ld:e="ENVMAP_BLENDING_ADD";break}return e}function vg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yg(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mg(t),c=xg(t),h=gg(t),u=_g(t),d=vg(t),f=og(t),x=cg(r),g=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ds).join(`
`),p.length>0&&(p+=`
`)):(m=[Pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),p=[Pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Zn?rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,sg("linearToOutputTexel",t.outputColorSpace),ag(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),a=Co(a),a=Al(a,t),a=Rl(a,t),o=Co(o),o=Al(o,t),o=Rl(o,t),a=Cl(a),o=Cl(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+m+a,M=v+p+o,w=El(i,i.VERTEX_SHADER,_),E=El(i,i.FRAGMENT_SHADER,M);i.attachShader(g,w),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(C){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(g)||"",k=i.getShaderInfoLog(w)||"",V=i.getShaderInfoLog(E)||"",X=U.trim(),W=k.trim(),Q=V.trim();let G=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,E);else{const re=wl(i,w,"vertex"),be=wl(i,E,"fragment");Oe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+X+`
`+re+`
`+be)}else X!==""?ve("WebGLProgram: Program Info Log:",X):(W===""||Q==="")&&(ee=!1);ee&&(C.diagnostics={runnable:G,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:Q,prefix:p}})}i.deleteShader(w),i.deleteShader(E),P=new Er(i,g),b=lg(i,g)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,eg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=E,this}let Mg=0;class Sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bg(e),t.set(e,n)),n}}class bg{constructor(e){this.id=Mg++,this.code=e,this.usedTimes=0}}function Eg(s,e,t,n,i,r,a){const o=new Xo,l=new Sg,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,C,U,k){const V=U.fog,X=k.geometry,W=b.isMeshStandardMaterial?U.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),G=Q&&Q.mapping===kr?Q.image.height:null,ee=x[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&ve("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,be=re!==void 0?re.length:0;let $e=0;X.morphAttributes.position!==void 0&&($e=1),X.morphAttributes.normal!==void 0&&($e=2),X.morphAttributes.color!==void 0&&($e=3);let tt,ot,ct,q;if(ee){const nt=vn[ee];tt=nt.vertexShader,ot=nt.fragmentShader}else tt=b.vertexShader,ot=b.fragmentShader,l.update(b),ct=l.getVertexShaderID(b),q=l.getFragmentShaderID(b);const Y=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),Ne=k.isInstancedMesh===!0,ye=k.isBatchedMesh===!0,He=!!b.map,Ct=!!b.matcap,ke=!!Q,ft=!!b.aoMap,L=!!b.lightMap,Ge=!!b.bumpMap,We=!!b.normalMap,lt=!!b.displacementMap,me=!!b.emissiveMap,xt=!!b.metalnessMap,Se=!!b.roughnessMap,Ie=b.anisotropy>0,R=b.clearcoat>0,y=b.dispersion>0,O=b.iridescence>0,$=b.sheen>0,K=b.transmission>0,H=Ie&&!!b.anisotropyMap,_e=R&&!!b.clearcoatMap,oe=R&&!!b.clearcoatNormalMap,Ee=R&&!!b.clearcoatRoughnessMap,ge=O&&!!b.iridescenceMap,Z=O&&!!b.iridescenceThicknessMap,ne=$&&!!b.sheenColorMap,Re=$&&!!b.sheenRoughnessMap,we=!!b.specularMap,he=!!b.specularColorMap,Pe=!!b.specularIntensityMap,D=K&&!!b.transmissionMap,ce=K&&!!b.thicknessMap,ie=!!b.gradientMap,se=!!b.alphaMap,J=b.alphaTest>0,j=!!b.alphaHash,fe=!!b.extensions;let De=Zn;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(De=s.toneMapping);const ht={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:ot,defines:b.defines,customVertexShaderID:ct,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ye,batchingColor:ye&&k._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&k.instanceColor!==null,instancingMorph:Ne&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ht,alphaToCoverage:!!b.alphaToCoverage,map:He,matcap:Ct,envMap:ke,envMapMode:ke&&Q.mapping,envMapCubeUVHeight:G,aoMap:ft,lightMap:L,bumpMap:Ge,normalMap:We,displacementMap:d&&lt,emissiveMap:me,normalMapObjectSpace:We&&b.normalMapType===Sd,normalMapTangentSpace:We&&b.normalMapType===Hh,metalnessMap:xt,roughnessMap:Se,anisotropy:Ie,anisotropyMap:H,clearcoat:R,clearcoatMap:_e,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,dispersion:y,iridescence:O,iridescenceMap:ge,iridescenceThicknessMap:Z,sheen:$,sheenColorMap:ne,sheenRoughnessMap:Re,specularMap:we,specularColorMap:he,specularIntensityMap:Pe,transmission:K,transmissionMap:D,thicknessMap:ce,gradientMap:ie,opaque:b.transparent===!1&&b.blending===Ui&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:J,alphaHash:j,combine:b.combine,mapUv:He&&g(b.map.channel),aoMapUv:ft&&g(b.aoMap.channel),lightMapUv:L&&g(b.lightMap.channel),bumpMapUv:Ge&&g(b.bumpMap.channel),normalMapUv:We&&g(b.normalMap.channel),displacementMapUv:lt&&g(b.displacementMap.channel),emissiveMapUv:me&&g(b.emissiveMap.channel),metalnessMapUv:xt&&g(b.metalnessMap.channel),roughnessMapUv:Se&&g(b.roughnessMap.channel),anisotropyMapUv:H&&g(b.anisotropyMap.channel),clearcoatMapUv:_e&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(b.sheenRoughnessMap.channel),specularMapUv:we&&g(b.specularMap.channel),specularColorMapUv:he&&g(b.specularColorMap.channel),specularIntensityMapUv:Pe&&g(b.specularIntensityMap.channel),transmissionMapUv:D&&g(b.transmissionMap.channel),thicknessMapUv:ce&&g(b.thicknessMap.channel),alphaMapUv:se&&g(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(We||Ie),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(He||se),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:$e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:He&&b.map.isVideoTexture===!0&&je.getTransfer(b.map.colorSpace)===st,decodeVideoTextureEmissive:me&&b.emissiveMap.isVideoTexture===!0&&je.getTransfer(b.emissiveMap.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===on,flipSided:b.side===Xt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:fe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&b.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)S.push(C),S.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(v(S,b),_(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){const S=x[b.type];let C;if(S){const U=vn[S];C=pf.clone(U.uniforms)}else C=b.uniforms;return C}function w(b,S){let C;for(let U=0,k=h.length;U<k;U++){const V=h[U];if(V.cacheKey===S){C=V,++C.usedTimes;break}}return C===void 0&&(C=new yg(s,S,b,r),h.push(C)),C}function E(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:P}}function Tg(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function wg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ll(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Dl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,x,g,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function o(u,d,f,x,g,m){const p=a(u,d,f,x,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,x,g,m){const p=a(u,d,f,x,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||wg),n.length>1&&n.sort(d||Ll),i.length>1&&i.sort(d||Ll)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Ag(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Dl,s.set(n,[a])):i>=r.length?(a=new Dl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Rg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new xe};break;case"SpotLight":t={position:new I,direction:new I,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function Cg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Pg=0;function Lg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Dg(s){const e=new Rg,t=Cg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new Le,a=new Le;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,x=0,g=0,m=0,p=0,v=0,_=0,M=0,w=0,E=0,A=0;c.sort(Lg);for(let b=0,S=c.length;b<S;b++){const C=c[b],U=C.color,k=C.intensity,V=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*k,u+=U.g*k,d+=U.b*k;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],k);A++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,G=t.get(C);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=W,f++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(U).multiplyScalar(k),W.distance=V,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[g]=W;const Q=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,Q.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[g]=Q.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=X,M++}g++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy(U).multiplyScalar(k),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=W,m++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const Q=C.shadow,G=t.get(C);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[x]=G,n.pointShadowMap[x]=X,n.pointShadowMatrix[x]=C.shadow.matrix,_++}n.point[x]=W,x++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(k),W.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==x||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==M||P.numSpotMaps!==w||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.directionalLength=f,P.pointLength=x,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=M,P.numSpotMaps=w,P.numLightProbes=A,n.version=Pg++)}function l(c,h){let u=0,d=0,f=0,x=0,g=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const _=c[p];if(_.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(_.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Il(s){const e=new Dg(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ig(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Il(s),e.set(i,[o])):r>=a.length?(o=new Il(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ug=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fg(s,e,t){let n=new jo;const i=new Ve,r=new Ve,a=new Je,o=new Df({depthPacking:Md}),l=new If,c={},h=t.maxTextureSize,u={[fn]:Xt,[Xt]:fn,[on]:on},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Ng,fragmentShader:Ug}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new Lt;x.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ze(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let p=this.type;this.render=function(E,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=s.getRenderTarget(),S=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),U=s.state;U.setBlending(zn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==Fn&&this.type===Fn,V=p===Fn&&this.type!==Fn;for(let X=0,W=E.length;X<W;X++){const Q=E[X],G=Q.shadow;if(G===void 0){ve("WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ee=G.getFrameExtents();if(i.multiply(ee),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,G.mapSize.y=r.y)),G.map===null||k===!0||V===!0){const be=this.type!==Fn?{minFilter:Vt,magFilter:Vt}:{};G.map!==null&&G.map.dispose(),G.map=new mi(i.x,i.y,be),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const re=G.getViewportCount();for(let be=0;be<re;be++){const $e=G.getViewport(be);a.set(r.x*$e.x,r.y*$e.y,r.x*$e.z,r.y*$e.w),U.viewport(a),G.updateMatrices(Q,be),n=G.getFrustum(),M(A,P,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===Fn&&v(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,S,C)};function v(E,A){const P=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new mi(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,P,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,P,f,g,null)}function _(E,A,P,b){let S=null;const C=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)S=C;else if(S=P.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=S.uuid,k=A.uuid;let V=c[U];V===void 0&&(V={},c[U]=V);let X=V[k];X===void 0&&(X=S.clone(),V[k]=X,A.addEventListener("dispose",w)),S=X}if(S.visible=A.visible,S.wireframe=A.wireframe,b===Fn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=s.properties.get(S);U.light=P}return S}function M(E,A,P,b,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Fn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const k=e.update(E),V=E.material;if(Array.isArray(V)){const X=k.groups;for(let W=0,Q=X.length;W<Q;W++){const G=X[W],ee=V[G.materialIndex];if(ee&&ee.visible){const re=_(E,ee,b,S);E.onBeforeShadow(s,E,A,P,k,re,G),s.renderBufferDirect(P,null,k,re,E,G),E.onAfterShadow(s,E,A,P,k,re,G)}}}else if(V.visible){const X=_(E,V,b,S);E.onBeforeShadow(s,E,A,P,k,X,null),s.renderBufferDirect(P,null,k,X,E,null),E.onAfterShadow(s,E,A,P,k,X,null)}}const U=E.children;for(let k=0,V=U.length;k<V;k++)M(U[k],A,P,b,S)}function w(E){E.target.removeEventListener("dispose",w);for(const P in c){const b=c[P],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Og={[Ba]:Va,[Ha]:Xa,[Ga]:$a,[ki]:Wa,[Va]:Ba,[Xa]:Ha,[$a]:Ga,[Wa]:ki};function kg(s,e){function t(){let D=!1;const ce=new Je;let ie=null;const se=new Je(0,0,0,0);return{setMask:function(J){ie!==J&&!D&&(s.colorMask(J,J,J,J),ie=J)},setLocked:function(J){D=J},setClear:function(J,j,fe,De,ht){ht===!0&&(J*=De,j*=De,fe*=De),ce.set(J,j,fe,De),se.equals(ce)===!1&&(s.clearColor(J,j,fe,De),se.copy(ce))},reset:function(){D=!1,ie=null,se.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,ie=null,se=null,J=null;return{setReversed:function(j){if(ce!==j){const fe=e.get("EXT_clip_control");j?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),ce=j;const De=J;J=null,this.setClear(De)}},getReversed:function(){return ce},setTest:function(j){j?Y(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(j){ie!==j&&!D&&(s.depthMask(j),ie=j)},setFunc:function(j){if(ce&&(j=Og[j]),se!==j){switch(j){case Ba:s.depthFunc(s.NEVER);break;case Va:s.depthFunc(s.ALWAYS);break;case Ha:s.depthFunc(s.LESS);break;case ki:s.depthFunc(s.LEQUAL);break;case Ga:s.depthFunc(s.EQUAL);break;case Wa:s.depthFunc(s.GEQUAL);break;case Xa:s.depthFunc(s.GREATER);break;case $a:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=j}},setLocked:function(j){D=j},setClear:function(j){J!==j&&(ce&&(j=1-j),s.clearDepth(j),J=j)},reset:function(){D=!1,ie=null,se=null,J=null,ce=!1}}}function i(){let D=!1,ce=null,ie=null,se=null,J=null,j=null,fe=null,De=null,ht=null;return{setTest:function(nt){D||(nt?Y(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!D&&(s.stencilMask(nt),ce=nt)},setFunc:function(nt,mn,nn){(ie!==nt||se!==mn||J!==nn)&&(s.stencilFunc(nt,mn,nn),ie=nt,se=mn,J=nn)},setOp:function(nt,mn,nn){(j!==nt||fe!==mn||De!==nn)&&(s.stencilOp(nt,mn,nn),j=nt,fe=mn,De=nn)},setLocked:function(nt){D=nt},setClear:function(nt){ht!==nt&&(s.clearStencil(nt),ht=nt)},reset:function(){D=!1,ce=null,ie=null,se=null,J=null,j=null,fe=null,De=null,ht=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,v=null,_=null,M=null,w=null,E=null,A=new xe(0,0,0),P=0,b=!1,S=null,C=null,U=null,k=null,V=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=Q>=2);let ee=null,re={};const be=s.getParameter(s.SCISSOR_BOX),$e=s.getParameter(s.VIEWPORT),tt=new Je().fromArray(be),ot=new Je().fromArray($e);function ct(D,ce,ie,se){const J=new Uint8Array(4),j=s.createTexture();s.bindTexture(D,j),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let fe=0;fe<ie;fe++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(ce+fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return j}const q={};q[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(s.DEPTH_TEST),a.setFunc(ki),Ge(!1),We(xc),Y(s.CULL_FACE),ft(zn);function Y(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function de(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ne(D,ce){return u[D]!==ce?(s.bindFramebuffer(D,ce),u[D]=ce,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ce),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function ye(D,ce){let ie=f,se=!1;if(D){ie=d.get(ce),ie===void 0&&(ie=[],d.set(ce,ie));const J=D.textures;if(ie.length!==J.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let j=0,fe=J.length;j<fe;j++)ie[j]=s.COLOR_ATTACHMENT0+j;ie.length=J.length,se=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,se=!0);se&&s.drawBuffers(ie)}function He(D){return x!==D?(s.useProgram(D),x=D,!0):!1}const Ct={[ui]:s.FUNC_ADD,[Xu]:s.FUNC_SUBTRACT,[$u]:s.FUNC_REVERSE_SUBTRACT};Ct[qu]=s.MIN,Ct[ju]=s.MAX;const ke={[Ku]:s.ZERO,[Yu]:s.ONE,[Zu]:s.SRC_COLOR,[ka]:s.SRC_ALPHA,[id]:s.SRC_ALPHA_SATURATE,[td]:s.DST_COLOR,[Qu]:s.DST_ALPHA,[Ju]:s.ONE_MINUS_SRC_COLOR,[za]:s.ONE_MINUS_SRC_ALPHA,[nd]:s.ONE_MINUS_DST_COLOR,[ed]:s.ONE_MINUS_DST_ALPHA,[sd]:s.CONSTANT_COLOR,[rd]:s.ONE_MINUS_CONSTANT_COLOR,[ad]:s.CONSTANT_ALPHA,[od]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(D,ce,ie,se,J,j,fe,De,ht,nt){if(D===zn){g===!0&&(de(s.BLEND),g=!1);return}if(g===!1&&(Y(s.BLEND),g=!0),D!==Wu){if(D!==m||nt!==b){if((p!==ui||M!==ui)&&(s.blendEquation(s.FUNC_ADD),p=ui,M=ui),nt)switch(D){case Ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gc:s.blendFunc(s.ONE,s.ONE);break;case _c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Oe("WebGLState: Invalid blending: ",D);break}else switch(D){case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case _c:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",D);break}v=null,_=null,w=null,E=null,A.set(0,0,0),P=0,m=D,b=nt}return}J=J||ce,j=j||ie,fe=fe||se,(ce!==p||J!==M)&&(s.blendEquationSeparate(Ct[ce],Ct[J]),p=ce,M=J),(ie!==v||se!==_||j!==w||fe!==E)&&(s.blendFuncSeparate(ke[ie],ke[se],ke[j],ke[fe]),v=ie,_=se,w=j,E=fe),(De.equals(A)===!1||ht!==P)&&(s.blendColor(De.r,De.g,De.b,ht),A.copy(De),P=ht),m=D,b=!1}function L(D,ce){D.side===on?de(s.CULL_FACE):Y(s.CULL_FACE);let ie=D.side===Xt;ce&&(ie=!ie),Ge(ie),D.blending===Ui&&D.transparent===!1?ft(zn):ft(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const se=D.stencilWrite;o.setTest(se),se&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Y(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){S!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),S=D)}function We(D){D!==Vu?(Y(s.CULL_FACE),D!==C&&(D===xc?s.cullFace(s.BACK):D===Hu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),C=D}function lt(D){D!==U&&(W&&s.lineWidth(D),U=D)}function me(D,ce,ie){D?(Y(s.POLYGON_OFFSET_FILL),(k!==ce||V!==ie)&&(s.polygonOffset(ce,ie),k=ce,V=ie)):de(s.POLYGON_OFFSET_FILL)}function xt(D){D?Y(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function Se(D){D===void 0&&(D=s.TEXTURE0+X-1),ee!==D&&(s.activeTexture(D),ee=D)}function Ie(D,ce,ie){ie===void 0&&(ee===null?ie=s.TEXTURE0+X-1:ie=ee);let se=re[ie];se===void 0&&(se={type:void 0,texture:void 0},re[ie]=se),(se.type!==D||se.texture!==ce)&&(ee!==ie&&(s.activeTexture(ie),ee=ie),s.bindTexture(D,ce||q[D]),se.type=D,se.texture=ce)}function R(){const D=re[ee];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function $(){try{s.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function K(){try{s.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function oe(){try{s.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Ee(){try{s.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ge(){try{s.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Z(){try{s.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ne(D){tt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function Re(D){ot.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ot.copy(D))}function we(D,ce){let ie=c.get(ce);ie===void 0&&(ie=new WeakMap,c.set(ce,ie));let se=ie.get(D);se===void 0&&(se=s.getUniformBlockIndex(ce,D.name),ie.set(D,se))}function he(D,ce){const se=c.get(ce).get(D);l.get(ce)!==se&&(s.uniformBlockBinding(ce,se,D.__bindingPointIndex),l.set(ce,se))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ee=null,re={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,v=null,_=null,M=null,w=null,E=null,A=new xe(0,0,0),P=0,b=!1,S=null,C=null,U=null,k=null,V=null,tt.set(0,0,s.canvas.width,s.canvas.height),ot.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:de,bindFramebuffer:Ne,drawBuffers:ye,useProgram:He,setBlending:ft,setMaterial:L,setFlipSided:Ge,setCullFace:We,setLineWidth:lt,setPolygonOffset:me,setScissorTest:xt,activeTexture:Se,bindTexture:Ie,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:ge,texImage3D:Z,updateUBOMapping:we,uniformBlockBinding:he,texStorage2D:oe,texStorage3D:Ee,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:H,compressedTexSubImage3D:_e,scissor:ne,viewport:Re,reset:Pe}}function zg(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,y){return f?new OffscreenCanvas(R,y):Rs("canvas")}function g(R,y,O){let $=1;const K=Ie(R);if((K.width>O||K.height>O)&&($=O/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const H=Math.floor($*K.width),_e=Math.floor($*K.height);u===void 0&&(u=x(H,_e));const oe=y?x(H,_e):u;return oe.width=H,oe.height=_e,oe.getContext("2d").drawImage(R,0,0,H,_e),ve("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+H+"x"+_e+")."),oe}else return"data"in R&&ve("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(R,y,O,$,K=!1){if(R!==null){if(s[R]!==void 0)return s[R];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let H=y;if(y===s.RED&&(O===s.FLOAT&&(H=s.R32F),O===s.HALF_FLOAT&&(H=s.R16F),O===s.UNSIGNED_BYTE&&(H=s.R8)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.R8UI),O===s.UNSIGNED_SHORT&&(H=s.R16UI),O===s.UNSIGNED_INT&&(H=s.R32UI),O===s.BYTE&&(H=s.R8I),O===s.SHORT&&(H=s.R16I),O===s.INT&&(H=s.R32I)),y===s.RG&&(O===s.FLOAT&&(H=s.RG32F),O===s.HALF_FLOAT&&(H=s.RG16F),O===s.UNSIGNED_BYTE&&(H=s.RG8)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.RG8UI),O===s.UNSIGNED_SHORT&&(H=s.RG16UI),O===s.UNSIGNED_INT&&(H=s.RG32UI),O===s.BYTE&&(H=s.RG8I),O===s.SHORT&&(H=s.RG16I),O===s.INT&&(H=s.RG32I)),y===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.RGB8UI),O===s.UNSIGNED_SHORT&&(H=s.RGB16UI),O===s.UNSIGNED_INT&&(H=s.RGB32UI),O===s.BYTE&&(H=s.RGB8I),O===s.SHORT&&(H=s.RGB16I),O===s.INT&&(H=s.RGB32I)),y===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),O===s.UNSIGNED_INT&&(H=s.RGBA32UI),O===s.BYTE&&(H=s.RGBA8I),O===s.SHORT&&(H=s.RGBA16I),O===s.INT&&(H=s.RGBA32I)),y===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(H=s.R11F_G11F_B10F)),y===s.RGBA){const _e=K?Rr:je.getTransfer($);O===s.FLOAT&&(H=s.RGBA32F),O===s.HALF_FLOAT&&(H=s.RGBA16F),O===s.UNSIGNED_BYTE&&(H=_e===st?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function M(R,y){let O;return R?y===null||y===pi||y===bs?O=s.DEPTH24_STENCIL8:y===hn?O=s.DEPTH32F_STENCIL8:y===Ss&&(O=s.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===pi||y===bs?O=s.DEPTH_COMPONENT24:y===hn?O=s.DEPTH_COMPONENT32F:y===Ss&&(O=s.DEPTH_COMPONENT16),O}function w(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vt&&R.minFilter!==Bt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function E(R){const y=R.target;y.removeEventListener("dispose",E),P(y),y.isVideoTexture&&h.delete(y)}function A(R){const y=R.target;y.removeEventListener("dispose",A),S(y)}function P(R){const y=n.get(R);if(y.__webglInit===void 0)return;const O=R.source,$=d.get(O);if($){const K=$[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(R),Object.keys($).length===0&&d.delete(O)}n.remove(R)}function b(R){const y=n.get(R);s.deleteTexture(y.__webglTexture);const O=R.source,$=d.get(O);delete $[y.__cacheKey],a.memory.textures--}function S(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let K=0;K<y.__webglFramebuffer[$].length;K++)s.deleteFramebuffer(y.__webglFramebuffer[$][K]);else s.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)s.deleteFramebuffer(y.__webglFramebuffer[$]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=R.textures;for(let $=0,K=O.length;$<K;$++){const H=n.get(O[$]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(R)}let C=0;function U(){C=0}function k(){const R=C;return R>=i.maxTextures&&ve("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),C+=1,R}function V(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function X(R,y){const O=n.get(R);if(R.isVideoTexture&&xt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const $=R.image;if($===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,R,y);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function W(R,y){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){q(O,R,y);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function Q(R,y){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){q(O,R,y);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function G(R,y){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Y(O,R,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const ee={[Jn]:s.REPEAT,[yn]:s.CLAMP_TO_EDGE,[Ar]:s.MIRRORED_REPEAT},re={[Vt]:s.NEAREST,[Nh]:s.NEAREST_MIPMAP_NEAREST,[us]:s.NEAREST_MIPMAP_LINEAR,[Bt]:s.LINEAR,[vr]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},be={[bd]:s.NEVER,[Cd]:s.ALWAYS,[Ed]:s.LESS,[Gh]:s.LEQUAL,[Td]:s.EQUAL,[Rd]:s.GEQUAL,[wd]:s.GREATER,[Ad]:s.NOTEQUAL};function $e(R,y){if(y.type===hn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Bt||y.magFilter===vr||y.magFilter===us||y.magFilter===On||y.minFilter===Bt||y.minFilter===vr||y.minFilter===us||y.minFilter===On)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ee[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ee[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ee[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,re[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,re[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Vt||y.minFilter!==us&&y.minFilter!==On||y.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function tt(R,y){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",E));const $=y.source;let K=d.get($);K===void 0&&(K={},d.set($,K));const H=V(y);if(H!==R.__cacheKey){K[H]===void 0&&(K[H]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[H].usedTimes++;const _e=K[R.__cacheKey];_e!==void 0&&(K[R.__cacheKey].usedTimes--,_e.usedTimes===0&&b(y)),R.__cacheKey=H,R.__webglTexture=K[H].texture}return O}function ot(R,y,O){return Math.floor(Math.floor(R/O)/y)}function ct(R,y,O,$){const H=R.updateRanges;if(H.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,O,$,y.data);else{H.sort((Z,ne)=>Z.start-ne.start);let _e=0;for(let Z=1;Z<H.length;Z++){const ne=H[_e],Re=H[Z],we=ne.start+ne.count,he=ot(Re.start,y.width,4),Pe=ot(ne.start,y.width,4);Re.start<=we+1&&he===Pe&&ot(Re.start+Re.count-1,y.width,4)===he?ne.count=Math.max(ne.count,Re.start+Re.count-ne.start):(++_e,H[_e]=Re)}H.length=_e+1;const oe=s.getParameter(s.UNPACK_ROW_LENGTH),Ee=s.getParameter(s.UNPACK_SKIP_PIXELS),ge=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Z=0,ne=H.length;Z<ne;Z++){const Re=H[Z],we=Math.floor(Re.start/4),he=Math.ceil(Re.count/4),Pe=we%y.width,D=Math.floor(we/y.width),ce=he,ie=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,Pe,D,ce,ie,O,$,y.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),s.pixelStorei(s.UNPACK_SKIP_ROWS,ge)}}function q(R,y,O){let $=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=s.TEXTURE_3D);const K=tt(R,y),H=y.source;t.bindTexture($,R.__webglTexture,s.TEXTURE0+O);const _e=n.get(H);if(H.version!==_e.__version||K===!0){t.activeTexture(s.TEXTURE0+O);const oe=je.getPrimaries(je.workingColorSpace),Ee=y.colorSpace===Kn?null:je.getPrimaries(y.colorSpace),ge=y.colorSpace===Kn||oe===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Z=g(y.image,!1,i.maxTextureSize);Z=Se(y,Z);const ne=r.convert(y.format,y.colorSpace),Re=r.convert(y.type);let we=_(y.internalFormat,ne,Re,y.colorSpace,y.isVideoTexture);$e($,y);let he;const Pe=y.mipmaps,D=y.isVideoTexture!==!0,ce=_e.__version===void 0||K===!0,ie=H.dataReady,se=w(y,Z);if(y.isDepthTexture)we=M(y.format===Ts,y.type),ce&&(D?t.texStorage2D(s.TEXTURE_2D,1,we,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,we,Z.width,Z.height,0,ne,Re,null));else if(y.isDataTexture)if(Pe.length>0){D&&ce&&t.texStorage2D(s.TEXTURE_2D,se,we,Pe[0].width,Pe[0].height);for(let J=0,j=Pe.length;J<j;J++)he=Pe[J],D?ie&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,he.width,he.height,ne,Re,he.data):t.texImage2D(s.TEXTURE_2D,J,we,he.width,he.height,0,ne,Re,he.data);y.generateMipmaps=!1}else D?(ce&&t.texStorage2D(s.TEXTURE_2D,se,we,Z.width,Z.height),ie&&ct(y,Z,ne,Re)):t.texImage2D(s.TEXTURE_2D,0,we,Z.width,Z.height,0,ne,Re,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,we,Pe[0].width,Pe[0].height,Z.depth);for(let J=0,j=Pe.length;J<j;J++)if(he=Pe[J],y.format!==Yt)if(ne!==null)if(D){if(ie)if(y.layerUpdates.size>0){const fe=hl(he.width,he.height,y.format,y.type);for(const De of y.layerUpdates){const ht=he.data.subarray(De*fe/he.data.BYTES_PER_ELEMENT,(De+1)*fe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,De,he.width,he.height,1,ne,ht)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,Z.depth,ne,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,we,he.width,he.height,Z.depth,0,he.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,Z.depth,ne,Re,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,we,he.width,he.height,Z.depth,0,ne,Re,he.data)}else{D&&ce&&t.texStorage2D(s.TEXTURE_2D,se,we,Pe[0].width,Pe[0].height);for(let J=0,j=Pe.length;J<j;J++)he=Pe[J],y.format!==Yt?ne!==null?D?ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,he.width,he.height,ne,he.data):t.compressedTexImage2D(s.TEXTURE_2D,J,we,he.width,he.height,0,he.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ie&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,he.width,he.height,ne,Re,he.data):t.texImage2D(s.TEXTURE_2D,J,we,he.width,he.height,0,ne,Re,he.data)}else if(y.isDataArrayTexture)if(D){if(ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,we,Z.width,Z.height,Z.depth),ie)if(y.layerUpdates.size>0){const J=hl(Z.width,Z.height,y.format,y.type);for(const j of y.layerUpdates){const fe=Z.data.subarray(j*J/Z.data.BYTES_PER_ELEMENT,(j+1)*J/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,Z.width,Z.height,1,ne,Re,fe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ne,Re,Z.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,Z.width,Z.height,Z.depth,0,ne,Re,Z.data);else if(y.isData3DTexture)D?(ce&&t.texStorage3D(s.TEXTURE_3D,se,we,Z.width,Z.height,Z.depth),ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ne,Re,Z.data)):t.texImage3D(s.TEXTURE_3D,0,we,Z.width,Z.height,Z.depth,0,ne,Re,Z.data);else if(y.isFramebufferTexture){if(ce)if(D)t.texStorage2D(s.TEXTURE_2D,se,we,Z.width,Z.height);else{let J=Z.width,j=Z.height;for(let fe=0;fe<se;fe++)t.texImage2D(s.TEXTURE_2D,fe,we,J,j,0,ne,Re,null),J>>=1,j>>=1}}else if(Pe.length>0){if(D&&ce){const J=Ie(Pe[0]);t.texStorage2D(s.TEXTURE_2D,se,we,J.width,J.height)}for(let J=0,j=Pe.length;J<j;J++)he=Pe[J],D?ie&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ne,Re,he):t.texImage2D(s.TEXTURE_2D,J,we,ne,Re,he);y.generateMipmaps=!1}else if(D){if(ce){const J=Ie(Z);t.texStorage2D(s.TEXTURE_2D,se,we,J.width,J.height)}ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne,Re,Z)}else t.texImage2D(s.TEXTURE_2D,0,we,ne,Re,Z);m(y)&&p($),_e.__version=H.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Y(R,y,O){if(y.image.length!==6)return;const $=tt(R,y),K=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+O);const H=n.get(K);if(K.version!==H.__version||$===!0){t.activeTexture(s.TEXTURE0+O);const _e=je.getPrimaries(je.workingColorSpace),oe=y.colorSpace===Kn?null:je.getPrimaries(y.colorSpace),Ee=y.colorSpace===Kn||_e===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const ge=y.isCompressedTexture||y.image[0].isCompressedTexture,Z=y.image[0]&&y.image[0].isDataTexture,ne=[];for(let j=0;j<6;j++)!ge&&!Z?ne[j]=g(y.image[j],!0,i.maxCubemapSize):ne[j]=Z?y.image[j].image:y.image[j],ne[j]=Se(y,ne[j]);const Re=ne[0],we=r.convert(y.format,y.colorSpace),he=r.convert(y.type),Pe=_(y.internalFormat,we,he,y.colorSpace),D=y.isVideoTexture!==!0,ce=H.__version===void 0||$===!0,ie=K.dataReady;let se=w(y,Re);$e(s.TEXTURE_CUBE_MAP,y);let J;if(ge){D&&ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,se,Pe,Re.width,Re.height);for(let j=0;j<6;j++){J=ne[j].mipmaps;for(let fe=0;fe<J.length;fe++){const De=J[fe];y.format!==Yt?we!==null?D?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,De.width,De.height,we,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Pe,De.width,De.height,0,De.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,De.width,De.height,we,he,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Pe,De.width,De.height,0,we,he,De.data)}}}else{if(J=y.mipmaps,D&&ce){J.length>0&&se++;const j=Ie(ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,se,Pe,j.width,j.height)}for(let j=0;j<6;j++)if(Z){D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ne[j].width,ne[j].height,we,he,ne[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Pe,ne[j].width,ne[j].height,0,we,he,ne[j].data);for(let fe=0;fe<J.length;fe++){const ht=J[fe].image[j].image;D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,ht.width,ht.height,we,he,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Pe,ht.width,ht.height,0,we,he,ht.data)}}else{D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,he,ne[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Pe,we,he,ne[j]);for(let fe=0;fe<J.length;fe++){const De=J[fe];D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,we,he,De.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Pe,we,he,De.image[j])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),H.__version=K.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function de(R,y,O,$,K,H){const _e=r.convert(O.format,O.colorSpace),oe=r.convert(O.type),Ee=_(O.internalFormat,_e,oe,O.colorSpace),ge=n.get(y),Z=n.get(O);if(Z.__renderTarget=y,!ge.__hasExternalTextures){const ne=Math.max(1,y.width>>H),Re=Math.max(1,y.height>>H);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,H,Ee,ne,Re,y.depth,0,_e,oe,null):t.texImage2D(K,H,Ee,ne,Re,0,_e,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),me(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,K,Z.__webglTexture,0,lt(y)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,K,Z.__webglTexture,H),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(R,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){const $=y.depthTexture,K=$&&$.isDepthTexture?$.type:null,H=M(y.stencilBuffer,K),_e=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=lt(y);me(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,H,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,H,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,H,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,R)}else{const $=y.textures;for(let K=0;K<$.length;K++){const H=$[K],_e=r.convert(H.format,H.colorSpace),oe=r.convert(H.type),Ee=_(H.internalFormat,_e,oe,H.colorSpace),ge=lt(y);O&&me(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,Ee,y.width,y.height):me(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,Ee,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const K=$.__webglTexture,H=lt(y);if(y.depthTexture.format===Es)me(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(y.depthTexture.format===Ts)me(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function He(R){const y=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=$}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?ye(y.__webglFramebuffer[0],R):ye(y.__webglFramebuffer,R)}else if(O){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=s.createRenderbuffer(),Ne(y.__webglDepthbuffer[$],R,!1);else{const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,H)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Ne(y.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,H)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(R,y,O){const $=n.get(R);y!==void 0&&de($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&He(R)}function ke(R){const y=R.texture,O=n.get(R),$=n.get(y);R.addEventListener("dispose",A);const K=R.textures,H=R.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=y.version,a.memory.textures++),H){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)O.__webglFramebuffer[oe][Ee]=s.createFramebuffer()}else O.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)O.__webglFramebuffer[oe]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(_e)for(let oe=0,Ee=K.length;oe<Ee;oe++){const ge=n.get(K[oe]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&me(R)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<K.length;oe++){const Ee=K[oe];O.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);const ge=r.convert(Ee.format,Ee.colorSpace),Z=r.convert(Ee.type),ne=_(Ee.internalFormat,ge,Z,Ee.colorSpace,R.isXRRenderTarget===!0),Re=lt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,ne,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),$e(s.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)de(O.__webglFramebuffer[oe][Ee],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee);else de(O.__webglFramebuffer[oe],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(y)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let oe=0,Ee=K.length;oe<Ee;oe++){const ge=K[oe],Z=n.get(ge);let ne=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),$e(ne,ge),de(O.__webglFramebuffer,R,ge,s.COLOR_ATTACHMENT0+oe,ne,0),m(ge)&&p(ne)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),$e(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)de(O.__webglFramebuffer[Ee],R,y,s.COLOR_ATTACHMENT0,oe,Ee);else de(O.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,oe,0);m(y)&&p(oe),t.unbindTexture()}R.depthBuffer&&He(R)}function ft(R){const y=R.textures;for(let O=0,$=y.length;O<$;O++){const K=y[O];if(m(K)){const H=v(R),_e=n.get(K).__webglTexture;t.bindTexture(H,_e),p(H),t.unbindTexture()}}}const L=[],Ge=[];function We(R){if(R.samples>0){if(me(R)===!1){const y=R.textures,O=R.width,$=R.height;let K=s.COLOR_BUFFER_BIT;const H=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(R),oe=y.length>1;if(oe)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);const Z=n.get(y[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0)}s.blitFramebuffer(0,0,O,$,0,0,O,$,K,s.NEAREST),l===!0&&(L.length=0,Ge.length=0,L.push(s.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(L.push(H),Ge.push(H),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);const Z=n.get(y[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,Z,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function lt(R){return Math.min(i.maxSamples,R.samples)}function me(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function xt(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Se(R,y){const O=R.colorSpace,$=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Ht&&O!==Kn&&(je.getTransfer(O)===st?($!==Yt||K!==En)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",O)),y}function Ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=Ct,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=de,this.useMultisampledRTT=me}function Bg(s,e){function t(n,i=Kn){let r;const a=je.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===Fo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uh)return s.BYTE;if(n===Fh)return s.SHORT;if(n===Ss)return s.UNSIGNED_SHORT;if(n===Uo)return s.INT;if(n===pi)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===qi)return s.HALF_FLOAT;if(n===zh)return s.ALPHA;if(n===Bh)return s.RGB;if(n===Yt)return s.RGBA;if(n===Es)return s.DEPTH_COMPONENT;if(n===Ts)return s.DEPTH_STENCIL;if(n===ko)return s.RED;if(n===zo)return s.RED_INTEGER;if(n===Bo)return s.RG;if(n===Vo)return s.RG_INTEGER;if(n===Ho)return s.RGBA_INTEGER;if(n===yr||n===Mr||n===Sr||n===br)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===Ya||n===Za||n===Ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===eo||n===to)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===eo)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===to)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===no||n===io||n===so||n===ro||n===ao||n===oo||n===co||n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===xo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===no)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===io)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===co)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ho)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===po)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===_o||n===vo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===go)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yo||n===Mo||n===So||n===bo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tn({vertexShader:Vg,fragmentShader:Hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wg extends ji{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,x=null;const g=typeof XRWebGLBinding<"u",m=new Gg,p={},v=t.getContextAttributes();let _=null,M=null;const w=[],E=[],A=new Ve;let P=null;const b=new zt;b.viewport=new Je;const S=new zt;S.viewport=new Je;const C=[b,S],U=new ep;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=w[q];return Y===void 0&&(Y=new fa,w[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=w[q];return Y===void 0&&(Y=new fa,w[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=w[q];return Y===void 0&&(Y=new fa,w[q]=Y),Y.getHandSpace()};function X(q){const Y=E.indexOf(q.inputSource);if(Y===-1)return;const de=w[Y];de!==void 0&&(de.update(q.inputSource,q.frame,c||a),de.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Q);for(let q=0;q<w.length;q++){const Y=E[q];Y!==null&&(E[q]=null,w[q].disconnect(Y))}k=null,V=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(_),f=null,d=null,u=null,i=null,M=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ne=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?Ts:Es,Ne=v.stencil?bs:pi);const He={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(He),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new mi(d.textureWidth,d.textureHeight,{format:Yt,type:En,depthTexture:new tu(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new mi(f.framebufferWidth,f.framebufferHeight,{format:Yt,type:En,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(q){for(let Y=0;Y<q.removed.length;Y++){const de=q.removed[Y],Ne=E.indexOf(de);Ne>=0&&(E[Ne]=null,w[Ne].disconnect(de))}for(let Y=0;Y<q.added.length;Y++){const de=q.added[Y];let Ne=E.indexOf(de);if(Ne===-1){for(let He=0;He<w.length;He++)if(He>=E.length){E.push(de),Ne=He;break}else if(E[He]===null){E[He]=de,Ne=He;break}if(Ne===-1)break}const ye=w[Ne];ye&&ye.connect(de)}}const G=new I,ee=new I;function re(q,Y,de){G.setFromMatrixPosition(Y.matrixWorld),ee.setFromMatrixPosition(de.matrixWorld);const Ne=G.distanceTo(ee),ye=Y.projectionMatrix.elements,He=de.projectionMatrix.elements,Ct=ye[14]/(ye[10]-1),ke=ye[14]/(ye[10]+1),ft=(ye[9]+1)/ye[5],L=(ye[9]-1)/ye[5],Ge=(ye[8]-1)/ye[0],We=(He[8]+1)/He[0],lt=Ct*Ge,me=Ct*We,xt=Ne/(-Ge+We),Se=xt*-Ge;if(Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Se),q.translateZ(xt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Ie=Ct+xt,R=ke+xt,y=lt-Se,O=me+(Ne-Se),$=ft*ke/R*Ie,K=L*ke/R*Ie;q.projectionMatrix.makePerspective(y,O,$,K,Ie,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function be(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Y=q.near,de=q.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(de=m.depthFar)),U.near=S.near=b.near=Y,U.far=S.far=b.far=de,(k!==U.near||V!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,V=U.far),U.layers.mask=q.layers.mask|6,b.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;const Ne=q.parent,ye=U.cameras;be(U,Ne);for(let He=0;He<ye.length;He++)be(ye[He],Ne);ye.length===2?re(U,b,S):U.projectionMatrix.copy(b.projectionMatrix),$e(q,U,Ne)};function $e(q,Y,de){de===null?q.matrix.copy(Y.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(Y.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Vi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(q){return p[q]};let tt=null;function ot(q,Y){if(h=Y.getViewerPose(c||a),x=Y,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ne=!1;de.length!==U.cameras.length&&(U.cameras.length=0,Ne=!0);for(let ke=0;ke<de.length;ke++){const ft=de[ke];let L=null;if(f!==null)L=f.getViewport(ft);else{const We=u.getViewSubImage(d,ft);L=We.viewport,ke===0&&(e.setRenderTargetTextures(M,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(M))}let Ge=C[ke];Ge===void 0&&(Ge=new zt,Ge.layers.enable(ke),Ge.viewport=new Je,C[ke]=Ge),Ge.matrix.fromArray(ft.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(ft.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(L.x,L.y,L.width,L.height),ke===0&&(U.matrix.copy(Ge.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ne===!0&&U.cameras.push(Ge)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const ke=u.getDepthInformation(de[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,i.renderState)}if(ye&&ye.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let ke=0;ke<de.length;ke++){const ft=de[ke].camera;if(ft){let L=p[ft];L||(L=new nu,p[ft]=L);const Ge=u.getCameraImage(ft);L.sourceTexture=Ge}}}}for(let de=0;de<w.length;de++){const Ne=E[de],ye=w[de];Ne!==null&&ye!==void 0&&ye.update(Ne,Y,c||a)}tt&&tt(q,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),x=null}const ct=new ou;ct.setAnimationLoop(ot),this.setAnimationLoop=function(q){tt=q},this.dispose=function(){}}}const oi=new tn,Xg=new Le;function $g(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),_=v.envMap,M=v.envMapRotation;_&&(m.envMap.value=_,oi.copy(M),oi.x*=-1,oi.y*=-1,oi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(oi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qg(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const M=_.program;n.uniformBlockBinding(v,M)}function c(v,_){let M=i[v.id];M===void 0&&(x(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",m));const w=_.program;n.updateUBOMapping(v,w);const E=e.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){const _=u();v.__bindingPointIndex=_;const M=s.createBuffer(),w=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,w,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,M),M}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=i[v.id],M=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,A=M.length;E<A;E++){const P=Array.isArray(M[E])?M[E]:[M[E]];for(let b=0,S=P.length;b<S;b++){const C=P[b];if(f(C,E,b,w)===!0){const U=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let X=0;X<k.length;X++){const W=k[X],Q=g(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,U+V,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,V),V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,_,M,w){const E=v.value,A=_+"_"+M;if(w[A]===void 0)return typeof E=="number"||typeof E=="boolean"?w[A]=E:w[A]=E.clone(),!0;{const P=w[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return w[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function x(v){const _=v.uniforms;let M=0;const w=16;for(let A=0,P=_.length;A<P;A++){const b=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,C=b.length;S<C;S++){const U=b[S],k=Array.isArray(U.value)?U.value:[U.value];for(let V=0,X=k.length;V<X;V++){const W=k[V],Q=g(W),G=M%w,ee=G%Q.boundary,re=G+ee;M+=ee,re!==0&&w-re<Q.storage&&(M+=w-re),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Q.storage}}}const E=M%w;return E>0&&(M+=w-E),v.__size=M,v.__cache={},this}function g(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ve("WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}const jg=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Nn=null;function Kg(){return Nn===null&&(Nn=new Ki(jg,32,32,Bo,qi),Nn.minFilter=Bt,Nn.magFilter=Bt,Nn.wrapS=yn,Nn.wrapT=yn,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class _M{constructor(e={}){const{canvas:t=Pd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const x=new Set([Ho,Vo,zo]),g=new Set([En,pi,Ss,bs,Fo,Oo]),m=new Uint32Array(4),p=new Int32Array(4);let v=null,_=null;const M=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let A=!1;this._outputColorSpace=pt;let P=0,b=0,S=null,C=-1,U=null;const k=new Je,V=new Je;let X=null;const W=new xe(0);let Q=0,G=t.width,ee=t.height,re=1,be=null,$e=null;const tt=new Je(0,0,G,ee),ot=new Je(0,0,G,ee);let ct=!1;const q=new jo;let Y=!1,de=!1;const Ne=new Le,ye=new I,He=new Je,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ft(){return S===null?re:1}let L=n;function Ge(T,N){return t.getContext(T,N)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${No}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){const N="webgl2";if(L=Ge(N,T),L===null)throw Ge(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let We,lt,me,xt,Se,Ie,R,y,O,$,K,H,_e,oe,Ee,ge,Z,ne,Re,we,he,Pe,D,ce;function ie(){We=new sx(L),We.init(),Pe=new Bg(L,We),lt=new K0(L,We,e,Pe),me=new kg(L,We),lt.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),xt=new ox(L),Se=new Tg,Ie=new zg(L,We,me,Se,lt,Pe,xt),R=new Z0(E),y=new ix(E),O=new up(L),D=new q0(L,O),$=new rx(L,O,xt,D),K=new lx(L,$,O,xt),Re=new cx(L,lt,Ie),ge=new Y0(Se),H=new Eg(E,R,y,We,lt,D,ge),_e=new $g(E,Se),oe=new Ag,Ee=new Ig(We),ne=new $0(E,R,y,me,K,f,l),Z=new Fg(E,K,lt),ce=new qg(L,xt,lt,me),we=new j0(L,We,xt),he=new ax(L,We,xt),xt.programs=H.programs,E.capabilities=lt,E.extensions=We,E.properties=Se,E.renderLists=oe,E.shadowMap=Z,E.state=me,E.info=xt}ie();const se=new Wg(E,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=We.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=We.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(G,ee,!1))},this.getSize=function(T){return T.set(G,ee)},this.setSize=function(T,N,z=!0){if(se.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,ee=N,t.width=Math.floor(T*re),t.height=Math.floor(N*re),z===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(G*re,ee*re).floor()},this.setDrawingBufferSize=function(T,N,z){G=T,ee=N,re=z,t.width=Math.floor(T*z),t.height=Math.floor(N*z),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(tt)},this.setViewport=function(T,N,z,B){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,N,z,B),me.viewport(k.copy(tt).multiplyScalar(re).round())},this.getScissor=function(T){return T.copy(ot)},this.setScissor=function(T,N,z,B){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,N,z,B),me.scissor(V.copy(ot).multiplyScalar(re).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(T){me.setScissorTest(ct=T)},this.setOpaqueSort=function(T){be=T},this.setTransparentSort=function(T){$e=T},this.getClearColor=function(T){return T.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,z=!0){let B=0;if(T){let F=!1;if(S!==null){const te=S.texture.format;F=x.has(te)}if(F){const te=S.texture.type,le=g.has(te),pe=ne.getClearColor(),ue=ne.getClearAlpha(),Ae=pe.r,Ce=pe.g,Me=pe.b;le?(m[0]=Ae,m[1]=Ce,m[2]=Me,m[3]=ue,L.clearBufferuiv(L.COLOR,0,m)):(p[0]=Ae,p[1]=Ce,p[2]=Me,p[3]=ue,L.clearBufferiv(L.COLOR,0,p))}else B|=L.COLOR_BUFFER_BIT}N&&(B|=L.DEPTH_BUFFER_BIT),z&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ne.dispose(),oe.dispose(),Ee.dispose(),Se.dispose(),R.dispose(),y.dispose(),K.dispose(),D.dispose(),ce.dispose(),H.dispose(),se.dispose(),se.removeEventListener("sessionstart",lc),se.removeEventListener("sessionend",hc),ei.stop()};function J(T){T.preventDefault(),Pr("WebGLRenderer: Context Lost."),A=!0}function j(){Pr("WebGLRenderer: Context Restored."),A=!1;const T=xt.autoReset,N=Z.enabled,z=Z.autoUpdate,B=Z.needsUpdate,F=Z.type;ie(),xt.autoReset=T,Z.enabled=N,Z.autoUpdate=z,Z.needsUpdate=B,Z.type=F}function fe(T){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function De(T){const N=T.target;N.removeEventListener("dispose",De),ht(N)}function ht(T){nt(T),Se.remove(T)}function nt(T){const N=Se.get(T).programs;N!==void 0&&(N.forEach(function(z){H.releaseProgram(z)}),T.isShaderMaterial&&H.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,z,B,F,te){N===null&&(N=Ct);const le=F.isMesh&&F.matrixWorld.determinant()<0,pe=Uu(T,N,z,B,F);me.setMaterial(B,le);let ue=z.index,Ae=1;if(B.wireframe===!0){if(ue=$.getWireframeAttribute(z),ue===void 0)return;Ae=2}const Ce=z.drawRange,Me=z.attributes.position;let Xe=Ce.start*Ae,it=(Ce.start+Ce.count)*Ae;te!==null&&(Xe=Math.max(Xe,te.start*Ae),it=Math.min(it,(te.start+te.count)*Ae)),ue!==null?(Xe=Math.max(Xe,0),it=Math.min(it,ue.count)):Me!=null&&(Xe=Math.max(Xe,0),it=Math.min(it,Me.count));const yt=it-Xe;if(yt<0||yt===1/0)return;D.setup(F,B,pe,z,ue);let Mt,rt=we;if(ue!==null&&(Mt=O.get(ue),rt=he,rt.setIndex(Mt)),F.isMesh)B.wireframe===!0?(me.setLineWidth(B.wireframeLinewidth*ft()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(F.isLine){let Te=B.linewidth;Te===void 0&&(Te=1),me.setLineWidth(Te*ft()),F.isLineSegments?rt.setMode(L.LINES):F.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else F.isPoints?rt.setMode(L.POINTS):F.isSprite&&rt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Cs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))rt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Te=F._multiDrawStarts,gt=F._multiDrawCounts,Ke=F._multiDrawCount,$t=ue?O.get(ue).bytesPerElement:1,xi=Se.get(B).currentProgram.getUniforms();for(let qt=0;qt<Ke;qt++)xi.setValue(L,"_gl_DrawID",qt),rt.render(Te[qt]/$t,gt[qt])}else if(F.isInstancedMesh)rt.renderInstances(Xe,yt,F.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gt=Math.min(z.instanceCount,Te);rt.renderInstances(Xe,yt,gt)}else rt.render(Xe,yt)};function mn(T,N,z){T.transparent===!0&&T.side===on&&T.forceSinglePass===!1?(T.side=Xt,T.needsUpdate=!0,ks(T,N,z),T.side=fn,T.needsUpdate=!0,ks(T,N,z),T.side=on):ks(T,N,z)}this.compile=function(T,N,z=null){z===null&&(z=T),_=Ee.get(z),_.init(N),w.push(_),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),T!==z&&T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),_.setupLights();const B=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const te=F.material;if(te)if(Array.isArray(te))for(let le=0;le<te.length;le++){const pe=te[le];mn(pe,z,F),B.add(pe)}else mn(te,z,F),B.add(te)}),_=w.pop(),B},this.compileAsync=function(T,N,z=null){const B=this.compile(T,N,z);return new Promise(F=>{function te(){if(B.forEach(function(le){Se.get(le).currentProgram.isReady()&&B.delete(le)}),B.size===0){F(T);return}setTimeout(te,10)}We.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let nn=null;function Nu(T){nn&&nn(T)}function lc(){ei.stop()}function hc(){ei.start()}const ei=new ou;ei.setAnimationLoop(Nu),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(T){nn=T,se.setAnimationLoop(T),T===null?ei.stop():ei.start()},se.addEventListener("sessionstart",lc),se.addEventListener("sessionend",hc),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(N),N=se.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,N,S),_=Ee.get(T,w.length),_.init(N),w.push(_),Ne.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Ne,Mn,N.reversedDepth),de=this.localClippingEnabled,Y=ge.init(this.clippingPlanes,de),v=oe.get(T,M.length),v.init(),M.push(v),se.enabled===!0&&se.isPresenting===!0){const te=E.xr.getDepthSensingMesh();te!==null&&Wr(te,N,-1/0,E.sortObjects)}Wr(T,N,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(be,$e),ke=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ke&&ne.addToRenderList(v,T),this.info.render.frame++,Y===!0&&ge.beginShadows();const z=_.state.shadowsArray;Z.render(z,T,N),Y===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=v.opaque,F=v.transmissive;if(_.setupLights(),N.isArrayCamera){const te=N.cameras;if(F.length>0)for(let le=0,pe=te.length;le<pe;le++){const ue=te[le];dc(B,F,T,ue)}ke&&ne.render(T);for(let le=0,pe=te.length;le<pe;le++){const ue=te[le];uc(v,T,ue,ue.viewport)}}else F.length>0&&dc(B,F,T,N),ke&&ne.render(T),uc(v,T,N);S!==null&&b===0&&(Ie.updateMultisampleRenderTarget(S),Ie.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(E,T,N),D.resetDefaultState(),C=-1,U=null,w.pop(),w.length>0?(_=w[w.length-1],Y===!0&&ge.setGlobalState(E.clippingPlanes,_.state.camera)):_=null,M.pop(),M.length>0?v=M[M.length-1]:v=null};function Wr(T,N,z,B){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){B&&He.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ne);const le=K.update(T),pe=T.material;pe.visible&&v.push(T,le,pe,z,He.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const le=K.update(T),pe=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),He.copy(T.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),He.copy(le.boundingSphere.center)),He.applyMatrix4(T.matrixWorld).applyMatrix4(Ne)),Array.isArray(pe)){const ue=le.groups;for(let Ae=0,Ce=ue.length;Ae<Ce;Ae++){const Me=ue[Ae],Xe=pe[Me.materialIndex];Xe&&Xe.visible&&v.push(T,le,Xe,z,He.z,Me)}}else pe.visible&&v.push(T,le,pe,z,He.z,null)}}const te=T.children;for(let le=0,pe=te.length;le<pe;le++)Wr(te[le],N,z,B)}function uc(T,N,z,B){const{opaque:F,transmissive:te,transparent:le}=T;_.setupLightsView(z),Y===!0&&ge.setGlobalState(E.clippingPlanes,z),B&&me.viewport(k.copy(B)),F.length>0&&Os(F,N,z),te.length>0&&Os(te,N,z),le.length>0&&Os(le,N,z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function dc(T,N,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[B.id]===void 0&&(_.state.transmissionRenderTarget[B.id]=new mi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?qi:En,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const te=_.state.transmissionRenderTarget[B.id],le=B.viewport||k;te.setSize(le.z*E.transmissionResolutionScale,le.w*E.transmissionResolutionScale);const pe=E.getRenderTarget(),ue=E.getActiveCubeFace(),Ae=E.getActiveMipmapLevel();E.setRenderTarget(te),E.getClearColor(W),Q=E.getClearAlpha(),Q<1&&E.setClearColor(16777215,.5),E.clear(),ke&&ne.render(z);const Ce=E.toneMapping;E.toneMapping=Zn;const Me=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),_.setupLightsView(B),Y===!0&&ge.setGlobalState(E.clippingPlanes,B),Os(T,z,B),Ie.updateMultisampleRenderTarget(te),Ie.updateRenderTargetMipmap(te),We.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let it=0,yt=N.length;it<yt;it++){const Mt=N[it],{object:rt,geometry:Te,material:gt,group:Ke}=Mt;if(gt.side===on&&rt.layers.test(B.layers)){const $t=gt.side;gt.side=Xt,gt.needsUpdate=!0,fc(rt,z,B,Te,gt,Ke),gt.side=$t,gt.needsUpdate=!0,Xe=!0}}Xe===!0&&(Ie.updateMultisampleRenderTarget(te),Ie.updateRenderTargetMipmap(te))}E.setRenderTarget(pe,ue,Ae),E.setClearColor(W,Q),Me!==void 0&&(B.viewport=Me),E.toneMapping=Ce}function Os(T,N,z){const B=N.isScene===!0?N.overrideMaterial:null;for(let F=0,te=T.length;F<te;F++){const le=T[F],{object:pe,geometry:ue,group:Ae}=le;let Ce=le.material;Ce.allowOverride===!0&&B!==null&&(Ce=B),pe.layers.test(z.layers)&&fc(pe,N,z,ue,Ce,Ae)}}function fc(T,N,z,B,F,te){T.onBeforeRender(E,N,z,B,F,te),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(E,N,z,B,T,te),F.transparent===!0&&F.side===on&&F.forceSinglePass===!1?(F.side=Xt,F.needsUpdate=!0,E.renderBufferDirect(z,N,B,F,T,te),F.side=fn,F.needsUpdate=!0,E.renderBufferDirect(z,N,B,F,T,te),F.side=on):E.renderBufferDirect(z,N,B,F,T,te),T.onAfterRender(E,N,z,B,F,te)}function ks(T,N,z){N.isScene!==!0&&(N=Ct);const B=Se.get(T),F=_.state.lights,te=_.state.shadowsArray,le=F.state.version,pe=H.getParameters(T,F.state,te,N,z),ue=H.getProgramCacheKey(pe);let Ae=B.programs;B.environment=T.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(T.isMeshStandardMaterial?y:R).get(T.envMap||B.environment),B.envMapRotation=B.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",De),Ae=new Map,B.programs=Ae);let Ce=Ae.get(ue);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===le)return mc(T,pe),Ce}else pe.uniforms=H.getUniforms(T),T.onBeforeCompile(pe,E),Ce=H.acquireProgram(pe,ue),Ae.set(ue,Ce),B.uniforms=pe.uniforms;const Me=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Me.clippingPlanes=ge.uniform),mc(T,pe),B.needsLights=Ou(T),B.lightsStateVersion=le,B.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMap.value=F.state.directionalShadowMap,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotShadowMap.value=F.state.spotShadowMap,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMap.value=F.state.pointShadowMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function pc(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Er.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function mc(T,N){const z=Se.get(T);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Uu(T,N,z,B,F){N.isScene!==!0&&(N=Ct),Ie.resetTextureUnits();const te=N.fog,le=B.isMeshStandardMaterial?N.environment:null,pe=S===null?E.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ht,ue=(B.isMeshStandardMaterial?y:R).get(B.envMap||le),Ae=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ce=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!z.morphAttributes.position,Xe=!!z.morphAttributes.normal,it=!!z.morphAttributes.color;let yt=Zn;B.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(yt=E.toneMapping);const Mt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,rt=Mt!==void 0?Mt.length:0,Te=Se.get(B),gt=_.state.lights;if(Y===!0&&(de===!0||T!==U)){const Ft=T===U&&B.id===C;ge.setState(B,T,Ft)}let Ke=!1;B.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==gt.state.version||Te.outputColorSpace!==pe||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==ue||B.fog===!0&&Te.fog!==te||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ge.numPlanes||Te.numIntersection!==ge.numIntersection)||Te.vertexAlphas!==Ae||Te.vertexTangents!==Ce||Te.morphTargets!==Me||Te.morphNormals!==Xe||Te.morphColors!==it||Te.toneMapping!==yt||Te.morphTargetsCount!==rt)&&(Ke=!0):(Ke=!0,Te.__version=B.version);let $t=Te.currentProgram;Ke===!0&&($t=ks(B,N,F));let xi=!1,qt=!1,es=!1;const _t=$t.getUniforms(),Gt=Te.uniforms;if(me.useProgram($t.program)&&(xi=!0,qt=!0,es=!0),B.id!==C&&(C=B.id,qt=!0),xi||U!==T){me.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_t.setValue(L,"projectionMatrix",T.projectionMatrix),_t.setValue(L,"viewMatrix",T.matrixWorldInverse);const Wt=_t.map.cameraPosition;Wt!==void 0&&Wt.setValue(L,ye.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_t.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,qt=!0,es=!0)}if(F.isSkinnedMesh){_t.setOptional(L,F,"bindMatrix"),_t.setOptional(L,F,"bindMatrixInverse");const Ft=F.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),_t.setValue(L,"boneTexture",Ft.boneTexture,Ie))}F.isBatchedMesh&&(_t.setOptional(L,F,"batchingTexture"),_t.setValue(L,"batchingTexture",F._matricesTexture,Ie),_t.setOptional(L,F,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",F._indirectTexture,Ie),_t.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",F._colorsTexture,Ie));const Zt=z.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&Re.update(F,z,$t),(qt||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,_t.setValue(L,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Gt.envMap.value=ue,Gt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(Gt.envMapIntensity.value=N.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=Kg()),qt&&(_t.setValue(L,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&Fu(Gt,es),te&&B.fog===!0&&_e.refreshFogUniforms(Gt,te),_e.refreshMaterialUniforms(Gt,B,re,ee,_.state.transmissionRenderTarget[T.id]),Er.upload(L,pc(Te),Gt,Ie)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Er.upload(L,pc(Te),Gt,Ie),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_t.setValue(L,"center",F.center),_t.setValue(L,"modelViewMatrix",F.modelViewMatrix),_t.setValue(L,"normalMatrix",F.normalMatrix),_t.setValue(L,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ft=B.uniformsGroups;for(let Wt=0,Xr=Ft.length;Wt<Xr;Wt++){const ti=Ft[Wt];ce.update(ti,$t),ce.bind(ti,$t)}}return $t}function Fu(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Ou(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,N,z){const B=Se.get(T);B.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Se.get(T.texture).__webglTexture=N,Se.get(T.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){const z=Se.get(T);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const ku=L.createFramebuffer();this.setRenderTarget=function(T,N=0,z=0){S=T,P=N,b=z;let B=!0,F=null,te=!1,le=!1;if(T){const ue=Se.get(T);if(ue.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(L.FRAMEBUFFER,null),B=!1;else if(ue.__webglFramebuffer===void 0)Ie.setupRenderTarget(T);else if(ue.__hasExternalTextures)Ie.rebindTextures(T,Se.get(T.texture).__webglTexture,Se.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Me=T.depthTexture;if(ue.__boundDepthTexture!==Me){if(Me!==null&&Se.has(Me)&&(T.width!==Me.image.width||T.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(T)}}const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(le=!0);const Ce=Se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?F=Ce[N][z]:F=Ce[N],te=!0):T.samples>0&&Ie.useMultisampledRTT(T)===!1?F=Se.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?F=Ce[z]:F=Ce,k.copy(T.viewport),V.copy(T.scissor),X=T.scissorTest}else k.copy(tt).multiplyScalar(re).floor(),V.copy(ot).multiplyScalar(re).floor(),X=ct;if(z!==0&&(F=ku),me.bindFramebuffer(L.FRAMEBUFFER,F)&&B&&me.drawBuffers(T,F),me.viewport(k),me.scissor(V),me.setScissorTest(X),te){const ue=Se.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,z)}else if(le){const ue=N;for(let Ae=0;Ae<T.textures.length;Ae++){const Ce=Se.get(T.textures[Ae]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,z,ue)}}else if(T!==null&&z!==0){const ue=Se.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,z)}C=-1},this.readRenderTargetPixels=function(T,N,z,B,F,te,le,pe=0){if(!(T&&T.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue){me.bindFramebuffer(L.FRAMEBUFFER,ue);try{const Ae=T.textures[pe],Ce=Ae.format,Me=Ae.type;if(!lt.textureFormatReadable(Ce)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Me)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-B&&z>=0&&z<=T.height-F&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),L.readPixels(N,z,B,F,Pe.convert(Ce),Pe.convert(Me),te))}finally{const Ae=S!==null?Se.get(S).__webglFramebuffer:null;me.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(T,N,z,B,F,te,le,pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue)if(N>=0&&N<=T.width-B&&z>=0&&z<=T.height-F){me.bindFramebuffer(L.FRAMEBUFFER,ue);const Ae=T.textures[pe],Ce=Ae.format,Me=Ae.type;if(!lt.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Xe),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),L.readPixels(N,z,B,F,Pe.convert(Ce),Pe.convert(Me),0);const it=S!==null?Se.get(S).__webglFramebuffer:null;me.bindFramebuffer(L.FRAMEBUFFER,it);const yt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ld(L,yt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Xe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(Xe),L.deleteSync(yt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,z=0){const B=Math.pow(2,-z),F=Math.floor(T.image.width*B),te=Math.floor(T.image.height*B),le=N!==null?N.x:0,pe=N!==null?N.y:0;Ie.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,le,pe,F,te),me.unbindTexture()};const zu=L.createFramebuffer(),Bu=L.createFramebuffer();this.copyTextureToTexture=function(T,N,z=null,B=null,F=0,te=null){te===null&&(F!==0?(Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=F,F=0):te=0);let le,pe,ue,Ae,Ce,Me,Xe,it,yt;const Mt=T.isCompressedTexture?T.mipmaps[te]:T.image;if(z!==null)le=z.max.x-z.min.x,pe=z.max.y-z.min.y,ue=z.isBox3?z.max.z-z.min.z:1,Ae=z.min.x,Ce=z.min.y,Me=z.isBox3?z.min.z:0;else{const Zt=Math.pow(2,-F);le=Math.floor(Mt.width*Zt),pe=Math.floor(Mt.height*Zt),T.isDataArrayTexture?ue=Mt.depth:T.isData3DTexture?ue=Math.floor(Mt.depth*Zt):ue=1,Ae=0,Ce=0,Me=0}B!==null?(Xe=B.x,it=B.y,yt=B.z):(Xe=0,it=0,yt=0);const rt=Pe.convert(N.format),Te=Pe.convert(N.type);let gt;N.isData3DTexture?(Ie.setTexture3D(N,0),gt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ie.setTexture2DArray(N,0),gt=L.TEXTURE_2D_ARRAY):(Ie.setTexture2D(N,0),gt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Ke=L.getParameter(L.UNPACK_ROW_LENGTH),$t=L.getParameter(L.UNPACK_IMAGE_HEIGHT),xi=L.getParameter(L.UNPACK_SKIP_PIXELS),qt=L.getParameter(L.UNPACK_SKIP_ROWS),es=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Me);const _t=T.isDataArrayTexture||T.isData3DTexture,Gt=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){const Zt=Se.get(T),Ft=Se.get(N),Wt=Se.get(Zt.__renderTarget),Xr=Se.get(Ft.__renderTarget);me.bindFramebuffer(L.READ_FRAMEBUFFER,Wt.__webglFramebuffer),me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Xr.__webglFramebuffer);for(let ti=0;ti<ue;ti++)_t&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(T).__webglTexture,F,Me+ti),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(N).__webglTexture,te,yt+ti)),L.blitFramebuffer(Ae,Ce,le,pe,Xe,it,le,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);me.bindFramebuffer(L.READ_FRAMEBUFFER,null),me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||Se.has(T)){const Zt=Se.get(T),Ft=Se.get(N);me.bindFramebuffer(L.READ_FRAMEBUFFER,zu),me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bu);for(let Wt=0;Wt<ue;Wt++)_t?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,F,Me+Wt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,F),Gt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.__webglTexture,te,yt+Wt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ft.__webglTexture,te),F!==0?L.blitFramebuffer(Ae,Ce,le,pe,Xe,it,le,pe,L.COLOR_BUFFER_BIT,L.NEAREST):Gt?L.copyTexSubImage3D(gt,te,Xe,it,yt+Wt,Ae,Ce,le,pe):L.copyTexSubImage2D(gt,te,Xe,it,Ae,Ce,le,pe);me.bindFramebuffer(L.READ_FRAMEBUFFER,null),me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Gt?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(gt,te,Xe,it,yt,le,pe,ue,rt,Te,Mt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(gt,te,Xe,it,yt,le,pe,ue,rt,Mt.data):L.texSubImage3D(gt,te,Xe,it,yt,le,pe,ue,rt,Te,Mt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,Xe,it,le,pe,rt,Te,Mt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,Xe,it,Mt.width,Mt.height,rt,Mt.data):L.texSubImage2D(L.TEXTURE_2D,te,Xe,it,le,pe,rt,Te,Mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ke),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xi),L.pixelStorei(L.UNPACK_SKIP_ROWS,qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,es),te===0&&N.generateMipmaps&&L.generateMipmap(gt),me.unbindTexture()},this.initRenderTarget=function(T){Se.get(T).__webglFramebuffer===void 0&&Ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ie.setTextureCube(T,0):T.isData3DTexture?Ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ie.setTexture2DArray(T,0):Ie.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){P=0,b=0,S=null,me.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const Yg={cardThickness:3e-4};class Zg extends Error{}function Nl(s){return()=>{s.s=s.s+1831565813>>>0;let e=s.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class nc{constructor(e){if(this.cards=[],this.logEntries=[],this.seq=0,this.listeners=new Map,this.session=null,this.id=e.id,this.role=e.role??"custom",this.topFace=e.topFace??(this.role==="draw"?"back":"front"),this.browsable=e.browsable??this.role!=="draw",this.cardThickness=e.cardThickness??Yg.cardThickness,!(this.cardThickness>0))throw new Error(`pile ${this.id}: cardThickness must be > 0 (got ${this.cardThickness})`);this.seed=(e.seed??1)>>>0,this.rngState={s:this.seed},this.rand=Nl(this.rngState);for(const t of e.cards??[])this.addCard(t)}on(e,t){let n=this.listeners.get(e);return n||this.listeners.set(e,n=new Set),n.add(t),()=>n.delete(t)}emit(e){for(const t of this.listeners.get(e.type)??[])t(e);for(const t of this.listeners.get("*")??[])t(e)}get count(){return this.cards.length}get height(){return this.cards.length*this.cardThickness}get top(){return this.cards.length?this.cards[this.cards.length-1]:null}get next(){return this.cards.length>1?this.cards[this.cards.length-2]:null}order(){return this.cards.slice()}has(e){return this.cards.includes(e)}indexOf(e){return this.cards.indexOf(e)}cardMidY(e){return(e+.5)*this.cardThickness}landingHeight(){return this.height}log(){return this.logEntries}revealOnDraw(){if(this.topFace==="front")return this.next!==null?[{card:this.next,face:"front"}]:[];const e=[];return this.top!==null&&e.push({card:this.top,face:"front"}),this.next!==null&&e.push({card:this.next,face:"back"}),e}changed(e,t){this.top!==e&&this.emit({type:"top_changed",pile:this.id,top:this.top,prev:e,face:this.topFace}),this.height!==t&&this.emit({type:"height_changed",pile:this.id,height:this.height,prev:t,count:this.count})}addCard(e,t=-1){if(this.cards.includes(e))throw new Error(`pile ${this.id}: card ${e} is already in the pile`);const n=this.top,i=this.height,r=t<0||t>this.cards.length?this.cards.length:t;this.cards.splice(r,0,e),this.logEntries.push({seq:this.seq++,op:"add",card:e,index:r}),this.emit({type:"card_added",pile:this.id,card:e,index:r,count:this.count}),this.changed(n,i)}addCards(e){for(const t of e)this.addCard(t)}removeCard(e){const t=this.cards.indexOf(e);if(t<0)return!1;const n=this.top,i=this.height;return this.cards.splice(t,1),this.logEntries.push({seq:this.seq++,op:"remove",card:e,index:t}),this.emit({type:"card_removed",pile:this.id,card:e,index:t,count:this.count}),this.changed(n,i),!0}draw(){const e=this.top;return e!==null&&this.removeCard(e),e}drain(){const e=this.order();for(let t=e.length-1;t>=0;t--)this.removeCard(e[t]);return e}shuffle(e,t){const n=e??Math.floor(this.rand()*4294967296)>>>0,i=t??Nl({s:n}),r=this.top;for(let a=this.cards.length-1;a>0;a--){const o=Math.floor(i()*(a+1)),l=this.cards[a];this.cards[a]=this.cards[o],this.cards[o]=l}return this.logEntries.push(t?{seq:this.seq++,op:"reorder",order:this.order(),why:"shuffle (external rng)"}:{seq:this.seq++,op:"shuffle",seed:n,order:this.order()}),this.changed(r,this.height),n}browse(e={}){if(!this.browsable)throw new Zg(`pile ${this.id} (${this.role}) is not browsable`);if(this.session)return this.session;const t=new Jg(this,e.from==="bottom"?0:Math.max(0,this.count-1),e.window??7,()=>{this.session=null,this.emit({type:"browse_close",pile:this.id,index:t.index})});return this.session=t,this.emit({type:"browse_open",pile:this.id,count:this.count,index:t.index}),t}get browsing(){return this.session}toJSON(){return{v:1,id:this.id,role:this.role,topFace:this.topFace,browsable:this.browsable,cardThickness:this.cardThickness,seed:this.seed,rngState:this.rngState.s,seq:this.seq,cards:this.order(),log:this.logEntries.map(e=>({...e,..."order"in e?{order:e.order.slice()}:{}}))}}static fromJSON(e){if(e.v!==1)throw new Error(`pile: unknown record version ${e.v}`);const t=new nc({id:e.id,role:e.role,topFace:e.topFace,browsable:e.browsable,cardThickness:e.cardThickness,seed:e.seed});return t.cards.push(...e.cards),t.logEntries.push(...e.log.map(n=>({...n}))),t.seq=e.seq,t.rngState.s=e.rngState>>>0,t}static replay(e){const t=[];for(const n of e)n.op==="add"?t.splice(n.index,0,n.card):n.op==="remove"?t.splice(n.index,1):(t.length=0,t.push(...n.order));return t}}class Jg{constructor(e,t,n,i){this.pile=e,this.index=t,this.window=n,this.onClose=i,this.closed=!1,this.moved=new Set}get open(){return!this.closed}step(e){return this.scrollTo(this.index+e)}scrollTo(e){if(this.closed)throw new Error(`browse on pile ${this.pile.id} is closed`);const t=this.index;if(this.index=Math.max(0,Math.min(this.pile.count-1,Math.round(e))),this.index!==t)for(const n of this.moved)n(this.index);return this.index}onMove(e){return this.moved.add(e),()=>this.moved.delete(e)}visible(){const e=this.pile.order();if(!e.length)return[];const t=Math.floor(this.window/2),n=Math.max(0,Math.min(e.length-this.window,this.index-t)),i=Math.min(e.length,n+this.window),r=[];for(let a=Math.max(0,n);a<i;a++)r.push({card:e[a],index:a,focus:a===this.index});return r}close(){this.closed||(this.closed=!0,this.onClose())}}const bn={width:.063,height:.088},vM={nestGap:8e-4,cardSpacing:.034,hoverScale:1.06},yM=24e-5,MM=2e-5,SM={columns:32,rows:16},bM={fan:{fanLength:.16,fanCurvature:3,bendCurvature:8,scale:1},pinched:{fanLength:.09,fanCurvature:9,bendCurvature:14,scale:.95},spread:{fanLength:.3,fanCurvature:1.2,bendCurvature:3,scale:1},flat:{fanLength:.2,fanCurvature:0,bendCurvature:0,scale:1}},Ps={typicalCount:5,fanOverlap:.7,fanTiltDeg:15},ur={liftHeight:bn.height,sideOffset:.09,cardTiltDeg:8,gripOffset:{x:bn.width/2,y:bn.height*.25}};function EM(s=bn.width,e=Ps.fanOverlap){return s*(1-e)}const dr=.004,Po={depth:1.4,topY:.75},Ii={shoulderR:{x:.22,y:1.15,z:.55},shoulderL:{x:-.22,y:1.15,z:.55},deckTop:{x:-.28,y:.75,z:.42},playRow0:{x:-.14,y:.75,z:.22},discardTop:{x:.28,y:.75,z:.42},stackTop:{x:.28,y:.75,z:.29}},Ul={x:0,y:.98,z:.52},wa={r:.96,g:.96,b:.93},Qg=.62,e_={lodDistanceM:1.4},du=bn.width/bn.height;function t_(s,e,t=du,n=.5){const i=s/e;if(Math.abs(1-Math.min(i,t)/Math.max(i,t))*Math.max(s,e)<n)return{repeat:{x:1,y:1},offset:{x:0,y:0},cropPx:{x:0,y:0}};if(t>=i){const a=i/t;return{repeat:{x:1,y:a},offset:{x:0,y:(1-a)/2},cropPx:{x:0,y:(1-a)/2*e}}}const r=t/i;return{repeat:{x:r,y:1},offset:{x:(1-r)/2,y:0},cropPx:{x:(1-r)/2*s,y:0}}}function n_(s="full"){return s==="lod"?new URL("/kingmaker/assets/wg_card_back_v1_512x715-BIfK--61.png",import.meta.url).href:new URL("/kingmaker/assets/wg_card_back_v1_1024x1430-w_drHIBp.png",import.meta.url).href}const Aa=bn.width,Fl=bn.height,Ol=2e-5;function kl(s,e){const t=new Uint8Array(16);for(let i=0;i<4;i++)t.set([...i===3?e:s,255],i*4);const n=new Ki(t,1,4,Yt);return n.wrapS=n.wrapT=Jn,n.colorSpace=pt,n.needsUpdate=!0,n}function i_(){const s=new Qn(1,1,1),e=s.getAttribute("uv");for(let t=8;t<16;t++)e.setXY(t,.5,.125);return e.needsUpdate=!0,s}function s_(s){const e=s.image,t=e?.width??0,n=e?.height??0;if(!(t>0&&n>0)||s instanceof Ki)return;const i=t_(t,n,du);s.repeat.set(i.repeat.x,i.repeat.y),s.offset.set(i.offset.x,i.offset.y)}class r_{constructor(e,t){this.pile=e,this.opts=t,this.group=new Pt,this.browseGroup=new Pt,this.popIns=0,this.cache=new Map,this.topCard=null,this.stagedCard=null,this.backWhich="full",this.browseCards=[],this.unsub=[],this.browseUnsub=null,this.group.name=`pile:${e.id}`,this.stripe=kl(t.edge??[236,233,224],t.gap??[150,146,140]),this.bodyMat=new vt({map:this.stripe,roughness:.8}),this.body=new Ze(i_(),this.bodyMat),this.body.name="pile-body";const n=new en(Aa,Fl).rotateX(-Math.PI/2),i=r=>{const a=new Ze(n,new vt({roughness:.6}));return a.name=r,a};this.top=i("pile-top"),this.staged=i("pile-next"),this.staged.visible=!1,this.group.add(this.body,this.top,this.staged,this.browseGroup),this.unsub.push(e.on("top_changed",()=>this.syncTop()),e.on("height_changed",()=>this.syncBody()),e.on("browse_open",()=>this.openBrowse(e.browsing)),e.on("browse_close",()=>this.closeBrowse())),this.syncBody(),this.syncTop(!0)}entry(e,t){let n=this.cache.get(e);if(n)return n;const i=t();if(i instanceof Promise){const r={tex:null,ready:!1,promise:i};r.promise=i.then(a=>(this.prepared(a),r.tex=a,r.ready=!0,this.refresh(),a)),n=r}else this.prepared(i),n={tex:i,ready:!0,promise:Promise.resolve(i)};return this.cache.set(e,n),n}prepared(e){s_(e),this.opts.renderer?.initTexture(e)}faceEntry(e,t){if(t==="front")return this.entry(`front:${e}`,()=>this.opts.front(e));const n=this.opts.back;if(!n)return this.entry("back:none",()=>Promise.resolve(kl([46,66,120],[46,66,120])));const i=this.backWhich==="lod"&&n.lod?"lod":"full";return this.entry(`back:${i}`,()=>i==="lod"?n.lod:n.full)}textureFor(e,t){const n=this.faceEntry(e,t);return n.ready?n.tex:null}async settled(){let e=-1;for(;e!==this.cache.size;)e=this.cache.size,await Promise.all([...this.cache.values()].map(t=>t.promise))}syncBody(){const e=this.pile.height;this.body.visible=this.pile.count>0,this.body.scale.set(Aa,Math.max(e,1e-6),Fl),this.body.position.y=e/2,this.stripe.repeat.set(1,Math.max(1,this.pile.count)),this.top.position.y=e+Ol,this.staged.position.y=e+Ol,this.browseGroup.position.y=e}setMap(e,t,n){const i=e.material;if(t===null)return!0;const r=this.faceEntry(t,n);return i.map!==r.tex&&(i.map=r.tex,i.needsUpdate=!0),r.ready}syncTop(e=!1){const t=this.pile.top,n=this.pile.topFace;if(t!==this.topCard){if(t!==null&&!e&&!this.faceEntry(t,n).ready&&this.popIns++,t!==null&&t===this.stagedCard){const i=this.staged;this.staged=this.top,this.top=i,this.stagedCard=this.topCard}this.topCard=t}this.top.visible=t!==null,this.staged.visible=!1,this.setMap(this.top,t,n),this.stage(),this.syncBody()}stage(){for(const t of this.pile.revealOnDraw())this.faceEntry(t.card,t.face);const e=this.pile.next;this.stagedCard=e,this.setMap(this.staged,e,this.pile.topFace)}refresh(){this.setMap(this.top,this.topCard,this.pile.topFace),this.setMap(this.staged,this.stagedCard,this.pile.topFace)}isPreloaded(){if(!this.pile.revealOnDraw().every(n=>this.faceEntry(n.card,n.face).ready))return!1;const t=this.pile.next;return t===null?!0:this.stagedCard===t&&this.staged.material.map===this.faceEntry(t,this.pile.topFace).tex}expect(e){return this.faceEntry(e,this.pile.topFace).promise}setCameraDistance(e){const t=e>e_.lodDistanceM?"lod":"full";t!==this.backWhich&&(this.backWhich=t,this.pile.topFace==="back"&&this.refresh())}get backLevel(){return this.backWhich}openBrowse(e){this.closeBrowse(),this.browseUnsub=e.onMove(()=>this.layoutBrowse(e)),this.layoutBrowse(e)}layoutBrowse(e){for(const o of this.browseCards)this.browseGroup.remove(o);this.browseCards=[];const t=e.visible(),n=t.findIndex(o=>o.focus),i=(this.opts.browseSpacing??.62)*Aa,r=this.opts.browseLift??.012,a=this.top.geometry;t.forEach((o,l)=>{const c=new Ze(a,new vt({roughness:.6}));c.name=`browse:${o.card}`,this.setMap(c,o.card,"front");const h=l-(t.length-1)/2,u=l-n;c.position.set(h*i,r+l*4e-4+(o.focus?.004:0),(o.focus?.012:0)+h*h*.0015),c.rotation.y=-h*.06,c.userData.fromFocus=u,this.browseCards.push(c),this.browseGroup.add(c)})}closeBrowse(){this.browseUnsub?.(),this.browseUnsub=null;for(const e of this.browseCards)e.material.dispose(),this.browseGroup.remove(e);this.browseCards=[]}get browseVisible(){return this.browseCards.length}drawCalls(){let e=0;return this.group.traverseVisible(t=>{t.isMesh&&e++}),e}dispose(){for(const e of this.unsub)e();this.closeBrowse(),this.body.geometry.dispose(),this.top.geometry.dispose(),this.bodyMat.dispose(),this.stripe.dispose(),this.top.material.dispose(),this.staged.material.dispose()}}function a_(s=new Zo){const e=t=>s.loadAsync(n_(t)).then(n=>(n.colorSpace=pt,n.anisotropy=4,n));return{full:e("full"),lod:e("lod")}}function zl(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Lt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let x=0;x<f.count;++x)u.push(f.getX(x)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Bl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let g=0;g<a[h].length;++g)f.push(a[h][g][d]);const x=Bl(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Bl(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Ut(a,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let x=0;x<t;x++){const g=h.getComponent(d,x);o.setComponent(d+u,x,g)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Vl(s,e){if(e===vd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Eo||e===Vh){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Eo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class ic extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new u_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new T_(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=gs.extractUrlBase(e);a=gs.resolveURL(c,this.path)}else a=gs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new au(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===fu){try{a[Be.KHR_BINARY_GLTF]=new w_(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Be.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new z_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Be.KHR_MATERIALS_UNLIT:a[u]=new l_;break;case Be.KHR_DRACO_MESH_COMPRESSION:a[u]=new A_(r,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:a[u]=new R_;break;case Be.KHR_MESH_QUANTIZATION:a[u]=new C_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function o_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class c_{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ht);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Jf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yf(h),c.distance=u;break;case"spot":c=new jf(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),gn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class l_{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return un}extendParams(e,t,n){const i=[];e.color=new xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ht),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,pt))}return Promise.all(i)}}class h_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class u_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(o,o)}return Promise.all(r)}}class d_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class f_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class p_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ht)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,pt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class m_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class x_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(o[0],o[1],o[2],Ht),Promise.all(r)}}class g_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class __{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(o[0],o[1],o[2],Ht),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,pt)),Promise.all(r)}}class v_{constructor(e){this.parser=e,this.name=Be.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class y_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class M_{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class S_{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class b_{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class E_{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class T_{constructor(e){this.name=Be.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Qt.TRIANGLES&&c.mode!==Qt.TRIANGLE_STRIP&&c.mode!==Qt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const x of u){const g=new Le,m=new I,p=new mt,v=new I(1,1,1),_=new Tf(x.geometry,x.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),_.setMatrixAt(M,g.compose(m,p,v));for(const M in l)if(M==="_COLOR_0"){const w=l[M];_.instanceColor=new wo(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&x.geometry.setAttribute(M,l[M]);dt.prototype.copy.call(_,x),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const fu="glTF",hs=12,Hl={JSON:1313821514,BIN:5130562};class w_{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,hs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-hs,r=new DataView(e,hs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Hl.JSON){const c=new Uint8Array(e,hs+a,o);this.content=n.decode(c)}else if(l===Hl.BIN){const c=hs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class A_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Lo[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Lo[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Oi[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const x in f.attributes){const g=f.attributes[x],m=l[x];m!==void 0&&(g.normalized=m)}u(f)},o,c,Ht,d)})})}}class R_{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class C_{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class pu extends Is{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,x=e*c,g=x-c,m=-2*f+3*d,p=f-d,v=1-m,_=p-d+u;for(let M=0;M!==o;M++){const w=a[g+M+o],E=a[g+M+l]*h,A=a[x+M+o],P=a[x+M]*h;r[M]=v*w+_*E+m*A+p*P}return r}}const P_=new mt;class L_ extends pu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return P_.fromArray(r).normalize().toArray(r),r}}const Qt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Oi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gl={9728:Vt,9729:Bt,9984:Nh,9985:vr,9986:us,9987:On},Wl={33071:yn,33648:Ar,10497:Jn},Ra={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},D_={CUBICSPLINE:void 0,LINEAR:As,STEP:ws},Ca={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function I_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new vt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fn})),s.DefaultMaterial}function ci(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function N_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function U_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function F_(s){let e;const t=s.extensions&&s.extensions[Be.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pa(t.attributes):e=s.indices+":"+Pa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Pa(s.targets[n]);return e}function Pa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Do(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function O_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const k_=new Le;class z_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new o_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Zo(this.options.manager):this.textureLoader=new Qf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new au(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ci(r,o,i),gn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(gs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ra[i.type],o=Oi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ut(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ra[i.type],c=Oi[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let g,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(v);_||(g=new c(o,p*f,i.count*f/h),_=new yf(g,f/h),t.cache.add(v,_)),m=new $o(_,l,d%f/h,x)}else o===null?g=new c(i.count*l):g=new c(o,d,i.count*l),m=new Ut(g,l,x);if(i.sparse!==void 0){const p=Ra.SCALAR,v=Oi[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,w=new v(a[1],_,i.sparse.count*p),E=new c(a[2],M,i.sparse.count*l);o!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=w.length;A<P;A++){const b=w[A];if(m.setX(b,E[A*l]),l>=2&&m.setY(b,E[A*l+1]),l>=3&&m.setZ(b,E[A*l+2]),l>=4&&m.setW(b,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Gl[d.magFilter]||Bt,h.minFilter=Gl[d.minFilter]||On,h.wrapS=Wl[d.wrapS]||Jn,h.wrapT=Wl[d.wrapT]||Jn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==Bt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let x=d;t.isImageBitmapLoader===!0&&(x=function(g){const m=new Et(g);m.needsUpdate=!0,d(m)}),t.load(gs.resolveURL(u,r.path),x,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),gn(u,a),u.userData.mimeType=a.mimeType||O_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Be.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new eu,Sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Qh,Sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return vt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Be.KHR_MATERIALS_UNLIT]){const u=i[Be.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ht),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,pt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=on);const h=r.alphaMode||Ca.OPAQUE;if(h===Ca.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ca.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==un&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==un&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==un){const u=r.emissiveFactor;o.emissive=new xe().setRGB(u[0],u[1],u[2],Ht)}return r.emissiveTexture!==void 0&&a!==un&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,pt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),gn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ci(i,u,r),u})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Xl(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=F_(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Xl(new Lt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?I_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,x=h.length;f<x;f++){const g=h[f],m=a[f];let p;const v=c[f];if(m.mode===Qt.TRIANGLES||m.mode===Qt.TRIANGLE_STRIP||m.mode===Qt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Sf(g,v):new Ze(g,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Qt.TRIANGLE_STRIP?p.geometry=Vl(p.geometry,Vh):m.mode===Qt.TRIANGLE_FAN&&(p.geometry=Vl(p.geometry,Eo));else if(m.mode===Qt.LINES)p=new Cf(g,v);else if(m.mode===Qt.LINE_STRIP)p=new Ko(g,v);else if(m.mode===Qt.LINE_LOOP)p=new Pf(g,v);else if(m.mode===Qt.POINTS)p=new Lf(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&U_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),gn(p,r),m.extensions&&ci(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,x=u.length;f<x;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ci(i,u[0],r),u[0];const d=new Pt;r.extensions&&ci(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,x=u.length;f<x;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(jd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Qo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Le;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new qo(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],x=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[x.input]:x.input,v=i.parameters!==void 0?i.parameters[x.output]:x.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(x),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],x=u[2],g=u[3],m=u[4],p=[];for(let _=0,M=d.length;_<M;_++){const w=d[_],E=f[_],A=x[_],P=g[_],b=m[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const S=n._createAnimationTracks(w,E,A,P,b);if(S)for(let C=0;C<S.length;C++)p.push(S[C])}const v=new Bf(r,void 0,p);return gn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,k_)});for(let f=0,x=u.length;f<x;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Jh:c.length>1?h=new Pt:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),gn(h,r),r.extensions&&ci(n,h,r),r.matrix!==void 0){const u=new Le;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Pt;n.name&&(r.name=i.createUniqueName(n.name)),gn(r,n),n.extensions&&ci(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Sn||d instanceof Et)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];qn[r.path]===qn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(qn[r.path]){case qn.weights:c=Gi;break;case qn.rotation:c=Wi;break;case qn.translation:case qn.scale:c=Xi;break;default:n.itemSize===1?c=Gi:c=Xi;break}const h=i.interpolation!==void 0?D_[i.interpolation]:As,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const x=new c(l[d]+"."+qn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Do(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Wi?L_:pu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function B_(s,e,t){const n=e.attributes,i=new Rt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=Do(Oi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,x=d.max;if(f!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(x[2]))),d.normalized){const g=Do(Oi[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new wn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Xl(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Lo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return je.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),gn(s,e),B_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?N_(s,e.targets,t):s})}Array.from({length:64},(s,e)=>Math.floor(Math.abs(Math.sin(e+1))*2**32)>>>0);function Ir(s,e){return{x:s.x+e.x,y:s.y+e.y,z:s.z+e.z}}function V_(s,e){return{x:s.x-e.x,y:s.y-e.y,z:s.z-e.z}}function Nr(s,e){return{x:s.x*e,y:s.y*e,z:s.z*e}}function $l(s,e){return{x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x}}function mu(s,e){return{x:s.w*e.x+s.x*e.w+s.y*e.z-s.z*e.y,y:s.w*e.y-s.x*e.z+s.y*e.w+s.z*e.x,z:s.w*e.z+s.x*e.y-s.y*e.x+s.z*e.w,w:s.w*e.w-s.x*e.x-s.y*e.y-s.z*e.z}}function H_(s){const e=Math.hypot(s.x,s.y,s.z,s.w)||1;return{x:s.x/e,y:s.y/e,z:s.z/e,w:s.w/e}}function G_(s,e){const t={x:s.x,y:s.y,z:s.z},n=Nr($l(t,e),2);return Ir(e,Ir(Nr(n,s.w),$l(t,n)))}new I(1,1,1);new Le().makeScale(-1,1,1);new I(0,.035,.186);function W_(s){const e=new Map,t=new Map,n=s.clone();return xu(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function xu(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)xu(s.children[n],e.children[n],t)}const X_=`
#ifdef USE_COLOR
#else
#endif
vec3 rim = vec3(0.96, 0.96, 0.93);
float fresnel = pow(1.0 - abs(dot(normalize(vViewPosition), normal)), 2.0);
gl_FragColor.rgb += rim * fresnel * 0.18;
`;function $_(s){return s.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <output_fragment>",`#include <output_fragment>
      {
        ${X_}
      }`)},s.needsUpdate=!0,s}function q_(){return{createGloveMaterial(s={}){const e=new vt({color:s.cuffTint??new xe(wa.r,wa.g,wa.b),roughness:Qg,metalness:.05});return $_(e)},createCardFaceMaterial(s){return new vt({color:16249308,roughness:.7,metalness:0,map:s??null})},createCardBackMaterial(s){return new vt({color:2768742,roughness:.7,metalness:0,map:s??null})}}}function $i(s){return s.replace(/\s/g,"_").replace(/[[\].:/]/g,"")}const j_=["index","middle","ring","thumb"],gu=["01","02","03"];function K_(s,e){return s.startsWith("DEF-")||s.startsWith("prop_")?`${s}.${e}`:`DEF-${s}.${e}`}const La={thumb_02:{min:-5,max:39},thumb_03:{min:-8,max:39},thumb_01:{min:-20,max:40},"01":{min:-20,max:95},"02":{min:-20,max:100},"03":{min:-20,max:80}};function Y_(s){if(La[s])return La[s];const e=s.slice(-2);return La[e]??{min:-20,max:90}}function Z_(s,e){const{min:t,max:n}=Y_(s);return Math.max(t,Math.min(n,e))}function J_(s,e,t){const n=`${e}_${gu[t]}`;return Z_(n,s[e][t])}function Q_(s,e,t){const n=`${e}_${gu[t]}`,i=J_(s,e,t),r=t===0,a=r?s.spread?.[e]??0:0,o=e==="thumb"&&r?s.thumbOpp??0:0,l=e==="thumb"&&r?s.thumbRoll??0:0;return{joint:n,curl:i,spread:a,opp:o,roll:l}}function ev(s){const e=[];for(const t of j_)for(let n=0;n<3;n=n+1)e.push(Q_(s,t,n));return e}function tv(s,e){const t=s==="R"?-1:1;return{x:e.curl,y:e.opp*t,z:(e.spread+e.roll)*t}}function nv(s,e=Ps.fanTiltDeg){const t=s*.5,n=e*Math.PI/180*.5,i={x:0,y:Math.sin(t),z:0,w:Math.cos(t)},r={x:Math.sin(n),y:0,z:0,w:Math.cos(n)};return mu(i,r)}function iv(s,e,t,n=Ps.fanTiltDeg,i,r=1){const a=nv(t,n),o=i!==void 0&&s.matchScale?i/s.matchScale:1,l=s.contacts.cardPoint,c=Ir(Nr(l,r),Nr(V_(s.wrist.position,l),o));return{position:Ir(e,G_(a,c)),rotation:H_(mu(a,s.wrist.rotation))}}const fr=[["index_01",0,45,90,"fix_index_01_x45","fix_index_01_x90"],["index_02",0,45,90,"fix_index_02_x45","fix_index_02_x90"],["index_03",0,45,90,"fix_index_03_x45","fix_index_03_x90"],["middle_01",0,45,90,"fix_middle_01_x45","fix_middle_01_x90"],["middle_02",0,45,90,"fix_middle_02_x45","fix_middle_02_x90"],["middle_03",0,45,90,"fix_middle_03_x45","fix_middle_03_x90"],["ring_01",0,45,90,"fix_ring_01_x45","fix_ring_01_x90"],["ring_02",0,45,90,"fix_ring_02_x45","fix_ring_02_x90"],["ring_03",0,45,90,"fix_ring_03_x45","fix_ring_03_x90"],["thumb_01",0,20,40,"fix_thumb_01_x20","fix_thumb_01_x40"],["thumb_01",2,17,34,"fix_thumb_01_z17","fix_thumb_01_z34"],["thumb_02",0,20,40,"fix_thumb_02_x20","fix_thumb_02_x40"],["thumb_03",0,20,40,"fix_thumb_03_x20","fix_thumb_03_x40"]];function sv(s,e,t){return s<=0?[0,0]:s<=e?[s/e,0]:s<=t?[(t-s)/(t-e),(s-e)/(t-e)]:[0,1+(s-t)/(t-e)]}const _s=new mt,vs=new tn;function rv(s){let e={x:0,y:s.y,z:0,w:s.w};const t=Math.hypot(e.y,e.w);e=t<1e-9?{x:0,y:0,z:0,w:1}:{x:0,y:e.y/t,z:0,w:e.w/t};const n=-e.x,i=-e.y,r=-e.z,a=e.w;let o=s.w*n+s.x*a+s.y*r-s.z*i,l=s.w*i-s.x*r+s.y*a+s.z*n,c=s.w*r+s.x*i-s.y*n+s.z*a,h=s.w*a-s.x*n-s.y*i-s.z*r;h<0&&(o=-o,l=-l,c=-c,h=-h);const u=Math.hypot(o,l,c),d=2*Math.atan2(u,h),f=u<1e-9?2:d/u,x=2*Math.atan2(e.y,e.w);return{x:o*f*180/Math.PI,z:c*f*180/Math.PI,twist:x*180/Math.PI}}function TM(s){let e=0;return s.traverse(t=>{if(!t.isSkinnedMesh&&!t.isMesh)return;const n=t.morphTargetDictionary,i=t.morphTargetInfluences;if(!(!n||!i))for(const[r,a]of Object.entries(n))r.startsWith("fix_thumb_")&&(i[a]=0,e++)}),e}class av{constructor(e){this.glove=e,this.index=e.morphTargetDictionary?.fix_dorsal_slide??-1;const t=e.skeleton.bones,n=t.some(r=>r.name===$i("DEF-hand.L")||r.name==="DEF-hand.L")?"L":"R",i=r=>t.find(a=>a.name===$i(r)||a.name===r)??null;this.bones=["index_01","middle_01","ring_01"].map(r=>i(`DEF-${r}.${n}`)),this.rest=this.bones.map(r=>r?r.quaternion.clone():new mt)}captureRest(){this.rest=this.bones.map(e=>e?e.quaternion.clone():new mt)}weight(){let e=0;for(let t=0;t<3;t++){const n=this.bones[t];n&&(_s.copy(this.rest[t]).invert().multiply(n.quaternion),vs.setFromQuaternion(_s,"ZYX"),e+=vs.x*180/Math.PI)}return Math.min(1,Math.max(0,e/3/90))}update(){const e=this.weight();return this.index>=0&&this.glove.morphTargetInfluences&&(this.glove.morphTargetInfluences[this.index]=e),e}}class ov{constructor(e){this.bones=[],this.rest=[],this.shapes=[],this.glove=e,this.dorsal=new av(e);const t=e.skeleton.bones,n=a=>t.find(o=>o.name===$i(a)||o.name===a)??null;this.side=n("DEF-hand.L")?"L":"R";const i=e.morphTargetDictionary??{},r=a=>a in i?i[a]:-1;for(const[a,o,l,c,h,u]of fr){const d=n(`DEF-${a}.${this.side}`);this.bones.push(d),this.rest.push(d?d.quaternion.clone():new mt),this.shapes.push([r(h),r(u)])}this.comboIM=[r("fix_index_middle_01_x45"),r("fix_index_middle_01_x90")],this.comboMR=[r("fix_middle_ring_01_x45"),r("fix_middle_ring_01_x90")],this.thumbXZ=[r("fix_thumb_01_xz1"),r("fix_thumb_01_xz2")]}captureRest(){this.dorsal.captureRest();for(let e=0;e<this.bones.length;e++){const t=this.bones[e];t&&(this.rest[e]=t.quaternion.clone())}}update(){const e=this.glove.morphTargetInfluences;if(!e)return;const t=[];for(let c=0;c<fr.length;c++){const[,h,u,d]=fr[c],f=this.bones[c],x=this.rest[c];let g=0;if(f&&x){_s.copy(x).invert().multiply(f.quaternion);let M;if(fr[c][0]==="thumb_01"){const w=rv(_s);M=h===0?w.x:w.z}else vs.setFromQuaternion(_s,"ZYX"),M=(h===0?vs.x:vs.z)*180/Math.PI;g=this.side==="R"&&h!==0?-M:M}const[m,p]=sv(g,u,d);t.push(m);const[v,_]=this.shapes[c];v>=0&&(e[v]=m),_>=0&&(e[_]=p)}const n=0,i=3,r=6,a=9,o=10,l=(c,h,u,d=0)=>{const f=Math.min(t[h]??0,t[u]??0);c[0]>=0&&(e[c[0]]=f),c[1]>=0&&(e[c[1]]=d)};l(this.comboIM,n,i),l(this.comboMR,i,r),l(this.thumbXZ,a,o),this.dorsal.update()}}const ys=new I,li=new I,cv=new I,ql=new mt,Ur=new mt;async function wM(s){const e=await new ic().loadAsync(s);return lv(e,s)}function lv(s,e){const t=[];if(s.scene.traverse(n=>{n.isSkinnedMesh&&t.push(n)}),t.length===0)throw new Error(`whiteglove_hands_v3.glb at ${e} has no SkinnedMesh — cannot drive bones`);return{gltf:s,instantiate(n={}){return hv(s,n)}}}function hv(s,e={}){const t=W_(s.scene),n=new Pt;n.name="seat-gloves",n.add(t),t.traverse(d=>{d.name.toLowerCase().includes("nametag")&&(d.visible=!1)});const i=e.applyLook!==!1,r=[];if(i){const d=e.materials??q_(),f=d.createGloveMaterial(),x=d.createGloveMaterial({cuffTint:e.cuffTint??12892328});r.push(f,x),t.traverse(g=>{if(!g.isSkinnedMesh)return;const m=g,p=m.name;p.startsWith("Cuff")?m.material=x:p.startsWith("Glove")&&(m.material=f),m.castShadow=!1,m.receiveShadow=!1,m.frustumCulled=!1})}else t.traverse(d=>{if(!d.isSkinnedMesh)return;const f=d;f.castShadow=!0,f.receiveShadow=!0,f.frustumCulled=!1});const a=jl(t,"L"),o=jl(t,"R"),l=[];return i&&e.correctives!==!1&&t.traverse(d=>{if(d.isSkinnedMesh&&d.name.startsWith("Glove")&&d.morphTargetDictionary){const f=new ov(d);f.captureRest(),l.push(f)}}),{group:n,instanceRoot:t,left:a,right:o,apply:d=>{Zl(a,d.left,d.leftPlace,d.leftFingers,d.yaw,d.scale),Zl(o,d.right,d.rightPlace,d.rightFingers,d.yaw,d.scale),t.updateMatrixWorld(!0);for(const f of l)f.update()},applyMeasured:d=>{Jl(a,d.left,d.fanOrigin,d.yaw,d.tiltDeg,d.scale,d.cardScale??1),Jl(o,d.right,d.fanOrigin,d.yaw,d.tiltDeg,d.scale,d.cardScale??1),t.updateMatrixWorld(!0);for(const f of l)f.update()},update:()=>{t.updateMatrixWorld(!0);for(const d of l)d.update()},dispose:()=>{n.removeFromParent();for(const d of r)d.dispose()}}}function jl(s,e){let t=null;const n=[$i(`Hand.${e}`),`Hand.${e}`,`Hand${e}`];if(s.traverse(a=>{n.includes(a.name)&&(t=a)}),!t)throw new Error(`Hand.${e} missing from whiteglove_hands_v3.glb`);const i=new Map,r=new Map;return t.traverse(a=>{if(a.isBone){const o=a;i.set(o.name,o),r.set(o.name,o.quaternion.clone())}}),{side:e,root:t,bones:i,rest:r}}function uv(s,e){return s.bones.get($i(e))??s.bones.get(e)}const Kl=new mt,Yl=new mt;function dv(s,e){for(const t of ev(e)){const n=K_(`DEF-${t.joint}`,s.side),i=uv(s,n),r=s.rest.get($i(n))??s.rest.get(n);if(!i||!r)continue;const a=tv(s.side,t);fv(r,a,i.quaternion)}}function fv(s,e,t=new mt){return Ur.setFromAxisAngle(ys.set(1,0,0),e.x*Math.PI/180),Kl.setFromAxisAngle(ys.set(0,1,0),e.y*Math.PI/180),Yl.setFromAxisAngle(ys.set(0,0,1),e.z*Math.PI/180),t.copy(s).multiply(Yl).multiply(Kl).multiply(Ur)}function Zl(s,e,t,n,i,r){const a={x:Math.cos(i),z:-Math.sin(i)},o={x:Math.sin(i),z:Math.cos(i)},l=t.wristOffset,c={x:e.wrist.x+a.x*l.x+o.x*l.z,y:e.wrist.y+l.y,z:e.wrist.z+a.z*l.x+o.z*l.z},h=e.pinch;s.root.position.set(c.x,c.y,c.z),s.root.scale.setScalar(r),li.set(h.x-c.x,h.y-c.y,h.z-c.z),li.lengthSq()<1e-8&&li.set(o.x,0,o.z),li.normalize(),cv.set(0,1,0);const u=new dt;u.position.set(c.x,c.y,c.z),u.lookAt(c.x+li.x,c.y+li.y,c.z+li.z),s.root.quaternion.copy(u.quaternion),Ur.setFromAxisAngle(ys.set(1,0,0),t.pitchDeg*Math.PI/180),s.root.quaternion.multiply(Ur),ql.setFromAxisAngle(ys.set(0,0,1),t.rollDeg*Math.PI/180),s.root.quaternion.multiply(ql),dv(s,n)}function pv(s,e){return s?new mt(s.x,s.y,s.z,s.w):e.clone()}function Jl(s,e,t,n,i,r,a=1){const o=iv(e,t,n,i,r,a);s.root.position.set(o.position.x,o.position.y,o.position.z),s.root.scale.setScalar(r),s.root.quaternion.set(o.rotation.x,o.rotation.y,o.rotation.z,o.rotation.w),mv(s,e)}function mv(s,e){for(const[t,n]of s.rest){const i=s.bones.get(t);if(!i)continue;const r=t.includes(".")?t:t.replace(/([LR])$/,".$1"),a=e.bones[t]??e.bones[r];i.quaternion.copy(pv(a,n))}}new TextDecoder;new I(1,1,1);new I(0,1,0);new I(1,1,1);new I(.2,Po.topY+.25,Po.depth/2+.35);(()=>{const e=a=>{const o=4*Math.PI;return a<.125?Math.sin(o*a):a<.375?1:a<.625?Math.cos(o*(a-.375)):a<.875?-1:-Math.sin(o*(1-a))},t=new Float64Array(2049),n=new Float64Array(2049),i=1/2048;for(let a=0;a<2048;a++){const o=e(a*i),l=e((a+.5)*i),c=e((a+1)*i);n[a+1]=n[a]+i*(o+4*l+c)/6,t[a+1]=t[a]+i*(n[a]+n[a+1])/2+i*i*(o-c)/12}const r=t[2048];for(let a=0;a<=2048;a++)t[a]=t[a]/r,n[a]=n[a]/r;return n[2048]=0,t[2048]=1,{n:2048,S:t,V:n}})();function xv(){return{gloveScale:1,idle:{fanOverlap:Ps.fanOverlap,fanTiltDeg:Ps.fanTiltDeg,dominant:{wristOffset:{x:0,y:0,z:0},rollDeg:8,pitchDeg:6,localWrist:{x:.145,y:-.042,z:.05},localAim:{x:-.02,y:-.038,z:0}},off:{wristOffset:{x:0,y:0,z:0},rollDeg:-6,pitchDeg:8,localWrist:{x:-.145,y:-.05,z:.055},localAim:{x:-.032,y:-.042,z:.006}},dominantFingers:{index:[6,10,6],middle:[8,12,6],ring:[10,14,8],thumb:[10,20,16],spread:{index:14,middle:2,ring:-14,thumb:10},thumbOpp:32,thumbRoll:20},offFingers:{index:[22,28,18],middle:[24,30,18],ring:[26,32,20],thumb:[12,22,16],spread:{index:10,middle:0,ring:-12,thumb:8},thumbOpp:26,thumbRoll:18}},pull:{liftHeight:ur.liftHeight,sideOffset:ur.sideOffset,cardTiltDeg:ur.cardTiltDeg,gripOffset:{...ur.gripOffset},off:{wristOffset:{x:0,y:0,z:0},rollDeg:-6,pitchDeg:8,localWrist:{x:-.145,y:-.05,z:.055},localAim:{x:-.032,y:-.042,z:.006}},dominant:{wristOffset:{x:.08,y:-.015,z:.04},rollDeg:4,pitchDeg:2},offFingers:{index:[22,28,18],middle:[24,30,18],ring:[26,32,20],thumb:[12,22,16],spread:{index:10,middle:0,ring:-12,thumb:8},thumbOpp:26,thumbRoll:18},pinchFingers:{index:[38,48,32],middle:[40,50,32],ring:[16,22,12],thumb:[8,30,24],spread:{index:6,middle:-4,ring:-14,thumb:4},thumbOpp:32,thumbRoll:22}},camera:{firstPerson:{position:{x:0,y:1.26,z:.92},lookAt:{x:0,y:.97,z:.46},fov:34},overhead:{position:{x:0,y:2.45,z:1.55},lookAt:{x:0,y:.82,z:.05},fov:42}}}}const gv=xv(),_v=gv.camera;new Le;function _u(s,e){return e===2?s===0?0:Math.PI:e===3?[0,-Math.PI/2,Math.PI/2][s]??0:[0,-Math.PI/2,Math.PI,Math.PI/2][s]??0}function fi(s,e){const t=Math.cos(e),n=Math.sin(e);return{x:s.x*t+s.z*n,y:s.y,z:-s.x*n+s.z*t}}function pr(s,e,t=0){return{position:fi({x:s.x,y:s.y+t,z:s.z},e),yaw:e}}let vv=0;function AM(s,e){const t=_u(s,e);return{seat:s,yaw:t,shoulderR:fi(Ii.shoulderR,t),shoulderL:fi(Ii.shoulderL,t),deckTop:pr(Ii.deckTop,t,dr),discardTop:pr(Ii.discardTop,t,dr),stackTop:pr(Ii.stackTop,t,dr),idleFan:fi({...Ul,y:Ul.y+vv},t),playRow0:pr(Ii.playRow0,t,dr)}}new I;const sc={topY:.8,width:1.2,depth:1.2,height:.8,seatCount:4,triangles:3008},yv=["Keyhole","RedThread","GarnetBead","Feather"];function Mv(s=sc){return s.topY-Po.topY}const Ql=(s,e)=>({x:s.x+e.x,y:s.y+e.y,z:s.z+e.z});function RM(s=4,e=sc){const t=Mv(e),n=_v.firstPerson,i={x:0,y:t,z:0},r=[];for(let a=0;a<s;a++){const o=_u(a,s);r.push({seat:a,yaw:o,edge:fi({x:0,y:e.topY,z:e.depth/2},o),eye:Ql(fi(n.position,o),i),lookAt:Ql(fi(n.lookAt,o),i),fov:n.fov})}return r}const Sv=new URL("/kingmaker/assets/manor_table-CS_qzC1L.glb",import.meta.url).href,bv=s=>(Array.isArray(s.material)?s.material:[s.material]).some(t=>yv.includes(t.name));function Ev(s){let e=0,t=0;return s.traverseVisible(n=>{const i=n;if(!i.isMesh)return;const r=i.geometry,a=r.index?r.index.count:r.attributes.position.count;e+=a/3,t+=1}),{triangles:e,drawCalls:t}}async function CM(s={}){const e=new ic,t=s.buffer?await e.parseAsync(s.buffer,""):await e.loadAsync(s.url??Sv),n=new Pt;n.name="wg_standard_table",n.add(t.scene);const i=[];t.scene.traverse(a=>{const o=a;o.isMesh&&(o.receiveShadow=!0,o.castShadow=s.castShadow??!0,bv(o)&&i.push(o))});const r=a=>i.forEach(o=>o.visible=a);return r(s.showTrinkets??!1),{group:n,spec:sc,setTrinketsVisible:r,stats:()=>Ev(n),dispose(){n.traverse(a=>{const o=a;o.isMesh&&(o.geometry.dispose(),(Array.isArray(o.material)?o.material:[o.material]).forEach(l=>l.dispose()))})}}}const xn=Math.PI/180,Fr={lean:{maxSpeed:16*xn,smoothTime:.045,stretchMaxSpeed:.16/3,step:3*xn,stretchStep:.01,padStepsPerSec:16,forwardLimit:70*xn,backLimit:20*xn,sideLimit:38*xn,stretchLimit:.2,zoom:.3,overTable:.7},rise:{speed:1.8,thigh:.4,over:.6,standLean:5*xn,standTilt:13*xn},look:{controlTime:.015,sensitivity:.008,yawLimit:90*xn,pitchDown:-70*xn,pitchUp:40*xn,stickPxPerSec:300,smoothTau:.1,invertY:!1,speed:1},follow:{rate:.6,easeIn:.35,deadZonePx:60,restartPx:50,minPxPerSec:8,pickShare:.7},edge:{dwellSec:.7,cooldownSec:.5,focusHoldSec:2,barWidthShare:1/6,barHeightShare:[.012,.07]},peel:{dwellSec:.7,cornerShare:.06,leaveShare:.14},pad:{deadZone:.2,triggerPress:.5,triggerRelease:.3}};({...Fr,lean:{...Fr.lean}});function Da(s,e,t,n){return n<=0||Math.abs(e-s)<3e-4?e:s+(e-s)*(1-Math.exp(-t/n))}class Ia{constructor(e=0){this.velocity=0,this.value=e,this.goal=e}reset(e){this.value=e,this.goal=e,this.velocity=0}step(e,t,n,i){if(t<=0)return this.value;const r=Number.isFinite(i),a=r?i*t:1/0;this.goal=r?this.goal+Math.max(-a,Math.min(a,e-this.goal)):e;const l=2/Math.max(1e-4,n),c=l*t,h=1/(1+c+.48*c*c+.235*c*c*c),u=this.value-this.goal,d=(this.velocity+l*u)*t;let f=(this.velocity-l*d)*h,x=this.goal+(u+d)*h;if((e-this.value>0&&x>e||e-this.value<0&&x<e)&&(x=e,f=0),r){const g=x-this.value;Math.abs(g)>a&&(x=this.value+Math.sign(g)*a,f=Math.sign(g)*i),f=Math.max(-i,Math.min(i,f))}return Math.abs(e-x)<1e-6&&Math.abs(f)<1e-4&&this.goal===e&&(x=e,f=0),this.velocity=f,this.value=x,x}}const Tv=Object.freeze({spineFromHips:Object.freeze({x:0,y:.18,z:0}),chestFromSpine:Object.freeze({x:0,y:.17,z:0}),neckFromChest:Object.freeze({x:0,y:.2,z:-.02}),headFromNeck:Object.freeze({x:0,y:.25,z:-.03}),hipsLeanShare:.5,sideShift:.12,twistLimit:100*Math.PI/180}),jn=s=>new I(s.x,s.y,s.z),vu=new I(1,0,0),Io=new I(0,1,0),wv=new I(0,0,1);function eh(s,e,t){const n=new mt().setFromAxisAngle(Io,t),i=new mt().setFromAxisAngle(vu,-s).multiply(new mt().setFromAxisAngle(wv,-e));return n.clone().multiply(i).multiply(n.invert())}const th=s=>{const e=Math.min(1,Math.max(0,s));return e*e*(3-2*e)};class Av{constructor(e){this.req={yaw:0,pitch:0,lean:0,stretch:0,side:0,rise:0},this.pose={yaw:0,pitch:0,lean:0,stretch:0,side:0,rise:0},this.leanF=new Ia,this.leanS=new Ia,this.stretchF=new Ia,this.idle=!1,this.seatMatrix=new Le,this.anchor=e.anchor,this.feel=e.feel??Fr;const t=e.anchor;this.seatMatrix.makeRotationY(t.yaw);const n=new Le().makeRotationY(-t.yaw);this.eyeLocal=new I(t.eye.x,t.eye.y,t.eye.z).applyMatrix4(n);const i=new I(t.lookAt.x,t.lookAt.y,t.lookAt.z).applyMatrix4(n).sub(this.eyeLocal);this.basePitch=Math.atan2(i.y,Math.hypot(i.x,i.z)),this.edgeZ=new I(t.edge.x,t.edge.y,t.edge.z).applyMatrix4(n).z}turn(e,t,n=1){if(this.idle)return;const i=this.feel.look.sensitivity*this.feel.look.speed*n,r=this.feel.look;this.req.yaw=Math.max(-r.yawLimit,Math.min(r.yawLimit,this.req.yaw-e*i)),this.req.pitch=Math.max(r.pitchDown,Math.min(r.pitchUp,this.req.pitch-(r.invertY?-t:t)*i))}turnBy(e,t){const n=this.feel.look;this.req.yaw=Math.max(-n.yawLimit,Math.min(n.yawLimit,this.req.yaw+e)),this.req.pitch=Math.max(n.pitchDown,Math.min(n.pitchUp,this.req.pitch+t))}leanSteps(e){if(this.idle||e===0)return;const t=this.feel.lean;if(e>0){const n=Math.max(t.forwardLimit-this.req.lean,0),i=Math.min(e*t.step,n);this.req.lean+=i;const r=e-i/t.step;this.req.stretch=Math.min(t.stretchLimit,this.req.stretch+r*t.stretchStep)}else{let n=-e;const i=Math.min(n*t.stretchStep,this.req.stretch);this.req.stretch-=i,n-=i/t.stretchStep,this.req.lean=Math.max(this.req.lean-n*t.step,-t.backLimit)}this.keepOffTable()}holdSide(e){this.idle&&(e=0),this.req.side=Math.max(-1,Math.min(1,e))}riseBy(e){this.idle||(this.req.rise=Math.max(0,Math.min(1,this.req.rise+e)),this.keepOffTable())}reset(){Object.assign(this.req,{yaw:0,pitch:0,lean:0,stretch:0,side:0,rise:0})}update(e){const t=this.feel,n=t.look.controlTime;this.pose.yaw=Da(this.pose.yaw,this.req.yaw,e,n),this.pose.pitch=Da(this.pose.pitch,this.req.pitch,e,n),this.pose.rise=Da(this.pose.rise,this.req.rise,e,n),this.pose.lean=this.leanF.step(this.req.lean,e,t.lean.smoothTime,t.lean.maxSpeed),this.pose.side=this.leanS.step(this.req.side*t.lean.sideLimit,e,t.lean.smoothTime,t.lean.maxSpeed),this.pose.stretch=this.stretchF.step(this.req.stretch,e,t.lean.smoothTime,t.lean.stretchMaxSpeed)}settle(){Object.assign(this.pose,{...this.req,side:this.req.side*this.feel.lean.sideLimit}),this.leanF.reset(this.pose.lean),this.leanS.reset(this.pose.side),this.stretchF.reset(this.pose.stretch)}eyeLocalFor(e,t=new I){const n=this.feel,i=Tv,r=th(e.rise),a=e.rise*Math.PI/2,o=jn(i.spineFromHips).add(jn(i.chestFromSpine)).add(jn(i.neckFromChest)).add(jn(i.headFromNeck)),l=n.rise.thigh,c=this.eyeLocal.clone().sub(o).add(new I(0,l*Math.sin(a),-l*(1-Math.cos(a)))),h=e.lean+n.rise.standLean*r,u=e.side,d=Math.max(-i.twistLimit,Math.min(i.twistLimit,e.yaw)),f=eh(h*i.hipsLeanShare,u*i.hipsLeanShare,d),x=eh(h*(1-i.hipsLeanShare),u*(1-i.hipsLeanShare),d),g=new mt().setFromAxisAngle(Io,d),p=vu.clone().applyQuaternion(g).multiplyScalar(Math.sin(u)*i.sideShift).applyQuaternion(f.clone().invert()),v=f.clone().multiply(x).multiply(g),_=new mt().setFromAxisAngle(Io,e.yaw);return t.copy(c).add(jn(i.spineFromHips).add(p).applyQuaternion(f)).add(jn(i.chestFromSpine).add(jn(i.neckFromChest)).applyQuaternion(v)).add(new I(0,0,-e.stretch).add(jn(i.headFromNeck)).applyQuaternion(_))}overTable(e){return this.edgeZ-this.eyeLocalFor(e).z}keepOffTable(){const e=this.feel,t=e.lean.overTable+this.req.rise*e.rise.over,n=o=>({yaw:this.req.yaw,pitch:this.req.pitch,lean:Math.max(this.req.lean,0)*o+Math.min(this.req.lean,0),stretch:this.req.stretch*o,side:this.req.side*e.lean.sideLimit,rise:this.req.rise});if(this.overTable(n(1))<=t)return;let i=0,r=1;for(let o=0;o<24;o++){const l=(i+r)/2;this.overTable(n(l))<=t?i=l:r=l}const a=n(i);this.req.lean=a.lean,this.req.stretch=a.stretch}zoomShare(){const e=this.feel.lean;let t=e.forwardLimit>0?Math.min(1,Math.max(0,this.pose.lean/e.forwardLimit)):0;return e.stretchLimit>0&&(t=t*.85+Math.min(1,Math.max(0,this.pose.stretch/e.stretchLimit))*.15),1-e.zoom*t}eyeWorld(e,t){this.eyeLocalFor(this.pose,e).applyMatrix4(this.seatMatrix);const n=th(this.pose.rise),i=this.basePitch+this.pose.pitch-this.feel.rise.standTilt*n;t.setFromEuler(new tn(i,this.anchor.yaw+this.pose.yaw,0,"YXZ"))}}const Rv=s=>{const e=Math.min(1,Math.max(0,s));return e*e*(3-2*e)},Cv=(s,e)=>s.x>=e.x&&s.x<=e.x+e.w&&s.y>=e.y&&s.y<=e.y+e.h;class Pv{constructor(e){this.feel=e,this.cursor={x:640,y:360},this.size={x:1280,y:720},this.fov=34,this.following=!1,this.followT=0,this.posture="SEATED",this.dwellUp=0,this.dwellDown=0,this.moveDir=0,this.moveT=0,this.cooldown=0,this.peelT=0,this.peelArmed=!0}setSize(e,t){const n=this.size.x>1,i=n?e/this.size.x:1,r=n?t/this.size.y:1;this.size={x:e,y:t},this.cursor=n?{x:this.cursor.x*i,y:this.cursor.y*r}:{x:e/2,y:t/2}}centre(){this.cursor={x:this.size.x/2,y:this.size.y/2}}clamp(){this.cursor.x=Math.min(this.size.x,Math.max(0,this.cursor.x)),this.cursor.y=Math.min(this.size.y,Math.max(0,this.cursor.y))}move(e,t){this.cursor.x+=e,this.cursor.y+=t,this.clamp()}setPosition(e,t){this.cursor={x:e,y:t},this.clamp()}warpShare(e){this.cursor={x:e.x*this.size.x,y:e.y*this.size.y}}focal(){return this.size.y/2/Math.tan(this.fov*Math.PI/180/2)}reanchor(e,t){const n=this.focal(),i=this.size.x/2,r=this.size.y/2,a=Math.atan((this.cursor.x-i)/n)+e,o=Math.atan((this.cursor.y-r)/n)+t;this.cursor.x=i+n*Math.tan(Math.max(-1.5,Math.min(1.5,a))),this.cursor.y=r+n*Math.tan(Math.max(-1.5,Math.min(1.5,o))),this.clamp()}deadZone(e){const t=this.size.y/720;return Math.max(e.follow.deadZonePx*t,e.follow.pickDeadZoneShare*(this.size.y/2))}update(e,t,n){const i={turn:{yaw:0,pitch:0},rise:0,events:[]},r=this.size.y/720,a=this.feel.follow,o=this.size.x/2,l=this.size.y/2,c=this.cursor.x-o,h=this.cursor.y-l,u=Math.hypot(c,h),d=this.deadZone(t),f=t.followBlockRects.some(v=>Cv(this.cursor,v)),x=this.posture==="MOVING"&&this.moveT<this.feel.edge.focusHoldSec;if(t.follow.on&&t.pointerMode==="region"&&!f&&!x?!this.following&&u>d+a.restartPx*r?(this.following=!0,this.followT=0):this.following&&u<=d&&(this.following=!1):this.following=!1,this.following&&e>0){this.followT+=e;const v=a.easeIn>0?Rv(this.followT/a.easeIn):1,_=this.focal(),M=(u-d)/Math.max(u,1e-6),w=1-Math.exp(-a.rate*t.follow.rateScale*v*e),E=Math.atan(c/_)*M*w,A=Math.atan(h/_)*M*w;i.turn.yaw=-E,i.turn.pitch=-A;const P=u;this.reanchor(i.turn.yaw,i.turn.pitch);const b=Math.hypot(this.cursor.x-o,this.cursor.y-l),S=(P-b)/e;this.followT>a.easeIn&&S<a.minPxPerSec*r&&(this.following=!1)}const m=this.feel.edge;if(this.cooldown>0&&(this.cooldown=Math.max(0,this.cooldown-e)),this.posture==="MOVING")this.moveT+=e,i.rise=this.moveDir*this.feel.rise.speed*e,(this.moveDir>0&&n>=1||this.moveDir<0&&n<=0||!t.edgePosture)&&(this.posture="COOLDOWN",this.cooldown=m.cooldownSec);else if(!t.edgePosture)this.posture=this.cooldown>0?"COOLDOWN":"SEATED",this.dwellUp=this.dwellDown=0;else if(this.cooldown>0)this.posture="COOLDOWN",this.dwellUp=this.dwellDown=0;else{const v=(w,E)=>{const A=m.barHeightShare[0]+(m.barHeightShare[1]-m.barHeightShare[0])*Math.min(1,E/m.dwellSec),P=m.barWidthShare*this.size.x/2;return(w?this.cursor.y<=A*this.size.y:this.cursor.y>=this.size.y*(1-A))&&Math.abs(this.cursor.x-o)<=P},_=n<1&&v(!0,this.dwellUp),M=n>0&&v(!1,this.dwellDown);this.dwellUp=_?this.dwellUp+e:0,this.dwellDown=M?this.dwellDown+e:0,this.posture=_?"DWELL_UP":M?"DWELL_DOWN":"SEATED",(this.dwellUp>=m.dwellSec||this.dwellDown>=m.dwellSec)&&(this.moveDir=this.dwellUp>=m.dwellSec?1:-1,i.events.push(this.moveDir>0?"postureUp":"postureDown"),this.posture="MOVING",this.moveT=0,this.dwellUp=this.dwellDown=0)}const p=this.feel.peel;if(t.cornerPeel){const v=this.cursor.x<=p.cornerShare*this.size.y&&this.cursor.y<=p.cornerShare*this.size.y;(this.cursor.x>p.leaveShare*this.size.y||this.cursor.y>p.leaveShare*this.size.y)&&(this.peelArmed=!0),this.peelT=v&&this.peelArmed?this.peelT+e:0,this.peelT>=p.dwellSec&&(i.events.push("peel"),this.peelArmed=!1,this.peelT=0)}else this.peelT=0;return i}dwell(){const e=this.feel.edge.dwellSec;return{up:Math.min(1,this.dwellUp/e),down:Math.min(1,this.dwellDown/e)}}}const Lv={0:"click",11:"click",1:"back",2:"confirm",3:"discard",8:"skip",9:"pause",4:"cardHold",5:"wheel",12:"foe1",15:"foe2",13:"foe3",14:"foe4"},Dv={7:"click",6:"back"},nh=(s,e)=>Math.abs(s)<e?0:(s-Math.sign(s)*e)/(1-e);function Iv(s,e){const t=e.pad.deadZone,n=s[0]??0,i=s[1]??0;let r=s[2]??0,a=s[3]??0;const o=Math.hypot(r,a);if(o<t)r=a=0;else{const l=Math.min(1,(o-t)/(1-t))/o;r*=l,a*=l}return{side:nh(n,t),rise:-nh(i,t),look:{x:r,y:a}}}function Nv(s,e,t){const i=Math.hypot(s.x,s.y)*t.look.stickPxPerSec*t.look.speed*e;return{x:s.x*i,y:s.y*i}}class Uv{constructor(){this.held=new Set}poll(e,t){const n=[],i=[],r=(a,o,l)=>{const c=this.held.has(a);o&&!c?(this.held.add(a),n.push(l)):!o&&c&&(this.held.delete(a),i.push(l))};for(const[a,o]of Object.entries(Lv))r(`b${a}`,!!e[Number(a)]?.pressed,o);for(const[a,o]of Object.entries(Dv)){const l=e[Number(a)]?.value??0,c=this.held.has(`t${a}`);r(`t${a}`,c?l>t.pad.triggerRelease:l>=t.pad.triggerPress,o)}return{down:n,up:i}}}const ih={Space:"cardHold",Enter:"confirm",NumpadEnter:"confirm",Backspace:"clear",KeyX:"discard",KeyN:"skip",Escape:"pause",Tab:"wheel",Digit1:"foe1",Digit2:"foe2",Digit3:"foe3",Digit4:"foe4"};class PM{constructor(e,t,n=!0){this.el=e,this.feel=t,this.lockOnClick=n,this.keys=new Set,this.moveAcc={x:0,y:0},this.at=null,this.wheel=0,this.drag={x:0,y:0},this.middle=null,this.down=[],this.up=[],this.sitBack=!1,this.device="KBM",this.edges=new Uv,this.padIndex=null,this.off=[];const i=(r,a,o=window)=>{o.addEventListener(r,a,{passive:!1}),this.off.push(()=>o.removeEventListener(r,a))};i("keydown",r=>{if(r.target?.tagName==="INPUT"||(this.device="KBM",r.repeat))return;this.keys.add(r.code);const a=ih[r.code];a&&(this.down.push(a),(r.code==="Space"||r.code==="Tab")&&r.preventDefault())}),i("keyup",r=>{this.keys.delete(r.code);const a=ih[r.code];a&&this.up.push(a)}),i("blur",()=>this.keys.clear()),i("mousemove",r=>{if(this.device="KBM",document.pointerLockElement===this.el)this.moveAcc.x+=r.movementX,this.moveAcc.y+=r.movementY,this.middle&&(this.drag.x+=r.movementX,this.drag.y+=r.movementY,this.middle.moved+=Math.abs(r.movementX)+Math.abs(r.movementY));else{const a=this.el.getBoundingClientRect();this.at={x:r.clientX-a.left,y:r.clientY-a.top}}}),i("mousedown",r=>{this.device="KBM",r.button===0&&(this.lockOnClick&&document.pointerLockElement!==this.el&&this.el.requestPointerLock?.(),this.down.push("click")),r.button===1&&(r.preventDefault(),this.middle={t:performance.now(),moved:0}),r.button===2&&this.down.push("back")}),i("mouseup",r=>{r.button===0&&this.up.push("click"),r.button===1&&this.middle&&(performance.now()-this.middle.t<=200&&this.middle.moved<6&&(this.sitBack=!0),this.middle=null),r.button===2&&this.up.push("back")}),i("contextmenu",r=>r.preventDefault()),i("wheel",r=>{r.preventDefault(),this.device="KBM";const a=Math.max(1,Math.round(Math.abs(r.deltaY)/100));this.wheel+=r.deltaY<0?a:-a},e),i("gamepadconnected",r=>{this.padIndex===null&&(this.padIndex=r.gamepad.index)})}setFeel(e){this.feel=e}get captured(){return document.pointerLockElement===this.el}frame(){const e=l=>this.keys.has(l)?1:0;let t=e("KeyD")-e("KeyA"),n=e("KeyW")+e("ArrowUp")-e("KeyS")-e("ArrowDown"),i={x:0,y:0};const r=typeof navigator<"u"&&navigator.getGamepads?navigator.getGamepads():[],a=this.padIndex!==null?r[this.padIndex]:null;if(a&&a.mapping==="standard"){const l=Iv(a.axes,this.feel),{down:c,up:h}=this.edges.poll(a.buttons,this.feel);(l.side||l.rise||l.look.x||l.look.y||c.length)&&(this.device="PAD"),this.device==="PAD"&&(t=t||l.side,n=n||l.rise,i=l.look);const u=d=>d==="back"?"back":d;this.down.push(...c.map(u)),this.up.push(...h.map(u))}const o={device:this.device,move:this.moveAcc,at:this.at,wheelSteps:this.wheel,side:Math.max(-1,Math.min(1,t)),rise:Math.max(-1,Math.min(1,n)),lean:0,look:i,dragLook:this.drag,down:this.down,up:this.up,sitBack:this.sitBack,captured:this.captured};return this.moveAcc={x:0,y:0},this.at=null,this.wheel=0,this.drag={x:0,y:0},this.down=[],this.up=[],this.sitBack=!1,o}dispose(){this.off.forEach(e=>e())}}const Na={pointerMode:"menu",bodyIdle:!0,follow:{on:!1,deadZonePx:60,rateScale:1,pickDeadZoneShare:0},followBlockRects:[],anchor:!1,edgePosture:!1,cornerPeel:!1,warpTo:null,lookScale:1,carryShare:0},yu=new WeakSet;function LM(s){return yu.add(s),s}function Fv(s){return yu.delete(s)}class DM{constructor(e){this.device="KBM",this.lookPending={x:0,y:0},this.lastWarp=null,this.p=new I,this.q=new mt,this.refusedDirectives=0,this.feel=e.feel??Fr,this.anchorSet=e.anchor,this.turnGated=e.turnGated??!1,this.camera=e.camera??new zt(e.anchor.fov,16/9,.02,30),this.baseFov=e.anchor.fov,this.body=new Av({anchor:e.anchor,feel:this.feel}),this.pointer=new Pv(this.feel);const t=e.size??{x:1280,y:720};this.pointer.setSize(t.x,t.y),this.apply()}get anchor(){return this.anchorSet}setFeel(e){this.feel=e,this.body.feel=e,this.pointer.feel=e}setSize(e,t){this.pointer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}update(e,t,n=Na){this.turnGated&&n!==Na&&!Fv(n)&&(this.refusedDirectives++,n=Na);const i=[],r=this.body;if(r.idle=n.bodyIdle,t){if(this.device=t.device,t.at&&!t.captured&&this.pointer.setPosition(t.at.x,t.at.y),n.pointerMode==="play"?this.pointer.centre():this.pointer.move(t.move.x,t.move.y),n.bodyIdle)r.holdSide(0),this.lookPending={x:0,y:0};else{r.holdSide(t.side),t.rise&&r.riseBy(t.rise*this.feel.rise.speed*e),t.wheelSteps&&r.leanSteps(t.wheelSteps),t.lean&&r.leanSteps(t.lean*this.feel.lean.padStepsPerSec*e),t.sitBack&&(r.reset(),i.push("sitBack"));const d=Nv(t.look,e,this.feel);this.lookPending.x+=d.x+t.dragLook.x,this.lookPending.y+=d.y+t.dragLook.y}t.down.includes("click")&&i.push("click")}const a=this.feel.look.smoothTau,o=a>0?1-Math.exp(-e/a):1,l=Math.abs(this.lookPending.x)<.05?this.lookPending.x:this.lookPending.x*o,c=Math.abs(this.lookPending.y)<.05?this.lookPending.y:this.lookPending.y*o;if(this.lookPending.x-=l,this.lookPending.y-=c,l||c){const d={yaw:r.req.yaw,pitch:r.req.pitch};r.turn(l,c,n.lookScale),n.pointerMode!=="play"&&this.pointer.reanchor(r.req.yaw-d.yaw,r.req.pitch-d.pitch)}const h=n.warpTo?`${n.warpTo.x},${n.warpTo.y}`:null;h&&h!==this.lastWarp&&this.device!=="PAD"&&this.pointer.warpShare(n.warpTo),this.lastWarp=h,this.pointer.fov=this.camera.fov;const u=this.pointer.update(e,n,r.req.rise);return!n.bodyIdle&&(u.turn.yaw||u.turn.pitch)&&r.turnBy(u.turn.yaw,u.turn.pitch),u.rise&&r.riseBy(u.rise),u.events.includes("peel")&&i.push("peel"),r.update(e),this.apply(),this.report(i,t?.captured??!1)}apply(){this.body.eyeWorld(this.p,this.q),this.camera.position.copy(this.p),this.camera.quaternion.copy(this.q),this.camera.fov=this.baseFov*this.body.zoomShare(),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0)}report(e=[],t=!1){const n=this.body.pose;return{cursor:{...this.pointer.cursor},size:{...this.pointer.size},device:this.device,posture:this.pointer.posture,dwell:this.pointer.dwell(),captured:t,matrixWorld:this.camera.matrixWorld.toArray(),fov:this.camera.fov,baseFov:this.baseFov,pose:{leanForward:n.lean,side:n.side,stretch:n.stretch,rise:n.rise,yaw:n.yaw,pitch:n.pitch},events:e}}}const IM=["SETUP_SEATS","SETUP_ASSIGN","SETUP_EAR_ROLL","ROUND_START","DRAW_SPLIT","DRAW","CHOOSE","PLACE","REVEAL","RESOLVE_NEXT","RESOLVE_FLAG","RESOLVE_CARD","RESOLVE_CHALLENGE","RESOLVE_CONTEST","RESOLVE_DECIDE","RESOLVE_APPLY","FAVOR","SCORE","SKULLS","RETURN","PASS","EAR_MOVE","END_CHECK","GAME_OVER"],Or="INIT",Mu={INIT:["SETUP_SEATS"],SETUP_SEATS:["SETUP_ASSIGN"],SETUP_ASSIGN:["SETUP_ASSIGN","SETUP_EAR_ROLL"],SETUP_EAR_ROLL:["SETUP_EAR_ROLL","ROUND_START"],ROUND_START:["DRAW_SPLIT"],DRAW_SPLIT:["DRAW"],DRAW:["CHOOSE"],CHOOSE:["PLACE"],PLACE:["REVEAL"],REVEAL:["RESOLVE_NEXT"],RESOLVE_NEXT:["RESOLVE_FLAG","RESOLVE_CARD","FAVOR"],RESOLVE_FLAG:["RESOLVE_CARD","RESOLVE_NEXT"],RESOLVE_CARD:["RESOLVE_CHALLENGE","RESOLVE_CONTEST","RESOLVE_DECIDE","RESOLVE_APPLY","RESOLVE_NEXT"],RESOLVE_CHALLENGE:["RESOLVE_APPLY"],RESOLVE_CONTEST:["RESOLVE_CONTEST","RESOLVE_APPLY"],RESOLVE_DECIDE:["RESOLVE_APPLY"],RESOLVE_APPLY:["RESOLVE_CARD","SKULLS","GAME_OVER"],FAVOR:["SCORE"],SCORE:["SKULLS","RETURN","GAME_OVER"],SKULLS:["RESOLVE_CARD","RETURN"],RETURN:["PASS"],PASS:["EAR_MOVE"],EAR_MOVE:["END_CHECK"],END_CHECK:["ROUND_START","GAME_OVER"],GAME_OVER:[]},Ov={SETUP_SEATS:["seats.setup"],SETUP_ASSIGN:["decide.character","mat.assign"],SETUP_EAR_ROLL:["dice.roll","ear.move"],ROUND_START:["stats.set"],DRAW_SPLIT:["decide.split"],DRAW:["cards.draw"],CHOOSE:["decide.play"],PLACE:["cards.place"],REVEAL:["cards.flip"],RESOLVE_NEXT:[],RESOLVE_FLAG:["decide.super"],RESOLVE_CARD:["cards.resolve","cards.discard","super.play"],RESOLVE_CHALLENGE:["dice.roll"],RESOLVE_CONTEST:["dice.roll"],RESOLVE_DECIDE:["decide.pick"],RESOLVE_APPLY:["stats.set","pip.goTo","gonfalon.move","cards.discard","cards.reveal","dice.roll"],FAVOR:["gonfalon.move","pip.goTo","dice.roll"],SCORE:["pip.goTo"],SKULLS:["health.flip"],RETURN:["gonfalon.move","cards.discard"],PASS:["cards.pass","cards.discard"],EAR_MOVE:["ear.move","stats.set"],END_CHECK:[],GAME_OVER:["game.over"]},kv={SETUP_ASSIGN:"decide.character",DRAW_SPLIT:"decide.split",CHOOSE:"decide.play",RESOLVE_DECIDE:"decide.pick",RESOLVE_FLAG:"decide.super"};class zv extends Error{constructor(e,t){super(`IllegalTransition: ${e} -> ${t} (allowed: ${(Mu[e]??[]).join(", ")||"none"})`),this.from=e,this.to=t,this.name="IllegalTransition"}from;to}class Bv extends Error{constructor(e,t){super(`IllegalCommand: ${t} may not be issued in ${e}`),this.state=e,this.kind=t,this.name="IllegalCommand"}state;kind}function Vv(s,e){return Mu[s]?.includes(e)??!1}function Hv(s,e){return s===Or?!1:e==="announce"?!0:Ov[s].includes(e)}class Gv{cur=Or;seq=0;log=[];listeners=[];get state(){return this.cur}onTransition(e){return this.listeners.push(e),()=>this.listeners=this.listeners.filter(t=>t!==e)}go(e,t,n){if(!Vv(this.cur,e))throw new zv(this.cur,e);const i={seq:++this.seq,from:this.cur,to:e,round:t,...n?{note:n}:{}};this.cur=e,this.log.push(i);for(const r of this.listeners)r(i);return i}}const Tr=[{id:"general",title:"The General",profileName:"Lord-General Aldric Vane",factions:["Army"],long:["corruption","violence"],pass:"discard",startWealth:4},{id:"knight",title:"The Knight",profileName:"Ser Gawen Hollis",factions:["Army"],long:["piety","violence"],pass:"halt",startWealth:6},{id:"priest",title:"The Priest",profileName:"Father Osric Penhallow",factions:["Church"],long:["corruption","charisma"],pass:"halt",startWealth:2},{id:"matron",title:"The Saint",profileName:"Mother Brigid Ashcombe",factions:["Church"],long:["piety","charisma"],pass:"halt",startWealth:2},{id:"rogue",title:"The Rogue",profileName:'"Silver" Tam Larkspur',factions:["Underground"],long:["corruption","violence"],pass:"discard",startWealth:2},{id:"spymaster",title:"The Spymaster",profileName:'Corvina Mott, "the Moth"',factions:["Underground"],long:["corruption","charisma"],pass:"discard",startWealth:6},{id:"duchess",title:"The Duchess",profileName:"Isolde, Duchess of Wrenmoor",factions:["Aristocracy"],long:["corruption","charisma"],pass:"left",startWealth:10},{id:"dilettante",title:"The Dilettante",profileName:"Lady Seraphine Delacourt",factions:["Aristocracy"],long:["corruption","violence"],pass:"left",startWealth:6},{id:"merchant_prince",title:"The Importer",profileName:"Lorenzo Saffiar",factions:["Merchants"],long:["piety","charisma"],pass:"right",startWealth:6},{id:"innkeeper",title:"The Innkeeper",profileName:"Maud Greaves of the Crooked Crown",factions:["Merchants"],long:["piety","violence"],pass:"right",startWealth:4},{id:"farm_hand",title:"The Farm Hand",profileName:"Hob Tillman",factions:["People"],long:["piety","violence"],pass:"right",startWealth:2},{id:"fool",title:"The Fool",profileName:"Pip Motley",factions:["People","Aristocracy"],long:["piety","charisma"],pass:"left",startWealth:2}];function Su(s){return fs(s).title}function fs(s){const e=Tr.find(t=>t.id===s);if(!e)throw new Error(`unknown character ${s}`);return e}const sh=5,rh=4,Ua=10,Fa=10,ah=10,oh=[1,1,1,1,1,2,2,2,2,3],Wv=10,ch=3,Xv=[{name:"Buy Support",type:"Major Deed",lines:[{text:"-5 Wealth",children:[]},{text:"+4 Crowns",children:[]}]},{name:"Diplomatic Envoy",type:"Major Deed",lines:[{text:"+2 Charisma",children:[]},{text:"Favor of the Aristocracy",children:[]}]},{name:"Enlist",type:"Major Deed",lines:[{text:"+1 Violence",children:[]},{text:"Favor of the Army",children:[]}]},{name:"Feed the Poor",type:"Major Deed",lines:[{text:"-2 Wealth",children:[]},{text:"+1 Charisma",children:[]},{text:"Favor of the People",children:[]}]},{name:"Feed the Wealthy",type:"Major Deed",lines:[{text:"-2 Wealth",children:[]},{text:"+1 Charisma",children:[]},{text:"Favor of the Merchants",children:[]},{text:"Favor of the Aristocracy",children:[]}]},{name:"Fence Contraband",type:"Major Deed",lines:[{text:"+1 Corruption",children:[]},{text:"+2 Wealth",children:[]},{text:"Favor of the Underground",children:[]}]},{name:"Host a Tournament",type:"Major Deed",lines:[{text:"-5 Wealth",children:[]},{text:"Favor of the People",children:[]},{text:"Favor of the Army",children:[]}]},{name:"Host a Debate",type:"Major Deed",lines:[{text:"-2 Wealth",children:[]},{text:"+5 Crowns",children:[]},{text:"Charisma Grand Contest",children:[{text:"Winner:",children:[{text:"Favor of the People",children:[]}]},{text:"Others:",children:[{text:"-1 Crown",children:[]}]}]}]},{name:"Host the Gauntlet",type:"Major Deed",lines:[{text:"-3 Wealth",children:[]},{text:"Steal Favor of the Merchants",children:[]},{text:"Violence Grand Contest",children:[{text:"Winner:",children:[{text:"Favor of the People",children:[]}]},{text:"Others:",children:[{text:"-1 Health",children:[]}]}]}]},{name:"Invest Well",type:"Major Deed",lines:[{text:"+1 Crown per 2 Wealth",children:[]},{text:"Gain at least +1 to play",children:[],kind:"inote"},{text:"Favor of the Merchants",children:[]}]},{name:"Serve Faithfully",type:"Major Deed",lines:[{text:"+2 Piety",children:[]},{text:"Favor of the Church",children:[]}]},{name:"Work Overtime",type:"Major Deed",lines:[{text:"-1 Health",children:[]},{text:"+6 Wealth",children:[]},{text:"Favor of the Merchants",children:[]}]},{name:"Calm a Jumper",type:"Charismatic Deed",lines:[{text:"+2 Piety",children:[]},{text:"Favor of the Aristocracy",children:[]}]},{name:"Shell Game",type:"Charismatic Deed",lines:[{text:"+1 Corruption",children:[]},{text:"+1 Wealth per Charisma",children:[]},{text:"Favor of the Underground",children:[]}],illegal:!0},{name:"Steal the Credit",type:"Charismatic Deed",lines:[{text:"",children:[],kind:"sym",icons:["sack"]},{text:"Steal one faction of your choice from a Violent character",children:[]}]},{name:"Sue for Peace",type:"Charismatic Deed",lines:[{text:"+2 Charisma",children:[]},{text:"Favor of the People",children:[]}]},{name:"Abduct",type:"Corrupt Deed",lines:[{text:"+1 Violence",children:[]},{text:"Violence Contest",children:[{text:"Actor win:",children:[{text:"Target chooses a readied deed to discard",children:[]},{text:"Favor of the Underground",children:[]}]},{text:"Target win:",children:[{text:"+2 Crowns",children:[]}]}]}]},{name:"Extort",type:"Corrupt Deed",lines:[{text:"+1 Charisma",children:[]},{text:"Charisma Contest",children:[{text:"Actor win:",children:[{text:"Steal all Wealth",children:[],kind:"sym",icons:["theftplain"]}]},{text:"Target win:",children:[{text:"+2 Crowns",children:[]}]}]}]},{name:"Poison",type:"Corrupt Deed",lines:[{text:"+2 Corruption",children:[]},{text:"Target: -3 Health",children:[]}],illegal:!0},{name:"Repent",type:"Corrupt Deed",lines:[{text:"+2 Piety per Corruption",children:[]},{text:"Favor of the Church",children:[]}]},{name:"Courageous Stand",type:"Violent Deed",lines:[{text:"-2 Health",children:[]},{text:"+3 Crowns",children:[]},{text:"+1 Piety",children:[]},{text:"Favor of the Army",children:[]}]},{name:"Defend the King",type:"Violent Deed",lines:[{text:"+3 Crowns",children:[]},{text:"Favor of the Aristocracy",children:[]}]},{name:"Protection Racket",type:"Violent Deed",lines:[{text:"+1 Corruption",children:[]},{text:"+1 Wealth per Violence",children:[]},{text:"Favor of the Underground",children:[]}]},{name:"Rout the Enemy",type:"Violent Deed",lines:[{text:"+2 Violence",children:[]},{text:"Favor of the Army",children:[]}]},{name:"Defend the Innocent",type:"Virtuous Deed",lines:[{text:"+1 Violence",children:[]},{text:"Favor of the People",children:[]}]},{name:"Fall from Grace",type:"Virtuous Deed",lines:[{text:"+2 Corruption per Piety",children:[]},{text:"Favor of the Underground",children:[]}]},{name:"Healing Prayer",type:"Virtuous Deed",lines:[{text:"+2 Piety",children:[]},{text:"+1 Crown",children:[]},{text:"Favor of the Church",children:[]},{text:"Target an Opponent",children:[{text:"+2 Health",children:[]}],req:[["health","8","-"]]}]},{name:"Host a Charity",type:"Virtuous Deed",lines:[{text:"+1 Charisma",children:[]},{text:"Favor of the Aristocracy",children:[]},{text:"Favor of the Church",children:[]}]},{name:"Aid and Abet",type:"Minor Deed",lines:[{text:"+1 Corruption",children:[]},{text:"Favor of the Underground",children:[]}]},{name:"Brawl",type:"Minor Deed",lines:[{text:"+2 Violence",children:[]}]},{name:"Influence",type:"Minor Deed",lines:[{text:"Shift a character’s morality trait toward your character’s",children:[]}]},{name:"Mug",type:"Minor Deed",lines:[{text:"+1 Corruption",children:[]},{text:"+1 Wealth",children:[]},{text:"Target:",children:[{text:"-1 Wealth",children:[]},{text:"If less Violent -2 Health",children:[]}]}],illegal:!0},{name:"Orate",type:"Minor Deed",lines:[{text:"+1 Charisma",children:[]},{text:"Hold the People’s attention",children:[]},{text:"The Favor of the People cannot be stolen from you this round if gained",children:[],kind:"inote"}]},{name:"Pray",type:"Minor Deed",lines:[{text:"+1 Piety",children:[]},{text:"When involved in a Contest, add 2 to Violence or Charisma rolls",children:[]}]},{name:"Seek Humility",type:"Minor Deed",lines:[{text:"+1 Piety",children:[]},{text:"+1 Crown",children:[]}]},{name:"Toast the King",type:"Minor Deed",lines:[{text:"+1 Charisma",children:[{text:"+1 Crown",children:[]}]}]},{name:"Wine & Dine",type:"Minor Deed",lines:[{text:"-2 Wealth",children:[]},{text:"+1 Crown",children:[]}]},{name:"Train",type:"Minor Deed",lines:[{text:"+1 Health",children:[]},{text:"+1 Violence",children:[]}]},{name:"Work",type:"Minor Deed",lines:[{text:"+2 Wealth",children:[]}]},{name:"Scandal",type:"Major Deed",lines:[{text:"Name a faction",children:[]},{text:"Gaining its favor: -1 Crown",children:[]}]},{name:"Ritual of Silence",type:"Major Deed",lines:[{text:"+2 Piety",children:[]},{text:"Favor of the Church",children:[]},{text:"Charisma gains are impossible for the rest of the round",children:[]}]},{name:"Deposit",type:"Major Deed",lines:[{text:"+1 Crown",children:[]},{text:"Favor of the Merchants",children:[]},{text:"Stealing Wealth from this player is blocked",children:[]}]},{name:"Keep Watch",type:"Minor Deed",lines:[{text:"Blocks Poison and Mug",children:[]}]},{name:"Get Assurances",type:"Minor Deed",lines:[{text:"Protect one faction this round.",children:[]},{text:"When a player tries to take it, place it on this card.",children:[]}]},{name:"Burgle",type:"Corrupt Deed",lines:[{text:"+4 Wealth",children:[]},{text:"+1 Corruption",children:[]},{text:"Target:",children:[{text:"-4 Wealth",children:[]}],req:[["wealth","4","+"]]}],illegal:!0}],$v=[{name:"Buy Support",type:"Major Deed",copies:2},{name:"Diplomatic Envoy",type:"Major Deed",copies:2},{name:"Enlist",type:"Major Deed",copies:2},{name:"Feed the Poor",type:"Major Deed",copies:2},{name:"Feed the Wealthy",type:"Major Deed",copies:2},{name:"Fence Contraband",type:"Major Deed",copies:2},{name:"Host a Tournament",type:"Major Deed",copies:2},{name:"Host a Debate",type:"Major Deed",copies:2},{name:"Host the Gauntlet",type:"Major Deed",copies:2},{name:"Invest Well",type:"Major Deed",copies:2},{name:"Serve Faithfully",type:"Major Deed",copies:2},{name:"Work Overtime",type:"Major Deed",copies:2},{name:"Calm a Jumper",type:"Charismatic Deed",copies:2},{name:"Shell Game",type:"Charismatic Deed",copies:2},{name:"Steal the Credit",type:"Charismatic Deed",copies:2},{name:"Sue for Peace",type:"Charismatic Deed",copies:2},{name:"Abduct",type:"Corrupt Deed",copies:2},{name:"Extort",type:"Corrupt Deed",copies:2},{name:"Poison",type:"Corrupt Deed",copies:2},{name:"Repent",type:"Corrupt Deed",copies:2},{name:"Courageous Stand",type:"Violent Deed",copies:2},{name:"Defend the King",type:"Violent Deed",copies:2},{name:"Protection Racket",type:"Violent Deed",copies:2},{name:"Rout the Enemy",type:"Violent Deed",copies:2},{name:"Defend the Innocent",type:"Virtuous Deed",copies:2},{name:"Fall from Grace",type:"Virtuous Deed",copies:2},{name:"Healing Prayer",type:"Virtuous Deed",copies:2},{name:"Host a Charity",type:"Virtuous Deed",copies:2},{name:"Aid and Abet",type:"Minor Deed",copies:6},{name:"Brawl",type:"Minor Deed",copies:6},{name:"Influence",type:"Minor Deed",copies:6},{name:"Mug",type:"Minor Deed",copies:6},{name:"Orate",type:"Minor Deed",copies:6},{name:"Pray",type:"Minor Deed",copies:6},{name:"Seek Humility",type:"Minor Deed",copies:6},{name:"Toast the King",type:"Minor Deed",copies:6},{name:"Wine & Dine",type:"Minor Deed",copies:6},{name:"Train",type:"Minor Deed",copies:6},{name:"Work",type:"Minor Deed",copies:6},{name:"Scandal",type:"Major Deed",copies:2},{name:"Ritual of Silence",type:"Major Deed",copies:2},{name:"Deposit",type:"Major Deed",copies:2},{name:"Keep Watch",type:"Minor Deed",copies:6},{name:"Get Assurances",type:"Minor Deed",copies:6},{name:"Burgle",type:"Corrupt Deed",copies:2}],_n=["army","people","church","aristocracy","merchants","underground"],qv={army:"Army",people:"People",church:"Church",aristocracy:"Aristocracy",merchants:"Merchants",underground:"Underground"},jv={wealth:"wealth",health:"health",crown:"crowns",crowns:"crowns",piety:"piety",corruption:"corruption",violence:"violence",charisma:"charisma"},lh={army:"army",people:"people",church:"church",aristocrats:"aristocracy",aristocracy:"aristocracy",merchants:"merchants",underground:"underground"},hh={"Steal one faction of your choice from a Violent character":{k:"favorPick",from:"target"},"Target chooses a readied deed to discard":{k:"discard",what:"readied",chooser:"target"},"Steal all Wealth":{k:"steal",stat:"wealth",amount:"all",from:"target"},"Shift a character’s morality trait toward your character’s":{k:"shiftToward",scale:"morality"},"Hold the People’s attention":"","The Favor of the People cannot be stolen from you this round if gained":{k:"rule",rule:{r:"holdFavor",faction:"people"},when:"reveal"},"When involved in a Contest, add 2 to Violence or Charisma rolls":{k:"rule",rule:{r:"contestBonus",n:2},when:"reveal"},"Name a faction":"","Gaining its favor: -1 Crown":{k:"rule",rule:{r:"punishFavor",faction:"named",crowns:-1},when:"resolve"},"Charisma gains are impossible for the rest of the round":{k:"rule",rule:{r:"blockGain",stat:"charisma"},when:"resolve"},"Stealing Wealth from this player is blocked":{k:"rule",rule:{r:"shieldWealth"},when:"reveal"},"Blocks Poison and Mug":{k:"rule",rule:{r:"shieldCards",cards:["Poison","Mug"]},when:"reveal"},"Protect one faction this round.":"","When a player tries to take it, place it on this card.":{k:"rule",rule:{r:"protectFavor",faction:"named"},when:"reveal"},"Gain at least +1 to play":""};function Kv(s){for(const[e,t,n]of s??[]){if(e==="wealth"&&t==="4"&&n==="+")return"wealth4";if(e==="health"&&t==="8"&&n==="-")return"health8"}return null}function Ni(s){return jv[s.toLowerCase()]??null}function uh(s,e,t,n){const i={idx:e,name:s.name,type:s.type,deck:n,copies:t,ops:[],cost:0,target:null,namesFaction:!1,factionFromTarget:!1,illegal:s.illegal===!0,minGain:!1,steals:s.name==="Burgle",unparsed:[]},r=(a,o,l)=>{const c=a.text.trim();let h;const u=Kv(a.req);if(a.req&&!u&&i.unparsed.push(`requirement badge ${JSON.stringify(a.req)}`),!(a.kind==="sym"&&!c)){if(c in hh){const d=hh[c];(c==="Name a faction"||c==="Protect one faction this round.")&&(i.namesFaction=!0),c==="Gain at least +1 to play"&&(i.minGain=!0),d&&d.k==="favorPick"&&(i.target??={cond:"violent",optional:!1},i.factionFromTarget=!0),d&&d.k==="shiftToward"&&(i.target??={cond:"any",optional:!1}),d&&l.push(structuredClone(d))}else if((h=c.match(/^([+-])\s*(\d+)\s+(\w+)\s+per\s+(?:(\d+)\s+)?(\w+)$/i))&&Ni(h[3])&&Ni(h[5])){const d=Number(h[2])*(h[1]==="-"?-1:1);l.push({k:"gainPer",stat:Ni(h[3]),n:d,per:Ni(h[5]),div:h[4]?Number(h[4]):1,who:o})}else if((h=c.match(/^([+-])\s*(\d+)\s+(\w+)$/))&&Ni(h[3])){const d=Number(h[2])*(h[1]==="-"?-1:1),f=Ni(h[3]);f==="wealth"&&d<0&&o==="self"&&(i.cost+=-d),l.push({k:"gain",stat:f,n:d,who:o});for(const x of a.children)r(x,o,l);return}else if((h=c.match(/^(Steal )?Favor of the (\w+)$/i))&&lh[h[2].toLowerCase()])l.push({k:"favor",faction:lh[h[2].toLowerCase()],steal:!!h[1]});else if((h=c.match(/^Target(?: an Opponent)?(?:\s*\((.*)\))?:?\s*(.*)$/))&&/^Target( an Opponent)?\b/.test(c)){const d=u??(/4 or more Wealth/i.test(h[1]??"")?"wealth4":/8 or fewer Health/i.test(h[1]??"")?"health8":"any");i.target={cond:d,optional:d==="health8"},h[2]&&r({text:h[2],children:[]},"target",l);for(const f of a.children)r(f,"target",l);return}else if(h=c.match(/^if less Violent (.*)$/i)){const d=[];r({text:h[1],children:[]},o,d),l.push({k:"if",test:{t:"targetLess",stat:"violence"},ops:d})}else if(h=c.match(/^(Violence|Charisma) (Grand )?Contest$/i)){const d=!!h[2],f=[],x=[];for(const g of a.children){const m=g.text.trim();if(/^(Winner|Actor win):$/i.test(m))for(const p of g.children)r(p,"self",f);else if(/^Others:$/i.test(m))for(const p of g.children)r(p,"self",x);else if(/^Target win:$/i.test(m))for(const p of g.children)r(p,"target",x);else i.unparsed.push(m)}d||(i.target??={cond:"any",optional:!1}),l.push({k:"contest",virtue:h[1].toLowerCase(),vs:d?"grand":"target",win:f,lose:x});return}else i.unparsed.push(c),l.push({k:"placeholder",text:c});for(const d of a.children)r(d,o,l)}};for(const a of s.lines)r(a,"self",i.ops);return i.target&&i.ops.unshift({k:"target",cond:i.target.cond,optional:i.target.optional}),i}function Yv(){const s=Xv;return $v.map((t,n)=>{const i=s.find(a=>a.name===t.name),r=t.type==="Minor Deed"?"minor":"major";if(!i){const a=uh({name:t.name,type:t.type,lines:[]},n,t.copies,r);return a.unparsed.push("(no card text in deck.json)"),a.ops.push({k:"placeholder",text:"(no card text in deck.json)"}),a}return uh(i,n,t.copies,r)})}const Ls=Yv();function bu(s){switch(s.k){case"gain":return`${s.who==="target"?"target ":""}${s.n>=0?"+":""}${s.n} ${s.stat}`;case"gainPer":return`${s.n>=0?"+":""}${s.n} ${s.stat} per ${s.div>1?s.div+" ":""}${s.per}`;case"steal":return`steal ${s.amount} ${s.stat}`;case"favor":return`${s.steal?s.lock?"steal and lock ":"steal ":""}favor ${s.faction}`;case"favorPick":return"steal one favor of the target's";case"target":return`target (${s.cond}${s.optional?", optional":""})`;case"super":return`super ${s.id}`;case"contest":return`${s.virtue==="violence"?"Violence":"Charisma"} Contest`;case"if":return`if ${s.test.t}: ${s.ops.map(bu).join(", ")}`;case"shiftToward":return`shift ${s.scale} toward the actor's`;case"discard":return`${s.chooser} discards a ${s.what} deed`;case"rule":return`rule ${s.rule.r}`;case"placeholder":return`PLACEHOLDER "${s.text}"`}}class Zv{seq=0;listeners=new Map;history=[];keepHistory=!0;on(e,t){const n=this.listeners.get(e)??[];return n.push(t),this.listeners.set(e,n),()=>this.listeners.set(e,(this.listeners.get(e)??[]).filter(i=>i!==t))}emit(e,t,n){const i={type:e,seq:++this.seq,round:n.round,state:n.state,data:t};this.keepHistory&&this.history.push(i);for(const r of this.listeners.get(e)??[])r(i);for(const r of this.listeners.get("*")??[])r(i);return i}}const Jv="martial-law-then-ear-else-unawarded",Nt={DIE_SIDES:6,HOST_SEAT:0,CLOCKWISE:1,START_STEP:0,CROWN_FLOOR:0,FAVOR_MIN_SCORE:1,OVERFLOW_CROWNS_PER_POINT:1,STEAL_NO_COMPARE:!0,INFLUENCE_STEP:1,RESHUFFLE_DISCARD:!0,SCORE_ORDER:["army","people","church","aristocracy","merchants","underground"]},dh=(s,e)=>e==="self"?s.actor:s.target,Qv={gain(s,e,t){const n=dh(e,e.op.who);n!==null&&s.gain(e,n,e.op.stat,e.op.n,t)},gainPer(s,e,t){const n=e.op,i=dh(e,n.who);if(i===null)return;const r=Math.floor(s.statOf(i,n.per)/n.div)*n.n;s.note(`seat ${i} ${n.n>=0?"+":""}${n.n} ${n.stat} per ${n.div>1?n.div+" ":""}${n.per} = ${r}`),s.gain(e,i,n.stat,r,t)},steal(s,e,t){const n=e.op;if(e.target===null)return;if(s.wealthShielded(e.target))return s.note(`a Wealth shield blocks the steal from seat ${e.target}`);const i=s.statOf(e.target,n.stat),r=n.amount==="all"?i:Math.min(n.amount,i);s.gain(e,e.target,n.stat,-r,t),s.gain(e,e.actor,n.stat,r,t)},if(s,e,t){if(s.test(e.op.test,e))for(const n of e.op.ops)s.apply({...e,op:n},t)},shiftToward(s,e,t){if(e.target===null)return;const n=s.marker(e.actor,e.op.scale),i=s.marker(e.target,e.op.scale);if(n===i)return;const r=n>i?1:-1;let a=i+r*Nt.INFLUENCE_STEP;a===0&&(a+=r),s.setMarker(e.target,e.op.scale,a,t)},discard(s,e){e.target!==null&&s.discardReadied(e)},rule(s,e){e.op.when==="resolve"&&s.addRule(e,e.op.rule)},target(){},placeholder(s,e){s.note(`PLACEHOLDER op "${e.op.text}" does nothing`)}};function ey(s,e,t){const n=Qv[e.op.k];if(!n)throw new Error(`${e.op.k} ops go through the FSM's resolve states`);n(s,e,t)}function ty(s,e){switch(s.t){case"targetLess":return e.targetLess(s.stat);case"skullsAtLeast":return e.skulls>=s.n;case"healthCardShowing":return s.cards.some(t=>e.cards.includes(t))}}class rc{s;constructor(e){this.s=e>>>0||2654435769}next(){let e=this.s=this.s+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}int(e){return Math.floor(this.next()*e)}die(e=6){return 1+this.int(e)}pick(e){if(!e.length)throw new Error("Rng.pick: empty");return e[this.int(e.length)]}shuffle(e){for(let t=e.length-1;t>0;t--){const n=this.int(t+1);[e[t],e[n]]=[e[n],e[t]]}return e}fork(e){return new rc((Math.imul(this.s^e,2246822507)^e*668265263)>>>0)}}const ut=(s,e)=>({k:"gain",stat:s,n:e,who:"self"}),qe=(s,e=!1,t=!1)=>({k:"favor",faction:s,steal:e,...t?{lock:!0}:{}}),Ye=(s,e)=>e?{k:"super",id:s,a:e}:{k:"super",id:s},Eu=[{id:"subdue",name:"Subdue",character:"general",slot:1,req:{min:{violence:3}},reqText:"Violence 3+",ops:[Ye("chainPick",{virtue:"violence",mode:"favor",defeated:[]})]},{id:"preempt",name:"Preempt",character:"general",slot:2,req:{min:{charisma:3}},reqText:"Charisma 3+",ops:[ut("crowns",7),Ye("preempt")]},{id:"martialLaw",name:"Martial Law",character:"general",slot:3,req:{bloodied:!0},reqText:"Bloodied King",ops:[qe("army"),Ye("martialLaw")]},{id:"heal",name:"Heal",character:"priest",slot:1,req:{min:{piety:3},healTarget:!0},reqText:"Piety 3+ and a Target at Health 0-2",ops:[Ye("heal")]},{id:"break",name:"Break",character:"priest",slot:2,req:{},reqText:"",ops:[Ye("break")]},{id:"skim",name:"Skim",character:"priest",slot:3,req:{min:{corruption:3}},reqText:"Corruption 3+",ops:[ut("corruption",2),Ye("skim"),qe("underground"),qe("church")]},{id:"embezzle",name:"Embezzle",character:"duchess",slot:1,req:{ear:!0},reqText:"The King's Ear",ops:[Ye("embezzle")]},{id:"wed",name:"Wed",character:"duchess",slot:2,req:{},reqText:"",ops:[Ye("wedPick"),qe("people")]},{id:"hostAGala",name:"Host a Gala",character:"duchess",slot:3,req:{min:{wealth:4}},reqText:"Wealth 4+",ops:[Ye("spendAll"),qe("aristocracy",!0,!0)]},{id:"joust",name:"Joust",character:"knight",slot:1,req:{},reqText:"",ops:[{k:"contest",virtue:"violence",vs:"grand",win:[ut("wealth",6),ut("crowns",2),qe("people"),qe("army")],lose:[]}]},{id:"safeguard",name:"Safeguard",character:"knight",slot:2,req:{min:{piety:4}},reqText:"Piety 4+",ops:[Ye("safeguard"),ut("crowns",7),qe("church")]},{id:"indoctrinate",name:"Indoctrinate",character:"knight",slot:3,req:{},reqText:"",ops:[ut("violence",3),ut("crowns",2),Ye("indoctrinate")]},{id:"reminisce",name:"Reminisce",character:"matron",slot:1,req:{bloodied:!0},reqText:"Bloodied King",ops:[ut("crowns",5),qe("people"),qe("army")]},{id:"bless",name:"Bless",character:"matron",slot:2,req:{min:{piety:1}},reqText:"Piety 1+",ops:[Ye("bless")]},{id:"convict",name:"Convict",character:"matron",slot:3,req:{min:{piety:3}},reqText:"Piety 3+",ops:[ut("crowns",2),ut("charisma",3),Ye("lockPeopleToChurch"),qe("church")]},{id:"ambush",name:"Ambush",character:"rogue",slot:1,req:{min:{violence:4}},reqText:"Violence 4+",ops:[Ye("ambushTarget"),qe("underground",!0,!0)]},{id:"con",name:"Con",character:"rogue",slot:2,req:{min:{charisma:3}},reqText:"Charisma 3+",ops:[Ye("chainPick",{virtue:"charisma",mode:"wealth",defeated:[]})]},{id:"incite",name:"Incite",character:"rogue",slot:3,req:{},reqText:"",ops:[Ye("inciteCorruption"),qe("underground",!0),Ye("scoreFor",{faction:"underground",value:6}),Ye("inciteForce")]},{id:"exploit",name:"Exploit",character:"spymaster",slot:1,req:{min:{corruption:2}},reqText:"Corruption 2+",ops:[ut("crowns",5),Ye("exploit")]},{id:"whisper",name:"Whisper",character:"spymaster",slot:2,req:{ear:!0},reqText:"The King's Ear",ops:[qe("underground"),Ye("scoreFor",{faction:"underground",value:12})]},{id:"propagandize",name:"Propagandize",character:"spymaster",slot:3,req:{min:{charisma:4}},reqText:"Charisma 4+",ops:[ut("crowns",5),Ye("propagandize")]},{id:"exhume",name:"Exhume",character:"dilettante",slot:1,req:{bloodied:!0,min:{corruption:1}},reqText:"Bloodied King and Corruption 1+",ops:[ut("wealth",6),Ye("exhume"),qe("underground")]},{id:"falconry",name:"Falconry",character:"dilettante",slot:2,req:{},reqText:"",ops:[Ye("falconryTake")]},{id:"claim",name:"Claim",character:"dilettante",slot:3,req:{ear:!0},reqText:"The King's Ear",ops:[qe("aristocracy"),qe("army"),qe("church"),qe("merchants"),qe("people"),qe("underground"),Ye("claim")]},{id:"donate",name:"Donate",character:"merchant_prince",slot:1,req:{},reqText:"",ops:[ut("wealth",-8),ut("crowns",2),ut("piety",6),qe("church",!0,!0)]},{id:"employ",name:"Employ",character:"merchant_prince",slot:2,req:{min:{wealth:8}},reqText:"Wealth 8+",ops:[ut("crowns",6),Ye("employ")]},{id:"trade",name:"Trade",character:"merchant_prince",slot:3,req:{},reqText:"",ops:[Ye("tradePick",{done:[]}),qe("merchants")]},{id:"hostARager",name:"Host a Rager",character:"innkeeper",slot:1,req:{},reqText:"",ops:[ut("wealth",-4),qe("people"),qe("underground"),qe("aristocracy"),qe("merchants")]},{id:"hustle",name:"Hustle",character:"innkeeper",slot:2,req:{max:{wealth:1}},reqText:"Wealth 1-",ops:[Ye("hustle"),qe("merchants")]},{id:"overbook",name:"Overbook",character:"innkeeper",slot:3,req:{},reqText:"",ops:[ut("wealth",7),ut("crowns",5),ut("health",-4),qe("people"),qe("merchants",!0,!0)]},{id:"overshadow",name:"Overshadow",character:"farm_hand",slot:1,req:{anyMin:{charisma:4,violence:4}},reqText:"Charisma 4+ or Violence 4+",ops:[qe("people"),Ye("overshadow")]},{id:"connect",name:"Connect",character:"farm_hand",slot:2,req:{min:{piety:3},anyMin:{charisma:2,violence:2}},reqText:"Piety 3+ and (Charisma 2+ or Violence 2+)",ops:[ut("crowns",5),ut("piety",2),qe("people",!0,!0)]},{id:"heroics",name:"Heroics",character:"farm_hand",slot:3,req:{min:{piety:5,violence:5}},reqText:"Piety 5+ and Violence 5+",ops:[ut("crowns",13)]},{id:"confound",name:"Confound",character:"fool",slot:1,req:{ear:!0,min:{charisma:1}},reqText:"The King's Ear and Charisma 1+",ops:[ut("crowns",7),qe("aristocracy"),Ye("confound")]},{id:"taunt",name:"Taunt",character:"fool",slot:2,req:{bloodied:!0,min:{charisma:4},violentOpponent:!0},reqText:"Bloodied King and Charisma 4+ (a Violent Opponent to Target)",ops:[Ye("taunt")]},{id:"juggle",name:"Juggle",character:"fool",slot:3,req:{min:{charisma:4}},reqText:"Charisma 4+",ops:[Ye("juggle",{scale:"temper"}),Ye("juggle",{scale:"morality"}),qe("people")]}];function mr(s){const e=Eu.find(t=>t.id===s);if(!e)throw new Error(`unknown Super Deed ${s}`);return e}function ny(s){return Eu.filter(e=>e.character===s).sort((e,t)=>e.slot-t.slot)}const fh=[8,10],ph={church:"piety",underground:"corruption",army:"violence",aristocracy:"charisma",merchants:"wealth",people:null},mh={underground:2,merchants:2,church:3,aristocracy:3,army:4,people:4};class xh extends Error{constructor(e,t){super(`StaleCompletion: command ${e} is not pending in ${t}`),this.name="StaleCompletion"}}class wr{cfg;fsm=new Gv;rng;seats;cards=[];decks={major:{draw:[],discard:[]},minor:{draw:[],discard:[]}};kingsHealth={stack:[],track:[],stackCards:[],trackCards:[]};martialLaw=new Set;skullMarkers;skullsCounted=new Set;gonfalons={army:null,people:null,church:null,aristocracy:null,merchants:null,underground:null};ear=null;round=0;throneWinner=null;winner=null;endReason=null;events=[];bus=new Zv;commandsIssued=[];dispatcher=null;nextId=1;pending=new Map;results=new Map;inbox=[];pumping=!1;issuedThisState=0;stateCommands=[];splits=new Map;plays=new Map;reachSeq=0;pickQueue=[];dealt=new Map;earRollers=[];matsShown=!1;fx=wr.freshFx();static freshFx(){const e=new Set;return{silence:!1,deposit:new Set,shieldCards:new Map,holdPeople:e,hold:new Map([["people",e]]),pray:new Map,assurances:new Map,scandals:[],safeguard:!1,locked:new Set,peopleToChurch:!1,scoreOverride:new Map,incite:null,overshadow:null,embezzle:null,embezzled:new Set,employ:null,works:0,increases:{piety:0,corruption:0,violence:0,charisma:0},claim:null,confound:!1,flagAsked:new Set}}order=[];cursor={seatIdx:-1,card:null,owner:-1};queue=[];cardStarted=!1;effect=null;picking=null;flagSeat=null;contest=null;skullReturn="RETURN";newSkullMarkers=[];constructor(e){const t=e.seats.length;if(t<2||t>12)throw new Error(`KingMaker seats 2 to 12 (got ${t})`);this.cfg={assign:"deal1",seed:1,throneStep:50,maxRounds:400,...e,skullSteps:[...e.skullSteps]},this.rng=new rc(this.cfg.seed),this.skullMarkers=[...e.skullSteps].sort((n,i)=>n-i),this.seats=e.seats.map((n,i)=>({seat:i,kind:n.kind,character:null,health:ah,wealth:0,morality:1,temper:1,step:Nt.START_STEP,reachedAt:0,hand:[],mat:[],leftovers:[],ill:!1,illNext:!1,supersUsed:0,supersPlayed:[],crownsTotal:0}))}connect(e){this.dispatcher=e}get state(){return this.fsm.state}get over(){return this.fsm.state==="GAME_OVER"}get transitions(){return this.fsm.log}pendingCommands(){return[...this.pending.values()]}start(){if(!this.dispatcher)throw new Error("Game.connect(dispatcher) first");if(this.fsm.state!==Or)throw new Error("Game already started");this.emit("game_start",{seats:this.seats.length,seed:this.cfg.seed}),this.pumping=!0;try{this.enter("SETUP_SEATS")}finally{this.pumping=!1}this.pump()}complete(e,t){if(!this.pending.has(e))throw new xh(e,this.fsm.state);this.inbox.push({id:e,result:t}),this.pump()}pump(){if(!this.pumping){this.pumping=!0;try{for(;;){for(;this.inbox.length;){const{id:t,result:n}=this.inbox.shift();this.accept(t,n)}if(this.pending.size>0||this.over||this.fsm.state===Or)break;const e=this.exit(this.fsm.state);this.enter(e)}}finally{this.pumping=!1}}}accept(e,t){const n=this.pending.get(e);if(!n)throw new xh(e,this.fsm.state);if(this.pending.delete(e),n.kind.startsWith("decide.")){const i=this.validateDecision(n,t);if(i){this.note(`rejected ${n.kind} seat ${n.seat}: ${i}; asking again`),this.issue(n.kind,n.seat,n.data);return}}this.results.set(e,t)}issue(e,t,n){const i=this.fsm.state;if(!Hv(i,e))throw new Bv(i,e);const r={id:this.nextId++,state:i,kind:e,seat:t,data:n};return this.pending.set(r.id,r),this.commandsIssued.push(r),this.stateCommands.push(r),this.issuedThisState++,this.dispatcher(r),r}announce(e){this.issue("announce",null,{text:e})}emit(e,t){this.bus.emit(e,t,{round:this.round,state:this.fsm.state})}note(e){this.events.push(`[r${this.round} ${this.fsm.state}] ${e}`)}enter(e){if(this.fsm.go(e,this.round),this.emit("phase_enter",{state:e}),this.results.clear(),this.stateCommands=[],this.issuedThisState=0,this.onEnter(e),this.issuedThisState===0)throw new Error(`FSM invariant: ${e} issued no command (every state waits on at least one done)`)}decisionResults(e){const t=new Map;for(const n of this.stateCommands)n.kind===e&&this.results.has(n.id)&&t.set(n.seat,this.results.get(n.id));return t}character(e){const t=this.seats[e].character;return t?fs(t):null}def(e){return Ls[this.cards[e].def]}clockwise(e,t=1){const n=this.seats.length;return((e+Nt.CLOCKWISE*t)%n+n)%n}fromEar(){const e=this.seats.length,t=this.ear??0;return Array.from({length:e},(n,i)=>this.clockwise(t,i))}score(e,t){const n=this.seats[e];switch(t){case"wealth":return n.wealth;case"piety":return n.morality>0?n.morality:0;case"corruption":return n.morality<0?-n.morality:0;case"violence":return n.temper>0?n.temper:0;case"charisma":return n.temper<0?-n.temper:0}}bounds(e,t){const n=this.character(e);return(t==="morality"?n.long[0]==="piety":n.long[1]==="violence")?[-rh,sh]:[-sh,rh]}leader(){let e=0;for(const t of this.seats){const n=this.seats[e];(t.step>n.step||t.step===n.step&&t.reachedAt<n.reachedAt)&&(e=t.seat)}return e}skullsShowing(){return this.kingsHealth.track.reduce((e,t)=>e+t,0)}reshuffled=[];drawFrom(e){const t=this.decks[e];return!t.draw.length&&Nt.RESHUFFLE_DISCARD&&t.discard.length&&(t.draw=this.rng.shuffle(t.discard.splice(0)),this.reshuffled.push({deck:e,uids:[...t.draw]}),this.note(`${e} deck empty: discard shuffled back (${t.draw.length})`),this.emit("deck_reshuffled",{deck:e,cards:t.draw.length})),t.draw.pop()??null}moveSteps(e,t,n){if(!t)return;const i=this.seats[e],r=Math.max(Nt.CROWN_FLOOR,Math.min(this.cfg.throneStep,i.step+t));t>0&&(i.crownsTotal+=t),r!==i.step&&(this.emit("crown_move",{seat:e,from:i.step,to:r}),i.step=r,i.reachedAt=++this.reachSeq,r>=this.cfg.throneStep&&this.throneWinner===null&&(this.throneWinner=e,this.note(`seat ${e} reaches the throne`)),n.add(e))}shift(e,t,n){if(n<=0)return 0;if(t==="charisma"&&this.fx.silence)return this.note(`seat ${e} +${n} Charisma blocked (Ritual of Silence)`),0;const i=t==="piety"||t==="corruption"?"morality":"temper",r=t==="piety"||t==="violence"?1:-1,[a,o]=this.bounds(e,i),l=this.seats[e];let c=l[i],h=0;for(let u=0;u<n;u++){let d=c+r;d===0&&(d+=r),d<a||d>o?h++:c=d}return c!==l[i]&&this.emit("virtue_shift",{seat:e,scale:i,from:l[i],to:c}),l[i]=c,this.fx.increases[t]+=n,h*Nt.OVERFLOW_CROWNS_PER_POINT}gain(e,t,n,i,r){t==="corruption"&&n>0&&this.fx.incite!==null&&e!==this.fx.incite&&(this.note(`Incite: seat ${e}'s +${n} Corruption goes to seat ${this.fx.incite}`),e=this.fx.incite);const a=this.seats[e];if(r.add(e),t==="crowns")return this.moveSteps(e,n,i);if(t==="health"){const o=a.health;a.health=Math.max(0,Math.min(Ua,a.health+n)),a.health!==o&&this.emit("health_change",{seat:e,from:o,to:a.health});return}if(t==="wealth"){const o=a.wealth+n,l=a.wealth;o>Fa?(a.wealth=Fa,this.moveSteps(e,(o-Fa)*Nt.OVERFLOW_CROWNS_PER_POINT,i)):a.wealth=Math.max(0,o),a.wealth!==l&&this.emit("wealth_change",{seat:e,from:l,to:a.wealth});return}if(n<0){const o={piety:"corruption",corruption:"piety",violence:"charisma",charisma:"violence"};return this.moveSteps(e,this.shift(e,o[t],-n),i)}this.moveSteps(e,this.shift(e,t,n),i)}validTargets(e,t){return t.target?this.seats.filter(n=>n.seat!==e).filter(n=>t.target.cond==="wealth4"?n.wealth>=4:t.target.cond==="health8"?n.health<=8:t.target.cond==="violent"?this.score(n.seat,"violence")>=1:!0).map(n=>n.seat):[]}pickOptions(e){if(e.op.k==="super")return this.superPick(e,e.op);switch(e.op.k){case"favorPick":return{seat:e.actor,options:e.target===null?[]:this.factionsOf(e.target),prompt:"Steal one faction of your choice"};case"discard":return e.target===null?null:{seat:e.target,options:this.seats[e.target].mat.filter(t=>!t.resolved&&!t.discarded).map(t=>String(t.uid)),prompt:"Choose a readied deed to discard"}}return null}factionsOf(e){return _n.filter(t=>this.gonfalons[t]===e)}playableMajors(e){const t=this.seats[e];return t.hand.filter(n=>{if(this.cards[n].deck!=="major")return!1;const i=this.def(n);return i.cost>t.wealth||i.minGain&&t.wealth<2?!1:!i.target||i.target.optional||this.validTargets(e,i).length>0})}legalPlay(e,t){if(!t||!Array.isArray(t.cards))return"no play";const n=this.seats[e];if(new Set(t.cards).size!==t.cards.length)return"duplicate card";for(const l of t.cards)if(!n.hand.includes(l))return`card ${l} not in hand`;const r=t.cards.map(l=>this.def(l)),a=r.filter(l=>l.deck==="major").length;if(t.superDeed)return"Super Deeds are raised at the flag (RESOLVE_FLAG), not readied: there is no stand-in Major";{if(a>1)return"play at most one Major";if(t.cards.length===0)return this.canReadyAny(e)?"ready at least one deed":null}const o=r.reduce((l,c)=>l+c.cost,0);if(o>n.wealth)return`costs ${o} Wealth, have ${n.wealth}`;for(const l of t.cards){const c=this.def(l);if(c.minGain&&n.wealth<2)return`${c.name} needs at least +1 (Wealth 2+)`;const h=t.targets?.[l];if(c.target){const u=this.validTargets(e,c);if(h==null){if(!c.target.optional)return`${c.name} needs a target`}else if(!u.includes(h))return`${c.name}: seat ${h} is not a legal target`}if(c.namesFaction&&!_n.includes(t.factions?.[l]))return`${c.name} names a faction`}return null}trialPlay(e,t){const n=this.def(t),i={cards:[t],targets:{},factions:{}};if(n.target){const r=this.validTargets(e,n);r.length&&(i.targets[t]=r[0])}return n.namesFaction&&(i.factions[t]=_n[0]),i}canReadyAny(e){return this.seats[e].hand.some(t=>this.legalPlay(e,this.trialPlay(e,t))===null)}validateDecision(e,t){const n=e.seat;if(e.kind==="decide.character"){const i=t?.character;return i&&e.data.options.includes(i)?null:"not one of the options"}if(e.kind==="decide.split"){const i=t?.majors,r=e.data.need;return Number.isInteger(i)&&i>=0&&i<=r?null:`majors must be 0..${r}`}if(e.kind==="decide.play")return this.legalPlay(n,t);if(e.kind==="decide.super"){const i=t?.super;return i===void 0||!e.data.options.includes(i)?"not one of the options":i==="none"||this.legalSupers(n).some(r=>r.id===i)?null:`${i} is not legal now`}if(e.kind==="decide.pick"){const i=t?.pick;return i!==void 0&&e.data.options.includes(i)?null:"not one of the options"}return null}onEnter(e){switch(e){case"SETUP_SEATS":{for(const i of Ls)for(let r=0;r<i.copies;r++){const a=this.cards.length;this.cards.push({uid:a,def:i.idx,deck:i.deck}),this.decks[i.deck].draw.push(a)}this.rng.shuffle(this.decks.major.draw),this.rng.shuffle(this.decks.minor.draw),this.kingsHealth.stackCards=this.rng.shuffle(oh.map((i,r)=>r+1)),this.kingsHealth.stack=this.kingsHealth.stackCards.map(i=>oh[i-1]);const t=this.cfg.assign,n=this.rng.shuffle(Tr.map(i=>i.id));if(t==="pick")this.pickQueue=this.seats.map(i=>this.clockwise(Nt.HOST_SEAT,i.seat));else if(t==="deal1")this.seats.forEach(i=>this.dealt.set(i.seat,[n[i.seat]]));else{const i=Math.max(1,Math.min(3,Math.floor(Tr.length/this.seats.length)));this.seats.forEach(r=>this.dealt.set(r.seat,n.slice(r.seat*i,r.seat*i+i)))}this.issue("seats.setup",null,{seats:this.seats.map(i=>({seat:i.seat,kind:i.kind})),startStep:Nt.START_STEP});return}case"SETUP_ASSIGN":{const t=this.cfg.assign;if(t==="deal1")for(const n of this.seats)this.setCharacter(n.seat,this.dealt.get(n.seat)[0]);if(this.seats.every(n=>n.character)){for(const n of this.seats)this.issue("mat.assign",n.seat,{character:n.character});this.matsShown=!0}else if(t==="pick"){const n=this.pickQueue[0],i=new Set(this.seats.map(r=>r.character).filter(Boolean));this.issue("decide.character",n,{options:Tr.map(r=>r.id).filter(r=>!i.has(r))})}else for(const n of this.seats)this.issue("decide.character",n.seat,{options:this.dealt.get(n.seat)});return}case"SETUP_EAR_ROLL":{this.earRollers.length||(this.earRollers=this.seats.map(r=>r.seat));const t=this.earRollers.map(r=>{const a=this.rng.die(Nt.DIE_SIDES);return{seat:r,die:a,bonus:0,total:a}}),n=Math.max(...t.map(r=>r.total)),i=t.filter(r=>r.total===n).map(r=>r.seat);this.note(`Ear roll ${t.map(r=>`${r.seat}:${r.die}`).join(" ")}`),this.issue("dice.roll",null,{purpose:"ear",rolls:t}),this.emit("contest_roll",{purpose:"ear",virtue:null,rolls:t,winner:i.length===1?i[0]:null}),i.length===1?(this.issue("ear.move",i[0],{from:null,to:i[0]}),this.emit("ear_move",{from:null,to:i[0]}),this.ear=i[0],this.earRollers=[]):this.earRollers=i;return}case"ROUND_START":{this.round++,this.fx=wr.freshFx(),this.emit("turn_start",{ear:this.ear}),this.announce(`Round ${this.round}`);for(const t of this.seats)t.ill&&(t.ill=!1,t.health=ch,this.note(`seat ${t.seat} recovers with ${ch} Health`)),t.illNext&&(t.ill=!0,t.illNext=!1,this.note(`seat ${t.seat} is too ill to play this round`)),this.issue("stats.set",t.seat,this.statsOf(t.seat));return}case"DRAW_SPLIT":{this.announce("Declare your draw");for(const t of this.seats){const n=6-t.hand.length;t.ill||n<=0||this.issue("decide.split",t.seat,{need:n,majorsLeft:this.decks.major.draw.length+this.decks.major.discard.length,minorsLeft:this.decks.minor.draw.length+this.decks.minor.discard.length})}return}case"DRAW":{const t=this.splits;this.announce("Draw");for(const n of this.fromEar()){const i=t.get(n);if(!i)continue;const r=this.seats[n],a=6-r.hand.length,o=[],l=[];this.reshuffled=[];for(let c=0;c<i.majors;c++){const h=this.drawFrom("major");h!==null&&o.push(h)}for(let c=0;c<a-i.majors;c++){const h=this.drawFrom("minor");h!==null&&l.push(h)}r.hand.push(...o,...l),this.emit("cards_drawn",{seat:n,majors:o.length,minors:l.length}),this.issue("cards.draw",n,this.reshuffled.length?{majors:o,minors:l,reshuffled:this.reshuffled}:{majors:o,minors:l})}return}case"CHOOSE":{this.announce("Choose your play");for(const t of this.seats)!t.ill&&t.hand.length&&this.issue("decide.play",t.seat,{hand:[...t.hand]});return}case"PLACE":{const t=this.plays;this.announce("Cards face down");for(const n of this.seats){const i=t.get(n.seat);i&&(n.mat=i.cards.map(r=>({uid:r,target:i.targets?.[r]??null,faction:i.factions?.[r]??null,superDeed:!1,resolved:!1,discarded:!1})),n.leftovers=n.hand.filter(r=>!i.cards.includes(r)),n.hand=[],this.issue("cards.place",n.seat,{mat:n.mat.map(r=>r.uid),leftovers:[...n.leftovers]}))}return}case"REVEAL":{this.announce("Reveal");const t=this.seats.filter(n=>n.mat.length).map(n=>({seat:n.seat,uids:n.mat.map(i=>i.uid)}));for(const n of this.seats)for(const i of n.mat)i.superDeed||this.activatePassive(n.seat,this.def(i.uid),i.faction);this.issue("cards.flip",null,{mats:t}),this.order=this.fromEar().filter(n=>!this.seats[n].ill),this.cursor={seatIdx:0,card:null,owner:-1};return}case"RESOLVE_NEXT":{this.flagSeat=null,this.cursor.card=this.nextCard(),this.cardStarted=!1,this.announce(this.flagSeat!==null?`Seat ${this.flagSeat}: Super Deed flag?`:this.cursor.card?`Resolve: seat ${this.cursor.owner}`:"All deeds resolved");return}case"RESOLVE_FLAG":{const t=this.flagSeat,n=this.legalSupers(t);this.issue("decide.super",t,{options:["none",...n.map(i=>i.id)],names:Object.fromEntries(n.map(i=>[i.id,i.name]))});return}case"RESOLVE_CARD":{const t=this.cursor.card,n=this.cursor.owner;if(!this.cardStarted){if(this.cardStarted=!0,t.super){const o=mr(t.super),l=this.seats[n];l.supersUsed++,l.supersPlayed.push(o.id);const c=l.mat.filter(h=>!h.resolved&&!h.discarded);for(const h of c)h.discarded=!0,this.decks[this.cards[h.uid].deck].discard.push(h.uid);this.dropPassives(n),c.length&&this.issue("cards.discard",n,{uids:c.map(h=>h.uid),from:"mat"}),this.issue("super.play",n,{id:o.id,name:o.name,character:o.character}),this.emit("super_deed_played",{seat:n,id:o.id,name:o.name}),this.queue=o.ops.map(h=>({op:h,actor:n,target:null,card:-1,superId:o.id})),this.note(`seat ${n} raises the flag: Super Deed ${o.name}${c.length?` (readied ${c.map(h=>this.def(h.uid).name).join(", ")} discarded)`:""}`);return}const i=this.def(t.uid),r=this.fizzleReason(n,t),a=++this.playSeq;this.queue=r?[]:[...this.countPlay(n,t.uid),...this.bindCard(n,t).map(o=>({...o,play:a}))],this.note(`seat ${n} resolves ${i.name}${t.target!==null?` -> seat ${t.target}`:""}${t.faction?` (${t.faction})`:""}${r?` FIZZLES: ${r}`:""}`),this.issue("cards.resolve",n,{uid:t.uid,name:i.name,superDeed:!1,fizzle:r}),this.emit("deed_played",{seat:n,uid:t.uid,name:i.name,target:t.target,faction:t.faction,fizzle:r});return}this.announce(this.queue.length?bu(this.queue[0].op):`${t.super?mr(t.super).name:this.def(t.uid).name} done`);return}case"RESOLVE_DECIDE":{const t=this.picking;this.issue("decide.pick",t.seat,{uid:t.b.card,name:this.cardName(t.b),prompt:t.prompt,options:[...t.options]});return}case"RESOLVE_CHALLENGE":{const t=this.effect;if(this.announce(`Challenge for ${qv[t.faction]}: ${t.why}`),t.claim){const n=this.gonfalons[t.faction];t.take=this.claimContest(t.b.actor,n,t.faction)===t.b.actor,t.why=`Claim contest: ${t.take?"the challenger":"the holder"} wins`}return}case"RESOLVE_CONTEST":{const t=this.contest,n=t.bound.op.virtue;t.rolls=t.participants.map(a=>{const o=this.rng.die(Nt.DIE_SIDES),l=this.prayBonus(a),c=this.score(a,n)+l;return{seat:a,die:o,bonus:c,total:o+c}});const i=Math.max(...t.rolls.map(a=>a.total)),r=t.rolls.filter(a=>a.total===i).map(a=>a.seat);t.winner=this.tieBreak(r),t.winner===null&&(t.participants=r),this.note(`${n==="violence"?"Violence":"Charisma"} Contest ${t.rolls.map(a=>`${a.seat}:${a.die}+${a.bonus}`).join(" ")} -> ${t.winner??"tie, re-roll"}`),this.issue("dice.roll",null,{purpose:"contest",virtue:n,rolls:t.rolls}),this.emit("contest_roll",{purpose:"contest",virtue:n,rolls:t.rolls,winner:t.winner});return}case"RESOLVE_APPLY":{const t=new Set,n=new Set,i=[],r=this.stepsSnapshot(),a=this.effect;if(a.kind==="favor")a.take?(this.takeFaction(a.b.actor,a.faction,i,t),a.b.op.k==="favor"&&a.b.op.lock&&(this.fx.locked.add(a.faction),this.emit("favor_locked",{faction:a.faction,seat:a.b.actor}),this.note(`${a.faction} locked to seat ${a.b.actor} until favor scoring ends (Steal and Lock)`))):this.note(`seat ${a.b.actor} fails to take ${a.faction}: ${a.why}`);else if(a.kind==="contestDone"){const o=a.c,l=o.bound.op;if(o.winner===null)this.note("contest: nobody took part");else if(l.vs==="grand"){const c=o.all.filter(u=>u!==o.winner),h=l.win.map(u=>({op:u,actor:o.winner,target:null,card:o.bound.card}));for(const u of c)h.push(...l.lose.map(d=>({op:d,actor:u,target:null,card:o.bound.card})));this.queue.unshift(...h)}else{const h=o.winner===o.bound.actor?l.win:l.lose;this.queue.unshift(...h.map(u=>({op:u,actor:o.bound.actor,target:o.bound.target,card:o.bound.card})))}}else this.emit("op_applied",{seat:a.b.actor,op:a.b.op.k,card:a.b.superId??(a.b.card>=0?this.def(a.b.card).name:null)}),this.applyOp(a.b,t,n,i);for(const o of n)this.issue("stats.set",o,this.statsOf(o));for(const o of i)this.issue("gonfalon.move",null,o);for(const o of t)this.issue("pip.goTo",o,{from:r[o],step:this.seats[o].step});this.issuedThisState||this.announce("no change"),this.newSkullMarkers=this.crossedMarkers();return}case"FAVOR":{this.announce("Favor");const t=[],n=new Set,i=this.stepsSnapshot();for(const r of _n){if(!ph[r])continue;if(this.fx.locked.has(r)){this.note(`${r} is locked (Steal and Lock): no favor change`);continue}const o=this.favorStat(r),l=this.seats.map(f=>o.low?-this.score(f.seat,o.stat):this.score(f.seat,o.stat)),c=Math.max(...l);if(!o.low&&c<Nt.FAVOR_MIN_SCORE)continue;const h=this.seats.filter(f=>l[f.seat]===c).map(f=>f.seat),u=this.tieBreak(h);if(u===null){this.note(`${r}: ${h.length} tied on ${o.stat}, no Martial Law or Ear among them; not awarded (${Jv})`);continue}const d=this.gonfalons[r];if(d!==u){if(d!==null&&this.fx.claim===d&&this.claimContest(u,d,r)!==u){this.note(`Claim: seat ${d} keeps ${r}`);continue}this.takeFaction(u,r,t,n)}}for(const r of t)this.issue("gonfalon.move",null,r);for(const r of n)this.issue("pip.goTo",r,{from:i[r],step:this.seats[r].step});return}case"SCORE":{this.announce("Score the factions");const t=this.stepsSnapshot(),n=[],i=new Map,r=(c,h)=>{i.has(c)||n.push(c),i.set(c,(i.get(c)??0)+h)},a=this.fx.overshadow,o=a!==null&&this.gonfalons.people===a;for(const c of Nt.SCORE_ORDER){const h=this.gonfalons[c];if(h===null)continue;const u=this.factionScore(c,h);r(h,u),o&&h!==a&&(r(h,-2),r(a,2)),u!==mh[c]&&this.note(`${c} scores ${u} for seat ${h} (changed score)`)}const l=new Set;for(const c of n)this.moveSteps(c,i.get(c),l);this.fx.locked.clear();for(const c of n)l.has(c)&&this.issue("pip.goTo",c,{from:t[c],step:this.seats[c].step});this.newSkullMarkers=this.crossedMarkers();return}case"SKULLS":{for(const t of this.newSkullMarkers){this.skullsCounted.add(t);const n=this.kingsHealth.stack.pop(),i=this.kingsHealth.stackCards.pop();if(n===void 0||i===void 0){this.note(`skull ${t} crossed: King's Health stack empty`);continue}this.kingsHealth.track.push(n),this.kingsHealth.trackCards.push(i),this.note(`leader crosses skull ${t}: King's Health card #${i} with ${n} (showing ${this.skullsShowing()})${fh.includes(i)?": Bloodied King":""}`),this.issue("health.flip",null,{card:this.kingsHealth.track.length-1,skulls:n,total:this.skullsShowing(),marker:t,cardNo:i}),this.emit("skull_revealed",{card:i,skulls:n,total:this.skullsShowing(),marker:t})}this.issuedThisState||this.announce("no King's Health card left"),this.newSkullMarkers=[];return}case"RETURN":{this.announce("Gonfalons return");for(const t of _n){const n=this.gonfalons[t];n!==null&&(this.gonfalons[t]=null,this.issue("gonfalon.move",null,{faction:t,from:n,to:null}),this.emit("favor_shift",{faction:t,from:n,to:null}))}for(const t of this.seats){if(!t.mat.length)continue;const n=t.mat.filter(i=>!i.discarded).map(i=>i.uid);for(const i of n)this.decks[this.cards[i].deck].discard.push(i);t.mat=[],n.length&&this.issue("cards.discard",t.seat,{uids:n,from:"mat"})}return}case"PASS":{const t=this.character(this.ear).pass;this.announce(`Pass: ${t}`);const n=this.seats.filter(r=>!r.ill).map(r=>r.seat),i=[];for(const r of n){const a=this.seats[r],o=n.indexOf(r),l=t==="halt"?r:t==="discard"?null:n[((o+(t==="left"?1:-1)*Nt.CLOCKWISE)%n.length+n.length)%n.length];i.push({from:r,to:l,uids:[...a.leftovers]})}for(const r of i)this.seats[r.from].leftovers=[];for(const r of i)if(r.to===null)for(const a of r.uids)this.decks[this.cards[a].deck].discard.push(a);else this.seats[r.to].hand.push(...r.uids);this.issue("cards.pass",null,{symbol:t,moves:i}),this.emit("cards_passed",{symbol:t});return}case"EAR_MOVE":{for(const i of this.seats)!i.ill&&i.health<=0&&(i.illNext=!0,this.issue("stats.set",i.seat,this.statsOf(i.seat)));const t=this.ear;let n=this.clockwise(t);for(let i=0;i<this.seats.length&&this.seats[n].illNext;i++)n=this.clockwise(n);this.seats[n].illNext&&(n=this.clockwise(t)),this.ear=n,this.issue("ear.move",n,{from:t,to:n}),this.emit("ear_move",{from:t,to:n});return}case"END_CHECK":{this.announce(`End check: leader seat ${this.leader()} on ${this.seats[this.leader()].step}, skulls ${this.skullsShowing()}`);return}case"GAME_OVER":{this.endReason=this.throneWinner!==null?"throne":"king-died",this.winner=this.throneWinner??this.leader(),this.note(`GAME OVER: seat ${this.winner} (${fs(this.seats[this.winner].character).title}) is crowned (${this.endReason}) after ${this.round} rounds`),this.emit("game_over",{winner:this.winner,reason:this.endReason}),this.issue("game.over",this.winner,{winner:this.winner,reason:this.endReason,standings:[...this.seats].sort((t,n)=>n.step-t.step||t.reachedAt-n.reachedAt).map(t=>({seat:t.seat,step:t.step,character:t.character}))});return}}}exit(e){switch(e){case"SETUP_SEATS":return"SETUP_ASSIGN";case"SETUP_ASSIGN":{if(this.matsShown)return"SETUP_EAR_ROLL";for(const[t,n]of this.decisionResults("decide.character"))this.seats[t].character||this.setCharacter(t,n.character);return this.cfg.assign==="pick"&&this.pickQueue.shift(),"SETUP_ASSIGN"}case"SETUP_EAR_ROLL":return this.ear===null?"SETUP_EAR_ROLL":"ROUND_START";case"ROUND_START":return"DRAW_SPLIT";case"DRAW_SPLIT":return this.splits=this.decisionResults("decide.split"),"DRAW";case"DRAW":return"CHOOSE";case"CHOOSE":return this.plays=this.decisionResults("decide.play"),"PLACE";case"PLACE":return"REVEAL";case"REVEAL":return"RESOLVE_NEXT";case"RESOLVE_NEXT":return this.flagSeat!==null?"RESOLVE_FLAG":this.cursor.card?"RESOLVE_CARD":"FAVOR";case"RESOLVE_FLAG":{const t=this.flagSeat,n=this.decisionResults("decide.super").get(t);return this.flagSeat=null,n.super==="none"?"RESOLVE_NEXT":(this.cursor={seatIdx:this.cursor.seatIdx,card:{uid:-1,super:n.super,target:null,faction:null,superDeed:!0,resolved:!1,discarded:!1},owner:t},this.cardStarted=!1,"RESOLVE_CARD")}case"RESOLVE_CARD":{if(!this.queue.length){const i=this.cursor.card;return this.emit("deed_resolved",{seat:this.cursor.owner,uid:i.uid,name:i.super?mr(i.super).name:this.def(i.uid).name}),this.cursor.card.resolved=!0,"RESOLVE_NEXT"}const t=this.queue.shift();if(t.op.k==="favor"){const i=t.op.faction,r=this.gonfalons[i],a=this.favorOutcome(t.actor,i,t.op.steal);return this.effect={kind:"favor",b:t,faction:i,take:a.take,why:a.why,claim:!!a.claim},r!==null&&r!==t.actor?"RESOLVE_CHALLENGE":"RESOLVE_APPLY"}if(t.op.k==="contest"){const r=t.op.vs==="target"?t.target!==null?[t.actor,t.target]:[]:this.seats.map(o=>o.seat),a={bound:t,participants:r,all:[...r],rolls:[],winner:null};return this.contest=a,r.length<2?(a.winner=r[0]??null,this.effect={kind:"contestDone",c:a},"RESOLVE_APPLY"):"RESOLVE_CONTEST"}const n=this.pickOptions(t);return n&&n.options.length>=2?(this.picking={b:t,...n},"RESOLVE_DECIDE"):(n&&(t.pick=n.options[0]),this.effect={kind:"op",b:t},"RESOLVE_APPLY")}case"RESOLVE_DECIDE":{const t=this.picking,n=this.decisionResults("decide.pick").get(t.seat);return t.b.pick=n.pick,this.picking=null,this.effect={kind:"op",b:t.b},"RESOLVE_APPLY"}case"RESOLVE_CHALLENGE":return"RESOLVE_APPLY";case"RESOLVE_CONTEST":return this.contest.winner===null?"RESOLVE_CONTEST":(this.effect={kind:"contestDone",c:this.contest},"RESOLVE_APPLY");case"RESOLVE_APPLY":return this.effect=null,this.throneWinner!==null?"GAME_OVER":this.newSkullMarkers.length?(this.skullReturn="RESOLVE_CARD","SKULLS"):"RESOLVE_CARD";case"FAVOR":return"SCORE";case"SCORE":return this.throneWinner!==null?"GAME_OVER":this.newSkullMarkers.length?(this.skullReturn="RETURN","SKULLS"):"RETURN";case"SKULLS":return this.skullReturn;case"RETURN":return"PASS";case"PASS":return"EAR_MOVE";case"EAR_MOVE":return"END_CHECK";case"END_CHECK":if(this.throneWinner!==null)throw new Error("a throne winner reached END_CHECK (the throne ends the game at once)");if(this.skullsShowing()>=Wv)return"GAME_OVER";if(this.round>=this.cfg.maxRounds)throw new Error(`safety stop: ${this.round} rounds without an end (not a rule)`);return"ROUND_START";case"GAME_OVER":throw new Error("GAME_OVER is final")}}setCharacter(e,t){const n=fs(t),i=this.seats[e];i.character=t,i.health=ah,i.wealth=n.startWealth,i.morality=n.long[0]==="piety"?1:-1,i.temper=n.long[1]==="violence"?1:-1}statsOf(e){const t=this.seats[e];return{health:t.health,wealth:t.wealth,morality:t.morality,temper:t.temper,ill:t.ill,illNext:t.illNext}}stepsSnapshot(){return this.seats.map(e=>e.step)}crossedMarkers(){const e=this.seats[this.leader()].step;return this.skullMarkers.filter(t=>!this.skullsCounted.has(t)&&e>=t)}nextCard(){for(;this.cursor.seatIdx<this.order.length;){const e=this.order[this.cursor.seatIdx];if(!this.fx.flagAsked.has(e)&&(this.fx.flagAsked.add(e),this.legalSupers(e).length))return this.flagSeat=e,null;const t=this.seats[e].mat.find(n=>!n.resolved&&!n.discarded);if(t)return this.cursor.owner=e,t;this.cursor.seatIdx++}return null}activatePassive(e,t,n){for(const i of t.ops)i.k==="rule"&&i.when==="reveal"&&this.setRule(e,i.rule,n)}setRule(e,t,n){switch(t.r){case"blockGain":t.stat==="charisma"&&(this.fx.silence=!0);return;case"shieldWealth":this.fx.deposit.add(e);return;case"shieldCards":{const i=this.fx.shieldCards.get(e)??new Set;for(const r of t.cards)i.add(r);this.fx.shieldCards.set(e,i);return}case"holdFavor":{const i=this.fx.hold.get(t.faction)??new Set;i.add(e),this.fx.hold.set(t.faction,i);return}case"contestBonus":this.fx.pray.set(e,(this.fx.pray.get(e)??0)+t.n);return;case"protectFavor":if(!n)return;this.fx.assurances.has(e)||this.fx.assurances.set(e,new Set),this.fx.assurances.get(e).add(n);return;case"punishFavor":n&&this.fx.scandals.push({seat:e,faction:n,crowns:t.crowns});return}}fizzleReason(e,t){const n=this.def(t.uid),i=this.seats[e];if(n.illegal&&this.fx.safeguard)return"BLOCKED by Safeguard (illegal deed)";if(n.cost>i.wealth)return`cannot pay ${n.cost} Wealth (has ${i.wealth})`;if(n.minGain&&i.wealth<2)return"Invest Well needs Wealth 2+";if(t.target!==null){const r=this.seats[t.target];if(n.target?.cond==="wealth4"&&r.wealth<4)return`target has ${r.wealth} Wealth (needs 4+)`;if(n.target?.cond==="violent"&&this.score(t.target,"violence")<1)return"target is not violent";if(this.fx.shieldCards.get(t.target)?.has(n.name))return"blocked by a card shield (Keep Watch)"}return null}bindCard(e,t){const n=this.def(t.uid);let i=n.ops.filter(a=>a.k!=="target");const r=t.target;return n.target?.cond==="health8"&&(r===null||this.seats[r].health>8)&&(i=i.filter(a=>!(a.k==="gain"&&a.who==="target"))),n.steals&&r!==null&&this.fx.deposit.has(r)&&(this.note(`Deposit blocks the steal from seat ${r}`),i=i.filter(a=>!(a.k==="gain"&&a.stat==="wealth"))),i.map(a=>({op:a,actor:e,target:r,card:t.uid}))}favorOutcome(e,t,n){const i=this.gonfalons[t];if(i===null)return{take:!0,why:"unheld"};if(i===e)return{take:!1,why:"already held"};if(this.fx.locked.has(t))return{take:!1,why:`locked to seat ${i} (Steal and Lock)`};if(this.fx.assurances.get(i)?.has(t))return{take:!1,why:`seat ${i} has Get Assurances on it`};if(this.fx.hold.get(t)?.has(i))return{take:!1,why:`seat ${i} holds the ${t==="people"?"People's attention (Orate)":t}`};if(t==="people"&&this.fx.peopleToChurch)return{take:!1,why:"the People are locked to the Church (Convict)"};if(this.fx.claim===i)return{take:!1,why:"Claim: contested",claim:!0};if(n&&Nt.STEAL_NO_COMPARE)return{take:!0,why:"stolen (no comparison)"};if(t==="people")return this.fx.confound?{take:!1,why:"Confound: the People are first come, first served"}:{take:!0,why:"the People go to the latest gainer"};const r=this.favorStat(t),a=r.low?-1:1,o=this.score(e,r.stat),l=this.score(i,r.stat);if(a*o>a*l)return{take:!0,why:`${r.stat} ${o} beats ${l}${r.low?" (Confound: lower wins)":""}`};if(o===l){if(r.low&&t==="merchants")return{take:!0,why:`Confound: equal Wealth ${o} takes the Merchants`};const c=this.tieBreak([e,i]);return c===e?{take:!0,why:`${r.stat} tie ${o}: the challenger wins the tie (Martial Law)`}:c===i?{take:!1,why:`${r.stat} tie ${o}: the holder wins the tie`}:{take:!0,why:`${r.stat} tie ${o}: the challenger wins`}}return{take:!1,why:`${r.stat} ${o} under ${l}`}}takeFaction(e,t,n,i){const r=this.gonfalons[t];if(r!==e){this.gonfalons[t]=e,n.push({faction:t,from:r,to:e}),this.emit("favor_shift",{faction:t,from:r,to:e}),t==="people"&&this.note(`seat ${e} gains the People`);for(const a of this.fx.scandals)a.faction===t&&a.seat!==e&&(this.note(`Punish (seat ${a.seat}): seat ${e} ${a.crowns} Crown for gaining ${t}`),this.moveSteps(e,a.crowns,i));t==="church"&&this.fx.peopleToChurch&&this.peopleFollowChurch(n,i)}}peopleFollowChurch(e,t){const n=this.gonfalons.church,i=this.gonfalons.people;if(!(n===null||i===n)){if(i!==null&&this.fx.holdPeople.has(i))return this.note(`Convict: seat ${i} keeps the People (Orate played first)`);this.note(`Convict: the People follow the Church to seat ${n}`),this.takeFaction(n,"people",e,t)}}applyOp(e,t,n,i){const r=e.op;switch(r.k){case"super":return this.applySuper(e,r,t,n,i);case"favorPick":return this.applyFavorPick(e,t,i);case"favor":case"contest":throw new Error(`${r.k} ops go through RESOLVE_CHALLENGE / RESOLVE_CONTEST`);default:return ey(this.host,e,{moved:t,touched:n,gon:i})}}host={note:e=>this.note(e),gain:(e,t,n,i,r)=>{const a=this.seats[t].wealth;this.gain(t,n,i,r.moved,r.touched),n==="wealth"&&this.noteWealthGain(e,t,this.seats[t].wealth-a)},statOf:(e,t)=>t==="health"?this.seats[e].health:this.score(e,t),test:(e,t)=>this.checkTest(e,t),wealthShielded:e=>this.fx.deposit.has(e),addRule:(e,t)=>this.setRule(e.actor,t,this.seats[e.actor].mat.find(n=>n.uid===e.card)?.faction??null),marker:(e,t)=>this.seats[e][t],setMarker:(e,t,n,i)=>{this.seats[e][t]=n,i.touched.add(e)},discardReadied:e=>this.discardReadied(e),apply:(e,t)=>this.applyOp(e,t.moved,t.touched,t.gon)};checkTest(e,t){const n=(i,r)=>r==="health"?this.seats[i].health:this.score(i,r);return ty(e,{skulls:this.skullsShowing(),cards:this.kingsHealth.trackCards,targetLess:i=>t.target!==null&&n(t.target,i)<n(t.actor,i)})}applyFavorPick(e,t,n){const i=e.pick??null;if(e.target===null||i===null||this.gonfalons[i]!==e.target){this.note(`favor pick: seat ${e.target} holds no faction to steal`);return}const r=this.favorOutcome(e.actor,i,!0);(r.claim?this.claimContest(e.actor,e.target,i)===e.actor:r.take)?this.takeFaction(e.actor,i,n,t):this.note(`favor pick: ${i} stays (${r.why})`)}discardReadied(e){if(e.target===null)return;const t=this.seats[e.target].mat.find(n=>!n.resolved&&!n.discarded&&String(n.uid)===e.pick);if(!t)return this.note(`seat ${e.target} has no readied deed left to discard`);t.discarded=!0,this.decks[this.cards[t.uid].deck].discard.push(t.uid),this.note(`seat ${e.target} discards readied ${this.def(t.uid).name}`),this.issue("cards.discard",e.target,{uids:[t.uid],from:"mat"})}legalSupers(e){const t=this.seats[e];return!t.character||t.ill?[]:ny(t.character).filter(n=>!t.supersPlayed.includes(n.id)&&this.superReqMet(e,n))}superReqMet(e,t){const n=t.req,i=this.seats[e],r=o=>o==="wealth"?i.wealth:o==="health"?i.health:this.score(e,o);for(const[o,l]of Object.entries(n.min??{}))if(r(o)<l)return!1;for(const[o,l]of Object.entries(n.max??{}))if(r(o)>l)return!1;const a=Object.entries(n.anyMin??{});return!(a.length&&!a.some(([o,l])=>r(o)>=l)||n.bloodied&&!this.bloodiedKing()||n.ear&&this.ear!==e||n.healTarget&&!this.seats.some(o=>o.health<=2)||n.violentOpponent&&!this.seats.some(o=>o.seat!==e&&this.score(o.seat,"violence")>=1))}bloodiedKing(){return this.checkTest({t:"healthCardShowing",cards:fh},{actor:0,target:null})}cardName(e){return e.superId?mr(e.superId).name:e.card>=0?this.def(e.card).name:"?"}dropPassives(e){this.fx.pray.delete(e),this.fx.shieldCards.delete(e);for(const t of this.fx.hold.values())t.delete(e);this.fx.deposit.delete(e),this.fx.assurances.delete(e)}countPlay(e,t){return this.def(t).name!=="Work"?[]:(this.fx.works++,this.fx.employ===null?[]:[{op:{k:"gain",stat:"wealth",n:1,who:"self"},actor:this.fx.employ,target:null,card:t,tag:"employ"}])}tieBreak(e){if(e.length===1)return e[0];const t=e.filter(i=>this.martialLaw.has(i));if(t.length===1)return t[0];const n=t.length?t:e;return this.ear!==null&&n.includes(this.ear)?this.ear:null}favorStat(e){const t=ph[e];return this.fx.confound?t==="wealth"?{stat:"wealth",low:!0}:{stat:{piety:"corruption",corruption:"piety",violence:"charisma",charisma:"violence"}[t],low:!1}:{stat:t,low:!1}}prayBonus(e){return this.fx.pray.get(e)??0}claimContest(e,t,n){const i=r=>{if(n==="people")return this.seats[r].health;const a=this.favorStat(n);return this.score(r,a.stat)};for(let r=0;r<64;r++){const a=[e,t].map(c=>{const h=this.rng.die(Nt.DIE_SIDES),u=i(c)+this.prayBonus(c);return{seat:c,die:h,bonus:u,total:h+u}});this.issue("dice.roll",null,{purpose:"claim",rolls:a}),this.emit("contest_roll",{purpose:"claim",virtue:null,rolls:a,winner:null});const o=Math.max(...a.map(c=>c.total)),l=this.tieBreak(a.filter(c=>c.total===o).map(c=>c.seat));if(this.note(`Claim contest for ${n}: ${a.map(c=>`${c.seat}:${c.die}+${c.bonus}`).join(" ")} -> ${l??"tie, re-roll"}`),l!==null)return l}return t}canRemove(e,t,n){return this.fx.locked.has(n)?(this.note(`${n} is locked (Steal and Lock): stays with seat ${t}`),!1):this.fx.assurances.get(t)?.has(n)?(this.note(`${n}: seat ${t} has Get Assurances on it`),!1):this.fx.hold.get(n)?.has(t)?(this.note(`${n}: seat ${t} holds it (Orate)`),!1):this.fx.claim===t?this.claimContest(e,t,n)===e:!0}factionScore(e,t){const n=this.fx.scoreOverride.get(e);return n&&(n.seat===null||n.seat===t)?n.value:mh[e]}noteWealthGain(e,t,n,i){const r=this.fx.embezzle;if(n<=0||r===null||t===r||t!==e.actor||e.tag)return;const a=i??(e.superId?`super:${e.superId}:${t}`:`play:${e.play??e.card}`);this.fx.embezzled.has(a)||(this.fx.embezzled.add(a),this.note(`Embezzle: seat ${r} +1 Wealth +1 Corruption (seat ${t} gained Wealth)`),this.queue.unshift({op:{k:"gain",stat:"wealth",n:1,who:"self"},actor:r,target:null,card:e.card,tag:"embezzle"},{op:{k:"gain",stat:"corruption",n:1,who:"self"},actor:r,target:null,card:e.card,tag:"embezzle"}))}seatOfPick(e){return e&&e.startsWith("seat:")?Number(e.slice(5)):null}opponents(e){return this.seats.filter(t=>t.seat!==e).map(t=>t.seat)}static WED_TRAITS=["morality","temper","wealth"];superPick(e,t){const n=t.a??{},i=a=>a.map(o=>`seat:${o}`),r=e.actor;switch(t.id){case"chainPick":return{seat:r,options:i(this.opponents(r).filter(a=>!n.defeated.includes(a))),prompt:`${n.virtue==="violence"?"Violence":"Charisma"} contest: Target ${n.defeated.length?"another player":"a player"}`};case"heal":return{seat:r,options:i(this.seats.filter(a=>a.health<=2).map(a=>a.seat)),prompt:"Heal: Target at Health 0-2 (you may Target yourself)"};case"break":return{seat:r,options:["corruption","piety"],prompt:"Choose: +4 Corruption and Steal the Underground, or +3 Piety and Steal the Church"};case"wedPick":return{seat:r,options:i(this.opponents(r).filter(a=>this.seats[a].character)),prompt:"Wed: choose a character"};case"wedTrait":return{seat:r,options:["copy","keep"],prompt:`Wed: copy their ${n.trait==="morality"?"Piety/Corruption":n.trait==="temper"?"Violence/Charisma":"Wealth"}?`};case"indoctrinate":return{seat:r,options:["piety","corruption"],prompt:`Indoctrinate: copy this round's increases (Piety ${this.fx.increases.piety}, Corruption ${this.fx.increases.corruption})`};case"ambushTarget":case"tradePick":{const a=n.done??[];return{seat:r,options:i(this.opponents(r).filter(o=>!a.includes(o))),prompt:t.id==="ambushTarget"?"Ambush: Target":"Trade: average Wealth with (in the order you choose)"}}case"ambushSplit":return{seat:r,options:["0","1","2","3","4","5","6","7","8"],prompt:"Ambush: Health the Target loses (the rest of 8 is Wealth stolen)"};case"exploit":return{seat:r,options:_n.filter(a=>a!=="people"),prompt:"Exploit: name a faction (not the People)"};case"propagandize":return{seat:r,options:["piety","corruption","violence","charisma"],prompt:"Propagandize: choose one virtue"};case"propSelf":return{seat:r,options:["include","exclude"],prompt:`Propagandize: shift yourself +2 toward ${n.v} too?`};case"exhume":{const a=[...new Set(this.decks.minor.discard.map(o=>this.def(o).name))].sort();return{seat:r,options:a,prompt:"Exhume: name one Minor Deed"}}case"exhumeCount":{const a=Math.min(3,this.decks.minor.discard.filter(o=>this.def(o).name===n.name).length);return{seat:r,options:Array.from({length:a},(o,l)=>String(l+1)),prompt:`Exhume: how many ${n.name} (up to three)`}}case"falconryPick":return{seat:r,options:[...this.falconPool.map(String),"done"],prompt:"Falconry: play a Minor Deed, or discard the remainder"};case"taunt":return{seat:r,options:i(this.opponents(r).filter(a=>this.score(a,"violence")>=1)),prompt:"Taunt: Target a Violent Opponent"};case"juggle":return{seat:r,options:n.scale==="temper"?["charisma","violence"]:["piety","corruption"],prompt:"Juggle: +6 to"};case"playCard":{const a=this.def(n.uid);if(a.target&&n.target===void 0){const o=this.validTargets(r,a);return{seat:r,options:[...i(o),...a.target.optional?["none"]:[]],prompt:`${a.name}: Target`}}return a.namesFaction&&n.faction===void 0?{seat:r,options:[..._n],prompt:`${a.name}: name a faction`}:null}}return null}falconPool=[];playSeq=0;applySuper(e,t,n,i,r){const a=t.a??{},o=e.actor,l=this.seats[o],c=(x,g=o,m=null)=>({op:x,actor:g,target:m,card:e.card,superId:e.superId,play:e.play}),h=(x,g)=>g?{k:"super",id:x,a:g}:{k:"super",id:x},u=(...x)=>this.queue.unshift(...x),d=this.seatOfPick(e.pick),f=(x,g,m,p)=>{const v=this.seats[x],_=Math.min(m,v.wealth);if(_<=0)return;v.wealth-=_,i.add(x);const M=this.seats[g].wealth;this.gain(g,"wealth",_,n,i),this.noteWealthGain(e,g,this.seats[g].wealth-M,p)};switch(t.id){case"chainPick":{if(d===null)return this.note(`${this.cardName(e)}: every player is defeated`);u(c({k:"contest",virtue:a.virtue,vs:"target",win:[h("chainWin",{mode:a.mode,virtue:a.virtue,defeated:a.defeated})],lose:[]},o,d));return}case"chainWin":{const x=e.target;if(a.mode==="favor")for(const g of this.factionsOf(x))this.canRemove(o,x,g)&&this.takeFaction(o,g,r,n);else f(x,o,Math.floor(this.seats[x].wealth/2));u(c(h("chainPick",{virtue:a.virtue,mode:a.mode,defeated:[...a.defeated,x]})));return}case"preempt":{for(const x of this.seats){const g=x.mat.filter(m=>!m.resolved&&!m.discarded&&this.cards[m.uid]?.deck==="minor");for(const m of g)m.discarded=!0,this.decks.minor.discard.push(m.uid);g.length&&(this.note(`Preempt: seat ${x.seat} discards readied ${g.map(m=>this.def(m.uid).name).join(", ")}`),this.issue("cards.discard",x.seat,{uids:g.map(m=>m.uid),from:"mat"}))}return}case"martialLaw":return this.martialLaw.add(o),this.fx.scoreOverride.set("army",{seat:o,value:8}),this.note(`Martial Law: seat ${o} wins all ties for the rest of the game; the Army scores 8 for them this round`);case"heal":{if(d===null)return this.note("Heal: no Target at Health 0-2");const x=this.seats[d],g=Ua-x.health;return x.health<=0&&!x.ill&&(x.illNext=!0),x.health=Ua,i.add(d),this.moveSteps(o,g,n),this.note(`Heal: seat ${d} to full Health, +${g} Crowns`)}case"break":e.pick==="corruption"?u(c({k:"gain",stat:"corruption",n:4,who:"self"}),c({k:"favor",faction:"underground",steal:!0})):u(c({k:"gain",stat:"piety",n:3,who:"self"}),c({k:"favor",faction:"church",steal:!0}));return;case"skim":for(const x of this.opponents(o))this.fx.deposit.has(x)?this.note(`Skim: seat ${x} BLOCKED (Deposit)`):f(x,o,2,`skim:${x}`);return;case"embezzle":this.fx.embezzle=o;return;case"wedPick":{if(d===null)return;const x=this.seats[d];u(...wr.WED_TRAITS.filter(g=>x[g]!==l[g]).map(g=>c(h("wedTrait",{from:d,trait:g}))));return}case"wedTrait":if(e.pick==="copy"){const x=a.trait;l[x]=this.seats[a.from][x],i.add(o)}return;case"spendAll":{const x=l.wealth;return l.wealth=0,i.add(o),this.moveSteps(o,x,n),this.note(`Host a Gala: spends ${x} Wealth for +${x} Crowns`)}case"safeguard":this.fx.safeguard=!0;return;case"indoctrinate":{const x=e.pick,g=this.fx.increases[x];this.note(`Indoctrinate: copies ${g} ${x} increases played this round`),g>0&&this.gain(o,x,g,n,i);return}case"bless":{let x=0;for(const g of this.seats)g.morality<-1&&(x+=-1-g.morality,g.morality=-1,i.add(g.seat));return this.moveSteps(o,x,n),this.note(`Bless: ${x} ticks moved, +${x} Crowns`)}case"lockPeopleToChurch":this.fx.peopleToChurch=!0,this.peopleFollowChurch(r,n);return;case"ambushTarget":if(d===null)return;u(c(h("ambushSplit"),o,d));return;case"ambushSplit":{const x=e.target,g=Number(e.pick),m=this.seats[x],p=Math.min(g,m.health);return m.health-=p,i.add(x),8-g>0&&(this.fx.deposit.has(x)?this.note(`Ambush: the Wealth steal from seat ${x} is BLOCKED (Deposit)`):f(x,o,8-g)),this.note(`Ambush: seat ${x} loses ${p} Health, ${8-g} Wealth to steal`)}case"exploit":return this.fx.scoreOverride.set(e.pick,{seat:null,value:-5}),this.note(`Exploit: ${e.pick} scores -5 this round, whoever holds it`);case"scoreFor":this.fx.scoreOverride.set(a.faction,{seat:o,value:a.value});return;case"propagandize":u(c(h("propSelf",{v:e.pick})));return;case"propSelf":for(const x of this.seats)(x.seat!==o||e.pick==="include")&&this.gain(x.seat,a.v,2,n,i);return;case"exhume":if(e.pick===void 0)return this.note("Exhume: the Minor discard pile is empty");u(c(h("exhumeCount",{name:e.pick})));return;case"exhumeCount":{const x=Number(e.pick??0),g=this.decks.minor.discard.filter(m=>this.def(m).name===a.name).slice(0,x);u(...g.map(m=>c(h("playCard",{uid:m,from:"discard"}))));return}case"falconryTake":{this.falconPool=[];for(const x of this.seats){const g=x.leftovers.filter(m=>this.cards[m].deck==="minor");g.length&&(x.leftovers=x.leftovers.filter(m=>!g.includes(m)),this.falconPool.push(...g),this.issue("cards.discard",x.seat,{uids:g,from:"leftovers"}))}this.note(`Falconry takes ${this.falconPool.length} Minor Deeds from the hands`),this.falconPool.length&&u(c(h("falconryPick")));return}case"falconryPick":{if(e.pick==="done"||e.pick===void 0){for(const g of this.falconPool)this.decks.minor.discard.push(g);this.falconPool=[];return}const x=Number(e.pick);this.falconPool=this.falconPool.filter(g=>g!==x),u(c(h("playCard",{uid:x,from:"taken"})),...this.falconPool.length?[c(h("falconryPick"))]:[]);return}case"claim":this.fx.claim=o;return;case"employ":{if(this.fx.employ=o,this.fx.works>0){const x=l.wealth;this.gain(o,"wealth",this.fx.works,n,i),this.noteWealthGain(e,o,l.wealth-x)}return this.note(`Employ: ${this.fx.works} Work cards played so far this round`)}case"tradePick":{if(d===null)return;const x=this.seats[d],g=l.wealth+x.wealth,m=Math.ceil(g/2),p=Math.max(0,g-m-x.wealth),v=m-l.wealth;this.note(`Trade with seat ${d}: ${l.wealth}+${x.wealth} -> ${m}/${g-m}${p?`, +${p} Crowns`:""}`),l.wealth=m,x.wealth=g-m,i.add(o).add(d),this.moveSteps(o,p,n),this.noteWealthGain(e,o,v);const _=[...a.done??[],d];this.opponents(o).some(M=>!_.includes(M))&&u(c(h("tradePick",{done:_})));return}case"hustle":{const x=[...this.decks.major.discard,...this.decks.minor.discard].filter(g=>this.def(g).name==="Work");this.note(`Hustle plays ${x.length} Work cards from the discard pile`),u(...x.map(g=>c(h("playCard",{uid:g,from:"discard"}))));return}case"overshadow":this.fx.overshadow=o;return;case"confound":this.fx.confound=!0;return;case"inciteCorruption":this.fx.incite=o;return;case"inciteForce":{const x=[o,...this.fromEar().filter(m=>m!==o)],g=[];for(const m of x){const p=this.seats[m],v=p.leftovers.filter(_=>["Mug","Burgle"].includes(this.def(_).name));v.length&&(p.leftovers=p.leftovers.filter(_=>!v.includes(_)),this.issue("cards.discard",m,{uids:v,from:"leftovers"}),g.push(...v.map(_=>c(h("playCard",{uid:_,from:"taken"}),m))))}this.note(`Incite forces ${g.length} Mug / Burgle plays`),u(...g);return}case"taunt":{if(d===null)return this.note("Taunt: no Violent Opponent to Target");const x=this.seats[d];for(const M of this.factionsOf(d))this.canRemove(o,d,M)&&(this.gonfalons[M]=null,this.emit("favor_shift",{faction:M,from:d,to:null}),r.push({faction:M,from:d,to:null}));const g=fs(x.character),m=g.long[0]==="piety"?1:-1,p=g.long[1]==="violence"?1:-1,v=(M,w)=>Math.abs(M-w)-(M*w<0?1:0),_=v(x.morality,m)+v(x.temper,p);return x.morality=m,x.temper=p,i.add(d),this.moveSteps(o,_,n),this.note(`Taunt: seat ${d} back to the starting positions, +${_} Crowns`)}case"juggle":this.gain(o,e.pick,6,n,i);return;case"playCard":{const x=a.uid,g=this.def(x);if(g.target&&a.target===void 0){const M=e.pick===void 0?g.target.optional?null:"none":e.pick==="none"?null:this.seatOfPick(e.pick);if(M==="none"){this.note(`${g.name} (played by ${this.cardName(e)}): no legal Target, fizzles`),u(c(h("playDone",a)));return}u(c(h("playCard",{...a,target:M})));return}if(g.namesFaction&&a.faction===void 0){u(c(h("playCard",{...a,faction:e.pick??null})));return}const m={uid:x,target:a.target??null,faction:a.faction??null,superDeed:!1,resolved:!1,discarded:!1},p=this.fizzleReason(o,m);if(this.note(`${this.cardName(e)}: seat ${o} plays ${g.name}${m.target!==null?` -> seat ${m.target}`:""}${p?` FIZZLES: ${p}`:""}`),p){u(c(h("playDone",a)));return}this.activatePassive(o,g,m.faction);const v=++this.playSeq,_=[...this.countPlay(o,x),...this.bindCard(o,m).map(M=>({...M,play:v}))];u(..._,c(h("playDone",a)));return}case"playDone":a.from==="taken"&&this.decks[this.cards[a.uid].deck].discard.push(a.uid);return}throw new Error(`unknown Super Deed step ${t.id}`)}snapshot(){return{state:this.fsm.state,round:this.round,ear:this.ear,gonfalons:{...this.gonfalons},skulls:this.skullsShowing(),kingsHealth:{stack:this.kingsHealth.stack.length,track:[...this.kingsHealth.track]},decks:{major:this.decks.major.draw.length,minor:this.decks.minor.draw.length,majorDiscard:this.decks.major.discard.length,minorDiscard:this.decks.minor.discard.length},leader:this.leader(),throneWinner:this.throneWinner,winner:this.winner,seats:this.seats.map(e=>({seat:e.seat,kind:e.kind,character:e.character,health:e.health,wealth:e.wealth,morality:e.morality,temper:e.temper,step:e.step,hand:e.hand.length,mat:e.mat.length,ill:e.ill,illNext:e.illNext})),pending:this.pendingCommands().map(e=>({id:e.id,kind:e.kind,seat:e.seat}))}}}class gh extends Error{}function NM(s,e,t){if(kv[e.state]!==e.kind||s.state!==e.state)throw new gh(`bot asked ${e.kind} in ${s.state}`);const n=e.seat;if(e.kind==="decide.character")return{character:t.pick(e.data.options)};if(e.kind==="decide.split"){const{need:i}=e.data,r=s.seats[n].hand.filter(o=>s.cards[o].deck==="major").length;return{majors:Math.max(0,Math.min(i,2-r+(t.next()<.3?1:0)))}}if(e.kind==="decide.play")return iy(s,n,t);if(e.kind==="decide.pick")return{pick:t.pick(e.data.options)};if(e.kind==="decide.super"){const i=e.data.options.filter(r=>r!=="none");return{super:i.length&&t.next()<.35?t.pick(i):"none"}}throw new gh(e.kind)}function iy(s,e,t){const n=s.seats[e],i=s.playableMajors(e),r=n.hand.filter(c=>s.cards[c].deck==="minor"),o=i.length>0&&t.next()<.35||i.length===0?[null]:t.shuffle([...i]),l=[];for(const c of o){const h=[],u={},d={};let f=n.wealth;const x=g=>{const m=Ls[s.cards[g].def];if(m.cost>f||m.minGain&&n.wealth<2)return!1;if(m.target){const p=s.validTargets(e,m);if(p.length)u[g]=t.pick(p);else if(!m.target.optional)return!1}return m.namesFaction&&(d[g]=t.pick(_n)),f-=m.cost,h.push(g),!0};for(const g of t.shuffle([...r]))t.next()<.6&&x(g);if(!(c!==null&&!x(c))){if(c===null&&h.length===0){for(const g of t.shuffle([...r]))if(x(g))break}if(c!==null&&h.includes(c)&&t.next()<.5&&(h.splice(h.indexOf(c),1),h.unshift(c)),h.length&&l.push({cards:h,targets:u,factions:d}),l.length)break}}for(const c of l)if(!s.legalPlay(e,c))return c;for(const c of[...i,...r]){const h=Ls[s.cards[c].def],u={cards:[c],targets:{},factions:{}};if(h.target){const d=s.validTargets(e,h);d.length&&(u.targets[c]=d[0])}if(h.namesFaction&&(u.factions[c]="army"),!s.legalPlay(e,u))return u}return{cards:[]}}function sy(s){return s.replace(/\b(violence|charisma)\s+grand\s+contest\b/gi,(e,t)=>`${t[0].toUpperCase()}${t.slice(1).toLowerCase()} Contest`).replace(/\bgrand\s+contest\b/gi,"Contest")}const ry={discardTopFaceUp:!0},Tu=new Zo,_h=new Map,ay=new Map,oy="/kingmaker/";function cy(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}let wu=null;function ly(s){wu=s}function vh(s){let e=_h.get(s);return e||(wu?.(s),e=Tu.loadAsync(`${oy}km-art/${s}`).then(t=>(t.colorSpace=pt,t.anisotropy=4,ay.set(s,t),t)),_h.set(s,e)),e}const hy=s=>`cards/${cy(s)}.jpg`,uy=s=>`characters/${s}.jpg`;function dy(s){return`kings_health/${String(s).padStart(2,"0")}.jpg`}function fy(s,e){const t=s===1?1+e%5:s===2?6+e%4:10;return`kings_health/${String(t).padStart(2,"0")}.jpg`}let py=null;function yh(){return py??=a_(Tu)}const xr=(s,e=1024)=>(s/e-.005)/.99*1.188-.594,my={minX:xr(87),maxX:xr(938),minZ:xr(87),maxZ:xr(938)},xy={steps:50,startStep:!0,felt:my,path:{shape:"crown",centre:{x:0,z:-.08},loop:{halfX:.42,halfZ:.34,corner:.12,clockwise:!0},serpentine:{rows:5,width:.76,rowGap:.13},crown:{fit:"felt-centered",margin:.08,centre:{x:0,z:-.11},width:.8,height:.68,baseInset:.07,valleyX:.16,valleyDepth:.27,centreTipRise:0,spurTop:.32,gap:.06,gapBridge:!0},crown5:{centre:{x:0,z:-.11},width:.84,height:.62,bandHeight:.16,points:5,pointDepth:.27,route:"band-first",mirror:!1,throne:"band",bandLine:!0}},finish:{throne:!0,radius:.018,height:.036,color:"#8e1020",frameColor:"#d4af37"},skulls:{enabled:!0,every:8,steps:[10,18,24,30,35,40,45],size:.022,offset:.027,color:"#ece4cc",backColor:"#2b2420",lineColor:"#d4af37",lineLength:.03,lineWidth:.0028},tick:{radius:.0045,majorEvery:5,majorRadius:.0075,labelEvery:10,color:"#d8cfa8",majorColor:"#f3e7b8",startColor:"#ffffff"},pip:{diameter:.016,height:.01,gap:.003},gather:{layout:"ring",minRingRadius:.013,settle:.12,laneWidth:.012},move:{speed:5,accel:20,scatterStagger:.18}};function gy(s){if(!s||typeof s!="object")return s;const e=structuredClone(s),t=e.finish;t&&"jewel"in t&&(t.throne??=t.jewel,delete t.jewel),t&&"settingColor"in t&&(t.frameColor??=t.settingColor,delete t.settingColor);const n=e.path?.crown5;return n&&"jewel"in n&&(n.throne??=n.jewel,delete n.jewel),e}function _y(s={},e=xy){s=gy(s);const t=(n,i)=>{if(i===void 0)return structuredClone(n);if(typeof n!="object"||n===null||Array.isArray(n))return i;const r={};for(const a of Object.keys(n))r[a]=t(n[a],i[a]);return r};return t(e,s)}const Mh=s=>({min:s.startStep?0:1,max:s.steps});function Au(s){const e=s.skulls;if(!e.enabled)return[];const t=e.steps??(e.every>0?Array.from({length:Math.floor((s.steps-1)/e.every)},(n,i)=>(i+1)*e.every):[]);return[...new Set(t)].filter(n=>Number.isInteger(n)&&n>0&&n<s.steps).sort((n,i)=>n-i)}function vy(s){return{w:s.finish.radius*1.35,d:s.finish.radius*1.2,h:s.finish.height}}const yy=s=>s.pip.diameter+s.pip.gap;function My(s,e){const t=[];for(let n=-4;n<=4;n++)for(let i=-4;i<=4;i++)t.push({x:e*(n+i/2),z:e*i*(Math.sqrt(3)/2)});return t.sort((n,i)=>Math.hypot(n.x,n.z)-Math.hypot(i.x,i.z)||Math.atan2(n.z,n.x)-Math.atan2(i.z,i.x)),t.slice(0,s)}function Ru(s,e,t=0){if(s<=0)return[];const n=yy(e);if(t<=0&&e.gather.layout==="cluster")return My(s,n);if(s===1&&t<=0)return[{x:0,z:0}];const i=Math.max(e.gather.minRingRadius,t,s>1?n/(2*Math.sin(Math.PI/s)):0),r=[];for(let a=0;a<s;a++){const o=Math.PI/2+2*Math.PI*a/s;r.push({x:i*Math.cos(o),z:i*Math.sin(o)})}return r}function Cu(s,e){return e.finish.throne&&s===e.steps?e.finish.radius+e.pip.gap+e.pip.diameter/2:0}function Sy(s){let e=1/0;for(let t=0;t<s.length;t++)for(let n=t+1;n<s.length;n++)e=Math.min(e,Math.hypot(s[t].x-s[n].x,s[t].z-s[n].z));return e}function by(s,e=2400){const t=s.path.centre;if(s.path.shape==="serpentine"){const{rows:p,width:v,rowGap:_}=s.path.serpentine,M=[],w=_/2,E=t.z+(p-1)*_/2,A=Math.max(8,Math.floor(e/p));for(let P=0;P<p;P++){const b=P%2===0?1:-1,S=E-P*_;for(let C=0;C<=A;C++)M.push({x:t.x+b*(-v/2+v*C/A),z:S});if(P<p-1){const C=t.x+b*v/2;for(let U=1;U<24;U++){const k=Math.PI*U/24;M.push({x:C+b*w*Math.sin(k),z:S-w+w*Math.cos(k)})}}}return{pts:M,closed:!1}}const{halfX:n,halfZ:i,corner:r,clockwise:a}=s.path.loop,o=Math.min(r,n,i),l=n-o,c=i-o,h=[],u=[],d=(p,v)=>{h.push(_=>({x:p.x+(v.x-p.x)*_,z:p.z+(v.z-p.z)*_})),u.push(Math.hypot(v.x-p.x,v.z-p.z))},f=(p,v,_,M)=>{h.push(w=>({x:p+o*Math.cos(_+(M-_)*w),z:v+o*Math.sin(_+(M-_)*w)})),u.push(Math.abs(M-_)*o)};d({x:0,z:i},{x:-l,z:i}),f(-l,c,Math.PI/2,Math.PI),d({x:-n,z:c},{x:-n,z:-c}),f(-l,-c,Math.PI,1.5*Math.PI),d({x:-l,z:-i},{x:l,z:-i}),f(l,-c,1.5*Math.PI,2*Math.PI),d({x:n,z:-c},{x:n,z:c}),f(l,c,0,Math.PI/2),d({x:l,z:i},{x:0,z:i});const x=u.reduce((p,v)=>p+v,0),g=[];h.forEach((p,v)=>{const _=Math.max(2,Math.round(e*u[v]/x));for(let M=0;M<_;M++)g.push(p(M/_))}),g.push(h[h.length-1](1));const m=a?1:-1;return{pts:g.map(p=>({x:t.x+m*p.x,z:t.z+p.z})),closed:!0}}const ac=s=>s.path.shape==="crown"||s.path.shape==="crown5";function Us(s){return s.path.shape==="crown5"?Ay(s):wy(s)}function Pu(s){const e=s.pip.diameter/2;return{side:e,top:e,bottom:Math.max(e,s.startStep?s.tick.majorRadius*1.6:0)}}function Ey(s){const e=s.path.crown,t=Math.max(0,e.centreTipRise);if(e.fit!=="felt-centered")return{scale:1,centre:e.centre,bottom:e.centre.z+e.height/2};const n=s.felt,i=Pu(s),r=(n.maxX-n.minX-2*e.margin-2*i.side)/e.width,a=r*(e.height+t)+i.top+i.bottom,o=(n.minZ+n.maxZ)/2+a/2-i.bottom;return{scale:r,centre:{x:(n.minX+n.maxX)/2,z:o-r*(e.height+t)/2},bottom:o}}function Ty(s){const e=Us(s),t=Pu(s),n=e.route.map(a=>a.x),i=e.route.map(a=>a.z),r=s.felt;return{left:Math.min(...n)-t.side-r.minX,right:r.maxX-(Math.max(...n)+t.side),top:Math.min(...i)-t.top-r.minZ,bottom:r.maxZ-(Math.max(...i)+t.bottom)}}function wy(s){const e=s.path.crown,{scale:t,centre:n,bottom:i}=Ey(s),r=t*e.width/2,a=i-t*e.height,o=(_,M)=>({x:n.x+_,z:M}),l=[o(-t*e.gap,i),o(-(r-t*e.baseInset),i),o(-r,a),o(-t*e.valleyX,a+t*e.valleyDepth)],c=o(0,a-t*e.centreTipRise),h=l.map(_=>o(-(_.x-n.x),_.z)).reverse(),u=o(0,i),d=o(0,i-t*e.spurTop),f=[...l,c,...h,u,d],x=(_,M)=>Math.hypot(M.x-_.x,M.z-_.z),g=[...l,c].slice(1).map((_,M)=>x(l[M],_)),m=x(u,d),p=s.steps-(s.startStep?0:1);let v=null;for(let _=g.length;2*_+2<=p;_++){const M=Lu(g,_),w=p-1-2*_,E=[...g.map((P,b)=>P/M[b]),m/w],A=Math.max(...E)/Math.min(...E);(!v||A<v.ratio)&&(v={counts:[...M,...[...M].reverse(),1,w],ratio:A})}return{route:f,throne:d,bandLine:null,tips:[f[2],c,f[6]],valleys:[f[3],f[5]],centre:n,scale:t,anchorTurnDeg:0,counts:v.counts,strokes:e.gapBridge?[f]:[f.slice(0,9),f.slice(9)]}}function Ay(s){const e=s.path.crown5,t=e.centre,n=e.width/2,i=t.z+e.height/2,r=t.z-e.height/2,a=i-e.bandHeight,o=r+e.pointDepth,l=Math.max(2,Math.round(e.points)),c=e.mirror?-1:1,h=(p,v)=>({x:t.x+c*p,z:v}),u=Array.from({length:l},(p,v)=>h(-n+(v+.5)*e.width/l,r)),d=Array.from({length:l-1},(p,v)=>h(-n+(v+1)*e.width/l,o)),f=e.throne==="face"?(a+o)/2:i-e.bandHeight/2,x=h(0,f),g=[h(-n,o)];for(let p=0;p<l;p++)g.push(u[p]),p<l-1&&g.push(d[p]);g.push(h(n,o));let m;return e.route==="points-first"?m=[h(-n,i),...g,h(n,i),h(0,i),x]:m=[h(-n,i),h(n,i),...g.reverse(),h(-n,f),x],m=m.filter((p,v)=>v===0||Math.hypot(p.x-m[v-1].x,p.z-m[v-1].z)>1e-9),{route:m,throne:x,bandLine:e.bandLine?[h(-n,a),h(n,a)]:null,tips:u,valleys:d,centre:t,anchorTurnDeg:Ry}}function Lu(s,e){const t=s.reduce((o,l)=>o+l,0),n=s.map(o=>o/t*e),i=n.map(o=>Math.max(1,Math.floor(o)));let r=e-i.reduce((o,l)=>o+l,0);const a=n.map((o,l)=>({i:l}));for(;r>0;)a.sort((o,l)=>s[l.i]/i[l.i]-s[o.i]/i[o.i]),i[a[0].i]++,r--;for(;r<0;){a.sort((l,c)=>s[l.i]/i[l.i]-s[c.i]/i[c.i]);const o=a.find(l=>i[l.i]>1);i[o.i]--,r++}return i}const Ry=120;function Cy(s){const e=Us(s),t=e.route,n=s.startStep?0:1,i=s.steps-n,r=[0];for(let v=1;v<t.length;v++)r.push(r[v-1]+Math.hypot(t[v].x-t[v-1].x,t[v].z-t[v-1].z));const a=r[r.length-1],o=[0];for(let v=1;v<t.length-1;v++){if(e.counts){o.push(v);continue}const _={x:t[v].x-t[v-1].x,z:t[v].z-t[v-1].z},M={x:t[v+1].x-t[v].x,z:t[v+1].z-t[v].z};Math.acos(Math.max(-1,Math.min(1,(_.x*M.x+_.z*M.z)/(Math.hypot(_.x,_.z)*Math.hypot(M.x,M.z)))))*180/Math.PI>=e.anchorTurnDeg&&o.push(v)}o.push(t.length-1);const l=o.slice(1).map((v,_)=>r[v]-r[o[_]]),c=e.counts??Lu(l,i),h=[];c.forEach((v,_)=>{for(let M=0;M<v;M++)h.push(r[o[_]]+l[_]*M/v)}),h.push(a);const u=v=>{v=Math.max(0,Math.min(a,v));let _=1;for(;_<r.length-1&&r[_]<v;)_++;const M=(v-r[_-1])/Math.max(1e-12,r[_]-r[_-1]);return{x:t[_-1].x+(t[_].x-t[_-1].x)*M,z:t[_-1].z+(t[_].z-t[_-1].z)*M}},d=v=>Math.max(n,Math.min(s.steps,v)),f=v=>{const _=d(v)-n,M=Math.min(i-1,Math.floor(_));return h[M]+(h[M+1]-h[M])*(_-M)},x=[];for(let v=0;v<=s.steps;v++)x.push(v<n?{x:NaN,z:NaN}:u(h[v-n]));x[s.steps]={...t[t.length-1]};const g=c.map((v,_)=>l[_]/v),m=v=>u(f(v)),p=v=>{const _=f(v),M=u(Math.min(_,a-1e-4)-1e-4),w=u(Math.min(_,a-1e-4)+1e-4),E=Math.hypot(w.x-M.x,w.z-M.z)||1;return{x:(w.x-M.x)/E,z:(w.z-M.z)/E}};return{ticks:x,spacing:a/i,spacingRange:{min:Math.min(...g),max:Math.max(...g)},length:a,closed:!1,at:m,tangent:p,polyline:t,throne:s.finish.throne?x[s.steps]:null,jewel:s.finish.throne?x[s.steps]:null,decor:e.bandLine?[e.bandLine]:[],strokes:e.strokes??[t]}}function Du(s){if(ac(s))return Cy(s);const{pts:e,closed:t}=by(s),n=[0];for(let f=1;f<e.length;f++)n.push(n[f-1]+Math.hypot(e[f].x-e[f-1].x,e[f].z-e[f-1].z));const i=n[n.length-1],r=s.startStep?0:1,a=s.steps-r+1,o=t?i/a:i/(a-1),l=f=>{f=Math.max(0,Math.min(i,f));let x=0,g=n.length-1;for(;g-x>1;){const p=x+g>>1;n[p]<=f?x=p:g=p}const m=(f-n[x])/Math.max(1e-12,n[g]-n[x]);return{x:e[x].x+(e[g].x-e[x].x)*m,z:e[x].z+(e[g].z-e[x].z)*m}},c=f=>(f-r)*o,h=f=>l(c(Math.max(r,Math.min(s.steps,f)))),u=[];for(let f=0;f<=s.steps;f++)u.push(f<r?{x:NaN,z:NaN}:h(f));return{ticks:u,spacing:o,spacingRange:{min:o,max:o},length:i,closed:t,at:h,tangent:f=>{const x=c(f),g=l(x-.002),m=l(x+.002),p=Math.hypot(m.x-g.x,m.z-g.z)||1;return{x:(m.x-g.x)/p,z:(m.z-g.z)/p}},polyline:e,strokes:[e],throne:s.finish.throne?u[s.steps]:null,jewel:s.finish.throne?u[s.steps]:null,decor:[]}}class Py{constructor(e,t,n,i){this.id=e,this.color=t,this.track=n,this.s=i,this.target=i,this.lastTick=i}id;color;track;s;retired=!1;v=0;target;offset={x:0,z:0};pending=[];listeners={step:[],arrive:[]};lastTick;get moving(){return this.s!==this.target||this.v!==0}get step(){return Math.round(this.s)}goTo(e){const t=this.track.clampStep(e,this.target);for(const i of this.pending.splice(0))i({id:this.id,step:this.target,reached:!1});const n=!this.moving;return this.target=t,n&&t===this.s?Promise.resolve({id:this.id,step:t,reached:!0}):(n&&this.track.leave(this),new Promise(i=>this.pending.push(i)))}on(e,t){return this.listeners[e].push(t),()=>this.listeners[e]=this.listeners[e].filter(n=>n!==t)}advance(e,t,n){if(!this.moving)return;const i=this.s,r=this.target-this.s,a=Math.sign(r),l=a*Math.min(t,Math.sqrt(2*n*Math.abs(r)))-this.v;this.v+=Math.sign(l)*Math.min(Math.abs(l),n*e),this.s+=this.v*e,(a!==0&&Math.sign(this.target-this.s)!==a&&Math.abs(this.v)<=.5||Math.abs(this.target-this.s)<1e-4&&Math.abs(this.v)<.05)&&(this.s=this.target,this.v=0);const h=Math.min(i,this.s),u=Math.max(i,this.s),d=[];for(let f=Math.ceil(h);f<=Math.floor(u);f++)d.push(f);this.s<i&&d.reverse();for(const f of d)f!==this.lastTick&&(this.lastTick=f,this.listeners.step.forEach(x=>x(f)));if(!this.moving){this.track.join(this);for(const f of this.listeners.arrive)f(this.target);for(const f of this.pending.splice(0))f({id:this.id,step:this.target,reached:!0})}}}class Ly{constructor(e,t){this.cfg=e,this.path=Du(e);const n=Mh(e).min;for(const i of t){const r=new Py(i.id,i.color,this,n);this.markers.push(r),this.join(r)}for(const i of this.markers)i.offset={...this.slotOf(i)}}cfg;path;markers=[];groups=new Map;get(e){return typeof e=="number"?this.markers[e]:this.markers.find(t=>t.id===e)}clampStep(e,t){const{min:n,max:i}=Mh(this.cfg);return Number.isFinite(e)?Math.max(n,Math.min(i,Math.round(e))):t}retire(e){const t=this.get(e);!t||t.retired||(this.leave(t),t.retired=!0)}enlist(e,t){const n=this.get(e);!n||!n.retired||(n.retired=!1,n.s=n.target=this.clampStep(t,0),n.v=0,this.join(n),n.offset={...this.slotOf(n)})}at(e){return this.groups.get(e)??[]}join(e){const t=this.groups.get(e.target)??[];t.includes(e)||t.push(e),this.groups.set(e.target,t)}leave(e){for(const[t,n]of this.groups){const i=n.indexOf(e);i>=0&&n.splice(i,1),n.length===0&&this.groups.delete(t)}}slotOf(e){if(e.moving){const i=this.markers.indexOf(e)%3-1;if(i===0)return{x:0,z:0};const r=this.path.tangent(e.s),a=i*this.cfg.gather.laneWidth;return{x:-r.z*a,z:r.x*a}}const t=this.at(e.target),n=t.indexOf(e);return n<0?{x:0,z:0}:Ru(t.length,this.cfg,Cu(e.target,this.cfg))[n]}update(e){const t=.004166666666666667;for(let n=0;n<e-1e-9;n+=t){const i=Math.min(t,e-n);for(const a of this.markers)a.retired||a.advance(i,this.cfg.move.speed,this.cfg.move.accel);const r=1-Math.exp(-i/Math.max(.001,this.cfg.gather.settle));for(const a of this.markers){if(a.retired)continue;const o=this.slotOf(a);a.offset.x+=(o.x-a.offset.x)*r,a.offset.z+=(o.z-a.offset.z)*r}}}positionOf(e){const t=this.path.at(e.s);return{x:t.x+e.offset.x,z:t.z+e.offset.z}}settled(e=1e-4){return this.markers.every(t=>{if(t.retired)return!0;if(t.moving)return!1;const n=this.slotOf(t);return Math.hypot(n.x-t.offset.x,n.z-t.offset.z)<=e})}}const gr=["general","knight","priest","matron","rogue","spymaster","duchess","dilettante","merchant_prince","innkeeper","farm_hand","fool"],Dy={general:"#d9542b",knight:"#2b8fc4",priest:"#9fdcf2",matron:"#f08ca8",rogue:"#4b3aa8",spymaster:"#0f6e6e",duchess:"#d43fb0",dilettante:"#5ed6a8",merchant_prince:"#8f6f1c",innkeeper:"#f2b45a",farm_hand:"#8a5a2b",fool:"#a6e05a"},oc=.03,Sh=.055;function cc(s,e){const t=[],n=ac(s)?Us(s).centre:s.path.centre;return e.ticks.forEach((i,r)=>{if(Number.isNaN(i.x))return;const a=s.startStep&&r===0;if(!(a||r===1||r%s.tick.labelEvery===0)||e.throne&&r===s.steps)return;const o=e.tangent(r);let l=-o.z,c=o.x;l*(i.x-n.x)+c*(i.z-n.z)<0&&(l=-l,c=-c),s.path.shape.startsWith("crown")&&c>.7&&(l=-l,c=-c),t.push({step:r,text:a?"0":String(r),at:{x:i.x+l*Sh,z:i.z+c*Sh}})}),t}const Iy=(s,e,t)=>{const n=t.x-e.x,i=t.z-e.z,r=n*n+i*i,a=r>0?Math.max(0,Math.min(1,((s.x-e.x)*n+(s.z-e.z)*i)/r)):0;return Math.hypot(s.x-e.x-a*n,s.z-e.z-a*i)};function bh(s,e,t,n){const i=s.skulls.size/2;let r=1/0;for(const a of e.strokes)for(let o=1;o<a.length;o++)r=Math.min(r,Iy(t,a[o-1],a[o])-i);e.ticks.forEach((a,o)=>{if(o===n||Number.isNaN(a.x))return;const l=o===0?s.tick.majorRadius*1.6:o%s.tick.majorEvery===0?s.tick.majorRadius:s.tick.radius;r=Math.min(r,Math.hypot(a.x-t.x,a.z-t.z)-l-i)});for(const a of cc(s,e))r=Math.min(r,Math.hypot(a.at.x-t.x,a.at.z-t.z)-oc/2-i);return e.throne&&(r=Math.min(r,Math.hypot(e.throne.x-t.x,e.throne.z-t.z)-s.finish.radius-i)),r}function Iu(s,e){const t=ac(s)?Us(s).centre:s.path.centre;return Au(s).map(n=>{const i=e.ticks[n],r=e.tangent(n);let a=-r.z,o=r.x;const l=a*(i.x-t.x)+o*(i.z-t.z);(Math.abs(l)<1e-4?a>0:l<0)&&(a=-a,o=-o);const c=s.path.shape.startsWith("crown")&&o>.7;c&&(a=-a,o=-o);const h=s.skulls.offset,u={x:i.x-a*h,z:i.z-o*h},d={x:i.x+a*h,z:i.z+o*h},f=bh(s,e,u,n),x=bh(s,e,d,n);return(c?x>=.01:x>f+.005)?{step:n,tick:i,at:d,side:"labels",clearance:x}:{step:n,tick:i,at:u,side:"opposite",clearance:f}})}function Ny(){return typeof matchMedia=="function"&&!matchMedia("(prefers-reduced-motion: reduce)").matches}function Uy(s,e){const t=s.skulls.lineLength,n=s.skulls.lineWidth,i=t/2;return Au(s).map(r=>{const a=e.ticks[r],o=e.tangent(r),l=-o.z,c=o.x;return{step:r,at:a,a:{x:a.x+l*i,z:a.z+c*i},b:{x:a.x-l*i,z:a.z-c*i},length:t,width:n}})}function Fy(s,e,t){const n=document.createElement("canvas");n.width=128,n.height=64;const i=n.getContext("2d");i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle=t,i.fillText(s,64,34);const r=new zr(n);r.colorSpace=pt,r.anisotropy=4;const a=new Ze(new en(e*2,e),new un({map:r,transparent:!0,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a}function Oy(s,e){if(!e)return{mat:new vt({color:new xe(s),emissive:new xe(s),emissiveIntensity:.28,metalness:.85,roughness:.3,transparent:!0,opacity:.95,depthWrite:!1}),tick:()=>{}};const t={uTime:{value:0},uColor:{value:new xe(s)}};return{mat:new Tn({uniforms:t,transparent:!0,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:["uniform float uTime;","uniform vec3 uColor;","varying vec2 vUv;","void main() {","  float wave = 0.5 + 0.5 * sin(vUv.x * 6.28318 - uTime * 2.0);","  vec3 highlight = min(uColor * 1.55 + vec3(0.2, 0.15, 0.04), vec3(1.0));","  vec3 color = mix(uColor, highlight, 0.35 + 0.65 * wave);","  gl_FragColor = vec4(color, 0.88 + 0.12 * wave);","}"].join(`
`)}),tick:i=>{t.uTime.value=i}}}class ky{constructor(e,t){this.track=e,this.topY=t;const n=e.cfg,i=e.path;this.group.name="km-track";const r=t+4e-4,a=.0016,o=new un({color:new xe(n.tick.color),transparent:!0,opacity:.45,side:on,depthWrite:!1});for(const m of i.strokes){const p=[],v=[];for(let w=0;w<m.length;w++){const E=m[Math.max(0,w-1)],A=m[Math.min(m.length-1,w+1)],P=Math.hypot(A.x-E.x,A.z-E.z)||1,b=-(A.z-E.z)/P,S=(A.x-E.x)/P;p.push(m[w].x+b*a,r,m[w].z+S*a,m[w].x-b*a,r,m[w].z-S*a),w>0&&v.push(2*w-2,2*w-1,2*w,2*w-1,2*w+1,2*w)}const _=new Lt;_.setAttribute("position",new St(p,3)),_.setIndex(v);const M=new Ze(_,o);M.name="path-stroke",this.group.add(M)}const l=new vt({color:new xe(n.tick.color),roughness:.6}),c=new vt({color:new xe(n.tick.majorColor),roughness:.5}),h=new vt({color:new xe(n.tick.startColor),roughness:.5});for(const[m,p]of i.decor){const v=Math.hypot(p.x-m.x,p.z-m.z),_=new Ze(new en(v,.0024),new un({color:new xe(n.tick.color),transparent:!0,opacity:.22,depthWrite:!1}));_.rotation.set(-Math.PI/2,0,-Math.atan2(p.z-m.z,p.x-m.x)),_.position.set((m.x+p.x)/2,r,(m.z+p.z)/2),this.group.add(_)}if(i.throne){const m=zy(n);m.position.set(i.throne.x,t,i.throne.z),this.group.add(m)}const u=By(n.skulls.color,n.skulls.backColor),d=new vt({map:u,transparent:!0,alphaTest:.05,roughness:.7,depthWrite:!0});for(const m of Iu(n,i)){const p=new Ze(new en(n.skulls.size,n.skulls.size),d);p.rotation.x=-Math.PI/2,p.position.set(m.at.x,t+9e-4,m.at.z),p.receiveShadow=!0,p.name=`skull-${m.step}`,this.group.add(p)}const f=Ny(),x=Oy(n.skulls.lineColor,f);this.tickSkullLines=x.tick;for(const m of Uy(n,i)){const p=new Ze(new en(m.length,m.width),x.mat),v=m.b.x-m.a.x,_=m.b.z-m.a.z;p.rotation.set(-Math.PI/2,0,-Math.atan2(_,v)),p.position.set(m.at.x,t+.0011,m.at.z),p.name=`skull-line-${m.step}`,this.group.add(p)}i.ticks.forEach((m,p)=>{if(Number.isNaN(m.x)||i.throne&&p===n.steps)return;const v=p===0,_=!v&&p%n.tick.majorEvery===0,M=v?n.tick.majorRadius*1.6:_?n.tick.majorRadius:n.tick.radius,w=new Ze(new Br(M,M,.0012,24),v?h:_?c:l);w.position.set(m.x,t+6e-4,m.z),w.receiveShadow=!0,w.name=`tick-${p}`,this.group.add(w)});for(const m of cc(n,i)){const p=Fy(m.text,oc,n.tick.majorColor);p.position.set(m.at.x,t+.001,m.at.z),this.group.add(p)}const g=new Vr(n.pip.diameter/2,20,12);g.scale(1,n.pip.height/n.pip.diameter,1);for(const m of e.markers){const p=new Ze(g,new vt({color:new xe(m.color),roughness:.35,metalness:.05}));p.castShadow=!0,p.name=`pip-${m.id}`,this.pips.push(p),this.group.add(p)}this.sync()}track;topY;group=new Pt;pips=[];tickSkullLines=()=>{};markersInfo(){this.group.updateMatrixWorld(!0);const e=this.group.getObjectByName("throne");let t=null;if(e){const r=new Rt().setFromObject(e);let a=0;e.traverse(o=>{o.isMesh&&a++}),t={min:r.min.toArray().map(o=>+o.toFixed(4)),max:r.max.toArray().map(o=>+o.toFixed(4)),meshes:a}}const n=this.group.children.filter(r=>r.name.startsWith("skull-")&&!r.name.startsWith("skull-line-")).map(r=>{const a=new Rt().setFromObject(r);return{name:r.name,x:+r.position.x.toFixed(4),z:+r.position.z.toFixed(4),y:+(a.max.y-this.topY).toFixed(5),size:+(a.max.x-a.min.x).toFixed(4)}}),i=this.group.children.filter(r=>r.name.startsWith("skull-line-")).map(r=>({name:r.name,x:+r.position.x.toFixed(4),z:+r.position.z.toFixed(4)}));return{throne:t,skulls:n,skullLines:i}}sync(e=0){this.tickSkullLines(e);const t=this.track.cfg.pip.height/2;this.track.markers.forEach((n,i)=>{const r=this.track.positionOf(n);this.pips[i].visible=!n.retired,this.pips[i].position.set(r.x,this.topY+.0012+t,r.z)})}}function zy(s){const{w:e,d:t,h:n}=vy(s),i=new vt({color:new xe(s.finish.frameColor),roughness:.32,metalness:.85}),r=new vt({color:new xe(s.finish.color),roughness:.7,metalness:0}),a=new Pt;a.name="throne";const o=(f,x,g,m,p,v,_,M)=>{const w=new Ze(new Qn(f,x,g),_);return w.position.set(m,p,v),w.castShadow=!0,w.receiveShadow=!0,w.name=M,a.add(w),w},l=n*.08,c=n*.36,h=n*.08,u=t*.18;o(e,l,t,0,l/2,0,i,"throne-dais"),o(e*.86,c-l,t*.8,0,l+(c-l)/2,0,i,"throne-base"),o(e*.9,h,t*.84,0,c+h/2,0,r,"throne-cushion");const d=-t/2+u/2+t*.04;o(e*.9,n-c-l,u,0,c+(n-c-l)/2,d,i,"throne-back"),o(e*.62,(n-c)*.62,u*.3,0,c+h+(n-c)*.36,d+u*.62,r,"throne-panel");for(const f of[-1,1])o(e*.1,n*.14,t*.72,f*e*.45,c+h+n*.07,t*.02,i,"throne-arm");for(const f of[-1,1]){const x=new Ze(new Vr(e*.09,12,8),i);x.position.set(f*e*.38,n-l+e*.07,d),x.castShadow=!0,x.name="throne-finial",a.add(x)}return a}function By(s,e){const n=document.createElement("canvas");n.width=n.height=128;const i=n.getContext("2d");i.fillStyle=e,i.beginPath(),i.arc(128/2,128/2,128/2-2,0,Math.PI*2),i.fill(),i.strokeStyle=s,i.lineWidth=4,i.beginPath(),i.arc(128/2,128/2,128/2-6,0,Math.PI*2),i.stroke(),i.fillStyle=s,i.beginPath(),i.ellipse(64,54,34,30,0,0,Math.PI*2),i.fill(),i.fillRect(42,66,44,26),i.beginPath(),i.roundRect(46,84,36,16,5),i.fill(),i.fillStyle=e,i.beginPath(),i.ellipse(50,60,10,11,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(78,60,10,11,0,0,Math.PI*2),i.fill(),i.beginPath(),i.moveTo(64,70),i.lineTo(58,82),i.lineTo(70,82),i.closePath(),i.fill();for(const a of[55,64,73])i.fillRect(a-1.5,86,3,12);const r=new zr(n);return r.colorSpace=pt,r.anisotropy=4,r}const Vy=[[1,22],[2,22],[3,22],[4,22],[5,50],[6,50],[7,50],[8,8],[9,8],[10,21],[11,3],[12,31]];function UM(s,e,t=new URLSearchParams(location.search)){const i=_y({}),r=Math.max(1,Math.min(gr.length,Number(gr.length)||gr.length)),a=new Ly(i,gr.slice(0,r).map(f=>({id:f,color:Dy[f]}))),o=new ky(a,e);s.add(o.group);let l=0;const c=[],h=f=>{const x=.016666666666666666;for(let g=0;g<f-1e-9;g+=x){const m=Math.min(x,f-g);l+=m;for(const p of c.filter(v=>v.at<=l+1e-9))c.splice(c.indexOf(p),1),p.run();a.update(m)}o.sync(l)},u=f=>typeof f=="number"||/^\d+$/.test(f)?a.get(Number(f)-1):a.get(f),d={cfg:i,markers:a.markers,goTo:(f,x)=>u(f)?.goTo(x),scatter:()=>Promise.all(Vy.filter(([f])=>f<=r).map(([f,x],g)=>new Promise(m=>c.push({at:l+g*i.move.scatterStagger,run:()=>m(a.get(f-1).goTo(x))})))),advance(f){h(f)}};return{track:a,view:o,api:d,frame(f){h(f)},tick(f){h(f)},state(){let f=1/0;const x=new Set(a.markers.filter(g=>!g.moving).map(g=>g.target));for(const g of x){const m=a.at(g);m.length>1&&(f=Math.min(f,Sy(m.map(p=>a.positionOf(p)))))}return{steps:i.steps,closed:a.path.closed,throne:a.path.throne,jewel:a.path.throne,look:o.markersInfo(),skulls:Iu(i,a.path).map(g=>({step:g.step,x:+g.at.x.toFixed(4),z:+g.at.z.toFixed(4)})),finish:a.path.ticks[i.steps],startStep:i.startStep,shape:i.path.shape,ticks:a.path.ticks.filter(g=>!Number.isNaN(g.x)).length,spacing:+a.path.spacing.toFixed(4),settled:c.length===0&&a.settled(1e-4),minSharedPipDistance:Number.isFinite(f)?+f.toFixed(5):null,pipDiameter:i.pip.diameter,felt:i.felt,margins:i.path.shape==="crown"?Ty(i):null,markers:a.markers.map(g=>({id:g.id,color:g.color,step:g.step,target:g.target,moving:g.moving}))}}}}const Hy={enabled:!0,row:"bisector",perSide:3,base:{width:.056,height:.002},shaft:{width:.046,height:.004},cap:{width:.054,height:.002},minClearance:.01,marble:{color:"#ece8e1",vein:"#9c968c",roughness:.32},order:["army","people","church","aristocracy","merchants","underground"],gonfalon:{scale:.4,seat:"foot",source:{dir:null,files:{aristocracy:"km_gonfalon_aristocracy.glb",army:"km_gonfalon_army.glb",church:"km_gonfalon_church.glb",merchants:"km_gonfalon_merchants.glb",people:"km_gonfalon_people.glb",underground:"km_gonfalon_underground.glb"}}}};function FM(s={},e=Hy){const t=(n,i)=>{if(i===void 0)return structuredClone(n);if(typeof n!="object"||n===null||Array.isArray(n))return i;const r={};for(const a of Object.keys(n))r[a]=t(n[a],i[a]);return r};return t(e,s)}const Gy=(s,e,t)=>(s.perSide-1-t)*2+(e<0?0:1),Wy=s=>s.base.height+s.shaft.height+s.cap.height,Xy="/kingmaker/assets/km_gonfalon_aristocracy-USWJipyR.glb",$y="/kingmaker/assets/km_gonfalon_army-B52A-g0W.glb",qy="/kingmaker/assets/km_gonfalon_church-5SO1HQCA.glb",jy="/kingmaker/assets/km_gonfalon_merchants-Ch8em8im.glb",Ky="/kingmaker/assets/km_gonfalon_people-Dg5omK0I.glb",Yy="/kingmaker/assets/km_gonfalon_underground-CTsftC4r.glb",_r={aristocracy:{file:"km_gonfalon_aristocracy.glb",url:Xy,sha256:"339e9dd3505e4b1df1cf53c96ef63f961039f89baa83d6454d7f40d1d881b326",bytes:119444,sourceMtime:"2026-11-13T00:42:26.266Z"},army:{file:"km_gonfalon_army.glb",url:$y,sha256:"b834a88c882e01547b08be697fae3927602852b03a9fa4998f59e0a43ea158ba",bytes:139260,sourceMtime:"2026-11-13T06:21:34.290Z"},church:{file:"km_gonfalon_church.glb",url:qy,sha256:"530ce4c704776729aadbf956feb75fcdf2f817a2409c69a5f7fabf4c2cd60d66",bytes:141960,sourceMtime:"2026-11-13T00:42:26.410Z"},merchants:{file:"km_gonfalon_merchants.glb",url:jy,sha256:"24d3b2f273ea483b13473a53fff2dd538170c2f48fdec65b166d5380efc32e6d",bytes:144e3,sourceMtime:"2026-11-13T00:42:26.494Z"},people:{file:"km_gonfalon_people.glb",url:Ky,sha256:"bbcba671fbae46ceb4f30d0295b038a630da1b1f3cdb8a8c604e9cc22e3e1b72",bytes:123336,sourceMtime:"2026-11-13T06:21:34.214Z"},underground:{file:"km_gonfalon_underground.glb",url:Yy,sha256:"9fe641a89d81247c4e0454091e336c2b6f7090837f46d0a47daedb88fbc85778",bytes:138080,sourceMtime:"2026-11-13T06:21:34.358Z"}};function Zy(s){return()=>(s=s*1664525+1013904223>>>0)/4294967296}function Jy(s,e,t=256,n=7){const i=Zy(n),r=8,a=Array.from({length:(r+1)*(r+1)*3},()=>i()),o=(g,m,p)=>{const v=Math.floor(g)%r,_=Math.floor(m)%r,M=g-Math.floor(g),w=m-Math.floor(m),E=(S,C)=>a[((C%r*(r+1)+S%r)*3+p)%a.length],A=S=>S*S*(3-2*S),P=E(v,_)+(E(v+1,_)-E(v,_))*A(M),b=E(v,_+1)+(E(v+1,_+1)-E(v,_+1))*A(M);return P+(b-P)*A(w)},l=(g,m)=>o(g,m,0)*.55+o(g*2,m*2,1)*.3+o(g*4,m*4,2)*.15,c=document.createElement("canvas");c.width=c.height=t;const h=c.getContext("2d"),u=h.createImageData(t,t),d=new xe(s),f=new xe(e);for(let g=0;g<t;g++)for(let m=0;m<t;m++){const p=m/t*r,v=g/t*r,_=l(p,v),M=Math.abs(Math.sin((p*.9+v*.45+_*4.2)*1.7)),w=Math.pow(1-Math.min(1,M*6),2)*.7+Math.pow(1-Math.min(1,Math.abs(Math.sin((p*.3-v*1.1+_*3)*2.3))*14),2)*.35,E=(_-.5)*.08,A=Math.min(1,w),P=(g*t+m)*4;u.data[P]=255*Math.min(1,d.r+E+(f.r-d.r)*A),u.data[P+1]=255*Math.min(1,d.g+E+(f.g-d.g)*A),u.data[P+2]=255*Math.min(1,d.b+E+(f.b-d.b)*A),u.data[P+3]=255}h.putImageData(u,0,0);const x=new zr(c);return x.colorSpace=pt,x.wrapS=x.wrapT=Jn,x.anisotropy=4,x}const Eh=(s,e)=>({x:s.x-e.x,z:s.z-e.z}),Th=s=>{const e=Math.hypot(s.x,s.z)||1;return{x:s.x/e,z:s.z/e}};function ps(s,e,t){const n=Math.max(0,Math.abs(s.x-e.x)-t),i=Math.max(0,Math.abs(s.z-e.z)-t);return Math.hypot(n,i)}function Qy(s,e,t,n){const i=Math.max(2,Math.ceil(Math.hypot(e.x-s.x,e.z-s.z)/5e-4));let r=1/0;for(let a=0;a<=i;a++)r=Math.min(r,ps({x:s.x+(e.x-s.x)*a/i,z:s.z+(e.z-s.z)*a/i},t,n));return r}function eM(s,e,t){const n=Us(s),i=n.route,r=n.centre.x,[a,o,l]=t<0?[i[1],i[2],i[3]]:[i[7],i[6],i[5]],c=a.z,h=Th(Eh(o,a));let u={x:-h.z,z:h.x};u.x*(r-a.x)<0&&(u={x:-u.x,z:-u.z});const d=u.x-t,f=u.z,x=-(u.x*a.x+u.z*a.z)+t*r,g=E=>-(f*E+x)/d,m=E=>o.z+(E-o.x)/(l.x-o.x)*(l.z-o.z),p=E=>{let A=Math.min(o.z,l.z),P=Math.max(o.z,l.z);for(let b=0;b<80;b++){const S=(A+P)/2;S-m(E(S))<0?A=S:P=S}return(A+P)/2};let v=g;if(e==="vertical"){const E=(c+p(g))/2,P=(a.x+(E-a.z)/(o.z-a.z)*(o.x-a.x)+r)/2;v=()=>P}const _=p(v),M={x:v(c),z:c},w={x:v(_),z:_};return{side:t,from:M,to:w,dir:Th(Eh(w,M))}}function wh(s,e,t,n){const i={path:1/0,ticks:1/0,labels:1/0,gather12:1/0,throne:1/0},r=s.pip.diameter/2;for(const a of e.strokes)for(let o=1;o<a.length;o++)i.path=Math.min(i.path,Qy(a[o-1],a[o],t,n));e.ticks.forEach((a,o)=>{if(Number.isNaN(a.x))return;const l=o===0?s.tick.majorRadius*1.6:s.tick.majorRadius;i.ticks=Math.min(i.ticks,ps(a,t,n)-l);for(const c of Ru(12,s,Cu(o,s)))i.gather12=Math.min(i.gather12,ps({x:a.x+c.x,z:a.z+c.z},t,n)-r)});for(const a of cc(s,e))i.labels=Math.min(i.labels,ps(a.at,t,n)-oc/2*Math.SQRT2);return e.throne&&(i.throne=Math.min(i.throne,ps(e.throne,t,n)-s.finish.radius*1.2)),i}const tM=s=>Math.min(s.path,s.ticks,s.labels,s.gather12,s.throne);function nM(s,e,t=Du(s)){if(s.path.shape!=="crown")throw new Error("plinths stand in the symmetric crown's columns (path.shape crown)");const n=Math.max(e.base.width,e.cap.width,e.shaft.width)/2,i=u=>{const d=[-1,1].map(E=>eM(s,u,E)),f=[],x=(E,A)=>({x:E.from.x+(E.to.x-E.from.x)*A,z:E.from.z+(E.to.z-E.from.z)*A}),g=Math.hypot(d[0].to.x-d[0].from.x,d[0].to.z-d[0].from.z),m=5e-4/g,p=E=>d.every(A=>tM(wh(s,t,x(A,E),n))>=e.minClearance);let v=0,_=1;for(;v<.5&&!p(v);)v+=m;for(;_>.5&&!p(_);)_-=m;const w=((_-v)*g-2*n*(e.perSide-1))/(e.perSide+1);return d.forEach((E,A)=>{for(let P=0;P<e.perSide;P++){const b=v*g+(P+1)*w+2*n*P,S=A*e.perSide+P;f.push({slot:S,side:E.side,index:P,faction:e.order[Gy(e,E.side,P)%e.order.length],at:x(E,b/g)})}E.usable=[x(E,v),x(E,_)]}),{rows:d,spots:f}},r=i(e.row),a=i(e.row==="bisector"?"vertical":"bisector"),l=(e.row==="bisector"?r:a).rows[0].dir,c=r.spots.map(u=>wh(s,t,u.at,n)),h={path:1/0,ticks:1/0,labels:1/0,gather12:1/0,throne:1/0};for(const u of c)for(const d of Object.keys(h))h[d]=Math.min(h[d],u[d]);return{rows:r.rows,plinths:r.spots,tiltDeg:Math.atan2(Math.abs(l.x),Math.abs(l.z))*180/Math.PI,alternative:{row:e.row==="bisector"?"vertical":"bisector",plinths:a.spots.map(u=>u.at),maxOffset:Math.max(...r.spots.map((u,d)=>Math.hypot(u.at.x-a.spots[d].at.x,u.at.z-a.spots[d].at.z)))},clearance:h}}async function OM(s,e,t,n,i,r={}){const a=new Pt;a.name="km-plinths",s.add(a);const o=nM(t,i,n),l=Wy(i),c=[];for(const A of o.plinths){let P=e;for(const b of[i.base,i.shaft,i.cap]){const S=new Qn(b.width,b.height,b.width);S.translate(A.at.x,P+b.height/2,A.at.z),c.push(S),P+=b.height}}const h=new vt({map:Jy(i.marble.color,i.marble.vein),roughness:i.marble.roughness,metalness:0}),u=new Ze(zl(c),h);u.name="plinths",u.castShadow=u.receiveShadow=!0,a.add(u);const d=new ic,f=i.gonfalon.scale,x=i.gonfalon,g=e+l,m=async A=>{if(x.source.dir!==null){const P=new URL(x.source.files[A],new URL(x.source.dir.endsWith("/")?x.source.dir:`${x.source.dir}/`,document.baseURI)).href;try{return{gltf:await d.loadAsync(P),source:"dir",url:P}}catch(b){return console.warn(`gonfalon ${A}: ${P} did not load (${b.message??b}); using the bundled copy`),{gltf:await d.loadAsync(_r[A].url),source:"fallback",url:_r[A].url}}}return{gltf:await d.loadAsync(_r[A].url),source:"bundled",url:_r[A].url}},p=await Promise.all(o.plinths.map(async A=>{const{gltf:P,source:b,url:S}=await m(A.faction),C=P.scene;C.scale.setScalar(f),C.updateMatrixWorld(!0);const U={feet:[],poles:0,knobs:0};C.traverse(W=>{/_stand_foot$/.test(W.name)?U.feet.push(W):/_stand_pole$/.test(W.name)?U.poles++:/_stand_knob$/.test(W.name)&&U.knobs++});const k=U.feet.length?U.feet.reduce((W,Q)=>W.union(new Rt().setFromObject(Q)),new Rt):new Rt().setFromObject(C),V=k.getCenter(new I);C.position.set(A.at.x-V.x,g-k.min.y,A.at.z-V.z),C.updateMatrixWorld(!0);const X=U.feet.length?U.feet.reduce((W,Q)=>W.union(new Rt().setFromObject(Q)),new Rt):new Rt().setFromObject(C);return{p:A,root:C,source:b,url:S,parts:U,foot:X,box:new Rt().setFromObject(C)}})),v=new Map,_=(A,P)=>{const b=v.get(A.name)??{mat:A,geos:[]};b.geos.push(P),v.set(A.name,b)},M=[],w=new Map;for(const{p:A,root:P,box:b,source:S,url:C,parts:U,foot:k}of p){let V=0;P.traverse(W=>{const Q=W;if(!Q.isMesh)return;const G=Q.geometry.clone().applyMatrix4(Q.matrixWorld);for(const ee of Object.keys(G.attributes))["position","normal"].includes(ee)||G.deleteAttribute(ee);V+=(G.index?G.index.count:G.attributes.position.count)/3,r.movable?Q.castShadow=!0:_(Q.material,G)}),r.movable&&(P.name=`gonfalon-${A.faction}`,a.add(P),w.set(A.faction,{root:P,home:P.position.clone()}));const X=P.position.y;M.push({faction:A.faction,slot:A.slot,loaded:!0,source:S,url:C,plinthTop:g,bottom:b.min.y,ring:X,centre:{x:(b.min.x+b.max.x)/2,z:(b.min.z+b.max.z)/2},plinth:A.at,height:b.max.y-b.min.y,triangles:V,stand:{feet:U.feet.length,poles:U.poles,knobs:U.knobs,footBottom:k.min.y,footCentre:{x:(k.min.x+k.max.x)/2,z:(k.min.z+k.max.z)/2},footRadius:Math.max(k.max.x-k.min.x,k.max.z-k.min.z)/2}})}for(const[A,P]of v){const b=P.geos.map(C=>C.index?C.toNonIndexed():C);for(const C of b)for(const U of Object.keys(C.attributes))["position","normal"].includes(U)||C.deleteAttribute(U);const S=new Ze(zl(b),P.mat);S.name=`gonfalons-${A}`,S.castShadow=!0,S.receiveShadow=!0,a.add(S)}let E=0;return a.traverse(A=>{const P=A;P.isMesh&&(E+=(P.geometry.index?P.geometry.index.count:P.geometry.attributes.position.count)/3)}),{group:a,layout:o,gonfalons:w,state:()=>({row:i.row,tiltDeg:+o.tiltDeg.toFixed(3),plinths:o.plinths.map(A=>({slot:A.slot,faction:A.faction,x:+A.at.x.toFixed(4),z:+A.at.z.toFixed(4)})),plinthHeight:l,gonfalons:M,extraMeshes:a.children.filter(A=>A.name!=="plinths"&&!A.name.startsWith("gonfalons-")&&!A.name.startsWith("gonfalon-")).map(A=>A.name),capHalf:i.cap.width/2,meshes:a.children.length,triangles:E})}}const iM=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2;class sM{constructor(e=1){this.speed=e}speed;steps=[];run(e,t){return new Promise(n=>{const i=Math.max(0,e/this.speed);if(i===0){t(1),n();return}this.steps.push({dur:i,t:0,tick:r=>t(iM(r)),done:n})})}beat(e){return this.run(e,()=>{})}update(e){const t=this.steps;this.steps=[];for(const n of t){n.t+=e;const i=Math.min(1,n.t/n.dur);n.tick(i),i>=1?n.done():this.steps.push(n)}}get busy(){return this.steps.length}}const at={ring:.548,matW:.127*.5,matD:.0889*.5,pileScale:.42,slotScale:.3,slots:6,slotInset:.05,slotPitch:.0205,deckScale:.6,corner:.53};function rM(s,e){const t=-2*Math.PI*s/e,n=Math.sin(t),i=Math.cos(t),r=at.ring/Math.max(Math.abs(n),Math.abs(i)),a=Math.abs(n)>Math.abs(i)?n>0?Math.PI/2:-Math.PI/2:i>0?0:Math.PI,o=-Math.sin(a),l=-Math.cos(a);return{seat:s,x:n*r,z:i*r,yaw:a,inX:o,inZ:l}}function Fs(s,e,t){const n=Math.cos(s.yaw),i=-Math.sin(s.yaw);return{x:s.x+n*e+s.inX*t,z:s.z+i*e+s.inZ*t}}function Ah(s,e){return Fs(s,(e-(at.slots-1)/2)*at.slotPitch,at.slotInset)}function aM(s){return Fs(s,-.05375,0)}function oM(s){return Fs(s,at.matW/2+.022,0)}function cM(s,e){return Fs(s,(e%3-1)*.018,e<3?.006:-.01)}function lM(s){return Fs(s,0,-.04445/2-.004)}const Un={major:{x:-.53,z:-.53},minor:{x:at.corner,z:-.53},health:{x:-.53,z:at.corner},healthTrack:{x:at.corner-.03,z:at.corner}},hM=6e-4,Rh=1e5,Ch=2e5,uM=.008;class kM{constructor(e){this.o=e,this.anim=new sM(e.speed),this.group.name="km-game",e.scene.add(this.group);const t=(e.rules??ry).discardTopFaceUp?"front":"back";this.addPile("major",{id:"major",role:"draw"},Un.major,at.deckScale,0),this.addPile("majorDiscard",{id:"majorDiscard",role:"discard",topFace:t},{x:Un.major.x+.045,z:Un.major.z},at.deckScale,0),this.addPile("minor",{id:"minor",role:"draw"},Un.minor,at.deckScale,0),this.addPile("minorDiscard",{id:"minorDiscard",role:"discard",topFace:t},{x:Un.minor.x-.045,z:Un.minor.z},at.deckScale,0),this.addPile("health",{id:"health",role:"draw"},Un.health,at.deckScale,0);for(let r=0;r<10;r++)this.addPile(`healthTrack${r}`,{id:`healthTrack${r}`,role:"output",topFace:"front"},{x:Un.healthTrack.x-r%5*.022,z:Un.healthTrack.z-(r<5?0:.03)},.36,0);this.ear=new Pt,this.ear.name="kings-ear";const n=new Ze(new Br(.009,.009,.003,24),new vt({color:13938487,metalness:.85,roughness:.3}));n.position.y=.0015;const i=new Ze(new Yo(.0045,.0012,8,16,Math.PI*1.4),new vt({color:10165276,roughness:.5}));i.rotation.x=-Math.PI/2,i.position.y=.0032,this.ear.add(n,i),this.ear.visible=!1,this.ear.position.y=e.topY,this.group.add(this.ear)}o;group=new Pt;anim;who(e){const t=this.game.seats[e]?.character;return t?Su(t):`seat ${e}`}game;seats=[];views=[];piles=new Map;ear;earAt={x:0,z:0};healthNth={1:0,2:0,3:0};healthArtOf=new Map;gonfalonAt=new Map;queuedBots=[];stats={commands:0,byKind:{},flights:0,errors:[],faceLoads:0,faceBlocked:0};shown=new Map;current=null;gateCtx=null;faceLog=[];blank=null;addPile(e,t,n,i,r){const a=new nc(t),o=new r_(a,{front:l=>this.faceFor(l),back:yh()});return o.group.position.set(n.x,this.o.topY+hM,n.z),o.group.scale.setScalar(i),o.group.rotation.y=r,this.group.add(o.group),this.views.push(o),this.piles.set(e,a),a}attach(e){this.game=e,ly(t=>{if(!/^(cards|kings_health)\//.test(t))return;const n=this.gateCtx;this.stats.faceLoads++,this.faceLog.push({path:t,uid:n?.uid??null,cmd:n?.cmd.id??null,kind:n?.cmd.kind??null,state:n?.cmd.state??null,pending:!!n&&this.game.pendingCommands().some(i=>i.id===n.cmd.id)})})}facePath(e){if(e>=Ch)return this.healthArtOf.get(e)??null;if(e>=Rh)return null;const t=this.game.cards[e]?.def;return t==null?null:hy(Ls[t].name)}faceFor(e){const t=this.shown.get(e),n=this.facePath(e);if(!t||!n)return this.stats.faceBlocked++,this.blank??=Object.assign(new Ki(new Uint8Array([40,40,40,255]),1,1),{needsUpdate:!0});this.gateCtx={uid:e,cmd:t};try{return vh(n)}finally{this.gateCtx=null}}setSpeed(e){this.anim.speed=e}update(e){this.anim.update(e);const t=this.queuedBots;this.queuedBots=[];for(const n of t)n()}dispatch=e=>{this.stats.commands++,this.stats.byKind[e.kind]=(this.stats.byKind[e.kind]??0)+1,this.o.log?.(`cmd #${e.id} ${e.state} ${e.kind}${e.seat!==null?` seat ${e.seat}`:""}`);const t=i=>{if(this.game.state!==e.state)throw new Error(`view completed ${e.kind} #${e.id} outside ${e.state}`);this.game.complete(e.id,i)};this.current=e;let n;try{n=this.run(e,t)}finally{this.current=null}n&&n.then(()=>t()).catch(i=>{const r=i instanceof Error?i.message:i?.type??String(i);this.stats.errors.push(`#${e.id} ${e.kind}: ${r}`),console.error(`[km] command #${e.id} ${e.kind} failed: ${r}`)})};run(e,t){const n=this.game,i=e.seat;switch(e.kind){case"announce":return this.o.banner(sy(e.data.text)),Promise.resolve();case"seats.setup":return this.setupSeats(e.data);case"decide.character":case"decide.split":case"decide.play":case"decide.pick":case"decide.super":return n.seats[i].kind==="bot"?this.queuedBots.push(()=>t(this.o.bot(e))):this.o.human(e,r=>t(r)),null;case"mat.assign":return this.assignMat(i,e.data.character);case"dice.roll":return this.dice(e.data);case"ear.move":return this.moveEar(e.data.to);case"cards.draw":{const r=e.data;return this.reshuffle(r.reshuffled),this.flyMany([...r.majors.map(a=>({uid:a,from:this.deckPile(a),to:this.seats[i].hand})),...r.minors.map(a=>({uid:a,from:this.deckPile(a),to:this.seats[i].hand}))],!1,.35,.05)}case"cards.place":{const r=e.data,a=this.seats[i];a.slotOf.clear();const o=r.mat.map((l,c)=>(a.slotOf.set(l,c),{uid:l,from:a.hand,to:a.slotsDown[c]}));for(const l of r.leftovers)o.push({uid:l,from:a.hand,to:a.leftovers});return this.flyMany(o,!1,.3,.04)}case"cards.flip":{const r=e.data,a=[];for(const o of r.mats){const l=this.seats[o.seat];for(const c of o.uids){const h=l.slotOf.get(c);a.push({uid:c,from:l.slotsDown[h],to:l.slotsUp[h],flip:!0})}}return this.flyMany(a,!0,.35,.01)}case"super.play":{const r=e.data;return this.o.banner(`${this.who(i)}: Super Deed ${r.name}`),Promise.resolve()}case"cards.resolve":{const r=e.data;return this.o.banner(`${this.who(i)}: ${r.name}${r.fizzle?` (fizzles: ${r.fizzle})`:""}`),this.lift(i,r.uid)}case"cards.reveal":{const r=e.data;return this.reshuffle(r.reshuffled),this.flyMany([{uid:r.uid,from:this.piles.get("minor"),to:this.seats[i].reveal,flip:!0}],!0,.35,0)}case"cards.discard":{const r=e.data,a=this.seats[i],o=r.uids.map(l=>({uid:l,from:r.from==="reveal"?a.reveal:this.slotPileOf(a,l),to:this.discardPile(l)}));return this.flyMany(o,!1,.3,.03)}case"stats.set":return this.drawLabel(i),Promise.resolve();case"pip.goTo":{const r=e.data,a=n.seats[i].character,o=this.o.track.get(a);return this.drawLabel(i),o.goTo(r.step).then(()=>{})}case"gonfalon.move":return this.moveGonfalon(e.data);case"health.flip":{const r=e.data,a=Ch+r.card;this.healthArtOf.set(a,r.cardNo?dy(r.cardNo):fy(r.skulls,this.healthNth[r.skulls]++));const o=this.piles.get("health"),l=o.top;return l!==null&&o.removeCard(l),o.addCard(a),this.flyMany([{uid:a,from:o,to:this.piles.get(`healthTrack${r.card}`),flip:!0}],!0,.45,0).then(()=>this.o.banner(`The King's Health declines: ${r.total} skulls`))}case"cards.pass":{const r=e.data,a=[];for(const o of r.moves){const l=this.seats[o.from].leftovers;for(const c of o.uids)a.push({uid:c,from:l,to:o.to===null?this.discardPile(c):this.seats[o.to].hand})}return this.flyMany(a,!1,.4,.015)}case"game.over":{const r=e.data;return this.o.banner(`${this.who(r.winner)} is crowned (${r.reason==="throne"?"reached the throne":"the King died: leader"})`),this.anim.beat(1.5)}}return Promise.resolve()}deckPile(e){return this.piles.get(this.game.cards[e].deck)}discardPile(e){return this.piles.get(`${this.game.cards[e].deck}Discard`)}slotPileOf(e,t){for(const n of[...e.slotsUp,...e.slotsDown,e.hand,e.leftovers,e.reveal])if(n.has(t))return n;throw new Error(`card ${t} is on no pile of seat ${e.frame.seat}`)}pileView(e){return this.views.find(t=>t.pile===e)}async setupSeats(e){const t=e.seats.length,n=this.piles.get("major"),i=this.piles.get("minor");n.addCards([...this.game.decks.major.draw]),i.addCards([...this.game.decks.minor.draw]);for(let r=0;r<this.game.kingsHealth.stack.length;r++)this.piles.get("health").addCard(Rh+r);for(const r of this.o.track.markers)this.o.track.retire(r.id);for(const r of e.seats){const a={...rM((r.seat-(this.o.viewSeat??0)+t)%t,t),seat:r.seat},o=new Ze(new en(at.matW,at.matD).rotateX(-Math.PI/2),new vt({color:3878694,roughness:.8}));o.name=`mat-${r.seat}`,o.position.set(a.x,this.o.topY+4e-4,a.z),o.rotation.y=a.yaw,o.receiveShadow=!0,this.group.add(o);const l=document.createElement("canvas");l.width=512,l.height=96;const c=l.getContext("2d"),h=new zr(l);h.colorSpace=pt;const u=new Ze(new en(at.matW*1.6,at.matW*.3).rotateX(-Math.PI/2),new un({map:h,transparent:!0})),d={x:a.x-a.inX*(at.matD/2+.012),z:a.z-a.inZ*(at.matD/2+.012)};u.position.set(d.x,this.o.topY+6e-4,d.z),u.rotation.y=a.yaw,this.group.add(u);const f=(g,m,p,v)=>this.addPile(`${g}`,{id:g,role:v==="back"?"draw":"output",topFace:v},m,p,a.yaw),x={frame:a,mat:o,label:u,labelCtx:c,labelTex:h,hand:f(`hand${r.seat}`,aM(a),at.pileScale,"back"),leftovers:f(`left${r.seat}`,oM(a),at.pileScale,"back"),slotsDown:Array.from({length:at.slots},(g,m)=>f(`down${r.seat}.${m}`,Ah(a,m),at.slotScale,"back")),slotsUp:Array.from({length:at.slots},(g,m)=>f(`up${r.seat}.${m}`,Ah(a,m),at.slotScale,"front")),reveal:f(`reveal${r.seat}`,{x:a.x+a.inX*.085,z:a.z+a.inZ*.085},at.slotScale,"front"),slotOf:new Map,dice:""};this.seats.push(x),this.drawLabel(r.seat)}for(const r of _n)this.gonfalonAt.set(r,null);await Promise.all(this.views.map(r=>r.settled())),await this.anim.beat(.3)}async assignMat(e,t){const n=this.seats[e],i=await vh(uy(t)),r=n.mat.material;r.map=i,r.color.set(16777215),r.needsUpdate=!0,n.character=t,this.o.track.enlist(t,0),this.drawLabel(e),await this.anim.beat(.15)}drawLabel(e){const t=this.seats[e];if(!t)return;const n=this.game.seats[e],i=t.labelCtx;i.clearRect(0,0,512,96),i.fillStyle=n.ill?"rgba(120,20,20,0.85)":"rgba(20,16,12,0.78)",i.fillRect(0,0,512,96),i.fillStyle="#f4ead2",i.font="bold 30px sans-serif";const r=this.who(e);i.fillText(`${e}: ${r}${n.kind==="human"?" (you)":""}  step ${n.step}${n.ill?"  ILL":n.illNext?"  ill next":""}`,12,38),i.font="26px sans-serif";const a=(o,l,c)=>o>0?`${l}${o}`:`${c}${-o}`;i.fillText(`H${n.health} W${n.wealth}  ${a(n.morality,"Pie","Cor")} ${a(n.temper,"Vio","Cha")}  ${t.dice}`,12,80),t.labelTex.needsUpdate=!0}async dice(e){for(const i of e.rolls){const r=this.seats[i.seat];r.dice=`rolls ${i.die}${i.bonus?`+${i.bonus}=${i.total}`:""}`,this.drawLabel(i.seat)}const t=e.virtue,n=e.purpose==="ear"?"Ear roll":e.purpose==="claim"?"Claim roll":t==="violence"?"Violence Contest":t==="charisma"?"Charisma Contest":"Contest";this.o.banner(`${n}: ${e.rolls.map(i=>`${this.who(i.seat)} ${i.total}`).join(", ")}`),await this.anim.beat(.6);for(const i of e.rolls)this.seats[i.seat].dice="",this.drawLabel(i.seat)}async moveEar(e){const t=lM(this.seats[e].frame);this.ear.visible||(this.ear.visible=!0,this.earAt={x:0,z:0});const n={...this.earAt};this.earAt=t,await this.anim.run(.5,i=>{this.ear.position.set(n.x+(t.x-n.x)*i,this.o.topY+Math.sin(Math.PI*i)*.04,n.z+(t.z-n.z)*i)})}async moveGonfalon(e){const t=this.o.gonfalons?.get(e.faction);if(this.gonfalonAt.set(e.faction,e.to),!t)return;const n=t.root,i=n.position.clone();let r;if(e.to===null)r=t.home.clone();else{const a=_n.filter(l=>this.gonfalonAt.get(l)===e.to),o=cM(this.seats[e.to].frame,Math.max(0,a.indexOf(e.faction)));r=new I(o.x,t.home.y-uM,o.z)}await this.anim.run(.55,a=>{n.position.set(i.x+(r.x-i.x)*a,i.y+(r.y-i.y)*a+Math.sin(Math.PI*a)*.05,i.z+(r.z-i.z)*a)})}async lift(e,t){const n=this.seats[e],i=[...n.slotsUp,...n.slotsDown].find(l=>l.has(t));if(!i)return this.anim.beat(.3);const r=this.pileView(i),a=r.group.position.y,o=r.group.scale.x;await this.anim.run(.55,l=>{const c=Math.sin(Math.PI*l);r.group.position.y=a+c*.02,r.group.scale.setScalar(o*(1+c*.6))}),r.group.position.y=a,r.group.scale.setScalar(o)}reshuffle(e){for(const{deck:t,uids:n}of e??[]){const i=this.piles.get(`${t}Discard`),r=this.piles.get(t);for(const a of n){if(!i.removeCard(a))throw new Error(`reshuffle: card ${a} is not on ${i.id}`);r.addCard(a)}this.o.log?.(`view: ${t} discard shuffled back (${n.length})`)}}flyMany(e,t,n,i){if(!e.length)return this.anim.beat(.05);for(const r of e)if(r.showsFace=t||!!r.flip||r.from.topFace==="front"||r.to.topFace==="front",r.showsFace){if(!this.current)throw new Error(`card ${r.uid} shown outside a command`);this.shown.set(r.uid,this.current)}return Promise.all(e.map((r,a)=>this.fly(r,t||!!r.flip,n,a*i))).then(()=>{})}async fly(e,t,n,i){this.stats.flights++,i>0&&await this.anim.beat(i);const r=this.pileView(e.from),a=this.pileView(e.to);if(!e.from.removeCard(e.uid))throw new Error(`card ${e.uid} is not on ${e.from.id}`);const o=await yh().full,l=e.showsFace?await this.faceFor(e.uid):o,c=new en(bn.width,bn.height).rotateX(-Math.PI/2),h=new Ze(c,new vt({map:l,side:fn})),u=new Ze(c.clone().rotateZ(Math.PI),new vt({map:o,side:fn})),d=new Pt;d.add(h,u),this.group.add(d);const f=e.from.topFace==="front",x=e.to.topFace==="front",g=r.group.position.clone();g.y+=e.from.height+5e-4;const m=a.group.position.clone();m.y+=e.to.height+5e-4;const p=r.group.scale.x,v=a.group.scale.x,_=r.group.rotation.y,M=a.group.rotation.y+(Math.abs(a.group.rotation.y-_)>Math.PI?2*Math.PI*Math.sign(_-a.group.rotation.y):0);await a.expect(e.uid),await this.anim.run(n,w=>{d.position.lerpVectors(g,m,w),d.position.y+=Math.sin(Math.PI*w)*.05,d.scale.setScalar(p+(v-p)*w),d.rotation.set(0,0,0),d.rotation.y=_+(M-_)*w;const E=f?0:Math.PI,A=x?0:Math.PI;d.rotateZ(t||E!==A?E+(A-E)*w:E)}),this.group.remove(d),h.material.dispose(),u.material.dispose(),c.dispose(),e.to.addCard(e.uid)}inspectables(){return this.seats.flatMap((e,t)=>e.character?[{object:e.mat,seat:t,character:e.character}]:[])}state(){return{seats:this.seats.length,piles:Object.fromEntries([...this.piles].filter(([,e])=>e.count>0).map(([e,t])=>[e,t.count])),discardTops:Object.fromEntries(["majorDiscard","minorDiscard"].flatMap(e=>{const t=this.piles.get(e);return t.count>0&&t.top!==null?[[e,{count:t.count,faceUp:t.topFace==="front",known:this.game.cards[t.top]?.def!=null}]]:[]})),ear:this.ear.visible?{...this.earAt}:null,gonfalons:Object.fromEntries(this.gonfalonAt),busy:this.anim.busy,...this.stats}}}const dM=`
#km-inspect{position:fixed;inset:0;z-index:1000;background:rgba(8,7,6,.94);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:max(8px,env(safe-area-inset-top)) max(8px,env(safe-area-inset-right)) max(8px,env(safe-area-inset-bottom)) max(8px,env(safe-area-inset-left));box-sizing:border-box;touch-action:pinch-zoom;font:14px/1.3 system-ui,sans-serif;color:#f4ead2}
#km-inspect img{display:block;width:100%;height:calc(100vh - 64px);height:calc(100dvh - 64px);object-fit:contain;min-height:0}
#km-inspect .cap{display:flex;gap:12px;align-items:center}
#km-inspect button{background:#4a3a24;color:#f4ead2;border:1px solid #b08d4a;border-radius:6px;padding:8px 16px;font:inherit;cursor:pointer}
`;let Ph=!1,Ms=null;function zM(){return!!document.getElementById("km-inspect")}function Oa(){document.getElementById("km-inspect")?.remove(),Ms&&removeEventListener("keydown",Ms,!0),Ms=null}function fM(s){if(Oa(),!Ph){const a=document.createElement("style");a.textContent=dM,document.head.appendChild(a),Ph=!0}const e=document.createElement("div");e.id="km-inspect",e.setAttribute("role","dialog"),e.setAttribute("aria-label",s.title);const t=document.createElement("img");t.src=s.src,t.alt=s.title;const n=document.createElement("div");n.className="cap";const i=document.createElement("span");i.textContent=s.title;const r=document.createElement("button");return r.type="button",r.textContent="Close",n.append(i,r),e.append(t,n),e.onclick=a=>{a.stopPropagation(),Oa()},Ms=a=>{a.key==="Escape"&&(a.stopPropagation(),Oa())},addEventListener("keydown",Ms,!0),document.body.appendChild(e),e}function BM(s,e,t){return`<button type="button" class="zoom" ${s}="${e}" aria-label="Read ${t.replace(/"/g,"&quot;")}" title="Read this card">&#x2922;</button>`}function VM(s,e,t){s.querySelectorAll(`[${e}]`).forEach(n=>{n.onclick=i=>{i.stopPropagation();const r=t(n.getAttribute(e));r&&fM(r)}})}function HM(s,e=40,t=92,n=4){if(!s)return;const i=s.children.length;if(!i)return;const r=s.clientWidth;if(r<=0)return;const a=Math.max(e,Math.min(t,Math.floor((r-n*(i-1))/i)));s.style.setProperty("--km-cw",`${a}px`),s.classList.toggle("scrolls",s.scrollWidth>s.clientWidth+1)}function GM(s){return{src:`/kingmaker/km-art/characters_hd/${s}.jpg`,title:`${Su(s)}: character mat`}}export{GM as $,xM as A,Lt as B,SM as C,on as D,tn as E,fn as F,Pt as G,vM as H,Ps as I,xv as J,yh as K,On as L,vt as M,Ui as N,vh as O,bM as P,mt as Q,hy as R,pt as S,Zo as T,TM as U,I as V,HM as W,Su as X,uy as Y,fs as Z,VM as _,bn as a,qv as a0,Ls as a1,BM as a2,_n as a3,wr as a4,Au as a5,rc as a6,kM as a7,NM as a8,_M as a9,Gu as aa,pM as ab,mM as ac,iu as ad,RM as ae,DM as af,PM as ag,Qo as ah,zt as ai,sc as aj,CM as ak,Mv as al,UM as am,FM as an,OM as ao,gM as ap,zM as aq,Ve as ar,fM as as,hi as at,sy as au,IM as av,ry as aw,xy as ax,yM as b,MM as c,Na as d,xe as e,Fe as f,Tn as g,jd as h,Sf as i,zr as j,Bt as k,Ut as l,Le as m,wo as n,Tf as o,LM as p,Ze as q,en as r,EM as s,Qn as t,Jf as u,wM as v,av as w,AM as x,nv as y,mv as z};
