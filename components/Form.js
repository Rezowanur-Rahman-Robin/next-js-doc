import React, { useState } from 'react';
import { BASE_URL, endpoint } from '../constants/api';

const Form = ({show,setShowModal}) => {
  //console.log(show);
  const [form,setForm] = useState({})


  const closeModal = (e)=> {
    e.preventDefault()
    setShowModal(false)
  }


const postNewBlog = async()=>{
  console.log(form)
  const res = await fetch(`${BASE_URL}${endpoint.blog}`, {
    method: "POST",
    mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',                  
    },
    body: JSON.stringify(form)
});
  const resJson = await res.json()
  if(resJson){
    console.log(resJson)
    setShowModal(false)
  }
}
  return (
    <>
<div className={show? "fixed z-10 overflow-y-auto top-0 w-full left-0 " : "fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"} id="modal">
  <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-900 opacity-75" />
    </div>
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <label>Title</label>
        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3"
         onChange={(e)=>{
          setForm({...form,title:e.target.value})
         }}
        />
        <label>Image Url</label>
        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3"
        onChange={(e)=>{
          setForm({...form,image:e.target.value})
         }}
        />

        <label>Content</label>
        <input type="text" className="w-full bg-gray-100 p-5 mt-2 mb-3"
        onChange={(e)=>{
          setForm({...form,content:e.target.value})
         }}
        />
      </div>
      <div className="bg-gray-200 px-4 py-3 text-right">
        <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={closeModal}><i className="fas fa-times"></i> Cancel</button>
        <button type="button" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2" onClick={postNewBlog} ><i className="fas fa-plus"></i> Post</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Form