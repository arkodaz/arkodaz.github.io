var pathArray = window.location.href.split('=');
var id = pathArray[1];


// get current stats of product


  store.read("Sheet1", { search: { id: id } }).then(data => {
    var stats = parseInt(data[0].stats);



    //update current stats

    if(data[0].statsbool == "TRUE"){
        store
        .edit("Sheet1", {
          search: { id: id },
          set: { stats: stats+1}
        })
        .then(res => {
          
        });
    }
    if(data[0].statsbool == "FALSE"){
        console.log("Statistikalar sizin məhsulunuzda təsdiq olunmayıb. Bizimlə əlaqə saxlayıb");
    };




  });