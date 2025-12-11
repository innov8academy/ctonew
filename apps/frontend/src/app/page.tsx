'use client';

import { useEffect, useState } from 'react';
import { ApiResponse } from '@monorepo/common';
import styles from './page.module.css';

export default function Home() {
  const [apiStatus, setApiStatus] = useState<string>('Checking...');

  useEffect(() => {
    const checkApi = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
        const response = await fetch(`${apiUrl}/health`);
        const data: ApiResponse = await response.json();
        
        if (data.success) {
          setApiStatus('✅ API is connected and healthy');
        } else {
          setApiStatus('❌ API returned an error');
        }
      } catch (error) {
        setApiStatus('❌ Cannot connect to API');
        console.error('API connection error:', error);
      }
    };

    checkApi();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to the Monorepo</h1>
        <p className={styles.description}>
          Next.js 14 + Express + TypeScript
        </p>
        <div className={styles.status}>
          <h2>API Status:</h2>
          <p>{apiStatus}</p>
        </div>
        <div className={styles.links}>
          <a
            href="/api/hello"
            className={styles.link}
          >
            API Route Example →
          </a>
        </div>
      </div>
    </main>
  );
}
