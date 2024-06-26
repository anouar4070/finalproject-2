import React, { useState } from 'react';
import style from './Footer.module.css';

export default function Footer() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center bg-gray-600 text-white py-8 px-4">
      Copyright &copy; {new Date().getFullYear()} - ANOUAR
    </div>
  );
}

