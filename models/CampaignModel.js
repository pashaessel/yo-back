import sqlite3 from "sqlite3";
class Campaign {
	name;
	owner;
	createdDate;

	constructor(props) {
		let { name, owner, createdDate } = props;
		this.name = name;
		this.owner = owner;
		this.createdDate = createdDate;
	}
}

export default Campaign;

