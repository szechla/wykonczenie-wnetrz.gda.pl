const headerTexts = ["Kompleksowe wykończenie mieszkań i domów", "Ponad 7 lat doświadczenia", "Remonty łazienek", "Montaż sufitów podwieszanych z oświetleniem LED"]
var counter = 0
const partners = [{name: "hossa"}, {name: "eurostyl"}, {name: "hydraulik"}]

// ** HEADER TEXT ANIMATION
// Generate random number
function randomNumber(){
    return (Math.floor(Math.random()*100)-1);
}

setInterval(function(){
    $("#headerText").fadeOut(800, function() {
        $(this).css("color", `#09${randomNumber()}${randomNumber()}`)
        $(this).text(`${headerTexts[counter]}`).delay(1000).fadeIn(800)
    })
    counter += 1     
    if(counter >= headerTexts.length){ 
    counter = 0
    }
},3600)

//PUT URL TO IMAGES FOR MATERIALS and PARTNERS

$(partners).each(function(){
    this.img = `${this.name}.png`
})


//PARTNERS CONTENT
$(".partners").append(`<div class="partners-images"><h5>Współpracujemy między innymi z:</h5></div>`)
$(partners).each(function(){
    $(".partners-images").append(`<img class="partners-img" src="/images/partners/${this.img}"></img>`)
})




