function conversionCelsius(f) {

    return(5/9) * (f-32);

}

var f = 54
var x = conversionCelsius(f)
console.log(x)

var f = 90
var x = conversionCelsius(f)
console.log(x)

var f = 9
var x = conversionCelsius(f)
console.log(x)


function conversionMeters(m) {

    return(m / 0.0254)
}
var m = 5
var i = conversionMeters(m)
console.log(i)

var m = 8
var i = conversionMeters(m)
console.log(i)

var m = 67
var i = conversionMeters(m)
console.log(i)