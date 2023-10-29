import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Text,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
  useToast,
} from "@chakra-ui/react";
import closeEye from "../../assets/close-eye.png";
import openEye from "../../assets/eye.png";
import email from "../../assets/email.png";
import fetchApi from "../FetchApi/fetchApi";

function validateForm(data) {
  const errors = {};

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.password) {
    errors.password = "Password is required";
  }

  return errors;
}

function isValidEmail(email) {
  // You can use a regular expression to validate the email format
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
}

const LogInForm = () => {
  const [entries, setEntries] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    setEntries((prevEntries) => ({
      ...prevEntries,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLogin = async () => {
    setErrors(validateForm(entries));

    if (Object.keys(validateForm(entries)).length == 0) {
      const res = await fetchApi("user/login", entries, false);
      if (res.status >= 200 && res.status <= 203) {
        toast({
          title: "Successfully logged in!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        localStorage.setItem('accessToken',res?.data?.token?.access);
        localStorage.setItem('refreshToken',res?.data?.token?.refresh);
        navigate("/");
      }else{
        toast({
            title: "Some error has occurred",
            description:res?.data?.errors?.message||res?.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
      }
    }
    
  };
  return (
    <div className="rounded-xl bg-white shadow-xl p-10 justify-center flex flex-col space-y-8">
      <div>
        <h1 className="font-semibold text-xl m-5 text-gray-700">
          Log In To Your Account
        </h1>
      </div>
      <div>
        <Text className="font-semibold text-gray-700">
          Enter College Email ID<span className="text-red-500">*</span>
        </Text>
        <InputGroup>
          <Input
            placeholder="eg. abc@pgdav.du.ac.in"
            name="email"
            value={entries?.email || ""}
            onChange={handleChange}
          />
          <InputRightAddon>
            <img src={email} alt="mail logo" width={25} height={25} />
          </InputRightAddon>
        </InputGroup>
        {errors.email && <p className="text-red-500">*{errors.email}</p>}
      </div>
      <div>
        <Text className="font-semibold text-gray-700">
          Enter Password<span className="text-red-500">*</span>
        </Text>
        <InputGroup>
          <Input
            placeholder="eg. Text@123"
            type={showPassword ? "text" : "password"}
            name="password"
            value={entries?.password || ""}
            onChange={handleChange}
          />
          <InputRightAddon
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer"
          >
            <img
              src={showPassword ? closeEye : openEye}
              alt="password logo"
              width={25}
              height={25}
            />
          </InputRightAddon>
        </InputGroup>
        {errors.password && <p className="text-red-500">*{errors.password}</p>}
      </div>

      <Button colorScheme="black" className="bg-black" onClick={handleLogin}>
        Log In
      </Button>
    </div>
  );
};

export default LogInForm;
