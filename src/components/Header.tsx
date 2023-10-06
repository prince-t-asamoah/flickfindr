import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="text-xl py-5 px-8 lg:py-10 ">
            <h1 className="text-white font-cursive lg:text-4xl tracking-widest lg:hover:text-gray-400 lg:hover:transition-colors lg:hover:duration-500">
                <Link to="/" title="Home">
                    Flickfindr
                </Link>
            </h1>
        </header>
    );
}
