import { Link } from 'react-router-dom';
import './App.css';
import SearchIcon from './assets/search-icon.svg';

export default function App() {
    return (
        <div className="h-screen flex">
            <div className="flex-grow flex flex-col items-center justify-between">
                <header className="flex flex-col gap-6 items-center w-4/5 lg:w-2/5 mt-40 md:60">
                    <div className="text-center">
                        <h1 className="text-deep-navy font-cursive text-3xl lg:text-4xl tracking-widest lowercase">
                            Flickfindr
                        </h1>
                        <h2 className="text-sm text-steel-gray">
                            Discover Cinematic Treasures
                        </h2>
                    </div>
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
                </header>
                <footer className="text-sm p-4 md:p-10 text-deep-navy">
                    <span>Designed and developed by </span>
                    <Link
                        to="https://twitter.com/asamoahpt"
                        target="_blank"
                        className="text-ocean-blue font-semibold lg:hover:text-golden-rod lg:transition-colors"
                    >
                        @asamoahpt
                    </Link>
                </footer>
            </div>
        </div>
    );
}
