!function(){function e(){if(i.length>200&&i.shift(),f++%20==0&&i.length>=s&&i.shift(),i.length<s)for(var e=i.length;s>e;e++)i.push(new Vector(t.size.x*Math.random(),t.size.y*Math.random()))}function n(){c=[],i.forEach(function(e){i.forEach(function(n){e.distance(n)<100&&c.push(new Pair(e).connect(n))})})}window.demoDescription="A space filled with points either randomly or based on mouse movements. When two points are near each other, draw a line to connect them.";var o={a1:"#ff2d5d",a2:"#42dc8e",a3:"#2e43eb",a4:"#ffe359",b1:"#96bfed",b2:"#f5ead6",b3:"#f1f3f7",b4:"#e2e6ef"},t=new CanvasSpace("demo","#111").display(),a=new Form(t.ctx),i=[],c=[],f=0,s=20;t.add({animate:function(t,f,s){a.stroke("rgba(255,255,255,.5)"),a.lines(c),a.stroke(!1),a.fill(o.a1),a.points(i,1,!0),n(),e()},onMouseAction:function(e,n,o,t){"move"==e&&Util.chance(.07)&&i.push(new Vector(n,o))}}),t.bindMouse(),t.play()}();