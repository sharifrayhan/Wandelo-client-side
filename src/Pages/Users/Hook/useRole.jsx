import { useContext } from "react";
import { Context } from "../../../Context/AllContext";
import useUsers from "./useUsers";

const useRole = () => {
    const { user } = useContext(Context);
    const userEmail = user?.email;

    const { allUsers} = useUsers();

    const currentUser = allUsers.find((u) => u.email === userEmail);

    const userRole = currentUser?.role;

    return { userRole }

};

export default useRole;
