import * as React from "react";
import {tuple} from '../_utils/tools'
const allSvg = require('../../icons/sprite.svg');
const SvgNames = tuple(
    "add",
    "addFile",
    "alert",
    "arrowDown",
    "arrowLeft",
    "arrowLong",
    "arrowRight",
    "arrowUp",
    "arrowVerticalLeft",
    "arrowVerticalRight",
    "attachedFile",
    "barChart",
    "calculator",
    "calendar",
    "calendarFull",
    "checkbox",
    "checkboxFill",
    "close",
    "cloudServer",
    "code",
    "delete",
    "diagram",
    "diagramBlock",
    "diagramCircle",
    "download",
    "duplicate",
    "edit",
    "exit",
    "exportFile",
    "fill",
    "filter",
    "fullScreen",
    "fullScreenUnDo",
    "gear",
    "hide",
    "importFile",
    "info",
    "journal",
    "legend",
    "letter",
    "list",
    "mark",
    "menu-1",
    "menu-2",
    "menu-3",
    "menu-4",
    "menu-5",
    "menuOpen",
    "more",
    "moveDown",
    "moveUp",
    "notification",
    "notificationOff",
    "person",
    "play",
    "plus",
    "plusBlock",
    "print",
    "question",
    "radioButton",
    "radioButtonFill",
    "rubbish",
    "search",
    "settings",
    "show",
    "sort",
    "star",
    "starFull",
    "success",
    "switchOff",
    "switchOn",
    "table",
    "tableUp",
    "tiles",
    "undo",
    "update-clock",
    "update",
    "warning"
);
export type SvgName = typeof SvgNames[number];

const SizeTypes = tuple('s', 'm');
export type SizeType = typeof SizeTypes[number];

export interface IconProps {
    icon: SvgName;
    className?: string;
    style?;
    color?: string;
    size?: SizeType;
    customSize?: string;
}

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLElement>> {}

const InternalIcon: React.ForwardRefRenderFunction<unknown, IconProps> = (props, ref) => {
    const {
        icon,
        className,
        style,
        color,
        size,
        customSize
    } = props;

    const newSize = (
        size === 's' ? '8' :
            size === 'm' ? '24' :
                customSize || undefined);

    return (
        <div
            className={className}
            style={{...props.style, cursor: "pointer"}}
        >
            <svg width={newSize || "16"} height={newSize || "16"} viewBox="0 0 24 24" fill={color || '#293468'}>
                <use xlinkHref={`${allSvg}#${icon}`} />
            </svg>
        </div>
    )
};

const NeoIcon = React.forwardRef<unknown, IconProps>(InternalIcon) as CompoundedComponent;

NeoIcon.displayName = 'NeoIcon';

NeoIcon.defaultProps = {
};

export default NeoIcon
