import { Badge } from "./Badge";

const TestimonialCard = ({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) => (
  <div className="flex flex-col p-8 md:p-10 text-left bg-white dark:bg-slate-900/50 border-b border-r border-slate-200 dark:border-slate-800 transition-colors h-full">
    <blockquote className="text-base md:text-lg text-slate-800 dark:text-slate-300 leading-relaxed mb-8 flex-grow">
      “{quote}”
    </blockquote>
    <div className="mt-auto">
      <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
        {author}
      </div>
      <div className="text-slate-500 dark:text-slate-400 text-sm">
        {role}
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <div className="w-full relative bg-white dark:bg-slate-950">
      <section className="overflow-hidden flex flex-col relative max-w-[1440px] mx-auto">
        <div className="absolute inset-y-0 left-4 md:left-12 w-px bg-slate-200 dark:bg-slate-900 z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-4 md:right-12 w-px bg-slate-200 dark:bg-slate-900 z-30 pointer-events-none" />

        <div className="px-4 md:px-12 w-full flex flex-col relative">

          {/* Inner Vertical Borders for boxed look */}
          <div className="absolute inset-y-0 left-1/2 -ml-[564px] w-px bg-slate-200 dark:bg-slate-900 z-30 pointer-events-none hidden xl:block" />
          <div className="absolute inset-y-0 left-1/2 ml-[564px] w-px bg-slate-200 dark:bg-slate-900 z-30 pointer-events-none hidden xl:block" />

          {/* Section 1: Testimonials */}
          <div className="relative flex flex-col items-center justify-center sm:py-24 py-16 text-center bg-transparent">
            {/* Fades for Case Studies Section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-0 pointer-events-none" />

            <div className="flex flex-col items-center w-full relative z-20 px-6 sm:px-0 mb-12">
              <Badge className="mb-6 mt-px ml-px">Testimonials</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-black dark:text-white sm:text-5xl mb-4">
                What <span className="text-highlight-blink">Early Teams</span> Are Saying
              </h2>
            </div>

            <div className="relative w-full z-20">
              <div className="max-w-[1128px] mx-auto grid grid-cols-1 md:grid-cols-3 border-t border-l border-slate-200 dark:border-slate-800">
                <TestimonialCard
                  quote="Fluxberry AI brought structure and speed to our hiring. We closed a Sales Development role in under two days."
                  author="Founder"
                  role="SaaS Startup"
                />
                <TestimonialCard
                  quote="The automation alone saved us hours every week. It feels like having an extra recruiter on the team."
                  author="Head of Talent"
                  role="Tech Company"
                />
                <TestimonialCard
                  quote="The interview scorecards and analytics changed how we evaluate candidates."
                  author="Hiring Manager"
                  role="Fintech Co."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
