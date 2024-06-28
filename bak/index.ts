import {Global as GlobalCSS} from "@emotion/react"
import {useWindowSize} from "react-use"

import {Badge} from "./Badge"
import {Button} from "./Button"
import {Checkbox} from "./Checkbox"
import {Checkered} from "./Checkered"
import {Common} from "./Common"
import {Divider} from "./Divider"
import {Dropdown} from "./Dropdown"
import {Icon} from "./Icon"
import {Input} from "./Input"
import {Label} from "./Label"
import {Loading} from "./Loading"
import {Logo} from "./Logo"
import {Modal} from "./Modal"
import {New} from "./New"
import {NumberInput} from "./NumberInput"
import {Page} from "./Page"
import {Skeleton} from "./Skeleton"
import {Slider} from "./Slider"
import * as Snackbar from "./Snackbar"
import {Soon} from "./Soon"
import {Stars} from "./Stars"
import {Tooltip} from "./Tooltip"

export declare namespace Theme {
  /** Utilities */
  export {Common, GlobalCSS}

  /** Components */
  export {
    Badge,
    Divider,
    Icon,
    Loading,
    Logo,
    Page,
    Checkered,
    Slider,
    Skeleton,
    Button,
    Checkbox,
    Dropdown,
    New,
    Input,
    NumberInput,
    Modal,
    Tooltip,
    Soon,
    Stars,
    Snackbar,
    Label,
  }
}

export namespace Theme {
  Theme.Common = Common
  Theme.GlobalCSS = GlobalCSS

  Theme.Badge = Badge
  Theme.Divider = Divider
  Theme.Icon = Icon
  Theme.Loading = Loading
  Theme.Logo = Logo
  Theme.Checkered = Checkered
  Theme.New = New
  Theme.Page = Page
  Theme.Slider = Slider
  Theme.Skeleton = Skeleton
  Theme.Button = Button
  Theme.Checkbox = Checkbox
  Theme.Dropdown = Dropdown
  Theme.Input = Input
  Theme.NumberInput = NumberInput
  Theme.Stars = Stars
  Theme.Modal = Modal
  Theme.Soon = Soon
  Theme.Tooltip = Tooltip
  Theme.Snackbar = Snackbar
  Theme.Label = Label

  export const useDark = () => ({
    dark: true,
    systemPrefersDark: true,
  })
  export const useIsMobileDevice = () => {
    const size = useWindowSize()

    return size.width < 600
  }

  export const useDevice = () => {
    const size = useWindowSize()

    return size.width < 640 ? "small" : size.width <= 768 ? "medium" : "large"
  }
}
