import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import PrivacyPolicy from './pages/PrivacyPolicy';
import type { Testimonial, CaseStudy, Statistic, Requirement, WorkStage } from './types';

const statistics: Statistic[] = [
  { value: "1000+", label: "Довольных клиентов" },
  { value: "95%", label: "Успешных заявок" },
  { value: "10+", label: "Лет опыта" },
  { value: "24/7", label: "Поддержка" }
];

const requirements: Requirement[] = [
  {
    id: 1,
    title: "Загранпаспорт",
    description: "Действительный не менее 2 лет",
    icon: "🪪"
  },
  {
    id: 2,
    title: "Справка о несудимости",
    description: "С апостилем и переводом",
    icon: "📄"
  },
  {
    id: 3,
    title: "Медицинская страховка",
    description: "На весь период пребывания",
    icon: "🏥"
  },
  {
    id: 4,
    title: "Подтверждение дохода",
    description: "Выписка со счета или справка с работы",
    icon: "💶"
  }
];

const workStages: WorkStage[] = [
  {
    id: 1,
    title: "Консультация",
    description: "Бесплатная консультация и анализ вашей ситуации"
  },
  {
    id: 2,
    title: "Подготовка документов",
    description: "Помощь в сборе и оформлении необходимых документов"
  },
  {
    id: 3,
    title: "Подача заявления",
    description: "Подача документов и сопровождение процесса"
  },
  {
    id: 4,
    title: "Получение ВНЖ",
    description: "Помощь в получении карты резидента"
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Анна М.",
    content: "Благодаря профессиональной поддержке команды, процесс получения ВНЖ прошел гладко и без стресса.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Михаил К.",
    content: "Отличный сервис! Все этапы были четко разъяснены, документы подготовлены вовремя.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const cases: CaseStudy[] = [
  {
    id: 1,
    title: "Бизнес-ВНЖ",
    description: "Семья из России получила ВНЖ через открытие бизнеса в Испании",
    outcome: "Одобрение за 3 месяца",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 2,
    title: "ВНЖ без права на работу",
    description: "Пенсионер получил ВНЖ на основании достаточных средств",
    outcome: "Одобрение за 2 месяца",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300"
  }
];

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-[#AA151B]">О нас</a>
            <a href="#conditions" className="text-gray-700 hover:text-[#AA151B]">Условия получения ВНЖ</a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#AA151B]">Отзывы</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer" className="text-[#AA151B] hover:text-[#8A1116]">
              <MessageSquare size={24} />
            </a>
            <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer" className="text-[#AA151B] hover:text-[#8A1116]">
              <Phone size={24} />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#AA151B] to-[#F1BF00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              ВНЖ в Испании за 2 месяца
            </h1>
            <p className="text-xl text-white mb-8">
              Поможем оформить ВНЖ в Испании с правом на работу для всей семьи на 3 года
            </p>
            <button
              className="bg-white text-[#AA151B] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Получить консультацию в WhatsApp
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-[#AA151B] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Оценить шансы
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#AA151B] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="conditions" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Необходимые документы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req) => (
              <div key={req.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{req.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{req.title}</h3>
                <p className="text-gray-600">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Stages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Этапы работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workStages.map((stage) => (
              <div key={stage.id} className="relative">
                <div className="bg-[#AA151B] text-white w-8 h-8 rounded-full flex items-center justify-center mb-4">
                  {stage.id}
                </div>
                <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                <p className="text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="font-semibold">{testimonial.name}</div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Примеры успешных кейсов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((case_) => (
              <div key={case_.id} className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={case_.image}
                  alt={case_.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{case_.title}</h3>
                  <p className="text-gray-600 mb-4">{case_.description}</p>
                  <div className="text-[#AA151B] font-semibold">{case_.outcome}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Готовы начать процесс получения ВНЖ?</h2>
              <p className="text-gray-600 mb-8">
                Заполните форму, и наш специалист свяжется с вами для бесплатной консультации
              </p>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500"
                alt="Successful person"
                className="rounded-lg"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Оставить заявку</h3>
              <ContactForm onSubmit={() => console.log('Form submitted')} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">О нас</h3>
              <p className="text-gray-400">
                Мы помогаем получить вид на жительство в Испании быстро и легально
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Контакты</h3>
              <div className="space-y-2">
                <a href="https://t.me/your_channel" className="text-gray-400 hover:text-white block">
                  Telegram
                </a>
                <a href="https://wa.me/your_number" className="text-gray-400 hover:text-white block">
                  WhatsApp
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Информация</h3>
              <div className="space-y-2">
                <a href="/privacy-policy" className="text-gray-400 hover:text-white block">
                  Политика конфиденциальности
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;