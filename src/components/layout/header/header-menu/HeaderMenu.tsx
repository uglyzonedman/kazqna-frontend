import React from 'react'
import styles from '../Header.module.scss'
import Link from 'next/link'
import { HomeIcon } from 'lucide-react'
import { IoHomeOutline } from 'react-icons/io5'

const HeaderMenu = () => {
	return (
		<nav className={styles.header__content__menu}>
			<ul className={styles.header__content__menu__list}>
				<li className={styles.header__content__menu__list__item}>
					<Link
						href={'/'}
						className={styles.header__content__menu__list__item__link}
					>
						<IoHomeOutline size={28} color='#bec7d1' />
						<span>Главная</span>
					</Link>
				</li>
				<li className={styles.header__content__menu__list__item}>
					<Link
						href={'/'}
						className={styles.header__content__menu__list__item__link}
					>
						<IoHomeOutline size={28} color='#bec7d1' />
						<span>Все</span>
					</Link>
				</li>
				<li className={styles.header__content__menu__list__item}>
					<Link
						href={'/'}
						className={styles.header__content__menu__list__item__link}
					>
						<IoHomeOutline size={28} color='#bec7d1' />
						<span>Популярные</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderMenu
