function getBlogs() {
	// Get element to change
	let list = document.getElementById("blog-items");

	// Fetch the data
	fetch("https://gentle-badlands-99736.herokuapp.com/get-all-posts/")
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			json.forEach((blog) => createBlogItem(blog));
		});
}

function createBlogItem(blog) {
	const item = `<li>
			<!-- Cards -->
			<div class="card">
				<img class="card-image" src="${blog.image}">
				<div class="card-head">
					<h2>${blog.Title}</h2>
				</div>
				<div class="card-body">
					<p>${blog.Content}</p>
					<a href="./blog.html?blogID=${blog.id}" class="btn">Read more</a>
				</div>
			</div>
</li>`;
	let list = document.getElementById("blog-items");
	console.log("Hello");
	list.innerHTML += item;
}

getBlogs();
