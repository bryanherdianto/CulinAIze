'use client';

import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

const supabaseUrl = 'https://xovecwyuxzopohszmtfx.supabase.co'
const supabaseAnonKey = 'sb_publishable_ESraJ_8BhDs7zFoJyION0Q_IKc3J0QG'
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Page() {
  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    if (error) {
      console.error('GitHub sign-in error:', error.message);
    }
  };

  return (
    <div className="flex h-dvh w-screen items-start pt-12 md:pt-0 md:items-center justify-center bg-background">
      <div className="w-full max-w-md overflow-hidden rounded-2xl flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h3 className="text-xl font-semibold dark:text-gray-50">Login</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Use your GitHub account to login
          </p>
          <button
            onClick={signInWithGitHub}
            className="mt-4 rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
