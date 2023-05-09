import Link from "next/link";

interface Item {
  [key: string]: string;
}

export const componentsData: Item[] = [
  {
    id: "abc123",
    color: "bg-[#b7d4d8]",
    index: "#1",
    date: 'Sep 04, 2022',
    title: "jeden",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    content: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    id: "987654",
    color: "bg-[#9ebfd8]",
    index: "#2",
    date: 'Oct 29, 2022',
    title: "dwa",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    content: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    id: "blog456",
    color: "bg-[#93aa89]",
    index: "#3",
    date: 'Nov 14, 2022',
    title: "trzy",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    content: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    id: "qwerty",
    color: "bg-[#a88484]",
    index: "#4",
    date: 'Jan 02, 2023',
    title: "cztery",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    content: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    id: "013456",
    color: "bg-[#8784a8]",
    index: "#5",
    date: 'Feb 30, 2023',
    title: "piec",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    content: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
];

export default function HomeBlog() {

  return (
    <div className="px-20 grid grid-cols-3 justify-between mt-12 gap-x-24 gap-y-12">
      {componentsData.map((data, index) => (
        <div
          key={index}
          className={`rounded-tl-none flex flex-col text-xl py-6 items-center px-14 rounded-2xl ${data.color}`}
        >
          <div className="flex justify-between mt-4 w-full items-center bg-[#fffff0] py-1 px-2 rounded-xl rounded-tl-none">
            <p>Blog {data.index}</p>
            <p className="text-base rounded-xl">{data.date}</p>
          </div>
          <p className="mt-6 font-bold text-3xl text-left mr-auto">
            {data.title}
          </p>
          <p className="mt-4">
            {data.description}
          </p>
          <Link href={`/blogs/${data.id}`} className="mt-6 text-right ml-auto underline text-lg cursor-pointer">
            Learn more...
          </Link>
        </div>
      ))}
    </div>
  );
}
