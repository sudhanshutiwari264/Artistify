import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import VideoSearch from './VideoSearch';
import UserSection from './UserSection';
import EnvironmentBadges from './EnvironmentBadges'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	navBar: {
		backgroundColor: theme.palette.primary.dark
	}
}));


export default function MusicAppBar({
	handleSubmitVideoSearch,
	handleSearchTermInput,
	user,
	setUser,
	setGlobalChatOpen
}) {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.navBar}>
			<Toolbar
				display="flex"
				style={{ justifyContent: 'space-between' }}
			>
				<div>
					<IconButton href='#' >
						<img src='.\icon-logo.svg' height='48px' />
					</IconButton>

					<Typography
						display='inline'
						style={{ marginRight: '20px' }}
						children={process.env.REACT_APP_NAME}
					/>

					<IconButton href='https://discord.gg/Xkpvnz9' target='_blank'>
						<img src='https://discord.com/assets/e7a3b51fdac2aa5ec71975d257d5c405.png' height='32px' />
					</IconButton>
					<EnvironmentBadges />
				</div>

				<VideoSearch
					handleSearchTermInput={handleSearchTermInput}
					handleSubmitVideoSearch={handleSubmitVideoSearch}
				/>

				<UserSection
					user={user}
					setUser={setUser}
					setGlobalChatOpen={setGlobalChatOpen}
				/>
			</Toolbar>
		</AppBar>
	);
}
