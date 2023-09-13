


class shape {

    constructor() {
        this.color = "";

    }

    setColor(color){
        this.color = (color);
    }
}


class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = 'circle';
        this.radius = radius;
    }

    /*  Render method for Circle here */
    render() {
        return `<circle cx="25" cy="75" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.type = 'triangle';
        this.base = base;
        this.height = height;
    }

    /*  Render method for Triangle here */
    render() {
        return `<polygon points="150,20 ${150 + this.base},175 ${150 - this.base},175" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.type = 'square';
        this.sideLength = sideLength;
    }

    /*  Render method for Square here */
    render() {
        return `<rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };