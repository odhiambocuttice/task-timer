import type { NextPage } from "next";
import SignupForm from "../components/signup-page/SignupForm";
import PageHeading from "../components/PageHeading";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UNSPLASH_API } from "../constants/constants";
import Picture from "../components/Picture";
import { UserContext } from "../contexts/UserContext"
import Alert from "../components/Alert"

const Signup: NextPage = () => {
  const [picture, setPicture] = useState(null)
  const { username } = useContext(UserContext)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(UNSPLASH_API);
      setPicture(res.request.responseURL);
    };

    fetchData();
  }, []);

  return (
    <div className=" bg-zinc-900 h-full relative">
      {picture !== null ? (
        <Picture
          src={picture}
          alt="Picture of the author"
          extraClasses=""
        />
      ) : (
        <div className=" bg-zinc-900 h-full" />
      )}
      <div className="mt-20  mr-80 absolute top-0 right-[60px] ">
        {username ? (
          <Alert type="success">You are logged in as {username}</Alert>
        ) : (
          <>
            <PageHeading extraClasses="text-center mb-8 mr-8">
              Create an account
            </PageHeading>
            <SignupForm />
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
