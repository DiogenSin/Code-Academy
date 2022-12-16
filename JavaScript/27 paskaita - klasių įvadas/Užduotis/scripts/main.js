//              1            

class Car{
    constructor(name, year){
        this.name = name,
        this.year = year
        this.helloCar = 'Labas! Tai mano mašina ' + this.name + '. Ji buvo pagaminta ' + this.year + ' metais.'
    }

    age(){
        let dabartiniaiMetai = new Date()
        dabartiniaiMetai = dabartiniaiMetai.getFullYear()
        return dabartiniaiMetai - this.year
    }
    }

const cars = [
    new Car('Volvo', 1993),
    new Car('Audi', 2002),
    new Car('Merzedes', 1998),
    new Car('Toyota', 1995)
]

console.log(cars[1].helloCar, cars[0].age())

//              2            

class Rectangle{
    constructor(width, height){
    this.width = width,
    this.height = height
    this.color = '#' + Math.floor(Math.random()*16777215).toString(16)
    }
    area(){
        return (this.width*this.height)
    }
    perimeter(){
        return (this.width*2+this.height*2)
    }
}

const rectangles = [
    new Rectangle(2,2),
    new Rectangle(3,3),
    new Rectangle(5,4),
    new Rectangle(6,10)
]

console.log(rectangles[0])
console.log(rectangles[1].area() + ' area')
console.log(rectangles[2].perimeter() + ' perimeter')

//              3            

class Point{
    constructor(x, y){
        this.x = x,
        this.y = y
    }
    coordinates(){
        return this.x + ':' + this.y
    }
    distance(){
    
        return Math.hypot(this.x, this.y) // reikia atstumo tarp dviejų taškų
    }
}

const points = [
    new Point(3,4),
    new Point(5,12),
    new Point(3,4,5)
]

console.log(points)
console.log(points[0].coordinates() + ' :koordinatės')
console.log(points[1].distance() + ' :atstumas tarp 2 taškų')
console.log(points[2].distance() + ' :atstumas tarp 3 taškų')

//              4            

class Rectangle_3D{
    constructor(width, height, depth){
        this.width = width,
        this.height = height,
        this.depth = depth
    }
    volume(){
        return this.width*this.height*this.depth
    }
    surfaceArea(){
        return 2*(this.height*this.width + this.height*this.depth + this.width*this.depth)
        // return 2*((this.height*this.width)+(this.height*this.depth)+(this.whidth*this.depth))
    }
    perimeter(){
        return 4*(this.height+this.width+this.depth)
    }
}

const Rectangles_3D = [
    new Rectangle_3D(1,2,3),
    new Rectangle_3D(2,2,2),
    new Rectangle_3D(2,5,2),
    new Rectangle_3D(5,6,10)
]

console.log(Rectangles_3D[0])
console.log(Rectangles_3D[1].volume() + ' : tūris')
console.log(Rectangles_3D[2].surfaceArea() + ' : pavirščiaus plotas')
console.log(Rectangles_3D[3].perimeter() + ' : perimetras')


//              5       

let body = document.querySelector('body')
let main = document.createElement('main')
let UI = document.createElement('section')
let ControlPanel = document.createElement('div')

let ControlPanelTitle = document.createElement('h1')
let text = document.createTextNode('Geometrija paprastai')
ControlPanelTitle.append(text)
let ControlPanelDescription = document.createElement('p')
text = document.createTextNode('Kurkite geometrines figūras naudodamiesi žemiau pateiktais nustatymais.')
ControlPanelDescription.append(text)
let divider = document.createElement('hr')

let canvas = document.createElement('canvas')


UI.append(ControlPanel)
UI.append(canvas)
main.append(UI)
body.append(main)

function kvadratas(width, height){

    if (canvas.getContext){
        const context = canvas.getContext('2d');
    
        context.fillStyle = "rgb(200, 0, 0)";
        context.fillRect(100, 50, width, height);

    } else {}
    

}




console.log(kvadratas(150, 50))


