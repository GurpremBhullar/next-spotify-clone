import { 
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
} from "@heroicons/react/outline";


function Sidebar() {
    return (
        <div className="text-gray-500 p-5 text-sm">
            <div>
            <button className="flex items-center space-x-2">
                <HomeIcon className="h-5 w-5"/>
                <p>Home</p>
            </button>
            
            <button className="flex items-center space-x-2">
                <SearchIcon className="h-5 w-5"/>
                <p>Search</p>
            </button>

            <button className="flex items-center space-x-2">
                <LibraryIcon className="h-5 w-5"/>
                <p>Library</p>
            </button>

            <button className="flex items-center space-x-2">
                <PlusCircleIcon className="h-5 w-5"/>
                <p>Add</p>
            </button>

            </div>
        </div>
    )
}

export default Sidebar
