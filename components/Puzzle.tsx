import Link from 'next/link';
export function Puzzle({ className = '' }: {
    className?: string;
}) { return <svg className={'puzzle ' + className} viewBox="0 0 100 100" aria-hidden="true"><path d="M10 10H38C25-7 75-7 62 10H90V38C107 25 107 75 90 62V90H62C75 73 25 73 38 90H10V62C27 75 27 25 10 38Z" fill="currentColor"/></svg>; }
