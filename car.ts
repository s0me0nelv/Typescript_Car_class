enum Brand {
    BMW = 'BMW',
    Volvo = 'Volvo',
    Kia = 'Kia'
}

enum Color {
    red = 'red',
    blue = 'blue',
    green = 'green',
    yellow = 'yello',
    white = 'white',
    black = 'black'
}

class Car {
    carNumber: string;
    brand: Brand;
    model: string;
    color: Color | string;
    maxSpeed: number;
    speed?: number;


    constructor(carNumber: string,
                brand: Brand,
                model: string,
                color: Color | string,
                maxSpeed: number) {
        this.carNumber = carNumber;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }



    move(speed: number) {
        this.speed = speed
        if(speed <= this.maxSpeed)
            console.log('Current speed is ' + speed + 'km/h')
        else console.log('Speed is more than 160km/h')
    }


    repaint(color: Color | string) {
        this.color = color
    }
}

class RaceCar extends Car{
    team: string = 'Red Bull'

    displayInfo() {
        console.log('Car Number: ' + this.carNumber, 'Car brand: ' + this.brand, 'Car model: ' + this.model, 'Car color: ' + this.color, 'Max speed: ' + this.maxSpeed, 'Team: ' + this.team);
    }
}


const firstCar = new RaceCar('AA 1234', Brand.BMW, 'A6',  Color.yellow, 160);

firstCar.move(162);
firstCar.repaint(Color.red);
firstCar.displayInfo();