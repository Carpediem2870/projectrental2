"use strict";(self.webpackChunkelectro_rent=self.webpackChunkelectro_rent||[]).push([[883],{8915:(n,e,i)=>{i.d(e,{K:()=>k});i(2791);var t,r,o,l,d,s,c,p,x=i(168),h=i(643),a=i(7714);const u=h.Z.div(t||(t=(0,x.Z)(["\n  z-index: 3;\n  position: fixed;\n  top: 300px;\n  right: 50px;\n"]))),m=h.Z.div(r||(r=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 70px;\n  height: 440px;\n  background-color: #eeeef1;\n  border-radius: 30px;\n"]))),g=h.Z.div(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  padding: 10px;\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    p {\n      padding-top: 3px;\n      font-size: 1.4rem;\n      color: ",";\n    }\n  }\n"])),a.G.color.p300),j=h.Z.button(l||(l=(0,x.Z)(['\n  width: 40px;\n  height: 40px;\n\n  background: url("../images/main/plus.svg");\n\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n']))),b=h.Z.button(d||(d=(0,x.Z)(['\n  width: 40px;\n  height: 40px;\n\n  background: url("../images/main/chat.svg") center;\n\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n']))),f=h.Z.button(s||(s=(0,x.Z)(['\n  width: 40px;\n  height: 40px;\n\n  background: url("../images/main/heart.svg");\n\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n']))),y=h.Z.button(c||(c=(0,x.Z)(['\n  width: 40px;\n  height: 40px;\n\n  background: url("../images/main/profile.svg");\n\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n']))),Z=h.Z.button(p||(p=(0,x.Z)(['\n  width: 40px;\n  height: 40px;\n\n  background: url("../images/main/phone.svg");\n\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n'])));var v=i(1087),w=i(184);const k=n=>{let{setSelectedItem:e,setActiveBtn:i}=n;const t=n=>{e&&i&&(e(n),i(n)),sessionStorage.setItem("selectedItem",n)};return(0,w.jsx)(u,{children:(0,w.jsx)(m,{children:(0,w.jsxs)(g,{children:[(0,w.jsx)(v.rU,{to:"/write",children:(0,w.jsxs)("div",{children:[(0,w.jsx)(j,{}),(0,w.jsx)("p",{children:"\ub4f1\ub85d"})]})}),(0,w.jsx)(v.rU,{to:"/",children:(0,w.jsxs)("div",{children:[(0,w.jsx)(b,{}),(0,w.jsx)("p",{children:"\ucc44\ud305"})]})}),(0,w.jsx)(v.rU,{to:"/my?interest",onClick:()=>{t("\uad00\uc2ec \ubaa9\ub85d")},children:(0,w.jsxs)("div",{children:[(0,w.jsx)(f,{}),(0,w.jsx)("p",{children:"\uad00\uc2ec"})]})}),(0,w.jsx)(v.rU,{to:"/my",onClick:()=>{t("\ub300\uc5ec\uc911")},children:(0,w.jsxs)("div",{children:[(0,w.jsx)(y,{}),(0,w.jsx)("p",{children:"MY"})]})}),(0,w.jsx)(v.rU,{to:"/customer",children:(0,w.jsxs)("div",{children:[(0,w.jsx)(Z,{}),(0,w.jsx)("p",{children:"\uace0\uac1d\uc13c\ud130"})]})})]})})})}},41:(n,e,i)=>{i.d(e,{u:()=>r});var t=i(184);const r=n=>{let{children:e,handleClose:i}=n;return(0,t.jsx)("div",{style:o,children:(0,t.jsxs)("div",{style:l,children:[(0,t.jsx)("span",{style:d,onClick:i,children:"\xd7"}),e]})})},o={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#fefefe",padding:"30px",width:"600px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},l={position:"relative"},d={position:"absolute",top:"-28px",right:"-27px",fontSize:"25px",cursor:"pointer",zIndex:"1"}},5619:(n,e,i)=>{i.d(e,{Z:()=>c});var t=i(2791),r=i(6232),o=i(9168),l=i(9516),d=i(4043),s=i(184);const c=n=>{let{onDateSelect:e}=n;const[i,c]=(0,t.useState)([]),p=(0,t.useRef)(null);return(0,t.useEffect)((()=>{const n=()=>{};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}}),[]),(0,s.jsx)("div",{ref:p,style:{position:"relative",overflow:"hidden"},children:(0,s.jsx)(r.Z.RangePicker,{onChange:n=>{var i,t;c(n);const r=null===(i=n[0])||void 0===i?void 0:i.format("YYYY-MM-DD"),o=null===(t=n[1])||void 0===t?void 0:t.format("YYYY-MM-DD");e(r,o)},value:i,style:{width:"480px",height:"53.715px",borderRadius:"10px",border:"1px solid #2C39B5",flexShrink:0,marginBottom:"40px"},placeholder:["\uc2dc\uc791\uc77c","\uc885\ub8cc\uc77c"],suffixIcon:(0,s.jsx)(o.Z,{style:{color:"#2C39B5"}}),popupStyle:{marginLeft:"-150px"},getCalendarContainer:()=>p.current,format:"YYYY\ub144-MM\uc6d4-DD\uc77c",locale:d.Z,separator:(0,s.jsx)("span",{style:{color:"#2C39B5",marginLeft:"5px"},children:(0,s.jsx)(l.Z,{style:{fontSize:"18px"}})})})})}},5690:(n,e,i)=>{i.d(e,{Z:()=>c});var t,r=i(168),o=i(643),l=(i(2791),i(7714)),d=i(184);const s=o.Z.div(t||(t=(0,r.Z)(["\n  width: 1260px;\n  padding-bottom: 1.7rem;\n  border-bottom: 1px solid ",";\n  margin-bottom: 3.3rem;\n  h1 {\n    font-size: 2.4rem;\n    font-weight: 400;\n  }\n"])),l.G.color.primary),c=n=>(0,d.jsx)(s,{children:(0,d.jsx)("h1",{children:n.title})})},5883:(n,e,i)=>{i.r(e),i.d(e,{default:()=>b});var t=i(2791),r=i(9740),o=i(8915),l=i(5690),d=i(1134),s=i(9438),c=i(9008),p=i(41),x=i(3767),h=i(5619),a=i(3966),u=i(8007),m=i(184);const g={usegoods:"\uc81c\ubaa9",contents:""},j=(u.Ry({usegoods:u.Z_("\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.").required("\ube44\ubc00\ubc88\ud638\ub294 \ud544\uc218\uc785\ub2c8\ub2e4.").min(4,"4\uc790 \uc774\uc0c1 \uc785\ub825\ud558\uc138\uc694.").max(16,"16\uc790\uae4c\uc9c0\ub9cc \uc785\ub825\ud558\uc138\uc694 "),contents:u.Z_("\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.").required("\uba54\ubaa8 \ud544\uc218\uc785\ub2c8\ub2e4.")}),[["\uc2a4\ub9c8\ud2b8\uc6cc\uce58","\ud0dc\ube14\ub9bf","\uac24\ub7ed\uc2dc","\uc544\uc774\ud3f0"],["\ub178\ud2b8\ubd81","PC","\ub9c8\uc6b0\uc2a4","\ud0a4\ubcf4\ub4dc"],["\ube54\ud504\ub85c\uc81d\ud130","\uc14b\ud1b1\ubc15\uc2a4","\uce74\uba54\ub77c","\ucea0\ucf54\ub354","DSLR"],["\uc2a4\ud53c\ucee4","\uc774\uc5b4\ud3f0","\ud5e4\ub4dc\ud3f0","\ub9c8\uc774\ud06c"],["\ud50c\ub808\uc774\uc2a4\ud14c\uc774\uc158","\ub2cc\ud150\ub3c4","Wii","XBOX","\uae30\ud0c0"]]),b=()=>{const[n,e]=(0,t.useState)(j),[i,u]=(0,t.useState)(0),[b,f]=(0,t.useState)([0,1,2,3,4]),[y,Z]=(0,t.useState)([]);(0,t.useEffect)((()=>{Z(n[i])}),[i]);const[v,w]=(0,t.useState)([]),[k,C]=(0,t.useState)("".concat("","/images/join/join_img.svg")),[S,z]=(0,t.useState)(0),[D,F]=(0,t.useState)(null);(0,t.useEffect)((()=>{console.log(v)}),[v]);const M=n=>{u(n),f(null)},{register:Y,handleSubmit:G}=(0,d.cI)({defaultValues:g}),[B,q]=(0,t.useState)(""),[I,E]=(0,t.useState)(!1);return(0,m.jsxs)(r.Z,{children:[(0,m.jsx)(o.K,{}),(0,m.jsxs)(a.qt,{children:[(0,m.jsx)("div",{children:(0,m.jsx)(l.Z,{title:"\uae30\ubcf8 \uc815\ubcf4"})}),(0,m.jsx)("div",{children:(0,m.jsxs)("form",{onSubmit:G((n=>{console.log(n)})),children:[(0,m.jsxs)(a.DM,{children:[(0,m.jsxs)("label",{htmlFor:"img",children:[(0,m.jsx)("p",{children:"\uc0ac\uc9c4"})," ",(0,m.jsx)("p",{children:"*"})," ",(0,m.jsxs)("span",{children:["(",v.length,"/10)"]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(a.Kn,{type:"button",onClick:()=>{document.getElementById("img").click()},children:(0,m.jsx)("img",{src:k,alt:""})}),(0,m.jsx)("input",{type:"file",accept:"image/png, image/gif, image/jpeg",onClick:()=>{document.getElementById("img").click()},onChange:n=>{(n=>{const e=n.target.files[0];if(e&&v.length<10){const n=URL.createObjectURL(e);F(e),w((e=>[...e,n])),z((n=>n+1))}})(n)},id:"img",style:{display:"none"}})]}),(0,m.jsx)(a.X9,{children:v.map(((n,e)=>(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:n,alt:""})},e)))})]}),(0,m.jsxs)(a.DM,{children:[(0,m.jsxs)("label",{htmlFor:"product",children:[(0,m.jsx)("p",{children:"\uc0c1\ud488\uba85"})," ",(0,m.jsx)("p",{children:"*"})]}),(0,m.jsx)("div",{children:(0,m.jsx)("input",{type:"text",id:"product",placeholder:"\uc0c1\ud488\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",...Y("usegoods")})})]}),(0,m.jsxs)(a.DM,{children:[(0,m.jsxs)("label",{children:[(0,m.jsx)("p",{children:"\uce74\ud14c\uace0\ub9ac"})," ",(0,m.jsx)("p",{children:"*"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(a.qp,{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(a.m0,{type:"button",clickbtn:0===i,onClick:()=>{M(0)},children:"\uc2a4\ub9c8\ud2b8\uae30\uae30"})}),(0,m.jsx)("li",{children:(0,m.jsx)(a.m0,{type:"button",clickbtn:1===i,onClick:()=>{M(1)},children:"pc/\ub178\ud2b8\ubd81"})}),(0,m.jsx)("li",{children:(0,m.jsx)(a.m0,{type:"button",clickbtn:2===i,onClick:()=>{M(2)},children:"\uc601\uc0c1\uce74\uba54\ub77c"})}),(0,m.jsx)("li",{children:(0,m.jsx)(a.m0,{type:"button",clickbtn:3===i,onClick:()=>{M(3)},children:"\uc74c\ud5a5"})}),(0,m.jsx)("li",{children:(0,m.jsx)(a.m0,{type:"button",clickbtn:4===i,onClick:()=>{M(4)},children:"\uac8c\uc784 \uae30\uae30"})})]})}),(0,m.jsx)(a.qp,{children:(0,m.jsx)("ul",{children:y.map(((n,e)=>(0,m.jsx)("li",{children:(0,m.jsx)(a.Q8,{type:"button",clickbtn:b===n,onClick:()=>{(n=>{f(n)})(n)},children:n})},e)))})})]})]}),(0,m.jsxs)(a.DM,{children:[(0,m.jsxs)("label",{htmlFor:"price",children:[(0,m.jsx)("p",{children:"\ub300\uc5ec\uac00\uaca9"})," ",(0,m.jsx)("p",{children:"*"})]}),(0,m.jsx)("div",{children:(0,m.jsx)("input",{type:"number",id:"price",placeholder:"\u20a9 \ub300\uc5ec \uac00\uaca9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})})]}),(0,m.jsxs)(a.DM,{children:[(0,m.jsxs)("label",{htmlFor:"detail",children:[(0,m.jsx)("p",{children:"\uc0c1\ud488\ub0b4\uc6a9"})," ",(0,m.jsx)("p",{children:"*"})]}),(0,m.jsx)("div",{children:(0,m.jsx)("textarea",{id:"detail",placeholder:"\uad6c\ub9e4\uc2dc\uae30, \ube0c\ub79c\ub4dc/\ubaa8\ub378\uba85, \uc81c\ud488\uc758 \uc0c1\ud0dc (\uc0ac\uc6a9\uac10,\ud558\uc790 \uc720\ubb34) \ub4f1\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."})})]}),(0,m.jsxs)(a.DM,{children:[(0,m.jsxs)("label",{children:[(0,m.jsx)("p",{children:"\uac00\uaca9"})," ",(0,m.jsx)("p",{children:"*"})]}),(0,m.jsxs)(a.Zw,{children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("input",{type:"number",placeholder:"\uc22b\uc790\ub9cc \uc785\ub825"}),(0,m.jsx)("span",{children:"\uc6d0"})]}),(0,m.jsx)("p",{children:"\uc81c\ud488\uc758 \uac00\uaca9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})]}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("input",{type:"number",placeholder:"\uc22b\uc790\ub9cc \uc785\ub825"}),(0,m.jsx)("span",{children:"%"})]}),(0,m.jsx)("p",{children:"50 ~ 100% \ubcf4\uc99d\uae08"})]}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("input",{type:"number",placeholder:"\uc22b\uc790\ub9cc \uc785\ub825"}),(0,m.jsx)("span",{children:"\uc6d0"})]}),(0,m.jsx)("p",{children:"1\uc77c \ub300\uc5ec\uac00\uaca9"})]})]})]}),(0,m.jsxs)(a.DM,{children:[(0,m.jsxs)("label",{htmlFor:"quantity",children:[(0,m.jsx)("p",{children:"\uc18c\uc720\uc218\ub7c9"})," ",(0,m.jsx)("p",{children:"*"})]}),(0,m.jsx)("div",{children:(0,m.jsx)("input",{className:"showSpinner",type:"number",id:"quantity",placeholder:"\uc22b\uc790\ub9cc \uc785\ub825"})})]}),(0,m.jsxs)(a.DM,{children:[(0,m.jsxs)("label",{htmlFor:"dateInput",children:[(0,m.jsx)("p",{children:"\uc81c\ud488 \uad6c\ub9e4\uc77c"})," ",(0,m.jsx)("p",{children:"*"})]}),(0,m.jsx)("div",{children:(0,m.jsx)(s.Z,{})})]}),(0,m.jsxs)(a.DM,{children:[(0,m.jsxs)("label",{htmlFor:"rentalday",children:[(0,m.jsx)("p",{children:"\uac70\ub798 \uac00\ub2a5 \ub0a0\uc9dc"})," ",(0,m.jsx)("p",{children:"*"})]}),(0,m.jsx)("div",{children:(0,m.jsx)(h.Z,{onDateSelect:(n,e)=>{console.log("Selected start date:",n),console.log("Selected end date:",e)}})})]}),(0,m.jsxs)(a.DM,{direction:"column",children:[(0,m.jsxs)("label",{htmlFor:"adress",children:[(0,m.jsx)("p",{children:"\uc8fc\uc18c"})," ",(0,m.jsx)("p",{children:"*"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("input",{type:"text",...Y("address"),value:B,placeholder:"\uc8fc\uc18c \uac80\uc0c9\uc744 \ud574\uc8fc\uc138\uc694.",onClick:()=>{E(!0)},id:"adress",readOnly:!0}),(0,m.jsx)("input",{placeholder:"\uc0c1\uc138 \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),I&&(0,m.jsx)(p.u,{handleClose:()=>{E(!1)},children:(0,m.jsx)(x.ZP,{onComplete:n=>{const{address:e}=n;q(e),E(!1)},autoClose:!1})})]})]})]})}),(0,m.jsxs)(c._q,{children:[(0,m.jsx)(c.ty,{type:"button",children:"\ucde8\uc18c"}),(0,m.jsx)(c.c0,{type:"button",children:"\uc800\uc7a5"})]})]})]})}},9438:(n,e,i)=>{i.d(e,{Z:()=>d});i(2791);var t=i(6232),r=i(9168),o=i(184);const l={width:"200px",height:"50px",borderRadius:"10px",border:"1px solid #2C39B5",flexShrink:0},d=()=>(0,o.jsx)("div",{children:(0,o.jsx)(t.Z,{style:l,placeholder:["\uad6c\ub9e4\uc77c"],format:"YYYY/MM/DD",suffixIcon:(0,o.jsx)(r.Z,{style:{color:"#2C39B5"}})})})},7714:(n,e,i)=>{i.d(e,{G:()=>t});const t={color:{primary:"#2C39B5",p100:"#000000",p200:"#4B4B4B",p300:"#777777",p400:"#E4E7FF",p500:"#F2F2FF",p600:"#FFFFFF"}}},9008:(n,e,i)=>{i.d(e,{Hg:()=>Y,MY:()=>C,SL:()=>v,UT:()=>M,ZZ:()=>S,_q:()=>G,ay:()=>k,c0:()=>q,ft:()=>z,fx:()=>y,lF:()=>F,rs:()=>w,sp:()=>D,ty:()=>B,ve:()=>Z});var t,r,o,l,d,s,c,p,x,h,a,u,m,g,j,b=i(168),f=i(643);const y=f.Z.div(t||(t=(0,b.Z)(["\n  width: 1300px;\n  text-align: center;\n  margin: 0 auto;\n  /* background: skyblue; */\n"]))),Z=f.Z.form(r||(r=(0,b.Z)(["\n  width: 980px;\n  /* height: 700px; */\n  border-radius: 10px;\n  border: 1px solid #2c39b5;\n  margin: ",";\n  padding: 60px 90px;\n"])),(n=>n.margin?n.margin:"0 auto 100px")),v=f.Z.div(o||(o=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n  margin-bottom: 3px;\n"]))),w=f.Z.div(l||(l=(0,b.Z)(["\n  display: flex;\n  p {\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n  span {\n    color: #ff0303;\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n"]))),k=f.Z.div(d||(d=(0,b.Z)(["\n  display: block;\n  text-align: start;\n"]))),C=f.Z.div(s||(s=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 600px;\n  /* background: pink; */\n  img {\n    width: 180px;\n    height: 180px;\n    border-radius: 5px;\n    border: 1px solid #2c39b5;\n  }\n  input {\n    border-radius: 5px;\n    border: 1px solid #2c39b5;\n\n    width: ",";\n    height: 36px;\n    padding-left: 15px;\n\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n  div {\n    border-radius: 5px;\n    border: 1px solid #2c39b5;\n\n    width: ",";\n    height: 36px;\n    padding-left: 15px;\n\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: ",';\n  }\n  /* input[type="file"] {\n    width: 180px;\n    height: 180px;\n  } */\n  /* input[type="text"] {\n    width: ',";\n    height: 36px;\n    padding-left: 15px;\n\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  } */\n"])),(n=>n.width?n.width:"600px"),(n=>n.width?n.width:"600px"),(n=>n.lineHight?n.lineHight:"normal"),(n=>n.width?n.width:"600px")),S=f.Z.div(c||(c=(0,b.Z)(["\n  color: red;\n  font-size: 15px;\n"]))),z=f.Z.button(p||(p=(0,b.Z)(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n"]))),D=f.Z.div(x||(x=(0,b.Z)(["\n  display: block;\n  width: 600px;\n  text-align: start;\n  input {\n    border-radius: 5px;\n    border: 1px solid #2c39b5;\n    width: 600px;\n    height: 36px;\n    padding-left: 15px;\n    margin-top: 10px;\n\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n"]))),F=f.Z.button(h||(h=(0,b.Z)(["\nbackground: transparent;\nborder: none;\nwidth: 0px;\nheight: 0px;\n"]))),M=f.Z.img(a||(a=(0,b.Z)(["\n  width: 20px !important;\n  height: 20px !important;\n  border: none !important;\n  transform: translate(-150%, 40%);\n  cursor: pointer;\n"]))),Y=f.Z.button(u||(u=(0,b.Z)(["\n  width: 105px;\n  height: 36px;\n  border-radius: 5px;\n  border: 1px solid #2c39b5;\n  background: #2c39b5;\n  cursor: pointer;\n\n  color: #fff;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n"]))),G=f.Z.div(m||(m=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  width: ",";\n  margin-top: ",";\n  margin-bottom: ",";\n"])),(n=>n.width?n.width:""),(n=>n.mgtop?n.mgtop:"60px"),(n=>n.mgbtm?n.mgbtm:"90px")),B=f.Z.button(g||(g=(0,b.Z)(["\n  width: 150px;\n  height: 50px;\n  border-radius: 10px;\n  background: #f2f2ff;\n  border: none;\n  cursor: pointer;\n\n  color: #2c39b5;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n"]))),q=(0,f.Z)(B)(j||(j=(0,b.Z)(["\n  background: #2c39b5;\n  color: #fff;\n  cursor: pointer;\n"])))},3966:(n,e,i)=>{i.d(e,{DM:()=>g,Kn:()=>y,Q8:()=>f,X9:()=>Z,Zw:()=>m,m0:()=>b,qp:()=>j,qt:()=>u});var t,r,o,l,d,s,c,p,x=i(168),h=i(643),a=i(7714);const u=h.Z.div(t||(t=(0,x.Z)(["\n  width: 1260px;\n  margin: 0 auto;\n"]))),m=h.Z.div(r||(r=(0,x.Z)(["\n  justify-content: space-between;\n  width: 86rem;\n  input {\n    width: 20rem !important;\n  }\n  span {\n    margin-left: 5px;\n    font-size: 1.8rem;\n  }\n  p {\n    display: block;\n    padding-top: 5px;\n    width: 20rem;\n    text-align: center;\n    font-size: 1.4rem;\n  }\n"]))),g=h.Z.div(o||(o=(0,x.Z)(["\n  display: flex;\n  margin-top: 6rem;\n\n  :nth-of-type(1) {\n    margin-top: 0;\n  }\n  label {\n    display: flex;\n    width: 12rem;\n    p {\n      font-size: 1.6rem;\n      :nth-of-type(2) {\n        color: #ff0303;\n      }\n    }\n    span {\n      margin-left: 5px;\n      font-size: 1.6rem;\n    }\n  }\n  > div {\n    display: flex;\n\n    flex-direction: ",";\n    gap: 1rem;\n\n    input {\n      width: 86rem;\n      padding-left: 15px;\n      height: 4rem;\n      border-radius: 5px;\n      border: 1px solid ",";\n      color: #000;\n      font-size: 1.6rem;\n    \n    }\n    input.showSpinner {\n      width: 20rem;\n    }\n  }\n  textarea {\n    width: 86rem;\n    height: 28rem;\n    border-radius: 5px;\n    border: 1px solid ",";\n    padding: 15px;\n    color: #000;\n    font-size: 1.6rem;\n  }\n  h2 {\n    font-size: 1.6rem;\n    font-weight: 400;\n    text-align: end;\n  }\n"])),(n=>n.direction?n.direction:"none"),a.G.color.primary,a.G.color.primary),j=h.Z.div(l||(l=(0,x.Z)(["\n  display: flex;\n  padding-top: 10px;\n  width: 250px;\n  height: 230px;\n  cursor: pointer;\n  color: ",";\n  font-size: 16px;\n  font-weight: 400;\n  border-radius: 5px;\n  border: 1px solid ",";\n"])),a.G.color.primary,a.G.color.primary),b=h.Z.button(d||(d=(0,x.Z)(["\n  width: 24.5rem;\n  border: 0;\n  background: ",";\n  height: 3.6rem;\n  color: ",";\n"])),(n=>n.clickbtn?a.G.color.p500:"0"),(n=>n.clickbtn?a.G.color.primary:a.G.color.p300)),f=h.Z.button(s||(s=(0,x.Z)(["\n  width: 24.5rem;\n  border: 0;\n  background: ",";\n  height: 3.6rem;\n  color: ",";\n"])),(n=>n.clickbtn?a.G.color.p500:"0"),(n=>n.clickbtn?a.G.color.primary:a.G.color.p300)),y=h.Z.button(c||(c=(0,x.Z)(["\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  img {\n    width: 18rem;\n    height: 18rem;\n    border: 1px solid ",";\n    border-radius: 5px;\n    object-fit: cover;\n  }\n"])),a.G.color.primary),Z=h.Z.div(p||(p=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap !important;\n  width: 500px;\n  img {\n    width: 9rem;\n    height: 9rem;\n    border: 1px solid ",";\n    border-radius: 5px;\n    object-fit: cover;\n  }\n"])),a.G.color.primary)}}]);
//# sourceMappingURL=883.f9226ac1.chunk.js.map