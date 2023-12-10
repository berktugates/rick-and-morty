import Link from "next/link"

const Navbar = () => {
  return (
    <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 flex justify-around flex-wrap items-center py-4">
                <span className="self-center text-2xl font-semibold text-white">
                  <Link className="border border-white p-1" target="_blank" href={{
                    pathname : "https://rickandmortyapi.com"
                  }}>
                    Rick and Morty
                  </Link>
                </span>
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link className="text-white" href={{
                          pathname : "/home"
                        }}>
                          Home
                        </Link>
                    </li>
                    <li>
                        <Link className="text-white" href={{
                          pathname : "/locations"
                        }}>
                          Locations
                        </Link>
                    </li> 
                    <li>
                      <Link className="text-white" target="_blank" href={{
                        pathname : "https://github.com/berktugates"
                      }}>
                        GitHub
                      </Link>
                    </li>  
                </ul>
        </nav>
    </>
  )
}

export default Navbar