"use client"
import { Formik } from "formik"
import * as Yup from "yup"

export default function Home() {
  return (
    <>
      <div style={{ backgroundImage: `url('/login-background.png')` }} className="h-screen flex justify-center items-center bg-center bg-cover">        
        <div className="flex flex-col">
          <div id="login-box" className="bg-gray-200 bg-opacity-40 p-6 border  rounded-lg shadow-lg flex flex-col justify-center">
            <h1 className = {`text-gray-900 text-3xl font-bungee mt-4 mb-4 font-bold`}>Welcome to the World of Rick and Morty!</h1>
                <div className="flex justify-center">
                    <Formik
                        initialValues={{
                          email:'',
                          password:''
                        }}
                        validationSchema={Yup.object({
                          email: Yup.string().email().required(),
                          password: Yup.string().min(5).required()
                        })}
                        onSubmit={(values, {setSubmitting, resetForm})=>{
                          console.log(values)
                          setTimeout(()=>{
                              setSubmitting(false);
                              resetForm();
                          },1000)
                        }}
                    >
                      {({
                      values,
                      errors,
                      dirty,
                      isSubmitting,
                      handleSubmit,
                      handleReset,
                      handleChange,
                    }) => (
                      <>
                        <div>
                          <form onSubmit={handleSubmit}>
                            <label htmlFor="email" className="mb-2 text-xl font-extrabold">
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="berktugsosyal@gmail.com"
                              className="border p-2 rounded-lg w-full"
                              value={values.email}
                              onChange={handleChange}
                            />
                            {errors.email && (
                              <div>
                                <h1>Girdiğiniz mail gerçek bir mail değil</h1>
                              </div>
                            )}
                            <label htmlFor="password" className="mb-2 mt-2 text-xl font-extrabold">
                              Password
                            </label>
                            <input
                              id="password"
                              type="password"
                              className="border p-2 mb-2 rounded-lg w-full"
                              value={values.password}
                              onChange={handleChange}
                            />
                            {errors.password && (
                              <div>
                                <h1>Parolanız kriterleri karşılamıyor.</h1>
                              </div>
                            )}
                            <div className="flex justify-center items-center">
                              <button className="bg-cyan-400 text-white p-4 rounded-lg cursor-pointer hover:bg-cyan-500" type="submit" disabled={!dirty || isSubmitting}>
                                Login
                              </button>
                            </div>
                        </form>
                        </div>
                      </>
                    )}    
                    </Formik>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}
