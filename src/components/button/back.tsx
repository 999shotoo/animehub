"use client";

import { Undo2 } from "lucide-react";
import { Button } from "../ui/button";

function GoBackButton() {
    const handleClick = () => {
        window.history.back();
    };

    return (
        <>
            <div className="relative ">
                <div className="absolute top-4 left-4 z-10 flex items-center gap-4 ">
                    <Button onClick={handleClick} variant="outline" className="flex items-center gap-2 fixed mt-10">
                        <Undo2 className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </>
    );
}

export default GoBackButton;