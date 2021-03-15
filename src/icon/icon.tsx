import * as React from "react";
import {tuple} from '../_utils/tools'
import Add from '../svg/add.svg';
import AddCheck from '../svg/addCheck.svg';
import AddFile from '../svg/addFile.svg';
import Alert from '../svg/alert.svg';
import Ancore from '../svg/ancore.svg';
import ArrowBack from '../svg/arrow-back.svg';
import ArrowBackward from '../svg/arrow-backward.svg';
import ArrowDoubleReply from '../svg/arrow-double-reply.svg';
import ArrowDownCicle from '../svg/arrow-down-cicle.svg';
import ArrowDownCircle from '../svg/arrow-down-circle.svg';
import ArrowDownTable from '../svg/arrow-down-table.svg';
import ArrowLeftCicle from '../svg/arrow-left-cicle.svg';
import ArrowLeftCircle from '../svg/arrow-left-circle.svg';
import ArrowNext from '../svg/arrow-next.svg';
import ArrowReply from '../svg/arrow-reply.svg';
import ArrowRightCicle from '../svg/arrow-right-cicle.svg';
import ArrowSwap from '../svg/arrow-swap.svg';
import ArrowUpCicle from '../svg/arrow-up-cicle.svg';
import ArrowUpCircle from '../svg/arrow-up-circle.svg';
import ArrowDown from '../svg/arrowDown.svg';
import ArrowLeft from '../svg/arrowLeft.svg';
import ArrowLong from '../svg/arrowLong.svg';
import ArrowRight from '../svg/arrowRight.svg';
import ArrowsH from '../svg/arrows-h.svg';
import ArrowsV from '../svg/arrows-v.svg';
import ArrowUp from '../svg/arrowUp.svg';
import ArrowVerticalLeft from '../svg/arrowVerticalLeft.svg';
import ArrowVerticalRight from '../svg/arrowVerticalRight.svg';
import Asteriks from '../svg/asteriks.svg';
import AttachedFile from '../svg/attachedFile.svg';
import Backward from '../svg/backward.svg';
import Bank from '../svg/bank.svg';
import BarChartH from '../svg/bar-chart-h.svg';
import BarChart from '../svg/barChart.svg';
import BarChartCheck from '../svg/barChartCheck.svg';
import BaseServer from '../svg/base-server.svg';
import Base from '../svg/base.svg';
import BigGrid1 from '../svg/big-grid-1.svg';
import BigGrid from '../svg/big-grid.svg';
import Binokulars from '../svg/binokulars.svg';
import Block from '../svg/block.svg';
import BookFinance from '../svg/book-finance.svg';
import BookFormula from '../svg/book-formula.svg';
import BookUpload from '../svg/book-upload.svg';
import BookWarning from '../svg/book-warning.svg';
import Book from '../svg/book.svg';
import Branch from '../svg/branch.svg';
import Breifcase from '../svg/breifcase.svg';
import BringToFront from '../svg/bring-to-front.svg';
import Bug from '../svg/bug.svg';
import Building from '../svg/building.svg';
import Calculator from '../svg/calculator.svg';
import CalculatorCheck from '../svg/calculatorCheck.svg';
import CalendarCheck from '../svg/calendar-check.svg';
import CalendarDelete from '../svg/calendar-delete.svg';
import CalendarMinus from '../svg/calendar-minus.svg';
import CalendarPlus from '../svg/calendar-plus.svg';
import Calendar from '../svg/calendar.svg';
import CalendarFull from '../svg/calendarFull.svg';
import Camera from '../svg/camera.svg';
import CaretDown from '../svg/caret-down.svg';
import CaretLeft from '../svg/caret-left.svg';
import CaretRight from '../svg/caret-right.svg';
import CaretSquareDown from '../svg/caret-square-down.svg';
import CaretSquareLeft from '../svg/caret-square-left.svg';
import CaretSquareRight from '../svg/caret-square-right.svg';
import CaretSquareUp from '../svg/caret-square-up.svg';
import CaretUp from '../svg/caret-up.svg';
import ChatBubblesQuestion from '../svg/chat-bubbles-question.svg';
import ChatDialog from '../svg/chat-dialog.svg';
import ChatHelp from '../svg/chat-help.svg';
import ChatOff from '../svg/chat-off.svg';
import ChatWarning from '../svg/chat-warning.svg';
import Chat from '../svg/chat.svg';
import Checkbox from '../svg/checkbox.svg';
import CheckboxDisabled from '../svg/checkboxDisabled.svg';
import CheckboxFill from '../svg/checkboxFill.svg';
import CheckStatus from '../svg/checkStatus.svg';
import Cicle from '../svg/cicle.svg';
import CircleO from '../svg/circle-o.svg';
import Clip from '../svg/clip.svg';
import Clipboard from '../svg/clipboard.svg';
import Clock from '../svg/clock.svg';
import CloseMenu from '../svg/close-menu.svg';
import Close from '../svg/close.svg';
import CloudUpload from '../svg/cloud-upload.svg';
import Cloud from '../svg/cloud.svg';
import CloudDownload from '../svg/cloudDownload.svg';
import CloudServer from '../svg/cloudServer.svg';
import CodeHtml from '../svg/code-html.svg';
import Code from '../svg/code.svg';
import Colorpicker from '../svg/colorpicker.svg';
import Comment from '../svg/comment.svg';
import Compose from '../svg/compose.svg';
import Connect from '../svg/connect.svg';
import Contact from '../svg/contact.svg';
import Cookies from '../svg/cookies.svg';
import Copy from '../svg/copy.svg';
import Cub from '../svg/cub.svg';
import Cut from '../svg/cut.svg';
import DarkTheme from '../svg/dark-theme.svg';
import DataHistogram from '../svg/data-histogram.svg';
import DataLine from '../svg/data-line.svg';
import DateScatter from '../svg/date-scatter.svg';
import Delete from '../svg/delete.svg';
import Design from '../svg/design.svg';
import Desktop from '../svg/desktop.svg';
import DeveloperBoard from '../svg/developer-board.svg';
import Diagram from '../svg/diagram.svg';
import DiagramBlock from '../svg/diagramBlock.svg';
import DiagramCircle from '../svg/diagramCircle.svg';
import Directory from '../svg/directory.svg';
import Disconnect from '../svg/disconnect.svg';
import DocumentList from '../svg/document-list.svg';
import Document from '../svg/document.svg';
import Documents from '../svg/documents.svg';
import Dotted from '../svg/dotted.svg';
import DoubleDown from '../svg/double-down.svg';
import DoubleUp from '../svg/double-up.svg';
import DoubleLeft from '../svg/doubleLeft.svg';
import DoubleRight from '../svg/doubleRight.svg';
import Download from '../svg/download.svg';
import Drag from '../svg/drag.svg';
import DragAndDrop from '../svg/dragAndDrop.svg';
import Duplicate from '../svg/duplicate.svg';
import Edit from '../svg/edit.svg';
import Eject from '../svg/eject.svg';
import Ellipsis from '../svg/ellipsis.svg';
import Email from '../svg/email.svg';
import EnvelopeEmailSquare from '../svg/envelope-email-square.svg';
import Erase from '../svg/erase.svg';
import Eur from '../svg/eur.svg';
import Exit from '../svg/exit.svg';
import ExportFile from '../svg/exportFile.svg';
import ExternalLinkSquare from '../svg/external-link-square.svg';
import ExternalLink from '../svg/external-link.svg';
import FastBackward from '../svg/fast-backward.svg';
import FastForward from '../svg/fast-forward.svg';
import Fax from '../svg/fax.svg';
import FileAi from '../svg/file-ai.svg';
import FileDelete from '../svg/file-delete.svg';
import FileDownload from '../svg/file-download.svg';
import FileEps from '../svg/file-eps.svg';
import FileMinus from '../svg/file-minus.svg';
import FilePdf from '../svg/file-pdf.svg';
import FilePng from '../svg/file-png.svg';
import FilePpt from '../svg/file-ppt.svg';
import FileSearch from '../svg/file-search.svg';
import FileSvg from '../svg/file-svg.svg';
import FileText from '../svg/file-text.svg';
import FileUpload from '../svg/file-upload.svg';
import FileXml from '../svg/file-xml.svg';
import FileZip from '../svg/file-zip.svg';
import File from '../svg/file.svg';
import FileExcel from '../svg/fileExcel.svg';
import Files from '../svg/files.svg';
import FileWord from '../svg/fileWord.svg';
import Fill from '../svg/fill.svg';
import Filter from '../svg/filter.svg';
import FilterCheck from '../svg/filterCheck.svg';
import Flag from '../svg/flag.svg';
import Flash from '../svg/flash.svg';
import FolderDelete from '../svg/folder-delete.svg';
import FolderDownload from '../svg/folder-download.svg';
import FolderMinus from '../svg/folder-minus.svg';
import FolderPublic from '../svg/folder-public.svg';
import FolderUpload from '../svg/folder-upload.svg';
import FolderZip from '../svg/folder-zip.svg';
import Folder from '../svg/folder.svg';
import FolderAdd from '../svg/folderAdd.svg';
import FolderOpen from '../svg/folderOpen.svg';
import Form from '../svg/form.svg';
import Fort from '../svg/fort.svg';
import Forward from '../svg/forward.svg';
import FullScreen from '../svg/fullScreen.svg';
import FullScreenUnDo from '../svg/fullScreenUnDo.svg';
import Gbp from '../svg/gbp.svg';
import Gear from '../svg/gear.svg';
import Gift from '../svg/gift.svg';
import Globe from '../svg/globe.svg';
import GraduationCap from '../svg/graduation-cap.svg';
import Hdd from '../svg/hdd.svg';
import Heart from '../svg/heart.svg';
import Hide from '../svg/hide.svg';
import Home from '../svg/home.svg';
import HideCheck from '../svg/hideCheck.svg';
import Hourglass from '../svg/hourglass.svg';
import Image from '../svg/image.svg';
import Important from '../svg/important.svg';
import ImportFile from '../svg/importFile.svg';
import Info from '../svg/info.svg';
import Journal from '../svg/journal.svg';
import Key from '../svg/key.svg';
import Keyboard from '../svg/keyboard.svg';
import Legend from '../svg/legend.svg';
import Letter from '../svg/letter.svg';
import Lightbulbt from '../svg/lightbulbt.svg';
import LinkRemove from '../svg/link-remove.svg';
import Link from '../svg/link.svg';
import List from '../svg/list.svg';
import LocationMap from '../svg/location-map.svg';
import Location from '../svg/location.svg';
import LockOpen from '../svg/lock-open.svg';
import Lock from '../svg/lock.svg';
import MapSigns from '../svg/map-signs.svg';
import Map from '../svg/map.svg';
import Mark from '../svg/mark.svg';
import Menu1 from '../svg/menu-1.svg';
import Menu2 from '../svg/menu-2.svg';
import Menu3 from '../svg/menu-3.svg';
import Menu4 from '../svg/menu-4.svg';
import Menu5 from '../svg/menu-5.svg';
import MenuOpen from '../svg/menuOpen.svg';
import MinusCircle from '../svg/minus-circle.svg';
import MinusSquare from '../svg/minus-square.svg';
import Minus from '../svg/minus.svg';
import Money from '../svg/money.svg';
import More from '../svg/more.svg';
import Move from '../svg/move.svg';
import MoveDown from '../svg/moveDown.svg';
import MoveUp from '../svg/moveUp.svg';
import News from '../svg/news.svg';
import Note from '../svg/note.svg';
import Notebook from '../svg/notebook.svg';
import Notepad from '../svg/notepad.svg';
import Notification from '../svg/notification.svg';
import NotificationOff from '../svg/notificationOff.svg';
import OpenFolder from '../svg/open-folder.svg';
import PauseCircle from '../svg/pause-circle.svg';
import PauseFilled from '../svg/pause-filled.svg';
import Pause from '../svg/pause.svg';
import Percent from '../svg/percent.svg';
import Person from '../svg/person.svg';
import Phone1 from '../svg/phone-1.svg';
import PhoneDesktop from '../svg/phone-desktop.svg';
import Phone from '../svg/phone.svg';
import Pin from '../svg/pin.svg';
import PlayArrow from '../svg/play-arrow.svg';
import PlayFilled from '../svg/play-filled.svg';
import Play from '../svg/play.svg';
import PlusSquare from '../svg/plus-square.svg';
import Plus from '../svg/plus.svg';
import Plus2 from '../svg/plus2.svg';
import PlusBlock from '../svg/plusBlock.svg';
import PlusBlockCheck from '../svg/plusBlockCheck.svg';
import Pointer from '../svg/pointer.svg';
import Power from '../svg/power.svg';
import Print from '../svg/print.svg';
import Qcode from '../svg/qcode.svg';
import Question from '../svg/question.svg';
import Question2 from '../svg/question2.svg';
import RadioButton from '../svg/radioButton.svg';
import RadioButtonFill from '../svg/radioButtonFill.svg';
import Repeat from '../svg/repeat.svg';
import Rub from '../svg/rub.svg';
import Rubbish from '../svg/rubbish.svg';
import Save from '../svg/save.svg';
import SearchIn from '../svg/search-in.svg';
import SearchOut from '../svg/search-out.svg';
import Search from '../svg/search.svg';
import SearchCheck from '../svg/searchCheck.svg';
import Send from '../svg/send.svg';
import Sertificat from '../svg/sertificat.svg';
import Server from '../svg/server.svg';
import Settings from '../svg/settings.svg';
import Share from '../svg/share.svg';
import Show from '../svg/show.svg';
import SingUp from '../svg/sing-up.svg';
import Skalefit from '../svg/skalefit.svg';
import Sort from '../svg/sort.svg';
import SortCheck from '../svg/sortCheck.svg';
import Speed from '../svg/speed.svg';
import Spinner from '../svg/spinner.svg';
import Star from '../svg/star.svg';
import StarFull from '../svg/starFull.svg';
import Status from '../svg/status.svg';
import StopCircle from '../svg/stop-circle.svg';
import StopFilled from '../svg/stop-filled.svg';
import Success from '../svg/success.svg';
import SwitchOff from '../svg/switchOff.svg';
import SwitchOn from '../svg/switchOn.svg';
import SystemSettings from '../svg/system-settings.svg';
import TableColumn from '../svg/table-column.svg';
import TableRows from '../svg/table-rows.svg';
import Table from '../svg/table.svg';
import Table2 from '../svg/table2.svg';
import Tablet from '../svg/tablet.svg';
import TableUp from '../svg/tableUp.svg';
import Tag from '../svg/tag.svg';
import Tags from '../svg/tags.svg';
import Target from '../svg/target.svg';
import Tasks from '../svg/tasks.svg';
import Team from '../svg/team.svg';
import TextBulletListSearch from '../svg/text-bullet-list-search.svg';
import TextBulletList from '../svg/text-bullet-list.svg';
import TextNumberList from '../svg/text-number-list.svg';
import Tiles from '../svg/tiles.svg';
import Timer from '../svg/timer.svg';
import Toolbox from '../svg/toolbox.svg';
import Tools from '../svg/tools.svg';
import Try from '../svg/try.svg';
import Undo from '../svg/undo.svg';
import UpdateClock from '../svg/update-clock.svg';
import Update from '../svg/update.svg';
import UpdateTwoLine from '../svg/updateTwoLine.svg';
import Upload from '../svg/upload.svg';
import Usd from '../svg/usd.svg';
import UserAdd from '../svg/user-add.svg';
import UserDelete from '../svg/user-delete.svg';
import VideoCamera from '../svg/video-camera.svg';
import VideoSquare from '../svg/video-square.svg';
import WarningTriangle from '../svg/warning-triangle.svg';
import Warning from '../svg/warning.svg';
import Wifi from '../svg/wifi.svg';

const SvgMap = {
    "add": Add,
    "addCheck": AddCheck,
    "addFile": AddFile,
    "alert": Alert,
    "ancore": Ancore,
    "arrow-back": ArrowBack,
    "arrow-backward": ArrowBackward,
    "arrow-double-reply": ArrowDoubleReply,
    "arrow-down": ArrowDown,
    "arrow-down-cicle": ArrowDownCicle,
    "arrow-down-circle": ArrowDownCircle,
    "arrow-down-table": ArrowDownTable,
    "arrow-left-cicle": ArrowLeftCicle,
    "arrow-left-circle": ArrowLeftCircle,
    "arrow-next": ArrowNext,
    "arrow-reply": ArrowReply,
    "arrow-right-cicle": ArrowRightCicle,
    "arrow-swap": ArrowSwap,
    "arrow-up": ArrowUp,
    "arrow-up-cicle": ArrowUpCicle,
    "arrow-up-circle": ArrowUpCircle,
    "arrowDown": ArrowDown,
    "arrowLeft": ArrowLeft,
    "arrowLong": ArrowLong,
    "arrowRight": ArrowRight,
    "arrowUp": ArrowUp,
    "arrowVerticalLeft": ArrowVerticalLeft,
    "arrowVerticalRight": ArrowVerticalRight,
    "arrows-h": ArrowsH,
    "arrows-v": ArrowsV,
    "asteriks": Asteriks,
    "attachedFile": AttachedFile,
    "backward": Backward,
    "bank": Bank,
    "bar-chart-h": BarChartH,
    "barChart": BarChart,
    "barChartCheck": BarChartCheck,
    "base": Base,
    "base-server": BaseServer,
    "big-grid": BigGrid,
    "big-grid-1": BigGrid1,
    "binokulars": Binokulars,
    "block": Block,
    "book": Book,
    "book-finance": BookFinance,
    "book-formula": BookFormula,
    "book-upload": BookUpload,
    "book-warning": BookWarning,
    "branch": Branch,
    "breifcase": Breifcase,
    "bring-to-front": BringToFront,
    "bug": Bug,
    "building": Building,
    "calculator": Calculator,
    "calculatorCheck": CalculatorCheck,
    "calendar": Calendar,
    "calendar-check": CalendarCheck,
    "calendar-delete": CalendarDelete,
    "calendar-minus": CalendarMinus,
    "calendar-plus": CalendarPlus,
    "calendarFull": CalendarFull,
    "camera": Camera,
    "caret-down": CaretDown,
    "caret-left": CaretLeft,
    "caret-right": CaretRight,
    "caret-square-down": CaretSquareDown,
    "caret-square-left": CaretSquareLeft,
    "caret-square-right": CaretSquareRight,
    "caret-square-up": CaretSquareUp,
    "caret-up": CaretUp,
    "chat": Chat,
    "chat-bubbles-question": ChatBubblesQuestion,
    "chat-dialog": ChatDialog,
    "chat-help": ChatHelp,
    "chat-off": ChatOff,
    "chat-warning": ChatWarning,
    "checkStatus": CheckStatus,
    "checkbox": Checkbox,
    "checkboxDisabled": CheckboxDisabled,
    "checkboxFill": CheckboxFill,
    "cicle": Cicle,
    "circle-o": CircleO,
    "clip": Clip,
    "clipboard": Clipboard,
    "clock": Clock,
    "close": Close,
    "close-menu": CloseMenu,
    "cloud": Cloud,
    "cloud-upload": CloudUpload,
    "cloudDownload": CloudDownload,
    "cloudServer": CloudServer,
    "code": Code,
    "code-html": CodeHtml,
    "colorpicker": Colorpicker,
    "comment": Comment,
    "compose": Compose,
    "connect": Connect,
    "contact": Contact,
    "cookies": Cookies,
    "copy": Copy,
    "cub": Cub,
    "cut": Cut,
    "dark-theme": DarkTheme,
    "data-histogram": DataHistogram,
    "data-line": DataLine,
    "date-scatter": DateScatter,
    "delete": Delete,
    "design": Design,
    "desktop": Desktop,
    "developer-board": DeveloperBoard,
    "diagram": Diagram,
    "diagramBlock": DiagramBlock,
    "diagramCircle": DiagramCircle,
    "directory": Directory,
    "disconnect": Disconnect,
    "document": Document,
    "document-list": DocumentList,
    "documents": Documents,
    "dotted": Dotted,
    "double-down": DoubleDown,
    "double-up": DoubleUp,
    "doubleLeft": DoubleLeft,
    "doubleRight": DoubleRight,
    "download": Download,
    "drag": Drag,
    "drag-and-drop": DragAndDrop,
    "dragAndDrop": DragAndDrop,
    "duplicate": Duplicate,
    "edit": Edit,
    "eject": Eject,
    "ellipsis": Ellipsis,
    "email": Email,
    "envelope-email-square": EnvelopeEmailSquare,
    "erase": Erase,
    "eur": Eur,
    "exit": Exit,
    "exportFile": ExportFile,
    "external-link": ExternalLink,
    "external-link-square": ExternalLinkSquare,
    "fast-backward": FastBackward,
    "fast-forward": FastForward,
    "fax": Fax,
    "file": File,
    "file-ai": FileAi,
    "file-delete": FileDelete,
    "file-download": FileDownload,
    "file-eps": FileEps,
    "file-minus": FileMinus,
    "file-pdf": FilePdf,
    "file-png": FilePng,
    "file-ppt": FilePpt,
    "file-search": FileSearch,
    "file-svg": FileSvg,
    "file-text": FileText,
    "file-upload": FileUpload,
    "file-xml": FileXml,
    "file-zip": FileZip,
    "fileExcel": FileExcel,
    "fileWord": FileWord,
    "files": Files,
    "fill": Fill,
    "filter": Filter,
    "filterCheck": FilterCheck,
    "flag": Flag,
    "flash": Flash,
    "folder": Folder,
    "folder-delete": FolderDelete,
    "folder-download": FolderDownload,
    "folder-minus": FolderMinus,
    "folder-public": FolderPublic,
    "folder-upload": FolderUpload,
    "folder-zip": FolderZip,
    "folderAdd": FolderAdd,
    "folderOpen": FolderOpen,
    "form": Form,
    "fort": Fort,
    "forward": Forward,
    "fullScreen": FullScreen,
    "fullScreenUnDo": FullScreenUnDo,
    "gbp": Gbp,
    "gear": Gear,
    "gift": Gift,
    "globe": Globe,
    "graduation-cap": GraduationCap,
    "hdd": Hdd,
    "heart": Heart,
    "hide": Hide,
    "hideCheck": HideCheck,
    "home": Home,
    "hourglass": Hourglass,
    "image": Image,
    "importFile": ImportFile,
    "important": Important,
    "info": Info,
    "journal": Journal,
    "key": Key,
    "keyboard": Keyboard,
    "legend": Legend,
    "letter": Letter,
    "lightbulbt": Lightbulbt,
    "link": Link,
    "link-remove": LinkRemove,
    "list": List,
    "location": Location,
    "location-map": LocationMap,
    "lock": Lock,
    "lock-open": LockOpen,
    "map": Map,
    "map-signs": MapSigns,
    "mark": Mark,
    "menu-1": Menu1,
    "menu-2": Menu2,
    "menu-3": Menu3,
    "menu-4": Menu4,
    "menu-5": Menu5,
    "menuOpen": MenuOpen,
    "minus": Minus,
    "minus-circle": MinusCircle,
    "minus-square": MinusSquare,
    "money": Money,
    "more": More,
    "move": Move,
    "moveDown": MoveDown,
    "moveUp": MoveUp,
    "news": News,
    "note": Note,
    "notebook": Notebook,
    "notepad": Notepad,
    "notification": Notification,
    "notificationOff": NotificationOff,
    "open-folder": OpenFolder,
    "pause": Pause,
    "pause-circle": PauseCircle,
    "pause-filled": PauseFilled,
    "percent": Percent,
    "person": Person,
    "phone": Phone,
    "phone-1": Phone1,
    "phone-desktop": PhoneDesktop,
    "pin": Pin,
    "play": Play,
    "play-arrow": PlayArrow,
    "play-filled": PlayFilled,
    "plus": Plus,
    "plus-square": PlusSquare,
    "plus2": Plus2,
    "plusBlock": PlusBlock,
    "plusBlockCheck": PlusBlockCheck,
    "pointer": Pointer,
    "power": Power,
    "print": Print,
    "qcode": Qcode,
    "question": Question,
    "question2": Question2,
    "radioButton": RadioButton,
    "radioButtonFill": RadioButtonFill,
    "repeat": Repeat,
    "rub": Rub,
    "rubbish": Rubbish,
    "save": Save,
    "search": Search,
    "search-in": SearchIn,
    "search-out": SearchOut,
    "searchCheck": SearchCheck,
    "send": Send,
    "sertificat": Sertificat,
    "server": Server,
    "settings": Settings,
    "share": Share,
    "show": Show,
    "sing-up": SingUp,
    "skalefit": Skalefit,
    "sort": Sort,
    "sortCheck": SortCheck,
    "speed": Speed,
    "spinner": Spinner,
    "star": Star,
    "starFull": StarFull,
    "status": Status,
    "stop-circle": StopCircle,
    "stop-filled": StopFilled,
    "success": Success,
    "switchOff": SwitchOff,
    "switchOn": SwitchOn,
    "system-settings": SystemSettings,
    "table": Table,
    "table-column": TableColumn,
    "table-rows": TableRows,
    "table2": Table2,
    "tableUp": TableUp,
    "tablet": Tablet,
    "tag": Tag,
    "tags": Tags,
    "target": Target,
    "tasks": Tasks,
    "team": Team,
    "text-bullet-list": TextBulletList,
    "text-bullet-list-search": TextBulletListSearch,
    "text-number-list": TextNumberList,
    "tiles": Tiles,
    "timer": Timer,
    "toolbox": Toolbox,
    "tools": Tools,
    "try": Try,
    "undo": Undo,
    "update": Update,
    "update-clock": UpdateClock,
    "updateTwoLine": UpdateTwoLine,
    "upload": Upload,
    "usd": Usd,
    "user-add": UserAdd,
    "user-delete": UserDelete,
    "video-camera": VideoCamera,
    "video-square": VideoSquare,
    "warning": Warning,
    "warning-triangle": WarningTriangle,
    "wifi": Wifi
};

export type SvgName = keyof typeof SvgMap;
const SizeTypes = tuple('xs', 's', 'm');
export type SizeType = typeof SizeTypes[number];

export interface IconProps {
    icon: SvgName;
    className?: string;
    color?: string;
    size?: SizeType;
    customSize?: string;
    style?: any;
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

    const Icon = SvgMap[icon];

    return (
        <div
            className={className}
            style={{...props.style, cursor: "pointer", display: "inline-flex", alignItems: "center"}}
        >
            <Icon width={newSize || "16"} height={newSize || "16"} viewBox="0 0 24 24" fill={color || '#293468'} />
        </div>
    )
};

const NeoIcon = React.forwardRef<unknown, IconProps>(InternalIcon) as CompoundedComponent;

NeoIcon.displayName = 'NeoIcon';

NeoIcon.defaultProps = {
};

export default NeoIcon

