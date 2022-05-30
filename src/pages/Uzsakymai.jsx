import React from 'react';

const Uzsakymai = () => {
  const [orders, setOrders] = useState([]);
  const URLorders =
    'https://jellyfish-app-xdnzk.ondigitalocean.app/control/orders';
  useEffect(
    () => async () => {
      setOrders(await getData());
    },
    []
  );

  const getData = async () => {
    const res = await fetch(`URLorders`);
    const data = await res.json();
    console.log('data', data);
    return data.data;
  };

  return (
    <div>
      <Table arr={orders} />
    </div>
  );
};

export default Uzsakymai;
