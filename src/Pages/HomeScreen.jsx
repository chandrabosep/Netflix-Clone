import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import request from '../request'
import Row from '../Components/Row'

const HomeScreen = () => {
  return (
    <div className='bg-black'>
        <Navbar/>
        <Banner/>
        <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
        />
        <Row
        title='Action Movies'
        fetchUrl={request.fetchActionMovies}
        />
        <Row
        title='Horror Movies'
        fetchUrl={request.fetchHorrorMovies}
        />
        <Row
        title='Documentaries'
        fetchUrl={request.fetchDocumentaries}
        />
        <Row
        title='Comedy Movies'
        fetchUrl={request.fetchComedyMovies}
        />
        <Row
        title='Romance Movies'
        fetchUrl={request.fetchRomanceMovies}
        />
    </div>
  )
}

export default HomeScreen
