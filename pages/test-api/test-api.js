// Get my number of public repos on GitHub.

async function myFetchFunction() {
  let url =
    "https://api.github.com/users/leoncik";
  let response = await fetch(url);

  let numberOfRepos = await response.json(); // read response body and parse as JSON

  alert(`I have made ${numberOfRepos.public_repos} public repos :D`);
}

myFetchFunction();
