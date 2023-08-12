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
        isLargeRow
        />
        <Row
        title='Horror Movies'
        fetchUrl={request.fetchHorrorMovies}
        isLargeRow
        />
        <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={request.fetchDocumentaries}
        isLargeRow
        />
        <Row
        title='Comedy Movies'
        fetchUrl={request.fetchComedyMovies}
        isLargeRow
        />
        <Row
        title='Romance Movies'
        fetchUrl={request.fetchRomanceMovies}
        isLargeRow
        />
    </div>
  )
}

export default HomeScreen
