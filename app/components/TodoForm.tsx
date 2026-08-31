"use client";

import { useState } from 'react';
import { Input } from './cards/ui/input';
import { Button } from './cards/ui/button';

type TodoFormProps = {
  onAddTodo: (title: string) => void;
};

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [title, setTitle] = useState('');
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validasi sederhana: jangan izinkan input kosong atau hanya spasi
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    // Kirim data ke komponen induk
    onAddTodo(trimmedTitle);

    // Reset input form
    setTitle('');
  };

  return (
    <div className="mb-6 bg-white p-4 rounded-xl border border-gray-70">
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tambah tugas baru..."
        className="bg-white flex-1" //aku beri flex-1 agar form input mengisi ruang yang tersisa
        variantSize="md"
      />
      <Button
        type="submit"
        disabled={!title.trim()}
        variant="default"
        size="md"
        >
        Tambah
    </Button>
    </form>
    </div>
  );
}