// Expected Output  08 05 2019
// but be default format is 8 5 2019

// first create instance of Date Object
const date = new Date();

// store current date & month in to local variables
let formatDate = (date.getDate()-3);
let formatedMonth = (date.getMonth()-5);

// passed a conditon to rendering expected output
if(formatDate <= 9 && formatedMonth <= 9) 
console.log(`${'0'+formatDate} ${'0'+formatedMonth} ${date.getFullYear()}`)

else 
console.log(`${formatDate} ${(date.getMonth())} ${date.getFullYear()}`)
