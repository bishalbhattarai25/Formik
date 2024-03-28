import { Formik,Form,Field,ErrorMessage } from "formik";
import React from "react";
import * as yup from 'yup'
import './App.css'
const schema=yup.object().shape({
  firstname:yup.string().required('it is required'),
  lastname:yup.string().required("it is required"),
  email:yup.string().email("not a valid email").required("it is required")
})
function App() {
  const formData=[
    {
        label: "Firstname",
        type:"text",
        placeholder: "Enter you Firstname",
        api: "firstname"
    },
    {
        label: "Last Name",
        type: "text",
        placeholder: "Enter you Last Name",
        api: "lastname"
    },{
        label: "Email",
        type:"email",
        placeholder: "Enter you Email",
        api: "email"
    },{
        label: "Password",
        type:"password",
        placeholder: "password",
        api: "password"
    } ]

  return (
    <>
      <Formik 
            initialValues={{
                firstname:"",
                lastname:""
            }}
            validationSchema={schema}
            onSubmit={(values)=>{
                    console.log(values);
            }}
            
            >
                {({handleSubmit})=>{
                    return(

                        <Form onSubmit={handleSubmit} className="p-5 bg-slate-100 h-fit w-fit">
                            <div className="text-center text-2xl raleway font-bold p-10 ">Sign Up Form</div>
            <div className="grid grid-cols-2 w-fit h-fit  gap-4">
                {
                    formData.map((val,i)=>{
                        return(
                         <>
                            <div className="text-black flex flex-col gap-2 " key={i}>
                                <label htmlFor=""> {val.label}</label>
                                        <Field name={val.api} type={val.type} placeholder={val.placeholder} 
                                        className="border-2 border-gray-400 px-5 py-1 rounded-md" />
                                        <ErrorMessage name={val.api} component='div' className="text-red-500" />
                            </div>
                            </>
                        )
                    })
                }
            </div>
        <button type="submit" className="bg-blue-700 text-white p-2 px-5 mt-5">submit</button>
</Form>
                    )
                }}
            
 </Formik>
    </>
  )
}

export default App
