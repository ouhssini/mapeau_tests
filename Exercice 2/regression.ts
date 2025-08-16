type Point = { x: number; y: number };

const data: Point[] = Array.from({ length: 20 }, () => ({
  x: parseFloat((Math.random() * 100).toFixed(2)),
  y: parseFloat((Math.random() * 100).toFixed(2)),
}));

console.log("les donnes des points :", data);

function regression(points: Point[]) {
  const n = points.length;
  const sommeX = points.reduce((total, point) => total + point.x, 0);
  const sommeY = points.reduce((total, point) => total + point.y, 0);
  const sommeXY = points.reduce((total, point) => total + point.x * point.y, 0);
  const sommeX2 = points.reduce((total, point) => total + point.x * point.x, 0);

  const a = (n * sommeXY - sommeX * sommeY) / (n * sommeX2 - sommeX * sommeX);
  const b = (sommeY - a * sommeX) / n;

  return { a: parseFloat(a.toFixed(4)), b: parseFloat(b.toFixed(4)) };
}

const result = regression(data);
console.log("les coefficients de regression :", result);
