import styles from './login.module.scss'

import Kivi from '../../assets/icon/kivi.svg'

import { Container } from "../components/Container";
import { useRef } from 'react';
import axios from 'axios';

const baseUrl = 'https://reqres.in/api'

export function LogIn({ setToken }) {

    const emailInp = useRef(null);
    const passwordInp = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const values = {
            email: emailInp.current.value,
            password: passwordInp.current.value
        }

        axios.post(`${baseUrl}/login`, values)
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('sEt_tOkEn', res?.data?.token)
                    setToken(res?.data?.token)
                }
            })
            .catch(err => {
                alert(err);
            })

    }


    return (
        <>
            <header>
                <Container>
                    <div className={styles.hero}>
                        <div className={styles.hero__rightPart}>
                            <h2>Ваша регистрация завершена!</h2>
                            <p>Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в виде смс на ваше телефонный номер</p>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='nomer'>
                                    Введите email или номер телефона
                                </label>
                                <input
                                    type="email"
                                    ref={emailInp}
                                    placeholder='example@gmail.com'
                                    id='nomer'
                                    required />
                                <label htmlFor="parol">
                                    Пароль
                                </label>
                                <input
                                    type="password"
                                    ref={passwordInp}
                                    placeholder='***********'
                                    id='parol'
                                    required />
                                <button type='submit'>Войти</button>

                                <span>или</span>

                                <a style={{ textDecoration: 'none', color: '#4E72CA', marginTop: '40px', textAlign: 'center' }} href='/'>
                                    Восстоновить ваше пароль
                                </a>

                            </form>
                        </div>
                        <div className={styles.hero__leftPart}>
                            <div className={styles.whiteShape}>
                                <img width={60} src={Kivi} alt="kivi" />
                                <p>Откройте для себя
                                    целую плошадку
                                    для продаже</p>
                                <button>Как это делать?</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </header >
        </>
    )
}