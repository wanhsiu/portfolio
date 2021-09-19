import React from 'react';

import * as S from './Footer.styles';

export const Footer = ({className}) => {
    const isIndex = typeof window !== 'undefined' && window.location.pathname === '/';
    const path = isIndex ? '/about' : '/';
    const pageName = isIndex ? 'ABOUT' : 'INDEX';

    return <S.Container className={className}>
        <div>
            <S.StyledLink to={path}>{pageName}</S.StyledLink>
        </div>
        <div>
            <S.ContactButton href="mailto:wendie.lee4@gmail.com">CONTACT</S.ContactButton>
        </div>
    </S.Container>
};