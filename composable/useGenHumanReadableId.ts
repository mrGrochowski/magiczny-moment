export const useGenHumanReadableId = (id: string) => {
  //return id.split(':').pop()
  //return id.replace(/(^content\:_\d\.)(\w{1,})(\.md)/g,'$2')
  return id && id.replace(/(_\d\.)(\w{1,})/g,'$2')
}