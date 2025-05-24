import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f8fffe] overflow-hidden">
      {/* Floating Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-lg rounded-full px-8 py-3 shadow-lg">
        <div className="flex items-center space-x-8">
          <div className="font-bold text-lg text-[#7dd4bb]">
            Доктор Совьяк Маргарита Александровна
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#about" className="hover:text-[#7dd4bb] transition-colors">
              О враче
            </a>
            <a
              href="#services"
              className="hover:text-[#7dd4bb] transition-colors"
            >
              Услуги
            </a>
            <Button
              size="sm"
              className="bg-[#7dd4bb] hover:bg-[#66c7a8] rounded-full"
            >
              <Icon name="Phone" size={14} className="mr-1" />
              Звонок
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero with Geometric Shapes */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#7dd4bb]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#9dc7c7]/30 transform rotate-45"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#7dd4bb]/15 rounded-lg transform -rotate-12"></div>

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-[#7dd4bb]/10 px-4 py-2 rounded-full text-sm font-medium text-[#7dd4bb]">
              Врач-нейроуролог
            </div>
            <h1 className="text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-gray-900">Доктор</span>
              <br />
              <span className="text-[#7dd4bb]">Совяк М.А.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Специализируюсь на диагностике и лечении заболеваний мочеполовой
              системы с применением передовых методов
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-[#7dd4bb] hover:bg-[#66c7a8] rounded-full px-8"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Консультация
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#7dd4bb] text-[#7dd4bb] hover:bg-[#7dd4bb] hover:text-white rounded-full px-8"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Вопрос
              </Button>
            </div>
          </div>

          {/* Creative photo section */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7dd4bb] to-[#9dc7c7] rounded-[60px] transform rotate-6"></div>
              <div className="absolute inset-4 bg-white rounded-[50px] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/fb6cc7b8-8c2c-4aea-9b33-149dad80406c.jpeg"
                  alt="Доктор Совяк М.А."
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#7dd4bb]">15+</div>
                  <div className="text-xs text-gray-600">лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Services Section */}
      <section className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7dd4bb]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Специализация
            </h2>
            <div className="w-20 h-1 bg-[#7dd4bb] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1 - Offset */}
            <div className="lg:mt-12 group cursor-pointer">
              <div className="bg-white rounded-[30px] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#7dd4bb]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7dd4bb] to-[#9dc7c7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Stethoscope" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Диагностика
                </h3>
                <p className="text-gray-600 mb-4">
                  Комплексное обследование с применением современного
                  оборудования
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-[#7dd4bb] rounded-full mr-2"></div>
                    Уродинамическое исследование
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-[#7dd4bb] rounded-full mr-2"></div>
                    Электромиография
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-[#7dd4bb] rounded-full mr-2"></div>
                    Цистоскопия
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 - Normal */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-[#7dd4bb] to-[#9dc7c7] rounded-[30px] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Zap" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Лечение</h3>
                <p className="text-white/90 mb-4">
                  Современные методы терапии нейроурологических заболеваний
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                    Ботулинотерапия
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                    Медикаментозное лечение
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                    Нейростимуляция
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 - Offset down */}
            <div className="lg:mt-24 group cursor-pointer">
              <div className="bg-white rounded-[30px] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#7dd4bb]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7dd4bb] to-[#9dc7c7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Heart" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Реабилитация
                </h3>
                <p className="text-gray-600 mb-4">
                  Восстановление функций после травм и хирургических
                  вмешательств
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-[#7dd4bb] rounded-full mr-2"></div>
                    Тренировка мочевого пузыря
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-[#7dd4bb] rounded-full mr-2"></div>
                    Физиотерапия
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-[#7dd4bb] rounded-full mr-2"></div>
                    Психологическая поддержка
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Split Layout */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div>
                <div className="inline-block bg-[#7dd4bb]/10 px-4 py-2 rounded-full text-sm font-medium text-[#7dd4bb] mb-4">
                  Профессиональный опыт
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  О докторе
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Врач-нейроуролог высшей категории с более чем 15-летним опытом
                  работы. Специализируюсь на диагностике и лечении урологических
                  заболеваний, связанных с нарушениями нервной системы.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#7dd4bb]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="GraduationCap"
                      size={24}
                      className="text-[#7dd4bb]"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Специализация
                    </h4>
                    <p className="text-sm text-gray-600">
                      Нейроурология, уродинамика
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#7dd4bb]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-[#7dd4bb]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Категория
                    </h4>
                    <p className="text-sm text-gray-600">Высшая квалификация</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#7dd4bb]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-[#7dd4bb]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Опыт</h4>
                    <p className="text-sm text-gray-600">
                      Более 15 лет практики
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#7dd4bb]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-[#7dd4bb]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Прием</h4>
                    <p className="text-sm text-gray-600">
                      Москва, центр города
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#7dd4bb] to-[#9dc7c7] rounded-3xl opacity-20"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#7dd4bb] to-[#9dc7c7] rounded-full text-white text-2xl font-bold">
                      МС
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Маргарита Александровна
                        <br />
                        Совяк
                      </h3>
                      <p className="text-[#7dd4bb] font-medium">
                        Врач-нейроуролог
                      </p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <Icon
                          name="Phone"
                          size={16}
                          className="text-[#7dd4bb]"
                        />
                        <span>+7 (999) 999-99-99</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Icon
                          name="Mail"
                          size={16}
                          className="text-[#7dd4bb]"
                        />
                        <span>doctor@example.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Appointment Form */}
      <section
        id="appointment"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#7dd4bb]/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Записаться на консультацию
                </h2>
                <p className="text-lg text-gray-600">
                  Заполните форму, и мы свяжемся с вами в течение часа
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#7dd4bb]/20 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-[#7dd4bb]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Быстрый ответ</h4>
                    <p className="text-sm text-gray-600">
                      Перезвоним в течение часа
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#7dd4bb]/20 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={20} className="text-[#7dd4bb]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Конфиденциальность</h4>
                    <p className="text-sm text-gray-600">
                      Ваши данные под защитой
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#7dd4bb]/10">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Имя
                    </label>
                    <Input
                      className="rounded-xl border-gray-200 focus:border-[#7dd4bb] focus:ring-[#7dd4bb]"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Телефон
                    </label>
                    <Input
                      className="rounded-xl border-gray-200 focus:border-[#7dd4bb] focus:ring-[#7dd4bb]"
                      placeholder="+7 (999) 999-99-99"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email (необязательно)
                  </label>
                  <Input
                    type="email"
                    className="rounded-xl border-gray-200 focus:border-[#7dd4bb] focus:ring-[#7dd4bb]"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Описание проблемы
                  </label>
                  <textarea
                    className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:border-[#7dd4bb] focus:ring-2 focus:ring-[#7dd4bb]/20"
                    rows={4}
                    placeholder="Кратко опишите вашу проблему..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#7dd4bb] to-[#9dc7c7] hover:from-[#66c7a8] hover:to-[#8bb5b5] text-white rounded-xl py-6 text-lg font-semibold">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Unique Layout */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7dd4bb]/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 py-16 relative">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#7dd4bb] mb-4">
                  Д-р Совяк М.А.
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Врач-нейроуролог высшей категории. Современные методы
                  диагностики и лечения заболеваний мочеполовой системы.
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-[#7dd4bb]/20 rounded-full flex items-center justify-center hover:bg-[#7dd4bb] transition-colors"
                >
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#7dd4bb]/20 rounded-full flex items-center justify-center hover:bg-[#7dd4bb] transition-colors"
                >
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Контакты</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 999-99-99</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} />
                  <span>doctor@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Режим работы</h4>
              <div className="space-y-2 text-gray-300">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Врач-нейроуролог Совяк М.А. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
