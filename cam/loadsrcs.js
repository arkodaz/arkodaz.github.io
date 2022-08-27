var pathArray = window.location.href.split('=');
var id = pathArray[1];

const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/62f540a54906bb053757e950"
  );

  store.read("Sheet1", { search: { id: id } }).then(data => {
    var srclink = data[0].src;
    var w = data[0].width;
    var h = data[0].height;
    
    var object = document.getElementById("obj");
    object. setAttribute('src', srclink);
    object. setAttribute('height', h);
    object. setAttribute('width', w);







  });