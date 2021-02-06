const { post } = require("../app")

posts = [
    { 
        id: '1', 
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
    },
    { 
        id: '2', 
        title: 'Ut in quam nec leo auctor vestibulum nec volutpat diam.', 
        content: 'Proin eleifend, quam id mattis mattis, massa mauris placerat mi, vel pharetra nulla justo quis mi. ' 
    },
    { 
        id: '3', 
        title: 'Quisque sagittis purus id posuere posuere.', 
        content: 'Donec egestas, erat non rhoncus rutrum, quam orci iaculis erat, ac varius sem tellus non dolor. ' 
    },
    { 
        id: '4', 
        title: 'Nam aliquam justo sollicitudin accumsan volutpat.', 
        content: ' Praesent eget condimentum lorem, non viverra turpis. Ut accumsan nulla eget feugiat suscipit. Proin tempor risus in auctor efficitur.' 
    }
]

const getAllPosts = (req, res) => {
    res.status(200).json({ status: true, data: posts, message: 'Retrieved Successsfully' })
}

const createPost = (req, res) => {
    req.body.id = `${posts.length + 1}`
    posts.push(req.body)
    res.status(201).json({ status: true, data: req.body, message: 'Created Successfully' })
}

module.exports = { getAllPosts, createPost }