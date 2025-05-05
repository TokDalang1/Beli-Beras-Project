// import React, {createContext, useState} from 'react';
// import {getAuth, onAuthStateChanged} from 'firebase/auth';

// export const UserContext = createContext();

// export const UserProvider = ({children}) => {
//   const [user, setUser] = useState(null);
//   const [profileImage, setProfileImage] = useState(
//     require('../../images/defaultprofile.png'),
//   ); // Atau null

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, currentUser => {
//       setUser(currentUser);
//     });
//     return unsubscribe; // Unsubscribe saat komponen unmount
//   }, []);

//   const updateProfileImage = imageSource => {
//     setProfileImage(imageSource);
//   };

//   return (
//     <UserContext.Provider value={{user, profileImage, updateProfileImage}}>
//       {children}
//     </UserContext.Provider>
//   );
// };
