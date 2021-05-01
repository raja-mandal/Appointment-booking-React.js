import React, { useEffect } from 'react'
import Signup from './Signup'
import { Container } from 'react-bootstrap'
import AuthProvider from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import Loading from './Loading';
import useLoader from './useLoader';


function App() {

  const [isLoading, setLoading] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  })

  return (
    <>
      {/* <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}> */}
      {/* <div className="w-100" style={{ maxWidth: '400px' }}> */}

      <Router>
        <AuthProvider>
          <Switch>
            {/* {
              isLoading == true ? <Loading /> : <Dashboard />
            } */}
            {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
            <PrivateRoute exact path="/" component={useLoader} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
      {/* </div> */}
      {/* </Container> */}
    </>
  );
}

export default App;
