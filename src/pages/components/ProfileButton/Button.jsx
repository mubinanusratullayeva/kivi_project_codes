import './mixin.scss'

import { AiOutlineArrowUp } from 'react-icons/ai'

export function ProfileButton(props) {
    return (
        <button className='profileButton'>
            <span className='roundingSpan'>
                <AiOutlineArrowUp style={{ fill: '#fff', height: '30px', width: '20px' }} />
            </span>
            {props.text}
        </button>
    )
}

export function ProfileButtonSecond(props) {
    return (
        <button className='profileButtonSecond'>
            <span className='roundingSpanSecond'>
                <AiOutlineArrowUp style={{ fill: '#fff', height: '30px', width: '20px' }} />
            </span>
            {props.text}
        </button>
    )
}