export const Timeline = () => {
  return (
    <div className="flex flex-col items-center justify-center  p-24 rounded-xl text-white mb-24 animate-fadeInDelay ">
      <h2 className="text-3xl flex  w-full justify-center items-center font-bold">
        Our Web Development Process
      </h2>
      <div className="divider divider-primary "></div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
        <li className="">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-start md:text-end mb-10">
            <div className="text-3xl font-black">💡 The Creative Plan</div>
            <div className="divider divider-secondary m-1"></div>
            The first step is to create a plan for the website. This includes
            the design, layout, and functionality of the site. We will work with
            you to create an outline that meets your needs and goals, and
            represents your brand effectively.
          </div>

          <hr className="bg-primary" />
        </li>

        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-end mb-10">
            <div className="text-3xl font-black">We Get To Work 🛠️</div>
            <div className="divider divider-secondary m-1"></div>
            With a plan in place, we will begin the process of building your
            website. We craft a website in regards to what was discussed in the
            planning stage. We will keep you updated on the progress and make
            any necessary adjustments along the way.
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <div className="text-3xl font-black">✅ Final Checks </div>
            <div className="divider divider-secondary m-1"></div>
            Once the website is complete, you will have the opportunity to
            review it and provide feedback. We will make any necessary changes
            to finalize the site and ensure that it meets your expectations.
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <div className="text-3xl font-black ">Testing 🔍</div>
            <div className="divider divider-secondary m-1"></div>
            Before launching the website, we will give it a battery of tests to
            ensure that it is functioning correctly. This includes testing the
            functionality, performance, and compatibility of the site on
            different devices and browsers.
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <div className="text-3xl font-black">🚀 Launch Day </div>
            <div className="divider divider-secondary m-1"></div>
            With your website ready, we will deploy it to your domain name and
            make it live for the world to see. We will continue to provide
            support and maintenance to ensure that your website is running
            smoothly.
          </div>
        </li>
      </ul>
    </div>
  );
};
