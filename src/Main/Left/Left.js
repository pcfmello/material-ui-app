import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import {
	Paper,
	Typography,
	Grid,
	CardHeader,
	Avatar,
	List,
	ListItem,
	ListItemText
} from "@material-ui/core";

const styles = () => ({
	rightBorder: {
		borderRight: "solid #d0d0d0 1px"
	},
	paper: {
		backgroundColor: "#9de1fe",
		padding: 20
	},
	information: {
		color: "#444"
	}
});

const Left = ({ contacts, classes }) => (
	<Grid item xs={3}>
		<CardHeader
			className={classes.rightBorder}
			avatar={
				<Avatar aria-label={"Recipe"} className={classes.avatar}>
					H
				</Avatar>
			}
		/>
		<Paper className={classes.paper} elevation={0}>
			<Typography className={classes.information} variant="subheader">
				Acesse nossa comunidade no Discord e fique por dentro das novidades!
			</Typography>
		</Paper>
		<List>
			{contacts.map(item => (
				<ListItem>
					<Avatar>{item.image}</Avatar>
					<ListItemText primary={item.name} secondary={item.text} />
				</ListItem>
			))}
		</List>
	</Grid>
);

Left.propTypes = {
	contacts: PropTypes.array,
	classes: PropTypes.object
};

export default withStyles(styles)(Left);
