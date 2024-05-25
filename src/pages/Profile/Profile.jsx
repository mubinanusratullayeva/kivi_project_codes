import styles from './profile.module.scss'

import { NavLink, Outlet } from "react-router-dom";

import { Container } from "../components/Container";

import { Footer } from "../components/Footer";

export function Profile() {
    return (
        <>

            <nav className={styles.navBurger}>

                <Container>

                    <div className={styles.navbar}>
                        <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.navbar__link} to='/profile'>Объявления</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.navbar__link} to='/profile/messages'>Сообщения</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.navbar__link} to='/profile/payments&invoice'>Платежи и счёт</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.navbar__link} to='/profile/settings'>Настройки</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.navbar__link} to='/profile/my&ltBusiness'>Мой бизнес</NavLink>
                    </div>

                </Container>

            </nav>

            <div style={{ minHeight: '86vh', textAlign: 'center', backgroundColor: '#0000000C' }}>

                <Container>

                    <Outlet />

                </Container>

            </div>

            <Footer />

        </>
    )
}