// interface SearchBarProps {
//     /** The text to display inside the button */
//     posts: string;
//     setSearchResults: boolean;
// }
const SearchBar = () => {
    return (
        <form className="flex flex-col mx-auto w-full max-w-md space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="typing your text here..." />
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ms-2 text-base font-medium">Search</button>
        </form>
    )
}
export default SearchBar

