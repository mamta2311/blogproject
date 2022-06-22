import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { render } from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const PostForm = (props) => {
    const [postTitle, setpostTitle] = useState('');
    const [textEdit, settextEdit] = React.useState(() => EditorState.createEmpty());

    const addPost = (e) =>{
        e.preventDefault();
        let post = {
            "id" : 6,
            "title" : postTitle,
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
      <div className='myEditorCntr'>
      <Editor editorState={textEdit} onChange={settextEdit} /></div>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  
  )
}


export default PostForm