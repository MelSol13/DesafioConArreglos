//Siempre Hambriento

function siempreHambriento(arr) {
    // tu código aquí
    var cuentaComida = 0;
    for(var i=0; i<arr.length; i++){
    if(arr[i]== "comida"){
        console.log("delicioso")
        cuentaComida++;
    }
}
if(cuentaComida == 0){
    console.log("Tengo Hambre")
}

}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

//Filtro paso alto

function highPass(arr, cutoff) {
    var filteredArr = [];
    // tu código aquí
    for(var i=0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

//Mejor que el promedio

function betterThanAverage(arr) {
    var sum = 0;
    // calcula el promedio
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }

    var avg = sum / arr.length;
    var count = 0
    // cuenta cuántas variables son mayores que el promedio
    for(var i=0; i<arr.length; i++){
        if(arr[i]> avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

//Arreglo invertido

function reverse(arr) {
    // tu código aquí
    var left = 0;
    var right= arr.length -1;
    while(left<right){
        var temp= arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

//Arreglo de Fibonacci

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    while(fibArr.length < n){
        var prev = fibArr[fibArr.length-1];
        var prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
