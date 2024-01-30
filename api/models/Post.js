const mongoose = require('mongoose');

// Define post schema
const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

// Create post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;