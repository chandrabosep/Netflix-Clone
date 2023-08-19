import React, { useEffect, useState,useContext } from 'react';
import { getFirestore, collection, where, query, getDocs } from 'firebase/firestore';
import { firebaseApp } from '../firebase';
import { userContext } from '../App'
import { loadStripe } from '@stripe/stripe-js';


const Plans = () => {
  const contextUser = useContext(userContext);
  const db = getFirestore(firebaseApp);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const q = query(collection(db, 'products'), where('active', '==', true));
      const querySnapshot = await getDocs(q);

      const products = {};

      for (const productDoc of querySnapshot.docs) {
        const productData = productDoc.data();

        const prices = productData.prices;
        console.log(prices)

        products[productDoc.id] = {
          data: productData,
          prices: prices,
        };
      }

      setPlans(products);
    };

    fetchPlans();
  }, []);

 


  const loadCheckout = async (priceId) => {
  
    const docRef = await db.collection('customers')
      .doc(contextUser.id).collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
  
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
  
      if (error) {
        alert(`An error occurred: ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe('pk_test_51LxAVjSAN2kQHJjfP1pnCuqsOb8MIwKgW1xGmYxEI8EtPA7vlG5Xl9GaHqdXIcBdLlL7Hvm7x2hPf65caWgQg1jJ00xJOgJ9ak');
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };


  return (
    <div>
      {Object.entries(plans).map(([id, e]) => {
        return (
          <div key={id} className='flex items-center justify-between'>
            {e.data && (
              <div className='py-4'>
                <h5 className='font-medium'>{e.data.name}</h5>
                <h6 className='font-base text-sm'>{e.data.description}</h6>
              </div>
            )}
              <button
                onClick={() => loadCheckout(e.prices[0].id)}
                className='py-1 md:my-6 px-[4%] rounded-sm cursor-pointer bg-[#e50914f3]'
              >
                Subscribe
              </button>         
            </div>
        );
      })}
    </div>
  );
};

export default Plans;
