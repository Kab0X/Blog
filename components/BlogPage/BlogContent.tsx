interface TypeProps {
  content: string;
}

export default function BlogContent({content}: TypeProps) {
  return (
    <div className="flex px-20 mt-12 text-2xl">
        <p>{content}</p>
    </div>
  );
}
