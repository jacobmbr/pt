!function(){window.demoDescription="Radiating rectangles in HSB color scheme, whose colors are shifted based on its position and mouse position. With homage to Josef Albers.";var o={a1:"#ff2d5d",a2:"#42dc8e",a3:"#2e43eb",a4:"#ffe359",b1:"#96bfed",b2:"#f5ead6",b3:"#f1f3f7",b4:"#e2e6ef"},e=new CanvasSpace("demo",o.b4).display(),t=new Form(e.ctx);t.stroke(!1);for(var i={topleft:[],topright:[],bottomleft:[],bottomright:[]},n=e.size.$divide(2).floor(),r=new Color(0,0,0,1,"hsb"),a=10,l=n.$divide(a),f=.5,s=0;a>s;s++){var d=new Rectangle(l.$multiply(s)).connect(n);i.topleft.push(d),i.topright.push(d.clone().moveBy(l.x*(a-s),0)),i.bottomleft.push(d.clone().moveBy(0,l.y*(a-s))),i.bottomright.push(d.clone().moveBy(l.x*(a-s),l.y*(a-s)))}e.add({animate:function(o,e,n){for(var l=20,s=0;a>s;s++){var d=new Color(Math.floor(90/(s+1)),.2,(s+1)/a*.5,1,"hsb");d.add(r),t.fill(d.rgb()),t.rect(i.topleft[s]),d.x+=l+l*f,t.fill(d.rgb()),t.rect(i.topright[s]),d.x+=l+l*f,t.fill(d.rgb()),t.rect(i.bottomright[s]),d.x+=l+l*f,t.fill(d.rgb()),t.rect(i.bottomleft[s])}},onMouseAction:function(o,t,i,a){if("move"==o){var l=n.$subtract(t,i);f=l.magnitude()/e.size.y,r.set(Const.rad_to_deg*Util.boundRadian(l.angle(),!0),f/2,f/2)}}}),e.bindMouse(),e.play()}();