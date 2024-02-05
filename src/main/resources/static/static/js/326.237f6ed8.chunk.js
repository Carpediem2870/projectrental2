"use strict";(self.webpackChunkelectro_rent=self.webpackChunkelectro_rent||[]).push([[326],{724:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(4420),o=e(7689),r=e(8089),l=e(184);const s=()=>{const n=(0,o.s0)(),t=(0,i.I0)();return{loginState:(0,i.v9)((n=>n.loginSlice)),isLogin:"true"===sessionStorage.getItem("isLogin"),doLogin:async n=>{let{loginParam:e,successFn:i,failFn:o,errorFn:l}=n;return(await t((0,r.ft)({loginParam:e,successFn:i,failFn:o,errorFn:l}))).payload},doLogout:()=>{t((0,r.kS)())},moveToPath:t=>{n({pathname:t},{replace:!0})},moveToLogin:()=>(0,l.jsx)(o.Fg,{replace:!0,to:"/member/login"})}}},6326:(n,t,e)=>{e.d(t,{Z:()=>hn});var i,o,r,l,s,d,a,c,x,p,h,g,u,m=e(2791),f=e(168),b=e(643);const j=b.Z.div(i||(i=(0,f.Z)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #fff;\n  width: 100vw;\n  text-align: center;\n  padding-bottom: 15px;\n  height: 155px;\n"]))),v=b.Z.div(o||(o=(0,f.Z)(["\n  margin: 30px auto;\n  display: flex;\n  justify-content: space-between;\n  width: 1300px;\n"]))),Z=b.Z.img(r||(r=(0,f.Z)(["\n  width: 60px;\n  height: 60px;\n  background-color: transparent;\n  cursor: pointer;\n"]))),w=b.Z.div(l||(l=(0,f.Z)(["\n  display: flex;\n  width: 640px;\n  height: 60px;\n  flex-shrink: 0;\n  padding-left: 30px;\n  padding-right: 10px;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 80px;\n  border: 1px solid #2c39b5;\n"]))),y=b.Z.input(s||(s=(0,f.Z)(["\n  display: flex;\n  width: 550px;\n  height: 50px;\n  flex-direction: column;\n  justify-content: center;\n  flex-shrink: 0;\n  border: none;\n\n  color: rgb(0, 0, 0);\n  font-size: 25px;\n  font-style: normal;\n  line-height: 24px; /* 80% */\n  letter-spacing: 0.5px;\n"]))),k=b.Z.button(d||(d=(0,f.Z)(['\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  flex-shrink: 0;\n  border: none;\n  background-image: url("/images/header/bt_search.svg");\n  cursor: pointer;\n']))),C=b.Z.div(a||(a=(0,f.Z)(["\n  display: flex;\n  width: 200px;\n  height: 20px;\n  button {\n    width: 100%;\n    background: transparent;\n    border: none;\n    color: #777;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 16px;\n    cursor: pointer;\n  }\n"]))),F=b.Z.div(c||(c=(0,f.Z)(["\n  margin: 0 auto;\n  width: 1300px;\n  display: flex;\n  gap: 40px;\n  ul {\n    gap: 40px;\n    display: flex;\n    list-style: none;\n  }\n  li {\n    color: #4b4b4b;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 16px;\n  }\n"]))),S=b.Z.div(x||(x=(0,f.Z)(["\n  display: block;\n  width: 35px;\n  height: 35px;\n  img {\n    padding: 7px;\n    cursor: pointer;\n  }\n"]))),L=b.Z.div(p||(p=(0,f.Z)(["\n  display: flex;\n  gap: 5px;\n"]))),z=b.Z.div(h||(h=(0,f.Z)(["\n  width: 100px;\n"]))),E=b.Z.li(g||(g=(0,f.Z)(["\n  height: 30px;\n  width: 85px;\n  margin: 0 auto 5px;\n  padding-top: 6px;\n  cursor: pointer;\n"]))),N=b.Z.div(u||(u=(0,f.Z)(["\n  display: block;\n  border: 1px solid #2c39b5;\n  width: 100px;\n  padding-top: 10px;\n  background: #fff;\n  li {\n    margin-bottom: 10px;\n    padding: 7px 0;\n    color: #777;\n    cursor: pointer;\n  }\n"])));var D,T,B,O,M=e(2378),P=e(7689),R=e(4420),I=(e(8089),e(724));const K=b.Z.div(D||(D=(0,f.Z)(["\n  position: fixed;\n  display: block;\n  z-index: 100;\n  top: 155px;\n  width: 540px;\n  height: 310px;\n  border: 1px solid #2c39b5;\n  background: #fff;\n  padding: 30px 20px;\n"]))),_=b.Z.div(T||(T=(0,f.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n  color: #4b4b4b;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  text-align: center;\n"]))),A=b.Z.div(B||(B=(0,f.Z)(["\n  width: 130px;\n  height: 34px;\n  background: #f2f2ff;\n  padding-top: 9px;\n"]))),W=b.Z.div(O||(O=(0,f.Z)(["\n  display: flex;\n  margin-left: 20px;\n  margin-top: 9px;\n  gap: 20px;\n  li {\n    color: #777;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 16px;\n    cursor: pointer;\n  }\n"])));var X=e(184);const Y=[{id:1,title:"\uc2a4\ub9c8\ud2b8 \uae30\uae30"},{id:2,title:"PC / \ub178\ud2b8\ubd81"},{id:3,title:"\uc601\uc0c1 / \uce74\uba54\ub77c"},{id:4,title:"\uc74c\ud5a5"},{id:5,title:"\uac8c\uc784 \uae30\uae30"}],H=[[{id:1,title:"\uc2a4\ub9c8\ud2b8 \uc6cc\uce58"},{id:2,title:"\ud0dc\ube14\ub9bf"},{id:3,title:"\uac24\ub7ed\uc2dc"},{id:4,title:"\uc544\uc774\ud3f0"}],[{id:1,title:"\ub178\ud2b8\ubd81"},{id:2,title:"PC"},{id:3,title:"\ub9c8\uc6b0\uc2a4"},{id:4,title:"\ud0a4\ubcf4\ub4dc"}],[{id:1,title:"\ube54\ud504\ub85c\uc81d\ud130"},{id:2,title:"\uc14b\ud1b1\ubc15\uc2a4"},{id:3,title:"\uce74\uba54\ub77c"},{id:4,title:"\ucea0\ucf54\ub354"},{id:5,title:"DSLR"}],[{id:1,title:"\uc2a4\ud53c\ucee4"},{id:2,title:"\uc774\uc5b4\ud3f0"},{id:3,title:"\ud5e4\ub4dc\ud3f0"},{id:4,title:"\ub9c8\uc774\ud06c"}],[{id:1,title:"\ud50c\ub808\uc774\uc2a4\ud14c\uc774\uc158"},{id:2,title:"\ub2cc\ud150\ub3c4"},{id:3,title:"Wii"},{id:4,title:"XBOX"},{id:5,title:"\uae30\ud0c0"}]],U=()=>{const[n,t]=(0,m.useState)(null),e=()=>{t(null)},i=(0,P.s0)();return(0,X.jsx)(K,{children:Y.map((o=>(0,X.jsxs)(_,{children:[(0,X.jsx)(A,{children:o.title}),(0,X.jsx)(W,{children:H[o.id-1].map((r=>(0,X.jsx)("li",{onClick:()=>{i("/more/".concat(o.id,"/").concat(r.id,"/1")),window.location.reload()},onMouseEnter:()=>{return n=r.title,void t(n);var n},onMouseLeave:e,style:n===r.title?{color:"#2C39B5",fontWeight:"500"}:{},children:r.title},r.id)))})]},o.id)))})};var q=e(5294),G=e(3014);const J=n=>{let{searchName:t,pageNum:e}=n;const[i,o]=(0,m.useState)(""),r=(0,m.useRef)(null),l=(0,m.useRef)(null),s=n=>{n.preventDefault(),console.log("\uac80\uc0c9\uc2e4\ud589",i);(async n=>{let{sendData:t,successFn:e,failFn:i,errFn:o}=n;try{const n="".concat(G.L,"/api/prod?search=").concat(t.search,"&page=").concat(t.pageNum),o=await q.Z.get(n);"2"===o.status.toString().charAt(0)?e(o.data):i(o.data)}catch(r){o(r)}})({sendData:{search:i,pageNum:1},successFn:d,failFn:a,errFn:c})},d=n=>{console.log("\uac80\uc0c9 \uc131\uacf5",n);x("/search",{state:{result:n}}),window.location.reload()},a=n=>{console.log("\uac80\uc0c9 \uc624\ub958",n)},c=n=>{console.log("\uac80\uc0c9 \uc11c\ubc84\uc5d0\ub7ec",n)},x=(0,P.s0)(),[p,h]=(0,m.useState)(0),g=()=>{h(window.scrollY||document.documentElement.scrollTop)};(0,m.useEffect)((()=>(window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)})),[]);const[u,f]=(0,m.useState)(!1),b=(0,m.useRef)(),D=()=>{f((n=>!n))};(0,m.useEffect)((()=>{const n=n=>{u&&!b.current.contains(n.target)&&f(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}}),[u]);const[T,B]=(0,m.useState)(null),[O,K]=(0,m.useState)(null),_=()=>{K(null)},{moveToPath:A,isLogin:W,doLogout:J}=((0,R.v9)((n=>n.loginSlice)),(0,I.Z)());(0,R.I0)();return(0,X.jsxs)(j,{style:p<100?{boxShadow:"none"}:{boxShadow:"0px 2px 5px 0px rgba(0, 0, 0, 0.25)"},children:[(0,X.jsxs)(v,{children:[(0,X.jsx)(Z,{src:"/images/logo.png",onClick:()=>{x("/")}}),(0,X.jsx)("div",{className:"header-search",children:(0,X.jsxs)(w,{children:[(0,X.jsx)(y,{ref:r,onChange:n=>(n=>{o(n.target.value)})(n),onKeyDown:n=>{"Enter"===n.key&&(n.preventDefault(),l.current.click())},type:"text",placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",min:2,value:i}),(0,X.jsx)(k,{ref:l,onClick:n=>s(n),type:"button"})]})}),W?(0,X.jsxs)(C,{children:[(0,X.jsx)("button",{onClick:()=>{J(),A("/")},children:"\ub85c\uadf8\uc544\uc6c3"}),(0,X.jsx)(M.O3,{}),(0,X.jsx)("button",{onClick:()=>{x("/my")},children:"\ub9c8\uc774\ud398\uc774\uc9c0"})]}):(0,X.jsxs)(C,{children:[(0,X.jsx)("button",{onClick:()=>{x("/login")},children:"\ub85c\uadf8\uc778"}),(0,X.jsx)(M.O3,{}),(0,X.jsx)("button",{onClick:()=>{x("/join/1")},children:"\ud68c\uc6d0\uac00\uc785"})]})]}),(0,X.jsxs)(F,{children:[(0,X.jsxs)(S,{ref:b,children:[!0===u?(0,X.jsx)("img",{src:"/images/header/bt_cancel.svg",onClick:D}):(0,X.jsx)("img",{src:"/images/header/bt_menu.svg",onClick:D}),u&&(0,X.jsx)(U,{})]}),(0,X.jsxs)(L,{children:[Y.map((n=>(0,X.jsxs)(z,{onMouseEnter:()=>{return t=n.title,void B(t);var t},onMouseLeave:()=>(n.title,void B(null)),className:T===n.title?"active":"",children:[(0,X.jsx)(E,{style:T===n.title?{color:"#2C39B5",fontWeight:"500",fontSize:"13px"}:{color:"#777"},children:n.title}),T===n.title&&(0,X.jsx)(N,{children:H[n.id-1].map((t=>(0,X.jsx)("li",{onClick:()=>{x("/more/".concat(n.id,"/").concat(t.id,"/1")),window.location.reload()},onMouseEnter:()=>{return n=t.title,void K(n);var n},onMouseLeave:_,style:O===t.title?{color:"#2C39B5",fontWeight:"500",background:"#F2F2FF"}:{},children:t.title},t.id)))})]},n.title))),(0,X.jsx)("div",{})]})]})]})};var Q,V,$,nn,tn,en,on;const rn=b.Z.div(Q||(Q=(0,f.Z)(["\n  width: 100vw;\n  text-align: center;\n  margin: 0 auto;\n  border-top: 1px solid #f2f2ff;\n"]))),ln=b.Z.div(V||(V=(0,f.Z)(["\ntext-align: start;\n  width: 1300px;\n  margin: 0 auto;\n  height: 70px;\n  padding-top: 30px;\n"]))),sn=b.Z.img($||($=(0,f.Z)(["\n  width: 50px;\n  height: 50px;\n  background-color: transparent;\n"]))),dn=b.Z.div(nn||(nn=(0,f.Z)(["\n  width: 1300px;\n  margin: 0 auto;\n  display: flex;\n  height: 270px;\n\n  padding-top: 25px;\n  div {\n    text-align: start;\n  }\n  h1 {\n    text-align: start;\n    color: #777;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n  h2 {\n    color: #2c39b5;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: normal;\n  }\n  img {\n    margin-right: 15px;\n  }\n"]))),an=b.Z.div(tn||(tn=(0,f.Z)(["\n  width: 550px;\n"]))),cn=b.Z.div(en||(en=(0,f.Z)(["\n  width: 610px;\n"]))),xn=b.Z.div(on||(on=(0,f.Z)(["\n  border-top: 1px solid #2c39b5;\n  height: 60px;\n  span {\n    color: #777;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n"]))),pn=()=>(0,X.jsxs)(rn,{children:[(0,X.jsx)(ln,{children:(0,X.jsx)(sn,{src:"/images/logo.png"})}),(0,X.jsxs)(dn,{children:[(0,X.jsxs)(an,{children:[(0,X.jsx)("h1",{children:"\uc0c1\ud638:Billy"}),(0,X.jsx)("h1",{children:"\ud300\uc7a5:\ubc15\uc900\uc11c,\ud55c\uc0c1\uc6d0"}),(0,X.jsx)("br",{}),(0,X.jsx)("h1",{children:"\uae43 \uc8fc\uc18c:"}),(0,X.jsx)("h1",{children:"https://github.com/\uacc4\uc815\uba85/\ud504\ub85c\uc81d\ud2b8\uba85"}),(0,X.jsx)("br",{}),(0,X.jsx)("br",{}),(0,X.jsx)("h1",{children:"\uc804\ud654\ubc88\ud638 : 0507-1414-1018"}),(0,X.jsx)("h1",{children:"\ud300\uc7a5 \uc774\uba54\uc77c : 0000@gmail.com & 0000@gmail.com"}),(0,X.jsx)("br",{}),(0,X.jsx)("br",{}),(0,X.jsx)("h1",{children:"\uc8fc\uc18c : \ub300\uad6c \uc911\uad6c \uc911\uc559\ub300\ub85c 394 \uc81c\uc77c\ube4c\ub529 5F "})]}),(0,X.jsxs)(cn,{children:[(0,X.jsx)("h2",{children:"COMPANY"}),(0,X.jsx)("br",{}),(0,X.jsx)("br",{}),(0,X.jsx)("h1",{children:"\ud68c\uc0ac\uc18c\uac1c \uc774\uc6a9\uc57d\uad00 \uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68 \uc81c\ud734\ubb38\uc758 \uace0\uac1d\uc13c\ud130"}),(0,X.jsx)("br",{}),(0,X.jsx)("br",{}),(0,X.jsx)("h2",{children:"INTRODUCE"}),(0,X.jsx)("br",{}),(0,X.jsx)("br",{}),(0,X.jsx)("h1",{children:"FRONT-END \ubc15\uc900\uc11c \uae40\uacbd\ubbfc \ubc15\uc18c\uc5f0 \uc0ac\uacf5\uc740\uc9c4 \ucd5c\ubc30\uadfc"}),(0,X.jsx)("br",{}),(0,X.jsx)("br",{}),(0,X.jsx)("h1",{children:"BACK-END \ud55c\uc0c1\uc6d0 \uae40\ud604\ube48 \uae40\ud604\uc77c \uc870\ud604\ubbfc"})]}),(0,X.jsxs)("div",{children:[(0,X.jsx)("h2",{children:"SOCIAL"}),(0,X.jsx)("br",{}),(0,X.jsx)("br",{}),(0,X.jsx)("img",{src:"/images/footer/gitHub.svg"}),(0,X.jsx)("img",{src:"/images/footer/notion.svg"}),(0,X.jsx)("img",{src:"/images/footer/figma.svg"})]})]}),(0,X.jsx)(xn,{children:(0,X.jsx)("span",{children:"Copyright \xa9 \ud68c\uc0ac\uba85 Inc. all rights reserved. "})})]}),hn=n=>{let{children:t}=n;return(0,X.jsxs)("div",{children:[(0,X.jsx)("header",{children:(0,X.jsx)(J,{})}),(0,X.jsxs)("div",{style:{position:"absolute",top:"250px",left:"0",width:"100%"},children:[(0,X.jsx)("main",{children:t}),(0,X.jsx)("footer",{children:(0,X.jsx)(pn,{})})]})]})}},2378:(n,t,e)=>{e.d(t,{EB:()=>b,Ko:()=>m,Nm:()=>j,O3:()=>v,TR:()=>u,Xn:()=>h,aB:()=>f,nw:()=>g});var i,o,r,l,s,d,a,c,x=e(168),p=e(643);const h=p.Z.div(i||(i=(0,x.Z)(["\n  width: 1300px;\n  /* text-align: center; */\n  margin: 0 auto;\n  /* background: skyblue; */\n  padding-bottom: 120px;\n"]))),g=p.Z.div(o||(o=(0,x.Z)(["\nwidth: 100%;\ntext-align: center;\n"]))),u=p.Z.img(r||(r=(0,x.Z)(["\n  margin: 0px auto 40px auto;\n  width: 50px;\n  height: 50px;\n  background-color: transparent;\n"]))),m=p.Z.div(l||(l=(0,x.Z)(["\n  margin: 0 auto;\n  /* box-sizing: border-box; */\n  width: 450px;\n  height: ",";\n  /* height: 540px; */\n  border-radius: 10px;\n  border: 1px solid #2c39b5;\n  padding-left: 30px;\n  p {\n    margin-top: 50px;\n    margin-bottom: ",";\n\n    color: #000;\n    font-family: KyivType Sans;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 350;\n    line-height: normal;\n  }\n  li {\n    position: relative;\n    cursor: pointer;\n\n    color: #000;\n    font-family: KyivType Sans;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n  \n"])),(n=>n.height?n.height:"540px"),(n=>n.mgbtm?n.mgbtm:"160px")),f=p.Z.input(s||(s=(0,x.Z)(["\n  width: 390px;\n  height: 50px;\n  border-radius: 10px;\n  border: 1px solid #2c39b5;\n  padding-left: 20px;\n\n  color: #000;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n\n  margin-bottom: 10px;\n"]))),b=(0,p.Z)(f)(d||(d=(0,x.Z)(["\n  margin-bottom: 30px;\n"]))),j=p.Z.button(a||(a=(0,x.Z)(["\n  width: 390px;\n  height: 50px;\n  border-radius: 10px;\n  background: #2c39b5;\n  margin-bottom: 20px;\n\n  color: #fff;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  cursor: pointer;\n"]))),v=p.Z.div(c||(c=(0,x.Z)(["\n  width: 1px;\n  height: 15px;\n  background: #2c39b5;\n"])))}}]);
//# sourceMappingURL=326.237f6ed8.chunk.js.map