(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={itemSlot:"item-slot_itemSlot__31P2B",equipped:"item-slot_equipped__1HRSi",quality_worn:"item-slot_quality_worn__3DYkB",itemData:"item-slot_itemData__3LHAr",qualityStripe:"item-slot_qualityStripe__2oUrN",quality_standard:"item-slot_quality_standard__17OWF",quality_specialized:"item-slot_quality_specialized__Piph4",quality_superior:"item-slot_quality_superior__12XC_",quality_highend:"item-slot_quality_highend__17UWP",quality_exotic:"item-slot_quality_exotic__3QMCm",details:"item-slot_details__1zcb4",brand:"item-slot_brand__1ZmX5",level:"item-slot_level__1GZeU",scoreValue:"item-slot_scoreValue__3NMcC",stats:"item-slot_stats__2AhaJ",armorLabel:"item-slot_armorLabel__Aty-E",talents:"item-slot_talents__EilGg"}},,function(e,t,a){e.exports={app:"app_app__19emi",main:"app_main__22gwj"}},function(e,t,a){e.exports={itemSelect:"item-select_itemSelect__30-br",contents:"item-select_contents__2dQz7"}},,,,function(e,t,a){e.exports={equippedItems:"equipped-items_equippedItems__CvJjF"}},,function(e,t,a){e.exports=a(17)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(6),r=a.n(l),o=(a(16),a(9)),c=a(3),s=a.n(c),m=a(4),u=a.n(m);function _(e){return e[Math.floor(Math.random()*e.length)]}var d,p=["worn","standard","specialized","superior","highend","exotic"],v=['"Awe" Thigh Mag/Holster',"Artemis Fast Draw Holster"],f=function(){return _(v)},E="weapon",q="armor",y=a(2),g=["fenris","douglasharding","arialdi","gila"],h=(d={},Object(y.a)(d,"fenris","Fenris"),Object(y.a)(d,"douglasharding","Douglas & Harding"),Object(y.a)(d,"arialdi","Arialdi Holdings"),Object(y.a)(d,"gila","Gila Group"),d),b=function(){return _(g)},N=a(7),w=a.n(N),S=a(1),k=a.n(S),C=function(e){var t,a=e.itemData,i=e.equipped;if(!a)return null;var l,r=null;a.itemType===E&&(r=n.createElement("div",null)),a.itemType===q&&(l=a,r=n.createElement(n.Fragment,null,n.createElement("div",{className:k.a.details},n.createElement("div",{className:k.a.name},l.name),n.createElement("div",{className:k.a.brand},h[l.brand])),n.createElement("div",{className:k.a.level},n.createElement("div",{className:k.a.scoreLabel},"Score"),n.createElement("div",{className:k.a.scoreValue},"450")),n.createElement("div",{className:k.a.stats},n.createElement("div",{className:k.a.armorLabel},"ARM"),n.createElement("div",{className:k.a.armorValue},"31.6k")),n.createElement("div",{className:k.a.talents})));var o=n.createElement("div",{className:k.a.itemData},n.createElement("div",{className:k.a.qualityStripe}),r),c=a&&a.quality;return n.createElement("div",{className:w()(k.a.itemSlot,(t={},Object(y.a)(t,k.a.equipped,!!i),Object(y.a)(t,k.a["quality_".concat(c)],!!c),t))},o)},j=p.map(function(e){return{itemType:q,name:f(),quality:e,brand:b()}}),D=function(e){var t=e.items,a=void 0===t?j:t,n=e.onSelectItem,l=e.onCancel;return i.a.createElement("div",{className:u.a.itemSelect,onClick:l},i.a.createElement("div",{className:u.a.contents},a.map(function(e){return i.a.createElement("div",{className:u.a.itemSelectSlot,onClick:function(e){return function(e,t){e.stopPropagation()}(e)},onDoubleClick:function(){return n(e)}},i.a.createElement(C,{itemData:e}))})))},O=a(8),x=a.n(O),A=Array(8).fill(!0).map(function(){return{itemType:q,name:f(),quality:_(p),brand:b()}}),I=function(e){var t=e.onClickItem;return i.a.createElement("div",{className:x.a.equippedItems},A.map(function(e,a){return i.a.createElement("div",{onClick:function(){return t(a,e)}},i.a.createElement(C,{itemData:e,equipped:!0}))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],l=t[1];return i.a.createElement("div",{className:s.a.app},i.a.createElement("header",{className:s.a.header}),i.a.createElement("main",{className:s.a.main},i.a.createElement(I,{onClickItem:function(){return l(!0)}}),a?i.a.createElement(D,{onSelectItem:function(e){l(!1),console.log(e)},onCancel:function(){return l(!1)}}):null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.becb9a01.chunk.js.map