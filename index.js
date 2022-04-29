const express = require('express');
const cors =require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res)=>{
    res.send('geekki oii hrrrrrr gekki')
});

const users = [
    {id : 1, name: 'tahia', email : 'tahia@com', phone : ' 010101010101'},
    {id : 2, name: 'musa', email : 'musa@com', phone : ' 010101010101'},
    {id : 3, name: 'nafis', email : 'nafis@com', phone : ' 010101010101'},
    {id : 4, name: 'tahamid', email : 'tahamid@com', phone : ' 010101010101'},
    {id : 5, name: 'hasib', email : 'hasib@com', phone : ' 010101010101'},
    {id : 6, name: 'niha', email : 'niha@com', phone : ' 010101010101'},
    {id : 7, name: 'ajis', email : 'ajis@com', phone : ' 010101010101'}
]

app.get('/users',(req,res)=>{
   if(req.query.name){
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
    res.send(matched);
   }
   else{
    res.send(users);
   }
    

})

app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id =req.params.id;
    const user = users.find(u=> u.id ==id);
    res.send(user)
})

app.post('/user', (req,res) =>{
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})





app.listen(port,()=>{
    console.log('listen arolisten',port)
})