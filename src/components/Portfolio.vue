<template>
    <div>
      <div id="realisations" class="realisations py-4 bg-white-85">           
          <h2 class="pb-3">Nasze realizacje:</h2>
          <div id="modal" class="slider">
              <div class="modal-page vh-100 fixed-top text-light text-center">
                  <button class="btn btn-danger float-right p-3" type="button" v-on:click="closeModalPage">X</button>
                  <h3 class="modalTitle display-3"></h3>
                  <p class="shortInfo"></p><p class="text"></p>
                </div>
                <div class="card-deck m-4">
                    <div class="card flex-25" v-for="(item, index) in itemsToDisplay" v-on:click="makeModalPage" v-bind:id="index" :key="item.id">
                        <img class="slider-img" v-bind:src="'images/portfolio/'+ item.name +'/' + item.images[0]">
                        <div class="card-body"><h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.shortInfo }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-success mr-1" v-if="numberOfItems" v-on:click="loadAllItems">Sprawdź więcej</button>
    </div>
      <div class="spaceBar">
      </div>
  </div>
</template>

<script>
var modalTitle = $("h1.title");
const modalShortInfo = $("h3.shortInfo");
const modalText = $("p.text")

export default {
  name: 'Portfolio',
  props: ['numberOfItems'],
  data: function(){
      return{
      items: [{
                name: "eurostyl1",
                title: "Mieszkanie nr 1",
                shortInfo: "Inwestor: Deweloper Eurostyl",                
                images: ["1.JPG","2.JPG","IMG_0028.JPG","IMG_0029.JPG","IMG_0030.JPG","IMG_0031.JPG","IMG_0032.JPG","IMG_0033.JPG","IMG_0034.JPG","IMG_0035.JPG","IMG_0036.JPG","IMG_0037.JPG","IMG_0038.JPG"]},
            {   
                name: "priv_1",
                title: "Mieszkanie nr 2",
                shortInfo: "Inwestor prywatny",
                images: ["1.JPG","IMG_1284.JPG","IMG_1285.JPG","IMG_1286.JPG","IMG_1287.JPG","IMG_1288.JPG","IMG_1289.JPG","IMG_1290.JPG","IMG_1291.JPG","IMG_1292.JPG","IMG_1293.JPG","IMG_1294.JPG","IMG_1295.JPG","IMG_1296.JPG","IMG_1297.JPG","IMG_1298.JPG","IMG_1299.JPG","IMG_1300.JPG","IMG_1301.JPG","IMG_1302.JPG","IMG_1303.JPG","IMG_1304.JPG","IMG_1305.JPG","IMG_1306.JPG","IMG_1307.JPG","IMG_1310.JPG","IMG_1311.JPG","IMG_1312.JPG","IMG_1313.JPG","IMG_1314.JPG","IMG_1315.JPG","IMG_1316.JPG"
]},
            {   
                name: "priv_2",
                title: "Mieszkanie nr 3",
                shortInfo: "Inwestor prywatny",
                images: ["1.JPG","IMG_1028.JPG","IMG_1029.JPG","IMG_1030.JPG","IMG_1032.JPG","IMG_1033.JPG","IMG_1034.JPG","IMG_1035.JPG","IMG_1036.JPG","IMG_1037.JPG","IMG_1038.JPG"]},
            {   
                name: "hossa1",
                title: "Mieszkanie nr 4",
                shortInfo: "Inwestor: Deweloper Hossa",
                images: ["1.JPG","IMG_1319.JPG","IMG_1320.JPG","IMG_1321.JPG","IMG_1322.JPG","IMG_1323.JPG","IMG_1324.JPG","IMG_1325.JPG","IMG_1326.JPG","IMG_1327.JPG","IMG_1328.JPG","IMG_1329.JPG","IMG_1330.JPG","IMG_1331.JPG","IMG_1334.JPG","IMG_1335.JPG","IMG_1336.JPG","IMG_1338.JPG","IMG_1339.JPG","IMG_1340.JPG","IMG_1341.JPG","IMG_1342.JPG","IMG_1343.JPG"]
            },
            {                
                name: "priv_3",
                title: "Mieszkanie nr 5",
                shortInfo: "Inwestor prywatny",
                images: ["1.JPG","IMG_1217.JPG","IMG_1218.JPG","IMG_1219.JPG","IMG_1221.JPG","IMG_1222.JPG","IMG_1223.JPG","IMG_1224.JPG","IMG_1225.JPG","IMG_1226.JPG","IMG_1227.JPG","IMG_1228.JPG","IMG_1229.JPG","IMG_1230.JPG","IMG_1231.JPG","IMG_1232.JPG","IMG_1233.JPG","IMG_1234.JPG","IMG_1235.JPG","IMG_1236.JPG","IMG_1237.JPG"]
            },
            {
                name: "hossa2",
                title: "Mieszkanie nr 6",
                shortInfo: "Inwestor: Deweloper Hossa",
                images: ["1.jpg","IMG_20200305_084816.jpg","IMG_20200305_084828.jpg","IMG_20200305_084839.jpg","IMG_20200305_084847.jpg","IMG_20200305_084909.jpg","IMG_20200305_084913.jpg","IMG_20200305_084926.jpg","IMG_20200305_084950.jpg","IMG_20200305_085015.jpg","IMG_20200305_085035.jpg","IMG_20200305_085045.jpg","IMG_20200305_085104.jpg","IMG_20200305_085122.jpg","IMG_20200305_085134.jpg","IMG_20200305_085158.jpg","IMG_20200305_085201.jpg","IMG_20200305_085204.jpg","IMG_20200305_085208.jpg","IMG_20200305_085215.jpg","IMG_20200305_085225.jpg","IMG_20200305_085231.jpg","IMG_20200305_085244.jpg","IMG_20200305_085253.jpg","IMG_20200305_085311.jpg","IMG_20200305_085324.jpg","IMG_20200305_085339.jpg","IMG_20200305_085354.jpg","IMG_20200305_085401.jpg","IMG_20200305_085433.jpg","IMG_20200305_085437.jpg","IMG_20200305_085455.jpg","IMG_20200305_085516.jpg","IMG_20200305_085519.jpg","IMG_20200305_085537.jpg","IMG_20200305_085547.jpg"]
            }
        ]}},
    computed: {
      itemsToDisplay: function() {
        return this.items.slice(0, this.numberOfItems)
      }
    },
    methods: {
        loadAllItems: function(e) {
          this.numberOfItems = this.items.length;
          e.target.style.display = "none"
        },
        makeModalPage: function(e) {
            //Set page content
            let i = e.currentTarget.id;
            let currentEl = this.items[i];
            $("h3.modalTitle").html(this.items[i].title);
            $("p.shortInfo").html(this.items[i].shortInfo);
            let carouselItemHtml = ``

            $(this.items[i].images).each((ind)=>{
              if (ind!=0){
              carouselItemHtml += `<div class="carousel-item">
                <a href="images/portfolio/${currentEl.name}/`
              carouselItemHtml += this.items[i].images[ind]              
              carouselItemHtml += `" target="_blank"><img src="images/portfolio/${currentEl.name}/`
              carouselItemHtml += this.items[i].images[ind]
              carouselItemHtml += `" class="d-block modal-page-img" alt="..."></a>
              </div>`}
            })
            // console.log(carouselItemHtml)
            let pTextHtml = `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <a href="images/portfolio/${currentEl.name}/${this.items[i].images[0]}" target="_blank">                                 
                                <img src="images/portfolio/${currentEl.name}/${this.items[i].images[0]}" class="d-block modal-page-img" alt="...">                                
                                </a>
                              </div>`
            pTextHtml += carouselItemHtml;                  
            pTextHtml += `</div>
                          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
                        </div>`
            $("p.text").html(pTextHtml)            
            //Show page
            $(".modal-page").css("display", "initial");
            $("body").css("overflow", "hidden");
        },
        closeModalPage: function() {
            $(".modal-page").css("display", "none");            
            $("body").css("overflow", "initial");
        },
        goToImg: function(){
          console.log(this)
        }
    }

}

</script>
<style>
</style>