declare module 'vtex.styleguide' {
    export const Alert
    export const Layout
    export const PageBlock
    export const PageHeader
    export const Table
    export const Input
    export const Spinner
    export const Button
    export const ButtonPlain
    export const ButtonWithIcon
    export const Collapsible
    export const Dropdown
    export const Toggle
    export const Modal
    export const NumericStepper
    export const ModalDialog
    export const ActionMenu
    export const EXPERIMENTAL_Select
    export const IconCheck
    export const IconOptionsDots
    export const IconSuccess
    export const IconClear
    export const IconArrowBack
    export const IconCaretLeft
    export const IconCaretRight
    export const IconCaretDown
    export const IconDelete
    export const IconGrid
    export const IconInlineGrid
    export const IconInfo
    export const IconSearch
    export const IconWarning
    export const IconFailure
    export const IconClose
    export const IconPlus
    export const IconExternalLink
    export const InputSearch
    export const Textarea
    export const DatePicker
    export const Checkbox
    export const ToastContext
    export const ToastProvider
    export const FloatingActionBar
    export const EmptyState
    export const Tooltip
    export const EXPERIMENTAL_Table
    export const EXPERIMENTAL_useTableMeasures
    export const EXPERIMENTAL_useTableProportion
    export interface CheckboxTree<T> {
      checkedItems: T[]
      disabledItems: T[]
      uncheck: (item: T | Tree<T>) => void
      isChecked: (item: T | Tree<T>) => boolean
      isPartiallyChecked: (item: T | Tree<T>) => boolean
      isDisabled: (item: T | Tree<T>) => boolean
      toggle: (item: T | Tree<T>) => boolean
      allChecked: boolean
      someChecked: boolean
      toggleAll: () => void
      uncheckAll: () => void
    }
    export const EXPERIMENTAL_useCheckboxTree: <T>(options: {
      items: T[] | Array<{ id: string; children: T[] }>
      comparator: (item: T) => (candidate: T) => boolean
    }) => CheckboxTree<T>
    export const EXPERIMENTAL_useTableVisibility
    export const EXPERIMENTAL_useTableSort
    export const RadioGroup
    export const Dropzone
    export const Progress
    export const AutocompleteOption
    export const Tab
    export const Tabs
   
    export interface CellData<C> {
      rowHeight: number
      data: C
      motion: {
        transition?: string
        willChange?: string
      }
      density: Density
    }
}