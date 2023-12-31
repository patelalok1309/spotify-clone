// import React, { useEffect, useState } from 'react'
// import { useStateValue } from '../context/StateProvider'
// import { motion } from "framer-motion"
// import { MdDelete } from "react-icons/md"
// import moment from "moment"
// import { changingUserRole, getAllUsers, removeUser } from '../api'
// import { actionType } from "../context/reducer"

// // export const DashboardUserCard = ({ data, index }) => {

// //   const [{ user , allUsers }, dispatch] = useStateValue();
// //   const [isUserRoleUpdated, setisUserRoleUpdated] = useState(false)
// //   const [isLoading, setIsLoading] = useState(false);


// //   const updateUserRole = (userId, role) => {
// //     setIsLoading(true);
// //     setisUserRoleUpdated(false)
// //     changingUserRole(userId, role).then((res) => {
// //       if (res) {
// //         getAllUsers().then((data) => {
// //           dispatch({
// //             type: actionType.SET_ALL_USERS,
// //             allUsers: data.data
// //           })
// //         });
// //         setTimeout(() => {
// //           setIsLoading(false);
// //         }, 2000);
// //       }
// //     })
// //   }

// //   const deleteUser = (userId) => {    
// //     setIsLoading(true);
// //     removeUser(userId).then((res) => {
// //       if (res) {
// //         getAllUsers().then((data) => {
// //           dispatch({
// //             type : actionType.SET_ALL_USERS,
// //             allUsers : data.data,
// //           })
// //         });
// //         setTimeout(() => {
// //           setIsLoading(false);
// //         }, 2000);
// //       }
// //     })
// //   }

// //   const createdAt = moment(new Date(data.createdAt)).format("MMMM Do YYYY")

// //   return (
// //     <motion.div
// //       key={index} className='relative w-full rounded-md flex items-center justify-between py-4 bg-lightOverlay cursor-pointer hover:bg-card hover:shadow-md'>

// //       {
// //         data._id !== user?.user._id && (
// //           <motion.div whileTap={{ scale: 0.75 }} className='absolute left-4 w-8 rounded-md flex items-center justify-center bg-gray-200' onClick={() => deleteUser(data._id)}><MdDelete className='text-xl text-red-400 hover:text-red-500' /></motion.div>
// //         )
// //       }

// //       {/* user Image  */}
// //       <div className="w-275 min-w-[160px] flex items-center justify-center">
// //         <img src={data.imageURL} referrerPolicy='no-referrer' alt="" className='w-10 h-10 object-cover rounded-md min-w-[40px] shadow-md' />
// //       </div>

// //       {/* user name  */}
// //       <p className='text-base text-textColor w-275 min-w-[160px] text-center'>{data.name}</p>
// //       <p className='text-base text-textColor w-275 min-w-[160px] text-center'>{data.email}</p>
// //       <p className='text-base text-textColor w-275 min-w-[160px] text-center'>{data.email_verified ? 'verified' : 'not-verified'}</p>
// //       <p className='text-base text-textColor w-275 min-w-[160px] text-center'>{createdAt}</p>

// //       <div className="w-275 min-w-[160px] text-center flex items-center justify-center">
// //         <p className='text-base text-textColor text-center'>{data.role}</p>
// //         {
// //           data._id !== user?.user._id && (
// //             <motion.p whileTap={{ scaleX: 0.75 }} className="text-[10px] font-semibold text-textColor px-1 bg-purple-200 rounded-sm hover:shadow-md" onClick={() => setisUserRoleUpdated(true)}>
// //               {
// //                 data.role === 'admin' ? "Member" : "Admin"
// //               }
// //             </motion.p>
// //           )
// //         }

// //         {isUserRoleUpdated && (
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.5 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             exit={{ opacity: 0, scale: 0.5 }}
// //             className="absolute z-10 top-6 right-4 p-4 flex items-start flex-col  gap-4 bg-white shadow-xl rounded-md">
// //             <p className="text-textColor text-[12px] font-semibold">
// //               Are you sure, do you want to mark the user as {data.role === "admin" ? "Member" : "Admin"}
// //             </p>
// //             <div className="flex items-center gap-4">
// //               <motion.button whileTap={{ scale: 0.75 }} className='outline-none border-none text-sm px-4 py-1 rounded-md bg-blue-200 text-black hover:shadow-md' onClick={() => updateUserRole(data._id, data.role === 'admin' ? "member" : 'admin')}>Yes</motion.button>
// //               <motion.button whileTap={{ scale: 0.75 }} className='outline-none border-none text-sm px-4 py-1 rounded-md bg-gray-200 text-black hover:shadow-md' onClick={() => setisUserRoleUpdated(false)}>No</motion.button>
// //             </div>
// //           </motion.div>
// //         )}

// //       </div>
// //     </motion.div>

// //   )
// // }

// export const DashboardUserCard = ({ data, index }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isUpdateRole, setIsUpdateRole] = useState(false);

//   const [{ allUsers, user }, dispatch] = useStateValue();
//   const createdAt = moment(new Date(data.createdAt)).format("MMMM Do YYYY");

//   const UpdateUserRole = (userId, role) => {
//     setIsLoading(true);
//     setIsUpdateRole(false);
//     changingUserRole(userId, role).then((res) => {
//       if (res) {
//         getAllUsers().then((data) => {
//           dispatch({
//             type: actionType.SET_ALL_USERS,
//             allUsers: data.data,
//           });
//         });
//         setTimeout(() => {
//           setIsLoading(false);
//         }, 2000);
//       }
//     });
//   };

//   const deleteuser = (userId) => {
//     setIsLoading(true);
//     removeUser(userId).then((res) => {
//       if (res) {
//         getAllUsers().then((data) => {
//           dispatch({
//             type: actionType.SET_ALL_USERS,
//             allUsers: data.data,
//           });
//         });
//         setTimeout(() => {
//           setIsLoading(false);
//         }, 2000);
//       }
//     });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, delay: index * 0.1 }}
//       className="relative w-full rounded-md flex items-center justify-between py-4 bg-lightOverlay cursor-pointer hover:bg-card hover:shadow-md"
//     >
//       {data._id !== user?.user._id && (
//         <motion.div
//           whileTap={{ scale: 0.75 }}
//           className="absolute left-4 w-8 h-8 rounded-md flex items-center justify-center bg-gray-200"
//           onClick={() => deleteuser(data._id)}
//         >
//           <MdDelete className="text-xl text-red-400 hover:text-red-500" />
//         </motion.div>
//       )}
//       <div className="w-275 min-w-[160px] flex items-center justify-center">
//         {/* prettier-ignore */}
//         <img src={data.imageURL} alt="" className="w-10 h-10 object-cover rounded-md min-w-[40px] shadow-md"
//         />
//       </div>
//       {/* prettier-ignore */}
//       <p className="text-base text-textColor w-275 min-w-[160px] text-center">{data.name}</p>
//       {/* prettier-ignore */}
//       <p className="text-base text-textColor w-275 min-w-[160px] text-center">{data.email}</p>
//       {/* prettier-ignore */}
//       <p className="text-base text-textColor w-275 min-w-[160px] text-center">{data.email_verfied ? 'True' : 'False'}</p>
//       {/* prettier-ignore */}
//       <p className="text-base text-textColor w-275 min-w-[160px] text-center">{createdAt}</p>
//       <div className=" w-275 min-w-[160px] text-center flex items-center justify-center gap-6 relative">
//         <p className="text-base text-textColor"> {data.role}</p>
//         {data._id !== user?.user._id && (
//           <motion.p
//             whileTap={{ scale: 0.75 }}
//             className="text-[10px]  font-semibold text-textColor px-1 bg-purple-200 rounded-sm hover:shadow-md"
//             onClick={() => setIsUpdateRole(true)}
//           >
//             {data.role === "admin" ? "Member" : "Admin"}
//           </motion.p>
//         )}
//         {isUpdateRole && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.5 }}
//             className="absolute z-10 top-6 right-4 rounded-md p-4 flex items-start flex-col gap-4 bg-white shadow-xl"
//           >
//             <p className="text-textColor text-sm font-semibold">
//               Are you sure do u want to mark the user as{" "}
//               <span>{data.role === "admin" ? "Member" : "Admin"}</span> ?
//             </p>
//             <div className="flex items-center gap-4">
//               <motion.button
//                 whileTap={{ scale: 0.75 }}
//                 className="outline-none border-none text-sm px-4 py-1 rounded-md bg-blue-200 text-black hover:shadow-md"
//                 onClick={() =>
//                   UpdateUserRole(
//                     data._id,
//                     data.role === "admin" ? "member" : "admin"
//                   )
//                 }
//               >
//                 Yes
//               </motion.button>
//               <motion.button
//                 whileTap={{ scale: 0.75 }}
//                 className="outline-none border-none text-sm px-4 py-1 rounded-md bg-gray-200 text-black hover:shadow-md"
//                 onClick={() => setIsUpdateRole(false)}
//               >
//                 No
//               </motion.button>
//             </div>
//           </motion.div>
//         )}
//       </div>

//       {isLoading && (
//         <div className="absolute inset-0 bg-card animate-pulse"></div>
//       )}
//     </motion.div>
//   );
// };

// function DashboardUsers() {

//   const [{ allUsers }, dispatch] = useStateValue();

//   useEffect(() => {
//     if (!allUsers) {
//       getAllUsers().then((data) => {
//         dispatch({
//           type: actionType.SET_ALL_USERS,
//           allUsers: data.data,
//         });
//       });
//     }
//   }, []);


//   // { console.log(allUsers) }
//   return (
//     <div className='w-full py-12 justify-center flex-col'>
//       {/* filters  */}

//       {/* tabular data form  */}
//       <div className='relative w-full py-12 min-h-[400px] overflow-x-scroll my-4 flex flex-col items-center justify-start p-4 border border-gray-300 rounded-md gap-3'>
//         {/* total count of the user  */}
//         <div className="absolute top-4 left-4">
//           <p className="text-sm font-semibold ">
//             count : <span className='text-xl font-bold text-textColor'> {allUsers?.length}</span>
//           </p>
//         </div>


//         {/* table Heading  */}
//         <div className='w-full min-w-[750px] flex items-center justify-between'>
//           <p className='text-sm text-textColor font-semibold w-275 min-w-[160px] text-center'>Image</p>
//           <p className='text-sm text-textColor font-semibold w-275 min-w-[160px] text-center'>Name</p>
//           <p className='text-sm text-textColor font-semibold w-275 min-w-[160px] text-center'>Email</p>
//           <p className='text-sm text-textColor font-semibold w-275 min-w-[160px] text-center'>Verified</p>
//           <p className='text-sm text-textColor font-semibold w-275 min-w-[160px] text-center'>Created</p>
//           <p className='text-sm text-textColor font-semibold w-275 min-w-[160px] text-center'>Role</p>
//         </div>

//         {/* table body content  */}
//         {
//           allUsers && (
//             allUsers?.map((data, i) => (
//               <DashboardUserCard data={data} index={i} key={i} />
//             ))
//           )
//         }
//       </div>
//     </div>
//   )
// }


// export default DashboardUsers

import React, { useEffect, useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { motion } from "framer-motion";
import { getAllUsers } from "../api";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import DashboardUserCard from "./DashboardUserCard";

const DashboardUsers = () => {
  const [emailFilter, setEmailFilter] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const [filtereUsers, setFiltereUsers] = useState(null);

  const [{ allUsers }, dispatch] = useStateValue();

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch({
          type: actionType.SET_ALL_USERS,
          allUsers: data.data,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (emailFilter.length === 0){
      setFiltereUsers(allUsers)
    }else{
      if (emailFilter) {
        const filtered = allUsers.filter(
          (data) => data.email.includes(emailFilter)
        )
        setFiltereUsers(filtered);
      }
    }
  }, [emailFilter]);

  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="w-full flex justify-center items-center gap-24">
      <input
          type="text"
          placeholder="Search here"
          className={`w-52 px-4 py-2 border ${
            isFocus ? "border-gray-500 shadow-md" : "border-gray-300"
          } rounded-md bg-transparent outline-none duration-150 transition-all ease-in-out text-base text-textColor font-semibold`}
          value={emailFilter}
          onChange={(e) => setEmailFilter(e.target.value)}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
        />

        {emailFilter && (
          <motion.i
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.75 }}
            onClick={() => {
              setEmailFilter("");
              setFiltereUsers(null);
            }}
          >
            <AiOutlineClear className="text-3xl text-textColor cursor-pointer" />
          </motion.i>
        )}
      </div>

      <div
      className="relative w-full py-12 min-h-[400px] overflow-x-scroll scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-400 my-4 flex flex-col items-center justify-start p-4 rounded-md gap-3">
        <div className="absolute top-4 left-4">
          <p className="text-xl font-bold">
            <span className="text-sm font-semibold text-textColor">
              Count :{" "}
            </span>
            {filtereUsers ? filtereUsers?.length : allUsers?.length}
          </p>
        </div>

        <div className="w-full min-w-[750px] flex items-center justify-between">
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Image</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Name</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Email</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Verified</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Created</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Role</p>{" "}
        </div>
        {allUsers && !filtereUsers
          ? allUsers?.map((data, i) => (
            <DashboardUserCard data={data} key={data._id} index={i} />
          ))
          : filtereUsers?.map((data, i) => (
            <DashboardUserCard data={data} key={data._id} index={i} />
          ))}
      </div>
    </div>
  );
};

export default DashboardUsers;

