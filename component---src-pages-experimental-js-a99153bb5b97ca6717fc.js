(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{161:function(e,t,n){"use strict";n.r(t);var a=n(41),i=n.n(a),r=n(10),o=n.n(r),s=n(0),c=n.n(s),u=n(167),l=n(175),d=n(170),m=n(179),p=n(176),h=n(177),f=n(178),g=n(9),v=function(e){function t(t){var n;return(n=e.call(this)||this).positionedImageAsset=function(e,t,a,i,r){var o,s,u,l,d=e.node.childImageSharp.fluid,m=n.state.distanceBetween;switch(i){case"xPos":return o=t%2==0?"0 180 0":"0 0 0",u=Math.floor(a.length/4)-Math.floor(t/2),l=t%2==0?m*u+" "+(800*r+2)+" "+m:m*u+" "+(800*r+2)+" "+-m,c.a.createElement(h.a,{key:e.node.id,fluid:d,rotation:o,width:m,height:m,position:l});case"xNeg":break;case"zPos":return o=t%2==0?"0 270 0":"0 90 0",s=Math.floor(a.length/4)-Math.floor(t/2),m=n.state.distanceBetween,l=t%2==0?m+" "+(800*r+2)+" "+m*s:-m+" "+(800*r+2)+" "+m*s,c.a.createElement(h.a,{key:e.node.id,fluid:d,rotation:o,width:m,height:m,position:l})}},n.builtImageAssets=function(e,t){return n.props.data.allFile.edges.map(function(a,i,r){return a&&a.node&&a.node.childImageSharp&&a.node.childImageSharp.fluid?n.positionedImageAsset(a,i,r,e,t):null})},n.builtVideoAssets=function(e,t){var a,i,r,o=Object(g.a)().getState().getImages.length/3;switch(e){case"xPos":r=function(e){return e%2==0?"0 270 0":"0 90 0"},a=2*-o*n.state.distanceBetween+" "+(800*t+120)+" 0",i=2*o*n.state.distanceBetween+" "+(800*t+120)+" 0";break;case"xNeg":break;case"zPos":r=function(e){return e%2==0?"0 180 0":"0 0 0"},a="0 "+(800*t+120)+" "+-o*n.state.distanceBetween,i="0 "+(800*t+120)+" "+o*n.state.distanceBetween}return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{src:"#mixVideo",id:"mix",spherical:!0,width:400,height:400,radius:"750",position:a}),c.a.createElement(f.a,{src:"#haightVideo",id:"haight",rotation:r(1),width:600,height:340,position:i}))},n.builtAframeAssets=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("a-sky",{geometry:"radius:8000",color:"#fff",src:"#universe_4096Image"}),c.a.createElement("a-image",{src:"#earthDegrees",geometry:"primitive: sphere; radius: 4000",material:"side: double",position:"0 0 0"}),c.a.createElement("a-image",{src:"#eyeChart",height:"650",width:"300",position:"1000 150 0",rotation:"0 0 0",animation:"property: rotation; to: 0 360 0; loop: true; dur: 10000"}))},n.state={distanceBetween:60,imagesPerSide:40,numberOfSides:4,entities:null},n}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;n.e(2).then(n.t.bind(null,194,7)).then(function(t){e.setState({entities:c.a.createElement("a-entity",null,e.builtImageAssets("xPos",-.1),e.builtImageAssets("zPos",-.1),e.builtVideoAssets("xPos",0),e.builtVideoAssets("zPos",0),e.builtAframeAssets())})}).catch(function(e){return console.error(e)})},a.render=function(){return this.state.entities},t}(c.a.PureComponent),b=function(e){function t(t){var n;return(n=e.call(this)||this).state={loadedContent:null,aframeLoaded:null},n}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;n.e(2).then(n.t.bind(null,194,7)).then(function(t){t.components["video-texture"]||(t.registerComponent("video-texture",{init:function(){var e=this;this.el.addEventListener("click",function(t){try{document.querySelector(e.el.getAttribute("src")).paused?document.querySelector(e.el.getAttribute("src")).play():document.querySelector(e.el.getAttribute("src")).pause()}catch(n){}})}}),e.setState({aframeLoaded:!0,loadedContent:c.a.createElement("main",null,c.a.createElement("a-scene",{cursor:"rayOrigin: mouse",embedded:!0,style:{width:"100%",height:"100%"}},c.a.createElement(m.a,{data:e.props.data}),c.a.createElement(v,{data:e.props.data}),c.a.createElement(p.a,{data:e.props.data}),e.props.children))}))}).catch(function(e){return console.error(e)})},a.render=function(){return this.state.loadedContent},t}(c.a.Component),E=n(169),y=function(e){function t(t){var n;return(n=e.call(this)||this).stopVideo=function(e){e.srcObject.getTracks().forEach(function(e){e.stop()}),e.srcObject=null},n.makeActive=function(){var e=i()(n);navigator.mediaDevices.getUserMedia({audio:!0,video:{facingMode:n.props.facingMode}}).then(function(t){var n=document.getElementById(e.props.camera);"srcObject"in n?n.srcObject=t:n.src=window.URL.createObjectURL(t),n.onloadedmetadata=function(e){n.play()}}).catch(function(e){console.log("bad camera")})},n.makeInactive=function(){try{var e=document.getElementById(n.props.camera);n.stopVideo(e)}catch(t){}},n.setVideo=function(){if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var e="side:double;src: #"+n.props.camera;n.setState({activeCamera:c.a.createElement("a-entity",{id:n.props.id,position:n.props.position,rotation:n.props.rotation},c.a.createElement("a-entity",{position:"0 2 0",geometry:"primitive: plane; width: 240; height:180",material:e}))}),n.makeActive(),!0!==n.props.active&&n.makeInactive()}},n.state={activeCamera:null},n}o()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.makeInactive()},a.componentDidMount=function(){var e=this;n.e(2).then(n.t.bind(null,194,7)).then(function(){n.e(3).then(n.t.bind(null,198,7)).then(function(){e.setVideo()}).catch(function(e){console.log("bad camera")})}).catch(function(e){return console.error(e)})},a.render=function(){return this.state.activeCamera},t}(c.a.PureComponent);n.d(t,"experimentalFluidImage",function(){return A}),n.d(t,"experimentalPageQuery",function(){return k});var w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={loading:"is-loading"},n.setWrapperRef=n.setWrapperRef.bind(i()(n)),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){document.querySelector("#instructions").style.display="none",e.setState({loading:""})},500)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.setWrapperRef=function(e){this.wrapperRef=e},n.render=function(){return c.a.createElement(u.a,{location:this.props.location,position:this.state.position},c.a.createElement("div",{id:"subwrapper",className:"page"},c.a.createElement(d.a,{timeout:this.state.timeout,active:"creative"}),c.a.createElement(l.a,null,c.a.createElement(b,{data:this.props.data,setWrapperRef:this.setWrapperRef},c.a.createElement(y,{facingMode:"environment",position:"300 20 -300",rotation:"0 315 0",camera:"webcam",id:"cameraRig"})),I()),c.a.createElement(E.a,{timeout:this.state.timeout})),c.a.createElement("div",{id:"bg"}))},t}(c.a.Component),I=(t.default=w,function(){return c.a.createElement("div",{className:"content",id:"instructions"},c.a.createElement("div",{className:"inner"},c.a.createElement("h3",null,"a device-only experience"),c.a.createElement("p",{className:"singleSpace"},"from the center, tilt up or down",c.a.createElement("br",null),"in one of the four directions",c.a.createElement("br",null),"selecting elements at the end")))}),A="1841460646",k="4266997921"}}]);
//# sourceMappingURL=component---src-pages-experimental-js-a99153bb5b97ca6717fc.js.map