let form = document.querySelector("form");
let fullName = form.querySelector("#name");
let role = form.querySelector("#role");
let bio = form.querySelector("#bio");
let photo = form.querySelector("#pic");

const gridContainer = document.querySelector("#cardHolder");

const userManager = {
  users: [],

  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },

  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
    this.renderUi();
    form.reset();
  },

  addUser: function () {
    this.users.push({
      fullName: fullName.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
  },

  renderUi: function () {
    gridContainer.innerHTML = "";
    // Loop through users and create cards
    this.users.forEach((user) => {
      // Create main card div
      const card = document.createElement("div");
      card.className =
        "card bg-gray-900 rounded-xl p-3 outline-none ring-blue-600 ring-2 transition-all duration-500 hover:ring-purple-700 hover:-translate-y-2 hover:shadow-xl ease-in-out";

      // Inner container for image and text
      const innerDiv = document.createElement("div");
      innerDiv.className = "flex flex-col items-center";

      // Image container
      const imgDiv = document.createElement("div");
      imgDiv.className = "img flex flex-col items-center";

      const img = document.createElement("img");
      img.className = "h-32 w-32 rounded-full object-cover mt-4";
      img.src =
        user.photo ||
        "https://images.unsplash.com/photo-1758640920659-0bb864175983?q=80&w=1171&auto=format&fit=crop";
      img.alt = "profile-pic";

      imgDiv.appendChild(img);

      // Name
      const nameH2 = document.createElement("h2");
      nameH2.className = "text-3xl text-gray-100 uppercase mt-4";
      nameH2.textContent = user.fullName;

      // Role
      const roleP = document.createElement("p");
      roleP.className = "text-lg text-gray-400 uppercase mt-2";
      roleP.textContent = user.role;

      innerDiv.appendChild(imgDiv);
      innerDiv.appendChild(nameH2);
      innerDiv.appendChild(roleP);

      // Bio
      const bioP = document.createElement("p");
      bioP.className =
        "text-lg tracking-tighter my-5 leading-tight text-gray-400";
      bioP.textContent = user.bio;

      card.appendChild(innerDiv);
      card.appendChild(bioP);

      // Append card to grid
      gridContainer.appendChild(card);
    });
  },
};

userManager.init();
