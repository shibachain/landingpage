import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid'
import Footer from '../components/footer'
import Hero from '../components/hero'
const stats = [
  { label: 'TPS', value: '4,000' },
  { label: 'Blocktime', value: '4 Secs' },
  { label: 'Node', value: '7' },
  { label: 'Transaction Cost', value: '$0.000047' },
]
const logos = [
  { name: 'Binance', url: '/binance.svg' },
  { name: 'Coinbase', url: '/coinbase.svg' },
  { name: 'Gate.IO', url: '/gate.svg' },
  { name: 'Huobi', url: '/huobi.svg' },
  { name: 'KuCoin', url: '/kucoin.svg' },
  { name: 'OKEx', url: '/okex.svg' },
]

export default function Example() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        
        <Hero />

        {/* Testimonial/stats section */}
        <div className="relative mt-20">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
              <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                {/* Testimonial card*/}
                <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://unsplash.com/photos/ZQ_0jk66-1E/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8c2hpYmF8fDB8fHx8MTYzNTg4ODkzNQ&force=true&w=1920"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-rose-500 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90" />
                  <div className="relative px-8">

                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-rose-400"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                          DeFi boom is a very near equivalent of an apocalyptic event for the traditional financial institutions.
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-rose-200">Mohith Agadi</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              {/* Content area */}
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                  Fast & Low cost public blockchain.
                </h2>
                <div className="mt-6 text-gray-500 space-y-6">
                  <p className="text-lg">
                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                    tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus
                    morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.
                  </p>
                </div>
              </div>

              {/* Stats section */}
              <div className="mt-10">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                      <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                      <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-10">
                  <a href="#" className="text-base font-medium text-rose-500">
                    Learn more about how we're changing the world&nbsp&rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud section */}
        <div className="mt-32">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Listed on world-renowned exhange
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                  Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                  tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus
                  morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.
                </p>
                <div className="mt-6">
                  <a href="#" className="text-base font-medium text-rose-500">
                    Meet our investors and advisors&nbsp&rarr;
                  </a>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                {logos.map((logo) => (
                  <div key={logo.name} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img className="max-h-12" src={logo.url} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative mt-24 sm:mt-32 sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
            <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-rose-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-rose-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-rose-600 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Get
                  </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-rose-100">
                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                    tristique pellentesque.
                  </p>
                </div>
                <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  )
}
