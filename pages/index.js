import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateToken, Login } from "../store";
import { isTokenVerified } from "../util/token";

export default function HomePage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    const userName = localStorage.getItem("userName") || "";

    if (token.length > 10) {
      dispatch(Login({ isLogedIn: true, username: userName, token: token }));
    }
    dispatch(updateToken({ token: token }));
    isTokenVerified(token);
  }, []);
  return (
    <>
      {" "}
      <Head>
        <title>All Meetups</title>
      </Head>{" "}
      <MeetupList meetups={props.meetups || []} />
    </>
  );
}
export async function getStaticProps() {
  try {
    const client = new MongoClient("mongodb://localhost:27017");
    const connection = await client.connect();
    console.log("connection: ", connection);
    console.log("connected to database.");
    const db = client.db("Events");
    const collection = db.collection("event");
    const data = await collection.find({}).toArray();
    client.close();

    const meetups = data;
    return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup.title,
          description: meetup.description,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      },
    };
  } catch (err) {
    console.log("got an error.");
    return {
      props: {
        message: "got an error.",
      },
    };
  }
}
