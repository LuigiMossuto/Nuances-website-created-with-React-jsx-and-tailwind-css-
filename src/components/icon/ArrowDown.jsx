import { useState } from "react";

export const ArrowDown = ({value,valueHover,className}) => {
  const [img,setImg] = useState(value);
  return (
    <img src={img} onMouseEnter={() => setImg(valueHover)} onMouseLeave={() => setImg(value)} className={className}></img>
  );
};

export default ArrowDown;
