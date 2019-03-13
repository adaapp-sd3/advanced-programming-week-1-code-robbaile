class Wheat extends Crop {
    constructor(x, y) {
        super(x, y, type = "wheat", field = "Wheat field");
        this._image = loadImage('./images/'+type.toLowerCase()+'.png');
    };
};
