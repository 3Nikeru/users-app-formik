import {Link, Outlet} from 'react-router-dom';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

  const handleSubmit = (values, actions) =>{
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(values, null, 3),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
        .then(res => res.json())
        .then(data => console.log('data', data))
        .catch(err=> console.log(err))

        actions.setSubmitting(false);
  }


   return (
    <>
        <h2>Post</h2>
        <Link to="/">Home</Link>
    <div style={{textAlign: '-webkit-center'}}>
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
    <div>
      <Outlet/>
    </div>
    </>
    );
}

export default Posts;