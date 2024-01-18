import { ReactNode, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Spinner from "../conmponents/ui/Spinner";
import { getUserFromLocalStorage } from "../helpers/auth";

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const navigate = useNavigate();
  const [userLoader,setUserLoader]=useState<boolean>(true);

  const user=getUserFromLocalStorage();
  //console.log(user)
  useEffect(()=>{
    if(!user?.email){
      return navigate("/login");
    }
    setUserLoader(false);
  },[navigate,user])
  if(userLoader && !user?.email){
    return  <Spinner/>
  }
    return children
};

export default PrivateRoute;
