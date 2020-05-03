import React from 'react'
import { useIdentity } from '../lib/withIdentity'
import styled from 'styled-components'

const StyledProfile = styled.section`
	width: 300px;
	margin: auto;
	text-align: center;
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.46);
	padding: 45px 15px;
	border-radius: 10px;

	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
`

export default () => {
	const identity: any = useIdentity()

	if (!identity) {
		return null
	}

	return (
		<main>
			<StyledProfile>
				<img src={identity.photos[0].value} alt="profile-photo" />
				<h3 className="username">@{identity.username}</h3>
				<h2>{identity.displayName}</h2>
			</StyledProfile>
		</main>
	)
}
