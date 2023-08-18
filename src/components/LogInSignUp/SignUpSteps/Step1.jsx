import {Text, Input,Button } from '@chakra-ui/react'
import Select from 'react-select'

const options = [
    // { value: 'science', label: 'Science' },
    // { value: 'arts', label: 'Arts' },
    { value: 'commerce', label: 'Commerce' }
]
const options2 = [
    { value: 'science', label: 'Science' },
    { value: 'arts', label: 'Arts' },
    { value: 'commerce', label: 'Commerce' }
]


const Step1 = ({handleChange,handleSelectChange,nextStep}) => {
  return (
    <div className='flex flex-col space-y-5'>
        <h1 className='text-xl font-bold text-blue-900'>Fill Your Details To Sign Up</h1>
        <div className=''>
            <Text className='font-semibold text-gray-700'>Enter Your Name<span className='text-red-500'>*</span></Text>
            <Input
                name='name'
                onChange={handleChange}
                placeholder='eg. xyz' 
            />
        </div>
        <div>
            <Text className='font-semibold text-gray-700'>Enter Your College Email ID<span className='text-red-500'>*</span></Text>
            <Input
                name='email'
                onChange={handleChange}
                placeholder='eg. abc@pgdav.du.ac.in' 
            />
        </div>
        <div>
            <Text className='font-semibold text-gray-700'>Enter Password<span className='text-red-500'>*</span></Text>
            <Input
                name='password'
                onChange={handleChange}
                placeholder='eg. Test@123' 
            />
        </div>
        <div>
            <Text className='font-semibold text-gray-700'>Select Your Stream<span className='text-red-500'>*</span></Text>
            <Select 
                options={options} 
                isSearchable
                isClearable
                onChange={(e)=>handleSelectChange(e,'stream')}
            />
        </div>
        <div>
            <Text className='font-semibold text-gray-700'>Choose Your Interests<span className='text-red-500'>*</span></Text>
            <Select 
                options={options2} 
                isSearchable
                isClearable
                isMulti
                onChange={(e)=>handleSelectChange(e,'interests')}
            />
        </div>
        <Button colorScheme='blue' onClick={nextStep}>Next</Button>
    </div>
  )
}

export default Step1