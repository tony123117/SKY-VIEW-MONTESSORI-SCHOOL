import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState("student");
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
    console.log("Login attempt:", { ...loginData, userType: activeTab });
    alert(`Login functionality for ${activeTab} portal coming soon!`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#ffe1ec] via-white to-[#4f78ed]/10">
        {/* Hero Section */}
        <section className="px-4 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block bg-[#303778]/10 text-[#303778] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#303778]/30 backdrop-blur-sm">
                Student & Parent Portal
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-[#303778] drop-shadow-lg mb-4">
                Welcome to Brain Child School Portal
              </h1>
              <p className="text-[#303778]/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Access your account to view grades, assignments, announcements, and more.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Login Section */}
        <section className="px-4 md:px-12 lg:px-24 pb-16 md:pb-20">
          <div className="max-w-[500px] mx-auto">
            <AnimatedSection>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger
                      value="student"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#4f78ed] data-[state=active]:to-[#303778] data-[state=active]:text-white"
                    >
                      Student
                    </TabsTrigger>
                    <TabsTrigger
                      value="parent"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#4f78ed] data-[state=active]:to-[#303778] data-[state=active]:text-white"
                    >
                      Parent
                    </TabsTrigger>
                    <TabsTrigger
                      value="admin"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#4f78ed] data-[state=active]:to-[#303778] data-[state=active]:text-white"
                    >
                      Admin
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="student" className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-heading font-bold text-[#303778] mb-2">Student Login</h2>
                      <p className="text-[#303778]/70 text-sm">Access your student dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#303778] mb-2">Student ID / Email</label>
                        <input
                          type="text"
                          name="email"
                          value={loginData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#303778]/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4f78ed] transition-all"
                          placeholder="Enter your student ID or email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#303778] mb-2">Password</label>
                        <input
                          type="password"
                          name="password"
                          value={loginData.password}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#303778]/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4f78ed] transition-all"
                          placeholder="Enter your password"
                        />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded border-[#303778]/20" />
                          <span className="text-[#303778]/70">Remember me</span>
                        </label>
                        <a href="#" className="text-[#4f78ed] hover:underline">Forgot password?</a>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#4f78ed] to-[#303778] text-white py-4 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                      >
                        Sign In as Student
                      </button>
                    </form>
                  </TabsContent>

                  <TabsContent value="parent" className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-heading font-bold text-[#303778] mb-2">Parent Login</h2>
                      <p className="text-[#303778]/70 text-sm">Monitor your child's progress</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#303778] mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={loginData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#303778]/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4f78ed] transition-all"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#303778] mb-2">Password</label>
                        <input
                          type="password"
                          name="password"
                          value={loginData.password}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#303778]/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4f78ed] transition-all"
                          placeholder="Enter your password"
                        />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded border-[#303778]/20" />
                          <span className="text-[#303778]/70">Remember me</span>
                        </label>
                        <a href="#" className="text-[#4f78ed] hover:underline">Forgot password?</a>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#4f78ed] to-[#303778] text-white py-4 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                      >
                        Sign In as Parent
                      </button>
                    </form>
                  </TabsContent>

                  <TabsContent value="admin" className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-heading font-bold text-[#303778] mb-2">Admin Login</h2>
                      <p className="text-[#303778]/70 text-sm">School administration access</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#303778] mb-2">Admin Email</label>
                        <input
                          type="email"
                          name="email"
                          value={loginData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#303778]/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4f78ed] transition-all"
                          placeholder="admin@BrainChildschool.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#303778] mb-2">Password</label>
                        <input
                          type="password"
                          name="password"
                          value={loginData.password}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[#303778]/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#4f78ed] transition-all"
                          placeholder="Enter admin password"
                        />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded border-[#303778]/20" />
                          <span className="text-[#303778]/70">Remember me</span>
                        </label>
                        <a href="#" className="text-[#4f78ed] hover:underline">Forgot password?</a>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#4f78ed] to-[#303778] text-white py-4 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                      >
                        Sign In as Admin
                      </button>
                    </form>
                  </TabsContent>
                </Tabs>

                <div className="mt-8 pt-6 border-t border-[#303778]/10 text-center">
                  <p className="text-[#303778]/60 text-sm mb-4">
                    Don't have an account?
                  </p>
                  <Link to="/contact">
                    <button className="text-[#4f78ed] hover:text-[#303778] font-medium transition-colors">
                      Contact us to get started →
                    </button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}