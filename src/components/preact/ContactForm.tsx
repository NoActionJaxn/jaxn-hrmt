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
    <div ref={ref} class="fixed z-50 right-0 bottom-28 p-4 w-sm bg-gruvbox-bg2">
      <div className="flex justify-between items-center">
        <div>
          <h2 class="text-2xl font-gnuolane uppercase">Business Inquiries</h2>
        </div>

        <div>
          <button 
            type="button" 
            onClick={closeContact} 
            className="cursor-pointer size-6 text-sm rounded-sm text-gruvbox-bg0 bg-gruvbox-fg0 hover:bg-gruvbox-fg2"
          >
            X
          </button>
        </div>
      </div>
      
      <form class="space-y-4 mt-4" action="#" method="post">
        <div>
          <label for="firstName" class="block text-sm font-medium text-gruvbox-fg0">
            First Name
          </label>
          <input 
            type="text" 
            name="firstName" 
            id="firstName" 
            class="mt-1 p-2 block w-full border border-gruvbox-fg0 shadow-sm focus:ring-gruvbox-blue focus:border-gruvbox-blue sm:text-sm bg-gruvbox-bg0 text-gruvbox-fg0" 
            required 
          />
        </div>

        <div>
          <label for="lastName" class="block text-sm font-medium text-gruvbox-fg0">
            Last Name
          </label>
          <input 
            type="text" 
            name="lastName" 
            id="lastName" 
            class="mt-1 p-2 block w-full border border-gruvbox-fg0 shadow-sm focus:ring-gruvbox-blue focus:border-gruvbox-blue sm:text-sm bg-gruvbox-bg0 text-gruvbox-fg0" 
            required 
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gruvbox-fg0">
            Email Address
          </label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            class="mt-1 p-2 block w-full border border-gruvbox-fg0 shadow-sm focus:ring-gruvbox-blue focus:border-gruvbox-blue sm:text-sm bg-gruvbox-bg0 text-gruvbox-fg0" 
            required 
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gruvbox-fg0">Content</label>
          <textarea 
            name="message" 
            id="message"
            class="mt-1 p-2 block w-full border border-gruvbox-fg0 shadow-sm focus:ring-gruvbox-blue focus:border-gruvbox-blue sm:text-sm bg-gruvbox-bg0 text-gruvbox-fg0"
            rows={8}
            required 
          />
        </div>

        <div>
          <button type="submit" class="inline-flex justify-center py-2 px-4 w-full border border-transparent shadow-sm text-base font-black uppercase text-gruvbox-bg0 bg-gruvbox-blue hover:bg-gruvbox-blue-alt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gruvbox-blue">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
