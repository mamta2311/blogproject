import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { render } from 'react-dom';


const PostForm = (props) => {
    const [postTitle, setpostTitle] = useState('');
    const [textEdit, settextEdit] = useState('');

    const addPost = (e) =>{
        e.preventDefault();
        let post = {
            "id" : 6,
            "title" : title,
            "textEdit" : textEdit
        }
        console.log(post);
        props.submitHandler(post);
    }

  return (
    
<Form onSubmit={addPost}>
    <Form.Group className="mb-3" controlId="formpostTitle">
         <Form.Label>postTitle</Form.Label>
      <Form.Control type="text" placeholder="Enter post title" value={postTitle}
       onChange ={event=>setpostTitle(event.target.value)} />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formtextEdit">
      <Form.Label>Text Edit</Form.Label>
      <Form.Control type="text" placeholder="Enter text Edit" value={textEdit}
      onChange ={event=>settextEdit(event.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  
  )
}


export default PostForm