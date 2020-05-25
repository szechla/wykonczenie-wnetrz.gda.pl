
      var servicesList = "servicesList"
      var pageInfo = "pageInfo"
      //Run PHP script to load all service images list
      fetch('/script.php')
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          servicesList = myJson;
        })
      //Get the info about page
      fetch('/pageInfo.json')
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          pageInfo = myJson.pageInfo
          console.log(pageInfo)
        })
      pageInfo = JSON.parse(pageInfo)     