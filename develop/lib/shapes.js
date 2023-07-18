class Shape {
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape{
    render() {
        return(`<polygon points="150, 10 260, 180 40, 180" fill="${this.color}" />`);
    }
}

class Square extends Shape{
    render() {
        return(`<polygon points="50, 20 250, 20 250, 180 50, 180" fill="${this.color}" />`);
    }
}

class Circle extends Shape{
    render() {
        return(`<circle cx="150" cy= "100" r="100" fill="${this.color}" />`);
    }
}

module.exports = {Triangle, Square, Circle};