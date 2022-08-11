(function(n,a){typeof exports=="object"&&typeof module<"u"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(n=typeof globalThis<"u"?globalThis:n||self,a(n.FormControl={}))})(this,function(n){"use strict";const a={};function o(...t){if(!t.length)return a;const[e,r]=t;return typeof e=="string"?typeof a[e]<"u"?a[e]:r:Array.isArray(e)?e.reduce((s,i)=>Object.assign(s,{[i]:a[i]}),{}):Object.assign(a,...t)}var C={props:{dropShadow:[Boolean,String],dropShadowableClassPrefix:{type:String,default:"drop-shadow"},shadow:[Boolean,String],shadowableClassPrefix:{type:String,default:"shadow"}},computed:{shadowableClass(){const t=this.dropShadow===!0?"":this.dropShadow&&`-${this.dropShadow}`,e=this.shadow===!0?"":this.shadow&&`-${this.shadow}`;return{[`${this.dropShadowableClassPrefix}${t}`]:!!this.dropShadow,[`${this.shadowableClassPrefix}${e}`]:!!this.shadow}}}},u=function(){return u=Object.assign||function(e){for(var r,s=1,i=arguments.length;s<i;s++){r=arguments[s];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},u.apply(this,arguments)};function b(t){return t.toLowerCase()}var S=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],w=/[^A-Z0-9]+/gi;function $(t,e){e===void 0&&(e={});for(var r=e.splitRegexp,s=r===void 0?S:r,i=e.stripRegexp,l=i===void 0?w:i,v=e.transform,F=v===void 0?b:v,y=e.delimiter,x=y===void 0?" ":y,h=p(p(t,s,"$1\0$2"),l,"\0"),c=0,f=h.length;h.charAt(c)==="\0";)c++;for(;h.charAt(f-1)==="\0";)f--;return h.slice(c,f).split("\0").map(F).join(x)}function p(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce(function(s,i){return s.replace(i,r)},t)}function E(t,e){return e===void 0&&(e={}),$(t,u({delimiter:"."},e))}function g(t,e){return e===void 0&&(e={}),E(t,u({delimiter:"-"},e))}function d(t,e,r="-"){const s=e.toString().replace(new RegExp(`^${t}${r}?`),"");return[g(s),t].filter(i=>!!i).join(r)}function m(t){return!Array.isArray(t)&&typeof t=="object"}const A={directives:{bindEvents:(t,e,r)=>{if(t.addEventListener("focus",()=>{e.instance.hasFocus=!0}),t.addEventListener("blur",()=>{e.instance.hasFocus=!1}),t.addEventListener("input",s=>{e.instance.isEmpty=!t.value,e.instance.currentValue=t.value}),e.instance.hasChanged=!!t.value,e.instance.bindEvents.forEach(s=>{t.addEventListener(s,i=>{e.instance.$emit(s,i)})}),t.tagName==="SELECT"){const s=t.querySelector('[value=""]');s&&s.value===t.value&&(e.instance.defaultEmpty=!0),e.instance.isEmpty=!t.querySelector("[selected]")&&!t.value}}},mixins:[C],inheritAttrs:!1,props:{activity:{type:Boolean,default:!1},animated:{type:Boolean,default:()=>o("animated",!1)},bindEvents:{type:Array,default(){return["focus","blur","change","click","keypress","keyup","keydown","progress","paste"]}},defaultControlClass:{type:String,default:()=>o("defaultControlClass","form-control")},defaultValue:{default:()=>o("defaultValue",null)},error:[String,Array,Boolean],errors:{type:[Array,Object,Boolean],default(){return{}}},feedback:[String,Array],group:{type:Boolean,default:()=>o("group",!0)},helpText:[Number,String],hideLabel:Boolean,indicator:{type:String,default:()=>o("indicator","spinner")},indicatorSize:String,inline:Boolean,invalid:Boolean,label:[Number,String],labelClass:{type:[Object,String],default:()=>o("labelClass","form-label")},pill:Boolean,plaintext:Boolean,size:String,spacing:String,valid:Boolean,value:{default:null}},data(){return{currentValue:this.value||this.defaultValue,defaultEmpty:!1,hasChanged:!1,hasFocus:!1,isEmpty:!(this.value||this.defaultValue)}},computed:{id(){return this.$attrs.id||this.$attrs.name},componentName(){return this.$options.name},controlAttributes(){return Object.keys(this.$attrs).concat([["id",this.id],["class",this.controlClasses]]).reduce((t,e)=>Array.isArray(e)?Object.assign(t,{[e[0]]:e[1]}):Object.assign(t,{[e]:this.$attrs[e]}),{})},controlClass(){return this.defaultControlClass},controlSizeClass(){return d(this.size,this.controlClass)},formGroupClasses(){return{[g(this.componentName)]:!!this.componentName,[this.size&&d(this.size,this.componentName)]:!!this.size,animated:this.animated,"default-empty":this.defaultEmpty,"form-group":this.group,[this.size&&d(this.size,"form-group")]:!!this.size,"has-activity":this.activity,"has-changed":this.hasChanged,"has-focus":this.hasFocus,"has-icon":!!this.$slots.icon,"is-empty":this.isEmpty,"is-invalid":!!(this.invalid||this.invalidFeedback),"is-valid":!!(this.valid||this.validFeedback),[this.$attrs.class]:!!this.$attrs.class,[this.$attrs.id]:!!this.$attrs.id}},controlClasses(){return Object.assign({[this.controlClass]:!!this.controlClass,[this.controlSizeClass]:!!this.controlSizeClass,"form-control-icon":!!this.$slots.icon,"is-valid":!!(this.valid||this.validFeedback),"is-invalid":!!(this.invalid||this.invalidFeedback),[this.pillClasses]:this.pill,[this.plaintextClass]:this.plaintext,[this.spacing]:!!this.spacing},this.shadowableClass)},hasDefaultSlot(){return!!this.$slots.default},invalidFeedback(){if(this.error==="")return null;if(this.error)return this.error;const t=this.getFieldErrors();return Array.isArray(t)?t.filter(e=>e&&typeof e=="string").join("<br>"):t},pillClasses(){return"rounded rounded-pill"},plaintextClass(){return"form-control-plaintext"},validFeedback(){return Array.isArray(this.feedback)?this.feedback.join("<br>"):this.feedback}},watch:{hasFocus(){this.shouldChangeOnFocus()&&(this.hasChanged=!0)},value(t){this.currentValue=t},currentValue(){this.hasChanged=!0},defaultEmpty(){this.hasChanged=!0}},mounted(){this.$emit("input",this.currentValue)},methods:{blur(){this.getInputField()&&this.getInputField().blur()},focus(){this.getInputField()&&this.getInputField().focus()},getInputField(){return this.$el.querySelector(".form-control, input, select, textarea")},getFieldErrors(){let t=this.error||this.errors;return this.errors&&m(this.errors)&&(t=this.errors[this.$attrs.name||this.$attrs.id]),!t||Array.isArray(t)||m(t)?t:[t]},shouldChangeOnFocus(){return!this.getInputField().readOnly},onInput(t){this.$emit("input",t.target.value),this.$emit("update:value",t.target.value)}}};n.FormControl=A,n.config=o,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
