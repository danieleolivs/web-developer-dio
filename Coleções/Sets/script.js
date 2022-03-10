const meuArray = [30, 30, 40, 5, 223, 2049, 3334, 6]

function valoresUnicos(arr){
    const mySet = new Set(arr)

    return [...mySet];
}

console.log(valoresUnicos(meuArray))