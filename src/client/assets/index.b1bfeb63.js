import{e,a5 as s,u as t,l as i,o as a,j as r,m as n,k as o,n as l,a1 as g,F as u,a9 as c,f as d,a2 as p,a3 as f,i as m}from"./vendor.1cb7f2f0.js";import{s as h,a as y,d as _,D as k,f as v,U as b,v as P}from"./index.f7adef75.js";import{_ as w}from"./ListingCard.8d34f804.js";var S=e({name:"UserProfile",props:{user:Object,viewer:Object,viewerIsUser:Boolean},setup(e){const i=s((()=>e.user.income?v(e.user.income):"0$")),{mutate:a,loading:r,onDone:n,onError:o}=t(k);return n((e=>{h({hasWallet:e.data.disconnectStripe.hasWallet}),y("You've successfully disconnected from Stripe!","You'll have to reconnect with Stripe to continue to create listings.")})),o((()=>{_("Sorry! We were'nt able to disconnect you from Stripe. Please try again later!")})),{redirectToStripe:function(){window.location.href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_Jct01FqHbwFDuTozLhgtHUByBtu7MK6r&scope=read_write"},disconnectStripe:function(){a()},income:i,loading:r}}});const U={class:"user-profile"},L={class:"user-profile__avatar"},C={class:"user-profile__details"},B=l(" Details "),x=l(" Name: "),I=l(" Contact: "),T={class:"user-profile__details"},j=l(" Additional Details "),O=l(" Stripe Registered "),D=l(" Icome Earned:  "),z=l(" Disconnect Stripe "),E=l(" By disconnecting, you won't be able to recieve "),N=l(" any further payments "),W=l(". This will prevent users from booking listings that you might have already created. "),H=l(" Interested in becoming a TinyHouse host? Register with your Stripe account! "),F=l(" Connect with Stripe "),R=l(" TinyHouse uses "),Y=n("a",{href:"https://stripe.com/en-US/connect",target:"_blank",rel:"noopener noreferrer"}," Stripe ",-1),q=l(" to help transfer your earnings in a secure and trusted manner. ");S.render=function(e,s,t,d,p,f){const m=i("a-avatar"),h=i("a-divider"),y=i("a-typography-title"),_=i("a-typography-text"),k=i("a-typography-paragraph"),v=i("a-tag"),b=i("a-button"),P=i("a-card");return a(),r("div",U,[n(P,{class:"user-profile__card"},{default:o((()=>[n("div",L,[n(m,{src:e.user.avatar,size:100},null,8,["src"])]),n(h),n("div",C,[n(y,{level:4},{default:o((()=>[B])),_:1}),n(k,null,{default:o((()=>[x,n(_,{strong:""},{default:o((()=>[l(g(e.user.name),1)])),_:1}),n(k,null,{default:o((()=>[I,n(_,{strong:""},{default:o((()=>[l(g(e.user.contact),1)])),_:1})])),_:1})])),_:1})]),e.viewerIsUser?(a(),r(u,{key:0},[n(h),n("div",T,[n(y,{level:4},{default:o((()=>[j])),_:1}),e.viewer.hasWallet?(a(),r(u,{key:0},[n(k,null,{default:o((()=>[n(v,{color:"green"},{default:o((()=>[O])),_:1})])),_:1}),n(k,null,{default:o((()=>[D,n(_,{strong:""},{default:o((()=>[l(g(e.income),1)])),_:1})])),_:1}),n(b,{type:"danger",class:"user-profile__details-cta",loading:e.loading,onClick:e.disconnectStripe},{default:o((()=>[z])),_:1},8,["loading","onClick"]),n(k,{type:"secondary"},{default:o((()=>[E,n(_,{strong:""},{default:o((()=>[N])),_:1}),W])),_:1})],64)):(a(),r(u,{key:1},[n(k,null,{default:o((()=>[H])),_:1}),n(b,{type:"primary",class:"user-profile__details-cta",onClick:e.redirectToStripe},{default:o((()=>[F])),_:1},8,["onClick"]),n(k,{type:"secondary"},{default:o((()=>[R,Y,q])),_:1})],64))])],64)):c("",!0)])),_:1})])};var A=e({name:"UserListing",components:{ListingCard:w},props:{userListings:Object,listingsPage:Number,limit:Number},emits:["update:listingsPage"],setup:(e,{emit:s})=>({setListingsPage:function(e){s("update:listingsPage",e)}})});const J={class:"user-listings"},K=l(" Listings "),M=l(" This section highlights the listings this user currently hosts and has made available for bookings. ");A.render=function(e,s,t,l,g,u){const c=i("a-typography-title"),d=i("a-typography-paragraph"),p=i("ListingCard"),f=i("a-list-item"),m=i("a-list");return a(),r("div",J,[n(c,{level:4,class:"user-listings__title"},{default:o((()=>[K])),_:1}),n(d,{class:"user-listings__description"},{default:o((()=>[M])),_:1}),n(m,{grid:{gutter:8,xs:1,sm:2,lg:4},dataSource:e.userListings.result,locale:{emptyText:"User doesn't have any listings yet!"},pagination:{position:"top",current:e.listingsPage,total:e.userListings.total,defaultPageSize:e.limit,hideOnSinglePage:!0,showLessItems:!0,onChange:e.setListingsPage}},{renderItem:o((({item:e})=>[n(f,null,{default:o((()=>[n(p,{listing:e},null,8,["listing"])])),_:2},1024)])),_:1},8,["dataSource","pagination"])])};var $=e({name:"UserBookings",components:{ListingCard:w},props:{userBookings:Object,bookingsPage:Number,limit:Number},setup:(e,{emit:s})=>({setBookingsPage:function(e){s("update:bookingsPage",e)}})});const G={class:"user-bookings"},Q=l(" Bookings "),V=l(" This section highlights the bookings you've made, and the check-in/check-out dates associated with the said bookings. "),X={class:"user-bookings__bookings-history"},Z=l(" Check in: "),ee=l("{item.checkIn}"),se=l(" Check out: "),te=l("{item.checkOut}");$.render=function(e,s,t,l,g,u){const c=i("a-typography-title"),d=i("a-typography-paragraph"),p=i("a-typography-text"),f=i("ListingCard"),m=i("a-list-item"),h=i("a-list");return a(),r("div",G,[n(c,{level:4,class:"user-bookings__title"},{default:o((()=>[Q])),_:1}),n(d,{class:"user-bookings__description"},{default:o((()=>[V])),_:1}),n(h,{grid:{gutter:8,xs:1,sm:2,lg:4},dataSource:e.userBookings.result,locale:{emptyText:"You haven't made any bookings!"},pagination:{position:"top",current:e.bookingsPage,total:e.userBookings.total,defaultPageSize:e.limit,hideOnSinglePage:!0,showLessItems:!0,onChange:e.setBookingsPage}},{renderItem:o((({item:e})=>[n(m,null,{default:o((()=>[n("div",X,[n("div",null,[Z,n(p,{strong:""},{default:o((()=>[ee])),_:1})]),n("div",null,[se,n(p,{strong:""},{default:o((()=>[te])),_:1})])]),n(f,{listing:e},null,8,["listing"])])),_:2},1024)])),_:1},8,["dataSource","pagination"])])};var ie=e({name:"PageUser",components:{UserProfile:S,UserListings:A,UserBookings:$},setup(){const e=m(),t=d(1),i=d(1),{result:a,loading:r,error:n}=p(b,{id:e.params.id,bookingsPage:t,listingsPage:i,limit:4},{fetchPolicy:"cache-and-network"}),o=f(a,null,(e=>e.user)),l=s((()=>P.id===e.params.id)),g=new URL(window.location.href).searchParams.get("stripe_error");return{user:o,loading:r,error:n,viewer:P,viewerIsUser:l,listingsPage:i,bookingsPage:t,limit:4,stripeError:g}}});ie.render=function(e,s,t,l,g,d){const p=i("ErrorBanner"),f=i("PageSkeleton"),m=i("UserProfile"),h=i("a-col"),y=i("UserListings"),_=i("UserBookings"),k=i("a-row"),v=i("a-layout-content");return a(),r(v,{class:"user"},{default:o((()=>[e.stripeError?(a(),r(p,{key:0,description:"We had an issue connecting with Stripe. Please try again soon."})):c("",!0),e.loading?(a(),r(f,{key:1})):e.error?(a(),r(u,{key:2},[n(p,{description:"This user may not exist or we 've encountered an error. Please try again soon"}),n(f)],64)):(a(),r(k,{key:3,gutter:12,type:"flex",justify:"space-between"},{default:o((()=>[n(h,{xs:24},{default:o((()=>[n(m,{user:e.user,viewer:e.viewer,"viewer-is-user":e.viewerIsUser},null,8,["user","viewer","viewer-is-user"])])),_:1}),n(h,{xs:24},{default:o((()=>[n(y,{"user-listings":e.user.listings,limit:e.limit,"listings-page":e.listingsPage,"onUpdate:listingsPage":s[1]||(s[1]=s=>e.listingsPage=s)},null,8,["user-listings","limit","listings-page"]),e.user.bookings?(a(),r(_,{key:0,"user-bookings":e.user.bookings,limit:e.limit,"bookings-page":e.bookingsPage,"onUpdate:bookingsPage":s[2]||(s[2]=s=>e.bookingsPage=s)},null,8,["user-bookings","limit","bookings-page"])):c("",!0)])),_:1})])),_:1}))])),_:1})};export default ie;