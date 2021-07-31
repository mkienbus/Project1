document.addEventListener("DOMContentLoaded", function(){
    console.log("the DOM has loaded");
    displayAll();
})

//DOM grabs
let searchForm = document.getElementById("crypto-search");
let result = document.getElementById("resultPlaceholder");
let cryptoList = document.getElementById("cryptoList");
let input = document.getElementById("cryptoQuery");

//function to display all cryptos upon DOMContentLoaded
function displayAll(){
    fetch(`https://api.coinpaprika.com/v1/coins`)
        .then(response => response.json())
        .then(function(data){
            //console.log(data.slice(0, 100)), limited from size of of about 6100
            let sliced = data.slice(0, 100)
            sliced.forEach((d) => {
                cryptoList.innerHTML += `
                    <li>
                        Name: ${d.name}, <br>Symbol: ${d.symbol}
                    </li>
                `
            })
            
        }) 
}


searchForm.addEventListener("submit", displayCrypto)

function displayCrypto(e){
    e.preventDefault()
    fetch(`https://api.coinpaprika.com/v1/coins/${input.value}`)
        .then(response => response.json())
        .then(function(data){
            result.innerHTML = `
                <li>
                    ${data.name}
                    <br>
                    Description: ${data.description}
                    <br>
                    Click <span id = "link"> here </span> for more information: 
                </li>
                `
                    console.log(data)
                let el = document.getElementById("link");
                el.addEventListener("click", function(){
                    location.href = `${data.whitepaper.link}`;
            });
        })

    input.value = "";
}


