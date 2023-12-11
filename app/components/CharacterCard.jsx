const Card = ({name,status,gender,image,counter}) => {
    return (
      <>
          <div className="rounded-lg border-2 border-blue-500 shadow-2xl mt-4">
              <a className="flex justify-center rounded-lg" href="#">
                  <img className="mt-2 border border-black" src={image} width={150} alt={name}/>
              </a>
              <div className="p-5 flex flex-col">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">{name}</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Status : {status}</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Gender : {gender}</p>
                  <button type="button" className="text-white bg-green-500 focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{counter}</button>
              </div>
          </div>
      </>
    )
  }
  
  export default Card