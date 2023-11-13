import { useEffect,useState } from "react";
import fetchApi from "../components/FetchApi/fetchApi";
import Tabs from "../components/layout/Tabs";
import {decodeToken} from 'react-jwt'

const Dsc = () => {
    const [subjects,setSubjects]=useState([]);

    const getDscSubjects=async()=>{
        const token=decodeToken(localStorage?.getItem('accessToken'))
        const res=await fetchApi(`user/students/${token['stu-id']}`,'',true,'get');
        
    }
  return (
    <div>Dsc</div>
  )
}

export default Dsc