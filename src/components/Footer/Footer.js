import React from 'react';
import { Link } from 'gatsby';

import * as S from './Footer.styles';

export const Footer = ({className}) => {
    return <S.Container className={className}>
        <div>
            {window.location.pathname !== '/' && <S.StyledLink to={"/"}>INDEX</S.StyledLink>}
        </div>
        <div>
            <S.ContactButton href="mailto:wendie.lee4@gmail.com">CONTACT</S.ContactButton>
        </div>
    </S.Container>
};