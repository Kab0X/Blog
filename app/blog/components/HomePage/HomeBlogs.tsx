export default function HomeBlog() {
  interface Item {
    [key: string]: string;
  }

  const componentsData: Item[] = [
    {
      backgroundColor: "bg-[#b7d4d8]",
      borderColor: "border-[#b7d4d8]",
      index: "#1",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      backgroundColor: "bg-[#9ebfd8]",
      borderColor: "border-[#9ebfd8]",
      index: "#2",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      backgroundColor: "bg-[#93aa89]",
      borderColor: "border-[#93aa89]",
      index: "#3",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      backgroundColor: "bg-[#a88484]",
      borderColor: "border-[#a88484]",
      index: "#4",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      backgroundColor: "bg-[#8784a8]",
      borderColor: "border-[#8784a8]",
      index: "#5",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
  ];

  return (
    <div className="px-20 grid grid-cols-3 justify-between mt-14 gap-x-28 gap-y-12">
      {componentsData.map((data, index) => (
        <div
          key={index}
          className={`border-solid border-4 rounded-tl-none flex flex-col text-xl py-4 items-center px-12 rounded-2xl ${data.backgroundColor} ${data.borderColor}`}
        >
          <div className="flex justify-between mt-4 w-full items-center border-solid border-[#fffff0] border-2 bg-[#fffff0] py-1 px-2 rounded-xl rounded-tl-none">
            <p>Blog {data.index}</p>
            <p className="text-base rounded-xl">Sep 04, 2023</p>
          </div>
          <p className="mt-6 font-bold text-3xl text-left mr-auto">
            Lorem Ipsum
          </p>
          <p className="mt-4">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
          <p className="mt-6 text-right ml-auto underline text-lg cursor-pointer">
            Learn more...
          </p>
        </div>
      ))}
    </div>
  );
}
