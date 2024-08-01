import React from 'react'
import styles from './Header.module.scss'
import { ChevronDown } from 'lucide-react'
import HeaderLogo from './header-logo/HeaderLogo'
import HeaderMenu from './header-menu/HeaderMenu'
import HeaderSearch from './header-search/HeaderSearch'
import HeaderCreatePost from './header-create-post/HeaderCreatePost'
import HeaderAccount from './header-acccount/HeaderAccount'
const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__content}>
					<HeaderLogo />
					<HeaderMenu />
					<HeaderSearch />
					<HeaderCreatePost />
					<HeaderAccount />
				</div>
			</div>
		</header>
	)
}

export default Header
