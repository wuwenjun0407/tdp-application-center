import { Component } from 'vue';
export default (app) => {
    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // 对符合'xx/xx.vue'组件格式的组件取组件名
    function validateFileName(str: string) {
        return /^\S+\.vue$/.test(str) && str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1));
    }

    const requireComponent: { [key: string]: Component | any } = import.meta.globEager('./*.vue');

    // 找到组件文件夹下以.vue命名的文件，如果文件名为index，那么取组件中的name作为注册的组件名
    Object.keys(requireComponent).forEach((filePath: string) => {
        const componentConfig = requireComponent[filePath];
        const fileName = validateFileName(filePath);
        const componentName = fileName.toLowerCase() === 'index' ? capitalizeFirstLetter(componentConfig.default.name) : fileName;
        app.component(componentName, componentConfig.default || componentConfig);
    });
};
