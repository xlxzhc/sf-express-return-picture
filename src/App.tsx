
import React, { useState } from 'react';
import Header from './components/Header';
import StatusTracker from './components/StatusTracker';
import RecipientInfo from './components/RecipientInfo';
import MyServices from './components/MyServices';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div className="max-w-md mx-auto bg-gray-100 font-sans text-gray-800 min-h-screen relative pb-16">
      <Header />
      <main className="p-2">
        <StatusTracker />
        <RecipientInfo
            name={name}
            phone={phone}
            address={address}
            setName={setName}
            setPhone={setPhone}
            setAddress={setAddress}
        />
        <MyServices />
      </main>
      <Footer 
        name={name}
        phone={phone}
        address={address}
        setName={setName}
        setPhone={setPhone}
        setAddress={setAddress}
      />
    </div>
  );
};

export default App;