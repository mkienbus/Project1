document.addEventListener("DOMContentLoaded", function(){
    console.log("the DOM has loaded");
    displayAll();
})

//DOM grabs
let searchForm = document.getElementById("crypto-search");
let result = document.querySelector("body#searchResult");
let cryptoList = document.getElementById("cryptoList");
let input = document.getElementById("cryptoQuery");

//function to display all cryptos upon DOMContentLoaded
function displayAll(){
    fetch(`https://api.coinpaprika.com/v1/coins`)
        .then(response => response.json())
        .then(function(data){
            //console.log(data.slice(0, 100))
            //for each iteration?
            let sliced = data.slice(0, 100)
            sliced.forEach((d) => {
                cryptoList.innerHTML += `
                    <li>
                        ${d.name}
                    </li>
                `
                //console.log(d.name)
            })
            
        }) 
}


//crypto search
searchForm.addEventListener("submit", displayCrypto)

function displayCrypto(e){
    e.preventDefault()
    fetch(`https://api.coinpaprika.com/v1/coins/${input.value}`)
        .then(response => response.json())
        .then(function(data){
            // result.innerHTML = `
            //     <ul>
            //         <li>
            //             ${data}
            //         </li>
            //     </ul>
            //     `
            console.log(data)
        })

    input.value = "";
}
