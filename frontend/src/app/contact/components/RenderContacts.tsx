"use client";
import React from "react";

type Contact = {
  name: string;
  role: string;
  about: string;
  link: string;
  img: string;
};

type contactsProps = { contacts: Contact[] };

const RenderContacts: React.FC<contactsProps> = ({ contacts }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 m-10">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-6 hover:shadow-lg transition"
        >
          <img
            src={contact.img}
            alt={contact.name}
            className="w-64 h-50 object-cover border-3 border-blue-400 rounded-[15]"
          />
          <div className="mt-6">
            <h1 className="text-center text-2xl font-bold text-blue-500">{contact.name}</h1>
            <h3 className="text-center text-lg text-blue-400">{contact.role}</h3>
            <p className="m-3 text-gray-600 text-sm leading-relaxed">{contact.about}</p>
          </div>
          <a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
          >
            Contact {contact.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default RenderContacts;
