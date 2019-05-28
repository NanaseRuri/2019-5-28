function main(a) {
    var totalPrice = 6;
    var distance=a.distance;
    var parkTime=a.parkTime;

    if (distance>2&&distance<8) {
        totalPrice=totalPrice+(distance-2)*0.8;
    }
    if(distance>8){
        totalPrice+=6*0.8;
        totalPrice=totalPrice+(distance-8)*0.8*1.5;
    }

    totalPrice = totalPrice+ parkTime * 0.25;

    return Math.round(totalPrice);
};

console.log(main({distance:1,parkTime:5}));