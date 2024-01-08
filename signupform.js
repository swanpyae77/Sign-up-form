// import {useState} from 'react'
// export default function SignUpForm(){
// const [firstName, setFirstName] =useState("")
// const [lastName, setLastName] =useState("")
// const [email, setEmail] =useState("")
// const [password, setPassword] =useState("")
// const [role, setRole] =useState("role")

// const handleSubmit= (e) =>{
//     e.preventDefault();
//     alert(`Account Created:${firstName} ${lastName} Email=${email}, Password=${password} and you chose-${role}`);
    
//     setFirstName("")
//     setLastName("")
//     setPassword("")
//     setRole("Role")

// };
// return(
//     <div className="App">
//      <form onSUbmit={handleSubmit}>
//       <fieldset> 
//         <h2>Sign Up</h2>
         
//           <div className="Field">
//             <lable>
//                 First Name <sup>*</sup>
//             </lable>
//             <input
//               type="text"
//               value={firstName}
//               onchange={(e)=>{
//                 setFirstName(e.target.value);
//               }}
//               placeholder="First name"/>
//          </div>

//          <div className="Field">
//             <lable>
//                 Last Name <sup>*</sup>
//             </lable>
//             <input
//               type="text"
//               value={lastName}
//               onchange={(e)=>{
//                 setLastName(e.target.value);
//               }}
//               placeholder="Last name"/>
//          </div>

//          <div className="Field">
//             <lable>
//               Email address <sup>*</sup>
//             </lable>
//             <input
//               type="email"
//               value={email}
//               onchange={(e)=>{
//                 setEmail(e.target.value)
//               }}
//               placeholder="Email Address"/>
//          </div>

//          <div className="Field">
//             <lable>
//                 Password<sup>*</sup>
//             </lable>
//             <input
//               type="password"
//               value={password}
//               onchange={(e)=>{
//                 setPassword(e.target.value)
//               }}
//               placeholder="Password"/>
//          </div>

//          <div className="Field">
//             <lable>
//                 Role<sup>*</sup>
//             </lable>
//              <select value={role} onChange={(e)=>setRole(e.target.value)}>
//              <option value="role">Role</option>
//              <option value="individual">individual</option>
//              <option value="business">Business</option>
//              </select>
//          </div>
//                {/* <button type="submit" disabled={!getIsFormValid()}>
//                 Create Account
//                </button> */}
//     </fieldset>
//  </form>
//  </div>

// )
// }