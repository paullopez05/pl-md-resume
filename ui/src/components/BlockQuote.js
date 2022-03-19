import React from "react";
import styled from "styled-components";

const SetBlockQuote = styled.div`
background-color: #fff;
color: #000;
max-width: 100%;
padding: 5px 10px 5px 10px;
margin: 5px 10px 5px 10px;
`;

const BqText = styled.div`
  background-color: pink;
`;

const BlockQuote = (props) => {
  let getBlockQuote = props.props
  return (
    <>
      <SetBlockQuote>
        {getBlockQuote}
      </SetBlockQuote>
    </>
  )
}

export default BlockQuote;