export function getImagePath(imageName: string): string {
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.app.baseURL || '/'
  
  return `${baseURL}images/${imageName}`
}
