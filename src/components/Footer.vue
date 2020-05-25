<template>
    <div id="footer">
        <div class="footer bg-dark text-light text-center row mx-0 py-2">
            <div class="footer-contact col-3">
                <h1 class="text-light pt-5 font-weight-bold">Kontakt </h1>      
                <!-- <h4 class="text-primary pt-5">Dane:</h4> -->
                <p class="my-1 hide-on-phone">Mariusz Mioduszewski</p>
                <p class="my-1 hide-on-phone">ul. Żeliwna 55, 81-159 Gdynia</p>
                <p class="my-1 hide-on-phone">NIP:</p>
            </div>
            <div class="footer-contact col-4">
                <h2 class="text-primary pt-5 font-weight-bold">Telefon:</h2>
                <h3 class="text-light">784-567-628</h3>
            </div>
            <div class="footer-contact col-4">
                <h2 class="text-primary pt-5 font-weight-bold">Mail:</h2>
                <h3 class="text-light"> 
                        <a class="text-light font-weight-normal" href="mailto:biuro@wykonczenie-wnetrz.gda.pl">biuro@wykonczenie-wnetrz.gda.pl</a>
                    </h3>
            </div>
        </div>
        <div class="materials text-center py-4 bg-footer text-light hide-on-phone">
            <div class="materials-images pt-3 mt-4"><h5>Najlepszą jakość gwarantują stosowane materiały:</h5></div>
            <img v-for="material in materials" class="materials-img" :src="`/images/materials/` + material.name + `.png`" :key="material.id">
        </div>        
    </div>
</template>
<script>
export default {
    'name': 'Footer',
    data: function(){
        return{
            materials: [{name: "dre"}, {name: "flugger"}, {name: "grohe"}, {name: "interdoor"}, {name: "mapei"}, {name: "quickstep"}, {name: "roca"}, {name: "sigma"}, {name: "weber"}]
        }
    }
}

//MATERIALS CONTENT

// $(".materials").append(`<div class="materials-images mt-4"><h5>Najlepszą jakość gwarantują stosowane materiały:</h5></div>`)
// $(materials).each(function(){
//     $(".materials-images").append(`<img class="materials-img" src="/images/materials/${this.img}"></img>`)
// })
// $(materials).each(function(){
//     this.img = `${this.name}.png`
// })

</script>