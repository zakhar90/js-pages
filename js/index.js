// function add(a) {
//     let result = Math.sqrt(a);
//     return result;
// }

// let a = 64;
// let x = add(a);
// document.write(x);    



// function add(a, b) {
//     let result = Math.sqrt(b / a);
//     return result;
// }

// let a = 4;
// let b = 16;
// let x = add(a, b);
// document.write(x);



// A = 1 B = 2 C = 1    X1= -1



function calcDiscr(a, b, c) {
    return b * b - 4 * a * c;
}

function solveQuadratic(a, b, c) {
    let x1, x2;
    let discr = calcDiscr(a, b, c);
    if (discr < 0) {
        return 'No roots';
    }  else if (discr > 0) {
        x1 = (-b + Math.sqrt(discr)) / (2 * a);
        x2 = (-b - Math.sqrt(discr)) / (2 * a);
    return 'x1 = ' + x1 + ', x2= ' + x2;
    } else if (discr === 0) {
        x1 = -b / (2 * a);
    return 'x1 = ' + x1;
    }
}

var a = parseFloat(prompt('Enter A'));
var b = parseFloat(prompt('Enter B'));
var c = parseFloat(prompt('Enter C'));

var result = solveQuadratic(a, b, c);

document.write(result);




// A = -2 B = 3 C = 2    X1= -0.5   X2= 2



// function calcDiscr(a, b, c) {
//     return b * b - 4 * a * c;
// }

// function solveQuadratic(a, b, c) {
//     let x1, x2;
//     let discr = calcDiscr(a, b, c);
//     if (discr < 0) {
//         return 'No roots';
//     }  else if (discr > 0) {
//         x1 = (-b + Math.sqrt(discr)) / (2 * a);
//         x2 = (-b - Math.sqrt(discr)) / (2 * a);
//     }
    
//     return 'x1 = ' + x1 + ', x2= ' + x2;
// }

// var a = parseFloat(prompt('Enter A'));
// var b = parseFloat(prompt('Enter B'));
// var c = parseFloat(prompt('Enter C'));

// var result = solveQuadratic(a, b, c);

// document.write(result);