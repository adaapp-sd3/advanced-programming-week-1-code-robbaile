class Carrot extends Crop {
    constructor(x, y) {
        super(x, y, type = "carrot", field = "Carrot field");
        this._image = loadImage('./images/'+type.toLowerCase()+'.png');
    };
};

