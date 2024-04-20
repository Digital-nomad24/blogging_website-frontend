import{j as e,R as u,u as v,r as c,L as g}from"./index-DX5dQwiC.js";import{B as f,a as j}from"./axios-C1aFd0fI.js";import{C as N,a as y}from"./Card-RaoK34Rv.js";import{b as k,p as C,I as w}from"./atoms-B0Esckxm.js";function B({placeholder:t,prop:n,onChange:i}){return e.jsx("textarea",{className:"block w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50",placeholder:t,onChange:i,required:n})}function b({children:t}){return e.jsx("div",{className:"text-sm font-medium text-left py-2",children:t})}const E=({scrollToRef:t})=>{const n=()=>{t.current&&t.current.scrollIntoView({behavior:"smooth"})};return e.jsx("div",{children:e.jsx("button",{onClick:n,children:"New Blog"})})},I=E;function S({children:t}){return e.jsx("div",{className:"bg-white rounded-lg shadow-md p-4",children:e.jsx("p",{className:"text-gray-700",children:t})})}function D({posts:t}){const n=localStorage.getItem("token"),[i,h]=u(k),l=v();if(t){if(n)return e.jsx(e.Fragment,{children:t.map(a=>e.jsxs(N,{children:[e.jsxs(b,{children:[e.jsx("h2",{className:"text-xl ",children:a.title}),e.jsx(S,{children:a.content})]}),e.jsx(y,{children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(f,{label:"Edit",onClick:async()=>{l("/edit?id="+a.id)}}),e.jsx(f,{label:"Delete",onClick:async()=>{h(i.filter(s=>s.id!==a.id));let x="";console.log(a.id);let d={method:"get",maxBodyLength:1/0,url:`https://backend.nakshvashisth.workers.dev/api/v1/blog/${a.id}/delete`,headers:{Authorization:`Bearer ${n}`},data:x};j.request(d).then(s=>{console.log(JSON.stringify(s.data))}).catch(s=>{console.log(s)})}})]})})]},Math.random()))});c.useEffect(()=>{l("/signin")})}else return e.jsx("div",{})}function A(){const t=v(),n=localStorage.getItem("token");if(n){const[i,h]=u(k),[l,a]=u(C);c.useEffect(()=>{(async()=>{try{let m={method:"get",maxBodyLength:1/0,url:"https://backend.nakshvashisth.workers.dev/api/v1/user/posts",headers:{Authorization:`Bearer ${n}`},data:""};j.request(m).then(r=>{var p;h((p=r.data.response[0])==null?void 0:p.posts)}).catch(r=>{console.log(r)})}catch(o){console.error("Error fetching balance:",o)}})()},[l]);const x=c.useMemo(()=>Math.floor(Math.random()*1e3)+1e3,[]),d=c.useRef(null);return e.jsxs("div",{className:"flex flex-col min-h-screen",children:[e.jsxs("header",{className:"bg-gray-900 text-white py-4 px-6 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{className:"text-lg font-bold",to:"/dashboard",children:"Blog Dashboard"}),e.jsxs("nav",{className:"hidden md:flex items-center gap-4",children:[e.jsx(g,{className:"hover:underline",to:"/dashboard",children:"Home"}),e.jsx(g,{className:"hover:underline",to:"/",children:"Blogs"}),e.jsx(I,{scrollToRef:d})]})]}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsx(f,{label:"Logout",onClick:()=>{t("/signin")}})})]}),e.jsxs("main",{className:"flex-1 p-6 md:p-10",children:[e.jsxs("section",{className:"mb-8",children:[e.jsx("div",{className:"flex items-center justify-between mb-4",children:e.jsx("h2",{className:"text-2xl font-bold",children:"Recent Blog Posts"})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.jsx(D,{posts:i})})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Blog Analytics"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:e.jsxs(N,{children:[e.jsx(b,{children:e.jsx("h2",{className:"dark:text-2xl ",children:"Total Views"})}),e.jsx(y,{children:e.jsx("div",{className:"text-4xl ",children:x})})]})})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("section",{className:"mb-8",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Create New Blog Post"}),e.jsxs("form",{id:"asds",className:"space-y-4",children:[e.jsx("div",{children:e.jsx(w,{label:"Enter title",onChange:s=>{a(o=>({...o,title:s.target.value}))},placeholder:"Enter blog post title"})}),e.jsxs("div",{children:[e.jsx(b,{children:"Content"}),e.jsx(B,{placeholder:"Enter blog post content",onChange:s=>{a(o=>({...o,content:s.target.value}))},prop:!0})]}),e.jsx("div",{ref:d}),e.jsx("button",{className:"px-4 py-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600",onClick:s=>{s.preventDefault();let o=JSON.stringify({title:`${l.title}`,content:`${l.content}`}),m={method:"post",maxBodyLength:1/0,url:"https://backend.nakshvashisth.workers.dev/api/v1/blog/create",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},data:o};j.request(m).then(r=>{a({title:r.data.response.title,content:r.data.response.title}),console.log(l)}).catch(r=>{console.log(r)})},children:"Submit"})]})]})]})]},"1")}else c.useEffect(()=>{t("/signin")})}export{A as default};
