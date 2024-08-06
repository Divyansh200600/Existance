import React, { useState } from 'react';
import Sidebar from '../../components/SideBar/Sidebar'; // Adjust import path
import Upload from '../../components/myAssetsComponents/upload/upload'; // Adjust import path
import Transaction from '../../components/myAssetsComponents/transaction/transaction'; // Adjust import path

const MyAssets = () => {
  const [activePage, setActivePage] = useState('');

  const renderContent = () => {
    switch (activePage) {
      case 'upload':
        return <Upload />;
      case 'transaction':
        return <Transaction />;
      default:
        return <h1>Main Content Area</h1>;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar onPageChange={setActivePage} activePage={activePage} />
      <div style={{ flex: 1, padding: '16px' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default MyAssets;
