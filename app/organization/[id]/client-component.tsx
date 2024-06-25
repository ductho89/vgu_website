"use client"

import Image from 'next/image';
import React from "react";

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import { sans } from '../../ui/fonts';
import directus from '@/lib/directus';
import Link from 'next/link';
import { notFound } from 'next/navigation';


export default function DepartmentClient({ membersData, childDeptData }: { membersData: any; childDeptData: any }) {
    const [selectedMember, setSelectedMember] = React.useState<any | null>(null);
    const [size, setSize] = React.useState(null);
    const handleOpen = (value: any) => setSize(value);

    const handleViewInfo = (member: any) => {
        // console.log(JSON.stringify(member)); // Log the name to the console
        setSelectedMember(member);
        handleOpen("lg"); // Open the dialog
    };
    if (!membersData) {
        notFound();
    }
    var deptName = membersData.name;
    var nameArray = deptName.split(' ');
    var nameFirstWord = nameArray[0];
    var nameRest = deptName.substring( deptName.indexOf(" ") + 1, deptName.length );

    return (
        

            <div>
                <div className={`${sans.className} my-12`}>
                    <div className="mb-12">
                        <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                            {nameFirstWord} {' '}
                            <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
                                {nameRest}
                            </mark>{' '}
                        </h1>
                    </div>

                    {/* ---PRESIDENTIAL BOARD MEMBERES--- */}

                    <div className="mx-auto w-8/12">
                        <div className="grid grid-cols-1 gap-6 rounded pb-6 md:grid-cols-2 lg:grid-cols-3">
                            {membersData.members2.map((member: any) => (
                                <div key={member.item.id}>
                                    <div className="overflow-hidden rounded shadow-lg duration-200 hover:scale-105 ">
                                        <div className="border-b-2 border-b-vgu-orange object-cover shadow-lg">
                                            <Image
                                                src={`${directus.url}assets/${member.item.avatar.filename_disk}`}
                                                width={400}
                                                height={200}
                                                alt={member.item.full_name}
                                            />

                                        </div>
                                        <div className="px-6 py-4">
                                            <div className="mb-2 text-2xl font-bold">{member.item.full_name}</div>
                                            <p className="text-base h-12 text-gray-700">
                                                {member.item.position}
                                            </p>
                                        </div>

                                        <div className="px-6 py-6 ">
                                            <button onClick={() => handleViewInfo(member)} className="inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue">
                                                View Bio

                                            </button>
                                            <Dialog
                                                open={size === "lg"}
                                                size={size || "lg"}
                                                handler={handleOpen}
                                            >

                                                <DialogBody>
                                                {selectedMember && (
                                                    <div className="m-4 grid grid-flow-row-dense grid-cols-8 gap-8">
                                                        <div className="col-span-3">
                                                            <Image
                                                                className="rounded"
                                                                src={`${directus.url}assets/${selectedMember.item.avatar.filename_disk}`}
                                                                width={350}
                                                                height={200}
                                                                alt={selectedMember.item.full_name}
                                                            />
                                                            <div className="px-4 py-4">
                                                                <div className="mb-2 text-2xl font-bold uppercase text-vgu-darkblue">
                                                                    {selectedMember.item.full_name}
                                                                </div>
                                                                <p className=" h-12 text-xl text-vgu-darkblue">
                                                                    {selectedMember.item.title}
                                                                </p>
                                                                <hr className="my-4 h-px border-0 bg-vgu-darkblue"></hr>

                                                                <div className="flex flex-col text-vgu-darkblue">
                                                                    <p>Email: {selectedMember.item.email}</p>
                                                                    <p>Tel: {selectedMember.item.phone_number}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-span-5 font-normal">
                                                            <div className="mb-4" dangerouslySetInnerHTML={{ __html: selectedMember.item.more_info }}>
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
                </div >
                <div className={`${sans.className} my-12`}>
                    <div className="mb-12">
                        <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                            <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
                                Departments under
                            </mark>
                            {' '} {membersData.name} {' '}
                        </h1>
                    </div>
                    < div className="mx-auto w-8/12">
                <div className="rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                    {childDeptData.map((item: any) => (
                        <div key={item.id}>
                            <div className="overflow-hidden rounded shadow-lg duration-200 hover:scale-105 ">
                                <div className="width-full h-auto shadow-lg">
                                    <Image
                                        src={`${directus.url}assets/${item.thumbnail.filename_disk}`}
                                        height={533}
                                        width={800}
                                        alt="Placeholder image"
                                        className="card-imageblock w-full h-auto border-b-vgu-orange
                                                    border-b-2"
                                    />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="mb-2 text-2xl font-bold">{item.name}</div>
                                    <p className="text-base text-gray-700">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="px-6 py-6 ">
                                    <Link href={`/organization/${item.id}`}>
                                        <button className="text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                                            Learn more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div >
                    

                    
                </div >
            </div>

        

    )
}