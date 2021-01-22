const express = require("express")
const app = new express()
const fetch = require("node-fetch")
const { pag1, pag2 } = require("./utils")

const port = 1234
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
app.get("/post/:id", (req, res) => {
  const id = req.params.id
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => response.json())
  .then(async data => {
    try {
      res.send(await pag2(data))
    } catch (err) {
      console.log(err)
    }
  })
    .catch(err => console.log(err))
})
app.get("/ciaone", (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => res.send(pag1(data)))
    .catch(er => console.log(err))
})