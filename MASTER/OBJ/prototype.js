class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
        this.area = function () {
            return Math.PI * this.radius * this.radius;
        };
    }
}

let c1 = new Circle({ x: 0, y: 0 }, 2.0);
let c2 = new Circle({ x: 0, y: 1 }, 4.0);
let c3 = new Circle({ x: 1, y: 0 }, 6.0);

//console.log(c1.area(), c2.area(), c3.area());

class F { }
console.log(F.prototype);
F.prototype.prop = "value";
console.log(F.prototype.prop);

let obj = new F();
console.log(obj.prop);

obj.prop = "another value";
console.log(obj.prop);
console.log(F.prototype.prop);
