const shapes = require('./shapes.js');
const Triangle = shapes.Triangle;
const Square = shapes.Square;
const Circle = shapes.Circle;

describe('Triangle', () => {
    describe('render', () => {
        it('should output an SVG string using the color provided', () => {
            const shape = new Triangle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<polygon points="150, 10 260, 180 40, 180" fill="red" />');
        });
    });
});
describe('Square', () => {
    describe('render', () => {
        it('should output an SVG string using the color provided', () => {
            const shape = new Square();
            shape.setColor("red");
            expect(shape.render()).toEqual('<polygon points="50, 20 250, 20 250, 180 50, 180" fill="red" />');
        });
    });
});
describe('Circle', () => {
    describe('render', () => {
        it('should output an SVG string using the color provided', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="150" cy= "100" r="100" fill="red" />');
        });
    });
});