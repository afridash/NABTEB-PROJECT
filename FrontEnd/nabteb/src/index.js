import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import News from './components/News'
import About from './components/About'
import Contact from './components/Contact'
import Centers from './components/Centers'
import Examinations from './components/Examinations'
import Offers from './components/Offers'
import Register from './components/Register'
import Reset from './components/Reset'
import Login from './components/Login'
import Person from './components/Person'
import ExaminationDetails from './components/Examinations-details'
import BiometricsVerification from './components/Biometrics-verification'
import ExamPayments from './components/Payments-exams'
import Materials from './components/Materials'
import Results from './components/Results'
import RegistrationConfirmation from './components/Registration-confirmation'
import AccountConfirmation from './components/Account-confirmation'
import CBODashboard from './components/CBO-Dashboard'
import CBOPerson from './components/CBO-person'
import CBOExaminations from './components/CBO-examinations'
import CBOCenters from './components/CBO-centers'
import CBOCandidates from './components/CBO-candidates'
import CBOPayment from './components/CBO-payment'
import CBOCenterStatus from './components/CBO-centerStatus'
import CBOAddNew from './components/CBO-addNew'

ReactDOM.render(<BrowserRouter >
  <div>
    <Switch>
      <Route exact path={"/dashboard"} component={Dashboard} />
      <Route exact path={"/user/results"} component={Results} />
      <Route exact path={"/user/materials"} component={Materials} />
      <Route exact path={"/user/details"} component={Person} />
      <Route exact path={"/user/biometrics"} component={BiometricsVerification} />
      <Route exact path={"/user/exams/details"} component={ExaminationDetails} />
      <Route exact path={"/user/exams/payments"} component={ExamPayments} />
      <Route exact path={"/user/registration/confirmation"} component={RegistrationConfirmation} />
      <Route exact path ={"/user/cbo"} component={CBODashboard}/>
      <Route exact path ={"/user/cbo/details"} component={CBOPerson}/>
      <Route exact path ={"/user/cbo/examinations"} component={CBOExaminations}/>
      <Route exact path ={"/user/centers"} component={CBOCenters}/>
      <Route exact path ={"/user/candidates"} component={CBOCandidates}/>
      <Route exact path ={"/user/center/payment"} component={CBOPayment}/>
      <Route exact path ={"/user/center/status"} component={CBOCenterStatus}/>
      <Route exact path ={"/user/center/addnew"} component={CBOAddNew}/>

    <Header >
    <Route exact path={"/"} component={App} />
    <Route exact path={"/news"} component={News} />
    <Route exact path={"/about"} component={About} />
    <Route exact path={"/contact"} component={Contact} />
    <Route exact path={"/examinations"} component={Examinations} />
    <Route exact path={"/offers"} component={Offers} />
    <Route exact path={"/centers"} component={Centers} />
    <Route exact path={"/register"} component={Register} />
    <Route exact path={"/reset"} component={Reset} />
    <Route exact path={"/login"} component={Login} />
    <Route exact path={"/account/confirm"} component={AccountConfirmation} />
  </Header>

    </Switch>
  </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
