import { Input } from "@/components/base/input/input";
import { Toggle } from "@/components/base/toggle/toggle";

export const HomeScreen = () => {

    return (
        <div className="">
            <Input isRequired label="Email" hint="This is a hint text to help user." placeholder="olivia@untitledui.com" tooltip="This is a tooltip" />
            <Toggle label="Remember me" hint="Save my login details for next time." size="sm" />
        </div>
    );
};
