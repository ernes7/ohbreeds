import React from 'react'
import SelectDogs from "../components/SelectDogs"

export default function Home({breedSelected, setBreed}) {


    return (
        <div>
            <h1>Oh Breeds !!!</h1>
            <SelectDogs breedSelected={breedSelected} setBreed={setBreed} />
        </div>
    )
}
