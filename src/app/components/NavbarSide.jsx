import React from 'react'
import Image from "next/image";
export default function NavbarSide() {
    return (

        <div className="w-full h-full flex">

            <div className="h-screen w-[240px] fixed left-0 px-4">
                <div className="mt-14 py-2 pl-3  cursor-pointer rounded-md flex gap-3 ">
                    <Image
                        src="/home-2.png"
                        alt="home"
                        className=""
                        width={24}
                        height={24}
                    />
                    <p>Dashboard</p>
                </div>
                <div className="mt-1 py-2 pl-3 rounded-md cursor-pointer flex gap-3 bg-[var(--violet-dark)]">
                    <Image
                        src="/document-text.png"
                        alt="content"
                        className=""
                        width={24}
                        height={24}
                    />
                    <p className="text-white">Content</p>
                </div>
                <div className="mt-1 py-2 pl-3 rounded-md cursor-pointer flex gap-3">
                    <Image
                        src="/user-square.png"
                        alt="team"
                        className=""
                        width={24}
                        height={24}
                    />
                    <p>Team</p>
                </div>
                <div className="mt-1 py-2 pl-3 rounded-md cursor-pointer flex gap-3">
                    <Image
                        src="/profile-2user.png"
                        alt="team"
                        className=""
                        width={24}
                        height={24}
                    />
                    <p>User</p>
                </div>
                <div className="mt-1 py-2 pl-3 rounded-md cursor-pointer flex gap-3">
                    <Image
                        src="/monitor-mobbile.png"
                        alt="moniotor"
                        className=""
                        width={24}
                        height={24}
                    />
                    <p>App/Web</p>
                </div>
                <div className="mt-1 py-2 pl-3 rounded-md cursor-pointer flex gap-3">
                    <Image
                        src="/status-up.png"
                        alt="stat"
                        className=""
                        width={24}
                        height={24}
                    />
                    <p>Analytics</p>
                    <div className="bg-[var(--violet-light)] text-[var(--violet-dark)] rounded-full px-2 text-sm flex items-center justify-center ">3</div>
                </div>
                <div className="mt-1 py-2 pl-3 rounded-md cursor-pointer flex gap-3">
                    <Image
                        src="/video-square.png"
                        alt="video"
                        className=""
                        width={24}
                        height={24}
                    />
                    <p>Media</p>
                    <div className="bg-[var(--violet-light)] text-[var(--violet-dark)] rounded-full text-sm flex items-center justify-center px-1">18</div>
                </div>
                <div className="mt-1 py-2 pl-3 rounded-md cursor-pointer flex gap-3">
                    <Image
                        src="/notification.png"
                        alt="notification"
                        className=""
                        width={24}
                        height={24}
                    />
                    <p>Notification</p>
                </div>
                <div className="mt-1 py-2 pl-3 rounded-md cursor-pointer flex gap-3">
                    <Image
                        src="/Setting.png"
                        alt="setting"
                        className=""
                        width={24}
                        height={24}
                    />
                    <p>Settings</p>
                </div>
                <div className="mt-14 bg-[var(--violet-light)] py-2 pl-3 rounded-md cursor-pointer flex gap-3">
                    <Image
                        src="/fi_headphones.png"
                        alt="support"
                        className=""
                        width={24}
                        height={24}
                    />
                    <p>Contact Support</p>
                </div>
            </div>
        </div>
    )
}
