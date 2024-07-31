import React, { FC } from 'react'
import styles from './Layout.module.scss'
import Header from './header/Header'
const Layout = ({ children }: ILayout): JSX.Element => {
	return (
		<div className={styles.layout}>
			<Header />
			<div>{children}</div>
		</div>
	)
}

export default Layout
