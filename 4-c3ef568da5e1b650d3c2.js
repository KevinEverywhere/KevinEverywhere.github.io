(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(30);t.a=function(e){return i.a.createElement("li",null,i.a.createElement(r.a,{to:e.item.toLowerCase()},e.item))}},167:function(e,t,n){"use strict";var a=n(168),i=n(0),r=n.n(i),o=n(1),s=n.n(o),c=n(171),l=n.n(c),d=n(30),u=(n(172),function(e){var t,n=e.children,i=e.location;return t=i&&"/"===i.pathname?r.a.createElement("div",null,n):r.a.createElement("div",{id:"wrapper",className:"page"},r.a.createElement("div",null,n)),r.a.createElement(d.b,{query:"2994927498",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Kevin Ready is a developer, musician and adventurist."},{name:"keywords",content:"freelance,react,node,javascript,contractor,developer"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{name:"theme-color",content:"#000000"}),r.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),r.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black"}),r.a.createElement("meta",{name:"description",content:"Kevin Ready | Creativist"})),t)},data:a})});u.propTypes={children:s.a.node.isRequired},t.a=u},168:function(e){e.exports={data:{site:{siteMetadata:{title:"PlanetKevin | 2019"}}}}},169:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1),o=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};o.propTypes={timeout:n.n(r).a.bool},t.a=o},170:function(e,t,n){"use strict";n(22);var a=n(0),i=n.n(a),r=n(166),o=n(30),s=function(e){return i.a.createElement("nav",null,i.a.createElement(o.a,{to:"/"},i.a.createElement("div",{className:"smlogo"},i.a.createElement("span",{className:"icon fa-bicycle"}))),i.a.createElement("ul",null,i.a.createElement(r.a,{item:"Work"}),i.a.createElement(r.a,{item:"Creative"}),i.a.createElement(r.a,{item:"Contact"})))},c=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(r.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return i.a.createElement("header",{id:"header"},i.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),c(e.chosen))}},175:function(e,t,n){"use strict";var a=n(40),i=n.n(a),r=n(10),o=n.n(r),s=n(0),c=n.n(s),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).touchHandler=function(e){n.iamEvent(e,"touch")},n.iamEvent=function(e,t){},n.mouseHandler=function(e){n.iamEvent(e,"mouse")},n.clickHandler=function(e){n.iamEvent(e,"click")},n.keyHandler=function(e){switch(n.iamEvent(e,"key"),e.preventDefault(),e.key){case"ArrowRight":n.moveOnVector("z"===n.state.vector.charAt(0)?"xPos":"zPos",n.state.distanceBetween/4,n.state.distanceBetween/10);break;case"ArrowLeft":n.moveOnVector("z"===n.state.vector.charAt(0)?"xNeg":"zNeg",n.state.distanceBetween/4,n.state.distanceBetween/10);break;case"ArrowUp":n.moveOnVector("z"===n.state.vector.charAt(0)?"zPos":"xPos",n.state.distanceBetween/4,n.state.distanceBetween/10);break;case"ArrowDown":n.moveOnVector("z"===n.state.vector.charAt(0)?"zNeg":"xNeg",n.state.distanceBetween/4,n.state.distanceBetween/10)}},n.onUpDownAxis=function(e){var t=0===n.state.orientation?"beta":"gamma",a=Math.round((450+e[t])%360);return a>90?a-180:a},n.upDownTest=function(e){return Math.abs(e)>20?e/10:0},n.selectView=function(){var e;switch(Math.floor((document.querySelector("#rig").getAttribute("rotation").y+45)/90)%4){case 1:e="xPos";break;case 2:e="zPos";break;case 3:e="xNeg";break;case 0:e="zNeg";break;default:e=n.state.vector}return e},n.getOld=function(){var e={pos:document.querySelector("#rig")&&document.querySelector("#rig").getAttribute("position")?document.querySelector("#rig").getAttribute("position"):"0 0 0",rot:document.querySelector("#rig")&&document.querySelector("#rig").getAttribute("rotation")?document.querySelector("#rig").getAttribute("rotation"):"0 0 0"};return Math.abs(e.pos.x)<n.state.distanceBetween/2&&Math.abs(e.pos.z)<n.state.distanceBetween/2&&n.state.vector!==n.selectView()&&n.setState({vector:n.selectView()}),e},n.testRotation=function(e,t,n){document.querySelector("#rig").setEntityAttribute("rotation",e.rot,{x:e.rot.x,y:e.rot.y+n,z:e.rot.z})},n.moveOnVector=function(e,t,a){var i=n.getOld();if(e.charAt(0)!==n.state.vector.charAt(0))n.testRotation(i,e.charAt(0),-1===e.indexOf("Pos")?a:-a);else switch(e){case"xPos":document.querySelector("#rig").setEntityAttribute("position",i.pos,{x:i.pos.x+t,y:i.pos.y,z:i.pos.z});break;case"xNeg":document.querySelector("#rig").setEntityAttribute("position",i.pos,{x:i.pos.x-t,y:i.pos.y,z:i.pos.z});break;case"zNeg":document.querySelector("#rig").setEntityAttribute("position",i.pos,{x:i.pos.x,y:i.pos.y,z:i.pos.z+t});break;case"zPos":document.querySelector("#rig").setEntityAttribute("position",i.pos,{x:i.pos.x,y:i.pos.y,z:i.pos.z-t})}},n.testPosition=function(e){try{document.querySelector("#rig")&&n.moveOnVector(n.state.vector,n.upDownTest(n.onUpDownAxis(e)))}catch(t){console.log(t)}},n.deviceOrientationHandler=n.deviceOrientationHandler.bind(i()(n)),n.orientationChangeHandler=n.orientationChangeHandler.bind(i()(n)),n.state={orientation:0,timer:Date.now(),distanceBetween:60,timeoutLength:2e3,startingPoint:null,vectors:["xPos","xNeg","zPos","zNeg"],vector:"xPos"},n}o()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){window.removeEventListener("deviceorientation",this.deviceOrientationHandler,!1),window.removeEventListener("orientationchange",this.orientationChangeHandler,!1)},n.componentDidMount=function(){document.addEventListener("keydown",this.keyHandler,!1),window.addEventListener("deviceorientation",this.deviceOrientationHandler,!1),window.addEventListener("orientationchange",this.orientationChangeHandler,!1)},n.deviceOrientationHandler=function(e){var t=e.alpha,n=e.beta,a=e.gamma;if(this.state.startingPoint)this.testPosition(e);else{var i={alpha:t,beta:n,gamma:a};this.setState({startingPoint:i,orientation:window.orientation})}},n.orientationChangeHandler=function(e){this.setState({orientation:window.orientation})},n.render=function(){return c.a.createElement("div",null,this.props.children)},t}(c.a.Component);t.a=l},176:function(e,t,n){"use strict";var a=n(10),i=n.n(a),r=n(0),o=n.n(r),s=function(e){function t(t){var n;return(n=e.call(this)||this).state={cameras:null},n}i()(t,e);var a=t.prototype;return a.createdAnimations=function(e,t){var n,a=this;return t||(n=e.map(function(e,t){var n=" animation__"+t+"=";for(var i in a)n+=i+": "+a[i]+";";return n.substr(0,n.length-1)})),n},a.componentDidMount=function(){var e=this;n.e(2).then(n.t.bind(null,194,7)).then(function(){n.e(3).then(n.t.bind(null,198,7)).then(function(){e.setState({cameras:o.a.createElement("a-entity",{id:"rig",position:"0 10 -3",rotation:"0 0 0"},o.a.createElement("a-camera",{"keyboard-controls":!0,far:"20000",position:"0 2 0",id:"main-camera"},o.a.createElement("a-cursor",null)))})})}).catch(function(e){return console.error(e)})},a.render=function(){return this.state.cameras},t}(o.a.PureComponent);t.a=s},177:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1),o=n.n(r),s=function(e){var t={primitive:"sphere",radius:e.radius};return e.spherical?i.a.createElement("a-entity",{geometry:t,position:e.position,rotation:e.rotation},i.a.createElement("a-image",{geometry:t,src:e.fluid.src,position:"0 0 0"})):i.a.createElement("a-entity",{position:e.position,rotation:e.rotation},i.a.createElement("a-image",{material:"opacity:0.8",src:e.fluid.src,width:e.width,height:e.height,position:"0 0 0"}))};s.propTypes={position:o.a.string,rotation:o.a.string,radius:o.a.string,src:o.a.string,width:o.a.number,height:o.a.number},t.a=s},178:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1),o=n.n(r),s=function(e){var t="primitive: sphere; radius:"+e.radius;return e.spherical?i.a.createElement("a-entity",{geometry:t,position:e.position,rotation:e.rotation},i.a.createElement("a-video",{material:"side:double",geometry:t,src:e.src,controls:!0,"video-texture":!0,position:"0 0 0"})):i.a.createElement("a-entity",{position:e.position,rotation:e.rotation},i.a.createElement("a-video",{src:e.src,controls:!0,"video-texture":!0,width:e.width,height:e.height,position:"0 0 0"}))};s.propTypes={position:o.a.string,rotation:o.a.string,radius:o.a.string,src:o.a.string,width:o.a.number,height:o.a.number},t.a=s},179:function(e,t,n){"use strict";var a=n(10),i=n.n(a),r=n(0),o=n.n(r),s=n(30),c=(n(191),n(22),n(84)),l=n.n(c),d=n(193),u=n.n(d),f=function(e){var t=e.node,n=l()(e,["node"]);return n&&n.fluid?o.a.createElement(u.a,Object.assign({crossOrigin:"anonymous",fluid:n.fluid},n)):n&&n.fixed?o.a.createElement(u.a,Object.assign({crossOrigin:"anonymous",fixed:n.fixed},n)):(t&&t.publicURL,o.a.createElement("img",Object.assign({alt:"Gallery item",src:Object(s.d)(n.src),crossOrigin:"anonymous"},n)))},p=function(e){function t(t){var n;return(n=e.call(this)||this).buildImageAssets=function(){return n.props.data.allFile.edges.map(function(e,t){return e&&e.node&&e.node.childImageSharp&&e.node.childImageSharp.fluid?o.a.createElement(f,{alt:e.node.childImageSharp.fluid.originalName,id:e.node.id,key:t,fluid:e.node.childImageSharp.fluid}):null})},n.state={assets:null},n}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;n.e(2).then(n.t.bind(null,194,7)).then(function(t){e.setState({assets:o.a.createElement("a-assets",null,o.a.createElement("img",{crossOrigin:"anonymous",alt:"universe background",src:Object(s.d)("/images/universe_4096.jpg"),id:"universe_4096Image"}),e.buildImageAssets(),o.a.createElement("img",{crossOrigin:"anonymous",alt:"earth with Degrees",src:Object(s.d)("/images/equirectangularWithDegrees.jpg"),id:"earthDegrees"}),o.a.createElement("img",{crossOrigin:"anonymous",alt:"eye chart",src:Object(s.d)("/images/eyeChart_3000_6526.jpg"),id:"eyeChart"}),o.a.createElement("video",{id:"webcam",playsInline:!0}),o.a.createElement("video",{id:"haightVideo","webkit-playsinline":"",playsInline:"",controls:"",src:Object(s.d)("/videos/satTemptingHaight.mp4"),crossOrigin:"anonymous"}),o.a.createElement("video",{id:"mixVideo","webkit-playsinline":"",playsInline:"",controls:"",src:Object(s.d)("/videos/mix_injected.mp4"),crossOrigin:"anonymous"}))})}).catch(function(e){return console.error(e)})},a.render=function(){return this.state.assets},t}(o.a.PureComponent);t.a=p},191:function(e,t,n){"use strict";n(192)("fixed",function(e){return function(){return e(this,"tt","","")}})},192:function(e,t,n){var a=n(15),i=n(24),r=n(26),o=/"/g,s=function(e,t,n,a){var i=String(r(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},193:function(e,t,n){"use strict";var a=n(12);t.__esModule=!0,t.default=void 0;var i,r=a(n(10)),o=a(n(40)),s=a(n(84)),c=a(n(92)),l=a(n(0)),d=a(n(1)),u=function(e){var t=(0,c.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},m=new WeakMap;var h=function(e,t){var n=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),i);return n&&(n.observe(e),m.set(e,t)),function(){n.unobserve(e),m.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+n+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+a+"<img "+s+c+n+i+t+o+r+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=l.default.forwardRef(function(e,t){var n=e.sizes,a=e.srcSet,i=e.src,r=e.style,o=e.onLoad,d=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,c.default)({sizes:n,srcSet:a,src:i},u,{onLoad:o,onError:d,ref:t,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var v=function(e){function t(t){var n;n=e.call(this,t)||this;var a=!0,i=!1,r=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,i=!1);var c=!(t.critical&&!t.fadeIn);return n.state={isVisible:a,imgLoaded:!1,IOSupported:i,fadeIn:r,hasNoScript:c,seenBefore:s},n.imageRef=l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,a=e.className,i=e.style,r=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.Tag,w=e.itemProp,E="boolean"==typeof v?"lightgray":v,S=(0,c.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),O=(0,c.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),z={title:t,alt:this.state.isVisible?"":n,style:S,className:p};if(m){var L=m;return l.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),E&&l.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),L.base64&&l.default.createElement(y,(0,c.default)({src:L.base64},z)),L.tracedSVG&&l.default.createElement(y,(0,c.default)({src:L.tracedSVG},z)),this.state.isVisible&&l.default.createElement("picture",null,L.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),l.default.createElement(y,{alt:n,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,c.default)({alt:n,title:t},L))}}))}if(h){var x=h,k=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},r);return"inherit"===r.display&&delete k.display,l.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},E&&l.default.createElement(b,{title:t,style:{backgroundColor:E,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),x.base64&&l.default.createElement(y,(0,c.default)({src:x.base64},z)),x.tracedSVG&&l.default.createElement(y,(0,c.default)({src:x.tracedSVG},z)),this.state.isVisible&&l.default.createElement("picture",null,x.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),l.default.createElement(y,{alt:n,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,c.default)({alt:n,title:t,width:x.width,height:x.height},x))}}))}return null},t}(l.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});v.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=v;t.default=E}}]);
//# sourceMappingURL=4-c3ef568da5e1b650d3c2.js.map