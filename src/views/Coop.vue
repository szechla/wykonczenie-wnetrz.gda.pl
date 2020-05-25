<template>
    <div>
        <Header/>
        <div class="main-content text-center">
            <Cooperation/>
        </div>
        <div class="spaceBar"></div>
        <!-- <div class="bg-second-image"></div>
        <div class="spaceBar"> </div>
        <div class="partners bg-white"> </div> -->
        <Footer/>
    </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Cooperation from "@/components/Cooperation.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'coop',
    components: {
        Header,
        Cooperation,
        Footer
    }
}
</script>