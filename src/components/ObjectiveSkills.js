import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
`;

const ObjectSkills = styled.div`
background-color: #fffffe;

`;

const ObjectiveSkills = (props) => {
  return (
    <>
      <Wrapper>
        <ObjectSkills>
          <ReactMarkdown children={props.props} remarkPlugins={[remarkGfm]} />
        </ObjectSkills>
      </Wrapper>
    </>
  )
}

export default ObjectiveSkills
