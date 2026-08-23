import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vaishnavi Sunil Pophale — Software Engineer & Data Scientist',
  description: 'Portfolio of Vaishnavi Sunil Pophale, MCDS student at Carnegie Mellon University, School of Computer Science and software engineer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
