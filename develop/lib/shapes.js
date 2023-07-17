class Shape {
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape{
    render() {
        return(`<polygon points="150, 50 244, 200 56, 200" fill="${this.color}" />`);
    }
}

class Square extends Shape{
    render() {
        return(`<polygon points="50, 50 250, 50 250, 250 50, 250" fill="${this.color}" />`);
    }
}

class Circle extends Shape{
    render() {
        return(`<circle cx="150" cy= "150" r="100" fill="${this.color}" />`);
    }
}

module.exports = {Triangle, Square, Circle};