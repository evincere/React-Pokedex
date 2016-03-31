import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testing } from './../actions/action';

class SearchBar extends Component {
	constructor() {
		super();
	}

	render() {
		var { test } = this.props;
		console.log(this.props);
		return (
			<input onChange={test} className="search form-control" type="text" placeholder="Search" />
		);
	}
}

const mapStateToProps = state => {
	return {
		zzz: state
	}
}

const mapDispatchToProps = dispatch => {
	return {
		test: e => dispatch({type: 'BEBOP', meh: e.target.value})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)