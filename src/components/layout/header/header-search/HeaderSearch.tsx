import React from 'react'
import styles from '../Header.module.scss'
import { IoIosSearch } from 'react-icons/io'
const HeaderSearch = () => {
	return (
		<div className={styles.header__content__search}>
			<IoIosSearch color='#bec7d1' size={24} />
			<input type='text' placeholder='Поиск сообщества или поста' />
		</div>
	)
}

export default HeaderSearch
