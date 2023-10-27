import { Text, Button } from "@chakra-ui/react";
import Select from "react-select";
import { useState, useEffect } from "react";
import fetchApi from "../../FetchApi/fetchApi";
import { isExpired, decodeToken } from "react-jwt";

function validateForm(data) {
  const errors = {};

  if (!data.dsc) {
    errors.dsc = "DSC subject is missing";
  } else if (!data.dse) {
    errors.dse = "DSE subject is missing";
  } else if (!data.ge) {
    errors.ge = "GE subject is missing";
  } else if (!data.vac) {
    errors.vac = "VAC subject is missing";
  } else if (!data.aecc) {
    errors.aecc = "AECC subject is missing";
  } else if (!data.sec) {
    errors.sec = "SEC subject is missing";
  }

  return errors;
}

const Step2 = ({
  prevStep,
  nextStep,
  handleChange,
  handleSelectChange,
  entries,
}) => {
  const [options, setOptions] = useState({});
  const [errors, setErrors] = useState({});

  const getAllSubjects = async () => {
    const token = decodeToken(localStorage.getItem("token"));
    const res = await fetchApi(
      `academic/subjects/subjects_by_course/?course_id=${parseInt(
        token?.course_id
      )}`,
      "",
      false,
      "get"
    );

    let dscOptions = [];
    let dseOptions = [];
    let geOptions = [];
    let vacOptions = [];
    let aeccOptions = [];
    let secOptions = [];
    res?.data?.data?.subjects?.forEach((sub) => {
      switch (sub?.type) {
        case "DSC": {
          let obj = {
            value: sub?.subid,
            label: sub?.name,
          };
          dscOptions.push(obj);
          break;
        }
        case "DSE": {
          let obj = {
            value: sub?.subid,
            label: sub?.name,
          };
          dseOptions.push(obj);
          break;
        }
        case "GE": {
          let obj = {
            value: sub?.subid,
            label: sub?.name,
          };
          geOptions.push(obj);
          break;
        }
        case "VAC": {
          let obj = {
            value: sub?.subid,
            label: sub?.name,
          };
          vacOptions.push(obj);
          break;
        }
        case "AECC": {
          let obj = {
            value: sub?.subid,
            label: sub?.name,
          };
          aeccOptions.push(obj);
          break;
        }
        case "SEC": {
          let obj = {
            value: sub?.subid,
            label: sub?.name,
          };
          secOptions.push(obj);
          break;
        }
      }
    });

    setOptions({
      dscOptions,
      dseOptions,
      geOptions,
      vacOptions,
      aeccOptions,
      secOptions,
    });
  };

  useEffect(() => {
    getAllSubjects();
  }, []);

  const handleStep2Submit = async () => {
    setErrors(validateForm(entries));

    if (Object.keys(validateForm(entries)).length == 0) {

      const responseBody={
        mobile:'',
        pass_year:'',
        dsc_choices:entries.dsc,
        dse_choices:entries.dse,
        ge_choices:entries.ge,
        sec_choices:entries.sec,
        aecc_choices:entries.aecc,
        vac_choices:entries.vac
      }

      const res = await fetchApi(
        `user/students/${decodeToken(localStorage.getItem("token"))["stu-id"]}`,
        responseBody,
        false,
        'patch'
      );
      console.log(res)
    }
  };

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
            options={options.dscOptions}
            isSearchable
            isClearable
            isMulti
            onChange={(e) => handleSelectChange(e, "dsc")}
          />
          {errors.dsc && <p className="text-red-500">*{errors.dsc}</p>}
        </div>
        <div>
          <Text className="font-semibold text-gray-700">
            DSE Subjects<span className="text-red-500">*</span>
          </Text>
          <Select
            options={options.dseOptions}
            isSearchable
            isClearable
            isMulti
            onChange={(e) => handleSelectChange(e, "dse")}
          />
          {errors.dse && <p className="text-red-500">*{errors.dse}</p>}
        </div>
        <div>
          <Text className="font-semibold text-gray-700">
            GE Subjects<span className="text-red-500">*</span>
          </Text>
          <Select
            options={options.geOptions}
            isSearchable
            isClearable
            onChange={(e) => handleSelectChange(e, "ge")}
          />
          {errors.ge && <p className="text-red-500">*{errors.ge}</p>}
        </div>
        <div>
          <Text className="font-semibold text-gray-700">
            VAC Subjects<span className="text-red-500">*</span>
          </Text>
          <Select
            options={options.vacOptions}
            isSearchable
            isClearable
            onChange={(e) => handleSelectChange(e, "vac")}
          />
          {errors.vac && <p className="text-red-500">*{errors.vac}</p>}
        </div>
        <div>
          <Text className="font-semibold text-gray-700">
            AECC Subjects<span className="text-red-500">*</span>
          </Text>
          <Select
            options={options.aeccOptions}
            isSearchable
            isClearable
            onChange={(e) => handleSelectChange(e, "aecc")}
          />
          {errors.aecc && <p className="text-red-500">*{errors.aecc}</p>}
        </div>
        <div>
          <Text className="font-semibold text-gray-700">
            SEC Subjects<span className="text-red-500">*</span>
          </Text>
          <Select
            options={options.secOptions}
            isSearchable
            isClearable
            onChange={(e) => handleSelectChange(e, "sec")}
          />
          {errors.sec && <p className="text-red-500">*{errors.sec}</p>}
        </div>
      </div>
      {/* <div className="flex sm:flex-row flex-col justify-between w-full"> */}
        {/* <Button onClick={prevStep}>Go Back</Button> */}

        <Button colorScheme="blue" onClick={() => handleStep2Submit()}>
          Next
        </Button>
      {/* </div> */}
    </div>
  );
};

export default Step2;
