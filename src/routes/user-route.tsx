import React, { Suspense, lazy } from 'react';
import {  Routes, Route  } from 'react-router-dom';
import { routeConstants } from '../services/constants/route-constants';
import Loader from '../components/block-components/loader/loader';


const UserModule = lazy(() => import("../layout/user/user-module"));
const HomePage = lazy(() => import("../pages/user/home/home"));
const RegisterPage = lazy(() => import("../pages/user/register/register"));
const LoginPage = lazy(() => import("../pages/user/login/login"));
const AboutPage = lazy(() => import("../pages/user/about/about"));
const NewsPage = lazy(() => import("../pages/user/news/news"));
const NewsDetailPage = lazy(() => import("../pages/user/news-detail/news-detail"));
const FaqPage = lazy(() => import("../pages/user/faq/faq"));
const HelpPage = lazy(() => import("../pages/user/help/help"));
const HelpDetailPage = lazy(() => import("../pages/user/help-detail/help-detail"));
const LearnPage = lazy(() => import("../pages/user/learn/learn"));
const LearnDetailPage = lazy(() => import("../pages/user/learn-detail/learn-detail"));
const ProductUpdatesPage = lazy(() => import("../pages/user/product-updates/product-updates"));
const PrivacyPolicyPage = lazy(() => import("../pages/user/privacy-policy/privacy-policy"));
const TermsPage = lazy(() => import("../pages/user/terms/terms"));
const AmlPolicyPage = lazy(() => import("../pages/user/aml-policy/aml-policy"));
const CareersPage = lazy(() => import("../pages/user/careers/careers"));
const CareerDetailPage = lazy(() => import("../pages/user/careers-detail/careers-detail"));
const ContactPage = lazy(() => import("../pages/user/contact/contact"));
const OperatorsPage = lazy(() => import("../pages/user/operators/operators"));
const CryptoListPage = lazy(() => import("../pages/user/crypto-list/crypto-list"));
const PlaceHolderPage = lazy(() => import("../pages/user/place-holder/place-holder"));

function UserRoute() {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path={routeConstants.all} element={<UserModule/>}>
          <Route path={routeConstants.all} element={<HomePage/>}></Route>
          <Route path={routeConstants.register} element={<RegisterPage/>}></Route>
          <Route path={routeConstants.userLogin} element={<LoginPage/>}></Route>
          <Route path={routeConstants.about} element={<AboutPage/>}></Route>
          <Route path={routeConstants.industryNews} element={<NewsPage/>}></Route>
          <Route path={routeConstants.industryNews + '/:id'} element={<NewsDetailPage/>}></Route>
          <Route path={routeConstants.faq} element={<FaqPage/>}></Route>
          <Route path={routeConstants.help} element={<HelpPage/>}></Route>
          <Route path={routeConstants.help + '/:id'} element={<HelpDetailPage/>}></Route>
          <Route path={routeConstants.learn} element={<LearnPage/>}></Route>
          <Route path={routeConstants.learn + '/:id'} element={<LearnDetailPage/>}></Route>
          <Route path={routeConstants.productUpdates} element={<ProductUpdatesPage/>}></Route>
          <Route path={routeConstants.privacyPolicy} element={<PrivacyPolicyPage/>}></Route>
          <Route path={routeConstants.terms} element={<TermsPage/>}></Route>
          <Route path={routeConstants.amlPolicy} element={<AmlPolicyPage/>}></Route>
          <Route path={routeConstants.careers} element={<CareersPage/>}></Route>
          <Route path={routeConstants.careers + '/:id'} element={<CareerDetailPage/>}></Route>
          <Route path={routeConstants.contact} element={<ContactPage/>}></Route>
          <Route path={routeConstants.operators} element={<OperatorsPage/>}></Route>
          <Route path={routeConstants.cryptoCurrencies} element={<CryptoListPage/>}></Route>
          <Route path={routeConstants.placeHolder} element={<PlaceHolderPage/>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default UserRoute;
