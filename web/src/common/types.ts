export interface ICvGlobalInfo {
  firstName: string
  lastName: string
  post: string
  address?: string
  tel?: string
  mail: string
  github?: string
}

export interface ICvData {
  global: ICvGlobalInfo
}
