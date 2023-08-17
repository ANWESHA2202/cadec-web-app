import {Text, Input } from '@chakra-ui/react'
import Select from 'react-select'

const options = [
    { value: 'science', label: 'Science' },
    { value: 'arts', label: 'Arts' },
    { value: 'commerce', label: 'Commerce' }
  ]


const Step1 = () => {
  return (
    <div className='flex flex-col space-y-5'>
        <div>
            <Text className='font-semibold text-gray-700'>Enter Your Name<span className='text-red-500'>*</span></Text>
            <Input
                placeholder='eg. xyz' 
            />
        </div>
        <div>
            <Text className='font-semibold text-gray-700'>Enter Your College Email ID<span className='text-red-500'>*</span></Text>
            <Input
                placeholder='eg. abc@pgdav.du.ac.in' 
            />
        </div>
        <div>
            <Text className='font-semibold text-gray-700'>Enter Password<span className='text-red-500'>*</span></Text>
            <Input
                placeholder='eg. Test@123' 
            />
        </div>
        <div>
            <Text className='font-semibold text-gray-700'>Select Your Stream<span className='text-red-500'>*</span></Text>
            <Select options={options}/>
        </div>
    </div>
  )
}

export default Step1