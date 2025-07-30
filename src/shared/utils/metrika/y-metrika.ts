import { YM_ID } from '@/shared/config'

declare const window: any

export const actionMetric = (action: string) => {
  if (typeof window !== 'undefined' && typeof window.ym !== 'undefined') {
    process.env.NODE_ENV === 'production'
      ? window.ym(YM_ID, 'reachGoal', action)
      : console.log(`actionMetric: ${action} for ${YM_ID}`)
  }
}
