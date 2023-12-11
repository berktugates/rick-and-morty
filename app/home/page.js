"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import CharacterCard from "../components/CharacterCard"
import Navbar from "../components/Navbar"

const defaultEndpoint = 'https://rickandmortyapi.com/api/character'

async function loadingEffect () {
  await new Promise (resolve => setTimeout(resolve,1000))
}

export default async function Home() {
  loadingEffect()
  const [characters, setCharacters] = useState([])
  useEffect(()=>{
    axios
    .get(defaultEndpoint)
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
          <div className="grid s:grid-cols-2 s:p-2 tablet:p-4 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
            {characters.map((character,index)=>{
              return <CharacterCard
                key={index}
                counter = {index + 1}
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