(this["webpackJsonppersonal-homepage"]=this["webpackJsonppersonal-homepage"]||[]).push([[0],{65:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(18),a=t.n(i),c=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),i(e),a(e)}))},l=t(9),s=t(14),u=t(37),d=Object(s.b)({name:"theme",initialState:{isDarkTheme:function(){var e=(new Date).getHours();return e<6||e>19}()},reducers:{toggleTheme:function(e){e.isDarkTheme=!e.isDarkTheme}}}),p=d.actions.toggleTheme,m=function(e){return function(e){return e.theme}(e).isDarkTheme},f=d.reducer,x=Object(s.b)({name:"personalHomepage",initialState:{repositories:null,status:"initial"},reducers:{fetchLoadingReposSuccess:function(e,n){return{status:"success",repositories:n.payload}},fetchLoadingReposLoading:function(){return{status:"loading",repositories:null}},fetchLoadingReposError:function(){return{status:"error",repositories:null}}}}),h=x.actions,b=h.fetchLoadingReposSuccess,j=h.fetchLoadingReposLoading,g=h.fetchLoadingReposError,O=function(e){return e.personalHomepage},w=function(e){return O(e).repositories},y=function(e){return O(e).status},C=x.reducer,v=t(12),k=t.n(v),M=t(20),S=t(16),E=t(32),L=t.n(E),B=function(){return L.a.get("".concat("https://api.github.com","/users/").concat("WojciechBylica","/repos")).then((function(e){return e.data}))},z=k.a.mark(P),I=k.a.mark(H);function P(){var e;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(S.b)(2e3);case 3:return n.next=5,Object(S.a)(B);case 5:return e=n.sent,n.next=8,Object(S.c)(b(e));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(S.c)(g());case 14:case 15:case"end":return n.stop()}}),z,null,[[0,10]])}function H(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.d)(j.type,P);case 2:case"end":return e.stop()}}),I)}var R=k.a.mark(F);function F(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([H()]);case 2:case"end":return e.stop()}}),R)}var T=Object(u.a)(),Z=Object(s.a)({reducer:{theme:f,personalHomepage:C},middleware:[T]});T.run(F);var W,D,V,G=Z,_=t(3),J=t(4),A=Object(_.createGlobalStyle)(W||(W=Object(J.a)(["\nhtml {\n  box-sizing: border-box;\n};\n\n*, ::after, ::before {\n  box-sizing: inherit;\n};\n\nbody {\n    font-family: 'Inter', sans-serif;\n    background: ",";\n    margin: 0 auto;\n    transition: transform 0.3s;\n};\n\n#root {\n    margin: 5% auto;\n    max-width: 1216px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n};\n"])),(function(e){return e.theme.color.background})),N=t(36),q=t(17),U="#FFFFFF",X="#E5E5E5",Y="#d1d5da4d",K="#d1d5da1a",Q="#6E7E91",$="#252525",ee="#0366D6",ne="#2188FF",te="#363636b8",re="#090a3308",oe="#090a3305",ie="#0366d633",ae="#0366d680",ce={media:{mobileMax:767,tabletMax:991}},le=Object(q.a)(Object(q.a)({},ce),{},{color:{background:X,text:$,textSecondary:Q,linkButtonBg:ee,linkButtonColor:U,buttonBackground:X,buttonBorder:Q,buttonToggle:Q,buttonIcon:U,sectionBackground:U,sectionHeaderBorder:Y,bulletColor:ee,emailHover:ee,iconFocus:ee,iconPortfolio:ee,circleLoader:Y,elipseLoader:ee,repoBorderColor:Y,repoShadow2percent:oe,repoShadow3percent:re,repoHoverShadow:ie,repoHeader:ee,repoLink:ee}}),se=Object(q.a)(Object(q.a)({},ce),{},{color:{background:$,text:U,textSecondary:U,linkButtonBg:ne,buttonBackground:te,linkButtonColor:U,buttonBorder:U,buttonToggle:U,buttonIcon:$,sectionBackground:te,sectionHeaderBorder:K,bulletColor:ne,emailHover:ne,iconFocus:ne,iconPortfolio:ne,circleLoader:te,elipseLoader:ne,repoBorderColor:K,repoShadow2percent:oe,repoShadow3percent:re,repoHoverShadow:ae,repoHeader:U,repoLink:ne}}),ue=["title","titleId"];function de(){return(de=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function pe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function me(e,n){var t=e.title,o=e.titleId,i=pe(e,ue);return r.createElement("svg",de({width:24,height:25,viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,D||(D=r.createElement("path",{d:"M17.2678 9.56104L13.0024 12.9953C12.1952 13.6282 11.0636 13.6282 10.2564 12.9953L5.95435 9.56104",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),V||(V=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.88787 4H16.3158C17.6752 4.01525 18.969 4.58993 19.896 5.5902C20.823 6.59048 21.3022 7.92903 21.222 9.29412V15.822C21.3022 17.1871 20.823 18.5256 19.896 19.5259C18.969 20.5262 17.6752 21.1009 16.3158 21.1161H6.88787C3.96796 21.1161 2 18.7407 2 15.822V9.29412C2 6.37545 3.96796 4 6.88787 4Z",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var fe,xe,he,be,je,ge,Oe,we,ye,Ce,ve,ke,Me,Se,Ee,Le,Be=r.forwardRef(me),ze=(t.p,_.default.article(fe||(fe=Object(J.a)(["\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 63px;\n\n    @media ( max-width: ","px) {\n        flex-direction: column;\n        margin-bottom: 48px;\n    };\n"])),(function(e){return e.theme.media.mobileMax}))),Ie=_.default.img(xe||(xe=Object(J.a)(["\n    display:flex;\n    width: 30vw;\n    max-width: 384px;\n    height: 30vw;\n    max-height: 384px;\n    flex-shrink: 2;\n    border-radius: 100%;\n\n    @media (max-width: ","px) {\n        width: 132px;\n        height: 132px;\n    };\n"])),(function(e){return e.theme.media.mobileMax})),Pe=_.default.div(he||(he=Object(J.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    margin-left: 66px;\n\n    @media (max-width: ","px) {\n        margin: 0;\n    };\n"])),(function(e){return e.theme.media.mobileMax})),He=_.default.p(be||(be=Object(J.a)(["\n    font-weight: bold;\n    font-size: 12px;\n    line-height: 130%;\n    text-transform: uppercase;\n    color: ",";\n    transition: transform 0.3s;\n\n    @media (max-width: ","px) {\n        margin: 12.67px 0 8px;\n    };\n"])),(function(e){return e.theme.color.textSecondary}),(function(e){return e.theme.media.mobileMax})),Re=_.default.h1(je||(je=Object(J.a)(["\n    font-weight: 900;\n    font-size: 38px;\n    line-height: 46px;\n    letter-spacing: 0.05em;\n    color: ",";\n    margin: 0;\n    transition: transform 0.3s;\n\n    @media (max-width: ","px) {\n        font-size: 22px;\n    };\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),Fe=_.default.p(ge||(ge=Object(J.a)(["\n    font-size: 20px;\n    line-height: 140%;\n    letter-spacing: 0.05em;\n    color: ",";\n    margin: 32px 0 35px;\n    transition: transform 0.3s;\n\n    @media (max-width: ","px) {\n        margin: 16px 0 24px;\n        font-size: 12px;\n    };\n"])),(function(e){return e.theme.color.textSecondary}),(function(e){return e.theme.media.mobileMax})),Te=Object(_.default)(Be)(Oe||(Oe=Object(J.a)(["\ncolor: ",";\nmargin-right: 18.77px;\nwidth: 19.23px;\nheight: 17.12px;\ntransition: transform 0.3s;\n"])),(function(e){return e.theme.color.white})),Ze=t.p+"static/media/wojciechBylica.35109ebb.png",We=["title","titleId"];function De(){return(De=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Ve(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function Ge(e,n){var t=e.title,o=e.titleId,i=Ve(e,We);return r.createElement("svg",De({width:14,height:14,viewBox:"0 0 14 14",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,we||(we=r.createElement("path",{d:"M6.99989 2.7179C4.63495 2.7179 2.71777 4.63507 2.71777 7.00001C2.71777 9.36495 4.63495 11.2821 6.99989 11.2821C9.36483 11.2821 11.282 9.36495 11.282 7.00001C11.282 4.63507 9.36483 2.7179 6.99989 2.7179ZM6.99989 10.5V3.50002C8.66175 3.4956 10.0949 4.6667 10.4217 6.29611C10.526 6.75959 10.526 7.24044 10.4217 7.70392C10.0949 9.3334 8.66175 10.5045 6.99989 10.5Z",fill:"currentColor"})),ye||(ye=r.createElement("path",{d:"M10.4412 3.55866C10.5134 3.63235 10.6118 3.67449 10.7149 3.67599C10.8181 3.67453 10.9165 3.63235 10.9887 3.55866L11.9468 2.60056C12.1196 2.47095 12.1546 2.22585 12.025 2.05306C11.8954 1.88026 11.6503 1.84527 11.4775 1.97484C11.4478 1.99707 11.4215 2.02341 11.3993 2.05306L10.4412 3.01116C10.29 3.14986 10.2799 3.38489 10.4186 3.53605C10.4258 3.54391 10.4333 3.55144 10.4412 3.55866Z",fill:"currentColor"})),Ce||(Ce=r.createElement("path",{d:"M3.48036 10.4415C3.34132 10.3372 3.15011 10.3372 3.01107 10.4415L2.05297 11.3996C1.90177 11.5383 1.89167 11.7733 2.03041 11.9245C2.03759 11.9323 2.04515 11.9399 2.05297 11.9471C2.19167 12.0983 2.42671 12.1084 2.57787 11.9696C2.58573 11.9624 2.59325 11.9549 2.60044 11.9471L3.55854 10.9889C3.68815 10.8162 3.65315 10.5711 3.48036 10.4415Z",fill:"currentColor"})),ve||(ve=r.createElement("path",{d:"M11.9471 11.3995L10.989 10.4414C10.8162 10.3118 10.5711 10.3468 10.4415 10.5196C10.3372 10.6587 10.3372 10.8499 10.4415 10.9889L11.3996 11.947C11.5383 12.0982 11.7733 12.1083 11.9245 11.9696C11.9323 11.9624 11.9399 11.9548 11.947 11.947C12.0982 11.8083 12.1083 11.5733 11.9696 11.4221C11.9625 11.4142 11.9549 11.4067 11.9471 11.3995Z",fill:"currentColor"})),ke||(ke=r.createElement("path",{d:"M3.01095 3.55866C3.14965 3.70986 3.38468 3.71997 3.53585 3.58123C3.54371 3.57404 3.55123 3.56648 3.55842 3.55866C3.70962 3.41996 3.71972 3.18493 3.58098 3.03377C3.5738 3.02591 3.56624 3.01838 3.55842 3.0112L2.60031 2.0531C2.42752 1.92349 2.18242 1.95852 2.05281 2.13132C1.94854 2.27035 1.94854 2.46156 2.05281 2.6006L3.01095 3.55866Z",fill:"currentColor"})),Me||(Me=r.createElement("path",{d:"M6.99995 2.13129C7.21593 2.13129 7.39101 1.95621 7.39101 1.74023V0.391063C7.39101 0.175078 7.21593 0 6.99995 0C6.78396 0 6.60889 0.175078 6.60889 0.391063V1.74023C6.60889 1.95621 6.78396 2.13129 6.99995 2.13129Z",fill:"currentColor"})),Se||(Se=r.createElement("path",{d:"M6.99995 11.8688C6.78396 11.8688 6.60889 12.0439 6.60889 12.2598V13.609C6.60889 13.825 6.78396 14.0001 6.99995 14.0001C7.21593 14.0001 7.39101 13.825 7.39101 13.609V12.2598C7.39101 12.0439 7.21593 11.8688 6.99995 11.8688Z",fill:"currentColor"})),Ee||(Ee=r.createElement("path",{d:"M13.6089 6.60901H12.2597C12.0437 6.60901 11.8687 6.78409 11.8687 7.00007C11.8687 7.21605 12.0437 7.39113 12.2597 7.39113H13.6089C13.8249 7.39113 13.9999 7.21605 13.9999 7.00007C13.9999 6.78409 13.8248 6.60901 13.6089 6.60901Z",fill:"currentColor"})),Le||(Le=r.createElement("path",{d:"M2.13129 7.00007C2.13129 6.78409 1.95621 6.60901 1.74023 6.60901H0.391063C0.175078 6.60901 0 6.78409 0 7.00007C0 7.21605 0.175078 7.39113 0.391063 7.39113H1.74023C1.95621 7.39113 2.13129 7.21605 2.13129 7.00007Z",fill:"currentColor"})))}var _e,Je,Ae,Ne,qe,Ue,Xe,Ye,Ke,Qe=r.forwardRef(Ge),$e=(t.p,_.default.section(_e||(_e=Object(J.a)(["\n  display: flex;\n  justify-content: flex-end;\n"])))),en=_.default.button(Je||(Je=Object(J.a)(["\n    border: none;\n    background: inherit;\n    position: absolute;\n    height: 26px;\n    width: 159px;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 0px;\n"]))),nn=_.default.span(Ae||(Ae=Object(J.a)(["\n    text-transform: uppercase;\n    color: ",";\n    padding: 5px 0;\n    line-height: 15.6px;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 12px;\n    line-height: 130%;\n    flex-grow: 0;\n    transition: transform 0.3s;\n\n    @media ( max-width: ","px) {\n        display: none;\n    };\n"])),(function(e){return e.theme.color.textSecondary}),(function(e){return e.theme.media.mobileMax})),tn=_.default.span(Ne||(Ne=Object(J.a)(["\n    width: 47.06px;\n    height: 25.07px;\n    border-radius: 12px;\n    border: 1px solid ",";  \n    background-color: ","; \n    margin: 0 0 0 12px;   \n    display: flex;\n    align-items: center;\n    padding: 3px;\n    transition: transform 0.3s;\n"])),(function(e){return e.theme.color.buttonBorder}),(function(e){return e.theme.color.buttonBackground})),rn=_.default.span(qe||(qe=Object(J.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    transition: transform 0.3s;\n    width: 20px;\n    height: 20px;\n    background: ",";   \n\n    ","\n"])),(function(e){return e.theme.color.buttonToggle}),(function(e){return e.moveToRight&&Object(_.css)(Ue||(Ue=Object(J.a)(["\n        transform: translateX(20px); \n    "])))})),on=Object(_.default)(Qe)(Xe||(Xe=Object(J.a)(["\n   color: ",";\n"])),(function(e){return e.theme.color.buttonIcon})),an=t(2),cn=function(){var e=Object(l.c)(m),n=Object(l.b)();return Object(an.jsx)($e,{children:Object(an.jsxs)(en,{onClick:function(){return n(p())},children:[Object(an.jsxs)(nn,{children:["dark mode ",e?"on":"off"]}),Object(an.jsx)(tn,{children:Object(an.jsx)(rn,{moveToRight:e,children:Object(an.jsx)(on,{})})})]})})},ln="wojciechbylicaarts@gmail.com",sn=_.default.a(Ye||(Ye=Object(J.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 16px;\n    position: relative;\n    border-radius: 4px;\n    font-weight: 600;\n    font-size: 20.0584px;\n    letter-spacing: 0.05em;\n    text-decoration: none;\n    border: 1px solid rgba(209, 213, 218, 0.3);\n    background: ",";\n    color: ",";\n    transition: transform 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;\n    };\n\n    &:active {\n        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);\n    };\n\n    @media (max-width: ","px) {\n        font-size: 18px;\n    };\n"])),(function(e){return e.theme.color.linkButtonBg}),(function(e){return e.theme.color.linkButtonColor}),(function(e){return e.theme.media.mobileMax})),un=function(){return Object(an.jsxs)("header",{children:[Object(an.jsx)(cn,{}),Object(an.jsxs)(ze,{children:[Object(an.jsx)(Ie,{src:Ze,alt:"Wojciech Bylica"}),Object(an.jsxs)(Pe,{children:[Object(an.jsx)(He,{children:"This is"}),Object(an.jsx)(Re,{children:"Wojciech Bylica"}),Object(an.jsx)(Fe,{children:"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb \ud83d\udcbb I\u2019m a passionate Frontend Developer in love with React,currently looking for new job opportunities."}),Object(an.jsxs)(sn,{href:"mailto:".concat(ln),children:[Object(an.jsx)(Te,{}),Object(an.jsx)("span",{children:"Hire Me"})]})]})]})]})},dn=["Semantic & accessible HTML","Responsive Web Design","Teamwork","Immutability","Markdown","CSS BEM convention","CSS Grid","CSS flexbox","React Router","Redux-Saga","Redux (Toolkit)","React Hooks","Error handling","Working with API (fetch, axios)","JavaScript: ES6+","Promises, Async/Await","GitHub Pull Requests & Review","Trello","Scrum","NPM","React","GIT"],pn=["React Context","Node.js","Cypress","Unit testing","TypeScript","JS classes"],mn=["title","titleId"];function fn(){return(fn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function xn(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function hn(e,n){var t=e.title,o=e.titleId,i=xn(e,mn);return r.createElement("svg",fn({width:9,height:9,viewBox:"0 0 9 9",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,Ke||(Ke=r.createElement("circle",{cx:4.5,cy:4.5,r:4.5,fill:"currentColor"})))}var bn,jn,gn,On,wn,yn,Cn,vn=r.forwardRef(hn),kn=(t.p,_.default.section(bn||(bn=Object(J.a)(["\n    background: ",";\n    margin-bottom: 72px;\n    padding: 32px 32px 24px;\n    transition: transform 0.3s;\n    \n    @media ( max-width: ","px) {\n        margin-bottom: 50px;\n        padding: 16px 16px 8px;\n    };\n"])),(function(e){return e.theme.color.sectionBackground}),(function(e){return e.theme.media.mobileMax}))),Mn=_.default.h2(jn||(jn=Object(J.a)(["\n    margin: 0;\n    font-size: 30px;\n    padding-bottom: 15px;\n    border-bottom: 1px solid ",";\n    color: ",";\n    transition: transform 0.3s;\n\n    @media ( max-width: ","px) {\n        font-size: 18px;\n        padding-bottom: 12px;\n    };\n"])),(function(e){return e.theme.color.sectionHeaderBorder}),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),Sn=_.default.ul(gn||(gn=Object(J.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    margin: 32px 0 0;\n    padding-left: 0;\n\n    @media ( max-width: ","px) {\n        grid-template-columns: 1fr 1fr;\n    };\n\n    @media ( max-width: ","px) {\n        grid-template-columns: 1fr; \n        margin: 12px 0 0;\n    };\n"])),(function(e){return e.theme.media.tabletMax}),(function(e){return e.theme.media.mobileMax})),En=_.default.li(On||(On=Object(J.a)(["\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n    flex-grow: 0;\n    font-size: 18px;\n    margin: 0 0 8px;\n    color: ",";\n    transition: transform 0.3s;\n\n    @media ( max-width: ","px) {\n       font-size: 14px;\n    };\n"])),(function(e){return e.theme.color.textSecondary}),(function(e){return e.theme.media.mobileMax})),Ln=Object(_.default)(vn)(wn||(wn=Object(J.a)(["\n    color: ",";;\n    margin-right: 16px;\n    width: 9px;\n    height: 9px;\n    transition: transform 0.3s;\n\n    @media ( max-width: ","px) {\n        margin-right: 8px;\n        width: 6px;\n        height: 6px;\n    };\n"])),(function(e){return e.theme.color.bulletColor}),(function(e){return e.theme.media.mobileMax})),Bn=function(e){var n=e.header,t=e.skills;return Object(an.jsxs)(kn,{children:[Object(an.jsx)(Mn,{children:n}),Object(an.jsx)(Sn,{children:t.map((function(e){return Object(an.jsxs)(En,{children:[Object(an.jsx)(Ln,{}),e]},e)}))})]})},zn=(_.default.div(yn||(yn=Object(J.a)(["\n    margin: 10% 5%;\n    max-width: 1216px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n"]))),["title","titleId"]);function In(){return(In=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Pn(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function Hn(e,n){var t=e.title,o=e.titleId,i=Pn(e,zn);return r.createElement("svg",In({width:48,height:48,viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,Cn||(Cn=r.createElement("path",{d:"M24.0432 0.179932C10.8147 0.179932 0.0876465 11.0878 0.0876465 24.5445C0.0876465 35.3096 6.95165 44.4426 16.4699 47.6643C17.6672 47.8899 18.1067 47.1358 18.1067 46.4922C18.1067 45.9112 18.0845 43.9919 18.0742 41.956C11.4097 43.4299 10.0034 39.0812 10.0034 39.0812C8.9137 36.265 7.34358 35.5161 7.34358 35.5161C5.17009 34.0039 7.50742 34.035 7.50742 34.035C9.91297 34.2065 11.1796 36.5458 11.1796 36.5458C13.3162 40.2707 16.7837 39.1938 18.1507 38.5712C18.3657 36.9969 18.9866 35.9212 19.6716 35.3132C14.3508 34.6971 8.7574 32.6079 8.7574 23.2719C8.7574 20.6118 9.6932 18.4383 11.2256 16.732C10.9769 16.1179 10.1569 13.6402 11.4577 10.2841C11.4577 10.2841 13.4693 9.62928 18.0472 12.7816C19.9581 12.2418 22.0074 11.971 24.0432 11.9618C26.0791 11.971 28.13 12.2418 30.0444 12.7816C34.6167 9.62928 36.6256 10.2841 36.6256 10.2841C37.9295 13.6402 37.1091 16.1179 36.8604 16.732C38.3964 18.4383 39.3259 20.6118 39.3259 23.2719C39.3259 32.6301 33.7218 34.6906 28.3874 35.2938C29.2467 36.0499 30.0123 37.5327 30.0123 39.8059C30.0123 43.0655 29.9845 45.6893 29.9845 46.4922C29.9845 47.1406 30.4157 47.9003 31.63 47.6611C41.1431 44.4357 47.9984 35.3059 47.9984 24.5445C47.9984 11.0878 37.273 0.179932 24.0432 0.179932Z",fill:"currentColor"})))}var Rn,Fn,Tn,Zn,Wn,Dn,Vn,Gn=r.forwardRef(Hn),_n=(t.p,_.default.p(Rn||(Rn=Object(J.a)(["\n    font-size: 12px;\n    font-weight: 700;\n    color: ",";\n    transition: transform 0.3s;\n"])),(function(e){return e.theme.color.textSecondary}))),Jn=_.default.a(Fn||(Fn=Object(J.a)(["\n    font-size:32px;\n    font-weight: 900;\n    color: ",";\n    margin-top: 24px;\n    text-decoration: none;\n    transition: transform 0.3s;\n\n    &:hover {\n        color: ","\n    };\n\n    @media (max-width: ","px) {\n        font-size: 18px;\n        margin-top: 12px;\n    };\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.emailHover}),(function(e){return e.theme.media.mobileMax})),An=_.default.article(Tn||(Tn=Object(J.a)(["\n    color: ",";\n    font-size: 18px;\n    max-width: 670px;\n    margin: 24px 0 56px;\n    line-height: 140%;\n    transition: transform 0.3s;\n\n    @media (max-width: ","px) {\n        font-size: 14px;\n        margin: 12px 0 40px;\n    };\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),Nn=Object(_.default)(Gn)(Zn||(Zn=Object(J.a)(["\n    color: ",";\n    transition: transform 0.3s;\n\n    &:focus {\n        color: ","\n    };\n\n    &:hover {\n        color: ","\n    };\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.color.iconFocus}),(function(e){return e.theme.color.emailHover})),qn="https://github.com/WojciechBylica",Un=function(){return Object(an.jsxs)("footer",{children:[Object(an.jsx)(_n,{children:"Let's talk"}),Object(an.jsx)(Jn,{href:"mailto:".concat(ln),children:ln}),Object(an.jsx)(An,{children:"I\u2019m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me"}),Object(an.jsx)("a",{href:qn,rel:"noreferrer noopener",target:"_blank",children:Object(an.jsx)(Nn,{})})]})},Xn=["title","titleId"];function Yn(){return(Yn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Kn(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function Qn(e,n){var t=e.title,o=e.titleId,i=Kn(e,Xn);return r.createElement("svg",Yn({width:41,height:37,viewBox:"0 0 41 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,Wn||(Wn=r.createElement("path",{d:"M18.501 26.5392C18.501 25.7112 19.173 25.0272 20.001 25.0272C20.829 25.0272 21.501 25.6892 21.501 26.5172V26.5392C21.501 27.3672 20.829 28.0392 20.001 28.0392C19.173 28.0392 18.501 27.3672 18.501 26.5392Z",fill:"currentColor"})),Dn||(Dn=r.createElement("path",{d:"M5.59168 34.8358H34.5557C36.8497 34.7158 38.6137 32.7618 38.4957 30.4678C38.4697 30.0038 38.3697 29.5458 38.1937 29.1178L23.6397 3.6458C22.5277 1.6358 19.9977 0.907801 17.9877 2.0218C17.3037 2.3978 16.7397 2.9618 16.3617 3.6458L1.80768 29.1178C0.94368 31.2458 1.96768 33.6698 4.09368 34.5358C4.52568 34.7098 4.98168 34.8098 5.44568 34.8358",stroke:"currentColor",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),Vn||(Vn=r.createElement("path",{d:"M19.9805 20.7922V14.5922",stroke:"currentColor",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})))}var $n,et,nt,tt,rt,ot=r.forwardRef(Qn),it=(t.p,_.default.article($n||($n=Object(J.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-width: 426.53px;\n    margin: 95.5px 0 140px;\n\n    @media ( max-width: ","px) {\n        margin: 24px 0 48px;\n    };\n"])),(function(e){return e.theme.media.mobileMax}))),at=_.default.h3(et||(et=Object(J.a)(["\n    margin: 23.16px 0 32px;\n    color: ",";\n    transition: transform 0.3s;\n\n    @media ( max-width: ","px) {\n        font-size: 18px;\n    };\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),ct=_.default.p(nt||(nt=Object(J.a)(["\n    margin: 0 0 32px;\n    font-size: 20px;\n    line-height: 140%;\n    text-align: center;\n    letter-spacing: 0.05em;\n    color: ",";\n    transition: transform 0.3s;\n\n    @media ( max-width: ","px) {\n        font-size: 14px;\n    };\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),lt=Object(_.default)(ot)(tt||(tt=Object(J.a)(["\n    color: ",";\n    width: 40px;\n    height: 40px;     \n    transition: transform 0.3s;\n"])),(function(e){return e.theme.color.text})),st=function(){return Object(an.jsxs)(it,{children:[Object(an.jsx)(lt,{}),Object(an.jsx)(at,{children:"Ooops! Something went wrong..."}),Object(an.jsx)(ct,{children:"Sorry, failed to load Github projects. You can check them directly on Github."}),Object(an.jsx)(sn,{href:qn,rel:"noreferrer noopener",target:"_blank",children:"Go to GitHub"})]})},ut=["title","titleId"];function dt(){return(dt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function pt(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function mt(e,n){var t=e.title,o=e.titleId,i=pt(e,ut);return r.createElement("svg",dt({width:160,height:160,viewBox:"0 0 160 160",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,rt||(rt=r.createElement("path",{d:"M132.547 27.4531C146.483 41.3894 154.312 60.2911 154.312 80C154.313 99.7089 146.483 118.611 132.547 132.547",stroke:"currentColor",strokeWidth:11.375})))}var ft,xt,ht,bt,jt,gt,Ot,wt,yt,Ct,vt,kt,Mt,St,Et,Lt=r.forwardRef(mt),Bt=(t.p,Object(_.default)(it)(ft||(ft=Object(J.a)(["\n    max-width: 475px;\n    margin: 88px 0 140px;\n\n    @media ( max-width: ","px) {\n        margin: 24px 0 48px;\n    };\n"])),(function(e){return e.theme.media.mobileMax}))),zt=Object(_.default)(ct)(xt||(xt=Object(J.a)([""]))),It=_.default.div(ht||(ht=Object(J.a)(["\n    width: 160px;\n    height: 160px;\n    border-radius: 100%;\n    border: 11.375px solid ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: transform 0.3s;\n\n    @media ( max-width: ","px) {\n        width: 80px;\n        height: 80px;\n        border: 5.6875px solid ",";\n    };\n"])),(function(e){return e.theme.color.circleLoader}),(function(e){return e.theme.media.mobileMax}),(function(e){return e.theme.color.circleLoader})),Pt=Object(_.default)(Lt)(bt||(bt=Object(J.a)(["\nposition: absolute;\ncolor: ",";\nanimation-name: rotate;\nanimation-duration: 2s;\nanimation-iteration-count: infinite;\nanimation-timing-function: linear;\n\n@keyframes rotate {\n    from{\n        transform: rotate(0deg);\n    };\n    to{\n        transform: rotate(360deg);\n    };\n};\n\n@media ( max-width: ","px) {\n        width: 80px;\n        height: 80px;\n    };\n"])),(function(e){return e.theme.color.elipseLoader}),(function(e){return e.theme.media.mobileMax})),Ht=function(){return Object(an.jsxs)(Bt,{children:[Object(an.jsx)(zt,{children:"Please wait, projects are being loaded..."}),Object(an.jsx)(It,{children:Object(an.jsx)(Pt,{})})]})},Rt=_.default.section(jt||(jt=Object(J.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    grid-gap: 20px;\n    margin: 24px 0 120px;\n    word-break: break-all;\n    justify-items: stretch;\n\n    @media ( max-width: ","px) {\n        grid-template-columns: 1fr;\n        grid-gap: 16px;\n        margin: 24px 0 48px;\n    };\n"])),(function(e){return e.theme.media.tabletMax})),Ft=_.default.article(gt||(gt=Object(J.a)(["\n    background: ",";\n    border: 6px solid ",";\n    box-shadow: 0px -2px 50px ",", \n                0px 16px 58px ",";\n    border-radius: 4px;\n    max-width: 592px;\n    border-radius: 4px;\n    padding: 56px;\n    transition: transform 0.3s;\n    \n    &:hover{\n        border: 6px solid ",";\n    };\n\n    @media ( max-width: ","px) {\n        padding: 18px;\n    };\n"])),(function(e){return e.theme.color.sectionBackground}),(function(e){return e.theme.color.repoBorderColor}),(function(e){return e.theme.color.repoShadow2percent}),(function(e){return e.theme.color.repoShadow3percent}),(function(e){return e.theme.color.repoHoverShadow}),(function(e){return e.theme.media.mobileMax})),Tt=_.default.h4(Ot||(Ot=Object(J.a)(["\n    color: ",";\n    margin: 0 0 24px;\n    font-size: 16px;\n    transition: transform 0.3s;\n\n    @media ( max-width: ","px) {\n        margin: 0 0 16px;\n    };\n"])),(function(e){return e.theme.color.repoHeader}),(function(e){return e.theme.media.mobileMax})),Zt=_.default.p(wt||(wt=Object(J.a)(["\n    color: ",";\n    margin: 0 0 24px;\n    font-size: 18px;\n    text-align: justify;\n    letter-spacing: 0.05em;\n    transition: transform 0.3s;\n\n    @media ( max-width: ","px) {\n        margin: 0 0 16px;\n        font-size: 14px;\n        text-align: left;\n    };\n"])),(function(e){return e.theme.color.textSecondary}),(function(e){return e.theme.media.mobileMax})),Wt=_.default.p(yt||(yt=Object(J.a)(["\n    color: ",";\n    margin: 0 0 24px;\n    font-size: 18px;\n    transition: transform 0.3s;\n\n    @media ( max-width: ","px) {\n        margin: 0 0 16px;\n        font-size: 14px;\n    };\n"])),(function(e){return e.theme.color.textSecondary}),(function(e){return e.theme.media.mobileMax})),Dt=_.default.a(Ct||(Ct=Object(J.a)(["\n    text-decoration: none;\n    color: ",";\n    transition: transform 0.3s;\n"])),(function(e){return e.theme.color.repoLink})),Vt=function(){var e=Object(l.c)(w);return Object(an.jsx)(Rt,{children:Object.keys(e).map((function(n){return Object(an.jsxs)(Ft,{children:[Object(an.jsx)(Tt,{children:e[n].name}),Object(an.jsx)(Zt,{children:e[n].description}),Object(an.jsxs)(Wt,{children:["Demo: ",Object(an.jsx)(Dt,{href:e[n].url,target:"_blank",rel:"noreferrer noopener",children:e[n].url})]}),Object(an.jsxs)(Wt,{children:["Repo: ",Object(an.jsx)(Dt,{href:e[n].clone_url,target:"_blank",rel:"noreferrer noopener",children:e[n].clone_url})]})]},n)}))})},Gt=_.default.section(vt||(vt=Object(J.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),_t=_.default.article(kt||(kt=Object(J.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),Jt=_.default.h2(Mt||(Mt=Object(J.a)(["\n    color: ",";\n    font-size: 30px;\n    margin: 12.99px 0 8px;\n    transition: transform 0.3s;\n\n    @media (max-width: ","px) {\n        font-size: 14px;\n        margin: 12.79px 0 16px;\n    };\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),At=_.default.p(St||(St=Object(J.a)(["\n    color: ",";\n    font-size: 20px;\n    margin: 0;\n    transition: transform 0.3s;\n\n    @media (max-width: ","px) {\n        font-size: 14px;\n    };\n"])),(function(e){return e.theme.color.text}),(function(e){return e.theme.media.mobileMax})),Nt=Object(_.default)(Gn)(Et||(Et=Object(J.a)(["\n    color: ",";\n    width: 40px;\n    height: 40px;   \n    transition: transform 0.3s;\n\n    @media ( max-width: ","px) {\n        width: 32px;\n        height: 32px;\n    };\n"])),(function(e){return e.theme.color.iconPortfolio}),(function(e){return e.theme.media.mobileMax})),qt=function(){var e=Object(l.b)(),n=Object(l.c)(y);return Object(r.useEffect)((function(){e(j())}),[e]),Object(an.jsxs)(Gt,{children:[Object(an.jsxs)(_t,{children:[Object(an.jsx)(Nt,{}),Object(an.jsx)(Jt,{children:"Portfolio"}),Object(an.jsx)(At,{children:"my recent projects"})]}),"loading"===n&&Object(an.jsx)(Ht,{}),"error"===n&&Object(an.jsx)(st,{}),"success"===n&&Object(an.jsx)(Vt,{})]})},Ut=function(){return Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(un,{}),Object(an.jsxs)("main",{children:[Object(an.jsx)(Bn,{header:"My skillset includes \ud83d\udee0",skills:dn}),Object(an.jsx)(Bn,{header:"What I want to learn next \ud83d\ude80",skills:pn}),Object(an.jsx)(qt,{})]}),Object(an.jsx)(Un,{})]})},Xt=function(){var e=Object(l.c)(m);return Object(an.jsxs)(_.ThemeProvider,{theme:e?se:le,children:[Object(an.jsx)(N.Normalize,{}),Object(an.jsx)(A,{}),Object(an.jsx)(Ut,{})]})};a.a.render(Object(an.jsx)(o.a.StrictMode,{children:Object(an.jsx)(l.a,{store:G,children:Object(an.jsx)(Xt,{})})}),document.getElementById("root")),c()}},[[65,1,2]]]);
//# sourceMappingURL=main.81a4feec.chunk.js.map