(this.webpackJsonponevaxindia=this.webpackJsonponevaxindia||[]).push([[0],{23:function(e,t,c){},27:function(e){e.exports=JSON.parse('[{"label":"Andaman and Nicobar Islands","value":1},{"label":"Andhra Pradesh","value":2},{"label":"Arunachal Pradesh","value":3},{"label":"Assam","value":4},{"label":"Bihar","value":5},{"label":"Chandigarh","value":6},{"label":"Chhattisgarh","value":7},{"label":"Dadra and Nagar Haveli","value":8},{"label":"Delhi","value":9},{"label":"Goa","value":10},{"label":"Gujarat","value":11},{"label":"Haryana","value":12},{"label":"Himachal Pradesh","value":13},{"label":"Jammu and Kashmir","value":14},{"label":"Jharkhand","value":15},{"label":"Karnataka","value":16},{"label":"Kerala","value":17},{"label":"Ladakh","value":18},{"label":"Lakshadweep","value":19},{"label":"Madhya Pradesh","value":20},{"label":"Maharashtra","value":21},{"label":"Manipur","value":22},{"label":"Meghalaya","value":23},{"label":"Mizoram","value":24},{"label":"Nagaland","value":25},{"label":"Odisha","value":26},{"label":"Puducherry","value":27},{"label":"Punjab","value":28},{"label":"Rajasthan","value":29},{"label":"Sikkim","value":30},{"label":"Tamil Nadu","value":31},{"label":"Telangana","value":32},{"label":"Tripura","value":33},{"label":"Uttar Pradesh","value":34},{"label":"Uttarakhand","value":35},{"label":"West Bengal","value":36},{"label":"Daman and Diu","value":37}]')},34:function(e,t,c){},36:function(e,t,c){},46:function(e,t,c){},51:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),i=c(24),s=c.n(i),l=c(12),r=c(11),j=(c(34),c(17),c(7)),d=(c(23),c(0)),o=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){return a(e.statewise)}))})),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("table",{class:"table table-bordered styled-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"State"}),Object(d.jsx)("th",{children:"Confirmed"}),Object(d.jsx)("th",{children:"Active"}),Object(d.jsx)("th",{children:"Recovered"}),Object(d.jsx)("th",{children:"Death"})]})}),Object(d.jsx)("tbody",{children:c.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.state}),Object(d.jsx)("td",{children:e.confirmed}),Object(d.jsx)("td",{children:e.active}),Object(d.jsx)("td",{children:e.recovered}),Object(d.jsx)("td",{children:e.deaths})]})}))})]})})})},b=(c(46),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{class:"colside",children:[Object(d.jsxs)("h4",{children:[Object(d.jsx)("span",{children:"\u25cb"}),"  Covid-19 Informations"]}),Object(d.jsx)(l.b,{to:"/",className:"navlink",children:"Indian Covid-19"}),Object(d.jsx)(l.b,{to:"/Statecases",className:"navlink",children:"State Cases"}),Object(d.jsx)(l.b,{to:"/Helpline",className:"navlink",children:"Helpline Numbers"}),Object(d.jsxs)(l.b,{to:"/Hospitalpublic",className:"navlink",children:["Hospitals ",Object(d.jsx)("span",{className:"hopub",children:"(from Public\u26a1)"})]}),Object(d.jsxs)(l.b,{to:"/Findhelp",className:"navlink",children:["Find People to Help? ",Object(d.jsx)("span",{className:"hopub",children:"(Public\u26a1)"})]})]}),Object(d.jsxs)("div",{class:"colside",children:[Object(d.jsxs)("h4",{children:[Object(d.jsx)("span",{children:"\u25cb"}),"  Vaccine Infromations ",Object(d.jsx)("span",{className:"hopub",children:"(COWIN\u26a1)"})]}),Object(d.jsx)(l.b,{to:"/Districtstate",className:"navlink",children:"District in State"}),Object(d.jsx)(l.b,{to:"/Findbydistrict",className:"navlink",children:"Find Center by District"}),Object(d.jsx)(l.b,{to:"/Findbypincode",className:"navlink",children:"Find Center by Pincode"})]}),Object(d.jsxs)("div",{class:"colside",children:[Object(d.jsxs)("h4",{children:[Object(d.jsx)("span",{children:"\u25cb"}),"  Help Infromations ",Object(d.jsx)("span",{className:"hopub",children:"(from Public\u26a1)"})]}),Object(d.jsx)(l.b,{to:"/Hospitalsubmit",className:"navlink",children:"Submit Hospital"}),Object(d.jsx)(l.b,{to:"/Helpother",className:"navlink",children:"Submit Help Other"})]})]})}),h=(c(51),c(39)),O=c(31),u=c.n(O);function x(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container-fluid header",children:[Object(d.jsx)("a",{href:"/",className:"bd",children:Object(d.jsx)("h2",{className:"brand",children:"Onevax.in"})}),Object(d.jsx)("div",{className:"popbtn",children:Object(d.jsx)(h.a,{trigger:function(e){return Object(d.jsx)("button",{className:"btn-bar",children:Object(d.jsx)(u.a,{})})},position:"bottom right",closeOnDocumentClick:!0,children:Object(d.jsxs)("div",{className:"mob-menu",children:[Object(d.jsx)(l.b,{to:"/",className:"navmob",children:"COVID-19"}),Object(d.jsx)("hr",{style:{color:"#000000"}}),Object(d.jsx)(l.b,{to:"/Findbydistrict",className:"navmob",children:"Vaccine Slot"}),Object(d.jsx)("hr",{style:{color:"#000000"}}),Object(d.jsx)(l.b,{to:"/Findhelp",className:"navmob",children:"Find Help"})]})})}),Object(d.jsxs)("div",{className:"navmenu",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("button",{children:"COVID-19"})}),Object(d.jsx)("a",{href:"https://www.cowin.gov.in/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("button",{children:"COWIN Register"})}),Object(d.jsx)(l.b,{to:"/Helpother",children:Object(d.jsx)("button",{children:"Help Other"})}),Object(d.jsx)(l.b,{to:"/Findbydistrict",children:Object(d.jsx)("button",{children:"Vaccine Slot"})})]})]})})}c(56);var m=c.p+"static/media/register.15f5de55.png",p=c.p+"static/media/location.4a472c7f.png",v=c.p+"static/media/slot.4f7e602a.png",f=c.p+"static/media/cocase.7c82da7f.png",g=c.p+"static/media/activecs.f761834c.png",N=c.p+"static/media/covercs.02ddfa68.png",y=c.p+"static/media/codeath.dfa42c6f.png",S=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){return a(e.statewise[0])})).catch((function(e){console.log("There was problem please refresh page!")})),console.log(c)}),[c]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("h3",{children:["Welcome to Onevaxin! ",Object(d.jsx)("span",{className:"blink",children:"Live \u26a1"})]}),Object(d.jsx)("div",{class:"note",children:Object(d.jsx)("p",{children:"Stay Home Stay Safe! Check your nearest vaccination center and slots availability."})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{className:"totaldata dataone",children:[Object(d.jsx)("p",{children:Object(d.jsx)("img",{src:f,alt:"corona",width:"100px"})}),Object(d.jsxs)("h3",{children:[c.confirmed," ",Object(d.jsx)("span",{className:"blinkcovid",children:"Live \u26a1"})]}),Object(d.jsxs)("h2",{children:["Total ",Object(d.jsx)("span",{style:{color:"#ffcc01"},children:"Cases"})," in India"]})]})}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{className:"totaldata dataone",children:[Object(d.jsx)("p",{children:Object(d.jsx)("img",{src:g,alt:"corona",width:"100px"})}),Object(d.jsxs)("h3",{children:[c.active," ",Object(d.jsx)("span",{className:"blinkcovid",children:"Live \u26a1"})]}),Object(d.jsxs)("h2",{children:[Object(d.jsx)("span",{style:{color:"#ffcc01"},children:"Active"})," Cases in India"]})]})}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{className:"totaldata datatwo",children:[Object(d.jsx)("p",{children:Object(d.jsx)("img",{src:N,alt:"corona",width:"100px"})}),Object(d.jsxs)("h3",{children:[c.recovered," ",Object(d.jsx)("span",{className:"blinkcovid",children:"Live \u26a1"})]}),Object(d.jsxs)("h2",{children:["Total ",Object(d.jsx)("span",{style:{color:"#69ce70"},children:"Cover"})," in India"]})]})}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{className:"totaldata datathree",children:[Object(d.jsx)("p",{children:Object(d.jsx)("img",{src:y,alt:"corona",width:"100px"})}),Object(d.jsxs)("h3",{children:[c.deaths," ",Object(d.jsx)("span",{className:"blinkcovid",children:"Live \u26a1"})]}),Object(d.jsxs)("h2",{children:["Total ",Object(d.jsx)("span",{style:{color:"red"},children:"Death"})," in India"]})]})})]})]}),Object(d.jsxs)("div",{className:"container vaccine",children:[Object(d.jsxs)("h2",{children:["Get Vaccinated and Stay Safe ",Object(d.jsx)("a",{href:"https://www.cowin.gov.in/",className:"registervacc",target:"_blank",rel:"noreferrer",children:"Register \u26a1"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{className:"getvaccined",children:[Object(d.jsx)("p",{children:Object(d.jsx)("img",{src:m,alt:"register",width:"100px"})}),Object(d.jsx)("h4",{children:"REGISTER YOURSELF"}),Object(d.jsx)("p",{children:"Register using your mobile number or aadhaar number or any other identity docs."})]})}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{className:"getvaccined",children:[Object(d.jsx)("p",{children:Object(d.jsx)("img",{src:p,alt:"corona",width:"100px"})}),Object(d.jsx)("h4",{children:"CHOOSE LOCATION"}),Object(d.jsx)("p",{children:"Select your nearby vaccine center in your state in your district for vaccination."})]})}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{className:"getvaccined",children:[Object(d.jsx)("p",{children:Object(d.jsx)("img",{src:v,alt:"corona",width:"100px"})}),Object(d.jsx)("h4",{children:"CONFIRM YOUR SLOT"}),Object(d.jsx)("p",{children:"Check and book your vaccine slot to get vaccine in your own time in your nearby hospital."})]})})]})]})]})};c(57);function C(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container-book-footer",children:Object(d.jsxs)("p",{children:["Copyright \xa9 2021 Onevaxin All Rights Reserved. Made by ",Object(d.jsx)("span",{children:"\u2764\ufe0f"})," oneQRB"]})})})}var H=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://api.rootnet.in/covid19-in/contacts").then((function(e){return e.json()})).then((function(e){return a(e.data.contacts.regional)}))})),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("table",{class:"table table-bordered styled-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Date"}),Object(d.jsx)("th",{children:"Total Sample Tested"})]})}),Object(d.jsx)("tbody",{children:c.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.loc}),Object(d.jsx)("td",{children:e.number})]})}))})]})})})},D=c(27),F=function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),s=Object(j.a)(i,2),l=s[0],r=s[1];return Object(n.useEffect)((function(){fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/".concat(c)).then((function(e){return e.json()})).then((function(e){return r(e.districts)}))}),[c]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("form",{className:"formstyle",children:Object(d.jsxs)("select",{class:"form-select form-select-lg mb-3 stateselect","aria-label":".form-select-lg example",onChange:function(e){return a(e.target.value)},children:[Object(d.jsx)("option",{selected:!0,children:"Open this select State"}),D.map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.label})}))]})}),Object(d.jsxs)("table",{class:"table table-bordered styled-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"District ID"}),Object(d.jsx)("th",{children:"District Name"})]})}),Object(d.jsx)("tbody",{children:l.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.district_id}),Object(d.jsx)("td",{children:e.district_name})]})}))})]})]})})},w=(c(36),function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),s=Object(j.a)(i,2),l=s[0],r=s[1],o=Object(n.useState)(),b=Object(j.a)(o,2),h=b[0],O=b[1],u=Object(n.useState)([]),x=Object(j.a)(u,2),m=x[0],p=x[1],v=Object(n.useState)(""),f=Object(j.a)(v,2),g=f[0],N=f[1],y=Object(n.useState)(""),S=Object(j.a)(y,2),C=S[0],H=S[1],F=Object(n.useState)(""),w=Object(j.a)(F,2),k=w[0],I=w[1];return Object(n.useEffect)((function(){fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/".concat(c)).then((function(e){return e.json()})).then((function(e){return r(e.districts)}))}),[c]),Object(n.useEffect)((function(){fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=".concat(h,"&date=").concat(g,"-").concat(C,"-").concat(k)).then((function(e){return e.json()})).then((function(e){return p(e.sessions)}))}),[h,g,C,k]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"dmy",children:[Object(d.jsxs)("select",{class:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",onChange:function(e){return a(e.target.value)},children:[Object(d.jsx)("option",{selected:!0,children:"Select State"}),D.map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.label})}))]}),Object(d.jsxs)("select",{class:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",onChange:function(e){return O(e.target.value)},children:[Object(d.jsx)("option",{selected:!0,children:"Select District"}),l.map((function(e){return Object(d.jsx)("option",{value:e.district_id,children:e.district_name})}))]}),Object(d.jsx)("input",{type:"text",placeholder:"Date [ 00 ]",onChange:function(e){return N(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Month [ 00 ]",onChange:function(e){return H(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Year [ 0000 ]",onChange:function(e){return I(e.target.value)}})]}),Object(d.jsxs)("table",{class:"table table-bordered styled-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Address"}),Object(d.jsx)("th",{children:"Block"}),Object(d.jsx)("th",{children:"Pincode"}),Object(d.jsx)("th",{children:"Time"}),Object(d.jsx)("th",{children:"Fees"}),Object(d.jsx)("th",{children:"Slot Avaliable"}),Object(d.jsx)("th",{children:"Age"}),Object(d.jsx)("th",{children:"Vaccine"})]})}),Object(d.jsx)("tbody",{children:m&&m.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.center_id}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.address}),Object(d.jsx)("td",{children:e.block_name}),Object(d.jsx)("td",{children:e.pincode}),Object(d.jsxs)("td",{children:[e.from," to ",e.to]}),Object(d.jsx)("td",{children:e.fee}),Object(d.jsx)("td",{children:e.available_capacity}),Object(d.jsx)("td",{children:e.min_age_limit}),Object(d.jsx)("td",{children:e.vaccine})]})}))})]})]})})}),k=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),s=Object(j.a)(i,2),l=s[0],r=s[1],o=Object(n.useState)(""),b=Object(j.a)(o,2),h=b[0],O=b[1],u=Object(n.useState)(""),x=Object(j.a)(u,2),m=x[0],p=x[1],v=Object(n.useState)([]),f=Object(j.a)(v,2),g=f[0],N=f[1];return Object(n.useEffect)((function(){fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=".concat(c,"&date=").concat(l,"-").concat(h,"-").concat(m)).then((function(e){return e.json()})).then((function(e){return N(e.sessions)}))}),[c,l,h,m]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"dmy-pin",children:[Object(d.jsx)("input",{type:"text",placeholder:"Area Pincode",onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Date [ 00 ]",onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Month [ 00 ]",onChange:function(e){return O(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Year [ 0000 ]",onChange:function(e){return p(e.target.value)}})]}),Object(d.jsxs)("table",{class:"table table-bordered styled-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Address"}),Object(d.jsx)("th",{children:"Block"}),Object(d.jsx)("th",{children:"Pincode"}),Object(d.jsx)("th",{children:"Time"}),Object(d.jsx)("th",{children:"Fees"}),Object(d.jsx)("th",{children:"Slot Avaliable"}),Object(d.jsx)("th",{children:"Age"}),Object(d.jsx)("th",{children:"Vaccine"})]})}),Object(d.jsx)("tbody",{children:g&&g.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.center_id}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.address}),Object(d.jsx)("td",{children:e.block_name}),Object(d.jsx)("td",{children:e.pincode}),Object(d.jsxs)("td",{children:[e.from," to ",e.to]}),Object(d.jsx)("td",{children:e.fee}),Object(d.jsx)("td",{children:e.available_capacity}),Object(d.jsx)("td",{children:e.min_age_limit}),Object(d.jsx)("td",{children:e.vaccine})]})}))})]})]})})},I=(c(58),c(33)),P=(c(63),I.a.initializeApp({apiKey:"AIzaSyAF4ZzkfN8lDmgImxT8TqBvvEJ-H7bZwCQ",authDomain:"onevaxindia.firebaseapp.com",projectId:"onevaxindia",storageBucket:"onevaxindia.appspot.com",messagingSenderId:"661702546811",appId:"1:661702546811:web:07b02cf7d91bcabd9359de",measurementId:"G-CN2G6P4M3E"}).firestore()),A=(I.a.auth(),P),E=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),s=Object(j.a)(i,2),l=s[0],r=s[1],o=Object(n.useState)(""),b=Object(j.a)(o,2),h=b[0],O=b[1],u=Object(n.useState)(""),x=Object(j.a)(u,2),m=x[0],p=x[1],v=Object(n.useState)(""),f=Object(j.a)(v,2),g=f[0],N=f[1],y=Object(n.useState)(""),S=Object(j.a)(y,2),C=S[0],H=S[1],D=Object(n.useState)(""),F=Object(j.a)(D,2),w=F[0],k=F[1],I=Object(n.useState)(!1),P=Object(j.a)(I,2),E=P[0],T=P[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"Please Provide Given Informations ( Help Others )"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("div",{className:"hospitaldata",children:[Object(d.jsx)("h4",{children:"Instruction and Documentation:"}),Object(d.jsx)("p",{children:"How to submit Hospital details"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Fill al the given details in the form."}),Object(d.jsx)("li",{children:"Find District id in left side menu District in state."}),Object(d.jsx)("li",{children:"Submit your hospital data."}),Object(d.jsx)("li",{children:"Register in COWIN for vaccination."})]}),Object(d.jsx)("p",{children:"How to submit Help Other details"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Fill al the given details in the form."}),Object(d.jsx)("li",{children:"Find District id in left side menu District in state."}),Object(d.jsx)("li",{children:"Submit your Help Other data."}),Object(d.jsx)("li",{children:"Register in COWIN for vaccination."})]})]})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("form",{className:"hospitalform",onSubmit:function(e){e.preventDefault(),T(!0),A.collection("HelpOther").add({name:c,phone:l,email:h,position:m,area:g,howhelp:C,districtid:w}).then((function(){T(!1),alert("Helping has been Submitted\ud83d\udc4d")})).catch((function(e){alert(e.message),T(!1)})),a(""),r(""),O(""),p(""),N(""),H(""),k("")},children:[Object(d.jsx)("input",{type:"text",className:"hoinfo",placeholder:"Your Name",onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("input",{type:"text",className:"hoinfo",placeholder:" Your Phone Number",onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("input",{type:"email",className:"hoinfo",placeholder:"Your Email",onChange:function(e){return O(e.target.value)}}),Object(d.jsx)("input",{type:"text",className:"hoinfo",placeholder:"Current Position",onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("input",{type:"text",className:"hoinfo",placeholder:"Service Area with Pincode",onChange:function(e){return N(e.target.value)}}),Object(d.jsx)("input",{type:"text",className:"hoinfo",placeholder:"District ID",onChange:function(e){return k(e.target.value)}}),Object(d.jsx)("textarea",{type:"text",className:"hoinfo",placeholder:"How You help Other?",onChange:function(e){return H(e.target.value)}}),Object(d.jsx)("button",{type:"submit",style:{background:E?"#ccc":" rgb(2, 2, 110)"},children:"Submit Help Other"})]})})]})]})})},T=(c(64),function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){A.collection("NearHospitals").onSnapshot((function(e){a(e.docs.map((function(e){return e.data()})))}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"Hospitals Posted by Public ( Near Hospital )"}),Object(d.jsxs)("table",{class:"table table-bordered styled-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"District ID"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Number"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Address"}),Object(d.jsx)("th",{children:"Covid Treatment"}),Object(d.jsx)("th",{children:"Ventilator Machine"}),Object(d.jsx)("th",{children:"Oxygen Cylinder"})]})}),Object(d.jsx)("tbody",{children:c.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.districtid}),Object(d.jsx)("td",{children:e.hospitalname}),Object(d.jsx)("td",{children:e.hospitalphone}),Object(d.jsx)("td",{children:e.hospitalemail}),Object(d.jsx)("td",{children:e.hospitaladdress}),Object(d.jsx)("td",{children:e.treatment}),Object(d.jsx)("td",{children:e.ventilator}),Object(d.jsx)("td",{children:e.oxygen})]})}))})]})]})})}),R=(c(65),function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){A.collection("HelpOther").onSnapshot((function(e){a(e.docs.map((function(e){return e.data()})))}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"Find Who Can Help You?"}),Object(d.jsxs)("table",{class:"table table-bordered styled-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"District ID"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Number"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Position"}),Object(d.jsx)("th",{children:"Service Area"}),Object(d.jsx)("th",{children:"How help you other?"})]})}),Object(d.jsx)("tbody",{children:c.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.districtid}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.position}),Object(d.jsx)("td",{children:e.area}),Object(d.jsx)("td",{children:e.howhelp})]})}))})]})]})})}),_=(c(66),function(){var e=[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],i=c[1],s=Object(n.useState)(""),l=Object(j.a)(s,2),r=l[0],o=l[1],b=Object(n.useState)(""),h=Object(j.a)(b,2),O=h[0],u=h[1],x=Object(n.useState)(""),m=Object(j.a)(x,2),p=m[0],v=m[1],f=Object(n.useState)(""),g=Object(j.a)(f,2),N=g[0],y=g[1],S=Object(n.useState)(""),C=Object(j.a)(S,2),H=C[0],D=C[1],F=Object(n.useState)(""),w=Object(j.a)(F,2),k=w[0],I=w[1],P=Object(n.useState)(""),E=Object(j.a)(P,2),T=E[0],R=E[1],_=Object(n.useState)(""),M=Object(j.a)(_,2),Y=M[0],B=M[1],L=Object(n.useState)(!1),V=Object(j.a)(L,2),W=V[0],G=V[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"Please Provide Given Informations ( Submit Hospital )"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("div",{className:"hospitaldata",children:[Object(d.jsx)("h4",{children:"Instruction and Documentation:"}),Object(d.jsx)("p",{children:"How to submit Hospital details"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Fill al the given details in the form."}),Object(d.jsx)("li",{children:"Find District id in left side menu District in state."}),Object(d.jsx)("li",{children:"Submit your hospital data."}),Object(d.jsx)("li",{children:"Register in COWIN for vaccination."})]}),Object(d.jsx)("p",{children:"How to submit Help Other details"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Fill al the given details in the form."}),Object(d.jsx)("li",{children:"Find District id in left side menu District in state."}),Object(d.jsx)("li",{children:"Submit your Help Other data."}),Object(d.jsx)("li",{children:"Register in COWIN for vaccination."})]})]})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("form",{className:"hospitalform",onSubmit:function(e){e.preventDefault(),G(!0),A.collection("NearHospitals").add({districtid:Y,hospitalname:a,hospitalphone:r,hospitalemail:O,hospitaladdress:p,treatment:H,ventilator:k,oxygen:T,whoru:N}).then((function(){G(!1),alert("Hospital has been Submitted\ud83d\udc4d")})).catch((function(e){alert(e.message),G(!1)})),B(""),i(""),o(""),u(""),v(""),D(""),I(""),R(""),y("")},children:[Object(d.jsx)("input",{type:"text",className:"hoinfo",placeholder:"Hospital Name",value:a,onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("input",{type:"text",className:"hoinfo",placeholder:"Hospital Phone Number",value:r,onChange:function(e){return o(e.target.value)}}),Object(d.jsx)("input",{type:"email",className:"hoinfo",placeholder:"Hospital Email",value:O,onChange:function(e){return u(e.target.value)}}),Object(d.jsx)("textarea",{type:"text",className:"hoinfo",placeholder:"Hospital Address",value:p,onChange:function(e){return v(e.target.value)}}),Object(d.jsx)("input",{type:"text",className:"hoinfo",placeholder:"Who are you?",value:N,onChange:function(e){return y(e.target.value)}}),Object(d.jsx)("input",{type:"text",className:"hoinfo",placeholder:"District ID",value:Y,onChange:function(e){return B(e.target.value)}}),Object(d.jsxs)("select",{class:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",value:H,onChange:function(e){return D(e.target.value)},children:[Object(d.jsx)("option",{selected:!0,children:"Covid Treatment?"}),e.map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.label})}))]}),Object(d.jsxs)("select",{class:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",value:k,onChange:function(e){return I(e.target.value)},children:[Object(d.jsx)("option",{selected:!0,children:"Ventilator Machine?"}),e.map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.label})}))]}),Object(d.jsxs)("select",{class:"form-select form-select-lg mb-3","aria-label":".form-select-lg example",value:T,onChange:function(e){return R(e.target.value)},children:[Object(d.jsx)("option",{selected:!0,children:"Oxygen Cylinder?"}),e.map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.label})}))]}),Object(d.jsx)("button",{type:"submit",style:{background:W?"#ccc":" rgb(2, 2, 110)"},children:"Submit Hospital"})]})})]})]})})});function M(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(x,{}),Object(d.jsx)("div",{class:"container-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3 col2App",children:Object(d.jsx)(b,{})}),Object(d.jsx)("div",{className:"col-md-9 col10App",children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",exact:!0,component:S}),Object(d.jsx)(r.a,{path:"/Statecases",exact:!0,component:o}),Object(d.jsx)(r.a,{path:"/Helpline",exact:!0,component:H}),Object(d.jsx)(r.a,{path:"/Districtstate",exact:!0,component:F}),Object(d.jsx)(r.a,{path:"/Findbydistrict",exact:!0,component:w}),Object(d.jsx)(r.a,{path:"/Findbypincode",exact:!0,component:k}),Object(d.jsx)(r.a,{path:"/Hospitalsubmit",exact:!0,component:_}),Object(d.jsx)(r.a,{path:"/Helpother",exact:!0,component:E}),Object(d.jsx)(r.a,{path:"/Hospitalpublic",exact:!0,component:T}),Object(d.jsx)(r.a,{path:"/Findhelp",exact:!0,component:R})]})})]})}),Object(d.jsx)(C,{})]})})}s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.cbf7764e.chunk.js.map