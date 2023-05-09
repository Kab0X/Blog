interface TypeProps {
    title: string;
}

export default function BlogText({title}: TypeProps) {
    return (
      <div className="px-20 mt-14 italic flex items-end gap-4 text-7xl">
          <p>{title}</p>
      </div>
    );
  }
  