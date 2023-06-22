import React, { useEffect, useState }  from 'react';
import useHook from './useHook';
const Profile = () => {
    const [data, setData] = useState({firstName: '', lastName: ''});
    const {id} = useHook();
    useEffect(()  =>{
        async function getData() {
            try{
                const response = await fetch(
                `https://rest-api-bjno.onrender.com/id/${id}`,
                    {
                        method: "GET"
                    }
                );
                const value = await response.json();
                console.log(value)
                setData(value);
            }
            catch(err) {
                console.log("Error", err);
            }
        }
    
    getData();
},[]);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>FirstnName: {data.firstName}</p>
      <p>LastnName:{data.lastName}</p>
    </div>
  );
};

export default Profile
