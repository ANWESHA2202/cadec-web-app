import { Button } from "@chakra-ui/react"
const grievence = () => {
  return (
    <div className="flex justify-center items-center">
        <div className="w-2/3  rounded-lg bg-gray-200 shadow-xl flex flex-col justify-center items-center space-y-5">
            <div className="text-2xl mt-5 tracking-wide font-semibold">Write Your Grievence</div>
            <div className="mb-5">
                <textarea name="" id="" cols="100" rows="8" className="outline-white"></textarea>
            </div>
            <div className="p-5 mr-10 text-right w-full">
                <Button colorScheme="black" className="bg-black w-1/5">Submit</Button>
            </div>
        </div>
    </div>
  )
}

export default grievence