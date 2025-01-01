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

export { SectionComponentprops, Subtitleandtitleprops }