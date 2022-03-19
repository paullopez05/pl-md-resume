import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
background-color: #fffffe;
text-align: center;
`;

const InfoHeader = (props) => {
  return (
    <>
      <Wrapper>
        <Header>
          <ReactMarkdown 
            children={props.props} 
            remarkPlugins={[remarkGfm]}
            className={'contact-details'}  
          />

        </Header>
      </Wrapper>
    </>
  )
}

export default InfoHeader;