import React from 'react';

import * as S from './ProjectRoll.styles';

const ProjectItem = ({ data }) => {
    const { fields, frontmatter, id } = data;
    const { slug } = fields;
    const { title, date, projectDate, categories: categoriesData, images } = frontmatter;

    const categories = [];
    categoriesData.forEach(cat => categories.push(cat.category));


    return (
        <S.TableRow>
            <S.TableCell position={'right'}>
                <S.Circle/>
            </S.TableCell>
            <S.TableCell>
                {title}
            </S.TableCell>
            <S.TableCell>
                {categories.join(', ')}
            </S.TableCell>
        </S.TableRow>
    )
};

export const ProjectRoll = ({projects}) => {
    console.log(projects)

    return (
        <S.Table>
            <S.TableRow>
                <S.TableHeader></S.TableHeader>
                <S.TableHeader>Project</S.TableHeader>
                <S.TableHeader>Category</S.TableHeader>
            </S.TableRow>
            {projects.map(e => <ProjectItem data={e.node} key={e.node.id} />)}
        </S.Table>
    )
};

