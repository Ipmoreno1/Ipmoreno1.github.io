var Dd=0,Ph=1,Nd=2;var Xs=1,Ud=2,Hr=3,ms=0,vn=1,rn=2,qi=0,gs=1,yn=2,Lh=3,Dh=4,Fd=5;var qs=100,kd=101,Od=102,Bd=103,zd=104,Hd=200,Gd=201,Vd=202,Wd=203,Nh=204,Uh=205,Xd=206,qd=207,$d=208,Yd=209,Jd=210,Zd=211,Kd=212,Qd=213,jd=214,$o=0,Yo=1,Jo=2,Pr=3,Zo=4,Ko=5,Qo=6,jo=7,Sl=0,tf=1,ef=2,yi=0,Oa=1,Ba=2,za=3,$s=4,Ha=5,Ga=6,Va=7;var Fh=300,Ys=301,Gr=302,wl=303,El=304,tl=1e3,mi=1001,el=1002,fe=1003,nf=1004;var Js=1005;var xn=1006,Tl=1007;var $i=1008;var wn=1009,kh=1010,Oh=1011,Vr=1012,Al=1013,ai=1014,Zn=1015,an=1016,Rl=1017,Cl=1018,Zs=1020,Bh=35902,zh=35899,Hh=1021,Gh=1022,oi=1023,Hi=1026,Yi=1027,Il=1028,Pl=1029,xs=1030,Ll=1031;var Dl=1033,Wa=33776,Xa=33777,qa=33778,$a=33779,Nl=35840,Ul=35841,Fl=35842,kl=35843,Ol=36196,Bl=37492,zl=37496,Hl=37488,Gl=37489,Ya=37490,Vl=37491,Wl=37808,Xl=37809,ql=37810,$l=37811,Yl=37812,Jl=37813,Zl=37814,Kl=37815,Ql=37816,jl=37817,tc=37818,ec=37819,nc=37820,ic=37821,sc=36492,rc=36494,ac=36495,oc=36283,lc=36284,Ja=36285,cc=36286;var ya=2300,nl=2301,Xo=2302,Mh=2303,bh=2400,Sh=2401,wh=2402;var sf=3200;var hc=0,rf=1,Ji="",be="srgb",Ma="srgb-linear",ba="linear",ue="srgb";var qo=7680;var af=519,of=512,lf=513,cf=514,Vh=515,hf=516,uf=517,Wh=518,Xh=519,qh=35044,Wr=35048;var $h="300 es",Yn=2e3,Lr=2001;function Sm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function wm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function df(){let n=Sa("canvas");return n.style.display="block",n}var ed={},Dr=null;function wa(...n){let t="THREE."+n.shift();Dr?Dr("log",t,...n):console.log(t,...n)}function ff(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=ff(n);let t="THREE."+n.shift();if(Dr)Dr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Bt(...n){n=ff(n);let t="THREE."+n.shift();if(Dr)Dr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function va(...n){let t=n.join(" ");t in ed||(ed[t]=!0,zt(...n))}function pf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var mf={[$o]:$o,[Jo]:Qo,[Zo]:Zo,[Pr]:Ko,[Yo]:Yo,[Qo]:Jo,[jo]:jo,[Ko]:Pr},gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qc=Math.PI/180,il=180/Math.PI;function Ks(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function Em(n,t){return(n%t+t)%t}function jc(n,t,e){return(1-e)*n+e*t}function gf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function uc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xf(n,t){if(t.constructor===Float32Array)return n;let e=uc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function _f(n,t){if(t.constructor===Float32Array)return n;let e=uc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var St=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(h!==_||l!==d||c!==f||u!==m){let g=l*d+c*f+u*m+h*_;g<0&&(d=-d,f=-f,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),T=Math.sin(v);p=Math.sin(p*v)/T,o=Math.sin(o*v)/T,l=l*p+d*o,c=c*p+f*o,u=u*p+m*o,h=h*p+_*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+m*o,h=h*p+_*o;let v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-o*f,t[e+2]=c*m+u*f+o*d-l*h,t[e+3]=u*m-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return th.copy(this).projectOnVector(t),this.sub(th)}reflect(t){return this.sub(th.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},th=new B,nd=new Jn,Gt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],_=s[0],g=s[3],p=s[6],v=s[1],T=s[4],y=s[7],S=s[2],w=s[5],x=s[8];return r[0]=a*_+o*v+l*S,r[3]=a*g+o*T+l*w,r[6]=a*p+o*y+l*x,r[1]=c*_+u*v+h*S,r[4]=c*g+u*T+h*w,r[7]=c*p+u*y+h*x,r[2]=d*_+f*v+m*S,r[5]=d*g+f*T+m*w,r[8]=d*p+f*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,m=e*h+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(o*i-s*a)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return va("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eh.makeScale(t,e)),this}rotate(t){return va("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eh.makeRotation(-t)),this}translate(t,e){return va("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},eh=new Gt,id=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tm(){let n={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ma]:{primaries:t,whitePoint:i,transfer:ba,toXYZ:id,fromXYZ:sd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:id,fromXYZ:sd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),n}var te=Tm();function zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var dr,sl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{dr===void 0&&(dr=Sa("canvas")),dr.width=t.width,dr.height=t.height;let s=dr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=dr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(zi(e[i]/255)*255):e[i]=zi(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Am=0,Nr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Ks(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nh(s[a].image)):r.push(nh(s[a]))}else r=nh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function nh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Rm=0,ih=new B,_n=class n extends gi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=mi,s=mi,r=xn,a=$i,o=oi,l=wn,c=n.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Ks(),this.name="",this.source=new Nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ih).x}get height(){return this.source.getSize(ih).y}get depth(){return this.source.getSize(ih).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tl:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case el:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tl:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case el:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Fh;_n.DEFAULT_ANISOTROPY=1;var Re=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(f+1)/2,S=(p+1)/2,w=(u+d)/4,x=(h+_)/4,M=(m+g)/4;return T>y&&T>S?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=w/i,r=x/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=M/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=x/r,s=M/r),this.set(i,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rl=class extends gi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new _n({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Nr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ue=class extends rl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ea=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fe,this.minFilter=fe,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var al=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fe,this.minFilter=fe,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ae=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,c,u,h,d,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,d,f,m,_,g)}set(t,e,i,s,r,a,o,l,c,u,h,d,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/fr.setFromMatrixColumn(t,0).length(),r=1/fr.setFromMatrixColumn(t,1).length(),a=1/fr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*h,m=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d+_*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-m,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*h,m=o*u,_=o*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=m*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-_*h}else if(t.order==="XZY"){let d=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cm,t,Im)}lookAt(t,e,i){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ss.crossVectors(i,Un),ss.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ss.crossVectors(i,Un)),ss.normalize(),vo.crossVectors(Un,ss),s[0]=ss.x,s[4]=vo.x,s[8]=Un.x,s[1]=ss.y,s[5]=vo.y,s[9]=Un.y,s[2]=ss.z,s[6]=vo.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],v=i[3],T=i[7],y=i[11],S=i[15],w=s[0],x=s[4],M=s[8],I=s[12],L=s[1],P=s[5],U=s[9],k=s[13],C=s[2],z=s[6],X=s[10],V=s[14],nt=s[3],q=s[7],K=s[11],it=s[15];return r[0]=a*w+o*L+l*C+c*nt,r[4]=a*x+o*P+l*z+c*q,r[8]=a*M+o*U+l*X+c*K,r[12]=a*I+o*k+l*V+c*it,r[1]=u*w+h*L+d*C+f*nt,r[5]=u*x+h*P+d*z+f*q,r[9]=u*M+h*U+d*X+f*K,r[13]=u*I+h*k+d*V+f*it,r[2]=m*w+_*L+g*C+p*nt,r[6]=m*x+_*P+g*z+p*q,r[10]=m*M+_*U+g*X+p*K,r[14]=m*I+_*k+g*V+p*it,r[3]=v*w+T*L+y*C+S*nt,r[7]=v*x+T*P+y*z+S*q,r[11]=v*M+T*U+y*X+S*K,r[15]=v*I+T*k+y*V+S*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15],v=l*f-c*d,T=o*f-c*h,y=o*d-l*h,S=a*f-c*u,w=a*d-l*u,x=a*h-o*u;return e*(_*v-g*T+p*y)-i*(m*v-g*S+p*w)+s*(m*T-_*S+p*x)-r*(m*y-_*w+g*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=e*o-i*a,T=e*l-s*a,y=e*c-r*a,S=i*l-s*o,w=i*c-r*o,x=s*c-r*l,M=u*_-h*m,I=u*g-d*m,L=u*p-f*m,P=h*g-d*_,U=h*p-f*_,k=d*p-f*g,C=v*k-T*U+y*P+S*L-w*I+x*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/C;return t[0]=(o*k-l*U+c*P)*z,t[1]=(s*U-i*k-r*P)*z,t[2]=(_*x-g*w+p*S)*z,t[3]=(d*w-h*x-f*S)*z,t[4]=(l*L-a*k-c*I)*z,t[5]=(e*k-s*L+r*I)*z,t[6]=(g*y-m*x-p*T)*z,t[7]=(u*x-d*y+f*T)*z,t[8]=(a*U-o*L+c*M)*z,t[9]=(i*L-e*U-r*M)*z,t[10]=(m*w-_*y+p*v)*z,t[11]=(h*y-u*w-f*v)*z,t[12]=(o*I-a*P-l*M)*z,t[13]=(e*P-i*I+s*M)*z,t[14]=(_*T-m*S-g*v)*z,t[15]=(u*S-h*T+d*v)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,m=r*h,_=a*u,g=a*h,p=o*h,v=l*c,T=l*u,y=l*h,S=i.x,w=i.y,x=i.z;return s[0]=(1-(_+p))*S,s[1]=(f+y)*S,s[2]=(m-T)*S,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(d+p))*w,s[6]=(g+v)*w,s[7]=0,s[8]=(m+T)*x,s[9]=(g-v)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=fr.set(s[0],s[1],s[2]).length(),o=fr.set(s[4],s[5],s[6]).length(),l=fr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ni.copy(this);let c=1/a,u=1/o,h=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,e.setFromRotationMatrix(ni),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Yn,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===Yn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Lr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Yn,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===Yn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===Lr)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},fr=new B,ni=new ae,Cm=new B(0,0,0),Im=new B(1,1,1),ss=new B,vo=new B,Un=new B,rd=new ae,ad=new Jn,Gi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ad.setFromEuler(this),this.setFromQuaternion(ad,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gi.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pm=0,od=new B,pr=new Jn,Ni=new ae,yo=new B,ha=new B,Lm=new B,Dm=new Jn,ld=new B(1,0,0),cd=new B(0,1,0),hd=new B(0,0,1),ud={type:"added"},Nm={type:"removed"},mr={type:"childadded",child:null},sh={type:"childremoved",child:null},Qe=class n extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new B,e=new Gi,i=new Jn,s=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Gt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(ld,t)}rotateY(t){return this.rotateOnAxis(cd,t)}rotateZ(t){return this.rotateOnAxis(hd,t)}translateOnAxis(t,e){return od.copy(t).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ld,t)}translateY(t){return this.translateOnAxis(cd,t)}translateZ(t){return this.translateOnAxis(hd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yo.copy(t):yo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(ha,yo,this.up):Ni.lookAt(yo,ha,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Ni),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ud),mr.child=t,this.dispatchEvent(mr),mr.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nm),sh.child=t,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ud),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,t,Lm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,Dm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qe.DEFAULT_UP=new B(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qt=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Um={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Um)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new qt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function rh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var bt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Em(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=rh(a,r,t+1/3),this.g=rh(a,r,t),this.b=rh(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=be){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let i=vf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return te.workingToColorSpace(un.copy(this),t),Math.round(re(un.r*255,0,255))*65536+Math.round(re(un.g*255,0,255))*256+Math.round(re(un.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(un.copy(this),e);let i=un.r,s=un.g,r=un.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=be){te.workingToColorSpace(un.copy(this),t);let e=un.r,i=un.g,s=un.b;return t!==be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(rs),this.setHSL(rs.h+t,rs.s+e,rs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(rs),t.getHSL(Mo);let i=jc(rs.h,Mo.h,e),s=jc(rs.s,Mo.s,e),r=jc(rs.l,Mo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new bt;bt.NAMES=vf;var Us=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xi=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ii=new B,Ui=new B,ah=new B,Fi=new B,gr=new B,xr=new B,dd=new B,oh=new B,lh=new B,ch=new B,hh=new Re,uh=new Re,dh=new Re,Bi=class n{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ii.subVectors(t,e),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ii.subVectors(s,e),Ui.subVectors(i,e),ah.subVectors(t,e);let a=ii.dot(ii),o=ii.dot(Ui),l=ii.dot(ah),c=Ui.dot(Ui),u=Ui.dot(ah),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return hh.setScalar(0),uh.setScalar(0),dh.setScalar(0),hh.fromBufferAttribute(t,e),uh.fromBufferAttribute(t,i),dh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(hh,r.x),a.addScaledVector(uh,r.y),a.addScaledVector(dh,r.z),a}static isFrontFacing(t,e,i,s){return ii.subVectors(i,e),Ui.subVectors(t,e),ii.cross(Ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ii.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,i),xr.subVectors(r,i),oh.subVectors(t,i);let l=gr.dot(oh),c=xr.dot(oh);if(l<=0&&c<=0)return e.copy(i);lh.subVectors(t,s);let u=gr.dot(lh),h=xr.dot(lh);if(u>=0&&h<=u)return e.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(i).addScaledVector(gr,a);ch.subVectors(t,r);let f=gr.dot(ch),m=xr.dot(ch);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(xr,o);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return dd.subVectors(r,s),o=(h-u)/(h-u+(f-m)),e.copy(s).addScaledVector(dd,o);let p=1/(g+_+d);return a=_*p,o=d*p,e.copy(i).addScaledVector(gr,a).addScaledVector(xr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_i=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,si):si.fromBufferAttribute(r,a),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(t.matrixWorld),this.union(bo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ua),So.subVectors(this.max,ua),_r.subVectors(t.a,ua),vr.subVectors(t.b,ua),yr.subVectors(t.c,ua),as.subVectors(vr,_r),os.subVectors(yr,vr),Ps.subVectors(_r,yr);let e=[0,-as.z,as.y,0,-os.z,os.y,0,-Ps.z,Ps.y,as.z,0,-as.x,os.z,0,-os.x,Ps.z,0,-Ps.x,-as.y,as.x,0,-os.y,os.x,0,-Ps.y,Ps.x,0];return!fh(e,_r,vr,yr,So)||(e=[1,0,0,0,1,0,0,0,1],!fh(e,_r,vr,yr,So))?!1:(wo.crossVectors(as,os),e=[wo.x,wo.y,wo.z],fh(e,_r,vr,yr,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ki=[new B,new B,new B,new B,new B,new B,new B,new B],si=new B,bo=new _i,_r=new B,vr=new B,yr=new B,as=new B,os=new B,Ps=new B,ua=new B,So=new B,wo=new B,Ls=new B;function fh(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ls.fromArray(n,r);let o=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),l=t.dot(Ls),c=e.dot(Ls),u=i.dot(Ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Be=new B,Eo=new St,Fm=0,sn=class extends gi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qh,this.updateRanges=[],this.gpuType=Zn,this.version=0,this._normalizationScale=t!==void 0?uc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):xf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):_f(t,this.array)}};var Fs=class extends sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ks=class extends sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var he=class extends sn{constructor(t,e,i){super(new Float32Array(t),e,i)}},km=new _i,da=new B,ph=new B,Vi=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):km.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;da.subVectors(t,this.center);let e=da.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(da,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(da.copy(t.center).add(ph)),this.expandByPoint(da.copy(t.center).sub(ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Om=0,$n=new ae,mh=new Qe,Mr=new B,Fn=new _i,fa=new _i,Ke=new B,Ve=class n extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sm(t)?ks:Fs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,i){return $n.makeTranslation(t,e,i),this.applyMatrix4($n),this}scale(t,e,i){return $n.makeScale(t,e,i),this.applyMatrix4($n),this}lookAt(t){return mh.lookAt(t),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Fn.min,fa.min),Fn.expandByPoint(Ke),Ke.addVectors(Fn.max,fa.max),Fn.expandByPoint(Ke)):(Fn.expandByPoint(fa.min),Fn.expandByPoint(fa.max))}Fn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ke.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(t,c),Ke.add(Mr)),s=Math.max(s,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new sn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)o[I]=new B,l[I]=new B;let u=new B,h=new B,d=new B,f=new St,m=new St,_=new St,g=new B,p=new B;function v(I,L,P){c[I]=c[L]=c[P]=1,u.fromBufferAttribute(i,I),h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,P),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,L),_.fromBufferAttribute(r,P),h.sub(u),d.sub(u),m.sub(f),_.sub(f);let U=1/(m.x*_.y-_.x*m.y);isFinite(U)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(U),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(U),o[I].add(g),o[L].add(g),o[P].add(g),l[I].add(p),l[L].add(p),l[P].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let I=0,L=T.length;I<L;++I){let P=T[I],U=P.start,k=P.count;for(let C=U,z=U+k;C<z;C+=3)v(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let y=new B,S=new B,w=new B,x=new B;function M(I){w.fromBufferAttribute(s,I),x.copy(w);let L=o[I];y.copy(L),y.sub(w.multiplyScalar(w.dot(L))).normalize(),S.crossVectors(x,L);let U=S.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,U)}for(let I=0,L=i.count;I<L;++I)c[I]&&M(I);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new sn(d,u,h)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ol=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qh,this.updateRanges=[],this.version=0,this.uuid=Ks()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function fd(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Ks()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var gn=new B,Ta=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?uc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){wa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){wa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):xf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):_f(t,this.data.array)}},gh=new B,Bm=new B,zm=new Gt,kn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=gh.subVectors(i,e).cross(Bm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(gh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||zm.getNormalMatrix(t),s=this.coplanarPoint(gh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Hm=0,vi=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=gs,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Uh,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new kn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new St().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},kr=class extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},br,pa=new B,Sr=new B,wr=new B,Er=new St,ma=new St,yf=new ae,To=new B,ga=new B,Ao=new B,pd=new St,xh=new St,md=new St,Aa=class extends Qe{constructor(t=new kr){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new Ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ol(e,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Ta(i,3,0,!1)),br.setAttribute("uv",new Ta(i,2,3,!1))}this.geometry=br,this.material=t,this.center=new St(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),yf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-wr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ro(To.set(-.5,-.5,0),wr,a,Sr,s,r),Ro(ga.set(.5,-.5,0),wr,a,Sr,s,r),Ro(Ao.set(.5,.5,0),wr,a,Sr,s,r),pd.set(0,0),xh.set(1,0),md.set(1,1);let o=t.ray.intersectTriangle(To,ga,Ao,!1,pa);if(o===null&&(Ro(ga.set(-.5,.5,0),wr,a,Sr,s,r),xh.set(0,1),o=t.ray.intersectTriangle(To,Ao,ga,!1,pa),o===null))return;let l=t.ray.origin.distanceTo(pa);l<t.near||l>t.far||e.push({distance:l,point:pa.clone(),uv:Bi.getInterpolation(pa,To,ga,Ao,pd,xh,md,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Ro(n,t,e,i,s,r){Er.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ma.x=r*Er.x-s*Er.y,ma.y=s*Er.x+r*Er.y):ma.copy(Er),n.copy(t),n.x+=ma.x,n.y+=ma.y,n.applyMatrix4(yf)}var Oi=new B,_h=new B,Co=new B,Io=new B,Or=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_h.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),Io.copy(this.origin).sub(_h);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Co),o=Io.dot(this.direction),l=-Io.dot(Co),c=Io.lengthSq(),u=Math.abs(1-a*a),h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(_h).addScaledVector(Co,d),f}intersectSphere(t,e){if(t.radius<0)return null;Oi.subVectors(t.center,this.origin);let i=Oi.dot(this.direction),s=Oi.dot(Oi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=t.x-a.x,d=t.y-a.y,f=t.z-a.z,m=e.x-a.x,_=e.y-a.y,g=e.z-a.z,p=i.x-a.x,v=i.y-a.y,T=i.z-a.z,y=Math.abs(l),S=Math.abs(c),w=Math.abs(u),x,M,I,L,P,U,k,C,z,X,V,nt;if(y>=S&&y>=w?(I=l,U=h,z=m,nt=p,l>=0?(x=c,M=u,L=d,P=f,k=_,C=g,X=v,V=T):(x=u,M=c,L=f,P=d,k=g,C=_,X=T,V=v)):S>=w?(I=c,U=d,z=_,nt=v,c>=0?(x=u,M=l,L=f,P=h,k=g,C=m,X=T,V=p):(x=l,M=u,L=h,P=f,k=m,C=g,X=p,V=T)):(I=u,U=f,z=g,nt=T,u>=0?(x=l,M=c,L=h,P=d,k=m,C=_,X=p,V=v):(x=c,M=l,L=d,P=h,k=_,C=m,X=v,V=p)),I===0)return null;let q=x/I,K=M/I,it=1/I,wt=L-q*U,Wt=P-K*U,Q=k-q*z,vt=C-K*z,Tt=X-q*nt,Ut=V-K*nt,yt=Tt*vt-Ut*Q,$t=wt*Ut-Wt*Tt,ke=Q*Wt-vt*wt;if(s){if(yt<0||$t<0||ke<0)return null}else if((yt<0||$t<0||ke<0)&&(yt>0||$t>0||ke>0))return null;let Ot=yt+$t+ke;if(Ot===0)return null;let pe=it*(yt*U+$t*z+ke*nt);return(Ot>0?pe<0:pe>0)?null:this.at(pe/Ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gd=new ae,Ds=new Or,Po=new Vi,xd=new B,Lo=new B,Do=new B,No=new B,vh=new B,Uo=new B,_d=new B,Fo=new B,kt=class extends Qe{constructor(t=new Ve,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(vh.fromBufferAttribute(h,t),a?Uo.addScaledVector(vh,u):Uo.addScaledVector(vh.sub(e),u))}e.add(Uo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Ds.copy(t.ray).recast(t.near),!(Po.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Po,xd)===null||Ds.origin.distanceToSquared(xd)>(t.far-t.near)**2))&&(gd.copy(r).invert(),Ds.copy(t.ray).applyMatrix4(gd),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ds)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,S=T;y<S;y+=3){let w=o.getX(y),x=o.getX(y+1),M=o.getX(y+2);s=ko(this,p,t,i,c,u,h,w,x,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=o.getX(g),T=o.getX(g+1),y=o.getX(g+2);s=ko(this,a,t,i,c,u,h,v,T,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,S=T;y<S;y+=3){let w=y,x=y+1,M=y+2;s=ko(this,p,t,i,c,u,h,w,x,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=g,T=g+1,y=g+2;s=ko(this,a,t,i,c,u,h,v,T,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Gm(n,t,e,i,s,r,a,o){let l;if(t.side===vn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ms,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Fo);return c<e.near||c>e.far?null:{distance:c,point:Fo.clone(),object:n}}function ko(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Lo),n.getVertexPosition(l,Do),n.getVertexPosition(c,No);let u=Gm(n,t,e,i,Lo,Do,No,_d);if(u){let h=new B;Bi.getBarycoord(_d,Lo,Do,No,h),s&&(u.uv=Bi.getInterpolatedAttribute(s,o,l,c,h,new St)),r&&(u.uv1=Bi.getInterpolatedAttribute(r,o,l,c,h,new St)),a&&(u.normal=Bi.getInterpolatedAttribute(a,o,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new B,materialIndex:0};Bi.getNormal(Lo,Do,No,d.normal),u.face=d,u.barycoord=h}return u}var Ra=class extends _n{constructor(t=null,e=1,i=1,s,r,a,o,l,c=fe,u=fe,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=class extends sn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Tr=new ae,vd=new ae,Oo=[],yd=new _i,Vm=new ae,xa=new kt,_a=new Vi,Bs=class extends kt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Vm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Tr),yd.copy(t.boundingBox).applyMatrix4(Tr),this.boundingBox.union(yd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Tr),_a.copy(t.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(_a)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(i),t.ray.intersectsSphere(_a)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Tr),vd.multiplyMatrices(i,Tr),xa.matrixWorld=vd,xa.raycast(t,Oo);for(let a=0,o=Oo.length;a<o;a++){let l=Oo[a];l.instanceId=r,l.object=this,e.push(l)}Oo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ra(new Float32Array(s*this.count),s,this.count,Il,Zn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ns=new Vi,Wm=new St(.5,.5),Bo=new B,cs=class{constructor(t=new kn,e=new kn,i=new kn,s=new kn,r=new kn,a=new kn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],v=r[12],T=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-a,f-u,p-m,S-v).normalize(),s[1].setComponents(c+a,f+u,p+m,S+v).normalize(),s[2].setComponents(c+o,f+h,p+_,S+T).normalize(),s[3].setComponents(c-o,f-h,p-_,S-T).normalize(),i)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,p-g,S-y).normalize();else if(s[4].setComponents(c-l,f-d,p-g,S-y).normalize(),e===Yn)s[5].setComponents(c+l,f+d,p+g,S+y).normalize();else if(e===Lr)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(t){Ns.center.set(0,0,0);let e=Wm.distanceTo(t.center);return Ns.radius=.7071067811865476+e,Ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Bo.x=s.normal.x>0?t.max.x:t.min.x,Bo.y=s.normal.y>0?t.max.y:t.min.y,Bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Md=new ae,ll=class n{constructor(){this.coordinateSystem=Yn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Md.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new cs),i[s].setFromProjectionMatrix(Md,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new cs),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var cl=class extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bd=new ae,Eh=new Or,zo=new Vi,Ho=new B,Ca=class extends Qe{constructor(t=new Ve,e=new cl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,t.ray.intersectsSphere(zo)===!1)return;bd.copy(s).invert(),Eh.copy(t.ray).applyMatrix4(bd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,_=f;m<_;m++){let g=c.getX(m);Ho.fromBufferAttribute(h,g),Sd(Ho,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,_=f;m<_;m++)Ho.fromBufferAttribute(h,m),Sd(Ho,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sd(n,t,e,i,s,r,a){let o=Eh.distanceSqToPoint(n);if(o<e){let l=new B;Eh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ia=class extends _n{constructor(t=[],e=Ys,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dn=class extends _n{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wi=class extends _n{constructor(t,e,i=ai,s,r,a,o=fe,l=fe,c,u=Hi,h=1){if(u!==Hi&&u!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Pa=class extends Wi{constructor(t,e=ai,i=Ys,s,r,a=fe,o=fe,l,c=Hi){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},La=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Se=class n extends Ve{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(h,2));function m(_,g,p,v,T,y,S,w,x,M,I){let L=y/x,P=S/M,U=y/2,k=S/2,C=w/2,z=x+1,X=M+1,V=0,nt=0,q=new B;for(let K=0;K<X;K++){let it=K*P-k;for(let wt=0;wt<z;wt++){let Wt=wt*L-U;q[_]=Wt*v,q[g]=it*T,q[p]=C,c.push(q.x,q.y,q.z),q[_]=0,q[g]=0,q[p]=w>0?1:-1,u.push(q.x,q.y,q.z),h.push(wt/x),h.push(1-K/M),V+=1}}for(let K=0;K<M;K++)for(let it=0;it<x;it++){let wt=d+it+z*K,Wt=d+it+z*(K+1),Q=d+(it+1)+z*(K+1),vt=d+(it+1)+z*K;l.push(wt,Wt,vt),l.push(Wt,Q,vt),nt+=6}o.addGroup(f,nt,I),f+=nt,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hs=class n extends Ve{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,_=[],g=i/2,p=0;v(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(f,2));function v(){let y=new B,S=new B,w=0,x=(e-t)/i;for(let M=0;M<=r;M++){let I=[],L=M/r,P=L*(e-t)+t;for(let U=0;U<=s;U++){let k=U/s,C=k*l+o,z=Math.sin(C),X=Math.cos(C);S.x=P*z,S.y=-L*i+g,S.z=P*X,h.push(S.x,S.y,S.z),y.set(z,x,X).normalize(),d.push(y.x,y.y,y.z),f.push(k,1-L),I.push(m++)}_.push(I)}for(let M=0;M<s;M++)for(let I=0;I<r;I++){let L=_[I][M],P=_[I+1][M],U=_[I+1][M+1],k=_[I][M+1];(t>0||I!==0)&&(u.push(L,P,k),w+=3),(e>0||I!==r-1)&&(u.push(P,U,k),w+=3)}c.addGroup(p,w,0),p+=w}function T(y){let S=m,w=new St,x=new B,M=0,I=y===!0?t:e,L=y===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,g*L,0),d.push(0,L,0),f.push(.5,.5),m++;let P=m;for(let U=0;U<=s;U++){let C=U/s*l+o,z=Math.cos(C),X=Math.sin(C);x.x=I*X,x.y=g*L,x.z=I*z,h.push(x.x,x.y,x.z),d.push(0,L,0),w.x=z*.5+.5,w.y=X*.5*L+.5,f.push(w.x,w.y),m++}for(let U=0;U<s;U++){let k=S+U,C=P+U;y===!0?u.push(C,C+1,k):u.push(C+1,C,k),M+=3}c.addGroup(p,M,y===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ri=class n extends Ve{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){let v=p*d-a;for(let T=0;T<c;T++){let y=T*h-r;m.push(y,-v,0),_.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let T=v+c*p,y=v+c*(p+1),S=v+1+c*(p+1),w=v+1+c*p;f.push(T,y,w),f.push(y,S,w)}this.setIndex(f),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},us=class n extends Ve{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=t,d=(e-t)/s,f=new B,m=new St;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){let p=r+g/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<s;_++){let g=_*(i+1);for(let p=0;p<i;p++){let v=p+g,T=v,y=v+i+1,S=v+i+2,w=v+1;o.push(T,y,w),o.push(y,S,w)}}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Qs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(wd(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(wd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function fn(n){let t={};for(let e=0;e<n.length;e++){let i=Qs(n[e]);for(let s in i)t[s]=i[s]}return t}function wd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Xm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Yh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Zi={clone:Qs,merge:fn},qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fe=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=$m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=Xm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new bt().setHex(s.value);break;case"v2":this.uniforms[i].value=new St().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ae().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Br=class extends Fe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var We=class extends vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Sl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},hl=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ul=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ar(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Go(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ds=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends ds{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sh:r=t,o=2*e-i;break;case wh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sh:a=t,l=2*i-e;break;case wh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,T=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let S=0;S!==o;++S)r[S]=p*a[u+S]+v*a[c+S]+T*a[l+S]+y*a[h+S];return r}},fl=class extends ds{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},pl=class extends ds{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ml=class extends ds{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(i-e)/(s-e),_=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*m;return r}let d=o*2,f=t-1;for(let m=0;m!==o;++m){let _=a[c+m],g=a[l+m],p=f*d+m*2,v=h[p],T=h[p+1],y=t*d+m*2,S=u[y],w=u[y+1],x=Jm(i,e,v,S,s);r[m]=Mf(x,_,T,w,g)}return r}};function Mf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Ym(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Jm(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Mf(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Ym(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var On=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ar(e,this.TimeBufferType),this.values=Ar(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ar(t.times,Array),values:Ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Go(t.settings)&&(i.settings={inTangents:Ar(t.settings.inTangents,Array),outTangents:Ar(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ml(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ya:e=this.InterpolantFactoryMethodDiscrete;break;case nl:e=this.InterpolantFactoryMethodLinear;break;case Xo:e=this.InterpolantFactoryMethodSmooth;break;case Mh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return nl;case this.InterpolantFactoryMethodSmooth:return Xo;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Go(this.settings)&&(Ed(this.settings.inTangents,t),Ed(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Go(this.settings)&&(Td(this.settings.inTangents,t),Td(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Bt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Bt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&wm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let h=o*i,d=h-i,f=h+i;for(let m=0;m!==i;++m){let _=e[h+m];if(_!==e[d+m]||_!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[h+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Go(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ed(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Td(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=nl;var fs=class extends On{constructor(t,e,i){super(t,e,i)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=ya;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends On{constructor(t,e,i,s){super(t,e,i,s)}};gl.prototype.ValueTypeName="color";var xl=class extends On{constructor(t,e,i,s){super(t,e,i,s)}};xl.prototype.ValueTypeName="number";var _l=class extends ds{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Jn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Da=class extends On{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}};Da.prototype.ValueTypeName="quaternion";Da.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends On{constructor(t,e,i){super(t,e,i)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=ya;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends On{constructor(t,e,i,s){super(t,e,i,s)}};vl.prototype.ValueTypeName="vector";var yl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bf=new yl,Ml=class{constructor(t){this.manager=t!==void 0?t:bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends Qe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Hs=class extends zs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},yh=new ae,Ad=new B,Rd=new B,Na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ad.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ad),Rd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(yh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Lr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vo=new B,Wo=new Jn,pi=new B,Ua=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vo,Wo,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Vo,Wo,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ls=new B,Cd=new St,Id=new St,Ne=class extends Ua{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=il*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return il*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,e){return this.getViewBounds(t,Cd,Id),e.subVectors(Id,Cd)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Th=class extends Na{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0}},Gs=class extends zs{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Th}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Vs=class extends Ua{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ah=class extends Na{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Ah}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Fa=class extends zs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Rr=-90,Cr=1,zr=class extends Qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(Rr,Cr,t,e);s.layers=this.layers,this.add(s);let r=new Ne(Rr,Cr,t,e);r.layers=this.layers,this.add(r);let a=new Ne(Rr,Cr,t,e);a.layers=this.layers,this.add(a);let o=new Ne(Rr,Cr,t,e);o.layers=this.layers,this.add(o);let l=new Ne(Rr,Cr,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Rr,Cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},bl=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},ka=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Zm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Zm(){this._document.hidden===!1&&this.reset()}var Jh="\\[\\]\\.:\\/",Km=new RegExp("["+Jh+"]","g"),Zh="[^"+Jh+"]",Qm="[^"+Jh.replace("\\.","")+"]",jm=/((?:WC+[\/:])*)/.source.replace("WC",Zh),t0=/(WCOD+)?/.source.replace("WCOD",Qm),e0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zh),n0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zh),i0=new RegExp("^"+jm+t0+e0+n0+"$"),s0=["material","materials","bones","map"],Rh=class{constructor(t,e,i){let s=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Km,"")}static parseTrackName(t){let e=i0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);s0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Rh;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t1=new Float32Array(1);var Pd=new ae,Xi=class{constructor(t,e,i=0,s=1/0){this.ray=new Or(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Bt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pd),this}intersectObject(t,e=!0,i=[]){return Ch(t,this,i,e),i.sort(Ld),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ch(t[s],this,i,e);return i.sort(Ld),i}};function Ld(n,t){return n.distance-t.distance}function Ch(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Ch(r[a],t,e,!0)}}var Ih=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function Kh(n,t,e,i){let s=r0(i);switch(e){case Hh:return n*t;case Il:return n*t/s.components*s.byteLength;case Pl:return n*t/s.components*s.byteLength;case xs:return n*t*2/s.components*s.byteLength;case Ll:return n*t*2/s.components*s.byteLength;case Gh:return n*t*3/s.components*s.byteLength;case oi:return n*t*4/s.components*s.byteLength;case Dl:return n*t*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qa:case $a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:case kl:return Math.max(n,16)*Math.max(t,8)/4;case Nl:case Fl:return Math.max(n,8)*Math.max(t,8)/2;case Ol:case Bl:case Hl:case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zl:case Ya:case Vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sc:case rc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case oc:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ja:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function r0(n){switch(n){case wn:case kh:return{byteLength:1,components:1};case Vr:case Oh:case an:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case ai:case Al:case Zn:return{byteLength:4,components:1};case Bh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Wf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function o0(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let _=h[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var l0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
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
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M0=`#ifdef USE_IRIDESCENCE
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
#endif`,b0=`#ifdef USE_BUMPMAP
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,P0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
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
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,j0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,rg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ag=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,og=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
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
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,Sx=`#define LAMBERT
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
}`,wx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Ex=`#define MATCAP
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
}`,Tx=`#define MATCAP
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
}`,Ax=`#define NORMAL
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
}`,Rx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cx=`#define PHONG
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
}`,Ix=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Px=`#define STANDARD
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
}`,Lx=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Dx=`#define TOON
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
}`,Nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Ux=`uniform float size;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,Ox=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Bx=`uniform float rotation;
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
}`,zx=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:l0,alphahash_pars_fragment:c0,alphamap_fragment:h0,alphamap_pars_fragment:u0,alphatest_fragment:d0,alphatest_pars_fragment:f0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:x0,begin_vertex:_0,beginnormal_vertex:v0,bsdfs:y0,iridescence_fragment:M0,bumpmap_pars_fragment:b0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:E0,clipping_planes_vertex:T0,color_fragment:A0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:I0,common:P0,defaultnormal_vertex:L0,displacementmap_pars_vertex:D0,displacementmap_vertex:N0,emissivemap_fragment:U0,emissivemap_pars_fragment:F0,colorspace_fragment:k0,colorspace_pars_fragment:O0,envmap_fragment:B0,envmap_common_pars_fragment:z0,envmap_pars_fragment:H0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:j0,envmap_vertex:V0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:q0,fog_pars_fragment:$0,gradientmap_pars_fragment:Y0,lightmap_pars_fragment:J0,lights_lambert_fragment:Z0,lights_lambert_pars_fragment:K0,lights_pars_begin:Q0,lights_toon_fragment:tg,lights_toon_pars_fragment:eg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:sg,lights_physical_pars_fragment:rg,lights_fragment_begin:ag,lights_fragment_maps:og,lights_fragment_end:lg,lightprobes_pars_fragment:cg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:fg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:xg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:vg,morphinstance_vertex:yg,morphcolor_vertex:Mg,morphnormal_vertex:bg,morphtarget_pars_vertex:Sg,morphtarget_vertex:wg,normal_fragment_begin:Eg,normal_fragment_maps:Tg,normal_pars_fragment:Ag,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Ng,opaque_fragment:Ug,packing:Fg,premultiplied_alpha_fragment:kg,project_vertex:Og,dithering_fragment:Bg,dithering_pars_fragment:zg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Vg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:$g,skinning_pars_vertex:Yg,skinning_vertex:Jg,skinnormal_vertex:Zg,specularmap_fragment:Kg,specularmap_pars_fragment:Qg,tonemapping_fragment:jg,tonemapping_pars_fragment:tx,transmission_fragment:ex,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ax,background_vert:ox,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:hx,cube_vert:ux,cube_frag:dx,depth_vert:fx,depth_frag:px,distance_vert:mx,distance_frag:gx,equirect_vert:xx,equirect_frag:_x,linedashed_vert:vx,linedashed_frag:yx,meshbasic_vert:Mx,meshbasic_frag:bx,meshlambert_vert:Sx,meshlambert_frag:wx,meshmatcap_vert:Ex,meshmatcap_frag:Tx,meshnormal_vert:Ax,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Ix,meshphysical_vert:Px,meshphysical_frag:Lx,meshtoon_vert:Dx,meshtoon_frag:Nx,points_vert:Ux,points_frag:Fx,shadow_vert:kx,shadow_frag:Ox,sprite_vert:Bx,sprite_frag:zx},_t={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},bi={basic:{uniforms:fn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:fn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:fn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:fn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:fn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new bt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:fn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:fn([_t.points,_t.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:fn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:fn([_t.common,_t.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:fn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:fn([_t.sprite,_t.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:fn([_t.common,_t.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:fn([_t.lights,_t.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};bi.physical={uniforms:fn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var dc={r:0,b:0,g:0},Hx=new ae,Xf=new Gt;Xf.set(-1,0,0,0,1,0,0,0,1);function Gx(n,t,e,i,s,r){let a=new bt(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=t.get(T,y)}return T}function m(v){let T=!1,y=f(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),T=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,T){let y=f(T);y&&y.isCubeTexture?(c===void 0&&(c=new kt(new Se(1,1,1),new Fe({name:"BackgroundCubeMaterial",uniforms:Qs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xf),c.material.toneMapped=te.getTransfer(y.colorSpace)!==ue,(u!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new kt(new ri(2,2),new Fe({name:"BackgroundMaterial",uniforms:Qs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=te.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,T){v.getRGB(dc,Yh(n)),e.buffers.color.setClear(dc.r,dc.g,dc.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:_,dispose:p}}function Vx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(P,U,k,C,z){let X=!1,V=h(P,C,k,U);r!==V&&(r=V,c(r.object)),X=f(P,C,k,z),X&&m(P,C,k,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(P,U,k,C),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function h(P,U,k,C){let z=C.wireframe===!0,X=i[U.id];X===void 0&&(X={},i[U.id]=X);let V=P.isInstancedMesh===!0?P.id:0,nt=X[V];nt===void 0&&(nt={},X[V]=nt);let q=nt[k.id];q===void 0&&(q={},nt[k.id]=q);let K=q[z];return K===void 0&&(K=d(l()),q[z]=K),K}function d(P){let U=[],k=[],C=[];for(let z=0;z<e;z++)U[z]=0,k[z]=0,C[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:C,object:P,attributes:{},index:null}}function f(P,U,k,C){let z=r.attributes,X=U.attributes,V=0,nt=k.getAttributes();for(let q in nt)if(nt[q].location>=0){let it=z[q],wt=X[q];if(wt===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(wt=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(wt=P.instanceColor)),it===void 0||it.attribute!==wt||wt&&it.data!==wt.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function m(P,U,k,C){let z={},X=U.attributes,V=0,nt=k.getAttributes();for(let q in nt)if(nt[q].location>=0){let it=X[q];it===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(it=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(it=P.instanceColor));let wt={};wt.attribute=it,it&&it.data&&(wt.data=it.data),z[q]=wt,V++}r.attributes=z,r.attributesNum=V,r.index=C}function _(){let P=r.newAttributes;for(let U=0,k=P.length;U<k;U++)P[U]=0}function g(P){p(P,0)}function p(P,U){let k=r.newAttributes,C=r.enabledAttributes,z=r.attributeDivisors;k[P]=1,C[P]===0&&(n.enableVertexAttribArray(P),C[P]=1),z[P]!==U&&(n.vertexAttribDivisor(P,U),z[P]=U)}function v(){let P=r.newAttributes,U=r.enabledAttributes;for(let k=0,C=U.length;k<C;k++)U[k]!==P[k]&&(n.disableVertexAttribArray(k),U[k]=0)}function T(P,U,k,C,z,X,V){V===!0?n.vertexAttribIPointer(P,U,k,z,X):n.vertexAttribPointer(P,U,k,C,z,X)}function y(P,U,k,C){_();let z=C.attributes,X=k.getAttributes(),V=U.defaultAttributeValues;for(let nt in X){let q=X[nt];if(q.location>=0){let K=z[nt];if(K===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){let it=K.normalized,wt=K.itemSize,Wt=t.get(K);if(Wt===void 0)continue;let Q=Wt.buffer,vt=Wt.type,Tt=Wt.bytesPerElement,Ut=vt===n.INT||vt===n.UNSIGNED_INT||K.gpuType===Al;if(K.isInterleavedBufferAttribute){let yt=K.data,$t=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,ke=K.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Ot=0;Ot<q.locationSize;Ot++)p(q.location+Ot,yt.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Ot=0;Ot<q.locationSize;Ot++)g(q.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let Ot=0;Ot<q.locationSize;Ot++)T(q.location+Ot,wt/q.locationSize,vt,it,$t*Tt,(ke+wt/q.locationSize*Ot)*Tt,Ut)}else{if(K.isInstancedBufferAttribute){for(let yt=0;yt<q.locationSize;yt++)p(q.location+yt,K.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let yt=0;yt<q.locationSize;yt++)g(q.location+yt);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let yt=0;yt<q.locationSize;yt++)T(q.location+yt,wt/q.locationSize,vt,it,wt*Tt,wt/q.locationSize*yt*Tt,Ut)}}else if(V!==void 0){let it=V[nt];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(q.location,it);break;case 3:n.vertexAttrib3fv(q.location,it);break;case 4:n.vertexAttrib4fv(q.location,it);break;default:n.vertexAttrib1fv(q.location,it)}}}}v()}function S(){I();for(let P in i){let U=i[P];for(let k in U){let C=U[k];for(let z in C){let X=C[z];for(let V in X)u(X[V].object),delete X[V];delete C[z]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;let U=i[P.id];for(let k in U){let C=U[k];for(let z in C){let X=C[z];for(let V in X)u(X[V].object),delete X[V];delete C[z]}}delete i[P.id]}function x(P){for(let U in i){let k=i[U];for(let C in k){let z=k[C];if(z[P.id]===void 0)continue;let X=z[P.id];for(let V in X)u(X[V].object),delete X[V];delete z[P.id]}}}function M(P){for(let U in i){let k=i[U],C=P.isInstancedMesh===!0?P.id:0,z=k[C];if(z!==void 0){for(let X in z){let V=z[X];for(let nt in V)u(V[nt].object),delete V[nt];delete z[X]}delete k[C],Object.keys(k).length===0&&delete i[U]}}}function I(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Wx(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Xx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==oi&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==wn&&x!==Zn&&!M&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:S,samples:w}}function qx(n){let t=this,e=null,i=0,s=!1,r=!1,a=new kn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let v=r?0:i,T=v*4,y=p.clippingState||null;l.value=y,y=u(m,d,T,f);for(let S=0;S!==T;++S)y[S]=e[S];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,m){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,y=f;T!==_;++T,y+=4)a.copy(h[T]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Qa=class extends Ue{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ia(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Se(5,5,5),r=new Fe({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:qi});r.uniforms.tEquirect.value=e;let a=new kt(s,r),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=xn),new zr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Sf=256,$x=3,Yx=20,qf=256,$f=16,Jx=3,Zx=new B,Kx=new bt,pc=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zr(1,10,null),this._boxMesh=new kt(new Se(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Zx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(Kx));let g=new zr(i,s,u);return g.position.copy(o),g.update(l,t),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,t.background=_,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Sf,gf(t))}_fromTexture(t,e){t.mapping===Ys||t.mapping===Gr?this._setSize(t.image.length===0?Sf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=wf(t,!1,!1),i=Math.log2(t)-$x;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=wf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ys||t.mapping===Gr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ef()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Qx(),this._integrationMaterial=jx());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/$f);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Jx)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(qf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=t_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function wf(n,t,e){return new Qa(n,{minFilter:$i,generateMipmaps:t,type:an,colorSpace:Ma,depthBuffer:e})}function ja(n,t,e){return new Fe({name:n,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:vn,blending:qi,depthTest:!1,depthWrite:!1})}function Qx(){return ja("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function jx(){return ja("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$f}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function t_(){return ja("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Yx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ef(){return ja("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Tf(){return ja("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function e_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===wl||f===El)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let _=new Qa(m.height);return _.fromEquirectangularTexture(n,d),t.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===wl||f===El,_=f===Ys||f===Gr;if(m||_){let g=e.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new pc(n)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let v=d.image;return m&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new pc(n)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===wl?d.mapping=Ys:f===El&&(d.mapping=Gr),d}function l(d){let f=0,m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function n_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&va("WebGLRenderer: "+i+" extension not supported."),s}}}function i_(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function u(m){let _=m.attributes;for(let g in _)t.update(_[g],n.ARRAY_BUFFER)}function h(m){let _=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let v=_!==null?_.array.length:g.array.length/3-1,T=g.count>=65535?ks:Fs,y=new T(Math.ceil(v/3)*6,1),S=y.array;if(_!==null){let x=_.array;p=_.version;for(let M=0,I=0;M<v;M+=3){let L=x[M+0],P=x[M+1],U=x[M+2];S[I++]=L,S[I++]=P,S[I++]=P,S[I++]=U,S[I++]=U,S[I++]=L}}else{p=g.version;for(let x=0,M=0;x<v;x+=3){let I=x+0,L=x+1,P=x+2;S[M++]=I,S[M++]=L,S[M++]=L,S[M++]=P,S[M++]=P,S[M++]=I}}y.version=p;let w=r.get(m);w&&t.remove(w),r.set(m,y)}function d(m){let _=r.get(m);if(_){let g=m.index;g!==null&&_.version<g.version&&h(m)}else h(m);return r.get(m)}function f(){for(let m in s){let _=s[m].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function s_(n,t,e){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*a),e.update(d,i,1)}function c(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*a,f),e.update(d,i,f))}function u(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];e.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function r_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function a_(n,t,e){let i=new WeakMap,s=new Re;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let I=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let y=o.attributes.position.count*T,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*S*4*h),x=new Ea(w,y,S,h);x.type=Zn,x.needsUpdate=!0;let M=T*4;for(let L=0;L<h;L++){let P=g[L],U=p[L],k=v[L],C=y*S*4*L;for(let z=0;z<P.count;z++){let X=z*M;f===!0&&(s.fromBufferAttribute(P,z),w[C+X+0]=s.x,w[C+X+1]=s.y,w[C+X+2]=s.z,w[C+X+3]=0),m===!0&&(s.fromBufferAttribute(U,z),w[C+X+4]=s.x,w[C+X+5]=s.y,w[C+X+6]=s.z,w[C+X+7]=0),_===!0&&(s.fromBufferAttribute(k,z),w[C+X+8]=s.x,w[C+X+9]=s.y,w[C+X+10]=s.z,w[C+X+11]=k.itemSize===4?s.w:1)}}d={count:h,texture:x,size:new St(y,S)},i.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function o_(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var l_={[Oa]:"LINEAR_TONE_MAPPING",[Ba]:"REINHARD_TONE_MAPPING",[za]:"CINEON_TONE_MAPPING",[$s]:"ACES_FILMIC_TONE_MAPPING",[Ga]:"AGX_TONE_MAPPING",[Va]:"NEUTRAL_TONE_MAPPING",[Ha]:"CUSTOM_TONE_MAPPING"};function c_(n,t,e,i,s,r){let a=new Ue(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Ve;u.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new he([0,2,0,0,2,0],2));let h=new Br({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new kt(u,h),f=new Vs(-1,1,1,-1,0,1),m=null,_=null,g=!1,p,v=null,T=[],y=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),l!==null&&l.setSize(S,w);for(let x=0;x<T.length;x++){let M=T[x];M.setSize&&M.setSize(S,w)}},this.setEffects=function(S){T=S,y=T.length>0&&T[0].isRenderPass===!0;let w=a.width,x=a.height;T.length>0&&o===null&&(o=new Ue(w,x,{type:an,depthBuffer:!1,stencilBuffer:!1}),l=new Ue(w,x,{type:an,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&T.some(I=>I.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Wi(w,x),r===!0&&(c.format=Yi,c.type=Zs)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let I=0;I<T.length;I++){let L=T[I];L.setSize&&L.setSize(w,x),M&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(S,w){if(g||S.toneMapping===yi&&T.length===0)return!1;if(v=w,w!==null){let x=w.width,M=w.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return y===!1&&S.setRenderTarget(a),p=S.toneMapping,S.toneMapping=yi,!0},this.hasRenderPass=function(){return y},this.end=function(S,w){S.toneMapping=p,g=!0;let x=a,M=o;for(let I=0;I<T.length;I++){let L=T[I];L.enabled!==!1&&(L.render(S,M,x,w),L.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(m!==S.outputColorSpace||_!==S.toneMapping){m=S.outputColorSpace,_=S.toneMapping,h.defines={},te.getTransfer(m)===ue&&(h.defines.SRGB_TRANSFER="");let I=l_[_];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(v),S.render(d,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Yf=new _n,Jf=new Wi(1,1),Zf=new Pa(1),Kf=new Ea,Qf=new al,jf=new Ia,Af=[],Rf=[],Cf=new Float32Array(16),If=new Float32Array(9),Pf=new Float32Array(4);function qr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Af[s];if(r===void 0&&(r=new Float32Array(s),Af[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function gc(n,t){let e=Rf[t];e===void 0&&(e=new Int32Array(t),Rf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function h_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2fv(this.addr,t),qe(e,t)}}function d_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;n.uniform3fv(this.addr,t),qe(e,t)}}function f_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4fv(this.addr,t),qe(e,t)}}function p_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Pf.set(i),n.uniformMatrix2fv(this.addr,!1,Pf),qe(e,i)}}function m_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;If.set(i),n.uniformMatrix3fv(this.addr,!1,If),qe(e,i)}}function g_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Cf.set(i),n.uniformMatrix4fv(this.addr,!1,Cf),qe(e,i)}}function x_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function __(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2iv(this.addr,t),qe(e,t)}}function v_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3iv(this.addr,t),qe(e,t)}}function y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4iv(this.addr,t),qe(e,t)}}function M_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function b_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2uiv(this.addr,t),qe(e,t)}}function S_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3uiv(this.addr,t),qe(e,t)}}function w_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4uiv(this.addr,t),qe(e,t)}}function xc(n){return n.version===0&&(n.compareFunction=Xh,n.needsUpdate=!0),n}function E_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=xc(Jf):r=Yf,e.setTexture2D(t||r,s)}function T_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Qf,s)}function A_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=xc(Zf):r=jf,e.setTextureCube(t||r,s)}function R_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Kf,s)}function C_(n){switch(n){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return x_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return y_;case 5125:return M_;case 36294:return b_;case 36295:return S_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}function I_(n,t){n.uniform1fv(this.addr,t)}function P_(n,t){let e=qr(t,this.size,2);n.uniform2fv(this.addr,e)}function L_(n,t){let e=qr(t,this.size,3);n.uniform3fv(this.addr,e)}function D_(n,t){let e=qr(t,this.size,4);n.uniform4fv(this.addr,e)}function N_(n,t){let e=qr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function U_(n,t){let e=qr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function F_(n,t){let e=qr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function k_(n,t){n.uniform1iv(this.addr,t)}function O_(n,t){n.uniform2iv(this.addr,t)}function B_(n,t){n.uniform3iv(this.addr,t)}function z_(n,t){n.uniform4iv(this.addr,t)}function H_(n,t){n.uniform1uiv(this.addr,t)}function G_(n,t){n.uniform2uiv(this.addr,t)}function V_(n,t){n.uniform3uiv(this.addr,t)}function W_(n,t){n.uniform4uiv(this.addr,t)}function X_(n,t,e){let i=this.cache,s=t.length,r=gc(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=xc(Jf):a=Yf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function q_(n,t,e){let i=this.cache,s=t.length,r=gc(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qf,r[a])}function $_(n,t,e){let i=this.cache,s=t.length,r=gc(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=xc(Zf):a=jf;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Y_(n,t,e){let i=this.cache,s=t.length,r=gc(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kf,r[a])}function J_(n){switch(n){case 5126:return I_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return k_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return H_;case 36294:return G_;case 36295:return V_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Y_}}var tu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=C_(e.type)}},eu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J_(e.type)}},nu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Qh=/(\w+)(\])?(\[|\.)?/g;function Lf(n,t){n.seq.push(t),n.map[t.id]=t}function Z_(n,t,e){let i=n.name,s=i.length;for(Qh.lastIndex=0;;){let r=Qh.exec(i),a=Qh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lf(e,c===void 0?new tu(o,n,t):new eu(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new nu(o),Lf(e,h)),e=h}}}var Xr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Z_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Df(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var K_=37297,Q_=0;function j_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Nf=new Gt;function tv(n){te._getMatrix(Nf,te.workingColorSpace,n);let t=`mat3( ${Nf.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case ba:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Uf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+j_(n.getShaderSource(t),o)}else return r}function ev(n,t){let e=tv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var nv={[Oa]:"Linear",[Ba]:"Reinhard",[za]:"Cineon",[$s]:"ACESFilmic",[Ga]:"AgX",[Va]:"Neutral",[Ha]:"Custom"};function iv(n,t){let e=nv[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fc=new B;function sv(){te.getLuminanceCoefficients(fc);let n=fc.x.toFixed(4),t=fc.y.toFixed(4),e=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function av(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ov(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ka(n){return n!==""}function Ff(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function kf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(n){return n.replace(lv,cv)}function cv(n,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return iu(e)}var hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(n){return n.replace(hv,uv)}function uv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var dv={[Xs]:"SHADOWMAP_TYPE_PCF",[Hr]:"SHADOWMAP_TYPE_VSM"};function fv(n){return dv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pv={[Gr]:"ENVMAP_MODE_REFRACTION"};function mv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":pv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var gv={[Sl]:"ENVMAP_BLENDING_MULTIPLY",[tf]:"ENVMAP_BLENDING_MIX",[ef]:"ENVMAP_BLENDING_ADD"};function xv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":gv[n.combine]||"ENVMAP_BLENDING_NONE"}function _v(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=fv(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=mv(e),h=xv(e),d=rv(e),f=av(r),m=s.createProgram(),_,g,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ka).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ka).join(`
`),g.length>0&&(g+=`
`)):(_=[Bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),g=[Bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==yi?iv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,ev("linearToOutputTexel",e.outputColorSpace),sv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ka).join(`
`)),a=iu(a),a=Ff(a,e),a=kf(a,e),o=iu(o),o=Ff(o,e),o=kf(o,e),a=Of(a),o=Of(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",e.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=p+_+a,T=p+g+o,y=Df(s,s.VERTEX_SHADER,v),S=Df(s,s.FRAGMENT_SHADER,T);s.attachShader(m,y),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(L){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(m)||"",U=s.getShaderInfoLog(y)||"",k=s.getShaderInfoLog(S)||"",C=P.trim(),z=U.trim(),X=k.trim(),V=!0,nt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,y,S);else{let q=Uf(s,y,"vertex"),K=Uf(s,S,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+C+`
`+q+`
`+K)}else C!==""?zt("WebGLProgram: Program Info Log:",C):(z===""||X==="")&&(nt=!1);nt&&(L.diagnostics={runnable:V,programLog:C,vertexShader:{log:z,prefix:_},fragmentShader:{log:X,prefix:g}})}s.deleteShader(y),s.deleteShader(S),x=new Xr(s,m),M=ov(s,m)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,K_)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=S,this}var vv=0,su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ru(t),e.set(t,i)),i}},ru=class{constructor(t){this.id=vv++,this.code=t,this.usedTimes=0}};function yv(n){return n===xs||n===Ya||n===Ja}function Mv(n,t,e,i,s,r){let a=new Ur,o=new su,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,I,L,P,U){let k=L.fog,C=P.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=t.get(x.envMap||z,X),nt=d[x.type],q=i.precision;x.precision!==null&&(q=i.getMaxPrecision(x.precision),q!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));let K=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,it=K!==void 0?K.length:0,wt=0;C.morphAttributes.position!==void 0&&(wt=1),C.morphAttributes.normal!==void 0&&(wt=2),C.morphAttributes.color!==void 0&&(wt=3);let Wt,Q,vt,Tt;if(nt){let xt=bi[nt];Wt=xt.vertexShader,Q=xt.fragmentShader}else{Wt=x.vertexShader,Q=x.fragmentShader;let xt=o.getVertexShaderStage(x),me=o.getFragmentShaderStage(x);o.update(x,xt,me),vt=xt.id,Tt=me.id}let Ut=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),$t=P.isInstancedMesh===!0,ke=P.isBatchedMesh===!0,Ot=!!x.map,pe=!!x.matcap,xe=!!V,ee=xe&&V.isPMREMTexture===!0,en=!!x.aoMap,He=!!x.lightMap,Sn=!!x.bumpMap&&x.wireframe===!1,Ce=!!x.normalMap,fi=!!x.displacementMap,Ye=!!x.emissiveMap,Vn=!!x.metalnessMap,Wn=!!x.roughnessMap,Xn=x.anisotropy>0,O=x.clearcoat>0,qn=x.diffuseRoughness>0,Te=x.dispersion>0,Ae=x.retroreflectivity>0,gt=x.iridescence>0,Ge=x.sheen>0,Ft=x.transmission>0,Vt=Xn&&!!x.anisotropyMap,A=O&&!!x.clearcoatMap,b=O&&!!x.clearcoatNormalMap,G=O&&!!x.clearcoatRoughnessMap,st=qn&&!!x.diffuseRoughnessMap,tt=gt&&!!x.iridescenceMap,ct=gt&&!!x.iridescenceThicknessMap,pt=Ge&&!!x.sheenColorMap,J=Ge&&!!x.sheenRoughnessMap,Z=!!x.specularMap,ut=!!x.specularColorMap,D=!!x.specularIntensityMap,j=Ft&&!!x.transmissionMap,Y=Ft&&!!x.thicknessMap,dt=!!x.gradientMap,ot=!!x.alphaMap,ht=x.alphaTest>0,Pt=!!x.alphaHash,Kt=!!x.extensions,at=yi;x.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(at=n.toneMapping);let Nt=ee?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Zt={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:Wt,fragmentShader:Q,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:Tt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:ke,batchingColor:ke&&P._colorsTexture!==null,instancing:$t,instancingColor:$t&&P.instanceColor!==null,instancingMorph:$t&&P.morphTexture!==null,outputColorSpace:Ut===null?n.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:pe,envMap:xe,envMapMode:xe&&V.mapping,envMapPMREM:ee,envMapMaxLod:ee?Nt.length-1:null,envMapSize:ee?Nt[0].width:null,aoMap:en,lightMap:He,bumpMap:Sn,normalMap:Ce,displacementMap:fi,emissiveMap:Ye,normalMapObjectSpace:Ce&&x.normalMapType===rf,normalMapTangentSpace:Ce&&x.normalMapType===hc,packedNormalMap:Ce&&x.normalMapType===hc&&yv(x.normalMap.format),metalnessMap:Vn,roughnessMap:Wn,anisotropy:Xn,anisotropyMap:Vt,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:G,diffuseRoughness:qn,diffuseRoughnessMap:st,dispersion:Te,retroreflection:Ae,iridescence:gt,iridescenceMap:tt,iridescenceThicknessMap:ct,sheen:Ge,sheenColorMap:pt,sheenRoughnessMap:J,specularMap:Z,specularColorMap:ut,specularIntensityMap:D,transmission:Ft,transmissionMap:j,thicknessMap:Y,gradientMap:dt,opaque:x.transparent===!1&&x.blending===gs&&x.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:Pt,combine:x.combine,mapUv:Ot&&f(x.map.channel),aoMapUv:en&&f(x.aoMap.channel),lightMapUv:He&&f(x.lightMap.channel),bumpMapUv:Sn&&f(x.bumpMap.channel),normalMapUv:Ce&&f(x.normalMap.channel),displacementMapUv:fi&&f(x.displacementMap.channel),emissiveMapUv:Ye&&f(x.emissiveMap.channel),metalnessMapUv:Vn&&f(x.metalnessMap.channel),roughnessMapUv:Wn&&f(x.roughnessMap.channel),anisotropyMapUv:Vt&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(x.sheenRoughnessMap.channel),specularMapUv:Z&&f(x.specularMap.channel),specularColorMapUv:ut&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:j&&f(x.transmissionMap.channel),thicknessMapUv:Y&&f(x.thicknessMap.channel),alphaMapUv:ot&&f(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Ce||Xn),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!C.attributes.uv&&(Ot||ot),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&Ce===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:yt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:wt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(xt=>xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:Ye&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Kt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&x.extensions.multiDraw===!0||ke)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)M.push(I),M.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(g(M,x),p(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function g(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function p(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let M=d[x.type],I;if(M){let L=bi[M];I=Zi.clone(L.uniforms)}else I=x.uniforms;return I}function T(x,M){let I=u.get(M);return I!==void 0?++I.usedTimes:(I=new _v(n,M,x,s),c.push(I),u.set(M,I)),I}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:w}}function bv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Sv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function zf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Hf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,_,g,p){let v=n[t];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},n[t]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=g,v.group=p),t++,v}function l(d,f,m,_,g,p,v){v.reversedDepth===!0&&(g=-g);let T=o(d,f,m,_,g,p);m.transmission>0?i.push(T):m.transparent===!0?s.push(T):e.push(T)}function c(d,f,m,_,g,p){let v=o(d,f,m,_,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):e.unshift(v)}function u(d,f){e.length>1&&e.sort(d||Sv),i.length>1&&i.sort(f||zf),s.length>1&&s.sort(f||zf)}function h(){for(let d=t,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function wv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Hf,n.set(i,[a])):s>=r.length?(a=new Hf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ev(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new bt};break;case"SpotLight":e={position:new B,direction:new B,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function Tv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Av=0;function Rv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Cv(n){let t=new Ev,e=Tv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,r=new ae,a=new ae;function o(c){let u=0,h=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,T=0,y=0,S=0,w=0,x=0,M=0,I=0,L=0;c.sort(Rv);for(let U=0,k=c.length;U<k;U++){let C=c[U],z=C.color,X=C.intensity,V=C.distance,nt=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===xs?nt=C.shadow.map.texture:nt=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=z.r*X,h+=z.g*X,d+=z.b*X;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],X);L++}else if(C.isSunLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,it=e.get(C);it.shadowIntensity=K.intensity,it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[m]=it,i.sunShadowMap[m]=nt;let wt=K.getViewportCount();for(let Wt=0;Wt<wt;Wt++)i.sunShadowMatrix[_+Wt]=K.getMatrix(Wt),i.sunShadowCascade[_+Wt]=K._cascadeData[Wt];_+=wt,m++}i.sun[f]=q,f++}else if(C.isDirectionalLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,it=e.get(C);it.shadowIntensity=K.intensity,it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,i.directionalShadow[g]=it,i.directionalShadowMap[g]=nt,i.directionalShadowMatrix[g]=C.shadow.matrix,S++}i.directional[g]=q,g++}else if(C.isSpotLight){let q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(z).multiplyScalar(X),q.distance=V,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[v]=q;let K=C.shadow;if(C.map&&(i.spotLightMap[M]=C.map,M++,K.updateMatrices(C),C.castShadow&&I++),i.spotLightMatrix[v]=K.matrix,C.castShadow){let it=e.get(C);it.shadowIntensity=K.intensity,it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,i.spotShadow[v]=it,i.spotShadowMap[v]=nt,x++}v++}else if(C.isRectAreaLight){let q=t.get(C);q.color.copy(z).multiplyScalar(X),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[T]=q,T++}else if(C.isPointLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let K=C.shadow,it=e.get(C);it.shadowIntensity=K.intensity,it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,it.shadowCameraNear=K.camera.near,it.shadowCameraFar=K.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=nt,i.pointShadowMatrix[p]=C.shadow.matrix,w++}i.point[p]=q,p++}else if(C.isHemisphereLight){let q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(X),q.groundColor.copy(C.groundColor).multiplyScalar(X),i.hemi[y]=q,y++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let P=i.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==v||P.rectAreaLength!==T||P.hemiLength!==y||P.numSunShadows!==m||P.numDirectionalShadows!==S||P.numPointShadows!==w||P.numSpotShadows!==x||P.numSpotMaps!==M||P.numLightProbes!==L)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=T,i.point.length=p,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-I,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=L,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=v,P.rectAreaLength=T,P.hemiLength=y,P.numSunShadows=m,P.numDirectionalShadows=S,P.numPointShadows=w,P.numSpotShadows=x,P.numSpotMaps=M,P.numLightProbes=L,i.version=Av++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0,g=0,p=u.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let S=i.sun[h];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),h++}else if(y.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(y.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Gf(n){let t=new Cv(n),e=[],i=[],s=[];function r(h){u.camera=h,e.length=0,i.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):e.push(h)}function o(h){i.push(h)}function l(){t.setup(e),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Iv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Gf(n),t.set(s,[o])):r>=a.length?(o=new Gf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dv=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Nv=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Vf=new ae,Za=new B,jh=new B;function Uv(n,t,e){let i=new cs,s=new St,r=new St,a=new Re,o=new hl,l=new ul,c={},u=e.maxTextureSize,h={[ms]:vn,[vn]:ms,[rn]:rn},d=new Fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Pv,fragmentShader:Lv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ve;m.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new kt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xs;let p=this.type;this.render=function(w,x,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Ud&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xs);let I=n.getRenderTarget(),L=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(qi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=p!==this.type;k&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(z=>z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,z=w.length;C<z;C++){let X=w[C],V=X.shadow;if(V===void 0){zt("WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let nt=V.getFrameExtents();s.multiply(nt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,V.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Hr){if(X.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ue(s.x,s.y,{format:xs,type:an,minFilter:xn,magFilter:xn,generateMipmaps:!1}),V.map.texture.name=X.name+".shadowMap",V.map.depthTexture=new Wi(s.x,s.y,Zn),V.map.depthTexture.name=X.name+".shadowMapDepth",V.map.depthTexture.format=Hi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fe,V.map.depthTexture.magFilter=fe}else X.isPointLight?(V.map=new Qa(s.x),V.map.depthTexture=new Pa(s.x,ai)):(V.map=new Ue(s.x,s.y),V.map.depthTexture=new Wi(s.x,s.y,ai)),V.map.depthTexture.name=X.name+".shadowMap",V.map.depthTexture.format=Hi,this.type===Xs?(V.map.depthTexture.compareFunction=q?Wh:Vh,V.map.depthTexture.minFilter=xn,V.map.depthTexture.magFilter=xn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fe,V.map.depthTexture.magFilter=fe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let K=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();X.isPointLight!==!0&&V.updateMatrices(X,M);let it=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:M.layers;for(let wt=0;wt<K;wt++){let Wt=V.getCamera(wt);if(X.isPointLight){let Q=V.camera,vt=V.matrix,Tt=X.distance||Q.far;Tt!==Q.far&&(Q.far=Tt,Q.updateProjectionMatrix()),Za.setFromMatrixPosition(X.matrixWorld),Q.position.copy(Za),jh.copy(Q.position),jh.add(Dv[wt]),Q.up.copy(Nv[wt]),Q.lookAt(jh),Q.updateMatrixWorld(),vt.makeTranslation(-Za.x,-Za.y,-Za.z),Vf.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Vf,Q.coordinateSystem,Q.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,wt),n.clear();else{wt===0&&(n.setRenderTarget(V.map),n.clear());let Q=V.getViewport(wt);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),U.viewport(a)}i=V.getFrustum(wt),y(x,M,Wt,X,it,this.type)}V.isPointLightShadow!==!0&&this.type===Hr&&v(V,M),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(I,L,P)};function v(w,x){let M=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ue(s.x,s.y,{format:xs,type:an}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(x,null,M,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(x,null,M,f,_,null)}function T(w,x,M,I){let L=null,P=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)L=P;else if(L=M.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let U=L.uuid,k=x.uuid,C=c[U];C===void 0&&(C={},c[U]=C);let z=C[k];z===void 0&&(z=L.clone(),C[k]=z,x.addEventListener("dispose",S)),L=z}if(L.visible=x.visible,L.wireframe=x.wireframe,I===Hr?L.side=x.shadowSide!==null?x.shadowSide:x.side:L.side=x.shadowSide!==null?x.shadowSide:h[x.side],L.alphaMap=x.alphaMap,L.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,L.map=x.map,L.clipShadows=x.clipShadows,L.clippingPlanes=x.clippingPlanes,L.clipIntersection=x.clipIntersection,L.displacementMap=x.displacementMap,L.displacementScale=x.displacementScale,L.displacementBias=x.displacementBias,L.wireframeLinewidth=x.wireframeLinewidth,L.linewidth=x.linewidth,M.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let U=n.properties.get(L);U.light=M}return L}function y(w,x,M,I,L,P){if(w.visible===!1)return;if(w.layers.test(L)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Hr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let C=t.update(w),z=w.material;if(Array.isArray(z)){let X=C.groups;for(let V=0,nt=X.length;V<nt;V++){let q=X[V],K=z[q.materialIndex];if(K&&K.visible){let it=T(w,K,I,P);w.onBeforeShadow(n,w,x,M,C,it,q),n.renderBufferDirect(M,null,C,it,w,q),w.onAfterShadow(n,w,x,M,C,it,q)}}}else if(z.visible){let X=T(w,z,I,P);w.onBeforeShadow(n,w,x,M,C,X,null),n.renderBufferDirect(M,null,C,X,w,null),w.onAfterShadow(n,w,x,M,C,X,null)}}let k=w.children;for(let C=0,z=k.length;C<z;C++)y(k[C],x,M,I,L,P)}function S(w){w.target.removeEventListener("dispose",S);for(let M in c){let I=c[M],L=w.target.uuid;L in I&&(I[L].dispose(),delete I[L])}}}function Fv(n,t){function e(){let D=!1,j=new Re,Y=null,dt=new Re(0,0,0,0);return{setMask:function(ot){Y!==ot&&!D&&(n.colorMask(ot,ot,ot,ot),Y=ot)},setLocked:function(ot){D=ot},setClear:function(ot,ht,Pt,Kt,at){at===!0&&(ot*=Kt,ht*=Kt,Pt*=Kt),j.set(ot,ht,Pt,Kt),dt.equals(j)===!1&&(n.clearColor(ot,ht,Pt,Kt),dt.copy(j))},reset:function(){D=!1,Y=null,dt.set(-1,0,0,0)}}}function i(){let D=!1,j=!1,Y=null,dt=null,ot=null;return{setReversed:function(ht){if(j!==ht){let Pt=t.get("EXT_clip_control");ht?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),j=ht;let Kt=ot;ot=null,this.setClear(Kt)}},getReversed:function(){return j},setTest:function(ht){ht?yt(n.DEPTH_TEST):$t(n.DEPTH_TEST)},setMask:function(ht){Y!==ht&&!D&&(n.depthMask(ht),Y=ht)},setFunc:function(ht){if(j&&(ht=mf[ht]),dt!==ht){switch(ht){case $o:n.depthFunc(n.NEVER);break;case Yo:n.depthFunc(n.ALWAYS);break;case Jo:n.depthFunc(n.LESS);break;case Pr:n.depthFunc(n.LEQUAL);break;case Zo:n.depthFunc(n.EQUAL);break;case Ko:n.depthFunc(n.GEQUAL);break;case Qo:n.depthFunc(n.GREATER);break;case jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=ht}},setLocked:function(ht){D=ht},setClear:function(ht){ot!==ht&&(ot=ht,j&&(ht=1-ht),n.clearDepth(ht))},reset:function(){D=!1,Y=null,dt=null,ot=null,j=!1}}}function s(){let D=!1,j=null,Y=null,dt=null,ot=null,ht=null,Pt=null,Kt=null,at=null;return{setTest:function(Nt){D||(Nt?yt(n.STENCIL_TEST):$t(n.STENCIL_TEST))},setMask:function(Nt){j!==Nt&&!D&&(n.stencilMask(Nt),j=Nt)},setFunc:function(Nt,Zt,xt){(Y!==Nt||dt!==Zt||ot!==xt)&&(n.stencilFunc(Nt,Zt,xt),Y=Nt,dt=Zt,ot=xt)},setOp:function(Nt,Zt,xt){(ht!==Nt||Pt!==Zt||Kt!==xt)&&(n.stencilOp(Nt,Zt,xt),ht=Nt,Pt=Zt,Kt=xt)},setLocked:function(Nt){D=Nt},setClear:function(Nt){at!==Nt&&(n.clearStencil(Nt),at=Nt)},reset:function(){D=!1,j=null,Y=null,dt=null,ot=null,ht=null,Pt=null,Kt=null,at=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],_=null,g=!1,p=null,v=null,T=null,y=null,S=null,w=null,x=null,M=new bt(0,0,0),I=0,L=!1,P=null,U=null,k=null,C=null,z=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,nt=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=nt>=2);let K=null,it={},wt=n.getParameter(n.SCISSOR_BOX),Wt=n.getParameter(n.VIEWPORT),Q=new Re().fromArray(wt),vt=new Re().fromArray(Wt);function Tt(D,j,Y,dt){let ot=new Uint8Array(4),ht=n.createTexture();n.bindTexture(D,ht),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<Y;Pt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,dt,0,n.RGBA,n.UNSIGNED_BYTE,ot):n.texImage2D(j+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ot);return ht}let Ut={};Ut[n.TEXTURE_2D]=Tt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ut[n.TEXTURE_CUBE_MAP]=Tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[n.TEXTURE_2D_ARRAY]=Tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ut[n.TEXTURE_3D]=Tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),yt(n.DEPTH_TEST),a.setFunc(Pr),Sn(!1),Ce(Ph),yt(n.CULL_FACE),en(qi);function yt(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function $t(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function ke(D,j){return d[D]!==j?(n.bindFramebuffer(D,j),d[D]=j,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=j),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Ot(D,j){let Y=m,dt=!1;if(D){Y=f.get(j),Y===void 0&&(Y=[],f.set(j,Y));let ot=D.textures;if(Y.length!==ot.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Pt=ot.length;ht<Pt;ht++)Y[ht]=n.COLOR_ATTACHMENT0+ht;Y.length=ot.length,dt=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,dt=!0);dt&&n.drawBuffers(Y)}function pe(D){return _!==D?(n.useProgram(D),_=D,!0):!1}let xe={[qs]:n.FUNC_ADD,[kd]:n.FUNC_SUBTRACT,[Od]:n.FUNC_REVERSE_SUBTRACT};xe[Bd]=n.MIN,xe[zd]=n.MAX;let ee={[Hd]:n.ZERO,[Gd]:n.ONE,[Vd]:n.SRC_COLOR,[Nh]:n.SRC_ALPHA,[Jd]:n.SRC_ALPHA_SATURATE,[$d]:n.DST_COLOR,[Xd]:n.DST_ALPHA,[Wd]:n.ONE_MINUS_SRC_COLOR,[Uh]:n.ONE_MINUS_SRC_ALPHA,[Yd]:n.ONE_MINUS_DST_COLOR,[qd]:n.ONE_MINUS_DST_ALPHA,[Zd]:n.CONSTANT_COLOR,[Kd]:n.ONE_MINUS_CONSTANT_COLOR,[Qd]:n.CONSTANT_ALPHA,[jd]:n.ONE_MINUS_CONSTANT_ALPHA};function en(D,j,Y,dt,ot,ht,Pt,Kt,at,Nt){if(D===qi){g===!0&&($t(n.BLEND),g=!1);return}if(g===!1&&(yt(n.BLEND),g=!0),D!==Fd){if(D!==p||Nt!==L){if((v!==qs||S!==qs)&&(n.blendEquation(n.FUNC_ADD),v=qs,S=qs),Nt)switch(D){case gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFunc(n.ONE,n.ONE);break;case Lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Bt("WebGLState: Invalid blending: ",D);break}else switch(D){case gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Lh:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dh:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",D);break}T=null,y=null,w=null,x=null,M.set(0,0,0),I=0,p=D,L=Nt}return}ot=ot||j,ht=ht||Y,Pt=Pt||dt,(j!==v||ot!==S)&&(n.blendEquationSeparate(xe[j],xe[ot]),v=j,S=ot),(Y!==T||dt!==y||ht!==w||Pt!==x)&&(n.blendFuncSeparate(ee[Y],ee[dt],ee[ht],ee[Pt]),T=Y,y=dt,w=ht,x=Pt),(Kt.equals(M)===!1||at!==I)&&(n.blendColor(Kt.r,Kt.g,Kt.b,at),M.copy(Kt),I=at),p=D,L=!1}function He(D,j){D.side===rn?$t(n.CULL_FACE):yt(n.CULL_FACE);let Y=D.side===vn;j&&(Y=!Y),Sn(Y),D.blending===gs&&D.transparent===!1?en(qi):en(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let dt=D.stencilWrite;o.setTest(dt),dt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):$t(n.SAMPLE_ALPHA_TO_COVERAGE)}function Sn(D){P!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),P=D)}function Ce(D){D!==Dd?(yt(n.CULL_FACE),D!==U&&(D===Ph?n.cullFace(n.BACK):D===Nd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$t(n.CULL_FACE),U=D}function fi(D){D!==k&&(V&&n.lineWidth(D),k=D)}function Ye(D,j,Y){D?(yt(n.POLYGON_OFFSET_FILL),(C!==j||z!==Y)&&(C=j,z=Y,a.getReversed()&&(j=-j,Y=-Y),n.polygonOffset(j,Y))):$t(n.POLYGON_OFFSET_FILL)}function Vn(D){D?yt(n.SCISSOR_TEST):$t(n.SCISSOR_TEST)}function Wn(D){D===void 0&&(D=n.TEXTURE0+X-1),K!==D&&(n.activeTexture(D),K=D)}function Xn(D,j,Y){Y===void 0&&(K===null?Y=n.TEXTURE0+X-1:Y=K);let dt=it[Y];dt===void 0&&(dt={type:void 0,texture:void 0},it[Y]=dt),(dt.type!==D||dt.texture!==j)&&(K!==Y&&(n.activeTexture(Y),K=Y),n.bindTexture(D,j||Ut[D]),dt.type=D,dt.texture=j)}function O(){let D=it[K];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function qn(){try{n.compressedTexImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function Te(){try{n.compressedTexImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function Ae(){try{n.texSubImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function gt(){try{n.texSubImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function Ge(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function Ft(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function Vt(){try{n.texStorage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function A(){try{n.texStorage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function b(){try{n.texImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function G(){try{n.texImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function st(D){return h[D]!==void 0?h[D]:n.getParameter(D)}function tt(D,j){h[D]!==j&&(n.pixelStorei(D,j),h[D]=j)}function ct(D){Q.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Q.copy(D))}function pt(D){vt.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),vt.copy(D))}function J(D,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let dt=Y.get(D);dt===void 0&&(dt=n.getUniformBlockIndex(j,D.name),n.uniformBlockBinding(j,dt,dt),Y.set(D,dt))}function Z(D,j,Y){let ot=c.get(j).get(D);l[ot]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,ot,Y),l[ot]=Y)}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},K=null,it={},d={},l={},f=new WeakMap,m=[],_=null,g=!1,p=null,v=null,T=null,y=null,S=null,w=null,x=null,M=new bt(0,0,0),I=0,L=!1,P=null,U=null,k=null,C=null,z=null,Q.set(0,0,n.canvas.width,n.canvas.height),vt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:yt,disable:$t,bindFramebuffer:ke,drawBuffers:Ot,useProgram:pe,setBlending:en,setMaterial:He,setFlipSided:Sn,setCullFace:Ce,setLineWidth:fi,setPolygonOffset:Ye,setScissorTest:Vn,activeTexture:Wn,bindTexture:Xn,unbindTexture:O,compressedTexImage2D:qn,compressedTexImage3D:Te,texImage2D:b,texImage3D:G,pixelStorei:tt,getParameter:st,updateUBOMapping:J,uniformBlockBinding:Z,texStorage2D:Vt,texStorage3D:A,texSubImage2D:Ae,texSubImage3D:gt,compressedTexSubImage2D:Ge,compressedTexSubImage3D:Ft,scissor:ct,viewport:pt,reset:ut}}function kv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,u=new WeakMap,h=new Set,d,f=new WeakMap,m=new Set,_=new FinalizationRegistry(A=>m.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,b){return g?new OffscreenCanvas(A,b):Sa("canvas")}function v(A,b,G){let st=1,tt=Vt(A);if((tt.width>G||tt.height>G)&&(st=G/Math.max(tt.width,tt.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ct=Math.floor(st*tt.width),pt=Math.floor(st*tt.height);d===void 0&&(d=p(ct,pt));let J=b?p(ct,pt):d;return J.width=ct,J.height=pt,J.getContext("2d").drawImage(A,0,0,ct,pt),zt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ct+"x"+pt+")."),J}else return"data"in A&&zt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function T(A){return A.generateMipmaps}function y(A){n.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,b,G,st,tt,ct=!1){if(A!==null){if(n[A]!==void 0)return n[A];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pt;st&&(pt=t.get("EXT_texture_norm16"),pt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=b;if(b===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8),G===n.UNSIGNED_SHORT&&pt&&(J=pt.R16_EXT),G===n.SHORT&&pt&&(J=pt.R16_SNORM_EXT)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),b===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8),G===n.UNSIGNED_SHORT&&pt&&(J=pt.RG16_EXT),G===n.SHORT&&pt&&(J=pt.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGB8UI),G===n.UNSIGNED_SHORT&&(J=n.RGB16UI),G===n.UNSIGNED_INT&&(J=n.RGB32UI),G===n.BYTE&&(J=n.RGB8I),G===n.SHORT&&(J=n.RGB16I),G===n.INT&&(J=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),G===n.UNSIGNED_INT&&(J=n.RGBA32UI),G===n.BYTE&&(J=n.RGBA8I),G===n.SHORT&&(J=n.RGBA16I),G===n.INT&&(J=n.RGBA32I)),b===n.RGB&&(G===n.UNSIGNED_SHORT&&pt&&(J=pt.RGB16_EXT),G===n.SHORT&&pt&&(J=pt.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),b===n.RGBA){let Z=ct?ba:te.getTransfer(tt);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=Z===ue?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&pt&&(J=pt.RGBA16_EXT),G===n.SHORT&&pt&&(J=pt.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(A,b){let G;return A?b===null||b===ai||b===Zs?G=n.DEPTH24_STENCIL8:b===Zn?G=n.DEPTH32F_STENCIL8:b===Vr&&(G=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ai||b===Zs?G=n.DEPTH_COMPONENT24:b===Zn?G=n.DEPTH_COMPONENT32F:b===Vr&&(G=n.DEPTH_COMPONENT16),G}function M(A,b){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==fe&&A.minFilter!==xn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function I(A){let b=new WeakRef(A);i.get(A).__ref=b,m.add(b),_.register(A,b,b)}function L(A){let b=i.get(A).__ref;b!==void 0&&(m.delete(b),_.unregister(b))}function P(A){k(A.target)}function U(A){C(A.target)}function k(A){A.removeEventListener("dispose",P),L(A),X(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&h.delete(A)}function C(A){A.removeEventListener("dispose",U),L(A),nt(A)}function z(){for(let A of m){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?C(b):k(b))}m.clear(),h.clear()}function X(A){let b=i.get(A);if(b.__webglInit===void 0)return;let G=A.source,st=f.get(G);if(st){let tt=st[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&V(A),Object.keys(st).length===0&&f.delete(G)}i.remove(A)}function V(A){let b=i.get(A);n.deleteTexture(b.__webglTexture);let G=A.source,st=f.get(G);delete st[b.__cacheKey],a.memory.textures--}function nt(A){let b=i.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&k(G),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let ct=0;ct<b.__webglFramebuffer[tt].length;ct++)n.deleteFramebuffer(b.__webglFramebuffer[tt][ct]);else n.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)n.deleteFramebuffer(b.__webglFramebuffer[tt]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let st=A.textures;for(let tt=0,ct=st.length;tt<ct;tt++){let pt=i.get(st[tt]);pt.__webglTexture&&(n.deleteTexture(pt.__webglTexture),a.memory.textures--),i.remove(st[tt])}i.remove(A)}let q=0;function K(){q=0}function it(){return q}function wt(A){q=A}function Wt(){let A=q;return A>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,A}function Q(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function vt(A,b){let G=i.get(A);if(A.isVideoTexture&&Ge(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let st=A.image;if(st===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(G,A,b);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function Tt(A,b){let G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){He(G,A,b);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function Ut(A,b){let G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){He(G,A,b);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function yt(A,b){let G=i.get(A);if(A.version>0&&G.__version!==A.version){Sn(G,A,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}let $t={[tl]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},ke={[fe]:n.NEAREST,[nf]:n.NEAREST_MIPMAP_NEAREST,[Js]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Tl]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},Ot={[of]:n.NEVER,[Xh]:n.ALWAYS,[lf]:n.LESS,[Vh]:n.LEQUAL,[cf]:n.EQUAL,[Wh]:n.GEQUAL,[hf]:n.GREATER,[uf]:n.NOTEQUAL};function pe(A,b){if(b.type===Zn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===xn||b.magFilter===Tl||b.magFilter===Js||b.magFilter===$i||b.minFilter===xn||b.minFilter===Tl||b.minFilter===Js||b.minFilter===$i)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,$t[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,$t[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,$t[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ke[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ke[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ot[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fe||b.minFilter!==Js&&b.minFilter!==$i||b.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function xe(A,b){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",P),I(b));let st=b.source,tt=f.get(st);tt===void 0&&(tt={},f.set(st,tt));let ct=Q(b);if(ct!==A.__cacheKey){tt[ct]===void 0&&(tt[ct]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),tt[ct].usedTimes++;let pt=tt[A.__cacheKey];pt!==void 0&&(tt[A.__cacheKey].usedTimes--,pt.usedTimes===0&&V(b)),A.__cacheKey=ct,A.__webglTexture=tt[ct].texture}return G}function ee(A,b,G){return Math.floor(Math.floor(A/G)/b)}function en(A,b,G,st){let ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,G,st,b.data);else{ct.sort((D,j)=>D.start-j.start);let pt=0;for(let D=1;D<ct.length;D++){let j=ct[pt],Y=ct[D],dt=j.start+j.count,ot=ee(Y.start,b.width,4),ht=ee(j.start,b.width,4);Y.start<=dt+1&&ot===ht&&ee(Y.start+Y.count-1,b.width,4)===ot?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++pt,ct[pt]=Y)}ct.length=pt+1;let J=e.getParameter(n.UNPACK_ROW_LENGTH),Z=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let D=0,j=ct.length;D<j;D++){let Y=ct[D],dt=Math.floor(Y.start/4),ot=Math.ceil(Y.count/4),ht=dt%b.width,Pt=Math.floor(dt/b.width),Kt=ot,at=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(n.TEXTURE_2D,0,ht,Pt,Kt,at,G,st,b.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function He(A,b,G){let st=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=n.TEXTURE_3D);let tt=xe(A,b),ct=b.source;e.bindTexture(st,A.__webglTexture,n.TEXTURE0+G);let pt=i.get(ct);if(ct.version!==pt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let at=te.getPrimaries(te.workingColorSpace),Nt=b.colorSpace===Ji?null:te.getPrimaries(b.colorSpace),Zt=b.colorSpace===Ji||at===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let Z=v(b.image,!1,s.maxTextureSize);Z=Ft(b,Z);let ut=r.convert(b.format,b.colorSpace),D=r.convert(b.type),j=w(b.internalFormat,ut,D,b.normalized,b.colorSpace,b.isVideoTexture);pe(st,b);let Y,dt=b.mipmaps,ot=b.isVideoTexture!==!0,ht=pt.__version===void 0||tt===!0,Pt=ct.dataReady,Kt=M(b,Z);if(b.isDepthTexture)j=x(b.format===Yi,b.type),ht&&(ot?e.texStorage2D(n.TEXTURE_2D,1,j,Z.width,Z.height):e.texImage2D(n.TEXTURE_2D,0,j,Z.width,Z.height,0,ut,D,null));else if(b.isDataTexture)if(dt.length>0){ot&&ht&&e.texStorage2D(n.TEXTURE_2D,Kt,j,dt[0].width,dt[0].height);for(let at=0,Nt=dt.length;at<Nt;at++)Y=dt[at],ot?Pt&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Y.width,Y.height,ut,D,Y.data):e.texImage2D(n.TEXTURE_2D,at,j,Y.width,Y.height,0,ut,D,Y.data);b.generateMipmaps=!1}else ot?(ht&&e.texStorage2D(n.TEXTURE_2D,Kt,j,Z.width,Z.height),Pt&&en(b,Z,ut,D)):e.texImage2D(n.TEXTURE_2D,0,j,Z.width,Z.height,0,ut,D,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ot&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,j,dt[0].width,dt[0].height,Z.depth);for(let at=0,Nt=dt.length;at<Nt;at++)if(Y=dt[at],b.format!==oi)if(ut!==null)if(ot){if(Pt)if(b.layerUpdates.size>0){let Zt=Kh(Y.width,Y.height,b.format,b.type);for(let xt of b.layerUpdates){let me=Y.data.subarray(xt*Zt/Y.data.BYTES_PER_ELEMENT,(xt+1)*Zt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,xt,Y.width,Y.height,1,ut,me)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,Y.width,Y.height,Z.depth,ut,Y.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,j,Y.width,Y.height,Z.depth,0,Y.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Pt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,Y.width,Y.height,Z.depth,ut,D,Y.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,j,Y.width,Y.height,Z.depth,0,ut,D,Y.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ot&&ht&&e.texStorage2D(n.TEXTURE_2D,Kt,j,dt[0].width,dt[0].height);for(let at=0,Nt=dt.length;at<Nt;at++)Y=dt[at],b.format!==oi?ut!==null?ot?Pt&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,Y.width,Y.height,ut,Y.data):e.compressedTexImage2D(n.TEXTURE_2D,at,j,Y.width,Y.height,0,Y.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Pt&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Y.width,Y.height,ut,D,Y.data):e.texImage2D(n.TEXTURE_2D,at,j,Y.width,Y.height,0,ut,D,Y.data)}else if(b.isDataArrayTexture)if(ot){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,j,Z.width,Z.height,Z.depth),Pt)if(b.layerUpdates.size>0){let at=Kh(Z.width,Z.height,b.format,b.type);for(let Nt of b.layerUpdates){let Zt=Z.data.subarray(Nt*at/Z.data.BYTES_PER_ELEMENT,(Nt+1)*at/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Nt,Z.width,Z.height,1,ut,D,Zt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ut,D,Z.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,j,Z.width,Z.height,Z.depth,0,ut,D,Z.data);else if(b.isData3DTexture)ot?(ht&&e.texStorage3D(n.TEXTURE_3D,Kt,j,Z.width,Z.height,Z.depth),Pt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ut,D,Z.data)):e.texImage3D(n.TEXTURE_3D,0,j,Z.width,Z.height,Z.depth,0,ut,D,Z.data);else if(b.isFramebufferTexture){if(ht)if(ot)e.texStorage2D(n.TEXTURE_2D,Kt,j,Z.width,Z.height);else{let at=Z.width,Nt=Z.height;for(let Zt=0;Zt<Kt;Zt++)e.texImage2D(n.TEXTURE_2D,Zt,j,at,Nt,0,ut,D,null),at>>=1,Nt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let at=n.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),Z.parentNode!==at){at.appendChild(Z),h.add(b),at.onpaint=Nt=>{let Zt=Nt.changedElements;for(let xt of h)Zt.includes(xt.image)&&(xt.needsUpdate=!0)},at.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{let Zt=n.RGBA,xt=n.RGBA,me=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Zt,xt,me,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(dt.length>0){if(ot&&ht){let at=Vt(dt[0]);e.texStorage2D(n.TEXTURE_2D,Kt,j,at.width,at.height)}for(let at=0,Nt=dt.length;at<Nt;at++)Y=dt[at],ot?Pt&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,ut,D,Y):e.texImage2D(n.TEXTURE_2D,at,j,ut,D,Y);b.generateMipmaps=!1}else if(ot){if(ht){let at=Vt(Z);e.texStorage2D(n.TEXTURE_2D,Kt,j,at.width,at.height)}Pt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,D,Z)}else e.texImage2D(n.TEXTURE_2D,0,j,ut,D,Z);T(b)&&b.mipmapsAutoUpdate===!0&&y(st),pt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Sn(A,b,G){if(b.image.length!==6)return;let st=xe(A,b),tt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);let ct=i.get(tt);if(tt.version!==ct.__version||st===!0){e.activeTexture(n.TEXTURE0+G);let pt=te.getPrimaries(te.workingColorSpace),J=b.colorSpace===Ji?null:te.getPrimaries(b.colorSpace),Z=b.colorSpace===Ji||pt===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ut=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,j=[];for(let xt=0;xt<6;xt++)!ut&&!D?j[xt]=v(b.image[xt],!0,s.maxCubemapSize):j[xt]=D?b.image[xt].image:b.image[xt],j[xt]=Ft(b,j[xt]);let Y=j[0],dt=r.convert(b.format,b.colorSpace),ot=r.convert(b.type),ht=w(b.internalFormat,dt,ot,b.normalized,b.colorSpace),Pt=b.isVideoTexture!==!0,Kt=ct.__version===void 0||st===!0,at=tt.dataReady,Nt=M(b,Y);pe(n.TEXTURE_CUBE_MAP,b);let Zt;if(b.isDepthTexture){if(ht=x(b.format===Yi,b.type),Kt)if(Pt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ht,Y.width,Y.height);else for(let xt=0;xt<6;xt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,Y.width,Y.height,0,dt,ot,null)}else if(ut){Pt&&Kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ht,Y.width,Y.height);for(let xt=0;xt<6;xt++){Zt=j[xt].mipmaps;for(let me=0;me<Zt.length;me++){let Je=Zt[me];b.format!==oi?dt!==null?Pt?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,me,0,0,Je.width,Je.height,dt,Je.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,me,ht,Je.width,Je.height,0,Je.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,me,0,0,Je.width,Je.height,dt,ot,Je.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,me,ht,Je.width,Je.height,0,dt,ot,Je.data)}}}else{if(Zt=b.mipmaps,Pt&&Kt){Zt.length>0&&Nt++;let xt=Vt(j[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ht,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(D){Pt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,j[xt].width,j[xt].height,dt,ot,j[xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,j[xt].width,j[xt].height,0,dt,ot,j[xt].data);for(let me=0;me<Zt.length;me++){let ns=Zt[me].image[xt].image;Pt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,me+1,0,0,ns.width,ns.height,dt,ot,ns.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,me+1,ht,ns.width,ns.height,0,dt,ot,ns.data)}}else{Pt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,dt,ot,j[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,dt,ot,j[xt]);for(let me=0;me<Zt.length;me++){let Je=Zt[me];Pt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,me+1,0,0,dt,ot,Je.image[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,me+1,ht,dt,ot,Je.image[xt])}}}T(b)&&b.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ct.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Ce(A,b,G,st,tt,ct){let pt=r.convert(G.format,G.colorSpace),J=r.convert(G.type),Z=w(G.internalFormat,pt,J,G.normalized,G.colorSpace),ut=i.get(b),D=i.get(G);if(D.__renderTarget=b,!ut.__hasExternalTextures){let j=Math.max(1,b.width>>ct),Y=Math.max(1,b.height>>ct);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,ct,Z,j,Y,b.depth,0,pt,J,null):e.texImage2D(tt,ct,Z,j,Y,0,pt,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),gt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,tt,D.__webglTexture,0,Ae(b)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,tt,D.__webglTexture,ct),e.bindFramebuffer(n.FRAMEBUFFER,null)}function fi(A,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){let st=b.depthTexture,tt=st&&st.isDepthTexture?st.type:null,ct=x(b.stencilBuffer,tt),pt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;gt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae(b),ct,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae(b),ct,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ct,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,A)}else{let st=b.textures;for(let tt=0;tt<st.length;tt++){let ct=st[tt],pt=r.convert(ct.format,ct.colorSpace),J=r.convert(ct.type),Z=w(ct.internalFormat,pt,J,ct.normalized,ct.colorSpace);gt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae(b),Z,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae(b),Z,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Z,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(A,b,G){let st=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(b.depthTexture);tt.__renderTarget=b;let ct=st?b.depthTexture.image[0]:b.depthTexture.image;(!tt.__webglTexture||ct.width!==b.width||ct.height!==b.height)&&(ct.width=b.width,ct.height=b.height,b.depthTexture.needsUpdate=!0),st?yt(b.depthTexture,0):vt(b.depthTexture,0);let pt=tt.__webglTexture,J=Ae(b),Z=st?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,ut=b.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Hi)gt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,Z,pt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ut,Z,pt,0);else if(b.depthTexture.format===Yi)gt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,Z,pt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ut,Z,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vn(A){let b=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let st=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",tt)};st.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=st}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let st=0;st<6;st++)Ye(b.__webglFramebuffer[st],A,st);else A.texture.mipmaps.length>0?Ye(b.__webglFramebuffer[0],A,0):Ye(b.__webglFramebuffer,A,0);else if(G){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=n.createRenderbuffer(),fi(b.__webglDepthbuffer[st],A,!1);else{let tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ct)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),fi(b.__webglDepthbuffer,A,!1);else{let tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ct)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wn(A,b,G){let st=i.get(A);b!==void 0&&Ce(st.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Vn(A)}function Xn(A){let b=A.texture,G=i.get(A),st=i.get(b);A.addEventListener("dispose",U),I(A);let tt=A.textures,ct=A.isWebGLCubeRenderTarget===!0,pt=tt.length>1;if(pt||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=b.version,a.memory.textures++),ct){G.__webglFramebuffer=[];for(let J=0;J<6;J++)if(b.mipmaps.length>0){G.__webglFramebuffer[J]=[];for(let Z=0;Z<b.mipmaps.length;Z++)G.__webglFramebuffer[J][Z]=n.createFramebuffer()}else G.__webglFramebuffer[J]=n.createFramebuffer()}else{if(b.mipmaps.length>0){G.__webglFramebuffer=[];for(let J=0;J<b.mipmaps.length;J++)G.__webglFramebuffer[J]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(pt)for(let J=0,Z=tt.length;J<Z;J++){let ut=i.get(tt[J]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&gt(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<tt.length;J++){let Z=tt[J];G.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[J]);let ut=r.convert(Z.format,Z.colorSpace),D=r.convert(Z.type),j=w(Z.internalFormat,ut,D,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),Y=Ae(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,j,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,G.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),fi(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ct){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),pe(n.TEXTURE_CUBE_MAP,b);for(let J=0;J<6;J++)if(b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)Ce(G.__webglFramebuffer[J][Z],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Z);else Ce(G.__webglFramebuffer[J],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);T(b)?y(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(pt){for(let J=0,Z=tt.length;J<Z;J++){let ut=tt[J],D=i.get(ut),j=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,D.__webglTexture),pe(j,ut),Ce(G.__webglFramebuffer,A,ut,n.COLOR_ATTACHMENT0+J,j,0),T(ut)&&y(j)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,st.__webglTexture),pe(J,b),b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)Ce(G.__webglFramebuffer[Z],A,b,n.COLOR_ATTACHMENT0,J,Z);else Ce(G.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,J,0);T(b)?y(J):b.mipmaps.length>0&&n.texParameteri(J,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&Vn(A)}function O(A){let b=A.textures;for(let G=0,st=b.length;G<st;G++){let tt=b[G];if(T(tt)&&tt.mipmapsAutoUpdate===!0){let ct=S(A),pt=i.get(tt).__webglTexture;e.bindTexture(ct,pt),y(ct),e.unbindTexture()}}}let qn=[];function Te(A){if(A.samples>0){if(gt(A)===!1){let b=A.textures,G=A.width,st=A.height,tt=n.COLOR_BUFFER_BIT,ct=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(A),J=b.length>1;if(J)for(let ut=0;ut<b.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ut=0;ut<b.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);let D=i.get(b[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,G,st,0,0,G,st,tt,n.NEAREST),l===!0&&(qn.length=0,qn.push(n.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&qn.push(ct),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,qn))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ut=0;ut<b.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);let D=i.get(b[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,D,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Ae(A){return Math.min(s.maxSamples,A.samples)}function gt(A){let b=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ge(A){let b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Ft(A,b){let G=A.colorSpace,st=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Ma&&G!==Ji&&(te.getTransfer(G)===ue?(st!==oi||tt!==wn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",G)),b}function Vt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Wt,this.resetTextureUnits=K,this.getTextureUnits=it,this.setTextureUnits=wt,this.setTexture2D=vt,this.setTexture2DArray=Tt,this.setTexture3D=Ut,this.setTextureCube=yt,this.rebindTextures=Wn,this.setupRenderTarget=Xn,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Vn,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=gt,this.dispose=z}function Ov(n,t){function e(i,s=Ji){let r,a=te.getTransfer(s);if(i===wn)return n.UNSIGNED_BYTE;if(i===Rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kh)return n.BYTE;if(i===Oh)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===Al)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===an)return n.HALF_FLOAT;if(i===Hh)return n.ALPHA;if(i===Gh)return n.RGB;if(i===oi)return n.RGBA;if(i===Hi)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===Il)return n.RED;if(i===Pl)return n.RED_INTEGER;if(i===xs)return n.RG;if(i===Ll)return n.RG_INTEGER;if(i===Dl)return n.RGBA_INTEGER;if(i===Wa||i===Xa||i===qa||i===$a)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Ul||i===Fl||i===kl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ol||i===Bl||i===zl||i===Hl||i===Gl||i===Ya||i===Vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ol||i===Bl)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hl)return r.COMPRESSED_R11_EAC;if(i===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ya)return r.COMPRESSED_RG11_EAC;if(i===Vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wl||i===Xl||i===ql||i===$l||i===Yl||i===Jl||i===Zl||i===Kl||i===Ql||i===jl||i===tc||i===ec||i===nc||i===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ql)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$l)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nc)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sc||i===rc||i===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===sc)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oc||i===lc||i===Ja||i===cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
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

}`,au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new La(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Fe({vertexShader:Bv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ou=class extends gi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new au,p={},v=e.getContextAttributes(),T=null,y=null,S=[],w=[],x=new St,M=null,I=null,L=new Ne;L.viewport=new Re;let P=new Ne;P.viewport=new Re;let U=[L,P],k=new bl,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let vt=S[Q];return vt===void 0&&(vt=new Fr,S[Q]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(Q){let vt=S[Q];return vt===void 0&&(vt=new Fr,S[Q]=vt),vt.getGripSpace()},this.getHand=function(Q){let vt=S[Q];return vt===void 0&&(vt=new Fr,S[Q]=vt),vt.getHandSpace()};function X(Q){let vt=w.indexOf(Q.inputSource);if(vt===-1)return;let Tt=S[vt];Tt!==void 0&&(Tt.update(Q.inputSource,Q.frame,c||a),Tt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",nt);for(let Q=0;Q<S.length;Q++){let vt=w[Q];vt!==null&&(w[Q]=null,S[Q].disconnect(vt))}C=null,z=null,g.reset();for(let Q in p)delete p[Q];if(t.setRenderTarget(T),f=null,d=null,h=null,s=null,y=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),I!==null){let Q=I.camera;Q.fov=I.fov,Q.zoom=I.zoom,Q.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",V),s.addEventListener("inputsourceschange",nt),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ut=null,yt=null;v.depth&&(yt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=v.stencil?Yi:Hi,Ut=v.stencil?Zs:ai);let $t={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer($t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ue(d.textureWidth,d.textureHeight,{format:oi,type:wn,depthTexture:new Wi(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Tt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ue(f.framebufferWidth,f.framebufferHeight,{format:oi,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(Q){for(let vt=0;vt<Q.removed.length;vt++){let Tt=Q.removed[vt],Ut=w.indexOf(Tt);Ut>=0&&(w[Ut]=null,S[Ut].disconnect(Tt))}for(let vt=0;vt<Q.added.length;vt++){let Tt=Q.added[vt],Ut=w.indexOf(Tt);if(Ut===-1){for(let $t=0;$t<S.length;$t++)if($t>=w.length){w.push(Tt),Ut=$t;break}else if(w[$t]===null){w[$t]=Tt,Ut=$t;break}if(Ut===-1)break}let yt=S[Ut];yt&&yt.connect(Tt)}}function q(Q,vt){vt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(vt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let vt=Q.near,Tt=Q.far;g.texture!==null&&(g.depthNear>0&&(vt=g.depthNear),g.depthFar>0&&(Tt=g.depthFar)),k.near=P.near=L.near=vt,k.far=P.far=L.far=Tt,(C!==k.near||z!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),C=k.near,z=k.far),k.layers.mask=Q.layers.mask|6,L.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let Ut=Q.parent,yt=k.cameras;q(k,Ut);for(let $t=0;$t<yt.length;$t++)q(yt[$t],Ut);k.projectionMatrix.copy(L.projectionMatrix),k.projectionMatrixInverse.copy(L.projectionMatrixInverse),I===null&&Q.isPerspectiveCamera&&(I={camera:Q,fov:Q.fov,zoom:Q.zoom}),K(Q,k,Ut)};function K(Q,vt,Tt){Tt===null?Q.matrix.copy(vt.matrixWorld):(Q.matrix.copy(Tt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(vt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(vt.projectionMatrix),Q.projectionMatrixInverse.copy(vt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=il*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Q){return p[Q]};let it=null;function wt(Q,vt){if(u=vt.getViewerPose(c||a),m=vt,u!==null){let Tt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ut=!1;Tt.length!==k.cameras.length&&(k.cameras.length=0,Ut=!0);for(let Ot=0;Ot<Tt.length;Ot++){let pe=Tt[Ot],xe=null;if(f!==null)xe=f.getViewport(pe);else{let en=h.getViewSubImage(d,pe);xe=en.viewport,Ot===0&&(t.setRenderTargetTextures(y,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(y))}let ee=U[Ot];ee===void 0&&(ee=new Ne,ee.layers.enable(Ot),ee.viewport=new Re,U[Ot]=ee),ee.matrix.fromArray(pe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(pe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(xe.x,xe.y,xe.width,xe.height),Ot===0&&(k.matrix.copy(ee.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ut===!0&&k.cameras.push(ee)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();let Ot=h.getDepthInformation(Tt[0]);Ot&&Ot.isValid&&Ot.texture&&g.init(Ot,s.renderState)}if(yt&&yt.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let Ot=0;Ot<Tt.length;Ot++){let pe=Tt[Ot].camera;if(pe){let xe=p[pe];xe||(xe=new La,p[pe]=xe);let ee=h.getCameraImage(pe);xe.sourceTexture=ee}}}}for(let Tt=0;Tt<S.length;Tt++){let Ut=w[Tt],yt=S[Tt];Ut!==null&&yt!==void 0&&yt.update(Ut,vt,c||a)}it&&it(Q,vt),vt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:vt}),m=null}let Wt=new Wf;Wt.setAnimationLoop(wt),this.setAnimationLoop=function(Q){it=Q},this.dispose=function(){}}},Hv=new ae,tp=new Gt;tp.set(-1,0,0,0,1,0,0,0,1);function Gv(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Yh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===vn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===vn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),T=v.envMap,y=v.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(tp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vv(n,t,e,i){let s={},r={};function a(v,T){let y=T.program;i.uniformBlockBinding(v,y,s[v.id])}function o(v,T){let y=s[v.id];y===void 0&&(m(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",g));let S=T.program;i.updateUBOMapping(v,S);let w=t.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let T=n.createBuffer(),y=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,y,S),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(v){let T=s[v.id],y=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,x=y.length;w<x;w++){let M=y[w];if(Array.isArray(M))for(let I=0,L=M.length;I<L;I++)u(M[I],w,I,S);else u(M,w,0,S)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(v,T,y,S){if(d(v,T,y,S)===!0){let w=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let I=0;I<x.length;I++){let L=x[I],P=_(L,!0);h(L,v.__data,M),M+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,v.__data)}}function h(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function d(v,T,y,S){let w=v.value,x=T+"_"+y;if(Array.isArray(w)){S[x]===void 0&&(S[x]=[]);let M=S[x],I=!1;for(let L=0;L<w.length;L++)f(w[L],M,L)===!0&&(I=!0);return I}return f(w,S,x)}function f(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let S=T[y];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function m(v){let T=v.uniforms,y=0,S=16;for(let x=0,M=T.length;x<M;x++){let I=Array.isArray(T[x])?T[x]:[T[x]];for(let L=0,P=I.length;L<P;L++){let U=I[L],k=Array.isArray(U.value)?U.value:[U.value],C=Array.isArray(T[x])||Array.isArray(U.value),z=y;for(let V=0,nt=k.length;V<nt;V++){let q=k[V],K=_(q,C),it=y%S,wt=it%K.boundary,Wt=it+wt;y+=wt,Wt!==0&&S-Wt<K.storage&&(y+=S-Wt),V===0&&(z=y),y+=K.storage}let X=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new X((y-z)/Float32Array.BYTES_PER_ELEMENT),U.__offset=z}}let w=y%S;return w>0&&(y+=S-w),v.__size=y,v.__cache={},this}function _(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(v){let T=v.target;T.removeEventListener("dispose",g),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}var Wv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function Xv(){return Mi===null&&(Mi=new Ra(Wv,16,16,xs,an),Mi.name="DFG_LUT",Mi.minFilter=xn,Mi.magFilter=xn,Mi.wrapS=mi,Mi.wrapT=mi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var mc=class{constructor(t={}){let{canvas:e=df(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=wn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let _=f,g=new Set([Dl,Ll,Pl]),p=new Set([wn,ai,Vr,Zs,Rl,Cl]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,w=null,x=[],M=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,P=!1,U=null,k=null,C=null,z=null;this._outputColorSpace=be;let X=0,V=0,nt=null,q=-1,K=null,it=new Re,wt=new Re,Wt=null,Q=new bt(0),vt=0,Tt=e.width,Ut=e.height,yt=1,$t=null,ke=null,Ot=new Re(0,0,Tt,Ut),pe=new Re(0,0,Tt,Ut),xe=!1,ee=new cs,en=new ll,He=!1,Sn=!1,Ce=new ae,fi=new B,Ye=new Re,Vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wn=!1;function Xn(){return nt===null?yt:1}let O=i;function qn(E,F){return e.getContext(E,F)}let Te,Ae,gt,Ge,Ft,Vt,A,b,G,st,tt,ct,pt,J,Z,ut,D,j,Y,dt,ot,ht,Pt;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),O===null){let F="webgl2";if(O=qn(F,E),O===null)throw qn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(E){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Bt("WebGLRenderer: "+E.message),E}function Kt(){Te=new n_(O),Te.init(),ot=new Ov(O,Te),Ae=new Xx(O,Te,t,ot),gt=new Fv(O,Te),Ae.reversedDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),k=O.createFramebuffer(),C=O.createFramebuffer(),z=O.createFramebuffer(),Ge=new r_(O),Ft=new bv,Vt=new kv(O,Te,gt,Ft,Ae,ot,Ge),A=new e_(L),b=new o0(O),ht=new Vx(O,b),G=new i_(O,b,Ge,ht),st=new o_(O,G,b,ht,Ge),j=new a_(O,Ae,Vt),Z=new qx(Ft),tt=new Mv(L,A,Te,Ae,ht,Z),ct=new Gv(L,Ft),pt=new wv,J=new Iv(Te),D=new Gx(L,A,gt,st,m,l),ut=new Uv(L,st,Ae),Pt=new Vv(O,Ge,Ae,gt),Y=new Wx(O,Te,Ge),dt=new s_(O,Te,Ge),Ge.programs=tt.programs,L.capabilities=Ae,L.extensions=Te,L.properties=Ft,L.renderLists=pt,L.shadowMap=ut,L.state=gt,L.info=Ge}_!==wn&&(I=new c_(_,e.width,e.height,o,s,r));let at=new ou(L,O);this.xr=at,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=Te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(E){E!==void 0&&(yt=E,this.setSize(Tt,Ut,!1))},this.getSize=function(E){return E.set(Tt,Ut)},this.setSize=function(E,F,$=!0){if(at.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=E,Ut=F,e.width=Math.floor(E*yt),e.height=Math.floor(F*yt),$===!0&&(e.style.width=E+"px",e.style.height=F+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Tt*yt,Ut*yt).floor()},this.setDrawingBufferSize=function(E,F,$){Tt=E,Ut=F,yt=$,e.width=Math.floor(E*$),e.height=Math.floor(F*$),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(_===wn){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(it)},this.getViewport=function(E){return E.copy(Ot)},this.setViewport=function(E,F,$,H){E.isVector4?Ot.set(E.x,E.y,E.z,E.w):Ot.set(E,F,$,H),gt.viewport(it.copy(Ot).multiplyScalar(Xn()).round())},this.getScissor=function(E){return E.copy(pe)},this.setScissor=function(E,F,$,H){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,F,$,H),gt.scissor(wt.copy(pe).multiplyScalar(Xn()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){gt.setScissorTest(xe=E)},this.setOpaqueSort=function(E){$t=E},this.setTransparentSort=function(E){ke=E},this.getClearColor=function(E){return E.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,$=!0){let H=0;if(E){let W=!1;if(nt!==null){let mt=nt.texture.format;W=g.has(mt)}if(W){let mt=nt.texture.type,Et=p.has(mt),ft=D.getClearColor(),Mt=D.getClearAlpha(),It=ft.r,Xt=ft.g,ne=ft.b;Et?(v[0]=It,v[1]=Xt,v[2]=ne,v[3]=Mt,O.clearBufferuiv(O.COLOR,0,v)):(T[0]=It,T[1]=Xt,T[2]=ne,T[3]=Mt,O.clearBufferiv(O.COLOR,0,T))}else H|=O.COLOR_BUFFER_BIT}F&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),D.dispose(),pt.dispose(),J.dispose(),Vt.dispose(),Ft.dispose(),A.dispose(),st.dispose(),G.dispose(),ht.dispose(),Pt.dispose(),tt.dispose(),at.dispose(),at.removeEventListener("sessionstart",Xu),at.removeEventListener("sessionend",qu),Rs.stop()};function Nt(E){E.preventDefault(),wa("WebGLRenderer: Context Lost."),P=!0}function Zt(){wa("WebGLRenderer: Context Restored."),P=!1;let E=Ge.autoReset,F=ut.enabled,$=ut.autoUpdate,H=ut.needsUpdate,W=ut.type;Kt(),Ge.autoReset=E,ut.enabled=F,ut.autoUpdate=$,ut.needsUpdate=H,ut.type=W}function xt(E){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function me(E){let F=E.target;F.removeEventListener("dispose",me),Je(F)}function Je(E){ns(E),Ft.remove(E)}function ns(E){let F=Ft.get(E).programs;F!==void 0&&(F.forEach(function($){tt.releaseProgram($)}),E.isShaderMaterial&&tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,$,H,W,mt){F===null&&(F=Vn);let Et=W.isMesh&&W.matrixWorld.determinantAffine()<0,ft=ym(E,F,$,H,W);gt.setMaterial(H,Et);let Mt=$.index,It=1;if(H.wireframe===!0){if(Mt=G.getWireframeAttribute($),Mt===void 0)return;It=2}let Xt=$.drawRange,ne=$.attributes.position,At=Xt.start*It,ie=(Xt.start+Xt.count)*It;mt!==null&&(At=Math.max(At,mt.start*It),ie=Math.min(ie,(mt.start+mt.count)*It)),Mt!==null?(At=Math.max(At,0),ie=Math.min(ie,Mt.count)):ne!=null&&(At=Math.max(At,0),ie=Math.min(ie,ne.count));let Oe=ie-At;if(Oe<0||Oe===1/0)return;ht.setup(W,H,ft,$,Mt);let ye,_e=Y;if(Mt!==null&&(ye=b.get(Mt),_e=dt,_e.setIndex(ye)),W.isMesh)H.wireframe===!0?(gt.setLineWidth(H.wireframeLinewidth*Xn()),_e.setMode(O.LINES)):_e.setMode(O.TRIANGLES);else if(W.isLine){let ln=H.linewidth;ln===void 0&&(ln=1),gt.setLineWidth(ln*Xn()),W.isLineSegments?_e.setMode(O.LINES):W.isLineLoop?_e.setMode(O.LINE_LOOP):_e.setMode(O.LINE_STRIP)}else W.isPoints?_e.setMode(O.POINTS):W.isSprite&&_e.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))_e.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ln=W._multiDrawStarts,Rt=W._multiDrawCounts,mn=W._multiDrawCount,de=Mt?b.get(Mt).bytesPerElement:1,Cs=Ft.get(H).currentProgram.getUniforms();for(let cn=0;cn<mn;cn++)Cs.setValue(O,"_gl_DrawID",cn),_e.render(ln[cn]/de,Rt[cn])}else if(W.isInstancedMesh)_e.renderInstances(At,Oe,W.count);else if($.isInstancedBufferGeometry){let ln=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Rt=Math.min($.instanceCount,ln);_e.renderInstances(At,Oe,Rt)}else _e.render(At,Oe)};function Wu(E,F,$,H){U!==null&&E.isNodeMaterial&&U.setObject(H,E),He===!0&&Z.setState(E,$,!1),E.transparent===!0&&E.side===rn&&E.forceSinglePass===!1?(E.side=vn,E.needsUpdate=!0,ca(E,F,H),E.side=ms,E.needsUpdate=!0,ca(E,F,H),E.side=rn):ca(E,F,H)}this.compile=function(E,F,$=null){$===null&&($=E),U!==null&&U.renderStart(E,F,$),w=J.get($),w.init(F),M.push(w),$.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),E!==$&&E.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),Sn=this.localClippingEnabled,He=Z.init(this.clippingPlanes,Sn),He===!0&&Z.setGlobalState(this.clippingPlanes,F),U!==null&&ut.render(w.state.shadowsArray,$,F);let H=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let mt=W.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){let ft=mt[Et];Wu(ft,$,F,W),H.add(ft)}else Wu(mt,$,F,W),H.add(mt)}),w=M.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(E,F,$=null){let H=this.compile(E,F,$);return new Promise(W=>{function mt(){if(H.forEach(function(Et){let Mt=Ft.get(Et).currentProgram;(Mt===void 0||Mt.isReady())&&H.delete(Et)}),H.size===0){W(E);return}setTimeout(mt,10)}Te.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Zc=null;function _m(E){Zc&&Zc(E)}function Xu(){Rs.stop()}function qu(){Rs.start()}let Rs=new Wf;Rs.setAnimationLoop(_m),typeof self<"u"&&Rs.setContext(self),this.setAnimationLoop=function(E){Zc=E,at.setAnimationLoop(E),E===null?Rs.stop():Rs.start()},at.addEventListener("sessionstart",Xu),at.addEventListener("sessionend",qu),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(E,F);let $=at.enabled===!0&&at.isPresenting===!0,H=I!==null&&(nt===null||$)&&I.begin(L,nt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(F),F=at.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,F,nt),w=J.get(E,M.length),w.init(F),w.state.textureUnits=Vt.getTextureUnits(),M.push(w),Ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?en.setFromArrayCamera(F):ee.setFromProjectionMatrix(Ce,Yn,F.reversedDepth),Sn=this.localClippingEnabled,He=Z.init(this.clippingPlanes,Sn),S=pt.get(E,x.length),S.init(),x.push(S),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let Et=L.xr.getDepthSensingMesh();Et!==null&&Kc(Et,F,-1/0,L.sortObjects)}Kc(E,F,0,L.sortObjects),S.finish(),U!==null&&U.updateLights(w.state.lightsArray),L.sortObjects===!0&&S.sort($t,ke),Wn=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Wn&&D.addToRenderList(S,E),this.info.autoReset===!0&&this.info.reset(),He===!0&&Z.beginShadows();let W=w.state.shadowsArray;if(ut.render(W,E,F),He===!0&&Z.endShadows(),(H&&I.hasRenderPass())===!1){let Et=S.opaque,ft=S.transmissive;if(w.setupLights(),F.isArrayCamera){let Mt=F.cameras;if(ft.length>0)for(let It=0,Xt=Mt.length;It<Xt;It++){let ne=Mt[It];Yu(Et,ft,E,ne)}Wn&&D.render(E);for(let It=0,Xt=Mt.length;It<Xt;It++){let ne=Mt[It];$u(S,E,ne,ne.viewport)}}else ft.length>0&&Yu(Et,ft,E,F),Wn&&D.render(E),$u(S,E,F)}nt!==null&&V===0&&(Vt.updateMultisampleRenderTarget(nt),Vt.updateRenderTargetMipmap(nt)),H&&I.end(L),E.isScene===!0&&E.onAfterRender(L,E,F),ht.resetDefaultState(),q=-1,K=null,M.pop(),M.length>0?(w=M[M.length-1],Vt.setTextureUnits(w.state.textureUnits),He===!0&&Z.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,U!==null&&U.renderEnd()};function Kc(E,F,$,H){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Et=F.isArrayCamera?en:ee;if(!E.frustumCulled||E.intersectsFrustum(Et)){H&&Ye.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ce);let ft=st.update(E),Mt=E.material;Mt.visible&&S.push(E,ft,Mt,$,Ye.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Et=F.isArrayCamera?en:ee;if(!E.frustumCulled||E.intersectsFrustum(Et)){let ft=st.update(E),Mt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ye.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ye.copy(ft.boundingSphere.center)),Ye.applyMatrix4(E.matrixWorld).applyMatrix4(Ce)),Array.isArray(Mt)){let It=ft.groups;for(let Xt=0,ne=It.length;Xt<ne;Xt++){let At=It[Xt],ie=Mt[At.materialIndex];ie&&ie.visible&&S.push(E,ft,ie,$,Ye.z,At,F)}}else Mt.visible&&S.push(E,ft,Mt,$,Ye.z,null,F)}}}let mt=E.children;for(let Et=0,ft=mt.length;Et<ft;Et++)Kc(mt[Et],F,$,H)}function $u(E,F,$,H){let{opaque:W,transmissive:mt,transparent:Et}=E;w.setupLightsView($),He===!0&&Z.setGlobalState(L.clippingPlanes,$),H&&gt.viewport(it.copy(H)),W.length>0&&xo(W,F,$),mt.length>0&&xo(mt,F,$),Et.length>0&&xo(Et,F,$),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Yu(E,F,$,H){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let At=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Ue(1,1,{generateMipmaps:!0,type:At?an:wn,minFilter:$i,samples:Math.max(4,Ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let mt=w.state.transmissionRenderTarget[H.id],Et=H.viewport||it;mt.setSize(Et.z*L.transmissionResolutionScale,Et.w*L.transmissionResolutionScale);let ft=L.getRenderTarget(),Mt=L.getActiveCubeFace(),It=L.getActiveMipmapLevel();L.setRenderTarget(mt),L.getClearColor(Q),vt=L.getClearAlpha(),vt<1&&L.setClearColor(16777215,.5),L.clear(),Wn&&D.render($);let Xt=L.toneMapping;L.toneMapping=yi;let ne=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),He===!0&&Z.setGlobalState(L.clippingPlanes,H),xo(E,$,H),Vt.updateMultisampleRenderTarget(mt),Vt.updateRenderTargetMipmap(mt),Te.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let ie=0,Oe=F.length;ie<Oe;ie++){let ye=F[ie],{object:_e,geometry:ln,material:Rt,group:mn}=ye;if(Rt.side===rn&&_e.layers.test(H.layers)){let de=Rt.side;Rt.side=vn,Rt.needsUpdate=!0,Ju(_e,$,H,ln,Rt,mn),Rt.side=de,Rt.needsUpdate=!0,At=!0}}At===!0&&(Vt.updateMultisampleRenderTarget(mt),Vt.updateRenderTargetMipmap(mt))}L.setRenderTarget(ft,Mt,It),L.setClearColor(Q,vt),ne!==void 0&&(H.viewport=ne),L.toneMapping=Xt}function xo(E,F,$){let H=F.isScene===!0?F.overrideMaterial:null;for(let W=0,mt=E.length;W<mt;W++){let Et=E[W],{object:ft,geometry:Mt,group:It}=Et,Xt=Et.material;Xt.allowOverride===!0&&H!==null&&(Xt=H),ft.layers.test($.layers)&&Ju(ft,F,$,Mt,Xt,It)}}function Ju(E,F,$,H,W,mt){U!==null&&W.isNodeMaterial&&U.setObject(E,W),E.onBeforeRender(L,F,$,H,W,mt),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(L,F,$,H,E,mt),W.transparent===!0&&W.side===rn&&W.forceSinglePass===!1?(W.side=vn,W.needsUpdate=!0,L.renderBufferDirect($,F,H,W,E,mt),W.side=ms,W.needsUpdate=!0,L.renderBufferDirect($,F,H,W,E,mt),W.side=rn):L.renderBufferDirect($,F,H,W,E,mt),E.onAfterRender(L,F,$,H,W,mt)}function Zu(E){let F=0;for(let $ of E)$.texture!==null&&F++;return F}function ca(E,F,$){F.isScene!==!0&&(F=Vn);let H=Ft.get(E),W=w.state.lights,mt=w.state.shadowsArray,Et=W.state.version,ft=tt.getParameters(E,W.state,mt,F,$,w.state.lightProbeGridArray),Mt=tt.getProgramCacheKey(ft),It=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let Xt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=A.get(E.envMap||H.environment,Xt),H.envMapRotation=H.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,It===void 0&&(E.addEventListener("dispose",me),It=new Map,H.programs=It,H.programVariants=new Map);let ne=It.get(Mt);if(ne!==void 0){if(H.currentProgram===ne&&H.lightsStateVersion===Et)return Qu(E,ft),ne}else ft.uniforms=tt.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,$,ft),E.onBeforeCompile(ft,L),ne=tt.acquireProgram(ft,Mt),It.set(Mt,ne),H.uniforms=ft.uniforms;let At=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=Z.uniform),Qu(E,ft),H.needsLights=bm(E),H.lightsStateVersion=Et,H.needsLights&&(At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.sunLights.value=W.state.sun,At.sunLightShadows.value=W.state.sunShadow,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.sunShadowMatrix.value=W.state.sunShadowMatrix,At.sunShadowCascade.value=W.state.sunShadowCascade,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix),H.numLightProbeGrids=Zu(w.state.lightProbeGridArray),H.currentProgram=ne,H.uniformsList=null,ne}function vm(E,F,$,H,W){let mt=Ft.get(E),Et=mt.currentProgram.id+","+H+","+W,ft=mt.programVariants.get(Et);return ft===void 0?(ft=ca(E,F,$),mt.programVariants.set(Et,ft)):(mt.currentProgram=ft,mt.uniformsList=null,mt.outputColorSpace=H,mt.toneMapping=W),ft}function Ku(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Xr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Qu(E,F){let $=Ft.get(E);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function ym(E,F,$,H,W){F.isScene!==!0&&(F=Vn),Vt.resetTextureUnits();let mt=F.fog,Et=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,ft=nt===null?L.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:te.workingColorSpace,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,It=A.get(H.envMap||Et,Mt),Xt=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ne=!!$.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!$.morphAttributes.position,ie=!!$.morphAttributes.normal,Oe=!!$.morphAttributes.color,ye=yi;H.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ye=L.toneMapping);let _e=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ln=_e!==void 0?_e.length:0,Rt=Ft.get(H),mn=w.state.lights;if(He===!0&&(Sn===!0||E!==K)){let Ie=E===K&&H.id===q;Z.setState(H,E,Ie)}let de=!1,Cs=!1;H.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==mn.state.version||W.isBatchedMesh&&Rt.batching===!1||!W.isBatchedMesh&&Rt.batching===!0||W.isBatchedMesh&&Rt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Rt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Rt.instancing===!1||!W.isInstancedMesh&&Rt.instancing===!0||W.isSkinnedMesh&&Rt.skinning===!1||!W.isSkinnedMesh&&Rt.skinning===!0||W.isInstancedMesh&&Rt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Rt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Rt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Rt.instancingMorph===!1&&W.morphTexture!==null||Rt.envMap!==It||H.fog===!0&&Rt.fog!==mt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Z.numPlanes||Rt.numIntersection!==Z.numIntersection)||Rt.vertexAlphas!==Xt||Rt.vertexTangents!==ne||Rt.morphTargets!==At||Rt.morphNormals!==ie||Rt.morphColors!==Oe||Rt.morphTargetsCount!==ln||Rt.numLightProbeGrids!==Zu(w.state.lightProbeGridArray)?de=!0:(Rt.outputColorSpace!==ft||Rt.toneMapping!==ye)&&(Cs=!0):(de=!0,Rt.__version=H.version);let cn=Rt.currentProgram;(de===!0||Cs===!0)&&(cn=Cs===!0?vm(H,F,W,ft,ye):ca(H,F,W),U&&H.isNodeMaterial&&U.onUpdateProgram(H,cn,Rt));let _o=!1,is=!1,Is=!1,ce=cn.getUniforms(),nn=Rt.uniforms;if(gt.useProgram(cn.program)&&(_o=!0,is=!0,Is=!0),H.id!==q&&(q=H.id,is=!0),_o||K!==E){gt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ce.setValue(O,"projectionMatrix",E.projectionMatrix),ce.setValue(O,"viewMatrix",E.matrixWorldInverse);let Ze=ce.map.cameraPosition;Ze!==void 0&&Ze.setValue(O,fi.setFromMatrixPosition(E.matrixWorld)),Ae.logarithmicDepthBuffer&&ce.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ce.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,is=!0,Is=!0)}if(Rt.needsLights&&(mn.state.sunShadowMap.length>0&&ce.setValue(O,"sunShadowMap",mn.state.sunShadowMap,Vt),mn.state.directionalShadowMap.length>0&&ce.setValue(O,"directionalShadowMap",mn.state.directionalShadowMap,Vt),mn.state.spotShadowMap.length>0&&ce.setValue(O,"spotShadowMap",mn.state.spotShadowMap,Vt),mn.state.pointShadowMap.length>0&&ce.setValue(O,"pointShadowMap",mn.state.pointShadowMap,Vt)),W.isSkinnedMesh){ce.setOptional(O,W,"bindMatrix"),ce.setOptional(O,W,"bindMatrixInverse");let Ie=W.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ce.setValue(O,"boneTexture",Ie.boneTexture,Vt))}W.isBatchedMesh&&(ce.setOptional(O,W,"batchingTexture"),ce.setValue(O,"batchingTexture",W._matricesTexture,Vt),ce.setOptional(O,W,"batchingIdTexture"),ce.setValue(O,"batchingIdTexture",W._indirectTexture,Vt),ce.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&ce.setValue(O,"batchingColorTexture",W._colorsTexture,Vt));let ei=$.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&j.update(W,$,cn),(is||Rt.receiveShadow!==W.receiveShadow)&&(Rt.receiveShadow=W.receiveShadow,ce.setValue(O,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(nn.envMapIntensity.value=F.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Xv()),is){if(ce.setValue(O,"toneMappingExposure",L.toneMappingExposure),Rt.needsLights&&Mm(nn,Is),mt&&H.fog===!0&&ct.refreshFogUniforms(nn,mt),ct.refreshMaterialUniforms(nn,H,yt,Ut,w.state.transmissionRenderTarget[E.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){let Ie=y,Ze=0;for(let Di of w.state.lightProbeGridArray)Di.texture!==null&&(Ie.textures[Ze]=Di.texture,Ie.min[Ze]=Di.boundingBox.min,Ie.max[Ze]=Di.boundingBox.max,Ie.resolution[Ze]=Di.resolution,Ze++);for(let Di in Ie)Ie[Di].length=Ze;nn.probesSH.value=Ie.textures,nn.probesMin.value=Ie.min,nn.probesMax.value=Ie.max,nn.probesResolution.value=Ie.resolution}Xr.upload(O,Ku(Rt),nn,Vt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Xr.upload(O,Ku(Rt),nn,Vt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ce.setValue(O,"center",W.center),ce.setValue(O,"modelViewMatrix",W.modelViewMatrix),ce.setValue(O,"normalMatrix",W.normalMatrix),ce.setValue(O,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let Ie=H.uniformsGroups;for(let Ze=0,Di=Ie.length;Ze<Di;Ze++){let td=Ie[Ze];Pt.update(td,cn),Pt.bind(td,cn)}}return cn}function Mm(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function bm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(E,F,$){let H=Ft.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ft.get(E.texture).__webglTexture=F,Ft.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:$,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let $=Ft.get(E);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,$=0){nt=E,X=F,V=$;let H=null,W=!1,mt=!1;if(E){let ft=Ft.get(E);if(ft.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(O.FRAMEBUFFER,ft.__webglFramebuffer),it.copy(E.viewport),wt.copy(E.scissor),Wt=E.scissorTest,gt.viewport(it),gt.scissor(wt),gt.setScissorTest(Wt),q=-1;return}else if(ft.__webglFramebuffer===void 0)Vt.setupRenderTarget(E);else if(ft.__hasExternalTextures)Vt.rebindTextures(E,Ft.get(E.texture).__webglTexture,Ft.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Xt=E.depthTexture;if(ft.__boundDepthTexture!==Xt){if(Xt!==null&&Ft.has(Xt)&&(E.width!==Xt.image.width||E.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(E)}}let Mt=E.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(mt=!0);let It=Ft.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[F])?H=It[F][$]:H=It[F],W=!0):E.samples>0&&Vt.useMultisampledRTT(E)===!1?H=Ft.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?H=It[$]:H=It,it.copy(E.viewport),wt.copy(E.scissor),Wt=E.scissorTest}else it.copy(Ot).multiplyScalar(yt).floor(),wt.copy(pe).multiplyScalar(yt).floor(),Wt=xe;if($!==0&&(H=k),gt.bindFramebuffer(O.FRAMEBUFFER,H)&&gt.drawBuffers(E,H),gt.viewport(it),gt.scissor(wt),gt.setScissorTest(Wt),W){let ft=Ft.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,ft.__webglTexture,$)}else if(mt){let ft=F;for(let Mt=0;Mt<E.textures.length;Mt++){let It=Ft.get(E.textures[Mt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Mt,It.__webglTexture,$,ft)}}else if(E!==null&&$!==0){let ft=Ft.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ft.__webglTexture,$)}q=-1};function ju(E){let F=Ft.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=Ae.textureFormatReadable(E.format),F.__typeReadable=Ae.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,$,H,W,mt,Et,ft=0){if(!(E&&E.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ft.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){gt.bindFramebuffer(O.FRAMEBUFFER,Mt);try{let It=E.textures[ft],Xt=It.format,ne=It.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ft);let At=ju(It);if(At.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-H&&$>=0&&$<=E.height-W&&O.readPixels(F,$,H,W,ot.convert(Xt),ot.convert(ne),mt)}finally{let It=nt!==null?Ft.get(nt).__webglFramebuffer:null;gt.bindFramebuffer(O.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,F,$,H,W,mt,Et,ft=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ft.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(F>=0&&F<=E.width-H&&$>=0&&$<=E.height-W){gt.bindFramebuffer(O.FRAMEBUFFER,Mt);let It=E.textures[ft],Xt=It.format,ne=It.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ft);let At=ju(It);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ie),O.bufferData(O.PIXEL_PACK_BUFFER,mt.byteLength,O.STREAM_READ),O.readPixels(F,$,H,W,ot.convert(Xt),ot.convert(ne),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Oe=nt!==null?Ft.get(nt).__webglFramebuffer:null;gt.bindFramebuffer(O.FRAMEBUFFER,Oe);let ye=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await pf(O,ye,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ie),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,mt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ie),O.deleteSync(ye),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,$=0){let H=Math.pow(2,-$),W=Math.floor(E.image.width*H),mt=Math.floor(E.image.height*H),Et=F!==null?F.x:0,ft=F!==null?F.y:0;Vt.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Et,ft,W,mt),gt.unbindTexture()},this.copyTextureToTexture=function(E,F,$=null,H=null,W=0,mt=0){let Et,ft,Mt,It,Xt,ne,At,ie,Oe,ye=E.isCompressedTexture?E.mipmaps[mt]:E.image;if($!==null)Et=$.max.x-$.min.x,ft=$.max.y-$.min.y,Mt=$.isBox3?$.max.z-$.min.z:1,It=$.min.x,Xt=$.min.y,ne=$.isBox3?$.min.z:0;else{let ce=Math.pow(2,-W);Et=Math.floor(ye.width*ce),ft=Math.floor(ye.height*ce),E.isDataArrayTexture?Mt=ye.depth:E.isData3DTexture?Mt=Math.floor(ye.depth*ce):Mt=1,It=0,Xt=0,ne=0}H!==null?(At=H.x,ie=H.y,Oe=H.z):(At=0,ie=0,Oe=0);let _e=ot.convert(F.format),ln=ot.convert(F.type),Rt;F.isData3DTexture?(Vt.setTexture3D(F,0),Rt=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Vt.setTexture2DArray(F,0),Rt=O.TEXTURE_2D_ARRAY):(Vt.setTexture2D(F,0),Rt=O.TEXTURE_2D),gt.activeTexture(O.TEXTURE0),gt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),gt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),gt.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let mn=gt.getParameter(O.UNPACK_ROW_LENGTH),de=gt.getParameter(O.UNPACK_IMAGE_HEIGHT),Cs=gt.getParameter(O.UNPACK_SKIP_PIXELS),cn=gt.getParameter(O.UNPACK_SKIP_ROWS),_o=gt.getParameter(O.UNPACK_SKIP_IMAGES);gt.pixelStorei(O.UNPACK_ROW_LENGTH,ye.width),gt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ye.height),gt.pixelStorei(O.UNPACK_SKIP_PIXELS,It),gt.pixelStorei(O.UNPACK_SKIP_ROWS,Xt),gt.pixelStorei(O.UNPACK_SKIP_IMAGES,ne);let is=E.isDataArrayTexture||E.isData3DTexture,Is=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let ce=Ft.get(E),nn=Ft.get(F),ei=Ft.get(ce.__renderTarget),Ie=Ft.get(nn.__renderTarget);gt.bindFramebuffer(O.READ_FRAMEBUFFER,ei.__webglFramebuffer),gt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ze=0;Ze<Mt;Ze++)is&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.get(E).__webglTexture,W,ne+Ze),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.get(F).__webglTexture,mt,Oe+Ze)),O.blitFramebuffer(It,Xt,It+Et,Xt+ft,At,ie,At+Et,ie+ft,O.DEPTH_BUFFER_BIT,O.NEAREST);gt.bindFramebuffer(O.READ_FRAMEBUFFER,null),gt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||Ft.has(E)){let ce=Ft.get(E),nn=Ft.get(F);gt.bindFramebuffer(O.READ_FRAMEBUFFER,C),gt.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let ei=0;ei<Mt;ei++)is?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ce.__webglTexture,W,ne+ei):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ce.__webglTexture,W),Is?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,nn.__webglTexture,mt,Oe+ei):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,nn.__webglTexture,mt),W!==0?O.blitFramebuffer(It,Xt,It+Et,Xt+ft,At,ie,At+Et,ie+ft,O.COLOR_BUFFER_BIT,O.NEAREST):Is?O.copyTexSubImage3D(Rt,mt,At,ie,Oe+ei,It,Xt,Et,ft):O.copyTexSubImage2D(Rt,mt,At,ie,It,Xt,Et,ft);gt.bindFramebuffer(O.READ_FRAMEBUFFER,null),gt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Is?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Rt,mt,At,ie,Oe,Et,ft,Mt,_e,ln,ye.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Rt,mt,At,ie,Oe,Et,ft,Mt,_e,ye.data):O.texSubImage3D(Rt,mt,At,ie,Oe,Et,ft,Mt,_e,ln,ye):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,mt,At,ie,Et,ft,_e,ln,ye.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,mt,At,ie,ye.width,ye.height,_e,ye.data):O.texSubImage2D(O.TEXTURE_2D,mt,At,ie,Et,ft,_e,ln,ye);gt.pixelStorei(O.UNPACK_ROW_LENGTH,mn),gt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de),gt.pixelStorei(O.UNPACK_SKIP_PIXELS,Cs),gt.pixelStorei(O.UNPACK_SKIP_ROWS,cn),gt.pixelStorei(O.UNPACK_SKIP_IMAGES,_o),mt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(Rt),gt.unbindTexture()},this.initRenderTarget=function(E){Ft.get(E).__webglFramebuffer===void 0&&Vt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Vt.setTextureCube(E,0):E.isData3DTexture?Vt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Vt.setTexture2DArray(E,0):Vt.setTexture2D(E,0),gt.unbindTexture()},this.resetState=function(){X=0,V=0,nt=null,gt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var $r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},qv=new Vs(-1,1,1,-1,0,1),lu=class extends Ve{constructor(){super(),this.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new he([0,2,0,0,2,0],2))}},$v=new lu,_s=class{constructor(t){this._mesh=new kt($v,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,qv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Yr=class extends Bn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Fe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Zi.clone(t.uniforms),this.material=new Fe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new _s(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var to=class extends Bn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_c=class extends Bn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var vc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new St);this._width=i.width,this._height=i.height,e=new Ue(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yr($r),this.copyPass.material.blending=qi,this.timer=new ka}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}to!==void 0&&(a instanceof to?i=!0:a instanceof _c&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new St);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var yc=class extends Bn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new bt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var ep={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Jr=class n extends Bn{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new St(t.x,t.y):new St(256,256),this.clearColor=new bt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ue(r,a,{type:an,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Ue(r,a,{type:an,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Ue(r,a,{type:an,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=ep;this.highPassUniforms=Zi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new St(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Zi.clone($r.uniforms),this.blendMaterial=new Fe({uniforms:this.copyUniforms,vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader,premultipliedAlpha:!0,blending:yn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new bt,this._oldClearAlpha=1,this._basic=new Le,this._fsQuad=new _s(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new St(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Fe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new St(.5,.5)},direction:{value:new St(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Fe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Jr.BlurDirectionX=new St(1,0);Jr.BlurDirectionY=new St(0,1);var eo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Mc=class extends Bn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Zi.clone(eo.uniforms),this.material=new Br({name:eo.name,uniforms:this.uniforms,vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader}),this._fsQuad=new _s(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===za?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$s?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ga?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ha&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Ki(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var cu=(n,t,e)=>Math.max(t,Math.min(e,n));function bc(n,t){let e=document.createElement("canvas");e.width=n,e.height=t;let i=e.getContext("2d");return i.imageSmoothingEnabled=!1,[e,i]}function np(n,t,e,i,s,r=!1){let a=t[0].length;for(let o=0;o<t.length;o++){let l=t[o];for(let c=0;c<a;c++){let u=l[c];if(u==="."||u===" ")continue;let h=e[u];h&&(n.fillStyle=h,n.fillRect(i+(r?a-1-c:c),s+o,1,1))}}}var Yt=16,tr=32,no=16,vs=tr*no,hu=n=>{let t=parseInt(n.slice(1),16);return[t>>16&255,t>>8&255,t&255]},Zr=n=>n<0?0:n>255?255:n|0,uu=class{constructor(t){this.d=new Uint8ClampedArray(Yt*Yt*4),this.e=new Uint8ClampedArray(Yt*Yt*4),this.r=Ki(t),this.hasE=!1}set(t,e,i,s=1,r=255){t=(t%Yt+Yt)%Yt,e=(e%Yt+Yt)%Yt;let[a,o,l]=typeof i=="string"?hu(i):i,c=(e*Yt+t)*4;this.d[c]=Zr(a*s),this.d[c+1]=Zr(o*s),this.d[c+2]=Zr(l*s),this.d[c+3]=r}get(t,e){t=(t%Yt+Yt)%Yt,e=(e%Yt+Yt)%Yt;let i=(e*Yt+t)*4;return[this.d[i],this.d[i+1],this.d[i+2]]}mul(t,e,i){let s=this.get(t,e);this.set(t,e,s,i)}glow(t,e,i,s=1){this.hasE=!0,t=(t%Yt+Yt)%Yt,e=(e%Yt+Yt)%Yt;let[r,a,o]=typeof i=="string"?hu(i):i,l=(e*Yt+t)*4;this.e[l]=Zr(r*s),this.e[l+1]=Zr(a*s),this.e[l+2]=Zr(o*s),this.e[l+3]=255}fill(t,e=.08){for(let i=0;i<Yt;i++)for(let s=0;s<Yt;s++)this.set(s,i,t[this.r()*t.length|0],1+(this.r()-.5)*e)}noise(t,e){for(let i=0;i<Yt;i++)for(let s=0;s<Yt;s++){let r=this.r(),a=0;if(e){let o=0;for(a=0;a<e.length&&(o+=e[a],!(r<o));a++);a=Math.min(a,t.length-1)}else a=r*t.length|0;this.set(s,i,t[a])}}};function zn(n,t=4){let e=[],i=Math.ceil(Yt/t)+1;for(let s=0;s<i*i;s++)e.push(n());return(s,r)=>{let a=s/t,o=r/t,l=Math.floor(a),c=Math.floor(o),u=a-l,h=o-c,d=i-1,f=(g,p)=>e[p%d*i+g%d],m=u*u*(3-2*u),_=h*h*(3-2*h);return(f(l,c)*(1-m)+f(l+1,c)*m)*(1-_)+(f(l,c+1)*(1-m)+f(l+1,c+1)*m)*_}}function Kr(n,t,e,i,s={}){let r=[];for(let a=0;a<t;a++)r.push([n.r()*Yt,n.r()*Yt,e[n.r()*e.length|0]]);for(let a=0;a<Yt;a++)for(let o=0;o<Yt;o++){let l=1e9,c=1e9,u=null;for(let h of r)for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++){let m=o+.5-(h[0]+d*Yt),_=a+.5-(h[1]+f*Yt),g=Math.hypot(m,_)*(s.squash?1+Math.abs(_)*.02:1);g<l?(c=l,l=g,u={p:h,dx:m,dy:_}):g<c&&(c=g)}if(c-l<(s.edge||1.1))n.set(o,a,i,.9+n.r()*.2);else{let h=1+(n.r()-.5)*.12;u.dy>1.2&&u.dx>.5&&(h*=.86),(u.dy<-1.5||u.dx<-1.6)&&(h*=1.1),n.set(o,a,u.p[2],h)}}}function Sc(n,t){let e=hu(t);for(let i=0;i<16;i++)for(let s=0;s<16;s++){let r=.9+n.r()*.14+((s+i*3)%7===0?-.12:0);n.set(s,i,e,r)}}var js={grass:["#4c8a2a","#5a9c30","#66ac36","#72ba3e","#548f2c"],dirt:["#7a5438","#6a4830","#86603f","#5c3f2a","#73503a"],stone:["#828282","#7a7a7a","#8c8c8c","#747474","#6c6c6c"]},li={grass_top(n){let t=zn(n.r,5);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=t(i,e),r=js.grass[n.r()*5|0];n.set(i,e,r,.88+s*.26)}for(let e=0;e<14;e++){let i=n.r()*16|0,s=n.r()*16|0;n.set(i,s,"#86cc4a"),n.set(i,s+1,"#3e7422")}},grass_side(n){li.dirt(n);for(let t=0;t<16;t++){let e=3+(n.r()*3|0)+(t%5===2?1:0);for(let i=0;i<e;i++)n.set(t,i,js.grass[n.r()*5|0],i===e-1?.78:1)}},dirt(n){n.noise(js.dirt);for(let t=0;t<10;t++)n.set(n.r()*16|0,n.r()*16|0,"#a08060");for(let t=0;t<8;t++)n.set(n.r()*16|0,n.r()*16|0,"#4a3020")},path(n){n.noise(["#9a7a4e","#8a6a42","#a88a5a","#7e623e","#b09060"]);for(let t=0;t<9;t++)n.set(n.r()*16|0,n.r()*16|0,"#6a5236")},path_top(n){Kr(n,9,["#a8885a","#9a7a4e","#b49466","#8e7048"],"#6a5236",{edge:.7})},sand(n){n.noise(["#dcc690","#d2ba84","#e4d09c","#c8b07a"])},sandstone(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=t===3||t===11?.82:t===4||t===12?1.07:1;n.set(e,t,["#d8c088","#ceb47c","#e0ca94"][n.r()*3|0],i)}},stone(n){let t=zn(n.r,4);for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.set(i,e,js.stone[n.r()*5|0],.86+t(i,e)*.25);for(let e=0;e<4;e++){let i=n.r()*16|0,s=n.r()*16|0;for(let r=0;r<3;r++)n.set(i+r,s,"#5e5e5e")}},cobble(n){Kr(n,8,["#8a8a8a","#7a7a7a","#969696","#6e6e6e","#838383"],"#4a4a4c")},mossy(n){li.cobble(n);let t=zn(n.r,5);for(let e=0;e<16;e++)for(let i=0;i<16;i++)t(i,e)>.6&&n.set(i,e,js.grass[n.r()*5|0],.85)},stonebrick(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=t/8|0,s=i%2?8:0,r=(e+s)%16;t%8===7||r===15?n.set(e,t,"#4e4e50"):n.set(e,t,js.stone[n.r()*5|0],t%8===0||r===0?1.12:t%8===6?.88:1)}},deepbrick(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=t/4|0,s=i%2?4:0,r=(e+s)%8;t%4===3||r===7?n.set(e,t,"#1c1e26"):n.set(e,t,["#3a3e4c","#343846","#40445a","#30333f"][n.r()*4|0],t%4===0?1.15:1)}},deep(n){let t=zn(n.r,4);for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.set(i,e,["#383c48","#30343e","#40444f","#2c2f38"][n.r()*4|0],.85+t(i,e)*.3)},bricks(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=t/4|0,s=i%2?4:0,r=(e+s)%8;t%4===3||r===7?n.set(e,t,"#b8aca0",.9+n.r()*.1):n.set(e,t,["#9a4a36","#8c4030","#a85440","#7e3a2c"][n.r()*4|0],t%4===0?1.1:1)}},planks(n,t=["#a8804c","#9c7444","#b48a54","#946c40"],e="#5e4226"){for(let i=0;i<16;i++){let s=i/4|0,r=(s*7+3)%16;for(let a=0;a<16;a++){if(i%4===3){n.set(a,i,e);continue}if(a===r){n.set(a,i,e,1.1);continue}let o=Math.sin((a+s*5)*.9+i*2.1)>.75?.88:1;n.set(a,i,t[n.r()*t.length|0],o*(i%4===0?1.08:1))}}},planks_dark(n){li.planks(n,["#5c3e24","#523620","#66462a","#4a301c"],"#2c1c10")},planks_orange(n){li.planks(n,["#d8701e","#c8661a","#e47c26","#bc5e16"],"#6a3008")},log(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=(e*7+(t/3|0)*3)%5===0;n.set(e,t,i?"#3e2a18":["#6a4a2c","#5e4226","#745232"][n.r()*3|0])}},log_top(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=Math.max(Math.abs(e-7.5),Math.abs(t-7.5));i>6.5?n.set(e,t,"#5e4226"):n.set(e,t,(i|0)%2?"#b08a56":"#9a7646",1+(n.r()-.5)*.08)}},leaves(n){let t=zn(n.r,3);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=t(i,e),r=s>.62?"#5aa032":s>.42?"#3f8424":s>.25?"#33701e":"#244e14";n.set(i,e,r,.92+n.r()*.16)}for(let e=0;e<10;e++)n.set(n.r()*16|0,n.r()*16|0,"#76c046")},leaves_dry(n){let t=zn(n.r,3);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=t(i,e);n.set(i,e,s>.6?"#9aa040":s>.35?"#7a8a32":"#586424",.92+n.r()*.16)}},plaster(n){let t=zn(n.r,6);for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.set(i,e,["#ece6d6","#e4ddcb","#f2ecde","#ddd5c2"][n.r()*4|0],.94+t(i,e)*.08);for(let e=0;e<3;e++)n.set(n.r()*16|0,n.r()*16|0,"#c9bfaa")},plaster_base(n){li.plaster(n);for(let t=0;t<16;t++)for(let e=12;e<16;e++)n.mul(t,e,.88-(e-12)*.03)},kemar(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++)n.set(e,t,["#74301f","#6a2a1b","#7e3624"][n.r()*3|0]);for(let t=0;t<16;t++)n.set(t,0,"#3a160c"),n.set(t,15,"#3a160c"),n.set(t,1,"#94442c");for(let t of[3,11])for(let e=-2;e<=2;e++)for(let i=-2;i<=2;i++)i*i+e*e<=5&&n.set(t+i,8+e,i*i+e*e<=1?"#f6d878":"#d4a440")},roof(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=t/4|0,s=i%2?2:0,r=(e+s)%4,a=1-t%4*.06;r===0&&(a*=.8),t%4===3&&(a*=.7),n.set(e,t,["#9a3a24","#8a3220","#a84428"][n.r()*3|0],a)}},roof_dark(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=t/4|0,s=i%2?2:0,r=(e+s)%4,a=1-t%4*.06;r===0&&(a*=.8),t%4===3&&(a*=.7),n.set(e,t,["#5a5048","#4e463e","#645a50"][n.r()*3|0],a)}},wool_orange(n){Sc(n,"#f07c14")},wool_blue(n){Sc(n,"#2a5aa8")},wool_white(n){Sc(n,"#e8e8e4")},wool_navy(n){Sc(n,"#14295a")},glass(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=e===0||t===0||e===15||t===15;n.set(e,t,i?"#c8d8e0":"#5c8ca8",i?1:.9+((e-t+32)%9===0?.6:0))}},window(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++)e<=1||e>=14||t<=1||t>=14||e===7||e===8||t===7?n.set(e,t,"#4a2c18",e<=1||t<=1?1.2:1):(n.set(e,t,"#ffcf6a",.9+n.r()*.15),n.glow(e,t,"#ffb040",.8+n.r()*.3))},window_blue(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++)e<=1||e>=14||t<=1||t>=14||e===7||e===8?n.set(e,t,"#3a2416"):(n.set(e,t,"#9ad8ff",.8+((e+t)%6===0?.3:0)),n.glow(e,t,"#5ab8ff",.5))},lantern(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++)if(e===0||t===0||e===15||t===15||(e===5||e===10)&&t>2&&t<13)n.set(e,t,"#3a2a1c");else{let s=.85+n.r()*.3;n.set(e,t,"#ffd27a",s),n.glow(e,t,"#ffb648",s*1.1)}},glowstone(n){Kr(n,7,["#f0c050","#ffe08a","#d8a040","#ffd060"],"#8a6020");for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=n.get(e,t);n.glow(e,t,i,.9)}},lava(n){let t=zn(n.r,4);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=t(i,e),r=s>.65?"#ffd84a":s>.4?"#ff8a1a":"#d04010";n.set(i,e,r),n.glow(i,e,r,1)}},magma(n){Kr(n,8,["#4a2418","#3a1c12","#5a2a1a"],"#ff6a10",{edge:.9});for(let t=0;t<16;t++)for(let e=0;e<16;e++)n.get(e,t)[0]>200&&n.glow(e,t,"#ff7a20",1.2)},bookshelf(n){let t=["#8a2a22","#2a4a8a","#2a6a3a","#c88a2a","#6a3a7a","#d8d0b8","#a84a1a"];for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.set(i,e,"#5e4226",.95+n.r()*.1);for(let e of[1,9]){let i=1;for(;i<15;){let s=1+(n.r()*2|0),r=5+(n.r()*2|0),a=t[n.r()*t.length|0];for(let o=0;o<s&&i<15;o++,i++)for(let l=e+(6-r);l<e+6;l++)n.set(i,l,a,o===0?1.15:.92)}}for(let e=0;e<16;e++)n.set(e,0,"#3a2414"),n.set(e,7,"#3a2414"),n.set(e,8,"#74522e"),n.set(e,15,"#3a2414")},iron(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++)n.set(e,t,["#c8ccd0","#bcc0c6","#d2d6da"][n.r()*3|0],e===0||t===0?1.08:e===15||t===15?.75:1);for(let[t,e]of[[2,2],[13,2],[2,13],[13,13]])n.set(t,e,"#7c8086")},copper(n){let t=zn(n.r,4);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=t(i,e);n.set(i,e,s>.7?"#5aa888":["#c06a3c","#b05e34","#cc7846"][n.r()*3|0],i%8===0||e%8===0?.8:1)}},circuit(n){for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.set(i,e,["#2e3038","#34363f","#2a2c33"][n.r()*3|0]);let t=[[0,4,9,4],[9,4,9,12],[9,12,16,12],[3,0,3,9],[3,9,6,9],[12,0,12,7],[12,7,16,7]];for(let[e,i,s,r]of t)for(let a=Math.min(e,s);a<=Math.max(e,s);a++)for(let o=Math.min(i,r);o<=Math.max(i,r);o++)n.set(a,o,"#ff7a24"),n.glow(a,o,"#ff6a10",1.1);for(let[e,i]of[[9,4],[3,9],[12,7],[6,9]])n.set(e,i,"#ffe0a0"),n.glow(e,i,"#ffd080",1.4)},terminal(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=e<=1||e>=14||t<=1||t>=13;n.set(e,t,i?"#3a3c44":"#0a1a1e")}for(let t=3;t<12;t+=2){let e=3+(n.r()*2|0),i=3+(n.r()*8|0);for(let s=0;s<i&&e<13;s++,e++){if(n.r()<.15)continue;let r=t===3?"#ffb040":n.r()<.3?"#6ad8ff":"#7aff9a";n.set(e,t,r),n.glow(e,t,r,1)}}for(let t=2;t<14;t++)n.set(t,14,"#55575f")},gold(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++)n.set(e,t,["#f0c840","#e4b830","#fad860"][n.r()*3|0],e===0||t===0?1.12:e===15||t===15?.7:1);for(let t=0;t<6;t++)n.set(n.r()*14+1|0,n.r()*14+1|0,"#fff0a8")},tile(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=((e>>3)+(t>>3))%2,s=e%8===0||t%8===0;n.set(e,t,i?"#d8d4ca":"#a8a49c",s?.82:.97+n.r()*.06)}},marble(n){for(let i=0;i<16;i++)for(let s=0;s<16;s++)n.set(s,i,["#d4cec2","#cac4b8","#ddd7cb"][n.r()*3|0]);let t=2,e=0;for(let i=0;i<22;i++)n.set(t,e,"#b0aaa0"),t+=n.r()<.5?1:0,e+=1,e>15&&(e=0,t+=6)},carpet_orange(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=e<=1||e>=14,s=(e+t)%8===0||(e-t+16)%8===0;n.set(e,t,i?"#f0c048":s?"#ffa040":"#d8641a",.94+n.r()*.1)}},carpet_blue(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=e<=1||e>=14,s=(e+t)%8===0||(e-t+16)%8===0;n.set(e,t,i?"#e8c56b":s?"#3a72c8":"#1f4a8a",.94+n.r()*.1)}},field(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++)n.set(e,t,["#4e9a30","#58a636","#46902a"][n.r()*3|0],e<8?1.08:.92)},field_line(n){li.field(n);for(let t=0;t<16;t++)for(let e=6;e<10;e++)n.set(e,t,"#f4f4ee",.95+n.r()*.08)},seats_orange(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=t>=3&&t<=12&&e%4!==3;n.set(e,t,i?"#ee7a18":"#6a6a6e",i?t<6?1.12:1:.9+n.r()*.1)}},seats_blue(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=t>=3&&t<=12&&e%4!==3;n.set(e,t,i?"#2a5aa8":"#6a6a6e",i?t<6?1.12:1:.9+n.r()*.1)}},concrete(n){n.noise(["#a8a6a0","#a09e98","#b0aea8","#9a9892"])},hay(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++)n.set(e,t,["#d8b040","#c8a034","#e4c050","#b89030"][n.r()*4|0],t===4||t===11?.6:1)},hay_top(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++)n.set(e,t,["#d8b040","#c8a034","#e4c050"][n.r()*3|0],(e+t)%3===0?.85:1)},gravel(n){Kr(n,14,["#8a8680","#7a7670","#9a968e","#6a6660"],"#5a5650",{edge:.5})},crate(n){li.planks(n);for(let t=0;t<16;t++)n.set(t,t,"#4a3018"),n.set(t,0,"#4a3018"),n.set(t,15,"#4a3018"),n.set(0,t,"#4a3018"),n.set(15,t,"#4a3018")},barrel(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=t===2||t===3||t===12||t===13;n.set(e,t,i?"#4a4a50":["#8a5e34","#7e542e","#94683c"][n.r()*3|0],e%4===0&&!i?.8:1)}},barrel_top(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=Math.max(Math.abs(e-7.5),Math.abs(t-7.5));n.set(e,t,i>6.5?"#4a4a50":"#8a5e34",t%4===0?.85:1)}},rock(n){let t=zn(n.r,4);for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.set(i,e,["#8a6a54","#7e604c","#96745c","#6e5242"][n.r()*4|0],.85+t(i,e)*.3);for(let e=0;e<4;e++){let i=n.r()*16|0,s=n.r()*16|0;n.set(i,s,"#4e3a2e"),n.set(i+1,s,"#4e3a2e")}},rock_top(n){li.rock(n);for(let t=0;t<18;t++){let e=n.r()*16|0,i=n.r()*16|0;n.set(e,i,["#7a8a3a","#6a7a32","#8a9a44"][n.r()*3|0])}},rock_dark(n){let t=zn(n.r,4);for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.set(i,e,["#5e4a40","#544238","#685248"][n.r()*3|0],.85+t(i,e)*.3)},painting(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){if(e===0||t===0||e===15||t===15){n.set(e,t,"#c8962c");continue}let s=t<7,r=t>=5+Math.abs(e*3%10-5)*.5&&t<11;n.set(e,t,r?"#7a5a7a":s?t<3?"#ff9a5a":"#ffc87a":"#c8a060")}n.set(11,3,"#fff4c0"),n.set(12,3,"#fff4c0")},photo(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=e<=1||t<=1||e>=14||t>=14;n.set(e,t,i?"#f0ece0":(e+t)%5===0?"#3a6a9a":"#2a4a6a",i?1:.9+n.r()*.2)}for(let t=3;t<13;t++)n.set(t,10,"#e8a040"),n.set(t,11,"#c8782a");n.set(9,5,"#fff0b0"),n.set(10,5,"#fff0b0")},temple(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++)n.set(e,t,"#8a2418",.95+n.r()*.1);for(let t=0;t<16;t++)n.set(t,0,"#f0c040"),n.set(t,15,"#f0c040"),n.set(t,1,"#2a6a5a"),n.set(t,14,"#2a6a5a");for(let t=-3;t<=3;t++)for(let e=-3;e<=3;e++){let i=Math.abs(e)+Math.abs(t);i<=3&&n.set(8+e,8+t,i===3?"#f0c040":i===0?"#fff4b0":i===1?"#2a8aa0":"#ffffff")}},scoreboard(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++)n.set(e,t,"#18181c");for(let t=3;t<13;t+=3)for(let e=2;e<14;e+=2)n.r()<.6&&(n.set(e,t,"#ff9a2a"),n.glow(e,t,"#ff8a1a",1.3))},snowcap(n){n.noise(["#f4f4f8","#e8eaf0","#ffffff"])},farmland(n){for(let t=0;t<16;t++)for(let e=0;e<16;e++)n.set(e,t,js.dirt[n.r()*5|0],t%4===0?.7:1)},map_parchment(n){let t=zn(n.r,5);for(let e=0;e<16;e++)for(let i=0;i<16;i++)n.set(i,e,["#e8d4a4","#dcc694","#f0dcb0"][n.r()*3|0],.9+t(i,e)*.15)},water(n){let t=zn(n.r,4);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=t(i,e);n.set(i,e,s>.65?"#5aa6d8":s>.4?"#3a82c0":"#2a68a8",1)}},ore(n){li.stone(n);for(let t=0;t<4;t++){let e=2+(n.r()*11|0),i=2+(n.r()*11|0);for(let[s,r]of[[0,0],[1,0],[0,1],[1,1]])n.set(e+s,i+r,"#ffb040"),n.glow(e+s,i+r,"#ff9a20",.9)}},crystal(n){Kr(n,6,["#6ad8ff","#3ab0e8","#9ae8ff","#2a90d0"],"#1a4a7a",{edge:.8});for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=n.get(e,t);n.glow(e,t,i,.8)}}},io=[null,{name:"grass",top:"grass_top",side:"grass_side",bottom:"dirt"},{name:"dirt",all:"dirt"},{name:"stone",all:"stone"},{name:"cobble",all:"cobble"},{name:"mossy",all:"mossy"},{name:"stonebrick",all:"stonebrick"},{name:"bricks",all:"bricks"},{name:"planks",all:"planks"},{name:"planks_dark",all:"planks_dark"},{name:"planks_orange",all:"planks_orange"},{name:"log",top:"log_top",side:"log",bottom:"log_top"},{name:"leaves",all:"leaves",foliage:!0},{name:"plaster",all:"plaster"},{name:"plaster_base",top:"plaster",side:"plaster_base",bottom:"plaster"},{name:"kemar",top:"planks_dark",side:"kemar",bottom:"planks_dark"},{name:"roof",all:"roof"},{name:"wool_orange",all:"wool_orange"},{name:"wool_blue",all:"wool_blue"},{name:"wool_white",all:"wool_white"},{name:"glass",all:"glass"},{name:"window",top:"planks_dark",side:"window",bottom:"planks_dark",light:6},{name:"lantern",all:"lantern",light:14},{name:"glowstone",all:"glowstone",light:15},{name:"lava",all:"lava",light:15},{name:"bookshelf",top:"planks",side:"bookshelf",bottom:"planks"},{name:"iron",all:"iron"},{name:"copper",all:"copper"},{name:"circuit",all:"circuit",light:6},{name:"terminal",top:"iron",side:"terminal",bottom:"iron",light:7},{name:"gold",all:"gold"},{name:"tile",all:"tile"},{name:"marble",all:"marble"},{name:"carpet_orange",all:"carpet_orange"},{name:"carpet_blue",all:"carpet_blue"},{name:"field",all:"field"},{name:"field_line",all:"field_line"},{name:"seats_orange",top:"seats_orange",side:"concrete",bottom:"concrete"},{name:"seats_blue",top:"seats_blue",side:"concrete",bottom:"concrete"},{name:"concrete",all:"concrete"},{name:"hay",top:"hay_top",side:"hay",bottom:"hay_top"},{name:"gravel",all:"gravel"},{name:"crate",all:"crate"},{name:"barrel",top:"barrel_top",side:"barrel",bottom:"barrel_top"},{name:"rock",top:"rock_top",side:"rock",bottom:"rock"},{name:"rock_dark",all:"rock_dark"},{name:"painting",top:"planks_dark",side:"painting",bottom:"planks_dark"},{name:"photo",top:"planks_dark",side:"photo",bottom:"planks_dark"},{name:"temple",top:"gold",side:"temple",bottom:"planks_dark"},{name:"scoreboard",all:"scoreboard",light:5},{name:"sand",all:"sand"},{name:"sandstone",top:"sand",side:"sandstone",bottom:"sand"},{name:"path",top:"path_top",side:"path",bottom:"dirt"},{name:"deep",all:"deep"},{name:"deepbrick",all:"deepbrick"},{name:"magma",all:"magma",light:10},{name:"roof_dark",all:"roof_dark"},{name:"leaves_dry",all:"leaves_dry",foliage:!0},{name:"farmland",top:"farmland",side:"dirt",bottom:"dirt"},{name:"parchment",all:"map_parchment"},{name:"window_blue",top:"iron",side:"window_blue",bottom:"iron",light:6},{name:"ore",all:"ore",light:5},{name:"crystal",all:"crystal",light:12},{name:"snow",all:"snowcap"},{name:"wool_navy",all:"wool_navy"},{name:"water",all:"water",liquid:!0}],Ht=Object.fromEntries(io.map((n,t)=>[n?n.name:"air",t])),wc=null;function so(){if(wc)return wc;let n=Object.keys(li),t={},e=document.createElement("canvas");e.width=e.height=vs;let i=document.createElement("canvas");i.width=i.height=vs;let s=e.getContext("2d"),r=i.getContext("2d");r.fillStyle="#000",r.fillRect(0,0,vs,vs);let a=document.createElement("canvas");a.width=a.height=Yt;let o=a.getContext("2d"),l={};n.forEach((h,d)=>{let f=new uu(1e3+d*97);li[h](f);let m=d%no*tr,_=(d/no|0)*tr,g=(S,w)=>{o.putImageData(new ImageData(S,Yt,Yt),0,0);for(let x=-1;x<=1;x++)for(let M=-1;M<=1;M++)w.save(),w.beginPath(),w.rect(m,_,tr,tr),w.clip(),w.drawImage(a,m+8+M*Yt,_+8+x*Yt),w.restore()};g(f.d,s),f.hasE&&g(f.e,r),t[h]=d;let p=0,v=0,T=0;for(let S=0;S<f.d.length;S+=4)p+=f.d[S],v+=f.d[S+1],T+=f.d[S+2];let y=f.d.length/4;l[h]=[p/y/255,v/y/255,T/y/255]});let c=(h,d)=>{let f=new dn(h);return f.magFilter=fe,f.minFilter=Js,f.generateMipmaps=!0,f.anisotropy=4,d&&(f.colorSpace=be),f},u=io.map(h=>h&&{top:t[h.top||h.all],side:t[h.side||h.all],bottom:t[h.bottom||h.all],light:h.light||0,foliage:!!h.foliage,liquid:!!h.liquid});return wc={canvas:e,emissiveCanvas:i,map:c(e,!0),emissiveMap:c(i,!0),tileIndex:t,faces:u,swatch:l},wc}function du(n){let t=n%no*tr+8,e=(n/no|0)*tr+8,i=t/vs,s=(t+Yt)/vs,r=1-e/vs,a=1-(e+Yt)/vs;return[i,a,s,r]}var fu=[{n:[1,0,0],o:[1,0,1],r:[0,0,-1],u:[0,1,0],kind:"side",shade:.86},{n:[-1,0,0],o:[0,0,0],r:[0,0,1],u:[0,1,0],kind:"side",shade:.86},{n:[0,1,0],o:[0,1,1],r:[1,0,0],u:[0,0,-1],kind:"top",shade:1},{n:[0,-1,0],o:[0,0,0],r:[1,0,0],u:[0,0,1],kind:"bottom",shade:.6},{n:[0,0,1],o:[0,0,1],r:[1,0,0],u:[0,1,0],kind:"side",shade:.92},{n:[0,0,-1],o:[1,0,0],r:[-1,0,0],u:[0,1,0],kind:"side",shade:.8}],Yv=[.42,.62,.8,1],Jv=(n,t,e)=>{let i=n*374761393+t*668265263+e*2147483647|0;return i=(i^i>>>13)*1274126177,((i^i>>>16)>>>0)/4294967296},ys=class{constructor(t,e,i){this.w=t,this.h=e,this.d=i,this.data=new Uint8Array(t*e*i),this.light=new Uint8Array(t*e*i),this.extraLights=[],this.tint=null}idx(t,e,i){return(e*this.d+i)*this.w+t}inb(t,e,i){return t>=0&&e>=0&&i>=0&&t<this.w&&e<this.h&&i<this.d}get(t,e,i){return this.inb(t,e,i)?this.data[this.idx(t,e,i)]:0}set(t,e,i,s){this.inb(t,e,i)&&(this.data[this.idx(t,e,i)]=s)}box(t,e,i,s,r,a,o){for(let l=Math.min(e,r);l<=Math.max(e,r);l++)for(let c=Math.min(i,a);c<=Math.max(i,a);c++)for(let u=Math.min(t,s);u<=Math.max(t,s);u++)this.set(u,l,c,o)}opaque(t,e,i){let s=this.get(t,e,i);return s>0&&!io[s].liquid}ground(t,e){if(t<0||e<0||t>=this.w||e>=this.d)return 99;let i=0;for(;i<this.h&&this.opaque(t,i,e);)i++;return i}topSolid(t,e){for(let i=this.h-1;i>=0;i--)if(this.opaque(t,i,e))return i+1;return 0}addLight(t,e,i,s){this.extraLights.push([t|0,e|0,i|0,s])}computeLight(){let t=this.light;t.fill(0);let e=[],i=(r,a,o,l)=>{if(!this.inb(r,a,o))return;let c=this.idx(r,a,o);t[c]>=l||(t[c]=l,e.push(r,a,o))};for(let r=0;r<this.h;r++)for(let a=0;a<this.d;a++)for(let o=0;o<this.w;o++){let l=this.data[this.idx(o,r,a)];if(!l)continue;let c=io[l].light;c&&(t[this.idx(o,r,a)]=c,e.push(o,r,a))}for(let[r,a,o,l]of this.extraLights)i(r,a,o,l);let s=0;for(;s<e.length;){let r=e[s++],a=e[s++],o=e[s++],l=t[this.idx(r,a,o)]-1;if(!(l<=0))for(let[c,u,h]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){let d=r+c,f=a+u,m=o+h;if(!this.inb(d,f,m)||this.opaque(d,f,m))continue;let _=this.idx(d,f,m);t[_]<l&&(t[_]=l,e.push(d,f,m))}}}lightAt(t,e,i){return t|=0,e|=0,i|=0,this.inb(t,e,i)?this.light[this.idx(t,e,i)]/15:0}buildMesh(){let t=so(),e={pos:[],nor:[],uv:[],col:[],lit:[],idx:[]},i={pos:[],nor:[],uv:[],col:[],lit:[],idx:[]},{w:s,h:r,d:a}=this;for(let o=0;o<r;o++)for(let l=0;l<a;l++)for(let c=0;c<s;c++){let u=this.data[this.idx(c,o,l)];if(!u)continue;let h=t.faces[u];if(h.liquid){this.get(c,o+1,l)===0&&this.emitFace(i,c,o,l,fu[2],h.top,u,.84);continue}for(let d of fu){let f=c+d.n[0],m=o+d.n[1],_=l+d.n[2];if(this.opaque(f,m,_)||m<0)continue;let g=d.kind==="top"?h.top:d.kind==="bottom"?h.bottom:h.side;this.emitFace(e,c,o,l,d,g,u)}}return{opaque:pu(e),water:i.pos.length?pu(i):null}}emitFace(t,e,i,s,r,a,o,l=1){let[c,u,h,d]=du(a),f=t.pos.length/3,m=e+r.n[0],_=i+r.n[1],g=s+r.n[2],p=[],v=[],T=[[0,0],[1,0],[1,1],[0,1]],y=.93+Jv(e,i,s)*.1,S=[y,y,y];if(this.tint){let w=this.tint(e,i,s,o);w&&(S=[w[0]*y,w[1]*y,w[2]*y])}for(let[w,x]of T){let M=w?r.r:r.r.map(K=>-K),I=x?r.u:r.u.map(K=>-K),L=this.opaque(m+M[0],_+M[1],g+M[2])?1:0,P=this.opaque(m+I[0],_+I[1],g+I[2])?1:0,U=this.opaque(m+M[0]+I[0],_+M[1]+I[1],g+M[2]+I[2])?1:0,k=L&&P?0:3-(L+P+U);p.push(k);let C=this.lightAt(m,_,g)*15,z=1;L||(C+=this.light[this.idx2(m+M[0],_+M[1],g+M[2])]||0,z++),P||(C+=this.light[this.idx2(m+I[0],_+I[1],g+I[2])]||0,z++),!U&&!(L&&P)&&(C+=this.light[this.idx2(m+M[0]+I[0],_+M[1]+I[1],g+M[2]+I[2])]||0,z++),v.push(C/z/15);let X=e+r.o[0]+r.r[0]*w+r.u[0]*x,V=i+r.o[1]+r.r[1]*w+r.u[1]*x,nt=s+r.o[2]+r.r[2]*w+r.u[2]*x;l!==1&&V>i&&(V=i+l),t.pos.push(X,V,nt),t.nor.push(...r.n),t.uv.push(w?h:c,x?d:u);let q=Yv[k]*r.shade;t.col.push(S[0]*q,S[1]*q,S[2]*q)}for(let w of v)t.lit.push(w);p[0]+p[2]<p[1]+p[3]?t.idx.push(f+1,f+2,f+3,f+1,f+3,f):t.idx.push(f,f+1,f+2,f,f+2,f+3)}idx2(t,e,i){return this.inb(t,e,i)?this.idx(t,e,i):-1}};function pu(n){let t=new Ve;return t.setAttribute("position",new he(n.pos,3)),t.setAttribute("normal",new he(n.nor,3)),t.setAttribute("uv",new he(n.uv,2)),t.setAttribute("color",new he(n.col,3)),t.setAttribute("aLight",new he(n.lit,1)),t.setIndex(n.pos.length/3>65535?new ks(n.idx,1):new Fs(n.idx,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}var ao=class{constructor(t){this.vox=t,this.g={pos:[],nor:[],uv:[],col:[],lit:[],idx:[]}}box(t,e,i,s,r,a,o,l={}){let c=so(),u=p=>c.faces[Ht[p]],h=typeof o=="string"?{top:u(o).top,side:u(o).side,bottom:u(o).bottom}:{top:u(o.top).top,side:u(o.side).side,bottom:u(o.bottom||o.top).bottom},d=s-t,f=r-e,m=a-i,_=l.light!=null?l.light:this.vox?Math.max(this.vox.lightAt((t+s)/2,r+.2,(i+a)/2),this.vox.lightAt((t+s)/2,(e+r)/2,(i+a)/2)):0,g=l.tint||[1,1,1];for(let p of fu){if(l.skip&&l.skip.includes(p.kind==="side"?Zv(p):p.kind))continue;let v=p.kind==="top"?h.top:p.kind==="bottom"?h.bottom:h.side,[T,y,S,w]=du(v),x=this.g.pos.length/3,M=P=>Math.abs(P[0])*d+Math.abs(P[1])*f+Math.abs(P[2])*m,I=Math.min(1,M(p.r)),L=Math.min(1,M(p.u));for(let[P,U]of[[0,0],[1,0],[1,1],[0,1]]){let k=p.o[0]+p.r[0]*P+p.u[0]*U,C=p.o[1]+p.r[1]*P+p.u[1]*U,z=p.o[2]+p.r[2]*P+p.u[2]*U,X=t+k*d,V=e+C*f,nt=i+z*m;this.g.pos.push(X,V,nt),this.g.nor.push(...p.n);let q=T+(S-T)*(P?I:0)+(l.uoff||0)*(S-T),K=y+(w-y)*(U?L:0);this.g.uv.push(Math.min(q,S),K);let it=l.noAO?1:C<.5?.72:1,wt=p.shade*it;this.g.col.push(g[0]*wt,g[1]*wt,g[2]*wt),this.g.lit.push(_)}this.g.idx.push(x,x+1,x+2,x,x+2,x+3)}}geometry(){return this.g.pos.length?pu(this.g):null}};function Zv(n){return n.n[0]===1?"px":n.n[0]===-1?"nx":n.n[2]===1?"pz":"nz"}var je={uTorch:{value:new bt(1,.62,.28)},uTorchStrength:{value:1.6},uTime:{value:0},uEmissiveBoost:{value:1}};function Qr(n,t){return n.onBeforeCompile=e=>{e.uniforms.uTorch=je.uTorch,e.uniforms.uTorchStrength=je.uTorchStrength,e.uniforms.uEmissiveBoost=je.uEmissiveBoost,t&&(e.uniforms.uLocalLight=t),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${t?"":"attribute float aLight;"}
varying float vLight;`).replace("#include <color_vertex>",`#include <color_vertex>
${t?"vLight = 0.0;":"vLight = aLight;"}`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vLight;
uniform vec3 uTorch;
uniform float uTorchStrength;
uniform float uEmissiveBoost;
${t?"uniform float uLocalLight;":""}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= uEmissiveBoost;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float tl = ${t?"uLocalLight":"vLight"}; reflectedLight.indirectDiffuse += diffuseColor.rgb * uTorch * (tl * tl * (0.4 + 0.6 * tl)) * uTorchStrength; }`)},n.customProgramCacheKey=()=>t?"torch-obj":"torch-vox",n}var Ec=null,ro=null;function jr(){if(Ec)return Ec;let n=so();return Ec=Qr(new We({map:n.map,emissiveMap:n.emissiveMap,emissive:new bt(1,1,1),emissiveIntensity:1.2,vertexColors:!0})),Ec}function Tc(){let n=jr();return Qr(new We({map:n.map,emissiveMap:n.emissiveMap,emissive:new bt(1,1,1),emissiveIntensity:1.2,vertexColors:!0}))}function Ac(){if(ro)return ro;let n=so();return ro=new We({map:n.map,color:10474751,transparent:!0,opacity:.78,vertexColors:!0,emissive:666184,depthWrite:!1}),ro.onBeforeCompile=t=>{t.uniforms.uTime=je.uTime,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y += sin(position.x * 1.7 + uTime * 1.6) * 0.03 + cos(position.z * 1.3 + uTime * 1.2) * 0.03;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <map_fragment>",`#include <map_fragment>
`)},ro}var Kv={uniforms:{tDiffuse:{value:null},uRes:{value:new St(1,1)},uVignette:{value:.42},uSat:{value:1.12},uTint:{value:new B(1.03,1,.95)},uTilt:{value:1},uFocusY:{value:.46},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uVignette; uniform float uSat; uniform vec3 uTint; uniform float uTilt; uniform float uFocusY; uniform float uTime;
    varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      if (uTilt > 0.0) {
        float d = abs(vUv.y - uFocusY);
        float b = smoothstep(0.22, 0.55, d) * uTilt * 2.6;
        if (b > 0.01) {
          vec2 px = b / uRes;
          vec4 acc = c;
          acc += texture2D(tDiffuse, vUv + vec2( 1.0, 0.0) * px);
          acc += texture2D(tDiffuse, vUv + vec2(-1.0, 0.0) * px);
          acc += texture2D(tDiffuse, vUv + vec2( 0.0, 1.0) * px);
          acc += texture2D(tDiffuse, vUv + vec2( 0.0,-1.0) * px);
          acc += texture2D(tDiffuse, vUv + vec2( 0.7, 0.7) * px * 1.6);
          acc += texture2D(tDiffuse, vUv + vec2(-0.7, 0.7) * px * 1.6);
          acc += texture2D(tDiffuse, vUv + vec2( 0.7,-0.7) * px * 1.6);
          acc += texture2D(tDiffuse, vUv + vec2(-0.7,-0.7) * px * 1.6);
          c = acc / 9.0;
        }
      }
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(l), c.rgb, uSat) * uTint;
      c.rgb = (c.rgb - 0.5) * 1.05 + 0.5;
      vec2 q = vUv - 0.5; q.x *= uRes.x / uRes.y;
      float v = smoothstep(0.35, 1.05, length(q));
      c.rgb *= 1.0 - v * uVignette;
      gl_FragColor = vec4(clamp(c.rgb, 0.0, 1.0), 1.0);
    }`},er=[{name:"Low",pr:.75,shadows:!1,bloom:!1,tilt:!1,shadowSize:512},{name:"Medium",pr:1,shadows:!0,bloom:!0,tilt:!1,shadowSize:1024},{name:"High",pr:1.5,shadows:!0,bloom:!0,tilt:!0,shadowSize:2048}];function sp(n,t={}){let e;try{e=new mc({canvas:n,antialias:!1,powerPreference:"high-performance",alpha:!1,stencil:!1})}catch{return null}if(!e.getContext())return null;e.outputColorSpace=be,e.toneMapping=$s,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Xs,e.info.autoReset=!1;let i=new Ne(44,1,.5,400),s=new vc(e),r=new yc(new xi,i),a=new Jr(new St(256,256),.55,.55,.82),o=new Mc,l=new Yr(Kv);s.addPass(r),s.addPass(a),s.addPass(o),s.addPass(l);let c={renderer:e,camera:i,composer:s,bloom:a,grade:l,renderPass:r,quality:t.quality??2,auto:!0,scene:null,w:1,h:1,stats:{calls:0,tris:0,frameMs:0},setQuality(u){c.quality=Math.max(0,Math.min(2,u));let h=er[c.quality];e.shadowMap.enabled=h.shadows,c.onQuality?.(h),c.resize()},resize(){let u=er[c.quality],h=innerWidth,d=innerHeight,f=Math.min(window.devicePixelRatio||1,u.pr)*(h*d>24e5?.8:1);e.setPixelRatio(f),e.setSize(h,d,!1),s.setPixelRatio(f),s.setSize(h,d),a.resolution.set(h*f/2,d*f/2),l.uniforms.uRes.value.set(h*f,d*f),i.aspect=h/d,i.updateProjectionMatrix(),c.w=h,c.h=d},render(u,h=i){let d=er[c.quality];e.info.reset(),l.uniforms.uTilt.value=d.tilt?1:0,d.bloom?(r.scene=u,r.camera=h,s.render()):(e.setRenderTarget(null),e.render(u,h)),c.stats.calls=e.info.render.calls,c.stats.tris=e.info.render.triangles}};return addEventListener("resize",()=>c.resize()),c.setQuality(c.quality),c}function Rc(n,t=4){let e=new Hs(12572927,6967352,1),i=new Fa(16777215,.12),s=new Ws(16769720,2.6);s.castShadow=!0,s.shadow.mapSize.set(2048,2048);let r=s.shadow.camera;r.left=-22,r.right=22,r.top=22,r.bottom=-22,r.near=1,r.far=120,s.shadow.bias=-6e-4,s.shadow.normalBias=.035,s.shadow.radius=3,n.add(e,i,s,s.target);let a=[];for(let l=0;l<t;l++){let c=new Gs(16751168,0,9,1.6);n.add(c),a.push(c)}let o={hemi:e,amb:i,sun:s,pool:a,sunDir:new B(-.55,1,.35).normalize(),follow(l){s.position.copy(l).addScaledVector(o.sunDir,50),s.target.position.copy(l),s.target.updateMatrixWorld()},assign(l,c,u){let h=l.map(d=>({s:d,d:(d.x-c.x)**2+(d.z-c.z)**2})).filter(d=>d.d<260).sort((d,f)=>d.d-f.d);a.forEach((d,f)=>{let m=h[f];if(!m){d.intensity=0;return}let _=m.s;d.position.set(_.x,_.y,_.z),d.color.set(_.color||16751168);let g=_.flicker===!1?1:.85+Math.sin(u*13+_.x*3)*.08+Math.sin(u*29+_.z)*.06;d.intensity=(_.intensity||6)*g*(o.torchK||1),d.distance=_.range||9})}};return o}function mu(n,t,e){let i=document.createElement("canvas");i.width=4,i.height=256;let s=i.getContext("2d"),r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,n),r.addColorStop(.55,t),r.addColorStop(1,e),s.fillStyle=r,s.fillRect(0,0,4,256);let a=new dn(i);return a.colorSpace=be,a}var ip={day:{sky:["#5d93d6","#a9cdec","#f4dcb0"],fog:14207144,fogNear:40,fogFar:120,sun:16769720,sunI:2.7,hemiSky:12572927,hemiGround:8018490,hemiI:1.05,torch:.45,emissive:.8,exposure:.95,bloomT:1.35,bloomS:.38,sunDir:[-.55,1,.42]},dusk:{sky:["#3a3a78","#d0708a","#ffb060"],fog:12613720,fogNear:34,fogFar:110,sun:16751184,sunI:2.2,hemiSky:10128080,hemiGround:6961704,hemiI:.75,torch:1.3,emissive:1,exposure:1,bloomT:1,bloomS:.5,sunDir:[-.9,.42,.3]},night:{sky:["#05081a","#101c3a","#24304a"],fog:923176,fogNear:26,fogFar:90,sun:8034559,sunI:.28,hemiSky:3428506,hemiGround:1051674,hemiI:.24,torch:2.2,emissive:1.3,exposure:1,bloomT:.75,bloomS:.6,sunDir:[.4,1,.6]},dungeon:{sky:["#0a0a14","#141420","#1a1a26"],fog:1315356,fogNear:22,fogFar:70,sun:10137855,sunI:.7,hemiSky:5925530,hemiGround:2760218,hemiI:.5,torch:2,emissive:1.1,exposure:1.12,bloomT:.8,bloomS:.6,sunDir:[-.3,1,.5]},cave:{sky:["#06101a","#0c1a26","#102030"],fog:661538,fogNear:20,fogFar:64,sun:7000319,sunI:.5,hemiSky:3832474,hemiGround:1710628,hemiI:.5,torch:2,emissive:1.15,exposure:1.15,bloomT:.8,bloomS:.6,sunDir:[-.3,1,.5]}};function rp(n,t,e,i){let s=ip[i]||ip.day;return n.background=mu(...s.sky),n.fog=new Us(s.fog,s.fogNear,s.fogFar),t.sun.color.set(s.sun),t.sun.intensity=s.sunI,t.hemi.color.set(s.hemiSky),t.hemi.groundColor.set(s.hemiGround),t.hemi.intensity=s.hemiI,t.sunDir.set(...s.sunDir).normalize(),t.torchK=s.torch,je.uTorchStrength.value=.85*s.torch,je.uEmissiveBoost.value=s.emissive,e.renderer.toneMappingExposure=s.exposure,e.bloom&&(e.bloom.threshold=s.bloomT,e.bloom.strength=s.bloomS),s}var nr=class{constructor(t=1600,e=!0){this.max=t,this.n=0,this.p=new Float32Array(t*3),this.c=new Float32Array(t*3),this.s=new Float32Array(t),this.a=new Float32Array(t),this.v=new Float32Array(t*3),this.life=new Float32Array(t),this.life0=new Float32Array(t),this.g=new Float32Array(t),this.drag=new Float32Array(t),this.size0=new Float32Array(t),this.kind=new Uint8Array(t);let i=new Ve;this.attrP=new sn(this.p,3).setUsage(Wr),this.attrC=new sn(this.c,3).setUsage(Wr),this.attrS=new sn(this.s,1).setUsage(Wr),this.attrA=new sn(this.a,1).setUsage(Wr),i.setAttribute("position",this.attrP),i.setAttribute("color",this.attrC),i.setAttribute("size",this.attrS),i.setAttribute("alpha",this.attrA),i.setDrawRange(0,0);let s=new Fe({uniforms:{uScale:{value:400}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec3 vC; varying float vA; void main(){ vec2 q = abs(gl_PointCoord - 0.5); float m = max(q.x, q.y); if (m > 0.5) discard; float edge = smoothstep(0.5, 0.3, m); gl_FragColor = vec4(vC * vA * (0.7 + 0.3 * edge), ${e?"1.0":"vA"}); }`,transparent:!0,depthWrite:!1,blending:e?yn:gs});this.points=new Ca(i,s),this.points.frustumCulled=!1,this.points.renderOrder=5,this.mat=s}spawn(t){if(this.n>=this.max)return;let e=this.n++;this.p[e*3]=t.x,this.p[e*3+1]=t.y,this.p[e*3+2]=t.z,this.v[e*3]=t.vx||0,this.v[e*3+1]=t.vy||0,this.v[e*3+2]=t.vz||0;let i=t.color||[1,.6,.2];this.c[e*3]=i[0],this.c[e*3+1]=i[1],this.c[e*3+2]=i[2],this.life[e]=this.life0[e]=t.life||1,this.size0[e]=t.size||.12,this.g[e]=t.grav??0,this.drag[e]=t.drag??.5,this.kind[e]=t.kind||0}burst(t,e,i,s,r=10,a=2.5,o=.12,l=.7,c=-6){for(let u=0;u<r;u++){let h=Math.random()*Math.PI*2,d=Math.random();this.spawn({x:t,y:e,z:i,vx:Math.cos(h)*a*(.4+d),vy:a*(.6+Math.random()),vz:Math.sin(h)*a*(.4+d),color:s,size:o*(.6+Math.random()*.8),life:l*(.6+Math.random()*.6),grav:c,drag:1.5})}}update(t,e){let i=0;for(let s=0;s<this.n;s++){if(this.life[s]-=t,this.life[s]<=0)continue;if(i!==s){for(let l=0;l<3;l++)this.p[i*3+l]=this.p[s*3+l],this.v[i*3+l]=this.v[s*3+l],this.c[i*3+l]=this.c[s*3+l];this.life[i]=this.life[s],this.life0[i]=this.life0[s],this.size0[i]=this.size0[s],this.g[i]=this.g[s],this.drag[i]=this.drag[s],this.kind[i]=this.kind[s]}let r=Math.max(0,1-this.drag[i]*t);this.v[i*3]*=r,this.v[i*3+2]*=r,this.v[i*3+1]=this.v[i*3+1]*r+this.g[i]*t,this.kind[i]===1&&(this.v[i*3]+=Math.sin(e*2+i)*t*.8,this.v[i*3+2]+=Math.cos(e*1.7+i*1.3)*t*.8,this.v[i*3+1]+=Math.sin(e*3+i*.7)*t*.3),this.p[i*3]+=this.v[i*3]*t,this.p[i*3+1]+=this.v[i*3+1]*t,this.p[i*3+2]+=this.v[i*3+2]*t;let a=this.life[i]/this.life0[i],o=Math.min(1,(1-a)*6);this.a[i]=Math.min(1,a*1.6)*o*(this.kind[i]===1?.6+.4*Math.sin(e*6+i):1),this.s[i]=this.size0[i]*(.5+.5*a),i++}this.n=i,this.points.geometry.setDrawRange(0,this.n),this.attrP.needsUpdate=!0,this.attrC.needsUpdate=!0,this.attrS.needsUpdate=!0,this.attrA.needsUpdate=!0}clear(){this.n=0,this.points.geometry.setDrawRange(0,0)}},ta=class{constructor(t=400){let e=new Se(1,1,1),i=new Le({color:16777215,toneMapped:!0});this.mesh=new Bs(e,i,t),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.instanceColor=new Os(new Float32Array(t*3),3),this.list=[],this.m=new ae,this.q=new Jn,this.v=new B,this.sc=new B,this.col=new bt}add(t,e,i,s=.16,r=!1,a="fire"){this.list.push({x:t,y:e,z:i,size:s,big:r,hue:a,seed:Math.random()*100})}update(t){let e=0,i=this.mesh,s={fire:[[3.2,1.4,.35],[3.6,2.6,.9],[2.6,.7,.15]],blue:[[.6,1.8,3.6],[1.4,2.8,3.8],[.3,1,3]],green:[[.8,3.2,1.2],[1.8,3.6,2],[.4,2.2,.7]]};for(let r of this.list){let a=s[r.hue]||s.fire,o=r.big?6:3;for(let l=0;l<o&&!(e>=i.instanceMatrix.count);l++){let c=t*(7+l*2)+r.seed+l*1.7,u=r.size*(1-l*(r.big?.12:.24))*(.85+Math.sin(c)*.15),h=r.big?Math.sin(r.seed*3+l*2.1)*r.size*.6:0,d=r.big?Math.cos(r.seed*5+l*1.3)*r.size*.6:0;this.v.set(r.x+h+Math.sin(c*1.3)*u*.12,r.y+l*r.size*(r.big?.42:.55)+Math.abs(Math.sin(c))*u*.15,r.z+d),this.q.setFromAxisAngle(new B(0,1,0),c*.2),this.sc.set(u,u*1.2,u),this.m.compose(this.v,this.q,this.sc),i.setMatrixAt(e,this.m);let f=a[l%3];this.col.setRGB(f[0],f[1],f[2]),i.setColorAt(e,this.col),e++}}i.count=e,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}},gu=null;function Qv(){if(gu)return gu;let n=document.createElement("canvas");n.width=128,n.height=16;let t=n.getContext("2d"),e=Ki(77),i=(o,l,c,u)=>{t.fillStyle=u,t.fillRect(o*16+l,c,1,1)},s=["#4f9a2c","#5eae36","#3e8424","#6cbe40","#2f6e1c"];for(let[o,l,c]of[[0,8,9],[1,11,11],[2,15,13]])for(let u=0;u<c;u++){let h=1+(e()*14|0),d=3+(e()*l|0),f=h;for(let m=15;m>15-d;m--)i(o,f,m,s[e()*s.length|0]),e()<.25&&(f+=e()<.5?-1:1),f=Math.max(0,Math.min(15,f))}let r=(o,l,c)=>{for(let u=9;u<16;u++)i(o,7,u,"#3e8424");i(o,6,12,"#4f9a2c"),i(o,8,13,"#4f9a2c");for(let[u,h]of[[0,-1],[1,0],[-1,0],[0,1],[1,-1],[-1,-1]])i(o,7+u,7+h,l);i(o,7,7,c)};r(3,"#f07a1a","#ffd040"),r(4,"#3a6ad8","#ffffff"),r(5,"#f4f4ee","#f0c020");for(let o=0;o<18;o++){let l=2+(e()*12|0),c=6+(e()*10|0);i(6,l,c,["#8a7a3a","#6a5a2a","#9a8a4a"][e()*3|0])}for(let o=4;o<16;o++){let l=Math.round((16-o)*.4);i(7,7-l,o,"#3e8424"),i(7,8+l,o,"#3e8424"),i(7,7,o,"#2f6e1c")}let a=new dn(n);return a.magFilter=fe,a.minFilter=fe,a.generateMipmaps=!1,a.colorSpace=be,gu=a,a}function ap(n,t){let e=[],i=[],s=[],r=[],a=[],o=[];for(let d of n){let f=d.scale||1,m=.9*f,_=.5*f,g=d.kind/8+.001,p=(d.kind+1)/8-.001,v=t?t.lightAt(d.x,d.y+.2,d.z):0,T=d.tint||1;for(let y of[Math.PI/4+(d.rot||0),-Math.PI/4+(d.rot||0)]){let S=Math.cos(y)*_,w=Math.sin(y)*_,x=e.length/3;e.push(d.x-S,d.y,d.z-w,d.x+S,d.y,d.z+w,d.x+S,d.y+m,d.z+w,d.x-S,d.y+m,d.z-w),i.push(g,0,p,0,p,1,g,1);for(let M=0;M<4;M++){s.push(0,1,0),r.push(v);let I=M<2?.7:1;a.push(I*T,I*T,I*T)}o.push(x,x+1,x+2,x,x+2,x+3)}}let l=new Ve;l.setAttribute("position",new he(e,3)),l.setAttribute("uv",new he(i,2)),l.setAttribute("normal",new he(s,3)),l.setAttribute("aLight",new he(r,1)),l.setAttribute("color",new he(a,3)),l.setIndex(o);let c=new We({map:Qv(),alphaTest:.5,side:rn,vertexColors:!0});Qr(c);let u=c.onBeforeCompile;c.onBeforeCompile=d=>{u(d),d.uniforms.uTime=je.uTime,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float sway = uv.y * 0.12; transformed.x += sin(uTime * 1.8 + position.x * 0.7 + position.z * 0.4) * sway; transformed.z += cos(uTime * 1.4 + position.x * 0.3) * sway * 0.6;`)},c.customProgramCacheKey=()=>"foliage";let h=new kt(l,c);return h.receiveShadow=!0,h}function op(n="#ff9a2a"){let t=new qt,e=(s,r,a,o)=>{let l=new hs(s,r,a,12,1,!0);l.translate(0,a/2,0);let c=new Fe({uniforms:{uColor:{value:new bt(n).multiplyScalar(1.4)},uA:{value:o},uTime:je.uTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uA; uniform float uTime; varying vec2 vUv; void main(){ float f = pow(1.0 - vUv.y, 1.6); float s = 0.75 + 0.25 * sin(vUv.x * 40.0 + uTime * 3.0 - vUv.y * 8.0); gl_FragColor = vec4(uColor * f * s * uA, 1.0); }",transparent:!0,depthWrite:!1,blending:yn,side:rn});return new kt(l,c)};t.add(e(.5,.7,16,.35),e(.2,.32,18,.6));let i=new kt(new us(.6,1.1,24),new Le({color:new bt(n).multiplyScalar(2),transparent:!0,opacity:.6,blending:yn,depthWrite:!1,side:rn}));return i.rotation.x=-Math.PI/2,i.position.y=.05,t.add(i),t.userData.ring=i,t.renderOrder=4,t}function lp(n="orange"){let t=document.createElement("canvas");t.width=16,t.height=32;let e=t.getContext("2d"),i=n==="orange"?"#e8701a":n==="blue"?"#1f4a8a":"#e8e4d8",s=n==="orange"?"#1f4a8a":n==="blue"?"#ef7a12":"#8a2418";e.fillStyle=i,e.fillRect(0,0,16,32),e.fillStyle="rgba(0,0,0,0.12)";for(let c=0;c<32;c+=2)e.fillRect(0,c,16,1);e.fillStyle="#e8c56b",e.fillRect(0,0,16,2),e.fillRect(0,30,16,2),e.fillStyle=s;for(let c=0;c<9;c++)e.fillRect(4+c,18-c,2,2);e.fillRect(3,8,10,2),e.fillRect(2,10,2,2),e.fillRect(12,10,2,2);for(let c=0;c<16;c+=4)e.fillStyle=i,e.fillRect(c,30,2,2);let r=new dn(t);r.magFilter=fe,r.minFilter=fe,r.colorSpace=be;let a=new ri(.9,1.8,1,8);a.translate(0,-.9,0);let o=new We({map:r,side:rn});o.onBeforeCompile=c=>{c.uniforms.uTime=je.uTime,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float k = -position.y / 1.8; transformed.z += sin(uTime * 2.2 + position.y * 2.0 + modelMatrix[3].x) * 0.12 * k;`)};let l=new kt(a,o);return l.castShadow=!0,l}function cp(){let n=new qt,t=new kt(new ri(.9,.12),new Le({color:1180676,depthTest:!1,transparent:!0,opacity:.85})),e=new ri(.84,.07);e.translate(.42,0,0);let i=new kt(e,new Le({color:new bt(2.2,.2,.15),depthTest:!1,transparent:!0}));return i.position.set(-.42,0,.001),n.add(t,i),n.renderOrder=10,t.renderOrder=10,i.renderOrder=11,n.userData.fg=i,n}function xu(n="#ffd060",t=.5,e=.7){let i=new kt(new us(t,e,4,1),new Le({color:new bt(n).multiplyScalar(1.6),transparent:!0,opacity:.7,depthWrite:!1,blending:yn}));return i.rotation.x=-Math.PI/2,i.rotation.z=Math.PI/4,i}var R=4,ea=class{constructor(t,e,i,s=1){this.vox=new ys(t,e,i),this.w=t,this.h=e,this.d=i,this.r=Ki(s),this.props=[],this.foliage=[],this.lights=[],this.flames=[],this.emitters=[],this.blocked=new Uint8Array(t*i),this.banners=[],this.extra=new qt,this.interacts=[],this.npcs=[],this.animals=[]}set(t,e,i,s){this.vox.set(t,e,i,typeof s=="number"?s:Ht[s])}get(t,e,i){return this.vox.get(t,e,i)}box(t,e,i,s,r,a,o){this.vox.box(t,e,i,s,r,a,typeof o=="number"?o:Ht[o])}block(t,e){t|=0,e|=0,t>=0&&e>=0&&t<this.w&&e<this.d&&(this.blocked[e*this.w+t]=1)}blockRect(t,e,i,s){for(let r=Math.floor(e);r<=Math.floor(s);r++)for(let a=Math.floor(t);a<=Math.floor(i);a++)this.block(a,r)}prop(t){this.props.push(t)}canopy(t,e,i,s,r,a,o,l=(c,u)=>(c+u)%4<2){(this.canopies||=[]).push({x0:t,z0:e,x1:i,z1:s,h:r-R+1,fn:c=>{for(let u=e;u<=s;u++)for(let h=t;h<=i;h++)c.box(h,r,u,h+1,r+1,u+1,l(h,u)?a:o)}})}grass(t,e,i,s,r=1){this.foliage.push({x:t,y:e,z:i,kind:s,scale:r,rot:this.r()*.6})}light(t,e,i,s=14,r=16751168,a=6,o=9){this.vox.addLight(t,e,i,s),this.lights.push({x:t+.5,y:e+.5,z:i+.5,color:r,intensity:a,range:o})}torch(t,e,i,s=null){let r=t+.5,a=i+.5;if(s){let[o,l]=s,c=r+o*.38,u=a+l*.38;this.prop(h=>{h.box(c-.06,e+.2,u-.06,c+.06,e+.75,u+.06,"log",{light:1}),h.box(c-.09,e+.72,u-.09,c+.09,e+.8,u+.09,"iron",{light:1})}),this.flames.push([c,e+.88,u,.15,!1]),this.light(t,e,i,13,16748608,5,8)}else this.prop(o=>{o.box(r-.07,e,a-.07,r+.07,e+.85,a+.07,"log",{light:1})}),this.flames.push([r,e+.93,a,.16,!1]),this.light(t,e,i,13,16748608,5,8),this.block(t,i);this.emitters.push({type:"ember",x:r,y:e+1.05,z:a,rate:.6})}lamppost(t,e,i,s=4){let r=t+.5,a=i+.5;this.prop(o=>{o.box(r-.2,e,a-.2,r+.2,e+.4,a+.2,"stonebrick"),o.box(r-.09,e+.4,a-.09,r+.09,e+s-.3,a+.09,"planks_dark"),o.box(r-.35,e+s-.35,a-.08,r+.35,e+s-.22,a+.08,"planks_dark")}),this.vox.addLight(t,e+s-1,i,14),this.prop(o=>{o.box(r-.26,e+s-.95,a-.26,r+.26,e+s-.35,a+.26,"lantern",{light:1,noAO:!0}),o.box(r-.32,e+s-.35,a-.32,r+.32,e+s-.25,a+.32,"planks_dark",{light:.9})}),this.lights.push({x:r,y:e+s-.5,z:a,color:16756816,intensity:7,range:10}),this.block(t,i)}tree(t,e,i,s=1,r=!1,a=!1){let o=this.r,l=s>=3,c=(l?7:s>1?5:3)+(o()*2|0);for(let S=0;S<c;S++)this.set(t,e+S,i,"log"),l&&(this.set(t+1,e+S,i,"log"),this.set(t,e+S,i+1,"log"),this.set(t+1,e+S,i+1,"log"));l&&(this.set(t-1,e,i,"log"),this.set(t+2,e,i+1,"log"),this.set(t,e,i+2,"log"));let u=r?"leaves_dry":"leaves",h=r?"leaves":"leaves_dry",d=l?t+.5:t,f=l?i+.5:i,m=l?4.6:s>1?3.4:2.4,_=new Map,g=(S,w,x)=>{let M=S+","+w+","+x;!_.has(M)&&!this.get(S,w,x)&&_.set(M,[S,w,x])},p=(S,w,x,M)=>{let I=Math.ceil(M);for(let L=-I;L<=I;L++)for(let P=-I;P<=I;P++)Math.max(Math.abs(P+.5-S%1),Math.abs(L+.5-w%1))*.55+Math.hypot(P,L)*.55>M+(o()-.5)*.7||g(Math.floor(S)+P,x,Math.floor(w)+L)},v=e+c,T=l?5:s>1?4:3;for(let S=0;S<T;S++){let w=S/(T-1),x=m*(S===0?.82:1-w*.62);p(d,f,v-2+S,x)}if(s>1){let S=o()*6.28;p(d+Math.cos(S)*m*.8,f+Math.sin(S)*m*.8,v-1,m*.55),p(d+Math.cos(S)*m*.8,f+Math.sin(S)*m*.8,v,m*.35)}for(let[S,w,x]of[..._.values()])w===v-2&&o()<.14&&g(S,w-1,x);let y=[..._.values()].map(([S,w,x])=>[S,w,x,o()<.14?h:u]);if(a){let S=1e9,w=1e9,x=-1e9,M=-1e9;for(let I of y)S=Math.min(S,I[0]),w=Math.min(w,I[2]),x=Math.max(x,I[0]),M=Math.max(M,I[2]);(this.canopies||=[]).push({x0:S,z0:w,x1:x,z1:M,h:v+T-e,tree:!0,fn:I=>{for(let[L,P,U,k]of y)I.box(L,P,U,L+1,P+1,U+1,k)}})}else for(let[S,w,x,M]of y)this.set(S,w,x,M);this.block(t,i),l&&(this.block(t+1,i),this.block(t,i+1),this.block(t+1,i+1))}bush(t,e,i){this.set(t,e,i,"leaves"),this.r()<.5&&this.set(t+1,e,i,"leaves"),this.block(t,i)}barrel(t,e,i){this.prop(s=>s.box(t+.12,e,i+.12,t+.88,e+.95,i+.88,"barrel")),this.block(t,i)}crate(t,e,i,s=.8){let r=(1-s)/2;this.prop(a=>a.box(t+r,e,i+r,t+1-r,e+s,i+1-r,"crate")),this.block(t,i)}bench(t,e,i,s=3,r=!0){this.prop(a=>{r?(a.box(t,e+.3,i+.25,t+s,e+.45,i+.75,"planks"),a.box(t+.1,e,i+.35,t+.3,e+.3,i+.65,"planks_dark"),a.box(t+s-.3,e,i+.35,t+s-.1,e+.3,i+.65,"planks_dark")):(a.box(t+.25,e+.3,i,t+.75,e+.45,i+s,"planks"),a.box(t+.35,e,i+.1,t+.65,e+.3,i+.3,"planks_dark"),a.box(t+.35,e,i+s-.3,t+.65,e+.3,i+s-.1,"planks_dark"))});for(let a=0;a<s;a++)r?this.block(t+a,i):this.block(t,i+a)}table(t,e,i,s=2,r=1,a="planks"){this.prop(o=>{o.box(t+.05,e+.8,i+.05,t+s-.05,e+.95,i+r-.05,a);for(let[l,c]of[[t+.1,i+.1],[t+s-.25,i+.1],[t+.1,i+r-.25],[t+s-.25,i+r-.25]])o.box(l,e,c,l+.15,e+.8,c+.15,"planks_dark")}),this.blockRect(t,i,t+s-1,i+r-1)}fence(t,e,i,s,r){let a=[],o=Math.sign(i-t),l=Math.sign(s-e),c=Math.max(Math.abs(i-t),Math.abs(s-e));for(let u=0;u<=c;u++)a.push([t+o*u,e+l*u]);this.prop(u=>{for(let[h,d]of a)u.box(h+.38,r,d+.38,h+.62,r+1,d+.62,"planks");for(let h=0;h<a.length-1;h++){let[d,f]=a[h],[m,_]=a[h+1];for(let g of[.4,.75])u.box(Math.min(d,m)+.45,r+g,Math.min(f,_)+.45,Math.max(d,m)+.55,r+g+.12,Math.max(f,_)+.55,"planks")}});for(let[u,h]of a)this.block(u,h)}banner(t,e,i,s,r=0,a=!0){let o=t+.5,l=i+.5;a&&(this.prop(c=>{c.box(o-.07,e,l-.07,o+.07,e+3.4,l+.07,"planks_dark"),c.box(o-.55,e+3.2,l-.06,o+.55,e+3.32,l+.06,"planks_dark")}),this.block(t,i)),this.banners.push({x:o,y:a?e+3.2:e,z:l+(a?.09:0),kind:s,rotY:r})}campfire(t,e,i){let s=t+.5,r=i+.5;this.prop(a=>{for(let o=0;o<4;o++){let l=o*Math.PI/2,c=Math.cos(l)*.62,u=Math.sin(l)*.62;a.box(s+c-.22,e,r+u-.22,s+c+.22,e+.25,r+u+.22,"cobble")}a.box(s-.6,e,r-.12,s+.6,e+.22,r+.12,"log"),a.box(s-.12,e+.12,r-.6,s+.12,e+.34,r+.6,"log")}),this.set(t,e-1,i,"magma"),this.flames.push([s,e+.3,r,.42,!0]),this.vox.addLight(t,e,i,15),this.lights.push({x:s,y:e+1.1,z:r,color:16744496,intensity:14,range:13}),this.emitters.push({type:"fire",x:s,y:e+.6,z:r,rate:14}),this.emitters.push({type:"smoke",x:s,y:e+1.6,z:r,rate:2}),this.block(t,i)}chestSpot(t,e){this.block(t,e)}building(t,e,i,s,r,a={}){let o=a.y??R,l=a.wall||"plaster";this.box(t,o,e,i,o+r-1,s,l),this.box(t,o,e,i,o,s,"plaster_base"),this.box(t,o+r-2,e,i,o+r-1,s,"kemar");let c=Math.max(1,Math.floor((r-3)/4));for(let S=0;S<c;S++){let w=o+2+S*4;for(let x=t+2;x<=i-2;x+=3)for(let M of[e,s])this.set(x,w,M,"window"),this.set(x,w+1,M,"window"),this.set(x,w-1,M,"planks_dark"),this.set(x,w+2,M,"planks_dark");for(let x=e+2;x<=s-2;x+=3)for(let M of[t,i])this.set(M,w,x,"window"),this.set(M,w+1,x,"window"),this.set(M,w-1,x,"planks_dark"),this.set(M,w+2,x,"planks_dark")}for(let S=1;S<=c;S++){let w=o+1+S*4;if(w>=o+r-2)break;for(let x=t;x<=i;x++)for(let M of[e,s])this.set(x,w,M,"planks_dark");for(let x=e;x<=s;x++)for(let M of[t,i])this.set(M,w,x,"planks_dark")}for(let S=t-1;S<=i+1;S++)for(let w of[e-1,s+1])this.get(S,o,w)||this.set(S,o,w,"stonebrick");for(let S=e;S<=s;S++)for(let w of[t-1,i+1])this.get(w,o,S)||this.set(w,o,S,"stonebrick");let u=(S,w)=>{for(let x=o+1;x<o+r-2;x++)this.set(S,x,w,"log");this.set(S,o+r-2,w,"planks_dark")};for(let S=t+1;S<=i-1;S+=3)(S-t-1)%6===0&&(a.door&&a.door[0]==="s"&&S>=a.door[1]-1&&S<=a.door[1]+(a.doorW||3)||u(S,s+1),u(S,e-1));for(let[S,w]of[[t-1,e-1],[i+1,e-1],[t-1,s+1],[i+1,s+1]])u(S,w);let h=Math.max(a.overhang??1,2);this.box(t-h,o+r,e-h,i+h,o+r,s+h,"planks_dark");let d=t-h,f=i+h,m=e-h,_=s+h,g=o+r+1,p=a.roof||"roof",v=a.roofLayers??4;for(let S=0;S<v&&f-d>2&&_-m>2;S++)this.box(d,g,m,f,g,_,p),d++,f--,m++,_--,g++;let T=(t+i)/2|0,y=(e+s)/2|0;if(a.crown!==!1&&(this.box(T-1,g,y-1,T+1,g+1,y+1,"plaster"),this.box(T-1,g+1,y-1,T+1,g+1,y+1,"kemar"),this.box(T-2,g+2,y-2,T+2,g+2,y+2,p),this.box(T-1,g+3,y-1,T+1,g+3,y+1,p),this.set(T,g+4,y,"gold"),this.set(T,g+5,y,"gold")),a.door){let[S,w]=a.door,x=a.doorW||3,M=(I,L)=>{for(let P=o;P<o+4;P++)this.set(I,P,L,P===o+3?"planks_orange":"planks_dark")};for(let I=0;I<x;I++)S==="s"&&M(w+I,s),S==="n"&&M(w+I,e),S==="e"&&M(i,w+I),S==="w"&&M(t,w+I);S==="s"&&(this.torch(w-1,o+2,s+1,[0,-1]),this.torch(w+x,o+2,s+1,[0,-1])),S==="e"&&(this.torch(i+1,o+2,w-1,[-1,0]),this.torch(i+1,o+2,w+x,[-1,0]))}for(let S=e-h;S<=s+h;S++)for(let w=t-h;w<=i+h;w++)this.block(w,S)}finish(t={}){let e=this.vox;e.computeLight();let i=new qt,{opaque:s,water:r}=e.buildMesh(),a=new kt(s,jr());if(a.castShadow=!0,a.receiveShadow=!0,i.add(a),r){let u=new kt(r,Ac());u.receiveShadow=!0,i.add(u)}let o=new ao(e);for(let u of this.props)u(o);let l=o.geometry();if(l){let u=new kt(l,jr());u.castShadow=!0,u.receiveShadow=!0,i.add(u)}this.fades=[];for(let u of this.canopies||[]){let h=new ao(e);u.fn(h);let d=Tc();d.transparent=!0;let f=new kt(h.geometry(),d);f.castShadow=!0,f.receiveShadow=!0,i.add(f),this.fades.push({mesh:f,mat:d,rect:[u.x0-.3,u.z0-.3,u.x1+1.3,u.z1+1.3],cx:(u.x0+u.x1+1)/2,cz:(u.z0+u.z1+1)/2,rad:Math.max(u.x1-u.x0+1,u.z1-u.z0+1)/2,h:u.h||5,tree:!!u.tree,k:1})}this.foliage.length&&i.add(ap(this.foliage,e));for(let u of this.banners){let h=lp(u.kind);h.position.set(u.x,u.y,u.z),h.rotation.y=u.rotY,i.add(h)}i.add(this.extra);let c=new Int16Array(this.w*this.d);for(let u=0;u<this.d;u++)for(let h=0;h<this.w;h++)c[u*this.w+h]=this.blocked[u*this.w+h]?99:e.ground(h,u);return this.floor=c,this.group=i,this}};function hp(n,t,e){let i=Math.floor(t),s=Math.floor(e);return i<0||s<0||i>=n.w||s>=n.d?99:n.floor[s*n.w+i]}function Cc(n,t,e,i,s=.28){if(n.bounds&&(t<n.bounds[0]||e<n.bounds[1]||t>n.bounds[2]||e>n.bounds[3]))return!1;for(let[r,a]of[[-s,-s],[s,-s],[-s,s],[s,s]]){let o=hp(n,t+r,e+a);if(o>=99||o-i>1.05)return!1}return!0}function Kn(n,t,e){let i=0;for(let[s,r]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]]){let a=hp(n,t+s,e+r);a<99&&(i=Math.max(i,a))}return i}var Ic=84,up=48,_u=80;function jv(n,t){let e=Math.sin(n*.21)*2.2+Math.sin(n*.53+1.3)*1.4+Math.cos(t*.37+n*.11)*1.6+Math.sin((n+t)*.9)*.6,i=0,s=9-t;s>0&&(i=Math.max(i,s*.35+e*.4));let r=8-n;return r>0&&(i=Math.max(i,r*.8+e*.6)),Math.max(0,Math.round(i))}function dp(){let n=new ea(Ic,up,_u,42),t=n.r;for(let o=0;o<_u;o++)for(let l=0;l<Ic;l++){let c=R;o>63&&(c=R-1),l>66&&(c=R+(l>74?1:0));let u=jv(l,o);c+=u,c=Math.min(up-3,c);for(let h=0;h<c;h++){let d="dirt";u>2?d=h===c-1?"rock":(h+(l*7+o*3)%5)%7===0?"rock_dark":h<R+2?"stone":"rock":h===c-1?d="grass":h<c-3&&(d="stone"),n.set(l,h,o,d)}u>2&&u<9&&t()<.35&&n.grass(l+.5,c,o+.5,6,.9),u>2&&t()<.05&&n.set(l,c,o,t()<.5?"leaves_dry":"rock_dark")}let e=(o,l,c,u,h)=>{for(let d=l;d<=u;d++)for(let f=o;f<=c;f++)n.set(f,R-1,d,h)};for(let o=29;o<=63;o++)for(let l=23;l<=63;l++)n.set(l,R-1,o,"grass");let i=(o,l,c,u)=>{for(let h=l-1;h<=u+1;h++)for(let d=o-1;d<=c+1;d++){if(d<o||d>c||h<l||h>u){t()<.55&&n.set(d,R-1,h,t()<.3?"gravel":"path");continue}let m=(c-o>3?d>o&&d<c:!0)&&(u-l>3?h>l&&h<u:!0);n.set(d,R-1,h,m?t()<.12?"path":"sandstone":t()<.25?"gravel":"path")}};i(40,29,44,63),i(23,45,63,49),i(30,33,54,35);for(let o=29;o<=63;o++)for(let l=23;l<=63;l++)(l===23||l===63||o===29||o===63)&&t()<.5&&n.set(l,R-1,o,"path");for(let o=41;o<=53;o++)for(let l=36;l<=48;l++){let c=Math.hypot(l-42,o-47);c<6.2&&n.set(l,R-1,o,c<2?"cobble":c>5.2?"stonebrick":(l+o)%2?"tile":"sandstone")}let s=(o,l,c,u,h)=>{for(let d=l;d<=u;d++)for(let f=o;f<=c;f++){let m=f===o||f===c||d===l||d===u;if(n.set(f,R,d,m?"sandstone":"grass"),n.set(f,R-1,d,"dirt"),!m){let _=t();_<.5&&n.grass(f+.5,R+1,d+.5,_<.08?3:_<.14?5:_<.18?4:_<.3?2:0,.9+t()*.4)}}for(let[d,f,m]of h)n.tree(d,R+1,f,m,!1,!0)};s(24,50,34,55,[[27,52,1],[31,53,2]]),s(51,50,61,55,[[54,52,2],[58,53,1]]),s(24,39,30,43,[[27,41,1]]),s(55,39,61,43,[[58,41,1]]),n.building(25,14,58,26,7,{door:["s",40],doorW:5,overhang:2,roofLayers:2,crown:!1}),n.building(9,31,20,47,7,{door:["e",37],overhang:1,roofLayers:2,crown:!1}),n.building(61,13,73,24,8,{overhang:1,roofLayers:2});{let h=R;n.box(11,h,50,21,h,60,"stonebrick"),n.box(12,h+1,51,20,h+5,59,"plaster"),n.box(12,h+1,51,20,h+1,59,"plaster_base"),n.box(12,h+4,51,20,h+5,59,"temple");for(let d=53;d<=57;d+=2)n.set(20,h+2,d,"window"),n.set(20,h+3,d,"planks_dark");n.box(10,h+6,49,22,h+6,61,"planks_orange"),n.box(11,h+7,50,21,h+7,60,"roof_dark"),n.box(13,h+8,52,19,h+8,58,"roof_dark"),n.box(14,h+9,53,18,h+9,57,"temple"),n.box(14,h+10,53,18,h+10,57,"roof_dark"),n.box(15,h+11,54,17,h+11,56,"roof_dark"),n.set(16,h+12,55,"gold"),n.set(16,h+13,55,"gold"),n.set(16,h+14,55,"glowstone");for(let d=49;d<=61;d++)for(let f=10;f<=22;f++)n.block(f,d);n.torch(22,h+1,53),n.torch(22,h+1,57),n.flagLine=[[22,h+6.5,49],[26,R+4,49]]}for(let o=51;o<=57;o++)for(let l=23;l<=26;l++)n.set(l,R-1,o,"water"),n.set(l,R-2,o,"sand"),n.block(l,o);for(let o=50;o<=58;o++)n.set(22,R-1,o,"stonebrick"),n.set(27,R,o,o%2?"sandstone":"stonebrick");{let c=R;n.box(62,c,32,66,c,36,"stonebrick"),n.box(63,c+1,33,65,c+1,35,"iron");for(let h=0;h<9;h++)n.set(64,c+2+h,34,h%3===1?"crystal":"iron");let u=[[-5,0],[-4,1],[-3,1],[-2,1],[-1,1],[0,1],[1,1],[2,1],[3,1],[4,1],[5,0]];for(let[h,d]of u)n.set(64+h,c+10+d,34,Math.abs(h)>3?"glowstone":"iron");n.set(64,c+10,34,"iron"),n.set(64,c+12,34,"crystal"),n.blockRect(62,32,66,36)}{for(let[h,d]of[[25,31],[33,31],[25,37],[33,37]])for(let f=R;f<R+4;f++)n.set(h,f,d,"log");n.canopy(24,30,34,38,R+4,"wool_orange","wool_white"),n.box(26,R,32,28,R+1,33,"stonebrick"),n.set(27,R+1,32,"magma"),n.set(27,R+1,33,"lava"),n.box(26,R+2,32,28,R+3,32,"bricks"),n.box(27,R+4,32,27,R+7,32,"bricks"),n.emitters.push({type:"smoke",x:25+2.5,y:R+8.2,z:31+1.5,rate:2.5}),n.emitters.push({type:"spark",x:25+2.5,y:R+2.2,z:31+2.5,rate:3}),n.lights.push({x:25+2.5,y:R+2.5,z:34,color:16738848,intensity:9,range:9}),n.blockRect(26,32,28,33),n.prop(h=>{h.box(31+.2,R,34+.25,31+.8,R+.25,34+.75,"iron"),h.box(31+.35,R+.25,34+.35,31+.65,R+.55,34+.65,"iron"),h.box(31,R+.55,34+.2,32,R+.85,34+.8,"iron")}),n.block(31,34),n.barrel(32,R,32),n.barrel(31,R,32),n.crate(32,R,33),n.prop(h=>{h.box(29,R,31+.7,31,R+.15,32,"planks_dark");for(let d=0;d<3;d++)h.box(25+4.3+d*.6,R+.15,31+.8,25+4.4+d*.6,R+1.5,31+.9,"iron")}),n.blockRect(29,31,31,32),n.npcs.push({type:"smith",x:25+5.5,z:31+4.5,rot:Math.PI*.25,interact:"smith",label:"Smith (gear)"}),n.lamppost(34,R,38,4)}{for(let[h,d]of[[51,31],[59,31],[51,37],[59,37]])for(let f=R;f<R+4;f++)n.set(h,f,d,"log");n.canopy(50,30,60,38,R+4,"wool_blue","wool_white"),n.box(52,R,32,58,R+2,32,"bookshelf"),n.table(53,R,34,3,1,"parchment"),n.prop(h=>{h.box(51+2.4,R+.95,31+3.2,51+2.8,R+1.25,31+3.6,"lantern",{light:1,noAO:!0}),h.box(51+3.6,R+.95,31+3.2,51+4.6,R+1,31+3.8,("map_parchment"in Ht,"parchment"))}),n.vox.addLight(53,R+1,34,12),n.lights.push({x:51+2.6,y:R+1.4,z:31+3.4,color:16756832,intensity:4,range:6}),n.crate(58,R,36),n.crate(58,R+0,35,.7),n.barrel(52,R,36),n.npcs.push({type:"mapper",x:51+3.5,z:31+5.2,rot:Math.PI*.9,interact:"map",label:"Cartographer (missions)"}),n.lamppost(50,R,38,4)}n.prop(c=>{c.box(40,R+.85,39,45,R+1.05,42,"planks_dark"),c.box(40+.2,R+1.05,39+.2,40+4.8,R+1.12,39+2.8,"parchment",{light:.45,noAO:!0});for(let[u,h]of[[40+.2,39+.2],[40+4.5,39+.2],[40+.2,39+2.5],[40+4.5,39+2.5]])c.box(u,R,h,u+.3,R+.85,h+.3,"log");c.box(40+.6,R+1.12,39+.5,40+1.8,R+1.45,39+1.2,"rock",{light:1}),c.box(40+.9,R+1.45,39+.6,40+1.4,R+1.7,40,"rock",{light:1}),c.box(40+2.4,R+1.12,39+1.4,43,R+1.4,39+1.9,"plaster",{light:1}),c.box(40+3.4,R+1.12,39+.8,40+3.9,R+1.3,39+1.3,"plaster",{light:1}),c.box(40+.4,R+1.12,39+2.2,40+4.6,R+1.16,39+2.5,"water",{light:1})}),n.blockRect(40,39,44,41),n.interacts.push({x:40+2.5,z:39+1.5,r:3.2,interact:"map",label:"Mission table"}),n.mapTable={x:40+2.5,y:R+1.3,z:39+1.5},n.emitters.push({type:"magic",x:40+2.5,y:R+1.4,z:39+1.5,rate:6,spread:2.2}),n.lights.push({x:40+2.5,y:R+2.2,z:39+1.5,color:16765056,intensity:4,range:6,flicker:!1}),n.vox.addLight(42,R+2,40,10),n.npcs.push({type:"pete",x:40-.8,z:39+2.2,rot:Math.PI*.35,interact:"pete",label:"Talk to Paydirt Pete"}),n.campfire(42,R,47),n.bench(39,R,44,3,!0),n.bench(39,R,50,3,!0),n.bench(38,R,45,3,!1),n.bench(46,R,45,3,!1),n.animals.push({type:"wolf",x:44.6,z:49.3,rot:-.6,sit:!0,interact:"wolf",label:"Pet the wolf"});let r=(o,l,c,u)=>{for(let h=0;h<3;h++)for(let d=l;d<=l+5;d++)n.set(o+h,R+h,d,h%2?u:c),n.set(o+6-h,R+h,d,h%2?u:c);for(let h=l;h<=l+5;h++)n.set(o+3,R+3,h,c);for(let h=l+1;h<=l+5;h++)for(let d=o+1;d<=o+5;d++)n.get(d,R,h)||n.set(d,R,h,"planks");n.box(o+1,R+1,l+5,o+5,R+2,l+5,c),n.blockRect(o,l,o+6,l+5),n.torch(o+2,R,l-1)};r(65,37,"wool_orange","wool_white"),r(65,47,"wool_blue","wool_white"),n.barrel(64,R,44),n.crate(64,R,45),n.crate(64,R+0,46,.7);for(let[o,l]of[[72,45],[72,46],[73,45]])n.set(o,R+1,l,"hay");n.set(72,R+2,45,"hay"),n.storage=[{x:36.5,z:34.5},{x:47.5,z:34.5}];for(let o of n.storage)n.block(o.x,o.z),n.interacts.push({x:o.x,z:o.z,r:1.4,interact:"storage",label:"Storage chest"});n.fence(24,57,34,57,R),n.fence(24,57,24,62,R),n.fence(34,57,34,62,R),n.fence(24,62,34,62,R);for(let o=58;o<=61;o++)for(let l=25;l<=33;l++)n.set(l,R-1,o,"grass"),t()<.45&&n.grass(l+.5,R,o+.5,t()<.1?3:0,1);n.animals.push({type:"sheep",x:27.5,z:59.5,rot:.4,pen:[25,58,33,61]}),n.animals.push({type:"sheep",x:31.5,z:60.2,rot:2.4,pen:[25,58,33,61]});for(let o=0;o<3;o++)n.animals.push({type:"chicken",x:58+o*1.5,z:58+o%2,rot:o,pen:[52,57,62,62]});for(let[o,l]of[[36,40],[48,40],[36,55],[48,55],[23,46],[61,46],[42,61]])n.lamppost(o,R,l,4);n.banner(37,R,28,"orange"),n.banner(46,R,28,"blue"),n.banner(23,R,30,"blue"),n.banner(62,R,30,"orange"),n.banner(23,R,62,"orange",0),n.banner(62,R,62,"blue",0);for(let o of[28,33,51,56])n.torch(o,R+2,27,[0,-1]);n.torch(21,R+2,33,[-1,0]),n.torch(21,R+2,44,[-1,0]);let a=[[67,30,2],[72,33,1],[77,38,2],[79,50,1],[76,56,2],[70,60,1],[64,67,2],[56,69,1],[47,71,2],[36,68,1],[28,70,2],[18,66,1],[10,63,2],[14,70,1],[5,56,2],[6,44,1],[74,66,2],[80,62,1],[60,74,1],[40,76,2],[22,75,1],[80,44,2]];for(let[o,l,c]of a){let u=n.vox.ground(o,l);u<R+3&&n.tree(o,u,l,c===2&&(o+l)%3===0?3:c,(o+l)%5===0)}for(let o=0;o<_u;o++)for(let l=0;l<Ic;l++){let c=n.vox.ground(l,o)-1;if(!(c<0)){if(n.vox.get(l,c,o)===Ht.grass&&!n.get(l,c+1,o)&&!n.blocked[o*Ic+l]){let u=l>=23&&l<=63&&o>=29&&o<=63,h=t()*(u?.92:1);h<.62&&n.grass(l+.5,c+1,o+.5,h<.05?3:h<.09?4:h<.12?5:h<.3?2:h<.45?1:0,.85+t()*.5)}!(l>=23&&l<=63&&o>=29&&o<=63)&&t()<.012&&n.vox.get(l,c,o)===Ht.grass&&!n.get(l,c+1,o)&&n.bush(l,c+1,o)}}return n.npcs.push({type:"student",seed:3,x:38.5,z:31.5,rot:.2,interact:"student",label:"Chat with a student",path:[[38.5,31.5],[47.5,31.5]]}),n.npcs.push({type:"student",seed:8,x:56.5,z:45.5,rot:2,interact:"student",label:"Chat with a student",path:[[56.5,44.5],[56.5,48.5]]}),n.finish(),n.kind="camp",n.time=null,n.spawn={x:42.5,z:55.5},n.bounds=[23.4,29.6,63.6,63.4],n.farMtn=ty(),n.group.add(n.farMtn),n}var Pc=n=>{let t=Math.sin(n*127.1+311.7)*43758.5453;return t-Math.floor(t)};function ty(){let i=new ys(110,44,34),s=[[4,22,3.5],[11,27,3],[17,34,3],[22,30,2.5],[27,40,3.2],[33,31,2.6],[38,35,3],[45,26,3.5],[53,31,3.5],[62,24,4],[72,29,4],[84,23,5],[96,27,5],[106,20,5]],r=new Float32Array(110);for(let d=0;d<110;d++){let f=9+Math.sin(d*.19)*2;for(let[m,_,g]of s)f=Math.max(f,_*Math.exp(-((d-m)**2)/(2*g*g))+_*.45*Math.exp(-((d-m)**2)/(12*g*g)));r[d]=f*.47+(Pc(d)-.5)*2+(Pc(d*.37|0)-.5)*1.6}for(let d=0;d<34;d++)for(let f=0;f<110;f++){let m=12+Math.sin(f*.07)*2,_=d-m,g=_<0?-_/8:_/18,p=Math.max(0,1-Math.pow(g,1.15)),v=1-.18*Math.max(0,Math.sin(f*.55+d*.15)),T=Math.max(1,Math.round(r[f]*p*v+(_>0?1.5:0)+(Pc(f*31+d*7)-.5)*1.2));for(let y=0;y<Math.min(44,T);y++){let S=y===T-1,w=(y+(f*3+d>>3))%4===0;i.set(f,y,d,S?y>26?Ht.rock_dark:y<4?Ht.leaves_dry:Pc(f+y*9+d*3)<.25?Ht.gravel:Ht.rock:w?Ht.rock_dark:y<2?Ht.sandstone:Ht.rock)}}i.computeLight();let{opaque:a}=i.buildMesh(),o=Tc();o.fog=!1,o.color.setRGB(.8,.86,1);let l={value:new bt(14207144)},c={value:.4},u=o.onBeforeCompile;o.onBeforeCompile=(d,f)=>{u.call(o,d,f),d.uniforms.uHaze=l,d.uniforms.uHazeK=c,d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uHaze;
uniform float uHazeK;`).replace("#include <fog_fragment>","gl_FragColor.rgb = mix(gl_FragColor.rgb, uHaze, uHazeK);")},o.customProgramCacheKey=()=>"farmtn";let h=new kt(a,o);return h.scale.setScalar(3),h.position.set(-140,-18,-112),h.userData.haze=l,h.userData.hazeK=c,h.receiveShadow=!1,h.castShadow=!1,h}function vu(n=6.5,t=.8,e=.6){let i=[],s=[];for(let _=0;_<10;_++){let g=Math.PI/2+_*Math.PI/5,p=_%2?n*.4:n;s.push([Math.cos(g)*p,Math.sin(g)*p])}for(let _=0;_<10;_++){let[g,p]=s[_],[v,T]=s[(_+1)%10],y=Math.max(1,Math.round(Math.hypot(v-g,T-p)/t));for(let S=0;S<y;S++)i.push([g+(v-g)*S/y,p+(T-p)*S/y])}let r=new Le({color:new bt(2,1.8,1.25),fog:!1}),a=new Se(e,e,e*.5),o=new Bs(a,r,i.length),l=new ae;i.forEach(([_,g],p)=>{l.makeTranslation(_,g,0),o.setMatrixAt(p,l)}),o.instanceMatrix.needsUpdate=!0;let c=new qt;c.add(o);let u=document.createElement("canvas");u.width=u.height=64;let h=u.getContext("2d"),d=h.createRadialGradient(32,32,2,32,32,32);d.addColorStop(0,"rgba(255,230,170,0.55)"),d.addColorStop(1,"rgba(255,230,170,0)"),h.fillStyle=d,h.fillRect(0,0,64,64);let f=new Le({map:new dn(u),transparent:!0,depthWrite:!1,blending:yn,fog:!1,opacity:.25}),m=new kt(new ri(n*3.2,n*3.2),f);return m.position.z=-.4,c.add(m),c.userData={mat:r,glowMat:f,count:i.length},c}function fp(n,t){if(!n.farMtn)return null;n.farMtn.updateMatrixWorld(!0);let e=new Xi;e.setFromCamera(new St(-.15,.7),t);let i=e.intersectObject(n.farMtn,!1)[0];if(!i)return null;let s=vu(),r=i.point.clone().addScaledVector(e.ray.direction,-3);return s.position.copy(r),s.lookAt(t.position.x,r.y,t.position.z),s.rotateX(-.22),n.group.add(s),n.star=s,s}var ve={name:"Isaac Moreno",fullName:"Isaac Patricio Moreno",headline:"Computer Science senior at UTEP, Minor in Mathematics",tagline:"Full-stack web apps, LLM and software testing research, and a photographer's eye for detail.",location:"El Paso, TX",graduation:"Expected Dec 2026",lookingFor:"New-grad software engineering roles",email:"ipmoreno1@miners.utep.edu",linkedin:"https://linkedin.com/in/isaac-moreno",github:"https://github.com/Ipmoreno1",resumePdf:"assets/Resume_Isaac_Moreno.pdf",siteUrl:"https://ipmoreno.dev/"},pp=["Hi, I'm Isaac Moreno, a Computer Science senior at The University of Texas at El Paso with a Minor in Mathematics. I graduate in December 2026.","I build full-stack web apps: Moreno Captures, a booking and portfolio app for my photography business, and ESPN Hub, a multi-sport stats dashboard. This semester I'm doing an independent study with Dr. Yoonsik Cheon on whether Javadoc documentation helps LLMs write better Java unit tests, and I'm learning mutation testing (PIT) along the way.","Before that I worked in the Disney College Program as a PhotoPass photographer at Walt Disney World, and earlier as a real estate agent in El Paso. Both jobs meant working face to face with people under real deadlines and quality standards.","Photography and visual work are a big part of who I am, and off the clock I'm a PC and Xbox gamer. I'm looking for new-grad software engineering roles."],na={school:"The University of Texas at El Paso",degree:"Bachelor of Science in Computer Science",minor:"Minor in Mathematics",dates:"Expected Graduation: Dec 2026",location:"El Paso, TX"},mp=["All","Web","Data","AI/ML","Research","Testing","Experience"],Hn=[{id:"moreno-captures",title:"Moreno Captures",icon:"camera",dates:"Feb 2026 - Present",kind:"Full-stack web app for my photography business",categories:["Web","Data"],stack:["React","Vite","Supabase","PostgreSQL","Vercel","Resend"],summary:"A full-stack photography business web app with a cinematic portfolio gallery, a booking system, and an admin panel, serving real El Paso clients.",bullets:["Built and deployed a full-stack photography business web app with a cinematic portfolio gallery, serving real El Paso clients.","Designed a PostgreSQL-backed booking system with automated Resend email notifications, cutting manual coordination.","Implemented a password-protected admin panel for bookings, media uploads, and portfolio updates without code changes.","Architected a cloud storage pipeline with Supabase Storage and edge functions; deployed on Vercel with continuous delivery."],status:"Ongoing",landmark:"museum",links:[]},{id:"espn-hub",title:"ESPN Hub",icon:"trophy",dates:"Mar 2026",kind:"Multi-sport analytics dashboard",categories:["Web","Data"],stack:["React","Vite","React Router","Recharts","ESPN API","Vercel"],summary:"A multi-sport dashboard built on ESPN's public REST APIs for live scores, standings, and stats across the NFL, NBA, and MLB.",bullets:["Built a multi-sport analytics dashboard on ESPN's public REST APIs for live scores, standings, and stats (NFL, NBA, MLB).","Created interactive Recharts visualizations for at-a-glance comparison of team and player performance across leagues.","Architected a modular React component system with React Router, extensible to new leagues; deployed on Vercel."],status:"Complete",landmark:"sunbowl",links:[]},{id:"code-valkyrie",title:"Code Valkyrie",icon:"shield",dates:"Oct 2025",kind:"AI threat assessment platform, UTEP Hackathon (team project)",categories:["AI/ML"],stack:["NLP","Computer vision","Figma"],summary:"A 48-hour hackathon prototype that fuses drone video, NLP on 911 transcripts, and real-time risk scoring to help dispatchers assess threats.",bullets:["Prototyped an AI threat assessment platform fusing drone video, NLP on 911 transcripts, and real-time risk scoring.","Implemented NLP-based incident severity classification and designed a Figma dispatcher dashboard for live risk indicators.","Delivered a functional end-to-end prototype within 48 hours as part of a multidisciplinary team."],status:"Hackathon prototype",landmark:"engineering",links:[]},{id:"javadoc-llm-tests",title:"Does Documentation Help?",icon:"quill",dates:"Fall 2026 (in progress)",kind:"CS 4371 Independent Study with Dr. Yoonsik Cheon",categories:["Research","Testing","AI/ML"],stack:["Java","JUnit","PIT (learning)","Claude"],summary:"Undergraduate research on whether Javadoc-style comments help an LLM (Claude) write Java unit tests that catch more bugs, measured with mutation testing.",bullets:["Conducting a semester-long study of whether Javadoc comments improve bug detection by Claude-generated Java unit tests.","Conducting a literature review on LLM-generated unit tests, code documentation, and mutation testing.","Selecting open-source Java projects and learning mutation testing (PIT) for the study's preliminary report.","Planning a three-condition comparison: code only, Javadoc + signature only, and code + Javadoc."],status:"In progress. The preliminary report covers the literature review, Java project selection, and PIT setup. No results yet.",landmark:"ccsb",links:[],fullTitle:"Does Documentation Help? Evaluating the Role of Javadoc-Style Comments in LLM-Generated Unit Tests via Mutation Testing"},{id:"disney-photopass",title:"Disney PhotoPass",icon:"castle",dates:"Jun 2024 - Jan 2025",kind:"Disney College Program, Cast Member / PhotoPass Photographer, Orlando, FL",categories:["Experience"],stack:["Photography","Guest experience","Communication"],summary:"Photographed guests at Walt Disney World in a fast-paced, high-traffic setting with strict quality and turnaround standards.",bullets:["Captured 200+ high-quality photos per shift in a fast-paced, high-traffic setting under strict quality and turnaround standards.","Interacted with guests daily, gathering live feedback and adapting quickly to improve the guest experience.","Earned 100+ documented guest compliments for professionalism, creativity, and customer experience."],status:"Completed",landmark:"union",links:[]},{id:"clear-view-realty",title:"Clear View Realty",icon:"house",dates:"Jun 2021 - Jun 2023",kind:"Real Estate Agent, El Paso, TX",categories:["Experience"],stack:["Market analysis","Negotiation","Client relationships"],summary:"Residential real estate agent handling pricing analysis, negotiations, and contracts for El Paso clients.",bullets:["Closed multiple residential transactions by managing pricing analysis, negotiations, and contract execution.","Applied comparative market analysis to guide data-informed client decisions; built long-term client relationships."],status:"Completed",landmark:"union",links:[]}],gp=["disney-photopass","clear-view-realty"],xp=[{label:"Languages",items:["Java","Python","C/C++","SQL","JavaScript"]},{label:"Frameworks & Libraries",items:["React","Vite","Node.js","Recharts","React Router","JUnit"]},{label:"Software Testing",items:["Unit testing","Learning mutation testing (PIT)","LLM-based test generation","LLM prompting (Claude)"]},{label:"Databases & Cloud",items:["PostgreSQL","Supabase","Vercel","REST APIs"]},{label:"Machine Learning",items:["Data preprocessing","Feature extraction","Model evaluation","NLP fundamentals"]},{label:"Tools",items:["Git","GitHub","Figma","VS Code","IntelliJ IDEA","Microsoft Excel","Word","PowerPoint"]},{label:"Concepts",items:["Full-stack development","Data modeling","API integration","Computer vision basics"]}],_p=["Photography and visual work","Sports media and analytics","PC and Xbox gaming"],ia=[{id:"plaza",name:"Centennial Plaza",panel:{type:"about"},adv:"Campus Living Room",fact:"UTEP's 11-acre Centennial Plaza was completed in 2015 and is known as the campus living room.",source:"https://www.utep.edu/bhutan/centennial-plaza/"},{id:"union",name:"Union Building",panel:{type:"experience"},adv:"Cast Member",fact:"The Union is one of the buildings that border Centennial Plaza.",source:"https://www.utep.edu/bhutan/centennial-plaza/"},{id:"library",name:"UTEP Library",panel:{type:"resume"},adv:"Paper Trail",fact:"The current Library building opened on October 12, 1984, with Bhutanese-inspired architecture and over 200 works of art on display.",source:"https://www.utep.edu/library/about/"},{id:"ccsb",name:"Chemistry & Computer Science Bldg",panel:{type:"project",id:"javadoc-llm-tests"},adv:"Documentation Required",fact:"Home of UTEP's Department of Computer Science, part of the Miguel A. Loya College of Engineering.",source:"https://www.utep.edu/cs/undergraduate/"},{id:"engineering",name:"Engineering Sciences Complex",panel:{type:"project",id:"code-valkyrie"},adv:"48-Hour Build",fact:"A 362,000 square-foot complex that houses the W.M. Keck Center for 3D Innovation.",source:"https://catalog.utep.edu/university/"},{id:"sunbowl",name:"Sun Bowl Stadium",panel:{type:"project",id:"espn-hub"},adv:"Kickoff",fact:"Opened September 21, 1963. Home of UTEP football and the Sun Bowl game every December. UTEP lists capacity at 45,971.",source:"https://utepminers.com/facilities/sun-bowl/2"},{id:"museum",name:"Centennial Museum",panel:{type:"project",id:"moreno-captures"},adv:"Say Cheese",fact:"Built in 1936, it is El Paso's first museum. Stone urns shaped like prayer wheels flank the entrance steps.",source:"https://www.utep.edu/centennial-museum/museum/museum-natural-cultural-history.html"},{id:"haskins",name:"Don Haskins Center",panel:{type:"skills"},adv:"Skill Tree",fact:"One of UTEP's athletic facilities, alongside the Sun Bowl and the Larry K. Durham Sports Center.",source:"https://catalog.utep.edu/university/"},{id:"pick",name:"Mining Minds",panel:{type:"contact"},adv:"Ping Received",fact:"A steel pickaxe sculpture installed in 2010 to celebrate UTEP's mining heritage. On special occasions it lights up blue and orange.",source:"https://www.utep.edu/about/"},{id:"lhakhang",name:"The Lhakhang",panel:{type:"lhakhang"},adv:"Gift From Bhutan",fact:"Built by Bhutanese artisans for the 2008 Smithsonian Folklife Festival, gifted to the United States, and opened at UTEP in 2015 on the western edge of Centennial Plaza.",source:"https://www.utep.edu/bhutan/centennial-plaza/"}],oo=["UTEP opened in 1914 as the Texas State School of Mines and Metallurgy.","Bhutanese-inspired architecture has been part of the campus design since 1917.","The name Paydirt Pete came from a 1974 contest with over 500 entries."],Lc=["Howdy, Miner! I'm Pete. This camp is Centennial Plaza, Isaac's home base.","This is Isaac's portfolio. Walk with WASD or the arrow keys. Space rolls. Click or F swings.","The glowing map on the table starts missions. Each landmark on that map holds a piece of Isaac's story.",'In a hurry? The orange "Skip the game" button up top has everything on one page.',"Fun fact: the name Paydirt Pete came from a 1974 contest with over 500 entries.","Press I for gear, M for the mission map, and E next to me, the smith, or the wolf.","Finish all ten missions for a special advancement. Good luck!"];var ey=Object.fromEntries(ia.map(n=>[n.id,n]));var Dc={Common:{color:"#d8d4cc",glow:"rgba(200,200,200,0.35)"},Rare:{color:"#5ad0ff",glow:"rgba(80,180,255,0.5)"},Unique:{color:"#d46cff",glow:"rgba(180,80,255,0.55)"},Legendary:{color:"#ff9a2a",glow:"rgba(255,140,40,0.65)"}},vp=[{id:"pick-campus",name:"Campus Pick",slot:"melee",rarity:"Common",power:8,icon:"sword",desc:"A sturdy starter tool. Every miner starts somewhere."},{id:"sling-practice",name:"Practice Sling",slot:"ranged",rarity:"Common",power:5,icon:"bow",desc:"Good for reaching the far side of the plaza."},{id:"miner-cap",name:"Miner Cap",slot:"helm",rarity:"Common",power:4,icon:"helm",desc:"Keeps the desert sun off your eyes."},{id:"orange-mail",name:"Orange Mail",slot:"chest",rarity:"Common",power:6,icon:"chestarm",desc:"UTEP orange, patched by hand."},{id:"trail-pants",name:"Trail Pants",slot:"legs",rarity:"Common",power:4,icon:"legs",desc:"Built for walking a tight campus."},{id:"work-boots",name:"Work Boots",slot:"boots",rarity:"Common",power:4,icon:"boots",desc:"Dusty, reliable, El Paso tough."}],ny={plaza:{id:"artifact-about",name:"Miner's Portrait",slot:"talisman",rarity:"Unique",power:12,icon:"head",desc:"A painted token of Isaac Moreno, CS senior at UTEP."},union:{id:"artifact-experience",name:"PhotoPass Lens",slot:"artifact",rarity:"Legendary",power:18,icon:"castle",desc:"A lens that remembers 200+ photos a shift at Walt Disney World."},library:{id:"artifact-resume",name:"Paper Trail",slot:"talisman",rarity:"Unique",power:14,icon:"paper",desc:"Isaac's resume, ready to download or read in the field."},ccsb:{id:"artifact-research",name:"Javadoc Quill",slot:"artifact",rarity:"Legendary",power:18,icon:"quill",desc:"A research tool from CS 4371. Mutation testing (PIT) is still being learned."},engineering:{id:"artifact-valkyrie",name:"Valkyrie Shield",slot:"artifact",rarity:"Legendary",power:16,icon:"shield",desc:"Forged in 48 hours at a UTEP hackathon."},sunbowl:{id:"artifact-espn",name:"Hub Compass",slot:"ranged",rarity:"Unique",power:15,icon:"trophy",desc:"Points to live scores across the NFL, NBA, and MLB."},museum:{id:"artifact-captures",name:"Capture Crystal",slot:"melee",rarity:"Legendary",power:17,icon:"camera",desc:"A photographer's focus, set in a crystal from Moreno Captures."},haskins:{id:"artifact-skills",name:"Skill Medallion",slot:"talisman",rarity:"Unique",power:14,icon:"star",desc:"A compact inventory of the tools Isaac actually uses."},pick:{id:"artifact-contact",name:"Ping Charm",slot:"artifact",rarity:"Unique",power:13,icon:"envelope",desc:"A charm that opens a line to Isaac. Email is fastest."},lhakhang:{id:"artifact-site",name:"Gift From Bhutan",slot:"helm",rarity:"Rare",power:11,icon:"knowledge",desc:"A quiet token from The Lhakhang. Read the campus facts inside."}},iy="Disney PhotoPass, 2024-2025 Disney College Program, and Clear View Realty.",sy=(n,t)=>n==="project"?Hn.find(e=>e.id===t)?.summary||"":n==="about"?`${ve.name}, ${ve.headline}. ${ve.graduation}.`:n==="experience"?iy:n==="resume"?"View or download Resume_Isaac_Moreno.pdf.":n==="skills"?"Languages, frameworks, testing, cloud, and tools from the resume.":n==="contact"?`Email ${ve.email}. El Paso, TX. Looking for new-grad software engineering roles.`:n==="lhakhang"?"About this site, campus facts, and a short disclaimer.":"";function wi(n,t){let e=ey[n];return{id:n,name:e.name,subtitle:t.subtitle,objective:t.objective,theme:t.theme,recommended:t.recommended,map:t.map,legend:t.legend,loot:ny[n],panel:e.panel,fact:e.fact,source:e.source,blurb:sy(e.panel.type,e.panel.id),adv:e.adv,pos:t.pos}}var Ei=[wi("plaza",{subtitle:"About Me",objective:"Walk the hall and open the portrait chest",theme:{floor:"plaza",wall:"bhutan",accent:"carpet"},recommended:10,pos:{x:.48,y:.5},map:["####################","#T....+...+....T#..#","#.....+++++.....F..#","#..F..++S++..F.....#","#.....+++++.....B..#","#T....+...+....T#..#","######.....########.#","#..............P...#","#..K..........E....#","#..............T...#","#........C.........#","#..............T...#","####################"]}),wi("union",{subtitle:"Experience",objective:"Cross the guest hall and claim the lens",theme:{floor:"tile",wall:"brick",accent:"carpet"},recommended:14,pos:{x:.33,y:.44},map:["########################","#S.T....+.........T....#","#......+++......E......#","#..##################..#","#..#T..............T#..#","#..#...B..E..K......#F.#","#..#................#..#","#..########..########..#","#.....T..........E.....#","#......................#","#F.......C..........T..#","########################"]}),wi("library",{subtitle:"Resume",objective:"Find the Paper Trail in the stacks",theme:{floor:"wood",wall:"darkwood",accent:"carpet"},recommended:16,pos:{x:.56,y:.4},map:["########################","#S....#....#....#....T.#","#.....P....P....P......#","#..E..#....#....#..E...#","#.....#....#....#......#","####..####..####..####.#","#T.....................#","#......E.........K.....#","#......................#","#..##################..#","#..#T.....C........T#..#","########################"]}),wi("ccsb",{subtitle:"CS 4371 Independent Study",objective:"Reach the lab chest at the end of the wing",theme:{floor:"tile",wall:"stone",accent:"carpet"},recommended:18,pos:{x:.72,y:.3},map:["##########################","#S.T.................T...#","#....#####....#####......#","#..E.#...#....#...#..E...#","#....#...P....P...#......#","#....##..#....#..##......#","#......E..........K......#","########....##....########","#T....................T..#","#.....E........E.........#","#...........C............#","##########################"]}),wi("engineering",{subtitle:"Code Valkyrie",objective:"Clear the workshop and take the shield",theme:{floor:"cobble",wall:"copper",accent:"tile"},recommended:18,pos:{x:.82,y:.5},map:["########################","#S....T....K....T......#","#......................#","#..##########....E.....#","#..#........#..........#","#..#..E.....######.....#","#..#..............#....#","#..####..P........#....#","#.....T......E....T....#","#......................#","#F........C..........F.#","########################"]}),wi("sunbowl",{subtitle:"ESPN Hub",objective:"Walk the tunnel to the field chest",theme:{floor:"field",wall:"stone",accent:"carpet2"},recommended:16,pos:{x:.3,y:.2},map:["##########################","#S.T=======..............#","#...=======....E.........#","#####=====################","#...=====....T...........#","#...=====.........E......#","#...=====#################","#...=====....K...........#","#...=====.........E......#","#T..=====.............T..#","#.......=======C========.#","##########################"]}),wi("museum",{subtitle:"Moreno Captures",objective:"Tour the galleries and open the crystal chest",theme:{floor:"marble",wall:"bhutan",accent:"carpet"},recommended:16,pos:{x:.36,y:.68},map:["########################","#S.T....P....P....T....#","#......................#","#..E..#####..#####.....#","#.....#+++#..#+++#..E..#","#.....#+++#..#+++#.....#","#.....###.....###......#","#.........E............#","#..F.............F.....#","#T.........C.........T.#","########################"]}),wi("haskins",{subtitle:"Skills",objective:"Cross the training floor and claim the medallion",theme:{floor:"wood",wall:"brick",accent:"carpet2"},recommended:15,pos:{x:.16,y:.34},map:["######################","#S.T..............T..#","#....E.....E.........#","#..##############....#","#..#............#....#","#..#..E....E....#....#","#..#............#....#","#..######..######....#","#.....T..........E...#","#..........C.......T.#","######################"]}),wi("pick",{subtitle:"Contact",objective:"Follow the mine to the glowing sculpture chest",theme:{floor:"cobble",wall:"stone",accent:"dirt"},recommended:14,pos:{x:.64,y:.74},map:["########################","#S.T...................#","#.....####.............#","#..E..#  #..####.......#","#.....#  #..#  #..E....#","#######  #..#  ####....#","#........#..#.....T....#","#..K.....####..........#","#...............E......#","#T........C..........T.#","########################"]}),wi("lhakhang",{subtitle:"About this site",objective:"Walk the shrine path and open the gift chest",theme:{floor:"plaza",wall:"bhutan",accent:"gold"},recommended:12,pos:{x:.14,y:.56},map:["####################","#S.T....+....T.....#","#......+++.........#","#..F..+++++..F.....#","#......+++.........#","#.......+....P.....#","#.............E....#","#....P.............#","#T........C......T.#","####################"]})],Ms=Object.fromEntries(Ei.map(n=>[n.id,n]));function yp(n){let t=n.map,e=t.length,i=Math.max(...t.map(o=>o.length)),s=[],r={spawn:null,chest:null,enemies:[],torches:[],props:[],floor:[]},a=n.theme;for(let o=0;o<e;o++){s[o]=[];let l=t[o].padEnd(i,"#");for(let c=0;c<i;c++){let u=l[c],h=a.floor,d=!1,f="floor",m=a.wall;u==="#"?(d=!0,f="wall"):u===" "?(d=!0,f="void",h=null):u==="~"?(h="water",f="water",d=!0):u==="+"?h=a.accent:u==="="?h="path":u===","?h="grass":u==="S"?r.spawn={x:c+.5,y:o+.5}:u==="C"?r.chest={x:c+.5,y:o+.5}:u==="T"?r.torches.push({x:c+.5,y:o+.5}):u==="E"?r.enemies.push({x:c+.5,y:o+.5}):u==="P"?(r.props.push({type:"pillar",x:c+.5,y:o+.5}),d=!0):u==="B"?r.props.push({type:"barrel",x:c+.5,y:o+.5}):u==="K"?r.props.push({type:"crate",x:c+.5,y:o+.5}):u==="F"&&r.props.push({type:"banner",x:c+.5,y:o+.5}),s[o][c]={floor:h,solid:d,kind:f,mat:m,ch:u},h&&f!=="void"&&r.floor.push({x:c,y:o,floor:h})}}return{w:i,h:e,tiles:s,...r,theme:a}}var $e=2,Pe=7,Mp={plaza:{floor:["path","stonebrick","gravel"],accent:"carpet_orange",wall:"plaster",wallTop:"kemar",cap:"roof",outer:"rock",time:"dusk",enemies:["blob","raider"],decor:"courtyard",wallH:4},union:{floor:["tile"],accent:"carpet_blue",wall:"bricks",wallTop:"planks_dark",cap:"planks_dark",outer:"stonebrick",time:"dungeon",enemies:["raider"],decor:"hall",wallH:4},library:{floor:["stonebrick","mossy","stonebrick","stone"],accent:"carpet_blue",wall:"bookshelf",wallTop:"stonebrick",cap:"deepbrick",outer:"deepbrick",time:"dungeon",enemies:["wisp"],decor:"library",wallH:5,magic:"#7ac8ff"},ccsb:{floor:["tile","concrete"],accent:"carpet_blue",wall:"iron",wallTop:"terminal",cap:"iron",outer:"concrete",time:"cave",enemies:["bug"],decor:"lab",wallH:4,magic:"#6affd0"},engineering:{floor:["cobble","stonebrick","gravel"],accent:"circuit",wall:"copper",wallTop:"circuit",cap:"iron",outer:"stone",time:"dungeon",enemies:["bug","wisp"],decor:"workshop",wallH:4},sunbowl:{floor:["field"],accent:"field_line",wall:"seats_orange",wallTop:"seats_blue",cap:"concrete",outer:"rock",time:"day",enemies:["raider"],decor:"stadium",wallH:3,outdoor:!0},museum:{floor:["marble","marble","tile"],accent:"carpet_orange",wall:"plaster",wallTop:"kemar",cap:"planks_dark",outer:"plaster",time:"dungeon",enemies:["wisp"],decor:"museum",wallH:5},haskins:{floor:["planks"],accent:"planks_orange",wall:"seats_blue",wallTop:"seats_orange",cap:"concrete",outer:"concrete",time:"dungeon",enemies:["raider","blob"],decor:"arena",wallH:3},pick:{floor:["gravel","cobble","stone"],accent:"path",wall:"stone",wallTop:"ore",cap:"rock_dark",outer:"rock_dark",time:"cave",enemies:["bug","blob"],decor:"mine",wallH:5,magic:"#5ad0ff"},lhakhang:{floor:["path","path","gravel"],accent:"gold",wall:"plaster",wallTop:"temple",cap:"roof_dark",outer:"rock",time:"night",enemies:["blob"],decor:"temple",wallH:4,outdoor:!0}},ry={plaza:{hemiSky:10135776,hemiGround:4864560,hemiI:.85,torch:.85},union:{hemiSky:10135240,hemiGround:3813416,hemiI:.85,sun:14673663,sunI:.9,fog:1842726,torch:.6},library:{hemiSky:7911616,hemiGround:1582111,hemiI:1,sun:12577023,sunI:.95,fog:793630,torch:.5,tint:[.55,.9,.85]},ccsb:{hemiSky:8042751,hemiGround:1714240,hemiI:1,sun:11065599,sunI:1,fog:793130,torch:.55,tint:[.6,.85,1]},engineering:{hemiSky:9087192,hemiGround:2237998,hemiI:.95,sun:13162751,sunI:1.1,fog:1317928,torch:.55},sunbowl:{hemiSky:12574975,hemiGround:3828266,hemiI:1,sun:16773328,sunI:2.4,fog:11061424,torch:.3},museum:{hemiSky:13159640,hemiGround:4737100,hemiI:1,sun:15790335,sunI:1,fog:2237482,torch:.5,tint:[1,.82,.6]},haskins:{hemiSky:6982368,hemiGround:2761792,hemiI:.9,sun:13688063,sunI:1.2,fog:1054768,torch:.6},pick:{hemiSky:5943496,hemiGround:1712164,hemiI:.75,sun:9099519,sunI:.6,fog:662048,torch:.75},lhakhang:{hemiSky:5929680,hemiGround:1710640,hemiI:.65,sun:10533119,sunI:.85,fog:923696,torch:.8}};function bp(n){let t=yp(n),e=Mp[n.id]||Mp.plaza,i=t.w*$e+Pe*2,s=t.h*$e+Pe*2,r=30,a=new ea(i,r,s,100+n.id.length*7),o=a.r,l=(p,v)=>{let T=Math.floor((p-Pe)/$e),y=Math.floor((v-Pe)/$e);return T>=0&&y>=0&&T<t.w&&y<t.h?t.tiles[y][T]:null},c=(p,v)=>p>=0&&v>=0&&p<t.w&&v<t.h&&!t.tiles[v][p].solid,u=(p,v)=>!(p>=0&&v>=0&&p<t.w&&v<t.h)||t.tiles[v][p].solid,h=(p,v)=>e.floor[Math.abs(p*7+v*13+p*v%5)%e.floor.length];for(let p=0;p<s;p++)for(let v=0;v<i;v++){let T=l(v,p);for(let y=0;y<R-1;y++)a.set(v,y,p,y<R-2?"stone":"dirt");if(!T){let y=p<Pe||v<Pe,S=!y,w=Math.sin(v*.7)+Math.cos(p*.6)+Math.sin((v+p)*.3),x=S?1+(w>1.2?1:0):6+Math.round(w*1.5)+Math.min(6,y?p<Pe?Pe-p:Pe-v:0);e.outdoor&&S&&(x=1);for(let M=R-1;M<R-1+x;M++)a.set(v,M,p,M===R-2+x?e.outdoor?"grass":e.outer:e.outer==="rock"?M%4===0?"rock_dark":"rock":e.outer);e.outdoor&&S&&o()<.5&&a.grass(v+.5,R-1+x,p+.5,o()<.1?3:o()<.4?2:0,1);continue}a.set(v,R-1,p,T.floor===e.accent||T.ch==="+"?e.accent:T.ch==="="?e.decor==="stadium"?"field_line":"path":h(v,p)),e.decor==="stadium"&&!T.solid&&a.set(v,R-1,p,Math.floor((v-Pe)/3)%2?"field":"grass")}for(let p=0;p<t.h;p++)for(let v=0;v<t.w;v++){let T=t.tiles[p][v];if(!T.solid||T.kind==="void"&&!1||T.ch==="P")continue;let y=c(v,p-1)||c(v-1,p)||c(v-1,p-1)&&!c(v+1,p+1),S=c(v,p+1)||c(v+1,p),w=e.wallH;y&&!S?w=1:y&&S&&(w=2),T.kind==="void"&&(w=0);let x=Pe+v*$e,M=Pe+p*$e;for(let I=0;I<$e;I++)for(let L=0;L<$e;L++){let P=x+L,U=M+I;if(T.kind==="void"){for(let k=0;k<R;k++)a.set(P,k,U,0);a.set(P,0,U,e.decor==="mine"?"lava":"deep");continue}for(let k=R;k<R+w;k++){let C=e.wall;k===R+w-1&&w>1&&(C=e.wallTop),e.decor==="library"&&w>2&&k===R&&(C="stonebrick"),e.decor==="mine"&&o()<.12&&(C="ore"),e.decor==="mine"&&o()<.05&&(C="crystal"),e.decor==="stadium"&&(C=(k-R)%2?"seats_blue":"seats_orange"),e.decor==="lab"&&w>2&&k===R+1&&(P+U)%3===0&&(C="terminal"),e.decor==="workshop"&&w>2&&k===R+1&&(P+U)%4===0&&(C="circuit"),e.decor==="museum"&&w>3&&k===R+2&&(P+U)%5===0&&(C=P%2?"painting":"photo"),e.decor==="hall"&&w>3&&k===R+2&&(P+U)%4===0&&(C="window"),e.decor==="courtyard"&&w>3&&k===R+2&&(P+U)%4===0&&(C="window"),a.set(P,k,U,C)}w>2&&e.cap&&a.set(P,R+w,U,e.cap)}}let d=p=>({x:Pe+(p.x-.5)*$e+$e/2,z:Pe+(p.y-.5)*$e+$e/2}),f=d(t.spawn),m=d(t.chest);for(let p of t.torches){let v=d(p),T=Math.floor(p.x),y=Math.floor(p.y),S=Math.floor(v.x-.5),w=Math.floor(v.z-.5);u(T,y-1)?a.torch(S,R+1,Pe+y*$e,[0,-1]):u(T-1,y)?a.torch(Pe+T*$e,R+1,w,[-1,0]):ay(a,S,w,e)}for(let p of t.props){let v=d(p),T=Math.floor(v.x-1),y=Math.floor(v.z-1);p.type==="pillar"?oy(a,T,y,e):p.type==="barrel"?(a.barrel(T,R,y),a.barrel(T+1,R,y),o()<.6&&a.crate(T,R,y+1)):p.type==="crate"?(a.crate(T,R,y),a.crate(T+1,R,y,.7),a.crate(T,R+0,y+1,.9)):p.type==="banner"&&a.banner(T,R,y,(T+y)%2?"orange":"blue")}ly(a,t,e,Pe,$e,o,c,f,m);let _=Math.floor(m.x),g=Math.floor(m.z);for(let p=-2;p<=2;p++)for(let v=-2;v<=2;v++){let T=_+v,y=g+p;if(a.get(T,R,y)||a.blocked[y*i+T])continue;let S=Math.max(Math.abs(v),Math.abs(p));a.set(T,R-1,y,S===2?"stonebrick":S===1?Math.abs(v)===Math.abs(p)?"gold":"deepbrick":"glowstone")}a.vox.addLight(_,R,g,10),a.block(_,g),a.enemySpots=t.enemies.map((p,v)=>({...d(p),type:e.enemies[v%e.enemies.length]})),a.enemySpots.push({x:m.x+2.2,z:m.z-1.6,type:e.enemies[0]});for(let p=0;a.enemySpots.length<5&&p<400;p++){let v=o()*t.w|0,T=o()*t.h|0;if(!c(v,T))continue;let y=Pe+v*$e+1,S=Pe+T*$e+1;Math.hypot(y-f.x,S-f.z)<9||a.blocked[Math.floor(S)*i+Math.floor(y)]||a.get(Math.floor(y),R,Math.floor(S))||a.enemySpots.some(w=>Math.hypot(w.x-y,w.z-S)<4)||a.enemySpots.push({x:y,z:S,type:e.enemies[a.enemySpots.length%e.enemies.length]})}return a.finish(),a.kind="mission",a.mission=n,a.theme=e,a.time=e.time,a.mood=ry[n.id],a.spawn=f,a.chest=m,a.bounds=[Pe+.3,Pe+.3,Pe+t.w*$e-.3,Pe+t.h*$e-.3],a}function ay(n,t,e,i){let s=t+.5,r=e+.5,a=i.magic&&i.decor!=="library"?"blue":"fire";n.prop(o=>{o.box(s-.35,R,r-.35,s+.35,R+.2,r+.35,"stonebrick"),o.box(s-.15,R+.2,r-.15,s+.15,R+.8,r+.15,"iron"),o.box(s-.4,R+.8,r-.4,s+.4,R+1,r+.4,"iron")}),n.flames.push([s,R+1.05,r,.24,!1,a]),n.vox.addLight(t,R+1,e,14),n.lights.push({x:s,y:R+1.6,z:r,color:a==="blue"?6336767:16747056,intensity:8,range:10}),n.emitters.push({type:a==="blue"?"magicup":"ember",x:s,y:R+1.2,z:r,rate:2.5,color:i.magic}),n.block(t,e)}function oy(n,t,e,i){let s=i.decor==="library"?"bookshelf":i.decor==="mine"?"log":i.decor==="lab"?"iron":i.decor==="workshop"?"copper":i.decor==="museum"?"marble":i.decor==="temple"?"temple":"stonebrick",r=4;for(let a=R;a<R+r;a++)for(let o=0;o<2;o++)for(let l=0;l<2;l++)n.set(t+l,a,e+o,a===R?"stonebrick":s);for(let a=-1;a<3;a++)for(let o=-1;o<3;o++)(o<0||a<0||o>1||a>1)&&(n.get(t+o,R+r,e+a)||n.set(t+o,R+r,e+a,i.cap||"stonebrick"));for(let a=0;a<2;a++)for(let o=0;o<2;o++)n.set(t+o,R+r,e+a,i.cap||"stonebrick");i.decor==="lab"?n.set(t,R+r,e,"terminal"):(n.prop(a=>{a.box(t+.7,R+r+1,e+.7,t+1.3,R+r+1.7,e+1.3,"lantern",{light:1,noAO:!0})}),n.vox.addLight(t,R+r+1,e,12)),n.blockRect(t,e,t+1,e+1)}function ly(n,t,e,i,s,r,a,o,l){let c=(f,m,_,g)=>Math.hypot(f-_.x,m-_.z)<g,u=(f,m)=>!n.get(f,R,m)&&!n.blocked[m*n.w+f]&&n.get(f,R-1,m)&&!c(f+.5,m+.5,o,3)&&!c(f+.5,m+.5,l,3.2),h=(f,m)=>n.get(f,R,m-1)&&n.get(f,R+1,m-1),d=(f,m)=>n.get(f-1,R,m)&&n.get(f-1,R+1,m);for(let f=i;f<i+t.h*s;f++)for(let m=i;m<i+t.w*s;m++){if(!u(m,f))continue;let _=r(),g=h(m,f)||d(m,f);switch(e.decor){case"library":g&&_<.18?(n.set(m,R,f,"bookshelf"),r()<.5&&n.set(m,R+1,f,"bookshelf"),n.block(m,f)):!g&&_<.012?(n.table(m,R,f,2,1,"planks"),n.prop(p=>p.box(m+.3,R+.95,f+.2,m+.8,R+1.08,f+.7,"bookshelf"))):_<.03&&n.emitters.push({type:"magic",x:m+.5,y:R+.5,z:f+.5,rate:.6,spread:1.2,color:e.magic});break;case"lab":g&&_<.14?(n.set(m,R,f,"iron"),n.set(m,R+1,f,"terminal"),n.block(m,f)):!g&&_<.01?(n.table(m,R,f,2,1,"iron"),n.prop(p=>{p.box(m+.5,R+.95,f+.3,m+1.3,R+1.5,f+.4,"terminal",{light:1})}),n.vox.addLight(m,R+1,f,8)):_<.02&&n.emitters.push({type:"magic",x:m+.5,y:R+.3,z:f+.5,rate:.5,spread:1,color:e.magic});break;case"workshop":g&&_<.12?(n.set(m,R,f,_<.05?"copper":"iron"),n.block(m,f)):!g&&_<.012?(n.set(m,R,f,"magma"),n.block(m,f),n.emitters.push({type:"spark",x:m+.5,y:R+1.1,z:f+.5,rate:2})):_<.04&&n.set(m,R-1,f,"circuit");break;case"mine":g&&_<.16?(n.set(m,R,f,_<.06?"crystal":"rock_dark"),n.block(m,f)):!g&&_<.01?(n.set(m,R,f,"crystal"),n.block(m,f)):_<.05&&n.set(m,R-1,f,"gravel"),_>.985&&n.emitters.push({type:"magic",x:m+.5,y:R+.4,z:f+.5,rate:.5,spread:1,color:e.magic});break;case"museum":!g&&_<.012?(n.prop(p=>{p.box(m+.15,R,f+.15,m+.85,R+.9,f+.85,"marble"),p.box(m+.35,R+.9,f+.35,m+.65,R+1.2,f+.65,_<.006?"gold":"crystal",{light:1})}),n.vox.addLight(m,R+1,f,9),n.block(m,f)):g&&_<.06&&(n.prop(p=>{p.box(m+.2,R,f+.2,m+.8,R+.2,f+.8,"stonebrick"),p.box(m+.25,R+.2,f+.25,m+.75,R+1.1,f+.75,"temple"),p.box(m+.2,R+1.1,f+.2,m+.8,R+1.25,f+.8,"gold")}),n.block(m,f));break;case"stadium":_<.1&&n.grass(m+.5,R,f+.5,0,.6);break;case"arena":g&&_<.05&&(n.prop(p=>{p.box(m+.1,R,f+.1,m+.9,R+.7,f+.9,"iron")}),n.block(m,f)),(m+f)%9===0&&n.set(m,R-1,f,"planks_orange");break;case"hall":!g&&_<.014?(n.table(m,R,f,1,1,"wool_white"),n.prop(p=>{p.box(m+.35,R+.95,f+.35,m+.65,R+1.25,f+.65,"lantern",{light:1,noAO:!0})}),n.vox.addLight(m,R+1,f,11)):g&&_<.05&&n.barrel(m,R,f);break;case"temple":g&&_<.08?(n.prop(p=>{p.box(m+.25,R,f+.25,m+.75,R+.2,f+.75,"stonebrick"),p.box(m+.3,R+.2,f+.3,m+.7,R+1.2,f+.7,"temple"),p.box(m+.25,R+1.2,f+.25,m+.75,R+1.3,f+.75,"gold")}),n.block(m,f),n.wheels=(n.wheels||0)+1):_<.25&&n.get(m,R-1,f)===Ht.path?(n.set(m,R-1,f,"grass"),n.grass(m+.5,R,f+.5,r()<.2?3:r()<.4?5:0,1)):_>.99&&n.emitters.push({type:"firefly",x:m+.5,y:R+1,z:f+.5,rate:.3});break;case"courtyard":_<.15&&n.get(m,R-1,f)!==Ht.carpet_orange?(n.set(m,R-1,f,"grass"),n.grass(m+.5,R,f+.5,r()<.15?3:r()<.3?4:r()<.5?2:0,1)):g&&_>.97&&n.tree(m,R,f,1);break}}if(e.decor==="stadium"){let f=i-4,m=i+Math.floor(t.w*s/2)-4;n.box(m,R+4,f,m+8,R+8,f,"scoreboard"),n.box(m-1,R+3,f,m+9,R+3,f,"concrete"),n.box(m+3,R,f,m+5,R+2,f,"concrete");for(let _ of[i+2,i+t.w*s-3]){for(let g=R;g<R+9;g++)n.set(_,g,i-3,"iron");n.box(_-1,R+9,i-3,_+1,R+10,i-3,"glowstone"),n.lights.push({x:_+.5,y:R+9,z:i-1,color:16773328,intensity:10,range:22})}}if(e.decor==="workshop"||e.decor==="lab"){n.gears=[];for(let f=0;f<3;f++){let m=cy(e.decor==="lab"?"#5a6a7a":"#b06a34");m.position.set(i+3+f*9,R+3.2,i-.4),n.extra.add(m),n.gears.push({g:m,s:f%2?-.8:1})}}}function cy(n){let t=new qt,e=new We({color:n}),i=new kt(new Se(1.6,1.6,.4),e);t.add(i);for(let r=0;r<8;r++){let a=new kt(new Se(.5,.6,.4),e),o=r/8*Math.PI*2;a.position.set(Math.cos(o)*1.05,Math.sin(o)*1.05,0),a.rotation.z=o,t.add(a)}let s=new kt(new Se(.5,.5,.5),new Le({color:new bt(3,1.4,.4)}));return t.add(s),t.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),t}var Ct=1/16,hy=["left","right","top","bottom","front","back"],uy=n=>{let t=parseInt(n.slice(1),16);return[t>>16&255,t>>8&255,t&255]},En=(n,t)=>{let[e,i,s]=uy(n),r=a=>Math.max(0,Math.min(255,Math.round(a*t)));return`rgb(${r(e)},${r(i)},${r(s)})`},Ti=class{constructor(t=128,e=1){this.size=t,this.c=document.createElement("canvas"),this.c.width=this.c.height=t,this.ctx=this.c.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.sx=0,this.sy=0,this.rowH=0,this.r=Ki(e),this.tex=null}alloc(t,e){this.sx+t>this.size&&(this.sx=0,this.sy+=this.rowH,this.rowH=0);let i={x:this.sx,y:this.sy,w:t,h:e};return this.sx+=t,this.rowH=Math.max(this.rowH,e),i}texture(){return this.tex||(this.tex=new dn(this.c),this.tex.magFilter=fe,this.tex.minFilter=fe,this.tex.generateMipmaps=!1,this.tex.colorSpace=be),this.tex}};function dy(n,t){let e=n.ctx,i=n.r,s={w:t.w,h:t.h,px(r,a,o,l=1){r<0||a<0||r>=t.w||a>=t.h||(e.fillStyle=l===1?o:En(o,l),e.fillRect(t.x+r,t.y+a,1,1))},rect(r,a,o,l,c,u=.08){for(let h=0;h<l;h++)for(let d=0;d<o;d++)s.px(r+d,a+h,c,1+(i()-.5)*u)},fill(r,a=.1){s.rect(0,0,t.w,t.h,r,a)},hline(r,a,o=.06){s.rect(0,r,t.w,1,a,o)},vline(r,a,o=.06){s.rect(r,0,1,t.h,a,o)},border(r){s.hline(0,r),s.hline(t.h-1,r),s.vline(0,r),s.vline(t.w-1,r)},rnd:i};return s}function Lt(n,t,e,i,s,r=[0,0,0],a=0){let o=new Se((t+a)*Ct,(e+a)*Ct,(i+a)*Ct),l=[[i,e],[i,e],[t,i],[t,i],[t,e],[t,e]],c=o.attributes.uv,u=n.size;for(let h=0;h<6;h++){let[d,f]=l[h],m=n.alloc(d,f),_=dy(n,m);s(hy[h],_);for(let g=0;g<4;g++){let p=h*4+g,v=c.getX(p),T=c.getY(p);c.setXY(p,(m.x+v*d)/u,1-(m.y+(1-T)*f)/u)}}return c.needsUpdate=!0,o.translate(-r[0]*Ct,-r[1]*Ct,-r[2]*Ct),o}function bs(n){let t={value:0},e=Qr(new We({map:n.texture()}),t);return e.userData.light=t,e}var ir=(n,t=3)=>{let e=new bt(n);return new Le({color:e.multiplyScalar(t),toneMapped:!0})};function Dt(n,t,e=0,i=0,s=0){let r=new kt(n,t);return r.position.set(e*Ct,i*Ct,s*Ct),r.castShadow=!0,r.receiveShadow=!1,r}function pn(n,t,e){let i=new qt;return i.position.set(n*Ct,t*Ct,e*Ct),i}function sa(n,t=7){let e=new Ti(128,t),i=n,s=new qt,r=new qt;s.add(r);let a=bs(e),o={},l=p=>(v,T)=>{if(v==="top")return T.fill(i.pants);if(v==="bottom")return T.fill(i.boots,.05);T.fill(i.pants,.12),i.pantsDetail&&i.pantsDetail(v,T,p),T.rect(0,T.h-4,T.w,4,i.boots,.1),T.hline(T.h-4,i.bootsTop||En(i.boots,1.25)),v==="front"&&T.hline(T.h-1,En(i.boots,.7))},c=pn(2,12,0),u=pn(-2,12,0);c.add(Dt(Lt(e,4,12,4,l("L"),[0,6,0]),a,0,0,0)),u.add(Dt(Lt(e,4,12,4,l("R"),[0,6,0]),a)),r.add(c,u);let h=pn(0,12,0);r.add(h);let d=i.torsoH||12;h.add(Dt(Lt(e,8,d,4,(p,v)=>{v.fill(i.shirt,.12),!(p==="top"||p==="bottom")&&(i.torsoDetail&&i.torsoDetail(p,v),i.belt&&(v.hline(v.h-3,i.belt),v.hline(v.h-2,En(i.belt,.8)),p==="front"&&i.buckle&&(v.px(3,v.h-3,i.buckle),v.px(4,v.h-3,i.buckle))))},[0,-d/2,0]),a));let f=p=>(v,T)=>{if(v==="top")return T.fill(i.sleeve||i.shirt);if(v==="bottom")return T.fill(i.hand||i.skin);T.fill(i.sleeve||i.shirt,.12);let y=i.sleeveLen??5;T.rect(0,y,T.w,T.h-y,i.arm||i.skin,.06),i.glove&&T.rect(0,T.h-5,T.w,5,i.glove,.08),i.armDetail&&i.armDetail(v,T,p),T.rect(0,T.h-2,T.w,2,i.hand||i.skin,.05)},m=pn(6,22,0),_=pn(-6,22,0);m.add(Dt(Lt(e,4,12,4,f("L"),[0,4,0]),a)),_.add(Dt(Lt(e,4,12,4,f("R"),[0,4,0]),a)),h.add(m,_),m.position.set(6*Ct,10*Ct,0),_.position.set(-6*Ct,10*Ct,0);let g=pn(0,d,0);return h.add(g),g.add(Dt(Lt(e,8,8,8,(p,v)=>{if(v.fill(i.skin,.06),i.headPaint)return i.headPaint(p,v);let T=i.hair;if(p==="top")return v.fill(T,.15);if(p==="bottom")return;if(p==="back"){v.fill(T,.15);return}if(p==="left"||p==="right"){v.rect(0,0,8,3,T,.15),p==="left"?v.rect(0,0,3,6,T,.15):v.rect(5,0,3,6,T,.15),v.px(p==="left"?4:3,4,En(i.skin,.85));return}v.rect(0,0,8,2,T,.15),v.px(0,2,T),v.px(7,2,T),i.fringe&&v.rect(1,2,3,1,T);let y=i.brow||En(T,.8);if(v.px(1,3,y),v.px(2,3,y),v.px(5,3,y),v.px(6,3,y),v.px(1,4,"#ffffff"),v.px(2,4,i.eyes),v.px(5,4,i.eyes),v.px(6,4,"#ffffff"),v.px(3,5,En(i.skin,.88)),v.px(4,5,En(i.skin,.88)),v.px(3,6,En(i.skin,.62)),v.px(4,6,En(i.skin,.62)),i.beard&&(v.rect(0,5,8,3,i.beard,.15),v.rect(3,6,2,1,En(i.beard,.6)),v.px(3,5,En(i.skin,.88)),v.px(4,5,En(i.skin,.88))),i.mustache&&(v.rect(1,6,6,1,i.mustache,.1),v.px(0,7,i.mustache),v.px(7,7,i.mustache)),i.glasses){for(let S of[1,5])v.px(S-0,3,i.glasses),v.px(S+1,3,i.glasses);v.px(3,4,i.glasses),v.px(4,4,i.glasses)}},[0,-4,0]),a)),o.root=s,o.body=r,o.torso=h,o.head=g,o.armL=m,o.armR=_,o.legL=c,o.legR=u,o.skin=e,o.mat=a,o}function yu(){let n="#ef7a12",t="#c45a0c",e="#1f4a8a",i="#14306a",s="#b8c0cc",r=sa({skin:"#c08a62",hair:"#2a1a10",eyes:"#3a2414",fringe:!0,shirt:n,sleeve:n,sleeveLen:7,arm:e,glove:"#6a4426",hand:"#c08a62",pants:i,boots:"#4a2e18",bootsTop:"#7a5030",belt:"#5a3a1e",buckle:"#f0c840",torsoDetail(T,y){T==="front"?(y.rect(0,0,8,2,e),y.rect(3,2,2,6,e,.05),y.px(3,3,"#f0c840"),y.px(4,3,"#f0c840"),y.px(1,7,t),y.px(6,7,t),y.hline(8,t)):T==="back"?(y.rect(0,0,8,2,e),y.hline(8,t)):y.rect(0,0,4,2,e)},pantsDetail(T,y){T==="front"&&(y.rect(0,4,4,2,s,.1),y.hline(4,"#e0e6ee"))}},11),a=r.skin,o=r.mat;for(let[T,y]of[[r.armL,1],[r.armR,-1]]){let S=Dt(Lt(a,6,4,6,(w,x)=>{x.fill(s,.12),x.hline(x.h-1,n),w==="top"&&(x.border(En(s,.7)),x.px(2,2,"#ffffff"))},[0,0,0]),o,y*.5,1.5,0);T.add(S)}let l=Dt(Lt(a,9,4,9,(T,y)=>{y.fill(n,.1),y.hline(y.h-1,e),T==="top"&&y.rect(3,0,3,9,"#ffa040",.05)},[0,0,0]),o,0,6.6,0);r.head.add(l);let c=Dt(Lt(a,10,1,4,(T,y)=>y.fill(t,.08),[0,0,0]),o,0,4.4,4.6);r.head.add(c);let u=Dt(Lt(a,3,3,1,(T,y)=>{y.fill("#3a3a40")},[0,0,0]),o,0,6.6,4.9);r.head.add(u);let h=new kt(new Se(2*Ct,2*Ct,.6*Ct),ir("#fff2b0",6));h.position.set(0,6.6*Ct,5.5*Ct),r.head.add(h);let d=pn(0,11.5,-2.4);r.torso.add(d),d.add(Dt(Lt(a,8,13,1,(T,y)=>{y.fill(e,.12),T==="back"&&(y.rect(0,0,8,1,"#f0c840"),y.rect(3,4,2,5,n),y.rect(2,5,4,1,n)),y.hline(y.h-1,i)},[0,6.5,0]),o)),r.cape=d;let f=new qt;f.position.set(0,-10*Ct,1.2*Ct),r.armR.add(f);let m=Dt(Lt(a,1,14,1,(T,y)=>{y.fill("#5a3a1e"),y.rect(0,10,1,3,"#2a1a10")},[0,0,0]),o,0,2,0),_=Dt(Lt(a,2,12,1,(T,y)=>{y.fill("#d8e0e8",.08),y.vline(0,"#ffffff"),y.px(0,0,"#ffffff")},[0,-6,0]),o,0,9,0),g=Dt(Lt(a,7,2,2,(T,y)=>{y.fill("#c8a040"),y.px(3,0,"#ffe080")},[0,0,0]),o,0,8.5,0),p=Dt(Lt(a,9,2,2,(T,y)=>{y.fill("#8a96a4"),y.hline(0,"#c8d0da"),y.px(0,1,"#4a5260"),y.px(8,1,"#4a5260")},[0,0,0]),o,0,18.5,0),v=new kt(new Se(.6*Ct,10*Ct,1.2*Ct),ir("#ff9a30",2.4));return v.position.set(1.1*Ct,15*Ct,0),f.add(m,_,g,p,v),f.rotation.x=Math.PI/2*.9,r.weapon=f,r.lamp=h,r.kind="hero",Qn(r)}function Ep(){let n=sa({skin:"#e0a880",hair:"#4a2a14",eyes:"#2a1a10",mustache:"#3a2210",brow:"#3a2210",shirt:"#ef7a12",sleeve:"#ef7a12",sleeveLen:9,pants:"#2a4a8a",boots:"#5a3a1e",belt:"#3a2414",buckle:"#f0c840",torsoDetail(o,l){(o==="front"||o==="back")&&(l.rect(1,0,2,12,"#2a4a8a"),l.rect(5,0,2,12,"#2a4a8a"),l.rect(1,4,6,6,"#2a4a8a"),l.px(2,1,"#f0c840"),l.px(5,1,"#f0c840"));for(let c=0;c<l.h;c+=3)l.hline(c,"#d8661a")}},21),t=n.skin,e=n.mat,i=Dt(Lt(t,14,1,14,(o,l)=>{l.fill("#e8d8b0",.08),o==="top"&&l.border("#c8b890")},[0,0,0]),e,0,8.2,0),s=Dt(Lt(t,8,5,8,(o,l)=>{l.fill("#efe2bf",.06),l.hline(l.h-2,"#ef7a12"),l.hline(l.h-1,"#ef7a12"),o==="top"&&l.rect(3,0,2,8,"#d8c8a0")},[0,0,0]),e,0,11,0);n.head.add(i,s);let r=Dt(Lt(t,2,2,2,(o,l)=>l.fill("#d0906a"),[0,0,0]),e,0,3.2,4.6);n.head.add(r);let a=new qt;return a.position.set(0,-9*Ct,1.5*Ct),n.armR.add(a),a.add(Dt(Lt(t,1,16,1,(o,l)=>l.fill("#6a4a2a"),[0,0,0]),e,0,4,0)),a.add(Dt(Lt(t,10,2,2,(o,l)=>{l.fill("#9aa4b0"),l.hline(0,"#d8e0e8")},[0,0,0]),e,0,12,0)),a.rotation.x=-.3,n.armR.rotation.x=-.4,n.kind="npc",Qn(n)}function Tp(){let n=sa({skin:"#a8724e",hair:"#1a1410",eyes:"#1a1010",beard:"#2a1e16",brow:"#1a1410",headPaint:null,shirt:"#6a6e78",sleeve:"#6a6e78",sleeveLen:3,pants:"#3a2e24",boots:"#2a1e16",belt:"#2a1a10",buckle:"#c8c8c8",torsoDetail(i,s){i==="front"&&(s.rect(1,1,6,11,"#7a4a24",.12),s.hline(1,"#5a3418"),s.px(1,0,"#5a3418"),s.px(6,0,"#5a3418"),s.rect(3,5,2,2,"#5a3418"))}},31),t=Dt(Lt(n.skin,8.4,2,8.4,(i,s)=>s.fill("#a8724e",.05),[0,0,0]),n.mat,0,7.1,0);n.head.add(t);let e=new qt;return e.position.set(0,-10*Ct,1*Ct),n.armR.add(e),e.add(Dt(Lt(n.skin,1,9,1,(i,s)=>s.fill("#5a3a1e"),[0,0,0]),n.mat,0,1,0)),e.add(Dt(Lt(n.skin,4,3,3,(i,s)=>{s.fill("#5a5e68"),s.hline(0,"#9aa0aa")},[0,0,0]),n.mat,0,6,0)),e.rotation.x=.6,n.kind="npc",Qn(n)}function Ap(){let n=sa({skin:"#d8a07a",hair:"#d8d8d0",eyes:"#2a3a6a",glasses:"#2a2a2a",brow:"#b8b8b0",shirt:"#2a5aa8",sleeve:"#2a5aa8",sleeveLen:11,pants:"#2a5aa8",boots:"#3a2414",belt:"#e8c56b",buckle:"#ffffff",torsoH:12,torsoDetail(r,a){r==="front"&&(a.vline(3,"#e8c56b"),a.vline(4,"#e8c56b")),a.hline(0,"#e8c56b")},pantsDetail(r,a){a.rect(0,0,4,8,"#2a5aa8")}},41),t=Dt(Lt(n.skin,9,9,5,(r,a)=>{a.fill("#244e94",.1),a.hline(a.h-1,"#e8c56b"),r==="front"&&a.vline(4,"#e8c56b")},[0,0,0]),n.mat,0,7.5,0);n.body.add(t);let e=Dt(Lt(n.skin,9,3,9,(r,a)=>{a.fill("#7a3a8a"),a.hline(a.h-1,"#e8c56b")},[0,0,0]),n.mat,0,9,0);n.head.add(e);let i=Dt(Lt(n.skin,5,3,5,(r,a)=>a.fill("#7a3a8a"),[0,0,0]),n.mat,0,12,0);n.head.add(i);let s=Dt(Lt(n.skin,2,2,8,(r,a)=>{a.fill("#f0e0b0"),(r==="left"||r==="right")&&a.hline(1,"#b8a070")},[0,0,0]),n.mat,0,-10,3);return n.armL.add(s),n.armL.rotation.x=-.6,n.kind="npc",Qn(n)}function Rp(n=5){let t=Ki(n),e=["#ef7a12","#1f4a8a","#e8e8e4","#2a6a3a","#8a2a2a"],i=["#e0b08a","#c08a62","#8a5a3a","#f0c8a0"],s=["#2a1a10","#5a3a1e","#1a1410","#a06a30"],r=sa({skin:i[t()*4|0],hair:s[t()*4|0],eyes:"#2a1a10",shirt:e[t()*5|0],sleeveLen:4,pants:"#3a4a6a",boots:"#e8e8e8",belt:null},50+n);return r.kind="npc",Qn(r)}function Cp(n=1){let t="#3e4a3a",e="#2a3428",i="#a03020",s=sa({skin:"#7a8a8a",hair:t,eyes:"#ffe040",shirt:t,sleeve:t,sleeveLen:12,pants:"#2a2a30",boots:"#1a1a1e",belt:i,buckle:"#c8c8c8",headPaint(l,c){c.fill(t,.12),l==="front"&&(c.rect(1,2,6,6,"#141814",.05),c.px(2,4,"#ffe040"),c.px(5,4,"#ffe040"),c.px(2,5,"#ffa020"),c.px(5,5,"#ffa020"),c.hline(0,i))},torsoDetail(l,c){l==="front"&&(c.vline(3,i),c.vline(4,i))}},60+n),r=Dt(Lt(s.skin,9,3,9,(l,c)=>{c.fill(e,.1)},[0,0,0]),s.mat,0,8,-.5);s.head.add(r);let a=new kt(new Se(5*Ct,1*Ct,.4*Ct),ir("#ffd040",3));a.position.set(0,3.5*Ct,4.2*Ct),s.head.add(a);let o=new qt;return o.position.set(0,-10*Ct,1*Ct),s.armR.add(o),o.add(Dt(Lt(s.skin,2,12,2,(l,c)=>{c.fill("#5a3e24"),c.rect(0,0,2,3,"#6a6e78")},[0,0,0]),s.mat,0,5,0)),o.add(Dt(Lt(s.skin,4,4,4,(l,c)=>{c.fill("#6a6e78"),c.px(1,1,"#aab0ba")},[0,0,0]),s.mat,0,11,0)),o.rotation.x=1.2,s.kind="raider",s.eyes=a,Qn(s)}function Ip(n=1){let t=new Ti(64,70+n),e=bs(t),i=new qt,s=new qt;i.add(s);let r="#3a2a5a",a="#5a4a8a",o="#7aff9a",l=Dt(Lt(t,10,5,12,(m,_)=>{if(_.fill(r,.12),m==="top"){_.vline(4,"#1a1030"),_.vline(5,"#1a1030");for(let g=2;g<12;g+=3)_.px(2,g,o),_.px(7,g,o);_.rect(1,0,8,1,a)}},[0,0,0]),e,0,6,0),c=Dt(Lt(t,6,4,4,(m,_)=>{_.fill("#2a1e40")},[0,0,0]),e,0,5.5,7.5);s.add(l,c);let u=new Se(1.4*Ct,1.4*Ct,.6*Ct),h=ir("#ff3a3a",4);for(let m of[-1.8,1.8]){let _=new kt(u,h);_.position.set(m*Ct,6*Ct,9.6*Ct),s.add(_)}let d=[];for(let m of[-1,1])for(let _ of[-3.5,.5,4.5]){let g=pn(m*5,5,_);g.add(Dt(Lt(t,5,1,1,(p,v)=>v.fill("#1e1630"),[m*-2.5,0,0]),e)),s.add(g),d.push({g,side:m,z:_})}for(let m of[-1,1]){let _=Dt(Lt(t,1,1,4,(g,p)=>p.fill("#1e1630"),[0,0,-2]),e,m*1.5,7,9.5);_.rotation.x=-.5,s.add(_)}return Qn({root:i,body:s,legs:d,skin:t,mat:e,kind:"bug"})}function Pp(n=1,t="#5ad0ff"){let e=new Ti(64,80+n),i=bs(e),s=new qt,r=new qt;s.add(r);let a=Dt(Lt(e,10,10,10,(h,d)=>{d.fill("#5a5e6a",.15),d.border("#3a3e48"),h==="front"&&(d.rect(2,3,2,2,"#101014"),d.rect(6,3,2,2,"#101014"),d.rect(3,7,4,1,"#101014")),h==="top"&&d.rect(3,3,4,4,"#7a7e8a")},[0,0,0]),i,0,20,0);r.add(a);let o=ir(t,4);for(let h of[-2,2]){let d=new kt(new Se(2*Ct,2*Ct,.5*Ct),o);d.position.set(h*Ct,22*Ct,5.2*Ct),r.add(d)}let l=new kt(new Se(4*Ct,4*Ct,4*Ct),ir(t,2.5));l.position.set(0,12*Ct,0),r.add(l);let c=[];for(let h of[-1,1]){let d=Dt(Lt(e,4,4,4,(f,m)=>{m.fill("#5a5e6a",.12),m.border("#3a3e48")},[0,0,0]),i,h*9,14,2);r.add(d),c.push(d)}return Qn({root:s,body:r,head:a,hands:c,core:l,skin:e,mat:i,kind:"wisp"})}function Lp(n=1){let t=new Ti(64,90+n),e=bs(t),i=new qt,s=new qt;i.add(s);let r=new kt(Lt(t,12,12,12,(l,c)=>{c.fill("#2a3a8a",.18),c.border("#1a2460"),l==="front"&&(c.rect(2,3,3,3,"#0a0a1a"),c.rect(7,3,3,3,"#0a0a1a"),c.px(3,4,"#ffffff"),c.px(8,4,"#ffffff"),c.rect(4,8,4,1,"#0a0a1a"))},[0,-6,0]),new We({map:t.texture(),transparent:!0,opacity:.88}));r.castShadow=!0,s.add(r);let a=new kt(new Se(5*Ct,5*Ct,5*Ct),ir("#ff9a30",2));return a.position.y=5*Ct,s.add(a),Qn({root:i,body:s,outer:r,core:a,skin:t,mat:e,kind:"blob"})}function Dp(){let n=new Ti(64,101),t=bs(n),e=new qt,i=new qt;e.add(i);let s="#d8d4cc",r="#a8a49c";i.add(Dt(Lt(n,6,6,12,(u,h)=>{h.fill(s,.12),u==="top"&&h.rect(0,0,6,5,r,.1)},[0,0,0]),t,0,9,0)),i.add(Dt(Lt(n,8,6,6,(u,h)=>{h.fill(s,.1)},[0,0,0]),t,0,10,4));let a=pn(0,11,8);i.add(a),a.add(Dt(Lt(n,6,6,4,(u,h)=>{h.fill(s,.08),u==="front"&&(h.px(1,2,"#1a1a1a"),h.px(4,2,"#1a1a1a"))},[0,0,-2]),t)),a.add(Dt(Lt(n,3,3,4,(u,h)=>{h.fill("#e8e4dc"),u==="front"&&h.rect(1,0,1,1,"#1a1a1a")},[0,0,0]),t,0,-1.2,4));for(let u of[-1,1])a.add(Dt(Lt(n,2,2,1,(h,d)=>d.fill(r),[0,0,0]),t,u*2,4,1));let o=Dt(Lt(n,6.6,1.4,4.6,(u,h)=>{h.fill("#ef7a12"),h.px(3,0,"#f0c840")},[0,0,0]),t,0,-2.2,1.5);a.add(o);let l=[];for(let[u,h]of[[-2,4],[2,4],[-2,-4],[2,-4]]){let d=pn(u,7,h);d.add(Dt(Lt(n,2,7,2,(f,m)=>m.fill(s,.1),[0,3.5,0]),t)),i.add(d),l.push(d)}let c=pn(0,10,-6);return c.add(Dt(Lt(n,2,2,7,(u,h)=>h.fill(s,.1),[0,0,-3.5]),t)),c.rotation.x=.6,i.add(c),Qn({root:e,body:i,head:a,legs:l,tail:c,skin:n,mat:t,kind:"quad"})}function Np(n=1){let t=new Ti(64,111+n),e=bs(t),i=new qt,s=new qt;i.add(s),s.add(Dt(Lt(t,9,8,12,(o,l)=>{l.fill("#ecebe6",.18);for(let c=0;c<12;c++)l.px(l.rnd()*l.w|0,l.rnd()*l.h|0,"#d0cec8")},[0,0,0]),e,0,10,0));let r=pn(0,12,6);s.add(r),r.add(Dt(Lt(t,6,6,6,(o,l)=>{l.fill("#ecebe6",.12),o==="front"&&(l.rect(1,2,4,4,"#d8b8a0"),l.px(1,3,"#1a1a1a"),l.px(4,3,"#1a1a1a"),l.rect(2,5,2,1,"#c09080"))},[0,0,-3]),e));let a=[];for(let[o,l]of[[-3,4],[3,4],[-3,-4],[3,-4]]){let c=pn(o,6,l);c.add(Dt(Lt(t,3,6,3,(u,h)=>{h.fill("#ecebe6"),h.rect(0,3,3,3,"#d8b8a0")},[0,3,0]),e)),s.add(c),a.push(c)}return Qn({root:i,body:s,head:r,legs:a,skin:t,mat:e,kind:"quad"})}function Up(n=1){let t=new Ti(32,121+n),e=bs(t),i=new qt,s=new qt;i.add(s),s.add(Dt(Lt(t,5,5,6,(o,l)=>l.fill("#f4f2ee",.08),[0,0,0]),e,0,5.5,0));let r=pn(0,8,3);s.add(r),r.add(Dt(Lt(t,3,4,3,(o,l)=>{l.fill("#f4f2ee"),o==="front"&&(l.px(0,1,"#1a1a1a"),l.px(2,1,"#1a1a1a"))},[0,0,0]),e)),r.add(Dt(Lt(t,2,1,2,(o,l)=>l.fill("#f0a020"),[0,0,0]),e,0,0,2)),r.add(Dt(Lt(t,1,2,1,(o,l)=>l.fill("#d02020"),[0,0,0]),e,0,-1.5,1.8));let a=[];for(let o of[-1,1]){let l=pn(o,3,0);l.add(Dt(Lt(t,1,3,1,(c,u)=>u.fill("#f0a020"),[0,1.5,0]),e)),s.add(l),a.push(l)}return Qn({root:i,body:s,head:r,legs:a,skin:t,mat:e,kind:"quad",small:!0})}function Mu(n=!1){let t=new Ti(64,n?131:132),e=bs(t),i=n?"#2a4a8a":"#8a5a2a",s=n?"#1a2e5a":"#5a3a1a",r=n?"#f0c840":"#c8c8c8",a=new qt,o=Dt(Lt(t,14,10,14,(u,h)=>{h.fill(i,.12);for(let d=2;d<h.h;d+=4)h.hline(d,s);h.vline(0,r),h.vline(h.w-1,r),h.hline(0,r)},[0,-5,0]),e,0,0,0);a.add(o);let l=pn(0,10,-7);a.add(l),l.add(Dt(Lt(t,14,5,14,(u,h)=>{h.fill(i,.1),h.border(r),u==="top"&&(h.vline(6,r),h.vline(7,r))},[0,-2.5,7]),e)),l.add(Dt(Lt(t,2,4,1,(u,h)=>{h.fill(r),h.px(0,2,"#1a1a1a")},[0,0,0]),e,0,0,14.5));let c={root:a,lid:l,skin:t,mat:e,kind:"chest"};return a.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),c}var Sp={hero:[1,.72,.4],npc:[.55,.5,.42],quad:[.4,.38,.34],raider:[.46,.5,.56],bug:[.46,.5,.56],wisp:[.4,.9,1.4],blob:[.46,.5,.56],chest:[.5,.4,.2]},wp={hero:1.28,npc:1.22,quad:1.15,raider:1.3,bug:1.3,wisp:1.3,blob:1.3,chest:1.1};function fy(n,t){if(!n||!n.isMeshLambertMaterial||n.userData.rim)return;n.userData.rim=t;let e=n.onBeforeCompile,i=n.customProgramCacheKey?n.customProgramCacheKey.call(n):"";n.onBeforeCompile=(s,r)=>{e&&e.call(n,s,r),s.uniforms.uRim=t,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRim;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
{ float rimF = 1.0 - abs(dot(normalize(normal), normalize(vViewPosition))); totalEmissiveRadiance += uRim * (rimF * rimF * 0.9); }`)},n.customProgramCacheKey=()=>"rim|"+i}function Qn(n){let t=Sp[n.kind]||Sp.npc,e={value:new bt(t[0],t[1],t[2])};return n.rim=e,wp[n.kind]&&!n.small&&n.root.scale.setScalar(wp[n.kind]),n.root.traverse(i=>{i.isMesh&&(i.castShadow=!0,fy(i.material,e))}),n.phase=Math.random()*10,n}function sr(n,t,e){n.phase+=e*(2+(t.speed||0)*9);let i=n.phase,s=Math.min(1,t.speed||0);if(n.kind==="hero"||n.kind==="npc"||n.kind==="raider"){let r=Math.sin(i)*.9*s;n.legL.rotation.x=r,n.legR.rotation.x=-r;let a=-r*.8,o=r*.8,l=Math.sin(performance.now()/600+(n.phase0||0))*.03;if(n.body.position.y=Math.abs(Math.cos(i))*.05*s,n.torso.rotation.y=0,n.torso.rotation.x=.04*s,n.head.rotation.x=-.04*s+l*.5,n.kind==="npc"&&!s&&(a=l*2,o=n.armR.userData.base??n.armR.rotation.x,n.head.rotation.y=Math.sin(performance.now()/1700+n.phase)*.3),n.armL.rotation.x=a,n.armL.rotation.z=.06+l,n.kind!=="npc"&&(n.armR.rotation.x=o,n.armR.rotation.z=-.06-l),t.action==="attack"){let c=1-Math.max(0,t.actionT)/(t.actionDur||.3),u=c<.35?-2.6*(c/.35):-2.6+3.6*((c-.35)/.65);n.armR.rotation.x=u,n.armR.rotation.z=-.3,n.torso.rotation.y=Math.sin(c*Math.PI)*-.6,n.body.position.y=0}if(n.cape&&(n.cape.rotation.x=.12+s*.5+Math.sin(i*2)*.06*s),n.weapon&&t.action!=="attack"&&(n.weapon.rotation.x=Math.PI/2*.9),t.action==="roll"){let c=1-Math.max(0,t.actionT)/(t.actionDur||.35);n.body.rotation.x=c*Math.PI*2,n.body.position.y=Math.sin(c*Math.PI)*.35+0,n.legL.rotation.x=-1.2,n.legR.rotation.x=-1.2,n.armL.rotation.x=-1.4,n.armR.rotation.x=-1.4}else n.body.rotation.x=0;t.hurt>0?n.body.rotation.z=Math.sin(t.hurt*40)*.08:n.body.rotation.z=0}else if(n.kind==="quad"){let r=Math.sin(i)*.7*s;n.legs.forEach((a,o)=>{a.rotation.x=o===0||o===3?r:-r}),t.sit&&n.legs.length>3?(n.legs[2].rotation.x=-1.4,n.legs[3].rotation.x=-1.4,n.body.rotation.x=-.35,n.body.position.y=-.12):(n.body.rotation.x=0,n.body.position.y=0),n.tail&&(n.tail.rotation.y=Math.sin(performance.now()/120)*.5),n.head&&(n.head.rotation.x=t.graze?.6+Math.sin(performance.now()/300)*.1:Math.sin(performance.now()/900+n.phase)*.08),n.small&&(n.body.position.y=Math.abs(Math.sin(i))*.04*s)}else if(n.kind==="bug"){for(let r of n.legs)r.g.rotation.y=Math.sin(i*2+r.z)*.5*r.side*(.3+s);n.body.position.y=Math.abs(Math.sin(i*2))*.03,t.action==="attack"?n.body.rotation.x=-Math.sin((1-t.actionT/.4)*Math.PI)*.4:n.body.rotation.x=0}else if(n.kind==="wisp"){let r=performance.now()/1e3+n.phase;n.body.position.y=Math.sin(r*2)*.12+.2,n.hands.forEach((a,o)=>{a.position.y=(14+Math.sin(r*3+o*2)*1.5)*Ct,a.position.z=(2+(t.action==="attack"?6:0))*Ct}),n.core.rotation.y=r*2,n.core.rotation.x=r}else if(n.kind==="blob"){let r=n.phase,a=Math.max(0,Math.sin(r*1.2));n.body.position.y=a*.35,n.outer.scale.set(1+(1-a)*.12,1-(1-a)*.14,1+(1-a)*.12),n.core.rotation.y=r}n.mat?.userData?.light&&t.light!=null&&(n.mat.userData.light.value=t.light)}function Nc(n,t){n.mat&&(n.mat.emissive=n.mat.emissive||new bt,n.mat.emissive.setRGB(t*.9,t*.15,t*.1))}var bu=new Map,Su=(n,t)=>bu.has(n)?bu.get(n):bu.set(n,t()).get(n);function py(n,t,e=3){let i=n[0].length,s=n.length,[r,a]=bc(i*e,s*e),[o,l]=bc(i,s);return np(l,n,t,0,0),a.imageSmoothingEnabled=!1,a.drawImage(o,0,0,r.width,r.height),r}var Fp={heart:{pal:{r:"#e02020",R:"#ff5050",d:"#8a1010",k:"#3a0000",w:"#ffd0d0"},rows:[".rr...rr.","rRRrrrRRr","rRRRwRRRr","rRRRRRRRr",".rRRRRRr.","..rRRRr..","...rRr...","....r...."]},potion:{pal:{r:"#e02020",R:"#ff6060",g:"#c8d0d8",G:"#e8eef4",k:"#3a3a42",o:"#8a2010"},rows:["..kkk..","...k...","..gGg..",".gRRRg.",".gRrRg.",".gRRRg.","..ggg.."]},roll:{pal:{o:"#e07010",O:"#ff8a20",y:"#f0d060",k:"#2a1c12"},rows:["...yyy...","..yOOOy..",".yOoooOy.",".yOooook.",".yOoooOy.","..yOOOy..","...yyy..."]},map:{pal:{p:"#d8c490",P:"#c0ac78",g:"#3a8a28",b:"#1f4a8a",o:"#e07010",k:"#3a2a14"},rows:[".kkkkkkk.","kPPPPPPPk","kPgPgPbPk","kPPogPPPk","kPbPgPoPk","kPPPPPPPk",".kkkkkkk."]},arrows:{pal:{y:"#f0d060",w:"#c8b090",k:"#3a2a14",a:"#8a5a28"},rows:["......y.",".....yw.","....ywa.","...ywa..","k.ywa...","kkwa....",".kk....."]},bag:{pal:{a:"#6a4020",A:"#8a5a30",y:"#f0d060",k:"#2a1c12"},rows:["..k..k..",".kkkkkk.",".AAAAAA.",".AAyAAA.",".AAAAAA.",".AAAAAA.","..AAAA.."]},coin:{pal:{y:"#f0d060",Y:"#d4a020",o:"#ff8200",k:"#6a4010"},rows:["..YYYY..",".YYyyYY.",".YyooYy.",".YyooYy.",".YYyyYY.","..YYYY.."]},sword:{pal:{i:"#d0d4dc",I:"#a0a4ac",y:"#f0d060",a:"#6a4020",k:"#2a2a30"},rows:["......i",".....iI","....iI.","k..iI..","kyyI...",".aa....",".a....."]},bow:{pal:{a:"#8a5a28",A:"#6a4020",y:"#f0d060",k:"#2a1c12"},rows:["...AA..","..A..A.",".A....y","A.....y",".A....y","..A..A.","...AA.."]},helm:{pal:{i:"#8a9098",I:"#6a7078",o:"#e07010",k:"#2a2a30"},rows:["..IIII..",".IiiiiI.","IiiiiiiI","Ii.kk.iI","Ii....iI","I......I"]},chestarm:{pal:{o:"#e07010",O:"#ff8a20",b:"#1f4a8a",k:"#2a1c12"},rows:["o......o","OOooooOO",".OObbOO.",".OOOOOO.",".OObbOO.","..OOOO.."]},legs:{pal:{b:"#1f4a8a",B:"#183a70",k:"#0e1e38"},rows:[".BBBBBB.",".BBb.bB.",".BB...BB",".BB...BB",".BB...BB",".kk...kk"]},boots:{pal:{a:"#4a3020",A:"#3a2418",k:"#1a1010"},rows:["........",".AA..AA.",".AA..AA.","AAA..AAA","kkk..kkk"]},star:{pal:{y:"#f0d060",Y:"#ffe9a0",o:"#e07010"},rows:["....Y....","....y....","..YyyyY..",".YyyyyyY.","....y....","...y.y...","..y...y.."]},camera:{pal:{k:"#2a2a30",i:"#6a6a72",y:"#f0d060",b:"#1f4a8a",w:"#e8e8f0"},rows:["..kkkk...","kkkkkkkkk","kiiiyiiik","ki.www.ik","ki.wbw.ik","ki.www.ik","kkkkkkkkk"]},trophy:{pal:{y:"#f0d060",Y:"#d4a020",a:"#6a4020"},rows:["Y......Y","YYyyyyYY",".YyyyyY.","..YyyY..","...YY...","..aaaa..",".aaaaaa."]},shield:{pal:{b:"#1f4a8a",B:"#183a70",o:"#e07010",y:"#f0d060"},rows:[".BBBBBB.","BByyyooB","BBybyooB","BByyyooB",".BByooB.","..BBoB..","...BB..."]},quill:{pal:{w:"#e8e0d0",a:"#8a5a28",k:"#2a1c12",b:"#1f4a8a"},rows:["......w",".....ww","....wwa","...waak","..wak..",".bk....","b......"]},paper:{pal:{w:"#f0ece4",W:"#d8d4cc",k:"#3a3a42",b:"#1f4a8a"},rows:[".WWWWWW.","WwwwwwW.","WwbbbwwW","WwwwwwW.","WwkkkwwW","WwwwwwW.",".WWWWWW."]},castle:{pal:{s:"#8a8680",S:"#6a6662",o:"#e07010",b:"#1f4a8a"},rows:["s.s.s.s","sssssss","sbbosss","sssssss","s.s.s.s","sssssss"]},house:{pal:{r:"#8a2018",a:"#c4b49a",b:"#1f4a8a",k:"#3a2a14"},rows:["...r...","..rrr..",".rrrrr.","rrrrrrr",".aaaaa.",".abkba.",".aaaaa."]},envelope:{pal:{w:"#f0ece4",b:"#1f4a8a",o:"#e07010"},rows:["wwwwwww","wobobow","wbobobw","wbbbbbw","wwwwwww"]},head:{pal:{s:"#e0b08a",h:"#3a2418",e:"#1a1010",o:"#e07010"},rows:["..hhhh..",".hsssshh",".sseeess",".ssssss.","..oooo.."]},knowledge:{pal:{y:"#f0d060",a:"#8a5a28",w:"#f0ece4"},rows:["..yyy..",".ywwwy.",".ywaawy",".ywwwwy","..yyyy."]},clock:{pal:{y:"#f0d060",k:"#2a2a30",w:"#f0ece4"},rows:["..yyy..",".ywwwy.",".ywkwwy",".ywwkwy","..yyy.."]},pick:{pal:{i:"#8a9098",a:"#6a4020",k:"#2a2a30"},rows:["iii....","iia....","..ia...","...ia..","....ia.",".....ak"]}};function lo(n,t=3){let e=Fp[n]||Fp.star;return Su(`ic|${n}|${t}`,()=>py(e.rows,e.pal,t))}function Tn(n,t=3){return Su(`url|${n}|${t}`,()=>lo(n,t).toDataURL())}function kp(n=1,t=72){return Su(`bigheart|${Math.round(n*20)}|${t}`,()=>{let[e,i]=bc(t,t),s=(r,a)=>{i.save(),i.translate(t/2,t/2+2),i.scale(r,r),i.beginPath(),i.moveTo(0,10),i.bezierCurveTo(-24,-4,-22,-22,-10,-22),i.bezierCurveTo(-2,-22,0,-14,0,-14),i.bezierCurveTo(0,-14,2,-22,10,-22),i.bezierCurveTo(22,-22,24,-4,0,10),i.closePath(),i.fillStyle=a,i.fill(),i.restore()};if(s(1.15,"#1a0000"),s(1.02,"#5a0a0a"),s(1,"#8a1010"),n>0){i.save();let r=t*(1-n);i.beginPath(),i.rect(0,r,t,t-r),i.clip(),s(1,"#e02020"),i.restore(),i.save(),i.globalAlpha=.35,i.translate(t*.38,t*.32),i.beginPath(),i.ellipse(0,0,8,5,-.5,0,Math.PI*2),i.fillStyle="#ffd0d0",i.fill(),i.restore()}return e})}var An=72,Rn=48,my=22;function Op(){let n=new xi;n.background=mu("#120c08","#1e140c","#2a1c10"),n.fog=new Us(1708554,70,140);let t=Rc(n,2);t.sun.intensity=2.4,t.sun.color.set(16769200),t.hemi.intensity=.8,t.hemi.color.set(14207231),t.hemi.groundColor.set(4861984),t.sunDir.set(-.5,1,.4).normalize(),t.sun.shadow.camera.left=-44,t.sun.shadow.camera.right=44,t.sun.shadow.camera.top=44,t.sun.shadow.camera.bottom=-44,t.sun.shadow.camera.updateProjectionMatrix();let e=new ys(An,my,Rn),i=Ei.map(x=>[Math.round(8+x.pos.x*(An-16)),Math.round(8+x.pos.y*(Rn-16))]);for(let x=0;x<Rn;x++)for(let M=0;M<An;M++){let I=M/An,L=x/Rn,P=3+Math.round(Math.sin(M*.3)*.6+Math.cos(x*.4)*.6),U=Math.min(Math.abs(L-.08)*2.2+Math.abs(I-.6)*.2,Math.abs(I-.94)*2.6+Math.abs(L-.35)*.4),k=Math.max(0,1-U*2.6);P+=Math.round(k*k*15+k*Math.sin(M*.9+x*.6)*2);let C=.86-Math.sin(I*4.2)*.05-I*.05,z=Math.abs(L-C)<.035;z&&(P=2);let X=99;for(let[V,nt]of i)X=Math.min(X,Math.hypot(M-V,x-nt));X<4&&k<.4&&(P=Math.max(P,4));for(let V=0;V<P;V++){let nt=Ht.dirt;V===P-1?nt=k>.25?P>12?Ht.rock_dark:Ht.rock:X<3.2?Ht.path:Math.sin(M*1.3+x*.7)>.6?Ht.sand:Ht.grass:k>.25&&(nt=Ht.rock),e.set(M,V,x,nt)}z&&e.set(M,2,x,Ht.water),!z&&k<.25&&X>3&&Math.sin(M*2.1)*Math.cos(x*1.7)>.82&&e.set(M,P,x,Ht.leaves)}Ei.forEach((x,M)=>{let[I,L]=i[M],P=4,U=x.id;if(U==="sunbowl")for(let k=-2;k<=2;k++)for(let C=-3;C<=3;C++){let z=Math.abs(C)===3||Math.abs(k)===2;e.set(I+C,P,L+k,z?Ht.seats_orange:Ht.field),z&&e.set(I+C,P+1,L+k,Ht.seats_blue)}else if(U==="pick"){for(let k=0;k<4;k++)e.set(I,P+k,L,Ht.iron);e.set(I-1,P+4,L,Ht.glowstone),e.set(I,P+4,L,Ht.iron),e.set(I+1,P+4,L,Ht.crystal)}else if(U==="lhakhang")e.box(I-1,P,L-1,I+1,P+1,L+1,Ht.plaster),e.box(I-2,P+2,L-2,I+2,P+2,L+2,Ht.roof_dark),e.set(I,P+3,L,Ht.gold);else if(U==="haskins")e.box(I-2,P,L-2,I+2,P+1,L+2,Ht.concrete),e.box(I-2,P+2,L-2,I+2,P+2,L+2,Ht.wool_blue);else{let k=U==="library"||U==="engineering",C=k?2:1;e.box(I-C,P,L-C,I+C,P+1+(k?1:0),L+C,Ht.plaster),e.box(I-C,P+2+(k?1:0),L-C,I+C,P+2+(k?1:0),L+C,Ht.kemar),e.box(I-C-1,P+3+(k?1:0),L-C-1,I+C+1,P+3+(k?1:0),L+C+1,Ht.roof),U==="ccsb"&&e.set(I,P+4,L,Ht.terminal)}});for(let x=0;x<i.length-1;x++){let[M,I]=i[x],[L,P]=i[x+1],U=Math.ceil(Math.hypot(L-M,P-I));for(let k=0;k<=U;k++){let C=Math.round(M+(L-M)*k/U),z=Math.round(I+(P-I)*k/U),X=e.topSolid(C,z)-1;X>=0&&e.get(C,X,z)!==Ht.water&&X<7&&e.set(C,X,z,Ht.path)}}e.computeLight();let{opaque:s,water:r}=e.buildMesh(),a=new kt(s,jr());a.castShadow=!0,a.receiveShadow=!0;let o=new qt;if(o.add(a),r){let x=new kt(r,Ac());o.add(x)}o.position.set(-An/2,0,-Rn/2),n.add(o);{let x=Math.round(An*.42),M=4;for(;M<Rn-1&&e.topSolid(x,M)>11;)M++;let I=vu(1.7,.42,.24);I.position.set(x-An/2+.5,e.topSolid(x,M)+1.4,M-Rn/2+1.6),I.rotation.x=-.9,I.userData.mat.color.setRGB(1.8,1.6,1.1),I.userData.glowMat.opacity=.35,n.add(I)}let l=new We({color:4860950}),c=new We({color:13145644,emissive:3809280}),u=new qt,h=(x,M,I,L,P,U,k=l)=>{let C=new kt(new Se(x,M,I),k);C.position.set(L,P,U),C.castShadow=!0,C.receiveShadow=!0,u.add(C)};h(An+6,3,3,0,1.5,-Rn/2-1.5),h(An+6,3,3,0,1.5,Rn/2+1.5),h(3,3,Rn,-An/2-1.5,1.5,0),h(3,3,Rn,An/2+1.5,1.5,0);for(let x of[-1,1])for(let M of[-1,1])h(3.6,3.6,3.6,x*(An/2+1.5),1.8,M*(Rn/2+1.5),c);h(An+10,1,Rn+10,0,-.5,0,new We({color:2758668})),n.add(u);let d=[],f=new ta(80);n.add(f.mesh);let m=new nr(500,!0);n.add(m.points),Ei.forEach((x,M)=>{let[I,L]=i[M],P=I-An/2+.5,U=L-Rn/2+.5,k=e.topSolid(I,L),C=new qt;C.position.set(P,k+.1,U);let z=new kt(new hs(.9,1.1,.5,8),c);z.position.y=.25,z.castShadow=!0,C.add(z);let X=new hs(.35,.6,9,10,1,!0);X.translate(0,4.5,0);let V=new Le({color:new bt(2.2,1.4,.5),transparent:!0,opacity:.32,blending:yn,depthWrite:!1,side:rn}),nt=new kt(X,V);C.add(nt);let q=new dn(lo(x.loot.icon,4));q.magFilter=fe,q.colorSpace=be;let K=new Aa(new kr({map:q,transparent:!0,depthTest:!1,color:new bt(1.1,1.1,1.1)}));K.scale.set(2.2,2.2,1),K.position.y=3.2,K.renderOrder=20,C.add(K);let it=new kt(new us(1.2,1.6,24),new Le({color:new bt(2.5,1.6,.4),transparent:!0,opacity:.8,blending:yn,depthWrite:!1}));it.rotation.x=-Math.PI/2,it.position.y=.55,C.add(it),n.add(C),f.add(P,k+.7,U,.25,!1),d.push({id:x.id,g:C,beam:nt,beamMat:V,icon:K,ring:it,pos:new B(P,k+4.5,U),base:new B(P,k,U)})});let _=new Ne(40,1,.5,300),g={t:0,open:0,selected:null,visited:new Set},p=d.reduce((x,M)=>x.add(M.base),new B).multiplyScalar(1/d.length),v=new B(p.x-7,2,p.z-2),T=new B(v.x,110,v.z+24),y=new B(v.x,60,v.z+43),S=new Xi,w=new St;return{scene:n,camera:_,nodes:d,rig:t,open(x,M){g.open=0,g.selected=x||g.selected,g.visited=M||g.visited},select(x){g.selected=x},update(x,M,I){g.t+=x,g.open=Math.min(1,g.open+x*(I?10:.9));let L=1-Math.pow(1-g.open,3),P=M.w/M.h;_.aspect=P,_.fov=P<1?62:40,_.updateProjectionMatrix();let U=d.find(z=>z.id===g.selected),k=v.clone();U&&!I&&k.lerp(U.base,.25),_.position.lerpVectors(T,y,L),P<1&&(_.position.y+=30);let C=I?0:Math.sin(g.t*.25)*2.5;_.position.x+=C+(U?U.base.x*.15:0),_.lookAt(k),t.follow(new B(0,0,0)),je.uTime.value=g.t,d.forEach(z=>{let X=z.id===g.selected||z.id===this.hover,V=g.visited.has(z.id),nt=.5+.5*Math.sin(g.t*3+z.pos.x);z.beamMat.color.setRGB(V?.4:1.3,V?1.3:.85,V?.5:.3),z.beamMat.opacity=(X?.5:.14)+nt*.08,z.icon.position.y=3.2+Math.sin(g.t*2+z.pos.z)*.25+(X?.6:0);let q=X?2.9:2.2;z.icon.scale.set(q,q,1),z.ring.scale.setScalar(X?1.3+nt*.2:1),z.ring.material.color.setRGB(X?2:1.2,X?1.6:.75,X?.6:.2),!I&&Math.random()<x*(X?14:3)&&m.spawn({x:z.base.x+(Math.random()-.5)*1.2,y:z.base.y+.6,z:z.base.z+(Math.random()-.5)*1.2,vy:1.6+Math.random(),color:V?[.6,2,.8]:[2.2,1.4,.4],size:.25,life:1.6,drag:.2})}),f.update(g.t),m.mat.uniforms.uScale.value=M.h*.9,m.update(x,g.t)},pick(x,M,I){let L=I.getBoundingClientRect();w.set((x-L.left)/L.width*2-1,-((M-L.top)/L.height)*2+1),S.setFromCamera(w,_);let P=null,U=1e9;for(let k of d){let C=S.ray.distanceToPoint(k.pos),z=S.ray.distanceToPoint(k.base),X=Math.min(C,z);X<3.2&&X<U&&(U=X,P=k.id)}return P},project(x,M){let I=x.pos.clone();return I.y=x.base.y+(x.id===g.selected?5.6:4.9),I.project(_),{x:(I.x*.5+.5)*M.w,y:(-I.y*.5+.5)*M.h,vis:I.z<1}}}}var wu,Eu=!1;function Bp(){return wu||(wu=new(window.AudioContext||window.webkitAudioContext)),wu}function tn(n,t,e="square",i=.04,s=0){if(!Eu)return;let r=Bp(),a=r.createOscillator(),o=r.createGain();a.type=e,a.frequency.setValueAtTime(n,r.currentTime),s&&a.frequency.linearRampToValueAtTime(n+s,r.currentTime+t),o.gain.setValueAtTime(i,r.currentTime),o.gain.exponentialRampToValueAtTime(.001,r.currentTime+t),a.connect(o).connect(r.destination),a.start(),a.stop(r.currentTime+t)}function Tu(n){Eu=!!n,Eu&&Bp().resume?.()}var ge={click:()=>tn(420,.05,"square",.03),open:()=>tn(300,.08,"square",.03,80),close:()=>tn(380,.06,"square",.03,-80),page:()=>tn(520,.05,"triangle",.03),hit:()=>tn(180,.07,"sawtooth",.05,-60),swing:()=>tn(240,.06,"square",.03,40),roll:()=>tn(200,.1,"triangle",.04,120),potion:()=>tn(440,.16,"sine",.04,200),chest:()=>{tn(260,.1,"square",.05,80),setTimeout(()=>tn(390,.16,"triangle",.05,120),80)},loot:()=>{tn(520,.12,"sine",.05),setTimeout(()=>tn(660,.18,"sine",.05),90)},complete:()=>{tn(392,.12,"triangle",.05),setTimeout(()=>tn(523,.14,"triangle",.05),120),setTimeout(()=>tn(659,.22,"triangle",.05),240)},hurt:()=>tn(140,.12,"sawtooth",.06,-40),step:()=>tn(90,.03,"triangle",.02),talk:()=>tn(300,.05,"square",.025,40)};var lt=(n,t=document)=>t.querySelector(n),rt=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),gy=Object.fromEntries(ia.map(n=>[n.id,n])),rr=(n,t=48,e="")=>`<img class="px-icon" src="${Tn(n)}" width="${t}" height="${t}" alt="${rt(e)}"${e?"":' aria-hidden="true"'}>`,we={},ji=null,oe={};function ra(){for(let n of Object.values(oe))n&&(n.hidden=!0)}function ci(){return!!(oe.panel&&!oe.panel.hidden)||!!(oe.inv&&!oe.inv.hidden)||!!(oe.map&&!oe.map.hidden)||!!(oe.loot&&!oe.loot.hidden)||!!(oe.complete&&!oe.complete.hidden)}function Gp(n){we=n,oe.panel=lt("#panel-wrap"),oe.inv=lt("#inv-wrap"),oe.map=lt("#map-wrap"),oe.loot=lt("#loot-wrap"),oe.complete=lt("#complete-wrap"),lt("#panel-close").addEventListener("click",on),lt("#inv-close").addEventListener("click",on),lt("#map-close").addEventListener("click",on),lt("#loot-take").addEventListener("click",()=>{ge.loot(),we.onLootTake?.(),_y()}),lt("#complete-continue").addEventListener("click",()=>{on(),we.onReturnCamp?.()}),lt("#complete-read").addEventListener("click",()=>{let s=lt("#complete-read").dataset.mission;on();let r=Ms[s];r&&Ai(r.panel.type,r.panel.id)}),oe.panel.addEventListener("mousedown",s=>{s.target===oe.panel&&on()}),oe.inv.addEventListener("mousedown",s=>{s.target===oe.inv&&on()}),oe.map.addEventListener("mousedown",s=>{s.target===oe.map&&on()}),document.addEventListener("keydown",s=>{ci()&&(s.key==="Escape"&&(s.preventDefault(),on()),s.key==="Tab"&&!oe.panel.hidden&&xy(s,lt("#panel")),lt("#panel")?.classList.contains("book")&&!/INPUT/.test(s.target.tagName)&&(s.key==="ArrowRight"&&(s.preventDefault(),co(1)),s.key==="ArrowLeft"&&(s.preventDefault(),co(-1))))}),document.querySelectorAll("[data-open]").forEach(s=>s.addEventListener("click",()=>{ge.click(),s.dataset.open==="inventory"||s.dataset.open==="gear"?ws():s.dataset.open==="map"?or():Ai(s.dataset.open)})),lt("#btn-inv")?.addEventListener("click",()=>{ge.click(),ws()}),lt("#btn-map")?.addEventListener("click",()=>{ge.click(),we.onMapButton?.()}),lt("#btn-potion")?.addEventListener("click",()=>we.onPotion?.()),lt("#btn-roll")?.addEventListener("click",()=>we.onRoll?.()),document.querySelectorAll("[data-art]").forEach(s=>s.addEventListener("click",()=>we.onArtifact?.(+s.dataset.art)));let t=lt("#tooltip"),e=s=>{let r=s.dataset.tip;if(!r)return;t.innerHTML=r,t.hidden=!1;let a=s.getBoundingClientRect(),o=t.offsetWidth,l=t.offsetHeight,c=a.left+a.width/2-o/2,u=a.top-l-8;u<6&&(u=a.bottom+8),c=Math.max(6,Math.min(innerWidth-o-6,c)),t.style.left=c+"px",t.style.top=u+"px"},i=()=>{t.hidden=!0};document.addEventListener("pointerover",s=>{let r=s.target.closest?.("[data-tip]");r?e(r):i()}),document.addEventListener("focusin",s=>{let r=s.target.closest?.("[data-tip]");r?e(r):i()}),document.addEventListener("focusout",i),lt("#potion-icon").src=Tn("potion"),lt("#map-icon").src=Tn("map"),lt("#roll-icon").src=Tn("roll"),lt("#arrows-icon").src=Tn("arrows"),lt("#inv-icon").src=Tn("bag"),lt("#coin-icon").src=Tn("coin")}function xy(n,t){let e=[...t.querySelectorAll("a[href],button,input,iframe,[tabindex]")].filter(r=>!r.disabled&&r.offsetParent!==null);if(!e.length)return;let i=e[0],s=e[e.length-1];n.shiftKey&&document.activeElement===i?(n.preventDefault(),s.focus()):!n.shiftKey&&document.activeElement===s&&(n.preventDefault(),i.focus())}function on(){let n=ci();ra(),lt("#tooltip").hidden=!0,n&&(ge.close(),we.onClose?.()),ji&&document.body.contains(ji)&&ji!==document.body?ji.focus():lt("#game")?.focus()}var _y=()=>{oe.loot.hidden=!0};function Qi(n,t,e="",i=n){oe.panel.hidden&&(ji=document.activeElement),ra(),lt("#panel-title").textContent=n,lt("#panel").className="sheet "+e,lt("#panel-body").innerHTML=t,lt("#panel-body").scrollTop=0,oe.panel.hidden=!1,ge.open(),we.onOpen?.(i),setTimeout(()=>lt("#panel-close").focus({preventScroll:!0}),0),vy(lt("#panel-body")),e.includes("book")&&yy(),Cu()}function vy(n){n.querySelectorAll("[data-project]").forEach(t=>t.addEventListener("click",()=>Ai("project",t.dataset.project))),n.querySelectorAll("[data-open]").forEach(t=>t.addEventListener("click",()=>{t.dataset.open==="map"?(on(),or()):Ai(t.dataset.open)})),n.querySelectorAll("[data-act]").forEach(t=>t.addEventListener("click",()=>{we.actions?.[t.dataset.act]?.(),Cu()})),n.querySelectorAll("[data-copy]").forEach(t=>t.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t.dataset.copy),t.textContent="Copied!"}catch{t.textContent="Copy failed"}setTimeout(()=>t.textContent="Copy",1500)})),n.querySelectorAll("[data-mission]").forEach(t=>t.addEventListener("click",()=>{on(),we.onStartMission?.(t.dataset.mission)}))}var Ss=0;function yy(){Ss=0;let n=lt("#panel-body"),t=n.querySelectorAll(".page"),e=document.createElement("div");e.className="book-nav",e.innerHTML='<button class="ui-btn small prev" type="button" aria-label="Previous page">Prev</button><span class="page-no" aria-live="polite"></span><button class="ui-btn small next" type="button" aria-label="Next page">Next</button>',n.appendChild(e),e.querySelector(".prev").addEventListener("click",()=>co(-1)),e.querySelector(".next").addEventListener("click",()=>co(1)),e.hidden=t.length<2,co(0)}function co(n){let t=lt("#panel-body").querySelectorAll(".page");if(!t.length)return;let e=Math.max(0,Math.min(t.length-1,Ss+n));n&&e!==Ss&&ge.page(),Ss=e,t.forEach((a,o)=>a.hidden=o!==Ss);let i=lt("#panel-body").querySelector(".page-no");i&&(i.textContent=`Page ${Ss+1} of ${t.length}`);let s=lt("#panel-body").querySelector(".prev"),r=lt("#panel-body").querySelector(".next");s&&(s.disabled=Ss===0),r&&(r.disabled=Ss===t.length-1)}function ar(n){let t=gy[n];return t?`<aside class="sign-fact"><strong>${rt(t.name)}</strong><p>${rt(t.fact)} <a href="${rt(t.source)}" target="_blank" rel="noopener">Source</a></p></aside>`:""}var Vp=n=>`<ul class="chips">${n.map(t=>`<li>${rt(t)}</li>`).join("")}</ul>`;function Wp(){let n=[`<a class="ui-btn" href="mailto:${rt(ve.email)}">Email</a>`,`<a class="ui-btn" href="${rt(ve.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`];return ve.github&&n.push(`<a class="ui-btn" href="${rt(ve.github)}" target="_blank" rel="noopener">GitHub</a>`),n.push(`<a class="ui-btn" href="${rt(ve.resumePdf)}" target="_blank" rel="noopener">Resume (PDF)</a>`),`<div class="btn-row">${n.join("")}</div>`}var Au="",ho="All";function Ai(n,t){switch(n){case"projects":return Qi("Projects",by(),"","projects"),Sy();case"project":return Qi(Hn.find(e=>e.id===t)?.title||"Project",wy(t),"book","project:"+t);case"about":return Qi("About Me",Ey(),"book","about");case"experience":return Qi("Experience",Ty(),"book","experience");case"resume":return Qi("Resume",Ay(),"wide","resume");case"skills":return Qi("Skills",Ry(),"","skills");case"contact":return Qi("Contact",Cy(),"","contact");case"lhakhang":return Qi("The Lhakhang",Iy(),"book","lhakhang");case"help":return Qi("Paused",Py(),"","help");case"inventory":case"gear":return ws();case"map":return or()}}var My=n=>`<span class="tt-title">${rt(n.title)}</span><span class="tt-line">${rt(n.kind)}</span><span class="tt-blue">${rt(n.categories.join(", "))}</span><span class="tt-sub">${rt(n.dates)}</span>`;function by(){return`<p class="lede">Every project and job, as items. Hover for details, click to open the full story.</p>
  <div class="dex-tools">
    <label class="sr-only" for="dex-search">Search projects</label>
    <input id="dex-search" class="mc-input" type="search" placeholder="Search: React, testing, Disney..." value="${rt(Au)}" autocomplete="off">
    <div class="filters" role="group" aria-label="Filter by category">${mp.map(n=>`<button class="ui-btn small ${n===ho?"primary":""}" type="button" aria-pressed="${n===ho}" data-cat="${rt(n)}">${rt(n)}</button>`).join("")}</div>
  </div>
  <div id="dex-grid" class="dex-grid"></div>`}function Sy(){let n=lt("#dex-search"),t=lt("#dex-grid"),e=()=>{let i=Au.trim().toLowerCase(),s=Hn.filter(r=>(ho==="All"||r.categories.includes(ho))&&(!i||[r.title,r.kind,r.summary,...r.stack,...r.categories,...r.bullets].join(" ").toLowerCase().includes(i)));t.innerHTML=s.map(r=>`<button class="slot-card" type="button" data-project="${r.id}" data-tip="${rt(My(r))}" aria-label="${rt(r.title)}: ${rt(r.kind)}, ${rt(r.dates)}">
      ${rr(r.icon,40)}<span class="ttl">${rt(r.title)}</span><span class="muted small">${rt(r.dates)}</span></button>`).join("")||'<p class="muted">No matches.</p>',t.querySelectorAll("[data-project]").forEach(r=>r.addEventListener("click",()=>Ai("project",r.dataset.project)))};n.addEventListener("input",()=>{Au=n.value,e()}),lt("#panel-body").querySelectorAll("[data-cat]").forEach(i=>i.addEventListener("click",()=>{ho=i.dataset.cat,lt("#panel-body").querySelectorAll("[data-cat]").forEach(s=>{s.classList.toggle("primary",s===i),s.setAttribute("aria-pressed",s===i)}),e()})),e()}function wy(n){let t=Hn.findIndex(r=>r.id===n),e=Hn[t];if(!e)return"<p>Not found.</p>";let i=Hn[(t+Hn.length-1)%Hn.length],s=Hn[(t+1)%Hn.length];return`<section class="page"><div class="case-head">${rr(e.icon,56)}<div><p class="kicker">${rt(e.kind)}</p><p class="muted">${rt(e.dates)}</p></div></div>
    ${e.fullTitle?`<p class="fulltitle">"${rt(e.fullTitle)}"</p>`:""}
    <p class="lede">${rt(e.summary)}</p><h3>Status</h3><p>${rt(e.status)}</p></section>
    <section class="page"><h3>What I did</h3><ul class="bullets">${e.bullets.map(r=>`<li>${rt(r)}</li>`).join("")}</ul></section>
    <section class="page"><h3>Tools</h3>${Vp(e.stack)}
    ${e.links.length?`<h3>Links</h3><div class="btn-row">${e.links.map(r=>`<a class="ui-btn" href="${rt(r.url)}" target="_blank" rel="noopener">${rt(r.label)}</a>`).join("")}</div>`:""}
    ${ar(e.landmark)}
    <div class="btn-row"><button class="ui-btn small" type="button" data-project="${i.id}">&lt; ${rt(i.title)}</button><button class="ui-btn small" type="button" data-project="${s.id}">${rt(s.title)} &gt;</button></div>
    <div class="btn-row"><button class="ui-btn" type="button" data-open="projects">All projects</button><button class="ui-btn" type="button" data-mission="${e.landmark}">Play this mission</button></div></section>`}function Ey(){return pp.map((n,t)=>`<section class="page">${t===0?`<div class="case-head">${rr("head",56)}<div><p class="kicker">${rt(ve.name)}</p><p class="muted">${rt(ve.headline)}</p></div></div>`:""}<p>${rt(n)}</p></section>`).join("")+`<section class="page"><h3>Education</h3><p><strong>${rt(na.school)}</strong><br>${rt(na.degree)}, ${rt(na.minor)}<br>${rt(na.dates)}, ${rt(na.location)}</p>
    <h3>Interests</h3>${Vp(_p)}</section>
    <section class="page">${ar("plaza")}${Wp()}<div class="btn-row"><button class="ui-btn" type="button" data-mission="plaza">Play the About Me mission</button></div></section>`}function Ty(){return gp.map(n=>{let t=Hn.find(e=>e.id===n);return`<section class="page exp"><div class="case-head">${rr(t.icon,48)}<div><h3>${rt(t.title)}</h3><p class="kicker">${rt(t.kind)}</p><p class="muted">${rt(t.dates)}</p></div></div>
      <ul class="bullets">${t.bullets.map(e=>`<li>${rt(e)}</li>`).join("")}</ul></section>`}).join("")+`<section class="page">${ar("union")}<div class="btn-row"><button class="ui-btn" type="button" data-open="resume">Open resume</button><button class="ui-btn" type="button" data-mission="union">Play this mission</button></div></section>`}function Ay(){return`<div class="resume">
    <div class="btn-row"><a class="ui-btn primary" href="${rt(ve.resumePdf)}" download="Resume_Isaac_Moreno.pdf">Download PDF</a>
    <a class="ui-btn" href="${rt(ve.resumePdf)}" target="_blank" rel="noopener">Open in new tab</a>
    <a class="ui-btn" href="recruiter.html">Plain web version</a></div>
    <div class="pdf-frame"><iframe src="${rt(ve.resumePdf)}#view=FitH" title="Isaac Moreno resume PDF" loading="lazy"></iframe></div>
    ${ar("library")}</div>`}function Ry(){return`<p class="lede">Hover or tap a slot to read it. Everything here is on my resume.</p>
  ${xp.map(n=>`<section class="inv"><h3>${rt(n.label)}</h3><ul class="skill-grid">${n.items.map(t=>`<li class="skill-slot" tabindex="0" data-tip="${rt(`<span class='tt-title'>${rt(t)}</span><span class='tt-blue'>${rt(n.label)}</span>`)}"><span>${rt(t)}</span></li>`).join("")}</ul></section>`).join("")}
  ${ar("haskins")}`}function Cy(){return`<div class="contact">
    <p class="lede">I'm looking for new-grad software engineering roles. The fastest way to reach me is email.</p>
    <dl>
      <dt>Email</dt><dd><a href="mailto:${rt(ve.email)}">${rt(ve.email)}</a> <button class="ui-btn small" type="button" data-copy="${rt(ve.email)}">Copy</button></dd>
      <dt>LinkedIn</dt><dd><a href="${rt(ve.linkedin)}" target="_blank" rel="noopener">${rt(ve.linkedin.replace("https://",""))}</a></dd>
      ${ve.github?`<dt>GitHub</dt><dd><a href="${rt(ve.github)}" target="_blank" rel="noopener">${rt(ve.github.replace("https://",""))}</a></dd>`:""}
      <dt>Location</dt><dd>${rt(ve.location)}</dd>
    </dl>${Wp()}${ar("pick")}</div>`}function Iy(){return`<section class="page">${ar("lhakhang")}
  <h3>About this site</h3>
  <p>A small playable portfolio. You start at a camp in Centennial Plaza, pick a UTEP landmark from the mission map, and walk a short dungeon to a chest that holds part of my story. Plain HTML, CSS, and JavaScript with a 3D voxel world rendered by Three.js (MIT license). Every block texture, character, and icon is original art generated in code.</p>
  <p>Prefer a normal page? <a href="recruiter.html">Open the plain recruiter view</a>.</p></section>
  <section class="page"><h3>Campus facts</h3><ul class="bullets">${oo.map(n=>`<li>${rt(n)}</li>`).join("")}</ul>
  <p class="muted small">Fan-inspired, not affiliated with Mojang or Microsoft, and not endorsed by UTEP. Font: Monocraft by Idrees Hassan (SIL Open Font License 1.1). Landmark facts link to their sources.</p></section>`}function Py(){return`<div class="btn-row" style="margin-top:0"><button class="ui-btn primary big" type="button" data-act="resume" style="width:100%;min-width:0">Resume</button></div>
  <div class="options" role="group" aria-label="Options">
    <button id="t-quality" class="ui-btn" style="width:100%;margin:4px 0" type="button" data-act="quality"></button>
    <button id="t-time" class="ui-btn" style="width:100%;margin:4px 0" type="button" data-act="time"></button>
    <button id="t-sound" class="ui-btn" style="width:100%;margin:4px 0" type="button" data-act="sound" aria-pressed="false"></button>
    <button id="t-motion" class="ui-btn" style="width:100%;margin:4px 0" type="button" data-act="motion" aria-pressed="false"></button>
  </div>
  <table class="keys"><tbody>${[["W A S D / Arrows","Walk"],["Space","Roll / dodge (short cooldown)"],["F or left click","Attack"],["E / Enter","Interact (map, NPCs, chests, doors)"],["Q","Drink a healing tonic"],["1 2 3","Use equipped artifacts"],["I","Gear and inventory"],["M","Mission select map (camp) or local objective"],["H or ?","This screen"],["Mouse wheel","Zoom the camera"],["Esc or P","Pause, or close a panel"]].map(([t,e])=>`<tr><th scope="row"><kbd>${rt(t)}</kbd></th><td>${rt(e)}</td></tr>`).join("")}</tbody></table>
  <p>On a phone, drag the left stick to walk. <strong>A</strong> interacts, <strong>B</strong> rolls, the sword swings, and the bottle drinks a tonic.</p>
  <div class="btn-row"><a class="ui-btn" href="recruiter.html">Skip game (recruiter view)</a></div>`}function Cu(){let n=we.getState?.();if(!n)return;let t=(i,s,r)=>{let a=document.getElementById(i);a&&(a.textContent=s,r!=null&&a.setAttribute("aria-pressed",r))};t("t-time",`Time of day: ${(i=>i[0].toUpperCase()+i.slice(1))(n.time)}`),t("t-quality",`Graphics: ${n.qualityName||"High"}`),t("t-sound",`Sound: ${n.sound?"ON":"OFF"}`,n.sound),t("t-motion",`Motion: ${n.reduced?"Reduced":"Full"}`,n.reduced)}function ws(){if(oe.inv.hidden&&(ji=document.activeElement),ra(),oe.inv.hidden=!1,ge.open(),!we.getLoadout?.()?.selected){let n=we.getLoadout?.()?.items?.[0];n&&we.selectItem?.(n.id)}Ru(),setTimeout(()=>lt("#inv-close").focus({preventScroll:!0}),0)}function uo(n){return n==="Legendary"?"tt-leg":n==="Unique"?"tt-uni":n==="Rare"?"tt-rare":""}function Ru(){let n=we.getLoadout?.();if(!n)return;let t=[["helm","Helm"],["chest","Chest"],["melee","Melee"],["ranged","Ranged"],["legs","Legs"],["boots","Boots"]],e=(c,u)=>{let h=n.equipped[c];return h?`<button class="eq-slot" type="button" data-slot="${c}" data-item="${h.id}" data-tip="${rt(Fc(h))}" aria-label="${u}: ${h.name}"><img src="${Tn(h.icon)}" alt="" width="40" height="40"></button>`:`<button class="eq-slot empty" type="button" data-slot="${c}" aria-label="${u}, empty">${rt(u)}</button>`},i=[0,1,2].map(c=>{let u=n.equipped.artifacts[c];return u?`<button class="eq-slot" type="button" data-artslot="${c}" data-item="${u.id}" data-tip="${rt(Fc(u))}" aria-label="Artifact ${c+1}: ${u.name}"><img src="${Tn(u.icon)}" alt=""></button>`:`<button class="eq-slot empty" type="button" data-artslot="${c}" aria-label="Artifact ${c+1}, empty">Art ${c+1}</button>`}).join(""),s=[0,1].map(c=>{let u=n.equipped.talismans[c];return u?`<button class="eq-slot" type="button" data-talslot="${c}" data-item="${u.id}" data-tip="${rt(Fc(u))}" aria-label="Talisman ${c+1}: ${u.name}"><img src="${Tn(u.icon)}" alt=""></button>`:`<button class="eq-slot empty" type="button" data-talslot="${c}" aria-label="Talisman ${c+1}, empty">Tal ${c+1}</button>`}).join(""),r=n.selected,a=n.items.map(c=>`<button class="item-btn ${r&&r.id===c.id?"on":""}" type="button" data-pick="${c.id}">
    <img src="${Tn(c.icon)}" width="32" height="32" alt="">
    <span><span class="${uo(c.rarity)}">${rt(c.name)}</span><br><span class="muted small">${rt(c.rarity)} \xB7 ${rt(c.slot)} \xB7 Power ${c.power}</span></span>
  </button>`).join(""),o=r?`<h3 class="${uo(r.rarity)}">${rt(r.name)}</h3>
    <p class="muted">${rt(r.rarity)} ${rt(r.slot)} \xB7 Power ${r.power}</p>
    <p>${rt(r.desc)}</p>
    <div class="btn-row"><button class="ui-btn primary" type="button" data-equip="${r.id}">Equip</button></div>`:'<p class="muted">Select an item to inspect it.</p>',l=we.getHeroPortrait?.();lt("#inv-body").innerHTML=`
    <div class="inv-grid-wrap"><h3>Inventory</h3><div class="item-list">${a||'<p class="muted">No items yet.</p>'}</div></div>
    <div class="equip">
      <div class="equip-row">${e("helm","Helm")}${e("chest","Chest")}</div>
      <div class="equip-hero">${l?`<img src="${l}" width="128" height="192" alt="Your hero: Isaac the Miner in orange and blue armor">`:""}</div>
      <div class="equip-row">${e("melee","Melee")}${e("ranged","Ranged")}</div>
      <div class="equip-row">${e("legs","Legs")}${e("boots","Boots")}</div>
      <div class="equip-row">${i}</div>
      <div class="equip-row">${s}</div>
      <p class="power-line">Power ${n.power} \xB7 Paydirt ${n.paydirt}</p>
    </div>
    <div class="inv-detail">${o}</div>`,lt("#inv-body").querySelectorAll("[data-pick]").forEach(c=>c.addEventListener("click",()=>{we.selectItem?.(c.dataset.pick),Ru()})),lt("#inv-body").querySelectorAll("[data-equip]").forEach(c=>c.addEventListener("click",()=>{we.equipItem?.(c.dataset.equip),Ru()}))}function Fc(n){return`<span class="tt-title ${uo(n.rarity)}">${rt(n.name)}</span><span class="tt-line">${rt(n.rarity)} \xB7 ${rt(n.slot)}</span><span class="tt-sub">Power ${n.power}</span>`}var ts=null;function or(n){oe.map.hidden&&(ji=document.activeElement),ra(),oe.map.hidden=!1,ge.open(),ts=n||ts,we.onMapOpen?.(ts),Xp(),Yp(),setTimeout(()=>lt("#map-close").focus({preventScroll:!0}),0)}function Oc(n){ts=n,we.onMapSelect?.(n),Xp(),Yp()}function Xp(){let n=lt("#mission-list");if(!n)return;let t=we.getState?.()||{visited:new Set};n.innerHTML=Ei.map(e=>`<li><button type="button" class="ml-btn ${e.id===ts?"on":""} ${t.visited?.has?.(e.id)?"done":""}" data-pickmission="${e.id}" aria-pressed="${e.id===ts}"><img src="${Tn(e.loot.icon)}" width="20" height="20" alt="">${rt(e.name)}</button></li>`).join(""),n.querySelectorAll("[data-pickmission]").forEach(e=>{e.addEventListener("click",()=>{ge.click(),Oc(e.dataset.pickmission)}),e.addEventListener("pointerenter",()=>kc(e.dataset.pickmission)),e.addEventListener("pointerleave",()=>kc(null))})}var zp=new Map,Ly={plaza:"Centennial Plaza",union:"Union",library:"Library",ccsb:"CCSB",engineering:"Engineering",sunbowl:"Sun Bowl",museum:"Museum",haskins:"Haskins Center",pick:"Mining Minds",lhakhang:"Lhakhang"},qp=null;function kc(n){qp=n||null}function $p(n,t){let e=lt("#map-labels");if(!e)return;let i=we.getState?.()||{visited:new Set},s=lt("#mission-list")?.getBoundingClientRect(),r=lt("#briefing")?.getBoundingClientRect(),a=innerWidth<760,o=a||!s?8:s.right+10,l=a||!r?innerWidth-8:r.left-10,c=[ts,qp].filter((h,d,f)=>h&&f.indexOf(h)===d),u=0;for(let h of t){let d=zp.get(h.id);d||(d=document.createElement("div"),d.className="map-tag",d.innerHTML=`<span class="mt-line"></span><button type="button" class="map-label" tabindex="-1"><span class="ml-name">${rt(Ly[h.id]||Ms[h.id].name)}</span><span class="ml-sub">${rt(Ms[h.id].subtitle)}</span></button>`,d.querySelector("button").addEventListener("click",()=>{ge.click(),Oc(h.id)}),e.appendChild(d),zp.set(h.id,d));let f=n(h),m=c.includes(h.id);if(d.hidden=!f.vis||!m,d.hidden)continue;let _=d.querySelector("button"),g=d.querySelector(".mt-line"),p=_.offsetWidth||120,v=_.offsetHeight||34,T=54+u++*0,y=Math.min(l-p/2,Math.max(o+p/2,f.x)),S=Math.max(70+v,f.y-T);_.style.transform=`translate(${y-p/2}px, ${S-v}px)`;let w=f.x-y,x=f.y-S,M=Math.hypot(w,x);g.style.width=`${M}px`,g.style.transform=`translate(${y}px, ${S}px) rotate(${Math.atan2(x,w)}rad)`,_.classList.toggle("on",h.id===ts),_.classList.toggle("done",!!i.visited?.has?.(h.id))}}function Yp(){let n=lt("#briefing"),t=Ms[ts];if(!t){n.innerHTML=`<p class="kicker">Mission select</p><h3>Choose a landmark</h3><p class="empty">Click a glowing beacon on the map, or pick one from the list. Each mission opens a piece of Isaac's story.</p>`;return}let e=we.getState?.()||{visited:new Set,power:0},i=e.visited?.has?.(t.id);n.innerHTML=`
    <p class="kicker">${i?"Completed":"Mission"}</p>
    <h3>${rt(t.name)}</h3>
    <p class="muted">${rt(t.subtitle)}</p>
    <p>${rt(t.blurb)}</p>
    <div class="brief-stats"><span>Power ${t.recommended}</span><span>Yours ${e.power||0}</span></div>
    <p class="loot-line">${rr(t.loot.icon,28)}<span>Reward: <strong class="${uo(t.loot.rarity)}">${rt(t.loot.name)}</strong><br><span class="muted small">${rt(t.loot.rarity)}</span></span></p>
    ${t.fact?`<p class="small muted">${rt(t.fact)} <a href="${rt(t.source)}" target="_blank" rel="noopener">Source</a></p>`:""}
    <div class="btn-row">
      <button class="ui-btn primary big" type="button" id="brief-start" style="min-width:0;width:100%">Start mission</button>
      <button class="ui-btn" type="button" id="brief-read" style="width:100%">Read the story</button>
    </div>`,lt("#brief-start").addEventListener("click",()=>{on(),we.onStartMission?.(t.id)}),lt("#brief-read").addEventListener("click",()=>{on(),Ai(t.panel.type,t.panel.id)})}function Iu(n){oe.loot.hidden&&(ji=document.activeElement),ra(),oe.loot.hidden=!1,ge.chest(),lt("#loot-kicker").textContent="Loot found",lt("#loot-name").textContent=n.name,lt("#loot-name").style.color=Dc[n.rarity]?.color||"#fff",lt("#loot-rarity").textContent=`${n.rarity}  \xB7  ${n.slot}  \xB7  Power ${n.power}`,lt("#loot-desc").textContent=n.desc;let t=lt("#loot-art"),e=t.getContext("2d");e.clearRect(0,0,t.width,t.height);let i=e.createRadialGradient(100,100,10,100,100,95);i.addColorStop(0,"rgba(255,200,80,0.85)"),i.addColorStop(.45,"rgba(255,140,40,0.35)"),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.fillRect(0,0,200,200);let s=lo(n.icon,12);e.imageSmoothingEnabled=!1;let r=128;e.drawImage(s,(200-r)/2,(200-r)/2,r,r),setTimeout(()=>lt("#loot-take").focus({preventScroll:!0}),0)}function Pu(n,t){oe.complete.hidden&&(ji=document.activeElement),ra(),oe.complete.hidden=!1,ge.complete(),lt("#complete-title").textContent=n.name,lt("#complete-read").dataset.mission=n.id,lt("#complete-body").innerHTML=`
    <p>${rt(n.subtitle)}</p>
    <div class="reward">${rr(n.loot.icon,40)}<div><strong class="${uo(n.loot.rarity)}">${rt(n.loot.name)}</strong><div class="muted">${rt(n.loot.rarity)} \xB7 Power ${n.loot.power}</div></div></div>
    <div class="reward"><div>Paydirt +${t.paydirt}<br>Experience +${t.xp}<br>Enemies defeated: ${t.kills}</div></div>`,setTimeout(()=>lt("#complete-continue").focus({preventScroll:!0}),0)}function aa(n){if("hp"in n){let t=cu(n.hp/(n.maxHp||100),0,1),e=lt("#heart-canvas");if(e){let s=kp(t,88),r=e.getContext("2d");r.clearRect(0,0,88,88),r.drawImage(s,0,0)}let i=lt("#heart-num");i&&(i.textContent=Math.round(n.hp)),lt("#heart-wrap")?.setAttribute("aria-label",`Health ${Math.round(n.hp)} of ${n.maxHp||100}`)}if("xp"in n&&(lt("#xp-fill").style.width=n.xp/n.xpNext*100+"%",lt("#xp-level").textContent=n.level,lt("#xp").setAttribute("aria-valuenow",n.level),lt("#xp").setAttribute("aria-label",`Level ${n.level}, ${n.xp} of ${n.xpNext} experience`)),"paydirt"in n&&(lt("#paydirt").textContent=n.paydirt),"arrows"in n&&(lt("#arrows-num").textContent=n.arrows),"souls"in n&&(lt("#souls-fill").style.width=cu(n.souls,0,100)+"%",lt("#souls").setAttribute("aria-valuenow",Math.round(n.souls))),"potionCd"in n){let t=lt("#potion-cd");n.potionCd>0?(t.hidden=!1,t.style.setProperty("--p",n.potionCd*100+"%")):t.hidden=!0}if("rollCd"in n){let t=lt("#roll-cd");n.rollCd>0?(t.hidden=!1,t.style.setProperty("--p",n.rollCd*100+"%")):t.hidden=!0}if("artifacts"in n&&document.querySelectorAll("[data-art]").forEach(t=>{let e=n.artifacts[+t.dataset.art],i=t.querySelector("img");e?(i.src=Tn(e.icon),i.style.opacity="1",t.dataset.tip=Fc(e)):(i.removeAttribute("src"),i.style.opacity="0.25",delete t.dataset.tip)}),"objective"in n){let t=lt("#objective"),e=lt("#objective-text");n.objective?(t.hidden=!1,e.textContent=n.objective):t.hidden=!0}"hud"in n&&(lt("#hud").hidden=!n.hud),Cu()}function Ri(n,t,e="star",i=!1){let s=document.createElement("div");s.className="toast"+(i?" challenge":""),s.setAttribute("role","status"),s.innerHTML=`<span class="toast-icon">${rr(e,32)}</span><span><strong>${rt(n)}</strong><small>${rt(t)}</small></span>`,lt("#toasts").appendChild(s),setTimeout(()=>s.classList.add("out"),4200),setTimeout(()=>s.remove(),4800)}var Uc=null;function Lu(n,t){let e=lt("#prompt");if(!n){Uc!==null&&(e.hidden=!0,Uc=null);return}t===Uc&&!e.hidden||(Uc=t,e.hidden=!1,e.innerHTML=n)}function hi(n,t,e="npc",i=!1){let s=lt("#chat");if(!s)return;let r=document.createElement("p");r.className="line "+e;let a=i?` <span class="more">(${window.matchMedia?.("(pointer: coarse)").matches?"tap A":"press E"} for more)</span>`:"";for(r.innerHTML=n?`&lt;${rt(n)}&gt; ${rt(t)}${a}`:rt(t),s.appendChild(r);s.children.length>6;)s.firstChild.remove();setTimeout(()=>r.classList.add("fade"),11e3)}function Du(){let n=lt("#title-logo");if(!n)return;let t="ISAAC MORENO",e=900,i=180;n.width=e,n.height=i;let s=n.getContext("2d");s.imageSmoothingEnabled=!1,s.font="bold 92px Monocraft, monospace",s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",s.strokeStyle="#3a1c00",s.lineWidth=14,s.strokeText(t,e/2,i/2+4),s.strokeStyle="#8a4a10",s.lineWidth=8,s.strokeText(t,e/2,i/2);let r=s.createLinearGradient(0,40,0,140);r.addColorStop(0,"#fff3c0"),r.addColorStop(.45,"#ffcc55"),r.addColorStop(1,"#c45a10"),s.fillStyle=r,s.fillText(t,e/2,i/2)}var Hp=["Hire this miner!","Also try the recruiter view!","Paydirt incoming!","Dec 2026 grad!","Press Play!","A campus of stories!"];function Jp(){let n=lt("#splash");n&&(n.textContent=Hp[Math.floor(Math.random()*Hp.length)])}var ze=n=>document.querySelector(n),As=ze("#game"),Zp=ze("#load-fill"),Kp=ze("#load-text"),fo=async(n,t)=>{Zp&&(Zp.style.width=n+"%"),Kp&&(Kp.textContent=t),await new Promise(e=>requestAnimationFrame(()=>setTimeout(e,0)))},Cn=(()=>{try{return JSON.parse(localStorage.getItem("utepmc4")||"{}")}catch{return{}}})(),Dy=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,Ny=(navigator.hardwareConcurrency||4)<=4||/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),et={time:Cn.time||"day",sound:!!Cn.sound,reduced:Cn.reduced??!!Dy,quality:Cn.quality??(Ny?1:2),autoQuality:Cn.autoQuality??!0,visited:new Set(Cn.visited||[]),adv:new Set(Cn.adv||[]),paydirt:Cn.paydirt||0,arrows:Cn.arrows??30,souls:Cn.souls||0,xp:Cn.xp||0,level:Cn.level||1,items:Cn.items||vp.map(n=>({...n})),equipped:Cn.equipped||{melee:"pick-campus",ranged:"sling-practice",helm:"miner-cap",chest:"orange-mail",legs:"trail-pants",boots:"work-boots",artifacts:[null,null,null],talismans:[null,null]},selectedItem:null},Ii=()=>{try{localStorage.setItem("utepmc4",JSON.stringify({time:et.time,sound:et.sound,reduced:et.reduced,quality:et.quality,autoQuality:et.autoQuality,visited:[...et.visited],adv:[...et.adv],paydirt:et.paydirt,arrows:et.arrows,souls:et.souls,xp:et.xp,level:et.level,items:et.items,equipped:et.equipped}))}catch{}},Gn=n=>et.items.find(t=>t.id===n)||null,po=n=>n==="artifacts"||n==="talismans"?et.equipped[n].map(Gn):Gn(et.equipped[n]);function ku(){let n=0;for(let t of["melee","ranged","helm","chest","legs","boots"])n+=po(t)?.power||0;for(let t of po("artifacts"))n+=t?.power||0;for(let t of po("talismans"))n+=t?.power||0;return n}function sm(n){if(!et.items.some(t=>t.id===n.id)){if(et.items.push({...n}),n.slot==="artifact"){let t=et.equipped.artifacts.findIndex(e=>!e);t>=0&&(et.equipped.artifacts[t]=n.id)}else if(n.slot==="talisman"){let t=et.equipped.talismans.findIndex(e=>!e);t>=0&&(et.equipped.talismans[t]=n.id)}else(!et.equipped[n.slot]||(Gn(et.equipped[n.slot])?.power||0)<n.power)&&(et.equipped[n.slot]=n.id);Ii(),Nn()}}var Jt=sp(As,{quality:et.quality});if(!Jt){document.body.classList.add("nogl");let n=ze("#nogl");n&&(n.hidden=!1);let t=ze("#loading");t&&(t.hidden=!0),await new Promise(()=>{})}Jt.onQuality=n=>{Pn&&(Pn.sun.castShadow=n.shadows,Pn.sun.shadow.mapSize.set(n.shadowSize,n.shadowSize),Pn.sun.shadow.map?.dispose(),Pn.sun.shadow.map=null)};var ui=new xi,Pn=Rc(ui,4);Jt.setQuality(et.quality);var Ee=new nr(1800,!0),hr=new nr(500,!1),Vc=new ta(500);ui.add(Ee.points,hr.points,Vc.mesh);var Ln=new qt;ui.add(Ln);var Dn=null,bn=null,se=null,Li="title",di=null,mo=null,oa={kills:0,paydirt:0,xp:0},Wc=[],Xc=[],ti=[],le=null,Ou=new Map,Ci=null,Gc=null,N={x:0,z:0,y:R,rot:Math.PI,vx:0,vz:0,speed:0,hp:100,maxHp:100,action:null,actionT:0,actionDur:0,rollCd:0,potionCd:0,atkCd:0,invuln:0,hurt:0,artCd:[0,0,0]},Pi=Math.PI*.22,jt={dist:18.5,pitch:.74,target:new B,pos:new B,zoom:1,shake:0},De=!1,Mn=0,Bc=-1,Uy=0;function Fy(){for(;Ln.children.length;)Ln.remove(Ln.children[0]);Wc=[],Xc=[],ti=[],le=null,Ee.clear(),hr.clear(),Ou=new Map}function ky(n){!n||n===bn||n.group.traverse(t=>{t.geometry&&t.geometry.dispose()})}function Oy(n,t){return n==="pete"?Ep():n==="smith"?Tp():n==="mapper"?Ap():Rp(t||1)}function Hu(n){se&&se.group.parent&&ui.remove(se.group),se&&se!==n&&ky(se),Fy(),se=n,ui.add(n.group),Vc.list=[];for(let t of n.flames)Vc.add(t[0],t[1],t[2],t[3],t[4],t[5]);Ci||(Ci=yu(),Gc=new Gs(16771248,0,7,1.8),Ci.head.add(Gc),Gc.position.set(0,.5,.6)),Ln.add(Ci.root);for(let t of n.npcs){let e=Oy(t.type,t.seed);e.root.position.set(t.x,Kn(n,t.x,t.z),t.z),e.root.rotation.y=t.rot||0,Ln.add(e.root);let i=xu("#ffd060",.55,.72);i.position.set(t.x,Kn(n,t.x,t.z)+.03,t.z),Ln.add(i),Wc.push({...t,model:e,ring:i,pi:0,t:Math.random()*10}),By(n,t.x,t.z)}for(let t of n.animals){let e=t.type==="wolf"?Dp():t.type==="sheep"?Np(t.x|0):Up(t.x|0);e.root.position.set(t.x,Kn(n,t.x,t.z),t.z),e.root.rotation.y=t.rot||0,Ln.add(e.root),Xc.push({...t,model:e,t:Math.random()*5,tx:t.x,tz:t.z,speed:0})}for(let t of n.storage||[]){let e=Mu(!1);e.root.position.set(t.x,R,t.z),e.root.rotation.y=Math.PI,Ln.add(e.root)}if(n.kind==="mission"){let t=Mu(!0);t.root.position.set(n.chest.x,R,n.chest.z),t.root.rotation.y=Math.PI*.25,Ln.add(t.root);let e=Dc[di.loot.rarity]?.color||"#ff9a2a",i=op(e);i.position.set(n.chest.x,R,n.chest.z),Ln.add(i),le={...n.chest,model:t,beam:i,opened:!1,openT:0,color:e};let s=1+et.visited.size*.05;for(let r of n.enemySpots)zy(r.type,r.x,r.z,s)}qc()}function By(n,t,e){let i=Math.floor(t),s=Math.floor(e);n.floor&&i>=0&&s>=0&&i<n.w&&s<n.d&&(n.floor[s*n.w+i]=99)}function zy(n,t,e,i=1){let s=n==="raider"?Cp(t*7|0):n==="bug"?Ip(t*3|0):n==="wisp"?Pp(t*5|0,di?.id==="library"?"#7ac8ff":"#ffb040"):Lp(t*2|0),r={raider:[46,2.5,10],bug:[26,3.4,7],wisp:[36,2.1,9],blob:[40,2,8]}[n];s.root.position.set(t,R,e),Ln.add(s.root);let a=cp();a.visible=!1,Ln.add(a);let o=xu("#ff3a20",.55,.78);o.material.opacity=.55,Ln.add(o),ti.push({type:n,model:s,x:t,z:e,y:R,rot:0,hp:r[0]*i,max:r[0]*i,speed:r[1],dmg:r[2],alive:!0,stun:0,atkCd:1+Math.random(),action:null,actionT:0,bar:a,ring:o,deathT:0,flashT:0,aggro:!1,home:{x:t,z:e}})}function qc(){let n=se.kind==="mission"?se.time:Li==="title"?"dusk":et.time,t=rp(ui,Pn,Jt,n);je.uTorch.value.setRGB(1,.62,.28);let e=se.kind==="mission"?se.mood:null;if(e&&(e.hemiSky!=null&&(Pn.hemi.color.set(e.hemiSky),Pn.hemi.groundColor.set(e.hemiGround),Pn.hemi.intensity=e.hemiI),e.sun!=null&&(Pn.sun.color.set(e.sun),Pn.sun.intensity=e.sunI),e.fog!=null&&ui.fog.color.set(e.fog),je.uTorchStrength.value*=e.torch,Pn.torchK=t.torch*Math.min(1,e.torch*1.3),e.tint&&je.uTorch.value.setRGB(...e.tint)),se.kind==="camp"&&(ui.fog.near=n==="night"?30:46,ui.fog.far=n==="night"?120:170),se.star){let i={day:1,dusk:.85,night:.72}[n]??.85;se.star.userData.mat.color.setRGB(2*i,1.8*i,1.25*i),se.star.userData.glowMat.opacity=n==="day"?.12:n==="dusk"?.3:.42}if(se.farMtn){let i={day:[11057364,.16],dusk:[9081020,.3],night:[1581628,.38]}[n]||[11846876,.3];se.farMtn.userData.haze.value.set(i[0]),se.farMtn.userData.hazeK.value=i[1]}Gc.intensity=n==="day"?0:3.5,Ci.lamp.material.color.setRGB(n==="day"?2:6,n==="day"?1.8:5.4,n==="day"?1.2:3.4),se.timeKey=n}var jn=new Set,In={x:0,y:0,active:!1},Hy=n=>/INPUT|TEXTAREA|SELECT/.test(n.target.tagName);addEventListener("keydown",n=>{if(Hy(n))return;let t=n.key.toLowerCase();if(!De&&!ze("#intro").hidden){(t==="enter"&&!/BUTTON|A/.test(n.target.tagName)||["w","a","s","d"].includes(t))&&(n.preventDefault(),es());return}if(!ci()){if(t==="escape"){n.preventDefault(),Bu();return}["arrowup","arrowdown","arrowleft","arrowright"," "].includes(t)&&n.preventDefault(),!(n.repeat&&"efq ".includes(t))&&(jn.add(t),(t==="e"||t==="enter"&&!/BUTTON|A/.test(n.target.tagName))&&Jc(),t===" "&&$c(),t==="f"&&Yc(),t==="q"&&Gu(),(t==="1"||t==="2"||t==="3")&&cm(+t-1),t==="i"&&ws(),t==="m"&&rm(),(t==="h"||t==="?")&&Ai("help"),t==="p"&&Bu())}});addEventListener("keyup",n=>jn.delete(n.key.toLowerCase()));addEventListener("blur",()=>{jn.clear(),In.active=!1,In.x=In.y=0});var Qp=new St,jp=new Xi,tm=new kn(new B(0,1,0),0),Nu=new B;As.addEventListener("pointerdown",n=>{if(!(ci()&&Li!=="map")){if(Li==="map")return Xy(n);if(!De){es();return}n.pointerType!=="touch"&&n.button===0&&(Qp.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),jp.setFromCamera(Qp,Jt.camera),tm.constant=-(N.y+.8),jp.ray.intersectPlane(tm,Nu)&&(N.rot=Math.atan2(Nu.x-N.x,Nu.z-N.z)),Yc(!0))}});As.addEventListener("wheel",n=>{Li==="map"||!De||(jt.zoom=Math.max(.65,Math.min(1.5,jt.zoom+Math.sign(n.deltaY)*.06)))},{passive:!0});var lr=ze("#stick"),em=ze("#stick-knob");if(lr){let n=null,t=0,e=0,i=46,s=a=>{let o=a.clientX-t,l=a.clientY-e,c=Math.min(i,Math.hypot(o,l)),u=Math.atan2(l,o);In.x=Math.cos(u)*c/i,In.y=Math.sin(u)*c/i,em.style.transform=`translate(${In.x*i}px, ${In.y*i}px)`};lr.addEventListener("pointerdown",a=>{a.preventDefault(),De||es(),n=a.pointerId,lr.setPointerCapture(n);let o=lr.getBoundingClientRect();t=o.left+o.width/2,e=o.top+o.height/2,In.active=!0,s(a)}),lr.addEventListener("pointermove",a=>{a.pointerId===n&&s(a)});let r=a=>{a.pointerId===n&&(n=null,In.active=!1,In.x=In.y=0,em.style.transform="")};lr.addEventListener("pointerup",r),lr.addEventListener("pointercancel",r)}document.querySelectorAll("[data-pad]").forEach(n=>n.addEventListener("pointerdown",t=>{t.preventDefault(),De||es();let e=n.dataset.pad;e==="a"?Jc():e==="b"?$c():e==="x"?Yc():e==="q"&&Gu()}));ze("#prompt").addEventListener("click",()=>Jc());ze("#btn-pause")?.addEventListener("click",()=>Bu());var Gy={time(){let n=["day","dusk","night"];et.time=n[(n.indexOf(et.time)+1)%3],Ii(),se?.kind==="camp"&&qc(),Nn(),hi(null,`Time set to ${et.time}`,"sys")},sound(){et.sound=!et.sound,Tu(et.sound),ge.click(),Ii(),Nn()},motion(){et.reduced=!et.reduced,document.documentElement.classList.toggle("reduced",et.reduced),Ii(),Nn()},quality(){et.quality=(et.quality+2)%3,et.autoQuality=!1,Jt.setQuality(et.quality),Ii(),Nn(),hi(null,`Graphics: ${er[et.quality].name}`,"sys")},resume(){on()}};et.sound&&Tu(!0);document.documentElement.classList.toggle("reduced",et.reduced);Gp({onOpen(n){n!=="map"&&la(De?se?.kind==="mission"?"mission":"camp":"title")},onClose(){jn.clear(),Li==="map"&&la(De?se?.kind==="mission"?"mission":"camp":"title")},onMapOpen(n){Vy(n)},onMapSelect(n){Dn?.select(n)},onMapButton:rm,onPotion:Gu,onRoll:$c,onArtifact:cm,onStartMission:n=>{De||es(!0),Vu(n)},onLootTake(){mo&&(sm(mo),mo=null),di&&setTimeout(dm,250)},onReturnCamp(){fm()},getState:()=>({...et,power:ku(),visited:et.visited,qualityName:er[et.quality].name}),getLoadout:()=>({items:et.items,equipped:{melee:Gn(et.equipped.melee),ranged:Gn(et.equipped.ranged),helm:Gn(et.equipped.helm),chest:Gn(et.equipped.chest),legs:Gn(et.equipped.legs),boots:Gn(et.equipped.boots),artifacts:et.equipped.artifacts.map(Gn),talismans:et.equipped.talismans.map(Gn)},selected:Gn(et.selectedItem),power:ku(),paydirt:et.paydirt}),getHeroPortrait:Jy,selectItem(n){et.selectedItem=n},equipItem(n){let t=Gn(n);if(t){if(t.slot==="artifact"){let e=et.equipped.artifacts.findIndex(i=>!i);et.equipped.artifacts[e>=0?e:0]=n}else if(t.slot==="talisman"){let e=et.equipped.talismans.findIndex(i=>!i);et.equipped.talismans[e>=0?e:0]=n}else et.equipped[t.slot]=n;Ii(),Nn(),ge.click()}},actions:Gy});function la(n){Li=n,document.body.classList.toggle("map-mode",n==="map")}function Vy(n){Dn||(Dn=Op()),Dn.open(n,et.visited),la("map")}function Wy(n){if(Li!=="map"||!Dn)return;let t=Dn.pick(n.clientX,n.clientY,As);kc(t),Dn.hover=t,As.style.cursor=t?"pointer":""}As.addEventListener("pointermove",Wy);function Xy(n){let t=Dn?.pick(n.clientX,n.clientY,As);t&&(ge.click(),Oc(t))}function Bu(){Ai("help")}function es(n){De||(De=!0,ze("#intro").hidden=!0,document.body.classList.add("playing"),As.focus(),la("camp"),N.x=bn.spawn.x,N.z=bn.spawn.z,N.y=Kn(bn,N.x,N.z),N.rot=Math.PI,qc(),ur(),ge.click(),aa({hud:!0}),Nn(),!n&&(hi(null,`${ve.name} arrived at camp`,"join"),et.adv.has("start")||(et.adv.add("start"),Ii(),setTimeout(()=>Ri("Camp unlocked","Welcome to Centennial Plaza","head"),500)),setTimeout(()=>hi("Pete","Howdy! The glowing map table starts missions. Or press M.","npc"),900)))}ze("#intro-start").addEventListener("click",()=>es());function rm(){if(se?.kind==="mission"){let n=di;Ri("Objective",n?n.objective:"Find the chest","map")}else or()}function Nn(){let n=40+et.level*20;aa({hp:N.hp,maxHp:N.maxHp,xp:et.xp,xpNext:n,level:et.level,paydirt:et.paydirt,arrows:et.arrows,souls:et.souls,potionCd:N.potionCd/8,rollCd:N.rollCd/1.6,artifacts:po("artifacts"),hud:De,objective:se?.kind==="mission"&&di?`${di.objective}${ti.some(t=>t.alive)?` (${ti.filter(t=>t.alive).length} foes)`:""}`:De?"Open the mission table (M) or talk to Pete":""})}function am(){let n=0,t=0;(jn.has("a")||jn.has("arrowleft"))&&(n-=1),(jn.has("d")||jn.has("arrowright"))&&(n+=1),(jn.has("w")||jn.has("arrowup"))&&(t+=1),(jn.has("s")||jn.has("arrowdown"))&&(t-=1),In.active&&(n=In.x,t=-In.y);let e=-Math.sin(Pi),i=-Math.cos(Pi),s=Math.cos(Pi),r=-Math.sin(Pi),a=s*n+e*t,o=r*n+i*t,l=Math.hypot(a,o);return l>.05?{x:a/Math.max(1,l),z:o/Math.max(1,l),len:Math.min(1,l)}:{x:0,z:0,len:0}}function go(n,t,e,i=.28){let s=se,r=n.y??R,a=n.x+t,o=n.z+e;return Cc(s,a,o,r,i)?(n.x=a,n.z=o,!0):Cc(s,a,n.z,r,i)?(n.x=a,!0):Cc(s,n.x,o,r,i)?(n.z=o,!0):!1}function $c(){if(!De||ci()||N.rollCd>0||N.action==="roll")return;let n=am(),t=n.len?n.x:Math.sin(N.rot),e=n.len?n.z:Math.cos(N.rot);if(N.rot=Math.atan2(t,e),N.action="roll",N.actionT=N.actionDur=.42,N.rollCd=1.6,N.invuln=.45,N.vx=t*9,N.vz=e*9,!et.reduced)for(let i=0;i<8;i++)hr.spawn({x:N.x+(Math.random()-.5)*.6,y:N.y+.1,z:N.z+(Math.random()-.5)*.6,vx:Math.random()-.5,vy:.6,vz:Math.random()-.5,color:[.75,.68,.56],size:.3,life:.6,drag:2});ge.roll()}function Yc(n){if(!De||ci()||N.atkCd>0||N.action==="roll")return;if(!n){let s=null,r=3.2;for(let a of ti)if(a.alive){let o=Math.hypot(a.x-N.x,a.z-N.z);o<r&&(r=o,s=a)}if(s&&(N.rot=Math.atan2(s.x-N.x,s.z-N.z),r>1.5)){let a=Math.min(.6,r-1.5);go(N,Math.sin(N.rot)*a,Math.cos(N.rot)*a,.28)}}N.action="attack",N.actionT=N.actionDur=.32,N.atkCd=.38,ge.swing();let t=Math.sin(N.rot),e=Math.cos(N.rot);if(!et.reduced)for(let s=0;s<10;s++){let r=N.rot-1+s*.2;Ee.spawn({x:N.x+Math.sin(r)*1.2,y:N.y+.9,z:N.z+Math.cos(r)*1.2,vx:Math.sin(r)*.5,vy:.2,vz:Math.cos(r)*.5,color:[1.6,1,.4],size:.14,life:.25,drag:3})}let i=12+Math.floor(ku()/8);setTimeout(()=>{for(let s of ti){if(!s.alive)continue;let r=s.x-N.x,a=s.z-N.z,o=Math.hypot(r,a);o>2.6||(r*t+a*e)/(o||1)<.2&&o>.8||om(s,i,r/(o||1),a/(o||1))}},110)}function om(n,t,e,i){n.hp-=t,n.stun=.25,n.flashT=.15,n.aggro=!0,zu(n,e*.7,i*.7),Ee.burst(n.x,n.y+.9,n.z,[2.2,1,.3],10,3,.12,.5),jt.shake=Math.max(jt.shake,.12),ge.hit(),n.hp<=0&&lm(n)}function lm(n){n.alive=!1,n.deathT=.6,oa.kills++,et.souls=Math.min(100,et.souls+8);let t=3;et.paydirt+=t,oa.paydirt+=t,Ee.burst(n.x,n.y+.8,n.z,[2.4,2,.6],16,3.5,.14,.8);for(let e=0;e<5;e++)Ee.spawn({x:n.x,y:n.y+.6,z:n.z,vx:(Math.random()-.5)*3,vy:3+Math.random()*2,vz:(Math.random()-.5)*3,color:[2.6,1.9,.4],size:.22,life:1.4,grav:-9,drag:1,kind:2});for(let e=0;e<6;e++)Ee.spawn({x:n.x,y:n.y+.6,z:n.z,vx:(Math.random()-.5)*2,vy:2+Math.random(),vz:(Math.random()-.5)*2,color:[.5,1.6,2.6],size:.18,life:1.6,grav:-2,drag:1,kind:2});Nn(),ti.some(e=>e.alive)||Ri("Area cleared","The way to the chest is open","star")}function zu(n,t,e){let i={x:n.x,z:n.z,y:R};go(i,t,e,.3),n.x=i.x,n.z=i.z}function Gu(){if(!(!De||ci()||N.potionCd>0||N.hp>=N.maxHp)){N.hp=Math.min(N.maxHp,N.hp+40),N.potionCd=8,ge.potion();for(let n=0;n<24;n++)Ee.spawn({x:N.x+(Math.random()-.5)*.8,y:N.y+Math.random()*1.8,z:N.z+(Math.random()-.5)*.8,vy:1.2,color:[2.4,.3,.3],size:.12,life:.9});Nn()}}function cm(n){let t=po("artifacts")[n];if(!t||N.artCd[n]>0||ci())return;N.artCd[n]=6,et.souls=Math.max(0,et.souls-10);let e=t.icon==="shield"?[.4,.9,2.6]:t.icon==="quill"?[.5,1.8,2.6]:[2.6,1.2,.3];if(t.icon==="shield")N.invuln=Math.max(N.invuln,1.6);else for(let i of ti)i.alive&&Math.hypot(N.x-i.x,N.z-i.z)<3.2&&om(i,22,Math.sign(i.x-N.x),Math.sign(i.z-N.z));for(let i=0;i<40;i++){let s=i/40*Math.PI*2;Ee.spawn({x:N.x,y:N.y+.4,z:N.z,vx:Math.cos(s)*6,vy:.4,vz:Math.sin(s)*6,color:e,size:.2,life:.5,drag:2.5})}ge.loot(),Nn()}function hm(){let n=N.x,t=N.z,e=null,i=1e9,s=(r,a,o,l=1.9)=>{let c=Math.hypot(n-a,t-o);c<l&&c<i&&(i=c,e=r)};for(let r of Wc)r.interact&&s(r,r.model.root.position.x,r.model.root.position.z,2.1);for(let r of Xc)r.interact&&s(r,r.model.root.position.x,r.model.root.position.z,1.8);for(let r of se.interacts||[])s(r,r.x,r.z,r.r||1.6);return le&&!le.opened&&s({interact:"chest",label:"Open the chest"},le.x,le.z,2),e}function Jc(){if(!De){es();return}if(ci())return;let n=hm();if(n){if(n.interact==="pete"){Bc=(Bc+1)%Lc.length,hi("Pete",Lc[Bc],"npc",Bc<Lc.length-1),ge.talk();return}if(n.interact==="student"){let t=oo[Uy++%oo.length];hi("Student",t,"npc"),ge.talk();return}if(n.interact==="wolf"){Ri("Who's a good wolf?","You pet the camp wolf.","head"),hi(null,"The wolf thumps its tail.","sys"),et.adv.has("wolf")||(et.adv.add("wolf"),Ii()),Ee.burst(n.model.root.position.x,R+1,n.model.root.position.z,[2.4,.6,.8],8,1.5,.15,.8,1);return}if(n.interact==="map")return or();if(n.interact==="smith")return hi("Smith","Let's see that gear of yours.","npc"),ws();if(n.interact==="storage")return Ri("Storage","Your gear lives in the inventory (I).","bag"),ws();if(n.interact==="chest")return um()}}function um(){!le||le.opened||(le.opened=!0,le.openT=1e-4,ge.chest(),Ee.burst(le.x,R+1,le.z,[2.6,2,.6],40,4.5,.16,1.1,-5),jt.shake=.2,mo=di.loot,setTimeout(()=>Iu(di.loot),et.reduced?50:900))}async function Vu(n){let t=Ms[n];if(!t)return;on(),di=t;let e=ze("#fade");e&&!et.reduced&&(e.classList.add("on"),await new Promise(r=>setTimeout(r,260)));let i=bp(t);Hu(i),la("mission"),N.x=i.spawn.x,N.z=i.spawn.z,N.y=Kn(i,N.x,N.z),N.hp=N.maxHp,N.action=null,N.invuln=.6,N.rot=Math.PI*1.25,oa={kills:0,paydirt:0,xp:0},mo=null,ur(),aa({hud:!0}),Nn();let s=ze("#chat");s&&(s.innerHTML=""),hi(null,`Mission started: ${t.name}`,"join"),qy(t.name,t.subtitle),ge.open(),e&&setTimeout(()=>e.classList.remove("on"),60)}function qy(n,t){let e=ze("#mission-banner");e&&(e.querySelector("h2").textContent=n,e.querySelector("p").textContent=t,e.hidden=!1,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),setTimeout(()=>e.hidden=!0,3400))}function dm(){let n=di;if(!n)return;let t=!et.visited.has(n.id);et.visited.add(n.id);let e=t?25:8,i=t?20:8;et.xp+=e,oa.xp=e,oa.paydirt+=i,et.paydirt+=i;let s=40+et.level*20;et.xp>=s&&(et.xp-=s,et.level++,Ri("Level up",`You reached level ${et.level}`,"star")),t&&n.adv&&Ri("Advancement made!",n.adv,n.loot.icon),et.visited.size===ia.length&&!et.adv.has("all")&&(et.adv.add("all"),Ri("Challenge complete!","Every landmark mission, done.","star",!0)),Ii(),Pu(n,oa)}async function fm(){let n=ze("#fade");n&&!et.reduced&&(n.classList.add("on"),await new Promise(t=>setTimeout(t,240))),di=null,Hu(bn),la("camp"),N.x=bn.spawn.x,N.z=bn.spawn.z,N.y=Kn(bn,N.x,N.z),N.hp=N.maxHp,N.rot=Math.PI,ur(),Nn(),n&&setTimeout(()=>n.classList.remove("on"),60)}function pm(n){let t=se?.kind==="camp",e=(t?Es.dist:jt.dist)*jt.zoom*(Jt.w<Jt.h?1.25:1),i=t?Math.max(.24,Math.min(.9,Es.pitch-(jt.zoom-1)*.5)):Math.max(.26,jt.pitch-(jt.zoom-1)*.96);return n.set(jt.target.x+Math.sin(Pi)*Math.cos(i)*e,jt.target.y+mm()+Math.sin(i)*e,jt.target.z+Math.cos(Pi)*Math.cos(i)*e),n}var $y=new B,Es={dist:22,pitch:.27,lift:6.2};function mm(){return se?.kind==="camp"?Es.lift*(Jt.w<Jt.h?.4:1):Math.max(0,jt.zoom-1.1)*22}function gm(){return $y.copy(jt.target).setY(jt.target.y+mm())}function ur(){jt.target.set(N.x,N.y+.9,N.z),pm(jt.pos),Jt.camera.position.copy(jt.pos),Jt.camera.lookAt(gm())}var Ts=new B;function Yy(n){let t=Jt.camera;if(!De){let i=Mn*.06,s=new B(16+Math.cos(i)*3,R-3,4+Math.sin(i)*2);jt.target.lerp(s,.05);let r=74,a=.21,o=.5+Math.sin(Mn*.05)*.05;Ts.set(jt.target.x+Math.sin(o)*Math.cos(a)*r,jt.target.y+Math.sin(a)*r,jt.target.z+Math.cos(o)*Math.cos(a)*r),t.position.lerp(Ts,.05),t.lookAt(jt.target);return}let e=et.reduced?1:1-Math.pow(.0025,n);Ts.set(N.x+Math.sin(N.rot)*N.speed*.8,N.y+.9,N.z+Math.cos(N.rot)*N.speed*.8),jt.target.lerp(Ts,e),pm(jt.pos),t.position.lerp(jt.pos,et.reduced?1:1-Math.pow(8e-4,n)),jt.shake>0&&!et.reduced&&(t.position.x+=(Math.random()-.5)*jt.shake,t.position.y+=(Math.random()-.5)*jt.shake,jt.shake=Math.max(0,jt.shake-n*1.2)),t.lookAt(gm())}var Uu=null;function Jy(){try{if(!Uu){let n=new xi,t=yu();n.add(t.root),n.add(new Hs(16777215,6702114,1.4));let e=new Ws(16769216,2.4);e.position.set(2,3,4),n.add(e);let i=new Ne(30,2/3,.1,20);i.position.set(1.4,1.6,4.4),i.lookAt(0,1.05,0),t.root.rotation.y=.35,sr(t,{speed:0},.016);let s=new Ue(192,288,{samples:4});Jt.renderer.setRenderTarget(s),Jt.renderer.setClearColor(0,0),Jt.renderer.clear(),Jt.renderer.render(n,i),Jt.renderer.setRenderTarget(null);let r=new Uint8Array(192*288*4);Jt.renderer.readRenderTargetPixels(s,0,0,192,288,r);let a=document.createElement("canvas");a.width=192,a.height=288;let o=a.getContext("2d"),l=o.createImageData(192,288);for(let c=0;c<288;c++)for(let u=0;u<192;u++){let h=((287-c)*192+u)*4,d=(c*192+u)*4;for(let f=0;f<3;f++)l.data[d+f]=Math.min(255,Math.pow(r[h+f]/255,1/2.2)*255);l.data[d+3]=r[h+3]}o.putImageData(l,0,0),Uu=a.toDataURL(),s.dispose(),Jt.renderer.setClearColor(0,1)}}catch{return null}return Uu}var cr=ze("#nametag");function Zy(n){let t=se;if(!t||et.reduced)return;let e=t.timeKey==="night"||t.timeKey==="dungeon"||t.timeKey==="cave"||t.timeKey==="dusk";for(let s of t.emitters){if((s.x-N.x)**2+(s.z-N.z)**2>900)continue;let r=(Ou.get(s)||0)+n*s.rate;for(;r>=1;){r-=1;let a=()=>Math.random()-.5;if(s.type==="ember")Ee.spawn({x:s.x+a()*.15,y:s.y,z:s.z+a()*.15,vx:a()*.3,vy:.9+Math.random(),vz:a()*.3,color:[2.6,1.1,.25],size:.06,life:1.2,drag:.4});else if(s.type==="fire")Ee.spawn({x:s.x+a()*.7,y:s.y,z:s.z+a()*.7,vx:a()*.4,vy:1.6+Math.random()*1.6,vz:a()*.4,color:Math.random()<.5?[2.8,1.4,.3]:[2.6,2.2,.8],size:.1,life:1.1,drag:.6});else if(s.type==="smoke")hr.spawn({x:s.x+a()*.4,y:s.y,z:s.z+a()*.4,vx:.25+a()*.2,vy:.8,vz:a()*.2,color:e?[.25,.24,.26]:[.62,.6,.58],size:.55,life:3.2,drag:.2});else if(s.type==="spark")Ee.spawn({x:s.x,y:s.y,z:s.z,vx:a()*3,vy:2+Math.random()*2,vz:a()*3,color:[3,1.8,.5],size:.06,life:.7,grav:-9,drag:.5});else if(s.type==="magic"||s.type==="magicup"){let o=new bt(s.color||"#ffd070"),l=s.spread||1;Ee.spawn({x:s.x+a()*l,y:s.y+Math.random()*.4,z:s.z+a()*l,vy:.4+Math.random()*.6,vx:a()*.2,vz:a()*.2,color:[o.r*2.4,o.g*2.4,o.b*2.4],size:.09,life:1.8,drag:.3})}else s.type==="firefly"&&Ee.spawn({x:s.x+a()*3,y:s.y+Math.random(),z:s.z+a()*3,color:[1.6,2.4,.6],size:.1,life:5,drag:1,kind:1})}Ou.set(s,r)}let i=t.kind==="camp"?t.timeKey==="night"?6:4:3;if(Math.random()<n*i*3){let s=N.x+(Math.random()-.5)*26,r=N.z+(Math.random()-.5)*22;t.timeKey==="night"||t.timeKey==="dusk"?Ee.spawn({x:s,y:R+.5+Math.random()*2,z:r,color:[1.4,2.2,.5],size:.09,life:5,drag:1,kind:1}):t.timeKey==="day"?Ee.spawn({x:s,y:R+.5+Math.random()*4,z:r,vx:.2,vy:.05,color:[.5,.46,.36],size:.06,life:5,drag:.1,kind:1}):Ee.spawn({x:s,y:R+Math.random()*3,z:r,vy:.3,color:t.theme?.magic?[.4,1.2,1.8]:[1.8,.8,.3],size:.06,life:4,drag:.2,kind:1})}}function Ky(n){Mn+=n,je.uTime.value=Mn;for(let s of se?.fades||[]){let r=s.rect,a=N.x>r[0]&&N.x<r[2]&&N.z>r[1]&&N.z<r[3]+2,o=Math.sin(Pi),l=Math.cos(Pi),c=s.cx-N.x,u=s.cz-N.z,h=c*o+u*l,d=Math.abs(c*l-u*o),f=h>-s.rad&&h<s.h/Math.tan(se.kind==="camp"?Es.pitch:jt.pitch)+s.rad&&d<s.rad+.9;s.k+=(((a||f)&&De?s.tree?.25:.18:1)-s.k)*Math.min(1,n*6),s.mat.opacity=s.k,s.mat.depthWrite=s.k>.95,s.mesh.castShadow=!0}for(let s of["rollCd","potionCd","atkCd","invuln","hurt"])N[s]>0&&(N[s]=Math.max(0,N[s]-n));N.artCd=N.artCd.map(s=>Math.max(0,s-n));let t=De&&!ci()&&Li!=="map",e=se;if(t){if(N.action==="roll")go(N,N.vx*n,N.vz*n),N.actionT-=n,N.speed=1,N.actionT<=0&&(N.action=null,N.vx=N.vz=0);else{let a=am(),o=4.6*a.len*(N.action==="attack"?.35:1);if(a.len){go(N,a.x*o*n,a.z*o*n);let c=Math.atan2(a.x,a.z)-N.rot;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;N.action!=="attack"&&(N.rot+=c*Math.min(1,n*14))}N.speed+=((a.len?a.len:0)-N.speed)*Math.min(1,n*10),N.action==="attack"&&(N.actionT-=n,N.actionT<=0&&(N.action=null))}let s=Kn(e,N.x,N.z);N.y+=(s-N.y)*Math.min(1,n*14);for(let a of ti){if(!a.alive){a.deathT>0&&(a.deathT-=n,a.model.root.rotation.z=(1-a.deathT/.6)*1.4,a.model.root.position.y=R-(1-a.deathT/.6)*.4,a.model.root.scale.setScalar(Math.max(.01,a.deathT/.6)*(a.model.root.userData.s||=a.model.root.scale.x)),a.deathT<=0&&(a.model.root.visible=!1)),a.bar.visible=!1,a.ring&&(a.ring.visible=!1);continue}a.flashT>0&&(a.flashT-=n,Nc(a.model,a.flashT>0?1:0));let o=N.x-a.x,l=N.z-a.z,c=Math.hypot(o,l);c<8.5&&(a.aggro=!0);let u=0;if(a.stun>0)a.stun-=n;else if(a.action==="windup")a.actionT-=n,a.actionT<=0&&(a.action="attack",a.actionT=.4,c<1.9&&N.invuln<=0&&N.action!=="roll"&&(N.hp=Math.max(0,N.hp-a.dmg),N.invuln=.6,N.hurt=.3,jt.shake=.25,ge.hurt(),Ee.burst(N.x,N.y+1,N.z,[2.6,.3,.2],10,2.5,.12,.5),N.hp<=0&&(N.hp=N.maxHp*.6,N.x=e.spawn.x,N.z=e.spawn.z,N.y=Kn(e,N.x,N.z),Ri("Recovered","A tonic pulls you back to the entrance.","potion"),ur()),Nn()));else if(a.action==="attack")a.actionT-=n,a.actionT<=0&&(a.action=null,a.atkCd=1.1+Math.random()*.6);else if(a.aggro){if(a.atkCd-=n,c>1.45){let f=a.speed*n,m=a.x,_=a.z;zu(a,o/c*f,l/c*f),u=Math.hypot(a.x-m,a.z-_)/n/a.speed}else a.atkCd<=0&&(a.action="windup",a.actionT=.42);for(let f of ti)if(f!==a&&f.alive){let m=a.x-f.x,_=a.z-f.z,g=Math.hypot(m,_);g<.9&&g>.001&&zu(a,m/g*n*1.5,_/g*n*1.5)}a.rot=Math.atan2(o,l)}let h=a.model;h.root.position.set(a.x,R,a.z);let d=a.rot-h.root.rotation.y;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;h.root.rotation.y+=d*Math.min(1,n*8),sr(h,{speed:Math.min(1,u),action:a.action==="windup"||a.action==="attack"?"attack":null,actionT:a.action==="windup"?.3-(.42-a.actionT)*.5:a.actionT,actionDur:.4,light:e.vox.lightAt(a.x,R+1,a.z)},n),a.action==="windup"&&!et.reduced&&(a.model.root.position.y=R+Math.sin((.42-a.actionT)*30)*.02),a.bar.visible=a.hp<a.max||c<5,a.bar.position.set(a.x,R+(a.type==="wisp"?2.9:a.type==="bug"?1.5:3.1),a.z),a.ring&&(a.ring.visible=!0,a.ring.position.set(a.x,R+.04,a.z),a.ring.rotation.z=Math.PI/4+Mn*.8),a.bar.quaternion.copy(Jt.camera.quaternion),a.bar.userData.fg.scale.x=Math.max(.001,a.hp/a.max)}for(let a of Wc){let o=a.model,l=o.root.position,c=0;if(a.path){let f=a.path[a.pi],m=f[0]-l.x,_=f[1]-l.z,g=Math.hypot(m,_),p=Math.hypot(N.x-l.x,N.z-l.z)<2.6;g<.1?(a.t+=n,a.t>2&&(a.pi=(a.pi+1)%a.path.length,a.t=0)):p||(l.x+=m/g*n*1.4,l.z+=_/g*n*1.4,a.rot=Math.atan2(m,_),c=.35),a.ring.position.set(l.x,l.y+.03,l.z)}let d=(Math.hypot(N.x-l.x,N.z-l.z)<4.5&&!c?Math.atan2(N.x-l.x,N.z-l.z):a.rot)-o.root.rotation.y;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;o.root.rotation.y+=d*Math.min(1,n*4),sr(o,{speed:c,light:e.vox.lightAt(l.x,R+1.5,l.z)},n),a.ring.material.opacity=.35+Math.sin(Mn*3)*.2}for(let a of Xc){let o=a.model,l=o.root.position;if(a.t-=n,a.sit){sr(o,{speed:0,sit:!0,light:e.vox.lightAt(l.x,R+1,l.z)},n);continue}if(a.t<=0){a.t=2+Math.random()*4;let f=a.pen;f&&(a.tx=f[0]+Math.random()*(f[2]-f[0]),a.tz=f[1]+Math.random()*(f[3]-f[1])),a.graze=Math.random()<.4}let c=a.tx-l.x,u=a.tz-l.z,h=Math.hypot(c,u),d=0;if(h>.2&&!a.graze){let f=(a.type==="chicken"?1.2:.9)*n,m={x:l.x,z:l.z,y:R};go(m,c/h*f,u/h*f,.2),l.x=m.x,l.z=m.z,d=.5;let g=Math.atan2(c,u)-o.root.rotation.y;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;o.root.rotation.y+=g*Math.min(1,n*5)}l.y=Kn(e,l.x,l.z),sr(o,{speed:d,graze:a.graze,light:e.vox.lightAt(l.x,R+1,l.z)},n)}let r=hm();if(r?Lu(`<kbd>${matchMedia("(pointer: coarse)").matches?"A":"E"}</kbd> ${r.label||"Interact"}`,r.label||r.interact):Lu(null),cr){let a=r&&(r.model?r.model.root.position:null);a?(Ts.set(a.x,a.y+2.6,a.z).project(Jt.camera),cr.hidden=!1,cr.textContent=(r.label||"").split(" (")[0].replace("Talk to ","").replace("Pet the ","").replace("Chat with a ",""),cr.style.transform=`translate(${(Ts.x*.5+.5)*Jt.w}px, ${(-Ts.y*.5+.5)*Jt.h}px) translate(-50%, -100%)`):cr.hidden=!0}(Mn*4|0)!==((Mn-n)*4|0)&&aa({potionCd:N.potionCd/8,rollCd:N.rollCd/1.6,hp:N.hp,maxHp:N.maxHp,souls:et.souls})}else cr&&(cr.hidden=!0);if(Ci){let s=Ci.root;s.visible=De,s.position.set(N.x,N.y,N.z),s.rotation.y=N.rot,sr(Ci,{speed:N.action==="roll"?0:N.speed,action:N.action,actionT:N.actionT,actionDur:N.actionDur,hurt:N.hurt,light:e?e.vox.lightAt(N.x,N.y+1,N.z):0},n),N.invuln>0&&N.action!=="roll"&&N.hurt>0?Nc(Ci,.8):Nc(Ci,0),t&&N.speed>.5&&!et.reduced&&Math.random()<n*8&&hr.spawn({x:N.x-Math.sin(N.rot)*.3,y:N.y+.05,z:N.z-Math.cos(N.rot)*.3,vy:.3,vx:(Math.random()-.5)*.3,color:e?.kind==="camp"?[.7,.62,.5]:[.5,.48,.5],size:.22,life:.6,drag:2})}if(le&&(le.openT>0?(le.openT=Math.min(1,le.openT+n*2.2),le.model.lid.rotation.x=-Math.min(1.9,le.openT*1.9),le.beam.scale.set(1+le.openT,1,1+le.openT),le.beam.children.forEach(s=>{s.material.uniforms&&(s.material.uniforms.uA.value=Math.max(0,.9-le.openT*.6))})):le.model.lid.rotation.x=Math.sin(Mn*3)*.02,le.beam.rotation.y+=n*.6,le.beam.userData.ring.scale.setScalar(1+Math.sin(Mn*3)*.12),!et.reduced&&Math.random()<n*18)){let s=new bt(le.color);Ee.spawn({x:le.x+(Math.random()-.5)*1.4,y:R+.2,z:le.z+(Math.random()-.5)*1.4,vy:1.5+Math.random()*2,color:[s.r*2.5,s.g*2.5,s.b*2.5],size:.12,life:2,drag:.1})}if(e?.gears)for(let s of e.gears)s.g.rotation.z+=n*s.s;Zy(n),Ee.target=N,Ee.update(n,Mn),hr.update(n,Mn),Qy(n),Vc.update(Mn),Ee.mat.uniforms.uScale.value=hr.mat.uniforms.uScale.value=Jt.h*Jt.renderer.getPixelRatio()*.9,Yy(n);let i=De?Ts.set(N.x,N.y,N.z):jt.target;Pn.follow(i.clone?i.clone():i),Pn.assign(e?e.lights:[],De?N:{x:jt.target.x,z:jt.target.z},Mn)}function Qy(n){let t=Ee;for(let e=0;e<t.n;e++){if(t.kind[e]!==2||t.life0[e]-t.life[e]<.45)continue;let s=N.x-t.p[e*3],r=N.y+1-t.p[e*3+1],a=N.z-t.p[e*3+2],o=Math.hypot(s,r,a);if(o<.5){t.life[e]=0;continue}t.g[e]=0;let l=14;t.v[e*3]+=s/o*l*n*4,t.v[e*3+1]+=r/o*l*n*4,t.v[e*3+2]+=a/o*l*n*4,t.drag[e]=4,t.life[e]=Math.max(t.life[e],.3)}}var zc=0,Fu=0,Hc=0,nm=16;function jy(n){if(zc+=n,Fu++,zc<2.5)return;let t=Fu/zc;zc=0,Fu=0,window.__fps=t,!(!et.autoQuality||Mn<5)&&(t<34&&Jt.quality>0?(Hc++,Hc>=2&&(Hc=0,et.quality=Jt.quality-1,Jt.setQuality(et.quality),Ii(),hi(null,`Graphics set to ${er[et.quality].name} for smoother play`,"sys"))):Hc=0)}var im=0;function xm(n){let t=Math.min(.05,(n-(im||n))/1e3);im=n;let e=performance.now();Ky(t),Li==="map"&&Dn?(Dn.update(t,Jt,et.reduced),Jt.render(Dn.scene,Dn.camera),$p(i=>Dn.project(i,Jt),Dn.nodes)):Jt.render(ui,Jt.camera),nm=performance.now()-e,Jt.stats.frameMs=nm,jy(t),requestAnimationFrame(xm)}(async function(){try{Du(),Jp(),document.fonts?.ready&&document.fonts.ready.then(Du),await fo(10,"Painting block textures..."),await fo(30,"Building Centennial Plaza..."),bn=dp();{let e=new Ne(44,1.6,.5,400),i=Es.pitch,s=Es.dist,r=new B(bn.spawn.x,R+.9,bn.spawn.z);e.position.set(r.x+Math.sin(Pi)*Math.cos(i)*s,r.y+Es.lift+Math.sin(i)*s,r.z+Math.cos(Pi)*Math.cos(i)*s),e.lookAt(r.x,r.y+Es.lift,r.z),e.updateMatrixWorld(),e.updateProjectionMatrix(),fp(bn,e)}await fo(65,"Waking up Paydirt Pete..."),Hu(bn),N.x=bn.spawn.x,N.z=bn.spawn.z,N.y=R,jt.target.set(42,R+1,46),Jt.camera.position.set(60,30,66),Jt.camera.lookAt(jt.target),await fo(85,"Lighting torches..."),Jt.render(ui,Jt.camera),await fo(100,"Ready");let t=ze("#loading");if(t&&(t.classList.add("done"),setTimeout(()=>t.hidden=!0,500)),aa({hud:!1}),requestAnimationFrame(xm),location.hash.length>1){let e=location.hash.slice(1);Ms[e]&&(es(!0),Vu(e))}}catch(t){console.error(t);let e=ze("#nogl");e&&(e.hidden=!1,e.querySelector("p").textContent="Something went wrong while building the 3D world.");let i=ze("#loading");i&&(i.hidden=!0)}})();window.__game={start:es,openPanel:Ai,openInventory:ws,openMissionMap:or,startMission:Vu,closeAll:on,returnToCamp:fm,openChest:um,finishMission:dm,showLoot:Iu,showComplete:Pu,setTime(n){et.time=n,se?.kind==="camp"&&qc(),Nn()},setQuality(n){et.quality=n,et.autoQuality=!1,Jt.setQuality(n)},player:N,state:et,eng:Jt,cam:jt,get level(){return se},get enemies(){return ti},get mode(){return Li},get stats(){return{...Jt.stats,fps:window.__fps}},snapCam:ur,missions:Ei.map(n=>n.id),goTo(n,t,e){N.x=n,N.z=t,N.y=Kn(se,n,t),e!=null&&(N.rot=e),ur()},goToChest(){return le?(N.x=le.x-1.2,N.z=le.z+1.2,N.y=Kn(se,N.x,N.z),N.rot=Math.atan2(le.x-N.x,le.z-N.z),ur(),!0):!1},killAll(){for(let n of ti)n.alive&&lm(n)},attack:Yc,roll:$c,interact:Jc,giveAll(){for(let n of Ei)sm(n.loot)}};
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
