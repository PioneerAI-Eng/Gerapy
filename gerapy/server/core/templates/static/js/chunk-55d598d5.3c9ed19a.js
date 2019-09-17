(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55d598d5"],{"7b3c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("el-dialog",{attrs:{visible:t.createProjectDialog,size:"tiny"},on:{"update:visible":function(e){t.createProjectDialog=e}}},[n("el-form",[n("el-form-item",{attrs:{label:t.$lang.columns.name}},[n("el-input",{staticClass:"inline",attrs:{placeholder:t.$lang.columns.name,size:"small"},model:{value:t.projectName,callback:function(e){t.projectName=e},expression:"projectName"}})],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.createProjectDialog=!1}}},[t._v(t._s(t.$lang.buttons.cancel)+"\n\t\t\t\t")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.onCreateProject()}}},[t._v(t._s(t.$lang.buttons.create)+"\n\t\t\t\t")])],1)],1),n("panel-title",{attrs:{title:t.$lang.objects.project}},[n("el-button",{attrs:{size:"mini"},on:{click:function(e){return e.stopPropagation(),t.onRefresh(e)}}},[n("i",{staticClass:"fa fa-refresh"}),t._v("\n\t\t\t\t"+t._s(t.$lang.buttons.refresh)+"\n\t\t\t")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.createProjectDialog=!0}}},[n("i",{staticClass:"fa fa-plus"}),t._v("\n\t\t\t\t"+t._s(t.$lang.buttons.create)+"\n\t\t\t")])],1),n("div",{staticClass:"panel-body"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],style:{width:"100%;"},attrs:{data:t.projects,"empty-text":t.$lang.messages.noData,"element-loading-text":t.$lang.messages.loading}},[n("el-table-column",{attrs:{align:"center",prop:"name",label:t.$lang.columns.name,width:"150"}}),n("el-table-column",{attrs:{align:"center",label:t.$lang.columns.configurable,width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return t.buildInfos[e.row.name]?[t.buildInfos[e.row.name]["configurable"]?n("span",[n("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini",round:""}})],1):n("span",[n("el-button",{attrs:{type:"primary",icon:"el-icon-close",size:"mini",round:""}})],1)]:void 0}}],null,!0)}),n("el-table-column",{attrs:{align:"center",label:t.$lang.columns.built,width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return t.buildInfos[e.row.name]?[t.buildInfos[e.row.name]["egg"]?n("span",[n("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"mini",round:""}})],1):n("span",[n("el-button",{attrs:{type:"primary",icon:"el-icon-close",size:"mini",round:""}})],1)]:void 0}}],null,!0)}),n("el-table-column",{attrs:{align:"center",label:t.$lang.columns.builtAt,width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.buildInfos[e.row.name]?n("span",[t._v("\n              "+t._s(t.buildInfos[e.row.name]["built_at"])+"\n            ")]):t._e()]}}])}),n("el-table-column",{attrs:{align:"center",label:t.$lang.columns.description,width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.buildInfos[e.row.name]?n("span",[t._v("\n              "+t._s(t.buildInfos[e.row.name]["description"])+"\n            ")]):t._e()]}}])}),n("el-table-column",{attrs:{align:"center",label:t.$lang.columns.operations},scopedSlots:t._u([{key:"default",fn:function(e){return[t.buildInfos[e.row.name]&&t.buildInfos[e.row.name]["configurable"]?n("router-link",{attrs:{to:{name:"projectConfigure",params:{name:e.row.name}},tag:"span"}},[n("el-button",{attrs:{type:"warning",size:"mini"}},[n("i",{staticClass:"fa fa-edit"}),t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$lang.buttons.configure)+"\n\t\t\t\t\t\t\t")])],1):n("router-link",{attrs:{to:{name:"projectEdit",params:{name:e.row.name}},tag:"span"}},[n("el-button",{attrs:{type:"warning",size:"mini"}},[n("i",{staticClass:"fa fa-edit"}),t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$lang.buttons.edit)+"\n\t\t\t\t\t\t\t")])],1),n("router-link",{attrs:{to:{name:"projectDeploy",params:{name:e.row.name}},tag:"span"}},[n("el-button",{attrs:{type:"success",size:"mini"}},[n("i",{staticClass:"fa fa-cloud-upload"}),t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$lang.buttons.deploy)+"\n\t\t\t\t\t\t\t")])],1),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return t.onSingleDelete(e.row.name)}}},[n("i",{staticClass:"fa fa-remove"}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$lang.buttons.delete)+"\n\t\t\t\t\t\t")])]}}])})],1)],1)],1)},s=[],o=(n("7f7f"),n("ac6a"),n("eee4")),i={name:"ProjectIndex",data:function(){return{createProjectDialog:!1,projectName:null,projects:[],loading:!1,buildInfos:{}}},components:{PanelTitle:o["a"]},created:function(){this.getProjectData()},methods:{getBuildInfo:function(t){var e=this;this.$http.get(this.formatString(this.$store.state.url.project.build,{name:t})).then(function(n){var a=n.data;e.$set(e.buildInfos,t,a)})},getProjectData:function(){var t=this;this.loading=!0,this.$http.get(this.$store.state.url.project.index).then(function(e){var n=e.data;t.projects=n,t.loading=!1,t.projects.forEach(function(e){t.getBuildInfo(e.name)})}).catch(function(){t.loading=!1})},onRefresh:function(){this.$message.info(this.$store.getters.$lang.messages.loading),this.getProjectData()},onDeleteProject:function(t){var e=this;this.loading=!0,this.$http.post(this.formatString(this.$store.state.url.project.remove,{name:t})).then(function(){e.$message.success(e.$store.getters.$lang.messages.successDelete),e.loading=!1,e.getProjectData()}).catch(function(){e.loading=!1,e.$message.error(e.$store.getters.$lang.messages.errorDelete)})},onSingleDelete:function(t){var e=this;this.$confirm(this.$store.getters.$lang.messages.confirm,this.$store.getters.$lang.buttons.confirm,{confirmButtonText:this.$store.getters.$lang.buttons.yes,cancelButtonText:this.$store.getters.$lang.buttons.no,type:"warning"}).then(function(){e.onDeleteProject(t)})},onCreateProject:function(){var t=this;this.$http.post(this.$store.state.url.project.create,{name:this.projectName}).then(function(){t.$message.success(t.$store.getters.$lang.messages.successSave),t.loading=!1,t.$router.push({name:"projectConfigure",params:{name:t.projectName}})}).catch(function(){t.loading=!1,t.$message.error(t.$store.getters.$lang.messages.errorSave)})}}},l=i,r=n("2877"),c=Object(r["a"])(l,a,s,!1,null,null,null);e["default"]=c.exports},eee4:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-title"},[t.title?n("span",{domProps:{textContent:t._s(t.title)}}):t._e(),n("div",{staticClass:"fr"},[t._t("default")],2)])},s=[],o={name:"PanelTitle",props:{title:{type:String}}},i=o,l=n("2877"),r=Object(l["a"])(i,a,s,!1,null,null,null);e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-55d598d5.3c9ed19a.js.map