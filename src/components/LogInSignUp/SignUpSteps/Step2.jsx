import { Text, Button } from "@chakra-ui/react";
import Select from "react-select";

const options2 = [
  { value: "science", label: "Science" },
  { value: "arts", label: "Arts" },
  { value: "commerce", label: "Commerce" },
];

const Step2 = ({ prevStep, nextStep, handleChange, handleSelectChange }) => {
  return (
    <div className="flex flex-col space-y-3 justify-center items-center">
      <h1 className="text-xl font-bold text-blue-900">
        Fill Your Subject Details To Sign Up
      </h1>
      <div className="w-full">
        <div>
          <Text className="font-semibold text-gray-700">
              DSC Subjects<span className="text-red-500">*</span>
          </Text>
          <Select
            options={options2}
            isSearchable
            isClearable
            onChange={(e) => handleSelectChange(e, "dsc")}
          />
        </div>
        <div>
          <Text className="font-semibold text-gray-700">
            DSE Subjects<span className="text-red-500">*</span>
          </Text>
          <Select
            options={options2}
            isSearchable
            isClearable
            onChange={(e) => handleSelectChange(e, "dse")}
          />
        </div>
        <div>
          <Text className="font-semibold text-gray-700">
              GE Subjects<span className="text-red-500">*</span>
          </Text>
          <Select
            options={options2}
            isSearchable
            isClearable
            onChange={(e) => handleSelectChange(e, "ge")}
          />
        </div>
        <div>
          <Text className="font-semibold text-gray-700">
            VAC Subjects<span className="text-red-500">*</span>
          </Text>
          <Select
            options={options2}
            isSearchable
            isClearable
            onChange={(e) => handleSelectChange(e, "vac")}
          />
        </div>
        <div>
          <Text className="font-semibold text-gray-700">
            AECC Subjects<span className="text-red-500">*</span>
          </Text>
          <Select
            options={options2}
            isSearchable
            isClearable
            onChange={(e) => handleSelectChange(e, "aecc")}
          />
        </div>
        <div>
          <Text className="font-semibold text-gray-700">
            SEC Subjects<span className="text-red-500">*</span>
          </Text>
          <Select
            options={options2}
            isSearchable
            isClearable
            onChange={(e) => handleSelectChange(e, "sec")}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between w-full">
        <Button onClick={prevStep}>Go Back</Button>

        <Button colorScheme="blue" onClick={nextStep}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2;
