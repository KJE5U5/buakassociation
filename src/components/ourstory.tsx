
import { motion, useScroll, useTransform } from 'framer-motion'
ps://reactjs.org/link/react-devtools
ourstory.tsx?t=1760367035919:715 Uncaught ReferenceError: ArrowRight is not defined
    at BUAKOdyssey (ourstory.tsx?t=1760367035919:715:57)
ourstory.tsx?t=1760367035919:715 Uncaught ReferenceError: ArrowRight is not defined
    at BUAKOdyssey (ourstory.tsx?t=1760367035919:715:57)

        {/* ⚡ BEFORE/AFTER SPLIT: Cinematic Flip */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="p-8 rounded-2xl bg-red-900/30 border border-red-500/50 backdrop-blur"
          >
            <h3 className="text-3xl font-bold text-red-400 mb-4">🔥 Crisis</h3>
            <ul className="space-y-3 text-red-200">
              <li>99% stuck with firewood</li>
              <li>67K hectares forest lost</li>
              <li>$2/day = no clean energy</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="p-8 rounded-2xl bg-green-900/30 border border-green-500/50 backdrop-blur"
          >
            <h3 className="text-3xl font-bold text-green-400 mb-4">🌱 Revolution</h3>
            <ul className="space-y-3 text-green-200">
              <li>Gas in 15 days, no cash</li>
              <li>Slurry = new income</li>
              <li>500K kg firewood saved</li>
            </ul>
          </motion.div>
        </div>

        {/* 🃏 STORY CHAPTERS: 3D Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            { title: 'The Spark', desc: 'Sarah & James dare to dream.', icon: '🔥', delay: 0 },
            { title: 'The Flip', desc: 'Offtake model hits 95% repayment.', icon: '🔄', delay: 0.2 },
            { title: 'The Glory', desc: 'Ashden Award for refugee innovation.', icon: '🏆', delay: 0.4 },
            { title: 'The Future', desc: '$25K to transform 227 families.', icon: '🚀', delay: 0.6 }
          ].map((card, i) => (
            <StoryCard key={i} {...card} />
          ))}
        </div>

        {/* 📊 HOLOGRAPHIC STATS */}
        <div className="grid md:grid-cols-5 gap-6 mb-20">
          {[
            { num: 73, label: 'Digesters', icon: <Zap />, delay: 0 },
            { num: '87.6M', label: 'UGX Revenue', icon: <DollarSign />, delay: 0.1 },
            { num: '500K', label: 'KG Firewood', icon: <Sprout />, delay: 0.2 },
            { num: '95%', label: 'Repayment', icon: <ArrowRight />, delay: 0.3 },
            { num: '26%', label: 'Profit', icon: <Users />, delay: 0.4 }
          ].map((stat, i) => (
            <StatCube key={i} {...stat} />
          ))}
        </div>

        {/* 🕐 ORBIT TIMELINE: Drag to Explore */}
        <div className="relative mb-20">
          <h3 className="text-4xl font-bold text-center mb-8">Our Orbit</h3>
          <div className="relative flex justify-center items-center">
            <motion.div
              className="w-96 h-96 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  className="absolute w-24 h-24 flex items-center justify-center"
                  style={{ rotate: -90 - (i * 90), originX: '200px' }}
                  animate={{ scale: timelineIndex === i ? 1.2 : 1 }}
                  onClick={() => setTimelineIndex(i)}
                >
                  <div className="bg-gray-900/80 p-4 rounded-full text-center border border-green-500/50">
                    {m.icon}
                    <p className="text-sm text-green-300">{m.year}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center max-w-md">
              <h4 className="text-2xl font-bold text-green-400 mb-2">{milestones[timelineIndex].year}</h4>
              <p className="text-gray-300">{milestones[timelineIndex].event}</p>
            </div>
          </div>
        </div>

        {/* 🎯 CTA: Pulsing Funding Goal */}
        <motion.div
          className="text-center p-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-4xl font-bold mb-4">Fuel the Revolution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={fundingData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
              >
                {fundingData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="text-xl mb-6">$5K raised of $25K goal</p>
          <motion.button
            className="bg-green-400 text-black px-8 py-4 rounded-full font-bold text-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Join Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
