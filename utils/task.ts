export function genTaskId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
} 