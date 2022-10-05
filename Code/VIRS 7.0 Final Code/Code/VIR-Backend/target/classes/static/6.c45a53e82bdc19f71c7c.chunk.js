webpackJsonp([6],{H4sg:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("3j3K"),t=function(){return function(){}}(),o=e("2Je8"),a=e("IAV2"),i=e("/i+G"),d=e("K0TW"),r=e("+dDw"),c=e("NVOs"),s=e("mN9t"),g=e("2Lmt"),p=e("kzcK"),m=e("uXZL"),v=function(){function l(l,n,e){this._wordsList=l,this._definitionService=n,this.modalService=e,this.awlpage=1,this.hipage=1,this.medpage=1,this.lowpage=1,this.searchTrigger=!1,this.showTable=!1,this.defaultPagination=1,this.advancedPagination=1,this.paginationSize=1,this.disabledPagination=1,this.isDisabled=!0,this.tableSize=20,this.sort="ASC",this.activeCategory="awl"}return l.prototype.resetPagination=function(){this.awlpage=1,this.hipage=1,this.medpage=1,this.lowpage=1},l.prototype.updateCategory=function(l){this.activeCategory=l,this.searchTrigger=!1,this.getWordList(0,this.activeCategory,this.tableSize,this.sort),this.convertText(this.activeCategory)},l.prototype.getWordList=function(l,n,e,u){var t=this;this.defaultPagination=1,this.sort=u,this._wordsList.getData(l,n,e,u).subscribe(function(l){t.page=l,t.turnOn=!0},function(l){l.error instanceof Error?console.log("Client-side Error occured"):console.log("Server-side Error occured")})},l.prototype.getAWLWordList=function(l){this.getWordList(l-1,"awl",this.tableSize,this.sort)},l.prototype.getSTEMWordList=function(l){this.getWordList(l-1,"stem",this.tableSize,this.sort)},l.prototype.getHIWordList=function(l){this.getWordList(l-1,"hi",this.tableSize,this.sort)},l.prototype.getMedWordList=function(l){this.getWordList(l-1,"med",this.tableSize,this.sort)},l.prototype.getLowWordList=function(l){this.getWordList(l-1,"low",this.tableSize,this.sort)},l.prototype.convertText=function(l){var n;return"awl"===l?n="Academic Word":"stem"==l?n="STEM":"hi"===l?n="High Frequency":"med"===l?n="Medium Frequency":"low"===l&&(n="Low Frequency"),1==this.searchTrigger?this.resultCategory=n:0==this.searchTrigger?this.wordCategory=n:void 0},l.prototype.ngOnInit=function(){this.getWordList(0,this.activeCategory,this.tableSize,this.sort),this.convertText(this.activeCategory),window.scrollTo(0,0)},l.prototype.getDefinition=function(l){var n=this;this.processing=!0,this.error=!1,this.cleanWord=l.replace(/[^a-zA-Z ]/g,""),this._definitionService.getDefinitionService(this.cleanWord).subscribe(function(l){n.wordDefinition=l,n.turnOn=!0,n.processing=!1},function(l){l.error instanceof Error?console.log("Client-side Error occured"):(n.error=!0,n.processing=!1,console.log("Server-side Error occured"))})},l.prototype.open=function(l){var n=this;this.modalService.open(l).result.then(function(l){n.closeResult="Closed with: "+l},function(l){n.closeResult="Dismissed "+n.getDismissReason(l)})},l.prototype.getDismissReason=function(l){return l===p.a.ESC?"by pressing ESC":l===p.a.BACKDROP_CLICK?"by clicking on a backdrop":"with: "+l},l.prototype.searchWord=function(){var l=this;this.errorSearch=!1,this.searchTrigger=!0,this.alertWord=this.searchArea;var n="awl,hi,stem,med,low";this._wordsList.getWord(this.searchArea,n).subscribe(function(e){l.word=e,l.processing=!1,l.showTable=!0,l.resultCategory=l.convertText(e.category),n=null},function(e){e.error instanceof Error?console.log("Client-side Error occured"):(l.errorSearch=!0,console.log("Server-side Error occured")),n=null})},l.prototype.copyMessage=function(l){var n=document.createElement("textarea");n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.opacity="0",n.value=l,document.body.appendChild(n),n.focus(),n.select(),document.execCommand("copy"),document.body.removeChild(n)},l.prototype.exportexcel=function(){var l=document.getElementById("excel-table"),n=m.utils.table_to_sheet(l),e=m.utils.book_new();m.utils.book_append_sheet(e,n,"Sheet1"),m.writeFile(e,"WordList.xlsx")},l.ctorParameters=function(){return[{type:g.WordsListService},{type:g.DefinitionService},{type:p.b}]},l}(),h=e("sgnN"),b=e("qKow"),f=e("wvPa"),C=e("615R"),y=e("3kwk"),w=[[".col.col-md-8.col-xl-4[_ngcontent-%COMP%]{margin-top:10px;margin-left:30px}.dark-mode[_ngcontent-%COMP%]{background-color:#3d3d3d;color:#ebebeb}.light-mode[_ngcontent-%COMP%]{background-color:#ebebeb;color:#3d3d3d}.table-responsive[_ngcontent-%COMP%]{margin-top:10px;width:100%}.btn-group[_ngcontent-%COMP%], .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%}.purpleButton[_ngcontent-%COMP%]{background-color:#9932cc;color:#fff}.purpleButton[_ngcontent-%COMP%]:hover{background-color:#8b008b}.page[_ngcontent-%COMP%]{width:40%!important}.bottomMarging[_ngcontent-%COMP%]{margin-bottom:25px}.topMarging[_ngcontent-%COMP%]{margin-top:25px}.center[_ngcontent-%COMP%]{margin:auto;width:50%;border:3px solid green;padding:10px}a[_ngcontent-%COMP%]{color:inherit}a.disabled[_ngcontent-%COMP%]{pointer-events:none}.modal-body[_ngcontent-%COMP%]{max-height:calc(100vh - 210px);overflow-y:auto}table[_ngcontent-%COMP%]{table-layout:fixed;width:100%}"]],S=u["\u0275crt"]({encapsulation:0,styles:w,data:{}});function k(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,4,"div",[["class","alert alert-danger"],["role","alert"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275eld"](0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,[""," "])),(l()(),u["\u0275ted"](null,[" doesn't exist in data base.\n"]))],null,function(l,n){l(n,3,0,n.component.alertWord)})}function L(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,10,"tr",[["class","table-success"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275eld"](0,null,null,4,"td",[],null,[[null,"click"]],function(l,n,e){var t=!0,o=l.component;"click"===n&&(o.getDefinition(o.word.value),t=!1!==o.open(u["\u0275nov"](l.parent,95))&&t);return t},null,null)),(l()(),u["\u0275ted"](null,["\n                    "])),(l()(),u["\u0275eld"](0,null,null,1,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["",""])),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275eld"](0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["",""])),(l()(),u["\u0275ted"](null,["\n            "]))],null,function(l,n){var e=n.component;l(n,5,0,e.word.value),l(n,9,0,e.resultCategory)})}function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,0,"i",[["class","fa fa-spinner fa-spin"],["style","font-size:32px;color:black"]],null,null,null,null,null))],null,null)}function z(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,4,"div",[["class","alert alert-warning"],["role","alert"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["Oh snap!"])),(l()(),u["\u0275ted"](null,[" We couldn't find the definition, please try another word.\n        "]))],null,null)}function x(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,0,"p",[["class","card-text"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.wordDefinition.wiki.html)})}function M(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275eld"](0,null,null,15,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,6,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,0,"img",[["src","assets/images/Wikipedia-logo.png"],["style","width:50px;height:50px;"],["title","Wikipedia Dictionary"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,[" Definition \xa0\xa0\n            "])),(l()(),u["\u0275and"](16777216,null,null,1,null,R)),u["\u0275did"](16384,null,0,o.k,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,4,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;"click"===n&&(u=!1!==l.context.dismiss("Cross click")&&u);return u},null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\xd7"])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275eld"](0,null,null,9,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275and"](16777216,null,null,1,null,z)),u["\u0275did"](16384,null,0,o.k,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275and"](16777216,null,null,1,null,x)),u["\u0275did"](16384,null,0,o.k,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275eld"](0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,1,"button",[["class","btn btn-outline-dark"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;"click"===n&&(u=!1!==l.context.close("Close click")&&u);return u},null,null)),(l()(),u["\u0275ted"](null,["Close"])),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275ted"](null,["\n"]))],function(l,n){var e=n.component;l(n,8,0,e.processing),l(n,22,0,e.error),l(n,26,0,!e.error&&!e.processing)},null)}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275eld"](0,null,null,4,"td",[],null,[[null,"click"]],function(l,n,e){var t=!0,o=l.component;"click"===n&&(o.getDefinition(l.context.$implicit.value),t=!1!==o.open(u["\u0275nov"](l.parent.parent,95))&&t);return t},null,null)),(l()(),u["\u0275ted"](null,["\n                    "])),(l()(),u["\u0275eld"](0,null,null,1,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["",""])),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275eld"](0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["",""])),(l()(),u["\u0275ted"](null,["\n            "]))],null,function(l,n){var e=n.component;l(n,5,0,n.context.$implicit.value),l(n,9,0,e.wordCategory)})}function W(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,1,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],function(l,n,e){var u=!0,t=l.component;"pageChange"===n&&(u=!1!==(t.awlpage=e)&&u);"pageChange"===n&&(u=!1!==t.getAWLWordList(t.awlpage)&&u);return u},a.b,a.a)),u["\u0275did"](573440,null,0,i.a,[d.a],{boundaryLinks:[0,"boundaryLinks"],ellipses:[1,"ellipses"],rotate:[2,"rotate"],collectionSize:[3,"collectionSize"],maxSize:[4,"maxSize"],page:[5,"page"],pageSize:[6,"pageSize"]},{pageChange:"pageChange"}),(l()(),u["\u0275ted"](null,["\n        "]))],function(l,n){var e=n.component;l(n,3,0,!0,!1,!0,e.page.totalElements,4,e.awlpage,e.tableSize)},null)}function E(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,1,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],function(l,n,e){var u=!0,t=l.component;"pageChange"===n&&(u=!1!==(t.stempage=e)&&u);"pageChange"===n&&(u=!1!==t.getSTEMWordList(t.awlpage)&&u);return u},a.b,a.a)),u["\u0275did"](573440,null,0,i.a,[d.a],{boundaryLinks:[0,"boundaryLinks"],ellipses:[1,"ellipses"],rotate:[2,"rotate"],collectionSize:[3,"collectionSize"],maxSize:[4,"maxSize"],page:[5,"page"],pageSize:[6,"pageSize"]},{pageChange:"pageChange"}),(l()(),u["\u0275ted"](null,["\n        "]))],function(l,n){var e=n.component;l(n,3,0,!0,!1,!0,e.page.totalElements,4,e.stempage,e.tableSize)},null)}function P(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,1,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],function(l,n,e){var u=!0,t=l.component;"pageChange"===n&&(u=!1!==(t.hipage=e)&&u);"pageChange"===n&&(u=!1!==t.getHIWordList(t.hipage)&&u);return u},a.b,a.a)),u["\u0275did"](573440,null,0,i.a,[d.a],{boundaryLinks:[0,"boundaryLinks"],ellipses:[1,"ellipses"],rotate:[2,"rotate"],collectionSize:[3,"collectionSize"],maxSize:[4,"maxSize"],page:[5,"page"],pageSize:[6,"pageSize"]},{pageChange:"pageChange"}),(l()(),u["\u0275ted"](null,["\n        "]))],function(l,n){var e=n.component;l(n,3,0,!0,!1,!0,e.page.totalElements,4,e.hipage,e.tableSize)},null)}function A(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,1,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],function(l,n,e){var u=!0,t=l.component;"pageChange"===n&&(u=!1!==(t.medpage=e)&&u);"pageChange"===n&&(u=!1!==t.getMedWordList(t.medpage)&&u);return u},a.b,a.a)),u["\u0275did"](573440,null,0,i.a,[d.a],{boundaryLinks:[0,"boundaryLinks"],ellipses:[1,"ellipses"],rotate:[2,"rotate"],collectionSize:[3,"collectionSize"],maxSize:[4,"maxSize"],page:[5,"page"],pageSize:[6,"pageSize"]},{pageChange:"pageChange"}),(l()(),u["\u0275ted"](null,["\n        "]))],function(l,n){var e=n.component;l(n,3,0,!0,!1,!0,e.page.totalElements,4,e.medpage,e.tableSize)},null)}function D(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,1,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],function(l,n,e){var u=!0,t=l.component;"pageChange"===n&&(u=!1!==(t.lowpage=e)&&u);"pageChange"===n&&(u=!1!==t.getLowWordList(t.lowpage)&&u);return u},a.b,a.a)),u["\u0275did"](573440,null,0,i.a,[d.a],{boundaryLinks:[0,"boundaryLinks"],ellipses:[1,"ellipses"],rotate:[2,"rotate"],collectionSize:[3,"collectionSize"],maxSize:[4,"maxSize"],page:[5,"page"],pageSize:[6,"pageSize"]},{pageChange:"pageChange"}),(l()(),u["\u0275ted"](null,["\n        "]))],function(l,n){var e=n.component;l(n,3,0,!0,!1,!0,e.page.totalElements,4,e.lowpage,e.tableSize)},null)}function _(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,108,"div",[["class","table-responsive table-hover table-striped"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275eld"](0,null,null,19,"table",[["class","table table-hover"],["id","excel-table"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,10,"thead",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275eld"](0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["Word"])),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275eld"](0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["Category"])),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275and"](16777216,null,null,1,null,T)),u["\u0275did"](802816,null,0,o.j,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275ted"](null,["\n\n    "])),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275eld"](0,null,null,83,"div",[],null,null,null,null,null)),u["\u0275did"](16384,null,0,o.n,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275and"](16777216,null,null,1,null,W)),u["\u0275did"](278528,null,0,o.o,[u.ViewContainerRef,u.TemplateRef,o.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275and"](16777216,null,null,1,null,E)),u["\u0275did"](278528,null,0,o.o,[u.ViewContainerRef,u.TemplateRef,o.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275and"](16777216,null,null,1,null,P)),u["\u0275did"](278528,null,0,o.o,[u.ViewContainerRef,u.TemplateRef,o.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275and"](16777216,null,null,1,null,A)),u["\u0275did"](278528,null,0,o.o,[u.ViewContainerRef,u.TemplateRef,o.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275and"](16777216,null,null,1,null,D)),u["\u0275did"](278528,null,0,o.o,[u.ViewContainerRef,u.TemplateRef,o.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,0,"hr",[["class","bottomMarging"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\n        "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,27,"div",[["class","btn-group col-md-4 float-right"],["data-toggle","buttons"],["name","radioBasic"],["ngbRadioGroup",""],["role","group"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0,t=l.component;"ngModelChange"===n&&(u=!1!==(t.tableSize=e)&&u);return u},null,null)),u["\u0275did"](16384,null,0,r.b,[],{name:[0,"name"]},null),u["\u0275prd"](1024,null,c.h,function(l){return[l]},[r.b]),u["\u0275did"](671744,null,0,c.m,[[8,null],[8,null],[8,null],[2,c.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,c.i,null,[c.m]),u["\u0275did"](16384,null,0,c.j,[c.i],null,null),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,5,"label",[["class","btn-secondary"],["ngbButtonLabel",""]],[[2,"btn",null],[2,"active",null],[2,"disabled",null],[2,"focus",null]],null,null,null,null)),u["\u0275did"](16384,null,0,s.a,[],null,null),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275eld"](0,null,null,1,"input",[["ngbButton",""],["type","radio"]],[[8,"checked",0],[8,"disabled",0],[8,"name",0]],[[null,"click"],[null,"change"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0,o=l.component;"change"===n&&(t=!1!==u["\u0275nov"](l,56).onChange()&&t);"focus"===n&&(t=!1!=(u["\u0275nov"](l,56).focused=!0)&&t);"blur"===n&&(t=!1!=(u["\u0275nov"](l,56).focused=!1)&&t);"click"===n&&(o.getWordList(0,o.activeCategory,20,o.sort),t=!1!==o.resetPagination()&&t);return t},null,null)),u["\u0275did"](147456,null,0,r.a,[r.b,s.a,u.Renderer2,u.ElementRef],{value:[0,"value"]},null),(l()(),u["\u0275ted"](null,[" 20\n            "])),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,5,"label",[["class","btn-secondary"],["ngbButtonLabel",""]],[[2,"btn",null],[2,"active",null],[2,"disabled",null],[2,"focus",null]],null,null,null,null)),u["\u0275did"](16384,null,0,s.a,[],null,null),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275eld"](0,null,null,1,"input",[["ngbButton",""],["type","radio"],["value","60"]],[[8,"checked",0],[8,"disabled",0],[8,"name",0]],[[null,"click"],[null,"change"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0,o=l.component;"change"===n&&(t=!1!==u["\u0275nov"](l,63).onChange()&&t);"focus"===n&&(t=!1!=(u["\u0275nov"](l,63).focused=!0)&&t);"blur"===n&&(t=!1!=(u["\u0275nov"](l,63).focused=!1)&&t);"click"===n&&(o.getWordList(0,o.activeCategory,60,o.sort),t=!1!==o.resetPagination()&&t);return t},null,null)),u["\u0275did"](147456,null,0,r.a,[r.b,s.a,u.Renderer2,u.ElementRef],{value:[0,"value"]},null),(l()(),u["\u0275ted"](null,[" 60\n            "])),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,5,"label",[["class","btn-secondary dark-mode"],["ngbButtonLabel",""]],[[2,"btn",null],[2,"active",null],[2,"disabled",null],[2,"focus",null]],null,null,null,null)),u["\u0275did"](16384,null,0,s.a,[],null,null),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275eld"](0,null,null,1,"input",[["ngbButton",""],["type","radio"]],[[8,"checked",0],[8,"disabled",0],[8,"name",0]],[[null,"click"],[null,"change"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0,o=l.component;"change"===n&&(t=!1!==u["\u0275nov"](l,70).onChange()&&t);"focus"===n&&(t=!1!=(u["\u0275nov"](l,70).focused=!0)&&t);"blur"===n&&(t=!1!=(u["\u0275nov"](l,70).focused=!1)&&t);"click"===n&&(o.getWordList(0,o.activeCategory,2e3,o.sort),t=!1!==o.resetPagination()&&t);return t},null,null)),u["\u0275did"](147456,null,0,r.a,[r.b,s.a,u.Renderer2,u.ElementRef],{value:[0,"value"]},null),(l()(),u["\u0275ted"](null,[" ALL\n            "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n\n        "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,20,"div",[["class","btn-group col-md-4"],["data-toggle","buttons"],["name","radioBasic"],["ngbRadioGroup",""],["role","group"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0,t=l.component;"ngModelChange"===n&&(u=!1!==(t.sorting=e)&&u);return u},null,null)),u["\u0275did"](16384,null,0,r.b,[],{name:[0,"name"]},null),u["\u0275prd"](1024,null,c.h,function(l){return[l]},[r.b]),u["\u0275did"](671744,null,0,c.m,[[8,null],[8,null],[8,null],[2,c.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,c.i,null,[c.m]),u["\u0275did"](16384,null,0,c.j,[c.i],null,null),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,5,"label",[["class","btn-secondary"],["ngbButtonLabel",""]],[[2,"btn",null],[2,"active",null],[2,"disabled",null],[2,"focus",null]],null,null,null,null)),u["\u0275did"](16384,null,0,s.a,[],null,null),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275eld"](0,null,null,1,"input",[["ngbButton",""],["type","radio"]],[[8,"checked",0],[8,"disabled",0],[8,"name",0]],[[null,"click"],[null,"change"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0,o=l.component;"change"===n&&(t=!1!==u["\u0275nov"](l,86).onChange()&&t);"focus"===n&&(t=!1!=(u["\u0275nov"](l,86).focused=!0)&&t);"blur"===n&&(t=!1!=(u["\u0275nov"](l,86).focused=!1)&&t);"click"===n&&(o.getWordList(0,o.activeCategory,o.tableSize,"ASC"),t=!1!==o.resetPagination()&&t);return t},null,null)),u["\u0275did"](147456,null,0,r.a,[r.b,s.a,u.Renderer2,u.ElementRef],{value:[0,"value"]},null),(l()(),u["\u0275ted"](null,[" ASC\n            "])),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,5,"label",[["class","btn-secondary"],["ngbButtonLabel",""]],[[2,"btn",null],[2,"active",null],[2,"disabled",null],[2,"focus",null]],null,null,null,null)),u["\u0275did"](16384,null,0,s.a,[],null,null),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275eld"](0,null,null,1,"input",[["ngbButton",""],["type","radio"],["value","DESC"]],[[8,"checked",0],[8,"disabled",0],[8,"name",0]],[[null,"click"],[null,"change"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0,o=l.component;"change"===n&&(t=!1!==u["\u0275nov"](l,93).onChange()&&t);"focus"===n&&(t=!1!=(u["\u0275nov"](l,93).focused=!0)&&t);"blur"===n&&(t=!1!=(u["\u0275nov"](l,93).focused=!1)&&t);"click"===n&&(o.getWordList(0,o.activeCategory,o.tableSize,"DESC"),t=!1!==o.resetPagination()&&t);return t},null,null)),u["\u0275did"](147456,null,0,r.a,[r.b,s.a,u.Renderer2,u.ElementRef],{value:[0,"value"]},null),(l()(),u["\u0275ted"](null,[" DESC\n            "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n\n        "])),(l()(),u["\u0275eld"](0,null,null,7,"div",[["class","col-md-4"],["style","margin:0 auto;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n                "])),(l()(),u["\u0275eld"](0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["page: "," / ",""])),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,0,"hr",[["class","topMarging"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275ted"](null,["\n"]))],function(l,n){var e=n.component;l(n,19,0,e.page.content),l(n,25,0,e.activeCategory);l(n,28,0,"awl");l(n,31,0,"stem");l(n,34,0,"hi");l(n,37,0,"med");l(n,40,0,"low");l(n,46,0,"radioBasic");l(n,48,0,"radioBasic",e.tableSize);l(n,56,0,20);l(n,63,0,"60");l(n,70,0,2e3);l(n,76,0,"radioBasic");l(n,78,0,"radioBasic",e.sorting),l(n,86,0,e.ASC);l(n,93,0,"DESC")},function(l,n){var e=n.component;l(n,45,0,u["\u0275nov"](n,50).ngClassUntouched,u["\u0275nov"](n,50).ngClassTouched,u["\u0275nov"](n,50).ngClassPristine,u["\u0275nov"](n,50).ngClassDirty,u["\u0275nov"](n,50).ngClassValid,u["\u0275nov"](n,50).ngClassInvalid,u["\u0275nov"](n,50).ngClassPending);l(n,52,0,!0,u["\u0275nov"](n,53).active,u["\u0275nov"](n,53).disabled,u["\u0275nov"](n,53).focused),l(n,55,0,u["\u0275nov"](n,56).checked,u["\u0275nov"](n,56).disabled,u["\u0275nov"](n,56).nameAttr);l(n,59,0,!0,u["\u0275nov"](n,60).active,u["\u0275nov"](n,60).disabled,u["\u0275nov"](n,60).focused),l(n,62,0,u["\u0275nov"](n,63).checked,u["\u0275nov"](n,63).disabled,u["\u0275nov"](n,63).nameAttr);l(n,66,0,!0,u["\u0275nov"](n,67).active,u["\u0275nov"](n,67).disabled,u["\u0275nov"](n,67).focused),l(n,69,0,u["\u0275nov"](n,70).checked,u["\u0275nov"](n,70).disabled,u["\u0275nov"](n,70).nameAttr),l(n,75,0,u["\u0275nov"](n,80).ngClassUntouched,u["\u0275nov"](n,80).ngClassTouched,u["\u0275nov"](n,80).ngClassPristine,u["\u0275nov"](n,80).ngClassDirty,u["\u0275nov"](n,80).ngClassValid,u["\u0275nov"](n,80).ngClassInvalid,u["\u0275nov"](n,80).ngClassPending);l(n,82,0,!0,u["\u0275nov"](n,83).active,u["\u0275nov"](n,83).disabled,u["\u0275nov"](n,83).focused),l(n,85,0,u["\u0275nov"](n,86).checked,u["\u0275nov"](n,86).disabled,u["\u0275nov"](n,86).nameAttr);l(n,89,0,!0,u["\u0275nov"](n,90).active,u["\u0275nov"](n,90).disabled,u["\u0275nov"](n,90).focused),l(n,92,0,u["\u0275nov"](n,93).checked,u["\u0275nov"](n,93).disabled,u["\u0275nov"](n,93).nameAttr),l(n,102,0,e.page.number+1,e.page.totalPages)})}function I(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275eld"](0,null,null,11,"div",[["class","container bottomMarging"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275eld"](0,null,null,8,"div",[["class","btn-group hidden-sm-down"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n      "])),(l()(),u["\u0275eld"](0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;"click"===n&&(u=!1!==t.updateCategory("awl")&&u);return u},null,null)),(l()(),u["\u0275ted"](null,["Academic Words"])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,1,"button",[["class","btn purpleButton"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;"click"===n&&(u=!1!==t.updateCategory("stem")&&u);return u},null,null)),(l()(),u["\u0275ted"](null,["STEM Words"])),(l()(),u["\u0275ted"](null,["\n       "])),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275ted"](null,["\n\n"])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275eld"](0,null,null,10,"div",[["class","container bottomMarging"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275eld"](0,null,null,7,"div",[["class","btn-group hidden-md-up"],["style","width: 100%;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;"click"===n&&(u=!1!==t.updateCategory("awl")&&u);return u},null,null)),(l()(),u["\u0275ted"](null,["Academic Words"])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,1,"button",[["class","btn purpleButton"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;"click"===n&&(u=!1!==t.updateCategory("stem")&&u);return u},null,null)),(l()(),u["\u0275ted"](null,["STEM Words"])),(l()(),u["\u0275ted"](null,["\n\n    "])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275ted"](null,["\n\n"])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275eld"](0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n\n"])),(l()(),u["\u0275eld"](0,null,null,7,"div",[["class","dark-mode"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275eld"](0,null,null,4,"p",[["style","text-align: center;font-size: 0.9rem; "]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["Click ALL on the bottom of the page prior to downloading the word list."])),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275ted"](null,["\n\n"])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275and"](16777216,null,null,1,null,k)),u["\u0275did"](16384,null,0,o.k,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](null,["\n\n"])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275eld"](0,null,null,34,"div",[["class","form-group row m-1 p-1"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275eld"](0,null,null,8,"div",[["class","col col-md-8 col-xl-4"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,5,"input",[["class","form-control"],["id","example-search-input"],["name","searchArea"],["placeholder","Word.."],["type","search"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0,o=l.component;"input"===n&&(t=!1!==u["\u0275nov"](l,49)._handleInput(e.target.value)&&t);"blur"===n&&(t=!1!==u["\u0275nov"](l,49).onTouched()&&t);"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,49)._compositionStart()&&t);"compositionend"===n&&(t=!1!==u["\u0275nov"](l,49)._compositionEnd(e.target.value)&&t);"ngModelChange"===n&&(t=!1!==(o.searchArea=e)&&t);return t},null,null)),u["\u0275did"](16384,null,0,c.d,[u.Renderer2,u.ElementRef,[2,c.a]],null,null),u["\u0275prd"](1024,null,c.h,function(l){return[l]},[c.d]),u["\u0275did"](671744,null,0,c.m,[[8,null],[8,null],[8,null],[2,c.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,c.i,null,[c.m]),u["\u0275did"](16384,null,0,c.j,[c.i],null,null),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275eld"](0,null,null,21,"div",[["aria-label","Toolbar with button groups"],["class","btn-toolbar"],["role","toolbar"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,4,"div",[["aria-label","First group"],["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](0,null,null,1,"button",[["class","btn light-mode m-1 mt-2"],["required",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,e){var u=!0,t=l.component;"click"===n&&(u=!1!==t.searchWord()&&u);return u},null,null)),(l()(),u["\u0275ted"](null,[" Search "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,5,"div",[["aria-label","Second group"],["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](16777216,null,null,2,"button",[["class","btn light-mode m-1 mt-2"],["ngbTooltip","Text Copied!"],["placement","bottom"],["triggers","click:blur"],["value","click to copy"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;"click"===n&&(u=!1!==t.copyMessage("Ehsanzadeh, S.J. & Dwyer, E. (2017). A Corpus-based K-12 School Dictionary.")&&u);return u},null,null)),u["\u0275did"](212992,null,0,h.a,[u.ElementRef,u.Renderer2,u.Injector,u.ComponentFactoryResolver,u.ViewContainerRef,b.a,u.NgZone],{placement:[0,"placement"],triggers:[1,"triggers"],ngbTooltip:[2,"ngbTooltip"]},null),(l()(),u["\u0275ted"](null,[" Cite Us "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,5,"div",[["aria-label","Third group"],["class","btn-group"],["role","group"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275eld"](16777216,null,null,2,"button",[["class","btn light-mode m-1 mt-2"],["ngbTooltip","Click ALL below before downloading"],["placement","right"],["value","Click to Download"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;"click"===n&&(u=!1!==t.exportexcel()&&u);return u},null,null)),u["\u0275did"](212992,null,0,h.a,[u.ElementRef,u.Renderer2,u.Injector,u.ComponentFactoryResolver,u.ViewContainerRef,b.a,u.NgZone],{placement:[0,"placement"],ngbTooltip:[1,"ngbTooltip"]},null),(l()(),u["\u0275ted"](null,[" Download List "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275ted"](null,["\n\n"])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275eld"](0,null,null,11,"div",[["class","table-responsive table-hover table-striped"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275eld"](0,null,null,8,"table",[["class","table table-hover"]],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275eld"](0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),u["\u0275ted"](null,["\n            "])),(l()(),u["\u0275and"](16777216,null,null,1,null,L)),u["\u0275did"](16384,null,0,o.k,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](null,["\n        "])),(l()(),u["\u0275ted"](null,["\n    "])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275ted"](null,["\n\n\n"])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275and"](0,[["content",2]],null,0,null,M)),(l()(),u["\u0275ted"](null,["\n\n"])),(l()(),u["\u0275ted"](null,["\n"])),(l()(),u["\u0275and"](16777216,null,null,1,null,_)),u["\u0275did"](16384,null,0,o.k,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](null,["\n\n"]))],function(l,n){var e=n.component;l(n,41,0,e.errorSearch);l(n,51,0,"searchArea",e.searchArea);l(n,67,0,"bottom","click:blur","Text Copied!");l(n,74,0,"right","Click ALL below before downloading"),l(n,89,0,e.showTable&&!e.error),l(n,99,0,e.turnOn)},function(l,n){var e=n.component;l(n,48,0,u["\u0275nov"](n,53).ngClassUntouched,u["\u0275nov"](n,53).ngClassTouched,u["\u0275nov"](n,53).ngClassPristine,u["\u0275nov"](n,53).ngClassDirty,u["\u0275nov"](n,53).ngClassValid,u["\u0275nov"](n,53).ngClassInvalid,u["\u0275nov"](n,53).ngClassPending),l(n,60,0,!e.searchArea)})}var O=u["\u0275ccf"]("app-stem-academia",v,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,null,null,2,"app-stem-academia",[],null,null,null,I,S)),u["\u0275prd"](4608,null,d.a,d.a,[]),u["\u0275did"](114688,null,0,v,[f.a,C.a,y.a],null,null)],function(l,n){l(n,2,0)},null)},{searchArea:"searchArea"},{},[]),B=e("7ldD"),V=e("h+Bk"),F=e("IiyU"),j=e("2NoN"),K=e("xiEB"),N=e("SDm3"),H=e("jtp5"),Z=e("CXHW"),q=e("gFLb"),U=e("nCuf"),G=e("cG9e"),J=e("ZwZs"),X=e("DDfv"),$=e("lcaH"),Q=e("gEbu"),Y=e("7DGp"),ll=e("hwnt"),nl=e("c7mC"),el=e("ETCP"),ul=e("aKiW"),tl=e("v4DA"),ol=e("tyH+"),al=e("KdFd"),il=e("5oXY"),dl=function(){return function(){}}(),rl=e("RX2M"),cl=e("F+yc"),sl=e("vfkA"),gl=e("1Z2I"),pl=e("yDyO"),ml=e("K/oD"),vl=e("eCJc"),hl=e("/I96"),bl=e("qsK9"),fl=e("MSQt"),Cl=e("UyZi"),yl=e("Ep2y"),wl=e("WKBe"),Sl=e("A8b0"),kl=e("as+d"),Ll=e("62nT");e.d(n,"StemAcademiaModuleNgFactory",function(){return Rl});var Rl=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[O,B.a,V.a,F.a,j.a,K.a,N.a,H.a]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,o.m,o.l,[u.LOCALE_ID]),u["\u0275mpd"](4608,c.t,c.t,[]),u["\u0275mpd"](4608,Z.a,Z.a,[u.ApplicationRef,u.Injector,u.ComponentFactoryResolver]),u["\u0275mpd"](4608,y.a,y.a,[u.ComponentFactoryResolver,u.Injector,Z.a]),u["\u0275mpd"](4608,q.a,q.a,[]),u["\u0275mpd"](4608,U.a,U.a,[]),u["\u0275mpd"](4608,b.a,b.a,[]),u["\u0275mpd"](4608,G.a,G.a,[]),u["\u0275mpd"](4608,J.a,J.a,[]),u["\u0275mpd"](4608,X.a,X.a,[]),u["\u0275mpd"](4608,$.a,$.b,[]),u["\u0275mpd"](4608,Q.a,Q.b,[]),u["\u0275mpd"](4608,Y.b,Y.a,[]),u["\u0275mpd"](4608,ll.a,ll.a,[]),u["\u0275mpd"](4608,nl.a,nl.a,[]),u["\u0275mpd"](4608,d.a,d.a,[]),u["\u0275mpd"](4608,el.a,el.a,[]),u["\u0275mpd"](4608,ul.a,ul.a,[]),u["\u0275mpd"](4608,tl.a,tl.a,[]),u["\u0275mpd"](4608,ol.a,ol.a,[]),u["\u0275mpd"](4608,f.a,f.a,[al.c]),u["\u0275mpd"](4608,C.a,C.a,[al.c]),u["\u0275mpd"](512,o.b,o.b,[]),u["\u0275mpd"](512,il.p,il.p,[[2,il.u],[2,il.l]]),u["\u0275mpd"](512,dl,dl,[]),u["\u0275mpd"](512,rl.a,rl.a,[]),u["\u0275mpd"](512,cl.a,cl.a,[]),u["\u0275mpd"](512,sl.a,sl.a,[]),u["\u0275mpd"](512,gl.a,gl.a,[]),u["\u0275mpd"](512,pl.a,pl.a,[]),u["\u0275mpd"](512,ml.a,ml.a,[]),u["\u0275mpd"](512,vl.a,vl.a,[]),u["\u0275mpd"](512,hl.a,hl.a,[]),u["\u0275mpd"](512,c.r,c.r,[]),u["\u0275mpd"](512,c.e,c.e,[]),u["\u0275mpd"](512,bl.a,bl.a,[]),u["\u0275mpd"](512,fl.a,fl.a,[]),u["\u0275mpd"](512,Cl.c,Cl.c,[]),u["\u0275mpd"](512,yl.a,yl.a,[]),u["\u0275mpd"](512,wl.a,wl.a,[]),u["\u0275mpd"](512,Sl.a,Sl.a,[]),u["\u0275mpd"](512,kl.a,kl.a,[]),u["\u0275mpd"](512,Ll.a,Ll.a,[]),u["\u0275mpd"](512,p.c,p.c,[]),u["\u0275mpd"](512,t,t,[]),u["\u0275mpd"](1024,il.j,function(){return[[{path:"",component:v}]]},[])])})}});