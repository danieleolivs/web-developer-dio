function mapSemThis(arr){
    return arr.map(function(item){
        return item*2
    })
}

const nums = [2,4,5,8,10]

console.log(mapSemThis(nums))