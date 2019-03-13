class Pumpkin extends Crop {
    constructor(x, y) {
        super(x, y, type = "pumpkin", field = "Pumpkin field");
        this._image = loadImage('./images/'+type.toLowerCase()+'.png');
    };
};
