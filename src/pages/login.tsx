import { useContext, useEffect, useState } from "react"
import type { NextPage } from "next"
import { UserContext } from "../contexts/UserContext"
import PageHeading from "../components/PageHeading"
import LoginForm from "../components/login-page/LoginForm"
import axios from "axios";
import { UNSPLASH_API } from "../constants/constants"
import Picture from "../components/Picture"

const Login: NextPage = () => {
    const { username } = useContext(UserContext)
    const [picture, setPicture] = useState(null)

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
            <div className="mt-20  mr-80 absolute top-0 right-[60px]">
                {username ? (
                    <p className="text-9xl  font-bold">
                        Welcome {" "}
                        <span className="text-cyan-500 font-semibold">{username}</span> 👋
                    </p>
                ) : (
                    <>
                        <PageHeading extraClasses="text-center mb-8">Log in</PageHeading>
                        <LoginForm />
                    </>
                )}
            </div>
        </div >

    )
}

export default Login