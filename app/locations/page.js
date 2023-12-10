"use client"
import axios from "axios";
import Navbar from "../components/Navbar";
import { useState } from "react";
import LocationCard from "../components/LocationCard";

const page = () => {
    const [locations, setLocations] = useState([])
    axios
    .get("https://rickandmortyapi.com/api/location")
    .then((response)=>{
        setLocations(response.data.results)
    })
    .catch((error)=>{
        console.log(error,"error")
    })
    return (
        <>
            <Navbar/>
            <div className="flex justify-center">
                <div className="mt-2 grid grid-cols-4 gap-4">
                    {locations.map((location,index)=>{
                        return <LocationCard key={index}
                            name = {location.name}
                            type = {location.type}
                            dimension = {location.dimension}
                            url = {location.url}
                        />
                    })}
                </div>
            </div>
        </>
    )
}

export default page;