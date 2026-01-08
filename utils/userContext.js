import { createContext } from "react";

const UserContext = createContext({
    name: "Default User",
    email: "defaultuser@example.com"
});

export default UserContext;