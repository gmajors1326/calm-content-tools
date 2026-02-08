// JSON Output Schema for Langston-aligned server actions
export type JsonOutput<T = any> = {
  status: 'success' | 'partial' | 'error';
  persona: 'langston_l_model';
  version: string;
  confidence: number; // 0.00 - 1.00
  output: T;
  notes: string[];
  warnings: string[];
  errors: string[];
};

export type JsonResponse<T = any> = JsonOutput<T>;
