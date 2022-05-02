(this["webpackJsonppersonal-homepage"]=this["webpackJsonppersonal-homepage"]||[]).push([[0],{65:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(18),a=t.n(i),c=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),i(e),a(e)}))},l=t(9),s=t(12),u=t(37),d=Object(s.b)({name:"theme",initialState:{isDarkTheme:function(){var e=(new Date).getHours();return e<6||e>19}()},reducers:{toggleTheme:function(e){e.isDarkTheme=!e.isDarkTheme}}}),f=d.actions.toggleTheme,p=function(e){return function(e){return e.theme}(e).isDarkTheme},m=d.reducer,x=Object(s.b)({name:"personalHomepage",initialState:{repositories:null,status:"initial"},reducers:{fetchLoadingReposSuccess:function(e,n){return{status:"success",repositories:n.payload}},fetchLoadingReposLoading:function(){return{status:"loading",repositories:null}},fetchLoadingReposError:function(){return{status:"error",repositories:null}}}}),h=x.actions,b=h.fetchLoadingReposSuccess,j=h.fetchLoadingReposLoading,g=h.fetchLoadingReposError,O=function(e){return e.personalHomepage},w=function(e){return O(e).repositories},y=function(e){return O(e).status},C=x.reducer,v=t(13),k=t.n(v),M=t(20),E=t(16),S=t(32),L=t.n(S),B=function(){return L.a.get("".concat("https://api.github.com","/users/").concat("WojciechBylica","/repos")).then((function(e){return e.data}))},I=k.a.mark(z),H=k.a.mark(P);function z(){var e;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(E.b)(2e3);case 3:return n.next=5,Object(E.a)(B);case 5:return e=n.sent,n.next=8,Object(E.c)(b(e));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(E.c)(g());case 14:case"end":return n.stop()}}),I,null,[[0,10]])}function P(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)(j.type,z);case 2:case"end":return e.stop()}}),H)}var R=k.a.mark(T);function T(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([P()]);case 2:case"end":return e.stop()}}),R)}var F=Object(u.a)(),Z=Object(s.a)({reducer:{theme:m,personalHomepage:C},middleware:[F]});F.run(T);var V,W,D,G=Z,_=t(3),N=t(4),A=Object(_.createGlobalStyle)(V||(V=Object(N.a)(["\nhtml {\n  box-sizing: border-box;\n};\n\n*, ::after, ::before {\n  box-sizing: inherit;\n};\n\nbody {\n    font-family: 'Inter', sans-serif;\n    background: ",";\n    margin: 0 auto;\n    transition: transform 0.3s;\n};\n"])),(function(e){return e.theme.color.background})),J=t(36),q=t(17),U="#FFFFFF",X="#E5E5E5",Y="#d1d5da4d",K="#d1d5da1a",Q="#6E7E91",$="#252525",ee="#0366D6",ne="#2188FF",te="#363636b8",re="#090a3308",oe="#090a3305",ie="#0366d633",ae="#0366d680",ce={media:{mobileMax:767,tabletMax:991}},le=Object(q.a)(Object(q.a)({},ce),{},{color:{background:X,text:$,textSecondary:Q,linkButtonBg:ee,linkButtonColor:U,buttonBackground:X,buttonBorder:Q,buttonToggle:Q,buttonIcon:U,sectionBackground:U,sectionHeaderBorder:Y,bulletColor:ee,emailHover:ee,iconFocus:ee,iconPortfolio:ee,circleLoader:Y,elipseLoader:ee,repoBorderColor:Y,repoShadow2percent:oe,repoShadow3percent:re,repoHoverShadow:ie,repoHeader:ee,repoLink:ee}}),se=Object(q.a)(Object(q.a)({},ce),{},{color:{background:$,text:U,textSecondary:U,linkButtonBg:ne,buttonBackground:te,linkButtonColor:U,buttonBorder:U,buttonToggle:U,buttonIcon:$,sectionBackground:te,sectionHeaderBorder:K,bulletColor:ne,emailHover:ne,iconFocus:ne,iconPortfolio:ne,circleLoader:te,elipseLoader:ne,repoBorderColor:K,repoShadow2percent:oe,repoShadow3percent:re,repoHoverShadow:ae,repoHeader:U,repoLink:ne}}),ue=["title","titleId"];function de(){return(de=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function fe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function pe(e,n){var t=e.title,o=e.titleId,i=fe(e,ue);return r.createElement("svg",de({width:24,height:25,viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,W||(W=r.createElement("path",{d:"M17.2678 9.56104L13.0024 12.9953C12.1952 13.6282 11.0636 13.6282 10.2564 12.9953L5.95435 9.56104",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),D||(D=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.88787 4H16.3158C17.6752 4.01525 18.969 4.58993 19.896 5.5902C20.823 6.59048 21.3022 7.92903 21.222 9.29412V15.822C21.3022 17.1871 20.823 18.5256 19.896 19.5259C18.969 20.5262 17.6752 21.1009 16.3158 21.1161H6.88787C3.96796 21.1161 2 18.7407 2 15.822V9.29412C2 6.37545 3.96796 4 6.88787 4Z",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var me,xe,he,be,je,ge,Oe,we,ye,Ce,ve,ke,Me,Ee,Se,Le,Be=r.forwardRef(pe),Ie=(t.p,_.default.article(me||(me=Object(N.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 63px;\n\n  @media (max-width: ","px) {\n    flex-direction: column;\n    margin-bottom: 48px;\n  } ;\n"])),(function(e){return e.theme.media.mobileMax}))),He=_.default.img(xe||(xe=Object(N.a)(["\n  display: flex;\n  width: 30vw;\n  max-width: 384px;\n  height: 30vw;\n  max-height: 384px;\n  flex-shrink: 2;\n  border-radius: 100%;\n\n  @media (max-width: ","px) {\n    width: 132px;\n    height: 132px;\n  } ;\n"])),(function(e){return e.theme.media.mobileMax})),ze=_.default.div(he||(he=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  margin-left: 66px;\n\n  @media (max-width: ","px) {\n    margin: 0;\n  } ;\n"])),(function(e){return e.theme.media.mobileMax})),Pe=_.default.p(be||(be=Object(N.a)(["\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 130%;\n  text-transform: uppercase;\n  color: ",";\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    margin: 12.67px 0 8px;\n  } ;\n"])),(function(e){return e.theme.color.textSecondary}),(function(e){return e.theme.media.mobileMax})),Re=_.default.h1(je||(je=Object(N.a)(["\n  font-weight: 900;\n  font-size: 38px;\n  line-height: 46px;\n  letter-spacing: 0.05em;\n  color: ",";\n  margin: 0;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    font-size: 22px;\n  } ;\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),Te=_.default.p(ge||(ge=Object(N.a)(["\n  font-size: 20px;\n  line-height: 140%;\n  letter-spacing: 0.05em;\n  color: ",";\n  margin: 32px 0 35px;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    margin: 16px 0 24px;\n    font-size: 12px;\n  } ;\n"])),(function(e){return e.theme.color.textSecondary}),(function(e){return e.theme.media.mobileMax})),Fe=Object(_.default)(Be)(Oe||(Oe=Object(N.a)(["\n  color: ",";\n  margin-right: 18.77px;\n  width: 19.23px;\n  height: 17.12px;\n  transition: transform 0.3s;\n"])),(function(e){return e.theme.color.white})),Ze=t.p+"static/media/wojciechBylica.35109ebb.png",Ve=["title","titleId"];function We(){return(We=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function De(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function Ge(e,n){var t=e.title,o=e.titleId,i=De(e,Ve);return r.createElement("svg",We({width:14,height:14,viewBox:"0 0 14 14",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,we||(we=r.createElement("path",{d:"M6.99989 2.7179C4.63495 2.7179 2.71777 4.63507 2.71777 7.00001C2.71777 9.36495 4.63495 11.2821 6.99989 11.2821C9.36483 11.2821 11.282 9.36495 11.282 7.00001C11.282 4.63507 9.36483 2.7179 6.99989 2.7179ZM6.99989 10.5V3.50002C8.66175 3.4956 10.0949 4.6667 10.4217 6.29611C10.526 6.75959 10.526 7.24044 10.4217 7.70392C10.0949 9.3334 8.66175 10.5045 6.99989 10.5Z",fill:"currentColor"})),ye||(ye=r.createElement("path",{d:"M10.4412 3.55866C10.5134 3.63235 10.6118 3.67449 10.7149 3.67599C10.8181 3.67453 10.9165 3.63235 10.9887 3.55866L11.9468 2.60056C12.1196 2.47095 12.1546 2.22585 12.025 2.05306C11.8954 1.88026 11.6503 1.84527 11.4775 1.97484C11.4478 1.99707 11.4215 2.02341 11.3993 2.05306L10.4412 3.01116C10.29 3.14986 10.2799 3.38489 10.4186 3.53605C10.4258 3.54391 10.4333 3.55144 10.4412 3.55866Z",fill:"currentColor"})),Ce||(Ce=r.createElement("path",{d:"M3.48036 10.4415C3.34132 10.3372 3.15011 10.3372 3.01107 10.4415L2.05297 11.3996C1.90177 11.5383 1.89167 11.7733 2.03041 11.9245C2.03759 11.9323 2.04515 11.9399 2.05297 11.9471C2.19167 12.0983 2.42671 12.1084 2.57787 11.9696C2.58573 11.9624 2.59325 11.9549 2.60044 11.9471L3.55854 10.9889C3.68815 10.8162 3.65315 10.5711 3.48036 10.4415Z",fill:"currentColor"})),ve||(ve=r.createElement("path",{d:"M11.9471 11.3995L10.989 10.4414C10.8162 10.3118 10.5711 10.3468 10.4415 10.5196C10.3372 10.6587 10.3372 10.8499 10.4415 10.9889L11.3996 11.947C11.5383 12.0982 11.7733 12.1083 11.9245 11.9696C11.9323 11.9624 11.9399 11.9548 11.947 11.947C12.0982 11.8083 12.1083 11.5733 11.9696 11.4221C11.9625 11.4142 11.9549 11.4067 11.9471 11.3995Z",fill:"currentColor"})),ke||(ke=r.createElement("path",{d:"M3.01095 3.55866C3.14965 3.70986 3.38468 3.71997 3.53585 3.58123C3.54371 3.57404 3.55123 3.56648 3.55842 3.55866C3.70962 3.41996 3.71972 3.18493 3.58098 3.03377C3.5738 3.02591 3.56624 3.01838 3.55842 3.0112L2.60031 2.0531C2.42752 1.92349 2.18242 1.95852 2.05281 2.13132C1.94854 2.27035 1.94854 2.46156 2.05281 2.6006L3.01095 3.55866Z",fill:"currentColor"})),Me||(Me=r.createElement("path",{d:"M6.99995 2.13129C7.21593 2.13129 7.39101 1.95621 7.39101 1.74023V0.391063C7.39101 0.175078 7.21593 0 6.99995 0C6.78396 0 6.60889 0.175078 6.60889 0.391063V1.74023C6.60889 1.95621 6.78396 2.13129 6.99995 2.13129Z",fill:"currentColor"})),Ee||(Ee=r.createElement("path",{d:"M6.99995 11.8688C6.78396 11.8688 6.60889 12.0439 6.60889 12.2598V13.609C6.60889 13.825 6.78396 14.0001 6.99995 14.0001C7.21593 14.0001 7.39101 13.825 7.39101 13.609V12.2598C7.39101 12.0439 7.21593 11.8688 6.99995 11.8688Z",fill:"currentColor"})),Se||(Se=r.createElement("path",{d:"M13.6089 6.60901H12.2597C12.0437 6.60901 11.8687 6.78409 11.8687 7.00007C11.8687 7.21605 12.0437 7.39113 12.2597 7.39113H13.6089C13.8249 7.39113 13.9999 7.21605 13.9999 7.00007C13.9999 6.78409 13.8248 6.60901 13.6089 6.60901Z",fill:"currentColor"})),Le||(Le=r.createElement("path",{d:"M2.13129 7.00007C2.13129 6.78409 1.95621 6.60901 1.74023 6.60901H0.391063C0.175078 6.60901 0 6.78409 0 7.00007C0 7.21605 0.175078 7.39113 0.391063 7.39113H1.74023C1.95621 7.39113 2.13129 7.21605 2.13129 7.00007Z",fill:"currentColor"})))}var _e,Ne,Ae,Je,qe,Ue,Xe,Ye,Ke,Qe=r.forwardRef(Ge),$e=(t.p,_.default.section(_e||(_e=Object(N.a)(["\n  display: flex;\n  justify-content: flex-end;\n"])))),en=_.default.button(Ne||(Ne=Object(N.a)(["\n  border: none;\n  background: inherit;\n  position: absolute;\n  height: 26px;\n  width: 159px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0px;\n"]))),nn=_.default.span(Ae||(Ae=Object(N.a)(["\n  text-transform: uppercase;\n  color: ",";\n  padding: 5px 0;\n  line-height: 15.6px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 130%;\n  flex-grow: 0;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    display: none;\n  } ;\n"])),(function(e){return e.theme.color.textSecondary}),(function(e){return e.theme.media.mobileMax})),tn=_.default.span(Je||(Je=Object(N.a)(["\n  width: 47.06px;\n  height: 25.07px;\n  border-radius: 12px;\n  border: 1px solid ",";\n  background-color: ",";\n  margin: 0 0 0 12px;\n  display: flex;\n  align-items: center;\n  padding: 3px;\n  transition: transform 0.3s;\n"])),(function(e){return e.theme.color.buttonBorder}),(function(e){return e.theme.color.buttonBackground})),rn=_.default.span(qe||(qe=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  transition: transform 0.3s;\n  width: 20px;\n  height: 20px;\n  background: ",";\n\n  ","\n"])),(function(e){return e.theme.color.buttonToggle}),(function(e){return e.moveToRight&&Object(_.css)(Ue||(Ue=Object(N.a)(["\n      transform: translateX(20px);\n    "])))})),on=Object(_.default)(Qe)(Xe||(Xe=Object(N.a)(["\n  color: ",";\n"])),(function(e){return e.theme.color.buttonIcon})),an=t(2),cn=function(){var e=Object(l.c)(p),n=Object(l.b)();return Object(an.jsx)($e,{children:Object(an.jsxs)(en,{onClick:function(){return n(f())},children:[Object(an.jsxs)(nn,{children:["dark mode ",e?"on":"off"]}),Object(an.jsx)(tn,{children:Object(an.jsx)(rn,{moveToRight:e,children:Object(an.jsx)(on,{})})})]})})},ln="wojciechbylicasoftware@gmail.com",sn=_.default.a(Ye||(Ye=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px 16px;\n  position: relative;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 20.0584px;\n  letter-spacing: 0.05em;\n  text-decoration: none;\n  border: 1px solid rgba(209, 213, 218, 0.3);\n  background: ",";\n  color: ",";\n  transition: transform 0.3s;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,\n      -2px -2px 0px #8cc2ff;\n  }\n\n  &:active {\n    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);\n  }\n\n  @media (max-width: ","px) {\n    font-size: 18px;\n  } ;\n"])),(function(e){return e.theme.color.linkButtonBg}),(function(e){return e.theme.color.linkButtonColor}),(function(e){return e.theme.media.mobileMax})),un=function(){return Object(an.jsxs)("header",{children:[Object(an.jsx)(cn,{}),Object(an.jsxs)(Ie,{children:[Object(an.jsx)(He,{src:Ze,alt:"Wojciech Bylica"}),Object(an.jsxs)(ze,{children:[Object(an.jsx)(Pe,{children:"This is"}),Object(an.jsx)(Re,{children:"Wojciech Bylica"}),Object(an.jsx)(Te,{children:"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb \ud83d\udcbb I'm a passionate Frontend Developer in love with React,currently looking for new job opportunities."}),Object(an.jsxs)(sn,{href:"mailto:".concat(ln),children:[Object(an.jsx)(Fe,{}),Object(an.jsx)("span",{children:"Hire Me"})]})]})]})]})},dn=["React","React with hooks","Redux (Toolkit)","Redux-Saga","JavaScript: ES6+","Next","Semantic & accessible HTML","Responsive Web Design","Teamwork","Immutability","Markdown","CSS BEM convention","CSS Grid","CSS flexbox","React Router","Error handling","Working with API (fetch, axios)","Promises, Async/Await","GitHub Pull Requests & Review","Trello","Scrum","npm/yarn","GIT","E2E testing - Cypress","Unit testing - React Testing Library, Enzyme"],fn=["Node.js","TypeScript"],pn=["National Institute Of Communication: since 05.2022","Pro Novis:  09.2021-03.2022"],mn=["title","titleId"];function xn(){return(xn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function hn(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function bn(e,n){var t=e.title,o=e.titleId,i=hn(e,mn);return r.createElement("svg",xn({width:9,height:9,viewBox:"0 0 9 9",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,Ke||(Ke=r.createElement("circle",{cx:4.5,cy:4.5,r:4.5,fill:"currentColor"})))}var jn,gn,On,wn,yn,Cn,vn,kn=r.forwardRef(bn),Mn=(t.p,_.default.section(jn||(jn=Object(N.a)(["\n  background: ",";\n  margin-bottom: 72px;\n  padding: 32px 32px 24px;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    margin-bottom: 50px;\n    padding: 16px 16px 8px;\n  } ;\n"])),(function(e){return e.theme.color.sectionBackground}),(function(e){return e.theme.media.mobileMax}))),En=_.default.h2(gn||(gn=Object(N.a)(["\n  margin: 0;\n  font-size: 30px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid ",";\n  color: ",";\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    font-size: 18px;\n    padding-bottom: 12px;\n  } ;\n"])),(function(e){return e.theme.color.sectionHeaderBorder}),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),Sn=_.default.ul(On||(On=Object(N.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 32px 0 0;\n  padding-left: 0;\n\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n    margin: 12px 0 0;\n  } ;\n"])),(function(e){return e.theme.media.tabletMax}),(function(e){return e.theme.media.mobileMax})),Ln=_.default.li(wn||(wn=Object(N.a)(["\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  flex-grow: 0;\n  font-size: 18px;\n  margin: 0 0 8px;\n  color: ",";\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    font-size: 14px;\n  } ;\n"])),(function(e){return e.theme.color.textSecondary}),(function(e){return e.theme.media.mobileMax})),Bn=Object(_.default)(kn)(yn||(yn=Object(N.a)(["\n  color: ",";\n  margin-right: 16px;\n  width: 9px;\n  height: 9px;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    margin-right: 8px;\n    width: 6px;\n    height: 6px;\n  } ;\n"])),(function(e){return e.theme.color.bulletColor}),(function(e){return e.theme.media.mobileMax})),In=function(e){var n=e.header,t=e.skills;return Object(an.jsxs)(Mn,{children:[Object(an.jsx)(En,{children:n}),Object(an.jsx)(Sn,{children:t.map((function(e){return Object(an.jsxs)(Ln,{children:[Object(an.jsx)(Bn,{}),e]},e)}))})]})},Hn=_.default.div(Cn||(Cn=Object(N.a)(["\n  margin: 5% auto;\n  max-width: 1216px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 16px;\n\n  @media (max-width: ","px) {\n    padding: 0 8px;\n  } ;\n"])),(function(e){return e.theme.media.mobileMax})),zn=["title","titleId"];function Pn(){return(Pn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Rn(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function Tn(e,n){var t=e.title,o=e.titleId,i=Rn(e,zn);return r.createElement("svg",Pn({width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,vn||(vn=r.createElement("path",{d:"M24.0432 0.179932C10.8147 0.179932 0.0876465 11.0878 0.0876465 24.5445C0.0876465 35.3096 6.95165 44.4426 16.4699 47.6643C17.6672 47.8899 18.1067 47.1358 18.1067 46.4922C18.1067 45.9112 18.0845 43.9919 18.0742 41.956C11.4097 43.4299 10.0034 39.0812 10.0034 39.0812C8.9137 36.265 7.34358 35.5161 7.34358 35.5161C5.17009 34.0039 7.50742 34.035 7.50742 34.035C9.91297 34.2065 11.1796 36.5458 11.1796 36.5458C13.3162 40.2707 16.7837 39.1938 18.1507 38.5712C18.3657 36.9969 18.9866 35.9212 19.6716 35.3132C14.3508 34.6971 8.7574 32.6079 8.7574 23.2719C8.7574 20.6118 9.6932 18.4383 11.2256 16.732C10.9769 16.1179 10.1569 13.6402 11.4577 10.2841C11.4577 10.2841 13.4693 9.62928 18.0472 12.7816C19.9581 12.2418 22.0074 11.971 24.0432 11.9618C26.0791 11.971 28.13 12.2418 30.0444 12.7816C34.6167 9.62928 36.6256 10.2841 36.6256 10.2841C37.9295 13.6402 37.1091 16.1179 36.8604 16.732C38.3964 18.4383 39.3259 20.6118 39.3259 23.2719C39.3259 32.6301 33.7218 34.6906 28.3874 35.2938C29.2467 36.0499 30.0123 37.5327 30.0123 39.8059C30.0123 43.0655 29.9845 45.6893 29.9845 46.4922C29.9845 47.1406 30.4157 47.9003 31.63 47.6611C41.1431 44.4357 47.9984 35.3059 47.9984 24.5445C47.9984 11.0878 37.273 0.179932 24.0432 0.179932Z",fill:"currentColor"})))}var Fn,Zn=r.forwardRef(Tn),Vn=(t.p,["title","titleId"]);function Wn(){return(Wn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Dn(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function Gn(e,n){var t=e.title,o=e.titleId,i=Dn(e,Vn);return r.createElement("svg",Wn({width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,Fn||(Fn=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z",fill:"currentColor"})))}var _n,Nn,An,Jn,qn,Un,Xn,Yn,Kn,Qn=r.forwardRef(Gn),$n=(t.p,_.default.p(_n||(_n=Object(N.a)(["\n  font-size: 12px;\n  font-weight: 700;\n  color: ",";\n  transition: transform 0.3s;\n"])),(function(e){return e.theme.color.textSecondary}))),et=_.default.a(Nn||(Nn=Object(N.a)(["\n  font-size: 32px;\n  font-weight: 900;\n  color: ",";\n  margin-top: 24px;\n  text-decoration: none;\n  transition: transform 0.3s;\n\n  &:hover {\n    color: ",";\n  }\n\n  @media (max-width: ","px) {\n    font-size: 18px;\n    margin-top: 12px;\n  } ;\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.emailHover}),(function(e){return e.theme.media.mobileMax})),nt=_.default.article(An||(An=Object(N.a)(["\n  color: ",";\n  font-size: 18px;\n  max-width: 670px;\n  margin: 24px 0 56px;\n  line-height: 140%;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    font-size: 14px;\n    margin: 12px 0 40px;\n  } ;\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),tt=Object(_.default)(Zn)(Jn||(Jn=Object(N.a)(["\n  color: ",";\n  transition: transform 0.3s;\n\n  &:focus {\n    color: ",";\n  }\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.iconFocus}),(function(e){return e.theme.color.emailHover})),rt=Object(_.default)(Qn)(qn||(qn=Object(N.a)(["\n  color: ",";\n  transition: transform 0.3s;\n\n  &:focus {\n    color: ",";\n  }\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.iconFocus}),(function(e){return e.theme.color.emailHover})),ot=_.default.a(Un||(Un=Object(N.a)(["\n  padding-right: 16px;\n"]))),it="https://github.com/WojciechBylica",at=[{account:it,icon:Object(an.jsx)(tt,{})},{account:"https://www.linkedin.com/in/wojciech-bylica",icon:Object(an.jsx)(rt,{})}],ct=function(){return Object(an.jsxs)("footer",{children:[Object(an.jsx)($n,{children:"Let's talk"}),Object(an.jsx)(et,{href:"mailto:".concat(ln),children:ln}),Object(an.jsx)(nt,{children:"I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me"}),Object(an.jsx)("div",{children:at.map((function(e){var n=e.account,t=e.icon;return Object(an.jsx)(ot,{href:n,rel:"noreferrer noopener",target:"_blank",children:t},Object(s.c)())}))})]})},lt=["title","titleId"];function st(){return(st=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ut(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function dt(e,n){var t=e.title,o=e.titleId,i=ut(e,lt);return r.createElement("svg",st({width:41,height:37,viewBox:"0 0 41 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,Xn||(Xn=r.createElement("path",{d:"M18.501 26.5392C18.501 25.7112 19.173 25.0272 20.001 25.0272C20.829 25.0272 21.501 25.6892 21.501 26.5172V26.5392C21.501 27.3672 20.829 28.0392 20.001 28.0392C19.173 28.0392 18.501 27.3672 18.501 26.5392Z",fill:"currentColor"})),Yn||(Yn=r.createElement("path",{d:"M5.59168 34.8358H34.5557C36.8497 34.7158 38.6137 32.7618 38.4957 30.4678C38.4697 30.0038 38.3697 29.5458 38.1937 29.1178L23.6397 3.6458C22.5277 1.6358 19.9977 0.907801 17.9877 2.0218C17.3037 2.3978 16.7397 2.9618 16.3617 3.6458L1.80768 29.1178C0.94368 31.2458 1.96768 33.6698 4.09368 34.5358C4.52568 34.7098 4.98168 34.8098 5.44568 34.8358",stroke:"currentColor",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),Kn||(Kn=r.createElement("path",{d:"M19.9805 20.7922V14.5922",stroke:"currentColor",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})))}var ft,pt,mt,xt,ht,bt=r.forwardRef(dt),jt=(t.p,_.default.article(ft||(ft=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 426.53px;\n  margin: 95.5px 0 140px;\n\n  @media (max-width: ","px) {\n    margin: 24px 0 48px;\n  } ;\n"])),(function(e){return e.theme.media.mobileMax}))),gt=_.default.h3(pt||(pt=Object(N.a)(["\n  margin: 23.16px 0 32px;\n  color: ",";\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    font-size: 18px;\n  } ;\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),Ot=_.default.p(mt||(mt=Object(N.a)(["\n  margin: 0 0 32px;\n  font-size: 20px;\n  line-height: 140%;\n  text-align: center;\n  letter-spacing: 0.05em;\n  color: ",";\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    font-size: 14px;\n  } ;\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),wt=Object(_.default)(bt)(xt||(xt=Object(N.a)(["\n  color: ",";\n  width: 40px;\n  height: 40px;\n  transition: transform 0.3s;\n"])),(function(e){return e.theme.color.text})),yt=function(){return Object(an.jsxs)(jt,{children:[Object(an.jsx)(wt,{}),Object(an.jsx)(gt,{children:"Ooops! Something went wrong..."}),Object(an.jsx)(Ot,{children:"Sorry, failed to load Github projects. You can check them directly on Github."}),Object(an.jsx)(sn,{href:it,rel:"noreferrer noopener",target:"_blank",children:"Go to GitHub"})]})},Ct=["title","titleId"];function vt(){return(vt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function kt(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function Mt(e,n){var t=e.title,o=e.titleId,i=kt(e,Ct);return r.createElement("svg",vt({width:160,height:160,viewBox:"0 0 160 160",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,ht||(ht=r.createElement("path",{d:"M132.547 27.4531C146.483 41.3894 154.312 60.2911 154.312 80C154.313 99.7089 146.483 118.611 132.547 132.547",stroke:"currentColor",strokeWidth:11.375})))}var Et,St,Lt,Bt,It,Ht,zt,Pt,Rt,Tt,Ft,Zt,Vt,Wt,Dt,Gt=r.forwardRef(Mt),_t=(t.p,Object(_.default)(jt)(Et||(Et=Object(N.a)(["\n  max-width: 475px;\n  margin: 88px 0 140px;\n\n  @media (max-width: ","px) {\n    margin: 24px 0 48px;\n  } ;\n"])),(function(e){return e.theme.media.mobileMax}))),Nt=Object(_.default)(Ot)(St||(St=Object(N.a)([""]))),At=_.default.div(Lt||(Lt=Object(N.a)(["\n  width: 160px;\n  height: 160px;\n  border-radius: 100%;\n  border: 11.375px solid ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    width: 80px;\n    height: 80px;\n    border: 5.6875px solid ",";\n  } ;\n"])),(function(e){return e.theme.color.circleLoader}),(function(e){return e.theme.media.mobileMax}),(function(e){return e.theme.color.circleLoader})),Jt=Object(_.default)(Gt)(Bt||(Bt=Object(N.a)(["\n  position: absolute;\n  color: ",";\n  animation-name: rotate;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n\n  @keyframes rotate {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  @media (max-width: ","px) {\n    width: 80px;\n    height: 80px;\n  } ;\n"])),(function(e){return e.theme.color.elipseLoader}),(function(e){return e.theme.media.mobileMax})),qt=function(){return Object(an.jsxs)(_t,{children:[Object(an.jsx)(Nt,{children:"Please wait, projects are being loaded..."}),Object(an.jsx)(At,{children:Object(an.jsx)(Jt,{})})]})},Ut=_.default.section(It||(It=Object(N.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  grid-gap: 20px;\n  margin: 24px 0 120px;\n  word-break: break-all;\n  justify-items: stretch;\n\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n    grid-gap: 16px;\n    margin: 24px 0 48px;\n  } ;\n"])),(function(e){return e.theme.media.tabletMax})),Xt=_.default.article(Ht||(Ht=Object(N.a)(["\n  background: ",";\n  border: 6px solid ",";\n  box-shadow: 0px -2px 50px ",",\n    0px 16px 58px ",";\n  border-radius: 4px;\n  max-width: 592px;\n  border-radius: 4px;\n  padding: 56px;\n  transition: transform 0.3s;\n\n  &:hover {\n    border: 6px solid ",";\n  }\n\n  @media (max-width: ","px) {\n    padding: 18px;\n  } ;\n"])),(function(e){return e.theme.color.sectionBackground}),(function(e){return e.theme.color.repoBorderColor}),(function(e){return e.theme.color.repoShadow2percent}),(function(e){return e.theme.color.repoShadow3percent}),(function(e){return e.theme.color.repoHoverShadow}),(function(e){return e.theme.media.mobileMax})),Yt=_.default.h4(zt||(zt=Object(N.a)(["\n  color: ",";\n  margin: 0 0 24px;\n  font-size: 16px;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    margin: 0 0 16px;\n  } ;\n"])),(function(e){return e.theme.color.repoHeader}),(function(e){return e.theme.media.mobileMax})),Kt=_.default.p(Pt||(Pt=Object(N.a)(["\n  color: ",";\n  margin: 0 0 24px;\n  font-size: 18px;\n  text-align: justify;\n  word-break: break-word;\n  letter-spacing: 0.05em;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    margin: 0 0 16px;\n    font-size: 14px;\n    text-align: left;\n  } ;\n"])),(function(e){return e.theme.color.textSecondary}),(function(e){return e.theme.media.mobileMax})),Qt=_.default.p(Rt||(Rt=Object(N.a)(["\n  color: ",";\n  margin: 0 0 24px;\n  font-size: 18px;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    margin: 0 0 16px;\n    font-size: 14px;\n  } ;\n"])),(function(e){return e.theme.color.textSecondary}),(function(e){return e.theme.media.mobileMax})),$t=_.default.a(Tt||(Tt=Object(N.a)(["\n  text-decoration: none;\n  color: ",";\n  transition: transform 0.3s;\n"])),(function(e){return e.theme.color.repoLink})),er=function(){var e=Object(l.c)(w),n="https://wojciechbylica.github.io/";return Object(an.jsx)(Ut,{children:Object.keys(e).map((function(t){return Object(an.jsxs)(Xt,{children:[Object(an.jsx)(Yt,{children:e[t].name}),Object(an.jsx)(Kt,{children:e[t].description}),Object(an.jsxs)(Qt,{children:["Demo:"," ",Object(an.jsx)($t,{href:"".concat(n).concat(e[t].name),target:"_blank",rel:"noreferrer noopener",children:"".concat(n).concat(e[t].name)})]}),Object(an.jsxs)(Qt,{children:["Repo:"," ",Object(an.jsx)($t,{href:e[t].clone_url,target:"_blank",rel:"noreferrer noopener",children:e[t].clone_url})]})]},t)}))})},nr=_.default.section(Ft||(Ft=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),tr=_.default.article(Zt||(Zt=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),rr=_.default.h2(Vt||(Vt=Object(N.a)(["\n  color: ",";\n  font-size: 30px;\n  margin: 12.99px 0 8px;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    font-size: 14px;\n    margin: 12.79px 0 16px;\n  } ;\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),or=_.default.p(Wt||(Wt=Object(N.a)(["\n  color: ",";\n  font-size: 20px;\n  margin: 0;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    font-size: 14px;\n  } ;\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),ir=Object(_.default)(Zn)(Dt||(Dt=Object(N.a)(["\n  color: ",";\n  width: 40px;\n  height: 40px;\n  transition: transform 0.3s;\n\n  @media (max-width: ","px) {\n    width: 32px;\n    height: 32px;\n  } ;\n"])),(function(e){return e.theme.color.iconPortfolio}),(function(e){return e.theme.media.mobileMax})),ar=function(){var e=Object(l.b)(),n=Object(l.c)(y);return Object(r.useEffect)((function(){e(j())}),[e]),Object(an.jsxs)(nr,{children:[Object(an.jsxs)(tr,{children:[Object(an.jsx)(ir,{}),Object(an.jsx)(rr,{children:"Portfolio"}),Object(an.jsx)(or,{children:"my recent projects"})]}),"loading"===n&&Object(an.jsx)(qt,{}),"error"===n&&Object(an.jsx)(yt,{}),"success"===n&&Object(an.jsx)(er,{})]})},cr=function(){return Object(an.jsxs)(Hn,{children:[Object(an.jsx)(un,{}),Object(an.jsxs)("main",{children:[Object(an.jsx)(In,{header:"My commercial experience\ud83d\udcc8",skills:pn}),Object(an.jsx)(In,{header:"My skillset includes \ud83d\udee0",skills:dn}),Object(an.jsx)(In,{header:"What I want to learn next \ud83d\ude80",skills:fn}),Object(an.jsx)(ar,{})]}),Object(an.jsx)(ct,{})]})},lr=function(){var e=Object(l.c)(p);return Object(an.jsxs)(_.ThemeProvider,{theme:e?se:le,children:[Object(an.jsx)(J.Normalize,{}),Object(an.jsx)(A,{}),Object(an.jsx)(cr,{})]})};a.a.render(Object(an.jsx)(o.a.StrictMode,{children:Object(an.jsx)(l.a,{store:G,children:Object(an.jsx)(lr,{})})}),document.getElementById("root")),c()}},[[65,1,2]]]);
//# sourceMappingURL=main.2af6b9ef.chunk.js.map