import Fade from 'react-reveal/Fade';
import Footer from '../Footer/footer'
import './about.css'
import mp from '../images/banner1234.jpg'
import { useState } from 'react'
import { Dialog,Popover } from '@headlessui/react'
import logo from '../images/add9d877-711d-48f7-8804-63865615c35e-removebg-preview.png'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'





export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
                className="h-18 w-20"
                src={logo}
                alt=""
              />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          

          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About Us
          </a>
          <a href="/service" className="text-sm font-semibold leading-6 text-gray-900">
            Services
          </a>
          <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
            Contact Us
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            We Are What You Need<span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-18 w-20"
                src={logo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href="/service"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
              <div className="py-6">
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                    We Are What You Need
                </a> */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <Fade left>
<div id='had'>
<p className="text-base font-semibold leading-7 text-indigo-600">Ndiulo Resources</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-6xl">ABOUT US</h1>
  <p className="mt-6 text-lg leading-8 text-gray-700" id='swift'>
  Ndiulo Resources Nigeria is in the tailoring/sewing material business to provide customers with quality material that will 
         give value for their money. Intrestingly, value for money is based not only on the minimum purchase price (economy) but
         also on the maximum quality of the material purchased. Though, new in the tailoring material business but Ndiulo Resources
         Nigeria is empowered by dynamism, excellent customer oriented services, and innovation for quality, making Ndiulo is a 
         brand within our target population. Besides being one of the basic needs that provides cover for the body, clothes are also used for special 
         occasions, ceremonies, fashion shows, and wearing clothes made of good quality material could be fulfilling and satisfying
  </p>
  <img src={mp}/>
</div>
      <Footer/>
      </Fade>
    </header>
  )
}
