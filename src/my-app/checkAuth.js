import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/,'');
    console.log(jwt.verify(token, 'kluch'));


    if (token) {
        try {
            const decoded = jwt.verify(token, 'kluch');
            req.userId = decoded._Id;
            next();
        } catch (e) {
            return res.status(403).json({
                message: 'no acces1',
            });
        }
    } else {
        return res.status(403).json({
            message: 'no acces token pizda',
        });
    }
}