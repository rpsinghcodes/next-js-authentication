import { useRouter } from "next/router";
import { useEffect } from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { isTokenVerified } from "../../util/token";
export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    isTokenVerified(token);
    if(!token) {
      router.push('/');
    }
  }, [])
  const handleMeetups = async (meetups) => {
    const res = await fetch("api/addmeetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({meetups, token: localStorage.getItem('token')}),
    });
    const result = await res.json();
    if(res.ok) {
      router.push('/')
    }
    console.log(result.message);
  };
  return (
    <>
    <Head>
      <title>New Meetups</title>
    </Head>
      <NewMeetupForm onAddMeetup={handleMeetups} />
    </>
  );
}
