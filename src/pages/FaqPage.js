import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/accordion";

import { useLoaderData } from "react-router-dom";
const FaqPage = () => {
    const faqs = useLoaderData();
    return (
        <section className="py-10">
            <div className="container max-w-4xl">
                <h2 className="mb-8 text-center text-4xl font-bold">Freequently Asked Questions</h2>
                <Accordion allowToggle className="grid gap-4">
                    {faqs.map((faq) => (
                        <AccordionItem key={faq.id} className="overflow-hidden rounded border bg-white transition hover:shadow-md hover:shadow-slate-200">
                            <AccordionButton className="flex items-center justify-between py-3 px-6 text-left text-xl font-semibold transition aria-expanded:bg-cyan-500 aria-expanded:text-white">
                                <div>{faq.question}</div>
                                <AccordionIcon className="!h-8 !w-8" />
                            </AccordionButton>
                            <AccordionPanel className="p-6 text-lg">{faq.answer}</AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FaqPage;
