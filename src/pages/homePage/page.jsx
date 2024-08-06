import React, { useState, startTransition, Suspense } from 'react';
import ObjModel from '../../Logic/ObjModel';
import FileUpload from '../../Logic/FileUpload';
import CreateNfts from '../../CreateNFTs';

const HomePage = () => {
  const [objUrl, setObjUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = (file) => {
    if (file && file.name.endsWith('.obj')) {
      const url = URL.createObjectURL(file);
      startTransition(() => {
        setObjUrl(url);
        setError(null); // Clear any previous errors
      });
    } else {
      setError('Invalid file type. Please upload a valid .obj file.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <CreateNfts/>
      {/* <header className="text-center w-full">
        <h1 className="text-4xl font-bold mb-4 text-orange-400">3D Model Viewer</h1>
        <FileUpload onFileUpload={handleFileUpload} />
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <div className="w-full h-96 mt-8 border border-gray-300">
          {objUrl && (
            <Suspense fallback={<div>Loading 3D Model...</div>}>
              <ObjModel objUrl={objUrl} />
            </Suspense>
          )}
        </div>
      </header> */}
    </div>
  );
};

export default HomePage;
