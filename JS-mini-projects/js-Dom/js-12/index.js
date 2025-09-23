// querySelector
const main = document.querySelector("#main");

const fetchUsers = async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    const userData = response.data;

    console.log(userData);

    // Display as a ui

    userData.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");

      const companyNameEl = document.createElement("h1");
      companyNameEl.textContent = user?.company?.name;

      const nameEl = document.createElement("h2");
      nameEl.textContent = user?.name;

      const userNameEl = document.createElement("span");
      userNameEl.textContent = user?.username;

      const emailEl = document.createElement("h3");
      emailEl.textContent = user?.email;

      const phoneEl = document.createElement("h4");
      phoneEl.textContent = user?.phone;

      const streetEl = document.createElement("h3");
      streetEl.textContent = user?.address?.street;

      const cityEl = document.createElement("h3");
      cityEl.textContent = user?.address?.city;

      const zipcodeEl = document.createElement("span");
      zipcodeEl.textContent = user?.address?.zipcode;

      userCard.append(
        companyNameEl,
        nameEl,
        userNameEl,
        emailEl,
        phoneEl,
        streetEl,
        cityEl,
        zipcodeEl
      );
      main.appendChild(userCard);
    });
    return userData;
  } catch (error) {
    console.log("Something went wrong Fetching Users", error.message);
  }
};

fetchUsers();
