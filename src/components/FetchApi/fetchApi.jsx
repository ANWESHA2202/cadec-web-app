


const fetchApi = async (
  url,
  requestBody = "",
  auth = true,
  method = "POST",
  token='',
) => {
  const tokenOptions={
    access: localStorage?.getItem('accessToken'),
    token:localStorage?.getItem('token')
  }

  try {
    const headers = {
      "Content-Type": "application/json",
    };

    if(auth){
      headers.Authorization=`Bearer ${tokenOptions[token]}`
    }

    let response;

    if (method.toLowerCase() === "get") {
      response = await fetch(`http://admin.siksakah.com/api/${url}`,{
        headers
      });
    } else {
      response = await fetch(`http://admin.siksakah.com/api/${url}/`, {
        method: method,
        headers: headers,
        body: JSON.stringify(requestBody),
      });
    }

    const data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    // console.log(error.message);
    const err = {
      errcode: 1,
      message: error.message,
    };
    return err;
  }
};

export default fetchApi;
