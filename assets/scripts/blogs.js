function getBlogs() {
	// Get element to change
	let list = document.getElementById("blog-items");

	// Fetch the data
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			json.forEach((blog) => createBlogItem(blog));
		});
}

getBlogs();
