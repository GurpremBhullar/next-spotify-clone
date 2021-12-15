import 'tailwindcss/tailwind.css'
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps} })

{
  return (
    <SessionProvider session={session}>         {/* higher end component */} 

  <Component {...pageProps} />

  </SessionProvider>
  
  );
}

export default MyApp;
