import Head from 'next/head';
import styles from '../styles/error.module.scss';

function Error404() {
	return (
		<div className={styles.main}>
			<Head>
				<title>404: Page not found!</title>
			</Head>
			<h1>Apologies... this page returned a 404 page not found error!</h1>
			<p>
				You can try troubleshooting it or{' '}
				<a href='https://github.com/jamesinaxx/jamesinaxx/issues'>
					let me know
				</a>
			</p>
			<p>In the meantime, have a cat to make you feel better :)</p>
			<img
				src={encodeURI('https://cataas.com/cat/says/Sorry <3')}
				alt='Kitty'
			></img>
		</div>
	);
}

export default Error404;
