// // Code your solutions in this file
// for(let age = 30;age<40;age++){
// console.log(`I'm ${age} years old,Happy birthday to me `);

// // }

let arrays=[]
function writeCards(name,event){
    
    for(let i = 0;i< name.length;i++){
arrays.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)

    }
    return arrays
}
//let names=["Guadalupe", "Ollie", "Aki"]
//writeCards("names","surprise")
//writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number){
while(number >=0){
    console.log (number);
number--
}

}
countDown(10)