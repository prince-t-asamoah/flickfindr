import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

export default function SearchPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="pb-3 lg:pb-0 bg-ocean-blue flex flex-col lg:flex-row lg:px-2 items-center">
                <Header />
                <div className="w-11/12 lg:w-6/12">
                    <SearchInput />
                </div>
            </div>
            <main className="flex-grow text-white">
                <h2 className="bg-deep-navy p-2 px-5 md:px-8 md:py-4 lg:px-56 font-semibold">
                    Search results
                </h2>
            </main>
        </div>
    );
}
