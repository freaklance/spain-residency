import React from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';
import { sendMessage } from '../api';
import { toast } from 'react-toastify';

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
        <ContactForm onSubmit={async (data) => {
          try {
            await sendMessage(data);
            toast("Заявка отправлена! Мы свяжемся с вами в ближайшее время", { type: "success", autoClose: false, position: 'top-center', theme: 'dark' });
          } catch (error) {
            toast("Произошла ошибка при отправке заявки. Попробуйте позже", { type: "error", autoClose: false, position: 'top-center', theme: 'dark' });
          };
          onClose();
        }} />
      </div>
    </div>
  );
};

export default Modal;