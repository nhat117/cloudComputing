import React from 'react'
import "tw-elements";
import data from "../data/welcome_carousel.json"
import MovieCarouselItem from './MovieCarouselItem';
import Image from 'next/image'
const MovieCarousel = () => {
    return (
        <>
            <div
                id="carouselExampleCrossfade"
                className="carousel slide carousel-fade relative xs:mt-40 md:mt-20"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 justify-center p-0 mb-4 hidden md:flex">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCrossfade"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCrossfade"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCrossfade"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active float-left w-full">
                        <a href="/movie/464052">
                            <Image
                                src="/card-img 1.png"
                                className="block w-full carousel-overlay"
                                alt="Wonder Woman: 1984"
                                width={1700}
                                height={648}
                                quality={100}
                                objectFit="cover"
                                objectPosition="center"
                            />
                            <div className="carousel-caption hidden md:block absolute bottom-5 py-5 mb-2 lg:mb-20 lg:pr-40pct xl:pr-50pct">
                                <p className="border-transparent border-gray-500 rounded-xl w-fit text-lg bg-gray-800 bg-opacity-50 px-3 py-2 backdrop-blur-lg text-warning-500"><i className="bi bi-star-fill text-lg"></i> 4.5</p>
                                <h1 className="text-5xl xl:text-6xl">Wonder Woman: 1984</h1>
                                <p>Wonder Woman finds herself battling two opponents, Maxwell Lord, a shrewd entrepreneur, and Barbara Minerva, a friend-turned-foe. Meanwhile, she also ends up crossing paths with her love interest.</p>
                                <button className="mt-2 rounded-xl bg-primary-400 hover:bg-primary-300
                                border px-5 py-3 w-fit border-transparent text-base font-medium text-white transition-colors flex"
                                type="button" href="/movie/464052"><img src="./watch_icon.svg"/>&nbsp;Watch trailer</button>
                            </div>
                            <div className="carousel-caption block md:hidden absolute py-0 mb-9 bottom-0">
                                <h1 className="text-md">Wonder Woman: 1984</h1>
                            </div>
                        </a>
                    </div>
                    {data &&
                        data.map((e, i) => {
                            return (
                                <MovieCarouselItem
                                    key={i}
                                    title={e.title}
                                    description={e.description}
                                    img={e.img}
                                    rating={e.rating}
                                    link={e.link}
                                />
                            );
                        })}
                </div>
                {/* <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </>
    )
}

export default MovieCarousel