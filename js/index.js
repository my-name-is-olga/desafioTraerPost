let URL_BASE = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  try {
    const response = await fetch(URL_BASE);
    const posts = await response.json();

    const showPosts = document.getElementById("post-data");
    showPosts.innerHTML = " ";

    posts.forEach((post) => {
      const postsList = document.createElement("ul");

      postsList.innerHTML = `
          <li><h4>${post.title}</h4>
     <p>${post.body}</p></li>
          `;
      showPosts.appendChild(postsList);
    });
  } catch (error) {
    console.log(error);
  }
}
