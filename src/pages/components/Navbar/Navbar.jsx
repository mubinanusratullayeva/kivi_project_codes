import styles from './navbar.module.scss'

import { Link } from "react-router-dom";

import { RxAvatar } from 'react-icons/rx'

import Kivi from '../../../assets/icon/logo-kivi.svg';

import { Container } from '../Container';



export function Navbar({ setToken, token }) {

    function handleLogOut() {
        localStorage.removeItem('sEt_tOkEn')
        setToken(null)
    }

    return (
        <>
            <nav>
                <Container>
                    <div className={styles.navbar}>
                        <Link className={styles.navbar__link} to='/'>
                            <img src={Kivi} alt="livi logo" />
                            <p className={styles.navbarLinkText}>Продай, найди, купи
                                все что пожелаешь…</p>
                        </Link>
                        <ul className={styles.navbar__menu}>
                            <li>
                                <Link className={styles.navbarMenuLink} to='/'>
                                    Объявления
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navbarMenuLink} to='/'>
                                    Магазины
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navbarMenuLink} to='/'>
                                    Для бизнеса
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navbarMenuLink} to='/'>
                                    Помощь
                                </Link>
                            </li>
                        </ul>
                        <p className={styles.flexLogs}>{
                            token
                                ?
                                <Link className={styles.avatarLink} to='/profile'>Your Profile<RxAvatar style={{ width: '41px', height: '41px' }} /></Link>
                                :
                                <Link className={styles.LogLink} to='/login'>Вход</Link>
                        }
                            |
                            <Link onClick={handleLogOut} className={styles.LogLink} to='/'>Log out</Link>
                        </p>
                    </div>
                    <div className={styles.flexNavbar}>
                        <div className={styles.searches}>
                            <select className={styles.rtyui}>
                                <option>Любая категория</option>
                            </select>
                            <input type="search" placeholder='Что будем искать ?' />
                            <select className={styles.dfghj}>
                                <option>По всей Узбекистану</option>
                            </select>
                            <button className={styles.btnNayti}>найти</button>
                        </div>
                        <button className={styles.btnRestmangle}>
                            <span className={styles.roundBtn}>+</span>
                            Добавить обьявления
                        </button>
                    </div>
                </Container>
            </nav >
        </>
    )
}