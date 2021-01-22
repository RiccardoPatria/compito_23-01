const fetch = require("node-fetch")

module.exports.pag1 = (data) => {
  const str = data.reduce((acc, e) => acc + `<h1>${e.id}. ${e.title}</h1><p>${e.body}</p><form method="get" action="/post/${e.id}"><button>Post</button></form>`, "")
  return str
}
module.exports.pag2 = async(post) => {
  let str = `<h2>${post.title}</h2><h4>${post.body}</h4><h5>Comments:</h5>`
  await fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => {
      const comments = data.filter(e => e.postId === post.id)
      str = comments.reduce((acc, e) => acc + `<h5>User: ${e.email}</h5><p><strong>${e.name}</strong></p><p>${e.body}</p>`, str)
    })
    .catch(err => console.log(err))
  return str
}