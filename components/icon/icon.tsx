import * as React from "react";
import {tuple} from '../_utils/tools'
const allSvg = require('../../icons/sprite.svg');
const SvgNames = tuple(
    "add",
    "alert",
    "arrowDown",
    "arrowLeft",
    "arrowLong",
    "arrowRight",
    "arrowUp",
    "barChart",
    "calculator",
    "calendar",
    "close",
    "delete",
    "diagram",
    "diagramBlock",
    "diagramCircle",
    "download",
    "edit",
    "exit",
    "fill",
    "filter",
    "fullScreen",
    "gear",
    "hide",
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
    "notification",
    "notification_off",
    "person",
    "play",
    "plus",
    "plusBlock",
    "print",
    "question",
    "rubbish",
    "search",
    "settings",
    "show",
    "sort",
    "success",
    "switch",
    "table",
    "tableUp",
    "tiles",
    "undo",
    "update-clock",
    "update",
    "warning"
);

export type SvgName = typeof SvgNames[number];

export interface IconProps {
    icon: SvgName;
    className?: string;
    style?;
    color?: string;
    size?: string;
}

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLElement>> {}

const InternalIcon: React.ForwardRefRenderFunction<unknown, IconProps> = (props, ref) => {
    const {
        icon,
        className,
        style,
        color,
        size
    } = props;

    return (
        <div className={className} style={style}>
            <svg width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill={color || '#293468'}>
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
