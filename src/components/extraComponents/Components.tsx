import React from "react";
import './extra.css'
import { SectionComponentprops, Subtitleandtitleprops } from "../../interface/interface";



const SectionComponent: React.FC<SectionComponentprops> = (props) => {
    return (
        <section className={`section-custom ${props.cusclassname}`} id={props.id} style={props.style}>
            {props.child}
        </section>
    )
}

const Subtitleandtitle: React.FC<Subtitleandtitleprops> = (props) => {
    return (
        <>
            <div className="subtitle-custom-intro">
                <p>{props.subtitle}</p>
                <h1>{props.title}</h1>
            </div>
        </>
    )
}


export { SectionComponent, Subtitleandtitle }