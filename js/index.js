var quotes =[
    {name:"Life isn't about finding yourself,Life is about creating yourself" ,author: "― Donna Tartt"},
    {name:"One good thing about music, when it hits you, you feel no pain." ,author: "― Colleen Hoover"},
    {name:"Sometimes it takes a good fall to really know where you stand" ,author: "― Johnny Depp"},
    {name:"Push yourself. Don't Settle. Just live well. Just LIVE" ,author: "― Suzanne Collin"},
    {name:"That which you believe becomes your world." ,author: "― Rachel Carson"},
    {name:"When you read a book, you hold another's mind in your hands" ,author: "― Caroline Gordon"},
    {name:"It is better to offer no excuse than a bad one" ,author: "― Jack London"},
    {name:"No one is useless in this world who lightens the burdens of another" ,author: "― Will Rogers"},
    {name:"Life is really simple, but we insist on making it complicated" ,author: "― Albert Camus"},
    {name:"You can't wait for inspiration. You have to go after it with a club" ,author: "― Taylor Swift"}
]

function GetQuotes() {  
    var randomQuotes = Math.floor(Math.random()*quotes.length);
    document.getElementById("name").innerHTML=quotes[randomQuotes].name;
    document.getElementById("author").innerHTML=quotes[randomQuotes].author;

}




