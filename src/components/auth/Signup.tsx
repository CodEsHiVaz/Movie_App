import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { TextField, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { UserType } from "../../App";
const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const payload = {
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      profession: data.get("profession") as string,
      email: data.get("email") as string,
      password: data.get("password") as string,
    };

    console.log("handleSubmit  payload:", payload);
    addUserToLocalStorage(payload);
  };

  function isUserAlreadyExists(newUser: UserType, userList: UserType[]) {
    return userList.some((user) => user.email === newUser.email);
  }

  // Function to add a new user to an array of users and update localStorage
  function addUserToLocalStorage(newUser: UserType) {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    if (!isUserAlreadyExists(newUser, storedUsers)) {
      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      console.log("User added to localStorage.");
      navigate("/login");
    } else {
      console.log("User already exists.");
    }
  }

  // Example of creating a new user and adding them to the array

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="mobile"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Profession
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    name={"profession"}
                    label=" Select Profession"
                    // sx={{ width: "100%" }}
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Developer</MenuItem>
                    <MenuItem value={20}>HR</MenuItem>
                    <MenuItem value={30}>Manager</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                Already have an account?
                <Link to={"/login"}> Login</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
