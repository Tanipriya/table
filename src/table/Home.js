import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState("");
  console.log("data", data);
  const [selectedName, setSelectedName] = useState("");

  const onNameChange = (name) => {
    setSelectedName(name);
  };

  const fetchData = async () => {
    const jwtToken = Cookies.get("jwt_token");

    const url = `https://ec2-13-235-112-81.ap-south-1.compute.amazonaws.com/getAllStoreData`;
    const option = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    try {
      const response = await fetch(url, option);
      if (response.status === 200) {
        const newData = await response.json();
        setData(newData);
        console.log("data", newData);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-around mt-5 pr-3 pl-2">
        <select
          className="bg-gray-500 text-lg font-bold text-white px-3 py-2 rounded-lg m-2"
          onChange={(e) => onNameChange(e.target.value)}
        >
          <option value="">Select a Name</option>
          {data &&
            data.map((item, index) => (
              <option key={index} value={item.Name}>
                {item.Name}
              </option>
            ))}
        </select>
      </div>

      {selectedName && (
        <div className="pr-2 pl-2 text-lg">
          {data.map(
            (item, index) =>
              item.Name === selectedName && (
                <div key={index}>
                  {/* Name: {item.Address}  */}
                  <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto  sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-900 md:rounded-lg">
                          <table className="min-w-full">
                            <thead className="bg-blue-500 ">
                              <tr>
                                <th className="border px-4 py-3.5  text-md font-bold text-center text-black">
                                  <span>Product_Name</span>
                                </th>
                                <th className="border px-4 py-3.5  text-md font-bold text-center text-black">
                                  Barcode
                                </th>
                                <th className="border px-4 py-3.5  text-md font-bold text-center text-black">
                                  Quantity
                                </th>
                                <th className="border px-4 py-3.5  text-md font-bold text-center text-black">
                                  Model_Number
                                </th>
                                <th className="border px-4 py-3.5  text-md font-bold text-center text-black">
                                  Model_Number
                                </th>
                                <th className="border px-4 py-3.5  text-md font-bold text-center text-black">
                                  Model_Number
                                </th>
                                <th className="border px-4 py-3.5  text-md font-bold text-center text-black">
                                  Model_Number
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y-2  divide-gray-500">
                              {item.Products &&
                                item.Products.map((product, prodIndex) => (
                                  <tr key={prodIndex.barcode}>
                                    <td className="border px-4 py-2 text-center text-sm font-medium text-gray-900">
                                      {product.productName}
                                    </td>
                                    <td className="border px-4 py-2 text-center text-sm font-medium text-gray-900">
                                      {product.barcode}
                                    </td>
                                    <td className="border px-4 py-2 text-center text-sm font-medium text-gray-900">
                                      {product.quantity}
                                    </td>
                                    <td className="border px-4 py-2 text-center text-sm font-medium text-gray-900">
                                      {product.productName}
                                    </td>
                                    <td className="border px-4 py-2 text-center text-sm font-medium text-gray-900">
                                      {product.productName}
                                    </td>
                                    <td className="border px-4 py-2 text-center text-sm font-medium text-gray-900">
                                      {product.productName}
                                    </td>
                                    <td className="border px-4 py-2 text-center text-sm font-medium text-gray-900">
                                      {product.productName}
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              )
          )}
        </div>
      )}
    </>
  );
};

export default Home;
