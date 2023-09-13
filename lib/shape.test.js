const { Circle, Triangle, Square } = require('./shapes.js');

// A testing suite for shapes is created.
describe('Shapes', () => {
    // Test to check that the Circle is being rendered properly.
    describe('circle', () => {
        it('should set the color of the circle to the given shape color', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="red" />');
        });
    });

    // Test to check that the Triangle is being rendered properly.
    describe('triangle', () => {
        it('should set the color of the triangle to the given shape color', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150,20 250,175 50,175" fill="blue" />');
        });
    });

    // Test to check that the Square is being rendered properly.
    describe('square', () => {
        it('should set the color of the square to the given shape color', () => {
            const shape = new Square();
            shape.setColor("orange");
            expect(shape.render()).toEqual('<rect x="50" y="20" width="200" height="200" fill="orange" />');
        });
    });
});
