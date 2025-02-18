import * as React from "react";
import { forwardRef } from "react";
import { Keybind, keybindToString } from "../../config/config";
import { getIconLink } from "../../config/configUtils";

interface PlayerButtonProps {
    baseID: string;
    title: string;
    imageName: string;
    keybind?: Keybind;
    isDraggable?: boolean;
    show?: boolean;
    onClick?: () => void;
}

const PlayerButtonComponent = forwardRef<HTMLButtonElement, PlayerButtonProps>(function (
    { baseID, title, imageName, keybind, isDraggable = false, show = true, onClick },
    ref
) {
    return (
        <button
            ref={ref}
            id={baseID + "Button"}
            className="playerButton bpx-player-ctrl-btn"
            style={{ maxWidth: "40px", display: show ? "unset" : "none" }}
            draggable={isDraggable}
            onClick={onClick}
        >
            <img
                id={baseID + "Image"}
                className="playerButtonImage bpx-player-ctrl-btn-icon"
                src={chrome.runtime.getURL("icons/" + getIconLink(imageName))}
                draggable={isDraggable}
            ></img>
            <div className="playerButtonTooltip">
                {chrome.i18n.getMessage(title)}
                {keybind ? ` (${keybindToString(keybind)})` : ""}
            </div>
        </button>
    );
});
PlayerButtonComponent.displayName = "PlayerButtonComponent";

export default PlayerButtonComponent;
