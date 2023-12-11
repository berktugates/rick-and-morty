import '../public/css/not-found.css'

export default function notFound() {
  return (
    <>
        <div className="background-img">
            <div className="space"></div>
                <div className="wrapper">
                    <div className="img-wrapper">
                        <span>44</span>
                    </div>
                    <p className='mb-5'>The page you are trying to search has been <br></br> moved to another universe.</p>
                    <div className='flex justify-center'>
                        <a className='p-3 me-2 bg-orange-600 text-white rounded-lg' href='http://localhost:3000/home'>Home</a>
                        <a className='p-3 bg-orange-600 text-white rounded-lg' href='http://localhost:3000/locations'>Locations</a>
                    </div>
                </div>
        </div>
    </>  
  )
}
