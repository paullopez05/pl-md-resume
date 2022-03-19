import React, { useState, useEffect } from "react";
import './App.css';
import { getGistData } from './Services'
import ObjectiveSkills from "./components/ObjectiveSkills";
import InfoHeader from "./components/InfoHeader";
import WorkExperience from "./components/WorkExperience";
import Container from "./components/Container";


export default function App() {
  const [getApi, setApi] = useState()
  const [getObjSkills, setObjSkills] = useState('')
  const [getObjBody, setObjBody] = useState('')

  useEffect( () => {
    getGistData()
    .then(res => {
      // const newObj = 'resume.header.md';
      // const response = res.files[newObj].content
      const contentData = res
      setApi(res)
 
      
    })
  }, [])


  return (
    <>
      {/* <InfoHeader props={getApi}></InfoHeader> <ObjectiveSkills props={getObjSkills}></ObjectiveSkills> <WorkExperience props={getObjBody}></WorkExperience> */}
      <h1 className="text-3xl font-bold underline">
        Hello Universe!
      </h1>
      
      
    </>
  );
}