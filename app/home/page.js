"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import CharacterCard from "../components/CharacterCard"
import Navbar from "../components/Navbar"

export default function Home() {
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then((response)=>{
      setCharacters(response.data.results)
    })
    .catch((error)=>{
      console.log(error,"error");
    })
  },[])

  return (
    <>
    <Navbar/>
      <div className="flex justify-center items-center mt-auto">
          <div className="grid grid-cols-4 gap-4">
            {characters.map((character,index)=>{
              return <CharacterCard
                key={index}
                name = {character.name}
                status = {character.status}
                gender = {character.gender}
                image = {character.image}
              />
            })}
          </div>
      </div>
    </>
  )
}