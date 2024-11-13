export const useGenHumanReadableId = (id: string) => {
  return id && id.replace(/(_\d\.)(\w{1,})/g,'$2')
}