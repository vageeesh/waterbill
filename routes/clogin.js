const express = require('express');
const router = express.Router();

const Items = require('../models/schema_for_cust_login');

router.post('/login',(req,res) => {

  /* Items.find()
     .then(items => res.json(items)) */
     Items.find({
       id: req.body.cid
     },(err,succuss)=> {
       if(err) {
         return res.send({

           suc: false,
           msg: 'Server Error'
         })
       }
       else if(succuss) {
         if(succuss.length!=1) {
           res.end('Invalid Cust_id')
         }
         else {
            const user=succuss[0];
            console.log('servr_cust-id_is',user);
              console.log('servr_cust_user',user['id']);

             res.send({
              st: true,
              c_id: user['id'],
              msg: 'Valid Cust_id'
            })
            /*return res.end({
                suc: true,
                msg: 'SuccussFull Login'
            }); */
         }
       }
     })
});

router.post('/register',(req,res) => {
  const { body }=req;
  console.log('servr_+body_is',body);

  const newItem= new Items({
    id : req.body.cid
  });
  newItem.save().then(items => res.json(items));
});

router.post('/savewaterusage',(req,res) => {
  const { body }=req;
  console.log('servr_+body_is',body);

  var updatedata = { amount: req.body.amount, year:req.body.year, month:req.body.month, date:req.body.date};

  Items.update(
    { id : req.body.cid },
    { $push : { wateruse: updatedata } },
    function (err, done) {
      if (err) {
        console.error(err);
      } else {
        res.send('ok');
      }
    });
});

router.post('/retrieve',(req,res) => {

  Items.find(

    // Get just the docs that contain a shapes element where color is 'red'
    /*{$match: {'wateruse.month':  req.body.month}},
    {$project: {
        wateruse: {$filter: {
            input: '$wateruse',
            as: 'wateruse',
            cond: {$eq: ['$$wateruse.month',  req.body.month]}
        }},
        _id: 0
    }} */
     { "wateruse.month" : req.body.month }, {"wateruse.$" : 1},{ "wateruse.amount" : 1 , _id: 0 }
   ,
    (err,succuss)=> {
    if(err) {
      return res.send({
        suc: false,
        msg: 'Server Error'
      })
    }
    else if(succuss) {
      if(succuss.length!=1) {
        res.end('No result found')
      }
      else {
         const user=succuss[0];
          console.log(user);

          res.send({
           dat: user,
           msg: 'Valid Cust_id'
         })
      }
    }
  })
});


module.exports = router;
