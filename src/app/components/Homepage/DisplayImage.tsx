import Link from "next/link";

const DisplayImage = ({
  url,
  title,
  description,
  imagePath,
  theme,
}: {
  url: string;
  title: string;
  description: string;
  imagePath: string;
  theme: string;
}) => {
  return (
    <Link href={url} className="flex flex-col  rounded-xl relative">
      <div className="flex-col items-center justify-center bg-black opacity-0 hover:opacity-100 bg-opacity-90 absolute z-[2] w-full h-full ">
        <div className="text-white text-center p-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p>{description}</p>
          <p className="text-primary">{theme}</p>
        </div>
      </div>
      <img
        src={imagePath}
        alt={title}
        className="object-cover w-full rounded-xl h-full "
      />
    </Link>
  );
};

export default DisplayImage;
