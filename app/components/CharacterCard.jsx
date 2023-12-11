const Card = ({name,status,gender,image,counter}) => {
    return (
      <>
          <div className="rounded-lg border-2 border-blue-500 shadow-2xl mt-4">
              <a className="flex justify-center rounded-lg" href="#">
                  <img className="mt-2 border s:w-2/3 border-black" src={image} alt={name}/>
              </a>
              <div className="s:p-1 p-5 flex flex-col">
                  <a href="#">
                      <h5 className="mb-2 s:text-xs m:text-lg l:text-xl tablet:text-2xl font-bold tracking-tight text-gray-900 text-center">{name}</h5>
                  </a>
                  <p className="mb-3 font-normal s:text-xs m:text-base tablet:text-lg text-gray-400 text-center">Status : {status}</p>
                  <p className="mb-3 font-normal s:text-xs m:text-base tablet:text-lg text-gray-400 text-center">Gender : {gender}</p>
                  <button type="button" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 font-bold rounded-lg text-sm s:px-2 s:py-2 px-5 py-2.5 s:me-1 s:mb-1 me-2 mb-2 ">{counter}</button>
              </div>
          </div>
      </>
    )
  }
  
  export default Card