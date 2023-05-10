interface TypeProps {
    content: string;
}

export default function BlogContent({ content }: TypeProps) {
    return (
        <div className="mt-12 flex px-20 text-2xl">
            <p>{content}</p>
        </div>
    );
}
