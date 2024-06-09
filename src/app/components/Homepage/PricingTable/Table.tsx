import Row from "./Row";
interface Row {
  name: string;
  basic: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
}
const Table = ({
  tableName,
  rows,
  pricing,
}: {
  tableName: string;
  rows: Row[];
  pricing: {
    basic: string;
    standard: string;
    premium: string;
  };
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <section className=" w-full">
        <div className="container mx-auto overflow-x-auto w-full">
          <table className="w-full">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th></th>
                <th scope="col">
                  <h2 className="px-2 text-lg font-medium">Starter</h2>
                  <p className="mb-3">
                    <span className="text-2xl font-extrabold sm:text-4xl text-white">
                      {pricing.basic}
                    </span>
                  </p>
                </th>
                <th scope="col">
                  <h2 className="px-2 text-lg font-medium">Standard</h2>
                  <p className="mb-3">
                    <span className="text-2xl font-extrabold sm:text-4xl text-white">
                      {pricing.standard}
                    </span>
                  </p>
                </th>
                <th scope="col">
                  <h2 className="px-2 text-lg font-medium">Premium</h2>
                  <p className="mb-3">
                    <span className="text-2xl font-extrabold sm:text-4xl text-white">
                      {pricing.premium}
                    </span>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="space-y-6 text-center divide-y dark:divide-gray-300">
              {rows.map((row, index) => (
                <Row
                  key={index}
                  title={row.name}
                  starter={row.basic}
                  standard={row.standard}
                  premium={row.premium}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Table;
