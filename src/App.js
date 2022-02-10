import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import {
  Home,
  Error,
  Register,
  Login,
  ForgotPassword,
  ResetPassword,
  Dashboard,
} from "./pages";
import { Navbar } from "./components";
import { useGlobalContext } from "./context";
import bgimage from "./img/jpop.43bfb92.jpg";
function App() {
  const { isLoading } = useGlobalContext();
  if (0) {
    return (
      <section className="page page-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <Wrapper>
      <Router>
        <img src={bgimage} alt="listen" className="background" />
        <Navbar />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route
            path="/forgot-password"
            exact={true}
            element={<ForgotPassword />}
          />
          <Route
            path="/reset-password"
            exact={true}
            element={<ResetPassword />}
          />
          <Route path="/register" exact={true} element={<Register />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/dashboard" exact={true} element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0;
  .background {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  }
`;
export default App;
