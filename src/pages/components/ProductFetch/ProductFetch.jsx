import styles from './productFetch.module.scss'

import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';




const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
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
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
        marginRight: '45%'
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(60),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));



export function ProductFetch() {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : true);
    };


    const [data, setData] = useState([]);
    const [datas, setDatas] = useState([]);


    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => json.slice(0, 20))
            .then(el => {
                setData(el.slice(0, 16));
                setDatas(el.slice(-4));
            })

    }, []);


    // const navigate = useNavigate();

    // function handleClick(l) {
    //     navigate(`/product/:${l}`);
    // }


    // function handleClickBtnSecond(k) {
    //     navigate(`/product/:${k}`)
    // }


    return (
        <>
            <div className={styles.flexProfucts}>
                {data.map(item => (
                    <>
                        <Link
                            key={item.id}
                            id={item.id}
                            to={`product/:${item?.id}`}
                            className={styles.card}
                        >
                            <img width={212} height={232} src={item.image} alt={item.title} />
                            <h3 className={styles.card__title}>{item.title}</h3>
                            <span style={{ fontWeight: '400', fontSize: '12px', lineHeight: '14.4px', color: '#4A4A4A', paddingBottom: '5px' }}>Вчера 22:55</span>
                            <span>{item.rating.count} 000 000 сум</span>
                        </Link>
                    </>
                ))
                }
            </div >
            <Accordion style={{ marginTop: '50px' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary style={{ borderTop: '1px solid #4E72CA' }} aria-controls="panel1d-content" id="panel1d-header">
                    <Typography style={{ color: '#4E72CA', display: 'flex' }} >Покозать еще</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className={styles.flexProfucts}>
                            {
                                datas.map(element => (
                                    <Link
                                        key={element.id}
                                        id={element.id}
                                        to={`product/:${element?.id}`}
                                        className={styles.card}
                                    >
                                        <img width={212} height={232} src={element.image} alt={element.title} />
                                        <h3 className={styles.card__title}>{element.title}</h3>
                                        <span style={{ fontWeight: '400', fontSize: '12px', lineHeight: '14.4px', color: '#4A4A4A', paddingBottom: '5px' }}>Вчера 22:55</span>
                                        <span>{element.rating.count} 000 000 сум</span>
                                    </Link>
                                ))
                            }

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion >
        </>
    )
}


