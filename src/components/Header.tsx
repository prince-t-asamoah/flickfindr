import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="py-5 px-8 lg:py-8">
            <h1 className="text-white font-cursive text-xl lg:text-2xl tracking-widest lg:hover:text-gray-400 lg:hover:transition-colors lg:hover:duration-500">
                <Link to="/" title="Home">
                    Flickfindr
                </Link>
            </h1>
        </header>
    );
}
