import React, {useState} from 'react'

function Signin () {
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

   return (
      <form>
         <input type="email" name="email" placeholder="Email" onChange={handleChange} value={data.email} />
         <input type="password" name="password" placeholder="Password" onChange={handleChange} value={data.password} />

         <button type="submit">Sign In</button>
      </form>
   );
}

export default Signin;