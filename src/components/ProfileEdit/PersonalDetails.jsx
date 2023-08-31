import { Input,Text,Button } from '@chakra-ui/react'
const PersonalDetails = () => {
  return (
    <div className='w-1/2 h-full flex flex-col space-y-5'>
        <div>
            <Text>Your Name:</Text>
            <Input placeholder='Anwesha Sanyal' />
        </div>
        <div>
            <Text>Your Phone Number:</Text>
            <Input placeholder='+91 9876543210' />
        </div>
        <div>
            <Text>Your Email ID:</Text>
            <Input placeholder='abc@pgdav.du.ac.in' />
        </div>
        <div>
            <Text>Your alternate Email ID:</Text>
            <Input placeholder='abc@gmail.com' />
        </div>
        <div className="text-right">
            <Button colorScheme='black' className='bg-black'>Update Personal Details</Button>
        </div>
    </div>
  )
}

export default PersonalDetails