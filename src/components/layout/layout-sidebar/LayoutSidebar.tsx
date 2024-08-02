import React from 'react'
import styles from '../Layout.module.scss'
import Link from 'next/link'
import { IoIosSearch } from 'react-icons/io'
const LayoutSidebar = () => {
	return (
		<div className={styles.layout__sidebar}>
			<div className={styles.layout__sidebar__logo}>
				<Link href={'/'}>KAZHABR</Link>
			</div>
			<div className={styles.layout__sidebar__search}>
				<IoIosSearch color='#bec7d1' size={24} />
				<input type='text' placeholder='Поиск сообщества или поста' />
			</div>
			<nav className={styles.layout__sidebar__nav}>
				<ul className={styles.layout__sidebar__nav__list}>
					<li className={styles.layout__sidebar__nav__list__item}>
						<Link href={'/'}>Главная</Link>
					</li>
					<li className={styles.layout__sidebar__nav__list__item}>
						<Link href={'/'}>Популярные</Link>
					</li>
					<li className={styles.layout__sidebar__nav__list__item}>
						<Link href={'/'}>Премиум подписка</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.layout__sidebar__line}></div>
			<nav className={styles.layout__sidebar__topics}>
				<h3 className={styles.layout__sidebar__topics__title}>Темы</h3>
				<ul className={styles.layout__sidebar__topics__list}>
					<li className={styles.layout__sidebar__topics__list__item}>
						<Link href={'/'}>Игры</Link>
					</li>
					<li className={styles.layout__sidebar__topics__list__item}>
						<Link href={'/'}>Фильмы</Link>
					</li>
					<li className={styles.layout__sidebar__topics__list__item}>
						<Link href={'/'}>Музыка</Link>
					</li>
					<li className={styles.layout__sidebar__topics__list__button}>
						<button>Показать еще</button>
					</li>
				</ul>
			</nav>
			<div className={styles.layout__sidebar__line}></div>
			<nav className={styles.layout__sidebar__topics}>
				<h3 className={styles.layout__sidebar__topics__title}>Сообщества</h3>
				<ul className={styles.layout__sidebar__topics__list}>
					<li className={styles.layout__sidebar__topics__list__item}>
						<Link href={'/'}>k/Dota</Link>
					</li>
					<li className={styles.layout__sidebar__topics__list__item}>
						<Link href={'/'}>k/Dota</Link>
					</li>
					<li className={styles.layout__sidebar__topics__list__item}>
						<Link href={'/'}>k/Dota</Link>
					</li>
					<li className={styles.layout__sidebar__topics__list__button}>
						<button>Показать еще</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default LayoutSidebar
