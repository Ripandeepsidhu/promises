const fetchAdviceById = (id) => {
    fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((response)=>{
        if(!response.ok){
            throw new Error ("Network response was not ok");
        }
        return response.json();
    })
    .then((data)=>{
        const advice = data.slip.advice;
        console.log(`Advice(ID: ${id}): ${advice}`)
    })
}
function rollDice() {
    return new Promise ((resolve,reject )=> {
        const diceValue = Math.floor(Math.random()*6)+1;
        console.log(`You rolled: ${diceValue}`)
if(diceValue>=3){
    fetchAdviceById(diceValue)
    resolve('You win')
    
} else{
    reject('You lose')
}
})
}

rollDice()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})


