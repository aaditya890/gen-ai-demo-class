import { CommonModule } from "@angular/common"
import { Component,  OnInit,  OnDestroy } from "@angular/core"

interface FAQ {
  id: number
  question: string
  answer: string
  open: boolean
}

interface Video {
  id: number
  title: any
}

interface CoachStat {
  value: string
  label: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  faqs: FAQ[] = [
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

  videos: any[] = [
    { id: 1, title: "Right Strategies and content - grow like clockwork for a successful business" }
  ]

  coachStats: CoachStat[] = [
    { value: "18", label: "Years of Training and Coaching" },
    { value: "2.3M+", label: "YouTube Subscribers In The Last 7 Years" },
    { value: "600+", label: "Workshops Conducted" },
    { value: "1.9M+", label: "Followers Across Platforms" },
    { value: "700K", label: "Past Customers" },
    { value: "20K+", label: "Live Entrepreneurs Community" },
    { value: "2.8K+", label: "Coaching Clients" },
    { value: "196+", label: "Industries Worked With" },
  ]

  timer = 3600 // 1 hour in seconds
  private timerInterval: any

  ngOnInit() {
    this.startTimer()
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval)
    }
  }

  toggleFaq(id: number) {
    const faq = this.faqs.find((f) => f.id === id)
    if (faq) {
      faq.open = !faq.open
    }
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--
      } else {
        clearInterval(this.timerInterval)
      }
    }, 1000)
  }

  formatTimer(seconds: number) {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return {
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(secs).padStart(2, "0"),
    }
  }
}
