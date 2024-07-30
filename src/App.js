import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./global.scss";
import "./App.css";
import ServiceProvider from "../src/components/ServiceProvider";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import PartnerRegistration from "./pages/PartnerRegistration/PartnerRegistration";
import Att5GService from "./pages/Service/Att5GService";
import EdgeComputing from "./pages/Service/EdgeComputing";
import OmeSim from "./pages/Service/OmeSim";
import Prepaid from "./pages/Service/PrepaidS";
import OrderHistory from "./pages/Tracking/OrderHistory";
import OrderTracking from "./pages/Tracking/OrderTracking";
import RequestQuota from "./pages/Tracking/RequestQuota";

import ServiceDepJourney from "./pages/Service/ServiceDepJourney";

import ApiPage from "./components/ApiPage/ApiPage";
import ApiDesc from "./components/ApiDesc/ApiDesc";

import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const getUser = sessionStorage.getItem("lastname");
  const getRole = sessionStorage.getItem("lastname");

  return (
    <ServiceProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Router>
              <Routes>
                <Route path="/services/att5g" element={<Att5GService />} />
                <Route
                  path="/services/servicedeploy"
                  element={<ServiceDepJourney />}
                />
                <Route
                  path="/services/att5edgecomputing"
                  element={<EdgeComputing />}
                />
                <Route
                  path="/services/oemsimprocurement"
                  element={<OmeSim />}
                />
                <Route path="/services/prepaid" element={<Prepaid />} />
                <Route path="/order/tracking" element={<OrderTracking />} />
                <Route path="/order/history" element={<OrderHistory />} />
                <Route path="/order/requestquote" element={<RequestQuota />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/partnerregistration"
                  element={<PartnerRegistration />}
                />
                <Route path="/apipage" element={<ApiPage />} />
                <Route path="/apidesc" element={<ApiDesc />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" />} />

                <Route
                  path="*"
                  element={
                    <div>
                      <h2>404 Page not found</h2>
                    </div>
                  }
                />
              </Routes>
            </Router>
          </div>
        </PersistGate>
      </Provider>
    </ServiceProvider>
  );
}

export default App;
