const express = require('express')
const path = require('path')
const router = express.Router()
const blogs=require('../Data/blogs')

router.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home')
})
router.get('/blogs',(req,res)=>{
    // blogs.forEach(element => {
    //     console.log(element.title)
    // });
    // res.sendFile(path.join(__dirname,'../templates/blogs.html'))
    res.render('blogs.handlebars',{blogs:blogs})
})
router.get('/blogpost/:slug',(req,res)=>{   //     "/: slug"
    myblog=blogs.filter(e=>{
        return e.slug==req.params.slug
    })
   // console.log(myblog)
   // res.sendFile(path.join(__dirname,'../templates/blogpost.html'))
   res.render('blogpost',{title:myblog[0].title,content:myblog[0].content,courseDetails:myblog[0].courseDetails,duration:myblog[0].duration})
})
module.exports=router;