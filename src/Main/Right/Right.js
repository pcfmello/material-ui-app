import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Image } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";
import {
	Grid,
	CardHeader,
	Avatar,
	IconButton,
	CardContent
} from "@material-ui/core";

const styles = () => ({
	content: {
		marginTop: 0
	},
	rightContainer: {
		background:
			"url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center",
		flex: 1
	},
	heightAdjust: {
		display: "flex",
		flexDirection: "column"
	}
});

const Right = ({ classes }) => (
	<Grid className={classes.heightAdjust} item xs={9}>
		<CardHeader
			avatar={
				<Avatar aria-label="Recipe" className={classes.avatar}>
					<Image />
				</Avatar>
			}
			action={
				<IconButton>
					<MoreVert />
				</IconButton>
			}
			title="Diego"
		/>
		<CardContent className={[classes.rightContainer, classes.content]} />
	</Grid>
);

Right.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styles)(Right);
