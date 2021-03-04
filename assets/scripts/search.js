function searchBlog() {
	const searchForm = document.getElementById("search-form");
	const search = searchForm.getElementsByTagName("input")[0].value;
	// Fetch the data
	fetch("https://gentle-badlands-99736.herokuapp.com/get-all-posts/")
		.then((response) => response.json())
		.then((blog) => {
			console.log(blog);
			console.log(search);
			if (search) {
				let matchedSearch = blog.filter((blogItem) => {
					return blogItem.Title == search;
				});
				document.getElementById("blog-items").innerHTML = "";
				if (matchedSearch.length > 0) {
					matchedSearch.forEach((blog) => createBlogItem(blog));
				} else {
					document.getElementById(
						"blog-items"
					).innerHTML = `<li>Sorry, no matches were found</li>`;
				}
			} else {
				document.getElementById("blog-items").innerHTML = "";
				blog.forEach((item) => createBlogItem(item));
			}
		});
}
