import React from 'react';
import { SectionComponent, Subtitleandtitle } from '../extraComponents/Components.tsx';

const Projects = () => {
    return (
        <>
            <SectionComponent
                id='Projects'
                child={
                    <>
                        <Subtitleandtitle subtitle='Browse My Recent' title='Projects' />
                    </>
                }
            />
        </>
    )
}

export default Projects