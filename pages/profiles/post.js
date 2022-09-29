import Link from 'next/link';
import Image from 'next/image'

import {ChatBubbleLeftIcon, HeartIcon, ShareIcon, BookmarkIcon} from '@heroicons/react/24/outline'

export default function Post() {
    return (
        <>
            <div class="h-full w-full flex items-center justify-center mt-2 lg:mt-6 mb-4">
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
                                <time datetime="06-08-21" class="text-xs">06 August at 09.15 PM
                                </time>
                            </div>
                        </div>
                    </div>
                    <div class="my-2">Hello guys ?</div>
                        <Image
                            className="rounded-2xl"
                            layout="responsive"
                            width="1vw"
                            height="1vw"
                            src="/assets/feet.jpeg"
                            alt="Your Profile" 
                        />
                        <div class="container grid grid-cols-4 sm:grid-cols-4 my-6">
                            <div>
                                <ChatBubbleLeftIcon className="h-6 w-6 mx-auto" aria-hidden="true" />
                                <div class="text-xs text-center">10 Comments</div>
                            </div>
                            <div>
                                <HeartIcon className="h-6 w-6 mx-auto" aria-hidden="true" />
                                <div class="text-xs text-center">5 Likes</div>
                            </div>
                            <div>
                                <ShareIcon className="h-6 w-6 mx-auto" aria-hidden="true" />
                                <div class="text-xs text-center">Share</div>
                            </div>
                            <div>
                                <BookmarkIcon className="h-6 w-6 mx-auto" aria-hidden="true" />
                                <div class="text-xs text-center">Save</div>
                            </div>
                        </div>
                        <div class="flex mt-4">
                            <Image class="rounded-full" src="/assets/profile_photo.jpeg" width="55vw" height="55vw"/>
                            <div class="h-11 w-10/12 border rounded-2xl overflow-hidden ml-4">
                                <input type="text" class="h-full w-full rounded-2xl" placeholder="  Write your comment..." name="comment"/>
                            </div>
                        </div>
                </div>
            </div>
        </>
      );
  };