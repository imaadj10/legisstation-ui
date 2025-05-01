import React from "react";
import styled from 'styled-components';
import { USAMap } from "@mirawision/usa-map-react";

export const Map: React.FC = ({}) => {
    return (
      <div>
        <USAMapStyled />
      </div>
    );
  }
  
  const USAMapStyled = styled(USAMap)`
    .usa-map {
      border: 0.0625rem solid var(--surface-border);
      border-radius: 0.5rem;
    }
  
    .usa-state {
      fill: #e9e9e9;
    }
  
    .usa-state:hover {
      fill: #c6dbee;
      stroke-width: 3px;
    }
  
    .usa-state:active {
      fill: #6f8fa5;
      stroke-width: 3px;
    }
  `;