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
import RegistrationReceipt from './components/remita/Registration-receipts'
import ResultReceipt from './components/remita/Results-receipts'
import MaterialsReceipt from './components/remita/Materials-receipts'
import CBODashboard from './components/CBO-Dashboard'
import CBOPerson from './components/CBO-person'
import CBOExaminations from './components/CBO-examinations'
import CBOCenters from './components/CBO-centers'
import CBOCandidates from './components/CBO-candidates'
import CBOPayment from './components/CBO-payment'
import CBOCenterStatus from './components/CBO-centerStatus'
import CBOAddNew from './components/CBO-addNew'
import AdminDashboard from './components/Admin-dashboard'
import AdminSeries from './components/Admin-series'
import AdminCandidate from './components/Admin-candidate'
import AdminDetails from './components/Admin-details'
import AdminCenters from './components/Admin-centers'
import AdminCenterInfo from './components/Admin-centerinfo'
import AdminScholars from './components/Admin-scholars'
import AdminScholarInfo from './components/Admin-scholarinfo'
import AdminCBTC from './components/Admin-CBTC'
import AdminMaterial from './components/Admin-Material'
import AdminPrograms from './components/Admin-Programs'
import AdminCourses from './components/Admin-courses'
import AdminPayment from './components/Admin-payment'
import AdminCandidateRegistration from './components/Admin-candidateRegistration'
import AdminCandidateResult from './components/Admin-candidateResult'
import AdminCandidateMaterial from './components/Admin-candidateMaterial'
import AdminUploadResult from './components/Admin-uploadResult'
import CentersReceipt from './components/remita/Center-payments-receipt'
import AdminResultSeries from './components/Admin-ResultSeries'

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
      <Route exact path={"/receipts/registration/:id"} component={RegistrationReceipt} />
      <Route exact path={"/receipts/results/:id"} component={ResultReceipt} />
      <Route exact path={"/receipts/materials/:id"} component={MaterialsReceipt} />
      <Route exact path={"/receipts/centers/:id"} component={CentersReceipt} />
      <Route exact path ={"/user/cbo"} component={CBODashboard}/>
      <Route exact path ={"/user/cbo/details"} component={CBOPerson}/>
      <Route exact path ={"/user/cbo/examinations"} component={CBOExaminations}/>
      <Route exact path ={"/user/centers"} component={CBOCenters}/>
      <Route exact path ={"/user/candidates"} component={CBOCandidates}/>
      <Route exact path ={"/user/center/payment"} component={CBOPayment}/>
      <Route exact path ={"/user/center/status"} component={CBOCenterStatus}/>
      <Route exact path ={"/user/center/addnew"} component={CBOAddNew}/>
      <Route exact path ={"/user/admin/dashboard"} component={AdminDashboard}/>
      <Route exact path ={"/user/admin/series"} component={AdminSeries}/>
      <Route exact path ={"/user/admin/candidate"} component={AdminCandidate}/>
      <Route exact path ={"/user/admin/details"} component={AdminDetails}/>
      <Route exact path ={"/user/admin/centers"} component={AdminCenters}/>
      <Route exact path ={"/user/admin/centerinfo/:id"} component={AdminCenterInfo}/>
      <Route exact path ={"/user/admin/Scholars"} component={AdminScholars}/>
      <Route exact path ={"/user/admin/scholarinfo"} component={AdminScholarInfo}/>
      <Route exact path ={"/user/admin/cbtc"} component={AdminCBTC}/>
      <Route exact path ={"/user/admin/programs"} component={AdminPrograms}/>
      <Route exact path ={"/user/admin/material"} component={AdminMaterial}/>
      <Route exact path ={"/user/admin/courses"} component={AdminCourses}/>
      <Route exact path ={"/user/admin/payment"} component={AdminPayment}/>
      <Route exact path ={"/user/admin/payments/registrations"} component={AdminCandidateRegistration}/>
      <Route exact path ={"/user/admin/payments/results"} component={AdminCandidateResult}/>
      <Route exact path ={"/user/admin/payments/materials"} component={AdminCandidateMaterial}/>
      <Route exact path ={"/user/admin/candidate/upload"} component={AdminUploadResult}/>
      <Route exact path ={"/user/admin/result/series"} component={AdminResultSeries}/>
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
    <Route exact path={"/account/confirm/:id"} component={AccountConfirmation} />
  </Header>

    </Switch>
  </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
