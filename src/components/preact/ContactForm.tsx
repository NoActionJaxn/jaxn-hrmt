import { useStore } from '@nanostores/preact';
import { $showContact, closeContact } from '../../nanostores/contact';
import { useRef } from 'preact/hooks';
import useOutsideClick from './hooks/useOutsideClick';

export default function ContactForm() {
  const isOpen = useStore($showContact);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, closeContact);

  if (!isOpen) return null;

  return (
    // Backdrop
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Modal content */}
      <div
        ref={ref}
        class="border-2 border-gruvbox-bg2 rounded-md shadow-lg p-6 w-[32rem] max-w-full bg-gruvbox-bg2"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-gnuolane uppercase">Business Inquiries</h2>
          <button
            type="button"
            onClick={closeContact}
            class="cursor-pointer size-6 text-sm rounded-sm text-gruvbox-fg1"
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <form class="space-y-4" action="#" method="post">
          <div class="space-y-2">
            <label htmlFor="firstName" class="block text-sm font-medium text-gruvbox-fg0">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              class="h-8.5 px-2 w-full font-proximanova rounded-sm border shadow-sm outline-none 
                     focus:ring-4 border-gruvbox-bg5 bg-gruvbox-bg2 ring-gruvbox-blue 
                     placeholder:text-gruvbox-bg5 text-gruvbox-fg2"
              required
            />
          </div>

          <div class="space-y-2">
            <label htmlFor="lastName" class="block text-sm font-medium text-gruvbox-fg0">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              class="h-8.5 px-2 w-full font-proximanova rounded-sm border shadow-sm outline-none 
                     focus:ring-4 border-gruvbox-bg5 bg-gruvbox-bg2 ring-gruvbox-blue 
                     placeholder:text-gruvbox-bg5 text-gruvbox-fg2"
              required
            />
          </div>

          <div class="space-y-2">
            <label htmlFor="email" class="block text-sm font-medium text-gruvbox-fg0">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="h-8.5 px-2 w-full font-proximanova rounded-sm border shadow-sm outline-none 
                     focus:ring-4 border-gruvbox-bg5 bg-gruvbox-bg2 ring-gruvbox-blue 
                     placeholder:text-gruvbox-bg5 text-gruvbox-fg2"
              required
            />
          </div>

          <div class="space-y-2">
            <label htmlFor="message" class="block text-sm font-medium text-gruvbox-fg0">
              Content
            </label>
            <textarea
              name="message"
              id="message"
              class="p-2 w-full font-proximanova rounded-sm border shadow-sm outline-none 
                     focus:ring-4 border-gruvbox-bg5 bg-gruvbox-bg2 ring-gruvbox-blue 
                     placeholder:text-gruvbox-bg5 text-gruvbox-fg2"
              rows={8}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              class="cursor-pointer border-2 rounded-sm pl-3 pr-2.5 h-10 w-full font-bold text-sm 
                     text-gruvbox-bg0 bg-gruvbox-blue-alt hover:bg-gruvbox-blue border-gruvbox-blue"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
