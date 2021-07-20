document.addEventListener("DOMContentLoaded", function(){
    console.log("the DOM has loaded");
    //enable search function
})

//DOM grabs
let searchForm = document.getElementById("cryptoQuery");
let result = document.querySelector("body#searchResult ul li");

searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    let input = searchForm.nodeValue;
    fetch(`https://api.coinpaprika.com/v1/${input}`)
        .then(response => response.json())
        .then(function(data){
            
        })

    input.value = "";
})
