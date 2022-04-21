function myFunction(){
    const protagonists = ["Devlin", "stan lee", "AJ", "peter griffin","homer simpson", "kaneki", "eren", "mikasa", "armin", "goku", "luffy", "naruto", "levi", "sasuke", "sakura", "gon"]
   
    const titles = [" the best! ", " most likely has da cheese touch ",  " is an under cover squirrel ", " a shifter ", " a master of the blade ", " a ghoul" , " is gay"]

    const sentences = [" wants to fight ", " but dislikes you ", " has a gun", " but oh no....our table... its broken", "steals fetus from the abortion clinic", "cooks meth", "smokes crack", "has a severe problem with gambling his kids away", " assualts women in his spare time"]
    
const paragraphs = [" and this person is a highly dangerous criminal", " and if you see this person run away"," and they like toes", " and they are a crafter", " and a gun...", " wait....AYO watch yo jet", " and wears a latex suit and rides a bike in it", " and also makes among us jokes at funerals "
]
var paragraph = Math.floor(Math.random() * paragraphs.length);
    var protagonist = Math.floor(Math.random() * protagonists.length );
    var title = Math.floor(Math.random() * titles.length );
    var sentence = Math.floor(Math.random() * sentences.length );
    let texts = paragraphs[paragraph]
    let words = sentences[sentence]
    let namer = titles[title]
    let goodguy = protagonists[protagonist]
    document.getElementById("demo").innerHTML = goodguy + namer

    document.getElementById("demo2").innerHTML = words

    document.getElementById("demo3").innerHTML = texts

}