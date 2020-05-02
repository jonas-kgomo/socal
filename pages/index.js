import Head from 'next/head'; 


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SoCal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 class="text-center m-10 text-4xl font-semibold">
          Welcome to  <h href="https://nextjs.org" class="text-blue-600 underline font-extrabold"> SoCal</h>
        </h1>

        <p className="description">
          Get started by editing linking your socials
        </p>

        <div class="md:flex">
  <div class="md:flex-shrink-0">
    <img class="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase"/>
  </div>
  <div class="mt-4 md:mt-0 md:ml-6">
    <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
    <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
    <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
  </div>
</div>


        <div className="p-4 text-4xl shadow rounded bg-white">
          <h1 className="text-purple-500 leading-normal">Next.js</h1>
          <p className="text-gray-500">with Tailwind CSS</p>
        </div>
        
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

 
    </div>
  )
}
