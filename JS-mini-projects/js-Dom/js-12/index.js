const main = document.querySelector("#main");
const searchInput = document.querySelector("#searchInput");

let allUsers = [];

const renderUsers = (users) => {
  main.innerHTML = "";

  users.forEach((user) => {
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
};

const fetchUsers = async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    allUsers = response.data;

    renderUsers(allUsers);
  } catch (error) {
    console.log("Something went wrong Fetching Users", error.message);
  }
};

// search functionality
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();

  const filteredUsers = allUsers.filter((user) => {
    return (
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user?.company?.name.toLowerCase().includes(query)
    );
  });

  renderUsers(filteredUsers);
});

fetchUsers();
