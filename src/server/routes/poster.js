import mongoose from 'mongoose';
import express from 'express';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import Question from '../models/question.js';
import Question2 from '../models/question2.js';
import Part from '../models/part.js';
import Teach from '../models/regteacher.js';

const router = express.Router();

router.get('/:id/:pathParam1/:pathParam2', async (req, res, next) => {

  let q = req.user.themes.filter(q => q.themes === req.params.id);
  let detect = q[0].parts;
  let w = detect.filter(w => w.title === req.params.pathParam1);
  let main = w[0].parts;
  let fin = await main.findIndex(reina => reina._id == req.params.pathParam2);

  main.splice(fin, 1);
  let user = req.user;

  try {
    user.markModified('themes');
    user = await user.save();
    res.redirect('/themes/' + req.params.id + '/' + req.params.pathParam1);
  }
  catch {
    err => console.log(err);
    res.redirect('/themes/' + req.params.id + '/' + req.params.pathParam1);
  }
});


aws.config.update({
  secretAccessKey: 'GBcvrZUFw8fd326jcFa907IBnNngvJrFgjMJPAwD',
  accessKeyId: 'AKIAI2WA6LPTO6LMUVJQ',
  region: 'ap-northeast-2'
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if( file.mimetype === 'image/png' || file.mimetype === 'image/jpg' ||
   file.mimetype === 'image/jpeg' || file.mimetipe === 'image/svg') {
    cb(null, true);
  }
  else  { cb(null, false); }
};

var upload = multer({
  //fileFilter: fileFilter,
  limits:{ fileSize: 5000000 },
  storage: multerS3({
    s3: s3,
    bucket: 'speaqiz2',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'META_DATA'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
});


    router.post('/:id/:pathParam1', upload.fields([{name: 'cover', maxCount: 1}, {name: 'audio'}]), async (req, res, next) => {

           let user = req.user;
           let jijibo = user.themes.filter(jiji => jiji.themes === req.params.id);
           let detect = jijibo[0].parts;
           let jijibo2 = detect.filter(jiji => jiji.title === req.params.pathParam1);
           let success = jijibo2[0].parts;

           let fileName = req.files.cover !=null ? req.files.cover[0].location : null;
           let fileName2 = req.files.audio !=null ? req.files.audio[0].location : null;
           let question = new Question ({
               title2: req.body.title2,
               var2: req.body.var2,
               var3: req.body.var3,
               var4: req.body.var4,
               var5: req.body.var5,
               var6: req.body.var6,
               var7: req.body.var7,
               var8: req.body.var8,
               var9: req.body.var9,
               right: req.body.right,
               coverImageName: fileName,
               audio: fileName2
           });

  success.push(question);
  try {
    user.markModified('themes');
    user = await user.save();
    console.log(success);
    res.redirect('/themes/' + req.params.id + '/' + req.params.pathParam1);
  }
  catch {
    err => console.log(err);
  }
});

router.post('/upgrade/:id/:pathParam1', upload.fields([{name: 'cover', maxCount: 1}, {name: 'audio'}]), async (req, res, next) => {

       let user = req.user;
       let jijibo = user.themes.filter(jiji => jiji.themes === req.params.id);
       let detect = jijibo[0].parts;
       let jijibo2 = detect.filter(jiji => jiji.title === req.params.pathParam1);
       let success = jijibo2[0].parts;

       let fileName = req.files.cover !=null ? req.files.cover[0].location : null;
       let fileName2 = req.files.audio !=null ? req.files.audio[0].location : null;
       let question2 = new Question2 ({
           title2: req.body.title2,
           var2: req.body.var2,
           right: req.body.right,
           coverImageName: fileName,
           audio: fileName2
       });

success.push(question2);
try {
    user.markModified('themes');
    user = await user.save();
    console.log(success);
    res.redirect('/themes/' + req.params.id + '/' + req.params.pathParam1);
 }
catch {
    err => console.log(err);
 }
});

router.post('/photo', upload.single('photo'), async (req, res, next) => {
  let photoFile = req.file != null ? req.file.location : null;

  let user = req.user;
  user.profilePhoto = photoFile;

  try {
    user = await user.save();
    console.log(user);
    res.redirect('/profile');
  }
  catch {
    err => console.log(err);
  }
});

router.post('/bio', async (req, res, next) => {

  let user = req.user;
  user.bio = req.body.bio;

  try {
    user = await user.save();
    console.log(user);
    res.redirect('/profile');
  }
  catch {
    err => console.log(err);
  }
});


export default router;
