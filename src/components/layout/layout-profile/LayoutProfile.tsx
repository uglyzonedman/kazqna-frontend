import React from 'react'
import styles from '../Layout.module.scss'
import avatar from '../../../assets/avatar.jpg'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import Link from 'next/link'
const LayoutProfile = () => {
	return (
		<div className={styles.layout__profile}>
			<div className={styles.layout__profile__avatar}>
				<div style={{ width: `${120}px`, height: `${120}px` }}>
					<Image
						src={avatar}
						alt={'Avatar'}
						width={120}
						height={120}
						sizes='100vw'
						style={{
							width: '100%',
							height: '100%',
							borderRadius: `${100}px`,
							objectFit: 'cover',
						}}
					/>
				</div>
			</div>
			<h3 className={styles.layout__profile__login}>u/uglyZonedMan</h3>
			<div className={styles.layout__profile__status}>
				<div
					className={styles.layout__profile__status__item}
					style={{ background: '#d33d0e' }}
				></div>
				<span>offline</span>
			</div>
			<div className={styles.layout__profile__info}>
				<div className={styles.layout__profile__info__karma}>
					<h3>12.5k</h3>
					<span>Репутация</span>
				</div>
				<div className={styles.layout__profile__info__age}>
					<h3>2y 3m</h3>
					<span>Возраст на хабре</span>
				</div>
			</div>
			<nav className={styles.layout__profile__navigation}>
				<ul className={styles.layout__profile__navigation__list}>
					<li className={styles.layout__profile__navigation__list__item}>
						<FaRegUserCircle color='969797' size={26} />
						<Link href='/'>Показать профиль</Link>
					</li>
					<li className={styles.layout__profile__navigation__list__item}>
						<FaRegUserCircle color='969797' size={26} />
						{/* 969797 */}
						<Link href='/'>Сохраненные записи</Link>
					</li>
					<li className={styles.layout__profile__navigation__list__item}>
						<FaRegUserCircle color='969797' size={26} />
						<Link href='/'>История</Link>
					</li>
					<li className={styles.layout__profile__navigation__list__item}>
						<FaRegUserCircle color='969797' size={26} />
						<Link href='/'>Аналитика</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default LayoutProfile
