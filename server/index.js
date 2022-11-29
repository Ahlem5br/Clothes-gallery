const express = require('express');
const path = require('path');
const db = require("../database/index")
const cors = require("cors")
const PORT = 3000;
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "..", 'client', 'dist')));

// GET All the clothes
app.get('/home', (req, res) => {
  res.send("welcome home")
})
app.get('/clothes', (req, res) => {
  db.query('SELECT * FROM clothes', function (err, result) {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
}
)

// CREATE a cloth
app.post('/clothes', (req, res) => {
  db.query(`INSERT INTO clothes (description ,price,image) VALUES ("${req.body.description}","${req.body.price}","${req.body.image}")`,
    (err, result) => {
      if (err) {
        res.send(err)
      } else {
        res.send(result)
      }
    })
})

// DELETE a cloth by id
app.delete('/clothes/:ids',(req,res)=>{
  console.log(req.params)
  db.query(`DELETE FROM clothes WHERE id=${req.params.ids}`,(err,result)=>{
    if (err){
      console.log(err)
    }else{
      res.send("no way you deleted me")
      console.log("no way you deleted me")
    }
  })
})

// UPDATE a description, a price and an image of cloth id i put its id in input
// app.put('/clothes/:ids',(req,res)=>{
//   db.query(`UPDATE clothes SET description ="${req.body.description} ",price="${req.body.price}" ,image="${req.body.image}" WHERE id=${req.params.ids}`,(err,result)=>{
//     if (err){
//       console.log(err)
//     }else{
//       res.send("updated yey!")
//     }
//   })
// })


app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
