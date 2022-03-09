import React, { useState, useEffect } from "react";
import './App.css';
import ObjectiveSkills from "./components/ObjectiveSkills";
import InfoHeader from "./components/InfoHeader";
import { getGistData } from './Services'
import WorkExperience from "./components/WorkExperience";
import Container from "./components/Container";


export default function App() {
  const [getApi, setApi] = useState('')
  const [getObjSkills, setObjSkills] = useState('')
  const [getObjBody, setObjBody] = useState('')

  useEffect( () => {
    getGistData('a68a015c570a3896cb19c863a9f35e1a')
    .then(res => {
      const newObj = 'resume.header.md';
      const response = res.files[newObj].content
      const contentData = response
      setApi(contentData)
    })
  }, [])

  useEffect( () => {
    getGistData('0e9fade12af7fae59f5b535d032db62a')
    .then(res => {
      const newObj = 'resume.obj.skills.md';
      const response = res.files[newObj].content;
      setObjSkills(response);
    })
  })
  
  useEffect( () => {
    getGistData('6a7fd3ec2c19993f60bc643cee0a6ecc')
    .then(res => {
      const newObj = 'resume.body.md';
      const response = res.files[newObj].content;
      setObjBody(response);
    })
  })  

  return (
    <>
      <InfoHeader props={getApi}></InfoHeader>
      <ObjectiveSkills props={getObjSkills}></ObjectiveSkills>
      <WorkExperience props={getObjBody}></WorkExperience>
    </>
  );
}