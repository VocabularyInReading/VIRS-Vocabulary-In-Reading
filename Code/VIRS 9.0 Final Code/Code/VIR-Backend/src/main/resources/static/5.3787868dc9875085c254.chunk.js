webpackJsonp([5],{kZsQ:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=t("3j3K"),e=function(){return function(){}}(),d=t("2Je8"),o=t("2Lmt"),r=t("5oXY"),i=function(){function l(l,n){this._textService=l,this.router=n}return l.prototype.analyzeText=function(l){var n=this;this.processing=!0,this.error=!1,this._textService.enhancedText(this.textArea).subscribe(function(t){n.text=t,n._textService.resultText=n.text,n.processing=!1,n.router.navigateByUrl(l)},function(l){l.error instanceof Error?console.log("Client-side Error occured"):(n.error=!0,n.processing=!1,console.log("Server-side Error occured"))})},l.prototype.ngOnInit=function(){window.scrollTo(0,0)},l.ctorParameters=function(){return[{type:o.TextService},{type:r.l}]},l}(),a=t("NVOs"),s=t("XDDT"),c=[[".center-block[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}.vertical-center[_ngcontent-%COMP%]{min-height:100%;min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.fontStyle[_ngcontent-%COMP%]{font-size:.9em;font-weight:700}.center[_ngcontent-%COMP%]{margin:auto;width:50%}h5[_ngcontent-%COMP%]{text-align:center;font-weight:700}.topMargin[_ngcontent-%COMP%]{margin-top:10px}.bottomMargin[_ngcontent-%COMP%]{margin-bottom:50px}@media screen and (max-width:992px){.margin-responsive[_ngcontent-%COMP%]{margin-bottom:70px}}.oneLine[_ngcontent-%COMP%]{display:inline;list-style-type:none;padding-right:2px}.buttonPadding[_ngcontent-%COMP%]{padding-right:30px}.ng-valid.required[_ngcontent-%COMP%], .ng-valid[required][_ngcontent-%COMP%]{border-left:10px solid #42a948}.ng-invalid[_ngcontent-%COMP%]:not(form){border-left:10px solid #a94442}.box1[_ngcontent-%COMP%]{background-color:#ff7919;min-height:150px;margin-right:25px;margin-left:25px;margin-top:25px;color:#fff;text-align:center;padding-top:35px;border-radius:8px}.box2[_ngcontent-%COMP%]{background-color:#74d941;min-height:150px;margin-right:25px;margin-left:25px;margin-top:25px;color:#fff;text-align:center;padding-top:35px;border-radius:8px}.box3[_ngcontent-%COMP%]{background-color:#3d99f5;min-height:150px;margin-right:25px;margin-left:25px;margin-top:25px;color:#fff;text-align:center;padding-top:35px;border:2px solid;border-radius:8px}"]],p=u["\u0275crt"]({encapsulation:0,styles:c,data:{animation:[{type:7,name:"routerTransition",definitions:[{type:0,name:"void",styles:{type:6,styles:{},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{},offset:null},options:void 0},{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(0%)"},offset:null},timings:"0.5s ease-in-out"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{transform:"translateY(0%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(-100%)"},offset:null},timings:"0.5s ease-in-out"}],options:null}],options:{}}]}});function g(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,4,"div",[["class","alert alert-danger"],["role","alert"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t"])),(l()(),u["\u0275eld"](0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["Oh snap!"])),(l()(),u["\u0275ted"](null,[" We don't support alien characters, yet. Please enter your text again.\n\t"]))],null,null)}function f(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,0,"i",[["class","fa fa-spinner fa-spin"],["style","font-size:32px;color:white"]],null,null,null,null,null))],null,null)}function m(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,133,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\n\t"])),(l()(),u["\u0275ted"](null,["\n\t"])),(l()(),u["\u0275and"](16777216,null,null,1,null,g)),u["\u0275did"](16384,null,0,d.k,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](null,["\n\n\t"])),(l()(),u["\u0275eld"](0,null,null,54,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t"])),(l()(),u["\u0275eld"](0,null,null,51,"div",[["class","card card-info card-inverse mb-3 col-lg-12 center-block"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,9,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,0,"i",[["class","fa fa-fw fa-keyboard-o fa-2x float-right"],["title","Enter your text"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["Enter your text\xa0\xa0\n\t\t\t\t"])),(l()(),u["\u0275and"](16777216,null,null,1,null,f)),u["\u0275did"](16384,null,0,d.k,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,1,"span",[["class","badge badge-default"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["MAX 30,000 Characters"])),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\n\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,37,"div",[["class","card-block bg-white"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,11,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,8,"textarea",[["class","form-control"],["id","exampleTextarea"],["maxlength","30000"],["name","textArea"],["placeholder","Enter your text here (required). You must input at least 100 words of text to run readability test."],["required",""],["rows","10"]],[[1,"required",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var e=!0,d=l.component;"input"===n&&(e=!1!==u["\u0275nov"](l,28)._handleInput(t.target.value)&&e);"blur"===n&&(e=!1!==u["\u0275nov"](l,28).onTouched()&&e);"compositionstart"===n&&(e=!1!==u["\u0275nov"](l,28)._compositionStart()&&e);"compositionend"===n&&(e=!1!==u["\u0275nov"](l,28)._compositionEnd(t.target.value)&&e);"ngModelChange"===n&&(e=!1!==(d.textArea=t)&&e);return e},null,null)),u["\u0275did"](16384,null,0,a.d,[u.Renderer2,u.ElementRef,[2,a.a]],null,null),u["\u0275did"](16384,null,0,a.p,[],{required:[0,"required"]},null),u["\u0275did"](540672,null,0,a.f,[],{maxlength:[0,"maxlength"]},null),u["\u0275prd"](1024,null,a.g,function(l,n){return[l,n]},[a.p,a.f]),u["\u0275prd"](1024,null,a.h,function(l){return[l]},[a.d]),u["\u0275did"](671744,null,0,a.m,[[8,null],[2,a.g],[8,null],[2,a.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,a.i,null,[a.m]),u["\u0275did"](16384,null,0,a.j,[a.i],null,null),(l()(),u["\u0275ted"](null,["\n\t\t\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\n\n\t\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,17,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,14,"div",[["class","col-md-12 "]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,11,"div",[["class","float-right"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,3,"button",[["class","btn-block btn btn-secondary "],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0,e=l.component;"click"===n&&(u=!1!==e.analyzeText("/enhanced-text-result")&&u);return u},null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-file-text"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,[" Enhanced Text"])),(l()(),u["\u0275ted"](null,["\n\t\t\t\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,3,"button",[["class","btn-block btn btn-primary"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0,e=l.component;"click"===n&&(u=!1!==e.analyzeText("/text-statistics")&&u);return u},null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-pie-chart"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,[" Statistics"])),(l()(),u["\u0275ted"](null,["\n\t\t\t\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t"])),(l()(),u["\u0275ted"](null,["\n\t"])),(l()(),u["\u0275ted"](null,["\n\n\t"])),(l()(),u["\u0275eld"](0,null,null,7,"div",[["class","row"],["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t"])),(l()(),u["\u0275eld"](0,null,null,4,"div",[["class","center"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["Instructions"])),(l()(),u["\u0275ted"](null,["\n\t\t"])),(l()(),u["\u0275ted"](null,["\n\t"])),(l()(),u["\u0275ted"](null,["\n\t"])),(l()(),u["\u0275eld"](0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\n\t"])),(l()(),u["\u0275ted"](null,["\n\t"])),(l()(),u["\u0275eld"](0,null,null,58,"div",[["class","row topMargin bottomMargin"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\n\t\t"])),(l()(),u["\u0275eld"](0,null,null,17,"div",[["class","col-md box1"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,3,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-keyboard-o fa-3x "],["style","padding-bottom: 10px;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,9,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["Type you text"])),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["Maximum 30,000 characters."])),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t"])),(l()(),u["\u0275eld"](0,null,null,17,"div",[["class","col-md box2"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,3,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-file-text fa-3x "],["style","padding-bottom: 10px;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\n\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,9,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,['Press "Enhanced Text"'])),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["to read your text in frequency-based color coded system."])),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t"])),(l()(),u["\u0275eld"](0,null,null,17,"div",[["class","col-md box3"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,3,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-pie-chart fa-3x "],["style","padding-bottom: 10px;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,9,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,['Press "Statistics"'])),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\t\t\t\t"])),(l()(),u["\u0275eld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["to see if the text is suitable for you and view a detailed analysis of the text."])),(l()(),u["\u0275ted"](null,["\n\t\t\t"])),(l()(),u["\u0275ted"](null,["\n\t\t"])),(l()(),u["\u0275ted"](null,["\n\n\t"])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275ted"](null,["\n"]))],function(l,n){var t=n.component;l(n,4,0,t.error),l(n,15,0,t.processing);l(n,29,0,"");l(n,30,0,"30000");l(n,33,0,"textArea",t.textArea)},function(l,n){var t=n.component;l(n,0,0,void 0),l(n,27,0,u["\u0275nov"](n,29).required?"":null,u["\u0275nov"](n,30).maxlength?u["\u0275nov"](n,30).maxlength:null,u["\u0275nov"](n,35).ngClassUntouched,u["\u0275nov"](n,35).ngClassTouched,u["\u0275nov"](n,35).ngClassPristine,u["\u0275nov"](n,35).ngClassDirty,u["\u0275nov"](n,35).ngClassValid,u["\u0275nov"](n,35).ngClassInvalid,u["\u0275nov"](n,35).ngClassPending),l(n,46,0,!t.textArea),l(n,51,0,!t.textArea)})}var x=u["\u0275ccf"]("app-text",i,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,1,"app-text",[],null,null,null,m,p)),u["\u0275did"](114688,null,0,i,[s.a,r.l],null,null)],function(l,n){l(n,1,0)},null)},{textArea:"textArea"},{},[]),h=t("KdFd"),v=function(){return function(){}}();t.d(n,"TextModuleNgFactory",function(){return y});var y=u["\u0275cmf"](e,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[x]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,d.m,d.l,[u.LOCALE_ID]),u["\u0275mpd"](4608,a.t,a.t,[]),u["\u0275mpd"](4608,s.a,s.a,[h.c]),u["\u0275mpd"](512,d.b,d.b,[]),u["\u0275mpd"](512,r.p,r.p,[[2,r.u],[2,r.l]]),u["\u0275mpd"](512,v,v,[]),u["\u0275mpd"](512,a.r,a.r,[]),u["\u0275mpd"](512,a.e,a.e,[]),u["\u0275mpd"](512,e,e,[]),u["\u0275mpd"](1024,r.j,function(){return[[{path:"",component:i}]]},[])])})}});