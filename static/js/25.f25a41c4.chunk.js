(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[25],{436:function(e,a,t){"use strict";var n=t(7),c=t(0),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},o=t(35),s=function(e,a){return c.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:a,icon:i}))},l=c.forwardRef(s);a.a=l},500:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),c=t.n(n),i=t(23),o=t.n(i),s=t(551),l=t(700);t(501);class r extends c.a.Component{render(){const{pairInfo:e={},allTokenMap:a={}}=this.props,{address:t,balance:n,token0Deposited:i,token1Deposited:r,token0:m={},token1:d={},shareOfPoolPercent:p}=e,v=a[m.address]||{},u=a[d.address]||{};return t?n.eq(0)?c.a.createElement(c.a.Fragment,null):c.a.createElement("div",{className:"swap-pair-info-extend"},c.a.createElement("div",{className:"swap-pair-info-row yellow"},o.a.get("swap.wallet")),c.a.createElement("div",{className:"swap-pair-info-row"},c.a.createElement("div",{className:"swap-pair-info"},c.a.createElement("div",{className:"swap-pair-info-icon"},v.image?c.a.createElement("img",{src:v.image,alt:""}):c.a.createElement(s.a,null),u.image?c.a.createElement("img",{src:u.image,alt:""}):c.a.createElement(s.a,null)),c.a.createElement("div",null,v.symbol," / ",u.symbol),c.a.createElement("div",{className:"swap-pair-info-copy"},c.a.createElement(l.a.Paragraph,{copyable:{text:e.address}}))),c.a.createElement("div",{className:"swap-pair-info-balance"},c.a.createElement("div",null,n._toSignificant()))),c.a.createElement("div",{className:"swap-pair-info-row"},c.a.createElement("div",{className:"swap-pair-info"},c.a.createElement("div",null,o.a.get("swap.pooledToken",{token:v.symbol}))),c.a.createElement("div",{className:"swap-pair-info-balance"},c.a.createElement("div",null,i._toSignificant()),c.a.createElement("div",{className:"swap-pair-info-icon right"},v.image?c.a.createElement("img",{src:v.image,alt:""}):c.a.createElement(s.a,null)))),c.a.createElement("div",{className:"swap-pair-info-row"},c.a.createElement("div",{className:"swap-pair-info"},c.a.createElement("div",null,o.a.get("swap.pooledToken",{token:u.symbol}))),c.a.createElement("div",{className:"swap-pair-info-balance"},c.a.createElement("div",null,r._toSignificant()),c.a.createElement("div",{className:"swap-pair-info-icon right"},u.image?c.a.createElement("img",{src:u.image,alt:""}):c.a.createElement(s.a,null)))),c.a.createElement("div",{className:"swap-pair-info-row"},c.a.createElement("div",{className:"swap-pair-info"},c.a.createElement("div",null,o.a.get("swap.shareOfPool"))),c.a.createElement("div",{className:"swap-pair-info-balance"},c.a.createElement("div",null,p)))):c.a.createElement(c.a.Fragment,null)}}},501:function(e,a,t){},520:function(e,a,t){"use strict";var n=t(8),c=t(6),i=t(113),o=t(30),s=t.n(o),l=t(16),r=t(44),m=t(0),d=t(412),p=t(161),v=m.forwardRef((function(e,a){var t,n=e.prefixCls,i=void 0===n?"rc-switch":n,o=e.className,v=e.checked,u=e.defaultChecked,f=e.disabled,h=e.loadingIcon,w=e.checkedChildren,k=e.unCheckedChildren,g=e.onClick,E=e.onChange,b=e.onKeyDown,N=Object(r.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=Object(d.a)(!1,{value:v,defaultValue:u}),y=Object(l.a)(C,2),I=y[0],O=y[1];function j(e,a){var t=I;return f||(O(t=e),null===E||void 0===E||E(t,a)),t}var R=s()(i,o,(t={},Object(c.a)(t,"".concat(i,"-checked"),I),Object(c.a)(t,"".concat(i,"-disabled"),f),t));return m.createElement("button",Object.assign({},N,{type:"button",role:"switch","aria-checked":I,disabled:f,className:R,ref:a,onKeyDown:function(e){e.which===p.a.LEFT?j(!1,e):e.which===p.a.RIGHT&&j(!0,e),null===b||void 0===b||b(e)},onClick:function(e){var a=j(!I,e);null===g||void 0===g||g(a,e)}}),h,m.createElement("span",{className:"".concat(i,"-inner")},I?w:k))}));v.displayName="Switch";var u=v,f=t(91),h=t(131),w=t(110),k=t(187),g=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)a.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(t[n[c]]=e[n[c]])}return t},E=m.forwardRef((function(e,a){var t=e.prefixCls,o=e.size,l=e.disabled,r=e.loading,d=e.className,p=void 0===d?"":d,v=g(e,["prefixCls","size","disabled","loading","className"]),E=m.useContext(f.b),b=E.getPrefixCls,N=E.direction,C=m.useContext(w.b),y=m.useContext(h.b),I=(null!==l&&void 0!==l?l:y)||r,O=b("switch",t),j=m.createElement("div",{className:"".concat(O,"-handle")},r&&m.createElement(i.a,{className:"".concat(O,"-loading-icon")})),R=s()(Object(c.a)(Object(c.a)(Object(c.a)({},"".concat(O,"-small"),"small"===(o||C)),"".concat(O,"-loading"),r),"".concat(O,"-rtl"),"rtl"===N),p);return m.createElement(k.a,{insertExtraNode:!0},m.createElement(u,Object(n.a)({},v,{prefixCls:O,className:R,disabled:I,ref:a,loadingIcon:j})))}));E.__ANT_SWITCH=!0;a.a=E},548:function(e,a,t){"use strict";var n=t(7),c=t(0),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"},o=t(35),s=function(e,a){return c.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:a,icon:i}))},l=c.forwardRef(s);a.a=l},549:function(e,a,t){"use strict";var n=t(7),c=t(0),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},o=t(35),s=function(e,a){return c.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:a,icon:i}))},l=c.forwardRef(s);a.a=l},550:function(e,a,t){"use strict";var n=t(7),c=t(0),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"}}]},name:"bar-chart",theme:"outlined"},o=t(35),s=function(e,a){return c.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:a,icon:i}))},l=c.forwardRef(s);a.a=l},551:function(e,a,t){"use strict";var n=t(7),c=t(0),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"},o=t(35),s=function(e,a){return c.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:a,icon:i}))},l=c.forwardRef(s);a.a=l},626:function(e,a,t){},705:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(109),o=t(23),s=t.n(o),l=t(551),r=t(7),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},d=t(35),p=function(e,a){return n.createElement(d.a,Object(r.a)(Object(r.a)({},e),{},{ref:a,icon:m}))};var v,u=n.forwardRef(p),f=t(153),h=t(700),w=t(454),k=t(1),g=t.n(k),E=t(183),b=t(461),N=t(500),C=t(411),y=t(2),I=t(98),O=t(9);t(626);const{latest:j}=O.a.path;let R=Object(i.b)("pool")(v=Object(i.c)(v=class extends c.a.Component{constructor(e){var a;super(e),a=this,this.unmount=!1,this.componentDidMount=()=>{this.unmount=!1,this.props.pool.setUrlHash("liquidity");const{pathname:e=""}=this.props.location;let a=O.a.contract.uniswapV2.defaultPoolTokens.token0,t=O.a.contract.uniswapV2.defaultPoolTokens.token1;Object(I.q)(e).then(e=>{let{tokenAMatch:n,tokenBMatch:c,tokenAInfo:i,tokenBInfo:o}=e;(n||c)&&(a=i,t=o),this.setState({token0Info:a,token1Info:t},()=>{this.genShareUrl(),this.getUserPairInfo({once:!0}),setTimeout(this.getUserPairInfo,3e3)})})},this.componentWillUnmount=()=>{this.unmount=!0},this.getUserPairInfo=async function(){let{once:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{address:t}=a.props.pool,{token0Info:n,token1Info:c}=a.state,i=await Object(I.o)(t,n,c),o={};if(i.address){o.token0Price=i.token0Balance.div(i.token1Balance)._toSignificant(),o.token1Price=i.token1Balance.div(i.token0Balance)._toSignificant();const{token0:e,token1:a}=i,t=!e.address,n=!a.address,c=e.address===O.a.contract.uniswapV2.defaultReceiveToken.wrappedNative.address,s=a.address===O.a.contract.uniswapV2.defaultReceiveToken.wrappedNative.address;(t||n||c||s)&&(o.showNative=!0,t||n?o.receiveNative=!0:(c||s)&&(o.receiveNative=!1))}a.unmount||(a.setState({pairInfo:i,pairLoaded:!0,...o},()=>{a.calcTokenAmount()}),e||setTimeout(()=>{a.getUserPairInfo()},5e3))},this.genShareUrl=()=>{const{token0Info:e,token1Info:a}=this.state;this.props.history.replace("".concat(j.remove).concat(Object(I.j)(e,a)))},this.calcTokenAmount=()=>{const{pairInfo:e,inputAmount:a}=this.state;if(e.address)if(a){const{balance:t,token0Deposited:n,token1Deposited:c}=e;if(t.gt(0)){const e=new g.a(a).div(t).times(n)._toSignificant(),i=new g.a(a).div(t).times(c)._toSignificant(),o=new g.a(a).div(t).times(n),s=new g.a(a).div(t).times(c);this.setState({token0Receive:e,token1Receive:i,token0ReceiveBn:o,token1ReceiveBn:s})}}else this.setState({token0Receive:"--",token1Receive:"--"})},this.afterInputChange=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;a.setState({inputAmount:e,curPercent:t},()=>{a.calcTokenAmount()})},this.amountFormat=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,t="";if(e){const{valid:n,str:c}=Object(y.i)(e,a);n&&(t=c)}return t},this.onInputChange=e=>{const{value:a}=e.target;if(!a)return void this.afterInputChange("");const t=this.amountFormat(a,O.a.contract.uniswapV2.decimals);t&&this.afterInputChange(t)},this.onMaxClick=()=>{const{pairInfo:e}=this.state;if(e.address){const{balance:a}=e;this.afterInputChange(a.toString(),100)}},this.onPercentClick=e=>{const{pairInfo:a}=this.state;if(a.address){const{balance:t}=a,n=t.times(e).div(100)._toFixed(O.a.contract.uniswapV2.decimals);this.afterInputChange(n,e)}},this.onNativeClick=()=>{const{receiveNative:e,token0Info:a,token1Info:t}=this.state;let n={...a},c={...t};if(e){const e=!a.address,i=!t.address;e&&(n=O.a.contract.uniswapV2.defaultReceiveToken.wrappedNative),i&&(c=O.a.contract.uniswapV2.defaultReceiveToken.wrappedNative)}else{const e=a.address===O.a.contract.uniswapV2.defaultReceiveToken.wrappedNative.address,i=t.address===O.a.contract.uniswapV2.defaultReceiveToken.wrappedNative.address;e&&(n=O.a.contract.uniswapV2.defaultReceiveToken.native),i&&(c=O.a.contract.uniswapV2.defaultReceiveToken.native)}this.setState({receiveNative:!e,token0Info:n,token1Info:c},()=>{this.genShareUrl(),this.getUserPairInfo({once:!0})})},this.onRemoveClick=async()=>{const{address:e}=this.props.pool,{pairInfo:a,inputAmount:t,token0ReceiveBn:n,token1ReceiveBn:c}=this.state;if(!e)return;if(!a.address)return;if(!t)return;this.setState({btnDisabled:!0});const i={address:a.address,decimals:O.a.contract.uniswapV2.decimals},{allowance:o}=await Object(I.C)(e,i);if(new g.a(t).gt(o)){if(!await Object(I.D)(i))return void this.setState({btnDisabled:!1})}const s=await Object(I.d)({token0Info:a.token0,token1Info:a.token1,liquidityAmount:t,token0Amount:n,token1Amount:c,to:e});this.setState({btnDisabled:!1,curPercent:0}),s&&setTimeout(()=>{this.getUserPairInfo({once:!0})},3e3)},this.onHeaderCloseClick=()=>{this.props.history.push(j.liquidity)},this.state={pairLoaded:!1,liquidityPercent:[25,50,75,100],curPercent:0,token0Info:{},token1Info:{},inputAmount:"",pairInfo:{},token0Receive:"--",token1Receive:"--",token0ReceiveBn:new g.a(0),token1ReceiveBn:new g.a(0),showNative:!1,receiveNative:!0,token0Price:"--",token1Price:"--",btnDisabled:!1}}render(){const{pairLoaded:e,liquidityPercent:a,curPercent:t,pairInfo:n,inputAmount:i,token0Receive:o,token1Receive:r,showNative:m,receiveNative:d,token0Price:p,token1Price:v,btnDisabled:k}=this.state,{allTokenMap:g}=this.props.pool,{token0:y={},token1:I={}}=n,j=g[y.address]||{},R=g[I.address]||{};return c.a.createElement("div",{id:"swap-remove-main"},c.a.createElement(E.i,null,c.a.createElement(C.a,{title:s.a.get("swap.title"),desc:s.a.get("swap.desc"),type:"liquidity"}),c.a.createElement("div",{className:"swap-main-page"},c.a.createElement(E.e,null,c.a.createElement("div",{className:"swap-main-card"},c.a.createElement(b.a,{title:s.a.get("swap.remove.title"),desc:s.a.get("swap.remove.desc"),closable:!0,onHeaderClose:this.onHeaderCloseClick}),c.a.createElement("div",{className:"swap-main-card-body"},e?c.a.createElement(c.a.Fragment,null,n.address?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"swap-remove-info"},c.a.createElement("div",{className:"swap-remove-info-wrapper"},c.a.createElement("div",{className:"swap-remove-info-icon"},j.image?c.a.createElement("img",{src:j.image,alt:""}):c.a.createElement(l.a,null),R.image?c.a.createElement("img",{src:R.image,alt:""}):c.a.createElement(l.a,null)),c.a.createElement("div",{className:"global-secondary"},j.symbol," / ",R.symbol),c.a.createElement("div",{className:"swap-remove-info-copy"},c.a.createElement(h.a.Paragraph,{copyable:{text:n.address}}))),c.a.createElement("div",{className:"global-number swap-remove-balance"},c.a.createElement("span",{className:"global-desc"},s.a.get("swap.remove.balance")),c.a.createElement(E.f,{end:n.balance}))),c.a.createElement(E.h,{placeholder:"0.0",value:i,enterButton:s.a.get("swap.max"),onChange:this.onInputChange,onSearch:this.onMaxClick}),c.a.createElement("div",{className:"swap-remove-percent"},a.map(e=>c.a.createElement("div",{className:"swap-remove-percent-button ".concat(t===e?"active":""),key:e,onClick:()=>this.onPercentClick(e)},e,"%"))),c.a.createElement("div",{className:"swap-main-icon-row"},c.a.createElement("div",null,c.a.createElement(u,null))),c.a.createElement("div",{className:"swap-remove-receive-info"},c.a.createElement("div",{className:"swap-remove-info-row"},c.a.createElement("div",null,s.a.get("swap.remove.receive")),c.a.createElement("div",null,o," ",n.token0.symbol)),c.a.createElement("div",{className:"swap-remove-info-row"},c.a.createElement("div",null),c.a.createElement("div",null,r," ",n.token1.symbol)),m?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"swap-remove-info-row"},c.a.createElement("div",null),c.a.createElement("div",{className:"swap-remove-switch-wrapper-token"},c.a.createElement(w.a,{title:s.a.get("swap.remove.wrapperTip",{wtoken:O.a.contract.uniswapV2.defaultReceiveToken.wrappedNative.symbol})},c.a.createElement("div",null,c.a.createElement(f.a,null))),c.a.createElement("div",{onClick:this.onNativeClick},d?s.a.get("swap.remove.receiveWToken",{wtoken:O.a.contract.uniswapV2.defaultReceiveToken.wrappedNative.symbol}):s.a.get("swap.remove.receiveToken",{token:O.a.contract.uniswapV2.defaultReceiveToken.native.symbol}))))):c.a.createElement(c.a.Fragment,null),c.a.createElement("div",{className:"swap-remove-info-row"},c.a.createElement("div",null,s.a.get("swap.price")),c.a.createElement("div",null,"".concat(p," ").concat(s.a.get("swap.priceInfo",{token0:n.token0.symbol,token1:n.token1.symbol})))),c.a.createElement("div",{className:"swap-remove-info-row"},c.a.createElement("div",null),c.a.createElement("div",null,"".concat(v," ").concat(s.a.get("swap.priceInfo",{token0:n.token1.symbol,token1:n.token0.symbol}))))),c.a.createElement("div",{className:"swap-remove-btn"},c.a.createElement(E.d,{disabled:k,onClick:this.onRemoveClick},s.a.get("swap.remove.removeButton")))):c.a.createElement("div",{className:"swap-remove-empty"},s.a.get("swap.remove.noFound"))):c.a.createElement("div",{className:"swap-remove-loading"},c.a.createElement(E.j,null))),c.a.createElement(N.a,{pairInfo:n,allTokenMap:g}))))))}})||v)||v;a.default=R}}]);