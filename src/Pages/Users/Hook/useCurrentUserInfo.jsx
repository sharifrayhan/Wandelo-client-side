import { useContext } from "react";
import { Context } from "../../../Context/AllContext";
import useUsers from "./useUsers";

const useCurrentUserInfo = () => {
    const { user } = useContext(Context);
    const userEmail = user?.email;
    const userPhoto = user?.photoURL;
    const userName = user?.displayName;

    const { allUsers } = useUsers();

    const currentUser = allUsers?.find((u) => u?.email === userEmail);

    const userRole = currentUser?.role;

    return { userRole,userPhoto,userEmail,userName }

};

export default useCurrentUserInfo;
