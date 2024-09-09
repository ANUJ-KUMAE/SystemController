import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./ApiIntegration/Store/store.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadUser from "./Components/LoadingLoginUser/LoadUser.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <StrictMode> */}
    <App />
    <LoadUser />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
    {/* </StrictMode> */}
  </Provider>
);
