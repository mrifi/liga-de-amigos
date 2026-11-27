(()=>{var Nh="170";var Dp=0,Hu=1,Up=2;var sl=1,Np=2,bi=3,is=0,Ke=1,hn=2,ts=0,Rr=1,Lr=2,Vu=3,Gu=4,Op=5,Ls=100,Fp=101,Bp=102,zp=103,kp=104,Hp=200,Vp=201,Gp=202,Wp=203,gc=204,xc=205,Xp=206,qp=207,Yp=208,$p=209,Zp=210,Jp=211,Kp=212,jp=213,Qp=214,_c=0,vc=1,yc=2,Dr=3,Mc=4,bc=5,Sc=6,Ec=7,Oh=0,tm=1,em=2,es=0,nm=1,im=2,sm=3,rm=4,am=5,om=6,lm=7;var jf=300,Ur=301,Nr=302,wc=303,Tc=304,rl=306,ba=1e3,Us=1001,Ac=1002,nn=1003,cm=1004;var Qa=1005;var Qn=1006,Bl=1007;var Ns=1008;var wi=1009,Qf=1010,td=1011,Sa=1012,Fh=1013,Os=1014,ti=1015,Ia=1016,Bh=1017,zh=1018,Or=1020,ed=35902,nd=1021,id=1022,Vn=1023,sd=1024,rd=1025,Cr=1026,Fr=1027,kh=1028,Hh=1029,ad=1030,Vh=1031;var Gh=1033,Ro=33776,Co=33777,Io=33778,Po=33779,Rc=35840,Cc=35841,Ic=35842,Pc=35843,Lc=36196,Dc=37492,Uc=37496,Nc=37808,Oc=37809,Fc=37810,Bc=37811,zc=37812,kc=37813,Hc=37814,Vc=37815,Gc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,$c=37821,Lo=36492,Zc=36494,Jc=36495,od=36283,Kc=36284,jc=36285,Qc=36286;var Do=2300,th=2301,zl=2302,Wu=2400,Xu=2401,qu=2402;var hm=3200,um=3201;var ld=0,fm=1,ji="",Fe="srgb",Vr="srgb-linear",al="linear",ge="srgb";var lr=7680;var Yu=519,dm=512,pm=513,mm=514,cd=515,gm=516,xm=517,_m=518,vm=519,eh=35044,Wh=35048;var $u="300 es",Si=2e3,Uo=2001,ss=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kl=Math.PI/180,nh=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function cn(i,t,e){return Math.max(t,Math.min(e,i))}function ym(i,t){return(i%t+t)%t}function Hl(i,t,e){return(1-e)*i+e*t}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var zt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class i{constructor(t,e,n,s,r,a,o,l,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],c=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],E=s[1],S=s[4],M=s[7],O=s[2],T=s[5],A=s[8];return r[0]=a*x+o*E+l*O,r[3]=a*m+o*S+l*T,r[6]=a*d+o*M+l*A,r[1]=h*x+c*E+u*O,r[4]=h*m+c*S+u*T,r[7]=h*d+c*M+u*A,r[2]=f*x+p*E+g*O,r[5]=f*m+p*S+g*T,r[8]=f*d+p*M+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-n*r*c+n*o*l+s*r*h-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*a-o*h,f=o*l-c*r,p=h*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*h-c*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(c*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-h*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vl.makeScale(t,e)),this}rotate(t){return this.premultiply(Vl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vl=new Xt;function hd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mm(){let i=Ea("canvas");return i.style.display="block",i}var Zu={};function va(i){i in Zu||(Zu[i]=!0,console.warn(i))}function bm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Sm(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Em(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(i.r=Ir(i.r),i.g=Ir(i.g),i.b=Ir(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?al:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ju=[.64,.33,.3,.6,.15,.06],Ku=[.2126,.7152,.0722],ju=[.3127,.329],Qu=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tf=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Vr]:{primaries:Ju,whitePoint:ju,transfer:al,toXYZ:Qu,fromXYZ:tf,luminanceCoefficients:Ku,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:Ju,whitePoint:ju,transfer:ge,toXYZ:Qu,fromXYZ:tf,luminanceCoefficients:Ku,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});var cr,ih=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cr===void 0&&(cr=Ea("canvas")),cr.width=t.width,cr.height=t.height;let n=cr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ea("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wm=0,No=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gl(s[a].image)):r.push(Gl(s[a]))}else r=Gl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tm=0,sn=class i extends ss{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Us,s=Us,r=Qn,a=Ns,o=Vn,l=wi,h=i.DEFAULT_ANISOTROPY,c=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=ns(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ba:t.x=t.x-Math.floor(t.x);break;case Us:t.x=t.x<0?0:1;break;case Ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ba:t.y=t.y-Math.floor(t.y);break;case Us:t.y=t.y<0?0:1;break;case Ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=jf;sn.DEFAULT_ANISOTROPY=1;var Le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],c=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(h+1)/2,M=(p+1)/2,O=(d+1)/2,T=(c+f)/4,A=(u+x)/4,U=(g+m)/4;return S>M&&S>O?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):M>O?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=U/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=A/r,s=U/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-c)*(f-c));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-x)/E,this.z=(f-c)/E,this.w=Math.acos((h+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sh=class extends ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new No(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends sh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Oo=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var rh=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],c=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||h!==p||c!==g){let m=1-o,d=l*f+h*p+c*g+u*x,E=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){let O=Math.sqrt(S),T=Math.atan2(O,d*E);m=Math.sin(m*T)/O,o=Math.sin(o*T)/O}let M=o*E;if(l=l*m+f*M,h=h*m+p*M,c=c*m+g*M,u=u*m+x*M,m===1-o){let O=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=O,h*=O,c*=O,u*=O}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],h=n[s+2],c=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+c*u+l*p-h*f,t[e+1]=l*g+c*f+h*u-o*p,t[e+2]=h*g+c*p+o*f-l*u,t[e+3]=c*g-o*u-l*f-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),c=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*c*u+h*p*g,this._y=h*p*u-f*c*g,this._z=h*c*g+f*p*u,this._w=h*c*u-f*p*g;break;case"YXZ":this._x=f*c*u+h*p*g,this._y=h*p*u-f*c*g,this._z=h*c*g-f*p*u,this._w=h*c*u+f*p*g;break;case"ZXY":this._x=f*c*u-h*p*g,this._y=h*p*u+f*c*g,this._z=h*c*g+f*p*u,this._w=h*c*u-f*p*g;break;case"ZYX":this._x=f*c*u-h*p*g,this._y=h*p*u+f*c*g,this._z=h*c*g-f*p*u,this._w=h*c*u+f*p*g;break;case"YZX":this._x=f*c*u+h*p*g,this._y=h*p*u+f*c*g,this._z=h*c*g-f*p*u,this._w=h*c*u-f*p*g;break;case"XZY":this._x=f*c*u-h*p*g,this._y=h*p*u-f*c*g,this._z=h*c*g+f*p*u,this._w=h*c*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-h)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(c-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+h)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-h)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+a*o+s*h-r*l,this._y=s*c+a*l+r*o-n*h,this._z=r*c+a*h+n*l-s*o,this._w=a*c-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-e)*c)/h,f=Math.sin(e*c)/h;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ef.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ef.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),c=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*h+a*u-o*c,this.y=n+l*c+o*h-r*u,this.z=s+l*u+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wl.copy(this).projectOnVector(t),this.sub(Wl)}reflect(t){return this.sub(Wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wl=new C,ef=new Sn,Ai=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ha),eo.subVectors(this.max,ha),hr.subVectors(t.a,ha),ur.subVectors(t.b,ha),fr.subVectors(t.c,ha),qi.subVectors(ur,hr),Yi.subVectors(fr,ur),ws.subVectors(hr,fr);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-ws.z,ws.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,ws.z,0,-ws.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-ws.y,ws.x,0];return!Xl(e,hr,ur,fr,eo)||(e=[1,0,0,0,1,0,0,0,1],!Xl(e,hr,ur,fr,eo))?!1:(no.crossVectors(qi,Yi),e=[no.x,no.y,no.z],Xl(e,hr,ur,fr,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},xi=[new C,new C,new C,new C,new C,new C,new C,new C],Bn=new C,to=new Ai,hr=new C,ur=new C,fr=new C,qi=new C,Yi=new C,ws=new C,ha=new C,eo=new C,no=new C,Ts=new C;function Xl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ts.fromArray(i,r);let o=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=t.dot(Ts),h=e.dot(Ts),c=n.dot(Ts);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Am=new Ai,ua=new C,ql=new C,rs=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Am.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ua.subVectors(t,this.center);let e=ua.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ua,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ua.copy(t.center).add(ql)),this.expandByPoint(ua.copy(t.center).sub(ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new C,Yl=new C,io=new C,$i=new C,$l=new C,so=new C,Zl=new C,wa=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yl.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(Yl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(io),o=$i.dot(this.direction),l=-$i.dot(io),h=$i.lengthSq(),c=Math.abs(1-a*a),u,f,p,g;if(c>0)if(u=a*l-o,f=a*o-l,g=r*c,u>=0)if(f>=-g)if(f<=g){let x=1/c;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+h}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+h;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+h;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+h):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+h):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+h);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yl).addScaledVector(io,f),p}intersectSphere(t,e){_i.subVectors(t.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),c>=0?(r=(t.min.y-f.y)*c,a=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,a=(t.min.y-f.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,s,r){$l.subVectors(e,t),so.subVectors(n,t),Zl.crossVectors($l,so);let a=this.direction.dot(Zl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$i.subVectors(this.origin,t);let l=o*this.direction.dot(so.crossVectors($i,so));if(l<0)return null;let h=o*this.direction.dot($l.cross($i));if(h<0||l+h>a)return null;let c=-o*$i.dot(Zl);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class i{constructor(t,e,n,s,r,a,o,l,h,c,u,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,c,u,f,p,g,x,m)}set(t,e,n,s,r,a,o,l,h,c,u,f,p,g,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=h,d[6]=c,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/dr.setFromMatrixColumn(t,0).length(),r=1/dr.setFromMatrixColumn(t,1).length(),a=1/dr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*c,p=a*u,g=o*c,x=o*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=p+g*h,e[5]=f-x*h,e[9]=-o*l,e[2]=x-f*h,e[6]=g+p*h,e[10]=a*l}else if(t.order==="YXZ"){let f=l*c,p=l*u,g=h*c,x=h*u;e[0]=f+x*o,e[4]=g*o-p,e[8]=a*h,e[1]=a*u,e[5]=a*c,e[9]=-o,e[2]=p*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*c,p=l*u,g=h*c,x=h*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*c,e[9]=x-f*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*c,p=a*u,g=o*c,x=o*u;e[0]=l*c,e[4]=g*h-p,e[8]=f*h+x,e[1]=l*u,e[5]=x*h+f,e[9]=p*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*h,g=o*l,x=o*h;e[0]=l*c,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,p=a*h,g=o*l,x=o*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=f*u+x,e[5]=a*c,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*c,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rm,t,Cm)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Zi.crossVectors(n,pn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Zi.crossVectors(n,pn)),Zi.normalize(),ro.crossVectors(pn,Zi),s[0]=Zi.x,s[4]=ro.x,s[8]=pn.x,s[1]=Zi.y,s[5]=ro.y,s[9]=pn.y,s[2]=Zi.z,s[6]=ro.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],c=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],E=n[3],S=n[7],M=n[11],O=n[15],T=s[0],A=s[4],U=s[8],b=s[12],y=s[1],R=s[5],X=s[9],V=s[13],J=s[2],it=s[6],q=s[10],ot=s[14],W=s[3],ut=s[7],_t=s[11],Ct=s[15];return r[0]=a*T+o*y+l*J+h*W,r[4]=a*A+o*R+l*it+h*ut,r[8]=a*U+o*X+l*q+h*_t,r[12]=a*b+o*V+l*ot+h*Ct,r[1]=c*T+u*y+f*J+p*W,r[5]=c*A+u*R+f*it+p*ut,r[9]=c*U+u*X+f*q+p*_t,r[13]=c*b+u*V+f*ot+p*Ct,r[2]=g*T+x*y+m*J+d*W,r[6]=g*A+x*R+m*it+d*ut,r[10]=g*U+x*X+m*q+d*_t,r[14]=g*b+x*V+m*ot+d*Ct,r[3]=E*T+S*y+M*J+O*W,r[7]=E*A+S*R+M*it+O*ut,r[11]=E*U+S*X+M*q+O*_t,r[15]=E*b+S*V+M*ot+O*Ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*h*u-r*o*f+n*h*f+s*o*p-n*l*p)+x*(+e*l*p-e*h*f+r*a*f-s*a*p+s*h*c-r*l*c)+m*(+e*h*u-e*o*p-r*a*u+n*a*p+r*o*c-n*h*c)+d*(-s*o*c-e*l*u+e*o*f+s*a*u-n*a*f+n*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],E=u*m*h-x*f*h+x*l*p-o*m*p-u*l*d+o*f*d,S=g*f*h-c*m*h-g*l*p+a*m*p+c*l*d-a*f*d,M=c*x*h-g*u*h+g*o*p-a*x*p-c*o*d+a*u*d,O=g*u*l-c*x*l-g*o*f+a*x*f+c*o*m-a*u*m,T=e*E+n*S+s*M+r*O;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=E*A,t[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*A,t[2]=(o*m*r-x*l*r+x*s*h-n*m*h-o*s*d+n*l*d)*A,t[3]=(u*l*r-o*f*r-u*s*h+n*f*h+o*s*p-n*l*p)*A,t[4]=S*A,t[5]=(c*m*r-g*f*r+g*s*p-e*m*p-c*s*d+e*f*d)*A,t[6]=(g*l*r-a*m*r-g*s*h+e*m*h+a*s*d-e*l*d)*A,t[7]=(a*f*r-c*l*r+c*s*h-e*f*h-a*s*p+e*l*p)*A,t[8]=M*A,t[9]=(g*u*r-c*x*r-g*n*p+e*x*p+c*n*d-e*u*d)*A,t[10]=(a*x*r-g*o*r+g*n*h-e*x*h-a*n*d+e*o*d)*A,t[11]=(c*o*r-a*u*r-c*n*h+e*u*h+a*n*p-e*o*p)*A,t[12]=O*A,t[13]=(c*x*s-g*u*s+g*n*f-e*x*f-c*n*m+e*u*m)*A,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-c*o*s+c*n*l-e*u*l-a*n*f+e*o*f)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+n,c*l-s*a,0,h*l-s*o,c*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,u=o+o,f=r*h,p=r*c,g=r*u,x=a*c,m=a*u,d=o*u,E=l*h,S=l*c,M=l*u,O=n.x,T=n.y,A=n.z;return s[0]=(1-(x+d))*O,s[1]=(p+M)*O,s[2]=(g-S)*O,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+d))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+S)*A,s[9]=(m-E)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=dr.set(s[0],s[1],s[2]).length(),a=dr.set(s[4],s[5],s[6]).length(),o=dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],zn.copy(this);let h=1/r,c=1/a,u=1/o;return zn.elements[0]*=h,zn.elements[1]*=h,zn.elements[2]*=h,zn.elements[4]*=c,zn.elements[5]*=c,zn.elements[6]*=c,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Si){let l=this.elements,h=2*r/(e-t),c=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(o===Si)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Uo)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Si){let l=this.elements,h=1/(e-t),c=1/(n-s),u=1/(a-r),f=(e+t)*h,p=(n+s)*c,g,x;if(o===Si)g=(a+r)*u,x=-2*u;else if(o===Uo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},dr=new C,zn=new Zt,Rm=new C(0,0,0),Cm=new C(1,1,1),Zi=new C,ro=new C,pn=new C,nf=new Zt,sf=new Sn,En=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sf.setFromEuler(this),this.setFromQuaternion(sf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var Ta=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Im=0,rf=new C,pr=new Sn,vi=new Zt,ao=new C,fa=new C,Pm=new C,Lm=new Sn,af=new C(1,0,0),of=new C(0,1,0),lf=new C(0,0,1),cf={type:"added"},Dm={type:"removed"},mr={type:"childadded",child:null},Jl={type:"childremoved",child:null},Ye=class i extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new En,n=new Sn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Xt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(af,t)}rotateY(t){return this.rotateOnAxis(of,t)}rotateZ(t){return this.rotateOnAxis(lf,t)}translateOnAxis(t,e){return rf.copy(t).applyQuaternion(this.quaternion),this.position.add(rf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(af,t)}translateY(t){return this.translateOnAxis(of,t)}translateZ(t){return this.translateOnAxis(lf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ao.copy(t):ao.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(fa,ao,this.up):vi.lookAt(ao,fa,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(vi),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cf),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dm),Jl.child=t,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cf),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,t,Pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,Lm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ye.DEFAULT_UP=new C(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=new C,yi=new C,Kl=new C,Mi=new C,gr=new C,xr=new C,hf=new C,jl=new C,Ql=new C,tc=new C,ec=new Le,nc=new Le,ic=new Le,Qi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),kn.subVectors(t,e),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){kn.subVectors(s,e),yi.subVectors(n,e),Kl.subVectors(t,e);let a=kn.dot(kn),o=kn.dot(yi),l=kn.dot(Kl),h=yi.dot(yi),c=yi.dot(Kl),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(h*l-o*c)*f,g=(a*c-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ec.setScalar(0),nc.setScalar(0),ic.setScalar(0),ec.fromBufferAttribute(t,e),nc.fromBufferAttribute(t,n),ic.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ec,r.x),a.addScaledVector(nc,r.y),a.addScaledVector(ic,r.z),a}static isFrontFacing(t,e,n,s){return kn.subVectors(n,e),yi.subVectors(t,e),kn.cross(yi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),kn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,n),xr.subVectors(r,n),jl.subVectors(t,n);let l=gr.dot(jl),h=xr.dot(jl);if(l<=0&&h<=0)return e.copy(n);Ql.subVectors(t,s);let c=gr.dot(Ql),u=xr.dot(Ql);if(c>=0&&u<=c)return e.copy(s);let f=l*u-c*h;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(n).addScaledVector(gr,a);tc.subVectors(t,r);let p=gr.dot(tc),g=xr.dot(tc);if(g>=0&&p<=g)return e.copy(r);let x=p*h-l*g;if(x<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(xr,o);let m=c*g-p*u;if(m<=0&&u-c>=0&&p-g>=0)return hf.subVectors(r,s),o=(u-c)/(u-c+(p-g)),e.copy(s).addScaledVector(hf,o);let d=1/(m+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(gr,a).addScaledVector(xr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},oo={h:0,s:0,l:0};function sc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=ym(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=sc(a,r,t+1/3),this.g=sc(a,r,t),this.b=sc(a,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=ud[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return le.fromWorkingColorSpace(Je.copy(this),t),Math.round(cn(Je.r*255,0,255))*65536+Math.round(cn(Je.g*255,0,255))*256+Math.round(cn(Je.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Fe){le.fromWorkingColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(oo);let n=Hl(Ji.h,oo.h,e),s=Hl(Ji.s,oo.s,e),r=Hl(Ji.l,oo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new Ot;Ot.NAMES=ud;var Um=0,Ri=class extends ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=ns(),this.name="",this.blending=Rr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=xc,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==is&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gc&&(n.blendSrc=this.blendSrc),this.blendDst!==xc&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Be=class extends Ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new C,lo=new zt,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eh&&(t.usage=this.usage),t}};var Fo=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Bo=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var we=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},Nm=0,bn=new Zt,rc=new Ye,_r=new C,mn=new Ai,da=new Ai,Xe=new C,ze=class i extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hd(t)?Bo:Fo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];da.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(mn.min,da.min),mn.expandByPoint(Xe),Xe.addVectors(mn.max,da.max),mn.expandByPoint(Xe)):(mn.expandByPoint(da.min),mn.expandByPoint(da.max))}mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Xe.fromBufferAttribute(o,h),l&&(_r.fromBufferAttribute(t,h),Xe.add(_r)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new C,l[U]=new C;let h=new C,c=new C,u=new C,f=new zt,p=new zt,g=new zt,x=new C,m=new C;function d(U,b,y){h.fromBufferAttribute(n,U),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),c.sub(h),u.sub(h),p.sub(f),g.sub(f);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(R),o[U].add(x),o[b].add(x),o[y].add(x),l[U].add(m),l[b].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,b=E.length;U<b;++U){let y=E[U],R=y.start,X=y.count;for(let V=R,J=R+X;V<J;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let S=new C,M=new C,O=new C,T=new C;function A(U){O.fromBufferAttribute(s,U),T.copy(O);let b=o[U];S.copy(b),S.sub(O.multiplyScalar(O.dot(b))).normalize(),M.crossVectors(T,b);let R=M.dot(l[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,R)}for(let U=0,b=E.length;U<b;++U){let y=E[U],R=y.start,X=y.count;for(let V=R,J=R+X;V<J;V+=3)A(t.getX(V+0)),A(t.getX(V+1)),A(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,h=new C,c=new C,u=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),o.add(c),l.add(c),h.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,f=new h.constructor(l.length*c),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*c;for(let d=0;d<c;d++)f[g++]=h[p++]}return new Ie(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){let f=h[c],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,f=h.length;u<f;u++){let p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],u=r[h];for(let f=0,p=u.length;f<p;f++)c.push(u[f].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,c=a.length;h<c;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uf=new Zt,As=new wa,co=new rs,ff=new C,ho=new C,uo=new C,fo=new C,ac=new C,po=new C,df=new C,mo=new C,re=class extends Ye{constructor(t=new ze,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){po.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],u=r[l];c!==0&&(ac.fromBufferAttribute(u,t),a?po.addScaledVector(ac,c):po.addScaledVector(ac.sub(e),c))}e.add(po)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),As.copy(t.ray).recast(t.near),!(co.containsPoint(As.origin)===!1&&(As.intersectSphere(co,ff)===null||As.origin.distanceToSquared(ff)>(t.far-t.near)**2))&&(uf.copy(r).invert(),As.copy(t.ray).applyMatrix4(uf),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,As)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,O=S;M<O;M+=3){let T=o.getX(M),A=o.getX(M+1),U=o.getX(M+2);s=go(this,d,t,n,h,c,u,T,A,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let E=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);s=go(this,a,t,n,h,c,u,E,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,O=S;M<O;M+=3){let T=M,A=M+1,U=M+2;s=go(this,d,t,n,h,c,u,T,A,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let E=m,S=m+1,M=m+2;s=go(this,a,t,n,h,c,u,E,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Om(i,t,e,n,s,r,a,o){let l;if(t.side===Ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===is,o),l===null)return null;mo.copy(o),mo.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(mo);return h<e.near||h>e.far?null:{distance:h,point:mo.clone(),object:i}}function go(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,ho),i.getVertexPosition(l,uo),i.getVertexPosition(h,fo);let c=Om(i,t,e,n,ho,uo,fo,df);if(c){let u=new C;Qi.getBarycoord(df,ho,uo,fo,u),s&&(c.uv=Qi.getInterpolatedAttribute(s,o,l,h,u,new zt)),r&&(c.uv1=Qi.getInterpolatedAttribute(r,o,l,h,u,new zt)),a&&(c.normal=Qi.getInterpolatedAttribute(a,o,l,h,u,new C),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let f={a:o,b:l,c:h,normal:new C,materialIndex:0};Qi.getNormal(ho,uo,fo,f.normal),c.face=f,c.barycoord=u}return c}var wn=class i extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(u,2));function g(x,m,d,E,S,M,O,T,A,U,b){let y=M/A,R=O/U,X=M/2,V=O/2,J=T/2,it=A+1,q=U+1,ot=0,W=0,ut=new C;for(let _t=0;_t<q;_t++){let Ct=_t*R-V;for(let Jt=0;Jt<it;Jt++){let _e=Jt*y-X;ut[x]=_e*E,ut[m]=Ct*S,ut[d]=J,h.push(ut.x,ut.y,ut.z),ut[x]=0,ut[m]=0,ut[d]=T>0?1:-1,c.push(ut.x,ut.y,ut.z),u.push(Jt/A),u.push(1-_t/U),ot+=1}}for(let _t=0;_t<U;_t++)for(let Ct=0;Ct<A;Ct++){let Jt=f+Ct+it*_t,_e=f+Ct+it*(_t+1),K=f+(Ct+1)+it*(_t+1),lt=f+(Ct+1)+it*_t;l.push(Jt,_e,lt),l.push(_e,K,lt),W+=6}o.addGroup(p,W,b),p+=W,f+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Br(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=Br(i[e]);for(let s in n)t[s]=n[s]}return t}function Fm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Bm={clone:Br,merge:tn},zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends Ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=Fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},zo=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ki=new C,pf=new zt,mf=new zt,en=class extends zo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=nh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nh*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,pf,mf),e.subVectors(mf,pf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vr=-90,yr=1,ah=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(vr,yr,t,e);s.layers=this.layers,this.add(s);let r=new en(vr,yr,t,e);r.layers=this.layers,this.add(r);let a=new en(vr,yr,t,e);a.layers=this.layers,this.add(a);let o=new en(vr,yr,t,e);o.layers=this.layers,this.add(o);let l=new en(vr,yr,t,e);l.layers=this.layers,this.add(l);let h=new en(vr,yr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ko=class extends sn{constructor(t,e,n,s,r,a,o,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Ur,super(t,e,n,s,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},oh=class extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ko(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:ts});r.uniforms.tEquirect.value=e;let a=new re(s,r),o=e.minFilter;return e.minFilter===Ns&&(e.minFilter=Qn),new ah(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},oc=new C,Hm=new C,Vm=new Xt,Hn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=oc.subVectors(n,e).cross(Hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(oc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vm.getNormalMatrix(t),s=this.coplanarPoint(oc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new rs,xo=new C,Aa=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],c=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],E=s[13],S=s[14],M=s[15];if(n[0].setComponents(l-r,f-h,m-p,M-d).normalize(),n[1].setComponents(l+r,f+h,m+p,M+d).normalize(),n[2].setComponents(l+a,f+c,m+g,M+E).normalize(),n[3].setComponents(l-a,f-c,m-g,M-E).normalize(),n[4].setComponents(l-o,f-u,m-x,M-S).normalize(),e===Si)n[5].setComponents(l+o,f+u,m+x,M+S).normalize();else if(e===Uo)n[5].setComponents(o,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(xo.x=s.normal.x>0?t.max.x:t.min.x,xo.y=s.normal.y>0?t.max.y:t.min.y,xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function dd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gm(i){let t=new WeakMap;function e(o,l){let h=o.array,c=o.usage,u=h.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=i.SHORT;else if(h instanceof Uint32Array)p=i.UNSIGNED_INT;else if(h instanceof Int32Array)p=i.INT;else if(h instanceof Int8Array)p=i.BYTE;else if(h instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,h){let c=l.array,u=l.updateRanges;if(i.bindBuffer(h,o),u.length===0)i.bufferSubData(h,0,c);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];i.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var je=class i extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,c=l+1,u=t/o,f=e/l,p=[],g=[],x=[],m=[];for(let d=0;d<c;d++){let E=d*f-a;for(let S=0;S<h;S++){let M=S*u-r;g.push(M,-E,0),x.push(0,0,1),m.push(S/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){let S=E+h*d,M=E+h*(d+1),O=E+1+h*(d+1),T=E+1+h*d;p.push(S,M,T),p.push(M,O,T)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(x,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
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
#endif`,Km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm=`#ifdef USE_BATCHING
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
#endif`,Qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ng=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ig=`#ifdef USE_IRIDESCENCE
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
#endif`,sg=`#ifdef USE_BUMPMAP
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dg=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mg=`vec3 transformedNormal = objectNormal;
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
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
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
}`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
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
#endif`,Og=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hg=`PhysicalMaterial material;
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
#endif`,Vg=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Gg=`
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qg=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
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
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R0=`float getShadowMask() {
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
}`,C0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,K0=`#define DISTANCE
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
}`,j0=`#define DISTANCE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`uniform float scale;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#define LAMBERT
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
}`,ax=`#define LAMBERT
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
}`,ox=`#define MATCAP
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
}`,lx=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,hx=`#define NORMAL
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
}`,ux=`#define PHONG
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
}`,fx=`#define PHONG
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
}`,dx=`#define STANDARD
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
}`,px=`#define STANDARD
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
}`,mx=`#define TOON
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
}`,gx=`#define TOON
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
}`,xx=`uniform float size;
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
}`,_x=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,yx=`uniform vec3 color;
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
}`,Mx=`uniform float rotation;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Wm,alphahash_pars_fragment:Xm,alphamap_fragment:qm,alphamap_pars_fragment:Ym,alphatest_fragment:$m,alphatest_pars_fragment:Zm,aomap_fragment:Jm,aomap_pars_fragment:Km,batching_pars_vertex:jm,batching_vertex:Qm,begin_vertex:tg,beginnormal_vertex:eg,bsdfs:ng,iridescence_fragment:ig,bumpmap_pars_fragment:sg,clipping_planes_fragment:rg,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:og,clipping_planes_vertex:lg,color_fragment:cg,color_pars_fragment:hg,color_pars_vertex:ug,color_vertex:fg,common:dg,cube_uv_reflection_fragment:pg,defaultnormal_vertex:mg,displacementmap_pars_vertex:gg,displacementmap_vertex:xg,emissivemap_fragment:_g,emissivemap_pars_fragment:vg,colorspace_fragment:yg,colorspace_pars_fragment:Mg,envmap_fragment:bg,envmap_common_pars_fragment:Sg,envmap_pars_fragment:Eg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Og,envmap_vertex:Tg,fog_vertex:Ag,fog_pars_vertex:Rg,fog_fragment:Cg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Pg,lightmap_pars_fragment:Lg,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ug,lights_pars_begin:Ng,lights_toon_fragment:Fg,lights_toon_pars_fragment:Bg,lights_phong_fragment:zg,lights_phong_pars_fragment:kg,lights_physical_fragment:Hg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:Xg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:Zg,map_fragment:Jg,map_pars_fragment:Kg,map_particle_fragment:jg,map_particle_pars_fragment:Qg,metalnessmap_fragment:t0,metalnessmap_pars_fragment:e0,morphinstance_vertex:n0,morphcolor_vertex:i0,morphnormal_vertex:s0,morphtarget_pars_vertex:r0,morphtarget_vertex:a0,normal_fragment_begin:o0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:h0,normal_vertex:u0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,opaque_fragment:x0,packing:_0,premultiplied_alpha_fragment:v0,project_vertex:y0,dithering_fragment:M0,dithering_pars_fragment:b0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:T0,shadowmap_vertex:A0,shadowmask_pars_fragment:R0,skinbase_vertex:C0,skinning_pars_vertex:I0,skinning_vertex:P0,skinnormal_vertex:L0,specularmap_fragment:D0,specularmap_pars_fragment:U0,tonemapping_fragment:N0,tonemapping_pars_fragment:O0,transmission_fragment:F0,transmission_pars_fragment:B0,uv_pars_fragment:z0,uv_pars_vertex:k0,uv_vertex:H0,worldpos_vertex:V0,background_vert:G0,background_frag:W0,backgroundCube_vert:X0,backgroundCube_frag:q0,cube_vert:Y0,cube_frag:$0,depth_vert:Z0,depth_frag:J0,distanceRGBA_vert:K0,distanceRGBA_frag:j0,equirect_vert:Q0,equirect_frag:tx,linedashed_vert:ex,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:sx,meshlambert_vert:rx,meshlambert_frag:ax,meshmatcap_vert:ox,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:hx,meshphong_vert:ux,meshphong_frag:fx,meshphysical_vert:dx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:xx,points_frag:_x,shadow_vert:vx,shadow_frag:yx,sprite_vert:Mx,sprite_frag:bx},ct={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Kn={basic:{uniforms:tn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:tn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:tn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:tn([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:tn([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:tn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:tn([ct.points,ct.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:tn([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:tn([ct.common,ct.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:tn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:tn([ct.sprite,ct.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:tn([ct.common,ct.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:tn([ct.lights,ct.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Kn.physical={uniforms:tn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var _o={r:0,b:0,g:0},Cs=new En,Sx=new Zt;function Ex(i,t,e,n,s,r,a){let o=new Ot(0),l=r===!0?0:1,h,c,u=null,f=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function x(E){let S=!1,M=g(E);M===null?d(o,l):M&&M.isColor&&(d(M,1),S=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){let M=g(S);M&&(M.isCubeTexture||M.mapping===rl)?(c===void 0&&(c=new re(new wn(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Br(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(O,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Cs.copy(S.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(Cs)),c.material.toneMapped=le.getTransfer(M.colorSpace)!==ge,(u!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new re(new je(2,2),new Tn({name:"BackgroundMaterial",uniforms:Br(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=le.getTransfer(M.colorSpace)!==ge,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function d(E,S){E.getRGB(_o,fd(i)),n.buffers.color.setClear(_o.r,_o.g,_o.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:x,addToRenderList:m}}function wx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,R,X,V,J){let it=!1,q=u(V,X,R);r!==q&&(r=q,h(r.object)),it=p(y,V,X,J),it&&g(y,V,X,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(it||a)&&(a=!1,M(y,R,X,V),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function h(y){return i.bindVertexArray(y)}function c(y){return i.deleteVertexArray(y)}function u(y,R,X){let V=X.wireframe===!0,J=n[y.id];J===void 0&&(J={},n[y.id]=J);let it=J[R.id];it===void 0&&(it={},J[R.id]=it);let q=it[V];return q===void 0&&(q=f(l()),it[V]=q),q}function f(y){let R=[],X=[],V=[];for(let J=0;J<e;J++)R[J]=0,X[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:X,attributeDivisors:V,object:y,attributes:{},index:null}}function p(y,R,X,V){let J=r.attributes,it=R.attributes,q=0,ot=X.getAttributes();for(let W in ot)if(ot[W].location>=0){let _t=J[W],Ct=it[W];if(Ct===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Ct=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Ct=y.instanceColor)),_t===void 0||_t.attribute!==Ct||Ct&&_t.data!==Ct.data)return!0;q++}return r.attributesNum!==q||r.index!==V}function g(y,R,X,V){let J={},it=R.attributes,q=0,ot=X.getAttributes();for(let W in ot)if(ot[W].location>=0){let _t=it[W];_t===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor));let Ct={};Ct.attribute=_t,_t&&_t.data&&(Ct.data=_t.data),J[W]=Ct,q++}r.attributes=J,r.attributesNum=q,r.index=V}function x(){let y=r.newAttributes;for(let R=0,X=y.length;R<X;R++)y[R]=0}function m(y){d(y,0)}function d(y,R){let X=r.newAttributes,V=r.enabledAttributes,J=r.attributeDivisors;X[y]=1,V[y]===0&&(i.enableVertexAttribArray(y),V[y]=1),J[y]!==R&&(i.vertexAttribDivisor(y,R),J[y]=R)}function E(){let y=r.newAttributes,R=r.enabledAttributes;for(let X=0,V=R.length;X<V;X++)R[X]!==y[X]&&(i.disableVertexAttribArray(X),R[X]=0)}function S(y,R,X,V,J,it,q){q===!0?i.vertexAttribIPointer(y,R,X,J,it):i.vertexAttribPointer(y,R,X,V,J,it)}function M(y,R,X,V){x();let J=V.attributes,it=X.getAttributes(),q=R.defaultAttributeValues;for(let ot in it){let W=it[ot];if(W.location>=0){let ut=J[ot];if(ut===void 0&&(ot==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),ot==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),ut!==void 0){let _t=ut.normalized,Ct=ut.itemSize,Jt=t.get(ut);if(Jt===void 0)continue;let _e=Jt.buffer,K=Jt.type,lt=Jt.bytesPerElement,Tt=K===i.INT||K===i.UNSIGNED_INT||ut.gpuType===Fh;if(ut.isInterleavedBufferAttribute){let ft=ut.data,Nt=ft.stride,Ht=ut.offset;if(ft.isInstancedInterleavedBuffer){for(let Kt=0;Kt<W.locationSize;Kt++)d(W.location+Kt,ft.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Kt=0;Kt<W.locationSize;Kt++)m(W.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Kt=0;Kt<W.locationSize;Kt++)S(W.location+Kt,Ct/W.locationSize,K,_t,Nt*lt,(Ht+Ct/W.locationSize*Kt)*lt,Tt)}else{if(ut.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)d(W.location+ft,ut.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ft=0;ft<W.locationSize;ft++)m(W.location+ft);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let ft=0;ft<W.locationSize;ft++)S(W.location+ft,Ct/W.locationSize,K,_t,Ct*lt,Ct/W.locationSize*ft*lt,Tt)}}else if(q!==void 0){let _t=q[ot];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(W.location,_t);break;case 3:i.vertexAttrib3fv(W.location,_t);break;case 4:i.vertexAttrib4fv(W.location,_t);break;default:i.vertexAttrib1fv(W.location,_t)}}}}E()}function O(){U();for(let y in n){let R=n[y];for(let X in R){let V=R[X];for(let J in V)c(V[J].object),delete V[J];delete R[X]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let X in R){let V=R[X];for(let J in V)c(V[J].object),delete V[J];delete R[X]}delete n[y.id]}function A(y){for(let R in n){let X=n[R];if(X[y.id]===void 0)continue;let V=X[y.id];for(let J in V)c(V[J].object),delete V[J];delete X[y.id]}}function U(){b(),a=!0,r!==s&&(r=s,h(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Tx(i,t,e){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function a(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function o(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let p=0;for(let g=0;g<u;g++)p+=c[g];e.update(p,n,1)}function l(h,c,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)a(h[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,h,0,c,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=c[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ax(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let U=A===Ia&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==wi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ti&&!U)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:O,maxSamples:T}}function Rx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Hn,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?c(null):h();else{let E=r?0:n,S=E*4,M=d.clippingState||null;l.value=M,M=c(g,f,S,p);for(let O=0;O!==S;++O)M[O]=e[O];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,M=p;S!==x;++S,M+=4)a.copy(u[S]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Cx(i){let t=new WeakMap;function e(a,o){return o===wc?a.mapping=Ur:o===Tc&&(a.mapping=Nr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===wc||o===Tc)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let h=new oh(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ho=class extends zo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ar=4,gf=[.125,.215,.35,.446,.526,.582],Ds=20,lc=new Ho,xf=new Ot,cc=null,hc=0,uc=0,fc=!1,Ps=(1+Math.sqrt(5))/2,Mr=1/Ps,_f=[new C(-Ps,Mr,0),new C(Ps,Mr,0),new C(-Mr,0,Ps),new C(Mr,0,Ps),new C(0,Ps,-Mr),new C(0,Ps,Mr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Vo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cc,hc,uc),this._renderer.xr.enabled=fc,t.scissorTest=!1,vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ur||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Ia,format:Vn,colorSpace:Vr,depthBuffer:!1},s=vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(r)),this._blurMaterial=Px(r,t,e)}return s}_compileMaterial(t){let e=new re(this._lodPlanes[0],t);this._renderer.compile(e,lc)}_sceneToCubeUV(t,e,n,s){let o=new en(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(xf),c.toneMapping=es,c.autoClear=!1;let p=new Be({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new re(new wn,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(xf),x=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(h[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,h[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,h[d]));let S=this._cubeSize;vo(s,E*S,d>2?S:0,S,S),c.setRenderTarget(s),x&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ur||t.mapping===Nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;vo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,lc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_f[(s-r-1)%_f.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new re(this._lodPlanes[s],h),f=h.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ds-1),x=r/g,m=isFinite(r)?1+Math.floor(c*x):Ds;m>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);let d=[],E=0;for(let A=0;A<Ds;++A){let U=A/x,b=Math.exp(-U*U/2);d.push(b),A===0?E+=b:A<m&&(E+=2*b)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let M=this._sizeLods[s],O=3*M*(s>S-Ar?s-S+Ar:0),T=4*(this._cubeSize-M);vo(e,O,T,3*M,2*M),l.setRenderTarget(e),l.render(u,lc)}};function Ix(i){let t=[],e=[],n=[],s=i,r=i-Ar+1+gf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ar?l=gf[a-i+Ar-1]:a===0&&(l=0),n.push(l);let h=1/(o-2),c=-h,u=1+h,f=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,x=3,m=2,d=1,E=new Float32Array(x*g*p),S=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let T=0;T<p;T++){let A=T%3*2/3-1,U=T>2?0:-1,b=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];E.set(b,x*g*T),S.set(f,m*g*T);let y=[T,T,T,T,T,T];M.set(y,d*g*T)}let O=new ze;O.setAttribute("position",new Ie(E,x)),O.setAttribute("uv",new Ie(S,m)),O.setAttribute("faceIndex",new Ie(M,d)),t.push(O),s>Ar&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vf(i,t,e){let n=new Ti(i,t,e);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Px(i,t,e){let n=new Float32Array(Ds),s=new C(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function yf(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Mf(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Xh(){return`

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
	`}function Lx(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,h=l===wc||l===Tc,c=l===Ur||l===Nr;if(h||c){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Vo(i)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return h&&p&&p.height>0||c&&p&&s(p)?(e===null&&(e=new Vo(i)),u=h?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function r(o){let l=o.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Dx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&va("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ux(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function h(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let E=p.array;x=p.version;for(let S=0,M=E.length;S<M;S+=3){let O=E[S+0],T=E[S+1],A=E[S+2];f.push(O,T,T,A,A,O)}}else if(g!==void 0){let E=g.array;x=g.version;for(let S=0,M=E.length/3-1;S<M;S+=3){let O=S+0,T=S+1,A=S+2;f.push(O,T,T,A,A,O)}}else return;let m=new(hd(f)?Bo:Fo)(f,1);m.version=x;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function c(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Nx(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function h(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function c(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)h(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*x[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Ox(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fx(i,t,e){let n=new WeakMap,s=new Le;function r(a,o,l){let h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0,f=n.get(o);if(f===void 0||f.count!==u){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let M=o.attributes.position.count*S,O=1;M>t.maxTextureSize&&(O=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*O*4*u),A=new Oo(T,M,O,u);A.type=ti,A.needsUpdate=!0;let U=S*4;for(let y=0;y<u;y++){let R=m[y],X=d[y],V=E[y],J=M*O*4*y;for(let it=0;it<R.count;it++){let q=it*U;p===!0&&(s.fromBufferAttribute(R,it),T[J+q+0]=s.x,T[J+q+1]=s.y,T[J+q+2]=s.z,T[J+q+3]=0),g===!0&&(s.fromBufferAttribute(X,it),T[J+q+4]=s.x,T[J+q+5]=s.y,T[J+q+6]=s.z,T[J+q+7]=0),x===!0&&(s.fromBufferAttribute(V,it),T[J+q+8]=s.x,T[J+q+9]=s.y,T[J+q+10]=s.z,T[J+q+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new zt(M,O)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<h.length;x++)p+=h[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Bx(i,t,e,n){let s=new WeakMap;function r(l){let h=n.render.frame,c=l.geometry,u=t.get(l,c);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var Go=class extends sn{constructor(t,e,n,s,r,a,o,l,h,c=Cr){if(c!==Cr&&c!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Cr&&(n=Os),n===void 0&&c===Fr&&(n=Or),super(null,s,r,a,o,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},pd=new sn,bf=new Go(1,1),md=new Oo,gd=new rh,xd=new ko,Sf=[],Ef=[],wf=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function Gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Sf[s];if(r===void 0&&(r=new Float32Array(s),Sf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ol(i,t){let e=Ef[t];e===void 0&&(e=new Int32Array(t),Ef[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function Gx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Af.set(n),i.uniformMatrix2fv(this.addr,!1,Af),Ge(e,n)}}function Wx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Tf.set(n),i.uniformMatrix3fv(this.addr,!1,Tf),Ge(e,n)}}function Xx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;wf.set(n),i.uniformMatrix4fv(this.addr,!1,wf),Ge(e,n)}}function qx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function $x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function Zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function Jx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function Qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function t_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bf.compareFunction=cd,r=bf):r=pd,e.setTexture2D(t||r,s)}function e_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gd,s)}function n_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xd,s)}function i_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||md,s)}function s_(i){switch(i){case 5126:return zx;case 35664:return kx;case 35665:return Hx;case 35666:return Vx;case 35674:return Gx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return qx;case 35667:case 35671:return Yx;case 35668:case 35672:return $x;case 35669:case 35673:return Zx;case 5125:return Jx;case 36294:return Kx;case 36295:return jx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}function r_(i,t){i.uniform1fv(this.addr,t)}function a_(i,t){let e=Gr(t,this.size,2);i.uniform2fv(this.addr,e)}function o_(i,t){let e=Gr(t,this.size,3);i.uniform3fv(this.addr,e)}function l_(i,t){let e=Gr(t,this.size,4);i.uniform4fv(this.addr,e)}function c_(i,t){let e=Gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function h_(i,t){let e=Gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function u_(i,t){let e=Gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function f_(i,t){i.uniform1iv(this.addr,t)}function d_(i,t){i.uniform2iv(this.addr,t)}function p_(i,t){i.uniform3iv(this.addr,t)}function m_(i,t){i.uniform4iv(this.addr,t)}function g_(i,t){i.uniform1uiv(this.addr,t)}function x_(i,t){i.uniform2uiv(this.addr,t)}function __(i,t){i.uniform3uiv(this.addr,t)}function v_(i,t){i.uniform4uiv(this.addr,t)}function y_(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||pd,r[a])}function M_(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gd,r[a])}function b_(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||xd,r[a])}function S_(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||md,r[a])}function E_(i){switch(i){case 5126:return r_;case 35664:return a_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return f_;case 35667:case 35671:return d_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return x_;case 36295:return __;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return S_}}var lh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=s_(e.type)}},ch=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E_(e.type)}},hh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},dc=/(\w+)(\])?(\[|\.)?/g;function Rf(i,t){i.seq.push(t),i.map[t.id]=t}function w_(i,t,e){let n=i.name,s=n.length;for(dc.lastIndex=0;;){let r=dc.exec(n),a=dc.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Rf(e,h===void 0?new lh(o,i,t):new ch(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new hh(o),Rf(e,u)),e=u}}}var Pr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);w_(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Cf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var T_=37297,A_=0;function R_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var If=new Xt;function C_(i){le._getMatrix(If,le.workingColorSpace,i);let t=`mat3( ${If.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case al:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+R_(i.getShaderSource(t),a)}else return s}function I_(i,t){let e=C_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function P_(i,t){let e;switch(t){case nm:e="Linear";break;case im:e="Reinhard";break;case sm:e="Cineon";break;case rm:e="ACESFilmic";break;case om:e="AgX";break;case lm:e="Neutral";break;case am:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yo=new C;function L_(){le.getLuminanceCoefficients(yo);let i=yo.x.toFixed(4),t=yo.y.toFixed(4),e=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function U_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function N_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ya(i){return i!==""}function Lf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Df(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var O_=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(i){return i.replace(O_,B_)}var F_=new Map;function B_(i,t){let e=Yt[t];if(e===void 0){let n=F_.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uh(e)}var z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(i){return i.replace(z_,k_)}function k_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function H_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Np?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function V_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ur:case Nr:t="ENVMAP_TYPE_CUBE";break;case rl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Nr:t="ENVMAP_MODE_REFRACTION";break}return t}function W_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oh:t="ENVMAP_BLENDING_MULTIPLY";break;case tm:t="ENVMAP_BLENDING_MIX";break;case em:t="ENVMAP_BLENDING_ADD";break}return t}function X_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function q_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=H_(e),h=V_(e),c=G_(e),u=W_(e),f=X_(e),p=D_(e),g=U_(r),x=s.createProgram(),m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ya).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ya).join(`
`),d.length>0&&(d+=`
`)):(m=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),d=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==es?"#define TONE_MAPPING":"",e.toneMapping!==es?Yt.tonemapping_pars_fragment:"",e.toneMapping!==es?P_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,I_("linearToOutputTexel",e.outputColorSpace),L_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ya).join(`
`)),a=uh(a),a=Lf(a,e),a=Df(a,e),o=uh(o),o=Lf(o,e),o=Df(o,e),a=Uf(a),o=Uf(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=E+m+a,M=E+d+o,O=Cf(s,s.VERTEX_SHADER,S),T=Cf(s,s.FRAGMENT_SHADER,M);s.attachShader(x,O),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(R){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(O).trim(),J=s.getShaderInfoLog(T).trim(),it=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,O,T);else{let ot=Pf(s,O,"vertex"),W=Pf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+ot+`
`+W)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||J==="")&&(q=!1);q&&(R.diagnostics={runnable:it,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:J,prefix:d}})}s.deleteShader(O),s.deleteShader(T),U=new Pr(s,x),b=N_(s,x)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,T_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=T,this}var Y_=0,fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new dh(t),e.set(t,n)),n}},dh=class{constructor(t){this.id=Y_++,this.code=t,this.usedTimes=0}};function $_(i,t,e,n,s,r,a){let o=new Ta,l=new fh,h=new Set,c=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return h.add(b),b===0?"uv":`uv${b}`}function m(b,y,R,X,V){let J=X.fog,it=V.geometry,q=b.isMeshStandardMaterial?X.environment:null,ot=(b.isMeshStandardMaterial?e:t).get(b.envMap||q),W=ot&&ot.mapping===rl?ot.image.height:null,ut=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let _t=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Ct=_t!==void 0?_t.length:0,Jt=0;it.morphAttributes.position!==void 0&&(Jt=1),it.morphAttributes.normal!==void 0&&(Jt=2),it.morphAttributes.color!==void 0&&(Jt=3);let _e,K,lt,Tt;if(ut){let pe=Kn[ut];_e=pe.vertexShader,K=pe.fragmentShader}else _e=b.vertexShader,K=b.fragmentShader,l.update(b),lt=l.getVertexShaderID(b),Tt=l.getFragmentShaderID(b);let ft=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Ht=V.isInstancedMesh===!0,Kt=V.isBatchedMesh===!0,Ce=!!b.map,ae=!!b.matcap,Ne=!!ot,N=!!b.aoMap,yn=!!b.lightMap,ne=!!b.bumpMap,ie=!!b.normalMap,Dt=!!b.displacementMap,be=!!b.emissiveMap,Pt=!!b.metalnessMap,w=!!b.roughnessMap,_=b.anisotropy>0,F=b.clearcoat>0,Q=b.dispersion>0,et=b.iridescence>0,$=b.sheen>0,At=b.transmission>0,dt=_&&!!b.anisotropyMap,vt=F&&!!b.clearcoatMap,oe=F&&!!b.clearcoatNormalMap,rt=F&&!!b.clearcoatRoughnessMap,yt=et&&!!b.iridescenceMap,Ut=et&&!!b.iridescenceThicknessMap,Ft=$&&!!b.sheenColorMap,Mt=$&&!!b.sheenRoughnessMap,se=!!b.specularMap,qt=!!b.specularColorMap,ve=!!b.specularIntensityMap,I=At&&!!b.transmissionMap,ht=At&&!!b.thicknessMap,G=!!b.gradientMap,tt=!!b.alphaMap,xt=b.alphaTest>0,pt=!!b.alphaHash,Gt=!!b.extensions,Pe=es;b.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Pe=i.toneMapping);let $e={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:_e,fragmentShader:K,defines:b.defines,customVertexShaderID:lt,customFragmentShaderID:Tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Kt,batchingColor:Kt&&V._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&V.instanceColor!==null,instancingMorph:Ht&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Vr,alphaToCoverage:!!b.alphaToCoverage,map:Ce,matcap:ae,envMap:Ne,envMapMode:Ne&&ot.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:yn,bumpMap:ne,normalMap:ie,displacementMap:f&&Dt,emissiveMap:be,normalMapObjectSpace:ie&&b.normalMapType===fm,normalMapTangentSpace:ie&&b.normalMapType===ld,metalnessMap:Pt,roughnessMap:w,anisotropy:_,anisotropyMap:dt,clearcoat:F,clearcoatMap:vt,clearcoatNormalMap:oe,clearcoatRoughnessMap:rt,dispersion:Q,iridescence:et,iridescenceMap:yt,iridescenceThicknessMap:Ut,sheen:$,sheenColorMap:Ft,sheenRoughnessMap:Mt,specularMap:se,specularColorMap:qt,specularIntensityMap:ve,transmission:At,transmissionMap:I,thicknessMap:ht,gradientMap:G,opaque:b.transparent===!1&&b.blending===Rr&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:xt,alphaHash:pt,combine:b.combine,mapUv:Ce&&x(b.map.channel),aoMapUv:N&&x(b.aoMap.channel),lightMapUv:yn&&x(b.lightMap.channel),bumpMapUv:ne&&x(b.bumpMap.channel),normalMapUv:ie&&x(b.normalMap.channel),displacementMapUv:Dt&&x(b.displacementMap.channel),emissiveMapUv:be&&x(b.emissiveMap.channel),metalnessMapUv:Pt&&x(b.metalnessMap.channel),roughnessMapUv:w&&x(b.roughnessMap.channel),anisotropyMapUv:dt&&x(b.anisotropyMap.channel),clearcoatMapUv:vt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(b.sheenRoughnessMap.channel),specularMapUv:se&&x(b.specularMap.channel),specularColorMapUv:qt&&x(b.specularColorMap.channel),specularIntensityMapUv:ve&&x(b.specularIntensityMap.channel),transmissionMapUv:I&&x(b.transmissionMap.channel),thicknessMapUv:ht&&x(b.thicknessMap.channel),alphaMapUv:tt&&x(b.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(ie||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!it.attributes.uv&&(Ce||tt),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:V.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Jt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ce&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===ge,decodeVideoTextureEmissive:be&&b.emissiveMap.isVideoTexture===!0&&le.getTransfer(b.emissiveMap.colorSpace)===ge,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===hn,flipSided:b.side===Ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Gt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&b.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=h.has(1),$e.vertexUv2s=h.has(2),$e.vertexUv3s=h.has(3),h.clear(),$e}function d(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)y.push(R),y.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(E(y,b),S(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function E(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){let y=g[b.type],R;if(y){let X=Kn[y];R=Bm.clone(X.uniforms)}else R=b.uniforms;return R}function O(b,y){let R;for(let X=0,V=c.length;X<V;X++){let J=c[X];if(J.cacheKey===y){R=J,++R.usedTimes;break}}return R===void 0&&(R=new q_(i,y,b,r),c.push(R)),R}function T(b){if(--b.usedTimes===0){let y=c.indexOf(b);c[y]=c[c.length-1],c.pop(),b.destroy()}}function A(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:O,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:U}}function Z_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function J_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Of(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ff(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,x,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function o(u,f,p,g,x,m){let d=a(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,x,m){let d=a(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function h(u,f){e.length>1&&e.sort(u||J_),n.length>1&&n.sort(f||Of),s.length>1&&s.sort(f||Of)}function c(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:c,sort:h}}function K_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ff,i.set(n,[a])):s>=r.length?(a=new Ff,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function j_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ot};break;case"SpotLight":e={position:new C,direction:new C,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Q_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var tv=0;function ev(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function nv(i){let t=new j_,e=Q_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new C);let s=new C,r=new Zt,a=new Zt;function o(h){let c=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,E=0,S=0,M=0,O=0,T=0,A=0;h.sort(ev);for(let b=0,y=h.length;b<y;b++){let R=h[b],X=R.color,V=R.intensity,J=R.distance,it=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=X.r*V,u+=X.g*V,f+=X.b*V;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],V);A++}else if(R.isDirectionalLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ot=R.shadow,W=e.get(R);W.shadowIntensity=ot.intensity,W.shadowBias=ot.bias,W.shadowNormalBias=ot.normalBias,W.shadowRadius=ot.radius,W.shadowMapSize=ot.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=it,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=q,p++}else if(R.isSpotLight){let q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(X).multiplyScalar(V),q.distance=J,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[x]=q;let ot=R.shadow;if(R.map&&(n.spotLightMap[O]=R.map,O++,ot.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[x]=ot.matrix,R.castShadow){let W=e.get(R);W.shadowIntensity=ot.intensity,W.shadowBias=ot.bias,W.shadowNormalBias=ot.normalBias,W.shadowRadius=ot.radius,W.shadowMapSize=ot.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=it,M++}x++}else if(R.isRectAreaLight){let q=t.get(R);q.color.copy(X).multiplyScalar(V),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=q,m++}else if(R.isPointLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let ot=R.shadow,W=e.get(R);W.shadowIntensity=ot.intensity,W.shadowBias=ot.bias,W.shadowNormalBias=ot.normalBias,W.shadowRadius=ot.radius,W.shadowMapSize=ot.mapSize,W.shadowCameraNear=ot.camera.near,W.shadowCameraFar=ot.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=it,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=q,g++}else if(R.isHemisphereLight){let q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(V),q.groundColor.copy(R.groundColor).multiplyScalar(V),n.hemi[d]=q,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==E||U.numPointShadows!==S||U.numSpotShadows!==M||U.numSpotMaps!==O||U.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+O-T,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=E,U.numPointShadows=S,U.numSpotShadows=M,U.numSpotMaps=O,U.numLightProbes=A,n.version=tv++)}function l(h,c){let u=0,f=0,p=0,g=0,x=0,m=c.matrixWorldInverse;for(let d=0,E=h.length;d<E;d++){let S=h[d];if(S.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(S.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Bf(i){let t=new nv(i),e=[],n=[];function s(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function a(c){n.push(c)}function o(){t.setup(e)}function l(c){t.setupView(e,c)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function iv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Bf(i),t.set(s,[o])):r>=a.length?(o=new Bf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ph=class extends Ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mh=class extends Ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
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
}`;function av(i,t,e){let n=new Aa,s=new zt,r=new zt,a=new Le,o=new ph({depthPacking:um}),l=new mh,h={},c=e.maxTextureSize,u={[is]:Ke,[Ke]:is,[hn]:hn},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:sv,fragmentShader:rv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new re(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let d=this.type;this.render=function(T,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),X=i.state;X.setBlending(ts),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let V=d!==bi&&this.type===bi,J=d===bi&&this.type!==bi;for(let it=0,q=T.length;it<q;it++){let ot=T[it],W=ot.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ut=W.getFrameExtents();if(s.multiply(ut),r.copy(W.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ut.x),s.x=r.x*ut.x,W.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ut.y),s.y=r.y*ut.y,W.mapSize.y=r.y)),W.map===null||V===!0||J===!0){let Ct=this.type!==bi?{minFilter:nn,magFilter:nn}:{};W.map!==null&&W.map.dispose(),W.map=new Ti(s.x,s.y,Ct),W.map.texture.name=ot.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let _t=W.getViewportCount();for(let Ct=0;Ct<_t;Ct++){let Jt=W.getViewport(Ct);a.set(r.x*Jt.x,r.y*Jt.y,r.x*Jt.z,r.y*Jt.w),X.viewport(a),W.updateMatrices(ot,Ct),n=W.getFrustum(),M(A,U,W.camera,ot,this.type)}W.isPointLightShadow!==!0&&this.type===bi&&E(W,U),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,R)};function E(T,A){let U=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,U,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,U,p,x,null)}function S(T,A,U,b){let y=null,R=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)y=R;else if(y=U.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let X=y.uuid,V=A.uuid,J=h[X];J===void 0&&(J={},h[X]=J);let it=J[V];it===void 0&&(it=y.clone(),J[V]=it,A.addEventListener("dispose",O)),y=it}if(y.visible=A.visible,y.wireframe=A.wireframe,b===bi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let X=i.properties.get(y);X.light=U}return y}function M(T,A,U,b,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===bi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let V=t.update(T),J=T.material;if(Array.isArray(J)){let it=V.groups;for(let q=0,ot=it.length;q<ot;q++){let W=it[q],ut=J[W.materialIndex];if(ut&&ut.visible){let _t=S(T,ut,b,y);T.onBeforeShadow(i,T,A,U,V,_t,W),i.renderBufferDirect(U,null,V,_t,T,W),T.onAfterShadow(i,T,A,U,V,_t,W)}}}else if(J.visible){let it=S(T,J,b,y);T.onBeforeShadow(i,T,A,U,V,it,null),i.renderBufferDirect(U,null,V,it,T,null),T.onAfterShadow(i,T,A,U,V,it,null)}}let X=T.children;for(let V=0,J=X.length;V<J;V++)M(X[V],A,U,b,y)}function O(T){T.target.removeEventListener("dispose",O);for(let U in h){let b=h[U],y=T.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var ov={[_c]:vc,[yc]:Sc,[Mc]:Ec,[Dr]:bc,[vc]:_c,[Sc]:yc,[Ec]:Mc,[bc]:Dr};function lv(i,t){function e(){let I=!1,ht=new Le,G=null,tt=new Le(0,0,0,0);return{setMask:function(xt){G!==xt&&!I&&(i.colorMask(xt,xt,xt,xt),G=xt)},setLocked:function(xt){I=xt},setClear:function(xt,pt,Gt,Pe,$e){$e===!0&&(xt*=Pe,pt*=Pe,Gt*=Pe),ht.set(xt,pt,Gt,Pe),tt.equals(ht)===!1&&(i.clearColor(xt,pt,Gt,Pe),tt.copy(ht))},reset:function(){I=!1,G=null,tt.set(-1,0,0,0)}}}function n(){let I=!1,ht=!1,G=null,tt=null,xt=null;return{setReversed:function(pt){if(ht!==pt){let Gt=t.get("EXT_clip_control");ht?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let Pe=xt;xt=null,this.setClear(Pe)}ht=pt},getReversed:function(){return ht},setTest:function(pt){pt?ft(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(pt){G!==pt&&!I&&(i.depthMask(pt),G=pt)},setFunc:function(pt){if(ht&&(pt=ov[pt]),tt!==pt){switch(pt){case _c:i.depthFunc(i.NEVER);break;case vc:i.depthFunc(i.ALWAYS);break;case yc:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Mc:i.depthFunc(i.EQUAL);break;case bc:i.depthFunc(i.GEQUAL);break;case Sc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=pt}},setLocked:function(pt){I=pt},setClear:function(pt){xt!==pt&&(ht&&(pt=1-pt),i.clearDepth(pt),xt=pt)},reset:function(){I=!1,G=null,tt=null,xt=null,ht=!1}}}function s(){let I=!1,ht=null,G=null,tt=null,xt=null,pt=null,Gt=null,Pe=null,$e=null;return{setTest:function(pe){I||(pe?ft(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(pe){ht!==pe&&!I&&(i.stencilMask(pe),ht=pe)},setFunc:function(pe,On,mi){(G!==pe||tt!==On||xt!==mi)&&(i.stencilFunc(pe,On,mi),G=pe,tt=On,xt=mi)},setOp:function(pe,On,mi){(pt!==pe||Gt!==On||Pe!==mi)&&(i.stencilOp(pe,On,mi),pt=pe,Gt=On,Pe=mi)},setLocked:function(pe){I=pe},setClear:function(pe){$e!==pe&&(i.clearStencil(pe),$e=pe)},reset:function(){I=!1,ht=null,G=null,tt=null,xt=null,pt=null,Gt=null,Pe=null,$e=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,h=new WeakMap,c={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,E=null,S=null,M=null,O=null,T=null,A=new Ot(0,0,0),U=0,b=!1,y=null,R=null,X=null,V=null,J=null,it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ot=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=ot>=1):W.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=ot>=2);let ut=null,_t={},Ct=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),_e=new Le().fromArray(Ct),K=new Le().fromArray(Jt);function lt(I,ht,G,tt){let xt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(I,pt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<G;Gt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ht+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return pt}let Tt={};Tt[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),a.setFunc(Dr),ne(!1),ie(Hu),ft(i.CULL_FACE),N(ts);function ft(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function Nt(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function Ht(I,ht){return u[I]!==ht?(i.bindFramebuffer(I,ht),u[I]=ht,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Kt(I,ht){let G=p,tt=!1;if(I){G=f.get(ht),G===void 0&&(G=[],f.set(ht,G));let xt=I.textures;if(G.length!==xt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Gt=xt.length;pt<Gt;pt++)G[pt]=i.COLOR_ATTACHMENT0+pt;G.length=xt.length,tt=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,tt=!0);tt&&i.drawBuffers(G)}function Ce(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let ae={[Ls]:i.FUNC_ADD,[Fp]:i.FUNC_SUBTRACT,[Bp]:i.FUNC_REVERSE_SUBTRACT};ae[zp]=i.MIN,ae[kp]=i.MAX;let Ne={[Hp]:i.ZERO,[Vp]:i.ONE,[Gp]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[Zp]:i.SRC_ALPHA_SATURATE,[Yp]:i.DST_COLOR,[Xp]:i.DST_ALPHA,[Wp]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[$p]:i.ONE_MINUS_DST_COLOR,[qp]:i.ONE_MINUS_DST_ALPHA,[Jp]:i.CONSTANT_COLOR,[Kp]:i.ONE_MINUS_CONSTANT_COLOR,[jp]:i.CONSTANT_ALPHA,[Qp]:i.ONE_MINUS_CONSTANT_ALPHA};function N(I,ht,G,tt,xt,pt,Gt,Pe,$e,pe){if(I===ts){x===!0&&(Nt(i.BLEND),x=!1);return}if(x===!1&&(ft(i.BLEND),x=!0),I!==Op){if(I!==m||pe!==b){if((d!==Ls||M!==Ls)&&(i.blendEquation(i.FUNC_ADD),d=Ls,M=Ls),pe)switch(I){case Rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lr:i.blendFunc(i.ONE,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,S=null,O=null,T=null,A.set(0,0,0),U=0,m=I,b=pe}return}xt=xt||ht,pt=pt||G,Gt=Gt||tt,(ht!==d||xt!==M)&&(i.blendEquationSeparate(ae[ht],ae[xt]),d=ht,M=xt),(G!==E||tt!==S||pt!==O||Gt!==T)&&(i.blendFuncSeparate(Ne[G],Ne[tt],Ne[pt],Ne[Gt]),E=G,S=tt,O=pt,T=Gt),(Pe.equals(A)===!1||$e!==U)&&(i.blendColor(Pe.r,Pe.g,Pe.b,$e),A.copy(Pe),U=$e),m=I,b=!1}function yn(I,ht){I.side===hn?Nt(i.CULL_FACE):ft(i.CULL_FACE);let G=I.side===Ke;ht&&(G=!G),ne(G),I.blending===Rr&&I.transparent===!1?N(ts):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let tt=I.stencilWrite;o.setTest(tt),tt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),be(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function ie(I){I!==Dp?(ft(i.CULL_FACE),I!==R&&(I===Hu?i.cullFace(i.BACK):I===Up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),R=I}function Dt(I){I!==X&&(q&&i.lineWidth(I),X=I)}function be(I,ht,G){I?(ft(i.POLYGON_OFFSET_FILL),(V!==ht||J!==G)&&(i.polygonOffset(ht,G),V=ht,J=G)):Nt(i.POLYGON_OFFSET_FILL)}function Pt(I){I?ft(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function w(I){I===void 0&&(I=i.TEXTURE0+it-1),ut!==I&&(i.activeTexture(I),ut=I)}function _(I,ht,G){G===void 0&&(ut===null?G=i.TEXTURE0+it-1:G=ut);let tt=_t[G];tt===void 0&&(tt={type:void 0,texture:void 0},_t[G]=tt),(tt.type!==I||tt.texture!==ht)&&(ut!==G&&(i.activeTexture(G),ut=G),i.bindTexture(I,ht||Tt[I]),tt.type=I,tt.texture=ht)}function F(){let I=_t[ut];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(I){_e.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),_e.copy(I))}function Mt(I){K.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function se(I,ht){let G=h.get(ht);G===void 0&&(G=new WeakMap,h.set(ht,G));let tt=G.get(I);tt===void 0&&(tt=i.getUniformBlockIndex(ht,I.name),G.set(I,tt))}function qt(I,ht){let tt=h.get(ht).get(I);l.get(ht)!==tt&&(i.uniformBlockBinding(ht,tt,I.__bindingPointIndex),l.set(ht,tt))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ut=null,_t={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,E=null,S=null,M=null,O=null,T=null,A=new Ot(0,0,0),U=0,b=!1,y=null,R=null,X=null,V=null,J=null,_e.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ft,disable:Nt,bindFramebuffer:Ht,drawBuffers:Kt,useProgram:Ce,setBlending:N,setMaterial:yn,setFlipSided:ne,setCullFace:ie,setLineWidth:Dt,setPolygonOffset:be,setScissorTest:Pt,activeTexture:w,bindTexture:_,unbindTexture:F,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:yt,texImage3D:Ut,updateUBOMapping:se,uniformBlockBinding:qt,texStorage2D:oe,texStorage3D:rt,texSubImage2D:$,texSubImage3D:At,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Ft,viewport:Mt,reset:ve}}function zf(i,t,e,n){let s=cv(n);switch(e){case nd:return i*t;case sd:return i*t;case rd:return i*t*2;case kh:return i*t/s.components*s.byteLength;case Hh:return i*t/s.components*s.byteLength;case ad:return i*t*2/s.components*s.byteLength;case Vh:return i*t*2/s.components*s.byteLength;case id:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case Gh:return i*t*4/s.components*s.byteLength;case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Io:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cc:case Pc:return Math.max(i,16)*Math.max(t,8)/4;case Rc:case Ic:return Math.max(i,8)*Math.max(t,8)/2;case Lc:case Dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lo:case Zc:case Jc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case od:case Kc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case jc:case Qc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cv(i){switch(i){case wi:case Qf:return{byteLength:1,components:1};case Sa:case td:case Ia:return{byteLength:2,components:1};case Bh:case zh:return{byteLength:2,components:4};case Os:case Fh:case ti:return{byteLength:4,components:1};case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function hv(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,c=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):Ea("canvas")}function x(w,_,F){let Q=1,et=Pt(w);if((et.width>F||et.height>F)&&(Q=F/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let $=Math.floor(Q*et.width),At=Math.floor(Q*et.height);u===void 0&&(u=g($,At));let dt=_?g($,At):u;return dt.width=$,dt.height=At,dt.getContext("2d").drawImage(w,0,0,$,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+$+"x"+At+")."),dt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,_,F,Q,et=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=_;if(_===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),_===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),_===i.RGBA){let At=et?al:le.getTransfer(Q);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=At===ge?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function M(w,_){let F;return w?_===null||_===Os||_===Or?F=i.DEPTH24_STENCIL8:_===ti?F=i.DEPTH32F_STENCIL8:_===Sa&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Os||_===Or?F=i.DEPTH_COMPONENT24:_===ti?F=i.DEPTH_COMPONENT32F:_===Sa&&(F=i.DEPTH_COMPONENT16),F}function O(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==nn&&w.minFilter!==Qn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function T(w){let _=w.target;_.removeEventListener("dispose",T),U(_),_.isVideoTexture&&c.delete(_)}function A(w){let _=w.target;_.removeEventListener("dispose",A),y(_)}function U(w){let _=n.get(w);if(_.__webglInit===void 0)return;let F=w.source,Q=f.get(F);if(Q){let et=Q[_.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(w),Object.keys(Q).length===0&&f.delete(F)}n.remove(w)}function b(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let F=w.source,Q=f.get(F);delete Q[_.__cacheKey],a.memory.textures--}function y(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let et=0;et<_.__webglFramebuffer[Q].length;et++)i.deleteFramebuffer(_.__webglFramebuffer[Q][et]);else i.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[Q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=w.textures;for(let Q=0,et=F.length;Q<et;Q++){let $=n.get(F[Q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(F[Q])}n.remove(w)}let R=0;function X(){R=0}function V(){let w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function J(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function it(w,_){let F=n.get(w);if(w.isVideoTexture&&Dt(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,w,_);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function q(w,_){let F=n.get(w);if(w.version>0&&F.__version!==w.version){K(F,w,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function ot(w,_){let F=n.get(w);if(w.version>0&&F.__version!==w.version){K(F,w,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function W(w,_){let F=n.get(w);if(w.version>0&&F.__version!==w.version){lt(F,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}let ut={[ba]:i.REPEAT,[Us]:i.CLAMP_TO_EDGE,[Ac]:i.MIRRORED_REPEAT},_t={[nn]:i.NEAREST,[cm]:i.NEAREST_MIPMAP_NEAREST,[Qa]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Bl]:i.LINEAR_MIPMAP_NEAREST,[Ns]:i.LINEAR_MIPMAP_LINEAR},Ct={[dm]:i.NEVER,[vm]:i.ALWAYS,[pm]:i.LESS,[cd]:i.LEQUAL,[mm]:i.EQUAL,[_m]:i.GEQUAL,[gm]:i.GREATER,[xm]:i.NOTEQUAL};function Jt(w,_){if(_.type===ti&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Qn||_.magFilter===Bl||_.magFilter===Qa||_.magFilter===Ns||_.minFilter===Qn||_.minFilter===Bl||_.minFilter===Qa||_.minFilter===Ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ut[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ut[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ut[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_t[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_t[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ct[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===nn||_.minFilter!==Qa&&_.minFilter!==Ns||_.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function _e(w,_){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",T));let Q=_.source,et=f.get(Q);et===void 0&&(et={},f.set(Q,et));let $=J(_);if($!==w.__cacheKey){et[$]===void 0&&(et[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),et[$].usedTimes++;let At=et[w.__cacheKey];At!==void 0&&(et[w.__cacheKey].usedTimes--,At.usedTimes===0&&b(_)),w.__cacheKey=$,w.__webglTexture=et[$].texture}return F}function K(w,_,F){let Q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=i.TEXTURE_3D);let et=_e(w,_),$=_.source;e.bindTexture(Q,w.__webglTexture,i.TEXTURE0+F);let At=n.get($);if($.version!==At.__version||et===!0){e.activeTexture(i.TEXTURE0+F);let dt=le.getPrimaries(le.workingColorSpace),vt=_.colorSpace===ji?null:le.getPrimaries(_.colorSpace),oe=_.colorSpace===ji||dt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let rt=x(_.image,!1,s.maxTextureSize);rt=be(_,rt);let yt=r.convert(_.format,_.colorSpace),Ut=r.convert(_.type),Ft=S(_.internalFormat,yt,Ut,_.colorSpace,_.isVideoTexture);Jt(Q,_);let Mt,se=_.mipmaps,qt=_.isVideoTexture!==!0,ve=At.__version===void 0||et===!0,I=$.dataReady,ht=O(_,rt);if(_.isDepthTexture)Ft=M(_.format===Fr,_.type),ve&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Ft,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,rt.width,rt.height,0,yt,Ut,null));else if(_.isDataTexture)if(se.length>0){qt&&ve&&e.texStorage2D(i.TEXTURE_2D,ht,Ft,se[0].width,se[0].height);for(let G=0,tt=se.length;G<tt;G++)Mt=se[G],qt?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,Mt.width,Mt.height,yt,Ut,Mt.data):e.texImage2D(i.TEXTURE_2D,G,Ft,Mt.width,Mt.height,0,yt,Ut,Mt.data);_.generateMipmaps=!1}else qt?(ve&&e.texStorage2D(i.TEXTURE_2D,ht,Ft,rt.width,rt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,yt,Ut,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,rt.width,rt.height,0,yt,Ut,rt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){qt&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ft,se[0].width,se[0].height,rt.depth);for(let G=0,tt=se.length;G<tt;G++)if(Mt=se[G],_.format!==Vn)if(yt!==null)if(qt){if(I)if(_.layerUpdates.size>0){let xt=zf(Mt.width,Mt.height,_.format,_.type);for(let pt of _.layerUpdates){let Gt=Mt.data.subarray(pt*xt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*xt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,pt,Mt.width,Mt.height,1,yt,Gt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Mt.width,Mt.height,rt.depth,yt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Ft,Mt.width,Mt.height,rt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Mt.width,Mt.height,rt.depth,yt,Ut,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Ft,Mt.width,Mt.height,rt.depth,0,yt,Ut,Mt.data)}else{qt&&ve&&e.texStorage2D(i.TEXTURE_2D,ht,Ft,se[0].width,se[0].height);for(let G=0,tt=se.length;G<tt;G++)Mt=se[G],_.format!==Vn?yt!==null?qt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Ft,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,Mt.width,Mt.height,yt,Ut,Mt.data):e.texImage2D(i.TEXTURE_2D,G,Ft,Mt.width,Mt.height,0,yt,Ut,Mt.data)}else if(_.isDataArrayTexture)if(qt){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ft,rt.width,rt.height,rt.depth),I)if(_.layerUpdates.size>0){let G=zf(rt.width,rt.height,_.format,_.type);for(let tt of _.layerUpdates){let xt=rt.data.subarray(tt*G/rt.data.BYTES_PER_ELEMENT,(tt+1)*G/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,yt,Ut,xt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,yt,Ut,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,rt.width,rt.height,rt.depth,0,yt,Ut,rt.data);else if(_.isData3DTexture)qt?(ve&&e.texStorage3D(i.TEXTURE_3D,ht,Ft,rt.width,rt.height,rt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,yt,Ut,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,rt.width,rt.height,rt.depth,0,yt,Ut,rt.data);else if(_.isFramebufferTexture){if(ve)if(qt)e.texStorage2D(i.TEXTURE_2D,ht,Ft,rt.width,rt.height);else{let G=rt.width,tt=rt.height;for(let xt=0;xt<ht;xt++)e.texImage2D(i.TEXTURE_2D,xt,Ft,G,tt,0,yt,Ut,null),G>>=1,tt>>=1}}else if(se.length>0){if(qt&&ve){let G=Pt(se[0]);e.texStorage2D(i.TEXTURE_2D,ht,Ft,G.width,G.height)}for(let G=0,tt=se.length;G<tt;G++)Mt=se[G],qt?I&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,yt,Ut,Mt):e.texImage2D(i.TEXTURE_2D,G,Ft,yt,Ut,Mt);_.generateMipmaps=!1}else if(qt){if(ve){let G=Pt(rt);e.texStorage2D(i.TEXTURE_2D,ht,Ft,G.width,G.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Ut,rt)}else e.texImage2D(i.TEXTURE_2D,0,Ft,yt,Ut,rt);m(_)&&d(Q),At.__version=$.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function lt(w,_,F){if(_.image.length!==6)return;let Q=_e(w,_),et=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let $=n.get(et);if(et.version!==$.__version||Q===!0){e.activeTexture(i.TEXTURE0+F);let At=le.getPrimaries(le.workingColorSpace),dt=_.colorSpace===ji?null:le.getPrimaries(_.colorSpace),vt=_.colorSpace===ji||At===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let oe=_.isCompressedTexture||_.image[0].isCompressedTexture,rt=_.image[0]&&_.image[0].isDataTexture,yt=[];for(let tt=0;tt<6;tt++)!oe&&!rt?yt[tt]=x(_.image[tt],!0,s.maxCubemapSize):yt[tt]=rt?_.image[tt].image:_.image[tt],yt[tt]=be(_,yt[tt]);let Ut=yt[0],Ft=r.convert(_.format,_.colorSpace),Mt=r.convert(_.type),se=S(_.internalFormat,Ft,Mt,_.colorSpace),qt=_.isVideoTexture!==!0,ve=$.__version===void 0||Q===!0,I=et.dataReady,ht=O(_,Ut);Jt(i.TEXTURE_CUBE_MAP,_);let G;if(oe){qt&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,se,Ut.width,Ut.height);for(let tt=0;tt<6;tt++){G=yt[tt].mipmaps;for(let xt=0;xt<G.length;xt++){let pt=G[xt];_.format!==Vn?Ft!==null?qt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,pt.width,pt.height,Ft,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,se,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,pt.width,pt.height,Ft,Mt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,se,pt.width,pt.height,0,Ft,Mt,pt.data)}}}else{if(G=_.mipmaps,qt&&ve){G.length>0&&ht++;let tt=Pt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,se,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,yt[tt].width,yt[tt].height,Ft,Mt,yt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,se,yt[tt].width,yt[tt].height,0,Ft,Mt,yt[tt].data);for(let xt=0;xt<G.length;xt++){let Gt=G[xt].image[tt].image;qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,Gt.width,Gt.height,Ft,Mt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,se,Gt.width,Gt.height,0,Ft,Mt,Gt.data)}}else{qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ft,Mt,yt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,se,Ft,Mt,yt[tt]);for(let xt=0;xt<G.length;xt++){let pt=G[xt];qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,Ft,Mt,pt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,se,Ft,Mt,pt.image[tt])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),$.__version=et.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Tt(w,_,F,Q,et,$){let At=r.convert(F.format,F.colorSpace),dt=r.convert(F.type),vt=S(F.internalFormat,At,dt,F.colorSpace),oe=n.get(_),rt=n.get(F);if(rt.__renderTarget=_,!oe.__hasExternalTextures){let yt=Math.max(1,_.width>>$),Ut=Math.max(1,_.height>>$);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,$,vt,yt,Ut,_.depth,0,At,dt,null):e.texImage2D(et,$,vt,yt,Ut,0,At,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ie(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,et,rt.__webglTexture,0,ne(_)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,et,rt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(w,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let Q=_.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,$=M(_.stencilBuffer,et),At=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=ne(_);ie(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,$,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,w)}else{let Q=_.textures;for(let et=0;et<Q.length;et++){let $=Q[et],At=r.convert($.format,$.colorSpace),dt=r.convert($.type),vt=S($.internalFormat,At,dt,$.colorSpace),oe=ne(_);F&&ie(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,vt,_.width,_.height):ie(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,vt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,vt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(_.depthTexture);Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),it(_.depthTexture,0);let et=Q.__webglTexture,$=ne(_);if(_.depthTexture.format===Cr)ie(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(_.depthTexture.format===Fr)ie(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ht(w){let _=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let Q=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){let et=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),_.__depthDisposeCallback=et}_.__boundDepthTexture=Q}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Nt(_.__webglFramebuffer,w)}else if(F){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=i.createRenderbuffer(),ft(_.__webglDepthbuffer[Q],w,!1);else{let et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ft(_.__webglDepthbuffer,w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(w,_,F){let Q=n.get(w);_!==void 0&&Tt(Q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ht(w)}function Ce(w){let _=w.texture,F=n.get(w),Q=n.get(_);w.addEventListener("dispose",A);let et=w.textures,$=w.isWebGLCubeRenderTarget===!0,At=et.length>1;if(At||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=_.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[dt]=[];for(let vt=0;vt<_.mipmaps.length;vt++)F.__webglFramebuffer[dt][vt]=i.createFramebuffer()}else F.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let dt=0;dt<_.mipmaps.length;dt++)F.__webglFramebuffer[dt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(At)for(let dt=0,vt=et.length;dt<vt;dt++){let oe=n.get(et[dt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ie(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){let vt=et[dt];F.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[dt]);let oe=r.convert(vt.format,vt.colorSpace),rt=r.convert(vt.type),yt=S(vt.internalFormat,oe,rt,vt.colorSpace,w.isXRRenderTarget===!0),Ut=ne(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,yt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,F.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,_);for(let dt=0;dt<6;dt++)if(_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)Tt(F.__webglFramebuffer[dt][vt],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else Tt(F.__webglFramebuffer[dt],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(_)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let dt=0,vt=et.length;dt<vt;dt++){let oe=et[dt],rt=n.get(oe);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Jt(i.TEXTURE_2D,oe),Tt(F.__webglFramebuffer,w,oe,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(oe)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Q.__webglTexture),Jt(dt,_),_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)Tt(F.__webglFramebuffer[vt],w,_,i.COLOR_ATTACHMENT0,dt,vt);else Tt(F.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,dt,0);m(_)&&d(dt),e.unbindTexture()}w.depthBuffer&&Ht(w)}function ae(w){let _=w.textures;for(let F=0,Q=_.length;F<Q;F++){let et=_[F];if(m(et)){let $=E(w),At=n.get(et).__webglTexture;e.bindTexture($,At),d($),e.unbindTexture()}}}let Ne=[],N=[];function yn(w){if(w.samples>0){if(ie(w)===!1){let _=w.textures,F=w.width,Q=w.height,et=i.COLOR_BUFFER_BIT,$=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(w),dt=_.length>1;if(dt)for(let vt=0;vt<_.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let vt=0;vt<_.length;vt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[vt]);let oe=n.get(_[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,F,Q,0,0,F,Q,et,i.NEAREST),l===!0&&(Ne.length=0,N.length=0,Ne.push(i.COLOR_ATTACHMENT0+vt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ne.push($),N.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<_.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,At.__webglColorRenderbuffer[vt]);let oe=n.get(_[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ne(w){return Math.min(s.maxSamples,w.samples)}function ie(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Dt(w){let _=a.render.frame;c.get(w)!==_&&(c.set(w,_),w.update())}function be(w,_){let F=w.colorSpace,Q=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Vr&&F!==ji&&(le.getTransfer(F)===ge?(Q!==Vn||et!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Pt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=it,this.setTexture2DArray=q,this.setTexture3D=ot,this.setTextureCube=W,this.rebindTextures=Kt,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=ie}function uv(i,t){function e(n,s=ji){let r,a=le.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===Bh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ed)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qf)return i.BYTE;if(n===td)return i.SHORT;if(n===Sa)return i.UNSIGNED_SHORT;if(n===Fh)return i.INT;if(n===Os)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===Ia)return i.HALF_FLOAT;if(n===nd)return i.ALPHA;if(n===id)return i.RGB;if(n===Vn)return i.RGBA;if(n===sd)return i.LUMINANCE;if(n===rd)return i.LUMINANCE_ALPHA;if(n===Cr)return i.DEPTH_COMPONENT;if(n===Fr)return i.DEPTH_STENCIL;if(n===kh)return i.RED;if(n===Hh)return i.RED_INTEGER;if(n===ad)return i.RG;if(n===Vh)return i.RG_INTEGER;if(n===Gh)return i.RGBA_INTEGER;if(n===Ro||n===Co||n===Io||n===Po)if(a===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Cc||n===Ic||n===Pc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lc||n===Dc||n===Uc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lc||n===Dc)return a===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nc||n===Oc||n===Fc||n===Bc||n===zc||n===kc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===$c)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lo||n===Zc||n===Jc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lo)return a===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===od||n===Kc||n===jc||n===Qc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var gh=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ei=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},fv={type:"move"},Ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),d=this._getHandJoint(h,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=c.position.distanceTo(u.position),p=.02,g=.005;h.inputState.pinching&&f>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pv=`
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

}`,xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Tn({vertexShader:dv,fragmentShader:pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_h=class extends ss{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,f=null,p=null,g=null,x=new xh,m=e.getContextAttributes(),d=null,E=null,S=[],M=[],O=new zt,T=null,A=new en;A.viewport=new Le;let U=new en;U.viewport=new Le;let b=[A,U],y=new gh,R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let lt=S[K];return lt===void 0&&(lt=new Ma,S[K]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(K){let lt=S[K];return lt===void 0&&(lt=new Ma,S[K]=lt),lt.getGripSpace()},this.getHand=function(K){let lt=S[K];return lt===void 0&&(lt=new Ma,S[K]=lt),lt.getHandSpace()};function V(K){let lt=M.indexOf(K.inputSource);if(lt===-1)return;let Tt=S[lt];Tt!==void 0&&(Tt.update(K.inputSource,K.frame,h||a),Tt.dispatchEvent({type:K.type,data:K.inputSource}))}function J(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",it);for(let K=0;K<S.length;K++){let lt=M[K];lt!==null&&(M[K]=null,S[K].disconnect(lt))}R=null,X=null,x.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,E=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",J),s.addEventListener("inputsourceschange",it),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ti(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,Tt=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?Fr:Cr,Tt=m.stencil?Or:Os);let Nt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Ti(f.textureWidth,f.textureHeight,{format:Vn,type:wi,depthTexture:new Go(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function it(K){for(let lt=0;lt<K.removed.length;lt++){let Tt=K.removed[lt],ft=M.indexOf(Tt);ft>=0&&(M[ft]=null,S[ft].disconnect(Tt))}for(let lt=0;lt<K.added.length;lt++){let Tt=K.added[lt],ft=M.indexOf(Tt);if(ft===-1){for(let Ht=0;Ht<S.length;Ht++)if(Ht>=M.length){M.push(Tt),ft=Ht;break}else if(M[Ht]===null){M[Ht]=Tt,ft=Ht;break}if(ft===-1)break}let Nt=S[ft];Nt&&Nt.connect(Tt)}}let q=new C,ot=new C;function W(K,lt,Tt){q.setFromMatrixPosition(lt.matrixWorld),ot.setFromMatrixPosition(Tt.matrixWorld);let ft=q.distanceTo(ot),Nt=lt.projectionMatrix.elements,Ht=Tt.projectionMatrix.elements,Kt=Nt[14]/(Nt[10]-1),Ce=Nt[14]/(Nt[10]+1),ae=(Nt[9]+1)/Nt[5],Ne=(Nt[9]-1)/Nt[5],N=(Nt[8]-1)/Nt[0],yn=(Ht[8]+1)/Ht[0],ne=Kt*N,ie=Kt*yn,Dt=ft/(-N+yn),be=Dt*-N;if(lt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(be),K.translateZ(Dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Nt[10]===-1)K.projectionMatrix.copy(lt.projectionMatrix),K.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let Pt=Kt+Dt,w=Ce+Dt,_=ne-be,F=ie+(ft-be),Q=ae*Ce/w*Pt,et=Ne*Ce/w*Pt;K.projectionMatrix.makePerspective(_,F,Q,et,Pt,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ut(K,lt){lt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(lt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let lt=K.near,Tt=K.far;x.texture!==null&&(x.depthNear>0&&(lt=x.depthNear),x.depthFar>0&&(Tt=x.depthFar)),y.near=U.near=A.near=lt,y.far=U.far=A.far=Tt,(R!==y.near||X!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,X=y.far),A.layers.mask=K.layers.mask|2,U.layers.mask=K.layers.mask|4,y.layers.mask=A.layers.mask|U.layers.mask;let ft=K.parent,Nt=y.cameras;ut(y,ft);for(let Ht=0;Ht<Nt.length;Ht++)ut(Nt[Ht],ft);Nt.length===2?W(y,A,U):y.projectionMatrix.copy(A.projectionMatrix),_t(K,y,ft)};function _t(K,lt,Tt){Tt===null?K.matrix.copy(lt.matrixWorld):(K.matrix.copy(Tt.matrixWorld),K.matrix.invert(),K.matrix.multiply(lt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(lt.projectionMatrix),K.projectionMatrixInverse.copy(lt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=nh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Ct=null;function Jt(K,lt){if(c=lt.getViewerPose(h||a),g=lt,c!==null){let Tt=c.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let ft=!1;Tt.length!==y.cameras.length&&(y.cameras.length=0,ft=!0);for(let Ht=0;Ht<Tt.length;Ht++){let Kt=Tt[Ht],Ce=null;if(p!==null)Ce=p.getViewport(Kt);else{let Ne=u.getViewSubImage(f,Kt);Ce=Ne.viewport,Ht===0&&(t.setRenderTargetTextures(E,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),t.setRenderTarget(E))}let ae=b[Ht];ae===void 0&&(ae=new en,ae.layers.enable(Ht),ae.viewport=new Le,b[Ht]=ae),ae.matrix.fromArray(Kt.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Kt.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Ht===0&&(y.matrix.copy(ae.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ft===!0&&y.cameras.push(ae)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let Ht=u.getDepthInformation(Tt[0]);Ht&&Ht.isValid&&Ht.texture&&x.init(t,Ht,s.renderState)}}for(let Tt=0;Tt<S.length;Tt++){let ft=M[Tt],Nt=S[Tt];ft!==null&&Nt!==void 0&&Nt.update(ft,lt,h||a)}Ct&&Ct(K,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}let _e=new dd;_e.setAnimationLoop(Jt),this.setAnimationLoop=function(K){Ct=K},this.dispose=function(){}}},Is=new En,mv=new Zt;function gv(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,fd(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,S,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,S):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ke&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ke&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d),S=E.envMap,M=E.envMapRotation;S&&(m.envMap.value=S,Is.copy(M),Is.x*=-1,Is.y*=-1,Is.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),m.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(Is)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ke&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){let M=S.program;n.uniformBlockBinding(E,M)}function h(E,S){let M=s[E.id];M===void 0&&(g(E),M=c(E),s[E.id]=M,E.addEventListener("dispose",m));let O=S.program;n.updateUBOMapping(E,O);let T=t.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function c(E){let S=u();E.__bindingPointIndex=S;let M=i.createBuffer(),O=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,O,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let S=s[E.id],M=E.uniforms,O=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=M.length;T<A;T++){let U=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,y=U.length;b<y;b++){let R=U[b];if(p(R,T,b,O)===!0){let X=R.__offset,V=Array.isArray(R.value)?R.value:[R.value],J=0;for(let it=0;it<V.length;it++){let q=V[it],ot=x(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,X+J,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,J),J+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,S,M,O){let T=E.value,A=S+"_"+M;if(O[A]===void 0)return typeof T=="number"||typeof T=="boolean"?O[A]=T:O[A]=T.clone(),!0;{let U=O[A];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return O[A]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function g(E){let S=E.uniforms,M=0,O=16;for(let A=0,U=S.length;A<U;A++){let b=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,R=b.length;y<R;y++){let X=b[y],V=Array.isArray(X.value)?X.value:[X.value];for(let J=0,it=V.length;J<it;J++){let q=V[J],ot=x(q),W=M%O,ut=W%ot.boundary,_t=W+ut;M+=ut,_t!==0&&O-_t<ot.storage&&(M+=O-_t),X.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=ot.storage}}}let T=M%O;return T>0&&(M+=O-T),E.__size=M,E.__cache={},this}function x(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){let S=E.target;S.removeEventListener("dispose",m);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:h,dispose:d}}var Wo=class{constructor(t={}){let{canvas:e=Mm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=es,this.toneMappingExposure=1;let M=this,O=!1,T=0,A=0,U=null,b=-1,y=null,R=new Le,X=new Le,V=null,J=new Ot(0),it=0,q=e.width,ot=e.height,W=1,ut=null,_t=null,Ct=new Le(0,0,q,ot),Jt=new Le(0,0,q,ot),_e=!1,K=new Aa,lt=!1,Tt=!1,ft=new Zt,Nt=new Zt,Ht=new C,Kt=new Le,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function Ne(){return U===null?W:1}let N=n;function yn(v,L){return e.getContext(v,L)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nh}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),N===null){let L="webgl2";if(N=yn(L,v),N===null)throw yn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ne,ie,Dt,be,Pt,w,_,F,Q,et,$,At,dt,vt,oe,rt,yt,Ut,Ft,Mt,se,qt,ve,I;function ht(){ne=new Dx(N),ne.init(),qt=new uv(N,ne),ie=new Ax(N,ne,t,qt),Dt=new lv(N,ne),ie.reverseDepthBuffer&&f&&Dt.buffers.depth.setReversed(!0),be=new Ox(N),Pt=new Z_,w=new hv(N,ne,Dt,Pt,ie,qt,be),_=new Cx(M),F=new Lx(M),Q=new Gm(N),ve=new wx(N,Q),et=new Ux(N,Q,be,ve),$=new Bx(N,et,Q,be),Ft=new Fx(N,ie,w),rt=new Rx(Pt),At=new $_(M,_,F,ne,ie,ve,rt),dt=new gv(M,Pt),vt=new K_,oe=new iv(ne),Ut=new Ex(M,_,F,Dt,$,p,l),yt=new av(M,$,ie),I=new xv(N,be,ie,Dt),Mt=new Tx(N,ne,be),se=new Nx(N,ne,be),be.programs=At.programs,M.capabilities=ie,M.extensions=ne,M.properties=Pt,M.renderLists=vt,M.shadowMap=yt,M.state=Dt,M.info=be}ht();let G=new _h(M,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=ne.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ne.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(v){v!==void 0&&(W=v,this.setSize(q,ot,!1))},this.getSize=function(v){return v.set(q,ot)},this.setSize=function(v,L,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,ot=L,e.width=Math.floor(v*W),e.height=Math.floor(L*W),z===!0&&(e.style.width=v+"px",e.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(q*W,ot*W).floor()},this.setDrawingBufferSize=function(v,L,z){q=v,ot=L,W=z,e.width=Math.floor(v*z),e.height=Math.floor(L*z),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(Ct)},this.setViewport=function(v,L,z,k){v.isVector4?Ct.set(v.x,v.y,v.z,v.w):Ct.set(v,L,z,k),Dt.viewport(R.copy(Ct).multiplyScalar(W).round())},this.getScissor=function(v){return v.copy(Jt)},this.setScissor=function(v,L,z,k){v.isVector4?Jt.set(v.x,v.y,v.z,v.w):Jt.set(v,L,z,k),Dt.scissor(X.copy(Jt).multiplyScalar(W).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(v){Dt.setScissorTest(_e=v)},this.setOpaqueSort=function(v){ut=v},this.setTransparentSort=function(v){_t=v},this.getClearColor=function(v){return v.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(v=!0,L=!0,z=!0){let k=0;if(v){let D=!1;if(U!==null){let at=U.texture.format;D=at===Gh||at===Vh||at===Hh}if(D){let at=U.texture.type,mt=at===wi||at===Os||at===Sa||at===Or||at===Bh||at===zh,bt=Ut.getClearColor(),St=Ut.getClearAlpha(),Bt=bt.r,Wt=bt.g,Et=bt.b;mt?(g[0]=Bt,g[1]=Wt,g[2]=Et,g[3]=St,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=Bt,x[1]=Wt,x[2]=Et,x[3]=St,N.clearBufferiv(N.COLOR,0,x))}else k|=N.COLOR_BUFFER_BIT}L&&(k|=N.DEPTH_BUFFER_BIT),z&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),oe.dispose(),Pt.dispose(),_.dispose(),F.dispose(),$.dispose(),ve.dispose(),I.dispose(),At.dispose(),G.dispose(),G.removeEventListener("sessionstart",Du),G.removeEventListener("sessionend",Uu),Es.stop()};function tt(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let v=be.autoReset,L=yt.enabled,z=yt.autoUpdate,k=yt.needsUpdate,D=yt.type;ht(),be.autoReset=v,yt.enabled=L,yt.autoUpdate=z,yt.needsUpdate=k,yt.type=D}function pt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Gt(v){let L=v.target;L.removeEventListener("dispose",Gt),Pe(L)}function Pe(v){$e(v),Pt.remove(v)}function $e(v){let L=Pt.get(v).programs;L!==void 0&&(L.forEach(function(z){At.releaseProgram(z)}),v.isShaderMaterial&&At.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,z,k,D,at){L===null&&(L=Ce);let mt=D.isMesh&&D.matrixWorld.determinant()<0,bt=Ip(v,L,z,k,D);Dt.setMaterial(k,mt);let St=z.index,Bt=1;if(k.wireframe===!0){if(St=et.getWireframeAttribute(z),St===void 0)return;Bt=2}let Wt=z.drawRange,Et=z.attributes.position,ce=Wt.start*Bt,ye=(Wt.start+Wt.count)*Bt;at!==null&&(ce=Math.max(ce,at.start*Bt),ye=Math.min(ye,(at.start+at.count)*Bt)),St!==null?(ce=Math.max(ce,0),ye=Math.min(ye,St.count)):Et!=null&&(ce=Math.max(ce,0),ye=Math.min(ye,Et.count));let Se=ye-ce;if(Se<0||Se===1/0)return;ve.setup(D,k,bt,z,St);let ln,ue=Mt;if(St!==null&&(ln=Q.get(St),ue=se,ue.setIndex(ln)),D.isMesh)k.wireframe===!0?(Dt.setLineWidth(k.wireframeLinewidth*Ne()),ue.setMode(N.LINES)):ue.setMode(N.TRIANGLES);else if(D.isLine){let Rt=k.linewidth;Rt===void 0&&(Rt=1),Dt.setLineWidth(Rt*Ne()),D.isLineSegments?ue.setMode(N.LINES):D.isLineLoop?ue.setMode(N.LINE_LOOP):ue.setMode(N.LINE_STRIP)}else D.isPoints?ue.setMode(N.POINTS):D.isSprite&&ue.setMode(N.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)ue.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ue.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Rt=D._multiDrawStarts,gi=D._multiDrawCounts,fe=D._multiDrawCount,Fn=St?Q.get(St).bytesPerElement:1,or=Pt.get(k).currentProgram.getUniforms();for(let dn=0;dn<fe;dn++)or.setValue(N,"_gl_DrawID",dn),ue.render(Rt[dn]/Fn,gi[dn])}else if(D.isInstancedMesh)ue.renderInstances(ce,Se,D.count);else if(z.isInstancedBufferGeometry){let Rt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gi=Math.min(z.instanceCount,Rt);ue.renderInstances(ce,Se,gi)}else ue.render(ce,Se)};function pe(v,L,z){v.transparent===!0&&v.side===hn&&v.forceSinglePass===!1?(v.side=Ke,v.needsUpdate=!0,ja(v,L,z),v.side=is,v.needsUpdate=!0,ja(v,L,z),v.side=hn):ja(v,L,z)}this.compile=function(v,L,z=null){z===null&&(z=v),d=oe.get(z),d.init(L),S.push(d),z.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),v!==z&&v.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),d.setupLights();let k=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let at=D.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let bt=at[mt];pe(bt,z,D),k.add(bt)}else pe(at,z,D),k.add(at)}),S.pop(),d=null,k},this.compileAsync=function(v,L,z=null){let k=this.compile(v,L,z);return new Promise(D=>{function at(){if(k.forEach(function(mt){Pt.get(mt).currentProgram.isReady()&&k.delete(mt)}),k.size===0){D(v);return}setTimeout(at,10)}ne.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let On=null;function mi(v){On&&On(v)}function Du(){Es.stop()}function Uu(){Es.start()}let Es=new dd;Es.setAnimationLoop(mi),typeof self<"u"&&Es.setContext(self),this.setAnimationLoop=function(v){On=v,G.setAnimationLoop(v),v===null?Es.stop():Es.start()},G.addEventListener("sessionstart",Du),G.addEventListener("sessionend",Uu),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(L),L=G.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,L,U),d=oe.get(v,S.length),d.init(L),S.push(d),Nt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),K.setFromProjectionMatrix(Nt),Tt=this.localClippingEnabled,lt=rt.init(this.clippingPlanes,Tt),m=vt.get(v,E.length),m.init(),E.push(m),G.enabled===!0&&G.isPresenting===!0){let at=M.xr.getDepthSensingMesh();at!==null&&Fl(at,L,-1/0,M.sortObjects)}Fl(v,L,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ut,_t),ae=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ae&&Ut.addToRenderList(m,v),this.info.render.frame++,lt===!0&&rt.beginShadows();let z=d.state.shadowsArray;yt.render(z,v,L),lt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,D=m.transmissive;if(d.setupLights(),L.isArrayCamera){let at=L.cameras;if(D.length>0)for(let mt=0,bt=at.length;mt<bt;mt++){let St=at[mt];Ou(k,D,v,St)}ae&&Ut.render(v);for(let mt=0,bt=at.length;mt<bt;mt++){let St=at[mt];Nu(m,v,St,St.viewport)}}else D.length>0&&Ou(k,D,v,L),ae&&Ut.render(v),Nu(m,v,L);U!==null&&(w.updateMultisampleRenderTarget(U),w.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(M,v,L),ve.resetDefaultState(),b=-1,y=null,S.pop(),S.length>0?(d=S[S.length-1],lt===!0&&rt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Fl(v,L,z,k){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||K.intersectsSprite(v)){k&&Kt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Nt);let mt=$.update(v),bt=v.material;bt.visible&&m.push(v,mt,bt,z,Kt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||K.intersectsObject(v))){let mt=$.update(v),bt=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Kt.copy(v.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Kt.copy(mt.boundingSphere.center)),Kt.applyMatrix4(v.matrixWorld).applyMatrix4(Nt)),Array.isArray(bt)){let St=mt.groups;for(let Bt=0,Wt=St.length;Bt<Wt;Bt++){let Et=St[Bt],ce=bt[Et.materialIndex];ce&&ce.visible&&m.push(v,mt,ce,z,Kt.z,Et)}}else bt.visible&&m.push(v,mt,bt,z,Kt.z,null)}}let at=v.children;for(let mt=0,bt=at.length;mt<bt;mt++)Fl(at[mt],L,z,k)}function Nu(v,L,z,k){let D=v.opaque,at=v.transmissive,mt=v.transparent;d.setupLightsView(z),lt===!0&&rt.setGlobalState(M.clippingPlanes,z),k&&Dt.viewport(R.copy(k)),D.length>0&&Ka(D,L,z),at.length>0&&Ka(at,L,z),mt.length>0&&Ka(mt,L,z),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Ou(v,L,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new Ti(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Ia:wi,minFilter:Ns,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let at=d.state.transmissionRenderTarget[k.id],mt=k.viewport||R;at.setSize(mt.z,mt.w);let bt=M.getRenderTarget();M.setRenderTarget(at),M.getClearColor(J),it=M.getClearAlpha(),it<1&&M.setClearColor(16777215,.5),M.clear(),ae&&Ut.render(z);let St=M.toneMapping;M.toneMapping=es;let Bt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),lt===!0&&rt.setGlobalState(M.clippingPlanes,k),Ka(v,z,k),w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Et=0,ce=L.length;Et<ce;Et++){let ye=L[Et],Se=ye.object,ln=ye.geometry,ue=ye.material,Rt=ye.group;if(ue.side===hn&&Se.layers.test(k.layers)){let gi=ue.side;ue.side=Ke,ue.needsUpdate=!0,Fu(Se,z,k,ln,ue,Rt),ue.side=gi,ue.needsUpdate=!0,Wt=!0}}Wt===!0&&(w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at))}M.setRenderTarget(bt),M.setClearColor(J,it),Bt!==void 0&&(k.viewport=Bt),M.toneMapping=St}function Ka(v,L,z){let k=L.isScene===!0?L.overrideMaterial:null;for(let D=0,at=v.length;D<at;D++){let mt=v[D],bt=mt.object,St=mt.geometry,Bt=k===null?mt.material:k,Wt=mt.group;bt.layers.test(z.layers)&&Fu(bt,L,z,St,Bt,Wt)}}function Fu(v,L,z,k,D,at){v.onBeforeRender(M,L,z,k,D,at),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(M,L,z,k,v,at),D.transparent===!0&&D.side===hn&&D.forceSinglePass===!1?(D.side=Ke,D.needsUpdate=!0,M.renderBufferDirect(z,L,k,D,v,at),D.side=is,D.needsUpdate=!0,M.renderBufferDirect(z,L,k,D,v,at),D.side=hn):M.renderBufferDirect(z,L,k,D,v,at),v.onAfterRender(M,L,z,k,D,at)}function ja(v,L,z){L.isScene!==!0&&(L=Ce);let k=Pt.get(v),D=d.state.lights,at=d.state.shadowsArray,mt=D.state.version,bt=At.getParameters(v,D.state,at,L,z),St=At.getProgramCacheKey(bt),Bt=k.programs;k.environment=v.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(v.isMeshStandardMaterial?F:_).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Bt===void 0&&(v.addEventListener("dispose",Gt),Bt=new Map,k.programs=Bt);let Wt=Bt.get(St);if(Wt!==void 0){if(k.currentProgram===Wt&&k.lightsStateVersion===mt)return zu(v,bt),Wt}else bt.uniforms=At.getUniforms(v),v.onBeforeCompile(bt,M),Wt=At.acquireProgram(bt,St),Bt.set(St,Wt),k.uniforms=bt.uniforms;let Et=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Et.clippingPlanes=rt.uniform),zu(v,bt),k.needsLights=Lp(v),k.lightsStateVersion=mt,k.needsLights&&(Et.ambientLightColor.value=D.state.ambient,Et.lightProbe.value=D.state.probe,Et.directionalLights.value=D.state.directional,Et.directionalLightShadows.value=D.state.directionalShadow,Et.spotLights.value=D.state.spot,Et.spotLightShadows.value=D.state.spotShadow,Et.rectAreaLights.value=D.state.rectArea,Et.ltc_1.value=D.state.rectAreaLTC1,Et.ltc_2.value=D.state.rectAreaLTC2,Et.pointLights.value=D.state.point,Et.pointLightShadows.value=D.state.pointShadow,Et.hemisphereLights.value=D.state.hemi,Et.directionalShadowMap.value=D.state.directionalShadowMap,Et.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Et.spotShadowMap.value=D.state.spotShadowMap,Et.spotLightMatrix.value=D.state.spotLightMatrix,Et.spotLightMap.value=D.state.spotLightMap,Et.pointShadowMap.value=D.state.pointShadowMap,Et.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=Wt,k.uniformsList=null,Wt}function Bu(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=Pr.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function zu(v,L){let z=Pt.get(v);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function Ip(v,L,z,k,D){L.isScene!==!0&&(L=Ce),w.resetTextureUnits();let at=L.fog,mt=k.isMeshStandardMaterial?L.environment:null,bt=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Vr,St=(k.isMeshStandardMaterial?F:_).get(k.envMap||mt),Bt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Wt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Et=!!z.morphAttributes.position,ce=!!z.morphAttributes.normal,ye=!!z.morphAttributes.color,Se=es;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Se=M.toneMapping);let ln=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=ln!==void 0?ln.length:0,Rt=Pt.get(k),gi=d.state.lights;if(lt===!0&&(Tt===!0||v!==y)){let Mn=v===y&&k.id===b;rt.setState(k,v,Mn)}let fe=!1;k.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==gi.state.version||Rt.outputColorSpace!==bt||D.isBatchedMesh&&Rt.batching===!1||!D.isBatchedMesh&&Rt.batching===!0||D.isBatchedMesh&&Rt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Rt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Rt.instancing===!1||!D.isInstancedMesh&&Rt.instancing===!0||D.isSkinnedMesh&&Rt.skinning===!1||!D.isSkinnedMesh&&Rt.skinning===!0||D.isInstancedMesh&&Rt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Rt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Rt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Rt.instancingMorph===!1&&D.morphTexture!==null||Rt.envMap!==St||k.fog===!0&&Rt.fog!==at||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==rt.numPlanes||Rt.numIntersection!==rt.numIntersection)||Rt.vertexAlphas!==Bt||Rt.vertexTangents!==Wt||Rt.morphTargets!==Et||Rt.morphNormals!==ce||Rt.morphColors!==ye||Rt.toneMapping!==Se||Rt.morphTargetsCount!==ue)&&(fe=!0):(fe=!0,Rt.__version=k.version);let Fn=Rt.currentProgram;fe===!0&&(Fn=ja(k,L,D));let or=!1,dn=!1,la=!1,Ee=Fn.getUniforms(),Jn=Rt.uniforms;if(Dt.useProgram(Fn.program)&&(or=!0,dn=!0,la=!0),k.id!==b&&(b=k.id,dn=!0),or||y!==v){Dt.buffers.depth.getReversed()?(ft.copy(v.projectionMatrix),Sm(ft),Em(ft),Ee.setValue(N,"projectionMatrix",ft)):Ee.setValue(N,"projectionMatrix",v.projectionMatrix),Ee.setValue(N,"viewMatrix",v.matrixWorldInverse);let Wi=Ee.map.cameraPosition;Wi!==void 0&&Wi.setValue(N,Ht.setFromMatrixPosition(v.matrixWorld)),ie.logarithmicDepthBuffer&&Ee.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ee.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,dn=!0,la=!0)}if(D.isSkinnedMesh){Ee.setOptional(N,D,"bindMatrix"),Ee.setOptional(N,D,"bindMatrixInverse");let Mn=D.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ee.setValue(N,"boneTexture",Mn.boneTexture,w))}D.isBatchedMesh&&(Ee.setOptional(N,D,"batchingTexture"),Ee.setValue(N,"batchingTexture",D._matricesTexture,w),Ee.setOptional(N,D,"batchingIdTexture"),Ee.setValue(N,"batchingIdTexture",D._indirectTexture,w),Ee.setOptional(N,D,"batchingColorTexture"),D._colorsTexture!==null&&Ee.setValue(N,"batchingColorTexture",D._colorsTexture,w));let ca=z.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0)&&Ft.update(D,z,Fn),(dn||Rt.receiveShadow!==D.receiveShadow)&&(Rt.receiveShadow=D.receiveShadow,Ee.setValue(N,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Jn.envMap.value=St,Jn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Jn.envMapIntensity.value=L.environmentIntensity),dn&&(Ee.setValue(N,"toneMappingExposure",M.toneMappingExposure),Rt.needsLights&&Pp(Jn,la),at&&k.fog===!0&&dt.refreshFogUniforms(Jn,at),dt.refreshMaterialUniforms(Jn,k,W,ot,d.state.transmissionRenderTarget[v.id]),Pr.upload(N,Bu(Rt),Jn,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Pr.upload(N,Bu(Rt),Jn,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ee.setValue(N,"center",D.center),Ee.setValue(N,"modelViewMatrix",D.modelViewMatrix),Ee.setValue(N,"normalMatrix",D.normalMatrix),Ee.setValue(N,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Mn=k.uniformsGroups;for(let Wi=0,Xi=Mn.length;Wi<Xi;Wi++){let ku=Mn[Wi];I.update(ku,Fn),I.bind(ku,Fn)}}return Fn}function Pp(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Lp(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,L,z){Pt.get(v.texture).__webglTexture=L,Pt.get(v.depthTexture).__webglTexture=z;let k=Pt.get(v);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,L){let z=Pt.get(v);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,z=0){U=v,T=L,A=z;let k=!0,D=null,at=!1,mt=!1;if(v){let St=Pt.get(v);if(St.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(St.__webglFramebuffer===void 0)w.setupRenderTarget(v);else if(St.__hasExternalTextures)w.rebindTextures(v,Pt.get(v.texture).__webglTexture,Pt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Et=v.depthTexture;if(St.__boundDepthTexture!==Et){if(Et!==null&&Pt.has(Et)&&(v.width!==Et.image.width||v.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(v)}}let Bt=v.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(mt=!0);let Wt=Pt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Wt[L])?D=Wt[L][z]:D=Wt[L],at=!0):v.samples>0&&w.useMultisampledRTT(v)===!1?D=Pt.get(v).__webglMultisampledFramebuffer:Array.isArray(Wt)?D=Wt[z]:D=Wt,R.copy(v.viewport),X.copy(v.scissor),V=v.scissorTest}else R.copy(Ct).multiplyScalar(W).floor(),X.copy(Jt).multiplyScalar(W).floor(),V=_e;if(Dt.bindFramebuffer(N.FRAMEBUFFER,D)&&k&&Dt.drawBuffers(v,D),Dt.viewport(R),Dt.scissor(X),Dt.setScissorTest(V),at){let St=Pt.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,St.__webglTexture,z)}else if(mt){let St=Pt.get(v.texture),Bt=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.__webglTexture,z||0,Bt)}b=-1},this.readRenderTargetPixels=function(v,L,z,k,D,at,mt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Pt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){Dt.bindFramebuffer(N.FRAMEBUFFER,bt);try{let St=v.texture,Bt=St.format,Wt=St.type;if(!ie.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-k&&z>=0&&z<=v.height-D&&N.readPixels(L,z,k,D,qt.convert(Bt),qt.convert(Wt),at)}finally{let St=U!==null?Pt.get(U).__webglFramebuffer:null;Dt.bindFramebuffer(N.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(v,L,z,k,D,at,mt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Pt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){let St=v.texture,Bt=St.format,Wt=St.type;if(!ie.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=v.width-k&&z>=0&&z<=v.height-D){Dt.bindFramebuffer(N.FRAMEBUFFER,bt);let Et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Et),N.bufferData(N.PIXEL_PACK_BUFFER,at.byteLength,N.STREAM_READ),N.readPixels(L,z,k,D,qt.convert(Bt),qt.convert(Wt),0);let ce=U!==null?Pt.get(U).__webglFramebuffer:null;Dt.bindFramebuffer(N.FRAMEBUFFER,ce);let ye=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bm(N,ye,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,at),N.deleteBuffer(Et),N.deleteSync(ye),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,L=null,z=0){v.isTexture!==!0&&(va("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,v=arguments[1]);let k=Math.pow(2,-z),D=Math.floor(v.image.width*k),at=Math.floor(v.image.height*k),mt=L!==null?L.x:0,bt=L!==null?L.y:0;w.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,mt,bt,D,at),Dt.unbindTexture()},this.copyTextureToTexture=function(v,L,z=null,k=null,D=0){v.isTexture!==!0&&(va("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,v=arguments[1],L=arguments[2],D=arguments[3]||0,z=null);let at,mt,bt,St,Bt,Wt,Et,ce,ye,Se=v.isCompressedTexture?v.mipmaps[D]:v.image;z!==null?(at=z.max.x-z.min.x,mt=z.max.y-z.min.y,bt=z.isBox3?z.max.z-z.min.z:1,St=z.min.x,Bt=z.min.y,Wt=z.isBox3?z.min.z:0):(at=Se.width,mt=Se.height,bt=Se.depth||1,St=0,Bt=0,Wt=0),k!==null?(Et=k.x,ce=k.y,ye=k.z):(Et=0,ce=0,ye=0);let ln=qt.convert(L.format),ue=qt.convert(L.type),Rt;L.isData3DTexture?(w.setTexture3D(L,0),Rt=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(w.setTexture2DArray(L,0),Rt=N.TEXTURE_2D_ARRAY):(w.setTexture2D(L,0),Rt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let gi=N.getParameter(N.UNPACK_ROW_LENGTH),fe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Fn=N.getParameter(N.UNPACK_SKIP_PIXELS),or=N.getParameter(N.UNPACK_SKIP_ROWS),dn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Se.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Se.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,St),N.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Wt);let la=v.isDataArrayTexture||v.isData3DTexture,Ee=L.isDataArrayTexture||L.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let Jn=Pt.get(v),ca=Pt.get(L),Mn=Pt.get(Jn.__renderTarget),Wi=Pt.get(ca.__renderTarget);Dt.bindFramebuffer(N.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Xi=0;Xi<bt;Xi++)la&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.get(v).__webglTexture,D,Wt+Xi),v.isDepthTexture?(Ee&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.get(L).__webglTexture,D,ye+Xi),N.blitFramebuffer(St,Bt,at,mt,Et,ce,at,mt,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ee?N.copyTexSubImage3D(Rt,D,Et,ce,ye+Xi,St,Bt,at,mt):N.copyTexSubImage2D(Rt,D,Et,ce,ye+Xi,St,Bt,at,mt);Dt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ee?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Rt,D,Et,ce,ye,at,mt,bt,ln,ue,Se.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(Rt,D,Et,ce,ye,at,mt,bt,ln,Se.data):N.texSubImage3D(Rt,D,Et,ce,ye,at,mt,bt,ln,ue,Se):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,D,Et,ce,at,mt,ln,ue,Se.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,D,Et,ce,Se.width,Se.height,ln,Se.data):N.texSubImage2D(N.TEXTURE_2D,D,Et,ce,at,mt,ln,ue,Se);N.pixelStorei(N.UNPACK_ROW_LENGTH,gi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,or),N.pixelStorei(N.UNPACK_SKIP_IMAGES,dn),D===0&&L.generateMipmaps&&N.generateMipmap(Rt),Dt.unbindTexture()},this.copyTextureToTexture3D=function(v,L,z=null,k=null,D=0){return v.isTexture!==!0&&(va("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,v=arguments[2],L=arguments[3],D=arguments[4]||0),va('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,L,z,k,D)},this.initRenderTarget=function(v){Pt.get(v).__webglFramebuffer===void 0&&w.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?w.setTextureCube(v,0):v.isData3DTexture?w.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?w.setTexture2DArray(v,0):w.setTexture2D(v,0),Dt.unbindTexture()},this.resetState=function(){T=0,A=0,U=null,Dt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Xo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qo=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Yo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qe=new C,Ra=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fs=class extends Ri{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},br,pa=new C,Sr=new C,Er=new C,wr=new zt,ma=new zt,_d=new Zt,Mo=new C,ga=new C,bo=new C,kf=new zt,pc=new zt,Hf=new zt,zr=class extends Ye{constructor(t=new Fs){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yo(e,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Ra(n,3,0,!1)),br.setAttribute("uv",new Ra(n,2,3,!1))}this.geometry=br,this.material=t,this.center=new zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),_d.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-Er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;So(Mo.set(-.5,-.5,0),Er,a,Sr,s,r),So(ga.set(.5,-.5,0),Er,a,Sr,s,r),So(bo.set(.5,.5,0),Er,a,Sr,s,r),kf.set(0,0),pc.set(1,0),Hf.set(1,1);let o=t.ray.intersectTriangle(Mo,ga,bo,!1,pa);if(o===null&&(So(ga.set(-.5,.5,0),Er,a,Sr,s,r),pc.set(0,1),o=t.ray.intersectTriangle(Mo,bo,ga,!1,pa),o===null))return;let l=t.ray.origin.distanceTo(pa);l<t.near||l>t.far||e.push({distance:l,point:pa.clone(),uv:Qi.getInterpolation(pa,Mo,ga,bo,kf,pc,Hf,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function So(i,t,e,n,s,r){wr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ma.x=r*wr.x-s*wr.y,ma.y=s*wr.x+r*wr.y):ma.copy(wr),i.copy(t),i.x+=ma.x,i.y+=ma.y,i.applyMatrix4(_d)}var vh=class extends sn{constructor(t=null,e=1,n=1,s,r,a,o,l,h=nn,c=nn,u,f){super(null,a,o,l,h,c,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bs=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Tr=new Zt,Vf=new Zt,Eo=[],Gf=new Ai,_v=new Zt,xa=new re,_a=new rs,ni=class extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_v)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Tr),Gf.copy(t.boundingBox).applyMatrix4(Tr),this.boundingBox.union(Gf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Tr),_a.copy(t.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(_a)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(n),t.ray.intersectsSphere(_a)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Tr),Vf.multiplyMatrices(n,Tr),xa.matrixWorld=Vf,xa.raycast(t,Eo);for(let a=0,o=Eo.length;a<o;a++){let l=Eo[a];l.instanceId=r,l.object=this,e.push(l)}Eo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vh(new Float32Array(s*this.count),s,this.count,kh,ti));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var zs=class extends Ri{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wf=new Zt,yh=new wa,wo=new rs,To=new C,kr=class extends Ye{constructor(t=new ze,e=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,t.ray.intersectsSphere(wo)===!1)return;Wf.copy(s).invert(),yh.copy(t.ray).applyMatrix4(Wf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,x=p;g<x;g++){let m=h.getX(g);To.fromBufferAttribute(u,m),Xf(To,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,x=p;g<x;g++)To.fromBufferAttribute(u,g),Xf(To,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xf(i,t,e,n,s,r,a){let o=yh.distanceSqToPoint(i);if(o<e){let l=new C;yh.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ii=class extends sn{constructor(t,e,n,s,r,a,o,l,h){super(t,e,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $o=class i extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],h=new C,c=new zt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*s;h.x=t*Math.cos(p),h.y=t*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[f]/t+1)/2,c.y=(a[f+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var Mh=class i extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),h(n),c(),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(r.slice(),3)),this.setAttribute("uv",new we(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let S=new C,M=new C,O=new C;for(let T=0;T<e.length;T+=3)p(e[T+0],S),p(e[T+1],M),p(e[T+2],O),l(S,M,O,E)}function l(E,S,M,O){let T=O+1,A=[];for(let U=0;U<=T;U++){A[U]=[];let b=E.clone().lerp(M,U/T),y=S.clone().lerp(M,U/T),R=T-U;for(let X=0;X<=R;X++)X===0&&U===T?A[U][X]=b:A[U][X]=b.clone().lerp(y,X/R)}for(let U=0;U<T;U++)for(let b=0;b<2*(T-U)-1;b++){let y=Math.floor(b/2);b%2===0?(f(A[U][y+1]),f(A[U+1][y]),f(A[U][y])):(f(A[U][y+1]),f(A[U+1][y+1]),f(A[U+1][y]))}}function h(E){let S=new C;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(E),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function c(){let E=new C;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];let M=m(E)/2/Math.PI+.5,O=d(E)/Math.PI+.5;a.push(M,1-O)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){let S=a[E+0],M=a[E+2],O=a[E+4],T=Math.max(S,M,O),A=Math.min(S,M,O);T>.9&&A<.1&&(S<.2&&(a[E+0]+=1),M<.2&&(a[E+2]+=1),O<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,S){let M=E*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function g(){let E=new C,S=new C,M=new C,O=new C,T=new zt,A=new zt,U=new zt;for(let b=0,y=0;b<r.length;b+=9,y+=6){E.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),T.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),U.set(a[y+4],a[y+5]),O.copy(E).add(S).add(M).divideScalar(3);let R=m(O);x(T,y+0,E,R),x(A,y+2,S,R),x(U,y+4,M,R)}}function x(E,S,M,O){O<0&&E.x===1&&(a[S]=E.x-1),M.x===0&&M.z===0&&(a[S]=O/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Zo=class i extends Mh{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ks=class i extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],h=[],c=[],u=t,f=(e-t)/s,p=new C,g=new zt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,c.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let d=0;d<n;d++){let E=d+m,S=E,M=E+n+1,O=E+n+2,T=E+1;o.push(S,M,T),o.push(M,O,T)}}this.setIndex(o),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Hs=class i extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),h=0,c=[],u=new C,f=new C,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let E=[],S=d/n,M=0;d===0&&a===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let O=0;O<=e;O++){let T=O/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+M,1-S),E.push(h++)}c.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){let S=c[d][E+1],M=c[d][E],O=c[d+1][E],T=c[d+1][E+1];(d!==0||a>0)&&p.push(S,M,T),(d!==n-1||l<Math.PI)&&p.push(M,O,T)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(x,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Jo=class i extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],h=[],c=new C,u=new C,f=new C;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),f.subVectors(u,c).normalize(),l.push(f.x,f.y,f.z),h.push(g/s),h.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,E=(s+1)*p+g;a.push(x,m,E),a.push(m,d,E)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var An=class extends Ri{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ao(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Hr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bh=class extends Hr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wu,endingEnd:Wu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xu:r=t,o=2*e-n;break;case qu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xu:a=t,l=2*n-e;break;case qu:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let h=(n-e)*.5,c=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*x+.5*g,M=p*m-p*x;for(let O=0;O!==o;++O)r[O]=d*a[c+O]+E*a[h+O]+S*a[l+O]+M*a[u+O];return r}},Sh=class extends Hr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=(n-e)/(s-e),u=1-c;for(let f=0;f!==o;++f)r[f]=a[h+f]*u+a[l+f]*c;return r}},Eh=class extends Hr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ao(e,this.TimeBufferType),this.values=Ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ao(t.times,Array),values:Ao(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Eh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Do:e=this.InterpolantFactoryMethodDiscrete;break;case th:e=this.InterpolantFactoryMethodLinear;break;case zl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return th;case this.InterpolantFactoryMethodSmooth:return zl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&vv(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],c=t[o+1];if(h!==c&&(o!==1||h!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=th;var Vs=class extends Gn{constructor(t,e,n){super(t,e,n)}};Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=Do;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var wh=class extends Gn{};wh.prototype.ValueTypeName="color";var Th=class extends Gn{};Th.prototype.ValueTypeName="number";var Ah=class extends Hr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),h=t*o;for(let c=h+o;h!==c;h+=4)Sn.slerpFlat(r,0,a,h-o,a,h,l);return r}},Ko=class extends Gn{InterpolantFactoryMethodLinear(t){return new Ah(this.times,this.values,this.getValueSize(),t)}};Ko.prototype.ValueTypeName="quaternion";Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Gn{constructor(t,e,n){super(t,e,n)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Do;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends Gn{};Rh.prototype.ValueTypeName="vector";var qf={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ch=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=h.length;u<f;u+=2){let p=h[u],g=h[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}},yv=new Ch,Ca=class{constructor(t){this.manager=t!==void 0?t:yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ih=class extends Ca{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=qf.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Ea("img");function l(){c(),qf.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(u){c(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var jo=class extends Ca{constructor(t){super(t)}load(t,e,n,s){let r=new sn,a=new Ih(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Qo=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},tl=class extends Qo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},mc=new Zt,Yf=new C,$f=new C,Ph=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yf),$f.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($f),e.updateMatrixWorld(),mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Lh=class extends Ph{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},el=class extends Qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Lh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var nl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Zf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Zf(){return performance.now()}var qh="\\[\\]\\.:\\/",Mv=new RegExp("["+qh+"]","g"),Yh="[^"+qh+"]",bv="[^"+qh.replace("\\.","")+"]",Sv=/((?:WC+[\/:])*)/.source.replace("WC",Yh),Ev=/(WCOD+)?/.source.replace("WCOD",bv),wv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),Tv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),Av=new RegExp("^"+Sv+Ev+wv+Tv+"$"),Rv=["material","materials","bones","map"],Dh=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mv,"")}static parseTrackName(t){let e=Av.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Rv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Dh;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qy=new Float32Array(1);var Jf=new Zt,il=class{constructor(t,e,n=0,s=1/0){this.ray=new wa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jf),this}intersectObject(t,e=!0,n=[]){return Uh(t,this,n,e),n.sort(Kf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Uh(t[s],this,n,e);return n.sort(Kf),n}};function Kf(i,t){return i.distance-t.distance}function Uh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Uh(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);function $h(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ze,h=0;for(let c=0;c<i.length;++c){let u=i[c],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(e){let c=0,u=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+c);c+=i[f].attributes.position.count}l.setIndex(u)}for(let c in r){let u=vd(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in a){let u=a[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<a[c].length;++x)p.push(a[c][x][f]);let g=vd(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function vd(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){let c=i[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}let a=new t(r),o=new Ie(a,e,n),l=0;for(let h=0;h<i.length;++h){let c=i[h];if(c.isInterleavedBufferAttribute){let u=l/e;for(let f=0,p=c.count;f<p;f++)for(let g=0;g<e;g++){let x=c.getComponent(f,g);o.setComponent(f+u,g,x)}}else a.set(c.array,l);l+=c.count*e}return s!==void 0&&(o.gpuType=s),o}var Y=i=>document.querySelector(i),ka=/[?&]embed\b/.test(location.search),Jr=/[?&]city\b/.test(location.search),Dd=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Xn={team:null,rival:null,last:null,news:[],trophies:[]},Lt=(i,t)=>i+Math.random()*(t-i),on=(i,t,e)=>Math.max(t,Math.min(e,i)),He=(i,t,e)=>i+(t-i)*e,yl=i=>i<.5?2*i*i:1-(-2*i+2)**2/2,ys=matchMedia("(pointer:coarse)").matches,zi=i=>i[Math.random()*i.length|0];function tr(i,t,e){let n=(t-i+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),i+n*e}var wt={md:!0,visit:!1,level:1,won:new Set,tokens:20,owned:new Set(["negro","local","corto"]),sound:!0,best:{},av:{kit:"negro",hair:"corto",hairCol:"#2b1a10",cap:!1,scarf:!1}},Ms=Y("#c"),bs=new Wo({canvas:Ms,antialias:(devicePixelRatio||1)<2,powerPreference:"high-performance"});bs.setPixelRatio(Math.min(devicePixelRatio||1,ys?1.6:1.75));bs.shadowMap.enabled=!0;bs.shadowMap.type=sl;var ee=new qo,Ud=new Xo("#2b3152",80,230);ee.fog=Ud;var Vt=new en(50,1,.3,800),Ha=50;function yd(){let i=innerWidth,t=innerHeight;bs.setSize(i,t,!1),Vt.aspect=i/t,Ha=i<t?62:50,Vt.fov=Ha,Vt.updateProjectionMatrix(),kt==="pens"&&pp(),Dl(!1)}var gu=new re(new Hs(500,32,16),new Tn({side:Ke,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ot("#071027")},mid:{value:new Ot("#283567")},hor:{value:new Ot("#e7895b")}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 top,mid,hor;varying vec3 vP;void main(){float h=vP.y;vec3 c=h>.1?mix(mid,top,smoothstep(.1,.65,h)):mix(hor,mid,smoothstep(-.03,.1,h));gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}));ee.add(gu);{let t=new Float32Array(1260);for(let n=0;n<420;n++){let s=Math.random()*Math.PI*2,r=Lt(.18,1),a=Math.sqrt(1-r*r);t.set([Math.cos(s)*a*480,r*480,Math.sin(s)*a*480],n*3)}let e=new ze;e.setAttribute("position",new Ie(t,3)),gu.add(new kr(e,new zs({color:"#dfe6ff",size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8})))}ee.add(new tl("#9fb1ff","#24331f",1.15));var li=new el("#ffc48e",1.55);li.castShadow=!0;li.shadow.mapSize.set(ys?1024:2048,ys?1024:2048);Object.assign(li.shadow.camera,{left:-38,right:38,top:38,bottom:-38,near:1,far:160});li.shadow.bias=-8e-4;li.shadow.normalBias=.04;ee.add(li,li.target);var Iv=new C(-45,55,30),ia=(i,t)=>{li.target.position.set(i,0,t),li.position.copy(li.target.position).add(Iv)},Nd={uVisit:{value:0},uG1:{value:new Ot("#1f8a4c")},uG2:{value:new Ot("#23a057")},uR1:{value:new Ot("#b8282f")},uR2:{value:new Ot("#d93b3b")}};function Od(i){return i.onBeforeCompile=t=>{Object.assign(t.uniforms,Nd),t.vertexShader=`uniform float uVisit;uniform vec3 uG1,uG2,uR1,uR2;
`+t.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
#ifdef USE_COLOR
if(uVisit>.5){if(distance(vColor.rgb,uG1)<.03)vColor.rgb=uR1;else if(distance(vColor.rgb,uG2)<.03)vColor.rgb=uR2;}
#endif`)},i}var Pv=Od(new An({vertexColors:!0})),Lv=Od(new Be({vertexColors:!0})),xu=new Be({vertexColors:!0}),ri={solid:[],glow:[]},In=new Zt,Dv=new En,qs=new Sn,ll=new Sn,ds=new C,Te=new Ot,Zh=new C,Uv=new C(1,0,0),Ua=new C(1,1,1),Nv=new C(0,0,1),_u=new C(0,1,0);function Ov(i,t){Te.set(t);let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=Te.r,n[s*3+1]=Te.g,n[s*3+2]=Te.b;i.setAttribute("color",new Ie(n,3))}function Fd(i,t,e,n,s,r){let a=new wn(i,t,e);a.deleteAttribute("uv"),a.applyMatrix4(n),Ov(a,s),(r?ri.glow:ri.solid).push(a)}function Dn(i,t,e,n,s,r,a,o={}){qs.setFromEuler(Dv.set(o.rx||0,o.ry||0,o.rz||0,"YXZ")),ds.set(n,s,r),In.compose(ds,qs,Ua),Fd(i,t,e,In,a,o.glow)}var P=(i,t,e,n,s,r,a,o)=>Dn(i,t,e,n,s+t/2,r,a,o);function _n(i=ee,t={}){if(ri.solid.length){let e=new re($h(ri.solid),Pv);e.castShadow=t.shadow!==!1,e.receiveShadow=!0,i.add(e),ri.solid.forEach(n=>n.dispose())}if(ri.glow.length){let e=new re($h(ri.glow),t.glowMat||Lv);i.add(e),ri.glow.forEach(n=>n.dispose())}ri.solid=[],ri.glow=[]}var Ni=(i=!0)=>{let t=new ei;return t.visible=i,ee.add(t),t},Cl=[],$n=(i,t,e,n,s=40)=>Cl.push([i,t,e,n,s]),cs=[-92,92,-104,72];function ps(i,t,e=.45){if(i<cs[0]+2||i>cs[1]-2||t<cs[2]+2||t>cs[3]-2)return!0;for(let n of Cl)if(i>n[0]-e&&i<n[1]+e&&t>n[2]-e&&t<n[3]+e)return!0;return!1}var ki='"Big Shoulders Display","Arial Narrow",sans-serif';function Fv(i,t={}){let e=t.w||512,n=t.h||128,s=document.createElement("canvas");s.width=e,s.height=n;let r=s.getContext("2d");t.bg&&(r.fillStyle=t.bg,r.fillRect(0,0,e,n));let a=t.size||Math.round(n*.62);for(r.font=`900 ${a}px ${ki}`;r.measureText(i).width>e-36&&a>12;)a-=2,r.font=`900 ${a}px ${ki}`;r.textAlign="center",r.textBaseline="middle",r.fillStyle=t.fg||"#ffb21c",r.shadowColor=t.fg||"#ffb21c",r.shadowBlur=t.blur??14,r.fillText(i,e/2,t.sub?n*.4:n/2+2),t.sub&&(r.shadowBlur=0,r.font=`600 ${Math.round(n*.17)}px Barlow,sans-serif`,r.fillStyle="#e8ece4",r.fillText(t.sub,e/2,n*.8));let o=new ii(s);return o.colorSpace=Fe,o.anisotropy=4,o}function fn(i,t,e,n,s,r,a,o={},l=ee){let h=new re(new je(r,a),new Be({map:Fv(i,{w:512,h:Math.round(512*a/r),...o}),transparent:!o.bg,depthWrite:!!o.bg}));return h.position.set(t,e,n),h.rotation.y=s,l.add(h),h}function Bd(i,t,e,n,s=ee){let r=document.createElement("canvas");r.width=e,r.height=n;let a=new ii(r);a.colorSpace=Fe,a.anisotropy=4;let o=new re(new je(i,t),new Be({map:a}));return s.add(o),{m:o,c:r,x:r.getContext("2d"),t:a}}var zd=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new ii(i)})(),Kr=[],Ml=[];function Di(i,t,e,n,s="#ffe7b0",r=.9,a=ee){let o=new zr(new Fs({map:zd,color:s,transparent:!0,opacity:r,blending:Lr,depthWrite:!1}));return o.position.set(i,t,e),o.scale.set(n,n,1),a.add(o),o}var Xr=[["legL",[.27,.78,.3],[-.15,.8,0],[0,-.39,0],"pants","legL"],["legR",[.27,.78,.3],[.15,.8,0],[0,-.39,0],"pants","legR"],["shoeL",[.29,.14,.4],[-.15,.8,0],[0,-.74,.05],"shoe","legL"],["shoeR",[.29,.14,.4],[.15,.8,0],[0,-.74,.05],"shoe","legR"],["torso",[.68,.8,.38],[0,1.2,0],[0,0,0],"shirt",null],["stripe",[.7,.16,.4],[0,1.2,0],[0,.08,0],"stripe",null,"stripe"],["armL",[.21,.7,.25],[-.45,1.56,0],[0,-.32,0],"sleeve","armL"],["armR",[.21,.7,.25],[.45,1.56,0],[0,-.32,0],"sleeve","armR"],["handL",[.2,.17,.23],[-.45,1.56,0],[0,-.74,0],"skin","armL"],["handR",[.2,.17,.23],[.45,1.56,0],[0,-.74,0],"skin","armR"],["head",[.52,.52,.5],[0,1.6,0],[0,.3,0],"skin","head"],["hair",[.56,.17,.54],[0,1.6,0],[0,.62,-.01],"hair","head","!bald"],["hairB",[.56,.34,.14],[0,1.6,0],[0,.42,-.22],"hair","head","!bald"],["hairT",[.2,.26,.46],[0,1.6,0],[0,.8,-.02],"hair","head","crest"],["hairL",[.58,.64,.16],[0,1.6,0],[0,.2,-.24],"hair","head","long"],["eyeWL",[.14,.13,.03],[0,1.6,0],[-.11,.35,.255],"eyew","head"],["eyeWR",[.14,.13,.03],[0,1.6,0],[.11,.35,.255],"eyew","head"],["pupL",[.065,.09,.03],[0,1.6,0],[-.095,.345,.27],"eye","head"],["pupR",[.065,.09,.03],[0,1.6,0],[.125,.345,.27],"eye","head"],["browL",[.15,.04,.03],[0,1.6,0],[-.11,.45,.26],"brow","head"],["browR",[.15,.04,.03],[0,1.6,0],[.11,.45,.26],"brow","head"],["nose",[.08,.11,.07],[0,1.6,0],[0,.26,.275],"nose","head"],["mouth",[.17,.04,.03],[0,1.6,0],[0,.15,.255],"mouth","head"],["cap",[.6,.17,.58],[0,1.6,0],[0,.65,0],"cap","head","cap"],["capV",[.52,.06,.26],[0,1.6,0],[0,.59,.36],"cap","head","cap"],["scarf",[.74,.18,.44],[0,1.2,0],[0,.33,0],"scarf",null,"scarf"],["scarfE",[.16,.44,.07],[0,1.2,0],[.15,.06,.22],"scarf2",null,"scarf"]],Bv={sleeve:"shirt",stripe:"shirt",scarf2:"scarf",brow:"hair"},Md={eyew:"#f4f6f3",mouth:"#6b2a2a"},zv=new Set(["eyeWL","eyeWR","pupL","pupR","browL","browR","nose","mouth"]),Jh=new Ot;function kv(i,t){return i[t]?i[t]:Md[t]?Md[t]:t==="nose"?(Jh.set(i.skin||"#e0ac69"),Jh.multiplyScalar(.86),"#"+Jh.getHexString()):i[Bv[t]]||"#ff00ff"}var dl=new An,cl=new Zt,bd=new Zt,Sd=new Zt,bl=new Zt,Hv=new Zt,hs=new Zt().makeScale(0,0,0);function Vv(i,t,e){switch(i[5]){case"legL":return t.seat?-1.45:e;case"legR":return t.seat?-1.45:t.kick?-t.kick:-e;case"armL":return He(-e*.9,-2.85,t.up);case"armR":return He(e*.9,-2.85,t.upR??t.up);case"head":return t.head||0}return 0}function kd(i,t){let e=i[6];if(!e)return!0;let n=t.opt||{};return e[0]==="!"?!n[e.slice(1)]:!!n[e]}function Hd(i,t,e,n){let s=Vv(i,t,Math.sin(t.ph)*t.amp);return cl.makeTranslation(i[2][0],i[2][1],i[2][2]),s&&(bd.makeRotationX(s),cl.multiply(bd)),Sd.makeTranslation(i[3][0],i[3][1],i[3][2]),cl.multiply(Sd),n.multiplyMatrices(e,cl)}function vu(i,t){return qs.setFromAxisAngle(_u,i.ry),i.roll&&(ll.setFromAxisAngle(Nv,i.roll),qs.multiply(ll)),i.lean&&(ll.setFromAxisAngle(Uv,i.lean),qs.multiply(ll)),ds.set(i.x,i.y-(i.seat?.38:0),i.z),t.compose(ds,qs,Ua)}var Va=class{constructor(t){this.n=t,this.meshes=Xr.map(e=>{let n=new ni(new wn(...e[1]),dl,t);return n.instanceMatrix.setUsage(Wh),n.castShadow=!zv.has(e[0]),n.frustumCulled=!1,ee.add(n),n}),this.st=Array.from({length:t},()=>({x:0,y:0,z:0,ry:0,roll:0,ph:0,amp:0,seat:0,up:0,vis:!1,head:0,kick:0,opt:{}}))}colors(t,e){Xr.forEach((n,s)=>{let r=n[4];Te.set(kv(e,r)),this.meshes[s].setColorAt(t,Te)}),this.meshes.forEach(n=>{n.instanceColor.needsUpdate=!0})}set visible(t){this.meshes.forEach(e=>{e.visible=t})}update(){for(let t=0;t<this.n;t++){let e=this.st[t];if(!e.vis){this.meshes.forEach(n=>n.setMatrixAt(t,hs));continue}vu(e,bl);for(let n=0;n<Xr.length;n++){if(!kd(Xr[n],e)){this.meshes[n].setMatrixAt(t,hs);continue}this.meshes[n].setMatrixAt(t,Hd(Xr[n],e,bl,Hv))}}this.meshes.forEach(t=>{t.instanceMatrix.needsUpdate=!0})}};function Gv(i,t){let e=vu(i,new Zt);for(let n of Xr)kd(n,i)&&Fd(n[1][0],n[1][1],n[1][2],Hd(n,i,e,new Zt),t)}function yu(i,t="#ffb21c"){let e=document.createElement("canvas");e.width=360,e.height=72;let n=e.getContext("2d");n.font="700 30px Barlow,sans-serif";let s=Math.min(350,n.measureText(i).width+34);n.fillStyle="rgba(6,16,11,.82)",n.beginPath(),n.roundRect((360-s)/2,10,s,50,25),n.fill(),n.fillStyle=t,n.fillRect((360-s)/2+16,31,8,8),n.fillStyle="#f2f5ee",n.textAlign="center",n.textBaseline="middle",n.fillText(i,186,36);let r=new ii(e);r.colorSpace=Fe;let a=new zr(new Fs({map:r,depthTest:!1,transparent:!0}));return a.center.set(.5,0),a.scale.set(3.2,.65,1),a.renderOrder=10,ee.add(a),a}function Wv(i,t,e){let n=yu(t,e);i.material.map.dispose(),i.material.map=n.material.map,i.material.needsUpdate=!0,ee.remove(n)}function Vd(i){let t=new ei,e="#ffb21c",n="#ffd36b",s="#cfd6de",r="#f1f4f7",a="#1a1f24";if(i==="liga"){P(1.3,.35,1.3,0,0,0,a),P(.9,.25,.9,0,.35,0,e),P(.4,.8,.4,0,.6,0,n),[[.9,.35],[1.25,.35],[1.5,.4],[1.6,.3]].reduce((o,[l,h],c)=>(P(l,h,l,0,o,0,c>2?n:e),o+h),1.4);for(let o of[-1,1])P(.22,.85,.22,o*.98,1.85,0,e),P(.45,.2,.22,o*.8,2.55,0,e)}else if(i==="copa"){P(1.2,.5,1.2,0,0,0,"#3a2a1c"),P(1.22,.12,1.22,0,.25,0,"#d93b3b"),P(1.22,.1,1.22,0,.38,0,"#ffb21c"),P(.35,1,.35,0,.5,0,s),P(.7,.2,.7,0,1.5,0,r),[[.9,.4],[1.15,.5],[1.25,.5],[1.1,.3]].reduce((o,[l,h],c)=>(P(l,h,l,0,o,0,c&1?r:s),o+h),1.7),P(.5,.25,.5,0,3.4,0,r),P(.18,.25,.18,0,3.65,0,s);for(let o of[-1,1])P(.2,1.1,.2,o*1.05,1.9,0,s),P(.5,.2,.2,o*.85,2.95,0,s),P(.5,.2,.2,o*.85,1.8,0,s)}else{P(1.4,.5,1.4,0,0,0,a),P(.45,.8,.45,0,.5,0,s),[[.8,.3],[1.15,.4],[1.35,.5],[1.3,.4],[1.05,.3],[.9,.25]].reduce((o,[l,h],c)=>(P(l,h,l,0,o,0,c&1?r:s),o+h),1.3);for(let o of[-1,1])P(.22,1.6,.2,o*1.55,1.6,0,r),P(.85,.2,.2,o*1.13,3.1,0,r),P(.85,.2,.2,o*1.13,1.5,0,r)}return _n(t),t}var j={grass:"#2c5b31",stone:"#bfb8aa",stone2:"#b0a898",path:"#a39c8e",wall:"#e3ddd1",wall2:"#cfc8ba",slate:"#1c2723",dark:"#121a16",green:"#1f8a4c",green2:"#23a057",white:"#f2f5ee",amber:"#ffb21c",concrete:"#646c76",concrete2:"#575e67",wood:"#6b4a32",trunk:"#5b3c26",leaf:["#2f7a3c","#3a8c45","#276a33","#43974c"],win:"#ffd98a"},Mu=[[-3,3,-33,-13],[-17,-3,-28,-24],[3,17,-28,-24],[13,41,-3,3],[37,41,-21,27],[-41,-13,-3,3],[-41,-37,-3,30],[-3,3,13,38]],H=-62;function Xv(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.fillStyle=j.grass,t.fillRect(0,0,256,256);for(let r=0;r<2600;r++){t.fillStyle=["#2a5630","#30623a","#28512d","#336a3b"][r%4];let a=Lt(2,6);t.fillRect(Lt(0,256),Lt(0,256),a,a)}let e=new ii(i);e.wrapS=e.wrapT=ba,e.repeat.set(36,36),e.colorSpace=Fe,e.magFilter=nn;let n=new re(new je(260,260),new An({map:e}));n.rotation.x=-Math.PI/2,n.position.set(0,0,-16),n.receiveShadow=!0,ee.add(n);let s=new re(new je(1200,1200),new An({color:"#1d3b22"}));s.rotation.x=-Math.PI/2,s.position.y=-.05,ee.add(s)}function qv(){for(let e=-6;e<7;e++)for(let n=-6;n<7;n++)P(2,.08,2,e*2,0,n*2,e+n&1?j.stone:j.stone2);for(let[e,n,s,r]of Mu)P(n-e,.06,r-s,(e+n)/2,0,(s+r)/2,j.path),P(n-e+.4,.04,r-s+.4,(e+n)/2,0,(s+r)/2,"#7d776b");P(52,.05,6,-66,0,-44,"#2d3136");for(let e=-90;e<-42;e+=4)P(2,.02,.2,e,.05,-44,"#e8e2c8");P(10,.7,.6,0,0,-4.7,j.wall2),P(10,.7,.6,0,0,4.7,j.wall2),P(.6,.7,9.4,-4.7,0,0,j.wall2),P(.6,.7,9.4,4.7,0,0,j.wall2),P(8.8,.45,8.8,0,0,0,"#2f6f9e"),P(2.6,2.6,2.6,0,0,0,j.slate),P(3,.3,3,0,2.6,0,j.dark);let i="#ffb21c",t="#ffd36b";P(1.4,.35,1.4,0,2.9,0,i),P(.45,.9,.45,0,3.25,0,t),[[1,.35],[1.35,.35],[1.6,.4],[1.7,.3]].reduce((e,[n,s])=>(P(n,s,n,0,e,0,e>4.6?t:i),e+s),4.15),P(.25,.9,.25,-1.05,4.6,0,i),P(.25,.9,.25,1.05,4.6,0,i),P(.5,.22,.25,-.85,5.4,0,i),P(.5,.22,.25,.85,5.4,0,i),Di(0,5,0,7,"#ffcb6b",.55),$n(-5,5,-5,5,6);for(let[e,n,s]of[[-8.5,-11.5,0],[8.5,-11.5,0],[-8.5,11.5,0],[8.5,11.5,0],[-11.5,-6.5,Math.PI/2],[11.5,6.5,Math.PI/2]])Dn(2.6,.14,.7,e,.55,n,j.wood,{ry:s}),Dn(2.6,.6,.12,e-Math.sin(s)*.32,.9,n-Math.cos(s)*.32,j.wood,{ry:s}),Dn(.14,.5,.6,e-Math.cos(s)*1.1,.25,n+Math.sin(s)*1.1,j.dark,{ry:s}),Dn(.14,.5,.6,e+Math.cos(s)*1.1,.25,n-Math.sin(s)*1.1,j.dark,{ry:s});for(let[e,n,s,r]of[[-11.6,-11.6,1,"10"],[11.6,-11.6,.45,"7"],[-11.6,11.6,0,"4"]]){P(2,1.6,2,e,0,n,"#3a3f45"),P(2.2,.2,2.2,e,1.6,n,"#2a2e33");let a=Math.atan2(-e,-n);Gv({x:e,y:1.8,z:n,ry:a,roll:0,ph:0,amp:0,seat:0,up:s,upR:s||.6,head:s?-.25:0,kick:0,opt:{crest:r==="7"}},"#b5873c"),fn(`LEYENDA \xB7 ${r}`,e+Math.sin(a)*1.12,1,n+Math.cos(a)*1.12,a,1.8,.45,{bg:"#121a16",fg:"#ffb21c"}),Di(e,3,n,5,"#ffcb6b",.35),$n(e-1,e+1,n-1,n+1,3)}}function Wn(i,t){P(.22,4.2,.22,i,0,t,j.dark),P(.7,.2,.7,i,4.2,t,j.dark),P(.5,.28,.5,i,3.95,t,"#ffe2a3",{glow:!0}),Kr.push([i,t,9]),$n(i-.2,i+.2,t-.2,t+.2)}function Yv(){for(let i of[-15,-23,-31])Wn(-3.9,i),Wn(3.9,i);for(let i of[17,27,35])Wn(i,-3.9),Wn(i,3.9);for(let i of[-17,-27,-35])Wn(i,-3.9),Wn(i,3.9);for(let i of[18,27,35])Wn(-3.9,i),Wn(3.9,i);for(let i of[-12,10,19])Wn(36,i),Wn(-36,i);for(let[i,t]of[[-13.5,-13.5],[13.5,-13.5],[-13.5,13.5],[13.5,13.5]])Wn(i,t)}function Ci(i,t,e,n,s,r=j.win,a=2.2,o=1.2,l=1.1,h=.8){for(let c=i;c<=t+.01;c+=a){let u=Math.random()<h;s==="z"?Dn(o,l,.1,c,e,n,u?r:"#2a3340",{glow:u}):Dn(.1,l,o,n,e,c,u?r:"#2a3340",{glow:u})}}var Gd=[],Ed,ou,pl,lu,us,$r,Kh;function cu(i,t,e,n,s,r=!0){let a=i+e*1.6;for(let o of[-n/2,n/2])P(.14,s,.14,i,0,t+o,j.white),P(.1,.1,1.6,i+e*.8,s-.05,t+o,"#d8dbd4"),P(.1,s,.1,a,0,t+o,"#cfd2cb");if(P(.14,.14,n+.14,i,s,t,j.white),!!r){for(let o=0;o<=8;o++)P(.05,s,.05,a,0,t-n/2+o*n/8,"#d6d9d2");for(let o=1;o<4;o++)P(.05,.05,n,a,o*s/4,t,"#d6d9d2")}}var $v=new Be({color:"#eef1ea",wireframe:!0,transparent:!0,opacity:.5,depthWrite:!1}),Il=[];function Zv(i,t,e,n,s,r=1.6){let a=(h,c,u,f,p,g)=>{let x=new re(h,$v);return x.position.set(c,u,f),x.rotation.set(p,g,0),ee.add(x),x},o=a(new je(n,s,22,9),i+e*r,s/2,t,0,Math.PI/2);a(new je(r,n,6,22),i+e*r/2,s,t,-Math.PI/2,0);for(let h of[-1,1])a(new je(r,s,6,9),i+e*r/2,s/2,t+h*n/2,0,0);let l=o.geometry.attributes.position;Il.push({x:i,z:t,s:e,w:n,h:s,back:o,base:Float32Array.from(l.array),hit:null})}function Wd(i,t,e){let n=Il.slice().sort((s,r)=>Math.abs(s.x-i)-Math.abs(r.x-i))[0];n&&(n.hit={t0:performance.now(),u:e-n.z,v:t})}function Jv(){let i=performance.now();for(let t of Il){if(!t.hit)continue;let e=(i-t.hit.t0)/1e3,n=t.back.geometry.attributes.position,s=n.array;if(e>1.6){s.set(t.base),n.needsUpdate=!0,t.hit=null;continue}let r=.75*Math.exp(-e*2.6)*(.55+.45*Math.cos(e*9));for(let a=0;a<s.length;a+=3){let o=-t.base[a]-t.hit.u,l=t.base[a+1]+t.h/2-t.hit.v,h=Math.exp(-(o*o+l*l)/.9);s[a+2]=t.base[a+2]+h*r*t.s}n.needsUpdate=!0}}function jh(i,t,e,n,s,r,a,o){let l=n==="E"||n==="W",h=l?e-H:i;P(l?.5:.72,.34,l?.72:.5,i,t,e,Math.abs(h)%9<1||o===a-1?j.white:o&1?j.green:j.green2),Gd.push([i,t+.2,e,s,n,r])}function Kv(){P(64,.1,48,0,0,H,"#1d4f2a");for(let n=0;n<10;n++)P(4.6,.04,30,-20.7+n*4.6,.1,H,n&1?"#2f8f45":"#2a8240");let i=(n,s,r,a,o)=>P(n,.03,s,r,.14,a,j.white,o);i(46,.14,0,H-15),i(46,.14,0,H+15),i(.14,30,-23,H),i(.14,30,23,H),i(.14,30,0,H);for(let n=0;n<32;n++){let s=n/32*Math.PI*2;i(.9,.14,Math.cos(s)*4.4,H+Math.sin(s)*4.4,{ry:-s+Math.PI/2})}for(let n of[-1,1])i(.14,17.6,n*15.8,H),i(7.2,.14,n*19.4,H-8.8),i(7.2,.14,n*19.4,H+8.8),i(.14,8,n*20.6,H),i(2.4,.14,n*21.8,H-4),i(2.4,.14,n*21.8,H+4),cu(n*23,H,n,6.4,2.3,!1),Zv(n*23,H,n,6.4,2.3);let t=(n,s)=>{for(let r=0;r<s;r++){let a=.6+r*.6;if(n==="S"||n==="N"){let o=n==="S"?H+20.5+r:H-20.5-r;P(56,a,1,0,0,o,r&1?j.concrete:j.concrete2);for(let l=-27;l<=27;l+=1)n==="S"&&(r>=4&&Math.abs(l)<7||r<5&&Math.abs(l+9.5)<2.4)||jh(l,a,o+(n==="S"?-.12:.12),n,n==="S"?Math.PI:0,!1,s,r)}else{let o=n==="E"?28.5+r:-28.5-r;P(1,a,40,o,0,H,r&1?j.concrete:j.concrete2);for(let l=H-19;l<=H+19;l+=1)jh(o+(n==="E"?.12:-.12),a,l,n,n==="E"?-Math.PI/2:Math.PI/2,!1,s,r)}}};t("S",8),t("N",10),t("E",8),t("W",8);for(let n of[-1,1])P(8.5,5.4,8.6,n*32.5,0,H+24.4,j.concrete2),P(8.5,6.6,10.6,n*32.5,0,H-25.4,j.concrete2);P(75,6.2,.8,0,0,H+28.8,j.wall2),P(75,13,.8,0,0,H-30.8,j.wall2),P(.8,7,60,-37.1,0,H-1,j.wall2),P(.8,7,60,37.1,0,H-1,j.wall2);for(let n=-35;n<=35;n+=5)P(.9,6.4,.5,n,0,H+29.3,n/5&1?j.green:j.slate);P(75,.22,.2,0,6,H+29.3,j.amber,{glow:!0});for(let n of[-1,1]){P(.2,.22,60,n*37.6,6.8,H-1,j.amber,{glow:!0});for(let s=H-28;s<=H+26;s+=6)P(.5,7.1,.9,n*37.6,0,s,j.slate)}P(8,4.6,.5,0,0,H+29.3,j.dark),P(8.8,.5,1.2,0,4.6,H+29.5,j.amber);for(let n=-3.4;n<=3.5;n+=1.13)P(.12,4.4,.12,n,0,H+29.6,"#8a8f96");P(76,.5,11,0,12.6,H-25.6,j.slate),P(76,.3,.3,0,12.4,H-20.2,j.amber,{glow:!0});for(let n=-36;n<=36;n+=12)P(.6,12.6,.6,n,0,H-30.3,j.slate);P(4,3.4,5,-9.5,0,H+22.6,j.slate),P(2.6,2.5,.1,-9.5,0,H+20.06,"#05070a"),P(4.2,.25,.2,-9.5,3.4,H+20.1,j.amber,{glow:!0}),P(.2,3.4,.2,-11.5,0,H+20.1,j.amber,{glow:!0}),P(.2,3.4,.2,-7.5,0,H+20.1,j.amber,{glow:!0}),P(14,5.3,4.2,0,0,H+26.1,j.slate),P(14,.3,4.6,0,8.7,H+26.1,j.dark),P(14,3.4,.3,0,5.3,H+28.05,j.wood),P(.3,3.4,4.2,-6.85,5.3,H+26.1,j.dark),P(.3,3.4,4.2,6.85,5.3,H+26.1,j.dark),P(13.4,.12,3.9,0,5.3,H+26.1,"#3b2a22"),P(13.6,.5,.25,0,5.3,H+24.1,j.dark),P(13.6,.1,.3,0,5.8,H+24.1,j.amber,{glow:!0});for(let n of[-4.8,-3.2,3.2,4.8])P(1.1,.55,1,n,5.42,H+25.4,"#8e1f26"),P(1.1,1,.3,n,5.42,H+26,"#8e1f26");let e=new re(new je(13.6,2.9),new Be({color:"#9fd3ff",transparent:!0,opacity:.1,depthWrite:!1,side:hn}));e.position.set(0,7.25,H+24.05),ee.add(e),fn("PALCO VIP",0,9.2,H+23.82,Math.PI,5,.9,{bg:"#121a16",fg:"#ffb21c"}),fn("ESTADIO",0,9.6,H+30.2,0,16,3.2,{bg:null,fg:"#ffb21c",sub:"LIGA DE AMIGOS"}),$n(-37.6,37.6,H-31.4,H+29.6,14),Kr.push([0,H+32,16]),_n(),Ed=Ni();for(let[n,s]of[[-41,H+31],[41,H+31],[-41,H-33],[41,H-33]]){P(.9,25,.9,n,0,s,"#3b444c");let r=Math.atan2(-n,H-s);Dn(5.4,3.4,.5,n,25.6,s,"#2a3138",{ry:r,rx:.45}),Dn(4.8,2.8,.2,n-Math.sin(r)*.3,25.6,s-Math.cos(r)*.3,"#fffbe8",{ry:r,rx:.45,glow:!0}),Ml.push(Di(n-Math.sin(r)*1,25.6,s-Math.cos(r)*1,16,"#fff3d6",.75)),$n(n-.6,n+.6,s-.6,s+.6)}for(let[n,s]of[[44,-30.5],[80.5,-30.5],[44,-5.5],[80.5,-5.5]])P(.4,9,.4,n,0,s,"#3b444c"),P(1.6,.7,.3,n,9,s,"#fffbe8",{glow:!0}),Ml.push(Di(n,9.3,s,7,"#fff3d6",.6));_n(Ed,{glowMat:xu}),ou=Ni(!1);for(let n of[-1,1]){P(10.6,.5,62,n*32.6,12.6,H-1,j.slate),P(.3,.3,62,n*27.4,12.4,H-1,j.amber,{glow:!0});for(let s=H-30;s<=H+28;s+=12)P(.6,5.8,.6,n*37.9,7,s,j.slate)}_n(ou),pl=Ni(!1);for(let n of[-1,1]){for(let s=0;s<6;s++){let r=n*(31.2+s),a=7.6+s*.6;P(1,a-5,40,r,5,H,s&1?j.concrete:j.concrete2);for(let o=H-19;o<=H+19;o+=1)jh(r-n*.12,a,o,n>0?"E":"W",n>0?-Math.PI/2:Math.PI/2,!0,6,s)}P(.8,5.6,60,n*37.1,7,H-1,j.wall2),P(.2,.22,60,n*37.6,12.4,H-1,j.amber,{glow:!0})}_n(pl);for(let[n,s,r]of[[-31,H+23.5,Math.PI*.75],[31,H+23.5,-Math.PI*.75]]){let a=fn("LIGA DE AMIGOS",n,8.6,s,r,7,3,{bg:"#05080a",fg:"#4bd474",sub:"TEMPORADA 1"},pl);a.material.side=hn}}function jv(i,t,e=1){P(.5*e,2*e,.5*e,i,0,t,j.trunk);let n=zi(j.leaf),s=zi(j.leaf);P(2.6*e,1.6*e,2.6*e,i,1.8*e,t,n),P(1.9*e,1.2*e,1.9*e,i+Lt(-.2,.2),3.3*e,t+Lt(-.2,.2),s),P(1*e,.8*e,1*e,i,4.4*e,t,n),$n(i-.4,i+.4,t-.4,t+.4)}function Ws(i,t,e,n,s,r,a={}){P(e,s,n,i,0,t,r),P(e+.3,.35,n+.3,i,s,t,a.trim||j.slate),P(e+.06,.6,n+.06,i,0,t,a.base||j.green),$n(i-e/2,i+e/2,t-n/2,t+n/2,s+1)}function Wr(i,t,e,n=2,s=2.8,r=j.dark){e==="x"?P(.2,s,n,i,0,t,r):P(n,s,.2,i,0,t,r)}var hu=[{k:"liga",x:-7.4,label:"LIGA"},{k:"copa",x:-4.9,label:"COPA"},{k:"champions",x:4.9,label:"CHAMPIONS"},{k:null,x:7.4,label:"\xBFPR\xD3XIMO?"}];function Qv(){Ws(-26,-26,12,7,4.6,j.wall),Wr(-19.95,-26,"x",2.2,3),Ci(-28.5,-23.5,3,-19.95,"x",j.win,2.5,1.4,.8,1),Ci(-30,-22,3,-22.45,"z","#bfe6ff",2.6,1.6,.7,1),fn("VESTUARIO",-19.75,5.4,-26,Math.PI/2,6.5,1.3,{bg:"#121a16"}),Ws(26,-26,12,7,4.6,"#dfe3e8",{base:j.slate}),Wr(19.95,-26,"x",2.2,3,"#22303d"),Ci(-28.5,-23.5,3,19.95,"x","#cfe6ff",2.5,1.4,.8,1);for(let c=0;c<5;c++)P(1.1,.6,.1,22+c*2,3.4,-22.45,c&1?j.amber:j.green);fn("SALA DE PRENSA",19.75,5.4,-26,-Math.PI/2,7,1.3,{bg:"#121a16"}),Ws(-50,0,14,10,7,j.wall),Wr(-42.95,0,"x",2.4,3.2);for(let c of[-3.6,3.6])P(.15,3,3.6,-42.9,.7,c,"#ffe6b0",{glow:!0});for(let c=0;c<8;c++)Dn(.9,.14,1.3,-42.3,4.15-(c&1)*.02,-5+c*1.3+.65,c&1?j.white:j.green,{rz:-.35});fn("TIENDA DEL CLUB",-42.85,5.6,0,Math.PI/2,9,1.6,{bg:"#121a16",fg:"#ffb21c"}),Ws(-50,26,12,9,5.6,"#7a3b2e",{base:"#3d1f19",trim:"#2b1713"}),Wr(-43.95,26,"x",2,2.8,"#2b1713"),Ci(22.4,29.6,1.8,-43.95,"x","#ffc46e",3.6,2.2,1.6,1),fn("BAR EL C\xD3RNER",-43.8,4.4,26,Math.PI/2,8,1.5,{bg:null,fg:"#4bd474"});for(let[c,u]of[[-41,23],[-40.6,28.5]]){P(1.4,.1,1.4,c,.8,u,j.wood),P(.15,.8,.15,c,0,u,j.dark),P(.1,2.4,.1,c,.9,u,j.dark),P(2.8,.22,2.8,c,3.2,u,"#d94a3a"),P(2.2,.16,2.2,c,3.42,u,"#f2f5ee");for(let f of[-.9,.9])P(.55,.45,.55,c+f,0,u,j.wood),P(.55,.6,.1,c+f,.45,u+(f<0?-.25:.25),j.wood)}for(let c=0;c<=10;c++)Dn(.18,.18,.18,-43.6,3.9-Math.sin(c/10*Math.PI)*.5,21.5+c*.9,c%3?"#ffd98a":"#ff8a5c",{glow:!0});Kr.push([-41,26,9]),Ws(48,24,12,12,18,j.slate,{base:j.dark,trim:j.amber});for(let c=2.4;c<17;c+=2.4)Ci(43.4,52.6,c,17.95,"z",j.win,1.6,1.1,1.3,.55),Ci(19.4,28.6,c,41.95,"x",j.win,1.6,1.1,1.3,.55);Wr(41.95,24,"x",2.6,3.2,"#2a3340"),P(3,.3,4,40.6,3.4,24,j.amber),fn("OFICINAS",41.8,17.2,24,-Math.PI/2,9,1.8,{bg:null,fg:"#ffb21c"}),Ws(0,46,18,10,7.5,"#f0ebe0",{base:"#d8d1c2",trim:"#cfc6b4"});for(let c=-7.5;c<=7.6;c+=2.5)P(.8,6.8,.8,c,.4,40.6,"#fbf8f1");P(19,.7,2.2,0,7.2,40.9,"#e8e1d2"),P(19.4,.4,2.6,0,0,40.9,"#d8d1c2"),Wr(0,40.95,"z",3,4,"#2a1f12"),P(2.6,3.6,.1,0,.2,40.84,"#ffd98a",{glow:!0}),fn("SALA DE TROFEOS",0,8.55,39.75,Math.PI,10,1.6,{bg:"#121a16",fg:"#ffb21c"}),P(1.2,.3,1.2,0,7.85,46,"#ffb21c"),P(.4,.8,.4,0,8.15,46,"#ffd36b"),P(1.2,.9,1.2,0,8.95,46,"#ffb21c"),Di(0,9.4,46,6,"#ffcb6b",.5);for(let c of hu)P(1.5,1.1,1.5,c.x,0,38.2,j.slate),P(1.6,.1,1.6,c.x,1.1,38.2,j.amber),fn(c.label,c.x,.62,37.43,0,1.4,.32,{bg:"#121a16",fg:"#ffb21c"}),$n(c.x-.8,c.x+.8,37.4,39,3);let i=44,t=80,e=-29,n=-7;P(t-i,.06,n-e,(i+t)/2,0,(e+n)/2,"#2f8a43");for(let c=0;c<9;c++)P(4,.02,n-e-1,i+2+c*4,.06,(e+n)/2,c&1?"#2f8a43":"#2b7f3e");let s=(c,u,f,p)=>P(c,.02,u,f,.09,p,j.white);s(34,.12,62,e+1),s(34,.12,62,n-1),s(.12,20,45,-18),s(.12,20,78,-18),s(.12,20,62,-18),s(.12,12,71.5,-18),s(6.5,.12,74.75,-24),s(6.5,.12,74.75,-12),P(.3,.03,.3,71,.09,-18,j.white),cu(78,-18,1,9,3),cu(46,-18,-1,5,2);for(let[c,u,f,p]of[[i,t,e,e],[i,t,n,n],[t+.6,t+.6,e,n],[i,i,e,-20.2],[i,i,-15.8,n]]){let g=Math.hypot(u-c,p-f),x=c===u?"z":"x";for(let m=0;m<=g;m+=3)P(.15,1.2,.15,x==="x"?c+m:c,0,x==="z"?f+m:f,"#c7ccd1");x==="x"?(P(g,.1,.08,(c+u)/2,1.1,f,"#c7ccd1"),P(g,.1,.08,(c+u)/2,.6,f,"#c7ccd1"),$n(c,u,f-.25,f+.25,1.3)):(P(.08,.1,g,c,1.1,(f+p)/2,"#c7ccd1"),P(.08,.1,g,c,.6,(f+p)/2,"#c7ccd1"),$n(c-.25,c+.25,f,p,1.3))}for(let c=0;c<4;c++)P(.6,1.9,.3,57,0,-27.5+c*.75,"#f5d238"),P(.4,.4,.3,57,1.9,-27.5+c*.75,"#f5d238");for(let c=0;c<6;c++)P(.42,.42,.42,49+c%3*.5,0,-27+(c/3|0)*.5,j.white);Ws(60,-37,22,7,5,j.wall),Ci(51,69,2.6,-33.45,"z","#bfe6ff",3,2,1.4,1),fn("CIUDAD DEPORTIVA",60,6.1,-33.3,0,12,1.6,{bg:"#121a16",fg:"#ffb21c"}),Kr.push([62,-18,30]),$n(-54.5,-43.5,-46.5,-41.5,4.5);let r=[[-17,17,-17,17],[-42,42,-98,-26],[-60,-40,-8,33],[-35,-15,-33,-18],[15,35,-33,-18],[36,58,14,34],[-12,12,36,55],[40,84,-45,-2],[-95,-40,-50,-38]],a=(c,u)=>r.some(f=>c>f[0]&&c<f[1]&&u>f[2]&&u<f[3])||Mu.some(f=>c>f[0]-2.5&&c<f[1]+2.5&&u>f[2]-2.5&&u<f[3]+2.5),o=0,l=0;for(;o<120&&l++<3e3;){let c=Lt(-86,86),u=Lt(-98,66);a(c,u)||ps(c,u,2.2)||(jv(c,u,Lt(.85,1.25)),o++)}for(let c=-90;c<=90;c+=3)P(3,1.2,1.4,c,0,cs[2]+1,"#24502b"),P(3,1.2,1.4,c,0,cs[3]-1,"#24502b");for(let c=-102;c<=70;c+=3)c>-48&&c<-40||(P(1.4,1.2,3,cs[0]+1,0,c,"#24502b"),P(1.4,1.2,3,cs[1]-1,0,c,"#24502b"));_n(),lu=Ni();for(let c of[-19,-27])for(let u of[-1,1])P(.15,6,.15,u*5.2,0,c,"#8a8f96"),P(.08,2.6,1.4,u*5.2,3.1,c+.75,c===-19?j.green:j.white);for(let[c,u]of[[-13.5,-10],[13.5,-10],[-13.5,10],[13.5,10]])P(.15,6,.15,c,0,u,"#8a8f96"),P(1.4,2.4,.08,c+.75,3.3,u,c>0==u>0?j.green:j.white);for(let c=-30;c<=30;c+=3)Dn(.5,.9,.05,c,7.3,H+29.75,c/3&1?j.green:j.white);_n(lu),us=Ni(),P(11,3.2,3,0,.5,0,j.green),P(11.1,.5,3.1,0,3.6,0,j.white),Ci(-4.5,4.5,2.6,1.55,"z","#bfe6ff",1.5,1.2,.9,1),Ci(-4.5,4.5,2.6,-1.55,"z","#bfe6ff",1.5,1.2,.9,1),P(.1,1.6,2.6,5.5,1.6,0,"#bfe6ff",{glow:!0}),P(.1,.3,.5,5.55,.9,1,"#fff6d8",{glow:!0}),P(.1,.3,.5,5.55,.9,-1,"#fff6d8",{glow:!0});for(let c of[-3.5,3.5])for(let u of[-1.6,1.6])P(1,1,.4,c,0,u,"#111");_n(us),fn("LIGA DE AMIGOS",0,2.2,1.56,0,5,.8,{bg:"#1f8a4c",fg:"#f2f5ee",blur:0},us),us.position.set(-49,0,-44),Kh=Ni();let h=new An({color:"#cfe8ff",transparent:!0,opacity:.16,depthWrite:!1});for(let c of hu){let u=new re(new wn(1.3,1.7,1.3),h);u.position.set(c.x,2.05,38.2),Kh.add(u),c.slot=new ei,c.slot.position.set(c.x,1.25,38.2),c.slot.scale.setScalar(.4),Kh.add(c.slot)}}function ty(){let i=new je(1,1);i.rotateX(-Math.PI/2);let t=new ni(i,new Be({map:zd,color:"#ffcf7a",transparent:!0,opacity:.32,blending:Lr,depthWrite:!1}),Kr.length);Kr.forEach(([e,n,s],r)=>{In.compose(ds.set(e,.12,n),qs.identity(),new C(s,1,s)),t.setMatrixAt(r,In)}),t.renderOrder=2,t.frustumCulled=!1,ee.add(t)}function bu(){let i=wt.visit?new Set(["copa"]):wt.won;for(let t of hu)t.slot.clear(),t.k&&i.has(t.k)&&t.slot.add(Vd(t.k))}var Pl=document.createElement("canvas");Pl.width=768;Pl.height=240;var Su=new ii(Pl);Su.colorSpace=Fe;function ms(i,t,e){let n=Pl.getContext("2d");n.fillStyle="#05080a",n.fillRect(0,0,768,240),n.strokeStyle="#ffb21c",n.lineWidth=6,n.strokeRect(6,6,756,228),n.textAlign="center",n.textBaseline="middle",n.fillStyle="#9fb1a5",n.font="700 30px Barlow,sans-serif",n.fillText(i,384,46),n.fillStyle="#f2f5ee",n.font=`900 96px ${ki}`,n.fillText(t,384,128),n.fillStyle="#ffb21c",n.font=`800 34px ${ki}`,n.fillText(e,384,200),Su.needsUpdate=!0}var Xd=()=>wt.visit?ms("CIUDAD DE TU AMIGO","BIENVENIDO","VISITANTE"):wt.md?ms("HOY \xB7 D\xCDA DE PARTIDO","T\xDA  vs  AMIGO","20:00"):ms("PR\xD3XIMO PARTIDO","T\xDA  vs  AMIGO","S\xC1BADO \xB7 20:00"),Nn=[{id:"estadio",name:"Estadio",short:"Estadio",icon:"nav-liga",door:[0,-29.5],node:"stadium",k:"D\xEDa de partido",look:[0,-1],text:"Aqu\xED se juegan los partidos y se celebran los t\xEDtulos. Lo ves todo desde el palco VIP; si juegas contra tu amigo, est\xE1is los dos en el palco.",acts:[["Ver partido desde el palco","match"],["Celebrar la Liga","cel:liga"],["Celebrar la Copa","cel:copa"],["Celebrar la Champions","cel:champions"]]},{id:"entreno",name:"Ciudad de entrenamiento",short:"Entreno",icon:"diana",door:[40.5,-18],node:"entreno",k:"Minijuegos",look:[1,0],text:"Elige un minijuego. En el juego real dar\xEDan un premio peque\xF1o una vez al d\xEDa.",acts:[["Penaltis","tr:pen"],["Tiros libres","tr:falta"],["Precisi\xF3n","tr:diana"],["Regate entre conos","drill"]]},{id:"vestuario",name:"Vestuario",short:"Vestuario",icon:"pizarra",door:[-17,-26],node:"vest",k:"Pizarra t\xE1ctica",look:[-1,0],text:"La pizarra del m\xEDster: alineaci\xF3n, formaci\xF3n, mentalidad y presi\xF3n.",acts:[["Abrir alineaci\xF3n","soon:Alineaci\xF3n"]]},{id:"prensa",name:"Sala de prensa",short:"Prensa",icon:"periodico",door:[17,-26],node:"prensa",k:"Rueda de prensa",look:[1,0],text:"Antes del derbi te hacen tres preguntas. Lo que contestes lo publicar\xEDa el bot en el grupo.",acts:[["Empezar rueda de prensa","press"]]},{id:"tienda",name:"Tienda del club",short:"Tienda",icon:"sobre-oro",door:[-39.5,0],node:"tienda",k:"Ropa, sobres y ruleta",look:[-1,0],text:"Personaliza tu personaje con tokens: equipaciones, peinados, gorra y bufanda.",acts:[["Personalizar mi personaje","shop"],["Ver sobres","soon:Sobres"]]},{id:"bar",name:"Bar El C\xF3rner",short:"Bar",icon:"periodico",door:[-39.5,26],node:"bar",k:"Noticias de la liga",look:[-1,0],text:"En la tele del bar salen las noticias que manda el bot, los resultados y los rumores de fichajes.",extra:'<ul><li><b>FICHAJE</b> \xB7 Racing Niebla paga 26 M\u20AC por un portero</li><li><b>DERBI</b> \xB7 Esta noche, tu equipo contra el de tu amigo</li><li><b>RULETA</b> \xB7 Alguien se ha llevado un sobre de oro</li></ul><p class="note">Titulares de ejemplo.</p>',acts:[]},{id:"oficina",name:"Oficinas del club",short:"Oficinas",icon:"finanzas",door:[39,24],node:"oficina",k:"Despacho del presidente",look:[1,0],text:"Sorteos, mejoras del estadio, finanzas y mercado.",acts:[["Sorteo de Champions","draw:champions"],["Sorteo de Copa","draw:copa"],["Mejorar estadio","lvl"]]},{id:"museo",name:"Sala de trofeos",short:"Trofeos",icon:"vitrina",door:[0,37.5],node:"museo",k:"Historia del club",look:[0,1],text:"Las vitrinas de la entrada se llenan con cada t\xEDtulo que celebras en el estadio. Las estatuas de la plaza son tus leyendas.",acts:[]}],ey=new jo;function ny(){let i=new ks(1.15,1.55,40);i.rotateX(-Math.PI/2);for(let t of Nn){let e=new re(i,new Be({color:"#ffb21c",transparent:!0,opacity:.8,depthWrite:!1}));e.position.set(t.door[0],.16,t.door[1]),ee.add(e),t.ring=e;let n=ey.load(`img/${t.icon}.webp`);n.colorSpace=Fe;let s=new zr(new Fs({map:n,transparent:!0}));s.scale.set(2.2,2.2,1),s.position.set(t.door[0],5.2,t.door[1]),ee.add(s),t.icon3d=s}}var Ys={pN:[0,-10],pNE:[8,-8],pE:[10,0],pSE:[8,8],pS:[0,10],pSW:[-8,8],pW:[-10,0],pNW:[-8,-8],n1:[0,-22],stadium:[0,-29.5],vest:[-17,-26],prensa:[17,-26],e1:[39,0],entreno:[40.5,-18],oficina:[39,24],tienda:[-39.5,0],bar:[-39.5,26],museo:[0,37.5]},iy=[["pN","pNE"],["pNE","pE"],["pE","pSE"],["pSE","pS"],["pS","pSW"],["pSW","pW"],["pW","pNW"],["pNW","pN"],["pN","n1"],["n1","stadium"],["n1","vest"],["n1","prensa"],["pE","e1"],["e1","entreno"],["e1","oficina"],["pW","tienda"],["tienda","bar"],["pS","museo"]],Xs={};for(let[i,t]of iy)(Xs[i]||(Xs[i]=[])).push(t),(Xs[t]||(Xs[t]=[])).push(i);function sy(i,t,e,n){let s=Math.hypot(e-i,n-t),r=Math.ceil(s);for(let a=1;a<r;a++)if(ps(He(i,e,a/r),He(t,n,a/r),.3))return!1;return!0}function uu(i,t,e){let n=null,s=1e9;for(let l in Ys){let[h,c]=Ys[l],u=Math.hypot(h-i,c-t);u<s&&sy(i,t,h,c)&&(s=u,n=l)}if(!n)return[Ys[e]];let r={[n]:null},a=[n];for(;a.length;){let l=a.shift();if(l===e)break;for(let h of Xs[l]||[])h in r||(r[h]=l,a.push(h))}let o=[];for(let l=e;l;l=r[l])o.unshift(Ys[l]);return o}var $t=new Va(28),ci=0,hi=1,qa=[20,21,22,23],Ya=24,ui=["#f1c7a1","#d9a47b","#b07850","#8a5a3b","#f5d3b8"],Hi=["#2b1a10","#5b3a1e","#111","#a86a2c","#d9b36b"];function Eu(i,t,e,n,s){return $t.colors(i,{eye:"#141414",shoe:"#f2f5ee",cap:"#111",scarf:j.green,scarf2:j.white,...n}),Object.assign($t.st[i],{x:t,z:e,vis:!0}),{i,x:t,z:e,ry:Math.PI,speed:s,base:s,path:[],wait:Lt(0,3),ph:0}}var nt=Eu(ci,0,13,{},7.5),Re=Eu(hi,-8,16,{shirt:"#d93b3b",pants:"#1c1c1c",skin:ui[0],hair:Hi[3]},5),fi=[];for(let i=2;i<20;i++){let t=Math.random()<.7,e,n;do e=Lt(-12,12),n=Lt(-12,12);while(ps(e,n,.8));let s=Eu(i,e,n,{shirt:t?i&1?"#1f9d55":"#f2f5ee":"#d93b3b",pants:["#24324a","#1c1c1c","#4a3b2a","#2f3a2f"][i%4],skin:ui[i%5],hair:Hi[i*3%5],shoe:["#f2f5ee","#222","#ffb21c"][i%3],scarf:t?j.green:"#d93b3b",scarf2:t?j.white:"#111"},Lt(2.4,3.4));$t.st[i].opt={scarf:Math.random()<.5,cap:Math.random()<.2},fi.push(s)}for(let i of[...qa,Ya])$t.st[i].vis=!1;$t.colors(Ya,{shirt:"#f5d238",pants:"#151515",skin:ui[2],hair:Hi[2],shoe:"#151515",eye:"#141414"});qa.forEach((i,t)=>$t.colors(i,{shirt:"#d93b3b",pants:"#151515",skin:ui[t%5],hair:Hi[t%5],shoe:"#f2f5ee",eye:"#141414"}));var sa=yu("T\xFA \xB7 Entrenador","#1f9d55"),er=yu("Tu amigo","#d93b3b"),wu={negro:{n:"Chaqueta de m\xEDster",price:0,c:{shirt:"#14181a",pants:"#14181a",shoe:"#ffffff"}},local:{n:"Equipaci\xF3n local",price:0,c:{shirt:"#1f9d55",pants:"#f2f5ee",shoe:"#151515"}},visit:{n:"Equipaci\xF3n visitante",price:2,c:{shirt:"#f2f5ee",pants:"#1f9d55",shoe:"#151515",stripe:"#1f9d55"},opt:{stripe:!0}},retro:{n:"Camiseta retro",price:3,c:{shirt:"#1f9d55",stripe:"#f2f5ee",pants:"#151515",shoe:"#f2f5ee"},opt:{stripe:!0}},chandal:{n:"Ch\xE1ndal del club",price:3,c:{shirt:"#151a1d",sleeve:"#1f9d55",pants:"#151a1d",shoe:"#f2f5ee",stripe:"#ffb21c"},opt:{stripe:!0}},traje:{n:"Traje de presidente",price:5,c:{shirt:"#1d2a44",pants:"#1d2a44",shoe:"#2a1a10",stripe:"#f2f5ee"},opt:{stripe:!0}}},Tu={corto:{n:"Corto",price:0},cresta:{n:"Cresta",price:2,opt:{crest:!0}},largo:{n:"Melena",price:2,opt:{long:!0}},rapado:{n:"Rapado",price:1,opt:{bald:!0}}},qd={gorra:{n:"Gorra del club",price:2,key:"cap"},bufanda:{n:"Bufanda del club",price:2,key:"scarf"}};function Sl(){let i=wu[wt.av.kit],t=Tu[wt.av.hair];$t.colors(ci,{skin:ui[1],hair:wt.av.hairCol,eye:"#141414",cap:j.green,scarf:j.green,scarf2:j.white,...i.c}),$t.st[ci].opt={...i.opt||{},...t.opt||{},cap:wt.av.cap,scarf:wt.av.scarf}}Sl();function ry(i,t,e,n){let s=t-i.x,r=e-i.z,a=Math.hypot(s,r);if(a<.35)return!0;let o=Math.min(i.speed*n,a),l=i.x+s/a*o,h=i.z+r/a*o;if(!ps(l,h))i.x=l,i.z=h;else if(!ps(l,i.z))i.x=l;else if(!ps(i.x,h))i.z=h;else if(i.stuck=(i.stuck||0)+n,i.stuck>.4)return i.stuck=0,!0;return i.ry=Math.atan2(s,r),i.moving=!0,!1}function Na(i,t){if(i.moving=!1,i.path.length&&(ry(i,i.path[0][0],i.path[0][1],t)&&i.path.shift(),!i.path.length&&i.onArrive)){let n=i.onArrive;i.onArrive=null,n()}let e=$t.st[i.i];e.amp=He(e.amp,i.moving?i.speed>5?.95:.6:0,Math.min(1,t*10)),i.moving&&(i.ph+=t*i.speed*2.1),e.ph=i.ph,e.x=i.x,e.z=i.z,e.y=i.moving&&i.speed>5?Math.abs(Math.sin(i.ph))*.12:0,e.ry=tr(e.ry,i.ry,Math.min(1,t*12))}var Yd=["pS","pW","pE","museo","tienda","oficina","bar","pSE","pSW"];function wd(i,t){if(i.inside>0){if(i.inside-=t,i.inside<=0){let[e,n]=Ys[zi(Yd)];i.x=e+Lt(-1,1),i.z=n+Lt(-1,1),$t.st[i.i].vis=kt==="city",i.wait=Lt(0,2)}return}i.path.length||(i.wait-=t,!(i.wait>0)&&(wt.md&&i!==Re&&Math.random()<.7?(i.path=uu(i.x,i.z,"stadium").map(([e,n])=>[e+Lt(-1.5,1.5),n+Lt(-1,.3)]),i.onArrive=()=>{$t.st[i.i].vis=!1,i.inside=Lt(3,9)}):(i.path=uu(i.x,i.z,zi(Object.keys(Ys))).map(([e,n])=>[e+Lt(-1.2,1.2),n+Lt(-1.2,1.2)]),i.onArrive=null),i.wait=Lt(2,7)))}var qn=null,Js=null,Qh=null,Pa=null;function Vi(){if(!wt.sound)return null;if(!qn)try{qn=new(window.AudioContext||window.webkitAudioContext),Js=qn.createGain(),Js.gain.value=.55,Js.connect(qn.destination)}catch{return null}return qn.state==="suspended"&&qn.resume(),qn}function ay(){if(!Qh){let i=qn.createBuffer(1,qn.sampleRate*2,qn.sampleRate),t=i.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;Qh=i}return Qh}function un(i,t,e,n="sine",s=.25,r){let a=Vi();if(!a)return;let o=a.currentTime+t,l=a.createOscillator(),h=a.createGain();l.type=n,l.frequency.setValueAtTime(i,o),r&&l.frequency.exponentialRampToValueAtTime(r,o+e),h.gain.setValueAtTime(0,o),h.gain.linearRampToValueAtTime(s,o+.01),h.gain.exponentialRampToValueAtTime(.001,o+e),l.connect(h).connect(Js),l.start(o),l.stop(o+e+.05)}function si(i,t,e,n,s="bandpass",r=.005,a=1){let o=Vi();if(!o)return;let l=o.currentTime+i,h=o.createBufferSource(),c=o.createBiquadFilter(),u=o.createGain();h.buffer=ay(),h.loop=!0,c.type=s,c.frequency.value=n,c.Q.value=a,u.gain.setValueAtTime(0,l),u.gain.linearRampToValueAtTime(e,l+r),u.gain.exponentialRampToValueAtTime(.001,l+t),h.connect(c).connect(u).connect(Js),h.start(l,Math.random()),h.stop(l+t+.05)}var te={whistle(){if(!Rn("silbato",.55))for(let[i,t]of[[0,.18],[.24,.5]])un(2900,i,t,"square",.06,2700)},whistleEnd(){Rn("silbato-final",.6)||te.whistle()},net(){Rn("red",.7)},chant(){Rn("canticos",.45)},kick(){Rn("chut",.8,Lt(.92,1.08))||(un(140,0,.16,"sine",.5,50),si(0,.05,.25,2500,"highpass"))},roar(i=3,t=.45){Rn("gol",Math.min(1,t*1.7))||(si(0,i,t,900,"bandpass",.35,.6),si(.05,i*.8,t*.5,2200,"bandpass",.3,.8))},drum(i=1.5){if(Rn("redoble",.8))return;let t=0,e=.16;for(;t<i;)si(t,.07,.22+t/i*.3,220,"bandpass",.002,1.4),t+=e,e=Math.max(.035,e*.9)},heart(){Rn("latido",.9)||(un(62,0,.16,"sine",.55,45),un(58,.2,.2,"sine",.45,42))},reveal(i){Rn("revelacion",i?1:.75)||[523,659,784,i?1047:988].forEach((t,e)=>un(t,e*.05,.9,"triangle",.14))},ding(){un(1320,0,.25,"sine",.18),un(1760,.07,.3,"sine",.14)},thud(){un(90,0,.2,"square",.15,50)},honk(){for(let i of[0,.45])un(330,i,.35,"sawtooth",.12),un(415,i,.35,"sawtooth",.1)},pop(){if(vn-(te._fw||-99)>9&&Rn("fuegos",.55)){te._fw=vn;return}vn-(te._fw||-99)>9&&(si(0,.35,.3,1800,"highpass",.002),un(180,0,.4,"sine",.2,60))},shutter(){si(0,.06,.3,4e3,"highpass"),si(.08,.05,.2,3e3,"highpass")},coin(){un(988,0,.1,"square",.08),un(1319,.08,.25,"square",.08)},pass(){Rn("pase",.45,Lt(.9,1.12))||(un(170,0,.08,"sine",.18,90),si(0,.03,.08,2e3,"highpass"))},uy(){Rn("uy",.8)||(si(0,1.4,.3,600,"bandpass",.25,.7),si(.1,1.1,.16,1500,"bandpass",.2,.8))}},Ks={},hl={},$d=["silbato","silbato-final","chut","pase","red","gol","uy","redoble","revelacion","latido","fuegos"];function nr(i){if(Ks[i])return Promise.resolve(Ks[i]);if(hl[i])return hl[i];let t=Vi();return t?hl[i]=fetch(`snd/${i}.mp3`).then(e=>e.arrayBuffer()).then(e=>new Promise((n,s)=>t.decodeAudioData(e,n,s))).then(e=>Ks[i]=e).catch(()=>(delete hl[i],null)):Promise.resolve(null)}function Rn(i,t=1,e=1){let n=Vi();if(!n)return!0;let s=Ks[i];if(!s)return nr(i),!1;let r=n.createBufferSource(),a=n.createGain();return r.buffer=s,r.playbackRate.value=e,a.gain.value=t,r.connect(a).connect(Js),r.start(),!0}function Zd(i,t){let e=Vi();if(!e||!Ks[i])return null;let n=e.createBufferSource(),s=e.createGain();return n.buffer=Ks[i],n.loop=!0,s.gain.value=0,s.gain.setTargetAtTime(t,e.currentTime,.7),n.connect(s).connect(Js),n.start(),{src:n,g:s}}function Jd(i,t=.5){if(i)try{i.g.gain.setTargetAtTime(0,qn.currentTime,t),setTimeout(()=>{try{i.src.stop()}catch{}},t*4e3)}catch{}}var tu=0,fu=0;function Ga(i,t=.07){if(tu=i?t:0,!i){Jd(Pa),Pa=null;return}Pa||!Vi()||nr("ambiente").then(()=>{!tu||Pa||!wt.sound||(Pa=Zd("ambiente",Math.min(1,tu*6.5)))})}var Ii={cur:null,name:null};function qr(i,t=.3){Ii.name===i&&Ii.cur||(Jd(Ii.cur,.8),Ii.cur=null,Ii.name=i,!(!i||!wt.sound||!Vi())&&nr(i).then(()=>{Ii.name!==i||Ii.cur||!wt.sound||(Ii.cur=Zd(i,t))}))}function ra(){if(wt.sound){if(ka)return qr(null);kt==="draw"?qr("musica-sorteo",.4):kt==="celeb"?qr("musica-celebracion",.5):kt==="match"?qr(null):qr("musica-ciudad",.22)}}var kt="city",De={act:Y("#act"),chips:Y("#chips"),sheetw:Y("#sheetw"),sheet:Y("#sheet"),toast:Y("#toast"),fade:Y("#fade")},gs=null;De.chips.innerHTML=Nn.map(i=>`<button type="button" data-go="${i.id}"><img src="img/${i.icon}.webp" alt="">${i.short}</button>`).join("");De.chips.addEventListener("click",i=>{let t=i.target.closest("[data-go]");t&&Ll(Nn.find(e=>e.id===t.dataset.go))});function Ll(i){kt==="city"&&(qe(),nt.path=uu(nt.x,nt.z,i.node),nt.auto=!0,nt.onArrive=()=>{nt.auto=!1,nt.ry=Math.atan2(i.look[0],i.look[1]),gt.yawT=Math.atan2(-i.look[0],-i.look[1])},Ue(`Andando a ${i.name}\u2026`,1400))}var Td=0;function Ue(i,t=2400){De.toast.textContent=i,De.toast.classList.add("on"),clearTimeout(Td),Td=setTimeout(()=>De.toast.classList.remove("on"),t)}var jr=!1;function di(i){De.sheet.innerHTML=i,De.sheetw.classList.add("on"),De.sheetw.classList.toggle("shop",jr),De.sheet.scrollTop=0}function qe(){De.sheetw.classList.remove("on"),jr&&(jr=!1,gt.dist=gt.distSave||gt.dist)}var pi=(i,t,e)=>`<div class="top">${i?`<img src="img/${i}.webp" alt="">`:""}<div><div class="k">${t}</div><h2>${e}</h2></div></div>`;function Kd(i){if(i.id==="museo"){let e=Jr?Xn.trophies.length?Xn.trophies.map(n=>`<li><b>${Dd(n)}</b></li>`).join(""):"<li>Todav\xEDa no hay t\xEDtulos. Cuando ganes uno, la celebraci\xF3n saldr\xE1 en el estadio.</li>":["liga","copa","champions"].map(n=>`<li><b>${Bi[n].name}</b> \xB7 ${wt.won.has(n)?"En la vitrina":"Vitrina vac\xEDa: cel\xE9brala en el estadio"}</li>`).join("");return di(`${pi(i.icon,i.k,i.name)}<p>${i.text}</p><ul>${e}</ul><div class="acts"><button type="button" class="ghost" data-k="close">Cerrar</button></div>`)}let t=i.extra||"";i.id==="oficina"&&!Jr&&(t=`<ul><li><b>Estadio nivel ${wt.level}</b> \xB7 ${["12.000","18.000","26.000"][wt.level-1]} asientos${wt.level<3?" \xB7 el siguiente nivel a\xF1ade "+(wt.level===1?"cubiertas laterales":"un segundo anfiteatro y videomarcadores"):" \xB7 nivel m\xE1ximo (al pulsar vuelve al 1 para comparar)"}</li></ul>`),di(`${pi(i.icon,i.k,i.name)}<p>${i.text}</p>${t}<div class="acts">${i.acts.map(([e,n])=>`<button type="button" data-k="${n}">${e}</button>`).join("")}<button type="button" class="ghost" data-k="close">Cerrar</button></div>`)}De.sheetw.addEventListener("click",i=>{if(i.target===De.sheetw)return qe();let t=i.target.closest("[data-k]");if(!t)return;let e=t.dataset.k;if(e==="close")return qe();if(e==="eclose")return qe(),ka?Ol():sr();if(e==="ereplay")return qe(),Yr({...B.ext,live:0,startR:0});if(e==="match")return qe(),Yr();if(e==="city")return qe(),sr();if(e==="again")return qe(),kt==="pens"?gp(st.kind):kt==="drill"?yp():kt==="draw"?Tp(Z.kind):Yr();if(e.startsWith("cel:"))return qe(),dp(e.slice(4));if(e.startsWith("tr:"))return qe(),mp(e.slice(3));if(e==="drill")return qe(),vp();if(e.startsWith("draw:"))return qe(),wp(e.slice(5));if(e.startsWith("nav:")){qe();try{parent.postMessage({type:"city-nav",tab:e.slice(4)},location.origin)}catch{}return}if(e==="lastmatch")return qe(),Xn.last?Yr({...Xn.last,live:0,startR:0}):Ue("Todav\xEDa no has jugado ning\xFAn partido",1800);if(e==="lvl")return sp();if(e==="press")return Pu(0);if(e.startsWith("pr:"))return bp(+e.slice(3));if(e==="shop")return Rl();if(e.startsWith("sh:"))return Sp(e.slice(3));e.startsWith("soon:")&&Ue(`En el juego aqu\xED se abrir\xEDa \xAB${e.slice(5)}\xBB. En esta prueba no est\xE1 conectado.`,3200)});De.act.addEventListener("click",()=>{gs&&Kd(gs)});var Ss=()=>new Promise(i=>{De.fade.classList.add("on"),setTimeout(i,360)}),Gi=()=>De.fade.classList.remove("on"),oy=["#club","#mapw","#bottom","#joy","#tools"],Au=Y("#hint");function aa(i){oy.forEach(t=>{Y(t).style.display=i?"":"none"}),i||(Au.style.opacity=0)}var du=Y("#rot"),ml=!1,Ad=0;function Dl(i){let t=ys&&innerHeight>innerWidth;i&&t&&(ml=!1,clearTimeout(Ad),Ad=setTimeout(()=>{ml=!0,du.classList.remove("on")},6500)),du.classList.toggle("on",t&&!ml)}Y("#rotx").addEventListener("click",()=>{ml=!0,du.classList.remove("on")});Y("#tMd").addEventListener("click",()=>$a(!wt.md));Y("#tVisit").addEventListener("click",()=>ip(!wt.visit));Y("#tFoto").addEventListener("click",()=>Ul());Y("#tSnd").addEventListener("click",()=>{wt.sound=!wt.sound,wt.sound?((kt==="match"||kt==="celeb")&&Ga(!0,kt==="celeb"?.11:.07),ra()):(Ga(!1),qr(null)),Y("#tSnd").textContent=wt.sound?"Sonido: s\xED":"Sonido: no"});var Rd=!1;addEventListener("pointerdown",()=>{!wt.sound||!Vi()||Rd||(Rd=!0,$d.forEach(nr),nr("canticos"),ra())},{passive:!0});function jd(i){document.body.classList.toggle("joyL",i),Y("#tJoy").textContent=i?"Joystick: izquierda":"Joystick: derecha";try{localStorage.setItem("ciudad-joy",i?"L":"R")}catch{}}{let i=null;try{i=localStorage.getItem("ciudad-joy")}catch{}jd(i==="L")}Y("#tJoy").addEventListener("click",()=>{jd(!document.body.classList.contains("joyL")),Ue(document.body.classList.contains("joyL")?"Joystick a la izquierda":"Joystick a la derecha",1400)});Au.textContent=ys?"Joystick para andar \xB7 arrastra para girar \xB7 pellizca para acercar":"Clic en el suelo o WASD para andar \xB7 arrastra para girar \xB7 rueda para acercar";var js=9,gt={yaw:0,pitch:.62,dist:ys?22:19,tx:0,tz:13,yawT:null},xn=new Map,Oi=null,El=0,Qd=0,eu=new il,Cd=new zt,Yn=new re(new ks(.4,.62,24).rotateX(-Math.PI/2),new Be({color:"#f2f5ee",transparent:!0,depthWrite:!1}));Yn.visible=!1;ee.add(Yn);Ms.addEventListener("pointerdown",i=>{if(Ms.setPointerCapture(i.pointerId),xn.set(i.pointerId,[i.clientX,i.clientY]),xn.size===1)Oi={x:i.clientX,y:i.clientY,moved:0};else if(xn.size===2){let[t,e]=[...xn.values()];El=Math.hypot(t[0]-e[0],t[1]-e[1]),Qd=gt.dist,Oi=null}});Ms.addEventListener("pointermove",i=>{if(!xn.has(i.pointerId))return;let t=xn.get(i.pointerId);if(xn.set(i.pointerId,[i.clientX,i.clientY]),xn.size===2){let[s,r]=[...xn.values()],a=Math.hypot(s[0]-r[0],s[1]-r[1]);El&&(gt.dist=on(Qd*El/a,8,36));return}if(!Oi)return;let e=i.clientX-t[0],n=i.clientY-t[1];Oi.moved+=Math.abs(e)+Math.abs(n),Oi.moved>8&&(kt==="city"?(gt.yawT=null,gt.yaw-=e*.006,gt.pitch=on(gt.pitch+n*.004,.3,1.15)):(kt==="match"||kt==="celeb")&&(It.yawOff=on(It.yawOff-e*.003,-1,1)))});var tp=i=>{xn.has(i.pointerId)&&(xn.delete(i.pointerId),Oi&&Oi.moved<=8&&xn.size===0&&kt==="city"&&cy(i.clientX,i.clientY),xn.size===0&&(Oi=null,El=0))};Ms.addEventListener("pointerup",tp);Ms.addEventListener("pointercancel",tp);Ms.addEventListener("wheel",i=>{i.preventDefault(),kt==="city"&&(gt.dist=on(gt.dist*(1+Math.sign(i.deltaY)*.1),8,36))},{passive:!1});var ly=new Hn(_u,0),La=new C;function cy(i,t){Cd.set(i/innerWidth*2-1,-(t/innerHeight)*2+1),eu.setFromCamera(Cd,Vt);for(let e of Nn)if(eu.intersectObject(e.icon3d).length)return Ll(e);eu.ray.intersectPlane(ly,La)&&(nt.path=[[La.x,La.z]],nt.onArrive=null,nt.auto=!1,Yn.position.set(La.x,.18,La.z),Yn.visible=!0,Yn.material.opacity=1,Yn.scale.setScalar(1),js=Math.min(js,.6))}var ai={};addEventListener("keydown",i=>{ai[i.key.toLowerCase()]=!0,i.key==="Escape"&&qe(),(i.key==="e"||i.key==="Enter")&&gs&&kt==="city"&&!De.sheetw.classList.contains("on")&&Kd(gs)});addEventListener("keyup",i=>{ai[i.key.toLowerCase()]=!1});var rn={on:!1,x:0,y:0,id:null};{let i=Y("#joy"),t=Y("#joy i"),e=(s,r)=>{let a=i.getBoundingClientRect(),o=a.width/2,l=s-(a.left+o),h=r-(a.top+o),c=Math.hypot(l,h)||1,u=c>o*.62?o*.62/c:1;rn.x=l*u/(o*.62),rn.y=h*u/(o*.62),t.style.transform=`translate(${l*u}px,${h*u}px)`};i.addEventListener("pointerdown",s=>{s.preventDefault(),i.setPointerCapture(s.pointerId),rn.on=!0,rn.id=s.pointerId,i.classList.add("on"),e(s.clientX,s.clientY),js=Math.min(js,.6)}),i.addEventListener("pointermove",s=>{rn.on&&s.pointerId===rn.id&&e(s.clientX,s.clientY)});let n=s=>{s.pointerId===rn.id&&(rn.on=!1,rn.x=rn.y=0,t.style.transform="",i.classList.remove("on"))};i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n)}function ep(i){let t=0,e=0,n=1;if((ai.w||ai.arrowup)&&(e-=1),(ai.s||ai.arrowdown)&&(e+=1),(ai.a||ai.arrowleft)&&(t-=1),(ai.d||ai.arrowright)&&(t+=1),!t&&!e&&rn.on){let h=Math.hypot(rn.x,rn.y);h>.18&&(t=rn.x,e=rn.y,n=Math.min(1,h))}if(!t&&!e)return null;let s=Math.cos(i),r=Math.sin(i),a=t*s+e*r,o=-t*r+e*s,l=Math.hypot(a,o);return{fx:a/l,fz:o/l,mag:n}}var ir=Y("#map"),ke=ir.getContext("2d"),Pn={x0:-92,x1:92,z0:-104,z1:72},Oa=(i,t)=>[(i-Pn.x0)/(Pn.x1-Pn.x0)*ir.width,(t-Pn.z0)/(Pn.z1-Pn.z0)*ir.height],np=null;function hy(){let i=document.createElement("canvas");i.width=ir.width,i.height=ir.height;let t=i.getContext("2d");t.fillStyle="#16301d",t.fillRect(0,0,i.width,i.height);let e=(n,s,r,a,o)=>{let[l,h]=Oa(n,r),[c,u]=Oa(s,a);t.fillStyle=o,t.fillRect(l,h,c-l,u-h)};for(let n of Mu)e(n[0],n[1],n[2],n[3],"#8d8778");e(-13,13,-13,13,"#a9a292"),e(-92,-42,-47,-41,"#3a3f45");for(let n of Cl)(n[1]-n[0])*(n[3]-n[2])>30&&e(n[0],n[1],n[2],n[3],"#2b3a33");e(-23,23,-77,-47,"#2f8f45"),e(44,80,-29,-7,"#2f8f45");for(let n of Nn){let[s,r]=Oa(...n.door);t.fillStyle="#ffb21c",t.beginPath(),t.arc(s,r,7,0,7),t.fill(),t.fillStyle="#1a1204",t.font="900 10px Barlow,sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n.short[0],s,r+.5)}np=i}function uy(){ke.drawImage(np,0,0);let i=(n,s,r)=>{let[a,o]=Oa(n.x,n.z);ke.fillStyle=s,ke.beginPath(),ke.arc(a,o,r,0,7),ke.fill()};for(let n of fi)$t.st[n.i].vis&&i(n,"rgba(242,245,238,.45)",2.5);i(Re,"#ec4d55",5);let[t,e]=Oa(nt.x,nt.z);ke.save(),ke.translate(t,e),ke.rotate(-nt.ry+Math.PI),ke.fillStyle="#fff",ke.strokeStyle="#06100b",ke.lineWidth=2,ke.beginPath(),ke.moveTo(0,-9),ke.lineTo(6.5,6),ke.lineTo(0,2.5),ke.lineTo(-6.5,6),ke.closePath(),ke.stroke(),ke.fill(),ke.restore()}ir.addEventListener("click",i=>{let t=ir.getBoundingClientRect(),e=Pn.x0+(i.clientX-t.left)/t.width*(Pn.x1-Pn.x0),n=Pn.z0+(i.clientY-t.top)/t.height*(Pn.z1-Pn.z0),s=null,r=1e9;for(let a of Nn){let o=Math.hypot(a.door[0]-e,a.door[1]-n);o<r&&(r=o,s=a)}s&&Ll(s)});var $s={t:null};function $a(i,t){if(wt.md=i,xu.color.set(i?"#ffffff":"#30353b"),Ml.forEach(e=>{e.visible=i}),lu.visible=i,Y("#tMd").textContent=i?"D\xEDa de partido: s\xED":"D\xEDa de partido: no",Y("#tMd").classList.toggle("on",i),Xd(),i&&!t&&($s.t=0,us.position.x=-98,Ue("D\xEDa de partido: focos encendidos, la afici\xF3n va al estadio y llega el autob\xFAs",3200)),!i){$s.t=null,us.position.x=-49;for(let e of fi){if(e.inside>0){e.inside=0;let[n,s]=Ys[zi(Yd)];e.x=n,e.z=s,$t.st[e.i].vis=kt==="city"}e.path=[],e.onArrive=null}}}function fy(i){if($s.t==null)return;$s.t+=i;let t=on($s.t/7,0,1);us.position.x=He(-98,-49,1-(1-t)**3),t>=1&&($s.t=null,kt==="city"&&vn>3&&(te.honk(),Ue("Ha llegado el autob\xFAs del equipo",2e3)))}async function ip(i){await Ss(),qe(),wt.visit=i,Nd.uVisit.value=i?1:0,Y("#club h1").textContent=i?"CIUDAD DE TU AMIGO":"CIUDAD DEPORTIVA",Y("#crest").setAttribute("fill",i?"#b8282f":"#1f8a4c"),Y("#tVisit").textContent=i?"Volver a tu ciudad":"Visitar a tu amigo",nt.x=0,nt.z=15,nt.ry=Math.PI,nt.path=[],gt.yaw=0,gt.yawT=null,Re.x=0,Re.z=9.2,Re.path=[],Re.wait=6,Re.ry=0,Re.greet=i?3.5:0,Wv(er,i?"Tu amigo \xB7 Anfitri\xF3n":"Tu amigo","#d93b3b"),bu(),Xd(),Gi(),Ue(i?"Est\xE1s en la ciudad de tu amigo. En el juego real le ver\xEDas moverse en directo si est\xE1 conectado.":"De vuelta en tu ciudad",3600)}function Ul(){bs.render(ee,Vt);let i;try{i=Ms.toDataURL("image/jpeg",.9)}catch{return Ue("No se pudo hacer la foto")}te.shutter(),di(`${pi("","Modo foto","Tu foto")}<img class="shot" src="${i}" alt="Captura de la ciudad deportiva"><p class="note">Mant\xE9n pulsada la foto para guardarla o compartirla en el grupo.</p><div class="acts"><button type="button" class="ghost" data-k="close">Cerrar</button></div>`)}function Ru(i){wt.level=i,ou.visible=i>=2,pl.visible=i>=3,Qr(0,!0)}async function sp(){qe();let i=wt.level%3+1;await Ss(),Ru(i),nt.x=0,nt.z=-24,nt.path=[],nt.ry=Math.PI,gt.yaw=.35,gt.yawT=null,gt.pitch=.5,gt.dist=34,gt.tx=nt.x,gt.tz=nt.z,Gi(),te.coin(),Ue(i===1?"Estadio de vuelta al nivel 1 (para que veas la diferencia)":i===2?"Nivel 2: cubiertas en las gradas laterales \xB7 18.000 asientos":"Nivel 3: segundo anfiteatro y videomarcadores \xB7 26.000 asientos",3800)}var Un=new Va(23);Un.visible=!1;var me=new re(new Zo(.24,1),new An({color:"#ffffff",emissive:"#4a4a4a",flatShading:!0}));me.castShadow=!0;me.visible=!1;ee.add(me);var rp=null;function dy(){let i=Gd.filter(s=>s[5]||Math.random()<.72),t=new ni(new wn(.56,.62,.34),dl,i.length),e=new ni(new wn(.4,.4,.38),dl,i.length),n=new ni(new wn(.9,.55,.2),dl,i.length);i.forEach(([,,,,s],r)=>{let a=s==="E"&&Math.random()<.85;Te.set(a?Math.random()<.5?"#d93b3b":"#1c1c1c":zi(["#1f9d55","#f2f5ee","#1f9d55","#2a2f35","#ffb21c"])),t.setColorAt(r,Te),n.setColorAt(r,Te),Te.set(zi(ui)),e.setColorAt(r,Te)}),[t,e,n].forEach(s=>{s.frustumCulled=!1,s.instanceMatrix.setUsage(Wh),ee.add(s)}),rp={sel:i,torso:t,head:e,arms:n,ph:i.map(()=>Math.random()*6),away:i.map(s=>s[4]==="E")},Qr(0,!0)}var ul=new Sn;function Qr(i,t){let e=rp;if(!e)return;let n=It.cele>0?It.celeTeam:-1,s=kt==="match"||kt==="celeb";for(let r=0;r<e.sel.length;r++){let[a,o,l,h,,c]=e.sel[r];if(c&&wt.level<3){e.torso.setMatrixAt(r,hs),e.head.setMatrixAt(r,hs),e.arms.setMatrixAt(r,hs);continue}let u=n===2||n===(e.away[r]?1:0),f=u?Math.max(0,Math.sin(i*9+e.ph[r]))*.55:s?Math.max(0,Math.sin(i*2.2+e.ph[r]))*.05:0;ul.setFromAxisAngle(_u,h),In.compose(ds.set(a,o+.38+f,l),ul,Ua),e.torso.setMatrixAt(r,In),In.compose(ds.set(a,o+.9+f,l),ul,Ua),e.head.setMatrixAt(r,In),u?(In.compose(ds.set(a,o+1.15+f,l),ul,Ua),e.arms.setMatrixAt(r,In)):e.arms.setMatrixAt(r,hs)}e.torso.instanceMatrix.needsUpdate=e.head.instanceMatrix.needsUpdate=e.arms.instanceMatrix.needsUpdate=!0,t&&(e.torso.instanceColor.needsUpdate=e.head.instanceColor.needsUpdate=e.arms.instanceColor.needsUpdate=!0)}var ta=360,Za=new ze,ls=new Float32Array(ta*3),as=new Float32Array(ta*3),ap=new Float32Array(ta*3);Za.setAttribute("position",new Ie(ls,3));Za.setAttribute("color",new Ie(ap,3));var xs=new kr(Za,new zs({size:.35,vertexColors:!0}));xs.visible=!1;xs.frustumCulled=!1;ee.add(xs);function ea(i,t,e,n=1,s=["#ffb21c","#f2f5ee","#1f9d55","#ec4d55"],r=ta){for(let a=r;a<ta;a++)ls[a*3+1]=-500,as.fill(0,a*3,a*3+3);for(let a=0;a<r;a++)ls.set([i+Lt(-1,1)*Math.max(1,n*3),t,e+Lt(-1,1)*Math.max(1,n*3)],a*3),as.set([Lt(-7,7)*n,Lt(6,15)*(n<1?.6:1),Lt(-7,7)*n],a*3),Te.set(s[a%s.length]),ap.set([Te.r,Te.g,Te.b],a*3);Za.attributes.color.needsUpdate=!0,xs.visible=!0,xs.userData.t=3.5}function py(i){if(xs.visible){for(let t=0;t<ta;t++)as[t*3+1]-=14*i,as[t*3]*=.99,as[t*3+2]*=.99,ls[t*3]+=as[t*3]*i,ls[t*3+1]=ls[t*3+1]<-100?-500:Math.max(.1,ls[t*3+1]+Math.max(as[t*3+1],-3)*i),ls[t*3+2]+=as[t*3+2]*i;Za.attributes.position.needsUpdate=!0,(xs.userData.t-=i)<=0&&(xs.visible=!1)}}var rr=900,Wa=new ze,wl=new Float32Array(rr*3).fill(-500),gl=new Float32Array(rr*3),xl=new Float32Array(rr*3),_l=new Float32Array(rr*3),Da=new Float32Array(rr);Wa.setAttribute("position",new Ie(wl,3));Wa.setAttribute("color",new Ie(_l,3));var na=new kr(Wa,new zs({size:.7,vertexColors:!0,transparent:!0,blending:Lr,depthWrite:!1,fog:!1}));na.frustumCulled=!1;na.visible=!1;ee.add(na);var nu=0;function my(i,t,e,n){Te.set(n),te.pop();for(let s=0;s<110;s++){let r=nu;nu=(nu+1)%rr;let a=Math.random()*Math.PI*2,o=Math.acos(Lt(-1,1)),l=Lt(7,11);wl.set([i,t,e],r*3),gl.set([Math.sin(o)*Math.cos(a)*l,Math.cos(o)*l,Math.sin(o)*Math.sin(a)*l],r*3),xl.set([Te.r,Te.g,Te.b],r*3),Da[r]=Lt(1.2,1.8)}na.visible=!0}function gy(i){if(!na.visible)return;let t=0;for(let e=0;e<rr;e++){if(Da[e]<=0)continue;t++,Da[e]-=i,gl[e*3+1]-=5*i;for(let s=0;s<3;s++)gl[e*3+s]*=.985,wl[e*3+s]+=gl[e*3+s]*i;let n=Math.max(0,Da[e]/1.5);_l[e*3]=xl[e*3]*n,_l[e*3+1]=xl[e*3+1]*n,_l[e*3+2]=xl[e*3+2]*n,Da[e]<=0&&(wl[e*3+1]=-500)}Wa.attributes.position.needsUpdate=Wa.attributes.color.needsUpdate=!0,t||(na.visible=!1)}var xy=[[-21.3,0],[-14,-10],[-14,-3.6],[-14,3.6],[-14,10],[-5,-10],[-5,-3.5],[-5,3.5],[-5,10],[3,-3.2],[3,3.2]],It={t:0,dur:150,score:[0,0],pl:[],b:{x:0,z:0,y:.24,owner:null,fly:null},cele:0,celeTeam:-1,cam:"palco",yawOff:0,decide:0,tackle:0,end:!1,camPos:new C,camLook:new C,ref:{x:-4,z:6,ry:0,ph:0,amp:0}};function _y(){It.pl=[];for(let i of[0,1])xy.forEach(([t,e],n)=>{let s=i?-1:1,r=i*11+n;It.pl.push({i:r,team:i,k:n,gk:n===0,bx:t*s,bz:e*s,x:t*s,z:e*s,ry:0,ph:Lt(0,6),amp:0,dive:0,up:0});let a={skin:ui[r*7%5],hair:Hi[r*3%5],eye:"#141414"};Un.colors(r,n===0?{...a,shirt:i?"#3a7bd5":"#f5d238",pants:"#151515",shoe:"#151515"}:i?{...a,shirt:"#d93b3b",pants:"#151515",shoe:"#f2f5ee"}:{...a,shirt:"#1f9d55",pants:"#f2f5ee",shoe:"#151515"}),Object.assign(Un.st[r],{opt:{crest:r%7===3,long:r%9===5},cap:!1,base:0,head:0,roll:0,seat:0,kick:0})});Un.colors(22,{shirt:"#111",pants:"#111",skin:ui[1],hair:Hi[2],shoe:"#111",eye:"#141414"}),It.ref={x:-4,z:6,ry:0,ph:0,amp:0}}var Xa=window.ENG,Fi=window.MV,vy=46/105,iu=30/68,su=6.4/7.32,op=i=>{let t=Math.min(i,105-i);return t>=9?0:t<=0?1:(e=>e*e*(3-2*e))((9-t)/9)};function yy(i,t){if(!t)return i*iu;let e=Math.abs(i),n=e*iu,s=e<=5?e*su:e<12?5*su+(e-5)*((12*iu-5*su)/7):n;return Math.sign(i)*(n+(s-n)*t)}var Tl=(i,t)=>[(i-52.5)*vy,H+yy(t-34,op(i))],My=(i,t)=>t*(.62+(2.3/2.44-.62)*op(i)),We=new Va(32);We.visible=!1;var Qs=31,Pi=[-9.5,H+19.2],B={tl:null,m:null,mot:null,r:0,speed:1,phase:"off",cer:0,cam:"palco",bi:0,ci:0,ki:0,end:!1,pmap:{},walk:[],ref:{x:0,z:H+4,ry:0,ph:0,amp:0},refW:null,lastMin:-1,kickSnd:0},aM=new C(1,0,0),_s=(()=>{let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.textAlign="center",t.textBaseline="middle",t.font=`900 78px ${ki}`,t.lineWidth=8,t.strokeStyle="rgba(0,0,0,.35)",t.fillStyle="#fff";for(let a=0;a<100;a++){let o=a%10*102.4+51.2,l=Math.floor(a/10)*102.4+54;a&&(t.strokeText(String(a),o,l),t.fillText(String(a),o,l))}let e=new ii(i);e.colorSpace=Fe,e.anisotropy=4;let n=new je(.46,.46);n.rotateY(Math.PI);let s=new Be({map:e,transparent:!0,alphaTest:.4,depthWrite:!1});s.onBeforeCompile=a=>{a.vertexShader=`attribute float aNum;
`+a.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = (uv + vec2(mod(aNum, 10.0), 9.0 - floor(aNum / 10.0))) / 10.0;`)};let r=new ni(n,s,32);return r.frustumCulled=!1,r.visible=!1,r.geometry.setAttribute("aNum",new Bs(new Float32Array(32),1)),ee.add(r),r})(),by=new Zt().makeTranslation(0,1.26,-.2),Id=new Zt;function Sy(){for(let i=0;i<32;i++){let t=We.st[i];if(!t.vis||!t.num){_s.setMatrixAt(i,hs);continue}vu(t,bl),Id.multiplyMatrices(bl,by),_s.setMatrixAt(i,Id)}_s.instanceMatrix.needsUpdate=!0}var Ui={c:[["#1f9d55","#f2f5ee"],["#d93b3b","#151515"]],gk:["#f5d238","#3a7bd5"]};function fl(i,t){let e=r=>{r=String(r||"#000").replace("#",""),r.length===3&&(r=r.replace(/./g,"$&$&"));let a=parseInt(r,16)||0;return[a>>16&255,a>>8&255,a&255]},n=e(i),s=e(t);return Math.hypot(n[0]-s[0],n[1]-s[1],n[2]-s[2])}function Ey(i,t){let e=[i[0],i[1]],n=[t[0],t[1]];fl(e[0],n[0])<120&&(n=[t[1],t[0]]),fl(e[0],n[0])<120&&(n=fl(e[0],"#ffffff")>200?["#f2f2f2","#222222"]:["#1b1b1b","#ffffff"]),Ui.c=[e,n];let s=["#facc15","#22d3ee","#a3e635","#f97316","#e879f9","#f43f5e","#111111","#ffffff"],r=o=>s.map(l=>[l,Math.min(...o.map(h=>fl(l,h)))]).sort((l,h)=>h[1]-l[1])[0][0],a=r([e[0],n[0],e[1],n[1]]);Ui.gk=[a,r([e[0],n[0],a])]}var ru=i=>{let t=String(i).replace("#",""),e=parseInt(t.length===3?t.replace(/./g,"$&$&"):t,16)||0;return(e>>16&255)*.3+(e>>8&255)*.59+(e&255)*.11};function wy(i){let t=Xa.hash(i.id)>>>0,e={skin:ui[t%5],hair:Hi[(t>>>3)%5],eye:"#141414"};if(i.pos==="POR"){let r=Ui.gk[i.s?1:0];return{...e,shirt:r,pants:"#151515",shoe:"#151515",sleeve:r,numc:ru(r)>150?"#151515":"#ffffff"}}let[n,s]=Ui.c[i.s?1:0];return{...e,shirt:n,stripe:s,pants:ru(n)>150?"#151515":s,shoe:"#151515",numc:ru(n)>150?"#151515":"#ffffff",opt:{stripe:!0}}}function Ty(){let i="cd"+Date.now().toString(36)+Math.random().toString(36).slice(2,5),t=Xa.draft(2,i),e=[0,1].map(r=>({id:"t"+r,idx:r,name:["Tu equipo","Tu amigo"][r],short:["T\xDA","AMI"][r],colors:[["#1f9d55","#f2f5ee"],["#d93b3b","#151515"]][r],owner:"u"+r,squad:t[r],lineup:null,tac:{ment:"equ",press:"med",est:"mix"},xp:{},stadium:2,ledger:[]})),n={name:"Liga de Amigos",n:2,seed:i,season:1,hour:"21:00",firstKick:Date.now(),forcedAt:{},started:!0},s=Xa.simulateFriendly(n,e,0,1,1,[],i);return{m:s.m,tl:Fi.build(s.m)}}function Ay(){let i=B.tl,t=[0,1].map(e=>i.all.filter(n=>n.s===e&&n.from<0));B.walk=[],t.forEach((e,n)=>{e.sort((s,r)=>(s.pos==="POR"?-1:0)-(r.pos==="POR"?-1:0)||s.num-r.num),e.forEach((s,r)=>{let a=i.TR[s.i],[o,l]=Tl(a[0],a[1]),h=n?1.4+r*1.15:-1.4-r*1.15,c=Pi[0]+(n?.75:-.75);B.walk.push({p:s,s:n,i:s.i,x:c,z:Pi[1]+.5,t0:1.6+r*.62,path:[[c,H+11],[h,H+4.3]],kick:[o,l],done:!1,ph:Lt(0,6),ry:Math.PI})})}),B.refW={x:Pi[0],z:Pi[1]+.5,t0:.6,path:[[Pi[0],H+11],[0,H+4.3]],kick:[-4,H+7],ph:0,ry:Math.PI}}function Pd(i,t,e,n,s){let r=t-i.x,a=e-i.z,o=Math.hypot(r,a);if(o<.12)return!0;let l=Math.min(n*s,o);return i.x+=r/o*l,i.z+=a/o*l,i.ry=tr(i.ry,Math.atan2(r,a),Math.min(1,s*8)),i.ph+=s*n*2.2,i.mv=n,!1}var lp=25;function Ry(i){B.cer+=i;let t=B.cer,e=t>=19,n=[...B.walk.map(s=>[s,We.st[s.i]]),[B.refW,We.st[Qs]]];for(let[s,r]of n){if(s.mv=0,t<s.t0){r.vis=!1;continue}r.vis=!0,e?Pd(s,s.kick[0],s.kick[1],4.4,i)&&(s.ry=tr(s.ry,s.s?-Math.PI/2:Math.PI/2,Math.min(1,i*4))):s.path.length?Pd(s,s.path[0][0],s.path[0][1],2.3,i)&&s.path.shift():s.ry=tr(s.ry,0,Math.min(1,i*4));let a=t>15.5&&t<18.2&&!s.path.length&&!e;Object.assign(r,{x:s.x,z:s.z,y:0,ry:s.ry,ph:s.ph,amp:s.mv?s.mv>3?.7:.4:0,up:a&&s!==B.refW?.45+Math.sin(t*9+(s.i||0))*.35:0,upR:void 0,roll:0,lean:0,kick:0})}if(It.cele=t>2&&t<14?1:0,It.celeTeam=2,t<8)Ln.set(-3.5,2.6,H+9.5),Li.set(Pi[0],1.5,Pi[1]-2);else if(t<14)Ln.set(He(-3.5,0,(t-8)/6),4.2,H+12),Li.set(-4,1.3,H+5);else if(t<19){let s=(t-14)/5,r=He(-11,11,s);Ln.set(r,2.3,H+9.6),Li.set(r,1.5,H+4.3)}else Ln.set(0,8.3,H+27.6),Li.set(0,.4,H-2);It.camPos.lerp(Ln,Math.min(1,i*(t<19?2.2:1.4))),It.camLook.lerp(Li,Math.min(1,i*2.2)),Vt.position.copy(It.camPos),Vt.lookAt(It.camLook),ia(0,H),t>1&&!B.roared&&(B.roared=!0,te.roar(6,.5)),t>=lp&&cp()}function cp(){B.phase="play",B.r=0,It.cele=0,me.visible=!0,te.whistle(),Y("#mskip").style.display="none",Y("#mspd").style.display=B.live?"none":"";for(let i=0;i<32;i++)We.st[i].vis=!1;B.ref.x=-4,B.ref.z=H+7}function fs(i){try{return Xa.player(i).name}catch{return""}}function Cy(i){let t=Y("#goal"),e=i.s===0;t.innerHTML=`\xA1GOOOL!<small>${fs(i.p)}${i.a?` \xB7 asistencia de ${fs(i.a)}`:""}</small>`,t.classList.remove("on"),t.offsetWidth,t.classList.add("on"),setTimeout(()=>t.classList.remove("on"),3600/Math.max(1,B.speed*.7));let[n,s]=Tl(e?100:5,34);ea(n,2,s,1,[...Ui.c[e?0:1],"#ffb21c"]),It.cele=4,It.celeTeam=i.s,te.roar(3.4,.55),te.net(),Wd(me.position.x,me.position.y,me.position.z)}function Iy(i){if(B.phase==="cer")return Ry(i);let t=B.end?1:B.speed;B.r=Math.min(Fi.LIVE_S,B.live?Math.max(B.r,(Date.now()-B.live)/1e3):B.r+i*t);let e=B.tl,n=Fi.sample(e,B.r),s=B.mot.step(n,i*t);for(let g=0;g<Qs;g++)We.st[g].vis=!1;for(let g of s){let x=B.pmap[g.id];if(!x||x.i>=Qs)continue;let m=We.st[x.i],[d,E]=Tl(g.x,g.y),S=g.sp||0,M=S>2.6;m.vis=!0,m.x=d,m.z=E,m.ry=Math.atan2(Math.cos(g.face),Math.sin(g.face)),m.ph=g.ph,m.amp=M?on(S/7.5,.5,1)*.95:S>.35?.32:0,m.lean=M?on(S/8,0,1)*.22:0,m.y=M?Math.abs(Math.sin(g.ph))*.07:0,m.up=0,m.upR=void 0,m.kick=0,m.roll=0,g.act==="kick"?m.kick=Math.sin(on((B.r-n.kt)/.45,0,1)*Math.PI)*1.5:g.act==="cheer"&&(m.up=1,m.y=Math.max(0,Math.sin(au()*9+x.i))*.6,m.amp=0,m.lean=0),(g.down||g.act==="slide")&&(m.roll=1.45,m.y=.3,m.amp=0,m.lean=0)}let[r,a]=Tl(n.x,n.y);me.position.set(r,.24+My(n.x,n.z),a),n.own||(me.rotation.x+=.25*t);let o=B.ref,l=on(r-6,-19,19),h=on(a+5.5,H-13,H+13),c=l-o.x,u=h-o.z,f=Math.hypot(c,u);if(f>.6){let g=Math.min(4*t,f*1.5)*i;o.x+=c/f*g,o.z+=u/f*g,o.ry=Math.atan2(c,u),o.ph+=i*6*t,o.amp=.6}else o.amp*=.9,o.ry=tr(o.ry,Math.atan2(r-o.x,a-o.z),Math.min(1,i*4));for(Object.assign(We.st[Qs],{vis:!0,x:o.x,z:o.z,y:0,ry:o.ry,ph:o.ph,amp:o.amp,lean:o.amp>.3?.12:0,up:0,kick:0,roll:0});B.bi<e.banners.length&&e.banners[B.bi].t<=B.r;){let g=e.banners[B.bi++];g.type==="goal"?Cy(g):g.type==="save"?(Ue(`\xA1Parad\xF3n de ${fs(g.gk)}!`,1600),te.uy()):g.type==="miss"||g.type==="pal"?(Ue(g.type==="pal"?"\xA1Al palo!":"\xA1Uyyy! Fuera por poco",1500),te.uy()):g.type==="roja"?(Ue(`Tarjeta roja para ${fs(g.p)}`,2200),te.whistle()):g.type==="pen"?(Ue("\xA1Penalti!",1800),te.whistle()):g.type==="half"?(Ue("Descanso",2200),te.whistle()):g.type==="sub"&&Ue(`Cambio: entra ${fs(g.p)}`,2e3)}for(;B.ci<e.comm.length&&e.comm[B.ci].t<=B.r;){let g=e.comm[B.ci++],x=Y("#mcomm");x.textContent=g.txt,x.classList.toggle("imp",!!g.imp),x.classList.remove("flash"),x.offsetWidth,x.classList.add("flash")}for(;B.ki<e.kicks.length&&e.kicks[B.ki].t<=B.r;){let g=e.kicks[B.ki++];au()-B.kickSnd>.12&&(B.kickSnd=au(),g.shot?te.kick():te.pass())}It.cele>0&&(It.cele-=i),(fu-=i)<=0&&(fu=Lt(24,42),te.chant()),Y("#mown").textContent=n.own?fs(n.own):"",n.minute!==B.lastMin&&(B.lastMin=n.minute,hp.textContent=n.minute+"'",(n.minute%5===0||n.minute===1)&&ms(B.lbl,`${n.score[0]}  -  ${n.score[1]}`,B.tl&&(B.htT??(B.htT=B.tl.banners.find(g=>g.type==="half")||{t:-99,d:0}))&&B.r>=B.htT.t&&B.r<B.htT.t+B.htT.d?"DESCANSO":`MINUTO ${n.minute}'`));let p=`${n.score[0]} - ${n.score[1]}`;Y("#msc").textContent!==p&&(Y("#msc").textContent=p,ms(B.lbl,p.replace("-"," - "),B.tl&&(B.htT??(B.htT=B.tl.banners.find(g=>g.type==="half")||{t:-99,d:0}))&&B.r>=B.htT.t&&B.r<B.htT.t+B.htT.d?"DESCANSO":`MINUTO ${n.minute}'`)),Rp(i,r,a-H,!1),B.r>=Fi.LIVE_S-.01&&!B.end&&Ly()}var au=()=>vn,hp=Y("#mmin");function up(){xu.color.set("#ffffff"),Ml.forEach(i=>{i.visible=!0});for(let i of fi)$t.st[i.i].vis=!1;$t.st[ci].vis=$t.st[hi].vis=!1,sa.visible=er.visible=!1,aa(!1),Dl(!0)}async function Yr(i){await Ss(),oa();let t;try{t=i?{m:i.m,tl:Fi.build(i.m)}:Ty()}catch(e){return console.error(e),Gi(),Ue("No se pudo generar el partido: "+e.message,4e3)}kt="match",ra(),fu=12,It.end=!1,It.cele=0,It.celeTeam=-1,It.yawOff=0,It.cam="palco",Object.assign(B,{m:t.m,tl:t.tl,mot:Fi.Motion(t.tl),r:0,speed:1,phase:"cer",cer:0,bi:0,ci:0,ki:0,end:!1,pmap:{},lastMin:-1,roared:!1,live:i&&i.live?i.live:0,ext:i||null,htT:null}),i?(Ey(i.H.colors,i.A.colors),B.lbl=`${i.H.short}  vs  ${i.A.short}`,B.names=[i.H.name,i.A.name]):(Ui.c=[["#1f9d55","#f2f5ee"],["#d93b3b","#151515"]],Ui.gk=["#f5d238","#3a7bd5"],B.lbl="T\xDA  vs  TU AMIGO",B.names=["tu equipo","tu amigo"]);{let e=document.querySelectorAll("#mhud .t"),n=i?[i.H.short,i.A.short]:["T\xDA","AMIGO"];e[0].innerHTML=`<i style="background:${Ui.c[0][0]}"></i>`,e[0].append(n[0]),e[1].textContent=n[1],e[1].insertAdjacentHTML("beforeend",`<i style="background:${Ui.c[1][0]}"></i>`)}fp(t.tl,!0),We.colors(Qs,{shirt:"#111",pants:"#111",skin:ui[1],hair:Hi[2],shoe:"#111",eye:"#141414",stripe:"#ffb21c"}),We.st[Qs].opt={bald:!0},Py()}function fp(i,t){let e=_s.geometry.attributes.aNum;if(t)for(let n=0;n<32;n++)We.st[n].vis=!1,We.st[n].num=0;B.pmap={};for(let n of i.all){if(n.i>=Qs)continue;B.pmap[n.id]=n;let s=wy(n);We.colors(n.i,s);let r=Xa.hash(n.id)>>>0;We.st[n.i].opt={...s.opt||{},crest:r%9===1,long:r%11===4,bald:r%13===6},We.st[n.i].num=n.num,e.setX(n.i,Math.min(99,n.num)),Te.set(s.numc),_s.setColorAt(n.i,Te)}e.needsUpdate=!0,_s.instanceColor.needsUpdate=!0}function Py(){Ay(),me.visible=!0,me.position.set(0,.24,H),up(),We.visible=!0,_s.visible=!0,$r.visible=!1,Y("#mhud").classList.add("on"),Y("#mctl").classList.add("on"),Y("#mcomm").classList.add("on"),Y("#mcam").textContent="C\xE1mara TV",Y("#mskip").style.display="",Y("#mspd").style.display="none",Y("#mspd").textContent="x1",Y("#msc").textContent="0 - 0",hp.textContent="0'",Y("#mcomm").textContent="Los equipos saltan al campo\u2026",Y("#mown").textContent="",ms(B.lbl,"0  -  0","SALEN LOS EQUIPOS"),It.camPos.set(-3.5,2.6,H+9.5),It.camLook.set(Pi[0],1.5,Pi[1]-2),Ga(!0);let i=B.ext,t=B.live?(Date.now()-B.live)/1e3:i&&i.startR||0;if(t>3){for(let n of[...B.walk,B.refW])n.x=n.kick[0],n.z=n.kick[1],n.path=[];cp(),B.r=Math.min(Fi.LIVE_S-.5,t);let e=B.tl;for(;B.bi<e.banners.length&&e.banners[B.bi].t<=B.r;)B.bi++;for(;B.ci<e.comm.length&&e.comm[B.ci].t<=B.r;)B.ci++;for(;B.ki<e.kicks.length&&e.kicks[B.ki].t<=B.r;)B.ki++;It.camPos.set(0,8.3,H+27.6),It.camLook.set(0,.4,H-2)}B.live&&(Y("#mspd").style.display="none"),Gi()}function Ly(){B.end=!0,te.whistleEnd();let i=B.m.hg,t=B.m.ag,e=B.ext?i>t?"Gana "+B.names[0]:i<t?"Gana "+B.names[1]:"Empate: \xA1a penaltis! Vuelve al juego para la tanda":i>t?"Has ganado":i<t?"Ha ganado tu amigo":"Empate";ms("FINAL",`${i}  -  ${t}`,e.toUpperCase());let n=B.m.mvp?`<li><b>Mejor jugador</b> \xB7 ${fs(B.m.mvp)}</li>`:"",s=B.tl.goals.map(r=>`<li>${r.m}' \xB7 ${fs(r.p)} <span class="note">(${B.names[r.s?1:0]})</span></li>`).join("");setTimeout(()=>{kt==="match"&&di(`${pi("nav-liga","Final del partido",`${e} \xB7 ${i}-${t}`)}<p>${B.ext?"Mismo partido y mismo resultado que en la liga: solo cambia c\xF3mo se ve.":"Este partido lo ha calculado el motor real del juego, con plantillas de verdad. Solo cambia c\xF3mo se ve."}</p><ul>${s}${n}</ul><div class="acts">${B.ext?'<button type="button" data-k="ereplay">Verlo otra vez</button><button type="button" class="ghost" data-k="eclose">Volver al juego</button>':`${i>t?'<button type="button" data-k="cel:liga">Celebrar el t\xEDtulo</button>':""}<button type="button" data-k="again">Otro partido</button><button type="button" class="ghost" data-k="city">Volver a la ciudad</button>`}</div>`)},1500)}Y("#mcam").addEventListener("click",()=>{It.cam=It.cam==="palco"?"tv":"palco",Y("#mcam").textContent=It.cam==="palco"?"C\xE1mara TV":"Palco"});Y("#mexit").addEventListener("click",()=>ka?Ol():sr());Y("#mfoto").addEventListener("click",()=>Ul());Y("#mskip").addEventListener("click",()=>{if(B.phase==="cer"){for(let i of[...B.walk,B.refW])i.x=i.kick[0],i.z=i.kick[1],i.path=[];B.cer=lp-.05,It.camPos.set(0,8.3,H+27.6),It.camLook.set(0,.4,H-2)}});Y("#mspd").addEventListener("click",()=>{B.speed=B.speed===1?2:B.speed===2?4:1,Y("#mspd").textContent="x"+B.speed});var Bi={liga:{name:"Liga",title:"\xA1CAMPEONES DE LIGA!",col:"#ffb21c",fw:["#ffb21c","#ffd36b","#4bd474","#f2f5ee"]},copa:{name:"Copa",title:"\xA1CAMPEONES DE COPA!",col:"#f2f5ee",fw:["#f2f5ee","#ec4d55","#ffb21c","#9fd3ff"]},champions:{name:"Champions",title:"\xA1CAMPEONES DE LA CHAMPIONS!",col:"#8fb8ff",fw:["#8fb8ff","#f2f5ee","#3a7bd5","#ffd36b"]}},he={kind:null,t:0,cam:"palco",trophy:null,board:null,nextFw:0};function Dy(){$r=Ni(!1),P(9,.7,3.4,0,0,H-.4,"#1c2723"),P(9.2,.08,3.6,0,.7,H-.4,"#ffb21c"),P(5,.35,1.6,0,0,H+1.8,"#1c2723"),_n($r),he.board=Bd(14,3.6,1024,264,$r),he.board.m.position.set(0,3.5,H-3.1)}function Uy(i){let{x:t,c:e,t:n}=he.board,s=Bi[i];t.fillStyle="#05080a",t.fillRect(0,0,e.width,e.height),t.strokeStyle=s.col,t.lineWidth=10,t.strokeRect(8,8,e.width-16,e.height-16),t.textAlign="center",t.textBaseline="middle",t.fillStyle=s.col,t.shadowColor=s.col,t.shadowBlur=24,t.font=`900 132px ${ki}`,t.fillText("CAMPEONES",512,116),t.shadowBlur=0,t.fillStyle="#f2f5ee",t.font=`800 52px ${ki}`,t.fillText(`${s.name.toUpperCase()} \xB7 TEMPORADA 1`,512,214),n.needsUpdate=!0}async function dp(i){await Ss(),oa(),kt="celeb",ra(),he.kind=i,he.t=0,he.cam="palco",he.nextFw=.6,It.yawOff=0,_y(),It.end=!0,It.cele=9999,It.celeTeam=0;for(let s=11;s<23;s++)Un.st[s].vis=!1;let t=[[-3.6,H+.6],[-2.2,H+.9],[2.2,H+.9],[3.6,H+.6],[-5.4,H+2.4],[-3.4,H+3.1],[-1.2,H+3.5],[1.2,H+3.5],[3.4,H+3.1],[5.4,H+2.4]],e=0;It.pl.forEach(s=>{if(s.team)return;let r=Un.st[s.i];if(Object.assign(r,{vis:!0,ph:Lt(0,6),amp:0,ry:0,roll:0,upR:void 0}),s.k===9)r.x=0,r.z=H-.3,r.cap=!0,r.base=.7;else{let[a,o]=t[e++];r.x=a,r.z=o,r.cap=!1,r.base=o<H+1.2?.7:0}}),Uy(i),$r.visible=!0,he.trophy&&ee.remove(he.trophy),he.trophy=Vd(i),he.trophy.scale.setScalar(.5),ee.add(he.trophy),up(),Un.visible=!0,me.visible=!1,Qr(0,!0),ms("TEMPORADA 1","CAMPEONES",Bi[i].name.toUpperCase());let n=Y("#ctitle");n.textContent=Bi[i].title,n.style.color=Bi[i].col,Y("#csub").textContent="Tu equipo \xB7 visto desde el palco VIP",Y("#celeb").classList.add("on"),Y("#ccam").textContent="C\xE1mara cerca",It.camPos.set(0,8.3,H+27.6),It.camLook.set(0,2,H),Ga(!0,.11),te.roar(4,.6),Gi()}function Ny(i){he.t+=i;let t=he.t,e=t%5,n=e<.6?yl(e/.6):e<3.6?1:e<4.2?1-yl((e-3.6)/.6):0;e<i*1.5&&t>1&&(ea(0,6,H,1.2,Bi[he.kind].fw),te.roar(3,.55)),It.pl.forEach(r=>{if(r.team)return;let a=Un.st[r.i];a.cap?(a.up=.35+.65*n,a.y=a.base,a.amp=0,a.head=-.3*n):(a.up=.5+.5*Math.max(0,Math.sin(t*4+r.i)),a.y=a.base+Math.max(0,Math.sin(t*7+r.i*1.7))*.7,a.ry=Math.sin(t*.8+r.i)*.3)});let s=Un.st[9];he.trophy.position.set(s.x,s.y+He(1.3,2.35,n),s.z+He(.45,.05,n)),he.trophy.rotation.y=Math.sin(t*.7)*.25,(he.nextFw-=i)<=0&&(he.nextFw=Lt(.35,.9),my(Lt(-34,34),Lt(20,30),H+Lt(-26,8),zi(Bi[he.kind].fw))),Math.random()<i*.6&&ea(Lt(-8,8),7,H+Lt(-2,3),.8,Bi[he.kind].fw)}Y("#ccam").addEventListener("click",()=>{he.cam=he.cam==="palco"?"cerca":"palco",Y("#ccam").textContent=he.cam==="palco"?"C\xE1mara cerca":"Palco"});Y("#cexit").addEventListener("click",()=>sr());Y("#cfoto").addEventListener("click",()=>Ul());var an=78,Me=-18,st={kind:"pen",n:0,goals:0,res:[],phase:"aim",t:0,shot:null,ball:[71,Me],fwd:[1,0],right:[0,1],targets:[]},ar=[];for(let i of[0,1])for(let t of[0,1,2])ar.push({row:i,col:t,z:Me+(t-1)*3,y:i?2.25:.8});var vs=Y("#zones");vs.innerHTML=ar.map((i,t)=>`<button type="button" data-z="${t}" aria-label="Tirar ${i.row?"arriba":"abajo"} ${["a la izquierda","al centro","a la derecha"][i.col]}"></button>`).join("");vs.addEventListener("click",i=>{let t=i.target.closest("[data-z]");t&&_p(ar[+t.dataset.z])});var Fa=[0,1].map(()=>{let i=new re(new ks(.55,.95,28).rotateY(-Math.PI/2),new Be({color:"#ffb21c",side:hn}));return i.add(new re(new $o(.3,20).rotateY(-Math.PI/2),new Be({color:"#ec4d55",side:hn}))),i.visible=!1,ee.add(i),i}),Ja={pen:{title:i=>`PENALTI ${i} DE 5`,total:5,ball:[71,Me],keeper:!0},falta:{title:i=>`FALTA ${i} DE 5`,total:5,ball:[64.5,Me+3.4],keeper:!0,wall:!0},diana:{title:i=>`PRECISI\xD3N \xB7 BAL\xD3N ${i} DE 6`,total:6,ball:[69.5,Me-1],keeper:!1}};function pp(){let[i,t]=st.ball,e=i-an,n=t-Me,s=Math.hypot(e,n),r=Math.tan(Vt.fov*Math.PI/360)*Vt.aspect,a=Math.max(s+6.4,6.4/r);Vt.position.set(an+e/s*a,2.2+a*.05,Me+n/s*a),Vt.lookAt(an,1.2,Me),Vt.updateMatrixWorld();let o=vs.children,l=innerHeight,h=innerWidth,c=(x,m,d)=>(Zh.set(x,m,d).project(Vt),[(Zh.x+1)/2*h,(1-Zh.y)/2*l]),[u]=c(an,.8,Me-3),[f,p]=c(an,.8,Me),[,g]=c(an,2.25,Me);vs.style.setProperty("--zw",Math.max(44,Math.abs(f-u)*.9)+"px"),vs.style.setProperty("--zh",Math.max(44,Math.abs(g-p)*.9)+"px"),ar.forEach((x,m)=>{let[d,E]=c(an+.1,x.y,x.z);o[m].style.left=d+"px",o[m].style.top=E+"px"})}async function mp(i){await Ss(),oa(),kt="pens",aa(!1);for(let t of fi)$t.st[t.i].vis=!1;sa.visible=!1,gp(i),Gi()}function gp(i){let t=Ja[i];st.kind=i,st.n=0,st.goals=0,st.res=[],st.phase="aim",st.ball=t.ball;let e=an-st.ball[0],n=Me-st.ball[1],s=Math.hypot(e,n);if(st.fwd=[e/s,n/s],st.right=[-st.fwd[1],st.fwd[0]],Y("#phud").classList.add("on"),Y("#pctl").classList.add("on"),i==="diana"){let r=Math.random()*6|0,a;do a=Math.random()*6|0;while(a===r);st.targets=[r,a]}xp(),Ba(),pp(),vs.classList.add("on")}function xp(){let i=Ja[st.kind],[t,e]=st.ball,[n,s]=st.fwd,[r,a]=st.right;me.visible=!0,me.position.set(t,.24,e),Object.assign($t.st[ci],{x:t-n*1.6-r*1.7,z:e-s*1.6-a*1.7,y:0,ry:Math.atan2(n,s),seat:0,amp:0,kick:0,vis:!0}),Object.assign($t.st[Ya],{x:an-.5,y:0,z:Me,ry:-Math.PI/2,roll:0,amp:.25,up:0,vis:i.keeper}),qa.forEach((o,l)=>{let h=-2.1+l*.7;Object.assign($t.st[o],{x:t+n*5.5+r*h,z:e+s*5.5+a*h,y:0,ry:Math.atan2(-n,-s),up:0,upR:0,amp:0,vis:!!i.wall})}),Object.assign($t.st[hi],{x:66,z:Me+7,y:0,ry:Math.PI/2+.5,amp:0,vis:!0}),Fa.forEach(o=>{o.visible=!1}),st.kind==="diana"&&st.targets.forEach((o,l)=>{let h=ar[o];Fa[l].position.set(an+.08,h.y,h.z),Fa[l].visible=!0})}function Ba(){let i=Ja[st.kind];Y("#pt").textContent=st.n<i.total?i.title(st.n+1):`${st.goals} DE ${i.total}`,Y("#pdots").innerHTML=Array.from({length:i.total},(t,e)=>`<i class="${st.res[e]===!0?"g":st.res[e]===!1?"f":""}"></i>`).join(""),Y("#pinfo").textContent=st.phase!=="aim"?"\u2026":st.kind==="diana"?"Da a las dianas: cada diana es un punto":st.kind==="falta"?"Por abajo choca con la barrera: busca arriba":"Toca una zona de la porter\xEDa"}function Oy(i){let[t,e]=st.ball,[n,s]=st.fwd,[r,a]=st.right,o=an-t,l=i.z-e,h=o*n+l*s,c=5.5/h,u=(o*c-n*5.5)*r+(l*c-s*5.5)*a;return i.row===0&&u>-2.5&&u<.4}function _p(i){if(st.phase!=="aim")return;st.phase="shoot",st.t=0,vs.classList.remove("on");let t=Ja[st.kind],e=!1,n=!1,s=-1,r=1;if(st.kind==="diana")s=st.targets.indexOf(ar.indexOf(i));else{r=Math.random()<(st.kind==="falta"?.3:.36)?i.col:(i.col+1+(Math.random()*2|0))%3;let p=Math.random()<.5?0:1;t.wall&&Oy(i)?n=!0:e=r===i.col&&(i.row===0||p===1||Math.random()<.35)&&(st.kind!=="falta"||Math.random()<.8)}let[a,o]=st.ball,[l,h]=st.fwd,[c,u]=st.right,f=n?new C(a+l*5.3+c*Lt(-1.8,0),1.5,o+h*5.3+u*Lt(-1.8,0)):new C(an+(e?-.5:1),i.y,i.z);st.shot={z:i,kcol:r,saved:e,blockedW:n,hitT:s,from:me.position.clone(),to:f,kicked:!1},Ba()}function Fy(i){let t=$t.st[Ya],e=Ja[st.kind];if(st.phase==="aim"){t.ph+=i*3,t.x=an-.5,t.z=Me+Math.sin(st.t*1.7)*.5,st.t+=i,Fa.forEach((u,f)=>{u.scale.setScalar(1+Math.sin(st.t*5+f)*.06)});return}if(st.phase!=="shoot"&&st.phase!=="after")return;st.t+=i;let n=st.shot,s=$t.st[ci],[r,a]=st.ball,[o,l]=st.fwd,[h,c]=st.right;if(st.phase==="shoot"){let u=Math.min(1,st.t/.25);s.x=He(r-o*1.6-h*1.7,r-o*.55-h*.4,u),s.z=He(a-l*1.6-c*1.7,a-l*.55-c*.4,u),s.kick=st.t<.35?Math.sin(st.t/.35*Math.PI)*1.4:0,st.t>.2&&!n.kicked&&(n.kicked=!0,te.kick());let f=st.kind==="falta"?.75:.5,p=on((st.t-.22)/f,0,1);if(st.t>.22){if(me.position.lerpVectors(n.from,n.to,p),st.kind==="falta"&&!n.blockedW){let g=Math.sin(p*Math.PI)*1.4;me.position.x-=h*g,me.position.z-=c*g}if(me.position.y=He(.24,n.to.y,p)+Math.sin(p*Math.PI)*(st.kind==="falta"?1.6:.4),me.rotation.z-=.4,e.keeper){let g=on((st.t-.26-(st.kind==="falta"?.2:0))/.38,0,1),x=Me+(n.kcol-1)*2.7;t.z=He(t.z,x,g),t.y=Math.sin(g*Math.PI)*.45,t.roll=g*(n.kcol===1?0:(n.kcol===2?-1:1)*1.2),t.up=n.kcol===1?g:0}e.wall&&qa.forEach(g=>{let x=$t.st[g];x.y=Math.sin(on((st.t-.15)/.5,0,1)*Math.PI)*.6,x.up=.3})}if(p>=1){st.phase="after",st.t=0;let g,x;if(st.kind==="diana"){if(g=n.hitT>=0,x=g?"\xA1Diana!":"Sin diana",g){te.ding();let m=[0,1,2,3,4,5].filter(d=>!st.targets.includes(d));st.targets[n.hitT]=zi(m)}}else n.blockedW?(g=!1,x="Rebota en la barrera",te.thud()):(g=!n.saved,x=g?"\xA1Gol!":"\xA1Parada del portero!");st.res.push(g),g&&(st.goals++,st.kind!=="diana"&&(ea(an+1,1.2,Me,.25),te.roar(1.4,.25))),Ue(x,1100),Ba()}}else if((n.saved||n.blockedW)&&(me.position.x-=o*i*6,me.position.z-=l*i*6,me.position.y=Math.max(.24,me.position.y-i*3)),st.t>1.4)if(st.n++,t.roll=0,t.y=0,t.up=0,st.n>=e.total){st.phase="done",Ba();let u=wt.best[st.kind]=Math.max(wt.best[st.kind]||0,st.goals),f=st.goals>=e.total-1?"En el juego te llevar\xEDas 1 token.":st.goals>=Math.ceil(e.total/2)?"En el juego te llevar\xEDas 0,5 M\u20AC.":"Sin premio esta vez.";di(`${pi("diana","Minijuego terminado",`${st.goals} de ${e.total}`)}<p>${f} Tu mejor marca hoy: ${u}. Los premios ser\xEDan peque\xF1os y una vez al d\xEDa, para no romper la econom\xEDa de la liga.</p><div class="acts"><button type="button" data-k="again">Repetir</button><button type="button" class="ghost" data-k="city">Volver a la ciudad</button></div>`)}else st.phase="aim",xp(),Ba(),vs.classList.add("on")}Y("#pexit").addEventListener("click",()=>sr());var de={t:0,running:!1,idx:0,pen:0,done:!1,hitCD:0},Cu=[0,1,2,3,4,5].map(i=>[50+i*3.2,Me]),Al=Cu.map(([i],t)=>[i,Me+(t%2?-2.3:2.3)]).concat([[71.5,Me]]),za,Iu=[];function By(){za=Ni(!1);for(let[t,e]of Cu)P(.5,.7,.5,t,0,e,"#ff7a1a"),P(.8,.08,.8,t,0,e,"#ff7a1a"),P(.52,.12,.52,t,.45,e,"#f2f5ee");P(.2,2.4,.2,71.5,0,Me-2.6,"#f2f5ee"),P(.2,2.4,.2,71.5,0,Me+2.6,"#f2f5ee"),P(.2,.5,5.4,71.5,2.2,Me,"#ffb21c",{glow:!0}),_n(za);let i=new ks(.8,1.15,28);i.rotateX(-Math.PI/2),Iu=Al.map(([t,e])=>{let n=new re(i,new Be({color:"#ffb21c",transparent:!0,depthWrite:!1}));return n.position.set(t,.14,e),za.add(n),n})}async function vp(){await Ss(),oa(),kt="drill",aa(!1),ys&&(Y("#joy").style.display="");for(let i of fi)$t.st[i.i].vis=!1;sa.visible=!1,yp(),Gi()}function yp(){Object.assign(de,{t:0,running:!1,idx:0,pen:0,done:!1,hitCD:0}),nt.x=46.8,nt.z=Me,nt.ry=Math.PI/2,nt.path=[],$t.st[ci].vis=!0,Object.assign($t.st[hi],{x:62,z:Me+8,y:0,ry:Math.PI,amp:0,vis:!0}),za.visible=!0,me.visible=!0,Vt.position.set(nt.x-10,9,nt.z),Y("#phud").classList.add("on"),Y("#pctl").classList.add("on"),Y("#pdots").innerHTML=Al.map(()=>"<i></i>").join(""),pu()}function pu(){Y("#pt").textContent=de.done?`${(de.t+de.pen).toFixed(1)} s`:`REGATE \xB7 ${(de.t+de.pen).toFixed(1)} s`,Y("#pinfo").textContent=de.done?"Terminado":`${ys?"Joystick":"WASD o flechas"} \xB7 pasa por los aros en orden${de.pen?` \xB7 +${de.pen} s por conos`:""}`,[...Y("#pdots").children].forEach((i,t)=>{i.className=t<de.idx?"g":""}),Iu.forEach((i,t)=>{i.visible=t>=de.idx,i.material.color.set(t===de.idx?"#ffb21c":"#5f6b63")})}var Ld=0;function zy(i){if(de.done)nt.path=[],Na(nt,i);else{let t=ep(-Math.PI/2);t?(nt.path=[[nt.x+t.fx*2,nt.z+t.fz*2]],nt.speed=t.mag>.75?7:4,de.running=!0):nt.path=[],Na(nt,i),nt.x=on(nt.x,45.5,79),nt.z=on(nt.z,-28.3,-7.7),de.running&&(de.t+=i);let[e,n]=Al[de.idx];Math.hypot(nt.x-e,nt.z-n)<1.3&&(de.idx++,te.ding(),de.idx>=Al.length&&ky(),pu()),de.hitCD-=i;for(let[s,r]of Cu)Math.hypot(nt.x-s,nt.z-r)<.65&&de.hitCD<=0&&(de.pen+=1,de.hitCD=.8,te.thud(),Ue("Has tocado un cono: +1 s",900));(Ld-=i)<=0&&(Ld=.1,pu())}me.position.set(nt.x+Math.sin(nt.ry)*.6,.24,nt.z+Math.cos(nt.ry)*.6),nt.moving&&(me.rotation.x+=.25),Iu.forEach((t,e)=>{e===de.idx&&t.scale.setScalar(1+Math.sin(vn*6)*.08)}),Vt.position.lerp(Ln.set(nt.x-9.5,8.8,nt.z),Math.min(1,i*6)),Vt.lookAt(nt.x+3,1,nt.z),ia(nt.x,nt.z)}function ky(){de.done=!0;let i=de.t+de.pen,t=wt.best.regate=Math.min(wt.best.regate??1e9,i),e=i<9?"En el juego te llevar\xEDas 1 token.":i<12?"En el juego te llevar\xEDas 0,5 M\u20AC.":"Sin premio esta vez: baja de 12 s.";setTimeout(()=>di(`${pi("diana","Regate terminado",`${i.toFixed(1)} s`)}<p>${de.pen?`Incluye +${de.pen} s por tocar conos. `:""}${e} Tu mejor tiempo hoy: ${t.toFixed(1)} s.</p><div class="acts"><button type="button" data-k="again">Repetir</button><button type="button" class="ghost" data-k="city">Volver a la ciudad</button></div>`),500)}var Mp=[{q:"El s\xE1bado juegas el derbi contra tu amigo. \xBFC\xF3mo llega tu equipo?",a:[["Con mucho respeto: son un gran equipo","humilde"],["Vamos a ganar, y con goleada","chulo"],["Partido a partido, como siempre","frio"]]},{q:"Tu amigo dice que tu defensa es lenta. \xBFQu\xE9 le respondes?",a:[["Que hable en el campo el s\xE1bado","chulo"],["Algo de raz\xF3n tiene, lo estamos trabajando","humilde"],["No voy a entrar en pol\xE9micas","frio"]]},{q:"\xBFHabr\xE1 fichajes en el pr\xF3ximo mercado?",a:[["Llegar\xE1 un crack, prometido","chulo"],["Estamos contentos con la plantilla","frio"],["Si sale una oportunidad, la miraremos","humilde"]]}],os={step:0,ans:[]};function Pu(i){i===0&&(os.ans=[]),os.step=i;let t=Mp[i];di(`${pi("periodico",`Pregunta ${i+1} de 3`,"Rueda de prensa")}<p class="q">\xAB${t.q}\xBB</p><div class="acts col">${t.a.map(([e],n)=>`<button type="button" data-k="pr:${n}">${e}</button>`).join("")}</div>`)}function bp(i){if(os.ans.push(Mp[os.step].a[i]),os.step<2)return Pu(os.step+1);let t={};os.ans.forEach(([,r])=>{t[r]=(t[r]||0)+1});let e=Object.keys(t).sort((r,a)=>t[a]-t[r])[0],n=os.ans[0][0],s={chulo:[`\xAB${n.toUpperCase()}\xBB`,"El m\xEDster calienta el derbi y el vestuario rival ya ha contestado en el grupo.","moral del equipo +5 % y m\xE1s presi\xF3n"],humilde:["M\xE1ximo respeto antes del derbi",`\xAB${n}\xBB. El t\xE9cnico rebaja la tensi\xF3n antes del s\xE1bado.`,"moral del equipo +2 %"],frio:["Mensaje tranquilo desde el banquillo",`\xAB${n}\xBB. Sin titulares f\xE1ciles antes del derbi.`,"sin cambios"]}[e];di(`${pi("periodico","As\xED lo publicar\xEDa el bot","Noticia en el grupo")}<div class="news"><small>LIGA DE AMIGOS \xB7 RUEDA DE PRENSA</small><b>${s[0]}</b><p>${s[1]}</p></div><p class="note">Efecto en esta prueba: ${s[2]}. En el juego la noticia saldr\xEDa en Telegram con imagen.</p><div class="acts"><button type="button" data-k="press">Repetir</button><button type="button" class="ghost" data-k="close">Cerrar</button></div>`),te.ding()}function Rl(){jr||(jr=!0,gt.distSave=gt.dist,gt.dist=9.5,nt.ry=Math.PI/2,nt.path=[],gt.yawT=Math.PI/2);let i=(t,e,n,s)=>{let r=wt.owned.has(t);return`<button type="button" class="it ${s?"on":""}" data-k="sh:${n}:${t}"><span>${e.n}</span><em>${s?"Puesto":r?"Usar":e.price?e.price+" tokens":"Gratis"}</em></button>`};di(`${pi("sobre-oro",Jr?"Gratis mientras est\xE9 en beta":`Tienes ${wt.tokens} tokens de prueba`,"Personaliza tu personaje")}
  <h3>Ropa</h3><div class="grid">${Object.entries(wu).map(([t,e])=>i(t,e,"kit",wt.av.kit===t)).join("")}</div>
  <h3>Peinado</h3><div class="grid">${Object.entries(Tu).map(([t,e])=>i(t,e,"hair",wt.av.hair===t)).join("")}</div>
  <h3>Color de pelo</h3><div class="sw">${Hi.map(t=>`<button type="button" aria-label="Color de pelo" data-k="sh:hc:${t}" style="background:${t}" class="${wt.av.hairCol===t?"on":""}"></button>`).join("")}</div>
  <h3>Complementos</h3><div class="grid">${Object.entries(qd).map(([t,e])=>i(t,e,"ex",wt.av[e.key])).join("")}</div>
  <p class="note">En el juego se pagar\xEDa con tus tokens reales. Aqu\xED son de prueba.</p><div class="acts"><button type="button" class="ghost" data-k="close">Listo</button></div>`)}function Sp(i){let t=i.indexOf(":"),e=i.slice(0,t),n=i.slice(t+1);if(e==="hc")return wt.av.hairCol=n,Sl(),Rl();let s=e==="kit"?wu[n]:e==="hair"?Tu[n]:qd[n];if(!wt.owned.has(n)&&Jr&&wt.owned.add(n),!wt.owned.has(n)){if(wt.tokens<s.price){Ue("No te quedan tokens de prueba suficientes",1800);return}wt.tokens-=s.price,wt.owned.add(n),s.price&&te.coin()}if(e==="kit"?wt.av.kit=n:e==="hair"?wt.av.hair=n:wt.av[s.key]=!wt.av[s.key],Sl(),Rl(),Jr)try{localStorage.setItem("ciudad-av",JSON.stringify(wt.av))}catch{}}var Zn={T\u00DA:{n:"Tu equipo",c:"#1f9d55"},AMIGO:{n:"Tu amigo",c:"#d93b3b"},TRI:{n:"CF Trit\xF3n",c:"#2f7bd6"},NIE:{n:"Racing Niebla",c:"#8a96a3"},SIE:{n:"Ol\xEDmpico Sierra",c:"#8b5a2b"},BEN:{n:"Beni United",c:"#f0c419"},FAR:{n:"Atl\xE9tico Faro",c:"#e85d2a"},BRI:{n:"Real Brisa",c:"#6fd0e8"},CUM:{n:"Deportivo Cumbre",c:"#5b4bb7"},VOL:{n:"Sporting Volc\xE1n",c:"#b8282f"},MAR:{n:"CD Marea",c:"#1d6f8a"},PIN:{n:"Uni\xF3n Pinar",c:"#2e6b3a"},ATL:{n:"Club Atlas",c:"#d9d9d9"},RIB:{n:"Inter Ribera",c:"#3a3a3a"},DUN:{n:"Rayo Duna",c:"#e6c27a"},BOS:{n:"Bosque FC",c:"#3f7a2d"}},Qt=330,jt=0,Z={k:1,kind:"champions",pots:[[],[]],pairs:[],cur:[],phase:"idle",t:0,shake:0,auto:!1,pick:null,potIdx:0,tense:!1,dur:1,hb:0,cam:null},gn,Zr=[],oi,Cn,mu,Zs=[];function Hy(){gn=Ni(!1),P(40,.2,34,Qt,-.2,jt,"#0c1220"),P(16,.5,9,Qt,0,jt-4,"#141c2e"),P(16.2,.06,9.2,Qt,.5,jt-4,"#22315a");for(let t=0;t<9;t++)P(.12,.07,9,Qt-8+t*2,.52,jt-4,"#2c3d6c");P(40,14,.6,Qt,0,jt-13,"#0a0f1a"),P(.6,14,34,Qt-20,0,jt,"#0a0f1a"),P(.6,14,34,Qt+20,0,jt,"#0a0f1a"),P(40,.4,34,Qt,14,jt,"#070b14"),P(40,14,.6,Qt,0,jt+17,"#0a0f1a"),P(16,.1,.15,Qt,.55,jt+.5,"#ffb21c",{glow:!0}),P(40,.14,.15,Qt,1,jt-12.6,"#ffb21c",{glow:!0});for(let t=-18;t<=18;t+=4)P(.15,13,.15,Qt+t,0,jt-12.6,"#1c2a4a",{glow:!0});for(let t of[-1,1])P(1.8,2.2,1.8,Qt+t*4.2,.5,jt-4,"#1c2740"),P(2,.12,2,Qt+t*4.2,2.7,jt-4,"#ffb21c",{glow:!0});P(1.2,1.3,1.2,Qt,.5,jt+1.6,"#1c2740"),P(1.3,.1,1.3,Qt,1.8,jt+1.6,"#ffb21c",{glow:!0}),_n(gn,{shadow:!1});let i=new An({color:"#cfe8ff",transparent:!0,opacity:.26,depthWrite:!1,emissive:"#2a4066"});for(let[t,e]of[[-9,-2],[9,-2],[0,4]])Di(Qt+t,10,jt+e,14,"#9fc6ff",.25,gn);Zr=[-1,1].map(t=>{let e=new re(new Hs(1.35,28,18),i);e.position.set(Qt+t*4.2,4.15,jt-4),gn.add(e);let n=new re(new Jo(1.36,.05,8,40),new Be({color:"#ffb21c"}));return n.rotation.x=Math.PI/2,e.add(n),Di(e.position.x,6.5,e.position.z,7,"#9fc6ff",.35,gn),e}),oi=new ni(new Hs(.3,14,10),new An({emissive:"#222"}),16),oi.frustumCulled=!1,gn.add(oi);for(let t=0;t<16;t++)Te.set("#ffffff"),oi.setColorAt(t,Te);Cn=new re(new Hs(.34,18,12),new An({color:"#ffffff",emissive:"#333"})),Cn.visible=!1,gn.add(Cn),Di(0,0,0,2.2,"#ffe7b0",.6,Cn),mu=Bd(15,5,1280,426,gn),mu.m.position.set(Qt,6.9,jt-12.65),Di(Qt,2.6,jt+1.6,4,"#ffcb6b",.5,gn)}var Lu=(i,t)=>i==="T\xDA"&&t==="AMIGO"||i==="AMIGO"&&t==="T\xDA";function Ep(){let{x:i,c:t,t:e}=mu;i.fillStyle="#05080f",i.fillRect(0,0,t.width,t.height),i.strokeStyle="#ffb21c",i.lineWidth=8,i.strokeRect(6,6,t.width-12,t.height-12),i.textAlign="left",i.textBaseline="middle",i.fillStyle="#ffb21c",i.font=`900 64px ${ki}`,i.fillText(Z.kind==="champions"?"SORTEO CHAMPIONS \xB7 CUARTOS":"SORTEO DE COPA \xB7 OCTAVOS",40,60),i.font=`800 38px ${ki}`,[...Z.pairs,...Z.cur.length?[[Z.cur[0],null]]:[]].forEach(([s,r],a)=>{let o=40+(a<4?0:620),l=140+a%4*70;i.fillStyle=r&&Lu(s,r)?"#ffb21c":"#f2f5ee",i.fillText(`${Zn[s].n}  vs  ${r?Zn[r].n:"\u2026"}`,o,l)}),e.needsUpdate=!0}function Vy(){Zs=[],Z.pots.forEach((i,t)=>i.forEach(e=>Zs.push({team:e,bi:t,x:Lt(-.6,.6),y:Lt(-.6,.2),z:Lt(-.6,.6),vx:0,vy:0,vz:0}))),Zs.forEach((i,t)=>{Te.set(Zn[i.team].c),oi.setColorAt(t,Te)}),oi.count=Zs.length,oi.instanceColor.needsUpdate=!0,Zr[1].visible=Z.kind==="champions"}function Gy(i){let t=Z.shake;Zs.forEach((e,n)=>{if(e.gone){oi.setMatrixAt(n,hs);return}let s=Z.phase==="shake"&&(Z.kind!=="champions"||e.bi===Z.potIdx)?t:.12;e.vx+=Lt(-1,1)*(2+s*26)*i,e.vy+=(Lt(-1,1)*s*30-6)*i,e.vz+=Lt(-1,1)*(2+s*26)*i,e.x+=e.vx*i,e.y+=e.vy*i,e.z+=e.vz*i,e.vx*=.96,e.vy*=.96,e.vz*=.96;let r=Math.hypot(e.x,e.y,e.z);r>.98&&(e.x*=.98/r,e.y*=.98/r,e.z*=.98/r,e.vx*=-.5,e.vy*=-.5,e.vz*=-.5);let a=Zr[e.bi].position;In.makeTranslation(a.x+e.x,a.y+e.y,a.z+e.z),oi.setMatrixAt(n,In)}),oi.instanceMatrix.needsUpdate=!0}async function wp(i){await Ss(),gn||Hy(),oa(),kt="draw",ra(),aa(!1),gn.visible=!0,ee.fog=null,sa.visible=er.visible=!1;for(let t of fi)$t.st[t.i].vis=!1;$t.st[ci].vis=$t.st[hi].vis=!1,Y("#draw").classList.add("on"),Tp(i),Dl(!0),Gi()}function Tp(i){Z.kind=i,Z.pairs=[],Z.cur=[],Z.phase="idle",Z.auto=!1,Z.t=0,Z.pots=i==="champions"?[["T\xDA","TRI","NIE","SIE"],["AMIGO","BEN","FAR","BRI"]]:[Object.keys(Zn),[]],Vy(),Ep(),Ap(),Y("#dtitle").textContent=i==="champions"?"CHAMPIONS \xB7 CUARTOS DE FINAL":"COPA \xB7 OCTAVOS DE FINAL",Y("#dsub").textContent=i==="champions"?"Bombo 1: cabezas de serie \xB7 Bombo 2: el resto":"Un solo bombo: cualquiera contra cualquiera",Y("#dcard").className="",Y("#dderby").classList.remove("on"),Y("#dnext").disabled=!1,Y("#dauto").textContent="Autom\xE1tico",Y("#vig").classList.remove("on"),Vt.position.set(Qt,5.2,jt+12.5),Vt.lookAt(Qt,3,jt-3),Z.cam={p:Vt.position.clone(),l:new C(Qt,3,jt-3)}}function Ap(){let i=Z.pairs.map(([n,s])=>`<li class="${Lu(n,s)?"derby":""}${n==="T\xDA"||s==="T\xDA"?" mine":""}"><b>${Zn[n].n}</b><span>vs</span><b>${Zn[s].n}</b></li>`);Z.cur.length&&i.push(`<li class="pend"><b>${Zn[Z.cur[0]].n}</b><span>vs</span><b>?</b></li>`);let t=Z.kind==="champions"?4:8;Y("#dlist").innerHTML=`<h4>Cruces ${Z.pairs.length}/${t}</h4><ul>${i.join("")||'<li class="empty">Pulsa \xABSacar bola\xBB para empezar</li>'}</ul>`;let e=Y("#dlist ul");e.scrollTop=e.scrollHeight}function Nl(){if(Z.phase!=="idle")return;let i=Z.kind==="champions"&&Z.cur.length?1:0,t=Z.pots[i];if(!t.length)return;let e=t.splice(Math.random()*t.length|0,1)[0];Z.pick=e,Z.potIdx=i;let n=Z.cur[0],s=t.concat([e]);Z.tense=e==="T\xDA"||e==="AMIGO"||n&&(n==="T\xDA"||n==="AMIGO")&&s.some(r=>r==="T\xDA"||r==="AMIGO"),Z.k=Z.auto&&!Z.tense?.55:1,Z.phase="shake",Z.t=0,Z.hb=0,Y("#dnext").disabled=!0,Y("#dcard").className="",Y("#dderby").classList.remove("on"),te.drum(1.5)}function Wy(i){Z.t+=i,Gy(i);let t=Zr[Z.potIdx].position,e=new C(Qt,5.2,jt+12.5),n=new C(Qt,3,jt-3);if(Z.phase==="shake"){if(Z.shake=1,e.set(t.x*.35+Qt*.65,4.6,jt+8.5),n.set(t.x,4,t.z),Zr[Z.potIdx].rotation.y+=i*6,Z.t>1.5*Z.k){Z.phase="rise",Z.t=0,Z.shake=.15;let s=Zs.findIndex(r=>r.team===Z.pick&&!r.gone);s>=0&&(Zs[s].gone=!0),Cn.visible=!0,Cn.scale.setScalar(1),Cn.position.set(t.x,t.y+1.45,t.z)}}else if(Z.phase==="rise"){let s=yl(Math.min(1,Z.t/(1.2*Z.k))),r=new C(t.x,t.y+1.45,t.z),a=new C(Qt,2.25,jt+1.6);Cn.position.lerpVectors(r,a,s),Cn.position.y+=Math.sin(s*Math.PI)*1.6,e.set(Qt,3.6,jt+9),n.set(Qt,2.6,jt),Z.t>1.2*Z.k&&(Z.phase="suspense",Z.t=0,Z.dur=Z.tense?2.8:1.1*Z.k,Y("#vig").classList.toggle("on",Z.tense),Z.tense&&Ue("Tensi\xF3n en la sala\u2026",1400))}else if(Z.phase==="suspense"){let s=yl(Math.min(1,Z.t/Z.dur));if(e.set(Qt,He(3.6,2.6,s),He(jt+9,jt+4.6,s)),n.set(Qt,2.25,jt+1.6),Cn.rotation.y+=i*(2+s*10),Cn.scale.setScalar(1+Math.sin(Z.t*12)*.03*s),Z.tense&&(Z.hb-=i)<=0&&(Z.hb=.75,te.heart()),Z.t>Z.dur){Z.phase="reveal",Z.t=0,Cn.visible=!1,Y("#vig").classList.remove("on");let r=Zn[Z.pick],a=Y("#dcard"),o=Z.pick==="T\xDA"||Z.pick==="AMIGO";Y("#dpot").textContent=Z.kind==="champions"?`BOMBO ${Z.potIdx+1}`:"BOMBO \xDANICO",Y("#dname").textContent="",Y("#dcol").style.background=r.c,a.className="on"+(o?" big":"");let l=0,h=r.n.toUpperCase(),c=setInterval(()=>{l++,Y("#dname").textContent=h.slice(0,l),l>=h.length&&clearInterval(c)},40);te.reveal(o),ea(Qt,2.4,jt+1.6,.35,[r.c,"#f2f5ee","#ffb21c"],o?160:60),Z.cur.push(Z.pick),Z.cur.length===2&&(Z.pairs.push([Z.cur[0],Z.cur[1]]),Lu(Z.cur[0],Z.cur[1])&&setTimeout(()=>{kt==="draw"&&(Y("#dderby").classList.add("on"),ea(Qt,3,jt+1,1,["#1f9d55","#d93b3b","#ffb21c","#f2f5ee"]),te.roar(3,.55))},700),Z.cur=[]),Ap(),Ep()}}else Z.phase==="reveal"?(e.set(Qt,2.9,jt+6),n.set(Qt,2.4,jt),Z.t>(Z.auto?Z.tense?2.2:1.2:1.4)&&(Z.phase="idle",Z.t=0,Z.shake=.15,Y("#dnext").disabled=!1,!Z.pots[0].length&&!Z.pots[1].length?(Y("#dnext").disabled=!0,setTimeout(Xy,1200)):Z.auto&&setTimeout(()=>{kt==="draw"&&Z.auto&&Nl()},Z.tense?500:250))):(Z.shake=.15,Zr.forEach(s=>{s.rotation.y+=i*.5}));Z.cam.p.lerp(e,Math.min(1,i*2.6)),Z.cam.l.lerp(n,Math.min(1,i*2.6)),Vt.position.copy(Z.cam.p),Vt.lookAt(Z.cam.l),ia(Qt,jt)}function Xy(){if(kt!=="draw")return;let i=Z.pairs.find(s=>s.includes("T\xDA")),t=Z.pairs.find(s=>s.includes("AMIGO")),e=i.includes("AMIGO"),n=(s,r)=>Zn[s[0]===r?s[1]:s[0]].n;di(`${pi("nav-liga",Z.kind==="champions"?"Sorteo de Champions":"Sorteo de Copa",e?"\xA1Derbi de amigos!":"Sorteo terminado")}<p>${e?"Os ha tocado juntos: el que gane pasa y el otro se queda fuera.":`Tu rival: <b>${n(i,"T\xDA")}</b>. Tu amigo se cruza con <b>${n(t,"AMIGO")}</b>.`}</p><ul>${Z.pairs.map(([s,r])=>`<li>${Zn[s].n} <b>vs</b> ${Zn[r].n}</li>`).join("")}</ul><p class="note">En el juego el sorteo ser\xEDa uno solo para todos y lo anunciar\xEDa el bot en el grupo.</p><div class="acts"><button type="button" data-k="again">Repetir sorteo</button><button type="button" class="ghost" data-k="city">Volver a la ciudad</button></div>`)}Y("#dnext").addEventListener("click",()=>Nl());Y("#dauto").addEventListener("click",()=>{Z.auto=!Z.auto,Y("#dauto").textContent=Z.auto?"Manual":"Autom\xE1tico",Z.auto&&Nl()});Y("#dexit").addEventListener("click",()=>sr());function oa(){qe(),ee.fog=Ud,Ga(!1),Un.visible=!1,We.visible=!1,_s.visible=!1,B.phase="off",me.visible=!1,$r.visible=!1,za.visible=!1,gn&&(gn.visible=!1),Fa.forEach(i=>{i.visible=!1}),he.trophy&&(ee.remove(he.trophy),he.trophy=null),Y("#goal").classList.remove("on"),Vt.fov=Ha,Vt.updateProjectionMatrix();for(let i=0;i<23;i++)Un.st[i].vis=!1;["#mhud","#mctl","#mcomm","#phud","#pctl","#zones","#celeb","#draw","#vig","#dderby"].forEach(i=>Y(i).classList.remove("on")),Y("#dcard").className="";for(let i of[...qa,Ya])Object.assign($t.st[i],{vis:!1,roll:0,y:0,up:0});Object.assign($t.st[ci],{seat:0,y:0,kick:0,roll:0,up:0}),Object.assign($t.st[hi],{seat:0,y:0,up:0}),It.cele=0,It.celeTeam=-1,It.end=!0}async function sr(){await Ss();let i=kt,t=he.kind;oa(),kt="city",aa(!0),ra();for(let s of fi)s.inside>0||($t.st[s.i].vis=!0);$t.st[ci].vis=$t.st[hi].vis=!0,sa.visible=er.visible=!0,nt.speed=nt.base,$a(wt.md,!0);let e=i==="pens"||i==="drill"?"entreno":i==="draw"?"oficina":"estadio",n=Nn.find(s=>s.id===e);if(nt.x=n.door[0]-n.look[0]*2.2,nt.z=n.door[1]-n.look[1]*2.2,nt.ry=Math.atan2(n.look[0],n.look[1]),nt.path=[],Re.x=nt.x-n.look[1]*2,Re.z=nt.z+n.look[0]*2,Re.path=[],gt.yaw=Math.atan2(-n.look[0],-n.look[1]),gt.yawT=null,gt.tx=nt.x,gt.tz=nt.z,Qr(0),i==="celeb"){wt.won.add(t),bu();let s=Bi[t].name;setTimeout(()=>Ue(`El trofeo de ${s} ya est\xE1 en las vitrinas de la Sala de trofeos`,3600),500)}Gi()}var qy=new nl,vl=0,vn=0,Ln=new C,Li=new C;function Yy(i){let t=De.sheetw.classList.contains("on"),e=t?null:ep(gt.yaw);if(e?(nt.path=[[nt.x+e.fx*2,nt.z+e.fz*2]],nt.onArrive=null,nt.auto=!1,nt.speed=e.mag>.75?7.5:4.2):nt.speed=nt.base,Na(nt,i),Re.greet>0){Re.greet-=i;let o=$t.st[hi];o.up=.5+Math.sin(vn*8)*.5,o.ry=Math.atan2(nt.x-Re.x,nt.z-Re.z),o.amp=0,o.x=Re.x,o.z=Re.z,Re.greet<=0&&(o.up=0)}else wd(Re,i),Na(Re,i);for(let o of fi)wd(o,i),o.inside>0||Na(o,i);let n=[nt,Re,...fi.filter(o=>!(o.inside>0))];for(let o=0;o<n.length;o++)for(let l=o+1;l<n.length;l++){let h=n[o],c=n[l],u=c.x-h.x,f=c.z-h.z,p=Math.hypot(u,f);if(p>0&&p<.9){let g=(.9-p)*.5,x=u/p*g,m=f/p*g;h!==nt&&!ps(h.x-x,h.z-m)&&(h.x-=x,h.z-=m),c!==nt&&!ps(c.x+x,c.z+m)&&(c.x+=x,c.z+=m)}}fy(i);let s=null;for(let o of Nn)Math.hypot(o.door[0]-nt.x,o.door[1]-nt.z)<3.2&&(s=o);s!==gs&&(gs=s,s?(De.act.querySelector("img").src=`img/${s.icon}.webp`,De.act.querySelector("span").textContent=`ENTRAR \xB7 ${s.short.toUpperCase()}`,De.act.classList.add("on")):De.act.classList.remove("on"),De.chips.querySelectorAll("button").forEach(o=>o.classList.toggle("here",!!s&&o.dataset.go===s.id)));for(let o of Nn)o.ring.material.opacity=.45+Math.sin(vn*3)*.25+(o===gs?.3:0),o.icon3d.position.y=5.2+Math.sin(vn*2+o.door[0])*.2;Yn.visible&&(Yn.material.opacity-=i*1.4,Yn.scale.multiplyScalar(1+i*.6),Yn.material.opacity<=0&&(Yn.visible=!1)),gt.tx=He(gt.tx,nt.x,Math.min(1,i*8)),gt.tz=He(gt.tz,nt.z,Math.min(1,i*8)),nt.auto&&nt.moving&&!Oi&&(gt.yaw=tr(gt.yaw,nt.ry+Math.PI,Math.min(1,i*1.6))),gt.yawT!=null&&(gt.yaw=tr(gt.yaw,gt.yawT,Math.min(1,i*3)),Math.abs((gt.yawT-gt.yaw+9*Math.PI)%(2*Math.PI)-Math.PI)<.01&&(gt.yawT=null));let r=Math.cos(gt.pitch),a=gt.dist;for(let o=.12;o<=1.001;o+=.06){let l=gt.tx+Math.sin(gt.yaw)*gt.dist*r*o,h=gt.tz+Math.cos(gt.yaw)*gt.dist*r*o,c=1.5+Math.sin(gt.pitch)*gt.dist*o;if(Cl.some(u=>u[4]>c-.8&&(u[1]-u[0])*(u[3]-u[2])>6&&l>u[0]-.8&&l<u[1]+.8&&h>u[2]-.8&&h<u[3]+.8)){a=Math.max(5,gt.dist*(o-.08));break}}if(gt.cd=He(gt.cd||a,a,Math.min(1,i*(a<(gt.cd||a)?12:2.5))),Ln.set(gt.tx+Math.sin(gt.yaw)*gt.cd*r,1.5+Math.sin(gt.pitch)*gt.cd,gt.tz+Math.cos(gt.yaw)*gt.cd*r),Vt.position.lerp(Ln,Math.min(1,i*10)),jr){let o=Vt.aspect>=1?2.8:0;Vt.lookAt(gt.tx+Math.cos(gt.yaw)*o,Vt.aspect>=1?1.6:-1.6,gt.tz-Math.sin(gt.yaw)*o)}else Vt.lookAt(gt.tx,1.6,gt.tz);ia(nt.x,nt.z),sa.position.set(nt.x,2.6,nt.z),er.position.set(Re.x,2.6,Re.z),js>0&&(js-=i,js<=0&&(Au.style.opacity=0)),vl%3===0&&uy()}function Rp(i,t,e,n){let s=Vt.aspect<1,r=n?he.cam:It.cam;if(r==="free"){Vt.position.copy(It.camPos),Vt.lookAt(It.camLook);return}if(r==="palco")Ln.set(It.yawOff*5,8.3,H+27.6),Li.set(t*(s?.7:.45)+It.yawOff*26,n?1.2:s?-.6:.4,H+e*.15+(n?0:s?3:-2));else if(n){let o=vn*.18;Ln.set(Math.sin(o)*13,4.2,H+Math.cos(o)*13+2),Li.set(0,2.2,H)}else Ln.set(t*.85,s?12:8.5,H+(s?26:19)),Li.set(t*.95,.4,H+e*.35);It.camPos.lerp(Ln,Math.min(1,i*3)),It.camLook.lerp(Li,Math.min(1,i*3)),Vt.position.copy(It.camPos),Vt.lookAt(It.camLook);let a=n&&r==="palco"?Ha-Math.min(16,he.t*2.4):Ha;Math.abs(Vt.fov-a)>.01&&(Vt.fov=He(Vt.fov,a,Math.min(1,i*1.5)),Vt.updateProjectionMatrix()),ia(0,H)}function Cp(){if(requestAnimationFrame(Cp),document.hidden)return;let i=Math.min(qy.getDelta(),.05);vn+=i,vl++,Jv();for(let t=0,e=window.__fast||1;t<e;t++)if(kt==="city")Yy(i);else if(kt==="match")Iy(i);else if(kt==="celeb")Ny(i),Rp(i,0,0,!0);else if(kt==="pens"){Fy(i),ia(an-6,Me);let n=$t.st[hi];er.position.set(n.x,2.6,n.z)}else if(kt==="drill"){zy(i);let n=$t.st[hi];er.position.set(n.x,2.6,n.z)}else kt==="draw"&&Wy(i);kt==="match"?(We.update(),Sy(),vl%2===0&&Qr(vn)):kt==="celeb"&&(Un.update(),vl%2===0&&Qr(vn)),$t.update(),py(i),gy(i),gu.position.copy(Vt.position),bs.render(ee,Vt)}async function $y(){try{await Promise.race([Promise.all([document.fonts.load('900 64px "Big Shoulders Display"'),document.fonts.load("700 30px Barlow")]),new Promise(e=>setTimeout(e,2500))])}catch{}let i=async(e,n)=>{let s=Y("#load p");s&&(s.textContent=e),await new Promise(r=>requestAnimationFrame(()=>setTimeout(r,0))),n()};await i("Colocando la plaza\u2026",()=>{Xv(),qv(),Yv(),_n()}),await i("Levantando el estadio\u2026",()=>Kv()),await i("Construyendo la ciudad\u2026",()=>{Qv(),ty(),ny()}),await i("Llenando la grada\u2026",()=>{dy(),Dy(),By()});let t=new re(new je(14,4.4),new Be({map:Su}));t.position.set(0,9.4,H-20.15),ee.add(t),P(14.6,5,.4,0,6.9,H-20.45,j.dark),_n(),fn("LIGA DE AMIGOS",-43.85,2.4,20.6,Math.PI/2,1.6,.9,{bg:"#0b1f14",fg:"#4bd474"}),bu(),Ru(1),hy(),yd(),addEventListener("resize",yd),Vt.position.set(0,14,34),Vt.lookAt(0,2,0),$a(!0,!0),$s.t=0,us.position.x=-98,Y("#load p").textContent="Encendiendo los focos\u2026",bs.compile(ee,Vt),Cp(),window.__loaded=!0,setTimeout(()=>{Y("#load").style.opacity=0,setTimeout(()=>Y("#load").remove(),600),Dl(!0)},200)}window.__city={get mode(){return kt},SND:Ks,MUS:Ii,mp:We,NETS:Il,netHit:Wd,ball:me,me:nt,friend:Re,AREAS:Nn,M:It,P:st,DR:Z,RM:B,DRL:de,CEL:he,ST:wt,goTo:Ll,enterMatch:Yr,enterShots:mp,enterDrill:vp,enterDraw:wp,enterCeleb:dp,backToCity:sr,setMD:$a,setVisit:ip,upgradeStadium:sp,openShop:Rl,shopAction:Sp,pressStep:Pu,pressAnswer:bp,drawNext:Nl,penShot:_p,ZONES:ar,photo:Ul,renderer:bs,get nearArea(){return gs}};function Zy(i){B.m=i,B.ext.m=i,B.htT=null;let t=B.tl=Fi.build(i);for(B.mot=Fi.Motion(t,B.mot.st),fp(t,!1),B.bi=0,B.ci=0,B.ki=0;B.bi<t.banners.length&&t.banners[B.bi].t<=B.r;)B.bi++;for(;B.ci<t.comm.length&&t.comm[B.ci].t<=B.r;)B.ci++;for(;B.ki<t.kicks.length&&t.kicks[B.ki].t<=B.r;)B.ki++}function Jy(){let i=t=>Nn.find(e=>e.id===t);Object.assign(i("estadio"),{text:"Tu estadio. Desde el palco VIP ves tu \xFAltimo partido de liga, con el mismo resultado que en el juego. Las celebraciones saldr\xE1n aqu\xED cuando ganes un t\xEDtulo.",acts:[["Ver mi \xFAltimo partido desde el palco","lastmatch"]]}),Object.assign(i("entreno"),{text:"Minijuegos para practicar. De momento no dan premio: m\xE1s adelante contar\xE1n como entrenamiento de tus jugadores."}),Object.assign(i("vestuario"),{acts:[["Abrir mi alineaci\xF3n","nav:equipo"]]}),Object.assign(i("prensa"),{text:"Pr\xF3ximamente: ruedas de prensa antes de los derbis, publicadas por el bot en el grupo.",acts:[]}),Object.assign(i("tienda"),{text:"Personaliza tu personaje: equipaciones, peinados, gorra y bufanda. Los sobres y la ruleta est\xE1n en el juego.",acts:[["Personalizar mi personaje","shop"],["Ir al mercado","nav:mercado"]]}),Object.assign(i("oficina"),{text:"Finanzas, mejoras del estadio y tokens: se gestionan en el club. Los sorteos de Copa y Champions los retransmite el bot en el grupo.",acts:[["Ir a mi club","nav:club"]]}),Object.assign(i("museo"),{text:"Las vitrinas guardan los t\xEDtulos de tu club."})}function Ky(){document.body.classList.add("cityg"),Jy();{let i=document.createElement("button");i.id="tExit",i.type="button",i.textContent="Salir al juego",i.addEventListener("click",Ol),Y("#tools").appendChild(i)}try{let i=JSON.parse(localStorage.getItem("ciudad-av")||"null");i&&(Object.assign(wt.av,i),Sl())}catch{}addEventListener("message",i=>{if(i.origin!==location.origin||!i.data||i.data.type!=="city-init")return;let t=i.data;Xn.team=t.team,Xn.rival=t.rival,Xn.last=t.last,Xn.news=t.news||[],Xn.trophies=t.trophies||[];try{Ru(Math.max(1,Math.min(3,t.level||1))),$a(!!t.matchToday,!0)}catch(n){console.warn(n)}let e=Nn.find(n=>n.id==="bar");if(e.extra=Xn.news.length?"<ul>"+Xn.news.map(n=>`<li>${Dd(n)}</li>`).join("")+"</ul>":'<p class="note">A\xFAn no hay noticias.</p>',t.team){let n=document.querySelector("#club p, header p, h1 + p");n&&(n.textContent=t.team.name+(t.rival&&t.matchToday?" \xB7 hoy juegas contra "+t.rival.name:"")),Ue(`Bienvenido a la ciudad deportiva de ${t.team.name}`,2600)}}),parent.postMessage({type:"palco-ready"},location.origin)}function Ol(){try{parent.postMessage({type:"palco-close",r:kt==="match"&&B.ext?B.r:0},location.origin)}catch{}}function jy(){document.body.classList.add("embed"),aa(!1);let i=document.createElement("div");i.id="ewait",i.innerHTML='<h2>PALCO VIP</h2><p>Preparando el partido\u2026</p><button type="button" disabled>Entrar al palco</button><a href="#" id="eback">Volver a la vista normal</a>',document.body.appendChild(i);let t=null;Y("#eback").addEventListener("click",n=>{n.preventDefault(),Ol()});let e=Y("#ewait button");e.addEventListener("click",async()=>{t&&(Vi(),$d.forEach(nr),nr("canticos"),i.remove(),await Yr(t))}),addEventListener("message",n=>{if(!(n.origin!==location.origin||!n.data)){if(n.data.type==="palco-update"){t&&(t.m=n.data.m),kt==="match"&&B.ext&&!B.end&&Zy(n.data.m);return}n.data.type==="palco-match"&&(t=n.data,e.disabled=!1,Y("#ewait p").textContent=`${t.H.name} \u2013 ${t.A.name}${t.live?" \xB7 en directo":""}`)}}),parent.postMessage({type:"palco-ready"},location.origin)}$y().then(()=>{ka?jy():Jr&&Ky()}).catch(i=>{if(ka)try{parent.postMessage({type:"palco-error",msg:String(i&&i.message)},location.origin)}catch{}let t=Y("#err");t.style.display="block",t.textContent="No se pudo cargar la ciudad: "+i.message,console.error(i)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
