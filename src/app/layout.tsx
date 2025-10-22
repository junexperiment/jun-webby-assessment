import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Jun’s Webby Assessment',
  description: 'Task Tracker built with Next.js, TypeScript, Zustand, and MUI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
          <Sidebar />
          <main style={{ flex: 1, padding: '32px', overflowY: 'auto', backgroundColor: '#121212', color: 'white' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}