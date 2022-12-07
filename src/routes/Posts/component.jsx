import {Link} from 'react-router-dom';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import './style.scss';

const Posts = () =>{
    const initialValues = { 
      title: '', 
      body: '', 
      userId: ''
    }

    const SignupSchema = Yup.object().shape({
      title: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
      body: Yup.string()
        .min(5, 'Too Short!')
        .max(200, 'Too Long!')
        .required('Required'),
      userId: Yup.string()
        .required('Required')
    });
    const [user_data, setUser] = useState([]);
    const handleSubmit = (values, actions) =>{
          const newUser = {
            title: values.title, 
            body: values.body, 
            userId: values.userId
          }
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(values, null, 3),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
        .then(res => res.json())
        .then(setUser([...user_data, newUser]))
        .catch(err=> console.log(err))
        actions.setSubmitting(false);
  }

    console.log({user_data})
   return (
    <>
        <h2>Post</h2>
        <Link to="/">Home</Link>
    <div className="form" style={{textAlign: '-webkit-center'}}>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
       {({errors, touched}) => (
         <Form>
           <Field type="title" name="title" placeholder="Enter title.." />
           <ErrorMessage name="title" component="span"/>
           <Field as="textarea" name="body" placeholder="Enter body.." />
           <ErrorMessage name="body"  component="span"/>
           <Field as="select" name="userId">
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="6">6</option>
             <option value="7">7</option>
             <option value="8">8</option>
             <option value="9">9</option>
             <option value="10">10</option>
           </Field>
           <ErrorMessage name="userId" component="span" />
           <button type="submit" >Submit</button>
         </Form>
       )}
     </Formik>
     
    </div>
    <div className='userBlock'>
      {user_data.map(user => (
        <div
          className='user'
          key={user.userId}
          >
          <h3>{user.title}</h3>
          <p>{user.body}</p>
          <p>{user.userId}</p>
        </div>
      ))}
    </div>
    </>
    );
}

export default Posts;