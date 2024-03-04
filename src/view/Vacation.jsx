const Vacation = ({ available }) => {
	if (available === true) {
	    return	<h1>Going on vacation</h1>
	} else if (available === false) {
	    return	<h1>Too busy for Vacations</h1>
	}

	return <h1>{available}</h1>
}

export default Vacation;
