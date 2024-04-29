import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Row from '../Components/Row'
import Home from './Home'
import Tvshows from './TvShows'
import Movies from './Movies'
import News from './Popular'
import List from './MyList'
import api from '../APIs/Api'


import { BrowserRouter,Routes,Route } from 'react-router-dom'
const NetflixMain = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='' />
        <Route path='/Tvshows' />
        <Route path='/Movies' />
        <Route path='/News' />
        <Route path='/MyList' />
        <Route path='/Popular' />
        <Route path='/List' />


      </Routes>
      </BrowserRouter>
      {/* <img src="/src/assets/banner-image.jpg" alt="" style={{height:'875px',width:'215vh'}} /> */}
      {/* <Banner/> */}
      <Banner fetchBanner={api.fetchTrending}/>
      <Row title='Top Trending Movies' fetchUrl={api.fetchTrending}/>
      <Row title='Top Rated Movies' fetchUrl={api.fetchTopratedmovies}/>
      <Row title='Netflix Originals' fetchUrl={api.fetchNetflixoriginals}/>
      <Row title='Comedy Movies' fetchUrl={api.fetchComedymovies}/>
      <Row title='Romantic Movies' fetchUrl={api.fetchRomanticmovies}/>
      <Row title='Action Movies' fetchUrl={api.fetchActionmovies}/>
      <Row title='Horror Movies' fetchUrl={api.fetchHorrormovies}/>
      <Row title='Documentary Movies' fetchUrl={api.fetchDocumentaries}/>

    </div>
  )
}

export default NetflixMain