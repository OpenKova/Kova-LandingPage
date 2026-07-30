import { describe, expect, test } from 'bun:test';
import { sanitizeUrl } from '../src/lib/sanitize-url';

describe('sanitizeUrl', () => {
  test('allows safe URLs', () => {
    expect(sanitizeUrl('https://x.com/kovalabs')).toBe('https://x.com/kovalabs');
    expect(sanitizeUrl('https://kova-agent.ai')).toBe('https://kova-agent.ai');
    expect(sanitizeUrl('mailto:security@kova-agent.ai')).toBe('mailto:security@kova-agent.ai');
  });

  test('rejects javascript URLs', () => {
    expect(sanitizeUrl('javascript:alert(1)')).toBe('#');
  });

  test('rejects data URLs', () => {
    expect(sanitizeUrl('data:text/html,<script>alert(1)</script>')).toBe('#');
  });
});
