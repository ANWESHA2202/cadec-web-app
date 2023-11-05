import { useEffect, useState } from 'react';
import Tabs from '../components/layout/Tabs';
import fetchApi from '../components/FetchApi/fetchApi';
import ShowPdfs from '../components/ShowPdfs/ShowPdfs'
import pdf from '../../public/java.pdf'

const Home = () => {
  const [mostViewed,setMostViewed]=useState([])


  const getMostViewedNotes=async()=>{
    const res=await fetchApi('material/notes/most_viewed_notes','',false,'GET');
    if(res.status>=200 && res.status<=205){
      setMostViewed(res?.data?.data?.notes)
    }
  }
  useEffect(()=>{
      getMostViewedNotes()
  },[])
  return (
    <div>
      <div className='w-full'>
        <Tabs/>
      </div>
      <div className='m-16 mt-10'>

      <h1 className='text-2xl font-bold text-blue-950'>Most Viewed Notes</h1>
      <ShowPdfs mostViewed={mostViewed}/>
      </div>
    </div>
  );
};

export default Home;
