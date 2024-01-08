
import './App.css';
import {useState} from 'react'
function App(){
const [firstName, setFirstName] =useState("")
const [lastName, setLastName] =useState("")
const [email, setEmail] =useState("")
const [password, setPassword] =useState("")
const [role, setRole] =useState("role")

const handleSubmit= (e) =>{
    e.preventDefault();
    alert(`Account Created:${firstName} ${lastName} Email=${email}, Password=${password} and you chose-${role}`);
    
    setFirstName("")
    setLastName("")
    setPassword("")
    setRole("Role")

};
return(
    <div className="App">
     <form onSubmit={handleSubmit}>
      <fieldset> 
        <h1>Sign up here</h1>
         
          <div className="Field">
            <lable>
                First Name <sup>*</sup>
            </lable>
            <input
              type="text"
              value={firstName}
              onChange={(e) =>{
                setFirstName(e.target.value);
              }}
              placeholder="First name"/>
         </div>

         <div className="Field">
            <lable>
                Last Name <sup>*</sup>
            </lable>
            <input
              type="text"
              value={lastName}
              onChange={(e) =>{
                setLastName(e.target.value);
              }}
              placeholder="Last name"/>
         </div>

         <div className="Field">
            <lable>
              Email address <sup>*</sup>
            </lable>
            <input
              type="email"
              value={email}
              onChange={(e) =>{
                setEmail(e.target.value)
              }}
              placeholder="Email Address"/>
         </div>

         <div className="Field">
            <lable>
                Password<sup>*</sup>
              </lable>
            <input
              type="password"
              value={password}
              onChange={(e) =>{
                setPassword(e.target.value)
              }}
              placeholder="Password"/>
         </div>

         <div className="Field">
            <lable>
                Role<sup>*</sup>
            </lable>
             <select value={role} onChange={(e) =>setRole(e.target.value)}>
             <option value="role">Role</option>
             <option value="individual">individual</option>
             <option value="business">Business</option>
             </select>
         </div>
         <button type="submit">
          Create Account
         </button>
    </fieldset>
 </form>
 </div>

)
}
 
   

export default App;
