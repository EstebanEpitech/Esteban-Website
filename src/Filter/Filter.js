import './Filter.scss';

import React from 'react';

export default class Filter extends React.Component {

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
				if (this.state.progress == 4) {
					window.location = "https://dev.loadednodes.com/jobs-selection"
				}
			}
		);
	}

	render() { 

		let post
		let web
		let question
		let content

		if (this.state.progress == 0) {
			question = "When you want your new job to begin ?"
			content = (
				<>
				<div className="home-main-content-input">
					<input
						type="text"
						placeholder="In 2 months"
						value={this.state.inputAge}
						onChange={this.handleInputAge}
						className=""
					/>
				</div>
				</>
			)
		} else if (this.state.progress == 1) {
			question = "Which salary are you expecting ?"
			content = (
				<>
				<div className="home-main-content-input">
					<input
						type="number"
						placeholder="10000"
						value={this.state.inputAge}
						onChange={this.handleInputAge}
						className=""
					/>
				</div>
				</>
			)
		} else if (this.state.progress == 2) {
			question = "Do you want to have responsabilities in your future job ?"
			content = (
				<>
				<div className="home-main-content-input">
					<input
						type="text"
						placeholder="Yes"
						value={this.state.inputAge}
						onChange={this.handleInputAge}
						className=""
					/>
				</div>
				</>
			)
		} else if (this.state.progress == 3) {
			question = "Does the future job have to be close to your current location ?"
			content = (
				<>
				<div className="home-main-content-input">
					<input
						type="text"
						placeholder="No"
						value={this.state.inputAge}
						onChange={this.handleInputAge}
						className="home-main-content-input_input"
					/>
				</div>
				</>
			)
		} 

		web = (
			<>
				<div className="home-main">
					<div className="home-main-question">
						<div className="home-main-question_text">{question}</div>
					</div>
					<div className="home-main-separator"></div>
					<div className="home-main-content">
						{content}
					</div>
					<div className="home-main-button">
						<div className="home-main-button_btn" onClick={this.handleSubmit}>{this.state.progress == 3 ? "Finish" : "Next"}</div>
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
