import Link from "next/link";
import { ArrowRight, Upload, FileText, Map, BarChart3, CheckSquare, Rocket } from "lucide-react";

const features = [
  {
    icon: <Upload className="w-6 h-6" />,
    title: "Upload JD",
    description: "Paste job descriptions for AI analysis",
    href: "/prp/01-upload",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Extract Skills",
    description: "Automatically identify required skills",
    href: "/prp/02-extract",
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Map Rounds",
    description: "Understand assessment structure",
    href: "/prp/03-map",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Calculate Score",
    description: "Measure your readiness",
    href: "/prp/04-score",
  },
  {
    icon: <CheckSquare className="w-6 h-6" />,
    title: "Test",
    description: "Verify all functionality",
    href: "/prp/07-test",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Ship",
    description: "Deploy when ready",
    href: "/prp/08-ship",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Placement Readiness
            <span className="text-primary-600"> Platform</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            AI-powered assessment tool to evaluate your placement readiness. Upload job
            descriptions, extract skills, map assessment rounds, and calculate your score.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/prp/01-upload"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/prp/07-test"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors text-lg"
            >
              <CheckSquare className="w-5 h-5 mr-2" />
              Test Checklist
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-primary-300 transition-all"
            >
              <div className="p-3 bg-primary-50 rounded-lg text-primary-600 w-fit mb-4 group-hover:bg-primary-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="mt-4 flex items-center text-primary-600 font-medium">
                <span>Go to page</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            Placement Readiness Platform - Built for testing and shipping with confidence
          </p>
        </div>
      </footer>
    </div>
  );
}
