import React, { useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "../../../app/constents";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllOrdersAsync,
  selectOrders,
  selectTotalOrders,
} from "../../order/orderSlice";
import { PencilIcon, EyeIcon } from "@heroicons/react/24/outline";
const AdminOrder = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const orders = useSelector(selectOrders);
  const selectTotalOrder = useSelector(selectTotalOrders);
  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync(pagination));
  }, [dispatch, page]);

  const handleShow=()=>{

  }
  const handleEdit=()=>{

  }
  return (
    <div className="overflow-x-auto">
      <div className="bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Order Number</th>
                  <th className="py-3 px-6 text-left">Items</th>
                  <th className="py-3 px-6 text-center">Total Amount</th>
                  <th className="py-3 px-6 text-center">shiping Address</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {orders.map((order) => (
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-medium">{order.id}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      {order.items.map((item) => (
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img
                              className="w-6 h-6 rounded-full"
                              src={item.thumbnail}
                            />
                          </div>
                          <span>
                            {item.title} - #{item.quantiy} - ${item.price}
                          </span>
                        </div>
                      ))}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        ${order.totalAmount}
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div>
                        <strong>{order.selectedAddress.name}</strong>

                        <div>{order.selectedAddress.city}</div>
                        <div>{order.selectedAddress.state}</div>
                        <div>{order.selectedAddress.pincode}</div>
                        <div>{order.selectedAddress.phone}</div>
                        <div>{order.selectedAddress.street}</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="w-6 mr-4 transform hover:text-purple-500 hover:scale-110">
                          <EyeIcon className="w-7 h-7" onClick={handleShow}></EyeIcon>
                        </div>
                        <div className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <PencilIcon className="w-7 h-7" onClick={handleEdit}></PencilIcon>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
//6:47 