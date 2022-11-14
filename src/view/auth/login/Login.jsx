import React from "react";
import {
  Button,
  TextField,
  Link,
  Grid,
  CssBaseline,
  Box,
  FormControlLabel,
  Paper,
  Checkbox,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

// import fire from "../../../config/config";

// import { useAuth } from "../../../hooks/useAuth";
import { Wrapper } from "./Login.styled";

function Login() {
  // const { login } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    password: "",
    error: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);

    // const promise = fire
    //   .auth()
    //   .signInWithEmailAndPassword(data.get("email"), data.get("password"));

    // promise
    //   .then((e) => {
    //     fire
    //       .firestore()
    //       .collection("users")
    //       .where("userId", "==", e.user.uid)
    //       .onSnapshot((query) => {
    //         if (query.size === 0) {
    //           setValues({
    //             ...values,
    //             error: "No User Found",
    //           });
    //           setLoading(false);
    //           setOpen(true);
    //         } else {
    //           query.forEach((doc) => {
    //             setValues({
    //               ...values,
    //               error: "success",
    //             });
    //             setLoading(false);
    //             login({
    //               userId: doc.data().userId,
    //               userType: doc.data().userType,
    //               authToken: doc.data().token,
    //               userProfile: doc.data().profileThumbImgURL,
    //             });
    //           });
    //         }
    //       });
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     setValues({
    //       ...values,
    //       error: e.message,
    //     });
    //     setOpen(true);
    //     setLoading(false);
    //   });
  };

  return (
    <Wrapper>
      <Grid container component="main" sx={{ height: "calc(100vh - 80px)" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>Login to your account</h3>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox autoSave value="remember" color="primary" />}
                label="Remember me"
              />
              <Grid container justifyContent="flex-end">
                <Button
                  className="login-btn"
                  type="submit"
                  fullWidth
                  disabled={loading}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {loading ? <CircularProgress size={24} /> : <>Log In</>}
                </Button>
              </Grid>
              <Grid container flexDirection="column">
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {values.error === "" ? (
          <Alert severity="success">Login Successful</Alert>
        ) : (
          <Alert severity="error">{values.error}</Alert>
        )}
      </Snackbar>
    </Wrapper>
  );
}

export default Login;
