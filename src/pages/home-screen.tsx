import { Input } from "@/components/base/input/input";
import { Button } from "@/components/base/buttons/button";
import { useState } from "react";

export const HomeScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="prose w-full flex justify-center">
            <div className="flex flex-col items-center gap-5">
                <h1>Log In</h1>
                <Input isRequired label="Email" placeholder="example@gmail.com" tooltip="Write your email" value={email} onChange={(e) => setEmail(e)}/>
                <Input isRequired label="Password" placeholder="password" tooltip="Write your password" value={password} onChange={(e) => setPassword(e)} />
                <Button color="primary" href="/main" isDisabled={email==="" || password===""} >Submit</Button>
            </div>
        </div>
    );
};
