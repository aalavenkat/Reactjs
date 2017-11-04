"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
	render: function() {
		return (
			<div>
			<h1> page Not Found </h1>
			<p> sorry you got in to wrong page </p>
			<p> <Link to="app"> Back to where you came from </Link> </p>
			</div>
			);
		}
	});

module.exports = NotFoundPage;