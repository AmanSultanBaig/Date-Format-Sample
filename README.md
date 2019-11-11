# Date-Format-Sample
Date formatted issue resolved 

### Create Date instance

###### ```ruby const date = new Date()```

### store current date & month in to local variables

###### `let formatDate = date.getDate();`
###### `let formatedMonth = date.getMonth();`

###  passed a conditon to rendering expected output

###### `if(formatDate <= 9 && formatedMonth <= 9)`
###### `console.log(`${'0'+formatDate} ${'0'+formatedMonth} ${date.getFullYear()}`)`
###### `else`
###### `console.log(`${formatDate} ${(date.getMonth())} ${date.getFullYear()}`)`
