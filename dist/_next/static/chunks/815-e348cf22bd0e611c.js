(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[815],{6910:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var l=t(7437),a=t(2869),r=t(2265);function n(e){let{paused:s=!1}=e,t=(0,r.useMemo)(()=>new Date("2024-09-01T23:59:00.000-03:00").getTime(),[]),[n,i]=(0,r.useState)({d:"00",h:"00",m:"00",s:"00"}),o=()=>{var e=t-(new Date).getTime(),l=e=>e<10?"0"+e:e,a=Math.floor;!s&&e>0&&i({d:l(a(e/864e5)),h:l(a(e%864e5/36e5)),m:l(a(e%36e5/6e4)),s:l(a(e%6e4/1e3))})};return(0,r.useEffect)(()=>{let e=setInterval(o,1e3);return()=>clearInterval(e)},[]),(0,l.jsx)("div",{id:"countdown",className:"fixed top-0 w-full h-20 bg-[var(--cor-4)] flex items-center border-b-2 border-sky-800 rounded-bl-3xl rounded-br-3xl z-50 slide-down overflow-hidden",children:s?(0,l.jsx)(a.W2,{className:"w-full h-full p-4",children:(0,l.jsx)("img",{src:"https://palmilhasterapeuticas.com.br/img/svg/encontro_logo_3.svg",className:"h-full w-auto block mx-auto",alt:"",draggable:"false"})}):(0,l.jsxs)(a.rj,{className:"justify-center items-center m-auto grid-cols-2 max-[820px]:!grid-cols-1 h-full gap-1",children:[(0,l.jsxs)("span",{className:"text-center mx-4",children:[(0,l.jsx)("span",{className:"font-bold my-1",children:"Garanta seu ingresso no 1\xba lote"}),(0,l.jsx)("span",{className:"font-light text-xs",children:"Tempo restante:"})]}),(0,l.jsxs)(a.rj,{className:"grid-cols-4",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950",children:[(0,l.jsx)("span",{className:"text-xl font-extrabold max-[820px]:!text-lg",children:n.d}),(0,l.jsx)("span",{className:"text-xs font-light",children:"DIAS"})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950",children:[(0,l.jsx)("span",{className:"text-xl font-extrabold max-[820px]:!text-lg",children:n.h}),(0,l.jsx)("span",{className:"text-xs font-light",children:"HORAS"})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950",children:[(0,l.jsx)("span",{className:"text-xl font-extrabold max-[820px]:!text-lg",children:n.m}),(0,l.jsx)("span",{className:"text-xs font-light",children:"MINUTOS"})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950",children:[(0,l.jsx)("span",{className:"text-xl font-extrabold max-[820px]:!text-lg",children:n.s}),(0,l.jsx)("span",{className:"text-xs font-light",children:"SEGUNDOS"})]})]})]})})}},2869:function(e,s,t){"use strict";t.d(s,{$0:function(){return r},Ct:function(){return x},If:function(){return i},VY:function(){return n},W2:function(){return c},gb:function(){return m},im:function(){return o},rj:function(){return d}});var l=t(7437),a=t(12);let r=e=>{let{id:s,className:t,children:r}=e;return(0,l.jsx)("section",{id:s,className:(0,a.list)("py-16 m-auto w-full relative",t),children:r})},n=e=>{let{id:s,className:t,children:r}=e;return(0,l.jsx)("div",{id:s,className:(0,a.list)("block m-auto w-full",t),children:r})},i=e=>{let{id:s,className:t,children:r}=e;return(0,l.jsx)("div",{id:s,className:(0,a.list)("w-[96%] max-w-[1280px] mx-auto",t),children:r})},o=e=>{let{id:s,className:t,children:r}=e;return(0,l.jsx)("div",{id:s,className:(0,a.list)("flex flex-wrap",t),children:r})},c=e=>{let{id:s,className:t,children:r}=e;return(0,l.jsx)("div",{id:s,className:(0,a.list)("flex flex-col",t),children:r})},d=e=>{let{id:s,className:t,style:r,children:n}=e;return(0,l.jsx)("div",{id:s,className:(0,a.list)("grid",t),style:r,children:n})},x=e=>{let{id:s,className:t,width:r=24,children:n}=e;return(0,l.jsx)("div",{id:s,className:(0,a.list)("bg-inherit rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center p-4",t),style:{width:"".concat(r,"px")},children:n})},m=e=>{let{width:s=32}=e,t=s+"px";return(0,l.jsx)("div",{className:"loading absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",style:{width:t,height:t},children:(0,l.jsx)("img",{src:"/img/gif/loading.gif",width:t,height:t,draggable:"false",alt:""})})}},7251:function(e,s,t){"use strict";t.d(s,{m:function(){return o}});var l=t(7437),a=t(2869),r=t(2265),n=t(2950),i=t(8446);function o(e){let{online:s=!1}=e,[t,o]=(0,r.useState)(!1),[c,d]=(0,r.useState)(!0),[x,m]=(0,r.useState)(!1),[u,h]=(0,r.useState)(null),[p,f]=(0,r.useState)(null),[j,g]=(0,r.useState)(!1),[b,N]=(0,r.useState)("ENVIAR"),[v,y]=(0,r.useState)(""),[w,k]=(0,r.useState)(""),S=(0,r.useRef)(null),A="lote1",E={lote1:{base:"590,00",discount:"450,00"},lote2:{base:"550,00",discount:"690,00"},lote3:{base:"790,00",discount:"650,00"}},O={online:"https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z3O55",presencial:{discount:"https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9ZH000",base:"https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z355J"}},C={default:"ENVIAR",retry:"Tentar novamente",loading:(0,l.jsx)("span",{className:"spinner w-8 h-8 mx-auto"}),success:(0,l.jsx)("span",{className:"checkmark w-8 h-8 mx-auto"})},T={error_no_input:(0,l.jsx)("span",{className:"text-red-500 text-center",children:"Parece que h\xe1 campos em branco, tente novamente."}),server_error:(0,l.jsx)("span",{className:"text-orange-500 text-center font-light text-sm",children:"Servidor indispon\xedvel no momento, tente novamente mais tarde."}),invalid_email:(0,l.jsx)("span",{className:"text-orange-500 text-center font-light text-sm",children:"N\xe3o foi poss\xedvel validar o email inserido, verifique e tente novamente."})};return(0,r.useEffect)(()=>{let e=e=>{var s;return!(null===(s=S.current)||void 0===s?void 0:s.contains(e.target))&&m(!1)};return x&&document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[x]),(0,r.useEffect)(()=>{f(null),d(!0)},[w,v]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"grad-text font-bold mb-2 relative text-center text-2xl",children:"GARANTA SUA PARTICIPA\xc7\xc3O"}),(0,l.jsx)("div",{className:"relative z-30 my-8",children:(0,l.jsxs)(a.rj,{className:(s?"grid-cols-1":"grid-cols-2")+" max-[820px]:!grid-cols-1 w-max max-[820px]:!w-full gap-4 mx-auto",children:[s&&(0,l.jsx)(a.W2,{id:"online",className:"w-full max-w-96 justify-self-center relative",children:(0,l.jsxs)("div",{className:"flex flex-col items-center p-4 border-t-2 border-sky-600 rounded-2xl bg-sky-900 shadow-lg h-max w-full relative",children:[(0,l.jsxs)(a.rj,{className:"w-full mb-4 grid-cols-2",children:[(0,l.jsxs)(a.im,{className:"items-center justify-start flex-nowrap",children:[(0,l.jsx)("div",{className:"w-10 h-10 mr-2 bg-primary-500 rounded-full flex items-center justify-center shadow-md",children:(0,l.jsx)("i",{className:"fa-solid fa-globe text-2xl text-sky-100","aria-hidden":"true"})}),(0,l.jsx)("h2",{className:"text-sky-100 font-bold",style:{fontSize:"150%"},children:"ONLINE"})]}),(0,l.jsx)("span",{className:"bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit w-fit justify-self-end max-[1024px]:my-4 text-center",children:"PRE\xc7O \xdaNICO"})]}),(0,l.jsxs)(a.W2,{className:"p-8 rounded-lg border-2 border-sky-700 items-center",children:[(0,l.jsxs)(n.aV,{className:"text-left checklist",children:[(0,l.jsx)("li",{className:"include",children:"Acesso ao evento AO VIVO"}),(0,l.jsx)("li",{className:"include",children:"3 meses de acesso ao conte\xfado gravado, planilhas e material de apoio"})]}),(0,l.jsx)("div",{className:"divider"}),(0,l.jsx)("h1",{className:"text-4xl font-semibold my-4",children:"R$249,90"}),(0,l.jsx)("a",{href:O.online,className:"font-bold text-xl max-[1024px]:text-base shadow-md w-fit py-2 px-4 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center",children:"GARANTA SUA VAGA"})]})]})}),!s&&(0,l.jsx)(a.W2,{id:"presencial",className:"w-full max-w-96 justify-self-center relative",children:(0,l.jsxs)("div",{className:"flex flex-col p-4 border-t-2 border-sky-800 rounded-2xl bg-primary-900 shadow-xl h-max w-full overflow-hidden",children:[(0,l.jsxs)(a.rj,{className:"w-full mb-4 grid-cols-2",children:[(0,l.jsxs)(a.im,{className:"items-center justify-start flex-nowrap",children:[(0,l.jsx)("div",{className:"w-10 h-10 min-w-10 mr-2 bg-primary-500 rounded-full flex items-center justify-center shadow-md",children:(0,l.jsx)("i",{className:"fa-solid fa-ticket text-2xl text-sky-100","aria-hidden":"true"})}),(0,l.jsx)("h2",{className:"text-sky-100 font-bold",style:{fontSize:"150%"},children:"PARTICIPANTE"})]}),(0,l.jsx)("span",{className:"bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit w-fit justify-self-end max-[1024px]:my-4",children:"1\xba LOTE"})]}),(0,l.jsx)(a.rj,{className:"grid-cols-2 w-[200%]",children:t?(0,l.jsx)(a.W2,{className:"items-center rounded-lg border-2 border-sky-900 w-full",children:(0,l.jsxs)(a.W2,{className:"w-full p-8",children:[(0,l.jsxs)(a.W2,{className:"text-center items-center w-[96%]",children:[(0,l.jsx)("h2",{className:"grad-text font-bold mb-2 relative z-40",children:"GARANTA SEU DESCONTO"}),(0,l.jsx)("p",{className:"text-xs font-light",children:"Informe seus dados para que possamos confirmar sua assinatura ou participa\xe7\xe3o e disponibilizar seu desconto exclusivo!"})]}),(0,l.jsx)("div",{className:"divider"}),(0,l.jsxs)("form",{id:"compra-ingresso",onSubmit:e=>e.preventDefault(),children:[(0,l.jsxs)(a.W2,{children:[(0,l.jsx)(a.W2,{className:"my-2",children:(0,l.jsx)(i.k5,{type:"text",id:"user_name",value:w,onChange:e=>k(e.target.value),label:"Nome completo",className:"text-white !outline-none"})}),(0,l.jsx)(a.W2,{className:"my-2",children:(0,l.jsx)(i.k5,{type:"email",id:"user_email",value:v,onChange:e=>y(e.target.value),label:"Email",className:"text-white !outline-none"})})]}),(0,l.jsx)("button",{onClick:()=>c?function(){if(""==v||""==w){f(T.error_no_input);return}f(null),N(C.loading),fetch("https://palmilhando.com.br/api/",{headers:{"Content-Type":"application/json"},method:"post",body:JSON.stringify({action:"user_validate",data:{name:w,email:v}})}).then(e=>e.json()).then(e=>{if(null==e?void 0:e.ok){let s=e.data;N(C.success),g(e.data.member||e.data.atendee),s.member?h("Desconto Palmilhando\xae"):s.atendee?h("Desconto Participante 2023"):h(null),d(!1)}else N(C.retry),f(T.server_error)})}():null,className:"block font-semibold text-lg shadow-md w-full py-2 px-8 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center mx-auto relative h-12",children:c?b:(0,l.jsx)("i",{className:"fa-solid fa-check","aria-hidden":"true"})}),!c&&(0,l.jsx)("a",{href:j?O.presencial.discount:O.presencial.base,className:"block font-semibold text-lg shadow-md w-full py-2 px-8 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center mx-auto relative h-12",children:"RESERVE SUA VAGA"}),(0,l.jsx)("span",{onClick:()=>o(!1),className:"underline underline-offset-2 text-center cursor-pointer",children:"Voltar"}),(0,l.jsx)("div",{className:"my-2",children:p})]})]})}):(0,l.jsxs)(a.W2,{className:"p-4 rounded-lg border-2 border-sky-900 items-center w-full",children:[(0,l.jsxs)(n.aV,{className:"text-left checklist p-2 mb-2",children:[(0,l.jsx)("li",{className:"include",children:"Acesso presencial ao evento"}),(0,l.jsx)("li",{className:"include",children:"3 meses de acesso ao conte\xfado gravado, planilhas e material de apoio"}),(0,l.jsx)("li",{className:"include",children:"Kit de brindes para participantes"}),(0,l.jsx)("li",{className:"include",children:"Happy hour"})]}),(0,l.jsx)("div",{className:"divider"}),(0,l.jsxs)("div",{className:"w-full my-4 text-center",children:[(0,l.jsxs)("span",{children:[(0,l.jsxs)("span",{className:"text-3xl font-semibold",children:["R$",E[A].base]}),(0,l.jsx)("span",{children:"Pre\xe7o padr\xe3o"})]}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{children:[(0,l.jsxs)("span",{className:"text-3xl font-semibold grad-text",children:["R$",E[A].discount]}),(0,l.jsxs)("span",{className:"inline-flex items-center relative",children:[(0,l.jsx)("span",{className:"grad-text",children:u||"Desconto exclusivo"}),(0,l.jsx)("i",{className:"fa-solid fa-circle-question ml-2 cursor-pointer text-orange-400",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),"aria-hidden":"true"}),x&&(0,l.jsx)("span",{ref:S,className:"bg-slate-900 bg-opacity-95 backdrop-blur-sm absolute w-64 h-max bottom-8 left-[calc(-50%-12px)] translate-x-1/2 text-left text-sm p-6 rounded-lg shadow-md z-50 max-[820px]:-left-full",children:"Membros do Palmilhando\xae e participantes do evento Palmilhas e Ci\xeancia Aplicada 2023 recebem um desconto especial na reserva dos ingressos. Selecione a op\xe7\xe3o de garantir seu desconto abaixo para confirmarmos sua assinatura ou presen\xe7a e garantir seu desconto exclusivo!"})]})]})]}),(0,l.jsx)("a",{href:j?O.presencial.discount:O.presencial.base,className:"font-bold text-xl max-[1024px]:text-base shadow-md w-full py-2 rounded-full bg-primary-500 hover:brightness-95 duration-200 my-2 text-center",children:"RESERVE SUA VAGA"}),(0,l.jsx)("a",{className:"font-bold text-xl max-[1024px]:text-base shadow-md w-full py-2 rounded-full bg-cyan-700 hover:brightness-95 duration-200 my-2 text-center cursor-pointer",onClick:()=>o(!0),children:"GARANTA SEU DESCONTO"})]})})]})}),!s&&(0,l.jsx)(a.W2,{id:"vip",className:"w-full max-w-96 justify-self-center relative",children:(0,l.jsxs)("div",{className:"flex flex-col items-center p-4 border-t-2 border-sky-800 rounded-2xl bg-[#121e31] shadow-lg h-max w-full relative brightness-90 opacity-50 grayscale",children:[(0,l.jsxs)(a.rj,{className:"w-full mb-4 grid-cols-2",children:[(0,l.jsxs)(a.im,{className:"items-center justify-start flex-nowrap",children:[(0,l.jsx)("div",{className:"w-10 h-10 min-w-10 mr-2 bg-sky-100 rounded-full flex items-center justify-center shadow-md",children:(0,l.jsx)("i",{className:"fa-solid fa-gem text-2xl grad-text","aria-hidden":"true"})}),(0,l.jsx)("h2",{className:"grad-text font-bold min-w-max",style:{fontSize:"150%"},children:"ACESSO VIP"})]}),(0,l.jsx)("span",{className:"bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit w-min max-[1024px]:my-4 justify-self-end",children:"ESGOTADO"})]}),(0,l.jsxs)(a.W2,{className:"p-8 rounded-lg border-2 border-sky-900 items-center",children:[(0,l.jsxs)(n.aV,{className:"text-left checklist select-none",children:[(0,l.jsx)("li",{className:"include",children:"Acesso presencial ao evento"}),(0,l.jsx)("li",{className:"include",children:"3 meses de acesso ao conte\xfado gravado, planilhas e material de apoio"}),(0,l.jsx)("li",{className:"include",children:"Kit de brindes para participantes"}),(0,l.jsx)("li",{className:"include",children:"Happy hour"}),(0,l.jsx)("li",{className:"include",children:"Curso pr\xe1tico pr\xe9-evento com o Andr\xe9 e o Clayton"})]}),(0,l.jsx)("div",{className:"divider"}),(0,l.jsx)("h1",{className:"text-4xl font-semibold my-4",children:"R$1200,00"}),(0,l.jsx)("span",{className:"text-center text-sm font-light",children:"ESGOTADO"})]})]})})]})})]})}t(9415)},2950:function(e,s,t){"use strict";t.d(s,{aV:function(){return c},zF:function(){return i},zx:function(){return o}});var l=t(7437),a=t(2265),r=t(12);let n=e=>{let{id:s,className:t,fill:a="#1E3050",width:r=12}=e;return(0,l.jsx)("svg",{id:s,className:"caret "+t,fill:a,version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 12 12",style:{enableBackground:"new 0 0 12 12"},xmlSpace:"preserve",width:r+"px",height:r+"px",children:(0,l.jsx)("path",{d:"M9.2,6.8c0.5-0.5,0.5-1.2,0-1.7L4.5,0.5C4.2,0.2,3.7,0.1,3.2,0.3S2.5,0.9,2.5,1.3v9.3c0,0.5,0.3,0.9,0.7,1.1s0.9,0.1,1.3-0.3L9.2,6.8L9.2,6.8L9.2,6.8L9.2,6.8z"})})},i=e=>{let{id:s,className:t,title:i,children:o}=e,c=(0,a.useRef)(null);return(0,l.jsxs)("div",{className:(0,r.list)("collapsible bg-slate-200 cor-4 rounded-md overflow-hidden shadow-sm mb-2 p-4 cursor-pointer hover:bg-slate-50 light",t),ref:c,onClick:()=>{var e,s,t,l=document.querySelectorAll(".collapsible .content");function a(e){e.parentElement.style.maxHeight?e.parentElement.style.maxHeight=null:e.parentElement.style.maxHeight=3*e.scrollHeight+"px"}(null===(e=c.current)||void 0===e?void 0:e.classList.contains("active"))||function(){for(let e of l)e.parentElement.classList.contains("active")&&(e.parentElement.classList.remove("active"),a(e))}(),null===(s=c.current)||void 0===s||s.classList.toggle("active"),a(null===(t=c.current)||void 0===t?void 0:t.lastElementChild)},id:s,children:[(0,l.jsxs)("div",{className:"title flex justify-between items-center",children:[(0,l.jsx)("span",{className:"mr-4 font-bold",children:i}),(0,l.jsx)(n,{})]}),(0,l.jsx)("div",{className:"content mt-4 pb-4",children:o})]})},o=e=>{let{id:s,className:t,disabled:a,onClick:n,children:i}=e;return(0,l.jsx)("button",{id:s,className:(0,r.list)("border border-cyan-200 rounded-xl py-2 px-8 grad-1 font-semibold","".concat(a?"saturate-0 opacity-50 cursor-not-allowed":"hover:scale-[101%] hover:brightness-110 hover:translate-y-[-1px] duration-100 ease-out cursor-pointer"),t),onClick:n,children:i})},c=e=>{let{id:s,className:t,children:a}=e;return(0,l.jsx)("ul",{id:s,className:(0,r.list)("my-list",t),children:a})}},12:function(e,s,t){var l=t(12);l.list=function(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return s.join(" ").trim()},l.prefix=(e,s)=>{var t=s.split(" ");for(let s=0;s<t.length;s++)t[s]=e+t[s];return t.join(" ").trim()},l.url=e=>"url('/".concat(e||"placeholder.webp","')"),l.scrollToCenter=e=>{var s="string"==typeof e?document.querySelector(e):e;null==s||s.scrollIntoView({block:"center",behavior:"smooth"})},l.scrollToTop=e=>{var s="string"==typeof e?document.querySelector(e):e;null==s||s.scrollIntoView({block:"start",behavior:"smooth"})},l.log=function(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0;if(s){if("string"!=typeof e)return console.log(e);switch(t){case"success":return console.log("%c☑ - ".concat(e),"color: #B0C4DE");case"info":return console.log("%c⚠ - ".concat(e),"color: #F0E68C");case"error":return console.error(e);case"warning":return console.warn(e);default:return console.log(e)}}},l.getIp=async function(){var e=await fetch("https://api.ipify.org?format=json");return(await e.json()).ip},l.post=async function(e,s){var t=await fetch(e,{headers:{"Content-Type":"application/json"},method:"post",body:JSON.stringify(s)});return await t.json()},l.pageView=function(){fetch("https://api.ipify.org/?format=json").then(e=>e.json()).then(e=>fetch("https://palmilhando.com.br/api/",{headers:{"Content-Type":"application/json"},method:"post",body:JSON.stringify({action:"page_view",data:{ip:e.ip,origin:window.location.href}})}))}},9843:function(){},3431:function(){},9415:function(){}}]);