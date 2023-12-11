const LocationCard = ({name,type,dimension}) => {
    return (
      <>
          <div className="rounded-lg border-2 border-blue-500 shadow-2xl mt-4 ">
              <div className="p-5 flex flex-col">
                  <a href="#">
                      <h5 className="mb-2 s:text-xs m:text-lg l:text-xl tablet:text-2xl font-bold tracking-tight text-gray-900 text-center">{name}</h5>
                  </a>
                  <p className="mb-3 font-normal s:text-xs m:text-base tablet:text-lg text-gray-400 text-center">Type : {type}</p>
                  <p className="mb-3 font-normal s:text-xs m:text-base tablet:text-lg text-gray-400 text-center">Dimension : {dimension}</p>
              </div>
          </div>
      </>
    )
  }
  
  export default LocationCard