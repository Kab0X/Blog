interface TypeProps {
    title: string;
}

export default function BlogText({ title }: TypeProps) {
    return (
        <div className="mt-14 flex items-end gap-4 px-20 text-7xl italic">
            <p>{title}</p>
        </div>
    );
}
