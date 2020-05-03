import Head from 'next/head'; 


export default function Home() {
  return (
    <div class="antialiased">
      <Head>
        <title>SoCal</title>
        <link rel="icon" href="/favicon.ico" />
        
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main>
        <h1 class="text-start m-10 text-4xl font-semibold">
          <h href="https://nextjs.org" class="text-blue-600 underline font-extrabold"> SoCal</h>
          <p class="font-thin">
          Get started by editing linking your socials
          </p>
        </h1>


  <div class="max-w-md mx-auto shadow-lg bg-socarl-300 rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-5">
  <img class="inline-block md:mx-auto sm:h-24 sm:w-24  md:flex rounded-full object-cover border-black border-4  border-solid" src="yellow.jpg" alt="Woman's Face"/>
 <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
      <p class="text-xl leading-tight">Erin Lindford</p>
      <p class="text-sm leading-tight text-gray-600">Customer Support Specialist</p>
      <div class="mt-4">
      Message </div>
    </div>
  </div>
</div>


<div class="bg-red-500 sm:bg-green-500 w-2 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">lkmlkmkm</div>

        

      </main>



      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by  
          return <img src="/vercel.svg" alt="my image" />
        </a>
      </footer>

 
    </div>
  )
}
