import './Home.scss';

import React from 'react';

export default class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			openModal: "",
			width: 0,
			height: 0,
			progress: 0,
			lang: "au",
			country: "australia",
			currency: "aud",
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

	async handleSubmit() {
		let current = this.state.progress

		this.setState(
			(pre) => ({
				progress: current + 1,
				inputAge: null
			}), () => {
				if (this.state.progress == 4) {
					window.location = "https://dev.loadednodes.com/jobs"
				}
			}
		);

		const result = await myEngine.query(`
			PREFIX db:<http://dbpedia.org/resource/>
			PREFIX foaf: <http://xmlns.com/foaf/0.1/>
			PREFIX dbo: <http://dbpedia.org/ontology/>
			PREFIX owl: <http://www.w3.org/2002/07/owl#>
			PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
			PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
			PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
			PREFIX dc: <http://purl.org/dc/elements/1.1/>
			PREFIX : <http://dbpedia.org/resource/>
			PREFIX dbpedia2: <http://dbpedia.org/property/>
			PREFIX dbpedia: <http://dbpedia.org/>
			PREFIX yago: <http://yago-knowledge.org/resource/>
			PREFIX sdo: <http://schema.org/>
			PREFIX sdo_jp: <http://schema.org/JobPosting/>
			PREFIX sdo_pl: <http://schema.org/Place/>
			PREFIX sdo_pa: <http://schema.org/PostalAddress/>
			PREFIX sdo_co: <http://schema.org/Country/>
			PREFIX sdo_mv: <http://schema.org/MonetaryValue/>
			PREFIX sdos_mv: <https://schema.org/MonetaryValue/>
			
			SELECT distinct ?src
			WHERE {
			{ 
			GRAPH ?src
			{[] a sdo:JobPosting .}
			BIND (replace(str(?src), 
							'https?://([^?/]+).*',
							'\\1') AS ?domain)
				FILTER (strends(?domain, '.` + this.state.lang + `'))
			}
			UNION
			{
			GRAPH ?src
			{
				{[] a sdo:JobPosting ;
					(sdo:jobLocation|sdo_jp:jobLocation)/
					(sdo:address|sdo_pl:address)/
					(sdo:addressCountry|sdo_pa:addressCountry)/
					((sdo:name|sdo_co:name)?) ?country .
					FILTER (isliteral(?country) && 
							lcase(replace(str(?country),
										'[ \n\t]*(.*)[ \n\t]*',
										'\\1')) in ('` + this.state.lang + `', '` + this.state.country + `'))
				}
				UNION
				{[] a sdo:JobPosting ;
					((sdo:salaryCurrency|sdo_jp:salaryCurrency)|
					(sdo:baseSalary|sdo_jp:baseSalary)/
					(sdo:currency|sdo_mv:currency|sdos_mv:currency)) ?currency .
				BIND (replace(str(?currency), '[ \n\t]+', '') as ?curr)
				FILTER (lcase(?curr) = '` + this.state.currency + `')}
			}
			}
			}

			LIMIT 10`, {
			sources: ['http://fragments.dbpedia.org/2015/en'],
			});

			if (result.resultType === 'bindings') {
				const bindingsStream = await result.execute();

				bindingsStream.on('data', (binding) => {
					this.setState({
						binding: binding.toString(),
					});
				});
			}
	}

	render() { 

		let post
		let web
		let question
		let content

		if (this.state.progress == 0) {
			question = "What is your name ?"
			content = (
				<>
				<div className="home-main-content-input">
					<input
						type="text"
						placeholder="John Doe"
						value={this.state.inputName}
						onChange={this.handleInputAge}
						className=""
					/>
				</div>
				</>
			)
		} else if (this.state.progress == 1) {
			question = "What is your age ?"
			content = (
				<>
				<div className="home-main-content-input">
					<input
						type="number"
						placeholder="0"
						value={this.state.inputAge}
						onChange={this.handleInputAge}
						className=""
					/>
				</div>
				</>
			)
		} else if (this.state.progress == 2) {
			question = "What's your level of education ?"
			content = (
				<>
				<div className="home-main-content-input">
					<input
						type="text"
						placeholder="Master"
						value="Bachelor in Informatics"
						onChange={this.handleInputAge}
						className=""
					/>
				</div>
				</>
			)
		} else if (this.state.progress == 3) {
			question = "From which University you come from ?"
			content = (
				<>
				<div className="home-main-content-input">
					<input
						type="text"
						placeholder="Jonkoping University"
						value="Epitech Lille"
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
