const container = document.querySelector(".container");

const url =
  "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad";

async function getInfo() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const facts = data.data;

    container.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      const getData = facts[i];

      if (i === 7) {
        break;
      }
      container.innerHTML += `<div class="container">
        <h1 class="name">Name: ${getData.name}</h1>
        <p class="birthday">Date of birth: ${getData.birthday}</p>
        <p class="nickname">Nickname: ${getData.nickname}</p>
        <p class="nickname">Occupation: ${getData.occupation}</p>
        </div>`;
    }
  } catch (error) {
    console.log("An error occurred");
    container.innerHTML = displayError("An error occurred when fetching API");
  }
}
getInfo();
