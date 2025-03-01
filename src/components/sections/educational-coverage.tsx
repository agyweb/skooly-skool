import { BookOpenText, GraduationCap, School, Shapes } from "lucide-react";

export default function EducationalCoverage() {
  return (
    <div className="py-[50px] bg-[#f9fafb]">
      <div className="box">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">Educational Coverage</h2>
          <p className="text-neutral-500">
            Complete coverage across all the educational levels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:flex-row gap-8 gap-y-9 mt-14 ">
          <div className="rounded-lg p-5 bg-white flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
              <BookOpenText size={18} className="text-[#3956f5]" />
            </div>
            <div className=" border-b border-neutral-200 pb-5 mt-5 ">
              <h3 className="text-xl font-semibold leading-none tracking-tight ">
                Primary School
              </h3>
              <div className="text-white text-center w-fit text-[11px] mt-3 leading-none font-normal rounded-sm px-2 bg-primary py-[5px] ">
                Grades 1-6
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-neutral-500 text-sm">Mathematics</p>

              <p className="text-neutral-500 text-sm">Arabic Language</p>

              <p className="text-neutral-500 text-sm">French Language</p>

              <p className="text-neutral-500 text-sm">Islamic Education</p>

              <p className="text-primary text-sm">
                <span className="font-medium italic">+ 8 more subjects</span>
              </p>
            </div>
          </div>

          <div className="rounded-lg p-5 bg-white flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
              <School size={18} className="text-[#3956f5]" />
            </div>
            <div className=" border-b border-neutral-200 pb-5 mt-5 ">
              <h3 className="text-xl font-semibold leading-none tracking-tight ">
                Middle School
              </h3>
              <div className="text-white w-fit text-center text-[11px] mt-3 leading-none font-normal rounded-sm px-2 bg-primary py-[5px] ">
                Grades 7-9
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-neutral-500 text-sm">Mathematics</p>

              <p className="text-neutral-500 text-sm">Physics & Chemistry</p>

              <p className="text-neutral-500 text-sm">Arabic Language</p>

              <p className="text-neutral-500 text-sm">English Language</p>

              <p className="text-primary text-sm">
                <span className="font-medium italic">+ 10 more subjects</span>
              </p>
            </div>
          </div>

          <div className="rounded-lg p-5 bg-white flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
              <GraduationCap size={20} className="text-[#3956f5]" />
            </div>
            <div className=" border-b border-neutral-200 pb-5 mt-5 ">
              <h3 className="text-xl font-semibold leading-none tracking-tight ">
                High School
              </h3>
              <div className="text-white w-fit text-center text-[11px] mt-3 leading-none font-normal rounded-sm bg-primary px-2 py-[5px] ">
                Grades 10-12
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-neutral-500 text-sm">Science Tracks</p>

              <p className="text-neutral-500 text-sm">Literary Tracks</p>

              <p className="text-neutral-500 text-sm">Technical Tracks</p>

              <p className="text-neutral-500 text-sm">Economics Tracks</p>

              <p className="text-primary text-sm">
                <span className="font-medium italic">+ 5 specializations</span>
              </p>
            </div>
          </div>

          <div className="rounded-lg p-5 bg-white flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
              <Shapes size={18} className="text-[#3956f5]" />
            </div>

            <div className=" border-b border-neutral-200 pb-5 mt-5 ">
              <h3 className="text-xl font-semibold leading-none tracking-tight ">
                Special Subjects
              </h3>
              <div className="text-white w-fit text-center text-[11px] mt-3 leading-none font-normal rounded-sm bg-primary px-2 py-[5px] ">
                Additional Coverage
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <p className="text-neutral-500 text-sm">Computer Science</p>

              <p className="text-neutral-500 text-sm">Art Education</p>

              <p className="text-neutral-500 text-sm">Languages</p>

              <p className="text-neutral-500 text-sm">Physical Education</p>

              <p className="text-primary text-sm">
                <span className="font-medium italic">
                  + 7 more specialized areas
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
