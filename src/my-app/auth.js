import { body } from 'express-validator';

export const registerValidation = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('fullname').isLength({ min: 3 }),
    body('avatarUrl').optional().isURL(),

];
export const loginValidation = [
    body('email', 'tse ne email').isEmail(),
    body('password', 'korotkiy parol').isLength({ min: 5 }),

];
export const postCreateValidation = [
    body('title', 'enter post title').isLength({ min: 5 }),
    body('text', 'enter text').isLength({ min: 5 }),
    body('tags', 'set some tags').isLength({ min: 3 }),
    //body('imageUrl').optional().isURL(),

];