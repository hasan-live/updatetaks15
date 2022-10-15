import React from 'react';
import AppAds from './AppAds';
import MainContent from './MainContent';
import Sports from './Sports';
import WhatsMovie from './WhatsMovie';
import MoviesSale from '../MoviesSale/MoviesSale';
import MovieSection from '../Movies/MovieSection';
import MovieTrendingSection from '../Movies/MovieTrendingSection';
import AllSubCategories from './AllSubCategories';
import HomeSlider from './HomeSlider';
import TvShowsHome from '../TvShows/TvShowsHome';


const Home = () => {
    return (
        <>
            <HomeSlider></HomeSlider>
            <AllSubCategories></AllSubCategories>
            <MovieTrendingSection></MovieTrendingSection>
            <MainContent></MainContent>
            <MoviesSale></MoviesSale>
            <Sports></Sports>
            <MovieSection></MovieSection>
            <TvShowsHome></TvShowsHome>
            <AppAds></AppAds>
            <WhatsMovie></WhatsMovie>
        </>
    );
};

export default Home;