"use client";
import React from 'react';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className="form-control w-full border rounded-md p-2" {...props} />;
}
