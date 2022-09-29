import Link from 'next/link';
import Image from 'next/image'

import {ChatBubbleLeftIcon, HeartIcon, ShareIcon, BookmarkIcon} from '@heroicons/react/24/outline'

export default function Post() {
    return (
        <>
            <div class="h-full w-full flex items-center justify-center my-10">
                <div class="w-10/12">
                    <div class="flex items-center justify-between">
                        <div class="gap-3.5	flex items-center ">
                            <Image
                                className="rounded-full"
                                width="55vw"
                                height="55vw"
                                src="/assets/profile_photo.jpeg"
                                alt="Your Profile"
                            />
                            <div class="flex flex-col">
                                <b class="mb-2 capitalize">sofia müller</b>
                                <time datetime="06-08-21" class="text-gray-400 text-xs">06 August at 09.15 PM
                                </time>
                            </div>
                        </div>
                    </div>
                    <div class="whitespace-pre-wrap my-7">Hello guys ?</div>
                        <Image
                            className="rounded-2xl"
                            layout="responsive"
                            width="55vw"
                            height="55vw"
                            src="/assets/feet.jpeg"
                            alt="Your Profile" 
                        />
                        <div class="container grid grid-cols-2 sm:grid-cols-4 h-16 my-8">
                            <div class="mx-auto">
                                <ChatBubbleLeftIcon className="h-6 w-6" aria-hidden="true" />
                                <div class="text-sm	">10 Comments</div>
                            </div>
                            <div class="mx-auto">
                                <HeartIcon className="h-6 w-6" aria-hidden="true" />
                                <div class="text-sm">5 Likes</div>
                            </div>
                            <div class="mx-auto">
                                <ShareIcon className="h-6 w-6" aria-hidden="true" />
                                <div class="text-sm">Share</div>
                            </div>
                            <div class="mx-auto">
                                <BookmarkIcon className="h-6 w-6" aria-hidden="true" />
                                <div class="text-sm">Saved</div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between mt-4">
                            <Image class="rounded-full" src="/assets/profile_photo.jpeg" width="55vw" height="55vw"/>
                            <div class="h-11 w-10/12 border rounded-2xl overflow-hidden">
                                <input type="text" class="h-full w-full outline-none rounded-2xl" placeholder="  Write your comment..." name="comment"/>
                            </div>
                        </div>
                </div>
            </div>
        </>
      );
  };