import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-white': '#2A8F6D',
  '--my-black': '#1a1a1a',
};

export const myTheme = buildLegacyTheme({
  // Base theme color
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',
});
