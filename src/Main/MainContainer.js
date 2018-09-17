import React from "react";
import { Image, Work, BeachAccess } from "@material-ui/icons";
import Main from "./Main";

class MainContainer extends React.Component {
	contacts = [
		{ id: 1, name: "Diego", text: "Lorem ipsum", image: <Image /> },
		{ id: 2, name: "Robson", text: "Lorem ipsum", image: <Work /> },
		{ id: 3, name: "Cleiton", text: "Lorem ipsum", image: <BeachAccess /> }
	];

	render() {
		return <Main contacts={this.contacts} />;
	}
}

export default MainContainer;
