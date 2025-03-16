import React, { useState } from 'react';
import type { ContactFormData } from '../types';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    country: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Имя</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#AA151B] focus:ring focus:ring-[#AA151B] focus:ring-opacity-50"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Страна</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#AA151B] focus:ring focus:ring-[#AA151B] focus:ring-opacity-50"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Телефон</label>
        <input
          type="tel"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#AA151B] focus:ring focus:ring-[#AA151B] focus:ring-opacity-50"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#AA151B] text-white py-2 px-4 rounded-md hover:bg-[#8A1116] transition-colors"
      >
        Отправить
      </button>
    </form>
  );
};

export default ContactForm;