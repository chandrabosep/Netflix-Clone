import React, { useEffect, useState, useContext } from 'react';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { firebaseApp } from '../firebase';
import { userContext } from '../App';
import { loadStripe } from '@stripe/stripe-js';

const Plans = () => {
  const contextUser = useContext(userContext);
  const db = getFirestore(firebaseApp);
  const [plans, setPlans] = useState([]);
  const [pushSubscription, setSubscription] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const userSubscriptionsRef = collection(
        doc(db, 'customers', contextUser.uid),
        'subscriptions'
      );
  
      try {
        const querySnapshot = await getDocs(userSubscriptionsRef);
  
        const subscriptionsData = [];
  
        querySnapshot.forEach(subscriptionDoc => {
          const subscriptionData = subscriptionDoc.data();
          subscriptionsData.push({
            role: subscriptionData.role,
            current_period_end: subscriptionData.current_period_end.seconds,
            current_period_start: subscriptionData.current_period_start.seconds,
          });
        });
  
        console.log(subscriptionsData); // Check the retrieved data
  
        setSubscription(subscriptionsData); // Set the subscriptions data
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };
  
    fetchSubscriptions();
  }, [contextUser.uid]);
  

  

  useEffect(() => {
    const fetchPlans = async () => {
      const q = query(collection(db, 'products'), where('active', '==', true));
      const querySnapshot = await getDocs(q);

      const plansData = {};

      for (const productDoc of querySnapshot.docs) {
        const productData = productDoc.data();

        plansData[productDoc.id] = productData;

        const priceSnap = await getDocs(collection(productDoc.ref, 'prices'));

        plansData[productDoc.id].prices = priceSnap.docs.map((price) => ({
          priceId: price.id,
          priceData: price.data(),
        }));
      }

      setPlans(plansData);
    };

    fetchPlans();
  }, []);

  const loadCheckout = async (priceId) => {
    console.log('contextUser.uid:', contextUser.contextUser.uid); // Debugging log

    const userCheckoutSessionsRef = collection(
      doc(db, 'customers', contextUser.contextUser.uid),
      'checkout_sessions'
    );

    const docRef = await addDoc(userCheckoutSessionsRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    onSnapshot(docRef, async (snap) => {
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
        const pushSubscriptionForPlan = pushSubscription.find(sub => sub.role === e.name);
        const isCurrentPackage = pushSubscriptionForPlan && e.name?.toLowerCase().includes(pushSubscriptionForPlan.role);
        return (
          <div key={id} className='flex items-center justify-between'>
            <div className='py-4'>
              <h5 className='font-medium'>{e.name}</h5>
              <h6 className='font-base text-sm'>{e.description}</h6>
            </div>
            <button
              onClick={() => !isCurrentPackage && loadCheckout(e.prices[0].priceId)}
              className='py-1 md:my-6 px-[4%] rounded-sm cursor-pointer bg-[#e50914f3]'
            >
              {isCurrentPackage ? 'current package' : 'Subscribe'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Plans;





