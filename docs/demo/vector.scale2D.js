!function(){window.demoDescription="Scale a series of points on a path from an anchor, and get its reflection from other path. Connect each point and its reflected point with a line.";var e={a1:"#ff2d5d",a2:"#42dc8e",a3:"#2e43eb",a4:"#ffe359",b1:"#96bfed",b2:"#f5ead6",b3:"#f1f3f7",b4:"#e2e6ef"},n=new CanvasSpace("demo",e.b3).display(),t=new Form(n.ctx),i=(new Line).connect(n.size),o=new Line(n.size.$multiply(.9,0)).connect(n.size.$multiply(0,.9)),a=new Vector(n.size.$divide(2)),r=n.size.magnitude();n.add({animate:function(n,c,l){t.stroke("rgba(255,255,255,.7)",3),t.lines([i,o]);for(var s=i.getPerpendicularFromPoint(a),f=s.$subtract(a).magnitude()/(r/4),d=o.getPerpendicularFromPoint(a),p=d.$subtract(a).magnitude()/(r/4),m=15,u=1;m>u;u++){var b=i.interpolate(u/m).scale2D(f,f,i.interpolate(.4)),w=b.clone().reflect2D(o),g=o.interpolate(u/m).scale2D(p,p,o.interpolate(.6)),k=g.clone().reflect2D(i);t.stroke(!1).fill(e.a1),t.point(b,20*f,!0),t.stroke(e.a1,2).fill(!1),t.point(w,10*f/2,!0),t.stroke("rgba(0,0,0,.1)",1),t.line(new Line(b).connect(w)),t.stroke(e.a2),t.line(new Line(g).connect(k)),t.stroke(!1).fill(e.a2),t.point(g,15*p,!0)}t.stroke(e.a1),t.line(new Line(a).connect(s)),t.stroke(e.a2),t.line(new Line(a).connect(d))},onMouseAction:function(e,n,t,i){"move"==e&&a.set(n,t)}}),n.bindMouse(),n.play()}();