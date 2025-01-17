import React, {useState, useEffect} from 'react'
import api from "../utils/api";

function Account () {
   const [user, setUser] = useState({
      email: "",
      password: ""
   });

   useEffect(() => {
      api()
         .get("/me")
         .then(response => {
            setUser({
               name: response.data.name,
               email: response.data.email
            });
         })
         .catch(error => {
            console.log(error);
         });
   }, []);

   return (
      <>
         <h1>My Account</h1>

         <div className="account-row">Name: {user.name}</div>
         <div className="account-row">Email: {user.email}</div>
      </>
   );
}

export default Account;