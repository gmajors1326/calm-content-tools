"use client";
import React from 'react';

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="form-control w-full border rounded-md p-2" {...props} />;
}
