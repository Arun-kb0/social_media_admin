import React, { useEffect, useState } from 'react'
import StyledInput from '../../components/basic/StyledInput'
import Button from '../../components/basic/Button'
import { AiOutlineUser } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/features/auth/authActions'
import { useNavigate } from 'react-router-dom'
import AlertBox from '../../components/basic/AlertBox'


const Auth = () => {
  const initialAuthState = {
    email: '',
    password: ''
  }

  const initialErrorState = {
    email: false,
    password: false,
    isError: false
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [authData, setAuthData] = useState(initialAuthState)
  const [inputError, setInputError] = useState(initialErrorState)

  const { userId, error, loading } = useSelector(state => state.auth)



  const validate = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~@$!%*#?&])[A-Za-z\d~@$!%*#?&]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setInputError({
      email: !emailRegex.test(authData.email),
      password: !passwordRegex.test(authData.password),
      isError: !emailRegex.test(authData.email) ||
        !passwordRegex.test(authData.password)
    })
    return inputError.isError ? true : false
  }


  //* password  Admin123##
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(inputError)
    console.log(error?.response.data?.message)

    if (!inputError.isError && authData.email.length > 1) {
      console.log("res")
      dispatch(login({ authData }))
      setAuthData(initialAuthState)
    }
  }



  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    validate()
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value
    })
  }


  useEffect(() => {
    userId && navigate('/')
  }, [userId])



  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <AlertBox
        error={error?.response.data?.message}
        isError={inputError}
      />

      <form className='shadow-2xl px-10 py-16  rounded-xl ' onSubmit={handleSubmit}>
        <div className='flex justify-center'>
          <AiOutlineUser size={40} className='rounded-full text-white  bg-indigo-500' />
        </div>

        <div className='py-5 '>
          <StyledInput
            id={1}
            name={"email"}
            placeholder="Username"
            type="email"
            label={"Email"}
            value={authData.email}
            onChange={handleChange}
            isError={inputError.email}
          />

          <StyledInput
            id={2}
            name={"password"}
            placeholder="Password"
            type="password"
            label={"Password"}
            value={authData.password}
            onChange={handleChange}
            isError={inputError.password}
          />
        </div>

        <div className=' flex justify-center items-center'>
          <Button name="Login" />
        </div>
      </form>
    </div>
  )
}

export default Auth