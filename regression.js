var data = Array.from({ length: 20 }, function () { return ({
    x: parseFloat((Math.random() * 100).toFixed(2)),
    y: parseFloat((Math.random() * 100).toFixed(2)),
}); });
console.log("les donnes des points :", data);
function regression(points) {
    var n = points.length;
    var sommeX = points.reduce(function (total, point) { return total + point.x; }, 0);
    var sommeY = points.reduce(function (total, point) { return total + point.y; }, 0);
    var sommeXY = points.reduce(function (total, point) { return total + point.x * point.y; }, 0);
    var sommeX2 = points.reduce(function (total, point) { return total + point.x * point.x; }, 0);
    var a = (n * sommeXY - sommeX * sommeY) / (n * sommeX2 - sommeX * sommeX);
    var b = (sommeY - a * sommeX) / n;
    return { a: parseFloat(a.toFixed(4)), b: parseFloat(b.toFixed(4)) };
}
var result = regression(data);
console.log("les coefficients de regression :", result);
