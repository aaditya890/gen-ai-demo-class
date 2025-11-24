import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ToolsIcons {
  src: string;
  name: string;
}

interface ModuleItem {
  title: string;
  points: string;
}
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  productDetailInformation: any[] = [

  ]
  daysLeft = 0;
  hoursLeft = 0;
  minutesLeft = 0;
  secondsLeft = 0;
  seatsAvailable = 11;
  private targetDate = new Date('2025-11-26T09:00:00');
  private timerId!: any;

  faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What exactly is AI Day?',
      answer:
        'AI Day is a one-day, high-impact learning experience by OctaLearn focused on Automation Magic & Generative AI. You’ll discover how to make AI work for you — automating tasks, creating content, and building smarter workflows.',
      open: false
    },
    {
      id: 2,
      question: 'Will I get a certificate?',
      answer:
        'Yes! Every participant receives an Official Certificate of Attendance, recognizing your completion of AI Day 2025 and your new AI skills.',
      open: false
    },
    {
      id: 3,
      question: 'Do I get any free tools or resources?',
      answer:
        'Absolutely! You’ll get exclusive access to free AI tools, templates, and prompt kits designed to help you start automating immediately — even after the event.',
      open: false
    },
    {
      id: 4,
      question: 'Do I need any prior experience in AI or coding?',
      answer:
        'Not at all. AI Day is designed for beginners to intermediates. Whether you’re a student, creator, or business professional — you’ll learn step-by-step through guided, practical sessions.',
      open: false
    },
    {
      id: 5,
      question: 'What will I actually learn?',
      answer:
        'You’ll master Automation Magic, Generative AI Skills, Prompt Engineering, and build your first mini AI-powered automation project before the day ends!',
      open: false
    },
    {
      id: 6,
      question: 'Who should attend?',
      answer:
        'Anyone ready to learn how to use AI to work smarter, not harder! Perfect for students, entrepreneurs, engineers, marketers, and ambitious professionals who want to join the top 1% of AI-ready talent.',
      open: false
    },
    {
      id: 7,
      question: 'How do I register?',
      answer:
        'Simply visit octalearn.in or click on Register Now to reserve your seat. Limited spots available — and they fill up fast!',
      open: false
    }
  ];


  icons: ToolsIcons[] = [
    { src: 'assets/ai/openai.png', name: 'Sora' },
    { src: 'assets/ai/grok.png', name: 'Grok' },
    { src: 'assets/ai/gemini-color.svg', name: 'Gemini' },
    { src: 'assets/ai/midjourney.png', name: 'Midjourney' },
    { src: 'assets/ai/perplexity-color.svg', name: 'Perplexity' },
    { src: 'assets/ai/n8n-color.svg', name: 'n8n' },
    { src: 'assets/ai/notion.png', name: 'Notion' },
    { src: 'assets/ai/deepseek-color.svg', name: 'DeepSeek' },
  ];

  ngOnInit(): void {
    this.tick();
    this.timerId = setInterval(() => this.tick(), 1000);
    this.updateSeats();
  }

  ngOnDestroy(): void {
    if (this.timerId) clearInterval(this.timerId);
  }

  private tick(): void {
    const now = new Date().getTime();
    let diff = this.targetDate.getTime() - now;

    if (diff <= 0) {
      this.daysLeft = this.hoursLeft = this.minutesLeft = this.secondsLeft = 0;
      if (this.timerId) clearInterval(this.timerId);
      return;
    }

    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;
    const second = 1000;

    this.daysLeft = Math.floor(diff / day);
    diff %= day;

    this.hoursLeft = Math.floor(diff / hour);
    diff %= hour;

    this.minutesLeft = Math.floor(diff / minute);
    diff %= minute;

    this.secondsLeft = Math.floor(diff / second);
  }

  private updateSeats(): void {
    const startingSeats = 11;
    const seatsPerDay = 4;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const now = new Date();
    const diffInMs = now.getTime() - today.getTime();
    const daysPassed = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    this.seatsAvailable = Math.max(startingSeats - (daysPassed * seatsPerDay), 0);
  }





  navigateToRegisterPage(): void {
    window.location.href = 'https://forms.gle/ZmTCG49KAFLBuBx17';
  }

  toggleFaq(id: number): void {
    this.faqs = this.faqs.map(f => ({ ...f, open: f.id === id ? !f.open : false }));
  }
}


