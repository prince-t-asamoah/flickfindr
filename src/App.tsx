import { Link } from 'react-router-dom';
import './App.css';
import SearchIcon from './assets/search-icon.svg';
import MoviePoster from './assets/movie-poster-bg.jpg';

export default function App() {
    return (
        <div
            className="h-screen"
            style={{
                background: `url(${MoviePoster}) no-repeat, linear-gradient(#eb01a5, #d13531)`,
                height: '100%',
            }}
        >
            <div className="w-full h-screen backdrop-blur-sm flex flex-col">
                <header className="text-xl py-5 px-8 lg:py-10 ">
                    <h1 className="text-white font-cursive lg:text-4xl tracking-widest">
                        <Link to="/" title="Home">
                            Flickfindr
                        </Link>
                    </h1>
                </header>
                <div className="flex flex-col items-center flex-grow justify-between">
                    <main className="flex flex-col gap-6 items-center w-4/5 lg:w-2/5 pt-20 md:pt-60 lg:pt-16">
                        <h2 className="text-center text-2xl lg:text-4xl text-white font-semibold">
                            Find your favorite cinematic flicks
                        </h2>
                        <div className="w-full rounded-full flex">
                            <div className="border-2 border-deep-navy rounded-l-full flex-grow focus-within:bg-gray-100">
                                <input
                                    type="text"
                                    placeholder="Search for movies by title"
                                    className="text-slate-gray px-4 py-2 rounded-l-full outline-none w-full focus:bg-gray-100"
                                />
                            </div>
                            <button
                                type="button"
                                className="text-gray-200 bg-deep-navy lg:hover:bg-opacity-80 lg:transition-opacity p-2.5 rounded-r-full flex gap-1 items-center"
                                title="Search"
                            >
                                <img src={SearchIcon} className="w-5 h-5" />
                                <span className="hidden md:inline font-semibold">
                                    Search
                                </span>
                            </button>
                        </div>
                    </main>
                    <footer className="text-sm py-10 md:py-20 text-white">
                        <span>Designed and developed by </span>
                        <Link
                            to="https://twitter.com/asamoahpt"
                            target="_blank"
                            className=" font-semibold lg:hover:text-golden-rod lg:transition-colors"
                        >
                            @asamoahpt
                        </Link>
                    </footer>
                </div>
            </div>
        </div>
    );
}
