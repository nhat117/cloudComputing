import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Head from 'next/head';
import moment from 'moment'
import MovieHeader from '../../components/MovieDetails/MovieHeader';
import MovieOverview from '../../components/MovieDetails/MovieOverview';

export async function getServerSideProps(context) {
    const movieID = context.params.id;
    const apiurl = process.env.MV_DETAIL + movieID + "?api_key=" + process.env.TMDB_API_KEY + "&language=en-US"
    const imgurl = process.env.IMG_URL
    const castcrewurl = process.env.MV_DETAIL + movieID + "/credits" + "?api_key=" + process.env.TMDB_API_KEY + "&language=en-US"
    const res = await fetch(
        apiurl,
        {
            method: 'GET'
        }
    )
    const res_castcrew = await fetch(
        castcrewurl,
        {
            method: 'GET'
        }
    )
    const data = await res.json()
    const data_castcrew = await res_castcrew.json()

    return {
        props: {data, data_castcrew, imgurl, movieID}, // will be passed to the page component as props
    }
}

const MoviePage = ({data, data_castcrew, imgurl, movieID}) => {
    const poster = imgurl + data.poster_path
    const backdrop = imgurl + data.backdrop_path
    const bg = 'linear-gradient(180deg, rgba(54, 44, 146, 0.4) 0%, rgba(18, 98, 151, 0.4) 100%), url(' + backdrop + ')' 
    const year = moment(data.release_date).format("YYYY")
    const genres = data.genres
    const crewArr = data_castcrew && data_castcrew.crew
    const castArr = data_castcrew && data_castcrew.cast
    const directors = crewArr && crewArr.filter((el) => el.job === "Director")
    const writers = crewArr && crewArr.filter((el) => el.department === "Writing")
    const starrings = castArr && castArr.filter((el) => el.order < 3)
    const pageTitle = data.title + " - EXSPER"
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Home to the movie experts" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <Header/>

            {/** 
             * Backdrop and Title
            */}
            <MovieHeader bg={bg} title={data.title} year={year} genres={genres} rating={data.vote_average.toFixed(1)}/>
             {/** 
             * Poster and Basic details
            */}
            <MovieOverview poster={poster} 
            tagline={data.tagline} 
            overview={data.overview} 
            release_date={data.release_date} 
            runtime={data.runtime} 
            starrings={starrings} 
            directors={directors}
            writers={writers}
            />
        </>
    )
}

export default MoviePage