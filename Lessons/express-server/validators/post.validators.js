const { body, validationResult } = require('express-validator');

const PostValidionRules = () => {

    return [
        body('title', 'Title is required.').notEmpty().isLength({min: 4, max: 150}).withMessage('Title must be between 4 to 150 characters.'),
        body('body', 'Body is required.').notEmpty().isLength({min: 4, max: 2000}).withMessage('Body must be between 4 to 2000 characters.')
    ];

}

const createPostValidation  = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty())  { 
        const extractedErrors = [];
        errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
        return res.status(400).json({'error': extractedErrors});
    }
    next();

}


module.exports = {
    PostValidionRules,
    createPostValidation
};