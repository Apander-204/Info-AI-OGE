import { Input } from "@/components/base/input/input";
import { Button } from "@/components/base/buttons/button";

export const HomeScreen = () => {

    return (
        <div className="prose w-full flex justify-center">
            <div className="flex flex-col items-center gap-5">
                <h1>Log In</h1>
                <Input isRequired label="Email" placeholder="example@gmail.com" tooltip="Write your email" />
                <Input isRequired label="Password" placeholder="password" tooltip="Write your password" />
                <Button color="primary" >Submit</Button>
            </div>
        </div>
    );
};
