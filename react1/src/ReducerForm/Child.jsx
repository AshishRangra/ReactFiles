import React, { useEffect } from "react";
export const Child = ({ getData }) => {
  const str = "hellodsfdsddddfsdfsdfsdfdsgfdf";
  useEffect(() => {
    getData(str);
  }, [getData]);

  return (
    <>
      <h3>i am child {str}</h3>
      <button>senddata</button>
    </>
  );
};
