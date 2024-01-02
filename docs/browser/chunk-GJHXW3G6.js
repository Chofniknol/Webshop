import{$ as A,A as st,B as m,C as f,Ca as mt,D as yt,Da as pt,E as Ot,Ea as dt,F as Et,Fa as ct,Ga as ut,Ha as gt,I as F,Ia as ft,Ja as ht,K as It,L as wt,M as At,N as Mt,Na as kt,S as Tt,U as P,V as Ut,X as xt,Y as $,Z as w,_ as g,a as Nt,aa as M,ba as T,c as z,ca as lt,d as S,da as U,e as tt,ea as R,f as et,fa as C,g as Y,h as b,ha as Rt,i as it,ia as jt,j as nt,ja as h,k as rt,ka as N,l as X,m as a,ma as D,n as d,na as O,o as l,p as _,pa as j,q as n,qa as k,r,s as c,ta as G,ua as V,v as ot,va as L,w as v,wa as B,x as at,y as q,ya as E,z as Dt}from"./chunk-OT7LPB2V.js";var H=(()=>{let i=class i{constructor(t,e){this.router=t,this.notification=e}canActivate(t,e){return $.isUserLoggedIn()?(this.router.navigateByUrl("/user/dashboard"),this.notification.error("ERROR","You don't have access of this page!!!",{nzDuration:5e3}),!1):$.hasToken()?!0:($.signOut(),this.router.navigateByUrl("/login"),this.notification.error("ERROR","You Are Not LoggedIn. Please Login First!!!",{nzDuration:5e3}),!1)}};i.\u0275fac=function(e){return new(e||i)(Y(P),Y(h))},i.\u0275prov=tt({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();var x=jt.BASIC_URL,y=(()=>{let i=class i{constructor(t){this.http=t}addCategory(t){return this.http.post(x+"api/admin/category",t,{headers:this.createAuthorizationHeader()}).pipe(S(e=>this.log("Category posted successfully")),z(this.handleError("Error posting Category",[])))}addProduct(t){return this.http.post(x+"api/admin/product",t,{headers:this.createAuthorizationHeader()}).pipe(S(e=>this.log("Product posted successfully")),z(this.handleError("Error posting Product",[])))}getProductById(t){return this.http.get(x+`api/admin/product/${t}`,{headers:this.createAuthorizationHeader()}).pipe(S(e=>this.log("Product Fetched successfully")),z(this.handleError("Error Getting Product",[])))}updateProduct(t,e){return this.http.put(x+`api/admin/product/${t}`,e,{headers:this.createAuthorizationHeader()}).pipe(S(o=>this.log("Product updated successfully")),z(this.handleError("Error updating Product",[])))}getAllCategories(){return this.http.get(x+"api/admin/categories",{headers:this.createAuthorizationHeader()}).pipe(S(t=>this.log("Categories Fetched successfully")),z(this.handleError("Error Getting Categories",[])))}deleteProductById(t){return this.http.delete(x+`api/admin/product/${t}`,{headers:this.createAuthorizationHeader()}).pipe(S(e=>this.log("Product Deleted successfully")),z(this.handleError("Error Deleting Product",[])))}getProductsByTitle(t){return this.http.get(x+`api/admin/search/${t}`,{headers:this.createAuthorizationHeader()}).pipe(S(e=>this.log("Products fetched successfully")),z(this.handleError("Error getting Products",[])))}getAllProducts(){return this.http.get(x+"api/admin/products",{headers:this.createAuthorizationHeader()}).pipe(S(t=>this.log("Products fetched successfully")),z(this.handleError("Error getting Products",[])))}getAllUsers(){return this.http.get(x+"api/admin/users",{headers:this.createAuthorizationHeader()}).pipe(S(t=>this.log("Users fetched successfully")),z(this.handleError("Error getting users",[])))}deleteUserById(t){return this.http.delete(x+`api/admin/user/${t}`,{headers:this.createAuthorizationHeader()}).pipe(S(e=>this.log("User Deleted successfully")),z(this.handleError("Error Deleting user",[])))}getPlacedOrders(){return this.http.get(x+"api/admin/placedOrders",{headers:this.createAuthorizationHeader()}).pipe(S(t=>this.log("Orders fetched successfully")),z(this.handleError("Error getting Orders",[])))}createAuthorizationHeader(){return new At().set("Authorization","Bearer "+$.getToken())}log(t){console.log(`User Auth Service: ${t}`)}handleError(t="operation",e){return o=>(console.error(o),this.log(`${t} failed: ${o.message}`),Nt(e))}};i.\u0275fac=function(e){return new(e||i)(Y(Mt))},i.\u0275prov=tt({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();var Vt=(()=>{let i=class i{constructor(t,e,o,u){this.fb=t,this.notification=e,this.router=o,this.adminService=u,this.isSpinning=!1}ngOnInit(){this.validateForm=this.fb.group({name:[null,[g.required]],description:[null,[g.required]]})}submitForm(){if(console.log(this.validateForm.valid),console.log(this.validateForm),this.validateForm.valid)console.log("In function"),this.isSpinning=!0,this.adminService.addCategory(this.validateForm.value).subscribe(t=>{this.isSpinning=!1,t.status=="CREATED"?(this.notification.success("SUCCESS","Category Posted Successfully!!!",{nzDuration:5e3}),this.router.navigateByUrl("/admin/dashboard")):this.notification.error("ERROR",`${t.message}`,{nzDuration:5e3})});else for(let t in this.validateForm.controls)this.validateForm.controls[t].markAsDirty(),this.validateForm.controls[t].updateValueAndValidity()}};i.\u0275fac=function(e){return new(e||i)(d(C),d(h),d(P),d(y))},i.\u0275cmp=b({type:i,selectors:[["app-add-category"]],decls:19,vars:6,consts:[[2,"margin-top","50px"],["nzTip","Working...",3,"nzSpinning","nzSize"],[1,"parent"],[1,"child"],["nz-row","",1,"imgDiv"],[2,"margin-left","230px"],["nz-form","",3,"formGroup","ngSubmit"],["nz-row",""],["nz-col","","nzSpan","24"],["nzHasFeedback","","nzErrorTip","This Input Is Required!",3,"nzXs"],["nz-input","","placeholder","Name","formControlName","name"],["rows","1","nz-input","","placeholder","Description","formControlName","description"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzType"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"nz-spin",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),m(6,"Add Category"),r()(),n(7,"form",6),v("ngSubmit",function(){return o.submitForm()}),n(8,"div",7)(9,"div",8)(10,"nz-form-item")(11,"nz-form-control",9),c(12,"input",10),r()()(),n(13,"div",8)(14,"nz-form-item")(15,"nz-form-control",9),c(16,"textarea",11),r()()()(),n(17,"button",12),m(18,"Add"),r()()()()()()),e&2&&(a(1),l("nzSpinning",o.isSpinning)("nzSize","large"),a(6),l("formGroup",o.validateForm),a(4),l("nzXs",24),a(4),l("nzXs",24),a(2),l("nzType","primary"))},dependencies:[O,N,D,k,j,V,G,L,B,E,T,w,A,M,U,R],styles:["[nz-form][_ngcontent-%COMP%]{max-width:800px}.phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}.child[_ngcontent-%COMP%]{padding:50px;position:absolute;width:680px;background-color:#fff;top:20%;left:50%;transform:translate(-50%,-50%);background:white;box-shadow:1px 1px 15px -7px #0000001a;border-radius:5px;margin-bottom:22px}nz-form-control[_ngcontent-%COMP%]{min-width:280px}.parent[_ngcontent-%COMP%]{width:100%;min-height:121vh;position:relative}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{background-color:#001529;border:none}.imgDiv[_ngcontent-%COMP%]{width:100%;// margin-top: -50px;vertical-align:middle}.profile-badge[_ngcontent-%COMP%]{height:180px;display:flex;align-items:center;flex-direction:column;align-items:flex-start;margin:auto}@media only screen and (max-width: 600px){.profile-badge[_ngcontent-%COMP%]{margin-left:0}}.profile[_ngcontent-%COMP%]{height:180px;margin-bottom:5px;object-fit:cover}#upload_profile_image[_ngcontent-%COMP%]{display:none}#add_img_icon[_ngcontent-%COMP%]{width:70px;height:35px;position:relative;left:118px;top:-42px}"]});let s=i;return s})();function Qt(s,i){if(s&1&&c(0,"nz-option",25),s&2){let p=i.$implicit;q("nzLabel",p.name),q("nzValue",p.id)}}var Bt=(()=>{let i=class i{constructor(t,e,o,u){this.fb=t,this.notification=e,this.router=o,this.adminService=u,this.avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEOb9DSnnU_mwSu5HYXuFuUjktAvKecyMrw&usqp=CAU",this.isSpinning=!1,this.listOfCategories=[]}getCaptcha(t){t.preventDefault()}ngOnInit(){this.validateForm=this.fb.group({categoryId:[null,[g.required]],name:[null,[g.required]],rating:[null,[g.required]],availableQuantity:[null,[g.required]],description:[null,[g.required]],price:[null,[g.required]]}),this.getAllCategories()}getAllCategories(){this.adminService.getAllCategories().subscribe(t=>{this.listOfCategories=t.data,console.log(this.listOfCategories)})}submitForm(){if(console.log(this.validateForm.valid),console.log(this.validateForm),this.validateForm.valid){console.log("In function"),this.isSpinning=!0;let t=new FormData;t.append("img",this.currentFileUpload),t.append("categoryId",this.validateForm.get("categoryId").value),t.append("name",this.validateForm.get("name").value),t.append("rating",this.validateForm.get("rating").value),t.append("availableQuantity",this.validateForm.get("availableQuantity").value),t.append("description",this.validateForm.get("description").value),t.append("price",this.validateForm.get("price").value),console.log(t),this.adminService.addProduct(t).subscribe(e=>{this.isSpinning=!1,e.status=="CREATED"?(this.notification.success("SUCCESS","Product Posted Successfully!",{nzDuration:5e3}),this.router.navigateByUrl("/admin/dashboard")):this.notification.error("ERRORRR",`${e.message}`,{nzDuration:5e3})})}else for(let t in this.validateForm.controls)this.validateForm.controls[t].markAsDirty(),this.validateForm.controls[t].updateValueAndValidity()}uploadProfileImage(t){let e=t.target;if(!e.files?.length)return;let o=e.files[0];this.currentFileUpload=o,alert("File is here : "+this.currentFileUpload)}uploadFile(t){let e=t.target;if(this.myFile=e.files,!!e.files?.length){this.currentFileUpload=e.files[0];var o=new FileReader;o.readAsDataURL(this.currentFileUpload),o.onload=u=>{this.avatarUrl=o.result}}}};i.\u0275fac=function(e){return new(e||i)(d(C),d(h),d(P),d(y))},i.\u0275cmp=b({type:i,selectors:[["app-add-product"]],decls:43,vars:15,consts:[[2,"margin-top","50px"],["nzTip","Working...",3,"nzSpinning","nzSize"],[1,"parent"],[1,"child"],["nz-row","",1,"imgDiv"],[2,"margin-left","230px"],["nz-form","",3,"formGroup","ngSubmit"],["nz-row",""],["nz-col","",3,"nzMd","nzSm","nzXs"],[1,"profile-badge"],["alt","profile",1,"profile",3,"src"],["type","file","nz-button","","nzType","primary","id","upload_profile_image","accept","image/x-png,image/gif,image/jpeg",3,"change"],["for","upload_profile_image"],["id","add_img_icon","src","../../../../assets/add_icon.png",1,"upload-icon"],["nz-button","","nzShape","circle"],["nz-col","","nzSpan","24"],["nzHasFeedback","","nzErrorTip","This Input Is Required!",3,"nzXs"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select a Category","formControlName","categoryId"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nz-input","","placeholder","Name","formControlName","name"],["nz-input","","type","text","placeholder","Rating","formControlName","rating"],["nz-input","","type","number","placeholder","Quantity","formControlName","availableQuantity"],["nz-input","","type","number","placeholder","Price","formControlName","price"],["rows","1","nz-input","","placeholder","Description","formControlName","description"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzType"],[3,"nzLabel","nzValue"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"nz-spin",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),m(6,"Add Product"),r()(),n(7,"form",6),v("ngSubmit",function(){return o.submitForm()}),n(8,"div",7)(9,"div",8)(10,"div",9),c(11,"img",10),n(12,"input",11),v("change",function(K){return o.uploadFile(K)}),r(),n(13,"label",12),c(14,"img",13),r(),c(15,"button",14),r()(),n(16,"div",15)(17,"nz-form-item")(18,"nz-form-control",16)(19,"nz-select",17),_(20,Qt,1,2,"nz-option",18),r()()()(),n(21,"div",15)(22,"nz-form-item")(23,"nz-form-control",16),c(24,"input",19),r()()(),n(25,"div",15)(26,"nz-form-item")(27,"nz-form-control",16),c(28,"input",20),r()()(),n(29,"div",15)(30,"nz-form-item")(31,"nz-form-control",16),c(32,"input",21),r()()(),n(33,"div",15)(34,"nz-form-item")(35,"nz-form-control",16),c(36,"input",22),r()()(),n(37,"div",15)(38,"nz-form-item")(39,"nz-form-control",16),c(40,"textarea",23),r()()()(),n(41,"button",24),m(42,"Add"),r()()()()()()),e&2&&(a(1),l("nzSpinning",o.isSpinning)("nzSize","large"),a(6),l("formGroup",o.validateForm),a(2),l("nzMd",24)("nzSm",24)("nzXs",24),a(2),l("src",o.avatarUrl,X),a(7),l("nzXs",24),a(2),l("ngForOf",o.listOfCategories),a(3),l("nzXs",24),a(4),l("nzXs",24),a(4),l("nzXs",24),a(4),l("nzXs",24),a(4),l("nzXs",24),a(2),l("nzType","primary"))},dependencies:[F,O,N,D,k,j,V,G,L,B,mt,pt,E,T,w,lt,A,M,U,R],styles:["[nz-form][_ngcontent-%COMP%]{max-width:800px}.phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}.child[_ngcontent-%COMP%]{padding:50px;position:absolute;width:680px;background-color:#fff;top:45%;left:50%;transform:translate(-50%,-50%);background:white;box-shadow:1px 1px 15px -7px #0000001a;border-radius:5px;margin-bottom:22px}nz-form-control[_ngcontent-%COMP%]{min-width:280px}.parent[_ngcontent-%COMP%]{width:100%;min-height:121vh;position:relative}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{background-color:#001529;border:none}.imgDiv[_ngcontent-%COMP%]{width:100%;// margin-top: -50px;vertical-align:middle}.profile-badge[_ngcontent-%COMP%]{height:180px;display:flex;align-items:center;flex-direction:column;align-items:flex-start;margin:auto}@media only screen and (max-width: 600px){.profile-badge[_ngcontent-%COMP%]{margin-left:0}}.profile[_ngcontent-%COMP%]{height:180px;margin-bottom:5px;object-fit:cover}#upload_profile_image[_ngcontent-%COMP%]{display:none}#add_img_icon[_ngcontent-%COMP%]{width:70px;height:35px;position:relative;left:118px;top:-42px}"]});let s=i;return s})();function Kt(s,i){if(s&1&&(n(0,"tr")(1,"td"),m(2),r(),n(3,"td"),m(4),r(),n(5,"td",5),m(6),r(),n(7,"td"),m(8),r(),n(9,"td"),m(10),r(),n(11,"td"),m(12),r(),n(13,"td"),m(14),Ot(15,"date"),r()()),s&2){let p=i.$implicit;a(2),f(p.id),a(2),f(p.userName),a(2),f(p.amount),a(2),f(p.orderDescription),a(2),f(p.payment),a(2),f(p.address),a(2),f(Et(15,7,p.date,"dd/MM/yyyy"))}}var Ht=(()=>{let i=class i{constructor(t,e,o,u){this.adminService=t,this.notification=e,this.fb=o,this.router=u,this.isSpinning=!1,this.size="large"}ngOnInit(){this.validateForm=this.fb.group({}),this.getPlacedOrders()}getPlacedOrders(){this.adminService.getPlacedOrders().subscribe(t=>{this.Orders=t.data,console.log(t)})}};i.\u0275fac=function(e){return new(e||i)(d(y),d(h),d(C),d(P))},i.\u0275cmp=b({type:i,selectors:[["app-all-orders"]],decls:21,vars:6,consts:[["nzTip","Working...",3,"nzSpinning","nzSize"],[3,"nzData","nzPageSize","nzShowPagination"],["basicTable",""],[2,"font-weight","bolder","color","#003973"],[4,"ngFor","ngForOf"],[2,"font-weight","600"]],template:function(e,o){if(e&1&&(n(0,"nz-spin",0)(1,"nz-table",1,2)(3,"thead")(4,"tr")(5,"th",3),m(6,"ID"),r(),n(7,"th",3),m(8,"User Name"),r(),n(9,"th",3),m(10,"Amount"),r(),n(11,"th",3),m(12,"Description"),r(),n(13,"th",3),m(14,"Payment"),r(),n(15,"th",3),m(16,"Adsress"),r(),n(17,"th",3),m(18,"Date"),r()()(),n(19,"tbody"),_(20,Kt,16,10,"tr",4),r()()()),e&2){let u=st(2);l("nzSpinning",o.isSpinning)("nzSize","large"),a(1),l("nzData",o.Orders)("nzPageSize",20)("nzShowPagination","false"),a(19),l("ngForOf",u.data)}},dependencies:[F,E,gt,dt,ct,ht,ut,ft,It]});let s=i;return s})();function Yt(s,i){if(s&1){let p=ot();n(0,"div",6)(1,"div",7)(2,"div",8),c(3,"img",9),r(),n(4,"div",10)(5,"h2",11),m(6),r(),n(7,"p"),m(8),r(),c(9,"hr"),n(10,"h5"),m(11,"Price : "),n(12,"b"),m(13),r(),m(14," - Rating : "),n(15,"b"),m(16),r(),m(17," - Quantity : "),n(18,"b"),m(19),r(),m(20," - Category : "),n(21,"b"),m(22),r()(),c(23,"hr"),n(24,"div",12)(25,"button",13),m(26,"Update"),r(),n(27,"button",14),v("click",function(){let o=nt(p).$implicit,u=at();return rt(u.deleteProduct(o.id))}),m(28,"Delete"),r()()()()()}if(s&2){let p=i.$implicit;a(3),l("src",p.processedImg,X),a(3),yt(" ",p.name,""),a(2),f(p.description),a(5),yt("$",p.price,""),a(3),f(p.rating),a(3),f(p.availableQuantity),a(3),f(p.categoryName),a(3),Dt("routerLink","/admin/product/",p.id,"")}}var Xt=(()=>{let i=class i{constructor(t,e,o){this.adminService=t,this.notification=e,this.fb=o,this.products=[],this.isSpinning=!1,this.size="large"}ngOnInit(){this.validateForm=this.fb.group({title:[null,[g.required]]}),this.getAllProducts()}submitForm(){this.isSpinning=!0,this.products=[],this.adminService.getProductsByTitle(this.validateForm.get(["title"]).value).subscribe(t=>{t.data.forEach(e=>{e.processedImg="data:image/jpeg;base64,"+e.returnedImg,this.products.push(e),this.isSpinning=!1}),console.log(t)})}getAllProducts(){this.isSpinning=!0,this.products=[],this.adminService.getAllProducts().subscribe(t=>{t.data.forEach(e=>{e.processedImg="data:image/jpeg;base64,"+e.returnedImg,this.products.push(e),this.isSpinning=!1}),console.log(t)})}deleteProduct(t){this.adminService.deleteProductById(t).subscribe(e=>{e.status=="OK"?(this.notification.success("SUCCESS","Product Deleted Successfully!!!",{nzDuration:5e3}),this.getAllProducts()):this.notification.error("ERROR",`${e.message}`,{nzDuration:5e3})})}};i.\u0275fac=function(e){return new(e||i)(d(y),d(h),d(C))},i.\u0275cmp=b({type:i,selectors:[["app-dashboard"]],decls:7,vars:4,consts:[["nz-form","",2,"margin-top","20px","text-align","center",3,"formGroup","submit"],["nz-input","","placeholder","Enter Keyword to search","nzSize","large","formControlName","title",2,"width","20%"],["nz-button","","nzType","primary",2,"margin-left","15px",3,"nzSize","disabled"],[2,"background-color","#F8F8F8","min-height","91vh"],[2,"padding-top","10px"],["style","margin-top:10px;","class","child",4,"ngFor","ngForOf"],[1,"child",2,"margin-top","10px"],["nz-row",""],["nz-col","","nzSpan","8"],["alt","profile",1,"profile",2,"height","130px","width","200px","border-radius","10px",3,"src"],["nz-col","","nzSpan","16"],[2,"cursor","pointer","color","#108ee9"],[2,"float","right"],["nzSize","small","nz-button","","nzType","primary",3,"routerLink"],["nzSize","small","nz-button","","nzType","primary","nzDanger","",2,"margin-left","10px",3,"click"]],template:function(e,o){e&1&&(n(0,"form",0),v("submit",function(){return o.submitForm()}),c(1,"input",1),n(2,"button",2),m(3,"Search Product"),r()(),n(4,"div",3),c(5,"div",4),_(6,Yt,29,8,"div",5),r()),e&2&&(l("formGroup",o.validateForm),a(2),l("nzSize",o.size)("disabled",o.validateForm.invalid),a(4),l("ngForOf",o.products))},dependencies:[F,Ut,O,N,D,k,j,V,B,T,w,A,M,U,R],styles:[".child[_ngcontent-%COMP%]{padding:20px;width:780px;background-color:#fff;background:white;box-shadow:1px 1px 15px -7px #0000001a;border-radius:5px;margin-left:auto;margin-right:auto;// padding-bottom: 10px}.row[_ngcontent-%COMP%]{padding:30px;width:780px;background-color:#fff;background:white;// box-shadow: 1px 1px 15px -7px rgba(0,0,0,.1);border-radius:5px;margin-left:auto;margin-right:auto;margin-top:20px}i[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.vertical-center[_ngcontent-%COMP%]{margin:0;position:absolute;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%)}tr[_ngcontent-%COMP%]{padding:0 5px;margin-bottom:0}p[_ngcontent-%COMP%]{margin-bottom:0}hr[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px}h2[_ngcontent-%COMP%]:hover{text-decoration-line:underline}.pagination[_ngcontent-%COMP%]{width:780px;border-radius:5px;margin-left:auto;margin-right:auto;padding-bottom:20px;margin-top:20px}"]});let s=i;return s})();function Zt(s,i){if(s&1&&c(0,"nz-option",25),s&2){let p=i.$implicit;q("nzLabel",p.name),q("nzValue",p.id)}}var qt=(()=>{let i=class i{constructor(t,e,o,u,K){this.fb=t,this.notification=e,this.router=o,this.adminService=u,this.activatedroute=K,this.productId=this.activatedroute.snapshot.params.productId,this.avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEOb9DSnnU_mwSu5HYXuFuUjktAvKecyMrw&usqp=CAU",this.isSpinning=!1,this.imgChanged=!1,this.listOfCategories=[]}ngOnInit(){this.validateForm=this.fb.group({categoryId:[null,[g.required]],name:[null,[g.required]],rating:[null,[g.required]],availableQuantity:[null,[g.required]],description:[null,[g.required]],price:[null,[g.required]]}),this.getProductById(),this.getAllCategories()}getProductById(){this.adminService.getProductById(this.productId).subscribe(t=>{console.log(t);let e=t.data.productDto;this.avatarUrl="data:image/jpeg;base64,"+t.data.productDto.returnedImg,this.validateForm.patchValue(e),this.validateForm.get("categoryId").setValue(e.categoryId.toString())})}getAllCategories(){this.adminService.getAllCategories().subscribe(t=>{this.listOfCategories=t.data,console.log(this.listOfCategories)})}submitForm(){if(console.log(this.validateForm.valid),console.log(this.validateForm),this.validateForm.valid){console.log("In function"),this.isSpinning=!0;let t=new FormData;this.imgChanged&&t.append("img",this.currentFileUpload),t.append("categoryId",this.validateForm.get("categoryId").value),t.append("price",this.validateForm.get("price").value),t.append("name",this.validateForm.get("name").value),t.append("rating",this.validateForm.get("rating").value),t.append("availableQuantity",this.validateForm.get("availableQuantity").value),t.append("description",this.validateForm.get("description").value),console.log(t),this.adminService.updateProduct(this.productId,t).subscribe(e=>{this.isSpinning=!1,e.status=="OK"?(this.notification.success("SUCCESS","Product updated Successfully!!!",{nzDuration:5e3}),this.router.navigateByUrl("/admin/dashboard")):this.notification.error("ERROR",`${e.message}`,{nzDuration:5e3})})}else for(let t in this.validateForm.controls)this.validateForm.controls[t].markAsDirty(),this.validateForm.controls[t].updateValueAndValidity()}uploadProfileImage(t){let e=t.target;if(!e.files?.length)return;let o=e.files[0];this.currentFileUpload=o,alert("File is here : "+this.currentFileUpload)}uploadFile(t){let e=t.target;if(this.myFile=e.files,!!e.files?.length){this.currentFileUpload=e.files[0];var o=new FileReader;o.readAsDataURL(this.currentFileUpload),this.imgChanged=!0,o.onload=u=>{this.avatarUrl=o.result}}}getCaptcha(t){t.preventDefault()}};i.\u0275fac=function(e){return new(e||i)(d(C),d(h),d(P),d(y),d(Tt))},i.\u0275cmp=b({type:i,selectors:[["app-update-product"]],decls:43,vars:15,consts:[[2,"margin-top","50px"],["nzTip","Working...",3,"nzSpinning","nzSize"],[1,"parent"],[1,"child"],["nz-row","",1,"imgDiv"],[2,"margin-left","230px"],["nz-form","",3,"formGroup","ngSubmit"],["nz-row",""],["nz-col","",3,"nzMd","nzSm","nzXs"],[1,"profile-badge"],["alt","profile",1,"profile",3,"src"],["type","file","nz-button","","nzType","primary","id","upload_profile_image","accept","image/x-png,image/gif,image/jpeg",3,"change"],["for","upload_profile_image"],["id","add_img_icon","src","../../../../assets/add_icon.png",1,"upload-icon"],["nz-button","","nzShape","circle"],["nz-col","","nzSpan","24"],["nzHasFeedback","","nzErrorTip","This Input Is Required!",3,"nzXs"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select a Category","formControlName","categoryId"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nz-input","","placeholder","Name","formControlName","name"],["nz-input","","type","text","placeholder","Rating","formControlName","rating"],["nz-input","","type","number","placeholder","Quantity","formControlName","availableQuantity"],["nz-input","","type","number","placeholder","Price","formControlName","price"],["rows","1","nz-input","","placeholder","Description","formControlName","description"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzType"],[3,"nzLabel","nzValue"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"nz-spin",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),m(6,"Update Product"),r()(),n(7,"form",6),v("ngSubmit",function(){return o.submitForm()}),n(8,"div",7)(9,"div",8)(10,"div",9),c(11,"img",10),n(12,"input",11),v("change",function(K){return o.uploadFile(K)}),r(),n(13,"label",12),c(14,"img",13),r(),c(15,"button",14),r()(),n(16,"div",15)(17,"nz-form-item")(18,"nz-form-control",16)(19,"nz-select",17),_(20,Zt,1,2,"nz-option",18),r()()()(),n(21,"div",15)(22,"nz-form-item")(23,"nz-form-control",16),c(24,"input",19),r()()(),n(25,"div",15)(26,"nz-form-item")(27,"nz-form-control",16),c(28,"input",20),r()()(),n(29,"div",15)(30,"nz-form-item")(31,"nz-form-control",16),c(32,"input",21),r()()(),n(33,"div",15)(34,"nz-form-item")(35,"nz-form-control",16),c(36,"input",22),r()()(),n(37,"div",15)(38,"nz-form-item")(39,"nz-form-control",16),c(40,"textarea",23),r()()()(),n(41,"button",24),m(42,"Add"),r()()()()()()),e&2&&(a(1),l("nzSpinning",o.isSpinning)("nzSize","large"),a(6),l("formGroup",o.validateForm),a(2),l("nzMd",24)("nzSm",24)("nzXs",24),a(2),l("src",o.avatarUrl,X),a(7),l("nzXs",24),a(2),l("ngForOf",o.listOfCategories),a(3),l("nzXs",24),a(4),l("nzXs",24),a(4),l("nzXs",24),a(4),l("nzXs",24),a(4),l("nzXs",24),a(2),l("nzType","primary"))},dependencies:[F,O,N,D,k,j,V,G,L,B,mt,pt,E,T,w,lt,A,M,U,R],styles:["[nz-form][_ngcontent-%COMP%]{max-width:800px}.phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}.child[_ngcontent-%COMP%]{padding:50px;position:absolute;width:680px;background-color:#fff;top:45%;left:50%;transform:translate(-50%,-50%);background:white;box-shadow:1px 1px 15px -7px #0000001a;border-radius:5px;margin-bottom:22px}nz-form-control[_ngcontent-%COMP%]{min-width:280px}.parent[_ngcontent-%COMP%]{width:100%;min-height:121vh;position:relative}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{background-color:#001529;border:none}.imgDiv[_ngcontent-%COMP%]{width:100%;// margin-top: -50px;vertical-align:middle}.profile-badge[_ngcontent-%COMP%]{height:180px;display:flex;align-items:center;flex-direction:column;align-items:flex-start;margin:auto}@media only screen and (max-width: 600px){.profile-badge[_ngcontent-%COMP%]{margin-left:0}}.profile[_ngcontent-%COMP%]{height:180px;margin-bottom:5px;object-fit:cover}#upload_profile_image[_ngcontent-%COMP%]{display:none}#add_img_icon[_ngcontent-%COMP%]{width:70px;height:35px;position:relative;left:118px;top:-42px}"]});let s=i;return s})();function Jt(s,i){if(s&1){let p=ot();n(0,"tr")(1,"td",7),m(2),r(),n(3,"td"),m(4),r(),n(5,"td")(6,"button",8),v("click",function(){let o=nt(p).$implicit,u=at();return rt(u.deleteUser(o.id))}),m(7,"Delete"),r()()()}if(s&2){let p=i.$implicit;a(2),f(p.name),a(2),f(p.email)}}var $t=(()=>{let i=class i{constructor(t,e,o){this.adminService=t,this.fb=e,this.notification=o,this.size="large",this.isSpinning=!1}ngOnInit(){this.validateForm=this.fb.group({}),this.getAllUsers()}getAllUsers(){this.adminService.getAllUsers().subscribe(t=>{this.users=t.data,console.log(t)})}deleteUser(t){this.isSpinning=!0,this.adminService.deleteUserById(t).subscribe(e=>{console.log(e),this.isSpinning=!1,e.status=="OK"?(this.getAllUsers(),this.notification.success("SUCCESS","User Deleted successfully!",{nzDuration:5e3})):this.notification.error("ERROR",`${e.message}`,{nzDuration:5e3})},e=>{console.log("errorr",e),e.status==406&&this.notification.error("ERROR",`${e.error}`,{nzDuration:5e3}),this.isSpinning=!1})}};i.\u0275fac=function(e){return new(e||i)(d(y),d(C),d(h))},i.\u0275cmp=b({type:i,selectors:[["app-users"]],decls:13,vars:6,consts:[["nzTip","Working...",3,"nzSpinning","nzSize"],[3,"nzData","nzPageSize","nzShowPagination"],["basicTable",""],["nzWidth","100px",2,"font-weight","bolder","color","#003973"],["nzWidth","300px",2,"font-weight","bolder","color","#003973"],[2,"font-weight","bolder","color","#003973"],[4,"ngFor","ngForOf"],[2,"font-weight","600"],["nzSize","small","nz-button","","nzType","primary","nzDanger","",2,"margin-left","10px",3,"click"]],template:function(e,o){if(e&1&&(n(0,"nz-spin",0)(1,"nz-table",1,2)(3,"thead")(4,"tr")(5,"th",3),m(6,"Name"),r(),n(7,"th",4),m(8,"Email"),r(),n(9,"th",5),m(10,"Action"),r()()(),n(11,"tbody"),_(12,Jt,8,2,"tr",6),r()()()),e&2){let u=st(2);l("nzSpinning",o.isSpinning)("nzSize","large"),a(1),l("nzData",o.users)("nzPageSize",20)("nzShowPagination","false"),a(11),l("ngForOf",u.data)}},dependencies:[F,O,N,D,E,gt,dt,ct,ht,ut,ft]});let s=i;return s})();var te=[{path:"dashboard",component:Xt,canActivate:[H]},{path:"category",component:Vt,canActivate:[H]},{path:"product",component:Bt,canActivate:[H]},{path:"product/:productId",component:qt,canActivate:[H]},{path:"users",component:$t,canActivate:[H]},{path:"orders",component:Ht,canActivate:[H]}],Gt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=it({type:i}),i.\u0275inj=et({imports:[xt.forChild(te),xt]});let s=i;return s})();var Ge=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=it({type:i}),i.\u0275inj=et({imports:[wt,Gt,kt,Rt]});let s=i;return s})();export{Ge as AdminModule};
