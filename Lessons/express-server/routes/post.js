const express = require('express');
const Router = express.Router();
const { PostValidionRules, createPostValidation } = require('../validators/post.validators');
const { getPosts, createPost, deletePost, getPost, updatePost } =  require('../controllers/post');

Router.get('/post/getAll', getPosts);
Router.get('/post/getById/:id', getPost);
Router.post('/post/create', PostValidionRules(), createPostValidation, createPost);
Router.delete('/post/delete/:id', deletePost);
Router.put('/post/update/:id', PostValidionRules(), createPostValidation, updatePost);

module.exports = Router;
