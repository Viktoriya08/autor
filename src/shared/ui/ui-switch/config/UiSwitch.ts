import type { NullishHTMLElem } from '@/shared/utils/types'

/**
 * @class UiSwitch
 * @description The '<UiSwitch>' component's main logic realization.
 * */
export default class UiSwitch {
  private static readonly CNST_ACTIVE_TRIGGER_SELECTOR = '[data-ui-switch="trigger"][aria-pressed="true"], [data-ui-switch="trigger"][data-ui-switch-active-trigger]'
  private static readonly CNST_UPDATE_INITIAL_ACTIVE_TAB_STATE_MINIMAL_DELAY = 10

  private _switch: HTMLElement
  private _indicator: NullishHTMLElem

  /**
   * @constructor
   * @param {HTMLElement} uiSwitch Element that is the main 'Ui-Switch' block
   * */
  constructor(uiSwitch: HTMLElement) {
    this._switch = uiSwitch
    this._indicator = this._switch.querySelector('[data-ui-switch="indicator"]')
  }

  /**
   * Public method: init()
   * @description Initiates the 'Ui-Switch' component's logic.
   * ~~~
   * @returns {void}
   * */
  public init(): void {
    this._switch.addEventListener('click', this._onClick)

    const activeTrigger: NullishHTMLElem = this._switch.querySelector('[data-ui-switch="trigger"][data-ui-switch-active-trigger]')

    if (activeTrigger) {
      setTimeout(() => this._onChangeActive(activeTrigger), UiSwitch.CNST_UPDATE_INITIAL_ACTIVE_TAB_STATE_MINIMAL_DELAY)
    } else {
      const firstTrigger: HTMLButtonElement = this._switch.querySelector('[data-ui-switch="trigger"]')!
      setTimeout(() => this._onChangeActive(firstTrigger), UiSwitch.CNST_UPDATE_INITIAL_ACTIVE_TAB_STATE_MINIMAL_DELAY)
    }
  }

  /**
   * Public method: destroy()
   * @description Detached the 'Ui-Switch' mounted component's logic.
   * ~~~
   * @returns {void}
   * */
  public destroy(): void {
    this._switch.removeEventListener('click', this._onClick)
  }

  /**
   * Public method: reinit()
   * @description Re-initiates the 'Ui-Switch' component's logic.
   * ~~~
   * @returns {void}
   * */
  public reinit(): void {
    this.destroy()
    this.init()
  }

  /**
   * Private method: _changeTriggerState()
   * @description Used to change the state of the desired 'Trigger'.
   * ~~~
   * @param {HTMLElement | HTMLButtonElement} trigger 'Trigger' element to change the state.
   * @returns {{toActive(): void, toDefault(): void}}
   * */
  private _changeTriggerState(
    trigger: HTMLElement | HTMLButtonElement
  ): { toActive(): void, toDefault(): void } {
    return {
      toActive() {
        trigger.setAttribute('aria-pressed', 'true')
        trigger.setAttribute('data-ui-switch-active-trigger', '')
      },

      toDefault() {
        trigger.setAttribute('aria-pressed', 'false')
        trigger.removeAttribute('data-ui-switch-active-trigger')
      },
    }
  }

  /**
   * Private method: _setActiveTrigger()
   * @description Used to set the 'Active-Trigger'.
   * ~~~
   * @param {HTMLElement | HTMLButtonElement} newActiveTrigger 'Trigger' element to become 'Active'.
   * @returns {void}
   * */
  private _setActiveTrigger(newActiveTrigger: HTMLElement | HTMLButtonElement): void {
    const prevActiveTrigger: NullishHTMLElem = this._switch.querySelector(UiSwitch.CNST_ACTIVE_TRIGGER_SELECTOR)

    if (prevActiveTrigger) {
      this._changeTriggerState(prevActiveTrigger).toDefault()
    }

    this._changeTriggerState(newActiveTrigger).toActive()
  }

  /**
   * Private callback: _onClick
   * @description Callback to 'click' event for the 'Switch'.
   * ~~~
   * @param {Event} e The 'click' event. Mostly, the 'MouseEvent'.
   * @returns {void}
   * */
  private _onClick = (e: Event): void => {
    e.preventDefault()

    const target = e.target as HTMLElement
    const trigger: HTMLElement | null = target.closest('[data-ui-switch="trigger"]')

    if (!trigger) {
      return
    }

    if (this._indicator) {
      this._indicator.style.setProperty('width', `${trigger.clientWidth}px`)
      this._indicator.style.setProperty('left', `${trigger.offsetLeft}px`)
    }

    this._setActiveTrigger(trigger)
  }

  private _onChangeActive = (el: HTMLElement): void => {

    const target = el
    const trigger: HTMLElement | null = target.closest('[data-ui-switch="trigger"]')

    if (!trigger) {
      return
    }

    if (this._indicator) {
      this._indicator.style.setProperty('width', `${trigger.clientWidth}px`)
      this._indicator.style.setProperty('left', `${trigger.offsetLeft}px`)
    }

    this._setActiveTrigger(trigger)
  }
}
