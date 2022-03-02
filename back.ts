/*
 * This is a program that calculates mean, median and mode
 * after reading in a text file into an array.
 * 
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */

// Typescript Statistics program

var fs = require('fs');
fs.readFile("temp.txt", function(err:any, buf:any) {
  console.log(buf);
});

function mean(arrayOfIntegers: any) {
    let size: number = arrayOfIntegers.length
    var  total = 0
    for (let singleElementinArray in arrayOfIntegers) {
        total += parseFloat(singleElementinArray)
    }
    let meanValue: number = (total/size)
    return meanValue
}
function median(arrayOfIntegers: any) {
    var returnValue: number
    var array = arrayOfIntegers
    array.sort()
    let numberOfNumbers = array.length
    if (numberOfNumbers % 2 == 0){
        let numberOfMedian1 = (numberOfNumbers/2) - 1
        let median1:number = array[numberOfMedian1]
        let numberOfMedian2 = (numberOfNumbers/2)
        let median2: number = array[numberOfMedian2]
        returnValue = (median1+median2) / 2
    } else {
        let numberOfMedian = (numberOfNumbers / 2) + 0.5
        returnValue = (array[numberOfMedian])
    }
        return returnValue
}

console.log('\nCalculating stats...')
