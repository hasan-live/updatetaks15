import React from 'react';
import MyListFavouriteChannels from './MyListFavouriteChannels';
import MyListSliders from './MyListSliders';
import MyListWatchLater from './MyListWatchLater';
import MyListWatchMovies from './MyListWatchMovies';

const MyLists = () => {
    return (
        <>
           <MyListSliders></MyListSliders>
           <MyListWatchLater></MyListWatchLater>
           <MyListFavouriteChannels></MyListFavouriteChannels>
           <MyListWatchMovies></MyListWatchMovies>
        </>
    );
};

export default MyLists;