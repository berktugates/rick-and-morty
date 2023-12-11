"use client"
import { Formik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div style={{ backgroundImage: `url('/login-background.png')` }} className="h-screen flex justify-center items-center bg-center bg-cover">        
        <div className="flex flex-col s:w-2/3 m:w-3/4 tablet:w-2/3 laptop:w-1/2 laptopL:w-1/3">
          <div id="login-box" className="bg-gray-200 bg-opacity-40 p-6 border  rounded-lg shadow-lg flex flex-col justify-center">
                <h1 className = {`text-gray-900 text-center s:text-2xl tablet:text-3xl font-bungee mt-4 mb-4 font-bold animate-pulse hover:transition-all`}>Welcome to the World of Rick and Morty!</h1>
                    <Formik
                        initialValues={{
                          name:'',
                          surname:'',
                          email:'',
                          password:''
                        }}
                        validationSchema={
                          Yup.object({
                          name : Yup.string().required("This field is required to be filled"),
                          surname : Yup.string().required("This field is required to be filled"),
                          email: Yup.string().email().required("This field is required to be filled"),
                          password: Yup.string().min(5,"Password must be at least 5 characters.").required("This field is required to be filled")
                        })}
                        onSubmit={(values, {setSubmitting, resetForm})=>{
                          console.log(values)
                          setTimeout(()=>{
                              setSubmitting(false);
                              resetForm();
                              if (values.name != null && values.surname != null && values.email != null && values.password != null) {
                                router.push('/home');
                              }
                          },1000)
                        }}
                    >
                      {
                        ({
                        values,
                        errors,
                        dirty,
                        isSubmitting,
                        handleSubmit,
                        touched,
                        handleChange,
                      }) => (
                        <>
                            <form className="flex flex-col" onSubmit={handleSubmit}>
                              <label htmlFor="name" className="mb-2 s:text-lg l:text-xl font-extrabold">
                                Name
                              </label>
                              <input
                                id="name"
                                type="text"
                                placeholder="Berktuğ"
                                className="border p-2 rounded-lg"
                                value={values.name}
                                onChange={handleChange}
                              />
                              {
                                errors.name && touched.name && (
                                  <div className="bg-red-500 text-white mt-1 p-1 rounded-lg w-1/2">
                                    <h1>{errors.name}</h1>
                                  </div>
                                )
                              }

                              <label htmlFor="surname" className="mb-2 s:text-lg l:text-xl font-extrabold">
                                Surname
                              </label>
                              <input
                                id="surname"
                                type="text"
                                placeholder="Ateş"
                                className="border p-2 rounded-lg"
                                value={values.surname}
                                onChange={handleChange}
                              />
                              {
                                errors.surname && touched.surname && (
                                  <div className="bg-red-500 text-white mt-1 p-1 rounded-lg w-1/2">
                                    <h1>{errors.surname}</h1>
                                  </div>
                                )
                              }

                              <label htmlFor="email" className="mb-2 s:text-lg l:text-xl font-extrabold">
                                Email
                              </label>
                              <input
                                id="email"
                                type="email"
                                placeholder="berktugsosyal@gmail.com"
                                className="border p-2 rounded-lg"
                                value={values.email}
                                onChange={handleChange}
                              />
                              {
                                errors.email && touched.email && (
                                  <div className="bg-red-500 text-white mt-1 p-1 rounded-lg w-1/2">
                                    <h1>{errors.email}</h1>
                                  </div>
                                )
                              }

                              <label htmlFor="password" className="mb-2 mt-2 s:text-lg l:text-xl font-extrabold">
                                Password
                              </label>
                              <input
                                id="password"
                                type="password"
                                className="border p-2 mb-2 rounded-lg"
                                value={values.password}
                                onChange={handleChange}
                              />
                              {
                                errors.password && touched.password && (
                                  <div className="bg-red-500 text-white mt-1 p-1 rounded-lg w-1/2">
                                    <h1>{errors.password}</h1>
                                  </div>
                                )
                              }

                              <div className="flex justify-center items-center">
                                <button  className="bg-cyan-400 text-white s:p-3 s:mt-2 tablet:p-4 rounded-lg cursor-pointer hover:bg-cyan-500 disabled:opacity-75" type="submit" disabled={!dirty || isSubmitting}>
                                  Discover!
                                </button>
                              </div>
                            </form>
                        </>
                      )
                    }    
                    </Formik>        
              </div>
          </div>
      </div>
    </>
  )
}
