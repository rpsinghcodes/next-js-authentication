import { ObjectId } from "mongodb";
import { MongoClient } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";


export default function MeetupDetails(props) {
  return (
    <>
    <Head>
      <title>{props.meetups[0].title}</title>
    </Head>
      <MeetupDetail {...props.meetups[0]} />
    </>
  );
}

export async function getStaticPaths() {
  const client = new MongoClient("mongodb://localhost:27017");
  const connection =  await client.connect();
  console.log('connection: ', connection)
  console.log("connected to db");
  const collection = client.db("Events").collection("event");
  const meetups = await collection.find({}, { _id: 1 }).toArray();
  // console.log('paths: ', paths);
  client.close();
  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const params = await context.params.meetupId;

  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  console.log("connected to database.");
  const db = client.db("Events");
  const collection = db.collection("event");
  console.log('params: ', params);
  const data = await collection.find({ _id: new ObjectId(params) }).toArray();
  client.close();

  // const meetups = data;
  return {
    props: {
      meetups: data.map((meetup) => ({
        title: meetup.title,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}
