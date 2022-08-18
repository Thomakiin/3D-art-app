let sliderDiameter = document.getElementById("sliderDiameter");

let isSpinning = true;
let num = 0;
let d = 50; // inputted diameter

let illo = new Zdog.Illustration({
    element: '.zdog-canvas', // IMPORTANT: element to render on (make sure this matches a canvas / svg in the html file)
    dragRotate: true,
    // stop rotation when dragging starts
    onDragStart: function () {
        isSpinning = false;
    },
});

// add circle
let MyDog = new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    stroke: 20,
    color: '#636',
});

function animate() {
    // rotate
    if (isSpinning) {
        illo.rotate.y += 0.03;
    }
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();

function myTimer() {
    illo.removeChild(MyDog);
    num += 50;
    MyDog = new Zdog.Ellipse({
        addTo: illo,
        diameter: sliderDiameter.value,
        stroke: 20,
        color: '#636',
    });
    //console.log(slider.value);
    illo.updateRenderGraph();
}

setInterval(myTimer, 1);