import{e,u as a,h as s,l as t,o as n,j as o,k as r,m as i,a9 as c}from"./vendor.1cb7f2f0.js";import{s as u,a as l,v as p,e as d}from"./index.f7adef75.js";var f=e({name:"PageStripe",setup(){const e=s(),t=new URL(window.location.href).searchParams.get("code"),{mutate:n,loading:o,onError:r,onDone:i}=a(d,{variables:{input:{code:t}}});return t?n():e.replace("/login"),i((a=>{u({hasWallet:a.data.connectStripe.hasWallet}),l("You 've successfully connected your Stripe Account!","You can now begin to create listings in the Host page."),e.push(`/user/${p.id}`)})),r((()=>{e.push(`/user/${p.id}?stripe_error=true`)})),{loading:o}}});f.render=function(e,a,s,u,l,p){const d=t("a-spin"),f=t("a-layout-content");return e.loading?(n(),o(f,{key:0,class:"stripe"},{default:r((()=>[i(d,{size:"large",tip:"Connecting your stripe account..."})])),_:1})):c("",!0)};export default f;