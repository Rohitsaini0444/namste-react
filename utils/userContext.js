import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
    loggedInUserEmail: "defaultuser@example.com"
});

export default UserContext;