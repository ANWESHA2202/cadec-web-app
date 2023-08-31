import { useEffect, useState } from 'react'
import { Input,Text,Button } from '@chakra-ui/react'
import Select from 'react-select'

const options = [
    { value: 'hnrs', label: 'hnrs' },
    { value: 'program', label: 'program' },
]

const sem=[
    {value:1 ,label:'I'},
    {value:2 ,label:'II'},
    {value:3,label:'III'},
    {value:4 ,label:'IV'},
    {value:5 ,label:'V'},
    {value:6 ,label:'VI'},
    {value:7 ,label:'VII'},
    {value:8 ,label:'VIII'}
]


const Course = () => {
    const [passingyears,setPassingyears]=useState([]);
    useEffect(()=>{
        const currentYear = new Date().getFullYear();
        let years=[];
        for(let i=0;i<4;i++){
            let year=currentYear+i;
            years.push({value:year,label:year.toString()})
        }
        setPassingyears(years);
    },[])
  return (
    <div className='w-1/2 h-full flex flex-col space-y-5'>
        <div>
            <Text>Your Course Name:</Text>
            <Input placeholder='B.Com' />
        </div>
        <div>
            <Text>Course Type:</Text>
            <Select 
                options={options} 
                isSearchable
                isClearable
            />
        </div>
        <div>
            <Text>Your Current Semester:</Text>
            <Select 
                options={sem} 
                isSearchable
                isClearable
            />
        </div>
        <div>
            <Text>Your Passing Year:</Text>
            <Select 
                options={passingyears} 
                isSearchable
                isClearable
            />
        </div>
        <div className="text-right">
            <Button colorScheme='black' className='bg-black'>Update Course Details</Button>
        </div>
    </div>
  )
}

export default Course