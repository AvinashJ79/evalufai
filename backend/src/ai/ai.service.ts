import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class AiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async parseResume(text: string) {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are an AI resume parser. Extract skills, experience, and education from the following text into a JSON format.',
        },
        { role: 'user', content: text },
      ],
      response_format: { type: 'json_object' },
    });
    const content = response.choices[0].message.content || '{}';
    return JSON.parse(content);
  }

  async scoreSubmission(questions: any, answers: any) {
    if (!this.openai) {
      return {
        score: 85,
        feedback: 'Great problem-solving approach. The code is clean and efficient, though edge cases could be handled better.',
      };
    }
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'Grade the candidate answers based on the questions provided. Provide a score out of 100 and a brief feedback.',
        },
        { role: 'user', content: JSON.stringify({ questions, answers }) },
      ],
      response_format: { type: 'json_object' },
    });
    const content = response.choices[0].message.content || '{}';
    return JSON.parse(content);
  }

  async evaluateInterview(transcript: string) {
    if (!this.openai) {
      return {
        sentiment: 'POSITIVE',
        keywords: ['System Design', 'Scalability', 'Security'],
        confidenceScore: 0.92,
      };
    }
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'Analyze the following interview transcript. Provide sentiment (POSITIVE/NEUTRAL/NEGATIVE), key technical keywords mentioned, and a confidence score.',
        },
        { role: 'user', content: transcript },
      ],
      response_format: { type: 'json_object' },
    });
    const content = response.choices[0].message.content || '{}';
    return JSON.parse(content);
  }
}
