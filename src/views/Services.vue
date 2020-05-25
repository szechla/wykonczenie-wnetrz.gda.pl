<template>
    <div>
        <Header/>
        <div class="main-content text-center bg-white-85">
            <div class="container py-4">         
                <h2 class="pb-3">Co oferujemy ?</h2>
                <h5>Jesteśmy firmą zajmującą się wykończeniem wnętrz, a naszą specjalizacją jest kafelkowanie oraz szpachlowanie i malowanie ścian. Mamy duże doświadczenie w montażu drzwi, podłóg oraz armatury łazienkowej.</h5
                ><h5>Jesteśmy w stanie przerobić instalację hydrauliczną i elektryczną według Państwa potrzeb.</h5>
                <h5>Wychodząc na przeciw Państwa potrzebom współpracujemy z architektami wnętrz i stolarzami, dzięki czemu jesteśmy w stanie zapewnić Państwu indywidualnie dobrany projekt mieszkania i kuchni.</h5>
                <h3 class="text-second pt-3 font-weight-bold">Przykładowe usługi, które oferujemy:</h3>
                <div class="row">
                    <div class="col-2 serviceCard" v-for="service in services" :key="service.id">
                        <h5 class="text-dark font-weight-bold service-text">{{ service }}</h5>
                        <img class="service-img d-inline" :src="`/images/services/`+ service + `.png`">
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>   
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


export default {
    name: 'services',
    components: {
        Header,
        Footer
    },
    data: function(){
        return{
            services: servicesList
        }
    },
    mounted() {
        // Hover effect on service cards
        $(".service-img").hover(function(){
            $(this).prev().css("opacity", "0");
            $(this).css("opacity", "1");
        }, 
            function(){
                $(this).prev().css("opacity", "1");
                $(this).css("opacity", "0.2");
            })
    }
}
</script>