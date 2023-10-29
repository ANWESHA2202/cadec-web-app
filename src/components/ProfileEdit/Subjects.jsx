import Select from 'react-select'
import { Text,Button } from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import {useToast} from '@chakra-ui/react'
import fetchApi from '../FetchApi/fetchApi'
import {decodeToken} from 'react-jwt'

const Subjects = () => {
    const [options, setOptions] = useState({});
    const [errors, setErrors] = useState({});
    const toast = useToast();
  
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
  return (
    <div className='w-1/2 h-full flex flex-col space-y-5'>
      
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
        <div className="text-right">
            <Button colorScheme='black' className='bg-black'>Update Subjects</Button>
        </div>
    </div>
  )
}

export default Subjects