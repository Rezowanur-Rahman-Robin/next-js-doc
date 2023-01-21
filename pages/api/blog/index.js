import { blogs } from "../../../constants/blogs";

export default function handler(req,res){


  if(req.method ==='GET'){
    const posts = blogs

  if(posts.length>0){
    res.status(200).send({
      success: true,
      message: "Blog getting successfully",
      data: posts,
    });
  }else{
    res.status(404).send('Blog not found!');
  }
  }else if(req.method ==='POST'){
    console.log("sadf")
    const bodyData = JSON.parse(req.body);
    
    console.log("bodyData",bodyData)
    
    blogs.push(bodyData)


  if(blogs.length>0){
    res.status(200).send({
      success: true,
      message: "Blog Added successfully",
      data: blogs,
    });
  }else{
    res.status(500).send('Blog Addition Failed!');
  }
}

}