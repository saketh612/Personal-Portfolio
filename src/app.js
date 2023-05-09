const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/index.html'));
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'pages/contact.html'));
})

app.get('/CV',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/SAF.pdf'));
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on https://localhost:${port}`);
});