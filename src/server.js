const app = require('./app');
const PORT = process.env.PORT || 5001;

app.get('/healthcheck', (req,res)=>{
    res.json({message:'success'});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});