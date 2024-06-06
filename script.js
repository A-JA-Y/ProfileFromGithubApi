// // const xhr = new XMLHttpRequest();
// // xhr.onreadystatechange = function(){
// //     console.log(xhr.readyState);
// // }
// // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1');
// // xhr.send();
// const input = document.getElementById("userInput");
// const form = document.querySelector("form");
// const card = document.querySelector("#card");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const xhr = new XMLHttpRequest();
//   const requestUrl = `https://api.github.com/users/${input.value}`;
//   xhr.open("GET", requestUrl);

//   xhr.addEventListener("load", () => {
//     const data = JSON.parse(xhr.responseText);
//     console.log(data);
    
      
    
//     document.getElementsByClassName(
//       "photo"
//     )[0].innerHTML = `<img class="image" src= ${data["avatar_url"]} alt="" />`;
//     document.getElementsByClassName(
//       "followers"
//     )[0].innerHTML = `<span>Name : ${data["name"]} <br/>
//           Address : ${!data["location"] ? "Not Given" : data["location"]} <br/>
//           Followers : ${data["followers"]}</span><br/>
//           About : ${data["bio"]}</span>`;
//   });
//   xhr.send();
// card.classList.remove("hidden")
// input.value = "";
// });

// card.addEventListener('click', downloadCard);
// function downloadCard() {
//   const cardElement = document.getElementById('card');

//   html2canvas(cardElement).then(function(canvas) {
//     // Convert the canvas to an image
//     const image = canvas.toDataURL('image/png');

//     // Create a link element and set the image as its href
//     const link = document.createElement('a');
//     link.href = image;
//     link.download = 'card.png';

//     // Simulate a click on the link to trigger the download
//     link.click();
//   });
// }

// // console.log('here:',xhr.responseText);

const input = document.getElementById("userInput");
const form = document.querySelector("form");
const card = document.querySelector("#card");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const requestUrl = `https://api.github.com/users/${input.value}`;
  xhr.open("GET", requestUrl);
  xhr.addEventListener("load", () => {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    document.getElementsByClassName("photo")[0].innerHTML = `<img class="image" src="${data["avatar_url"]}" alt="" />`;
    document.getElementsByClassName("followers")[0].innerHTML = `<span>Name : ${data["name"]} <br/> Address : ${!data["location"] ? "Not Given" : data["location"]} <br/> Followers : ${data["followers"]}</span><br/> About : ${data["bio"]}</span>`;
  });
  xhr.send();
  card.classList.remove("hidden");
  input.value = "";
});

card.addEventListener('click', downloadCard);

function downloadCard() {
  const cardElement = document.getElementById('card');
  html2canvas(cardElement).then(function(canvas) {
    // Convert the canvas to an image
    const image = canvas.toDataURL('image/png');
    // Create a link element and set the image as its href
    const link = document.createElement('a');
    link.href = image;
    link.download = 'card.png';
    // Simulate a click on the link to trigger the download
    link.click();
  });
}
