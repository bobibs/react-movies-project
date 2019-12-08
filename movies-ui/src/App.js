import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import NowPlaying from './pages/NowPlaying';
import UpcomingFilm from './pages/UpcomingFilm';
import ViewDetailsPage from './pages/ViewDetailsPage';
import ManageAdmin from './pages/ManageAdmin';
import AddDataPage from './pages/AddDataPage';
import EditDataPage from './pages/EditDataPage';

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/now-playing' component={NowPlaying} />
				<Route exact path='/upcoming-film' component={UpcomingFilm} />
				<Route exact path='/view-details/:id' component={ViewDetailsPage} />
				<Route exact path='/manage-admin' component={ManageAdmin} />
				<Route exact path='/manage-admin/add-data' component={AddDataPage} />
				<Route exact path='/manage-admin/edit-data/:id' component={EditDataPage} />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
