import React from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  pool: {
    isDotBlue: boolean;
    destination: string;
    vehicleType: string;
    paymentMethods: string[];
    seatCount: number;
    isRoundTrip: boolean;
    time: string;
    date: string;
  } | null;
}

const CarpoolCardPopup: React.FC<PopupProps> = ({ isOpen, onClose, pool }) => {
  if (!isOpen || !pool) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        <div>
          <h2>{pool.destination}</h2>
          <p>Vehicle: {pool.vehicleType}</p>
          <p>Time: {pool.time}</p>
          <p>Date: {pool.date}</p>
          <p>Seats: {pool.seatCount}</p>
          <p>Payment Methods: {pool.paymentMethods.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default CarpoolCardPopup;