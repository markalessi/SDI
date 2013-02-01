var response = parseInt(prompt("Guess what number I'm thinking of (between 1 and 100)"));
var answer = 77;

if (response == answer)
{
alert("Oh my! You got it! You win!")
}
else if (Math.abs(answer - response) == 3)
{
alert("You're red hot!")
}
else if (Math.abs(answer - response) <= 4)
{
alert("You're getting warm.")
}
else if (Math.abs(answer - response) <= 10)
{
alert("You're getting cold.")
}
else if (Math.abs(answer - response) <= 20)
{
alert("You're ice cold.")
}