import React from 'react';
import * as S from './ProjectDetail.styles';
import * as E from '../ProjectList/ProjectList.styles';
import useTimeCfg from '../useTimeCfg';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';

export const ProjectDetails = ({
    data
}) => {
    const {
        categories: categoriesData,
        projectDate,
        vimeoId,
        description,
        details,
        images,
        title
     } = data;
     const { circleColor } = useTimeCfg();

    const categories = [];
    categoriesData.forEach(e => categories.push(e.category));
    return (
        <S.Container>
            <S.Details>
                <S.Left>
                    <E.Circle color={circleColor} onClick={() => window.location = '/'}/>
                </S.Left>
                <S.Right>
                    <S.DetailWrap>
                        <S.DetailTitle>Project</S.DetailTitle>
                        <S.DetailContent>{title}</S.DetailContent>
                    </S.DetailWrap>
                    <S.DetailWrap>
                        <S.DetailTitle>Category</S.DetailTitle>
                        <S.DetailContent>{categories.join(', ')}</S.DetailContent>
                    </S.DetailWrap>
                    <S.DetailWrap>
                        <S.DetailTitle>Year</S.DetailTitle>
                        <S.DetailContent>{new Date(projectDate).getFullYear()}</S.DetailContent>
                    </S.DetailWrap>
                    <S.DetailWrap>
                        <S.DetailTitle>Details</S.DetailTitle>
                        <div>
                            <S.StyledReactMarkdown
                                components={
                                    {
                                        a: ({node, ...props}) => <a target="_blank" {...props} />
                                    }
                                }
                            >{details}</S.StyledReactMarkdown>
                        </div>
                    </S.DetailWrap>
                </S.Right>
            </S.Details>

            <S.Description>
                <S.StyledReactMarkdown
                    components={
                        {
                            a: ({node, ...props}) => <a target="_blank" {...props} />
                        }
                    }>{description}</S.StyledReactMarkdown>
            </S.Description>

            {vimeoId &&
                <ScrollReveal>
                    <S.VideoContainer>
                        <S.StyledIframe 
                            src={`https://player.vimeo.com/video/${vimeoId}`}
                            frameborder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowfullscreen>
                        </S.StyledIframe>
                    </S.VideoContainer>
                </ScrollReveal>
                
            }
            

            <S.ImagesContainer>
                {images && images.map(({src, alt}) => {
                    const { publicURL, childImageSharp, extension} = src;

                    if (extension === 'gif') {
                        return <ScrollReveal>
                            <S.Image
                            src={publicURL}
                            alt={alt}
                            key={src.id}
                            />
                        </ScrollReveal>
                        
                    }
                    
                    return <ScrollReveal>
                        <S.Image
                        src={childImageSharp.fluid.src}
                        srcSet={childImageSharp.fluid.srcSet}
                        alt={alt} key={src.id}
                    />
                    </ScrollReveal>
                })}
            </S.ImagesContainer>

        </S.Container>
    )
}