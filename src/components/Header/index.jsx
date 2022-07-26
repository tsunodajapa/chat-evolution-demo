import Logo from '../../assets/img/logo.svg';
import Bell from '../../assets/img/bell.svg';

import { Header } from './styles';

const HeaderUnlogged = () => {
    return (
        <Header>
            <img src={Logo} alt='Logo LX Chat' />
            <img src={Bell} alt='Sino de notificações' />
        </Header>
    )
}

export default HeaderUnlogged;