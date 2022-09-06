import React from 'react';
import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

const PerfectScrollBar = ({xColor, yColor, children, className, style}) => {
    const PerfectScrollbarStyled = styled(PerfectScrollbar)`
      .ps__thumb-y {
        background-color: #B6EDC8;
        width: 5px;
      }
      .ps__rail-y.ps--clicking .ps__thumb-y {
        background-color: #B6EDC8;
        width: 11px;
      }
      .ps__rail-y:hover > .ps__thumb-y {
        background-color: #B6EDC8;
      }
      .ps__thumb-x {
        background-color: blue;
        height: 4px;
      }
      .ps__rail-y {
        background-color: transparent;
      }
      .ps__rail-y:hover {
        background-color: transparent;
      }
      .ps__thumb-y {
        background-color: transparent;
      }
      .ps__rail-y
`;
    return (
        <PerfectScrollbarStyled  className={className} style={style}>
            {children}
        </PerfectScrollbarStyled>
    );
};

export default PerfectScrollBar;