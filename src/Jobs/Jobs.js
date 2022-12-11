import './Jobs.scss';

import React from 'react';

const QueryEngine = require('@comunica/query-sparql').QueryEngine;
const myEngine = new QueryEngine();

export default class Jobs extends React.Component {

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

	async handleFilter() {
		window.location = "https://dev.loadednodes.com/filter"
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

				<div className="card-main">
					<div className="card-main-title">
						<div className="card-main-title_text">Product Expert</div>
					</div>
					<div className="card-main-separator"></div>
					<div className="card-main-content">
						Toys Motors is hiring a Product Expert to satisfy custommers expectations.
						<strong>Amsterdam, Netherlands</strong>
					</div>
					<div className="card-main-button">
						<div className="card-main-button_btn" onClick={this.handleSubmit}>Wannabee</div>
					</div>
				</div>

				<div className="card-main">
					<div className="card-main-title">
						<div className="card-main-title_text">Systems analyst</div>
					</div>
					<div className="card-main-separator"></div>
					<div className="card-main-content">
						Flugrl is hiring a Systems analyst to conduct a new project development
						<strong>Milano, Italy</strong>
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
					<div className="job_title">Job offers related to you</div>
					<div className="job_filter" onClick={this.handleFilter}>Find something for me</div>
				</div>
				<div className='card'>
					{cards}
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
