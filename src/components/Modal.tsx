import React from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-[#AA151B] mb-6">
          Получить консультацию
        </h2>
        <ContactForm onSubmit={() => {
          console.log('Form submitted');
          onClose();
        }} />
      </div>
    </div>
  );
};

export default Modal;