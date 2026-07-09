import { motion } from "framer-motion";
import {
  FaChartLine,
  FaUsers,
  FaRobot,
  FaBell,
} from "react-icons/fa";

export const DashboardShow = () => {
  return (
    <section 
    id="dashboard"
    className="bg-[#050816] py-28 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Intelligence Dashboard
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Monitor AI performance, business metrics, reports,
            and intelligent automations from one workspace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="grid lg:grid-cols-12 overflow-hidden rounded-[32px] border
           border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(139,92,246,.15)]"
        >

          {/* Sidebar */}

          <div
            className="lg:col-span-3 border-r border-white/10 bg-[#0b1020]/90 p-8 backdrop-blur-xl">

            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold">
                X
              </div>

              <div>
                <h3 className="text-xl font-bold">XAI</h3>
                <p className="text-xs text-gray-400">
                  Intelligence Workspace
                </p>
              </div>
            </div>

            <div className="space-y-3">

              <div className="flex items-center gap-3 rounded-xl bg-violet-500/10 border border-violet-500/20 px-4 py-3 text-white">
                <FaChartLine className="text-violet-400" />
                <span>Dashboard</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-400 hover:bg-white/5 transition">
                <FaUsers className="text-cyan-400" />
                <span>Analytics</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-400 hover:bg-white/5 transition">
                <FaRobot className="text-pink-400" />
                <span>AI Reports</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-400 hover:bg-white/5 transition">
                <FaBell className="text-yellow-400" />
                <span>Automation</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-400 hover:bg-white/5 transition">
                <span className="w-4 h-4 rounded-full border border-gray-500"></span>
                <span>Settings</span>
              </div>

            </div>

          </div>

          {/* Main Dashboard */}

          <div className="lg:col-span-9 p-8">

            {/* Cards */}
            <div className="mb-8 flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-400">
                  Good Evening 👋
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Welcome back, User
                </h2>

                <p className="mt-2 text-gray-400">
                  Here's your AI workspace overview for today.
                </p>
              </div>

              <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-3">
                <p className="text-sm text-green-400">
                  ● AI Systems Online
                </p>
              </div>

            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03
                }}
                transition={{ duration: .25 }}
                className="bg-[#111827] rounded-2xl p-6 border border-white/5
                           hover:border-violet-500/40 transition-all">

                <FaChartLine className="text-violet-400 text-3xl mb-4" />
                <h3 className="text-3xl font-bold">
                  84%
                </h3>
                <p className="text-gray-400 mt-2">
                  AI Accuracy
                </p>
                <div className="mt-5">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>84%</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "84%" }}
                      transition={{ duration: 1.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                    />
                  </div>

                  <p className="mt-3 text-sm text-green-400">
                    ▲ +12.8% this week
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03
                }}
                transition={{ duration: .25 }}
                className="bg-[#111827] rounded-2xl p-6 border border-white/5
                           hover:border-violet-500/40 transition-all">
                <FaUsers className="text-cyan-400 text-3xl mb-4" />
                <h3 className="text-3xl font-bold">
                  24K
                </h3>
                <p className="text-gray-400 mt-2">
                  Active Users
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03
                }}
                transition={{ duration: .25 }}
                className="bg-[#111827] rounded-2xl p-6 border border-white/5
                           hover:border-violet-500/40 transition-all">
                <FaRobot className="text-pink-400 text-3xl mb-4" />
                <h3 className="text-3xl font-bold">
                  186
                </h3>
                <p className="text-gray-400 mt-2">
                  AI Tasks
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03
                }}
                transition={{ duration: .25 }}
                className="bg-[#111827] rounded-2xl p-6 border border-white/5
                           hover:border-violet-500/40 transition-all">
                <FaBell className="text-yellow-400 text-3xl mb-4" />
                <h3 className="text-3xl font-bold">
                  17
                </h3>
                <p className="text-gray-400 mt-2">
                  Notifications
                </p>
              </motion.div>

            </div>

            {/* Chart */}

            <div
              className="mt-10 rounded-2xl border border-white/10
             bg-[#111827] p-5 md:p-8 shadow-[0_0_60px_rgba(139,92,246,.08)]">

              <h3 className="text-xl md:text-2xl font-semibold mb-8">
                Weekly AI Performance
              </h3>

              <div className="h-55 md:h-60 rounded-xl bg-gradient-to-r from-violet-600/20 to-cyan-500/20 flex items-end justify-around px-3.6 md:px-6">

                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 80 }}
                  transition={{ duration: 0.6 }}
                  className="w-5 md:w-8 bg-violet-500 rounded-t"
                />

                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 144 }}
                  transition={{ duration: 0.8 }}
                  className="w-5 md:w-8 bg-cyan-400 rounded-t"
                />

                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 112 }}
                  transition={{ duration: 1 }}
                  className="w-5 md:w-8 bg-violet-500 rounded-t"
                />

                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 176 }}
                  transition={{ duration: 1.2 }}
                  className="w-5 md:w-8 bg-fuchsia-500 rounded-t"
                />

                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 208 }}
                  transition={{ duration: 1.4 }}
                  className="w-5 md:w-8 bg-cyan-400 rounded-t"
                />

                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 160 }}
                  transition={{ duration: 1.6 }}
                  className="w-5 md:w-8 bg-violet-500 rounded-t"
                />

              </div>
              <div className="mt-4 flex justify-around text-sm text-gray-500">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>
            </div>

            <div className="mt-8 grid lg:grid-cols-2 gap-6">

              {/* Recent Activity ekhne add krsi*/}

              <div className="rounded-2xl bg-[#111827] border border-white/10 p-6 transition-all duration-300
               hover:border-violet-500/40 hover:-translate-y-1">

                <h3 className="text-xl font-semibold mb-6">
                  Recent Activity
                </h3>

                <div className="space-y-5">

                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">AI Model Updated</h4>
                      <p className="text-sm text-gray-400">
                        Performance increased by 12%
                      </p>
                    </div>

                    <span className="text-xs text-gray-500">
                      2 min ago
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">New Dataset Imported</h4>
                      <p className="text-sm text-gray-400">
                        24,000 records processed
                      </p>
                    </div>

                    <span className="text-xs text-gray-500">
                      15 min ago
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Automation Completed</h4>
                      <p className="text-sm text-gray-400">
                        Report generated successfully
                      </p>
                    </div>

                    <span className="text-xs text-gray-500">
                      1 hour ago
                    </span>
                  </div>

                </div>

              </div>
              <div className="rounded-2xl bg-[#111827] border border-white/10 p-6 transition-all duration-300
                         hover:border-violet-500/40 hover:-translate-y-1">

                <h3 className="text-xl font-semibold mb-6">
                  AI Insights
                </h3>

                <div className="space-y-6">

                  <div>
                    <p className="text-sm text-gray-400">Revenue Prediction</p>
                    <h4 className="mt-2 text-2xl font-bold text-green-400">
                      +18.4%
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Automation Efficiency</p>

                    <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.3 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                      />
                    </div>

                    <p className="mt-2 text-sm text-gray-400">
                      92% Tasks Automated
                    </p>
                  </div>

                  <div className="rounded-xl bg-violet-500/10 border border-violet-500/20 p-4">
                    <p className="text-sm text-violet-300">
                      💡 AI Recommendation
                    </p>

                    <p className="mt-2 text-sm text-gray-300">
                      Optimize customer onboarding workflow to reduce response time by an estimated 15%.
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>


        </motion.div>

      </div>
    </section>
  );
};

