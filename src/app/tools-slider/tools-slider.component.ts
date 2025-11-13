import { Component } from '@angular/core';

@Component({
  selector: 'app-tools-slider',
  standalone: true,
  imports: [],
  templateUrl: './tools-slider.component.html',
  styleUrl: './tools-slider.component.scss'
})
export class ToolsSliderComponent {
  icons = [
    { src: 'assets/ai/openai.png', name: 'Sora' },
    { src: 'assets/ai/grok.png', name: 'Grok' },
    { src: 'assets/ai/gemini-color.svg', name: 'Gemini' },
    { src: 'assets/ai/midjourney.png', name: 'Midjourney' },
    { src: 'assets/ai/perplexity-color.svg', name: 'Perplexity' },
    { src: 'assets/ai/n8n-color.svg', name: 'n8n' },
    { src: 'assets/ai/notion.png', name: 'Notion' },
    { src: 'assets/ai/deepseek-color.svg', name: 'DeepSeek' },
  ];
} 
