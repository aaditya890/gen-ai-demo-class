import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


interface BlogItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
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
 // Countdown values
  daysLeft = 0;
  hoursLeft = 0;
  minutesLeft = 0;
  secondsLeft = 0;

  // Seats (start at 21, reduce by 3 per calendar day from a start date)
  seatsAvailable = 21;

  // Target start time for the session (IST)
  private targetDate = new Date('2025-11-15T09:00:00'); // 15 Nov 2025, 9:00 AM

  private timerId!: any;

  // ===== Content =====
  modules: ModuleItem[] = [
    { title: 'Digital Marketing Foundations', points: 'Funnels, customer journey, positioning & offers.' },
    { title: 'SEO Basics', points: 'Keyword research, on-page essentials, local SEO quick wins.' },
    { title: 'Social Media Marketing', points: 'Instagram + Facebook content strategy & organic growth.' },
    { title: 'Paid Ads (Meta + Google)', points: 'Ad structure, creatives, budgets & conversion setup.' },
    { title: 'Analytics & Tracking', points: 'GA4, pixels/tags, UTM, reading reports & iterating.' },
    { title: 'Landing Page & Copy', points: 'Simple page setup, hooks, CTAs, persuasion basics.' },
    { title: 'Tools & Automation', points: 'Schedulers, forms, WhatsApp flows, simple CRMs.' },
    { title: 'Portfolio & Case Study', points: 'Document a campaign, build mini-portfolio to pitch.' }
  ];

  faqs: FAQItem[] = [
    { id: 1, question: 'Who is this for?', answer: 'Students, business owners, and beginners who want practical digital marketing skills.', open: false },
    { id: 2, question: 'Is it online or offline?', answer: 'The listed session is online. For offline batches at Bilaspur campus, contact the number given.', open: false },
    { id: 3, question: 'Do I need prior experience?', answer: 'No. Basic computer & internet skills are enough; we start from fundamentals.', open: false },
    { id: 4, question: 'Will I get recordings?', answer: 'Yes, sessions are recorded and shared with registered participants.', open: false },
    { id: 5, question: 'Do you provide certificate?', answer: 'Yes, a certificate of completion is provided after finishing the workshop.', open: false },
    { id: 6, question: 'How do I practice?', answer: 'You’ll get guided tasks and mini-projects to implement along with the trainer.', open: false },
    { id: 7, question: 'What tools are used?', answer: 'Google/Meta Ads, GA4, Meta Business Suite, basic page builders and tracking tools.', open: false },
    { id: 8, question: 'Where is the institute?', answer: 'FF-03, G.S. Plaza, Telipara, Bilaspur, Chhattisgarh 495001. Phone: +91 96444 96960.', open: false }
  ];

  // ===== Lifecycle =====
  ngOnInit(): void {
    this.tick();
    this.timerId = setInterval(() => this.tick(), 1000);
    this.updateSeats();
  }

  ngOnDestroy(): void {
    if (this.timerId) clearInterval(this.timerId);
  }

  // ===== Countdown =====
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

  // ===== Seats logic =====
  private updateSeats(): void {
    const startDate = new Date('2025-11-10T00:00:00'); // campaign start
    const today = new Date();

    const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()).getTime();
    const curr = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
    const daysPassed = Math.max(Math.floor((curr - start) / (1000 * 60 * 60 * 24)), 0);

    this.seatsAvailable = Math.max(21 - daysPassed * 3, 0);
  }

  // ===== Actions =====
  navigateToRegisterPage(): void {
    // Redirect to your form / landing:
    window.location.href = 'https://forms.gle/ZmTCG49KAFLBuBx17';
  }

  toggleFaq(id: number): void {
    this.faqs = this.faqs.map(f => ({ ...f, open: f.id === id ? !f.open : false }));
  }
}


