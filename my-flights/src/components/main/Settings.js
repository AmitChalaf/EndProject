import React from "react";
import UpdateAirlineDetails from "./UpdateAirlineDetails";
import UpdateCustomerDetails from "./UpdateCustomerDetails";
import UpdateAdminDetails from "./UpdateAdminDetails";
import { useRole } from "../common/RoleContext.js";
import { ROLES } from "../../utils/Consts";

const Settings = ({ role }) => {
  const { userRole } = useRole();
  return (
    <div>
      {userRole === ROLES.customer  && <UpdateCustomerDetails />}
      {userRole === ROLES.admin && <UpdateAdminDetails />}
      {userRole === ROLES.airline && <UpdateAirlineDetails />}
    </div>
  );
};

export default Settings;
