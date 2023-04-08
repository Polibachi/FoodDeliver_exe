import postModel from './postModel.js'
console.log('debug1');
export const create = async (req, res) => {
    try {
        console.log(req.body.userId);
        const doc = new postModel({
            title: req.body.title,
            text: req.body.text,
            tags: req.body.tags,
            user: req.userId,
        });
    const post = await doc.save();
    res.json(post);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'ne vdalos stvoriti stattiu',
        });
    }
}
export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;

        postModel.findOneAndUpdate(
            {
                _id: postId,
            },
            {
                $inc: { viewsCount: 1 },
            },
            {
                returnDocument: 'after',
            }
        )
            .then((doc) => {
                res.json(doc);
            })
            .catch((err) => {
                console.log(err);
                res.status(404).json({ message: 'nema statti' });
            });
        

    }
    catch (err) {
    console.log(err);
    res.status(500).json({
        message: 'ne vdalos stvoriti stattiu',
    }); }
}