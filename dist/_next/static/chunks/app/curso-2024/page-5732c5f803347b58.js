(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{1062:function(e,s,a){Promise.resolve().then(a.bind(a,1873))},1873:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return c}});var t=a(7437),l=a(2869),r=a(2950),i=a(2265),n=e=>{let{children:s=[],visibleItemsCount:a=1,isInfinite:l,withIndicator:r,className:n,id:c,autoScrollEnabled:o=!0,autoScrollTimeout:d=3e3,isFullWidth:m=!1}=e,u=i.useRef(null),[x,p]=i.useState(!1),[h,f]=i.useState(!0),[v,g]=i.useState(null),j=i.useRef(null),w=i.useMemo(()=>i.Children.count(s),[s]),b=i.useMemo(()=>l&&i.Children.count(s)>a,[s,l,a]),[N,y]=i.useState(b?a:0),[_,C]=i.useState(!0),[E,S]=i.useState(null);i.useEffect(()=>{b&&(N===a||N===w)&&C(!0)},[N,b,a,w]),i.useEffect(()=>document.addEventListener("visibilitychange",()=>"hidden"===document.visibilityState?f(!1):f(!0)),[]),i.useEffect(()=>{if(r){var e,s,a;let t=null===(e=u.current)||void 0===e?void 0:e.querySelector(".dots-active");if(t){let e=t.getAttribute("data-index");null!==e&&(null===(s=u.current)||void 0===s?void 0:s.scrollTo)&&(null===(a=u.current)||void 0===a||a.scrollTo({left:(Number(e)-2)/5*50,behavior:"smooth"}))}}},[r,N]),i.useEffect(()=>{function e(){g(j.current.querySelectorAll(".carousel-element")[0].clientWidth)}return e(),window.visualViewport.addEventListener("resize",e),()=>window.visualViewport.removeEventListener("resize",e)},[]);let D=()=>{N>w&&p(!0),(b||N<w-a)&&y(e=>e+1)},A=()=>{(b?N<=a:0===N)&&p(!0),(b||N>0)&&y(e=>e-1)},T=()=>{b&&(0===N?(C(!1),y(w)):N===w+a&&(C(!1),y(a))),p(!1)},k=i.useMemo(()=>{let e=[];for(let t=0;t<a;t++)e.push(i.Children.toArray(s)[w-1-t]);return e.reverse(),e},[s,w,a]),L=i.useMemo(()=>{let e=[];for(let t=0;t<a;t++)e.push(i.Children.toArray(s)[t]);return e},[s,a]),M=i.useMemo(()=>{let e=[],s=b?a:0,l=b?w:Math.ceil(w/a),r=N-s<0?w+(N-s):N-s;for(let s=0;s<l;s++){let a="";a=r===s?"dots-active":0===r?r+s<=2?"dots-close":"dots-far":r===l-1?2>=Math.abs(r-s)?"dots-close":"dots-far":1===Math.abs(r-s)?"dots-close":"dots-far",e.push((0,t.jsx)("div",{"data-index":s,className:a},s))}return e},[N,b,w,a]),P=(0,i.useMemo)(()=>b||N<w-a,[b,N,w,a]),V=(0,i.useMemo)(()=>b||N>0,[b,N]),I=()=>{if(h&&!x){var e=N+1;e>w+1&&(e=0),y(e)}};return i.useEffect(()=>{let e=o&&setTimeout(I,d);return()=>clearTimeout(e)},[N]),(0,t.jsxs)("div",{className:n,id:c,ref:j,children:[(0,t.jsxs)("div",{className:"carousel-wrapper",children:[V?(0,t.jsx)("button",{disabled:x,style:{cursor:x?"not-allowed":"pointer",pointerEvents:x?"none":"inherit"},onClick:A,className:"left-arrow-button",children:(0,t.jsx)("span",{className:"left-arrow"})}):null,(0,t.jsx)("div",{className:"carousel-content-wrapper",onTouchStart:e=>{S(e.touches[0].clientX)},onTouchMove:e=>{if(null===E)return;let s=E-e.touches[0].clientX;s>5&&D(),s<-5&&A(),S(null)},children:(0,t.jsxs)("div",{className:"carousel-content *:w-[calc(100% / ".concat(a,")]"),style:{transform:"translateX(-".concat(N*v,"px)"),transition:_?void 0:"none"},onTransitionEnd:()=>T(),children:[b&&k,m?s.map((e,s)=>(0,t.jsx)("div",{className:"w-full h-auto carousel-element",children:e},s)):s.map((e,s)=>(0,t.jsx)("div",{className:"w-auto h-auto carousel-element",children:e},s)),b&&L]})}),P?(0,t.jsx)("button",{disabled:x,style:{cursor:x?"not-allowed":"pointer",pointerEvents:x?"none":"inherit"},onClick:D,className:"right-arrow-button",children:(0,t.jsx)("span",{className:"right-arrow"})}):null]}),r&&(0,t.jsx)("div",{ref:u,className:"indicator-container ",children:M})]})};function c(){let e=e=>document.querySelector(e),s="https://palmilhasterapeuticas.com.br/";i.useEffect(()=>{var e,s,a,t,l,r;e=window,s=document,a="script",e[t="dataLayer"]=e[t]||[],e[t].push({"gtm.start":(new Date).getTime(),event:"gtm.js"}),l=s.getElementsByTagName(a)[0],(r=s.createElement(a)).async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4",l.parentNode.insertBefore(r,l),document.title="Cursos Presenciais | Palmilhas Terap\xeauticas"},[]);let a=i.useMemo(()=>({select:{cityName:"",location:"",purchaseLink:"",mapData:null},sao_jose_dos_campos:{cityName:"S\xe3o Jos\xe9 dos Campos - SP",location:"Grupo Equality",eventDate:"23 e 24 de Fevereiro",endDate:Date.parse("2024-02-24T00:00:00.000-03:00"),purchaseLink:"https://www.sympla.com.br/curso-presencial-de-palmilhas-terapeuticas__2299829",mapData:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.682361024928!2d-45.91256568822172!3d-23.21824374899062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc358248ce2ec5%3A0x74eaa5023e4ca7eb!2sGrupo%20Equality!5e0!3m2!1sen!2sbr!4v1706649149402!5m2!1sen!2sbr"},curitiba:{cityName:"Curitiba - PR",location:"Confidence Hotel Batel",eventDate:"15 e 16 de Mar\xe7o",endDate:Date.parse("2024-03-16T00:00:00.000-03:00"),purchaseLink:"https://www.sympla.com.br/curso-presencial-de-palmilhas-terapeuticas__2299832",mapData:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1268876561558!2d-49.28252522258879!3d-25.43402104471572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce40ac8a88ea9%3A0xfe6a996ac4f7f5fd!2sAlameda%20Dr.%20Carlos%20de%20Carvalho%2C%20784%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080430-180!5e0!3m2!1sen!2sbr!4v1708037069655!5m2!1sen!2sbr"},belo_horizonte:{cityName:"Belo Horizonte - MG",location:null,eventDate:"5 e 6 de Abril",endDate:Date.parse("2024-04-06T00:00:00.000-03:00"),purchaseLink:"https://wa.me/553181075257",mapData:null},porto_alegre:{cityName:"Porto Alegre - RS",location:null,eventDate:"18 e 19 de Maio",endDate:Date.parse("2024-05-19T00:00:00.000-03:00"),purchaseLink:"",mapData:null}}),[]),[c,o]=i.useState("select"),[d,m]=i.useState(a.curitiba);return i.useEffect(()=>"select"==c?m(a.porto_alegre):m(a[c]),[c]),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"bg-[linear-gradient(#0a0a0a,#1E3050)]",children:[(0,t.jsx)(l.$0,{id:"cp-header",className:"h-[512px] flex flex-col justify-center pb-0 pt-0",children:(0,t.jsx)(l.VY,{className:"relative z-10",children:(0,t.jsx)(l.If,{children:(0,t.jsx)(l.im,{className:"pt-8",children:(0,t.jsxs)(l.W2,{className:"w-[32rem] max-[1024px]:w-96 max-[820px]:w-full px-8 mb-8 max-[820px]:text-center",children:[(0,t.jsx)("img",{src:s+"/img/svg/logo_cursos_presenciais.svg",alt:"",draggable:"false"}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:"O curso de Palmilhas Terap\xeauticas \xe9 uma experi\xeancia completa para quem quer aprender a avaliar, prescrever e confeccionar palmilhas terap\xeauticas."}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:"Dois dias intensos de teoria e muita pr\xe1tica de avalia\xe7\xe3o e confec\xe7\xe3o de palmilhas com diferentes t\xe9cnicas de moldagem e configura\xe7\xf5es de elementos."}),(0,t.jsx)("br",{}),(0,t.jsx)(r.zx,{onClick:()=>e("#cp-investimento").scrollIntoView({block:"start"}),children:"GARANTA J\xc1 A SUA VAGA!"})]})})})})}),(0,t.jsx)(l.$0,{id:"cp-proposta",className:"pt-0",children:(0,t.jsx)(l.VY,{})})]}),(0,t.jsx)(l.$0,{id:"cp-conteudo",className:"bg-[linear-gradient(#0c6b96,transparent)] pb-0",children:(0,t.jsx)(l.VY,{children:(0,t.jsxs)(l.If,{children:[(0,t.jsxs)("div",{className:"w-full text-center",children:[(0,t.jsx)("h1",{className:"grad-text mx-auto my-4 font-bold text-3xl",children:"CONTE\xdaDO DO CURSO"}),(0,t.jsx)("p",{className:"font-extralight w-1/2 mx-auto max-[820px]:w-full",children:"Confira aqui tudo o que voc\xea vai aprender sobre prescri\xe7\xe3o, confec\xe7\xe3o e aplica\xe7\xe3o de palmilhas terap\xeauticas:"})]}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{className:"divider max-[820px]:mb-8"}),(0,t.jsx)(l.im,{className:"items-center justify-evenly",children:(0,t.jsx)(l.W2,{className:"w-full",children:(0,t.jsxs)(n,{isInfinite:!0,withIndicator:!0,visibleItemsCount:1,children:[(0,t.jsx)("div",{className:"w-full h-auto",children:(0,t.jsx)("img",{src:s+"/img/[cursos_presenciais]_palmilha_1.webp",alt:"",draggable:"false",className:"w-3/4 max-[820px]:w-full h-auto m-auto"})}),(0,t.jsx)("div",{className:"w-full h-auto",children:(0,t.jsx)("img",{src:s+"/img/[cursos_presenciais]_palmilha_2.webp",alt:"",draggable:"false",className:"w-3/4 max-[820px]:w-full h-auto m-auto"})}),(0,t.jsx)("div",{className:"w-full h-auto",children:(0,t.jsx)("img",{src:s+"/img/[cursos_presenciais]_palmilha_3.webp",alt:"",draggable:"false",className:"w-3/4 max-[820px]:w-full h-auto m-auto"})}),(0,t.jsx)("div",{className:"w-full h-auto",children:(0,t.jsx)("img",{src:s+"/img/[cursos_presenciais]_palmilha_4.webp",alt:"",draggable:"false",className:"w-3/4 max-[820px]:w-full h-auto m-auto"})})]})})}),(0,t.jsxs)(l.im,{className:"justify-evenly items-center",children:[(0,t.jsxs)(l.W2,{className:"w-[40%] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4",children:[(0,t.jsx)("h2",{className:"grad-text font-bold text-xl",children:"Al\xe9m da confec\xe7\xe3o de palmilhas, ainda teremos:"}),(0,t.jsx)("div",{className:"divider left"}),(0,t.jsx)("br",{}),(0,t.jsxs)(r.aV,{className:"chain",children:[(0,t.jsx)("li",{children:"Anatomia e biomec\xe2nica para a prescri\xe7\xe3o de palmilhas"}),(0,t.jsx)("li",{children:"Prescri\xe7\xe3o de palmilhas para as diferentes queixas dos p\xe9s (fasciopatias, metatarsalgias, p\xe9s diab\xe9ticos, dentre outras)"}),(0,t.jsx)("li",{children:"Avalia\xe7\xe3o do p\xe9/tornozelo para a prescri\xe7\xe3o de palmilhas"}),(0,t.jsx)("li",{children:"Prescri\xe7\xe3o de elementos e tipos de moldagens"}),(0,t.jsx)("li",{children:"Estudo de casos e discuss\xe3o das prescri\xe7\xf5es dos diferentes tipos de palmilhas"}),(0,t.jsx)("li",{children:"Apresenta\xe7\xe3o dos materiais e ferramentas (lixadeira, microrret\xedfica, termoprensa, soprador e moldadores)"})]})]}),(0,t.jsx)(l.W2,{className:"w-[40%] h-[480px] max-[425px]:h-[240px] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 relative max-[820px]:hidden",children:(0,t.jsx)("div",{className:"w-9/12 aspect-square absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)_perspective(800px)_rotateY(-8deg)]",children:(0,t.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,width:480,height:480,className:"rounded-lg shadow-[20px_70px_40px_-20px_rgba(0,0,0,0.2)]",children:(0,t.jsx)("source",{src:"/img/slideshow_cursos.mp4",type:"video/mp4"})})})})]})]})})}),(0,t.jsx)(l.$0,{id:"cp-sobre",className:"py-32 px-8 flex items-center max-[820px]:pt-[120vw] max-[820px]:pb-8 border-b border-cyan-100",children:(0,t.jsx)(l.VY,{className:"relative z-10",children:(0,t.jsx)(l.If,{children:(0,t.jsxs)(l.W2,{className:"w-1/2 max-[820px]:w-[80%] max-[426px]:w-[96%] pt-8 max-[820px]:pt-0",children:[(0,t.jsx)("p",{className:"font-extralight",children:"Ol\xe1, meu nome \xe9"}),(0,t.jsx)("h1",{className:"text-left grad-text font-bold text-3xl",children:"ANDR\xc9 MENDES"}),(0,t.jsx)("div",{className:"divider left"}),(0,t.jsxs)("p",{children:["Sou fisioterapeuta especialista em fisioterapia ortop\xe9dica com 20 anos de carreira. Sou mestre e doutorando em fisioterapia e autor do livro ",(0,t.jsx)("i",{children:"Palmilhas Terap\xeauticas: Ci\xeancia e Pr\xe1tica Cl\xednica"}),", s\xf3cio-criador da Podoshop\xae e do Palmilhando\xae com 15 anos de experi\xeancia na prescri\xe7\xe3o e confec\xe7\xe3o de palmilhas terap\xeauticas."]})]})})})}),(0,t.jsx)(l.$0,{id:"cp-investimento",children:(0,t.jsx)(l.VY,{children:(0,t.jsx)(l.If,{children:(0,t.jsxs)(l.im,{className:"items-center justify-evenly",children:[(0,t.jsx)(l.W2,{className:"w-[40%] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 max-[820px]:mx-0",children:(0,t.jsxs)("div",{className:"flex flex-col items-center justify-between px-2 pb-[5%] pt-[10%] border border-cyan-100 rounded-xl backdrop-brightness-50 shadow-md text-center h-full relative endDate-200 ease-out",children:[(0,t.jsx)(l.Ct,{className:"border border-inherit rounded-full !w-max py-2 px-4 !bg-[color:#0e1b2c]",children:(0,t.jsx)("p",{className:"grad-text grad-slide",children:"SEU INVESTIMENTO"})}),(0,t.jsx)("img",{src:s+"/img/svg/logo_cursos_presenciais.svg",alt:"",draggable:"false",className:"w-1/2"}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsxs)(l.W2,{className:"my-4",children:[(0,t.jsxs)("h1",{className:"text-3xl font-bold",children:[(0,t.jsx)("mark",{className:"font-light text-white",children:"R$"})," 3000",(0,t.jsx)("sup",{children:(0,t.jsx)("small",{children:",00"})})]}),(0,t.jsx)("h2",{className:"text-xs font-light mt-4",children:"ou em at\xe9 12x (Parcelado pelo Sympla)"})]}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsx)("br",{}),(0,t.jsxs)("select",{name:"localCurso",defaultValue:"select",className:"cor-4 rounded-lg shadow-md w-9/12 p-2 cursor-pointer",onChange:s=>{o(s.target.value),window.visualViewport.width<=820&&e("#location-info").scrollIntoView({block:"start"})},children:[(0,t.jsx)("option",{value:"select",className:"cursor-pointer",children:"Selecione sua cidade..."}),(0,t.jsx)("option",{value:"curitiba",children:"Curitiba - PR"})]}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{className:"text-sm font-extralight w-9/12",children:"Selecione uma op\xe7\xe3o para ver detalhes sobre o local do evento"}),(0,t.jsx)("br",{}),(0,t.jsx)("a",{href:d.purchaseLink,target:"_blank",className:"relative z-10 w-9/12 mx-auto py-4 px-8 rounded-xl border font-bold border-cyan-100 shadow-md bg-[linear-gradient(to_right,var(--grad-1))] bg-[length:150%] select-none\n                                                ".concat("select"==c?"saturate-0 opacity-50 cursor-not-allowed pointer-events-none":"hover:scale-[101%] hover:brightness-110 hover:translate-y-[-1px] endDate-100 ease-out cursor-pointer"),children:"GARANTIR MINHA VAGA"}),(0,t.jsx)("img",{src:s+"/img/pagamento.webp",alt:"",draggable:"false",className:"w-1/2 opacity-30 mt-8"}),(0,t.jsx)("br",{})]})}),(0,t.jsxs)(l.W2,{className:"w-[40%] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 max-[820px]:mx-0",id:"location-info",children:[(0,t.jsxs)(l.W2,{className:"w-full max-[820px]:items-center",children:[(0,t.jsx)("h1",{className:"font-bold text-3xl",children:"select"==c?"PR\xd3XIMO CURSO:":"LOCAL SELECIONADO:"}),(0,t.jsx)("h1",{className:"grad-text text-3xl max-[820px]:text-2xl my-4",children:d.cityName}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsxs)(l.im,{className:"items-center justify-start max-[820px]:justify-center w-full",children:[(0,t.jsxs)(l.im,{className:"items-center flex-nowrap w-max m-2",children:[(0,t.jsx)("img",{src:s+"/img/svg/map_pin.svg",alt:"",draggable:"false",className:"w-6 h-6 mr-4"}),(0,t.jsx)("h2",{className:"font-extralight max-[820px]:text-base",children:d.location||"Local indispon\xedvel"})]}),(0,t.jsxs)(l.im,{className:"items-center flex-nowrap w-max m-2",children:[(0,t.jsx)("img",{src:s+"/img/svg/calendar.svg",alt:"",draggable:"false",className:"w-6 h-6 mr-4"}),(0,t.jsx)("h2",{className:"font-extralight max-[820px]:text-base",children:d.eventDate||"Data indispon\xedvel"})]})]}),(0,t.jsx)("div",{className:"rounded-md w-full aspect-video my-4 relative bg-[color:#0e1b2c]",children:(0,t.jsx)(()=>d.mapData?(0,t.jsx)("iframe",{src:d.mapData,style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",className:"w-full h-full rounded-md"}):(0,t.jsxs)("span",{className:"absolute-center text-center",children:["⚠",(0,t.jsx)("br",{}),"Mapa indispon\xedvel"]}),{})})]}),(0,t.jsx)("br",{})]})]})})})})]})}a(9843)},2869:function(e,s,a){"use strict";a.d(s,{$0:function(){return r},Ct:function(){return m},If:function(){return n},VY:function(){return i},W2:function(){return o},gb:function(){return u},im:function(){return c},rj:function(){return d}});var t=a(7437),l=a(12);let r=e=>{let{id:s,className:a,children:r}=e;return(0,t.jsx)("section",{id:s,className:(0,l.list)("py-16 m-auto w-full relative",a),children:r})},i=e=>{let{id:s,className:a,children:r}=e;return(0,t.jsx)("div",{id:s,className:(0,l.list)("block m-auto w-full",a),children:r})},n=e=>{let{id:s,className:a,children:r}=e;return(0,t.jsx)("div",{id:s,className:(0,l.list)("w-[96%] max-w-[1280px] mx-auto",a),children:r})},c=e=>{let{id:s,className:a,children:r}=e;return(0,t.jsx)("div",{id:s,className:(0,l.list)("flex flex-wrap",a),children:r})},o=e=>{let{id:s,className:a,children:r}=e;return(0,t.jsx)("div",{id:s,className:(0,l.list)("flex flex-col",a),children:r})},d=e=>{let{id:s,className:a,style:r,children:i}=e;return(0,t.jsx)("div",{id:s,className:(0,l.list)("grid",a),style:r,children:i})},m=e=>{let{id:s,className:a,width:r=24,children:i}=e;return(0,t.jsx)("div",{id:s,className:(0,l.list)("bg-inherit rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center p-4",a),style:{width:"".concat(r,"px")},children:i})},u=e=>{let{width:s=32}=e,a=s+"px";return(0,t.jsx)("div",{className:"loading absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",style:{width:a,height:a},children:(0,t.jsx)("img",{src:"/img/gif/loading.gif",width:a,height:a,draggable:"false",alt:""})})}},2950:function(e,s,a){"use strict";a.d(s,{aV:function(){return o},zF:function(){return n},zx:function(){return c}});var t=a(7437),l=a(2265),r=a(12);let i=e=>{let{id:s,className:a,fill:l="#1E3050",width:r=12}=e;return(0,t.jsx)("svg",{id:s,className:"caret "+a,fill:l,version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 12 12",style:{enableBackground:"new 0 0 12 12"},xmlSpace:"preserve",width:r+"px",height:r+"px",children:(0,t.jsx)("path",{d:"M9.2,6.8c0.5-0.5,0.5-1.2,0-1.7L4.5,0.5C4.2,0.2,3.7,0.1,3.2,0.3S2.5,0.9,2.5,1.3v9.3c0,0.5,0.3,0.9,0.7,1.1s0.9,0.1,1.3-0.3L9.2,6.8L9.2,6.8L9.2,6.8L9.2,6.8z"})})},n=e=>{let{id:s,className:a,title:n,children:c}=e,o=(0,l.useRef)(null);return(0,t.jsxs)("div",{className:(0,r.list)("collapsible bg-slate-200 cor-4 rounded-md overflow-hidden shadow-sm mb-2 p-4 cursor-pointer hover:bg-slate-50 light",a),ref:o,onClick:()=>{var e,s,a,t=document.querySelectorAll(".collapsible .content");function l(e){e.parentElement.style.maxHeight?e.parentElement.style.maxHeight=null:e.parentElement.style.maxHeight=3*e.scrollHeight+"px"}(null===(e=o.current)||void 0===e?void 0:e.classList.contains("active"))||function(){for(let e of t)e.parentElement.classList.contains("active")&&(e.parentElement.classList.remove("active"),l(e))}(),null===(s=o.current)||void 0===s||s.classList.toggle("active"),l(null===(a=o.current)||void 0===a?void 0:a.lastElementChild)},id:s,children:[(0,t.jsxs)("div",{className:"title flex justify-between items-center",children:[(0,t.jsx)("span",{className:"mr-4 font-bold",children:n}),(0,t.jsx)(i,{})]}),(0,t.jsx)("div",{className:"content mt-4 pb-4",children:c})]})},c=e=>{let{id:s,className:a,disabled:l,onClick:i,children:n}=e;return(0,t.jsx)("button",{id:s,className:(0,r.list)("border border-cyan-200 rounded-xl py-2 px-8 grad-1 font-semibold","".concat(l?"saturate-0 opacity-50 cursor-not-allowed":"hover:scale-[101%] hover:brightness-110 hover:translate-y-[-1px] duration-100 ease-out cursor-pointer"),a),onClick:i,children:n})},o=e=>{let{id:s,className:a,children:l}=e;return(0,t.jsx)("ul",{id:s,className:(0,r.list)("my-list",a),children:l})}},12:function(e,s,a){var t=a(12);t.list=function(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return s.join(" ").trim()},t.prefix=(e,s)=>{var a=s.split(" ");for(let s=0;s<a.length;s++)a[s]=e+a[s];return a.join(" ").trim()},t.url=e=>"url('/".concat(e||"placeholder.webp","')"),t.scrollToCenter=e=>{var s="string"==typeof e?document.querySelector(e):e;null==s||s.scrollIntoView({block:"center",behavior:"smooth"})},t.scrollToTop=e=>{var s="string"==typeof e?document.querySelector(e):e;null==s||s.scrollIntoView({block:"start",behavior:"smooth"})},t.log=function(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0;if(s){if("string"!=typeof e)return console.log(e);switch(a){case"success":return console.log("%c☑ - ".concat(e),"color: #B0C4DE");case"info":return console.log("%c⚠ - ".concat(e),"color: #F0E68C");case"error":return console.error(e);case"warning":return console.warn(e);default:return console.log(e)}}}},9843:function(){}},function(e){e.O(0,[77,971,23,744],function(){return e(e.s=1062)}),_N_E=e.O()}]);