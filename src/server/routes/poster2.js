import mongoose from 'mongoose';
import express from 'express';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import Part from '../models/part.js';
import Teach from '../models/regteacher.js';

const router = express.Router();

aws.config.update({
  secretAccessKey: 'GBcvrZUFw8fd326jcFa907IBnNngvJrFgjMJPAwD',
  accessKeyId: 'AKIAI2WA6LPTO6LMUVJQ',
  region: 'ap-northeast-2'
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'application/pdf') {
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
    contentType: multerS3.AUTO_CONTENT_TYPE, // --> auto detect type of uploading file
    contentDisposition: 'inline',  // --> don't allow to upload file from s3, only show
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'META_DATA'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
});


router.post('/theory/:id/:pathParam1', upload.single('theo'), async(req, res, next) => {
  let user = req.user;
  let themes = user.themes;
  let pdfFile = req.file != null ? req.file.location : null;

  let one = themes.filter(the => the.themes == req.params.id);
  let two = one[0].parts.filter(two => two.title == req.params.pathParam1);
  let arr = two[0].theory;

  arr.push(pdfFile);

  try {
    user.markModified('themes');
    user = await user.save();
    console.log(user);
    res.redirect('/themes/' + req.params.id + '/' + req.params.pathParam1);
  }
  catch {
    err => console.log(err);
  }

});

export default router;
