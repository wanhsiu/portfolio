import React, {useState} from 'react';
import { navigate } from "gatsby"

import * as S from './ProjectList.styles';
import useWindowDimensions from '../useWindowDimensions';
import breakpoints from '../../constants/breakpoints';
import useTimeCfg from '../useTimeCfg';

const ProjectItem = ({ data, width, onMouseEnter, onMouseLeave }) => {
    const { fields, frontmatter, id } = data;
    const { slug } = fields;
    const { title, date, projectDate, categories: categoriesData, images } = frontmatter;
    const [isHovered, setIsHovered] = useState(false);
    const { circleColor, invertBaseColor } = useTimeCfg();

    const categories = [];
    if (categoriesData) {
        categoriesData.forEach(cat => categories.push(cat.category));
    }

    const handleRowClick = () => {
        navigate(slug)
    }

    return (
        <S.TableRow onClick={handleRowClick}
            onMouseEnter={() => { 
                setIsHovered(true);
                onMouseEnter({ image: images.length ? images[0] : null}); 
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                onMouseLeave();
            }}>
            <S.TableCell position={'right'}>
                <S.Circle color={isHovered ? circleColor : invertBaseColor ? '#fff' : '#000'}/>
            </S.TableCell>
            <S.TableCell>
                {categories.join(', ')}
            </S.TableCell>
            <S.TableCell>
                {title}
            </S.TableCell>
            {width >= breakpoints.md && 
            <S.TableHeader>
                {new Date(projectDate).getFullYear()}
            </S.TableHeader>}
        </S.TableRow>
    )
};

export const ProjectList = ({projects}) => {
    const { width } = useWindowDimensions();
    const [projectImage, setProjectImage] = useState(null);

    const projectMouseEnterHandler = (e) => {

        const { image } = e;
        if (image) {
            setProjectImage(image.src.publicURL);
            console.log(image.src.publicURL)
        }

    }

    const projectMouseLeaveHandler = (e) => {
        setProjectImage(null);
    }

    return (
        <S.Container>
            <S.Table>
                <S.TableRow>
                    <S.TableHeader></S.TableHeader>
                    <S.TableHeader>Category</S.TableHeader>
                    <S.TableHeader>Project</S.TableHeader>
                    {width >= breakpoints.md && <S.TableHeader>Year</S.TableHeader>}
                </S.TableRow>
                {projects.map(e => <ProjectItem
                    data={e.node}
                    key={e.node.id}
                    width={width}
                    onMouseEnter={projectMouseEnterHandler}
                    onMouseLeave={projectMouseLeaveHandler}/>)}
            </S.Table>
            {false && 
                <S.ImageContainer>
                    <S.Image src={projectImage}/>
                </S.ImageContainer>
            }
        </S.Container>
    )
};

