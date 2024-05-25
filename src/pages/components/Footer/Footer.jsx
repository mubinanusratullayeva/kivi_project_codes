import styles from './footer.module.scss';

import { Link } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import AppStore from '../../../assets/icon/icon-apple.svg';

import { Container } from "../Container";

//BTN-App
import KiviGray from '../../../assets/icon/logo-kivi-gray.svg';
import ApStore from '../../../assets/icon/AppleStore.svg';
import Availableonthe from '../../../assets/icon/Availableonthe.svg';

//BTN-GooglePlay
import IconGooglePlay from '../../../assets/icon/Icon-GooglePlay.svg'
import AndroidAppon from '../../../assets/icon/AndroidAppon.svg'
import GooglePlay from '../../../assets/icon/googlePlay.svg'


import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { useState } from 'react';

const Accordion = styled((props) => (
    <MuiAccordion style={{ backgroundColor: '#33383C' }} disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon style={{ fill: '#BD10E0' }} sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: '#33383C',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2)
}));



export function Footer({ children }) {
    return (
        <>
            <footer>
                <div className={styles.footerHead}>
                    <Container>
                        <div className={styles.footerHead__navbar}>
                            <Link className={styles.footerHeadLink} to='/'>
                                <img src={KiviGray} alt="Kivi gray logo" />
                                <p className={styles.footerLinkText}>Продай, найди, купи
                                    все что пожелаешь…</p>
                            </Link>
                            <p className={styles.footerHead__text}>Веб сайт бесплатных обьявлений | на базе
                                имеется 234 944 999 шт обяления</p>
                            <div style={{ display: 'flex', columnGap: '20px' }}>
                                <Button style={{ borderRadius: '60px', padding: '8px 25px', columnGap: '13px', backgroundColor: '#212121' }} variant="contained">
                                    <span className={styles.aroundImg}>
                                        <img src={AppStore} alt="App Store" />
                                    </span>
                                    <p style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>
                                        <img width='80' src={Availableonthe} alt="Availableonthe" />
                                        <img width='100' src={ApStore} alt="ApStore" />
                                    </p>
                                </Button>
                                <Button style={{ borderRadius: '60px', padding: '8px 25px', columnGap: '13px', backgroundColor: '#212121' }} variant="contained">
                                    <span className={styles.aroundImg}>
                                        <img src={IconGooglePlay} alt="App Store" />
                                    </span>
                                    <p style={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>
                                        <img width='80' src={AndroidAppon} alt="Availableonthe" />
                                        <img width='100' src={GooglePlay} alt="ApStore" />
                                    </p>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div >
                {children}
            </footer >
        </>
    )
}


export function FooterBody() {

    const [expanded, setExpanded] = useState(true);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className={styles.footerBody}>
            <Container>
                <div className={styles.footerBody__body}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography style={{ color: '#ffffff' }}>Автомобили</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className={styles.flexLinks}>
                                    <Link className={styles.flexLinks__link} to='/'>Легковые авто</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Мото</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Автобусы</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Грузовые авто</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Сельхозтехника</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Запчасти и Аксессуары</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Прицепы и Спецтехника</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Водный и Другой транспортa</Link>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography style={{ color: '#ffffff' }}>Недвижимость</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className={styles.flexLinks}>
                                    <Link className={styles.flexLinks__link} to='/'> Аренда квартирАренда домов</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Аренда гаражей и Стоянок</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Продажа квартир</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Продажа домов</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Продажа земли</Link>
                                    <Link className={styles.flexLinks__link} to='/'> Продажа гаражей/Стоянок</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Прочая недвижимость</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Обмен недвижимости</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Коммерческая недвижимость</Link>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography style={{ color: '#ffffff' }}>Электроника</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className={styles.flexLinks}>
                                    <Link className={styles.flexLinks__link} to='/'> Телефоны</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Ноутбуки, планшеты</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Оргтехника и расходники</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Грузовые авто</Link>
                                    <Link className={styles.flexLinks__link} to='/'>ТВ,Фото,Видео и Аудио</Link>
                                    <Link className={styles.flexLinks__link} to='/'> Игры и Приставки</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Техника для дома и Для себя</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Климатическое оборудование</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Аксессуары и Комплектующие</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Прочая электроника</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Техника для наблюдения</Link>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                            <Typography style={{ color: '#ffffff' }}>Личные вещи</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className={styles.flexLinks}>
                                    <Link className={styles.flexLinks__link} to='/'> Одежда, обувь, аксессуары</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Детская одежда и обувь</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Детские товары и Игрушки</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Школьникам</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Часы и украшения</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Запчасти и Аксессуары</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Товары для красоты и здоровья</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Разные вещи</Link>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                            <Typography style={{ color: '#ffffff' }}>Дом и Сад</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className={styles.flexLinks}>
                                    <Link className={styles.flexLinks__link} to='/'>Легковые авто</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Мото</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Автобусы</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Грузовые авто</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Сельхозтехника</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Запчасти и Аксессуары</Link>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                            <Typography style={{ color: '#ffffff' }}>Товары стройки и ремонта</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className={styles.flexLinks}>
                                    <Link className={styles.flexLinks__link} to='/'> Двери и окна</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Сантехника</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Автобусы</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Стройматериалы</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Инструменты Двери и окна</Link>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                            <Typography style={{ color: '#ffffff' }}>Хобби, Отдых и Спорт</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className={styles.flexLinks}>
                                    <Link className={styles.flexLinks__link} to='/'>Музыкальные инструменты</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Велосипеды</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Товары для спорта и отдыха</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Книги/Журналы</Link>
                                    <Link className={styles.flexLinks__link} to='/'>CD/DVD/Пластинки/Кассеты</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Билеты и путешествия</Link>
                                    <Link className={styles.flexLinks__link} to='/'> Охота и рыбалка</Link>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                            <Typography style={{ color: '#ffffff' }}> Бизнес и услуги</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className={styles.flexLinks}>
                                    <Link className={styles.flexLinks__link} to='/'>Легковые авто</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Мото</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Автобусы</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Грузовые авто</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Сельхозтехника</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Запчасти и Аксессуары</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Прицепы и Спецтехника</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Водный и Другой транспортa</Link><Link className={styles.flexLinks__link} to='/'>Музыкальные инструменты</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Велосипеды</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Товары для спорта и отдыха</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Книги/Журналы</Link>
                                    <Link className={styles.flexLinks__link} to='/'>CD/DVD/Пластинки/Кассеты</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Билеты и путешествия</Link>
                                    <Link className={styles.flexLinks__link} to='/'> Охота и рыбалка</Link><Link className={styles.flexLinks__link} to='/'>Музыкальные инструменты</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Велосипеды</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Товары для спорта и отдыха</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Книги/Журналы</Link>
                                    <Link className={styles.flexLinks__link} to='/'>CD/DVD/Пластинки/Кассеты</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Билеты и путешествия</Link>
                                    <Link className={styles.flexLinks__link} to='/'> Охота и рыбалка</Link><Link className={styles.flexLinks__link} to='/'>Музыкальные инструменты</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Велосипеды</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Товары для спорта и отдыха</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Книги/Журналы</Link>
                                    <Link className={styles.flexLinks__link} to='/'>CD/DVD/Пластинки/Кассеты</Link>
                                    <Link className={styles.flexLinks__link} to='/'>Билеты и путешествия</Link>
                                    <Link className={styles.flexLinks__link} to='/'> Охота и рыбалка</Link>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className={styles.footerPart__footer}>
                    <Link style={{ color: '#05F3B3', textDecoration: 'none' }} to='/'>Подать объявление</Link>
                    <Link className={styles.flexLinks__link} to='/'>Объявления</Link>
                    <Link className={styles.flexLinks__link} to='/'>Магазины</Link>
                    <Link className={styles.flexLinks__link} to='/'>Помощь</Link>
                    <Link className={styles.flexLinks__link} to='/'>Безопасность</Link>
                    <Link className={styles.flexLinks__link} to='/'>Реклама на сайте О компании</Link>
                </div>
            </Container>
        </div>
    )
}