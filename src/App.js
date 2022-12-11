import './App.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Navbar from './Navbar/Navbar.js';
import Jobs from './Jobs/Jobs.js';
import JobsSelection from './JobsSelection/JobsSelection.js';
import Home from './Home/Home.js';
import Register from './Home/Register.js';
import Filter from './Filter/Filter.js';

import React from 'react';
import HomeCreated from './Home/HomeCreated';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			openModal: "",
			width: 0,
			height: 0,
		}
		this.openModal = this.openModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
		this.getWindowDimensions = this.getWindowDimensions.bind(this)
	}

	componentDidMount() {
		this.getWindowDimensions()
		window.addEventListener('resize', () => this.getWindowDimensions());
	}

	componentDidUpdate() {
	}

	openModal() {
		this.setState(
			(pre) => ({
				openModal: "is-active"
			}), () => {
				console.log("Modal opened");
			}
		);
	}

	closeModal() {
		this.setState(
			(pre) => ({
				openModal: ""
			}), () => {
				console.log("Modal closed");
			}
		);
	}

	getWindowDimensions() {
		const { innerWidth: width, innerHeight: height } = window;
		this.setState(
			(pre) => ({
				width: width,
				height: height,
			}),
			() => {
				console.log()
			}
		);
	  }

	render() { 

		let post
		let web

		web = (
			<>
				<div className="app">
					<Navbar {...this.state} openModal={this.openModal} closeModal={this.closeModal}/>
					<div className="wrapper">
						<Switch>
							<Route exact path='/'>
								<Home {...this.state} openModal={this.openModal} closeModal={this.closeModal}/>
							</Route>
							<Route exact path='/home'>
								<HomeCreated {...this.state} openModal={this.openModal} closeModal={this.closeModal}/>
							</Route>
							<Route exact path='/register'>
								<Register {...this.state} openModal={this.openModal} closeModal={this.closeModal}/>
							</Route>
							<Route exact path='/filter'>
								<Filter {...this.state} openModal={this.openModal} closeModal={this.closeModal}/>
							</Route>
							<Route  path='/jobs'>
								<Jobs {...this.state} openModal={this.openModal} closeModal={this.closeModal}/>
							</Route>
							<Route  path='/jobs-selection'>
								<JobsSelection {...this.state} openModal={this.openModal} closeModal={this.closeModal}/>
							</Route>
						</Switch>
					</div>
					<div className={"overlay-app " + this.state.openModal}></div>
				</div>
			</>
		)

		post = web
		return (
			<BrowserRouter>{post}</BrowserRouter>
		);
	}
}
