import * as React from "react";
import {tuple} from '../_utils/tools'
const allSvg = require('../../icons/sprite.svg');
const SvgNames = tuple(
    "add",
    "addCheck",
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
    "barChartCheck",
    "calculator",
    "calculatorCheck",
    "calendar",
    "calendarFull",
    "checkbox",
    "checkboxDisabled",
    "checkboxFill",
    "checkStatus",
    "close",
    "cloudDownload",
    "cloudServer",
    "code",
    "compose",
    "delete",
    "diagram",
    "diagramBlock",
    "diagramCircle",
    "directory",
    "document",
    "doubleLeft",
    "doubleRight",
    "download",
    "dragAndDrop",
    "duplicate",
    "edit",
    "ellipsis",
    "exit",
    "exportFile",
    "file",
    "fileExcel",
    "fileWord",
    "fill",
    "filter",
    "filterCheck",
    "folder",
    "folderAdd",
    "folderOpen",
    "form",
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
    "plusBlockCheck",
    "print",
    "question",
    "radioButton",
    "radioButtonFill",
    "rubbish",
    "search",
    "searchCheck",
    "settings",
    "show",
    "sort",
    "sortCheck",
    "star",
    "starFull",
    "success",
    "switchOff",
    "switchOn",
    "table",
    "tableUp",
    "team",
    "tiles",
    "tools",
    "undo",
    "update-clock",
    "update",
    "updateTwoLine",
    "warning"
);
export type SvgName = typeof SvgNames[number];

const SizeTypes = tuple('xs', 's', 'm');
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
        color,
        size,
        customSize
    } = props;

    const newSize = (
        size === 'xs' ? '8' :
            size === 's' ? '12' :
                size === 'm' ? '24' :
                    customSize || undefined);

    return (
        <div
            className={className}
            style={{...props.style, cursor: "pointer", display: "inline-flex", alignItems: "center"}}
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
