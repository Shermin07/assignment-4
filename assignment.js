//radianToDegree//

function radianToDegree(radians){
    const degree = radians / 0.0174532925;
    return degree;
}
const result = radianToDegree(10)
console.log(result.toFixed(2));
const result2 = radianToDegree(25)
console.log(result2.toFixed(2));
const result3 = radianToDegree(199)
console.log(result3.toFixed(2));

//isJavaScriptFile//

function isJavaScriptFile(filesName){
    let file  = filesName.split('.').pop();
    if( file === 'js') {
        return true;

    }
    else{
        return false
    }
    
}
const result4 = isJavaScriptFile("app.js");
console.log(result4);
const result5 = isJavaScriptFile("js.png");
console.log(result5);
const result6 = isJavaScriptFile("image.js.png");
console.log(result6);

// oil price //
function oilPrice (digelQuantity, petrolQuatity, octenQuantity){
    const perDigelPrice = 114;
    const perPetrolPrice = 130;
    const perOctenPrice = 135;
    
    const digelPrice = perDigelPrice * digelQuantity;
     const petrolPrice = perPetrolPrice *   petrolQuatity;
     const octenPrice = perOctenPrice * octenQuantity;

     const totalPrice = digelPrice +  petrolPrice + octenPrice;
     return totalPrice;
}

const totalPrice1 = oilPrice (1, 1, 1 );
console.log(totalPrice1);
const totalPrice2 = oilPrice (30, 20, 10 );
console.log(totalPrice2);
const totalPrice3 = oilPrice (1, 0, 2 );
console.log(totalPrice3);

