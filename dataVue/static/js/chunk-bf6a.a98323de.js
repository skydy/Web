(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-bf6a"],{"8PlU":function(t,e,o){},Mz3J:function(t,e,o){"use strict";Math.easeInOutQuad=function(t,e,o,a){return(t/=a/2)<1?o/2*t*t+e:-o/2*(--t*(t-2)-1)+e};var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function s(t,e,o){var s=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,n=t-s,l=0;e=void 0===e?500:e;!function t(){l+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(l,s,n,e)),l<e?a(t):o&&"function"==typeof o&&o()}()}var n={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},l=(o("a5W9"),o("KHd+")),i=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[o("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},[],!1,null,"0565df52",null);i.options.__file="index.vue";e.a=i.exports},OVWJ:function(t,e,o){},a5W9:function(t,e,o){"use strict";var a=o("8PlU");o.n(a).a},cOl6:function(t,e,o){"use strict";var a=o("OVWJ");o.n(a).a},urbz:function(t,e,o){"use strict";o.r(e);var a=o("t3Un");function s(t){return Object(a.a)({url:"/goods",method:"post",params:t})}var n={name:"Goods",components:{Pagination:o("Mz3J").a},data:function(){return{cateOption:[],statusOption:[{value:"0",label:"上架"},{value:"1",label:"下架"}],beforeCate:[],searchForm:{goods_id:"",keyword:"",cate:"",status:"",sales_start:"",sales_end:"",loading:!1,limit:10,page:1,total:0,page_size:[10,20,30,50]},goodsForm:{title:"",created_at:"",price:"",loading:!1,limit:10,page:1,total:0,page_size:[10,20,30,50]},dialogVisible:!1,button_loging:!1,goodsList:[],flag:0}},mounted:function(){this.getGoodsList({limit:this.goodsForm.limit,page:this.goodsForm.page}),this.classifyList()},methods:{classifyList:function(){var t=this;Object(a.a)({url:"/getGoodsCate",method:"get"}).then(function(e){console.log(e),t.cateOption=e.data})},submitForm:function(){this.searchForm.cate=this.beforeCate[this.beforeCate.length-1],this.goodsForm=this.searchForm,this.goodsForm.page=1,this.screenList(this.goodsForm),this.flag=1,console.log(this.searchForm)},screenList:function(t){var e=this;this.goodsForm.loading=!0,s(t).then(function(t){console.log(),e.goodsForm.loading=!1,e.goodsList=t.data.data.message.data,e.searchForm.total=t.data.data.message.total,e.searchForm.page=t.data.data.message.current_page})},getGoodsList:function(t){var e=this;this.goodsForm.loading=!0,s(t).then(function(t){e.goodsForm.loading=!1,e.goodsList=t.data.data.message.data,e.goodsForm.total=t.data.data.message.total,e.goodsForm.page=t.data.data.message.current_page})},handleSizeChange:function(t){this.goodsForm.limit=t,0==this.flag&&this.getGoodsList({limit:this.goodsForm.limit,page:this.goodsForm.page}),1==this.flag&&this.screenList(this.goodsForm)},handleCurrentChange:function(t){this.goodsForm.page=t,0==this.flag&&this.getGoodsList({limit:this.goodsForm.limit,page:this.goodsForm.page}),1==this.flag&&this.screenList(this.goodsForm)}}},l=(o("cOl6"),o("KHd+")),i=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("el-form",[o("el-form-item",{staticClass:"flmr20px"},[o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入商品id"},model:{value:t.searchForm.goods_id,callback:function(e){t.$set(t.searchForm,"goods_id",e)},expression:"searchForm.goods_id"}})],1),t._v(" "),o("el-form-item",{staticClass:"flmr20px"},[o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入商品名称"},model:{value:t.searchForm.keyword,callback:function(e){t.$set(t.searchForm,"keyword",e)},expression:"searchForm.keyword"}})],1),t._v(" "),o("el-form-item",{staticClass:"flmr20px"},[o("el-cascader",{attrs:{placeholder:"请选择商品分类",options:t.cateOption,"change-on-select":""},model:{value:t.beforeCate,callback:function(e){t.beforeCate=e},expression:"beforeCate"}})],1),t._v(" "),o("el-form-item",{staticClass:"flmr20px"},[o("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入销量起始"},model:{value:t.searchForm.sales_start,callback:function(e){t.$set(t.searchForm,"sales_start",t._n(e))},expression:"searchForm.sales_start"}}),t._v(" "),o("span",[t._v("-")]),t._v(" "),o("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入销量截至"},model:{value:t.searchForm.sales_end,callback:function(e){t.$set(t.searchForm,"sales_end",t._n(e))},expression:"searchForm.sales_end"}})],1),t._v(" "),o("el-form-item",{staticClass:"flmr20px"},[o("el-select",{attrs:{placeholder:"请选择上架状态"},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},t._l(t.statusOption,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),o("el-form-item",{staticClass:"flmr20px"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm()}}},[t._v("搜索")])],1)],1),t._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.goodsForm.loading,expression:"goodsForm.loading"}],staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:t.goodsList,border:""}},[o("el-table-column",{attrs:{align:"center",label:"序列",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"商品名称",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.title))]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"header-center",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.created_at))]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"一级分类",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.one_cate))]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"二级分类",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.two_cate))]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"本月销量",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.month_sales))]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"累计销量",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.total_sales))]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"价格",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.price))]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"评分",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.star))]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"收藏数",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.popularity_count))]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"购物车数",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sales_num))]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"上架状态",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.status))]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"首次上架时间",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.created_at))]}}])})],1),t._v(" "),o("br"),t._v(" "),o("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.goodsForm.total>0&&t.goodsForm.total>t.goodsForm.limit,expression:"goodsForm.total>0 && goodsForm.total > goodsForm.limit"}],attrs:{background:"",layout:"total, prev, pager, next, sizes","page-sizes":t.goodsForm.page_size,"current-page":t.goodsForm.page,"page-size":t.goodsForm.limit,total:t.goodsForm.total},on:{"update:currentPage":function(e){t.$set(t.goodsForm,"page",e)},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},[],!1,null,"38543621",null);i.options.__file="goods_index.vue";e.default=i.exports}}]);