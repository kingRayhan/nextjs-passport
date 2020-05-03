import { StrategyOptions } from 'passport-github'

export interface AppConfig {
	isDevelopment: boolean
	hostingURL: string
	github: StrategyOptions
}

const getOAuthUrls: (
	hostName: string,
	app: string
) => { callbackURL: string } = (hostName: string, app: string) => ({
	// Alternatively, use `[app].ts` filenames for paramaterized urls
	callbackURL: `${hostName}/api/auth/callback/${app}`
})

const isDevelopment = process.env.NODE_ENV !== 'production'
const hostingURL = process.env.HOSTING_URL || 'http://localhost:3000'

const appConfig: AppConfig = {
	isDevelopment,
	hostingURL,
	github: {
		passReqToCallback: false,
		clientID: 'Iv1.68e005921c9168f0',
		clientSecret: '64f179e150ddcb2ba8e51649f09b7375207bdea7',
		...getOAuthUrls(hostingURL, 'github'),
		scope: 'user:email'
	}
}

export default appConfig
