import Link from "next/link";

export default function HomeBlog() {
  interface Item {
    [key: string]: string;
  }

  const componentsData: Item[] = [
    {
      color: "bg-[#b7d4d8]",
      index: "#1",
      date: 'Sep 04, 2022',
      title: "Lorem Ipsum",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      color: "bg-[#9ebfd8]",
      index: "#2",
      date: 'Oct 29, 2022',
      title: "Lorem Ipsum",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      color: "bg-[#93aa89]",
      index: "#3",
      date: 'Nov 14, 2022',
      title: "Lorem Ipsum",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      color: "bg-[#a88484]",
      index: "#4",
      date: 'Jan 02, 2023',
      title: "Lorem Ipsum",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      color: "bg-[#8784a8]",
      index: "#5",
      date: 'Feb 30, 2023',
      title: "Lorem Ipsum",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
  ];

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
            Lorem Ipsum
          </p>
          <p className="mt-4">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
          <Link href="/blogs" className="mt-6 text-right ml-auto underline text-lg cursor-pointer">
            Learn more...
          </Link>
        </div>
      ))}
    </div>
  );
}
