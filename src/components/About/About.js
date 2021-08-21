import React from 'react';
import * as S from './About.styles';

export const About = ({description}) => {
    /*
    const { 
        instagramHandle,
        email,
        copyrightName
    } = useSiteDetails();
    */

    return (
        <S.Container>
            <S.Content>
                <S.StyledReactMarkdown>{description}</S.StyledReactMarkdown>
            </S.Content>
        </S.Container>
    )
}