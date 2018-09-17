import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";
import Left from "./Left/Left";
import Right from "./Right/Right";

const styles = () => ({
	root: {
		padding: "50px 100px",
		zIndex: 999,
		position: "absolute"
	},
	card: {
		display: "flex",
		height: "calc(100vh - 100px)"
	},
	background: {
		position: "absolute",
		height: 200,
		width: "100%",
		top: 0,
		background: "#7159c1"
	}
});

const Main = ({ contacts, classes }) => (
	<div>
		<div className={classes.background} />
		<Grid container className={classes.root}>
			<Grid item xs={12} style={{ minWidth: 800 }}>
				<Card className={classes.card}>
					<Grid container>
						<Left contacts={contacts} />
						<Right />
					</Grid>
				</Card>
			</Grid>
		</Grid>
	</div>
);

Main.propTypes = {
	contacts: PropTypes.array,
	classes: PropTypes.object
};

export default withStyles(styles)(Main);
