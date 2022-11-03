const button = document.getElementById("button")
const dogImg = document.getElementById("dogImg")


const getDog = () => {
fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(json => {
    console.log(json.message)
    dogImg.innerHTML =`<img src='${json.message}'/>`
})
}

button.onclick = () => {
   getDog();
}