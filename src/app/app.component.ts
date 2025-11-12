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
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   // countdown pieces
  daysLeft = 0;
  hoursLeft = 0;
  minutesLeft = 0;
  secondsLeft = 0;

  // seats
  seatsAvailable = 21;

  // set your deadline here (IST). Use local ISO to avoid TZ surprises.
  private targetDate = new Date('2025-11-22T00:00:00');

  private timerId!: any;

  ngOnInit(): void {
    this.tick(); // initial render
    this.timerId = setInterval(() => this.tick(), 1000); // live countdown
    this.updateSeats();
  }

  ngOnDestroy(): void {
    if (this.timerId) clearInterval(this.timerId);
  }

  private tick(): void {
    const now = new Date().getTime();
    let ms = this.targetDate.getTime() - now;

    if (ms <= 0) {
      this.daysLeft = 0; this.hoursLeft = 0; this.minutesLeft = 0; this.secondsLeft = 0;
      if (this.timerId) clearInterval(this.timerId);
      return;
    }

    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;

    this.daysLeft = Math.floor(ms / day);
    ms %= day;

    this.hoursLeft = Math.floor(ms / hour);
    ms %= hour;

    this.minutesLeft = Math.floor(ms / minute);
    ms %= minute;

    this.secondsLeft = Math.floor(ms / 1000);
  }

  private updateSeats(): void {
    // start from a campaign date; 3 seats reduce per day
    const startDate = new Date('2025-11-10T00:00:00');
    const today = new Date();
    // difference in *calendar days* (truncate time)
    const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()).getTime();
    const curr = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
    const daysPassed = Math.max(Math.floor((curr - start) / (1000 * 60 * 60 * 24)), 0);

    this.seatsAvailable = Math.max(21 - daysPassed * 3, 0);
  }

  navigateToRegisterPage(): void {
    window.location.href = 'https://forms.gle/ZmTCG49KAFLBuBx17';
  }

    faqs: any[] = [
    {
      id: 1,
      question: "How To Get The Info To Determine Program?",
      answer: "You will receive detailed information about the program benefits and structure during the workshop.",
      open: false,
    },
    {
      id: 2,
      question: "How To Get The Bonus Items?",
      answer: "Bonus items are automatically included when you register before the timer ends.",
      open: false,
    },
    {
      id: 3,
      question: "Why I Have Program Call 799?",
      answer: "The special pricing of 799 is only available for a limited time as per the countdown timer.",
      open: false,
    },
    {
      id: 4,
      question: "Will I Get Recording Of The Program?",
      answer: "Yes, all registered participants receive a recording of the workshop.",
      open: false,
    },
    {
      id: 5,
      question: "Is There Certification After The Workshop?",
      answer: "Certificate of completion is provided to all participants who attend the full workshop.",
      open: false,
    },
    {
      id: 6,
      question: "Who Is The Mentor For This?",
      answer: "Rajiv Talreja, India's leading MSME Business Coach, will be conducting the workshop.",
      open: false,
    },
    {
      id: 7,
      question: "Is This Suitable Only To Adults?",
      answer: "This workshop is designed for business owners and entrepreneurs of all experience levels.",
      open: false,
    },
    {
      id: 8,
      question: "Can I Attend With Laptop Or Do I Need A Desktop?",
      answer: "You can attend with either a laptop or desktop - any device with internet connection works.",
      open: false,
    },
    {
      id: 9,
      question: "What Do I Need To Have Ready During The Workshop?",
      answer: "Have pen and paper ready to take notes, and a stable internet connection.",
      open: false,
    },
    {
      id: 10,
      question: "Is It a Live Webinar?",
      answer: "Yes, this is a live 4-hour interactive online workshop with Q&A sessions.",
      open: false,
    },
  ]
  toggleFaq(id: number) {
  this.faqs = this.faqs.map(faq => ({

    ...faq,

    open: faq.id === id ? !faq.open : false

  }));
}
}


