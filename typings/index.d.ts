/*Make sure to have text-moderate installed: npm install text-moderate
If u wanna use this then put this in the heading of ur file: import { analyzeSentiment } from 'text-moderate' 
here is example of how to use: const result = analyzeSentiment('Cats are amazing.');
the constant result will be an object that contains the score, comparative, calculation, etc.

Comparative: if it's zero then text is netural sentiment, greater 0.5 is positive, and less than -0.5 is negative*/
declare module 'text-moderate'{
    export declare function analyzeSentiment(text: string): {
        score: number;
        comparative: number;
        calculation: Array<{ [key: string]: number }>;
        tokens: string[];
        words: string[];
        positive: string[];
        negative: string[];
      };
}

