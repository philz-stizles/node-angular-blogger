const { post } = require("../app")

posts = [{ id: '', title: '', content: '' }]

const getAllPosts = (req, res) => {
    res.status(200).json({ status: true, data: post, message: '' })
}

const createPost = (req, res) => {
    res.status(201).json({ status: true, data: req.body, message: 'Created Successfully' })
}

module.exports = { getAllPosts, createPost }