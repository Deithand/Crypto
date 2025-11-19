export enum BlockType {
  PARAGRAPH = 'PARAGRAPH',
  HEADING = 'HEADING',
  LIST = 'LIST',
  CALLOUT = 'CALLOUT',
  CODE = 'CODE'
}

export interface ContentBlock {
  type: BlockType;
  content: string | string[];
  variant?: 'info' | 'warning' | 'tip' | 'danger'; // For callouts
  listType?: 'ul' | 'ol'; // For lists
}

export interface Chapter {
  id: string;
  title: string;
  content: ContentBlock[];
}

export interface Section {
  id: string;
  title: string;
  chapters: Chapter[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}