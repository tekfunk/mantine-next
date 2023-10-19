'use client'
import { createTheme, MantineColorsTuple, rem} from '@mantine/core';

const metal: MantineColorsTuple = [
    '#eef4ff',
    '#e2e6ee',
    '#c6cbd5',
    '#a7aebc',
    '#8e95a7',
    '#7d869a',
    '#747e95',
    '#616c82',
    '#556076',
    '#46536a'
  ];  

const purple: MantineColorsTuple = [
  '#f3f3ff',
  '#e6e5ee',
  '#cbc8d4',
  '#aea9ba',
  '#958fa4',
  '#867f97',
  '#7e7692',
  '#6c657f',
  '#605973',
  '#544c67'
];

const brown: MantineColorsTuple = [
  '#eef3ff',
  '#dce4f5',
  '#b9c7e2',
  '#94a8d0',
  '#748dc1',
  '#5f7cb8',
  '#5474b4',
  '#44639f',
  '#39588f',
  '#2d4b81'
];

const paper: MantineColorsTuple = [
  'rgba(246, 244, 244, .75)',
  '#e7e7e7',
  '#cdcdcd',
  '#b1b1b1',
  '#999999',
  '#8d8a89',
  '#878280',
  '#75706d',
  '#6a6360',
  '#5f544f'
];

const theme = createTheme({
  colors: {
    metal,
    purple,
    brown,
    paper
  },
  primaryColor: 'metal',
  fontFamily: 'var(--font-dinpro)',
  fontFamilyMonospace: 'var(--font-mononoki)',
  headings: {
    fontWeight: '500',
    fontFamily: 'var(--font-dinpro)',
    sizes: {
      h1: { fontWeight: '700', fontSize: rem(48), lineHeight: '1.4' },
      h2: { fontWeight: '600', fontSize: rem(36), lineHeight: '1.5' },
      h6: { fontWeight: '600' },
    },
  },
  breakpoints: {
    xs: '361px',
    sm: '577px',
    md: '992px',
    lg: '1281px',
    xl: '1921px',
  },
});

export default theme