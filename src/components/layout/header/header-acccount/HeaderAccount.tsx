import React from 'react'
import styles from '../Header.module.scss'
import { IoIosArrowDown, IoMdNotificationsOutline } from 'react-icons/io'
import Image from 'next/image'
import avatar from '../../../../assets/avatar.jpg'
const HeaderAccount = () => {
	return (
		<div className={styles.header__content__account}>
			<button className={styles.header__content__account__notification}>
				<IoMdNotificationsOutline color='#bec7d1' size={28} />
			</button>
			<div className={styles.header__content__account__user}>
				<div style={{ width: `${42}px`, height: `${42}px` }}>
					<Image
						src={avatar}
						alt={'Avatar'}
						width={42}
						height={42}
						sizes='100vw'
						style={{
							width: '100%',
							height: '100%',
							borderRadius: `${50}px`,
							objectFit: 'cover',
						}}
					/>
				</div>
				<IoIosArrowDown color='#bec7d1' size={22} />
			</div>
		</div>
	)
}

export default HeaderAccount
