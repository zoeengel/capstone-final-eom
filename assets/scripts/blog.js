// Get data from URL
const params = new URLSearchParams(window.location.search);

// Get elements to change
const title = document.getElementById("blog-title");
const body = document.getElementById("blog-body");
const author = document.getElementById("author");

if (params.has("blogID")) {
	fetch(
		`https://gentle-badlands-99736.herokuapp.com/get-all-posts/${params.get(
			"blogID"
		)}`
	)
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			title.innerHTML = json.Title;
			body.innerHTML = json.Contents;
			getAuthor(json.id);
		});
} else {
	window.location.href = "./404.html";
}

function getAuthor(id) {
	fetch(
		`https://gentle-badlands-99736.herokuapp.com/get-all-posts/${id}/author`
	)
		.then((response) => response.json())
		.then((json) => json.forEach((comment) => createComment(comment)));
}

function createComment(comment) {
	const listItem = `
    <li>
        <h4>${comment.name}</h4>
        <p>${comment.body}</p>
    </li>
    `;

	comments.innerHTML += listItem;
}
