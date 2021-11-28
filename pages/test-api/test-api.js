let button = document.getElementsByTagName("button");
let output = document.getElementById("output");
let inputFiel = document.getElementsByClassName("myInput");
let url = "https://api.github.com/users/";

button[0].addEventListener("click", () => getUserInfo(), false);


async function getUserInfo() {
  //Read text input
  let inputUsername = inputFiel[0].value;
  // Set input name to url and fetch It
  let response = await fetch(url + inputUsername);
  let data = await response.json();
  //Put data inside page
  function createUserInfo(){
    // Reset content
    output.textContent = "";
    //Set content
    output.textContent = `Ceci est le profil de ${data.name}`
    const logo = document.createElement( 'img' );
    logo.src = data.avatar_url;
    logo.style.display="block";
    output.appendChild(logo);
  }
  createUserInfo();
}





// Get my number of public repos on GitHub.
/*
async function myFetchFunction() {
  let url =
    "https://api.github.com/users/leoncik";
  let response = await fetch(url);

  let numberOfRepos = await response.json(); // read response body and parse as JSON

  alert(`I have made ${numberOfRepos.public_repos} public repos :D`);
}

myFetchFunction();*/
