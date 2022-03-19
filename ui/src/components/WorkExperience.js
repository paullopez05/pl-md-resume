import React, {useState} from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import "../work-experience.css"
import BlockQuote from "./BlockQuote";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Experience = styled.div`
  max-width: 50%;
  background-color: #fffffe;
  padding: 0px 15px 5px 15px;
  background-color: #ffffff;
`;


const WorkExperience = (props) => {
  
  return(
    <>
      <Wrapper>
        <Experience>
          <ReactMarkdown 
            children={props.props}
            remarkPlugins={[remarkGfm]}
            className={`react-md`}
            components={{
              blockquote: ({node, ...props}) => <BlockQuote props={props.children[1]} />
            }}
          />
          <BlockQuote> </BlockQuote>

        </Experience>
      </Wrapper>
    </>
  )
}

export default WorkExperience;