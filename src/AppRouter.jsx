import { Routes, Route, useNavigate } from "react-router-dom";
import { MsalProvider, MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import "./App.css";
import Home from "./pages/Home";
import Testing from "./pages/Testing";
import NotFound from "./pages/NotFound";
import { CustomNavigationClient } from "./NavigationClient";
import { loginRequest } from "./authConfig";
import { Box, CircularProgress } from "@mui/material";

function LoadingComponent() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress size={100} />
    </Box>
  );
}

import PropTypes from "prop-types";

function App({ pca }) {
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  const authRequest = {
    ...loginRequest,
  };

  return (
    <MsalProvider instance={pca}>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        authenticationRequest={authRequest}
        loadingComponent={LoadingComponent}
        data-testid="app-component"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Testing" element={<Testing />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </MsalAuthenticationTemplate>
    </MsalProvider>
  );
}

App.propTypes = {
  pca: PropTypes.object.isRequired,
};

export default App;
