(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(6),l=a.n(c),i=(a(16),a(4)),r=(a(18),a(20),a(3));function s(){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light shadow p-3 mb-1 bg-white rounded"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(r.b,{className:"navbar-brand",to:"/"},o.a.createElement("strong",{style:{fontSize:"larger"}},o.a.createElement("i",{className:"fa-brands fa-quinscape mx-2"}),"Quiz")),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(r.b,{className:"nav-link","aria-current":"page",to:"/"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(r.b,{className:"nav-link",to:"/Check"},"Score")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("span",{className:"nav-link",style:{cursor:"pointer"},onClick:function(){window.location.href="/"}},o.a.createElement("i",{className:"fa-solid fa-arrows-rotate",title:"Refresh"}))))))))}function m(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Left_panel shadow border-right"},o.a.createElement("ul",null,o.a.createElement(r.b,{to:"/",style:{textDecoration:"none"}},o.a.createElement("li",{className:"tab"},o.a.createElement("i",{className:"fa-solid fa-house-user mx-3"}),"Home")),o.a.createElement(r.b,{to:"/check",style:{textDecoration:"none"}},o.a.createElement("li",{className:"tab"},o.a.createElement("i",{className:"fa-solid fa-square-check mx-3"}),"Score")))))}function u(e){var t=function(t){if(e.fetchQuestion[e.count]["option".concat(t+1)]===e.fetchQuestion[e.count].answer){document.getElementById("opt".concat(t)).style.border="2px solid green",document.getElementById("quiz-box1").style.animation="success 1s ease-in-out 1";for(var a=0;a<4;a++)a!==t&&(document.getElementById("opt".concat(a)).style.border="2px solid red"),document.getElementById("opt".concat(a)).disabled=!0;e.score(!0)}else{document.getElementById("opt".concat(t)).style.border="2px solid red",document.getElementById("quiz-box2").style.animation="failure 1s ease-in-out 1";for(var n=0;n<4;n++)document.getElementById("opt".concat(n)).disabled=!0;e.score(!1)}};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Quiz_panel bg-image"},o.a.createElement("h1",{className:"mt-1"},"Quiz Game"),o.a.createElement("div",{className:"quiz-box mask"},o.a.createElement(r.b,{to:"/check",style:{color:"black"}},o.a.createElement("i",{className:"fa-solid fa-clipboard-check fa-lg showScore",id:"showScore",title:"Check Score"})),o.a.createElement("h2",{className:"question"},e.fetchQuestion["".concat(e.count)].question),o.a.createElement("div",{className:"option-box"},o.a.createElement("button",{className:"btn btn-light rounded-pill",id:"opt0",onClick:function(){return t(0)}},e.fetchQuestion["".concat(e.count)].option1),o.a.createElement("button",{className:"btn btn-light rounded-pill",id:"opt1",onClick:function(){return t(1)}},e.fetchQuestion["".concat(e.count)].option2),o.a.createElement("button",{className:"btn btn-light rounded-pill",id:"opt2",onClick:function(){return t(2)}},e.fetchQuestion["".concat(e.count)].option3),o.a.createElement("button",{className:"btn btn-light rounded-pill",id:"opt3",onClick:function(){return t(3)}},e.fetchQuestion["".concat(e.count)].option4)),o.a.createElement("div",{className:"question-number"},o.a.createElement("i",{className:"fa-solid fa-angle-left",style:{cursor:"pointer"},onClick:e.dec})," ",e.count_length[0]," / ",e.count_length[1]," ",o.a.createElement("i",{className:"fa-solid fa-angle-right",style:{cursor:"pointer"},onClick:e.inc}))),o.a.createElement("div",{className:"quiz-box-copy1",id:"quiz-box1"}),o.a.createElement("div",{className:"quiz-box-copy2",id:"quiz-box2"})))}function d(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"Score_holder"},e.checkScore()))}var b=a(0);var E=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],l=[{question:"Knot is a unit of _________?",option1:"Speed",option2:"Distance",option3:"Depth",option4:"Acceleration",answer:"Speed"},{question:"Which Article is related to 'Abolition of Untouchability'?",option1:"Article 20",option2:"Article 19",option3:"Article 18",option4:"Article 17",answer:"Article 17"},{question:"English is the official language of _________.",option1:"Chandigarh",option2:"Dadra and Nagar Haveli",option3:"Daman and Diu",option4:"Delhi",answer:"Chandigarh"}],E=Object(n.useState)(0),p=Object(i.a)(E,2),f=p[0],g=p[1],h=[a+1,l.length];return o.a.createElement(r.a,{basename:"/"},o.a.createElement(s,null),o.a.createElement("div",{className:"main_box container-fluid"},o.a.createElement(m,null),o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/",element:o.a.createElement(u,{count:a,fetchQuestion:l,count_length:h,score:function(e,t){g(e?f+1:f-1)},inc:function(){if(a<l.length-1){c(a+1);for(var e=0;e<4;e++)document.getElementById("opt".concat(e)).style.border="",document.getElementById("opt".concat(e)).disabled=!1;document.getElementById("quiz-box1").style.animation="",document.getElementById("quiz-box2").style.animation=""}},dec:function(){a<=l.length&&a>0&&c(a-1);for(var e=0;e<4;e++)document.getElementById("opt".concat(e)).style.border="",document.getElementById("opt".concat(e)).disabled=!1;document.getElementById("quiz-box1").style.animation="",document.getElementById("quiz-box2").style.animation=""}})}),o.a.createElement(b.a,{path:"Check",element:o.a.createElement(d,{checkScore:function(){return o.a.createElement("h1",null,"Your Total Score is: ",f)}})}))))},p=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,23)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),o(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null))),p()},7:function(e,t,a){e.exports=a(22)}},[[7,3,2]]]);
//# sourceMappingURL=main.e94a2c59.chunk.js.map