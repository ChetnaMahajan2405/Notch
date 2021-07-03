import { useState } from "react";
import { ISearchData } from "pages/Home/redux/types";
import { getFormattedDate, getOrderStatusClassName, sortByData } from "./utils";
import Tag from "../Tag";
import "./grid.scss";

interface Props {
  data: ISearchData[];
}

const Grid = ({ data = [] }: Props) => {
  const [isAsc, toggle] = useState(true);
  const onClick = () => toggle((state) => !state);

  return (
    <table id="rwd-table-large">
      <thead>
        <tr>
          <th>STATUS</th>
          <th>DELIVERY DAY</th>
          <th className="pointer" onClick={onClick}>
            SUPPLIER {isAsc ? <>&#9650;</> : <>&#9660;</>}
          </th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        {sortByData(data, "vendorName", isAsc).map(
          ({
            id,
            orderBuyerStatus,
            deliveryDay,
            vendorName,
            isPendingVendorOnboarding,
            isBYOS,
            total,
          }) => (
            <tr key={id}>
              <td>
                <Tag
                  text={orderBuyerStatus}
                  className={getOrderStatusClassName(orderBuyerStatus)}
                />
              </td>
              <td>{getFormattedDate(deliveryDay) || <>&nbsp;</>}</td>
              <td className="pointer" onClick={onClick}>
                <div className="arrow">
                  {isAsc ? <>&#9650;</> : <>&#9660;</>}
                </div>
                {vendorName}
                {!isBYOS && (
                  <Tag text="MARKET" className="space-left square-tag" />
                )}
                {isPendingVendorOnboarding && (
                  <Tag text="1st" className="space-left oval-tag-first" />
                )}
              </td>
              <td>{!!total ? `$${total}` : <>&nbsp;</>}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Grid;
