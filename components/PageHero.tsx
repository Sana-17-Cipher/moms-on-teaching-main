import { Puzzle } from './Puzzle';
export function PageHero({ label, title, description }: {
    label: string;
    title: string;
    description: string;
}) { return <section className="pagehero"><span className="eyebrow">MOMS ON TEACHING / {label.toUpperCase()}</span><h1>{title}</h1><p>{description}</p><Puzzle /></section>; }
