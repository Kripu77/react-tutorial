import React,{useState, useEffect} from 'react'
import { data } from '../../../data'
import {Link, useParams} from 'react-router-dom'

const Person = () => {
  console.log(useParams())
  const {id} = useParams()
  const[people, setPeople]= useState('')

  useEffect(()=>{
    const newPeople = data.find((value)=>{
      return value.id=== parseInt(id)
    })
    setPeople(newPeople)
  },[])
  return (
    <div>
      <h1> {people.name}</h1>
    </div>
  )
}

export default Person
