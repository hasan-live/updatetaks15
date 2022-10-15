
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { BeakerIcon } from '@heroicons/react/solid'
import About from './components/Pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Movies from './components/Pages/Movies/Movies';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'video.js/dist/video-js.css';
import Blogs from './components/Pages/Blogs';
import Movie from './components/Pages/Movies/Movie';
import Lives from './components/Pages/Lives/Lives';
import TvShows from './components/Pages/TvShows/TvShows';
import MyLists from './components/Pages/MyList/MyLists';
import NotFoundPage from './components/Pages/NotFound/NotFoundPage';
import Login from './components/Pages/Login/Login';




function App() {
  return (
    <div className="App overflow-hidden">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movie />} />
        <Route path="lives" element={<Lives />} />
        <Route path="mylists" element={<MyLists />} />
        <Route path="tvshows" element={<TvShows />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />

        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;