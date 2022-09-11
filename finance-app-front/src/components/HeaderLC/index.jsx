import './style.css';
import Header from '../../assets/header_lc.svg'


export default function HeaderLC() {
    return (
        <div className='div_header'>
            <img src={Header} alt="Imagem do header" className='headerLC_img'/>
        </div>
    )
}