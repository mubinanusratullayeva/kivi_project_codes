import styles from './componentPro.module.scss';

import OvalCompo from '../../../assets/img/compoImg.png'
import { ProfileButton, ProfileButtonSecond } from '../ProfileButton/Button';
import { Link } from 'react-router-dom';

export function ComponentInProfile() {
    return (
        <div className={styles.compo}>
            <div className={styles.compo__head}>
                <img src={OvalCompo} alt="Oval img component" />
                <h3>Срочно нужен программист yii2</h3>
                <span className={styles.blockSpan}>
                    <span>2 000 000</span>
                    <span>6 000 000 сум</span>
                </span>
                <span className={styles.blockSpan}>
                    <span># 345 002</span>
                    <span>С: 28 июнь</span>
                    <span>По: 28 июль</span>
                </span>
                <ProfileButton text='Поднять' />
                <ProfileButtonSecond text='Рекламировать' />
            </div>
            <div className={styles.compo__foot}>
                <Link style={{ color: '#304FFF', textDecoration: 'none' }} to='/profile'>Статистика</Link>
                <span>Просмотры: 195</span>
                <span>Тел.: 200</span>
                <span>В Избранном: 0</span>
            </div>
        </div>
    )
}