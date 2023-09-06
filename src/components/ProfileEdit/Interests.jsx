import Select from 'react-select'
import { Text,Button,Input } from '@chakra-ui/react'
const interests=[
    {value:'sales',label:'Sales'},
    {value:'marketing',label:'Marketing'},
    {value:'hr',label:'HR'},
    
]
const Interests = () => {
  return (
    <div className='w-1/2 h-full flex flex-col space-y-5'>
        <div>
            <Text>Search Your Interests:</Text>
            <Select 
                options={interests} 
                isSearchable
                isClearable
            />  
        </div>
        <div>
            <Text>Request New Interests:</Text>
            <Input placeholder='Product Management' />
        </div>
        <div className="text-right">
            <Button colorScheme='black' className='bg-black'>Update Interests</Button>
        </div>
    </div>
  )
}

export default Interests