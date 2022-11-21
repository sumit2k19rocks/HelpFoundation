import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Events from './components/pages/events';
import AnnualReport from './components/pages/annual';
import Teams from './components/pages/team';
import Blogs from './components/pages/blogs';
import SignUp from './components/pages/signup';
import Footer from './components/footer';
import ImageComp from './components/imageComp';

function App() {
  
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
	</Routes>
  
  <ImageComp marginBottom='20px'></ImageComp>
  <Footer marginTop='10px'/>
  
	</Router>
 
);
}

export default App;
