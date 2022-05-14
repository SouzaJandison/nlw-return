import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseBottom() {
  return (
    <Popover.Button
      className="absolute top-5 right-4 text-zinc-400 hover:text-zinc-100"
      title="Fecha formulário de feedback"
    >
      <X weight="bold" size={16}></X>
    </Popover.Button>
  );
}
