// This is the link to this JavaScript challenge in codewars.com
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

function reverseLetter(str) {
str = str.toLowerCase()
strlength = str.length

arr = []

// Here, we use the for loop to iterate through each element in reverse by initializing the index to be the last element working backwards then also setting up the if condition that if an element can be converted to an uppercase, then it is an alphabet and we push it to the array arr
for(i=strlength-1; i>=0; i--){
    if(str[i].toUpperCase() != str[i])
    arr.push(str[i])
}
    // Here we convert the array arr to a string and replace all the commas with a single space and output the result
    arrstring = arr.toString()
    const result = arrstring.replace(/,/g, '');
    console.log(result)
}
reverseLetter('krishan')
console.log('==========')
reverseLetter('ultr53o?n')
console.log('==========')
reverseLetter('n1a$s%ab3A+y^a*ba[san')
console.log('==========')
reverseLetter('Dleihseyelrac21')