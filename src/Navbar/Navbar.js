import './Navbar.scss';

import React from 'react';

import LogoWannabees from '../Logo.PNG'
import ProfilePic from '../profile.webp'

export default class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			openModal: "",
			width: 0,
			height: 0,
		}
		this.handleOpenModal = this.handleOpenModal.bind(this)
		this.handleCloseModal = this.handleCloseModal.bind(this)
		this.profileClick = this.profileClick.bind(this)
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

	profileClick() {
		window.location = "https://dev.loadednodes.com/home"
	}

	render() { 

		let post
		let web

		web = (
			<>
				<div className="navbar">
					<img className="navbar_img" src={LogoWannabees} />
					<img className="navbar_picture" src={ProfilePic} onClick={this.profileClick}/>
				</div>
			</>
		)

		post = web
		return (
			post
		);
	}
}
