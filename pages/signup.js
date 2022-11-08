import { useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect} from "react";
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { signIn } from 'next-auth/react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router'


export default function SignupPage() {
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(true);

    const router = useRouter()

    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                router.push('/profiles/profile')
            } 
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.currentTarget.password.value !== e.currentTarget.passwordRepeat.value) {
            setErrorMsg("Passwords do not match")
        } else {
            const body = {
                email: e.currentTarget.email.value,
                username: e.currentTarget.name.value,
                password: e.currentTarget.password.value
            };
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            if (res.status === 201) {
                const userObj = await res.json();
                const status = await signIn('credentials', {
                    redirect: false,
                    email: email,
                    password: password,
                });
            } else {
                setErrorMsg(await res.text());
            }
        }
    };

  return (
    <>
        <div className="w-full mx-auto max-w-md space-y-8 m-10 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
                <Image
                width="230vw"
                height="230vw"
                src="/assets/footish-no-bg.png"
                alt="Your Company"
                />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up
            </h2>
            {errorMsg && 
                <div class="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700" role="alert">
                <InformationCircleIcon className="h-6 w-6" aria-hidden="true" />
                <div>
                    <span class="font-medium ml-3">{errorMsg}</span>
                </div>
                </div>
            }
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Email address"
                    />
                    <div>
                    <label htmlFor="username" className="sr-only">
                        Username
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="username"
                        autoComplete="username"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Username"
                    />
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                    />
                    </div>
                    </div>
                    <div>
                    <label htmlFor="passwordRepeat" className="sr-only">
                        Repeat password
                    </label>
                    <input
                        id="passwordRepeat"
                        name="passwordRepeat"
                        type="password"
                        autoComplete="passwordRepeat"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Repeat Password"
                    />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                    </label>
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                    Sign up
                    </button>
                </div>
                <Link href="home" className="font-medium text-indigo-600 hover:text-indigo-500">
                    <button
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    </span>
                    I already have an account
                    </button>
                </Link>
            </form>
        </div>
    </>
  )
}