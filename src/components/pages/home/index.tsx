import type {FC} from "react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const HomePage: FC = () => {
    const navigate = useNavigate();
  useEffect(()=>{
      navigate('/task')
  } ,[])
    return <></>
};

export default HomePage;
