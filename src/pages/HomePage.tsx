import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import MoviePoster from './assets/movie-poster-bg.jpg';

export default function HomePage() {
    return (
        <div
            className="h-screen"
            style={{
                background: `url(${MoviePoster}) no-repeat, linear-gradient(#eb01a5, #d13531)`,
                height: '100%',
            }}
        >
            <div className="w-full h-screen backdrop-blur-sm flex flex-col">
                <Header />
                <div className="flex flex-col items-center flex-grow justify-between">
                    <main className="flex flex-col gap-6 items-center w-4/5 lg:w-2/5 pt-20 md:pt-60 lg:pt-16">
                        <h2 className="text-center text-2xl lg:text-4xl text-white font-semibold">
                            Find your favorite cinematic flicks
                        </h2>
                        <SearchInput />
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
