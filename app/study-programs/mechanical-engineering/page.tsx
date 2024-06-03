import Header from '@/app/global-components/header';
import Footer from '@/app/global-components/footer';
import Image from 'next/image';
export default function Page() {
  return (
    <main>
      {/* <Header /> */}
      <div className="h-auto w-full">
        <div className="relative mb-8 max-w-full">
          <img
            src="/mechanical_engineering.jpg"
            className="h-auto w-full brightness-50 filter"
            alt="VGU Campus Image"
          />
          <div className="absolute inset-0 flex h-full w-full items-center justify-center text-center">
            <h1 className=" mb-8 text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
              Mechanical{' '}
              <mark className="rounded bg-vgu-orange px-2 py-0 text-white">
                Engineering
              </mark>{' '}
            </h1>
          </div>
        </div>

        <div className="m-4 mx-auto grid w-9/12 grid-flow-row-dense grid-cols-8 gap-12 rounded border-2 p-6">
          <div className="col-span-2">
            <div id="quote">
              <p className="text-vgu-orange">
                “Scientists dream about doing great things. Engineers do them.”
              </p>
              <p className="text-vgu-darkblue">
                - James A. Michéner, US Author
              </p>
            </div>
            <hr className="my-6" />

            <div id="accreditation">
              <h1 className="text-2xl font-bold text-vgu-orange">
                Accreditation
              </h1>
              <p className="text-vgu-darkblue">
                The Mechanical Engineering program is accredited by German
                accreditation agency ACQUIN. The award of the ACQUIN quality
                seal is valid until 30/09/2028.
              </p>
              <hr className="mt-6" />
            </div>

            <div id="contact">
              {/* <hr className="h-px my-4 bg-vgu-darkblue border-0"></hr> */}
              <h1 className="text-2xl font-bold text-vgu-orange">Contact</h1>
              <div className="flex flex-col text-vgu-darkblue">
                <p>Admission hotline: 0988 54 52 54</p> <br />
                <p>
                  Telephone number: 0274-222 0990 <p>(Dial Extension 70154)</p>{' '}
                </p>{' '}
                <br />
                <p>Gmail: study@vgu.edu.vn</p>
                <br />
                <p>Consulting hours: 8:30 - 16:00</p>
                {/* <p className="text-gray-400">Ext: 70158</p> */}
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div id="about">
              <h1 className="mb-4 text-2xl font-bold uppercase text-vgu-orange">
                ABOUT THE MECHANICAL ENGINEERING (MEN) PROGRAM
              </h1>
              <p>
                - The Bachelor Program in Mechanical Engineering (MEN) at VGU is
                a fulltime program consisting of seven semesters (three and a
                half years) excluding a foundation semester (or 1/2 academic
                year).  The program consists of a combination of fundamentals of
                natural sciences and mathematics with mechanical engineering
                basics. Students can choose between two majors "Engineering
                Design and Automation" or "Energy and Process Engineering". The
                program provides students with expert skills and knowledge
                needed for a career in industry as well as a broad and solid
                academic foundation for the continuation of their studies in
                post-graduate programs.
                <br /> <br />- The language of teaching, learning and assessment
                is English. <br /> <br />- After completion, the graduates will
                be awarded double degrees (Bachelor of Science degree) in
                Mechanical Engineering conferred by both Ruhr-University
                Bochum (RUB), Germany and VGU, Vietnam.
              </p>
            </div>

            <hr className="my-6" />

            <div>
              <h1 className="mb-4 text-2xl font-bold uppercase text-vgu-orange">
                PARTNER UNIVERSITY IN GERMANY
              </h1>
              <Image
                className="rounded"
                src="/rub.jpg"
                width={300}
                height={200}
                alt="Placeholder image"
              />
              <p>
                - Ruhr-University Bochum is the partner university for the
                Mechanical Engineering program at VGU. Ruhr-University is
                located at the heart of the Ruhr area, once famous for its coal
                mining industry.
                <br />
                <br />- Since its foundation in 1962 and operation in 1965 it
                has developed under the guiding principle "universitas" and the
                motto "human, open to the world, accomplished" to one of the
                five largest Universities in Germany, being the academic home of
                more than 42,000 students currently. Its focus on international
                collaboration has resulted in over 15 dual degree study programs
                and nearly 6,000 international students participating in
                everyday education.
              </p>
            </div>

            <hr className="my-6" />
            <div>
              <h1 className="mb-4 text-2xl font-bold uppercase text-vgu-orange">
                SCHOLARSHIPS AND STUDENT EXCHANGE PROGRAM
              </h1>

              <p>
                - All students are eligible to study and conduct their
                graduation thesis at RUB in the 7th (or last) semester with the
                support of DAAD scholarships or other scholarships or by
                self-finances.
                <br />
                <br />- In both cases, either choosing to stay at VGU or going
                to RUB/VGU for studying and doing thesis in the 7th (or last)
                semester, students are eligible to be awarded with double
                degrees: Bachelor of Science (BSc) Degree conferred by both by
                RUB and VGU.
              </p>
            </div>

            <hr className="my-6" />

            <div>
              <h1 className="mb-4 text-2xl font-bold uppercase text-vgu-orange">
                MESSAGE FROM THE ACADEMIC DIRECTOR
              </h1>
              <div className="mb-6 grid grid-cols-2 items-center gap-4">
                <div>
                  <Image
                    className="h-auto w-full rounded"
                    src="/RolandSpan_me.jpeg"
                    width={300}
                    height={200}
                    alt="Placeholder image"
                  />
                </div>
                <div>
                  <p className="italic">
                    Prof. Dr.-Ing. Roland Span, <br />
                    Chair of Thermodynamics, Ruhr-University Bochum (RUB),{' '}
                    <br />
                    Academic Director of the program
                  </p>
                </div>
              </div>

              <p>
                &quot;An outstanding Bachelor's degree in Mechanical Engineering
                opens doors worldwide in industry and academia. RUB educates
                students at VGU to become highly qualified Engineers with
                internationally recognized education standards. Personally, it
                is a pleasure for me to teach at VGU, seeing highly motivated
                students revealing their talents and gaining expertise at fast
                pace in an environment with high standards both in education and
                research.&quot;
              </p>

              <br />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
