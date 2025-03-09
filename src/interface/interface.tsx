interface SectionComponentprops {
    id: string;
    child: React.ReactNode;
    style?: React.CSSProperties;
    cusclassname?: string;
}

interface Subtitleandtitleprops {
    subtitle: string;
    title: string;
    classname?: string;
    style?: React.CSSProperties;
}


interface ProjectCardDivProps {

    projectno : string;
    projectimg : string;
    projecthref ?: string;
}

export { SectionComponentprops, Subtitleandtitleprops, ProjectCardDivProps }