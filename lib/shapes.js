


class shape {

    constructor() {
        this.color = "";

    }

    setColor(color){
        this.color = (color);
    }
}


class Circle extends shape {
    constructor(radius) {
        super();
        this.type = 'circle';
        this.radius = radius;
    }

    /*  Render method for Circle here */
    render() {
        return `<circle cx="150" cy="110" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Triangle extends shape {
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

class Square extends shape {
    constructor(sideLength) {
        super();
        this.type = 'square';
        this.sideLength = sideLength;
    }

    /*  Render method for Square here */
    render() {

        

        return `<rect x="50" y="20" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };