import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"






function Faq() {


    return (
        <>
            <div className="p-20 ">
                <div className="text-4xl font-semibold" id="faq">FAQ</div >

                <Accordion type="single" collapsible className="text-xl flex gap-8">
                    <div className=" w-1/2">

                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl">
                                What is the cost of a mobile application?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600" >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab cumque laborum quod ipsum ea nobis adipisci? Amet vel sapiente at!
                            </AccordionContent>
                        </AccordionItem>



                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-xl">
                                Do you provide a guarantee for the mobile application?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum voluptatum ex facilis eos, ea corrupti a neque quos sed ipsa repellendus id, voluptatibus soluta officiis exercitationem cupiditate suscipit obcaecati sint molestiae, eum velit animi! Perspiciatis doloribus numquam iusto alias illum.
                            </AccordionContent>
                        </AccordionItem>

                    </div>
                    <div className="w-1/2">

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-xl">
                                How long will development take?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600">
                                <p className="mb-2">
                                    Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.

                                </p>
                                <p>
                                    Average development time from start to finished application:
                                    <br />
                                    Medium projects up to <span className="font-semibold text-slate-950"> 3 months.</span>
                                    <br />
                                    Large projects about <span className="font-semibold text-slate-950">4-6 months.</span>
                                    <br />

                                    To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-xl">
                            I will not tell my idea, do you guarantee confidentiality?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius porro dolor ipsam? Quam natus neque necessitatibus qui perspiciatis, rem modi quibusdam ducimus ea. Voluptate qui, quibusdam at minima asperiores nostrum porro earum atque nihil nulla rerum explicabo ex consequatur ducimus!
                            </AccordionContent>
                        </AccordionItem>
                    </div>
                </Accordion>
            </div >

        </>
    )
}

export default Faq
