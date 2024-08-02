import React, { FC } from 'react'
import styles from './Layout.module.scss'
import Header from './header/Header'
import LayoutSidebar from './layout-sidebar/LayoutSidebar'
import LayoutProfile from './layout-profile/LayoutProfile'
const Layout = ({ children }: ILayout): JSX.Element => {
	return (
		<div className={styles.layout}>
			<LayoutSidebar />
			<div className={styles.layout__main}>{children}</div>
			<LayoutProfile />
		</div>
	)
}

export default Layout
