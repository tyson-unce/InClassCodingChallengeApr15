let userChoice = prompt("Please type '1' or '2' for the following: 1)Deposit Money. 2)Withdraw Money.")



if (userChoice === "1")
{
    userDecision = prompt('How much would you like to deposit?')

    let userBalance = Number(9800)
    
    alert(Number(userDecision)+Number(userBalance))
    
    if (userBalance > Number(0))
    {
        alert("You got monnneeeyy!!")
    }
    else{
        alert("Low Funds")
    }
}
else if (userChoice === "2")
{
    userDecision = prompt("How much would you like to withdraw?")

    let userBalance = Number(9800)

    alert(Number(userBalance)-Number(userDecision))
    
    if (userBalance > Number(0))
    {
        alert("You got monnneeeyy!!")
    }
    if (userBalance <= 0)
        {
            alert("Low Funds")
        }
    else{
        alert("INVALID BALANCE")
    }
    
}
else{
    alert("INVALID INPUT: PLEASE REFRESH PAGE AND CHOOSE EITHER 1 OR 2")
}
