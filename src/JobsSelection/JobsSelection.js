import './JobsSelection.scss';

import React from 'react';

export default class JobsSelection extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			openModal: "",
			width: 0,
			height: 0,
		}
		this.handleOpenModal = this.handleOpenModal.bind(this)
		this.handleCloseModal = this.handleCloseModal.bind(this)
		this.handleFilter = this.handleFilter.bind(this)
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

	handleFilter() {
		window.location = "https://dev.loadednodes.com/jobs"
	}

	render() { 

		let post
		let web
		let cards

		cards = (
			<>
				<div className="card-main">
					<div className="card-main-title">
						<div className="card-main-title_text">Web developer</div>
					</div>
					<div className="card-main-separator"></div>
					<div className="card-main-content">
						Full-Stack Web developer at Toyota Headquarters.
						<strong>Stockholm, Sweden</strong>
					</div>
					<div className="card-main-button">
						<div className="card-main-button_btn" onClick={this.handleSubmit}>Wannabee</div>
					</div>
				</div>

				<div className="card-main">
					<div className="card-main-title">
						<div className="card-main-title_text">IT security specialist</div>
					</div>
					<div className="card-main-separator"></div>
					<div className="card-main-content">
						IT security specialist for Haissan industrial group.
						<strong>Malmo, Sweden</strong>
					</div>
					<div className="card-main-button">
						<div className="card-main-button_btn" onClick={this.handleSubmit}>Wannabee</div>
					</div>
				</div>

				<div className="card-main">
					<div className="card-main-title">
						<div className="card-main-title_text">REMOTE WORK - INTERNET ASSESSORS</div>
					</div>
					<div className="card-main-separator"></div>
					<div className="card-main-content">
						We are hiring Personalized Internet Assessors in France
						<strong>Remote Work</strong>
					</div>
					<div className="card-main-button">
						<div className="card-main-button_btn" onClick={this.handleSubmit}>Wannabee</div>
					</div>
				</div>
			</>
		)

		web = (
			<>
				<div className="job">
					<div className="job_title">Specific job offers for you</div>
					<div className="job_filter" onClick={this.handleFilter}>Go to all jobs page</div>
				</div>
				<div className='card'>
					{cards}
				</div>
			</>
		)

		post = web
		return (
			post
		);
	}
}
