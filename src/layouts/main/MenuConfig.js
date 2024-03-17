import { Icon } from "@iconify/react";
import bookOpenFill from "@iconify/icons-eva/book-open-fill";
// routes
import { PATH_AUTH, PATH_DASHBOARD } from "../../routes/paths";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Login",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: PATH_AUTH.login,
  },
  {
    title: "Register",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: PATH_AUTH.register,
  },
];

export default menuConfig;
