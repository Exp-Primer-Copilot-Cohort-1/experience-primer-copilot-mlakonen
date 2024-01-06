// Create web server

// Express
const express = require('express');
const router = express.Router();

// Comments
const comments = require('../comments');

// Routes
router.get('/', (req, res) => {
    comments.getAllComments().then((comments) => {
        res.json(comments);
    });
});

router.get('/:id', (req, res) => {
    comments.getCommentById(req.params.id).then((comment) => {
        if (comment) {
            res.json(comment);
        } else {
            res.status(404).send('Not found');
        }
    });
});

router.post('/', (req, res) => {
    comments.addComment(req.body.name, req.body.comment).then((comment) => {
        res.json(comment);
    });
});

router.put('/:id', (req, res) => {
    comments.getCommentById(req.params.id).then((comment) => {
        if (comment) {
            comment.name = req.body.name;
            comment.comment = req.body.comment;
            comments.updateComment(comment).then(() => {
                res.json(comment);
            });
        } else {
            res.status(404).send('Not found');
        }
    });
});

router.delete('/:id', (req, res) => {
    comments.deleteComment(req.params.id).then(() => {
        res.status(200).send('OK');
    });
});

// Export
module.exports = router;