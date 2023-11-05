import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { UserType } from "../../App";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
  handleClickOpen: () => void;
  handleClose: () => void;
};
export default function ProfileInfo({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
}: Props) {
  const navigate = useNavigate();

  const [userData, setuserData] = React.useState<UserType>();
  React.useEffect(() => {
    if (localStorage.getItem("user"))
      setuserData(JSON.parse(localStorage.getItem("user")!));
  }, []);

  const handleLogOut = () => {
    if (localStorage.getItem("user")) localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ left: " 1088px", top: " -151px", height: "auto" }}
      >
        <DialogTitle>{"Profile Information"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Stack direction={"column"}>
              <div>
                <strong>Company</strong>: Geeksynergy Technologies Pvt Ltd
              </div>
              <div>
                <strong>Address</strong>: Sanjayanagar,Bengaluru-56
              </div>
              <div>
                <strong>User name</strong>: {userData?.name}
              </div>
              <div>
                <strong>Email </strong>: {userData?.email}
              </div>
              <div>
                <strong>Phone </strong> : {userData?.phone}
              </div>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogOut}>Logout</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
