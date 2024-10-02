"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "¿Qué hacer cuando pierdo mi tarjeta SITU?",
    answer: "Si tu tarjeta está registrada acude al consorcio para adquirir una nueva tarjeta.",
  },
  {
    question: "¿Cuáles son los requisitos para la tarjeta de tarifa media?",
    answer: "Para tercera edad etc.",
  },
  {
    question: "¿Puedo recuperar el saldo de la tarjeta SITU si se rompe o pierde? ",
    answer:
      "Adquiriendo una nueva tarjeta puedes traspasar el saldo de tu tarjeta rota a una nueva.",
  },
  {
    question: "¿Se puede prestar la tarjeta de tarifa media? ",
    answer:
      "No, el uso de la tarjeta de tarifa media es personal y el mal uso llevará a una sanción al usuario así como el bloqueo de la misma",
  },
];
