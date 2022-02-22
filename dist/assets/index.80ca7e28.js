import{c as B,f as O,a as q,b as H,R as e,u as P,p as Q,d as i,L as h,e as g,D as L,s as U,g as j,h as C,i as G,r as W,N as p,j as S,k as m,l as f,C as J,m as V,P as K,B as X}from"./vendor.1f556100.js";const z=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(n){if(n.ep)return;n.ep=!0;const l=r(n);fetch(n.href,l)}};z();const y=B({reducerPath:"SoccerApi",baseQuery:O({baseUrl:"https://api.football-data.org/v2/",prepareHeaders:t=>(t.set("X-Auth-Token","c512bd1adb1947e987dbeff47924c56e"),t)}),tagTypes:[],endpoints:t=>({getAreaById:t.query({query:a=>({url:`areas/${a||""}`})}),getMatchesByDate:t.query({query:({dateFrom:a,dateTo:r})=>({url:"matches",params:{dateFrom:a,dateTo:r}}),transformResponse:a=>a.matches}),getTeamById:t.query({query:(a,r)=>({url:a?`teams/${a}`:"teams",params:{areas:r}})}),getTeamsByArea:t.query({query:a=>({url:"teams",params:{areas:a,limit:5}})}),getCompetitions:t.query({query:a=>({url:a?`competitions/${a+"/matches"}`:"competitions"})}),getMatchesByTeamId:t.query({query:a=>`teams/${a}/matches`,transformResponse:a=>a.matches})})}),{useGetAreaByIdQuery:b,useGetMatchesByDateQuery:Y,useGetTeamByIdQuery:Z,useGetTeamsByAreaQuery:ee,useGetCompetitionsQuery:M,useGetMatchesByTeamIdQuery:te}=y,w=q({name:"findAndSort",initialState:{dateFrom:"2020-10-10",dateTo:"2020-10-15",areasList:"Waits for areas list..."},reducers:{filterByDate:(t,a)=>{t.dateFrom=a.payload.dateFrom,t.dateTo=a.payload.dateTo,t.datesInterval=a.payload.datesIntervalInApiFormat},clearDatesInterval:t=>{delete t.datesInterval},storeAreaList:(t,a)=>{t.areasList=a.payload},storeSearchString:(t,a)=>{t.searchString=a.payload.toLowerCase()},storeCompetition:(t,a)=>{t.currentCompetition=a.payload}}}),{filterByDate:ae,storeAreaList:ne,storeSearchString:re,storeCompetition:le,clearDatesInterval:ce}=w.actions;var se=w.reducer;const oe=H({reducer:{findAndSortSlice:se,[y.reducerPath]:y.reducer},middleware:t=>t().concat(y.middleware)});function me(t){return e.createElement("div",null,e.createElement("main",null,t.children))}const ie="_Match_1b3aj_3",ue="_area_1b3aj_17",de="_flag_1b3aj_25",pe="_MatchDate_1b3aj_35",Ee="_score_1b3aj_47";var u={Match:ie,area:ue,flag:de,MatchDate:pe,score:Ee};function E({data:t,idx:a,history:r}){P(),u.Match;const c=Q(t.utcDate).toString().substr(0,24);let n,l=i(s=>s.findAndSortSlice.currentCompetition);return t.competition?n=t.competition:l&&(n=l),e.createElement("div",{key:"match"+a,className:u.Match},e.createElement("div",{className:u.area},n&&e.createElement(e.Fragment,null,n.area.ensignUrl&&e.createElement("img",{src:n.area.ensignUrl,alt:n.area.name,className:u.flag}),e.createElement("p",null,n.area.name),e.createElement("p",null,n.name))),e.createElement("div",{className:u.score},e.createElement("div",{className:u.MatchDate},c),e.createElement("div",null,"Score"),e.createElement(h,{to:`/team/${t.homeTeam.id}`},t.homeTeam.name),e.createElement(h,{to:`/team/${t.awayTeam.id}`},t.awayTeam.name),e.createElement("div",null,"Fulltime "),e.createElement("div",null,t.score.fullTime.homeTeam," "),e.createElement("div",null,t.score.fullTime.awayTeam," "),e.createElement("div",null,"Halftime "),e.createElement("div",null,t.score.halfTime.homeTeam," "),e.createElement("div",null,t.score.halfTime.awayTeam," ")))}function F(){const t=i(l=>l.findAndSortSlice);let{data:a=[],isLoading:r}=Y(t);const c=i(l=>l.findAndSortSlice.searchString);a&&c&&c.length>0&&(a=a.filter(l=>l.homeTeam.name.toLowerCase().includes(c.toLowerCase())||l.awayTeam.name.toLowerCase().includes(c.toLowerCase())));function n(l){return l.map((s,o)=>e.createElement(E,{data:s,key:"match"+o}))}return e.createElement("div",{className:"Content"},r?e.createElement(e.Fragment,null,"Loading..."):n(a))}function _({oneTapOn:t,title:a}){const r=g();let c="",n="";const l=o=>{if(o){c=C(o[0],"yyyy'-'MM'-'dd"),n=C(o[1],"yyyy'-'MM'-'dd");const $=G({start:o[0],end:o[1]}).map(x=>C(x,"yyyy'-'MM'-'dd"));r(ae({dateFrom:c,dateTo:n,datesIntervalInApiFormat:$}))}},s=()=>{r(ce())};return e.createElement("div",null,e.createElement("h5",null,a),t===1?e.createElement(L,{className:"rs-theme-dark",isoWeek:!0,showOneCalendar:!0,ranges:[],hoverRange:o=>[U(o,5),j(o,5)],oneTap:!0,onClean:()=>s(),onChange:o=>l(o)}):e.createElement(L,{className:"rs-theme-dark",isoWeek:!0,showOneCalendar:!0,ranges:[],onClean:()=>s(),onChange:o=>l(o)}))}function he({holder:t,onChange:a}){const[r,c]=W.exports.useState(""),n={border:"1px solid transparent",borderRadius:"5px",marginBottom:"3px",marginTop:"3px",backgroundColor:"var(--rs-input-bg)",color:"var(--rs-text-primary)"};return e.createElement("input",{value:r,type:"text",placeholder:t,style:n,onChange:l=>{c(l.target.value),a(l.target.value)}})}function I({title:t}){const a=g();return e.createElement("div",null,e.createElement("h5",null,t),e.createElement(he,{onChange:r=>a(re(r))}))}const ge="_AppHeader_46l3a_1",fe="_menu_46l3a_41",ye="_tittle_46l3a_55",_e="_functional_46l3a_67",ve="_box_46l3a_85";var v={AppHeader:ge,menu:fe,tittle:ye,functional:_e,box:ve};function Ce(){return e.createElement("div",{className:v.AppHeader},e.createElement("p",{className:v.tittle},"Welcome to Football Leagues Statistics!"),e.createElement("div",{className:v.menu},e.createElement(p,{to:"/matches"},"22222Matches by period..."),e.createElement(p,{to:"/areas"},"Teams by area..."),e.createElement(p,{to:"/competitions"},"Competitions....")),e.createElement("div",{className:v.functional},e.createElement(S,null,e.createElement(m,{path:"/",exact:!0,element:e.createElement(_,{oneTapOn:1,title:"Select 10 days range"})}),e.createElement(m,{path:"/matches",exact:!0,element:e.createElement(_,{oneTapOn:1,title:"Select 10 days range"})}),e.createElement(m,{path:"/competitions/:compid",element:e.createElement(_,null)}),e.createElement(m,{path:"/team-matches/:teamid",element:e.createElement(_,null)})),e.createElement(S,null,e.createElement(m,{path:"/matches",exact:!0,element:e.createElement(I,{title:"Enter team name:"})}),e.createElement(m,{path:"/areas/:areaid",element:e.createElement(I,{title:"Enter team name:"})}))))}function D({flag:t,name:a}){return e.createElement("figure",null,e.createElement("img",{src:t,height:"35px"}),e.createElement("figcaption",null,a))}function Se({areaId:t}){const{data:a}=b(t);return a?e.createElement(D,{flag:a.ensignUrl,name:a.name}):e.createElement(e.Fragment,null,"Loading...")}const Ae="_Teams_4g545_1",Te="_TeamRow_4g545_21",Ne="_area_4g545_89",Le="_title_4g545_101",be="_row2_4g545_111",Me="_row3_4g545_123",we="_AppHeader_4g545_137",Fe="_menu_4g545_145";var d={Teams:Ae,TeamRow:Te,area:Ne,title:Le,row2:be,row3:Me,AppHeader:we,menu:Fe};function R(t){let{id:a}=f();t.id&&(a=t.id);let{data:r}=Z(a);return t.data&&(r=t.data),r?e.createElement(p,{to:`/team-matches/${r.id}`,className:d.TeamRow},e.createElement("figure",null,e.createElement("a",{href:r.website},r.crestUrl&&e.createElement("img",{src:r.crestUrl,alt:r.name}),e.createElement("figcaption",null,r.shortName))),e.createElement("p",{className:d.area},e.createElement(Se,{areaId:r.area.id})),e.createElement("h4",{className:d.title},r.name," (",r.tla,")"),e.createElement("p",{className:d.row2},"Club colors: ",r.clubColors," Venue: ",r.venue),e.createElement("p",{className:d.row3},"Phone: ",r.phone,"   Email: ",r.email)):e.createElement("div",null,"Loading...")}function Ie(){const{areaid:t}=f(),{data:a}=ee(t),r=i(s=>s.findAndSortSlice.searchString);let c;a&&(c=a.teams,r&&r.length>0&&(c=c.filter(s=>s.name.toLowerCase().includes(r.toLowerCase()))));function n(s){return s.map((o,N)=>e.createElement(R,{data:o,key:"team"+N}))}const l=e.createElement(h,{to:"/areas"}," Choose another... ");return e.createElement("div",{className:d.Teams},e.createElement("h3",null,"Team list"),c?c.count===0?e.createElement("h5",null,e.createElement("p",null,"No teams in this area."),l):e.createElement(e.Fragment,null,e.createElement("h5",null,l),n(c)):e.createElement(e.Fragment,null,"Loading..."))}const De="_MacroRegions_12oxk_1",Re="_Areas_12oxk_17";var A={MacroRegions:De,Areas:Re};function ke(){const t=i(a=>a.findAndSortSlice.areasList);return e.createElement("div",null,Array.isArray(t)?t.length>0?e.createElement("div",{className:A.Areas},t.map(a=>e.createElement(p,{to:`/areas/${a.id}`},a.name))):e.createElement("p",null,"Choose Another..."):e.createElement("p",null,"Choose Macro Region..."))}function $e(){const{data:t}=b(),a=t?t.areas.filter(n=>n.parentArea==="World"&&t.areas.some(l=>l.parentAreaId===n.id)):[],r=g();console.log(t);function c(n){const l=t?t.areas.filter(s=>s.parentAreaId===n):[];r(ne(l))}return t?e.createElement("div",null,e.createElement("div",{className:A.MacroRegions},a.map(n=>e.createElement("div",{onClick:()=>c(n.id),className:A.MacroRegion},n.name))),e.createElement(ke,null)):e.createElement(e.Fragment,null,"Loading...")}const xe="_CompetitionsList_4s4uu_1",Be="_CompetitionCard_4s4uu_13",Oe="_Emblem_4s4uu_39";var T={CompetitionsList:xe,CompetitionCard:Be,Emblem:Oe};function qe({data:t}){const a=g();function r(){a(le(t))}return e.createElement(h,{to:"/competitions/"+t.id,onClick:c=>r(),className:T.CompetitionCard},e.createElement(D,{flag:t.area.ensignUrl,name:t.area.name}),e.createElement("h5",null,t.name),e.createElement("img",{src:t.emblemUrl,className:T.Emblem,alt:"Emblem"}))}function He(){const{data:t}=M();let a=[];return t&&(a=t.competitions.filter(r=>r.plan==="TIER_ONE")),t?e.createElement(e.Fragment,null,e.createElement("h2",null,"Choose Competition"),e.createElement("br",null),e.createElement("div",{className:T.CompetitionsList},a.map((r,c)=>e.createElement(qe,{key:c,data:r})))):e.createElement(e.Fragment,null,"Loading...")}function k(){return e.createElement("div",null,e.createElement(He,null))}function Pe(){const{compid:t}=f(),{data:a}=M(t);let r;a&&(r=JSON.parse(JSON.stringify(a.matches)).reverse());const{datesInterval:c}=i(n=>n.findAndSortSlice);return e.createElement(e.Fragment,null,e.createElement("h1",null,"Matches in this competition"),e.createElement("br",null),e.createElement("div",{className:"Content"},a?r.map((n,l)=>e.createElement(e.Fragment,null,c?c.includes(n.utcDate.substr(0,10))&&e.createElement(E,{data:n,key:l}):e.createElement(E,{data:n,key:l}))):e.createElement(e.Fragment,null,"Loading...")))}function Qe(){const{teamid:t}=f(),{data:a=[]}=te(t);a&&console.log(a);let r;a&&(r=JSON.parse(JSON.stringify(a)).reverse());const{datesInterval:c}=i(n=>n.findAndSortSlice);return e.createElement(e.Fragment,null,e.createElement("h1",null,"Matches of selected team"),e.createElement("br",null)," ",e.createElement("div",{className:"Content"},a?r.map((n,l)=>e.createElement(e.Fragment,null,c?c.includes(n.utcDate.substr(0,10))&&e.createElement(E,{data:n,key:l}):e.createElement(E,{data:n,key:l}))):e.createElement(e.Fragment,null,"Loading...")))}function Ue(){return e.createElement(J,{theme:"dark"},e.createElement(me,null,e.createElement("div",{className:"App"},e.createElement(Ce,null),e.createElement(S,null,e.createElement(m,{path:"/",exact:!0,element:e.createElement(F,null)}),e.createElement(m,{path:"/matches",exact:!0,element:e.createElement(F,null)}),e.createElement(m,{path:"/team-matches/:teamid",exact:!0,element:e.createElement(Qe,null)}),e.createElement(m,{path:"/areas",exact:!0,element:e.createElement($e,null)}),e.createElement(m,{path:"/areas/:areaid",exact:!0,element:e.createElement(Ie,null)}),e.createElement(m,{path:"/team/:id",exact:!0,element:e.createElement(R,null)}),e.createElement(m,{path:"/competitions/",element:e.createElement(k,null)}),e.createElement(m,{path:"/competitions/:compid",element:e.createElement(e.Fragment,null,e.createElement(k,null),e.createElement(Pe,null))})))))}V.render(e.createElement(e.StrictMode,null,e.createElement(K,{store:oe},e.createElement(X,null,e.createElement(Ue,null)))),document.getElementById("root"));