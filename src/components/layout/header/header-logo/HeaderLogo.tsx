import { ChevronDown } from 'lucide-react'
import React from 'react'
import styles from '../Header.module.scss'
const HeaderLogo = () => {
	return (
		<div className={styles.header__content__logo}>
			<h3 className={styles.header__content__logo__title}>KazQ&N</h3>
			<div className={styles.header__content__logo__type}>
				<ChevronDown color='#ffffff' size={32} />
			</div>
		</div>
	)
}

export default HeaderLogo
