import{_ as l,a as h,r as a,o as _,c as m,f as e,d as t,w as s,b as i,t as p,u as f}from"./index-f4b95e5f.js";const{VITE_URL:k}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"healing_chou",BASE_URL:"/yctest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},$={data(){return{isLogin:!1}},components:{RouterView:h},methods:{logout(){document.cookie='hexToken=""',this.isLogin=!1,alert("已登出"),this.$router.push("/")},checkAdmin(){const r=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=r,this.$http.post(`${k}/api/user/check`).then(()=>{this.isLogin=!0}).catch(n=>{console.log(n),this.$router.push("/login")})}},mounted(){this.checkAdmin()}},g={key:0,class:"container"},V=i("br",null,null,-1);function v(r,n,w,x,c,u){const o=a("router-link"),d=a("router-view");return c.isLogin?(_(),m("div",g,[e(" 管理頁面 "),V,t(o,{to:"/admin/orders"},{default:s(()=>[e("預約管理")]),_:1}),e(" | "),t(o,{to:"/admin/services"},{default:s(()=>[e("療癒服務管理")]),_:1}),e(" | "),t(o,{to:"/admin/courses"},{default:s(()=>[e("療癒課程管理")]),_:1}),e(" | "),t(o,{to:"/admin/blog"},{default:s(()=>[e("部落格管理")]),_:1}),e(" | "),t(o,{to:"/admin/news"},{default:s(()=>[e("最新消息管理")]),_:1}),e(" | "),t(o,{to:"/"},{default:s(()=>[e("回前台")]),_:1}),e(" | "),i("a",{href:"#",onClick:n[0]||(n[0]=p(E=>u.logout(),["prevent"]))},"登出"),t(d)])):f("",!0)}const T=l($,[["render",v]]);export{T as default};