const Row = ({
  title,
  starter,
  standard,
  premium,
}: {
  title: string;
  starter: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
}) => {
  return typeof starter === "string" ? (
    <tr>
      <th scope="row" className="text-left">
        <h3 className="py-3 text-white">{title}</h3>
      </th>
      <td>
        <span className="block text-sm">{starter}</span>
      </td>
      <td>
        <span className="block text-sm">{standard}</span>
      </td>
      <td>
        <span className="block text-sm">{premium}</span>
      </td>
    </tr>
  ) : (
    <tr>
      <th scope="row" className="text-left">
        <h3 className="py-3 text-white">{title}</h3>
      </th>
      <td>
        {starter ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-label="Included in Starter plan"
            className="w-5 h-5 mx-auto dark:text-violet-600"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-label="Not included in Starter plan"
            className="w-5 h-5 mx-auto dark:text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </td>
      <td>
        {standard ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-label="Included in Standard plan"
            className="w-5 h-5 mx-auto dark:text-violet-600"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-label="Not included in Standard plan"
            className="w-5 h-5 mx-auto dark:text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </td>
      <td>
        {premium ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-label="Included in Premium plan"
            className="w-5 h-5 mx-auto dark:text-violet-600"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-label="Not included in Premium plan"
            className="w-5 h-5 mx-auto dark:text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </td>
    </tr>
  );
};

export default Row;
