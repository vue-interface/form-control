(function(i,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],o):(i=typeof globalThis<"u"?globalThis:i||self,o(i.FormControl={},i.Vue))})(this,function(i,o){"use strict";const b={};function u(...t){if(!t.length)return b;const[e,r]=t;return typeof e=="string"?typeof b[e]<"u"?b[e]:r:Array.isArray(e)?e.reduce((n,s)=>Object.assign(n,{[s]:b[s]}),{}):Object.assign(b,...t)}const F=o.defineComponent({props:{dropShadow:{type:[Boolean,String],default:void 0},dropShadowableClassPrefix:{type:String,default:"drop-shadow"},shadow:{type:[Boolean,String],default:void 0},shadowableClassPrefix:{type:String,default:"shadow"}},computed:{shadowableClass(){const t=this.dropShadow===!0?"":this.dropShadow&&`-${this.dropShadow}`,e=this.shadow===!0?"":this.shadow&&`-${this.shadow}`;return{[`${this.dropShadowableClassPrefix}${t}`]:!!this.dropShadow,[`${this.shadowableClassPrefix}${e}`]:!!this.shadow}}}});var At=typeof global=="object"&&global&&global.Object===Object&&global;const P=At;var Ot=typeof self=="object"&&self&&self.Object===Object&&self,Tt=P||Ot||Function("return this")();const c=Tt;var wt=c.Symbol;const p=wt;var M=Object.prototype,Et=M.hasOwnProperty,kt=M.toString,y=p?p.toStringTag:void 0;function Ft(t){var e=Et.call(t,y),r=t[y];try{t[y]=void 0;var n=!0}catch{}var s=kt.call(t);return n&&(e?t[y]=r:delete t[y]),s}var Pt=Object.prototype,Mt=Pt.toString;function Bt(t){return Mt.call(t)}var It="[object Null]",Rt="[object Undefined]",B=p?p.toStringTag:void 0;function l(t){return t==null?t===void 0?Rt:It:B&&B in Object(t)?Ft(t):Bt(t)}function m(t){return t!=null&&typeof t=="object"}var zt="[object Symbol]";function Lt(t){return typeof t=="symbol"||m(t)&&l(t)==zt}function Vt(t,e){for(var r=-1,n=t==null?0:t.length,s=Array(n);++r<n;)s[r]=e(t[r],r,t);return s}var Nt=Array.isArray;const I=Nt;var Ut=1/0,R=p?p.prototype:void 0,z=R?R.toString:void 0;function L(t){if(typeof t=="string")return t;if(I(t))return Vt(t,L)+"";if(Lt(t))return z?z.call(t):"";var e=t+"";return e=="0"&&1/t==-Ut?"-0":e}function $(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var _t="[object AsyncFunction]",Dt="[object Function]",Wt="[object GeneratorFunction]",Gt="[object Proxy]";function V(t){if(!$(t))return!1;var e=l(t);return e==Dt||e==Wt||e==_t||e==Gt}var Zt=c["__core-js_shared__"];const C=Zt;var N=function(){var t=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Ht(t){return!!N&&N in t}var qt=Function.prototype,Jt=qt.toString;function d(t){if(t!=null){try{return Jt.call(t)}catch{}try{return t+""}catch{}}return""}var Kt=/[\\^$.*+?()[\]{}|]/g,Yt=/^\[object .+?Constructor\]$/,Xt=Function.prototype,Qt=Object.prototype,te=Xt.toString,ee=Qt.hasOwnProperty,re=RegExp("^"+te.call(ee).replace(Kt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ne(t){if(!$(t)||Ht(t))return!1;var e=V(t)?re:Yt;return e.test(d(t))}function oe(t,e){return t==null?void 0:t[e]}function x(t,e){var r=oe(t,e);return ne(r)?r:void 0}var ae=x(c,"WeakMap");const S=ae;var se=9007199254740991;function U(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=se}function ie(t){return t!=null&&U(t.length)&&!V(t)}var ue=Object.prototype;function _(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||ue;return t===r}var ce="[object Arguments]";function D(t){return m(t)&&l(t)==ce}var W=Object.prototype,le=W.hasOwnProperty,de=W.propertyIsEnumerable,fe=D(function(){return arguments}())?D:function(t){return m(t)&&le.call(t,"callee")&&!de.call(t,"callee")};const pe=fe;function he(){return!1}var G=typeof i=="object"&&i&&!i.nodeType&&i,Z=G&&typeof module=="object"&&module&&!module.nodeType&&module,ge=Z&&Z.exports===G,H=ge?c.Buffer:void 0,be=H?H.isBuffer:void 0,ye=be||he;const me=ye;var xe="[object Arguments]",ve="[object Array]",je="[object Boolean]",$e="[object Date]",Ce="[object Error]",Se="[object Function]",Ae="[object Map]",Oe="[object Number]",Te="[object Object]",we="[object RegExp]",Ee="[object Set]",ke="[object String]",Fe="[object WeakMap]",Pe="[object ArrayBuffer]",Me="[object DataView]",Be="[object Float32Array]",Ie="[object Float64Array]",Re="[object Int8Array]",ze="[object Int16Array]",Le="[object Int32Array]",Ve="[object Uint8Array]",Ne="[object Uint8ClampedArray]",Ue="[object Uint16Array]",_e="[object Uint32Array]",a={};a[Be]=a[Ie]=a[Re]=a[ze]=a[Le]=a[Ve]=a[Ne]=a[Ue]=a[_e]=!0,a[xe]=a[ve]=a[Pe]=a[je]=a[Me]=a[$e]=a[Ce]=a[Se]=a[Ae]=a[Oe]=a[Te]=a[we]=a[Ee]=a[ke]=a[Fe]=!1;function De(t){return m(t)&&U(t.length)&&!!a[l(t)]}function We(t){return function(e){return t(e)}}var q=typeof i=="object"&&i&&!i.nodeType&&i,v=q&&typeof module=="object"&&module&&!module.nodeType&&module,Ge=v&&v.exports===q,A=Ge&&P.process,Ze=function(){try{var t=v&&v.require&&v.require("util").types;return t||A&&A.binding&&A.binding("util")}catch{}}();const J=Ze;var K=J&&J.isTypedArray,He=K?We(K):De;const qe=He;function Y(t,e){return function(r){return t(e(r))}}var Je=Y(Object.keys,Object);const Ke=Je;var Ye=Object.prototype,Xe=Ye.hasOwnProperty;function Qe(t){if(!_(t))return Ke(t);var e=[];for(var r in Object(t))Xe.call(t,r)&&r!="constructor"&&e.push(r);return e}var tr=x(c,"Map");const O=tr;function X(t){return t==null?"":L(t)}var er=Y(Object.getPrototypeOf,Object);const rr=er;var nr="[object Object]",or=Function.prototype,ar=Object.prototype,Q=or.toString,sr=ar.hasOwnProperty,ir=Q.call(Object);function ur(t){if(!m(t)||l(t)!=nr)return!1;var e=rr(t);if(e===null)return!0;var r=sr.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&Q.call(r)==ir}function cr(t,e,r,n){var s=-1,g=t==null?0:t.length;for(n&&g&&(r=t[++s]);++s<g;)r=e(r,t[s],s,t);return r}function lr(t){return function(e){return t==null?void 0:t[e]}}var dr={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},fr=lr(dr);const pr=fr;var hr=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,gr="\\u0300-\\u036f",br="\\ufe20-\\ufe2f",yr="\\u20d0-\\u20ff",mr=gr+br+yr,xr="["+mr+"]",vr=RegExp(xr,"g");function jr(t){return t=X(t),t&&t.replace(hr,pr).replace(vr,"")}var $r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Cr(t){return t.match($r)||[]}var Sr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Ar(t){return Sr.test(t)}var tt="\\ud800-\\udfff",Or="\\u0300-\\u036f",Tr="\\ufe20-\\ufe2f",wr="\\u20d0-\\u20ff",Er=Or+Tr+wr,et="\\u2700-\\u27bf",rt="a-z\\xdf-\\xf6\\xf8-\\xff",kr="\\xac\\xb1\\xd7\\xf7",Fr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pr="\\u2000-\\u206f",Mr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",nt="A-Z\\xc0-\\xd6\\xd8-\\xde",Br="\\ufe0e\\ufe0f",ot=kr+Fr+Pr+Mr,at="['’]",st="["+ot+"]",Ir="["+Er+"]",it="\\d+",Rr="["+et+"]",ut="["+rt+"]",ct="[^"+tt+ot+it+et+rt+nt+"]",zr="\\ud83c[\\udffb-\\udfff]",Lr="(?:"+Ir+"|"+zr+")",Vr="[^"+tt+"]",lt="(?:\\ud83c[\\udde6-\\uddff]){2}",dt="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+nt+"]",Nr="\\u200d",ft="(?:"+ut+"|"+ct+")",Ur="(?:"+h+"|"+ct+")",pt="(?:"+at+"(?:d|ll|m|re|s|t|ve))?",ht="(?:"+at+"(?:D|LL|M|RE|S|T|VE))?",gt=Lr+"?",bt="["+Br+"]?",_r="(?:"+Nr+"(?:"+[Vr,lt,dt].join("|")+")"+bt+gt+")*",Dr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Wr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Gr=bt+gt+_r,Zr="(?:"+[Rr,lt,dt].join("|")+")"+Gr,Hr=RegExp([h+"?"+ut+"+"+pt+"(?="+[st,h,"$"].join("|")+")",Ur+"+"+ht+"(?="+[st,h+ft,"$"].join("|")+")",h+"?"+ft+"+"+pt,h+"+"+ht,Wr,Dr,it,Zr].join("|"),"g");function qr(t){return t.match(Hr)||[]}function Jr(t,e,r){return t=X(t),e=r?void 0:e,e===void 0?Ar(t)?qr(t):Cr(t):t.match(e)||[]}var Kr="['’]",Yr=RegExp(Kr,"g");function Xr(t){return function(e){return cr(Jr(jr(e).replace(Yr,"")),t,"")}}var Qr=x(c,"DataView");const T=Qr;var tn=x(c,"Promise");const w=tn;var en=x(c,"Set");const E=en;var yt="[object Map]",rn="[object Object]",mt="[object Promise]",xt="[object Set]",vt="[object WeakMap]",jt="[object DataView]",nn=d(T),on=d(O),an=d(w),sn=d(E),un=d(S),f=l;(T&&f(new T(new ArrayBuffer(1)))!=jt||O&&f(new O)!=yt||w&&f(w.resolve())!=mt||E&&f(new E)!=xt||S&&f(new S)!=vt)&&(f=function(t){var e=l(t),r=e==rn?t.constructor:void 0,n=r?d(r):"";if(n)switch(n){case nn:return jt;case on:return yt;case an:return mt;case sn:return xt;case un:return vt}return e});const cn=f;var ln="[object Map]",dn="[object Set]",fn=Object.prototype,pn=fn.hasOwnProperty;function hn(t){if(t==null)return!0;if(ie(t)&&(I(t)||typeof t=="string"||typeof t.splice=="function"||me(t)||qe(t)||pe(t)))return!t.length;var e=cn(t);if(e==ln||e==dn)return!t.size;if(_(t))return!Qe(t).length;for(var r in t)if(pn.call(t,r))return!1;return!0}var gn=Xr(function(t,e,r){return t+(r?"-":"")+e.toLowerCase()});const j=gn,$t=o.defineComponent({__name:"FormControlErrors",props:{error:null,errors:null,name:null,id:null},setup(t){const e=t,r=String((e==null?void 0:e.id)||(e==null?void 0:e.name)),n=o.computed(()=>e.error?new Map([[r,[e.error]]]):ur(e.errors)?new Map(Object.entries(e.errors)):Array.isArray(e.errors)?new Map([[r,e.errors]]):new Map);return(s,g)=>(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(o.unref(n).get(o.unref(r)),xn=>o.renderSlot(s.$slots,"default",o.normalizeProps(o.guardReactiveProps({key:o.unref(r),error:xn})))),256))}}),bn=o.defineComponent({__name:"FormControlFeedback",props:{feedback:null},setup(t){return(e,r)=>(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList([].concat(t.feedback),n=>o.renderSlot(e.$slots,"default",o.normalizeProps(o.guardReactiveProps({feedback:n})))),256))}});function Ct(t,e,r="-"){const n=String(e).replace(new RegExp(`^${t}${r}?`),"");return[j(n),t].filter(s=>!!s).join(r)}const yn=o.defineComponent({components:{FormControlErrors:$t,FormControlFeedback:bn},directives:{bindEvents:{created(t,e){var r,n;(n=(r=e.instance)==null?void 0:r.bindEvents)==null||n.call(r,t)}}},mixins:[F],inheritAttrs:!1,props:{activity:{type:Boolean,default:!1},animated:{type:Boolean,default:()=>u("animated",!1)},controlClass:{type:[Array,Object,String],default:void 0},error:{type:[String,Array,Boolean],default:void 0},errors:{type:[Array,Object,Boolean],default(){return{}}},feedback:{type:[String,Array],default:void 0},formControlClass:{type:[Array,Object,String],default:()=>u("controlClass","form-control")},group:{type:Boolean,default:()=>u("group",!0)},helpText:{type:[Number,String],default:void 0},indicator:{type:[Object,String,Boolean],default:()=>u("indicator","spinner")},indicatorSize:{type:String,default:void 0},invalid:Boolean,label:{type:[Number,String],default:void 0},labelClass:{type:[Object,String],default:()=>u("labelClass","form-label")},modelValue:{type:[Boolean,Number,String,Array,Object],default:void 0},plaintext:Boolean,size:{type:String,default:void 0},valid:Boolean},emits:["focus","blur","change","click","keypress","keyup","keydown","progress","paste","update:modelValue"],data(){return{currentValue:null,hasChanged:!1,hasFocus:!1,isDirty:!1}},computed:{model:{get(){return this.getModelValue()},set(t){this.setModelValue(t)}},id(){return this.$attrs.id||Math.random().toString(36).slice(2)},isEmpty(){return hn(this.model)},isInvalid(){return!!(this.invalid||this.error||(Array.isArray(this.errors)?this.errors.length:this.errors[this.$attrs.id||this.$attrs.name]))},isValid(){return!!(this.valid||this.feedback)},componentName(){return this.$options.name},controlAttributes(){return Object.assign({},this.$attrs,{id:this.id,class:this.controlClasses})},controlClasses(){return Object.assign({[this.controlClass]:!!this.controlClass,[this.controlSizeClass]:!!this.controlSizeClass,[this.formControlClass]:!!this.formControlClass,[this.plaintextClass]:this.plaintext,"form-control-icon":!!this.$slots.icon,"is-valid":this.isValid,"is-invalid":this.isInvalid},this.shadowableClass)},controlSizeClass(){return Ct(this.size,this.formControlClass)},formGroupClasses(){return Object.assign({animated:this.animated,"form-group":this.group,"has-activity":this.activity,"has-changed":this.hasChanged,"has-focus":this.hasFocus,"has-icon":!!this.$slots.icon,"is-dirty":this.isDirty,"is-empty":this.isEmpty,"is-invalid":this.isInvalid,"is-valid":this.isValid,[this.$attrs.class]:!!this.$attrs.class,[this.size&&Ct(this.size,this.componentName)]:!!this.size},!!this.componentName&&{[j(this.componentName)]:!0})},plaintextClass(){return"form-control-plaintext"}},methods:{bindEvents(t){for(const e of this.$options.emits)t.addEventListener(e,r=>{this.$emit(e,r)});t.addEventListener("focus",()=>{this.isDirty=!0,this.hasFocus=!0}),t.addEventListener("blur",()=>{this.hasFocus=!1})},blur(){var t;(t=this.$refs.field)==null||t.blur()},focus(){var t;(t=this.$refs.field)==null||t.focus()},getFieldErrors(){let t=this.error||this.errors;return this.errors&&!Array.isArray(this.errors)&&(t=this.errors[this.$attrs.name||this.$attrs.id]),!t||Array.isArray(t)||$(t)?t:[t]},getModelValue(){return this.modelValue!==void 0?this.modelValue:this.currentValue},setModelValue(t){this.hasChanged=!0,this.currentValue=t,this.$emit("update:modelValue",t)}}});function k(t,e,r="-"){const n=String(e).replace(new RegExp(`^${t}${r}?`),"");return[j(n),t].filter(s=>!!s).join(r)}function St(t){return!Array.isArray(t)&&typeof t=="object"}const mn=o.defineComponent({directives:{bindEvents:{beforeMount(t,e){var r,n;(n=(r=e.instance)==null?void 0:r.bindEvents)==null||n.call(r,t)}}},mixins:[F],inheritAttrs:!1,props:{modelValue:{default:void 0},activity:{type:Boolean,default:!1},animated:{type:Boolean,default:()=>u("animated",!1)},nativeEvents:{type:Array,default(){return["focus","blur","change","click","keypress","keyup","keydown","progress","paste"]}},defaultControlClass:{type:String,default:()=>u("defaultControlClass","form-control")},error:{type:[String,Array,Boolean],default:void 0},errors:{type:[Array,Object,Boolean],default(){return{}}},feedback:{type:[String,Array],default:void 0},group:{type:Boolean,default:()=>u("group",!0)},helpText:{type:[Number,String],default:void 0},hideLabel:Boolean,indicator:{type:[String,Boolean],default:()=>u("indicator","spinner")},indicatorSize:{type:String,default:void 0},inline:Boolean,invalid:Boolean,label:{type:[Number,String],default:void 0},labelClass:{type:[Object,String],default:()=>u("labelClass","form-label")},pill:Boolean,plaintext:Boolean,size:{type:String,default:void 0},spacing:{type:String,default:void 0},valid:Boolean},emits:["blur","change","click","focus","keydown","keypress","keyup","update:modelValue"],data(){return{defaultEmpty:!1,hasChanged:!1,hasFocus:!1,isEmpty:!0}},computed:{id(){return this.$attrs.id||this.$attrs.name||(Math.random()+1).toString(36).substring(7)},componentName(){return this.$options.name},controlAttributes(){return Object.fromEntries(Object.entries(this.$attrs).concat([["id",this.id],["class",this.controlClasses],["value",this.modelValue]]))},controlClass(){return this.defaultControlClass},controlSizeClass(){return k(this.size,this.controlClass)},formGroupClasses(){return Object.assign({[this.size&&k(this.size,this.componentName)]:!!this.size,animated:this.animated,"default-empty":this.defaultEmpty,"form-group":this.group,[this.size&&k(this.size,"form-group")]:!!this.size,"has-activity":this.activity,"has-changed":this.hasChanged,"has-focus":this.hasFocus,"has-icon":!!this.$slots.icon,"is-empty":this.isEmpty,"is-invalid":!!(this.invalid||this.invalidFeedback),"is-valid":!!(this.valid||this.validFeedback),[this.$attrs.class]:!!this.$attrs.class,[this.$attrs.id]:!!this.$attrs.id},!!this.componentName&&{[j(this.componentName)]:!0})},controlClasses(){return Object.assign({[this.controlClass]:!!this.controlClass,[this.controlSizeClass]:!!this.controlSizeClass,"form-control-icon":!!this.$slots.icon,"is-valid":!!(this.valid||this.validFeedback),"is-invalid":!!(this.invalid||this.invalidFeedback),[this.pillClasses]:this.pill,[this.plaintextClass]:this.plaintext,[this.spacing]:!!this.spacing},this.shadowableClass)},hasDefaultSlot(){return!!this.$slots.default},invalidFeedback(){if(this.error==="")return null;if(this.error)return this.error;const t=this.getFieldErrors();return Array.isArray(t)?t.filter(e=>e&&typeof e=="string").join("<br>"):t},pillClasses(){return"rounded rounded-pill"},plaintextClass(){return"form-control-plaintext"},validFeedback(){return Array.isArray(this.feedback)?this.feedback.join("<br>"):this.feedback}},watch:{hasFocus(){this.shouldChangeOnFocus()&&(this.hasChanged=!0)},defaultEmpty(){this.hasChanged=!0}},methods:{bindEvents(t,e){var n;e||(e=this.onInput);const r=t instanceof HTMLSelectElement?(n=t.querySelectorAll("option"))==null?void 0:n[t.selectedIndex]:null;r&&(t.value=r==null?void 0:r.value),t.value&&e(t.value),this.hasChanged=!!t.value,this.isEmpty=!t.value,t.addEventListener("focus",()=>{this.hasFocus=!0}),t.addEventListener("blur",()=>{this.hasFocus=!1}),t.addEventListener("input",()=>{this.isEmpty=!1,this.hasChanged=!0}),t.addEventListener(t.tagName==="SELECT"?"change":"input",()=>e(t.value)),this.nativeEvents.forEach(s=>{t.addEventListener(s,g=>{this.$emit(s,g)})})},blur(){this.getInputField()&&this.getInputField().blur()},focus(){this.getInputField()&&this.getInputField().focus()},getInputField(){return this.$el.querySelector(".form-control, input, select, textarea")},getFieldErrors(){let t=this.error||this.errors;return this.errors&&St(this.errors)&&(t=this.errors[this.$attrs.name||this.$attrs.id]),!t||Array.isArray(t)||St(t)?t:[t]},shouldChangeOnFocus(){return!this.getInputField().readOnly},onInput(t){this.$emit("update:modelValue",t)}}});i.FormControl=yn,i.FormControlErrors=$t,i.FormControlLegacy=mn,i.config=u,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=form-control.umd.cjs.map
