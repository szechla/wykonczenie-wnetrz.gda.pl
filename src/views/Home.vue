<template>
  <div>
    <Header/>
    <div class="header text-center text-dark text-shadow-sm">
      <h1 class="headerTitle font-weight-bold text-primary">PROFESJONALNE WYKOŃCZENIE WNĘTRZ</h1>
      <h4>Kompleksowa obsługa, współpraca z architektem</h4>
      <h5>GDAŃSK -- GDYNIA -- SOPOT</h5>
      <div class="absolute-center hide-on-phone">
        <h1 class="text-main text-shadow" id="headerText">MALOWANIE - KAFELKOWANIE - HYDRAULIKA - ELEKTRYKA</h1>
      </div>
    </div>
    <div class="spaceBar"></div>
    <div class="main-content text-center">
      <Portfolio numberOfItems="4"/>
      <Cooperation/>
      <div class="spaceBar"></div>
      <div class="bg-second-image hide-on-phone"></div>
      <div class="spaceBar hide-on-phone"> </div>
      <div class="partners bg-white-85 hide-on-phone"> </div>
    </div>
    <Footer/>
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Portfolio from '@/components/Portfolio.vue'
import Cooperation from '@/components/Cooperation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Portfolio,
    Cooperation,
    Footer
  }
}
</script>
