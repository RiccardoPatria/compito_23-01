const express = require("express")
const app = new express()
const fetch = require("node-fetch")
const { homePage, postPage } = require("./utils")

const port = 8080

app.get("/", (req, res) => {
  try {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => res.send(homePage(data)))
      .catch(err => console.log(err))
  } catch (err) {
    console.log(err)
  }
})

app.get("/post/:id", async(req, res) => {
  const id = req.params.id
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(async data => res.send(await postPage(data)))
      .catch(err => console.log(err))
  } catch (err) {
    console.log(err)
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})