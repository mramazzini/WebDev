const commendList = [
  {
    id: 1,
    title: "Nullart Music",
    description:
      "My website was built in a week and I was able to start selling my music online.",
  },
  {
    id: 2,
    title: "Acme Corporation",
    description: "I was able to get my business online in no time.",
  },
];

const Commendations = () => {
  return (
    <div className="w-full flex flex-col md:flex-row px-12">
      {commendList.map((commendation) => (
        <div
          key={commendation.id}
          className="flex flex-col md:flex-row items-center justify-center md:w-1/2  md:p-8 p-2"
        >
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-4">
              <img src="/png/avatar.png" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-white">
              {commendation.title}
            </h2>
            <p className="text-md text-neutral-content italic  ">
              &quot;{commendation.description}&quot;
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Commendations;
