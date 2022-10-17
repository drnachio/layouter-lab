import { Popover, Transition } from '@headlessui/react';
import { NextPage } from 'next';
import { Fragment, MouseEventHandler } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/future/image';
import { CheckIcon } from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Gallery', href: '#' },
  { name: 'Documentation', href: '#' },
  { name: 'Back Office', href: 'https://layouter-lab-back.up.railway.app/' },
];

const features = [
  {
    name: 'Invite team members',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  {
    name: 'List view',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  {
    name: 'Keyboard shortcuts',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  {
    name: 'Calendars',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  {
    name: 'Notifications',
    description: 'Find what you need with advanced filters, bulk actions, and quick views.',
  },
  {
    name: 'Boards',
    description: 'Find what you need with advanced filters, bulk actions, and quick views.',
  },
  {
    name: 'Reporting',
    description: 'Find what you need with advanced filters, bulk actions, and quick views.',
  },
  {
    name: 'Mobile app',
    description: 'Find what you need with advanced filters, bulk actions, and quick views.',
  },
];

const nav = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

const Index: NextPage = () => {
  const { data: sessionData } = useSession();

  const signInHandler: MouseEventHandler<HTMLAnchorElement> = (ev) => {
    ev.preventDefault();
    signIn('discord');
  };
  const signOutHandler: MouseEventHandler<HTMLAnchorElement> = (ev) => {
    ev.preventDefault();
    signOut();
  };
  return (
    <>
      <Head>
        <title>Layout Labs</title>
      </Head>
      <div className="relative overflow-hidden bg-white font-sans">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <Popover>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                    <div className="flex w-full items-center justify-between md:w-auto">
                      <a href="#">
                        <span className="sr-only">Layouter Labs</span>
                        <Image
                          alt="Layouter"
                          className="h-8 w-auto sm:h-10"
                          src="/isotype.png"
                          width={80}
                          height={80}
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                    {sessionData ? (
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={signOutHandler}
                      >
                        Log out
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={signInHandler}
                      >
                        Log in
                      </a>
                    )}
                  </div>
                </nav>
              </div>
              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                        <Image
                          className="h-8 w-auto"
                          src="/portatil.jpg"
                          alt="Student with Laptop"
                          width={930}
                          height={620}
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="space-y-1 px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                    >
                      Log in
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  The layout system that <span className="text-indigo-600">Enrich</span> your
                  educational <span className="text-indigo-600">Content</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  A system designed to multiply the educational and visual value of all your
                  contents
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    {sessionData ? (
                      <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                      >
                        Demo gallery
                      </a>
                    ) : (
                      <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg">
                        Demo gallery
                      </a>
                    )}
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    {sessionData ? (
                      <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-3 text-base font-medium text-gray-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                        onClick={signOutHandler}
                      >
                        Log out
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                        onClick={signInHandler}
                      >
                        Sign in
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full"
            src="/portatil.jpg"
            alt="Girl with Laptop"
            width={930}
            height={620}
          />
        </div>
      </div>
      <div className="bg-gray-800 font-sans">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by content creators all around the Planet
            </h2>
            <p className="mt-3 text-xl text-indigo-200 sm:mt-4 md:mx-10">
              A solution designed from scratch so you do not have to worry about anything but create the best content for your students and general public
            </p>
          </div>
          <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                Planet Scale
              </dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">100%</dd>
            </div>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                Availability Time
              </dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">24/7</dd>
            </div>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                Contents Created
              </dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">100k+</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="bg-white font-sans">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
          <div>
            <h2 className="text-lg font-semibold text-indigo-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              All-in-one platform
            </p>
            <p className="mt-4 text-lg text-gray-500">
              We take care of the complete life cycle necessary for your knowledge to be learned in
              the most efficient way
            </p>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl py-12 px-4 font-sans sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-white">Solutions</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {nav.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-white">Support</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {nav.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-white">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {nav.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-white">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {nav.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 xl:mt-0">
              <h3 className="text-base font-medium text-white">Subscribe to our newsletter</h3>
              <p className="mt-4 text-base text-gray-300">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
              &copy; 2020. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
