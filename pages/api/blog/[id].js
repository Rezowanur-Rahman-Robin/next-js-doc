import { blogs } from "../../../constants/blogs";

export default function handler(req,res){
  const {id} = req.query;

  let blog = blogs.filter((item)=>{
    return item.title === id;
  })

  if(blog.length>0){
    res.status(200).send({
      success: true,
      message: "Blog getting successfully",
      data: blog[0],
    });
  }else{
    res.status(404).send('Blog not found!');
  }
  
}