const express = require('express');
const bodyParser = require('body-parser');
// const passport = require('passport');

const {Gist} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();


router.get('/',
// passport.authenticate('jwt', {session: false}), (req, res) => {
  Gist
    .find({user: req.user.id})
    .then(gists => {
      res.json(gists.map(gist => gist.apiRepr()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went wrong with the server!'});
    });
});

router.get('/:id',
// passport.authenticate('jwt', {session: false}), (req, res) => {
  Gist
    .findById(req.params.id)
    .then(gist => res.json(gist.apiRepr()))
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went horribly awry'});
    });
});

////The required fields will be everything but "logs" & "totalTimeInSeconds"
router.post('/',
// passport.authenticate('jwt', {session: false}), (req, res) => {
  const requiredFields = ['label'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  Gist
    .create({
      label: req.body.label,
      category: req.body.category,
      creationDate: req.body.creationDate,
      projectNotes: req.body.projectNotes,
      user: req.user.id
    })
    .then(gist => res.status(201).json(gist.apiRepr()))
    .catch(err => {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'});
    });

});

router.delete('/:id',
// passport.authenticate('jwt', {session: false}), (req, res) => {
  Gist
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).json({message: 'success'});
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

router.put('/:id',
// passport.authenticate('jwt', {session: false}), (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }

  const updated = {};
  const updateableFields = ['label', 'category', 'creationDate', 'projectNotes'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });

  Gist
    .findByIdAndUpdate(req.params.id, {$set: updated}, {new: true})
    .then(updatedGist => res.json(updatedGist))
    .catch(err => res.status(500).json({message: 'Something went wrong'}));
});

router.put('/:gistId/log',
// passport.authenticate('jwt', {session: false}), (req, res) => {

  if (!(req.params.gistId && req.body.gistId && req.params.gistId === req.body.gistId)) {
    return res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }


  const requiredFields = ['seconds', 'endDate'];

  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

   let newLogEntry = {
     seconds: req.body.seconds,
     endDate: req.body.endDate
   };

  Gist
    .findById(req.params.gistId)
    .then(gist => {
      gist.logs.push(newLogEntry);
      return gist.save()
    })
    .then(updatedGist => res.status(204).end())
    .catch(err => res.status(500).json({message: 'Something went wrong'}));
});

module.exports = {router};
