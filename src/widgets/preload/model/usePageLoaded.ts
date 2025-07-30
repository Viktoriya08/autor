export const usePageLoaded = () => {
  return useState('pageLoaded', () => (new Map()))
}
