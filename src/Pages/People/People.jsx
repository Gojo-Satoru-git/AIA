import React from 'react'

import StudentList from './StudentList'
import AlumniList from './AlumniList'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

function People() {
  return (
    <>
    <Header />
    <StudentList />
    <AlumniList />
    <Footer />
    </>
    
  )
}

export default People
