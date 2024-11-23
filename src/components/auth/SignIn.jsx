// import React, { useState } from 'react';

// export const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     if (email === '' || password === '') {
//       setMessage('Please fill all the fields.');
//       return;
//     }
//     // Имитируем успешный вход
//     setMessage(`Welcome back, ${email}!`);
//   };

//   return (
//     <div>
//       <h2>Sign In</h2>
//       <form onSubmit={handleSignIn}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//           />
//         </div>
//         <button type="submit">Sign In</button>
//         {message && <p>{message}</p>}
//       </form>
//     </div>
//   );
// };
