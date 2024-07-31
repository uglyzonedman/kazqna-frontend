import React from 'react'
import styles from '../Header.module.scss'
import { IoIosSearch } from 'react-icons/io'
const HeaderSearch = () => {
	return (
		<div className={styles.header__content__search}>
			<IoIosSearch color='#1d1d1d' size={24} />

			<input type='text' />
		</div>
	)
}

export default HeaderSearch
