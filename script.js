const button = document.getElementById("button")
const dogImg = document.getElementById("dogImg")


// const getDog = () => {
// fetch("https://dog.ceo/api/breeds/image/random")
// .then(response => response.json())
// .then(json => {
//     dogImg.innerHTML =`<img src='${json.message}'/>`
// })
// }


//async await attempt

button.onclick = () => {
   getDog2();
}

const getDog2 = async () => {
    const url = "https://dog.ceo/api/breeds/image/random"
    const response = await fetch(url);
    const data = await response.json()
    dogImg.innerHTML =`<img src='${data.message}'/>`
    
}

