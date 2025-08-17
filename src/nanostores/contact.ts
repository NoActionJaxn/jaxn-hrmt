import { atom } from "nanostores";

export const $showContact = atom<boolean>(false);

export function toggleContact() {
  $showContact.set(!$showContact.get());
};

export function openContact() {
  $showContact.set(true);
};

export function closeContact() {
  $showContact.set(false);
};
