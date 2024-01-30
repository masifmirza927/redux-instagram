import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const loginSchema = yup
  .object({
    email: yup.string().email("Email is required for login").required(),
    password: yup.string().required()
  }).required()

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors }, } = useForm({
    resolver: yupResolver(loginSchema),
  });


  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <div className="card w-50 mx-auto">
        <div className="card-header"><h4 className="text-center">Login Form</h4></div>
        <div className="card-body">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  {...register("email")}
                />
              </div>
              {
                (errors.email) ? <p className='alert alert-danger p-1 fs-6'>{errors.email?.message}</p> : null
              }

              {/* {errors.email?.type === "maxLength" && (
                <p className="alert alert-danger">Maximum 10 characters allowed</p>
              )} */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  {...register("password")}
                />
              </div>
              {
                (errors.password) ? <p className='alert alert-danger'>{errors.password?.message}</p> : null
              }
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login