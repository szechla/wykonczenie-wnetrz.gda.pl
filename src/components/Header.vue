<template>
    <div>
      <div class="container-fluid bg-navbar">
        <div class="row py-3 headerFirstRow">
          <div class="col text-left">
            <h2 class="text-light d-inline">WYKONCZENIE - WNETRZ</h2>
            <h3 class="text-dark d-inline">.GDA.PL</h3>
          </div>
          <div class="col text-right hide-on-phone">
            <img class="phone-icon" src="../../public/images/phone-icon.png">
            <h3 class="text-dark d-inline"> {{ phoneNumber }} </h3>
          </div>
        </div>
        <div class="row headerSecondRow"> 
          <div class="col-4 hide-on-phone hide">
            <p class="text-light text-left font-weight-bold">Usługi ogólnobudowlane Mariusz Mioduszewski</p>
          </div>
          <div class="navbar col-8">
            <nav class="navbar-expand-lg navbar-light text-right py-2">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              Menu</button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <div class="nav-item d-inline navElement" v-for="navElement in navElements" v-bind:key="navElement.id">
                  <router-link v-bind:to="navElement">{{ navElement }}</router-link>
                  <li>/</li>
                </div>
                <div class="d-inline navElement">
                  <a class="dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pliki do pobrania</a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Wzór umowy</a>
                  </div>
                </div>
              </ul>
              </div>
            </nav>

          </div>
        </div>
      </div>
      <div class="spaceBar">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function(){
    return {
      pageName: "wykonczenie-wnetrz.gda.pl",
      phoneNumber: "784-567-628",
      navElements: [
          "Strona główna",
          "Zakres usług",
          "Realizacje",
          "Współpraca",
          "Kontakt"
      ],
      filesToDownload:{
          "name": "umowa",
          "url": "/static/images/umowa.pdf"
      }
    }
  }
}
</script>
<style>
a:hover{
  color: #007bff;
  text-decoration: none;
}
a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #005ab9;
}
</style>