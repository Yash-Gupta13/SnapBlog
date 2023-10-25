import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwriteService/auth'
import {logout } from '../../store/authSlice'

const LogutBtn = () => {
    const dispatch = useDispatch();

    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
  return (
    <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full text-black'>Logout</button>
  )
}

export default LogutBtn