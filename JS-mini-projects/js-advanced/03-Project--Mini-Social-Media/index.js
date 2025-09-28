class Post {
  constructor({ image, userName, content, role }) {
    this.image = image;
    this.userName = userName;
    this.content = content;
    this.role = role; 
  }

  renderUI(currentRole = "user") {
    const main = document.querySelector("main");

    const card = document.createElement("section");
    card.className = `w-full mx-auto p-6 rounded-lg flex flex-col justify-center items-center 
      ${this.role === "admin" ? "bg-red-800" : "bg-blue-800"}`;

    card.innerHTML = `
      <div class="relative w-full">
        <img class="rounded-xl w-full object-cover max-h-[300px]" src="${this.image}" />
        <span class="absolute top-2 left-2 bg-black/70 text-white text-sm md:text-base px-3 py-1 rounded-lg shadow-lg">
          @${this.userName}
        </span>
      </div>
      <p class="mt-6 text-sm md:text-base text-center md:text-left">${this.content}</p>
      <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
        <button class="like-btn bg-green-500 w-full sm:w-auto py-2 px-4 rounded-md hover:bg-green-700 transition-all hover:-translate-y-0.5 duration-200 ease-in-out">
          Like 💖 <span>0</span>
        </button>
        <button class="delete-btn bg-red-500 w-full sm:w-auto py-2 px-4 rounded-md hover:bg-red-700 transition-all hover:-translate-y-0.5 duration-200 ease-in-out">
          Delete
        </button>
      </div>
    `;

    // Show/hide delete button
    if (currentRole !== "admin") {
      card.querySelector(".delete-btn").style.display = "none";
    }

    // Like functionality
    const likeBtn = card.querySelector(".like-btn");
    likeBtn.addEventListener("click", () => {
      const span = likeBtn.querySelector("span");
      span.textContent = Number(span.textContent) + 1;
    });

    // Delete functionality
    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      card.remove();

      // Remove from localStorage
      const posts = JSON.parse(localStorage.getItem("posts")) || [];
      const index = posts.findIndex(
        (p) => p.image === this.image && p.userName === this.userName && p.content === this.content
      );
      if (index > -1) {
        posts.splice(index, 1);
        localStorage.setItem("posts", JSON.stringify(posts));
      }
    });

    main.appendChild(card);
  }
}

class Form {
  constructor(formId) {
    this.form = document.querySelector(formId);

    this.imageInput = this.form.querySelector("#image");
    this.usernameInput = this.form.querySelector("#username");
    this.contentInput = this.form.querySelector("#content");
    this.roleInput = this.form.querySelector("#formRole");

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  handleSubmit() {
    const image = this.imageInput.value;
    const userName = this.usernameInput.value;
    const content = this.contentInput.value;
    const role = this.roleInput.value;

    // Save to localStorage
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    savedPosts.push({ image, userName, content, role });
    localStorage.setItem("posts", JSON.stringify(savedPosts));

    // Redirect to index.html
    window.location.href = "index.html";
  }
}

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.querySelector("#form");
  const roleSelect = document.querySelector("#role");

  if (formEl) {
    new Form("#form");
  }

  if (roleSelect) {
    // Load posts from localStorage
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const currentRole = roleSelect.value !== "select" ? roleSelect.value : "user";
    posts.forEach((p) => new Post(p).renderUI(currentRole));

    // Dynamically show/hide delete button on role change
    roleSelect.addEventListener("change", () => {
      const newRole = roleSelect.value;
      document.querySelectorAll("section").forEach((card) => {
        const deleteBtn = card.querySelector(".delete-btn");
        deleteBtn.style.display = newRole === "admin" ? "block" : "none";
      });
    });
  }
});
