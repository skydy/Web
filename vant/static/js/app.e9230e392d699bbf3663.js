webpackJsonp([1],{"4ml/":function(n,o){},NHnr:function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=t("7+uW"),a={render:function(){var n=this.$createElement,o=this._self._c||n;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},staticRenderFns:[]};var r=t("VU/8")({name:"App"},a,!1,function(n){t("o8nZ")},null,null).exports,c=t("/ocq"),s=t("Fd2+"),i={data:function(){return{columns:["杭州","宁波","温州","嘉兴","湖州"],show:!1}},methods:{a:function(){this.show=!0},onConfirm:function(n,o){this.show=!1,Object(s.a)("当前值："+n+", 当前索引："+o)},onCancel:function(){this.show=!1,Object(s.a)("取消")}}},u={render:function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",{staticClass:"hello"},[t("button",{on:{click:function(o){return n.a()}}},[n._v("按钮")]),n._v(" "),t("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:n.show,callback:function(o){n.show=o},expression:"show"}},[t("van-picker",{attrs:{"show-toolbar":"",columns:n.columns},on:{cancel:n.onCancel,confirm:n.onConfirm}})],1)],1)},staticRenderFns:[]};var l=t("VU/8")(i,u,!1,function(n){t("b2DA")},"data-v-31ad1744",null).exports;e.a.use(c.a);var p=new c.a({routes:[{path:"/",name:"HelloWorld",component:l}]});t("4ml/");e.a.use(s.b),e.a.config.productionTip=!1,new e.a({el:"#app",router:p,components:{App:r},template:"<App/>"})},b2DA:function(n,o){},o8nZ:function(n,o){}},["NHnr"]);
//# sourceMappingURL=app.e9230e392d699bbf3663.js.map