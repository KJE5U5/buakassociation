import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function RecognitionSection() {
    const recognitions = [
        {
            title: "Ashden Climate Innovation Award 2024",
            logo: "/img_5.png",
            alt: "Ashden Climate Innovation Award",
            description: "First refugee-led biogas cooperative in East Africa",
        },
        {
            title: "UNHCR Innovation Feature",
            logo: "/img_7.png",
            alt: "UNHCR Logo",
            description: "Featured among top social innovations supporting sustainability",
        },
        {
            title: "Daily Monitor",
            logo: "/img_13.png",
            alt: "Daily Monitor Logo",
            description: "Spotlighted as one of Uganda’s impactful green initiatives",
        },
        {
            title: "New Vision",
            logo: "/img_14.svg",
            alt: "New Vision Logo",
            description: "Recognized for innovation in community energy solutions",
        },
        {
            title: "Africa Climate Week",
            logo: "/img_15.png",
            alt: "Africa Climate Week Logo",
            description: "Speaking engagement highlighting sustainable finance for refugees",
        },
        {
            title: "Impact Investing Forum",
            logo: "/img_16.png",
            alt: "Impact Investing Forum Logo",
            description: "Panel speaker on Africa’s renewable energy future",
        },
    ];

    return (
        <section className="relative py-24 bg-primary text-white overflow-hidden">
            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Award className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Recognition & Awards</h2>
                    <p className="text-lg max-w-2xl mx-auto text-white/80 mb-12">
                        Our impact has been recognized globally by leading institutions and media outlets.
                    </p>
                </motion.div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {recognitions.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/20 transition-all shadow-lg flex flex-col items-center"
                        >
                            <img
                                src={item.logo}
                                alt={item.alt}
                                className="h-16 object-contain mb-4 grayscale hover:grayscale-0 transition-all"
                            />
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-white/70 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
