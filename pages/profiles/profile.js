import Link from 'next/link';
import Image from 'next/image'

export default function Profile() {
    return (
        <>
            <div className="flex flex-row mb-20 mx-10">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap justify-center mt-10 bx-0">
                        <div class="w-full lg:w-4/12 px-4 lg:order-1">
                            <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                <div class="mr-4 p-3 text-center">
                                <span class="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span class="text-sm text-blueGray-400">Friends</span>
                                </div>
                                <div class="mr-4 p-3 text-center">
                                <span class="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span class="text-sm text-blueGray-400">Photos</span>
                                </div>
                                <div class="lg:mr-4 p-3 text-center">
                                <span class="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span class="text-sm text-blueGray-400">Comments</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                            <Image
                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                width="150vw"
                                height="150vw"
                                src="/assets/profile_photo.jpeg"
                                alt="Your Company"
                            />
                        </div>
                        <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-end">
                            <div class="py-6 px-3 mt-32 sm:mt-0 flex justify-end">
                                <button class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-lg px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                    Connect
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-12">
                        <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                            Jenna Stones
                        </h3>
                        <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                            Los Angeles, California
                        </div>
                    </div>
                    <div class="mt-10 py-10 border-y border-blueGray-200 text-center">
                        <div class="flex flex-wrap justify-center">
                        <div class="w-full lg:w-9/12 px-4">
                            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                            An artist of considerable range, Jenna the name taken by
                            Melbourne-raised, Brooklyn-based Nick Murphy writes,
                            performs and records all of his own music, giving it a
                            warm, intimate feel with a solid groove structure. An
                            artist of considerable range.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto my-10 px-10">
                        <div className="hover:shadow-2xl scale-100 hover:scale-110 ease-in duration-300">
                            <a href='/profiles/post'>
                                <Image
                                    className="rounded-2xl"
                                    layout="responsive"
                                    width="55vw"
                                    height="55vw"
                                    src="/assets/feet.jpeg"
                                    alt="Your Profile" 
                                />
                            </a>
                        </div>
                        <div className="hover:shadow-2xl scale-100 hover:scale-110 ease-in duration-300">
                            <a href='/profiles/post'>
                                <Image
                                    className="rounded-2xl"
                                    layout="responsive"
                                    width="55vw"
                                    height="55vw"
                                    src="/assets/feet.jpeg"
                                    alt="Your Profile" 
                                />
                            </a>    
                        </div>
                        <div className="hover:shadow-2xl scale-100 hover:scale-110 ease-in duration-300">
                            <a href='/profiles/post'>
                                <Image
                                    className="rounded-2xl"
                                    layout="responsive"
                                    width="55vw"
                                    height="55vw"
                                    src="/assets/feet.jpeg"
                                    alt="Your Profile" 
                                />
                            </a>    
                        </div>
                        <div className="hover:shadow-2xl scale-100 hover:scale-110 ease-in duration-300">
                            <a href='/profiles/post'>
                                <Image
                                    className="rounded-2xl"
                                    layout="responsive"
                                    width="55vw"
                                    height="55vw"
                                    src="/assets/feet.jpeg"
                                    alt="Your Profile" 
                                />
                            </a>    
                        </div>
                        <div className="hover:shadow-2xl scale-100 hover:scale-110 ease-in duration-300">
                            <a href='/profiles/post'>
                                <Image
                                    className="rounded-2xl"
                                    layout="responsive"
                                    width="55vw"
                                    height="55vw"
                                    src="/assets/feet.jpeg"
                                    alt="Your Profile" 
                                />
                            </a>    
                        </div>
                        <div className="hover:shadow-2xl scale-100 hover:scale-110 ease-in duration-300">
                            <a href='/profiles/post'>
                                <Image
                                    className="rounded-2xl"
                                    layout="responsive"
                                    width="55vw"
                                    height="55vw"
                                    src="/assets/feet.jpeg"
                                    alt="Your Profile" 
                                />
                            </a>    
                        </div>
                    </div>
                </div>
            </div>
        </>
      );
  };