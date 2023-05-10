import Link from "next/link";
import Image from "next/image";

interface BlogProps {
    id: string;
    color: string;
    index: string;
    date: string;
    title: string;
    description: string;
    content: string;
}

export const componentsData: BlogProps[] = [
    {
        id: "abc123",
        color: "bg-[#b7d4d8]",
        index: "#1",
        date: "Sep 04, 2022",
        title: "Jeden Jeden Jeden Jeden",
        description:
            "Donec laoreet posuere massa, ac pretium tellus tincidunt et.",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet posuere massa, ac pretium tellus tincidunt et. Maecenas semper malesuada vestibulum. Quisque a viverra sapien. Aenean risus lectus, molestie commodo luctus sit amet, mollis vel dui. Nullam at quam pellentesque, fermentum ex id, ultrices augue. Quisque tempus, libero vitae auctor laoreet, arcu est commodo orci, convallis pretium libero ante et nulla. Proin aliquet in felis ut semper. In egestas pharetra leo. Aliquam quis dignissim sapien.",
    },
    {
        id: "987654",
        color: "bg-[#9ebfd8]",
        index: "#2",
        date: "Oct 29, 2022",
        title: "Dwa Dwa Dwa Dwa",
        description:
            "Aliquam accumsan, ante ac tristique suscipit, ante nibh consequat nisl.",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan, ante ac tristique suscipit, ante nibh consequat nisl, id pretium mauris massa a nunc. Morbi lacinia nisi a justo commodo, nec fermentum purus rutrum. Donec laoreet, neque sit amet elementum accumsan, ante arcu faucibus mi, ac tincidunt justo erat sit amet ex. Vivamus quis urna vitae neque congue luctus. Nam non facilisis massa. Phasellus porttitor ex nec justo accumsan ultricies. Morbi iaculis felis ac mollis eleifend. Praesent mollis ultricies imperdiet. Suspendisse sagittis quam purus, sed iaculis lectus commodo in. Donec pulvinar nunc mauris, et placerat turpis finibus nec. Suspendisse quis.",
    },
    {
        id: "blog456",
        color: "bg-[#93aa89]",
        index: "#3",
        date: "Nov 14, 2022",
        title: "Trzy Trzy Trzy Trzy",
        description:
            "Aenean finibus aliquam ipsum vitae molestie. Nulla facilisi.",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus aliquam ipsum vitae molestie. Nulla facilisi. Donec suscipit, dui vitae dictum maximus, justo purus auctor nisl, ut egestas dui risus sed felis. Morbi dictum sapien hendrerit egestas iaculis. Nam eget cursus dolor, ac consequat ex. Cras quis turpis in diam auctor efficitur auctor quis eros. Morbi vulputate, quam nec rhoncus posuere, mauris nisi condimentum neque, sed luctus sem quam eu felis. Duis volutpat arcu ac arcu faucibus imperdiet.",
    },
    {
        id: "qwerty",
        color: "bg-[#a88484]",
        index: "#4",
        date: "Jan 02, 2023",
        title: "Cztery Cztery Cztery Cztery",
        description:
            "Morbi at nisi eget dolor sodales convallis. Cras ante dui.",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisi eget dolor sodales convallis. Cras ante dui, vestibulum eu sem sit amet, tristique sollicitudin lacus. Etiam convallis accumsan consequat. Donec posuere orci quis eros consequat aliquet. Phasellus ultrices magna nec sem luctus, et dignissim quam egestas. Maecenas non odio libero. In hac habitasse platea dictumst. Quisque a nisi sit amet purus rutrum dictum aliquet non elit. Vestibulum blandit risus vel lectus rutrum tincidunt. Ut lobortis nulla in lacus aliquam, fringilla vehicula nunc ultrices. Curabitur eros turpis, imperdiet a ex a, fringilla suscipit felis. Vestibulum velit eros, condimentum eget felis.",
    },
    {
        id: "013456",
        color: "bg-[#8784a8]",
        index: "#5",
        date: "Feb 30, 2023",
        title: "Pięć Pięć Pięć Pięć",
        description:
            "Ut maximus hendrerit diam, at iaculis sem iaculis in. Ut venenatis sit amet ligula in accumsan.",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus hendrerit diam, at iaculis sem iaculis in. Ut venenatis sit amet ligula in accumsan. Phasellus sit amet iaculis mi. Fusce leo ex, pretium a dolor sit amet, ultrices ultricies enim. Mauris in eleifend neque. Ut fermentum erat eu orci molestie, id facilisis risus mollis. Phasellus id facilisis diam. Sed pellentesque elit quis orci faucibus gravida. Sed dui lectus, fermentum id tristique a, consectetur id urna. In placerat nibh lectus, quis suscipit justo hendrerit sit amet. Integer venenatis augue eleifend consequat sodales. Nulla pharetra mi in massa tincidunt, at tempor lorem.",
    },
];

export default function HomeBlog() {
    return (
        <div className="mt-10 grid grid-cols-3 gap-x-20 gap-y-12 px-20">
            {componentsData.map((data, index) => (
                <div
                    key={index}
                    className={`flex flex-col items-center rounded-2xl rounded-tl-none px-14 py-6 text-xl ${data.color}`}
                >
                    <div className="mt-4 flex w-full items-center justify-between rounded-xl rounded-tl-none bg-[#fffff0] px-2 py-1">
                        <p>Blog {data.index}</p>
                        <p className="rounded-xl text-base">{data.date}</p>
                    </div>
                    <p className="mr-auto mt-4 text-xl font-bold">
                        {data.title}
                    </p>
                    <p className="mt-4 h-20 text-md">{data.description}</p>
                    <div className="mt-4 flex w-full items-end justify-between">
                        <div className="flex gap-3">
                            <div className="flex items-center gap-2 text-lg">
                                <Image
                                    src="like.svg"
                                    width={14}
                                    height={14}
                                    alt="Like"
                                    className="cursor-pointer py-2"
                                />
                                <p>0</p>
                            </div>
                            <div className="h-6 w-0.25 bg-gray-700" />
                            <div className="flex items-center gap-2 text-lg">
                                <Image
                                    src="disslike.svg"
                                    width={14}
                                    height={14}
                                    alt="DissLike"
                                    className="cursor-pointer py-2"
                                />
                                <p>0</p>
                            </div>
                        </div>
                        <Link
                            href={`/blogs/${data.id}`}
                            className="ml-auto mt-6 cursor-pointer text-right text-lg underline"
                        >
                            Learn more...
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
