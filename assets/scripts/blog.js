// Get data from URL
const params = new URLSearchParams(window.location.search);

// Get elements to change
const title = document.getElementById("blog-title");
const singleBlog = document.getElementById("single-blog");

if (params.has("blogID")) {
	fetch(
		`https://gentle-badlands-99736.herokuapp.com/get-single-post/${params.get(
			"blogID"
		)}`
	)
		.then((response) => response.json())
		.then((blog) => {
			console.log(blog);
			title.innerHTML = `${blog.Title}`;
			singleBlog.innerHTML = `
      <h1 class="single-post-title">${blog.Title}</h1>
      <div class="single-post-container">
      <img class="single-post-image" src="${blog.image}">
      
      <div class="text-container">
      <p class="single-post-content">${blog.Content}</p>
      <p class="author">Author<br>${blog.Author}</p>
      <p class="date">${blog.Date}</p>
      </div>
      </div>
      `;
		});
} else {
	window.location.href = "./404.html";
}
