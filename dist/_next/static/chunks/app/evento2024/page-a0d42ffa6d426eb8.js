(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[792],{6804:function(e,s,a){Promise.resolve().then(a.bind(a,2129))},2129:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return m}});var t=a(7437),l=a(2869),r=a(2265);function i(e){let{paused:s=!1,timestamp:a="2024-06-05T23:59:00.000-03:00",isMobile:i=!1}=e,n=(0,r.useMemo)(()=>new Date(a).getTime(),[]),[o,c]=(0,r.useState)({d:"00",h:"00",m:"00",s:"00"});function d(){var e=n-(new Date).getTime();if(!s&&e>0){let s=e=>(e<10&&(e="0"+e),e);c({s:s(Math.floor(e%6e4/1e3)),m:s(Math.floor(e%36e5/6e4)),h:s(Math.floor(e%864e5/36e5)),d:s(Math.floor(e/864e5))})}}return(0,r.useEffect)(()=>{let e=setInterval(d,1e3);return()=>clearInterval(e)},[]),(0,r.useMemo)(()=>(0,t.jsx)("div",{id:"countdown",className:"fixed top-0 w-full max-[820px]:!h-32 h-20 bg-[var(--cor-4)] flex items-center border-b-2 border-sky-800 rounded-bl-3xl rounded-br-3xl z-50 slide-down overflow-hidden",children:(0,t.jsxs)(l.rj,{className:"justify-center items-center m-auto grid-cols-2 max-[820px]:!grid-cols-1 h-full gap-1",children:[(0,t.jsxs)("span",{className:"text-center mx-4",children:[(0,t.jsx)("span",{className:"font-bold my-1",children:"Garanta seu ingresso no 1\xba lote"}),(0,t.jsx)("span",{className:"font-light text-xs",children:"Tempo restante:"})]}),(0,t.jsxs)(l.rj,{className:"grid-cols-4",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950",children:[(0,t.jsx)("span",{className:"text-xl font-extrabold max-[820px]:!text-lg",children:o.d}),(0,t.jsx)("span",{className:"text-xs font-light",children:"DIAS"})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950",children:[(0,t.jsx)("span",{className:"text-xl font-extrabold max-[820px]:!text-lg",children:o.h}),(0,t.jsx)("span",{className:"text-xs font-light",children:"HORAS"})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950",children:[(0,t.jsx)("span",{className:"text-xl font-extrabold max-[820px]:!text-lg",children:o.m}),(0,t.jsx)("span",{className:"text-xs font-light",children:"MINUTOS"})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950",children:[(0,t.jsx)("span",{className:"text-xl font-extrabold max-[820px]:!text-lg",children:o.s}),(0,t.jsx)("span",{className:"text-xs font-light",children:"SEGUNDOS"})]})]})]})}),[i,o])}var n=a(2950),o=a(8446),c=a(12);function d(){let[e,s]=(0,r.useState)(!1),[a,i]=(0,r.useState)(!0),[d,m]=(0,r.useState)(!1),[x,u]=(0,r.useState)(null),[p,h]=(0,r.useState)(null),[f,j]=(0,r.useState)(!1),[g,v]=(0,r.useState)(null),[b,N]=(0,r.useState)("ENVIAR"),[w,y]=(0,r.useState)(""),[E,S]=(0,r.useState)(""),[A,k]=(0,r.useState)(null),C="https://palmilhasterapeuticas.com.br/api/",O=(0,r.useMemo)(()=>({lote1:{base:"590,00",discount:"450,00"},lote2:{base:"550,00",discount:"690,00"},lote3:{base:"790,00",discount:"650,00"}}),[]),P=(0,r.useMemo)(()=>({vip:"https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z3555",online:"https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z3O55",presencial:{discount:"https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9ZH000",base:"https://secure.doppus.com/pay/PBOJJ9ZMBOJJ9ZG9Z355J"}}),[]),M="lote1",I=(0,r.useMemo)(()=>({error_no_input:(0,t.jsx)("span",{className:"text-red-500 text-center",children:"Parece que h\xe1 campos em branco, tente novamente."}),server_error:(0,t.jsx)("span",{className:"text-orange-500 text-center font-light text-sm",children:"Servidor indispon\xedvel no momento, tente novamente mais tarde."}),invalid_email:(0,t.jsx)("span",{className:"text-orange-500 text-center font-light text-sm",children:"N\xe3o foi poss\xedvel validar o email inserido, verifique e tente novamente."})}),[]),T=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),R=(0,r.useRef)(null);async function F(e,s){(0,c.log)("Fetching data from server...","info"),await fetch(C+"evento2024/integration/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({action:e,data:s})}).then(e=>e.json()).then(e=>v(e)).catch(e=>{(0,c.log)(e),h(I.server_error),N("ENVIAR")})}async function _(){if(""==w||""==E){h(I.error_no_input);return}if(!T(w)){h(I.invalid_email);return}F("verify_user",{user_mail:w,user_name:E,user_ip:A}),h(null),N((0,t.jsx)(l.gb,{width:24}))}async function z(){await fetch("https://api.ipify.org/?format=json").then(e=>e.json()).then(e=>k(e.ip))}return(0,r.useEffect)(()=>{if(A){let e=JSON.stringify({action:"page_view",data:{user_ip:A}}),s=new XMLHttpRequest;s.open("POST",C+"evento2024/integration/"),s.setRequestHeader("Content-type","application/json"),s.send(e)}else z()},[A]),(0,r.useEffect)(()=>{a&&g&&((0,c.log)(g),j(g.discount_elegible),g.valid_member?u("Desconto Palmilhando\xae"):g.valid_atendee?u("Desconto Participante 2023"):u(null),(0,c.log)("Verification complete.","success"),i(!1)),N("ENVIAR")},[g]),(0,r.useEffect)(()=>{let e=e=>{var s;return(null===(s=R.current)||void 0===s?void 0:s.contains(e.target))?null:m(!1)};return d&&document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[d]),(0,r.useEffect)(()=>{h(null),i(!0)},[E,w]),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"grad-text font-bold mb-2 relative text-center text-2xl",children:"GARANTA SUA PARTICIPA\xc7\xc3O"}),(0,t.jsx)("div",{className:"relative z-10 my-8",children:(0,t.jsxs)(l.rj,{className:"grid-cols-3 max-[820px]:!grid-cols-1 w-full gap-4",children:[(0,t.jsx)(l.W2,{id:"online",className:"w-full relative",children:(0,t.jsxs)("div",{className:"flex flex-col items-center p-4 border-t-2 border-sky-600 rounded-2xl bg-sky-900 shadow-lg h-max w-full relative",children:[(0,t.jsxs)(l.rj,{className:"w-full mb-4 grid-cols-2",children:[(0,t.jsxs)(l.im,{className:"items-center justify-start flex-nowrap",children:[(0,t.jsx)("div",{className:"w-10 h-10 mr-2 bg-primary-500 rounded-full flex items-center justify-center shadow-md",children:(0,t.jsx)("i",{className:"fa-solid fa-globe text-2xl text-sky-100","aria-hidden":"true"})}),(0,t.jsx)("h2",{className:"text-sky-100 font-bold",style:{fontSize:"150%"},children:"ONLINE"})]}),(0,t.jsx)("span",{className:"bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit w-fit justify-self-end max-[1024px]:my-4 text-center",children:"PRE\xc7O \xdaNICO"})]}),(0,t.jsxs)(l.W2,{className:"p-8 rounded-lg border-2 border-sky-700 items-center",children:[(0,t.jsxs)(n.aV,{className:"text-left checklist",children:[(0,t.jsx)("li",{className:"include",children:"Acesso ao evento AO VIVO"}),(0,t.jsx)("li",{className:"include",children:"3 meses de acesso ao conte\xfado gravado, planilhas e material de apoio"})]}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsx)("h1",{className:"text-4xl font-semibold my-4",children:"R$249,90"}),(0,t.jsx)("a",{href:P.online,className:"font-bold text-xl max-[1024px]:text-base shadow-md w-fit py-2 px-4 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center",children:"GARANTA SUA VAGA"})]})]})}),(0,t.jsx)(l.W2,{id:"presencial",className:"w-full relative",children:(0,t.jsxs)("div",{className:"flex flex-col p-4 border-t-2 border-sky-800 rounded-2xl bg-primary-900 shadow-xl h-max w-full overflow-hidden",children:[(0,t.jsxs)(l.rj,{className:"w-full mb-4 grid-cols-2",children:[(0,t.jsxs)(l.im,{className:"items-center justify-start flex-nowrap",children:[(0,t.jsx)("div",{className:"w-10 h-10 min-w-10 mr-2 bg-primary-500 rounded-full flex items-center justify-center shadow-md",children:(0,t.jsx)("i",{className:"fa-solid fa-ticket text-2xl text-sky-100","aria-hidden":"true"})}),(0,t.jsx)("h2",{className:"text-sky-100 font-bold",style:{fontSize:"150%"},children:"PRESENCIAL"})]}),(0,t.jsx)("span",{className:"bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit w-fit justify-self-end max-[1024px]:my-4",children:"1\xba LOTE"})]}),(0,t.jsx)(l.rj,{className:"grid-cols-2 w-[200%]",children:e?(0,t.jsx)(l.W2,{className:"items-center rounded-lg border-2 border-sky-900 w-full",children:(0,t.jsxs)(l.W2,{className:"w-full p-8",children:[(0,t.jsxs)(l.W2,{className:"text-center items-center w-[96%]",children:[(0,t.jsx)("h2",{className:"grad-text font-bold mb-2 relative z-40",children:"GARANTA SEU DESCONTO"}),(0,t.jsx)("p",{className:"text-xs font-light",children:"Informe seus dados para que possamos confirmar sua assinatura ou participa\xe7\xe3o e disponibilizar seu desconto exclusivo!"})]}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsxs)("form",{id:"compra-ingresso",onSubmit:e=>e.preventDefault(),children:[(0,t.jsxs)(l.W2,{children:[(0,t.jsx)(l.W2,{className:"my-2",children:(0,t.jsx)(o.k5,{type:"text",id:"user_name",value:E,onChange:e=>S(e.target.value),label:"Nome completo",className:"text-white !outline-none"})}),(0,t.jsx)(l.W2,{className:"my-2",children:(0,t.jsx)(o.k5,{type:"email",id:"user_email",value:w,onChange:e=>y(e.target.value),label:"Email",className:"text-white !outline-none"})})]}),(0,t.jsx)("button",{onClick:()=>a?_():null,className:"block font-semibold text-lg shadow-md w-full py-2 px-8 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center mx-auto relative h-12",children:a?b:(0,t.jsx)("i",{className:"fa-solid fa-check","aria-hidden":"true"})}),!a&&(0,t.jsx)("a",{href:f?P.presencial.discount:P.presencial.base,className:"block font-semibold text-lg shadow-md w-full py-2 px-8 rounded-full max-[820px]:max-w-[340px] bg-primary-500 hover:brightness-95 duration-200 my-4 text-center mx-auto relative h-12",children:"RESERVE SUA VAGA"}),(0,t.jsx)("span",{onClick:()=>s(!1),className:"underline underline-offset-2 text-center cursor-pointer",children:"Voltar"}),(0,t.jsx)("div",{className:"my-2",children:p})]})]})}):(0,t.jsxs)(l.W2,{className:"p-4 rounded-lg border-2 border-sky-900 items-center w-full",children:[(0,t.jsxs)(n.aV,{className:"text-left checklist p-2 mb-2",children:[(0,t.jsx)("li",{className:"include",children:"Acesso presencial ao evento"}),(0,t.jsx)("li",{className:"include",children:"3 meses de acesso ao conte\xfado gravado, planilhas e material de apoio"}),(0,t.jsx)("li",{className:"include",children:"Kit de brindes para participantes"}),(0,t.jsx)("li",{className:"include",children:"Happy hour"})]}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsxs)("div",{className:"w-full my-4 text-center",children:[(0,t.jsxs)("span",{children:[(0,t.jsxs)("span",{className:"text-3xl font-semibold",children:["R$",O[M].base]}),(0,t.jsx)("span",{children:"Pre\xe7o padr\xe3o"})]}),(0,t.jsx)("br",{}),(0,t.jsxs)("span",{children:[(0,t.jsxs)("span",{className:"text-3xl font-semibold grad-text",children:["R$",O[M].discount]}),(0,t.jsxs)("span",{className:"inline-flex items-center relative",children:[(0,t.jsx)("span",{className:"grad-text",children:x||"Desconto exclusivo"}),(0,t.jsx)("i",{className:"fa-solid fa-circle-question ml-2 cursor-pointer text-orange-400",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),"aria-hidden":"true"}),d&&(0,t.jsx)("span",{ref:R,className:"bg-slate-900 bg-opacity-95 backdrop-blur-sm absolute w-64 h-max bottom-8 left-[calc(-50%-12px)] translate-x-1/2 text-left text-sm p-6 rounded-lg shadow-md z-50 max-[820px]:-left-full",children:"Membros do Palmilhando\xae e participantes do evento Palmilhas e Ci\xeancia Aplicada 2023 recebem um desconto especial na reserva dos ingressos. Selecione a op\xe7\xe3o de garantir seu desconto abaixo para confirmarmos sua assinatura ou presen\xe7a e garantir seu desconto exclusivo!"})]})]})]}),(0,t.jsx)("a",{href:f?P.presencial.discount:P.presencial.base,className:"font-bold text-xl max-[1024px]:text-base shadow-md w-full py-2 rounded-full bg-primary-500 hover:brightness-95 duration-200 my-2 text-center",children:"RESERVE SUA VAGA"}),(0,t.jsx)("a",{className:"font-bold text-xl max-[1024px]:text-base shadow-md w-full py-2 rounded-full bg-cyan-700 hover:brightness-95 duration-200 my-2 text-center cursor-pointer",onClick:()=>s(!0),children:"GARANTA SEU DESCONTO"})]})})]})}),(0,t.jsx)(l.W2,{id:"vip",className:"w-full relative",children:(0,t.jsxs)("div",{className:"flex flex-col items-center p-4 border-t-2 border-sky-800 rounded-2xl bg-[#121e31] shadow-lg h-max w-full relative brightness-90 opacity-50 grayscale",children:[(0,t.jsxs)(l.rj,{className:"w-full mb-4 grid-cols-2",children:[(0,t.jsxs)(l.im,{className:"items-center justify-start flex-nowrap",children:[(0,t.jsx)("div",{className:"w-10 h-10 min-w-10 mr-2 bg-sky-100 rounded-full flex items-center justify-center shadow-md",children:(0,t.jsx)("i",{className:"fa-solid fa-gem text-2xl grad-text","aria-hidden":"true"})}),(0,t.jsx)("h2",{className:"grad-text font-bold min-w-max",style:{fontSize:"150%"},children:"ACESSO VIP"})]}),(0,t.jsx)("span",{className:"bg-sky-100 rounded-full text-sky-800 px-4 py-1 h-fit w-min max-[1024px]:my-4 justify-self-end",children:"ESGOTADO"})]}),(0,t.jsxs)(l.W2,{className:"p-8 rounded-lg border-2 border-sky-900 items-center",children:[(0,t.jsxs)(n.aV,{className:"text-left checklist select-none",children:[(0,t.jsx)("li",{className:"include",children:"Acesso presencial ao evento"}),(0,t.jsx)("li",{className:"include",children:"3 meses de acesso ao conte\xfado gravado, planilhas e material de apoio"}),(0,t.jsx)("li",{className:"include",children:"Kit de brindes para participantes"}),(0,t.jsx)("li",{className:"include",children:"Happy hour"}),(0,t.jsx)("li",{className:"include",children:"Curso pr\xe1tico pr\xe9-evento com o Andr\xe9 e o Clayton"})]}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsx)("h1",{className:"text-4xl font-semibold my-4",children:"R$1200,00"}),(0,t.jsx)("span",{className:"text-center text-sm font-light",children:"ESGOTADO"})]})]})})]})})]})}function m(){let e=e=>document.querySelector(e),[s,a]=(0,r.useState)(!0),[o,m]=(0,r.useState)(null),[x,u]=(0,r.useState)(null),[p,h]=(0,r.useState)(!1),f=(0,r.useMemo)(()=>o<=820,[o]),j="https://palmilhasterapeuticas.com.br/",g=(0,r.useMemo)(()=>j+"img/default_user.jpg",[]),v=(0,r.useRef)(null),b=(0,r.useRef)(null);(0,r.useEffect)(()=>{var e,s,a,t,l,r;e=window,s=document,a="script",e[t="dataLayer"]=e[t]||[],e[t].push({"gtm.start":(new Date).getTime(),event:"gtm.js"}),l=s.getElementsByTagName(a)[0],(r=s.createElement(a)).async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4",l.parentNode.insertBefore(r,l),document.title="Evento Palmilhas e Ci\xeancia Aplicada 2024"},[]),(0,r.useEffect)(()=>{function e(){m(window.visualViewport.width)}return e(),window.visualViewport.addEventListener("resize",e),()=>window.visualViewport.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>{let e=["wheel","scroll","keydown"],s=["Space","ArrowUp","ArrowDown"],a=e=>{var s;return(null===(s=b.current)||void 0===s?void 0:s.contains(e.target))?null:h(!1)},t=a=>{e.includes(a.type)&&("keydown"===a.type?"Escape"===a.code?h(!1):s.includes(a.code)&&a.preventDefault():a.preventDefault())};return p&&(document.addEventListener("mousedown",a),e.forEach(e=>document.addEventListener(e,t,{passive:!1}))),()=>{document.removeEventListener("mousedown",a),e.forEach(e=>document.removeEventListener(e,t,{passive:!1}))}},[p]);let N=(0,t.jsx)("iframe",{className:"outline-none aspect-video w-full max-[820px]:!w-screen rounded-lg relative z-50",src:"https://www.youtube.com/embed/ELc7U9NgONY",allow:"autoplay;picture-in-picture;web-share",allowFullScreen:!0}),w=e=>{let{children:s="Teremos mais informa\xe7\xf5es em breve. Fique ligado!",src:a=g,name:l="Palestrante n\xe3o confirmado",occupation:r="?",theme:i="Tema da palestra"}=e;return(0,t.jsx)("div",{className:"w-full flex items-start justify-center",children:(0,t.jsx)("div",{className:"p-2 rounded-2xl shadow-md bg-[#121e31] border-t-2 border-sky-900 w-full h-full",children:(0,t.jsxs)("div",{className:"flex flex-col justify-between relative duration-300 ease-out",children:[(0,t.jsxs)("div",{className:"speaker-header w-full flex items-center justify-start p-2 max-[820px]:!p-0",children:[(0,t.jsx)("div",{className:"speaker-profile w-24 min-w-24 aspect-square left-0 bottom-0 rounded-full mr-4 bg-center bg-cover",style:{backgroundImage:"url('".concat(a,"')")}}),(0,t.jsxs)("div",{className:"speaker-title",children:[(0,t.jsx)("h2",{className:"font-bold text-lg mb-1 max-[820px]:!text-base",children:i}),(0,t.jsx)("h2",{className:"font-normal text-sm",children:l}),(0,t.jsx)("h3",{className:"italic opacity-80 text-xs",children:r})]})]}),(0,t.jsxs)("div",{className:"speaker-description duration-300 ease-out p-2",children:[(0,t.jsx)("div",{className:"divider left"}),(0,t.jsx)("div",{children:s})]})]})})})},y=()=>(0,t.jsx)("div",{className:"block w-max py-4 px-8 my-8 mx-auto rounded-full shadow-lg bg-sky-700 grad-alt cursor-pointer hover:brightness-105 hover:-scale-y-[5px] duration-150 ease-out",onClick:()=>(0,c.scrollToTop)("#evt-valor"),children:(0,t.jsx)("span",{className:"m-auto text-center text-white font-bold",children:"QUERO GARANTIR MINHA VAGA"})});return(0,r.useEffect)(()=>a(!1),[]),(0,t.jsxs)("main",{className:"bg-[radial-gradient(circle_at_center,#1E3050,#121e31)]",children:[s&&(0,t.jsx)("div",{className:"fixed w-screen h-screen bg-primary-900 z-[999]",children:(0,t.jsx)(l.gb,{width:32})}),(0,t.jsx)(i,{isMobile:f}),(0,t.jsxs)(l.$0,{id:"evt-header",className:"pt-48 pb-12 flex items-center overflow-hidden bg-[var(--cor-4)]",children:[(0,t.jsx)("div",{className:"absolute top-0 left-0 w-screen h-auto overflow-clip mix-blend-soft-light opacity-75 z-10 max-[820px]:!h-full",children:(0,t.jsx)("video",{autoPlay:!0,muted:!0,playsInline:!0,loop:!0,className:"inline-block align-baseline w-full relative max-[820px]:!h-full max-[820px]:!w-full object-cover bg-cover",children:(0,t.jsx)("source",{src:j+"img/evt_banner.webm"})})}),(0,t.jsx)(l.VY,{className:"relative z-20",children:(0,t.jsx)(l.If,{className:"flex flex-col justify-center items-center text-center",children:(0,t.jsxs)(l.W2,{className:"h-full w-[48rem] max-[1024px]:w-[80%] max-[426px]:w-full items-center justify-center",children:[(0,t.jsx)(l.W2,{className:"w-1/2",children:(0,t.jsx)("img",{src:j+"img/svg/encontro_logo_3.svg",alt:"",draggable:"false"})}),(0,t.jsx)("div",{className:"divider"}),(0,t.jsx)(l.W2,{className:"my-4",children:(0,t.jsx)("p",{className:"text-3xl",children:"DOMINE T\xc9CNICAS E APRIMORE O SEU RACIOC\xcdNIO CL\xcdNICO SOBRE PALMILHAS TERAP\xcaUTICAS."})}),(0,t.jsxs)(l.im,{className:"flex-nowrap max-[820px]:!flex-col",children:[(0,t.jsxs)(l.im,{className:"items-center flex-nowrap w-max m-2",children:[(0,t.jsx)("div",{className:"w-8 h-8 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md",children:(0,t.jsx)("img",{src:j+"img/svg/calendar.svg",alt:"",draggable:"false",className:"w-1/2"})}),(0,t.jsxs)("h2",{className:"font-light text-base text-left",children:["13 e 14 de Setembro ",(0,t.jsx)("br",{}),"das 8h \xe0s 18h"]})]}),(0,t.jsxs)(l.im,{className:"items-center flex-nowrap w-max m-2",children:[(0,t.jsx)("div",{className:"w-8 h-8 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md",children:(0,t.jsx)("img",{src:j+"img/svg/map_pin.svg",alt:"",draggable:"false",className:"w-[40%]"})}),(0,t.jsx)("h2",{className:"font-light text-base",children:"Mercure S\xe3o Jos\xe9 dos Campos"})]})]}),(0,t.jsx)("button",{className:"font-bold text-2xl max-[820px]:!text-base shadow-md w-fit py-4 px-16 rounded-full max-[820px]:!max-w-[340px] grad-alt hover:scale-105 hover:brightness-105 duration-200 my-4",onClick:()=>e("#evt-valor").scrollIntoView({block:"start"}),children:"GARANTA SUA VAGA"})]})})})]}),(0,t.jsx)(l.$0,{id:"evt-local",className:"max-[820px]:!py-16 bg-[linear-gradient(45deg,var(--cor-4),var(--cor-5))] duration-200 ease-out overflow-hidden",children:(0,t.jsx)(l.VY,{className:"relative z-20",children:(0,t.jsxs)(l.If,{children:[(0,t.jsxs)(l.im,{className:"!flex-nowrap max-[820px]:!flex-col justify-start items-center h-[420px] max-[820px]:!h-auto w-9/12 max-[820px]:!w-full mx-auto",children:[(0,t.jsxs)(l.W2,{className:"w-[32rem] max-[820px]:!w-full p-4",children:[(0,t.jsxs)(l.W2,{className:"mb-2",children:[(0,t.jsx)("h2",{className:"grad-text font-bold text-3xl mb-2",children:"ONDE E QUANDO?"}),(0,t.jsx)("div",{className:"divider left"})]}),(0,t.jsxs)(l.im,{className:"items-center flex-nowrap w-max m-2 max-[820px]:!w-full",children:[!f&&(0,t.jsx)("div",{className:"w-12 h-12 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md",children:(0,t.jsx)("img",{src:j+"img/svg/calendar.svg",alt:"",draggable:"false",className:"w-1/2"})}),(0,t.jsxs)("h2",{className:"font-extralight text-base",children:[f&&(0,t.jsx)("i",{className:"fa-solid fa-calendar-days mr-2","aria-hidden":"true"}),(0,t.jsx)("strong",{children:"13 e 14 de Setembro"}),(0,t.jsx)("br",{}),"Sexta-feira e s\xe1bado",(0,t.jsx)("br",{}),"Das 8h \xe0s 18h"]})]}),(0,t.jsxs)(l.im,{className:"items-center flex-nowrap w-max m-2 max-[820px]:!w-full",children:[!f&&(0,t.jsx)("div",{className:"w-12 h-12 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md",children:(0,t.jsx)("img",{src:j+"img/svg/map_pin.svg",alt:"",draggable:"false",className:"w-[40%]"})}),(0,t.jsxs)("h2",{className:"font-extralight text-base",children:[f&&(0,t.jsx)("i",{className:"fa-solid fa-location-dot mr-2","aria-hidden":"true"}),(0,t.jsx)("strong",{children:"Hotel Mercure S\xe3o Jos\xe9 dos Campos - Torre II"}),(0,t.jsx)("br",{}),"Av. Jorge Zarur, 81, Jardim Apolo ",(0,t.jsx)("br",{}),"S\xe3o Jos\xe9 dos Campos, SP - 12243-081 ",(0,t.jsx)("br",{})]})]}),(0,t.jsxs)(l.im,{className:"flex-nowrap items-center w-max m-2 max-[820px]:!w-full",children:[(0,t.jsxs)("div",{className:"relative w-16 h-12 aspect-square",children:[(0,t.jsx)("div",{className:"absolute h-2/3 aspect-square left-0 top-0 rounded-full mr-4 bg-center bg-cover",style:{backgroundImage:"url(".concat(j+"img/mercure.webp",")")}}),(0,t.jsx)("div",{className:"absolute h-2/3 aspect-square right-0 bottom-0 mr-4 bg-center bg-cover",style:{backgroundImage:"url(".concat(j+"img/png/logo_ibis.png",")")}})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsx)("h2",{className:"font-extralight text-base m-0",children:(0,t.jsx)("strong",{children:"Em parceria com:"})}),(0,t.jsxs)("span",{className:"font-extralight text-base",children:["Mercure S\xe3o Jos\xe9 dos Campos",(0,t.jsx)("br",{})," 20% OFF"]}),(0,t.jsxs)("span",{className:"font-extralight text-base",children:["Ibis S\xe3o Jos\xe9 dos Campos",(0,t.jsx)("br",{})," 15% OFF"]})]}),(0,t.jsx)("a",{className:"inline !underline font-light cursor-pointer text-sm",href:"mailto:h5168-re@accor.com?subject=Reserva%20de%20estadia%20-%20Palmilhas%20%26%20Ci%C3%AAncia%20Aplicada%202024",children:"Clique aqui para fazer sua reserva por email"})]})]})]}),(0,t.jsx)(l.W2,{className:"w-[32rem] p-4 aspect-video max-[820px]:!w-full max-[820px]:!p-0 relative",children:(0,t.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14668.122128172752!2d-45.90516370000002!3d-23.205557899999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc3589bc020f0d%3A0x96bc968352c2c899!2sMercure%20Sao%20Jose%20dos%20Campos!5e0!3m2!1sen!2sbr!4v1710790411443!5m2!1sen!2sbr",className:"outline-none border-none w-full h-full absolute rounded-lg",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]}),(0,t.jsx)(y,{})]})})}),(0,t.jsx)(l.$0,{id:"evt-palestrantes",className:"shadow-lg bg-[radial-gradient(circle_at_center,#1E3050,#121e31)] max-[820px]:!py-4 border-y-2 border-sky-800 chuva-palmilhas overflow-hidden rounded-bl-3xl rounded-br-3xl",children:(0,t.jsx)(l.VY,{className:"relative z-20",children:(0,t.jsxs)(l.If,{children:[(0,t.jsxs)(l.W2,{className:"w-9/12 max-[820px]:!w-full my-4 px-4 mx-auto",children:[(0,t.jsx)("h2",{className:"text-2xl text-center max-[820px]:!text-xl font-bold grad-text mb-2",children:"CONHE\xc7A OS PALESTRANTES DE 2024"}),(0,t.jsx)("div",{className:"divider"})]}),(0,t.jsxs)(l.W2,{className:"items-center justify-center",children:[(0,t.jsxs)(l.W2,{className:"mt-4 items-center",children:[(0,t.jsx)("h2",{className:"grad-text text-center font-semibold text-2xl",children:"Ci\xeancia Aplicada"}),(0,t.jsxs)(l.rj,{className:"mt-4 mx-auto grid-cols-2 max-[820px]:!grid-cols-1 w-full gap-4",children:[(0,t.jsx)(w,{src:j+"img/palestrantes-2024/andre-mendes.webp",name:"Andr\xe9 Mendes",occupation:"Fisioterapeuta",theme:"Vamos pensar juntos: Um guia para o racioc\xednio cl\xednico",children:(0,t.jsx)("p",{className:"text-sm",style:{lineHeight:"24px"},children:"Fisioterapeuta, especialista em Fisioterapia Ortop\xe9dica, Mestre e doutorando em Fisioterapia, s\xf3cio fundador da Podoshop e do Palmilhando. Autor do livro Palmilhas Terap\xeauticas: ci\xeancia e pr\xe1tica cl\xednica."})}),(0,t.jsx)(w,{src:j+"img/palestrantes-2024/felipe-barcelos.webp",name:"Felipe Barcelos",occupation:"M\xe9dico Ortopedista",theme:"O p\xe9 da crian\xe7a com doen\xe7as neuromusculares",children:(0,t.jsx)("p",{className:"text-sm",style:{lineHeight:"24px"},children:"M\xe9dico ortopedista com subespecializa\xe7\xe3o em ortopedia pedi\xe1trica e doen\xe7as neuromusculares pelo Ensino Einstein. M\xe9dico do corpo cl\xednico do Hospital Israelita Albert Einstein."})}),(0,t.jsx)(w,{src:j+"img/palestrantes-2024/maria-lucoveis.webp",name:"Maria Luc\xf3veis",occupation:"Enfermeira e fisioterapeuta",theme:"Recomenda\xe7\xe3o de recursos offloading para p\xe9s de risco",children:(0,t.jsxs)("p",{className:"text-sm",style:{lineHeight:"24px"},children:["Fisioterapeuta e Enfermeira Estomaterapeuta, Mestre em Ci\xeancias pela Universidade Federal de S\xe3o Paulo, Master em p\xe9 diab\xe9tico pela ",(0,t.jsx)("i",{children:"Universidad Complutense de Madrid"}),", doutoranda em Ci\xeancias da Reabilita\xe7\xe3o pela Universidade de S\xe3o Paulo. Socia propriet\xe1ria da Bem Estar dos P\xe9s - Servi\xe7os de Enfermagem."]})}),(0,t.jsx)(w,{src:j+"img/palestrantes-2024/george-sabino.webp",name:"George Sabino",occupation:"Fisioterapeuta",theme:"Utiliza\xe7\xe3o de I.A. nas avalia\xe7\xf5es cl\xednicas do p\xe9 e da marcha",children:(0,t.jsx)("p",{className:"text-sm",style:{lineHeight:"24px"},children:"Fisioterapeuta, Doutor em Ci\xeancias da Reabilita\xe7\xe3o UFMG, P\xf3s doutorando em Ci\xeancias da Sa\xfade CMMG. S\xf3cio fundador da Propuls\xe3o."})}),(0,t.jsx)(w,{src:j+"img/palestrantes-2024/brenda-braga.webp",name:"Brenda Braga",occupation:"Fisioterapeuta",theme:"A influ\xeancia dos cal\xe7ados infantis na sa\xfade dos p\xe9s",children:(0,t.jsx)("p",{className:"text-sm",style:{lineHeight:"24px"},children:"Fisioterapeuta ortesista, especialista em \xf3rteses suropod\xe1licas. Empreendedora e s\xf3cia da Gente Mi\xfada Kids Shoes."})}),(0,t.jsx)(w,{src:j+"img/palestrantes-2024/leonardo-signorini.webp",name:"Leonardo Signorini",occupation:"Fisioterapeuta",theme:"As palmilhas no futebol profissional",children:(0,t.jsx)("p",{className:"text-sm",style:{lineHeight:"24px"},children:"Fisioterapeuta, especialista em Fisioterapia Ortop\xe9dica e Esportiva. Dono da Dr. P\xe9s palmilhas."})})]})]}),(0,t.jsxs)(l.W2,{className:"mt-8",children:[(0,t.jsx)("h2",{className:"grad-text text-center font-semibold text-2xl",children:"Empreendedorismo"}),(0,t.jsxs)(l.rj,{className:"mt-4 mx-auto grid-cols-2 max-[820px]:!grid-cols-1 w-full gap-4",children:[(0,t.jsx)(w,{src:j+"img/palestrantes-2024/mariana-pereira.webp",name:"Mariana Pereira",occupation:"Copywriter",theme:"Consci\xeancia, dores e desejos do cliente",children:(0,t.jsx)("p",{className:"text-sm",style:{lineHeight:"24px"},children:"Estrategista digital e copywriter da Podoshop e do Palmilhando."})}),(0,t.jsx)(w,{src:j+"img/palestrantes-2024/jordache-murta.webp",name:"Jordache Murta",occupation:"Publicit\xe1rio",theme:"Estrat\xe9gias para construir a sua autoridade no digital",children:(0,t.jsx)("p",{className:"text-sm",style:{lineHeight:"24px"},children:"Publicit\xe1rio, especialista em marketing digital. H\xe1 20 anos trabalhando com marketing, atua em estrat\xe9gias digitais para constru\xe7\xe3o de autoridade, vendas e capta\xe7\xe3o de novos clientes de forma org\xe2nica."})}),(0,t.jsx)(w,{src:j+"img/palestrantes-2024/natalia-faro.webp",name:"Nat\xe1lia Faro",occupation:"Fisioterapeuta",theme:"Ecossistema empreendedor: Como fomentar seu crescimento",children:(0,t.jsx)("p",{className:"text-sm",style:{lineHeight:"24px"},children:"Fisioterapeuta, empreendedora h\xe1 15 anos, influenciadora e fundadora da Verticalle - Palmilhas. Experi\xeancia de 7 anos com palmilhas personalizadas e criadora das palmilhas dupla face para saltos."})}),(0,t.jsx)(w,{src:j+"img/palestrantes-2024/myrlla-moreira.webp",name:"Myrlla Moreira",occupation:"Fisioterapeuta",theme:"Como ser um profissional de refer\xeancia e ter um consult\xf3rio de sucesso",children:(0,t.jsx)("p",{className:"text-sm",style:{lineHeight:"24px"},children:"Fisioterapeuta formada h\xe1 11 anos, empreendedora, especialista em coluna vertebral pela Santa Casa de S\xe3o Paulo. Criadora do curso on-line de capacita\xe7\xe3o Escoliose na Pr\xe1tica."})}),(0,t.jsx)(w,{src:j+"img/palestrantes-2024/clayton-fuzetti.webp",name:"Clayton Fuzetti",occupation:"Fisioterapeuta e CEO da Podoshop\xae",theme:"Planejando as finan\xe7as do seu futuro",children:(0,t.jsx)("p",{className:"text-sm",style:{lineHeight:"24px"},children:"Fisioterapeuta, especialista em Fisioterapia Ortop\xe9dica, MBA em gest\xe3o empresarial. S\xf3cio fundador da Podoshop e do Palmilhando."})})]})]})]})]})})}),(0,t.jsxs)(l.$0,{id:"evt-video",className:"shadow-xl !py-0",children:[(0,t.jsx)("div",{className:"my-8",children:(0,t.jsx)("h1",{className:"grad-text text-center font-semibold text-3xl",children:"Confira como foi nosso \xfaltimo encontro"})}),(0,t.jsx)("div",{className:"relative pt-24 h-[576px] max-[820px]:!h-[90vh] flex items-center overflow-hidden",children:(0,t.jsxs)("div",{className:"cursor-pointer",onClick:()=>{u(N),h(!0)},children:[!p&&(0,t.jsx)("div",{className:"absolute-center w-20 h-20 z-30",children:(0,t.jsx)("img",{src:j+"img/svg/play_button.svg",alt:"",draggable:"false",className:"w-full h-full"})}),(0,t.jsx)("div",{className:"absolute top-0 left-0 w-screen h-auto overflow-clip mix-blend-soft-light opacity-75 z-10 max-[820px]:!h-full",children:(0,t.jsx)("video",{id:"evento-video",autoPlay:!0,muted:!0,playsInline:!0,loop:!0,className:"inline-block align-baseline w-full max-[820px]:!h-full max-[820px]:!w-full object-cover bg-cover",children:(0,t.jsx)("source",{src:j+"img/evt_banner.webm"})})})]})}),p&&(0,t.jsx)(()=>(0,t.jsx)("div",{className:"bg-[rgb(0,0,0,0.5)] backdrop-blur-lg fixed z-[999] top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center px-32 py-[2.5%] max-[820px]:!p-0",ref:v,children:(0,t.jsx)("div",{className:"w-full h-full flex items-center justify-center relative",children:(0,t.jsxs)("div",{className:"h-auto w-full relative",ref:b,children:[(0,t.jsx)("div",{className:"w-12 h-12 absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 max-[820px]:!-translate-x-1/2 max-[820px]:!-translate-y-full",children:(0,t.jsx)("span",{className:"w-full text-right cursor-pointer",onClick:()=>h(!1),children:(0,t.jsx)("i",{className:"fa-regular fa-circle-xmark text-2xl","aria-hidden":"true"})})}),(0,t.jsx)(l.gb,{width:32}),x]})})}),{children:x})]}),(0,t.jsx)(l.$0,{id:"evt-valor",children:(0,t.jsx)(l.VY,{children:(0,t.jsx)(l.If,{children:(0,t.jsx)(d,{})})})}),(0,t.jsx)(l.$0,{id:"faq",children:(0,t.jsx)(l.VY,{children:(0,t.jsxs)(l.If,{className:"flex justify-evenly max-[820px]:!flex-col",children:[(0,t.jsxs)(l.W2,{className:"w-[30%] max-[820px]:!w-[90%] max-[820px]:!mx-auto max-[820px]:!mb-8 max-[820px]:!text-center",children:[(0,t.jsx)("h2",{className:"font-semibold text-xl",children:"Ficou com alguma d\xfavida?"}),(0,t.jsx)("div",{className:"divider left"}),(0,t.jsx)("p",{children:"Confira aqui as respostas para as d\xfavidas mais frequentes, ou entre em contato conosco via Whatsapp"}),(0,t.jsxs)("a",{href:"https://wa.me//5512982628132",className:"flex items-center justify-evenly py-4 my-4 px-8 border border-cyan-200 rounded-xl hover:backdrop-brightness-110 ease-out duration-200 cursor-pointer decoration-[none] text-white",children:[(0,t.jsx)("img",{src:j+"img/svg/whatsapp-green.svg",alt:"",draggable:"false",width:"32px",height:"32px",className:"mr-2"}),(0,t.jsxs)("p",{className:"w-full",children:["ATENDIMENTO POR ",(0,t.jsx)("mark",{className:"cor-3",children:"WHATSAPP"})]})]})]}),(0,t.jsxs)(l.W2,{className:"w-[70%] max-[820px]:!w-full ml-8 max-[820px]:!ml-0",children:[(0,t.jsx)(n.zF,{title:"Quando vai ser o evento?",children:(0,t.jsx)("p",{children:"Dias 13 e 14 de setembro de 2024. Em ambos os dias, as atividades acontecer\xe3o das 8h \xe0s 18h."})}),(0,t.jsx)(n.zF,{title:"Onde ser\xe1 o evento?",children:(0,t.jsxs)("p",{children:["O evento ser\xe1 realizado no Hotel Mercure S\xe3o Jos\xe9 dos Campos, na torre II.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Endere\xe7o: Avenida Dr - Av. Jorge Zarur, 81 - Torre II - Jardim Apolo, S\xe3o Jos\xe9 dos Campos - SP, 12243-081"]})}),(0,t.jsx)(n.zF,{title:"Para quem \xe9 o evento?",children:(0,t.jsx)("p",{children:"Para profissionais da sa\xfade que desejam ter uma experi\xeancia incr\xedvel e ter acesso a todo o conhecimento necess\xe1rio para se destacar como profissional."})}),(0,t.jsx)(n.zF,{title:"Como recebo meu ingresso?",children:(0,t.jsx)("p",{children:"O ingresso ser\xe1 enviado para o seu e-mail. Ser\xe1 necess\xe1rio que voc\xea mostre seu ingresso na entrada do evento. Por isso, no momento da compra, informe um e-mail ao qual voc\xea tenha acesso. Voc\xea poder\xe1 apresentar o seu ingresso de forma impressa ou digital, por meio de um print."})}),(0,t.jsx)(y,{})]})]})})}),(0,t.jsx)(l.$0,{id:"evt-footer",children:(0,t.jsx)("div",{className:"w-36 m-auto text-center",children:(0,t.jsx)("img",{src:j+"img/svg/logo_palmilhando.svg",alt:"",draggable:"false"})})})]})}a(9415),a(9843)},2869:function(e,s,a){"use strict";a.d(s,{$0:function(){return r},Ct:function(){return m},If:function(){return n},VY:function(){return i},W2:function(){return c},gb:function(){return x},im:function(){return o},rj:function(){return d}});var t=a(7437),l=a(12);let r=e=>{let{id:s,className:a,children:r}=e;return(0,t.jsx)("section",{id:s,className:(0,l.list)("py-16 m-auto w-full relative",a),children:r})},i=e=>{let{id:s,className:a,children:r}=e;return(0,t.jsx)("div",{id:s,className:(0,l.list)("block m-auto w-full",a),children:r})},n=e=>{let{id:s,className:a,children:r}=e;return(0,t.jsx)("div",{id:s,className:(0,l.list)("w-[96%] max-w-[1280px] mx-auto",a),children:r})},o=e=>{let{id:s,className:a,children:r}=e;return(0,t.jsx)("div",{id:s,className:(0,l.list)("flex flex-wrap",a),children:r})},c=e=>{let{id:s,className:a,children:r}=e;return(0,t.jsx)("div",{id:s,className:(0,l.list)("flex flex-col",a),children:r})},d=e=>{let{id:s,className:a,style:r,children:i}=e;return(0,t.jsx)("div",{id:s,className:(0,l.list)("grid",a),style:r,children:i})},m=e=>{let{id:s,className:a,width:r=24,children:i}=e;return(0,t.jsx)("div",{id:s,className:(0,l.list)("bg-inherit rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center p-4",a),style:{width:"".concat(r,"px")},children:i})},x=e=>{let{width:s=32}=e,a=s+"px";return(0,t.jsx)("div",{className:"loading absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",style:{width:a,height:a},children:(0,t.jsx)("img",{src:"/img/gif/loading.gif",width:a,height:a,draggable:"false",alt:""})})}},2950:function(e,s,a){"use strict";a.d(s,{aV:function(){return c},zF:function(){return n},zx:function(){return o}});var t=a(7437),l=a(2265),r=a(12);let i=e=>{let{id:s,className:a,fill:l="#1E3050",width:r=12}=e;return(0,t.jsx)("svg",{id:s,className:"caret "+a,fill:l,version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 12 12",style:{enableBackground:"new 0 0 12 12"},xmlSpace:"preserve",width:r+"px",height:r+"px",children:(0,t.jsx)("path",{d:"M9.2,6.8c0.5-0.5,0.5-1.2,0-1.7L4.5,0.5C4.2,0.2,3.7,0.1,3.2,0.3S2.5,0.9,2.5,1.3v9.3c0,0.5,0.3,0.9,0.7,1.1s0.9,0.1,1.3-0.3L9.2,6.8L9.2,6.8L9.2,6.8L9.2,6.8z"})})},n=e=>{let{id:s,className:a,title:n,children:o}=e,c=(0,l.useRef)(null);return(0,t.jsxs)("div",{className:(0,r.list)("collapsible bg-slate-200 cor-4 rounded-md overflow-hidden shadow-sm mb-2 p-4 cursor-pointer hover:bg-slate-50 light",a),ref:c,onClick:()=>{var e,s,a,t=document.querySelectorAll(".collapsible .content");function l(e){e.parentElement.style.maxHeight?e.parentElement.style.maxHeight=null:e.parentElement.style.maxHeight=3*e.scrollHeight+"px"}(null===(e=c.current)||void 0===e?void 0:e.classList.contains("active"))||function(){for(let e of t)e.parentElement.classList.contains("active")&&(e.parentElement.classList.remove("active"),l(e))}(),null===(s=c.current)||void 0===s||s.classList.toggle("active"),l(null===(a=c.current)||void 0===a?void 0:a.lastElementChild)},id:s,children:[(0,t.jsxs)("div",{className:"title flex justify-between items-center",children:[(0,t.jsx)("span",{className:"mr-4 font-bold",children:n}),(0,t.jsx)(i,{})]}),(0,t.jsx)("div",{className:"content mt-4 pb-4",children:o})]})},o=e=>{let{id:s,className:a,disabled:l,onClick:i,children:n}=e;return(0,t.jsx)("button",{id:s,className:(0,r.list)("border border-cyan-200 rounded-xl py-2 px-8 grad-1 font-semibold","".concat(l?"saturate-0 opacity-50 cursor-not-allowed":"hover:scale-[101%] hover:brightness-110 hover:translate-y-[-1px] duration-100 ease-out cursor-pointer"),a),onClick:i,children:n})},c=e=>{let{id:s,className:a,children:l}=e;return(0,t.jsx)("ul",{id:s,className:(0,r.list)("my-list",a),children:l})}},12:function(e,s,a){var t=a(12);t.list=function(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return s.join(" ").trim()},t.prefix=(e,s)=>{var a=s.split(" ");for(let s=0;s<a.length;s++)a[s]=e+a[s];return a.join(" ").trim()},t.url=e=>"url('/".concat(e||"placeholder.webp","')"),t.scrollToCenter=e=>{var s="string"==typeof e?document.querySelector(e):e;null==s||s.scrollIntoView({block:"center",behavior:"smooth"})},t.scrollToTop=e=>{var s="string"==typeof e?document.querySelector(e):e;null==s||s.scrollIntoView({block:"start",behavior:"smooth"})},t.log=function(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0;if(s){if("string"!=typeof e)return console.log(e);switch(a){case"success":return console.log("%c☑ - ".concat(e),"color: #B0C4DE");case"info":return console.log("%c⚠ - ".concat(e),"color: #F0E68C");case"error":return console.error(e);case"warning":return console.warn(e);default:return console.log(e)}}}},9843:function(){},9415:function(){}},function(e){e.O(0,[77,446,971,23,744],function(){return e(e.s=6804)}),_N_E=e.O()}]);