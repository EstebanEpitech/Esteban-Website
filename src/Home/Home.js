import './Home.scss';

import React from 'react';

import MalePic from '../male_pic.png'
import FemalePic from '../female_pic.png'

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			openModal: "",
			width: 0,
			height: 0,
			progress: 0,
		}
		this.handleOpenModal = this.handleOpenModal.bind(this)
		this.handleCloseModal = this.handleCloseModal.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
	}

	componentDidUpdate() {
	}

	handleOpenModal() {
		this.setState(
			(pre) => ({
				openModal: "is-active"
			}), () => {
				this.props.openModal()
			}
		);
	}

	handleCloseModal() {
		this.setState(
			(pre) => ({
				openModal: ""
			}), () => {
				this.props.closeModal()
			}
		);
	}

	handleSubmit() {
		let current = this.state.progress

		this.setState(
			(pre) => ({
				progress: current + 1
			}), () => {
				window.location = "https://dev.loadednodes.com/register"
			}
		);
	}

	render() { 

		let post
		let web
		let question
		let content

		web = (
			<>
				<div className="home-main_login">
					<div className="home-main-question">
						<div className="home-main-question_text">Select an account</div>
					</div>
					<div className="home-main-content">
						<div className="home-main-content-login">
							<div className="home-main-content-login-profile">
								<img className="home-main-content-login-profile_img" src={MalePic} />
								<div className="home-main-content-login-profile_name">Andy</div>
							</div>
							<div className="home-main-content-login-profile">
								<img className="home-main-content-login-profile_img" src={FemalePic} />
								<div className="home-main-content-login-profile_name">Lola</div>
							</div>
						</div>
					</div>
					<div className="home-main-separator_btn"></div>
					<div className="login-main-button">
						<div className="home-main-button_btn" onClick={this.handleSubmit}>Or create an account</div>
					</div>
				</div>
			</>
		)

		post = web
		return (
			post
		);
	}
}
