import { useState } from "react";
import CollectionLeft from "./components/Left";
import CollectionRight from "./components/Right";

type Props = {};
interface CheckedItem {
  category: string;
  value: string;
}

const Collection = (props: Props) => {
  const [listChecked, setListChecked] = useState<CheckedItem[]>([]);
  return (
    <div className="flex">
      <CollectionLeft setListChecked={setListChecked} />
      <CollectionRight listChecked={listChecked} />
    </div>
  );
};

export default Collection;
