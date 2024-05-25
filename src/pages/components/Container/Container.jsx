import style from './container.module.scss';

export function Container({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}