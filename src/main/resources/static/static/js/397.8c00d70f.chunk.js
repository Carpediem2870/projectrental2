"use strict";(self.webpackChunkelectro_rent=self.webpackChunkelectro_rent||[]).push([[397],{2511:(n,e,t)=>{t.d(e,{T6:()=>s,aA:()=>a,wN:()=>o});var r=t(5294),i=t(3014);const o=async n=>{let{obj:e}=n;try{const n={headers:{"Content-Type":"multipart/form-data"}},t=await r.Z.post("".concat(i.L,"/api/user/signup"),e,n);if("2"===t.status.toString().charAt(0))return console.log({...t.data}),t.data;alert("\ub370\uc774\ud130 \uc804\uc1a1\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}catch(t){console.log(t)}},s=async(n,e,t)=>{try{const t=await r.Z.post("".concat(i.L,"/api/user/check"),n);"2"===t.status.toString().charAt(0)?(console.log({...t.data}),e(t.data)):alert("\ub370\uc774\ud130 \uc804\uc1a1\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}catch(o){t()}},a=async(n,e,t)=>{try{const t=await r.Z.post("".concat(i.L,"/api/user/check"),n);"2"===t.status.toString().charAt(0)?(console.log({...t.data}),e(t.data)):alert("\ub370\uc774\ud130 \uc804\uc1a1\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}catch(o){t()}}},41:(n,e,t)=>{t.d(e,{u:()=>i});var r=t(184);const i=n=>{let{children:e,handleClose:t}=n;return(0,r.jsx)("div",{style:o,children:(0,r.jsxs)("div",{style:s,children:[(0,r.jsx)("span",{style:a,onClick:t,children:"\xd7"}),e]})})},o={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#fefefe",padding:"30px",width:"600px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},s={position:"relative"},a={position:"absolute",top:"-28px",right:"-27px",fontSize:"25px",cursor:"pointer",zIndex:"1"}},2441:(n,e,t)=>{t.d(e,{Z:()=>d,v:()=>l});var r,i,o=t(168),s=t(643),a=(t(2791),t(184));const l=s.Z.div(r||(r=(0,o.Z)(["\nposition: fixed;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\nbackground: rgba(0, 0, 0, 0.5);\nz-index: 999;\n"]))),d=n=>{let{txt:e,onConfirm:t}=n;const r=s.Z.div(i||(i=(0,o.Z)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1000;\n\n    width: 300px;\n    height: 180px;\n    display: flex;\n\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n\n    border-radius: 10px;\n    border: 1px solid #2c39b5;\n    background: #fff;\n    b {\n      color: #000;\n      text-align: center;\n      font-size: 20px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: normal;\n    }\n    button {\n      width: 100px;\n      height: 50px;\n      border-radius: 5px;\n      border: none;\n      background: #2c39b5;\n      cursor: pointer;\n      color: #fff;\n      font-size: 20px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: normal;\n    }\n  "])));return(0,a.jsxs)(r,{children:[(0,a.jsx)("b",{children:e}),(0,a.jsx)("button",{onClick:t,children:"\ud655\uc778"})]})}},2397:(n,e,t)=>{t.r(e),t.d(e,{default:()=>u});var r=t(2791),i=t(6326),o=t(3767),s=t(9008),a=t(217),l=t(7689),d=t(41),c=t(8007),p=t(4695),h=t(1134),x=t(2441),g=t(2511),m=t(184);const u=()=>{var n,e,t,u,f,j;const[b,y]=(0,r.useState)(!1),[Z,v]=(0,r.useState)(!1),[w,k]=(0,r.useState)(!1),[S,C]=(0,r.useState)(!1),L=()=>{y(!0),v(!0)},z=()=>{k(!0)},[_,U]=(0,r.useState)(!1),[F,N]=(0,r.useState)(!1),[I,H]=(0,r.useState)(!1),[M,V]=(0,r.useState)(!1),T=()=>{U(!0),N(!0)},q=()=>{H(!0)},[O,P]=(0,r.useState)("".concat("","/images/join/join_img.svg")),[Y,A]=(0,r.useState)(null),[E,B]=(0,r.useState)(!1),[D,R]=(0,r.useState)(!1),[X,J]=(0,r.useState)(!1),K=c.Ry().shape({nickname:c.Z_().max(20,"20\uc790\uae4c\uc9c0\ub9cc \uc785\ub825\ud558\uc138\uc694 ").required("\ub2c9\ub124\uc784\uc740 \ud544\uc218 \uc785\ub825 \uc0ac\ud56d\uc785\ub2c8\ub2e4."),userId:c.Z_().min(4,"4\uc790 \uc774\uc0c1 \uc785\ub825\ud558\uc138\uc694.").max(15,"15\uc790\uae4c\uc9c0\ub9cc \uc785\ub825\ud558\uc138\uc694 ").required("\uc544\uc774\ub514\ub294 \ud544\uc218 \uc785\ub825 \uc0ac\ud56d\uc785\ub2c8\ub2e4."),password:c.Z_().required("\ube44\ubc00\ubc88\ud638\ub294 \ud544\uc218 \uc785\ub825 \uc0ac\ud56d\uc785\ub2c8\ub2e4.").min(8,"8\uc790 \uc774\uc0c1 \uc785\ub825\ud558\uc138\uc694.").max(20,"20\uc790\uae4c\uc9c0\ub9cc \uc785\ub825\ud558\uc138\uc694 "),confirmPassword:c.Z_().oneOf([c.iH("password"),null],"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.").required("\ube44\ubc00\ubc88\ud638 \ud655\uc778\uc740 \ud544\uc218 \uc785\ub825 \uc0ac\ud56d\uc785\ub2c8\ub2e4."),phoneNumber:c.Z_().matches(/^(\d{3})-(\d{4})-(\d{4})$/,"\uc804\ud654\ubc88\ud638\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.").required("\ud734\ub300\ud3f0 \ubc88\ud638\ub294 \ud544\uc218 \uc785\ub825 \uc0ac\ud56d\uc785\ub2c8\ub2e4."),email:c.Z_().email("\uc774\uba54\uc77c \ud615\uc2dd\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.").required("\uc774\uba54\uc77c\uc740 \ud544\uc218 \uc785\ub825 \uc0ac\ud56d\uc785\ub2c8\ub2e4.").max(30,"30\uc790\uae4c\uc9c0\ub9cc \uc785\ub825\ud558\uc138\uc694 ")}),{register:W,handleSubmit:$,formState:G,watch:Q}=(0,h.cI)({resolver:(0,p.X)(K),mode:"onChange"}),[nn,en]=(0,r.useState)(""),tn=Q("nickname"),rn=Q("userId"),on=Q("password"),sn=Q("phoneNumber"),[an,ln]=(0,r.useState)(""),[dn,cn]=(0,r.useState)(""),pn=Q("email"),[hn,xn]=(0,r.useState)(!1),gn=()=>{xn(!1)},[mn,un]=(0,r.useState)(!1),fn=(0,l.s0)();return(0,m.jsxs)(i.Z,{children:[Z&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z,{txt:"\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ub2c9\ub124\uc784\uc785\ub2c8\ub2e4.",onConfirm:()=>{v(!1)}}),(0,m.jsx)(x.v,{})]}),w&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z,{txt:"\uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \ub2c9\ub124\uc784\uc785\ub2c8\ub2e4.",onConfirm:()=>{k(!1)}}),(0,m.jsx)(x.v,{})]}),S&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z,{txt:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",onConfirm:()=>{C(!1)}}),(0,m.jsx)(x.v,{})]}),F&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z,{txt:"\uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc544\uc774\ub514\uc785\ub2c8\ub2e4.",onConfirm:()=>{N(!1)}}),(0,m.jsx)(x.v,{})]}),I&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z,{txt:"\uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc544\uc774\ub514\uc785\ub2c8\ub2e4.",onConfirm:()=>{H(!1)}}),(0,m.jsx)(x.v,{})]}),M&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z,{txt:"4\uae00\uc790 \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694.",onConfirm:()=>{V(!1)}}),(0,m.jsx)(x.v,{})]}),hn&&(0,m.jsxs)(m.Fragment,{children:[G.errors.phoneNumber||""===sn?(0,m.jsx)(x.Z,{txt:"\ud734\ub300\ud3f0 \uc778\uc99d\uc5d0 \uc2e4\ud328\ud558\uc168\uc2b5\ub2c8\ub2e4.",onConfirm:gn}):(0,m.jsx)(x.Z,{txt:"\ud734\ub300\ud3f0 \uc778\uc99d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",onConfirm:gn}),(0,m.jsx)(x.v,{})]}),X&&(0,m.jsx)(d.u,{handleClose:()=>{J(!1)},children:(0,m.jsx)(o.ZP,{onComplete:n=>{const e=n.address;ln(e),J(!1),console.log(an)},autoClose:!1})}),(0,m.jsxs)(s.fx,{children:[(0,m.jsxs)(a.EL,{children:[(0,m.jsx)("p",{children:"\ud68c\uc6d0\uac00\uc785"}),(0,m.jsx)("img",{src:"/images/join/join_step2.svg"})]}),(0,m.jsxs)(s.ve,{onSubmit:$((async()=>{const n=new FormData,e=new Blob([JSON.stringify({nick:tn,uid:rn,upw:on,phone:sn,addr:an,restAddr:dn,email:pn,isValid:2})],{type:"application/json"});if(n.append("dto",e),Y){console.log(Y);const e=await fetch(O),t=await e.blob(),r=new Date,i=Math.floor(r.getTime()/1e3),o=new File([t],"image".concat(i,".jpg"),{type:"image/jpeg"});n.append("pic",o)}try{(0,g.wN)({obj:n}),fn("/join/3?nick=".concat(tn))}catch(t){console.log(t)}})),children:[(0,m.jsxs)(s.SL,{children:[(0,m.jsxs)(s.rs,{children:[(0,m.jsx)("p",{children:"\uc0ac\uc9c4"}),(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)(s.ay,{children:[(0,m.jsxs)(s.MY,{children:[(0,m.jsx)("label",{htmlFor:"img",children:(0,m.jsx)(s.ft,{type:"button",onClick:()=>{document.getElementById("img").click()},children:(0,m.jsx)("img",{src:O,alt:""})})}),(0,m.jsx)("input",{type:"file",...W("photo"),accept:"image/png, image/gif, image/jpeg",onClick:()=>{document.getElementById("img").click()},onChange:n=>{(n=>{const e=n.target.files[0];if(e){const n=URL.createObjectURL(e);P(n),A(e)}})(n)},id:"img",style:{display:"none"}})]})," ",null===Y&&mn?(0,m.jsx)(s.ZZ,{children:"\uc0ac\uc9c4\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."}):""]})]}),(0,m.jsxs)(s.SL,{children:[(0,m.jsxs)(s.rs,{children:[(0,m.jsx)("p",{children:"\ub2c9\ub124\uc784"}),(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)(s.ay,{children:[(0,m.jsxs)(s.MY,{width:"440px",children:[(0,m.jsx)("input",{type:"text",maxLength:20,placeholder:"20\uc790 \uc774\ub0b4",name:"nickname",...W("nickname")}),tn?(0,m.jsx)(s.Hg,{onClick:n=>{n.preventDefault(),(()=>{const n={div:1,uid:"userId123",nick:tn};(0,g.T6)(n,L,z)})()},type:"button",children:"\uc911\ubcf5 \ud655\uc778"}):(0,m.jsx)(s.Hg,{onClick:()=>{C(!0)},type:"button",children:"\uc911\ubcf5 \ud655\uc778"})]}),mn&&G.errors.nickname&&(0,m.jsx)(s.ZZ,{children:null===(n=G.errors.nickname)||void 0===n?void 0:n.message}),mn&&!b&&!G.errors.nickname&&(0,m.jsx)(s.ZZ,{children:"\ub2c9\ub124\uc784 \uc911\ubcf5 \ud655\uc778\uc744 \ud574\uc8fc\uc138\uc694."})]})]}),(0,m.jsxs)(s.SL,{children:[(0,m.jsxs)(s.rs,{children:[(0,m.jsx)("p",{children:"\uc544\uc774\ub514"}),(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)(s.ay,{children:[(0,m.jsxs)(s.MY,{width:"440px",children:[(0,m.jsx)("input",{type:"text",minLength:4,maxLength:15,placeholder:"4~15\uc790 \uc774\ub0b4",name:"userId",...W("userId")}),!rn||rn.length<4?(0,m.jsx)(s.Hg,{onClick:()=>{V(!0)},type:"button",children:"\uc911\ubcf5\ud655\uc778"}):(0,m.jsx)(s.Hg,{onClick:n=>{n.preventDefault(),(()=>{const n={div:2,uid:rn,nick:"nickname"};(0,g.aA)(n,T,q)})()},type:"button",children:"\uc911\ubcf5 \ud655\uc778"})]}),(0,m.jsx)(s.ZZ,{children:null===(e=G.errors.userId)||void 0===e?void 0:e.message}),mn&&!_&&!G.errors.userId&&(0,m.jsx)(s.ZZ,{children:"\uc544\uc774\ub514 \uc911\ubcf5 \ud655\uc778\uc744 \ud574\uc8fc\uc138\uc694."})]})]}),(0,m.jsxs)(s.SL,{children:[(0,m.jsxs)(s.rs,{children:[(0,m.jsx)("p",{children:"\ube44\ubc00\ubc88\ud638"}),(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)(s.ay,{children:[(0,m.jsxs)(s.MY,{children:[(0,m.jsx)("input",{type:E?"text":"password",minLength:8,maxLength:20,placeholder:"\ud2b9\uc218\ubb38\uc790 \ud3ec\ud568 8~20\uc790 \uc774\ub0b4",name:"password",...W("password")}),(0,m.jsx)(s.lF,{type:"button",onClick:()=>{B((n=>!n))},children:E?(0,m.jsx)(s.UT,{src:"/images/join/eye_open.png"}):(0,m.jsx)(s.UT,{src:"/images/join/eye_close.png"})})]}),(0,m.jsx)(s.ZZ,{children:null===(t=G.errors.password)||void 0===t?void 0:t.message})]})]}),(0,m.jsxs)(s.SL,{children:[(0,m.jsxs)(s.rs,{children:[(0,m.jsx)("p",{children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)(s.ay,{children:[(0,m.jsxs)(s.MY,{children:[(0,m.jsx)("input",{type:D?"text":"password",minLength:8,maxLength:20,placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",name:"confirmPassword",...W("confirmPassword")}),(0,m.jsx)(s.lF,{type:"button",onClick:()=>{R((n=>!n))},children:D?(0,m.jsx)(s.UT,{src:"/images/join/eye_open.png"}):(0,m.jsx)(s.UT,{src:"/images/join/eye_close.png"})})]}),(0,m.jsx)(s.ZZ,{children:null===(u=G.errors.confirmPassword)||void 0===u?void 0:u.message})]})]}),(0,m.jsxs)(s.SL,{children:[(0,m.jsxs)(s.rs,{children:[(0,m.jsx)("p",{children:"\ud734\ub300\ud3f0 \ubc88\ud638"}),(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)(s.ay,{children:[(0,m.jsxs)(s.MY,{width:"440px",children:[(0,m.jsx)("input",{type:"text",placeholder:"\uc608) 010-0000-0000",name:"phoneNumber",...W("phoneNumber")}),(0,m.jsx)(s.Hg,{onClick:()=>{xn(!0)},type:"button",children:"\ud734\ub300\ud3f0 \uc778\uc99d"})]}),(0,m.jsx)(s.ZZ,{children:null===(f=G.errors.phoneNumber)||void 0===f?void 0:f.message})]})]}),(0,m.jsxs)(s.SL,{children:[(0,m.jsxs)(s.rs,{children:[(0,m.jsx)("p",{children:"\uc8fc\uc18c"}),(0,m.jsx)("span",{children:"*"})]}),(0,m.jsx)(s.ay,{children:(0,m.jsxs)(s.sp,{children:[(0,m.jsx)("input",{type:"text",value:an,placeholder:"\uc8fc\uc18c\ub97c \uac80\uc0c9\ud574\uc8fc\uc138\uc694.",onClick:()=>{J(!0)},readOnly:!0,name:"address",onChange:n=>{ln(n.target.value)}}),mn&&""===an&&(0,m.jsx)(s.ZZ,{children:"\uc8fc\uc18c\ub97c \uac80\uc0c9\ud574\uc8fc\uc138\uc694."}),(0,m.jsx)("input",{type:"text",value:dn,placeholder:"\uc0c1\uc138 \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"restAddress",onChange:n=>{cn(n.target.value)}}),mn&&""===dn&&(0,m.jsx)(s.ZZ,{children:"\uc0c1\uc138 \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})})]}),(0,m.jsxs)(s.SL,{children:[(0,m.jsxs)(s.rs,{children:[(0,m.jsx)("p",{children:"\uc774\uba54\uc77c"}),(0,m.jsx)("span",{children:"*"})]}),(0,m.jsxs)(s.ay,{children:[(0,m.jsx)(s.MY,{children:(0,m.jsx)("input",{type:"email",maxLength:30,placeholder:"\uc608) a123@naver.com",name:"email",...W("email")})}),mn&&G.errors.email&&(0,m.jsx)(s.ZZ,{children:null===(j=G.errors.email)||void 0===j?void 0:j.message})]})]}),(0,m.jsxs)(s._q,{mgtop:"90px",mgbtm:"0px",children:[(0,m.jsx)(s.ty,{onClick:()=>{fn("/login")},children:"\ucde8\uc18c"}),G.isValid&&null!==Y&&an&&dn&&b&&_?(0,m.jsx)(s.c0,{type:"submit",children:"\uc800\uc7a5"}):(0,m.jsx)(s.c0,{onClick:n=>{un(!0)},children:"\uc800\uc7a5"})]})]})]})]})}},217:(n,e,t)=>{t.d(e,{EL:()=>h,Hg:()=>u,VU:()=>g,X:()=>m,po:()=>p,uB:()=>x});var r,i,o,s,a,l,d=t(168),c=t(643);const p=c.Z.div(r||(r=(0,d.Z)(["\n  width: 1300px;\n  text-align: center;\n  margin: 0 auto;\n  /* background: skyblue; */\n"]))),h=c.Z.div(i||(i=(0,d.Z)(["\n  margin-top: ",";\n  text-align: center;\n  p {\n    color: #000;\n    font-size: 23px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n\n    margin-bottom: ",";\n  }\n  img {\n    width: 550px;\n    height: 63px;\n    margin-bottom: 70px;\n  }\n"])),(n=>n.mgtop?n.mgtop:"0px"),(n=>n.mgbtm?n.mgbtm:"60px")),x=c.Z.div(o||(o=(0,d.Z)(["\n  width: 980px;\n  /* text-align: center; */\n  margin: 0 auto;\n"]))),g=c.Z.div(s||(s=(0,d.Z)(["\n  width: 980px;\n  padding: 25px;\n  border-radius: 10px;\n  border: 1px solid #2c39b5;\n  margin: 0 auto;\n  h1 {\n    color: #777;\n    font-size: 22px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n\n    text-align: start;\n  }\n  h2 {\n    color: #777;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n\n    text-align: start;\n  }\n"]))),m=c.Z.div(a||(a=(0,d.Z)(['\n  text-align: start;\n  padding: 15px 0;\n\n  color: #777;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  input[type="radio"] {\n    width: 17px;\n    height: 17px;\n    margin-right: 10px;\n    cursor: pointer;\n  }\n  input[type="radio"] + label {\n    margin-right: 25px;\n    cursor: pointer;\n  }\n  input[type="radio"]:checked + label {\n    color: #000;\n  }\n']))),u=c.Z.button(l||(l=(0,d.Z)(["\n  width: 200px;\n  height: 50px;\n  border-radius: 10px;\n  background: #2c39b5;\n  margin: 100px auto;\n  border: none;\n  cursor: pointer;\n\n  color: #fff;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n"])))},9008:(n,e,t)=>{t.d(e,{Hg:()=>F,MY:()=>S,SL:()=>v,UT:()=>U,ZZ:()=>C,_q:()=>N,ay:()=>k,c0:()=>H,ft:()=>L,fx:()=>y,lF:()=>_,rs:()=>w,sp:()=>z,ty:()=>I,ve:()=>Z});var r,i,o,s,a,l,d,c,p,h,x,g,m,u,f,j=t(168),b=t(643);const y=b.Z.div(r||(r=(0,j.Z)(["\n  width: 1300px;\n  text-align: center;\n  margin: 0 auto;\n  /* background: skyblue; */\n"]))),Z=b.Z.form(i||(i=(0,j.Z)(["\n  width: 980px;\n  /* height: 700px; */\n  border-radius: 10px;\n  border: 1px solid #2c39b5;\n  margin: ",";\n  padding: 60px 90px;\n"])),(n=>n.margin?n.margin:"0 auto 100px")),v=b.Z.div(o||(o=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n  margin-bottom: 3px;\n"]))),w=b.Z.div(s||(s=(0,j.Z)(["\n  display: flex;\n  p {\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n  span {\n    color: #ff0303;\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n"]))),k=b.Z.div(a||(a=(0,j.Z)(["\n  display: block;\n  text-align: start;\n"]))),S=b.Z.div(l||(l=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 600px;\n  /* background: pink; */\n  img {\n    width: 180px;\n    height: 180px;\n    border-radius: 5px;\n    border: 1px solid #2c39b5;\n  }\n  input {\n    border-radius: 5px;\n    border: 1px solid #2c39b5;\n\n    width: ",";\n    height: 36px;\n    padding-left: 15px;\n\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n  div {\n    border-radius: 5px;\n    border: 1px solid #2c39b5;\n\n    width: ",";\n    height: 36px;\n    padding-left: 15px;\n\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: ",';\n  }\n  /* input[type="file"] {\n    width: 180px;\n    height: 180px;\n  } */\n  /* input[type="text"] {\n    width: ',";\n    height: 36px;\n    padding-left: 15px;\n\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  } */\n"])),(n=>n.width?n.width:"600px"),(n=>n.width?n.width:"600px"),(n=>n.lineHight?n.lineHight:"normal"),(n=>n.width?n.width:"600px")),C=b.Z.div(d||(d=(0,j.Z)(["\n  color: red;\n  font-size: 15px;\n"]))),L=b.Z.button(c||(c=(0,j.Z)(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n"]))),z=b.Z.div(p||(p=(0,j.Z)(["\n  display: block;\n  width: 600px;\n  text-align: start;\n  input {\n    border-radius: 5px;\n    border: 1px solid #2c39b5;\n    width: 600px;\n    height: 36px;\n    padding-left: 15px;\n    margin-top: 10px;\n\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n"]))),_=b.Z.button(h||(h=(0,j.Z)(["\nbackground: transparent;\nborder: none;\nwidth: 0px;\nheight: 0px;\n"]))),U=b.Z.img(x||(x=(0,j.Z)(["\n  width: 20px !important;\n  height: 20px !important;\n  border: none !important;\n  transform: translate(-150%, 40%);\n  cursor: pointer;\n"]))),F=b.Z.button(g||(g=(0,j.Z)(["\n  width: 105px;\n  height: 36px;\n  border-radius: 5px;\n  border: 1px solid #2c39b5;\n  background: #2c39b5;\n  cursor: pointer;\n\n  color: #fff;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n"]))),N=b.Z.div(m||(m=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  width: ",";\n  margin-top: ",";\n  margin-bottom: ",";\n"])),(n=>n.width?n.width:""),(n=>n.mgtop?n.mgtop:"60px"),(n=>n.mgbtm?n.mgbtm:"90px")),I=b.Z.button(u||(u=(0,j.Z)(["\n  width: 150px;\n  height: 50px;\n  border-radius: 10px;\n  background: #f2f2ff;\n  border: none;\n  cursor: pointer;\n\n  color: #2c39b5;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n"]))),H=(0,b.Z)(I)(f||(f=(0,j.Z)(["\n  background: #2c39b5;\n  color: #fff;\n  cursor: pointer;\n"])))},4695:(n,e,t)=>{t.d(e,{X:()=>l});var r=t(1134),i=function(n,e,t){if(n&&"reportValidity"in n){var i=(0,r.U2)(t,e);n.setCustomValidity(i&&i.message||""),n.reportValidity()}},o=function(n,e){var t=function(t){var r=e.fields[t];r&&r.ref&&"reportValidity"in r.ref?i(r.ref,t,n):r.refs&&r.refs.forEach((function(e){return i(e,t,n)}))};for(var r in e.fields)t(r)},s=function(n,e){e.shouldUseNativeValidation&&o(n,e);var t={};for(var i in n){var s=(0,r.U2)(e.fields,i),l=Object.assign(n[i]||{},{ref:s&&s.ref});if(a(e.names||Object.keys(n),i)){var d=Object.assign({},(0,r.U2)(t,i));(0,r.t8)(d,"root",l),(0,r.t8)(t,i,d)}else(0,r.t8)(t,i,l)}return t},a=function(n,e){return n.some((function(n){return n.startsWith(e+".")}))};function l(n,e,t){return void 0===e&&(e={}),void 0===t&&(t={}),function(i,a,l){try{return Promise.resolve(function(r,s){try{var d=(e.context,Promise.resolve(n["sync"===t.mode?"validateSync":"validate"](i,Object.assign({abortEarly:!1},e,{context:a}))).then((function(n){return l.shouldUseNativeValidation&&o({},l),{values:t.raw?i:n,errors:{}}})))}catch(c){return s(c)}return d&&d.then?d.then(void 0,s):d}(0,(function(n){if(!n.inner)throw n;return{values:{},errors:s((e=n,t=!l.shouldUseNativeValidation&&"all"===l.criteriaMode,(e.inner||[]).reduce((function(n,e){if(n[e.path]||(n[e.path]={message:e.message,type:e.type}),t){var i=n[e.path].types,o=i&&i[e.type];n[e.path]=(0,r.KN)(e.path,t,n,e.type,o?[].concat(o,e.message):e.message)}return n}),{})),l)};var e,t})))}catch(d){return Promise.reject(d)}}}}}]);
//# sourceMappingURL=397.8c00d70f.chunk.js.map