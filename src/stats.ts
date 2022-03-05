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
var arrayOfIntegers = fs.readFileSync('./set1.txt').toString().split("\n");

const showarray = (arrayOfIntegers:any) => {
  const mid = Math.floor(arrayOfIntegers.length / 2),
    nums = [...arrayOfIntegers].sort((a, b) => a - b);
  return arrayOfIntegers.length % 2 !== 0 ? nums[mid] : (nums[mid - 2] + nums[mid]) / 2;
};
console.log(showarray([arrayOfIntegers]));
function median(arrayOFIntegers:any){
  if(arrayOfIntegers.length ===0) throw new Error("No inputs");

  arrayOfIntegers.sort(function(a:any,b:any){
    return a-b;
  });

  var half = Math.floor(arrayOfIntegers.length / 2);
  
  if (arrayOfIntegers.length % 2)
    return arrayOfIntegers[half];
  
  return (arrayOfIntegers[half - 1] + arrayOfIntegers[half]) / 2.0;
}


 console.log (" The median is " , median(arrayOfIntegers))
 


