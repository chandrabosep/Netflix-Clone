import React, { useEffect, useState } from 'react';
import { getFirestore, collection, where, query, getDocs } from 'firebase/firestore';
import { firebaseApp } from '../firebase';

const Plans = () => {
  const db = getFirestore(firebaseApp);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const q = query(collection(db, 'products'), where('active', '==', true));
      const querySnapshot = await getDocs(q);

      const products = {};

      for (const productDoc of querySnapshot.docs) {
        const productData = productDoc.data();

        const priceSnap = await getDocs(collection(productDoc.ref, 'prices'));
        const prices = [];

        for (const priceDoc of priceSnap.docs) {
          prices.push({
            priceId: priceDoc.id,
            priceData: priceDoc.data(),
          });
        }

        products[productDoc.id] = {
          data: productData,
          prices: prices,
        };
      }

      setPlans(products);
    };

    fetchPlans();
  }, []);

  return (
    <div>
      {Object.entries(plans).map(([id, e]) => {
        return (
          <div key={id}>
            {e.data && (
              <div>
                <h5>{e.data.name}</h5>
                <h6>{e.data.description}</h6>
                <ul>
                  {e.prices.map(price => (
                    <li key={price.priceId}>
                      {price.priceData.currency} {price.priceData.unit_amount / 100} per {price.priceData.interval}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
};

export default Plans;
