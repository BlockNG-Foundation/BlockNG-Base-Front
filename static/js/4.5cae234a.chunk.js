(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[4],{411:function(e,t,a){"use strict";var s,n=a(0),i=a.n(n),c=a(109),l=a(424),o=a.n(l),p=a(413),r=a.n(p),m=a(414),g=a.n(m),d=a(415),h=a.n(d),u=a(416),b=a.n(u),f=a(417),E=a.n(f),v=a(418),C=a.n(v),k=a(419),w=a.n(k),S=a(420),x=a.n(S),N=a(421),j=a.n(N),O=a(422),D=a.n(O),A=a(425),y=a.n(A),H=a(423),V=a.n(H);a(426);let F=Object(c.b)("pool")(s=Object(c.c)(s=class extends i.a.Component{constructor(e){super(e),this.state={}}render(){const{title:e,desc:t,type:a,large:s,flip:n}=this.props;let c=o.a,l=!1,p=!1;switch(a){case"credit":c=r.a;break;case"seeder":c=g.a;break;case"airdrop":c=h.a;break;case"rebase":c=b.a,l=!0;break;case"punks":p=!0;break;case"pawn":c=C.a;break;case"cry":c=E.a;break;case"liquidity":c=x.a;break;case"swap":c=w.a;break;case"vote":c=j.a;break;case"bridge":c=D.a;break;case"base":c=y.a;break;case"freedom":c=V.a}return i.a.createElement("div",{id:"slogan-main"},p?i.a.createElement(i.a.Fragment,null):i.a.createElement("div",{className:"global-tv"},i.a.createElement("img",{className:"slogan-img ".concat(s?"large":""," ").concat(l?"anim":""," ").concat(n?"flip":""),src:c,alt:""})),i.a.createElement("div",{className:"global-h1 global-tv slogan-title"},e),i.a.createElement("div",{className:"global-desc slogan-desc"},t))}})||s)||s;t.a=F},413:function(e,t,a){e.exports=a.p+"static/media/credit.b7e89a28.png"},414:function(e,t,a){e.exports=a.p+"static/media/seeder.c0ecec20.png"},415:function(e,t,a){e.exports=a.p+"static/media/airdrop.79057ee1.png"},416:function(e,t,a){e.exports=a.p+"static/media/rebase.761d56e9.png"},417:function(e,t,a){e.exports=a.p+"static/media/cry.7cc3570d.png"},418:function(e,t,a){e.exports=a.p+"static/media/pawn.b0b8691c.png"},419:function(e,t,a){e.exports=a.p+"static/media/swap.01832c14.png"},420:function(e,t,a){e.exports=a.p+"static/media/liquidity.5b550d49.png"},421:function(e,t,a){e.exports=a.p+"static/media/vote.f75c10b9.png"},422:function(e,t,a){e.exports=a.p+"static/media/bridge.bb87a277.png"},423:function(e,t,a){e.exports=a.p+"static/media/freedom.ed224dc7.png"},424:function(e,t,a){e.exports=a.p+"static/media/foundation.312aeed2.svg"},425:function(e,t,a){e.exports=a.p+"static/media/baseBridge.87f0e01a.svg"},426:function(e,t,a){},461:function(e,t,a){"use strict";var s,n=a(0),i=a.n(n),c=a(109),l=a(23),o=a.n(l),p=a(454),r=a(520),m=a(548),g=a(549),d=a(550),h=a(436),u=a(183),b=a(2),f=a(98);a(622);let E=Object(c.b)("pool")(s=Object(c.c)(s=class extends i.a.Component{constructor(e){super(e),this.unmount=!1,this.componentDidMount=()=>{this.unmount=!1},this.componentWillUnmount=()=>{this.unmount=!0},this.openSettingsDlg=()=>{this.setState({settingsVisible:!0})},this.closeSettingsDlg=()=>{this.setState({settingsVisible:!1})},this.onSlippageChange=e=>{const{value:t}=e.target;let a="";if(t){const{valid:e,str:s}=Object(b.i)(t,2);if(!e)return;a=s,Number(a)>50&&(a=50)}this.setState({slippageAmount:a},()=>{Object(f.A)(a);const{onSettingsChange:e}=this.props;e&&e()})},this.chooseSlippageAmount=e=>{this.setState({slippageAmount:e},()=>{Object(f.A)(e);const{onSettingsChange:t}=this.props;t&&t()})},this.onMultihopsChange=e=>{this.setState({multihopsState:e},()=>{Object(f.z)(e);const{onSettingsChange:t}=this.props;t&&t()})},this.onHeaderCloseClick=()=>{const{onHeaderClose:e}=this.props;e&&e()},this.onHeadeChartClick=()=>{const{onHeadeChart:e}=this.props;e&&e()},this.state={settingsVisible:!1,slippageDefault:[.1,.5,1],slippageAmount:Object(f.r)(),multihopsState:Object(f.m)()}}render(){const{settingsVisible:e,slippageDefault:t,slippageAmount:a,multihopsState:s}=this.state,{title:n,desc:c,closable:l=!1,showChart:b=!1}=this.props;return i.a.createElement("div",{id:"swap-header-main"},i.a.createElement("div",{className:"swap-header-title-wrapper"},i.a.createElement("div",{className:"global-h1 swap-header-title"},n),i.a.createElement("div",{className:"global-desc swap-header-desc"},c),i.a.createElement("div",{className:"swap-header-settings-icon",onClick:this.openSettingsDlg},i.a.createElement(m.a,null)),l?i.a.createElement("div",{className:"swap-header-close-icon",onClick:this.onHeaderCloseClick},i.a.createElement(g.a,null)):i.a.createElement(i.a.Fragment,null),b?i.a.createElement("div",{className:"swap-header-close-icon",onClick:this.onHeadeChartClick},i.a.createElement(d.a,null)):i.a.createElement(i.a.Fragment,null)),i.a.createElement(u.m,{visible:e,title:o.a.get("swap.settings.title"),onCancel:this.closeSettingsDlg},i.a.createElement("div",{className:"global-desc swap-header-settings-option"},i.a.createElement(p.a,{title:o.a.get("swap.settings.slippageDesc")},i.a.createElement("span",null,o.a.get("swap.settings.slippage"),i.a.createElement(h.a,null)))),i.a.createElement("div",{className:"swap-header-settings-slippage"},t.map(e=>i.a.createElement("div",{className:"swap-header-settings-slippage-button ".concat(Number(a)===e?"active":""),onClick:()=>this.chooseSlippageAmount(e),key:e},e,"%")),i.a.createElement(u.h,{value:a,suffix:"%",onChange:this.onSlippageChange})),i.a.createElement("div",{className:"global-desc swap-header-settings-option"},i.a.createElement(p.a,{title:o.a.get("swap.settings.multihopsDesc")},i.a.createElement("span",null,o.a.get("swap.settings.multihops"),i.a.createElement(h.a,null))),i.a.createElement(r.a,{checked:s,onChange:this.onMultihopsChange}))))}})||s)||s;t.a=E},622:function(e,t,a){}}]);