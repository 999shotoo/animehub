"use client";

import { Undo2 } from "lucide-react";
import { Button } from "../ui/button";

function GoBackButton() {
    const handleClick = () => {
        window.history.back();
    };

    return (
        <>
            <Button onClick={handleClick} variant="outline" className="flex items-center gap-2">
                <Undo2 className="w-4 h-4" />
            </Button>
        </>
    );
}

export default GoBackButton;