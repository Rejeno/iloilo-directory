'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function TestSupabase() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function checkConnection() {
      try {
        // Simple check: try to fetch from a (likely or not) table to see if we get a response
        // Even if the table doesn't exist, a 'PGRST116' or similar proves that we 
        // successfully reached the Supabase edge.
        const { error } = await supabase.from('_connection_test').select('*').limit(1);
        
        if (error && (error.code === 'PGRST116' || error.message.includes('Could not find the table'))) {
             // This is a common error if table doesn't exist but connection works
             setStatus('connected');
             setMessage('Successfully connected to Supabase (API reachable, but table doesn\'t exist)');
        } else if (error) {
             setStatus('error');
             setMessage(`Error connecting: ${error.message} (Code: ${error.code})`);
        } else {
             setStatus('connected');
             setMessage('Successfully connected to Supabase!');
        }
      } catch (err: any) {
        setStatus('error');
        setMessage(`Error: ${err.message}`);
      }
    }

    checkConnection();
  }, []);

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      <div className={`p-4 rounded-lg ${
        status === 'loading' ? 'bg-gray-100 text-gray-800' :
        status === 'connected' ? 'bg-green-100 text-green-800' :
        'bg-red-100 text-red-800'
      }`}>
        <p className="font-semibold">Status: {status.toUpperCase()}</p>
        <p className="mt-2">{message}</p>
      </div>
      <div className="mt-8">
        <p className="text-sm text-gray-500">
          URL: <code className="bg-gray-50 px-1">{process.env.NEXT_PUBLIC_SUPABASE_URL}</code>
        </p>
      </div>
    </div>
  );
}
