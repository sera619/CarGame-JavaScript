// setup game window
const carCanvas = document.getElementById("car-canvas");
carCanvas.width = 200;

// setup car 
const carCTX = carCanvas.getContext('2d');
const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9)
const car = new Car(100, 100, 30, 50);



animate();

function animate(){
    car.update();
    
    carCanvas.height=window.innerHeight;
    carCTX.save()
    carCTX.translate(0,-car.y+ carCanvas.height*0.7);
    road.draw(carCTX);


    car.draw(carCTX);
    requestAnimationFrame(animate);
}


