class Post {
  // This will manage the post that were created by user / Admin
  // responsible of managing like on the post by user/admin
  // responsible of managing delete functionality by only Admin.
  // it will then store the post to the localstorage so we do not miss them on refresh

  constructor(post) {
    this.post = [post];
  }
  renderUI() {}
  like() {}

  delete() {}
}

class User {
  // this will collect the info from the form and then
  // ---- we will set the bg of it to blue and does not want to show the delete button
}

class Admin extends User {
  // this will collect the info from the form and then
  //---- set the bg color of it to red and delete button is visible to it
}

class Form {
  // This will manage the submission of form  based on the user or admin role
  // this will call the the another class based on there role like
  // --- if role user then the bg color of the ui will be blue (no delete button)
  // --- if role admin then bg color will be red and also delete button visible
  constructor(image, userName, content, role) {
    this.image = image;
    this.userName = userName;
    this.content = content;
    this.role = role;
  }

  createPost() {
    return new post(this.image, this.userName, this.content, this.role);
  }
}
