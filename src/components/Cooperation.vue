<template>
    <div class="bg-white-85">
        <div class="py-4 container">
            <h2 class="pb-3">Jak wygląda współpraca ?</h2>
            <p class="w-80">
                Jesteśmy małą lokalną firmą z dużym doświadczeniem w wykańczaniu mieszkań<br/>
                Gwarantujemy wysoką jakość prac i dbałość o szczegóły<br/>
                Współpracujemy z architektem, który pomoże Ci zaprojektować łazienkę i całe mieszkanie<br/>
                Dzięki współpracy z hurtowniami proponujemy pomoc z zamówieniu i dostarczeniu materiałów
            </p>
            <div class="clearfix py-4">
                <div class="col-3 float-left" v-for="step in steps" :key="step.id">
                    <h4 class="text-second">{{ step.id }}</h4>
                    <img class="stepImage" v-bind:src="step.img_url">
                    <h5 class="text-dark font-weight-bold">{{ step.text }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Cooperation',
    data: function(){
        return{
        steps:[{
                "id": 1,
                "text": "Kontakt telefoniczny",
                "img_url": "/images/icons/step1.png"
            },{
                "id": 2,
                "text": "Wycena prac i podpisanie umowy",
                "img_url": "/images/icons/step2.png"
            },{
                "id": 3,
                "text": "Realizacja prac",
                "img_url": "/images/icons/step3.png"
            },{
                "id": 4,
                "text": "Odbiór wykonanych prac",
                "img_url": "/images/icons/step4.png"
            }] 
        }
    }
}
</script>
<style>

</style>