import React from "react";

import { LoadingContainer, Spinner } from "./styles/styles";

export function LoadingSpinner() {
  return (
    <LoadingContainer>
      <Spinner>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Spinner>
      <div>
        <p>{"Loading..."}</p>
      </div>
    </LoadingContainer>
  );
}
