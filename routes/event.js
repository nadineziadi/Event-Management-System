const express = require ('express');
const router =  express.Router() ; 
const Event = require('../models/event');
const multer = require('multer');

const mystorge = multer.diskStorage({

    destination:'./uploads',
    filename:(req,file,redirect)=>{
        let date=Date.now() ;  
        let fl = date+'.+file'.mimetype.split('/')[1];
        redirect(null,fl);
        filename= fl ; 
    }
})

//middleware

const upload = multer({storage : mystorge})




app.post('ajout',upload.any('image') ,(req,res)=>{
let data = req.body ; 
let event = new Event (data) ;
 // date event 
event.date = new Date() ; 

event.image=filename ;
event.description=desp ;

event.save() 
.then(
    (saved)=> {
        filename = ''; 
        desp='';
        res.status(200).send(saved) ; 
    }
   
)
.catch(
    err=>{
        res.status(400).send(err) ;  
    }
)


})

app.get('all',(req,res)=>{
   Event.find({}) 
  .then(
    (events)=> {
      res.status(200).send(events);   
    }
  )
  .catch(
    (err)=>{
     res.status(400).send(err);  
    }
  )
})

// find by event title 
app.get('getbytitle/:title',(req,res)=>{
let title = req.params.title 
Event.findOne({_title : title}) 
  .then(
    (events)=> {
      res.status(200).send(events);   
    }
  )
  .catch(
    (err)=>{
     res.status(400).send(err);  
    }
  )

})

//find by date event
app.get('getbydate/:date',(req,res)=>{
    let dtae = req.params.date 
    Event.find({_date : date}) 
      .then(
        (events)=> {
          res.status(200).send(events);   
        }
      )
      .catch(
        (err)=>{
         res.status(400).send(err);  
        }
      )
})

app.delete('supprimer/:title',(req,res)=>{
    let title = req.params.title 
    Event.findOneAndDelete()({_title : title}) 
      .then(
        (event)=> {
          res.status(200).send(event);   
        }
      )
      .catch(
        (err)=>{
         res.status(400).send(err);  
        }
      )
})

app.put('modifier/:title',upload.any('image'),(req,res)=>{
    let title = req.params.title 
    let data = req.body ;


    if(filename.length > 0 && desp.length>0 ){
    data.image=filename ;
    data.description =desp ; 
    }

    Event.findOneAndUpdate()({_title : title},data) 
      .then(
        (event)=> {
            filename='';
            desp='';
          res.status(200).send(event);   
        }
      )
      .catch(
        (err)=>{
         res.status(400).send(err);  
        }
      )
})





module.exports=router ; 