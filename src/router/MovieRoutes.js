import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Trending } from '../pages/Trending'
import {Home} from '../pages/Home'
import {Top10} from '../pages/Top10'
import {Login} from '../pages/Login'
import { Movie } from '../pages/Movie'

export const MovieRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Trending' element={<Trending/>}/>
          <Route path='/Top10' element={<Top10/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/*' element={<Home/>}/>
          <Route path='/movie/:movieId' element={<Movie/>}/>
        </Routes>
    </>
  )
}
