const Post = require('../models/post');

const getPosts = (req, res) => {

    Post.find()
        .select('_id title body')
        .then((posts) => {
            res.json({posts});
        })
        .catch(error => console.log(error));
    
}

const getPost = (req, res) => {

    const id = req.params.id;

    Post.findById(id)
        .select('_id title body')
        .then(post => {
            res.json({post});
        })
        .catch(error => {
            console.log(error);
        });

}

const updatePost = (req, res) => {

    const id = req.params.id;

    Post.findByIdAndUpdate(id, {$set:{title:req.body.title, body: req.body.body}}, {new :true})
        .then(post => {res.send(post)})
        .catch(error => console.log(error));
    
}

const createPost = (req, res) => {

    const post = new Post(req.body);

    post.save().then((result => {
        res.status(200).json(result);
    }));      

}

const deletePost = (req, res) => {

    const id = req.params.id;

    Post.findByIdAndRemove(id).then(posts => {
        res.status(200).json({posts})
    }).catch(error => {
        console.log(error);
    });
}

module.exports = { 
    getPosts,
    getPost,
    updatePost,
    createPost,
    deletePost
}
