const shapes = require('./shapes.js');
const Triangle = shapes.Triangle;
const Square = shapes.Square;
const Circle = shapes.Circle;

describe('Triangle', () => {
    describe('render', () => {
        it('should output an SVG string using the color provided', () => {
            const shape = new Triangle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<polygon points="150, 50 244, 200 56, 200" fill="red" />');
        });
    });
});
describe('Square', () => {
    describe('render', () => {
        it('should output an SVG string using the color provided', () => {
            const shape = new Square();
            shape.setColor("red");
            expect(shape.render()).toEqual('<polygon points="50, 50 250, 50 250, 250 50, 250" fill="red" />');
        });
    });
});
describe('Circle', () => {
    describe('render', () => {
        it('should output an SVG string using the color provided', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="150" cy= "150" r="100" fill="red" />');
        });
    });
});