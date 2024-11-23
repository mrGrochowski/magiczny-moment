export const useGenHumanReadableId = (id: string) => {
  return id && id.replace(/(_\d\.)(\w{1,})/g,'$2')
}

export const useSplitArray = (inputArray, splitter) => {
  const visibleArray = ref([]);
  const asideArray = ref([]);

  if (splitter > 0 && splitter < inputArray.length) {
    visibleArray.value = inputArray.slice(0, splitter);
    asideArray.value = inputArray.slice(splitter);
  } else {
    visibleArray.value = inputArray;
    asideArray.value = [];
  }

  return { visibleArray, asideArray };
}