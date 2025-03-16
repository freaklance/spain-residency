import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-[#AA151B] hover:text-[#8A1116] mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Вернуться на главную
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Политика конфиденциальности</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Последнее обновление: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Введение</h2>
            <p className="text-gray-700">
              Мы уважаем право на конфиденциальность наших клиентов и защищаем их персональные данные. 
              Настоящая политика конфиденциальности описывает, как мы собираем, используем и защищаем 
              информацию, которую вы предоставляете нам через наш веб-сайт.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Сбор информации</h2>
            <p className="text-gray-700">
              Мы собираем информацию, которую вы добровольно предоставляете нам через формы на сайте, 
              включая ваше имя, страну проживания и контактный телефон. Эта информация используется 
              исключительно для связи с вами и предоставления запрошенных услуг.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Использование информации</h2>
            <p className="text-gray-700">
              Собранная информация используется для:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Обработки ваших запросов</li>
              <li>Предоставления консультаций по получению ВНЖ</li>
              <li>Информирования об изменениях в наших услугах</li>
              <li>Улучшения качества обслуживания</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Защита данных</h2>
            <p className="text-gray-700">
              Мы принимаем все необходимые меры для защиты ваших персональных данных от 
              несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Контакты</h2>
            <p className="text-gray-700">
              Если у вас есть вопросы относительно нашей политики конфиденциальности, 
              пожалуйста, свяжитесь с нами через форму обратной связи на сайте.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;