<template>
    <div>
        <Header/>
        <Portfolio/>
        <Footer/>
    </div>    
</template>
<script>
import Header from '@/components/Header.vue'
import Portfolio from '@/components/Portfolio.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'realisations',
    components: {
        Header,
        Portfolio,
        Footer
    }
}
</script>