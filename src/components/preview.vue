<style>

</style>
<template>
    <div id="preview">
        <!--显示图片的占位-->
        <xy-preview ref="previewer" class="mui-fullscreen"></xy-preview>
        <!--图片列表,点击图片打开详情图片-->
        <img class="previewer-img" v-for="(item, index) in imgs" :key="index" :src="item.src" width="100" @click="show(index)">
    </div>
</template>
<script>   
// 参数说明
// imgs:[{src:'...',title:'...'},{src:'...',title:'...'},...]
// src 图片路径,不为空
// title 图片下方显示的介绍说明,可为空
export default {
    data() {
        return {
            imgs: [
                {
                    src: require('../assets/logo.png'),
                    title: '什么'
                },
                {
                    src: require('../assets/p1.jpg'),
                    title: '什么'
                },
                {
                    src: require('../assets/p2.jpg'),
                    title: '什么'
                },
                {
                    src: require('../assets/p3.jpg'),
                    title: '什么'
                },
            ],
            list: null,
        }
    },
    methods: {
        show(index) {
            let list = [
                {
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494484569&di=ca0f556611089513191251ceab4c3217&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.xiaomayi88.com%2Fuploads%2Fimg%2F140411%2F97-14041113555Q96.jpg',
                    title: '百度图片'
                },
                {
                    src: 'https://placekitten.com/800/400',
                    title: '这里写一段话'
                },
                {
                    src: 'https://placekitten.com/1200/900',
                }];
            // 转64位,看情况
            // this.imgs.map(v => {
            //     this.convertImgToBase64(v.src, str64 => v.src = str64, 'image/jpg')
            // })
            // 固定写法
            this.$refs.previewer.show(index, document.querySelectorAll('.previewer-img'), this.imgs);

        },

        convertImgToBase64(url, callback, outputFormat) {
            var canvas = document.createElement('CANVAS'),
                ctx = canvas.getContext('2d'),
                img = new Image;
            img.crossOrigin = 'Anonymous';
            img.onload = function() {
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0);
                var dataURL = canvas.toDataURL(outputFormat || 'image/png');
                callback.call(this, dataURL);
                canvas = null;
            };
            img.src = url;
        }
    }
}
</script>