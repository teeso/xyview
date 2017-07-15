import xyBtnStyle from './xyview/button/index'
import xyPreview from './xyview/preview'
import xyHeader from './xyview/headerBar'
import xyPrompt from './xyview/promptList'
import xyButtonTab from './xyview/buttonTab/buttonTab'
import xyButtonTabItem from './xyview/buttonTab/buttonTabItem'
import xyLoading from './xyview/loading'
import xySwiper from './xyview/swiper/swiper'
import xySwiperItem from './xyview/swiper/swiperItem'
import xyTab from './xyview/tab/tab'
import xyTabItem from './xyview/tab/tabItem'

const install = function (Vue) {
    if (install.installed) return;

    Vue.component(xyBtnStyle.name, xyBtnStyle);
    Vue.component(xyPreview.name, xyPreview);
    Vue.component(xyHeader.name, xyHeader);
    Vue.component(xyPrompt.name, xyPrompt);
    Vue.component(xyButtonTab.name, xyButtonTab);
    Vue.component(xyButtonTabItem.name, xyButtonTabItem);
    Vue.component(xyLoading.name, xyLoading);
    Vue.component(xySwiper.name, xySwiper);
    Vue.component(xySwiperItem.name, xySwiperItem);
    Vue.component(xyTab.name, xyTab);
    Vue.component(xyTabItem.name, xyTabItem);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export {
    install,

    xyBtnStyle,
    xyPreview,
    xyHeader,
    xyPrompt,
    xyButtonTab,
    xyButtonTabItem,
    xyLoading,
    xySwiper,
    xySwiperItem,
    xyTab,
    xyTabItem
};