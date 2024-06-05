'use client';

import Image from 'next/image';
import React from 'react';

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

import { PresidentialBoardMember } from '../../lib/definitions';
import { sans } from '../../ui/fonts';

export default function Page() {
  const presidentialBoardData: PresidentialBoardMember[] = [
    {
      name: 'Prof.Dr. René Thiele',
      position: 'President',
      imageUrl: '/drhathucvien.jpg',
      email: 'thiele.r@vgu.edu.vn',
      phone: '+84 (0)274 222 0990 (ext: 70111)',
      bio: 'Ambitious and results-driven academic professional with broad-based expertise in leading teams, establishing departments and strengthening organizations. Committed to excellence in business operations.',
      achievements: [
        'Ph.D in Resource Economics from Humboldt University, Germany, 2007.',
        'MA in Sustainable Development from Chiang Mai University, Thai Lan, 2003.',
        'BSc in Land Management from University of Agriculture and Forestry, Ho Chi Minh City, Vietnam, 1996.',
      ],
      history:
        'Dr. Thiele is the President of the Vietnamese German University. He has published numerous articles in his specialized fields.',
    },
    {
      name: 'DR. HA THUC VIEN',
      position: 'Vice President for Academic and Student Affairs',
      imageUrl: '/drhathucvien.jpg',
      email: 'vien.ht@vgu.edu.vn',
      phone: '+84 (0)274 222 0990 (ext: 70113)',
      bio: 'Ambitious and results-driven academic professional with broad-based expertise in leading teams, establishing departments and strengthening organizations. Committed to excellence in business operations.',
      achievements: [
        'Ph.D in Resource Economics from Humboldt University, Germany, 2007.',
        'MA in Sustainable Development from Chiang Mai University, Thai Lan, 2003.',
        'BSc in Land Management from University of Agriculture and Forestry, Ho Chi Minh City, Vietnam, 1996.',
      ],
      history:
        "Dr. Ha Thuc Vien is the Acting President of the Vietnamese German University. He is also Vice President in charge of Academic Affairs cum Director of the VGU's Management Unit (VMU, an designated unit to manage the VGU New Campus construction under the USD 200 million World Bank loaned project). Before joining VGU in 2012, Dr. Vien was the Head of Natural Resources and Tourism Department and also the founder and Director of Center for International Education of Ho Chi Minh City University of Agriculture and Forestry. His earlier career includes a senior lecturer in Resource and Land Economics, Resource Management, Land Use and Project Management. He has published a number of books, book chapters and articles in his specialized fields.",
    },
    {
      name: 'DR. THOMAS G. AULIG',
      position: 'Vice President',
      imageUrl: '/drthomas.jpg',
      email: 'aulig.t@vgu.edu.vn',
      phone: '+84 (0)274 222 0990 (ext: 70112)',
      bio: 'Ambitious and results-driven academic professional with broad-based expertise in leading teams, establishing departments and strengthening organizations. Committed to excellence in business operations.',
      achievements: [
        'Ph.D in Resource Economics from Humboldt University, Germany, 2007.',
        'MA in Sustainable Development from Chiang Mai University, Thai Lan, 2003.',
        'BSc in Land Management from University of Agriculture and Forestry, Ho Chi Minh City, Vietnam, 1996.',
      ],
      history:
        'Dr. Aulig is the Vice President of the Vietnamese German University. He has published numerous articles in his specialized fields.',
    },
  ];

  const [selectedMember, setSelectedMember] =
    React.useState<PresidentialBoardMember | null>(null);

  const [size, setSize] = React.useState(null);

  const handleOpen = (value: any) => setSize(value);

  const handleViewInfo = (member: PresidentialBoardMember) => {
    setSelectedMember(member);
    handleOpen('lg');
  };

  return (
    <main>
      {/* <Header /> */}

      <div>
        <div className="my-12">
          <div className="mb-12">
            <h1 className="text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
              VGU&nbsp;
              <mark className="rounded bg-vgu-orange px-2 py-0 text-white">
                Presidential Board
              </mark>
            </h1>
          </div>

          {/* ---PRESIDENTIAL BOARD MEMBERS--- */}

          <div className="mx-auto w-8/12">
            <div className="grid grid-cols-1 gap-6 rounded pb-6 md:grid-cols-2 lg:grid-cols-3">
              {presidentialBoardData.map((member) => (
                <div key={member.name}>
                  <div className="overflow-hidden rounded shadow-lg duration-200 hover:scale-105 ">
                    <div className="border-b-2 border-b-vgu-orange object-cover shadow-lg">
                      <Image
                        src={`${member.imageUrl}`}
                        width={400}
                        height={200}
                        alt={member.name}
                      />
                    </div>
                    <div className="px-6 py-4">
                      <div className="mb-2 text-2xl font-bold">
                        {member.name}
                      </div>
                      <p className="h-12 text-base text-gray-700">
                        {member.position}
                      </p>
                    </div>

                    <div className="px-6 py-6 ">
                      <button
                        onClick={() => handleViewInfo(member)}
                        className="inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue"
                      >
                        View Bio
                      </button>
                      <Dialog
                        open={size === 'lg'}
                        size={size || 'lg'}
                        handler={handleOpen}
                      >
                        <DialogBody>
                          {selectedMember && (
                            <div className="m-4 grid grid-flow-row-dense grid-cols-8 gap-8">
                              <div className="col-span-3">
                                <Image
                                  className="rounded"
                                  src={`${selectedMember.imageUrl}`}
                                  width={350}
                                  height={200}
                                  alt={selectedMember.name}
                                />
                                <div className="px-4 py-4">
                                  <div className="mb-2 text-2xl font-bold uppercase text-vgu-darkblue">
                                    {selectedMember.name}
                                  </div>
                                  <p className=" h-12 text-xl text-vgu-darkblue">
                                    {selectedMember.position}
                                  </p>
                                  <hr className="my-4 h-px border-0 bg-vgu-darkblue"></hr>

                                  <div className="flex flex-col text-vgu-darkblue">
                                    <p>Email: {selectedMember.email}</p>
                                    <p>Tel: {selectedMember.phone}</p>
                                  </div>
                                </div>
                              </div>

                              <div className="col-span-5 font-normal">
                                <div className="mb-4">
                                  <p>{selectedMember.bio}</p>
                                </div>
                                <div className="mb-4">
                                  <h1 className="text-2xl font-bold uppercase text-vgu-orange">
                                    Academic Achievements
                                  </h1>
                                  <p>
                                    {selectedMember.achievements.map(
                                      (achievement, index) => (
                                        <span key={index}>
                                          - {achievement}
                                          <br />
                                        </span>
                                      ),
                                    )}
                                  </p>
                                </div>
                                <div className="mb-4">
                                  <h1 className="text-2xl font-bold uppercase text-vgu-orange">
                                    Professional History
                                  </h1>
                                  <p>{selectedMember.history}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogBody>
                      </Dialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${sans.className} my-12`}>
          <div className="mb-12">
            <h1 className="text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
              <mark className="rounded bg-vgu-orange px-2 py-0 text-white">
                Presidential Board
              </mark>
              &nbsp;Office
            </h1>
          </div>
          <div className="mx-auto w-8/12">
            <div className="grid grid-cols-1 gap-6 rounded pb-6 md:grid-cols-2 lg:grid-cols-3">
              {presidentialBoardData.map((member) => (
                <div key={member.name}>
                  <div className="overflow-hidden rounded shadow-lg duration-200 hover:scale-105 ">
                    <div className="border-b-2 border-b-vgu-orange object-cover shadow-lg">
                      <Image
                        src={`${member.imageUrl}`}
                        width={400}
                        height={200}
                        alt={member.name}
                      />
                    </div>
                    <div className="px-6 py-4">
                      <div className="mb-2 text-2xl font-bold">
                        {member.name}
                      </div>
                      <p className="h-12 text-base text-gray-700">
                        {member.position}
                      </p>
                    </div>

                    <div className="px-6 py-6 ">
                      <button
                        onClick={() => handleViewInfo(member)}
                        className="inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue"
                      >
                        View Bio
                      </button>
                      <Dialog
                        open={size === 'lg'}
                        size={size || 'lg'}
                        handler={handleOpen}
                      >
                        <DialogBody>
                          {selectedMember && (
                            <div className="m-4 grid grid-flow-row-dense grid-cols-8 gap-8">
                              <div className="col-span-3">
                                <Image
                                  className="rounded"
                                  src={`${selectedMember.imageUrl}`}
                                  width={350}
                                  height={200}
                                  alt={selectedMember.name}
                                />
                                <div className="px-4 py-4">
                                  <div className="mb-2 text-2xl font-bold uppercase text-vgu-darkblue">
                                    {selectedMember.name}
                                  </div>
                                  <p className=" h-12 text-xl text-vgu-darkblue">
                                    {selectedMember.position}
                                  </p>
                                  <hr className="my-4 h-px border-0 bg-vgu-darkblue"></hr>

                                  <div className="flex flex-col text-vgu-darkblue">
                                    <p>Email: {selectedMember.email}</p>
                                    <p>Tel: {selectedMember.phone}</p>
                                  </div>
                                </div>
                              </div>

                              <div className="col-span-5 font-normal">
                                <div className="mb-4">
                                  <p>{selectedMember.bio}</p>
                                </div>
                                <div className="mb-4">
                                  <h1 className="text-2xl font-bold uppercase text-vgu-orange">
                                    Academic Achievements
                                  </h1>
                                  <p>
                                    {selectedMember.achievements.map(
                                      (achievement, index) => (
                                        <span key={index}>
                                          - {achievement}
                                          <br />
                                        </span>
                                      ),
                                    )}
                                  </p>
                                </div>
                                <div className="mb-4">
                                  <h1 className="text-2xl font-bold uppercase text-vgu-orange">
                                    Professional History
                                  </h1>
                                  <p>{selectedMember.history}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogBody>
                      </Dialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
