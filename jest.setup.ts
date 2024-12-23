import '@testing-library/jest-dom';

if (typeof window !== 'undefined') {
  if (!window.ResizeObserver) {
    window.ResizeObserver = class ResizeObserver {
      disconnect() {}
      observe() {}
      unobserve() {}
    };
  }
}

process.env.NEXT_PUBLIC_PREFECTURES_API_URL = 'http://test/prefectures';
process.env.NEXT_PUBLIC_POPULATION_API_URL = 'http://test/population';
process.env.NEXT_PUBLIC_API_KEY = 'TEST_KEY';
