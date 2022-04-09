import type { NextPage } from 'next'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="pb-12 text-center md:pb-16">
              <h1
                className="leading-tighter mb-4 text-6xl font-extrabold tracking-tighter md:text-7xl"
                data-aos="zoom-y-out"
              >
                Write a post on{' '}
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Blogma
                </span>
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-xl"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Share your knowledge with Blogma! Your posts will help others.
                </p>
                <div className="flexjustify-center mt-5">
                  <div className="mt-3">
                    <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 font-medium text-gray-900 hover:text-white focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
                      <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                        Getting started
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
