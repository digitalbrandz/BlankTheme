(window.webpackJsonpgloboFormbuilder=window.webpackJsonpgloboFormbuilder||[]).push([[2],{2:function(e,t,r){"use strict";r.r(t);var s=r(0);var a={Wizard:class{constructor(e){this.wizard=e,this.panels=new Globo.FormBuilder.Panels(this.wizard),this.steps=new Globo.FormBuilder.Steps(this.wizard),this.stepsQuantity=this.steps.getStepsQuantity(),this.currentStep=this.steps.currentStep,this.nextText=e.querySelector(".action.next").getAttribute("data-next-text"),this.submitText=e.querySelector(".action.next").getAttribute("data-submit-text"),this.submittingText=e.querySelector(".action.next").getAttribute("data-submitting-text"),this.concludeControlMoveStepMethod=this.steps.handleConcludeStep.bind(this.steps),this.wizardConclusionMethod=this.handleWizardConclusion.bind(this)}updateButtonsStatus(){0===this.currentStep?this.previousControl.classList.add("disabled"):this.previousControl.classList.remove("disabled")}updtadeCurrentStep(e){this.currentStep+=e,this.steps.setCurrentStep(this.currentStep),this.panels.setCurrentStep(this.currentStep),this.handleNextStepButton(),this.updateButtonsStatus()}setStep(e){this.currentStep=e,this.steps.setCurrentStep(this.currentStep),this.panels.setCurrentStep(this.currentStep),this.handleNextStepButton(),this.updateButtonsStatus()}handleNextStepButton(){this.nextControl.type="button",this.nextControl.addEventListener("click",this.nextControlMoveStepMethod),this.currentStep===this.stepsQuantity-1?(this.nextControl.innerHTML=this.submitText,this.nextControl.addEventListener("click",this.wizardConclusionMethod)):(this.nextControl.innerHTML=this.nextText,this.nextControl.removeEventListener("click",this.wizardConclusionMethod))}handleWizardConclusion(){this.wizard.classList.add("completed"),this.nextControl.type="submit"}addControls(e,t){this.previousControl=e,this.nextControl=t,this.previousControlMoveStepMethod=this.moveStep.bind(this,-1),this.nextControlMoveStepMethod=this.moveStep.bind(this,1),e.addEventListener("click",this.previousControlMoveStepMethod),t.addEventListener("click",this.nextControlMoveStepMethod),this.updateButtonsStatus()}getCoords(e){var t=e.getBoundingClientRect(),r=document.body,s=document.documentElement,a=window.pageYOffset||s.scrollTop||r.scrollTop,i=window.pageXOffset||s.scrollLeft||r.scrollLeft,o=s.clientTop||r.clientTop||0,n=s.clientLeft||r.clientLeft||0,l=t.top+a-o,d=t.left+i-n;return{top:Math.round(l),left:Math.round(d)}}scrollTop(){var e=Object(s.a)(this.wizard,".globo-formbuilder");e.querySelector(".float-layout")||window.scrollTo({behavior:"smooth",left:0,top:this.getCoords(e).top})}moveStep(e){Globo.FormBuilder.handleValidate(this.wizard),1==e&&this.wizard.querySelector(".block-container.errors")?this.panels.updatePanelsContainerHeight():(this.scrollTop(),1==e&&this.concludeControlMoveStepMethod(),this.validateMovement(e)&&(this.updtadeCurrentStep(e),this.steps.handleStepsClasses(e)))}validateMovement(e){const t=e>0&&this.currentStep<this.stepsQuantity-1,r=e<0&&this.currentStep>0;return t||r}reset(){var e=this.wizard.querySelector(".next"),t=this.wizard.querySelector(".previous");this.addControls(t,e),this.steps.handleRemoveAllConcludeStep(),this.setStep(0)}},Steps:class{constructor(e){this.wizard=e,this.steps=this.getSteps(),this.stepsQuantity=this.getStepsQuantity(),this.currentStep=0}setCurrentStep(e){this.currentStep=e}getSteps(){return this.wizard.getElementsByClassName("step")}getStepsQuantity(){return this.getSteps().length}handleConcludeStep(){this.steps[this.currentStep].classList.add("-completed")}handleRemoveAllConcludeStep(){for(var e=0;e<this.stepsQuantity;e++)this.steps[e].classList.remove("-completed")}handleStepsClasses(e){e>0?this.steps[this.currentStep-1].classList.add("-completed"):e<0&&this.steps[this.currentStep].classList.remove("-completed"),this.steps[this.stepsQuantity-1].classList.remove("-completed")}},Panels:class{constructor(e){this.wizard=e,this.panelWidth=this.wizard.offsetWidth,this.panelsContainer=this.getPanelsContainer(),this.panels=this.getPanels(),this.currentStep=0,this.updatePanelsPosition(this.currentStep),this.updatePanelsContainerHeight()}getCurrentPanelHeight(){return`${this.getPanels()[this.currentStep].offsetHeight}px`}getPanelsContainer(){return this.wizard.querySelector(".panels")}getPanels(){return this.wizard.getElementsByClassName("panel")}updatePanelsContainerHeight(){this.panelsContainer.style.height=this.getCurrentPanelHeight()}updatePanelsPosition(e){const t=this.panels;this.panelWidth;for(let r=0;r<t.length;r++)t[r].classList.remove("movingIn"),t[r].classList.remove("movingOutBackward"),t[r].classList.remove("movingOutFoward"),t[r].classList.remove("block-container"),r!==e?r<e?t[r].classList.add("movingOutBackward"):r>e&&t[r].classList.add("movingOutFoward"):(t[r].classList.add("movingIn"),t[r].classList.add("block-container"));this.updatePanelsContainerHeight()}setCurrentStep(e){this.currentStep=e,this.updatePanelsPosition(e)}}};const i=r(4),o={...a,renderForm:async function(e,t){let s,a,i,o=!1;document.querySelector("#globo-formbuilder-dynamicCSS")&&(s=document.querySelector("#globo-formbuilder-dynamicCSS").innerHTML,o=!0),document.querySelector("#globo-formbuilder-template")&&(a=document.querySelector("#globo-formbuilder-template").innerHTML,o=!0),document.querySelector("#globo-formbuilder-element")&&(i=document.querySelector("#globo-formbuilder-element").innerHTML,o=!0);let n=this.forms[e].html;if(o||!this.forms[e].html){const{default:t}=await Promise.all([r.e(4),r.e(0)]).then(r.bind(null,14)),o=s||t.templates.dynamicCSS,l=a||t.templates.template,d=i||t.templates.element;n=t.parseAndRenderSync(l,{configs:{...this.forms[e],formId:e},partialElement:d,dynamicCSS:o,formId:e,Globo:Globo})}t.forEach(t=>{t.classList.contains("globo-formbuilder")?t.innerHTML=n:t.innerHTML=t.innerHTML.replace(new RegExp(`{formbuilder:${e}}|{formbuilder:${this.forms[e].v1_id}}`,"gi"),'<div class="globo-formbuilder" id="globo-formbuilder-'+e+'" data-id="'+e+'">'+n+"</div>"),(t=t.querySelector(".globo-formbuilder")?t.querySelector(".globo-formbuilder"):t).querySelectorAll("[data-id]").forEach(t=>t.setAttribute("data-id",e)),t.querySelector(`form[data-id="${e}"]`).setAttribute("action",`${this.url}/api/front/form/${e}/send`),t.querySelector('[name="page[title]"]').value=this.page.title,t.querySelector('[name="page[href]"]').value=this.page.href,this.customer&&(t.querySelector('[name="customer[id]"]')&&(t.querySelector('[name="customer[id]"]').value=this.customer.id),t.querySelector('[name="customer[email]"]')&&(t.querySelector('[name="customer[email]"]').value=this.customer.email),t.querySelector('[name="customer[name]"]')&&(t.querySelector('[name="customer[name]"]').value=this.customer.name)),this.init(t,e)})},init:function(e,t){if(!document.body.contains(e))return;e.querySelector(".globo-form").classList.contains("float-form")&&document.body.appendChild(e),e&&e.addEventListener?e.addEventListener("submit",this.handleSubmit,!1):e&&e.attachEvent&&e.attachEvent("onsubmit",this.handleSubmit);const r=e.querySelector(".globo-formbuilder-wizard");if(r){const t=new this.Wizard(r),s=e.querySelector(".next"),a=e.querySelector(".previous");t.addControls(a,s),t.setStep(0)}const s=document.querySelectorAll('.globo-form-app [data-type="datetime"]');s.length&&this.handleDateTimePicker(s);const a=document.querySelectorAll(".globo-form-app .conditional-field");a.length&&this.handleConditionalField(a);const i=document.querySelectorAll(".globo-form-app [name]:not([type='file']):not([type='hidden'])");this.handleHiddenField(this.forms[t],e,i),globoFormbuilderRecaptchaInit=this.handleReCaptcha,this.handleReCaptcha(e);const o=e.querySelectorAll(".globo-form-control");let n={};o.forEach(e=>{var t=e.querySelector("label,legend");if(null!==t&&t){var r=e.querySelector("[name]");if(null!==r&&r){var s=r.getAttribute("name").replace("[]","");n[s]=t.querySelector(".label-content").innerHTML}}}),e.querySelector('[name="_keyLabel"]').value=JSON.stringify(n);var l=new CustomEvent("globo.formbuilder.form.loaded",{detail:{form:e}});document.dispatchEvent(l)},handleReCaptcha:function(e){const t=e?e.querySelectorAll(".globo-g-recaptcha"):document.querySelectorAll(".globo-g-recaptcha");if("undefined"!=typeof grecaptcha&&t)try{t.forEach(e=>{const t=e.getAttribute("data-globo-sitekey")||e.getAttribute("data-sitekey"),r=grecaptcha.render(e,{sitekey:t});console.log("widgetId:",r),e.nextElementSibling.setAttribute("reCaptcha-widget-id",r)})}catch(e){}},showFloatingForm:function(e){e.parentNode.querySelector(".globo-form-app").classList.add("active")},hideFloatingForm:function(e){e.parentNode.querySelector(".globo-form-app").classList.remove("active")},showMessage:function(e){var t=e.querySelector(".content");null!==t&&""!=t.innerHTML&&(e.style.display="block")},scrollIntoErrorGroup:function(e){e.scrollIntoView({behavior:"smooth",block:"nearest"})},handleValidate:function(e){const t=e.querySelector(".block-container");let r={};t.querySelectorAll("input, textarea, select").forEach(s=>{const a=null!==s.getAttribute("presence"),i=null!==s.getAttribute("disabled"),o=null!==s.getAttribute("data-type")&&s.getAttribute("data-type");if(r[s.name]={},i?r[s.name].ignore={}:a&&(r[s.name].presence={message:this.forms[t.getAttribute("data-id")].errorMessage.required}),"email"==o&&(r[s.name][o]={message:this.forms[t.getAttribute("data-id")].errorMessage.invalidEmail}),"name"==o&&(r[s.name].format={pattern:"^[ -.A-ￜ]+",flags:"s",message:this.forms[t.getAttribute("data-id")].errorMessage.invalidName}),"url"==o&&(r[s.name][o]={message:this.forms[t.getAttribute("data-id")].errorMessage.invalidURL}),"phone"==o&&(r[s.name].format={pattern:"^[+]*[(]{0,1}[0-9+]{1,9}[)]{0,1}[-s.0-9 ]*$",flags:"i",message:this.forms[t.getAttribute("data-id")].errorMessage.invalidPhone}),"file"==o){const e=!1!==this.shop.pricing.features.fileUpload?1024*this.shop.pricing.features.fileUpload:2048;r[s.name][o]={notAllowedExtension:this.forms[t.getAttribute("data-id")].errorMessage.fileNotAllowed,sizeLimitMessage:this.forms[t.getAttribute("data-id")].errorMessage.fileSizeLimit,allowedExtension:s.getAttribute("data-allowed-extensions").split(","),maxFileSize:e}}if("checkbox"==o&&(r[s.name][o]={requiredMessage:this.forms[e.getAttribute("data-id")].errorMessage.required},r[s.name][o].isRequired=void 0!==r[s.name].presence),"password"==o){const e=null!==s.getAttribute("data-additional-type")&&s.getAttribute("data-additional-type"),a=null!==s.getAttribute("data-connected-element")&&s.getAttribute("data-connected-element");"confirm-password"===e&&a&&(r[s.name].equality={attribute:a,message:this.forms[t.getAttribute("data-id")].errorMessage.confirmPasswordNotMatch});let i=!(!s.getAttribute("data-validate-rule")||"false"==s.getAttribute("data-validate-rule"))&&s.getAttribute("data-validate-rule");i&&("advancedValidateRule"===i&&(i=null!==s.getAttribute("data-validate-rule")?s.getAttribute("data-advanced-validate-rule"):""),r[s.name].format={pattern:i,flags:"g",message:this.forms[t.getAttribute("data-id")].errorMessage.invalidPassword})}}),null!=e.querySelector(".block-container .globo-g-recaptcha")&&(r.reCaptcha={reCaptcha:{isRequired:!0,requiredMessage:this.forms[t.getAttribute("data-id")].errorMessage.requiredCaptcha}}),i.validators.file=function(t,r,s){const a=e.querySelector('[name="'+s+'"]');let i=0,o=!0;return Array.from(a.files).forEach(e=>{i+=e.size,-1===r.allowedExtension.indexOf(function(e){const t=e.split("\\").pop().split("/").pop(),r=t.lastIndexOf(".");return r<1?"":t.substr(r+1)}(e.name).toLowerCase())&&(o=!1)}),i/1e3>r.maxFileSize?r.sizeLimitMessage:o?null:r.notAllowedExtension},i.validators.checkbox=function(t,r,s,a){if(!r.isRequired)return null;const i=e.querySelectorAll("[name='"+s+"']");let o=!1;return i.forEach(e=>{e.checked&&(o=!0)}),o?null:r.requiredMessage},i.validators.reCaptcha=function(t,r,s,a){const i=e.querySelector("[name='"+s+"']");if(i){const e=grecaptcha.getResponse(i.getAttribute("reCaptcha-widget-id"));return i.value=e,""!=i.value?null:r.requiredMessage}return null},i.validators.ignore=function(){return null};const s=i(t,r,{fullMessages:!1});!function(e,t){let r=!1;e.querySelectorAll("input[name], select[name], textarea[name]").forEach(e=>{if(n(e,t&&t[e.name]),!r&&t[e.name]){const t=l(e,"globo-form-control");t&&(Globo.FormBuilder.scrollIntoErrorGroup(t),r=!0)}})}(t,s||{}),s&&Object.keys(s).length?t.classList.add("errors"):t.classList.remove("errors");const a=t.querySelectorAll("input, textarea, select");for(var o=0;o<a.length;++o)a.item(o).addEventListener("change",(function(e){const s=i(t,r,{fullMessages:!1})||{};Object.keys(s).length?t.classList.add("errors"):t.classList.remove("errors"),n(this,s[this.name])}));function n(e,t){const r=l(e.parentNode,"globo-form-control"),s=r.querySelector(".messages");!function(e){e.classList.remove("has-error"),e.classList.remove("has-success"),e.querySelectorAll(".help-block.error").forEach(e=>{e.parentNode.removeChild(e)})}(r),t?(r.classList.add("has-error"),t.forEach(e=>{!function(e,t){const r=document.createElement("p");r.classList.add("help-block"),r.classList.add("error"),r.innerText=t,e.appendChild(r)}(s,e)})):r.classList.add("has-success")}function l(e,t){return e&&e!=document?e.classList.contains(t)?e:l(e.parentNode,t):null}},handleLoadDateTimePickerVendor:function(){return Promise.all([r.e(5),r.e(1)]).then(r.bind(null,13))},handleDateTimePicker:function(e){const t=async r=>{const{default:s}=await this.handleLoadDateTimePickerVendor(),{flatpickr:a,locales:i}=s;e.forEach(e=>{let t,s,o,n,l={enableTime:!0,dateFormat:"Y-m-d H:i",time_24hr:!0},d="H:i";t=e.getAttribute("data-format"),s=e.getAttribute("data-locale"),o=e.getAttribute("dataDateFormat"),n=e.getAttribute("dataTimeFormat");let c=e.getAttribute("limitDateType"),u=e.getAttribute("limitDateSpecificDates"),h=e.getAttribute("limitDateRangeDates"),m=e.getAttribute("limitDateDOWDates");"12h"==n&&(l.time_24hr=!1,d="h:i K"),"date-and-time"==t?l.dateFormat=o+" "+d:"date"==t?(l.enableTime=!1,l.dateFormat=o):"time"==t&&(l.noCalendar=!0,l.dateFormat=d),s&&(l.locale=i[s]);let p=[];if(c){if(""!=u&&null!=u&&(p=p.concat(u.split(",").map(e=>new Date(e)))),""!=h&&null!=h){const e=h.split(",");p.push({from:new Date(e[0]),to:new Date(e[1])})}if(""!=m&&null!=m){let e=m.split(",").map(e=>{let t=0;switch(e){case"sunday":t=0;break;case"monday":t=1;break;case"tuesday":t=2;break;case"wednesday":t=3;break;case"thursday":t=4;break;case"friday":t=5;break;case"saturday":t=6;break;default:t=0}return t});p.push((function(t){return e.indexOf(t.getDay())>-1}))}"disablingDates"==c?l.disable=p:l.enable=p}const g=a(e,l);e.isSameNode(r.target)&&g.open()}),e.forEach(e=>{e.removeEventListener("focus",t)})};e.forEach(e=>{e.addEventListener("focus",t)})},handleConditionalField:function(e){e.forEach(e=>{const t=e.getAttribute("data-connected-id"),r=e.getAttribute("data-connected-value"),a=Object(s.a)(e,"form");let i=a.querySelectorAll('[name="'+t+'"]');i.length||(i=a.querySelectorAll('[name="'+t+'[]"]')),i.length&&i.forEach(t=>{t.addEventListener("change",(function(){"checkbox"==this.type?this.value===r&&(this.checked?(e.style.display="block",e.querySelectorAll("[name]").forEach(e=>{e.removeAttribute("disabled","disabled");const t=e.parentNode.querySelector(".flatpickr-mobile");t&&t.removeAttribute("disabled","disabled")})):(e.style.display="",e.querySelectorAll("[name]").forEach(e=>{e.setAttribute("disabled","disabled")}))):"radio"==this.type?this.value===r&&this.checked?(e.style.display="block",e.querySelectorAll("[name]").forEach(e=>{e.removeAttribute("disabled","disabled");const t=e.parentNode.querySelector(".flatpickr-mobile");t&&t.removeAttribute("disabled","disabled")})):(e.style.display="",e.querySelectorAll("[name]").forEach(e=>{e.setAttribute("disabled","disabled")})):this.value===r?(e.style.display="block",e.querySelectorAll("[name]").forEach(e=>{e.removeAttribute("disabled","disabled");const t=e.parentNode.querySelector(".flatpickr-mobile");t&&t.removeAttribute("disabled","disabled")})):(e.style.display="",e.querySelectorAll("[name]").forEach(e=>{e.setAttribute("disabled","disabled")}));const t=Object(s.a)(e,".panels"),a=Object(s.a)(e,".panel.movingIn");if(a&&(t.style.height=a.offsetHeight+"px"),"checkbox"==this.type&&!this.checked&&this.value==r||"radio"==this.type||"select-one"==this.type){const t=e.querySelectorAll("input[name],select"),r=document.createEvent("HTMLEvents");r.initEvent("change",!1,!0),t.forEach(e=>{"checkbox"==e.type||"radio"==e.type?e.checked=!1:e.value="",e.disabled?(e.disabled=!1,e.dispatchEvent(r),e.disabled=!0):e.dispatchEvent(r)})}}))})})},handleHiddenField:function(e,t,r){let s=[];if(void 0===e)return!1;e.elements.forEach(e=>{"group"==e.type&&e.elements.forEach(e=>{"hidden"==e.type&&"dynamic"==e.dataType&&e.dynamicValue.length&&e.dynamicValue.forEach(t=>{t.target=e.id,s.includes(t)||s.push(t)})}),"hidden"==e.type&&"dynamic"==e.dataType&&e.dynamicValue.length&&e.dynamicValue.forEach(t=>{t.target=e.id,s.includes(t)||s.push(t)})}),r.forEach(e=>{if(void 0!==s.find(t=>t.when==e.name||t.when+"[]"==e.name)){const r=s.find(t=>t.when===e.name&&""==t.is);if(void 0!==r){const e=t.querySelector('[name="'+r.target+'"]');e&&(e.value=r.value)}e.addEventListener("change",(function(r){const a=r.target.value,i=s.find(t=>{if(t.is==a){if(t.when==e.name)return!0;if(t.when+"[]"==e.name&&e.checked)return!0}return!1});if(void 0!==i){const e=t.querySelector('[name="'+i.target+'"]');e&&(e.value=i.value)}else{const r=s.find(t=>t.when==e.name||t.when+"[]"==e.name);if(void 0!==r){const e=t.querySelector('[name="'+r.target+'"]');e&&(e.value=e.getAttribute("data-default-value"))}}}))}})},handleSubmit:function(e){if(e.preventDefault(),e.stopPropagation(),Globo.FormBuilder.handleValidate(e.target),!e.target.querySelector(".block-container.errors")){var t=e.target.querySelector(".action.submit");t.classList.add("loading"),t.setAttribute("disabled","disabled"),Globo.FormBuilder.xhr(e.target,(function(r){if(t.classList.remove("loading"),t.removeAttribute("disabled"),"true"==r.success){const t=new CustomEvent("globo.formbuilder.form.submitted",{detail:{form:e.target}});document.dispatchEvent(t);const r=Globo.FormBuilder.forms[e.target.getAttribute("data-id")].afterSubmit;if("undefined"!=typeof ga&&r.enableGa){const e=r.gaEventCategory||"",t=r.gaEventAction||"",s=r.gaEventLabel||"";ga("send",{hitType:"event",eventCategory:e,eventAction:t,eventLabel:s})}if("redirectToPage"==r.action&&(window.location.href=r.redirectUrl),"clearForm"==r.action){e.target.reset(),Globo.FormBuilder.showMessage(e.target.querySelector(".message.success"));const t=e.target.querySelector(".globo-g-recaptcha");t&&grecaptcha.reset(t.nextElementSibling.getAttribute("reCaptcha-widget-id"));const r=e.target.querySelector(".globo-formbuilder-wizard");if(r){new Globo.FormBuilder.Wizard(r).reset()}}if("hideForm"==r.action){e.target.style.display="none";const t=e.target.parentNode.querySelectorAll(".message.success");t&&Globo.FormBuilder.showMessage(t[t.length-1])}}else{const t=e.target.querySelector(".message.error .content"),a=void 0!==r.errors&&r.errors;if(a){let r="";for(var s=0;s<Object.keys(a).length;s++)if("string"==typeof a[s])r+='<div class="err-item"><span class="label"></span><span class="err">'+a[s]+"</span></div>";else{let t=e.target.querySelector('[name="_keyLabel"]');t&&(t=JSON.parse(t.value)),void 0!==t[Object.keys(a)[s]]?r+='<div class="err-item"><span class="label">'+t[Object.keys(a)[s]]+'</span> : <span class="err">'+a[Object.keys(a)[s]]+"</span></div>":r+='<div class="err-item"><span class="label"></span><span class="err">'+a[Object.keys(a)[s]]+"</span></div>"}t.innerHTML=r}Globo.FormBuilder.showMessage(e.target.querySelector(".message.error"))}}))}},xhr:function(e,t){const r=e.getAttribute("action"),s=e.getAttribute("method");let a=new FormData(e);const i=new FormData;let o,n=0;void 0!==a.fd&&(a=a.fd);for(const t of a)if(t[0].includes("select_product")){t[0]!==o&&(o=t[0],n=0);const r=JSON.parse(e.querySelector(`[name="${t[0]}"][value="${t[1]}"]`).nextElementSibling.innerHTML);i.append(t[0]+`[${n}][url]`,`https://${this.shop.url}/admin/products/${r.id}`),i.append(t[0]+`[${n}][name]`,r.title),n++}else i.append(t[0],t[1]);fetch(r,{method:s,body:i}).then((function(e){if(e.ok)return e.json();{const t=new Error(e.statusText);throw t.response=e,t}})).then((function(e){t(e)})).catch(t=>{e.querySelector(".action.submit").classList.remove("loading");const r=e.querySelector(".message.error"),s=r.getAttribute("data-other-error"),a=e.querySelector(".message.error");a&&(a.innerHTML='<div class="err-item"><span class="label"></span><span class="err">'+(s||"Too many request, please try again later")+"</span></div>"),r&&this.showMessage(r)})},dismiss:function(e){e.parentNode.style.display="none"},idealTextColor:function(e){const t=0===e.indexOf("#")?this.getRGBComponents(e):e.substring(5,e.length-1).replace(/ /g,"").split(",");return 255-(.299*t[0]+.587*t[1]+.114*t[2])<105?"#000000":"#ffffff"},getRGBComponents:function(e){const t=e.substring(1,3),r=e.substring(3,5),s=e.substring(5,7);return{R:parseInt(t,16),G:parseInt(r,16),B:parseInt(s,16)}}};t.default=o}}]);