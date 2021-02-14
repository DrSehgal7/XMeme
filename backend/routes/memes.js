const router = require('express').Router();
let Meme = require('../models/meme.model');


router.route('').get((req, res) => {
  Meme.find({
    
  }).sort({createdAt:-1})
    .then(memes => res.json(memes))
    .catch(err => res.status(404).json('Error: ' + err));
});

router.route('').post((req, res) => {
  const username = req.body.username;
  const caption = req.body.caption;
  const memeUrl = req.body.memeUrl;


     


  const newMeme = new Meme({
    username,
    caption,
    memeUrl
  });
  newMeme.save()
    .then((data) => {
      res.json('Id:' + data._id)
    })
    .catch(err => res.status(404).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Meme.findById(req.params.id)
    .then(memes => res.json(memes))
    .catch(err => res.status(404).json('Error: ' + err));
});

router.route('/:id').patch((req, res) => {
  Meme.findById(req.params.id)
    .then(memes => {
      memes.caption = req.body.caption;
      memes.memeUrl = req.body.memeUrl;
      memes.save()
        .then(() => res.json('Meme Info updated!'))
        .catch(err => res.status(404).json('Error: ' + err));
    })
    .catch(err => res.status(404).json('Error: ' + err));
});

module.exports = router;