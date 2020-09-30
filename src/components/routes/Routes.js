import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Loader from '../utils/Loader';
import {HOME, CHATS, PROFILE} from './constants';
import AuthRoutes from './AuthRoutes';
import PrivateRoutes from './PrivateRoutes';

const Home = lazy(() => import('../home' /* webpackChunkName: "Home Page" */));
const Chats = lazy(() => import('../chats' /* webpackChunkName: "Chats Page" */));
const Profile = lazy(() => import('../profile' /* webpackChunkName: "Profile Page" */));

const Routes = () => {
	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<Switch>
					<AuthRoutes exact path={HOME} component={Home} />
					<PrivateRoutes exact path={CHATS} component={Chats} />
					<PrivateRoutes exact path={PROFILE} component={Profile} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default Routes;