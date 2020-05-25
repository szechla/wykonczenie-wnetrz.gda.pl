const targets = navbarElements

//CHANGING TWO WORDS STRINGS INTO ONEWORD STRING FOR MARIUSZM PAGE 
for (i=0; i<targets.length; i++){
    targets[i] = targets[i].replace(/\s/g, '');
}

targets.unshift("header")

$(".nav-link").each(function( index ) {
    $(this).attr("href", `#${targets[index]}`)}
)

//Fixing navigation
$("body").append(`<div id="navbarTargets"></div>`);

function checkTargetsPosition() {
    $("#navbarTargets").html("")
    for (i = 0; i < targets.length; i++) {
        let navbarHeight = $("nav").outerHeight();
        $("#header").css("margin-top", navbarHeight)
            //Make navbar targets - virtual divs
        $("#navbarTargets").append(`<div id="${targets[i]}" class="navbarTarget"></div>`)
            //Set targets positions
        if(i === 0){
            var tempTarget = $("#header")[0]
        }
        else{
            var tempTarget = $(".navbarTarget")[i]
        }
        let tempPrevElement = $("#main-content").children()[i-2];
        if (i === 0) {
            //for header
            $(tempTarget).css("top", "-60px")
        } 
        else if (i === 1) {
            //for div under fixed header
            $(tempTarget).css("top", `${$(window).height() + $(".materials").outerHeight()}px`)
        }
        else {
            //Find height and position of previous element
            let prevTargetHeight = $(tempPrevElement).outerHeight();
            let prevTargetPosition = parseFloat($(tempTarget).prev().css("top"));
            //Setting new position
            $(tempTarget).css("top", prevTargetHeight + prevTargetPosition)
        }
    }
}

$(".navbarTarget").css("position", "absolute")
checkTargetsPosition()

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        checkTargetsPosition();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });

    });
});
