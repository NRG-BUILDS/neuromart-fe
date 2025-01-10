import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Dashboard from './pages/Dashboard';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DashboardLayout from './layout/DashboardLayout';
import LandingPage from './pages/LandingPage';
import AIAgents from './pages/AIAgents';
import Datasets from './pages/Datasets';
import UploadDatasets from './pages/Datasets/UploadDatasets';
import Models from './pages/Models';
import CodeEditor from './pages/CodeEditor';
import UploadModels from './pages/Models/UploadModels';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        index
        element={
          <>
            <PageTitle title="Neuromart" />
            <LandingPage />
          </>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <>
            <PageTitle title="Signin | Neuromart" />
            <SignIn />
          </>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <>
            <PageTitle title="Signup | Neuromart" />
            <SignUp />
          </>
        }
      />

      {/* ===============DASHBOARD PAGES WRAPPER START=============== */}
      <Route element={<DashboardLayout />}>
        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title="Dashboard | Neuromart" />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/code-editor"
          element={
            <>
              <PageTitle title="Code Editor | Neuromart" />
              <CodeEditor />
            </>
          }
        />
        <Route
          path="/agents"
          element={
            <>
              <PageTitle title="AI Agents | Neuromart" />
              <AIAgents />
            </>
          }
        />
        <Route
          path="/marketplace/datasets"
          element={
            <>
              <PageTitle title="Datasets | Neuromart" />
              <Datasets />
            </>
          }
        />
        <Route
          path="/marketplace/datasets/upload"
          element={
            <>
              <PageTitle title="Upload Datasets | Neuromart" />
              <UploadDatasets />
            </>
          }
        />
        <Route
          path="/marketplace/models"
          element={
            <>
              <PageTitle title="Models | Neuromart" />
              <Models />
            </>
          }
        />
        <Route
          path="/marketplace/models/upload"
          element={
            <>
              <PageTitle title="Upload Models | Neuromart" />
              <UploadModels />
            </>
          }
        />

        {/* ================DESIGN ASSETS================ */}
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | Neuromart" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | Neuromart" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | Neuromart" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | Neuromart" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | Neuromart" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Neuromart" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Neuromart" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Neuromart" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Neuromart" />
              <Buttons />
            </>
          }
        />
      </Route>
      {/* ===============DASHBOARD PAGES WRAPPER END=============== */}
    </Routes>
  );
}

export default App;
