const text=document.getElementById("quote");
const author =document.getElementById("author");
const year= document.getElementById("year");
const btn=document.getElementsByTagName("button");
const button = document.querySelector('button');
const bg =document.querySelector('div');
const quoteObj=[
    {
        quote: "When male authors write love stories, the heroine tends to end up dead.",
        author: "Susan Elizabeth Phillips",
        year:"1996",
    },
    {
        quote:"A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.",
        author:"G.K. Chesterton",
        year:"1988",
    },
    {
        quote :"I've got the key to my castle in the air, but whether I can unlock the door remains to be seen.",
        author:"Louisa May Alcott",
        year:"1889",
    },
    {
        quote:"A story is a letter that the author writes to himself, to tell himself things that he would be unable to discover otherwise.",
        author:"Carlos Ruiz Zafón, The Shadow of the Wind",
        year:"1784",
    },
    {
        quote:"Authors like cats because they are such quiet, lovable, wise creatures, and cats like authors for the same reasons.",
        author:"Robertson Davies",
        year:"1884",
    },
    {
        quote:"Quiet people have the loudest minds.",
        author:"Stephen King",
        year:"1777",
    },
    {
        quote:"Which is the true nightmare, the horrific dream that you have in your sleep or the dissatisfied reality that awaits you when you awake?",
        author:"Justin Alcala",
        year:"1674",
    },
    {
        quote:"Some stories have to be written because no one would believe the absurdity of it all.",
        author:"Shannon L. Alder",
        year:"1999"
    },
    {
        quote:"What I like in a good author is not what he says, but what he whispers",
        author:"Logan Pearsall Smith",
        year:"1887",
    },
    {
        quote:"The most intriguing people you will encounter in this life are the people who had insights about you, that you didn't know about yourself",
        author:"Shannon L. Alder",
        year:"1976",
    },
];


function getRandomQuote () {
   const rand=Math.floor(Math.random()*10);
   const quote=quoteObj[rand];
//    console.log(rand,quote);
   return quote;
}

function setText(randQuote){
    text.innerText=randQuote.quote;
    author.innerText=randQuote.author;
    year.innerText=randQuote.year;
}

window.addEventListener("load",function(load){
  const randQuote=getRandomQuote();
setText(randQuote);

  console.log(randQuote);
})

// btn.addEventListener('click',function(event){
    // })
    
    document.getElementById("button").addEventListener("click", function(event) {
        // document.getElementById("demo").innerHTML = "Hello World";
      
            event.preventDefault();
            const randQuote=getRandomQuote();

        
            setText(randQuote);
  });

button.addEventListener('click',()=>{
    let color ='#';
    color += Math.random().toString(16).slice(2,8);
    bg.style.backgroundColor = color;
    console.log(color);
})