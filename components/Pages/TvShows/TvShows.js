import React from 'react';
import TvShowBanglaDubbings from './TvShowBanglaDubbings';
import TvShowDramaSales from './TvShowDramaSales';
import TvShowKolkataDramas from './TvShowKolkataDramas';
import TvShowMostPopulars from './TvShowMostPopulars';
import TvShowSliders from './TvShowSliders';
import TvShowsPopularSeries from './TvShowsPopularSeries';
import TvShowTranding from './TvShowTranding';

const TvShows = () => {
    return (
        <>
          <TvShowSliders></TvShowSliders>  
          <TvShowTranding></TvShowTranding>
          <TvShowDramaSales></TvShowDramaSales>
          <TvShowMostPopulars></TvShowMostPopulars>
          <TvShowBanglaDubbings></TvShowBanglaDubbings>
          <TvShowKolkataDramas></TvShowKolkataDramas>
          <TvShowsPopularSeries></TvShowsPopularSeries>
        </>
    );
};

export default TvShows;