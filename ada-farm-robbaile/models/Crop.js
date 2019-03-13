class Crop {
    constructor(type, field, x, y) {
        this._type = type
        // Get the image based on the name of the field
        this._health = 0
        this._field = field
        this._x = x
        this._y = y
        this._birthstamp = millis() / 1000
        this._width = 1
        this._height = 1
        this._healthySize = 30

        // Draw the crop when it's created
        this.draw()
    }

    getAge() {
        // return the amount of time it's been alive
        return millis() / 1000 - this._birthstamp
    }

    draw() {
        // set a width for the image based on its age
        if (this.getAge() < this._healthySize ) {
            var width = this._width * this.getAge()
            var height = this._height * this.getAge()
        } else {
            var width = 30;
            var height = 30;
        }
 
        image(
            this._image,
            this._x,
            this._y,
            width,
            height
        )
    }
}

module.exports = Crop;