(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1593"],{"8PlU":function(e,t,a){},Mz3J:function(e,t,a){"use strict";Math.easeInOutQuad=function(e,t,a,l){return(e/=l/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t};var l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function o(e,t,a){var o=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,r=e-o,i=0;t=void 0===t?500:t;!function e(){i+=20,function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}(Math.easeInOutQuad(i,o,r,t)),i<t?l(e):a&&"function"==typeof a&&a()}()}var r={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&o(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&o(0,800)}}},i=(a("a5W9"),a("KHd+")),s=Object(i.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},[],!1,null,"0565df52",null);s.options.__file="index.vue";t.a=s.exports},a5W9:function(e,t,a){"use strict";var l=a("8PlU");a.n(l).a},c0ii:function(e,t,a){"use strict";var l=a("ldm9");a.n(l).a},ldm9:function(e,t,a){},o3Jb:function(e,t,a){"use strict";a.r(t);var l=a("t3Un");function o(e){return Object(l.a)({url:"/shop_orders",method:"post",params:e})}var r={name:"Goods",components:{Pagination:a("Mz3J").a},data:function(){return{sourceOption:[{value:"0",label:"未知"},{value:"1",label:"ios"},{value:"2",label:"安卓"},{value:"3",label:"小程序"}],user_typeOption:[{value:"1",label:"普通用户"},{value:"2",label:"特约服务商"},{value:"3",label:"高级服务商"},{value:"4",label:"区域总代"},{value:"5",label:"工作人员"},{value:"6",label:"管理人员"},{value:"7",label:"总监"},{value:"8",label:"总经理"},{value:"9",label:"省级运营中心"},{value:"10",label:"无状态"}],order_statusOption:[{value:"1",label:"待付款"},{value:"2",label:"待发货"},{value:"3",label:"已收货"},{value:"4",label:"已取消"},{value:"5",label:"已发货"},{value:"6",label:"已评价"},{value:"7",label:"超时取消"},{value:"8",label:"已退款"},{value:"9",label:"退款失败"}],searchForm:{loading:!1,time:[],source:"",user_type:"",use_credit:[],order_price:[],order_status:"",limit:10,page:1,total:0,page_size:[10,20,30,50]},shopForm:{title:"",created_at:"",price:"",loading:!1,limit:10,page:1,total:0,page_size:[10,20,30,50]},formTime:[],dialogVisible:!1,button_loging:!1,shopList:[],dialogTableVisible:!1,viewDialogList:[{goods_name:"0"}],addArr:[],flag:0,dialogNames:[],dialogNums:[],use_creditS:"",use_creditE:"",order_priceS:"",order_priceE:""}},mounted:function(){this.getShopList({limit:this.shopForm.limit,page:this.shopForm.page})},methods:{submitForm:function(){if(this.formTime.length>0){var e=new Date(this.formTime[0]),t=new Date(this.formTime[1]),a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),l=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();this.searchForm.time=[a,l]}this.searchForm.use_credit=[this.use_creditS,this.use_creditE],this.searchForm.order_price=[this.order_priceS,this.order_priceE],this.shopForm=this.searchForm,this.shopForm.page=1,this.screenList(this.shopForm),this.flag=1},screenList:function(e){var t=this;this.shopForm.loading=!0,o(e).then(function(e){t.shopForm.loading=!1,t.shopList=e.data.data.orders.data,t.searchForm.total=e.data.data.orders.total,t.searchForm.page=e.data.data.orders.current_page})},refreshBtn:function(){this.$router.replace({path:"/shopOrder",query:{"":Date.now()}})},viewDialog:function(e){for(var t=[],a=[],l=0;l<e.goods.length;l++)t.push(e.goods[l].goods_name),a.push(e.goods[l].goods_num);this.dialogNames=t,this.dialogNums=a,this.dialogTableVisible=!0,this.viewDialogList=e},getShopList:function(e){var t=this;this.shopForm.loading=!0,o(e).then(function(e){t.shopForm.loading=!1,t.shopList=e.data.data.orders.data,t.shopForm.total=e.data.data.orders.total,t.shopForm.page=e.data.data.orders.current_page})},handleSizeChange:function(e){this.shopForm.limit=e,0==this.flag&&this.getShopList({limit:this.shopForm.limit,page:this.shopForm.page}),1==this.flag&&this.screenList(this.shopForm)},handleCurrentChange:function(e){this.shopForm.page=e,0==this.flag&&this.getShopList({limit:this.shopForm.limit,page:this.shopForm.page}),1==this.flag&&this.screenList(this.shopForm)}}},i=(a("c0ii"),a("KHd+")),s=Object(i.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",[a("el-form-item",{staticClass:"formTime fl"},[a("el-date-picker",{staticClass:"formTime",attrs:{type:"daterange","start-placeholder":"订单提交开始日期","end-placeholder":"订单提交结束日期"},model:{value:e.formTime,callback:function(t){e.formTime=t},expression:"formTime"}})],1),e._v(" "),a("el-form-item",{staticClass:"flmr20px",staticStyle:{"margin-left":"20px"}},[a("el-select",{attrs:{placeholder:"请选择下单渠道"},model:{value:e.searchForm.source,callback:function(t){e.$set(e.searchForm,"source",t)},expression:"searchForm.source"}},e._l(e.sourceOption,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{staticClass:"flmr20px"},[a("el-select",{attrs:{placeholder:"请选择用户类型"},model:{value:e.searchForm.user_type,callback:function(t){e.$set(e.searchForm,"user_type",t)},expression:"searchForm.user_type"}},e._l(e.user_typeOption,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{staticClass:"flmr20px"},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入支付积分起"},model:{value:e.use_creditS,callback:function(t){e.use_creditS=e._n(t)},expression:"use_creditS"}}),e._v(" "),a("span",[e._v("-")]),e._v(" "),a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入支付积分止"},model:{value:e.use_creditE,callback:function(t){e.use_creditE=e._n(t)},expression:"use_creditE"}})],1),e._v(" "),a("el-form-item",{staticClass:"flmr20px"},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入支付金额起"},model:{value:e.order_priceS,callback:function(t){e.order_priceS=e._n(t)},expression:"order_priceS"}}),e._v(" "),a("span",[e._v("-")]),e._v(" "),a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入支付金额止"},model:{value:e.order_priceE,callback:function(t){e.order_priceE=e._n(t)},expression:"order_priceE"}})],1),e._v(" "),a("el-form-item",{staticClass:"flmr20px"},[a("el-select",{attrs:{placeholder:"请选择订单状态"},model:{value:e.searchForm.order_status,callback:function(t){e.$set(e.searchForm,"order_status",t)},expression:"searchForm.order_status"}},e._l(e.order_statusOption,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{staticClass:"flmr20px"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:function(t){e.submitForm()}}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(t){e.refreshBtn()}}},[e._v("重置")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.shopForm.loading,expression:"shopForm.loading"}],staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.shopList,border:""}},[a("el-table-column",{attrs:{align:"center",label:"序列",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"订单编号",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.order_sn))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"下单时间",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.created_at))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品名称",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.goods,function(t,l){return a("div",[e._v("\n          "+e._s(t.goods_name)+"\n        ")])})}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"数量",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.goods,function(t,l){return a("div",[e._v("\n          "+e._s(t.goods_num)+"\n        ")])})}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"购买类型",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.order_type))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"订单总价",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.all_price))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"积分",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.use_credit))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"现金",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.order_price))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"下单渠道",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.source))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"订单状态",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.order_status))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.viewDialog(t.row)}}},[e._v("查看")])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogTableVisible,width:"36%"},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-form",{attrs:{"label-width":"126px"}},[a("el-form-item",{attrs:{label:"序列"}},[a("span",[e._v(e._s(e.viewDialogList.id))])]),e._v(" "),a("el-form-item",{attrs:{label:"订单编号"}},[a("span",[e._v(e._s(e.viewDialogList.order_sn))])]),e._v(" "),a("el-form-item",{attrs:{label:"商品名称"}},e._l(e.dialogNames,function(t){return a("div",[e._v("\n          "+e._s(t)+"\n        ")])})),e._v(" "),a("el-form-item",{attrs:{label:"下单手机"}},[a("span",[e._v(e._s(e.viewDialogList.user_phone))])]),e._v(" "),a("el-form-item",{attrs:{label:"下单时间"}},[a("span",[e._v(e._s(e.viewDialogList.created_at))])]),e._v(" "),a("el-form-item",{attrs:{label:"收件地址"}},[a("span",[e._v(e._s(e.viewDialogList.receiving_address))])]),e._v(" "),a("el-form-item",{attrs:{label:"订单总价"}},[a("span",[e._v(e._s(e.viewDialogList.all_price))])]),e._v(" "),a("el-form-item",{attrs:{label:"积分"}},[a("span",[e._v(e._s(e.viewDialogList.use_credit))])]),e._v(" "),a("el-form-item",{attrs:{label:"现金"}},[a("span",[e._v(e._s(e.viewDialogList.order_price))])]),e._v(" "),a("el-form-item",{attrs:{label:"数量"}},e._l(e.dialogNums,function(t){return a("div",[e._v("\n          "+e._s(t)+"\n        ")])})),e._v(" "),a("el-form-item",{attrs:{label:"下单渠道"}},[a("span",[e._v(e._s(e.viewDialogList.source))])]),e._v(" "),a("el-form-item",{attrs:{label:"订单状态"}},[a("span",[e._v(e._s(e.viewDialogList.order_status))])]),e._v(" "),a("el-form-item",{attrs:{label:"购买类型"}},[a("span",[e._v(e._s(e.viewDialogList.order_type))])])],1)],1),e._v(" "),a("br"),e._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.shopForm.total>0&&e.shopForm.total>e.shopForm.limit,expression:"shopForm.total>0 && shopForm.total > shopForm.limit"}],attrs:{background:"",layout:"total, prev, pager, next, sizes","page-sizes":e.shopForm.page_size,"current-page":e.shopForm.page,"page-size":e.shopForm.limit,total:e.shopForm.total},on:{"update:currentPage":function(t){e.$set(e.shopForm,"page",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},[],!1,null,"2bb2e940",null);s.options.__file="shop_order.vue";t.default=s.exports}}]);