// javascript 
const listA = [1, 2, 3, 5, 6, 8, 9]; 
const listB = [3, 2, 1, 5, 6, 0]; 
const duplicateList = listA.filter(item => listB.includes(item)); 


console.log("List A:", listA); 
console.log("List B:", listB); 
console.log("Duplicate Items:", duplicateList); 

