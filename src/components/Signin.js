import React, {useState} from 'react'
import api from "../utils/api";

function Signin () {
   const [error, setError] = useState();
   const [data, setData] = useState({
      email: "",
      password: ""
   });

   const handleChange = event => {
      setData({
         ...data,
         [event.target.name]: event.target.value
      });
   };

   const handleSubmit = event => {
      event.preventDefault();

      api()
         .post("/signin", data)
         .then(response => {
            // console.log(response.data);
            localStorage.setItem("token", response.data.token);
         })
         .catch(err => {
            setError(err.response.data.message);
         })
   };

   return (
      <form onSubmit={handleSubmit}>
         {
            error
            ?  <p className="error">{error}</p>
            : null
         }
         <input type="email" name="email" placeholder="Email" onChange={handleChange} value={data.email} />
         <input type="password" name="password" placeholder="Password" onChange={handleChange} value={data.password} />

         <button type="submit">Sign In</button>
      </form>
   );
}

export default Signin;