import type { HtmlAttrs } from '@/shared/utils/types.ts'

export interface IUiSwitchTrigger {
  /**
   * @prop key: Used to define a ':key' for 'v-for' directive */
  key: string | number
  /**
   * @prop name: Text inside 'UI-Switch-Trigger' */
  name: string
  /**
   * @prop scopedWidgetClassMods [optional]:  the class-mods, scoped with 'UI-Switch' template styles module */
  scopedWidgetClassMods?: string[]
  /**
   * @prop classMods [optional]: the class-mods free from 'UI-Switch' template scope */
  classMods?: string[]
  /**
   * @prop {Record<string, HtmlAttrs>} attrs [optional]: additional HTML-friendly attributes (data-*, aria-*, role, etc.) */
  attrs?: Record<string, HtmlAttrs>
}

export interface IUiSwitchActiveTriggerCb {
  /**
   * @prop index: Index of the current 'Trigger' */
  index: number
  /**
   * @prop activeTab [optional]: 'Active-Tab' identifier matches with one of the 'keys' */
  activeTab?: string
  /**
   * @prop key [optional]: Key from {IUiSwitchTrigger} object transmitted to component */
  key?: string | number
}
