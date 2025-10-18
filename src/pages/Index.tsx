import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: 'Sparkles',
      title: 'Веб-разработка',
      description: 'Создание современных и функциональных веб-приложений с использованием последних технологий'
    },
    {
      icon: 'Layout',
      title: 'UI/UX Дизайн',
      description: 'Проектирование интуитивных интерфейсов, ориентированных на потребности пользователей'
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные приложения',
      description: 'Разработка кроссплатформенных мобильных решений для iOS и Android'
    },
    {
      icon: 'Palette',
      title: 'Брендинг',
      description: 'Создание уникального визуального стиля и фирменного стиля вашего бренда'
    }
  ];

  const portfolio = [
    {
      title: 'Корпоративный сайт',
      category: 'Веб-дизайн',
      image: 'https://cdn.poehali.dev/projects/33fa9367-49d4-47bb-bd95-cbb5998a606b/files/9639a1fb-8ac0-4b2b-a47d-3a58aef590cb.jpg'
    },
    {
      title: 'E-commerce платформа',
      category: 'Разработка',
      image: 'https://cdn.poehali.dev/projects/33fa9367-49d4-47bb-bd95-cbb5998a606b/files/9639a1fb-8ac0-4b2b-a47d-3a58aef590cb.jpg'
    },
    {
      title: 'Мобильное приложение',
      category: 'UI/UX',
      image: 'https://cdn.poehali.dev/projects/33fa9367-49d4-47bb-bd95-cbb5998a606b/files/9639a1fb-8ac0-4b2b-a47d-3a58aef590cb.jpg'
    }
  ];

  const blogPosts = [
    {
      title: 'Тренды веб-дизайна 2025',
      date: '15 марта 2025',
      excerpt: 'Исследуем главные тенденции в современном веб-дизайне и их влияние на пользовательский опыт',
      image: 'https://cdn.poehali.dev/projects/33fa9367-49d4-47bb-bd95-cbb5998a606b/files/7ec3e760-8ed4-4aff-b61a-e2f05ba92bac.jpg'
    },
    {
      title: 'Минимализм в интерфейсах',
      date: '10 марта 2025',
      excerpt: 'Почему простота и функциональность становятся ключевыми принципами современного дизайна',
      image: 'https://cdn.poehali.dev/projects/33fa9367-49d4-47bb-bd95-cbb5998a606b/files/7ec3e760-8ed4-4aff-b61a-e2f05ba92bac.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Studio</h1>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'services', 'portfolio', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О нас'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Создаём цифровые
                <span className="block text-primary">решения</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Разрабатываем современные веб-приложения и интерфейсы, которые помогают бизнесу расти
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')}>
                  Начать проект
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/33fa9367-49d4-47bb-bd95-cbb5998a606b/files/8849a8b0-b96b-486f-8766-76bb4bc3f928.jpg"
                alt="Hero"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">О нас</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Мы — команда профессионалов, создающая цифровые продукты, которые меняют правила игры. 
            Наш подход основан на глубоком понимании бизнес-задач и современных технологий.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">150+</h3>
              <p className="text-muted-foreground">Завершённых проектов</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">8</h3>
              <p className="text-muted-foreground">Лет на рынке</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">98%</h3>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Избранные проекты нашей студии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div 
                key={index} 
                className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Блог</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Последние статьи и новости из мира дизайна
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 space-y-3">
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <h3 className="text-2xl font-semibold">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto font-medium">
                    Читать далее <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Готовы обсудить ваш проект? Мы всегда открыты для новых идей
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 text-lg">
              <Icon name="Mail" className="text-primary" size={24} />
              <a href="mailto:hello@studio.com" className="hover:text-primary transition-colors">
                hello@studio.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Icon name="Phone" className="text-primary" size={24} />
              <a href="tel:+79001234567" className="hover:text-primary transition-colors">
                +7 (900) 123-45-67
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 pt-6">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Github" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Linkedin" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Twitter" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
