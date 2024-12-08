import { onMounted, ref, type VNode } from 'vue';
import { debounce } from 'lodash-es';


const calculateChildrensSpaceTaken = (childrens, menuContainerGap) => {
  return childrens.reduce((acc, child) => {
    const childCompStyles = window.getComputedStyle(child);
    const childMargins = parseInt(childCompStyles.getPropertyValue('margin-right').match(/\d+/)[0]) + parseInt(childCompStyles.getPropertyValue('margin-left').match(/\d+/)[0]);

    return acc + child.offsetWidth + childMargins;
  }, 0) + menuContainerGap * childrens.length - menuContainerGap;
}

export default (menuContainer: VNode, childrens: VNode[]) => {

  const widthForDispalingChildrens = ref(0);
  const childrensWidth = ref(0);

  onMounted(() => {

    const menuContainerCompStyles = window.getComputedStyle(menuContainer.value);
    const menuContainerPaddingHorizontal = Number(menuContainerCompStyles.getPropertyValue('padding-left').match(/\d+/)[0]) + Number(menuContainerCompStyles.getPropertyValue('padding-right').match(/\d+/)[0]);
    const menuContainerGap = Number(menuContainerCompStyles.getPropertyValue('row-gap').match(/\d+/)[0]);

    widthForDispalingChildrens.value = menuContainer.value.offsetWidth - menuContainerPaddingHorizontal;

    childrensWidth.value = calculateChildrensSpaceTaken(childrens.value, menuContainerGap)

    window.addEventListener('resize', debounce(() => {
      widthForDispalingChildrens.value = menuContainer.value.offsetWidth - menuContainerPaddingHorizontal;

      childrensWidth.value = calculateChildrensSpaceTaken(childrens.value, menuContainerGap)

    }, 50))

  })
  return 0
}