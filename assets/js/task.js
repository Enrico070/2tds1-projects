// alert("verde  18af4d 1ac54f")

// class Task {
//     constructor(id, title, status) {
//         this.id = id;
//         this.title = title;
//         this.status = status;
//     }
//     tasks = [];
//     showTasks() {
//     let inputTasks = document.getElementById("inputTasks").value;
//     tasks.push(inputTasks)
//     console.log(tasks)
// }
// } 


// const names = ["Whinds", "Freeway", "Teste", "Maria"];

// names.forEach((name)=>{
//     console.log(`Hi, ${name}!`);
// })


// const numbers = [1,2,3,4,5,6,7,8,9,10];

// console.log(numbers);

// numbers.forEach((number, index)=>{
//     if(number%2 == 0){
//         console.log(`O número ${number} está na posição ${index}`);
//     }
// });


class ListCars{
    constructor(){
        this.cars = []
}
addCar(car){
    this.cars.push(car)
}
}

const carsList = new ListCars() 

class Car{
    constructor(modelo , marca){
        this.modelo = modelo;
        this.marca = marca;
    }
}

function car(){
    const marca = document.getElementById("brand").value;
    const modelo = document.getElementById("model").value;

    const carro = new Car(modelo , marca)

    carsList.addCar(carro)
    console.log(carsList);
}
