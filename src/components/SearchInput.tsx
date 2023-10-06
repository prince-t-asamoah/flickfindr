import SearchIcon from '../assets/search-icon.svg';

export default function SearchInput() {
    return (
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
                className="text-gray-200 bg-deep-navy lg:hover:bg-opacity-80 lg:transition-opacity lg:duration-700 p-2.5 rounded-r-full flex gap-1 items-center"
                title="Search"
            >
                <img src={SearchIcon} className="w-5 h-5" />
                <span className="hidden md:inline font-semibold">Search</span>
            </button>
        </div>
    );
}
