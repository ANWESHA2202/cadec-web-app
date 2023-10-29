import { Text, Input, Button } from "@chakra-ui/react";
import Select from "react-select";
import { useEffect, useState } from "react";
import fetchApi from "../../FetchApi/fetchApi";
import { useToast } from '@chakra-ui/react'



function validateForm(data) {
  const errors = {};

  if (!data.name) {
    errors.name = "Name is required";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (!isValidPassword(data.password)) {
    errors.password =
      "Password must be at least 6 characters long with at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 one special character";
  }

  if (!data.course) {
    errors.course = "Course selection is required";
  }

  if (!data.mobile) {
    errors.mobile = "Mobile No is required";
  } else if (!/^\d{10}$/.test(data.mobile)) {
    errors.mobile = "Invalid Mobile No format. Should be a 10-digit number";
  }

  // Validate Expected Passout Year
  if (!data.passyear) {
    errors.passyear = "Expected Passout Year is required";
  } else if (!/^\d{4}$/.test(data.passyear)) {
    errors.passyear = "Invalid Passout Year format. Should be a 4-digit year";
  } else {
    const currentYear = new Date().getFullYear();
    const passYear = parseInt(data.passyear, 10);
    if (passYear < currentYear || passYear > currentYear + 6) {
      errors.passyear = `Passout Year must be between ${currentYear} and ${currentYear + 6}`;
    }
  }

  return errors;
}

function isValidEmail(email) {
  // You can use a regular expression to validate the email format
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // You can define your password validation criteria here
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~`#_+;:"'])[A-Za-z\d@$!%*?&~`#_+;:"']{6,}$/;

  return passwordRegex.test(password);
}

const Step1 = ({ handleChange, handleSelectChange, nextStep, entries }) => {
  const toast=useToast();
  const [errors, setErrors] = useState({});
  const [coursesOption, setCoursesOption] = useState([
    { label: "", value: "" },
  ]);

  const getAllCourses = async () => {
    const res = await fetchApi("academic/courses", "", false, "GET");
    if (res.status === 200) {
      let options = [];
      res?.data?.data?.courses?.forEach((course) => {
        let obj = {};
        obj.value = course.course_id;
        obj.label = `${course.course_name} ${course.type}`;

        options.push(obj);
      });

      setCoursesOption(options);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  const handleStep1Submit = async () => {
    setErrors(validateForm(entries));
    if (Object.keys(validateForm(entries)).length == 0) {
      const responseBody = JSON.stringify({
        name: entries.name,
        password: entries.password,
        email: entries.email,
        course:entries.course
      });
      const res = await fetchApi("user/register", responseBody, false);
      
      if(res.status>=200 && res.status<300){
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        localStorage.setItem('token',res?.data?.token)
        nextStep();
      }else{
        
          toast({
            title: 'Some error has occurred',
            description: res.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
      }
    }
  };

  return (
    <div className="flex flex-col space-y-5 max-w-[30vw]">
      <h1 className="text-xl font-bold text-blue-900">
        Fill Your Personal Details To Sign Up
      </h1>
      <div className="">
        <Text className="font-semibold text-gray-700">
          Enter Your Name<span className="text-red-500">*</span>
        </Text>
        <Input
          name="name"
          value={entries?.name || ""}
          onChange={handleChange}
          placeholder="eg. xyz"
        />
        {errors.name && <p className="text-red-500">*{errors.name}</p>}
      </div>
      <div>
        <Text className="font-semibold text-gray-700">
          Enter Your College Email ID<span className="text-red-500">*</span>
        </Text>
        <Input
          name="email"
          value={entries?.email || ""}
          onChange={handleChange}
          placeholder="eg. abc@pgdav.du.ac.in"
        />
        {errors.email && <p className="text-red-500">*{errors.email}</p>}
      </div>
      <div>
        <Text className="font-semibold text-gray-700">
          Enter Password<span className="text-red-500">*</span>
        </Text>
        <Input
          name="password"
          value={entries?.password || ""}
          onChange={handleChange}
          placeholder="eg. Test@123"
        />
        {errors.password && <p className="text-red-500">*{errors.password}</p>}
      </div>
      <div>
        <Text className="font-semibold text-gray-700">
          Enter Mobile No.<span className="text-red-500">*</span>
        </Text>
        <Input
          name="mobile"
          value={entries?.mobile || ""}
          onChange={handleChange}
          placeholder="eg. 9876543210"
        />
        {errors.mobile && <p className="text-red-500">*{errors.mobile}</p>}
      </div>
      <div>
        <Text className="font-semibold text-gray-700">
          Enter Expected Passout Year<span className="text-red-500">*</span>
        </Text>
        <Input
          name="passyear"
          value={entries?.passyear || ""}
          onChange={handleChange}
          placeholder="eg. 2026"
        />
        {errors.passyear && <p className="text-red-500">*{errors.passyear}</p>}
      </div>
      <div>
        <Text className="font-semibold text-gray-700">
          Select Your Course<span className="text-red-500">*</span>
        </Text>
        <Select
          options={coursesOption}
          isSearchable
          // isClearable
          value={
            coursesOption[
              coursesOption.findIndex((option) => option.value === entries.course)
            ]||''
          }
          onChange={(e) => handleSelectChange(e, "course")}
        />
        {errors.course && <p className="text-red-500">*{errors.course}</p>}
      </div>
      <Button
        colorScheme="blue"
        onClick={() => {
          handleStep1Submit();
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default Step1;
