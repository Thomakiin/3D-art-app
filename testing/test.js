let isSpinning = true;

// let illo = new Zdog.Illustration({
//   element: '.zdog-canvas',
//   dragRotate: true,
// });

// circle
// new Zdog.Ellipse({
//   addTo: illo,
//   diameter: 80,
//   stroke: 20,
//   color: '#636',
// });

for (var i = 0; i < 100; i++) {
    var canv = document.createElement("canvas");
    document.getElementById("body").appendChild(canv);
    canv.className = 'zdog-canvas' + i;
    canv.width = "100";
    //canv.color = (111, 111, 111, 1);

    let illo = new Zdog.Illustration({
        element: '.zdog-canvas' + i,
        dragRotate: true,
    });
    new Zdog.Ellipse({
        addTo: illo,
        diameter: 80,
        stroke: 20,
        color: '#636',
    });
    new Zdog.Ellipse({
        addTo: illo,
        diameter: 20,
        stroke: 20,
        color: '#636',
    });
    // square
    new Zdog.Rect({
        addTo: illo,
        width: 80,
        height: 80,
        translate: { z: -40 },
        stroke: 13,
        color: '#E62',
        fill: true,
    });
    function animate() {
        illo.updateRenderGraph();
        requestAnimationFrame(animate);
    }
    animate();
}