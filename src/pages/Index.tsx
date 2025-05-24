import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-[#7dd4bb]">
            Д-р Нейроуролог
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-[#7dd4bb] transition-colors"
            >
              О враче
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-[#7dd4bb] transition-colors"
            >
              Услуги
            </a>
            <a
              href="#appointment"
              className="text-gray-600 hover:text-[#7dd4bb] transition-colors"
            >
              Запись
            </a>
            <a
              href="tel:+7999999999"
              className="flex items-center text-[#7dd4bb]"
            >
              <Icon name="Phone" size={16} className="mr-1" />
              +7 (999) 999-99-99
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#7dd4bb] to-[#9dc7c7] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Врач-нейроуролог</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Специализируюсь на диагностике и лечении заболеваний мочеполовой
            системы, связанных с нарушениями нервной регуляции
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#7dd4bb] hover:bg-gray-100"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#7dd4bb]"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">О враче</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Врач-нейроуролог высшей категории с более чем 15-летним опытом
                  работы. Специализируюсь на диагностике и лечении урологических
                  заболеваний, связанных с нарушениями нервной системы.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Icon
                      name="GraduationCap"
                      size={20}
                      className="text-[#7dd4bb] mr-3"
                    />
                    <span>Первый МГМУ им. И.М. Сеченова</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Award"
                      size={20}
                      className="text-[#7dd4bb] mr-3"
                    />
                    <span>Сертификат по нейроурологии</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Users"
                      size={20}
                      className="text-[#7dd4bb] mr-3"
                    />
                    <span>Более 5000 успешных операций</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Доктор Иванов А.В.
              </h3>
              <p className="text-center text-gray-600">
                Врач-нейроуролог высшей категории
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#7dd4bb] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Stethoscope" size={24} className="text-white" />
                </div>
                <CardTitle>Диагностика</CardTitle>
                <CardDescription>
                  Комплексное обследование функций мочевого пузыря и тазового
                  дна
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Уродинамическое исследование</li>
                  <li>• Электромиография</li>
                  <li>• Цистоскопия</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#7dd4bb] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <CardTitle>Лечение</CardTitle>
                <CardDescription>
                  Современные методы лечения нейроурологических заболеваний
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Ботулинотерапия</li>
                  <li>• Медикаментозное лечение</li>
                  <li>• Нейростимуляция</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#7dd4bb] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <CardTitle>Реабилитация</CardTitle>
                <CardDescription>
                  Восстановление функций после травм и операций
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Тренировка мочевого пузыря</li>
                  <li>• Физиотерапия</li>
                  <li>• Психологическая поддержка</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Записаться на консультацию
            </h2>
            <p className="text-gray-600">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Имя *
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Телефон *
                    </label>
                    <Input placeholder="+7 (999) 999-99-99" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Описание проблемы
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md resize-none"
                    rows={4}
                    placeholder="Кратко опишите вашу проблему..."
                  ></textarea>
                </div>
                <Button
                  className="w-full bg-[#7dd4bb] hover:bg-[#1EAEDB]"
                  size="lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Отзывы пациентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Пациент {i}</h4>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, j) => (
                          <Icon key={j} name="Star" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Очень благодарен доктору за профессиональный подход и
                    качественное лечение. Проблема решена полностью,
                    самочувствие отличное.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-[#7dd4bb]">
                Контакты
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>+7 (999) 999-99-99</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  <span>doctor@example.com</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Режим работы</h3>
              <div className="space-y-2 text-gray-300">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#7dd4bb] transition-colors"
                >
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#7dd4bb] transition-colors"
                >
                  <Icon name="Mail" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Врач-нейроуролог. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
