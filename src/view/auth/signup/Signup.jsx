import {
  Alert,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  MenuItem,
  Slide,
  Snackbar,
  TextField,
} from "@mui/material";
import React from "react";
import { Wrapper } from "./Signup.styled";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CssBaseline from "@mui/material/CssBaseline";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import fire from "../../../config/config";

// import { useAuth } from "../../../hooks/useAuth";

const gender = [
  {
    value: "Male",
  },
  {
    value: "Female",
  },
  {
    value: "Other",
  },
];

function Signup() {
  // const { signup } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [values, setValues] = React.useState({
    gender: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    error: "",
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData(event.currentTarget);

    if (data.get("password") !== data.get("confirmPassword")) {
      setValues({
        ...values,
        error: "Password doesn't match",
      });
      setOpen(true);
      setLoading(false);
    } else {
      // const promise = fire
      //   .auth()
      //   .createUserWithEmailAndPassword(
      //     data.get("email"),
      //     data.get("password")
      //   );
      // promise
      //   .then((e) =>
      //     fire
      //       .firestore()
      //       .collection("users")
      //       .doc(e.user.uid)
      //       .set({
      //         created: new Date(),
      //         email: data.get("email"),
      //         firstname: data.get("firstName"),
      //         gender: data.get("gender"),
      //         lastname: data.get("lastName"),
      //         phoneNo: data.get("number"),
      //         profileImgURL: "",
      //         profileThumbImgURL: "",
      //         location: "",
      //         work: "",
      //         about: "",
      //         userId: e.user.uid,
      //         userType: "Traveler",
      //         token: e.user.refreshToken,
      //       })
      //       .then(() => {
      //         setOpen(true);
      //         setValues({
      //           ...values,
      //           error: "",
      //         });
      //         signup({
      //           userId: e.user.uid,
      //           userType: "Traveler",
      //           authToken: e.user.refreshToken,
      //           userProfile: "",
      //         });
      //         console.log("FIRESTORE DONE");
      //         setLoading(false);
      //       })
      //       .catch((data) => {
      //         console.log("Failed", data);
      //         setOpen(true);
      //         setValues({
      //           ...values,
      //           error: data.message,
      //         });
      //         setLoading(false);
      //       })
      //   )
      //   .catch((e) => {
      //     console.log(e);
      //     setOpen(true);
      //     setLoading(false);
      //     setValues({
      //       ...values,
      //       error: e.message,
      //     });
      //   });
    }
  };

  return (
    <Wrapper>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>Create new account</h3>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  variant="standard"
                  autoComplete="given-name"
                  required
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                  variant="standard"
                  autoComplete="family-name"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  id="email"
                  label="Email Address"
                  variant="standard"
                  autoComplete="email"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="number"
                  id="phone-number"
                  label="Phone Number"
                  variant="standard"
                  type="tel"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="gender"
                  id="gender"
                  label="Select Gender"
                  variant="standard"
                  select
                  required
                  value={values.gender}
                  onChange={handleChange("gender")}
                  fullWidth
                >
                  {gender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sx={{ pt: 0 }}>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  variant="standard"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  autoComplete="new-password"
                  required
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="standard"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      required
                      value="allowExtraEmails"
                      color="primary"
                    />
                  }
                  label="I Accept the Terms & Conditions"
                />
              </Grid>
            </Grid>

            <Grid container justifyContent="center">
              <Button
                className="signup-btn"
                type="submit"
                fullWidth
                disabled={loading}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {loading ? <CircularProgress size={24} /> : <>Sign up</>}
              </Button>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {values.error === "" ? (
            <Alert severity="success">Account Created</Alert>
          ) : (
            <Alert severity="error">{values.error}</Alert>
          )}
        </Snackbar>
      </Container>
    </Wrapper>
  );
}

export default Signup;
