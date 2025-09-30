import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StudentList from './StudentList'
import AlumniList from './AlumniList'

function People() {
  return (
    <>
    <Header page={'People'} />
    <StudentList />
    <AlumniList />
    <Footer />
    </>
    
  )
}

export default People