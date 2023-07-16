// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="shadow-2xl rounded-xl p-10">
//         <h1 className="text-xl text-center">Login</h1>
//         <div className="">
//           <form>
//             <div className="form-control w-full">
//               <label className="label">
//                 <span className="label-text">
//                   Email <span className="text-red-700">*</span>
//                 </span>
//               </label>
//               <input type="email" />
//             </div>
//             <div className="form-control w-full">
//               <label className="label">
//                 <span className="label-text">
//                   Password <span className="text-red-700">*</span>
//                 </span>
//               </label>
//               <input
//                 type="password"
//                 {...register("password", {
//                   required: true,
//                   minLength: { value: 6 },
//                 })}
//                 aria-invalid={errors.password ? "true" : "false"}
//                 className="input input-bordered w-full"
//               />

//               {errors.password?.type === "required" && (
//                 <small className="text-red-700" role="alert">
//                   Password is required
//                 </small>
//               )}

//               {errors.password?.type === "minLength" && (
//                 <small className="text-red-700" role="alert">
//                   Password must 6 char or long
//                 </small>
//               )}

//               <label className="label">
//                 <small>
//                   <Link to={""}>Forgot Password?</Link>
//                 </small>
//               </label>
//             </div>
//             <input
//               type="submit"
//               className="btn btn-accent text-white w-full my-3"
//             />
//             <div className="text-center">
//               {signInError && (
//                 <small className="text-red-600">{signInError}</small>
//               )}
//             </div>
//           </form>
//           <div className="text-center">
//             <small className="text-center">
//               New to Doctors Portal?{" "}
//               <Link to={"/signup"} className="text-primary">
//                 Create new account
//               </Link>
//             </small>
//           </div>
//           <div className="divider">OR</div>
//           <button className="btn btn-outline w-full">
//             CONTINUE WITH GOOGLE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
